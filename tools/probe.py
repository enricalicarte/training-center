import sys, os, json, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
ROOT=os.path.join(os.path.dirname(__file__),'..','dist')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
out=[]
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader","--ignore-gpu-blocklist"])
    for sid in sys.argv[1:]:
        pg=b.new_page(viewport={'width':600,'height':400}); pg.goto(f'http://127.0.0.1:{port}/{sid}.html'); pg.wait_for_timeout(600)
        n=pg.evaluate('window.__k.EXS.length')
        for i in range(n):
            for lv in (1,2,3):
                for side in (-1,1):
                    r=pg.evaluate(f'window.__k.probe({i},{lv},{side},10)'); r['s']=sid; out.append(r)
        pg.close()
    b.close()
json.dump(out,open('shots/probe.json','w'))
bad=[r for r in out if r['maxRotDegPerFrame']>25 or r['maxPosPerFrame']>0.045]
print(len(out),'casos;',len(bad),'sospechosos')
seen=set()
for r in bad:
    k=(r['s'],r['name'],r['level'])
    if k in seen: continue
    seen.add(k); print(r['s'],r['name'],'L',r['level'],'rot',r['maxRotDegPerFrame'],r['bone'],'@',r['atT'],'pos',r['maxPosPerFrame'],'under',r['underGround'],'seam',r['seamDeg'])
