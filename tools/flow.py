import sys, os, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
ROOT=os.path.join(os.path.dirname(__file__),'..','dist'); OUT=os.path.join(os.path.dirname(__file__),'..','shots')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    for sid in sys.argv[1:]:
        pg=b.new_page(viewport={'width':1280,'height':720}); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e)))
        pg.goto(f'http://127.0.0.1:{port}/{sid}.html'); pg.wait_for_timeout(800)
        pg.click('text=Comenzar sesión'); pg.wait_for_timeout(500)
        pg.click('text=Iniciar ejercicio'); pg.wait_for_timeout(6500)
        pg.screenshot(path=f'{OUT}/flow_{sid}.png'); print(sid,errs)
        pg.close()
    b.close()
