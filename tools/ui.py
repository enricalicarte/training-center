"""Capturas de interfaz: python3 tools/ui.py <id> [WxH]"""
import sys, os, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
ROOT = os.path.join(os.path.dirname(__file__), '..', 'dist'); OUT = os.path.join(os.path.dirname(__file__), '..', 'shots')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv = socketserver.TCPServer(('127.0.0.1',0), functools.partial(Q, directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
port = srv.server_address[1]
sid = sys.argv[1]
sizes = [tuple(map(int, s.split('x'))) for s in (sys.argv[2:] or ['1280x720'])]
with sync_playwright() as p:
    b = p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    for (w,h) in sizes:
        pg = b.new_page(viewport={'width':w,'height':h}, device_scale_factor=1)
        errs=[]; pg.on('pageerror', lambda e: errs.append(str(e)))
        pg.goto(f'http://127.0.0.1:{port}/{sid}.html'); pg.wait_for_timeout(1000)
        pg.screenshot(path=f'{OUT}/ui_{sid}_{w}x{h}_setup.png')
        pg.evaluate('window.__k.show(0,2,1.2)'); pg.wait_for_timeout(600)
        pg.screenshot(path=f'{OUT}/ui_{sid}_{w}x{h}_session.png')
        print(w,h,errs[:3]); pg.close()
    b.close()
