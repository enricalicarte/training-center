(()=>{var Oc=0,Ko=1,Bc=2;var Ri=1,kc=2,hs=3,fi=0,Yt=1,yn=2,Nn=0,us=1,Ys=2,jo=3,Qo=4,zc=5;var Ci=100,Vc=101,Gc=102,Hc=103,Wc=104,Xc=200,qc=201,Yc=202,$c=203,el=204,tl=205,Jc=206,Zc=207,Kc=208,jc=209,Qc=210,eh=211,th=212,nh=213,ih=214,Br=0,kr=1,zr=2,Qi=3,Vr=4,Gr=5,Hr=6,Wr=7,nl=0,sh=1,rh=2,Mn=0,il=1,sl=2,rl=3,$s=4,al=5,ol=6,ll=7;var cl=300,pi=301,Pi=302,_a=303,xa=304,Js=306,es=1e3,Pn=1001,Xr=1002,Pt=1003,ah=1004;var Zs=1005;var Nt=1006,va=1007;var mi=1008;var Qt=1009,hl=1010,ul=1011,ds=1012,ya=1013,Sn=1014,bn=1015,wn=1016,Ma=1017,Sa=1018,fs=1020,dl=35902,fl=35899,pl=1021,ml=1022,ln=1023,In=1026,gi=1027,gl=1028,ba=1029,_i=1030,wa=1031;var Ta=1033,Ks=33776,js=33777,Qs=33778,er=33779,Ea=35840,Aa=35841,Ra=35842,Ca=35843,Pa=36196,Ia=37492,La=37496,Na=37488,Da=37489,tr=37490,Ua=37491,Fa=37808,Oa=37809,Ba=37810,ka=37811,za=37812,Va=37813,Ga=37814,Ha=37815,Wa=37816,Xa=37817,qa=37818,Ya=37819,$a=37820,Ja=37821,Za=36492,Ka=36494,ja=36495,Qa=36283,eo=36284,nr=36285,to=36286;var Ps=2300,qr=2301,Fr=2302,Wo=2303,Xo=2400,qo=2401,Yo=2402;var oh=3200;var no=0,lh=1,Wn="",Ht="srgb",Is="srgb-linear",Ls="linear",lt="srgb";var Or=7680;var ch=519,hh=512,uh=513,dh=514,io=515,fh=516,ph=517,so=518,mh=519,gh=35044;var _l="300 es",xn=2e3,ts=2001;function $u(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ju(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ns(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function _h(){let n=Ns("canvas");return n.style.display="block",n}var gc={},ns=null;function xl(...n){let e="THREE."+n.shift();ns?ns("log",e,...n):console.log(e,...n)}function xh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function He(...n){n=xh(n);let e="THREE."+n.shift();if(ns)ns("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=xh(n);let e="THREE."+n.shift();if(ns)ns("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ei(...n){let e=n.join(" ");e in gc||(gc[e]=!0,He(...n))}function vh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var yh={[Br]:kr,[zr]:Hr,[Vr]:Wr,[Qi]:Gr,[kr]:Br,[Hr]:zr,[Wr]:Vr,[Gr]:Qi},Ln=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Mo=Math.PI/180,Yr=180/Math.PI;function ir(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function tt(n,e,t){return Math.max(e,Math.min(t,n))}function Zu(n,e){return(n%e+e)%e}function So(n,e,t){return(1-t)*n+t*e}function Ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bl=class bl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};bl.prototype.isVector2=!0;var Qe=bl,kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let c=i[s+0],o=i[s+1],h=i[s+2],p=i[s+3],u=r[a+0],d=r[a+1],_=r[a+2],y=r[a+3];if(p!==y||c!==u||o!==d||h!==_){let m=c*u+o*d+h*_+p*y;m<0&&(u=-u,d=-d,_=-_,y=-y,m=-m);let f=1-l;if(m<.9995){let A=Math.acos(m),L=Math.sin(A);f=Math.sin(f*A)/L,l=Math.sin(l*A)/L,c=c*f+u*l,o=o*f+d*l,h=h*f+_*l,p=p*f+y*l}else{c=c*f+u*l,o=o*f+d*l,h=h*f+_*l,p=p*f+y*l;let A=1/Math.sqrt(c*c+o*o+h*h+p*p);c*=A,o*=A,h*=A,p*=A}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],h=i[s+3],p=r[a],u=r[a+1],d=r[a+2],_=r[a+3];return e[t]=l*_+h*p+c*d-o*u,e[t+1]=c*_+h*u+o*p-l*d,e[t+2]=o*_+h*d+l*u-c*p,e[t+3]=h*_-l*p-c*u-o*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(s/2),p=l(r/2),u=c(i/2),d=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*p+o*d*_,this._y=o*d*p-u*h*_,this._z=o*h*_+u*d*p,this._w=o*h*p-u*d*_;break;case"YXZ":this._x=u*h*p+o*d*_,this._y=o*d*p-u*h*_,this._z=o*h*_-u*d*p,this._w=o*h*p+u*d*_;break;case"ZXY":this._x=u*h*p-o*d*_,this._y=o*d*p+u*h*_,this._z=o*h*_+u*d*p,this._w=o*h*p-u*d*_;break;case"ZYX":this._x=u*h*p-o*d*_,this._y=o*d*p+u*h*_,this._z=o*h*_-u*d*p,this._w=o*h*p+u*d*_;break;case"YZX":this._x=u*h*p+o*d*_,this._y=o*d*p+u*h*_,this._z=o*h*_-u*d*p,this._w=o*h*p-u*d*_;break;case"XZY":this._x=u*h*p-o*d*_,this._y=o*d*p-u*h*_,this._z=o*h*_+u*d*p,this._w=o*h*p+u*d*_;break;default:He("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],p=t[10],u=i+l+p;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(i>l&&i>p){let d=2*Math.sqrt(1+i-l-p);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>p){let d=2*Math.sqrt(1+l-i-p);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+p-i-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=i*h+a*l+s*o-r*c,this._y=s*h+a*c+r*l-i*o,this._z=r*h+a*o+i*c-s*l,this._w=a*h-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},wl=class wl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_c.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_c.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*i),h=2*(l*t-r*s),p=2*(r*i-a*t);return this.x=t+c*o+a*p-l*h,this.y=i+c*h+l*o-r*p,this.z=s+c*p+r*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return bo.copy(this).projectOnVector(e),this.sub(bo)}reflect(e){return this.sub(bo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(tt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};wl.prototype.isVector3=!0;var G=wl,bo=new G,_c=new kt,Tl=class Tl{constructor(e,t,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o)}set(e,t,i,s,r,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],p=i[7],u=i[2],d=i[5],_=i[8],y=s[0],m=s[3],f=s[6],A=s[1],L=s[4],M=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*y+l*A+c*T,r[3]=a*m+l*L+c*E,r[6]=a*f+l*M+c*P,r[1]=o*y+h*A+p*T,r[4]=o*m+h*L+p*E,r[7]=o*f+h*M+p*P,r[2]=u*y+d*A+_*T,r[5]=u*m+d*L+_*E,r[8]=u*f+d*M+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-i*r*h+i*l*c+s*r*o-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=h*a-l*o,u=l*c-h*r,d=o*r-a*c,_=t*p+i*u+s*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=p*y,e[1]=(s*o-h*i)*y,e[2]=(l*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-l*t)*y,e[6]=d*y,e[7]=(i*c-o*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(wo.makeScale(e,t)),this}rotate(e){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(wo.makeRotation(-e)),this}translate(e,t){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(wo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Tl.prototype.isMatrix3=!0;var qe=Tl,wo=new qe,xc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ku(){let n={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===lt&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===lt&&(s.r=ji(s.r),s.g=ji(s.g),s.b=ji(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Wn?Ls:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Is]:{primaries:e,whitePoint:i,transfer:Ls,toXYZ:xc,fromXYZ:vc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:xc,fromXYZ:vc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),n}var et=Ku();function Hn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ji(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ki,$r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ki===void 0&&(ki=Ns("canvas")),ki.width=e.width,ki.height=e.height;let s=ki.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ki}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hn(t[i]/255)*255):t[i]=Hn(t[i]);return{data:t,width:e.width,height:e.height}}else return He("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ju=0,is=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=ir(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(To(s[a].image)):r.push(To(s[a]))}else r=To(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function To(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$r.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(He("Texture: Unable to serialize Texture."),{})}var Qu=0,Eo=new G,Wt=class n extends Ln{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Pn,s=Pn,r=Nt,a=mi,l=ln,c=Qt,o=n.DEFAULT_ANISOTROPY,h=Wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=ir(),this.name="",this.source=new is(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new Qe(0,0),this.repeat=new Qe(1,1),this.center=new Qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eo).x}get height(){return this.source.getSize(Eo).y}get depth(){return this.source.getSize(Eo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){He(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case es:e.x=e.x-Math.floor(e.x);break;case Pn:e.x=e.x<0?0:1;break;case Xr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case es:e.y=e.y-Math.floor(e.y);break;case Pn:e.y=e.y<0?0:1;break;case Xr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Wt.DEFAULT_IMAGE=null;Wt.DEFAULT_MAPPING=cl;Wt.DEFAULT_ANISOTROPY=1;var El=class El{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,o=c[0],h=c[4],p=c[8],u=c[1],d=c[5],_=c[9],y=c[2],m=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(o+d+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(o+1)/2,M=(d+1)/2,T=(f+1)/2,E=(h+u)/4,P=(p+y)/4,x=(_+m)/4;return L>M&&L>T?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=E/i,r=P/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=x/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(p-y)/A,this.z=(u-h)/A,this.w=Math.acos((o+d+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(tt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};El.prototype.isVector4=!0;var xt=El,Jr=class extends Ln{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Wt(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new is(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Kt=class extends Jr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Ds=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Zr=class extends Wt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ga=class ga{constructor(e,t,i,s,r,a,l,c,o,h,p,u,d,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o,h,p,u,d,_,y,m)}set(e,t,i,s,r,a,l,c,o,h,p,u,d,_,y,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=s,f[1]=r,f[5]=a,f[9]=l,f[13]=c,f[2]=o,f[6]=h,f[10]=p,f[14]=u,f[3]=d,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ga().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*p,_=l*h,y=l*p;t[0]=c*h,t[4]=-c*p,t[8]=o,t[1]=d+_*o,t[5]=u-y*o,t[9]=-l*c,t[2]=y-u*o,t[6]=_+d*o,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,d=c*p,_=o*h,y=o*p;t[0]=u+y*l,t[4]=_*l-d,t[8]=a*o,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=d*l-_,t[6]=y+u*l,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,d=c*p,_=o*h,y=o*p;t[0]=u-y*l,t[4]=-a*p,t[8]=_+d*l,t[1]=d+_*l,t[5]=a*h,t[9]=y-u*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,d=a*p,_=l*h,y=l*p;t[0]=c*h,t[4]=_*o-d,t[8]=u*o+y,t[1]=c*p,t[5]=y*o+u,t[9]=d*o-_,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,d=a*o,_=l*c,y=l*o;t[0]=c*h,t[4]=y-u*p,t[8]=_*p+d,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=d*p+_,t[10]=u-y*p}else if(e.order==="XZY"){let u=a*c,d=a*o,_=l*c,y=l*o;t[0]=c*h,t[4]=-p,t[8]=o*h,t[1]=u*p+y,t[5]=a*h,t[9]=d*p-_,t[2]=_*p-d,t[6]=l*h,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ed,e,td)}lookAt(e,t,i){let s=this.elements;return tn.subVectors(e,t),tn.lengthSq()===0&&(tn.z=1),tn.normalize(),jn.crossVectors(i,tn),jn.lengthSq()===0&&(Math.abs(i.z)===1?tn.x+=1e-4:tn.z+=1e-4,tn.normalize(),jn.crossVectors(i,tn)),jn.normalize(),_r.crossVectors(tn,jn),s[0]=jn.x,s[4]=_r.x,s[8]=tn.x,s[1]=jn.y,s[5]=_r.y,s[9]=tn.y,s[2]=jn.z,s[6]=_r.z,s[10]=tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],p=i[5],u=i[9],d=i[13],_=i[2],y=i[6],m=i[10],f=i[14],A=i[3],L=i[7],M=i[11],T=i[15],E=s[0],P=s[4],x=s[8],w=s[12],R=s[1],N=s[5],F=s[9],k=s[13],I=s[2],W=s[6],J=s[10],V=s[14],ne=s[3],B=s[7],H=s[11],Z=s[15];return r[0]=a*E+l*R+c*I+o*ne,r[4]=a*P+l*N+c*W+o*B,r[8]=a*x+l*F+c*J+o*H,r[12]=a*w+l*k+c*V+o*Z,r[1]=h*E+p*R+u*I+d*ne,r[5]=h*P+p*N+u*W+d*B,r[9]=h*x+p*F+u*J+d*H,r[13]=h*w+p*k+u*V+d*Z,r[2]=_*E+y*R+m*I+f*ne,r[6]=_*P+y*N+m*W+f*B,r[10]=_*x+y*F+m*J+f*H,r[14]=_*w+y*k+m*V+f*Z,r[3]=A*E+L*R+M*I+T*ne,r[7]=A*P+L*N+M*W+T*B,r[11]=A*x+L*F+M*J+T*H,r[15]=A*w+L*k+M*V+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],p=e[6],u=e[10],d=e[14],_=e[3],y=e[7],m=e[11],f=e[15],A=c*d-o*u,L=l*d-o*p,M=l*u-c*p,T=a*d-o*h,E=a*u-c*h,P=a*p-l*h;return t*(y*A-m*L+f*M)-i*(_*A-m*T+f*E)+s*(_*L-y*T+f*P)-r*(_*M-y*E+m*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-i*(r*h-l*c)+s*(r*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=e[9],u=e[10],d=e[11],_=e[12],y=e[13],m=e[14],f=e[15],A=t*l-i*a,L=t*c-s*a,M=t*o-r*a,T=i*c-s*l,E=i*o-r*l,P=s*o-r*c,x=h*y-p*_,w=h*m-u*_,R=h*f-d*_,N=p*m-u*y,F=p*f-d*y,k=u*f-d*m,I=A*k-L*F+M*N+T*R-E*w+P*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/I;return e[0]=(l*k-c*F+o*N)*W,e[1]=(s*F-i*k-r*N)*W,e[2]=(y*P-m*E+f*T)*W,e[3]=(u*E-p*P-d*T)*W,e[4]=(c*R-a*k-o*w)*W,e[5]=(t*k-s*R+r*w)*W,e[6]=(m*M-_*P-f*L)*W,e[7]=(h*P-u*M+d*L)*W,e[8]=(a*F-l*R+o*x)*W,e[9]=(i*R-t*F-r*x)*W,e[10]=(_*E-y*M+f*A)*W,e[11]=(p*M-h*E-d*A)*W,e[12]=(l*w-a*N-c*x)*W,e[13]=(t*N-i*w+s*x)*W,e[14]=(y*L-_*T-m*A)*W,e[15]=(h*T-p*L+u*A)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,c=e.z,o=r*a,h=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+i,h*c-s*a,0,o*c-s*l,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,o=r+r,h=a+a,p=l+l,u=r*o,d=r*h,_=r*p,y=a*h,m=a*p,f=l*p,A=c*o,L=c*h,M=c*p,T=i.x,E=i.y,P=i.z;return s[0]=(1-(y+f))*T,s[1]=(d+M)*T,s[2]=(_-L)*T,s[3]=0,s[4]=(d-M)*E,s[5]=(1-(u+f))*E,s[6]=(m+A)*E,s[7]=0,s[8]=(_+L)*P,s[9]=(m-A)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=zi.set(s[0],s[1],s[2]).length(),l=zi.set(s[4],s[5],s[6]).length(),c=zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let o=1/a,h=1/l,p=1/c;return pn.elements[0]*=o,pn.elements[1]*=o,pn.elements[2]*=o,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=p,pn.elements[9]*=p,pn.elements[10]*=p,t.setFromRotationMatrix(pn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,a,l=xn,c=!1){let o=this.elements,h=2*r/(t-e),p=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(l===xn)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(l===ts)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=p,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=_,o[14]=y,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=xn,c=!1){let o=this.elements,h=2/(t-e),p=2/(i-s),u=-(t+e)/(t-e),d=-(i+s)/(i-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(l===xn)_=-2/(a-r),y=-(a+r)/(a-r);else if(l===ts)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=p,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=_,o[14]=y,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};ga.prototype.isMatrix4=!0;var mt=ga,zi=new G,pn=new mt,ed=new G(0,0,0),td=new G(1,1,1),jn=new G,_r=new G,tn=new G,yc=new mt,Mc=new kt,vn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],p=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-tt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:He("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mc.setFromEuler(this),this.setFromQuaternion(Mc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vn.DEFAULT_ORDER="XYZ";var Us=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},nd=0,Sc=new G,Vi=new kt,Bn=new mt,xr=new G,Es=new G,id=new G,sd=new kt,bc=new G(1,0,0),wc=new G(0,1,0),Tc=new G(0,0,1),Ec={type:"added"},rd={type:"removed"},Gi={type:"childadded",child:null},Ao={type:"childremoved",child:null},It=class n extends Ln{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=ir(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new G,t=new vn,i=new kt,s=new G(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.multiply(Vi),this}rotateOnWorldAxis(e,t){return Vi.setFromAxisAngle(e,t),this.quaternion.premultiply(Vi),this}rotateX(e){return this.rotateOnAxis(bc,e)}rotateY(e){return this.rotateOnAxis(wc,e)}rotateZ(e){return this.rotateOnAxis(Tc,e)}translateOnAxis(e,t){return Sc.copy(e).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(bc,e)}translateY(e){return this.translateOnAxis(wc,e)}translateZ(e){return this.translateOnAxis(Tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?xr.copy(e):xr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bn.lookAt(Es,xr,this.up):Bn.lookAt(xr,Es,this.up),this.quaternion.setFromRotationMatrix(Bn),s&&(Bn.extractRotation(s.matrixWorld),Vi.setFromRotationMatrix(Bn),this.quaternion.premultiply(Vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rd),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,sd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let p=c[o];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),d=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new G(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var gt=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),f=this._getHandJoint(o,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],u=h.position.distanceTo(p.position),d=.02,_=.005;o.inputState.pinching&&u>d+_?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=d-_&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Mh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},vr={h:0,s:0,l:0};function Ro(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Ye=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=et.workingColorSpace){if(e=Zu(e,1),t=tt(t,0,1),i=tt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ro(a,r,e+1/3),this.g=Ro(a,r,e),this.b=Ro(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function i(r){r!==void 0&&parseFloat(r)<1&&He("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:He("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);He("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let i=Mh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):He("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hn(e.r),this.g=Hn(e.g),this.b=Hn(e.b),this}copyLinearToSRGB(e){return this.r=ji(e.r),this.g=ji(e.g),this.b=ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return et.workingToColorSpace(Ot.copy(this),e),Math.round(tt(Ot.r*255,0,255))*65536+Math.round(tt(Ot.g*255,0,255))*256+Math.round(tt(Ot.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let p=a-l;switch(o=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-i)/p+2;break;case r:c=(i-s)/p+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Ht){et.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(vr);let i=So(Qn.h,vr.h,t),s=So(Qn.s,vr.s,t),r=So(Qn.l,vr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new Ye;Ye.NAMES=Mh;var Fs=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vn,this.environmentIntensity=1,this.environmentRotation=new vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mn=new G,kn=new G,Co=new G,zn=new G,Hi=new G,Wi=new G,Ac=new G,Po=new G,Io=new G,Lo=new G,No=new xt,Do=new xt,Uo=new xt,ii=class n{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){mn.subVectors(s,t),kn.subVectors(i,t),Co.subVectors(e,t);let a=mn.dot(mn),l=mn.dot(kn),c=mn.dot(Co),o=kn.dot(kn),h=kn.dot(Co),p=a*o-l*l;if(p===0)return r.set(0,0,0),null;let u=1/p,d=(o*c-l*h)*u,_=(a*h-l*c)*u;return r.set(1-d-_,_,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,i,s,r,a,l,c){return this.getBarycoord(e,t,i,s,zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,zn.x),c.addScaledVector(a,zn.y),c.addScaledVector(l,zn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return No.setScalar(0),Do.setScalar(0),Uo.setScalar(0),No.fromBufferAttribute(e,t),Do.fromBufferAttribute(e,i),Uo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(No,r.x),a.addScaledVector(Do,r.y),a.addScaledVector(Uo,r.z),a}static isFrontFacing(e,t,i,s){return mn.subVectors(i,t),kn.subVectors(e,t),mn.cross(kn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),mn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,l;Hi.subVectors(s,i),Wi.subVectors(r,i),Po.subVectors(e,i);let c=Hi.dot(Po),o=Wi.dot(Po);if(c<=0&&o<=0)return t.copy(i);Io.subVectors(e,s);let h=Hi.dot(Io),p=Wi.dot(Io);if(h>=0&&p<=h)return t.copy(s);let u=c*p-h*o;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Hi,a);Lo.subVectors(e,r);let d=Hi.dot(Lo),_=Wi.dot(Lo);if(_>=0&&d<=_)return t.copy(r);let y=d*o-c*_;if(y<=0&&o>=0&&_<=0)return l=o/(o-_),t.copy(i).addScaledVector(Wi,l);let m=h*_-d*p;if(m<=0&&p-h>=0&&d-_>=0)return Ac.subVectors(r,s),l=(p-h)/(p-h+(d-_)),t.copy(s).addScaledVector(Ac,l);let f=1/(m+y+u);return a=y*f,l=u*f,t.copy(i).addScaledVector(Hi,a).addScaledVector(Wi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yr.copy(i.boundingBox)),yr.applyMatrix4(e.matrixWorld),this.union(yr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(As),Mr.subVectors(this.max,As),Xi.subVectors(e.a,As),qi.subVectors(e.b,As),Yi.subVectors(e.c,As),ei.subVectors(qi,Xi),ti.subVectors(Yi,qi),Si.subVectors(Xi,Yi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-Si.z,Si.y,ei.z,0,-ei.x,ti.z,0,-ti.x,Si.z,0,-Si.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-Si.y,Si.x,0];return!Fo(t,Xi,qi,Yi,Mr)||(t=[1,0,0,0,1,0,0,0,1],!Fo(t,Xi,qi,Yi,Mr))?!1:(Sr.crossVectors(ei,ti),t=[Sr.x,Sr.y,Sr.z],Fo(t,Xi,qi,Yi,Mr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Vn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Vn=[new G,new G,new G,new G,new G,new G,new G,new G],gn=new G,yr=new si,Xi=new G,qi=new G,Yi=new G,ei=new G,ti=new G,Si=new G,As=new G,Mr=new G,Sr=new G,bi=new G;function Fo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){bi.fromArray(n,r);let l=s.x*Math.abs(bi.x)+s.y*Math.abs(bi.y)+s.z*Math.abs(bi.z),c=e.dot(bi),o=t.dot(bi),h=i.dot(bi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var bt=new G,br=new Qe,od=0,Zt=class extends Ln{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=gh,this.updateRanges=[],this.gpuType=bn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)br.fromBufferAttribute(this,t),br.applyMatrix3(e),this.setXY(t,br.x,br.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Jt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),i=Jt(i,this.array),s=Jt(s,this.array),r=Jt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Bs=class extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var _t=class extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}},ld=new si,Rs=new G,Oo=new G,rs=class{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ld.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Rs.subVectors(e,this.center);let t=Rs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Rs,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Oo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Rs.copy(e.center).add(Oo)),this.expandByPoint(Rs.copy(e.center).sub(Oo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},cd=0,on=new mt,Bo=new It,$i=new G,nn=new si,Cs=new si,Ct=new G,jt=class n extends Ln{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=ir(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($u(e)?Bs:Os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new qe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return on.makeRotationFromQuaternion(e),this.applyMatrix4(on),this}rotateX(e){return on.makeRotationX(e),this.applyMatrix4(on),this}rotateY(e){return on.makeRotationY(e),this.applyMatrix4(on),this}rotateZ(e){return on.makeRotationZ(e),this.applyMatrix4(on),this}translate(e,t,i){return on.makeTranslation(e,t,i),this.applyMatrix4(on),this}scale(e,t,i){return on.makeScale(e,t,i),this.applyMatrix4(on),this}lookAt(e){return Bo.lookAt(e),Bo.updateMatrix(),this.applyMatrix4(Bo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter($i).negate(),this.translate($i.x,$i.y,$i.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new _t(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&He("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Cs.setFromBufferAttribute(l),this.morphTargetsRelative?(Ct.addVectors(nn.min,Cs.min),nn.expandByPoint(Ct),Ct.addVectors(nn.max,Cs.max),nn.expandByPoint(Ct)):(nn.expandByPoint(Cs.min),nn.expandByPoint(Cs.max))}nn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ct.fromBufferAttribute(l,o),c&&($i.fromBufferAttribute(e,o),Ct.add($i)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Zt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new G,c[x]=new G;let o=new G,h=new G,p=new G,u=new Qe,d=new Qe,_=new Qe,y=new G,m=new G;function f(x,w,R){o.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,R),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),h.sub(o),p.sub(o),d.sub(u),_.sub(u);let N=1/(d.x*_.y-_.x*d.y);isFinite(N)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(p,-d.y).multiplyScalar(N),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(N),l[x].add(y),l[w].add(y),l[R].add(y),c[x].add(m),c[w].add(m),c[R].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,w=A.length;x<w;++x){let R=A[x],N=R.start,F=R.count;for(let k=N,I=N+F;k<I;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let L=new G,M=new G,T=new G,E=new G;function P(x){T.fromBufferAttribute(s,x),E.copy(T);let w=l[x];L.copy(w),L.sub(T.multiplyScalar(T.dot(w))).normalize(),M.crossVectors(E,w);let N=M.dot(c[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,N)}for(let x=0,w=A.length;x<w;++x){let R=A[x],N=R.start,F=R.count;for(let k=N,I=N+F;k<I;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new G,r=new G,a=new G,l=new G,c=new G,o=new G,h=new G,p=new G;if(e)for(let u=0,d=e.count;u<d;u+=3){let _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),o.fromBufferAttribute(i,m),l.add(h),c.add(h),o.add(h),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,p=l.normalized,u=new o.constructor(c.length*h),d=0,_=0;for(let y=0,m=c.length;y<m;y++){l.isInterleavedBufferAttribute?d=c[y]*l.data.stride+l.offset:d=c[y]*h;for(let f=0;f<h;f++)u[_++]=o[d++]}return new Zt(u,h,p)}if(this.index===null)return He("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=e(c,i);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let h=0,p=o.length;h<p;h++){let u=o[h],d=e(u,i);c.push(d)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let p=0,u=o.length;p<u;p++){let d=o[p];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let h=s[o];this.setAttribute(o,h.clone(t))}let r=e.morphAttributes;for(let o in r){let h=[],p=r[o];for(let u=0,d=p.length;u<d;u++)h.push(p[u].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ko=new G,hd=new G,ud=new qe,_n=class{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=ko.subVectors(i,t).cross(hd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(ko),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ud.getNormalMatrix(e),s=this.coplanarPoint(ko).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},dd=0,ri=class extends Ln{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=ir(),this.name="",this.type="Material",this.blending=us,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=el,this.blendDst=tl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Qi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ch,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Or,this.stencilZFail=Or,this.stencilZPass=Or,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){He(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){He(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new _n().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gn=new G,zo=new G,wr=new G,Tr=new G,Kr=class{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){zo.copy(e).add(t).multiplyScalar(.5),wr.copy(t).sub(e).normalize(),Tr.copy(this.origin).sub(zo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(wr),l=Tr.dot(this.direction),c=-Tr.dot(wr),o=Tr.lengthSq(),h=Math.abs(1-a*a),p,u,d,_;if(h>0)if(p=a*c-l,u=a*l-c,_=r*h,p>=0)if(u>=-_)if(u<=_){let y=1/h;p*=y,u*=y,d=p*(p+a*u+2*l)+u*(a*p+u+2*c)+o}else u=r,p=Math.max(0,-(a*u+l)),d=-p*p+u*(u+2*c)+o;else u=-r,p=Math.max(0,-(a*u+l)),d=-p*p+u*(u+2*c)+o;else u<=-_?(p=Math.max(0,-(-a*r+l)),u=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+u*(u+2*c)+o):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+o):(p=Math.max(0,-(a*r+l)),u=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+u*(u+2*c)+o);else u=a>0?-r:r,p=Math.max(0,-(a*u+l)),d=-p*p+u*(u+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(zo).addScaledVector(wr,u),d}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,c,o=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return o>=0?(i=(e.min.x-u.x)*o,s=(e.max.x-u.x)*o):(i=(e.max.x-u.x)*o,s=(e.min.x-u.x)*o),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(l=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(l=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,h=l.z,p=e.x-a.x,u=e.y-a.y,d=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,f=i.x-a.x,A=i.y-a.y,L=i.z-a.z,M=Math.abs(c),T=Math.abs(o),E=Math.abs(h),P,x,w,R,N,F,k,I,W,J,V,ne;if(M>=T&&M>=E?(w=c,F=p,W=_,ne=f,c>=0?(P=o,x=h,R=u,N=d,k=y,I=m,J=A,V=L):(P=h,x=o,R=d,N=u,k=m,I=y,J=L,V=A)):T>=E?(w=o,F=u,W=y,ne=A,o>=0?(P=h,x=c,R=d,N=p,k=m,I=_,J=L,V=f):(P=c,x=h,R=p,N=d,k=_,I=m,J=f,V=L)):(w=h,F=d,W=m,ne=L,h>=0?(P=c,x=o,R=p,N=u,k=_,I=y,J=f,V=A):(P=o,x=c,R=u,N=p,k=y,I=_,J=A,V=f)),w===0)return null;let B=P/w,H=x/w,Z=1/w,he=R-B*F,pe=N-H*F,Ge=k-B*W,Ue=I-H*W,Ke=J-B*ne,ie=V-H*ne,se=Ke*Ue-ie*Ge,ye=he*ie-pe*Ke,ze=Ge*pe-Ue*he;if(s){if(se<0||ye<0||ze<0)return null}else if((se<0||ye<0||ze<0)&&(se>0||ye>0||ze>0))return null;let Se=se+ye+ze;if(Se===0)return null;let Ve=Z*(se*F+ye*W+ze*ne);return(Se>0?Ve<0:Ve>0)?null:this.at(Ve/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.combine=nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Rc=new mt,wi=new Kr,Er=new rs,Cc=new G,Ar=new G,Rr=new G,Cr=new G,Vo=new G,Pr=new G,Pc=new G,Ir=new G,it=class extends It{constructor(e=new jt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Pr.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let h=l[c],p=r[c];h!==0&&(Vo.fromBufferAttribute(p,e),a?Pr.addScaledVector(Vo,h):Pr.addScaledVector(Vo.sub(t),h))}t.add(Pr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),wi.copy(e.ray).recast(e.near),!(Er.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Er,Cc)===null||wi.origin.distanceToSquared(Cc)>(e.far-e.near)**2))&&(Rc.copy(r).invert(),wi.copy(e.ray).applyMatrix4(Rc),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,wi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],f=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,T=L;M<T;M+=3){let E=l.getX(M),P=l.getX(M+1),x=l.getX(M+2);s=Lr(this,f,e,i,o,h,p,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(l.count,d.start+d.count);for(let m=_,f=y;m<f;m+=3){let A=l.getX(m),L=l.getX(m+1),M=l.getX(m+2);s=Lr(this,a,e,i,o,h,p,A,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],f=a[m.materialIndex],A=Math.max(m.start,d.start),L=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=A,T=L;M<T;M+=3){let E=M,P=M+1,x=M+2;s=Lr(this,f,e,i,o,h,p,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,d.start),y=Math.min(c.count,d.start+d.count);for(let m=_,f=y;m<f;m+=3){let A=m,L=m+1,M=m+2;s=Lr(this,a,e,i,o,h,p,A,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function fd(n,e,t,i,s,r,a,l){let c;if(e.side===Yt?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,e.side===fi,l),c===null)return null;Ir.copy(l),Ir.applyMatrix4(n.matrixWorld);let o=t.ray.origin.distanceTo(Ir);return o<t.near||o>t.far?null:{distance:o,point:Ir.clone(),object:n}}function Lr(n,e,t,i,s,r,a,l,c,o){n.getVertexPosition(l,Ar),n.getVertexPosition(c,Rr),n.getVertexPosition(o,Cr);let h=fd(n,e,t,i,Ar,Rr,Cr,Pc);if(h){let p=new G;ii.getBarycoord(Pc,Ar,Rr,Cr,p),s&&(h.uv=ii.getInterpolatedAttribute(s,l,c,o,p,new Qe)),r&&(h.uv1=ii.getInterpolatedAttribute(r,l,c,o,p,new Qe)),a&&(h.normal=ii.getInterpolatedAttribute(a,l,c,o,p,new G),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:o,normal:new G,materialIndex:0};ii.getNormal(Ar,Rr,Cr,u.normal),h.face=u,h.barycoord=p}return h}var jr=class extends Wt{constructor(e=null,t=1,i=1,s,r,a,l,c,o=Pt,h=Pt,p,u){super(null,a,l,c,o,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ti=new rs,pd=new Qe(.5,.5),Nr=new G,as=class{constructor(e=new _n,t=new _n,i=new _n,s=new _n,r=new _n,a=new _n){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xn,i=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],o=r[3],h=r[4],p=r[5],u=r[6],d=r[7],_=r[8],y=r[9],m=r[10],f=r[11],A=r[12],L=r[13],M=r[14],T=r[15];if(s[0].setComponents(o-a,d-h,f-_,T-A).normalize(),s[1].setComponents(o+a,d+h,f+_,T+A).normalize(),s[2].setComponents(o+l,d+p,f+y,T+L).normalize(),s[3].setComponents(o-l,d-p,f-y,T-L).normalize(),i)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(o-c,d-u,f-m,T-M).normalize();else if(s[4].setComponents(o-c,d-u,f-m,T-M).normalize(),t===xn)s[5].setComponents(o+c,d+u,f+m,T+M).normalize();else if(t===ts)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(e){Ti.center.set(0,0,0);let t=pd.distanceTo(e.center);return Ti.radius=.7071067811865476+t,Ti.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Nr.x=s.normal.x>0?e.max.x:e.min.x,Nr.y=s.normal.y>0?e.max.y:e.min.y,Nr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ks=class extends Wt{constructor(e=[],t=pi,i,s,r,a,l,c,o,h){super(e,t,i,s,r,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zs=class extends Wt{constructor(e,t,i,s,r,a,l,c,o){super(e,t,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends Wt{constructor(e,t,i=Sn,s,r,a,l=Pt,c=Pt,o,h=In,p=1){if(h!==In&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new is(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qr=class extends oi{constructor(e,t=Sn,i=pi,s,r,a=Pt,l=Pt,c,o=In){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,l,c,o),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Vs=class extends Wt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Xt=class n extends jt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],h=[],p=[],u=0,d=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new _t(o,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(p,2));function _(y,m,f,A,L,M,T,E,P,x,w){let R=M/P,N=T/x,F=M/2,k=T/2,I=E/2,W=P+1,J=x+1,V=0,ne=0,B=new G;for(let H=0;H<J;H++){let Z=H*N-k;for(let he=0;he<W;he++){let pe=he*R-F;B[y]=pe*A,B[m]=Z*L,B[f]=I,o.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[f]=E>0?1:-1,h.push(B.x,B.y,B.z),p.push(he/P),p.push(1-H/x),V+=1}}for(let H=0;H<x;H++)for(let Z=0;Z<P;Z++){let he=u+Z+W*H,pe=u+Z+W*(H+1),Ge=u+(Z+1)+W*(H+1),Ue=u+(Z+1)+W*H;c.push(he,pe,Ue),c.push(pe,Ge,Ue),ne+=6}l.addGroup(d,ne,w),d+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},li=class n extends jt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],c=[],o=[],h=t/2,p=Math.PI/2*e,u=t,d=2*p+u,_=i*2+r,y=s+1,m=new G,f=new G;for(let A=0;A<=_;A++){let L=0,M=0,T=0,E=0;if(A<=i){let w=A/i,R=w*Math.PI/2;M=-h-e*Math.cos(R),T=e*Math.sin(R),E=-e*Math.cos(R),L=w*p}else if(A<=i+r){let w=(A-i)/r;M=-h+w*t,T=e,E=0,L=p+w*u}else{let w=(A-i-r)/i,R=w*Math.PI/2;M=h+e*Math.sin(R),T=e*Math.cos(R),E=e*Math.sin(R),L=p+u+w*p}let P=Math.max(0,Math.min(1,L/d)),x=0;A===0?x=.5/s:A===_&&(x=-.5/s);for(let w=0;w<=s;w++){let R=w/s,N=R*Math.PI*2,F=Math.sin(N),k=Math.cos(N);f.x=-T*k,f.y=M,f.z=T*F,l.push(f.x,f.y,f.z),m.set(-T*k,E,T*F),m.normalize(),c.push(m.x,m.y,m.z),o.push(R+x,P)}if(A>0){let w=(A-1)*y;for(let R=0;R<s;R++){let N=w+R,F=w+R+1,k=A*y+R,I=A*y+R+1;a.push(N,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new _t(l,3)),this.setAttribute("normal",new _t(c,3)),this.setAttribute("uv",new _t(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var os=class n extends jt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],d=[],_=0,y=[],m=i/2,f=0;A(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new _t(p,3)),this.setAttribute("normal",new _t(u,3)),this.setAttribute("uv",new _t(d,2));function A(){let M=new G,T=new G,E=0,P=(t-e)/i;for(let x=0;x<=r;x++){let w=[],R=x/r,N=R*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,I=k*c+l,W=Math.sin(I),J=Math.cos(I);T.x=N*W,T.y=-R*i+m,T.z=N*J,p.push(T.x,T.y,T.z),M.set(W,P,J).normalize(),u.push(M.x,M.y,M.z),d.push(k,1-R),w.push(_++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=y[w][x],N=y[w+1][x],F=y[w+1][x+1],k=y[w][x+1];(e>0||w!==0)&&(h.push(R,N,k),E+=3),(t>0||w!==r-1)&&(h.push(N,F,k),E+=3)}o.addGroup(f,E,0),f+=E}function L(M){let T=_,E=new Qe,P=new G,x=0,w=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),_++;let N=_;for(let F=0;F<=s;F++){let I=F/s*c+l,W=Math.cos(I),J=Math.sin(I);P.x=w*J,P.y=m*R,P.z=w*W,p.push(P.x,P.y,P.z),u.push(0,R,0),E.x=W*.5+.5,E.y=J*.5*R+.5,d.push(E.x,E.y),_++}for(let F=0;F<s;F++){let k=T+F,I=N+F;M===!0?h.push(I,I+1,k):h.push(I+1,I,k),x+=3}o.addGroup(f,x,M===!0?1:2),f+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ci=class n extends jt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(i),c=Math.floor(s),o=l+1,h=c+1,p=e/l,u=t/c,d=[],_=[],y=[],m=[];for(let f=0;f<h;f++){let A=f*u-a;for(let L=0;L<o;L++){let M=L*p-r;_.push(M,-A,0),y.push(0,0,1),m.push(L/l),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let A=0;A<l;A++){let L=A+o*f,M=A+o*(f+1),T=A+1+o*(f+1),E=A+1+o*f;d.push(L,M,E),d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Gs=class n extends jt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let l=[],c=[],o=[],h=[],p=e,u=(t-e)/s,d=new G,_=new Qe;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let f=r+m/i*a;d.x=p*Math.cos(f),d.y=p*Math.sin(f),c.push(d.x,d.y,d.z),o.push(0,0,1),_.x=(d.x/t+1)/2,_.y=(d.y/t+1)/2,h.push(_.x,_.y)}p+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let f=0;f<i;f++){let A=f+m,L=A,M=A+i+1,T=A+i+2,E=A+1;l.push(L,M,E),l.push(M,T,E)}}this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(o,3)),this.setAttribute("uv",new _t(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ai=class n extends jt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],p=new G,u=new G,d=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){let A=[],L=f/i,M=a+L*l,T=e*Math.cos(M),E=Math.sqrt(e*e-T*T),P=0;f===0&&a===0?P=.5/t:f===i&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){let w=x/t,R=s+w*r;p.x=-E*Math.cos(R),p.y=T,p.z=E*Math.sin(R),_.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(w+P,1-L),A.push(o++)}h.push(A)}for(let f=0;f<i;f++)for(let A=0;A<t;A++){let L=h[f][A+1],M=h[f][A],T=h[f+1][A],E=h[f+1][A+1];(f!==0||a>0)&&d.push(L,M,E),(f!==i-1||c<Math.PI)&&d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new _t(_,3)),this.setAttribute("normal",new _t(y,3)),this.setAttribute("uv",new _t(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Ii(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Ic(s))s.isRenderTargetTexture?(He("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Ic(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function zt(n){let e={};for(let t=0;t<n.length;t++){let i=Ii(n[t]);for(let s in i)e[s]=i[s]}return e}function Ic(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function md(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}var Sh={clone:Ii,merge:zt},gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ii(e.uniforms),this.uniformsGroups=md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(s.value);break;case"v2":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new G().fromArray(s.value);break;case"v4":this.uniforms[i].value=new xt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ea=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},sn=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=no,this.normalScale=new Qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ta=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},na=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ji(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Go(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ia=class extends hi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xo,endingEnd:Xo}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case qo:r=e,l=2*t-i;break;case Yo:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case qo:a=e,c=2*i-t;break;case Yo:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let o=(i-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,d=this._weightNext,_=(i-t)/(s-t),y=_*_,m=y*_,f=-u*m+2*u*y-u*_,A=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*_+1,L=(-1-d)*m+(1.5+d)*y+.5*_,M=d*m-d*y;for(let T=0;T!==l;++T)r[T]=f*a[h+T]+A*a[o+T]+L*a[c+T]+M*a[p+T];return r}},sa=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(i-t)/(s-t),p=1-h;for(let u=0;u!==l;++u)r[u]=a[o+u]*p+a[c+u]*h;return r}},ra=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},aa=class extends hi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(i-t)/(s-t),y=1-_;for(let m=0;m!==l;++m)r[m]=a[o+m]*y+a[c+m]*_;return r}let u=l*2,d=e-1;for(let _=0;_!==l;++_){let y=a[o+_],m=a[c+_],f=d*u+_*2,A=p[f],L=p[f+1],M=e*u+_*2,T=h[M],E=h[M+1],P=vd(i,t,A,T,s);r[_]=bh(P,y,L,E,m)}return r}};function bh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function xd(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function vd(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let l=bh(r,e,t,i,s)-n;if(Math.abs(l)<1e-10)break;let c=xd(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var rn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ji(t,this.TimeBufferType),this.values=Ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ji(e.times,Array),values:Ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Go(e.settings)&&(i.settings={inTangents:Ji(e.settings.inTangents,Array),outTangents:Ji(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ra(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new aa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ps:t=this.InterpolantFactoryMethodDiscrete;break;case qr:t=this.InterpolantFactoryMethodLinear;break;case Fr:t=this.InterpolantFactoryMethodSmooth;break;case Wo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return He("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ps;case this.InterpolantFactoryMethodLinear:return qr;case this.InterpolantFactoryMethodSmooth:return Fr;case this.InterpolantFactoryMethodBezier:return Wo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Go(this.settings)&&(Lc(this.settings.inTangents,e),Lc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&Ju(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){We("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Fr,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{let p=l*i,u=p-i,d=p+i;for(let _=0;_!==i;++_){let y=t[p+_];if(y!==t[u+_]||y!==t[d+_]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let p=l*i,u=a*i;for(let d=0;d!==i;++d)t[u+d]=t[p+d]}++a}}if(r>0){e[a]=e[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Go(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Lc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}rn.prototype.ValueTypeName="";rn.prototype.TimeBufferType=Float32Array;rn.prototype.ValueBufferType=Float32Array;rn.prototype.DefaultInterpolation=qr;var ui=class extends rn{constructor(e,t,i){super(e,t,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ps;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var oa=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};oa.prototype.ValueTypeName="color";var la=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};la.prototype.ValueTypeName="number";var ca=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(s-t),o=e*l;for(let h=o+l;o!==h;o+=4)kt.slerpFlat(r,0,a,o-l,a,o,c);return r}},Hs=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new ca(this.times,this.values,this.getValueSize(),e)}};Hs.prototype.ValueTypeName="quaternion";Hs.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends rn{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ps;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var ha=class extends rn{constructor(e,t,i,s){super(e,t,i,s)}};ha.prototype.ValueTypeName="vector";var ua=class{constructor(e,t,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return o.push(h,p),this},this.removeHandler=function(h){let p=o.indexOf(h);return p!==-1&&o.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=o.length;p<u;p+=2){let d=o[p],_=o[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wh=new ua,da=class{constructor(e){this.manager=e!==void 0?e:wh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};da.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Xs=class extends Ws{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Ho=new mt,Nc=new G,Dc=new G,fa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qe(512,512),this.mapType=Qt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new Qe(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Nc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nc),Dc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Ho.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Ho,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(Ho)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Dr=new G,Ur=new kt,Cn=new G,qs=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dr,Ur,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ur,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Dr,Ur,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dr,Ur,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new G,Uc=new Qe,Fc=new Qe,Bt=class extends qs{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Yr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Mo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(Mo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Uc,Fc),t.subVectors(Fc,Uc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Mo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ls=class extends qs{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$o=class extends fa{constructor(){super(new ls(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cs=class extends Ws{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new $o}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=-90,Ki=1,pa=class extends It{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Zi,Ki,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Zi,Ki,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Zi,Ki,e,t);a.layers=this.layers,this.add(a);let l=new Bt(Zi,Ki,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Zi,Ki,e,t);c.layers=this.layers,this.add(c);let o=new Bt(Zi,Ki,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,c]=t;for(let o of t)this.remove(o);if(e===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ts)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,d),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},ma=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var yl="\\[\\]\\.:\\/",yd=new RegExp("["+yl+"]","g"),Ml="[^"+yl+"]",Md="[^"+yl.replace("\\.","")+"]",Sd=/((?:WC+[\/:])*)/.source.replace("WC",Ml),bd=/(WCOD+)?/.source.replace("WCOD",Md),wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ml),Td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ml),Ed=new RegExp("^"+Sd+bd+wd+Td+"$"),Ad=["material","materials","bones","map"],Jo=class{constructor(e,t,i){let s=i||pt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},pt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yd,"")}static parseTrackName(e){let t=Ed.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ad.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){He("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;We("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};pt.Composite=Jo;pt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};pt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};pt.prototype.GetterByBindingType=[pt.prototype._getValue_direct,pt.prototype._getValue_array,pt.prototype._getValue_arrayElement,pt.prototype._getValue_toArray];pt.prototype.SetterByBindingTypeAndVersioning=[[pt.prototype._setValue_direct,pt.prototype._setValue_direct_setNeedsUpdate,pt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_array,pt.prototype._setValue_array_setNeedsUpdate,pt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_arrayElement,pt.prototype._setValue_arrayElement_setNeedsUpdate,pt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[pt.prototype._setValue_fromArray,pt.prototype._setValue_fromArray_setNeedsUpdate,pt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qg=new Float32Array(1);var Al=class Al{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Al.prototype.isMatrix2=!0;var Zo=Al;function Sl(n,e,t,i){let s=Rd(i);switch(t){case pl:return n*e;case gl:return n*e/s.components*s.byteLength;case ba:return n*e/s.components*s.byteLength;case _i:return n*e*2/s.components*s.byteLength;case wa:return n*e*2/s.components*s.byteLength;case ml:return n*e*3/s.components*s.byteLength;case ln:return n*e*4/s.components*s.byteLength;case Ta:return n*e*4/s.components*s.byteLength;case Ks:case js:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qs:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Aa:case Ca:return Math.max(n,16)*Math.max(e,8)/4;case Ea:case Ra:return Math.max(n,8)*Math.max(e,8)/2;case Pa:case Ia:case Na:case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case La:case tr:case Ua:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Oa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case qa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ja:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Za:case Ka:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Qa:case eo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case nr:case to:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rd(n){switch(n){case Qt:case hl:return{byteLength:1,components:1};case ds:case ul:case wn:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Sn:case ya:case bn:return{byteLength:4,components:1};case dl:case fl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?He("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function qh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Pd(n){let e=new WeakMap;function t(l,c){let o=l.array,h=l.usage,p=o.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,o,h),l.onUploadCallback();let d;if(o instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=n.SHORT;else if(o instanceof Uint32Array)d=n.UNSIGNED_INT;else if(o instanceof Int32Array)d=n.INT;else if(o instanceof Int8Array)d=n.BYTE;else if(o instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,o){let h=c.array,p=c.updateRanges;if(n.bindBuffer(o,l),p.length===0)n.bufferSubData(o,0,h);else{p.sort((d,_)=>d.start-_.start);let u=0;for(let d=1;d<p.length;d++){let _=p[u],y=p[d];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,p[u]=y)}p.length=u+1;for(let d=0,_=p.length;d<_;d++){let y=p[d];n.bufferSubData(o,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Nd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Xd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Tf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Af=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Pf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Df=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Gf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Kf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Mp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ap=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Np=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Vp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$p=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Kp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:Id,alphahash_pars_fragment:Ld,alphamap_fragment:Nd,alphamap_pars_fragment:Dd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:kd,batching_vertex:zd,begin_vertex:Vd,beginnormal_vertex:Gd,bsdfs:Hd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:$d,clipping_planes_vertex:Jd,color_fragment:Zd,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:Qd,common:ef,cube_uv_reflection_fragment:tf,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:yf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Ef,lights_phong_fragment:Af,lights_phong_pars_fragment:Rf,lights_physical_fragment:Cf,lights_physical_pars_fragment:Pf,lights_fragment_begin:If,lights_fragment_maps:Lf,lights_fragment_end:Nf,lightprobes_pars_fragment:Df,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:zf,map_particle_fragment:Vf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Hf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:Jf,normal_fragment_begin:Zf,normal_fragment_maps:Kf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:xp,skinning_pars_vertex:vp,skinning_vertex:yp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Tp,transmission_fragment:Ep,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Ip,background_vert:Lp,background_frag:Np,backgroundCube_vert:Dp,backgroundCube_frag:Up,cube_vert:Fp,cube_frag:Op,depth_vert:Bp,depth_frag:kp,distance_vert:zp,distance_frag:Vp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:Jp,meshmatcap_vert:Zp,meshmatcap_frag:Kp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:em,meshphong_frag:tm,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},Me={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Un={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Un.physical={uniforms:zt([Un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};var ro={r:0,b:0,g:0},dm=new mt,Yh=new qe;Yh.set(-1,0,0,0,1,0,0,0,1);function fm(n,e,t,i,s,r){let a=new Ye(0),l=s===!0?0:1,c,o,h=null,p=0,u=null;function d(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let M=A.backgroundBlurriness>0;L=e.get(L,M)}return L}function _(A){let L=!1,M=d(A);M===null?m(a,l):M&&M.isColor&&(m(M,1),L=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,L){let M=d(L);M&&(M.isCubeTexture||M.mapping===Js)?(o===void 0&&(o=new it(new Xt(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:Ii(Un.backgroundCube.uniforms),vertexShader:Un.backgroundCube.vertexShader,fragmentShader:Un.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=M,o.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Yh),o.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(h!==M||p!==M.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),o.layers.enableAll(),A.unshift(o,o.geometry,o.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new it(new ci(2,2),new qt({name:"BackgroundMaterial",uniforms:Ii(Un.background.uniforms),vertexShader:Un.background.vertexShader,fragmentShader:Un.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,L){A.getRGB(ro,vl(n)),t.buffers.color.setClear(ro.r,ro.g,ro.b,L,r)}function f(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,L=1){a.set(A),l=L,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:_,addToRenderList:y,dispose:f}}function pm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function l(N,F,k,I,W){let J=!1,V=p(N,I,k,F);r!==V&&(r=V,o(r.object)),J=d(N,I,k,W),J&&_(N,I,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(N,F,k,I),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function o(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function p(N,F,k,I){let W=I.wireframe===!0,J=i[F.id];J===void 0&&(J={},i[F.id]=J);let V=N.isInstancedMesh===!0?N.id:0,ne=J[V];ne===void 0&&(ne={},J[V]=ne);let B=ne[k.id];B===void 0&&(B={},ne[k.id]=B);let H=B[W];return H===void 0&&(H=u(c()),B[W]=H),H}function u(N){let F=[],k=[],I=[];for(let W=0;W<t;W++)F[W]=0,k[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,F,k,I){let W=r.attributes,J=F.attributes,V=0,ne=k.getAttributes();for(let B in ne)if(ne[B].location>=0){let Z=W[B],he=J[B];if(he===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),Z===void 0||Z.attribute!==he||he&&Z.data!==he.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function _(N,F,k,I){let W={},J=F.attributes,V=0,ne=k.getAttributes();for(let B in ne)if(ne[B].location>=0){let Z=J[B];Z===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let he={};he.attribute=Z,Z&&Z.data&&(he.data=Z.data),W[B]=he,V++}r.attributes=W,r.attributesNum=V,r.index=I}function y(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){f(N,0)}function f(N,F){let k=r.newAttributes,I=r.enabledAttributes,W=r.attributeDivisors;k[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),W[N]!==F&&(n.vertexAttribDivisor(N,F),W[N]=F)}function A(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==N[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function L(N,F,k,I,W,J,V){V===!0?n.vertexAttribIPointer(N,F,k,W,J):n.vertexAttribPointer(N,F,k,I,W,J)}function M(N,F,k,I){y();let W=I.attributes,J=k.getAttributes(),V=F.defaultAttributeValues;for(let ne in J){let B=J[ne];if(B.location>=0){let H=W[ne];if(H===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(H=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(H=N.instanceColor)),H!==void 0){let Z=H.normalized,he=H.itemSize,pe=e.get(H);if(pe===void 0)continue;let Ge=pe.buffer,Ue=pe.type,Ke=pe.bytesPerElement,ie=Ue===n.INT||Ue===n.UNSIGNED_INT||H.gpuType===ya;if(H.isInterleavedBufferAttribute){let se=H.data,ye=se.stride,ze=H.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)f(B.location+Se,se.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<B.locationSize;Se++)m(B.location+Se);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let Se=0;Se<B.locationSize;Se++)L(B.location+Se,he/B.locationSize,Ue,Z,ye*Ke,(ze+he/B.locationSize*Se)*Ke,ie)}else{if(H.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)f(B.location+se,H.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let se=0;se<B.locationSize;se++)m(B.location+se);n.bindBuffer(n.ARRAY_BUFFER,Ge);for(let se=0;se<B.locationSize;se++)L(B.location+se,he/B.locationSize,Ue,Z,he*Ke,he/B.locationSize*se*Ke,ie)}}else if(V!==void 0){let Z=V[ne];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(B.location,Z);break;case 3:n.vertexAttrib3fv(B.location,Z);break;case 4:n.vertexAttrib4fv(B.location,Z);break;default:n.vertexAttrib1fv(B.location,Z)}}}}A()}function T(){w();for(let N in i){let F=i[N];for(let k in F){let I=F[k];for(let W in I){let J=I[W];for(let V in J)h(J[V].object),delete J[V];delete I[W]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let k in F){let I=F[k];for(let W in I){let J=I[W];for(let V in J)h(J[V].object),delete J[V];delete I[W]}}delete i[N.id]}function P(N){for(let F in i){let k=i[F];for(let I in k){let W=k[I];if(W[N.id]===void 0)continue;let J=W[N.id];for(let V in J)h(J[V].object),delete J[V];delete W[N.id]}}}function x(N){for(let F in i){let k=i[F],I=N.isInstancedMesh===!0?N.id:0,W=k[I];if(W!==void 0){for(let J in W){let V=W[J];for(let ne in V)h(V[ne].object),delete V[ne];delete W[J]}delete k[I],Object.keys(k).length===0&&delete i[F]}}}function w(){R(),a=!0,r!==s&&(r=s,o(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function mm(n,e,t){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),t.update(o,i,1)}function a(c,o,h){h!==0&&(n.drawArraysInstanced(i,c,o,h),t.update(o,i,h))}function l(c,o,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,h);let u=0;for(let d=0;d<h;d++)u+=o[d];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function gm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==ln&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let x=P===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Qt&&P!==bn&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",h=c(o);h!==o&&(He("WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&He("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:M,maxSamples:T,samples:E}}function _m(n){let e=this,t=null,i=0,s=!1,r=!1,a=new _n,l=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let d=p.length!==0||u||i!==0||s;return s=u,i=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,d){let _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,f=n.get(p);if(!s||_===null||_.length===0||r&&!m)r?h(null):o();else{let A=r?0:i,L=A*4,M=f.clippingState||null;c.value=M,M=h(_,u,L,d);for(let T=0;T!==L;++T)M[T]=t[T];f.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,d,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let f=d+y*4,A=u.matrixWorldInverse;l.getNormalMatrix(A),(m===null||m.length<f)&&(m=new Float32Array(f));for(let L=0,M=d;L!==y;++L,M+=4)a.copy(p[L]).applyMatrix4(A,l),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var ms=4,xm=6,vm=20,ym=256,sr=new ls,Th=new Ye,Rl=null,Cl=0,Pl=0,Il=!1,Mm=new G,Li=new G,oo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:l=Mm}=r;Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ah(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rl,Cl,Pl),this._renderer.xr.enabled=Il,e.scissorTest=!1,ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rl=this._renderer.getRenderTarget(),Cl=this._renderer.getActiveCubeFace(),Pl=this._renderer.getActiveMipmapLevel(),Il=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:wn,format:ln,colorSpace:Is,depthBuffer:!1},s=Eh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sm(r)),this._blurMaterial=wm(r,e,t),this._ggxMaterial=bm(r,e,t)}return s}_compileMaterial(e){let t=new it(new jt,e);this._renderer.compile(t,sr)}_sceneToCubeUV(e,t,i,s,r){let c=new Bt(90,1,t,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,d=p.toneMapping;p.getClearColor(Th),p.toneMapping=Mn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Xt,new ai({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,f=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,f=!0):(m.color.copy(Th),f=!0);for(let L=0;L<6;L++){let M=L%3;M===0?(c.up.set(0,o[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[L],r.y,r.z)):M===1?(c.up.set(0,0,o[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[L],r.z)):(c.up.set(0,o[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[L]));let T=this._cubeSize;ps(s,M*T,L>2?T:0,T,T),p.setRenderTarget(s),f&&p.render(y,c),p.render(e,c)}p.toneMapping=d,p.autoClear=u,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===pi||e.mapping===Pi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ah());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;ps(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,sr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(o*o-h*h),u=o*1.25,d=p*u,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-ms?i-_+ms:0),f=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=d,c.mipInt.value=_-t,ps(r,m,f,3*y,2*y),s.setRenderTarget(r),s.render(l,sr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,ps(e,m,f,3*y,2*y),s.setRenderTarget(e),s.render(l,sr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-ms?s-this._lodMax+ms:0),u=4*(this._cubeSize-h);ps(t,p,u,3*h,2*h),a.setRenderTarget(t),a.render(c,sr)}};function Sm(n){let e=[],t=[],i=n,s=n-ms+1+xm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let l=1/(a-2),c=-l,o=1+l,h=[c,c,o,c,o,o,c,c,o,o,c,o],p=6,u=6,d=3,_=new Float32Array(d*u*p),y=new Float32Array(d*u*p);for(let f=0;f<p;f++){let A=f%3*2/3-1,L=f>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];_.set(M,d*u*f);for(let T=0;T<u;T++){let E=h[T*2]*2-1,P=h[T*2+1]*2-1;f===0?Li.set(1,P,E):f===1?Li.set(-E,1,-P):f===2?Li.set(-E,P,1):f===3?Li.set(-1,P,-E):f===4?Li.set(-E,-1,P):Li.set(E,P,-1),Li.toArray(y,(f*u+T)*d)}}let m=new jt;m.setAttribute("position",new Zt(_,d)),m.setAttribute("outputDirection",new Zt(y,d)),t.push(new it(m,null)),i>ms&&i--}return{lodMeshes:t,sizeLods:e}}function Eh(n,e,t){let i=new Kt(n,e,t);return i.texture.mapping=Js,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ps(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function bm(n,e,t){return new qt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function wm(n,e,t){return new qt({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ho(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ah(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Rh(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var lo=class extends Kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ks(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Xt(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:Ii(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Nn});r.uniforms.tEquirect.value=t;let a=new it(s,r),l=t.minFilter;return t.minFilter===mi&&(t.minFilter=Nt),new pa(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Tm(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===_a||d===xa)if(e.has(u)){let _=e.get(u).texture;return l(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new lo(_.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",o),l(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,_=d===_a||d===xa,y=d===pi||d===Pi;if(_||y){let m=t.get(u),f=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==f)return i===null&&(i=new oo(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let A=u.image;return _&&A&&A.height>0||y&&A&&c(A)?(i===null&&(i=new oo(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,d){return d===_a?u.mapping=pi:d===xa&&(u.mapping=Pi),u}function c(u){let d=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&d++;return d===_}function o(u){let d=u.target;d.removeEventListener("dispose",o);let _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let _=t.get(d);_!==void 0&&(t.delete(d),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Em(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ei("WebGLRenderer: "+i+" extension not supported."),s}}}function Am(n,e,t,i){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(e.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let d in u)e.update(u[d],n.ARRAY_BUFFER)}function o(p){let u=[],d=p.index,_=p.attributes.position,y=0;if(_===void 0)return;if(d!==null){let A=d.array;y=d.version;for(let L=0,M=A.length;L<M;L+=3){let T=A[L+0],E=A[L+1],P=A[L+2];u.push(T,E,E,P,P,T)}}else{let A=_.array;y=_.version;for(let L=0,M=A.length/3-1;L<M;L+=3){let T=L+0,E=L+1,P=L+2;u.push(T,E,E,P,P,T)}}let m=new(_.count>=65535?Bs:Os)(u,1);m.version=y;let f=r.get(p);f&&e.remove(f),r.set(p,m)}function h(p){let u=r.get(p);if(u){let d=p.index;d!==null&&u.version<d.version&&o(p)}else o(p);return r.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function Rm(n,e,t){let i;function s(p){i=p}let r,a;function l(p){r=p.type,a=p.bytesPerElement}function c(p,u){n.drawElements(i,u,r,p*a),t.update(u,i,1)}function o(p,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,p*a,d),t.update(u,i,d))}function h(p,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,d);let y=0;for(let m=0;m<d;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h}function Cm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Pm(n,e,t){let i=new WeakMap,s=new xt;function r(a,l,c){let o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(l);if(u===void 0||u.count!==p){let w=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],A=l.morphAttributes.color||[],L=0;d===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let M=l.attributes.position.count*L,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*p),P=new Ds(E,M,T,p);P.type=bn,P.needsUpdate=!0;let x=L*4;for(let R=0;R<p;R++){let N=m[R],F=f[R],k=A[R],I=M*T*4*R;for(let W=0;W<N.count;W++){let J=W*x;d===!0&&(s.fromBufferAttribute(N,W),E[I+J+0]=s.x,E[I+J+1]=s.y,E[I+J+2]=s.z,E[I+J+3]=0),_===!0&&(s.fromBufferAttribute(F,W),E[I+J+4]=s.x,E[I+J+5]=s.y,E[I+J+6]=s.z,E[I+J+7]=0),y===!0&&(s.fromBufferAttribute(k,W),E[I+J+8]=s.x,E[I+J+9]=s.y,E[I+J+10]=s.z,E[I+J+11]=k.itemSize===4?s.w:1)}}u={count:p,texture:P,size:new Qe(M,T)},i.set(l,u),l.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let y=0;y<o.length;y++)d+=o[y];let _=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Im(n,e,t,i,s){let r=new WeakMap;function a(o){let h=s.render.frame,p=o.geometry,u=e.get(o,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==h&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){let d=o.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function l(){r=new WeakMap}function c(o){let h=o.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}var Lm={[il]:"LINEAR_TONE_MAPPING",[sl]:"REINHARD_TONE_MAPPING",[rl]:"CINEON_TONE_MAPPING",[$s]:"ACES_FILMIC_TONE_MAPPING",[ol]:"AGX_TONE_MAPPING",[ll]:"NEUTRAL_TONE_MAPPING",[al]:"CUSTOM_TONE_MAPPING"};function Nm(n,e,t,i,s,r){let a=new Kt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new jt;o.setAttribute("position",new _t([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new _t([0,2,0,0,2,0],2));let h=new ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new it(o,h),u=new ls(-1,1,1,-1,0,1),d=null,_=null,y=!1,m,f=null,A=[],L=!1;this.setSize=function(M,T){a.setSize(M,T),l!==null&&l.setSize(M,T),c!==null&&c.setSize(M,T);for(let E=0;E<A.length;E++){let P=A[E];P.setSize&&P.setSize(M,T)}},this.setEffects=function(M){A=M,L=A.length>0&&A[0].isRenderPass===!0;let T=a.width,E=a.height;A.length>0&&l===null&&(l=new Kt(T,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}),c=new Kt(T,E,{type:wn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<A.length;P++){let x=A[P];x.setSize&&x.setSize(T,E)}},this.begin=function(M,T){if(y||M.toneMapping===Mn&&A.length===0)return!1;if(f=T,T!==null){let E=T.width,P=T.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return L===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Mn,!0},this.hasRenderPass=function(){return L},this.end=function(M,T){M.toneMapping=m,y=!0;let E=a,P=l;for(let x=0;x<A.length;x++){let w=A[x];w.enabled!==!1&&(w.render(M,P,E,T),w.needsSwap!==!1&&(E=P,P=P===l?c:l))}if(d!==M.outputColorSpace||_!==M.toneMapping){d=M.outputColorSpace,_=M.toneMapping,h.defines={},et.getTransfer(d)===lt&&(h.defines.SRGB_TRANSFER="");let x=Lm[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(f),M.render(p,u),f=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),h.dispose()}}var $h=new Wt,Dl=new oi(1,1),Jh=new Ds,Zh=new Zr,Kh=new ks,Ch=[],Ph=[],Ih=new Float32Array(16),Lh=new Float32Array(9),Nh=new Float32Array(4);function _s(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Ch[s];if(r===void 0&&(r=new Float32Array(s),Ch[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function uo(n,e){let t=Ph[e];t===void 0&&(t=new Int32Array(e),Ph[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Dm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Um(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Fm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Om(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Bm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Nh.set(i),n.uniformMatrix2fv(this.addr,!1,Nh),At(t,i)}}function km(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Lh.set(i),n.uniformMatrix3fv(this.addr,!1,Lh),At(t,i)}}function zm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Ih.set(i),n.uniformMatrix4fv(this.addr,!1,Ih),At(t,i)}}function Vm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Gm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Hm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Wm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Xm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Ym(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function Jm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Dl.compareFunction=t.isReversedDepthBuffer()?so:io,r=Dl):r=$h,t.setTexture2D(e||r,s)}function Zm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Zh,s)}function Km(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Kh,s)}function jm(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Jh,s)}function Qm(n){switch(n){case 5126:return Dm;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return zm;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Hm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return $m;case 35678:case 36198:case 36298:case 36306:case 35682:return Jm;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function e0(n,e){n.uniform1fv(this.addr,e)}function t0(n,e){let t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function n0(n,e){let t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function i0(n,e){let t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function s0(n,e){let t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function r0(n,e){let t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function a0(n,e){let t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function o0(n,e){n.uniform1iv(this.addr,e)}function l0(n,e){n.uniform2iv(this.addr,e)}function c0(n,e){n.uniform3iv(this.addr,e)}function h0(n,e){n.uniform4iv(this.addr,e)}function u0(n,e){n.uniform1uiv(this.addr,e)}function d0(n,e){n.uniform2uiv(this.addr,e)}function f0(n,e){n.uniform3uiv(this.addr,e)}function p0(n,e){n.uniform4uiv(this.addr,e)}function m0(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Dl:a=$h;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function g0(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Zh,r[a])}function _0(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Kh,r[a])}function x0(n,e,t){let i=this.cache,s=e.length,r=uo(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Jh,r[a])}function v0(n){switch(n){case 5126:return e0;case 35664:return t0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}var Ul=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Qm(t.type)}},Fl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=v0(t.type)}},Ol=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],i)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Dh(n,e){n.seq.push(e),n.map[e.id]=e}function y0(n,e,t){let i=n.name,s=i.length;for(Ll.lastIndex=0;;){let r=Ll.exec(i),a=Ll.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){Dh(t,o===void 0?new Ul(l,n,e):new Fl(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new Ol(l),Dh(t,p)),t=p}}}var gs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);y0(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Uh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var M0=37297,S0=0;function b0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}var Fh=new qe;function w0(n){et._getMatrix(Fh,et.workingColorSpace,n);let e=`mat3( ${Fh.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(n)){case Ls:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return He("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Oh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+b0(n.getShaderSource(e),l)}else return r}function T0(n,e){let t=w0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var E0={[il]:"Linear",[sl]:"Reinhard",[rl]:"Cineon",[$s]:"ACESFilmic",[ol]:"AgX",[ll]:"Neutral",[al]:"Custom"};function A0(n,e){let t=E0[e];return t===void 0?(He("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ao=new G;function R0(){et.getLuminanceCoefficients(ao);let n=ao.x.toFixed(4),e=ao.y.toFixed(4),t=ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function C0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ar).join(`
`)}function P0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function I0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function ar(n){return n!==""}function Bh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bl(n){return n.replace(L0,D0)}var N0=new Map;function D0(n,e){let t=Ze[e];if(t===void 0){let i=N0.get(e);if(i!==void 0)t=Ze[i],He('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bl(t)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zh(n){return n.replace(U0,F0)}function F0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Vh(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var O0={[Ri]:"SHADOWMAP_TYPE_PCF",[hs]:"SHADOWMAP_TYPE_VSM"};function B0(n){return O0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var k0={[pi]:"ENVMAP_TYPE_CUBE",[Pi]:"ENVMAP_TYPE_CUBE",[Js]:"ENVMAP_TYPE_CUBE_UV"};function z0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":k0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var V0={[Pi]:"ENVMAP_MODE_REFRACTION"};function G0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":V0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var H0={[nl]:"ENVMAP_BLENDING_MULTIPLY",[sh]:"ENVMAP_BLENDING_MIX",[rh]:"ENVMAP_BLENDING_ADD"};function W0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":H0[n.combine]||"ENVMAP_BLENDING_NONE"}function X0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function q0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=B0(t),o=z0(t),h=G0(t),p=W0(t),u=X0(t),d=C0(t),_=P0(r),y=s.createProgram(),m,f,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ar).join(`
`),f.length>0&&(f+=`
`)):(m=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ar).join(`
`),f=[Vh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Mn?A0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,T0("linearToOutputTexel",t.outputColorSpace),R0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ar).join(`
`)),a=Bl(a),a=Bh(a,t),a=kh(a,t),l=Bl(l),l=Bh(l,t),l=kh(l,t),a=zh(a),l=zh(l),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===_l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let L=A+m+a,M=A+f+l,T=Uh(s,s.VERTEX_SHADER,L),E=Uh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,T),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",W=F.trim(),J=k.trim(),V=I.trim(),ne=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,E);else{let H=Oh(s,T,"vertex"),Z=Oh(s,E,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+H+`
`+Z)}else W!==""?He("WebGLProgram: Program Info Log:",W):(J===""||V==="")&&(B=!1);B&&(N.diagnostics={runnable:ne,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:V,prefix:f}})}s.deleteShader(T),s.deleteShader(E),x=new gs(s,y),w=I0(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(y,M0)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var Y0=0,kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new zl(e),t.set(e,i)),i}},zl=class{constructor(e){this.id=Y0++,this.code=e,this.usedTimes=0}};function $0(n){return n===_i||n===tr||n===nr}function J0(n,e,t,i,s,r){let a=new Us,l=new kl,c=new Set,o=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,w,R,N,F,k){let I=N.fog,W=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||J,V),B=ne&&ne.mapping===Js?ne.image.height:null,H=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&He("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=Z!==void 0?Z.length:0,pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let Ge,Ue,Ke,ie;if(H){let ct=Un[H];Ge=ct.vertexShader,Ue=ct.fragmentShader}else{Ge=x.vertexShader,Ue=x.fragmentShader;let ct=l.getVertexShaderStage(x),at=l.getFragmentShaderStage(x);l.update(x,ct,at),Ke=ct.id,ie=at.id}let se=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ve=!!x.map,rt=!!x.matcap,z=!!ne,re=!!x.aoMap,we=!!x.lightMap,ve=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,Re=!!x.displacementMap,st=!!x.emissiveMap,Xe=!!x.metalnessMap,$e=!!x.roughnessMap,S=x.anisotropy>0,_e=x.clearcoat>0,ge=x.dispersion>0,b=x.retroreflectivity>0,g=x.iridescence>0,D=x.sheen>0,O=x.transmission>0,Y=S&&!!x.anisotropyMap,te=_e&&!!x.clearcoatMap,de=_e&&!!x.clearcoatNormalMap,j=_e&&!!x.clearcoatRoughnessMap,K=g&&!!x.iridescenceMap,ue=g&&!!x.iridescenceThicknessMap,me=D&&!!x.sheenColorMap,le=D&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Ae=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ke=O&&!!x.transmissionMap,C=O&&!!x.thicknessMap,ae=!!x.gradientMap,ee=!!x.alphaMap,fe=x.alphaTest>0,xe=!!x.alphaHash,oe=!!x.extensions,De=Mn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(De=n.toneMapping);let Ne={shaderID:H,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:Ue,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:rt,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:B,aoMap:re,lightMap:we,bumpMap:ve,normalMap:Te,displacementMap:Re,emissiveMap:st,normalMapObjectSpace:Te&&x.normalMapType===lh,normalMapTangentSpace:Te&&x.normalMapType===no,packedNormalMap:Te&&x.normalMapType===no&&$0(x.normalMap.format),metalnessMap:Xe,roughnessMap:$e,anisotropy:S,anisotropyMap:Y,clearcoat:_e,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:j,dispersion:ge,retroreflection:b,iridescence:g,iridescenceMap:K,iridescenceThicknessMap:ue,sheen:D,sheenColorMap:me,sheenRoughnessMap:le,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Pe,transmission:O,transmissionMap:ke,thicknessMap:C,gradientMap:ae,opaque:x.transparent===!1&&x.blending===us&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:xe,combine:x.combine,mapUv:Ve&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:we&&_(x.lightMap.channel),bumpMapUv:ve&&_(x.bumpMap.channel),normalMapUv:Te&&_(x.normalMap.channel),displacementMapUv:Re&&_(x.displacementMap.channel),emissiveMapUv:st&&_(x.emissiveMap.channel),metalnessMapUv:Xe&&_(x.metalnessMap.channel),roughnessMapUv:$e&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(x.sheenRoughnessMap.channel),specularMapUv:ce&&_(x.specularMap.channel),specularColorMapUv:Ae&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:ke&&_(x.transmissionMap.channel),thicknessMapUv:C&&_(x.thicknessMap.channel),alphaMapUv:ee&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Te||S),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ve||ee),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===lt,decodeVideoTextureEmissive:st&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===lt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yn,flipSided:x.side===Yt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(f(w,x),A(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function f(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function A(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){let w=d[x.type],R;if(w){let N=Un[w];R=Sh.clone(N.uniforms)}else R=x.uniforms;return R}function M(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new q0(n,w,x,s),o.push(R),h.set(w,R)),R}function T(x){if(--x.usedTimes===0){let w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function P(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:L,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:o,dispose:P}}function Z0(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function K0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function Gh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Hh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function l(u,d,_,y,m,f){let A=n[e];return A===void 0?(A={id:u.id,object:u,geometry:d,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:f},n[e]=A):(A.id=u.id,A.object=u,A.geometry=d,A.material=_,A.materialVariant=a(u),A.groupOrder=y,A.renderOrder=u.renderOrder,A.z=m,A.group=f),e++,A}function c(u,d,_,y,m,f,A){A.reversedDepth===!0&&(m=-m);let L=l(u,d,_,y,m,f);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):t.push(L)}function o(u,d,_,y,m,f){let A=l(u,d,_,y,m,f);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):t.unshift(A)}function h(u,d){t.length>1&&t.sort(u||K0),i.length>1&&i.sort(d||Gh),s.length>1&&s.sort(d||Gh)}function p(){for(let u=e,d=n.length;u<d;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:p,sort:h}}function j0(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Hh,n.set(i,[a])):s>=r.length?(a=new Hh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Q0(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Ye};break;case"SpotLight":t={position:new G,direction:new G,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":t={color:new Ye,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function eg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var tg=0;function ng(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function ig(n){let e=new Q0,t=eg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new G);let s=new G,r=new mt,a=new mt;function l(o){let h=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,_=0,y=0,m=0,f=0,A=0,L=0,M=0,T=0,E=0,P=0,x=0,w=0,R=0;o.sort(ng);for(let F=0,k=o.length;F<k;F++){let I=o[F],W=I.color,J=I.intensity,V=I.distance,ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_i?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*J,p+=W.g*J,u+=W.b*J;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],J);R++}else if(I.isSunLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=t.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),i.sunShadow[_]=Z,i.sunShadowMap[_]=ne;let he=H.getViewportCount();for(let pe=0;pe<he;pe++)i.sunShadowMatrix[y+pe]=H.getMatrix(pe),i.sunShadowCascade[y+pe]=H._cascadeData[pe];y+=he,_++}i.sun[d]=B,d++}else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let H=I.shadow,Z=t.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=B,m++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(W).multiplyScalar(J),B.distance=V,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[A]=B;let H=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,H.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[A]=H.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,i.spotShadow[A]=Z,i.spotShadowMap[A]=ne,P++}A++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(W).multiplyScalar(J),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[L]=B,L++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let H=I.shadow,Z=t.get(I);Z.shadowIntensity=H.intensity,Z.shadowBias=H.bias,Z.shadowNormalBias=H.normalBias,Z.shadowRadius=H.radius,Z.shadowMapSize=H.mapSize,Z.shadowCameraNear=H.camera.near,Z.shadowCameraFar=H.camera.far,i.pointShadow[f]=Z,i.pointShadowMap[f]=ne,i.pointShadowMatrix[f]=I.shadow.matrix,E++}i.point[f]=B,f++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(J),B.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[M]=B,M++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==f||N.spotLength!==A||N.rectAreaLength!==L||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==P||N.numSpotMaps!==x||N.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=A,i.rectArea.length=L,i.point.length=f,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,N.sunLength=d,N.directionalLength=m,N.pointLength=f,N.spotLength=A,N.rectAreaLength=L,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=P,N.numSpotMaps=x,N.numLightProbes=R,i.version=tg++)}function c(o,h){let p=0,u=0,d=0,_=0,y=0,m=0,f=h.matrixWorldInverse;for(let A=0,L=o.length;A<L;A++){let M=o[A];if(M.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),p++}else if(M.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),u++}else if(M.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(f),_++}else if(M.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),a.identity(),r.copy(M.matrixWorld),r.premultiply(f),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let T=i.point[d];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(f),m++}}}return{setup:l,setupView:c,state:i}}function Wh(n){let e=new ig(n),t=[],i=[],s=[];function r(u){p.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function l(u){i.push(u)}function c(u){s.push(u)}function o(){e.setup(t)}function h(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function sg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Wh(n),e.set(s,[l])):r>=a.length?(l=new Wh(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}var rg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,og=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],lg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Xh=new mt,rr=new G,Nl=new G;function cg(n,e,t){let i=new as,s=new Qe,r=new Qe,a=new xt,l=new ta,c=new na,o={},h=t.maxTextureSize,p={[fi]:Yt,[Yt]:fi,[yn]:yn},u=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qe},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let _=new jt;_.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new it(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ri;let f=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===kc&&(He("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ri);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Nn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=f!==this.type;k&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=E.length;I<W;I++){let J=E[I],V=J.shadow;if(V===void 0){He("WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();s.multiply(ne),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=B,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===hs){if(J.isPointLight){He("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Kt(s.x,s.y,{format:_i,type:wn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=J.name+".shadowMap",V.map.depthTexture=new oi(s.x,s.y,bn),V.map.depthTexture.name=J.name+".shadowMapDepth",V.map.depthTexture.format=In,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt}else J.isPointLight?(V.map=new lo(s.x),V.map.depthTexture=new Qr(s.x,Sn)):(V.map=new Kt(s.x,s.y),V.map.depthTexture=new oi(s.x,s.y,Sn)),V.map.depthTexture.name=J.name+".shadowMap",V.map.depthTexture.format=In,this.type===Ri?(V.map.depthTexture.compareFunction=B?so:io,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Pt,V.map.depthTexture.magFilter=Pt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let H=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();J.isPointLight!==!0&&V.updateMatrices(J,x);for(let Z=0;Z<H;Z++){let he=V.getCamera(Z);if(J.isPointLight){let pe=V.camera,Ge=V.matrix,Ue=J.distance||pe.far;Ue!==pe.far&&(pe.far=Ue,pe.updateProjectionMatrix()),rr.setFromMatrixPosition(J.matrixWorld),pe.position.copy(rr),Nl.copy(pe.position),Nl.add(og[Z]),pe.up.copy(lg[Z]),pe.lookAt(Nl),pe.updateMatrixWorld(),Ge.makeTranslation(-rr.x,-rr.y,-rr.z),Xh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Xh,pe.coordinateSystem,pe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(V.map),n.clear());let pe=V.getViewport(Z);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}i=V.getFrustum(Z),M(P,x,he,J,this.type)}V.isPointLightShadow!==!0&&this.type===hs&&A(V,x),V.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,N)};function A(E,P){let x=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new Kt(s.x,s.y,{format:_i,type:wn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,y,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,x,d,y,null)}function L(E,P,x,w){let R=null,N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=R.uuid,k=P.uuid,I=o[F];I===void 0&&(I={},o[F]=I);let W=I[k];W===void 0&&(W=R.clone(),I[k]=W,P.addEventListener("dispose",T)),R=W}if(R.visible=P.visible,R.wireframe=P.wireframe,w===hs?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:p[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=x}return R}function M(E,P,x,w,R){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&R===hs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=e.update(E),I=E.material;if(Array.isArray(I)){let W=k.groups;for(let J=0,V=W.length;J<V;J++){let ne=W[J],B=I[ne.materialIndex];if(B&&B.visible){let H=L(E,B,w,R);E.onBeforeShadow(n,E,P,x,k,H,ne),n.renderBufferDirect(x,null,k,H,E,ne),E.onAfterShadow(n,E,P,x,k,H,ne)}}}else if(I.visible){let W=L(E,I,w,R);E.onBeforeShadow(n,E,P,x,k,W,null),n.renderBufferDirect(x,null,k,W,E,null),E.onAfterShadow(n,E,P,x,k,W,null)}}let F=E.children;for(let k=0,I=F.length;k<I;k++)M(F[k],P,x,w,R)}function T(E){E.target.removeEventListener("dispose",T);for(let x in o){let w=o[x],R=E.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function hg(n,e){function t(){let C=!1,ae=new xt,ee=null,fe=new xt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!C&&(n.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){C=xe},setClear:function(xe,oe,De,Ne,ct){ct===!0&&(xe*=Ne,oe*=Ne,De*=Ne),ae.set(xe,oe,De,Ne),fe.equals(ae)===!1&&(n.clearColor(xe,oe,De,Ne),fe.copy(ae))},reset:function(){C=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let C=!1,ae=!1,ee=null,fe=null,xe=null;return{setReversed:function(oe){if(ae!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ae=oe;let Ne=xe;xe=null,this.setClear(Ne)}},getReversed:function(){return ae},setTest:function(oe){oe?se(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(oe){ee!==oe&&!C&&(n.depthMask(oe),ee=oe)},setFunc:function(oe){if(ae&&(oe=yh[oe]),fe!==oe){switch(oe){case Br:n.depthFunc(n.NEVER);break;case kr:n.depthFunc(n.ALWAYS);break;case zr:n.depthFunc(n.LESS);break;case Qi:n.depthFunc(n.LEQUAL);break;case Vr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Hr:n.depthFunc(n.GREATER);break;case Wr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=oe}},setLocked:function(oe){C=oe},setClear:function(oe){xe!==oe&&(xe=oe,ae&&(oe=1-oe),n.clearDepth(oe))},reset:function(){C=!1,ee=null,fe=null,xe=null,ae=!1}}}function s(){let C=!1,ae=null,ee=null,fe=null,xe=null,oe=null,De=null,Ne=null,ct=null;return{setTest:function(at){C||(at?se(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(at){ae!==at&&!C&&(n.stencilMask(at),ae=at)},setFunc:function(at,fn,An){(ee!==at||fe!==fn||xe!==An)&&(n.stencilFunc(at,fn,An),ee=at,fe=fn,xe=An)},setOp:function(at,fn,An){(oe!==at||De!==fn||Ne!==An)&&(n.stencilOp(at,fn,An),oe=at,De=fn,Ne=An)},setLocked:function(at){C=at},setClear:function(at){ct!==at&&(n.clearStencil(at),ct=at)},reset:function(){C=!1,ae=null,ee=null,fe=null,xe=null,oe=null,De=null,Ne=null,ct=null}}}let r=new t,a=new i,l=new s,c=new WeakMap,o=new WeakMap,h={},p={},u={},d=new WeakMap,_=[],y=null,m=!1,f=null,A=null,L=null,M=null,T=null,E=null,P=null,x=new Ye(0,0,0),w=0,R=!1,N=null,F=null,k=null,I=null,W=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=ne>=1):B.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=ne>=2);let H=null,Z={},he=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),Ge=new xt().fromArray(he),Ue=new xt().fromArray(pe);function Ke(C,ae,ee,fe){let xe=new Uint8Array(4),oe=n.createTexture();n.bindTexture(C,oe),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ee;De++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ae+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return oe}let ie={};ie[n.TEXTURE_2D]=Ke(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=Ke(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=Ke(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=Ke(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),se(n.DEPTH_TEST),a.setFunc(Qi),ve(!1),Te(Ko),se(n.CULL_FACE),re(Nn);function se(C){h[C]!==!0&&(n.enable(C),h[C]=!0)}function ye(C){h[C]!==!1&&(n.disable(C),h[C]=!1)}function ze(C,ae){return u[C]!==ae?(n.bindFramebuffer(C,ae),u[C]=ae,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(C,ae){let ee=_,fe=!1;if(C){ee=d.get(ae),ee===void 0&&(ee=[],d.set(ae,ee));let xe=C.textures;if(ee.length!==xe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,De=xe.length;oe<De;oe++)ee[oe]=n.COLOR_ATTACHMENT0+oe;ee.length=xe.length,fe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ee)}function Ve(C){return y!==C?(n.useProgram(C),y=C,!0):!1}let rt={[Ci]:n.FUNC_ADD,[Vc]:n.FUNC_SUBTRACT,[Gc]:n.FUNC_REVERSE_SUBTRACT};rt[Hc]=n.MIN,rt[Wc]=n.MAX;let z={[Xc]:n.ZERO,[qc]:n.ONE,[Yc]:n.SRC_COLOR,[el]:n.SRC_ALPHA,[Qc]:n.SRC_ALPHA_SATURATE,[Kc]:n.DST_COLOR,[Jc]:n.DST_ALPHA,[$c]:n.ONE_MINUS_SRC_COLOR,[tl]:n.ONE_MINUS_SRC_ALPHA,[jc]:n.ONE_MINUS_DST_COLOR,[Zc]:n.ONE_MINUS_DST_ALPHA,[eh]:n.CONSTANT_COLOR,[th]:n.ONE_MINUS_CONSTANT_COLOR,[nh]:n.CONSTANT_ALPHA,[ih]:n.ONE_MINUS_CONSTANT_ALPHA};function re(C,ae,ee,fe,xe,oe,De,Ne,ct,at){if(C===Nn){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),C!==zc){if(C!==f||at!==R){if((A!==Ci||T!==Ci)&&(n.blendEquation(n.FUNC_ADD),A=Ci,T=Ci),at)switch(C){case us:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ys:n.blendFunc(n.ONE,n.ONE);break;case jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",C);break}else switch(C){case us:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ys:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case jo:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",C);break}L=null,M=null,E=null,P=null,x.set(0,0,0),w=0,f=C,R=at}return}xe=xe||ae,oe=oe||ee,De=De||fe,(ae!==A||xe!==T)&&(n.blendEquationSeparate(rt[ae],rt[xe]),A=ae,T=xe),(ee!==L||fe!==M||oe!==E||De!==P)&&(n.blendFuncSeparate(z[ee],z[fe],z[oe],z[De]),L=ee,M=fe,E=oe,P=De),(Ne.equals(x)===!1||ct!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ct),x.copy(Ne),w=ct),f=C,R=!1}function we(C,ae){C.side===yn?ye(n.CULL_FACE):se(n.CULL_FACE);let ee=C.side===Yt;ae&&(ee=!ee),ve(ee),C.blending===us&&C.transparent===!1?re(Nn):re(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let fe=C.stencilWrite;l.setTest(fe),fe&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),st(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(C){N!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),N=C)}function Te(C){C!==Oc?(se(n.CULL_FACE),C!==F&&(C===Ko?n.cullFace(n.BACK):C===Bc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),F=C}function Re(C){C!==k&&(V&&n.lineWidth(C),k=C)}function st(C,ae,ee){C?(se(n.POLYGON_OFFSET_FILL),(I!==ae||W!==ee)&&(I=ae,W=ee,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,ee))):ye(n.POLYGON_OFFSET_FILL)}function Xe(C){C?se(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function $e(C){C===void 0&&(C=n.TEXTURE0+J-1),H!==C&&(n.activeTexture(C),H=C)}function S(C,ae,ee){ee===void 0&&(H===null?ee=n.TEXTURE0+J-1:ee=H);let fe=Z[ee];fe===void 0&&(fe={type:void 0,texture:void 0},Z[ee]=fe),(fe.type!==C||fe.texture!==ae)&&(H!==ee&&(n.activeTexture(ee),H=ee),n.bindTexture(C,ae||ie[C]),fe.type=C,fe.texture=ae)}function _e(){let C=Z[H];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function g(){try{n.texSubImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function D(){try{n.texSubImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function te(){try{n.texStorage2D(...arguments)}catch(C){We("WebGLState:",C)}}function de(){try{n.texStorage3D(...arguments)}catch(C){We("WebGLState:",C)}}function j(){try{n.texImage2D(...arguments)}catch(C){We("WebGLState:",C)}}function K(){try{n.texImage3D(...arguments)}catch(C){We("WebGLState:",C)}}function ue(C){return p[C]!==void 0?p[C]:n.getParameter(C)}function me(C,ae){p[C]!==ae&&(n.pixelStorei(C,ae),p[C]=ae)}function le(C){Ge.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),Ge.copy(C))}function ce(C){Ue.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Ue.copy(C))}function Ae(C,ae){let ee=o.get(ae);ee===void 0&&(ee=new WeakMap,o.set(ae,ee));let fe=ee.get(C);fe===void 0&&(fe=n.getUniformBlockIndex(ae,C.name),ee.set(C,fe))}function Pe(C,ae){let fe=o.get(ae).get(C);c.get(ae)!==fe&&(n.uniformBlockBinding(ae,fe,C.__bindingPointIndex),c.set(ae,fe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},H=null,Z={},u={},d=new WeakMap,_=[],y=null,m=!1,f=null,A=null,L=null,M=null,T=null,E=null,P=null,x=new Ye(0,0,0),w=0,R=!1,N=null,F=null,k=null,I=null,W=null,Ge.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:se,disable:ye,bindFramebuffer:ze,drawBuffers:Se,useProgram:Ve,setBlending:re,setMaterial:we,setFlipSided:ve,setCullFace:Te,setLineWidth:Re,setPolygonOffset:st,setScissorTest:Xe,activeTexture:$e,bindTexture:S,unbindTexture:_e,compressedTexImage2D:ge,compressedTexImage3D:b,texImage2D:j,texImage3D:K,pixelStorei:me,getParameter:ue,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:te,texStorage3D:de,texSubImage2D:g,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:Y,scissor:le,viewport:ce,reset:ke}}function ug(n,e,t,i,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Qe,h=new WeakMap,p=new Set,u,d=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,g){return _?new OffscreenCanvas(b,g):Ns("canvas")}function m(b,g,D){let O=1,Y=ge(b);if((Y.width>D||Y.height>D)&&(O=D/Math.max(Y.width,Y.height)),O<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let te=Math.floor(O*Y.width),de=Math.floor(O*Y.height);u===void 0&&(u=y(te,de));let j=g?y(te,de):u;return j.width=te,j.height=de,j.getContext("2d").drawImage(b,0,0,te,de),He("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+te+"x"+de+")."),j}else return"data"in b&&He("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function f(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function L(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,g,D,O,Y,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];He("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;O&&(de=e.get("EXT_texture_norm16"),de||He("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===n.RED&&(D===n.FLOAT&&(j=n.R32F),D===n.HALF_FLOAT&&(j=n.R16F),D===n.UNSIGNED_BYTE&&(j=n.R8),D===n.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),D===n.SHORT&&de&&(j=de.R16_SNORM_EXT)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.R8UI),D===n.UNSIGNED_SHORT&&(j=n.R16UI),D===n.UNSIGNED_INT&&(j=n.R32UI),D===n.BYTE&&(j=n.R8I),D===n.SHORT&&(j=n.R16I),D===n.INT&&(j=n.R32I)),g===n.RG&&(D===n.FLOAT&&(j=n.RG32F),D===n.HALF_FLOAT&&(j=n.RG16F),D===n.UNSIGNED_BYTE&&(j=n.RG8),D===n.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),D===n.SHORT&&de&&(j=de.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RG8UI),D===n.UNSIGNED_SHORT&&(j=n.RG16UI),D===n.UNSIGNED_INT&&(j=n.RG32UI),D===n.BYTE&&(j=n.RG8I),D===n.SHORT&&(j=n.RG16I),D===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGB8UI),D===n.UNSIGNED_SHORT&&(j=n.RGB16UI),D===n.UNSIGNED_INT&&(j=n.RGB32UI),D===n.BYTE&&(j=n.RGB8I),D===n.SHORT&&(j=n.RGB16I),D===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),D===n.UNSIGNED_INT&&(j=n.RGBA32UI),D===n.BYTE&&(j=n.RGBA8I),D===n.SHORT&&(j=n.RGBA16I),D===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),D===n.SHORT&&de&&(j=de.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){let K=te?Ls:et.getTransfer(Y);D===n.FLOAT&&(j=n.RGBA32F),D===n.HALF_FLOAT&&(j=n.RGBA16F),D===n.UNSIGNED_BYTE&&(j=K===lt?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),D===n.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(b,g){let D;return b?g===null||g===Sn||g===fs?D=n.DEPTH24_STENCIL8:g===bn?D=n.DEPTH32F_STENCIL8:g===ds&&(D=n.DEPTH24_STENCIL8,He("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Sn||g===fs?D=n.DEPTH_COMPONENT24:g===bn?D=n.DEPTH_COMPONENT32F:g===ds&&(D=n.DEPTH_COMPONENT16),D}function E(b,g){return f(b)===!0||b.isFramebufferTexture&&b.minFilter!==Pt&&b.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function P(b){let g=b.target;g.removeEventListener("dispose",P),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function x(b){let g=b.target;g.removeEventListener("dispose",x),N(g)}function w(b){let g=i.get(b);if(g.__webglInit===void 0)return;let D=b.source,O=d.get(D);if(O){let Y=O[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&R(b),Object.keys(O).length===0&&d.delete(D)}i.remove(b)}function R(b){let g=i.get(b);n.deleteTexture(g.__webglTexture);let D=b.source,O=d.get(D);delete O[g.__cacheKey],a.memory.textures--}function N(b){let g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let Y=0;Y<g.__webglFramebuffer[O].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[O][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let D=b.textures;for(let O=0,Y=D.length;O<Y;O++){let te=i.get(D[O]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(D[O])}i.remove(b)}let F=0;function k(){F=0}function I(){return F}function W(b){F=b}function J(){let b=F;return b>=s.maxTextures&&He("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function V(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ne(b,g){let D=i.get(b);if(b.isVideoTexture&&S(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let O=b.image;if(O===null)He("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)He("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(D,b,g);return}}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function B(b,g){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ye(D,b,g);return}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function H(b,g){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ye(D,b,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function Z(b,g){let D=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&D.__version!==b.version){ze(D,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}let he={[es]:n.REPEAT,[Pn]:n.CLAMP_TO_EDGE,[Xr]:n.MIRRORED_REPEAT},pe={[Pt]:n.NEAREST,[ah]:n.NEAREST_MIPMAP_NEAREST,[Zs]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[va]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},Ge={[hh]:n.NEVER,[mh]:n.ALWAYS,[uh]:n.LESS,[io]:n.LEQUAL,[dh]:n.EQUAL,[so]:n.GEQUAL,[fh]:n.GREATER,[ph]:n.NOTEQUAL};function Ue(b,g){if(g.type===bn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===va||g.magFilter===Zs||g.magFilter===mi||g.minFilter===Nt||g.minFilter===va||g.minFilter===Zs||g.minFilter===mi)&&He("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,he[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Ge[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Pt||g.minFilter!==Zs&&g.minFilter!==mi||g.type===bn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Ke(b,g){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",P));let O=g.source,Y=d.get(O);Y===void 0&&(Y={},d.set(O,Y));let te=V(g);if(te!==b.__cacheKey){Y[te]===void 0&&(Y[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[te].usedTimes++;let de=Y[b.__cacheKey];de!==void 0&&(Y[b.__cacheKey].usedTimes--,de.usedTimes===0&&R(g)),b.__cacheKey=te,b.__webglTexture=Y[te].texture}return D}function ie(b,g,D){return Math.floor(Math.floor(b/D)/g)}function se(b,g,D,O){let te=b.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,O,g.data);else{te.sort((me,le)=>me.start-le.start);let de=0;for(let me=1;me<te.length;me++){let le=te[de],ce=te[me],Ae=le.start+le.count,Pe=ie(ce.start,g.width,4),ke=ie(le.start,g.width,4);ce.start<=Ae+1&&Pe===ke&&ie(ce.start+ce.count-1,g.width,4)===Pe?le.count=Math.max(le.count,ce.start+ce.count-le.start):(++de,te[de]=ce)}te.length=de+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let me=0,le=te.length;me<le;me++){let ce=te[me],Ae=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),ke=Ae%g.width,C=Math.floor(Ae/g.width),ae=Pe,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,C),t.texSubImage2D(n.TEXTURE_2D,0,ke,C,ae,ee,D,O,g.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function ye(b,g,D){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);let Y=Ke(b,g),te=g.source;t.bindTexture(O,b.__webglTexture,n.TEXTURE0+D);let de=i.get(te);if(te.version!==de.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ee=et.getPrimaries(et.workingColorSpace),fe=g.colorSpace===Wn?null:et.getPrimaries(g.colorSpace),xe=g.colorSpace===Wn||ee===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=_e(g,K);let ue=r.convert(g.format,g.colorSpace),me=r.convert(g.type),le=M(g.internalFormat,ue,me,g.normalized,g.colorSpace,g.isVideoTexture);Ue(O,g);let ce,Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,ke=de.__version===void 0||Y===!0,C=te.dataReady,ae=E(g,K);if(g.isDepthTexture)le=T(g.format===gi,g.type),ke&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,ue,me,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,Ae[0].width,Ae[0].height);for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],Pe?C&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ue,me,ce.data);g.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,K.width,K.height),C&&se(g,K,ue,me)):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,ue,me,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,le,Ae[0].width,Ae[0].height,K.depth);for(let ee=0,fe=Ae.length;ee<fe;ee++)if(ce=Ae[ee],g.format!==ln)if(ue!==null)if(Pe){if(C)if(g.layerUpdates.size>0){let xe=Sl(ce.width,ce.height,g.format,g.type);for(let oe of g.layerUpdates){let De=ce.data.subarray(oe*xe/ce.data.BYTES_PER_ELEMENT,(oe+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,oe,ce.width,ce.height,1,ue,De)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,K.depth,ue,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,le,ce.width,ce.height,K.depth,0,ce.data,0,0);else He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?C&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,K.depth,ue,me,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,le,ce.width,ce.height,K.depth,0,ue,me,ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,Ae[0].width,Ae[0].height);for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],g.format!==ln?ue!==null?Pe?C&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ce.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?C&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ue,me,ce.data)}else if(g.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,le,K.width,K.height,K.depth),C)if(g.layerUpdates.size>0){let ee=Sl(K.width,K.height,g.format,g.type);for(let fe of g.layerUpdates){let xe=K.data.subarray(fe*ee/K.data.BYTES_PER_ELEMENT,(fe+1)*ee/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,K.width,K.height,1,ue,me,xe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,me,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,ue,me,K.data);else if(g.isData3DTexture)Pe?(ke&&t.texStorage3D(n.TEXTURE_3D,ae,le,K.width,K.height,K.depth),C&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,me,K.data)):t.texImage3D(n.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,ue,me,K.data);else if(g.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(n.TEXTURE_2D,ae,le,K.width,K.height);else{let ee=K.width,fe=K.height;for(let xe=0;xe<ae;xe++)t.texImage2D(n.TEXTURE_2D,xe,le,ee,fe,0,ue,me,null),ee>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),K.parentNode!==ee){ee.appendChild(K),p.add(g),ee.onpaint=fe=>{let xe=fe.changedElements;for(let oe of p)xe.includes(oe.image)&&(oe.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let xe=n.RGBA,oe=n.RGBA,De=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,oe,De,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&ke){let ee=ge(Ae[0]);t.texStorage2D(n.TEXTURE_2D,ae,le,ee.width,ee.height)}for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],Pe?C&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue,me,ce):t.texImage2D(n.TEXTURE_2D,ee,le,ue,me,ce);g.generateMipmaps=!1}else if(Pe){if(ke){let ee=ge(K);t.texStorage2D(n.TEXTURE_2D,ae,le,ee.width,ee.height)}C&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,me,K)}else t.texImage2D(n.TEXTURE_2D,0,le,ue,me,K);f(g)&&A(O),de.__version=te.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ze(b,g,D){if(g.image.length!==6)return;let O=Ke(b,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);let te=i.get(Y);if(Y.version!==te.__version||O===!0){t.activeTexture(n.TEXTURE0+D);let de=et.getPrimaries(et.workingColorSpace),j=g.colorSpace===Wn?null:et.getPrimaries(g.colorSpace),K=g.colorSpace===Wn||de===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,le=[];for(let oe=0;oe<6;oe++)!ue&&!me?le[oe]=m(g.image[oe],!0,s.maxCubemapSize):le[oe]=me?g.image[oe].image:g.image[oe],le[oe]=_e(g,le[oe]);let ce=le[0],Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),ke=M(g.internalFormat,Ae,Pe,g.normalized,g.colorSpace),C=g.isVideoTexture!==!0,ae=te.__version===void 0||O===!0,ee=Y.dataReady,fe=E(g,ce);Ue(n.TEXTURE_CUBE_MAP,g);let xe;if(ue){C&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ke,ce.width,ce.height);for(let oe=0;oe<6;oe++){xe=le[oe].mipmaps;for(let De=0;De<xe.length;De++){let Ne=xe[De];g.format!==ln?Ae!==null?C?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,ke,Ne.width,Ne.height,0,Ne.data):He("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ne.width,Ne.height,Ae,Pe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,ke,Ne.width,Ne.height,0,Ae,Pe,Ne.data)}}}else{if(xe=g.mipmaps,C&&ae){xe.length>0&&fe++;let oe=ge(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){C?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,le[oe].width,le[oe].height,Ae,Pe,le[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,le[oe].width,le[oe].height,0,Ae,Pe,le[oe].data);for(let De=0;De<xe.length;De++){let ct=xe[De].image[oe].image;C?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,ct.width,ct.height,Ae,Pe,ct.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,ke,ct.width,ct.height,0,Ae,Pe,ct.data)}}else{C?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae,Pe,le[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Ae,Pe,le[oe]);for(let De=0;De<xe.length;De++){let Ne=xe[De];C?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Ae,Pe,Ne.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,ke,Ae,Pe,Ne.image[oe])}}}f(g)&&A(n.TEXTURE_CUBE_MAP),te.__version=Y.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Se(b,g,D,O,Y,te){let de=r.convert(D.format,D.colorSpace),j=r.convert(D.type),K=M(D.internalFormat,de,j,D.normalized,D.colorSpace),ue=i.get(g),me=i.get(D);if(me.__renderTarget=g,!ue.__hasExternalTextures){let le=Math.max(1,g.width>>te),ce=Math.max(1,g.height>>te);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,te,K,le,ce,g.depth,0,de,j,null):t.texImage2D(Y,te,K,le,ce,0,de,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),$e(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,Y,me.__webglTexture,0,Xe(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,Y,me.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(b,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){let O=g.depthTexture,Y=O&&O.isDepthTexture?O.type:null,te=T(g.stencilBuffer,Y),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;$e(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),te,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,te,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{let O=g.textures;for(let Y=0;Y<O.length;Y++){let te=O[Y],de=r.convert(te.format,te.colorSpace),j=r.convert(te.type),K=M(te.internalFormat,de,j,te.normalized,te.colorSpace);$e(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),K,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function rt(b,g,D){let O=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g.depthTexture);let ue=r.convert(g.depthTexture.format),me=r.convert(g.depthTexture.type),le;g.depthTexture.format===In?le=n.DEPTH_COMPONENT24:g.depthTexture.format===gi&&(le=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,le,g.width,g.height,0,ue,me,null)}}else ne(g.depthTexture,0);let te=Y.__webglTexture,de=Xe(g),j=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,K=g.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===In)$e(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,te,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,te,0);else if(g.depthTexture.format===gi)$e(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,te,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(b){let g=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let O=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",Y)};O.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=O}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let O=0;O<6;O++)rt(g.__webglFramebuffer[O],b,O);else{let O=b.texture.mipmaps;O&&O.length>0?rt(g.__webglFramebuffer[0],b,0):rt(g.__webglFramebuffer,b,0)}else if(D){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[O],b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}}else{let O=b.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(b,g,D){let O=i.get(b);g!==void 0&&Se(O.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&z(b)}function we(b){let g=b.texture,D=i.get(b),O=i.get(g);b.addEventListener("dispose",x);let Y=b.textures,te=b.isWebGLCubeRenderTarget===!0,de=Y.length>1;if(de||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,a.memory.textures++),te){D.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[j]=[];for(let K=0;K<g.mipmaps.length;K++)D.__webglFramebuffer[j][K]=n.createFramebuffer()}else D.__webglFramebuffer[j]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)D.__webglFramebuffer[j]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(de)for(let j=0,K=Y.length;j<K;j++){let ue=i.get(Y[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&$e(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<Y.length;j++){let K=Y[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let ue=r.convert(K.format,K.colorSpace),me=r.convert(K.type),le=M(K.internalFormat,ue,me,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),ce=Xe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,le,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Se(D.__webglFramebuffer[j][K],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else Se(D.__webglFramebuffer[j],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);f(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,K=Y.length;j<K;j++){let ue=Y[j],me=i.get(ue),le=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,me.__webglTexture),Ue(le,ue),Se(D.__webglFramebuffer,b,ue,n.COLOR_ATTACHMENT0+j,le,0),f(ue)&&A(le)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,O.__webglTexture),Ue(j,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Se(D.__webglFramebuffer[K],b,g,n.COLOR_ATTACHMENT0,j,K);else Se(D.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,j,0);f(g)&&A(j),t.unbindTexture()}b.depthBuffer&&z(b)}function ve(b){let g=b.textures;for(let D=0,O=g.length;D<O;D++){let Y=g[D];if(f(Y)){let te=L(b),de=i.get(Y).__webglTexture;t.bindTexture(te,de),A(te),t.unbindTexture()}}}let Te=[],Re=[];function st(b){if(b.samples>0){if($e(b)===!1){let g=b.textures,D=b.width,O=b.height,Y=n.COLOR_BUFFER_BIT,te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),j=g.length>1;if(j)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let me=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,Y,n.NEAREST),c===!0&&(Te.length=0,Re.length=0,Te.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Te.push(te),Re.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let me=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Xe(b){return Math.min(s.maxSamples,b.samples)}function $e(b){let g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function S(b){let g=a.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function _e(b,g){let D=b.colorSpace,O=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Is&&D!==Wn&&(et.getTransfer(D)===lt?(O!==ln||Y!==Qt)&&He("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",D)),g}function ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(o.width=b.naturalWidth||b.width,o.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(o.width=b.displayWidth,o.height=b.displayHeight):(o.width=b.width,o.height=b.height),o}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=B,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function dg(n,e){function t(i,s=Wn){let r,a=et.getTransfer(s);if(i===Qt)return n.UNSIGNED_BYTE;if(i===Ma)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Sa)return n.UNSIGNED_SHORT_5_5_5_1;if(i===dl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===fl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===hl)return n.BYTE;if(i===ul)return n.SHORT;if(i===ds)return n.UNSIGNED_SHORT;if(i===ya)return n.INT;if(i===Sn)return n.UNSIGNED_INT;if(i===bn)return n.FLOAT;if(i===wn)return n.HALF_FLOAT;if(i===pl)return n.ALPHA;if(i===ml)return n.RGB;if(i===ln)return n.RGBA;if(i===In)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===gl)return n.RED;if(i===ba)return n.RED_INTEGER;if(i===_i)return n.RG;if(i===wa)return n.RG_INTEGER;if(i===Ta)return n.RGBA_INTEGER;if(i===Ks||i===js||i===Qs||i===er)if(a===lt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ks)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ks)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===js)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===Aa||i===Ra||i===Ca)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Pa||i===Ia||i===La||i===Na||i===Da||i===tr||i===Ua)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Pa||i===Ia)return a===lt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===La)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Na)return r.COMPRESSED_R11_EAC;if(i===Da)return r.COMPRESSED_SIGNED_R11_EAC;if(i===tr)return r.COMPRESSED_RG11_EAC;if(i===Ua)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fa||i===Oa||i===Ba||i===ka||i===za||i===Va||i===Ga||i===Ha||i===Wa||i===Xa||i===qa||i===Ya||i===$a||i===Ja)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ba)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===za)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Va)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ha)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qa)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ya)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===$a)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ja)return a===lt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Za||i===Ka||i===ja)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Za)return a===lt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qa||i===eo||i===nr||i===to)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qa)return r.COMPRESSED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===nr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===to)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===fs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Vs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new qt({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gl=class extends Ln{constructor(e,t){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,h=null,p=null,u=null,d=null,_=null,y=typeof XRWebGLBinding<"u",m=new Vl,f={},A=t.getContextAttributes(),L=null,M=null,T=[],E=[],P=new Qe,x=null,w=null,R=new Bt;R.viewport=new xt;let N=new Bt;N.viewport=new xt;let F=[R,N],k=new ma,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let se=T[ie];return se===void 0&&(se=new ss,T[ie]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ie){let se=T[ie];return se===void 0&&(se=new ss,T[ie]=se),se.getGripSpace()},this.getHand=function(ie){let se=T[ie];return se===void 0&&(se=new ss,T[ie]=se),se.getHandSpace()};function J(ie){let se=E.indexOf(ie.inputSource);if(se===-1)return;let ye=T[se];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,o||a),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function V(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<T.length;ie++){let se=E[ie];se!==null&&(E[ie]=null,T[ie].disconnect(se))}I=null,W=null,m.reset();for(let ie in f)delete f[ie];if(e.setRenderTarget(L),d=null,u=null,p=null,s=null,M=null,Ke.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),w!==null){let ie=w.camera;ie.fov=w.fov,ie.zoom=w.zoom,ie.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&He("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,i.isPresenting===!0&&He("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(ie){o=ie},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ze=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=A.stencil?gi:In,ze=A.stencil?fs:Sn);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new Kt(u.textureWidth,u.textureHeight,{format:ln,type:Qt,depthTexture:new oi(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Kt(d.framebufferWidth,d.framebufferHeight,{format:ln,type:Qt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),Ke.setContext(s),Ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ie){for(let se=0;se<ie.removed.length;se++){let ye=ie.removed[se],ze=E.indexOf(ye);ze>=0&&(E[ze]=null,T[ze].disconnect(ye))}for(let se=0;se<ie.added.length;se++){let ye=ie.added[se],ze=E.indexOf(ye);if(ze===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=E.length){E.push(ye),ze=Ve;break}else if(E[Ve]===null){E[Ve]=ye,ze=Ve;break}if(ze===-1)break}let Se=T[ze];Se&&Se.connect(ye)}}let B=new G,H=new G;function Z(ie,se,ye){B.setFromMatrixPosition(se.matrixWorld),H.setFromMatrixPosition(ye.matrixWorld);let ze=B.distanceTo(H),Se=se.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,rt=Se[14]/(Se[10]-1),z=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],we=(Se[9]-1)/Se[5],ve=(Se[8]-1)/Se[0],Te=(Ve[8]+1)/Ve[0],Re=rt*ve,st=rt*Te,Xe=ze/(-ve+Te),$e=Xe*-ve;if(se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX($e),ie.translateZ(Xe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Se[10]===-1)ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let S=rt+Xe,_e=z+Xe,ge=Re-$e,b=st+(ze-$e),g=re*z/_e*S,D=we*z/_e*S;ie.projectionMatrix.makePerspective(ge,b,g,D,S,_e),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,se){se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let se=ie.near,ye=ie.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=N.near=R.near=se,k.far=N.far=R.far=ye,(I!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,W=k.far),k.layers.mask=ie.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let ze=ie.parent,Se=k.cameras;he(k,ze);for(let Ve=0;Ve<Se.length;Ve++)he(Se[Ve],ze);Se.length===2?Z(k,R,N):k.projectionMatrix.copy(R.projectionMatrix),w===null&&ie.isPerspectiveCamera&&(w={camera:ie,fov:ie.fov,zoom:ie.zoom}),pe(ie,k,ze)};function pe(ie,se,ye){ye===null?ie.matrix.copy(se.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Yr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(ie){c=ie,u!==null&&(u.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ie){return f[ie]};let Ge=null;function Ue(ie,se){if(h=se.getViewerPose(o||a),_=se,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let ze=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let z=0;z<ye.length;z++){let re=ye[z],we=null;if(d!==null)we=d.getViewport(re);else{let Te=p.getViewSubImage(u,re);we=Te.viewport,z===0&&(e.setRenderTargetTextures(M,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(M))}let ve=F[z];ve===void 0&&(ve=new Bt,ve.layers.enable(z),ve.viewport=new xt,F[z]=ve),ve.matrix.fromArray(re.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(re.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(we.x,we.y,we.width,we.height),z===0&&(k.matrix.copy(ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(ve)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();let z=p.getDepthInformation(ye[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let z=0;z<ye.length;z++){let re=ye[z].camera;if(re){let we=f[re];we||(we=new Vs,f[re]=we);let ve=p.getCameraImage(re);we.sourceTexture=ve}}}}for(let ye=0;ye<T.length;ye++){let ze=E[ye],Se=T[ye];ze!==null&&Se!==void 0&&Se.update(ze,se,o||a)}Ge&&Ge(ie,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}let Ke=new qh;Ke.setAnimationLoop(Ue),this.setAnimationLoop=function(ie){Ge=ie},this.dispose=function(){}}},mg=new mt,jh=new qe;jh.set(-1,0,0,0,1,0,0,0,1);function gg(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,vl(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,A,L,M){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),u(m,f),f.isMeshPhysicalMaterial&&d(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),y(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?c(m,f,A,L):f.isSpriteMaterial?o(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Yt&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Yt&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let A=e.get(f),L=A.envMap,M=A.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(jh),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,A,L){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*A,m.scale.value=L*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function u(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function d(m,f,A){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Yt&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){let A=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _g(n,e,t,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){let E=T.program;i.uniformBlockBinding(M,E)}function o(M,T){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",A));let P=T.program;i.updateUBOMapping(M,P);let x=e.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let T=p();M.__bindingPointIndex=T;let E=n.createBuffer(),P=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function p(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let T=s[M.id],E=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let R=E[x];if(Array.isArray(R))for(let N=0,F=R.length;N<F;N++)d(R[N],x,N,P);else d(R,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,T,E,P){if(y(M,T,E,P)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let R=0;for(let N=0;N<w.length;N++){let F=w[N],k=f(F);_(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function _(M,T,E){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,E)}function y(M,T,E,P){let x=M.value,w=T+"_"+E;if(P[w]===void 0)return typeof x=="number"||typeof x=="boolean"?P[w]=x:ArrayBuffer.isView(x)?P[w]=x.slice():P[w]=x.clone(),!0;{let R=P[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return P[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(M){let T=M.uniforms,E=0,P=16;for(let w=0,R=T.length;w<R;w++){let N=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,k=N.length;F<k;F++){let I=N[F],W=Array.isArray(I.value)?I.value:[I.value];for(let J=0,V=W.length;J<V;J++){let ne=W[J],B=f(ne),H=E%P,Z=H%B.boundary,he=H+Z;E+=Z,he!==0&&P-he<B.storage&&(E+=P-he),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=B.storage}}}let x=E%P;return x>0&&(E+=P-x),M.__size=E,M.__cache={},this}function f(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?He("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):He("WebGLRenderer: Unsupported uniform value type.",M),T}function A(M){let T=M.target;T.removeEventListener("dispose",A);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function L(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:o,dispose:L}}var xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function vg(){return Dn===null&&(Dn=new jr(xg,16,16,_i,wn),Dn.name="DFG_LUT",Dn.minFilter=Nt,Dn.magFilter=Nt,Dn.wrapS=Pn,Dn.wrapT=Pn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var co=class{constructor(e={}){let{canvas:t=_h(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Qt}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let y=d,m=new Set([Ta,wa,ba]),f=new Set([Qt,Sn,ds,fs,Ma,Sa]),A=new Uint32Array(4),L=new Int32Array(4),M=new G,T=null,E=null,P=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,F=null,k=null,I=null,W=null;this._outputColorSpace=Ht;let J=0,V=0,ne=null,B=-1,H=null,Z=new xt,he=new xt,pe=null,Ge=new Ye(0),Ue=0,Ke=t.width,ie=t.height,se=1,ye=null,ze=null,Se=new xt(0,0,Ke,ie),Ve=new xt(0,0,Ke,ie),rt=!1,z=new as,re=!1,we=!1,ve=new mt,Te=new G,Re=new xt,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function $e(){return ne===null?se:1}let S=i;function _e(v,U){return t.getContext(v,U)}let ge,b,g,D,O,Y,te,de,j,K,ue,me,le,ce,Ae,Pe,ke,C,ae,ee,fe,xe,oe;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",fn,!1),S===null){let U="webgl2";if(S=_e(U,v),S===null)throw _e(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),We("WebGLRenderer: "+v.message),v}function De(){ge=new Em(S),ge.init(),fe=new dg(S,ge),b=new gm(S,ge,e,fe),g=new hg(S,ge),b.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),k=S.createFramebuffer(),I=S.createFramebuffer(),W=S.createFramebuffer(),D=new Cm(S),O=new Z0,Y=new ug(S,ge,g,O,b,fe,D),te=new Tm(R),de=new Pd(S),xe=new pm(S,de),j=new Am(S,de,D,xe),K=new Im(S,j,de,xe,D),C=new Pm(S,b,Y),Ae=new _m(O),ue=new J0(R,te,ge,b,xe,Ae),me=new gg(R,O),le=new j0,ce=new sg(ge),ke=new fm(R,te,g,K,_,c),Pe=new cg(R,K,b),oe=new _g(S,D,b,g),ae=new mm(S,ge,D),ee=new Rm(S,ge,D),D.programs=ue.programs,R.capabilities=b,R.extensions=ge,R.properties=O,R.renderLists=le,R.shadowMap=Pe,R.state=g,R.info=D}y!==Qt&&(w=new Nm(y,t.width,t.height,l,s,r));let Ne=new Gl(R,S);this.xr=Ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let v=ge.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ge.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(v){v!==void 0&&(se=v,this.setSize(Ke,ie,!1))},this.getSize=function(v){return v.set(Ke,ie)},this.setSize=function(v,U,Q=!0){if(Ne.isPresenting){He("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=v,ie=U,t.width=Math.floor(v*se),t.height=Math.floor(U*se),Q===!0&&(t.style.width=v+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(Ke*se,ie*se).floor()},this.setDrawingBufferSize=function(v,U,Q){Ke=v,ie=U,se=Q,t.width=Math.floor(v*Q),t.height=Math.floor(U*Q),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===Qt){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){He("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Z)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,U,Q,X){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,U,Q,X),g.viewport(Z.copy(Se).multiplyScalar(se).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,U,Q,X){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,U,Q,X),g.scissor(he.copy(Ve).multiplyScalar(se).round())},this.getScissorTest=function(){return rt},this.setScissorTest=function(v){g.setScissorTest(rt=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,Q=!0){let X=0;if(v){let q=!1;if(ne!==null){let Ee=ne.texture.format;q=m.has(Ee)}if(q){let Ee=ne.texture.type,Le=f.has(Ee),be=ke.getClearColor(),Fe=ke.getClearAlpha(),Be=be.r,Je=be.g,je=be.b;Le?(A[0]=Be,A[1]=Je,A[2]=je,A[3]=Fe,S.clearBufferuiv(S.COLOR,0,A)):(L[0]=Be,L[1]=Je,L[2]=je,L[3]=Fe,S.clearBufferiv(S.COLOR,0,L))}else X|=S.COLOR_BUFFER_BIT}U&&(X|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&S.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),ke.dispose(),le.dispose(),ce.dispose(),O.dispose(),te.dispose(),K.dispose(),xe.dispose(),oe.dispose(),ue.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",oc),Ne.removeEventListener("sessionend",lc),Mi.stop()};function ct(v){v.preventDefault(),xl("WebGLRenderer: Context Lost."),N=!0}function at(){xl("WebGLRenderer: Context Restored."),N=!1;let v=D.autoReset,U=Pe.enabled,Q=Pe.autoUpdate,X=Pe.needsUpdate,q=Pe.type;De(),D.autoReset=v,Pe.enabled=U,Pe.autoUpdate=Q,Pe.needsUpdate=X,Pe.type=q}function fn(v){We("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function An(v){let U=v.target;U.removeEventListener("dispose",An),Vu(U)}function Vu(v){Gu(v),O.remove(v)}function Gu(v){let U=O.get(v).programs;U!==void 0&&(U.forEach(function(Q){ue.releaseProgram(Q)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,Q,X,q,Ee){U===null&&(U=st);let Le=q.isMesh&&q.matrixWorld.determinantAffine()<0,be=Xu(v,U,Q,X,q);g.setMaterial(X,Le);let Fe=Q.index,Be=1;if(X.wireframe===!0){if(Fe=j.getWireframeAttribute(Q),Fe===void 0)return;Be=2}let Je=Q.drawRange,je=Q.attributes.position,Oe=Je.start*Be,ot=(Je.start+Je.count)*Be;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Be),ot=Math.min(ot,(Ee.start+Ee.count)*Be)),Fe!==null?(Oe=Math.max(Oe,0),ot=Math.min(ot,Fe.count)):je!=null&&(Oe=Math.max(Oe,0),ot=Math.min(ot,je.count));let St=ot-Oe;if(St<0||St===1/0)return;xe.setup(q,X,be,Q,Fe);let ft,ut=ae;if(Fe!==null&&(ft=de.get(Fe),ut=ee,ut.setIndex(ft)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*$e()),ut.setMode(S.LINES)):ut.setMode(S.TRIANGLES);else if(q.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),g.setLineWidth(Ut*$e()),q.isLineSegments?ut.setMode(S.LINES):q.isLineLoop?ut.setMode(S.LINE_LOOP):ut.setMode(S.LINE_STRIP)}else q.isPoints?ut.setMode(S.POINTS):q.isSprite&&ut.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))ut.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ut=q._multiDrawStarts,Ie=q._multiDrawCounts,Gt=q._multiDrawCount,nt=Fe?de.get(Fe).bytesPerElement:1,an=O.get(X).currentProgram.getUniforms();for(let Rn=0;Rn<Gt;Rn++)an.setValue(S,"_gl_DrawID",Rn),ut.render(Ut[Rn]/nt,Ie[Rn])}else if(q.isInstancedMesh)ut.renderInstances(Oe,St,q.count);else if(Q.isInstancedBufferGeometry){let Ut=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ie=Math.min(Q.instanceCount,Ut);ut.renderInstances(Oe,St,Ie)}else ut.render(Oe,St)};function ac(v,U,Q,X){F!==null&&v.isNodeMaterial&&F.setObject(X,v),re===!0&&Ae.setState(v,Q,!1),v.transparent===!0&&v.side===yn&&v.forceSinglePass===!1?(v.side=Yt,v.needsUpdate=!0,gr(v,U,X),v.side=fi,v.needsUpdate=!0,gr(v,U,X),v.side=yn):gr(v,U,X)}this.compile=function(v,U,Q=null){Q===null&&(Q=v),F!==null&&F.renderStart(v,U,Q),E=ce.get(Q),E.init(U),x.push(E),Q.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),v!==Q&&v.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),we=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,we),re===!0&&Ae.setGlobalState(this.clippingPlanes,U),F!==null&&Pe.render(E.state.shadowsArray,Q,U);let X=new Set;return v.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let be=Ee[Le];ac(be,Q,U,q),X.add(be)}else ac(Ee,Q,U,q),X.add(Ee)}),E=x.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(v,U,Q=null){let X=this.compile(v,U,Q);return new Promise(q=>{function Ee(){if(X.forEach(function(Le){let Fe=O.get(Le).currentProgram;(Fe===void 0||Fe.isReady())&&X.delete(Le)}),X.size===0){q(v);return}setTimeout(Ee,10)}ge.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let vo=null;function Hu(v){vo&&vo(v)}function oc(){Mi.stop()}function lc(){Mi.start()}let Mi=new qh;Mi.setAnimationLoop(Hu),typeof self<"u"&&Mi.setContext(self),this.setAnimationLoop=function(v){vo=v,Ne.setAnimationLoop(v),v===null?Mi.stop():Mi.start()},Ne.addEventListener("sessionstart",oc),Ne.addEventListener("sessionend",lc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(v,U);let Q=Ne.enabled===!0&&Ne.isPresenting===!0,X=w!==null&&(ne===null||Q)&&w.begin(R,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(U),U=Ne.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,U,ne),E=ce.get(v,x.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),x.push(E),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(ve,xn,U.reversedDepth),we=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,we),T=le.get(v,P.length),T.init(),P.push(T),Ne.enabled===!0&&Ne.isPresenting===!0){let Le=R.xr.getDepthSensingMesh();Le!==null&&yo(Le,U,-1/0,R.sortObjects)}yo(v,U,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),R.sortObjects===!0&&T.sort(ye,ze),Xe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Xe&&ke.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ae.beginShadows();let q=E.state.shadowsArray;if(Pe.render(q,v,U),re===!0&&Ae.endShadows(),(X&&w.hasRenderPass())===!1){let Le=T.opaque,be=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Fe=U.cameras;if(be.length>0)for(let Be=0,Je=Fe.length;Be<Je;Be++){let je=Fe[Be];hc(Le,be,v,je)}Xe&&ke.render(v);for(let Be=0,Je=Fe.length;Be<Je;Be++){let je=Fe[Be];cc(T,v,je,je.viewport)}}else be.length>0&&hc(Le,be,v,U),Xe&&ke.render(v),cc(T,v,U)}ne!==null&&V===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),X&&w.end(R),v.isScene===!0&&v.onAfterRender(R,v,U),xe.resetDefaultState(),B=-1,H=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),re===!0&&Ae.setGlobalState(R.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,F!==null&&F.renderEnd()};function yo(v,U,Q,X){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)Q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(z)){X&&Re.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ve);let Le=K.update(v),be=v.material;be.visible&&T.push(v,Le,be,Q,Re.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(z))){let Le=K.update(v),be=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Re.copy(v.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Re.copy(Le.boundingSphere.center)),Re.applyMatrix4(v.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){let Fe=Le.groups;for(let Be=0,Je=Fe.length;Be<Je;Be++){let je=Fe[Be],Oe=be[je.materialIndex];Oe&&Oe.visible&&T.push(v,Le,Oe,Q,Re.z,je,U)}}else be.visible&&T.push(v,Le,be,Q,Re.z,null,U)}}let Ee=v.children;for(let Le=0,be=Ee.length;Le<be;Le++)yo(Ee[Le],U,Q,X)}function cc(v,U,Q,X){let{opaque:q,transmissive:Ee,transparent:Le}=v;E.setupLightsView(Q),re===!0&&Ae.setGlobalState(R.clippingPlanes,Q),X&&g.viewport(Z.copy(X)),q.length>0&&mr(q,U,Q),Ee.length>0&&mr(Ee,U,Q),Le.length>0&&mr(Le,U,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function hc(v,U,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Oe=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new Kt(1,1,{generateMipmaps:!0,type:Oe?wn:Qt,minFilter:mi,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[X.id],Le=X.viewport||Z;Ee.setSize(Le.z*R.transmissionResolutionScale,Le.w*R.transmissionResolutionScale);let be=R.getRenderTarget(),Fe=R.getActiveCubeFace(),Be=R.getActiveMipmapLevel();R.setRenderTarget(Ee),R.getClearColor(Ge),Ue=R.getClearAlpha(),Ue<1&&R.setClearColor(16777215,.5),R.clear(),Xe&&ke.render(Q);let Je=R.toneMapping;R.toneMapping=Mn;let je=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),re===!0&&Ae.setGlobalState(R.clippingPlanes,X),mr(v,Q,X),Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let ot=0,St=U.length;ot<St;ot++){let ft=U[ot],{object:ut,geometry:Ut,material:Ie,group:Gt}=ft;if(Ie.side===yn&&ut.layers.test(X.layers)){let nt=Ie.side;Ie.side=Yt,Ie.needsUpdate=!0,uc(ut,Q,X,Ut,Ie,Gt),Ie.side=nt,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee))}R.setRenderTarget(be,Fe,Be),R.setClearColor(Ge,Ue),je!==void 0&&(X.viewport=je),R.toneMapping=Je}function mr(v,U,Q){let X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Ee=v.length;q<Ee;q++){let Le=v[q],{object:be,geometry:Fe,group:Be}=Le,Je=Le.material;Je.allowOverride===!0&&X!==null&&(Je=X),be.layers.test(Q.layers)&&uc(be,U,Q,Fe,Je,Be)}}function uc(v,U,Q,X,q,Ee){F!==null&&q.isNodeMaterial&&F.setObject(v,q),v.onBeforeRender(R,U,Q,X,q,Ee),v.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),q.onBeforeRender(R,U,Q,X,v,Ee),q.transparent===!0&&q.side===yn&&q.forceSinglePass===!1?(q.side=Yt,q.needsUpdate=!0,R.renderBufferDirect(Q,U,X,q,v,Ee),q.side=fi,q.needsUpdate=!0,R.renderBufferDirect(Q,U,X,q,v,Ee),q.side=yn):R.renderBufferDirect(Q,U,X,q,v,Ee),v.onAfterRender(R,U,Q,X,q,Ee)}function gr(v,U,Q){U.isScene!==!0&&(U=st);let X=O.get(v),q=E.state.lights,Ee=E.state.shadowsArray,Le=q.state.version,be=ue.getParameters(v,q.state,Ee,U,Q,E.state.lightProbeGridArray),Fe=ue.getProgramCacheKey(be),Be=X.programs;X.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Je=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;X.envMap=te.get(v.envMap||X.environment,Je),X.envMapRotation=X.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Be===void 0&&(v.addEventListener("dispose",An),Be=new Map,X.programs=Be);let je=Be.get(Fe);if(je!==void 0){if(X.currentProgram===je&&X.lightsStateVersion===Le)return fc(v,be),je}else be.uniforms=ue.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,Q,be),v.onBeforeCompile(be,R),je=ue.acquireProgram(be,Fe),Be.set(Fe,je),X.uniforms=be.uniforms;let Oe=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Oe.clippingPlanes=Ae.uniform),fc(v,be),X.needsLights=Yu(v),X.lightsStateVersion=Le,X.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.sunLights.value=q.state.sun,Oe.sunLightShadows.value=q.state.sunShadow,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.sunShadowMatrix.value=q.state.sunShadowMatrix,Oe.sunShadowCascade.value=q.state.sunShadowCascade,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=je,X.uniformsList=null,je}function dc(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=gs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function fc(v,U){let Q=O.get(v);Q.outputColorSpace=U.outputColorSpace,Q.batching=U.batching,Q.batchingColor=U.batchingColor,Q.instancing=U.instancing,Q.instancingColor=U.instancingColor,Q.instancingMorph=U.instancingMorph,Q.skinning=U.skinning,Q.morphTargets=U.morphTargets,Q.morphNormals=U.morphNormals,Q.morphColors=U.morphColors,Q.morphTargetsCount=U.morphTargetsCount,Q.numClippingPlanes=U.numClippingPlanes,Q.numIntersection=U.numClipIntersection,Q.vertexAlphas=U.vertexAlphas,Q.vertexTangents=U.vertexTangents,Q.toneMapping=U.toneMapping}function Wu(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let Q=0,X=v.length;Q<X;Q++){let q=v[Q];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Xu(v,U,Q,X,q){U.isScene!==!0&&(U=st),Y.resetTextureUnits();let Ee=U.fog,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,be=ne===null?R.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:et.workingColorSpace,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Be=te.get(X.envMap||Le,Fe),Je=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,je=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!Q.morphAttributes.position,ot=!!Q.morphAttributes.normal,St=!!Q.morphAttributes.color,ft=Mn;X.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(ft=R.toneMapping);let ut=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ut=ut!==void 0?ut.length:0,Ie=O.get(X),Gt=E.state.lights;if(re===!0&&(we===!0||v!==H)){let dt=v===H&&X.id===B;Ae.setState(X,v,dt)}let nt=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Gt.state.version||Ie.outputColorSpace!==be||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==Be||X.fog===!0&&Ie.fog!==Ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ae.numPlanes||Ie.numIntersection!==Ae.numIntersection)||Ie.vertexAlphas!==Je||Ie.vertexTangents!==je||Ie.morphTargets!==Oe||Ie.morphNormals!==ot||Ie.morphColors!==St||Ie.toneMapping!==ft||Ie.morphTargetsCount!==Ut||!!Ie.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(nt=!0):(nt=!0,Ie.__version=X.version);let an=Ie.currentProgram;nt===!0&&(an=gr(X,U,q),F&&X.isNodeMaterial&&F.onUpdateProgram(X,an,Ie));let Rn=!1,Jn=!1,Oi=!1,ht=an.getUniforms(),Mt=Ie.uniforms;if(g.useProgram(an.program)&&(Rn=!0,Jn=!0,Oi=!0),X.id!==B&&(B=X.id,Jn=!0),Ie.needsLights){let dt=Wu(E.state.lightProbeGridArray,q);Ie.lightProbeGrid!==dt&&(Ie.lightProbeGrid=dt,Jn=!0)}if(Rn||H!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ht.setValue(S,"projectionMatrix",v.projectionMatrix),ht.setValue(S,"viewMatrix",v.matrixWorldInverse);let Kn=ht.map.cameraPosition;Kn!==void 0&&Kn.setValue(S,Te.setFromMatrixPosition(v.matrixWorld)),b.logarithmicDepthBuffer&&ht.setValue(S,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ht.setValue(S,"isOrthographic",v.isOrthographicCamera===!0),H!==v&&(H=v,Jn=!0,Oi=!0)}if(Ie.needsLights&&(Gt.state.sunShadowMap.length>0&&ht.setValue(S,"sunShadowMap",Gt.state.sunShadowMap,Y),Gt.state.directionalShadowMap.length>0&&ht.setValue(S,"directionalShadowMap",Gt.state.directionalShadowMap,Y),Gt.state.spotShadowMap.length>0&&ht.setValue(S,"spotShadowMap",Gt.state.spotShadowMap,Y),Gt.state.pointShadowMap.length>0&&ht.setValue(S,"pointShadowMap",Gt.state.pointShadowMap,Y)),q.isSkinnedMesh){ht.setOptional(S,q,"bindMatrix"),ht.setOptional(S,q,"bindMatrixInverse");let dt=q.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ht.setValue(S,"boneTexture",dt.boneTexture,Y))}q.isBatchedMesh&&(ht.setOptional(S,q,"batchingTexture"),ht.setValue(S,"batchingTexture",q._matricesTexture,Y),ht.setOptional(S,q,"batchingIdTexture"),ht.setValue(S,"batchingIdTexture",q._indirectTexture,Y),ht.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&ht.setValue(S,"batchingColorTexture",q._colorsTexture,Y));let Zn=Q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&C.update(q,Q,an),(Jn||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,ht.setValue(S,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Mt.envMapIntensity.value=U.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=vg()),Jn){if(ht.setValue(S,"toneMappingExposure",R.toneMappingExposure),Ie.needsLights&&qu(Mt,Oi),Ee&&X.fog===!0&&me.refreshFogUniforms(Mt,Ee),me.refreshMaterialUniforms(Mt,X,se,ie,E.state.transmissionRenderTarget[v.id]),Ie.needsLights&&Ie.lightProbeGrid){let dt=Ie.lightProbeGrid;Mt.probesSH.value=dt.texture,Mt.probesMin.value.copy(dt.boundingBox.min),Mt.probesMax.value.copy(dt.boundingBox.max),Mt.probesResolution.value.copy(dt.resolution)}gs.upload(S,dc(Ie),Mt,Y)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(gs.upload(S,dc(Ie),Mt,Y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ht.setValue(S,"center",q.center),ht.setValue(S,"modelViewMatrix",q.modelViewMatrix),ht.setValue(S,"normalMatrix",q.normalMatrix),ht.setValue(S,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let dt=X.uniformsGroups;for(let Kn=0,Bi=dt.length;Kn<Bi;Kn++){let mc=dt[Kn];oe.update(mc,an),oe.bind(mc,an)}}return an}function qu(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Yu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,U,Q){let X=O.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),O.get(v.texture).__webglTexture=U,O.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let Q=O.get(v);Q.__webglFramebuffer=U,Q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,Q=0){ne=v,J=U,V=Q;let X=null,q=!1,Ee=!1;if(v){let be=O.get(v);if(be.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(S.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(v.viewport),he.copy(v.scissor),pe=v.scissorTest,g.viewport(Z),g.scissor(he),g.setScissorTest(pe),B=-1;return}else if(be.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(be.__hasExternalTextures)Y.rebindTextures(v,O.get(v.texture).__webglTexture,O.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Je=v.depthTexture;if(be.__boundDepthTexture!==Je){if(Je!==null&&O.has(Je)&&(v.width!==Je.image.width||v.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);let Be=O.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?X=Be[U][Q]:X=Be[U],q=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?X=O.get(v).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[Q]:X=Be,Z.copy(v.viewport),he.copy(v.scissor),pe=v.scissorTest}else Z.copy(Se).multiplyScalar(se).floor(),he.copy(Ve).multiplyScalar(se).floor(),pe=rt;if(Q!==0&&(X=k),g.bindFramebuffer(S.FRAMEBUFFER,X)&&g.drawBuffers(v,X),g.viewport(Z),g.scissor(he),g.setScissorTest(pe),q){let be=O.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,Q)}else if(Ee){let be=U;for(let Fe=0;Fe<v.textures.length;Fe++){let Be=O.get(v.textures[Fe]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,Q,be)}}else if(v!==null&&Q!==0){let be=O.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,be.__webglTexture,Q)}B=-1};function pc(v){let U=O.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=b.textureFormatReadable(v.format),U.__typeReadable=b.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,Q,X,q,Ee,Le,be=0){if(!(v&&v.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){g.bindFramebuffer(S.FRAMEBUFFER,Fe);try{let Be=v.textures[be],Je=Be.format,je=Be.type;v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+be);let Oe=pc(Be);if(Oe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-X&&Q>=0&&Q<=v.height-q&&S.readPixels(U,Q,X,q,fe.convert(Je),fe.convert(je),Ee)}finally{let Be=ne!==null?O.get(ne).__webglFramebuffer:null;g.bindFramebuffer(S.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(v,U,Q,X,q,Ee,Le,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(U>=0&&U<=v.width-X&&Q>=0&&Q<=v.height-q){g.bindFramebuffer(S.FRAMEBUFFER,Fe);let Be=v.textures[be],Je=Be.format,je=Be.type;v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+be);let Oe=pc(Be);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ot=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,ot),S.bufferData(S.PIXEL_PACK_BUFFER,Ee.byteLength,S.STREAM_READ),S.readPixels(U,Q,X,q,fe.convert(Je),fe.convert(je),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let St=ne!==null?O.get(ne).__webglFramebuffer:null;g.bindFramebuffer(S.FRAMEBUFFER,St);let ft=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await vh(S,ft,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,ot),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ee),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(ot),S.deleteSync(ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,Q=0){let X=Math.pow(2,-Q),q=Math.floor(v.image.width*X),Ee=Math.floor(v.image.height*X),Le=U!==null?U.x:0,be=U!==null?U.y:0;Y.setTexture2D(v,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,Le,be,q,Ee),g.unbindTexture()},this.copyTextureToTexture=function(v,U,Q=null,X=null,q=0,Ee=0){let Le,be,Fe,Be,Je,je,Oe,ot,St,ft=v.isCompressedTexture?v.mipmaps[Ee]:v.image;if(Q!==null)Le=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Je=Q.min.y,je=Q.isBox3?Q.min.z:0;else{let Mt=Math.pow(2,-q);Le=Math.floor(ft.width*Mt),be=Math.floor(ft.height*Mt),v.isDataArrayTexture?Fe=ft.depth:v.isData3DTexture?Fe=Math.floor(ft.depth*Mt):Fe=1,Be=0,Je=0,je=0}X!==null?(Oe=X.x,ot=X.y,St=X.z):(Oe=0,ot=0,St=0);let ut=fe.convert(U.format),Ut=fe.convert(U.type),Ie;U.isData3DTexture?(Y.setTexture3D(U,0),Ie=S.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Ie=S.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Ie=S.TEXTURE_2D),g.activeTexture(S.TEXTURE0),g.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(S.UNPACK_ALIGNMENT,U.unpackAlignment);let Gt=g.getParameter(S.UNPACK_ROW_LENGTH),nt=g.getParameter(S.UNPACK_IMAGE_HEIGHT),an=g.getParameter(S.UNPACK_SKIP_PIXELS),Rn=g.getParameter(S.UNPACK_SKIP_ROWS),Jn=g.getParameter(S.UNPACK_SKIP_IMAGES);g.pixelStorei(S.UNPACK_ROW_LENGTH,ft.width),g.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ft.height),g.pixelStorei(S.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(S.UNPACK_SKIP_ROWS,Je),g.pixelStorei(S.UNPACK_SKIP_IMAGES,je);let Oi=v.isDataArrayTexture||v.isData3DTexture,ht=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let Mt=O.get(v),Zn=O.get(U),dt=O.get(Mt.__renderTarget),Kn=O.get(Zn.__renderTarget);g.bindFramebuffer(S.READ_FRAMEBUFFER,dt.__webglFramebuffer),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Bi=0;Bi<Fe;Bi++)Oi&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(v).__webglTexture,q,je+Bi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(U).__webglTexture,Ee,St+Bi)),S.blitFramebuffer(Be,Je,Le,be,Oe,ot,Le,be,S.DEPTH_BUFFER_BIT,S.NEAREST);g.bindFramebuffer(S.READ_FRAMEBUFFER,null),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(q!==0||v.isRenderTargetTexture||O.has(v)){let Mt=O.get(v),Zn=O.get(U);g.bindFramebuffer(S.READ_FRAMEBUFFER,I),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,W);for(let dt=0;dt<Fe;dt++)Oi?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Mt.__webglTexture,q,je+dt):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Mt.__webglTexture,q),ht?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Zn.__webglTexture,Ee,St+dt):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Zn.__webglTexture,Ee),q!==0?S.blitFramebuffer(Be,Je,Le,be,Oe,ot,Le,be,S.COLOR_BUFFER_BIT,S.NEAREST):ht?S.copyTexSubImage3D(Ie,Ee,Oe,ot,St+dt,Be,Je,Le,be):S.copyTexSubImage2D(Ie,Ee,Oe,ot,Be,Je,Le,be);g.bindFramebuffer(S.READ_FRAMEBUFFER,null),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ht?v.isDataTexture||v.isData3DTexture?S.texSubImage3D(Ie,Ee,Oe,ot,St,Le,be,Fe,ut,Ut,ft.data):U.isCompressedArrayTexture?S.compressedTexSubImage3D(Ie,Ee,Oe,ot,St,Le,be,Fe,ut,ft.data):S.texSubImage3D(Ie,Ee,Oe,ot,St,Le,be,Fe,ut,Ut,ft):v.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Ee,Oe,ot,Le,be,ut,Ut,ft.data):v.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Ee,Oe,ot,ft.width,ft.height,ut,ft.data):S.texSubImage2D(S.TEXTURE_2D,Ee,Oe,ot,Le,be,ut,Ut,ft);g.pixelStorei(S.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(S.UNPACK_IMAGE_HEIGHT,nt),g.pixelStorei(S.UNPACK_SKIP_PIXELS,an),g.pixelStorei(S.UNPACK_SKIP_ROWS,Rn),g.pixelStorei(S.UNPACK_SKIP_IMAGES,Jn),Ee===0&&U.generateMipmaps&&S.generateMipmap(Ie),g.unbindTexture()},this.initRenderTarget=function(v){O.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){J=0,V=0,ne=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}};var yt=n=>n*Math.PI/180,Rt=(n,e,t)=>Math.min(t,Math.max(e,n));var or=n=>(n=Rt(n,0,1),n*n*(3-2*n));function cn(n,e){let t=n.length;if(e<=n[0][0])return n[0].slice(1);if(e>=n[t-1][0])return n[t-1].slice(1);let i=1;for(;e>n[i][0];)i++;let s=n[i-1],r=n[i],a=r[0]-s[0]||1e-6,l=(e-s[0])/a,c=l*l,o=c*l,h=(u,d)=>(n[d][u]-n[d-1][u])/(n[d][0]-n[d-1][0]||1e-6),p=(u,d)=>{if(u===0||u===t-1)return 0;let _=h(d,u),y=h(d,u+1);if(_*y<=0)return 0;let m=n[u][0]-n[u-1][0],f=n[u+1][0]-n[u][0],A=2*f+m,L=f+2*m;return(A+L)/(A/_+L/y)};return r.slice(1).map((u,d)=>{let _=d+1,y=p(i-1,_)*a,m=p(i,_)*a;return(2*o-3*c+1)*s[_]+(o-2*c+l)*y+(-2*o+3*c)*r[_]+(o-c)*m})}var lr={thigh:.31,shin:.31,upperArm:.22,foreArm:.2},Qh=new G,Fn=new G,xi=new G,eu=new G,tu=new G,Hl=new G,Wl=new G,nu=new G,iu=new mt,su=new kt,ru=new kt;function Xl(n,e,t,i,s,r,a){n.updateWorldMatrix(!0,!1),n.getWorldPosition(Qh),Fn.subVectors(t,Qh);let l=Fn.length();l<1e-4&&(Fn.set(0,-1,0),l=1e-4),Fn.divideScalar(l),l=Rt(l,Math.abs(i-s)+.001,i+s-.001);let c=Rt((i*i+l*l-s*s)/(2*i*l),-1,1),o=Math.sqrt(1-c*c),h=Math.PI-Math.acos(Rt((i*i+s*s-l*l)/(2*i*s),-1,1));xi.copy(r).addScaledVector(Fn,-r.dot(Fn)),xi.lengthSq()<1e-6&&(xi.set(0,0,1).addScaledVector(Fn,-Fn.z),xi.lengthSq()<1e-6&&xi.set(1,0,0)),xi.normalize(),eu.copy(Fn).multiplyScalar(c).addScaledVector(xi,o),tu.copy(xi).multiplyScalar(c).addScaledVector(Fn,-o),Hl.copy(eu).negate(),Wl.copy(tu).multiplyScalar(a==="arm"?-1:1),nu.crossVectors(Hl,Wl),iu.makeBasis(nu,Hl,Wl),su.setFromRotationMatrix(iu),n.parent.updateWorldMatrix(!0,!1),n.parent.getWorldQuaternion(ru),n.quaternion.copy(ru.invert()).multiply(su),e.rotation.set(a==="arm"?-h:h,0,0)}var fo={},cr=(n,e)=>{fo[n]=e},wt=null,vu=new G(0,1,0),ql=new kt,yg=new kt,Mg=new vn,Xy=new G,Xn=(n=0,e=0,t=0)=>new G(n,e,t),au=(n,e,t=0)=>wt.JT.thigh[n].rotation.set(-yt(e),0,yt(t*n)),ou=(n,e)=>wt.JT.shin[n].rotation.x=yt(e),lu=(n,e,t=8)=>wt.JT.sh[n].rotation.set(-yt(e),0,yt(t*n)),cu=(n,e)=>wt.JT.el[n].rotation.x=-yt(e);function Sg(n){return n.updateWorldMatrix(!0,!1),n.getWorldQuaternion(ql),ql.premultiply(yg.copy(wt.root.quaternion).invert()),Mg.setFromQuaternion(ql,"XYZ").x}var bg=(n,e=0)=>{wt.JT.foot[n].rotation.x=-Sg(wt.JT.shin[n])+yt(e)},hu=n=>{let e=yt(n);return n>=0?.072*Math.cos(e)+.1675*Math.sin(e)+.004:.072*Math.cos(e)+.0575*Math.sin(-e)+.004},uu=new G,du=new G;function fu(n,e,t,i,s=0,r=0,a=.12){uu.set(e,t,i),du.set(n*a*Math.cos(r)+Math.sin(r),0,-n*a*Math.sin(r)+Math.cos(r)),Xl(wt.JT.thigh[n],wt.JT.shin[n],uu,lr.thigh,lr.shin,du,"leg"),bg(n,s)}var pu=new G,mu=new G;function wg(n,e,t){pu.copy(e),mu.copy(t),Xl(wt.JT.sh[n],wt.JT.el[n],pu,lr.upperArm,lr.foreArm,mu,"arm")}var gu=(n,e,t)=>wt.spine.localToWorld(Xn(n,e,t)),hr=()=>({py:.6,hx:0,hz:0,yaw:-32,syaw:0,lean:8,roll:0,hd:4,lf:[.14,.075,.2,0],rf:[-.14,.075,-.26,6],hand:{},ryaw:0}),Tg={1:[.115,.4,.27],"-1":[-.12,.38,.21]},xs=n=>Xn(n*.7,-.8,-.25);function ur(n){let{root:e,pelvis:t,spine:i,head:s}=wt;e.quaternion.setFromAxisAngle(vu,wt.yaw+yt(n.ryaw)),e.position.set(wt.base.x+n.hx,n.py,wt.base.z+n.hz),t.rotation.y=yt(n.yaw),i.rotation.y=yt(n.syaw),i.rotation.x=yt(n.lean),i.rotation.z=yt(n.roll),s.rotation.y=-(t.rotation.y+i.rotation.y)*.8,s.rotation.x=yt(n.hd),e.updateMatrixWorld(!0),fu(1,n.lf[0],Math.max(n.lf[1],hu(n.lf[3])),n.lf[2],n.lf[3],yt(n.ryaw)),fu(-1,n.rf[0],Math.max(n.rf[1],hu(n.rf[3])),n.rf[2],n.rf[3],yt(n.ryaw)),e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.hand[r]||{},l=Tg[r],c,o=xs(r),h=gu(l[0],l[1],l[2]);if(a.str!==void 0){let p=wt.JT.sh[r].getWorldPosition(Xn()),u=Xn(p.x*.55,p.y-.01,p.z+.42);c=h.clone().lerp(u,Rt(a.str,-.25,1)),o=xs(r).lerp(Xn(r*.5,-.3,-.2),Rt(a.str,0,1))}else a.l?(c=gu(a.l[0],a.l[1],a.l[2]),a.pole&&(o=a.pole)):c=h;wg(r,c,o)}}var qy=new G,Yy=new G,$y=new G,Jy=new G;var _u=new G;function xu(n){return{q:n.ALL.map(e=>e.quaternion.clone()),rq:n.root.quaternion.clone(),rp:n.root.position.clone()}}function Eg(n,e,t){return{q:n.q.map((i,s)=>i.clone().slerp(e.q[s],t)),rq:n.rq.clone().slerp(e.rq,t),rp:n.rp.clone().lerp(e.rp,t)}}function Ag(n,e){n.ALL.forEach((t,i)=>t.quaternion.copy(e.q[i])),n.root.quaternion.copy(e.rq),n.root.position.copy(e.rp)}function Rg(n,e,t,i){let s=[n.spine,n.neck,n.head,n.JT.sh[1],n.JT.sh[-1],n.JT.el[1],n.JT.el[-1]];(!n.sm||t)&&(n.sm=new Map);let r=1-Math.exp(-Math.max(e,0)/.055);s.forEach((a,l)=>{let c=n.sm.get(a);if(!c){c=a.quaternion.clone(),n.sm.set(a,c);return}l<3||i?(c.slerp(a.quaternion,r),a.quaternion.copy(c)):c.copy(a.quaternion)})}function Cg(n){n.ALL.forEach(e=>e.rotation.set(0,0,0)),n.root.position.set(n.base.x,0,n.base.z),n.root.quaternion.setFromAxisAngle(vu,n.yaw),n.root.userData.air=0}fo.idle=n=>(au(1,3),au(-1,3),ou(1,6),ou(-1,6),lu(1,4,9),lu(-1,4,9),cu(1,14),cu(-1,14),wt.spine.rotation.x=yt(3)+.01*Math.sin(n*1.6),wt.head.rotation.x=yt(-2),{ground:"all"});function vs(n,e,t,i,s,r,a){wt=n,(n.mode!==e||a)&&(n.blend=n.last?{k:0,from:n.last}:null,n.mode=e),Cg(n);let c=(fo[e]||fo.idle)(t,i,s)||{};if(n.blend&&(n.blend.k+=r/.28,n.blend.k>=1?n.blend=null:Ag(n,Eg(n.blend.from,xu(n),or(n.blend.k)))),n.spine.rotation.x+=.009*Math.sin(t*1.9+(n.role==="B"?1.3:0)),n.neck.rotation.x+=.006*Math.sin(t*1.9-.6),Rg(n,r,a||!r,!c.hold),n.root.updateMatrixWorld(!0),c.ground!=="none"){let o=1e9;for(let h of n.marks)c.ground==="feet"&&h.kind!=="foot"||c.ground==="knees"&&h.kind!=="knee"||(h.o.getWorldPosition(_u),o=Math.min(o,_u.y-h.r));n.root.position.y+=-o}return n.root.position.y+=(n.root.userData.air||0)+(c.lift||0),n.root.updateMatrixWorld(!0),c.post&&(c.post(),n.root.updateMatrixWorld(!0)),n.last=xu(n),c}var Pg=[[0,0],[.16,-.1],[.34,1],[.5,1],[.74,.05],[1,0]],Ig=[[0,0,0],[.2,.8,0],[.4,1,0],[.52,1,0],[.78,.1,0],[1,0,0]],Lg=[[0,.12,.4,.26],[.2,.4,.39,.06],[.4,.05,.4,.33],[.52,.05,.4,.33],[.78,.12,.4,.26],[1,.12,.4,.26]],Ng=[[0,-.12,.38,.21],[.2,-.4,.39,.02],[.4,-.05,.4,.31],[.52,-.05,.4,.31],[.78,-.12,.38,.21],[1,-.12,.38,.21]],Dg=[[0,.12,.4,.26],[.22,.12,.1,.2],[.44,.06,.5,.33],[.58,.06,.5,.33],[.82,.12,.4,.26],[1,.12,.4,.26]],Ug=[[0,-.12,.38,.21],[.22,-.12,.08,.16],[.44,-.06,.5,.31],[.58,-.06,.5,.31],[.82,-.12,.38,.21],[1,-.12,.38,.21]],Fg=[[0,0],[.22,1],[.44,-.3],[.6,-.3],[.85,0],[1,0]],Og=[[0,0],[.3,1],[.62,1],[1,0]],yu={J:1,C:-1,LH:1,RH:-1,UL:1,UR:-1};function dr(n,e,t){let i=cn(Og,t)[0];if(e==="slipL"||e==="slipR"){let s=e==="slipL"?1:-1;n.hx+=s*.13*i,n.roll+=s*14*i,n.py-=.03*i,n.yaw+=s*-8*i,n.lean+=4*i}else if(e==="duck")n.py-=.17*i,n.lean+=28*i,n.hd+=6*i,n.lf[2]+=.04*i,n.rf[2]-=.02*i;else if(e==="cover"){n.py-=.05*i,n.lean+=14*i,n.hz-=.03*i;for(let s of[1,-1])n.hand[s]={l:[s*.085*(1-.3*i)+s*.035*(1-i),.4+.14*i,.24],pole:Xn(s*.15,-1,-.35)};n.hd+=8*i}}function Bg(n,e,t){let i=cn(Pg,t)[0],s=cn(Ig,t)[0],r=Math.sin(Math.PI*Rt(t,0,1));if(e==="J")n.hand[1]={str:i},n.yaw+=9*i,n.lean+=4*i,n.hz+=.03*i,n.py-=.015*i,n.lf[2]+=.02*i;else if(e==="C")n.hand[-1]={str:i},n.yaw+=52*i,n.syaw+=8*i,n.lean+=5*i,n.hz+=.06*i,n.py-=.02*i,n.rf[3]+=28*i,n.rf[1]+=.03*i;else if(e==="LH"||e==="RH"){let a=yu[e],l=cn(a===1?Lg:Ng,t);n.hand[a]={l,pole:xs(a).lerp(Xn(a,.5,-.25),r)},a===1?(n.yaw+=-38*s,n.syaw+=-6*s,n.lf[3]+=18*s,n.hz+=.03*s):(n.yaw+=70*s,n.syaw+=8*s,n.rf[3]+=26*s,n.rf[1]+=.03*s,n.hz+=.04*s),n.lean+=3*s,n.py-=.015*s}else if(e==="UL"||e==="UR"){let a=yu[e];n.hand[a]={l:cn(a===1?Dg:Ug,t),pole:Xn(a*.3,-1,.1)};let l=cn(Fg,t)[0];n.py-=.05*l,n.lean+=8*l,n.yaw+=(a===1?-14:24)*(1-Math.abs(l))*Math.max(0,s||r),n.hz+=.02*r}else e==="SL"?dr(n,"slipL",t):e==="SR"?dr(n,"slipR",t):e==="D"?dr(n,"duck",t):e==="K"&&dr(n,"cover",t)}var Mu={fb:[[0,0,0,0,0],[.18,0,.2,0,0],[.34,0,.2,0,.2],[.5,0,.2,0,.2],[.64,0,.2,0,0],[.8,0,0,0,0],[1,0,0,0,0]],side:[[0,0,0,0,0],[.16,.22,0,0,0],[.3,.22,0,.22,0],[.5,.22,0,.22,0],[.66,0,0,.22,0],[.8,0,0,0,0],[1,0,0,0,0]],box:[[0,0,0,0,0],[.1,0,.18,0,0],[.2,0,.18,0,.18],[.3,.2,.18,0,.18],[.4,.2,.18,.2,.18],[.5,.2,0,.2,.18],[.6,.2,0,.2,0],[.7,0,0,.2,0],[.8,0,0,0,0],[1,0,0,0,0]],shuffle:[[0,0,0,0,0],[.12,0,.12,0,0],[.24,0,.12,0,.12],[.36,0,0,0,.12],[.48,0,0,0,0],[.6,0,-.1,0,0],[.72,0,-.1,0,-.1],[.84,0,0,0,-.1],[1,0,0,0,0]]};cr("guard",(n,e,t)=>{let i=hr(),s=t.v,r=t.f||1,a=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.8*a,i.py+=.004*a,s==="bounce"){let l=Math.sin(n*2*Math.PI*r),c=Math.sin(n*2*Math.PI*r+Math.PI);i.py+=.018*Math.abs(l)-.01,i.lf[1]+=.03*Math.max(0,l),i.rf[1]+=.03*Math.max(0,c),i.hz+=.008*l,i.hand[1]={l:[.115+.01*l,.4+.012*Math.abs(l),.27],pole:xs(1)},i.hand[-1]={l:[-.12-.01*l,.38+.012*Math.abs(c),.21],pole:xs(-1)}}else if(s==="shift"){let l=Math.sin(n*2*Math.PI/(t.repT||3));i.hx+=.045*l,i.hz+=.05*l,i.py-=.015*Math.abs(l),i.roll+=3*l,i.lf[1]+=.02*Math.max(0,l),i.rf[1]+=.02*Math.max(0,-l),i.yaw+=6*l}return ur(i),{ground:"none"}});cr("foot",(n,e,t)=>{let i=hr(),s=t.repT,r=n%s/s,a=cn(Mu[t.v],r),l=cn(Mu[t.v],Math.min(1,r+.012)),c=(u,d)=>Math.hypot(l[u]-a[u],l[d]-a[d]),o=.09*or(Rt(c(0,1)/.004,0,1)),h=.09*or(Rt(c(2,3)/.004,0,1)),p=Math.sin(n*2*Math.PI*(t.f||1.6));return i.lf[0]+=a[0],i.lf[2]+=a[1],i.rf[0]+=a[2],i.rf[2]+=a[3],i.lf[1]+=o,i.rf[1]+=h,i.hx+=(a[0]+a[2])/2,i.hz+=(a[1]+a[3])/2,i.py+=.008*p-.004,i.lean+=2*(a[1]+a[3])*5,i.roll+=-10*(a[0]+a[2]),ur(i),{ground:"none"}});cr("combo",(n,e,t)=>{let i=hr(),s=t.seq,r=t.pt,a=Math.floor(n/r),l=a%s.length,c=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.6*c,i.py+=.008*Math.sin(n*2*Math.PI*1.4),t.bounce){let h=Math.sin(n*2*Math.PI*1.6);i.lf[1]+=.02*Math.max(0,h),i.rf[1]+=.02*Math.max(0,-h)}let o=s[l];return o&&Bg(i,o,(n-a*r)/r),ur(i),{ground:"none"}});cr("dodge",(n,e,t)=>{let i=hr(),s=t.repT,r=n%s/s,a=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.6*a,t.v==="weave"){let l=cn([[0,0],[.14,1],[.3,1],[.5,0],[.7,-1],[.86,-1],[1,0]],r)[0],c=cn([[0,0],[.14,.5],[.3,1],[.5,1],[.7,1],[.86,.5],[1,0]],r)[0];i.hx+=l*.12,i.roll+=l*14,i.py-=.13*c,i.lean+=22*c,i.yaw+=l*-8}else dr(i,t.v,r);return ur(i),{ground:"none"}});var vi={az:62,el:6,dist:3.4,ty:.95},hn=(n,e=.55)=>({seq:n,pt:e,repT:+(n.length*e).toFixed(2)}),Su={id:"boxeo",title:"Boxeo de sombra",tagline:"Cardio y coordinaci\xF3n \xB7 Sin material",kind:"Boxeo",summary:"Golpes, esquivas y juego de pies contra un rival imaginario. Quema calor\xEDas y descarga la cabeza.",icon:'<path d="M7 9h8a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4H9a3 3 0 0 1-3-3V9zM6 12H4m2-6h6"/>',material:["Sin material","Espacio libre de 2 m"],notice:"Golpea al aire sin bloquear del todo codos y rodillas. Pisa con firmeza y deja espacio libre alrededor. Si tienes lesiones de hombro, mu\xF1eca o espalda, o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional.",setName:"Asalto",rest:30,theme:{acc:"#e0293f",hi:"#ff8493",accText:"#ffffff",bgA:"#150407",bgB:"#4a0d18",rim:"#ff7a8a",floor:["#2a1a1d","#1f1214"],musc:"#ffc400",look:{top:14690623,topStyle:"tank",bottom:1316378,shoes:15921906,gloves:14690623,band:15921906},lookF:{top:1316378,topStyle:"bra",bottom:1316378,shoes:15921906,gloves:14690623,band:14690623}},exercises:[{name:"Guardia y rebote",coach:"guard",area:"Calentamiento",mus:["calf","quad","delt"],mode:"guard",cam:vi,key:["Pies al ancho de hombros, uno adelantado.","Pu\xF1os a la altura de la mejilla, codos pegados.","Barbilla baja y rodillas flexibles.","Rebota sobre la punta de los pies."],errors:["Bajar las manos","Pies demasiado juntos","Talones pegados al suelo"],levels:[{t:"Rebote suave",d:["Peque\xF1os botes ligeros manteniendo la guardia."],sets:2,n:30,unit:"s",v:"bounce",f:1.3,rest:20},{t:"Rebote r\xE1pido",d:["Botes m\xE1s r\xE1pidos y ligeros con la guardia alta."],sets:3,n:30,unit:"s",v:"bounce",f:1.8,rest:20},{t:"Rebote y cambio de peso",d:["Bota r\xE1pido y desplaza el peso de una pierna a otra."],sets:3,n:45,unit:"s",v:"bounce",f:2.2,rest:20}]},{name:"Juego de pies",coach:"footwork",area:"Desplazamiento",mus:["quad","glute","calf","abd"],mode:"foot",cam:vi,key:["Mueve primero el pie m\xE1s cercano a la direcci\xF3n.","No cruces nunca los pies.","Mant\xE9n siempre la misma distancia entre ellos."],errors:["Cruzar los pies","Dar pasos demasiado largos","Subirte demasiado"],levels:[{t:"Adelante y atr\xE1s",d:["Un paso adelante y otro atr\xE1s, sin cruzar los pies."],sets:3,n:8,unit:"rep",repT:3,v:"fb"},{t:"Lateral",d:["Pasos laterales, un pie detr\xE1s del otro sin cruzarlos."],sets:3,n:10,unit:"rep",repT:3,v:"side"},{t:"Cuadrado",d:["Dibuja un cuadrado con los pies: adelante, lado, atr\xE1s, lado."],sets:3,n:10,unit:"rep",repT:4,v:"box"}]},{name:"Directos",coach:"punches",area:"Jab y cruzado",mus:["delt","tri","chest","core"],mode:"combo",cam:vi,key:["El jab sale recto y vuelve r\xE1pido a la guardia.","En el cruzado gira cadera y pie trasero.","Aprieta el pu\xF1o solo en el impacto."],errors:["Dejar caer la otra mano","Golpear solo con el brazo","Bloquear el codo"],levels:[{t:"Jab",d:["Lanza la mano adelantada en l\xEDnea recta y vuelve.","Gira un poco el cuerpo."],sets:3,n:20,unit:"rep",...hn(["J"],1)},{t:"Jab \u2013 cruzado",d:["Jab y cruzado seguidos.","Gira cadera y pie en el cruzado."],sets:3,n:14,unit:"rep",...hn(["J","C",null],.7)},{t:"Jab \u2013 jab \u2013 cruzado",d:["Dos jabs r\xE1pidos y cruzado fuerte.","Vuelve siempre a la guardia."],sets:4,n:14,unit:"rep",...hn(["J","J","C",null],.5),bounce:1}]},{name:"Ganchos",coach:"punches",area:"Tronco y hombros",mus:["obl","core","delt","glute"],mode:"combo",cam:vi,key:["Codo a 90\xB0, el pu\xF1o no se mueve de lado a lado: gira el cuerpo.","El gancho sale desde el pie y la cadera.","La otra mano protege la cara."],errors:["Abrir el brazo en c\xEDrculo","Hombro ca\xEDdo","Pierna r\xEDgida"],levels:[{t:"Gancho adelantado",d:["Gancho con la mano de delante, gira el tronco."],sets:3,n:12,unit:"rep",...hn(["LH",null],.8)},{t:"Gancho \u2013 gancho",d:["Gancho con una mano y luego con la otra.","Cambia el peso con cada golpe."],sets:3,n:12,unit:"rep",...hn(["LH","RH",null],.65)},{t:"Jab \u2013 cruzado \u2013 gancho",d:["Jab, cruzado y gancho adelantado.","La cl\xE1sica 1-2-3."],sets:4,n:12,unit:"rep",...hn(["J","C","LH",null],.55),bounce:1}]},{name:"Uppercuts",coach:"punches",area:"Piernas y core",mus:["quad","glute","core","bic"],mode:"combo",cam:vi,key:["Flexiona las rodillas y sube empujando el suelo.","El pu\xF1o sube en vertical, cerca del cuerpo.","Codo pegado a las costillas."],errors:["Golpear desde el brazo","Doblar la espalda","Sacar el codo"],levels:[{t:"Uppercut trasero",d:["Baja un poco y sube con la mano de atr\xE1s."],sets:3,n:12,unit:"rep",...hn(["UR",null],.8)},{t:"Uppercut doble",d:["Alterna uppercut delantero y trasero."],sets:3,n:14,unit:"rep",...hn(["UL","UR",null],.65)},{t:"Gancho \u2013 uppercut",d:["Gancho adelantado y uppercut trasero.","Una combinaci\xF3n corta y dura."],sets:4,n:14,unit:"rep",...hn(["LH","UR",null],.6),bounce:1}]},{name:"Esquivas",coach:"dodge",area:"Defensa y reflejos",mus:["quad","glute","core","obl"],mode:"dodge",cam:{...vi,ty:.92},key:["Esquiva moviendo el cuerpo desde las rodillas.","Las manos siguen arriba protegiendo la cara.","Mira siempre al frente."],errors:["Bajar las manos","Girar la cara","Esquivar demasiado lejos"],levels:[{t:"Esquiva lateral",d:["Inclina el cuerpo a un lado y vuelve."],sets:3,n:12,unit:"rep",repT:2.6,v:"slipL"},{t:"Agacharse",d:["Baja las rodillas y el tronco como si pasara un golpe."],sets:3,n:12,unit:"rep",repT:2.8,v:"duck"},{t:"P\xE9ndulo",d:["Esquiva en U a un lado y al otro sin parar."],sets:4,n:10,unit:"rep",repT:3.6,v:"weave"}]},{name:"Combinaciones",coach:"punches",area:"Cardio y coordinaci\xF3n",mus:["delt","core","quad","glute"],mode:"combo",cam:vi,key:["Respira al golpear, exhalando por la boca.","Alterna ataque y defensa.","Mant\xE9n los pies vivos entre golpes."],errors:["Contener la respiraci\xF3n","Quedarte parado","Golpes sin guardia"],levels:[{t:"1-2 y esquiva",d:["Jab, cruzado y esquiva lateral."],sets:3,n:12,unit:"rep",...hn(["J","C","SL",null],.6),bounce:1},{t:"1-2-3 y defensa",d:["Jab, cruzado, gancho y agacharse."],sets:4,n:12,unit:"rep",...hn(["J","C","LH","D",null],.55),bounce:1},{t:"Cadena larga",d:["Jab, cruzado, gancho, uppercut, esquiva y cubrirse.","Ritmo constante."],sets:4,n:10,unit:"rep",...hn(["J","C","LH","UR","SR","K",null],.5),bounce:1}]},{name:"Asalto final",coach:"punches",area:"Todo a tope",mus:["delt","core","quad","glute","calf"],mode:"combo",cam:vi,key:["\xDAltimo asalto: ritmo alto pero t\xE9cnica limpia.","Respira y mant\xE9n la guardia.","Termina fuerte."],errors:["Perder la guardia por cansancio","Golpes sin giro de cadera"],levels:[{t:"Asalto ligero",d:["Jabs y cruzados r\xE1pidos durante 30 segundos."],sets:2,n:30,unit:"s",seq:["J","J","C",null,"LH","RH",null],pt:.4,bounce:1,rest:20},{t:"Asalto medio",d:["Combinaciones continuas durante 45 segundos."],sets:3,n:45,unit:"s",seq:["J","C","LH","RH","UL","UR"],pt:.38,bounce:1,rest:20},{t:"Asalto m\xE1ximo",d:["Ritmo alto, 60 segundos sin parar."],sets:3,n:60,unit:"s",seq:["J","J","C","LH","RH","UL","UR","SL","SR","D"],pt:.33,bounce:1,rest:25}]}]};var Lt=Math.PI,bu={m:{shoulder:.162,hip:.078,chest:[.152,.215,.108],waist:[.118,.12,.092],pelvis:[.13,.098,.1],limb:1.1,head:[.084,.099,.092],pony:!1},f:{shoulder:.146,hip:.082,chest:[.132,.205,.1],waist:[.1,.12,.086],pelvis:[.138,.1,.102],limb:.98,head:[.079,.095,.088],pony:!0}},wu={skin:13146748,hair:2826008,top:16742938,topStyle:"tank",bottom:1380622,bottomStyle:"shorts",socks:15987699,shoes:1841690,sole:15921129,barefoot:!1,gloves:0,band:0},Yl=new Map;function kg(n){return Yl.has(n)||Yl.set(n,new qt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{color:{value:new Ye(16734768)},opacity:{value:0}},vertexShader:"attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }"})),Yl.get(n)}function Tu(n,e={x:0,z:0},t=0,i="m",s={}){let r=bu[i]||bu.m,a={...wu,...s},l=(B,H)=>new sn({color:B,roughness:H}),c={skin:l(a.skin,.7),top:l(a.top,.62),bottom:l(a.bottom,.65),socks:l(a.socks,.7),shoes:l(a.shoes,.5),sole:l(a.sole,.6),hair:l(a.hair,.85),glove:l(a.gloves||14100029,.42),band:l(a.band||15921906,.6)},o=(B,H,Z,he=0)=>{let pe=new it(new li(B,Math.max(H,.001),8,18),Z);return pe.position.y=he,pe.castShadow=!0,pe},h=(B,H,Z,he,pe=0)=>{let Ge=new it(new Ai(1,28,20),he);return Ge.scale.set(B,H,Z),Ge.position.y=pe,Ge.castShadow=!0,Ge},p={},u=[],d={thigh:{},shin:{},foot:{},sh:{},el:{}},_=(B,H,Z,he,pe,Ge,Ue,Ke,ie,se)=>{let ye=new Ai(1,22,16,ie,se),ze=ye.attributes.uv,Se=new Float32Array(ze.count);for(let rt=0;rt<ze.count;rt++)Se[rt]=Math.pow(Math.max(0,Math.sin(Lt*ze.getY(rt))),.55)*(se<Lt*1.5?Math.pow(Math.max(0,Math.sin(Lt*ze.getX(rt))),.6):1);ye.setAttribute("aa",new Zt(Se,1));let Ve=new it(ye,kg(B));return Ve.scale.set(Z,he,pe),Ve.position.set(Ge,Ue,Ke),Ve.renderOrder=6,Ve.visible=!1,H.add(Ve),(p[B]||(p[B]=[])).push(Ve),Ve},y=[0,Lt],m=[Lt,Lt],f=B=>B>0?[Lt/2,Lt]:[-Lt/2,Lt],A=B=>B>0?[-Lt/2,Lt]:[Lt/2,Lt],L=[0,Lt*2],M=(B,H,Z,he,pe,Ge)=>{let Ue=new It;return Ue.position.set(H,Z,he),B.add(Ue),u.push({o:Ue,r:pe,kind:Ge}),Ue},T=new gt,E=new gt;T.add(E),n.add(T),E.add(h(...r.pelvis,c.bottom,0));let P=new gt;P.position.y=.03,E.add(P);let x=a.topStyle==="bra"?c.skin:c.top;P.add(h(...r.chest,c.top,.2+.07)),P.add(h(r.waist[0],r.waist[1],r.waist[2],x,.08)),P.add(o(.1,.1,x,.07));let w=new gt;w.position.y=.43,P.add(w),w.add(o(.04,.07,c.skin,.045));let R=new gt;R.position.y=.07,w.add(R),R.add(h(...r.head,c.skin,.105));let N=new it(new Ai(1,28,14,0,Lt*2,0,Lt*.45),c.hair);if(N.scale.set(r.head[0]*1.06,r.head[1]*1.08,r.head[2]*1.1),N.position.set(0,.112,-.006),N.rotation.x=-.2,N.castShadow=!0,R.add(N),r.pony){let B=o(.022,.1,c.hair,0);B.position.set(0,.095,-.112),B.rotation.x=.5,R.add(B);let H=h(.03,.03,.03,c.hair,0);H.position.set(0,.138,-.09),R.add(H)}let F=new sn({color:1380623,roughness:.35});for(let B of[-1,1]){let H=h(.0105,.0125,.008,F,.108);H.position.set(B*.032,.108,r.head[2]*.915),H.castShadow=!1,R.add(H);let Z=h(.019,.0045,.007,c.hair,.13);Z.position.set(B*.033,.13,r.head[2]*.9),Z.rotation.z=B*-.12,Z.castShadow=!1,R.add(Z);let he=h(.011,.02,.014,c.skin,.1);he.position.set(B*(r.head[0]-.002),.1,0),R.add(he)}let k=h(.014,.016,.018,c.skin,.098);if(k.position.z=r.head[2]+.006,R.add(k),a.band){let B=new it(new li(.014,r.head[0]*2.2,4,10),c.band);B.rotation.z=Lt/2,B.position.set(0,.14,.012),B.scale.set(1,1,1.4),R.add(B)}let I=a.topStyle==="tee"?c.top:c.skin,W=B=>{let H=new gt;H.position.set(B*r.shoulder,.385,0),P.add(H),H.add(o(.037*r.limb,.15,c.skin,-.11)),H.add(o(.047*r.limb,.05,I,-.045));let Z=new gt;Z.position.y=-.22,H.add(Z),Z.add(o(.031*r.limb,.14,c.skin,-.1));let he=new gt;he.position.y=-.2,Z.add(he),a.gloves?(he.add(h(.066,.075,.06,c.glove,-.06)),he.add(o(.039,.035,c.band,-.005))):(he.add(h(.032,.05,.03,c.skin,-.04)),a.band&&he.add(o(.034,.02,c.band,-.008))),M(he,0,-.03,0,.04,"hand"),M(H,0,0,0,.05,"body"),d.sh[B]=H,d.el[B]=Z,_("delt",H,.066,.074,.066,0,-.03,0,...L),_("bic",H,.05,.1,.05,0,-.12,0,...y),_("tri",H,.05,.1,.05,0,-.12,0,...m)},J=a.bottomStyle==="tights",V=B=>{let H=new gt;H.position.set(B*r.hip,-.01,0),E.add(H),H.add(o(.066*r.limb,.186,J?c.bottom:c.skin,-.155)),H.add(o(.08*r.limb,J?.18:.08,c.bottom,J?-.12:-.075));let Z=new gt;Z.position.y=-.31,H.add(Z),Z.add(o(.05*r.limb,.214,J?c.bottom:c.skin,-.155)),!J&&!a.barefoot&&Z.add(o(.054,.1,c.socks,-.215));let he=new gt;if(he.position.y=-.31,Z.add(he),a.barefoot){let pe=new it(new Xt(.082,.05,.2),J?c.bottom:c.skin);pe.position.set(0,-.045,.05),pe.castShadow=!0,he.add(pe);let Ge=h(.044,.026,.03,J?c.bottom:c.skin,-.05);Ge.position.z=.15,he.add(Ge)}else{let pe=new it(new Xt(.088,.052,.225),c.shoes);pe.position.set(0,-.03,.055),pe.castShadow=!0,he.add(pe);let Ge=new it(new Xt(.092,.02,.232),c.sole);Ge.position.set(0,-.064,.056),he.add(Ge)}M(he,0,-.073,.16,0,"foot"),M(he,0,-.073,-.05,0,"foot"),M(H,0,-.31,.03,.062,"body"),M(Z,0,0,.03,.055,"knee"),d.thigh[B]=H,d.shin[B]=Z,d.foot[B]=he,_("quad",H,.09,.15,.09,0,-.13,0,...y),_("ham",H,.09,.15,.09,0,-.13,0,...m),_("abd",H,.094,.1,.088,0,-.08,0,...f(B)),_("add",H,.084,.13,.078,0,-.14,0,...A(B)),_("calf",Z,.062,.12,.064,0,-.12,-.004,...m),_("ankle",he,.066,.06,.066,0,-.03,.02,...L)};W(1),W(-1),V(1),V(-1),M(R,0,.1,0,.11,"body"),M(E,0,0,0,.1,"body"),M(P,0,.2,0,.1,"body"),_("glute",E,r.pelvis[0]*1.07,.108,r.pelvis[2]*1.08,0,-.01,0,...m),_("core",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...y),_("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...f(1)),_("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...A(1)),_("lumbar",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.1,0,...m),_("back",P,r.chest[0]*1,.13,r.chest[2]*.98,0,.32,0,...m),_("chest",P,r.chest[0]*1,.11,r.chest[2]*1,0,.33,0,...y);let ne=[E,P,w,R,...[1,-1].flatMap(B=>[d.thigh[B],d.shin[B],d.foot[B],d.sh[B],d.el[B]])];return{root:T,pelvis:E,spine:P,neck:w,head:R,JT:d,marks:u,ALL:ne,muscles:p,mats:c,base:e,yaw:t,variant:i,mode:null,blend:null,last:null}}function Eu(n,e){e.remove(n.root),n.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),Object.values(n.mats).forEach(t=>t.dispose())}function Au(n,e){let t={...wu,...e},i=n.mats;i.skin.color.set(t.skin),i.hair.color.set(t.hair),i.top.color.set(t.top),i.bottom.color.set(t.bottom),i.socks.color.set(t.socks),i.shoes.color.set(t.shoes),i.sole.color.set(t.sole),t.gloves&&i.glove.color.set(t.gloves),t.band&&i.band.color.set(t.band)}var Ru={quad:"Cu\xE1driceps",ham:"Isquiotibiales",glute:"Gl\xFAteos",calf:"Gemelos",add:"Aductores",abd:"Gl\xFAteo medio",core:"Abdomen",obl:"Oblicuos",lumbar:"Lumbares",back:"Espalda",chest:"Pecho",delt:"Hombros",tri:"Tr\xEDceps",bic:"B\xEDceps",ankle:"Tobillos"};function Cu(n,e,t,i){for(let s in n.muscles){let r=n.muscles[s],a=r[0].material.uniforms,l=e&&e.includes(s)?t:0;a.opacity.value+=(l-a.opacity.value)*.16,i&&a.color.value.set(i);let c=a.opacity.value>.012;r.forEach(o=>o.visible=c)}}function Pu(n,e){let t=new Ye(e.acc),i=t.clone().multiplyScalar(.35),s=new sn({color:9071178,roughness:.7}),r=new sn({color:2830136,roughness:.45,metalness:.5}),a=new sn({color:i,roughness:.85}),l=new sn({color:t,roughness:.8}),c=d=>(d.castShadow=!0,d.receiveShadow=!0,d),o=new gt;{let d=c(new it(new Xt(.72,.016,1.9),a));d.position.y=.008;let _=c(new it(new Xt(.74,.012,1.92),l));_.position.y=.006,o.add(_,d)}let h=new gt;{let d=c(new it(new Xt(.44,.04,.42),s));d.position.y=.44,h.add(d);for(let[y,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let f=c(new it(new os(.018,.018,.44,10),r));f.position.set(y*.19,.22,m*.18),h.add(f)}let _=c(new it(new Xt(.44,.34,.03),s));_.position.set(0,.68,-.2),h.add(_)}let p=new gt;{let d=c(new it(new li(.018,1,4,12),r));d.rotation.z=Math.PI/2,d.position.set(0,2.05,0),p.add(d);for(let _ of[-1,1]){let y=c(new it(new os(.03,.03,2.05,12),r));y.position.set(_*.5,1.025,0),p.add(y)}}let u={mat:o,chair:h,bar:p};return Object.values(u).forEach(d=>{d.visible=!1,n.add(d)}),{update(d,_,y){for(let[m,f]of Object.entries(u))f.visible=m===d;if(d&&u[d]){let m=y&&y.propAt||[0,0];u[d].position.set(_.base.x+m[0],0,_.base.z+m[1]),u[d].rotation.y=y&&y.propYaw||0}}}}function $l(n,e,t){let i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"),e,t);let s=new zs(i);return s.colorSpace=Ht,s}var po=class{constructor(e,t){this.canvas=e,this.theme=t;try{this.renderer=new co({canvas:e,antialias:!0,alpha:!0})}catch(s){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la p\xE1gina en un navegador actualizado.</div>'),s}let i=this.renderer;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Ri,i.toneMapping=$s,i.toneMappingExposure=1.12,i.setClearColor(0,0),this.scene=new Fs,this.camera=new Bt(32,1,.1,80),this.scene.add(new Xs(12571391,1780258,.85)),this.key=new cs(16777215,2.6),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:18}),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,this.scene.add(this.key,this.key.target),this.rim=new cs(new Ye(t.rim),1.3),this.scene.add(this.rim,this.rim.target),this.buildFloor(),this.props=Pu(this.scene,t),this.cam={az:-40,el:8,dist:3.5,ty:.8,tz:0},this.focus={x:0,z:0},this.scrollZ=0,this.avatar=null,this.look={},this.setAvatar("m",{})}buildFloor(){let e=this.theme,t=$l((r,a,l)=>{for(let o=0;o<8;o++)r.fillStyle=o%2?e.floor[0]:e.floor[1],r.fillRect(0,o*l/8,a,l/8+1);let c=r.getImageData(0,0,a,l);for(let o=0;o<c.data.length;o+=4){let h=(Math.random()-.5)*14;c.data[o]+=h,c.data[o+1]+=h,c.data[o+2]+=h}r.putImageData(c,0,0),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(0,l/2-3,a,6)},512,512);t.wrapS=t.wrapT=es,t.repeat.set(1,2),t.anisotropy=8,this.floorTex=t;let i=$l((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,"#fff"),c.addColorStop(.45,"#fff"),c.addColorStop(1,"#000"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);i.colorSpace="",this.floor=new it(new ci(16,16),new sn({map:t,alphaMap:i,transparent:!0,roughness:.95,metalness:0})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);let s=$l((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,e.acc+"cc"),c.addColorStop(.5,e.acc+"48"),c.addColorStop(1,e.acc+"00"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);this.glow=new it(new ci(3.6,3.6),new ai({map:s,transparent:!0,depthWrite:!1,blending:Ys,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.004,this.scene.add(this.glow),this.ring=new it(new Gs(.8,.84,72),new ai({color:new Ye(e.hi),transparent:!0,opacity:.5,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.006,this.scene.add(this.ring)}setTheme(e){for(let t of[this.floor,this.glow,this.ring])this.scene.remove(t),t.geometry.dispose(),t.material.map&&t.material.map.dispose(),t.material.dispose();this.theme=e,this.rim.color.set(e.rim),this.buildFloor()}setAvatar(e,t){this.look=t,this.avatar&&Eu(this.avatar,this.scene),this.avatar=Tu(this.scene,{x:0,z:0},0,e,t),this.avatar.root.traverse(i=>{i.isMesh&&!i.material.isShaderMaterial&&(i.castShadow=!0)})}recolor(e){this.look=e,Au(this.avatar,e)}resize(){let e=this.canvas.parentElement,t=e.clientWidth,i=e.clientHeight;!t||!i||(this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}frame(e){let{dt:t}=e,i=this.avatar;i.base.x=0,i.base.z=0;let s=vs(i,e.mode,e.t,e.ctx,e.level,Math.min(t,.05),!!e.snap);Cu(i,e.musclesOn?e.muscles:null,.82+.18*Math.sin(e.time/240),this.theme.musc),this.props.update(e.ex&&e.active?e.ex.prop:null,i,s);let r=0,a=0;s.track&&(r=i.root.position.x,a=i.root.position.z),e.snap&&(this.focus.x=r,this.focus.z=a);let l=Math.min(1,Math.min(t,.05)*3.2);this.focus.x+=(r-this.focus.x)*l,this.focus.z+=(a-this.focus.z)*l;let{x:c,z:o}=this.focus;this.floor.position.set(c,0,o),this.glow.position.set(c,.004,o),this.ring.position.set(c,.006,o),this.floorTex.offset.x=c*this.floorTex.repeat.x/16,this.floorTex.offset.y=-this.floorTex.repeat.y*o/16,this.key.position.set(c-3.2,5.2,o+3.6),this.key.target.position.set(c,0,o),this.rim.position.set(c+3.5,2.8,o-3.5),this.rim.target.position.set(c,0,o);let h=e.cam||{az:-38,el:7,dist:3.5,ty:.8},p=e.view&&e.view.az!==null?e.view.az:null,u=Math.sin(e.time/4200)*6,d=(p!==null&&e.active?p:h.az)+e.drag.az+u,_=this.camera.aspect,y=h.dist*(_<1.1?Math.pow(1.1/_,.62):1),m=this.cam,f=Math.min(1,Math.min(t,.05)*3.2);m.az+=(d-m.az)*f,m.el+=(h.el+e.drag.el-m.el)*f,m.dist+=(y-m.dist)*f,m.ty+=(h.ty-m.ty)*f,m.tz+=((h.tz||0)-m.tz)*f;let A=yt(m.az),L=yt(m.el);return this.camera.position.set(c+Math.sin(A)*Math.cos(L)*m.dist,m.ty+Math.sin(L)*m.dist,o+m.tz+Math.cos(A)*Math.cos(L)*m.dist),this.camera.lookAt(c,m.ty,o+m.tz),this.renderer.render(this.scene,this.camera),s}};var $={nose:0,shL:11,shR:12,elL:13,elR:14,wrL:15,wrR:16,hipL:23,hipR:24,knL:25,knR:26,anL:27,anR:28,heL:29,heR:30,ftL:31,ftR:32},jl=n=>n*180/Math.PI,Tt=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function zg(n,e,t){let i={x:n.x-e.x,y:n.y-e.y},s={x:t.x-e.x,y:t.y-e.y},r=Math.hypot(i.x,i.y)*Math.hypot(s.x,s.y);return r<1e-6?180:jl(Math.acos(Math.max(-1,Math.min(1,(i.x*s.x+i.y*s.y)/r))))}function vt(n,e,t,i=.6){let s={x:n.x-e.x,y:n.y-e.y,z:((n.z||0)-(e.z||0))*i},r={x:t.x-e.x,y:t.y-e.y,z:((t.z||0)-(e.z||0))*i},a=Math.hypot(s.x,s.y,s.z)*Math.hypot(r.x,r.y,r.z);return a<1e-6?180:jl(Math.acos(Math.max(-1,Math.min(1,(s.x*r.x+s.y*r.y+s.z*r.z)/a))))}function fr(n,e){return Math.abs(jl(Math.atan2(Math.abs(e.x-n.x),Math.abs(e.y-n.y))))}var Jl=class n{constructor(e,t,i){this.mc=e,this.beta=t,this.dc=i,this.x=null,this.dx=0}static alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t,i){if(this.x===null)return this.x=e,e;let s=(e-this.x)/t/i,r=n.alpha(this.dc,t);this.dx+=(s-this.dx)*r;let a=this.mc+this.beta*Math.abs(this.dx),l=n.alpha(a,t);return this.x+=(e-this.x)*l,this.x}},Zl=class{constructor({minCutoff:e=.8,beta:t=1.2,dCutoff:i=1}={}){this.cfg={minCutoff:e,beta:t,dCutoff:i},this.reset()}reset(){this.f=null,this.p=null,this.t=null}push(e,t=0){if(!this.f)return this.f=e.map(()=>["x","y","z"].map(()=>new Jl(this.cfg.minCutoff,this.cfg.beta,this.cfg.dCutoff))),this.p=e.map(r=>({x:r.x,y:r.y,z:r.z||0,visibility:r.visibility})),this.t=t,this.p;let i=(t-this.t)/1e3;i>.001||(i=1/30),i>.5&&(i=.5),this.t=t;let s=Math.max(Tt(e[$.shL],e[$.hipL]),Tt(e[$.shR],e[$.hipR]),.001);for(let r=0;r<e.length;r++){let a=e[r],l=this.p[r],c=this.f[r];(a.visibility??1)<.3&&(l.visibility??1)<.3&&(c[0].x=a.x,c[1].x=a.y,c[2].x=a.z||0),l.x=c[0].filter(a.x,i,s),l.y=c[1].filter(a.y,i,s),l.z=c[2].filter(a.z||0,i,s),l.visibility=a.visibility}return this.p}},qn=class{constructor(e=500,t=.6){this.w=e,this.r=t,this.h=[]}push(e,t){for(this.h.push({t,f:e});this.h.length&&t-this.h[0].t>this.w;)this.h.shift();let i=this.h.length;if(i<4)return[];let s={};for(let r of this.h)for(let a of r.f)s[a]=(s[a]||0)+1;return Object.keys(s).filter(r=>s[r]/i>=this.r)}},Kl=class{constructor(e){this.cfg=e,this.h=[],this.done=!1,this.rest=null,this.lo=e.lo,this.hi=e.hi}push(e,t){let i=this.cfg.hi-20;if(this.done||e<i){e<i&&(this.h.length=0);return}for(this.h.push({t,s:e});this.h.length&&t-this.h[0].t>1e3;)this.h.shift();if(this.h.length<8||t-this.h[0].t<900)return;let s=1/0,r=-1/0,a=0;for(let c of this.h)s=Math.min(s,c.s),r=Math.max(r,c.s),a+=c.s;if(r-s>6)return;this.rest=a/this.h.length;let l=this.cfg.hiDrop??12;this.hi=Math.min(this.cfg.hi+10,Math.max(this.cfg.hi-14,this.rest-l)),this.lo=this.hi-(this.cfg.hi-this.cfg.lo),this.done=!0}};function en(n,e,t){let i=n[e],s=n[t],r=i.visibility??1,a=s.visibility??1;if(r>=.5&&a>=.5){let l=r*r,c=a*a,o=l+c;return{x:(i.x*l+s.x*c)/o,y:(i.y*l+s.y*c)/o,z:((i.z||0)*l+(s.z||0)*c)/o,visibility:Math.max(r,a)}}return r>=a?i:s}function Tn(n){let e=Tt(n[$.shL],n[$.shR]),t=Math.max(Tt(en(n,$.shL,$.shR),en(n,$.hipL,$.hipR)),.001),i=e/t;return i<.35?"side":i>.55?"front":"oblique"}var Ni=class{constructor(e,t,i=500){this.lo=e,this.hi=t,this.minMs=i,this.reset()}reset(){this.phase="rest",this.min=1/0,this.t0=0,this.flags=new Set,this.reached=!1,this.count=0,this.good=0}flag(e){this.phase==="down"&&this.flags.add(e)}push(e,t){if(this.phase==="rest")return e<this.lo&&(this.phase="down",this.min=e,this.t0=t,this.flags=new Set),null;if(e<this.min&&(this.min=e),e>this.hi){this.phase="rest";let i=t-this.t0>=this.minMs,s=i?{min:this.min,flags:this.flags}:null;return i&&this.count++,s}return null}};function mo(n){let e={sh:en(n,$.shL,$.shR),el:en(n,$.elL,$.elR),wr:en(n,$.wrL,$.wrR),hip:en(n,$.hipL,$.hipR),kn:en(n,$.knL,$.knR),an:en(n,$.anL,$.anR),he:en(n,$.heL,$.heR),ft:en(n,$.ftL,$.ftR)};return e.vis=(e.sh.visibility+e.hip.visibility+e.kn.visibility+e.an.visibility)/4,e}var On="Col\xF3cate de lado, a 2-3 m, con el cuerpo entero a la vista.";function un(n){return()=>{let e=new Ni(n.lo,n.hi,n.minMs||600),t=n.calib===!1?null:new Kl(n),i=new qn,s=n.chain||mo,r={};return{reps:e,calib:t,push(a,l){let c=s(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:Tn(a),calibrated:!t||t.done};if(!o.ok)return o;let h=n.measure(c,a,l,r);if(h===null)return o;o.metric=Math.round(h.signal),t&&(t.push(h.signal,l),o.calibrated=t.done,e.lo=t.lo,e.hi=t.hi);let p=i.push(n.flags?n.flags(c,h,a):[],l);for(let d of p)e.flag(d);let u=e.push(h.signal,l);e.phase==="down"&&(o.phase="down");for(let d of p)o.ev.push({type:"tip",key:d});if(u){let d=[...u.flags];n.good!==void 0&&u.min>n.good&&d.push(n.shallowKey||"shallow");let _=d.length===0;_&&e.good++,o.ev.push({type:"rep",good:_,issues:d,n:e.count})}return o}}}}var Dt={squat:{name:"Sentadilla",view:"de lado",wants:"side",hint:On,create:un({lo:125,hi:160,good:105,measure:n=>({signal:vt(n.hip,n.kn,n.an),lean:fr(n.hip,n.sh)}),flags:(n,e)=>{let t=[];return e.signal<125&&e.lean>58&&t.push("chest"),n.he&&n.ft&&n.ft.y-n.he.y>.07*Tt(n.hip,n.an)&&e.signal<140&&t.push("heels"),t}})},lunge:{name:"Zancada",view:"de lado",wants:"side",hint:On,create:()=>{let n=new Ni(125,158,700),e=new qn;return{reps:n,push(t,i){let s=Math.min((t[$.hipL].visibility+t[$.knL].visibility+t[$.anL].visibility)/3,(t[$.hipR].visibility+t[$.knR].visibility+t[$.anR].visibility)/3),r={ev:[],ok:s>=.4,view:Tn(t),calibrated:!0};if(!r.ok)return r;let a=vt(t[$.hipL],t[$.knL],t[$.anL]),l=vt(t[$.hipR],t[$.knR],t[$.anR]),c=Math.min(a,l);r.metric=Math.round(c);let o={x:(t[$.shL].x+t[$.shR].x)/2,y:(t[$.shL].y+t[$.shR].y)/2},h={x:(t[$.hipL].x+t[$.hipR].x)/2,y:(t[$.hipL].y+t[$.hipR].y)/2},p=fr(h,o),u=[];c<140&&p>35&&u.push("upright");let d=e.push(u,i);for(let y of d)n.flag(y);let _=n.push(c,i);for(let y of d)r.ev.push({type:"tip",key:y});if(_){let y=[..._.flags];_.min>108&&y.push("shallow");let m=y.length===0;m&&n.good++,r.ev.push({type:"rep",good:m,issues:y,n:n.count})}return r}}}},pushup:{name:"Flexi\xF3n",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista y el m\xF3vil a la altura del suelo.",create:un({lo:110,hi:155,good:95,minMs:600,measure:n=>({signal:vt(n.sh,n.el,n.wr)}),flags:n=>{let e=[],t=ys(n);return t>.09?e.push("sag"):t<-.09&&e.push("pike"),e}})},bridge:{name:"Puente de gl\xFAteos",view:"de lado",wants:"side",hint:"T\xFAmbate de lado respecto a la c\xE1mara, con hombros, cadera y rodillas a la vista.",create:un({lo:22,hi:45,good:15,minMs:700,measure:n=>({signal:180-zg(n.sh,n.hip,n.kn)}),flags:()=>[]})},plank:{name:"Plancha",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista.",isometric:!0,create:()=>{let n=0,e=null,t=0;return{reps:{count:0,good:0},get seconds(){return Math.floor(n/1e3)},push(i,s){let r=mo(i),a={ev:[],ok:r.vis>=.5,view:Tn(i),calibrated:!0};if(!a.ok)return e=null,a;let l=e===null?0:Math.min(s-e,200);e=s;let c=vt(r.sh,r.hip,r.an),o=ys(r);a.metric=Math.round(c);let h=c>=163&&Math.abs(o)<.09;return h?(n+=l,t=0):(t+=l,t>1200&&a.ev.push({type:"tip",key:o>0?"sag":"pike"})),a.holding=h,a}}}},jacks:{name:"Jumping jacks",view:"de frente",wants:"front",hint:"Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista y espacio para abrir brazos y piernas.",create:()=>{let n="closed",e=0,t=!1,i=!1,s=!1,r=!1,a={count:0,good:0};return{reps:a,push(l,c){let o=(l[$.shL].visibility+l[$.shR].visibility+l[$.anL].visibility+l[$.anR].visibility)/4,h={ev:[],ok:o>=.5,view:Tn(l),calibrated:!0};if(!h.ok)return h;let p=Math.max(Tt(l[$.shL],l[$.shR]),.001),u=Tt(l[$.anL],l[$.anR]),d=(l[$.wrL].y+l[$.wrR].y)/2<l[$.nose].y,_=(l[$.wrL].y+l[$.wrR].y)/2>(l[$.shL].y+l[$.shR].y)/2;i=u>p*1.7;let y=u<p*1.15;if(t=d,h.metric=Math.round(u/p*10)/10,n==="closed"&&(t||i)&&(n="open",e=c,s=!1,r=!1),n==="open"&&(t&&(s=!0),i&&(r=!0),_&&y&&(n="closed",c-e>250))){a.count++;let m=s&&r,f=[];r?s||f.push("arms"):f.push("legs"),m&&a.good++,h.ev.push({type:"rep",good:m,issues:f,n:a.count})}return h}}}}};function ys(n){let e=n.an.x-n.sh.x,t=n.an.y-n.sh.y,i=Math.hypot(e,t);if(i<1e-6)return 0;let s=n.sh.y+(n.hip.x-n.sh.x)/(e||1e-6)*t;return(n.hip.y-s)/i}var Ms={chest:"Pecho arriba, no te inclines tanto",heels:"Mant\xE9n los talones en el suelo",upright:"Tronco recto en la zancada",sag:"Cadera demasiado baja, aprieta el abdomen",pike:"Baja la cadera, cuerpo en l\xEDnea recta",shallow:"Baja un poco m\xE1s",legs:"Abre m\xE1s las piernas",arms:"Sube m\xE1s los brazos"},Iu=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32]],Di=class{constructor(e){this.kind=e,this.def=Dt[e],this.sm=new Zl,this.an=this.def.create(),this.lastTip={},this.log=[]}get reps(){return this.an.reps}push(e,t){let i=this.sm.push(e,t),s=this.an.push(i,t);return s.ev=s.ev.filter(r=>{if(r.type==="tip"){if(t-(this.lastTip[r.key]||-1e9)<6e3)return!1;this.lastTip[r.key]=t,r.msg=Ms[r.key]}else r.type==="rep"&&(r.msg=r.issues.length?Ms[r.issues[0]]:"\xA1Buena t\xE9cnica!");return!0}),s}};Object.assign(Ms,{guard:"Sube la guardia: pu\xF1os a la altura de la barbilla",short:"Da un paso m\xE1s largo",hips:"Cadera nivelada, no la desplaces",kneeFoot:"No apoyes el pie en la rodilla: en el tobillo o la pantorrilla",legHigh:"No subas tanto la pierna, cadera estable",hipsTurn:"Gira desde el pecho, con la cadera quieta",trunk:"Tronco erguido",kneesTogether:"Rodillas juntas",pikeHips:"Mant\xE9n la cadera bien arriba",deeper:"Baja un poco m\xE1s",lower:"Baja m\xE1s la cadera",rise:"Sube del todo",tall:"Crece hacia arriba, espalda larga",kneeLow:"Rodilla de atr\xE1s m\xE1s cerca del suelo",fold:"Pliega m\xE1s desde la cadera",pose:"Entra en la postura y mantenla",hands:"Manos bajo los hombros y rodillas bajo la cadera",heel:"Lleva el tal\xF3n m\xE1s cerca del gl\xFAteo",knee:"Rodilla m\xE1s alta",bigger:"C\xEDrculos m\xE1s grandes",hipsStill:"Hombros quietos, mueve solo la cadera",neck:"No tires del cuello, mira al techo",plankLine:"Cuerpo en l\xEDnea recta en la plancha",floor:"Baja hasta el suelo",stand:"Ponte de pie del todo",wide:"Salta m\xE1s lejos hacia el lado"});function Yn(n){let e={nose:n[$.nose],shL:n[$.shL],shR:n[$.shR],elL:n[$.elL],elR:n[$.elR],wrL:n[$.wrL],wrR:n[$.wrR],hipL:n[$.hipL],hipR:n[$.hipR],knL:n[$.knL],knR:n[$.knR],anL:n[$.anL],anR:n[$.anR]};return e.sh=en(n,$.shL,$.shR),e.hip=en(n,$.hipL,$.hipR),e.an=en(n,$.anL,$.anR),e.shW=Math.max(Tt(e.shL,e.shR),.001),e.torso=Math.max(Tt(e.sh,e.hip),.001),e.vis=(e.shL.visibility+e.shR.visibility+e.hipL.visibility+e.hipR.visibility)/4,e}function Ui(n){let e=mo(n);return e.torso=Math.max(Tt(e.sh,e.hip),.001),e.nose=n[$.nose],e.L={kn:n[$.knL],an:n[$.anL],wr:n[$.wrL],hip:n[$.hipL],sh:n[$.shL]},e.R={kn:n[$.knR],an:n[$.anR],wr:n[$.wrR],hip:n[$.hipR],sh:n[$.shR]},e}var ec=(...n)=>n.reduce((e,t)=>e+(t.visibility??1),0)/n.length;function Vt(n){return()=>{let e=0,t=null,i=0,s=n.chain||Ui;return{reps:{count:0,good:0},get seconds(){return Math.floor(e/1e3)},push(r,a){let l=s(r),c={ev:[],ok:l.vis>=(n.minVis??.5),view:Tn(r),calibrated:!0};if(!c.ok)return t=null,c;let o=t===null?0:Math.min(a-t,200);t=a;let h=null,p=!1;for(let u of n.checks){let d=u(l,r,a);if(d&&d.ok){p=!0;break}d&&d.tip&&!h&&(h=d.tip)}return p?(e+=o,i=0):(i+=o,i>1500&&c.ev.push({type:"tip",key:h||"pose"})),c.holding=p,c}}}}function Ql(n){return()=>{let e=new Ni(n.lo,n.hi,n.minMs||150),t=new Ni(n.lo,n.hi,n.minMs||150),i={count:0,good:0},s=new qn,r=n.chain||Ui;return{reps:i,push(a,l){let c=r(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:Tn(a),calibrated:!0};if(!o.ok)return o;let[h,p]=n.measure(c,a);o.metric=Math.round(Math.min(h,p));let u=s.push(n.flags?n.flags(c,a):[],l);for(let d of u)o.ev.push({type:"tip",key:d});for(let[d,_]of[[e,h],[t,p]]){for(let m of u)d.flag(m);let y=d.push(_,l);if(y){i.count++;let m=[...y.flags];n.good!==void 0&&y.min>n.good&&m.push(n.shallowKey||"shallow");let f=m.length===0;f&&i.good++,o.ev.push({type:"rep",good:f,issues:m,n:i.count})}}return o}}}}function pr(n){return()=>{let e=null,t=0,i=0,s={count:0,good:0},r=new qn,a=n.chain||Yn;return{reps:s,push(l,c){let o=a(l),h={ev:[],ok:o.vis>=(n.minVis??.5),view:Tn(l),calibrated:!0};if(!h.ok)return h;let p=n.measure(o,l);e===null?e=n.base===void 0?p:n.base:n.base===void 0&&(e+=(p-e)*.02);let u=p-e;h.metric=Math.round(u*100)/100;let d=r.push(n.flags?n.flags(o,l):[],c);for(let m of d)h.ev.push({type:"tip",key:m});let _=n.th,y=u>_?1:u<-_?-1:0;if(y!==0&&y!==t){if(t!==0&&c-i>(n.minMs||200)){s.count++;let m=d.length===0;m&&s.good++,h.ev.push({type:"rep",good:m,issues:d,n:s.count})}t=y,i=c}return h}}}}function Vg(n={}){return()=>{let e=null,t=!1,i=0,s={count:0,good:0};return{reps:s,push(r,a){let l=Yn(r),c={ev:[],ok:ec(l.anL,l.anR,l.hipL,l.hipR)>=.5,view:Tn(r),calibrated:!0};if(!c.ok)return c;let o=Math.max(l.anL.y,l.anR.y);e===null||o>e?e=o:e+=(o-e)*.005;let h=(e-o)/l.torso;c.metric=Math.round(h*100);let p=n.th||.1;return!t&&h>p?(t=!0,i=a):t&&h<p*.4&&(t=!1,a-i>80&&a-i<1200&&(s.count++,s.good++,c.ev.push({type:"rep",good:!0,issues:[],n:s.count}))),c}}}}function Gg(){return()=>{let n={count:0,good:0},e=new qn(800,.7),t={L:{ext:0,t:0,armed:!0},R:{ext:0,t:0,armed:!0}};return{reps:n,push(i,s){let r=Yn(i),a={ev:[],ok:ec(r.shL,r.shR,r.wrL,r.wrR)>=.5,view:Tn(i),calibrated:!0};if(!a.ok)return a;let l=(d,_)=>Math.hypot(d.x-_.x,d.y-_.y,((d.z||0)-(_.z||0))*.8)/r.torso,c=l(r.wrL,r.shL),o=l(r.wrR,r.shR);a.metric=Math.round(Math.max(c,o)*100);let h=d=>d.y>r.sh.y+.35*r.torso,p=[];t.L.armed&&t.R.armed&&(h(r.wrL)||h(r.wrR))&&p.push("guard");let u=e.push(p,s);for(let d of u)a.ev.push({type:"tip",key:d});for(let[d,_,y,m]of[["L",c,r.wrL,r.shL],["R",o,r.wrR,r.shR]]){let f=t[d];if(f.t===0){f.ext=_,f.t=s;continue}let A=Math.max(s-f.t,1)/1e3,L=(_-f.ext)/A,M=Math.abs(y.y-m.y)<.5*r.torso;f.armed&&L>2.2&&_>.62&&M?(f.armed=!1,n.count++,n.good++,a.ev.push({type:"rep",good:!0,issues:[],n:n.count})):!f.armed&&(_<.5||!M)&&(f.armed=!0),f.ext=_,f.t=s}return a}}}}function Hg(n){return()=>{let e={count:0,good:0},t={L:{a:null,sum:0},R:{a:null,sum:0}},i=new qn(1e3,.7);return{reps:e,push(s,r){let a=Yn(s),l={ev:[],ok:a.vis>=.5,view:Tn(s),calibrated:!0};if(!l.ok)return l;let c=[];for(let o of["L","R"]){let{p:h,o:p,r:u}=n.pair(a,o);if(ec(h,p)<.5)continue;let d=Math.atan2(h.y-p.y,h.x-p.x),_=t[o];if(_.a!==null){let y=d-_.a;y>Math.PI&&(y-=2*Math.PI),y<-Math.PI&&(y+=2*Math.PI),_.sum+=y,Math.abs(_.sum)>=2*Math.PI&&(_.sum-=Math.sign(_.sum)*2*Math.PI,e.count++,e.good++,l.ev.push({type:"rep",good:!0,issues:[],n:e.count}))}_.a=d,n.minR&&u<n.minR&&c.push("bigger")}l.metric=e.count;for(let o of i.push(c,r))l.ev.push({type:"tip",key:o});return l}}}}var Du=n=>Math.min(vt(n.L.hip,n.L.kn,n.L.an),vt(n.R.hip,n.R.kn,n.R.an)),Wg=n=>Math.max(vt(n.L.hip,n.L.kn,n.L.an),vt(n.R.hip,n.R.kn,n.R.an)),Xg=n=>Math.abs(n.sh.y-n.hip.y)<.45*n.torso&&Math.abs(n.hip.y-n.an.y)<.6*n.torso,qg=n=>{let e=Du(n),t=Wg(n);return e>135?{ok:!1,tip:"lower"}:t<125&&n.L.kn.y<n.hip.y+.3*n.torso&&n.R.kn.y<n.hip.y+.3*n.torso?{ok:!1,tip:"short"}:{ok:e>=70}},Lu=n=>{let e=Du(n),t=Math.max(n.L.kn.y,n.R.kn.y);return e>130?{ok:!1,tip:"lower"}:t<n.hip.y+.45*n.torso?{ok:!1,tip:"kneeLow"}:{ok:!0}},Nu=n=>n.sh.y<n.hip.y+.25*n.torso&&n.sh.y>n.hip.y-.35*n.torso&&n.wr.y>n.sh.y+.6*n.torso&&Math.abs(n.wr.x-n.sh.x)<.45*n.torso,Yg=n=>vt(n.hip,n.kn,n.an)>105?{ok:!1,tip:"deeper"}:n.he&&n.ft&&n.ft.y-n.he.y>.07*Tt(n.hip,n.an)?{ok:!1,tip:"heels"}:{ok:!0},En="Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",dn="Col\xF3cate de lado, con el m\xF3vil cerca del suelo y el cuerpo entero a la vista.";Object.assign(Dt,{crunch:{name:"Abdominales",view:"de lado",wants:"side",hint:dn,create:un({lo:150,hi:162,good:142,hiDrop:6,minMs:400,measure:n=>({signal:vt(n.sh,n.hip,n.kn)}),flags:n=>n.nose.visibility>.5&&Tt(n.nose,n.sh)<.32*n.torso?["neck"]:[],chain:Ui})},superman:{name:"Superman",view:"de lado",wants:"side",hint:dn,create:un({lo:90,hi:97,good:84,hiDrop:4,minMs:400,chain:Ui,measure:n=>({signal:100-(Math.max(0,n.hip.y-n.sh.y)+Math.max(0,n.hip.y-n.an.y))/n.torso*100})})},jump:{name:"Saltos",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista, pies incluidos.",label:"saltos",create:Vg()},guard:{name:"Guardia",view:"de frente",wants:"front",hint:En,isometric:!0,create:Vt({chain:Yn,checks:[n=>{let e=t=>t.y<n.sh.y+.25*n.torso&&t.y>n.nose.y-.2*n.torso;return e(n.wrL)&&e(n.wrR)?{ok:!0}:{ok:!1,tip:"guard"}}]})},footwork:{name:"Juego de pies",view:"de frente",wants:"front",hint:En,label:"pasos",create:pr({th:.08,measure:n=>n.shW/n.torso,flags:n=>n.wrL.y>n.sh.y+.4*n.torso&&n.wrR.y>n.sh.y+.4*n.torso?["guard"]:[]})},punches:{name:"Golpes",view:"de frente",wants:"front",hint:En+" Golpea hacia la c\xE1mara.",label:"golpes",create:Gg()},dodge:{name:"Esquivas",view:"de frente",wants:"front",hint:En,label:"esquivas",create:un({chain:Yn,calib:!1,lo:.5,hi:.78,minMs:150,measure:(n,e,t,i)=>{i.baseY===void 0?i.baseY=n.nose.y:n.nose.y<i.baseY&&(i.baseY+=(n.nose.y-i.baseY)*.05);let s=Math.abs(n.nose.x-n.hip.x)/n.shW/.55,r=(n.nose.y-i.baseY)/n.torso/.22;return{signal:1-Math.max(s,r)}}})},mountain:{name:"Monta\xF1a",view:"de frente",wants:"front",hint:En,isometric:!0,create:Vt({chain:Yn,checks:[n=>Math.abs(n.sh.x-n.hip.x)<.2*n.torso&&n.hip.y<n.an.y-.9*n.torso?{ok:!0}:{ok:!1,tip:"tall"}]})},tree:{name:"\xC1rbol",view:"de frente",wants:"front",hint:En,isometric:!0,create:Vt({chain:Yn,checks:[n=>{let e=n.anL.y-n.anR.y;if(!(Math.abs(e)>.12*n.torso))return{ok:!1,tip:"pose"};let i=e>0?n.anR:n.anL,s=e>0?n.knL:n.knR;return Math.abs(i.y-s.y)<.1*n.torso?{ok:!1,tip:"kneeFoot"}:Math.abs(n.hipL.y-n.hipR.y)>.1*n.torso?{ok:!1,tip:"hips"}:{ok:!0}}]})},warrior:{name:"Guerrero",view:"de lado",wants:null,hint:"Col\xF3cate de lado o en diagonal a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",isometric:!0,create:Vt({checks:[qg]})},dogPlankCobra:{name:"Perro, plancha y cobra",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>{let e=vt(n.sh,n.hip,n.an);return n.hip.y<n.sh.y-.15*n.torso&&e>50&&e<115?{ok:!0}:null},n=>{let e=vt(n.sh,n.hip,n.an);return Math.abs(n.sh.y-n.hip.y)<.4*n.torso&&e<160?{ok:!1,tip:ys(n)>0?"sag":"pike"}:e>=160&&Math.abs(ys(n))<.09?{ok:!0}:null},n=>n.sh.y<n.hip.y-.3*n.torso&&n.hip.y>n.an.y-.35*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},catCow:{name:"Gato y vaca",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>Nu(n)?{ok:!0}:{ok:!1,tip:"hands"}]})},birdDog:{name:"P\xE1jaro-perro",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>{if(!Nu(n))return{ok:!1,tip:"hands"};let e=n.L.an.y<n.R.an.y?n.L:n.R;return e.an.y<n.hip.y-.2*n.torso?{ok:!1,tip:"legHigh"}:e.an.y<n.hip.y+.45*n.torso&&Math.abs(e.an.x-n.hip.x)>.7*n.torso?{ok:!0}:{ok:!1,tip:"pose"}}]})},seatedFold:{name:"Pinza sentada",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>{if(!(n.hip.y>n.kn.y-.3*n.torso&&Math.abs(n.hip.y-n.an.y)<.5*n.torso))return{ok:!1,tip:"pose"};let t=vt(n.sh,n.hip,n.kn);return t<125||t>150?{ok:!0}:{ok:!1,tip:"fold"}}]})},childRelax:{name:"Ni\xF1o y relajaci\xF3n",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>n.sh.y>n.an.y-.8*n.torso&&n.hip.y>n.an.y-.8*n.torso?{ok:!0}:{ok:!1,tip:"floor"}]})},armCircles:{name:"C\xEDrculos de brazos",view:"de frente",wants:"front",hint:En,label:"c\xEDrculos",create:Hg({pair:(n,e)=>({p:n["wr"+e],o:n["sh"+e],r:Tt(n["wr"+e],n["sh"+e])/n.torso}),minR:.55})},torsoRot:{name:"Rotaci\xF3n de tronco",view:"de frente",wants:"front",hint:En,label:"giros",create:pr({th:.12,base:0,measure:n=>((n.shL.z||0)-(n.shR.z||0))/n.torso,flags:n=>Tt(n.hipL,n.hipR)<.55*n.shW?["hipsTurn"]:[]})},hipCircles:{name:"C\xEDrculos de cadera",view:"de frente",wants:"front",hint:En,label:"c\xEDrculos",create:pr({th:.06,measure:n=>(n.hip.x-n.an.x)/n.torso,flags:n=>Math.abs(n.sh.x-n.hip.x)>.22*n.torso?["hipsStill"]:[]})},legSwing:{name:"Balanceo de piernas",view:"de lado",wants:null,hint:"Col\xF3cate de lado a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",label:"balanceos",create:pr({chain:Ui,th:.25,base:0,measure:n=>{let e=Math.abs(n.L.an.y-n.L.hip.y)<Math.abs(n.R.an.y-n.R.hip.y)?n.L:n.R;return(e.an.x-e.hip.x)/n.torso},flags:n=>fr(n.hip,n.sh)>22?["trunk"]:[]})},wgs:{name:"Estocada con rotaci\xF3n",view:"de lado",wants:null,hint:On,isometric:!0,create:Vt({checks:[Lu]})},deepSquat:{name:"Sentadilla profunda",view:"de lado",wants:"side",hint:On,isometric:!0,create:Vt({checks:[Yg]})},quadStand:{name:"Cu\xE1driceps de pie",view:"de lado",wants:"side",hint:On,isometric:!0,create:Vt({checks:[n=>(n.L.an.y<n.R.an.y?n.L:n.R).an.y>n.hip.y+.5*n.torso?{ok:!1,tip:"heel"}:Math.abs(n.L.kn.x-n.R.kn.x)>.3*n.torso?{ok:!1,tip:"kneesTogether"}:{ok:!0}]})},fwdFold:{name:"Flexi\xF3n adelante",view:"de lado",wants:"side",hint:On,isometric:!0,create:Vt({checks:[n=>vt(n.sh,n.hip,n.kn)<95?{ok:!0}:{ok:!1,tip:"fold"}]})},chestOpen:{name:"Apertura de pecho",view:"de frente",wants:"front",hint:En,isometric:!0,create:Vt({chain:Yn,checks:[n=>n.wrL.y>n.hip.y-.1*n.torso&&n.wrR.y>n.hip.y-.1*n.torso&&Tt(n.wrL,n.wrR)<.6*n.shW?{ok:!0}:{ok:!1,tip:"pose"}]})},figure4:{name:"Figura 4",view:"de lado",wants:"side",hint:dn,isometric:!0,create:Vt({checks:[n=>Xg(n)&&Math.min(n.L.kn.y,n.R.kn.y)<n.hip.y-.25*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},hipFlexor:{name:"Flexor de cadera",view:"de lado",wants:"side",hint:On,isometric:!0,create:Vt({checks:[n=>{let e=Lu(n);return e.ok&&fr(n.hip,n.sh)>30?{ok:!1,tip:"trunk"}:e}]})},chairDip:{name:"Fondos en silla",view:"de lado",wants:"side",hint:On,create:un({lo:125,hi:158,good:105,minMs:500,measure:n=>({signal:vt(n.sh,n.el,n.wr)})})},pikePush:{name:"Flexi\xF3n en pica",view:"de lado",wants:"side",hint:dn,create:un({lo:125,hi:158,good:100,minMs:500,measure:n=>({signal:vt(n.sh,n.el,n.wr),hip:vt(n.sh,n.hip,n.an)}),flags:(n,e)=>e.hip>135?["pikeHips"]:[]})},stepUp:{name:"Subidas a la silla",view:"de lado",wants:null,hint:On,label:"subidas",create:un({calib:!1,lo:55,hi:85,good:40,minMs:300,shallowKey:"rise",chain:Ui,measure:(n,e,t,i)=>(i.base===void 0||n.hip.y>i.base?i.base=n.hip.y:i.base+=(n.hip.y-i.base)*.003,{signal:100-(i.base-n.hip.y)/n.torso*100})})},legRaise:{name:"Elevaci\xF3n de piernas",view:"de lado",wants:"side",hint:dn,create:un({lo:140,hi:163,good:115,hiDrop:8,minMs:500,measure:n=>({signal:vt(n.sh,n.hip,n.kn)})})},highKnees:{name:"Rodillas altas",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"rodillas",create:Ql({lo:50,hi:70,good:30,shallowKey:"knee",minMs:100,measure:n=>[(n.L.kn.y-n.L.hip.y)/n.torso*100,(n.R.kn.y-n.R.hip.y)/n.torso*100]})},mountainClimber:{name:"Mountain climbers",view:"de lado",wants:"side",hint:dn,label:"rodillas",create:Ql({lo:135,hi:165,good:115,shallowKey:"knee",minMs:100,measure:n=>[Tt(n.L.kn,n.L.sh)/n.torso*100,Tt(n.R.kn,n.R.sh)/n.torso*100],flags:n=>Math.abs(ys(n))>.14?["plankLine"]:[]})},skater:{name:"Patinador",view:"de frente",wants:"front",hint:En,label:"saltos",create:pr({th:.6,measure:n=>n.hip.x/n.shW,minMs:250})},burpee:{name:"Burpees",view:"de lado",wants:"side",hint:dn,label:"burpees",create:un({calib:!1,lo:120,hi:220,good:90,shallowKey:"floor",minMs:700,chain:Ui,measure:n=>({signal:(n.an.y-n.sh.y)/n.torso*100})})},buttKicks:{name:"Talones al gl\xFAteo",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"talones",create:Ql({lo:130,hi:160,good:105,shallowKey:"heel",minMs:100,measure:n=>[Tt(n.L.an,n.L.hip)/n.torso*100,Tt(n.R.an,n.R.hip)/n.torso*100]})}});var _o="mp/",go=null;function tc(){return window.Pose?Promise.resolve():(go||(go=new Promise((n,e)=>{let t=document.createElement("script");t.src=_o+"pose.js",t.onload=n,t.onerror=()=>{go=null,e(new Error("lib"))},document.head.appendChild(t)})),go)}function Uu({stageEl:n,say:e,getExercise:t}){let i=document.createElement("div");i.id="cam",i.hidden=!0,i.innerHTML=`
    <div class="cam-h"><b>Coach de c\xE1mara</b><button class="cam-x" aria-label="Cerrar c\xE1mara">\xD7</button></div>
    <div class="cam-ask">
      <p>Usa la c\xE1mara para contar tus repeticiones y avisarte de la t\xE9cnica.</p>
      <p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p>
      <button class="cam-go">Activar c\xE1mara</button>
    </div>
    <div class="cam-v"><video playsinline muted></video><canvas></canvas></div>
    <div class="cam-s"></div>
    <div class="cam-stats"><div><b class="cr">0</b><small class="cl">reps</small></div><div><b class="cs">\u2013</b><small>t\xE9cnica</small></div></div>`,n.appendChild(i);let s=V=>i.querySelector(V),r=s("video"),a=s("canvas"),l=a.getContext("2d"),c=s(".cam-s"),o=null,h=null,p=null,u=null,d=!1,_=!1,y=0,m=0,f=0,A=0,L=0,M=1,T={n:0,ms:0,t0:0},E="closed",P=V=>{E=V,i.dataset.mode=V,i.hidden=V==="closed"},x=(V,ne="")=>{c.textContent=V,c.className="cam-s "+ne},w=()=>{if(!h)return;let V=Dt[h.kind].isometric;s(".cr").textContent=V?h.an.seconds:h.reps.count,s(".cl").textContent=V?"seg. bien":Dt[h.kind].label||"reps",s(".cs").textContent=!V&&h.reps.count?Math.round(h.reps.good/h.reps.count*100)+"%":"\u2013"};function R(V){o=V,h=V&&V.coach&&Dt[V.coach]?new Di(V.coach):null,A=0,w(),E==="run"&&(h?x(Dt[h.kind].hint):x("Este ejercicio no tiene an\xE1lisis por c\xE1mara.","warn"))}function N(V){let ne=r.videoWidth||640,B=r.videoHeight||480;if(a.width!==ne&&(a.width=ne,a.height=B),l.clearRect(0,0,ne,B),!!V){l.lineWidth=Math.max(3,ne/140),l.lineCap="round",l.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#fff";for(let[H,Z]of Iu)V[H].visibility<.4||V[Z].visibility<.4||(l.beginPath(),l.moveTo(V[H].x,V[H].y),l.lineTo(V[Z].x,V[Z].y),l.stroke());l.fillStyle="#fff";for(let H of[$.shL,$.shR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR,$.elL,$.elR,$.wrL,$.wrR])V[H].visibility<.4||(l.beginPath(),l.arc(V[H].x,V[H].y,Math.max(3,ne/120),0,7),l.fill())}}function F(V){if(_=!1,!d)return;let ne=r.videoWidth,B=r.videoHeight,H=V.poseLandmarks;if(!H||!h){N(null),h&&++A>25&&x("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista.","warn");return}A=0;let Z=H.map(Ue=>({x:Ue.x*ne,y:Ue.y*B,z:(Ue.z||0)*ne,visibility:Ue.visibility??1})),he=performance.now();T.t0&&(T.ms+=he-T.t0,T.n++,M===1&&T.n===40&&T.ms/T.n>110&&(M=0,p.setOptions({modelComplexity:0})));let pe=h.push(Z,he);if(N(h.sm.p||Z),!pe.ok){x(Dt[h.kind].hint,"warn");return}let Ge=Dt[h.kind];if(Ge.wants&&pe.view&&pe.view!==Ge.wants&&pe.view!=="oblique"){if(++L>20){x(Ge.wants==="side"?"G\xEDrate: col\xF3cate de lado respecto a la c\xE1mara.":"G\xEDrate: col\xF3cate de frente a la c\xE1mara.","warn");return}}else L=0;if(!pe.calibrated){x("Calibrando\u2026 qu\xE9date quieto un segundo en la posici\xF3n inicial.",""),w();return}for(let Ue of pe.ev)Ue.type==="rep"?(x(Ue.good?`${Ue.n} \xB7 \xA1Buena t\xE9cnica!`:`${Ue.n} \xB7 ${Ue.msg}`,Ue.good?"ok":"warn"),!Ue.good&&performance.now()-f>5e3&&(f=performance.now(),e(Ue.msg))):Ue.type==="tip"&&(x(Ue.msg,"warn"),performance.now()-f>5e3&&(f=performance.now(),e(Ue.msg)));pe.holding===!0&&x("Muy bien, mant\xE9n la posici\xF3n","ok"),w()}function k(){if(!d)return;let V=()=>{if(!d)return;let ne=performance.now();!_&&r.readyState>=2&&ne-m>55&&(_=!0,m=ne,T.t0=ne,p.send({image:r}).catch(()=>{_=!1})),r.requestVideoFrameCallback?r.requestVideoFrameCallback(V):y=requestAnimationFrame(V)};V()}async function I(){P("loading"),x("Cargando el modelo de detecci\xF3n (unos 15 MB, solo la primera vez)\u2026");try{await tc(),p||(p=new window.Pose({locateFile:V=>_o+V}),p.setOptions({modelComplexity:M,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),p.onResults(F)),u=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),r.srcObject=u,await r.play();try{localStorage.setItem("forja:cam","1")}catch{}d=!0,P("run"),R(o),h&&x(Dt[h.kind].hint),k()}catch(V){W(!0),P("error");let ne=V&&V.name;ne==="NotAllowedError"||ne==="SecurityError"?x("No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.","warn"):ne==="NotFoundError"||ne==="OverconstrainedError"?x("No se ha encontrado ninguna c\xE1mara en este dispositivo.","warn"):V&&V.message==="lib"?x("El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.","warn"):x("No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo.","warn")}}function W(V){d=!1,_=!1,cancelAnimationFrame(y),u&&u.getTracks().forEach(ne=>ne.stop()),u=null,r.srcObject=null,N(null),V||P("closed")}function J(){if(E!=="closed")return;let V=!1;try{V=localStorage.getItem("forja:cam")==="1"}catch{}o=t(),h=o&&o.coach&&Dt[o.coach]?new Di(o.coach):null,w(),V?I():P("ask")}return s(".cam-go").onclick=I,s(".cam-x").onclick=()=>W(),window.addEventListener("pagehide",()=>W()),{toggle(){E==="closed"?J():W()},setExercise:R,isOpen:()=>E!=="closed"}}var Fi;function bs(n,e=660,t=.12,i="sine",s=.16){if(n.sound)try{Fi=Fi||new(window.AudioContext||window.webkitAudioContext);let r=Fi.createOscillator(),a=Fi.createGain();r.type=i,r.frequency.value=e,a.gain.value=s,r.connect(a),a.connect(Fi.destination),r.start(),a.gain.exponentialRampToValueAtTime(8e-4,Fi.currentTime+t),r.stop(Fi.currentTime+t)}catch{}}function nc(n,e){e.forEach(([t,i,s])=>setTimeout(()=>bs(n,t,s||.22,"triangle",.2),i))}var Ss;function $g(){if(Ss!==void 0)return Ss;try{let n=speechSynthesis.getVoices();if(!n.length)return null;Ss=n.find(e=>e.lang==="es-ES"&&/natural|google|premium|enhanced/i.test(e.name))||n.find(e=>e.lang==="es-ES")||n.find(e=>e.lang.startsWith("es"))||null}catch{Ss=null}return Ss}function $n(n,e){if(!(!n.voice||!window.speechSynthesis))try{speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang="es-ES",t.rate=1;let i=$g();i&&(t.voice=i),speechSynthesis.speak(t)}catch{}}function ic(){try{speechSynthesis.cancel()}catch{}}function ws(){let n=document.documentElement;try{!document.fullscreenElement&&n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}catch{}}function sc(){document.fullscreenElement?document.exitFullscreen():ws()}async function Fu(){try{navigator.wakeLock&&await navigator.wakeLock.request("screen")}catch{}}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{Ss=void 0})}catch{}var xo={squat:{joints:[["hipL","knL","anL","L"],["hipR","knR","anR","R"]],metric:"Flexi\xF3n de rodilla",peak:"Profundidad",peakHint:"menos grados = m\xE1s profundo",speed:"Velocidad de subida"}},rc=n=>!!xo[n],Jg=[[$.shL,$.elL],[$.elL,$.wrL],[$.shR,$.elR],[$.elR,$.wrR],[$.hipL,$.knL],[$.knL,$.anL],[$.hipR,$.knR],[$.knR,$.anR],[$.anL,$.ftL],[$.anR,$.ftR]],Zg=[$.shL,$.shR,$.elL,$.elR,$.wrL,$.wrR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR],Kg="#ff8a5b",Ou=n=>{let e=Math.max(0,Math.round(n/1e3));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},Bu=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function ku({say:n,getExercise:e,getTarget:t,onClose:i}){let s=document.createElement("div");s.id="mir",s.hidden=!0,s.innerHTML=`
    <video class="mv" playsinline muted></video><canvas class="mc"></canvas>
    <div class="m-top">
      <div class="m-l"><button class="m-fin"><i></i>Terminar serie</button><span class="m-chip"></span></div>
      <button class="m-x" aria-label="Cerrar modo espejo">\xD7</button>
    </div>
    <div class="m-ask">
      <div class="m-card">
        <b>Modo espejo</b>
        <p>Te ver\xE1s en pantalla con tus \xE1ngulos en directo. Forja cuenta las repeticiones y al final te ense\xF1a el resumen de la serie.</p>
        <p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p>
        <button class="m-go">Activar c\xE1mara</button>
      </div>
    </div>
    <div class="m-bot">
      <div class="m-msg"></div>
      <div class="m-cnt"><i></i><span>Preparando</span></div>
      <b class="m-n">0</b>
      <small class="m-u">REPS</small>
    </div>
    <section class="m-sum" hidden></section>`,document.body.appendChild(s);let r=S=>s.querySelector(S),a=r(".mv"),l=r(".mc"),c=l.getContext("2d"),o="closed",h=null,p=null,u=null,d=null,_=null,y=!1,m=!1,f=0,A=1,L=10,M=!1,T=0,E=0,P=0,x=0,w=!1,R=[],N=[],F=[],k=null,I=null,W=[],J=null,V=0,ne="#7cc4ff",B=0,H=()=>M?B:performance.now(),Z=S=>{o=S,s.dataset.mode=S,s.hidden=S==="closed"},he=(S,_e="")=>{let ge=r(".m-msg");ge.textContent=S,ge.className="m-msg "+_e+(S?" on":""),P=performance.now()},pe=(S,_e)=>{r(".m-cnt span").textContent=S,r(".m-cnt").classList.toggle("live",!!_e)};function Ge(){let S=Math.min(window.devicePixelRatio||1,2);l.width=Math.round(innerWidth*S),l.height=Math.round(innerHeight*S)}window.addEventListener("resize",Ge);function Ue(S,_e,ge,b,g=!0){let D=Math.max(S/ge,_e/b),O=(S-ge*D)/2,Y=(_e-b*D)/2;return te=>({x:g?S-(O+te.x*D):O+te.x*D,y:Y+te.y*D,v:te.visibility??1})}function Ke(S,_e,ge,b,g,D){S.font=`700 ${15*D}px IN, system-ui, sans-serif`;let O=S.measureText(b).width+22*D,Y=30*D,te=Y/2;S.save(),S.shadowColor="rgba(0,0,0,.45)",S.shadowBlur=10*D,S.beginPath(),S.roundRect(_e-O/2,ge-Y/2,O,Y,te),S.fillStyle="rgba(8,14,28,.82)",S.fill(),S.shadowBlur=0,S.lineWidth=1.6*D,S.strokeStyle=g,S.stroke(),S.fillStyle="#fff",S.textAlign="center",S.textBaseline="middle",S.fillText(b,_e,ge+.5*D),S.restore()}function ie(S,_e,ge,b,g,D,O,Y={}){if(S.clearRect(0,0,_e,ge),!D)return;let te=D.map(Ue(_e,ge,b,g)),de=le=>te[le].v>.45,j=(Y.small?2.2:3.6)*O;S.save(),S.lineCap="round",S.lineJoin="round",S.strokeStyle=ne,S.shadowColor=ne,S.shadowBlur=(Y.small?6:16)*O,S.lineWidth=j;let K=[$.shL,$.shR,$.hipR,$.hipL];K.every(de)&&(S.beginPath(),K.forEach((le,ce)=>ce?S.lineTo(te[le].x,te[le].y):S.moveTo(te[le].x,te[le].y)),S.closePath(),S.fillStyle="rgba(120,180,255,.06)",S.fill(),S.stroke()),S.beginPath();for(let[le,ce]of Jg)!de(le)||!de(ce)||(S.moveTo(te[le].x,te[le].y),S.lineTo(te[ce].x,te[ce].y));S.stroke(),S.shadowBlur=0,S.lineWidth=j*.38,S.strokeStyle="rgba(255,255,255,.75)",S.stroke(),S.fillStyle="#fff",S.shadowColor=ne,S.shadowBlur=10*O;for(let le of Zg)de(le)&&(S.beginPath(),S.arc(te[le].x,te[le].y,(Y.small?2.4:4.2)*O,0,7),S.fill());S.restore();let ue=xo[p];if(!ue)return;let me=[];for(let[le,ce,Ae,Pe]of ue.joints){let ke=te[$[le]],C=te[$[ce]],ae=te[$[Ae]];if(ke.v<.5||C.v<.5||ae.v<.5)continue;let ee=vt(D[$[le]],D[$[ce]],D[$[Ae]]),fe=Pe==="L"?ne:Kg,xe=Math.atan2(ke.y-C.y,ke.x-C.x),oe=Math.atan2(ae.y-C.y,ae.x-C.x)-xe;for(;oe>Math.PI;)oe-=2*Math.PI;for(;oe<-Math.PI;)oe+=2*Math.PI;let De=(Y.small?18:46)*O;S.save();let Ne=S.createRadialGradient(C.x,C.y,De*.2,C.x,C.y,De);if(Ne.addColorStop(0,"rgba(255,255,255,0)"),Ne.addColorStop(1,fe+"66"),S.beginPath(),S.moveTo(C.x,C.y),S.arc(C.x,C.y,De,xe,xe+oe,oe<0),S.closePath(),S.fillStyle=Ne,S.fill(),S.beginPath(),S.arc(C.x,C.y,De,xe,xe+oe,oe<0),S.strokeStyle=fe,S.lineWidth=(Y.small?1.6:3)*O,S.shadowColor=fe,S.shadowBlur=10*O,S.stroke(),S.restore(),!Y.small){let ct=xe+oe/2;me.push({x:C.x-Math.cos(ct)*(De+36*O),y:C.y-Math.sin(ct)*(De+36*O),text:`${Math.round(ee)}\xB0`,col:fe})}}me.length===2&&Math.hypot(me[0].x-me[1].x,me[0].y-me[1].y)<70*O&&(me[1].x=me[0].x,me[1].y=me[0].y+36*O);for(let le of me)Ke(S,Math.min(_e-46*O,Math.max(46*O,le.x)),Math.min(ge-20*O,Math.max(20*O,le.y)),le.text,le.col,O)}function se(S){let _e=xo[p],ge={L:null,R:null};for(let[b,g,D,O]of _e.joints)Math.min(S[$[b]].visibility,S[$[g]].visibility,S[$[D]].visibility)>=.5&&(ge[O]=vt(S[$[b]],S[$[g]],S[$[D]]));return ge}function ye(S){if(w=!0,x=S,k={minL:1/0,minR:1/0,min:1/0,tMin:S},pe("CONTANDO 0:00",!0),_&&window.MediaRecorder&&!I)try{W=[];let ge=["video/webm;codecs=vp9","video/webm","video/mp4"].find(b=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(b));I=new MediaRecorder(_,ge?{mimeType:ge,videoBitsPerSecond:9e5}:void 0),I.ondataavailable=b=>b.data&&b.data.size&&W.push(b.data),I.start(500)}catch{I=null}}function ze(){return new Promise(S=>{if(!I||I.state==="inactive")return S(null);I.onstop=()=>{let _e=W.length?new Blob(W,{type:I.mimeType||"video/webm"}):null;I=null,S(_e)},I.stop()})}function Se(S,_e){B=_e;let ge=u.push(S,_e),b=u.sm.p||S;if(ie(c,l.width,l.height,a.videoWidth||640,a.videoHeight||480,b,l.width/innerWidth),!ge.ok){performance.now()-P>2500&&he(Dt[p].hint,"warn");return}let g=Dt[p];if(g.wants&&ge.view&&ge.view!==g.wants&&ge.view!=="oblique"&&!w){he(g.wants==="side"?"G\xEDrate: ponte de lado a la c\xE1mara":"G\xEDrate: ponte de frente a la c\xE1mara","warn");return}if(!ge.calibrated){pe("CALIBRANDO \xB7 QUIETO 1 S",!1);return}w||(ye(_e),he("\xA1Listo! Empieza cuando quieras","ok"));let D=_e-x,O=se(b),Y=ge.metric;N.push({t:D,l:O.L,r:O.R,f:Y}),R.length<2400&&R.push({t:D,L:b.map(te=>({x:te.x,y:te.y,z:te.z,visibility:te.visibility}))}),O.L!==null&&(k.minL=Math.min(k.minL,O.L)),O.R!==null&&(k.minR=Math.min(k.minR,O.R)),Y<k.min&&(k.min=Y,k.tMin=_e);for(let te of ge.ev)if(te.type==="rep"){let de=Math.max((_e-k.tMin)/1e3,.15),j=Math.max(0,(Y-k.min)/de);F.push({n:te.n,good:te.good,issues:te.issues,minL:isFinite(k.minL)?k.minL:null,minR:isFinite(k.minR)?k.minR:null,min:k.min,speed:j,t:D}),k={minL:1/0,minR:1/0,min:1/0,tMin:_e};let K=r(".m-n");K.textContent=te.n,K.classList.remove("pop","bad"),K.offsetWidth,K.classList.add("pop"),te.good||K.classList.add("bad"),te.good?he("\xA1Buena t\xE9cnica!","ok"):he(te.msg,"warn"),n(te.good?String(te.n):`${te.n}. ${te.msg}`),T=_e,te.n>=L&&(he("\xA1Serie completada!","ok"),setTimeout(()=>o==="run"&&Te(),1200))}else te.type==="tip"&&(he(te.msg,"warn"),_e-T>4e3&&(T=_e,n(te.msg)))}function Ve(S){if(m=!1,!y||M)return;let _e=S.poseLandmarks,ge=a.videoWidth,b=a.videoHeight;if(!_e){c.clearRect(0,0,l.width,l.height),++E>25&&he("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista","warn");return}E=0,Se(_e.map(g=>({x:g.x*ge,y:g.y*b,z:(g.z||0)*ge,visibility:g.visibility??1})),performance.now())}function rt(){let S=()=>{if(!y)return;let _e=performance.now();w&&_e-V>250&&(V=_e,pe("CONTANDO "+Ou(H()-x),!0)),!M&&d&&!m&&a.readyState>=2&&_e-f>50&&(m=!0,f=_e,d.send({image:a}).catch(()=>{m=!1})),P&&_e-P>3500&&(r(".m-msg").classList.remove("on"),P=0),requestAnimationFrame(S)};requestAnimationFrame(S)}function z(){u=new Di(p),w=!1,R=[],N=[],F=[],k=null,I=null,J&&URL.revokeObjectURL(J),J=null,r(".m-n").textContent="0",r(".m-n").classList.remove("bad"),r(".m-u").textContent=`REPS \xB7 OBJETIVO ${L}`,r(".m-chip").textContent=`SERIE ${A} \xB7 ${h.name.toUpperCase()}`,pe("PREPARANDO",!1),he(Dt[p].hint)}async function re(){Z("loading"),Ge(),ne=(getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#7cc4ff").trim(),z(),he("Cargando el modelo de detecci\xF3n\u2026");try{_=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1}),a.srcObject=_,await a.play();try{localStorage.setItem("forja:cam","1")}catch{}M||(await tc(),d||(d=new window.Pose({locateFile:S=>_o+S}),d.setOptions({modelComplexity:1,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),d.onResults(Ve))),y=!0,Z("run"),he(Dt[p].hint),rt()}catch(S){we(),Z("error");let _e=S&&S.name;r(".m-ask .m-card").innerHTML=`<b>No se pudo abrir la c\xE1mara</b><p>${_e==="NotAllowedError"||_e==="SecurityError"?"No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.":_e==="NotFoundError"?"No se ha encontrado ninguna c\xE1mara en este dispositivo.":S&&S.message==="lib"?"El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.":"No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo."}</p><button class="m-go">Reintentar</button>`,r(".m-go").onclick=re}}function we(){y=!1,m=!1,I&&I.state!=="inactive"&&I.stop(),I=null,_&&_.getTracks().forEach(S=>S.stop()),_=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height)}function ve(){we(),J&&URL.revokeObjectURL(J),J=null,r(".m-sum").hidden=!0,Z("closed"),i&&i()}async function Te(){if(o!=="run")return;y=!1;let S=w?H()-x:0,_e=await ze();_e&&(J=URL.createObjectURL(_e)),_&&_.getTracks().forEach(ge=>ge.stop()),_=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height),st(S),Z("sum");try{let ge="forja:mirror",b=JSON.parse(localStorage.getItem(ge)||"[]");b.push({d:Date.now(),ex:h.name,set:A,reps:F.length,good:F.filter(g=>g.good).length,ms:Math.round(S)}),localStorage.setItem(ge,JSON.stringify(b.slice(-200)))}catch{}}function Re(S){let Y=Math.max(S,1e3),te=C=>38+C/Y*590,de=C=>12+(1-C/180)*182,j=Math.max(1,Math.ceil(N.length/320)),K=C=>{let ae="",ee=!1;for(let fe=0;fe<N.length;fe+=j){let xe=N[fe][C];if(xe==null){ee=!1;continue}ae+=`${ee?"L":"M"}${te(N[fe].t).toFixed(1)},${de(xe).toFixed(1)}`,ee=!0}return ae},ue=[0,45,90,135,180].map(C=>`<line x1="38" x2="628" y1="${de(C)}" y2="${de(C)}"/><text x="32" y="${de(C)+4}" text-anchor="end">${C}\xB0</text>`).join(""),le=[0,Math.round(Y/1e3)].map((C,ae)=>`<text x="${te(C*1e3)}" y="214" text-anchor="${ae?"end":"start"}">${C}s</text>`).join(""),ce=null;for(let C of F)(!ce||C.min<ce.min)&&(ce=C);let Ae="";if(ce){let C=null;for(let ae of N)ae.t<=ce.t&&ae.t>=ce.t-4e3&&(C===null||ae.f<C.f)&&(C=ae);C&&(Ae=`<circle cx="${te(C.t)}" cy="${de(C.f)}" r="6" class="pk"/>`)}let Pe=N.some(C=>C.l!==null),ke=N.some(C=>C.r!==null);return`<svg viewBox="0 0 640 220" preserveAspectRatio="none" class="chart" role="img" aria-label="\xC1ngulo de rodilla durante la serie">
      <g class="gr">${ue}${le}</g>
      ${Pe?`<path d="${K("l")}" class="ln l"/>`:""}${ke?`<path d="${K("r")}" class="ln r"/>`:""}
      ${!Pe&&!ke?`<path d="${K("f")}" class="ln l"/>`:""}${Ae}</svg>`}function st(S){let _e=xo[p],ge=F.length,b=F.filter(ae=>ae.good).length,g=ae=>ae.length?ae.reduce((ee,fe)=>ee+fe,0)/ae.length:null,D=F.map(ae=>ae.minL).filter(ae=>ae!==null),O=F.map(ae=>ae.minR).filter(ae=>ae!==null),Y=D.length?Math.min(...D):null,te=O.length?Math.min(...O):null,de=Y!==null&&te!==null?Math.round(Math.abs(Y-te)):null,j=F.map(ae=>ae.speed),K=null;if(ge>=4){let ae=g(j.slice(0,2)),ee=g(j.slice(-2));K=ae>0?Math.max(0,Math.round((ae-ee)/ae*100)):0}let ue=K===null?"Haz al menos 4 repeticiones para medirla":K<8?"Sin fatiga: ritmo constante":K<20?"Algo de fatiga":"Fatiga notable: descansa bien",me={};for(let ae of F)for(let ee of ae.issues)me[ee]=(me[ee]||0)+1;let le=Object.entries(me).sort((ae,ee)=>ee[1]-ae[1])[0],ce=Math.max(1,...j),Ae=ge?j.indexOf(Math.max(...j)):-1,Pe=F.map((ae,ee)=>`<div class="b${ae.good?"":" bad"}${ee===Ae?" top":""}"><i style="height:${Math.max(6,ae.speed/ce*100).toFixed(0)}%"></i><small>${ee+1}</small></div>`).join(""),ke=(ae,ee,fe,xe)=>`<div class="sd ${xe}"><small><i></i>${ae}</small><b>${ee===null?"\u2013":Math.round(ee)+"\xB0"}</b><em>${fe.length?"Media "+Math.round(g(fe))+"\xB0":"No visible"}</em></div>`,C=r(".m-sum");C.innerHTML=`
      <div class="s-wrap">
        <header class="s-h"><small>SERIE ${A} \xB7 ${Bu(h.name.toUpperCase())}</small><h2>Resumen de la serie</h2></header>
        <div class="s-grid">
          <div class="mk rp"><span class="tag">REPETICI\xD3N</span><video playsinline muted loop></video><canvas></canvas><div class="rp-none" hidden>Sin v\xEDdeo en este navegador: se muestra solo el esqueleto</div></div>
          <div class="mk big"><small>REPS</small><b>${ge}</b><em>${Ou(S)} <span>tiempo</span></em></div>
          <div class="mk pk"><small>${_e.peak.toUpperCase()}</small>
            <div class="sides">${ke("Izquierda",Y,D,"l")}${ke("Derecha",te,O,"r")}</div>
            <p class="mh">${de!==null?`<strong>${de}\xB0 de diferencia</strong> entre piernas \xB7 `:""}${_e.peakHint}</p></div>
          <div class="mk ft"><div class="row"><small>FATIGA</small><b>${K===null?"\u2013":K+"%"}</b></div>
            <div class="meter"><i style="width:${K===null?0:Math.min(100,K*2.5)}%"></i></div>
            <p><strong>${ue}</strong><br>P\xE9rdida de ${_e.speed.toLowerCase()} entre las primeras y las \xFAltimas reps</p></div>
          <div class="mk tq"><div class="row"><small>T\xC9CNICA</small><b>${ge?b+"/"+ge:"\u2013"}</b></div>
            <p>${ge?le?`A mejorar: <strong>${Bu(Ms[le[0]]||le[0])}</strong> (${le[1]} ${le[1]===1?"vez":"veces"})`:"<strong>Todas las repeticiones con buena t\xE9cnica</strong>":"No se ha contado ninguna repetici\xF3n"}</p></div>
          <div class="mk ch"><div class="row"><small>${_e.metric.toUpperCase()}</small><span class="mlg"><i class="l"></i>Izquierda <i class="r"></i>Derecha</span></div>${Re(S)}</div>
          <div class="mk sp"><div class="row"><small>${_e.speed.toUpperCase()}</small></div>
            <p>${ge?`Cada repetici\xF3n; la m\xE1s r\xE1pida, la ${Ae+1}.\xAA a ${Math.round(j[Ae])}\xB0/s`:"Sin repeticiones"}</p>
            <div class="bars">${Pe}</div></div>
        </div>
        <div class="s-act"><button class="s-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7v9H3z"/></svg>Terminar</button>
          <button class="s-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/></svg>Siguiente serie</button></div>
      </div>`,C.hidden=!1,C.scrollTop=0,C.querySelector(".s-done").onclick=ve,C.querySelector(".s-next").onclick=()=>{A++,C.hidden=!0,re()},Xe(C.querySelector(".rp"))}function Xe(S){let _e=S.querySelector("video"),ge=S.querySelector("canvas"),b=ge.getContext("2d"),g=R.length&&a.videoWidth||640,D=R.length&&a.videoHeight||480,O={vw:g||640,vh:D||480};(()=>{let ue=S.getBoundingClientRect(),me=Math.min(window.devicePixelRatio||1,2);ge.width=Math.round(ue.width*me),ge.height=Math.round(ue.height*me)})();let te=performance.now(),de=R.length?R[R.length-1].t:0,j=ue=>{let me=0,le=R.length-1;for(;me<le;){let ce=me+le+1>>1;R[ce].t<=ue?me=ce:le=ce-1}return R[me]};J?(_e.src=J,_e.onloadedmetadata=()=>{_e.videoWidth&&(O.vw=_e.videoWidth,O.vh=_e.videoHeight)},_e.play().catch(()=>{})):(_e.hidden=!0,S.querySelector(".rp-none").hidden=!R.length);let K=()=>{if(!(o!=="sum"||!S.isConnected)){if(R.length){let ue=J&&isFinite(_e.currentTime)&&_e.currentTime>0?_e.currentTime*1e3:(performance.now()-te)%Math.max(de,1);ie(b,ge.width,ge.height,O.vw,O.vh,j(ue).L,ge.width/Math.max(S.clientWidth,1),{small:!0})}requestAnimationFrame(K)}};requestAnimationFrame(K)}function $e(){if(h=e(),p=h&&h.coach,!rc(p))return!1;L=t&&t()||10,A=1,ws();let S=!1;try{S=localStorage.getItem("forja:cam")==="1"}catch{}return r(".m-sum").hidden=!0,z(),S||M?re():(Z("ask"),r(".m-ask .m-card").innerHTML='<b>Modo espejo</b><p>Te ver\xE1s en pantalla con tus \xE1ngulos en directo. Forja cuenta las repeticiones y al final te ense\xF1a el resumen de la serie.</p><p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p><button class="m-go">Activar c\xE1mara</button>',r(".m-go").onclick=re),!0}return r(".m-x").onclick=ve,r(".m-fin").onclick=Te,window.addEventListener("pagehide",we),document.addEventListener("keydown",S=>{o!=="closed"&&S.key==="Escape"&&ve()}),{open:$e,close:ve,isOpen:()=>o!=="closed",__sim(S=!0){M=S},__feed(S,_e){if(!y)return;let ge=a.videoWidth||640,b=a.videoHeight||480;Se(S.map(g=>({x:g.x*ge,y:g.y*b,z:(g.z||0)*ge,visibility:g.visibility??1})),_e??performance.now())},__finish:Te}}var yi=["Principiante","Intermedio","Avanzado"],Ce=n=>document.querySelector(n),$t=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),jg={rep:"repeticiones",s:"s"};function zu(n){let e=n.exercises,t=yi.length,i="forja:"+n.id,s={get(){try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},set(z){try{localStorage.setItem(i,JSON.stringify(z))}catch{}}},r={get(){try{return JSON.parse(localStorage.getItem("forja:prefs")||"{}")}catch{return{}}},set(z){try{localStorage.setItem("forja:prefs",JSON.stringify(z))}catch{}}},a=Object.assign({lv:[],voice:!0,sound:!0,level:1},s.get()),l=Object.assign({variant:"m"},r.get());(!Array.isArray(a.lv)||a.lv.length!==e.length)&&(a.lv=e.map(()=>a.level||1)),document.documentElement.style.setProperty("--acc",n.theme.acc),document.documentElement.style.setProperty("--hi",n.theme.hi),document.documentElement.style.setProperty("--acc-t",n.theme.accText||"#fff"),document.documentElement.style.setProperty("--bgA",n.theme.bgA),document.documentElement.style.setProperty("--bgB",n.theme.bgB),document.documentElement.style.setProperty("--musc",n.theme.musc);let c=document.querySelector("meta[name=theme-color]");c&&(c.content=n.theme.bgA),document.body.innerHTML=`
<header id="top">
  <a class="back" href="index.html" aria-label="Volver al inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
  <div id="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n.icon}</svg></div>
  <div class="ttl"><b id="club">${$t(n.title)}</b><small>${$t(n.tagline)}</small></div>
  <div class="tools">
    <button class="pill" id="bW">Vista</button>
    <button class="pill on" id="bV">Voz</button>
    <button class="pill on" id="bS">Sonido</button>
    <button class="pill" id="bCam">C\xE1mara</button>
    <button class="pill" id="bC">Ajustes</button>
    <button class="pill" id="bF"><span class="lg">Pantalla completa</span><span class="sm">\u26F6</span></button>
  </div>
</header>
<div id="bar"><i></i></div>
<div id="main">
  <div id="stage">
    <canvas id="cv"></canvas>
    <div id="alert"></div>
    <div id="cd"></div>
    <div id="toast"></div>
    <div class="hint">Arrastra para girar la c\xE1mara</div>
  </div>
  <aside id="panel"><div id="pInfo">
    <div class="eyebrow" id="pStep"></div>
    <h2 id="pTitle">\u2014</h2>
    <div class="chip" id="pArea"></div>
    <button class="chip" id="pMus" title="Pulsa para mostrar u ocultar los m\xFAsculos iluminados"></button>
    <div id="pLevels"></div>
    <div id="pLvT"></div>
    <ul class="cues" id="pCues"></ul>
    <div id="pSpec"></div>
    <div id="pKey"></div>
    <details id="pErrBox"><summary>Errores a corregir</summary><ul id="pErr"></ul></details>
    </div><div id="pCtl">
    <div class="timer">
      <div class="ringw"><svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="46" stroke="#1b2639"/><circle id="ring" cx="50" cy="50" r="46"/></svg><div id="tNum">20</div></div>
      <div class="tinfo"><div id="tLab"></div><div id="dots"></div><button class="pill" id="skipBtn">Saltar</button></div>
    </div>
    <div class="ctrls">
      <button class="btn ghost sq" id="prevBtn" aria-label="Ejercicio anterior">\u2039</button>
      <button class="btn" id="mainBtn">Iniciar ejercicio</button>
      <button class="btn ghost sq" id="nextBtn" aria-label="Ejercicio siguiente">\u203A</button>
    </div>
    <div id="steps"></div>
    </div>
  </aside>
</div>
<section class="ov on" id="setup">
  <div class="card">
    <div class="lc">
      <a class="crumb" href="index.html">\u2190 Forja</a>
      <h1>${$t(n.title)}</h1>
      <div class="sub">${$t(n.tagline)}</div>
      <div class="fld"><label>Nivel de toda la sesi\xF3n</label><div class="seg" id="allLv"></div></div>
      <div class="fld"><label>Avatar</label><div class="seg" id="avSeg"><button data-v="m">\xC9l</button><button data-v="f">Ella</button></div></div>
      <button class="btn" id="go">Comenzar sesi\xF3n</button>
      <div class="mats">${n.material.map(z=>`<span>${$t(z)}</span>`).join("")}</div>
      <div class="note">${$t(n.notice)}</div>
    </div>
    <div class="rt">
      <h3>Contenido de la sesi\xF3n</h3>
      <ol id="exList"></ol>
      <div id="totalT"></div>
    </div>
  </div>
</section>
<section class="ov" id="end">
  <div class="card">
    <div>
      <h1>Sesi\xF3n completada</h1>
      <div class="sub">${$t(n.title)} \xB7 bien hecho</div>
      <ul id="endList"></ul>
      <div id="endTime"></div>
      <div class="ctrls" style="margin-top:16px"><button class="btn" id="again" style="flex:1">Repetir sesi\xF3n</button><button class="btn ghost" id="backSetup" style="flex:1">Ajustes</button></div>
      <a class="btn ghost home" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>
<canvas id="conf"></canvas>`;let o={screen:"setup",ex:0,phase:"ready",set:0,el:0,dur:20,paused:!1,animT:0,sessionTime:0,view:0,dragAz:0,dragEl:0,done:[],cdn:4,side:-1,lastRep:-1,wrapN:0,snap:1,setIdx:0},h=[{n:"Auto",az:null},{n:"Lateral",az:-90},{n:"3/4",az:-40},{n:"Frontal",az:0}],p=!0,u=()=>({...n.theme.look,...l.variant==="f"&&n.theme.lookF?n.theme.lookF:{}}),d=new po(Ce("#cv"),n.theme);d.setAvatar(l.variant,u());let _=z=>Rt(a.lv[z],1,t),y=z=>e[z].levels[_(z)-1],m=z=>z.repT||3,f=(z,re)=>re.sides||z.sides,A=z=>z.unit==="rep"?z.n*m(z):z.n,L=z=>z.rest!==void 0?z.rest:n.rest,M=z=>`${z.sets} ${z.sets===1?n.setName.toLowerCase():n.setName.toLowerCase()+"s"} \xB7 ${z.n} ${z.unit==="s"?"s":jg[z.unit]}`,T=z=>z.sets*A(z)+(z.sets-1)*L(z)+L(z),E=()=>e.reduce((z,re,we)=>z+T(y(we)),0),P=z=>Math.round(z/60)+" min",x=(z,re)=>f(z,re)?`${f(z,re)} ${o.set%2===0?"derecha":"izquierda"} \xB7 ${o.set+1} de ${re.sets}`:`${n.setName} ${o.set+1} de ${re.sets}`,w=(z,re)=>Rt(Math.floor(re/m(z)),0,z.n-1);function R(){Ce("#bV").classList.toggle("on",a.voice),Ce("#bS").classList.toggle("on",a.sound),Ce("#bW").innerHTML='Vista<span class="lg"> \xB7 '+h[o.view].n+"</span>",document.querySelectorAll("#avSeg button").forEach(z=>z.classList.toggle("on",z.dataset.v===l.variant))}let N=()=>s.set(a);function F(){Ce("#allLv").innerHTML=yi.map((z,re)=>`<button data-l="${re+1}" class="${a.lv.every(we=>we===re+1)?"on":""}">${z}</button>`).join(""),Ce("#exList").innerHTML=e.map((z,re)=>{let we=y(re),ve=yi.map((Te,Re)=>`<button data-e="${re}" data-l="${Re+1}" title="${Te}" class="${_(re)===Re+1?"on":""}">${Re+1}</button>`).join("");return`<li><b>${re+1}</b><div><span>${$t(z.name)}</span><small>${yi[_(re)-1]} \xB7 ${$t(we.t)}</small><small class="lab">${M(we)}</small></div><div class="lvc">${ve}</div></li>`}).join(""),Ce("#totalT").textContent="Duraci\xF3n estimada de la sesi\xF3n: "+P(E())}function k(z){o.screen=z,Ce("#setup").classList.toggle("on",z==="setup"),Ce("#end").classList.toggle("on",z==="end"),z==="setup"&&F(),document.body.dataset.screen=z,d.resize()}function I(){let z=e[o.ex],re=y(o.ex),we=o.phase;Ce("#pStep").textContent=`Ejercicio ${o.ex+1} de ${e.length}`,Ce("#pTitle").textContent=z.name,Ce("#pArea").textContent=z.area,Ce("#pMus").textContent="M\xFAsculos: "+z.mus.map(Te=>Ru[Te]).join(" \xB7 "),Ce("#pMus").classList.toggle("off",!p),Ce("#pLevels").innerHTML=yi.map((Te,Re)=>`<button data-l="${Re+1}" class="${_(o.ex)===Re+1?"on":""} ${o.done[o.ex]||Re+1<_(o.ex)?"ok":""}" ${we!=="ready"?"disabled":""}>${Te}</button>`).join(""),Ce("#pLvT").innerHTML=`<b>${yi[_(o.ex)-1]}</b> \xB7 ${$t(re.t)}`,Ce("#pCues").innerHTML=re.d.map(Te=>`<li>${$t(Te)}</li>`).join(""),Ce("#pSpec").textContent=M(re),Ce("#pKey").innerHTML=z.key.length?"<h4>Importante</h4><ul>"+z.key.map(Te=>`<li>${$t(Te)}</li>`).join("")+"</ul>":"",Ce("#pErrBox").style.display=z.errors.length?"":"none",Ce("#pErr").innerHTML=z.errors.map(Te=>`<li>${$t(Te)}</li>`).join(""),Ce("#steps").innerHTML=e.map((Te,Re)=>`<button class="${Re===o.ex?"cur":""} ${o.done[Re]?"ok":""}" data-i="${Re}" title="${$t(Te.name)}">${Re+1}</button>`).join(""),Ce("#bar i").style.width=o.done.filter(Boolean).length/e.length*100+"%",Ce("#mainBtn").textContent=we==="ready"?"Iniciar ejercicio":o.paused?"Reanudar":"Pausar",Ce("#skipBtn").style.display=we==="ready"?"none":"",Ce("#skipBtn").textContent=we==="rest"?"Saltar descanso":`Saltar ${n.setName.toLowerCase()}`,Ce("#prevBtn").disabled=o.ex===0,Ce("#nextBtn").disabled=o.ex===e.length-1;let ve="";for(let Te=0;Te<re.sets;Te++){let Re=we!=="ready"&&(Te<o.set||Te===o.set&&we==="work");ve+=`<i class="${Re?"on":""} ${we==="work"&&Te===o.set?"cur":""}"></i>`}Ce("#dots").innerHTML=ve}function W(){let z=o.phase,re=y(o.ex),we=e[o.ex],ve="",Te="",Re=1,st=!1;if(z==="ready")ve=String(re.n),Te=M(re);else if(z==="count")ve=String(Math.max(1,3-Math.floor(o.el))),Te="Preparados",Re=1-o.el%1;else if(z==="work")Re=1-o.el/o.dur,re.unit==="s"?(ve=String(Math.ceil(o.dur-o.el)),Te=x(we,re)+" \xB7 segundos"):(ve=w(re,o.el)+1+"/"+re.n,st=!0,Te=x(we,re)+" \xB7 repeticiones"),o.paused&&(Te+=" \xB7 pausa");else if(z==="rest"){let Xe=L(re);ve=String(Math.ceil(Xe-o.el)),Te="Descanso \xB7 respira",Re=1-o.el/Xe}Ce("#tNum").textContent=ve,Ce("#tNum").classList.toggle("sm2",st),Ce("#tLab").textContent=Te,Ce("#ring").style.strokeDashoffset=289*(1-Rt(Re,0,1)),document.body.dataset.phase=z}function J(z,re=2400){let we=Ce("#toast");we.textContent=z,we.classList.add("on"),clearTimeout(J.h),J.h=setTimeout(()=>we.classList.remove("on"),re)}function V(z){let re=Ce("#cd");re.textContent=z,re.classList.remove("go"),re.offsetWidth,re.classList.add("go")}let ne=Uu({stageEl:Ce("#stage"),say:z=>$n(a,z),getExercise:()=>e[o.ex]}),B=ku({say:z=>$n(a,z),getExercise:()=>e[o.ex],getTarget:()=>y(o.ex).n,onClose:()=>Ce("#bCam").classList.toggle("on",ne.isOpen())});function H(){let z=e[o.ex],re=y(o.ex);Object.assign(o,{phase:"ready",el:0,set:0,animT:0,paused:!1,lastRep:-1,wrapN:0,snap:1,dragAz:0,dragEl:0}),o.dur=A(re),Ce("#cd").classList.remove("go"),Ce("#cd").textContent="",$n(a,`${o.ex+1}. ${z.name}. ${yi[_(o.ex)-1]}`),I(),W(),ne&&ne.setExercise(z),Ce("#bCam").textContent=z.mirror?"Modo espejo":"C\xE1mara"}function Z(){ws(),Fu(),o.ex=0,o.done=[],o.sessionTime=0,k("session"),H(),N()}function he(){Object.assign(o,{phase:"count",el:0,cdn:4,animT:0,paused:!1}),I()}function pe(){let z=y(o.ex);Object.assign(o,{phase:"work",el:0,animT:0,cdn:99,lastRep:-1,snap:1,wrapN:0}),o.dur=A(z),o.side=o.set%2===0?-1:1,V("YA"),bs(a,900,.3,"square",.18),$n(a,f(e[o.ex],z)?o.side<0?"Lado derecho. Ya":"Lado izquierdo. Ya":"Ya"),I()}function Ge(){let z=y(o.ex);o.set+1<z.sets?(Object.assign(o,{phase:"rest",el:0,animT:0}),$n(a,"Descanso"),J("Descanso",3e3),bs(a,500,.25,"triangle"),I()):(o.done[o.ex]=!0,nc(a,[[523,0],[659,140],[784,280]]),o.ex<e.length-1?(J("Ejercicio completado"),o.ex++,H()):Ke())}function Ue(){let z=Ce("#conf");if(!z||window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;let re=z.getContext("2d");z.width=innerWidth,z.height=innerHeight;let we=[n.theme.acc,n.theme.hi,"#ffffff"],ve=Array.from({length:160},()=>({x:innerWidth/2+(Math.random()-.5)*240,y:innerHeight*.4,vx:(Math.random()-.5)*15,vy:-Math.random()*15-4,r:Math.random()*5+3,a:Math.random()*6,va:(Math.random()-.5)*.4,c:we[Math.random()*3|0]})),Te=performance.now();(function Re(st){let Xe=(st-Te)/1e3;if(re.clearRect(0,0,z.width,z.height),!(Xe>3.4)){for(let $e of ve)$e.vy+=.36,$e.x+=$e.vx,$e.y+=$e.vy,$e.a+=$e.va,$e.vx*=.99,re.save(),re.translate($e.x,$e.y),re.rotate($e.a),re.globalAlpha=Math.max(0,1-Xe/3.4),re.fillStyle=$e.c,re.fillRect(-$e.r,-$e.r/2,$e.r*2,$e.r),re.restore();requestAnimationFrame(Re)}})(Te)}function Ke(){o.phase="done",I(),k("end"),Ue(),nc(a,[[523,0],[659,150],[784,300],[1047,450,.5]]),$n(a,"Sesi\xF3n completada");let z=Math.floor(o.sessionTime/60),re=Math.round(o.sessionTime%60);Ce("#endTime").textContent=`Tiempo total: ${z} min ${re} s`,Ce("#endList").innerHTML=e.map((we,ve)=>`<li><b>\u2713</b>${ve+1}. ${$t(we.name)}<small>${yi[_(ve)-1]} \xB7 ${M(y(ve))}</small></li>`).join("");try{let we=JSON.parse(localStorage.getItem("forja:log")||"[]");we.push({id:n.id,ts:Date.now(),secs:Math.round(o.sessionTime),level:Math.round(a.lv.reduce((ve,Te)=>ve+Te,0)/a.lv.length)}),localStorage.setItem("forja:log",JSON.stringify(we.slice(-400)))}catch{}}let ie=z=>{o.ex=Rt(z,0,e.length-1),o.paused=!1,H()};Ce("#go").onclick=Z,Ce("#mainBtn").onclick=()=>{o.phase==="ready"?(ws(),he()):(o.paused=!o.paused,o.paused&&ic(),I())},Ce("#skipBtn").onclick=()=>{o.phase==="rest"?(o.set++,pe()):o.phase==="work"?o.el=o.dur:o.phase==="count"&&pe()},Ce("#prevBtn").onclick=()=>ie(o.ex-1),Ce("#nextBtn").onclick=()=>ie(o.ex+1),Ce("#steps").onclick=z=>{let re=z.target.closest("button");re&&ie(+re.dataset.i)},Ce("#pLevels").onclick=z=>{let re=z.target.closest("button");!re||o.phase!=="ready"||(a.lv[o.ex]=+re.dataset.l,N(),H())},Ce("#allLv").onclick=z=>{let re=z.target.closest("button");re&&(a.lv=e.map(()=>+re.dataset.l),a.level=+re.dataset.l,N(),F())},document.addEventListener("click",z=>{let re=z.target.closest("#exList .lvc button");re&&(a.lv[+re.dataset.e]=+re.dataset.l,N(),F())}),Ce("#avSeg").onclick=z=>{let re=z.target.closest("button");re&&(l.variant=re.dataset.v,r.set(l),d.setAvatar(l.variant,u()),o.snap=1,R())},Ce("#bV").onclick=()=>{a.voice=!a.voice,a.voice||ic(),R(),N()},Ce("#bS").onclick=()=>{a.sound=!a.sound,R(),N()},Ce("#bF").onclick=sc,Ce("#bCam").onclick=()=>{let z=e[o.ex];if(z.mirror&&rc(z.coach)){ne.isOpen()&&ne.toggle(),!o.paused&&o.phase!=="ready"&&(o.paused=!0,I()),B.open(),Ce("#bCam").classList.add("on");return}ne.toggle(),Ce("#bCam").classList.toggle("on",ne.isOpen())},Ce("#bW").onclick=()=>{o.view=(o.view+1)%h.length,o.dragAz=0,o.dragEl=0,R()},Ce("#bC").onclick=()=>{o.paused=!1,k("setup")},Ce("#again").onclick=Z,Ce("#backSetup").onclick=()=>k("setup"),Ce("#pMus").addEventListener("click",()=>{p=!p,Ce("#pMus").classList.toggle("off",!p)}),document.addEventListener("keydown",z=>{o.screen!=="session"||z.target.closest("input,textarea")||(z.code==="Space"?(z.preventDefault(),Ce("#mainBtn").click()):z.code==="ArrowRight"?Ce("#nextBtn").click():z.code==="ArrowLeft"?Ce("#prevBtn").click():(z.key==="f"||z.key==="F")&&sc())});let se=null,ye=Ce("#cv");ye.addEventListener("pointerdown",z=>{se={x:z.clientX,y:z.clientY,az:o.dragAz,el:o.dragEl},ye.setPointerCapture(z.pointerId)}),ye.addEventListener("pointermove",z=>{se&&(o.dragAz=se.az-(z.clientX-se.x)*.35,o.dragEl=Rt(se.el+(z.clientY-se.y)*.15,-4,40))}),ye.addEventListener("pointerup",()=>se=null),new ResizeObserver(()=>d.resize()).observe(Ce("#stage")),addEventListener("resize",()=>d.resize());let ze=()=>o.phase==="work"?o.el:o.phase==="ready"?o.animT%o.dur:0;function Se(z){let re=y(o.ex),we=e[o.ex];if(o.screen==="session"&&o.phase!=="ready"&&!o.paused&&(o.sessionTime+=z),o.screen==="session"&&!o.paused){if(o.phase==="count"){o.el+=z;let Re=3-Math.floor(o.el);Re!==o.cdn&&Re>0&&(o.cdn=Re,V(Re),bs(a,520,.12,"square"),$n(a,String(Re))),o.el>=3&&pe()}else if(o.phase==="work"){let Re=o.el;o.el+=z,o.animT=o.el;let st=Math.ceil(o.dur-Re),Xe=Math.ceil(o.dur-o.el);Xe!==st&&Xe<=3&&Xe>0&&re.unit==="s"&&bs(a,700,.09,"square",.12),o.el>=o.dur&&Ge()}else if(o.phase==="rest")o.el+=z,o.el>=L(re)&&(o.set++,pe());else if(o.phase==="ready"){o.animT+=Math.min(z,.05);let Re=Math.floor(o.animT/o.dur);Re!==o.wrapN&&(o.wrapN=Re,o.snap=1)}}let ve=o.screen==="session"&&(o.phase==="ready"||o.phase==="work"),Te=ve?ze():0;if(o.setIdx=o.phase==="work"?o.set:o.wrapN,f(we,re)&&(o.side=o.setIdx%2===0?-1:1),ve&&o.phase==="work"&&!o.paused&&re.unit==="rep"){let Re=w(re,Te);Re!==o.lastRep&&(o.lastRep=Re,$n(a,String(Re+1)))}o.screen==="session"&&W()}let Ve=performance.now();function rt(z){let re=Math.min(.25,(z-Ve)/1e3||0);if(Ve=z,Se(re),B.isOpen()){requestAnimationFrame(rt);return}let we=e[o.ex],ve=o.screen==="session",Te=ve&&(o.phase==="ready"||o.phase==="work"),Re=Object.assign({},y(o.ex),{L:_(o.ex),ex:o.ex}),st=!!o.snap;o.snap=0,d.frame({dt:re,time:z,mode:Te?we.mode:"idle",t:Te?ze():0,ctx:o,level:Re,snap:st,ex:we,active:ve,muscles:we.mus,musclesOn:p&&ve&&["ready","count","work"].includes(o.phase),view:h[o.view],drag:{az:o.dragAz,el:o.dragEl},cam:ve?we.cam:{az:-38,el:7,dist:3.5,ty:.8}}),requestAnimationFrame(rt)}R(),F(),k("setup"),I(),W(),d.resize(),requestAnimationFrame(rt),window.__k={mirror:B,D:o,EXS:e,CFG:a,stage:d,step:(z,re,we,ve,Te,Re,st)=>vs(z,re,we,ve,Te,Re,st),probe(z,re,we,ve){let Te=e[z],Re=Object.assign({},Te.levels[re-1],{L:re,ex:z}),st=Re.unit==="rep"?Re.n*(Re.repT||Re.J+Re.H):Re.n,Xe=d.avatar,$e={side:we,dur:st,ex:z},S=1/60,_e=Math.min(ve||12,st),ge=null,b=null,g={rot:0,pos:0,bone:-1,t:0},D=0,O=0,Y=[];for(let ue=0,me=0;ue<_e;ue+=S,me++){vs(Xe,Te.mode,ue,$e,Re,S,me===0);let le=Xe.ALL.map(Pe=>Pe.getWorldQuaternion(new Xe.root.quaternion.constructor)),ce=Xe.root.position.clone();if(ge&&me>20){let Pe=0,ke=-1;le.forEach((ae,ee)=>{let fe=2*Math.acos(Math.min(1,Math.abs(ae.dot(ge[ee]))))*57.2958;fe>Pe&&(Pe=fe,ke=ee)});let C=ce.distanceTo(b);Pe>g.rot&&(g.rot=Pe,g.bone=ke,g.t=ue),C>g.pos&&(g.pos=C)}let Ae=1e9;for(let Pe of Xe.marks){let ke=Pe.o.getWorldPosition(new Xe.root.position.constructor);Ae=Math.min(Ae,ke.y-Pe.r)}Ae<-.02&&(D=Math.max(D,-Ae)),ge=le,b=ce}let te=ue=>(vs(Xe,Te.mode,ue,$e,Re,S,!0),Xe.ALL.map(me=>me.getWorldQuaternion(new Xe.root.quaternion.constructor))),de=te(Math.max(0,st-S)),j=te(0),K=0;return de.forEach((ue,me)=>{K=Math.max(K,2*Math.acos(Math.min(1,Math.abs(ue.dot(j[me]))))*57.2958)}),{name:Te.name,level:re,side:we,dur:st,maxRotDegPerFrame:+g.rot.toFixed(1),atT:+g.t.toFixed(2),bone:Xe.ALL[g.bone]?Xe.ALL[g.bone].name||g.bone:-1,maxPosPerFrame:+g.pos.toFixed(3),underGround:+D.toFixed(3),seamDeg:+K.toFixed(1)}},show(z,re,we,ve){a.lv[z]=re,o.screen="session",k("session"),o.ex=z,H(),o.paused=!0,o.animT=we,ve!==void 0&&(o.side=ve),o.snap=1,I()}}}zu(Su);})();
