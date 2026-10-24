(()=>{var Gc=0,Qo=1,Wc=2;var Ri=1,Xc=2,fs=3,fi=0,$t=1,vn=2,Ln=0,ps=1,Js=2,el=3,tl=4,qc=5;var Pi=100,Yc=101,$c=102,Jc=103,Zc=104,Kc=200,jc=201,Qc=202,eh=203,nl=204,il=205,th=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,Fr=0,Or=1,Br=2,ns=3,kr=4,zr=5,Vr=6,Hr=7,sl=0,hh=1,uh=2,yn=0,rl=1,al=2,ol=3,Zs=4,ll=5,cl=6,hl=7;var ul=300,pi=301,Ii=302,ma=303,ga=304,Ks=306,is=1e3,Rn=1001,Gr=1002,Rt=1003,dh=1004;var js=1005;var Nt=1006,_a=1007;var mi=1008;var en=1009,dl=1010,fl=1011,ms=1012,xa=1013,Mn=1014,Sn=1015,bn=1016,va=1017,ya=1018,gs=1020,pl=35902,ml=35899,gl=1021,_l=1022,cn=1023,Pn=1026,gi=1027,xl=1028,Ma=1029,_i=1030,Sa=1031;var ba=1033,Qs=33776,er=33777,tr=33778,nr=33779,wa=35840,Ta=35841,Ea=35842,Aa=35843,Ca=36196,Ra=37492,Pa=37496,Ia=37488,La=37489,ir=37490,Na=37491,Da=37808,Ua=37809,Fa=37810,Oa=37811,Ba=37812,ka=37813,za=37814,Va=37815,Ha=37816,Ga=37817,Wa=37818,Xa=37819,qa=37820,Ya=37821,$a=36492,Ja=36494,Za=36495,Ka=36283,ja=36284,sr=36285,Qa=36286;var Ls=2300,Wr=2301,Dr=2302,qo=2303,Yo=2400,$o=2401,Jo=2402;var fh=3200;var eo=0,ph=1,Xn="",Wt="srgb",Ns="srgb-linear",Ds="linear",ct="srgb";var Ur=7680;var mh=519,gh=512,_h=513,xh=514,to=515,vh=516,yh=517,no=518,Mh=519,Sh=35044;var vl="300 es",_n=2e3,ss=2001;function ed(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function td(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Us(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function bh(){let n=Us("canvas");return n.style.display="block",n}var Sc={},rs=null;function yl(...n){let e="THREE."+n.shift();rs?rs("log",e,...n):console.log(e,...n)}function wh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ge(...n){n=wh(n);let e="THREE."+n.shift();if(rs)rs("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function We(...n){n=wh(n);let e="THREE."+n.shift();if(rs)rs("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Ai(...n){let e=n.join(" ");e in Sc||(Sc[e]=!0,Ge(...n))}function Th(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Eh={[Fr]:Or,[Br]:Vr,[kr]:Hr,[ns]:zr,[Or]:Fr,[Vr]:Br,[Hr]:kr,[zr]:ns},In=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ft=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var bo=Math.PI/180,Xr=180/Math.PI;function rr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ft[n&255]+Ft[n>>8&255]+Ft[n>>16&255]+Ft[n>>24&255]+"-"+Ft[e&255]+Ft[e>>8&255]+"-"+Ft[e>>16&15|64]+Ft[e>>24&255]+"-"+Ft[t&63|128]+Ft[t>>8&255]+"-"+Ft[t>>16&255]+Ft[t>>24&255]+Ft[i&255]+Ft[i>>8&255]+Ft[i>>16&255]+Ft[i>>24&255]).toLowerCase()}function nt(n,e,t){return Math.max(e,Math.min(t,n))}function nd(n,e){return(n%e+e)%e}function wo(n,e,t){return(1-t)*n+t*e}function As(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Zt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Tl=class Tl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Tl.prototype.isVector2=!0;var et=Tl,kt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,l){let c=i[s+0],o=i[s+1],h=i[s+2],p=i[s+3],u=r[a+0],f=r[a+1],_=r[a+2],y=r[a+3];if(p!==y||c!==u||o!==f||h!==_){let m=c*u+o*f+h*_+p*y;m<0&&(u=-u,f=-f,_=-_,y=-y,m=-m);let d=1-l;if(m<.9995){let A=Math.acos(m),L=Math.sin(A);d=Math.sin(d*A)/L,l=Math.sin(l*A)/L,c=c*d+u*l,o=o*d+f*l,h=h*d+_*l,p=p*d+y*l}else{c=c*d+u*l,o=o*d+f*l,h=h*d+_*l,p=p*d+y*l;let A=1/Math.sqrt(c*c+o*o+h*h+p*p);c*=A,o*=A,h*=A,p*=A}}e[t]=c,e[t+1]=o,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],h=i[s+3],p=r[a],u=r[a+1],f=r[a+2],_=r[a+3];return e[t]=l*_+h*p+c*f-o*u,e[t+1]=c*_+h*u+o*p-l*f,e[t+2]=o*_+h*f+l*u-c*p,e[t+3]=h*_-l*p-c*u-o*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(s/2),p=l(r/2),u=c(i/2),f=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*p+o*f*_,this._y=o*f*p-u*h*_,this._z=o*h*_+u*f*p,this._w=o*h*p-u*f*_;break;case"YXZ":this._x=u*h*p+o*f*_,this._y=o*f*p-u*h*_,this._z=o*h*_-u*f*p,this._w=o*h*p+u*f*_;break;case"ZXY":this._x=u*h*p-o*f*_,this._y=o*f*p+u*h*_,this._z=o*h*_+u*f*p,this._w=o*h*p-u*f*_;break;case"ZYX":this._x=u*h*p-o*f*_,this._y=o*f*p+u*h*_,this._z=o*h*_-u*f*p,this._w=o*h*p+u*f*_;break;case"YZX":this._x=u*h*p+o*f*_,this._y=o*f*p+u*h*_,this._z=o*h*_-u*f*p,this._w=o*h*p-u*f*_;break;case"XZY":this._x=u*h*p-o*f*_,this._y=o*f*p-u*h*_,this._z=o*h*_+u*f*p,this._w=o*h*p+u*f*_;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],l=t[5],c=t[9],o=t[2],h=t[6],p=t[10],u=i+l+p;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-o)*f,this._z=(a-s)*f}else if(i>l&&i>p){let f=2*Math.sqrt(1+i-l-p);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+o)/f}else if(l>p){let f=2*Math.sqrt(1+l-i-p);this._w=(r-o)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+p-i-l);this._w=(a-s)/f,this._x=(r+o)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=t._x,c=t._y,o=t._z,h=t._w;return this._x=i*h+a*l+s*o-r*c,this._y=s*h+a*c+r*l-i*o,this._z=r*h+a*o+i*c-s*l,this._w=a*h-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-t;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,t=Math.sin(t*o)/h,this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},El=class El{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,l=e.z,c=e.w,o=2*(a*s-l*i),h=2*(l*t-r*s),p=2*(r*i-a*t);return this.x=t+c*o+a*p-l*h,this.y=i+c*h+l*o-r*p,this.z=s+c*p+r*h-a*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,l=t.y,c=t.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return To.copy(this).projectOnVector(e),this.sub(To)}reflect(e){return this.sub(To.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;var H=El,To=new H,bc=new kt,Al=class Al{constructor(e,t,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o)}set(e,t,i,s,r,a,l,c,o){let h=this.elements;return h[0]=e,h[1]=s,h[2]=l,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],p=i[7],u=i[2],f=i[5],_=i[8],y=s[0],m=s[3],d=s[6],A=s[1],L=s[4],M=s[7],T=s[2],E=s[5],P=s[8];return r[0]=a*y+l*A+c*T,r[3]=a*m+l*L+c*E,r[6]=a*d+l*M+c*P,r[1]=o*y+h*A+p*T,r[4]=o*m+h*L+p*E,r[7]=o*d+h*M+p*P,r[2]=u*y+f*A+_*T,r[5]=u*m+f*L+_*E,r[8]=u*d+f*M+_*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8];return t*a*h-t*l*o-i*r*h+i*l*c+s*r*o-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=h*a-l*o,u=l*c-h*r,f=o*r-a*c,_=t*p+i*u+s*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/_;return e[0]=p*y,e[1]=(s*o-h*i)*y,e[2]=(l*i-s*a)*y,e[3]=u*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-l*t)*y,e[6]=f*y,e[7]=(i*c-o*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+e,-s*o,s*c,-s*(-o*a+c*l)+l+t,0,0,1),this}scale(e,t){return Ai("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Eo.makeScale(e,t)),this}rotate(e){return Ai("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Eo.makeRotation(-e)),this}translate(e,t){return Ai("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Eo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Al.prototype.isMatrix3=!0;var Ye=Al,Eo=new Ye,wc=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tc=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function id(){let n={enabled:!0,workingColorSpace:Ns,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ct&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ct&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Xn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ai("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ai("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ns]:{primaries:e,whitePoint:i,transfer:Ds,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:ct,toXYZ:wc,fromXYZ:Tc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),n}var tt=id();function Wn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ts(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Hi,qr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=Us("canvas")),Hi.width=e.width,Hi.height=e.height;let s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Us("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wn(t[i]/255)*255):t[i]=Wn(t[i]);return{data:t,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},sd=0,as=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:sd++}),this.uuid=rr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Ao(s[a].image)):r.push(Ao(s[a]))}else r=Ao(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ao(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?qr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}var rd=0,Co=new H,Xt=class n extends In{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Rn,s=Rn,r=Nt,a=mi,l=cn,c=en,o=n.DEFAULT_ANISOTROPY,h=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=rr(),this.name="",this.source=new as(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Co).x}get height(){return this.source.getSize(Co).y}get depth(){return this.source.getSize(Co).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ge(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Rn:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Rn:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=ul;Xt.DEFAULT_ANISOTROPY=1;var Cl=class Cl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,o=c[0],h=c[4],p=c[8],u=c[1],f=c[5],_=c[9],y=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+y)<.1&&Math.abs(_+m)<.1&&Math.abs(o+f+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let L=(o+1)/2,M=(f+1)/2,T=(d+1)/2,E=(h+u)/4,P=(p+y)/4,x=(_+m)/4;return L>M&&L>T?L<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(L),s=E/i,r=P/i):M>T?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=E/s,r=x/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=P/r,s=x/r),this.set(i,s,r,t),this}let A=Math.sqrt((m-_)*(m-_)+(p-y)*(p-y)+(u-h)*(u-h));return Math.abs(A)<.001&&(A=1),this.x=(m-_)/A,this.y=(p-y)/A,this.z=(u-h)/A,this.w=Math.acos((o+f+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;var vt=Cl,Yr=class extends In{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new Xt(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new as(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},jt=class extends Yr{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Fs=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $r=class extends Xt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var pa=class pa{constructor(e,t,i,s,r,a,l,c,o,h,p,u,f,_,y,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,l,c,o,h,p,u,f,_,y,m)}set(e,t,i,s,r,a,l,c,o,h,p,u,f,_,y,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=l,d[13]=c,d[2]=o,d[6]=h,d[10]=p,d[14]=u,d[3]=f,d[7]=_,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Gi.setFromMatrixColumn(e,0).length(),r=1/Gi.setFromMatrixColumn(e,1).length(),a=1/Gi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*p,_=l*h,y=l*p;t[0]=c*h,t[4]=-c*p,t[8]=o,t[1]=f+_*o,t[5]=u-y*o,t[9]=-l*c,t[2]=y-u*o,t[6]=_+f*o,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*p,_=o*h,y=o*p;t[0]=u+y*l,t[4]=_*l-f,t[8]=a*o,t[1]=a*p,t[5]=a*h,t[9]=-l,t[2]=f*l-_,t[6]=y+u*l,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*p,_=o*h,y=o*p;t[0]=u-y*l,t[4]=-a*p,t[8]=_+f*l,t[1]=f+_*l,t[5]=a*h,t[9]=y-u*l,t[2]=-a*o,t[6]=l,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*p,_=l*h,y=l*p;t[0]=c*h,t[4]=_*o-f,t[8]=u*o+y,t[1]=c*p,t[5]=y*o+u,t[9]=f*o-_,t[2]=-o,t[6]=l*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*o,_=l*c,y=l*o;t[0]=c*h,t[4]=y-u*p,t[8]=_*p+f,t[1]=p,t[5]=a*h,t[9]=-l*h,t[2]=-o*h,t[6]=f*p+_,t[10]=u-y*p}else if(e.order==="XZY"){let u=a*c,f=a*o,_=l*c,y=l*o;t[0]=c*h,t[4]=-p,t[8]=o*h,t[1]=u*p+y,t[5]=a*h,t[9]=f*p-_,t[2]=_*p-f,t[6]=l*h,t[10]=y*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ad,e,od)}lookAt(e,t,i){let s=this.elements;return nn.subVectors(e,t),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),jn.crossVectors(i,nn),jn.lengthSq()===0&&(Math.abs(i.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),jn.crossVectors(i,nn)),jn.normalize(),mr.crossVectors(nn,jn),s[0]=jn.x,s[4]=mr.x,s[8]=nn.x,s[1]=jn.y,s[5]=mr.y,s[9]=nn.y,s[2]=jn.z,s[6]=mr.z,s[10]=nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],p=i[5],u=i[9],f=i[13],_=i[2],y=i[6],m=i[10],d=i[14],A=i[3],L=i[7],M=i[11],T=i[15],E=s[0],P=s[4],x=s[8],w=s[12],C=s[1],N=s[5],F=s[9],k=s[13],I=s[2],W=s[6],J=s[10],V=s[14],ne=s[3],B=s[7],G=s[11],Z=s[15];return r[0]=a*E+l*C+c*I+o*ne,r[4]=a*P+l*N+c*W+o*B,r[8]=a*x+l*F+c*J+o*G,r[12]=a*w+l*k+c*V+o*Z,r[1]=h*E+p*C+u*I+f*ne,r[5]=h*P+p*N+u*W+f*B,r[9]=h*x+p*F+u*J+f*G,r[13]=h*w+p*k+u*V+f*Z,r[2]=_*E+y*C+m*I+d*ne,r[6]=_*P+y*N+m*W+d*B,r[10]=_*x+y*F+m*J+d*G,r[14]=_*w+y*k+m*V+d*Z,r[3]=A*E+L*C+M*I+T*ne,r[7]=A*P+L*N+M*W+T*B,r[11]=A*x+L*F+M*J+T*G,r[15]=A*w+L*k+M*V+T*Z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],l=e[5],c=e[9],o=e[13],h=e[2],p=e[6],u=e[10],f=e[14],_=e[3],y=e[7],m=e[11],d=e[15],A=c*f-o*u,L=l*f-o*p,M=l*u-c*p,T=a*f-o*h,E=a*u-c*h,P=a*p-l*h;return t*(y*A-m*L+d*M)-i*(_*A-m*T+d*E)+s*(_*L-y*T+d*P)-r*(_*M-y*E+m*P)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],l=e[9],c=e[2],o=e[6],h=e[10];return t*(a*h-l*o)-i*(r*h-l*c)+s*(r*o-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],l=e[5],c=e[6],o=e[7],h=e[8],p=e[9],u=e[10],f=e[11],_=e[12],y=e[13],m=e[14],d=e[15],A=t*l-i*a,L=t*c-s*a,M=t*o-r*a,T=i*c-s*l,E=i*o-r*l,P=s*o-r*c,x=h*y-p*_,w=h*m-u*_,C=h*d-f*_,N=p*m-u*y,F=p*d-f*y,k=u*d-f*m,I=A*k-L*F+M*N+T*C-E*w+P*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/I;return e[0]=(l*k-c*F+o*N)*W,e[1]=(s*F-i*k-r*N)*W,e[2]=(y*P-m*E+d*T)*W,e[3]=(u*E-p*P-f*T)*W,e[4]=(c*C-a*k-o*w)*W,e[5]=(t*k-s*C+r*w)*W,e[6]=(m*M-_*P-d*L)*W,e[7]=(h*P-u*M+f*L)*W,e[8]=(a*F-l*C+o*x)*W,e[9]=(i*C-t*F-r*x)*W,e[10]=(_*E-y*M+d*A)*W,e[11]=(p*M-h*E-f*A)*W,e[12]=(l*w-a*N-c*x)*W,e[13]=(t*N-i*w+s*x)*W,e[14]=(y*L-_*T-m*A)*W,e[15]=(h*T-p*L+u*A)*W,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,l=e.y,c=e.z,o=r*a,h=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+i,h*c-s*a,0,o*c-s*l,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,l=t._z,c=t._w,o=r+r,h=a+a,p=l+l,u=r*o,f=r*h,_=r*p,y=a*h,m=a*p,d=l*p,A=c*o,L=c*h,M=c*p,T=i.x,E=i.y,P=i.z;return s[0]=(1-(y+d))*T,s[1]=(f+M)*T,s[2]=(_-L)*T,s[3]=0,s[4]=(f-M)*E,s[5]=(1-(u+d))*E,s[6]=(m+A)*E,s[7]=0,s[8]=(_+L)*P,s[9]=(m-A)*P,s[10]=(1-(u+y))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Gi.set(s[0],s[1],s[2]).length(),l=Gi.set(s[4],s[5],s[6]).length(),c=Gi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let o=1/a,h=1/l,p=1/c;return fn.elements[0]*=o,fn.elements[1]*=o,fn.elements[2]*=o,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=p,fn.elements[9]*=p,fn.elements[10]*=p,t.setFromRotationMatrix(fn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,t,i,s,r,a,l=_n,c=!1){let o=this.elements,h=2*r/(t-e),p=2*r/(i-s),u=(t+e)/(t-e),f=(i+s)/(i-s),_,y;if(c)_=r/(a-r),y=a*r/(a-r);else if(l===_n)_=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(l===ss)_=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=p,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=_,o[14]=y,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,s,r,a,l=_n,c=!1){let o=this.elements,h=2/(t-e),p=2/(i-s),u=-(t+e)/(t-e),f=-(i+s)/(i-s),_,y;if(c)_=1/(a-r),y=a/(a-r);else if(l===_n)_=-2/(a-r),y=-(a+r)/(a-r);else if(l===ss)_=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=p,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=_,o[14]=y,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};pa.prototype.isMatrix4=!0;var gt=pa,Gi=new H,fn=new gt,ad=new H(0,0,0),od=new H(1,1,1),jn=new H,mr=new H,nn=new H,Ec=new gt,Ac=new kt,xn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],p=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,f),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,f),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(l,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER="XYZ";var Os=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ld=0,Cc=new H,Wi=new kt,kn=new gt,gr=new H,Cs=new H,cd=new H,hd=new kt,Rc=new H(1,0,0),Pc=new H(0,1,0),Ic=new H(0,0,1),Lc={type:"added"},ud={type:"removed"},Xi={type:"childadded",child:null},Ro={type:"childremoved",child:null},Pt=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new xn,i=new kt,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ye}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Os,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(e,t){return Wi.setFromAxisAngle(e,t),this.quaternion.premultiply(Wi),this}rotateX(e){return this.rotateOnAxis(Rc,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Ic,e)}translateOnAxis(e,t){return Cc.copy(e).applyQuaternion(this.quaternion),this.position.add(Cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rc,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Ic,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?gr.copy(e):gr.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Cs,gr,this.up):kn.lookAt(gr,Cs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(kn),this.quaternion.premultiply(Wi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(We("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null):We("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ud),Ro.child=e,this.dispatchEvent(Ro),Ro.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lc),Xi.child=e,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,e,cd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let p=c[o];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(e.materials,this.material[c]));s.material=l}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(e.animations,c))}}if(t){let l=a(e.geometries),c=a(e.materials),o=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),f=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),_.length>0&&(i.nodes=_)}return i.object=s,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Pt.DEFAULT_UP=new H(0,1,0);Pt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _t=class extends Pt{constructor(){super(),this.isGroup=!0,this.type="Group"}},dd={type:"move"},os=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),d=this._getHandJoint(o,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=o.joints["index-finger-tip"],p=o.joints["thumb-tip"],u=h.position.distanceTo(p.position),f=.02,_=.005;o.inputState.pinching&&u>f+_?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&u<=f-_&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new _t;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},_r={h:0,s:0,l:0};function Po(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var $e=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=tt.workingColorSpace){if(e=nd(e,1),t=nt(t,0,1),i=nt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Po(a,r,e+1/3),this.g=Po(a,r,e),this.b=Po(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ge("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=Ah[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return tt.workingToColorSpace(Ot.copy(this),e),Math.round(nt(Ot.r*255,0,255))*65536+Math.round(nt(Ot.g*255,0,255))*256+Math.round(nt(Ot.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ot.copy(this),t);let i=Ot.r,s=Ot.g,r=Ot.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let p=a-l;switch(o=h<=.5?p/(a+l):p/(2-a-l),a){case i:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-i)/p+2;break;case r:c=(i-s)/p+4;break}c/=6}return e.h=c,e.s=o,e.l=h,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ot.copy(this),t),e.r=Ot.r,e.g=Ot.g,e.b=Ot.b,e}getStyle(e=Wt){tt.workingToColorSpace(Ot.copy(this),e);let t=Ot.r,i=Ot.g,s=Ot.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(_r);let i=wo(Qn.h,_r.h,t),s=wo(Qn.s,_r.s,t),r=wo(Qn.l,_r.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ot=new $e;$e.NAMES=Ah;var Bs=class extends Pt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pn=new H,zn=new H,Io=new H,Vn=new H,qi=new H,Yi=new H,Nc=new H,Lo=new H,No=new H,Do=new H,Uo=new vt,Fo=new vt,Oo=new vt,ii=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){pn.subVectors(s,t),zn.subVectors(i,t),Io.subVectors(e,t);let a=pn.dot(pn),l=pn.dot(zn),c=pn.dot(Io),o=zn.dot(zn),h=zn.dot(Io),p=a*o-l*l;if(p===0)return r.set(0,0,0),null;let u=1/p,f=(o*c-l*h)*u,_=(a*h-l*c)*u;return r.set(1-f-_,_,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,i,s,r,a,l,c){return this.getBarycoord(e,t,i,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(l,Vn.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Uo.setScalar(0),Fo.setScalar(0),Oo.setScalar(0),Uo.fromBufferAttribute(e,t),Fo.fromBufferAttribute(e,i),Oo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Uo,r.x),a.addScaledVector(Fo,r.y),a.addScaledVector(Oo,r.z),a}static isFrontFacing(e,t,i,s){return pn.subVectors(i,t),zn.subVectors(e,t),pn.cross(zn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),zn.subVectors(this.a,this.b),pn.cross(zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,l;qi.subVectors(s,i),Yi.subVectors(r,i),Lo.subVectors(e,i);let c=qi.dot(Lo),o=Yi.dot(Lo);if(c<=0&&o<=0)return t.copy(i);No.subVectors(e,s);let h=qi.dot(No),p=Yi.dot(No);if(h>=0&&p<=h)return t.copy(s);let u=c*p-h*o;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(qi,a);Do.subVectors(e,r);let f=qi.dot(Do),_=Yi.dot(Do);if(_>=0&&f<=_)return t.copy(r);let y=f*o-c*_;if(y<=0&&o>=0&&_<=0)return l=o/(o-_),t.copy(i).addScaledVector(Yi,l);let m=h*_-f*p;if(m<=0&&p-h>=0&&f-_>=0)return Nc.subVectors(r,s),l=(p-h)/(p-h+(f-_)),t.copy(s).addScaledVector(Nc,l);let d=1/(m+y+u);return a=y*d,l=u*d,t.copy(i).addScaledVector(qi,a).addScaledVector(Yi,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox)),xr.applyMatrix4(e.matrixWorld),this.union(xr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Rs),vr.subVectors(this.max,Rs),$i.subVectors(e.a,Rs),Ji.subVectors(e.b,Rs),Zi.subVectors(e.c,Rs),ei.subVectors(Ji,$i),ti.subVectors(Zi,Ji),bi.subVectors($i,Zi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-bi.z,bi.y,ei.z,0,-ei.x,ti.z,0,-ti.x,bi.z,0,-bi.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-bi.y,bi.x,0];return!Bo(t,$i,Ji,Zi,vr)||(t=[1,0,0,0,1,0,0,0,1],!Bo(t,$i,Ji,Zi,vr))?!1:(yr.crossVectors(ei,ti),t=[yr.x,yr.y,yr.z],Bo(t,$i,Ji,Zi,vr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Hn=[new H,new H,new H,new H,new H,new H,new H,new H],mn=new H,xr=new si,$i=new H,Ji=new H,Zi=new H,ei=new H,ti=new H,bi=new H,Rs=new H,vr=new H,yr=new H,wi=new H;function Bo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){wi.fromArray(n,r);let l=s.x*Math.abs(wi.x)+s.y*Math.abs(wi.y)+s.z*Math.abs(wi.z),c=e.dot(wi),o=t.dot(wi),h=i.dot(wi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var wt=new H,Mr=new et,fd=0,Kt=class extends In{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Sh,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Mr.fromBufferAttribute(this,t),Mr.applyMatrix3(e),this.setXY(t,Mr.x,Mr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=As(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=As(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=As(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=As(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=As(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),i=Zt(i,this.array),s=Zt(s,this.array),r=Zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var ks=class extends Kt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var zs=class extends Kt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var xt=class extends Kt{constructor(e,t,i){super(new Float32Array(e),t,i)}},pd=new si,Ps=new H,ko=new H,ls=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):pd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ps.subVectors(e,this.center);let t=Ps.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Ps,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ko.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ps.copy(e.center).add(ko)),this.expandByPoint(Ps.copy(e.center).sub(ko))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},md=0,ln=new gt,zo=new Pt,Ki=new H,sn=new si,Is=new si,Ct=new H,Qt=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ed(e)?zs:ks)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ye().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ln.makeRotationFromQuaternion(e),this.applyMatrix4(ln),this}rotateX(e){return ln.makeRotationX(e),this.applyMatrix4(ln),this}rotateY(e){return ln.makeRotationY(e),this.applyMatrix4(ln),this}rotateZ(e){return ln.makeRotationZ(e),this.applyMatrix4(ln),this}translate(e,t,i){return ln.makeTranslation(e,t,i),this.applyMatrix4(ln),this}scale(e,t,i){return ln.makeScale(e,t,i),this.applyMatrix4(ln),this}lookAt(e){return zo.lookAt(e),zo.updateMatrix(),this.applyMatrix4(zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new xt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ct.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ct),Ct.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ct)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&We('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){We("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let l=t[r];Is.setFromBufferAttribute(l),this.morphTargetsRelative?(Ct.addVectors(sn.min,Is.min),sn.expandByPoint(Ct),Ct.addVectors(sn.max,Is.max),sn.expandByPoint(Ct)):(sn.expandByPoint(Is.min),sn.expandByPoint(Is.max))}sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Ct.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ct));if(t)for(let r=0,a=t.length;r<a;r++){let l=t[r],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ct.fromBufferAttribute(l,o),c&&(Ki.fromBufferAttribute(e,o),Ct.add(Ki)),s=Math.max(s,i.distanceToSquared(Ct))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&We('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){We("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Kt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new H,c[x]=new H;let o=new H,h=new H,p=new H,u=new et,f=new et,_=new et,y=new H,m=new H;function d(x,w,C){o.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),p.fromBufferAttribute(i,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,w),_.fromBufferAttribute(r,C),h.sub(o),p.sub(o),f.sub(u),_.sub(u);let N=1/(f.x*_.y-_.x*f.y);isFinite(N)&&(y.copy(h).multiplyScalar(_.y).addScaledVector(p,-f.y).multiplyScalar(N),m.copy(p).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(N),l[x].add(y),l[w].add(y),l[C].add(y),c[x].add(m),c[w].add(m),c[C].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let x=0,w=A.length;x<w;++x){let C=A[x],N=C.start,F=C.count;for(let k=N,I=N+F;k<I;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let L=new H,M=new H,T=new H,E=new H;function P(x){T.fromBufferAttribute(s,x),E.copy(T);let w=l[x];L.copy(w),L.sub(T.multiplyScalar(T.dot(w))).normalize(),M.crossVectors(E,w);let N=M.dot(c[x])<0?-1:1;a.setXYZW(x,L.x,L.y,L.z,N)}for(let x=0,w=A.length;x<w;++x){let C=A[x],N=C.start,F=C.count;for(let k=N,I=N+F;k<I;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new H,r=new H,a=new H,l=new H,c=new H,o=new H,h=new H,p=new H;if(e)for(let u=0,f=e.count;u<f;u+=3){let _=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,y),o.fromBufferAttribute(i,m),l.add(h),c.add(h),o.add(h),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ct.fromBufferAttribute(e,t),Ct.normalize(),e.setXYZ(t,Ct.x,Ct.y,Ct.z)}toNonIndexed(){function e(l,c){let o=l.array,h=l.itemSize,p=l.normalized,u=new o.constructor(c.length*h),f=0,_=0;for(let y=0,m=c.length;y<m;y++){l.isInterleavedBufferAttribute?f=c[y]*l.data.stride+l.offset:f=c[y]*h;for(let d=0;d<h;d++)u[_++]=o[f++]}return new Kt(u,h,p)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=e(c,i);t.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let h=0,p=o.length;h<p;h++){let u=o[h],f=e(u,i);c.push(f)}t.morphAttributes[l]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(e[o]=c[o]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let o=i[c];e.data.attributes[c]=o.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let p=0,u=o.length;p<u;p++){let f=o[p];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let o in s){let h=s[o];this.setAttribute(o,h.clone(t))}let r=e.morphAttributes;for(let o in r){let h=[],p=r[o];for(let u=0,f=p.length;u<f;u++)h.push(p[u].clone(t));this.morphAttributes[o]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let o=0,h=a.length;o<h;o++){let p=a[o];this.addGroup(p.start,p.count,p.materialIndex)}let l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vo=new H,gd=new H,_d=new Ye,gn=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vo.subVectors(i,t).cross(gd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(Vo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||_d.getNormalMatrix(e),s=this.coplanarPoint(Vo).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xd=0,ri=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xd++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=ps,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nl,this.blendDst=il,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ur,this.stencilZFail=Ur,this.stencilZPass=Ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ge(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ge(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new gn().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new et().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new et().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Gn=new H,Ho=new H,Sr=new H,br=new H,Jr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Gn.copy(this.origin).addScaledVector(this.direction,t),Gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Ho.copy(e).add(t).multiplyScalar(.5),Sr.copy(t).sub(e).normalize(),br.copy(this.origin).sub(Ho);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Sr),l=br.dot(this.direction),c=-br.dot(Sr),o=br.lengthSq(),h=Math.abs(1-a*a),p,u,f,_;if(h>0)if(p=a*c-l,u=a*l-c,_=r*h,p>=0)if(u>=-_)if(u<=_){let y=1/h;p*=y,u*=y,f=p*(p+a*u+2*l)+u*(a*p+u+2*c)+o}else u=r,p=Math.max(0,-(a*u+l)),f=-p*p+u*(u+2*c)+o;else u=-r,p=Math.max(0,-(a*u+l)),f=-p*p+u*(u+2*c)+o;else u<=-_?(p=Math.max(0,-(-a*r+l)),u=p>0?-r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+o):u<=_?(p=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+o):(p=Math.max(0,-(a*r+l)),u=p>0?r:Math.min(Math.max(-r,-c),r),f=-p*p+u*(u+2*c)+o);else u=a>0?-r:r,p=Math.max(0,-(a*u+l)),f=-p*p+u*(u+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ho).addScaledVector(Sr,u),f}intersectSphere(e,t){if(e.radius<0)return null;Gn.subVectors(e.center,this.origin);let i=Gn.dot(this.direction),s=Gn.dot(Gn)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,t):this.at(l,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,l,c,o=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return o>=0?(i=(e.min.x-u.x)*o,s=(e.max.x-u.x)*o):(i=(e.max.x-u.x)*o,s=(e.min.x-u.x)*o),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),p>=0?(l=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(l=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Gn)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,h=l.z,p=e.x-a.x,u=e.y-a.y,f=e.z-a.z,_=t.x-a.x,y=t.y-a.y,m=t.z-a.z,d=i.x-a.x,A=i.y-a.y,L=i.z-a.z,M=Math.abs(c),T=Math.abs(o),E=Math.abs(h),P,x,w,C,N,F,k,I,W,J,V,ne;if(M>=T&&M>=E?(w=c,F=p,W=_,ne=d,c>=0?(P=o,x=h,C=u,N=f,k=y,I=m,J=A,V=L):(P=h,x=o,C=f,N=u,k=m,I=y,J=L,V=A)):T>=E?(w=o,F=u,W=y,ne=A,o>=0?(P=h,x=c,C=f,N=p,k=m,I=_,J=L,V=d):(P=c,x=h,C=p,N=f,k=_,I=m,J=d,V=L)):(w=h,F=f,W=m,ne=L,h>=0?(P=c,x=o,C=p,N=u,k=_,I=y,J=d,V=A):(P=o,x=c,C=u,N=p,k=y,I=_,J=A,V=d)),w===0)return null;let B=P/w,G=x/w,Z=1/w,he=C-B*F,pe=N-G*F,He=k-B*W,Ue=I-G*W,je=J-B*ne,ie=V-G*ne,se=je*Ue-ie*He,ye=he*ie-pe*je,ze=He*pe-Ue*he;if(s){if(se<0||ye<0||ze<0)return null}else if((se<0||ye<0||ze<0)&&(se>0||ye>0||ze>0))return null;let Se=se+ye+ze;if(Se===0)return null;let Ve=Z*(se*F+ye*W+ze*ne);return(Se>0?Ve<0:Ve>0)?null:this.at(Ve/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ai=class extends ri{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Dc=new gt,Ti=new Jr,wr=new ls,Uc=new H,Tr=new H,Er=new H,Ar=new H,Go=new H,Cr=new H,Fc=new H,Rr=new H,st=class extends Pt{constructor(e=new Qt,t=new ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let l=this.morphTargetInfluences;if(r&&l){Cr.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let h=l[c],p=r[c];h!==0&&(Go.fromBufferAttribute(p,e),a?Cr.addScaledVector(Go,h):Cr.addScaledVector(Go.sub(t),h))}t.add(Cr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wr.copy(i.boundingSphere),wr.applyMatrix4(r),Ti.copy(e.ray).recast(e.near),!(wr.containsPoint(Ti.origin)===!1&&(Ti.intersectSphere(wr,Uc)===null||Ti.origin.distanceToSquared(Uc)>(e.far-e.near)**2))&&(Dc.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&Ti.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ti)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,f=r.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],d=a[m.materialIndex],A=Math.max(m.start,f.start),L=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,T=L;M<T;M+=3){let E=l.getX(M),P=l.getX(M+1),x=l.getX(M+2);s=Pr(this,d,e,i,o,h,p,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=_,d=y;m<d;m+=3){let A=l.getX(m),L=l.getX(m+1),M=l.getX(m+2);s=Pr(this,a,e,i,o,h,p,A,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,y=u.length;_<y;_++){let m=u[_],d=a[m.materialIndex],A=Math.max(m.start,f.start),L=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let M=A,T=L;M<T;M+=3){let E=M,P=M+1,x=M+2;s=Pr(this,d,e,i,o,h,p,E,P,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=_,d=y;m<d;m+=3){let A=m,L=m+1,M=m+2;s=Pr(this,a,e,i,o,h,p,A,L,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function vd(n,e,t,i,s,r,a,l){let c;if(e.side===$t?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,e.side===fi,l),c===null)return null;Rr.copy(l),Rr.applyMatrix4(n.matrixWorld);let o=t.ray.origin.distanceTo(Rr);return o<t.near||o>t.far?null:{distance:o,point:Rr.clone(),object:n}}function Pr(n,e,t,i,s,r,a,l,c,o){n.getVertexPosition(l,Tr),n.getVertexPosition(c,Er),n.getVertexPosition(o,Ar);let h=vd(n,e,t,i,Tr,Er,Ar,Fc);if(h){let p=new H;ii.getBarycoord(Fc,Tr,Er,Ar,p),s&&(h.uv=ii.getInterpolatedAttribute(s,l,c,o,p,new et)),r&&(h.uv1=ii.getInterpolatedAttribute(r,l,c,o,p,new et)),a&&(h.normal=ii.getInterpolatedAttribute(a,l,c,o,p,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:o,normal:new H,materialIndex:0};ii.getNormal(Tr,Er,Ar,u.normal),h.face=u,h.barycoord=p}return h}var Zr=class extends Xt{constructor(e=null,t=1,i=1,s,r,a,l,c,o=Rt,h=Rt,p,u){super(null,a,l,c,o,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ei=new ls,yd=new et(.5,.5),Ir=new H,cs=class{constructor(e=new gn,t=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_n,i=!1){let s=this.planes,r=e.elements,a=r[0],l=r[1],c=r[2],o=r[3],h=r[4],p=r[5],u=r[6],f=r[7],_=r[8],y=r[9],m=r[10],d=r[11],A=r[12],L=r[13],M=r[14],T=r[15];if(s[0].setComponents(o-a,f-h,d-_,T-A).normalize(),s[1].setComponents(o+a,f+h,d+_,T+A).normalize(),s[2].setComponents(o+l,f+p,d+y,T+L).normalize(),s[3].setComponents(o-l,f-p,d-y,T-L).normalize(),i)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(o-c,f-u,d-m,T-M).normalize();else if(s[4].setComponents(o-c,f-u,d-m,T-M).normalize(),t===_n)s[5].setComponents(o+c,f+u,d+m,T+M).normalize();else if(t===ss)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ei.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ei.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ei)}intersectsSprite(e){Ei.center.set(0,0,0);let t=yd.distanceTo(e.center);return Ei.radius=.7071067811865476+t,Ei.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ei)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Ir.x=s.normal.x>0?e.max.x:e.min.x,Ir.y=s.normal.y>0?e.max.y:e.min.y,Ir.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends Xt{constructor(e=[],t=pi,i,s,r,a,l,c,o,h){super(e,t,i,s,r,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Hs=class extends Xt{constructor(e,t,i,s,r,a,l,c,o){super(e,t,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var oi=class extends Xt{constructor(e,t,i=Mn,s,r,a,l=Rt,c=Rt,o,h=Pn,p=1){if(h!==Pn&&h!==gi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:p};super(u,s,r,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new as(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Kr=class extends oi{constructor(e,t=Mn,i=pi,s,r,a=Rt,l=Rt,c,o=Pn){let h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,i,s,r,a,l,c,o),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Gs=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},qt=class n extends Qt{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],h=[],p=[],u=0,f=0;_("z","y","x",-1,-1,i,t,e,a,r,0),_("z","y","x",1,-1,i,t,-e,a,r,1),_("x","z","y",1,1,e,i,t,s,a,2),_("x","z","y",1,-1,e,i,-t,s,a,3),_("x","y","z",1,-1,e,t,i,s,r,4),_("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new xt(o,3)),this.setAttribute("normal",new xt(h,3)),this.setAttribute("uv",new xt(p,2));function _(y,m,d,A,L,M,T,E,P,x,w){let C=M/P,N=T/x,F=M/2,k=T/2,I=E/2,W=P+1,J=x+1,V=0,ne=0,B=new H;for(let G=0;G<J;G++){let Z=G*N-k;for(let he=0;he<W;he++){let pe=he*C-F;B[y]=pe*A,B[m]=Z*L,B[d]=I,o.push(B.x,B.y,B.z),B[y]=0,B[m]=0,B[d]=E>0?1:-1,h.push(B.x,B.y,B.z),p.push(he/P),p.push(1-G/x),V+=1}}for(let G=0;G<x;G++)for(let Z=0;Z<P;Z++){let he=u+Z+W*G,pe=u+Z+W*(G+1),He=u+(Z+1)+W*(G+1),Ue=u+(Z+1)+W*G;c.push(he,pe,Ue),c.push(pe,He,Ue),ne+=6}l.addGroup(f,ne,w),f+=ne,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},li=class n extends Qt{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],c=[],o=[],h=t/2,p=Math.PI/2*e,u=t,f=2*p+u,_=i*2+r,y=s+1,m=new H,d=new H;for(let A=0;A<=_;A++){let L=0,M=0,T=0,E=0;if(A<=i){let w=A/i,C=w*Math.PI/2;M=-h-e*Math.cos(C),T=e*Math.sin(C),E=-e*Math.cos(C),L=w*p}else if(A<=i+r){let w=(A-i)/r;M=-h+w*t,T=e,E=0,L=p+w*u}else{let w=(A-i-r)/i,C=w*Math.PI/2;M=h+e*Math.sin(C),T=e*Math.cos(C),E=e*Math.sin(C),L=p+u+w*p}let P=Math.max(0,Math.min(1,L/f)),x=0;A===0?x=.5/s:A===_&&(x=-.5/s);for(let w=0;w<=s;w++){let C=w/s,N=C*Math.PI*2,F=Math.sin(N),k=Math.cos(N);d.x=-T*k,d.y=M,d.z=T*F,l.push(d.x,d.y,d.z),m.set(-T*k,E,T*F),m.normalize(),c.push(m.x,m.y,m.z),o.push(C+x,P)}if(A>0){let w=(A-1)*y;for(let C=0;C<s;C++){let N=w+C,F=w+C+1,k=A*y+C,I=A*y+C+1;a.push(N,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new xt(l,3)),this.setAttribute("normal",new xt(c,3)),this.setAttribute("uv",new xt(o,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var hs=class n extends Qt{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],u=[],f=[],_=0,y=[],m=i/2,d=0;A(),a===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(h),this.setAttribute("position",new xt(p,3)),this.setAttribute("normal",new xt(u,3)),this.setAttribute("uv",new xt(f,2));function A(){let M=new H,T=new H,E=0,P=(t-e)/i;for(let x=0;x<=r;x++){let w=[],C=x/r,N=C*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,I=k*c+l,W=Math.sin(I),J=Math.cos(I);T.x=N*W,T.y=-C*i+m,T.z=N*J,p.push(T.x,T.y,T.z),M.set(W,P,J).normalize(),u.push(M.x,M.y,M.z),f.push(k,1-C),w.push(_++)}y.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let C=y[w][x],N=y[w+1][x],F=y[w+1][x+1],k=y[w][x+1];(e>0||w!==0)&&(h.push(C,N,k),E+=3),(t>0||w!==r-1)&&(h.push(N,F,k),E+=3)}o.addGroup(d,E,0),d+=E}function L(M){let T=_,E=new et,P=new H,x=0,w=M===!0?e:t,C=M===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),_++;let N=_;for(let F=0;F<=s;F++){let I=F/s*c+l,W=Math.cos(I),J=Math.sin(I);P.x=w*J,P.y=m*C,P.z=w*W,p.push(P.x,P.y,P.z),u.push(0,C,0),E.x=W*.5+.5,E.y=J*.5*C+.5,f.push(E.x,E.y),_++}for(let F=0;F<s;F++){let k=T+F,I=N+F;M===!0?h.push(I,I+1,k):h.push(I+1,I,k),x+=3}o.addGroup(d,x,M===!0?1:2),d+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ci=class n extends Qt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,l=Math.floor(i),c=Math.floor(s),o=l+1,h=c+1,p=e/l,u=t/c,f=[],_=[],y=[],m=[];for(let d=0;d<h;d++){let A=d*u-a;for(let L=0;L<o;L++){let M=L*p-r;_.push(M,-A,0),y.push(0,0,1),m.push(L/l),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let A=0;A<l;A++){let L=A+o*d,M=A+o*(d+1),T=A+1+o*(d+1),E=A+1+o*d;f.push(L,M,E),f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ws=class n extends Qt{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let l=[],c=[],o=[],h=[],p=e,u=(t-e)/s,f=new H,_=new et;for(let y=0;y<=s;y++){for(let m=0;m<=i;m++){let d=r+m/i*a;f.x=p*Math.cos(d),f.y=p*Math.sin(d),c.push(f.x,f.y,f.z),o.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}p+=u}for(let y=0;y<s;y++){let m=y*(i+1);for(let d=0;d<i;d++){let A=d+m,L=A,M=A+i+1,T=A+i+2,E=A+1;l.push(L,M,E),l.push(M,T,E)}}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(o,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Ci=class n extends Qt{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],p=new H,u=new H,f=[],_=[],y=[],m=[];for(let d=0;d<=i;d++){let A=[],L=d/i,M=a+L*l,T=e*Math.cos(M),E=Math.sqrt(e*e-T*T),P=0;d===0&&a===0?P=.5/t:d===i&&c===Math.PI&&(P=-.5/t);for(let x=0;x<=t;x++){let w=x/t,C=s+w*r;p.x=-E*Math.cos(C),p.y=T,p.z=E*Math.sin(C),_.push(p.x,p.y,p.z),u.copy(p).normalize(),y.push(u.x,u.y,u.z),m.push(w+P,1-L),A.push(o++)}h.push(A)}for(let d=0;d<i;d++)for(let A=0;A<t;A++){let L=h[d][A+1],M=h[d][A],T=h[d+1][A],E=h[d+1][A+1];(d!==0||a>0)&&f.push(L,M,E),(d!==i-1||c<Math.PI)&&f.push(M,T,E)}this.setIndex(f),this.setAttribute("position",new xt(_,3)),this.setAttribute("normal",new xt(y,3)),this.setAttribute("uv",new xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Li(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Oc(s))s.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Oc(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function zt(n){let e={};for(let t=0;t<n.length;t++){let i=Li(n[t]);for(let s in i)e[s]=i[s]}return e}function Oc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Md(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Ml(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Ch={clone:Li,merge:zt},Sd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Yt=class extends ri{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sd,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Md(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new $e().setHex(s.value);break;case"v2":this.uniforms[i].value=new et().fromArray(s.value);break;case"v3":this.uniforms[i].value=new H().fromArray(s.value);break;case"v4":this.uniforms[i].value=new vt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},jr=class extends Yt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},rn=class extends ri{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Qr=class extends ri{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ea=class extends ri{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ji(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Wo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var hi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let l=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let l=t[1];e<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let l=i+a>>>1;e<t[l]?a=l:i=l+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ta=class extends hi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yo,endingEnd:Yo}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case $o:r=e,l=2*t-i;break;case Jo:r=s.length-2,l=t+s[r]-s[r+1];break;default:r=e,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case $o:a=e,c=2*i-t;break;case Jo:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let o=(i-t)*.5,h=this.valueSize;this._weightPrev=o/(t-l),this._weightNext=o/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this._offsetPrev,p=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(i-t)/(s-t),y=_*_,m=y*_,d=-u*m+2*u*y-u*_,A=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*_+1,L=(-1-f)*m+(1.5+f)*y+.5*_,M=f*m-f*y;for(let T=0;T!==l;++T)r[T]=d*a[h+T]+A*a[o+T]+L*a[c+T]+M*a[p+T];return r}},na=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=(i-t)/(s-t),p=1-h;for(let u=0;u!==l;++u)r[u]=a[o+u]*p+a[c+u]*h;return r}},ia=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},sa=class extends hi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=e*l,o=c-l,h=this.inTangents,p=this.outTangents;if(!h||!p){let _=(i-t)/(s-t),y=1-_;for(let m=0;m!==l;++m)r[m]=a[o+m]*y+a[c+m]*_;return r}let u=l*2,f=e-1;for(let _=0;_!==l;++_){let y=a[o+_],m=a[c+_],d=f*u+_*2,A=p[d],L=p[d+1],M=e*u+_*2,T=h[M],E=h[M+1],P=Td(i,t,A,T,s);r[_]=Rh(P,y,L,E,m)}return r}};function Rh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function wd(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Td(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let l=Rh(r,e,t,i,s)-n;if(Math.abs(l)<1e-10)break;let c=wd(r,e,t,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var an=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ji(t,this.TimeBufferType),this.values=ji(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ji(e.times,Array),values:ji(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Wo(e.settings)&&(i.settings={inTangents:ji(e.settings.inTangents,Array),outTangents:ji(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new na(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ta(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new sa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Wr:t=this.InterpolantFactoryMethodLinear;break;case Dr:t=this.InterpolantFactoryMethodSmooth;break;case qo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ge("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Wr;case this.InterpolantFactoryMethodSmooth:return Dr;case this.InterpolantFactoryMethodBezier:return qo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;Wo(this.settings)&&(Bc(this.settings.inTangents,e),Bc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(We("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(We("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){We("KeyframeTrack: Time is not a valid number.",this,l,c),e=!1;break}if(a!==null&&a>c){We("KeyframeTrack: Out of order keys.",this,l,c,a),e=!1;break}a=c}if(s!==void 0&&td(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){We("KeyframeTrack: Value is not a valid number.",this,l,o),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Dr,r=e.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=e[l],h=e[l+1];if(o!==h&&(l!==1||o!==e[0]))if(s)c=!0;else{let p=l*i,u=p-i,f=p+i;for(let _=0;_!==i;++_){let y=t[p+_];if(y!==t[u+_]||y!==t[f+_]){c=!0;break}}}if(c){if(l!==a){e[a]=e[l];let p=l*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[p+f]}++a}}if(r>0){e[a]=e[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)t[c+o]=t[l+o];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Bc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Wr;var ui=class extends an{constructor(e,t,i){super(e,t,i)}};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ls;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ra=class extends an{constructor(e,t,i,s){super(e,t,i,s)}};ra.prototype.ValueTypeName="color";var aa=class extends an{constructor(e,t,i,s){super(e,t,i,s)}};aa.prototype.ValueTypeName="number";var oa=class extends hi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-t)/(s-t),o=e*l;for(let h=o+l;o!==h;o+=4)kt.slerpFlat(r,0,a,o-l,a,o,c);return r}},Xs=class extends an{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new oa(this.times,this.values,this.getValueSize(),e)}};Xs.prototype.ValueTypeName="quaternion";Xs.prototype.InterpolantFactoryMethodSmooth=void 0;var di=class extends an{constructor(e,t,i){super(e,t,i)}};di.prototype.ValueTypeName="string";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ls;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends an{constructor(e,t,i,s){super(e,t,i,s)}};la.prototype.ValueTypeName="vector";var ca=class{constructor(e,t,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return o.push(h,p),this},this.removeHandler=function(h){let p=o.indexOf(h);return p!==-1&&o.splice(p,2),this},this.getHandler=function(h){for(let p=0,u=o.length;p<u;p+=2){let f=o[p],_=o[p+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ph=new ca,ha=class{constructor(e){this.manager=e!==void 0?e:Ph,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ha.DEFAULT_MATERIAL_NAME="__DEFAULT";var qs=class extends Pt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ys=class extends qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new $e(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Xo=new gt,kc=new H,zc=new H,ua=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cs,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;kc.setFromMatrixPosition(e.matrixWorld),t.position.copy(kc),zc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){Xo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Xo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;e.coordinateSystem===ss||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),t.multiply(Xo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Lr=new H,Nr=new kt,Cn=new H,$s=class extends Pt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Lr,Nr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Nr,Cn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Lr,Nr,Cn),Cn.x===1&&Cn.y===1&&Cn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Lr,Nr,Cn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new H,Vc=new et,Hc=new et,Bt=class extends $s{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Xr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xr*2*Math.atan(Math.tan(bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Hc),t.subVectors(Hc,Vc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var us=class extends $s{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,l=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Zo=class extends ua{constructor(){super(new us(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ds=class extends qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Pt.DEFAULT_UP),this.updateMatrix(),this.target=new Pt,this.shadow=new Zo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Qi=-90,es=1,da=class extends Pt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Bt(Qi,es,e,t);s.layers=this.layers,this.add(s);let r=new Bt(Qi,es,e,t);r.layers=this.layers,this.add(r);let a=new Bt(Qi,es,e,t);a.layers=this.layers,this.add(a);let l=new Bt(Qi,es,e,t);l.layers=this.layers,this.add(l);let c=new Bt(Qi,es,e,t);c.layers=this.layers,this.add(c);let o=new Bt(Qi,es,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,l,c]=t;for(let o of t)this.remove(o);if(e===_n)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ss)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,u,f),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}},fa=class extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Sl="\\[\\]\\.:\\/",Ed=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",Ad="[^"+Sl.replace("\\.","")+"]",Cd=/((?:WC+[\/:])*)/.source.replace("WC",bl),Rd=/(WCOD+)?/.source.replace("WCOD",Ad),Pd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Id=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),Ld=new RegExp("^"+Cd+Rd+Pd+Id+"$"),Nd=["material","materials","bones","map"],Ko=class{constructor(e,t,i){let s=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ed,"")}static parseTrackName(e){let t=Ld.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Nd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===t||l.uuid===t)return l;let c=i(l.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ge("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=t.objectIndex;switch(i){case"materials":if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){We("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){We("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===o){o=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){We("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){We("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){We("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(o!==void 0){if(e[o]===void 0){We("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[o]}}let a=e[s];if(a===void 0){let o=t.nodeName;We("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",e);return}let l=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?l=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){We("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=Ko;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var Rl=class Rl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Rl.prototype.isMatrix2=!0;var jo=Rl;function wl(n,e,t,i){let s=Dd(i);switch(t){case gl:return n*e;case xl:return n*e/s.components*s.byteLength;case Ma:return n*e/s.components*s.byteLength;case _i:return n*e*2/s.components*s.byteLength;case Sa:return n*e*2/s.components*s.byteLength;case _l:return n*e*3/s.components*s.byteLength;case cn:return n*e*4/s.components*s.byteLength;case ba:return n*e*4/s.components*s.byteLength;case Qs:case er:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case tr:case nr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ta:case Aa:return Math.max(n,16)*Math.max(e,8)/4;case wa:case Ea:return Math.max(n,8)*Math.max(e,8)/2;case Ca:case Ra:case Ia:case La:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Pa:case ir:case Na:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Da:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ua:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Fa:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Oa:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ba:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ka:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Va:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Ha:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ga:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Wa:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qa:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ya:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $a:case Ja:case Za:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Ka:case ja:return Math.ceil(n/4)*Math.ceil(e/4)*8;case sr:case Qa:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dd(n){switch(n){case en:case dl:return{byteLength:1,components:1};case ms:case fl:case bn:return{byteLength:2,components:1};case va:case ya:return{byteLength:2,components:4};case Mn:case xa:case Sn:return{byteLength:4,components:1};case pl:case ml:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function jh(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Fd(n){let e=new WeakMap;function t(l,c){let o=l.array,h=l.usage,p=o.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,o,h),l.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:p}}function i(l,c,o){let h=c.array,p=c.updateRanges;if(n.bindBuffer(o,l),p.length===0)n.bufferSubData(o,0,h);else{p.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<p.length;f++){let _=p[u],y=p[f];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++u,p[u]=y)}p.length=u+1;for(let f=0,_=p.length;f<_;f++){let y=p[f];n.bufferSubData(o,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=e.get(l);c&&(n.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=e.get(l);(!h||h.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=e.get(l);if(o===void 0)e.set(l,t(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var Od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
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
#endif`,kd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gd=`#ifdef USE_AOMAP
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
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
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
#endif`,qd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Jd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
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
#endif`,Kd=`#ifdef USE_BUMPMAP
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
#endif`,jd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,of=`#define PI 3.141592653589793
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
} // validated`,lf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,cf=`vec3 transformedNormal = objectNormal;
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
#endif`,hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,df=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ff=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pf="gl_FragColor = linearToOutputTexel( gl_FragColor );",mf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,gf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,xf=`#ifdef USE_ENVMAP
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
#endif`,vf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tf=`#ifdef USE_GRADIENTMAP
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
}`,Ef=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Af=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pf=`#ifdef USE_ENVMAP
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
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Df=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Uf=`PhysicalMaterial material;
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
#endif`,Ff=`uniform sampler2D dfgLUT;
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
}`,Of=`
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
#endif`,Bf=`#if defined( RE_IndirectDiffuse )
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
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Yf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,Jf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ep=`#ifdef USE_MORPHTARGETS
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
#endif`,tp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,op=`#ifdef USE_NORMALMAP
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
#endif`,lp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,up=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,pp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,mp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,gp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bp=`float getShadowMask() {
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
}`,wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tp=`#ifdef USE_SKINNING
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
#endif`,Ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ip=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lp=`#ifdef USE_TRANSMISSION
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
#endif`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,Dp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Bp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,kp=`uniform sampler2D t2D;
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
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`#include <common>
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
}`,Xp=`#if DEPTH_PACKING == 3200
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
}`,qp=`#define DISTANCE
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
}`,Yp=`#define DISTANCE
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
}`,$p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zp=`uniform float scale;
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
}`,Kp=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Qp=`uniform vec3 diffuse;
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
}`,em=`#define LAMBERT
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
}`,tm=`#define LAMBERT
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
}`,nm=`#define MATCAP
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
}`,im=`#define MATCAP
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
}`,sm=`#define NORMAL
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
}`,rm=`#define NORMAL
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
}`,am=`#define PHONG
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
}`,om=`#define PHONG
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
}`,lm=`#define STANDARD
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
}`,cm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,um=`#define TOON
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
}`,dm=`uniform float size;
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
}`,fm=`uniform vec3 diffuse;
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
}`,pm=`#include <common>
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
}`,mm=`uniform vec3 color;
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
}`,gm=`uniform float rotation;
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
}`,_m=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:Od,alphahash_pars_fragment:Bd,alphamap_fragment:kd,alphamap_pars_fragment:zd,alphatest_fragment:Vd,alphatest_pars_fragment:Hd,aomap_fragment:Gd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:qd,begin_vertex:Yd,beginnormal_vertex:$d,bsdfs:Jd,iridescence_fragment:Zd,bumpmap_pars_fragment:Kd,clipping_planes_fragment:jd,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ef,clipping_planes_vertex:tf,color_fragment:nf,color_pars_fragment:sf,color_pars_vertex:rf,color_vertex:af,common:of,cube_uv_reflection_fragment:lf,defaultnormal_vertex:cf,displacementmap_pars_vertex:hf,displacementmap_vertex:uf,emissivemap_fragment:df,emissivemap_pars_fragment:ff,colorspace_fragment:pf,colorspace_pars_fragment:mf,envmap_fragment:gf,envmap_common_pars_fragment:_f,envmap_pars_fragment:xf,envmap_pars_vertex:vf,envmap_physical_pars_fragment:Pf,envmap_vertex:yf,fog_vertex:Mf,fog_pars_vertex:Sf,fog_fragment:bf,fog_pars_fragment:wf,gradientmap_pars_fragment:Tf,lightmap_pars_fragment:Ef,lights_lambert_fragment:Af,lights_lambert_pars_fragment:Cf,lights_pars_begin:Rf,lights_toon_fragment:If,lights_toon_pars_fragment:Lf,lights_phong_fragment:Nf,lights_phong_pars_fragment:Df,lights_physical_fragment:Uf,lights_physical_pars_fragment:Ff,lights_fragment_begin:Of,lights_fragment_maps:Bf,lights_fragment_end:kf,lightprobes_pars_fragment:zf,logdepthbuf_fragment:Vf,logdepthbuf_pars_fragment:Hf,logdepthbuf_pars_vertex:Gf,logdepthbuf_vertex:Wf,map_fragment:Xf,map_pars_fragment:qf,map_particle_fragment:Yf,map_particle_pars_fragment:$f,metalnessmap_fragment:Jf,metalnessmap_pars_fragment:Zf,morphinstance_vertex:Kf,morphcolor_vertex:jf,morphnormal_vertex:Qf,morphtarget_pars_vertex:ep,morphtarget_vertex:tp,normal_fragment_begin:np,normal_fragment_maps:ip,normal_pars_fragment:sp,normal_pars_vertex:rp,normal_vertex:ap,normalmap_pars_fragment:op,clearcoat_normal_fragment_begin:lp,clearcoat_normal_fragment_maps:cp,clearcoat_pars_fragment:hp,iridescence_pars_fragment:up,opaque_fragment:dp,packing:fp,premultiplied_alpha_fragment:pp,project_vertex:mp,dithering_fragment:gp,dithering_pars_fragment:_p,roughnessmap_fragment:xp,roughnessmap_pars_fragment:vp,shadowmap_pars_fragment:yp,shadowmap_pars_vertex:Mp,shadowmap_vertex:Sp,shadowmask_pars_fragment:bp,skinbase_vertex:wp,skinning_pars_vertex:Tp,skinning_vertex:Ep,skinnormal_vertex:Ap,specularmap_fragment:Cp,specularmap_pars_fragment:Rp,tonemapping_fragment:Pp,tonemapping_pars_fragment:Ip,transmission_fragment:Lp,transmission_pars_fragment:Np,uv_pars_fragment:Dp,uv_pars_vertex:Up,uv_vertex:Fp,worldpos_vertex:Op,background_vert:Bp,background_frag:kp,backgroundCube_vert:zp,backgroundCube_frag:Vp,cube_vert:Hp,cube_frag:Gp,depth_vert:Wp,depth_frag:Xp,distance_vert:qp,distance_frag:Yp,equirect_vert:$p,equirect_frag:Jp,linedashed_vert:Zp,linedashed_frag:Kp,meshbasic_vert:jp,meshbasic_frag:Qp,meshlambert_vert:em,meshlambert_frag:tm,meshmatcap_vert:nm,meshmatcap_frag:im,meshnormal_vert:sm,meshnormal_frag:rm,meshphong_vert:am,meshphong_frag:om,meshphysical_vert:lm,meshphysical_frag:cm,meshtoon_vert:hm,meshtoon_frag:um,points_vert:dm,points_frag:fm,shadow_vert:pm,shadow_frag:mm,sprite_vert:gm,sprite_frag:_m},Me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new H},probesMax:{value:new H},probesResolution:{value:new H}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Dn={basic:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:zt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:zt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:zt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new $e(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:zt([Me.points,Me.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:zt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:zt([Me.common,Me.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:zt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:zt([Me.sprite,Me.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:zt([Me.common,Me.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:zt([Me.lights,Me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Dn.physical={uniforms:zt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var io={r:0,b:0,g:0},xm=new gt,Qh=new Ye;Qh.set(-1,0,0,0,1,0,0,0,1);function vm(n,e,t,i,s,r){let a=new $e(0),l=s===!0?0:1,c,o,h=null,p=0,u=null;function f(A){let L=A.isScene===!0?A.background:null;if(L&&L.isTexture){let M=A.backgroundBlurriness>0;L=e.get(L,M)}return L}function _(A){let L=!1,M=f(A);M===null?m(a,l):M&&M.isColor&&(m(M,1),L=!0);let T=n.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function y(A,L){let M=f(L);M&&(M.isCubeTexture||M.mapping===Ks)?(o===void 0&&(o=new st(new qt(1,1,1),new Yt({name:"BackgroundCubeMaterial",uniforms:Li(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:$t,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(T,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=M,o.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(xm.makeRotationFromEuler(L.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(Qh),o.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,(h!==M||p!==M.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),o.layers.enableAll(),A.unshift(o,o.geometry,o.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new st(new ci(2,2),new Yt({name:"BackgroundMaterial",uniforms:Li(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,c.material.toneMapped=tt.getTransfer(M.colorSpace)!==ct,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,u=n.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function m(A,L){A.getRGB(io,Ml(n)),t.buffers.color.setClear(io.r,io.g,io.b,L,r)}function d(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(A,L=1){a.set(A),l=L,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,m(a,l)},render:_,addToRenderList:y,dispose:d}}function ym(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function l(N,F,k,I,W){let J=!1,V=p(N,I,k,F);r!==V&&(r=V,o(r.object)),J=f(N,I,k,W),J&&_(N,I,k,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(N,F,k,I),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return n.createVertexArray()}function o(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function p(N,F,k,I){let W=I.wireframe===!0,J=i[F.id];J===void 0&&(J={},i[F.id]=J);let V=N.isInstancedMesh===!0?N.id:0,ne=J[V];ne===void 0&&(ne={},J[V]=ne);let B=ne[k.id];B===void 0&&(B={},ne[k.id]=B);let G=B[W];return G===void 0&&(G=u(c()),B[W]=G),G}function u(N){let F=[],k=[],I=[];for(let W=0;W<t;W++)F[W]=0,k[W]=0,I[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,F,k,I){let W=r.attributes,J=F.attributes,V=0,ne=k.getAttributes();for(let B in ne)if(ne[B].location>=0){let Z=W[B],he=J[B];if(he===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(he=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(he=N.instanceColor)),Z===void 0||Z.attribute!==he||he&&Z.data!==he.data)return!0;V++}return r.attributesNum!==V||r.index!==I}function _(N,F,k,I){let W={},J=F.attributes,V=0,ne=k.getAttributes();for(let B in ne)if(ne[B].location>=0){let Z=J[B];Z===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let he={};he.attribute=Z,Z&&Z.data&&(he.data=Z.data),W[B]=he,V++}r.attributes=W,r.attributesNum=V,r.index=I}function y(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){d(N,0)}function d(N,F){let k=r.newAttributes,I=r.enabledAttributes,W=r.attributeDivisors;k[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),W[N]!==F&&(n.vertexAttribDivisor(N,F),W[N]=F)}function A(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==N[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function L(N,F,k,I,W,J,V){V===!0?n.vertexAttribIPointer(N,F,k,W,J):n.vertexAttribPointer(N,F,k,I,W,J)}function M(N,F,k,I){y();let W=I.attributes,J=k.getAttributes(),V=F.defaultAttributeValues;for(let ne in J){let B=J[ne];if(B.location>=0){let G=W[ne];if(G===void 0&&(ne==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),ne==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){let Z=G.normalized,he=G.itemSize,pe=e.get(G);if(pe===void 0)continue;let He=pe.buffer,Ue=pe.type,je=pe.bytesPerElement,ie=Ue===n.INT||Ue===n.UNSIGNED_INT||G.gpuType===xa;if(G.isInterleavedBufferAttribute){let se=G.data,ye=se.stride,ze=G.offset;if(se.isInstancedInterleavedBuffer){for(let Se=0;Se<B.locationSize;Se++)d(B.location+Se,se.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Se=0;Se<B.locationSize;Se++)m(B.location+Se);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Se=0;Se<B.locationSize;Se++)L(B.location+Se,he/B.locationSize,Ue,Z,ye*je,(ze+he/B.locationSize*Se)*je,ie)}else{if(G.isInstancedBufferAttribute){for(let se=0;se<B.locationSize;se++)d(B.location+se,G.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let se=0;se<B.locationSize;se++)m(B.location+se);n.bindBuffer(n.ARRAY_BUFFER,He);for(let se=0;se<B.locationSize;se++)L(B.location+se,he/B.locationSize,Ue,Z,he*je,he/B.locationSize*se*je,ie)}}else if(V!==void 0){let Z=V[ne];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(B.location,Z);break;case 3:n.vertexAttrib3fv(B.location,Z);break;case 4:n.vertexAttrib4fv(B.location,Z);break;default:n.vertexAttrib1fv(B.location,Z)}}}}A()}function T(){w();for(let N in i){let F=i[N];for(let k in F){let I=F[k];for(let W in I){let J=I[W];for(let V in J)h(J[V].object),delete J[V];delete I[W]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let k in F){let I=F[k];for(let W in I){let J=I[W];for(let V in J)h(J[V].object),delete J[V];delete I[W]}}delete i[N.id]}function P(N){for(let F in i){let k=i[F];for(let I in k){let W=k[I];if(W[N.id]===void 0)continue;let J=W[N.id];for(let V in J)h(J[V].object),delete J[V];delete W[N.id]}}}function x(N){for(let F in i){let k=i[F],I=N.isInstancedMesh===!0?N.id:0,W=k[I];if(W!==void 0){for(let J in W){let V=W[J];for(let ne in V)h(V[ne].object),delete V[ne];delete W[J]}delete k[I],Object.keys(k).length===0&&delete i[F]}}}function w(){C(),a=!0,r!==s&&(r=s,o(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:A}}function Mm(n,e,t){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),t.update(o,i,1)}function a(c,o,h){h!==0&&(n.drawArraysInstanced(i,c,o,h),t.update(o,i,h))}function l(c,o,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,h);let u=0;for(let f=0;f<h;f++)u+=o[f];t.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Sm(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==cn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let x=P===bn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==en&&P!==Sn&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp",h=c(o);h!==o&&(Ge("WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let p=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),d=n.getParameter(n.MAX_VERTEX_ATTRIBS),A=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),L=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),T=n.getParameter(n.MAX_SAMPLES),E=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:p,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:A,maxVaryings:L,maxFragmentUniforms:M,maxSamples:T,samples:E}}function bm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new gn,l=new Ye,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){let f=p.length!==0||u||i!==0||s;return s=u,i=p.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,f){let _=p.clippingPlanes,y=p.clipIntersection,m=p.clipShadows,d=n.get(p);if(!s||_===null||_.length===0||r&&!m)r?h(null):o();else{let A=r?0:i,L=A*4,M=d.clippingState||null;c.value=M,M=h(_,u,L,f);for(let T=0;T!==L;++T)M[T]=t[T];d.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=A}};function o(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,u,f,_){let y=p!==null?p.length:0,m=null;if(y!==0){if(m=c.value,_!==!0||m===null){let d=f+y*4,A=u.matrixWorldInverse;l.getNormalMatrix(A),(m===null||m.length<d)&&(m=new Float32Array(d));for(let L=0,M=f;L!==y;++L,M+=4)a.copy(p[L]).applyMatrix4(A,l),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}var xs=4,wm=6,Tm=20,Em=256,ar=new us,Ih=new $e,Pl=null,Il=0,Ll=0,Nl=!1,Am=new H,Ni=new H,ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:l=Am}=r;Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,s,c,l),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Nh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Pl,Il,Ll),this._renderer.xr.enabled=Nl,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===pi||e.mapping===Ii?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pl=this._renderer.getRenderTarget(),Il=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nt,minFilter:Nt,generateMipmaps:!1,type:bn,format:cn,colorSpace:Ns,depthBuffer:!1},s=Lh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Cm(r)),this._blurMaterial=Pm(r,e,t),this._ggxMaterial=Rm(r,e,t)}return s}_compileMaterial(e){let t=new st(new Qt,e);this._renderer.compile(t,ar)}_sceneToCubeUV(e,t,i,s,r){let c=new Bt(90,1,t,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,u=p.autoClear,f=p.toneMapping;p.getClearColor(Ih),p.toneMapping=yn,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new st(new qt,new ai({name:"PMREM.Background",side:$t,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,m=y.material,d=!1,A=e.background;A?A.isColor&&(m.color.copy(A),e.background=null,d=!0):(m.color.copy(Ih),d=!0);for(let L=0;L<6;L++){let M=L%3;M===0?(c.up.set(0,o[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[L],r.y,r.z)):M===1?(c.up.set(0,0,o[L]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[L],r.z)):(c.up.set(0,o[L],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[L]));let T=this._cubeSize;_s(s,M*T,L>2?T:0,T,T),p.setRenderTarget(s),d&&p.render(y,c),p.render(e,c)}p.toneMapping=f,p.autoClear=u,e.background=A}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===pi||e.mapping===Ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Nh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=e;let c=this._cubeSize;_s(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,ar)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(o*o-h*h),u=o*1.25,f=p*u,{_lodMax:_}=this,y=this._sizeLods[i],m=3*y*(i>_-xs?i-_+xs:0),d=4*(this._cubeSize-y);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=_-t,_s(r,m,d,3*y,2*y),s.setRenderTarget(r),s.render(l,ar),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=_-i,_s(e,m,d,3*y,2*y),s.setRenderTarget(e),s.render(l,ar)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=e.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],p=3*h*(s>this._lodMax-xs?s-this._lodMax+xs:0),u=4*(this._cubeSize-h);_s(t,p,u,3*h,2*h),a.setRenderTarget(t),a.render(c,ar)}};function Cm(n){let e=[],t=[],i=n,s=n-xs+1+wm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let l=1/(a-2),c=-l,o=1+l,h=[c,c,o,c,o,o,c,c,o,o,c,o],p=6,u=6,f=3,_=new Float32Array(f*u*p),y=new Float32Array(f*u*p);for(let d=0;d<p;d++){let A=d%3*2/3-1,L=d>2?0:-1,M=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];_.set(M,f*u*d);for(let T=0;T<u;T++){let E=h[T*2]*2-1,P=h[T*2+1]*2-1;d===0?Ni.set(1,P,E):d===1?Ni.set(-E,1,-P):d===2?Ni.set(-E,P,1):d===3?Ni.set(-1,P,-E):d===4?Ni.set(-E,-1,P):Ni.set(E,P,-1),Ni.toArray(y,(d*u+T)*f)}}let m=new Qt;m.setAttribute("position",new Kt(_,f)),m.setAttribute("outputDirection",new Kt(y,f)),t.push(new st(m,null)),i>xs&&i--}return{lodMeshes:t,sizeLods:e}}function Lh(n,e,t){let i=new jt(n,e,t);return i.texture.mapping=Ks,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function _s(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Rm(n,e,t){return new Yt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Em,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Pm(n,e,t){return new Yt({name:"SphericalGaussianBlur",defines:{SAMPLES:Tm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Nh(){return new Yt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lo(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function Dh(){return new Yt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function lo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var ao=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Yt({name:"CubemapFromEquirect",uniforms:Li(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:$t,blending:Ln});r.uniforms.tEquirect.value=t;let a=new st(s,r),l=t.minFilter;return t.minFilter===mi&&(t.minFilter=Nt),new da(1,10,this).update(e,a),t.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function Im(n){let e=new WeakMap,t=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ma||f===ga)if(e.has(u)){let _=e.get(u).texture;return l(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let y=new ao(_.height);return y.fromEquirectangularTexture(n,u),e.set(u,y),u.addEventListener("dispose",o),l(y.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,_=f===ma||f===ga,y=f===pi||f===Ii;if(_||y){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return i===null&&(i=new ro(n)),m=_?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let A=u.image;return _&&A&&A.height>0||y&&A&&c(A)?(i===null&&(i=new ro(n)),m=_?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,f){return f===ma?u.mapping=pi:f===ga&&(u.mapping=Ii),u}function c(u){let f=0,_=6;for(let y=0;y<_;y++)u[y]!==void 0&&f++;return f===_}function o(u){let f=u.target;f.removeEventListener("dispose",o);let _=e.get(f);_!==void 0&&(e.delete(f),_.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let _=t.get(f);_!==void 0&&(t.delete(f),_.dispose())}function p(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:p}}function Lm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Ai("WebGLRenderer: "+i+" extension not supported."),s}}}function Nm(n,e,t,i){let s={},r=new WeakMap;function a(p){let u=p.target;u.index!==null&&e.remove(u.index);for(let _ in u.attributes)e.remove(u.attributes[_]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function l(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(p){let u=p.attributes;for(let f in u)e.update(u[f],n.ARRAY_BUFFER)}function o(p){let u=[],f=p.index,_=p.attributes.position,y=0;if(_===void 0)return;if(f!==null){let A=f.array;y=f.version;for(let L=0,M=A.length;L<M;L+=3){let T=A[L+0],E=A[L+1],P=A[L+2];u.push(T,E,E,P,P,T)}}else{let A=_.array;y=_.version;for(let L=0,M=A.length/3-1;L<M;L+=3){let T=L+0,E=L+1,P=L+2;u.push(T,E,E,P,P,T)}}let m=new(_.count>=65535?zs:ks)(u,1);m.version=y;let d=r.get(p);d&&e.remove(d),r.set(p,m)}function h(p){let u=r.get(p);if(u){let f=p.index;f!==null&&u.version<f.version&&o(p)}else o(p);return r.get(p)}return{get:l,update:c,getWireframeAttribute:h}}function Dm(n,e,t){let i;function s(p){i=p}let r,a;function l(p){r=p.type,a=p.bytesPerElement}function c(p,u){n.drawElements(i,u,r,p*a),t.update(u,i,1)}function o(p,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,p*a,f),t.update(u,i,f))}function h(p,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,p,0,f);let y=0;for(let m=0;m<f;m++)y+=u[m];t.update(y,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h}function Um(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=l*(r/3);break;case n.LINES:t.lines+=l*(r/2);break;case n.LINE_STRIP:t.lines+=l*(r-1);break;case n.LINE_LOOP:t.lines+=l*r;break;case n.POINTS:t.points+=l*r;break;default:We("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Fm(n,e,t){let i=new WeakMap,s=new vt;function r(a,l,c){let o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,p=h!==void 0?h.length:0,u=i.get(l);if(u===void 0||u.count!==p){let w=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let f=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,y=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],d=l.morphAttributes.normal||[],A=l.morphAttributes.color||[],L=0;f===!0&&(L=1),_===!0&&(L=2),y===!0&&(L=3);let M=l.attributes.position.count*L,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let E=new Float32Array(M*T*4*p),P=new Fs(E,M,T,p);P.type=Sn,P.needsUpdate=!0;let x=L*4;for(let C=0;C<p;C++){let N=m[C],F=d[C],k=A[C],I=M*T*4*C;for(let W=0;W<N.count;W++){let J=W*x;f===!0&&(s.fromBufferAttribute(N,W),E[I+J+0]=s.x,E[I+J+1]=s.y,E[I+J+2]=s.z,E[I+J+3]=0),_===!0&&(s.fromBufferAttribute(F,W),E[I+J+4]=s.x,E[I+J+5]=s.y,E[I+J+6]=s.z,E[I+J+7]=0),y===!0&&(s.fromBufferAttribute(k,W),E[I+J+8]=s.x,E[I+J+9]=s.y,E[I+J+10]=s.z,E[I+J+11]=k.itemSize===4?s.w:1)}}u={count:p,texture:P,size:new et(M,T)},i.set(l,u),l.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<o.length;y++)f+=o[y];let _=l.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Om(n,e,t,i,s){let r=new WeakMap;function a(o){let h=s.render.frame,p=o.geometry,u=e.get(o,p);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==h&&(t.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&t.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){let f=o.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function l(){r=new WeakMap}function c(o){let h=o.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:l}}var Bm={[rl]:"LINEAR_TONE_MAPPING",[al]:"REINHARD_TONE_MAPPING",[ol]:"CINEON_TONE_MAPPING",[Zs]:"ACES_FILMIC_TONE_MAPPING",[cl]:"AGX_TONE_MAPPING",[hl]:"NEUTRAL_TONE_MAPPING",[ll]:"CUSTOM_TONE_MAPPING"};function km(n,e,t,i,s,r){let a=new jt(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new Qt;o.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new xt([0,2,0,0,2,0],2));let h=new jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new st(o,h),u=new us(-1,1,1,-1,0,1),f=null,_=null,y=!1,m,d=null,A=[],L=!1;this.setSize=function(M,T){a.setSize(M,T),l!==null&&l.setSize(M,T),c!==null&&c.setSize(M,T);for(let E=0;E<A.length;E++){let P=A[E];P.setSize&&P.setSize(M,T)}},this.setEffects=function(M){A=M,L=A.length>0&&A[0].isRenderPass===!0;let T=a.width,E=a.height;A.length>0&&l===null&&(l=new jt(T,E,{type:bn,depthBuffer:!1,stencilBuffer:!1}),c=new jt(T,E,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<A.length;P++){let x=A[P];x.setSize&&x.setSize(T,E)}},this.begin=function(M,T){if(y||M.toneMapping===yn&&A.length===0)return!1;if(d=T,T!==null){let E=T.width,P=T.height;(a.width!==E||a.height!==P)&&this.setSize(E,P)}return L===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=yn,!0},this.hasRenderPass=function(){return L},this.end=function(M,T){M.toneMapping=m,y=!0;let E=a,P=l;for(let x=0;x<A.length;x++){let w=A[x];w.enabled!==!1&&(w.render(M,P,E,T),w.needsSwap!==!1&&(E=P,P=P===l?c:l))}if(f!==M.outputColorSpace||_!==M.toneMapping){f=M.outputColorSpace,_=M.toneMapping,h.defines={},tt.getTransfer(f)===ct&&(h.defines.SRGB_TRANSFER="");let x=Bm[_];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=E.texture,M.setRenderTarget(d),M.render(p,u),d=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),h.dispose()}}var eu=new Xt,Fl=new oi(1,1),tu=new Fs,nu=new $r,iu=new Vs,Uh=[],Fh=[],Oh=new Float32Array(16),Bh=new Float32Array(9),kh=new Float32Array(4);function ys(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),e!==0){i.toArray(r,0);for(let a=1,l=0;a!==e;++a)l+=t,n[a].toArray(r,l)}return r}function Et(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function At(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function co(n,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Vm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2fv(this.addr,e),At(t,e)}}function Hm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;n.uniform3fv(this.addr,e),At(t,e)}}function Gm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4fv(this.addr,e),At(t,e)}}function Wm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;kh.set(i),n.uniformMatrix2fv(this.addr,!1,kh),At(t,i)}}function Xm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Bh.set(i),n.uniformMatrix3fv(this.addr,!1,Bh),At(t,i)}}function qm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Et(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(Et(t,i))return;Oh.set(i),n.uniformMatrix4fv(this.addr,!1,Oh),At(t,i)}}function Ym(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2iv(this.addr,e),At(t,e)}}function Jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3iv(this.addr,e),At(t,e)}}function Zm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4iv(this.addr,e),At(t,e)}}function Km(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;n.uniform2uiv(this.addr,e),At(t,e)}}function Qm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;n.uniform3uiv(this.addr,e),At(t,e)}}function e0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;n.uniform4uiv(this.addr,e),At(t,e)}}function t0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Fl.compareFunction=t.isReversedDepthBuffer()?no:to,r=Fl):r=eu,t.setTexture2D(e||r,s)}function n0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||nu,s)}function i0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||iu,s)}function s0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||tu,s)}function r0(n){switch(n){case 5126:return zm;case 35664:return Vm;case 35665:return Hm;case 35666:return Gm;case 35674:return Wm;case 35675:return Xm;case 35676:return qm;case 5124:case 35670:return Ym;case 35667:case 35671:return $m;case 35668:case 35672:return Jm;case 35669:case 35673:return Zm;case 5125:return Km;case 36294:return jm;case 36295:return Qm;case 36296:return e0;case 35678:case 36198:case 36298:case 36306:case 35682:return t0;case 35679:case 36299:case 36307:return n0;case 35680:case 36300:case 36308:case 36293:return i0;case 36289:case 36303:case 36311:case 36292:return s0}}function a0(n,e){n.uniform1fv(this.addr,e)}function o0(n,e){let t=ys(e,this.size,2);n.uniform2fv(this.addr,t)}function l0(n,e){let t=ys(e,this.size,3);n.uniform3fv(this.addr,t)}function c0(n,e){let t=ys(e,this.size,4);n.uniform4fv(this.addr,t)}function h0(n,e){let t=ys(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function u0(n,e){let t=ys(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function d0(n,e){let t=ys(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function f0(n,e){n.uniform1iv(this.addr,e)}function p0(n,e){n.uniform2iv(this.addr,e)}function m0(n,e){n.uniform3iv(this.addr,e)}function g0(n,e){n.uniform4iv(this.addr,e)}function _0(n,e){n.uniform1uiv(this.addr,e)}function x0(n,e){n.uniform2uiv(this.addr,e)}function v0(n,e){n.uniform3uiv(this.addr,e)}function y0(n,e){n.uniform4uiv(this.addr,e)}function M0(n,e,t){let i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Fl:a=eu;for(let l=0;l!==s;++l)t.setTexture2D(e[l]||a,r[l])}function S0(n,e,t){let i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nu,r[a])}function b0(n,e,t){let i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||iu,r[a])}function w0(n,e,t){let i=this.cache,s=e.length,r=co(t,s);Et(i,r)||(n.uniform1iv(this.addr,r),At(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tu,r[a])}function T0(n){switch(n){case 5126:return a0;case 35664:return o0;case 35665:return l0;case 35666:return c0;case 35674:return h0;case 35675:return u0;case 35676:return d0;case 5124:case 35670:return f0;case 35667:case 35671:return p0;case 35668:case 35672:return m0;case 35669:case 35673:return g0;case 5125:return _0;case 36294:return x0;case 36295:return v0;case 36296:return y0;case 35678:case 36198:case 36298:case 36306:case 35682:return M0;case 35679:case 36299:case 36307:return S0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return w0}}var Ol=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=r0(t.type)}},Bl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T0(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(e,t[l.id],i)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function zh(n,e){n.seq.push(e),n.map[e.id]=e}function E0(n,e,t){let i=n.name,s=i.length;for(Dl.lastIndex=0;;){let r=Dl.exec(i),a=Dl.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){zh(t,o===void 0?new Ol(l,n,e):new Bl(l,n,e));break}else{let p=t.map[l];p===void 0&&(p=new kl(l),zh(t,p)),t=p}}}var vs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=e.getActiveUniform(t,a),c=e.getUniformLocation(t,l.name);E0(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let l=t[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Vh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var A0=37297,C0=0;function R0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===e?">":" "} ${l}: ${t[a]}`)}return i.join(`
`)}var Hh=new Ye;function P0(n){tt._getMatrix(Hh,tt.workingColorSpace,n);let e=`mat3( ${Hh.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(n)){case Ds:return[e,"LinearTransferOETF"];case ct:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Gh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+R0(n.getShaderSource(e),l)}else return r}function I0(n,e){let t=P0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var L0={[rl]:"Linear",[al]:"Reinhard",[ol]:"Cineon",[Zs]:"ACESFilmic",[cl]:"AgX",[hl]:"Neutral",[ll]:"Custom"};function N0(n,e){let t=L0[e];return t===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var so=new H;function D0(){tt.getLuminanceCoefficients(so);let n=so.x.toFixed(4),e=so.y.toFixed(4),t=so.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lr).join(`
`)}function F0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function O0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:l}}return t}function lr(n){return n!==""}function Wh(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Xh(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function zl(n){return n.replace(B0,z0)}var k0=new Map;function z0(n,e){let t=Ke[e];if(t===void 0){let i=k0.get(e);if(i!==void 0)t=Ke[i],Ge('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return zl(t)}var V0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qh(n){return n.replace(V0,H0)}function H0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Yh(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var G0={[Ri]:"SHADOWMAP_TYPE_PCF",[fs]:"SHADOWMAP_TYPE_VSM"};function W0(n){return G0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var X0={[pi]:"ENVMAP_TYPE_CUBE",[Ii]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE_UV"};function q0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":X0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var Y0={[Ii]:"ENVMAP_MODE_REFRACTION"};function $0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":Y0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var J0={[sl]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function Z0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":J0[n.combine]||"ENVMAP_BLENDING_NONE"}function K0(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function j0(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,l=t.fragmentShader,c=W0(t),o=q0(t),h=$0(t),p=Z0(t),u=K0(t),f=U0(t),_=F0(r),y=s.createProgram(),m,d,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(lr).join(`
`),d.length>0&&(d+=`
`)):(m=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lr).join(`
`),d=[Yh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yn?"#define TONE_MAPPING":"",t.toneMapping!==yn?Ke.tonemapping_pars_fragment:"",t.toneMapping!==yn?N0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,I0("linearToOutputTexel",t.outputColorSpace),D0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lr).join(`
`)),a=zl(a),a=Wh(a,t),a=Xh(a,t),l=zl(l),l=Wh(l,t),l=Xh(l,t),a=qh(a),l=qh(l),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===vl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let L=A+m+a,M=A+d+l,T=Vh(s,s.VERTEX_SHADER,L),E=Vh(s,s.FRAGMENT_SHADER,M);s.attachShader(y,T),s.attachShader(y,E),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function P(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(y)||"",k=s.getShaderInfoLog(T)||"",I=s.getShaderInfoLog(E)||"",W=F.trim(),J=k.trim(),V=I.trim(),ne=!0,B=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(ne=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,T,E);else{let G=Gh(s,T,"vertex"),Z=Gh(s,E,"fragment");We("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+G+`
`+Z)}else W!==""?Ge("WebGLProgram: Program Info Log:",W):(J===""||V==="")&&(B=!1);B&&(N.diagnostics={runnable:ne,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(T),s.deleteShader(E),x=new vs(s,y),w=O0(s,y)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(y,A0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=C0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=T,this.fragmentShader=E,this}var Q0=0,Vl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Hl(e),t.set(e,i)),i}},Hl=class{constructor(e){this.id=Q0++,this.code=e,this.usedTimes=0}};function eg(n){return n===_i||n===ir||n===sr}function tg(n,e,t,i,s,r){let a=new Os,l=new Vl,c=new Set,o=[],h=new Map,p=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return c.add(x),x===0?"uv":`uv${x}`}function y(x,w,C,N,F,k){let I=N.fog,W=F.geometry,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ne=e.get(x.envMap||J,V),B=ne&&ne.mapping===Ks?ne.image.height:null,G=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&Ge("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,he=Z!==void 0?Z.length:0,pe=0;W.morphAttributes.position!==void 0&&(pe=1),W.morphAttributes.normal!==void 0&&(pe=2),W.morphAttributes.color!==void 0&&(pe=3);let He,Ue,je,ie;if(G){let ht=Dn[G];He=ht.vertexShader,Ue=ht.fragmentShader}else{He=x.vertexShader,Ue=x.fragmentShader;let ht=l.getVertexShaderStage(x),ot=l.getFragmentShaderStage(x);l.update(x,ht,ot),je=ht.id,ie=ot.id}let se=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),ze=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ve=!!x.map,at=!!x.matcap,z=!!ne,re=!!x.aoMap,we=!!x.lightMap,ve=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,Ce=!!x.displacementMap,rt=!!x.emissiveMap,Xe=!!x.metalnessMap,Je=!!x.roughnessMap,S=x.anisotropy>0,_e=x.clearcoat>0,ge=x.dispersion>0,b=x.retroreflectivity>0,g=x.iridescence>0,D=x.sheen>0,O=x.transmission>0,Y=S&&!!x.anisotropyMap,te=_e&&!!x.clearcoatMap,de=_e&&!!x.clearcoatNormalMap,j=_e&&!!x.clearcoatRoughnessMap,K=g&&!!x.iridescenceMap,ue=g&&!!x.iridescenceThicknessMap,me=D&&!!x.sheenColorMap,le=D&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Ae=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ke=O&&!!x.transmissionMap,R=O&&!!x.thicknessMap,ae=!!x.gradientMap,ee=!!x.alphaMap,fe=x.alphaTest>0,xe=!!x.alphaHash,oe=!!x.extensions,De=yn;x.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(De=n.toneMapping);let Ne={shaderID:G,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Ue,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:ie,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:ze,instancingColor:ze&&F.instanceColor!==null,instancingMorph:ze&&F.morphTexture!==null,outputColorSpace:se===null?n.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:at,envMap:z,envMapMode:z&&ne.mapping,envMapCubeUVHeight:B,aoMap:re,lightMap:we,bumpMap:ve,normalMap:Te,displacementMap:Ce,emissiveMap:rt,normalMapObjectSpace:Te&&x.normalMapType===ph,normalMapTangentSpace:Te&&x.normalMapType===eo,packedNormalMap:Te&&x.normalMapType===eo&&eg(x.normalMap.format),metalnessMap:Xe,roughnessMap:Je,anisotropy:S,anisotropyMap:Y,clearcoat:_e,clearcoatMap:te,clearcoatNormalMap:de,clearcoatRoughnessMap:j,dispersion:ge,retroreflection:b,iridescence:g,iridescenceMap:K,iridescenceThicknessMap:ue,sheen:D,sheenColorMap:me,sheenRoughnessMap:le,specularMap:ce,specularColorMap:Ae,specularIntensityMap:Pe,transmission:O,transmissionMap:ke,thicknessMap:R,gradientMap:ae,opaque:x.transparent===!1&&x.blending===ps&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:fe,alphaHash:xe,combine:x.combine,mapUv:Ve&&_(x.map.channel),aoMapUv:re&&_(x.aoMap.channel),lightMapUv:we&&_(x.lightMap.channel),bumpMapUv:ve&&_(x.bumpMap.channel),normalMapUv:Te&&_(x.normalMap.channel),displacementMapUv:Ce&&_(x.displacementMap.channel),emissiveMapUv:rt&&_(x.emissiveMap.channel),metalnessMapUv:Xe&&_(x.metalnessMap.channel),roughnessMapUv:Je&&_(x.roughnessMap.channel),anisotropyMapUv:Y&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:le&&_(x.sheenRoughnessMap.channel),specularMapUv:ce&&_(x.specularMap.channel),specularColorMapUv:Ae&&_(x.specularColorMap.channel),specularIntensityMapUv:Pe&&_(x.specularIntensityMap.channel),transmissionMapUv:ke&&_(x.transmissionMap.channel),thicknessMapUv:R&&_(x.thicknessMap.channel),alphaMapUv:ee&&_(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Te||S),vertexNormals:!!W.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Ve||ee),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||W.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:pe,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:De,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ct,decodeVideoTextureEmissive:rt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===vn,flipSided:x.side===$t,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:oe&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&x.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ne.vertexUv1s=c.has(1),Ne.vertexUv2s=c.has(2),Ne.vertexUv3s=c.has(3),c.clear(),Ne}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)w.push(C),w.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(d(w,x),A(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function d(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function A(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function L(x){let w=f[x.type],C;if(w){let N=Dn[w];C=Ch.clone(N.uniforms)}else C=x.uniforms;return C}function M(x,w){let C=h.get(w);return C!==void 0?++C.usedTimes:(C=new j0(n,w,x,s),o.push(C),h.set(w,C)),C}function T(x){if(--x.usedTimes===0){let w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),h.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function P(){l.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:L,acquireProgram:M,releaseProgram:T,releaseShaderCache:E,programs:o,dispose:P}}function ng(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function ig(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function $h(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jh(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function l(u,f,_,y,m,d){let A=n[e];return A===void 0?(A={id:u.id,object:u,geometry:f,material:_,materialVariant:a(u),groupOrder:y,renderOrder:u.renderOrder,z:m,group:d},n[e]=A):(A.id=u.id,A.object=u,A.geometry=f,A.material=_,A.materialVariant=a(u),A.groupOrder=y,A.renderOrder=u.renderOrder,A.z=m,A.group=d),e++,A}function c(u,f,_,y,m,d,A){A.reversedDepth===!0&&(m=-m);let L=l(u,f,_,y,m,d);_.transmission>0?i.push(L):_.transparent===!0?s.push(L):t.push(L)}function o(u,f,_,y,m,d){let A=l(u,f,_,y,m,d);_.transmission>0?i.unshift(A):_.transparent===!0?s.unshift(A):t.unshift(A)}function h(u,f){t.length>1&&t.sort(u||ig),i.length>1&&i.sort(f||$h),s.length>1&&s.sort(f||$h)}function p(){for(let u=e,f=n.length;u<f;u++){let _=n[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:p,sort:h}}function sg(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Jh,n.set(i,[a])):s>=r.length?(a=new Jh,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function rg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new H,color:new $e};break;case"SpotLight":t={position:new H,direction:new H,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function ag(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var og=0;function lg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function cg(n){let e=new rg,t=ag(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new H);let s=new H,r=new gt,a=new gt;function l(o){let h=0,p=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let f=0,_=0,y=0,m=0,d=0,A=0,L=0,M=0,T=0,E=0,P=0,x=0,w=0,C=0;o.sort(lg);for(let F=0,k=o.length;F<k;F++){let I=o[F],W=I.color,J=I.intensity,V=I.distance,ne=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===_i?ne=I.shadow.map.texture:ne=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=W.r*J,p+=W.g*J,u+=W.b*J;else if(I.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(I.sh.coefficients[B],J);C++}else if(I.isSunLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,Z=t.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[_]=Z,i.sunShadowMap[_]=ne;let he=G.getViewportCount();for(let pe=0;pe<he;pe++)i.sunShadowMatrix[y+pe]=G.getMatrix(pe),i.sunShadowCascade[y+pe]=G._cascadeData[pe];y+=he,_++}i.sun[f]=B,f++}else if(I.isDirectionalLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let G=I.shadow,Z=t.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=I.shadow.matrix,T++}i.directional[m]=B,m++}else if(I.isSpotLight){let B=e.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(W).multiplyScalar(J),B.distance=V,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,i.spot[A]=B;let G=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,G.updateMatrices(I),I.castShadow&&w++),i.spotLightMatrix[A]=G.matrix,I.castShadow){let Z=t.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[A]=Z,i.spotShadowMap[A]=ne,P++}A++}else if(I.isRectAreaLight){let B=e.get(I);B.color.copy(W).multiplyScalar(J),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),i.rectArea[L]=B,L++}else if(I.isPointLight){let B=e.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity),B.distance=I.distance,B.decay=I.decay,I.castShadow){let G=I.shadow,Z=t.get(I);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[d]=Z,i.pointShadowMap[d]=ne,i.pointShadowMatrix[d]=I.shadow.matrix,E++}i.point[d]=B,d++}else if(I.isHemisphereLight){let B=e.get(I);B.skyColor.copy(I.color).multiplyScalar(J),B.groundColor.copy(I.groundColor).multiplyScalar(J),i.hemi[M]=B,M++}}L>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=u;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==d||N.spotLength!==A||N.rectAreaLength!==L||N.hemiLength!==M||N.numSunShadows!==_||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==P||N.numSpotMaps!==x||N.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=A,i.rectArea.length=L,i.point.length=d,i.hemi.length=M,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=d,N.spotLength=A,N.rectAreaLength=L,N.hemiLength=M,N.numSunShadows=_,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=P,N.numSpotMaps=x,N.numLightProbes=C,i.version=og++)}function c(o,h){let p=0,u=0,f=0,_=0,y=0,m=0,d=h.matrixWorldInverse;for(let A=0,L=o.length;A<L;A++){let M=o[A];if(M.isSunLight){let T=i.sun[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),p++}else if(M.isDirectionalLight){let T=i.directional[u];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),u++}else if(M.isSpotLight){let T=i.spot[_];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(d),_++}else if(M.isRectAreaLight){let T=i.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),a.identity(),r.copy(M.matrixWorld),r.premultiply(d),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let T=i.point[f];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(d),f++}else if(M.isHemisphereLight){let T=i.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:i}}function Zh(n){let e=new cg(n),t=[],i=[],s=[];function r(u){p.camera=u,t.length=0,i.length=0,s.length=0}function a(u){t.push(u)}function l(u){i.push(u)}function c(u){s.push(u)}function o(){e.setup(t)}function h(u){e.setupView(t,u)}let p={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function hg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),l;return a===void 0?(l=new Zh(n),e.set(s,[l])):r>=a.length?(l=new Zh(n),a.push(l)):l=a[r],l}function i(){e=new WeakMap}return{get:t,dispose:i}}var ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`,fg=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],pg=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],Kh=new gt,or=new H,Ul=new H;function mg(n,e,t){let i=new cs,s=new et,r=new et,a=new vt,l=new Qr,c=new ea,o={},h=t.maxTextureSize,p={[fi]:$t,[$t]:fi,[vn]:vn},u=new Yt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:ug,fragmentShader:dg}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Qt;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new st(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ri;let d=this.type;this.render=function(E,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Xc&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ri);let w=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Ln),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=d!==this.type;k&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(W=>W.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,W=E.length;I<W;I++){let J=E[I],V=J.shadow;if(V===void 0){Ge("WebGLShadowMap:",J,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ne=V.getFrameExtents();s.multiply(ne),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,V.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(V.camera._reversedDepth=B,V.map===null||k===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===fs){if(J.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new jt(s.x,s.y,{format:_i,type:bn,minFilter:Nt,magFilter:Nt,generateMipmaps:!1}),V.map.texture.name=J.name+".shadowMap",V.map.depthTexture=new oi(s.x,s.y,Sn),V.map.depthTexture.name=J.name+".shadowMapDepth",V.map.depthTexture.format=Pn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt}else J.isPointLight?(V.map=new ao(s.x),V.map.depthTexture=new Kr(s.x,Mn)):(V.map=new jt(s.x,s.y),V.map.depthTexture=new oi(s.x,s.y,Mn)),V.map.depthTexture.name=J.name+".shadowMap",V.map.depthTexture.format=Pn,this.type===Ri?(V.map.depthTexture.compareFunction=B?no:to,V.map.depthTexture.minFilter=Nt,V.map.depthTexture.magFilter=Nt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let G=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();J.isPointLight!==!0&&V.updateMatrices(J,x);for(let Z=0;Z<G;Z++){let he=V.getCamera(Z);if(J.isPointLight){let pe=V.camera,He=V.matrix,Ue=J.distance||pe.far;Ue!==pe.far&&(pe.far=Ue,pe.updateProjectionMatrix()),or.setFromMatrixPosition(J.matrixWorld),pe.position.copy(or),Ul.copy(pe.position),Ul.add(fg[Z]),pe.up.copy(pg[Z]),pe.lookAt(Ul),pe.updateMatrixWorld(),He.makeTranslation(-or.x,-or.y,-or.z),Kh.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Kh,pe.coordinateSystem,pe.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)n.setRenderTarget(V.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(V.map),n.clear());let pe=V.getViewport(Z);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}i=V.getFrustum(Z),M(P,x,he,J,this.type)}V.isPointLightShadow!==!0&&this.type===fs&&A(V,x),V.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(w,C,N)};function A(E,P){let x=e.update(y);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new jt(s.x,s.y,{format:_i,type:bn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,y,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,x,f,y,null)}function L(E,P,x,w){let C=null,N=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=x.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=C.uuid,k=P.uuid,I=o[F];I===void 0&&(I={},o[F]=I);let W=I[k];W===void 0&&(W=C.clone(),I[k]=W,P.addEventListener("dispose",T)),C=W}if(C.visible=P.visible,C.wireframe=P.wireframe,w===fs?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:p[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=x}return C}function M(E,P,x,w,C){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&C===fs)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=e.update(E),I=E.material;if(Array.isArray(I)){let W=k.groups;for(let J=0,V=W.length;J<V;J++){let ne=W[J],B=I[ne.materialIndex];if(B&&B.visible){let G=L(E,B,w,C);E.onBeforeShadow(n,E,P,x,k,G,ne),n.renderBufferDirect(x,null,k,G,E,ne),E.onAfterShadow(n,E,P,x,k,G,ne)}}}else if(I.visible){let W=L(E,I,w,C);E.onBeforeShadow(n,E,P,x,k,W,null),n.renderBufferDirect(x,null,k,W,E,null),E.onAfterShadow(n,E,P,x,k,W,null)}}let F=E.children;for(let k=0,I=F.length;k<I;k++)M(F[k],P,x,w,C)}function T(E){E.target.removeEventListener("dispose",T);for(let x in o){let w=o[x],C=E.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}function gg(n,e){function t(){let R=!1,ae=new vt,ee=null,fe=new vt(0,0,0,0);return{setMask:function(xe){ee!==xe&&!R&&(n.colorMask(xe,xe,xe,xe),ee=xe)},setLocked:function(xe){R=xe},setClear:function(xe,oe,De,Ne,ht){ht===!0&&(xe*=Ne,oe*=Ne,De*=Ne),ae.set(xe,oe,De,Ne),fe.equals(ae)===!1&&(n.clearColor(xe,oe,De,Ne),fe.copy(ae))},reset:function(){R=!1,ee=null,fe.set(-1,0,0,0)}}}function i(){let R=!1,ae=!1,ee=null,fe=null,xe=null;return{setReversed:function(oe){if(ae!==oe){let De=e.get("EXT_clip_control");oe?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),ae=oe;let Ne=xe;xe=null,this.setClear(Ne)}},getReversed:function(){return ae},setTest:function(oe){oe?se(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(oe){ee!==oe&&!R&&(n.depthMask(oe),ee=oe)},setFunc:function(oe){if(ae&&(oe=Eh[oe]),fe!==oe){switch(oe){case Fr:n.depthFunc(n.NEVER);break;case Or:n.depthFunc(n.ALWAYS);break;case Br:n.depthFunc(n.LESS);break;case ns:n.depthFunc(n.LEQUAL);break;case kr:n.depthFunc(n.EQUAL);break;case zr:n.depthFunc(n.GEQUAL);break;case Vr:n.depthFunc(n.GREATER);break;case Hr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=oe}},setLocked:function(oe){R=oe},setClear:function(oe){xe!==oe&&(xe=oe,ae&&(oe=1-oe),n.clearDepth(oe))},reset:function(){R=!1,ee=null,fe=null,xe=null,ae=!1}}}function s(){let R=!1,ae=null,ee=null,fe=null,xe=null,oe=null,De=null,Ne=null,ht=null;return{setTest:function(ot){R||(ot?se(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(ot){ae!==ot&&!R&&(n.stencilMask(ot),ae=ot)},setFunc:function(ot,dn,En){(ee!==ot||fe!==dn||xe!==En)&&(n.stencilFunc(ot,dn,En),ee=ot,fe=dn,xe=En)},setOp:function(ot,dn,En){(oe!==ot||De!==dn||Ne!==En)&&(n.stencilOp(ot,dn,En),oe=ot,De=dn,Ne=En)},setLocked:function(ot){R=ot},setClear:function(ot){ht!==ot&&(n.clearStencil(ot),ht=ot)},reset:function(){R=!1,ae=null,ee=null,fe=null,xe=null,oe=null,De=null,Ne=null,ht=null}}}let r=new t,a=new i,l=new s,c=new WeakMap,o=new WeakMap,h={},p={},u={},f=new WeakMap,_=[],y=null,m=!1,d=null,A=null,L=null,M=null,T=null,E=null,P=null,x=new $e(0,0,0),w=0,C=!1,N=null,F=null,k=null,I=null,W=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ne=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(B)[1]),V=ne>=1):B.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),V=ne>=2);let G=null,Z={},he=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),He=new vt().fromArray(he),Ue=new vt().fromArray(pe);function je(R,ae,ee,fe){let xe=new Uint8Array(4),oe=n.createTexture();n.bindTexture(R,oe),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let De=0;De<ee;De++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ae,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,xe):n.texImage2D(ae+De,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xe);return oe}let ie={};ie[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),ie[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ie[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),se(n.DEPTH_TEST),a.setFunc(ns),ve(!1),Te(Qo),se(n.CULL_FACE),re(Ln);function se(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function ye(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function ze(R,ae){return u[R]!==ae?(n.bindFramebuffer(R,ae),u[R]=ae,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ae),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ae),!0):!1}function Se(R,ae){let ee=_,fe=!1;if(R){ee=f.get(ae),ee===void 0&&(ee=[],f.set(ae,ee));let xe=R.textures;if(ee.length!==xe.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let oe=0,De=xe.length;oe<De;oe++)ee[oe]=n.COLOR_ATTACHMENT0+oe;ee.length=xe.length,fe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ee)}function Ve(R){return y!==R?(n.useProgram(R),y=R,!0):!1}let at={[Pi]:n.FUNC_ADD,[Yc]:n.FUNC_SUBTRACT,[$c]:n.FUNC_REVERSE_SUBTRACT};at[Jc]=n.MIN,at[Zc]=n.MAX;let z={[Kc]:n.ZERO,[jc]:n.ONE,[Qc]:n.SRC_COLOR,[nl]:n.SRC_ALPHA,[rh]:n.SRC_ALPHA_SATURATE,[ih]:n.DST_COLOR,[th]:n.DST_ALPHA,[eh]:n.ONE_MINUS_SRC_COLOR,[il]:n.ONE_MINUS_SRC_ALPHA,[sh]:n.ONE_MINUS_DST_COLOR,[nh]:n.ONE_MINUS_DST_ALPHA,[ah]:n.CONSTANT_COLOR,[oh]:n.ONE_MINUS_CONSTANT_COLOR,[lh]:n.CONSTANT_ALPHA,[ch]:n.ONE_MINUS_CONSTANT_ALPHA};function re(R,ae,ee,fe,xe,oe,De,Ne,ht,ot){if(R===Ln){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(se(n.BLEND),m=!0),R!==qc){if(R!==d||ot!==C){if((A!==Pi||T!==Pi)&&(n.blendEquation(n.FUNC_ADD),A=Pi,T=Pi),ot)switch(R){case ps:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFunc(n.ONE,n.ONE);break;case el:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case tl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:We("WebGLState: Invalid blending: ",R);break}else switch(R){case ps:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Js:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case el:We("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case tl:We("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:We("WebGLState: Invalid blending: ",R);break}L=null,M=null,E=null,P=null,x.set(0,0,0),w=0,d=R,C=ot}return}xe=xe||ae,oe=oe||ee,De=De||fe,(ae!==A||xe!==T)&&(n.blendEquationSeparate(at[ae],at[xe]),A=ae,T=xe),(ee!==L||fe!==M||oe!==E||De!==P)&&(n.blendFuncSeparate(z[ee],z[fe],z[oe],z[De]),L=ee,M=fe,E=oe,P=De),(Ne.equals(x)===!1||ht!==w)&&(n.blendColor(Ne.r,Ne.g,Ne.b,ht),x.copy(Ne),w=ht),d=R,C=!1}function we(R,ae){R.side===vn?ye(n.CULL_FACE):se(n.CULL_FACE);let ee=R.side===$t;ae&&(ee=!ee),ve(ee),R.blending===ps&&R.transparent===!1?re(Ln):re(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let fe=R.stencilWrite;l.setTest(fe),fe&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),rt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?se(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function ve(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function Te(R){R!==Gc?(se(n.CULL_FACE),R!==F&&(R===Qo?n.cullFace(n.BACK):R===Wc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),F=R}function Ce(R){R!==k&&(V&&n.lineWidth(R),k=R)}function rt(R,ae,ee){R?(se(n.POLYGON_OFFSET_FILL),(I!==ae||W!==ee)&&(I=ae,W=ee,a.getReversed()&&(ae=-ae),n.polygonOffset(ae,ee))):ye(n.POLYGON_OFFSET_FILL)}function Xe(R){R?se(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Je(R){R===void 0&&(R=n.TEXTURE0+J-1),G!==R&&(n.activeTexture(R),G=R)}function S(R,ae,ee){ee===void 0&&(G===null?ee=n.TEXTURE0+J-1:ee=G);let fe=Z[ee];fe===void 0&&(fe={type:void 0,texture:void 0},Z[ee]=fe),(fe.type!==R||fe.texture!==ae)&&(G!==ee&&(n.activeTexture(ee),G=ee),n.bindTexture(R,ae||ie[R]),fe.type=R,fe.texture=ae)}function _e(){let R=Z[G];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ge(){try{n.compressedTexImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function b(){try{n.compressedTexImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function g(){try{n.texSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function D(){try{n.texSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function te(){try{n.texStorage2D(...arguments)}catch(R){We("WebGLState:",R)}}function de(){try{n.texStorage3D(...arguments)}catch(R){We("WebGLState:",R)}}function j(){try{n.texImage2D(...arguments)}catch(R){We("WebGLState:",R)}}function K(){try{n.texImage3D(...arguments)}catch(R){We("WebGLState:",R)}}function ue(R){return p[R]!==void 0?p[R]:n.getParameter(R)}function me(R,ae){p[R]!==ae&&(n.pixelStorei(R,ae),p[R]=ae)}function le(R){He.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),He.copy(R))}function ce(R){Ue.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Ue.copy(R))}function Ae(R,ae){let ee=o.get(ae);ee===void 0&&(ee=new WeakMap,o.set(ae,ee));let fe=ee.get(R);fe===void 0&&(fe=n.getUniformBlockIndex(ae,R.name),ee.set(R,fe))}function Pe(R,ae){let fe=o.get(ae).get(R);c.get(ae)!==fe&&(n.uniformBlockBinding(ae,fe,R.__bindingPointIndex),c.set(ae,fe))}function ke(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},p={},G=null,Z={},u={},f=new WeakMap,_=[],y=null,m=!1,d=null,A=null,L=null,M=null,T=null,E=null,P=null,x=new $e(0,0,0),w=0,C=!1,N=null,F=null,k=null,I=null,W=null,He.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:se,disable:ye,bindFramebuffer:ze,drawBuffers:Se,useProgram:Ve,setBlending:re,setMaterial:we,setFlipSided:ve,setCullFace:Te,setLineWidth:Ce,setPolygonOffset:rt,setScissorTest:Xe,activeTexture:Je,bindTexture:S,unbindTexture:_e,compressedTexImage2D:ge,compressedTexImage3D:b,texImage2D:j,texImage3D:K,pixelStorei:me,getParameter:ue,updateUBOMapping:Ae,uniformBlockBinding:Pe,texStorage2D:te,texStorage3D:de,texSubImage2D:g,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:Y,scissor:le,viewport:ce,reset:ke}}function _g(n,e,t,i,s,r,a){let l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new et,h=new WeakMap,p=new Set,u,f=new WeakMap,_=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(b,g){return _?new OffscreenCanvas(b,g):Us("canvas")}function m(b,g,D){let O=1,Y=ge(b);if((Y.width>D||Y.height>D)&&(O=D/Math.max(Y.width,Y.height)),O<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){let te=Math.floor(O*Y.width),de=Math.floor(O*Y.height);u===void 0&&(u=y(te,de));let j=g?y(te,de):u;return j.width=te,j.height=de,j.getContext("2d").drawImage(b,0,0,te,de),Ge("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+te+"x"+de+")."),j}else return"data"in b&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),b;return b}function d(b){return b.generateMipmaps}function A(b){n.generateMipmap(b)}function L(b){return b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?n.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(b,g,D,O,Y,te=!1){if(b!==null){if(n[b]!==void 0)return n[b];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let de;O&&(de=e.get("EXT_texture_norm16"),de||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=g;if(g===n.RED&&(D===n.FLOAT&&(j=n.R32F),D===n.HALF_FLOAT&&(j=n.R16F),D===n.UNSIGNED_BYTE&&(j=n.R8),D===n.UNSIGNED_SHORT&&de&&(j=de.R16_EXT),D===n.SHORT&&de&&(j=de.R16_SNORM_EXT)),g===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.R8UI),D===n.UNSIGNED_SHORT&&(j=n.R16UI),D===n.UNSIGNED_INT&&(j=n.R32UI),D===n.BYTE&&(j=n.R8I),D===n.SHORT&&(j=n.R16I),D===n.INT&&(j=n.R32I)),g===n.RG&&(D===n.FLOAT&&(j=n.RG32F),D===n.HALF_FLOAT&&(j=n.RG16F),D===n.UNSIGNED_BYTE&&(j=n.RG8),D===n.UNSIGNED_SHORT&&de&&(j=de.RG16_EXT),D===n.SHORT&&de&&(j=de.RG16_SNORM_EXT)),g===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RG8UI),D===n.UNSIGNED_SHORT&&(j=n.RG16UI),D===n.UNSIGNED_INT&&(j=n.RG32UI),D===n.BYTE&&(j=n.RG8I),D===n.SHORT&&(j=n.RG16I),D===n.INT&&(j=n.RG32I)),g===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGB8UI),D===n.UNSIGNED_SHORT&&(j=n.RGB16UI),D===n.UNSIGNED_INT&&(j=n.RGB32UI),D===n.BYTE&&(j=n.RGB8I),D===n.SHORT&&(j=n.RGB16I),D===n.INT&&(j=n.RGB32I)),g===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),D===n.UNSIGNED_INT&&(j=n.RGBA32UI),D===n.BYTE&&(j=n.RGBA8I),D===n.SHORT&&(j=n.RGBA16I),D===n.INT&&(j=n.RGBA32I)),g===n.RGB&&(D===n.UNSIGNED_SHORT&&de&&(j=de.RGB16_EXT),D===n.SHORT&&de&&(j=de.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),g===n.RGBA){let K=te?Ds:tt.getTransfer(Y);D===n.FLOAT&&(j=n.RGBA32F),D===n.HALF_FLOAT&&(j=n.RGBA16F),D===n.UNSIGNED_BYTE&&(j=K===ct?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&de&&(j=de.RGBA16_EXT),D===n.SHORT&&de&&(j=de.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function T(b,g){let D;return b?g===null||g===Mn||g===gs?D=n.DEPTH24_STENCIL8:g===Sn?D=n.DEPTH32F_STENCIL8:g===ms&&(D=n.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Mn||g===gs?D=n.DEPTH_COMPONENT24:g===Sn?D=n.DEPTH_COMPONENT32F:g===ms&&(D=n.DEPTH_COMPONENT16),D}function E(b,g){return d(b)===!0||b.isFramebufferTexture&&b.minFilter!==Rt&&b.minFilter!==Nt?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function P(b){let g=b.target;g.removeEventListener("dispose",P),w(g),g.isVideoTexture&&h.delete(g),g.isHTMLTexture&&p.delete(g)}function x(b){let g=b.target;g.removeEventListener("dispose",x),N(g)}function w(b){let g=i.get(b);if(g.__webglInit===void 0)return;let D=b.source,O=f.get(D);if(O){let Y=O[g.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(b),Object.keys(O).length===0&&f.delete(D)}i.remove(b)}function C(b){let g=i.get(b);n.deleteTexture(g.__webglTexture);let D=b.source,O=f.get(D);delete O[g.__cacheKey],a.memory.textures--}function N(b){let g=i.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),i.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let Y=0;Y<g.__webglFramebuffer[O].length;Y++)n.deleteFramebuffer(g.__webglFramebuffer[O][Y]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}let D=b.textures;for(let O=0,Y=D.length;O<Y;O++){let te=i.get(D[O]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),a.memory.textures--),i.remove(D[O])}i.remove(b)}let F=0;function k(){F=0}function I(){return F}function W(b){F=b}function J(){let b=F;return b>=s.maxTextures&&Ge("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,b}function V(b){let g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function ne(b,g){let D=i.get(b);if(b.isVideoTexture&&S(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&D.__version!==b.version){let O=b.image;if(O===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(D,b,g);return}}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+g)}function B(b,g){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ye(D,b,g);return}else b.isExternalTexture&&(D.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+g)}function G(b,g){let D=i.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&D.__version!==b.version){ye(D,b,g);return}t.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+g)}function Z(b,g){let D=i.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&D.__version!==b.version){ze(D,b,g);return}t.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+g)}let he={[is]:n.REPEAT,[Rn]:n.CLAMP_TO_EDGE,[Gr]:n.MIRRORED_REPEAT},pe={[Rt]:n.NEAREST,[dh]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Nt]:n.LINEAR,[_a]:n.LINEAR_MIPMAP_NEAREST,[mi]:n.LINEAR_MIPMAP_LINEAR},He={[gh]:n.NEVER,[Mh]:n.ALWAYS,[_h]:n.LESS,[to]:n.LEQUAL,[xh]:n.EQUAL,[no]:n.GEQUAL,[vh]:n.GREATER,[yh]:n.NOTEQUAL};function Ue(b,g){if(g.type===Sn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Nt||g.magFilter===_a||g.magFilter===js||g.magFilter===mi||g.minFilter===Nt||g.minFilter===_a||g.minFilter===js||g.minFilter===mi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,he[g.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,he[g.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,he[g.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,pe[g.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,pe[g.minFilter]),g.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,He[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Rt||g.minFilter!==js&&g.minFilter!==mi||g.type===Sn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){let D=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function je(b,g){let D=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",P));let O=g.source,Y=f.get(O);Y===void 0&&(Y={},f.set(O,Y));let te=V(g);if(te!==b.__cacheKey){Y[te]===void 0&&(Y[te]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[te].usedTimes++;let de=Y[b.__cacheKey];de!==void 0&&(Y[b.__cacheKey].usedTimes--,de.usedTimes===0&&C(g)),b.__cacheKey=te,b.__webglTexture=Y[te].texture}return D}function ie(b,g,D){return Math.floor(Math.floor(b/D)/g)}function se(b,g,D,O){let te=b.updateRanges;if(te.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,D,O,g.data);else{te.sort((me,le)=>me.start-le.start);let de=0;for(let me=1;me<te.length;me++){let le=te[de],ce=te[me],Ae=le.start+le.count,Pe=ie(ce.start,g.width,4),ke=ie(le.start,g.width,4);ce.start<=Ae+1&&Pe===ke&&ie(ce.start+ce.count-1,g.width,4)===Pe?le.count=Math.max(le.count,ce.start+ce.count-le.start):(++de,te[de]=ce)}te.length=de+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),K=t.getParameter(n.UNPACK_SKIP_PIXELS),ue=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let me=0,le=te.length;me<le;me++){let ce=te[me],Ae=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),ke=Ae%g.width,R=Math.floor(Ae/g.width),ae=Pe,ee=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(n.UNPACK_SKIP_ROWS,R),t.texSubImage2D(n.TEXTURE_2D,0,ke,R,ae,ee,D,O,g.data)}b.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,K),t.pixelStorei(n.UNPACK_SKIP_ROWS,ue)}}function ye(b,g,D){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);let Y=je(b,g),te=g.source;t.bindTexture(O,b.__webglTexture,n.TEXTURE0+D);let de=i.get(te);if(te.version!==de.__version||Y===!0){if(t.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&g.image instanceof ImageBitmap)===!1){let ee=tt.getPrimaries(tt.workingColorSpace),fe=g.colorSpace===Xn?null:tt.getPrimaries(g.colorSpace),xe=g.colorSpace===Xn||ee===fe?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment);let K=m(g.image,!1,s.maxTextureSize);K=_e(g,K);let ue=r.convert(g.format,g.colorSpace),me=r.convert(g.type),le=M(g.internalFormat,ue,me,g.normalized,g.colorSpace,g.isVideoTexture);Ue(O,g);let ce,Ae=g.mipmaps,Pe=g.isVideoTexture!==!0,ke=de.__version===void 0||Y===!0,R=te.dataReady,ae=E(g,K);if(g.isDepthTexture)le=T(g.format===gi,g.type),ke&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,le,K.width,K.height):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,ue,me,null));else if(g.isDataTexture)if(Ae.length>0){Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,Ae[0].width,Ae[0].height);for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],Pe?R&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ue,me,ce.data);g.generateMipmaps=!1}else Pe?(ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,K.width,K.height),R&&se(g,K,ue,me)):t.texImage2D(n.TEXTURE_2D,0,le,K.width,K.height,0,ue,me,K.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Pe&&ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,le,Ae[0].width,Ae[0].height,K.depth);for(let ee=0,fe=Ae.length;ee<fe;ee++)if(ce=Ae[ee],g.format!==cn)if(ue!==null)if(Pe){if(R)if(g.layerUpdates.size>0){let xe=wl(ce.width,ce.height,g.format,g.type);for(let oe of g.layerUpdates){let De=ce.data.subarray(oe*xe/ce.data.BYTES_PER_ELEMENT,(oe+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,oe,ce.width,ce.height,1,ue,De)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,K.depth,ue,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,le,ce.width,ce.height,K.depth,0,ce.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?R&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,ce.width,ce.height,K.depth,ue,me,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,le,ce.width,ce.height,K.depth,0,ue,me,ce.data);g.layerUpdates.size>0&&g.clearLayerUpdates()}else{Pe&&ke&&t.texStorage2D(n.TEXTURE_2D,ae,le,Ae[0].width,Ae[0].height);for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],g.format!==cn?ue!==null?Pe?R&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ce.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?R&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ce.width,ce.height,ue,me,ce.data):t.texImage2D(n.TEXTURE_2D,ee,le,ce.width,ce.height,0,ue,me,ce.data)}else if(g.isDataArrayTexture)if(Pe){if(ke&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ae,le,K.width,K.height,K.depth),R)if(g.layerUpdates.size>0){let ee=wl(K.width,K.height,g.format,g.type);for(let fe of g.layerUpdates){let xe=K.data.subarray(fe*ee/K.data.BYTES_PER_ELEMENT,(fe+1)*ee/K.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,K.width,K.height,1,ue,me,xe)}g.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,ue,me,K.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,le,K.width,K.height,K.depth,0,ue,me,K.data);else if(g.isData3DTexture)Pe?(ke&&t.texStorage3D(n.TEXTURE_3D,ae,le,K.width,K.height,K.depth),R&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,ue,me,K.data)):t.texImage3D(n.TEXTURE_3D,0,le,K.width,K.height,K.depth,0,ue,me,K.data);else if(g.isFramebufferTexture){if(ke)if(Pe)t.texStorage2D(n.TEXTURE_2D,ae,le,K.width,K.height);else{let ee=K.width,fe=K.height;for(let xe=0;xe<ae;xe++)t.texImage2D(n.TEXTURE_2D,xe,le,ee,fe,0,ue,me,null),ee>>=1,fe>>=1}}else if(g.isHTMLTexture){if("texElementImage2D"in n){let ee=n.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),K.parentNode!==ee){ee.appendChild(K),p.add(g),ee.onpaint=fe=>{let xe=fe.changedElements;for(let oe of p)xe.includes(oe.image)&&(oe.needsUpdate=!0)},ee.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let xe=n.RGBA,oe=n.RGBA,De=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,xe,oe,De,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(Pe&&ke){let ee=ge(Ae[0]);t.texStorage2D(n.TEXTURE_2D,ae,le,ee.width,ee.height)}for(let ee=0,fe=Ae.length;ee<fe;ee++)ce=Ae[ee],Pe?R&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,ue,me,ce):t.texImage2D(n.TEXTURE_2D,ee,le,ue,me,ce);g.generateMipmaps=!1}else if(Pe){if(ke){let ee=ge(K);t.texStorage2D(n.TEXTURE_2D,ae,le,ee.width,ee.height)}R&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ue,me,K)}else t.texImage2D(n.TEXTURE_2D,0,le,ue,me,K);d(g)&&A(O),de.__version=te.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ze(b,g,D){if(g.image.length!==6)return;let O=je(b,g),Y=g.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+D);let te=i.get(Y);if(Y.version!==te.__version||O===!0){t.activeTexture(n.TEXTURE0+D);let de=tt.getPrimaries(tt.workingColorSpace),j=g.colorSpace===Xn?null:tt.getPrimaries(g.colorSpace),K=g.colorSpace===Xn||de===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let ue=g.isCompressedTexture||g.image[0].isCompressedTexture,me=g.image[0]&&g.image[0].isDataTexture,le=[];for(let oe=0;oe<6;oe++)!ue&&!me?le[oe]=m(g.image[oe],!0,s.maxCubemapSize):le[oe]=me?g.image[oe].image:g.image[oe],le[oe]=_e(g,le[oe]);let ce=le[0],Ae=r.convert(g.format,g.colorSpace),Pe=r.convert(g.type),ke=M(g.internalFormat,Ae,Pe,g.normalized,g.colorSpace),R=g.isVideoTexture!==!0,ae=te.__version===void 0||O===!0,ee=Y.dataReady,fe=E(g,ce);Ue(n.TEXTURE_CUBE_MAP,g);let xe;if(ue){R&&ae&&t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ke,ce.width,ce.height);for(let oe=0;oe<6;oe++){xe=le[oe].mipmaps;for(let De=0;De<xe.length;De++){let Ne=xe[De];g.format!==cn?Ae!==null?R?ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ne.width,Ne.height,Ae,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,ke,Ne.width,Ne.height,0,Ne.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,0,0,Ne.width,Ne.height,Ae,Pe,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De,ke,Ne.width,Ne.height,0,Ae,Pe,Ne.data)}}}else{if(xe=g.mipmaps,R&&ae){xe.length>0&&fe++;let oe=ge(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,fe,ke,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(me){R?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,le[oe].width,le[oe].height,Ae,Pe,le[oe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,le[oe].width,le[oe].height,0,Ae,Pe,le[oe].data);for(let De=0;De<xe.length;De++){let ht=xe[De].image[oe].image;R?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,ht.width,ht.height,Ae,Pe,ht.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,ke,ht.width,ht.height,0,Ae,Pe,ht.data)}}else{R?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ae,Pe,le[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,ke,Ae,Pe,le[oe]);for(let De=0;De<xe.length;De++){let Ne=xe[De];R?ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,0,0,Ae,Pe,Ne.image[oe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,De+1,ke,Ae,Pe,Ne.image[oe])}}}d(g)&&A(n.TEXTURE_CUBE_MAP),te.__version=Y.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Se(b,g,D,O,Y,te){let de=r.convert(D.format,D.colorSpace),j=r.convert(D.type),K=M(D.internalFormat,de,j,D.normalized,D.colorSpace),ue=i.get(g),me=i.get(D);if(me.__renderTarget=g,!ue.__hasExternalTextures){let le=Math.max(1,g.width>>te),ce=Math.max(1,g.height>>te);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?t.texImage3D(Y,te,K,le,ce,g.depth,0,de,j,null):t.texImage2D(Y,te,K,le,ce,0,de,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),Je(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,Y,me.__webglTexture,0,Xe(g)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,Y,me.__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(b,g,D){if(n.bindRenderbuffer(n.RENDERBUFFER,b),g.depthBuffer){let O=g.depthTexture,Y=O&&O.isDepthTexture?O.type:null,te=T(g.stencilBuffer,Y),de=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Je(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),te,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),te,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,te,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,de,n.RENDERBUFFER,b)}else{let O=g.textures;for(let Y=0;Y<O.length;Y++){let te=O[Y],de=r.convert(te.format,te.colorSpace),j=r.convert(te.type),K=M(te.internalFormat,de,j,te.normalized,te.colorSpace);Je(g)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Xe(g),K,g.width,g.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Xe(g),K,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,K,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function at(b,g,D){let O=g.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(g.depthTexture);if(Y.__renderTarget=g,(!Y.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),O){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,g.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g.depthTexture);let ue=r.convert(g.depthTexture.format),me=r.convert(g.depthTexture.type),le;g.depthTexture.format===Pn?le=n.DEPTH_COMPONENT24:g.depthTexture.format===gi&&(le=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,le,g.width,g.height,0,ue,me,null)}}else ne(g.depthTexture,0);let te=Y.__webglTexture,de=Xe(g),j=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,K=g.depthTexture.format===gi?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(g.depthTexture.format===Pn)Je(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,te,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,te,0);else if(g.depthTexture.format===gi)Je(g)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,te,0,de):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(b){let g=i.get(b),D=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){let O=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){let Y=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",Y)};O.addEventListener("dispose",Y),g.__depthDisposeCallback=Y}g.__boundDepthTexture=O}if(b.depthTexture&&!g.__autoAllocateDepthBuffer)if(D)for(let O=0;O<6;O++)at(g.__webglFramebuffer[O],b,O);else{let O=b.texture.mipmaps;O&&O.length>0?at(g.__webglFramebuffer[0],b,0):at(g.__webglFramebuffer,b,0)}else if(D){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=n.createRenderbuffer(),Ve(g.__webglDepthbuffer[O],b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}}else{let O=b.texture.mipmaps;if(O&&O.length>0?t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Ve(g.__webglDepthbuffer,b,!1);else{let Y=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,te=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,te),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,te)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function re(b,g,D){let O=i.get(b);g!==void 0&&Se(O.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&z(b)}function we(b){let g=b.texture,D=i.get(b),O=i.get(g);b.addEventListener("dispose",x);let Y=b.textures,te=b.isWebGLCubeRenderTarget===!0,de=Y.length>1;if(de||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,a.memory.textures++),te){D.__webglFramebuffer=[];for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer[j]=[];for(let K=0;K<g.mipmaps.length;K++)D.__webglFramebuffer[j][K]=n.createFramebuffer()}else D.__webglFramebuffer[j]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){D.__webglFramebuffer=[];for(let j=0;j<g.mipmaps.length;j++)D.__webglFramebuffer[j]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(de)for(let j=0,K=Y.length;j<K;j++){let ue=i.get(Y[j]);ue.__webglTexture===void 0&&(ue.__webglTexture=n.createTexture(),a.memory.textures++)}if(b.samples>0&&Je(b)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<Y.length;j++){let K=Y[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let ue=r.convert(K.format,K.colorSpace),me=r.convert(K.type),le=M(K.internalFormat,ue,me,K.normalized,K.colorSpace,b.isXRRenderTarget===!0),ce=Xe(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,le,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ue(n.TEXTURE_CUBE_MAP,g);for(let j=0;j<6;j++)if(g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Se(D.__webglFramebuffer[j][K],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else Se(D.__webglFramebuffer[j],b,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);d(g)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(de){for(let j=0,K=Y.length;j<K;j++){let ue=Y[j],me=i.get(ue),le=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(le=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,me.__webglTexture),Ue(le,ue),Se(D.__webglFramebuffer,b,ue,n.COLOR_ATTACHMENT0+j,le,0),d(ue)&&A(le)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(j=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,O.__webglTexture),Ue(j,g),g.mipmaps&&g.mipmaps.length>0)for(let K=0;K<g.mipmaps.length;K++)Se(D.__webglFramebuffer[K],b,g,n.COLOR_ATTACHMENT0,j,K);else Se(D.__webglFramebuffer,b,g,n.COLOR_ATTACHMENT0,j,0);d(g)&&A(j),t.unbindTexture()}b.depthBuffer&&z(b)}function ve(b){let g=b.textures;for(let D=0,O=g.length;D<O;D++){let Y=g[D];if(d(Y)){let te=L(b),de=i.get(Y).__webglTexture;t.bindTexture(te,de),A(te),t.unbindTexture()}}}let Te=[],Ce=[];function rt(b){if(b.samples>0){if(Je(b)===!1){let g=b.textures,D=b.width,O=b.height,Y=n.COLOR_BUFFER_BIT,te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=i.get(b),j=g.length>1;if(j)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,de.__webglMultisampledFramebuffer);let K=b.texture.mipmaps;K&&K.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let me=i.get(g[ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,me,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,Y,n.NEAREST),c===!0&&(Te.length=0,Ce.length=0,Te.push(n.COLOR_ATTACHMENT0+ue),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(Te.push(te),Ce.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Ce)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(n.FRAMEBUFFER,de.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,de.__webglColorRenderbuffer[ue]);let me=i.get(g[ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,de.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,de.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){let g=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Xe(b){return Math.min(s.maxSamples,b.samples)}function Je(b){let g=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function S(b){let g=a.render.frame;h.get(b)!==g&&(h.set(b,g),b.update())}function _e(b,g){let D=b.colorSpace,O=b.format,Y=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||D!==Ns&&D!==Xn&&(tt.getTransfer(D)===ct?(O!==cn||Y!==en)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):We("WebGLTextures: Unsupported texture color space:",D)),g}function ge(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(o.width=b.naturalWidth||b.width,o.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(o.width=b.displayWidth,o.height=b.displayHeight):(o.width=b.width,o.height=b.height),o}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=W,this.setTexture2D=ne,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=re,this.setupRenderTarget=we,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Je,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function xg(n,e){function t(i,s=Xn){let r,a=tt.getTransfer(s);if(i===en)return n.UNSIGNED_BYTE;if(i===va)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ya)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===ml)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===dl)return n.BYTE;if(i===fl)return n.SHORT;if(i===ms)return n.UNSIGNED_SHORT;if(i===xa)return n.INT;if(i===Mn)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===gl)return n.ALPHA;if(i===_l)return n.RGB;if(i===cn)return n.RGBA;if(i===Pn)return n.DEPTH_COMPONENT;if(i===gi)return n.DEPTH_STENCIL;if(i===xl)return n.RED;if(i===Ma)return n.RED_INTEGER;if(i===_i)return n.RG;if(i===Sa)return n.RG_INTEGER;if(i===ba)return n.RGBA_INTEGER;if(i===Qs||i===er||i===tr||i===nr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Qs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Qs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wa||i===Ta||i===Ea||i===Aa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ta)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ea)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Aa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ca||i===Ra||i===Pa||i===Ia||i===La||i===ir||i===Na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ca||i===Ra)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ia)return r.COMPRESSED_R11_EAC;if(i===La)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ir)return r.COMPRESSED_RG11_EAC;if(i===Na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Da||i===Ua||i===Fa||i===Oa||i===Ba||i===ka||i===za||i===Va||i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===Ya)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Da)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ua)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Fa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ba)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ka)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===za)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Va)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ha)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ga)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qa)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ya)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$a||i===Ja||i===Za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$a)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ka||i===ja||i===sr||i===Qa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Ka)return r.COMPRESSED_RED_RGTC1_EXT;if(i===ja)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var vg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`,Gl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Gs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Yt({vertexShader:vg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new st(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Wl=class extends In{constructor(e,t){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,h=null,p=null,u=null,f=null,_=null,y=typeof XRWebGLBinding<"u",m=new Gl,d={},A=t.getContextAttributes(),L=null,M=null,T=[],E=[],P=new et,x=null,w=null,C=new Bt;C.viewport=new vt;let N=new Bt;N.viewport=new vt;let F=[C,N],k=new fa,I=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let se=T[ie];return se===void 0&&(se=new os,T[ie]=se),se.getTargetRaySpace()},this.getControllerGrip=function(ie){let se=T[ie];return se===void 0&&(se=new os,T[ie]=se),se.getGripSpace()},this.getHand=function(ie){let se=T[ie];return se===void 0&&(se=new os,T[ie]=se),se.getHandSpace()};function J(ie){let se=E.indexOf(ie.inputSource);if(se===-1)return;let ye=T[se];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,o||a),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function V(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ne);for(let ie=0;ie<T.length;ie++){let se=E[ie];se!==null&&(E[ie]=null,T[ie].disconnect(se))}I=null,W=null,m.reset();for(let ie in d)delete d[ie];if(e.setRenderTarget(L),f=null,u=null,p=null,s=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(P.width,P.height,!1),w!==null){let ie=w.camera;ie.fov=w.fov,ie.zoom=w.zoom,ie.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){l=ie,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(ie){o=ie},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return p===null&&y&&(p=new XRWebGLBinding(s,t)),p},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(L=e.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ne),A.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,ze=null,Se=null;A.depth&&(Se=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=A.stencil?gi:Pn,ze=A.stencil?gs:Mn);let Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};p=this.getBinding(),u=p.createProjectionLayer(Ve),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new jt(u.textureWidth,u.textureHeight,{format:cn,type:en,depthTexture:new oi(u.textureWidth,u.textureHeight,ze,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ye={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new jt(f.framebufferWidth,f.framebufferHeight,{format:cn,type:en,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(ie){for(let se=0;se<ie.removed.length;se++){let ye=ie.removed[se],ze=E.indexOf(ye);ze>=0&&(E[ze]=null,T[ze].disconnect(ye))}for(let se=0;se<ie.added.length;se++){let ye=ie.added[se],ze=E.indexOf(ye);if(ze===-1){for(let Ve=0;Ve<T.length;Ve++)if(Ve>=E.length){E.push(ye),ze=Ve;break}else if(E[Ve]===null){E[Ve]=ye,ze=Ve;break}if(ze===-1)break}let Se=T[ze];Se&&Se.connect(ye)}}let B=new H,G=new H;function Z(ie,se,ye){B.setFromMatrixPosition(se.matrixWorld),G.setFromMatrixPosition(ye.matrixWorld);let ze=B.distanceTo(G),Se=se.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,at=Se[14]/(Se[10]-1),z=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],we=(Se[9]-1)/Se[5],ve=(Se[8]-1)/Se[0],Te=(Ve[8]+1)/Ve[0],Ce=at*ve,rt=at*Te,Xe=ze/(-ve+Te),Je=Xe*-ve;if(se.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Je),ie.translateZ(Xe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Se[10]===-1)ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let S=at+Xe,_e=z+Xe,ge=Ce-Je,b=rt+(ze-Je),g=re*z/_e*S,D=we*z/_e*S;ie.projectionMatrix.makePerspective(ge,b,g,D,S,_e),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function he(ie,se){se===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(se.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let se=ie.near,ye=ie.far;m.texture!==null&&(m.depthNear>0&&(se=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=N.near=C.near=se,k.far=N.far=C.far=ye,(I!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,W=k.far),k.layers.mask=ie.layers.mask|6,C.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let ze=ie.parent,Se=k.cameras;he(k,ze);for(let Ve=0;Ve<Se.length;Ve++)he(Se[Ve],ze);Se.length===2?Z(k,C,N):k.projectionMatrix.copy(C.projectionMatrix),w===null&&ie.isPerspectiveCamera&&(w={camera:ie,fov:ie.fov,zoom:ie.zoom}),pe(ie,k,ze)};function pe(ie,se,ye){ye===null?ie.matrix.copy(se.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(se.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(se.projectionMatrix),ie.projectionMatrixInverse.copy(se.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Xr*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(ie){c=ie,u!==null&&(u.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(ie){return d[ie]};let He=null;function Ue(ie,se){if(h=se.getViewerPose(o||a),_=se,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let ze=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,ze=!0);for(let z=0;z<ye.length;z++){let re=ye[z],we=null;if(f!==null)we=f.getViewport(re);else{let Te=p.getViewSubImage(u,re);we=Te.viewport,z===0&&(e.setRenderTargetTextures(M,Te.colorTexture,Te.depthStencilTexture),e.setRenderTarget(M))}let ve=F[z];ve===void 0&&(ve=new Bt,ve.layers.enable(z),ve.viewport=new vt,F[z]=ve),ve.matrix.fromArray(re.transform.matrix),ve.matrix.decompose(ve.position,ve.quaternion,ve.scale),ve.projectionMatrix.fromArray(re.projectionMatrix),ve.projectionMatrixInverse.copy(ve.projectionMatrix).invert(),ve.viewport.set(we.x,we.y,we.width,we.height),z===0&&(k.matrix.copy(ve.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),ze===!0&&k.cameras.push(ve)}let Se=s.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){p=i.getBinding();let z=p.getDepthInformation(ye[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(Se&&Se.includes("camera-access")&&y){e.state.unbindTexture(),p=i.getBinding();for(let z=0;z<ye.length;z++){let re=ye[z].camera;if(re){let we=d[re];we||(we=new Gs,d[re]=we);let ve=p.getCameraImage(re);we.sourceTexture=ve}}}}for(let ye=0;ye<T.length;ye++){let ze=E[ye],Se=T[ye];ze!==null&&Se!==void 0&&Se.update(ze,se,o||a)}He&&He(ie,se),se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:se}),_=null}let je=new jh;je.setAnimationLoop(Ue),this.setAnimationLoop=function(ie){He=ie},this.dispose=function(){}}},Mg=new gt,su=new Ye;su.set(-1,0,0,0,1,0,0,0,1);function Sg(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,Ml(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,A,L,M){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),p(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&f(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),y(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&l(m,d)):d.isPointsMaterial?c(m,d,A,L):d.isSpriteMaterial?o(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===$t&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===$t&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let A=e.get(d),L=A.envMap,M=A.envMapRotation;L&&(m.envMap.value=L,m.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(M)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(su),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function l(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,A,L){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*A,m.scale.value=L*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function p(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function f(m,d,A){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===$t&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){let A=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bg(n,e,t,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){let E=T.program;i.uniformBlockBinding(M,E)}function o(M,T){let E=s[M.id];E===void 0&&(m(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",A));let P=T.program;i.updateUBOMapping(M,P);let x=e.render.frame;r[M.id]!==x&&(u(M),r[M.id]=x)}function h(M){let T=p();M.__bindingPointIndex=T;let E=n.createBuffer(),P=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,E),E}function p(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return We("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let T=s[M.id],E=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let x=0,w=E.length;x<w;x++){let C=E[x];if(Array.isArray(C))for(let N=0,F=C.length;N<F;N++)f(C[N],x,N,P);else f(C,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,T,E,P){if(y(M,T,E,P)===!0){let x=M.__offset,w=M.value;if(Array.isArray(w)){let C=0;for(let N=0;N<w.length;N++){let F=w[N],k=d(F);_(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else _(w,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function _(M,T,E){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,E)}function y(M,T,E,P){let x=M.value,w=T+"_"+E;if(P[w]===void 0)return typeof x=="number"||typeof x=="boolean"?P[w]=x:ArrayBuffer.isView(x)?P[w]=x.slice():P[w]=x.clone(),!0;{let C=P[w];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return P[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(M){let T=M.uniforms,E=0,P=16;for(let w=0,C=T.length;w<C;w++){let N=Array.isArray(T[w])?T[w]:[T[w]];for(let F=0,k=N.length;F<k;F++){let I=N[F],W=Array.isArray(I.value)?I.value:[I.value];for(let J=0,V=W.length;J<V;J++){let ne=W[J],B=d(ne),G=E%P,Z=G%B.boundary,he=G+Z;E+=Z,he!==0&&P-he<B.storage&&(E+=P-he),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=B.storage}}}let x=E%P;return x>0&&(E+=P-x),M.__size=E,M.__cache={},this}function d(M){let T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",M),T}function A(M){let T=M.target;T.removeEventListener("dispose",A);let E=a.indexOf(T.__bindingPointIndex);a.splice(E,1),n.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function L(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:o,dispose:L}}var wg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Nn=null;function Tg(){return Nn===null&&(Nn=new Zr(wg,16,16,_i,bn),Nn.name="DFG_LUT",Nn.minFilter=Nt,Nn.magFilter=Nt,Nn.wrapS=Rn,Nn.wrapT=Rn,Nn.generateMipmaps=!1,Nn.needsUpdate=!0),Nn}var oo=class{constructor(e={}){let{canvas:t=bh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;let y=f,m=new Set([ba,Sa,Ma]),d=new Set([en,Mn,ms,gs,va,ya]),A=new Uint32Array(4),L=new Int32Array(4),M=new H,T=null,E=null,P=[],x=[],w=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,k=null,I=null,W=null;this._outputColorSpace=Wt;let J=0,V=0,ne=null,B=-1,G=null,Z=new vt,he=new vt,pe=null,He=new $e(0),Ue=0,je=t.width,ie=t.height,se=1,ye=null,ze=null,Se=new vt(0,0,je,ie),Ve=new vt(0,0,je,ie),at=!1,z=new cs,re=!1,we=!1,ve=new gt,Te=new H,Ce=new vt,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Xe=!1;function Je(){return ne===null?se:1}let S=i;function _e(v,U){return t.getContext(v,U)}let ge,b,g,D,O,Y,te,de,j,K,ue,me,le,ce,Ae,Pe,ke,R,ae,ee,fe,xe,oe;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",ot,!1),t.addEventListener("webglcontextcreationerror",dn,!1),S===null){let U="webgl2";if(S=_e(U,v),S===null)throw _e(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(v){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),We("WebGLRenderer: "+v.message),v}function De(){ge=new Lm(S),ge.init(),fe=new xg(S,ge),b=new Sm(S,ge,e,fe),g=new gg(S,ge),b.reversedDepthBuffer&&u&&g.buffers.depth.setReversed(!0),k=S.createFramebuffer(),I=S.createFramebuffer(),W=S.createFramebuffer(),D=new Um(S),O=new ng,Y=new _g(S,ge,g,O,b,fe,D),te=new Im(C),de=new Fd(S),xe=new ym(S,de),j=new Nm(S,de,D,xe),K=new Om(S,j,de,xe,D),R=new Fm(S,b,Y),Ae=new bm(O),ue=new tg(C,te,ge,b,xe,Ae),me=new Sg(C,O),le=new sg,ce=new hg(ge),ke=new vm(C,te,g,K,_,c),Pe=new mg(C,K,b),oe=new bg(S,D,b,g),ae=new Mm(S,ge,D),ee=new Dm(S,ge,D),D.programs=ue.programs,C.capabilities=b,C.extensions=ge,C.properties=O,C.renderLists=le,C.shadowMap=Pe,C.state=g,C.info=D}y!==en&&(w=new km(y,t.width,t.height,l,s,r));let Ne=new Wl(C,S);this.xr=Ne,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let v=ge.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ge.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(v){v!==void 0&&(se=v,this.setSize(je,ie,!1))},this.getSize=function(v){return v.set(je,ie)},this.setSize=function(v,U,Q=!0){if(Ne.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}je=v,ie=U,t.width=Math.floor(v*se),t.height=Math.floor(U*se),Q===!0&&(t.style.width=v+"px",t.style.height=U+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set(je*se,ie*se).floor()},this.setDrawingBufferSize=function(v,U,Q){je=v,ie=U,se=Q,t.width=Math.floor(v*Q),t.height=Math.floor(U*Q),this.setViewport(0,0,v,U)},this.setEffects=function(v){if(y===en){We("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let U=0;U<v.length;U++)if(v[U].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(Z)},this.getViewport=function(v){return v.copy(Se)},this.setViewport=function(v,U,Q,X){v.isVector4?Se.set(v.x,v.y,v.z,v.w):Se.set(v,U,Q,X),g.viewport(Z.copy(Se).multiplyScalar(se).round())},this.getScissor=function(v){return v.copy(Ve)},this.setScissor=function(v,U,Q,X){v.isVector4?Ve.set(v.x,v.y,v.z,v.w):Ve.set(v,U,Q,X),g.scissor(he.copy(Ve).multiplyScalar(se).round())},this.getScissorTest=function(){return at},this.setScissorTest=function(v){g.setScissorTest(at=v)},this.setOpaqueSort=function(v){ye=v},this.setTransparentSort=function(v){ze=v},this.getClearColor=function(v){return v.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,Q=!0){let X=0;if(v){let q=!1;if(ne!==null){let Ee=ne.texture.format;q=m.has(Ee)}if(q){let Ee=ne.texture.type,Le=d.has(Ee),be=ke.getClearColor(),Fe=ke.getClearAlpha(),Be=be.r,Ze=be.g,Qe=be.b;Le?(A[0]=Be,A[1]=Ze,A[2]=Qe,A[3]=Fe,S.clearBufferuiv(S.COLOR,0,A)):(L[0]=Be,L[1]=Ze,L[2]=Qe,L[3]=Fe,S.clearBufferiv(S.COLOR,0,L))}else X|=S.COLOR_BUFFER_BIT}U&&(X|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&S.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),F=v},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",ot,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),ke.dispose(),le.dispose(),ce.dispose(),O.dispose(),te.dispose(),K.dispose(),xe.dispose(),oe.dispose(),ue.dispose(),Ne.dispose(),Ne.removeEventListener("sessionstart",fc),Ne.removeEventListener("sessionend",pc),Si.stop()};function ht(v){v.preventDefault(),yl("WebGLRenderer: Context Lost."),N=!0}function ot(){yl("WebGLRenderer: Context Restored."),N=!1;let v=D.autoReset,U=Pe.enabled,Q=Pe.autoUpdate,X=Pe.needsUpdate,q=Pe.type;De(),D.autoReset=v,Pe.enabled=U,Pe.autoUpdate=Q,Pe.needsUpdate=X,Pe.type=q}function dn(v){We("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function En(v){let U=v.target;U.removeEventListener("dispose",En),Yu(U)}function Yu(v){$u(v),O.remove(v)}function $u(v){let U=O.get(v).programs;U!==void 0&&(U.forEach(function(Q){ue.releaseProgram(Q)}),v.isShaderMaterial&&ue.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,Q,X,q,Ee){U===null&&(U=rt);let Le=q.isMesh&&q.matrixWorld.determinantAffine()<0,be=Ku(v,U,Q,X,q);g.setMaterial(X,Le);let Fe=Q.index,Be=1;if(X.wireframe===!0){if(Fe=j.getWireframeAttribute(Q),Fe===void 0)return;Be=2}let Ze=Q.drawRange,Qe=Q.attributes.position,Oe=Ze.start*Be,lt=(Ze.start+Ze.count)*Be;Ee!==null&&(Oe=Math.max(Oe,Ee.start*Be),lt=Math.min(lt,(Ee.start+Ee.count)*Be)),Fe!==null?(Oe=Math.max(Oe,0),lt=Math.min(lt,Fe.count)):Qe!=null&&(Oe=Math.max(Oe,0),lt=Math.min(lt,Qe.count));let bt=lt-Oe;if(bt<0||bt===1/0)return;xe.setup(q,X,be,Q,Fe);let pt,dt=ae;if(Fe!==null&&(pt=de.get(Fe),dt=ee,dt.setIndex(pt)),q.isMesh)X.wireframe===!0?(g.setLineWidth(X.wireframeLinewidth*Je()),dt.setMode(S.LINES)):dt.setMode(S.TRIANGLES);else if(q.isLine){let Ut=X.linewidth;Ut===void 0&&(Ut=1),g.setLineWidth(Ut*Je()),q.isLineSegments?dt.setMode(S.LINES):q.isLineLoop?dt.setMode(S.LINE_LOOP):dt.setMode(S.LINE_STRIP)}else q.isPoints?dt.setMode(S.POINTS):q.isSprite&&dt.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(ge.get("WEBGL_multi_draw"))dt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let Ut=q._multiDrawStarts,Ie=q._multiDrawCounts,Gt=q._multiDrawCount,it=Fe?de.get(Fe).bytesPerElement:1,on=O.get(X).currentProgram.getUniforms();for(let An=0;An<Gt;An++)on.setValue(S,"_gl_DrawID",An),dt.render(Ut[An]/it,Ie[An])}else if(q.isInstancedMesh)dt.renderInstances(Oe,bt,q.count);else if(Q.isInstancedBufferGeometry){let Ut=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ie=Math.min(Q.instanceCount,Ut);dt.renderInstances(Oe,bt,Ie)}else dt.render(Oe,bt)};function dc(v,U,Q,X){F!==null&&v.isNodeMaterial&&F.setObject(X,v),re===!0&&Ae.setState(v,Q,!1),v.transparent===!0&&v.side===vn&&v.forceSinglePass===!1?(v.side=$t,v.needsUpdate=!0,pr(v,U,X),v.side=fi,v.needsUpdate=!0,pr(v,U,X),v.side=vn):pr(v,U,X)}this.compile=function(v,U,Q=null){Q===null&&(Q=v),F!==null&&F.renderStart(v,U,Q),E=ce.get(Q),E.init(U),x.push(E),Q.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),v!==Q&&v.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),F!==null&&F.updateLights(E.state.lightsArray),we=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,we),re===!0&&Ae.setGlobalState(this.clippingPlanes,U),F!==null&&Pe.render(E.state.shadowsArray,Q,U);let X=new Set;return v.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ee=q.material;if(Ee)if(Array.isArray(Ee))for(let Le=0;Le<Ee.length;Le++){let be=Ee[Le];dc(be,Q,U,q),X.add(be)}else dc(Ee,Q,U,q),X.add(Ee)}),E=x.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(v,U,Q=null){let X=this.compile(v,U,Q);return new Promise(q=>{function Ee(){if(X.forEach(function(Le){let Fe=O.get(Le).currentProgram;(Fe===void 0||Fe.isReady())&&X.delete(Le)}),X.size===0){q(v);return}setTimeout(Ee,10)}ge.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Mo=null;function Ju(v){Mo&&Mo(v)}function fc(){Si.stop()}function pc(){Si.start()}let Si=new jh;Si.setAnimationLoop(Ju),typeof self<"u"&&Si.setContext(self),this.setAnimationLoop=function(v){Mo=v,Ne.setAnimationLoop(v),v===null?Si.stop():Si.start()},Ne.addEventListener("sessionstart",fc),Ne.addEventListener("sessionend",pc),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){We("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(v,U);let Q=Ne.enabled===!0&&Ne.isPresenting===!0,X=w!==null&&(ne===null||Q)&&w.begin(C,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ne.enabled===!0&&Ne.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Ne.cameraAutoUpdate===!0&&Ne.updateCamera(U),U=Ne.getCamera()),v.isScene===!0&&v.onBeforeRender(C,v,U,ne),E=ce.get(v,x.length),E.init(U),E.state.textureUnits=Y.getTextureUnits(),x.push(E),ve.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(ve,_n,U.reversedDepth),we=this.localClippingEnabled,re=Ae.init(this.clippingPlanes,we),T=le.get(v,P.length),T.init(),P.push(T),Ne.enabled===!0&&Ne.isPresenting===!0){let Le=C.xr.getDepthSensingMesh();Le!==null&&So(Le,U,-1/0,C.sortObjects)}So(v,U,0,C.sortObjects),T.finish(),F!==null&&F.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(ye,ze),Xe=Ne.enabled===!1||Ne.isPresenting===!1||Ne.hasDepthSensing()===!1,Xe&&ke.addToRenderList(T,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Ae.beginShadows();let q=E.state.shadowsArray;if(Pe.render(q,v,U),re===!0&&Ae.endShadows(),(X&&w.hasRenderPass())===!1){let Le=T.opaque,be=T.transmissive;if(E.setupLights(),U.isArrayCamera){let Fe=U.cameras;if(be.length>0)for(let Be=0,Ze=Fe.length;Be<Ze;Be++){let Qe=Fe[Be];gc(Le,be,v,Qe)}Xe&&ke.render(v);for(let Be=0,Ze=Fe.length;Be<Ze;Be++){let Qe=Fe[Be];mc(T,v,Qe,Qe.viewport)}}else be.length>0&&gc(Le,be,v,U),Xe&&ke.render(v),mc(T,v,U)}ne!==null&&V===0&&(Y.updateMultisampleRenderTarget(ne),Y.updateRenderTargetMipmap(ne)),X&&w.end(C),v.isScene===!0&&v.onAfterRender(C,v,U),xe.resetDefaultState(),B=-1,G=null,x.pop(),x.length>0?(E=x[x.length-1],Y.setTextureUnits(E.state.textureUnits),re===!0&&Ae.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,F!==null&&F.renderEnd()};function So(v,U,Q,X){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)Q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLightProbeGrid)E.pushLightProbeGrid(v);else if(v.isLight)E.pushLight(v),v.castShadow&&E.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(z)){X&&Ce.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ve);let Le=K.update(v),be=v.material;be.visible&&T.push(v,Le,be,Q,Ce.z,null,U)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(z))){let Le=K.update(v),be=v.material;if(X&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ce.copy(v.boundingSphere.center)):(Le.boundingSphere===null&&Le.computeBoundingSphere(),Ce.copy(Le.boundingSphere.center)),Ce.applyMatrix4(v.matrixWorld).applyMatrix4(ve)),Array.isArray(be)){let Fe=Le.groups;for(let Be=0,Ze=Fe.length;Be<Ze;Be++){let Qe=Fe[Be],Oe=be[Qe.materialIndex];Oe&&Oe.visible&&T.push(v,Le,Oe,Q,Ce.z,Qe,U)}}else be.visible&&T.push(v,Le,be,Q,Ce.z,null,U)}}let Ee=v.children;for(let Le=0,be=Ee.length;Le<be;Le++)So(Ee[Le],U,Q,X)}function mc(v,U,Q,X){let{opaque:q,transmissive:Ee,transparent:Le}=v;E.setupLightsView(Q),re===!0&&Ae.setGlobalState(C.clippingPlanes,Q),X&&g.viewport(Z.copy(X)),q.length>0&&fr(q,U,Q),Ee.length>0&&fr(Ee,U,Q),Le.length>0&&fr(Le,U,Q),g.buffers.depth.setTest(!0),g.buffers.depth.setMask(!0),g.buffers.color.setMask(!0),g.setPolygonOffset(!1)}function gc(v,U,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let Oe=ge.has("EXT_color_buffer_half_float")||ge.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new jt(1,1,{generateMipmaps:!0,type:Oe?bn:en,minFilter:mi,samples:Math.max(4,b.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Ee=E.state.transmissionRenderTarget[X.id],Le=X.viewport||Z;Ee.setSize(Le.z*C.transmissionResolutionScale,Le.w*C.transmissionResolutionScale);let be=C.getRenderTarget(),Fe=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(Ee),C.getClearColor(He),Ue=C.getClearAlpha(),Ue<1&&C.setClearColor(16777215,.5),C.clear(),Xe&&ke.render(Q);let Ze=C.toneMapping;C.toneMapping=yn;let Qe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),re===!0&&Ae.setGlobalState(C.clippingPlanes,X),fr(v,Q,X),Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee),ge.has("WEBGL_multisampled_render_to_texture")===!1){let Oe=!1;for(let lt=0,bt=U.length;lt<bt;lt++){let pt=U[lt],{object:dt,geometry:Ut,material:Ie,group:Gt}=pt;if(Ie.side===vn&&dt.layers.test(X.layers)){let it=Ie.side;Ie.side=$t,Ie.needsUpdate=!0,_c(dt,Q,X,Ut,Ie,Gt),Ie.side=it,Ie.needsUpdate=!0,Oe=!0}}Oe===!0&&(Y.updateMultisampleRenderTarget(Ee),Y.updateRenderTargetMipmap(Ee))}C.setRenderTarget(be,Fe,Be),C.setClearColor(He,Ue),Qe!==void 0&&(X.viewport=Qe),C.toneMapping=Ze}function fr(v,U,Q){let X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Ee=v.length;q<Ee;q++){let Le=v[q],{object:be,geometry:Fe,group:Be}=Le,Ze=Le.material;Ze.allowOverride===!0&&X!==null&&(Ze=X),be.layers.test(Q.layers)&&_c(be,U,Q,Fe,Ze,Be)}}function _c(v,U,Q,X,q,Ee){F!==null&&q.isNodeMaterial&&F.setObject(v,q),v.onBeforeRender(C,U,Q,X,q,Ee),v.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),q.onBeforeRender(C,U,Q,X,v,Ee),q.transparent===!0&&q.side===vn&&q.forceSinglePass===!1?(q.side=$t,q.needsUpdate=!0,C.renderBufferDirect(Q,U,X,q,v,Ee),q.side=fi,q.needsUpdate=!0,C.renderBufferDirect(Q,U,X,q,v,Ee),q.side=vn):C.renderBufferDirect(Q,U,X,q,v,Ee),v.onAfterRender(C,U,Q,X,q,Ee)}function pr(v,U,Q){U.isScene!==!0&&(U=rt);let X=O.get(v),q=E.state.lights,Ee=E.state.shadowsArray,Le=q.state.version,be=ue.getParameters(v,q.state,Ee,U,Q,E.state.lightProbeGridArray),Fe=ue.getProgramCacheKey(be),Be=X.programs;X.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Ze=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;X.envMap=te.get(v.envMap||X.environment,Ze),X.envMapRotation=X.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,Be===void 0&&(v.addEventListener("dispose",En),Be=new Map,X.programs=Be);let Qe=Be.get(Fe);if(Qe!==void 0){if(X.currentProgram===Qe&&X.lightsStateVersion===Le)return vc(v,be),Qe}else be.uniforms=ue.getUniforms(v),F!==null&&v.isNodeMaterial&&F.build(v,Q,be),v.onBeforeCompile(be,C),Qe=ue.acquireProgram(be,Fe),Be.set(Fe,Qe),X.uniforms=be.uniforms;let Oe=X.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Oe.clippingPlanes=Ae.uniform),vc(v,be),X.needsLights=Qu(v),X.lightsStateVersion=Le,X.needsLights&&(Oe.ambientLightColor.value=q.state.ambient,Oe.lightProbe.value=q.state.probe,Oe.sunLights.value=q.state.sun,Oe.sunLightShadows.value=q.state.sunShadow,Oe.directionalLights.value=q.state.directional,Oe.directionalLightShadows.value=q.state.directionalShadow,Oe.spotLights.value=q.state.spot,Oe.spotLightShadows.value=q.state.spotShadow,Oe.rectAreaLights.value=q.state.rectArea,Oe.ltc_1.value=q.state.rectAreaLTC1,Oe.ltc_2.value=q.state.rectAreaLTC2,Oe.pointLights.value=q.state.point,Oe.pointLightShadows.value=q.state.pointShadow,Oe.hemisphereLights.value=q.state.hemi,Oe.sunShadowMatrix.value=q.state.sunShadowMatrix,Oe.sunShadowCascade.value=q.state.sunShadowCascade,Oe.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Oe.spotLightMatrix.value=q.state.spotLightMatrix,Oe.spotLightMap.value=q.state.spotLightMap,Oe.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=E.state.lightProbeGridArray.length>0,X.currentProgram=Qe,X.uniformsList=null,Qe}function xc(v){if(v.uniformsList===null){let U=v.currentProgram.getUniforms();v.uniformsList=vs.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function vc(v,U){let Q=O.get(v);Q.outputColorSpace=U.outputColorSpace,Q.batching=U.batching,Q.batchingColor=U.batchingColor,Q.instancing=U.instancing,Q.instancingColor=U.instancingColor,Q.instancingMorph=U.instancingMorph,Q.skinning=U.skinning,Q.morphTargets=U.morphTargets,Q.morphNormals=U.morphNormals,Q.morphColors=U.morphColors,Q.morphTargetsCount=U.morphTargetsCount,Q.numClippingPlanes=U.numClippingPlanes,Q.numIntersection=U.numClipIntersection,Q.vertexAlphas=U.vertexAlphas,Q.vertexTangents=U.vertexTangents,Q.toneMapping=U.toneMapping}function Zu(v,U){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let Q=0,X=v.length;Q<X;Q++){let q=v[Q];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function Ku(v,U,Q,X,q){U.isScene!==!0&&(U=rt),Y.resetTextureUnits();let Ee=U.fog,Le=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,be=ne===null?C.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:tt.workingColorSpace,Fe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Be=te.get(X.envMap||Le,Fe),Ze=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Qe=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!Q.morphAttributes.position,lt=!!Q.morphAttributes.normal,bt=!!Q.morphAttributes.color,pt=yn;X.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(pt=C.toneMapping);let dt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Ut=dt!==void 0?dt.length:0,Ie=O.get(X),Gt=E.state.lights;if(re===!0&&(we===!0||v!==G)){let ft=v===G&&X.id===B;Ae.setState(X,v,ft)}let it=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Gt.state.version||Ie.outputColorSpace!==be||q.isBatchedMesh&&Ie.batching===!1||!q.isBatchedMesh&&Ie.batching===!0||q.isBatchedMesh&&Ie.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ie.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ie.instancing===!1||!q.isInstancedMesh&&Ie.instancing===!0||q.isSkinnedMesh&&Ie.skinning===!1||!q.isSkinnedMesh&&Ie.skinning===!0||q.isInstancedMesh&&Ie.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ie.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ie.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ie.instancingMorph===!1&&q.morphTexture!==null||Ie.envMap!==Be||X.fog===!0&&Ie.fog!==Ee||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==Ae.numPlanes||Ie.numIntersection!==Ae.numIntersection)||Ie.vertexAlphas!==Ze||Ie.vertexTangents!==Qe||Ie.morphTargets!==Oe||Ie.morphNormals!==lt||Ie.morphColors!==bt||Ie.toneMapping!==pt||Ie.morphTargetsCount!==Ut||!!Ie.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,Ie.__version=X.version);let on=Ie.currentProgram;it===!0&&(on=pr(X,U,q),F&&X.isNodeMaterial&&F.onUpdateProgram(X,on,Ie));let An=!1,Jn=!1,zi=!1,ut=on.getUniforms(),St=Ie.uniforms;if(g.useProgram(on.program)&&(An=!0,Jn=!0,zi=!0),X.id!==B&&(B=X.id,Jn=!0),Ie.needsLights){let ft=Zu(E.state.lightProbeGridArray,q);Ie.lightProbeGrid!==ft&&(Ie.lightProbeGrid=ft,Jn=!0)}if(An||G!==v){g.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ut.setValue(S,"projectionMatrix",v.projectionMatrix),ut.setValue(S,"viewMatrix",v.matrixWorldInverse);let Kn=ut.map.cameraPosition;Kn!==void 0&&Kn.setValue(S,Te.setFromMatrixPosition(v.matrixWorld)),b.logarithmicDepthBuffer&&ut.setValue(S,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ut.setValue(S,"isOrthographic",v.isOrthographicCamera===!0),G!==v&&(G=v,Jn=!0,zi=!0)}if(Ie.needsLights&&(Gt.state.sunShadowMap.length>0&&ut.setValue(S,"sunShadowMap",Gt.state.sunShadowMap,Y),Gt.state.directionalShadowMap.length>0&&ut.setValue(S,"directionalShadowMap",Gt.state.directionalShadowMap,Y),Gt.state.spotShadowMap.length>0&&ut.setValue(S,"spotShadowMap",Gt.state.spotShadowMap,Y),Gt.state.pointShadowMap.length>0&&ut.setValue(S,"pointShadowMap",Gt.state.pointShadowMap,Y)),q.isSkinnedMesh){ut.setOptional(S,q,"bindMatrix"),ut.setOptional(S,q,"bindMatrixInverse");let ft=q.skeleton;ft&&(ft.boneTexture===null&&ft.computeBoneTexture(),ut.setValue(S,"boneTexture",ft.boneTexture,Y))}q.isBatchedMesh&&(ut.setOptional(S,q,"batchingTexture"),ut.setValue(S,"batchingTexture",q._matricesTexture,Y),ut.setOptional(S,q,"batchingIdTexture"),ut.setValue(S,"batchingIdTexture",q._indirectTexture,Y),ut.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&ut.setValue(S,"batchingColorTexture",q._colorsTexture,Y));let Zn=Q.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&R.update(q,Q,on),(Jn||Ie.receiveShadow!==q.receiveShadow)&&(Ie.receiveShadow=q.receiveShadow,ut.setValue(S,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(St.envMapIntensity.value=U.environmentIntensity),St.dfgLUT!==void 0&&(St.dfgLUT.value=Tg()),Jn){if(ut.setValue(S,"toneMappingExposure",C.toneMappingExposure),Ie.needsLights&&ju(St,zi),Ee&&X.fog===!0&&me.refreshFogUniforms(St,Ee),me.refreshMaterialUniforms(St,X,se,ie,E.state.transmissionRenderTarget[v.id]),Ie.needsLights&&Ie.lightProbeGrid){let ft=Ie.lightProbeGrid;St.probesSH.value=ft.texture,St.probesMin.value.copy(ft.boundingBox.min),St.probesMax.value.copy(ft.boundingBox.max),St.probesResolution.value.copy(ft.resolution)}vs.upload(S,xc(Ie),St,Y)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(vs.upload(S,xc(Ie),St,Y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ut.setValue(S,"center",q.center),ut.setValue(S,"modelViewMatrix",q.modelViewMatrix),ut.setValue(S,"normalMatrix",q.normalMatrix),ut.setValue(S,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let ft=X.uniformsGroups;for(let Kn=0,Vi=ft.length;Kn<Vi;Kn++){let Mc=ft[Kn];oe.update(Mc,on),oe.bind(Mc,on)}}return on}function ju(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.sunLights.needsUpdate=U,v.sunLightShadows.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function Qu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,U,Q){let X=O.get(v);X.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),O.get(v.texture).__webglTexture=U,O.get(v.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){let Q=O.get(v);Q.__webglFramebuffer=U,Q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(v,U=0,Q=0){ne=v,J=U,V=Q;let X=null,q=!1,Ee=!1;if(v){let be=O.get(v);if(be.__useDefaultFramebuffer!==void 0){g.bindFramebuffer(S.FRAMEBUFFER,be.__webglFramebuffer),Z.copy(v.viewport),he.copy(v.scissor),pe=v.scissorTest,g.viewport(Z),g.scissor(he),g.setScissorTest(pe),B=-1;return}else if(be.__webglFramebuffer===void 0)Y.setupRenderTarget(v);else if(be.__hasExternalTextures)Y.rebindTextures(v,O.get(v.texture).__webglTexture,O.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Ze=v.depthTexture;if(be.__boundDepthTexture!==Ze){if(Ze!==null&&O.has(Ze)&&(v.width!==Ze.image.width||v.height!==Ze.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(v)}}let Fe=v.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ee=!0);let Be=O.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?X=Be[U][Q]:X=Be[U],q=!0):v.samples>0&&Y.useMultisampledRTT(v)===!1?X=O.get(v).__webglMultisampledFramebuffer:Array.isArray(Be)?X=Be[Q]:X=Be,Z.copy(v.viewport),he.copy(v.scissor),pe=v.scissorTest}else Z.copy(Se).multiplyScalar(se).floor(),he.copy(Ve).multiplyScalar(se).floor(),pe=at;if(Q!==0&&(X=k),g.bindFramebuffer(S.FRAMEBUFFER,X)&&g.drawBuffers(v,X),g.viewport(Z),g.scissor(he),g.setScissorTest(pe),q){let be=O.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,Q)}else if(Ee){let be=U;for(let Fe=0;Fe<v.textures.length;Fe++){let Be=O.get(v.textures[Fe]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Fe,Be.__webglTexture,Q,be)}}else if(v!==null&&Q!==0){let be=O.get(v.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,be.__webglTexture,Q)}B=-1};function yc(v){let U=O.get(v);return(U.__readFormat!==v.format||U.__readType!==v.type)&&(U.__readFormat=v.format,U.__readType=v.type,U.__formatReadable=b.textureFormatReadable(v.format),U.__typeReadable=b.textureTypeReadable(v.type)),U}this.readRenderTargetPixels=function(v,U,Q,X,q,Ee,Le,be=0){if(!(v&&v.isWebGLRenderTarget)){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe){g.bindFramebuffer(S.FRAMEBUFFER,Fe);try{let Be=v.textures[be],Ze=Be.format,Qe=Be.type;v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+be);let Oe=yc(Be);if(Oe.__formatReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Oe.__typeReadable===!1){We("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-X&&Q>=0&&Q<=v.height-q&&S.readPixels(U,Q,X,q,fe.convert(Ze),fe.convert(Qe),Ee)}finally{let Be=ne!==null?O.get(ne).__webglFramebuffer:null;g.bindFramebuffer(S.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(v,U,Q,X,q,Ee,Le,be=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=O.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Le!==void 0&&(Fe=Fe[Le]),Fe)if(U>=0&&U<=v.width-X&&Q>=0&&Q<=v.height-q){g.bindFramebuffer(S.FRAMEBUFFER,Fe);let Be=v.textures[be],Ze=Be.format,Qe=Be.type;v.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+be);let Oe=yc(Be);if(Oe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Oe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let lt=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,lt),S.bufferData(S.PIXEL_PACK_BUFFER,Ee.byteLength,S.STREAM_READ),S.readPixels(U,Q,X,q,fe.convert(Ze),fe.convert(Qe),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let bt=ne!==null?O.get(ne).__webglFramebuffer:null;g.bindFramebuffer(S.FRAMEBUFFER,bt);let pt=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Th(S,pt,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,lt),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ee),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(lt),S.deleteSync(pt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,Q=0){let X=Math.pow(2,-Q),q=Math.floor(v.image.width*X),Ee=Math.floor(v.image.height*X),Le=U!==null?U.x:0,be=U!==null?U.y:0;Y.setTexture2D(v,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,Le,be,q,Ee),g.unbindTexture()},this.copyTextureToTexture=function(v,U,Q=null,X=null,q=0,Ee=0){let Le,be,Fe,Be,Ze,Qe,Oe,lt,bt,pt=v.isCompressedTexture?v.mipmaps[Ee]:v.image;if(Q!==null)Le=Q.max.x-Q.min.x,be=Q.max.y-Q.min.y,Fe=Q.isBox3?Q.max.z-Q.min.z:1,Be=Q.min.x,Ze=Q.min.y,Qe=Q.isBox3?Q.min.z:0;else{let St=Math.pow(2,-q);Le=Math.floor(pt.width*St),be=Math.floor(pt.height*St),v.isDataArrayTexture?Fe=pt.depth:v.isData3DTexture?Fe=Math.floor(pt.depth*St):Fe=1,Be=0,Ze=0,Qe=0}X!==null?(Oe=X.x,lt=X.y,bt=X.z):(Oe=0,lt=0,bt=0);let dt=fe.convert(U.format),Ut=fe.convert(U.type),Ie;U.isData3DTexture?(Y.setTexture3D(U,0),Ie=S.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Ie=S.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Ie=S.TEXTURE_2D),g.activeTexture(S.TEXTURE0),g.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,U.flipY),g.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),g.pixelStorei(S.UNPACK_ALIGNMENT,U.unpackAlignment);let Gt=g.getParameter(S.UNPACK_ROW_LENGTH),it=g.getParameter(S.UNPACK_IMAGE_HEIGHT),on=g.getParameter(S.UNPACK_SKIP_PIXELS),An=g.getParameter(S.UNPACK_SKIP_ROWS),Jn=g.getParameter(S.UNPACK_SKIP_IMAGES);g.pixelStorei(S.UNPACK_ROW_LENGTH,pt.width),g.pixelStorei(S.UNPACK_IMAGE_HEIGHT,pt.height),g.pixelStorei(S.UNPACK_SKIP_PIXELS,Be),g.pixelStorei(S.UNPACK_SKIP_ROWS,Ze),g.pixelStorei(S.UNPACK_SKIP_IMAGES,Qe);let zi=v.isDataArrayTexture||v.isData3DTexture,ut=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){let St=O.get(v),Zn=O.get(U),ft=O.get(St.__renderTarget),Kn=O.get(Zn.__renderTarget);g.bindFramebuffer(S.READ_FRAMEBUFFER,ft.__webglFramebuffer),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Vi=0;Vi<Fe;Vi++)zi&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(v).__webglTexture,q,Qe+Vi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(U).__webglTexture,Ee,bt+Vi)),S.blitFramebuffer(Be,Ze,Le,be,Oe,lt,Le,be,S.DEPTH_BUFFER_BIT,S.NEAREST);g.bindFramebuffer(S.READ_FRAMEBUFFER,null),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(q!==0||v.isRenderTargetTexture||O.has(v)){let St=O.get(v),Zn=O.get(U);g.bindFramebuffer(S.READ_FRAMEBUFFER,I),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,W);for(let ft=0;ft<Fe;ft++)zi?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,St.__webglTexture,q,Qe+ft):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,St.__webglTexture,q),ut?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Zn.__webglTexture,Ee,bt+ft):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Zn.__webglTexture,Ee),q!==0?S.blitFramebuffer(Be,Ze,Le,be,Oe,lt,Le,be,S.COLOR_BUFFER_BIT,S.NEAREST):ut?S.copyTexSubImage3D(Ie,Ee,Oe,lt,bt+ft,Be,Ze,Le,be):S.copyTexSubImage2D(Ie,Ee,Oe,lt,Be,Ze,Le,be);g.bindFramebuffer(S.READ_FRAMEBUFFER,null),g.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ut?v.isDataTexture||v.isData3DTexture?S.texSubImage3D(Ie,Ee,Oe,lt,bt,Le,be,Fe,dt,Ut,pt.data):U.isCompressedArrayTexture?S.compressedTexSubImage3D(Ie,Ee,Oe,lt,bt,Le,be,Fe,dt,pt.data):S.texSubImage3D(Ie,Ee,Oe,lt,bt,Le,be,Fe,dt,Ut,pt):v.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Ee,Oe,lt,Le,be,dt,Ut,pt.data):v.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Ee,Oe,lt,pt.width,pt.height,dt,pt.data):S.texSubImage2D(S.TEXTURE_2D,Ee,Oe,lt,Le,be,dt,Ut,pt);g.pixelStorei(S.UNPACK_ROW_LENGTH,Gt),g.pixelStorei(S.UNPACK_IMAGE_HEIGHT,it),g.pixelStorei(S.UNPACK_SKIP_PIXELS,on),g.pixelStorei(S.UNPACK_SKIP_ROWS,An),g.pixelStorei(S.UNPACK_SKIP_IMAGES,Jn),Ee===0&&U.generateMipmaps&&S.generateMipmap(Ie),g.unbindTexture()},this.initRenderTarget=function(v){O.get(v).__webglFramebuffer===void 0&&Y.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Y.setTextureCube(v,0):v.isData3DTexture?Y.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Y.setTexture2DArray(v,0):Y.setTexture2D(v,0),g.unbindTexture()},this.resetState=function(){J=0,V=0,ne=null,g.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var yt=n=>n*Math.PI/180,Vt=(n,e,t)=>Math.min(t,Math.max(e,n));var xi=n=>(n=Vt(n,0,1),n*n*(3-2*n));var cr={thigh:.31,shin:.31,upperArm:.22,foreArm:.2},ru=new H,Un=new H,vi=new H,au=new H,ou=new H,Xl=new H,ql=new H,lu=new H,cu=new gt,hu=new kt,uu=new kt;function Yl(n,e,t,i,s,r,a){n.updateWorldMatrix(!0,!1),n.getWorldPosition(ru),Un.subVectors(t,ru);let l=Un.length();l<1e-4&&(Un.set(0,-1,0),l=1e-4),Un.divideScalar(l),l=Vt(l,Math.abs(i-s)+.001,i+s-.001);let c=Vt((i*i+l*l-s*s)/(2*i*l),-1,1),o=Math.sqrt(1-c*c),h=Math.PI-Math.acos(Vt((i*i+s*s-l*l)/(2*i*s),-1,1));vi.copy(r).addScaledVector(Un,-r.dot(Un)),vi.lengthSq()<1e-6&&(vi.set(0,0,1).addScaledVector(Un,-Un.z),vi.lengthSq()<1e-6&&vi.set(1,0,0)),vi.normalize(),au.copy(Un).multiplyScalar(c).addScaledVector(vi,o),ou.copy(vi).multiplyScalar(c).addScaledVector(Un,-o),Xl.copy(au).negate(),ql.copy(ou).multiplyScalar(a==="arm"?-1:1),lu.crossVectors(Xl,ql),cu.makeBasis(lu,Xl,ql),hu.setFromRotationMatrix(cu),n.parent.updateWorldMatrix(!0,!1),n.parent.getWorldQuaternion(uu),n.quaternion.copy(uu.invert()).multiply(hu),e.rotation.set(a==="arm"?-h:h,0,0)}var ho={},bu=(n,e)=>{ho[n]=e},It=null,Eg=new H(0,1,0),$l=new kt,Ag=new kt,Cg=new xn,Yy=new H;var du=(n,e,t=0)=>It.JT.thigh[n].rotation.set(-yt(e),0,yt(t*n)),fu=(n,e)=>It.JT.shin[n].rotation.x=yt(e),pu=(n,e,t=8)=>It.JT.sh[n].rotation.set(-yt(e),0,yt(t*n)),mu=(n,e)=>It.JT.el[n].rotation.x=-yt(e);function Rg(n){return n.updateWorldMatrix(!0,!1),n.getWorldQuaternion($l),$l.premultiply(Ag.copy(It.root.quaternion).invert()),Cg.setFromQuaternion($l,"XYZ").x}var Pg=(n,e=0)=>{It.JT.foot[n].rotation.x=-Rg(It.JT.shin[n])+yt(e)},gu=n=>{let e=yt(n);return n>=0?.072*Math.cos(e)+.1675*Math.sin(e)+.004:.072*Math.cos(e)+.0575*Math.sin(-e)+.004},$y=new H,Jy=new H;var Zy=new H,Ky=new H;var Ig=()=>({py:.69,hx:0,hz:0,pp:0,pyw:0,pr:0,lean:2,syw:0,sr:0,hd:-2,hyw:0,F:{1:[.085,.075,0,0,.12,0,1,0],"-1":[-.085,.075,0,0,-.12,0,1,0]},H:{1:[.19,.62,.03,.8,-.7,0],"-1":[-.19,.62,.03,-.8,-.7,0]}}),qe=(n,e)=>{let t=e?JSON.parse(JSON.stringify(e)):Ig();n(t);for(let i of[1,-1])for(;t.F[i].length<8;)t.F[i].push(0);return t},uo=(n,e,t)=>typeof n=="number"?n+(e-n)*t:Array.isArray(n)?n.map((i,s)=>uo(i,e[s]??i,t)):Object.fromEntries(Object.keys(n).map(i=>[i,uo(n[i],e[i],t)]));function Jl(n){let e=JSON.parse(JSON.stringify(n));e.hx*=-1,e.pr*=-1,e.pyw*=-1,e.syw*=-1,e.sr*=-1,e.hyw*=-1;let t=s=>[-s[0],s[1],s[2],s[3],-s[4],s[5],s[6],-(s[7]||0)],i=s=>[-s[0],s[1],s[2],-s[3],s[4],s[5]];return e.F={1:t(n.F[-1]),"-1":t(n.F[1])},e.H={1:i(n.H[-1]),"-1":i(n.H[1])},e}var Lg=n=>{let e=Math.abs(n);return e<=100?gu(n):gu(n>0?100:-100)*Math.max(0,1-(e-100)/70)},_u=new H,xu=new H,vu=new H,yu=new H;function wu(n){let{root:e,pelvis:t,spine:i,head:s}=It;e.position.set(It.base.x+n.hx,n.py,It.base.z+n.hz),t.rotation.set(yt(n.pp),yt(n.pyw),yt(n.pr)),i.rotation.set(yt(n.lean),yt(n.syw),yt(n.sr)),s.rotation.set(yt(n.hd),yt(n.hyw),0),e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.F[r];_u.set(a[0],Math.max(a[1],Lg(a[3])),a[2]),xu.set(a[4],a[5],a[6]),Yl(It.JT.thigh[r],It.JT.shin[r],_u,cr.thigh,cr.shin,xu,"leg"),Pg(r,a[3]),a[7]&&(It.JT.foot[r].rotation.z=yt(a[7]))}e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.H[r];vu.set(a[0],a[1],a[2]),yu.set(a[3],a[4],a[5]),Yl(It.JT.sh[r],It.JT.el[r],vu,cr.upperArm,cr.foreArm,yu,"arm")}}var Mu=new H;function Su(n){return{q:n.ALL.map(e=>e.quaternion.clone()),rq:n.root.quaternion.clone(),rp:n.root.position.clone()}}function Ng(n,e,t){return{q:n.q.map((i,s)=>i.clone().slerp(e.q[s],t)),rq:n.rq.clone().slerp(e.rq,t),rp:n.rp.clone().lerp(e.rp,t)}}function Dg(n,e){n.ALL.forEach((t,i)=>t.quaternion.copy(e.q[i])),n.root.quaternion.copy(e.rq),n.root.position.copy(e.rp)}function Ug(n,e,t,i){let s=[n.spine,n.neck,n.head,n.JT.sh[1],n.JT.sh[-1],n.JT.el[1],n.JT.el[-1]];(!n.sm||t)&&(n.sm=new Map);let r=1-Math.exp(-Math.max(e,0)/.055);s.forEach((a,l)=>{let c=n.sm.get(a);if(!c){c=a.quaternion.clone(),n.sm.set(a,c);return}l<3||i?(c.slerp(a.quaternion,r),a.quaternion.copy(c)):c.copy(a.quaternion)})}function Fg(n){n.ALL.forEach(e=>e.rotation.set(0,0,0)),n.root.position.set(n.base.x,0,n.base.z),n.root.quaternion.setFromAxisAngle(Eg,n.yaw),n.root.userData.air=0}ho.idle=n=>(du(1,3),du(-1,3),fu(1,6),fu(-1,6),pu(1,4,9),pu(-1,4,9),mu(1,14),mu(-1,14),It.spine.rotation.x=yt(3)+.01*Math.sin(n*1.6),It.head.rotation.x=yt(-2),{ground:"all"});function Ms(n,e,t,i,s,r,a){It=n,(n.mode!==e||a)&&(n.blend=n.last?{k:0,from:n.last}:null,n.mode=e),Fg(n);let c=(ho[e]||ho.idle)(t,i,s)||{};if(n.blend&&(n.blend.k+=r/.28,n.blend.k>=1?n.blend=null:Dg(n,Ng(n.blend.from,Su(n),xi(n.blend.k)))),n.spine.rotation.x+=.009*Math.sin(t*1.9+(n.role==="B"?1.3:0)),n.neck.rotation.x+=.006*Math.sin(t*1.9-.6),Ug(n,r,a||!r,!c.hold),n.root.updateMatrixWorld(!0),c.ground!=="none"){let o=1e9;for(let h of n.marks)c.ground==="feet"&&h.kind!=="foot"||c.ground==="knees"&&h.kind!=="knee"||(h.o.getWorldPosition(Mu),o=Math.min(o,Mu.y-h.r));n.root.position.y+=-o}return n.root.position.y+=(n.root.userData.air||0)+(c.lift||0),n.root.updateMatrixWorld(!0),c.post&&(c.post(),n.root.updateMatrixWorld(!0)),n.last=Su(n),c}var hr=.695,On=-.2,Di=n=>[n*.09,.05,On-.3,180,0,-1,1,0],Fn=(n,e=.06,t=1.52,i=.02)=>[n*e,t,i,n*.6,0,-.3],fo=n=>[n*.03,1.03,.22,n*.9,-.5,-.2],Tu=(n,e=.88,t=0,i=.56)=>[n*i,e,t,n*.3,-.4,-.6],Eu=n=>[n*.17,.045,.27,n*.7,.2,-.6],po=n=>{n.py=hr,n.hx=.026,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0]},Zl=n=>{n.H[1]=[.16,.045,On+.44,.6,.3,-.6],n.H[-1]=[-.16,.045,On+.44,-.6,.3,-.6]},mo=n=>{n.F[1]=[.09,.09,.41,-62,0,1,0,0],n.F[-1]=[-.09,.09,.41,-62,0,1,0,0]},Kl=n=>{n.F[1]=[.09,.045,-.28,180,0,-.4,1,0],n.F[-1]=[-.09,.045,-.28,180,0,-.4,1,0]},jl=n=>{n.F[1]=[.09,.045,-.76,180,0,-1,0,0],n.F[-1]=[-.09,.045,-.76,180,0,-1,0,0]},Ui={montana:qe(n=>{n.py=hr,n.H[1]=[.17,.61,.03,.8,-.7,0],n.H[-1]=[-.17,.61,.03,-.8,-.7,0],n.F[1][0]=.075,n.F[-1][0]=-.075}),montanaUp:qe(n=>{n.py=hr,n.H[1]=Fn(1),n.H[-1]=Fn(-1),n.hd=-10,n.lean=-1,n.F[1][0]=.075,n.F[-1][0]=-.075}),tree1:qe(n=>{po(n),n.F[1]=[-.005,.1,.03,28,1,.1,.35,0],n.H[1]=fo(1),n.H[-1]=fo(-1),n.lean=1}),tree2:qe(n=>{po(n),n.F[1]=[0,.26,.02,30,1,.1,.3,0],n.H[1]=fo(1),n.H[-1]=fo(-1),n.lean=1}),tree3:qe(n=>{po(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=Fn(1,.07,1.5),n.H[-1]=Fn(-1,.07,1.5),n.lean=0,n.hd=-6}),tree4:qe(n=>{po(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=Fn(1,.34,1.44),n.H[-1]=Fn(-1,.34,1.44),n.lean=0,n.hd=-8}),w1:qe(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=Fn(1,.07,1.36,.08),n.H[-1]=Fn(-1,.07,1.36,.08),n.lean=-3,n.hd=-12}),w1p:qe(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=[.03,.86,.22,.9,-.5,-.2],n.H[-1]=[-.03,.86,.22,-.9,-.5,-.2],n.lean=0,n.hd=-2}),w2:qe(n=>{n.py=.44,n.hx=.06,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=Tu(1,.86),n.H[-1]=Tu(-1,.86),n.lean=0,n.hyw=70,n.hd=-2}),w2b:qe(n=>{n.py=.44,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=[.42,.52,.02,.3,-.4,-.6],n.H[-1]=[-.06,1.26,0,-.6,.3,-.3],n.sr=-22,n.hx=.1,n.hyw=30,n.hd=-8}),w3:qe(n=>{n.py=.66,n.hx=.026,n.pp=84,n.lean=4,n.hd=-60,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.06,.7,-.6,0,0,-1,0,0],n.H[1]=[.08,.7,.86,.5,-.2,0],n.H[-1]=[-.08,.7,.86,-.5,-.2,0]}),quad:qe(n=>{n.py=.37,n.hz=On,n.lean=80,n.hd=-8,n.F[1]=Di(1),n.F[-1]=Di(-1),Zl(n)}),cat:qe(n=>{n.py=.39,n.hz=On,n.pp=-10,n.lean=88,n.hd=42,n.F[1]=Di(1),n.F[-1]=Di(-1),Zl(n)}),cow:qe(n=>{n.py=.35,n.hz=On,n.pp=10,n.lean=68,n.hd=-36,n.F[1]=Di(1),n.F[-1]=Di(-1),Zl(n)}),bird:qe(n=>{n.py=.37,n.hz=On,n.lean=82,n.hd=-12,n.hx=-.025,n.pr=2,n.F[-1]=Di(-1),n.F[1]=[.09,.4,On-.64,0,0,-1,0,0],n.H[1]=[.16,.045,On+.44,.6,.3,-.6],n.H[-1]=[-.11,.47,On+.86,-.3,1,0]}),dog:qe(n=>{n.py=.62,n.hz=-.08,n.lean=140,n.hd=-2,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]}),plank:qe(n=>{n.py=.36,n.hz=-.03,n.pp=72,n.lean=0,n.hd=-24,n.F[1]=[.09,.18,-.6,70,0,-1,0,0],n.F[-1]=[-.09,.18,-.6,70,0,-1,0,0],n.H[1]=[.16,.045,.4,.6,.3,-.6],n.H[-1]=[-.16,.045,.4,-.6,.3,-.6]}),prone:qe(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=0,n.hd=-8,jl(n),n.H[1]=[.22,.045,.27,.8,.4,-.2],n.H[-1]=[-.22,.045,.27,-.8,.4,-.2]}),cobra:qe(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-34,n.hd=-24,jl(n),n.H[1]=Eu(1),n.H[-1]=Eu(-1)}),cobra2:qe(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-52,n.hd=-30,jl(n),n.H[1]=[.17,.045,.21,.7,.2,-.6],n.H[-1]=[-.17,.045,.21,-.7,.2,-.6]}),sitL:qe(n=>{n.py=.1,n.hz=-.2,n.lean=-4,n.hd=4,mo(n),n.H[1]=[.21,.045,-.2,.6,.2,-.4],n.H[-1]=[-.21,.045,-.2,-.6,.2,-.4]}),fly:qe(n=>{n.py=.1,n.hz=-.12,n.lean=-2,n.hd=4,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.09,.16,.6,.3,-.5],n.H[-1]=[-.05,.09,.16,-.6,.3,-.5]}),fly2:qe(n=>{n.py=.1,n.hz=-.12,n.lean=32,n.hd=14,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.08,.17,.6,.3,-.5],n.H[-1]=[-.05,.08,.17,-.6,.3,-.5]}),fold1:qe(n=>{n.py=.1,n.hz=-.2,n.lean=34,n.hd=8,mo(n),n.H[1]=[.1,.14,.22,.5,.6,-.4],n.H[-1]=[-.1,.14,.22,-.5,.6,-.4]}),fold2:qe(n=>{n.py=.1,n.hz=-.2,n.lean=64,n.hd=18,mo(n),n.H[1]=[.1,.11,.37,.5,.6,-.4],n.H[-1]=[-.1,.11,.37,-.5,.6,-.4]}),twist:qe(n=>{n.py=.1,n.hz=-.2,n.lean=2,n.syw=-40,n.hyw=-24,n.hd=2,mo(n),n.H[1]=[.24,.045,-.36,.6,.3,-.5],n.H[-1]=[.12,.18,.08,-.4,-.4,.6]}),kneel:qe(n=>{n.py=.21,n.hz=-.25,n.lean=2,n.hd=2,Kl(n),n.H[1]=[.11,.3,-.02,.7,-.3,-.4],n.H[-1]=[-.11,.3,-.02,-.7,-.3,-.4]}),child:qe(n=>{n.py=.2,n.hz=-.25,n.lean=104,n.hd=16,Kl(n),n.H[1]=[.13,.045,.53,.6,.5,-.4],n.H[-1]=[-.13,.045,.53,-.6,.5,-.4]}),child2:qe(n=>{n.py=.2,n.hz=-.25,n.lean=108,n.hd=16,Kl(n),n.H[1]=[.17,.05,-.26,.6,.6,.2],n.H[-1]=[-.17,.05,-.26,-.6,.6,.2]}),sava:qe(n=>{n.py=.1,n.pp=-90,n.lean=0,n.hd=0,n.F[1]=[.15,.06,.61,-24,0,1,0,0],n.F[-1]=[-.15,.06,.61,-24,0,1,0,0],n.H[1]=[.3,.05,-.06,.6,.3,0],n.H[-1]=[-.3,.05,-.06,-.6,.3,0]}),hugknees:qe(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=12,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.11,.33,-.06,-.7,.2,-.3]}),squatDeep:qe(n=>{n.py=.36,n.hz=-.1,n.lean=22,n.hd=-6,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.07,.42,.3,.2,-.3,-.3],n.H[-1]=[-.07,.42,.3,-.2,-.3,-.3],n.pp=8}),squatPray:qe(n=>{n.py=.36,n.hz=-.1,n.lean=8,n.hd=-4,n.pp=8,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.05,.55,.3,.6,-.2,0],n.H[-1]=[-.05,.55,.3,-.6,-.2,0]}),fwdFold:qe(n=>{n.py=.68,n.hz=-.18,n.pp=80,n.lean=8,n.hd=30,n.F[1][0]=.09,n.F[-1][0]=-.09,n.H[1]=[.12,.2,.18,.6,.4,-.2],n.H[-1]=[-.12,.2,.18,-.6,.4,-.2]}),hamL:qe(n=>{n.py=.66,n.hz=-.16,n.pp=62,n.lean=8,n.hd=12,n.F[1]=[.09,.075,.38,-30,0,1,0,0],n.F[-1]=[-.09,.075,-.28,0,0,0,1,0],n.H[1]=[.1,.42,.34,.6,.2,-.2],n.H[-1]=[-.1,.42,.34,-.6,.2,-.2]}),lungeLow:qe(n=>{n.py=.5,n.hz=.1,n.lean=-2,n.hd=-6,n.F[1]=[.11,.075,.5,0,0,0,1,0],n.F[-1]=[-.11,.075,-.42,0,0,0,1,0],n.H[1]=Fn(1,.08,1.4,.04),n.H[-1]=Fn(-1,.08,1.4,.04)}),figure4:qe(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=10,n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.F[1]=[.02,.28,.2,0,1,1,0,0],n.H[1]=[.1,.3,-.04,.7,.2,-.3],n.H[-1]=[-.1,.32,.12,-.7,.2,-.3]}),kneetoChest:qe(n=>{n.py=.1,n.pp=-90,n.lean=20,n.hd=10,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.075,.6,-24,0,1,0,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.15,.05,-.06,-.6,.3,0]})},Og=new Set(["montana","montanaUp","tree1","tree2","tree3","tree4","w1","w1p","w2","w2b","w3","squatDeep","squatPray","fwdFold","hamL","lungeLow"]),Au=(n,e,t)=>{let i=uo(n,e,t),s=Math.sin(Math.PI*Vt(t,0,1));for(let r of[1,-1]){let a=Math.abs(e.H[r][1]-n.H[r][1]);a>.35&&(i.H[r][0]+=r*.2*s*Math.min(1,a/.7),i.H[r][3]+=r*.4*s)}return i},Bg=(n,e)=>{if(n.length===1)return Ui[n[0]];let t=e*(n.length-1),i=Math.min(n.length-2,Math.floor(t));return Au(Ui[n[i]],Ui[n[i+1]],xi(t-i))},kg=n=>{let e=n-Math.floor(n);return e<.5?xi(e*2):1-xi((e-.5)*2)};bu("pose",(n,e,t)=>{let i=e.dur||20,s=Math.min(t.ramp||2.4,i/3.2),r=xi(n/s)*(1-xi((n-(i-s))/s))*(t.k||1),a=Array.isArray(t.v)?t.v:[t.v],l=Bg(a,a.length>1?kg(n/(t.cyc||6)):0),c=t.base?Ui[t.base]:qe(()=>{});return!t.bi&&!(e.side>0)&&(l=Jl(l),c=Jl(c)),wu(Au(c,l,Vt(r,0,1.2))),{ground:Og.has(a[0])?"feet":"all"}});Object.assign(Ui,{quadStand:qe(n=>{n.py=hr,n.hx=.026,n.lean=2,n.hd=-2,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.03,.34,-.28,65,0,-.3,1,0],n.H[1]=[.1,.36,-.3,.6,.6,-1],n.H[-1]=[-.3,.95,.1,-.7,.2,.4]}),chestOpen:qe(n=>{n.py=hr,n.lean=-6,n.hd=-12,n.F[1]=[.1,.075,0,0,.12,0,1,0],n.F[-1]=[-.1,.075,0,0,-.12,0,1,0],n.H[1]=[.12,.66,-.26,.8,-.3,-.7],n.H[-1]=[-.12,.66,-.26,-.8,-.3,-.7]}),wgs1:qe(n=>{n.py=.46,n.hz=.1,n.lean=52,n.hd=-14,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.22,.045,.34,-.8,.3,-.5]}),wgs2:qe(n=>{n.py=.46,n.hz=.1,n.lean=40,n.hd=-14,n.syw=28,n.hyw=20,n.sr=0,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.3,1.2,0,-.8,.2,.2]}),burpSquat:qe(n=>{n.py=.38,n.hz=.02,n.lean=48,n.hd=-10,n.F[1]=[.12,.075,0,0,.3,0,1,0],n.F[-1]=[-.12,.075,0,0,-.3,0,1,0],n.H[1]=[.18,.045,.32,.6,.3,-.5],n.H[-1]=[-.18,.045,.32,-.6,.3,-.5]}),pikeLow:qe(n=>{n.py=.5,n.hz=.14,n.lean=118,n.hd=-34,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]})});Ui.quadStandR=Ui.quadStand;var yi=(n,e=3.7,t=.8,i=6)=>({az:n,el:i,dist:e,ty:t}),Cu={id:"yoga",title:"Yoga flow",tagline:"Equilibrio y calma \xB7 Esterilla",kind:"Yoga",summary:"Posturas cl\xE1sicas guiadas con respiraci\xF3n. Para soltar tensi\xF3n, ganar equilibrio y cerrar bien el d\xEDa.",icon:'<path d="M12 4a2 2 0 1 0 0 .01M12 8v5m0 0-4 6m4-6 4 6M6 11l6-1 6 1"/>',material:["Esterilla","Ropa c\xF3moda"],notice:"Mu\xE9vete dentro de tu rango: nunca fuerces ni rebotes y sal de la postura si notas dolor agudo. Si est\xE1s embarazada o tienes una lesi\xF3n o condici\xF3n m\xE9dica, consulta antes con un profesional. Son pautas generales.",setName:"Lado",rest:8,theme:{acc:"#9b7bff",hi:"#cbbcff",accText:"#140a33",bgA:"#0a0716",bgB:"#2a1a5e",rim:"#b9a5ff",floor:["#241f35","#1a1727"],musc:"#ff7a59",look:{top:10189823,topStyle:"tank",bottom:1907499,barefoot:!0},lookF:{top:15986428,topStyle:"bra",bottom:1907499,barefoot:!0}},exercises:[{name:"Monta\xF1a y respiraci\xF3n",coach:"mountain",area:"Postura y calma",mus:["core","quad","glute"],mode:"pose",cam:yi(-35,3.7,.85),prop:"mat",key:["Pies al ancho de la cadera, peso repartido.","Inhala subiendo los brazos; exhala baj\xE1ndolos.","Hombros relajados y mirada al frente."],errors:["Hombros tensos","Bloquear las rodillas","Aguantar la respiraci\xF3n"],levels:[{t:"Respiraci\xF3n 4\u20134",d:["Sube los brazos al inhalar durante 4 tiempos.","B\xE1jalos al exhalar otros 4."],sets:1,n:40,unit:"s",v:["montana","montanaUp"],cyc:8,bi:1},{t:"Respiraci\xF3n 5\u20135",d:["Alarga cada fase de la respiraci\xF3n a 5 tiempos.","Mant\xE9n las costillas recogidas."],sets:1,n:60,unit:"s",v:["montana","montanaUp"],cyc:10,bi:1},{t:"Respiraci\xF3n 6\u20136",d:["Respiraci\xF3n lenta: 6 tiempos al subir y 6 al bajar.","Siente todo el cuerpo alargarse."],sets:1,n:90,unit:"s",v:["montana","montanaUp"],cyc:12,bi:1}]},{name:"Postura del \xE1rbol",coach:"tree",area:"Equilibrio",mus:["glute","quad","core"],mode:"pose",sides:"Pierna",cam:yi(-35,3.7,.85),prop:"mat",key:["Fija la mirada en un punto.","Planta del pie sobre el tobillo o la pantorrilla, nunca en la rodilla.","Empuja el pie contra la pierna y crece hacia arriba."],errors:["Apoyar el pie en la rodilla","Cadera desplazada","Mirar al suelo"],levels:[{t:"Pie en el tobillo",d:["Apoya los dedos del pie junto al tobillo.","Manos juntas al pecho."],sets:2,n:20,unit:"s",v:"tree1",ramp:2},{t:"Pie en la pantorrilla",d:["Sube el pie a la cara interna de la pantorrilla.","Manos al pecho y respira lento."],sets:2,n:30,unit:"s",v:"tree2",ramp:2},{t:"Brazos arriba",d:["Pie en el muslo, lejos de la rodilla.","Eleva los brazos y abre las manos al cielo."],sets:2,n:40,unit:"s",v:["tree3","tree4"],cyc:12,ramp:2.5}]},{name:"Guerrero I y II",coach:"warrior",area:"Piernas y hombros",mus:["quad","glute","delt"],mode:"pose",sides:"Pierna",cam:yi(-20,4,.7),prop:"mat",key:["Rodilla delantera sobre el tobillo.","Pelvis estable y pecho abierto.","Hombros lejos de las orejas."],errors:["Rodilla hacia dentro","Zancada demasiado corta","Espalda arqueada"],levels:[{t:"Guerrero I suave",d:["Paso largo, rodilla delantera flexionada.","Brazos arriba y mirada al frente."],sets:2,n:25,unit:"s",v:["w1p","w1"],cyc:10,ramp:2},{t:"Guerrero II",d:["Gira el torso al frente, brazos en cruz.","Mira por encima de la mano delantera."],sets:2,n:30,unit:"s",v:"w2",ramp:2.5},{t:"Flujo I \u2192 II",d:["Alterna entre guerrero I y II con la respiraci\xF3n.","Mant\xE9n la zancada profunda."],sets:2,n:45,unit:"s",v:["w1","w2"],cyc:12,ramp:2.5}]},{name:"Perro, plancha y cobra",coach:"dogPlankCobra",area:"Fuerza y espalda",mus:["delt","core","back","tri"],mode:"pose",cam:yi(-70,4,.5,8),prop:"mat",key:["Empuja el suelo con las manos, dedos abiertos.","En el perro, lleva el pecho hacia los muslos.","En la cobra, codos pegados y hombros lejos de las orejas."],errors:["Hundir la cadera en la plancha","Hombros hacia las orejas","Cuello comprimido en la cobra"],levels:[{t:"Perro boca abajo",d:["Cadera arriba y atr\xE1s, rodillas flexibles.","Talones hacia el suelo sin forzar."],sets:2,n:20,unit:"s",v:"dog",bi:1,ramp:2.5},{t:"Perro \u2192 plancha",d:["Cambia entre perro y plancha con la respiraci\xF3n.","Cuerpo en l\xEDnea en la plancha."],sets:2,n:30,unit:"s",v:["dog","plank"],cyc:8,bi:1,ramp:2.5},{t:"Perro, plancha, cobra",d:["Flujo completo: perro, plancha y cobra.","Inhala al abrir pecho, exhala al volver."],sets:2,n:40,unit:"s",v:["dog","plank","cobra"],cyc:12,bi:1,ramp:2.5}]},{name:"Gato y vaca",coach:"catCow",area:"Movilidad de columna",mus:["back","core"],mode:"pose",cam:yi(-80,3.8,.4,8),prop:"mat",key:["Manos bajo los hombros y rodillas bajo la cadera.","Inhala abriendo el pecho (vaca).","Exhala redondeando toda la espalda (gato)."],errors:["Mover solo el cuello","Ir demasiado r\xE1pido","Codos bloqueados"],levels:[{t:"Lento y suave",d:["Un ciclo cada 8 segundos.","Mueve v\xE9rtebra a v\xE9rtebra."],sets:1,n:40,unit:"s",v:["cat","cow"],cyc:8,bi:1,ramp:2},{t:"Ritmo de respiraci\xF3n",d:["Sincroniza cada movimiento con una respiraci\xF3n completa."],sets:1,n:60,unit:"s",v:["cat","cow"],cyc:6,bi:1,ramp:2},{t:"Con pausas",d:["Mant\xE9n 2 respiraciones en cada extremo.","M\xE1s recorrido, m\xE1s control."],sets:1,n:80,unit:"s",v:["cat","cow"],cyc:8,bi:1,ramp:2}]},{name:"P\xE1jaro-perro",coach:"birdDog",area:"Core y equilibrio",mus:["core","glute","back"],mode:"pose",sides:"Lado",cam:yi(-80,4,.45,8),prop:"mat",key:["Caderas niveladas, sin girar.","Extiende brazo y pierna contrarios.","Mant\xE9n el cuello largo mirando al suelo."],errors:["Cadera girada","Arquear la zona lumbar","Elevar la pierna demasiado"],levels:[{t:"Solo pierna",d:["Estira solo la pierna atr\xE1s.","Mant\xE9n el abdomen firme."],sets:2,n:20,unit:"s",v:["quad","bird"],cyc:8,k:.85,ramp:2},{t:"Brazo y pierna",d:["Extiende brazo y pierna contrarios.","Pausa de 2 s arriba."],sets:2,n:30,unit:"s",v:["quad","bird"],cyc:8,ramp:2},{t:"Codo a rodilla",d:["Estira y luego lleva codo y rodilla.","Controla el movimiento."],sets:2,n:40,unit:"s",v:["quad","bird"],cyc:6,ramp:2}]},{name:"Pinza sentado y torsi\xF3n",coach:"seatedFold",area:"Isquios y columna",mus:["ham","back"],mode:"pose",cam:yi(-80,4,.35,8),prop:"mat",key:["Si\xE9ntate alto y alarga la espalda.","Pliega desde la cadera, no desde la lumbar.","Respira lento."],errors:["Encorvar la espalda","Tirar con los brazos","Contener la respiraci\xF3n"],levels:[{t:"Pinza suave",d:["Rodillas flexionadas si hace falta.","Manos hacia las piernas."],sets:1,n:30,unit:"s",v:["sitL","fold1"],cyc:10,bi:1,ramp:2},{t:"Pinza profunda",d:["Baja un poco m\xE1s sin redondear.","Mira hacia los pies."],sets:1,n:40,unit:"s",v:["sitL","fold2"],cyc:12,bi:1,ramp:2},{t:"Pinza y torsi\xF3n",d:["Alterna pinza y torsi\xF3n suave.","Cuida la respiraci\xF3n."],sets:2,n:30,unit:"s",v:["fold1","twist"],cyc:10,ramp:2,sides:"Lado"}]},{name:"Postura del ni\xF1o y relajaci\xF3n",coach:"childRelax",area:"Calma final",mus:["back"],mode:"pose",cam:yi(-70,4,.3,10),prop:"mat",key:["Respira hacia la espalda baja.","Suelta mand\xEDbula y hombros.","Cierra los ojos."],errors:["Aguantar el cuerpo","Apretar la mand\xEDbula"],levels:[{t:"Ni\xF1o",d:["Rodillas separadas, frente al suelo.","Brazos adelante o junto al cuerpo."],sets:1,n:40,unit:"s",v:["child"],bi:1,ramp:3},{t:"Ni\xF1o \u2192 relajaci\xF3n",d:["Pasa del ni\xF1o a tumbarte boca arriba."],sets:1,n:60,unit:"s",v:["child2","hugknees"],cyc:14,bi:1,ramp:3},{t:"Savasana",d:["Tumbado boca arriba, brazos y piernas sueltos.","Escanea el cuerpo y suelta cada zona."],sets:1,n:120,unit:"s",v:["hugknees","sava"],cyc:40,bi:1,ramp:4}]}]};var Lt=Math.PI,Ru={m:{shoulder:.162,hip:.078,chest:[.152,.215,.108],waist:[.118,.12,.092],pelvis:[.13,.098,.1],limb:1.1,head:[.084,.099,.092],pony:!1},f:{shoulder:.146,hip:.082,chest:[.132,.205,.1],waist:[.1,.12,.086],pelvis:[.138,.1,.102],limb:.98,head:[.079,.095,.088],pony:!0}},Pu={skin:13146748,hair:2826008,top:16742938,topStyle:"tank",bottom:1380622,bottomStyle:"shorts",socks:15987699,shoes:1841690,sole:15921129,barefoot:!1,gloves:0,band:0},Ql=new Map;function zg(n){return Ql.has(n)||Ql.set(n,new Yt({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{color:{value:new $e(16734768)},opacity:{value:0}},vertexShader:"attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }"})),Ql.get(n)}function Iu(n,e={x:0,z:0},t=0,i="m",s={}){let r=Ru[i]||Ru.m,a={...Pu,...s},l=(B,G)=>new rn({color:B,roughness:G}),c={skin:l(a.skin,.7),top:l(a.top,.62),bottom:l(a.bottom,.65),socks:l(a.socks,.7),shoes:l(a.shoes,.5),sole:l(a.sole,.6),hair:l(a.hair,.85),glove:l(a.gloves||14100029,.42),band:l(a.band||15921906,.6)},o=(B,G,Z,he=0)=>{let pe=new st(new li(B,Math.max(G,.001),8,18),Z);return pe.position.y=he,pe.castShadow=!0,pe},h=(B,G,Z,he,pe=0)=>{let He=new st(new Ci(1,28,20),he);return He.scale.set(B,G,Z),He.position.y=pe,He.castShadow=!0,He},p={},u=[],f={thigh:{},shin:{},foot:{},sh:{},el:{}},_=(B,G,Z,he,pe,He,Ue,je,ie,se)=>{let ye=new Ci(1,22,16,ie,se),ze=ye.attributes.uv,Se=new Float32Array(ze.count);for(let at=0;at<ze.count;at++)Se[at]=Math.pow(Math.max(0,Math.sin(Lt*ze.getY(at))),.55)*(se<Lt*1.5?Math.pow(Math.max(0,Math.sin(Lt*ze.getX(at))),.6):1);ye.setAttribute("aa",new Kt(Se,1));let Ve=new st(ye,zg(B));return Ve.scale.set(Z,he,pe),Ve.position.set(He,Ue,je),Ve.renderOrder=6,Ve.visible=!1,G.add(Ve),(p[B]||(p[B]=[])).push(Ve),Ve},y=[0,Lt],m=[Lt,Lt],d=B=>B>0?[Lt/2,Lt]:[-Lt/2,Lt],A=B=>B>0?[-Lt/2,Lt]:[Lt/2,Lt],L=[0,Lt*2],M=(B,G,Z,he,pe,He)=>{let Ue=new Pt;return Ue.position.set(G,Z,he),B.add(Ue),u.push({o:Ue,r:pe,kind:He}),Ue},T=new _t,E=new _t;T.add(E),n.add(T),E.add(h(...r.pelvis,c.bottom,0));let P=new _t;P.position.y=.03,E.add(P);let x=a.topStyle==="bra"?c.skin:c.top;P.add(h(...r.chest,c.top,.2+.07)),P.add(h(r.waist[0],r.waist[1],r.waist[2],x,.08)),P.add(o(.1,.1,x,.07));let w=new _t;w.position.y=.43,P.add(w),w.add(o(.04,.07,c.skin,.045));let C=new _t;C.position.y=.07,w.add(C),C.add(h(...r.head,c.skin,.105));let N=new st(new Ci(1,28,14,0,Lt*2,0,Lt*.45),c.hair);if(N.scale.set(r.head[0]*1.06,r.head[1]*1.08,r.head[2]*1.1),N.position.set(0,.112,-.006),N.rotation.x=-.2,N.castShadow=!0,C.add(N),r.pony){let B=o(.022,.1,c.hair,0);B.position.set(0,.095,-.112),B.rotation.x=.5,C.add(B);let G=h(.03,.03,.03,c.hair,0);G.position.set(0,.138,-.09),C.add(G)}let F=new rn({color:1380623,roughness:.35});for(let B of[-1,1]){let G=h(.0105,.0125,.008,F,.108);G.position.set(B*.032,.108,r.head[2]*.915),G.castShadow=!1,C.add(G);let Z=h(.019,.0045,.007,c.hair,.13);Z.position.set(B*.033,.13,r.head[2]*.9),Z.rotation.z=B*-.12,Z.castShadow=!1,C.add(Z);let he=h(.011,.02,.014,c.skin,.1);he.position.set(B*(r.head[0]-.002),.1,0),C.add(he)}let k=h(.014,.016,.018,c.skin,.098);if(k.position.z=r.head[2]+.006,C.add(k),a.band){let B=new st(new li(.014,r.head[0]*2.2,4,10),c.band);B.rotation.z=Lt/2,B.position.set(0,.14,.012),B.scale.set(1,1,1.4),C.add(B)}let I=a.topStyle==="tee"?c.top:c.skin,W=B=>{let G=new _t;G.position.set(B*r.shoulder,.385,0),P.add(G),G.add(o(.037*r.limb,.15,c.skin,-.11)),G.add(o(.047*r.limb,.05,I,-.045));let Z=new _t;Z.position.y=-.22,G.add(Z),Z.add(o(.031*r.limb,.14,c.skin,-.1));let he=new _t;he.position.y=-.2,Z.add(he),a.gloves?(he.add(h(.066,.075,.06,c.glove,-.06)),he.add(o(.039,.035,c.band,-.005))):(he.add(h(.032,.05,.03,c.skin,-.04)),a.band&&he.add(o(.034,.02,c.band,-.008))),M(he,0,-.03,0,.04,"hand"),M(G,0,0,0,.05,"body"),f.sh[B]=G,f.el[B]=Z,_("delt",G,.066,.074,.066,0,-.03,0,...L),_("bic",G,.05,.1,.05,0,-.12,0,...y),_("tri",G,.05,.1,.05,0,-.12,0,...m)},J=a.bottomStyle==="tights",V=B=>{let G=new _t;G.position.set(B*r.hip,-.01,0),E.add(G),G.add(o(.066*r.limb,.186,J?c.bottom:c.skin,-.155)),G.add(o(.08*r.limb,J?.18:.08,c.bottom,J?-.12:-.075));let Z=new _t;Z.position.y=-.31,G.add(Z),Z.add(o(.05*r.limb,.214,J?c.bottom:c.skin,-.155)),!J&&!a.barefoot&&Z.add(o(.054,.1,c.socks,-.215));let he=new _t;if(he.position.y=-.31,Z.add(he),a.barefoot){let pe=new st(new qt(.082,.05,.2),J?c.bottom:c.skin);pe.position.set(0,-.045,.05),pe.castShadow=!0,he.add(pe);let He=h(.044,.026,.03,J?c.bottom:c.skin,-.05);He.position.z=.15,he.add(He)}else{let pe=new st(new qt(.088,.052,.225),c.shoes);pe.position.set(0,-.03,.055),pe.castShadow=!0,he.add(pe);let He=new st(new qt(.092,.02,.232),c.sole);He.position.set(0,-.064,.056),he.add(He)}M(he,0,-.073,.16,0,"foot"),M(he,0,-.073,-.05,0,"foot"),M(G,0,-.31,.03,.062,"body"),M(Z,0,0,.03,.055,"knee"),f.thigh[B]=G,f.shin[B]=Z,f.foot[B]=he,_("quad",G,.09,.15,.09,0,-.13,0,...y),_("ham",G,.09,.15,.09,0,-.13,0,...m),_("abd",G,.094,.1,.088,0,-.08,0,...d(B)),_("add",G,.084,.13,.078,0,-.14,0,...A(B)),_("calf",Z,.062,.12,.064,0,-.12,-.004,...m),_("ankle",he,.066,.06,.066,0,-.03,.02,...L)};W(1),W(-1),V(1),V(-1),M(C,0,.1,0,.11,"body"),M(E,0,0,0,.1,"body"),M(P,0,.2,0,.1,"body"),_("glute",E,r.pelvis[0]*1.07,.108,r.pelvis[2]*1.08,0,-.01,0,...m),_("core",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...y),_("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...d(1)),_("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...A(1)),_("lumbar",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.1,0,...m),_("back",P,r.chest[0]*1,.13,r.chest[2]*.98,0,.32,0,...m),_("chest",P,r.chest[0]*1,.11,r.chest[2]*1,0,.33,0,...y);let ne=[E,P,w,C,...[1,-1].flatMap(B=>[f.thigh[B],f.shin[B],f.foot[B],f.sh[B],f.el[B]])];return{root:T,pelvis:E,spine:P,neck:w,head:C,JT:f,marks:u,ALL:ne,muscles:p,mats:c,base:e,yaw:t,variant:i,mode:null,blend:null,last:null}}function Lu(n,e){e.remove(n.root),n.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),Object.values(n.mats).forEach(t=>t.dispose())}function Nu(n,e){let t={...Pu,...e},i=n.mats;i.skin.color.set(t.skin),i.hair.color.set(t.hair),i.top.color.set(t.top),i.bottom.color.set(t.bottom),i.socks.color.set(t.socks),i.shoes.color.set(t.shoes),i.sole.color.set(t.sole),t.gloves&&i.glove.color.set(t.gloves),t.band&&i.band.color.set(t.band)}var Du={quad:"Cu\xE1driceps",ham:"Isquiotibiales",glute:"Gl\xFAteos",calf:"Gemelos",add:"Aductores",abd:"Gl\xFAteo medio",core:"Abdomen",obl:"Oblicuos",lumbar:"Lumbares",back:"Espalda",chest:"Pecho",delt:"Hombros",tri:"Tr\xEDceps",bic:"B\xEDceps",ankle:"Tobillos"};function Uu(n,e,t,i){for(let s in n.muscles){let r=n.muscles[s],a=r[0].material.uniforms,l=e&&e.includes(s)?t:0;a.opacity.value+=(l-a.opacity.value)*.16,i&&a.color.value.set(i);let c=a.opacity.value>.012;r.forEach(o=>o.visible=c)}}function Fu(n,e){let t=new $e(e.acc),i=t.clone().multiplyScalar(.35),s=new rn({color:9071178,roughness:.7}),r=new rn({color:2830136,roughness:.45,metalness:.5}),a=new rn({color:i,roughness:.85}),l=new rn({color:t,roughness:.8}),c=f=>(f.castShadow=!0,f.receiveShadow=!0,f),o=new _t;{let f=c(new st(new qt(.72,.016,1.9),a));f.position.y=.008;let _=c(new st(new qt(.74,.012,1.92),l));_.position.y=.006,o.add(_,f)}let h=new _t;{let f=c(new st(new qt(.44,.04,.42),s));f.position.y=.44,h.add(f);for(let[y,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let d=c(new st(new hs(.018,.018,.44,10),r));d.position.set(y*.19,.22,m*.18),h.add(d)}let _=c(new st(new qt(.44,.34,.03),s));_.position.set(0,.68,-.2),h.add(_)}let p=new _t;{let f=c(new st(new li(.018,1,4,12),r));f.rotation.z=Math.PI/2,f.position.set(0,2.05,0),p.add(f);for(let _ of[-1,1]){let y=c(new st(new hs(.03,.03,2.05,12),r));y.position.set(_*.5,1.025,0),p.add(y)}}let u={mat:o,chair:h,bar:p};return Object.values(u).forEach(f=>{f.visible=!1,n.add(f)}),{update(f,_,y){for(let[m,d]of Object.entries(u))d.visible=m===f;if(f&&u[f]){let m=y&&y.propAt||[0,0];u[f].position.set(_.base.x+m[0],0,_.base.z+m[1]),u[f].rotation.y=y&&y.propYaw||0}}}}function ec(n,e,t){let i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"),e,t);let s=new Hs(i);return s.colorSpace=Wt,s}var go=class{constructor(e,t){this.canvas=e,this.theme=t;try{this.renderer=new oo({canvas:e,antialias:!0,alpha:!0})}catch(s){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la p\xE1gina en un navegador actualizado.</div>'),s}let i=this.renderer;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Ri,i.toneMapping=Zs,i.toneMappingExposure=1.12,i.setClearColor(0,0),this.scene=new Bs,this.camera=new Bt(32,1,.1,80),this.scene.add(new Ys(12571391,1780258,.85)),this.key=new ds(16777215,2.6),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:18}),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,this.scene.add(this.key,this.key.target),this.rim=new ds(new $e(t.rim),1.3),this.scene.add(this.rim,this.rim.target),this.buildFloor(),this.props=Fu(this.scene,t),this.cam={az:-40,el:8,dist:3.5,ty:.8,tz:0},this.focus={x:0,z:0},this.scrollZ=0,this.avatar=null,this.look={},this.setAvatar("m",{})}buildFloor(){let e=this.theme,t=ec((r,a,l)=>{for(let o=0;o<8;o++)r.fillStyle=o%2?e.floor[0]:e.floor[1],r.fillRect(0,o*l/8,a,l/8+1);let c=r.getImageData(0,0,a,l);for(let o=0;o<c.data.length;o+=4){let h=(Math.random()-.5)*14;c.data[o]+=h,c.data[o+1]+=h,c.data[o+2]+=h}r.putImageData(c,0,0),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(0,l/2-3,a,6)},512,512);t.wrapS=t.wrapT=is,t.repeat.set(1,2),t.anisotropy=8,this.floorTex=t;let i=ec((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,"#fff"),c.addColorStop(.45,"#fff"),c.addColorStop(1,"#000"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);i.colorSpace="",this.floor=new st(new ci(16,16),new rn({map:t,alphaMap:i,transparent:!0,roughness:.95,metalness:0})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);let s=ec((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,e.acc+"cc"),c.addColorStop(.5,e.acc+"48"),c.addColorStop(1,e.acc+"00"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);this.glow=new st(new ci(3.6,3.6),new ai({map:s,transparent:!0,depthWrite:!1,blending:Js,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.004,this.scene.add(this.glow),this.ring=new st(new Ws(.8,.84,72),new ai({color:new $e(e.hi),transparent:!0,opacity:.5,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.006,this.scene.add(this.ring)}setTheme(e){for(let t of[this.floor,this.glow,this.ring])this.scene.remove(t),t.geometry.dispose(),t.material.map&&t.material.map.dispose(),t.material.dispose();this.theme=e,this.rim.color.set(e.rim),this.buildFloor()}setAvatar(e,t){this.look=t,this.avatar&&Lu(this.avatar,this.scene),this.avatar=Iu(this.scene,{x:0,z:0},0,e,t),this.avatar.root.traverse(i=>{i.isMesh&&!i.material.isShaderMaterial&&(i.castShadow=!0)})}recolor(e){this.look=e,Nu(this.avatar,e)}resize(){let e=this.canvas.parentElement,t=e.clientWidth,i=e.clientHeight;!t||!i||(this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}frame(e){let{dt:t}=e,i=this.avatar;i.base.x=0,i.base.z=0;let s=Ms(i,e.mode,e.t,e.ctx,e.level,Math.min(t,.05),!!e.snap);Uu(i,e.musclesOn?e.muscles:null,.82+.18*Math.sin(e.time/240),this.theme.musc),this.props.update(e.ex&&e.active?e.ex.prop:null,i,s);let r=0,a=0;s.track&&(r=i.root.position.x,a=i.root.position.z),e.snap&&(this.focus.x=r,this.focus.z=a);let l=Math.min(1,Math.min(t,.05)*3.2);this.focus.x+=(r-this.focus.x)*l,this.focus.z+=(a-this.focus.z)*l;let{x:c,z:o}=this.focus;this.floor.position.set(c,0,o),this.glow.position.set(c,.004,o),this.ring.position.set(c,.006,o),this.floorTex.offset.x=c*this.floorTex.repeat.x/16,this.floorTex.offset.y=-this.floorTex.repeat.y*o/16,this.key.position.set(c-3.2,5.2,o+3.6),this.key.target.position.set(c,0,o),this.rim.position.set(c+3.5,2.8,o-3.5),this.rim.target.position.set(c,0,o);let h=e.cam||{az:-38,el:7,dist:3.5,ty:.8},p=e.view&&e.view.az!==null?e.view.az:null,u=Math.sin(e.time/4200)*6,f=(p!==null&&e.active?p:h.az)+e.drag.az+u,_=this.camera.aspect,y=h.dist*(_<1.1?Math.pow(1.1/_,.62):1),m=this.cam,d=Math.min(1,Math.min(t,.05)*3.2);m.az+=(f-m.az)*d,m.el+=(h.el+e.drag.el-m.el)*d,m.dist+=(y-m.dist)*d,m.ty+=(h.ty-m.ty)*d,m.tz+=((h.tz||0)-m.tz)*d;let A=yt(m.az),L=yt(m.el);return this.camera.position.set(c+Math.sin(A)*Math.cos(L)*m.dist,m.ty+Math.sin(L)*m.dist,o+m.tz+Math.cos(A)*Math.cos(L)*m.dist),this.camera.lookAt(c,m.ty,o+m.tz),this.renderer.render(this.scene,this.camera),s}};var $={nose:0,shL:11,shR:12,elL:13,elR:14,wrL:15,wrR:16,hipL:23,hipR:24,knL:25,knR:26,anL:27,anR:28,heL:29,heR:30,ftL:31,ftR:32},sc=n=>n*180/Math.PI,Tt=(n,e)=>Math.hypot(n.x-e.x,n.y-e.y);function Vg(n,e,t){let i={x:n.x-e.x,y:n.y-e.y},s={x:t.x-e.x,y:t.y-e.y},r=Math.hypot(i.x,i.y)*Math.hypot(s.x,s.y);return r<1e-6?180:sc(Math.acos(Math.max(-1,Math.min(1,(i.x*s.x+i.y*s.y)/r))))}function Mt(n,e,t,i=.6){let s={x:n.x-e.x,y:n.y-e.y,z:((n.z||0)-(e.z||0))*i},r={x:t.x-e.x,y:t.y-e.y,z:((t.z||0)-(e.z||0))*i},a=Math.hypot(s.x,s.y,s.z)*Math.hypot(r.x,r.y,r.z);return a<1e-6?180:sc(Math.acos(Math.max(-1,Math.min(1,(s.x*r.x+s.y*r.y+s.z*r.z)/a))))}function ur(n,e){return Math.abs(sc(Math.atan2(Math.abs(e.x-n.x),Math.abs(e.y-n.y))))}var tc=class n{constructor(e,t,i){this.mc=e,this.beta=t,this.dc=i,this.x=null,this.dx=0}static alpha(e,t){return 1/(1+1/(2*Math.PI*e)/t)}filter(e,t,i){if(this.x===null)return this.x=e,e;let s=(e-this.x)/t/i,r=n.alpha(this.dc,t);this.dx+=(s-this.dx)*r;let a=this.mc+this.beta*Math.abs(this.dx),l=n.alpha(a,t);return this.x+=(e-this.x)*l,this.x}},nc=class{constructor({minCutoff:e=.8,beta:t=1.2,dCutoff:i=1}={}){this.cfg={minCutoff:e,beta:t,dCutoff:i},this.reset()}reset(){this.f=null,this.p=null,this.t=null}push(e,t=0){if(!this.f)return this.f=e.map(()=>["x","y","z"].map(()=>new tc(this.cfg.minCutoff,this.cfg.beta,this.cfg.dCutoff))),this.p=e.map(r=>({x:r.x,y:r.y,z:r.z||0,visibility:r.visibility})),this.t=t,this.p;let i=(t-this.t)/1e3;i>.001||(i=1/30),i>.5&&(i=.5),this.t=t;let s=Math.max(Tt(e[$.shL],e[$.hipL]),Tt(e[$.shR],e[$.hipR]),.001);for(let r=0;r<e.length;r++){let a=e[r],l=this.p[r],c=this.f[r];(a.visibility??1)<.3&&(l.visibility??1)<.3&&(c[0].x=a.x,c[1].x=a.y,c[2].x=a.z||0),l.x=c[0].filter(a.x,i,s),l.y=c[1].filter(a.y,i,s),l.z=c[2].filter(a.z||0,i,s),l.visibility=a.visibility}return this.p}},qn=class{constructor(e=500,t=.6){this.w=e,this.r=t,this.h=[]}push(e,t){for(this.h.push({t,f:e});this.h.length&&t-this.h[0].t>this.w;)this.h.shift();let i=this.h.length;if(i<4)return[];let s={};for(let r of this.h)for(let a of r.f)s[a]=(s[a]||0)+1;return Object.keys(s).filter(r=>s[r]/i>=this.r)}},ic=class{constructor(e){this.cfg=e,this.h=[],this.done=!1,this.rest=null,this.lo=e.lo,this.hi=e.hi}push(e,t){let i=this.cfg.hi-20;if(this.done||e<i){e<i&&(this.h.length=0);return}for(this.h.push({t,s:e});this.h.length&&t-this.h[0].t>1e3;)this.h.shift();if(this.h.length<8||t-this.h[0].t<900)return;let s=1/0,r=-1/0,a=0;for(let c of this.h)s=Math.min(s,c.s),r=Math.max(r,c.s),a+=c.s;if(r-s>6)return;this.rest=a/this.h.length;let l=this.cfg.hiDrop??12;this.hi=Math.min(this.cfg.hi+10,Math.max(this.cfg.hi-14,this.rest-l)),this.lo=this.hi-(this.cfg.hi-this.cfg.lo),this.done=!0}};function tn(n,e,t){let i=n[e],s=n[t],r=i.visibility??1,a=s.visibility??1;if(r>=.5&&a>=.5){let l=r*r,c=a*a,o=l+c;return{x:(i.x*l+s.x*c)/o,y:(i.y*l+s.y*c)/o,z:((i.z||0)*l+(s.z||0)*c)/o,visibility:Math.max(r,a)}}return r>=a?i:s}function wn(n){let e=Tt(n[$.shL],n[$.shR]),t=Math.max(Tt(tn(n,$.shL,$.shR),tn(n,$.hipL,$.hipR)),.001),i=e/t;return i<.35?"side":i>.55?"front":"oblique"}var Fi=class{constructor(e,t,i=500){this.lo=e,this.hi=t,this.minMs=i,this.reset()}reset(){this.phase="rest",this.min=1/0,this.t0=0,this.flags=new Set,this.reached=!1,this.count=0,this.good=0}flag(e){this.phase==="down"&&this.flags.add(e)}push(e,t){if(this.phase==="rest")return e<this.lo&&(this.phase="down",this.min=e,this.t0=t,this.flags=new Set),null;if(e<this.min&&(this.min=e),e>this.hi){this.phase="rest";let i=t-this.t0>=this.minMs,s=i?{min:this.min,flags:this.flags}:null;return i&&this.count++,s}return null}};function _o(n){let e={sh:tn(n,$.shL,$.shR),el:tn(n,$.elL,$.elR),wr:tn(n,$.wrL,$.wrR),hip:tn(n,$.hipL,$.hipR),kn:tn(n,$.knL,$.knR),an:tn(n,$.anL,$.anR),he:tn(n,$.heL,$.heR),ft:tn(n,$.ftL,$.ftR)};return e.vis=(e.sh.visibility+e.hip.visibility+e.kn.visibility+e.an.visibility)/4,e}var Bn="Col\xF3cate de lado, a 2-3 m, con el cuerpo entero a la vista.";function hn(n){return()=>{let e=new Fi(n.lo,n.hi,n.minMs||600),t=n.calib===!1?null:new ic(n),i=new qn,s=n.chain||_o,r={};return{reps:e,calib:t,push(a,l){let c=s(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:wn(a),calibrated:!t||t.done};if(!o.ok)return o;let h=n.measure(c,a,l,r);if(h===null)return o;o.metric=Math.round(h.signal),t&&(t.push(h.signal,l),o.calibrated=t.done,e.lo=t.lo,e.hi=t.hi);let p=i.push(n.flags?n.flags(c,h,a):[],l);for(let f of p)e.flag(f);let u=e.push(h.signal,l);e.phase==="down"&&(o.phase="down");for(let f of p)o.ev.push({type:"tip",key:f});if(u){let f=[...u.flags];n.good!==void 0&&u.min>n.good&&f.push(n.shallowKey||"shallow");let _=f.length===0;_&&e.good++,o.ev.push({type:"rep",good:_,issues:f,n:e.count})}return o}}}}var Dt={squat:{name:"Sentadilla",view:"de lado",wants:"side",hint:Bn,create:hn({lo:125,hi:160,good:105,measure:n=>({signal:Mt(n.hip,n.kn,n.an),lean:ur(n.hip,n.sh)}),flags:(n,e)=>{let t=[];return e.signal<125&&e.lean>58&&t.push("chest"),n.he&&n.ft&&n.ft.y-n.he.y>.07*Tt(n.hip,n.an)&&e.signal<140&&t.push("heels"),t}})},lunge:{name:"Zancada",view:"de lado",wants:"side",hint:Bn,create:()=>{let n=new Fi(125,158,700),e=new qn;return{reps:n,push(t,i){let s=Math.min((t[$.hipL].visibility+t[$.knL].visibility+t[$.anL].visibility)/3,(t[$.hipR].visibility+t[$.knR].visibility+t[$.anR].visibility)/3),r={ev:[],ok:s>=.4,view:wn(t),calibrated:!0};if(!r.ok)return r;let a=Mt(t[$.hipL],t[$.knL],t[$.anL]),l=Mt(t[$.hipR],t[$.knR],t[$.anR]),c=Math.min(a,l);r.metric=Math.round(c);let o={x:(t[$.shL].x+t[$.shR].x)/2,y:(t[$.shL].y+t[$.shR].y)/2},h={x:(t[$.hipL].x+t[$.hipR].x)/2,y:(t[$.hipL].y+t[$.hipR].y)/2},p=ur(h,o),u=[];c<140&&p>35&&u.push("upright");let f=e.push(u,i);for(let y of f)n.flag(y);let _=n.push(c,i);for(let y of f)r.ev.push({type:"tip",key:y});if(_){let y=[..._.flags];_.min>108&&y.push("shallow");let m=y.length===0;m&&n.good++,r.ev.push({type:"rep",good:m,issues:y,n:n.count})}return r}}}},pushup:{name:"Flexi\xF3n",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista y el m\xF3vil a la altura del suelo.",create:hn({lo:110,hi:155,good:95,minMs:600,measure:n=>({signal:Mt(n.sh,n.el,n.wr)}),flags:n=>{let e=[],t=Ss(n);return t>.09?e.push("sag"):t<-.09&&e.push("pike"),e}})},bridge:{name:"Puente de gl\xFAteos",view:"de lado",wants:"side",hint:"T\xFAmbate de lado respecto a la c\xE1mara, con hombros, cadera y rodillas a la vista.",create:hn({lo:22,hi:45,good:15,minMs:700,measure:n=>({signal:180-Vg(n.sh,n.hip,n.kn)}),flags:()=>[]})},plank:{name:"Plancha",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista.",isometric:!0,create:()=>{let n=0,e=null,t=0;return{reps:{count:0,good:0},get seconds(){return Math.floor(n/1e3)},push(i,s){let r=_o(i),a={ev:[],ok:r.vis>=.5,view:wn(i),calibrated:!0};if(!a.ok)return e=null,a;let l=e===null?0:Math.min(s-e,200);e=s;let c=Mt(r.sh,r.hip,r.an),o=Ss(r);a.metric=Math.round(c);let h=c>=163&&Math.abs(o)<.09;return h?(n+=l,t=0):(t+=l,t>1200&&a.ev.push({type:"tip",key:o>0?"sag":"pike"})),a.holding=h,a}}}},jacks:{name:"Jumping jacks",view:"de frente",wants:"front",hint:"Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista y espacio para abrir brazos y piernas.",create:()=>{let n="closed",e=0,t=!1,i=!1,s=!1,r=!1,a={count:0,good:0};return{reps:a,push(l,c){let o=(l[$.shL].visibility+l[$.shR].visibility+l[$.anL].visibility+l[$.anR].visibility)/4,h={ev:[],ok:o>=.5,view:wn(l),calibrated:!0};if(!h.ok)return h;let p=Math.max(Tt(l[$.shL],l[$.shR]),.001),u=Tt(l[$.anL],l[$.anR]),f=(l[$.wrL].y+l[$.wrR].y)/2<l[$.nose].y,_=(l[$.wrL].y+l[$.wrR].y)/2>(l[$.shL].y+l[$.shR].y)/2;i=u>p*1.7;let y=u<p*1.15;if(t=f,h.metric=Math.round(u/p*10)/10,n==="closed"&&(t||i)&&(n="open",e=c,s=!1,r=!1),n==="open"&&(t&&(s=!0),i&&(r=!0),_&&y&&(n="closed",c-e>250))){a.count++;let m=s&&r,d=[];r?s||d.push("arms"):d.push("legs"),m&&a.good++,h.ev.push({type:"rep",good:m,issues:d,n:a.count})}return h}}}}};function Ss(n){let e=n.an.x-n.sh.x,t=n.an.y-n.sh.y,i=Math.hypot(e,t);if(i<1e-6)return 0;let s=n.sh.y+(n.hip.x-n.sh.x)/(e||1e-6)*t;return(n.hip.y-s)/i}var bs={chest:"Pecho arriba, no te inclines tanto",heels:"Mant\xE9n los talones en el suelo",upright:"Tronco recto en la zancada",sag:"Cadera demasiado baja, aprieta el abdomen",pike:"Baja la cadera, cuerpo en l\xEDnea recta",shallow:"Baja un poco m\xE1s",legs:"Abre m\xE1s las piernas",arms:"Sube m\xE1s los brazos"},Ou=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32]],Oi=class{constructor(e){this.kind=e,this.def=Dt[e],this.sm=new nc,this.an=this.def.create(),this.lastTip={},this.log=[]}get reps(){return this.an.reps}push(e,t){let i=this.sm.push(e,t),s=this.an.push(i,t);return s.ev=s.ev.filter(r=>{if(r.type==="tip"){if(t-(this.lastTip[r.key]||-1e9)<6e3)return!1;this.lastTip[r.key]=t,r.msg=bs[r.key]}else r.type==="rep"&&(r.msg=r.issues.length?bs[r.issues[0]]:"\xA1Buena t\xE9cnica!");return!0}),s}};Object.assign(bs,{guard:"Sube la guardia: pu\xF1os a la altura de la barbilla",short:"Da un paso m\xE1s largo",hips:"Cadera nivelada, no la desplaces",kneeFoot:"No apoyes el pie en la rodilla: en el tobillo o la pantorrilla",legHigh:"No subas tanto la pierna, cadera estable",hipsTurn:"Gira desde el pecho, con la cadera quieta",trunk:"Tronco erguido",kneesTogether:"Rodillas juntas",pikeHips:"Mant\xE9n la cadera bien arriba",deeper:"Baja un poco m\xE1s",lower:"Baja m\xE1s la cadera",rise:"Sube del todo",tall:"Crece hacia arriba, espalda larga",kneeLow:"Rodilla de atr\xE1s m\xE1s cerca del suelo",fold:"Pliega m\xE1s desde la cadera",pose:"Entra en la postura y mantenla",hands:"Manos bajo los hombros y rodillas bajo la cadera",heel:"Lleva el tal\xF3n m\xE1s cerca del gl\xFAteo",knee:"Rodilla m\xE1s alta",bigger:"C\xEDrculos m\xE1s grandes",hipsStill:"Hombros quietos, mueve solo la cadera",neck:"No tires del cuello, mira al techo",plankLine:"Cuerpo en l\xEDnea recta en la plancha",floor:"Baja hasta el suelo",stand:"Ponte de pie del todo",wide:"Salta m\xE1s lejos hacia el lado"});function Yn(n){let e={nose:n[$.nose],shL:n[$.shL],shR:n[$.shR],elL:n[$.elL],elR:n[$.elR],wrL:n[$.wrL],wrR:n[$.wrR],hipL:n[$.hipL],hipR:n[$.hipR],knL:n[$.knL],knR:n[$.knR],anL:n[$.anL],anR:n[$.anR]};return e.sh=tn(n,$.shL,$.shR),e.hip=tn(n,$.hipL,$.hipR),e.an=tn(n,$.anL,$.anR),e.shW=Math.max(Tt(e.shL,e.shR),.001),e.torso=Math.max(Tt(e.sh,e.hip),.001),e.vis=(e.shL.visibility+e.shR.visibility+e.hipL.visibility+e.hipR.visibility)/4,e}function Bi(n){let e=_o(n);return e.torso=Math.max(Tt(e.sh,e.hip),.001),e.nose=n[$.nose],e.L={kn:n[$.knL],an:n[$.anL],wr:n[$.wrL],hip:n[$.hipL],sh:n[$.shL]},e.R={kn:n[$.knR],an:n[$.anR],wr:n[$.wrR],hip:n[$.hipR],sh:n[$.shR]},e}var ac=(...n)=>n.reduce((e,t)=>e+(t.visibility??1),0)/n.length;function Ht(n){return()=>{let e=0,t=null,i=0,s=n.chain||Bi;return{reps:{count:0,good:0},get seconds(){return Math.floor(e/1e3)},push(r,a){let l=s(r),c={ev:[],ok:l.vis>=(n.minVis??.5),view:wn(r),calibrated:!0};if(!c.ok)return t=null,c;let o=t===null?0:Math.min(a-t,200);t=a;let h=null,p=!1;for(let u of n.checks){let f=u(l,r,a);if(f&&f.ok){p=!0;break}f&&f.tip&&!h&&(h=f.tip)}return p?(e+=o,i=0):(i+=o,i>1500&&c.ev.push({type:"tip",key:h||"pose"})),c.holding=p,c}}}}function rc(n){return()=>{let e=new Fi(n.lo,n.hi,n.minMs||150),t=new Fi(n.lo,n.hi,n.minMs||150),i={count:0,good:0},s=new qn,r=n.chain||Bi;return{reps:i,push(a,l){let c=r(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:wn(a),calibrated:!0};if(!o.ok)return o;let[h,p]=n.measure(c,a);o.metric=Math.round(Math.min(h,p));let u=s.push(n.flags?n.flags(c,a):[],l);for(let f of u)o.ev.push({type:"tip",key:f});for(let[f,_]of[[e,h],[t,p]]){for(let m of u)f.flag(m);let y=f.push(_,l);if(y){i.count++;let m=[...y.flags];n.good!==void 0&&y.min>n.good&&m.push(n.shallowKey||"shallow");let d=m.length===0;d&&i.good++,o.ev.push({type:"rep",good:d,issues:m,n:i.count})}}return o}}}}function dr(n){return()=>{let e=null,t=0,i=0,s={count:0,good:0},r=new qn,a=n.chain||Yn;return{reps:s,push(l,c){let o=a(l),h={ev:[],ok:o.vis>=(n.minVis??.5),view:wn(l),calibrated:!0};if(!h.ok)return h;let p=n.measure(o,l);e===null?e=n.base===void 0?p:n.base:n.base===void 0&&(e+=(p-e)*.02);let u=p-e;h.metric=Math.round(u*100)/100;let f=r.push(n.flags?n.flags(o,l):[],c);for(let m of f)h.ev.push({type:"tip",key:m});let _=n.th,y=u>_?1:u<-_?-1:0;if(y!==0&&y!==t){if(t!==0&&c-i>(n.minMs||200)){s.count++;let m=f.length===0;m&&s.good++,h.ev.push({type:"rep",good:m,issues:f,n:s.count})}t=y,i=c}return h}}}}function Hg(n={}){return()=>{let e=null,t=!1,i=0,s={count:0,good:0};return{reps:s,push(r,a){let l=Yn(r),c={ev:[],ok:ac(l.anL,l.anR,l.hipL,l.hipR)>=.5,view:wn(r),calibrated:!0};if(!c.ok)return c;let o=Math.max(l.anL.y,l.anR.y);e===null||o>e?e=o:e+=(o-e)*.005;let h=(e-o)/l.torso;c.metric=Math.round(h*100);let p=n.th||.1;return!t&&h>p?(t=!0,i=a):t&&h<p*.4&&(t=!1,a-i>80&&a-i<1200&&(s.count++,s.good++,c.ev.push({type:"rep",good:!0,issues:[],n:s.count}))),c}}}}function Gg(){return()=>{let n={count:0,good:0},e=new qn(800,.7),t={L:{ext:0,t:0,armed:!0},R:{ext:0,t:0,armed:!0}};return{reps:n,push(i,s){let r=Yn(i),a={ev:[],ok:ac(r.shL,r.shR,r.wrL,r.wrR)>=.5,view:wn(i),calibrated:!0};if(!a.ok)return a;let l=(f,_)=>Math.hypot(f.x-_.x,f.y-_.y,((f.z||0)-(_.z||0))*.8)/r.torso,c=l(r.wrL,r.shL),o=l(r.wrR,r.shR);a.metric=Math.round(Math.max(c,o)*100);let h=f=>f.y>r.sh.y+.35*r.torso,p=[];t.L.armed&&t.R.armed&&(h(r.wrL)||h(r.wrR))&&p.push("guard");let u=e.push(p,s);for(let f of u)a.ev.push({type:"tip",key:f});for(let[f,_,y,m]of[["L",c,r.wrL,r.shL],["R",o,r.wrR,r.shR]]){let d=t[f];if(d.t===0){d.ext=_,d.t=s;continue}let A=Math.max(s-d.t,1)/1e3,L=(_-d.ext)/A,M=Math.abs(y.y-m.y)<.5*r.torso;d.armed&&L>2.2&&_>.62&&M?(d.armed=!1,n.count++,n.good++,a.ev.push({type:"rep",good:!0,issues:[],n:n.count})):!d.armed&&(_<.5||!M)&&(d.armed=!0),d.ext=_,d.t=s}return a}}}}function Wg(n){return()=>{let e={count:0,good:0},t={L:{a:null,sum:0},R:{a:null,sum:0}},i=new qn(1e3,.7);return{reps:e,push(s,r){let a=Yn(s),l={ev:[],ok:a.vis>=.5,view:wn(s),calibrated:!0};if(!l.ok)return l;let c=[];for(let o of["L","R"]){let{p:h,o:p,r:u}=n.pair(a,o);if(ac(h,p)<.5)continue;let f=Math.atan2(h.y-p.y,h.x-p.x),_=t[o];if(_.a!==null){let y=f-_.a;y>Math.PI&&(y-=2*Math.PI),y<-Math.PI&&(y+=2*Math.PI),_.sum+=y,Math.abs(_.sum)>=2*Math.PI&&(_.sum-=Math.sign(_.sum)*2*Math.PI,e.count++,e.good++,l.ev.push({type:"rep",good:!0,issues:[],n:e.count}))}_.a=f,n.minR&&u<n.minR&&c.push("bigger")}l.metric=e.count;for(let o of i.push(c,r))l.ev.push({type:"tip",key:o});return l}}}}var zu=n=>Math.min(Mt(n.L.hip,n.L.kn,n.L.an),Mt(n.R.hip,n.R.kn,n.R.an)),Xg=n=>Math.max(Mt(n.L.hip,n.L.kn,n.L.an),Mt(n.R.hip,n.R.kn,n.R.an)),qg=n=>Math.abs(n.sh.y-n.hip.y)<.45*n.torso&&Math.abs(n.hip.y-n.an.y)<.6*n.torso,Yg=n=>{let e=zu(n),t=Xg(n);return e>135?{ok:!1,tip:"lower"}:t<125&&n.L.kn.y<n.hip.y+.3*n.torso&&n.R.kn.y<n.hip.y+.3*n.torso?{ok:!1,tip:"short"}:{ok:e>=70}},Bu=n=>{let e=zu(n),t=Math.max(n.L.kn.y,n.R.kn.y);return e>130?{ok:!1,tip:"lower"}:t<n.hip.y+.45*n.torso?{ok:!1,tip:"kneeLow"}:{ok:!0}},ku=n=>n.sh.y<n.hip.y+.25*n.torso&&n.sh.y>n.hip.y-.35*n.torso&&n.wr.y>n.sh.y+.6*n.torso&&Math.abs(n.wr.x-n.sh.x)<.45*n.torso,$g=n=>Mt(n.hip,n.kn,n.an)>105?{ok:!1,tip:"deeper"}:n.he&&n.ft&&n.ft.y-n.he.y>.07*Tt(n.hip,n.an)?{ok:!1,tip:"heels"}:{ok:!0},Tn="Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",un="Col\xF3cate de lado, con el m\xF3vil cerca del suelo y el cuerpo entero a la vista.";Object.assign(Dt,{crunch:{name:"Abdominales",view:"de lado",wants:"side",hint:un,create:hn({lo:150,hi:162,good:142,hiDrop:6,minMs:400,measure:n=>({signal:Mt(n.sh,n.hip,n.kn)}),flags:n=>n.nose.visibility>.5&&Tt(n.nose,n.sh)<.32*n.torso?["neck"]:[],chain:Bi})},superman:{name:"Superman",view:"de lado",wants:"side",hint:un,create:hn({lo:90,hi:97,good:84,hiDrop:4,minMs:400,chain:Bi,measure:n=>({signal:100-(Math.max(0,n.hip.y-n.sh.y)+Math.max(0,n.hip.y-n.an.y))/n.torso*100})})},jump:{name:"Saltos",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista, pies incluidos.",label:"saltos",create:Hg()},guard:{name:"Guardia",view:"de frente",wants:"front",hint:Tn,isometric:!0,create:Ht({chain:Yn,checks:[n=>{let e=t=>t.y<n.sh.y+.25*n.torso&&t.y>n.nose.y-.2*n.torso;return e(n.wrL)&&e(n.wrR)?{ok:!0}:{ok:!1,tip:"guard"}}]})},footwork:{name:"Juego de pies",view:"de frente",wants:"front",hint:Tn,label:"pasos",create:dr({th:.08,measure:n=>n.shW/n.torso,flags:n=>n.wrL.y>n.sh.y+.4*n.torso&&n.wrR.y>n.sh.y+.4*n.torso?["guard"]:[]})},punches:{name:"Golpes",view:"de frente",wants:"front",hint:Tn+" Golpea hacia la c\xE1mara.",label:"golpes",create:Gg()},dodge:{name:"Esquivas",view:"de frente",wants:"front",hint:Tn,label:"esquivas",create:hn({chain:Yn,calib:!1,lo:.5,hi:.78,minMs:150,measure:(n,e,t,i)=>{i.baseY===void 0?i.baseY=n.nose.y:n.nose.y<i.baseY&&(i.baseY+=(n.nose.y-i.baseY)*.05);let s=Math.abs(n.nose.x-n.hip.x)/n.shW/.55,r=(n.nose.y-i.baseY)/n.torso/.22;return{signal:1-Math.max(s,r)}}})},mountain:{name:"Monta\xF1a",view:"de frente",wants:"front",hint:Tn,isometric:!0,create:Ht({chain:Yn,checks:[n=>Math.abs(n.sh.x-n.hip.x)<.2*n.torso&&n.hip.y<n.an.y-.9*n.torso?{ok:!0}:{ok:!1,tip:"tall"}]})},tree:{name:"\xC1rbol",view:"de frente",wants:"front",hint:Tn,isometric:!0,create:Ht({chain:Yn,checks:[n=>{let e=n.anL.y-n.anR.y;if(!(Math.abs(e)>.12*n.torso))return{ok:!1,tip:"pose"};let i=e>0?n.anR:n.anL,s=e>0?n.knL:n.knR;return Math.abs(i.y-s.y)<.1*n.torso?{ok:!1,tip:"kneeFoot"}:Math.abs(n.hipL.y-n.hipR.y)>.1*n.torso?{ok:!1,tip:"hips"}:{ok:!0}}]})},warrior:{name:"Guerrero",view:"de lado",wants:null,hint:"Col\xF3cate de lado o en diagonal a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",isometric:!0,create:Ht({checks:[Yg]})},dogPlankCobra:{name:"Perro, plancha y cobra",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>{let e=Mt(n.sh,n.hip,n.an);return n.hip.y<n.sh.y-.15*n.torso&&e>50&&e<115?{ok:!0}:null},n=>{let e=Mt(n.sh,n.hip,n.an);return Math.abs(n.sh.y-n.hip.y)<.4*n.torso&&e<160?{ok:!1,tip:Ss(n)>0?"sag":"pike"}:e>=160&&Math.abs(Ss(n))<.09?{ok:!0}:null},n=>n.sh.y<n.hip.y-.3*n.torso&&n.hip.y>n.an.y-.35*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},catCow:{name:"Gato y vaca",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>ku(n)?{ok:!0}:{ok:!1,tip:"hands"}]})},birdDog:{name:"P\xE1jaro-perro",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>{if(!ku(n))return{ok:!1,tip:"hands"};let e=n.L.an.y<n.R.an.y?n.L:n.R;return e.an.y<n.hip.y-.2*n.torso?{ok:!1,tip:"legHigh"}:e.an.y<n.hip.y+.45*n.torso&&Math.abs(e.an.x-n.hip.x)>.7*n.torso?{ok:!0}:{ok:!1,tip:"pose"}}]})},seatedFold:{name:"Pinza sentada",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>{if(!(n.hip.y>n.kn.y-.3*n.torso&&Math.abs(n.hip.y-n.an.y)<.5*n.torso))return{ok:!1,tip:"pose"};let t=Mt(n.sh,n.hip,n.kn);return t<125||t>150?{ok:!0}:{ok:!1,tip:"fold"}}]})},childRelax:{name:"Ni\xF1o y relajaci\xF3n",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>n.sh.y>n.an.y-.8*n.torso&&n.hip.y>n.an.y-.8*n.torso?{ok:!0}:{ok:!1,tip:"floor"}]})},armCircles:{name:"C\xEDrculos de brazos",view:"de frente",wants:"front",hint:Tn,label:"c\xEDrculos",create:Wg({pair:(n,e)=>({p:n["wr"+e],o:n["sh"+e],r:Tt(n["wr"+e],n["sh"+e])/n.torso}),minR:.55})},torsoRot:{name:"Rotaci\xF3n de tronco",view:"de frente",wants:"front",hint:Tn,label:"giros",create:dr({th:.12,base:0,measure:n=>((n.shL.z||0)-(n.shR.z||0))/n.torso,flags:n=>Tt(n.hipL,n.hipR)<.55*n.shW?["hipsTurn"]:[]})},hipCircles:{name:"C\xEDrculos de cadera",view:"de frente",wants:"front",hint:Tn,label:"c\xEDrculos",create:dr({th:.06,measure:n=>(n.hip.x-n.an.x)/n.torso,flags:n=>Math.abs(n.sh.x-n.hip.x)>.22*n.torso?["hipsStill"]:[]})},legSwing:{name:"Balanceo de piernas",view:"de lado",wants:null,hint:"Col\xF3cate de lado a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",label:"balanceos",create:dr({chain:Bi,th:.25,base:0,measure:n=>{let e=Math.abs(n.L.an.y-n.L.hip.y)<Math.abs(n.R.an.y-n.R.hip.y)?n.L:n.R;return(e.an.x-e.hip.x)/n.torso},flags:n=>ur(n.hip,n.sh)>22?["trunk"]:[]})},wgs:{name:"Estocada con rotaci\xF3n",view:"de lado",wants:null,hint:Bn,isometric:!0,create:Ht({checks:[Bu]})},deepSquat:{name:"Sentadilla profunda",view:"de lado",wants:"side",hint:Bn,isometric:!0,create:Ht({checks:[$g]})},quadStand:{name:"Cu\xE1driceps de pie",view:"de lado",wants:"side",hint:Bn,isometric:!0,create:Ht({checks:[n=>(n.L.an.y<n.R.an.y?n.L:n.R).an.y>n.hip.y+.5*n.torso?{ok:!1,tip:"heel"}:Math.abs(n.L.kn.x-n.R.kn.x)>.3*n.torso?{ok:!1,tip:"kneesTogether"}:{ok:!0}]})},fwdFold:{name:"Flexi\xF3n adelante",view:"de lado",wants:"side",hint:Bn,isometric:!0,create:Ht({checks:[n=>Mt(n.sh,n.hip,n.kn)<95?{ok:!0}:{ok:!1,tip:"fold"}]})},chestOpen:{name:"Apertura de pecho",view:"de frente",wants:"front",hint:Tn,isometric:!0,create:Ht({chain:Yn,checks:[n=>n.wrL.y>n.hip.y-.1*n.torso&&n.wrR.y>n.hip.y-.1*n.torso&&Tt(n.wrL,n.wrR)<.6*n.shW?{ok:!0}:{ok:!1,tip:"pose"}]})},figure4:{name:"Figura 4",view:"de lado",wants:"side",hint:un,isometric:!0,create:Ht({checks:[n=>qg(n)&&Math.min(n.L.kn.y,n.R.kn.y)<n.hip.y-.25*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},hipFlexor:{name:"Flexor de cadera",view:"de lado",wants:"side",hint:Bn,isometric:!0,create:Ht({checks:[n=>{let e=Bu(n);return e.ok&&ur(n.hip,n.sh)>30?{ok:!1,tip:"trunk"}:e}]})},chairDip:{name:"Fondos en silla",view:"de lado",wants:"side",hint:Bn,create:hn({lo:125,hi:158,good:105,minMs:500,measure:n=>({signal:Mt(n.sh,n.el,n.wr)})})},pikePush:{name:"Flexi\xF3n en pica",view:"de lado",wants:"side",hint:un,create:hn({lo:125,hi:158,good:100,minMs:500,measure:n=>({signal:Mt(n.sh,n.el,n.wr),hip:Mt(n.sh,n.hip,n.an)}),flags:(n,e)=>e.hip>135?["pikeHips"]:[]})},stepUp:{name:"Subidas a la silla",view:"de lado",wants:null,hint:Bn,label:"subidas",create:hn({calib:!1,lo:55,hi:85,good:40,minMs:300,shallowKey:"rise",chain:Bi,measure:(n,e,t,i)=>(i.base===void 0||n.hip.y>i.base?i.base=n.hip.y:i.base+=(n.hip.y-i.base)*.003,{signal:100-(i.base-n.hip.y)/n.torso*100})})},legRaise:{name:"Elevaci\xF3n de piernas",view:"de lado",wants:"side",hint:un,create:hn({lo:140,hi:163,good:115,hiDrop:8,minMs:500,measure:n=>({signal:Mt(n.sh,n.hip,n.kn)})})},highKnees:{name:"Rodillas altas",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"rodillas",create:rc({lo:50,hi:70,good:30,shallowKey:"knee",minMs:100,measure:n=>[(n.L.kn.y-n.L.hip.y)/n.torso*100,(n.R.kn.y-n.R.hip.y)/n.torso*100]})},mountainClimber:{name:"Mountain climbers",view:"de lado",wants:"side",hint:un,label:"rodillas",create:rc({lo:135,hi:165,good:115,shallowKey:"knee",minMs:100,measure:n=>[Tt(n.L.kn,n.L.sh)/n.torso*100,Tt(n.R.kn,n.R.sh)/n.torso*100],flags:n=>Math.abs(Ss(n))>.14?["plankLine"]:[]})},skater:{name:"Patinador",view:"de frente",wants:"front",hint:Tn,label:"saltos",create:dr({th:.6,measure:n=>n.hip.x/n.shW,minMs:250})},burpee:{name:"Burpees",view:"de lado",wants:"side",hint:un,label:"burpees",create:hn({calib:!1,lo:120,hi:220,good:90,shallowKey:"floor",minMs:700,chain:Bi,measure:n=>({signal:(n.an.y-n.sh.y)/n.torso*100})})},buttKicks:{name:"Talones al gl\xFAteo",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"talones",create:rc({lo:130,hi:160,good:105,shallowKey:"heel",minMs:100,measure:n=>[Tt(n.L.an,n.L.hip)/n.torso*100,Tt(n.R.an,n.R.hip)/n.torso*100]})}});var vo="mp/",xo=null;function oc(){return window.Pose?Promise.resolve():(xo||(xo=new Promise((n,e)=>{let t=document.createElement("script");t.src=vo+"pose.js",t.onload=n,t.onerror=()=>{xo=null,e(new Error("lib"))},document.head.appendChild(t)})),xo)}function Vu({stageEl:n,say:e,getExercise:t}){let i=document.createElement("div");i.id="cam",i.hidden=!0,i.innerHTML=`
    <div class="cam-h"><b>Coach de c\xE1mara</b><button class="cam-x" aria-label="Cerrar c\xE1mara">\xD7</button></div>
    <div class="cam-ask">
      <p>Usa la c\xE1mara para contar tus repeticiones y avisarte de la t\xE9cnica.</p>
      <p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p>
      <button class="cam-go">Activar c\xE1mara</button>
    </div>
    <div class="cam-v"><video playsinline muted></video><canvas></canvas></div>
    <div class="cam-s"></div>
    <div class="cam-stats"><div><b class="cr">0</b><small class="cl">reps</small></div><div><b class="cs">\u2013</b><small>t\xE9cnica</small></div></div>`,n.appendChild(i);let s=V=>i.querySelector(V),r=s("video"),a=s("canvas"),l=a.getContext("2d"),c=s(".cam-s"),o=null,h=null,p=null,u=null,f=!1,_=!1,y=0,m=0,d=0,A=0,L=0,M=1,T={n:0,ms:0,t0:0},E="closed",P=V=>{E=V,i.dataset.mode=V,i.hidden=V==="closed"},x=(V,ne="")=>{c.textContent=V,c.className="cam-s "+ne},w=()=>{if(!h)return;let V=Dt[h.kind].isometric;s(".cr").textContent=V?h.an.seconds:h.reps.count,s(".cl").textContent=V?"seg. bien":Dt[h.kind].label||"reps",s(".cs").textContent=!V&&h.reps.count?Math.round(h.reps.good/h.reps.count*100)+"%":"\u2013"};function C(V){o=V,h=V&&V.coach&&Dt[V.coach]?new Oi(V.coach):null,A=0,w(),E==="run"&&(h?x(Dt[h.kind].hint):x("Este ejercicio no tiene an\xE1lisis por c\xE1mara.","warn"))}function N(V){let ne=r.videoWidth||640,B=r.videoHeight||480;if(a.width!==ne&&(a.width=ne,a.height=B),l.clearRect(0,0,ne,B),!!V){l.lineWidth=Math.max(3,ne/140),l.lineCap="round",l.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#fff";for(let[G,Z]of Ou)V[G].visibility<.4||V[Z].visibility<.4||(l.beginPath(),l.moveTo(V[G].x,V[G].y),l.lineTo(V[Z].x,V[Z].y),l.stroke());l.fillStyle="#fff";for(let G of[$.shL,$.shR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR,$.elL,$.elR,$.wrL,$.wrR])V[G].visibility<.4||(l.beginPath(),l.arc(V[G].x,V[G].y,Math.max(3,ne/120),0,7),l.fill())}}function F(V){if(_=!1,!f)return;let ne=r.videoWidth,B=r.videoHeight,G=V.poseLandmarks;if(!G||!h){N(null),h&&++A>25&&x("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista.","warn");return}A=0;let Z=G.map(Ue=>({x:Ue.x*ne,y:Ue.y*B,z:(Ue.z||0)*ne,visibility:Ue.visibility??1})),he=performance.now();T.t0&&(T.ms+=he-T.t0,T.n++,M===1&&T.n===40&&T.ms/T.n>110&&(M=0,p.setOptions({modelComplexity:0})));let pe=h.push(Z,he);if(N(h.sm.p||Z),!pe.ok){x(Dt[h.kind].hint,"warn");return}let He=Dt[h.kind];if(He.wants&&pe.view&&pe.view!==He.wants&&pe.view!=="oblique"){if(++L>20){x(He.wants==="side"?"G\xEDrate: col\xF3cate de lado respecto a la c\xE1mara.":"G\xEDrate: col\xF3cate de frente a la c\xE1mara.","warn");return}}else L=0;if(!pe.calibrated){x("Calibrando\u2026 qu\xE9date quieto un segundo en la posici\xF3n inicial.",""),w();return}for(let Ue of pe.ev)Ue.type==="rep"?(x(Ue.good?`${Ue.n} \xB7 \xA1Buena t\xE9cnica!`:`${Ue.n} \xB7 ${Ue.msg}`,Ue.good?"ok":"warn"),!Ue.good&&performance.now()-d>5e3&&(d=performance.now(),e(Ue.msg))):Ue.type==="tip"&&(x(Ue.msg,"warn"),performance.now()-d>5e3&&(d=performance.now(),e(Ue.msg)));pe.holding===!0&&x("Muy bien, mant\xE9n la posici\xF3n","ok"),w()}function k(){if(!f)return;let V=()=>{if(!f)return;let ne=performance.now();!_&&r.readyState>=2&&ne-m>55&&(_=!0,m=ne,T.t0=ne,p.send({image:r}).catch(()=>{_=!1})),r.requestVideoFrameCallback?r.requestVideoFrameCallback(V):y=requestAnimationFrame(V)};V()}async function I(){P("loading"),x("Cargando el modelo de detecci\xF3n (unos 15 MB, solo la primera vez)\u2026");try{await oc(),p||(p=new window.Pose({locateFile:V=>vo+V}),p.setOptions({modelComplexity:M,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),p.onResults(F)),u=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),r.srcObject=u,await r.play();try{localStorage.setItem("forja:cam","1")}catch{}f=!0,P("run"),C(o),h&&x(Dt[h.kind].hint),k()}catch(V){W(!0),P("error");let ne=V&&V.name;ne==="NotAllowedError"||ne==="SecurityError"?x("No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.","warn"):ne==="NotFoundError"||ne==="OverconstrainedError"?x("No se ha encontrado ninguna c\xE1mara en este dispositivo.","warn"):V&&V.message==="lib"?x("El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.","warn"):x("No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo.","warn")}}function W(V){f=!1,_=!1,cancelAnimationFrame(y),u&&u.getTracks().forEach(ne=>ne.stop()),u=null,r.srcObject=null,N(null),V||P("closed")}function J(){if(E!=="closed")return;let V=!1;try{V=localStorage.getItem("forja:cam")==="1"}catch{}o=t(),h=o&&o.coach&&Dt[o.coach]?new Oi(o.coach):null,w(),V?I():P("ask")}return s(".cam-go").onclick=I,s(".cam-x").onclick=()=>W(),window.addEventListener("pagehide",()=>W()),{toggle(){E==="closed"?J():W()},setExercise:C,isOpen:()=>E!=="closed"}}var ki;function Ts(n,e=660,t=.12,i="sine",s=.16){if(n.sound)try{ki=ki||new(window.AudioContext||window.webkitAudioContext);let r=ki.createOscillator(),a=ki.createGain();r.type=i,r.frequency.value=e,a.gain.value=s,r.connect(a),a.connect(ki.destination),r.start(),a.gain.exponentialRampToValueAtTime(8e-4,ki.currentTime+t),r.stop(ki.currentTime+t)}catch{}}function lc(n,e){e.forEach(([t,i,s])=>setTimeout(()=>Ts(n,t,s||.22,"triangle",.2),i))}var ws;function Jg(){if(ws!==void 0)return ws;try{let n=speechSynthesis.getVoices();if(!n.length)return null;ws=n.find(e=>e.lang==="es-ES"&&/natural|google|premium|enhanced/i.test(e.name))||n.find(e=>e.lang==="es-ES")||n.find(e=>e.lang.startsWith("es"))||null}catch{ws=null}return ws}function $n(n,e){if(!(!n.voice||!window.speechSynthesis))try{speechSynthesis.cancel();let t=new SpeechSynthesisUtterance(e);t.lang="es-ES",t.rate=1;let i=Jg();i&&(t.voice=i),speechSynthesis.speak(t)}catch{}}function cc(){try{speechSynthesis.cancel()}catch{}}function Es(){let n=document.documentElement;try{!document.fullscreenElement&&n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}catch{}}function hc(){document.fullscreenElement?document.exitFullscreen():Es()}async function Hu(){try{navigator.wakeLock&&await navigator.wakeLock.request("screen")}catch{}}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{ws=void 0})}catch{}var yo={squat:{joints:[["hipL","knL","anL","L"],["hipR","knR","anR","R"]],metric:"Flexi\xF3n de rodilla",peak:"Profundidad",peakHint:"menos grados = m\xE1s profundo",speed:"Velocidad de subida"}},uc=n=>!!yo[n],Zg=[[$.shL,$.elL],[$.elL,$.wrL],[$.shR,$.elR],[$.elR,$.wrR],[$.hipL,$.knL],[$.knL,$.anL],[$.hipR,$.knR],[$.knR,$.anR],[$.anL,$.ftL],[$.anR,$.ftR]],Kg=[$.shL,$.shR,$.elL,$.elR,$.wrL,$.wrR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR],jg="#ff8a5b",Gu=n=>{let e=Math.max(0,Math.round(n/1e3));return`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`},Wu=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]);function Xu({say:n,getExercise:e,getTarget:t,onClose:i}){let s=document.createElement("div");s.id="mir",s.hidden=!0,s.innerHTML=`
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
    <section class="m-sum" hidden></section>`,document.body.appendChild(s);let r=S=>s.querySelector(S),a=r(".mv"),l=r(".mc"),c=l.getContext("2d"),o="closed",h=null,p=null,u=null,f=null,_=null,y=!1,m=!1,d=0,A=1,L=10,M=!1,T=0,E=0,P=0,x=0,w=!1,C=[],N=[],F=[],k=null,I=null,W=[],J=null,V=0,ne="#7cc4ff",B=0,G=()=>M?B:performance.now(),Z=S=>{o=S,s.dataset.mode=S,s.hidden=S==="closed"},he=(S,_e="")=>{let ge=r(".m-msg");ge.textContent=S,ge.className="m-msg "+_e+(S?" on":""),P=performance.now()},pe=(S,_e)=>{r(".m-cnt span").textContent=S,r(".m-cnt").classList.toggle("live",!!_e)};function He(){let S=Math.min(window.devicePixelRatio||1,2);l.width=Math.round(innerWidth*S),l.height=Math.round(innerHeight*S)}window.addEventListener("resize",He);function Ue(S,_e,ge,b,g=!0){let D=Math.max(S/ge,_e/b),O=(S-ge*D)/2,Y=(_e-b*D)/2;return te=>({x:g?S-(O+te.x*D):O+te.x*D,y:Y+te.y*D,v:te.visibility??1})}function je(S,_e,ge,b,g,D){S.font=`700 ${15*D}px IN, system-ui, sans-serif`;let O=S.measureText(b).width+22*D,Y=30*D,te=Y/2;S.save(),S.shadowColor="rgba(0,0,0,.45)",S.shadowBlur=10*D,S.beginPath(),S.roundRect(_e-O/2,ge-Y/2,O,Y,te),S.fillStyle="rgba(8,14,28,.82)",S.fill(),S.shadowBlur=0,S.lineWidth=1.6*D,S.strokeStyle=g,S.stroke(),S.fillStyle="#fff",S.textAlign="center",S.textBaseline="middle",S.fillText(b,_e,ge+.5*D),S.restore()}function ie(S,_e,ge,b,g,D,O,Y={}){if(S.clearRect(0,0,_e,ge),!D)return;let te=D.map(Ue(_e,ge,b,g)),de=le=>te[le].v>.45,j=(Y.small?2.2:3.6)*O;S.save(),S.lineCap="round",S.lineJoin="round",S.strokeStyle=ne,S.shadowColor=ne,S.shadowBlur=(Y.small?6:16)*O,S.lineWidth=j;let K=[$.shL,$.shR,$.hipR,$.hipL];K.every(de)&&(S.beginPath(),K.forEach((le,ce)=>ce?S.lineTo(te[le].x,te[le].y):S.moveTo(te[le].x,te[le].y)),S.closePath(),S.fillStyle="rgba(120,180,255,.06)",S.fill(),S.stroke()),S.beginPath();for(let[le,ce]of Zg)!de(le)||!de(ce)||(S.moveTo(te[le].x,te[le].y),S.lineTo(te[ce].x,te[ce].y));S.stroke(),S.shadowBlur=0,S.lineWidth=j*.38,S.strokeStyle="rgba(255,255,255,.75)",S.stroke(),S.fillStyle="#fff",S.shadowColor=ne,S.shadowBlur=10*O;for(let le of Kg)de(le)&&(S.beginPath(),S.arc(te[le].x,te[le].y,(Y.small?2.4:4.2)*O,0,7),S.fill());S.restore();let ue=yo[p];if(!ue)return;let me=[];for(let[le,ce,Ae,Pe]of ue.joints){let ke=te[$[le]],R=te[$[ce]],ae=te[$[Ae]];if(ke.v<.5||R.v<.5||ae.v<.5)continue;let ee=Mt(D[$[le]],D[$[ce]],D[$[Ae]]),fe=Pe==="L"?ne:jg,xe=Math.atan2(ke.y-R.y,ke.x-R.x),oe=Math.atan2(ae.y-R.y,ae.x-R.x)-xe;for(;oe>Math.PI;)oe-=2*Math.PI;for(;oe<-Math.PI;)oe+=2*Math.PI;let De=(Y.small?18:46)*O;S.save();let Ne=S.createRadialGradient(R.x,R.y,De*.2,R.x,R.y,De);if(Ne.addColorStop(0,"rgba(255,255,255,0)"),Ne.addColorStop(1,fe+"66"),S.beginPath(),S.moveTo(R.x,R.y),S.arc(R.x,R.y,De,xe,xe+oe,oe<0),S.closePath(),S.fillStyle=Ne,S.fill(),S.beginPath(),S.arc(R.x,R.y,De,xe,xe+oe,oe<0),S.strokeStyle=fe,S.lineWidth=(Y.small?1.6:3)*O,S.shadowColor=fe,S.shadowBlur=10*O,S.stroke(),S.restore(),!Y.small){let ht=xe+oe/2;me.push({x:R.x-Math.cos(ht)*(De+36*O),y:R.y-Math.sin(ht)*(De+36*O),text:`${Math.round(ee)}\xB0`,col:fe})}}me.length===2&&Math.hypot(me[0].x-me[1].x,me[0].y-me[1].y)<70*O&&(me[1].x=me[0].x,me[1].y=me[0].y+36*O);for(let le of me)je(S,Math.min(_e-46*O,Math.max(46*O,le.x)),Math.min(ge-20*O,Math.max(20*O,le.y)),le.text,le.col,O)}function se(S){let _e=yo[p],ge={L:null,R:null};for(let[b,g,D,O]of _e.joints)Math.min(S[$[b]].visibility,S[$[g]].visibility,S[$[D]].visibility)>=.5&&(ge[O]=Mt(S[$[b]],S[$[g]],S[$[D]]));return ge}function ye(S){if(w=!0,x=S,k={minL:1/0,minR:1/0,min:1/0,tMin:S},pe("CONTANDO 0:00",!0),_&&window.MediaRecorder&&!I)try{W=[];let ge=["video/webm;codecs=vp9","video/webm","video/mp4"].find(b=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(b));I=new MediaRecorder(_,ge?{mimeType:ge,videoBitsPerSecond:9e5}:void 0),I.ondataavailable=b=>b.data&&b.data.size&&W.push(b.data),I.start(500)}catch{I=null}}function ze(){return new Promise(S=>{if(!I||I.state==="inactive")return S(null);I.onstop=()=>{let _e=W.length?new Blob(W,{type:I.mimeType||"video/webm"}):null;I=null,S(_e)},I.stop()})}function Se(S,_e){B=_e;let ge=u.push(S,_e),b=u.sm.p||S;if(ie(c,l.width,l.height,a.videoWidth||640,a.videoHeight||480,b,l.width/innerWidth),!ge.ok){performance.now()-P>2500&&he(Dt[p].hint,"warn");return}let g=Dt[p];if(g.wants&&ge.view&&ge.view!==g.wants&&ge.view!=="oblique"&&!w){he(g.wants==="side"?"G\xEDrate: ponte de lado a la c\xE1mara":"G\xEDrate: ponte de frente a la c\xE1mara","warn");return}if(!ge.calibrated){pe("CALIBRANDO \xB7 QUIETO 1 S",!1);return}w||(ye(_e),he("\xA1Listo! Empieza cuando quieras","ok"));let D=_e-x,O=se(b),Y=ge.metric;N.push({t:D,l:O.L,r:O.R,f:Y}),C.length<2400&&C.push({t:D,L:b.map(te=>({x:te.x,y:te.y,z:te.z,visibility:te.visibility}))}),O.L!==null&&(k.minL=Math.min(k.minL,O.L)),O.R!==null&&(k.minR=Math.min(k.minR,O.R)),Y<k.min&&(k.min=Y,k.tMin=_e);for(let te of ge.ev)if(te.type==="rep"){let de=Math.max((_e-k.tMin)/1e3,.15),j=Math.max(0,(Y-k.min)/de);F.push({n:te.n,good:te.good,issues:te.issues,minL:isFinite(k.minL)?k.minL:null,minR:isFinite(k.minR)?k.minR:null,min:k.min,speed:j,t:D}),k={minL:1/0,minR:1/0,min:1/0,tMin:_e};let K=r(".m-n");K.textContent=te.n,K.classList.remove("pop","bad"),K.offsetWidth,K.classList.add("pop"),te.good||K.classList.add("bad"),te.good?he("\xA1Buena t\xE9cnica!","ok"):he(te.msg,"warn"),n(te.good?String(te.n):`${te.n}. ${te.msg}`),T=_e,te.n>=L&&(he("\xA1Serie completada!","ok"),setTimeout(()=>o==="run"&&Te(),1200))}else te.type==="tip"&&(he(te.msg,"warn"),_e-T>4e3&&(T=_e,n(te.msg)))}function Ve(S){if(m=!1,!y||M)return;let _e=S.poseLandmarks,ge=a.videoWidth,b=a.videoHeight;if(!_e){c.clearRect(0,0,l.width,l.height),++E>25&&he("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista","warn");return}E=0,Se(_e.map(g=>({x:g.x*ge,y:g.y*b,z:(g.z||0)*ge,visibility:g.visibility??1})),performance.now())}function at(){let S=()=>{if(!y)return;let _e=performance.now();w&&_e-V>250&&(V=_e,pe("CONTANDO "+Gu(G()-x),!0)),!M&&f&&!m&&a.readyState>=2&&_e-d>50&&(m=!0,d=_e,f.send({image:a}).catch(()=>{m=!1})),P&&_e-P>3500&&(r(".m-msg").classList.remove("on"),P=0),requestAnimationFrame(S)};requestAnimationFrame(S)}function z(){u=new Oi(p),w=!1,C=[],N=[],F=[],k=null,I=null,J&&URL.revokeObjectURL(J),J=null,r(".m-n").textContent="0",r(".m-n").classList.remove("bad"),r(".m-u").textContent=`REPS \xB7 OBJETIVO ${L}`,r(".m-chip").textContent=`SERIE ${A} \xB7 ${h.name.toUpperCase()}`,pe("PREPARANDO",!1),he(Dt[p].hint)}async function re(){Z("loading"),He(),ne=(getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#7cc4ff").trim(),z(),he("Cargando el modelo de detecci\xF3n\u2026");try{_=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1}),a.srcObject=_,await a.play();try{localStorage.setItem("forja:cam","1")}catch{}M||(await oc(),f||(f=new window.Pose({locateFile:S=>vo+S}),f.setOptions({modelComplexity:1,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),f.onResults(Ve))),y=!0,Z("run"),he(Dt[p].hint),at()}catch(S){we(),Z("error");let _e=S&&S.name;r(".m-ask .m-card").innerHTML=`<b>No se pudo abrir la c\xE1mara</b><p>${_e==="NotAllowedError"||_e==="SecurityError"?"No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.":_e==="NotFoundError"?"No se ha encontrado ninguna c\xE1mara en este dispositivo.":S&&S.message==="lib"?"El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.":"No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo."}</p><button class="m-go">Reintentar</button>`,r(".m-go").onclick=re}}function we(){y=!1,m=!1,I&&I.state!=="inactive"&&I.stop(),I=null,_&&_.getTracks().forEach(S=>S.stop()),_=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height)}function ve(){we(),J&&URL.revokeObjectURL(J),J=null,r(".m-sum").hidden=!0,Z("closed"),i&&i()}async function Te(){if(o!=="run")return;y=!1;let S=w?G()-x:0,_e=await ze();_e&&(J=URL.createObjectURL(_e)),_&&_.getTracks().forEach(ge=>ge.stop()),_=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height),rt(S),Z("sum");try{let ge="forja:mirror",b=JSON.parse(localStorage.getItem(ge)||"[]");b.push({d:Date.now(),ex:h.name,set:A,reps:F.length,good:F.filter(g=>g.good).length,ms:Math.round(S)}),localStorage.setItem(ge,JSON.stringify(b.slice(-200)))}catch{}}function Ce(S){let Y=Math.max(S,1e3),te=R=>38+R/Y*590,de=R=>12+(1-R/180)*182,j=Math.max(1,Math.ceil(N.length/320)),K=R=>{let ae="",ee=!1;for(let fe=0;fe<N.length;fe+=j){let xe=N[fe][R];if(xe==null){ee=!1;continue}ae+=`${ee?"L":"M"}${te(N[fe].t).toFixed(1)},${de(xe).toFixed(1)}`,ee=!0}return ae},ue=[0,45,90,135,180].map(R=>`<line x1="38" x2="628" y1="${de(R)}" y2="${de(R)}"/><text x="32" y="${de(R)+4}" text-anchor="end">${R}\xB0</text>`).join(""),le=[0,Math.round(Y/1e3)].map((R,ae)=>`<text x="${te(R*1e3)}" y="214" text-anchor="${ae?"end":"start"}">${R}s</text>`).join(""),ce=null;for(let R of F)(!ce||R.min<ce.min)&&(ce=R);let Ae="";if(ce){let R=null;for(let ae of N)ae.t<=ce.t&&ae.t>=ce.t-4e3&&(R===null||ae.f<R.f)&&(R=ae);R&&(Ae=`<circle cx="${te(R.t)}" cy="${de(R.f)}" r="6" class="pk"/>`)}let Pe=N.some(R=>R.l!==null),ke=N.some(R=>R.r!==null);return`<svg viewBox="0 0 640 220" preserveAspectRatio="none" class="chart" role="img" aria-label="\xC1ngulo de rodilla durante la serie">
      <g class="gr">${ue}${le}</g>
      ${Pe?`<path d="${K("l")}" class="ln l"/>`:""}${ke?`<path d="${K("r")}" class="ln r"/>`:""}
      ${!Pe&&!ke?`<path d="${K("f")}" class="ln l"/>`:""}${Ae}</svg>`}function rt(S){let _e=yo[p],ge=F.length,b=F.filter(ae=>ae.good).length,g=ae=>ae.length?ae.reduce((ee,fe)=>ee+fe,0)/ae.length:null,D=F.map(ae=>ae.minL).filter(ae=>ae!==null),O=F.map(ae=>ae.minR).filter(ae=>ae!==null),Y=D.length?Math.min(...D):null,te=O.length?Math.min(...O):null,de=Y!==null&&te!==null?Math.round(Math.abs(Y-te)):null,j=F.map(ae=>ae.speed),K=null;if(ge>=4){let ae=g(j.slice(0,2)),ee=g(j.slice(-2));K=ae>0?Math.max(0,Math.round((ae-ee)/ae*100)):0}let ue=K===null?"Haz al menos 4 repeticiones para medirla":K<8?"Sin fatiga: ritmo constante":K<20?"Algo de fatiga":"Fatiga notable: descansa bien",me={};for(let ae of F)for(let ee of ae.issues)me[ee]=(me[ee]||0)+1;let le=Object.entries(me).sort((ae,ee)=>ee[1]-ae[1])[0],ce=Math.max(1,...j),Ae=ge?j.indexOf(Math.max(...j)):-1,Pe=F.map((ae,ee)=>`<div class="b${ae.good?"":" bad"}${ee===Ae?" top":""}"><i style="height:${Math.max(6,ae.speed/ce*100).toFixed(0)}%"></i><small>${ee+1}</small></div>`).join(""),ke=(ae,ee,fe,xe)=>`<div class="sd ${xe}"><small><i></i>${ae}</small><b>${ee===null?"\u2013":Math.round(ee)+"\xB0"}</b><em>${fe.length?"Media "+Math.round(g(fe))+"\xB0":"No visible"}</em></div>`,R=r(".m-sum");R.innerHTML=`
      <div class="s-wrap">
        <header class="s-h"><small>SERIE ${A} \xB7 ${Wu(h.name.toUpperCase())}</small><h2>Resumen de la serie</h2></header>
        <div class="s-grid">
          <div class="mk rp"><span class="tag">REPETICI\xD3N</span><video playsinline muted loop></video><canvas></canvas><div class="rp-none" hidden>Sin v\xEDdeo en este navegador: se muestra solo el esqueleto</div></div>
          <div class="mk big"><small>REPS</small><b>${ge}</b><em>${Gu(S)} <span>tiempo</span></em></div>
          <div class="mk pk"><small>${_e.peak.toUpperCase()}</small>
            <div class="sides">${ke("Izquierda",Y,D,"l")}${ke("Derecha",te,O,"r")}</div>
            <p class="mh">${de!==null?`<strong>${de}\xB0 de diferencia</strong> entre piernas \xB7 `:""}${_e.peakHint}</p></div>
          <div class="mk ft"><div class="row"><small>FATIGA</small><b>${K===null?"\u2013":K+"%"}</b></div>
            <div class="meter"><i style="width:${K===null?0:Math.min(100,K*2.5)}%"></i></div>
            <p><strong>${ue}</strong><br>P\xE9rdida de ${_e.speed.toLowerCase()} entre las primeras y las \xFAltimas reps</p></div>
          <div class="mk tq"><div class="row"><small>T\xC9CNICA</small><b>${ge?b+"/"+ge:"\u2013"}</b></div>
            <p>${ge?le?`A mejorar: <strong>${Wu(bs[le[0]]||le[0])}</strong> (${le[1]} ${le[1]===1?"vez":"veces"})`:"<strong>Todas las repeticiones con buena t\xE9cnica</strong>":"No se ha contado ninguna repetici\xF3n"}</p></div>
          <div class="mk ch"><div class="row"><small>${_e.metric.toUpperCase()}</small><span class="mlg"><i class="l"></i>Izquierda <i class="r"></i>Derecha</span></div>${Ce(S)}</div>
          <div class="mk sp"><div class="row"><small>${_e.speed.toUpperCase()}</small></div>
            <p>${ge?`Cada repetici\xF3n; la m\xE1s r\xE1pida, la ${Ae+1}.\xAA a ${Math.round(j[Ae])}\xB0/s`:"Sin repeticiones"}</p>
            <div class="bars">${Pe}</div></div>
        </div>
        <div class="s-act"><button class="s-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7v9H3z"/></svg>Terminar</button>
          <button class="s-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/></svg>Siguiente serie</button></div>
      </div>`,R.hidden=!1,R.scrollTop=0,R.querySelector(".s-done").onclick=ve,R.querySelector(".s-next").onclick=()=>{A++,R.hidden=!0,re()},Xe(R.querySelector(".rp"))}function Xe(S){let _e=S.querySelector("video"),ge=S.querySelector("canvas"),b=ge.getContext("2d"),g=C.length&&a.videoWidth||640,D=C.length&&a.videoHeight||480,O={vw:g||640,vh:D||480};(()=>{let ue=S.getBoundingClientRect(),me=Math.min(window.devicePixelRatio||1,2);ge.width=Math.round(ue.width*me),ge.height=Math.round(ue.height*me)})();let te=performance.now(),de=C.length?C[C.length-1].t:0,j=ue=>{let me=0,le=C.length-1;for(;me<le;){let ce=me+le+1>>1;C[ce].t<=ue?me=ce:le=ce-1}return C[me]};J?(_e.src=J,_e.onloadedmetadata=()=>{_e.videoWidth&&(O.vw=_e.videoWidth,O.vh=_e.videoHeight)},_e.play().catch(()=>{})):(_e.hidden=!0,S.querySelector(".rp-none").hidden=!C.length);let K=()=>{if(!(o!=="sum"||!S.isConnected)){if(C.length){let ue=J&&isFinite(_e.currentTime)&&_e.currentTime>0?_e.currentTime*1e3:(performance.now()-te)%Math.max(de,1);ie(b,ge.width,ge.height,O.vw,O.vh,j(ue).L,ge.width/Math.max(S.clientWidth,1),{small:!0})}requestAnimationFrame(K)}};requestAnimationFrame(K)}function Je(){if(h=e(),p=h&&h.coach,!uc(p))return!1;L=t&&t()||10,A=1,Es();let S=!1;try{S=localStorage.getItem("forja:cam")==="1"}catch{}return r(".m-sum").hidden=!0,z(),S||M?re():(Z("ask"),r(".m-ask .m-card").innerHTML='<b>Modo espejo</b><p>Te ver\xE1s en pantalla con tus \xE1ngulos en directo. Forja cuenta las repeticiones y al final te ense\xF1a el resumen de la serie.</p><p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p><button class="m-go">Activar c\xE1mara</button>',r(".m-go").onclick=re),!0}return r(".m-x").onclick=ve,r(".m-fin").onclick=Te,window.addEventListener("pagehide",we),document.addEventListener("keydown",S=>{o!=="closed"&&S.key==="Escape"&&ve()}),{open:Je,close:ve,isOpen:()=>o!=="closed",__sim(S=!0){M=S},__feed(S,_e){if(!y)return;let ge=a.videoWidth||640,b=a.videoHeight||480;Se(S.map(g=>({x:g.x*ge,y:g.y*b,z:(g.z||0)*ge,visibility:g.visibility??1})),_e??performance.now())},__finish:Te}}var Mi=["Principiante","Intermedio","Avanzado"],Re=n=>document.querySelector(n),Jt=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),Qg={rep:"repeticiones",s:"s"};function qu(n){let e=n.exercises,t=Mi.length,i="forja:"+n.id,s={get(){try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},set(z){try{localStorage.setItem(i,JSON.stringify(z))}catch{}}},r={get(){try{return JSON.parse(localStorage.getItem("forja:prefs")||"{}")}catch{return{}}},set(z){try{localStorage.setItem("forja:prefs",JSON.stringify(z))}catch{}}},a=Object.assign({lv:[],voice:!0,sound:!0,level:1},s.get()),l=Object.assign({variant:"m"},r.get());(!Array.isArray(a.lv)||a.lv.length!==e.length)&&(a.lv=e.map(()=>a.level||1)),document.documentElement.style.setProperty("--acc",n.theme.acc),document.documentElement.style.setProperty("--hi",n.theme.hi),document.documentElement.style.setProperty("--acc-t",n.theme.accText||"#fff"),document.documentElement.style.setProperty("--bgA",n.theme.bgA),document.documentElement.style.setProperty("--bgB",n.theme.bgB),document.documentElement.style.setProperty("--musc",n.theme.musc);let c=document.querySelector("meta[name=theme-color]");c&&(c.content=n.theme.bgA),document.body.innerHTML=`
<header id="top">
  <a class="back" href="index.html" aria-label="Volver al inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
  <div id="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n.icon}</svg></div>
  <div class="ttl"><b id="club">${Jt(n.title)}</b><small>${Jt(n.tagline)}</small></div>
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
      <h1>${Jt(n.title)}</h1>
      <div class="sub">${Jt(n.tagline)}</div>
      <div class="fld"><label>Nivel de toda la sesi\xF3n</label><div class="seg" id="allLv"></div></div>
      <div class="fld"><label>Avatar</label><div class="seg" id="avSeg"><button data-v="m">\xC9l</button><button data-v="f">Ella</button></div></div>
      <button class="btn" id="go">Comenzar sesi\xF3n</button>
      <div class="mats">${n.material.map(z=>`<span>${Jt(z)}</span>`).join("")}</div>
      <div class="note">${Jt(n.notice)}</div>
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
      <div class="sub">${Jt(n.title)} \xB7 bien hecho</div>
      <ul id="endList"></ul>
      <div id="endTime"></div>
      <div class="ctrls" style="margin-top:16px"><button class="btn" id="again" style="flex:1">Repetir sesi\xF3n</button><button class="btn ghost" id="backSetup" style="flex:1">Ajustes</button></div>
      <a class="btn ghost home" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>
<canvas id="conf"></canvas>`;let o={screen:"setup",ex:0,phase:"ready",set:0,el:0,dur:20,paused:!1,animT:0,sessionTime:0,view:0,dragAz:0,dragEl:0,done:[],cdn:4,side:-1,lastRep:-1,wrapN:0,snap:1,setIdx:0},h=[{n:"Auto",az:null},{n:"Lateral",az:-90},{n:"3/4",az:-40},{n:"Frontal",az:0}],p=!0,u=()=>({...n.theme.look,...l.variant==="f"&&n.theme.lookF?n.theme.lookF:{}}),f=new go(Re("#cv"),n.theme);f.setAvatar(l.variant,u());let _=z=>Vt(a.lv[z],1,t),y=z=>e[z].levels[_(z)-1],m=z=>z.repT||3,d=(z,re)=>re.sides||z.sides,A=z=>z.unit==="rep"?z.n*m(z):z.n,L=z=>z.rest!==void 0?z.rest:n.rest,M=z=>`${z.sets} ${z.sets===1?n.setName.toLowerCase():n.setName.toLowerCase()+"s"} \xB7 ${z.n} ${z.unit==="s"?"s":Qg[z.unit]}`,T=z=>z.sets*A(z)+(z.sets-1)*L(z)+L(z),E=()=>e.reduce((z,re,we)=>z+T(y(we)),0),P=z=>Math.round(z/60)+" min",x=(z,re)=>d(z,re)?`${d(z,re)} ${o.set%2===0?"derecha":"izquierda"} \xB7 ${o.set+1} de ${re.sets}`:`${n.setName} ${o.set+1} de ${re.sets}`,w=(z,re)=>Vt(Math.floor(re/m(z)),0,z.n-1);function C(){Re("#bV").classList.toggle("on",a.voice),Re("#bS").classList.toggle("on",a.sound),Re("#bW").innerHTML='Vista<span class="lg"> \xB7 '+h[o.view].n+"</span>",document.querySelectorAll("#avSeg button").forEach(z=>z.classList.toggle("on",z.dataset.v===l.variant))}let N=()=>s.set(a);function F(){Re("#allLv").innerHTML=Mi.map((z,re)=>`<button data-l="${re+1}" class="${a.lv.every(we=>we===re+1)?"on":""}">${z}</button>`).join(""),Re("#exList").innerHTML=e.map((z,re)=>{let we=y(re),ve=Mi.map((Te,Ce)=>`<button data-e="${re}" data-l="${Ce+1}" title="${Te}" class="${_(re)===Ce+1?"on":""}">${Ce+1}</button>`).join("");return`<li><b>${re+1}</b><div><span>${Jt(z.name)}</span><small>${Mi[_(re)-1]} \xB7 ${Jt(we.t)}</small><small class="lab">${M(we)}</small></div><div class="lvc">${ve}</div></li>`}).join(""),Re("#totalT").textContent="Duraci\xF3n estimada de la sesi\xF3n: "+P(E())}function k(z){o.screen=z,Re("#setup").classList.toggle("on",z==="setup"),Re("#end").classList.toggle("on",z==="end"),z==="setup"&&F(),document.body.dataset.screen=z,f.resize()}function I(){let z=e[o.ex],re=y(o.ex),we=o.phase;Re("#pStep").textContent=`Ejercicio ${o.ex+1} de ${e.length}`,Re("#pTitle").textContent=z.name,Re("#pArea").textContent=z.area,Re("#pMus").textContent="M\xFAsculos: "+z.mus.map(Te=>Du[Te]).join(" \xB7 "),Re("#pMus").classList.toggle("off",!p),Re("#pLevels").innerHTML=Mi.map((Te,Ce)=>`<button data-l="${Ce+1}" class="${_(o.ex)===Ce+1?"on":""} ${o.done[o.ex]||Ce+1<_(o.ex)?"ok":""}" ${we!=="ready"?"disabled":""}>${Te}</button>`).join(""),Re("#pLvT").innerHTML=`<b>${Mi[_(o.ex)-1]}</b> \xB7 ${Jt(re.t)}`,Re("#pCues").innerHTML=re.d.map(Te=>`<li>${Jt(Te)}</li>`).join(""),Re("#pSpec").textContent=M(re),Re("#pKey").innerHTML=z.key.length?"<h4>Importante</h4><ul>"+z.key.map(Te=>`<li>${Jt(Te)}</li>`).join("")+"</ul>":"",Re("#pErrBox").style.display=z.errors.length?"":"none",Re("#pErr").innerHTML=z.errors.map(Te=>`<li>${Jt(Te)}</li>`).join(""),Re("#steps").innerHTML=e.map((Te,Ce)=>`<button class="${Ce===o.ex?"cur":""} ${o.done[Ce]?"ok":""}" data-i="${Ce}" title="${Jt(Te.name)}">${Ce+1}</button>`).join(""),Re("#bar i").style.width=o.done.filter(Boolean).length/e.length*100+"%",Re("#mainBtn").textContent=we==="ready"?"Iniciar ejercicio":o.paused?"Reanudar":"Pausar",Re("#skipBtn").style.display=we==="ready"?"none":"",Re("#skipBtn").textContent=we==="rest"?"Saltar descanso":`Saltar ${n.setName.toLowerCase()}`,Re("#prevBtn").disabled=o.ex===0,Re("#nextBtn").disabled=o.ex===e.length-1;let ve="";for(let Te=0;Te<re.sets;Te++){let Ce=we!=="ready"&&(Te<o.set||Te===o.set&&we==="work");ve+=`<i class="${Ce?"on":""} ${we==="work"&&Te===o.set?"cur":""}"></i>`}Re("#dots").innerHTML=ve}function W(){let z=o.phase,re=y(o.ex),we=e[o.ex],ve="",Te="",Ce=1,rt=!1;if(z==="ready")ve=String(re.n),Te=M(re);else if(z==="count")ve=String(Math.max(1,3-Math.floor(o.el))),Te="Preparados",Ce=1-o.el%1;else if(z==="work")Ce=1-o.el/o.dur,re.unit==="s"?(ve=String(Math.ceil(o.dur-o.el)),Te=x(we,re)+" \xB7 segundos"):(ve=w(re,o.el)+1+"/"+re.n,rt=!0,Te=x(we,re)+" \xB7 repeticiones"),o.paused&&(Te+=" \xB7 pausa");else if(z==="rest"){let Xe=L(re);ve=String(Math.ceil(Xe-o.el)),Te="Descanso \xB7 respira",Ce=1-o.el/Xe}Re("#tNum").textContent=ve,Re("#tNum").classList.toggle("sm2",rt),Re("#tLab").textContent=Te,Re("#ring").style.strokeDashoffset=289*(1-Vt(Ce,0,1)),document.body.dataset.phase=z}function J(z,re=2400){let we=Re("#toast");we.textContent=z,we.classList.add("on"),clearTimeout(J.h),J.h=setTimeout(()=>we.classList.remove("on"),re)}function V(z){let re=Re("#cd");re.textContent=z,re.classList.remove("go"),re.offsetWidth,re.classList.add("go")}let ne=Vu({stageEl:Re("#stage"),say:z=>$n(a,z),getExercise:()=>e[o.ex]}),B=Xu({say:z=>$n(a,z),getExercise:()=>e[o.ex],getTarget:()=>y(o.ex).n,onClose:()=>Re("#bCam").classList.toggle("on",ne.isOpen())});function G(){let z=e[o.ex],re=y(o.ex);Object.assign(o,{phase:"ready",el:0,set:0,animT:0,paused:!1,lastRep:-1,wrapN:0,snap:1,dragAz:0,dragEl:0}),o.dur=A(re),Re("#cd").classList.remove("go"),Re("#cd").textContent="",$n(a,`${o.ex+1}. ${z.name}. ${Mi[_(o.ex)-1]}`),I(),W(),ne&&ne.setExercise(z),Re("#bCam").textContent=z.mirror?"Modo espejo":"C\xE1mara"}function Z(){Es(),Hu(),o.ex=0,o.done=[],o.sessionTime=0,k("session"),G(),N()}function he(){Object.assign(o,{phase:"count",el:0,cdn:4,animT:0,paused:!1}),I()}function pe(){let z=y(o.ex);Object.assign(o,{phase:"work",el:0,animT:0,cdn:99,lastRep:-1,snap:1,wrapN:0}),o.dur=A(z),o.side=o.set%2===0?-1:1,V("YA"),Ts(a,900,.3,"square",.18),$n(a,d(e[o.ex],z)?o.side<0?"Lado derecho. Ya":"Lado izquierdo. Ya":"Ya"),I()}function He(){let z=y(o.ex);o.set+1<z.sets?(Object.assign(o,{phase:"rest",el:0,animT:0}),$n(a,"Descanso"),J("Descanso",3e3),Ts(a,500,.25,"triangle"),I()):(o.done[o.ex]=!0,lc(a,[[523,0],[659,140],[784,280]]),o.ex<e.length-1?(J("Ejercicio completado"),o.ex++,G()):je())}function Ue(){let z=Re("#conf");if(!z||window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;let re=z.getContext("2d");z.width=innerWidth,z.height=innerHeight;let we=[n.theme.acc,n.theme.hi,"#ffffff"],ve=Array.from({length:160},()=>({x:innerWidth/2+(Math.random()-.5)*240,y:innerHeight*.4,vx:(Math.random()-.5)*15,vy:-Math.random()*15-4,r:Math.random()*5+3,a:Math.random()*6,va:(Math.random()-.5)*.4,c:we[Math.random()*3|0]})),Te=performance.now();(function Ce(rt){let Xe=(rt-Te)/1e3;if(re.clearRect(0,0,z.width,z.height),!(Xe>3.4)){for(let Je of ve)Je.vy+=.36,Je.x+=Je.vx,Je.y+=Je.vy,Je.a+=Je.va,Je.vx*=.99,re.save(),re.translate(Je.x,Je.y),re.rotate(Je.a),re.globalAlpha=Math.max(0,1-Xe/3.4),re.fillStyle=Je.c,re.fillRect(-Je.r,-Je.r/2,Je.r*2,Je.r),re.restore();requestAnimationFrame(Ce)}})(Te)}function je(){o.phase="done",I(),k("end"),Ue(),lc(a,[[523,0],[659,150],[784,300],[1047,450,.5]]),$n(a,"Sesi\xF3n completada");let z=Math.floor(o.sessionTime/60),re=Math.round(o.sessionTime%60);Re("#endTime").textContent=`Tiempo total: ${z} min ${re} s`,Re("#endList").innerHTML=e.map((we,ve)=>`<li><b>\u2713</b>${ve+1}. ${Jt(we.name)}<small>${Mi[_(ve)-1]} \xB7 ${M(y(ve))}</small></li>`).join("");try{let we=JSON.parse(localStorage.getItem("forja:log")||"[]");we.push({id:n.id,ts:Date.now(),secs:Math.round(o.sessionTime),level:Math.round(a.lv.reduce((ve,Te)=>ve+Te,0)/a.lv.length)}),localStorage.setItem("forja:log",JSON.stringify(we.slice(-400)))}catch{}}let ie=z=>{o.ex=Vt(z,0,e.length-1),o.paused=!1,G()};Re("#go").onclick=Z,Re("#mainBtn").onclick=()=>{o.phase==="ready"?(Es(),he()):(o.paused=!o.paused,o.paused&&cc(),I())},Re("#skipBtn").onclick=()=>{o.phase==="rest"?(o.set++,pe()):o.phase==="work"?o.el=o.dur:o.phase==="count"&&pe()},Re("#prevBtn").onclick=()=>ie(o.ex-1),Re("#nextBtn").onclick=()=>ie(o.ex+1),Re("#steps").onclick=z=>{let re=z.target.closest("button");re&&ie(+re.dataset.i)},Re("#pLevels").onclick=z=>{let re=z.target.closest("button");!re||o.phase!=="ready"||(a.lv[o.ex]=+re.dataset.l,N(),G())},Re("#allLv").onclick=z=>{let re=z.target.closest("button");re&&(a.lv=e.map(()=>+re.dataset.l),a.level=+re.dataset.l,N(),F())},document.addEventListener("click",z=>{let re=z.target.closest("#exList .lvc button");re&&(a.lv[+re.dataset.e]=+re.dataset.l,N(),F())}),Re("#avSeg").onclick=z=>{let re=z.target.closest("button");re&&(l.variant=re.dataset.v,r.set(l),f.setAvatar(l.variant,u()),o.snap=1,C())},Re("#bV").onclick=()=>{a.voice=!a.voice,a.voice||cc(),C(),N()},Re("#bS").onclick=()=>{a.sound=!a.sound,C(),N()},Re("#bF").onclick=hc,Re("#bCam").onclick=()=>{let z=e[o.ex];if(z.mirror&&uc(z.coach)){ne.isOpen()&&ne.toggle(),!o.paused&&o.phase!=="ready"&&(o.paused=!0,I()),B.open(),Re("#bCam").classList.add("on");return}ne.toggle(),Re("#bCam").classList.toggle("on",ne.isOpen())},Re("#bW").onclick=()=>{o.view=(o.view+1)%h.length,o.dragAz=0,o.dragEl=0,C()},Re("#bC").onclick=()=>{o.paused=!1,k("setup")},Re("#again").onclick=Z,Re("#backSetup").onclick=()=>k("setup"),Re("#pMus").addEventListener("click",()=>{p=!p,Re("#pMus").classList.toggle("off",!p)}),document.addEventListener("keydown",z=>{o.screen!=="session"||z.target.closest("input,textarea")||(z.code==="Space"?(z.preventDefault(),Re("#mainBtn").click()):z.code==="ArrowRight"?Re("#nextBtn").click():z.code==="ArrowLeft"?Re("#prevBtn").click():(z.key==="f"||z.key==="F")&&hc())});let se=null,ye=Re("#cv");ye.addEventListener("pointerdown",z=>{se={x:z.clientX,y:z.clientY,az:o.dragAz,el:o.dragEl},ye.setPointerCapture(z.pointerId)}),ye.addEventListener("pointermove",z=>{se&&(o.dragAz=se.az-(z.clientX-se.x)*.35,o.dragEl=Vt(se.el+(z.clientY-se.y)*.15,-4,40))}),ye.addEventListener("pointerup",()=>se=null),new ResizeObserver(()=>f.resize()).observe(Re("#stage")),addEventListener("resize",()=>f.resize());let ze=()=>o.phase==="work"?o.el:o.phase==="ready"?o.animT%o.dur:0;function Se(z){let re=y(o.ex),we=e[o.ex];if(o.screen==="session"&&o.phase!=="ready"&&!o.paused&&(o.sessionTime+=z),o.screen==="session"&&!o.paused){if(o.phase==="count"){o.el+=z;let Ce=3-Math.floor(o.el);Ce!==o.cdn&&Ce>0&&(o.cdn=Ce,V(Ce),Ts(a,520,.12,"square"),$n(a,String(Ce))),o.el>=3&&pe()}else if(o.phase==="work"){let Ce=o.el;o.el+=z,o.animT=o.el;let rt=Math.ceil(o.dur-Ce),Xe=Math.ceil(o.dur-o.el);Xe!==rt&&Xe<=3&&Xe>0&&re.unit==="s"&&Ts(a,700,.09,"square",.12),o.el>=o.dur&&He()}else if(o.phase==="rest")o.el+=z,o.el>=L(re)&&(o.set++,pe());else if(o.phase==="ready"){o.animT+=Math.min(z,.05);let Ce=Math.floor(o.animT/o.dur);Ce!==o.wrapN&&(o.wrapN=Ce,o.snap=1)}}let ve=o.screen==="session"&&(o.phase==="ready"||o.phase==="work"),Te=ve?ze():0;if(o.setIdx=o.phase==="work"?o.set:o.wrapN,d(we,re)&&(o.side=o.setIdx%2===0?-1:1),ve&&o.phase==="work"&&!o.paused&&re.unit==="rep"){let Ce=w(re,Te);Ce!==o.lastRep&&(o.lastRep=Ce,$n(a,String(Ce+1)))}o.screen==="session"&&W()}let Ve=performance.now();function at(z){let re=Math.min(.25,(z-Ve)/1e3||0);if(Ve=z,Se(re),B.isOpen()){requestAnimationFrame(at);return}let we=e[o.ex],ve=o.screen==="session",Te=ve&&(o.phase==="ready"||o.phase==="work"),Ce=Object.assign({},y(o.ex),{L:_(o.ex),ex:o.ex}),rt=!!o.snap;o.snap=0,f.frame({dt:re,time:z,mode:Te?we.mode:"idle",t:Te?ze():0,ctx:o,level:Ce,snap:rt,ex:we,active:ve,muscles:we.mus,musclesOn:p&&ve&&["ready","count","work"].includes(o.phase),view:h[o.view],drag:{az:o.dragAz,el:o.dragEl},cam:ve?we.cam:{az:-38,el:7,dist:3.5,ty:.8}}),requestAnimationFrame(at)}C(),F(),k("setup"),I(),W(),f.resize(),requestAnimationFrame(at),window.__k={mirror:B,D:o,EXS:e,CFG:a,stage:f,step:(z,re,we,ve,Te,Ce,rt)=>Ms(z,re,we,ve,Te,Ce,rt),probe(z,re,we,ve){let Te=e[z],Ce=Object.assign({},Te.levels[re-1],{L:re,ex:z}),rt=Ce.unit==="rep"?Ce.n*(Ce.repT||Ce.J+Ce.H):Ce.n,Xe=f.avatar,Je={side:we,dur:rt,ex:z},S=1/60,_e=Math.min(ve||12,rt),ge=null,b=null,g={rot:0,pos:0,bone:-1,t:0},D=0,O=0,Y=[];for(let ue=0,me=0;ue<_e;ue+=S,me++){Ms(Xe,Te.mode,ue,Je,Ce,S,me===0);let le=Xe.ALL.map(Pe=>Pe.getWorldQuaternion(new Xe.root.quaternion.constructor)),ce=Xe.root.position.clone();if(ge&&me>20){let Pe=0,ke=-1;le.forEach((ae,ee)=>{let fe=2*Math.acos(Math.min(1,Math.abs(ae.dot(ge[ee]))))*57.2958;fe>Pe&&(Pe=fe,ke=ee)});let R=ce.distanceTo(b);Pe>g.rot&&(g.rot=Pe,g.bone=ke,g.t=ue),R>g.pos&&(g.pos=R)}let Ae=1e9;for(let Pe of Xe.marks){let ke=Pe.o.getWorldPosition(new Xe.root.position.constructor);Ae=Math.min(Ae,ke.y-Pe.r)}Ae<-.02&&(D=Math.max(D,-Ae)),ge=le,b=ce}let te=ue=>(Ms(Xe,Te.mode,ue,Je,Ce,S,!0),Xe.ALL.map(me=>me.getWorldQuaternion(new Xe.root.quaternion.constructor))),de=te(Math.max(0,rt-S)),j=te(0),K=0;return de.forEach((ue,me)=>{K=Math.max(K,2*Math.acos(Math.min(1,Math.abs(ue.dot(j[me]))))*57.2958)}),{name:Te.name,level:re,side:we,dur:rt,maxRotDegPerFrame:+g.rot.toFixed(1),atT:+g.t.toFixed(2),bone:Xe.ALL[g.bone]?Xe.ALL[g.bone].name||g.bone:-1,maxPosPerFrame:+g.pos.toFixed(3),underGround:+D.toFixed(3),seamDeg:+K.toFixed(1)}},show(z,re,we,ve){a.lv[z]=re,o.screen="session",k("session"),o.ex=z,G(),o.paused=!0,o.animT=we,ve!==void 0&&(o.side=ve),o.snap=1,I()}}}qu(Cu);})();
