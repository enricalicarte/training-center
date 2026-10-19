import sys, os, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
ROOT=os.path.join(os.path.dirname(__file__),'..','dist'); OUT=os.path.join(os.path.dirname(__file__),'..','shots')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
with sync_playwright() as p:
    b=p.chromium.launch()
    for w,h in [(1280,900),(390,844)]:
        pg=b.new_page(viewport={'width':w,'height':h}); errs=[]
        pg.on('pageerror',lambda e:errs.append(str(e))); pg.on('console',lambda m:errs.append(m.text) if m.type=='error' else None)
        pg.goto(f'http://127.0.0.1:{port}/index.html'); pg.wait_for_timeout(4000)
        pg.screenshot(path=f'{OUT}/hubtop_{w}.png')
        for y in range(0,6000,500): pg.evaluate(f'scrollTo(0,{y})'); pg.wait_for_timeout(120)
        pg.evaluate('scrollTo(0,0)'); pg.wait_for_timeout(300)
        pg.screenshot(path=f'{OUT}/hub_{w}.png',full_page=True); print(w,errs)
    b.close()
