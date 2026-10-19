"""Capturas de sesiones para verificación visual.
Uso: python3 tools/shots.py <id> [nivel] [instantes...]   → shots/<id>_e<N>_l<L>.png + hoja de contacto
"""
import sys, os, json, http.server, threading, socketserver, functools
from playwright.sync_api import sync_playwright

ROOT = os.path.join(os.path.dirname(__file__), '..', 'dist')
OUT = os.path.join(os.path.dirname(__file__), '..', 'shots')
os.makedirs(OUT, exist_ok=True)

class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

def serve():
    handler = functools.partial(Quiet, directory=ROOT)
    srv = socketserver.TCPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv, srv.server_address[1]

def main():
    sid = sys.argv[1]
    levels = [int(x) for x in sys.argv[2].split(',')] if len(sys.argv) > 2 else [1, 2, 3]
    times = [float(x) for x in sys.argv[3].split(',')] if len(sys.argv) > 3 else [None]
    srv, port = serve()
    with sync_playwright() as p:
        b = p.chromium.launch(args=["--use-gl=swiftshader", "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist"])
        pg = b.new_page(viewport={'width': 960, 'height': 600})
        errs = []
        pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.on('console', lambda m: errs.append('console:' + m.text) if m.type == 'error' else None)
        pg.goto(f'http://127.0.0.1:{port}/{sid}.html'); pg.wait_for_timeout(900)
        pg.screenshot(path=f'{OUT}/{sid}_setup.png')
        n = pg.evaluate('window.__k.EXS.length')
        for e in range(n):
            for lv in levels:
                info = pg.evaluate(f'(()=>{{const k=window.__k; const l=k.EXS[{e}].levels[{lv}-1]; return {{dur: l.unit==="rep"? l.n*(l.repT||3): l.n, name: k.EXS[{e}].name}}}})()')
                ts = times if times != [None] else [info['dur'] * f for f in (0.12, 0.3, 0.5, 0.7)]
                for i, t in enumerate(ts):
                    pg.evaluate(f'window.__k.show({e},{lv},{t if times!=[None] else t})')
                    pg.wait_for_timeout(450)
                    pg.evaluate('document.querySelector("#panel").style.display="none"; document.querySelector("#top").style.display="none"')
                    pg.screenshot(path=f'{OUT}/{sid}_e{e+1}_l{lv}_t{i}.png', clip={'x':0,'y':0,'width':960,'height':600})
                    pg.evaluate('document.querySelector("#panel").style.display=""; document.querySelector("#top").style.display=""')
        print('errors:', errs[:5])
        b.close()
    srv.shutdown()

main()
