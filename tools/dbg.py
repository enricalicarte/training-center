import sys, os, json, functools, http.server, socketserver, threading
from playwright.sync_api import sync_playwright
ROOT=os.path.join(os.path.dirname(__file__),'..','dist')
class Q(http.server.SimpleHTTPRequestHandler):
    def log_message(self,*a): pass
srv=socketserver.TCPServer(('127.0.0.1',0),functools.partial(Q,directory=ROOT)); threading.Thread(target=srv.serve_forever,daemon=True).start()
port=srv.server_address[1]
sid,i,lv,side,t0,t1=sys.argv[1],int(sys.argv[2]),int(sys.argv[3]),int(sys.argv[4]),float(sys.argv[5]),float(sys.argv[6])
JS="""([i,lv,side,t0,t1])=>{const k=window.__k;const ex=k.EXS[i];const L=Object.assign({},ex.levels[lv-1],{L:lv,ex:i});
const dur=L.unit==='rep'?L.n*L.repT:L.n;const av=k.stage.avatar;const ctx={side,dur,ex:i};
const mod=k.__step;const out=[];let prev=null;
for(let t=0,n=0;t<t1;t+=1/60,n++){k.step(av,ex.mode,t,ctx,L,1/60,n===0);
 if(t>=t0){const q=av.ALL.map(b=>b.getWorldQuaternion(new b.quaternion.constructor()));
 let m=0,mb=0;if(prev)q.forEach((x,j)=>{const a=2*Math.acos(Math.min(1,Math.abs(x.dot(prev[j]))))*57.2958;if(a>m){m=a;mb=j}});
 out.push([+t.toFixed(3),+av.root.position.y.toFixed(3),+av.root.position.z.toFixed(3),+m.toFixed(1),av.ALL[mb].name||mb]);prev=q}else{prev=av.ALL.map(b=>b.getWorldQuaternion(new b.quaternion.constructor()))}}
return out}"""
with sync_playwright() as p:
    b=p.chromium.launch(args=["--use-gl=swiftshader","--enable-unsafe-swiftshader"])
    pg=b.new_page(); pg.goto(f'http://127.0.0.1:{port}/{sid}.html'); pg.wait_for_timeout(500)
    r=pg.evaluate(JS,[i,lv,side,t0,t1])
    for row in r: print(row)
