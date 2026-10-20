(()=>{var Hc=0,nl=1,Gc=2;var Ii=1,Wc=2,ps=3,pi=0,Qe=1,bn=2,Un=0,ms=1,Ks=2,il=3,sl=4,Xc=5;var Li=100,qc=101,Yc=102,Jc=103,Zc=104,$c=200,Kc=201,jc=202,Qc=203,rl=204,al=205,th=206,eh=207,nh=208,ih=209,sh=210,rh=211,ah=212,oh=213,lh=214,zr=0,kr=1,Vr=2,is=3,Hr=4,Gr=5,Wr=6,Xr=7,ol=0,ch=1,hh=2,wn=0,ll=1,cl=2,hl=3,js=4,ul=5,dl=6,fl=7;var pl=300,mi=301,Di=302,xa=303,va=304,Qs=306,ss=1e3,Ln=1001,qr=1002,Fe=1003,uh=1004;var tr=1005;var ke=1006,ya=1007;var gi=1008;var an=1009,ml=1010,gl=1011,gs=1012,Ma=1013,Tn=1014,An=1015,En=1016,Sa=1017,ba=1018,_s=1020,_l=35902,xl=35899,vl=1021,yl=1022,mn=1023,Dn=1026,_i=1027,Ml=1028,wa=1029,xi=1030,Ta=1031;var Aa=1033,er=33776,nr=33777,ir=33778,sr=33779,Ea=35840,Ca=35841,Ra=35842,Pa=35843,Ia=36196,La=37492,Da=37496,Na=37488,Ua=37489,rr=37490,Fa=37491,Oa=37808,Ba=37809,za=37810,ka=37811,Va=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,Ja=37819,Za=37820,$a=37821,Ka=36492,ja=36494,Qa=36495,to=36283,eo=36284,ar=36285,no=36286;var Ns=2300,Yr=2301,Or=2302,Zo=2303,$o=2400,Ko=2401,jo=2402;var dh=3200;var io=0,fh=1,Yn="",Ze="srgb",Us="srgb-linear",Fs="linear",ue="srgb";var Br=7680;var ph=519,mh=512,gh=513,_h=514,so=515,xh=516,vh=517,ro=518,yh=519,Mh=35044;var Sl="300 es",Mn=2e3,rs=2001;function Ju(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Zu(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Os(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Sh(){let n=Os("canvas");return n.style.display="block",n}var Mc={},as=null;function bl(...n){let t="THREE."+n.shift();as?as("log",t,...n):console.log(t,...n)}function bh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function kt(...n){n=bh(n);let t="THREE."+n.shift();if(as)as("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Vt(...n){n=bh(n);let t="THREE."+n.shift();if(as)as("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Ri(...n){let t=n.join(" ");t in Mc||(Mc[t]=!0,kt(...n))}function wh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Th={[zr]:kr,[Vr]:Wr,[Hr]:Xr,[is]:Gr,[kr]:zr,[Wr]:Vr,[Xr]:Hr,[Gr]:is},Nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ao=Math.PI/180,Jr=180/Math.PI;function or(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function ie(n,t,e){return Math.max(t,Math.min(e,n))}function $u(n,t){return(n%t+t)%t}function Eo(n,t,e){return(1-e)*n+e*t}function Rs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function en(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Cl=class Cl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cl.prototype.isVector2=!0;var te=Cl,qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,l){let c=i[s+0],o=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],M=r[a+3];if(f!==M||c!==u||o!==d||h!==g){let m=c*u+o*d+h*g+f*M;m<0&&(u=-u,d=-d,g=-g,M=-M,m=-m);let p=1-l;if(m<.9995){let T=Math.acos(m),C=Math.sin(T);p=Math.sin(p*T)/C,l=Math.sin(l*T)/C,c=c*p+u*l,o=o*p+d*l,h=h*p+g*l,f=f*p+M*l}else{c=c*p+u*l,o=o*p+d*l,h=h*p+g*l,f=f*p+M*l;let T=1/Math.sqrt(c*c+o*o+h*h+f*f);c*=T,o*=T,h*=T,f*=T}}t[e]=c,t[e+1]=o,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=l*g+h*f+c*d-o*u,t[e+1]=c*g+h*u+o*f-l*d,t[e+2]=o*g+h*d+l*u-c*f,t[e+3]=h*g-l*f-c*u-o*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(s/2),f=l(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f+u*d*g;break;case"YZX":this._x=u*h*f+o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f-u*d*g;break;case"XZY":this._x=u*h*f-o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f+u*d*g;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],o=e[2],h=e[6],f=e[10],u=i+l+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(i>l&&i>f){let d=2*Math.sqrt(1+i-l-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>f){let d=2*Math.sqrt(1+l-i-f);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ie(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,o=e._z,h=e._w;return this._x=i*h+a*l+s*o-r*c,this._y=s*h+a*c+r*l-i*o,this._z=r*h+a*o+i*c-s*l,this._w=a*h-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,e=Math.sin(e*o)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rl=class Rl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Sc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Sc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,o=2*(a*s-l*i),h=2*(l*e-r*s),f=2*(r*i-a*e);return this.x=e+c*o+a*f-l*h,this.y=i+c*h+l*o-r*f,this.z=s+c*f+r*h-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Co.copy(this).projectOnVector(t),this.sub(Co)}reflect(t){return this.sub(Co.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rl.prototype.isVector3=!0;var O=Rl,Co=new O,Sc=new qe,Pl=class Pl{constructor(t,e,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o)}set(t,e,i,s,r,a,l,c,o){let h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],M=s[0],m=s[3],p=s[6],T=s[1],C=s[4],y=s[7],S=s[2],b=s[5],P=s[8];return r[0]=a*M+l*T+c*S,r[3]=a*m+l*C+c*b,r[6]=a*p+l*y+c*P,r[1]=o*M+h*T+f*S,r[4]=o*m+h*C+f*b,r[7]=o*p+h*y+f*P,r[2]=u*M+d*T+g*S,r[5]=u*m+d*C+g*b,r[8]=u*p+d*y+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8];return e*a*h-e*l*o-i*r*h+i*l*c+s*r*o-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8],f=h*a-l*o,u=l*c-h*r,d=o*r-a*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/g;return t[0]=f*M,t[1]=(s*o-h*i)*M,t[2]=(l*i-s*a)*M,t[3]=u*M,t[4]=(h*e-s*c)*M,t[5]=(s*r-l*e)*M,t[6]=d*M,t[7]=(i*c-o*e)*M,t[8]=(a*e-i*r)*M,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+t,-s*o,s*c,-s*(-o*a+c*l)+l+e,0,0,1),this}scale(t,e){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ro.makeScale(t,e)),this}rotate(t){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ro.makeRotation(-t)),this}translate(t,e){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ro.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Pl.prototype.isMatrix3=!0;var Xt=Pl,Ro=new Xt,bc=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),wc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ku(){let n={enabled:!0,workingColorSpace:Us,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ue&&(s.r=qn(s.r),s.g=qn(s.g),s.b=qn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ue&&(s.r=ns(s.r),s.g=ns(s.g),s.b=ns(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Yn?Fs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ri("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ri("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Us]:{primaries:t,whitePoint:i,transfer:Fs,toXYZ:bc,fromXYZ:wc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ze},outputColorSpaceConfig:{drawingBufferColorSpace:Ze}},[Ze]:{primaries:t,whitePoint:i,transfer:ue,toXYZ:bc,fromXYZ:wc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ze}}}),n}var ne=Ku();function qn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ns(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Gi,Zr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Gi===void 0&&(Gi=Os("canvas")),Gi.width=t.width,Gi.height=t.height;let s=Gi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=Gi}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Os("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=qn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(qn(e[i]/255)*255):e[i]=qn(e[i]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},ju=0,os=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ju++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Qu=0,Io=new O,$e=class n extends Nn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Ln,s=Ln,r=ke,a=gi,l=mn,c=an,o=n.DEFAULT_ANISOTROPY,h=Yn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=or(),this.name="",this.source=new os(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Io).x}get height(){return this.source.getSize(Io).y}get depth(){return this.source.getSize(Io).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ss:t.x=t.x-Math.floor(t.x);break;case Ln:t.x=t.x<0?0:1;break;case qr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ss:t.y=t.y-Math.floor(t.y);break;case Ln:t.y=t.y<0?0:1;break;case qr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=pl;$e.DEFAULT_ANISOTROPY=1;var Il=class Il{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,o=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],M=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(g+m)<.1&&Math.abs(o+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(o+1)/2,y=(d+1)/2,S=(p+1)/2,b=(h+u)/4,P=(f+M)/4,x=(g+m)/4;return C>y&&C>S?C<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(C),s=b/i,r=P/i):y>S?y<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),i=b/s,r=x/s):S<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(S),i=P/r,s=x/r),this.set(i,s,r,e),this}let T=Math.sqrt((m-g)*(m-g)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(f-M)/T,this.z=(u-h)/T,this.w=Math.acos((o+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ie(this.x,t.x,e.x),this.y=ie(this.y,t.y,e.y),this.z=ie(this.z,t.z,e.z),this.w=ie(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ie(this.x,t,e),this.y=ie(this.y,t,e),this.z=ie(this.z,t,e),this.w=ie(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(ie(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Il.prototype.isVector4=!0;var be=Il,$r=class extends Nn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ke,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new $e(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ke,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new os(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends $r{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Bs=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Kr=class extends $e{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=Fe,this.minFilter=Fe,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var _a=class _a{constructor(t,e,i,s,r,a,l,c,o,h,f,u,d,g,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o,h,f,u,d,g,M,m)}set(t,e,i,s,r,a,l,c,o,h,f,u,d,g,M,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=M,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _a().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=l*h,M=l*f;e[0]=c*h,e[4]=-c*f,e[8]=o,e[1]=d+g*o,e[5]=u-M*o,e[9]=-l*c,e[2]=M-u*o,e[6]=g+d*o,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=o*h,M=o*f;e[0]=u+M*l,e[4]=g*l-d,e[8]=a*o,e[1]=a*f,e[5]=a*h,e[9]=-l,e[2]=d*l-g,e[6]=M+u*l,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=o*h,M=o*f;e[0]=u-M*l,e[4]=-a*f,e[8]=g+d*l,e[1]=d+g*l,e[5]=a*h,e[9]=M-u*l,e[2]=-a*o,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=l*h,M=l*f;e[0]=c*h,e[4]=g*o-d,e[8]=u*o+M,e[1]=c*f,e[5]=M*o+u,e[9]=d*o-g,e[2]=-o,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*o,g=l*c,M=l*o;e[0]=c*h,e[4]=M-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-l*h,e[2]=-o*h,e[6]=d*f+g,e[10]=u-M*f}else if(t.order==="XZY"){let u=a*c,d=a*o,g=l*c,M=l*o;e[0]=c*h,e[4]=-f,e[8]=o*h,e[1]=u*f+M,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=l*h,e[10]=M*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(td,t,ed)}lookAt(t,e,i){let s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Qn.crossVectors(i,on),Qn.lengthSq()===0&&(Math.abs(i.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Qn.crossVectors(i,on)),Qn.normalize(),xr.crossVectors(on,Qn),s[0]=Qn.x,s[4]=xr.x,s[8]=on.x,s[1]=Qn.y,s[5]=xr.y,s[9]=on.y,s[2]=Qn.z,s[6]=xr.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],M=i[6],m=i[10],p=i[14],T=i[3],C=i[7],y=i[11],S=i[15],b=s[0],P=s[4],x=s[8],w=s[12],R=s[1],L=s[5],U=s[9],V=s[13],E=s[2],B=s[6],Y=s[10],J=s[14],st=s[3],F=s[7],k=s[11],$=s[15];return r[0]=a*b+l*R+c*E+o*st,r[4]=a*P+l*L+c*B+o*F,r[8]=a*x+l*U+c*Y+o*k,r[12]=a*w+l*V+c*J+o*$,r[1]=h*b+f*R+u*E+d*st,r[5]=h*P+f*L+u*B+d*F,r[9]=h*x+f*U+u*Y+d*k,r[13]=h*w+f*V+u*J+d*$,r[2]=g*b+M*R+m*E+p*st,r[6]=g*P+M*L+m*B+p*F,r[10]=g*x+M*U+m*Y+p*k,r[14]=g*w+M*V+m*J+p*$,r[3]=T*b+C*R+y*E+S*st,r[7]=T*P+C*L+y*B+S*F,r[11]=T*x+C*U+y*Y+S*k,r[15]=T*w+C*V+y*J+S*$,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],o=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],M=t[7],m=t[11],p=t[15],T=c*d-o*u,C=l*d-o*f,y=l*u-c*f,S=a*d-o*h,b=a*u-c*h,P=a*f-l*h;return e*(M*T-m*C+p*y)-i*(g*T-m*S+p*b)+s*(g*C-M*S+p*P)-r*(g*y-M*b+m*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],o=t[6],h=t[10];return e*(a*h-l*o)-i*(r*h-l*c)+s*(r*o-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],M=t[13],m=t[14],p=t[15],T=e*l-i*a,C=e*c-s*a,y=e*o-r*a,S=i*c-s*l,b=i*o-r*l,P=s*o-r*c,x=h*M-f*g,w=h*m-u*g,R=h*p-d*g,L=f*m-u*M,U=f*p-d*M,V=u*p-d*m,E=T*V-C*U+y*L+S*R-b*w+P*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/E;return t[0]=(l*V-c*U+o*L)*B,t[1]=(s*U-i*V-r*L)*B,t[2]=(M*P-m*b+p*S)*B,t[3]=(u*b-f*P-d*S)*B,t[4]=(c*R-a*V-o*w)*B,t[5]=(e*V-s*R+r*w)*B,t[6]=(m*y-g*P-p*C)*B,t[7]=(h*P-u*y+d*C)*B,t[8]=(a*U-l*R+o*x)*B,t[9]=(i*R-e*U-r*x)*B,t[10]=(g*b-M*y+p*T)*B,t[11]=(f*y-h*b-d*T)*B,t[12]=(l*w-a*L-c*x)*B,t[13]=(e*L-i*w+s*x)*B,t[14]=(M*C-g*S-m*T)*B,t[15]=(h*S-f*C+u*T)*B,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,l=t.y,c=t.z,o=r*a,h=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+i,h*c-s*a,0,o*c-s*l,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,o=r+r,h=a+a,f=l+l,u=r*o,d=r*h,g=r*f,M=a*h,m=a*f,p=l*f,T=c*o,C=c*h,y=c*f,S=i.x,b=i.y,P=i.z;return s[0]=(1-(M+p))*S,s[1]=(d+y)*S,s[2]=(g-C)*S,s[3]=0,s[4]=(d-y)*b,s[5]=(1-(u+p))*b,s[6]=(m+T)*b,s[7]=0,s[8]=(g+C)*P,s[9]=(m-T)*P,s[10]=(1-(u+M))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=Wi.set(s[0],s[1],s[2]).length(),l=Wi.set(s[4],s[5],s[6]).length(),c=Wi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let o=1/a,h=1/l,f=1/c;return _n.elements[0]*=o,_n.elements[1]*=o,_n.elements[2]*=o,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,e.setFromRotationMatrix(_n),i.x=a,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,a,l=Mn,c=!1){let o=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,M;if(c)g=r/(a-r),M=a*r/(a-r);else if(l===Mn)g=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(l===rs)g=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=f,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=M,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,s,r,a,l=Mn,c=!1){let o=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,M;if(c)g=1/(a-r),M=a/(a-r);else if(l===Mn)g=-2/(a-r),M=-(a+r)/(a-r);else if(l===rs)g=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=f,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=g,o[14]=M,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};_a.prototype.isMatrix4=!0;var ye=_a,Wi=new O,_n=new ye,td=new O(0,0,0),ed=new O(1,1,1),Qn=new O,xr=new O,on=new O,Tc=new ye,Ac=new qe,Sn=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(ie(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-ie(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ie(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ie(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(ie(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Tc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Tc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Sn.DEFAULT_ORDER="XYZ";var zs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},nd=0,Ec=new O,Xi=new qe,Vn=new ye,vr=new O,Ps=new O,id=new O,sd=new qe,Cc=new O(1,0,0),Rc=new O(0,1,0),Pc=new O(0,0,1),Ic={type:"added"},rd={type:"removed"},qi={type:"childadded",child:null},Lo={type:"childremoved",child:null},Oe=class n extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new O,e=new Sn,i=new qe,s=new O(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Xt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Rc,t)}rotateZ(t){return this.rotateOnAxis(Pc,t)}translateOnAxis(t,e){return Ec.copy(t).applyQuaternion(this.quaternion),this.position.add(Ec.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Rc,t)}translateZ(t){return this.translateOnAxis(Pc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?vr.copy(t):vr.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Ps,vr,this.up):Vn.lookAt(vr,Ps,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Vt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),qi.child=t,this.dispatchEvent(qi),qi.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rd),Lo.child=t,this.dispatchEvent(Lo),Lo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),qi.child=t,this.dispatchEvent(qi),qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,id),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,sd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let f=c[o];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),o=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Oe.DEFAULT_UP=new O(0,1,0);Oe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Oe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Me=class extends Oe{constructor(){super(),this.isGroup=!0,this.type="Group"}},ad={type:"move"},ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(let M of t.hand.values()){let m=e.getJointPose(M,i),p=this._getHandJoint(o,M);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;o.inputState.pinching&&u>d+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&u<=d-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ad)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Me;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},yr={h:0,s:0,l:0};function Do(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var qt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=$u(t,1),e=ie(e,0,1),i=ie(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Do(a,r,t+1/3),this.g=Do(a,r,t),this.b=Do(a,r,t-1/3)}return ne.colorSpaceToWorking(this,s),this}setStyle(t,e=Ze){function i(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ze){let i=Ah[t.toLowerCase()];return i!==void 0?this.setHex(i,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qn(t.r),this.g=qn(t.g),this.b=qn(t.b),this}copyLinearToSRGB(t){return this.r=ns(t.r),this.g=ns(t.g),this.b=ns(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ze){return ne.workingToColorSpace(We.copy(this),t),Math.round(ie(We.r*255,0,255))*65536+Math.round(ie(We.g*255,0,255))*256+Math.round(ie(We.b*255,0,255))}getHexString(t=Ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.workingToColorSpace(We.copy(this),e);let i=We.r,s=We.g,r=We.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let f=a-l;switch(o=h<=.5?f/(a+l):f/(2-a-l),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=o,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ze){ne.workingToColorSpace(We.copy(this),t);let e=We.r,i=We.g,s=We.b;return t!==Ze?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ti),this.setHSL(ti.h+t,ti.s+e,ti.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ti),t.getHSL(yr);let i=Eo(ti.h,yr.h,e),s=Eo(ti.s,yr.s,e),r=Eo(ti.l,yr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new qt;qt.NAMES=Ah;var ks=class extends Oe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sn,this.environmentIntensity=1,this.environmentRotation=new Sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new O,Hn=new O,No=new O,Gn=new O,Yi=new O,Ji=new O,Lc=new O,Uo=new O,Fo=new O,Oo=new O,Bo=new be,zo=new be,ko=new be,si=class n{constructor(t=new O,e=new O,i=new O){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),Hn.subVectors(i,e),No.subVectors(t,e);let a=xn.dot(xn),l=xn.dot(Hn),c=xn.dot(No),o=Hn.dot(Hn),h=Hn.dot(No),f=a*o-l*l;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(o*c-l*h)*u,g=(a*h-l*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,i,s,r,a,l,c){return this.getBarycoord(t,e,i,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(l,Gn.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return Bo.setScalar(0),zo.setScalar(0),ko.setScalar(0),Bo.fromBufferAttribute(t,e),zo.fromBufferAttribute(t,i),ko.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Bo,r.x),a.addScaledVector(zo,r.y),a.addScaledVector(ko,r.z),a}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),Hn.subVectors(t,e),xn.cross(Hn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),xn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,l;Yi.subVectors(s,i),Ji.subVectors(r,i),Uo.subVectors(t,i);let c=Yi.dot(Uo),o=Ji.dot(Uo);if(c<=0&&o<=0)return e.copy(i);Fo.subVectors(t,s);let h=Yi.dot(Fo),f=Ji.dot(Fo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*o;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(Yi,a);Oo.subVectors(t,r);let d=Yi.dot(Oo),g=Ji.dot(Oo);if(g>=0&&d<=g)return e.copy(r);let M=d*o-c*g;if(M<=0&&o>=0&&g<=0)return l=o/(o-g),e.copy(i).addScaledVector(Ji,l);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Lc.subVectors(r,s),l=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Lc,l);let p=1/(m+M+u);return a=M*p,l=u*p,e.copy(i).addScaledVector(Yi,a).addScaledVector(Ji,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},ri=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Mr.copy(i.boundingBox)),Mr.applyMatrix4(t.matrixWorld),this.union(Mr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Is),Sr.subVectors(this.max,Is),Zi.subVectors(t.a,Is),$i.subVectors(t.b,Is),Ki.subVectors(t.c,Is),ei.subVectors($i,Zi),ni.subVectors(Ki,$i),Ti.subVectors(Zi,Ki);let e=[0,-ei.z,ei.y,0,-ni.z,ni.y,0,-Ti.z,Ti.y,ei.z,0,-ei.x,ni.z,0,-ni.x,Ti.z,0,-Ti.x,-ei.y,ei.x,0,-ni.y,ni.x,0,-Ti.y,Ti.x,0];return!Vo(e,Zi,$i,Ki,Sr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,Zi,$i,Ki,Sr))?!1:(br.crossVectors(ei,ni),e=[br.x,br.y,br.z],Vo(e,Zi,$i,Ki,Sr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Wn=[new O,new O,new O,new O,new O,new O,new O,new O],vn=new O,Mr=new ri,Zi=new O,$i=new O,Ki=new O,ei=new O,ni=new O,Ti=new O,Is=new O,Sr=new O,br=new O,Ai=new O;function Vo(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);let l=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=t.dot(Ai),o=e.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var Pe=new O,wr=new te,od=0,nn=class extends Nn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:od++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=An,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)wr.fromBufferAttribute(this,e),wr.applyMatrix3(t),this.setXY(e,wr.x,wr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Rs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=en(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),i=en(i,this.array),s=en(s,this.array),r=en(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Vs=class extends nn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var Hs=class extends nn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var Se=class extends nn{constructor(t,e,i){super(new Float32Array(t),e,i)}},ld=new ri,Ls=new O,Ho=new O,cs=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):ld.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);let e=Ls.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ls,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ho.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Ho)),this.expandByPoint(Ls.copy(t.center).sub(Ho))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},cd=0,pn=new ye,Go=new Oe,ji=new O,ln=new ri,Ds=new ri,Ue=new O,rn=class n extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cd++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ju(t)?Hs:Vs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return pn.makeRotationFromQuaternion(t),this.applyMatrix4(pn),this}rotateX(t){return pn.makeRotationX(t),this.applyMatrix4(pn),this}rotateY(t){return pn.makeRotationY(t),this.applyMatrix4(pn),this}rotateZ(t){return pn.makeRotationZ(t),this.applyMatrix4(pn),this}translate(t,e,i){return pn.makeTranslation(t,e,i),this.applyMatrix4(pn),this}scale(t,e,i){return pn.makeScale(t,e,i),this.applyMatrix4(pn),this}lookAt(t){return Go.lookAt(t),Go.updateMatrix(),this.applyMatrix4(Go.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ji).negate(),this.translate(ji.x,ji.y,ji.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Se(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cs);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let i=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Ds.setFromBufferAttribute(l),this.morphTargetsRelative?(Ue.addVectors(ln.min,Ds.min),ln.expandByPoint(Ue),Ue.addVectors(ln.max,Ds.max),ln.expandByPoint(Ue)):(ln.expandByPoint(Ds.min),ln.expandByPoint(Ds.max))}ln.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ue.fromBufferAttribute(l,o),c&&(ji.fromBufferAttribute(t,o),Ue.add(ji)),s=Math.max(s,i.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new nn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let x=0;x<i.count;x++)l[x]=new O,c[x]=new O;let o=new O,h=new O,f=new O,u=new te,d=new te,g=new te,M=new O,m=new O;function p(x,w,R){o.fromBufferAttribute(i,x),h.fromBufferAttribute(i,w),f.fromBufferAttribute(i,R),u.fromBufferAttribute(r,x),d.fromBufferAttribute(r,w),g.fromBufferAttribute(r,R),h.sub(o),f.sub(o),d.sub(u),g.sub(u);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(M.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(L),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),l[x].add(M),l[w].add(M),l[R].add(M),c[x].add(m),c[w].add(m),c[R].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let x=0,w=T.length;x<w;++x){let R=T[x],L=R.start,U=R.count;for(let V=L,E=L+U;V<E;V+=3)p(t.getX(V+0),t.getX(V+1),t.getX(V+2))}let C=new O,y=new O,S=new O,b=new O;function P(x){S.fromBufferAttribute(s,x),b.copy(S);let w=l[x];C.copy(w),C.sub(S.multiplyScalar(S.dot(w))).normalize(),y.crossVectors(b,w);let L=y.dot(c[x])<0?-1:1;a.setXYZW(x,C.x,C.y,C.z,L)}for(let x=0,w=T.length;x<w;++x){let R=T[x],L=R.start,U=R.count;for(let V=L,E=L+U;V<E;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new nn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new O,r=new O,a=new O,l=new O,c=new O,o=new O,h=new O,f=new O;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),M=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,M),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,M),o.fromBufferAttribute(i,m),l.add(h),c.add(h),o.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(l,c){let o=l.array,h=l.itemSize,f=l.normalized,u=new o.constructor(c.length*h),d=0,g=0;for(let M=0,m=c.length;M<m;M++){l.isInterleavedBufferAttribute?d=c[M]*l.data.stride+l.offset:d=c[M]*h;for(let p=0;p<h;p++)u[g++]=o[d++]}return new nn(u,h,f)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=t(c,i);e.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let h=0,f=o.length;h<f;h++){let u=o[h],d=t(u,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(t[o]=c[o]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let o=i[c];t.data.attributes[c]=o.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let f=0,u=o.length;f<u;f++){let d=o[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let o in s){let h=s[o];this.setAttribute(o,h.clone(e))}let r=t.morphAttributes;for(let o in r){let h=[],f=r[o];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[o]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let o=0,h=a.length;o<h;o++){let f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Wo=new O,hd=new O,ud=new Xt,yn=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Wo.subVectors(i,e).cross(hd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(Wo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||ud.getNormalMatrix(t),s=this.coplanarPoint(Wo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},dd=0,ai=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dd++}),this.uuid=or(),this.name="",this.type="Material",this.blending=ms,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rl,this.blendDst=al,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new qt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new yn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new te().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Xn=new O,Xo=new O,Tr=new O,Ar=new O,jr=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Xn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xn.copy(this.origin).addScaledVector(this.direction,e),Xn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xo.copy(t).add(e).multiplyScalar(.5),Tr.copy(e).sub(t).normalize(),Ar.copy(this.origin).sub(Xo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Tr),l=Ar.dot(this.direction),c=-Ar.dot(Tr),o=Ar.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-l,u=a*l-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*l)+u*(a*f+u+2*c)+o}else u=r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;else u=-r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;else u<=-g?(f=Math.max(0,-(-a*r+l)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+o):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+o):(f=Math.max(0,-(a*r+l)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+o);else u=a>0?-r:r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Xo).addScaledVector(Tr,u),d}intersectSphere(t,e){if(t.radius<0)return null;Xn.subVectors(t.center,this.origin);let i=Xn.dot(this.direction),s=Xn.dot(Xn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,l,c,o=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return o>=0?(i=(t.min.x-u.x)*o,s=(t.max.x-u.x)*o):(i=(t.max.x-u.x)*o,s=(t.min.x-u.x)*o),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(l=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Xn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,h=l.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,M=e.y-a.y,m=e.z-a.z,p=i.x-a.x,T=i.y-a.y,C=i.z-a.z,y=Math.abs(c),S=Math.abs(o),b=Math.abs(h),P,x,w,R,L,U,V,E,B,Y,J,st;if(y>=S&&y>=b?(w=c,U=f,B=g,st=p,c>=0?(P=o,x=h,R=u,L=d,V=M,E=m,Y=T,J=C):(P=h,x=o,R=d,L=u,V=m,E=M,Y=C,J=T)):S>=b?(w=o,U=u,B=M,st=T,o>=0?(P=h,x=c,R=d,L=f,V=m,E=g,Y=C,J=p):(P=c,x=h,R=f,L=d,V=g,E=m,Y=p,J=C)):(w=h,U=d,B=m,st=C,h>=0?(P=c,x=o,R=f,L=u,V=g,E=M,Y=p,J=T):(P=o,x=c,R=u,L=f,V=M,E=g,Y=T,J=p)),w===0)return null;let F=P/w,k=x/w,$=1/w,at=R-F*U,gt=L-k*U,Yt=V-F*B,Jt=E-k*B,jt=Y-F*st,Z=J-k*st,it=jt*Jt-Z*Yt,bt=at*Z-gt*jt,Bt=Yt*gt-Jt*at;if(s){if(it<0||bt<0||Bt<0)return null}else if((it<0||bt<0||Bt<0)&&(it>0||bt>0||Bt>0))return null;let St=it+bt+Bt;if(St===0)return null;let zt=$*(it*U+bt*B+Bt*st);return(St>0?zt<0:zt>0)?null:this.at(zt/St,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},oi=class extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.combine=ol,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Dc=new ye,Ei=new jr,Er=new cs,Nc=new O,Cr=new O,Rr=new O,Pr=new O,qo=new O,Ir=new O,Uc=new O,Lr=new O,ae=class extends Oe{constructor(t=new rn,e=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Ir.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let h=l[c],f=r[c];h!==0&&(qo.fromBufferAttribute(f,t),a?Ir.addScaledVector(qo,h):Ir.addScaledVector(qo.sub(e),h))}e.add(Ir)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(r),Ei.copy(t.ray).recast(t.near),!(Er.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(Er,Nc)===null||Ei.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Dc.copy(r).invert(),Ei.copy(t.ray).applyMatrix4(Dc),!(i.boundingBox!==null&&Ei.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ei)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),C=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,S=C;y<S;y+=3){let b=l.getX(y),P=l.getX(y+1),x=l.getX(y+2);s=Dr(this,p,t,i,o,h,f,b,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let T=l.getX(m),C=l.getX(m+1),y=l.getX(m+2);s=Dr(this,a,t,i,o,h,f,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,M=u.length;g<M;g++){let m=u[g],p=a[m.materialIndex],T=Math.max(m.start,d.start),C=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let y=T,S=C;y<S;y+=3){let b=y,P=y+1,x=y+2;s=Dr(this,p,t,i,o,h,f,b,P,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let m=g,p=M;m<p;m+=3){let T=m,C=m+1,y=m+2;s=Dr(this,a,t,i,o,h,f,T,C,y),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function fd(n,t,e,i,s,r,a,l){let c;if(t.side===Qe?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,t.side===pi,l),c===null)return null;Lr.copy(l),Lr.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(Lr);return o<e.near||o>e.far?null:{distance:o,point:Lr.clone(),object:n}}function Dr(n,t,e,i,s,r,a,l,c,o){n.getVertexPosition(l,Cr),n.getVertexPosition(c,Rr),n.getVertexPosition(o,Pr);let h=fd(n,t,e,i,Cr,Rr,Pr,Uc);if(h){let f=new O;si.getBarycoord(Uc,Cr,Rr,Pr,f),s&&(h.uv=si.getInterpolatedAttribute(s,l,c,o,f,new te)),r&&(h.uv1=si.getInterpolatedAttribute(r,l,c,o,f,new te)),a&&(h.normal=si.getInterpolatedAttribute(a,l,c,o,f,new O),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:o,normal:new O,materialIndex:0};si.getNormal(Cr,Rr,Pr,u.normal),h.face=u,h.barycoord=f}return h}var Qr=class extends $e{constructor(t=null,e=1,i=1,s,r,a,l,c,o=Fe,h=Fe,f,u){super(null,a,l,c,o,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=new cs,pd=new te(.5,.5),Nr=new O,hs=class{constructor(t=new yn,e=new yn,i=new yn,s=new yn,r=new yn,a=new yn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Mn,i=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],o=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],M=r[9],m=r[10],p=r[11],T=r[12],C=r[13],y=r[14],S=r[15];if(s[0].setComponents(o-a,d-h,p-g,S-T).normalize(),s[1].setComponents(o+a,d+h,p+g,S+T).normalize(),s[2].setComponents(o+l,d+f,p+M,S+C).normalize(),s[3].setComponents(o-l,d-f,p-M,S-C).normalize(),i)s[4].setComponents(c,u,m,y).normalize(),s[5].setComponents(o-c,d-u,p-m,S-y).normalize();else if(s[4].setComponents(o-c,d-u,p-m,S-y).normalize(),e===Mn)s[5].setComponents(o+c,d+u,p+m,S+y).normalize();else if(e===rs)s[5].setComponents(c,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){Ci.center.set(0,0,0);let e=pd.distanceTo(t.center);return Ci.radius=.7071067811865476+e,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Nr.x=s.normal.x>0?t.max.x:t.min.x,Nr.y=s.normal.y>0?t.max.y:t.min.y,Nr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Nr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Gs=class extends $e{constructor(t=[],e=mi,i,s,r,a,l,c,o,h){super(t,e,i,s,r,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ws=class extends $e{constructor(t,e,i,s,r,a,l,c,o){super(t,e,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var li=class extends $e{constructor(t,e,i=Tn,s,r,a,l=Fe,c=Fe,o,h=Dn,f=1){if(h!==Dn&&h!==_i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new os(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ta=class extends li{constructor(t,e=Tn,i=mi,s,r,a=Fe,l=Fe,c,o=Dn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,l,c,o),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Xs=class extends $e{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ke=class n extends rn{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Se(o,3)),this.setAttribute("normal",new Se(h,3)),this.setAttribute("uv",new Se(f,2));function g(M,m,p,T,C,y,S,b,P,x,w){let R=y/P,L=S/x,U=y/2,V=S/2,E=b/2,B=P+1,Y=x+1,J=0,st=0,F=new O;for(let k=0;k<Y;k++){let $=k*L-V;for(let at=0;at<B;at++){let gt=at*R-U;F[M]=gt*T,F[m]=$*C,F[p]=E,o.push(F.x,F.y,F.z),F[M]=0,F[m]=0,F[p]=b>0?1:-1,h.push(F.x,F.y,F.z),f.push(at/P),f.push(1-k/x),J+=1}}for(let k=0;k<x;k++)for(let $=0;$<P;$++){let at=u+$+B*k,gt=u+$+B*(k+1),Yt=u+($+1)+B*(k+1),Jt=u+($+1)+B*k;c.push(at,gt,Jt),c.push(gt,Yt,Jt),st+=6}l.addGroup(d,st,w),d+=st,u+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ci=class n extends rn{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],c=[],o=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=i*2+r,M=s+1,m=new O,p=new O;for(let T=0;T<=g;T++){let C=0,y=0,S=0,b=0;if(T<=i){let w=T/i,R=w*Math.PI/2;y=-h-t*Math.cos(R),S=t*Math.sin(R),b=-t*Math.cos(R),C=w*f}else if(T<=i+r){let w=(T-i)/r;y=-h+w*e,S=t,b=0,C=f+w*u}else{let w=(T-i-r)/i,R=w*Math.PI/2;y=h+t*Math.sin(R),S=t*Math.cos(R),b=t*Math.sin(R),C=f+u+w*f}let P=Math.max(0,Math.min(1,C/d)),x=0;T===0?x=.5/s:T===g&&(x=-.5/s);for(let w=0;w<=s;w++){let R=w/s,L=R*Math.PI*2,U=Math.sin(L),V=Math.cos(L);p.x=-S*V,p.y=y,p.z=S*U,l.push(p.x,p.y,p.z),m.set(-S*V,b,S*U),m.normalize(),c.push(m.x,m.y,m.z),o.push(R+x,P)}if(T>0){let w=(T-1)*M;for(let R=0;R<s;R++){let L=w+R,U=w+R+1,V=T*M+R,E=T*M+R+1;a.push(L,U,V),a.push(U,E,V)}}}this.setIndex(a),this.setAttribute("position",new Se(l,3)),this.setAttribute("normal",new Se(c,3)),this.setAttribute("uv",new Se(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var us=class n extends rn{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,M=[],m=i/2,p=0;T(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(h),this.setAttribute("position",new Se(f,3)),this.setAttribute("normal",new Se(u,3)),this.setAttribute("uv",new Se(d,2));function T(){let y=new O,S=new O,b=0,P=(e-t)/i;for(let x=0;x<=r;x++){let w=[],R=x/r,L=R*(e-t)+t;for(let U=0;U<=s;U++){let V=U/s,E=V*c+l,B=Math.sin(E),Y=Math.cos(E);S.x=L*B,S.y=-R*i+m,S.z=L*Y,f.push(S.x,S.y,S.z),y.set(B,P,Y).normalize(),u.push(y.x,y.y,y.z),d.push(V,1-R),w.push(g++)}M.push(w)}for(let x=0;x<s;x++)for(let w=0;w<r;w++){let R=M[w][x],L=M[w+1][x],U=M[w+1][x+1],V=M[w][x+1];(t>0||w!==0)&&(h.push(R,L,V),b+=3),(e>0||w!==r-1)&&(h.push(L,U,V),b+=3)}o.addGroup(p,b,0),p+=b}function C(y){let S=g,b=new te,P=new O,x=0,w=y===!0?t:e,R=y===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,m*R,0),u.push(0,R,0),d.push(.5,.5),g++;let L=g;for(let U=0;U<=s;U++){let E=U/s*c+l,B=Math.cos(E),Y=Math.sin(E);P.x=w*Y,P.y=m*R,P.z=w*B,f.push(P.x,P.y,P.z),u.push(0,R,0),b.x=B*.5+.5,b.y=Y*.5*R+.5,d.push(b.x,b.y),g++}for(let U=0;U<s;U++){let V=S+U,E=L+U;y===!0?h.push(E,E+1,V):h.push(E+1,E,V),x+=3}o.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var hi=class n extends rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(i),c=Math.floor(s),o=l+1,h=c+1,f=t/l,u=e/c,d=[],g=[],M=[],m=[];for(let p=0;p<h;p++){let T=p*u-a;for(let C=0;C<o;C++){let y=C*f-r;g.push(y,-T,0),M.push(0,0,1),m.push(C/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<l;T++){let C=T+o*p,y=T+o*(p+1),S=T+1+o*(p+1),b=T+1+o*p;d.push(C,y,b),d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},qs=class n extends rn{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let l=[],c=[],o=[],h=[],f=t,u=(e-t)/s,d=new O,g=new te;for(let M=0;M<=s;M++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),o.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let M=0;M<s;M++){let m=M*(i+1);for(let p=0;p<i;p++){let T=p+m,C=T,y=T+i+1,S=T+i+2,b=T+1;l.push(C,y,b),l.push(y,S,b)}}this.setIndex(l),this.setAttribute("position",new Se(c,3)),this.setAttribute("normal",new Se(o,3)),this.setAttribute("uv",new Se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Pi=class n extends rn{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],f=new O,u=new O,d=[],g=[],M=[],m=[];for(let p=0;p<=i;p++){let T=[],C=p/i,y=a+C*l,S=t*Math.cos(y),b=Math.sqrt(t*t-S*S),P=0;p===0&&a===0?P=.5/e:p===i&&c===Math.PI&&(P=-.5/e);for(let x=0;x<=e;x++){let w=x/e,R=s+w*r;f.x=-b*Math.cos(R),f.y=S,f.z=b*Math.sin(R),g.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(w+P,1-C),T.push(o++)}h.push(T)}for(let p=0;p<i;p++)for(let T=0;T<e;T++){let C=h[p][T+1],y=h[p][T],S=h[p+1][T],b=h[p+1][T+1];(p!==0||a>0)&&d.push(C,y,b),(p!==i-1||c<Math.PI)&&d.push(y,S,b)}this.setIndex(d),this.setAttribute("position",new Se(g,3)),this.setAttribute("normal",new Se(M,3)),this.setAttribute("uv",new Se(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ni(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Fc(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Fc(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ye(n){let t={};for(let e=0;e<n.length;e++){let i=Ni(n[e]);for(let s in i)t[s]=i[s]}return t}function Fc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function md(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function wl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var Eh={clone:Ni,merge:Ye},gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ni(t.uniforms),this.uniformsGroups=md(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new qt().setHex(s.value);break;case"v2":this.uniforms[i].value=new te().fromArray(s.value);break;case"v3":this.uniforms[i].value=new O().fromArray(s.value);break;case"v4":this.uniforms[i].value=new be().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Xt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new ye().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ea=class extends je{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},cn=class extends ai{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new te(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var na=class extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ia=class extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Qi(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function Yo(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var ui=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let l=i+a>>>1;t<e[l]?a=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},sa=class extends ui{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$o,endingEnd:$o}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case Ko:r=t,l=2*e-i;break;case jo:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Ko:a=t,c=2*i-e;break;case jo:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let o=(i-e)*.5,h=this.valueSize;this._weightPrev=o/(e-l),this._weightNext=o/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),M=g*g,m=M*g,p=-u*m+2*u*M-u*g,T=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*g+1,C=(-1-d)*m+(1.5+d)*M+.5*g,y=d*m-d*M;for(let S=0;S!==l;++S)r[S]=p*a[h+S]+T*a[o+S]+C*a[c+S]+y*a[f+S];return r}},ra=class extends ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==l;++u)r[u]=a[o+u]*f+a[c+u]*h;return r}},aa=class extends ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},oa=class extends ui{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),M=1-g;for(let m=0;m!==l;++m)r[m]=a[o+m]*M+a[c+m]*g;return r}let u=l*2,d=t-1;for(let g=0;g!==l;++g){let M=a[o+g],m=a[c+g],p=d*u+g*2,T=f[p],C=f[p+1],y=t*u+g*2,S=h[y],b=h[y+1],P=vd(i,e,T,S,s);r[g]=Ch(P,M,C,b,m)}return r}};function Ch(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function xd(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function vd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let l=Ch(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=xd(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var hn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Qi(e,this.TimeBufferType),this.values=Qi(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:Qi(t.times,Array),values:Qi(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),Yo(t.settings)&&(i.settings={inTangents:Qi(t.settings.inTangents,Array),outTangents:Qi(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new aa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ra(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new sa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new oa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ns:e=this.InterpolantFactoryMethodDiscrete;break;case Yr:e=this.InterpolantFactoryMethodLinear;break;case Or:e=this.InterpolantFactoryMethodSmooth;break;case Zo:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return kt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ns;case this.InterpolantFactoryMethodLinear:return Yr;case this.InterpolantFactoryMethodSmooth:return Or;case this.InterpolantFactoryMethodBezier:return Zo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;Yo(this.settings)&&(Oc(this.settings.inTangents,t),Oc(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Vt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Vt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Vt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){Vt("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&Zu(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Vt("KeyframeTrack: Value is not a valid number.",this,l,o),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Or,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=t[l],h=t[l+1];if(o!==h&&(l!==1||o!==t[0]))if(s)c=!0;else{let f=l*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let M=e[f+g];if(M!==e[u+g]||M!==e[d+g]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let f=l*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)e[c+o]=e[l+o];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,Yo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oc(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}hn.prototype.ValueTypeName="";hn.prototype.TimeBufferType=Float32Array;hn.prototype.ValueBufferType=Float32Array;hn.prototype.DefaultInterpolation=Yr;var di=class extends hn{constructor(t,e,i){super(t,e,i)}};di.prototype.ValueTypeName="bool";di.prototype.ValueBufferType=Array;di.prototype.DefaultInterpolation=Ns;di.prototype.InterpolantFactoryMethodLinear=void 0;di.prototype.InterpolantFactoryMethodSmooth=void 0;var la=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};la.prototype.ValueTypeName="color";var ca=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};ca.prototype.ValueTypeName="number";var ha=class extends ui{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),o=t*l;for(let h=o+l;o!==h;o+=4)qe.slerpFlat(r,0,a,o-l,a,o,c);return r}},Ys=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new ha(this.times,this.values,this.getValueSize(),t)}};Ys.prototype.ValueTypeName="quaternion";Ys.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends hn{constructor(t,e,i){super(t,e,i)}};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=Ns;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var ua=class extends hn{constructor(t,e,i,s){super(t,e,i,s)}};ua.prototype.ValueTypeName="vector";var da=class{constructor(t,e,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return o.push(h,f),this},this.removeHandler=function(h){let f=o.indexOf(h);return f!==-1&&o.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=o.length;f<u;f+=2){let d=o[f],g=o[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rh=new da,fa=class{constructor(t){this.manager=t!==void 0?t:Rh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Js=class extends Oe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Zs=class extends Js{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jo=new ye,Bc=new O,zc=new O,pa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new te(512,512),this.mapType=an,this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hs,this._frameExtents=new te(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Bc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bc),zc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(zc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;t.coordinateSystem===rs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Ur=new O,Fr=new qe,In=new O,$s=class extends Oe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Ur,Fr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Ur,Fr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ur,Fr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new O,kc=new te,Vc=new te,Xe=class extends $s{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Jr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jr*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ii.x,ii.y).multiplyScalar(-t/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ii.x,ii.y).multiplyScalar(-t/ii.z)}getViewSize(t,e){return this.getViewBounds(t,kc,Vc),e.subVectors(Vc,kc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ds=class extends $s{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qo=class extends pa{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fs=class extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Oe.DEFAULT_UP),this.updateMatrix(),this.target=new Oe,this.shadow=new Qo}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ts=-90,es=1,ma=class extends Oe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(ts,es,t,e);s.layers=this.layers,this.add(s);let r=new Xe(ts,es,t,e);r.layers=this.layers,this.add(r);let a=new Xe(ts,es,t,e);a.layers=this.layers,this.add(a);let l=new Xe(ts,es,t,e);l.layers=this.layers,this.add(l);let c=new Xe(ts,es,t,e);c.layers=this.layers,this.add(c);let o=new Xe(ts,es,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,l,c]=e;for(let o of e)this.remove(o);if(t===Mn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===rs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),i.texture.generateMipmaps=M,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ga=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Tl="\\[\\]\\.:\\/",yd=new RegExp("["+Tl+"]","g"),Al="[^"+Tl+"]",Md="[^"+Tl.replace("\\.","")+"]",Sd=/((?:WC+[\/:])*)/.source.replace("WC",Al),bd=/(WCOD+)?/.source.replace("WCOD",Md),wd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Al),Td=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Al),Ad=new RegExp("^"+Sd+bd+wd+Td+"$"),Ed=["material","materials","bones","map"],tl=class{constructor(t,e,i){let s=i||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ve=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yd,"")}static parseTrackName(t){let e=Ad.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Ed.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=e.objectIndex;switch(i){case"materials":if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Vt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Vt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===o){o=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Vt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Vt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Vt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(o!==void 0){if(t[o]===void 0){Vt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[o]}}let a=t[s];if(a===void 0){let o=e.nodeName;Vt("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Vt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=tl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var zg=new Float32Array(1);var Ll=class Ll{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};Ll.prototype.isMatrix2=!0;var el=Ll;function El(n,t,e,i){let s=Cd(i);switch(e){case vl:return n*t;case Ml:return n*t/s.components*s.byteLength;case wa:return n*t/s.components*s.byteLength;case xi:return n*t*2/s.components*s.byteLength;case Ta:return n*t*2/s.components*s.byteLength;case yl:return n*t*3/s.components*s.byteLength;case mn:return n*t*4/s.components*s.byteLength;case Aa:return n*t*4/s.components*s.byteLength;case er:case nr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ir:case sr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ca:case Pa:return Math.max(n,16)*Math.max(t,8)/4;case Ea:case Ra:return Math.max(n,8)*Math.max(t,8)/2;case Ia:case La:case Na:case Ua:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Da:case rr:case Fa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Oa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case za:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ka:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Va:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Ha:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Wa:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Xa:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case qa:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Ya:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Ja:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Za:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case $a:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Ka:case ja:case Qa:return Math.ceil(n/4)*Math.ceil(t/4)*16;case to:case eo:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ar:case no:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Cd(n){switch(n){case an:case ml:return{byteLength:1,components:1};case gs:case gl:case En:return{byteLength:2,components:1};case Sa:case ba:return{byteLength:2,components:4};case Tn:case Ma:case An:return{byteLength:4,components:1};case _l:case xl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Kh(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Pd(n){let t=new WeakMap;function e(l,c){let o=l.array,h=l.usage,f=o.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,o,h),l.onUploadCallback();let d;if(o instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=n.SHORT;else if(o instanceof Uint32Array)d=n.UNSIGNED_INT;else if(o instanceof Int32Array)d=n.INT;else if(o instanceof Int8Array)d=n.BYTE;else if(o instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,o){let h=c.array,f=c.updateRanges;if(n.bindBuffer(o,l),f.length===0)n.bufferSubData(o,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],M=f[d];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let M=f[d];n.bufferSubData(o,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=t.get(l);if(o===void 0)t.set(l,e(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var Id=`#ifdef USE_ALPHAHASH
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
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
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
#endif`,zd=`#ifdef USE_BATCHING
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
#endif`,kd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gd=`float G_BlinnPhong_Implicit( ) {
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
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
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
#endif`,tf=`#define PI 3.141592653589793
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
} // validated`,ef=`#ifdef ENVMAP_TYPE_CUBE_UV
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
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
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
#endif`,Hf=`#if defined( USE_POINTS_UV )
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
#endif`,Gf=`float metalnessFactor = metalness;
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
#endif`,Jf=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
}`,Dp=`uniform sampler2D t2D;
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
}`,Np=`varying vec3 vWorldDirection;
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
}`,zp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
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
}`,Jp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,$p=`#define MATCAP
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
}`,tm=`#define PHONG
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
}`,em=`#define PHONG
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
}`,Kt={alphahash_fragment:Id,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:zd,batching_vertex:kd,begin_vertex:Vd,beginnormal_vertex:Hd,bsdfs:Gd,iridescence_fragment:Wd,bumpmap_pars_fragment:Xd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:Yd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:Zd,color_fragment:$d,color_pars_fragment:Kd,color_pars_vertex:jd,color_vertex:Qd,common:tf,cube_uv_reflection_fragment:ef,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:_f,fog_pars_fragment:xf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:yf,lights_lambert_fragment:Mf,lights_lambert_pars_fragment:Sf,lights_pars_begin:bf,lights_toon_fragment:Tf,lights_toon_pars_fragment:Af,lights_phong_fragment:Ef,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:Pf,lights_fragment_begin:If,lights_fragment_maps:Lf,lights_fragment_end:Df,lightprobes_pars_fragment:Nf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:zf,map_pars_fragment:kf,map_particle_fragment:Vf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:Jf,morphtarget_vertex:Zf,normal_fragment_begin:$f,normal_fragment_maps:Kf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:xp,skinning_pars_vertex:vp,skinning_vertex:yp,skinnormal_vertex:Mp,specularmap_fragment:Sp,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Tp,transmission_fragment:Ap,transmission_pars_fragment:Ep,uv_pars_fragment:Cp,uv_pars_vertex:Rp,uv_vertex:Pp,worldpos_vertex:Ip,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Np,backgroundCube_frag:Up,cube_vert:Fp,cube_frag:Op,depth_vert:Bp,depth_frag:zp,distance_vert:kp,distance_frag:Vp,equirect_vert:Hp,equirect_frag:Gp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:Jp,meshlambert_frag:Zp,meshmatcap_vert:$p,meshmatcap_frag:Kp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:tm,meshphong_frag:em,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},xt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new O},probesMax:{value:new O},probesResolution:{value:new O}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},On={basic:{uniforms:Ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:Ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},envMapIntensity:{value:1}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:Ye([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:Ye([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:Ye([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:Ye([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:Ye([xt.points,xt.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:Ye([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:Ye([xt.common,xt.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:Ye([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:Ye([xt.sprite,xt.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distance:{uniforms:Ye([xt.common,xt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distance_vert,fragmentShader:Kt.distance_frag},shadow:{uniforms:Ye([xt.lights,xt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};On.physical={uniforms:Ye([On.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var ao={r:0,b:0,g:0},dm=new ye,jh=new Xt;jh.set(-1,0,0,0,1,0,0,0,1);function fm(n,t,e,i,s,r){let a=new qt(0),l=s===!0?0:1,c,o,h=null,f=0,u=null;function d(T){let C=T.isScene===!0?T.background:null;if(C&&C.isTexture){let y=T.backgroundBlurriness>0;C=t.get(C,y)}return C}function g(T){let C=!1,y=d(T);y===null?m(a,l):y&&y.isColor&&(m(y,1),C=!0);let S=n.xr.getEnvironmentBlendMode();S==="additive"?e.buffers.color.setClear(0,0,0,1,r):S==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function M(T,C){let y=d(C);y&&(y.isCubeTexture||y.mapping===Qs)?(o===void 0&&(o=new ae(new Ke(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:Ni(On.backgroundCube.uniforms),vertexShader:On.backgroundCube.vertexShader,fragmentShader:On.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(S,b,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=y,o.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(C.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(jh),o.material.toneMapped=ne.getTransfer(y.colorSpace)!==ue,(h!==y||f!==y.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),o.layers.enableAll(),T.unshift(o,o.geometry,o.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ae(new hi(2,2),new je({name:"BackgroundMaterial",uniforms:Ni(On.background.uniforms),vertexShader:On.background.vertexShader,fragmentShader:On.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=ne.getTransfer(y.colorSpace)!==ue,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,u=n.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function m(T,C){T.getRGB(ao,wl(n)),e.buffers.color.setClear(ao.r,ao.g,ao.b,C,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,C=1){a.set(T),l=C,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,m(a,l)},render:g,addToRenderList:M,dispose:p}}function pm(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function l(L,U,V,E,B){let Y=!1,J=f(L,E,V,U);r!==J&&(r=J,o(r.object)),Y=d(L,E,V,B),Y&&g(L,E,V,B),B!==null&&t.update(B,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(L,U,V,E),B!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function c(){return n.createVertexArray()}function o(L){return n.bindVertexArray(L)}function h(L){return n.deleteVertexArray(L)}function f(L,U,V,E){let B=E.wireframe===!0,Y=i[U.id];Y===void 0&&(Y={},i[U.id]=Y);let J=L.isInstancedMesh===!0?L.id:0,st=Y[J];st===void 0&&(st={},Y[J]=st);let F=st[V.id];F===void 0&&(F={},st[V.id]=F);let k=F[B];return k===void 0&&(k=u(c()),F[B]=k),k}function u(L){let U=[],V=[],E=[];for(let B=0;B<e;B++)U[B]=0,V[B]=0,E[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:E,object:L,attributes:{},index:null}}function d(L,U,V,E){let B=r.attributes,Y=U.attributes,J=0,st=V.getAttributes();for(let F in st)if(st[F].location>=0){let $=B[F],at=Y[F];if(at===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&(at=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&(at=L.instanceColor)),$===void 0||$.attribute!==at||at&&$.data!==at.data)return!0;J++}return r.attributesNum!==J||r.index!==E}function g(L,U,V,E){let B={},Y=U.attributes,J=0,st=V.getAttributes();for(let F in st)if(st[F].location>=0){let $=Y[F];$===void 0&&(F==="instanceMatrix"&&L.instanceMatrix&&($=L.instanceMatrix),F==="instanceColor"&&L.instanceColor&&($=L.instanceColor));let at={};at.attribute=$,$&&$.data&&(at.data=$.data),B[F]=at,J++}r.attributes=B,r.attributesNum=J,r.index=E}function M(){let L=r.newAttributes;for(let U=0,V=L.length;U<V;U++)L[U]=0}function m(L){p(L,0)}function p(L,U){let V=r.newAttributes,E=r.enabledAttributes,B=r.attributeDivisors;V[L]=1,E[L]===0&&(n.enableVertexAttribArray(L),E[L]=1),B[L]!==U&&(n.vertexAttribDivisor(L,U),B[L]=U)}function T(){let L=r.newAttributes,U=r.enabledAttributes;for(let V=0,E=U.length;V<E;V++)U[V]!==L[V]&&(n.disableVertexAttribArray(V),U[V]=0)}function C(L,U,V,E,B,Y,J){J===!0?n.vertexAttribIPointer(L,U,V,B,Y):n.vertexAttribPointer(L,U,V,E,B,Y)}function y(L,U,V,E){M();let B=E.attributes,Y=V.getAttributes(),J=U.defaultAttributeValues;for(let st in Y){let F=Y[st];if(F.location>=0){let k=B[st];if(k===void 0&&(st==="instanceMatrix"&&L.instanceMatrix&&(k=L.instanceMatrix),st==="instanceColor"&&L.instanceColor&&(k=L.instanceColor)),k!==void 0){let $=k.normalized,at=k.itemSize,gt=t.get(k);if(gt===void 0)continue;let Yt=gt.buffer,Jt=gt.type,jt=gt.bytesPerElement,Z=Jt===n.INT||Jt===n.UNSIGNED_INT||k.gpuType===Ma;if(k.isInterleavedBufferAttribute){let it=k.data,bt=it.stride,Bt=k.offset;if(it.isInstancedInterleavedBuffer){for(let St=0;St<F.locationSize;St++)p(F.location+St,it.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let St=0;St<F.locationSize;St++)m(F.location+St);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let St=0;St<F.locationSize;St++)C(F.location+St,at/F.locationSize,Jt,$,bt*jt,(Bt+at/F.locationSize*St)*jt,Z)}else{if(k.isInstancedBufferAttribute){for(let it=0;it<F.locationSize;it++)p(F.location+it,k.meshPerAttribute);L.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let it=0;it<F.locationSize;it++)m(F.location+it);n.bindBuffer(n.ARRAY_BUFFER,Yt);for(let it=0;it<F.locationSize;it++)C(F.location+it,at/F.locationSize,Jt,$,at*jt,at/F.locationSize*it*jt,Z)}}else if(J!==void 0){let $=J[st];if($!==void 0)switch($.length){case 2:n.vertexAttrib2fv(F.location,$);break;case 3:n.vertexAttrib3fv(F.location,$);break;case 4:n.vertexAttrib4fv(F.location,$);break;default:n.vertexAttrib1fv(F.location,$)}}}}T()}function S(){w();for(let L in i){let U=i[L];for(let V in U){let E=U[V];for(let B in E){let Y=E[B];for(let J in Y)h(Y[J].object),delete Y[J];delete E[B]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;let U=i[L.id];for(let V in U){let E=U[V];for(let B in E){let Y=E[B];for(let J in Y)h(Y[J].object),delete Y[J];delete E[B]}}delete i[L.id]}function P(L){for(let U in i){let V=i[U];for(let E in V){let B=V[E];if(B[L.id]===void 0)continue;let Y=B[L.id];for(let J in Y)h(Y[J].object),delete Y[J];delete B[L.id]}}}function x(L){for(let U in i){let V=i[U],E=L.isInstancedMesh===!0?L.id:0,B=V[E];if(B!==void 0){for(let Y in B){let J=B[Y];for(let st in J)h(J[st].object),delete J[st];delete B[Y]}delete V[E],Object.keys(V).length===0&&delete i[U]}}}function w(){R(),a=!0,r!==s&&(r=s,o(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:w,resetDefaultState:R,dispose:S,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:P,initAttributes:M,enableAttribute:m,disableUnusedAttributes:T}}function mm(n,t,e){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),e.update(o,i,1)}function a(c,o,h){h!==0&&(n.drawArraysInstanced(i,c,o,h),e.update(o,i,h))}function l(c,o,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,h);let u=0;for(let d=0;d<h;d++)u+=o[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function gm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==mn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let x=P===En&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==an&&P!==An&&!x&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp",h=c(o);h!==o&&(kt("WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),C=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),S=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:C,maxFragmentUniforms:y,maxSamples:S,samples:b}}function _m(n){let t=this,e=null,i=0,s=!1,r=!1,a=new yn,l=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):o();else{let T=r?0:i,C=T*4,y=p.clippingState||null;c.value=y,y=h(g,u,C,d);for(let S=0;S!==C;++S)y[S]=e[S];p.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=T}};function o(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=c.value,g!==!0||m===null){let p=d+M*4,T=u.matrixWorldInverse;l.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,y=d;C!==M;++C,y+=4)a.copy(f[C]).applyMatrix4(T,l),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,m}}var vs=4,xm=6,vm=20,ym=256,lr=new ds,Ph=new qt,Dl=null,Nl=0,Ul=0,Fl=!1,Mm=new O,Ui=new O,lo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:l=Mm}=r;Dl=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Dl,Nl,Ul),this._renderer.xr.enabled=Fl,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===mi||t.mapping===Di?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Dl=this._renderer.getRenderTarget(),Nl=this._renderer.getActiveCubeFace(),Ul=this._renderer.getActiveMipmapLevel(),Fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ke,minFilter:ke,generateMipmaps:!1,type:En,format:mn,colorSpace:Us,depthBuffer:!1},s=Ih(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ih(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Sm(r)),this._blurMaterial=wm(r,t,e),this._ggxMaterial=bm(r,t,e)}return s}_compileMaterial(t){let e=new ae(new rn,t);this._renderer.compile(e,lr)}_sceneToCubeUV(t,e,i,s,r){let c=new Xe(90,1,e,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor(Ph),f.toneMapping=wn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ae(new Ke,new oi({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1})));let M=this._backgroundBox,m=M.material,p=!1,T=t.background;T?T.isColor&&(m.color.copy(T),t.background=null,p=!0):(m.color.copy(Ph),p=!0);for(let C=0;C<6;C++){let y=C%3;y===0?(c.up.set(0,o[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[C],r.y,r.z)):y===1?(c.up.set(0,0,o[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[C],r.z)):(c.up.set(0,o[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[C]));let S=this._cubeSize;xs(s,y*S,C>2?S:0,S,S),f.setRenderTarget(s),p&&f.render(M,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=T}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===mi||t.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;xs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,lr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(o*o-h*h),u=o*1.25,d=f*u,{_lodMax:g}=this,M=this._sizeLods[i],m=3*M*(i>g-vs?i-g+vs:0),p=4*(this._cubeSize-M);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,xs(r,m,p,3*M,2*M),s.setRenderTarget(r),s.render(l,lr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,xs(t,m,p,3*M,2*M),s.setRenderTarget(t),s.render(l,lr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=t.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-vs?s-this._lodMax+vs:0),u=4*(this._cubeSize-h);xs(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,lr)}};function Sm(n){let t=[],e=[],i=n,s=n-vs+1+xm;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let l=1/(a-2),c=-l,o=1+l,h=[c,c,o,c,o,o,c,c,o,o,c,o],f=6,u=6,d=3,g=new Float32Array(d*u*f),M=new Float32Array(d*u*f);for(let p=0;p<f;p++){let T=p%3*2/3-1,C=p>2?0:-1,y=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];g.set(y,d*u*p);for(let S=0;S<u;S++){let b=h[S*2]*2-1,P=h[S*2+1]*2-1;p===0?Ui.set(1,P,b):p===1?Ui.set(-b,1,-P):p===2?Ui.set(-b,P,1):p===3?Ui.set(-1,P,-b):p===4?Ui.set(-b,-1,P):Ui.set(b,P,-1),Ui.toArray(M,(p*u+S)*d)}}let m=new rn;m.setAttribute("position",new nn(g,d)),m.setAttribute("outputDirection",new nn(M,d)),e.push(new ae(m,null)),i>vs&&i--}return{lodMeshes:e,sizeLods:t}}function Ih(n,t,e){let i=new sn(n,t,e);return i.texture.mapping=Qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function xs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function bm(n,t,e){return new je({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ym,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function wm(n,t,e){return new je({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Lh(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Dh(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function uo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var co=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Gs(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ke(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:Ni(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Qe,blending:Un});r.uniforms.tEquirect.value=e;let a=new ae(s,r),l=e.minFilter;return e.minFilter===gi&&(e.minFilter=ke),new ma(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Tm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===xa||d===va)if(t.has(u)){let g=t.get(u).texture;return l(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let M=new co(g.height);return M.fromEquirectangularTexture(n,u),t.set(u,M),u.addEventListener("dispose",o),l(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===xa||d===va,M=d===mi||d===Di;if(g||M){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new lo(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let T=u.image;return g&&T&&T.height>0||M&&T&&c(T)?(i===null&&(i=new lo(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,d){return d===xa?u.mapping=mi:d===va&&(u.mapping=Di),u}function c(u){let d=0,g=6;for(let M=0;M<g;M++)u[M]!==void 0&&d++;return d===g}function o(u){let d=u.target;d.removeEventListener("dispose",o);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Am(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Ri("WebGLRenderer: "+i+" extension not supported."),s}}}function Em(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function o(f){let u=[],d=f.index,g=f.attributes.position,M=0;if(g===void 0)return;if(d!==null){let T=d.array;M=d.version;for(let C=0,y=T.length;C<y;C+=3){let S=T[C+0],b=T[C+1],P=T[C+2];u.push(S,b,b,P,P,S)}}else{let T=g.array;M=g.version;for(let C=0,y=T.length/3-1;C<y;C+=3){let S=C+0,b=C+1,P=C+2;u.push(S,b,b,P,P,S)}}let m=new(g.count>=65535?Hs:Vs)(u,1);m.version=M;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&o(f)}else o(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Cm(n,t,e){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function o(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let M=0;for(let m=0;m<d;m++)M+=u[m];e.update(M,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h}function Rm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:Vt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Pm(n,t,e){let i=new WeakMap,s=new be;function r(a,l,c){let o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(l);if(u===void 0||u.count!==f){let w=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",w)};u!==void 0&&u.texture.dispose();let d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,M=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],T=l.morphAttributes.color||[],C=0;d===!0&&(C=1),g===!0&&(C=2),M===!0&&(C=3);let y=l.attributes.position.count*C,S=1;y>t.maxTextureSize&&(S=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let b=new Float32Array(y*S*4*f),P=new Bs(b,y,S,f);P.type=An,P.needsUpdate=!0;let x=C*4;for(let R=0;R<f;R++){let L=m[R],U=p[R],V=T[R],E=y*S*4*R;for(let B=0;B<L.count;B++){let Y=B*x;d===!0&&(s.fromBufferAttribute(L,B),b[E+Y+0]=s.x,b[E+Y+1]=s.y,b[E+Y+2]=s.z,b[E+Y+3]=0),g===!0&&(s.fromBufferAttribute(U,B),b[E+Y+4]=s.x,b[E+Y+5]=s.y,b[E+Y+6]=s.z,b[E+Y+7]=0),M===!0&&(s.fromBufferAttribute(V,B),b[E+Y+8]=s.x,b[E+Y+9]=s.y,b[E+Y+10]=s.z,b[E+Y+11]=V.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new te(y,S)},i.set(l,u),l.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let M=0;M<o.length;M++)d+=o[M];let g=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function Im(n,t,e,i,s){let r=new WeakMap;function a(o){let h=s.render.frame,f=o.geometry,u=t.get(o,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==h&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){let d=o.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function l(){r=new WeakMap}function c(o){let h=o.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}var Lm={[ll]:"LINEAR_TONE_MAPPING",[cl]:"REINHARD_TONE_MAPPING",[hl]:"CINEON_TONE_MAPPING",[js]:"ACES_FILMIC_TONE_MAPPING",[dl]:"AGX_TONE_MAPPING",[fl]:"NEUTRAL_TONE_MAPPING",[ul]:"CUSTOM_TONE_MAPPING"};function Dm(n,t,e,i,s,r){let a=new sn(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new rn;o.setAttribute("position",new Se([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Se([0,2,0,0,2,0],2));let h=new ea({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new ae(o,h),u=new ds(-1,1,1,-1,0,1),d=null,g=null,M=!1,m,p=null,T=[],C=!1;this.setSize=function(y,S){a.setSize(y,S),l!==null&&l.setSize(y,S),c!==null&&c.setSize(y,S);for(let b=0;b<T.length;b++){let P=T[b];P.setSize&&P.setSize(y,S)}},this.setEffects=function(y){T=y,C=T.length>0&&T[0].isRenderPass===!0;let S=a.width,b=a.height;T.length>0&&l===null&&(l=new sn(S,b,{type:En,depthBuffer:!1,stencilBuffer:!1}),c=new sn(S,b,{type:En,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<T.length;P++){let x=T[P];x.setSize&&x.setSize(S,b)}},this.begin=function(y,S){if(M||y.toneMapping===wn&&T.length===0)return!1;if(p=S,S!==null){let b=S.width,P=S.height;(a.width!==b||a.height!==P)&&this.setSize(b,P)}return C===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=wn,!0},this.hasRenderPass=function(){return C},this.end=function(y,S){y.toneMapping=m,M=!0;let b=a,P=l;for(let x=0;x<T.length;x++){let w=T[x];w.enabled!==!1&&(w.render(y,P,b,S),w.needsSwap!==!1&&(b=P,P=P===l?c:l))}if(d!==y.outputColorSpace||g!==y.toneMapping){d=y.outputColorSpace,g=y.toneMapping,h.defines={},ne.getTransfer(d)===ue&&(h.defines.SRGB_TRANSFER="");let x=Lm[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(p),y.render(f,u),p=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),h.dispose()}}var Qh=new $e,zl=new li(1,1),tu=new Bs,eu=new Kr,nu=new Gs,Nh=[],Uh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),Bh=new Float32Array(4);function Ms(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Nh[s];if(r===void 0&&(r=new Float32Array(s),Nh[s]=r),t!==0){i.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(r,l)}return r}function Le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function De(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function fo(n,t){let e=Uh[t];e===void 0&&(e=new Int32Array(t),Uh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Nm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Um(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2fv(this.addr,t),De(e,t)}}function Fm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Le(e,t))return;n.uniform3fv(this.addr,t),De(e,t)}}function Om(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4fv(this.addr,t),De(e,t)}}function Bm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Bh.set(i),n.uniformMatrix2fv(this.addr,!1,Bh),De(e,i)}}function zm(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Oh.set(i),n.uniformMatrix3fv(this.addr,!1,Oh),De(e,i)}}function km(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),De(e,t)}else{if(Le(e,i))return;Fh.set(i),n.uniformMatrix4fv(this.addr,!1,Fh),De(e,i)}}function Vm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Hm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2iv(this.addr,t),De(e,t)}}function Gm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3iv(this.addr,t),De(e,t)}}function Wm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4iv(this.addr,t),De(e,t)}}function Xm(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Le(e,t))return;n.uniform2uiv(this.addr,t),De(e,t)}}function Ym(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Le(e,t))return;n.uniform3uiv(this.addr,t),De(e,t)}}function Jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Le(e,t))return;n.uniform4uiv(this.addr,t),De(e,t)}}function Zm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(zl.compareFunction=e.isReversedDepthBuffer()?ro:so,r=zl):r=Qh,e.setTexture2D(t||r,s)}function $m(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||eu,s)}function Km(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||nu,s)}function jm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||tu,s)}function Qm(n){switch(n){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return zm;case 35676:return km;case 5124:case 35670:return Vm;case 35667:case 35671:return Hm;case 35668:case 35672:return Gm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return qm;case 36295:return Ym;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Zm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Km;case 36289:case 36303:case 36311:case 36292:return jm}}function t0(n,t){n.uniform1fv(this.addr,t)}function e0(n,t){let e=Ms(t,this.size,2);n.uniform2fv(this.addr,e)}function n0(n,t){let e=Ms(t,this.size,3);n.uniform3fv(this.addr,e)}function i0(n,t){let e=Ms(t,this.size,4);n.uniform4fv(this.addr,e)}function s0(n,t){let e=Ms(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function r0(n,t){let e=Ms(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function a0(n,t){let e=Ms(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function o0(n,t){n.uniform1iv(this.addr,t)}function l0(n,t){n.uniform2iv(this.addr,t)}function c0(n,t){n.uniform3iv(this.addr,t)}function h0(n,t){n.uniform4iv(this.addr,t)}function u0(n,t){n.uniform1uiv(this.addr,t)}function d0(n,t){n.uniform2uiv(this.addr,t)}function f0(n,t){n.uniform3uiv(this.addr,t)}function p0(n,t){n.uniform4uiv(this.addr,t)}function m0(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=zl:a=Qh;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function g0(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||eu,r[a])}function _0(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nu,r[a])}function x0(n,t,e){let i=this.cache,s=t.length,r=fo(e,s);Le(i,r)||(n.uniform1iv(this.addr,r),De(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tu,r[a])}function v0(n){switch(n){case 5126:return t0;case 35664:return e0;case 35665:return n0;case 35666:return i0;case 35674:return s0;case 35675:return r0;case 35676:return a0;case 5124:case 35670:return o0;case 35667:case 35671:return l0;case 35668:case 35672:return c0;case 35669:case 35673:return h0;case 5125:return u0;case 36294:return d0;case 36295:return f0;case 36296:return p0;case 35678:case 36198:case 36298:case 36306:case 35682:return m0;case 35679:case 36299:case 36307:return g0;case 35680:case 36300:case 36308:case 36293:return _0;case 36289:case 36303:case 36311:case 36292:return x0}}var kl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Qm(e.type)}},Vl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=v0(e.type)}},Hl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},Ol=/(\w+)(\])?(\[|\.)?/g;function zh(n,t){n.seq.push(t),n.map[t.id]=t}function y0(n,t,e){let i=n.name,s=i.length;for(Ol.lastIndex=0;;){let r=Ol.exec(i),a=Ol.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){zh(e,o===void 0?new kl(l,n,t):new Vl(l,n,t));break}else{let f=e.map[l];f===void 0&&(f=new Hl(l),zh(e,f)),e=f}}}var ys=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);y0(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function kh(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var M0=37297,S0=0;function b0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}var Vh=new Xt;function w0(n){ne._getMatrix(Vh,ne.workingColorSpace,n);let t=`mat3( ${Vh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case Fs:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Hh(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+b0(n.getShaderSource(t),l)}else return r}function T0(n,t){let e=w0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var A0={[ll]:"Linear",[cl]:"Reinhard",[hl]:"Cineon",[js]:"ACESFilmic",[dl]:"AgX",[fl]:"Neutral",[ul]:"Custom"};function E0(n,t){let e=A0[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oo=new O;function C0(){ne.getLuminanceCoefficients(oo);let n=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function P0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function I0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function hr(n){return n!==""}function Gh(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var L0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gl(n){return n.replace(L0,N0)}var D0=new Map;function N0(n,t){let e=Kt[t];if(e===void 0){let i=D0.get(t);if(i!==void 0)e=Kt[i],kt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Gl(e)}var U0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(n){return n.replace(U0,F0)}function F0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(n){let t=`precision ${n.precision} float;
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
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var O0={[Ii]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function B0(n){return O0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var z0={[mi]:"ENVMAP_TYPE_CUBE",[Di]:"ENVMAP_TYPE_CUBE",[Qs]:"ENVMAP_TYPE_CUBE_UV"};function k0(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":z0[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var V0={[Di]:"ENVMAP_MODE_REFRACTION"};function H0(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":V0[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var G0={[ol]:"ENVMAP_BLENDING_MULTIPLY",[ch]:"ENVMAP_BLENDING_MIX",[hh]:"ENVMAP_BLENDING_ADD"};function W0(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":G0[n.combine]||"ENVMAP_BLENDING_NONE"}function X0(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function q0(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=B0(e),o=k0(e),h=H0(e),f=W0(e),u=X0(e),d=R0(e),g=P0(r),M=s.createProgram(),m,p,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(hr).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),p=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?Kt.tonemapping_pars_fragment:"",e.toneMapping!==wn?E0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,T0("linearToOutputTexel",e.outputColorSpace),C0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),a=Gl(a),a=Gh(a,e),a=Wh(a,e),l=Gl(l),l=Gh(l,e),l=Wh(l,e),a=Xh(a),l=Xh(l),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Sl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let C=T+m+a,y=T+p+l,S=kh(s,s.VERTEX_SHADER,C),b=kh(s,s.FRAGMENT_SHADER,y);s.attachShader(M,S),s.attachShader(M,b),e.index0AttributeName!==void 0?s.bindAttribLocation(M,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function P(L){if(n.debug.checkShaderErrors){let U=s.getProgramInfoLog(M)||"",V=s.getShaderInfoLog(S)||"",E=s.getShaderInfoLog(b)||"",B=U.trim(),Y=V.trim(),J=E.trim(),st=!0,F=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(st=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,M,S,b);else{let k=Hh(s,S,"vertex"),$=Hh(s,b,"fragment");Vt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+B+`
`+k+`
`+$)}else B!==""?kt("WebGLProgram: Program Info Log:",B):(Y===""||J==="")&&(F=!1);F&&(L.diagnostics={runnable:st,programLog:B,vertexShader:{log:Y,prefix:m},fragmentShader:{log:J,prefix:p}})}s.deleteShader(S),s.deleteShader(b),x=new ys(s,M),w=I0(s,M)}let x;this.getUniforms=function(){return x===void 0&&P(this),x};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(M,M0)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=S0++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=S,this.fragmentShader=b,this}var Y0=0,Wl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Xl(t),e.set(t,i)),i}},Xl=class{constructor(t){this.id=Y0++,this.code=t,this.usedTimes=0}};function J0(n){return n===xi||n===rr||n===ar}function Z0(n,t,e,i,s,r){let a=new zs,l=new Wl,c=new Set,o=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function M(x,w,R,L,U,V){let E=L.fog,B=U.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,J=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,st=t.get(x.envMap||Y,J),F=st&&st.mapping===Qs?st.image.height:null,k=d[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&kt("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let $=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,at=$!==void 0?$.length:0,gt=0;B.morphAttributes.position!==void 0&&(gt=1),B.morphAttributes.normal!==void 0&&(gt=2),B.morphAttributes.color!==void 0&&(gt=3);let Yt,Jt,jt,Z;if(k){let me=On[k];Yt=me.vertexShader,Jt=me.fragmentShader}else{Yt=x.vertexShader,Jt=x.fragmentShader;let me=l.getVertexShaderStage(x),ce=l.getFragmentShaderStage(x);l.update(x,me,ce),jt=me.id,Z=ce.id}let it=n.getRenderTarget(),bt=n.state.buffers.depth.getReversed(),Bt=U.isInstancedMesh===!0,St=U.isBatchedMesh===!0,zt=!!x.map,H=!!x.matcap,et=!!st,_t=!!x.aoMap,Lt=!!x.lightMap,ht=!!x.bumpMap&&x.wireframe===!1,vt=!!x.normalMap,se=!!x.displacementMap,ee=!!x.emissiveMap,Zt=!!x.metalnessMap,_e=!!x.roughnessMap,N=x.anisotropy>0,Ce=x.clearcoat>0,oe=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,X=x.transmission>0,K=N&&!!x.anisotropyMap,ot=Ce&&!!x.clearcoatMap,ut=Ce&&!!x.clearcoatNormalMap,j=Ce&&!!x.clearcoatRoughnessMap,tt=_&&!!x.iridescenceMap,lt=_&&!!x.iridescenceThicknessMap,Dt=z&&!!x.sheenColorMap,ft=z&&!!x.sheenRoughnessMap,ct=!!x.specularMap,Tt=!!x.specularColorMap,Ft=!!x.specularIntensityMap,Wt=X&&!!x.transmissionMap,D=X&&!!x.thicknessMap,dt=!!x.gradientMap,nt=!!x.alphaMap,mt=x.alphaTest>0,wt=!!x.alphaHash,rt=!!x.extensions,Ot=wn;x.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(Ot=n.toneMapping);let Nt={shaderID:k,shaderType:x.type,shaderName:x.name,vertexShader:Yt,fragmentShader:Jt,defines:x.defines,customVertexShaderID:jt,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:St,batchingColor:St&&U._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&U.instanceColor!==null,instancingMorph:Bt&&U.morphTexture!==null,outputColorSpace:it===null?n.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:ne.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:zt,matcap:H,envMap:et,envMapMode:et&&st.mapping,envMapCubeUVHeight:F,aoMap:_t,lightMap:Lt,bumpMap:ht,normalMap:vt,displacementMap:se,emissiveMap:ee,normalMapObjectSpace:vt&&x.normalMapType===fh,normalMapTangentSpace:vt&&x.normalMapType===io,packedNormalMap:vt&&x.normalMapType===io&&J0(x.normalMap.format),metalnessMap:Zt,roughnessMap:_e,anisotropy:N,anisotropyMap:K,clearcoat:Ce,clearcoatMap:ot,clearcoatNormalMap:ut,clearcoatRoughnessMap:j,dispersion:oe,retroreflection:A,iridescence:_,iridescenceMap:tt,iridescenceThicknessMap:lt,sheen:z,sheenColorMap:Dt,sheenRoughnessMap:ft,specularMap:ct,specularColorMap:Tt,specularIntensityMap:Ft,transmission:X,transmissionMap:Wt,thicknessMap:D,gradientMap:dt,opaque:x.transparent===!1&&x.blending===ms&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:wt,combine:x.combine,mapUv:zt&&g(x.map.channel),aoMapUv:_t&&g(x.aoMap.channel),lightMapUv:Lt&&g(x.lightMap.channel),bumpMapUv:ht&&g(x.bumpMap.channel),normalMapUv:vt&&g(x.normalMap.channel),displacementMapUv:se&&g(x.displacementMap.channel),emissiveMapUv:ee&&g(x.emissiveMap.channel),metalnessMapUv:Zt&&g(x.metalnessMap.channel),roughnessMapUv:_e&&g(x.roughnessMap.channel),anisotropyMapUv:K&&g(x.anisotropyMap.channel),clearcoatMapUv:ot&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ut&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:tt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:ft&&g(x.sheenRoughnessMap.channel),specularMapUv:ct&&g(x.specularMap.channel),specularColorMapUv:Tt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ft&&g(x.specularIntensityMap.channel),transmissionMapUv:Wt&&g(x.transmissionMap.channel),thicknessMapUv:D&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(vt||N),vertexNormals:!!B.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!B.attributes.uv&&(zt||nt),fog:!!E,useFog:x.fog===!0,fogExp2:!!E&&E.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||B.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:bt,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:gt,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ot,decodeVideoTexture:zt&&x.map.isVideoTexture===!0&&ne.getTransfer(x.map.colorSpace)===ue,decodeVideoTextureEmissive:ee&&x.emissiveMap.isVideoTexture===!0&&ne.getTransfer(x.emissiveMap.colorSpace)===ue,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===bn,flipSided:x.side===Qe,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:rt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&x.extensions.multiDraw===!0||St)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Nt.vertexUv1s=c.has(1),Nt.vertexUv2s=c.has(2),Nt.vertexUv3s=c.has(3),c.clear(),Nt}function m(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(w,x),T(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function p(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numSunLights),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numSunLightShadows),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function T(x,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function C(x){let w=d[x.type],R;if(w){let L=On[w];R=Eh.clone(L.uniforms)}else R=x.uniforms;return R}function y(x,w){let R=h.get(w);return R!==void 0?++R.usedTimes:(R=new q0(n,w,x,s),o.push(R),h.set(w,R)),R}function S(x){if(--x.usedTimes===0){let w=o.indexOf(x);o[w]=o[o.length-1],o.pop(),h.delete(x.cacheKey),x.destroy()}}function b(x){l.remove(x)}function P(){l.dispose()}return{getParameters:M,getProgramCacheKey:m,getUniforms:C,acquireProgram:y,releaseProgram:S,releaseShaderCache:b,programs:o,dispose:P}}function $0(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function K0(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Yh(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Jh(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function l(u,d,g,M,m,p){let T=n[t];return T===void 0?(T={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:p},n[t]=T):(T.id=u.id,T.object=u,T.geometry=d,T.material=g,T.materialVariant=a(u),T.groupOrder=M,T.renderOrder=u.renderOrder,T.z=m,T.group=p),t++,T}function c(u,d,g,M,m,p,T){T.reversedDepth===!0&&(m=-m);let C=l(u,d,g,M,m,p);g.transmission>0?i.push(C):g.transparent===!0?s.push(C):e.push(C)}function o(u,d,g,M,m,p){let T=l(u,d,g,M,m,p);g.transmission>0?i.unshift(T):g.transparent===!0?s.unshift(T):e.unshift(T)}function h(u,d){e.length>1&&e.sort(u||K0),i.length>1&&i.sort(d||Yh),s.length>1&&s.sort(d||Yh)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:f,sort:h}}function j0(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Jh,n.set(i,[a])):s>=r.length?(a=new Jh,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Q0(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new O,color:new qt};break;case"SpotLight":e={position:new O,direction:new O,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new O,halfWidth:new O,halfHeight:new O};break}return n[t.id]=e,e}}}function tg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var eg=0;function ng(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ig(n){let t=new Q0,e=tg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new O);let s=new O,r=new ye,a=new ye;function l(o){let h=0,f=0,u=0;for(let U=0;U<9;U++)i.probe[U].set(0,0,0);let d=0,g=0,M=0,m=0,p=0,T=0,C=0,y=0,S=0,b=0,P=0,x=0,w=0,R=0;o.sort(ng);for(let U=0,V=o.length;U<V;U++){let E=o[U],B=E.color,Y=E.intensity,J=E.distance,st=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===xi?st=E.shadow.map.texture:st=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)h+=B.r*Y,f+=B.g*Y,u+=B.b*Y;else if(E.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(E.sh.coefficients[F],Y);R++}else if(E.isSunLight){let F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,$=e.get(E);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize.copy(k.mapSize).multiply(k.getFrameExtents()),i.sunShadow[g]=$,i.sunShadowMap[g]=st;let at=k.getViewportCount();for(let gt=0;gt<at;gt++)i.sunShadowMatrix[M+gt]=k.getMatrix(gt),i.sunShadowCascade[M+gt]=k._cascadeData[gt];M+=at,g++}i.sun[d]=F,d++}else if(E.isDirectionalLight){let F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let k=E.shadow,$=e.get(E);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.directionalShadow[m]=$,i.directionalShadowMap[m]=st,i.directionalShadowMatrix[m]=E.shadow.matrix,S++}i.directional[m]=F,m++}else if(E.isSpotLight){let F=t.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(B).multiplyScalar(Y),F.distance=J,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,i.spot[T]=F;let k=E.shadow;if(E.map&&(i.spotLightMap[x]=E.map,x++,k.updateMatrices(E),E.castShadow&&w++),i.spotLightMatrix[T]=k.matrix,E.castShadow){let $=e.get(E);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,i.spotShadow[T]=$,i.spotShadowMap[T]=st,P++}T++}else if(E.isRectAreaLight){let F=t.get(E);F.color.copy(B).multiplyScalar(Y),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),i.rectArea[C]=F,C++}else if(E.isPointLight){let F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){let k=E.shadow,$=e.get(E);$.shadowIntensity=k.intensity,$.shadowBias=k.bias,$.shadowNormalBias=k.normalBias,$.shadowRadius=k.radius,$.shadowMapSize=k.mapSize,$.shadowCameraNear=k.camera.near,$.shadowCameraFar=k.camera.far,i.pointShadow[p]=$,i.pointShadowMap[p]=st,i.pointShadowMatrix[p]=E.shadow.matrix,b++}i.point[p]=F,p++}else if(E.isHemisphereLight){let F=t.get(E);F.skyColor.copy(E.color).multiplyScalar(Y),F.groundColor.copy(E.groundColor).multiplyScalar(Y),i.hemi[y]=F,y++}}C>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=xt.LTC_FLOAT_1,i.rectAreaLTC2=xt.LTC_FLOAT_2):(i.rectAreaLTC1=xt.LTC_HALF_1,i.rectAreaLTC2=xt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let L=i.hash;(L.sunLength!==d||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==T||L.rectAreaLength!==C||L.hemiLength!==y||L.numSunShadows!==g||L.numDirectionalShadows!==S||L.numPointShadows!==b||L.numSpotShadows!==P||L.numSpotMaps!==x||L.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=T,i.rectArea.length=C,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=S,i.directionalShadowMap.length=S,i.directionalShadowMatrix.length=S,i.pointShadow.length=b,i.pointShadowMap.length=b,i.pointShadowMatrix.length=b,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+x-w,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=R,L.sunLength=d,L.directionalLength=m,L.pointLength=p,L.spotLength=T,L.rectAreaLength=C,L.hemiLength=y,L.numSunShadows=g,L.numDirectionalShadows=S,L.numPointShadows=b,L.numSpotShadows=P,L.numSpotMaps=x,L.numLightProbes=R,i.version=eg++)}function c(o,h){let f=0,u=0,d=0,g=0,M=0,m=0,p=h.matrixWorldInverse;for(let T=0,C=o.length;T<C;T++){let y=o[T];if(y.isSunLight){let S=i.sun[f];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let S=i.directional[u];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),u++}else if(y.isSpotLight){let S=i.spot[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let S=i.rectArea[M];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){let S=i.point[d];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(p),d++}else if(y.isHemisphereLight){let S=i.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function Zh(n){let t=new ig(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function l(u){i.push(u)}function c(u){s.push(u)}function o(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function sg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new Zh(n),t.set(s,[l])):r>=a.length?(l=new Zh(n),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var rg=`void main() {
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
}`,og=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],lg=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],$h=new ye,cr=new O,Bl=new O;function cg(n,t,e){let i=new hs,s=new te,r=new te,a=new be,l=new na,c=new ia,o={},h=e.maxTextureSize,f={[pi]:Qe,[Qe]:pi,[bn]:bn},u=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:rg,fragmentShader:ag}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new rn;g.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new ae(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ii;let p=this.type;this.render=function(b,P,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;this.type===Wc&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ii);let w=n.getRenderTarget(),R=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Un),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let V=p!==this.type;V&&P.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(B=>B.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,B=b.length;E<B;E++){let Y=b[E],J=Y.shadow;if(J===void 0){kt("WebGLShadowMap:",Y,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;s.copy(J.mapSize);let st=J.getFrameExtents();s.multiply(st),r.copy(J.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,J.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,J.mapSize.y=r.y));let F=n.state.buffers.depth.getReversed();if(J.camera._reversedDepth=F,J.map===null||V===!0){if(J.map!==null&&(J.map.depthTexture!==null&&(J.map.depthTexture.dispose(),J.map.depthTexture=null),J.map.dispose()),this.type===ps){if(Y.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}J.map=new sn(s.x,s.y,{format:xi,type:En,minFilter:ke,magFilter:ke,generateMipmaps:!1}),J.map.texture.name=Y.name+".shadowMap",J.map.depthTexture=new li(s.x,s.y,An),J.map.depthTexture.name=Y.name+".shadowMapDepth",J.map.depthTexture.format=Dn,J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Fe,J.map.depthTexture.magFilter=Fe}else Y.isPointLight?(J.map=new co(s.x),J.map.depthTexture=new ta(s.x,Tn)):(J.map=new sn(s.x,s.y),J.map.depthTexture=new li(s.x,s.y,Tn)),J.map.depthTexture.name=Y.name+".shadowMap",J.map.depthTexture.format=Dn,this.type===Ii?(J.map.depthTexture.compareFunction=F?ro:so,J.map.depthTexture.minFilter=ke,J.map.depthTexture.magFilter=ke):(J.map.depthTexture.compareFunction=null,J.map.depthTexture.minFilter=Fe,J.map.depthTexture.magFilter=Fe);J.camera.updateProjectionMatrix()}J.map.isWebGLCubeRenderTarget!==!0&&(J.map.width!==s.x||J.map.height!==s.y)&&J.map.setSize(s.x,s.y);let k=J.map.isWebGLCubeRenderTarget?6:J.getViewportCount();Y.isPointLight!==!0&&J.updateMatrices(Y,x);for(let $=0;$<k;$++){let at=J.getCamera($);if(Y.isPointLight){let gt=J.camera,Yt=J.matrix,Jt=Y.distance||gt.far;Jt!==gt.far&&(gt.far=Jt,gt.updateProjectionMatrix()),cr.setFromMatrixPosition(Y.matrixWorld),gt.position.copy(cr),Bl.copy(gt.position),Bl.add(og[$]),gt.up.copy(lg[$]),gt.lookAt(Bl),gt.updateMatrixWorld(),Yt.makeTranslation(-cr.x,-cr.y,-cr.z),$h.multiplyMatrices(gt.projectionMatrix,gt.matrixWorldInverse),J._frustum.setFromProjectionMatrix($h,gt.coordinateSystem,gt.reversedDepth)}if(J.map.isWebGLCubeRenderTarget)n.setRenderTarget(J.map,$),n.clear();else{$===0&&(n.setRenderTarget(J.map),n.clear());let gt=J.getViewport($);a.set(r.x*gt.x,r.y*gt.y,r.x*gt.z,r.y*gt.w),U.viewport(a)}i=J.getFrustum($),y(P,x,at,Y,this.type)}J.isPointLightShadow!==!0&&this.type===ps&&T(J,x),J.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(w,R,L)};function T(b,P){let x=t.update(M);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null?b.mapPass=new sn(s.x,s.y,{format:xi,type:En}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value.set(b.map.width,b.map.height),u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,x,u,M,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value.set(b.map.width,b.map.height),d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,x,d,M,null)}function C(b,P,x,w){let R=null,L=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)R=L;else if(R=x.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let U=R.uuid,V=P.uuid,E=o[U];E===void 0&&(E={},o[U]=E);let B=E[V];B===void 0&&(B=R.clone(),E[V]=B,P.addEventListener("dispose",S)),R=B}if(R.visible=P.visible,R.wireframe=P.wireframe,w===ps?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:f[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let U=n.properties.get(R);U.light=x}return R}function y(b,P,x,w,R){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&R===ps)&&(!b.frustumCulled||b.intersectsFrustum(i))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let V=t.update(b),E=b.material;if(Array.isArray(E)){let B=V.groups;for(let Y=0,J=B.length;Y<J;Y++){let st=B[Y],F=E[st.materialIndex];if(F&&F.visible){let k=C(b,F,w,R);b.onBeforeShadow(n,b,P,x,V,k,st),n.renderBufferDirect(x,null,V,k,b,st),b.onAfterShadow(n,b,P,x,V,k,st)}}}else if(E.visible){let B=C(b,E,w,R);b.onBeforeShadow(n,b,P,x,V,B,null),n.renderBufferDirect(x,null,V,B,b,null),b.onAfterShadow(n,b,P,x,V,B,null)}}let U=b.children;for(let V=0,E=U.length;V<E;V++)y(U[V],P,x,w,R)}function S(b){b.target.removeEventListener("dispose",S);for(let x in o){let w=o[x],R=b.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}function hg(n,t){function e(){let D=!1,dt=new be,nt=null,mt=new be(0,0,0,0);return{setMask:function(wt){nt!==wt&&!D&&(n.colorMask(wt,wt,wt,wt),nt=wt)},setLocked:function(wt){D=wt},setClear:function(wt,rt,Ot,Nt,me){me===!0&&(wt*=Nt,rt*=Nt,Ot*=Nt),dt.set(wt,rt,Ot,Nt),mt.equals(dt)===!1&&(n.clearColor(wt,rt,Ot,Nt),mt.copy(dt))},reset:function(){D=!1,nt=null,mt.set(-1,0,0,0)}}}function i(){let D=!1,dt=!1,nt=null,mt=null,wt=null;return{setReversed:function(rt){if(dt!==rt){let Ot=t.get("EXT_clip_control");rt?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT),dt=rt;let Nt=wt;wt=null,this.setClear(Nt)}},getReversed:function(){return dt},setTest:function(rt){rt?it(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!D&&(n.depthMask(rt),nt=rt)},setFunc:function(rt){if(dt&&(rt=Th[rt]),mt!==rt){switch(rt){case zr:n.depthFunc(n.NEVER);break;case kr:n.depthFunc(n.ALWAYS);break;case Vr:n.depthFunc(n.LESS);break;case is:n.depthFunc(n.LEQUAL);break;case Hr:n.depthFunc(n.EQUAL);break;case Gr:n.depthFunc(n.GEQUAL);break;case Wr:n.depthFunc(n.GREATER);break;case Xr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=rt}},setLocked:function(rt){D=rt},setClear:function(rt){wt!==rt&&(wt=rt,dt&&(rt=1-rt),n.clearDepth(rt))},reset:function(){D=!1,nt=null,mt=null,wt=null,dt=!1}}}function s(){let D=!1,dt=null,nt=null,mt=null,wt=null,rt=null,Ot=null,Nt=null,me=null;return{setTest:function(ce){D||(ce?it(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(ce){dt!==ce&&!D&&(n.stencilMask(ce),dt=ce)},setFunc:function(ce,gn,Rn){(nt!==ce||mt!==gn||wt!==Rn)&&(n.stencilFunc(ce,gn,Rn),nt=ce,mt=gn,wt=Rn)},setOp:function(ce,gn,Rn){(rt!==ce||Ot!==gn||Nt!==Rn)&&(n.stencilOp(ce,gn,Rn),rt=ce,Ot=gn,Nt=Rn)},setLocked:function(ce){D=ce},setClear:function(ce){me!==ce&&(n.clearStencil(ce),me=ce)},reset:function(){D=!1,dt=null,nt=null,mt=null,wt=null,rt=null,Ot=null,Nt=null,me=null}}}let r=new e,a=new i,l=new s,c=new WeakMap,o=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],M=null,m=!1,p=null,T=null,C=null,y=null,S=null,b=null,P=null,x=new qt(0,0,0),w=0,R=!1,L=null,U=null,V=null,E=null,B=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),J=!1,st=0,F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec(F)[1]),J=st>=1):F.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),J=st>=2);let k=null,$={},at=n.getParameter(n.SCISSOR_BOX),gt=n.getParameter(n.VIEWPORT),Yt=new be().fromArray(at),Jt=new be().fromArray(gt);function jt(D,dt,nt,mt){let wt=new Uint8Array(4),rt=n.createTexture();n.bindTexture(D,rt),n.texParameteri(D,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(D,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ot=0;Ot<nt;Ot++)D===n.TEXTURE_3D||D===n.TEXTURE_2D_ARRAY?n.texImage3D(dt,0,n.RGBA,1,1,mt,0,n.RGBA,n.UNSIGNED_BYTE,wt):n.texImage2D(dt+Ot,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,wt);return rt}let Z={};Z[n.TEXTURE_2D]=jt(n.TEXTURE_2D,n.TEXTURE_2D,1),Z[n.TEXTURE_CUBE_MAP]=jt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[n.TEXTURE_2D_ARRAY]=jt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Z[n.TEXTURE_3D]=jt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),it(n.DEPTH_TEST),a.setFunc(is),ht(!1),vt(nl),it(n.CULL_FACE),_t(Un);function it(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function Bt(D,dt){return u[D]!==dt?(n.bindFramebuffer(D,dt),u[D]=dt,D===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=dt),D===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=dt),!0):!1}function St(D,dt){let nt=g,mt=!1;if(D){nt=d.get(dt),nt===void 0&&(nt=[],d.set(dt,nt));let wt=D.textures;if(nt.length!==wt.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let rt=0,Ot=wt.length;rt<Ot;rt++)nt[rt]=n.COLOR_ATTACHMENT0+rt;nt.length=wt.length,mt=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,mt=!0);mt&&n.drawBuffers(nt)}function zt(D){return M!==D?(n.useProgram(D),M=D,!0):!1}let H={[Li]:n.FUNC_ADD,[qc]:n.FUNC_SUBTRACT,[Yc]:n.FUNC_REVERSE_SUBTRACT};H[Jc]=n.MIN,H[Zc]=n.MAX;let et={[$c]:n.ZERO,[Kc]:n.ONE,[jc]:n.SRC_COLOR,[rl]:n.SRC_ALPHA,[sh]:n.SRC_ALPHA_SATURATE,[nh]:n.DST_COLOR,[th]:n.DST_ALPHA,[Qc]:n.ONE_MINUS_SRC_COLOR,[al]:n.ONE_MINUS_SRC_ALPHA,[ih]:n.ONE_MINUS_DST_COLOR,[eh]:n.ONE_MINUS_DST_ALPHA,[rh]:n.CONSTANT_COLOR,[ah]:n.ONE_MINUS_CONSTANT_COLOR,[oh]:n.CONSTANT_ALPHA,[lh]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(D,dt,nt,mt,wt,rt,Ot,Nt,me,ce){if(D===Un){m===!0&&(bt(n.BLEND),m=!1);return}if(m===!1&&(it(n.BLEND),m=!0),D!==Xc){if(D!==p||ce!==R){if((T!==Li||S!==Li)&&(n.blendEquation(n.FUNC_ADD),T=Li,S=Li),ce)switch(D){case ms:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFunc(n.ONE,n.ONE);break;case il:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case sl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Vt("WebGLState: Invalid blending: ",D);break}else switch(D){case ms:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case il:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sl:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",D);break}C=null,y=null,b=null,P=null,x.set(0,0,0),w=0,p=D,R=ce}return}wt=wt||dt,rt=rt||nt,Ot=Ot||mt,(dt!==T||wt!==S)&&(n.blendEquationSeparate(H[dt],H[wt]),T=dt,S=wt),(nt!==C||mt!==y||rt!==b||Ot!==P)&&(n.blendFuncSeparate(et[nt],et[mt],et[rt],et[Ot]),C=nt,y=mt,b=rt,P=Ot),(Nt.equals(x)===!1||me!==w)&&(n.blendColor(Nt.r,Nt.g,Nt.b,me),x.copy(Nt),w=me),p=D,R=!1}function Lt(D,dt){D.side===bn?bt(n.CULL_FACE):it(n.CULL_FACE);let nt=D.side===Qe;dt&&(nt=!nt),ht(nt),D.blending===ms&&D.transparent===!1?_t(Un):_t(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),r.setMask(D.colorWrite);let mt=D.stencilWrite;l.setTest(mt),mt&&(l.setMask(D.stencilWriteMask),l.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),l.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ee(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?it(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ht(D){L!==D&&(D?n.frontFace(n.CW):n.frontFace(n.CCW),L=D)}function vt(D){D!==Hc?(it(n.CULL_FACE),D!==U&&(D===nl?n.cullFace(n.BACK):D===Gc?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),U=D}function se(D){D!==V&&(J&&n.lineWidth(D),V=D)}function ee(D,dt,nt){D?(it(n.POLYGON_OFFSET_FILL),(E!==dt||B!==nt)&&(E=dt,B=nt,a.getReversed()&&(dt=-dt),n.polygonOffset(dt,nt))):bt(n.POLYGON_OFFSET_FILL)}function Zt(D){D?it(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function _e(D){D===void 0&&(D=n.TEXTURE0+Y-1),k!==D&&(n.activeTexture(D),k=D)}function N(D,dt,nt){nt===void 0&&(k===null?nt=n.TEXTURE0+Y-1:nt=k);let mt=$[nt];mt===void 0&&(mt={type:void 0,texture:void 0},$[nt]=mt),(mt.type!==D||mt.texture!==dt)&&(k!==nt&&(n.activeTexture(nt),k=nt),n.bindTexture(D,dt||Z[D]),mt.type=D,mt.texture=dt)}function Ce(){let D=$[k];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function oe(){try{n.compressedTexImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function _(){try{n.texSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function z(){try{n.texSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function K(){try{n.compressedTexSubImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ot(){try{n.texStorage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function ut(){try{n.texStorage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function j(){try{n.texImage2D(...arguments)}catch(D){Vt("WebGLState:",D)}}function tt(){try{n.texImage3D(...arguments)}catch(D){Vt("WebGLState:",D)}}function lt(D){return f[D]!==void 0?f[D]:n.getParameter(D)}function Dt(D,dt){f[D]!==dt&&(n.pixelStorei(D,dt),f[D]=dt)}function ft(D){Yt.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),Yt.copy(D))}function ct(D){Jt.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),Jt.copy(D))}function Tt(D,dt){let nt=o.get(dt);nt===void 0&&(nt=new WeakMap,o.set(dt,nt));let mt=nt.get(D);mt===void 0&&(mt=n.getUniformBlockIndex(dt,D.name),nt.set(D,mt))}function Ft(D,dt){let mt=o.get(dt).get(D);c.get(dt)!==mt&&(n.uniformBlockBinding(dt,mt,D.__bindingPointIndex),c.set(dt,mt))}function Wt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},k=null,$={},u={},d=new WeakMap,g=[],M=null,m=!1,p=null,T=null,C=null,y=null,S=null,b=null,P=null,x=new qt(0,0,0),w=0,R=!1,L=null,U=null,V=null,E=null,B=null,Yt.set(0,0,n.canvas.width,n.canvas.height),Jt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:it,disable:bt,bindFramebuffer:Bt,drawBuffers:St,useProgram:zt,setBlending:_t,setMaterial:Lt,setFlipSided:ht,setCullFace:vt,setLineWidth:se,setPolygonOffset:ee,setScissorTest:Zt,activeTexture:_e,bindTexture:N,unbindTexture:Ce,compressedTexImage2D:oe,compressedTexImage3D:A,texImage2D:j,texImage3D:tt,pixelStorei:Dt,getParameter:lt,updateUBOMapping:Tt,uniformBlockBinding:Ft,texStorage2D:ot,texStorage3D:ut,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ft,viewport:ct,reset:Wt}}function ug(n,t,e,i,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new te,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,_){return g?new OffscreenCanvas(A,_):Os("canvas")}function m(A,_,z){let X=1,K=oe(A);if((K.width>z||K.height>z)&&(X=z/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let ot=Math.floor(X*K.width),ut=Math.floor(X*K.height);u===void 0&&(u=M(ot,ut));let j=_?M(ot,ut):u;return j.width=ot,j.height=ut,j.getContext("2d").drawImage(A,0,0,ot,ut),kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+ut+")."),j}else return"data"in A&&kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps}function T(A){n.generateMipmap(A)}function C(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,_,z,X,K,ot=!1){if(A!==null){if(n[A]!==void 0)return n[A];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ut;X&&(ut=t.get("EXT_texture_norm16"),ut||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8),z===n.UNSIGNED_SHORT&&ut&&(j=ut.R16_EXT),z===n.SHORT&&ut&&(j=ut.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),_===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8),z===n.UNSIGNED_SHORT&&ut&&(j=ut.RG16_EXT),z===n.SHORT&&ut&&(j=ut.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&ut&&(j=ut.RGB16_EXT),z===n.SHORT&&ut&&(j=ut.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),_===n.RGBA){let tt=ot?Fs:ne.getTransfer(K);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=tt===ue?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&ut&&(j=ut.RGBA16_EXT),z===n.SHORT&&ut&&(j=ut.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function S(A,_){let z;return A?_===null||_===Tn||_===_s?z=n.DEPTH24_STENCIL8:_===An?z=n.DEPTH32F_STENCIL8:_===gs&&(z=n.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===_s?z=n.DEPTH_COMPONENT24:_===An?z=n.DEPTH_COMPONENT32F:_===gs&&(z=n.DEPTH_COMPONENT16),z}function b(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Fe&&A.minFilter!==ke?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function P(A){let _=A.target;_.removeEventListener("dispose",P),w(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),L(_)}function w(A){let _=i.get(A);if(_.__webglInit===void 0)return;let z=A.source,X=d.get(z);if(X){let K=X[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&R(A),Object.keys(X).length===0&&d.delete(z)}i.remove(A)}function R(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let z=A.source,X=d.get(z);delete X[_.__cacheKey],a.memory.textures--}function L(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(_.__webglFramebuffer[X]))for(let K=0;K<_.__webglFramebuffer[X].length;K++)n.deleteFramebuffer(_.__webglFramebuffer[X][K]);else n.deleteFramebuffer(_.__webglFramebuffer[X]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[X])}else{if(Array.isArray(_.__webglFramebuffer))for(let X=0;X<_.__webglFramebuffer.length;X++)n.deleteFramebuffer(_.__webglFramebuffer[X]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let X=0;X<_.__webglColorRenderbuffer.length;X++)_.__webglColorRenderbuffer[X]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[X]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=A.textures;for(let X=0,K=z.length;X<K;X++){let ot=i.get(z[X]);ot.__webglTexture&&(n.deleteTexture(ot.__webglTexture),a.memory.textures--),i.remove(z[X])}i.remove(A)}let U=0;function V(){U=0}function E(){return U}function B(A){U=A}function Y(){let A=U;return A>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),U+=1,A}function J(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function st(A,_){let z=i.get(A);if(A.isVideoTexture&&N(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let X=A.image;if(X===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{bt(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function F(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){bt(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function k(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){bt(z,A,_);return}e.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function $(A,_){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Bt(z,A,_);return}e.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let at={[ss]:n.REPEAT,[Ln]:n.CLAMP_TO_EDGE,[qr]:n.MIRRORED_REPEAT},gt={[Fe]:n.NEAREST,[uh]:n.NEAREST_MIPMAP_NEAREST,[tr]:n.NEAREST_MIPMAP_LINEAR,[ke]:n.LINEAR,[ya]:n.LINEAR_MIPMAP_NEAREST,[gi]:n.LINEAR_MIPMAP_LINEAR},Yt={[mh]:n.NEVER,[yh]:n.ALWAYS,[gh]:n.LESS,[so]:n.LEQUAL,[_h]:n.EQUAL,[ro]:n.GEQUAL,[xh]:n.GREATER,[vh]:n.NOTEQUAL};function Jt(A,_){if(_.type===An&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===ke||_.magFilter===ya||_.magFilter===tr||_.magFilter===gi||_.minFilter===ke||_.minFilter===ya||_.minFilter===tr||_.minFilter===gi)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,at[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,at[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,at[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,gt[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,gt[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,Yt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Fe||_.minFilter!==tr&&_.minFilter!==gi||_.type===An&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function jt(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",P));let X=_.source,K=d.get(X);K===void 0&&(K={},d.set(X,K));let ot=J(_);if(ot!==A.__cacheKey){K[ot]===void 0&&(K[ot]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[ot].usedTimes++;let ut=K[A.__cacheKey];ut!==void 0&&(K[A.__cacheKey].usedTimes--,ut.usedTimes===0&&R(_)),A.__cacheKey=ot,A.__webglTexture=K[ot].texture}return z}function Z(A,_,z){return Math.floor(Math.floor(A/z)/_)}function it(A,_,z,X){let ot=A.updateRanges;if(ot.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,X,_.data);else{ot.sort((Dt,ft)=>Dt.start-ft.start);let ut=0;for(let Dt=1;Dt<ot.length;Dt++){let ft=ot[ut],ct=ot[Dt],Tt=ft.start+ft.count,Ft=Z(ct.start,_.width,4),Wt=Z(ft.start,_.width,4);ct.start<=Tt+1&&Ft===Wt&&Z(ct.start+ct.count-1,_.width,4)===Ft?ft.count=Math.max(ft.count,ct.start+ct.count-ft.start):(++ut,ot[ut]=ct)}ot.length=ut+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),tt=e.getParameter(n.UNPACK_SKIP_PIXELS),lt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Dt=0,ft=ot.length;Dt<ft;Dt++){let ct=ot[Dt],Tt=Math.floor(ct.start/4),Ft=Math.ceil(ct.count/4),Wt=Tt%_.width,D=Math.floor(Tt/_.width),dt=Ft,nt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(n.UNPACK_SKIP_ROWS,D),e.texSubImage2D(n.TEXTURE_2D,0,Wt,D,dt,nt,z,X,_.data)}A.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),e.pixelStorei(n.UNPACK_SKIP_ROWS,lt)}}function bt(A,_,z){let X=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(X=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(X=n.TEXTURE_3D);let K=jt(A,_),ot=_.source;e.bindTexture(X,A.__webglTexture,n.TEXTURE0+z);let ut=i.get(ot);if(ot.version!==ut.__version||K===!0){if(e.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===Yn?null:ne.getPrimaries(_.colorSpace),wt=_.colorSpace===Yn||nt===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt)}e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let tt=m(_.image,!1,s.maxTextureSize);tt=Ce(_,tt);let lt=r.convert(_.format,_.colorSpace),Dt=r.convert(_.type),ft=y(_.internalFormat,lt,Dt,_.normalized,_.colorSpace,_.isVideoTexture);Jt(X,_);let ct,Tt=_.mipmaps,Ft=_.isVideoTexture!==!0,Wt=ut.__version===void 0||K===!0,D=ot.dataReady,dt=b(_,tt);if(_.isDepthTexture)ft=S(_.format===_i,_.type),Wt&&(Ft?e.texStorage2D(n.TEXTURE_2D,1,ft,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,ft,tt.width,tt.height,0,lt,Dt,null));else if(_.isDataTexture)if(Tt.length>0){Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,dt,ft,Tt[0].width,Tt[0].height);for(let nt=0,mt=Tt.length;nt<mt;nt++)ct=Tt[nt],Ft?D&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,Dt,ct.data):e.texImage2D(n.TEXTURE_2D,nt,ft,ct.width,ct.height,0,lt,Dt,ct.data);_.generateMipmaps=!1}else Ft?(Wt&&e.texStorage2D(n.TEXTURE_2D,dt,ft,tt.width,tt.height),D&&it(_,tt,lt,Dt)):e.texImage2D(n.TEXTURE_2D,0,ft,tt.width,tt.height,0,lt,Dt,tt.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ft&&Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ft,Tt[0].width,Tt[0].height,tt.depth);for(let nt=0,mt=Tt.length;nt<mt;nt++)if(ct=Tt[nt],_.format!==mn)if(lt!==null)if(Ft){if(D)if(_.layerUpdates.size>0){let wt=El(ct.width,ct.height,_.format,_.type);for(let rt of _.layerUpdates){let Ot=ct.data.subarray(rt*wt/ct.data.BYTES_PER_ELEMENT,(rt+1)*wt/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,rt,ct.width,ct.height,1,lt,Ot)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,tt.depth,lt,ct.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,ft,ct.width,ct.height,tt.depth,0,ct.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ft?D&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ct.width,ct.height,tt.depth,lt,Dt,ct.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,ft,ct.width,ct.height,tt.depth,0,lt,Dt,ct.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ft&&Wt&&e.texStorage2D(n.TEXTURE_2D,dt,ft,Tt[0].width,Tt[0].height);for(let nt=0,mt=Tt.length;nt<mt;nt++)ct=Tt[nt],_.format!==mn?lt!==null?Ft?D&&e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,ft,ct.width,ct.height,0,ct.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ft?D&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ct.width,ct.height,lt,Dt,ct.data):e.texImage2D(n.TEXTURE_2D,nt,ft,ct.width,ct.height,0,lt,Dt,ct.data)}else if(_.isDataArrayTexture)if(Ft){if(Wt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,dt,ft,tt.width,tt.height,tt.depth),D)if(_.layerUpdates.size>0){let nt=El(tt.width,tt.height,_.format,_.type);for(let mt of _.layerUpdates){let wt=tt.data.subarray(mt*nt/tt.data.BYTES_PER_ELEMENT,(mt+1)*nt/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,mt,tt.width,tt.height,1,lt,Dt,wt)}_.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Dt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ft,tt.width,tt.height,tt.depth,0,lt,Dt,tt.data);else if(_.isData3DTexture)Ft?(Wt&&e.texStorage3D(n.TEXTURE_3D,dt,ft,tt.width,tt.height,tt.depth),D&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Dt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,ft,tt.width,tt.height,tt.depth,0,lt,Dt,tt.data);else if(_.isFramebufferTexture){if(Wt)if(Ft)e.texStorage2D(n.TEXTURE_2D,dt,ft,tt.width,tt.height);else{let nt=tt.width,mt=tt.height;for(let wt=0;wt<dt;wt++)e.texImage2D(n.TEXTURE_2D,wt,ft,nt,mt,0,lt,Dt,null),nt>>=1,mt>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let nt=n.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),tt.parentNode!==nt){nt.appendChild(tt),f.add(_),nt.onpaint=mt=>{let wt=mt.changedElements;for(let rt of f)wt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,tt);else{let wt=n.RGBA,rt=n.RGBA,Ot=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,wt,rt,Ot,tt)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Tt.length>0){if(Ft&&Wt){let nt=oe(Tt[0]);e.texStorage2D(n.TEXTURE_2D,dt,ft,nt.width,nt.height)}for(let nt=0,mt=Tt.length;nt<mt;nt++)ct=Tt[nt],Ft?D&&e.texSubImage2D(n.TEXTURE_2D,nt,0,0,lt,Dt,ct):e.texImage2D(n.TEXTURE_2D,nt,ft,lt,Dt,ct);_.generateMipmaps=!1}else if(Ft){if(Wt){let nt=oe(tt);e.texStorage2D(n.TEXTURE_2D,dt,ft,nt.width,nt.height)}D&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Dt,tt)}else e.texImage2D(n.TEXTURE_2D,0,ft,lt,Dt,tt);p(_)&&T(X),ut.__version=ot.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function Bt(A,_,z){if(_.image.length!==6)return;let X=jt(A,_),K=_.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let ot=i.get(K);if(K.version!==ot.__version||X===!0){e.activeTexture(n.TEXTURE0+z);let ut=ne.getPrimaries(ne.workingColorSpace),j=_.colorSpace===Yn?null:ne.getPrimaries(_.colorSpace),tt=_.colorSpace===Yn||ut===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,tt);let lt=_.isCompressedTexture||_.image[0].isCompressedTexture,Dt=_.image[0]&&_.image[0].isDataTexture,ft=[];for(let rt=0;rt<6;rt++)!lt&&!Dt?ft[rt]=m(_.image[rt],!0,s.maxCubemapSize):ft[rt]=Dt?_.image[rt].image:_.image[rt],ft[rt]=Ce(_,ft[rt]);let ct=ft[0],Tt=r.convert(_.format,_.colorSpace),Ft=r.convert(_.type),Wt=y(_.internalFormat,Tt,Ft,_.normalized,_.colorSpace),D=_.isVideoTexture!==!0,dt=ot.__version===void 0||X===!0,nt=K.dataReady,mt=b(_,ct);Jt(n.TEXTURE_CUBE_MAP,_);let wt;if(lt){D&&dt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,ct.width,ct.height);for(let rt=0;rt<6;rt++){wt=ft[rt].mipmaps;for(let Ot=0;Ot<wt.length;Ot++){let Nt=wt[Ot];_.format!==mn?Tt!==null?D?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Nt.width,Nt.height,Tt,Nt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Wt,Nt.width,Nt.height,0,Nt.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,0,0,Nt.width,Nt.height,Tt,Ft,Nt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot,Wt,Nt.width,Nt.height,0,Tt,Ft,Nt.data)}}}else{if(wt=_.mipmaps,D&&dt){wt.length>0&&mt++;let rt=oe(ft[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,mt,Wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(Dt){D?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,ft[rt].width,ft[rt].height,Tt,Ft,ft[rt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,ft[rt].width,ft[rt].height,0,Tt,Ft,ft[rt].data);for(let Ot=0;Ot<wt.length;Ot++){let me=wt[Ot].image[rt].image;D?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,me.width,me.height,Tt,Ft,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Wt,me.width,me.height,0,Tt,Ft,me.data)}}else{D?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Tt,Ft,ft[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,Tt,Ft,ft[rt]);for(let Ot=0;Ot<wt.length;Ot++){let Nt=wt[Ot];D?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,0,0,Tt,Ft,Nt.image[rt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Ot+1,Wt,Tt,Ft,Nt.image[rt])}}}p(_)&&T(n.TEXTURE_CUBE_MAP),ot.__version=K.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function St(A,_,z,X,K,ot){let ut=r.convert(z.format,z.colorSpace),j=r.convert(z.type),tt=y(z.internalFormat,ut,j,z.normalized,z.colorSpace),lt=i.get(_),Dt=i.get(z);if(Dt.__renderTarget=_,!lt.__hasExternalTextures){let ft=Math.max(1,_.width>>ot),ct=Math.max(1,_.height>>ot);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,tt,ft,ct,_.depth,0,ut,j,null):e.texImage2D(K,ot,tt,ft,ct,0,ut,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),_e(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,X,K,Dt.__webglTexture,0,Zt(_)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,X,K,Dt.__webglTexture,ot),e.bindFramebuffer(n.FRAMEBUFFER,null)}function zt(A,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let X=_.depthTexture,K=X&&X.isDepthTexture?X.type:null,ot=S(_.stencilBuffer,K),ut=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;_e(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(_),ot,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(_),ot,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ot,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ut,n.RENDERBUFFER,A)}else{let X=_.textures;for(let K=0;K<X.length;K++){let ot=X[K],ut=r.convert(ot.format,ot.colorSpace),j=r.convert(ot.type),tt=y(ot.internalFormat,ut,j,ot.normalized,ot.colorSpace);_e(_)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Zt(_),tt,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,Zt(_),tt,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,tt,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function H(A,_,z){let X=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=i.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,_.depthTexture);let lt=r.convert(_.depthTexture.format),Dt=r.convert(_.depthTexture.type),ft;_.depthTexture.format===Dn?ft=n.DEPTH_COMPONENT24:_.depthTexture.format===_i&&(ft=n.DEPTH24_STENCIL8);for(let ct=0;ct<6;ct++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,ft,_.width,_.height,0,lt,Dt,null)}}else st(_.depthTexture,0);let ot=K.__webglTexture,ut=Zt(_),j=X?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,tt=_.depthTexture.format===_i?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Dn)_e(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,ot,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,ot,0);else if(_.depthTexture.format===_i)_e(_)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,j,ot,0,ut):n.framebufferTexture2D(n.FRAMEBUFFER,tt,j,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function et(A){let _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let X=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),X){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=X}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let X=0;X<6;X++)H(_.__webglFramebuffer[X],A,X);else{let X=A.texture.mipmaps;X&&X.length>0?H(_.__webglFramebuffer[0],A,0):H(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[X]),_.__webglDepthbuffer[X]===void 0)_.__webglDepthbuffer[X]=n.createRenderbuffer(),zt(_.__webglDepthbuffer[X],A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[X];n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}else{let X=A.texture.mipmaps;if(X&&X.length>0?e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),zt(_.__webglDepthbuffer,A,!1);else{let K=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,ot)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function _t(A,_,z){let X=i.get(A);_!==void 0&&St(X.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&et(A)}function Lt(A){let _=A.texture,z=i.get(A),X=i.get(_);A.addEventListener("dispose",x);let K=A.textures,ot=A.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=_.version,a.memory.textures++),ot){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let tt=0;tt<_.mipmaps.length;tt++)z.__webglFramebuffer[j][tt]=n.createFramebuffer()}else z.__webglFramebuffer[j]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[j]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(ut)for(let j=0,tt=K.length;j<tt;j++){let lt=i.get(K[j]);lt.__webglTexture===void 0&&(lt.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&_e(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let tt=K[j];z.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let lt=r.convert(tt.format,tt.colorSpace),Dt=r.convert(tt.type),ft=y(tt.internalFormat,lt,Dt,tt.normalized,tt.colorSpace,A.isXRRenderTarget===!0),ct=Zt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ct,ft,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,z.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),zt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ot){e.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture),Jt(n.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)St(z.__webglFramebuffer[j][tt],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,tt);else St(z.__webglFramebuffer[j],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let j=0,tt=K.length;j<tt;j++){let lt=K[j],Dt=i.get(lt),ft=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ft,Dt.__webglTexture),Jt(ft,lt),St(z.__webglFramebuffer,A,lt,n.COLOR_ATTACHMENT0+j,ft,0),p(lt)&&T(ft)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,X.__webglTexture),Jt(j,_),_.mipmaps&&_.mipmaps.length>0)for(let tt=0;tt<_.mipmaps.length;tt++)St(z.__webglFramebuffer[tt],A,_,n.COLOR_ATTACHMENT0,j,tt);else St(z.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,j,0);p(_)&&T(j),e.unbindTexture()}A.depthBuffer&&et(A)}function ht(A){let _=A.textures;for(let z=0,X=_.length;z<X;z++){let K=_[z];if(p(K)){let ot=C(A),ut=i.get(K).__webglTexture;e.bindTexture(ot,ut),T(ot),e.unbindTexture()}}}let vt=[],se=[];function ee(A){if(A.samples>0){if(_e(A)===!1){let _=A.textures,z=A.width,X=A.height,K=n.COLOR_BUFFER_BIT,ot=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(A),j=_.length>1;if(j)for(let lt=0;lt<_.length;lt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let tt=A.texture.mipmaps;tt&&tt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let lt=0;lt<_.length;lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let Dt=i.get(_[lt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Dt,0)}n.blitFramebuffer(0,0,z,X,0,0,z,X,K,n.NEAREST),c===!0&&(vt.length=0,se.length=0,vt.push(n.COLOR_ATTACHMENT0+lt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(vt.push(ot),se.push(ot),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,se)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,vt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let lt=0;lt<_.length;lt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[lt]);let Dt=i.get(_[lt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+lt,n.TEXTURE_2D,Dt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Zt(A){return Math.min(s.maxSamples,A.samples)}function _e(A){let _=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function N(A){let _=a.render.frame;h.get(A)!==_&&(h.set(A,_),A.update())}function Ce(A,_){let z=A.colorSpace,X=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Us&&z!==Yn&&(ne.getTransfer(z)===ue?(X!==mn||K!==an)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",z)),_}function oe(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(o.width=A.naturalWidth||A.width,o.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(o.width=A.displayWidth,o.height=A.displayHeight):(o.width=A.width,o.height=A.height),o}this.allocateTextureUnit=Y,this.resetTextureUnits=V,this.getTextureUnits=E,this.setTextureUnits=B,this.setTexture2D=st,this.setTexture2DArray=F,this.setTexture3D=k,this.setTextureCube=$,this.rebindTextures=_t,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=ht,this.updateMultisampleRenderTarget=ee,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=St,this.useMultisampledRTT=_e,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function dg(n,t){function e(i,s=Yn){let r,a=ne.getTransfer(s);if(i===an)return n.UNSIGNED_BYTE;if(i===Sa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ba)return n.UNSIGNED_SHORT_5_5_5_1;if(i===_l)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===xl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===ml)return n.BYTE;if(i===gl)return n.SHORT;if(i===gs)return n.UNSIGNED_SHORT;if(i===Ma)return n.INT;if(i===Tn)return n.UNSIGNED_INT;if(i===An)return n.FLOAT;if(i===En)return n.HALF_FLOAT;if(i===vl)return n.ALPHA;if(i===yl)return n.RGB;if(i===mn)return n.RGBA;if(i===Dn)return n.DEPTH_COMPONENT;if(i===_i)return n.DEPTH_STENCIL;if(i===Ml)return n.RED;if(i===wa)return n.RED_INTEGER;if(i===xi)return n.RG;if(i===Ta)return n.RG_INTEGER;if(i===Aa)return n.RGBA_INTEGER;if(i===er||i===nr||i===ir||i===sr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===er)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===er)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===nr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ea||i===Ca||i===Ra||i===Pa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ea)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ca)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ia||i===La||i===Da||i===Na||i===Ua||i===rr||i===Fa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ia||i===La)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Da)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Na)return r.COMPRESSED_R11_EAC;if(i===Ua)return r.COMPRESSED_SIGNED_R11_EAC;if(i===rr)return r.COMPRESSED_RG11_EAC;if(i===Fa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Oa||i===Ba||i===za||i===ka||i===Va||i===Ha||i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===Ja||i===Za||i===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Oa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ba)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ka)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Va)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ha)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ga)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Wa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Xa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qa)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ya)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ja)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Za)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$a)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===ja||i===Qa)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===Ka)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ja)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Qa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===to||i===eo||i===ar||i===no)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===to)return r.COMPRESSED_RED_RGTC1_EXT;if(i===eo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ar)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===no)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_s?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var fg=`
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

}`,ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Xs(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new je({vertexShader:fg,fragmentShader:pg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ae(new hi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Yl=class extends Nn{constructor(t,e){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,h=null,f=null,u=null,d=null,g=null,M=typeof XRWebGLBinding<"u",m=new ql,p={},T=e.getContextAttributes(),C=null,y=null,S=[],b=[],P=new te,x=null,w=null,R=new Xe;R.viewport=new be;let L=new Xe;L.viewport=new be;let U=[R,L],V=new ga,E=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let it=S[Z];return it===void 0&&(it=new ls,S[Z]=it),it.getTargetRaySpace()},this.getControllerGrip=function(Z){let it=S[Z];return it===void 0&&(it=new ls,S[Z]=it),it.getGripSpace()},this.getHand=function(Z){let it=S[Z];return it===void 0&&(it=new ls,S[Z]=it),it.getHandSpace()};function Y(Z){let it=b.indexOf(Z.inputSource);if(it===-1)return;let bt=S[it];bt!==void 0&&(bt.update(Z.inputSource,Z.frame,o||a),bt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function J(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",J),s.removeEventListener("inputsourceschange",st);for(let Z=0;Z<S.length;Z++){let it=b[Z];it!==null&&(b[Z]=null,S[Z].disconnect(it))}E=null,B=null,m.reset();for(let Z in p)delete p[Z];if(t.setRenderTarget(C),d=null,u=null,f=null,s=null,y=null,jt.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(P.width,P.height,!1),w!==null){let Z=w.camera;Z.fov=w.fov,Z.zoom=w.zoom,Z.updateProjectionMatrix(),w=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,i.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(Z){o=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",J),s.addEventListener("inputsourceschange",st),T.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(P),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let bt=null,Bt=null,St=null;T.depth&&(St=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,bt=T.stencil?_i:Dn,Bt=T.stencil?_s:Tn);let zt={colorFormat:e.RGBA8,depthFormat:St,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(zt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new sn(u.textureWidth,u.textureHeight,{format:mn,type:an,depthTexture:new li(u.textureWidth,u.textureHeight,Bt,void 0,void 0,void 0,void 0,void 0,void 0,bt),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let bt={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,bt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new sn(d.framebufferWidth,d.framebufferHeight,{format:mn,type:an,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),jt.setContext(s),jt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function st(Z){for(let it=0;it<Z.removed.length;it++){let bt=Z.removed[it],Bt=b.indexOf(bt);Bt>=0&&(b[Bt]=null,S[Bt].disconnect(bt))}for(let it=0;it<Z.added.length;it++){let bt=Z.added[it],Bt=b.indexOf(bt);if(Bt===-1){for(let zt=0;zt<S.length;zt++)if(zt>=b.length){b.push(bt),Bt=zt;break}else if(b[zt]===null){b[zt]=bt,Bt=zt;break}if(Bt===-1)break}let St=S[Bt];St&&St.connect(bt)}}let F=new O,k=new O;function $(Z,it,bt){F.setFromMatrixPosition(it.matrixWorld),k.setFromMatrixPosition(bt.matrixWorld);let Bt=F.distanceTo(k),St=it.projectionMatrix.elements,zt=bt.projectionMatrix.elements,H=St[14]/(St[10]-1),et=St[14]/(St[10]+1),_t=(St[9]+1)/St[5],Lt=(St[9]-1)/St[5],ht=(St[8]-1)/St[0],vt=(zt[8]+1)/zt[0],se=H*ht,ee=H*vt,Zt=Bt/(-ht+vt),_e=Zt*-ht;if(it.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(_e),Z.translateZ(Zt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),St[10]===-1)Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{let N=H+Zt,Ce=et+Zt,oe=se-_e,A=ee+(Bt-_e),_=_t*et/Ce*N,z=Lt*et/Ce*N;Z.projectionMatrix.makePerspective(oe,A,_,z,N,Ce),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function at(Z,it){it===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(it.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let it=Z.near,bt=Z.far;m.texture!==null&&(m.depthNear>0&&(it=m.depthNear),m.depthFar>0&&(bt=m.depthFar)),V.near=L.near=R.near=it,V.far=L.far=R.far=bt,(E!==V.near||B!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),E=V.near,B=V.far),V.layers.mask=Z.layers.mask|6,R.layers.mask=V.layers.mask&-5,L.layers.mask=V.layers.mask&-3;let Bt=Z.parent,St=V.cameras;at(V,Bt);for(let zt=0;zt<St.length;zt++)at(St[zt],Bt);St.length===2?$(V,R,L):V.projectionMatrix.copy(R.projectionMatrix),w===null&&Z.isPerspectiveCamera&&(w={camera:Z,fov:Z.fov,zoom:Z.zoom}),gt(Z,V,Bt)};function gt(Z,it,bt){bt===null?Z.matrix.copy(it.matrixWorld):(Z.matrix.copy(bt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(it.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(it.projectionMatrix),Z.projectionMatrixInverse.copy(it.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jr*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(Z){c=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(Z){return p[Z]};let Yt=null;function Jt(Z,it){if(h=it.getViewerPose(o||a),g=it,h!==null){let bt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let Bt=!1;bt.length!==V.cameras.length&&(V.cameras.length=0,Bt=!0);for(let et=0;et<bt.length;et++){let _t=bt[et],Lt=null;if(d!==null)Lt=d.getViewport(_t);else{let vt=f.getViewSubImage(u,_t);Lt=vt.viewport,et===0&&(t.setRenderTargetTextures(y,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(y))}let ht=U[et];ht===void 0&&(ht=new Xe,ht.layers.enable(et),ht.viewport=new be,U[et]=ht),ht.matrix.fromArray(_t.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(_t.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),et===0&&(V.matrix.copy(ht.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Bt===!0&&V.cameras.push(ht)}let St=s.enabledFeatures;if(St&&St.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=i.getBinding();let et=f.getDepthInformation(bt[0]);et&&et.isValid&&et.texture&&m.init(et,s.renderState)}if(St&&St.includes("camera-access")&&M){t.state.unbindTexture(),f=i.getBinding();for(let et=0;et<bt.length;et++){let _t=bt[et].camera;if(_t){let Lt=p[_t];Lt||(Lt=new Xs,p[_t]=Lt);let ht=f.getCameraImage(_t);Lt.sourceTexture=ht}}}}for(let bt=0;bt<S.length;bt++){let Bt=b[bt],St=S[bt];Bt!==null&&St!==void 0&&St.update(Bt,it,o||a)}Yt&&Yt(Z,it),it.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:it}),g=null}let jt=new Kh;jt.setAnimationLoop(Jt),this.setAnimationLoop=function(Z){Yt=Z},this.dispose=function(){}}},mg=new ye,iu=new Xt;iu.set(-1,0,0,0,1,0,0,0,1);function gg(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,wl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,T,C,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,y)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),M(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,T,C):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Qe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Qe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let T=t.get(p),C=T.envMap,y=T.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(mg.makeRotationFromEuler(y)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(iu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,T,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=C*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Qe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function M(m,p){let T=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function _g(n,t,e,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,S){let b=S.program;i.uniformBlockBinding(y,b)}function o(y,S){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",T));let P=S.program;i.updateUBOMapping(y,P);let x=t.render.frame;r[y.id]!==x&&(u(y),r[y.id]=x)}function h(y){let S=f();y.__bindingPointIndex=S;let b=n.createBuffer(),P=y.__size,x=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,P,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,b),b}function f(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let S=s[y.id],b=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let x=0,w=b.length;x<w;x++){let R=b[x];if(Array.isArray(R))for(let L=0,U=R.length;L<U;L++)d(R[L],x,L,P);else d(R,x,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,S,b,P){if(M(y,S,b,P)===!0){let x=y.__offset,w=y.value;if(Array.isArray(w)){let R=0;for(let L=0;L<w.length;L++){let U=w[L],V=p(U);g(U,y.__data,R),typeof U!="number"&&typeof U!="boolean"&&!U.isMatrix3&&!ArrayBuffer.isView(U)&&(R+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(w,y.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,y.__data)}}function g(y,S,b){typeof y=="number"||typeof y=="boolean"?S[0]=y:y.isMatrix3?(S[0]=y.elements[0],S[1]=y.elements[1],S[2]=y.elements[2],S[3]=0,S[4]=y.elements[3],S[5]=y.elements[4],S[6]=y.elements[5],S[7]=0,S[8]=y.elements[6],S[9]=y.elements[7],S[10]=y.elements[8],S[11]=0):ArrayBuffer.isView(y)?S.set(new y.constructor(y.buffer,y.byteOffset,S.length)):y.toArray(S,b)}function M(y,S,b,P){let x=y.value,w=S+"_"+b;if(P[w]===void 0)return typeof x=="number"||typeof x=="boolean"?P[w]=x:ArrayBuffer.isView(x)?P[w]=x.slice():P[w]=x.clone(),!0;{let R=P[w];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return P[w]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(y){let S=y.uniforms,b=0,P=16;for(let w=0,R=S.length;w<R;w++){let L=Array.isArray(S[w])?S[w]:[S[w]];for(let U=0,V=L.length;U<V;U++){let E=L[U],B=Array.isArray(E.value)?E.value:[E.value];for(let Y=0,J=B.length;Y<J;Y++){let st=B[Y],F=p(st),k=b%P,$=k%F.boundary,at=k+$;b+=$,at!==0&&P-at<F.storage&&(b+=P-at),E.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),E.__offset=b,b+=F.storage}}}let x=b%P;return x>0&&(b+=P-x),y.__size=b,y.__cache={},this}function p(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",y),S}function T(y){let S=y.target;S.removeEventListener("dispose",T);let b=a.indexOf(S.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function C(){for(let y in s)n.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:o,dispose:C}}var xg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Fn=null;function vg(){return Fn===null&&(Fn=new Qr(xg,16,16,xi,En),Fn.name="DFG_LUT",Fn.minFilter=ke,Fn.magFilter=ke,Fn.wrapS=Ln,Fn.wrapT=Ln,Fn.generateMipmaps=!1,Fn.needsUpdate=!0),Fn}var ho=class{constructor(t={}){let{canvas:e=Sh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=an}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let M=d,m=new Set([Aa,Ta,wa]),p=new Set([an,Tn,gs,_s,Sa,ba]),T=new Uint32Array(4),C=new Int32Array(4),y=new O,S=null,b=null,P=[],x=[],w=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,L=!1,U=null,V=null,E=null,B=null;this._outputColorSpace=Ze;let Y=0,J=0,st=null,F=-1,k=null,$=new be,at=new be,gt=null,Yt=new qt(0),Jt=0,jt=e.width,Z=e.height,it=1,bt=null,Bt=null,St=new be(0,0,jt,Z),zt=new be(0,0,jt,Z),H=!1,et=new hs,_t=!1,Lt=!1,ht=new ye,vt=new O,se=new be,ee={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Zt=!1;function _e(){return st===null?it:1}let N=i;function Ce(v,I){return e.getContext(v,I)}let oe,A,_,z,X,K,ot,ut,j,tt,lt,Dt,ft,ct,Tt,Ft,Wt,D,dt,nt,mt,wt,rt;try{let v={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",ce,!1),e.addEventListener("webglcontextcreationerror",gn,!1),N===null){let I="webgl2";if(N=Ce(I,v),N===null)throw Ce(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ot()}catch(v){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Vt("WebGLRenderer: "+v.message),v}function Ot(){oe=new Am(N),oe.init(),mt=new dg(N,oe),A=new gm(N,oe,t,mt),_=new hg(N,oe),A.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),V=N.createFramebuffer(),E=N.createFramebuffer(),B=N.createFramebuffer(),z=new Rm(N),X=new $0,K=new ug(N,oe,_,X,A,mt,z),ot=new Tm(R),ut=new Pd(N),wt=new pm(N,ut),j=new Em(N,ut,z,wt),tt=new Im(N,j,ut,wt,z),D=new Pm(N,A,K),Tt=new _m(X),lt=new Z0(R,ot,oe,A,wt,Tt),Dt=new gg(R,X),ft=new j0,ct=new sg(oe),Wt=new fm(R,ot,_,tt,g,c),Ft=new cg(R,tt,A),rt=new _g(N,z,A,_),dt=new mm(N,oe,z),nt=new Cm(N,oe,z),z.programs=lt.programs,R.capabilities=A,R.extensions=oe,R.properties=X,R.renderLists=ft,R.shadowMap=Ft,R.state=_,R.info=z}M!==an&&(w=new Dm(M,e.width,e.height,l,s,r));let Nt=new Yl(R,N);this.xr=Nt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return it},this.setPixelRatio=function(v){v!==void 0&&(it=v,this.setSize(jt,Z,!1))},this.getSize=function(v){return v.set(jt,Z)},this.setSize=function(v,I,q=!0){if(Nt.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}jt=v,Z=I,e.width=Math.floor(v*it),e.height=Math.floor(I*it),q===!0&&(e.style.width=v+"px",e.style.height=I+"px"),w!==null&&w.setSize(e.width,e.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(jt*it,Z*it).floor()},this.setDrawingBufferSize=function(v,I,q){jt=v,Z=I,it=q,e.width=Math.floor(v*q),e.height=Math.floor(I*q),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===an){Vt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy($)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,I,q,G){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,I,q,G),_.viewport($.copy(St).multiplyScalar(it).round())},this.getScissor=function(v){return v.copy(zt)},this.setScissor=function(v,I,q,G){v.isVector4?zt.set(v.x,v.y,v.z,v.w):zt.set(v,I,q,G),_.scissor(at.copy(zt).multiplyScalar(it).round())},this.getScissorTest=function(){return H},this.setScissorTest=function(v){_.setScissorTest(H=v)},this.setOpaqueSort=function(v){bt=v},this.setTransparentSort=function(v){Bt=v},this.getClearColor=function(v){return v.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,q=!0){let G=0;if(v){let W=!1;if(st!==null){let Mt=st.texture.format;W=m.has(Mt)}if(W){let Mt=st.texture.type,Et=p.has(Mt),yt=Wt.getClearColor(),Pt=Wt.getClearAlpha(),Ut=yt.r,$t=yt.g,Qt=yt.b;Et?(T[0]=Ut,T[1]=$t,T[2]=Qt,T[3]=Pt,N.clearBufferuiv(N.COLOR,0,T)):(C[0]=Ut,C[1]=$t,C[2]=Qt,C[3]=Pt,N.clearBufferiv(N.COLOR,0,C))}else G|=N.COLOR_BUFFER_BIT}I&&(G|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),U=v},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",ce,!1),e.removeEventListener("webglcontextcreationerror",gn,!1),Wt.dispose(),ft.dispose(),ct.dispose(),X.dispose(),ot.dispose(),tt.dispose(),wt.dispose(),rt.dispose(),lt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",dc),Nt.removeEventListener("sessionend",fc),wi.stop()};function me(v){v.preventDefault(),bl("WebGLRenderer: Context Lost."),L=!0}function ce(){bl("WebGLRenderer: Context Restored."),L=!1;let v=z.autoReset,I=Ft.enabled,q=Ft.autoUpdate,G=Ft.needsUpdate,W=Ft.type;Ot(),z.autoReset=v,Ft.enabled=I,Ft.autoUpdate=q,Ft.needsUpdate=G,Ft.type=W}function gn(v){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Rn(v){let I=v.target;I.removeEventListener("dispose",Rn),Vu(I)}function Vu(v){Hu(v),X.remove(v)}function Hu(v){let I=X.get(v).programs;I!==void 0&&(I.forEach(function(q){lt.releaseProgram(q)}),v.isShaderMaterial&&lt.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,q,G,W,Mt){I===null&&(I=ee);let Et=W.isMesh&&W.matrixWorld.determinantAffine()<0,yt=Xu(v,I,q,G,W);_.setMaterial(G,Et);let Pt=q.index,Ut=1;if(G.wireframe===!0){if(Pt=j.getWireframeAttribute(q),Pt===void 0)return;Ut=2}let $t=q.drawRange,Qt=q.attributes.position,It=$t.start*Ut,he=($t.start+$t.count)*Ut;Mt!==null&&(It=Math.max(It,Mt.start*Ut),he=Math.min(he,(Mt.start+Mt.count)*Ut)),Pt!==null?(It=Math.max(It,0),he=Math.min(he,Pt.count)):Qt!=null&&(It=Math.max(It,0),he=Math.min(he,Qt.count));let Re=he-It;if(Re<0||Re===1/0)return;wt.setup(W,G,yt,q,Pt);let xe,fe=dt;if(Pt!==null&&(xe=ut.get(Pt),fe=nt,fe.setIndex(xe)),W.isMesh)G.wireframe===!0?(_.setLineWidth(G.wireframeLinewidth*_e()),fe.setMode(N.LINES)):fe.setMode(N.TRIANGLES);else if(W.isLine){let He=G.linewidth;He===void 0&&(He=1),_.setLineWidth(He*_e()),W.isLineSegments?fe.setMode(N.LINES):W.isLineLoop?fe.setMode(N.LINE_LOOP):fe.setMode(N.LINE_STRIP)}else W.isPoints?fe.setMode(N.POINTS):W.isSprite&&fe.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(oe.get("WEBGL_multi_draw"))fe.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let He=W._multiDrawStarts,At=W._multiDrawCounts,Je=W._multiDrawCount,re=Pt?ut.get(Pt).bytesPerElement:1,fn=X.get(G).currentProgram.getUniforms();for(let Pn=0;Pn<Je;Pn++)fn.setValue(N,"_gl_DrawID",Pn),fe.render(He[Pn]/re,At[Pn])}else if(W.isInstancedMesh)fe.renderInstances(It,Re,W.count);else if(q.isInstancedBufferGeometry){let He=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,At=Math.min(q.instanceCount,He);fe.renderInstances(It,Re,At)}else fe.render(It,Re)};function uc(v,I,q,G){U!==null&&v.isNodeMaterial&&U.setObject(G,v),_t===!0&&Tt.setState(v,q,!1),v.transparent===!0&&v.side===bn&&v.forceSinglePass===!1?(v.side=Qe,v.needsUpdate=!0,_r(v,I,G),v.side=pi,v.needsUpdate=!0,_r(v,I,G),v.side=bn):_r(v,I,G)}this.compile=function(v,I,q=null){q===null&&(q=v),U!==null&&U.renderStart(v,I,q),b=ct.get(q),b.init(I),x.push(b),q.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),v!==q&&v.traverseVisible(function(W){W.isLight&&W.layers.test(I.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),U!==null&&U.updateLights(b.state.lightsArray),Lt=this.localClippingEnabled,_t=Tt.init(this.clippingPlanes,Lt),_t===!0&&Tt.setGlobalState(this.clippingPlanes,I),U!==null&&Ft.render(b.state.shadowsArray,q,I);let G=new Set;return v.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Mt=W.material;if(Mt)if(Array.isArray(Mt))for(let Et=0;Et<Mt.length;Et++){let yt=Mt[Et];uc(yt,q,I,W),G.add(yt)}else uc(Mt,q,I,W),G.add(Mt)}),b=x.pop(),U!==null&&U.renderEnd(),G},this.compileAsync=function(v,I,q=null){let G=this.compile(v,I,q);return new Promise(W=>{function Mt(){if(G.forEach(function(Et){let Pt=X.get(Et).currentProgram;(Pt===void 0||Pt.isReady())&&G.delete(Et)}),G.size===0){W(v);return}setTimeout(Mt,10)}oe.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let wo=null;function Gu(v){wo&&wo(v)}function dc(){wi.stop()}function fc(){wi.start()}let wi=new Kh;wi.setAnimationLoop(Gu),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(v){wo=v,Nt.setAnimationLoop(v),v===null?wi.stop():wi.start()},Nt.addEventListener("sessionstart",dc),Nt.addEventListener("sessionend",fc),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;U!==null&&U.renderStart(v,I);let q=Nt.enabled===!0&&Nt.isPresenting===!0,G=w!==null&&(st===null||q)&&w.begin(R,st);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(I),I=Nt.getCamera()),v.isScene===!0&&v.onBeforeRender(R,v,I,st),b=ct.get(v,x.length),b.init(I),b.state.textureUnits=K.getTextureUnits(),x.push(b),ht.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),et.setFromProjectionMatrix(ht,Mn,I.reversedDepth),Lt=this.localClippingEnabled,_t=Tt.init(this.clippingPlanes,Lt),S=ft.get(v,P.length),S.init(),P.push(S),Nt.enabled===!0&&Nt.isPresenting===!0){let Et=R.xr.getDepthSensingMesh();Et!==null&&To(Et,I,-1/0,R.sortObjects)}To(v,I,0,R.sortObjects),S.finish(),U!==null&&U.updateLights(b.state.lightsArray),R.sortObjects===!0&&S.sort(bt,Bt),Zt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,Zt&&Wt.addToRenderList(S,v),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),_t===!0&&Tt.beginShadows();let W=b.state.shadowsArray;if(Ft.render(W,v,I),_t===!0&&Tt.endShadows(),(G&&w.hasRenderPass())===!1){let Et=S.opaque,yt=S.transmissive;if(b.setupLights(),I.isArrayCamera){let Pt=I.cameras;if(yt.length>0)for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Qt=Pt[Ut];mc(Et,yt,v,Qt)}Zt&&Wt.render(v);for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Qt=Pt[Ut];pc(S,v,Qt,Qt.viewport)}}else yt.length>0&&mc(Et,yt,v,I),Zt&&Wt.render(v),pc(S,v,I)}st!==null&&J===0&&(K.updateMultisampleRenderTarget(st),K.updateRenderTargetMipmap(st)),G&&w.end(R),v.isScene===!0&&v.onAfterRender(R,v,I),wt.resetDefaultState(),F=-1,k=null,x.pop(),x.length>0?(b=x[x.length-1],K.setTextureUnits(b.state.textureUnits),_t===!0&&Tt.setGlobalState(R.clippingPlanes,b.state.camera)):b=null,P.pop(),P.length>0?S=P[P.length-1]:S=null,U!==null&&U.renderEnd()};function To(v,I,q,G){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)q=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLightProbeGrid)b.pushLightProbeGrid(v);else if(v.isLight)b.pushLight(v),v.castShadow&&b.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||v.intersectsFrustum(et)){G&&se.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ht);let Et=tt.update(v),yt=v.material;yt.visible&&S.push(v,Et,yt,q,se.z,null,I)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||v.intersectsFrustum(et))){let Et=tt.update(v),yt=v.material;if(G&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),se.copy(v.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),se.copy(Et.boundingSphere.center)),se.applyMatrix4(v.matrixWorld).applyMatrix4(ht)),Array.isArray(yt)){let Pt=Et.groups;for(let Ut=0,$t=Pt.length;Ut<$t;Ut++){let Qt=Pt[Ut],It=yt[Qt.materialIndex];It&&It.visible&&S.push(v,Et,It,q,se.z,Qt,I)}}else yt.visible&&S.push(v,Et,yt,q,se.z,null,I)}}let Mt=v.children;for(let Et=0,yt=Mt.length;Et<yt;Et++)To(Mt[Et],I,q,G)}function pc(v,I,q,G){let{opaque:W,transmissive:Mt,transparent:Et}=v;b.setupLightsView(q),_t===!0&&Tt.setGlobalState(R.clippingPlanes,q),G&&_.viewport($.copy(G)),W.length>0&&gr(W,I,q),Mt.length>0&&gr(Mt,I,q),Et.length>0&&gr(Et,I,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function mc(v,I,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[G.id]===void 0){let It=oe.has("EXT_color_buffer_half_float")||oe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[G.id]=new sn(1,1,{generateMipmaps:!0,type:It?En:an,minFilter:gi,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ne.workingColorSpace})}let Mt=b.state.transmissionRenderTarget[G.id],Et=G.viewport||$;Mt.setSize(Et.z*R.transmissionResolutionScale,Et.w*R.transmissionResolutionScale);let yt=R.getRenderTarget(),Pt=R.getActiveCubeFace(),Ut=R.getActiveMipmapLevel();R.setRenderTarget(Mt),R.getClearColor(Yt),Jt=R.getClearAlpha(),Jt<1&&R.setClearColor(16777215,.5),R.clear(),Zt&&Wt.render(q);let $t=R.toneMapping;R.toneMapping=wn;let Qt=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),b.setupLightsView(G),_t===!0&&Tt.setGlobalState(R.clippingPlanes,G),gr(v,q,G),K.updateMultisampleRenderTarget(Mt),K.updateRenderTargetMipmap(Mt),oe.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let he=0,Re=I.length;he<Re;he++){let xe=I[he],{object:fe,geometry:He,material:At,group:Je}=xe;if(At.side===bn&&fe.layers.test(G.layers)){let re=At.side;At.side=Qe,At.needsUpdate=!0,gc(fe,q,G,He,At,Je),At.side=re,At.needsUpdate=!0,It=!0}}It===!0&&(K.updateMultisampleRenderTarget(Mt),K.updateRenderTargetMipmap(Mt))}R.setRenderTarget(yt,Pt,Ut),R.setClearColor(Yt,Jt),Qt!==void 0&&(G.viewport=Qt),R.toneMapping=$t}function gr(v,I,q){let G=I.isScene===!0?I.overrideMaterial:null;for(let W=0,Mt=v.length;W<Mt;W++){let Et=v[W],{object:yt,geometry:Pt,group:Ut}=Et,$t=Et.material;$t.allowOverride===!0&&G!==null&&($t=G),yt.layers.test(q.layers)&&gc(yt,I,q,Pt,$t,Ut)}}function gc(v,I,q,G,W,Mt){U!==null&&W.isNodeMaterial&&U.setObject(v,W),v.onBeforeRender(R,I,q,G,W,Mt),v.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),W.onBeforeRender(R,I,q,G,v,Mt),W.transparent===!0&&W.side===bn&&W.forceSinglePass===!1?(W.side=Qe,W.needsUpdate=!0,R.renderBufferDirect(q,I,G,W,v,Mt),W.side=pi,W.needsUpdate=!0,R.renderBufferDirect(q,I,G,W,v,Mt),W.side=bn):R.renderBufferDirect(q,I,G,W,v,Mt),v.onAfterRender(R,I,q,G,W,Mt)}function _r(v,I,q){I.isScene!==!0&&(I=ee);let G=X.get(v),W=b.state.lights,Mt=b.state.shadowsArray,Et=W.state.version,yt=lt.getParameters(v,W.state,Mt,I,q,b.state.lightProbeGridArray),Pt=lt.getProgramCacheKey(yt),Ut=G.programs;G.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,G.fog=I.fog;let $t=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;G.envMap=ot.get(v.envMap||G.environment,$t),G.envMapRotation=G.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,Ut===void 0&&(v.addEventListener("dispose",Rn),Ut=new Map,G.programs=Ut);let Qt=Ut.get(Pt);if(Qt!==void 0){if(G.currentProgram===Qt&&G.lightsStateVersion===Et)return xc(v,yt),Qt}else yt.uniforms=lt.getUniforms(v),U!==null&&v.isNodeMaterial&&U.build(v,q,yt),v.onBeforeCompile(yt,R),Qt=lt.acquireProgram(yt,Pt),Ut.set(Pt,Qt),G.uniforms=yt.uniforms;let It=G.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(It.clippingPlanes=Tt.uniform),xc(v,yt),G.needsLights=Yu(v),G.lightsStateVersion=Et,G.needsLights&&(It.ambientLightColor.value=W.state.ambient,It.lightProbe.value=W.state.probe,It.sunLights.value=W.state.sun,It.sunLightShadows.value=W.state.sunShadow,It.directionalLights.value=W.state.directional,It.directionalLightShadows.value=W.state.directionalShadow,It.spotLights.value=W.state.spot,It.spotLightShadows.value=W.state.spotShadow,It.rectAreaLights.value=W.state.rectArea,It.ltc_1.value=W.state.rectAreaLTC1,It.ltc_2.value=W.state.rectAreaLTC2,It.pointLights.value=W.state.point,It.pointLightShadows.value=W.state.pointShadow,It.hemisphereLights.value=W.state.hemi,It.sunShadowMatrix.value=W.state.sunShadowMatrix,It.sunShadowCascade.value=W.state.sunShadowCascade,It.directionalShadowMatrix.value=W.state.directionalShadowMatrix,It.spotLightMatrix.value=W.state.spotLightMatrix,It.spotLightMap.value=W.state.spotLightMap,It.pointShadowMatrix.value=W.state.pointShadowMatrix),G.lightProbeGrid=b.state.lightProbeGridArray.length>0,G.currentProgram=Qt,G.uniformsList=null,Qt}function _c(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=ys.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function xc(v,I){let q=X.get(v);q.outputColorSpace=I.outputColorSpace,q.batching=I.batching,q.batchingColor=I.batchingColor,q.instancing=I.instancing,q.instancingColor=I.instancingColor,q.instancingMorph=I.instancingMorph,q.skinning=I.skinning,q.morphTargets=I.morphTargets,q.morphNormals=I.morphNormals,q.morphColors=I.morphColors,q.morphTargetsCount=I.morphTargetsCount,q.numClippingPlanes=I.numClippingPlanes,q.numIntersection=I.numClipIntersection,q.vertexAlphas=I.vertexAlphas,q.vertexTangents=I.vertexTangents,q.toneMapping=I.toneMapping}function Wu(v,I){if(v.length===0)return null;if(v.length===1)return v[0].texture!==null?v[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let q=0,G=v.length;q<G;q++){let W=v[q];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function Xu(v,I,q,G,W){I.isScene!==!0&&(I=ee),K.resetTextureUnits();let Mt=I.fog,Et=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?I.environment:null,yt=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ne.workingColorSpace,Pt=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ut=ot.get(G.envMap||Et,Pt),$t=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qt=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),It=!!q.morphAttributes.position,he=!!q.morphAttributes.normal,Re=!!q.morphAttributes.color,xe=wn;G.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(xe=R.toneMapping);let fe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,He=fe!==void 0?fe.length:0,At=X.get(G),Je=b.state.lights;if(_t===!0&&(Lt===!0||v!==k)){let ge=v===k&&G.id===F;Tt.setState(G,v,ge)}let re=!1;G.version===At.__version?(At.needsLights&&At.lightsStateVersion!==Je.state.version||At.outputColorSpace!==yt||W.isBatchedMesh&&At.batching===!1||!W.isBatchedMesh&&At.batching===!0||W.isBatchedMesh&&At.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&At.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&At.instancing===!1||!W.isInstancedMesh&&At.instancing===!0||W.isSkinnedMesh&&At.skinning===!1||!W.isSkinnedMesh&&At.skinning===!0||W.isInstancedMesh&&At.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&At.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&At.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&At.instancingMorph===!1&&W.morphTexture!==null||At.envMap!==Ut||G.fog===!0&&At.fog!==Mt||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==Tt.numPlanes||At.numIntersection!==Tt.numIntersection)||At.vertexAlphas!==$t||At.vertexTangents!==Qt||At.morphTargets!==It||At.morphNormals!==he||At.morphColors!==Re||At.toneMapping!==xe||At.morphTargetsCount!==He||!!At.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(re=!0):(re=!0,At.__version=G.version);let fn=At.currentProgram;re===!0&&(fn=_r(G,I,W),U&&G.isNodeMaterial&&U.onUpdateProgram(G,fn,At));let Pn=!1,$n=!1,Vi=!1,de=fn.getUniforms(),Ee=At.uniforms;if(_.useProgram(fn.program)&&(Pn=!0,$n=!0,Vi=!0),G.id!==F&&(F=G.id,$n=!0),At.needsLights){let ge=Wu(b.state.lightProbeGridArray,W);At.lightProbeGrid!==ge&&(At.lightProbeGrid=ge,$n=!0)}if(Pn||k!==v){_.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),de.setValue(N,"projectionMatrix",v.projectionMatrix),de.setValue(N,"viewMatrix",v.matrixWorldInverse);let jn=de.map.cameraPosition;jn!==void 0&&jn.setValue(N,vt.setFromMatrixPosition(v.matrixWorld)),A.logarithmicDepthBuffer&&de.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&de.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),k!==v&&(k=v,$n=!0,Vi=!0)}if(At.needsLights&&(Je.state.sunShadowMap.length>0&&de.setValue(N,"sunShadowMap",Je.state.sunShadowMap,K),Je.state.directionalShadowMap.length>0&&de.setValue(N,"directionalShadowMap",Je.state.directionalShadowMap,K),Je.state.spotShadowMap.length>0&&de.setValue(N,"spotShadowMap",Je.state.spotShadowMap,K),Je.state.pointShadowMap.length>0&&de.setValue(N,"pointShadowMap",Je.state.pointShadowMap,K)),W.isSkinnedMesh){de.setOptional(N,W,"bindMatrix"),de.setOptional(N,W,"bindMatrixInverse");let ge=W.skeleton;ge&&(ge.boneTexture===null&&ge.computeBoneTexture(),de.setValue(N,"boneTexture",ge.boneTexture,K))}W.isBatchedMesh&&(de.setOptional(N,W,"batchingTexture"),de.setValue(N,"batchingTexture",W._matricesTexture,K),de.setOptional(N,W,"batchingIdTexture"),de.setValue(N,"batchingIdTexture",W._indirectTexture,K),de.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&de.setValue(N,"batchingColorTexture",W._colorsTexture,K));let Kn=q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&D.update(W,q,fn),($n||At.receiveShadow!==W.receiveShadow)&&(At.receiveShadow=W.receiveShadow,de.setValue(N,"receiveShadow",W.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&I.environment!==null&&(Ee.envMapIntensity.value=I.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=vg()),$n){if(de.setValue(N,"toneMappingExposure",R.toneMappingExposure),At.needsLights&&qu(Ee,Vi),Mt&&G.fog===!0&&Dt.refreshFogUniforms(Ee,Mt),Dt.refreshMaterialUniforms(Ee,G,it,Z,b.state.transmissionRenderTarget[v.id]),At.needsLights&&At.lightProbeGrid){let ge=At.lightProbeGrid;Ee.probesSH.value=ge.texture,Ee.probesMin.value.copy(ge.boundingBox.min),Ee.probesMax.value.copy(ge.boundingBox.max),Ee.probesResolution.value.copy(ge.resolution)}ys.upload(N,_c(At),Ee,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ys.upload(N,_c(At),Ee,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&de.setValue(N,"center",W.center),de.setValue(N,"modelViewMatrix",W.modelViewMatrix),de.setValue(N,"normalMatrix",W.normalMatrix),de.setValue(N,"modelMatrix",W.matrixWorld),G.uniformsGroups!==void 0){let ge=G.uniformsGroups;for(let jn=0,Hi=ge.length;jn<Hi;jn++){let yc=ge[jn];rt.update(yc,fn),rt.bind(yc,fn)}}return fn}function qu(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Yu(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(v,I,q){let G=X.get(v);G.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(v.texture).__webglTexture=I,X.get(v.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let q=X.get(v);q.__webglFramebuffer=I,q.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,q=0){st=v,Y=I,J=q;let G=null,W=!1,Mt=!1;if(v){let yt=X.get(v);if(yt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(N.FRAMEBUFFER,yt.__webglFramebuffer),$.copy(v.viewport),at.copy(v.scissor),gt=v.scissorTest,_.viewport($),_.scissor(at),_.setScissorTest(gt),F=-1;return}else if(yt.__webglFramebuffer===void 0)K.setupRenderTarget(v);else if(yt.__hasExternalTextures)K.rebindTextures(v,X.get(v.texture).__webglTexture,X.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let $t=v.depthTexture;if(yt.__boundDepthTexture!==$t){if($t!==null&&X.has($t)&&(v.width!==$t.image.width||v.height!==$t.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(v)}}let Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(Mt=!0);let Ut=X.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ut[I])?G=Ut[I][q]:G=Ut[I],W=!0):v.samples>0&&K.useMultisampledRTT(v)===!1?G=X.get(v).__webglMultisampledFramebuffer:Array.isArray(Ut)?G=Ut[q]:G=Ut,$.copy(v.viewport),at.copy(v.scissor),gt=v.scissorTest}else $.copy(St).multiplyScalar(it).floor(),at.copy(zt).multiplyScalar(it).floor(),gt=H;if(q!==0&&(G=V),_.bindFramebuffer(N.FRAMEBUFFER,G)&&_.drawBuffers(v,G),_.viewport($),_.scissor(at),_.setScissorTest(gt),W){let yt=X.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,yt.__webglTexture,q)}else if(Mt){let yt=I;for(let Pt=0;Pt<v.textures.length;Pt++){let Ut=X.get(v.textures[Pt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Pt,Ut.__webglTexture,q,yt)}}else if(v!==null&&q!==0){let yt=X.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yt.__webglTexture,q)}F=-1};function vc(v){let I=X.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=A.textureFormatReadable(v.format),I.__typeReadable=A.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,q,G,W,Mt,Et,yt=0){if(!(v&&v.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt){_.bindFramebuffer(N.FRAMEBUFFER,Pt);try{let Ut=v.textures[yt],$t=Ut.format,Qt=Ut.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let It=vc(Ut);if(It.__formatReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(It.__typeReadable===!1){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-G&&q>=0&&q<=v.height-W&&N.readPixels(I,q,G,W,mt.convert($t),mt.convert(Qt),Mt)}finally{let Ut=st!==null?X.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(v,I,q,G,W,Mt,Et,yt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=X.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Et!==void 0&&(Pt=Pt[Et]),Pt)if(I>=0&&I<=v.width-G&&q>=0&&q<=v.height-W){_.bindFramebuffer(N.FRAMEBUFFER,Pt);let Ut=v.textures[yt],$t=Ut.format,Qt=Ut.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+yt);let It=vc(Ut);if(It.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(It.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,he),N.bufferData(N.PIXEL_PACK_BUFFER,Mt.byteLength,N.STREAM_READ),N.readPixels(I,q,G,W,mt.convert($t),mt.convert(Qt),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Re=st!==null?X.get(st).__webglFramebuffer:null;_.bindFramebuffer(N.FRAMEBUFFER,Re);let xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await wh(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,he),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Mt),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(he),N.deleteSync(xe),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,q=0){let G=Math.pow(2,-q),W=Math.floor(v.image.width*G),Mt=Math.floor(v.image.height*G),Et=I!==null?I.x:0,yt=I!==null?I.y:0;K.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,Et,yt,W,Mt),_.unbindTexture()},this.copyTextureToTexture=function(v,I,q=null,G=null,W=0,Mt=0){let Et,yt,Pt,Ut,$t,Qt,It,he,Re,xe=v.isCompressedTexture?v.mipmaps[Mt]:v.image;if(q!==null)Et=q.max.x-q.min.x,yt=q.max.y-q.min.y,Pt=q.isBox3?q.max.z-q.min.z:1,Ut=q.min.x,$t=q.min.y,Qt=q.isBox3?q.min.z:0;else{let Ee=Math.pow(2,-W);Et=Math.floor(xe.width*Ee),yt=Math.floor(xe.height*Ee),v.isDataArrayTexture?Pt=xe.depth:v.isData3DTexture?Pt=Math.floor(xe.depth*Ee):Pt=1,Ut=0,$t=0,Qt=0}G!==null?(It=G.x,he=G.y,Re=G.z):(It=0,he=0,Re=0);let fe=mt.convert(I.format),He=mt.convert(I.type),At;I.isData3DTexture?(K.setTexture3D(I,0),At=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(K.setTexture2DArray(I,0),At=N.TEXTURE_2D_ARRAY):(K.setTexture2D(I,0),At=N.TEXTURE_2D),_.activeTexture(N.TEXTURE0),_.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),_.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),_.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Je=_.getParameter(N.UNPACK_ROW_LENGTH),re=_.getParameter(N.UNPACK_IMAGE_HEIGHT),fn=_.getParameter(N.UNPACK_SKIP_PIXELS),Pn=_.getParameter(N.UNPACK_SKIP_ROWS),$n=_.getParameter(N.UNPACK_SKIP_IMAGES);_.pixelStorei(N.UNPACK_ROW_LENGTH,xe.width),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,xe.height),_.pixelStorei(N.UNPACK_SKIP_PIXELS,Ut),_.pixelStorei(N.UNPACK_SKIP_ROWS,$t),_.pixelStorei(N.UNPACK_SKIP_IMAGES,Qt);let Vi=v.isDataArrayTexture||v.isData3DTexture,de=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let Ee=X.get(v),Kn=X.get(I),ge=X.get(Ee.__renderTarget),jn=X.get(Kn.__renderTarget);_.bindFramebuffer(N.READ_FRAMEBUFFER,ge.__webglFramebuffer),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Hi=0;Hi<Pt;Hi++)Vi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(v).__webglTexture,W,Qt+Hi),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,X.get(I).__webglTexture,Mt,Re+Hi)),N.blitFramebuffer(Ut,$t,Et,yt,It,he,Et,yt,N.DEPTH_BUFFER_BIT,N.NEAREST);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||v.isRenderTargetTexture||X.has(v)){let Ee=X.get(v),Kn=X.get(I);_.bindFramebuffer(N.READ_FRAMEBUFFER,E),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,B);for(let ge=0;ge<Pt;ge++)Vi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ee.__webglTexture,W,Qt+ge):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ee.__webglTexture,W),de?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Kn.__webglTexture,Mt,Re+ge):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Kn.__webglTexture,Mt),W!==0?N.blitFramebuffer(Ut,$t,Et,yt,It,he,Et,yt,N.COLOR_BUFFER_BIT,N.NEAREST):de?N.copyTexSubImage3D(At,Mt,It,he,Re+ge,Ut,$t,Et,yt):N.copyTexSubImage2D(At,Mt,It,he,Ut,$t,Et,yt);_.bindFramebuffer(N.READ_FRAMEBUFFER,null),_.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else de?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(At,Mt,It,he,Re,Et,yt,Pt,fe,He,xe.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(At,Mt,It,he,Re,Et,yt,Pt,fe,xe.data):N.texSubImage3D(At,Mt,It,he,Re,Et,yt,Pt,fe,He,xe):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,Mt,It,he,Et,yt,fe,He,xe.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,Mt,It,he,xe.width,xe.height,fe,xe.data):N.texSubImage2D(N.TEXTURE_2D,Mt,It,he,Et,yt,fe,He,xe);_.pixelStorei(N.UNPACK_ROW_LENGTH,Je),_.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),_.pixelStorei(N.UNPACK_SKIP_PIXELS,fn),_.pixelStorei(N.UNPACK_SKIP_ROWS,Pn),_.pixelStorei(N.UNPACK_SKIP_IMAGES,$n),Mt===0&&I.generateMipmaps&&N.generateMipmap(At),_.unbindTexture()},this.initRenderTarget=function(v){X.get(v).__webglFramebuffer===void 0&&K.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?K.setTextureCube(v,0):v.isData3DTexture?K.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?K.setTexture2DArray(v,0):K.setTexture2D(v,0),_.unbindTexture()},this.resetState=function(){Y=0,J=0,st=null,_.reset(),wt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var pt=n=>n*Math.PI/180,pe=(n,t,e)=>Math.min(e,Math.max(t,n));var Gt=n=>(n=pe(n,0,1),n*n*(3-2*n));function Ss(n,t,e,i){return n<t?Gt(n/t):n<t+e?1:n<t+e+i?1-Gt((n-t-e)/i):0}function Jl(n){let t=n-Math.floor(n);return t<.5?Gt(t*2):1-Gt((t-.5)*2)}function Fi(n,t){let e=Math.floor(n/t);return{r:e,u:(n-e*t)/t}}function Zl(n,t){let e=n.length;if(t<=n[0][0])return n[0].slice(1);if(t>=n[e-1][0])return n[e-1].slice(1);let i=1;for(;t>n[i][0];)i++;let s=n[i-1],r=n[i],a=r[0]-s[0]||1e-6,l=(t-s[0])/a,c=l*l,o=c*l,h=(u,d)=>(n[d][u]-n[d-1][u])/(n[d][0]-n[d-1][0]||1e-6),f=(u,d)=>{if(u===0||u===e-1)return 0;let g=h(d,u),M=h(d,u+1);if(g*M<=0)return 0;let m=n[u][0]-n[u-1][0],p=n[u+1][0]-n[u][0],T=2*p+m,C=p+2*m;return(T+C)/(T/g+C/M)};return r.slice(1).map((u,d)=>{let g=d+1,M=f(i-1,g)*a,m=f(i,g)*a;return(2*o-3*c+1)*s[g]+(o-2*c+l)*M+(-2*o+3*c)*r[g]+(o-c)*m})}var Jn={thigh:.31,shin:.31,upperArm:.22,foreArm:.2},su=new O,Bn=new O,vi=new O,ru=new O,au=new O,$l=new O,Kl=new O,ou=new O,lu=new ye,cu=new qe,hu=new qe;function ur(n,t,e,i,s,r,a){n.updateWorldMatrix(!0,!1),n.getWorldPosition(su),Bn.subVectors(e,su);let l=Bn.length();l<1e-4&&(Bn.set(0,-1,0),l=1e-4),Bn.divideScalar(l),l=pe(l,Math.abs(i-s)+.001,i+s-.001);let c=pe((i*i+l*l-s*s)/(2*i*l),-1,1),o=Math.sqrt(1-c*c),h=Math.PI-Math.acos(pe((i*i+s*s-l*l)/(2*i*s),-1,1));vi.copy(r).addScaledVector(Bn,-r.dot(Bn)),vi.lengthSq()<1e-6&&(vi.set(0,0,1).addScaledVector(Bn,-Bn.z),vi.lengthSq()<1e-6&&vi.set(1,0,0)),vi.normalize(),ru.copy(Bn).multiplyScalar(c).addScaledVector(vi,o),au.copy(vi).multiplyScalar(c).addScaledVector(Bn,-o),$l.copy(ru).negate(),Kl.copy(au).multiplyScalar(a==="arm"?-1:1),ou.crossVectors($l,Kl),lu.makeBasis(ou,$l,Kl),cu.setFromRotationMatrix(lu),n.parent.updateWorldMatrix(!0,!1),n.parent.getWorldQuaternion(hu),n.quaternion.copy(hu.invert()).multiply(cu),t.rotation.set(a==="arm"?-h:h,0,0)}var po={},Te=(n,t)=>{po[n]=t},Q=null,yg=new O(0,1,0),jl=new qe,Mg=new qe,Sg=new Sn,Cy=new O,le=(n=0,t=0,e=0)=>new O(n,t,e),Ae=(n,t,e=0)=>Q.JT.thigh[n].rotation.set(-pt(t),0,pt(e*n)),Ie=(n,t)=>Q.JT.shin[n].rotation.x=pt(t),Be=(n,t,e=8)=>Q.JT.sh[n].rotation.set(-pt(t),0,pt(e*n)),Ve=(n,t)=>Q.JT.el[n].rotation.x=-pt(t);function bg(n){return n.updateWorldMatrix(!0,!1),n.getWorldQuaternion(jl),jl.premultiply(Mg.copy(Q.root.quaternion).invert()),Sg.setFromQuaternion(jl,"XYZ").x}var un=(n,t=0)=>{Q.JT.foot[n].rotation.x=-bg(Q.JT.shin[n])+pt(t)},uu=n=>{let t=pt(n);return n>=0?.072*Math.cos(t)+.1675*Math.sin(t)+.004:.072*Math.cos(t)+.0575*Math.sin(-t)+.004},Ry=new O,Py=new O;var Iy=new O,Ly=new O;var Bi=(n,t,e)=>ur(Q.JT.thigh[n],Q.JT.shin[n],t,Jn.thigh,Jn.shin,e,"leg"),Cn=(n,t,e)=>ur(Q.JT.sh[n],Q.JT.el[n],t,Jn.upperArm,Jn.foreArm,e,"arm"),Ne=(n,t,e)=>n+(t-n)*e,bs=(n,t,e)=>Q.spine.localToWorld(le(n,t,e));var wg=()=>({py:.69,hx:0,hz:0,pp:0,pyw:0,pr:0,lean:2,syw:0,sr:0,hd:-2,hyw:0,F:{1:[.085,.075,0,0,.12,0,1,0],"-1":[-.085,.075,0,0,-.12,0,1,0]},H:{1:[.19,.62,.03,.8,-.7,0],"-1":[-.19,.62,.03,-.8,-.7,0]}}),Ht=(n,t)=>{let e=t?JSON.parse(JSON.stringify(t)):wg();n(e);for(let i of[1,-1])for(;e.F[i].length<8;)e.F[i].push(0);return e},Oi=(n,t,e)=>typeof n=="number"?n+(t-n)*e:Array.isArray(n)?n.map((i,s)=>Oi(i,t[s]??i,e)):Object.fromEntries(Object.keys(n).map(i=>[i,Oi(n[i],t[i],e)]));function dr(n){let t=JSON.parse(JSON.stringify(n));t.hx*=-1,t.pr*=-1,t.pyw*=-1,t.syw*=-1,t.sr*=-1,t.hyw*=-1;let e=s=>[-s[0],s[1],s[2],s[3],-s[4],s[5],s[6],-(s[7]||0)],i=s=>[-s[0],s[1],s[2],-s[3],s[4],s[5]];return t.F={1:e(n.F[-1]),"-1":e(n.F[1])},t.H={1:i(n.H[-1]),"-1":i(n.H[1])},t}var Tg=n=>{let t=Math.abs(n);return t<=100?uu(n):uu(n>0?100:-100)*Math.max(0,1-(t-100)/70)},du=new O,fu=new O,pu=new O,mu=new O;function yi(n){let{root:t,pelvis:e,spine:i,head:s}=Q;t.position.set(Q.base.x+n.hx,n.py,Q.base.z+n.hz),e.rotation.set(pt(n.pp),pt(n.pyw),pt(n.pr)),i.rotation.set(pt(n.lean),pt(n.syw),pt(n.sr)),s.rotation.set(pt(n.hd),pt(n.hyw),0),t.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.F[r];du.set(a[0],Math.max(a[1],Tg(a[3])),a[2]),fu.set(a[4],a[5],a[6]),ur(Q.JT.thigh[r],Q.JT.shin[r],du,Jn.thigh,Jn.shin,fu,"leg"),un(r,a[3]),a[7]&&(Q.JT.foot[r].rotation.z=pt(a[7]))}t.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.H[r];pu.set(a[0],a[1],a[2]),mu.set(a[3],a[4],a[5]),ur(Q.JT.sh[r],Q.JT.el[r],pu,Jn.upperArm,Jn.foreArm,mu,"arm")}}var gu=new O;function _u(n){return{q:n.ALL.map(t=>t.quaternion.clone()),rq:n.root.quaternion.clone(),rp:n.root.position.clone()}}function Ag(n,t,e){return{q:n.q.map((i,s)=>i.clone().slerp(t.q[s],e)),rq:n.rq.clone().slerp(t.rq,e),rp:n.rp.clone().lerp(t.rp,e)}}function Eg(n,t){n.ALL.forEach((e,i)=>e.quaternion.copy(t.q[i])),n.root.quaternion.copy(t.rq),n.root.position.copy(t.rp)}function Cg(n,t,e,i){let s=[n.spine,n.neck,n.head,n.JT.sh[1],n.JT.sh[-1],n.JT.el[1],n.JT.el[-1]];(!n.sm||e)&&(n.sm=new Map);let r=1-Math.exp(-Math.max(t,0)/.055);s.forEach((a,l)=>{let c=n.sm.get(a);if(!c){c=a.quaternion.clone(),n.sm.set(a,c);return}l<3||i?(c.slerp(a.quaternion,r),a.quaternion.copy(c)):c.copy(a.quaternion)})}function Rg(n){n.ALL.forEach(t=>t.rotation.set(0,0,0)),n.root.position.set(n.base.x,0,n.base.z),n.root.quaternion.setFromAxisAngle(yg,n.yaw),n.root.userData.air=0}po.idle=n=>(Ae(1,3),Ae(-1,3),Ie(1,6),Ie(-1,6),Be(1,4,9),Be(-1,4,9),Ve(1,14),Ve(-1,14),Q.spine.rotation.x=pt(3)+.01*Math.sin(n*1.6),Q.head.rotation.x=pt(-2),{ground:"all"});function ws(n,t,e,i,s,r,a){Q=n,(n.mode!==t||a)&&(n.blend=n.last?{k:0,from:n.last}:null,n.mode=t),Rg(n);let c=(po[t]||po.idle)(e,i,s)||{};if(n.blend&&(n.blend.k+=r/.28,n.blend.k>=1?n.blend=null:Eg(n,Ag(n.blend.from,_u(n),Gt(n.blend.k)))),n.spine.rotation.x+=.009*Math.sin(e*1.9+(n.role==="B"?1.3:0)),n.neck.rotation.x+=.006*Math.sin(e*1.9-.6),Cg(n,r,a||!r,!c.hold),n.root.updateMatrixWorld(!0),c.ground!=="none"){let o=1e9;for(let h of n.marks)c.ground==="feet"&&h.kind!=="foot"||c.ground==="knees"&&h.kind!=="knee"||(h.o.getWorldPosition(gu),o=Math.min(o,gu.y-h.r));n.root.position.y+=-o}return n.root.position.y+=(n.root.userData.air||0)+(c.lift||0),n.root.updateMatrixWorld(!0),c.post&&(c.post(),n.root.updateMatrixWorld(!0)),n.last=_u(n),c}var Ts=new O,mo=new O;function Pg(n=.045,t=.27,e=.2){for(let i of[1,-1])Cn(i,bs(i*n,t,e),le(i*.9,-.7,0))}Te("squat",(n,t,e)=>{let i=e.repT,s=n%i/i,r=(e.pause||0)/i,a=e.v,l=0,c=0,o=0;if(a==="jump")s<.38?l=Gt(s/.38)*.75:s<.5?l=.75*(1-Gt((s-.38)/.12)):s<.78?(l=0,c=Math.sin(Math.PI*(s-.5)/.28)):s<.92?l=Gt((s-.78)/.14)*.55:l=.55*(1-Gt((s-.92)/.08)),o=s<.38?Ne(10,-35,Gt(s/.38)):s<.58?Ne(-35,150,Gt((s-.38)/.2)):Ne(150,15,Gt((s-.6)/.3));else{let d=r?.3:.38,g=r?.25:.32;l=Ss(s,d,r+.05,g),o=10+80*l}let h=8+90*l,f=10+104*l;for(let d of[1,-1])Ae(d,h,a==="sumo"?16:5),Ie(d,f),Q.JT.foot[d].rotation.x=pt(h-f)+pt(40*c),a==="arms"||a==="jump"?(Be(d,o,6),Ve(d,6)):a==="goblet"||(Be(d,20,8),Ve(d,40));let u=8+30*l;return Q.spine.rotation.x=pt(u),Q.head.rotation.x=-pt(u*.8),Q.root.userData.air=.22*c,{ground:"all",post(){a==="goblet"&&Pg(.045,.27,.2)}}});Te("lunge",(n,t,e)=>{let i=e.repT,{r:s,u:r}=Fi(n,i),a=e.v,l=s%2?-1:1,c=a==="walk",o=a==="back",h=Gt(r/.2)-Gt((r-.8)/.2),f=Gt((r-.2)/.3)-Gt((r-.6)/.2),u=c?s*.52:0,d=.5,g,M;c?(g=u+.52*Gt(r/.2),M=u+.52*Gt((r-.8)/.2)):o?(g=-d*h,M=0):(g=d*h,M=0);let m=(r<.2?Math.sin(Math.PI*r/.2):r>.8?Math.sin(Math.PI*(r-.8)/.2):0)*.12,p=(g+M)/2,T=.7-.29*f;Q.root.position.set(Q.base.x,T,Q.base.z+p),Q.spine.rotation.x=pt(6),Q.head.rotation.x=pt(-4),e.twist&&!o&&(Q.spine.rotation.y=l*pt(34)*f);for(let S of[1,-1])Be(S,e.twist?18:6,8),Ve(S,e.twist?70:10);Q.root.updateMatrixWorld(!0);let C=l,y=-l;return Bi(C,le(C*.09,.075+m,Q.base.z+g),le(0,0,1)),Bi(y,le(y*.09,.075,Q.base.z+M),le(0,0,1)),un(C,o?55*f:0),un(y,o?0:c?r<.8?50*f:0:55*f),{ground:"none",track:c}});Te("bridge",(n,t,e)=>{let i=e.repT,{r:s,u:r}=Fi(n,i),a=e.v,l=(e.pause||0)/i,c;a==="march"?c=Gt(Math.min(1,n%(i*e.n)/1)):c=Ss(r,l?.2:.3,l+.05,l?.2:.26),c=pe(c,0,1);let o=.11+.2*c,h=Math.asin(pe((o-.1)/.415,0,.95));Q.root.rotation.x=-Math.PI/2-h,Q.root.position.set(Q.base.x,o,Q.base.z+.14),Q.head.rotation.x=pt(18)*c-h*.4;for(let g of[1,-1])Be(g,0,16);Q.root.updateMatrixWorld(!0);let f=Q.base.z+.14,u=f+.38,d=s%2?-1:1;for(let g of[1,-1]){let M=le(g*.12,.075,u);if(a==="march"&&g===d&&c>.95&&(M.y+=.22*Math.sin(Math.PI*r),M.z-=.06*Math.sin(Math.PI*r)),a==="single"&&g===d){let m=le(g*.09,o+.62*Math.sin(h)*c,f+.62*Math.cos(h)*.98);M.lerp(m,Gt(c))}Bi(g,M,le(0,1,.25)),un(g,a==="single"&&g===d?20*Gt(c):0)}return{ground:"none"}});Te("pushup",(n,t,e)=>{let i=e.repT,s=n%i/i,r=e.v,a=(e.pause||0)/i,l;e.slow?l=s<.45?1-Gt(s/.45):s<.55?0:s<.75?Gt((s-.55)/.2):1:a?l=s<.2?1-Gt(s/.2):s<.2+a+.02?0:s<.45+a?Gt((s-.22-a)/.23):1:l=s<.35?1-Gt(s/.35):s<.4?0:s<.75?Gt((s-.4)/.35):1;let c=r==="knees",o=Ne(c?8:5,c?22:19,l);Q.root.rotation.x=pt(90-o),Q.root.position.z+=-.42,Q.head.rotation.x=-pt(46);for(let f of[1,-1])c?(Ae(f,0,3),Ie(f,88),Q.JT.foot[f].rotation.x=pt(10)):(Ae(f,0,3),Q.JT.foot[f].rotation.x=pt(2));let h=e.wide||.17;return{ground:c?"knees":"feet",post(){for(let f of[1,-1])Q.JT.sh[f].updateWorldMatrix(!0,!1),Q.JT.sh[f].getWorldPosition(Ts),Cn(f,le(f*h,.04,Ts.z),le(f*.5,0,-1))}}});Te("plank",(n,t,e)=>{let i=e.v,s=Math.sin(n*2.2),r=i==="knees"?22:i==="forearm"?4:18;Q.root.rotation.x=pt(90-r+s*.5),Q.root.position.z+=-.42,Q.head.rotation.x=-pt(48);let a=i==="legup"?Math.floor(n/3)%2?-1:1:0,l=i==="legup"?Math.sin(Math.PI*pe(n%3/3,0,1)):0;for(let c of[1,-1])i==="knees"?(Ae(c,0,3),Ie(c,88),Q.JT.foot[c].rotation.x=pt(10)):(Ae(c,c===a?-24*l:0,3),Q.JT.foot[c].rotation.x=pt(2));return{ground:i==="knees"?"knees":"feet",lift:0,post(){let c=i==="tap"?Math.floor(n/2.2)%2?-1:1:0,o=i==="tap"?Math.sin(Math.PI*pe(n%2.2/2.2,0,1)):0;for(let h of[1,-1])if(Q.JT.sh[h].updateWorldMatrix(!0,!1),Q.JT.sh[h].getWorldPosition(Ts),h===c&&o>.02){Q.JT.sh[-h].getWorldPosition(mo);let f=mo.clone().lerp(le(h*.17,.04,Ts.z),1-o);f.y=Ne(.04,mo.y+.02,o),f.z=Ne(Ts.z,mo.z+.04,o),Cn(h,f,le(h*.6,.3,-1))}else Cn(h,le(h*.17,.04,Ts.z+(i==="forearm"?.2:0)),le(h*.5,0,-1))}}});Te("crunch",(n,t,e)=>{let i=e.repT||3,{u:s}=Fi(n,i),r=e.v,a=(e.pause||0)/i;Q.root.rotation.x=-Math.PI/2,Q.root.position.z+=.14,Q.head.rotation.x=pt(-6);let l=Q.base.z+.14;if(r==="vsit"){Q.root.quaternion.setFromAxisAngle(le(0,1,0),Q.yaw),Q.root.position.z=Q.base.z;let o=Math.sin(n*2.2)*1.2;Q.spine.rotation.x=pt(-36+o),Q.head.rotation.x=pt(32);for(let h of[1,-1])Ae(h,118+o,4),Ie(h,6),Q.JT.foot[h].rotation.x=pt(25),Be(h,82,4),Ve(h,4);return{ground:"all"}}if(r==="bike"){let o=Math.cos(Math.PI*n/i);Q.spine.rotation.x=pt(34),Q.spine.rotation.y=-pt(22)*o,Q.head.rotation.x=pt(8);for(let h of[1,-1]){let f=h>0?(o+1)/2:(1-o)/2;Ae(h,Ne(40,100,f),4),Ie(h,Ne(6,100,f)),Q.JT.foot[h].rotation.x=pt(15)}return{ground:"all",post(){for(let h of[1,-1])Cn(h,Q.head.localToWorld(le(h*.14,0,-.09)),le(h*.9,.2,0))}}}let c=Ss(s,.35,a+.04,.3);return Q.spine.rotation.x=pt(38*c),Q.head.rotation.x=pt(-4+6*c),{ground:"all",post(){for(let h of[1,-1])Bi(h,le(h*.12,.075,l+.36),le(0,1,.25)),un(h,0);let o=bs(0,.2,.16);for(let h of[1,-1])Cn(h,o.clone().add(le(h*.07,0,0)),le(h*.9,.3,0))}}});Te("superman",(n,t,e)=>{let i=e.repT||3,s=e.v,r=(e.pause||0)/i;Q.root.rotation.x=Math.PI/2,Q.root.position.z+=-.12,Q.head.rotation.x=pt(-4);let a,l=0;if(s==="swim")a=1,l=Math.sin(n*6);else{let{r:o,u:h}=Fi(n,i);a=Ss(h,.3,r+.06,.3),l=s==="alt"?o%2?-1:1:0}let c=s==="swim"?.6:1;for(let o of[1,-1]){let h=a,f=a;s==="alt"&&(h=o===l?a:0,f=-o===l?a:0),s==="swim"&&(h=(o*l+1)/2,f=(-o*l+1)/2),Be(o,165+32*h*c,6),Ve(o,0),Ae(o,-22*f*c,3),Ie(o,0),Q.JT.foot[o].rotation.x=pt(20)}return Q.spine.rotation.x=pt(s==="alt"?-10*a:-(s==="swim"?12:20)*a),{ground:"all"}});Te("jump",(n,t,e)=>{let i=e.v;if(i==="rope"){let C=n*2*Math.PI/.42,y=Math.max(0,Math.sin(C));for(let S of[1,-1])Ae(S,6+14*y,2),Ie(S,14+26*y),Q.JT.foot[S].rotation.x=pt(30*y),Be(S,18,22),Ve(S,72);return Q.JT.el[1].rotation.x=-pt(70+12*Math.sin(C)),Q.JT.el[-1].rotation.x=-pt(70+12*Math.sin(C+1)),Q.spine.rotation.x=pt(5),Q.head.rotation.x=pt(-3),Q.root.userData.air=.07*y,{ground:"all"}}if(i==="side"){let C=n*2*Math.PI/.8;Q.root.position.x+=.26*Math.sin(C);let y=Math.pow(Math.abs(Math.cos(C)),.8);for(let S of[1,-1])Ae(S,10+18*(1-y),2),Ie(S,18+30*(1-y)),Q.JT.foot[S].rotation.x=pt(25*y),Be(S,15+12*y,22),Ve(S,66);return Q.spine.rotation.x=pt(10),Q.spine.rotation.z=pt(-6)*Math.sin(C),Q.head.rotation.x=pt(-5),Q.root.userData.air=.09*y,{ground:"all"}}let s=e.repT,{r,u:a}=Fi(n,s),l=i==="broad",c=(e.hold||0)/s,o=0,h=0,f=10,u=.32,d=.42,g=.66,M=.78;if(a<u)o=Gt(a/u)*.8,f=Ne(10,-35,Gt(a/u));else if(a<d)o=.8*(1-Gt((a-u)/(d-u))),f=Ne(-35,l?85:160,Gt((a-u)/(d-u)));else if(a<g)h=Math.sin(Math.PI*(a-d)/(g-d)),f=l?Ne(85,70,(a-d)/(g-d)):165;else if(a<M)o=Gt((a-g)/(M-g))*.62,f=Ne(l?70:165,40,Gt((a-g)/(M-g)));else if(c&&a<M+c)o=.45,f=40;else{let C=c?M+c:M;o=(c?.45:.62)*(1-Gt((a-C)/(1-C+1e-6))),f=Ne(40,10,Gt((a-C)/(1-C+1e-6)))}let m=6+82*o,p=8+96*o;for(let C of[1,-1])Ae(C,m,4),Ie(C,p),Q.JT.foot[C].rotation.x=pt(m-p)+pt(38*h),Be(C,f,6),Ve(C,8);let T=6+28*o+(l?10*h:0);if(Q.spine.rotation.x=pt(T),Q.head.rotation.x=-pt(T*.7),Q.root.userData.air=(l?.3:.26)*h,l){let C=r*.72,y=a<d?0:a<g?Gt((a-d)/(g-d)):1;Q.root.position.z+=C+.72*y}return{ground:"all",track:l}});var fr=.695,kn=-.2,zi=n=>[n*.09,.05,kn-.3,180,0,-1,1,0],zn=(n,t=.06,e=1.52,i=.02)=>[n*t,e,i,n*.6,0,-.3],go=n=>[n*.03,1.03,.22,n*.9,-.5,-.2],xu=(n,t=.88,e=0,i=.56)=>[n*i,t,e,n*.3,-.4,-.6],vu=n=>[n*.17,.045,.27,n*.7,.2,-.6],_o=n=>{n.py=fr,n.hx=.026,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0]},Ql=n=>{n.H[1]=[.16,.045,kn+.44,.6,.3,-.6],n.H[-1]=[-.16,.045,kn+.44,-.6,.3,-.6]},xo=n=>{n.F[1]=[.09,.09,.41,-62,0,1,0,0],n.F[-1]=[-.09,.09,.41,-62,0,1,0,0]},tc=n=>{n.F[1]=[.09,.045,-.28,180,0,-.4,1,0],n.F[-1]=[-.09,.045,-.28,180,0,-.4,1,0]},ec=n=>{n.F[1]=[.09,.045,-.76,180,0,-1,0,0],n.F[-1]=[-.09,.045,-.76,180,0,-1,0,0]},dn={montana:Ht(n=>{n.py=fr,n.H[1]=[.17,.61,.03,.8,-.7,0],n.H[-1]=[-.17,.61,.03,-.8,-.7,0],n.F[1][0]=.075,n.F[-1][0]=-.075}),montanaUp:Ht(n=>{n.py=fr,n.H[1]=zn(1),n.H[-1]=zn(-1),n.hd=-10,n.lean=-1,n.F[1][0]=.075,n.F[-1][0]=-.075}),tree1:Ht(n=>{_o(n),n.F[1]=[-.005,.1,.03,28,1,.1,.35,0],n.H[1]=go(1),n.H[-1]=go(-1),n.lean=1}),tree2:Ht(n=>{_o(n),n.F[1]=[0,.26,.02,30,1,.1,.3,0],n.H[1]=go(1),n.H[-1]=go(-1),n.lean=1}),tree3:Ht(n=>{_o(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=zn(1,.07,1.5),n.H[-1]=zn(-1,.07,1.5),n.lean=0,n.hd=-6}),tree4:Ht(n=>{_o(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=zn(1,.34,1.44),n.H[-1]=zn(-1,.34,1.44),n.lean=0,n.hd=-8}),w1:Ht(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=zn(1,.07,1.36,.08),n.H[-1]=zn(-1,.07,1.36,.08),n.lean=-3,n.hd=-12}),w1p:Ht(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=[.03,.86,.22,.9,-.5,-.2],n.H[-1]=[-.03,.86,.22,-.9,-.5,-.2],n.lean=0,n.hd=-2}),w2:Ht(n=>{n.py=.44,n.hx=.06,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=xu(1,.86),n.H[-1]=xu(-1,.86),n.lean=0,n.hyw=70,n.hd=-2}),w2b:Ht(n=>{n.py=.44,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=[.42,.52,.02,.3,-.4,-.6],n.H[-1]=[-.06,1.26,0,-.6,.3,-.3],n.sr=-22,n.hx=.1,n.hyw=30,n.hd=-8}),w3:Ht(n=>{n.py=.66,n.hx=.026,n.pp=84,n.lean=4,n.hd=-60,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.06,.7,-.6,0,0,-1,0,0],n.H[1]=[.08,.7,.86,.5,-.2,0],n.H[-1]=[-.08,.7,.86,-.5,-.2,0]}),quad:Ht(n=>{n.py=.37,n.hz=kn,n.lean=80,n.hd=-8,n.F[1]=zi(1),n.F[-1]=zi(-1),Ql(n)}),cat:Ht(n=>{n.py=.39,n.hz=kn,n.pp=-10,n.lean=88,n.hd=42,n.F[1]=zi(1),n.F[-1]=zi(-1),Ql(n)}),cow:Ht(n=>{n.py=.35,n.hz=kn,n.pp=10,n.lean=68,n.hd=-36,n.F[1]=zi(1),n.F[-1]=zi(-1),Ql(n)}),bird:Ht(n=>{n.py=.37,n.hz=kn,n.lean=82,n.hd=-12,n.hx=-.025,n.pr=2,n.F[-1]=zi(-1),n.F[1]=[.09,.4,kn-.64,0,0,-1,0,0],n.H[1]=[.16,.045,kn+.44,.6,.3,-.6],n.H[-1]=[-.11,.47,kn+.86,-.3,1,0]}),dog:Ht(n=>{n.py=.62,n.hz=-.08,n.lean=140,n.hd=-2,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]}),plank:Ht(n=>{n.py=.36,n.hz=-.03,n.pp=72,n.lean=0,n.hd=-24,n.F[1]=[.09,.18,-.6,70,0,-1,0,0],n.F[-1]=[-.09,.18,-.6,70,0,-1,0,0],n.H[1]=[.16,.045,.4,.6,.3,-.6],n.H[-1]=[-.16,.045,.4,-.6,.3,-.6]}),prone:Ht(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=0,n.hd=-8,ec(n),n.H[1]=[.22,.045,.27,.8,.4,-.2],n.H[-1]=[-.22,.045,.27,-.8,.4,-.2]}),cobra:Ht(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-34,n.hd=-24,ec(n),n.H[1]=vu(1),n.H[-1]=vu(-1)}),cobra2:Ht(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-52,n.hd=-30,ec(n),n.H[1]=[.17,.045,.21,.7,.2,-.6],n.H[-1]=[-.17,.045,.21,-.7,.2,-.6]}),sitL:Ht(n=>{n.py=.1,n.hz=-.2,n.lean=-4,n.hd=4,xo(n),n.H[1]=[.21,.045,-.2,.6,.2,-.4],n.H[-1]=[-.21,.045,-.2,-.6,.2,-.4]}),fly:Ht(n=>{n.py=.1,n.hz=-.12,n.lean=-2,n.hd=4,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.09,.16,.6,.3,-.5],n.H[-1]=[-.05,.09,.16,-.6,.3,-.5]}),fly2:Ht(n=>{n.py=.1,n.hz=-.12,n.lean=32,n.hd=14,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.08,.17,.6,.3,-.5],n.H[-1]=[-.05,.08,.17,-.6,.3,-.5]}),fold1:Ht(n=>{n.py=.1,n.hz=-.2,n.lean=34,n.hd=8,xo(n),n.H[1]=[.1,.14,.22,.5,.6,-.4],n.H[-1]=[-.1,.14,.22,-.5,.6,-.4]}),fold2:Ht(n=>{n.py=.1,n.hz=-.2,n.lean=64,n.hd=18,xo(n),n.H[1]=[.1,.11,.37,.5,.6,-.4],n.H[-1]=[-.1,.11,.37,-.5,.6,-.4]}),twist:Ht(n=>{n.py=.1,n.hz=-.2,n.lean=2,n.syw=-40,n.hyw=-24,n.hd=2,xo(n),n.H[1]=[.24,.045,-.36,.6,.3,-.5],n.H[-1]=[.12,.18,.08,-.4,-.4,.6]}),kneel:Ht(n=>{n.py=.21,n.hz=-.25,n.lean=2,n.hd=2,tc(n),n.H[1]=[.11,.3,-.02,.7,-.3,-.4],n.H[-1]=[-.11,.3,-.02,-.7,-.3,-.4]}),child:Ht(n=>{n.py=.2,n.hz=-.25,n.lean=104,n.hd=16,tc(n),n.H[1]=[.13,.045,.53,.6,.5,-.4],n.H[-1]=[-.13,.045,.53,-.6,.5,-.4]}),child2:Ht(n=>{n.py=.2,n.hz=-.25,n.lean=108,n.hd=16,tc(n),n.H[1]=[.17,.05,-.26,.6,.6,.2],n.H[-1]=[-.17,.05,-.26,-.6,.6,.2]}),sava:Ht(n=>{n.py=.1,n.pp=-90,n.lean=0,n.hd=0,n.F[1]=[.15,.06,.61,-24,0,1,0,0],n.F[-1]=[-.15,.06,.61,-24,0,1,0,0],n.H[1]=[.3,.05,-.06,.6,.3,0],n.H[-1]=[-.3,.05,-.06,-.6,.3,0]}),hugknees:Ht(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=12,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.11,.33,-.06,-.7,.2,-.3]}),squatDeep:Ht(n=>{n.py=.36,n.hz=-.1,n.lean=22,n.hd=-6,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.07,.42,.3,.2,-.3,-.3],n.H[-1]=[-.07,.42,.3,-.2,-.3,-.3],n.pp=8}),squatPray:Ht(n=>{n.py=.36,n.hz=-.1,n.lean=8,n.hd=-4,n.pp=8,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.05,.55,.3,.6,-.2,0],n.H[-1]=[-.05,.55,.3,-.6,-.2,0]}),fwdFold:Ht(n=>{n.py=.68,n.hz=-.18,n.pp=80,n.lean=8,n.hd=30,n.F[1][0]=.09,n.F[-1][0]=-.09,n.H[1]=[.12,.2,.18,.6,.4,-.2],n.H[-1]=[-.12,.2,.18,-.6,.4,-.2]}),hamL:Ht(n=>{n.py=.66,n.hz=-.16,n.pp=62,n.lean=8,n.hd=12,n.F[1]=[.09,.075,.38,-30,0,1,0,0],n.F[-1]=[-.09,.075,-.28,0,0,0,1,0],n.H[1]=[.1,.42,.34,.6,.2,-.2],n.H[-1]=[-.1,.42,.34,-.6,.2,-.2]}),lungeLow:Ht(n=>{n.py=.5,n.hz=.1,n.lean=-2,n.hd=-6,n.F[1]=[.11,.075,.5,0,0,0,1,0],n.F[-1]=[-.11,.075,-.42,0,0,0,1,0],n.H[1]=zn(1,.08,1.4,.04),n.H[-1]=zn(-1,.08,1.4,.04)}),figure4:Ht(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=10,n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.F[1]=[.02,.28,.2,0,1,1,0,0],n.H[1]=[.1,.3,-.04,.7,.2,-.3],n.H[-1]=[-.1,.32,.12,-.7,.2,-.3]}),kneetoChest:Ht(n=>{n.py=.1,n.pp=-90,n.lean=20,n.hd=10,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.075,.6,-24,0,1,0,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.15,.05,-.06,-.6,.3,0]})},Ig=new Set(["montana","montanaUp","tree1","tree2","tree3","tree4","w1","w1p","w2","w2b","w3","squatDeep","squatPray","fwdFold","hamL","lungeLow"]),vo=(n,t,e)=>{let i=Oi(n,t,e),s=Math.sin(Math.PI*pe(e,0,1));for(let r of[1,-1]){let a=Math.abs(t.H[r][1]-n.H[r][1]);a>.35&&(i.H[r][0]+=r*.2*s*Math.min(1,a/.7),i.H[r][3]+=r*.4*s)}return i},Lg=(n,t)=>{if(n.length===1)return dn[n[0]];let e=t*(n.length-1),i=Math.min(n.length-2,Math.floor(e));return vo(dn[n[i]],dn[n[i+1]],Gt(e-i))},Dg=n=>{let t=n-Math.floor(n);return t<.5?Gt(t*2):1-Gt((t-.5)*2)};Te("pose",(n,t,e)=>{let i=t.dur||20,s=Math.min(e.ramp||2.4,i/3.2),r=Gt(n/s)*(1-Gt((n-(i-s))/s))*(e.k||1),a=Array.isArray(e.v)?e.v:[e.v],l=Lg(a,a.length>1?Dg(n/(e.cyc||6)):0),c=e.base?dn[e.base]:Ht(()=>{});return!e.bi&&!(t.side>0)&&(l=dr(l),c=dr(c)),yi(vo(c,l,pe(r,0,1.2))),{ground:Ig.has(a[0])?"feet":"all"}});Object.assign(dn,{quadStand:Ht(n=>{n.py=fr,n.hx=.026,n.lean=2,n.hd=-2,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.03,.34,-.28,65,0,-.3,1,0],n.H[1]=[.1,.36,-.3,.6,.6,-1],n.H[-1]=[-.3,.95,.1,-.7,.2,.4]}),chestOpen:Ht(n=>{n.py=fr,n.lean=-6,n.hd=-12,n.F[1]=[.1,.075,0,0,.12,0,1,0],n.F[-1]=[-.1,.075,0,0,-.12,0,1,0],n.H[1]=[.12,.66,-.26,.8,-.3,-.7],n.H[-1]=[-.12,.66,-.26,-.8,-.3,-.7]}),wgs1:Ht(n=>{n.py=.46,n.hz=.1,n.lean=52,n.hd=-14,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.22,.045,.34,-.8,.3,-.5]}),wgs2:Ht(n=>{n.py=.46,n.hz=.1,n.lean=40,n.hd=-14,n.syw=28,n.hyw=20,n.sr=0,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.3,1.2,0,-.8,.2,.2]}),burpSquat:Ht(n=>{n.py=.38,n.hz=.02,n.lean=48,n.hd=-10,n.F[1]=[.12,.075,0,0,.3,0,1,0],n.F[-1]=[-.12,.075,0,0,-.3,0,1,0],n.H[1]=[.18,.045,.32,.6,.3,-.5],n.H[-1]=[-.18,.045,.32,-.6,.3,-.5]}),pikeLow:Ht(n=>{n.py=.5,n.hz=.14,n.lean=118,n.hd=-34,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]})});dn.quadStandR=dn.quadStand;var Zn=Math.PI*2,nc=()=>Ht(n=>{n.py=.695,n.F[1][0]=.1,n.F[-1][0]=-.1});Te("armCircles",(n,t,e)=>{let i=n/e.cyc*Zn*(e.dir||1),s=nc(),r=e.r||.42;for(let a of[1,-1]){let l=i+(e.alt&&a<0?Math.PI:0);s.H[a]=[a*.2,1.08+r*Math.cos(l),.02+r*Math.sin(l),a*.9,-.1,0]}return s.lean=2+2*Math.sin(i),s.hd=-2,yi(s),{ground:"feet"}});Te("hipCircles",(n,t,e)=>{let i=n/e.cyc*Zn*(e.dir||1),s=nc(),r=e.r||.05;s.F[1][0]=.15,s.F[-1][0]=-.15,s.py=.68,s.hx=r*Math.cos(i),s.hz=r*Math.sin(i),s.pp=7*Math.sin(i),s.pr=6*Math.cos(i),s.lean=3-5*Math.sin(i),s.sr=-5*Math.cos(i);for(let a of[1,-1])s.H[a]=[a*.2,.84,0,a*1,-.1,-.8];return yi(s),{ground:"feet"}});Te("torsoRot",(n,t,e)=>{let i=Math.sin(n/e.cyc*Zn),s=nc();s.F[1][0]=.14,s.F[-1][0]=-.14,s.syw=(e.amp||55)*i,s.hyw=.6*(e.amp||55)*i,s.pyw=8*i,s.lean=3,yi(s),Q.root.updateMatrixWorld(!0);for(let r of[1,-1])Cn(r,bs(r*.52,.27,.05),le(r*.5,-.5,-.4));return{ground:"feet"}});Te("legSwing",(n,t,e)=>{let i=t.side>0?1:-1,s=Math.sin(n/e.cyc*Zn),r=e.v==="lateral";return Ae(-i,3,0),Ie(-i,4),r?(Ae(i,2,32*(s*.5+.3)*1.1),Ie(i,6)):(Ae(i,8+48*s+6,0),Ie(i,s<0?10+14*-s:6)),un(i,s*12),un(-i,0),Q.root.position.x+=-i*.015,Q.spine.rotation.x=pt(2-4*s*(r?0:1)),Be(1,0,52),Be(-1,0,52),Ve(1,8),Ve(-1,8),{ground:"feet"}});Te("wgs",(n,t,e)=>{let i=e.cyc||8,s=n%i/i,r=[[0,0,0],[.2,1,0],[.45,1,1],[.7,1,0],[.88,1,0],[1,0,0]],[a,l]=Zl(r,s),c=Oi(dn.lungeLow,dn.wgs1,pe(a,0,1)),o=Oi(c,dn.wgs2,pe(l,0,1));return t.side>0||(o=dr(o)),yi(o),{ground:"all"}});Te("jacks",(n,t,e)=>{let i=e.repT||.9,s=n%i/i,r=Jl(s),a=Math.abs(Math.sin(s*Zn))*(e.hop??.05);for(let l of[1,-1])Ae(l,4,3+24*r),Ie(l,6+8*(1-r)),un(l,0),Be(l,0,Ne(8,e.half?100:165,r)),Ve(l,6);return Q.spine.rotation.x=pt(3),Q.root.userData.air=a,{ground:"all"}});Te("highKnees",(n,t,e)=>{let i=e.repT||.5,s=n/i*Zn;for(let r of[1,-1]){let a=Math.max(0,Math.sin(s+(r>0?0:Math.PI))),l=Math.sin(s+(r>0?Math.PI:0));Ae(r,6+(e.h||92)*a,3),Ie(r,8+84*a),un(r,14*a),Be(r,38*l,8),Ve(r,95)}return Q.spine.rotation.x=pt(5),Q.head.rotation.x=pt(-4),Q.root.userData.air=.035*Math.abs(Math.sin(s)),{ground:"all"}});Te("kicks",(n,t,e)=>{let i=e.repT||.6,s=n/i*Zn;for(let r of[1,-1]){let a=Math.max(0,Math.sin(s+(r>0?0:Math.PI))),l=Math.sin(s+(r>0?Math.PI:0));Ae(r,-6*a+4,3),Ie(r,8+125*a),un(r,-20*a),Be(r,28*l,8),Ve(r,85)}return Q.spine.rotation.x=pt(8),Q.root.userData.air=.035*Math.abs(Math.sin(s)),{ground:"all"}});Te("skater",(n,t,e)=>{let i=e.repT||1.6,s=n/i*Zn,r=Math.sin(s),a=.34,l=a*r;Q.root.position.x+=l;let c=Math.cos(s)>0?1:-1,o=Math.abs(Math.cos(s));return Q.root.userData.air=.07*(1-Math.abs(r))*.9,Q.spine.rotation.x=pt(18),Q.spine.rotation.z=pt(-10*r),Q.head.rotation.x=pt(-8),Q.root.position.y=0,{ground:"none",post(){let h=.58+.04*(1-Math.abs(r))-.05*(1-o);Q.root.position.y=h+(Q.root.userData.air||0),Q.root.updateMatrixWorld(!0);for(let f of[1,-1]){let u=(f*r+1)/2,d=Gt(pe((u-.5)/.4,0,1)),g=[Q.base.x+f*a,.075,Q.base.z],M=[Q.base.x+l-f*.14,.17+.05*(1-d),Q.base.z-.3],m=le(Ne(M[0],g[0],d),Ne(M[1],g[1],d),Ne(M[2],g[2],d));Bi(f,m,le(0,.3,1)),un(f,0),Cn(f,bs(-f*r*.3+f*.05,.12,.26+.1*-f*r),le(f*.8,-.6,0))}}}});Te("mountain",(n,t,e)=>{let i=e.repT||.8,s=n/i*Zn;Q.root.rotation.x=pt(72),Q.root.position.z+=-.42,Q.root.position.y=.378,Q.head.rotation.x=-pt(46);for(let a of[1,-1]){let l=Math.max(0,Math.sin(s+(a>0?0:Math.PI)));Ae(a,4+(e.h||78)*l,3),Ie(a,6+88*l),Q.JT.foot[a].rotation.x=pt(2+10*l)}return{ground:"none",post:()=>{for(let a of[1,-1]){Q.JT.sh[a].updateWorldMatrix(!0,!1);let l=Q.JT.sh[a].getWorldPosition(le());Cn(a,le(a*.17,.04,l.z),le(a*.5,0,-1))}}}});var yu={times:[0,.12,.28,.4,.5,.64,.78,.92,1],poses:["montana","burpSquat","plank","plank","burpSquat","montanaUp","montana","montana","montana"]};Te("burpee",(n,t,e)=>{let i=e.repT||3.6,s=n%i/i,r=yu.times,a=0;for(;a<r.length-2&&s>r[a+1];)a++;let l=Gt(pe((s-r[a])/(r[a+1]-r[a]),0,1)),c=yu.poses;e.noPush&&(c=c),yi(vo(dn[c[a]],dn[c[a+1]],l));let o=pe((s-.58)/.2,0,1);return Q.root.userData.air=s>.58&&s<.78?.26*Math.sin(Math.PI*o):0,{ground:"all"}});var pr={az:-50,el:6,dist:3.9,ty:.85};var we=(n,t,e,i={})=>({n,rest:t,sets:e,unit:"s",...i}),Mu={id:"hiit",title:"HIIT sin material",tagline:"Cardio intenso \xB7 Intervalos",kind:"HIIT",summary:"Intervalos de alta intensidad: trabaja fuerte, descansa justo y repite. Quema mucho en poco tiempo.",icon:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',material:["Sin material","Calzado deportivo"],notice:"Entrenamiento de alta intensidad. Calienta antes, hidr\xE1tate y para si notas mareo, dolor en el pecho o dolor articular. Si tienes problemas cardiovasculares, lesiones o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional. Pautas generales.",setName:"Ronda",rest:30,theme:{acc:"#3b82ff",hi:"#8ab8ff",accText:"#ffffff",bgA:"#050a18",bgB:"#0f2a6b",rim:"#8ab8ff",floor:["#1a2133","#131a28"],musc:"#d6ff3d",look:{top:3900159,topStyle:"tank",bottom:1185052,shoes:15921906},lookF:{top:14090045,topStyle:"bra",bottom:1185052,shoes:15921906}},exercises:[{name:"Jumping jacks",coach:"jacks",area:"Cardio total",mus:["delt","calf","abd","quad"],mode:"jacks",cam:pr,key:["Abre brazos y piernas a la vez.","Aterriza suave sobre la punta de los pies.","Mant\xE9n el abdomen firme."],errors:["Aterrizar con los talones","Brazos flojos","Aguantar la respiraci\xF3n"],levels:[{t:"Ligeros",d:["Brazos hasta la altura de los hombros."],...we(20,40,2),repT:1,half:1},{t:"Completos",d:["Brazos por encima de la cabeza."],...we(30,30,3),repT:.8},{t:"R\xE1pidos",d:["Ritmo alto sin perder amplitud."],...we(40,20,3),repT:.65}]},{name:"Rodillas altas",area:"Cardio y core",mus:["quad","core","calf"],mode:"highKnees",cam:pr,key:["Sube las rodillas hasta la cadera.","Brazos activos a 90\xB0.","Tronco alto, cuello relajado."],errors:["Inclinarte hacia atr\xE1s","Pasos cortos","Talones pegados"],levels:[{t:"Marcha r\xE1pida",d:["Rodillas a media altura."],...we(20,40,2),repT:.7,h:60},{t:"Rodillas altas",d:["Rodillas a la altura de la cadera."],...we(30,30,3),repT:.55},{t:"Carrera en el sitio",d:["M\xE1xima velocidad con rodillas altas."],...we(40,20,3),repT:.42}]},{name:"Sentadilla con salto",area:"Piernas explosivas",mus:["quad","glute","calf"],mode:"squat",cam:{...pr,az:-75},key:["Baja con la espalda recta.","Salta explosivo y estira todo el cuerpo.","Aterriza suave con las rodillas flexionadas."],errors:["Rodillas hacia dentro","Aterrizaje r\xEDgido","Poca profundidad"],levels:[{t:"Sentadilla r\xE1pida",d:["Sentadilla sin salto a buen ritmo."],...we(20,40,2),repT:2,v:"arms",n:20,unit:"s"},{t:"Con salto",d:["Salta al subir y aterriza suave."],...we(30,30,3),repT:2.6,v:"jump"},{t:"Salto potente",d:["M\xE1xima altura, aterriza y repite."],...we(40,20,3),repT:2.2,v:"jump"}]},{name:"Mountain climbers",area:"Core y cardio",mus:["core","delt","quad"],mode:"mountain",cam:{az:-80,el:8,dist:4.2,ty:.4},key:["Manos bajo los hombros, cuerpo recto.","Lleva las rodillas al pecho alternando.","Cadera baja y estable."],errors:["Cadera alta","Manos adelantadas","Pasos descoordinados"],levels:[{t:"Lentos",d:["Alterna las rodillas con control."],...we(20,40,2),repT:1.1},{t:"A ritmo",d:["M\xE1s velocidad con cadera estable."],...we(30,30,3),repT:.8},{t:"R\xE1pidos",d:["Velocidad m\xE1xima sin perder la forma."],...we(40,20,3),repT:.55}]},{name:"Patinador",area:"Piernas laterales",mus:["glute","abd","quad","obl"],mode:"skater",cam:{az:10,el:6,dist:4.2,ty:.8},key:["Salta de lado a lado.","La pierna libre pasa por detr\xE1s.","Aterriza con la rodilla flexionada."],errors:["Saltos muy cortos","Rodilla hacia dentro","Tronco erguido"],levels:[{t:"Pasos laterales",d:["Desplazamientos laterales sin salto."],...we(20,40,2),repT:2.2},{t:"Patinador",d:["Saltos laterales amplios."],...we(30,30,3),repT:1.6},{t:"Patinador r\xE1pido",d:["Ritmo alto con aterrizajes estables."],...we(40,20,3),repT:1.2}]},{name:"Burpees",area:"Cuerpo completo",mus:["chest","quad","core","delt"],mode:"burpee",cam:{az:-80,el:8,dist:4.4,ty:.6},key:["Manos al suelo y salta atr\xE1s a la plancha.","Cuerpo recto en la plancha.","Vuelve y salta arriba."],errors:["Cadera ca\xEDda","Saltar sin control","Espalda redondeada"],levels:[{t:"Sin salto",d:["Ritmo lento y controlado."],...we(20,40,2),repT:4.2},{t:"Completos",d:["Con salto al final."],...we(30,30,3),repT:3.6},{t:"R\xE1pidos",d:["Mant\xE9n la t\xE9cnica al ritmo m\xE1ximo."],...we(40,20,3),repT:3}]},{name:"Talones al gl\xFAteo",area:"Isquios y cardio",mus:["ham","calf","glute"],mode:"kicks",cam:pr,key:["Lleva el tal\xF3n al gl\xFAteo.","Rodillas hacia abajo, tronco recto.","Brazos alternos."],errors:["Subir las rodillas","Inclinarte hacia delante","Pasos cortos"],levels:[{t:"Suaves",d:["Ritmo moderado."],...we(20,40,2),repT:.8},{t:"A ritmo",d:["Lleva el tal\xF3n al gl\xFAteo con velocidad."],...we(30,30,3),repT:.6},{t:"R\xE1pidos",d:["Velocidad m\xE1xima."],...we(40,20,3),repT:.45}]},{name:"Comba imaginaria",area:"Coordinaci\xF3n y gemelos",mus:["calf","delt","quad"],mode:"jump",cam:{...pr,az:-70},key:["Saltos peque\xF1os sobre la punta de los pies.","Mu\xF1ecas giran, codos pegados.","Mira al frente."],errors:["Saltar demasiado alto","Codos abiertos","Talones al suelo"],levels:[{t:"Suave",d:["Saltos peque\xF1os y regulares."],...we(20,40,2),v:"rope"},{t:"A ritmo",d:["M\xE1s velocidad y ligereza."],...we(30,30,3),v:"rope"},{t:"Intenso",d:["Velocidad m\xE1xima y saltos ligeros."],...we(40,20,3),v:"rope"}]}]};var ze=Math.PI,Su={m:{shoulder:.162,hip:.078,chest:[.152,.215,.108],waist:[.118,.12,.092],pelvis:[.13,.098,.1],limb:1.1,head:[.084,.099,.092],pony:!1},f:{shoulder:.146,hip:.082,chest:[.132,.205,.1],waist:[.1,.12,.086],pelvis:[.138,.1,.102],limb:.98,head:[.079,.095,.088],pony:!0}},bu={skin:13146748,hair:2826008,top:16742938,topStyle:"tank",bottom:1380622,bottomStyle:"shorts",socks:15987699,shoes:1841690,sole:15921129,barefoot:!1,gloves:0,band:0},ic=new Map;function Ng(n){return ic.has(n)||ic.set(n,new je({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{color:{value:new qt(16734768)},opacity:{value:0}},vertexShader:"attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }"})),ic.get(n)}function wu(n,t={x:0,z:0},e=0,i="m",s={}){let r=Su[i]||Su.m,a={...bu,...s},l=(F,k)=>new cn({color:F,roughness:k}),c={skin:l(a.skin,.7),top:l(a.top,.62),bottom:l(a.bottom,.65),socks:l(a.socks,.7),shoes:l(a.shoes,.5),sole:l(a.sole,.6),hair:l(a.hair,.85),glove:l(a.gloves||14100029,.42),band:l(a.band||15921906,.6)},o=(F,k,$,at=0)=>{let gt=new ae(new ci(F,Math.max(k,.001),8,18),$);return gt.position.y=at,gt.castShadow=!0,gt},h=(F,k,$,at,gt=0)=>{let Yt=new ae(new Pi(1,28,20),at);return Yt.scale.set(F,k,$),Yt.position.y=gt,Yt.castShadow=!0,Yt},f={},u=[],d={thigh:{},shin:{},foot:{},sh:{},el:{}},g=(F,k,$,at,gt,Yt,Jt,jt,Z,it)=>{let bt=new Pi(1,22,16,Z,it),Bt=bt.attributes.uv,St=new Float32Array(Bt.count);for(let H=0;H<Bt.count;H++)St[H]=Math.pow(Math.max(0,Math.sin(ze*Bt.getY(H))),.55)*(it<ze*1.5?Math.pow(Math.max(0,Math.sin(ze*Bt.getX(H))),.6):1);bt.setAttribute("aa",new nn(St,1));let zt=new ae(bt,Ng(F));return zt.scale.set($,at,gt),zt.position.set(Yt,Jt,jt),zt.renderOrder=6,zt.visible=!1,k.add(zt),(f[F]||(f[F]=[])).push(zt),zt},M=[0,ze],m=[ze,ze],p=F=>F>0?[ze/2,ze]:[-ze/2,ze],T=F=>F>0?[-ze/2,ze]:[ze/2,ze],C=[0,ze*2],y=(F,k,$,at,gt,Yt)=>{let Jt=new Oe;return Jt.position.set(k,$,at),F.add(Jt),u.push({o:Jt,r:gt,kind:Yt}),Jt},S=new Me,b=new Me;S.add(b),n.add(S),b.add(h(...r.pelvis,c.bottom,0));let P=new Me;P.position.y=.03,b.add(P);let x=a.topStyle==="bra"?c.skin:c.top;P.add(h(...r.chest,c.top,.2+.07)),P.add(h(r.waist[0],r.waist[1],r.waist[2],x,.08)),P.add(o(.1,.1,x,.07));let w=new Me;w.position.y=.43,P.add(w),w.add(o(.04,.07,c.skin,.045));let R=new Me;R.position.y=.07,w.add(R),R.add(h(...r.head,c.skin,.105));let L=new ae(new Pi(1,28,14,0,ze*2,0,ze*.45),c.hair);if(L.scale.set(r.head[0]*1.06,r.head[1]*1.08,r.head[2]*1.1),L.position.set(0,.112,-.006),L.rotation.x=-.2,L.castShadow=!0,R.add(L),r.pony){let F=o(.022,.1,c.hair,0);F.position.set(0,.095,-.112),F.rotation.x=.5,R.add(F);let k=h(.03,.03,.03,c.hair,0);k.position.set(0,.138,-.09),R.add(k)}let U=new cn({color:1380623,roughness:.35});for(let F of[-1,1]){let k=h(.0105,.0125,.008,U,.108);k.position.set(F*.032,.108,r.head[2]*.915),k.castShadow=!1,R.add(k);let $=h(.019,.0045,.007,c.hair,.13);$.position.set(F*.033,.13,r.head[2]*.9),$.rotation.z=F*-.12,$.castShadow=!1,R.add($);let at=h(.011,.02,.014,c.skin,.1);at.position.set(F*(r.head[0]-.002),.1,0),R.add(at)}let V=h(.014,.016,.018,c.skin,.098);if(V.position.z=r.head[2]+.006,R.add(V),a.band){let F=new ae(new ci(.014,r.head[0]*2.2,4,10),c.band);F.rotation.z=ze/2,F.position.set(0,.14,.012),F.scale.set(1,1,1.4),R.add(F)}let E=a.topStyle==="tee"?c.top:c.skin,B=F=>{let k=new Me;k.position.set(F*r.shoulder,.385,0),P.add(k),k.add(o(.037*r.limb,.15,c.skin,-.11)),k.add(o(.047*r.limb,.05,E,-.045));let $=new Me;$.position.y=-.22,k.add($),$.add(o(.031*r.limb,.14,c.skin,-.1));let at=new Me;at.position.y=-.2,$.add(at),a.gloves?(at.add(h(.066,.075,.06,c.glove,-.06)),at.add(o(.039,.035,c.band,-.005))):(at.add(h(.032,.05,.03,c.skin,-.04)),a.band&&at.add(o(.034,.02,c.band,-.008))),y(at,0,-.03,0,.04,"hand"),y(k,0,0,0,.05,"body"),d.sh[F]=k,d.el[F]=$,g("delt",k,.066,.074,.066,0,-.03,0,...C),g("bic",k,.05,.1,.05,0,-.12,0,...M),g("tri",k,.05,.1,.05,0,-.12,0,...m)},Y=a.bottomStyle==="tights",J=F=>{let k=new Me;k.position.set(F*r.hip,-.01,0),b.add(k),k.add(o(.066*r.limb,.186,Y?c.bottom:c.skin,-.155)),k.add(o(.08*r.limb,Y?.18:.08,c.bottom,Y?-.12:-.075));let $=new Me;$.position.y=-.31,k.add($),$.add(o(.05*r.limb,.214,Y?c.bottom:c.skin,-.155)),!Y&&!a.barefoot&&$.add(o(.054,.1,c.socks,-.215));let at=new Me;if(at.position.y=-.31,$.add(at),a.barefoot){let gt=new ae(new Ke(.082,.05,.2),Y?c.bottom:c.skin);gt.position.set(0,-.045,.05),gt.castShadow=!0,at.add(gt);let Yt=h(.044,.026,.03,Y?c.bottom:c.skin,-.05);Yt.position.z=.15,at.add(Yt)}else{let gt=new ae(new Ke(.088,.052,.225),c.shoes);gt.position.set(0,-.03,.055),gt.castShadow=!0,at.add(gt);let Yt=new ae(new Ke(.092,.02,.232),c.sole);Yt.position.set(0,-.064,.056),at.add(Yt)}y(at,0,-.073,.16,0,"foot"),y(at,0,-.073,-.05,0,"foot"),y(k,0,-.31,.03,.062,"body"),y($,0,0,.03,.055,"knee"),d.thigh[F]=k,d.shin[F]=$,d.foot[F]=at,g("quad",k,.09,.15,.09,0,-.13,0,...M),g("ham",k,.09,.15,.09,0,-.13,0,...m),g("abd",k,.094,.1,.088,0,-.08,0,...p(F)),g("add",k,.084,.13,.078,0,-.14,0,...T(F)),g("calf",$,.062,.12,.064,0,-.12,-.004,...m),g("ankle",at,.066,.06,.066,0,-.03,.02,...C)};B(1),B(-1),J(1),J(-1),y(R,0,.1,0,.11,"body"),y(b,0,0,0,.1,"body"),y(P,0,.2,0,.1,"body"),g("glute",b,r.pelvis[0]*1.07,.108,r.pelvis[2]*1.08,0,-.01,0,...m),g("core",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...M),g("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...p(1)),g("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...T(1)),g("lumbar",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.1,0,...m),g("back",P,r.chest[0]*1,.13,r.chest[2]*.98,0,.32,0,...m),g("chest",P,r.chest[0]*1,.11,r.chest[2]*1,0,.33,0,...M);let st=[b,P,w,R,...[1,-1].flatMap(F=>[d.thigh[F],d.shin[F],d.foot[F],d.sh[F],d.el[F]])];return{root:S,pelvis:b,spine:P,neck:w,head:R,JT:d,marks:u,ALL:st,muscles:f,mats:c,base:t,yaw:e,variant:i,mode:null,blend:null,last:null}}function Tu(n,t){t.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose()}),Object.values(n.mats).forEach(e=>e.dispose())}function Au(n,t){let e={...bu,...t},i=n.mats;i.skin.color.set(e.skin),i.hair.color.set(e.hair),i.top.color.set(e.top),i.bottom.color.set(e.bottom),i.socks.color.set(e.socks),i.shoes.color.set(e.shoes),i.sole.color.set(e.sole),e.gloves&&i.glove.color.set(e.gloves),e.band&&i.band.color.set(e.band)}var Eu={quad:"Cu\xE1driceps",ham:"Isquiotibiales",glute:"Gl\xFAteos",calf:"Gemelos",add:"Aductores",abd:"Gl\xFAteo medio",core:"Abdomen",obl:"Oblicuos",lumbar:"Lumbares",back:"Espalda",chest:"Pecho",delt:"Hombros",tri:"Tr\xEDceps",bic:"B\xEDceps",ankle:"Tobillos"};function Cu(n,t,e,i){for(let s in n.muscles){let r=n.muscles[s],a=r[0].material.uniforms,l=t&&t.includes(s)?e:0;a.opacity.value+=(l-a.opacity.value)*.16,i&&a.color.value.set(i);let c=a.opacity.value>.012;r.forEach(o=>o.visible=c)}}function Ru(n,t){let e=new qt(t.acc),i=e.clone().multiplyScalar(.35),s=new cn({color:9071178,roughness:.7}),r=new cn({color:2830136,roughness:.45,metalness:.5}),a=new cn({color:i,roughness:.85}),l=new cn({color:e,roughness:.8}),c=d=>(d.castShadow=!0,d.receiveShadow=!0,d),o=new Me;{let d=c(new ae(new Ke(.72,.016,1.9),a));d.position.y=.008;let g=c(new ae(new Ke(.74,.012,1.92),l));g.position.y=.006,o.add(g,d)}let h=new Me;{let d=c(new ae(new Ke(.44,.04,.42),s));d.position.y=.44,h.add(d);for(let[M,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let p=c(new ae(new us(.018,.018,.44,10),r));p.position.set(M*.19,.22,m*.18),h.add(p)}let g=c(new ae(new Ke(.44,.34,.03),s));g.position.set(0,.68,-.2),h.add(g)}let f=new Me;{let d=c(new ae(new ci(.018,1,4,12),r));d.rotation.z=Math.PI/2,d.position.set(0,2.05,0),f.add(d);for(let g of[-1,1]){let M=c(new ae(new us(.03,.03,2.05,12),r));M.position.set(g*.5,1.025,0),f.add(M)}}let u={mat:o,chair:h,bar:f};return Object.values(u).forEach(d=>{d.visible=!1,n.add(d)}),{update(d,g,M){for(let[m,p]of Object.entries(u))p.visible=m===d;if(d&&u[d]){let m=M&&M.propAt||[0,0];u[d].position.set(g.base.x+m[0],0,g.base.z+m[1]),u[d].rotation.y=M&&M.propYaw||0}}}}function sc(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new Ws(i);return s.colorSpace=Ze,s}var yo=class{constructor(t,e){this.canvas=t,this.theme=e;try{this.renderer=new ho({canvas:t,antialias:!0,alpha:!0})}catch(s){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la p\xE1gina en un navegador actualizado.</div>'),s}let i=this.renderer;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Ii,i.toneMapping=js,i.toneMappingExposure=1.12,i.setClearColor(0,0),this.scene=new ks,this.camera=new Xe(32,1,.1,80),this.scene.add(new Zs(12571391,1780258,.85)),this.key=new fs(16777215,2.6),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:18}),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,this.scene.add(this.key,this.key.target),this.rim=new fs(new qt(e.rim),1.3),this.scene.add(this.rim,this.rim.target),this.buildFloor(),this.props=Ru(this.scene,e),this.cam={az:-40,el:8,dist:3.5,ty:.8,tz:0},this.focus={x:0,z:0},this.scrollZ=0,this.avatar=null,this.look={},this.setAvatar("m",{})}buildFloor(){let t=this.theme,e=sc((r,a,l)=>{for(let o=0;o<8;o++)r.fillStyle=o%2?t.floor[0]:t.floor[1],r.fillRect(0,o*l/8,a,l/8+1);let c=r.getImageData(0,0,a,l);for(let o=0;o<c.data.length;o+=4){let h=(Math.random()-.5)*14;c.data[o]+=h,c.data[o+1]+=h,c.data[o+2]+=h}r.putImageData(c,0,0),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(0,l/2-3,a,6)},512,512);e.wrapS=e.wrapT=ss,e.repeat.set(1,2),e.anisotropy=8,this.floorTex=e;let i=sc((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,"#fff"),c.addColorStop(.45,"#fff"),c.addColorStop(1,"#000"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);i.colorSpace="",this.floor=new ae(new hi(16,16),new cn({map:e,alphaMap:i,transparent:!0,roughness:.95,metalness:0})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);let s=sc((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,t.acc+"cc"),c.addColorStop(.5,t.acc+"48"),c.addColorStop(1,t.acc+"00"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);this.glow=new ae(new hi(3.6,3.6),new oi({map:s,transparent:!0,depthWrite:!1,blending:Ks,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.004,this.scene.add(this.glow),this.ring=new ae(new qs(.8,.84,72),new oi({color:new qt(t.hi),transparent:!0,opacity:.5,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.006,this.scene.add(this.ring)}setTheme(t){for(let e of[this.floor,this.glow,this.ring])this.scene.remove(e),e.geometry.dispose(),e.material.map&&e.material.map.dispose(),e.material.dispose();this.theme=t,this.rim.color.set(t.rim),this.buildFloor()}setAvatar(t,e){this.look=e,this.avatar&&Tu(this.avatar,this.scene),this.avatar=wu(this.scene,{x:0,z:0},0,t,e),this.avatar.root.traverse(i=>{i.isMesh&&!i.material.isShaderMaterial&&(i.castShadow=!0)})}recolor(t){this.look=t,Au(this.avatar,t)}resize(){let t=this.canvas.parentElement,e=t.clientWidth,i=t.clientHeight;!e||!i||(this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}frame(t){let{dt:e}=t,i=this.avatar;i.base.x=0,i.base.z=0;let s=ws(i,t.mode,t.t,t.ctx,t.level,Math.min(e,.05),!!t.snap);Cu(i,t.musclesOn?t.muscles:null,.82+.18*Math.sin(t.time/240),this.theme.musc),this.props.update(t.ex&&t.active?t.ex.prop:null,i,s);let r=0,a=0;s.track&&(r=i.root.position.x,a=i.root.position.z),t.snap&&(this.focus.x=r,this.focus.z=a);let l=Math.min(1,Math.min(e,.05)*3.2);this.focus.x+=(r-this.focus.x)*l,this.focus.z+=(a-this.focus.z)*l;let{x:c,z:o}=this.focus;this.floor.position.set(c,0,o),this.glow.position.set(c,.004,o),this.ring.position.set(c,.006,o),this.floorTex.offset.x=c*this.floorTex.repeat.x/16,this.floorTex.offset.y=-this.floorTex.repeat.y*o/16,this.key.position.set(c-3.2,5.2,o+3.6),this.key.target.position.set(c,0,o),this.rim.position.set(c+3.5,2.8,o-3.5),this.rim.target.position.set(c,0,o);let h=t.cam||{az:-38,el:7,dist:3.5,ty:.8},f=t.view&&t.view.az!==null?t.view.az:null,u=Math.sin(t.time/4200)*6,d=(f!==null&&t.active?f:h.az)+t.drag.az+u,g=this.camera.aspect,M=h.dist*(g<1.1?Math.pow(1.1/g,.62):1),m=this.cam,p=Math.min(1,Math.min(e,.05)*3.2);m.az+=(d-m.az)*p,m.el+=(h.el+t.drag.el-m.el)*p,m.dist+=(M-m.dist)*p,m.ty+=(h.ty-m.ty)*p,m.tz+=((h.tz||0)-m.tz)*p;let T=pt(m.az),C=pt(m.el);return this.camera.position.set(c+Math.sin(T)*Math.cos(C)*m.dist,m.ty+Math.sin(C)*m.dist,o+m.tz+Math.cos(T)*Math.cos(C)*m.dist),this.camera.lookAt(c,m.ty,o+m.tz),this.renderer.render(this.scene,this.camera),s}};var Rt={nose:0,shL:11,shR:12,elL:13,elR:14,wrL:15,wrR:16,hipL:23,hipR:24,knL:25,knR:26,anL:27,anR:28,heL:29,heR:30,ftL:31,ftR:32},Nu=n=>n*180/Math.PI,rc=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y);function As(n,t,e){let i={x:n.x-t.x,y:n.y-t.y},s={x:e.x-t.x,y:e.y-t.y},r=Math.hypot(i.x,i.y)*Math.hypot(s.x,s.y);return r<1e-6?180:Nu(Math.acos(Math.max(-1,Math.min(1,(i.x*s.x+i.y*s.y)/r))))}function Pu(n,t){return Math.abs(Nu(Math.atan2(Math.abs(t.x-n.x),Math.abs(t.y-n.y))))}var oc=class{constructor(t=.55){this.a=t,this.p=null}push(t){if(!this.p)this.p=t.map(e=>({...e}));else for(let e=0;e<t.length;e++){let i=this.p[e],s=t[e];i.x+=(s.x-i.x)*this.a,i.y+=(s.y-i.y)*this.a,i.visibility=s.visibility}return this.p}reset(){this.p=null}};function Ug(n,t,e){let i=a=>a.reduce((l,c)=>l+(n[c].visibility??1),0)/a.length,s=i(t),r=i(e);return s>=r?{s:"L",vis:s}:{s:"R",vis:r}}var Mo=class{constructor(t,e,i=500){this.lo=t,this.hi=e,this.minMs=i,this.reset()}reset(){this.phase="rest",this.min=1/0,this.t0=0,this.flags=new Set,this.reached=!1,this.count=0,this.good=0}flag(t){this.phase==="down"&&this.flags.add(t)}push(t,e){if(this.phase==="rest")return t<this.lo&&(this.phase="down",this.min=t,this.t0=e,this.flags=new Set),null;if(t<this.min&&(this.min=t),t>this.hi){this.phase="rest";let i=e-this.t0>=this.minMs,s=i?{min:this.min,flags:this.flags}:null;return i&&this.count++,s}return null}};function Uu(n){let{s:t,vis:e}=Ug(n,[Rt.shL,Rt.hipL,Rt.knL,Rt.anL],[Rt.shR,Rt.hipR,Rt.knR,Rt.anR]),i=t==="L"?Rt:{shL:Rt.shR,elL:Rt.elR,wrL:Rt.wrR,hipL:Rt.hipR,knL:Rt.knR,anL:Rt.anR,heL:Rt.heR,ftL:Rt.ftR};return{vis:e,sh:n[i.shL],el:n[i.elL],wr:n[i.wrL],hip:n[i.hipL],kn:n[i.knL],an:n[i.anL],he:n[i.heL],ft:n[i.ftL]}}var Iu="Col\xF3cate de lado, a 2-3 m, con el cuerpo entero a la vista.";function ac(n){return()=>{let t=new Mo(n.lo,n.hi,n.minMs||600);return{reps:t,push(e,i){let s=Uu(e),r={ev:[],ok:s.vis>=.5};if(!r.ok)return r;let a=n.measure(s,e);r.metric=Math.round(a.signal);let l=n.flags(s,a,e);for(let o of l)t.flag(o);let c=t.push(a.signal,i);t.phase==="down"&&(r.phase="down");for(let o of l)r.ev.push({type:"tip",key:o});if(c){let o=[...c.flags];c.min>n.good&&o.push("shallow");let h=o.length===0;h&&t.good++,r.ev.push({type:"rep",good:h,issues:o,n:t.count})}return r}}}}var Mi={squat:{name:"Sentadilla",view:"de lado",hint:Iu,create:ac({lo:125,hi:160,good:105,measure:n=>({signal:As(n.hip,n.kn,n.an),lean:Pu(n.hip,n.sh)}),flags:(n,t)=>{let e=[];return t.signal<125&&t.lean>58&&e.push("chest"),n.he&&n.ft&&n.ft.y-n.he.y>.07*rc(n.hip,n.an)&&t.signal<140&&e.push("heels"),e}})},lunge:{name:"Zancada",view:"de lado",hint:Iu,create:()=>{let n=new Mo(125,158,700);return{reps:n,push(t,e){let i=Math.min((t[Rt.hipL].visibility+t[Rt.knL].visibility+t[Rt.anL].visibility)/3,(t[Rt.hipR].visibility+t[Rt.knR].visibility+t[Rt.anR].visibility)/3),s={ev:[],ok:i>=.4};if(!s.ok)return s;let r=As(t[Rt.hipL],t[Rt.knL],t[Rt.anL]),a=As(t[Rt.hipR],t[Rt.knR],t[Rt.anR]),l=Math.min(r,a);s.metric=Math.round(l);let c={x:(t[Rt.shL].x+t[Rt.shR].x)/2,y:(t[Rt.shL].y+t[Rt.shR].y)/2},o={x:(t[Rt.hipL].x+t[Rt.hipR].x)/2,y:(t[Rt.hipL].y+t[Rt.hipR].y)/2},h=Pu(o,c),f=[];l<140&&h>35&&f.push("upright");for(let d of f)n.flag(d);let u=n.push(l,e);for(let d of f)s.ev.push({type:"tip",key:d});if(u){let d=[...u.flags];u.min>108&&d.push("shallow");let g=d.length===0;g&&n.good++,s.ev.push({type:"rep",good:g,issues:d,n:n.count})}return s}}}},pushup:{name:"Flexi\xF3n",view:"de lado",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista y el m\xF3vil a la altura del suelo.",create:ac({lo:110,hi:155,good:95,minMs:600,measure:n=>({signal:As(n.sh,n.el,n.wr)}),flags:n=>{let t=[],e=Lu(n);return e>.09?t.push("sag"):e<-.09&&t.push("pike"),t}})},bridge:{name:"Puente de gl\xFAteos",view:"de lado",hint:"T\xFAmbate de lado respecto a la c\xE1mara, con hombros, cadera y rodillas a la vista.",create:ac({lo:22,hi:45,good:15,minMs:700,measure:n=>({signal:180-As(n.sh,n.hip,n.kn)}),flags:()=>[]})},plank:{name:"Plancha",view:"de lado",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista.",isometric:!0,create:()=>{let n=0,t=null,e=0;return{reps:{count:0,good:0},get seconds(){return Math.floor(n/1e3)},push(i,s){let r=Uu(i),a={ev:[],ok:r.vis>=.5};if(!a.ok)return t=null,a;let l=t===null?0:Math.min(s-t,200);t=s;let c=As(r.sh,r.hip,r.an),o=Lu(r);a.metric=Math.round(c);let h=c>=163&&Math.abs(o)<.09;return h?(n+=l,e=0):(e+=l,e>1200&&a.ev.push({type:"tip",key:o>0?"sag":"pike"})),a.holding=h,a}}}},jacks:{name:"Jumping jacks",view:"de frente",hint:"Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista y espacio para abrir brazos y piernas.",create:()=>{let n="closed",t=0,e=!1,i=!1,s=!1,r=!1,a={count:0,good:0};return{reps:a,push(l,c){let o=(l[Rt.shL].visibility+l[Rt.shR].visibility+l[Rt.anL].visibility+l[Rt.anR].visibility)/4,h={ev:[],ok:o>=.5};if(!h.ok)return h;let f=Math.max(rc(l[Rt.shL],l[Rt.shR]),.001),u=rc(l[Rt.anL],l[Rt.anR]),d=(l[Rt.wrL].y+l[Rt.wrR].y)/2<l[Rt.nose].y,g=(l[Rt.wrL].y+l[Rt.wrR].y)/2>(l[Rt.shL].y+l[Rt.shR].y)/2;i=u>f*1.7;let M=u<f*1.15;if(e=d,h.metric=Math.round(u/f*10)/10,n==="closed"&&(e||i)&&(n="open",t=c,s=!1,r=!1),n==="open"&&(e&&(s=!0),i&&(r=!0),g&&M&&(n="closed",c-t>250))){a.count++;let m=s&&r,p=[];r?s||p.push("arms"):p.push("legs"),m&&a.good++,h.ev.push({type:"rep",good:m,issues:p,n:a.count})}return h}}}}};function Lu(n){let t=n.an.x-n.sh.x,e=n.an.y-n.sh.y,i=Math.hypot(t,e);if(i<1e-6)return 0;let s=n.sh.y+(n.hip.x-n.sh.x)/(t||1e-6)*e;return(n.hip.y-s)/i}var Du={chest:"Pecho arriba, no te inclines tanto",heels:"Mant\xE9n los talones en el suelo",upright:"Tronco recto en la zancada",sag:"Cadera demasiado baja, aprieta el abdomen",pike:"Baja la cadera, cuerpo en l\xEDnea recta",shallow:"Baja un poco m\xE1s",legs:"Abre m\xE1s las piernas",arms:"Sube m\xE1s los brazos"},Fu=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32]],mr=class{constructor(t){this.kind=t,this.def=Mi[t],this.sm=new oc,this.an=this.def.create(),this.lastTip={},this.log=[]}get reps(){return this.an.reps}push(t,e){let i=this.sm.push(t),s=this.an.push(i,e);return s.ev=s.ev.filter(r=>{if(r.type==="tip"){if(e-(this.lastTip[r.key]||-1e9)<6e3)return!1;this.lastTip[r.key]=e,r.msg=Du[r.key]}else r.type==="rep"&&(r.msg=r.issues.length?Du[r.issues[0]]:"\xA1Buena t\xE9cnica!");return!0}),s}};var Ou="mp/",So=null;function Fg(){return window.Pose?Promise.resolve():(So||(So=new Promise((n,t)=>{let e=document.createElement("script");e.src=Ou+"pose.js",e.onload=n,e.onerror=()=>{So=null,t(new Error("lib"))},document.head.appendChild(e)})),So)}function Bu({stageEl:n,say:t,getExercise:e}){let i=document.createElement("div");i.id="cam",i.hidden=!0,i.innerHTML=`
    <div class="cam-h"><b>Coach de c\xE1mara</b><button class="cam-x" aria-label="Cerrar c\xE1mara">\xD7</button></div>
    <div class="cam-ask">
      <p>Usa la c\xE1mara para contar tus repeticiones y avisarte de la t\xE9cnica.</p>
      <p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p>
      <button class="cam-go">Activar c\xE1mara</button>
    </div>
    <div class="cam-v"><video playsinline muted></video><canvas></canvas></div>
    <div class="cam-s"></div>
    <div class="cam-stats"><div><b class="cr">0</b><small class="cl">reps</small></div><div><b class="cs">\u2013</b><small>t\xE9cnica</small></div></div>`,n.appendChild(i);let s=E=>i.querySelector(E),r=s("video"),a=s("canvas"),l=a.getContext("2d"),c=s(".cam-s"),o=null,h=null,f=null,u=null,d=!1,g=!1,M=0,m=0,p=0,T=0,C="closed",y=E=>{C=E,i.dataset.mode=E,i.hidden=E==="closed"},S=(E,B="")=>{c.textContent=E,c.className="cam-s "+B},b=()=>{if(!h)return;let E=Mi[h.kind].isometric;s(".cr").textContent=E?h.an.seconds:h.reps.count,s(".cl").textContent=E?"seg. bien":"reps",s(".cs").textContent=!E&&h.reps.count?Math.round(h.reps.good/h.reps.count*100)+"%":"\u2013"};function P(E){o=E,h=E&&E.coach&&Mi[E.coach]?new mr(E.coach):null,T=0,b(),C==="run"&&(h?S(Mi[h.kind].hint):S("Este ejercicio a\xFAn no tiene an\xE1lisis por c\xE1mara. Prueba con sentadilla, zancadas, flexiones, plancha, puente o jumping jacks.","warn"))}function x(E){let B=r.videoWidth||640,Y=r.videoHeight||480;if(a.width!==B&&(a.width=B,a.height=Y),l.clearRect(0,0,B,Y),!!E){l.lineWidth=Math.max(3,B/140),l.lineCap="round",l.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#fff";for(let[J,st]of Fu)E[J].visibility<.4||E[st].visibility<.4||(l.beginPath(),l.moveTo(E[J].x,E[J].y),l.lineTo(E[st].x,E[st].y),l.stroke());l.fillStyle="#fff";for(let J of[Rt.shL,Rt.shR,Rt.hipL,Rt.hipR,Rt.knL,Rt.knR,Rt.anL,Rt.anR,Rt.elL,Rt.elR,Rt.wrL,Rt.wrR])E[J].visibility<.4||(l.beginPath(),l.arc(E[J].x,E[J].y,Math.max(3,B/120),0,7),l.fill())}}function w(E){if(g=!1,!d)return;let B=r.videoWidth,Y=r.videoHeight,J=E.poseLandmarks;if(!J||!h){x(null),h&&++T>25&&S("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista.","warn");return}T=0;let st=J.map(k=>({x:k.x*B,y:k.y*Y,visibility:k.visibility??1})),F=h.push(st,performance.now());if(x(st),!F.ok){S(Mi[h.kind].hint,"warn");return}for(let k of F.ev)k.type==="rep"?(S(k.good?`${k.n} \xB7 \xA1Buena t\xE9cnica!`:`${k.n} \xB7 ${k.msg}`,k.good?"ok":"warn"),!k.good&&performance.now()-p>5e3&&(p=performance.now(),t(k.msg))):k.type==="tip"&&(S(k.msg,"warn"),performance.now()-p>5e3&&(p=performance.now(),t(k.msg)));F.holding===!0&&S("Muy bien, mant\xE9n la posici\xF3n","ok"),b()}function R(){if(!d)return;let E=()=>{if(!d)return;let B=performance.now();!g&&r.readyState>=2&&B-m>55&&(g=!0,m=B,f.send({image:r}).catch(()=>{g=!1})),r.requestVideoFrameCallback?r.requestVideoFrameCallback(E):M=requestAnimationFrame(E)};E()}async function L(){y("loading"),S("Cargando el modelo de detecci\xF3n (unos 12 MB, solo la primera vez)\u2026");try{await Fg(),f||(f=new window.Pose({locateFile:E=>Ou+E}),f.setOptions({modelComplexity:0,smoothLandmarks:!0,minDetectionConfidence:.5,minTrackingConfidence:.5}),f.onResults(w)),u=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),r.srcObject=u,await r.play();try{localStorage.setItem("forja:cam","1")}catch{}d=!0,y("run"),P(o),h&&S(Mi[h.kind].hint),R()}catch(E){U(!0),y("error");let B=E&&E.name;B==="NotAllowedError"||B==="SecurityError"?S("No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.","warn"):B==="NotFoundError"||B==="OverconstrainedError"?S("No se ha encontrado ninguna c\xE1mara en este dispositivo.","warn"):E&&E.message==="lib"?S("El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.","warn"):S("No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo.","warn")}}function U(E){d=!1,g=!1,cancelAnimationFrame(M),u&&u.getTracks().forEach(B=>B.stop()),u=null,r.srcObject=null,x(null),E||y("closed")}function V(){if(C!=="closed")return;let E=!1;try{E=localStorage.getItem("forja:cam")==="1"}catch{}o=e(),h=o&&o.coach&&Mi[o.coach]?new mr(o.coach):null,b(),E?L():y("ask")}return s(".cam-go").onclick=L,s(".cam-x").onclick=()=>U(),window.addEventListener("pagehide",()=>U()),{toggle(){C==="closed"?V():U()},setExercise:P,isOpen:()=>C!=="closed"}}var ki;function Cs(n,t=660,e=.12,i="sine",s=.16){if(n.sound)try{ki=ki||new(window.AudioContext||window.webkitAudioContext);let r=ki.createOscillator(),a=ki.createGain();r.type=i,r.frequency.value=t,a.gain.value=s,r.connect(a),a.connect(ki.destination),r.start(),a.gain.exponentialRampToValueAtTime(8e-4,ki.currentTime+e),r.stop(ki.currentTime+e)}catch{}}function lc(n,t){t.forEach(([e,i,s])=>setTimeout(()=>Cs(n,e,s||.22,"triangle",.2),i))}var Es;function Og(){if(Es!==void 0)return Es;try{let n=speechSynthesis.getVoices();if(!n.length)return null;Es=n.find(t=>t.lang==="es-ES"&&/natural|google|premium|enhanced/i.test(t.name))||n.find(t=>t.lang==="es-ES")||n.find(t=>t.lang.startsWith("es"))||null}catch{Es=null}return Es}function Si(n,t){if(!(!n.voice||!window.speechSynthesis))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.lang="es-ES",e.rate=1;let i=Og();i&&(e.voice=i),speechSynthesis.speak(e)}catch{}}function cc(){try{speechSynthesis.cancel()}catch{}}function bo(){let n=document.documentElement;try{!document.fullscreenElement&&n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}catch{}}function hc(){document.fullscreenElement?document.exitFullscreen():bo()}async function zu(){try{navigator.wakeLock&&await navigator.wakeLock.request("screen")}catch{}}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{Es=void 0})}catch{}var bi=["Principiante","Intermedio","Avanzado"],Ct=n=>document.querySelector(n),tn=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Bg={rep:"repeticiones",s:"s"};function ku(n){let t=n.exercises,e=bi.length,i="forja:"+n.id,s={get(){try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},set(H){try{localStorage.setItem(i,JSON.stringify(H))}catch{}}},r={get(){try{return JSON.parse(localStorage.getItem("forja:prefs")||"{}")}catch{return{}}},set(H){try{localStorage.setItem("forja:prefs",JSON.stringify(H))}catch{}}},a=Object.assign({lv:[],voice:!0,sound:!0,level:1},s.get()),l=Object.assign({variant:"m"},r.get());(!Array.isArray(a.lv)||a.lv.length!==t.length)&&(a.lv=t.map(()=>a.level||1)),document.documentElement.style.setProperty("--acc",n.theme.acc),document.documentElement.style.setProperty("--hi",n.theme.hi),document.documentElement.style.setProperty("--acc-t",n.theme.accText||"#fff"),document.documentElement.style.setProperty("--bgA",n.theme.bgA),document.documentElement.style.setProperty("--bgB",n.theme.bgB),document.documentElement.style.setProperty("--musc",n.theme.musc);let c=document.querySelector("meta[name=theme-color]");c&&(c.content=n.theme.bgA),document.body.innerHTML=`
<header id="top">
  <a class="back" href="index.html" aria-label="Volver al inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
  <div id="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n.icon}</svg></div>
  <div class="ttl"><b id="club">${tn(n.title)}</b><small>${tn(n.tagline)}</small></div>
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
      <h1>${tn(n.title)}</h1>
      <div class="sub">${tn(n.tagline)}</div>
      <div class="fld"><label>Nivel de toda la sesi\xF3n</label><div class="seg" id="allLv"></div></div>
      <div class="fld"><label>Avatar</label><div class="seg" id="avSeg"><button data-v="m">\xC9l</button><button data-v="f">Ella</button></div></div>
      <button class="btn" id="go">Comenzar sesi\xF3n</button>
      <div class="mats">${n.material.map(H=>`<span>${tn(H)}</span>`).join("")}</div>
      <div class="note">${tn(n.notice)}</div>
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
      <div class="sub">${tn(n.title)} \xB7 bien hecho</div>
      <ul id="endList"></ul>
      <div id="endTime"></div>
      <div class="ctrls" style="margin-top:16px"><button class="btn" id="again" style="flex:1">Repetir sesi\xF3n</button><button class="btn ghost" id="backSetup" style="flex:1">Ajustes</button></div>
      <a class="btn ghost home" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>
<canvas id="conf"></canvas>`;let o={screen:"setup",ex:0,phase:"ready",set:0,el:0,dur:20,paused:!1,animT:0,sessionTime:0,view:0,dragAz:0,dragEl:0,done:[],cdn:4,side:-1,lastRep:-1,wrapN:0,snap:1,setIdx:0},h=[{n:"Auto",az:null},{n:"Lateral",az:-90},{n:"3/4",az:-40},{n:"Frontal",az:0}],f=!0,u=()=>({...n.theme.look,...l.variant==="f"&&n.theme.lookF?n.theme.lookF:{}}),d=new yo(Ct("#cv"),n.theme);d.setAvatar(l.variant,u());let g=H=>pe(a.lv[H],1,e),M=H=>t[H].levels[g(H)-1],m=H=>H.repT||3,p=(H,et)=>et.sides||H.sides,T=H=>H.unit==="rep"?H.n*m(H):H.n,C=H=>H.rest!==void 0?H.rest:n.rest,y=H=>`${H.sets} ${H.sets===1?n.setName.toLowerCase():n.setName.toLowerCase()+"s"} \xB7 ${H.n} ${H.unit==="s"?"s":Bg[H.unit]}`,S=H=>H.sets*T(H)+(H.sets-1)*C(H)+C(H),b=()=>t.reduce((H,et,_t)=>H+S(M(_t)),0),P=H=>Math.round(H/60)+" min",x=(H,et)=>p(H,et)?`${p(H,et)} ${o.set%2===0?"derecha":"izquierda"} \xB7 ${o.set+1} de ${et.sets}`:`${n.setName} ${o.set+1} de ${et.sets}`,w=(H,et)=>pe(Math.floor(et/m(H)),0,H.n-1);function R(){Ct("#bV").classList.toggle("on",a.voice),Ct("#bS").classList.toggle("on",a.sound),Ct("#bW").innerHTML='Vista<span class="lg"> \xB7 '+h[o.view].n+"</span>",document.querySelectorAll("#avSeg button").forEach(H=>H.classList.toggle("on",H.dataset.v===l.variant))}let L=()=>s.set(a);function U(){Ct("#allLv").innerHTML=bi.map((H,et)=>`<button data-l="${et+1}" class="${a.lv.every(_t=>_t===et+1)?"on":""}">${H}</button>`).join(""),Ct("#exList").innerHTML=t.map((H,et)=>{let _t=M(et),Lt=bi.map((ht,vt)=>`<button data-e="${et}" data-l="${vt+1}" title="${ht}" class="${g(et)===vt+1?"on":""}">${vt+1}</button>`).join("");return`<li><b>${et+1}</b><div><span>${tn(H.name)}</span><small>${bi[g(et)-1]} \xB7 ${tn(_t.t)}</small><small class="lab">${y(_t)}</small></div><div class="lvc">${Lt}</div></li>`}).join(""),Ct("#totalT").textContent="Duraci\xF3n estimada de la sesi\xF3n: "+P(b())}function V(H){o.screen=H,Ct("#setup").classList.toggle("on",H==="setup"),Ct("#end").classList.toggle("on",H==="end"),H==="setup"&&U(),document.body.dataset.screen=H,d.resize()}function E(){let H=t[o.ex],et=M(o.ex),_t=o.phase;Ct("#pStep").textContent=`Ejercicio ${o.ex+1} de ${t.length}`,Ct("#pTitle").textContent=H.name,Ct("#pArea").textContent=H.area,Ct("#pMus").textContent="M\xFAsculos: "+H.mus.map(ht=>Eu[ht]).join(" \xB7 "),Ct("#pMus").classList.toggle("off",!f),Ct("#pLevels").innerHTML=bi.map((ht,vt)=>`<button data-l="${vt+1}" class="${g(o.ex)===vt+1?"on":""} ${o.done[o.ex]||vt+1<g(o.ex)?"ok":""}" ${_t!=="ready"?"disabled":""}>${ht}</button>`).join(""),Ct("#pLvT").innerHTML=`<b>${bi[g(o.ex)-1]}</b> \xB7 ${tn(et.t)}`,Ct("#pCues").innerHTML=et.d.map(ht=>`<li>${tn(ht)}</li>`).join(""),Ct("#pSpec").textContent=y(et),Ct("#pKey").innerHTML=H.key.length?"<h4>Importante</h4><ul>"+H.key.map(ht=>`<li>${tn(ht)}</li>`).join("")+"</ul>":"",Ct("#pErrBox").style.display=H.errors.length?"":"none",Ct("#pErr").innerHTML=H.errors.map(ht=>`<li>${tn(ht)}</li>`).join(""),Ct("#steps").innerHTML=t.map((ht,vt)=>`<button class="${vt===o.ex?"cur":""} ${o.done[vt]?"ok":""}" data-i="${vt}" title="${tn(ht.name)}">${vt+1}</button>`).join(""),Ct("#bar i").style.width=o.done.filter(Boolean).length/t.length*100+"%",Ct("#mainBtn").textContent=_t==="ready"?"Iniciar ejercicio":o.paused?"Reanudar":"Pausar",Ct("#skipBtn").style.display=_t==="ready"?"none":"",Ct("#skipBtn").textContent=_t==="rest"?"Saltar descanso":`Saltar ${n.setName.toLowerCase()}`,Ct("#prevBtn").disabled=o.ex===0,Ct("#nextBtn").disabled=o.ex===t.length-1;let Lt="";for(let ht=0;ht<et.sets;ht++){let vt=_t!=="ready"&&(ht<o.set||ht===o.set&&_t==="work");Lt+=`<i class="${vt?"on":""} ${_t==="work"&&ht===o.set?"cur":""}"></i>`}Ct("#dots").innerHTML=Lt}function B(){let H=o.phase,et=M(o.ex),_t=t[o.ex],Lt="",ht="",vt=1,se=!1;if(H==="ready")Lt=String(et.n),ht=y(et);else if(H==="count")Lt=String(Math.max(1,3-Math.floor(o.el))),ht="Preparados",vt=1-o.el%1;else if(H==="work")vt=1-o.el/o.dur,et.unit==="s"?(Lt=String(Math.ceil(o.dur-o.el)),ht=x(_t,et)+" \xB7 segundos"):(Lt=w(et,o.el)+1+"/"+et.n,se=!0,ht=x(_t,et)+" \xB7 repeticiones"),o.paused&&(ht+=" \xB7 pausa");else if(H==="rest"){let ee=C(et);Lt=String(Math.ceil(ee-o.el)),ht="Descanso \xB7 respira",vt=1-o.el/ee}Ct("#tNum").textContent=Lt,Ct("#tNum").classList.toggle("sm2",se),Ct("#tLab").textContent=ht,Ct("#ring").style.strokeDashoffset=289*(1-pe(vt,0,1)),document.body.dataset.phase=H}function Y(H,et=2400){let _t=Ct("#toast");_t.textContent=H,_t.classList.add("on"),clearTimeout(Y.h),Y.h=setTimeout(()=>_t.classList.remove("on"),et)}function J(H){let et=Ct("#cd");et.textContent=H,et.classList.remove("go"),et.offsetWidth,et.classList.add("go")}let st=Bu({stageEl:Ct("#stage"),say:H=>Si(a,H),getExercise:()=>t[o.ex]});function F(){let H=t[o.ex],et=M(o.ex);Object.assign(o,{phase:"ready",el:0,set:0,animT:0,paused:!1,lastRep:-1,wrapN:0,snap:1,dragAz:0,dragEl:0}),o.dur=T(et),Ct("#cd").classList.remove("go"),Ct("#cd").textContent="",Si(a,`${o.ex+1}. ${H.name}. ${bi[g(o.ex)-1]}`),E(),B(),st&&st.setExercise(H)}function k(){bo(),zu(),o.ex=0,o.done=[],o.sessionTime=0,V("session"),F(),L()}function $(){Object.assign(o,{phase:"count",el:0,cdn:4,animT:0,paused:!1}),E()}function at(){let H=M(o.ex);Object.assign(o,{phase:"work",el:0,animT:0,cdn:99,lastRep:-1,snap:1,wrapN:0}),o.dur=T(H),o.side=o.set%2===0?-1:1,J("YA"),Cs(a,900,.3,"square",.18),Si(a,p(t[o.ex],H)?o.side<0?"Lado derecho. Ya":"Lado izquierdo. Ya":"Ya"),E()}function gt(){let H=M(o.ex);o.set+1<H.sets?(Object.assign(o,{phase:"rest",el:0,animT:0}),Si(a,"Descanso"),Y("Descanso",3e3),Cs(a,500,.25,"triangle"),E()):(o.done[o.ex]=!0,lc(a,[[523,0],[659,140],[784,280]]),o.ex<t.length-1?(Y("Ejercicio completado"),o.ex++,F()):Jt())}function Yt(){let H=Ct("#conf");if(!H||window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;let et=H.getContext("2d");H.width=innerWidth,H.height=innerHeight;let _t=[n.theme.acc,n.theme.hi,"#ffffff"],Lt=Array.from({length:160},()=>({x:innerWidth/2+(Math.random()-.5)*240,y:innerHeight*.4,vx:(Math.random()-.5)*15,vy:-Math.random()*15-4,r:Math.random()*5+3,a:Math.random()*6,va:(Math.random()-.5)*.4,c:_t[Math.random()*3|0]})),ht=performance.now();(function vt(se){let ee=(se-ht)/1e3;if(et.clearRect(0,0,H.width,H.height),!(ee>3.4)){for(let Zt of Lt)Zt.vy+=.36,Zt.x+=Zt.vx,Zt.y+=Zt.vy,Zt.a+=Zt.va,Zt.vx*=.99,et.save(),et.translate(Zt.x,Zt.y),et.rotate(Zt.a),et.globalAlpha=Math.max(0,1-ee/3.4),et.fillStyle=Zt.c,et.fillRect(-Zt.r,-Zt.r/2,Zt.r*2,Zt.r),et.restore();requestAnimationFrame(vt)}})(ht)}function Jt(){o.phase="done",E(),V("end"),Yt(),lc(a,[[523,0],[659,150],[784,300],[1047,450,.5]]),Si(a,"Sesi\xF3n completada");let H=Math.floor(o.sessionTime/60),et=Math.round(o.sessionTime%60);Ct("#endTime").textContent=`Tiempo total: ${H} min ${et} s`,Ct("#endList").innerHTML=t.map((_t,Lt)=>`<li><b>\u2713</b>${Lt+1}. ${tn(_t.name)}<small>${bi[g(Lt)-1]} \xB7 ${y(M(Lt))}</small></li>`).join("");try{let _t=JSON.parse(localStorage.getItem("forja:log")||"[]");_t.push({id:n.id,ts:Date.now(),secs:Math.round(o.sessionTime),level:Math.round(a.lv.reduce((Lt,ht)=>Lt+ht,0)/a.lv.length)}),localStorage.setItem("forja:log",JSON.stringify(_t.slice(-400)))}catch{}}let jt=H=>{o.ex=pe(H,0,t.length-1),o.paused=!1,F()};Ct("#go").onclick=k,Ct("#mainBtn").onclick=()=>{o.phase==="ready"?(bo(),$()):(o.paused=!o.paused,o.paused&&cc(),E())},Ct("#skipBtn").onclick=()=>{o.phase==="rest"?(o.set++,at()):o.phase==="work"?o.el=o.dur:o.phase==="count"&&at()},Ct("#prevBtn").onclick=()=>jt(o.ex-1),Ct("#nextBtn").onclick=()=>jt(o.ex+1),Ct("#steps").onclick=H=>{let et=H.target.closest("button");et&&jt(+et.dataset.i)},Ct("#pLevels").onclick=H=>{let et=H.target.closest("button");!et||o.phase!=="ready"||(a.lv[o.ex]=+et.dataset.l,L(),F())},Ct("#allLv").onclick=H=>{let et=H.target.closest("button");et&&(a.lv=t.map(()=>+et.dataset.l),a.level=+et.dataset.l,L(),U())},document.addEventListener("click",H=>{let et=H.target.closest("#exList .lvc button");et&&(a.lv[+et.dataset.e]=+et.dataset.l,L(),U())}),Ct("#avSeg").onclick=H=>{let et=H.target.closest("button");et&&(l.variant=et.dataset.v,r.set(l),d.setAvatar(l.variant,u()),o.snap=1,R())},Ct("#bV").onclick=()=>{a.voice=!a.voice,a.voice||cc(),R(),L()},Ct("#bS").onclick=()=>{a.sound=!a.sound,R(),L()},Ct("#bF").onclick=hc,Ct("#bCam").onclick=()=>{st.toggle(),Ct("#bCam").classList.toggle("on",st.isOpen())},Ct("#bW").onclick=()=>{o.view=(o.view+1)%h.length,o.dragAz=0,o.dragEl=0,R()},Ct("#bC").onclick=()=>{o.paused=!1,V("setup")},Ct("#again").onclick=k,Ct("#backSetup").onclick=()=>V("setup"),Ct("#pMus").addEventListener("click",()=>{f=!f,Ct("#pMus").classList.toggle("off",!f)}),document.addEventListener("keydown",H=>{o.screen!=="session"||H.target.closest("input,textarea")||(H.code==="Space"?(H.preventDefault(),Ct("#mainBtn").click()):H.code==="ArrowRight"?Ct("#nextBtn").click():H.code==="ArrowLeft"?Ct("#prevBtn").click():(H.key==="f"||H.key==="F")&&hc())});let Z=null,it=Ct("#cv");it.addEventListener("pointerdown",H=>{Z={x:H.clientX,y:H.clientY,az:o.dragAz,el:o.dragEl},it.setPointerCapture(H.pointerId)}),it.addEventListener("pointermove",H=>{Z&&(o.dragAz=Z.az-(H.clientX-Z.x)*.35,o.dragEl=pe(Z.el+(H.clientY-Z.y)*.15,-4,40))}),it.addEventListener("pointerup",()=>Z=null),new ResizeObserver(()=>d.resize()).observe(Ct("#stage")),addEventListener("resize",()=>d.resize());let bt=()=>o.phase==="work"?o.el:o.phase==="ready"?o.animT%o.dur:0;function Bt(H){let et=M(o.ex),_t=t[o.ex];if(o.screen==="session"&&o.phase!=="ready"&&!o.paused&&(o.sessionTime+=H),o.screen==="session"&&!o.paused){if(o.phase==="count"){o.el+=H;let vt=3-Math.floor(o.el);vt!==o.cdn&&vt>0&&(o.cdn=vt,J(vt),Cs(a,520,.12,"square"),Si(a,String(vt))),o.el>=3&&at()}else if(o.phase==="work"){let vt=o.el;o.el+=H,o.animT=o.el;let se=Math.ceil(o.dur-vt),ee=Math.ceil(o.dur-o.el);ee!==se&&ee<=3&&ee>0&&et.unit==="s"&&Cs(a,700,.09,"square",.12),o.el>=o.dur&&gt()}else if(o.phase==="rest")o.el+=H,o.el>=C(et)&&(o.set++,at());else if(o.phase==="ready"){o.animT+=Math.min(H,.05);let vt=Math.floor(o.animT/o.dur);vt!==o.wrapN&&(o.wrapN=vt,o.snap=1)}}let Lt=o.screen==="session"&&(o.phase==="ready"||o.phase==="work"),ht=Lt?bt():0;if(o.setIdx=o.phase==="work"?o.set:o.wrapN,p(_t,et)&&(o.side=o.setIdx%2===0?-1:1),Lt&&o.phase==="work"&&!o.paused&&et.unit==="rep"){let vt=w(et,ht);vt!==o.lastRep&&(o.lastRep=vt,Si(a,String(vt+1)))}o.screen==="session"&&B()}let St=performance.now();function zt(H){let et=Math.min(.25,(H-St)/1e3||0);St=H,Bt(et);let _t=t[o.ex],Lt=o.screen==="session",ht=Lt&&(o.phase==="ready"||o.phase==="work"),vt=Object.assign({},M(o.ex),{L:g(o.ex),ex:o.ex}),se=!!o.snap;o.snap=0,d.frame({dt:et,time:H,mode:ht?_t.mode:"idle",t:ht?bt():0,ctx:o,level:vt,snap:se,ex:_t,active:Lt,muscles:_t.mus,musclesOn:f&&Lt&&["ready","count","work"].includes(o.phase),view:h[o.view],drag:{az:o.dragAz,el:o.dragEl},cam:Lt?_t.cam:{az:-38,el:7,dist:3.5,ty:.8}}),requestAnimationFrame(zt)}R(),U(),V("setup"),E(),B(),d.resize(),requestAnimationFrame(zt),window.__k={D:o,EXS:t,CFG:a,stage:d,step:(H,et,_t,Lt,ht,vt,se)=>ws(H,et,_t,Lt,ht,vt,se),probe(H,et,_t,Lt){let ht=t[H],vt=Object.assign({},ht.levels[et-1],{L:et,ex:H}),se=vt.unit==="rep"?vt.n*(vt.repT||vt.J+vt.H):vt.n,ee=d.avatar,Zt={side:_t,dur:se,ex:H},_e=1/60,N=Math.min(Lt||12,se),Ce=null,oe=null,A={rot:0,pos:0,bone:-1,t:0},_=0,z=0,X=[];for(let tt=0,lt=0;tt<N;tt+=_e,lt++){ws(ee,ht.mode,tt,Zt,vt,_e,lt===0);let Dt=ee.ALL.map(Tt=>Tt.getWorldQuaternion(new ee.root.quaternion.constructor)),ft=ee.root.position.clone();if(Ce&&lt>20){let Tt=0,Ft=-1;Dt.forEach((D,dt)=>{let nt=2*Math.acos(Math.min(1,Math.abs(D.dot(Ce[dt]))))*57.2958;nt>Tt&&(Tt=nt,Ft=dt)});let Wt=ft.distanceTo(oe);Tt>A.rot&&(A.rot=Tt,A.bone=Ft,A.t=tt),Wt>A.pos&&(A.pos=Wt)}let ct=1e9;for(let Tt of ee.marks){let Ft=Tt.o.getWorldPosition(new ee.root.position.constructor);ct=Math.min(ct,Ft.y-Tt.r)}ct<-.02&&(_=Math.max(_,-ct)),Ce=Dt,oe=ft}let K=tt=>(ws(ee,ht.mode,tt,Zt,vt,_e,!0),ee.ALL.map(lt=>lt.getWorldQuaternion(new ee.root.quaternion.constructor))),ot=K(Math.max(0,se-_e)),ut=K(0),j=0;return ot.forEach((tt,lt)=>{j=Math.max(j,2*Math.acos(Math.min(1,Math.abs(tt.dot(ut[lt]))))*57.2958)}),{name:ht.name,level:et,side:_t,dur:se,maxRotDegPerFrame:+A.rot.toFixed(1),atT:+A.t.toFixed(2),bone:ee.ALL[A.bone]?ee.ALL[A.bone].name||A.bone:-1,maxPosPerFrame:+A.pos.toFixed(3),underGround:+_.toFixed(3),seamDeg:+j.toFixed(1)}},show(H,et,_t,Lt){a.lv[H]=et,o.screen="session",V("session"),o.ex=H,F(),o.paused=!0,o.animT=_t,Lt!==void 0&&(o.side=Lt),o.snap=1,E()}}}ku(Mu);})();
