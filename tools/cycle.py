"""Un ciclo de repetición en 8 fotogramas: python3 tools/cycle.py <sesion> <ej#(0..)> <nivel> [lado] → shots/cyc_<sesion>_<ej>_<nivel>.png"""
import sys, os, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
from PIL import Image
ROOT=os.path.join(os.path.dirname(__file__),'..','dist'); OUT=os.path.join(os.path.dirname(__file__),'..','shots')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
sid=sys.argv[1]; jobs=[(int(a.split(':')[0]),int(a.split(':')[1])) for a in sys.argv[2].split(',')]; side=sys.argv[3] if len(sys.argv)>3 else '1'
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    pg=b.new_page(viewport={'width':1100,'height':700}); pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/{sid}.html'); pg.wait_for_timeout(800)
    for e,lv in jobs:
        per=pg.evaluate(f'window.__k.EXS[{e}].levels[{lv}-1].repT||3'); name=pg.evaluate(f'window.__k.EXS[{e}].name')
        ims=[]
        for i in range(8):
            pg.evaluate(f'window.__k.show({e},{lv},{per*(1.0+i/8)},{side})'); pg.wait_for_timeout(350)
            pg.locator('canvas').first.screenshot(path=f'{OUT}/_t.png'); im=Image.open(f'{OUT}/_t.png'); ims.append(im.resize((300,int(300*im.height/im.width))))
        h=ims[0].height; W=Image.new('RGB',(1200,2*h))
        for i,im in enumerate(ims): W.paste(im,((i%4)*300,(i//4)*h))
        W.save(f'{OUT}/cyc_{sid}_{e}_{lv}.png'); print(name,per)
