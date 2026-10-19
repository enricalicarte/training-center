"""Hoja por sesión: cada ejercicio = 1 fila de 6 fotogramas de un ciclo. python3 tools/allcyc.py <sesion> [nivel]"""
import sys, os, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
from PIL import Image, ImageDraw
ROOT=os.path.join(os.path.dirname(__file__),'..','dist'); OUT=os.path.join(os.path.dirname(__file__),'..','shots')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
sid=sys.argv[1]; lv=int(sys.argv[2]) if len(sys.argv)>2 else 2; N=6; CW=220
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    pg=b.new_page(viewport={'width':1100,'height':700}); pg.goto(f'http://127.0.0.1:{srv.server_address[1]}/{sid}.html'); pg.wait_for_timeout(800)
    n=pg.evaluate('window.__k.EXS.length'); rows=[]
    for e in range(n):
        l=pg.evaluate(f'(()=>{{const x=window.__k.EXS[{e}].levels[{lv}-1];return [x.repT||3,x.sides?1:0]}})()'); per=l[0]
        ims=[]
        for i in range(N):
            pg.evaluate(f'window.__k.show({e},{lv},{per*(1.0+i/N)},1)'); pg.wait_for_timeout(250)
            pg.locator('canvas').first.screenshot(path=f'{OUT}/_t_{sid}.png'); im=Image.open(f'{OUT}/_t_{sid}.png'); ims.append(im.resize((CW,int(CW*im.height/im.width))))
        name=pg.evaluate(f'window.__k.EXS[{e}].name'); h=ims[0].height
        R=Image.new('RGB',(CW*N,h))
        for i,im in enumerate(ims): R.paste(im,(i*CW,0))
        ImageDraw.Draw(R).text((6,6),f'{e}. {name}',fill=(255,255,255)); rows.append(R)
    W=Image.new('RGB',(CW*N,sum(r.height for r in rows))); y=0
    for r in rows: W.paste(r,(0,y)); y+=r.height
    W.save(f'{OUT}/all_{sid}_{lv}.png'); print('ok',W.size)
