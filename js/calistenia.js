(()=>{var ah=0,gl=1,oh=2;var Hi=1,lh=2,Ts=3,Ci=0,en=1,Cn=2,Vn=0,As=1,cr=2,xl=3,_l=4,ch=5;var Gi=100,hh=101,uh=102,dh=103,fh=104,ph=200,mh=201,gh=202,xh=203,vl=204,yl=205,_h=206,vh=207,yh=208,Mh=209,Sh=210,bh=211,wh=212,Th=213,Ah=214,Kr=0,jr=1,Qr=2,ps=3,ta=4,ea=5,na=6,ia=7,Ml=0,Eh=1,Ch=2,Rn=0,Sl=1,bl=2,wl=3,hr=4,Tl=5,Al=6,El=7;var Cl=300,Ri=301,Wi=302,Pa=303,Ia=304,ur=306,ms=1e3,Bn=1001,sa=1002,De=1003,Rh=1004;var dr=1005;var Be=1006,La=1007;var Pi=1008;var ln=1009,Rl=1010,Pl=1011,Es=1012,Na=1013,Pn=1014,In=1015,Ln=1016,Da=1017,Ua=1018,Cs=1020,Il=35902,Ll=35899,Nl=1021,Dl=1022,_n=1023,kn=1026,Ii=1027,Ul=1028,Fa=1029,Li=1030,Oa=1031;var Ba=1033,fr=33776,pr=33777,mr=33778,gr=33779,ka=35840,za=35841,Va=35842,Ha=35843,Ga=36196,Wa=37492,Xa=37496,qa=37488,Ya=37489,xr=37490,$a=37491,Ja=37808,Za=37809,Ka=37810,ja=37811,Qa=37812,to=37813,eo=37814,no=37815,io=37816,so=37817,ro=37818,ao=37819,oo=37820,lo=37821,co=36492,ho=36494,uo=36495,fo=36283,po=36284,_r=36285,mo=36286;var qs=2300,ra=2301,Jr=2302,cl=2303,hl=2400,ul=2401,dl=2402;var Ph=3200;var go=0,Ih=1,si="",Ke="srgb",Ys="srgb-linear",$s="linear",pe="srgb";var Zr=7680;var Lh=519,Nh=512,Dh=513,Uh=514,xo=515,Fh=516,Oh=517,_o=518,Bh=519,kh=35044;var Fl="300 es",An=2e3,gs=2001;function ud(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function dd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Js(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function zh(){let n=Js("canvas");return n.style.display="block",n}var kc={},xs=null;function Ol(...n){let t="THREE."+n.shift();xs?xs("log",t,...n):console.log(t,...n)}function Vh(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function qt(...n){n=Vh(n);let t="THREE."+n.shift();if(xs)xs("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function Yt(...n){n=Vh(n);let t="THREE."+n.shift();if(xs)xs("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function zi(...n){let t=n.join(" ");t in kc||(kc[t]=!0,qt(...n))}function Hh(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}var Gh={[Kr]:jr,[Qr]:na,[ta]:ia,[ps]:ea,[jr]:Kr,[na]:Qr,[ia]:ta,[ea]:ps},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zo=Math.PI/180,aa=180/Math.PI;function vr(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]).toLowerCase()}function re(n,t,e){return Math.max(t,Math.min(e,n))}function fd(n,t){return(n%t+t)%t}function Vo(n,t,e){return(1-e)*n+e*t}function Vs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Hl=class Hl{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hl.prototype.isVector2=!0;var ie=Hl,qe=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,l){let c=i[s+0],o=i[s+1],h=i[s+2],f=i[s+3],u=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||c!==u||o!==d||h!==g){let m=c*u+o*d+h*g+f*v;m<0&&(u=-u,d=-d,g=-g,v=-v,m=-m);let p=1-l;if(m<.9995){let E=Math.acos(m),I=Math.sin(E);p=Math.sin(p*E)/I,l=Math.sin(l*E)/I,c=c*p+u*l,o=o*p+d*l,h=h*p+g*l,f=f*p+v*l}else{c=c*p+u*l,o=o*p+d*l,h=h*p+g*l,f=f*p+v*l;let E=1/Math.sqrt(c*c+o*o+h*h+f*f);c*=E,o*=E,h*=E,f*=E}}t[e]=c,t[e+1]=o,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,a){let l=i[s],c=i[s+1],o=i[s+2],h=i[s+3],f=r[a],u=r[a+1],d=r[a+2],g=r[a+3];return t[e]=l*g+h*f+c*d-o*u,t[e+1]=c*g+h*u+o*f-l*d,t[e+2]=o*g+h*d+l*u-c*f,t[e+3]=h*g-l*f-c*u-o*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,c=Math.sin,o=l(i/2),h=l(s/2),f=l(r/2),u=c(i/2),d=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*f+o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f-u*d*g;break;case"YXZ":this._x=u*h*f+o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f+u*d*g;break;case"ZXY":this._x=u*h*f-o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f-u*d*g;break;case"ZYX":this._x=u*h*f-o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f+u*d*g;break;case"YZX":this._x=u*h*f+o*d*g,this._y=o*d*f+u*h*g,this._z=o*h*g-u*d*f,this._w=o*h*f-u*d*g;break;case"XZY":this._x=u*h*f-o*d*g,this._y=o*d*f-u*h*g,this._z=o*h*g+u*d*f,this._w=o*h*f+u*d*g;break;default:qt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],l=e[5],c=e[9],o=e[2],h=e[6],f=e[10],u=i+l+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-o)*d,this._z=(a-s)*d}else if(i>l&&i>f){let d=2*Math.sqrt(1+i-l-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+o)/d}else if(l>f){let d=2*Math.sqrt(1+l-i-f);this._w=(r-o)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-i-l);this._w=(a-s)/d,this._x=(r+o)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=e._x,c=e._y,o=e._z,h=e._w;return this._x=i*h+a*l+s*o-r*c,this._y=s*h+a*c+r*l-i*o,this._z=r*h+a*o+i*c-s*l,this._w=a*h-i*l-s*c-r*o,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,l=this.dot(t);l<0&&(i=-i,s=-s,r=-r,a=-a,l=-l);let c=1-e;if(l<.9995){let o=Math.acos(l),h=Math.sin(o);c=Math.sin(c*o)/h,e=Math.sin(e*o)/h,this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+i*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Gl=class Gl{constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,l=t.z,c=t.w,o=2*(a*s-l*i),h=2*(l*e-r*s),f=2*(r*i-a*e);return this.x=e+c*o+a*f-l*h,this.y=i+c*h+l*o-r*f,this.z=s+c*f+r*h-a*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,l=e.y,c=e.z;return this.x=s*c-r*l,this.y=r*a-i*c,this.z=i*l-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ho.copy(this).projectOnVector(t),this.sub(Ho)}reflect(t){return this.sub(Ho.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(re(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gl.prototype.isVector3=!0;var V=Gl,Ho=new V,zc=new qe,Wl=class Wl{constructor(t,e,i,s,r,a,l,c,o){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o)}set(t,e,i,s,r,a,l,c,o){let h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[3],c=i[6],o=i[1],h=i[4],f=i[7],u=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],E=s[1],I=s[4],M=s[7],b=s[2],A=s[5],P=s[8];return r[0]=a*v+l*E+c*b,r[3]=a*m+l*I+c*A,r[6]=a*p+l*M+c*P,r[1]=o*v+h*E+f*b,r[4]=o*m+h*I+f*A,r[7]=o*p+h*M+f*P,r[2]=u*v+d*E+g*b,r[5]=u*m+d*I+g*A,r[8]=u*p+d*M+g*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8];return e*a*h-e*l*o-i*r*h+i*l*c+s*r*o-s*a*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8],f=h*a-l*o,u=l*c-h*r,d=o*r-a*c,g=e*f+i*u+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*o-h*i)*v,t[2]=(l*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-l*e)*v,t[6]=d*v,t[7]=(i*c-o*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,l){let c=Math.cos(r),o=Math.sin(r);return this.set(i*c,i*o,-i*(c*a+o*l)+a+t,-s*o,s*c,-s*(-o*a+c*l)+l+e,0,0,1),this}scale(t,e){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Go.makeScale(t,e)),this}rotate(t){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Go.makeRotation(-t)),this}translate(t,e){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Go.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;var Zt=Wl,Go=new Zt,Vc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Hc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){let n={enabled:!0,workingColorSpace:Ys,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===pe&&(s.r=ii(s.r),s.g=ii(s.g),s.b=ii(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pe&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===si?$s:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[Ys]:{primaries:t,whitePoint:i,transfer:$s,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:t,whitePoint:i,transfer:pe,toXYZ:Vc,fromXYZ:Hc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}}),n}var se=pd();function ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function fs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ts,oa=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{ts===void 0&&(ts=Js("canvas")),ts.width=t.width,ts.height=t.height;let s=ts.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=ts}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Js("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ii(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(ii(e[i]/255)*255):e[i]=ii(e[i]);return{data:e,width:t.width,height:t.height}}else return qt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},md=0,_s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(Wo(s[a].image)):r.push(Wo(s[a]))}else r=Wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?oa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(qt("Texture: Unable to serialize Texture."),{})}var gd=0,Xo=new V,je=class n extends zn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Bn,s=Bn,r=Be,a=Pi,l=_n,c=ln,o=n.DEFAULT_ANISOTROPY,h=si){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=vr(),this.name="",this.source=new _s(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xo).x}get height(){return this.source.getSize(Xo).y}get depth(){return this.source.getSize(Xo).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){qt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ms:t.x=t.x-Math.floor(t.x);break;case Bn:t.x=t.x<0?0:1;break;case sa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ms:t.y=t.y-Math.floor(t.y);break;case Bn:t.y=t.y<0?0:1;break;case sa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};je.DEFAULT_IMAGE=null;je.DEFAULT_MAPPING=Cl;je.DEFAULT_ANISOTROPY=1;var Xl=class Xl{constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,o=c[0],h=c[4],f=c[8],u=c[1],d=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(o+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let I=(o+1)/2,M=(d+1)/2,b=(p+1)/2,A=(h+u)/4,P=(f+v)/4,_=(g+m)/4;return I>M&&I>b?I<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(I),s=A/i,r=P/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=A/s,r=_/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=P/r,s=_/r),this.set(i,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-v)/E,this.z=(u-h)/E,this.w=Math.acos((o+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(re(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;var Te=Xl,la=class extends zn{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Be,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new je(s),a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0,this.textures[l].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Be,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends la{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},Zs=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ca=class extends je{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ra=class Ra{constructor(t,e,i,s,r,a,l,c,o,h,f,u,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,c,o,h,f,u,d,g,v,m)}set(t,e,i,s,r,a,l,c,o,h,f,u,d,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=c,p[2]=o,p[6]=h,p[10]=f,p[14]=u,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ra().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/es.setFromMatrixColumn(t,0).length(),r=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(s),o=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,g=l*h,v=l*f;e[0]=c*h,e[4]=-c*f,e[8]=o,e[1]=d+g*o,e[5]=u-v*o,e[9]=-l*c,e[2]=v-u*o,e[6]=g+d*o,e[10]=a*c}else if(t.order==="YXZ"){let u=c*h,d=c*f,g=o*h,v=o*f;e[0]=u+v*l,e[4]=g*l-d,e[8]=a*o,e[1]=a*f,e[5]=a*h,e[9]=-l,e[2]=d*l-g,e[6]=v+u*l,e[10]=a*c}else if(t.order==="ZXY"){let u=c*h,d=c*f,g=o*h,v=o*f;e[0]=u-v*l,e[4]=-a*f,e[8]=g+d*l,e[1]=d+g*l,e[5]=a*h,e[9]=v-u*l,e[2]=-a*o,e[6]=l,e[10]=a*c}else if(t.order==="ZYX"){let u=a*h,d=a*f,g=l*h,v=l*f;e[0]=c*h,e[4]=g*o-d,e[8]=u*o+v,e[1]=c*f,e[5]=v*o+u,e[9]=d*o-g,e[2]=-o,e[6]=l*c,e[10]=a*c}else if(t.order==="YZX"){let u=a*c,d=a*o,g=l*c,v=l*o;e[0]=c*h,e[4]=v-u*f,e[8]=g*f+d,e[1]=f,e[5]=a*h,e[9]=-l*h,e[2]=-o*h,e[6]=d*f+g,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*c,d=a*o,g=l*c,v=l*o;e[0]=c*h,e[4]=-f,e[8]=o*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-g,e[2]=g*f-d,e[6]=l*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xd,t,_d)}lookAt(t,e,i){let s=this.elements;return dn.subVectors(t,e),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),fi.crossVectors(i,dn),fi.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),fi.crossVectors(i,dn)),fi.normalize(),Pr.crossVectors(dn,fi),s[0]=fi.x,s[4]=Pr.x,s[8]=dn.x,s[1]=fi.y,s[5]=Pr.y,s[9]=dn.y,s[2]=fi.z,s[6]=Pr.z,s[10]=dn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[4],c=i[8],o=i[12],h=i[1],f=i[5],u=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],E=i[3],I=i[7],M=i[11],b=i[15],A=s[0],P=s[4],_=s[8],T=s[12],C=s[1],N=s[5],F=s[9],k=s[13],L=s[2],W=s[6],J=s[10],H=s[14],nt=s[3],B=s[7],G=s[11],Z=s[15];return r[0]=a*A+l*C+c*L+o*nt,r[4]=a*P+l*N+c*W+o*B,r[8]=a*_+l*F+c*J+o*G,r[12]=a*T+l*k+c*H+o*Z,r[1]=h*A+f*C+u*L+d*nt,r[5]=h*P+f*N+u*W+d*B,r[9]=h*_+f*F+u*J+d*G,r[13]=h*T+f*k+u*H+d*Z,r[2]=g*A+v*C+m*L+p*nt,r[6]=g*P+v*N+m*W+p*B,r[10]=g*_+v*F+m*J+p*G,r[14]=g*T+v*k+m*H+p*Z,r[3]=E*A+I*C+M*L+b*nt,r[7]=E*P+I*N+M*W+b*B,r[11]=E*_+I*F+M*J+b*G,r[15]=E*T+I*k+M*H+b*Z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],l=t[5],c=t[9],o=t[13],h=t[2],f=t[6],u=t[10],d=t[14],g=t[3],v=t[7],m=t[11],p=t[15],E=c*d-o*u,I=l*d-o*f,M=l*u-c*f,b=a*d-o*h,A=a*u-c*h,P=a*f-l*h;return e*(v*E-m*I+p*M)-i*(g*E-m*b+p*A)+s*(g*I-v*b+p*P)-r*(g*M-v*A+m*P)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],o=t[6],h=t[10];return e*(a*h-l*o)-i*(r*h-l*c)+s*(r*o-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],c=t[6],o=t[7],h=t[8],f=t[9],u=t[10],d=t[11],g=t[12],v=t[13],m=t[14],p=t[15],E=e*l-i*a,I=e*c-s*a,M=e*o-r*a,b=i*c-s*l,A=i*o-r*l,P=s*o-r*c,_=h*v-f*g,T=h*m-u*g,C=h*p-d*g,N=f*m-u*v,F=f*p-d*v,k=u*p-d*m,L=E*k-I*F+M*N+b*C-A*T+P*_;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let W=1/L;return t[0]=(l*k-c*F+o*N)*W,t[1]=(s*F-i*k-r*N)*W,t[2]=(v*P-m*A+p*b)*W,t[3]=(u*A-f*P-d*b)*W,t[4]=(c*C-a*k-o*T)*W,t[5]=(e*k-s*C+r*T)*W,t[6]=(m*M-g*P-p*I)*W,t[7]=(h*P-u*M+d*I)*W,t[8]=(a*F-l*C+o*_)*W,t[9]=(i*C-e*F-r*_)*W,t[10]=(g*A-v*M+p*E)*W,t[11]=(f*M-h*A-d*E)*W,t[12]=(l*T-a*N-c*_)*W,t[13]=(e*N-i*T+s*_)*W,t[14]=(v*I-g*b-m*E)*W,t[15]=(h*b-f*I+u*E)*W,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,l=t.y,c=t.z,o=r*a,h=r*l;return this.set(o*a+i,o*l-s*c,o*c+s*l,0,o*l+s*c,h*l+i,h*c-s*a,0,o*c-s*l,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,l=e._z,c=e._w,o=r+r,h=a+a,f=l+l,u=r*o,d=r*h,g=r*f,v=a*h,m=a*f,p=l*f,E=c*o,I=c*h,M=c*f,b=i.x,A=i.y,P=i.z;return s[0]=(1-(v+p))*b,s[1]=(d+M)*b,s[2]=(g-I)*b,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(u+p))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+I)*P,s[9]=(m-E)*P,s[10]=(1-(u+v))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=es.set(s[0],s[1],s[2]).length(),l=es.set(s[4],s[5],s[6]).length(),c=es.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let o=1/a,h=1/l,f=1/c;return Sn.elements[0]*=o,Sn.elements[1]*=o,Sn.elements[2]*=o,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,e.setFromRotationMatrix(Sn),i.x=a,i.y=l,i.z=c,this}makePerspective(t,e,i,s,r,a,l=An,c=!1){let o=this.elements,h=2*r/(e-t),f=2*r/(i-s),u=(e+t)/(e-t),d=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(l===An)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(l===gs)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=f,o[9]=d,o[13]=0,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,s,r,a,l=An,c=!1){let o=this.elements,h=2/(e-t),f=2/(i-s),u=-(e+t)/(e-t),d=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(l===An)g=-2/(a-r),v=-(a+r)/(a-r);else if(l===gs)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=0,o[12]=u,o[1]=0,o[5]=f,o[9]=0,o[13]=d,o[2]=0,o[6]=0,o[10]=g,o[14]=v,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}};Ra.prototype.isMatrix4=!0;var Se=Ra,es=new V,Sn=new Se,xd=new V(0,0,0),_d=new V(1,1,1),fi=new V,Pr=new V,dn=new V,Gc=new Se,Wc=new qe,En=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],l=s[8],c=s[1],o=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,o),this._z=0);break;case"YXZ":this._x=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(c,o)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(re(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,o)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-re(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,o));break;case"YZX":this._z=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-re(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,o),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:qt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Gc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Gc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Wc.setFromEuler(this),this.setFromQuaternion(Wc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};En.DEFAULT_ORDER="XYZ";var Ks=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vd=0,Xc=new V,ns=new qe,jn=new Se,Ir=new V,Hs=new V,yd=new V,Md=new qe,qc=new V(1,0,0),Yc=new V(0,1,0),$c=new V(0,0,1),Jc={type:"added"},Sd={type:"removed"},is={type:"childadded",child:null},qo={type:"childremoved",child:null},Ue=class n extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new V,e=new En,i=new qe,s=new V(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Se},normalMatrix:{value:new Zt}}),this.matrix=new Se,this.matrixWorld=new Se,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ks,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.multiply(ns),this}rotateOnWorldAxis(t,e){return ns.setFromAxisAngle(t,e),this.quaternion.premultiply(ns),this}rotateX(t){return this.rotateOnAxis(qc,t)}rotateY(t){return this.rotateOnAxis(Yc,t)}rotateZ(t){return this.rotateOnAxis($c,t)}translateOnAxis(t,e){return Xc.copy(t).applyQuaternion(this.quaternion),this.position.add(Xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(qc,t)}translateY(t){return this.translateOnAxis(Yc,t)}translateZ(t){return this.translateOnAxis($c,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(jn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ir.copy(t):Ir.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?jn.lookAt(Hs,Ir,this.up):jn.lookAt(Ir,Hs,this.up),this.quaternion.setFromRotationMatrix(jn),s&&(jn.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(jn),this.quaternion.premultiply(ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Jc),is.child=t,this.dispatchEvent(is),is.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sd),qo.child=t,this.dispatchEvent(qo),qo.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),jn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),jn.multiply(t.parent.matrixWorld)),t.applyMatrix4(jn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Jc),is.child=t,this.dispatchEvent(is),is.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,t,yd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Hs,Md,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,l=r.length;a<l;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(l=>({...l})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){let c=l.shapes;if(Array.isArray(c))for(let o=0,h=c.length;o<h;o++){let f=c[o];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let l=[];for(let c=0,o=this.material.length;c<o;c++)l.push(r(t.materials,this.material[c]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){let c=this.animations[l];s.animations.push(r(t.animations,c))}}if(e){let l=a(t.geometries),c=a(t.materials),o=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),g=a(t.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),o.length>0&&(i.textures=o),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(l){let c=[];for(let o in l){let h=l[o];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ue.DEFAULT_UP=new V(0,1,0);Ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var be=class extends Ue{constructor(){super(),this.isGroup=!0,this.type="Group"}},bd={type:"move"},vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,l=this._targetRay,c=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(o,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=o.joints["index-finger-tip"],f=o.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,g=.005;o.inputState.pinching&&u>d+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&u<=d-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bd)))}return l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),o!==null&&(o.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new be;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Lr={h:0,s:0,l:0};function Yo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Kt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=i,se.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=se.workingColorSpace){if(t=fd(t,1),e=re(e,0,1),i=re(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Yo(a,r,t+1/3),this.g=Yo(a,r,t),this.b=Yo(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Ke){function i(r){r!==void 0&&parseFloat(r)<1&&qt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:qt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);qt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){let i=Wh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):qt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ii(t.r),this.g=ii(t.g),this.b=ii(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return se.workingToColorSpace(We.copy(this),t),Math.round(re(We.r*255,0,255))*65536+Math.round(re(We.g*255,0,255))*256+Math.round(re(We.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(We.copy(this),e);let i=We.r,s=We.g,r=We.b,a=Math.max(i,s,r),l=Math.min(i,s,r),c,o,h=(l+a)/2;if(l===a)c=0,o=0;else{let f=a-l;switch(o=h<=.5?f/(a+l):f/(2-a-l),a){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=o,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Ke){se.workingToColorSpace(We.copy(this),t);let e=We.r,i=We.g,s=We.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Lr);let i=Vo(pi.h,Lr.h,e),s=Vo(pi.s,Lr.s,e),r=Vo(pi.l,Lr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Kt;Kt.NAMES=Wh;var js=class extends Ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},bn=new V,Qn=new V,$o=new V,ti=new V,ss=new V,rs=new V,Zc=new V,Jo=new V,Zo=new V,Ko=new V,jo=new Te,Qo=new Te,tl=new Te,_i=class n{constructor(t=new V,e=new V,i=new V){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),bn.subVectors(t,e),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){bn.subVectors(s,e),Qn.subVectors(i,e),$o.subVectors(t,e);let a=bn.dot(bn),l=bn.dot(Qn),c=bn.dot($o),o=Qn.dot(Qn),h=Qn.dot($o),f=a*o-l*l;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(o*c-l*h)*u,g=(a*h-l*c)*u;return r.set(1-d-g,g,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,ti)===null?!1:ti.x>=0&&ti.y>=0&&ti.x+ti.y<=1}static getInterpolation(t,e,i,s,r,a,l,c){return this.getBarycoord(t,e,i,s,ti)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ti.x),c.addScaledVector(a,ti.y),c.addScaledVector(l,ti.z),c)}static getInterpolatedAttribute(t,e,i,s,r,a){return jo.setScalar(0),Qo.setScalar(0),tl.setScalar(0),jo.fromBufferAttribute(t,e),Qo.fromBufferAttribute(t,i),tl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(jo,r.x),a.addScaledVector(Qo,r.y),a.addScaledVector(tl,r.z),a}static isFrontFacing(t,e,i,s){return bn.subVectors(i,e),Qn.subVectors(t,e),bn.cross(Qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return bn.subVectors(this.c,this.b),Qn.subVectors(this.a,this.b),bn.cross(Qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,l;ss.subVectors(s,i),rs.subVectors(r,i),Jo.subVectors(t,i);let c=ss.dot(Jo),o=rs.dot(Jo);if(c<=0&&o<=0)return e.copy(i);Zo.subVectors(t,s);let h=ss.dot(Zo),f=rs.dot(Zo);if(h>=0&&f<=h)return e.copy(s);let u=c*f-h*o;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),e.copy(i).addScaledVector(ss,a);Ko.subVectors(t,r);let d=ss.dot(Ko),g=rs.dot(Ko);if(g>=0&&d<=g)return e.copy(r);let v=d*o-c*g;if(v<=0&&o>=0&&g<=0)return l=o/(o-g),e.copy(i).addScaledVector(rs,l);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Zc.subVectors(r,s),l=(f-h)/(f-h+(d-g)),e.copy(s).addScaledVector(Zc,l);let p=1/(m+v+u);return a=v*p,l=u*p,e.copy(i).addScaledVector(ss,a).addScaledVector(rs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},vi=class{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(wn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(wn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=wn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,wn):wn.fromBufferAttribute(r,a),wn.applyMatrix4(t.matrixWorld),this.expandByPoint(wn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Nr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Nr.copy(i.boundingBox)),Nr.applyMatrix4(t.matrixWorld),this.union(Nr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,wn),wn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Gs),Dr.subVectors(this.max,Gs),as.subVectors(t.a,Gs),os.subVectors(t.b,Gs),ls.subVectors(t.c,Gs),mi.subVectors(os,as),gi.subVectors(ls,os),Fi.subVectors(as,ls);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-Fi.z,Fi.y,mi.z,0,-mi.x,gi.z,0,-gi.x,Fi.z,0,-Fi.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-Fi.y,Fi.x,0];return!el(e,as,os,ls,Dr)||(e=[1,0,0,0,1,0,0,0,1],!el(e,as,os,ls,Dr))?!1:(Ur.crossVectors(mi,gi),e=[Ur.x,Ur.y,Ur.z],el(e,as,os,ls,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,wn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(wn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ei),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ei=[new V,new V,new V,new V,new V,new V,new V,new V],wn=new V,Nr=new vi,as=new V,os=new V,ls=new V,mi=new V,gi=new V,Fi=new V,Gs=new V,Dr=new V,Ur=new V,Oi=new V;function el(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Oi.fromArray(n,r);let l=s.x*Math.abs(Oi.x)+s.y*Math.abs(Oi.y)+s.z*Math.abs(Oi.z),c=t.dot(Oi),o=e.dot(Oi),h=i.dot(Oi);if(Math.max(-Math.max(c,o,h),Math.min(c,o,h))>l)return!1}return!0}var Re=new V,Fr=new ie,wd=0,rn=class extends zn{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:wd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=kh,this.updateRanges=[],this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=sn(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vs(e,this.array)),e}setX(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vs(e,this.array)),e}setY(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vs(e,this.array)),e}setW(t,e){return this.normalized&&(e=sn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=sn(e,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Qs=class extends rn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var tr=class extends rn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var we=class extends rn{constructor(t,e,i){super(new Float32Array(t),e,i)}},Td=new vi,Ws=new V,nl=new V,ys=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):Td.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ws.subVectors(t,this.center);let e=Ws.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ws,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ws.copy(t.center).add(nl)),this.expandByPoint(Ws.copy(t.center).sub(nl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Ad=0,xn=new Se,il=new Ue,cs=new V,fn=new vi,Xs=new vi,Ne=new V,on=class n extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?tr:Qs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Zt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,i){return xn.makeTranslation(t,e,i),this.applyMatrix4(xn),this}scale(t,e,i){return xn.makeScale(t,e,i),this.applyMatrix4(xn),this}lookAt(t){return il.lookAt(t),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new we(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&qt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ne.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Ne),Ne.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Ne)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){let i=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let l=e[r];Xs.setFromBufferAttribute(l),this.morphTargetsRelative?(Ne.addVectors(fn.min,Xs.min),fn.expandByPoint(Ne),Ne.addVectors(fn.max,Xs.max),fn.expandByPoint(Ne)):(fn.expandByPoint(Xs.min),fn.expandByPoint(Xs.max))}fn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ne.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ne));if(e)for(let r=0,a=e.length;r<a;r++){let l=e[r],c=this.morphTargetsRelative;for(let o=0,h=l.count;o<h;o++)Ne.fromBufferAttribute(l,o),c&&(cs.fromBufferAttribute(t,o),Ne.add(cs)),s=Math.max(s,i.distanceToSquared(Ne))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let l=[],c=[];for(let _=0;_<i.count;_++)l[_]=new V,c[_]=new V;let o=new V,h=new V,f=new V,u=new ie,d=new ie,g=new ie,v=new V,m=new V;function p(_,T,C){o.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),f.fromBufferAttribute(i,C),u.fromBufferAttribute(r,_),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(o),f.sub(o),d.sub(u),g.sub(u);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(N),l[_].add(v),l[T].add(v),l[C].add(v),c[_].add(m),c[T].add(m),c[C].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let _=0,T=E.length;_<T;++_){let C=E[_],N=C.start,F=C.count;for(let k=N,L=N+F;k<L;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let I=new V,M=new V,b=new V,A=new V;function P(_){b.fromBufferAttribute(s,_),A.copy(b);let T=l[_];I.copy(T),I.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(A,T);let N=M.dot(c[_])<0?-1:1;a.setXYZW(_,I.x,I.y,I.z,N)}for(let _=0,T=E.length;_<T;++_){let C=E[_],N=C.start,F=C.count;for(let k=N,L=N+F;k<L;k+=3)P(t.getX(k+0)),P(t.getX(k+1)),P(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);let s=new V,r=new V,a=new V,l=new V,c=new V,o=new V,h=new V,f=new V;if(t)for(let u=0,d=t.count;u<d;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),l.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),o.fromBufferAttribute(i,m),l.add(h),c.add(h),o.add(h),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,o.x,o.y,o.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ne.fromBufferAttribute(t,e),Ne.normalize(),t.setXYZ(e,Ne.x,Ne.y,Ne.z)}toNonIndexed(){function t(l,c){let o=l.array,h=l.itemSize,f=l.normalized,u=new o.constructor(c.length*h),d=0,g=0;for(let v=0,m=c.length;v<m;v++){l.isInterleavedBufferAttribute?d=c[v]*l.data.stride+l.offset:d=c[v]*h;for(let p=0;p<h;p++)u[g++]=o[d++]}return new rn(u,h,f)}if(this.index===null)return qt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let l in s){let c=s[l],o=t(c,i);e.setAttribute(l,o)}let r=this.morphAttributes;for(let l in r){let c=[],o=r[l];for(let h=0,f=o.length;h<f;h++){let u=o[h],d=t(u,i);c.push(d)}e.morphAttributes[l]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let l=0,c=a.length;l<c;l++){let o=a[l];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let o in c)c[o]!==void 0&&(t[o]=c[o]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let o=i[c];t.data.attributes[c]=o.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let o=this.morphAttributes[c],h=[];for(let f=0,u=o.length;f<u;f++){let d=o[f];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let l=this.boundingSphere;return l!==null&&(t.data.boundingSphere=l.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let o in s){let h=s[o];this.setAttribute(o,h.clone(e))}let r=t.morphAttributes;for(let o in r){let h=[],f=r[o];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[o]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let o=0,h=a.length;o<h;o++){let f=a[o];this.addGroup(f.start,f.count,f.materialIndex)}let l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var sl=new V,Ed=new V,Cd=new Zt,Tn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=sl.subVectors(i,e).cross(Ed.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(sl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Cd.getNormalMatrix(t),s=this.coplanarPoint(sl).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},Rd=0,yi=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=vr(),this.name="",this.type="Material",this.blending=As,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=yl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zr,this.stencilZFail=Zr,this.stencilZPass=Zr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){qt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){qt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let l in r){let c=r[l];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new Tn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var ni=new V,rl=new V,Or=new V,Br=new V,ha=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ni)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ni.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ni.copy(this.origin).addScaledVector(this.direction,e),ni.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){rl.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Br.copy(this.origin).sub(rl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),l=Br.dot(this.direction),c=-Br.dot(Or),o=Br.lengthSq(),h=Math.abs(1-a*a),f,u,d,g;if(h>0)if(f=a*c-l,u=a*l-c,g=r*h,f>=0)if(u>=-g)if(u<=g){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*l)+u*(a*f+u+2*c)+o}else u=r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;else u=-r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;else u<=-g?(f=Math.max(0,-(-a*r+l)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+o):u<=g?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+o):(f=Math.max(0,-(a*r+l)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+o);else u=a>0?-r:r,f=Math.max(0,-(a*u+l)),d=-f*f+u*(u+2*c)+o;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rl).addScaledVector(Or,u),d}intersectSphere(t,e){if(t.radius<0)return null;ni.subVectors(t.center,this.origin);let i=ni.dot(this.direction),s=ni.dot(ni)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,e):this.at(l,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,l,c,o=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return o>=0?(i=(t.min.x-u.x)*o,s=(t.max.x-u.x)*o):(i=(t.max.x-u.x)*o,s=(t.min.x-u.x)*o),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(l=(t.min.z-u.z)*f,c=(t.max.z-u.z)*f):(l=(t.max.z-u.z)*f,c=(t.min.z-u.z)*f),i>c||l>s)||((l>i||i!==i)&&(i=l),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,ni)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,l=this.direction,c=l.x,o=l.y,h=l.z,f=t.x-a.x,u=t.y-a.y,d=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,E=i.y-a.y,I=i.z-a.z,M=Math.abs(c),b=Math.abs(o),A=Math.abs(h),P,_,T,C,N,F,k,L,W,J,H,nt;if(M>=b&&M>=A?(T=c,F=f,W=g,nt=p,c>=0?(P=o,_=h,C=u,N=d,k=v,L=m,J=E,H=I):(P=h,_=o,C=d,N=u,k=m,L=v,J=I,H=E)):b>=A?(T=o,F=u,W=v,nt=E,o>=0?(P=h,_=c,C=d,N=f,k=m,L=g,J=I,H=p):(P=c,_=h,C=f,N=d,k=g,L=m,J=p,H=I)):(T=h,F=d,W=m,nt=I,h>=0?(P=c,_=o,C=f,N=u,k=g,L=v,J=p,H=E):(P=o,_=c,C=u,N=f,k=v,L=g,J=E,H=p)),T===0)return null;let B=P/T,G=_/T,Z=1/T,ut=C-B*F,mt=N-G*F,Xt=k-B*W,Ot=L-G*W,ee=J-B*nt,it=H-G*nt,rt=ee*Ot-it*Xt,St=ut*it-mt*ee,Ht=Xt*mt-Ot*ut;if(s){if(rt<0||St<0||Ht<0)return null}else if((rt<0||St<0||Ht<0)&&(rt>0||St>0||Ht>0))return null;let wt=rt+St+Ht;if(wt===0)return null;let Gt=Z*(rt*F+St*W+Ht*nt);return(wt>0?Gt<0:Gt>0)?null:this.at(Gt/wt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Mi=class extends yi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Kc=new Se,Bi=new ha,kr=new ys,jc=new V,zr=new V,Vr=new V,Hr=new V,al=new V,Gr=new V,Qc=new V,Wr=new V,le=class extends Ue{constructor(t=new on,e=new Mi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let l=this.morphTargetInfluences;if(r&&l){Gr.set(0,0,0);for(let c=0,o=r.length;c<o;c++){let h=l[c],f=r[c];h!==0&&(al.fromBufferAttribute(f,t),a?Gr.addScaledVector(al,h):Gr.addScaledVector(al.sub(e),h))}e.add(Gr)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(r),Bi.copy(t.ray).recast(t.near),!(kr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(kr,jc)===null||Bi.origin.distanceToSquared(jc)>(t.far-t.near)**2))&&(Kc.copy(r).invert(),Bi.copy(t.ray).applyMatrix4(Kc),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,l=r.index,c=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),I=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,b=I;M<b;M+=3){let A=l.getX(M),P=l.getX(M+1),_=l.getX(M+2);s=Xr(this,p,t,i,o,h,f,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let E=l.getX(m),I=l.getX(m+1),M=l.getX(m+2);s=Xr(this,a,t,i,o,h,f,E,I,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],E=Math.max(m.start,d.start),I=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,b=I;M<b;M+=3){let A=M,P=M+1,_=M+2;s=Xr(this,p,t,i,o,h,f,A,P,_),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(c.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let E=m,I=m+1,M=m+2;s=Xr(this,a,t,i,o,h,f,E,I,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Pd(n,t,e,i,s,r,a,l){let c;if(t.side===en?c=i.intersectTriangle(a,r,s,!0,l):c=i.intersectTriangle(s,r,a,t.side===Ci,l),c===null)return null;Wr.copy(l),Wr.applyMatrix4(n.matrixWorld);let o=e.ray.origin.distanceTo(Wr);return o<e.near||o>e.far?null:{distance:o,point:Wr.clone(),object:n}}function Xr(n,t,e,i,s,r,a,l,c,o){n.getVertexPosition(l,zr),n.getVertexPosition(c,Vr),n.getVertexPosition(o,Hr);let h=Pd(n,t,e,i,zr,Vr,Hr,Qc);if(h){let f=new V;_i.getBarycoord(Qc,zr,Vr,Hr,f),s&&(h.uv=_i.getInterpolatedAttribute(s,l,c,o,f,new ie)),r&&(h.uv1=_i.getInterpolatedAttribute(r,l,c,o,f,new ie)),a&&(h.normal=_i.getInterpolatedAttribute(a,l,c,o,f,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:l,b:c,c:o,normal:new V,materialIndex:0};_i.getNormal(zr,Vr,Hr,u.normal),h.face=u,h.barycoord=f}return h}var ua=class extends je{constructor(t=null,e=1,i=1,s,r,a,l,c,o=De,h=De,f,u){super(null,a,l,c,o,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ki=new ys,Id=new ie(.5,.5),qr=new V,Ms=class{constructor(t=new Tn,e=new Tn,i=new Tn,s=new Tn,r=new Tn,a=new Tn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=An,i=!1){let s=this.planes,r=t.elements,a=r[0],l=r[1],c=r[2],o=r[3],h=r[4],f=r[5],u=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],E=r[12],I=r[13],M=r[14],b=r[15];if(s[0].setComponents(o-a,d-h,p-g,b-E).normalize(),s[1].setComponents(o+a,d+h,p+g,b+E).normalize(),s[2].setComponents(o+l,d+f,p+v,b+I).normalize(),s[3].setComponents(o-l,d-f,p-v,b-I).normalize(),i)s[4].setComponents(c,u,m,M).normalize(),s[5].setComponents(o-c,d-u,p-m,b-M).normalize();else if(s[4].setComponents(o-c,d-u,p-m,b-M).normalize(),e===An)s[5].setComponents(o+c,d+u,p+m,b+M).normalize();else if(e===gs)s[5].setComponents(c,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(t){ki.center.set(0,0,0);let e=Id.distanceTo(t.center);return ki.radius=.7071067811865476+e,ki.applyMatrix4(t.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(qr.x=s.normal.x>0?t.max.x:t.min.x,qr.y=s.normal.y>0?t.max.y:t.min.y,qr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(qr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var er=class extends je{constructor(t=[],e=Ri,i,s,r,a,l,c,o,h){super(t,e,i,s,r,a,l,c,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},nr=class extends je{constructor(t,e,i,s,r,a,l,c,o){super(t,e,i,s,r,a,l,c,o),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Si=class extends je{constructor(t,e,i=Pn,s,r,a,l=De,c=De,o,h=kn,f=1){if(h!==kn&&h!==Ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:f};super(u,s,r,a,l,c,h,i,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},da=class extends Si{constructor(t,e=Pn,i=Ri,s,r,a=De,l=De,c,o=kn){let h={width:t,height:t,depth:1},f=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,l,c,o),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ir=class extends je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Qe=class n extends on{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],o=[],h=[],f=[],u=0,d=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new we(o,3)),this.setAttribute("normal",new we(h,3)),this.setAttribute("uv",new we(f,2));function g(v,m,p,E,I,M,b,A,P,_,T){let C=M/P,N=b/_,F=M/2,k=b/2,L=A/2,W=P+1,J=_+1,H=0,nt=0,B=new V;for(let G=0;G<J;G++){let Z=G*N-k;for(let ut=0;ut<W;ut++){let mt=ut*C-F;B[v]=mt*E,B[m]=Z*I,B[p]=L,o.push(B.x,B.y,B.z),B[v]=0,B[m]=0,B[p]=A>0?1:-1,h.push(B.x,B.y,B.z),f.push(ut/P),f.push(1-G/_),H+=1}}for(let G=0;G<_;G++)for(let Z=0;Z<P;Z++){let ut=u+Z+W*G,mt=u+Z+W*(G+1),Xt=u+(Z+1)+W*(G+1),Ot=u+(Z+1)+W*G;c.push(ut,mt,Ot),c.push(mt,Xt,Ot),nt+=6}l.addGroup(d,nt,T),d+=nt,u+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},bi=class n extends on{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],l=[],c=[],o=[],h=e/2,f=Math.PI/2*t,u=e,d=2*f+u,g=i*2+r,v=s+1,m=new V,p=new V;for(let E=0;E<=g;E++){let I=0,M=0,b=0,A=0;if(E<=i){let T=E/i,C=T*Math.PI/2;M=-h-t*Math.cos(C),b=t*Math.sin(C),A=-t*Math.cos(C),I=T*f}else if(E<=i+r){let T=(E-i)/r;M=-h+T*e,b=t,A=0,I=f+T*u}else{let T=(E-i-r)/i,C=T*Math.PI/2;M=h+t*Math.sin(C),b=t*Math.cos(C),A=t*Math.sin(C),I=f+u+T*f}let P=Math.max(0,Math.min(1,I/d)),_=0;E===0?_=.5/s:E===g&&(_=-.5/s);for(let T=0;T<=s;T++){let C=T/s,N=C*Math.PI*2,F=Math.sin(N),k=Math.cos(N);p.x=-b*k,p.y=M,p.z=b*F,l.push(p.x,p.y,p.z),m.set(-b*k,A,b*F),m.normalize(),c.push(m.x,m.y,m.z),o.push(C+_,P)}if(E>0){let T=(E-1)*v;for(let C=0;C<s;C++){let N=T+C,F=T+C+1,k=E*v+C,L=E*v+C+1;a.push(N,F,k),a.push(F,L,k)}}}this.setIndex(a),this.setAttribute("position",new we(l,3)),this.setAttribute("normal",new we(c,3)),this.setAttribute("uv",new we(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}};var Ss=class n extends on{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,l=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:c};let o=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],g=0,v=[],m=i/2,p=0;E(),a===!1&&(t>0&&I(!0),e>0&&I(!1)),this.setIndex(h),this.setAttribute("position",new we(f,3)),this.setAttribute("normal",new we(u,3)),this.setAttribute("uv",new we(d,2));function E(){let M=new V,b=new V,A=0,P=(e-t)/i;for(let _=0;_<=r;_++){let T=[],C=_/r,N=C*(e-t)+t;for(let F=0;F<=s;F++){let k=F/s,L=k*c+l,W=Math.sin(L),J=Math.cos(L);b.x=N*W,b.y=-C*i+m,b.z=N*J,f.push(b.x,b.y,b.z),M.set(W,P,J).normalize(),u.push(M.x,M.y,M.z),d.push(k,1-C),T.push(g++)}v.push(T)}for(let _=0;_<s;_++)for(let T=0;T<r;T++){let C=v[T][_],N=v[T+1][_],F=v[T+1][_+1],k=v[T][_+1];(t>0||T!==0)&&(h.push(C,N,k),A+=3),(e>0||T!==r-1)&&(h.push(N,F,k),A+=3)}o.addGroup(p,A,0),p+=A}function I(M){let b=g,A=new ie,P=new V,_=0,T=M===!0?t:e,C=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*C,0),u.push(0,C,0),d.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let L=F/s*c+l,W=Math.cos(L),J=Math.sin(L);P.x=T*J,P.y=m*C,P.z=T*W,f.push(P.x,P.y,P.z),u.push(0,C,0),A.x=W*.5+.5,A.y=J*.5*C+.5,d.push(A.x,A.y),g++}for(let F=0;F<s;F++){let k=b+F,L=N+F;M===!0?h.push(L,L+1,k):h.push(L+1,L,k),_+=3}o.addGroup(p,_,M===!0?1:2),p+=_}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var wi=class n extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,l=Math.floor(i),c=Math.floor(s),o=l+1,h=c+1,f=t/l,u=e/c,d=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let E=p*u-a;for(let I=0;I<o;I++){let M=I*f-r;g.push(M,-E,0),v.push(0,0,1),m.push(I/l),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let E=0;E<l;E++){let I=E+o*p,M=E+o*(p+1),b=E+1+o*(p+1),A=E+1+o*p;d.push(I,M,A),d.push(M,b,A)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},sr=class n extends on{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let l=[],c=[],o=[],h=[],f=t,u=(e-t)/s,d=new V,g=new ie;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),c.push(d.x,d.y,d.z),o.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}f+=u}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let E=p+m,I=E,M=E+i+1,b=E+i+2,A=E+1;l.push(I,M,A),l.push(M,b,A)}}this.setIndex(l),this.setAttribute("position",new we(c,3)),this.setAttribute("normal",new we(o,3)),this.setAttribute("uv",new we(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Vi=class n extends on{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(a+l,Math.PI),o=0,h=[],f=new V,u=new V,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let E=[],I=p/i,M=a+I*l,b=t*Math.cos(M),A=Math.sqrt(t*t-b*b),P=0;p===0&&a===0?P=.5/e:p===i&&c===Math.PI&&(P=-.5/e);for(let _=0;_<=e;_++){let T=_/e,C=s+T*r;f.x=-A*Math.cos(C),f.y=b,f.z=A*Math.sin(C),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),m.push(T+P,1-I),E.push(o++)}h.push(E)}for(let p=0;p<i;p++)for(let E=0;E<e;E++){let I=h[p][E+1],M=h[p][E],b=h[p+1][E],A=h[p+1][E+1];(p!==0||a>0)&&d.push(I,M,A),(p!==i-1||c<Math.PI)&&d.push(M,b,A)}this.setIndex(d),this.setAttribute("position",new we(g,3)),this.setAttribute("normal",new we(v,3)),this.setAttribute("uv",new we(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Xi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(th(s))s.isRenderTargetTexture?(qt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(th(s[0])){let r=[];for(let a=0,l=s.length;a<l;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ye(n){let t={};for(let e=0;e<n.length;e++){let i=Xi(n[e]);for(let s in i)t[s]=i[s]}return t}function th(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Ld(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Bl(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var Xh={clone:Xi,merge:Ye},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tn=class extends yi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Ld(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new Kt().setHex(s.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[i].value=new V().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Te().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Se().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},fa=class extends tn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pn=class extends yi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Kt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Kt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=go,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var pa=class extends yi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ph,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ma=class extends yi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function hs(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function ol(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Ti=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let l=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===l)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let l=e[1];t<l&&(i=2,r=l);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let l=i+a>>>1;t<e[l]?a=l:i=l+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ga=class extends Ti{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:hl,endingEnd:hl}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,l=s[r],c=s[a];if(l===void 0)switch(this.getSettings_().endingStart){case ul:r=t,l=2*e-i;break;case dl:r=s.length-2,l=e+s[r]-s[r+1];break;default:r=t,l=i}if(c===void 0)switch(this.getSettings_().endingEnd){case ul:a=t,c=2*i-e;break;case dl:a=1,c=i+s[1]-s[0];break;default:a=t-1,c=e}let o=(i-e)*.5,h=this.valueSize;this._weightPrev=o/(e-l),this._weightNext=o/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,E=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,I=(-1-d)*m+(1.5+d)*v+.5*g,M=d*m-d*v;for(let b=0;b!==l;++b)r[b]=p*a[h+b]+E*a[o+b]+I*a[c+b]+M*a[f+b];return r}},xa=class extends Ti{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=(i-e)/(s-e),f=1-h;for(let u=0;u!==l;++u)r[u]=a[o+u]*f+a[c+u]*h;return r}},_a=class extends Ti{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},va=class extends Ti{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=t*l,o=c-l,h=this.inTangents,f=this.outTangents;if(!h||!f){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==l;++m)r[m]=a[o+m]*v+a[c+m]*g;return r}let u=l*2,d=t-1;for(let g=0;g!==l;++g){let v=a[o+g],m=a[c+g],p=d*u+g*2,E=f[p],I=f[p+1],M=t*u+g*2,b=h[M],A=h[M+1],P=Fd(i,e,E,b,s);r[g]=qh(P,v,I,A,m)}return r}};function qh(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Ud(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Fd(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let l=qh(r,t,e,i,s)-n;if(Math.abs(l)<1e-10)break;let c=Ud(r,t,e,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-l/c))}return r}var mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=hs(e,this.TimeBufferType),this.values=hs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:hs(t.times,Array),values:hs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),ol(t.settings)&&(i.settings={inTangents:hs(t.settings.inTangents,Array),outTangents:hs(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new _a(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new xa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ga(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new va(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case qs:e=this.InterpolantFactoryMethodDiscrete;break;case ra:e=this.InterpolantFactoryMethodLinear;break;case Jr:e=this.InterpolantFactoryMethodSmooth;break;case cl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return qt("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qs;case this.InterpolantFactoryMethodLinear:return ra;case this.InterpolantFactoryMethodSmooth:return Jr;case this.InterpolantFactoryMethodBezier:return cl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;ol(this.settings)&&(eh(this.settings.inTangents,t),eh(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let l=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*l,a*l)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let l=0;l!==r;l++){let c=i[l];if(typeof c=="number"&&isNaN(c)){Yt("KeyframeTrack: Time is not a valid number.",this,l,c),t=!1;break}if(a!==null&&a>c){Yt("KeyframeTrack: Out of order keys.",this,l,c,a),t=!1;break}a=c}if(s!==void 0&&dd(s))for(let l=0,c=s.length;l!==c;++l){let o=s[l];if(isNaN(o)){Yt("KeyframeTrack: Value is not a valid number.",this,l,o),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Jr,r=t.length-1,a=1;for(let l=1;l<r;++l){let c=!1,o=t[l],h=t[l+1];if(o!==h&&(l!==1||o!==t[0]))if(s)c=!0;else{let f=l*i,u=f-i,d=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[u+g]||v!==e[d+g]){c=!0;break}}}if(c){if(l!==a){t[a]=t[l];let f=l*i,u=a*i;for(let d=0;d!==i;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let l=r*i,c=a*i,o=0;o!==i;++o)e[c+o]=e[l+o];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,ol(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function eh(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}mn.prototype.ValueTypeName="";mn.prototype.TimeBufferType=Float32Array;mn.prototype.ValueBufferType=Float32Array;mn.prototype.DefaultInterpolation=ra;var Ai=class extends mn{constructor(t,e,i){super(t,e,i)}};Ai.prototype.ValueTypeName="bool";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=qs;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};ya.prototype.ValueTypeName="color";var Ma=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};Ma.prototype.ValueTypeName="number";var Sa=class extends Ti{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,l=this.valueSize,c=(i-e)/(s-e),o=t*l;for(let h=o+l;o!==h;o+=4)qe.slerpFlat(r,0,a,o-l,a,o,c);return r}},rr=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new Sa(this.times,this.values,this.getValueSize(),t)}};rr.prototype.ValueTypeName="quaternion";rr.prototype.InterpolantFactoryMethodSmooth=void 0;var Ei=class extends mn{constructor(t,e,i){super(t,e,i)}};Ei.prototype.ValueTypeName="string";Ei.prototype.ValueBufferType=Array;Ei.prototype.DefaultInterpolation=qs;Ei.prototype.InterpolantFactoryMethodLinear=void 0;Ei.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends mn{constructor(t,e,i,s){super(t,e,i,s)}};ba.prototype.ValueTypeName="vector";var wa=class{constructor(t,e,i){let s=this,r=!1,a=0,l=0,c,o=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){l++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,l),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,l),a===l&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return o.push(h,f),this},this.removeHandler=function(h){let f=o.indexOf(h);return f!==-1&&o.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=o.length;f<u;f+=2){let d=o[f],g=o[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Yh=new wa,Ta=class{constructor(t){this.manager=t!==void 0?t:Yh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ta.DEFAULT_MATERIAL_NAME="__DEFAULT";var ar=class extends Ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},or=class extends ar{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Kt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ll=new Se,nh=new V,ih=new V,Aa=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new Se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){ll.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(ll,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,l=s?s.w/r.y:1,c=s?s.x/r.x:0,o=s?s.y/r.y:0;t.coordinateSystem===gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+o,0,0,.5,.5,0,0,0,1),e.multiply(ll)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Yr=new V,$r=new qe,On=new V,lr=class extends Ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Se,this.projectionMatrix=new Se,this.projectionMatrixInverse=new Se,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Yr,$r,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,On.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Yr,$r,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Yr,$r,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},xi=new V,sh=new ie,rh=new ie,Xe=class extends lr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=aa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(xi.x,xi.y).multiplyScalar(-t/xi.z),xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(xi.x,xi.y).multiplyScalar(-t/xi.z)}getViewSize(t,e){return this.getViewBounds(t,sh,rh),e.subVectors(rh,sh)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,o=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*i/o,s*=a.width/c,i*=a.height/o}let l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var bs=class extends lr{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,l=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,a=r+o*this.view.width,l-=h*this.view.offsetY,c=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fl=class extends Aa{constructor(){super(new bs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ws=class extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ue.DEFAULT_UP),this.updateMatrix(),this.target=new Ue,this.shadow=new fl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var us=-90,ds=1,Ea=class extends Ue{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xe(us,ds,t,e);s.layers=this.layers,this.add(s);let r=new Xe(us,ds,t,e);r.layers=this.layers,this.add(r);let a=new Xe(us,ds,t,e);a.layers=this.layers,this.add(a);let l=new Xe(us,ds,t,e);l.layers=this.layers,this.add(l);let c=new Xe(us,ds,t,e);c.layers=this.layers,this.add(c);let o=new Xe(us,ds,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,l,c]=e;for(let o of e)this.remove(o);if(t===An)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===gs)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,l,c,o,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ca=class extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var kl="\\[\\]\\.:\\/",Od=new RegExp("["+kl+"]","g"),zl="[^"+kl+"]",Bd="[^"+kl.replace("\\.","")+"]",kd=/((?:WC+[\/:])*)/.source.replace("WC",zl),zd=/(WCOD+)?/.source.replace("WCOD",Bd),Vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Hd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),Gd=new RegExp("^"+kd+zd+Vd+Hd+"$"),Wd=["material","materials","bones","map"],pl=class{constructor(t,e,i){let s=i||Me.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},Me=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Od,"")}static parseTrackName(t){let e=Gd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Wd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let l=r[a];if(l.name===e||l.uuid===e)return l;let c=i(l.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){qt("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let o=e.objectIndex;switch(i){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===o){o=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(o!==void 0){if(t[o]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[o]}}let a=t[s];if(a===void 0){let o=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+o+"."+s+" but it wasn't found.",t);return}let l=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?l=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(l=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][l]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Me.Composite=pl;Me.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Me.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Me.prototype.GetterByBindingType=[Me.prototype._getValue_direct,Me.prototype._getValue_array,Me.prototype._getValue_arrayElement,Me.prototype._getValue_toArray];Me.prototype.SetterByBindingTypeAndVersioning=[[Me.prototype._setValue_direct,Me.prototype._setValue_direct_setNeedsUpdate,Me.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_array,Me.prototype._setValue_array_setNeedsUpdate,Me.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_arrayElement,Me.prototype._setValue_arrayElement_setNeedsUpdate,Me.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Me.prototype._setValue_fromArray,Me.prototype._setValue_fromArray_setNeedsUpdate,Me.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ux=new Float32Array(1);var ql=class ql{constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};ql.prototype.isMatrix2=!0;var ml=ql;function Vl(n,t,e,i){let s=Xd(i);switch(e){case Nl:return n*t;case Ul:return n*t/s.components*s.byteLength;case Fa:return n*t/s.components*s.byteLength;case Li:return n*t*2/s.components*s.byteLength;case Oa:return n*t*2/s.components*s.byteLength;case Dl:return n*t*3/s.components*s.byteLength;case _n:return n*t*4/s.components*s.byteLength;case Ba:return n*t*4/s.components*s.byteLength;case fr:case pr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case mr:case gr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case za:case Ha:return Math.max(n,16)*Math.max(t,8)/4;case ka:case Va:return Math.max(n,8)*Math.max(t,8)/2;case Ga:case Wa:case qa:case Ya:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xa:case xr:case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ka:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case ja:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Qa:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case to:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case eo:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case no:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case io:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case so:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ro:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ao:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oo:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case lo:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case co:case ho:case uo:return Math.ceil(n/4)*Math.ceil(t/4)*16;case fo:case po:return Math.ceil(n/4)*Math.ceil(t/4)*8;case _r:case mo:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xd(n){switch(n){case ln:case Rl:return{byteLength:1,components:1};case Es:case Pl:case Ln:return{byteLength:2,components:1};case Da:case Ua:return{byteLength:2,components:4};case Pn:case Na:case In:return{byteLength:4,components:1};case Il:case Ll:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?qt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function mu(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Yd(n){let t=new WeakMap;function e(l,c){let o=l.array,h=l.usage,f=o.byteLength,u=n.createBuffer();n.bindBuffer(c,u),n.bufferData(c,o,h),l.onUploadCallback();let d;if(o instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)d=n.HALF_FLOAT;else if(o instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)d=n.SHORT;else if(o instanceof Uint32Array)d=n.UNSIGNED_INT;else if(o instanceof Int32Array)d=n.INT;else if(o instanceof Int8Array)d=n.BYTE;else if(o instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:u,type:d,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:f}}function i(l,c,o){let h=c.array,f=c.updateRanges;if(n.bindBuffer(o,l),f.length===0)n.bufferSubData(o,0,h);else{f.sort((d,g)=>d.start-g.start);let u=0;for(let d=1;d<f.length;d++){let g=f[u],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(o,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);let c=t.get(l);c&&(n.deleteBuffer(c.buffer),t.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){let h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}let o=t.get(l);if(o===void 0)t.set(l,e(l,c));else if(o.version<l.version){if(o.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(o.buffer,l,c),o.version=l.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tf=`#ifdef USE_AOMAP
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
#endif`,ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nf=`#ifdef USE_BATCHING
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
#endif`,sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,of=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lf=`#ifdef USE_IRIDESCENCE
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
#endif`,cf=`#ifdef USE_BUMPMAP
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
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ff=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,_f=`#define PI 3.141592653589793
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
} // validated`,vf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yf=`vec3 transformedNormal = objectNormal;
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
#endif`,Mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
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
#endif`,Lf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Nf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Df=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Uf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ff=`#ifdef USE_GRADIENTMAP
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
}`,Of=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Vf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qf=`PhysicalMaterial material;
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
#endif`,Yf=`uniform sampler2D dfgLUT;
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
}`,$f=`
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,jf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,ap=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`#ifdef USE_MORPHTARGETS
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
#endif`,dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,_p=`#ifdef USE_NORMALMAP
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
#endif`,vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ip=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Np=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dp=`float getShadowMask() {
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
}`,Up=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bp=`#ifdef USE_SKINNING
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
#endif`,kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Vp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$p=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Zp=`uniform sampler2D t2D;
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`#include <common>
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
}`,nm=`#if DEPTH_PACKING == 3200
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
}`,im=`#define DISTANCE
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
}`,sm=`#define DISTANCE
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
}`,rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#include <common>
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
}`,hm=`uniform vec3 diffuse;
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
}`,um=`#define LAMBERT
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
}`,dm=`#define LAMBERT
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
}`,fm=`#define MATCAP
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
}`,pm=`#define MATCAP
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
}`,mm=`#define NORMAL
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
}`,gm=`#define NORMAL
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
}`,xm=`#define PHONG
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
}`,_m=`#define PHONG
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
}`,vm=`#define STANDARD
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
}`,ym=`#define STANDARD
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
}`,Mm=`#define TOON
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
}`,Sm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,wm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 color;
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
}`,Em=`uniform float rotation;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:$d,alphahash_pars_fragment:Jd,alphamap_fragment:Zd,alphamap_pars_fragment:Kd,alphatest_fragment:jd,alphatest_pars_fragment:Qd,aomap_fragment:tf,aomap_pars_fragment:ef,batching_pars_vertex:nf,batching_vertex:sf,begin_vertex:rf,beginnormal_vertex:af,bsdfs:of,iridescence_fragment:lf,bumpmap_pars_fragment:cf,clipping_planes_fragment:hf,clipping_planes_pars_fragment:uf,clipping_planes_pars_vertex:df,clipping_planes_vertex:ff,color_fragment:pf,color_pars_fragment:mf,color_pars_vertex:gf,color_vertex:xf,common:_f,cube_uv_reflection_fragment:vf,defaultnormal_vertex:yf,displacementmap_pars_vertex:Mf,displacementmap_vertex:Sf,emissivemap_fragment:bf,emissivemap_pars_fragment:wf,colorspace_fragment:Tf,colorspace_pars_fragment:Af,envmap_fragment:Ef,envmap_common_pars_fragment:Cf,envmap_pars_fragment:Rf,envmap_pars_vertex:Pf,envmap_physical_pars_fragment:Vf,envmap_vertex:If,fog_vertex:Lf,fog_pars_vertex:Nf,fog_fragment:Df,fog_pars_fragment:Uf,gradientmap_pars_fragment:Ff,lightmap_pars_fragment:Of,lights_lambert_fragment:Bf,lights_lambert_pars_fragment:kf,lights_pars_begin:zf,lights_toon_fragment:Hf,lights_toon_pars_fragment:Gf,lights_phong_fragment:Wf,lights_phong_pars_fragment:Xf,lights_physical_fragment:qf,lights_physical_pars_fragment:Yf,lights_fragment_begin:$f,lights_fragment_maps:Jf,lights_fragment_end:Zf,lightprobes_pars_fragment:Kf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:Qf,logdepthbuf_pars_vertex:tp,logdepthbuf_vertex:ep,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:sp,map_particle_pars_fragment:rp,metalnessmap_fragment:ap,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:hp,morphtarget_pars_vertex:up,morphtarget_vertex:dp,normal_fragment_begin:fp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:xp,normalmap_pars_fragment:_p,clearcoat_normal_fragment_begin:vp,clearcoat_normal_fragment_maps:yp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ap,dithering_fragment:Ep,dithering_pars_fragment:Cp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Ip,shadowmap_pars_vertex:Lp,shadowmap_vertex:Np,shadowmask_pars_fragment:Dp,skinbase_vertex:Up,skinning_pars_vertex:Fp,skinning_vertex:Op,skinnormal_vertex:Bp,specularmap_fragment:kp,specularmap_pars_fragment:zp,tonemapping_fragment:Vp,tonemapping_pars_fragment:Hp,transmission_fragment:Gp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:qp,uv_vertex:Yp,worldpos_vertex:$p,background_vert:Jp,background_frag:Zp,backgroundCube_vert:Kp,backgroundCube_frag:jp,cube_vert:Qp,cube_frag:tm,depth_vert:em,depth_frag:nm,distance_vert:im,distance_frag:sm,equirect_vert:rm,equirect_frag:am,linedashed_vert:om,linedashed_frag:lm,meshbasic_vert:cm,meshbasic_frag:hm,meshlambert_vert:um,meshlambert_frag:dm,meshmatcap_vert:fm,meshmatcap_frag:pm,meshnormal_vert:mm,meshnormal_frag:gm,meshphong_vert:xm,meshphong_frag:_m,meshphysical_vert:vm,meshphysical_frag:ym,meshtoon_vert:Mm,meshtoon_frag:Sm,points_vert:bm,points_frag:wm,shadow_vert:Tm,shadow_frag:Am,sprite_vert:Em,sprite_frag:Cm},bt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},Gn={basic:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:Ye([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:Ye([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:Ye([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:Ye([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:Ye([bt.points,bt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:Ye([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:Ye([bt.common,bt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:Ye([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:Ye([bt.sprite,bt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distance:{uniforms:Ye([bt.common,bt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distance_vert,fragmentShader:te.distance_frag},shadow:{uniforms:Ye([bt.lights,bt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Gn.physical={uniforms:Ye([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};var vo={r:0,b:0,g:0},Rm=new Se,gu=new Zt;gu.set(-1,0,0,0,1,0,0,0,1);function Pm(n,t,e,i,s,r){let a=new Kt(0),l=s===!0?0:1,c,o,h=null,f=0,u=null;function d(E){let I=E.isScene===!0?E.background:null;if(I&&I.isTexture){let M=E.backgroundBlurriness>0;I=t.get(I,M)}return I}function g(E){let I=!1,M=d(E);M===null?m(a,l):M&&M.isColor&&(m(M,1),I=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||I)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(E,I){let M=d(I);M&&(M.isCubeTexture||M.mapping===ur)?(o===void 0&&(o=new le(new Qe(1,1,1),new tn({name:"BackgroundCubeMaterial",uniforms:Xi(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(b,A,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),o.material.uniforms.envMap.value=M,o.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Rm.makeRotationFromEuler(I.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&o.material.uniforms.backgroundRotation.value.premultiply(gu),o.material.toneMapped=se.getTransfer(M.colorSpace)!==pe,(h!==M||f!==M.version||u!==n.toneMapping)&&(o.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),o.layers.enableAll(),E.unshift(o,o.geometry,o.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new le(new wi(2,2),new tn({name:"BackgroundMaterial",uniforms:Xi(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,c.material.toneMapped=se.getTransfer(M.colorSpace)!==pe,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=M,f=M.version,u=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function m(E,I){E.getRGB(vo,Bl(n)),e.buffers.color.setClear(vo.r,vo.g,vo.b,I,r)}function p(){o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,I=1){a.set(E),l=I,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,m(a,l)},render:g,addToRenderList:v,dispose:p}}function Im(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function l(N,F,k,L,W){let J=!1,H=f(N,L,k,F);r!==H&&(r=H,o(r.object)),J=d(N,L,k,W),J&&g(N,L,k,W),W!==null&&t.update(W,n.ELEMENT_ARRAY_BUFFER),(J||a)&&(a=!1,M(N,F,k,L),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return n.createVertexArray()}function o(N){return n.bindVertexArray(N)}function h(N){return n.deleteVertexArray(N)}function f(N,F,k,L){let W=L.wireframe===!0,J=i[F.id];J===void 0&&(J={},i[F.id]=J);let H=N.isInstancedMesh===!0?N.id:0,nt=J[H];nt===void 0&&(nt={},J[H]=nt);let B=nt[k.id];B===void 0&&(B={},nt[k.id]=B);let G=B[W];return G===void 0&&(G=u(c()),B[W]=G),G}function u(N){let F=[],k=[],L=[];for(let W=0;W<e;W++)F[W]=0,k[W]=0,L[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:L,object:N,attributes:{},index:null}}function d(N,F,k,L){let W=r.attributes,J=F.attributes,H=0,nt=k.getAttributes();for(let B in nt)if(nt[B].location>=0){let Z=W[B],ut=J[B];if(ut===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),Z===void 0||Z.attribute!==ut||ut&&Z.data!==ut.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(N,F,k,L){let W={},J=F.attributes,H=0,nt=k.getAttributes();for(let B in nt)if(nt[B].location>=0){let Z=J[B];Z===void 0&&(B==="instanceMatrix"&&N.instanceMatrix&&(Z=N.instanceMatrix),B==="instanceColor"&&N.instanceColor&&(Z=N.instanceColor));let ut={};ut.attribute=Z,Z&&Z.data&&(ut.data=Z.data),W[B]=ut,H++}r.attributes=W,r.attributesNum=H,r.index=L}function v(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let k=r.newAttributes,L=r.enabledAttributes,W=r.attributeDivisors;k[N]=1,L[N]===0&&(n.enableVertexAttribArray(N),L[N]=1),W[N]!==F&&(n.vertexAttribDivisor(N,F),W[N]=F)}function E(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,L=F.length;k<L;k++)F[k]!==N[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function I(N,F,k,L,W,J,H){H===!0?n.vertexAttribIPointer(N,F,k,W,J):n.vertexAttribPointer(N,F,k,L,W,J)}function M(N,F,k,L){v();let W=L.attributes,J=k.getAttributes(),H=F.defaultAttributeValues;for(let nt in J){let B=J[nt];if(B.location>=0){let G=W[nt];if(G===void 0&&(nt==="instanceMatrix"&&N.instanceMatrix&&(G=N.instanceMatrix),nt==="instanceColor"&&N.instanceColor&&(G=N.instanceColor)),G!==void 0){let Z=G.normalized,ut=G.itemSize,mt=t.get(G);if(mt===void 0)continue;let Xt=mt.buffer,Ot=mt.type,ee=mt.bytesPerElement,it=Ot===n.INT||Ot===n.UNSIGNED_INT||G.gpuType===Na;if(G.isInterleavedBufferAttribute){let rt=G.data,St=rt.stride,Ht=G.offset;if(rt.isInstancedInterleavedBuffer){for(let wt=0;wt<B.locationSize;wt++)p(B.location+wt,rt.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let wt=0;wt<B.locationSize;wt++)m(B.location+wt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let wt=0;wt<B.locationSize;wt++)I(B.location+wt,ut/B.locationSize,Ot,Z,St*ee,(Ht+ut/B.locationSize*wt)*ee,it)}else{if(G.isInstancedBufferAttribute){for(let rt=0;rt<B.locationSize;rt++)p(B.location+rt,G.meshPerAttribute);N.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let rt=0;rt<B.locationSize;rt++)m(B.location+rt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let rt=0;rt<B.locationSize;rt++)I(B.location+rt,ut/B.locationSize,Ot,Z,ut*ee,ut/B.locationSize*rt*ee,it)}}else if(H!==void 0){let Z=H[nt];if(Z!==void 0)switch(Z.length){case 2:n.vertexAttrib2fv(B.location,Z);break;case 3:n.vertexAttrib3fv(B.location,Z);break;case 4:n.vertexAttrib4fv(B.location,Z);break;default:n.vertexAttrib1fv(B.location,Z)}}}}E()}function b(){T();for(let N in i){let F=i[N];for(let k in F){let L=F[k];for(let W in L){let J=L[W];for(let H in J)h(J[H].object),delete J[H];delete L[W]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let k in F){let L=F[k];for(let W in L){let J=L[W];for(let H in J)h(J[H].object),delete J[H];delete L[W]}}delete i[N.id]}function P(N){for(let F in i){let k=i[F];for(let L in k){let W=k[L];if(W[N.id]===void 0)continue;let J=W[N.id];for(let H in J)h(J[H].object),delete J[H];delete W[N.id]}}}function _(N){for(let F in i){let k=i[F],L=N.isInstancedMesh===!0?N.id:0,W=k[L];if(W!==void 0){for(let J in W){let H=W[J];for(let nt in H)h(H[nt].object),delete H[nt];delete W[J]}delete k[L],Object.keys(k).length===0&&delete i[F]}}}function T(){C(),a=!0,r!==s&&(r=s,o(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:T,resetDefaultState:C,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function Lm(n,t,e){let i;function s(c){i=c}function r(c,o){n.drawArrays(i,c,o),e.update(o,i,1)}function a(c,o,h){h!==0&&(n.drawArraysInstanced(i,c,o,h),e.update(o,i,h))}function l(c,o,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,o,0,h);let u=0;for(let d=0;d<h;d++)u+=o[d];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l}function Nm(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==_n&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(P){let _=P===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==ln&&P!==In&&!_&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp",h=c(o);h!==o&&(qt("WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);let f=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&qt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),E=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),I=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),A=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:o,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:I,maxFragmentUniforms:M,maxSamples:b,samples:A}}function Dm(n){let t=this,e=null,i=0,s=!1,r=!1,a=new Tn,l=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||i!==0||s;return s=u,i=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):o();else{let E=r?0:i,I=E*4,M=p.clippingState||null;c.value=M,M=h(g,u,I,d);for(let b=0;b!==I;++b)M[b]=e[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function o(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,u,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=d+v*4,E=u.matrixWorldInverse;l.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let I=0,M=d;I!==v;++I,M+=4)a.copy(f[I]).applyMatrix4(E,l),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}var Ps=4,Um=6,Fm=20,Om=256,yr=new bs,$h=new Kt,Yl=null,$l=0,Jl=0,Zl=!1,Bm=new V,qi=new V,Mo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:l=Bm}=r;Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,i,s,c,l),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Yl,$l,Jl),this._renderer.xr.enabled=Zl,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ri||t.mapping===Wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),Zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Be,minFilter:Be,generateMipmaps:!1,type:Ln,format:_n,colorSpace:Ys,depthBuffer:!1},s=Jh(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jh(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=km(r)),this._blurMaterial=Vm(r,t,e),this._ggxMaterial=zm(r,t,e)}return s}_compileMaterial(t){let e=new le(new on,t);this._renderer.compile(e,yr)}_sceneToCubeUV(t,e,i,s,r){let c=new Xe(90,1,e,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,d=f.toneMapping;f.getClearColor($h),f.toneMapping=Rn,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new le(new Qe,new Mi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,E=t.background;E?E.isColor&&(m.color.copy(E),t.background=null,p=!0):(m.color.copy($h),p=!0);for(let I=0;I<6;I++){let M=I%3;M===0?(c.up.set(0,o[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[I],r.y,r.z)):M===1?(c.up.set(0,0,o[I]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[I],r.z)):(c.up.set(0,o[I],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[I]));let b=this._cubeSize;Rs(s,M*b,I>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(v,c),f.render(t,c)}f.toneMapping=d,f.autoClear=u,t.background=E}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ri||t.mapping===Wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let l=r.uniforms;l.envMap.value=t;let c=this._cubeSize;Rs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(a,yr)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,l=this._lodMeshes[i];l.material=a;let c=a.uniforms,o=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),f=Math.sqrt(o*o-h*h),u=o*1.25,d=f*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Ps?i-g+Ps:0),p=4*(this._cubeSize-v);c.envMap.value=t.texture,c.roughness.value=d,c.mipInt.value=g-e,Rs(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(l,yr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Rs(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(l,yr)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,l=this._blurMaterial,c=this._lodMeshes[s];c.material=l;let o=l.uniforms;o.envMap.value=t.texture,o.sigma.value=r,o.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-Ps?s-this._lodMax+Ps:0),u=4*(this._cubeSize-h);Rs(e,f,u,3*h,2*h),a.setRenderTarget(e),a.render(c,yr)}};function km(n){let t=[],e=[],i=n,s=n-Ps+1+Um;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let l=1/(a-2),c=-l,o=1+l,h=[c,c,o,c,o,o,c,c,o,o,c,o],f=6,u=6,d=3,g=new Float32Array(d*u*f),v=new Float32Array(d*u*f);for(let p=0;p<f;p++){let E=p%3*2/3-1,I=p>2?0:-1,M=[E,I,0,E+2/3,I,0,E+2/3,I+1,0,E,I,0,E+2/3,I+1,0,E,I+1,0];g.set(M,d*u*p);for(let b=0;b<u;b++){let A=h[b*2]*2-1,P=h[b*2+1]*2-1;p===0?qi.set(1,P,A):p===1?qi.set(-A,1,-P):p===2?qi.set(-A,P,1):p===3?qi.set(-1,P,-A):p===4?qi.set(-A,-1,P):qi.set(A,P,-1),qi.toArray(v,(p*u+b)*d)}}let m=new on;m.setAttribute("position",new rn(g,d)),m.setAttribute("outputDirection",new rn(v,d)),e.push(new le(m,null)),i>Ps&&i--}return{lodMeshes:e,sizeLods:t}}function Jh(n,t,e){let i=new an(n,t,e);return i.texture.mapping=ur,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function zm(n,t,e){return new tn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Om,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Vm(n,t,e){return new tn({name:"SphericalGaussianBlur",defines:{SAMPLES:Fm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Zh(){return new tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wo(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function Kh(){return new tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function wo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var So=class extends an{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new er(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qe(5,5,5),r=new tn({name:"CubemapFromEquirect",uniforms:Xi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:en,blending:Vn});r.uniforms.tEquirect.value=e;let a=new le(s,r),l=e.minFilter;return e.minFilter===Pi&&(e.minFilter=Be),new Ea(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};function Hm(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Pa||d===Ia)if(t.has(u)){let g=t.get(u).texture;return l(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new So(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",o),l(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let d=u.mapping,g=d===Pa||d===Ia,v=d===Ri||d===Wi;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Mo(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let E=u.image;return g&&E&&E.height>0||v&&E&&c(E)?(i===null&&(i=new Mo(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function l(u,d){return d===Pa?u.mapping=Ri:d===Ia&&(u.mapping=Wi),u}function c(u){let d=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&d++;return d===g}function o(u){let d=u.target;d.removeEventListener("dispose",o);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function f(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Gm(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&zi("WebGLRenderer: "+i+" extension not supported."),s}}}function Wm(n,t,e,i){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function c(f){let u=f.attributes;for(let d in u)t.update(u[d],n.ARRAY_BUFFER)}function o(f){let u=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let E=d.array;v=d.version;for(let I=0,M=E.length;I<M;I+=3){let b=E[I+0],A=E[I+1],P=E[I+2];u.push(b,A,A,P,P,b)}}else{let E=g.array;v=g.version;for(let I=0,M=E.length/3-1;I<M;I+=3){let b=I+0,A=I+1,P=I+2;u.push(b,A,A,P,P,b)}}let m=new(g.count>=65535?tr:Qs)(u,1);m.version=v;let p=r.get(f);p&&t.remove(p),r.set(f,m)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&o(f)}else o(f);return r.get(f)}return{get:l,update:c,getWireframeAttribute:h}}function Xm(n,t,e){let i;function s(f){i=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function c(f,u){n.drawElements(i,u,r,f*a),e.update(u,i,1)}function o(f,u,d){d!==0&&(n.drawElementsInstanced(i,u,r,f*a,d),e.update(u,i,d))}function h(f,u,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=l,this.render=c,this.renderInstances=o,this.renderMultiDraw=h}function qm(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:Yt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Ym(n,t,e){let i=new WeakMap,s=new Te;function r(a,l,c){let o=a.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,f=h!==void 0?h.length:0,u=i.get(l);if(u===void 0||u.count!==f){let T=function(){P.dispose(),i.delete(l),l.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let d=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],E=l.morphAttributes.color||[],I=0;d===!0&&(I=1),g===!0&&(I=2),v===!0&&(I=3);let M=l.attributes.position.count*I,b=1;M>t.maxTextureSize&&(b=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let A=new Float32Array(M*b*4*f),P=new Zs(A,M,b,f);P.type=In,P.needsUpdate=!0;let _=I*4;for(let C=0;C<f;C++){let N=m[C],F=p[C],k=E[C],L=M*b*4*C;for(let W=0;W<N.count;W++){let J=W*_;d===!0&&(s.fromBufferAttribute(N,W),A[L+J+0]=s.x,A[L+J+1]=s.y,A[L+J+2]=s.z,A[L+J+3]=0),g===!0&&(s.fromBufferAttribute(F,W),A[L+J+4]=s.x,A[L+J+5]=s.y,A[L+J+6]=s.z,A[L+J+7]=0),v===!0&&(s.fromBufferAttribute(k,W),A[L+J+8]=s.x,A[L+J+9]=s.y,A[L+J+10]=s.z,A[L+J+11]=k.itemSize===4?s.w:1)}}u={count:f,texture:P,size:new ie(M,b)},i.set(l,u),l.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<o.length;v++)d+=o[v];let g=l.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",o)}c.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function $m(n,t,e,i,s){let r=new WeakMap;function a(o){let h=s.render.frame,f=o.geometry,u=t.get(o,f);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",c)===!1&&o.addEventListener("dispose",c),r.get(o)!==h&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),r.set(o,h))),o.isSkinnedMesh){let d=o.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function l(){r=new WeakMap}function c(o){let h=o.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:l}}var Jm={[Sl]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[hr]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[El]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function Zm(n,t,e,i,s,r){let a=new an(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),l=null,c=null,o=new on;o.setAttribute("position",new we([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new we([0,2,0,0,2,0],2));let h=new fa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new le(o,h),u=new bs(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,E=[],I=!1;this.setSize=function(M,b){a.setSize(M,b),l!==null&&l.setSize(M,b),c!==null&&c.setSize(M,b);for(let A=0;A<E.length;A++){let P=E[A];P.setSize&&P.setSize(M,b)}},this.setEffects=function(M){E=M,I=E.length>0&&E[0].isRenderPass===!0;let b=a.width,A=a.height;E.length>0&&l===null&&(l=new an(b,A,{type:Ln,depthBuffer:!1,stencilBuffer:!1}),c=new an(b,A,{type:Ln,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<E.length;P++){let _=E[P];_.setSize&&_.setSize(b,A)}},this.begin=function(M,b){if(v||M.toneMapping===Rn&&E.length===0)return!1;if(p=b,b!==null){let A=b.width,P=b.height;(a.width!==A||a.height!==P)&&this.setSize(A,P)}return I===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=Rn,!0},this.hasRenderPass=function(){return I},this.end=function(M,b){M.toneMapping=m,v=!0;let A=a,P=l;for(let _=0;_<E.length;_++){let T=E[_];T.enabled!==!1&&(T.render(M,P,A,b),T.needsSwap!==!1&&(A=P,P=P===l?c:l))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,h.defines={},se.getTransfer(d)===pe&&(h.defines.SRGB_TRANSFER="");let _=Jm[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=A.texture,M.setRenderTarget(p),M.render(f,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),o.dispose(),h.dispose()}}var xu=new je,Ql=new Si(1,1),_u=new Zs,vu=new ca,yu=new er,jh=[],Qh=[],tu=new Float32Array(16),eu=new Float32Array(9),nu=new Float32Array(4);function Ls(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=jh[s];if(r===void 0&&(r=new Float32Array(s),jh[s]=r),t!==0){i.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(r,l)}return r}function Ie(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Le(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function To(n,t){let e=Qh[t];e===void 0&&(e=new Int32Array(t),Qh[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Km(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function jm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2fv(this.addr,t),Le(e,t)}}function Qm(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;n.uniform3fv(this.addr,t),Le(e,t)}}function t0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4fv(this.addr,t),Le(e,t)}}function e0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;nu.set(i),n.uniformMatrix2fv(this.addr,!1,nu),Le(e,i)}}function n0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;eu.set(i),n.uniformMatrix3fv(this.addr,!1,eu),Le(e,i)}}function i0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(Ie(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,i))return;tu.set(i),n.uniformMatrix4fv(this.addr,!1,tu),Le(e,i)}}function s0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function r0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2iv(this.addr,t),Le(e,t)}}function a0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3iv(this.addr,t),Le(e,t)}}function o0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4iv(this.addr,t),Le(e,t)}}function l0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function c0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;n.uniform2uiv(this.addr,t),Le(e,t)}}function h0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;n.uniform3uiv(this.addr,t),Le(e,t)}}function u0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;n.uniform4uiv(this.addr,t),Le(e,t)}}function d0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Ql.compareFunction=e.isReversedDepthBuffer()?_o:xo,r=Ql):r=xu,e.setTexture2D(t||r,s)}function f0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||vu,s)}function p0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||yu,s)}function m0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||_u,s)}function g0(n){switch(n){case 5126:return Km;case 35664:return jm;case 35665:return Qm;case 35666:return t0;case 35674:return e0;case 35675:return n0;case 35676:return i0;case 5124:case 35670:return s0;case 35667:case 35671:return r0;case 35668:case 35672:return a0;case 35669:case 35673:return o0;case 5125:return l0;case 36294:return c0;case 36295:return h0;case 36296:return u0;case 35678:case 36198:case 36298:case 36306:case 35682:return d0;case 35679:case 36299:case 36307:return f0;case 35680:case 36300:case 36308:case 36293:return p0;case 36289:case 36303:case 36311:case 36292:return m0}}function x0(n,t){n.uniform1fv(this.addr,t)}function _0(n,t){let e=Ls(t,this.size,2);n.uniform2fv(this.addr,e)}function v0(n,t){let e=Ls(t,this.size,3);n.uniform3fv(this.addr,e)}function y0(n,t){let e=Ls(t,this.size,4);n.uniform4fv(this.addr,e)}function M0(n,t){let e=Ls(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function S0(n,t){let e=Ls(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function b0(n,t){let e=Ls(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function w0(n,t){n.uniform1iv(this.addr,t)}function T0(n,t){n.uniform2iv(this.addr,t)}function A0(n,t){n.uniform3iv(this.addr,t)}function E0(n,t){n.uniform4iv(this.addr,t)}function C0(n,t){n.uniform1uiv(this.addr,t)}function R0(n,t){n.uniform2uiv(this.addr,t)}function P0(n,t){n.uniform3uiv(this.addr,t)}function I0(n,t){n.uniform4uiv(this.addr,t)}function L0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Ql:a=xu;for(let l=0;l!==s;++l)e.setTexture2D(t[l]||a,r[l])}function N0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||vu,r[a])}function D0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||yu,r[a])}function U0(n,t,e){let i=this.cache,s=t.length,r=To(e,s);Ie(i,r)||(n.uniform1iv(this.addr,r),Le(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_u,r[a])}function F0(n){switch(n){case 5126:return x0;case 35664:return _0;case 35665:return v0;case 35666:return y0;case 35674:return M0;case 35675:return S0;case 35676:return b0;case 5124:case 35670:return w0;case 35667:case 35671:return T0;case 35668:case 35672:return A0;case 35669:case 35673:return E0;case 5125:return C0;case 36294:return R0;case 36295:return P0;case 36296:return I0;case 35678:case 36198:case 36298:case 36306:case 35682:return L0;case 35679:case 36299:case 36307:return N0;case 35680:case 36300:case 36308:case 36293:return D0;case 36289:case 36303:case 36311:case 36292:return U0}}var tc=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=g0(e.type)}},ec=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=F0(e.type)}},nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let l=s[r];l.setValue(t,e[l.id],i)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function iu(n,t){n.seq.push(t),n.map[t.id]=t}function O0(n,t,e){let i=n.name,s=i.length;for(Kl.lastIndex=0;;){let r=Kl.exec(i),a=Kl.lastIndex,l=r[1],c=r[2]==="]",o=r[3];if(c&&(l=l|0),o===void 0||o==="["&&a+2===s){iu(e,o===void 0?new tc(l,n,t):new ec(l,n,t));break}else{let f=e.map[l];f===void 0&&(f=new nc(l),iu(e,f)),e=f}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let l=t.getActiveUniform(e,a),c=t.getUniformLocation(e,l.name);O0(l,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let l=e[r],c=i[l.id];c.needsUpdate!==!1&&l.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function su(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var B0=37297,k0=0;function z0(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}var ru=new Zt;function V0(n){se._getMatrix(ru,se.workingColorSpace,n);let t=`mat3( ${ru.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(n)){case $s:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return qt("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function au(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let l=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+z0(n.getShaderSource(t),l)}else return r}function H0(n,t){let e=V0(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var G0={[Sl]:"Linear",[bl]:"Reinhard",[wl]:"Cineon",[hr]:"ACESFilmic",[Al]:"AgX",[El]:"Neutral",[Tl]:"Custom"};function W0(n,t){let e=G0[t];return e===void 0?(qt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var yo=new V;function X0(){se.getLuminanceCoefficients(yo);let n=yo.x.toFixed(4),t=yo.y.toFixed(4),e=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function q0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Sr).join(`
`)}function Y0(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function $0(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function Sr(n){return n!==""}function ou(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var J0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(n){return n.replace(J0,K0)}var Z0=new Map;function K0(n,t){let e=te[t];if(e===void 0){let i=Z0.get(t);if(i!==void 0)e=te[i],qt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ic(e)}var j0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cu(n){return n.replace(j0,Q0)}function Q0(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function hu(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}var tg={[Hi]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function eg(n){return tg[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var ng={[Ri]:"ENVMAP_TYPE_CUBE",[Wi]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE_UV"};function ig(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":ng[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var sg={[Wi]:"ENVMAP_MODE_REFRACTION"};function rg(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":sg[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ag={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[Ch]:"ENVMAP_BLENDING_ADD"};function og(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":ag[n.combine]||"ENVMAP_BLENDING_NONE"}function lg(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function cg(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,l=e.fragmentShader,c=eg(e),o=ig(e),h=rg(e),f=og(e),u=lg(e),d=q0(e),g=Y0(r),v=s.createProgram(),m,p,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Sr).join(`
`),p.length>0&&(p+=`
`)):(m=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),p=[hu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Rn?"#define TONE_MAPPING":"",e.toneMapping!==Rn?te.tonemapping_pars_fragment:"",e.toneMapping!==Rn?W0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,H0("linearToOutputTexel",e.outputColorSpace),X0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Sr).join(`
`)),a=ic(a),a=ou(a,e),a=lu(a,e),l=ic(l),l=ou(l,e),l=lu(l,e),a=cu(a),l=cu(l),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let I=E+m+a,M=E+p+l,b=su(s,s.VERTEX_SHADER,I),A=su(s,s.FRAGMENT_SHADER,M);s.attachShader(v,b),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function P(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(A)||"",W=F.trim(),J=k.trim(),H=L.trim(),nt=!0,B=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(nt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,A);else{let G=au(s,b,"vertex"),Z=au(s,A,"fragment");Yt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+W+`
`+G+`
`+Z)}else W!==""?qt("WebGLProgram: Program Info Log:",W):(J===""||H==="")&&(B=!1);B&&(N.diagnostics={runnable:nt,programLog:W,vertexShader:{log:J,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(b),s.deleteShader(A),_=new Is(s,v),T=$0(s,v)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,B0)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=k0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=A,this}var hg=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new rc(t),e.set(t,i)),i}},rc=class{constructor(t){this.id=hg++,this.code=t,this.usedTimes=0}};function ug(n){return n===Li||n===xr||n===_r}function dg(n,t,e,i,s,r){let a=new Ks,l=new sc,c=new Set,o=[],h=new Map,f=i.logarithmicDepthBuffer,u=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function v(_,T,C,N,F,k){let L=N.fog,W=F.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,nt=t.get(_.envMap||J,H),B=nt&&nt.mapping===ur?nt.image.height:null,G=d[_.type];_.precision!==null&&(u=i.getMaxPrecision(_.precision),u!==_.precision&&qt("WebGLProgram.getParameters:",_.precision,"not supported, using",u,"instead."));let Z=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ut=Z!==void 0?Z.length:0,mt=0;W.morphAttributes.position!==void 0&&(mt=1),W.morphAttributes.normal!==void 0&&(mt=2),W.morphAttributes.color!==void 0&&(mt=3);let Xt,Ot,ee,it;if(G){let me=Gn[G];Xt=me.vertexShader,Ot=me.fragmentShader}else{Xt=_.vertexShader,Ot=_.fragmentShader;let me=l.getVertexShaderStage(_),de=l.getFragmentShaderStage(_);l.update(_,me,de),ee=me.id,it=de.id}let rt=n.getRenderTarget(),St=n.state.buffers.depth.getReversed(),Ht=F.isInstancedMesh===!0,wt=F.isBatchedMesh===!0,Gt=!!_.map,he=!!_.matcap,z=!!nt,at=!!_.aoMap,At=!!_.lightMap,Mt=!!_.bumpMap&&_.wireframe===!1,Et=!!_.normalMap,Pt=!!_.displacementMap,ce=!!_.emissiveMap,Jt=!!_.metalnessMap,jt=!!_.roughnessMap,S=_.anisotropy>0,_t=_.clearcoat>0,xt=_.dispersion>0,w=_.retroreflectivity>0,x=_.iridescence>0,D=_.sheen>0,O=_.transmission>0,Y=S&&!!_.anisotropyMap,et=_t&&!!_.clearcoatMap,ft=_t&&!!_.clearcoatNormalMap,j=_t&&!!_.clearcoatRoughnessMap,K=x&&!!_.iridescenceMap,dt=x&&!!_.iridescenceThicknessMap,gt=D&&!!_.sheenColorMap,ct=D&&!!_.sheenRoughnessMap,ht=!!_.specularMap,Rt=!!_.specularColorMap,Lt=!!_.specularIntensityMap,Vt=O&&!!_.transmissionMap,R=O&&!!_.thicknessMap,ot=!!_.gradientMap,tt=!!_.alphaMap,pt=_.alphaTest>0,vt=!!_.alphaHash,lt=!!_.extensions,Ft=Rn;_.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ft=n.toneMapping);let Ut={shaderID:G,shaderType:_.type,shaderName:_.name,vertexShader:Xt,fragmentShader:Ot,defines:_.defines,customVertexShaderID:ee,customFragmentShaderID:it,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:u,batching:wt,batchingColor:wt&&F._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&F.instanceColor!==null,instancingMorph:Ht&&F.morphTexture!==null,outputColorSpace:rt===null?n.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Gt,matcap:he,envMap:z,envMapMode:z&&nt.mapping,envMapCubeUVHeight:B,aoMap:at,lightMap:At,bumpMap:Mt,normalMap:Et,displacementMap:Pt,emissiveMap:ce,normalMapObjectSpace:Et&&_.normalMapType===Ih,normalMapTangentSpace:Et&&_.normalMapType===go,packedNormalMap:Et&&_.normalMapType===go&&ug(_.normalMap.format),metalnessMap:Jt,roughnessMap:jt,anisotropy:S,anisotropyMap:Y,clearcoat:_t,clearcoatMap:et,clearcoatNormalMap:ft,clearcoatRoughnessMap:j,dispersion:xt,retroreflection:w,iridescence:x,iridescenceMap:K,iridescenceThicknessMap:dt,sheen:D,sheenColorMap:gt,sheenRoughnessMap:ct,specularMap:ht,specularColorMap:Rt,specularIntensityMap:Lt,transmission:O,transmissionMap:Vt,thicknessMap:R,gradientMap:ot,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:tt,alphaTest:pt,alphaHash:vt,combine:_.combine,mapUv:Gt&&g(_.map.channel),aoMapUv:at&&g(_.aoMap.channel),lightMapUv:At&&g(_.lightMap.channel),bumpMapUv:Mt&&g(_.bumpMap.channel),normalMapUv:Et&&g(_.normalMap.channel),displacementMapUv:Pt&&g(_.displacementMap.channel),emissiveMapUv:ce&&g(_.emissiveMap.channel),metalnessMapUv:Jt&&g(_.metalnessMap.channel),roughnessMapUv:jt&&g(_.roughnessMap.channel),anisotropyMapUv:Y&&g(_.anisotropyMap.channel),clearcoatMapUv:et&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:ft&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:K&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:gt&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:ct&&g(_.sheenRoughnessMap.channel),specularMapUv:ht&&g(_.specularMap.channel),specularColorMapUv:Rt&&g(_.specularColorMap.channel),specularIntensityMapUv:Lt&&g(_.specularIntensityMap.channel),transmissionMapUv:Vt&&g(_.transmissionMap.channel),thicknessMapUv:R&&g(_.thicknessMap.channel),alphaMapUv:tt&&g(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Et||S),vertexNormals:!!W.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(Gt||tt),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||W.attributes.normal===void 0&&Et===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:St,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:ut,morphTextureStride:mt,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Gt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===pe,decodeVideoTextureEmissive:ce&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Cn,flipSided:_.side===en,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||wt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)T.push(C),T.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(p(T,_),E(T,_),T.push(n.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function E(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function I(_){let T=d[_.type],C;if(T){let N=Gn[T];C=Xh.clone(N.uniforms)}else C=_.uniforms;return C}function M(_,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new cg(n,T,_,s),o.push(C),h.set(T,C)),C}function b(_){if(--_.usedTimes===0){let T=o.indexOf(_);o[T]=o[o.length-1],o.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){l.remove(_)}function P(){l.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:I,acquireProgram:M,releaseProgram:b,releaseShaderCache:A,programs:o,dispose:P}}function fg(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,c){n.get(a)[l]=c}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function pg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function uu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function du(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function l(u,d,g,v,m,p){let E=n[t];return E===void 0?(E={id:u.id,object:u,geometry:d,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=E):(E.id=u.id,E.object=u,E.geometry=d,E.material=g,E.materialVariant=a(u),E.groupOrder=v,E.renderOrder=u.renderOrder,E.z=m,E.group=p),t++,E}function c(u,d,g,v,m,p,E){E.reversedDepth===!0&&(m=-m);let I=l(u,d,g,v,m,p);g.transmission>0?i.push(I):g.transparent===!0?s.push(I):e.push(I)}function o(u,d,g,v,m,p){let E=l(u,d,g,v,m,p);g.transmission>0?i.unshift(E):g.transparent===!0?s.unshift(E):e.unshift(E)}function h(u,d){e.length>1&&e.sort(u||pg),i.length>1&&i.sort(d||uu),s.length>1&&s.sort(d||uu)}function f(){for(let u=t,d=n.length;u<d;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:c,unshift:o,finish:f,sort:h}}function mg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new du,n.set(i,[a])):s>=r.length?(a=new du,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function gg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new V,color:new Kt};break;case"SpotLight":e={position:new V,direction:new V,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new V,halfWidth:new V,halfHeight:new V};break}return n[t.id]=e,e}}}function xg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var _g=0;function vg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function yg(n){let t=new gg,e=xg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)i.probe.push(new V);let s=new V,r=new Se,a=new Se;function l(o){let h=0,f=0,u=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,E=0,I=0,M=0,b=0,A=0,P=0,_=0,T=0,C=0;o.sort(vg);for(let F=0,k=o.length;F<k;F++){let L=o[F],W=L.color,J=L.intensity,H=L.distance,nt=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Li?nt=L.shadow.map.texture:nt=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=W.r*J,f+=W.g*J,u+=W.b*J;else if(L.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(L.sh.coefficients[B],J);C++}else if(L.isSunLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[g]=Z,i.sunShadowMap[g]=nt;let ut=G.getViewportCount();for(let mt=0;mt<ut;mt++)i.sunShadowMatrix[v+mt]=G.getMatrix(mt),i.sunShadowCascade[v+mt]=G._cascadeData[mt];v+=ut,g++}i.sun[d]=B,d++}else if(L.isDirectionalLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.directionalShadow[m]=Z,i.directionalShadowMap[m]=nt,i.directionalShadowMatrix[m]=L.shadow.matrix,b++}i.directional[m]=B,m++}else if(L.isSpotLight){let B=t.get(L);B.position.setFromMatrixPosition(L.matrixWorld),B.color.copy(W).multiplyScalar(J),B.distance=H,B.coneCos=Math.cos(L.angle),B.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),B.decay=L.decay,i.spot[E]=B;let G=L.shadow;if(L.map&&(i.spotLightMap[_]=L.map,_++,G.updateMatrices(L),L.castShadow&&T++),i.spotLightMatrix[E]=G.matrix,L.castShadow){let Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,i.spotShadow[E]=Z,i.spotShadowMap[E]=nt,P++}E++}else if(L.isRectAreaLight){let B=t.get(L);B.color.copy(W).multiplyScalar(J),B.halfWidth.set(L.width*.5,0,0),B.halfHeight.set(0,L.height*.5,0),i.rectArea[I]=B,I++}else if(L.isPointLight){let B=t.get(L);if(B.color.copy(L.color).multiplyScalar(L.intensity),B.distance=L.distance,B.decay=L.decay,L.castShadow){let G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,i.pointShadow[p]=Z,i.pointShadowMap[p]=nt,i.pointShadowMatrix[p]=L.shadow.matrix,A++}i.point[p]=B,p++}else if(L.isHemisphereLight){let B=t.get(L);B.skyColor.copy(L.color).multiplyScalar(J),B.groundColor.copy(L.groundColor).multiplyScalar(J),i.hemi[M]=B,M++}}I>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=bt.LTC_FLOAT_1,i.rectAreaLTC2=bt.LTC_FLOAT_2):(i.rectAreaLTC1=bt.LTC_HALF_1,i.rectAreaLTC2=bt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=u;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==E||N.rectAreaLength!==I||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==b||N.numPointShadows!==A||N.numSpotShadows!==P||N.numSpotMaps!==_||N.numLightProbes!==C)&&(i.sun.length=d,i.directional.length=m,i.spot.length=E,i.rectArea.length=I,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=P,i.spotShadowMap.length=P,i.spotLightMatrix.length=P+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=E,N.rectAreaLength=I,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=b,N.numPointShadows=A,N.numSpotShadows=P,N.numSpotMaps=_,N.numLightProbes=C,i.version=_g++)}function c(o,h){let f=0,u=0,d=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let E=0,I=o.length;E<I;E++){let M=o[E];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let b=i.directional[u];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),u++}else if(M.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:i}}function fu(n){let t=new yg(n),e=[],i=[],s=[];function r(u){f.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function l(u){i.push(u)}function c(u){s.push(u)}function o(){t.setup(e)}function h(u){t.setupView(e,u)}let f={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:o,setupLightsView:h,pushLight:a,pushShadow:l,pushLightProbeGrid:c}}function Mg(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),l;return a===void 0?(l=new fu(n),t.set(s,[l])):r>=a.length?(l=new fu(n),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}var Sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bg=`uniform sampler2D shadow_pass;
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
}`,wg=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Tg=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],pu=new Se,Mr=new V,jl=new V;function Ag(n,t,e){let i=new Ms,s=new ie,r=new ie,a=new Te,l=new pa,c=new ma,o={},h=e.maxTextureSize,f={[Ci]:en,[en]:Ci,[Cn]:Cn},u=new tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Sg,fragmentShader:bg}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new le(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hi;let p=this.type;this.render=function(A,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===lh&&(qt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hi);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Vn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&P.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(W=>W.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,W=A.length;L<W;L++){let J=A[L],H=J.shadow;if(H===void 0){qt("WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let nt=H.getFrameExtents();s.multiply(nt),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/nt.x),s.x=r.x*nt.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/nt.y),s.y=r.y*nt.y,H.mapSize.y=r.y));let B=n.state.buffers.depth.getReversed();if(H.camera._reversedDepth=B,H.map===null||k===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===Ts){if(J.isPointLight){qt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new an(s.x,s.y,{format:Li,type:Ln,minFilter:Be,magFilter:Be,generateMipmaps:!1}),H.map.texture.name=J.name+".shadowMap",H.map.depthTexture=new Si(s.x,s.y,In),H.map.depthTexture.name=J.name+".shadowMapDepth",H.map.depthTexture.format=kn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De}else J.isPointLight?(H.map=new So(s.x),H.map.depthTexture=new da(s.x,Pn)):(H.map=new an(s.x,s.y),H.map.depthTexture=new Si(s.x,s.y,Pn)),H.map.depthTexture.name=J.name+".shadowMap",H.map.depthTexture.format=kn,this.type===Hi?(H.map.depthTexture.compareFunction=B?_o:xo,H.map.depthTexture.minFilter=Be,H.map.depthTexture.magFilter=Be):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=De,H.map.depthTexture.magFilter=De);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let G=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();J.isPointLight!==!0&&H.updateMatrices(J,_);for(let Z=0;Z<G;Z++){let ut=H.getCamera(Z);if(J.isPointLight){let mt=H.camera,Xt=H.matrix,Ot=J.distance||mt.far;Ot!==mt.far&&(mt.far=Ot,mt.updateProjectionMatrix()),Mr.setFromMatrixPosition(J.matrixWorld),mt.position.copy(Mr),jl.copy(mt.position),jl.add(wg[Z]),mt.up.copy(Tg[Z]),mt.lookAt(jl),mt.updateMatrixWorld(),Xt.makeTranslation(-Mr.x,-Mr.y,-Mr.z),pu.multiplyMatrices(mt.projectionMatrix,mt.matrixWorldInverse),H._frustum.setFromProjectionMatrix(pu,mt.coordinateSystem,mt.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)n.setRenderTarget(H.map,Z),n.clear();else{Z===0&&(n.setRenderTarget(H.map),n.clear());let mt=H.getViewport(Z);a.set(r.x*mt.x,r.y*mt.y,r.x*mt.z,r.y*mt.w),F.viewport(a)}i=H.getFrustum(Z),M(P,_,ut,J,this.type)}H.isPointLightShadow!==!0&&this.type===Ts&&E(H,_),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,N)};function E(A,P){let _=t.update(v);u.defines.VSM_SAMPLES!==A.blurSamples&&(u.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null?A.mapPass=new an(s.x,s.y,{format:Li,type:Ln}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),u.uniforms.shadow_pass.value=A.map.depthTexture,u.uniforms.resolution.value.set(A.map.width,A.map.height),u.uniforms.radius.value=A.radius,n.setRenderTarget(A.mapPass),n.clear(),n.renderBufferDirect(P,null,_,u,v,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,n.setRenderTarget(A.map),n.clear(),n.renderBufferDirect(P,null,_,d,v,null)}function I(A,P,_,T){let C=null,N=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)C=N;else if(C=_.isPointLight===!0?c:l,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){let F=C.uuid,k=P.uuid,L=o[F];L===void 0&&(L={},o[F]=L);let W=L[k];W===void 0&&(W=C.clone(),L[k]=W,P.addEventListener("dispose",b)),C=W}if(C.visible=P.visible,C.wireframe=P.wireframe,T===Ts?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:f[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=n.properties.get(C);F.light=_}return C}function M(A,P,_,T,C){if(A.visible===!1)return;if(A.layers.test(P.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&C===Ts)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);let k=t.update(A),L=A.material;if(Array.isArray(L)){let W=k.groups;for(let J=0,H=W.length;J<H;J++){let nt=W[J],B=L[nt.materialIndex];if(B&&B.visible){let G=I(A,B,T,C);A.onBeforeShadow(n,A,P,_,k,G,nt),n.renderBufferDirect(_,null,k,G,A,nt),A.onAfterShadow(n,A,P,_,k,G,nt)}}}else if(L.visible){let W=I(A,L,T,C);A.onBeforeShadow(n,A,P,_,k,W,null),n.renderBufferDirect(_,null,k,W,A,null),A.onAfterShadow(n,A,P,_,k,W,null)}}let F=A.children;for(let k=0,L=F.length;k<L;k++)M(F[k],P,_,T,C)}function b(A){A.target.removeEventListener("dispose",b);for(let _ in o){let T=o[_],C=A.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Eg(n,t){function e(){let R=!1,ot=new Te,tt=null,pt=new Te(0,0,0,0);return{setMask:function(vt){tt!==vt&&!R&&(n.colorMask(vt,vt,vt,vt),tt=vt)},setLocked:function(vt){R=vt},setClear:function(vt,lt,Ft,Ut,me){me===!0&&(vt*=Ut,lt*=Ut,Ft*=Ut),ot.set(vt,lt,Ft,Ut),pt.equals(ot)===!1&&(n.clearColor(vt,lt,Ft,Ut),pt.copy(ot))},reset:function(){R=!1,tt=null,pt.set(-1,0,0,0)}}}function i(){let R=!1,ot=!1,tt=null,pt=null,vt=null;return{setReversed:function(lt){if(ot!==lt){let Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),ot=lt;let Ut=vt;vt=null,this.setClear(Ut)}},getReversed:function(){return ot},setTest:function(lt){lt?rt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(lt){tt!==lt&&!R&&(n.depthMask(lt),tt=lt)},setFunc:function(lt){if(ot&&(lt=Gh[lt]),pt!==lt){switch(lt){case Kr:n.depthFunc(n.NEVER);break;case jr:n.depthFunc(n.ALWAYS);break;case Qr:n.depthFunc(n.LESS);break;case ps:n.depthFunc(n.LEQUAL);break;case ta:n.depthFunc(n.EQUAL);break;case ea:n.depthFunc(n.GEQUAL);break;case na:n.depthFunc(n.GREATER);break;case ia:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}pt=lt}},setLocked:function(lt){R=lt},setClear:function(lt){vt!==lt&&(vt=lt,ot&&(lt=1-lt),n.clearDepth(lt))},reset:function(){R=!1,tt=null,pt=null,vt=null,ot=!1}}}function s(){let R=!1,ot=null,tt=null,pt=null,vt=null,lt=null,Ft=null,Ut=null,me=null;return{setTest:function(de){R||(de?rt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(de){ot!==de&&!R&&(n.stencilMask(de),ot=de)},setFunc:function(de,Mn,Un){(tt!==de||pt!==Mn||vt!==Un)&&(n.stencilFunc(de,Mn,Un),tt=de,pt=Mn,vt=Un)},setOp:function(de,Mn,Un){(lt!==de||Ft!==Mn||Ut!==Un)&&(n.stencilOp(de,Mn,Un),lt=de,Ft=Mn,Ut=Un)},setLocked:function(de){R=de},setClear:function(de){me!==de&&(n.clearStencil(de),me=de)},reset:function(){R=!1,ot=null,tt=null,pt=null,vt=null,lt=null,Ft=null,Ut=null,me=null}}}let r=new e,a=new i,l=new s,c=new WeakMap,o=new WeakMap,h={},f={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,E=null,I=null,M=null,b=null,A=null,P=null,_=new Kt(0,0,0),T=0,C=!1,N=null,F=null,k=null,L=null,W=null,J=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,nt=0,B=n.getParameter(n.VERSION);B.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(B)[1]),H=nt>=1):B.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),H=nt>=2);let G=null,Z={},ut=n.getParameter(n.SCISSOR_BOX),mt=n.getParameter(n.VIEWPORT),Xt=new Te().fromArray(ut),Ot=new Te().fromArray(mt);function ee(R,ot,tt,pt){let vt=new Uint8Array(4),lt=n.createTexture();n.bindTexture(R,lt),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ft=0;Ft<tt;Ft++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(ot,0,n.RGBA,1,1,pt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(ot+Ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return lt}let it={};it[n.TEXTURE_2D]=ee(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=ee(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=ee(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=ee(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),rt(n.DEPTH_TEST),a.setFunc(ps),Mt(!1),Et(gl),rt(n.CULL_FACE),at(Vn);function rt(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function St(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Ht(R,ot){return u[R]!==ot?(n.bindFramebuffer(R,ot),u[R]=ot,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=ot),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=ot),!0):!1}function wt(R,ot){let tt=g,pt=!1;if(R){tt=d.get(ot),tt===void 0&&(tt=[],d.set(ot,tt));let vt=R.textures;if(tt.length!==vt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let lt=0,Ft=vt.length;lt<Ft;lt++)tt[lt]=n.COLOR_ATTACHMENT0+lt;tt.length=vt.length,pt=!0}}else tt[0]!==n.BACK&&(tt[0]=n.BACK,pt=!0);pt&&n.drawBuffers(tt)}function Gt(R){return v!==R?(n.useProgram(R),v=R,!0):!1}let he={[Gi]:n.FUNC_ADD,[hh]:n.FUNC_SUBTRACT,[uh]:n.FUNC_REVERSE_SUBTRACT};he[dh]=n.MIN,he[fh]=n.MAX;let z={[ph]:n.ZERO,[mh]:n.ONE,[gh]:n.SRC_COLOR,[vl]:n.SRC_ALPHA,[Sh]:n.SRC_ALPHA_SATURATE,[yh]:n.DST_COLOR,[_h]:n.DST_ALPHA,[xh]:n.ONE_MINUS_SRC_COLOR,[yl]:n.ONE_MINUS_SRC_ALPHA,[Mh]:n.ONE_MINUS_DST_COLOR,[vh]:n.ONE_MINUS_DST_ALPHA,[bh]:n.CONSTANT_COLOR,[wh]:n.ONE_MINUS_CONSTANT_COLOR,[Th]:n.CONSTANT_ALPHA,[Ah]:n.ONE_MINUS_CONSTANT_ALPHA};function at(R,ot,tt,pt,vt,lt,Ft,Ut,me,de){if(R===Vn){m===!0&&(St(n.BLEND),m=!1);return}if(m===!1&&(rt(n.BLEND),m=!0),R!==ch){if(R!==p||de!==C){if((E!==Gi||b!==Gi)&&(n.blendEquation(n.FUNC_ADD),E=Gi,b=Gi),de)switch(R){case As:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFunc(n.ONE,n.ONE);break;case xl:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case _l:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Yt("WebGLState: Invalid blending: ",R);break}else switch(R){case As:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case cr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case xl:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",R);break}I=null,M=null,A=null,P=null,_.set(0,0,0),T=0,p=R,C=de}return}vt=vt||ot,lt=lt||tt,Ft=Ft||pt,(ot!==E||vt!==b)&&(n.blendEquationSeparate(he[ot],he[vt]),E=ot,b=vt),(tt!==I||pt!==M||lt!==A||Ft!==P)&&(n.blendFuncSeparate(z[tt],z[pt],z[lt],z[Ft]),I=tt,M=pt,A=lt,P=Ft),(Ut.equals(_)===!1||me!==T)&&(n.blendColor(Ut.r,Ut.g,Ut.b,me),_.copy(Ut),T=me),p=R,C=!1}function At(R,ot){R.side===Cn?St(n.CULL_FACE):rt(n.CULL_FACE);let tt=R.side===en;ot&&(tt=!tt),Mt(tt),R.blending===As&&R.transparent===!1?at(Vn):at(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let pt=R.stencilWrite;l.setTest(pt),pt&&(l.setMask(R.stencilWriteMask),l.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),l.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ce(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?rt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(R){N!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),N=R)}function Et(R){R!==ah?(rt(n.CULL_FACE),R!==F&&(R===gl?n.cullFace(n.BACK):R===oh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),F=R}function Pt(R){R!==k&&(H&&n.lineWidth(R),k=R)}function ce(R,ot,tt){R?(rt(n.POLYGON_OFFSET_FILL),(L!==ot||W!==tt)&&(L=ot,W=tt,a.getReversed()&&(ot=-ot),n.polygonOffset(ot,tt))):St(n.POLYGON_OFFSET_FILL)}function Jt(R){R?rt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function jt(R){R===void 0&&(R=n.TEXTURE0+J-1),G!==R&&(n.activeTexture(R),G=R)}function S(R,ot,tt){tt===void 0&&(G===null?tt=n.TEXTURE0+J-1:tt=G);let pt=Z[tt];pt===void 0&&(pt={type:void 0,texture:void 0},Z[tt]=pt),(pt.type!==R||pt.texture!==ot)&&(G!==tt&&(n.activeTexture(tt),G=tt),n.bindTexture(R,ot||it[R]),pt.type=R,pt.texture=ot)}function _t(){let R=Z[G];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function xt(){try{n.compressedTexImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function w(){try{n.compressedTexImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function x(){try{n.texSubImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function D(){try{n.texSubImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function O(){try{n.compressedTexSubImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function Y(){try{n.compressedTexSubImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function et(){try{n.texStorage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function ft(){try{n.texStorage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function j(){try{n.texImage2D(...arguments)}catch(R){Yt("WebGLState:",R)}}function K(){try{n.texImage3D(...arguments)}catch(R){Yt("WebGLState:",R)}}function dt(R){return f[R]!==void 0?f[R]:n.getParameter(R)}function gt(R,ot){f[R]!==ot&&(n.pixelStorei(R,ot),f[R]=ot)}function ct(R){Xt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Xt.copy(R))}function ht(R){Ot.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Ot.copy(R))}function Rt(R,ot){let tt=o.get(ot);tt===void 0&&(tt=new WeakMap,o.set(ot,tt));let pt=tt.get(R);pt===void 0&&(pt=n.getUniformBlockIndex(ot,R.name),tt.set(R,pt))}function Lt(R,ot){let pt=o.get(ot).get(R);c.get(ot)!==pt&&(n.uniformBlockBinding(ot,pt,R.__bindingPointIndex),c.set(ot,pt))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},f={},G=null,Z={},u={},d=new WeakMap,g=[],v=null,m=!1,p=null,E=null,I=null,M=null,b=null,A=null,P=null,_=new Kt(0,0,0),T=0,C=!1,N=null,F=null,k=null,L=null,W=null,Xt.set(0,0,n.canvas.width,n.canvas.height),Ot.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:rt,disable:St,bindFramebuffer:Ht,drawBuffers:wt,useProgram:Gt,setBlending:at,setMaterial:At,setFlipSided:Mt,setCullFace:Et,setLineWidth:Pt,setPolygonOffset:ce,setScissorTest:Jt,activeTexture:jt,bindTexture:S,unbindTexture:_t,compressedTexImage2D:xt,compressedTexImage3D:w,texImage2D:j,texImage3D:K,pixelStorei:gt,getParameter:dt,updateUBOMapping:Rt,uniformBlockBinding:Lt,texStorage2D:et,texStorage3D:ft,texSubImage2D:x,texSubImage3D:D,compressedTexSubImage2D:O,compressedTexSubImage3D:Y,scissor:ct,viewport:ht,reset:Vt}}function Cg(n,t,e,i,s,r,a){let l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new ie,h=new WeakMap,f=new Set,u,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(w,x){return g?new OffscreenCanvas(w,x):Js("canvas")}function m(w,x,D){let O=1,Y=xt(w);if((Y.width>D||Y.height>D)&&(O=D/Math.max(Y.width,Y.height)),O<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let et=Math.floor(O*Y.width),ft=Math.floor(O*Y.height);u===void 0&&(u=v(et,ft));let j=x?v(et,ft):u;return j.width=et,j.height=ft,j.getContext("2d").drawImage(w,0,0,et,ft),qt("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+et+"x"+ft+")."),j}else return"data"in w&&qt("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),w;return w}function p(w){return w.generateMipmaps}function E(w){n.generateMipmap(w)}function I(w){return w.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?n.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(w,x,D,O,Y,et=!1){if(w!==null){if(n[w]!==void 0)return n[w];qt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ft;O&&(ft=t.get("EXT_texture_norm16"),ft||qt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=x;if(x===n.RED&&(D===n.FLOAT&&(j=n.R32F),D===n.HALF_FLOAT&&(j=n.R16F),D===n.UNSIGNED_BYTE&&(j=n.R8),D===n.UNSIGNED_SHORT&&ft&&(j=ft.R16_EXT),D===n.SHORT&&ft&&(j=ft.R16_SNORM_EXT)),x===n.RED_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.R8UI),D===n.UNSIGNED_SHORT&&(j=n.R16UI),D===n.UNSIGNED_INT&&(j=n.R32UI),D===n.BYTE&&(j=n.R8I),D===n.SHORT&&(j=n.R16I),D===n.INT&&(j=n.R32I)),x===n.RG&&(D===n.FLOAT&&(j=n.RG32F),D===n.HALF_FLOAT&&(j=n.RG16F),D===n.UNSIGNED_BYTE&&(j=n.RG8),D===n.UNSIGNED_SHORT&&ft&&(j=ft.RG16_EXT),D===n.SHORT&&ft&&(j=ft.RG16_SNORM_EXT)),x===n.RG_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RG8UI),D===n.UNSIGNED_SHORT&&(j=n.RG16UI),D===n.UNSIGNED_INT&&(j=n.RG32UI),D===n.BYTE&&(j=n.RG8I),D===n.SHORT&&(j=n.RG16I),D===n.INT&&(j=n.RG32I)),x===n.RGB_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGB8UI),D===n.UNSIGNED_SHORT&&(j=n.RGB16UI),D===n.UNSIGNED_INT&&(j=n.RGB32UI),D===n.BYTE&&(j=n.RGB8I),D===n.SHORT&&(j=n.RGB16I),D===n.INT&&(j=n.RGB32I)),x===n.RGBA_INTEGER&&(D===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),D===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),D===n.UNSIGNED_INT&&(j=n.RGBA32UI),D===n.BYTE&&(j=n.RGBA8I),D===n.SHORT&&(j=n.RGBA16I),D===n.INT&&(j=n.RGBA32I)),x===n.RGB&&(D===n.UNSIGNED_SHORT&&ft&&(j=ft.RGB16_EXT),D===n.SHORT&&ft&&(j=ft.RGB16_SNORM_EXT),D===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),D===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),x===n.RGBA){let K=et?$s:se.getTransfer(Y);D===n.FLOAT&&(j=n.RGBA32F),D===n.HALF_FLOAT&&(j=n.RGBA16F),D===n.UNSIGNED_BYTE&&(j=K===pe?n.SRGB8_ALPHA8:n.RGBA8),D===n.UNSIGNED_SHORT&&ft&&(j=ft.RGBA16_EXT),D===n.SHORT&&ft&&(j=ft.RGBA16_SNORM_EXT),D===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),D===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function b(w,x){let D;return w?x===null||x===Pn||x===Cs?D=n.DEPTH24_STENCIL8:x===In?D=n.DEPTH32F_STENCIL8:x===Es&&(D=n.DEPTH24_STENCIL8,qt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Pn||x===Cs?D=n.DEPTH_COMPONENT24:x===In?D=n.DEPTH_COMPONENT32F:x===Es&&(D=n.DEPTH_COMPONENT16),D}function A(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==De&&w.minFilter!==Be?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function P(w){let x=w.target;x.removeEventListener("dispose",P),T(x),x.isVideoTexture&&h.delete(x),x.isHTMLTexture&&f.delete(x)}function _(w){let x=w.target;x.removeEventListener("dispose",_),N(x)}function T(w){let x=i.get(w);if(x.__webglInit===void 0)return;let D=w.source,O=d.get(D);if(O){let Y=O[x.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&C(w),Object.keys(O).length===0&&d.delete(D)}i.remove(w)}function C(w){let x=i.get(w);n.deleteTexture(x.__webglTexture);let D=w.source,O=d.get(D);delete O[x.__cacheKey],a.memory.textures--}function N(w){let x=i.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),i.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(x.__webglFramebuffer[O]))for(let Y=0;Y<x.__webglFramebuffer[O].length;Y++)n.deleteFramebuffer(x.__webglFramebuffer[O][Y]);else n.deleteFramebuffer(x.__webglFramebuffer[O]);x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer[O])}else{if(Array.isArray(x.__webglFramebuffer))for(let O=0;O<x.__webglFramebuffer.length;O++)n.deleteFramebuffer(x.__webglFramebuffer[O]);else n.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&n.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&n.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let O=0;O<x.__webglColorRenderbuffer.length;O++)x.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(x.__webglColorRenderbuffer[O]);x.__webglDepthRenderbuffer&&n.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let D=w.textures;for(let O=0,Y=D.length;O<Y;O++){let et=i.get(D[O]);et.__webglTexture&&(n.deleteTexture(et.__webglTexture),a.memory.textures--),i.remove(D[O])}i.remove(w)}let F=0;function k(){F=0}function L(){return F}function W(w){F=w}function J(){let w=F;return w>=s.maxTextures&&qt("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,w}function H(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function nt(w,x){let D=i.get(w);if(w.isVideoTexture&&S(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&D.__version!==w.version){let O=w.image;if(O===null)qt("WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)qt("WebGLRenderer: Texture marked for update but image is incomplete");else{St(D,w,x);return}}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,D.__webglTexture,n.TEXTURE0+x)}function B(w,x){let D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){St(D,w,x);return}else w.isExternalTexture&&(D.__webglTexture=w.sourceTexture?w.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,D.__webglTexture,n.TEXTURE0+x)}function G(w,x){let D=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&D.__version!==w.version){St(D,w,x);return}e.bindTexture(n.TEXTURE_3D,D.__webglTexture,n.TEXTURE0+x)}function Z(w,x){let D=i.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&D.__version!==w.version){Ht(D,w,x);return}e.bindTexture(n.TEXTURE_CUBE_MAP,D.__webglTexture,n.TEXTURE0+x)}let ut={[ms]:n.REPEAT,[Bn]:n.CLAMP_TO_EDGE,[sa]:n.MIRRORED_REPEAT},mt={[De]:n.NEAREST,[Rh]:n.NEAREST_MIPMAP_NEAREST,[dr]:n.NEAREST_MIPMAP_LINEAR,[Be]:n.LINEAR,[La]:n.LINEAR_MIPMAP_NEAREST,[Pi]:n.LINEAR_MIPMAP_LINEAR},Xt={[Nh]:n.NEVER,[Bh]:n.ALWAYS,[Dh]:n.LESS,[xo]:n.LEQUAL,[Uh]:n.EQUAL,[_o]:n.GEQUAL,[Fh]:n.GREATER,[Oh]:n.NOTEQUAL};function Ot(w,x){if(x.type===In&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Be||x.magFilter===La||x.magFilter===dr||x.magFilter===Pi||x.minFilter===Be||x.minFilter===La||x.minFilter===dr||x.minFilter===Pi)&&qt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(w,n.TEXTURE_WRAP_S,ut[x.wrapS]),n.texParameteri(w,n.TEXTURE_WRAP_T,ut[x.wrapT]),(w===n.TEXTURE_3D||w===n.TEXTURE_2D_ARRAY)&&n.texParameteri(w,n.TEXTURE_WRAP_R,ut[x.wrapR]),n.texParameteri(w,n.TEXTURE_MAG_FILTER,mt[x.magFilter]),n.texParameteri(w,n.TEXTURE_MIN_FILTER,mt[x.minFilter]),x.compareFunction&&(n.texParameteri(w,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(w,n.TEXTURE_COMPARE_FUNC,Xt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===De||x.minFilter!==dr&&x.minFilter!==Pi||x.type===In&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let D=t.get("EXT_texture_filter_anisotropic");n.texParameterf(w,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ee(w,x){let D=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",P));let O=x.source,Y=d.get(O);Y===void 0&&(Y={},d.set(O,Y));let et=H(x);if(et!==w.__cacheKey){Y[et]===void 0&&(Y[et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,D=!0),Y[et].usedTimes++;let ft=Y[w.__cacheKey];ft!==void 0&&(Y[w.__cacheKey].usedTimes--,ft.usedTimes===0&&C(x)),w.__cacheKey=et,w.__webglTexture=Y[et].texture}return D}function it(w,x,D){return Math.floor(Math.floor(w/D)/x)}function rt(w,x,D,O){let et=w.updateRanges;if(et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,x.width,x.height,D,O,x.data);else{et.sort((gt,ct)=>gt.start-ct.start);let ft=0;for(let gt=1;gt<et.length;gt++){let ct=et[ft],ht=et[gt],Rt=ct.start+ct.count,Lt=it(ht.start,x.width,4),Vt=it(ct.start,x.width,4);ht.start<=Rt+1&&Lt===Vt&&it(ht.start+ht.count-1,x.width,4)===Lt?ct.count=Math.max(ct.count,ht.start+ht.count-ct.start):(++ft,et[ft]=ht)}et.length=ft+1;let j=e.getParameter(n.UNPACK_ROW_LENGTH),K=e.getParameter(n.UNPACK_SKIP_PIXELS),dt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,x.width);for(let gt=0,ct=et.length;gt<ct;gt++){let ht=et[gt],Rt=Math.floor(ht.start/4),Lt=Math.ceil(ht.count/4),Vt=Rt%x.width,R=Math.floor(Rt/x.width),ot=Lt,tt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,Vt),e.pixelStorei(n.UNPACK_SKIP_ROWS,R),e.texSubImage2D(n.TEXTURE_2D,0,Vt,R,ot,tt,D,O,x.data)}w.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,j),e.pixelStorei(n.UNPACK_SKIP_PIXELS,K),e.pixelStorei(n.UNPACK_SKIP_ROWS,dt)}}function St(w,x,D){let O=n.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),x.isData3DTexture&&(O=n.TEXTURE_3D);let Y=ee(w,x),et=x.source;e.bindTexture(O,w.__webglTexture,n.TEXTURE0+D);let ft=i.get(et);if(et.version!==ft.__version||Y===!0){if(e.activeTexture(n.TEXTURE0+D),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let tt=se.getPrimaries(se.workingColorSpace),pt=x.colorSpace===si?null:se.getPrimaries(x.colorSpace),vt=x.colorSpace===si||tt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment);let K=m(x.image,!1,s.maxTextureSize);K=_t(x,K);let dt=r.convert(x.format,x.colorSpace),gt=r.convert(x.type),ct=M(x.internalFormat,dt,gt,x.normalized,x.colorSpace,x.isVideoTexture);Ot(O,x);let ht,Rt=x.mipmaps,Lt=x.isVideoTexture!==!0,Vt=ft.__version===void 0||Y===!0,R=et.dataReady,ot=A(x,K);if(x.isDepthTexture)ct=b(x.format===Ii,x.type),Vt&&(Lt?e.texStorage2D(n.TEXTURE_2D,1,ct,K.width,K.height):e.texImage2D(n.TEXTURE_2D,0,ct,K.width,K.height,0,dt,gt,null));else if(x.isDataTexture)if(Rt.length>0){Lt&&Vt&&e.texStorage2D(n.TEXTURE_2D,ot,ct,Rt[0].width,Rt[0].height);for(let tt=0,pt=Rt.length;tt<pt;tt++)ht=Rt[tt],Lt?R&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,gt,ht.data):e.texImage2D(n.TEXTURE_2D,tt,ct,ht.width,ht.height,0,dt,gt,ht.data);x.generateMipmaps=!1}else Lt?(Vt&&e.texStorage2D(n.TEXTURE_2D,ot,ct,K.width,K.height),R&&rt(x,K,dt,gt)):e.texImage2D(n.TEXTURE_2D,0,ct,K.width,K.height,0,dt,gt,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Lt&&Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ct,Rt[0].width,Rt[0].height,K.depth);for(let tt=0,pt=Rt.length;tt<pt;tt++)if(ht=Rt[tt],x.format!==_n)if(dt!==null)if(Lt){if(R)if(x.layerUpdates.size>0){let vt=Vl(ht.width,ht.height,x.format,x.type);for(let lt of x.layerUpdates){let Ft=ht.data.subarray(lt*vt/ht.data.BYTES_PER_ELEMENT,(lt+1)*vt/ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,lt,ht.width,ht.height,1,dt,Ft)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,K.depth,dt,ht.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,tt,ct,ht.width,ht.height,K.depth,0,ht.data,0,0);else qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Lt?R&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,tt,0,0,0,ht.width,ht.height,K.depth,dt,gt,ht.data):e.texImage3D(n.TEXTURE_2D_ARRAY,tt,ct,ht.width,ht.height,K.depth,0,dt,gt,ht.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{Lt&&Vt&&e.texStorage2D(n.TEXTURE_2D,ot,ct,Rt[0].width,Rt[0].height);for(let tt=0,pt=Rt.length;tt<pt;tt++)ht=Rt[tt],x.format!==_n?dt!==null?Lt?R&&e.compressedTexSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,ht.data):e.compressedTexImage2D(n.TEXTURE_2D,tt,ct,ht.width,ht.height,0,ht.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Lt?R&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,ht.width,ht.height,dt,gt,ht.data):e.texImage2D(n.TEXTURE_2D,tt,ct,ht.width,ht.height,0,dt,gt,ht.data)}else if(x.isDataArrayTexture)if(Lt){if(Vt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ot,ct,K.width,K.height,K.depth),R)if(x.layerUpdates.size>0){let tt=Vl(K.width,K.height,x.format,x.type);for(let pt of x.layerUpdates){let vt=K.data.subarray(pt*tt/K.data.BYTES_PER_ELEMENT,(pt+1)*tt/K.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,pt,K.width,K.height,1,dt,gt,vt)}x.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,dt,gt,K.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,ct,K.width,K.height,K.depth,0,dt,gt,K.data);else if(x.isData3DTexture)Lt?(Vt&&e.texStorage3D(n.TEXTURE_3D,ot,ct,K.width,K.height,K.depth),R&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,dt,gt,K.data)):e.texImage3D(n.TEXTURE_3D,0,ct,K.width,K.height,K.depth,0,dt,gt,K.data);else if(x.isFramebufferTexture){if(Vt)if(Lt)e.texStorage2D(n.TEXTURE_2D,ot,ct,K.width,K.height);else{let tt=K.width,pt=K.height;for(let vt=0;vt<ot;vt++)e.texImage2D(n.TEXTURE_2D,vt,ct,tt,pt,0,dt,gt,null),tt>>=1,pt>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in n){let tt=n.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),K.parentNode!==tt){tt.appendChild(K),f.add(x),tt.onpaint=pt=>{let vt=pt.changedElements;for(let lt of f)vt.includes(lt.image)&&(lt.needsUpdate=!0)},tt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,K);else{let vt=n.RGBA,lt=n.RGBA,Ft=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,vt,lt,Ft,K)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Rt.length>0){if(Lt&&Vt){let tt=xt(Rt[0]);e.texStorage2D(n.TEXTURE_2D,ot,ct,tt.width,tt.height)}for(let tt=0,pt=Rt.length;tt<pt;tt++)ht=Rt[tt],Lt?R&&e.texSubImage2D(n.TEXTURE_2D,tt,0,0,dt,gt,ht):e.texImage2D(n.TEXTURE_2D,tt,ct,dt,gt,ht);x.generateMipmaps=!1}else if(Lt){if(Vt){let tt=xt(K);e.texStorage2D(n.TEXTURE_2D,ot,ct,tt.width,tt.height)}R&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,dt,gt,K)}else e.texImage2D(n.TEXTURE_2D,0,ct,dt,gt,K);p(x)&&E(O),ft.__version=et.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Ht(w,x,D){if(x.image.length!==6)return;let O=ee(w,x),Y=x.source;e.bindTexture(n.TEXTURE_CUBE_MAP,w.__webglTexture,n.TEXTURE0+D);let et=i.get(Y);if(Y.version!==et.__version||O===!0){e.activeTexture(n.TEXTURE0+D);let ft=se.getPrimaries(se.workingColorSpace),j=x.colorSpace===si?null:se.getPrimaries(x.colorSpace),K=x.colorSpace===si||ft===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,x.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,x.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let dt=x.isCompressedTexture||x.image[0].isCompressedTexture,gt=x.image[0]&&x.image[0].isDataTexture,ct=[];for(let lt=0;lt<6;lt++)!dt&&!gt?ct[lt]=m(x.image[lt],!0,s.maxCubemapSize):ct[lt]=gt?x.image[lt].image:x.image[lt],ct[lt]=_t(x,ct[lt]);let ht=ct[0],Rt=r.convert(x.format,x.colorSpace),Lt=r.convert(x.type),Vt=M(x.internalFormat,Rt,Lt,x.normalized,x.colorSpace),R=x.isVideoTexture!==!0,ot=et.__version===void 0||O===!0,tt=Y.dataReady,pt=A(x,ht);Ot(n.TEXTURE_CUBE_MAP,x);let vt;if(dt){R&&ot&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,ht.width,ht.height);for(let lt=0;lt<6;lt++){vt=ct[lt].mipmaps;for(let Ft=0;Ft<vt.length;Ft++){let Ut=vt[Ft];x.format!==_n?Rt!==null?R?tt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Ut.width,Ut.height,Rt,Ut.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,Vt,Ut.width,Ut.height,0,Ut.data):qt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Ut.width,Ut.height,Rt,Lt,Ut.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,Vt,Ut.width,Ut.height,0,Rt,Lt,Ut.data)}}}else{if(vt=x.mipmaps,R&&ot){vt.length>0&&pt++;let lt=xt(ct[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,Vt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(gt){R?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,ct[lt].width,ct[lt].height,Rt,Lt,ct[lt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Vt,ct[lt].width,ct[lt].height,0,Rt,Lt,ct[lt].data);for(let Ft=0;Ft<vt.length;Ft++){let me=vt[Ft].image[lt].image;R?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,me.width,me.height,Rt,Lt,me.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,Vt,me.width,me.height,0,Rt,Lt,me.data)}}else{R?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Rt,Lt,ct[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,Vt,Rt,Lt,ct[lt]);for(let Ft=0;Ft<vt.length;Ft++){let Ut=vt[Ft];R?tt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Rt,Lt,Ut.image[lt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,Vt,Rt,Lt,Ut.image[lt])}}}p(x)&&E(n.TEXTURE_CUBE_MAP),et.__version=Y.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function wt(w,x,D,O,Y,et){let ft=r.convert(D.format,D.colorSpace),j=r.convert(D.type),K=M(D.internalFormat,ft,j,D.normalized,D.colorSpace),dt=i.get(x),gt=i.get(D);if(gt.__renderTarget=x,!dt.__hasExternalTextures){let ct=Math.max(1,x.width>>et),ht=Math.max(1,x.height>>et);Y===n.TEXTURE_3D||Y===n.TEXTURE_2D_ARRAY?e.texImage3D(Y,et,K,ct,ht,x.depth,0,ft,j,null):e.texImage2D(Y,et,K,ct,ht,0,ft,j,null)}e.bindFramebuffer(n.FRAMEBUFFER,w),jt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,Y,gt.__webglTexture,0,Jt(x)):(Y===n.TEXTURE_2D||Y>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,Y,gt.__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Gt(w,x,D){if(n.bindRenderbuffer(n.RENDERBUFFER,w),x.depthBuffer){let O=x.depthTexture,Y=O&&O.isDepthTexture?O.type:null,et=b(x.stencilBuffer,Y),ft=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;jt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt(x),et,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt(x),et,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,et,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ft,n.RENDERBUFFER,w)}else{let O=x.textures;for(let Y=0;Y<O.length;Y++){let et=O[Y],ft=r.convert(et.format,et.colorSpace),j=r.convert(et.type),K=M(et.internalFormat,ft,j,et.normalized,et.colorSpace);jt(x)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Jt(x),K,x.width,x.height):D?n.renderbufferStorageMultisample(n.RENDERBUFFER,Jt(x),K,x.width,x.height):n.renderbufferStorage(n.RENDERBUFFER,K,x.width,x.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function he(w,x,D){let O=x.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Y=i.get(x.depthTexture);if(Y.__renderTarget=x,(!Y.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),O){if(Y.__webglInit===void 0&&(Y.__webglInit=!0,x.depthTexture.addEventListener("dispose",P)),Y.__webglTexture===void 0){Y.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,x.depthTexture);let dt=r.convert(x.depthTexture.format),gt=r.convert(x.depthTexture.type),ct;x.depthTexture.format===kn?ct=n.DEPTH_COMPONENT24:x.depthTexture.format===Ii&&(ct=n.DEPTH24_STENCIL8);for(let ht=0;ht<6;ht++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,ct,x.width,x.height,0,dt,gt,null)}}else nt(x.depthTexture,0);let et=Y.__webglTexture,ft=Jt(x),j=O?n.TEXTURE_CUBE_MAP_POSITIVE_X+D:n.TEXTURE_2D,K=x.depthTexture.format===Ii?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(x.depthTexture.format===kn)jt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,et,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,et,0);else if(x.depthTexture.format===Ii)jt(x)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,K,j,et,0,ft):n.framebufferTexture2D(n.FRAMEBUFFER,K,j,et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function z(w){let x=i.get(w),D=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let O=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),O){let Y=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,O.removeEventListener("dispose",Y)};O.addEventListener("dispose",Y),x.__depthDisposeCallback=Y}x.__boundDepthTexture=O}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(D)for(let O=0;O<6;O++)he(x.__webglFramebuffer[O],w,O);else{let O=w.texture.mipmaps;O&&O.length>0?he(x.__webglFramebuffer[0],w,0):he(x.__webglFramebuffer,w,0)}else if(D){x.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[O]),x.__webglDepthbuffer[O]===void 0)x.__webglDepthbuffer[O]=n.createRenderbuffer(),Gt(x.__webglDepthbuffer[O],w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,et)}}else{let O=w.texture.mipmaps;if(O&&O.length>0?e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=n.createRenderbuffer(),Gt(x.__webglDepthbuffer,w,!1);else{let Y=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=x.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Y,n.RENDERBUFFER,et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function at(w,x,D){let O=i.get(w);x!==void 0&&wt(O.__webglFramebuffer,w,w.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),D!==void 0&&z(w)}function At(w){let x=w.texture,D=i.get(w),O=i.get(x);w.addEventListener("dispose",_);let Y=w.textures,et=w.isWebGLCubeRenderTarget===!0,ft=Y.length>1;if(ft||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=x.version,a.memory.textures++),et){D.__webglFramebuffer=[];for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[j]=[];for(let K=0;K<x.mipmaps.length;K++)D.__webglFramebuffer[j][K]=n.createFramebuffer()}else D.__webglFramebuffer[j]=n.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let j=0;j<x.mipmaps.length;j++)D.__webglFramebuffer[j]=n.createFramebuffer()}else D.__webglFramebuffer=n.createFramebuffer();if(ft)for(let j=0,K=Y.length;j<K;j++){let dt=i.get(Y[j]);dt.__webglTexture===void 0&&(dt.__webglTexture=n.createTexture(),a.memory.textures++)}if(w.samples>0&&jt(w)===!1){D.__webglMultisampledFramebuffer=n.createFramebuffer(),D.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let j=0;j<Y.length;j++){let K=Y[j];D.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,D.__webglColorRenderbuffer[j]);let dt=r.convert(K.format,K.colorSpace),gt=r.convert(K.type),ct=M(K.internalFormat,dt,gt,K.normalized,K.colorSpace,w.isXRRenderTarget===!0),ht=Jt(w);n.renderbufferStorageMultisample(n.RENDERBUFFER,ht,ct,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,D.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),w.depthBuffer&&(D.__webglDepthRenderbuffer=n.createRenderbuffer(),Gt(D.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(et){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Ot(n.TEXTURE_CUBE_MAP,x);for(let j=0;j<6;j++)if(x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)wt(D.__webglFramebuffer[j][K],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,K);else wt(D.__webglFramebuffer[j],w,x,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(x)&&E(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ft){for(let j=0,K=Y.length;j<K;j++){let dt=Y[j],gt=i.get(dt),ct=n.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ct,gt.__webglTexture),Ot(ct,dt),wt(D.__webglFramebuffer,w,dt,n.COLOR_ATTACHMENT0+j,ct,0),p(dt)&&E(ct)}e.unbindTexture()}else{let j=n.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(j,O.__webglTexture),Ot(j,x),x.mipmaps&&x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)wt(D.__webglFramebuffer[K],w,x,n.COLOR_ATTACHMENT0,j,K);else wt(D.__webglFramebuffer,w,x,n.COLOR_ATTACHMENT0,j,0);p(x)&&E(j),e.unbindTexture()}w.depthBuffer&&z(w)}function Mt(w){let x=w.textures;for(let D=0,O=x.length;D<O;D++){let Y=x[D];if(p(Y)){let et=I(w),ft=i.get(Y).__webglTexture;e.bindTexture(et,ft),E(et),e.unbindTexture()}}}let Et=[],Pt=[];function ce(w){if(w.samples>0){if(jt(w)===!1){let x=w.textures,D=w.width,O=w.height,Y=n.COLOR_BUFFER_BIT,et=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ft=i.get(w),j=x.length>1;if(j)for(let dt=0;dt<x.length;dt++)e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ft.__webglMultisampledFramebuffer);let K=w.texture.mipmaps;K&&K.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglFramebuffer);for(let dt=0;dt<x.length;dt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(Y|=n.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(Y|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);let gt=i.get(x[dt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,gt,0)}n.blitFramebuffer(0,0,D,O,0,0,D,O,Y,n.NEAREST),c===!0&&(Et.length=0,Pt.length=0,Et.push(n.COLOR_ATTACHMENT0+dt),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&(Et.push(et),Pt.push(et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Et))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let dt=0;dt<x.length;dt++){e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,ft.__webglColorRenderbuffer[dt]);let gt=i.get(x[dt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ft.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,gt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ft.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&c){let x=w.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[x])}}}function Jt(w){return Math.min(s.maxSamples,w.samples)}function jt(w){let x=i.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function S(w){let x=a.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function _t(w,x){let D=w.colorSpace,O=w.format,Y=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||D!==Ys&&D!==si&&(se.getTransfer(D)===pe?(O!==_n||Y!==ln)&&qt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",D)),x}function xt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(o.width=w.naturalWidth||w.width,o.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(o.width=w.displayWidth,o.height=w.displayHeight):(o.width=w.width,o.height=w.height),o}this.allocateTextureUnit=J,this.resetTextureUnits=k,this.getTextureUnits=L,this.setTextureUnits=W,this.setTexture2D=nt,this.setTexture2DArray=B,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=at,this.setupRenderTarget=At,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=z,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=jt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Rg(n,t){function e(i,s=si){let r,a=se.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Da)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ua)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Il)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ll)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Rl)return n.BYTE;if(i===Pl)return n.SHORT;if(i===Es)return n.UNSIGNED_SHORT;if(i===Na)return n.INT;if(i===Pn)return n.UNSIGNED_INT;if(i===In)return n.FLOAT;if(i===Ln)return n.HALF_FLOAT;if(i===Nl)return n.ALPHA;if(i===Dl)return n.RGB;if(i===_n)return n.RGBA;if(i===kn)return n.DEPTH_COMPONENT;if(i===Ii)return n.DEPTH_STENCIL;if(i===Ul)return n.RED;if(i===Fa)return n.RED_INTEGER;if(i===Li)return n.RG;if(i===Oa)return n.RG_INTEGER;if(i===Ba)return n.RGBA_INTEGER;if(i===fr||i===pr||i===mr||i===gr)if(a===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===fr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===fr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ka||i===za||i===Va||i===Ha)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===ka)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===za)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Va)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ga||i===Wa||i===Xa||i===qa||i===Ya||i===xr||i===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ga||i===Wa)return a===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Xa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===qa)return r.COMPRESSED_R11_EAC;if(i===Ya)return r.COMPRESSED_SIGNED_R11_EAC;if(i===xr)return r.COMPRESSED_RG11_EAC;if(i===$a)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Ja||i===Za||i===Ka||i===ja||i===Qa||i===to||i===eo||i===no||i===io||i===so||i===ro||i===ao||i===oo||i===lo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ja)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Za)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ka)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ja)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Qa)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===to)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===eo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===no)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===io)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===so)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ro)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ao)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lo)return a===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===co||i===ho||i===uo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===co)return a===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ho)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===uo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===fo||i===po||i===_r||i===mo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Cs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}var Pg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
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

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new ir(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new tn({vertexShader:Pg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new le(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oc=class extends zn{constructor(t,e){super();let i=this,s=null,r=1,a=null,l="local-floor",c=1,o=null,h=null,f=null,u=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new ac,p={},E=e.getContextAttributes(),I=null,M=null,b=[],A=[],P=new ie,_=null,T=null,C=new Xe;C.viewport=new Te;let N=new Xe;N.viewport=new Te;let F=[C,N],k=new Ca,L=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let rt=b[it];return rt===void 0&&(rt=new vs,b[it]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(it){let rt=b[it];return rt===void 0&&(rt=new vs,b[it]=rt),rt.getGripSpace()},this.getHand=function(it){let rt=b[it];return rt===void 0&&(rt=new vs,b[it]=rt),rt.getHandSpace()};function J(it){let rt=A.indexOf(it.inputSource);if(rt===-1)return;let St=b[rt];St!==void 0&&(St.update(it.inputSource,it.frame,o||a),St.dispatchEvent({type:it.type,data:it.inputSource}))}function H(){s.removeEventListener("select",J),s.removeEventListener("selectstart",J),s.removeEventListener("selectend",J),s.removeEventListener("squeeze",J),s.removeEventListener("squeezestart",J),s.removeEventListener("squeezeend",J),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",nt);for(let it=0;it<b.length;it++){let rt=A[it];rt!==null&&(A[it]=null,b[it].disconnect(rt))}L=null,W=null,m.reset();for(let it in p)delete p[it];if(t.setRenderTarget(I),d=null,u=null,f=null,s=null,M=null,ee.stop(),i.isPresenting=!1,t.setPixelRatio(_),t.setSize(P.width,P.height,!1),T!==null){let it=T.camera;it.fov=T.fov,it.zoom=T.zoom,it.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&qt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){l=it,i.isPresenting===!0&&qt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||a},this.setReferenceSpace=function(it){o=it},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,e)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(I=t.getRenderTarget(),s.addEventListener("select",J),s.addEventListener("selectstart",J),s.addEventListener("selectend",J),s.addEventListener("squeeze",J),s.addEventListener("squeezestart",J),s.addEventListener("squeezeend",J),s.addEventListener("end",H),s.addEventListener("inputsourceschange",nt),E.xrCompatible!==!0&&await e.makeXRCompatible(),_=t.getPixelRatio(),t.getSize(P),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Ht=null,wt=null;E.depth&&(wt=E.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=E.stencil?Ii:kn,Ht=E.stencil?Cs:Pn);let Gt={colorFormat:e.RGBA8,depthFormat:wt,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Gt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new an(u.textureWidth,u.textureHeight,{format:_n,type:ln,depthTexture:new Si(u.textureWidth,u.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:E.stencil,colorSpace:t.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let St={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,St),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:_n,type:ln,colorSpace:t.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),o=null,a=await s.requestReferenceSpace(l),ee.setContext(s),ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function nt(it){for(let rt=0;rt<it.removed.length;rt++){let St=it.removed[rt],Ht=A.indexOf(St);Ht>=0&&(A[Ht]=null,b[Ht].disconnect(St))}for(let rt=0;rt<it.added.length;rt++){let St=it.added[rt],Ht=A.indexOf(St);if(Ht===-1){for(let Gt=0;Gt<b.length;Gt++)if(Gt>=A.length){A.push(St),Ht=Gt;break}else if(A[Gt]===null){A[Gt]=St,Ht=Gt;break}if(Ht===-1)break}let wt=b[Ht];wt&&wt.connect(St)}}let B=new V,G=new V;function Z(it,rt,St){B.setFromMatrixPosition(rt.matrixWorld),G.setFromMatrixPosition(St.matrixWorld);let Ht=B.distanceTo(G),wt=rt.projectionMatrix.elements,Gt=St.projectionMatrix.elements,he=wt[14]/(wt[10]-1),z=wt[14]/(wt[10]+1),at=(wt[9]+1)/wt[5],At=(wt[9]-1)/wt[5],Mt=(wt[8]-1)/wt[0],Et=(Gt[8]+1)/Gt[0],Pt=he*Mt,ce=he*Et,Jt=Ht/(-Mt+Et),jt=Jt*-Mt;if(rt.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(jt),it.translateZ(Jt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),wt[10]===-1)it.projectionMatrix.copy(rt.projectionMatrix),it.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{let S=he+Jt,_t=z+Jt,xt=Pt-jt,w=ce+(Ht-jt),x=at*z/_t*S,D=At*z/_t*S;it.projectionMatrix.makePerspective(xt,w,x,D,S,_t),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function ut(it,rt){rt===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(rt.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let rt=it.near,St=it.far;m.texture!==null&&(m.depthNear>0&&(rt=m.depthNear),m.depthFar>0&&(St=m.depthFar)),k.near=N.near=C.near=rt,k.far=N.far=C.far=St,(L!==k.near||W!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),L=k.near,W=k.far),k.layers.mask=it.layers.mask|6,C.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let Ht=it.parent,wt=k.cameras;ut(k,Ht);for(let Gt=0;Gt<wt.length;Gt++)ut(wt[Gt],Ht);wt.length===2?Z(k,C,N):k.projectionMatrix.copy(C.projectionMatrix),T===null&&it.isPerspectiveCamera&&(T={camera:it,fov:it.fov,zoom:it.zoom}),mt(it,k,Ht)};function mt(it,rt,St){St===null?it.matrix.copy(rt.matrixWorld):(it.matrix.copy(St.matrixWorld),it.matrix.invert(),it.matrix.multiply(rt.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(rt.projectionMatrix),it.projectionMatrixInverse.copy(rt.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=aa*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(it){c=it,u!==null&&(u.fixedFoveation=it),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(it){return p[it]};let Xt=null;function Ot(it,rt){if(h=rt.getViewerPose(o||a),g=rt,h!==null){let St=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ht=!1;St.length!==k.cameras.length&&(k.cameras.length=0,Ht=!0);for(let z=0;z<St.length;z++){let at=St[z],At=null;if(d!==null)At=d.getViewport(at);else{let Et=f.getViewSubImage(u,at);At=Et.viewport,z===0&&(t.setRenderTargetTextures(M,Et.colorTexture,Et.depthStencilTexture),t.setRenderTarget(M))}let Mt=F[z];Mt===void 0&&(Mt=new Xe,Mt.layers.enable(z),Mt.viewport=new Te,F[z]=Mt),Mt.matrix.fromArray(at.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(at.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(At.x,At.y,At.width,At.height),z===0&&(k.matrix.copy(Mt.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ht===!0&&k.cameras.push(Mt)}let wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let z=f.getDepthInformation(St[0]);z&&z.isValid&&z.texture&&m.init(z,s.renderState)}if(wt&&wt.includes("camera-access")&&v){t.state.unbindTexture(),f=i.getBinding();for(let z=0;z<St.length;z++){let at=St[z].camera;if(at){let At=p[at];At||(At=new ir,p[at]=At);let Mt=f.getCameraImage(at);At.sourceTexture=Mt}}}}for(let St=0;St<b.length;St++){let Ht=A[St],wt=b[St];Ht!==null&&wt!==void 0&&wt.update(Ht,rt,o||a)}Xt&&Xt(it,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}let ee=new mu;ee.setAnimationLoop(Ot),this.setAnimationLoop=function(it){Xt=it},this.dispose=function(){}}},Lg=new Se,Mu=new Zt;Mu.set(-1,0,0,0,1,0,0,0,1);function Ng(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Bl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,E,I,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?c(m,p,E,I):p.isSpriteMaterial?o(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===en&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===en&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let E=t.get(p),I=E.envMap,M=E.envMapRotation;I&&(m.envMap.value=I,m.envMapRotation.value.setFromMatrix4(Lg.makeRotationFromEuler(M)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Mu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,E,I){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=I*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===en&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let E=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Dg(n,t,e,i){let s={},r={},a=[],l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,b){let A=b.program;i.uniformBlockBinding(M,A)}function o(M,b){let A=s[M.id];A===void 0&&(m(M),A=h(M),s[M.id]=A,M.addEventListener("dispose",E));let P=b.program;i.updateUBOMapping(M,P);let _=t.render.frame;r[M.id]!==_&&(u(M),r[M.id]=_)}function h(M){let b=f();M.__bindingPointIndex=b;let A=n.createBuffer(),P=M.__size,_=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,_),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,A),A}function f(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let b=s[M.id],A=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let _=0,T=A.length;_<T;_++){let C=A[_];if(Array.isArray(C))for(let N=0,F=C.length;N<F;N++)d(C[N],_,N,P);else d(C,_,0,P)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,A,P){if(v(M,b,A,P)===!0){let _=M.__offset,T=M.value;if(Array.isArray(T)){let C=0;for(let N=0;N<T.length;N++){let F=T[N],k=p(F);g(F,M.__data,C),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(C+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,_,M.__data)}}function g(M,b,A){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,A)}function v(M,b,A,P){let _=M.value,T=b+"_"+A;if(P[T]===void 0)return typeof _=="number"||typeof _=="boolean"?P[T]=_:ArrayBuffer.isView(_)?P[T]=_.slice():P[T]=_.clone(),!0;{let C=P[T];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return P[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){let b=M.uniforms,A=0,P=16;for(let T=0,C=b.length;T<C;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,k=N.length;F<k;F++){let L=N[F],W=Array.isArray(L.value)?L.value:[L.value];for(let J=0,H=W.length;J<H;J++){let nt=W[J],B=p(nt),G=A%P,Z=G%B.boundary,ut=G+Z;A+=Z,ut!==0&&P-ut<B.storage&&(A+=P-ut),L.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=A,A+=B.storage}}}let _=A%P;return _>0&&(A+=P-_),M.__size=A,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?qt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):qt("WebGLRenderer: Unsupported uniform value type.",M),b}function E(M){let b=M.target;b.removeEventListener("dispose",E);let A=a.indexOf(b.__bindingPointIndex);a.splice(A,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function I(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:o,dispose:I}}var Ug=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;function Fg(){return Hn===null&&(Hn=new ua(Ug,16,16,Li,Ln),Hn.name="DFG_LUT",Hn.minFilter=Be,Hn.magFilter=Be,Hn.wrapS=Bn,Hn.wrapT=Bn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var bo=class{constructor(t={}){let{canvas:e=zh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=ln}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=d,m=new Set([Ba,Oa,Fa]),p=new Set([ln,Pn,Es,Cs,Da,Ua]),E=new Uint32Array(4),I=new Int32Array(4),M=new V,b=null,A=null,P=[],_=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,k=null,L=null,W=null;this._outputColorSpace=Ke;let J=0,H=0,nt=null,B=-1,G=null,Z=new Te,ut=new Te,mt=null,Xt=new Kt(0),Ot=0,ee=e.width,it=e.height,rt=1,St=null,Ht=null,wt=new Te(0,0,ee,it),Gt=new Te(0,0,ee,it),he=!1,z=new Ms,at=!1,At=!1,Mt=new Se,Et=new V,Pt=new Te,ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Jt=!1;function jt(){return nt===null?rt:1}let S=i;function _t(y,U){return e.getContext(y,U)}let xt,w,x,D,O,Y,et,ft,j,K,dt,gt,ct,ht,Rt,Lt,Vt,R,ot,tt,pt,vt,lt;try{let y={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",me,!1),e.addEventListener("webglcontextrestored",de,!1),e.addEventListener("webglcontextcreationerror",Mn,!1),S===null){let U="webgl2";if(S=_t(U,y),S===null)throw _t(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ft()}catch(y){throw e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Yt("WebGLRenderer: "+y.message),y}function Ft(){xt=new Gm(S),xt.init(),pt=new Rg(S,xt),w=new Nm(S,xt,t,pt),x=new Eg(S,xt),w.reversedDepthBuffer&&u&&x.buffers.depth.setReversed(!0),k=S.createFramebuffer(),L=S.createFramebuffer(),W=S.createFramebuffer(),D=new qm(S),O=new fg,Y=new Cg(S,xt,x,O,w,pt,D),et=new Hm(C),ft=new Yd(S),vt=new Im(S,ft),j=new Wm(S,ft,D,vt),K=new $m(S,j,ft,vt,D),R=new Ym(S,w,Y),Rt=new Dm(O),dt=new dg(C,et,xt,w,vt,Rt),gt=new Ng(C,O),ct=new mg,ht=new Mg(xt),Vt=new Pm(C,et,x,K,g,c),Lt=new Ag(C,K,w),lt=new Dg(S,D,w,x),ot=new Lm(S,xt,D),tt=new Xm(S,xt,D),D.programs=dt.programs,C.capabilities=w,C.extensions=xt,C.properties=O,C.renderLists=ct,C.shadowMap=Lt,C.state=x,C.info=D}v!==ln&&(T=new Zm(v,e.width,e.height,l,s,r));let Ut=new oc(C,S);this.xr=Ut,this.getContext=function(){return S},this.getContextAttributes=function(){return S.getContextAttributes()},this.forceContextLoss=function(){let y=xt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=xt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return rt},this.setPixelRatio=function(y){y!==void 0&&(rt=y,this.setSize(ee,it,!1))},this.getSize=function(y){return y.set(ee,it)},this.setSize=function(y,U,Q=!0){if(Ut.isPresenting){qt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=y,it=U,e.width=Math.floor(y*rt),e.height=Math.floor(U*rt),Q===!0&&(e.style.width=y+"px",e.style.height=U+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(ee*rt,it*rt).floor()},this.setDrawingBufferSize=function(y,U,Q){ee=y,it=U,rt=Q,e.width=Math.floor(y*Q),e.height=Math.floor(U*Q),this.setViewport(0,0,y,U)},this.setEffects=function(y){if(v===ln){Yt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let U=0;U<y.length;U++)if(y[U].isOutputPass===!0){qt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Z)},this.getViewport=function(y){return y.copy(wt)},this.setViewport=function(y,U,Q,X){y.isVector4?wt.set(y.x,y.y,y.z,y.w):wt.set(y,U,Q,X),x.viewport(Z.copy(wt).multiplyScalar(rt).round())},this.getScissor=function(y){return y.copy(Gt)},this.setScissor=function(y,U,Q,X){y.isVector4?Gt.set(y.x,y.y,y.z,y.w):Gt.set(y,U,Q,X),x.scissor(ut.copy(Gt).multiplyScalar(rt).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(y){x.setScissorTest(he=y)},this.setOpaqueSort=function(y){St=y},this.setTransparentSort=function(y){Ht=y},this.getClearColor=function(y){return y.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor(...arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha(...arguments)},this.clear=function(y=!0,U=!0,Q=!0){let X=0;if(y){let q=!1;if(nt!==null){let Ct=nt.texture.format;q=m.has(Ct)}if(q){let Ct=nt.texture.type,Dt=p.has(Ct),Tt=Vt.getClearColor(),Bt=Vt.getClearAlpha(),zt=Tt.r,Qt=Tt.g,ne=Tt.b;Dt?(E[0]=zt,E[1]=Qt,E[2]=ne,E[3]=Bt,S.clearBufferuiv(S.COLOR,0,E)):(I[0]=zt,I[1]=Qt,I[2]=ne,I[3]=Bt,S.clearBufferiv(S.COLOR,0,I))}else X|=S.COLOR_BUFFER_BIT}U&&(X|=S.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(X|=S.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&S.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){e.removeEventListener("webglcontextlost",me,!1),e.removeEventListener("webglcontextrestored",de,!1),e.removeEventListener("webglcontextcreationerror",Mn,!1),Vt.dispose(),ct.dispose(),ht.dispose(),O.dispose(),et.dispose(),K.dispose(),vt.dispose(),lt.dispose(),dt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",Pc),Ut.removeEventListener("sessionend",Ic),Ui.stop()};function me(y){y.preventDefault(),Ol("WebGLRenderer: Context Lost."),N=!0}function de(){Ol("WebGLRenderer: Context Restored."),N=!1;let y=D.autoReset,U=Lt.enabled,Q=Lt.autoUpdate,X=Lt.needsUpdate,q=Lt.type;Ft(),D.autoReset=y,Lt.enabled=U,Lt.autoUpdate=Q,Lt.needsUpdate=X,Lt.type=q}function Mn(y){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Un(y){let U=y.target;U.removeEventListener("dispose",Un),sd(U)}function sd(y){rd(y),O.remove(y)}function rd(y){let U=O.get(y).programs;U!==void 0&&(U.forEach(function(Q){dt.releaseProgram(Q)}),y.isShaderMaterial&&dt.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,Q,X,q,Ct){U===null&&(U=ce);let Dt=q.isMesh&&q.matrixWorld.determinantAffine()<0,Tt=ld(y,U,Q,X,q);x.setMaterial(X,Dt);let Bt=Q.index,zt=1;if(X.wireframe===!0){if(Bt=j.getWireframeAttribute(Q),Bt===void 0)return;zt=2}let Qt=Q.drawRange,ne=Q.attributes.position,kt=Qt.start*zt,fe=(Qt.start+Qt.count)*zt;Ct!==null&&(kt=Math.max(kt,Ct.start*zt),fe=Math.min(fe,(Ct.start+Ct.count)*zt)),Bt!==null?(kt=Math.max(kt,0),fe=Math.min(fe,Bt.count)):ne!=null&&(kt=Math.max(kt,0),fe=Math.min(fe,ne.count));let Ce=fe-kt;if(Ce<0||Ce===1/0)return;vt.setup(q,X,Tt,Q,Bt);let ye,xe=ot;if(Bt!==null&&(ye=ft.get(Bt),xe=tt,xe.setIndex(ye)),q.isMesh)X.wireframe===!0?(x.setLineWidth(X.wireframeLinewidth*jt()),xe.setMode(S.LINES)):xe.setMode(S.TRIANGLES);else if(q.isLine){let He=X.linewidth;He===void 0&&(He=1),x.setLineWidth(He*jt()),q.isLineSegments?xe.setMode(S.LINES):q.isLineLoop?xe.setMode(S.LINE_LOOP):xe.setMode(S.LINE_STRIP)}else q.isPoints?xe.setMode(S.POINTS):q.isSprite&&xe.setMode(S.TRIANGLES);if(q.isBatchedMesh)if(xt.get("WEBGL_multi_draw"))xe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let He=q._multiDrawStarts,Nt=q._multiDrawCounts,Ze=q._multiDrawCount,oe=Bt?ft.get(Bt).bytesPerElement:1,gn=O.get(X).currentProgram.getUniforms();for(let Fn=0;Fn<Ze;Fn++)gn.setValue(S,"_gl_DrawID",Fn),xe.render(He[Fn]/oe,Nt[Fn])}else if(q.isInstancedMesh)xe.renderInstances(kt,Ce,q.count);else if(Q.isInstancedBufferGeometry){let He=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Nt=Math.min(Q.instanceCount,He);xe.renderInstances(kt,Ce,Nt)}else xe.render(kt,Ce)};function Rc(y,U,Q,X){F!==null&&y.isNodeMaterial&&F.setObject(X,y),at===!0&&Rt.setState(y,Q,!1),y.transparent===!0&&y.side===Cn&&y.forceSinglePass===!1?(y.side=en,y.needsUpdate=!0,Rr(y,U,X),y.side=Ci,y.needsUpdate=!0,Rr(y,U,X),y.side=Cn):Rr(y,U,X)}this.compile=function(y,U,Q=null){Q===null&&(Q=y),F!==null&&F.renderStart(y,U,Q),A=ht.get(Q),A.init(U),_.push(A),Q.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),y!==Q&&y.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),A.setupLights(),F!==null&&F.updateLights(A.state.lightsArray),At=this.localClippingEnabled,at=Rt.init(this.clippingPlanes,At),at===!0&&Rt.setGlobalState(this.clippingPlanes,U),F!==null&&Lt.render(A.state.shadowsArray,Q,U);let X=new Set;return y.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Ct=q.material;if(Ct)if(Array.isArray(Ct))for(let Dt=0;Dt<Ct.length;Dt++){let Tt=Ct[Dt];Rc(Tt,Q,U,q),X.add(Tt)}else Rc(Ct,Q,U,q),X.add(Ct)}),A=_.pop(),F!==null&&F.renderEnd(),X},this.compileAsync=function(y,U,Q=null){let X=this.compile(y,U,Q);return new Promise(q=>{function Ct(){if(X.forEach(function(Dt){let Bt=O.get(Dt).currentProgram;(Bt===void 0||Bt.isReady())&&X.delete(Dt)}),X.size===0){q(y);return}setTimeout(Ct,10)}xt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let Bo=null;function ad(y){Bo&&Bo(y)}function Pc(){Ui.stop()}function Ic(){Ui.start()}let Ui=new mu;Ui.setAnimationLoop(ad),typeof self<"u"&&Ui.setContext(self),this.setAnimationLoop=function(y){Bo=y,Ut.setAnimationLoop(y),y===null?Ui.stop():Ui.start()},Ut.addEventListener("sessionstart",Pc),Ut.addEventListener("sessionend",Ic),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,U);let Q=Ut.enabled===!0&&Ut.isPresenting===!0,X=T!==null&&(nt===null||Q)&&T.begin(C,nt);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(U),U=Ut.getCamera()),y.isScene===!0&&y.onBeforeRender(C,y,U,nt),A=ht.get(y,_.length),A.init(U),A.state.textureUnits=Y.getTextureUnits(),_.push(A),Mt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),z.setFromProjectionMatrix(Mt,An,U.reversedDepth),At=this.localClippingEnabled,at=Rt.init(this.clippingPlanes,At),b=ct.get(y,P.length),b.init(),P.push(b),Ut.enabled===!0&&Ut.isPresenting===!0){let Dt=C.xr.getDepthSensingMesh();Dt!==null&&ko(Dt,U,-1/0,C.sortObjects)}ko(y,U,0,C.sortObjects),b.finish(),F!==null&&F.updateLights(A.state.lightsArray),C.sortObjects===!0&&b.sort(St,Ht),Jt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,Jt&&Vt.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),at===!0&&Rt.beginShadows();let q=A.state.shadowsArray;if(Lt.render(q,y,U),at===!0&&Rt.endShadows(),(X&&T.hasRenderPass())===!1){let Dt=b.opaque,Tt=b.transmissive;if(A.setupLights(),U.isArrayCamera){let Bt=U.cameras;if(Tt.length>0)for(let zt=0,Qt=Bt.length;zt<Qt;zt++){let ne=Bt[zt];Nc(Dt,Tt,y,ne)}Jt&&Vt.render(y);for(let zt=0,Qt=Bt.length;zt<Qt;zt++){let ne=Bt[zt];Lc(b,y,ne,ne.viewport)}}else Tt.length>0&&Nc(Dt,Tt,y,U),Jt&&Vt.render(y),Lc(b,y,U)}nt!==null&&H===0&&(Y.updateMultisampleRenderTarget(nt),Y.updateRenderTargetMipmap(nt)),X&&T.end(C),y.isScene===!0&&y.onAfterRender(C,y,U),vt.resetDefaultState(),B=-1,G=null,_.pop(),_.length>0?(A=_[_.length-1],Y.setTextureUnits(A.state.textureUnits),at===!0&&Rt.setGlobalState(C.clippingPlanes,A.state.camera)):A=null,P.pop(),P.length>0?b=P[P.length-1]:b=null,F!==null&&F.renderEnd()};function ko(y,U,Q,X){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)Q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLightProbeGrid)A.pushLightProbeGrid(y);else if(y.isLight)A.pushLight(y),y.castShadow&&A.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(z)){X&&Pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Mt);let Dt=K.update(y),Tt=y.material;Tt.visible&&b.push(y,Dt,Tt,Q,Pt.z,null,U)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(z))){let Dt=K.update(y),Tt=y.material;if(X&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Pt.copy(y.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Pt.copy(Dt.boundingSphere.center)),Pt.applyMatrix4(y.matrixWorld).applyMatrix4(Mt)),Array.isArray(Tt)){let Bt=Dt.groups;for(let zt=0,Qt=Bt.length;zt<Qt;zt++){let ne=Bt[zt],kt=Tt[ne.materialIndex];kt&&kt.visible&&b.push(y,Dt,kt,Q,Pt.z,ne,U)}}else Tt.visible&&b.push(y,Dt,Tt,Q,Pt.z,null,U)}}let Ct=y.children;for(let Dt=0,Tt=Ct.length;Dt<Tt;Dt++)ko(Ct[Dt],U,Q,X)}function Lc(y,U,Q,X){let{opaque:q,transmissive:Ct,transparent:Dt}=y;A.setupLightsView(Q),at===!0&&Rt.setGlobalState(C.clippingPlanes,Q),X&&x.viewport(Z.copy(X)),q.length>0&&Cr(q,U,Q),Ct.length>0&&Cr(Ct,U,Q),Dt.length>0&&Cr(Dt,U,Q),x.buffers.depth.setTest(!0),x.buffers.depth.setMask(!0),x.buffers.color.setMask(!0),x.setPolygonOffset(!1)}function Nc(y,U,Q,X){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){let kt=xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new an(1,1,{generateMipmaps:!0,type:kt?Ln:ln,minFilter:Pi,samples:Math.max(4,w.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let Ct=A.state.transmissionRenderTarget[X.id],Dt=X.viewport||Z;Ct.setSize(Dt.z*C.transmissionResolutionScale,Dt.w*C.transmissionResolutionScale);let Tt=C.getRenderTarget(),Bt=C.getActiveCubeFace(),zt=C.getActiveMipmapLevel();C.setRenderTarget(Ct),C.getClearColor(Xt),Ot=C.getClearAlpha(),Ot<1&&C.setClearColor(16777215,.5),C.clear(),Jt&&Vt.render(Q);let Qt=C.toneMapping;C.toneMapping=Rn;let ne=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),at===!0&&Rt.setGlobalState(C.clippingPlanes,X),Cr(y,Q,X),Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct),xt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let fe=0,Ce=U.length;fe<Ce;fe++){let ye=U[fe],{object:xe,geometry:He,material:Nt,group:Ze}=ye;if(Nt.side===Cn&&xe.layers.test(X.layers)){let oe=Nt.side;Nt.side=en,Nt.needsUpdate=!0,Dc(xe,Q,X,He,Nt,Ze),Nt.side=oe,Nt.needsUpdate=!0,kt=!0}}kt===!0&&(Y.updateMultisampleRenderTarget(Ct),Y.updateRenderTargetMipmap(Ct))}C.setRenderTarget(Tt,Bt,zt),C.setClearColor(Xt,Ot),ne!==void 0&&(X.viewport=ne),C.toneMapping=Qt}function Cr(y,U,Q){let X=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Ct=y.length;q<Ct;q++){let Dt=y[q],{object:Tt,geometry:Bt,group:zt}=Dt,Qt=Dt.material;Qt.allowOverride===!0&&X!==null&&(Qt=X),Tt.layers.test(Q.layers)&&Dc(Tt,U,Q,Bt,Qt,zt)}}function Dc(y,U,Q,X,q,Ct){F!==null&&q.isNodeMaterial&&F.setObject(y,q),y.onBeforeRender(C,U,Q,X,q,Ct),y.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(C,U,Q,X,y,Ct),q.transparent===!0&&q.side===Cn&&q.forceSinglePass===!1?(q.side=en,q.needsUpdate=!0,C.renderBufferDirect(Q,U,X,q,y,Ct),q.side=Ci,q.needsUpdate=!0,C.renderBufferDirect(Q,U,X,q,y,Ct),q.side=Cn):C.renderBufferDirect(Q,U,X,q,y,Ct),y.onAfterRender(C,U,Q,X,q,Ct)}function Rr(y,U,Q){U.isScene!==!0&&(U=ce);let X=O.get(y),q=A.state.lights,Ct=A.state.shadowsArray,Dt=q.state.version,Tt=dt.getParameters(y,q.state,Ct,U,Q,A.state.lightProbeGridArray),Bt=dt.getProgramCacheKey(Tt),zt=X.programs;X.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?U.environment:null,X.fog=U.fog;let Qt=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;X.envMap=et.get(y.envMap||X.environment,Qt),X.envMapRotation=X.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,zt===void 0&&(y.addEventListener("dispose",Un),zt=new Map,X.programs=zt);let ne=zt.get(Bt);if(ne!==void 0){if(X.currentProgram===ne&&X.lightsStateVersion===Dt)return Fc(y,Tt),ne}else Tt.uniforms=dt.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,Q,Tt),y.onBeforeCompile(Tt,C),ne=dt.acquireProgram(Tt,Bt),zt.set(Bt,ne),X.uniforms=Tt.uniforms;let kt=X.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(kt.clippingPlanes=Rt.uniform),Fc(y,Tt),X.needsLights=hd(y),X.lightsStateVersion=Dt,X.needsLights&&(kt.ambientLightColor.value=q.state.ambient,kt.lightProbe.value=q.state.probe,kt.sunLights.value=q.state.sun,kt.sunLightShadows.value=q.state.sunShadow,kt.directionalLights.value=q.state.directional,kt.directionalLightShadows.value=q.state.directionalShadow,kt.spotLights.value=q.state.spot,kt.spotLightShadows.value=q.state.spotShadow,kt.rectAreaLights.value=q.state.rectArea,kt.ltc_1.value=q.state.rectAreaLTC1,kt.ltc_2.value=q.state.rectAreaLTC2,kt.pointLights.value=q.state.point,kt.pointLightShadows.value=q.state.pointShadow,kt.hemisphereLights.value=q.state.hemi,kt.sunShadowMatrix.value=q.state.sunShadowMatrix,kt.sunShadowCascade.value=q.state.sunShadowCascade,kt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,kt.spotLightMatrix.value=q.state.spotLightMatrix,kt.spotLightMap.value=q.state.spotLightMap,kt.pointShadowMatrix.value=q.state.pointShadowMatrix),X.lightProbeGrid=A.state.lightProbeGridArray.length>0,X.currentProgram=ne,X.uniformsList=null,ne}function Uc(y){if(y.uniformsList===null){let U=y.currentProgram.getUniforms();y.uniformsList=Is.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Fc(y,U){let Q=O.get(y);Q.outputColorSpace=U.outputColorSpace,Q.batching=U.batching,Q.batchingColor=U.batchingColor,Q.instancing=U.instancing,Q.instancingColor=U.instancingColor,Q.instancingMorph=U.instancingMorph,Q.skinning=U.skinning,Q.morphTargets=U.morphTargets,Q.morphNormals=U.morphNormals,Q.morphColors=U.morphColors,Q.morphTargetsCount=U.morphTargetsCount,Q.numClippingPlanes=U.numClippingPlanes,Q.numIntersection=U.numClipIntersection,Q.vertexAlphas=U.vertexAlphas,Q.vertexTangents=U.vertexTangents,Q.toneMapping=U.toneMapping}function od(y,U){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(U.matrixWorld);for(let Q=0,X=y.length;Q<X;Q++){let q=y[Q];if(q.texture!==null&&q.boundingBox.containsPoint(M))return q}return null}function ld(y,U,Q,X,q){U.isScene!==!0&&(U=ce),Y.resetTextureUnits();let Ct=U.fog,Dt=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?U.environment:null,Tt=nt===null?C.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:se.workingColorSpace,Bt=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,zt=et.get(X.envMap||Dt,Bt),Qt=X.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ne=!!Q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),kt=!!Q.morphAttributes.position,fe=!!Q.morphAttributes.normal,Ce=!!Q.morphAttributes.color,ye=Rn;X.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(ye=C.toneMapping);let xe=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,He=xe!==void 0?xe.length:0,Nt=O.get(X),Ze=A.state.lights;if(at===!0&&(At===!0||y!==G)){let _e=y===G&&X.id===B;Rt.setState(X,y,_e)}let oe=!1;X.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==Ze.state.version||Nt.outputColorSpace!==Tt||q.isBatchedMesh&&Nt.batching===!1||!q.isBatchedMesh&&Nt.batching===!0||q.isBatchedMesh&&Nt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Nt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Nt.instancing===!1||!q.isInstancedMesh&&Nt.instancing===!0||q.isSkinnedMesh&&Nt.skinning===!1||!q.isSkinnedMesh&&Nt.skinning===!0||q.isInstancedMesh&&Nt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Nt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Nt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Nt.instancingMorph===!1&&q.morphTexture!==null||Nt.envMap!==zt||X.fog===!0&&Nt.fog!==Ct||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==Rt.numPlanes||Nt.numIntersection!==Rt.numIntersection)||Nt.vertexAlphas!==Qt||Nt.vertexTangents!==ne||Nt.morphTargets!==kt||Nt.morphNormals!==fe||Nt.morphColors!==Ce||Nt.toneMapping!==ye||Nt.morphTargetsCount!==He||!!Nt.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(oe=!0):(oe=!0,Nt.__version=X.version);let gn=Nt.currentProgram;oe===!0&&(gn=Rr(X,U,q),F&&X.isNodeMaterial&&F.onUpdateProgram(X,gn,Nt));let Fn=!1,hi=!1,ji=!1,ge=gn.getUniforms(),Ee=Nt.uniforms;if(x.useProgram(gn.program)&&(Fn=!0,hi=!0,ji=!0),X.id!==B&&(B=X.id,hi=!0),Nt.needsLights){let _e=od(A.state.lightProbeGridArray,q);Nt.lightProbeGrid!==_e&&(Nt.lightProbeGrid=_e,hi=!0)}if(Fn||G!==y){x.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ge.setValue(S,"projectionMatrix",y.projectionMatrix),ge.setValue(S,"viewMatrix",y.matrixWorldInverse);let di=ge.map.cameraPosition;di!==void 0&&di.setValue(S,Et.setFromMatrixPosition(y.matrixWorld)),w.logarithmicDepthBuffer&&ge.setValue(S,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&ge.setValue(S,"isOrthographic",y.isOrthographicCamera===!0),G!==y&&(G=y,hi=!0,ji=!0)}if(Nt.needsLights&&(Ze.state.sunShadowMap.length>0&&ge.setValue(S,"sunShadowMap",Ze.state.sunShadowMap,Y),Ze.state.directionalShadowMap.length>0&&ge.setValue(S,"directionalShadowMap",Ze.state.directionalShadowMap,Y),Ze.state.spotShadowMap.length>0&&ge.setValue(S,"spotShadowMap",Ze.state.spotShadowMap,Y),Ze.state.pointShadowMap.length>0&&ge.setValue(S,"pointShadowMap",Ze.state.pointShadowMap,Y)),q.isSkinnedMesh){ge.setOptional(S,q,"bindMatrix"),ge.setOptional(S,q,"bindMatrixInverse");let _e=q.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),ge.setValue(S,"boneTexture",_e.boneTexture,Y))}q.isBatchedMesh&&(ge.setOptional(S,q,"batchingTexture"),ge.setValue(S,"batchingTexture",q._matricesTexture,Y),ge.setOptional(S,q,"batchingIdTexture"),ge.setValue(S,"batchingIdTexture",q._indirectTexture,Y),ge.setOptional(S,q,"batchingColorTexture"),q._colorsTexture!==null&&ge.setValue(S,"batchingColorTexture",q._colorsTexture,Y));let ui=Q.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&R.update(q,Q,gn),(hi||Nt.receiveShadow!==q.receiveShadow)&&(Nt.receiveShadow=q.receiveShadow,ge.setValue(S,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&U.environment!==null&&(Ee.envMapIntensity.value=U.environmentIntensity),Ee.dfgLUT!==void 0&&(Ee.dfgLUT.value=Fg()),hi){if(ge.setValue(S,"toneMappingExposure",C.toneMappingExposure),Nt.needsLights&&cd(Ee,ji),Ct&&X.fog===!0&&gt.refreshFogUniforms(Ee,Ct),gt.refreshMaterialUniforms(Ee,X,rt,it,A.state.transmissionRenderTarget[y.id]),Nt.needsLights&&Nt.lightProbeGrid){let _e=Nt.lightProbeGrid;Ee.probesSH.value=_e.texture,Ee.probesMin.value.copy(_e.boundingBox.min),Ee.probesMax.value.copy(_e.boundingBox.max),Ee.probesResolution.value.copy(_e.resolution)}Is.upload(S,Uc(Nt),Ee,Y)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Is.upload(S,Uc(Nt),Ee,Y),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&ge.setValue(S,"center",q.center),ge.setValue(S,"modelViewMatrix",q.modelViewMatrix),ge.setValue(S,"normalMatrix",q.normalMatrix),ge.setValue(S,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){let _e=X.uniformsGroups;for(let di=0,Qi=_e.length;di<Qi;di++){let Bc=_e[di];lt.update(Bc,gn),lt.bind(Bc,gn)}}return gn}function cd(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.sunLights.needsUpdate=U,y.sunLightShadows.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function hd(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return nt},this.setRenderTargetTextures=function(y,U,Q){let X=O.get(y);X.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),O.get(y.texture).__webglTexture=U,O.get(y.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,U){let Q=O.get(y);Q.__webglFramebuffer=U,Q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,Q=0){nt=y,J=U,H=Q;let X=null,q=!1,Ct=!1;if(y){let Tt=O.get(y);if(Tt.__useDefaultFramebuffer!==void 0){x.bindFramebuffer(S.FRAMEBUFFER,Tt.__webglFramebuffer),Z.copy(y.viewport),ut.copy(y.scissor),mt=y.scissorTest,x.viewport(Z),x.scissor(ut),x.setScissorTest(mt),B=-1;return}else if(Tt.__webglFramebuffer===void 0)Y.setupRenderTarget(y);else if(Tt.__hasExternalTextures)Y.rebindTextures(y,O.get(y.texture).__webglTexture,O.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Qt=y.depthTexture;if(Tt.__boundDepthTexture!==Qt){if(Qt!==null&&O.has(Qt)&&(y.width!==Qt.image.width||y.height!==Qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(y)}}let Bt=y.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Ct=!0);let zt=O.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(zt[U])?X=zt[U][Q]:X=zt[U],q=!0):y.samples>0&&Y.useMultisampledRTT(y)===!1?X=O.get(y).__webglMultisampledFramebuffer:Array.isArray(zt)?X=zt[Q]:X=zt,Z.copy(y.viewport),ut.copy(y.scissor),mt=y.scissorTest}else Z.copy(wt).multiplyScalar(rt).floor(),ut.copy(Gt).multiplyScalar(rt).floor(),mt=he;if(Q!==0&&(X=k),x.bindFramebuffer(S.FRAMEBUFFER,X)&&x.drawBuffers(y,X),x.viewport(Z),x.scissor(ut),x.setScissorTest(mt),q){let Tt=O.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_CUBE_MAP_POSITIVE_X+U,Tt.__webglTexture,Q)}else if(Ct){let Tt=U;for(let Bt=0;Bt<y.textures.length;Bt++){let zt=O.get(y.textures[Bt]);S.framebufferTextureLayer(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0+Bt,zt.__webglTexture,Q,Tt)}}else if(y!==null&&Q!==0){let Tt=O.get(y.texture);S.framebufferTexture2D(S.FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Tt.__webglTexture,Q)}B=-1};function Oc(y){let U=O.get(y);return(U.__readFormat!==y.format||U.__readType!==y.type)&&(U.__readFormat=y.format,U.__readType=y.type,U.__formatReadable=w.textureFormatReadable(y.format),U.__typeReadable=w.textureTypeReadable(y.type)),U}this.readRenderTargetPixels=function(y,U,Q,X,q,Ct,Dt,Tt=0){if(!(y&&y.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=O.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){x.bindFramebuffer(S.FRAMEBUFFER,Bt);try{let zt=y.textures[Tt],Qt=zt.format,ne=zt.type;y.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt);let kt=Oc(zt);if(kt.__formatReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(kt.__typeReadable===!1){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-X&&Q>=0&&Q<=y.height-q&&S.readPixels(U,Q,X,q,pt.convert(Qt),pt.convert(ne),Ct)}finally{let zt=nt!==null?O.get(nt).__webglFramebuffer:null;x.bindFramebuffer(S.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(y,U,Q,X,q,Ct,Dt,Tt=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=O.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(U>=0&&U<=y.width-X&&Q>=0&&Q<=y.height-q){x.bindFramebuffer(S.FRAMEBUFFER,Bt);let zt=y.textures[Tt],Qt=zt.format,ne=zt.type;y.textures.length>1&&S.readBuffer(S.COLOR_ATTACHMENT0+Tt);let kt=Oc(zt);if(kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=S.createBuffer();S.bindBuffer(S.PIXEL_PACK_BUFFER,fe),S.bufferData(S.PIXEL_PACK_BUFFER,Ct.byteLength,S.STREAM_READ),S.readPixels(U,Q,X,q,pt.convert(Qt),pt.convert(ne),0),S.bindBuffer(S.PIXEL_PACK_BUFFER,null);let Ce=nt!==null?O.get(nt).__webglFramebuffer:null;x.bindFramebuffer(S.FRAMEBUFFER,Ce);let ye=S.fenceSync(S.SYNC_GPU_COMMANDS_COMPLETE,0);return S.flush(),await Hh(S,ye,4),S.bindBuffer(S.PIXEL_PACK_BUFFER,fe),S.getBufferSubData(S.PIXEL_PACK_BUFFER,0,Ct),S.bindBuffer(S.PIXEL_PACK_BUFFER,null),S.deleteBuffer(fe),S.deleteSync(ye),Ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,U=null,Q=0){let X=Math.pow(2,-Q),q=Math.floor(y.image.width*X),Ct=Math.floor(y.image.height*X),Dt=U!==null?U.x:0,Tt=U!==null?U.y:0;Y.setTexture2D(y,0),S.copyTexSubImage2D(S.TEXTURE_2D,Q,0,0,Dt,Tt,q,Ct),x.unbindTexture()},this.copyTextureToTexture=function(y,U,Q=null,X=null,q=0,Ct=0){let Dt,Tt,Bt,zt,Qt,ne,kt,fe,Ce,ye=y.isCompressedTexture?y.mipmaps[Ct]:y.image;if(Q!==null)Dt=Q.max.x-Q.min.x,Tt=Q.max.y-Q.min.y,Bt=Q.isBox3?Q.max.z-Q.min.z:1,zt=Q.min.x,Qt=Q.min.y,ne=Q.isBox3?Q.min.z:0;else{let Ee=Math.pow(2,-q);Dt=Math.floor(ye.width*Ee),Tt=Math.floor(ye.height*Ee),y.isDataArrayTexture?Bt=ye.depth:y.isData3DTexture?Bt=Math.floor(ye.depth*Ee):Bt=1,zt=0,Qt=0,ne=0}X!==null?(kt=X.x,fe=X.y,Ce=X.z):(kt=0,fe=0,Ce=0);let xe=pt.convert(U.format),He=pt.convert(U.type),Nt;U.isData3DTexture?(Y.setTexture3D(U,0),Nt=S.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Y.setTexture2DArray(U,0),Nt=S.TEXTURE_2D_ARRAY):(Y.setTexture2D(U,0),Nt=S.TEXTURE_2D),x.activeTexture(S.TEXTURE0),x.pixelStorei(S.UNPACK_FLIP_Y_WEBGL,U.flipY),x.pixelStorei(S.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),x.pixelStorei(S.UNPACK_ALIGNMENT,U.unpackAlignment);let Ze=x.getParameter(S.UNPACK_ROW_LENGTH),oe=x.getParameter(S.UNPACK_IMAGE_HEIGHT),gn=x.getParameter(S.UNPACK_SKIP_PIXELS),Fn=x.getParameter(S.UNPACK_SKIP_ROWS),hi=x.getParameter(S.UNPACK_SKIP_IMAGES);x.pixelStorei(S.UNPACK_ROW_LENGTH,ye.width),x.pixelStorei(S.UNPACK_IMAGE_HEIGHT,ye.height),x.pixelStorei(S.UNPACK_SKIP_PIXELS,zt),x.pixelStorei(S.UNPACK_SKIP_ROWS,Qt),x.pixelStorei(S.UNPACK_SKIP_IMAGES,ne);let ji=y.isDataArrayTexture||y.isData3DTexture,ge=U.isDataArrayTexture||U.isData3DTexture;if(y.isDepthTexture){let Ee=O.get(y),ui=O.get(U),_e=O.get(Ee.__renderTarget),di=O.get(ui.__renderTarget);x.bindFramebuffer(S.READ_FRAMEBUFFER,_e.__webglFramebuffer),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let Qi=0;Qi<Bt;Qi++)ji&&(S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(y).__webglTexture,q,ne+Qi),S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,O.get(U).__webglTexture,Ct,Ce+Qi)),S.blitFramebuffer(zt,Qt,Dt,Tt,kt,fe,Dt,Tt,S.DEPTH_BUFFER_BIT,S.NEAREST);x.bindFramebuffer(S.READ_FRAMEBUFFER,null),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else if(q!==0||y.isRenderTargetTexture||O.has(y)){let Ee=O.get(y),ui=O.get(U);x.bindFramebuffer(S.READ_FRAMEBUFFER,L),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,W);for(let _e=0;_e<Bt;_e++)ji?S.framebufferTextureLayer(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,Ee.__webglTexture,q,ne+_e):S.framebufferTexture2D(S.READ_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,Ee.__webglTexture,q),ge?S.framebufferTextureLayer(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,ui.__webglTexture,Ct,Ce+_e):S.framebufferTexture2D(S.DRAW_FRAMEBUFFER,S.COLOR_ATTACHMENT0,S.TEXTURE_2D,ui.__webglTexture,Ct),q!==0?S.blitFramebuffer(zt,Qt,Dt,Tt,kt,fe,Dt,Tt,S.COLOR_BUFFER_BIT,S.NEAREST):ge?S.copyTexSubImage3D(Nt,Ct,kt,fe,Ce+_e,zt,Qt,Dt,Tt):S.copyTexSubImage2D(Nt,Ct,kt,fe,zt,Qt,Dt,Tt);x.bindFramebuffer(S.READ_FRAMEBUFFER,null),x.bindFramebuffer(S.DRAW_FRAMEBUFFER,null)}else ge?y.isDataTexture||y.isData3DTexture?S.texSubImage3D(Nt,Ct,kt,fe,Ce,Dt,Tt,Bt,xe,He,ye.data):U.isCompressedArrayTexture?S.compressedTexSubImage3D(Nt,Ct,kt,fe,Ce,Dt,Tt,Bt,xe,ye.data):S.texSubImage3D(Nt,Ct,kt,fe,Ce,Dt,Tt,Bt,xe,He,ye):y.isDataTexture?S.texSubImage2D(S.TEXTURE_2D,Ct,kt,fe,Dt,Tt,xe,He,ye.data):y.isCompressedTexture?S.compressedTexSubImage2D(S.TEXTURE_2D,Ct,kt,fe,ye.width,ye.height,xe,ye.data):S.texSubImage2D(S.TEXTURE_2D,Ct,kt,fe,Dt,Tt,xe,He,ye);x.pixelStorei(S.UNPACK_ROW_LENGTH,Ze),x.pixelStorei(S.UNPACK_IMAGE_HEIGHT,oe),x.pixelStorei(S.UNPACK_SKIP_PIXELS,gn),x.pixelStorei(S.UNPACK_SKIP_ROWS,Fn),x.pixelStorei(S.UNPACK_SKIP_IMAGES,hi),Ct===0&&U.generateMipmaps&&S.generateMipmap(Nt),x.unbindTexture()},this.initRenderTarget=function(y){O.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Y.setTextureCube(y,0):y.isData3DTexture?Y.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Y.setTexture2DArray(y,0):Y.setTexture2D(y,0),x.unbindTexture()},this.resetState=function(){J=0,H=0,nt=null,x.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var yt=n=>n*Math.PI/180,ue=(n,t,e)=>Math.min(e,Math.max(t,n));var Wt=n=>(n=ue(n,0,1),n*n*(3-2*n));function Wn(n,t,e,i){return n<t?Wt(n/t):n<t+e?1:n<t+e+i?1-Wt((n-t-e)/i):0}function cn(n,t){let e=Math.floor(n/t);return{r:e,u:(n-e*t)/t}}var ri={thigh:.31,shin:.31,upperArm:.22,foreArm:.2},Su=new V,Xn=new V,Ni=new V,bu=new V,wu=new V,lc=new V,cc=new V,Tu=new V,Au=new Se,Eu=new qe,Cu=new qe;function br(n,t,e,i,s,r,a){n.updateWorldMatrix(!0,!1),n.getWorldPosition(Su),Xn.subVectors(e,Su);let l=Xn.length();l<1e-4&&(Xn.set(0,-1,0),l=1e-4),Xn.divideScalar(l),l=ue(l,Math.abs(i-s)+.001,i+s-.001);let c=ue((i*i+l*l-s*s)/(2*i*l),-1,1),o=Math.sqrt(1-c*c),h=Math.PI-Math.acos(ue((i*i+s*s-l*l)/(2*i*s),-1,1));Ni.copy(r).addScaledVector(Xn,-r.dot(Xn)),Ni.lengthSq()<1e-6&&(Ni.set(0,0,1).addScaledVector(Xn,-Xn.z),Ni.lengthSq()<1e-6&&Ni.set(1,0,0)),Ni.normalize(),bu.copy(Xn).multiplyScalar(c).addScaledVector(Ni,o),wu.copy(Ni).multiplyScalar(c).addScaledVector(Xn,-o),lc.copy(bu).negate(),cc.copy(wu).multiplyScalar(a==="arm"?-1:1),Tu.crossVectors(lc,cc),Au.makeBasis(Tu,lc,cc),Eu.setFromRotationMatrix(Au),n.parent.updateWorldMatrix(!0,!1),n.parent.getWorldQuaternion(Cu),n.quaternion.copy(Cu.invert()).multiply(Eu),t.rotation.set(a==="arm"?-h:h,0,0)}var Ao={},Fe=(n,t)=>{Ao[n]=t},st=null,Og=new V(0,1,0),hc=new qe,Bg=new qe,kg=new En,nM=new V,ae=(n=0,t=0,e=0)=>new V(n,t,e),ke=(n,t,e=0)=>st.JT.thigh[n].rotation.set(-yt(t),0,yt(e*n)),hn=(n,t)=>st.JT.shin[n].rotation.x=yt(t),ze=(n,t,e=8)=>st.JT.sh[n].rotation.set(-yt(t),0,yt(e*n)),$e=(n,t)=>st.JT.el[n].rotation.x=-yt(t);function zg(n){return n.updateWorldMatrix(!0,!1),n.getWorldQuaternion(hc),hc.premultiply(Bg.copy(st.root.quaternion).invert()),kg.setFromQuaternion(hc,"XYZ").x}var qn=(n,t=0)=>{st.JT.foot[n].rotation.x=-zg(st.JT.shin[n])+yt(t)},Ru=n=>{let t=yt(n);return n>=0?.072*Math.cos(t)+.1675*Math.sin(t)+.004:.072*Math.cos(t)+.0575*Math.sin(-t)+.004},iM=new V,sM=new V;var rM=new V,aM=new V;var Yn=(n,t,e)=>br(st.JT.thigh[n],st.JT.shin[n],t,ri.thigh,ri.shin,e,"leg"),ai=(n,t,e)=>br(st.JT.sh[n],st.JT.el[n],t,ri.upperArm,ri.foreArm,e,"arm"),ve=(n,t,e)=>n+(t-n)*e,uc=(n,t,e)=>st.spine.localToWorld(ae(n,t,e));var Vg=()=>({py:.69,hx:0,hz:0,pp:0,pyw:0,pr:0,lean:2,syw:0,sr:0,hd:-2,hyw:0,F:{1:[.085,.075,0,0,.12,0,1,0],"-1":[-.085,.075,0,0,-.12,0,1,0]},H:{1:[.19,.62,.03,.8,-.7,0],"-1":[-.19,.62,.03,-.8,-.7,0]}}),$t=(n,t)=>{let e=t?JSON.parse(JSON.stringify(t)):Vg();n(e);for(let i of[1,-1])for(;e.F[i].length<8;)e.F[i].push(0);return e},Ns=(n,t,e)=>typeof n=="number"?n+(t-n)*e:Array.isArray(n)?n.map((i,s)=>Ns(i,t[s]??i,e)):Object.fromEntries(Object.keys(n).map(i=>[i,Ns(n[i],t[i],e)]));function dc(n){let t=JSON.parse(JSON.stringify(n));t.hx*=-1,t.pr*=-1,t.pyw*=-1,t.syw*=-1,t.sr*=-1,t.hyw*=-1;let e=s=>[-s[0],s[1],s[2],s[3],-s[4],s[5],s[6],-(s[7]||0)],i=s=>[-s[0],s[1],s[2],-s[3],s[4],s[5]];return t.F={1:e(n.F[-1]),"-1":e(n.F[1])},t.H={1:i(n.H[-1]),"-1":i(n.H[1])},t}var Hg=n=>{let t=Math.abs(n);return t<=100?Ru(n):Ru(n>0?100:-100)*Math.max(0,1-(t-100)/70)},Pu=new V,Iu=new V,Lu=new V,Nu=new V;function wr(n){let{root:t,pelvis:e,spine:i,head:s}=st;t.position.set(st.base.x+n.hx,n.py,st.base.z+n.hz),e.rotation.set(yt(n.pp),yt(n.pyw),yt(n.pr)),i.rotation.set(yt(n.lean),yt(n.syw),yt(n.sr)),s.rotation.set(yt(n.hd),yt(n.hyw),0),t.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.F[r];Pu.set(a[0],Math.max(a[1],Hg(a[3])),a[2]),Iu.set(a[4],a[5],a[6]),br(st.JT.thigh[r],st.JT.shin[r],Pu,ri.thigh,ri.shin,Iu,"leg"),qn(r,a[3]),a[7]&&(st.JT.foot[r].rotation.z=yt(a[7]))}t.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.H[r];Lu.set(a[0],a[1],a[2]),Nu.set(a[3],a[4],a[5]),br(st.JT.sh[r],st.JT.el[r],Lu,ri.upperArm,ri.foreArm,Nu,"arm")}}var Du=new V;function Uu(n){return{q:n.ALL.map(t=>t.quaternion.clone()),rq:n.root.quaternion.clone(),rp:n.root.position.clone()}}function Gg(n,t,e){return{q:n.q.map((i,s)=>i.clone().slerp(t.q[s],e)),rq:n.rq.clone().slerp(t.rq,e),rp:n.rp.clone().lerp(t.rp,e)}}function Wg(n,t){n.ALL.forEach((e,i)=>e.quaternion.copy(t.q[i])),n.root.quaternion.copy(t.rq),n.root.position.copy(t.rp)}function Xg(n,t,e,i){let s=[n.spine,n.neck,n.head,n.JT.sh[1],n.JT.sh[-1],n.JT.el[1],n.JT.el[-1]];(!n.sm||e)&&(n.sm=new Map);let r=1-Math.exp(-Math.max(t,0)/.055);s.forEach((a,l)=>{let c=n.sm.get(a);if(!c){c=a.quaternion.clone(),n.sm.set(a,c);return}l<3||i?(c.slerp(a.quaternion,r),a.quaternion.copy(c)):c.copy(a.quaternion)})}function qg(n){n.ALL.forEach(t=>t.rotation.set(0,0,0)),n.root.position.set(n.base.x,0,n.base.z),n.root.quaternion.setFromAxisAngle(Og,n.yaw),n.root.userData.air=0}Ao.idle=n=>(ke(1,3),ke(-1,3),hn(1,6),hn(-1,6),ze(1,4,9),ze(-1,4,9),$e(1,14),$e(-1,14),st.spine.rotation.x=yt(3)+.01*Math.sin(n*1.6),st.head.rotation.x=yt(-2),{ground:"all"});function Ds(n,t,e,i,s,r,a){st=n,(n.mode!==t||a)&&(n.blend=n.last?{k:0,from:n.last}:null,n.mode=t),qg(n);let c=(Ao[t]||Ao.idle)(e,i,s)||{};if(n.blend&&(n.blend.k+=r/.28,n.blend.k>=1?n.blend=null:Wg(n,Gg(n.blend.from,Uu(n),Wt(n.blend.k)))),n.spine.rotation.x+=.009*Math.sin(e*1.9+(n.role==="B"?1.3:0)),n.neck.rotation.x+=.006*Math.sin(e*1.9-.6),Xg(n,r,a||!r,!c.hold),n.root.updateMatrixWorld(!0),c.ground!=="none"){let o=1e9;for(let h of n.marks)c.ground==="feet"&&h.kind!=="foot"||c.ground==="knees"&&h.kind!=="knee"||(h.o.getWorldPosition(Du),o=Math.min(o,Du.y-h.r));n.root.position.y+=-o}return n.root.position.y+=(n.root.userData.air||0)+(c.lift||0),n.root.updateMatrixWorld(!0),c.post&&(c.post(),n.root.updateMatrixWorld(!0)),n.last=Uu(n),c}var Us=new V,Eo=new V;function Yg(n=.045,t=.27,e=.2){for(let i of[1,-1])ai(i,uc(i*n,t,e),ae(i*.9,-.7,0))}Fe("squat",(n,t,e)=>{let i=e.repT,s=n%i/i,r=(e.pause||0)/i,a=e.v,l=0,c=0,o=0;if(a==="jump")s<.38?l=Wt(s/.38)*.75:s<.5?l=.75*(1-Wt((s-.38)/.12)):s<.78?(l=0,c=Math.sin(Math.PI*(s-.5)/.28)):s<.92?l=Wt((s-.78)/.14)*.55:l=.55*(1-Wt((s-.92)/.08)),o=s<.38?ve(10,-35,Wt(s/.38)):s<.58?ve(-35,150,Wt((s-.38)/.2)):ve(150,15,Wt((s-.6)/.3));else{let d=r?.3:.38,g=r?.25:.32;l=Wn(s,d,r+.05,g),o=10+80*l}let h=8+90*l,f=10+104*l;for(let d of[1,-1])ke(d,h,a==="sumo"?16:5),hn(d,f),st.JT.foot[d].rotation.x=yt(h-f)+yt(40*c),a==="arms"||a==="jump"?(ze(d,o,6),$e(d,6)):a==="goblet"||(ze(d,20,8),$e(d,40));let u=8+30*l;return st.spine.rotation.x=yt(u),st.head.rotation.x=-yt(u*.8),st.root.userData.air=.22*c,{ground:"all",post(){a==="goblet"&&Yg(.045,.27,.2)}}});Fe("lunge",(n,t,e)=>{let i=e.repT,{r:s,u:r}=cn(n,i),a=e.v,l=s%2?-1:1,c=a==="walk",o=a==="back",h=Wt(r/.2)-Wt((r-.8)/.2),f=Wt((r-.2)/.3)-Wt((r-.6)/.2),u=c?s*.52:0,d=.5,g,v;c?(g=u+.52*Wt(r/.2),v=u+.52*Wt((r-.8)/.2)):o?(g=-d*h,v=0):(g=d*h,v=0);let m=(r<.2?Math.sin(Math.PI*r/.2):r>.8?Math.sin(Math.PI*(r-.8)/.2):0)*.12,p=(g+v)/2,E=.7-.29*f;st.root.position.set(st.base.x,E,st.base.z+p),st.spine.rotation.x=yt(6),st.head.rotation.x=yt(-4),e.twist&&!o&&(st.spine.rotation.y=l*yt(34)*f);for(let b of[1,-1])ze(b,e.twist?18:6,8),$e(b,e.twist?70:10);st.root.updateMatrixWorld(!0);let I=l,M=-l;return Yn(I,ae(I*.09,.075+m,st.base.z+g),ae(0,0,1)),Yn(M,ae(M*.09,.075,st.base.z+v),ae(0,0,1)),qn(I,o?55*f:0),qn(M,o?0:c?r<.8?50*f:0:55*f),{ground:"none",track:c}});Fe("bridge",(n,t,e)=>{let i=e.repT,{r:s,u:r}=cn(n,i),a=e.v,l=(e.pause||0)/i,c;a==="march"?c=Wt(Math.min(1,n%(i*e.n)/1)):c=Wn(r,l?.2:.3,l+.05,l?.2:.26),c=ue(c,0,1);let o=.11+.2*c,h=Math.asin(ue((o-.1)/.415,0,.95));st.root.rotation.x=-Math.PI/2-h,st.root.position.set(st.base.x,o,st.base.z+.14),st.head.rotation.x=yt(18)*c-h*.4;for(let g of[1,-1])ze(g,0,16);st.root.updateMatrixWorld(!0);let f=st.base.z+.14,u=f+.38,d=s%2?-1:1;for(let g of[1,-1]){let v=ae(g*.12,.075,u);if(a==="march"&&g===d&&c>.95&&(v.y+=.22*Math.sin(Math.PI*r),v.z-=.06*Math.sin(Math.PI*r)),a==="single"&&g===d){let m=ae(g*.09,o+.62*Math.sin(h)*c,f+.62*Math.cos(h)*.98);v.lerp(m,Wt(c))}Yn(g,v,ae(0,1,.25)),qn(g,a==="single"&&g===d?20*Wt(c):0)}return{ground:"none"}});Fe("pushup",(n,t,e)=>{let i=e.repT,s=n%i/i,r=e.v,a=(e.pause||0)/i,l;e.slow?l=s<.45?1-Wt(s/.45):s<.55?0:s<.75?Wt((s-.55)/.2):1:a?l=s<.2?1-Wt(s/.2):s<.2+a+.02?0:s<.45+a?Wt((s-.22-a)/.23):1:l=s<.35?1-Wt(s/.35):s<.4?0:s<.75?Wt((s-.4)/.35):1;let c=r==="knees",o=ve(c?8:5,c?22:19,l);st.root.rotation.x=yt(90-o),st.root.position.z+=-.42,st.head.rotation.x=-yt(46);for(let f of[1,-1])c?(ke(f,0,3),hn(f,88),st.JT.foot[f].rotation.x=yt(10)):(ke(f,0,3),st.JT.foot[f].rotation.x=yt(2));let h=e.wide||.17;return{ground:c?"knees":"feet",post(){for(let f of[1,-1])st.JT.sh[f].updateWorldMatrix(!0,!1),st.JT.sh[f].getWorldPosition(Us),ai(f,ae(f*h,.04,Us.z),ae(f*.5,0,-1))}}});Fe("plank",(n,t,e)=>{let i=e.v,s=Math.sin(n*2.2),r=i==="knees"?22:i==="forearm"?4:18;st.root.rotation.x=yt(90-r+s*.5),st.root.position.z+=-.42,st.head.rotation.x=-yt(48);let a=i==="legup"?Math.floor(n/3)%2?-1:1:0,l=i==="legup"?Math.sin(Math.PI*ue(n%3/3,0,1)):0;for(let c of[1,-1])i==="knees"?(ke(c,0,3),hn(c,88),st.JT.foot[c].rotation.x=yt(10)):(ke(c,c===a?-24*l:0,3),st.JT.foot[c].rotation.x=yt(2));return{ground:i==="knees"?"knees":"feet",lift:0,post(){let c=i==="tap"?Math.floor(n/2.2)%2?-1:1:0,o=i==="tap"?Math.sin(Math.PI*ue(n%2.2/2.2,0,1)):0;for(let h of[1,-1])if(st.JT.sh[h].updateWorldMatrix(!0,!1),st.JT.sh[h].getWorldPosition(Us),h===c&&o>.02){st.JT.sh[-h].getWorldPosition(Eo);let f=Eo.clone().lerp(ae(h*.17,.04,Us.z),1-o);f.y=ve(.04,Eo.y+.02,o),f.z=ve(Us.z,Eo.z+.04,o),ai(h,f,ae(h*.6,.3,-1))}else ai(h,ae(h*.17,.04,Us.z+(i==="forearm"?.2:0)),ae(h*.5,0,-1))}}});Fe("crunch",(n,t,e)=>{let i=e.repT||3,{u:s}=cn(n,i),r=e.v,a=(e.pause||0)/i;st.root.rotation.x=-Math.PI/2,st.root.position.z+=.14,st.head.rotation.x=yt(-6);let l=st.base.z+.14;if(r==="vsit"){st.root.quaternion.setFromAxisAngle(ae(0,1,0),st.yaw),st.root.position.z=st.base.z;let o=Math.sin(n*2.2)*1.2;st.spine.rotation.x=yt(-36+o),st.head.rotation.x=yt(32);for(let h of[1,-1])ke(h,118+o,4),hn(h,6),st.JT.foot[h].rotation.x=yt(25),ze(h,82,4),$e(h,4);return{ground:"all"}}if(r==="bike"){let o=Math.cos(Math.PI*n/i);st.spine.rotation.x=yt(34),st.spine.rotation.y=-yt(22)*o,st.head.rotation.x=yt(8);for(let h of[1,-1]){let f=h>0?(o+1)/2:(1-o)/2;ke(h,ve(40,100,f),4),hn(h,ve(6,100,f)),st.JT.foot[h].rotation.x=yt(15)}return{ground:"all",post(){for(let h of[1,-1])ai(h,st.head.localToWorld(ae(h*.14,0,-.09)),ae(h*.9,.2,0))}}}let c=Wn(s,.35,a+.04,.3);return st.spine.rotation.x=yt(38*c),st.head.rotation.x=yt(-4+6*c),{ground:"all",post(){for(let h of[1,-1])Yn(h,ae(h*.12,.075,l+.36),ae(0,1,.25)),qn(h,0);let o=uc(0,.2,.16);for(let h of[1,-1])ai(h,o.clone().add(ae(h*.07,0,0)),ae(h*.9,.3,0))}}});Fe("superman",(n,t,e)=>{let i=e.repT||3,s=e.v,r=(e.pause||0)/i;st.root.rotation.x=Math.PI/2,st.root.position.z+=-.12,st.head.rotation.x=yt(-4);let a,l=0;if(s==="swim")a=1,l=Math.sin(n*6);else{let{r:o,u:h}=cn(n,i);a=Wn(h,.3,r+.06,.3),l=s==="alt"?o%2?-1:1:0}let c=s==="swim"?.6:1;for(let o of[1,-1]){let h=a,f=a;s==="alt"&&(h=o===l?a:0,f=-o===l?a:0),s==="swim"&&(h=(o*l+1)/2,f=(-o*l+1)/2),ze(o,165+32*h*c,6),$e(o,0),ke(o,-22*f*c,3),hn(o,0),st.JT.foot[o].rotation.x=yt(20)}return st.spine.rotation.x=yt(s==="alt"?-10*a:-(s==="swim"?12:20)*a),{ground:"all"}});Fe("jump",(n,t,e)=>{let i=e.v;if(i==="rope"){let I=n*2*Math.PI/.42,M=Math.max(0,Math.sin(I));for(let b of[1,-1])ke(b,6+14*M,2),hn(b,14+26*M),st.JT.foot[b].rotation.x=yt(30*M),ze(b,18,22),$e(b,72);return st.JT.el[1].rotation.x=-yt(70+12*Math.sin(I)),st.JT.el[-1].rotation.x=-yt(70+12*Math.sin(I+1)),st.spine.rotation.x=yt(5),st.head.rotation.x=yt(-3),st.root.userData.air=.07*M,{ground:"all"}}if(i==="side"){let I=n*2*Math.PI/.8;st.root.position.x+=.26*Math.sin(I);let M=Math.pow(Math.abs(Math.cos(I)),.8);for(let b of[1,-1])ke(b,10+18*(1-M),2),hn(b,18+30*(1-M)),st.JT.foot[b].rotation.x=yt(25*M),ze(b,15+12*M,22),$e(b,66);return st.spine.rotation.x=yt(10),st.spine.rotation.z=yt(-6)*Math.sin(I),st.head.rotation.x=yt(-5),st.root.userData.air=.09*M,{ground:"all"}}let s=e.repT,{r,u:a}=cn(n,s),l=i==="broad",c=(e.hold||0)/s,o=0,h=0,f=10,u=.32,d=.42,g=.66,v=.78;if(a<u)o=Wt(a/u)*.8,f=ve(10,-35,Wt(a/u));else if(a<d)o=.8*(1-Wt((a-u)/(d-u))),f=ve(-35,l?85:160,Wt((a-u)/(d-u)));else if(a<g)h=Math.sin(Math.PI*(a-d)/(g-d)),f=l?ve(85,70,(a-d)/(g-d)):165;else if(a<v)o=Wt((a-g)/(v-g))*.62,f=ve(l?70:165,40,Wt((a-g)/(v-g)));else if(c&&a<v+c)o=.45,f=40;else{let I=c?v+c:v;o=(c?.45:.62)*(1-Wt((a-I)/(1-I+1e-6))),f=ve(40,10,Wt((a-I)/(1-I+1e-6)))}let m=6+82*o,p=8+96*o;for(let I of[1,-1])ke(I,m,4),hn(I,p),st.JT.foot[I].rotation.x=yt(m-p)+yt(38*h),ze(I,f,6),$e(I,8);let E=6+28*o+(l?10*h:0);if(st.spine.rotation.x=yt(E),st.head.rotation.x=-yt(E*.7),st.root.userData.air=(l?.3:.26)*h,l){let I=r*.72,M=a<d?0:a<g?Wt((a-d)/(g-d)):1;st.root.position.z+=I+.72*M}return{ground:"all",track:l}});var Tr=.695,Jn=-.2,Yi=n=>[n*.09,.05,Jn-.3,180,0,-1,1,0],$n=(n,t=.06,e=1.52,i=.02)=>[n*t,e,i,n*.6,0,-.3],Co=n=>[n*.03,1.03,.22,n*.9,-.5,-.2],Fu=(n,t=.88,e=0,i=.56)=>[n*i,t,e,n*.3,-.4,-.6],Ou=n=>[n*.17,.045,.27,n*.7,.2,-.6],Ro=n=>{n.py=Tr,n.hx=.026,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0]},fc=n=>{n.H[1]=[.16,.045,Jn+.44,.6,.3,-.6],n.H[-1]=[-.16,.045,Jn+.44,-.6,.3,-.6]},Po=n=>{n.F[1]=[.09,.09,.41,-62,0,1,0,0],n.F[-1]=[-.09,.09,.41,-62,0,1,0,0]},pc=n=>{n.F[1]=[.09,.045,-.28,180,0,-.4,1,0],n.F[-1]=[-.09,.045,-.28,180,0,-.4,1,0]},mc=n=>{n.F[1]=[.09,.045,-.76,180,0,-1,0,0],n.F[-1]=[-.09,.045,-.76,180,0,-1,0,0]},Zn={montana:$t(n=>{n.py=Tr,n.H[1]=[.17,.61,.03,.8,-.7,0],n.H[-1]=[-.17,.61,.03,-.8,-.7,0],n.F[1][0]=.075,n.F[-1][0]=-.075}),montanaUp:$t(n=>{n.py=Tr,n.H[1]=$n(1),n.H[-1]=$n(-1),n.hd=-10,n.lean=-1,n.F[1][0]=.075,n.F[-1][0]=-.075}),tree1:$t(n=>{Ro(n),n.F[1]=[-.005,.1,.03,28,1,.1,.35,0],n.H[1]=Co(1),n.H[-1]=Co(-1),n.lean=1}),tree2:$t(n=>{Ro(n),n.F[1]=[0,.26,.02,30,1,.1,.3,0],n.H[1]=Co(1),n.H[-1]=Co(-1),n.lean=1}),tree3:$t(n=>{Ro(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=$n(1,.07,1.5),n.H[-1]=$n(-1,.07,1.5),n.lean=0,n.hd=-6}),tree4:$t(n=>{Ro(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=$n(1,.34,1.44),n.H[-1]=$n(-1,.34,1.44),n.lean=0,n.hd=-8}),w1:$t(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=$n(1,.07,1.36,.08),n.H[-1]=$n(-1,.07,1.36,.08),n.lean=-3,n.hd=-12}),w1p:$t(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=[.03,.86,.22,.9,-.5,-.2],n.H[-1]=[-.03,.86,.22,-.9,-.5,-.2],n.lean=0,n.hd=-2}),w2:$t(n=>{n.py=.44,n.hx=.06,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=Fu(1,.86),n.H[-1]=Fu(-1,.86),n.lean=0,n.hyw=70,n.hd=-2}),w2b:$t(n=>{n.py=.44,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=[.42,.52,.02,.3,-.4,-.6],n.H[-1]=[-.06,1.26,0,-.6,.3,-.3],n.sr=-22,n.hx=.1,n.hyw=30,n.hd=-8}),w3:$t(n=>{n.py=.66,n.hx=.026,n.pp=84,n.lean=4,n.hd=-60,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.06,.7,-.6,0,0,-1,0,0],n.H[1]=[.08,.7,.86,.5,-.2,0],n.H[-1]=[-.08,.7,.86,-.5,-.2,0]}),quad:$t(n=>{n.py=.37,n.hz=Jn,n.lean=80,n.hd=-8,n.F[1]=Yi(1),n.F[-1]=Yi(-1),fc(n)}),cat:$t(n=>{n.py=.39,n.hz=Jn,n.pp=-10,n.lean=88,n.hd=42,n.F[1]=Yi(1),n.F[-1]=Yi(-1),fc(n)}),cow:$t(n=>{n.py=.35,n.hz=Jn,n.pp=10,n.lean=68,n.hd=-36,n.F[1]=Yi(1),n.F[-1]=Yi(-1),fc(n)}),bird:$t(n=>{n.py=.37,n.hz=Jn,n.lean=82,n.hd=-12,n.hx=-.025,n.pr=2,n.F[-1]=Yi(-1),n.F[1]=[.09,.4,Jn-.64,0,0,-1,0,0],n.H[1]=[.16,.045,Jn+.44,.6,.3,-.6],n.H[-1]=[-.11,.47,Jn+.86,-.3,1,0]}),dog:$t(n=>{n.py=.62,n.hz=-.08,n.lean=140,n.hd=-2,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]}),plank:$t(n=>{n.py=.36,n.hz=-.03,n.pp=72,n.lean=0,n.hd=-24,n.F[1]=[.09,.18,-.6,70,0,-1,0,0],n.F[-1]=[-.09,.18,-.6,70,0,-1,0,0],n.H[1]=[.16,.045,.4,.6,.3,-.6],n.H[-1]=[-.16,.045,.4,-.6,.3,-.6]}),prone:$t(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=0,n.hd=-8,mc(n),n.H[1]=[.22,.045,.27,.8,.4,-.2],n.H[-1]=[-.22,.045,.27,-.8,.4,-.2]}),cobra:$t(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-34,n.hd=-24,mc(n),n.H[1]=Ou(1),n.H[-1]=Ou(-1)}),cobra2:$t(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-52,n.hd=-30,mc(n),n.H[1]=[.17,.045,.21,.7,.2,-.6],n.H[-1]=[-.17,.045,.21,-.7,.2,-.6]}),sitL:$t(n=>{n.py=.1,n.hz=-.2,n.lean=-4,n.hd=4,Po(n),n.H[1]=[.21,.045,-.2,.6,.2,-.4],n.H[-1]=[-.21,.045,-.2,-.6,.2,-.4]}),fly:$t(n=>{n.py=.1,n.hz=-.12,n.lean=-2,n.hd=4,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.09,.16,.6,.3,-.5],n.H[-1]=[-.05,.09,.16,-.6,.3,-.5]}),fly2:$t(n=>{n.py=.1,n.hz=-.12,n.lean=32,n.hd=14,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.08,.17,.6,.3,-.5],n.H[-1]=[-.05,.08,.17,-.6,.3,-.5]}),fold1:$t(n=>{n.py=.1,n.hz=-.2,n.lean=34,n.hd=8,Po(n),n.H[1]=[.1,.14,.22,.5,.6,-.4],n.H[-1]=[-.1,.14,.22,-.5,.6,-.4]}),fold2:$t(n=>{n.py=.1,n.hz=-.2,n.lean=64,n.hd=18,Po(n),n.H[1]=[.1,.11,.37,.5,.6,-.4],n.H[-1]=[-.1,.11,.37,-.5,.6,-.4]}),twist:$t(n=>{n.py=.1,n.hz=-.2,n.lean=2,n.syw=-40,n.hyw=-24,n.hd=2,Po(n),n.H[1]=[.24,.045,-.36,.6,.3,-.5],n.H[-1]=[.12,.18,.08,-.4,-.4,.6]}),kneel:$t(n=>{n.py=.21,n.hz=-.25,n.lean=2,n.hd=2,pc(n),n.H[1]=[.11,.3,-.02,.7,-.3,-.4],n.H[-1]=[-.11,.3,-.02,-.7,-.3,-.4]}),child:$t(n=>{n.py=.2,n.hz=-.25,n.lean=104,n.hd=16,pc(n),n.H[1]=[.13,.045,.53,.6,.5,-.4],n.H[-1]=[-.13,.045,.53,-.6,.5,-.4]}),child2:$t(n=>{n.py=.2,n.hz=-.25,n.lean=108,n.hd=16,pc(n),n.H[1]=[.17,.05,-.26,.6,.6,.2],n.H[-1]=[-.17,.05,-.26,-.6,.6,.2]}),sava:$t(n=>{n.py=.1,n.pp=-90,n.lean=0,n.hd=0,n.F[1]=[.15,.06,.61,-24,0,1,0,0],n.F[-1]=[-.15,.06,.61,-24,0,1,0,0],n.H[1]=[.3,.05,-.06,.6,.3,0],n.H[-1]=[-.3,.05,-.06,-.6,.3,0]}),hugknees:$t(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=12,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.11,.33,-.06,-.7,.2,-.3]}),squatDeep:$t(n=>{n.py=.36,n.hz=-.1,n.lean=22,n.hd=-6,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.07,.42,.3,.2,-.3,-.3],n.H[-1]=[-.07,.42,.3,-.2,-.3,-.3],n.pp=8}),squatPray:$t(n=>{n.py=.36,n.hz=-.1,n.lean=8,n.hd=-4,n.pp=8,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.05,.55,.3,.6,-.2,0],n.H[-1]=[-.05,.55,.3,-.6,-.2,0]}),fwdFold:$t(n=>{n.py=.68,n.hz=-.18,n.pp=80,n.lean=8,n.hd=30,n.F[1][0]=.09,n.F[-1][0]=-.09,n.H[1]=[.12,.2,.18,.6,.4,-.2],n.H[-1]=[-.12,.2,.18,-.6,.4,-.2]}),hamL:$t(n=>{n.py=.66,n.hz=-.16,n.pp=62,n.lean=8,n.hd=12,n.F[1]=[.09,.075,.38,-30,0,1,0,0],n.F[-1]=[-.09,.075,-.28,0,0,0,1,0],n.H[1]=[.1,.42,.34,.6,.2,-.2],n.H[-1]=[-.1,.42,.34,-.6,.2,-.2]}),lungeLow:$t(n=>{n.py=.5,n.hz=.1,n.lean=-2,n.hd=-6,n.F[1]=[.11,.075,.5,0,0,0,1,0],n.F[-1]=[-.11,.075,-.42,0,0,0,1,0],n.H[1]=$n(1,.08,1.4,.04),n.H[-1]=$n(-1,.08,1.4,.04)}),figure4:$t(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=10,n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.F[1]=[.02,.28,.2,0,1,1,0,0],n.H[1]=[.1,.3,-.04,.7,.2,-.3],n.H[-1]=[-.1,.32,.12,-.7,.2,-.3]}),kneetoChest:$t(n=>{n.py=.1,n.pp=-90,n.lean=20,n.hd=10,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.075,.6,-24,0,1,0,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.15,.05,-.06,-.6,.3,0]})},$g=new Set(["montana","montanaUp","tree1","tree2","tree3","tree4","w1","w1p","w2","w2b","w3","squatDeep","squatPray","fwdFold","hamL","lungeLow"]),Bu=(n,t,e)=>{let i=Ns(n,t,e),s=Math.sin(Math.PI*ue(e,0,1));for(let r of[1,-1]){let a=Math.abs(t.H[r][1]-n.H[r][1]);a>.35&&(i.H[r][0]+=r*.2*s*Math.min(1,a/.7),i.H[r][3]+=r*.4*s)}return i},Jg=(n,t)=>{if(n.length===1)return Zn[n[0]];let e=t*(n.length-1),i=Math.min(n.length-2,Math.floor(e));return Bu(Zn[n[i]],Zn[n[i+1]],Wt(e-i))},Zg=n=>{let t=n-Math.floor(n);return t<.5?Wt(t*2):1-Wt((t-.5)*2)};Fe("pose",(n,t,e)=>{let i=t.dur||20,s=Math.min(e.ramp||2.4,i/3.2),r=Wt(n/s)*(1-Wt((n-(i-s))/s))*(e.k||1),a=Array.isArray(e.v)?e.v:[e.v],l=Jg(a,a.length>1?Zg(n/(e.cyc||6)):0),c=e.base?Zn[e.base]:$t(()=>{});return!e.bi&&!(t.side>0)&&(l=dc(l),c=dc(c)),wr(Bu(c,l,ue(r,0,1.2))),{ground:$g.has(a[0])?"feet":"all"}});Object.assign(Zn,{quadStand:$t(n=>{n.py=Tr,n.hx=.026,n.lean=2,n.hd=-2,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.03,.34,-.28,65,0,-.3,1,0],n.H[1]=[.1,.36,-.3,.6,.6,-1],n.H[-1]=[-.3,.95,.1,-.7,.2,.4]}),chestOpen:$t(n=>{n.py=Tr,n.lean=-6,n.hd=-12,n.F[1]=[.1,.075,0,0,.12,0,1,0],n.F[-1]=[-.1,.075,0,0,-.12,0,1,0],n.H[1]=[.12,.66,-.26,.8,-.3,-.7],n.H[-1]=[-.12,.66,-.26,-.8,-.3,-.7]}),wgs1:$t(n=>{n.py=.46,n.hz=.1,n.lean=52,n.hd=-14,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.22,.045,.34,-.8,.3,-.5]}),wgs2:$t(n=>{n.py=.46,n.hz=.1,n.lean=40,n.hd=-14,n.syw=28,n.hyw=20,n.sr=0,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.3,1.2,0,-.8,.2,.2]}),burpSquat:$t(n=>{n.py=.38,n.hz=.02,n.lean=48,n.hd=-10,n.F[1]=[.12,.075,0,0,.3,0,1,0],n.F[-1]=[-.12,.075,0,0,-.3,0,1,0],n.H[1]=[.18,.045,.32,.6,.3,-.5],n.H[-1]=[-.18,.045,.32,-.6,.3,-.5]}),pikeLow:$t(n=>{n.py=.5,n.hz=.14,n.lean=118,n.hd=-34,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]})});Zn.quadStandR=Zn.quadStand;var Io=.46;function Lo(n,t=0){let e=t+.06,i=Math.max(.2,1-e);return Wn(n,i*.52,e,i*.48)}Fe("chairDip",(n,t,e)=>{let i=e.repT,{u:s}=cn(n,i),r=Lo(s,(e.pause||0)/i),a=$t(l=>{l.py=ve(.47,.2,r),l.hz=.1-.01*r,l.lean=ve(-4,4,r),l.hd=-4,l.pp=ve(-6,-12,r);let c=e.v==="bent"?.4:.55;if(l.F[1]=[.1,.075,c,0,0,1,0,0],l.F[-1]=[-.1,.075,c,0,0,1,0,0],e.v==="legup"){let h=Wn(s,.3,.3,.3);l.F[1]=[.1,ve(.075,.28,h),.5,0,0,1,0,0]}let o=Io+.015;l.H[1]=[.2,o,-.15,.6,.2,-1],l.H[-1]=[-.2,o,-.15,-.6,.2,-1]});return wr(a),{ground:"none",propAt:[0,-.3],propYaw:0}});Fe("incline",(n,t,e)=>{let i=e.repT,{u:s}=cn(n,i),r=Lo(s,(e.pause||0)/i),a=ve(34,48,r);st.root.rotation.x=yt(90-a),st.root.position.z+=-.4,st.head.rotation.x=-yt(46);for(let c of[1,-1])ke(c,0,3),st.JT.foot[c].rotation.x=yt(2);let l={ground:"feet",propYaw:Math.PI,propAt:[0,.4],post(){for(let c of[1,-1]){st.JT.sh[c].updateWorldMatrix(!0,!1);let o=st.JT.sh[c].getWorldPosition(ae());ai(c,ae(c*.2,Io+.03,o.z),ae(c*.5,0,-1)),l.propAt=[0,o.z-st.base.z]}}};return l});Fe("pike",(n,t,e)=>{let i=e.repT,{u:s}=cn(n,i),r=Lo(s,(e.pause||0)/i),a=(e.feet,0);return wr(Ns(Zn.dog,Zn.pikeLow,r)),{ground:"all"}});Fe("bulgarian",(n,t,e)=>{let i=e.repT,{u:s}=cn(n,i),r=Lo(s,(e.pause||0)/i),a=t.side>0?1:-1,l=ve(.665,.42,r);st.root.position.set(st.base.x,l,st.base.z+ve(-.05,.03,r)),st.spine.rotation.x=yt(ve(4,22,r)),st.head.rotation.x=yt(-8);for(let c of[1,-1])e.arms==="chest"?(ze(c,70,6),$e(c,120)):(ze(c,4+20*r,10),$e(c,18));return st.root.updateMatrixWorld(!0),Yn(a,ae(st.base.x+a*.1,.075,st.base.z+.36),ae(0,.3,1)),qn(a,0),Yn(-a,ae(st.base.x-a*.1,Io+.085,st.base.z-.6),ae(0,.3,1)),st.JT.foot[-a].rotation.x=yt(40),{ground:"none",propAt:[0,-.62],propYaw:0}});Fe("stepUp",(n,t,e)=>{let i=e.repT,{r:s,u:r}=cn(n,i),a=s%2?-1:1,l=Wt(ue(r/.35,0,1))*(1-Wt(ue((r-.6)/.32,0,1))),c=e.knee?Wt(ue((r-.35)/.15,0,1))*(1-Wt(ue((r-.5)/.15,0,1))):0,o=.7-.04+.44*l;st.root.position.set(st.base.x,o,st.base.z+.3*l),st.spine.rotation.x=yt(8+6*(1-l)),st.head.rotation.x=yt(-6),st.root.updateMatrixWorld(!0);let h=st.base.z+.42,f=Wt(ue(r/.18,0,1))*(1-Wt(ue((r-.78)/.18,0,1)));Yn(a,ae(st.base.x+a*.1,ve(.075+.1*Math.sin(Math.PI*ue(r/.2,0,1)),Io+.085,f),ve(st.base.z+.05,h,f)),ae(0,.3,1)),qn(a,0);let u=Wt(ue((r-.3)/.25,0,1))*(1-Wt(ue((r-.55)/.3,0,1))),d=st.base.z+.3*l;Yn(-a,ae(st.base.x-a*.1,.075+(e.knee?.55:.18)*u,d+.1*u-.05*(1-l)),ae(0,.3,1)),qn(-a,0);for(let g of[1,-1])ze(g,e.knee?40*(g===-a?1:-.5)*u:10+20*l,10),$e(g,e.knee?80:20);return{ground:"none",propAt:[0,.42],propYaw:Math.PI}});Fe("legRaise",(n,t,e)=>{let i=e.repT,{u:s}=cn(n,i),r=Wn(s,.4,(e.pause||0)/i+.05,.4);st.root.rotation.x=-Math.PI/2,st.root.position.z+=.14,st.head.rotation.x=yt(-6+(e.crunch?10:0)),e.crunch&&(st.spine.rotation.x=yt(24*r));let a=e.bent?70:0;for(let l of[1,-1])ke(l,ve(e.low?12:22,92,r),3),hn(l,a*(1-r*.4)),st.JT.foot[l].rotation.x=yt(40),ze(l,0,14),$e(l,0);return{ground:"all"}});var ku={id:"calistenia",title:"Calistenia en casa",tagline:"Fuerza funcional \xB7 Una silla",kind:"Calistenia",summary:"Fondos, flexiones, sentadillas a una pierna y core con tu peso corporal y una silla estable.",icon:'<path d="M5 20V8l4 3 3-6 3 6 4-3v12M5 20h14"/>',material:["Una silla estable","Esterilla (opcional)"],notice:"Usa una silla estable apoyada contra una pared y sobre suelo antideslizante. Cuida hombros, mu\xF1ecas y rodillas: si notas dolor, para. Si tienes una lesi\xF3n o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional.",setName:"Serie",rest:40,theme:{acc:"#7ddc3c",hi:"#b7f088",accText:"#0c1e03",bgA:"#07110a",bgB:"#1c4511",rim:"#a8ee70",floor:["#1e2a1d","#162116"],musc:"#ff3dac",look:{top:8248380,topStyle:"tank",bottom:1316892,shoes:15790320},lookF:{top:1316892,topStyle:"bra",bottom:1316892,shoes:8248380}},exercises:[{name:"Fondos en silla",coach:"chairDip",area:"Tr\xEDceps y hombros",mus:["tri","delt","chest"],mode:"chairDip",prop:"chair",cam:{az:-80,el:6,dist:3.8,ty:.55},key:["Manos en el borde de la silla, dedos hacia delante.","Baja flexionando los codos hacia atr\xE1s.","Hombros lejos de las orejas."],errors:["Codos hacia fuera","Caer hacia delante","Bajar demasiado"],levels:[{t:"Rodillas flexionadas",d:["Pies cerca de la silla, rodillas a 90\xB0."],sets:3,n:8,unit:"rep",repT:4,v:"bent"},{t:"Piernas estiradas",d:["Estira las piernas y apoya los talones."],sets:3,n:10,unit:"rep",repT:4,v:"straight"},{t:"Una pierna elevada",d:["Eleva una pierna estirada durante la serie.","Controla el descenso."],sets:3,n:10,unit:"rep",repT:4.6,v:"legup",pause:1}]},{name:"Flexiones inclinadas",coach:"pushup",area:"Pecho y tr\xEDceps",mus:["chest","tri","delt","core"],mode:"incline",prop:"chair",cam:{az:-80,el:6,dist:3.8,ty:.6},key:["Manos en la silla algo m\xE1s anchas que los hombros.","Cuerpo en l\xEDnea de cabeza a talones.","Baja el pecho hacia el asiento."],errors:["Cadera ca\xEDda","Codos muy abiertos","Cuello adelantado"],levels:[{t:"Manos en la silla",d:["Cuerpo recto, baja el pecho al asiento."],sets:3,n:8,unit:"rep",repT:4.2},{t:"Con pausa",d:["Pausa de 2 s abajo."],sets:3,n:10,unit:"rep",repT:5.8,pause:2},{t:"Lento 4-1-1",d:["Baja en 3 segundos y sube r\xE1pido."],sets:4,n:10,unit:"rep",repT:6,pause:1}]},{name:"Flexi\xF3n en pica",coach:"pikePush",area:"Hombros",mus:["delt","tri","chest","core"],mode:"pike",cam:{az:-75,el:8,dist:4,ty:.5},key:["Cadera alta formando una V invertida.","Baja la cabeza entre las manos.","Codos hacia atr\xE1s, cerca del cuerpo."],errors:["Cadera baja","Codos abiertos","Apoyar la cabeza"],levels:[{t:"Pica suave",d:["Baja un poco y sube con control."],sets:3,n:6,unit:"rep",repT:4.4},{t:"Pica completa",d:["Baja hasta rozar el suelo con la frente."],sets:3,n:8,unit:"rep",repT:4.6},{t:"Pica con pausa",d:["Aguanta 2 segundos abajo."],sets:4,n:8,unit:"rep",repT:6.2,pause:2}]},{name:"Sentadilla b\xFAlgara",coach:"lunge",area:"Piernas y gl\xFAteos",mus:["quad","glute","ham","abd"],mode:"bulgarian",sides:"Pierna",prop:"chair",cam:{az:-75,el:6,dist:4,ty:.65},key:["Pie de atr\xE1s apoyado en la silla.","El paso delantero lo bastante largo para que la rodilla no pase de los dedos.","Baja recto, sin inclinar de m\xE1s el tronco."],errors:["Paso demasiado corto","Rodilla hacia dentro","Perder la silla"],levels:[{t:"Controlada",d:["Baja hasta que el muslo quede casi paralelo."],sets:4,n:8,unit:"rep",repT:4,arms:"chest"},{t:"Con pausa",d:["Pausa de 2 s abajo."],sets:4,n:8,unit:"rep",repT:6,pause:2},{t:"Lenta y profunda",d:["Baja en 3 segundos y sube con fuerza."],sets:4,n:10,unit:"rep",repT:6.4,pause:1}]},{name:"Subidas a la silla",coach:"stepUp",area:"Piernas y equilibrio",mus:["quad","glute","ham"],mode:"stepUp",prop:"chair",cam:{az:-80,el:6,dist:4.1,ty:.8},key:["Pisa con todo el pie en el centro del asiento.","Sube empujando con la pierna de arriba.","Baja con control, sin dejarte caer."],errors:["Impulsarte con la pierna de abajo","Rodilla hacia dentro","Asiento inestable"],levels:[{t:"Alternando",d:["Sube y baja alternando pierna."],sets:3,n:12,unit:"rep",repT:3.6},{t:"Con rodilla arriba",d:["Al subir, eleva la otra rodilla."],sets:3,n:12,unit:"rep",repT:4,knee:1},{t:"Lentas",d:["Sube y baja en 4 segundos."],sets:4,n:12,unit:"rep",repT:5,knee:1}]},{name:"Plancha din\xE1mica",coach:"plank",area:"Core y hombros",mus:["core","delt","chest","obl"],mode:"plank",cam:{az:-80,el:8,dist:4.2,ty:.4},key:["Cuerpo recto de cabeza a talones.","Aprieta gl\xFAteos y abdomen.","No hundas los hombros."],errors:["Cadera ca\xEDda","Cadera muy alta","Aguantar la respiraci\xF3n"],levels:[{t:"Plancha antebrazos",d:["Aguanta con los antebrazos apoyados."],sets:3,n:30,unit:"s",v:"forearm"},{t:"Plancha con toques",d:["Toca el hombro contrario sin girar la cadera."],sets:3,n:30,unit:"s",v:"tap"},{t:"Plancha con pierna",d:["Eleva una pierna alternando."],sets:3,n:40,unit:"s",v:"legup"}]},{name:"Elevaci\xF3n de piernas",coach:"legRaise",area:"Abdomen bajo",mus:["core","quad"],mode:"legRaise",prop:"mat",cam:{az:-78,el:8,dist:3.8,ty:.3},key:["Espalda baja pegada al suelo.","Sube las piernas hasta la vertical.","Baja despacio sin tocar el suelo."],errors:["Arquear la lumbar","Subir con impulso","Doblar las rodillas de m\xE1s"],levels:[{t:"Rodillas flexionadas",d:["Sube las piernas con las rodillas dobladas."],sets:3,n:10,unit:"rep",repT:4,bent:1},{t:"Piernas rectas",d:["Sube y baja las piernas estiradas."],sets:3,n:10,unit:"rep",repT:4.4},{t:"Bajada profunda",d:["Baja casi al suelo y pausa 1 s."],sets:4,n:10,unit:"rep",repT:5.4,low:1,pause:1,crunch:1}]}]};var Oe=Math.PI,zu={m:{shoulder:.162,hip:.078,chest:[.152,.215,.108],waist:[.118,.12,.092],pelvis:[.13,.098,.1],limb:1.1,head:[.084,.099,.092],pony:!1},f:{shoulder:.146,hip:.082,chest:[.132,.205,.1],waist:[.1,.12,.086],pelvis:[.138,.1,.102],limb:.98,head:[.079,.095,.088],pony:!0}},Vu={skin:13146748,hair:2826008,top:16742938,topStyle:"tank",bottom:1380622,bottomStyle:"shorts",socks:15987699,shoes:1841690,sole:15921129,barefoot:!1,gloves:0,band:0},gc=new Map;function Kg(n){return gc.has(n)||gc.set(n,new tn({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{color:{value:new Kt(16734768)},opacity:{value:0}},vertexShader:"attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }"})),gc.get(n)}function Hu(n,t={x:0,z:0},e=0,i="m",s={}){let r=zu[i]||zu.m,a={...Vu,...s},l=(B,G)=>new pn({color:B,roughness:G}),c={skin:l(a.skin,.7),top:l(a.top,.62),bottom:l(a.bottom,.65),socks:l(a.socks,.7),shoes:l(a.shoes,.5),sole:l(a.sole,.6),hair:l(a.hair,.85),glove:l(a.gloves||14100029,.42),band:l(a.band||15921906,.6)},o=(B,G,Z,ut=0)=>{let mt=new le(new bi(B,Math.max(G,.001),8,18),Z);return mt.position.y=ut,mt.castShadow=!0,mt},h=(B,G,Z,ut,mt=0)=>{let Xt=new le(new Vi(1,28,20),ut);return Xt.scale.set(B,G,Z),Xt.position.y=mt,Xt.castShadow=!0,Xt},f={},u=[],d={thigh:{},shin:{},foot:{},sh:{},el:{}},g=(B,G,Z,ut,mt,Xt,Ot,ee,it,rt)=>{let St=new Vi(1,22,16,it,rt),Ht=St.attributes.uv,wt=new Float32Array(Ht.count);for(let he=0;he<Ht.count;he++)wt[he]=Math.pow(Math.max(0,Math.sin(Oe*Ht.getY(he))),.55)*(rt<Oe*1.5?Math.pow(Math.max(0,Math.sin(Oe*Ht.getX(he))),.6):1);St.setAttribute("aa",new rn(wt,1));let Gt=new le(St,Kg(B));return Gt.scale.set(Z,ut,mt),Gt.position.set(Xt,Ot,ee),Gt.renderOrder=6,Gt.visible=!1,G.add(Gt),(f[B]||(f[B]=[])).push(Gt),Gt},v=[0,Oe],m=[Oe,Oe],p=B=>B>0?[Oe/2,Oe]:[-Oe/2,Oe],E=B=>B>0?[-Oe/2,Oe]:[Oe/2,Oe],I=[0,Oe*2],M=(B,G,Z,ut,mt,Xt)=>{let Ot=new Ue;return Ot.position.set(G,Z,ut),B.add(Ot),u.push({o:Ot,r:mt,kind:Xt}),Ot},b=new be,A=new be;b.add(A),n.add(b),A.add(h(...r.pelvis,c.bottom,0));let P=new be;P.position.y=.03,A.add(P);let _=a.topStyle==="bra"?c.skin:c.top;P.add(h(...r.chest,c.top,.2+.07)),P.add(h(r.waist[0],r.waist[1],r.waist[2],_,.08)),P.add(o(.1,.1,_,.07));let T=new be;T.position.y=.43,P.add(T),T.add(o(.04,.07,c.skin,.045));let C=new be;C.position.y=.07,T.add(C),C.add(h(...r.head,c.skin,.105));let N=new le(new Vi(1,28,14,0,Oe*2,0,Oe*.45),c.hair);if(N.scale.set(r.head[0]*1.06,r.head[1]*1.08,r.head[2]*1.1),N.position.set(0,.112,-.006),N.rotation.x=-.2,N.castShadow=!0,C.add(N),r.pony){let B=o(.022,.1,c.hair,0);B.position.set(0,.095,-.112),B.rotation.x=.5,C.add(B);let G=h(.03,.03,.03,c.hair,0);G.position.set(0,.138,-.09),C.add(G)}let F=new pn({color:1380623,roughness:.35});for(let B of[-1,1]){let G=h(.0105,.0125,.008,F,.108);G.position.set(B*.032,.108,r.head[2]*.915),G.castShadow=!1,C.add(G);let Z=h(.019,.0045,.007,c.hair,.13);Z.position.set(B*.033,.13,r.head[2]*.9),Z.rotation.z=B*-.12,Z.castShadow=!1,C.add(Z);let ut=h(.011,.02,.014,c.skin,.1);ut.position.set(B*(r.head[0]-.002),.1,0),C.add(ut)}let k=h(.014,.016,.018,c.skin,.098);if(k.position.z=r.head[2]+.006,C.add(k),a.band){let B=new le(new bi(.014,r.head[0]*2.2,4,10),c.band);B.rotation.z=Oe/2,B.position.set(0,.14,.012),B.scale.set(1,1,1.4),C.add(B)}let L=a.topStyle==="tee"?c.top:c.skin,W=B=>{let G=new be;G.position.set(B*r.shoulder,.385,0),P.add(G),G.add(o(.037*r.limb,.15,c.skin,-.11)),G.add(o(.047*r.limb,.05,L,-.045));let Z=new be;Z.position.y=-.22,G.add(Z),Z.add(o(.031*r.limb,.14,c.skin,-.1));let ut=new be;ut.position.y=-.2,Z.add(ut),a.gloves?(ut.add(h(.066,.075,.06,c.glove,-.06)),ut.add(o(.039,.035,c.band,-.005))):(ut.add(h(.032,.05,.03,c.skin,-.04)),a.band&&ut.add(o(.034,.02,c.band,-.008))),M(ut,0,-.03,0,.04,"hand"),M(G,0,0,0,.05,"body"),d.sh[B]=G,d.el[B]=Z,g("delt",G,.066,.074,.066,0,-.03,0,...I),g("bic",G,.05,.1,.05,0,-.12,0,...v),g("tri",G,.05,.1,.05,0,-.12,0,...m)},J=a.bottomStyle==="tights",H=B=>{let G=new be;G.position.set(B*r.hip,-.01,0),A.add(G),G.add(o(.066*r.limb,.186,J?c.bottom:c.skin,-.155)),G.add(o(.08*r.limb,J?.18:.08,c.bottom,J?-.12:-.075));let Z=new be;Z.position.y=-.31,G.add(Z),Z.add(o(.05*r.limb,.214,J?c.bottom:c.skin,-.155)),!J&&!a.barefoot&&Z.add(o(.054,.1,c.socks,-.215));let ut=new be;if(ut.position.y=-.31,Z.add(ut),a.barefoot){let mt=new le(new Qe(.082,.05,.2),J?c.bottom:c.skin);mt.position.set(0,-.045,.05),mt.castShadow=!0,ut.add(mt);let Xt=h(.044,.026,.03,J?c.bottom:c.skin,-.05);Xt.position.z=.15,ut.add(Xt)}else{let mt=new le(new Qe(.088,.052,.225),c.shoes);mt.position.set(0,-.03,.055),mt.castShadow=!0,ut.add(mt);let Xt=new le(new Qe(.092,.02,.232),c.sole);Xt.position.set(0,-.064,.056),ut.add(Xt)}M(ut,0,-.073,.16,0,"foot"),M(ut,0,-.073,-.05,0,"foot"),M(G,0,-.31,.03,.062,"body"),M(Z,0,0,.03,.055,"knee"),d.thigh[B]=G,d.shin[B]=Z,d.foot[B]=ut,g("quad",G,.09,.15,.09,0,-.13,0,...v),g("ham",G,.09,.15,.09,0,-.13,0,...m),g("abd",G,.094,.1,.088,0,-.08,0,...p(B)),g("add",G,.084,.13,.078,0,-.14,0,...E(B)),g("calf",Z,.062,.12,.064,0,-.12,-.004,...m),g("ankle",ut,.066,.06,.066,0,-.03,.02,...I)};W(1),W(-1),H(1),H(-1),M(C,0,.1,0,.11,"body"),M(A,0,0,0,.1,"body"),M(P,0,.2,0,.1,"body"),g("glute",A,r.pelvis[0]*1.07,.108,r.pelvis[2]*1.08,0,-.01,0,...m),g("core",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...v),g("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...p(1)),g("obl",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...E(1)),g("lumbar",P,r.chest[0]*.97,.12,r.chest[2]*.98,0,.1,0,...m),g("back",P,r.chest[0]*1,.13,r.chest[2]*.98,0,.32,0,...m),g("chest",P,r.chest[0]*1,.11,r.chest[2]*1,0,.33,0,...v);let nt=[A,P,T,C,...[1,-1].flatMap(B=>[d.thigh[B],d.shin[B],d.foot[B],d.sh[B],d.el[B]])];return{root:b,pelvis:A,spine:P,neck:T,head:C,JT:d,marks:u,ALL:nt,muscles:f,mats:c,base:t,yaw:e,variant:i,mode:null,blend:null,last:null}}function Gu(n,t){t.remove(n.root),n.root.traverse(e=>{e.geometry&&e.geometry.dispose()}),Object.values(n.mats).forEach(e=>e.dispose())}function Wu(n,t){let e={...Vu,...t},i=n.mats;i.skin.color.set(e.skin),i.hair.color.set(e.hair),i.top.color.set(e.top),i.bottom.color.set(e.bottom),i.socks.color.set(e.socks),i.shoes.color.set(e.shoes),i.sole.color.set(e.sole),e.gloves&&i.glove.color.set(e.gloves),e.band&&i.band.color.set(e.band)}var Xu={quad:"Cu\xE1driceps",ham:"Isquiotibiales",glute:"Gl\xFAteos",calf:"Gemelos",add:"Aductores",abd:"Gl\xFAteo medio",core:"Abdomen",obl:"Oblicuos",lumbar:"Lumbares",back:"Espalda",chest:"Pecho",delt:"Hombros",tri:"Tr\xEDceps",bic:"B\xEDceps",ankle:"Tobillos"};function qu(n,t,e,i){for(let s in n.muscles){let r=n.muscles[s],a=r[0].material.uniforms,l=t&&t.includes(s)?e:0;a.opacity.value+=(l-a.opacity.value)*.16,i&&a.color.value.set(i);let c=a.opacity.value>.012;r.forEach(o=>o.visible=c)}}function Yu(n,t){let e=new Kt(t.acc),i=e.clone().multiplyScalar(.35),s=new pn({color:9071178,roughness:.7}),r=new pn({color:2830136,roughness:.45,metalness:.5}),a=new pn({color:i,roughness:.85}),l=new pn({color:e,roughness:.8}),c=d=>(d.castShadow=!0,d.receiveShadow=!0,d),o=new be;{let d=c(new le(new Qe(.72,.016,1.9),a));d.position.y=.008;let g=c(new le(new Qe(.74,.012,1.92),l));g.position.y=.006,o.add(g,d)}let h=new be;{let d=c(new le(new Qe(.44,.04,.42),s));d.position.y=.44,h.add(d);for(let[v,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let p=c(new le(new Ss(.018,.018,.44,10),r));p.position.set(v*.19,.22,m*.18),h.add(p)}let g=c(new le(new Qe(.44,.34,.03),s));g.position.set(0,.68,-.2),h.add(g)}let f=new be;{let d=c(new le(new bi(.018,1,4,12),r));d.rotation.z=Math.PI/2,d.position.set(0,2.05,0),f.add(d);for(let g of[-1,1]){let v=c(new le(new Ss(.03,.03,2.05,12),r));v.position.set(g*.5,1.025,0),f.add(v)}}let u={mat:o,chair:h,bar:f};return Object.values(u).forEach(d=>{d.visible=!1,n.add(d)}),{update(d,g,v){for(let[m,p]of Object.entries(u))p.visible=m===d;if(d&&u[d]){let m=v&&v.propAt||[0,0];u[d].position.set(g.base.x+m[0],0,g.base.z+m[1]),u[d].rotation.y=v&&v.propYaw||0}}}}function xc(n,t,e){let i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);let s=new nr(i);return s.colorSpace=Ke,s}var No=class{constructor(t,e){this.canvas=t,this.theme=e;try{this.renderer=new bo({canvas:t,antialias:!0,alpha:!0})}catch(s){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la p\xE1gina en un navegador actualizado.</div>'),s}let i=this.renderer;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Hi,i.toneMapping=hr,i.toneMappingExposure=1.12,i.setClearColor(0,0),this.scene=new js,this.camera=new Xe(32,1,.1,80),this.scene.add(new or(12571391,1780258,.85)),this.key=new ws(16777215,2.6),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:18}),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,this.scene.add(this.key,this.key.target),this.rim=new ws(new Kt(e.rim),1.3),this.scene.add(this.rim,this.rim.target),this.buildFloor(),this.props=Yu(this.scene,e),this.cam={az:-40,el:8,dist:3.5,ty:.8,tz:0},this.focus={x:0,z:0},this.scrollZ=0,this.avatar=null,this.look={},this.setAvatar("m",{})}buildFloor(){let t=this.theme,e=xc((r,a,l)=>{for(let o=0;o<8;o++)r.fillStyle=o%2?t.floor[0]:t.floor[1],r.fillRect(0,o*l/8,a,l/8+1);let c=r.getImageData(0,0,a,l);for(let o=0;o<c.data.length;o+=4){let h=(Math.random()-.5)*14;c.data[o]+=h,c.data[o+1]+=h,c.data[o+2]+=h}r.putImageData(c,0,0),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(0,l/2-3,a,6)},512,512);e.wrapS=e.wrapT=ms,e.repeat.set(1,2),e.anisotropy=8,this.floorTex=e;let i=xc((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,"#fff"),c.addColorStop(.45,"#fff"),c.addColorStop(1,"#000"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);i.colorSpace="",this.floor=new le(new wi(16,16),new pn({map:e,alphaMap:i,transparent:!0,roughness:.95,metalness:0})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);let s=xc((r,a,l)=>{let c=r.createRadialGradient(a/2,l/2,0,a/2,l/2,a/2);c.addColorStop(0,t.acc+"cc"),c.addColorStop(.5,t.acc+"48"),c.addColorStop(1,t.acc+"00"),r.fillStyle=c,r.fillRect(0,0,a,l)},256,256);this.glow=new le(new wi(3.6,3.6),new Mi({map:s,transparent:!0,depthWrite:!1,blending:cr,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.004,this.scene.add(this.glow),this.ring=new le(new sr(.8,.84,72),new Mi({color:new Kt(t.hi),transparent:!0,opacity:.5,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.006,this.scene.add(this.ring)}setTheme(t){for(let e of[this.floor,this.glow,this.ring])this.scene.remove(e),e.geometry.dispose(),e.material.map&&e.material.map.dispose(),e.material.dispose();this.theme=t,this.rim.color.set(t.rim),this.buildFloor()}setAvatar(t,e){this.look=e,this.avatar&&Gu(this.avatar,this.scene),this.avatar=Hu(this.scene,{x:0,z:0},0,t,e),this.avatar.root.traverse(i=>{i.isMesh&&!i.material.isShaderMaterial&&(i.castShadow=!0)})}recolor(t){this.look=t,Wu(this.avatar,t)}resize(){let t=this.canvas.parentElement,e=t.clientWidth,i=t.clientHeight;!e||!i||(this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix())}frame(t){let{dt:e}=t,i=this.avatar;i.base.x=0,i.base.z=0;let s=Ds(i,t.mode,t.t,t.ctx,t.level,Math.min(e,.05),!!t.snap);qu(i,t.musclesOn?t.muscles:null,.82+.18*Math.sin(t.time/240),this.theme.musc),this.props.update(t.ex&&t.active?t.ex.prop:null,i,s);let r=0,a=0;s.track&&(r=i.root.position.x,a=i.root.position.z),t.snap&&(this.focus.x=r,this.focus.z=a);let l=Math.min(1,Math.min(e,.05)*3.2);this.focus.x+=(r-this.focus.x)*l,this.focus.z+=(a-this.focus.z)*l;let{x:c,z:o}=this.focus;this.floor.position.set(c,0,o),this.glow.position.set(c,.004,o),this.ring.position.set(c,.006,o),this.floorTex.offset.x=c*this.floorTex.repeat.x/16,this.floorTex.offset.y=-this.floorTex.repeat.y*o/16,this.key.position.set(c-3.2,5.2,o+3.6),this.key.target.position.set(c,0,o),this.rim.position.set(c+3.5,2.8,o-3.5),this.rim.target.position.set(c,0,o);let h=t.cam||{az:-38,el:7,dist:3.5,ty:.8},f=t.view&&t.view.az!==null?t.view.az:null,u=Math.sin(t.time/4200)*6,d=(f!==null&&t.active?f:h.az)+t.drag.az+u,g=this.camera.aspect,v=h.dist*(g<1.1?Math.pow(1.1/g,.62):1),m=this.cam,p=Math.min(1,Math.min(e,.05)*3.2);m.az+=(d-m.az)*p,m.el+=(h.el+t.drag.el-m.el)*p,m.dist+=(v-m.dist)*p,m.ty+=(h.ty-m.ty)*p,m.tz+=((h.tz||0)-m.tz)*p;let E=yt(m.az),I=yt(m.el);return this.camera.position.set(c+Math.sin(E)*Math.cos(I)*m.dist,m.ty+Math.sin(I)*m.dist,o+m.tz+Math.cos(E)*Math.cos(I)*m.dist),this.camera.lookAt(c,m.ty,o+m.tz),this.renderer.render(this.scene,this.camera),s}};var $={nose:0,shL:11,shR:12,elL:13,elR:14,wrL:15,wrR:16,hipL:23,hipR:24,knL:25,knR:26,anL:27,anR:28,heL:29,heR:30,ftL:31,ftR:32},Mc=n=>n*180/Math.PI,Pe=(n,t)=>Math.hypot(n.x-t.x,n.y-t.y);function jg(n,t,e){let i={x:n.x-t.x,y:n.y-t.y},s={x:e.x-t.x,y:e.y-t.y},r=Math.hypot(i.x,i.y)*Math.hypot(s.x,s.y);return r<1e-6?180:Mc(Math.acos(Math.max(-1,Math.min(1,(i.x*s.x+i.y*s.y)/r))))}function Ae(n,t,e,i=.6){let s={x:n.x-t.x,y:n.y-t.y,z:((n.z||0)-(t.z||0))*i},r={x:e.x-t.x,y:e.y-t.y,z:((e.z||0)-(t.z||0))*i},a=Math.hypot(s.x,s.y,s.z)*Math.hypot(r.x,r.y,r.z);return a<1e-6?180:Mc(Math.acos(Math.max(-1,Math.min(1,(s.x*r.x+s.y*r.y+s.z*r.z)/a))))}function Ar(n,t){return Math.abs(Mc(Math.atan2(Math.abs(t.x-n.x),Math.abs(t.y-n.y))))}var _c=class n{constructor(t,e,i){this.mc=t,this.beta=e,this.dc=i,this.x=null,this.dx=0}static alpha(t,e){return 1/(1+1/(2*Math.PI*t)/e)}filter(t,e,i){if(this.x===null)return this.x=t,t;let s=(t-this.x)/e/i,r=n.alpha(this.dc,e);this.dx+=(s-this.dx)*r;let a=this.mc+this.beta*Math.abs(this.dx),l=n.alpha(a,e);return this.x+=(t-this.x)*l,this.x}},vc=class{constructor({minCutoff:t=.8,beta:e=1.2,dCutoff:i=1}={}){this.cfg={minCutoff:t,beta:e,dCutoff:i},this.reset()}reset(){this.f=null,this.p=null,this.t=null}push(t,e=0){if(!this.f)return this.f=t.map(()=>["x","y","z"].map(()=>new _c(this.cfg.minCutoff,this.cfg.beta,this.cfg.dCutoff))),this.p=t.map(r=>({x:r.x,y:r.y,z:r.z||0,visibility:r.visibility})),this.t=e,this.p;let i=(e-this.t)/1e3;i>.001||(i=1/30),i>.5&&(i=.5),this.t=e;let s=Math.max(Pe(t[$.shL],t[$.hipL]),Pe(t[$.shR],t[$.hipR]),.001);for(let r=0;r<t.length;r++){let a=t[r],l=this.p[r],c=this.f[r];(a.visibility??1)<.3&&(l.visibility??1)<.3&&(c[0].x=a.x,c[1].x=a.y,c[2].x=a.z||0),l.x=c[0].filter(a.x,i,s),l.y=c[1].filter(a.y,i,s),l.z=c[2].filter(a.z||0,i,s),l.visibility=a.visibility}return this.p}},oi=class{constructor(t=500,e=.6){this.w=t,this.r=e,this.h=[]}push(t,e){for(this.h.push({t:e,f:t});this.h.length&&e-this.h[0].t>this.w;)this.h.shift();let i=this.h.length;if(i<4)return[];let s={};for(let r of this.h)for(let a of r.f)s[a]=(s[a]||0)+1;return Object.keys(s).filter(r=>s[r]/i>=this.r)}},yc=class{constructor(t){this.cfg=t,this.h=[],this.done=!1,this.rest=null,this.lo=t.lo,this.hi=t.hi}push(t,e){let i=this.cfg.hi-20;if(this.done||t<i){t<i&&(this.h.length=0);return}for(this.h.push({t:e,s:t});this.h.length&&e-this.h[0].t>1e3;)this.h.shift();if(this.h.length<8||e-this.h[0].t<900)return;let s=1/0,r=-1/0,a=0;for(let c of this.h)s=Math.min(s,c.s),r=Math.max(r,c.s),a+=c.s;if(r-s>6)return;this.rest=a/this.h.length;let l=this.cfg.hiDrop??12;this.hi=Math.min(this.cfg.hi+10,Math.max(this.cfg.hi-14,this.rest-l)),this.lo=this.hi-(this.cfg.hi-this.cfg.lo),this.done=!0}};function un(n,t,e){let i=n[t],s=n[e],r=i.visibility??1,a=s.visibility??1;if(r>=.5&&a>=.5){let l=r*r,c=a*a,o=l+c;return{x:(i.x*l+s.x*c)/o,y:(i.y*l+s.y*c)/o,z:((i.z||0)*l+(s.z||0)*c)/o,visibility:Math.max(r,a)}}return r>=a?i:s}function Nn(n){let t=Pe(n[$.shL],n[$.shR]),e=Math.max(Pe(un(n,$.shL,$.shR),un(n,$.hipL,$.hipR)),.001),i=t/e;return i<.35?"side":i>.55?"front":"oblique"}var $i=class{constructor(t,e,i=500){this.lo=t,this.hi=e,this.minMs=i,this.reset()}reset(){this.phase="rest",this.min=1/0,this.t0=0,this.flags=new Set,this.reached=!1,this.count=0,this.good=0}flag(t){this.phase==="down"&&this.flags.add(t)}push(t,e){if(this.phase==="rest")return t<this.lo&&(this.phase="down",this.min=t,this.t0=e,this.flags=new Set),null;if(t<this.min&&(this.min=t),t>this.hi){this.phase="rest";let i=e-this.t0>=this.minMs,s=i?{min:this.min,flags:this.flags}:null;return i&&this.count++,s}return null}};function Do(n){let t={sh:un(n,$.shL,$.shR),el:un(n,$.elL,$.elR),wr:un(n,$.wrL,$.wrR),hip:un(n,$.hipL,$.hipR),kn:un(n,$.knL,$.knR),an:un(n,$.anL,$.anR),he:un(n,$.heL,$.heR),ft:un(n,$.ftL,$.ftR)};return t.vis=(t.sh.visibility+t.hip.visibility+t.kn.visibility+t.an.visibility)/4,t}var Kn="Col\xF3cate de lado, a 2-3 m, con el cuerpo entero a la vista.";function vn(n){return()=>{let t=new $i(n.lo,n.hi,n.minMs||600),e=n.calib===!1?null:new yc(n),i=new oi,s=n.chain||Do,r={};return{reps:t,calib:e,push(a,l){let c=s(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:Nn(a),calibrated:!e||e.done};if(!o.ok)return o;let h=n.measure(c,a,l,r);if(h===null)return o;o.metric=Math.round(h.signal),e&&(e.push(h.signal,l),o.calibrated=e.done,t.lo=e.lo,t.hi=e.hi);let f=i.push(n.flags?n.flags(c,h,a):[],l);for(let d of f)t.flag(d);let u=t.push(h.signal,l);t.phase==="down"&&(o.phase="down");for(let d of f)o.ev.push({type:"tip",key:d});if(u){let d=[...u.flags];n.good!==void 0&&u.min>n.good&&d.push(n.shallowKey||"shallow");let g=d.length===0;g&&t.good++,o.ev.push({type:"rep",good:g,issues:d,n:t.count})}return o}}}}var Ve={squat:{name:"Sentadilla",view:"de lado",wants:"side",hint:Kn,create:vn({lo:125,hi:160,good:105,measure:n=>({signal:Ae(n.hip,n.kn,n.an),lean:Ar(n.hip,n.sh)}),flags:(n,t)=>{let e=[];return t.signal<125&&t.lean>58&&e.push("chest"),n.he&&n.ft&&n.ft.y-n.he.y>.07*Pe(n.hip,n.an)&&t.signal<140&&e.push("heels"),e}})},lunge:{name:"Zancada",view:"de lado",wants:"side",hint:Kn,create:()=>{let n=new $i(125,158,700),t=new oi;return{reps:n,push(e,i){let s=Math.min((e[$.hipL].visibility+e[$.knL].visibility+e[$.anL].visibility)/3,(e[$.hipR].visibility+e[$.knR].visibility+e[$.anR].visibility)/3),r={ev:[],ok:s>=.4,view:Nn(e),calibrated:!0};if(!r.ok)return r;let a=Ae(e[$.hipL],e[$.knL],e[$.anL]),l=Ae(e[$.hipR],e[$.knR],e[$.anR]),c=Math.min(a,l);r.metric=Math.round(c);let o={x:(e[$.shL].x+e[$.shR].x)/2,y:(e[$.shL].y+e[$.shR].y)/2},h={x:(e[$.hipL].x+e[$.hipR].x)/2,y:(e[$.hipL].y+e[$.hipR].y)/2},f=Ar(h,o),u=[];c<140&&f>35&&u.push("upright");let d=t.push(u,i);for(let v of d)n.flag(v);let g=n.push(c,i);for(let v of d)r.ev.push({type:"tip",key:v});if(g){let v=[...g.flags];g.min>108&&v.push("shallow");let m=v.length===0;m&&n.good++,r.ev.push({type:"rep",good:m,issues:v,n:n.count})}return r}}}},pushup:{name:"Flexi\xF3n",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista y el m\xF3vil a la altura del suelo.",create:vn({lo:110,hi:155,good:95,minMs:600,measure:n=>({signal:Ae(n.sh,n.el,n.wr)}),flags:n=>{let t=[],e=Fs(n);return e>.09?t.push("sag"):e<-.09&&t.push("pike"),t}})},bridge:{name:"Puente de gl\xFAteos",view:"de lado",wants:"side",hint:"T\xFAmbate de lado respecto a la c\xE1mara, con hombros, cadera y rodillas a la vista.",create:vn({lo:22,hi:45,good:15,minMs:700,measure:n=>({signal:180-jg(n.sh,n.hip,n.kn)}),flags:()=>[]})},plank:{name:"Plancha",view:"de lado",wants:"side",hint:"Col\xF3cate de lado y a unos 2 m, con el cuerpo entero a la vista.",isometric:!0,create:()=>{let n=0,t=null,e=0;return{reps:{count:0,good:0},get seconds(){return Math.floor(n/1e3)},push(i,s){let r=Do(i),a={ev:[],ok:r.vis>=.5,view:Nn(i),calibrated:!0};if(!a.ok)return t=null,a;let l=t===null?0:Math.min(s-t,200);t=s;let c=Ae(r.sh,r.hip,r.an),o=Fs(r);a.metric=Math.round(c);let h=c>=163&&Math.abs(o)<.09;return h?(n+=l,e=0):(e+=l,e>1200&&a.ev.push({type:"tip",key:o>0?"sag":"pike"})),a.holding=h,a}}}},jacks:{name:"Jumping jacks",view:"de frente",wants:"front",hint:"Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista y espacio para abrir brazos y piernas.",create:()=>{let n="closed",t=0,e=!1,i=!1,s=!1,r=!1,a={count:0,good:0};return{reps:a,push(l,c){let o=(l[$.shL].visibility+l[$.shR].visibility+l[$.anL].visibility+l[$.anR].visibility)/4,h={ev:[],ok:o>=.5,view:Nn(l),calibrated:!0};if(!h.ok)return h;let f=Math.max(Pe(l[$.shL],l[$.shR]),.001),u=Pe(l[$.anL],l[$.anR]),d=(l[$.wrL].y+l[$.wrR].y)/2<l[$.nose].y,g=(l[$.wrL].y+l[$.wrR].y)/2>(l[$.shL].y+l[$.shR].y)/2;i=u>f*1.7;let v=u<f*1.15;if(e=d,h.metric=Math.round(u/f*10)/10,n==="closed"&&(e||i)&&(n="open",t=c,s=!1,r=!1),n==="open"&&(e&&(s=!0),i&&(r=!0),g&&v&&(n="closed",c-t>250))){a.count++;let m=s&&r,p=[];r?s||p.push("arms"):p.push("legs"),m&&a.good++,h.ev.push({type:"rep",good:m,issues:p,n:a.count})}return h}}}}};function Fs(n){let t=n.an.x-n.sh.x,e=n.an.y-n.sh.y,i=Math.hypot(t,e);if(i<1e-6)return 0;let s=n.sh.y+(n.hip.x-n.sh.x)/(t||1e-6)*e;return(n.hip.y-s)/i}var Os={chest:"Pecho arriba, no te inclines tanto",heels:"Mant\xE9n los talones en el suelo",upright:"Tronco recto en la zancada",sag:"Cadera demasiado baja, aprieta el abdomen",pike:"Baja la cadera, cuerpo en l\xEDnea recta",shallow:"Baja un poco m\xE1s",legs:"Abre m\xE1s las piernas",arms:"Sube m\xE1s los brazos"},$u=[[11,12],[11,13],[13,15],[12,14],[14,16],[11,23],[12,24],[23,24],[23,25],[25,27],[24,26],[26,28],[27,31],[28,32]],Ji=class{constructor(t){this.kind=t,this.def=Ve[t],this.sm=new vc,this.an=this.def.create(),this.lastTip={},this.log=[]}get reps(){return this.an.reps}push(t,e){let i=this.sm.push(t,e),s=this.an.push(i,e);return s.ev=s.ev.filter(r=>{if(r.type==="tip"){if(e-(this.lastTip[r.key]||-1e9)<6e3)return!1;this.lastTip[r.key]=e,r.msg=Os[r.key]}else r.type==="rep"&&(r.msg=r.issues.length?Os[r.issues[0]]:"\xA1Buena t\xE9cnica!");return!0}),s}};Object.assign(Os,{guard:"Sube la guardia: pu\xF1os a la altura de la barbilla",short:"Da un paso m\xE1s largo",hips:"Cadera nivelada, no la desplaces",kneeFoot:"No apoyes el pie en la rodilla: en el tobillo o la pantorrilla",legHigh:"No subas tanto la pierna, cadera estable",hipsTurn:"Gira desde el pecho, con la cadera quieta",trunk:"Tronco erguido",kneesTogether:"Rodillas juntas",pikeHips:"Mant\xE9n la cadera bien arriba",deeper:"Baja un poco m\xE1s",lower:"Baja m\xE1s la cadera",rise:"Sube del todo",tall:"Crece hacia arriba, espalda larga",kneeLow:"Rodilla de atr\xE1s m\xE1s cerca del suelo",fold:"Pliega m\xE1s desde la cadera",pose:"Entra en la postura y mantenla",hands:"Manos bajo los hombros y rodillas bajo la cadera",heel:"Lleva el tal\xF3n m\xE1s cerca del gl\xFAteo",knee:"Rodilla m\xE1s alta",bigger:"C\xEDrculos m\xE1s grandes",hipsStill:"Hombros quietos, mueve solo la cadera",neck:"No tires del cuello, mira al techo",plankLine:"Cuerpo en l\xEDnea recta en la plancha",floor:"Baja hasta el suelo",stand:"Ponte de pie del todo",wide:"Salta m\xE1s lejos hacia el lado"});function li(n){let t={nose:n[$.nose],shL:n[$.shL],shR:n[$.shR],elL:n[$.elL],elR:n[$.elR],wrL:n[$.wrL],wrR:n[$.wrR],hipL:n[$.hipL],hipR:n[$.hipR],knL:n[$.knL],knR:n[$.knR],anL:n[$.anL],anR:n[$.anR]};return t.sh=un(n,$.shL,$.shR),t.hip=un(n,$.hipL,$.hipR),t.an=un(n,$.anL,$.anR),t.shW=Math.max(Pe(t.shL,t.shR),.001),t.torso=Math.max(Pe(t.sh,t.hip),.001),t.vis=(t.shL.visibility+t.shR.visibility+t.hipL.visibility+t.hipR.visibility)/4,t}function Zi(n){let t=Do(n);return t.torso=Math.max(Pe(t.sh,t.hip),.001),t.nose=n[$.nose],t.L={kn:n[$.knL],an:n[$.anL],wr:n[$.wrL],hip:n[$.hipL],sh:n[$.shL]},t.R={kn:n[$.knR],an:n[$.anR],wr:n[$.wrR],hip:n[$.hipR],sh:n[$.shR]},t}var bc=(...n)=>n.reduce((t,e)=>t+(e.visibility??1),0)/n.length;function Je(n){return()=>{let t=0,e=null,i=0,s=n.chain||Zi;return{reps:{count:0,good:0},get seconds(){return Math.floor(t/1e3)},push(r,a){let l=s(r),c={ev:[],ok:l.vis>=(n.minVis??.5),view:Nn(r),calibrated:!0};if(!c.ok)return e=null,c;let o=e===null?0:Math.min(a-e,200);e=a;let h=null,f=!1;for(let u of n.checks){let d=u(l,r,a);if(d&&d.ok){f=!0;break}d&&d.tip&&!h&&(h=d.tip)}return f?(t+=o,i=0):(i+=o,i>1500&&c.ev.push({type:"tip",key:h||"pose"})),c.holding=f,c}}}}function Sc(n){return()=>{let t=new $i(n.lo,n.hi,n.minMs||150),e=new $i(n.lo,n.hi,n.minMs||150),i={count:0,good:0},s=new oi,r=n.chain||Zi;return{reps:i,push(a,l){let c=r(a),o={ev:[],ok:c.vis>=(n.minVis??.5),view:Nn(a),calibrated:!0};if(!o.ok)return o;let[h,f]=n.measure(c,a);o.metric=Math.round(Math.min(h,f));let u=s.push(n.flags?n.flags(c,a):[],l);for(let d of u)o.ev.push({type:"tip",key:d});for(let[d,g]of[[t,h],[e,f]]){for(let m of u)d.flag(m);let v=d.push(g,l);if(v){i.count++;let m=[...v.flags];n.good!==void 0&&v.min>n.good&&m.push(n.shallowKey||"shallow");let p=m.length===0;p&&i.good++,o.ev.push({type:"rep",good:p,issues:m,n:i.count})}}return o}}}}function Er(n){return()=>{let t=null,e=0,i=0,s={count:0,good:0},r=new oi,a=n.chain||li;return{reps:s,push(l,c){let o=a(l),h={ev:[],ok:o.vis>=(n.minVis??.5),view:Nn(l),calibrated:!0};if(!h.ok)return h;let f=n.measure(o,l);t===null?t=n.base===void 0?f:n.base:n.base===void 0&&(t+=(f-t)*.02);let u=f-t;h.metric=Math.round(u*100)/100;let d=r.push(n.flags?n.flags(o,l):[],c);for(let m of d)h.ev.push({type:"tip",key:m});let g=n.th,v=u>g?1:u<-g?-1:0;if(v!==0&&v!==e){if(e!==0&&c-i>(n.minMs||200)){s.count++;let m=d.length===0;m&&s.good++,h.ev.push({type:"rep",good:m,issues:d,n:s.count})}e=v,i=c}return h}}}}function Qg(n={}){return()=>{let t=null,e=!1,i=0,s={count:0,good:0};return{reps:s,push(r,a){let l=li(r),c={ev:[],ok:bc(l.anL,l.anR,l.hipL,l.hipR)>=.5,view:Nn(r),calibrated:!0};if(!c.ok)return c;let o=Math.max(l.anL.y,l.anR.y);t===null||o>t?t=o:t+=(o-t)*.005;let h=(t-o)/l.torso;c.metric=Math.round(h*100);let f=n.th||.1;return!e&&h>f?(e=!0,i=a):e&&h<f*.4&&(e=!1,a-i>80&&a-i<1200&&(s.count++,s.good++,c.ev.push({type:"rep",good:!0,issues:[],n:s.count}))),c}}}}function tx(){return()=>{let n={count:0,good:0},t=new oi(800,.7),e={L:{ext:0,t:0,armed:!0},R:{ext:0,t:0,armed:!0}};return{reps:n,push(i,s){let r=li(i),a={ev:[],ok:bc(r.shL,r.shR,r.wrL,r.wrR)>=.5,view:Nn(i),calibrated:!0};if(!a.ok)return a;let l=(d,g)=>Math.hypot(d.x-g.x,d.y-g.y,((d.z||0)-(g.z||0))*.8)/r.torso,c=l(r.wrL,r.shL),o=l(r.wrR,r.shR);a.metric=Math.round(Math.max(c,o)*100);let h=d=>d.y>r.sh.y+.35*r.torso,f=[];e.L.armed&&e.R.armed&&(h(r.wrL)||h(r.wrR))&&f.push("guard");let u=t.push(f,s);for(let d of u)a.ev.push({type:"tip",key:d});for(let[d,g,v,m]of[["L",c,r.wrL,r.shL],["R",o,r.wrR,r.shR]]){let p=e[d];if(p.t===0){p.ext=g,p.t=s;continue}let E=Math.max(s-p.t,1)/1e3,I=(g-p.ext)/E,M=Math.abs(v.y-m.y)<.5*r.torso;p.armed&&I>2.2&&g>.62&&M?(p.armed=!1,n.count++,n.good++,a.ev.push({type:"rep",good:!0,issues:[],n:n.count})):!p.armed&&(g<.5||!M)&&(p.armed=!0),p.ext=g,p.t=s}return a}}}}function ex(n){return()=>{let t={count:0,good:0},e={L:{a:null,sum:0},R:{a:null,sum:0}},i=new oi(1e3,.7);return{reps:t,push(s,r){let a=li(s),l={ev:[],ok:a.vis>=.5,view:Nn(s),calibrated:!0};if(!l.ok)return l;let c=[];for(let o of["L","R"]){let{p:h,o:f,r:u}=n.pair(a,o);if(bc(h,f)<.5)continue;let d=Math.atan2(h.y-f.y,h.x-f.x),g=e[o];if(g.a!==null){let v=d-g.a;v>Math.PI&&(v-=2*Math.PI),v<-Math.PI&&(v+=2*Math.PI),g.sum+=v,Math.abs(g.sum)>=2*Math.PI&&(g.sum-=Math.sign(g.sum)*2*Math.PI,t.count++,t.good++,l.ev.push({type:"rep",good:!0,issues:[],n:t.count}))}g.a=d,n.minR&&u<n.minR&&c.push("bigger")}l.metric=t.count;for(let o of i.push(c,r))l.ev.push({type:"tip",key:o});return l}}}}var Ku=n=>Math.min(Ae(n.L.hip,n.L.kn,n.L.an),Ae(n.R.hip,n.R.kn,n.R.an)),nx=n=>Math.max(Ae(n.L.hip,n.L.kn,n.L.an),Ae(n.R.hip,n.R.kn,n.R.an)),ix=n=>Math.abs(n.sh.y-n.hip.y)<.45*n.torso&&Math.abs(n.hip.y-n.an.y)<.6*n.torso,sx=n=>{let t=Ku(n),e=nx(n);return t>135?{ok:!1,tip:"lower"}:e<125&&n.L.kn.y<n.hip.y+.3*n.torso&&n.R.kn.y<n.hip.y+.3*n.torso?{ok:!1,tip:"short"}:{ok:t>=70}},Ju=n=>{let t=Ku(n),e=Math.max(n.L.kn.y,n.R.kn.y);return t>130?{ok:!1,tip:"lower"}:e<n.hip.y+.45*n.torso?{ok:!1,tip:"kneeLow"}:{ok:!0}},Zu=n=>n.sh.y<n.hip.y+.25*n.torso&&n.sh.y>n.hip.y-.35*n.torso&&n.wr.y>n.sh.y+.6*n.torso&&Math.abs(n.wr.x-n.sh.x)<.45*n.torso,rx=n=>Ae(n.hip,n.kn,n.an)>105?{ok:!1,tip:"deeper"}:n.he&&n.ft&&n.ft.y-n.he.y>.07*Pe(n.hip,n.an)?{ok:!1,tip:"heels"}:{ok:!0},Dn="Col\xF3cate de frente a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",yn="Col\xF3cate de lado, con el m\xF3vil cerca del suelo y el cuerpo entero a la vista.";Object.assign(Ve,{crunch:{name:"Abdominales",view:"de lado",wants:"side",hint:yn,create:vn({lo:150,hi:162,good:142,hiDrop:6,minMs:400,measure:n=>({signal:Ae(n.sh,n.hip,n.kn)}),flags:n=>n.nose.visibility>.5&&Pe(n.nose,n.sh)<.32*n.torso?["neck"]:[],chain:Zi})},superman:{name:"Superman",view:"de lado",wants:"side",hint:yn,create:vn({lo:90,hi:97,good:84,hiDrop:4,minMs:400,chain:Zi,measure:n=>({signal:100-(Math.max(0,n.hip.y-n.sh.y)+Math.max(0,n.hip.y-n.an.y))/n.torso*100})})},jump:{name:"Saltos",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista, pies incluidos.",label:"saltos",create:Qg()},guard:{name:"Guardia",view:"de frente",wants:"front",hint:Dn,isometric:!0,create:Je({chain:li,checks:[n=>{let t=e=>e.y<n.sh.y+.25*n.torso&&e.y>n.nose.y-.2*n.torso;return t(n.wrL)&&t(n.wrR)?{ok:!0}:{ok:!1,tip:"guard"}}]})},footwork:{name:"Juego de pies",view:"de frente",wants:"front",hint:Dn,label:"pasos",create:Er({th:.08,measure:n=>n.shW/n.torso,flags:n=>n.wrL.y>n.sh.y+.4*n.torso&&n.wrR.y>n.sh.y+.4*n.torso?["guard"]:[]})},punches:{name:"Golpes",view:"de frente",wants:"front",hint:Dn+" Golpea hacia la c\xE1mara.",label:"golpes",create:tx()},dodge:{name:"Esquivas",view:"de frente",wants:"front",hint:Dn,label:"esquivas",create:vn({chain:li,calib:!1,lo:.5,hi:.78,minMs:150,measure:(n,t,e,i)=>{i.baseY===void 0?i.baseY=n.nose.y:n.nose.y<i.baseY&&(i.baseY+=(n.nose.y-i.baseY)*.05);let s=Math.abs(n.nose.x-n.hip.x)/n.shW/.55,r=(n.nose.y-i.baseY)/n.torso/.22;return{signal:1-Math.max(s,r)}}})},mountain:{name:"Monta\xF1a",view:"de frente",wants:"front",hint:Dn,isometric:!0,create:Je({chain:li,checks:[n=>Math.abs(n.sh.x-n.hip.x)<.2*n.torso&&n.hip.y<n.an.y-.9*n.torso?{ok:!0}:{ok:!1,tip:"tall"}]})},tree:{name:"\xC1rbol",view:"de frente",wants:"front",hint:Dn,isometric:!0,create:Je({chain:li,checks:[n=>{let t=n.anL.y-n.anR.y;if(!(Math.abs(t)>.12*n.torso))return{ok:!1,tip:"pose"};let i=t>0?n.anR:n.anL,s=t>0?n.knL:n.knR;return Math.abs(i.y-s.y)<.1*n.torso?{ok:!1,tip:"kneeFoot"}:Math.abs(n.hipL.y-n.hipR.y)>.1*n.torso?{ok:!1,tip:"hips"}:{ok:!0}}]})},warrior:{name:"Guerrero",view:"de lado",wants:null,hint:"Col\xF3cate de lado o en diagonal a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",isometric:!0,create:Je({checks:[sx]})},dogPlankCobra:{name:"Perro, plancha y cobra",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>{let t=Ae(n.sh,n.hip,n.an);return n.hip.y<n.sh.y-.15*n.torso&&t>50&&t<115?{ok:!0}:null},n=>{let t=Ae(n.sh,n.hip,n.an);return Math.abs(n.sh.y-n.hip.y)<.4*n.torso&&t<160?{ok:!1,tip:Fs(n)>0?"sag":"pike"}:t>=160&&Math.abs(Fs(n))<.09?{ok:!0}:null},n=>n.sh.y<n.hip.y-.3*n.torso&&n.hip.y>n.an.y-.35*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},catCow:{name:"Gato y vaca",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>Zu(n)?{ok:!0}:{ok:!1,tip:"hands"}]})},birdDog:{name:"P\xE1jaro-perro",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>{if(!Zu(n))return{ok:!1,tip:"hands"};let t=n.L.an.y<n.R.an.y?n.L:n.R;return t.an.y<n.hip.y-.2*n.torso?{ok:!1,tip:"legHigh"}:t.an.y<n.hip.y+.45*n.torso&&Math.abs(t.an.x-n.hip.x)>.7*n.torso?{ok:!0}:{ok:!1,tip:"pose"}}]})},seatedFold:{name:"Pinza sentada",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>{if(!(n.hip.y>n.kn.y-.3*n.torso&&Math.abs(n.hip.y-n.an.y)<.5*n.torso))return{ok:!1,tip:"pose"};let e=Ae(n.sh,n.hip,n.kn);return e<125||e>150?{ok:!0}:{ok:!1,tip:"fold"}}]})},childRelax:{name:"Ni\xF1o y relajaci\xF3n",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>n.sh.y>n.an.y-.8*n.torso&&n.hip.y>n.an.y-.8*n.torso?{ok:!0}:{ok:!1,tip:"floor"}]})},armCircles:{name:"C\xEDrculos de brazos",view:"de frente",wants:"front",hint:Dn,label:"c\xEDrculos",create:ex({pair:(n,t)=>({p:n["wr"+t],o:n["sh"+t],r:Pe(n["wr"+t],n["sh"+t])/n.torso}),minR:.55})},torsoRot:{name:"Rotaci\xF3n de tronco",view:"de frente",wants:"front",hint:Dn,label:"giros",create:Er({th:.12,base:0,measure:n=>((n.shL.z||0)-(n.shR.z||0))/n.torso,flags:n=>Pe(n.hipL,n.hipR)<.55*n.shW?["hipsTurn"]:[]})},hipCircles:{name:"C\xEDrculos de cadera",view:"de frente",wants:"front",hint:Dn,label:"c\xEDrculos",create:Er({th:.06,measure:n=>(n.hip.x-n.an.x)/n.torso,flags:n=>Math.abs(n.sh.x-n.hip.x)>.22*n.torso?["hipsStill"]:[]})},legSwing:{name:"Balanceo de piernas",view:"de lado",wants:null,hint:"Col\xF3cate de lado a la c\xE1mara, a 2-3 m, con el cuerpo entero a la vista.",label:"balanceos",create:Er({chain:Zi,th:.25,base:0,measure:n=>{let t=Math.abs(n.L.an.y-n.L.hip.y)<Math.abs(n.R.an.y-n.R.hip.y)?n.L:n.R;return(t.an.x-t.hip.x)/n.torso},flags:n=>Ar(n.hip,n.sh)>22?["trunk"]:[]})},wgs:{name:"Estocada con rotaci\xF3n",view:"de lado",wants:null,hint:Kn,isometric:!0,create:Je({checks:[Ju]})},deepSquat:{name:"Sentadilla profunda",view:"de lado",wants:"side",hint:Kn,isometric:!0,create:Je({checks:[rx]})},quadStand:{name:"Cu\xE1driceps de pie",view:"de lado",wants:"side",hint:Kn,isometric:!0,create:Je({checks:[n=>(n.L.an.y<n.R.an.y?n.L:n.R).an.y>n.hip.y+.5*n.torso?{ok:!1,tip:"heel"}:Math.abs(n.L.kn.x-n.R.kn.x)>.3*n.torso?{ok:!1,tip:"kneesTogether"}:{ok:!0}]})},fwdFold:{name:"Flexi\xF3n adelante",view:"de lado",wants:"side",hint:Kn,isometric:!0,create:Je({checks:[n=>Ae(n.sh,n.hip,n.kn)<95?{ok:!0}:{ok:!1,tip:"fold"}]})},chestOpen:{name:"Apertura de pecho",view:"de frente",wants:"front",hint:Dn,isometric:!0,create:Je({chain:li,checks:[n=>n.wrL.y>n.hip.y-.1*n.torso&&n.wrR.y>n.hip.y-.1*n.torso&&Pe(n.wrL,n.wrR)<.6*n.shW?{ok:!0}:{ok:!1,tip:"pose"}]})},figure4:{name:"Figura 4",view:"de lado",wants:"side",hint:yn,isometric:!0,create:Je({checks:[n=>ix(n)&&Math.min(n.L.kn.y,n.R.kn.y)<n.hip.y-.25*n.torso?{ok:!0}:{ok:!1,tip:"pose"}]})},hipFlexor:{name:"Flexor de cadera",view:"de lado",wants:"side",hint:Kn,isometric:!0,create:Je({checks:[n=>{let t=Ju(n);return t.ok&&Ar(n.hip,n.sh)>30?{ok:!1,tip:"trunk"}:t}]})},chairDip:{name:"Fondos en silla",view:"de lado",wants:"side",hint:Kn,create:vn({lo:125,hi:158,good:105,minMs:500,measure:n=>({signal:Ae(n.sh,n.el,n.wr)})})},pikePush:{name:"Flexi\xF3n en pica",view:"de lado",wants:"side",hint:yn,create:vn({lo:125,hi:158,good:100,minMs:500,measure:n=>({signal:Ae(n.sh,n.el,n.wr),hip:Ae(n.sh,n.hip,n.an)}),flags:(n,t)=>t.hip>135?["pikeHips"]:[]})},stepUp:{name:"Subidas a la silla",view:"de lado",wants:null,hint:Kn,label:"subidas",create:vn({calib:!1,lo:55,hi:85,good:40,minMs:300,shallowKey:"rise",chain:Zi,measure:(n,t,e,i)=>(i.base===void 0||n.hip.y>i.base?i.base=n.hip.y:i.base+=(n.hip.y-i.base)*.003,{signal:100-(i.base-n.hip.y)/n.torso*100})})},legRaise:{name:"Elevaci\xF3n de piernas",view:"de lado",wants:"side",hint:yn,create:vn({lo:140,hi:163,good:115,hiDrop:8,minMs:500,measure:n=>({signal:Ae(n.sh,n.hip,n.kn)})})},highKnees:{name:"Rodillas altas",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"rodillas",create:Sc({lo:50,hi:70,good:30,shallowKey:"knee",minMs:100,measure:n=>[(n.L.kn.y-n.L.hip.y)/n.torso*100,(n.R.kn.y-n.R.hip.y)/n.torso*100]})},mountainClimber:{name:"Mountain climbers",view:"de lado",wants:"side",hint:yn,label:"rodillas",create:Sc({lo:135,hi:165,good:115,shallowKey:"knee",minMs:100,measure:n=>[Pe(n.L.kn,n.L.sh)/n.torso*100,Pe(n.R.kn,n.R.sh)/n.torso*100],flags:n=>Math.abs(Fs(n))>.14?["plankLine"]:[]})},skater:{name:"Patinador",view:"de frente",wants:"front",hint:Dn,label:"saltos",create:Er({th:.6,measure:n=>n.hip.x/n.shW,minMs:250})},burpee:{name:"Burpees",view:"de lado",wants:"side",hint:yn,label:"burpees",create:vn({calib:!1,lo:120,hi:220,good:90,shallowKey:"floor",minMs:700,chain:Zi,measure:n=>({signal:(n.an.y-n.sh.y)/n.torso*100})})},buttKicks:{name:"Talones al gl\xFAteo",view:"de frente o de lado",wants:null,hint:"Col\xF3cate a 2-3 m con el cuerpo entero a la vista.",label:"talones",create:Sc({lo:130,hi:160,good:105,shallowKey:"heel",minMs:100,measure:n=>[Pe(n.L.an,n.L.hip)/n.torso*100,Pe(n.R.an,n.R.hip)/n.torso*100]})}});var Fo="mp/",Uo=null;function wc(){return window.Pose?Promise.resolve():(Uo||(Uo=new Promise((n,t)=>{let e=document.createElement("script");e.src=Fo+"pose.js",e.onload=n,e.onerror=()=>{Uo=null,t(new Error("lib"))},document.head.appendChild(e)})),Uo)}function ju({stageEl:n,say:t,getExercise:e}){let i=document.createElement("div");i.id="cam",i.hidden=!0,i.innerHTML=`
    <div class="cam-h"><b>Coach de c\xE1mara</b><button class="cam-x" aria-label="Cerrar c\xE1mara">\xD7</button></div>
    <div class="cam-ask">
      <p>Usa la c\xE1mara para contar tus repeticiones y avisarte de la t\xE9cnica.</p>
      <p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p>
      <button class="cam-go">Activar c\xE1mara</button>
    </div>
    <div class="cam-v"><video playsinline muted></video><canvas></canvas></div>
    <div class="cam-s"></div>
    <div class="cam-stats"><div><b class="cr">0</b><small class="cl">reps</small></div><div><b class="cs">\u2013</b><small>t\xE9cnica</small></div></div>`,n.appendChild(i);let s=H=>i.querySelector(H),r=s("video"),a=s("canvas"),l=a.getContext("2d"),c=s(".cam-s"),o=null,h=null,f=null,u=null,d=!1,g=!1,v=0,m=0,p=0,E=0,I=0,M=1,b={n:0,ms:0,t0:0},A="closed",P=H=>{A=H,i.dataset.mode=H,i.hidden=H==="closed"},_=(H,nt="")=>{c.textContent=H,c.className="cam-s "+nt},T=()=>{if(!h)return;let H=Ve[h.kind].isometric;s(".cr").textContent=H?h.an.seconds:h.reps.count,s(".cl").textContent=H?"seg. bien":Ve[h.kind].label||"reps",s(".cs").textContent=!H&&h.reps.count?Math.round(h.reps.good/h.reps.count*100)+"%":"\u2013"};function C(H){o=H,h=H&&H.coach&&Ve[H.coach]?new Ji(H.coach):null,E=0,T(),A==="run"&&(h?_(Ve[h.kind].hint):_("Este ejercicio no tiene an\xE1lisis por c\xE1mara.","warn"))}function N(H){let nt=r.videoWidth||640,B=r.videoHeight||480;if(a.width!==nt&&(a.width=nt,a.height=B),l.clearRect(0,0,nt,B),!!H){l.lineWidth=Math.max(3,nt/140),l.lineCap="round",l.strokeStyle=getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#fff";for(let[G,Z]of $u)H[G].visibility<.4||H[Z].visibility<.4||(l.beginPath(),l.moveTo(H[G].x,H[G].y),l.lineTo(H[Z].x,H[Z].y),l.stroke());l.fillStyle="#fff";for(let G of[$.shL,$.shR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR,$.elL,$.elR,$.wrL,$.wrR])H[G].visibility<.4||(l.beginPath(),l.arc(H[G].x,H[G].y,Math.max(3,nt/120),0,7),l.fill())}}function F(H){if(g=!1,!d)return;let nt=r.videoWidth,B=r.videoHeight,G=H.poseLandmarks;if(!G||!h){N(null),h&&++E>25&&_("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista.","warn");return}E=0;let Z=G.map(Ot=>({x:Ot.x*nt,y:Ot.y*B,z:(Ot.z||0)*nt,visibility:Ot.visibility??1})),ut=performance.now();b.t0&&(b.ms+=ut-b.t0,b.n++,M===1&&b.n===40&&b.ms/b.n>110&&(M=0,f.setOptions({modelComplexity:0})));let mt=h.push(Z,ut);if(N(h.sm.p||Z),!mt.ok){_(Ve[h.kind].hint,"warn");return}let Xt=Ve[h.kind];if(Xt.wants&&mt.view&&mt.view!==Xt.wants&&mt.view!=="oblique"){if(++I>20){_(Xt.wants==="side"?"G\xEDrate: col\xF3cate de lado respecto a la c\xE1mara.":"G\xEDrate: col\xF3cate de frente a la c\xE1mara.","warn");return}}else I=0;if(!mt.calibrated){_("Calibrando\u2026 qu\xE9date quieto un segundo en la posici\xF3n inicial.",""),T();return}for(let Ot of mt.ev)Ot.type==="rep"?(_(Ot.good?`${Ot.n} \xB7 \xA1Buena t\xE9cnica!`:`${Ot.n} \xB7 ${Ot.msg}`,Ot.good?"ok":"warn"),!Ot.good&&performance.now()-p>5e3&&(p=performance.now(),t(Ot.msg))):Ot.type==="tip"&&(_(Ot.msg,"warn"),performance.now()-p>5e3&&(p=performance.now(),t(Ot.msg)));mt.holding===!0&&_("Muy bien, mant\xE9n la posici\xF3n","ok"),T()}function k(){if(!d)return;let H=()=>{if(!d)return;let nt=performance.now();!g&&r.readyState>=2&&nt-m>55&&(g=!0,m=nt,b.t0=nt,f.send({image:r}).catch(()=>{g=!1})),r.requestVideoFrameCallback?r.requestVideoFrameCallback(H):v=requestAnimationFrame(H)};H()}async function L(){P("loading"),_("Cargando el modelo de detecci\xF3n (unos 15 MB, solo la primera vez)\u2026");try{await wc(),f||(f=new window.Pose({locateFile:H=>Fo+H}),f.setOptions({modelComplexity:M,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),f.onResults(F)),u=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}},audio:!1}),r.srcObject=u,await r.play();try{localStorage.setItem("forja:cam","1")}catch{}d=!0,P("run"),C(o),h&&_(Ve[h.kind].hint),k()}catch(H){W(!0),P("error");let nt=H&&H.name;nt==="NotAllowedError"||nt==="SecurityError"?_("No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.","warn"):nt==="NotFoundError"||nt==="OverconstrainedError"?_("No se ha encontrado ninguna c\xE1mara en este dispositivo.","warn"):H&&H.message==="lib"?_("El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.","warn"):_("No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo.","warn")}}function W(H){d=!1,g=!1,cancelAnimationFrame(v),u&&u.getTracks().forEach(nt=>nt.stop()),u=null,r.srcObject=null,N(null),H||P("closed")}function J(){if(A!=="closed")return;let H=!1;try{H=localStorage.getItem("forja:cam")==="1"}catch{}o=e(),h=o&&o.coach&&Ve[o.coach]?new Ji(o.coach):null,T(),H?L():P("ask")}return s(".cam-go").onclick=L,s(".cam-x").onclick=()=>W(),window.addEventListener("pagehide",()=>W()),{toggle(){A==="closed"?J():W()},setExercise:C,isOpen:()=>A!=="closed"}}var Ki;function ks(n,t=660,e=.12,i="sine",s=.16){if(n.sound)try{Ki=Ki||new(window.AudioContext||window.webkitAudioContext);let r=Ki.createOscillator(),a=Ki.createGain();r.type=i,r.frequency.value=t,a.gain.value=s,r.connect(a),a.connect(Ki.destination),r.start(),a.gain.exponentialRampToValueAtTime(8e-4,Ki.currentTime+e),r.stop(Ki.currentTime+e)}catch{}}function Tc(n,t){t.forEach(([e,i,s])=>setTimeout(()=>ks(n,e,s||.22,"triangle",.2),i))}var Bs;function ax(){if(Bs!==void 0)return Bs;try{let n=speechSynthesis.getVoices();if(!n.length)return null;Bs=n.find(t=>t.lang==="es-ES"&&/natural|google|premium|enhanced/i.test(t.name))||n.find(t=>t.lang==="es-ES")||n.find(t=>t.lang.startsWith("es"))||null}catch{Bs=null}return Bs}function ci(n,t){if(!(!n.voice||!window.speechSynthesis))try{speechSynthesis.cancel();let e=new SpeechSynthesisUtterance(t);e.lang="es-ES",e.rate=1;let i=ax();i&&(e.voice=i),speechSynthesis.speak(e)}catch{}}function Ac(){try{speechSynthesis.cancel()}catch{}}function zs(){let n=document.documentElement;try{!document.fullscreenElement&&n.requestFullscreen?n.requestFullscreen().catch(()=>{}):n.webkitRequestFullscreen&&n.webkitRequestFullscreen()}catch{}}function Ec(){document.fullscreenElement?document.exitFullscreen():zs()}async function Qu(){try{navigator.wakeLock&&await navigator.wakeLock.request("screen")}catch{}}if(window.speechSynthesis)try{speechSynthesis.addEventListener("voiceschanged",()=>{Bs=void 0})}catch{}var Oo={squat:{joints:[["hipL","knL","anL","L"],["hipR","knR","anR","R"]],metric:"Flexi\xF3n de rodilla",peak:"Profundidad",peakHint:"menos grados = m\xE1s profundo",speed:"Velocidad de subida"}},Cc=n=>!!Oo[n],ox=[[$.shL,$.elL],[$.elL,$.wrL],[$.shR,$.elR],[$.elR,$.wrR],[$.hipL,$.knL],[$.knL,$.anL],[$.hipR,$.knR],[$.knR,$.anR],[$.anL,$.ftL],[$.anR,$.ftR]],lx=[$.shL,$.shR,$.elL,$.elR,$.wrL,$.wrR,$.hipL,$.hipR,$.knL,$.knR,$.anL,$.anR],cx="#ff8a5b",td=n=>{let t=Math.max(0,Math.round(n/1e3));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`},ed=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function nd({say:n,getExercise:t,getTarget:e,onClose:i}){let s=document.createElement("div");s.id="mir",s.hidden=!0,s.innerHTML=`
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
    <section class="m-sum" hidden></section>`,document.body.appendChild(s);let r=S=>s.querySelector(S),a=r(".mv"),l=r(".mc"),c=l.getContext("2d"),o="closed",h=null,f=null,u=null,d=null,g=null,v=!1,m=!1,p=0,E=1,I=10,M=!1,b=0,A=0,P=0,_=0,T=!1,C=[],N=[],F=[],k=null,L=null,W=[],J=null,H=0,nt="#7cc4ff",B=0,G=()=>M?B:performance.now(),Z=S=>{o=S,s.dataset.mode=S,s.hidden=S==="closed"},ut=(S,_t="")=>{let xt=r(".m-msg");xt.textContent=S,xt.className="m-msg "+_t+(S?" on":""),P=performance.now()},mt=(S,_t)=>{r(".m-cnt span").textContent=S,r(".m-cnt").classList.toggle("live",!!_t)};function Xt(){let S=Math.min(window.devicePixelRatio||1,2);l.width=Math.round(innerWidth*S),l.height=Math.round(innerHeight*S)}window.addEventListener("resize",Xt);function Ot(S,_t,xt,w,x=!0){let D=Math.max(S/xt,_t/w),O=(S-xt*D)/2,Y=(_t-w*D)/2;return et=>({x:x?S-(O+et.x*D):O+et.x*D,y:Y+et.y*D,v:et.visibility??1})}function ee(S,_t,xt,w,x,D){S.font=`700 ${15*D}px IN, system-ui, sans-serif`;let O=S.measureText(w).width+22*D,Y=30*D,et=Y/2;S.save(),S.shadowColor="rgba(0,0,0,.45)",S.shadowBlur=10*D,S.beginPath(),S.roundRect(_t-O/2,xt-Y/2,O,Y,et),S.fillStyle="rgba(8,14,28,.82)",S.fill(),S.shadowBlur=0,S.lineWidth=1.6*D,S.strokeStyle=x,S.stroke(),S.fillStyle="#fff",S.textAlign="center",S.textBaseline="middle",S.fillText(w,_t,xt+.5*D),S.restore()}function it(S,_t,xt,w,x,D,O,Y={}){if(S.clearRect(0,0,_t,xt),!D)return;let et=D.map(Ot(_t,xt,w,x)),ft=ct=>et[ct].v>.45,j=(Y.small?2.2:3.6)*O;S.save(),S.lineCap="round",S.lineJoin="round",S.strokeStyle=nt,S.shadowColor=nt,S.shadowBlur=(Y.small?6:16)*O,S.lineWidth=j;let K=[$.shL,$.shR,$.hipR,$.hipL];K.every(ft)&&(S.beginPath(),K.forEach((ct,ht)=>ht?S.lineTo(et[ct].x,et[ct].y):S.moveTo(et[ct].x,et[ct].y)),S.closePath(),S.fillStyle="rgba(120,180,255,.06)",S.fill(),S.stroke()),S.beginPath();for(let[ct,ht]of ox)!ft(ct)||!ft(ht)||(S.moveTo(et[ct].x,et[ct].y),S.lineTo(et[ht].x,et[ht].y));S.stroke(),S.shadowBlur=0,S.lineWidth=j*.38,S.strokeStyle="rgba(255,255,255,.75)",S.stroke(),S.fillStyle="#fff",S.shadowColor=nt,S.shadowBlur=10*O;for(let ct of lx)ft(ct)&&(S.beginPath(),S.arc(et[ct].x,et[ct].y,(Y.small?2.4:4.2)*O,0,7),S.fill());S.restore();let dt=Oo[f];if(!dt)return;let gt=[];for(let[ct,ht,Rt,Lt]of dt.joints){let Vt=et[$[ct]],R=et[$[ht]],ot=et[$[Rt]];if(Vt.v<.5||R.v<.5||ot.v<.5)continue;let tt=Ae(D[$[ct]],D[$[ht]],D[$[Rt]]),pt=Lt==="L"?nt:cx,vt=Math.atan2(Vt.y-R.y,Vt.x-R.x),lt=Math.atan2(ot.y-R.y,ot.x-R.x)-vt;for(;lt>Math.PI;)lt-=2*Math.PI;for(;lt<-Math.PI;)lt+=2*Math.PI;let Ft=(Y.small?18:46)*O;S.save();let Ut=S.createRadialGradient(R.x,R.y,Ft*.2,R.x,R.y,Ft);if(Ut.addColorStop(0,"rgba(255,255,255,0)"),Ut.addColorStop(1,pt+"66"),S.beginPath(),S.moveTo(R.x,R.y),S.arc(R.x,R.y,Ft,vt,vt+lt,lt<0),S.closePath(),S.fillStyle=Ut,S.fill(),S.beginPath(),S.arc(R.x,R.y,Ft,vt,vt+lt,lt<0),S.strokeStyle=pt,S.lineWidth=(Y.small?1.6:3)*O,S.shadowColor=pt,S.shadowBlur=10*O,S.stroke(),S.restore(),!Y.small){let me=vt+lt/2;gt.push({x:R.x-Math.cos(me)*(Ft+36*O),y:R.y-Math.sin(me)*(Ft+36*O),text:`${Math.round(tt)}\xB0`,col:pt})}}gt.length===2&&Math.hypot(gt[0].x-gt[1].x,gt[0].y-gt[1].y)<70*O&&(gt[1].x=gt[0].x,gt[1].y=gt[0].y+36*O);for(let ct of gt)ee(S,Math.min(_t-46*O,Math.max(46*O,ct.x)),Math.min(xt-20*O,Math.max(20*O,ct.y)),ct.text,ct.col,O)}function rt(S){let _t=Oo[f],xt={L:null,R:null};for(let[w,x,D,O]of _t.joints)Math.min(S[$[w]].visibility,S[$[x]].visibility,S[$[D]].visibility)>=.5&&(xt[O]=Ae(S[$[w]],S[$[x]],S[$[D]]));return xt}function St(S){if(T=!0,_=S,k={minL:1/0,minR:1/0,min:1/0,tMin:S},mt("CONTANDO 0:00",!0),g&&window.MediaRecorder&&!L)try{W=[];let xt=["video/webm;codecs=vp9","video/webm","video/mp4"].find(w=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(w));L=new MediaRecorder(g,xt?{mimeType:xt,videoBitsPerSecond:9e5}:void 0),L.ondataavailable=w=>w.data&&w.data.size&&W.push(w.data),L.start(500)}catch{L=null}}function Ht(){return new Promise(S=>{if(!L||L.state==="inactive")return S(null);L.onstop=()=>{let _t=W.length?new Blob(W,{type:L.mimeType||"video/webm"}):null;L=null,S(_t)},L.stop()})}function wt(S,_t){B=_t;let xt=u.push(S,_t),w=u.sm.p||S;if(it(c,l.width,l.height,a.videoWidth||640,a.videoHeight||480,w,l.width/innerWidth),!xt.ok){performance.now()-P>2500&&ut(Ve[f].hint,"warn");return}let x=Ve[f];if(x.wants&&xt.view&&xt.view!==x.wants&&xt.view!=="oblique"&&!T){ut(x.wants==="side"?"G\xEDrate: ponte de lado a la c\xE1mara":"G\xEDrate: ponte de frente a la c\xE1mara","warn");return}if(!xt.calibrated){mt("CALIBRANDO \xB7 QUIETO 1 S",!1);return}T||(St(_t),ut("\xA1Listo! Empieza cuando quieras","ok"));let D=_t-_,O=rt(w),Y=xt.metric;N.push({t:D,l:O.L,r:O.R,f:Y}),C.length<2400&&C.push({t:D,L:w.map(et=>({x:et.x,y:et.y,z:et.z,visibility:et.visibility}))}),O.L!==null&&(k.minL=Math.min(k.minL,O.L)),O.R!==null&&(k.minR=Math.min(k.minR,O.R)),Y<k.min&&(k.min=Y,k.tMin=_t);for(let et of xt.ev)if(et.type==="rep"){let ft=Math.max((_t-k.tMin)/1e3,.15),j=Math.max(0,(Y-k.min)/ft);F.push({n:et.n,good:et.good,issues:et.issues,minL:isFinite(k.minL)?k.minL:null,minR:isFinite(k.minR)?k.minR:null,min:k.min,speed:j,t:D}),k={minL:1/0,minR:1/0,min:1/0,tMin:_t};let K=r(".m-n");K.textContent=et.n,K.classList.remove("pop","bad"),K.offsetWidth,K.classList.add("pop"),et.good||K.classList.add("bad"),et.good?ut("\xA1Buena t\xE9cnica!","ok"):ut(et.msg,"warn"),n(et.good?String(et.n):`${et.n}. ${et.msg}`),b=_t,et.n>=I&&(ut("\xA1Serie completada!","ok"),setTimeout(()=>o==="run"&&Et(),1200))}else et.type==="tip"&&(ut(et.msg,"warn"),_t-b>4e3&&(b=_t,n(et.msg)))}function Gt(S){if(m=!1,!v||M)return;let _t=S.poseLandmarks,xt=a.videoWidth,w=a.videoHeight;if(!_t){c.clearRect(0,0,l.width,l.height),++A>25&&ut("No te veo. Col\xF3cate a 2-3 m con el cuerpo entero a la vista","warn");return}A=0,wt(_t.map(x=>({x:x.x*xt,y:x.y*w,z:(x.z||0)*xt,visibility:x.visibility??1})),performance.now())}function he(){let S=()=>{if(!v)return;let _t=performance.now();T&&_t-H>250&&(H=_t,mt("CONTANDO "+td(G()-_),!0)),!M&&d&&!m&&a.readyState>=2&&_t-p>50&&(m=!0,p=_t,d.send({image:a}).catch(()=>{m=!1})),P&&_t-P>3500&&(r(".m-msg").classList.remove("on"),P=0),requestAnimationFrame(S)};requestAnimationFrame(S)}function z(){u=new Ji(f),T=!1,C=[],N=[],F=[],k=null,L=null,J&&URL.revokeObjectURL(J),J=null,r(".m-n").textContent="0",r(".m-n").classList.remove("bad"),r(".m-u").textContent=`REPS \xB7 OBJETIVO ${I}`,r(".m-chip").textContent=`SERIE ${E} \xB7 ${h.name.toUpperCase()}`,mt("PREPARANDO",!1),ut(Ve[f].hint)}async function at(){Z("loading"),Xt(),nt=(getComputedStyle(document.documentElement).getPropertyValue("--hi")||"#7cc4ff").trim(),z(),ut("Cargando el modelo de detecci\xF3n\u2026");try{g=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:1280},height:{ideal:720}},audio:!1}),a.srcObject=g,await a.play();try{localStorage.setItem("forja:cam","1")}catch{}M||(await wc(),d||(d=new window.Pose({locateFile:S=>Fo+S}),d.setOptions({modelComplexity:1,smoothLandmarks:!1,minDetectionConfidence:.5,minTrackingConfidence:.5}),d.onResults(Gt))),v=!0,Z("run"),ut(Ve[f].hint),he()}catch(S){At(),Z("error");let _t=S&&S.name;r(".m-ask .m-card").innerHTML=`<b>No se pudo abrir la c\xE1mara</b><p>${_t==="NotAllowedError"||_t==="SecurityError"?"No hay permiso para usar la c\xE1mara. Act\xEDvalo en los ajustes del navegador y vuelve a intentarlo.":_t==="NotFoundError"?"No se ha encontrado ninguna c\xE1mara en este dispositivo.":S&&S.message==="lib"?"El an\xE1lisis por c\xE1mara no est\xE1 disponible en esta versi\xF3n de la p\xE1gina.":"No se pudo iniciar la c\xE1mara o el modelo. Vuelve a intentarlo."}</p><button class="m-go">Reintentar</button>`,r(".m-go").onclick=at}}function At(){v=!1,m=!1,L&&L.state!=="inactive"&&L.stop(),L=null,g&&g.getTracks().forEach(S=>S.stop()),g=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height)}function Mt(){At(),J&&URL.revokeObjectURL(J),J=null,r(".m-sum").hidden=!0,Z("closed"),i&&i()}async function Et(){if(o!=="run")return;v=!1;let S=T?G()-_:0,_t=await Ht();_t&&(J=URL.createObjectURL(_t)),g&&g.getTracks().forEach(xt=>xt.stop()),g=null,a.srcObject=null,c.clearRect(0,0,l.width,l.height),ce(S),Z("sum");try{let xt="forja:mirror",w=JSON.parse(localStorage.getItem(xt)||"[]");w.push({d:Date.now(),ex:h.name,set:E,reps:F.length,good:F.filter(x=>x.good).length,ms:Math.round(S)}),localStorage.setItem(xt,JSON.stringify(w.slice(-200)))}catch{}}function Pt(S){let Y=Math.max(S,1e3),et=R=>38+R/Y*590,ft=R=>12+(1-R/180)*182,j=Math.max(1,Math.ceil(N.length/320)),K=R=>{let ot="",tt=!1;for(let pt=0;pt<N.length;pt+=j){let vt=N[pt][R];if(vt==null){tt=!1;continue}ot+=`${tt?"L":"M"}${et(N[pt].t).toFixed(1)},${ft(vt).toFixed(1)}`,tt=!0}return ot},dt=[0,45,90,135,180].map(R=>`<line x1="38" x2="628" y1="${ft(R)}" y2="${ft(R)}"/><text x="32" y="${ft(R)+4}" text-anchor="end">${R}\xB0</text>`).join(""),ct=[0,Math.round(Y/1e3)].map((R,ot)=>`<text x="${et(R*1e3)}" y="214" text-anchor="${ot?"end":"start"}">${R}s</text>`).join(""),ht=null;for(let R of F)(!ht||R.min<ht.min)&&(ht=R);let Rt="";if(ht){let R=null;for(let ot of N)ot.t<=ht.t&&ot.t>=ht.t-4e3&&(R===null||ot.f<R.f)&&(R=ot);R&&(Rt=`<circle cx="${et(R.t)}" cy="${ft(R.f)}" r="6" class="pk"/>`)}let Lt=N.some(R=>R.l!==null),Vt=N.some(R=>R.r!==null);return`<svg viewBox="0 0 640 220" preserveAspectRatio="none" class="chart" role="img" aria-label="\xC1ngulo de rodilla durante la serie">
      <g class="gr">${dt}${ct}</g>
      ${Lt?`<path d="${K("l")}" class="ln l"/>`:""}${Vt?`<path d="${K("r")}" class="ln r"/>`:""}
      ${!Lt&&!Vt?`<path d="${K("f")}" class="ln l"/>`:""}${Rt}</svg>`}function ce(S){let _t=Oo[f],xt=F.length,w=F.filter(ot=>ot.good).length,x=ot=>ot.length?ot.reduce((tt,pt)=>tt+pt,0)/ot.length:null,D=F.map(ot=>ot.minL).filter(ot=>ot!==null),O=F.map(ot=>ot.minR).filter(ot=>ot!==null),Y=D.length?Math.min(...D):null,et=O.length?Math.min(...O):null,ft=Y!==null&&et!==null?Math.round(Math.abs(Y-et)):null,j=F.map(ot=>ot.speed),K=null;if(xt>=4){let ot=x(j.slice(0,2)),tt=x(j.slice(-2));K=ot>0?Math.max(0,Math.round((ot-tt)/ot*100)):0}let dt=K===null?"Haz al menos 4 repeticiones para medirla":K<8?"Sin fatiga: ritmo constante":K<20?"Algo de fatiga":"Fatiga notable: descansa bien",gt={};for(let ot of F)for(let tt of ot.issues)gt[tt]=(gt[tt]||0)+1;let ct=Object.entries(gt).sort((ot,tt)=>tt[1]-ot[1])[0],ht=Math.max(1,...j),Rt=xt?j.indexOf(Math.max(...j)):-1,Lt=F.map((ot,tt)=>`<div class="b${ot.good?"":" bad"}${tt===Rt?" top":""}"><i style="height:${Math.max(6,ot.speed/ht*100).toFixed(0)}%"></i><small>${tt+1}</small></div>`).join(""),Vt=(ot,tt,pt,vt)=>`<div class="sd ${vt}"><small><i></i>${ot}</small><b>${tt===null?"\u2013":Math.round(tt)+"\xB0"}</b><em>${pt.length?"Media "+Math.round(x(pt))+"\xB0":"No visible"}</em></div>`,R=r(".m-sum");R.innerHTML=`
      <div class="s-wrap">
        <header class="s-h"><small>SERIE ${E} \xB7 ${ed(h.name.toUpperCase())}</small><h2>Resumen de la serie</h2></header>
        <div class="s-grid">
          <div class="mk rp"><span class="tag">REPETICI\xD3N</span><video playsinline muted loop></video><canvas></canvas><div class="rp-none" hidden>Sin v\xEDdeo en este navegador: se muestra solo el esqueleto</div></div>
          <div class="mk big"><small>REPS</small><b>${xt}</b><em>${td(S)} <span>tiempo</span></em></div>
          <div class="mk pk"><small>${_t.peak.toUpperCase()}</small>
            <div class="sides">${Vt("Izquierda",Y,D,"l")}${Vt("Derecha",et,O,"r")}</div>
            <p class="mh">${ft!==null?`<strong>${ft}\xB0 de diferencia</strong> entre piernas \xB7 `:""}${_t.peakHint}</p></div>
          <div class="mk ft"><div class="row"><small>FATIGA</small><b>${K===null?"\u2013":K+"%"}</b></div>
            <div class="meter"><i style="width:${K===null?0:Math.min(100,K*2.5)}%"></i></div>
            <p><strong>${dt}</strong><br>P\xE9rdida de ${_t.speed.toLowerCase()} entre las primeras y las \xFAltimas reps</p></div>
          <div class="mk tq"><div class="row"><small>T\xC9CNICA</small><b>${xt?w+"/"+xt:"\u2013"}</b></div>
            <p>${xt?ct?`A mejorar: <strong>${ed(Os[ct[0]]||ct[0])}</strong> (${ct[1]} ${ct[1]===1?"vez":"veces"})`:"<strong>Todas las repeticiones con buena t\xE9cnica</strong>":"No se ha contado ninguna repetici\xF3n"}</p></div>
          <div class="mk ch"><div class="row"><small>${_t.metric.toUpperCase()}</small><span class="mlg"><i class="l"></i>Izquierda <i class="r"></i>Derecha</span></div>${Pt(S)}</div>
          <div class="mk sp"><div class="row"><small>${_t.speed.toUpperCase()}</small></div>
            <p>${xt?`Cada repetici\xF3n; la m\xE1s r\xE1pida, la ${Rt+1}.\xAA a ${Math.round(j[Rt])}\xB0/s`:"Sin repeticiones"}</p>
            <div class="bars">${Lt}</div></div>
        </div>
        <div class="s-act"><button class="s-done"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11 12 4l9 7v9H3z"/></svg>Terminar</button>
          <button class="s-next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12a8 8 0 0 1 14-5.3M20 4v5h-5M20 12a8 8 0 0 1-14 5.3M4 20v-5h5"/></svg>Siguiente serie</button></div>
      </div>`,R.hidden=!1,R.scrollTop=0,R.querySelector(".s-done").onclick=Mt,R.querySelector(".s-next").onclick=()=>{E++,R.hidden=!0,at()},Jt(R.querySelector(".rp"))}function Jt(S){let _t=S.querySelector("video"),xt=S.querySelector("canvas"),w=xt.getContext("2d"),x=C.length&&a.videoWidth||640,D=C.length&&a.videoHeight||480,O={vw:x||640,vh:D||480};(()=>{let dt=S.getBoundingClientRect(),gt=Math.min(window.devicePixelRatio||1,2);xt.width=Math.round(dt.width*gt),xt.height=Math.round(dt.height*gt)})();let et=performance.now(),ft=C.length?C[C.length-1].t:0,j=dt=>{let gt=0,ct=C.length-1;for(;gt<ct;){let ht=gt+ct+1>>1;C[ht].t<=dt?gt=ht:ct=ht-1}return C[gt]};J?(_t.src=J,_t.onloadedmetadata=()=>{_t.videoWidth&&(O.vw=_t.videoWidth,O.vh=_t.videoHeight)},_t.play().catch(()=>{})):(_t.hidden=!0,S.querySelector(".rp-none").hidden=!C.length);let K=()=>{if(!(o!=="sum"||!S.isConnected)){if(C.length){let dt=J&&isFinite(_t.currentTime)&&_t.currentTime>0?_t.currentTime*1e3:(performance.now()-et)%Math.max(ft,1);it(w,xt.width,xt.height,O.vw,O.vh,j(dt).L,xt.width/Math.max(S.clientWidth,1),{small:!0})}requestAnimationFrame(K)}};requestAnimationFrame(K)}function jt(){if(h=t(),f=h&&h.coach,!Cc(f))return!1;I=e&&e()||10,E=1,zs();let S=!1;try{S=localStorage.getItem("forja:cam")==="1"}catch{}return r(".m-sum").hidden=!0,z(),S||M?at():(Z("ask"),r(".m-ask .m-card").innerHTML='<b>Modo espejo</b><p>Te ver\xE1s en pantalla con tus \xE1ngulos en directo. Forja cuenta las repeticiones y al final te ense\xF1a el resumen de la serie.</p><p class="sm">El v\xEDdeo se procesa solo en tu dispositivo: no se env\xEDa ni se guarda.</p><button class="m-go">Activar c\xE1mara</button>',r(".m-go").onclick=at),!0}return r(".m-x").onclick=Mt,r(".m-fin").onclick=Et,window.addEventListener("pagehide",At),document.addEventListener("keydown",S=>{o!=="closed"&&S.key==="Escape"&&Mt()}),{open:jt,close:Mt,isOpen:()=>o!=="closed",__sim(S=!0){M=S},__feed(S,_t){if(!v)return;let xt=a.videoWidth||640,w=a.videoHeight||480;wt(S.map(x=>({x:x.x*xt,y:x.y*w,z:(x.z||0)*xt,visibility:x.visibility??1})),_t??performance.now())},__finish:Et}}var Di=["Principiante","Intermedio","Avanzado"],It=n=>document.querySelector(n),nn=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),hx={rep:"repeticiones",s:"s"};function id(n){let t=n.exercises,e=Di.length,i="forja:"+n.id,s={get(){try{return JSON.parse(localStorage.getItem(i)||"{}")}catch{return{}}},set(z){try{localStorage.setItem(i,JSON.stringify(z))}catch{}}},r={get(){try{return JSON.parse(localStorage.getItem("forja:prefs")||"{}")}catch{return{}}},set(z){try{localStorage.setItem("forja:prefs",JSON.stringify(z))}catch{}}},a=Object.assign({lv:[],voice:!0,sound:!0,level:1},s.get()),l=Object.assign({variant:"m"},r.get());(!Array.isArray(a.lv)||a.lv.length!==t.length)&&(a.lv=t.map(()=>a.level||1)),document.documentElement.style.setProperty("--acc",n.theme.acc),document.documentElement.style.setProperty("--hi",n.theme.hi),document.documentElement.style.setProperty("--acc-t",n.theme.accText||"#fff"),document.documentElement.style.setProperty("--bgA",n.theme.bgA),document.documentElement.style.setProperty("--bgB",n.theme.bgB),document.documentElement.style.setProperty("--musc",n.theme.musc);let c=document.querySelector("meta[name=theme-color]");c&&(c.content=n.theme.bgA),document.body.innerHTML=`
<header id="top">
  <a class="back" href="index.html" aria-label="Volver al inicio"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></a>
  <div id="badge"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${n.icon}</svg></div>
  <div class="ttl"><b id="club">${nn(n.title)}</b><small>${nn(n.tagline)}</small></div>
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
      <h1>${nn(n.title)}</h1>
      <div class="sub">${nn(n.tagline)}</div>
      <div class="fld"><label>Nivel de toda la sesi\xF3n</label><div class="seg" id="allLv"></div></div>
      <div class="fld"><label>Avatar</label><div class="seg" id="avSeg"><button data-v="m">\xC9l</button><button data-v="f">Ella</button></div></div>
      <button class="btn" id="go">Comenzar sesi\xF3n</button>
      <div class="mats">${n.material.map(z=>`<span>${nn(z)}</span>`).join("")}</div>
      <div class="note">${nn(n.notice)}</div>
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
      <div class="sub">${nn(n.title)} \xB7 bien hecho</div>
      <ul id="endList"></ul>
      <div id="endTime"></div>
      <div class="ctrls" style="margin-top:16px"><button class="btn" id="again" style="flex:1">Repetir sesi\xF3n</button><button class="btn ghost" id="backSetup" style="flex:1">Ajustes</button></div>
      <a class="btn ghost home" href="index.html">Volver al inicio</a>
    </div>
  </div>
</section>
<canvas id="conf"></canvas>`;let o={screen:"setup",ex:0,phase:"ready",set:0,el:0,dur:20,paused:!1,animT:0,sessionTime:0,view:0,dragAz:0,dragEl:0,done:[],cdn:4,side:-1,lastRep:-1,wrapN:0,snap:1,setIdx:0},h=[{n:"Auto",az:null},{n:"Lateral",az:-90},{n:"3/4",az:-40},{n:"Frontal",az:0}],f=!0,u=()=>({...n.theme.look,...l.variant==="f"&&n.theme.lookF?n.theme.lookF:{}}),d=new No(It("#cv"),n.theme);d.setAvatar(l.variant,u());let g=z=>ue(a.lv[z],1,e),v=z=>t[z].levels[g(z)-1],m=z=>z.repT||3,p=(z,at)=>at.sides||z.sides,E=z=>z.unit==="rep"?z.n*m(z):z.n,I=z=>z.rest!==void 0?z.rest:n.rest,M=z=>`${z.sets} ${z.sets===1?n.setName.toLowerCase():n.setName.toLowerCase()+"s"} \xB7 ${z.n} ${z.unit==="s"?"s":hx[z.unit]}`,b=z=>z.sets*E(z)+(z.sets-1)*I(z)+I(z),A=()=>t.reduce((z,at,At)=>z+b(v(At)),0),P=z=>Math.round(z/60)+" min",_=(z,at)=>p(z,at)?`${p(z,at)} ${o.set%2===0?"derecha":"izquierda"} \xB7 ${o.set+1} de ${at.sets}`:`${n.setName} ${o.set+1} de ${at.sets}`,T=(z,at)=>ue(Math.floor(at/m(z)),0,z.n-1);function C(){It("#bV").classList.toggle("on",a.voice),It("#bS").classList.toggle("on",a.sound),It("#bW").innerHTML='Vista<span class="lg"> \xB7 '+h[o.view].n+"</span>",document.querySelectorAll("#avSeg button").forEach(z=>z.classList.toggle("on",z.dataset.v===l.variant))}let N=()=>s.set(a);function F(){It("#allLv").innerHTML=Di.map((z,at)=>`<button data-l="${at+1}" class="${a.lv.every(At=>At===at+1)?"on":""}">${z}</button>`).join(""),It("#exList").innerHTML=t.map((z,at)=>{let At=v(at),Mt=Di.map((Et,Pt)=>`<button data-e="${at}" data-l="${Pt+1}" title="${Et}" class="${g(at)===Pt+1?"on":""}">${Pt+1}</button>`).join("");return`<li><b>${at+1}</b><div><span>${nn(z.name)}</span><small>${Di[g(at)-1]} \xB7 ${nn(At.t)}</small><small class="lab">${M(At)}</small></div><div class="lvc">${Mt}</div></li>`}).join(""),It("#totalT").textContent="Duraci\xF3n estimada de la sesi\xF3n: "+P(A())}function k(z){o.screen=z,It("#setup").classList.toggle("on",z==="setup"),It("#end").classList.toggle("on",z==="end"),z==="setup"&&F(),document.body.dataset.screen=z,d.resize()}function L(){let z=t[o.ex],at=v(o.ex),At=o.phase;It("#pStep").textContent=`Ejercicio ${o.ex+1} de ${t.length}`,It("#pTitle").textContent=z.name,It("#pArea").textContent=z.area,It("#pMus").textContent="M\xFAsculos: "+z.mus.map(Et=>Xu[Et]).join(" \xB7 "),It("#pMus").classList.toggle("off",!f),It("#pLevels").innerHTML=Di.map((Et,Pt)=>`<button data-l="${Pt+1}" class="${g(o.ex)===Pt+1?"on":""} ${o.done[o.ex]||Pt+1<g(o.ex)?"ok":""}" ${At!=="ready"?"disabled":""}>${Et}</button>`).join(""),It("#pLvT").innerHTML=`<b>${Di[g(o.ex)-1]}</b> \xB7 ${nn(at.t)}`,It("#pCues").innerHTML=at.d.map(Et=>`<li>${nn(Et)}</li>`).join(""),It("#pSpec").textContent=M(at),It("#pKey").innerHTML=z.key.length?"<h4>Importante</h4><ul>"+z.key.map(Et=>`<li>${nn(Et)}</li>`).join("")+"</ul>":"",It("#pErrBox").style.display=z.errors.length?"":"none",It("#pErr").innerHTML=z.errors.map(Et=>`<li>${nn(Et)}</li>`).join(""),It("#steps").innerHTML=t.map((Et,Pt)=>`<button class="${Pt===o.ex?"cur":""} ${o.done[Pt]?"ok":""}" data-i="${Pt}" title="${nn(Et.name)}">${Pt+1}</button>`).join(""),It("#bar i").style.width=o.done.filter(Boolean).length/t.length*100+"%",It("#mainBtn").textContent=At==="ready"?"Iniciar ejercicio":o.paused?"Reanudar":"Pausar",It("#skipBtn").style.display=At==="ready"?"none":"",It("#skipBtn").textContent=At==="rest"?"Saltar descanso":`Saltar ${n.setName.toLowerCase()}`,It("#prevBtn").disabled=o.ex===0,It("#nextBtn").disabled=o.ex===t.length-1;let Mt="";for(let Et=0;Et<at.sets;Et++){let Pt=At!=="ready"&&(Et<o.set||Et===o.set&&At==="work");Mt+=`<i class="${Pt?"on":""} ${At==="work"&&Et===o.set?"cur":""}"></i>`}It("#dots").innerHTML=Mt}function W(){let z=o.phase,at=v(o.ex),At=t[o.ex],Mt="",Et="",Pt=1,ce=!1;if(z==="ready")Mt=String(at.n),Et=M(at);else if(z==="count")Mt=String(Math.max(1,3-Math.floor(o.el))),Et="Preparados",Pt=1-o.el%1;else if(z==="work")Pt=1-o.el/o.dur,at.unit==="s"?(Mt=String(Math.ceil(o.dur-o.el)),Et=_(At,at)+" \xB7 segundos"):(Mt=T(at,o.el)+1+"/"+at.n,ce=!0,Et=_(At,at)+" \xB7 repeticiones"),o.paused&&(Et+=" \xB7 pausa");else if(z==="rest"){let Jt=I(at);Mt=String(Math.ceil(Jt-o.el)),Et="Descanso \xB7 respira",Pt=1-o.el/Jt}It("#tNum").textContent=Mt,It("#tNum").classList.toggle("sm2",ce),It("#tLab").textContent=Et,It("#ring").style.strokeDashoffset=289*(1-ue(Pt,0,1)),document.body.dataset.phase=z}function J(z,at=2400){let At=It("#toast");At.textContent=z,At.classList.add("on"),clearTimeout(J.h),J.h=setTimeout(()=>At.classList.remove("on"),at)}function H(z){let at=It("#cd");at.textContent=z,at.classList.remove("go"),at.offsetWidth,at.classList.add("go")}let nt=ju({stageEl:It("#stage"),say:z=>ci(a,z),getExercise:()=>t[o.ex]}),B=nd({say:z=>ci(a,z),getExercise:()=>t[o.ex],getTarget:()=>v(o.ex).n,onClose:()=>It("#bCam").classList.toggle("on",nt.isOpen())});function G(){let z=t[o.ex],at=v(o.ex);Object.assign(o,{phase:"ready",el:0,set:0,animT:0,paused:!1,lastRep:-1,wrapN:0,snap:1,dragAz:0,dragEl:0}),o.dur=E(at),It("#cd").classList.remove("go"),It("#cd").textContent="",ci(a,`${o.ex+1}. ${z.name}. ${Di[g(o.ex)-1]}`),L(),W(),nt&&nt.setExercise(z),It("#bCam").textContent=z.mirror?"Modo espejo":"C\xE1mara"}function Z(){zs(),Qu(),o.ex=0,o.done=[],o.sessionTime=0,k("session"),G(),N()}function ut(){Object.assign(o,{phase:"count",el:0,cdn:4,animT:0,paused:!1}),L()}function mt(){let z=v(o.ex);Object.assign(o,{phase:"work",el:0,animT:0,cdn:99,lastRep:-1,snap:1,wrapN:0}),o.dur=E(z),o.side=o.set%2===0?-1:1,H("YA"),ks(a,900,.3,"square",.18),ci(a,p(t[o.ex],z)?o.side<0?"Lado derecho. Ya":"Lado izquierdo. Ya":"Ya"),L()}function Xt(){let z=v(o.ex);o.set+1<z.sets?(Object.assign(o,{phase:"rest",el:0,animT:0}),ci(a,"Descanso"),J("Descanso",3e3),ks(a,500,.25,"triangle"),L()):(o.done[o.ex]=!0,Tc(a,[[523,0],[659,140],[784,280]]),o.ex<t.length-1?(J("Ejercicio completado"),o.ex++,G()):ee())}function Ot(){let z=It("#conf");if(!z||window.matchMedia&&matchMedia("(prefers-reduced-motion: reduce)").matches)return;let at=z.getContext("2d");z.width=innerWidth,z.height=innerHeight;let At=[n.theme.acc,n.theme.hi,"#ffffff"],Mt=Array.from({length:160},()=>({x:innerWidth/2+(Math.random()-.5)*240,y:innerHeight*.4,vx:(Math.random()-.5)*15,vy:-Math.random()*15-4,r:Math.random()*5+3,a:Math.random()*6,va:(Math.random()-.5)*.4,c:At[Math.random()*3|0]})),Et=performance.now();(function Pt(ce){let Jt=(ce-Et)/1e3;if(at.clearRect(0,0,z.width,z.height),!(Jt>3.4)){for(let jt of Mt)jt.vy+=.36,jt.x+=jt.vx,jt.y+=jt.vy,jt.a+=jt.va,jt.vx*=.99,at.save(),at.translate(jt.x,jt.y),at.rotate(jt.a),at.globalAlpha=Math.max(0,1-Jt/3.4),at.fillStyle=jt.c,at.fillRect(-jt.r,-jt.r/2,jt.r*2,jt.r),at.restore();requestAnimationFrame(Pt)}})(Et)}function ee(){o.phase="done",L(),k("end"),Ot(),Tc(a,[[523,0],[659,150],[784,300],[1047,450,.5]]),ci(a,"Sesi\xF3n completada");let z=Math.floor(o.sessionTime/60),at=Math.round(o.sessionTime%60);It("#endTime").textContent=`Tiempo total: ${z} min ${at} s`,It("#endList").innerHTML=t.map((At,Mt)=>`<li><b>\u2713</b>${Mt+1}. ${nn(At.name)}<small>${Di[g(Mt)-1]} \xB7 ${M(v(Mt))}</small></li>`).join("");try{let At=JSON.parse(localStorage.getItem("forja:log")||"[]");At.push({id:n.id,ts:Date.now(),secs:Math.round(o.sessionTime),level:Math.round(a.lv.reduce((Mt,Et)=>Mt+Et,0)/a.lv.length)}),localStorage.setItem("forja:log",JSON.stringify(At.slice(-400)))}catch{}}let it=z=>{o.ex=ue(z,0,t.length-1),o.paused=!1,G()};It("#go").onclick=Z,It("#mainBtn").onclick=()=>{o.phase==="ready"?(zs(),ut()):(o.paused=!o.paused,o.paused&&Ac(),L())},It("#skipBtn").onclick=()=>{o.phase==="rest"?(o.set++,mt()):o.phase==="work"?o.el=o.dur:o.phase==="count"&&mt()},It("#prevBtn").onclick=()=>it(o.ex-1),It("#nextBtn").onclick=()=>it(o.ex+1),It("#steps").onclick=z=>{let at=z.target.closest("button");at&&it(+at.dataset.i)},It("#pLevels").onclick=z=>{let at=z.target.closest("button");!at||o.phase!=="ready"||(a.lv[o.ex]=+at.dataset.l,N(),G())},It("#allLv").onclick=z=>{let at=z.target.closest("button");at&&(a.lv=t.map(()=>+at.dataset.l),a.level=+at.dataset.l,N(),F())},document.addEventListener("click",z=>{let at=z.target.closest("#exList .lvc button");at&&(a.lv[+at.dataset.e]=+at.dataset.l,N(),F())}),It("#avSeg").onclick=z=>{let at=z.target.closest("button");at&&(l.variant=at.dataset.v,r.set(l),d.setAvatar(l.variant,u()),o.snap=1,C())},It("#bV").onclick=()=>{a.voice=!a.voice,a.voice||Ac(),C(),N()},It("#bS").onclick=()=>{a.sound=!a.sound,C(),N()},It("#bF").onclick=Ec,It("#bCam").onclick=()=>{let z=t[o.ex];if(z.mirror&&Cc(z.coach)){nt.isOpen()&&nt.toggle(),!o.paused&&o.phase!=="ready"&&(o.paused=!0,L()),B.open(),It("#bCam").classList.add("on");return}nt.toggle(),It("#bCam").classList.toggle("on",nt.isOpen())},It("#bW").onclick=()=>{o.view=(o.view+1)%h.length,o.dragAz=0,o.dragEl=0,C()},It("#bC").onclick=()=>{o.paused=!1,k("setup")},It("#again").onclick=Z,It("#backSetup").onclick=()=>k("setup"),It("#pMus").addEventListener("click",()=>{f=!f,It("#pMus").classList.toggle("off",!f)}),document.addEventListener("keydown",z=>{o.screen!=="session"||z.target.closest("input,textarea")||(z.code==="Space"?(z.preventDefault(),It("#mainBtn").click()):z.code==="ArrowRight"?It("#nextBtn").click():z.code==="ArrowLeft"?It("#prevBtn").click():(z.key==="f"||z.key==="F")&&Ec())});let rt=null,St=It("#cv");St.addEventListener("pointerdown",z=>{rt={x:z.clientX,y:z.clientY,az:o.dragAz,el:o.dragEl},St.setPointerCapture(z.pointerId)}),St.addEventListener("pointermove",z=>{rt&&(o.dragAz=rt.az-(z.clientX-rt.x)*.35,o.dragEl=ue(rt.el+(z.clientY-rt.y)*.15,-4,40))}),St.addEventListener("pointerup",()=>rt=null),new ResizeObserver(()=>d.resize()).observe(It("#stage")),addEventListener("resize",()=>d.resize());let Ht=()=>o.phase==="work"?o.el:o.phase==="ready"?o.animT%o.dur:0;function wt(z){let at=v(o.ex),At=t[o.ex];if(o.screen==="session"&&o.phase!=="ready"&&!o.paused&&(o.sessionTime+=z),o.screen==="session"&&!o.paused){if(o.phase==="count"){o.el+=z;let Pt=3-Math.floor(o.el);Pt!==o.cdn&&Pt>0&&(o.cdn=Pt,H(Pt),ks(a,520,.12,"square"),ci(a,String(Pt))),o.el>=3&&mt()}else if(o.phase==="work"){let Pt=o.el;o.el+=z,o.animT=o.el;let ce=Math.ceil(o.dur-Pt),Jt=Math.ceil(o.dur-o.el);Jt!==ce&&Jt<=3&&Jt>0&&at.unit==="s"&&ks(a,700,.09,"square",.12),o.el>=o.dur&&Xt()}else if(o.phase==="rest")o.el+=z,o.el>=I(at)&&(o.set++,mt());else if(o.phase==="ready"){o.animT+=Math.min(z,.05);let Pt=Math.floor(o.animT/o.dur);Pt!==o.wrapN&&(o.wrapN=Pt,o.snap=1)}}let Mt=o.screen==="session"&&(o.phase==="ready"||o.phase==="work"),Et=Mt?Ht():0;if(o.setIdx=o.phase==="work"?o.set:o.wrapN,p(At,at)&&(o.side=o.setIdx%2===0?-1:1),Mt&&o.phase==="work"&&!o.paused&&at.unit==="rep"){let Pt=T(at,Et);Pt!==o.lastRep&&(o.lastRep=Pt,ci(a,String(Pt+1)))}o.screen==="session"&&W()}let Gt=performance.now();function he(z){let at=Math.min(.25,(z-Gt)/1e3||0);if(Gt=z,wt(at),B.isOpen()){requestAnimationFrame(he);return}let At=t[o.ex],Mt=o.screen==="session",Et=Mt&&(o.phase==="ready"||o.phase==="work"),Pt=Object.assign({},v(o.ex),{L:g(o.ex),ex:o.ex}),ce=!!o.snap;o.snap=0,d.frame({dt:at,time:z,mode:Et?At.mode:"idle",t:Et?Ht():0,ctx:o,level:Pt,snap:ce,ex:At,active:Mt,muscles:At.mus,musclesOn:f&&Mt&&["ready","count","work"].includes(o.phase),view:h[o.view],drag:{az:o.dragAz,el:o.dragEl},cam:Mt?At.cam:{az:-38,el:7,dist:3.5,ty:.8}}),requestAnimationFrame(he)}C(),F(),k("setup"),L(),W(),d.resize(),requestAnimationFrame(he),window.__k={mirror:B,D:o,EXS:t,CFG:a,stage:d,step:(z,at,At,Mt,Et,Pt,ce)=>Ds(z,at,At,Mt,Et,Pt,ce),probe(z,at,At,Mt){let Et=t[z],Pt=Object.assign({},Et.levels[at-1],{L:at,ex:z}),ce=Pt.unit==="rep"?Pt.n*(Pt.repT||Pt.J+Pt.H):Pt.n,Jt=d.avatar,jt={side:At,dur:ce,ex:z},S=1/60,_t=Math.min(Mt||12,ce),xt=null,w=null,x={rot:0,pos:0,bone:-1,t:0},D=0,O=0,Y=[];for(let dt=0,gt=0;dt<_t;dt+=S,gt++){Ds(Jt,Et.mode,dt,jt,Pt,S,gt===0);let ct=Jt.ALL.map(Lt=>Lt.getWorldQuaternion(new Jt.root.quaternion.constructor)),ht=Jt.root.position.clone();if(xt&&gt>20){let Lt=0,Vt=-1;ct.forEach((ot,tt)=>{let pt=2*Math.acos(Math.min(1,Math.abs(ot.dot(xt[tt]))))*57.2958;pt>Lt&&(Lt=pt,Vt=tt)});let R=ht.distanceTo(w);Lt>x.rot&&(x.rot=Lt,x.bone=Vt,x.t=dt),R>x.pos&&(x.pos=R)}let Rt=1e9;for(let Lt of Jt.marks){let Vt=Lt.o.getWorldPosition(new Jt.root.position.constructor);Rt=Math.min(Rt,Vt.y-Lt.r)}Rt<-.02&&(D=Math.max(D,-Rt)),xt=ct,w=ht}let et=dt=>(Ds(Jt,Et.mode,dt,jt,Pt,S,!0),Jt.ALL.map(gt=>gt.getWorldQuaternion(new Jt.root.quaternion.constructor))),ft=et(Math.max(0,ce-S)),j=et(0),K=0;return ft.forEach((dt,gt)=>{K=Math.max(K,2*Math.acos(Math.min(1,Math.abs(dt.dot(j[gt]))))*57.2958)}),{name:Et.name,level:at,side:At,dur:ce,maxRotDegPerFrame:+x.rot.toFixed(1),atT:+x.t.toFixed(2),bone:Jt.ALL[x.bone]?Jt.ALL[x.bone].name||x.bone:-1,maxPosPerFrame:+x.pos.toFixed(3),underGround:+D.toFixed(3),seamDeg:+K.toFixed(1)}},show(z,at,At,Mt){a.lv[z]=at,o.screen="session",k("session"),o.ex=z,G(),o.paused=!0,o.animT=At,Mt!==void 0&&(o.side=Mt),o.snap=1,L()}}}id(ku);})();
