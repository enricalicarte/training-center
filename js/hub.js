(()=>{var Qc=0,pl=1,eh=2;var Vi=1,th=2,Ss=3,Ti=0,tn=1,Pn=2,Wn=0,Ts=1,nr=2,ml=3,gl=4,nh=5;var Hi=100,ih=101,sh=102,rh=103,ah=104,oh=200,lh=201,ch=202,hh=203,_l=204,xl=205,uh=206,dh=207,fh=208,ph=209,mh=210,gh=211,_h=212,xh=213,yh=214,Yr=0,Jr=1,Zr=2,ds=3,$r=4,Kr=5,jr=6,Qr=7,yl=0,vh=1,Mh=2,In=0,vl=1,Ml=2,bl=3,ir=4,Sl=5,Tl=6,wl=7;var Al=300,wi=301,Gi=302,Aa=303,Ea=304,sr=306,fs=1e3,Vn=1001,ea=1002,Ut=1003,bh=1004;var rr=1005;var kt=1006,Ca=1007;var Ai=1008;var ln=1009,El=1010,Cl=1011,ws=1012,Ra=1013,Ln=1014,Dn=1015,Nn=1016,Pa=1017,Ia=1018,As=1020,Rl=35902,Pl=35899,Il=1021,Ll=1022,vn=1023,Hn=1026,Ei=1027,Dl=1028,La=1029,Ci=1030,Da=1031;var Na=1033,ar=33776,or=33777,lr=33778,cr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Va=37496,Ha=37488,Ga=37489,hr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Ja=37811,Za=37812,$a=37813,Ka=37814,ja=37815,Qa=37816,eo=37817,to=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,ur=36285,ho=36286;var zs=2300,ta=2301,Xr=2302,ol=2303,ll=2400,cl=2401,hl=2402;var Sh=3200;var uo=0,Th=1,ii="",Kt="srgb",ks="srgb-linear",Vs="linear",at="srgb";var qr=7680;var wh=519,Ah=512,Eh=513,Ch=514,fo=515,Rh=516,Ph=517,po=518,Ih=519,Lh=35044;var Nl="300 es",Cn=2e3,ps=2001;function cd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function hd(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Hs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Dh(){let n=Hs("canvas");return n.style.display="block",n}var Lc={},ms=null;function Ul(...n){let e="THREE."+n.shift();ms?ms("log",e,...n):console.log(e,...n)}function Nh(n){let e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Ne(...n){n=Nh(n);let e="THREE."+n.shift();if(ms)ms("warn",e,...n);else{let t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Ue(...n){n=Nh(n);let e="THREE."+n.shift();if(ms)ms("error",e,...n);else{let t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function zi(...n){let e=n.join(" ");e in Lc||(Lc[e]=!0,Ne(...n))}function Uh(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Fh={[Yr]:Jr,[Zr]:jr,[$r]:Qr,[ds]:Kr,[Jr]:Yr,[jr]:Zr,[Qr]:$r,[Kr]:ds},Gn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Gt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Bo=Math.PI/180,na=180/Math.PI;function dr(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Gt[n&255]+Gt[n>>8&255]+Gt[n>>16&255]+Gt[n>>24&255]+"-"+Gt[e&255]+Gt[e>>8&255]+"-"+Gt[e>>16&15|64]+Gt[e>>24&255]+"-"+Gt[t&63|128]+Gt[t>>8&255]+"-"+Gt[t>>16&255]+Gt[t>>24&255]+Gt[i&255]+Gt[i>>8&255]+Gt[i>>16&255]+Gt[i>>24&255]).toLowerCase()}function $e(n,e,t){return Math.max(e,Math.min(t,n))}function ud(n,e){return(n%e+e)%e}function zo(n,e,t){return(1-t)*n+t*e}function Ns(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function sn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var kl=class kl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kl.prototype.isVector2=!0;var qe=kl,qt=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],u=i[s+2],f=i[s+3],h=r[a+0],d=r[a+1],g=r[a+2],v=r[a+3];if(f!==v||l!==h||c!==d||u!==g){let m=l*h+c*d+u*g+f*v;m<0&&(h=-h,d=-d,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let w=Math.acos(m),E=Math.sin(w);p=Math.sin(p*w)/E,o=Math.sin(o*w)/E,l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+v*o}else{l=l*p+h*o,c=c*p+d*o,u=u*p+g*o,f=f*p+v*o;let w=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=w,c*=w,u*=w,f*=w}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],u=i[s+3],f=r[a],h=r[a+1],d=r[a+2],g=r[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(s/2),f=o(r/2),h=l(i/2),d=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){let d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(i>o&&i>f){let d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-i-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+f-i-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-i*c,this._z=r*u+a*c+i*l-s*o,this._w=a*u-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Vl=class Vl{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),u=2*(o*t-r*s),f=2*(r*i-a*t);return this.x=t+l*c+a*f-o*u,this.y=i+l*u+o*c-r*f,this.z=s+l*f+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ko.copy(this).projectOnVector(e),this.sub(ko)}reflect(e){return this.sub(ko.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($e(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vl.prototype.isVector3=!0;var U=Vl,ko=new U,Dc=new qt,Hl=class Hl{constructor(e,t,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],v=s[0],m=s[3],p=s[6],w=s[1],E=s[4],M=s[7],b=s[2],S=s[5],C=s[8];return r[0]=a*v+o*w+l*b,r[3]=a*m+o*E+l*S,r[6]=a*p+o*M+l*C,r[1]=c*v+u*w+f*b,r[4]=c*m+u*E+f*S,r[7]=c*p+u*M+f*C,r[2]=h*v+d*w+g*b,r[5]=h*m+d*E+g*S,r[8]=h*p+d*M+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*r*u+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*r,d=c*r-a*l,g=t*f+i*h+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=f*v,e[1]=(s*c-u*i)*v,e[2]=(o*i-s*a)*v,e[3]=h*v,e[4]=(u*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=d*v,e[7]=(i*l-c*t)*v,e[8]=(a*t-i*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return zi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vo.makeScale(e,t)),this}rotate(e){return zi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vo.makeRotation(-e)),this}translate(e,t){return zi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Hl.prototype.isMatrix3=!0;var Oe=Hl,Vo=new Oe,Nc=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Uc=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function dd(){let n={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===at&&(s.r=ni(s.r),s.g=ni(s.g),s.b=ni(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ii?Vs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ks]:{primaries:e,whitePoint:i,transfer:Vs,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Nc,fromXYZ:Uc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),n}var Ze=dd();function ni(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function us(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var ji,ia=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ji===void 0&&(ji=Hs("canvas")),ji.width=e.width,ji.height=e.height;let s=ji.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ji}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Hs("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ni(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ni(t[i]/255)*255):t[i]=ni(t[i]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fd=0,gs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ho(s[a].image)):r.push(Ho(s[a]))}else r=Ho(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ho(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ia.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var pd=0,Go=new U,jt=class n extends Gn{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Vn,s=Vn,r=kt,a=Ai,o=vn,l=ln,c=n.DEFAULT_ANISOTROPY,u=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=dr(),this.name="",this.source=new gs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Go).x}get height(){return this.source.getSize(Go).y}get depth(){return this.source.getSize(Go).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fs:e.x=e.x-Math.floor(e.x);break;case Vn:e.x=e.x<0?0:1;break;case ea:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fs:e.y=e.y-Math.floor(e.y);break;case Vn:e.y=e.y<0?0:1;break;case ea:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jt.DEFAULT_IMAGE=null;jt.DEFAULT_MAPPING=Al;jt.DEFAULT_ANISOTROPY=1;var Gl=class Gl{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,M=(d+1)/2,b=(p+1)/2,S=(u+h)/4,C=(f+v)/4,x=(g+m)/4;return E>M&&E>b?E<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(E),s=S/i,r=C/i):M>b?M<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),i=S/s,r=x/s):b<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),i=C/r,s=x/r),this.set(i,s,r,t),this}let w=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(h-u)*(h-u));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(f-v)/w,this.z=(h-u)/w,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar($e(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gl.prototype.isVector4=!0;var Mt=Gl,sa=class extends Gn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new Mt(0,0,e,t),this.scissorTest=!1,this.viewport=new Mt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:i.depth},r=new jt(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new gs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},an=class extends sa{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Gs=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Ut,this.minFilter=Ut,this.wrapR=Vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wa=class wa{constructor(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m)}set(e,t,i,s,r,a,o,l,c,u,f,h,d,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=h,p[3]=d,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,s=1/Qi.setFromMatrixColumn(e,0).length(),r=1/Qi.setFromMatrixColumn(e,1).length(),a=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-v*c,t[9]=-o*l,t[2]=v-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h+v*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=v+h*o,t[10]=a*l}else if(e.order==="ZXY"){let h=l*u,d=l*f,g=c*u,v=c*f;t[0]=h-v*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=v-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let h=a*u,d=a*f,g=o*u,v=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+v,t[1]=l*f,t[5]=v*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-v*f}else if(e.order==="XZY"){let h=a*l,d=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+v,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=v*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(md,e,gd)}lookAt(e,t,i){let s=this.elements;return un.subVectors(e,t),un.lengthSq()===0&&(un.z=1),un.normalize(),ci.crossVectors(i,un),ci.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ci.crossVectors(i,un)),ci.normalize(),Ar.crossVectors(un,ci),s[0]=ci.x,s[4]=Ar.x,s[8]=un.x,s[1]=ci.y,s[5]=Ar.y,s[9]=un.y,s[2]=ci.z,s[6]=Ar.z,s[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],v=i[6],m=i[10],p=i[14],w=i[3],E=i[7],M=i[11],b=i[15],S=s[0],C=s[4],x=s[8],T=s[12],R=s[1],N=s[5],F=s[9],k=s[13],I=s[2],G=s[6],Y=s[10],$=s[14],ie=s[3],O=s[7],X=s[11],J=s[15];return r[0]=a*S+o*R+l*I+c*ie,r[4]=a*C+o*N+l*G+c*O,r[8]=a*x+o*F+l*Y+c*X,r[12]=a*T+o*k+l*$+c*J,r[1]=u*S+f*R+h*I+d*ie,r[5]=u*C+f*N+h*G+d*O,r[9]=u*x+f*F+h*Y+d*X,r[13]=u*T+f*k+h*$+d*J,r[2]=g*S+v*R+m*I+p*ie,r[6]=g*C+v*N+m*G+p*O,r[10]=g*x+v*F+m*Y+p*X,r[14]=g*T+v*k+m*$+p*J,r[3]=w*S+E*R+M*I+b*ie,r[7]=w*C+E*N+M*G+b*O,r[11]=w*x+E*F+M*Y+b*X,r[15]=w*T+E*k+M*$+b*J,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],v=e[7],m=e[11],p=e[15],w=l*d-c*h,E=o*d-c*f,M=o*h-l*f,b=a*d-c*u,S=a*h-l*u,C=a*f-o*u;return t*(v*w-m*E+p*M)-i*(g*w-m*b+p*S)+s*(g*E-v*b+p*C)-r*(g*M-v*S+m*C)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-i*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],v=e[13],m=e[14],p=e[15],w=t*o-i*a,E=t*l-s*a,M=t*c-r*a,b=i*l-s*o,S=i*c-r*o,C=s*c-r*l,x=u*v-f*g,T=u*m-h*g,R=u*p-d*g,N=f*m-h*v,F=f*p-d*v,k=h*p-d*m,I=w*k-E*F+M*N+b*R-S*T+C*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return e[0]=(o*k-l*F+c*N)*G,e[1]=(s*F-i*k-r*N)*G,e[2]=(v*C-m*S+p*b)*G,e[3]=(h*S-f*C-d*b)*G,e[4]=(l*R-a*k-c*T)*G,e[5]=(t*k-s*R+r*T)*G,e[6]=(m*M-g*C-p*E)*G,e[7]=(u*C-h*M+d*E)*G,e[8]=(a*F-o*R+c*x)*G,e[9]=(i*R-t*F-r*x)*G,e[10]=(g*S-v*M+p*w)*G,e[11]=(f*M-u*S-d*w)*G,e[12]=(o*T-a*N-l*x)*G,e[13]=(t*N-i*T+s*x)*G,e[14]=(v*E-g*b-m*w)*G,e[15]=(u*b-f*E+h*w)*G,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+i,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,f=o+o,h=r*c,d=r*u,g=r*f,v=a*u,m=a*f,p=o*f,w=l*c,E=l*u,M=l*f,b=i.x,S=i.y,C=i.z;return s[0]=(1-(v+p))*b,s[1]=(d+M)*b,s[2]=(g-E)*b,s[3]=0,s[4]=(d-M)*S,s[5]=(1-(h+p))*S,s[6]=(m+w)*S,s[7]=0,s[8]=(g+E)*C,s[9]=(m-w)*C,s[10]=(1-(h+v))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Qi.set(s[0],s[1],s[2]).length(),o=Qi.set(s[4],s[5],s[6]).length(),l=Qi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Tn.copy(this);let c=1/a,u=1/o,f=1/l;return Tn.elements[0]*=c,Tn.elements[1]*=c,Tn.elements[2]*=c,Tn.elements[4]*=u,Tn.elements[5]*=u,Tn.elements[6]*=u,Tn.elements[8]*=f,Tn.elements[9]*=f,Tn.elements[10]*=f,t.setFromRotationMatrix(Tn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,t,i,s,r,a,o=Cn,l=!1){let c=this.elements,u=2*r/(t-e),f=2*r/(i-s),h=(t+e)/(t-e),d=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===ps)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=Cn,l=!1){let c=this.elements,u=2/(t-e),f=2/(i-s),h=-(t+e)/(t-e),d=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===Cn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===ps)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};wa.prototype.isMatrix4=!0;var gt=wa,Qi=new U,Tn=new gt,md=new U(0,0,0),gd=new U(1,1,1),ci=new U,Ar=new U,un=new U,Fc=new gt,Oc=new qt,Rn=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],f=s[2],h=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Fc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";var Ws=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},_d=0,Bc=new U,es=new qt,Kn=new gt,Er=new U,Us=new U,xd=new U,yd=new qt,zc=new U(1,0,0),kc=new U(0,1,0),Vc=new U(0,0,1),Hc={type:"added"},vd={type:"removed"},ts={type:"childadded",child:null},Wo={type:"childremoved",child:null},Ft=class n extends Gn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new U,t=new Rn,i=new qt,s=new U(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new gt},normalMatrix:{value:new Oe}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ws,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.multiply(es),this}rotateOnWorldAxis(e,t){return es.setFromAxisAngle(e,t),this.quaternion.premultiply(es),this}rotateX(e){return this.rotateOnAxis(zc,e)}rotateY(e){return this.rotateOnAxis(kc,e)}rotateZ(e){return this.rotateOnAxis(Vc,e)}translateOnAxis(e,t){return Bc.copy(e).applyQuaternion(this.quaternion),this.position.add(Bc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zc,e)}translateY(e){return this.translateOnAxis(kc,e)}translateZ(e){return this.translateOnAxis(Vc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Er.copy(e):Er.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Us,Er,this.up):Kn.lookAt(Er,Us,this.up),this.quaternion.setFromRotationMatrix(Kn),s&&(Kn.extractRotation(s.matrixWorld),es.setFromRotationMatrix(Kn),this.quaternion.premultiply(es.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Hc),ts.child=e,this.dispatchEvent(ts),ts.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vd),Wo.child=e,this.dispatchEvent(Wo),Wo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Hc),ts.child=e,this.dispatchEvent(ts),ts.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,xd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,yd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*s,r[13]+=i-r[1]*t-r[5]*i-r[9]*s,r[14]+=s-r[2]*t-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ft.DEFAULT_UP=new U(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yt=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},Md={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Md)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new yt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Oh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function Xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Be=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ze.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=Ze.workingColorSpace){if(e=ud(e,1),t=$e(t,0,1),i=$e(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Xo(a,r,e+1/3),this.g=Xo(a,r,e),this.b=Xo(a,r,e-1/3)}return Ze.colorSpaceToWorking(this,s),this}setStyle(e,t=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let i=Oh[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Ze.workingToColorSpace(Wt.copy(this),e),Math.round($e(Wt.r*255,0,255))*65536+Math.round($e(Wt.g*255,0,255))*256+Math.round($e(Wt.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.workingToColorSpace(Wt.copy(this),t);let i=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-i)/f+2;break;case r:l=(i-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Ze.workingColorSpace){return Ze.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Kt){Ze.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,i=Wt.g,s=Wt.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+t,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(hi),e.getHSL(Cr);let i=zo(hi.h,Cr.h,t),s=zo(hi.s,Cr.s,t),r=zo(hi.l,Cr.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new Be;Be.NAMES=Oh;var Xs=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new U,jn=new U,qo=new U,Qn=new U,ns=new U,is=new U,Gc=new U,Yo=new U,Jo=new U,Zo=new U,$o=new Mt,Ko=new Mt,jo=new Mt,pi=class n{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),wn.subVectors(e,t),s.cross(wn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){wn.subVectors(s,t),jn.subVectors(i,t),qo.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(jn),l=wn.dot(qo),c=jn.dot(jn),u=jn.dot(qo),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return r.set(1-d-g,g,d)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(o,Qn.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return $o.setScalar(0),Ko.setScalar(0),jo.setScalar(0),$o.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,i),jo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($o,r.x),a.addScaledVector(Ko,r.y),a.addScaledVector(jo,r.z),a}static isFrontFacing(e,t,i,s){return wn.subVectors(i,t),jn.subVectors(e,t),wn.cross(jn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),wn.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ns.subVectors(s,i),is.subVectors(r,i),Yo.subVectors(e,i);let l=ns.dot(Yo),c=is.dot(Yo);if(l<=0&&c<=0)return t.copy(i);Jo.subVectors(e,s);let u=ns.dot(Jo),f=is.dot(Jo);if(u>=0&&f<=u)return t.copy(s);let h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(ns,a);Zo.subVectors(e,r);let d=ns.dot(Zo),g=is.dot(Zo);if(g>=0&&d<=g)return t.copy(r);let v=d*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(is,o);let m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Gc.subVectors(r,s),o=(f-u)/(f-u+(d-g)),t.copy(s).addScaledVector(Gc,o);let p=1/(m+v+h);return a=v*p,o=h*p,t.copy(i).addScaledVector(ns,a).addScaledVector(is,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},mi=class{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,An):An.fromBufferAttribute(r,a),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rr.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Rr.copy(i.boundingBox)),Rr.applyMatrix4(e.matrixWorld),this.union(Rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fs),Pr.subVectors(this.max,Fs),ss.subVectors(e.a,Fs),rs.subVectors(e.b,Fs),as.subVectors(e.c,Fs),ui.subVectors(rs,ss),di.subVectors(as,rs),Ui.subVectors(ss,as);let t=[0,-ui.z,ui.y,0,-di.z,di.y,0,-Ui.z,Ui.y,ui.z,0,-ui.x,di.z,0,-di.x,Ui.z,0,-Ui.x,-ui.y,ui.x,0,-di.y,di.x,0,-Ui.y,Ui.x,0];return!Qo(t,ss,rs,as,Pr)||(t=[1,0,0,0,1,0,0,0,1],!Qo(t,ss,rs,as,Pr))?!1:(Ir.crossVectors(ui,di),t=[Ir.x,Ir.y,Ir.z],Qo(t,ss,rs,as,Pr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ei=[new U,new U,new U,new U,new U,new U,new U,new U],An=new U,Rr=new mi,ss=new U,rs=new U,as=new U,ui=new U,di=new U,Ui=new U,Fs=new U,Pr=new U,Ir=new U,Fi=new U;function Qo(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Fi.fromArray(n,r);let o=s.x*Math.abs(Fi.x)+s.y*Math.abs(Fi.y)+s.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),u=i.dot(Fi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Pt=new U,Lr=new qe,bd=0,rn=class extends Gn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Lh,this.updateRanges=[],this.gpuType=Dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Lr.fromBufferAttribute(this,t),Lr.applyMatrix3(e),this.setXY(t,Lr.x,Lr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix3(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyMatrix4(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.applyNormalMatrix(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Pt.fromBufferAttribute(this,t),Pt.transformDirection(e),this.setXYZ(t,Pt.x,Pt.y,Pt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ns(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=sn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ns(t,this.array)),t}setX(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ns(t,this.array)),t}setY(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ns(t,this.array)),t}setZ(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ns(t,this.array)),t}setW(e,t){return this.normalized&&(t=sn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=sn(t,this.array),i=sn(i,this.array),s=sn(s,this.array),r=sn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var qs=class extends rn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Ys=class extends rn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var vt=class extends rn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Sd=new mi,Os=new U,el=new U,xs=class{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Sd.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Os.subVectors(e,this.center);let t=Os.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(Os,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(el.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Os.copy(e.center).add(el)),this.expandByPoint(Os.copy(e.center).sub(el))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Td=0,yn=new gt,tl=new Ft,os=new U,dn=new mi,Bs=new mi,Nt=new U,on=class n extends Gn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Oe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,i){return yn.makeTranslation(e,t,i),this.applyMatrix4(yn),this}scale(e,t,i){return yn.makeScale(e,t,i),this.applyMatrix4(yn),this}lookAt(e){return tl.lookAt(e),tl.updateMatrix(),this.applyMatrix4(tl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new vt(i,3))}else{let i=Math.min(e.length,t.count);for(let s=0;s<i;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];dn.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(dn.min,Bs.min),dn.expandByPoint(Nt),Nt.addVectors(dn.max,Bs.max),dn.expandByPoint(Nt)):(dn.expandByPoint(Bs.min),dn.expandByPoint(Bs.max))}dn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Nt.fromBufferAttribute(o,c),l&&(os.fromBufferAttribute(e,c),Nt.add(os)),s=Math.max(s,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new rn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new U,l[x]=new U;let c=new U,u=new U,f=new U,h=new qe,d=new qe,g=new qe,v=new U,m=new U;function p(x,T,R){c.fromBufferAttribute(i,x),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,R),h.fromBufferAttribute(r,x),d.fromBufferAttribute(r,T),g.fromBufferAttribute(r,R),u.sub(c),f.sub(c),d.sub(h),g.sub(h);let N=1/(d.x*g.y-g.x*d.y);isFinite(N)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(N),m.copy(f).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(N),o[x].add(v),o[T].add(v),o[R].add(v),l[x].add(m),l[T].add(m),l[R].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let x=0,T=w.length;x<T;++x){let R=w[x],N=R.start,F=R.count;for(let k=N,I=N+F;k<I;k+=3)p(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let E=new U,M=new U,b=new U,S=new U;function C(x){b.fromBufferAttribute(s,x),S.copy(b);let T=o[x];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),M.crossVectors(S,T);let N=M.dot(l[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,N)}for(let x=0,T=w.length;x<T;++x){let R=w[x],N=R.start,F=R.count;for(let k=N,I=N+F;k<I;k+=3)C(e.getX(k+0)),C(e.getX(k+1)),C(e.getX(k+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){let g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,r),f.subVectors(s,r),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u),d=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*u;for(let p=0;p<u;p++)h[g++]=c[d++]}return new rn(h,u,f)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,f=c.length;u<f;u++){let h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){let d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],f=r[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var nl=new U,wd=new U,Ad=new Oe,En=class{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=nl.subVectors(i,t).cross(wd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let s=e.delta(nl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Ad.getNormalMatrix(e),s=this.coplanarPoint(nl).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Ed=0,gi=class extends Gn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Ts,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=_l,this.blendDst=xl,this.blendEquation=Hi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new En().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ti=new U,il=new U,Dr=new U,Nr=new U,aa=class{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ti.copy(this.origin).addScaledVector(this.direction,t),ti.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){il.copy(e).add(t).multiplyScalar(.5),Dr.copy(t).sub(e).normalize(),Nr.copy(this.origin).sub(il);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Dr),o=Nr.dot(this.direction),l=-Nr.dot(Dr),c=Nr.lengthSq(),u=Math.abs(1-a*a),f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=r*u,f>=0)if(h>=-g)if(h<=g){let v=1/u;f*=v,h*=v,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-r,-l),r),d=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(il).addScaledVector(Dr,h),d}intersectSphere(e,t){if(e.radius<0)return null;ti.subVectors(e.center,this.origin);let i=ti.dot(this.direction),s=ti.dot(ti)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),u>=0?(r=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(r=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ti)!==null}intersectTriangle(e,t,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,h=e.y-a.y,d=e.z-a.z,g=t.x-a.x,v=t.y-a.y,m=t.z-a.z,p=i.x-a.x,w=i.y-a.y,E=i.z-a.z,M=Math.abs(l),b=Math.abs(c),S=Math.abs(u),C,x,T,R,N,F,k,I,G,Y,$,ie;if(M>=b&&M>=S?(T=l,F=f,G=g,ie=p,l>=0?(C=c,x=u,R=h,N=d,k=v,I=m,Y=w,$=E):(C=u,x=c,R=d,N=h,k=m,I=v,Y=E,$=w)):b>=S?(T=c,F=h,G=v,ie=w,c>=0?(C=u,x=l,R=d,N=f,k=m,I=g,Y=E,$=p):(C=l,x=u,R=f,N=d,k=g,I=m,Y=p,$=E)):(T=u,F=d,G=m,ie=E,u>=0?(C=l,x=c,R=f,N=h,k=g,I=v,Y=p,$=w):(C=c,x=l,R=h,N=f,k=v,I=g,Y=w,$=p)),T===0)return null;let O=C/T,X=x/T,J=1/T,ae=R-O*F,pe=N-X*F,ke=k-O*G,Ve=I-X*G,je=Y-O*ie,K=$-X*ie,te=je*Ve-K*ke,ye=ae*K-pe*je,De=ke*pe-Ve*ae;if(s){if(te<0||ye<0||De<0)return null}else if((te<0||ye<0||De<0)&&(te>0||ye>0||De>0))return null;let xe=te+ye+De;if(xe===0)return null;let Fe=J*(te*F+ye*G+De*ie);return(xe>0?Fe<0:Fe>0)?null:this.at(Fe/xe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_i=class extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Wc=new gt,Oi=new aa,Ur=new xs,Xc=new U,Fr=new U,Or=new U,Br=new U,sl=new U,zr=new U,qc=new U,kr=new U,et=class extends Ft{constructor(e=new on,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){zr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],f=r[l];u!==0&&(sl.fromBufferAttribute(f,e),a?zr.addScaledVector(sl,u):zr.addScaledVector(sl.sub(t),u))}t.add(zr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere),Ur.applyMatrix4(r),Oi.copy(e.ray).recast(e.near),!(Ur.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Ur,Xc)===null||Oi.origin.distanceToSquared(Xc)>(e.far-e.near)**2))&&(Wc.copy(r).invert(),Oi.copy(e.ray).applyMatrix4(Wc),!(i.boundingBox!==null&&Oi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Oi)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,h=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,b=E;M<b;M+=3){let S=o.getX(M),C=o.getX(M+1),x=o.getX(M+2);s=Vr(this,p,e,i,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let w=o.getX(m),E=o.getX(m+1),M=o.getX(m+2);s=Vr(this,a,e,i,c,u,f,w,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){let m=h[g],p=a[m.materialIndex],w=Math.max(m.start,d.start),E=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let M=w,b=E;M<b;M+=3){let S=M,C=M+1,x=M+2;s=Vr(this,p,e,i,c,u,f,S,C,x),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let m=g,p=v;m<p;m+=3){let w=m,E=m+1,M=m+2;s=Vr(this,a,e,i,c,u,f,w,E,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cd(n,e,t,i,s,r,a,o){let l;if(e.side===tn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Ti,o),l===null)return null;kr.copy(o),kr.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(kr);return c<t.near||c>t.far?null:{distance:c,point:kr.clone(),object:n}}function Vr(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Fr),n.getVertexPosition(l,Or),n.getVertexPosition(c,Br);let u=Cd(n,e,t,i,Fr,Or,Br,qc);if(u){let f=new U;pi.getBarycoord(qc,Fr,Or,Br,f),s&&(u.uv=pi.getInterpolatedAttribute(s,o,l,c,f,new qe)),r&&(u.uv1=pi.getInterpolatedAttribute(r,o,l,c,f,new qe)),a&&(u.normal=pi.getInterpolatedAttribute(a,o,l,c,f,new U),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:l,c,normal:new U,materialIndex:0};pi.getNormal(Fr,Or,Br,h.normal),u.face=h,u.barycoord=f}return u}var oa=class extends jt{constructor(e=null,t=1,i=1,s,r,a,o,l,c=Ut,u=Ut,f,h){super(null,a,o,l,c,u,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Bi=new xs,Rd=new qe(.5,.5),Hr=new U,ys=class{constructor(e=new En,t=new En,i=new En,s=new En,r=new En,a=new En){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Cn,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],f=r[5],h=r[6],d=r[7],g=r[8],v=r[9],m=r[10],p=r[11],w=r[12],E=r[13],M=r[14],b=r[15];if(s[0].setComponents(c-a,d-u,p-g,b-w).normalize(),s[1].setComponents(c+a,d+u,p+g,b+w).normalize(),s[2].setComponents(c+o,d+f,p+v,b+E).normalize(),s[3].setComponents(c-o,d-f,p-v,b-E).normalize(),i)s[4].setComponents(l,h,m,M).normalize(),s[5].setComponents(c-l,d-h,p-m,b-M).normalize();else if(s[4].setComponents(c-l,d-h,p-m,b-M).normalize(),t===Cn)s[5].setComponents(c+l,d+h,p+m,b+M).normalize();else if(t===ps)s[5].setComponents(l,h,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);let t=Rd.distanceTo(e.center);return Bi.radius=.7071067811865476+t,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Hr.x=s.normal.x>0?e.max.x:e.min.x,Hr.y=s.normal.y>0?e.max.y:e.min.y,Hr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Hr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Js=class extends jt{constructor(e=[],t=wi,i,s,r,a,o,l,c,u){super(e,t,i,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Zs=class extends jt{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var xi=class extends jt{constructor(e,t,i=Ln,s,r,a,o=Ut,l=Ut,c,u=Hn,f=1){if(u!==Hn&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let h={width:e,height:t,depth:f};super(h,s,r,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},la=class extends xi{constructor(e,t=Ln,i=wi,s,r,a=Ut,o=Ut,l,c=Hn){let u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,i,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},$s=class extends jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Qt=class n extends on{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],f=[],h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(u,3)),this.setAttribute("uv",new vt(f,2));function g(v,m,p,w,E,M,b,S,C,x,T){let R=M/C,N=b/x,F=M/2,k=b/2,I=S/2,G=C+1,Y=x+1,$=0,ie=0,O=new U;for(let X=0;X<Y;X++){let J=X*N-k;for(let ae=0;ae<G;ae++){let pe=ae*R-F;O[v]=pe*w,O[m]=J*E,O[p]=I,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[p]=S>0?1:-1,u.push(O.x,O.y,O.z),f.push(ae/C),f.push(1-X/x),$+=1}}for(let X=0;X<x;X++)for(let J=0;J<C;J++){let ae=h+J+G*X,pe=h+J+G*(X+1),ke=h+(J+1)+G*(X+1),Ve=h+(J+1)+G*X;l.push(ae,pe,Ve),l.push(pe,ke,Ve),ie+=6}o.addGroup(d,ie,T),d+=ie,h+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},yi=class n extends on{constructor(e=1,t=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:i,radialSegments:s,heightSegments:r},t=Math.max(0,t),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],u=t/2,f=Math.PI/2*e,h=t,d=2*f+h,g=i*2+r,v=s+1,m=new U,p=new U;for(let w=0;w<=g;w++){let E=0,M=0,b=0,S=0;if(w<=i){let T=w/i,R=T*Math.PI/2;M=-u-e*Math.cos(R),b=e*Math.sin(R),S=-e*Math.cos(R),E=T*f}else if(w<=i+r){let T=(w-i)/r;M=-u+T*t,b=e,S=0,E=f+T*h}else{let T=(w-i-r)/i,R=T*Math.PI/2;M=u+e*Math.sin(R),b=e*Math.cos(R),S=e*Math.sin(R),E=f+h+T*f}let C=Math.max(0,Math.min(1,E/d)),x=0;w===0?x=.5/s:w===g&&(x=-.5/s);for(let T=0;T<=s;T++){let R=T/s,N=R*Math.PI*2,F=Math.sin(N),k=Math.cos(N);p.x=-b*k,p.y=M,p.z=b*F,o.push(p.x,p.y,p.z),m.set(-b*k,S,b*F),m.normalize(),l.push(m.x,m.y,m.z),c.push(R+x,C)}if(w>0){let T=(w-1)*v;for(let R=0;R<s;R++){let N=T+R,F=T+R+1,k=w*v+R,I=w*v+R+1;a.push(N,F,k),a.push(F,I,k)}}}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}};var vs=class n extends on{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let u=[],f=[],h=[],d=[],g=0,v=[],m=i/2,p=0;w(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(u),this.setAttribute("position",new vt(f,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function w(){let M=new U,b=new U,S=0,C=(t-e)/i;for(let x=0;x<=r;x++){let T=[],R=x/r,N=R*(t-e)+e;for(let F=0;F<=s;F++){let k=F/s,I=k*l+o,G=Math.sin(I),Y=Math.cos(I);b.x=N*G,b.y=-R*i+m,b.z=N*Y,f.push(b.x,b.y,b.z),M.set(G,C,Y).normalize(),h.push(M.x,M.y,M.z),d.push(k,1-R),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let R=v[T][x],N=v[T+1][x],F=v[T+1][x+1],k=v[T][x+1];(e>0||T!==0)&&(u.push(R,N,k),S+=3),(t>0||T!==r-1)&&(u.push(N,F,k),S+=3)}c.addGroup(p,S,0),p+=S}function E(M){let b=g,S=new qe,C=new U,x=0,T=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,m*R,0),h.push(0,R,0),d.push(.5,.5),g++;let N=g;for(let F=0;F<=s;F++){let I=F/s*l+o,G=Math.cos(I),Y=Math.sin(I);C.x=T*Y,C.y=m*R,C.z=T*G,f.push(C.x,C.y,C.z),h.push(0,R,0),S.x=G*.5+.5,S.y=Y*.5*R+.5,d.push(S.x,S.y),g++}for(let F=0;F<s;F++){let k=b+F,I=N+F;M===!0?u.push(I,I+1,k):u.push(I+1,I,k),x+=3}c.addGroup(p,x,M===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var vi=class n extends on{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],v=[],m=[];for(let p=0;p<u;p++){let w=p*h-a;for(let E=0;E<c;E++){let M=E*f-r;g.push(M,-w,0),v.push(0,0,1),m.push(E/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let w=0;w<o;w++){let E=w+c*p,M=w+c*(p+1),b=w+1+c*(p+1),S=w+1+c*p;d.push(E,M,S),d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Ks=class n extends on{constructor(e=.5,t=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],u=[],f=e,h=(t-e)/s,d=new U,g=new qe;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;d.x=f*Math.cos(p),d.y=f*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,u.push(g.x,g.y)}f+=h}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let w=p+m,E=w,M=w+i+1,b=w+i+2,S=w+1;o.push(E,M,S),o.push(M,b,S)}}this.setIndex(o),this.setAttribute("position",new vt(l,3)),this.setAttribute("normal",new vt(c,3)),this.setAttribute("uv",new vt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var ki=class n extends on{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,u=[],f=new U,h=new U,d=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let w=[],E=p/i,M=a+E*o,b=e*Math.cos(M),S=Math.sqrt(e*e-b*b),C=0;p===0&&a===0?C=.5/t:p===i&&l===Math.PI&&(C=-.5/t);for(let x=0;x<=t;x++){let T=x/t,R=s+T*r;f.x=-S*Math.cos(R),f.y=b,f.z=S*Math.sin(R),g.push(f.x,f.y,f.z),h.copy(f).normalize(),v.push(h.x,h.y,h.z),m.push(T+C,1-E),w.push(c++)}u.push(w)}for(let p=0;p<i;p++)for(let w=0;w<t;w++){let E=u[p][w+1],M=u[p][w],b=u[p+1][w],S=u[p+1][w+1];(p!==0||a>0)&&d.push(E,M,S),(p!==i-1||l<Math.PI)&&d.push(M,b,S)}this.setIndex(d),this.setAttribute("position",new vt(g,3)),this.setAttribute("normal",new vt(v,3)),this.setAttribute("uv",new vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};function Wi(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];if(Yc(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Yc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][i]=r}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Yt(n){let e={};for(let t=0;t<n.length;t++){let i=Wi(n[t]);for(let s in i)e[s]=i[s]}return e}function Yc(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Pd(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Fl(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}var Bh={clone:Wi,merge:Yt},Id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,en=class extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Id,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Pd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Mt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new Oe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ca=class extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},fn=class extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var ha=class extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Sh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function rl(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}var Mi=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends Mi{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case cl:r=e,o=2*t-i;break;case hl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case cl:a=e,l=2*i-t;break;case hl:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,g=(i-t)/(s-t),v=g*g,m=v*g,p=-h*m+2*h*v-h*g,w=(1+h)*m+(-1.5-2*h)*v+(-.5+h)*g+1,E=(-1-d)*m+(1.5+d)*v+.5*g,M=d*m-d*v;for(let b=0;b!==o;++b)r[b]=p*a[u+b]+w*a[c+b]+E*a[l+b]+M*a[f+b];return r}},fa=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(i-t)/(s-t),f=1-u;for(let h=0;h!==o;++h)r[h]=a[c+h]*f+a[l+h]*u;return r}},pa=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ma=class extends Mi{interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,f=this.outTangents;if(!u||!f){let g=(i-t)/(s-t),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let h=o*2,d=e-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=d*h+g*2,w=f[p],E=f[p+1],M=e*h+g*2,b=u[M],S=u[M+1],C=Nd(i,t,w,b,s);r[g]=zh(C,v,E,S,m)}return r}};function zh(n,e,t,i,s){let r=1-n;return r*r*r*e+3*r*r*n*t+3*r*n*n*i+n*n*n*s}function Dd(n,e,t,i,s){let r=1-n;return 3*r*r*(t-e)+6*r*n*(i-t)+3*n*n*(s-i)}function Nd(n,e,t,i,s){let r=(n-e)/(s-e);for(let a=0;a<8;a++){let o=zh(r,e,t,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Dd(r,e,t,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var pn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),rl(e.settings)&&(i.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case zs:t=this.InterpolantFactoryMethodDiscrete;break;case ta:t=this.InterpolantFactoryMethodLinear;break;case Xr:t=this.InterpolantFactoryMethodSmooth;break;case ol:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ne("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zs;case this.InterpolantFactoryMethodLinear:return ta;case this.InterpolantFactoryMethodSmooth:return Xr;case this.InterpolantFactoryMethodBezier:return ol}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e;rl(this.settings)&&(Jc(this.settings.inTangents,e),Jc(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ue("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&hd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Xr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*i,h=f-i,d=f+i;for(let g=0;g!==i;++g){let v=t[f+g];if(v!==t[h+g]||v!==t[d+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*i,h=a*i;for(let d=0;d!==i;++d)t[h+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Jc(n,e){for(let t=0,i=n.length;t!==i;t+=2)n[t]*=e}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ta;var bi=class extends pn{constructor(e,t,i){super(e,t,i)}};bi.prototype.ValueTypeName="bool";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=zs;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};ga.prototype.ValueTypeName="color";var _a=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};_a.prototype.ValueTypeName="number";var xa=class extends Mi{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)qt.slerpFlat(r,0,a,c-o,a,c,l);return r}},js=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};js.prototype.ValueTypeName="quaternion";js.prototype.InterpolantFactoryMethodSmooth=void 0;var Si=class extends pn{constructor(e,t,i){super(e,t,i)}};Si.prototype.ValueTypeName="string";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=zs;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends pn{constructor(e,t,i,s){super(e,t,i,s)}};ya.prototype.ValueTypeName="vector";var va=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){let f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){let d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},kh=new va,Ma=class{constructor(e){this.manager=e!==void 0?e:kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ma.DEFAULT_MATERIAL_NAME="__DEFAULT";var Qs=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},er=class extends Qs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Be(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},al=new gt,Zc=new U,$c=new U,ba=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new Mt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),$c.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($c),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,s){al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(al,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ps||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Gr=new U,Wr=new qt,kn=new U,tr=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Gr,Wr,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Wr,kn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Gr,Wr,kn),kn.x===1&&kn.y===1&&kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Gr,Wr,kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new U,Kc=new qe,jc=new qe,Xt=class extends tr{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Bo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(Bo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Kc,jc),t.subVectors(jc,Kc)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Bo*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Ms=class extends tr{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends ba{constructor(){super(new Ms(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bs=class extends Qs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var cs=-90,hs=1,Sa=class extends Ft{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Xt(cs,hs,e,t);s.layers=this.layers,this.add(s);let r=new Xt(cs,hs,e,t);r.layers=this.layers,this.add(r);let a=new Xt(cs,hs,e,t);a.layers=this.layers,this.add(a);let o=new Xt(cs,hs,e,t);o.layers=this.layers,this.add(o);let l=new Xt(cs,hs,e,t);l.layers=this.layers,this.add(l);let c=new Xt(cs,hs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ps)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(f,h,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ta=class extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ol="\\[\\]\\.:\\/",Ud=new RegExp("["+Ol+"]","g"),Bl="[^"+Ol+"]",Fd="[^"+Ol.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",Bl),Bd=/(WCOD+)?/.source.replace("WCOD",Fd),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bl),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bl),Vd=new RegExp("^"+Od+Bd+zd+kd+"$"),Hd=["material","materials","bones","map"],dl=class{constructor(e,t,i){let s=i||mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(e){let t=Vd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Hd.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mt.Composite=dl;mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mt.prototype.GetterByBindingType=[mt.prototype._getValue_direct,mt.prototype._getValue_array,mt.prototype._getValue_arrayElement,mt.prototype._getValue_toArray];mt.prototype.SetterByBindingTypeAndVersioning=[[mt.prototype._setValue_direct,mt.prototype._setValue_direct_setNeedsUpdate,mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_array,mt.prototype._setValue_array_setNeedsUpdate,mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_arrayElement,mt.prototype._setValue_arrayElement_setNeedsUpdate,mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mt.prototype._setValue_fromArray,mt.prototype._setValue_fromArray_setNeedsUpdate,mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var d_=new Float32Array(1);var Wl=class Wl{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=s,this}};Wl.prototype.isMatrix2=!0;var fl=Wl;function zl(n,e,t,i){let s=Gd(i);switch(t){case Il:return n*e;case Dl:return n*e/s.components*s.byteLength;case La:return n*e/s.components*s.byteLength;case Ci:return n*e*2/s.components*s.byteLength;case Da:return n*e*2/s.components*s.byteLength;case Ll:return n*e*3/s.components*s.byteLength;case vn:return n*e*4/s.components*s.byteLength;case Na:return n*e*4/s.components*s.byteLength;case ar:case or:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case lr:case cr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Fa:case Ba:return Math.max(n,16)*Math.max(e,8)/4;case Ua:case Oa:return Math.max(n,8)*Math.max(e,8)/2;case za:case ka:case Ha:case Ga:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Va:case hr:case Wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case qa:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ya:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case $a:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ka:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case ja:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Qa:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case eo:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case to:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case no:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case io:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case so:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case ao:case oo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case lo:case co:return Math.ceil(n/4)*Math.ceil(e/4)*8;case ur:case ho:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gd(n){switch(n){case ln:case El:return{byteLength:1,components:1};case ws:case Cl:case Nn:return{byteLength:2,components:1};case Pa:case Ia:return{byteLength:2,components:4};case Ln:case Ra:case Dn:return{byteLength:4,components:1};case Rl:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function lu(){let n=null,e=!1,t=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&n!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Xd(n){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,f=c.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,c,u),o.onUploadCallback();let d;if(c instanceof Float32Array)d=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=n.SHORT;else if(c instanceof Uint32Array)d=n.UNSIGNED_INT;else if(c instanceof Int32Array)d=n.INT;else if(c instanceof Int8Array)d=n.BYTE;else if(c instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){let u=l.array,f=l.updateRanges;if(n.bindBuffer(c,o),f.length===0)n.bufferSubData(c,0,u);else{f.sort((d,g)=>d.start-g.start);let h=0;for(let d=1;d<f.length;d++){let g=f[h],v=f[d];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++h,f[h]=v)}f.length=h+1;for(let d=0,g=f.length;d<g;d++){let v=f[d];n.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,Jd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$d=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ef=`#ifdef USE_BATCHING
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
#endif`,tf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,af=`#ifdef USE_IRIDESCENCE
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
#endif`,of=`#ifdef USE_BUMPMAP
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
#endif`,lf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,mf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,gf=`#define PI 3.141592653589793
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
} // validated`,_f=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xf=`vec3 transformedNormal = objectNormal;
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
#endif`,yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wf=`#ifdef USE_ENVMAP
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
#endif`,Af=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ef=`#ifdef USE_ENVMAP
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
#endif`,Cf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rf=`#ifdef USE_ENVMAP
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
#endif`,Pf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,If=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Df=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nf=`#ifdef USE_GRADIENTMAP
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
}`,Uf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ff=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Of=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bf=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zf=`#ifdef USE_ENVMAP
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
#endif`,kf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wf=`PhysicalMaterial material;
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
#endif`,Xf=`uniform sampler2D dfgLUT;
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
}`,qf=`
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
#endif`,Yf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Jf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zf=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,$f=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,np=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ip=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ap=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,op=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,up=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,gp=`#ifdef USE_NORMALMAP
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
#endif`,_p=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ap=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ep=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lp=`float getShadowMask() {
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
}`,Dp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Np=`#ifdef USE_SKINNING
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
#endif`,Up=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,Op=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Hp=`#ifdef USE_TRANSMISSION
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
#endif`,Gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Yp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Jp=`uniform sampler2D t2D;
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rm=`uniform float scale;
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
}`,am=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,hm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,fm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,_m=`#define STANDARD
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
}`,xm=`#define STANDARD
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
}`,ym=`#define TOON
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
}`,vm=`#define TOON
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
}`,Mm=`uniform float size;
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
}`,bm=`uniform vec3 diffuse;
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
}`,Sm=`#include <common>
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
}`,Tm=`uniform vec3 color;
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
}`,wm=`uniform float rotation;
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
}`,Am=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:Jd,alphamap_pars_fragment:Zd,alphatest_fragment:$d,alphatest_pars_fragment:Kd,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:ef,batching_vertex:tf,begin_vertex:nf,beginnormal_vertex:sf,bsdfs:rf,iridescence_fragment:af,bumpmap_pars_fragment:of,clipping_planes_fragment:lf,clipping_planes_pars_fragment:cf,clipping_planes_pars_vertex:hf,clipping_planes_vertex:uf,color_fragment:df,color_pars_fragment:ff,color_pars_vertex:pf,color_vertex:mf,common:gf,cube_uv_reflection_fragment:_f,defaultnormal_vertex:xf,displacementmap_pars_vertex:yf,displacementmap_vertex:vf,emissivemap_fragment:Mf,emissivemap_pars_fragment:bf,colorspace_fragment:Sf,colorspace_pars_fragment:Tf,envmap_fragment:wf,envmap_common_pars_fragment:Af,envmap_pars_fragment:Ef,envmap_pars_vertex:Cf,envmap_physical_pars_fragment:zf,envmap_vertex:Rf,fog_vertex:Pf,fog_pars_vertex:If,fog_fragment:Lf,fog_pars_fragment:Df,gradientmap_pars_fragment:Nf,lightmap_pars_fragment:Uf,lights_lambert_fragment:Ff,lights_lambert_pars_fragment:Of,lights_pars_begin:Bf,lights_toon_fragment:kf,lights_toon_pars_fragment:Vf,lights_phong_fragment:Hf,lights_phong_pars_fragment:Gf,lights_physical_fragment:Wf,lights_physical_pars_fragment:Xf,lights_fragment_begin:qf,lights_fragment_maps:Yf,lights_fragment_end:Jf,lightprobes_pars_fragment:Zf,logdepthbuf_fragment:$f,logdepthbuf_pars_fragment:Kf,logdepthbuf_pars_vertex:jf,logdepthbuf_vertex:Qf,map_fragment:ep,map_pars_fragment:tp,map_particle_fragment:np,map_particle_pars_fragment:ip,metalnessmap_fragment:sp,metalnessmap_pars_fragment:rp,morphinstance_vertex:ap,morphcolor_vertex:op,morphnormal_vertex:lp,morphtarget_pars_vertex:cp,morphtarget_vertex:hp,normal_fragment_begin:up,normal_fragment_maps:dp,normal_pars_fragment:fp,normal_pars_vertex:pp,normal_vertex:mp,normalmap_pars_fragment:gp,clearcoat_normal_fragment_begin:_p,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:yp,iridescence_pars_fragment:vp,opaque_fragment:Mp,packing:bp,premultiplied_alpha_fragment:Sp,project_vertex:Tp,dithering_fragment:wp,dithering_pars_fragment:Ap,roughnessmap_fragment:Ep,roughnessmap_pars_fragment:Cp,shadowmap_pars_fragment:Rp,shadowmap_pars_vertex:Pp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Lp,skinbase_vertex:Dp,skinning_pars_vertex:Np,skinning_vertex:Up,skinnormal_vertex:Fp,specularmap_fragment:Op,specularmap_pars_fragment:Bp,tonemapping_fragment:zp,tonemapping_pars_fragment:kp,transmission_fragment:Vp,transmission_pars_fragment:Hp,uv_pars_fragment:Gp,uv_pars_vertex:Wp,uv_vertex:Xp,worldpos_vertex:qp,background_vert:Yp,background_frag:Jp,backgroundCube_vert:Zp,backgroundCube_frag:$p,cube_vert:Kp,cube_frag:jp,depth_vert:Qp,depth_frag:em,distance_vert:tm,distance_frag:nm,equirect_vert:im,equirect_frag:sm,linedashed_vert:rm,linedashed_frag:am,meshbasic_vert:om,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:hm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:fm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:_m,meshphysical_frag:xm,meshtoon_vert:ym,meshtoon_frag:vm,points_vert:Mm,points_frag:bm,shadow_vert:Sm,shadow_frag:Tm,sprite_vert:wm,sprite_frag:Am},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new U},probesMax:{value:new U},probesResolution:{value:new U}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qn={basic:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Yt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Yt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Yt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Yt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Yt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Yt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Yt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Yt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Yt([fe.common,fe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Yt([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};qn.physical={uniforms:Yt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var mo={r:0,b:0,g:0},Em=new gt,cu=new Oe;cu.set(-1,0,0,0,1,0,0,0,1);function Cm(n,e,t,i,s,r){let a=new Be(0),o=s===!0?0:1,l,c,u=null,f=0,h=null;function d(w){let E=w.isScene===!0?w.background:null;if(E&&E.isTexture){let M=w.backgroundBlurriness>0;E=e.get(E,M)}return E}function g(w){let E=!1,M=d(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),E=!0);let b=n.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(n.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(w,E){let M=d(E);M&&(M.isCubeTexture||M.mapping===sr)?(c===void 0&&(c=new et(new Qt(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Wi(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,S,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Em.makeRotationFromEuler(E.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(cu),c.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,(u!==M||f!==M.version||h!==n.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new et(new vi(2,2),new en({name:"BackgroundMaterial",uniforms:Wi(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(M.colorSpace)!==at,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||h!==n.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,h=n.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function m(w,E){w.getRGB(mo,Fl(n)),t.buffers.color.setClear(mo.r,mo.g,mo.b,E,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Rm(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=h(null),r=s,a=!1;function o(N,F,k,I,G){let Y=!1,$=f(N,I,k,F);r!==$&&(r=$,c(r.object)),Y=d(N,I,k,G),Y&&g(N,I,k,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,M(N,F,k,I),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return n.createVertexArray()}function c(N){return n.bindVertexArray(N)}function u(N){return n.deleteVertexArray(N)}function f(N,F,k,I){let G=I.wireframe===!0,Y=i[F.id];Y===void 0&&(Y={},i[F.id]=Y);let $=N.isInstancedMesh===!0?N.id:0,ie=Y[$];ie===void 0&&(ie={},Y[$]=ie);let O=ie[k.id];O===void 0&&(O={},ie[k.id]=O);let X=O[G];return X===void 0&&(X=h(l()),O[G]=X),X}function h(N){let F=[],k=[],I=[];for(let G=0;G<t;G++)F[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:k,attributeDivisors:I,object:N,attributes:{},index:null}}function d(N,F,k,I){let G=r.attributes,Y=F.attributes,$=0,ie=k.getAttributes();for(let O in ie)if(ie[O].location>=0){let J=G[O],ae=Y[O];if(ae===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(ae=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(ae=N.instanceColor)),J===void 0||J.attribute!==ae||ae&&J.data!==ae.data)return!0;$++}return r.attributesNum!==$||r.index!==I}function g(N,F,k,I){let G={},Y=F.attributes,$=0,ie=k.getAttributes();for(let O in ie)if(ie[O].location>=0){let J=Y[O];J===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(J=N.instanceColor));let ae={};ae.attribute=J,J&&J.data&&(ae.data=J.data),G[O]=ae,$++}r.attributes=G,r.attributesNum=$,r.index=I}function v(){let N=r.newAttributes;for(let F=0,k=N.length;F<k;F++)N[F]=0}function m(N){p(N,0)}function p(N,F){let k=r.newAttributes,I=r.enabledAttributes,G=r.attributeDivisors;k[N]=1,I[N]===0&&(n.enableVertexAttribArray(N),I[N]=1),G[N]!==F&&(n.vertexAttribDivisor(N,F),G[N]=F)}function w(){let N=r.newAttributes,F=r.enabledAttributes;for(let k=0,I=F.length;k<I;k++)F[k]!==N[k]&&(n.disableVertexAttribArray(k),F[k]=0)}function E(N,F,k,I,G,Y,$){$===!0?n.vertexAttribIPointer(N,F,k,G,Y):n.vertexAttribPointer(N,F,k,I,G,Y)}function M(N,F,k,I){v();let G=I.attributes,Y=k.getAttributes(),$=F.defaultAttributeValues;for(let ie in Y){let O=Y[ie];if(O.location>=0){let X=G[ie];if(X===void 0&&(ie==="instanceMatrix"&&N.instanceMatrix&&(X=N.instanceMatrix),ie==="instanceColor"&&N.instanceColor&&(X=N.instanceColor)),X!==void 0){let J=X.normalized,ae=X.itemSize,pe=e.get(X);if(pe===void 0)continue;let ke=pe.buffer,Ve=pe.type,je=pe.bytesPerElement,K=Ve===n.INT||Ve===n.UNSIGNED_INT||X.gpuType===Ra;if(X.isInterleavedBufferAttribute){let te=X.data,ye=te.stride,De=X.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<O.locationSize;xe++)p(O.location+xe,te.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<O.locationSize;xe++)m(O.location+xe);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let xe=0;xe<O.locationSize;xe++)E(O.location+xe,ae/O.locationSize,Ve,J,ye*je,(De+ae/O.locationSize*xe)*je,K)}else{if(X.isInstancedBufferAttribute){for(let te=0;te<O.locationSize;te++)p(O.location+te,X.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let te=0;te<O.locationSize;te++)m(O.location+te);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let te=0;te<O.locationSize;te++)E(O.location+te,ae/O.locationSize,Ve,J,ae*je,ae/O.locationSize*te*je,K)}}else if($!==void 0){let J=$[ie];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(O.location,J);break;case 3:n.vertexAttrib3fv(O.location,J);break;case 4:n.vertexAttrib4fv(O.location,J);break;default:n.vertexAttrib1fv(O.location,J)}}}}w()}function b(){T();for(let N in i){let F=i[N];for(let k in F){let I=F[k];for(let G in I){let Y=I[G];for(let $ in Y)u(Y[$].object),delete Y[$];delete I[G]}}delete i[N]}}function S(N){if(i[N.id]===void 0)return;let F=i[N.id];for(let k in F){let I=F[k];for(let G in I){let Y=I[G];for(let $ in Y)u(Y[$].object),delete Y[$];delete I[G]}}delete i[N.id]}function C(N){for(let F in i){let k=i[F];for(let I in k){let G=k[I];if(G[N.id]===void 0)continue;let Y=G[N.id];for(let $ in Y)u(Y[$].object),delete Y[$];delete G[N.id]}}}function x(N){for(let F in i){let k=i[F],I=N.isInstancedMesh===!0?N.id:0,G=k[I];if(G!==void 0){for(let Y in G){let $=G[Y];for(let ie in $)u($[ie].object),delete $[ie];delete G[Y]}delete k[I],Object.keys(k).length===0&&delete i[F]}}}function T(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:R,dispose:b,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:w}}function Pm(n,e,t){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),t.update(c,i,1)}function a(l,c,u){u!==0&&(n.drawArraysInstanced(i,l,c,u),t.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let h=0;for(let d=0;d<u;d++)h+=c[d];t.update(h,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Im(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==vn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let x=C===Nn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==ln&&C!==Dn&&!x&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Ne("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:M,maxSamples:b,samples:S}}function Lm(n){let e=this,t=null,i=0,s=!1,r=!1,a=new En,o=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){let d=f.length!==0||h||i!==0||s;return s=h,i=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){let g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=n.get(f);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{let w=r?0:i,E=w*4,M=p.clippingState||null;l.value=M,M=u(g,h,E,d);for(let b=0;b!==E;++b)M[b]=t[b];p.clippingState=M,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){let v=f!==null?f.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=d+v*4,w=h.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,M=d;E!==v;++E,M+=4)a.copy(f[E]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}var Cs=4,Dm=6,Nm=20,Um=256,fr=new Ms,Vh=new Be,Xl=null,ql=0,Yl=0,Jl=!1,Fm=new U,Xi=new U,_o=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,r={}){let{size:a=256,position:o=Fm}=r;Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Xl,ql,Yl),this._renderer.xr.enabled=Jl,e.scissorTest=!1,Es(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===Gi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xl=this._renderer.getRenderTarget(),ql=this._renderer.getActiveCubeFace(),Yl=this._renderer.getActiveMipmapLevel(),Jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:kt,minFilter:kt,generateMipmaps:!1,type:Nn,format:vn,colorSpace:ks,depthBuffer:!1},s=Hh(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hh(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Om(r)),this._blurMaterial=zm(r,e,t),this._ggxMaterial=Bm(r,e,t)}return s}_compileMaterial(e){let t=new et(new on,e);this._renderer.compile(t,fr)}_sceneToCubeUV(e,t,i,s,r){let l=new Xt(90,1,t,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vh),f.toneMapping=In,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new et(new Qt,new _i({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,p=!0):(m.color.copy(Vh),p=!0);for(let E=0;E<6;E++){let M=E%3;M===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[E],r.y,r.z)):M===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[E]));let b=this._cubeSize;Es(s,M*b,E>2?b:0,b,b),f.setRenderTarget(s),p&&f.render(v,l),f.render(e,l)}f.toneMapping=d,f.autoClear=h,e.background=w}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===wi||e.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Es(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,fr)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),h=c*1.25,d=f*h,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Cs?i-g+Cs:0),p=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Es(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,fr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,Es(e,m,p,3*v,2*v),s.setRenderTarget(e),s.render(o,fr)}_blur(e,t,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let u=this._sizeLods[s],f=3*u*(s>this._lodMax-Cs?s-this._lodMax+Cs:0),h=4*(this._cubeSize-u);Es(t,f,h,3*u,2*u),a.setRenderTarget(t),a.render(l,fr)}};function Om(n){let e=[],t=[],i=n,s=n-Cs+1+Dm;for(let r=0;r<s;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],f=6,h=6,d=3,g=new Float32Array(d*h*f),v=new Float32Array(d*h*f);for(let p=0;p<f;p++){let w=p%3*2/3-1,E=p>2?0:-1,M=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];g.set(M,d*h*p);for(let b=0;b<h;b++){let S=u[b*2]*2-1,C=u[b*2+1]*2-1;p===0?Xi.set(1,C,S):p===1?Xi.set(-S,1,-C):p===2?Xi.set(-S,C,1):p===3?Xi.set(-1,C,-S):p===4?Xi.set(-S,-1,C):Xi.set(S,C,-1),Xi.toArray(v,(p*h+b)*d)}}let m=new on;m.setAttribute("position",new rn(g,d)),m.setAttribute("outputDirection",new rn(v,d)),t.push(new et(m,null)),i>Cs&&i--}return{lodMeshes:t,sizeLods:e}}function Hh(n,e,t){let i=new an(n,e,t);return i.texture.mapping=sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Es(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Bm(n,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Um,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function zm(n,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:Nm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Gh(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Wh(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xo=class extends an{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new en({name:"CubemapFromEquirect",uniforms:Wi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:Wn});r.uniforms.tEquirect.value=t;let a=new et(s,r),o=t.minFilter;return t.minFilter===Ai&&(t.minFilter=kt),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}};function km(n){let e=new WeakMap,t=new WeakMap,i=null;function s(h,d=!1){return h==null?null:d?a(h):r(h)}function r(h){if(h&&h.isTexture){let d=h.mapping;if(d===Aa||d===Ea)if(e.has(h)){let g=e.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let v=new xo(g.height);return v.fromEquirectangularTexture(n,h),e.set(h,v),h.addEventListener("dispose",c),o(v.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let d=h.mapping,g=d===Aa||d===Ea,v=d===wi||d===Gi;if(g||v){let m=t.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return i===null&&(i=new _o(n)),m=g?i.fromEquirectangular(h,m):i.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{let w=h.image;return g&&w&&w.height>0||v&&w&&l(w)?(i===null&&(i=new _o(n)),m=g?i.fromEquirectangular(h):i.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",u),m.texture):null}}}return h}function o(h,d){return d===Aa?h.mapping=wi:d===Ea&&(h.mapping=Gi),h}function l(h){let d=0,g=6;for(let v=0;v<g;v++)h[v]!==void 0&&d++;return d===g}function c(h){let d=h.target;d.removeEventListener("dispose",c);let g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(h){let d=h.target;d.removeEventListener("dispose",u);let g=t.get(d);g!==void 0&&(t.delete(d),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Vm(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s=n.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&zi("WebGLRenderer: "+i+" extension not supported."),s}}}function Hm(n,e,t,i){let s={},r=new WeakMap;function a(f){let h=f.target;h.index!==null&&e.remove(h.index);for(let g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete s[h.id];let d=r.get(h);d&&(e.remove(d),r.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){let h=f.attributes;for(let d in h)e.update(h[d],n.ARRAY_BUFFER)}function c(f){let h=[],d=f.index,g=f.attributes.position,v=0;if(g===void 0)return;if(d!==null){let w=d.array;v=d.version;for(let E=0,M=w.length;E<M;E+=3){let b=w[E+0],S=w[E+1],C=w[E+2];h.push(b,S,S,C,C,b)}}else{let w=g.array;v=g.version;for(let E=0,M=w.length/3-1;E<M;E+=3){let b=E+0,S=E+1,C=E+2;h.push(b,S,S,C,C,b)}}let m=new(g.count>=65535?Ys:qs)(h,1);m.version=v;let p=r.get(f);p&&e.remove(p),r.set(f,m)}function u(f){let h=r.get(f);if(h){let d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function Gm(n,e,t){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,h){n.drawElements(i,h,r,f*a),t.update(h,i,1)}function c(f,h,d){d!==0&&(n.drawElementsInstanced(i,h,r,f*a,d),t.update(h,i,d))}function u(f,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,r,f,0,d);let v=0;for(let m=0;m<d;m++)v+=h[m];t.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Wm(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:Ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Xm(n,e,t){let i=new WeakMap,s=new Mt;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0,h=i.get(o);if(h===void 0||h.count!==f){let T=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",T)};h!==void 0&&h.texture.dispose();let d=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],E=0;d===!0&&(E=1),g===!0&&(E=2),v===!0&&(E=3);let M=o.attributes.position.count*E,b=1;M>e.maxTextureSize&&(b=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*b*4*f),C=new Gs(S,M,b,f);C.type=Dn,C.needsUpdate=!0;let x=E*4;for(let R=0;R<f;R++){let N=m[R],F=p[R],k=w[R],I=M*b*4*R;for(let G=0;G<N.count;G++){let Y=G*x;d===!0&&(s.fromBufferAttribute(N,G),S[I+Y+0]=s.x,S[I+Y+1]=s.y,S[I+Y+2]=s.z,S[I+Y+3]=0),g===!0&&(s.fromBufferAttribute(F,G),S[I+Y+4]=s.x,S[I+Y+5]=s.y,S[I+Y+6]=s.z,S[I+Y+7]=0),v===!0&&(s.fromBufferAttribute(k,G),S[I+Y+8]=s.x,S[I+Y+9]=s.y,S[I+Y+10]=s.z,S[I+Y+11]=k.itemSize===4?s.w:1)}}h={count:f,texture:C,size:new qe(M,b)},i.set(o,h),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let g=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:r}}function qm(n,e,t,i,s){let r=new WeakMap;function a(c){let u=s.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ym={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[bl]:"CINEON_TONE_MAPPING",[ir]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[wl]:"NEUTRAL_TONE_MAPPING",[Sl]:"CUSTOM_TONE_MAPPING"};function Jm(n,e,t,i,s,r){let a=new an(e,t,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new on;c.setAttribute("position",new vt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new vt([0,2,0,0,2,0],2));let u=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new et(c,u),h=new Ms(-1,1,1,-1,0,1),d=null,g=null,v=!1,m,p=null,w=[],E=!1;this.setSize=function(M,b){a.setSize(M,b),o!==null&&o.setSize(M,b),l!==null&&l.setSize(M,b);for(let S=0;S<w.length;S++){let C=w[S];C.setSize&&C.setSize(M,b)}},this.setEffects=function(M){w=M,E=w.length>0&&w[0].isRenderPass===!0;let b=a.width,S=a.height;w.length>0&&o===null&&(o=new an(b,S,{type:Nn,depthBuffer:!1,stencilBuffer:!1}),l=new an(b,S,{type:Nn,depthBuffer:!1,stencilBuffer:!1}));for(let C=0;C<w.length;C++){let x=w[C];x.setSize&&x.setSize(b,S)}},this.begin=function(M,b){if(v||M.toneMapping===In&&w.length===0)return!1;if(p=b,b!==null){let S=b.width,C=b.height;(a.width!==S||a.height!==C)&&this.setSize(S,C)}return E===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=In,!0},this.hasRenderPass=function(){return E},this.end=function(M,b){M.toneMapping=m,v=!0;let S=a,C=o;for(let x=0;x<w.length;x++){let T=w[x];T.enabled!==!1&&(T.render(M,C,S,b),T.needsSwap!==!1&&(S=C,C=C===o?l:o))}if(d!==M.outputColorSpace||g!==M.toneMapping){d=M.outputColorSpace,g=M.toneMapping,u.defines={},Ze.getTransfer(d)===at&&(u.defines.SRGB_TRANSFER="");let x=Ym[g];x&&(u.defines[x]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=S.texture,M.setRenderTarget(p),M.render(f,h),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var hu=new jt,Kl=new xi(1,1),uu=new Gs,du=new ra,fu=new Js,Xh=[],qh=[],Yh=new Float32Array(16),Jh=new Float32Array(9),Zh=new Float32Array(4);function Ps(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Xh[s];if(r===void 0&&(r=new Float32Array(s),Xh[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function It(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Mo(n,e){let t=qh[e];t===void 0&&(t=new Int32Array(e),qh[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function Zm(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function $m(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function Km(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function jm(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function Qm(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Zh.set(i),n.uniformMatrix2fv(this.addr,!1,Zh),Lt(t,i)}}function e0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Jh.set(i),n.uniformMatrix3fv(this.addr,!1,Jh),Lt(t,i)}}function t0(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(It(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(It(t,i))return;Yh.set(i),n.uniformMatrix4fv(this.addr,!1,Yh),Lt(t,i)}}function n0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function i0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function s0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function r0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function a0(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function o0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function l0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function c0(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function h0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Kl.compareFunction=t.isReversedDepthBuffer()?po:fo,r=Kl):r=hu,t.setTexture2D(e||r,s)}function u0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||du,s)}function d0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||fu,s)}function f0(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||uu,s)}function p0(n){switch(n){case 5126:return Zm;case 35664:return $m;case 35665:return Km;case 35666:return jm;case 35674:return Qm;case 35675:return e0;case 35676:return t0;case 5124:case 35670:return n0;case 35667:case 35671:return i0;case 35668:case 35672:return s0;case 35669:case 35673:return r0;case 5125:return a0;case 36294:return o0;case 36295:return l0;case 36296:return c0;case 35678:case 36198:case 36298:case 36306:case 35682:return h0;case 35679:case 36299:case 36307:return u0;case 35680:case 36300:case 36308:case 36293:return d0;case 36289:case 36303:case 36311:case 36292:return f0}}function m0(n,e){n.uniform1fv(this.addr,e)}function g0(n,e){let t=Ps(e,this.size,2);n.uniform2fv(this.addr,t)}function _0(n,e){let t=Ps(e,this.size,3);n.uniform3fv(this.addr,t)}function x0(n,e){let t=Ps(e,this.size,4);n.uniform4fv(this.addr,t)}function y0(n,e){let t=Ps(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function v0(n,e){let t=Ps(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function M0(n,e){let t=Ps(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function b0(n,e){n.uniform1iv(this.addr,e)}function S0(n,e){n.uniform2iv(this.addr,e)}function T0(n,e){n.uniform3iv(this.addr,e)}function w0(n,e){n.uniform4iv(this.addr,e)}function A0(n,e){n.uniform1uiv(this.addr,e)}function E0(n,e){n.uniform2uiv(this.addr,e)}function C0(n,e){n.uniform3uiv(this.addr,e)}function R0(n,e){n.uniform4uiv(this.addr,e)}function P0(n,e,t){let i=this.cache,s=e.length,r=Mo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=Kl:a=hu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function I0(n,e,t){let i=this.cache,s=e.length,r=Mo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||du,r[a])}function L0(n,e,t){let i=this.cache,s=e.length,r=Mo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||fu,r[a])}function D0(n,e,t){let i=this.cache,s=e.length,r=Mo(t,s);It(i,r)||(n.uniform1iv(this.addr,r),Lt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||uu,r[a])}function N0(n){switch(n){case 5126:return m0;case 35664:return g0;case 35665:return _0;case 35666:return x0;case 35674:return y0;case 35675:return v0;case 35676:return M0;case 5124:case 35670:return b0;case 35667:case 35671:return S0;case 35668:case 35672:return T0;case 35669:case 35673:return w0;case 5125:return A0;case 36294:return E0;case 36295:return C0;case 36296:return R0;case 35678:case 36198:case 36298:case 36306:case 35682:return P0;case 35679:case 36299:case 36307:return I0;case 35680:case 36300:case 36308:case 36293:return L0;case 36289:case 36303:case 36311:case 36292:return D0}}var jl=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=p0(t.type)}},Ql=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=N0(t.type)}},ec=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Zl=/(\w+)(\])?(\[|\.)?/g;function $h(n,e){n.seq.push(e),n.map[e.id]=e}function U0(n,e,t){let i=n.name,s=i.length;for(Zl.lastIndex=0;;){let r=Zl.exec(i),a=Zl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){$h(t,c===void 0?new jl(o,n,e):new Ql(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ec(o),$h(t,f)),t=f}}}var Rs=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);U0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Kh(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var F0=37297,O0=0;function B0(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var jh=new Oe;function z0(n){Ze._getMatrix(jh,Ze.workingColorSpace,n);let e=`mat3( ${jh.elements.map(t=>t.toFixed(4))} )`;switch(Ze.getTransfer(n)){case Vs:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qh(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=(n.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+B0(n.getShaderSource(e),o)}else return r}function k0(n,e){let t=z0(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var V0={[vl]:"Linear",[Ml]:"Reinhard",[bl]:"Cineon",[ir]:"ACESFilmic",[Tl]:"AgX",[wl]:"Neutral",[Sl]:"Custom"};function H0(n,e){let t=V0[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new U;function G0(){Ze.getLuminanceCoefficients(go);let n=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function W0(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function X0(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function q0(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function mr(n){return n!==""}function eu(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tu(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function tc(n){return n.replace(Y0,Z0)}var J0=new Map;function Z0(n,e){let t=Ge[e];if(t===void 0){let i=J0.get(e);if(i!==void 0)t=Ge[i],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return tc(t)}var $0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nu(n){return n.replace($0,K0)}function K0(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function iu(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}var j0={[Vi]:"SHADOWMAP_TYPE_PCF",[Ss]:"SHADOWMAP_TYPE_VSM"};function Q0(n){return j0[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var eg={[wi]:"ENVMAP_TYPE_CUBE",[Gi]:"ENVMAP_TYPE_CUBE",[sr]:"ENVMAP_TYPE_CUBE_UV"};function tg(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":eg[n.envMapMode]||"ENVMAP_TYPE_CUBE"}var ng={[Gi]:"ENVMAP_MODE_REFRACTION"};function ig(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":ng[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}var sg={[yl]:"ENVMAP_BLENDING_MULTIPLY",[vh]:"ENVMAP_BLENDING_MIX",[Mh]:"ENVMAP_BLENDING_ADD"};function rg(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":sg[n.combine]||"ENVMAP_BLENDING_NONE"}function ag(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function og(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Q0(t),c=tg(t),u=ig(t),f=rg(t),h=ag(t),d=W0(t),g=X0(r),v=s.createProgram(),m,p,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[iu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ge.tonemapping_pars_fragment:"",t.toneMapping!==In?H0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,k0("linearToOutputTexel",t.outputColorSpace),G0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(mr).join(`
`)),a=tc(a),a=eu(a,t),a=tu(a,t),o=tc(o),o=eu(o,t),o=tu(o,t),a=nu(a),o=nu(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let E=w+m+a,M=w+p+o,b=Kh(s,s.VERTEX_SHADER,E),S=Kh(s,s.FRAGMENT_SHADER,M);s.attachShader(v,b),s.attachShader(v,S),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function C(N){if(n.debug.checkShaderErrors){let F=s.getProgramInfoLog(v)||"",k=s.getShaderInfoLog(b)||"",I=s.getShaderInfoLog(S)||"",G=F.trim(),Y=k.trim(),$=I.trim(),ie=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(ie=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,b,S);else{let X=Qh(s,b,"vertex"),J=Qh(s,S,"fragment");Ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+G+`
`+X+`
`+J)}else G!==""?Ne("WebGLProgram: Program Info Log:",G):(Y===""||$==="")&&(O=!1);O&&(N.diagnostics={runnable:ie,programLog:G,vertexShader:{log:Y,prefix:m},fragmentShader:{log:$,prefix:p}})}s.deleteShader(b),s.deleteShader(S),x=new Rs(s,v),T=q0(s,v)}let x;this.getUniforms=function(){return x===void 0&&C(this),x};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(v,F0)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=O0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=b,this.fragmentShader=S,this}var lg=0,nc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ic(e),t.set(e,i)),i}},ic=class{constructor(e){this.id=lg++,this.code=e,this.usedTimes=0}};function cg(n){return n===Ci||n===hr||n===ur}function hg(n,e,t,i,s,r){let a=new Ws,o=new nc,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,h=i.precision,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,R,N,F,k){let I=N.fog,G=F.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,ie=e.get(x.envMap||Y,$),O=ie&&ie.mapping===sr?ie.image.height:null,X=d[x.type];x.precision!==null&&(h=i.getMaxPrecision(x.precision),h!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));let J=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=J!==void 0?J.length:0,pe=0;G.morphAttributes.position!==void 0&&(pe=1),G.morphAttributes.normal!==void 0&&(pe=2),G.morphAttributes.color!==void 0&&(pe=3);let ke,Ve,je,K;if(X){let ut=qn[X];ke=ut.vertexShader,Ve=ut.fragmentShader}else{ke=x.vertexShader,Ve=x.fragmentShader;let ut=o.getVertexShaderStage(x),st=o.getFragmentShaderStage(x);o.update(x,ut,st),je=ut.id,K=st.id}let te=n.getRenderTarget(),ye=n.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,xe=F.isBatchedMesh===!0,Fe=!!x.map,ft=!!x.matcap,We=!!ie,nt=!!x.aoMap,ht=!!x.lightMap,Je=!!x.bumpMap&&x.wireframe===!1,xt=!!x.normalMap,Dt=!!x.displacementMap,nn=!!x.emissiveMap,St=!!x.metalnessMap,Ct=!!x.roughnessMap,D=x.anisotropy>0,Vt=x.clearcoat>0,ot=x.dispersion>0,A=x.retroreflectivity>0,_=x.iridescence>0,z=x.sheen>0,W=x.transmission>0,Z=D&&!!x.anisotropyMap,re=Vt&&!!x.clearcoatMap,oe=Vt&&!!x.clearcoatNormalMap,j=Vt&&!!x.clearcoatRoughnessMap,ee=_&&!!x.iridescenceMap,le=_&&!!x.iridescenceThicknessMap,Ee=z&&!!x.sheenColorMap,de=z&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Ce=!!x.specularColorMap,Pe=!!x.specularIntensityMap,ze=W&&!!x.transmissionMap,L=W&&!!x.thicknessMap,he=!!x.gradientMap,Q=!!x.alphaMap,ue=x.alphaTest>0,_e=!!x.alphaHash,ne=!!x.extensions,Re=In;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Re=n.toneMapping);let Te={shaderID:X,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:Ve,defines:x.defines,customVertexShaderID:je,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:te===null?n.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Ze.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Fe,matcap:ft,envMap:We,envMapMode:We&&ie.mapping,envMapCubeUVHeight:O,aoMap:nt,lightMap:ht,bumpMap:Je,normalMap:xt,displacementMap:Dt,emissiveMap:nn,normalMapObjectSpace:xt&&x.normalMapType===Th,normalMapTangentSpace:xt&&x.normalMapType===uo,packedNormalMap:xt&&x.normalMapType===uo&&cg(x.normalMap.format),metalnessMap:St,roughnessMap:Ct,anisotropy:D,anisotropyMap:Z,clearcoat:Vt,clearcoatMap:re,clearcoatNormalMap:oe,clearcoatRoughnessMap:j,dispersion:ot,retroreflection:A,iridescence:_,iridescenceMap:ee,iridescenceThicknessMap:le,sheen:z,sheenColorMap:Ee,sheenRoughnessMap:de,specularMap:ce,specularColorMap:Ce,specularIntensityMap:Pe,transmission:W,transmissionMap:ze,thicknessMap:L,gradientMap:he,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:Q,alphaTest:ue,alphaHash:_e,combine:x.combine,mapUv:Fe&&g(x.map.channel),aoMapUv:nt&&g(x.aoMap.channel),lightMapUv:ht&&g(x.lightMap.channel),bumpMapUv:Je&&g(x.bumpMap.channel),normalMapUv:xt&&g(x.normalMap.channel),displacementMapUv:Dt&&g(x.displacementMap.channel),emissiveMapUv:nn&&g(x.emissiveMap.channel),metalnessMapUv:St&&g(x.metalnessMap.channel),roughnessMapUv:Ct&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:re&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:le&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:de&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Ce&&g(x.specularColorMap.channel),specularIntensityMapUv:Pe&&g(x.specularIntensityMap.channel),transmissionMapUv:ze&&g(x.transmissionMap.channel),thicknessMapUv:L&&g(x.thicknessMap.channel),alphaMapUv:Q&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(xt||D),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Fe||Q),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&xt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:pe,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Re,decodeVideoTexture:Fe&&x.map.isVideoTexture===!0&&Ze.getTransfer(x.map.colorSpace)===at,decodeVideoTextureEmissive:nn&&x.emissiveMap.isVideoTexture===!0&&Ze.getTransfer(x.emissiveMap.colorSpace)===at,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pn,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let R in x.defines)T.push(R),T.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(p(T,x),w(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function w(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){let T=d[x.type],R;if(T){let N=qn[T];R=Bh.clone(N.uniforms)}else R=x.uniforms;return R}function M(x,T){let R=u.get(T);return R!==void 0?++R.usedTimes:(R=new og(n,T,x,s),c.push(R),u.set(T,R)),R}function b(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function C(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:E,acquireProgram:M,releaseProgram:b,releaseShaderCache:S,programs:c,dispose:C}}function ug(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function su(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ru(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(h){let d=0;return h.isInstancedMesh&&(d+=2),h.isSkinnedMesh&&(d+=1),d}function o(h,d,g,v,m,p){let w=n[e];return w===void 0?(w={id:h.id,object:h,geometry:d,material:g,materialVariant:a(h),groupOrder:v,renderOrder:h.renderOrder,z:m,group:p},n[e]=w):(w.id=h.id,w.object=h,w.geometry=d,w.material=g,w.materialVariant=a(h),w.groupOrder=v,w.renderOrder=h.renderOrder,w.z=m,w.group=p),e++,w}function l(h,d,g,v,m,p,w){w.reversedDepth===!0&&(m=-m);let E=o(h,d,g,v,m,p);g.transmission>0?i.push(E):g.transparent===!0?s.push(E):t.push(E)}function c(h,d,g,v,m,p){let w=o(h,d,g,v,m,p);g.transmission>0?i.unshift(w):g.transparent===!0?s.unshift(w):t.unshift(w)}function u(h,d){t.length>1&&t.sort(h||dg),i.length>1&&i.sort(d||su),s.length>1&&s.sort(d||su)}function f(){for(let h=e,d=n.length;h<d;h++){let g=n[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:f,sort:u}}function fg(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new ru,n.set(i,[a])):s>=r.length?(a=new ru,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function pg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new U,color:new Be};break;case"SpotLight":t={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function mg(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var gg=0;function _g(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function xg(n){let e=new pg,t=mg(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);let s=new U,r=new gt,a=new gt;function o(c){let u=0,f=0,h=0;for(let F=0;F<9;F++)i.probe[F].set(0,0,0);let d=0,g=0,v=0,m=0,p=0,w=0,E=0,M=0,b=0,S=0,C=0,x=0,T=0,R=0;c.sort(_g);for(let F=0,k=c.length;F<k;F++){let I=c[F],G=I.color,Y=I.intensity,$=I.distance,ie=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Ci?ie=I.shadow.map.texture:ie=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*Y,f+=G.g*Y,h+=G.b*Y;else if(I.isLightProbe){for(let O=0;O<9;O++)i.probe[O].addScaledVector(I.sh.coefficients[O],Y);R++}else if(I.isSunLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,J=t.get(I);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize.copy(X.mapSize).multiply(X.getFrameExtents()),i.sunShadow[g]=J,i.sunShadowMap[g]=ie;let ae=X.getViewportCount();for(let pe=0;pe<ae;pe++)i.sunShadowMatrix[v+pe]=X.getMatrix(pe),i.sunShadowCascade[v+pe]=X._cascadeData[pe];v+=ae,g++}i.sun[d]=O,d++}else if(I.isDirectionalLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let X=I.shadow,J=t.get(I);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=ie,i.directionalShadowMatrix[m]=I.shadow.matrix,b++}i.directional[m]=O,m++}else if(I.isSpotLight){let O=e.get(I);O.position.setFromMatrixPosition(I.matrixWorld),O.color.copy(G).multiplyScalar(Y),O.distance=$,O.coneCos=Math.cos(I.angle),O.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),O.decay=I.decay,i.spot[w]=O;let X=I.shadow;if(I.map&&(i.spotLightMap[x]=I.map,x++,X.updateMatrices(I),I.castShadow&&T++),i.spotLightMatrix[w]=X.matrix,I.castShadow){let J=t.get(I);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,i.spotShadow[w]=J,i.spotShadowMap[w]=ie,C++}w++}else if(I.isRectAreaLight){let O=e.get(I);O.color.copy(G).multiplyScalar(Y),O.halfWidth.set(I.width*.5,0,0),O.halfHeight.set(0,I.height*.5,0),i.rectArea[E]=O,E++}else if(I.isPointLight){let O=e.get(I);if(O.color.copy(I.color).multiplyScalar(I.intensity),O.distance=I.distance,O.decay=I.decay,I.castShadow){let X=I.shadow,J=t.get(I);J.shadowIntensity=X.intensity,J.shadowBias=X.bias,J.shadowNormalBias=X.normalBias,J.shadowRadius=X.radius,J.shadowMapSize=X.mapSize,J.shadowCameraNear=X.camera.near,J.shadowCameraFar=X.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=ie,i.pointShadowMatrix[p]=I.shadow.matrix,S++}i.point[p]=O,p++}else if(I.isHemisphereLight){let O=e.get(I);O.skyColor.copy(I.color).multiplyScalar(Y),O.groundColor.copy(I.groundColor).multiplyScalar(Y),i.hemi[M]=O,M++}}E>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;let N=i.hash;(N.sunLength!==d||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==w||N.rectAreaLength!==E||N.hemiLength!==M||N.numSunShadows!==g||N.numDirectionalShadows!==b||N.numPointShadows!==S||N.numSpotShadows!==C||N.numSpotMaps!==x||N.numLightProbes!==R)&&(i.sun.length=d,i.directional.length=m,i.spot.length=w,i.rectArea.length=E,i.point.length=p,i.hemi.length=M,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.directionalShadowMatrix.length=b,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=C,i.spotShadowMap.length=C,i.spotLightMatrix.length=C+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,N.sunLength=d,N.directionalLength=m,N.pointLength=p,N.spotLength=w,N.rectAreaLength=E,N.hemiLength=M,N.numSunShadows=g,N.numDirectionalShadows=b,N.numPointShadows=S,N.numSpotShadows=C,N.numSpotMaps=x,N.numLightProbes=R,i.version=gg++)}function l(c,u){let f=0,h=0,d=0,g=0,v=0,m=0,p=u.matrixWorldInverse;for(let w=0,E=c.length;w<E;w++){let M=c[w];if(M.isSunLight){let b=i.sun[f];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),f++}else if(M.isDirectionalLight){let b=i.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),h++}else if(M.isSpotLight){let b=i.spot[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let b=i.rectArea[v];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),v++}else if(M.isPointLight){let b=i.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let b=i.hemi[m];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function au(n){let e=new xg(n),t=[],i=[],s=[];function r(h){f.camera=h,t.length=0,i.length=0,s.length=0}function a(h){t.push(h)}function o(h){i.push(h)}function l(h){s.push(h)}function c(){e.setup(t)}function u(h){e.setupView(t,h)}let f={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function yg(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new au(n),e.set(s,[o])):r>=a.length?(o=new au(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Mg=`uniform sampler2D shadow_pass;
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
}`,bg=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],Sg=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],ou=new gt,pr=new U,$l=new U;function Tg(n,e,t){let i=new ys,s=new qe,r=new qe,a=new Mt,o=new ha,l=new ua,c={},u=t.maxTextureSize,f={[Ti]:tn,[tn]:Ti,[Pn]:Pn},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:vg,fragmentShader:Mg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;let g=new on;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new et(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vi;let p=this.type;this.render=function(S,C,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===th&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Vi);let T=n.getRenderTarget(),R=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Wn),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&C.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=S.length;I<G;I++){let Y=S[I],$=Y.shadow;if($===void 0){Ne("WebGLShadowMap:",Y,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let ie=$.getFrameExtents();s.multiply(ie),r.copy($.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ie.x),s.x=r.x*ie.x,$.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ie.y),s.y=r.y*ie.y,$.mapSize.y=r.y));let O=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=O,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Ss){if(Y.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new an(s.x,s.y,{format:Ci,type:Nn,minFilter:kt,magFilter:kt,generateMipmaps:!1}),$.map.texture.name=Y.name+".shadowMap",$.map.depthTexture=new xi(s.x,s.y,Dn),$.map.depthTexture.name=Y.name+".shadowMapDepth",$.map.depthTexture.format=Hn,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ut,$.map.depthTexture.magFilter=Ut}else Y.isPointLight?($.map=new xo(s.x),$.map.depthTexture=new la(s.x,Ln)):($.map=new an(s.x,s.y),$.map.depthTexture=new xi(s.x,s.y,Ln)),$.map.depthTexture.name=Y.name+".shadowMap",$.map.depthTexture.format=Hn,this.type===Vi?($.map.depthTexture.compareFunction=O?po:fo,$.map.depthTexture.minFilter=kt,$.map.depthTexture.magFilter=kt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=Ut,$.map.depthTexture.magFilter=Ut);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==s.x||$.map.height!==s.y)&&$.map.setSize(s.x,s.y);let X=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Y.isPointLight!==!0&&$.updateMatrices(Y,x);for(let J=0;J<X;J++){let ae=$.getCamera(J);if(Y.isPointLight){let pe=$.camera,ke=$.matrix,Ve=Y.distance||pe.far;Ve!==pe.far&&(pe.far=Ve,pe.updateProjectionMatrix()),pr.setFromMatrixPosition(Y.matrixWorld),pe.position.copy(pr),$l.copy(pe.position),$l.add(bg[J]),pe.up.copy(Sg[J]),pe.lookAt($l),pe.updateMatrixWorld(),ke.makeTranslation(-pr.x,-pr.y,-pr.z),ou.multiplyMatrices(pe.projectionMatrix,pe.matrixWorldInverse),$._frustum.setFromProjectionMatrix(ou,pe.coordinateSystem,pe.reversedDepth)}if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,J),n.clear();else{J===0&&(n.setRenderTarget($.map),n.clear());let pe=$.getViewport(J);a.set(r.x*pe.x,r.y*pe.y,r.x*pe.z,r.y*pe.w),F.viewport(a)}i=$.getFrustum(J),M(C,x,ae,Y,this.type)}$.isPointLightShadow!==!0&&this.type===Ss&&w($,x),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,R,N)};function w(S,C){let x=e.update(v);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null?S.mapPass=new an(s.x,s.y,{format:Ci,type:Nn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),h.uniforms.shadow_pass.value=S.map.depthTexture,h.uniforms.resolution.value.set(S.map.width,S.map.height),h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(C,null,x,h,v,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value.set(S.map.width,S.map.height),d.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(C,null,x,d,v,null)}function E(S,C,x,T){let R=null,N=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(N!==void 0)R=N;else if(R=x.isPointLight===!0?l:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){let F=R.uuid,k=C.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let G=I[k];G===void 0&&(G=R.clone(),I[k]=G,C.addEventListener("dispose",b)),R=G}if(R.visible=C.visible,R.wireframe=C.wireframe,T===Ss?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:f[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,x.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=n.properties.get(R);F.light=x}return R}function M(S,C,x,T,R){if(S.visible===!1)return;if(S.layers.test(C.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&R===Ss)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let k=e.update(S),I=S.material;if(Array.isArray(I)){let G=k.groups;for(let Y=0,$=G.length;Y<$;Y++){let ie=G[Y],O=I[ie.materialIndex];if(O&&O.visible){let X=E(S,O,T,R);S.onBeforeShadow(n,S,C,x,k,X,ie),n.renderBufferDirect(x,null,k,X,S,ie),S.onAfterShadow(n,S,C,x,k,X,ie)}}}else if(I.visible){let G=E(S,I,T,R);S.onBeforeShadow(n,S,C,x,k,G,null),n.renderBufferDirect(x,null,k,G,S,null),S.onAfterShadow(n,S,C,x,k,G,null)}}let F=S.children;for(let k=0,I=F.length;k<I;k++)M(F[k],C,x,T,R)}function b(S){S.target.removeEventListener("dispose",b);for(let x in c){let T=c[x],R=S.target.uuid;R in T&&(T[R].dispose(),delete T[R])}}}function wg(n,e){function t(){let L=!1,he=new Mt,Q=null,ue=new Mt(0,0,0,0);return{setMask:function(_e){Q!==_e&&!L&&(n.colorMask(_e,_e,_e,_e),Q=_e)},setLocked:function(_e){L=_e},setClear:function(_e,ne,Re,Te,ut){ut===!0&&(_e*=Te,ne*=Te,Re*=Te),he.set(_e,ne,Re,Te),ue.equals(he)===!1&&(n.clearColor(_e,ne,Re,Te),ue.copy(he))},reset:function(){L=!1,Q=null,ue.set(-1,0,0,0)}}}function i(){let L=!1,he=!1,Q=null,ue=null,_e=null;return{setReversed:function(ne){if(he!==ne){let Re=e.get("EXT_clip_control");ne?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),he=ne;let Te=_e;_e=null,this.setClear(Te)}},getReversed:function(){return he},setTest:function(ne){ne?te(n.DEPTH_TEST):ye(n.DEPTH_TEST)},setMask:function(ne){Q!==ne&&!L&&(n.depthMask(ne),Q=ne)},setFunc:function(ne){if(he&&(ne=Fh[ne]),ue!==ne){switch(ne){case Yr:n.depthFunc(n.NEVER);break;case Jr:n.depthFunc(n.ALWAYS);break;case Zr:n.depthFunc(n.LESS);break;case ds:n.depthFunc(n.LEQUAL);break;case $r:n.depthFunc(n.EQUAL);break;case Kr:n.depthFunc(n.GEQUAL);break;case jr:n.depthFunc(n.GREATER);break;case Qr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=ne}},setLocked:function(ne){L=ne},setClear:function(ne){_e!==ne&&(_e=ne,he&&(ne=1-ne),n.clearDepth(ne))},reset:function(){L=!1,Q=null,ue=null,_e=null,he=!1}}}function s(){let L=!1,he=null,Q=null,ue=null,_e=null,ne=null,Re=null,Te=null,ut=null;return{setTest:function(st){L||(st?te(n.STENCIL_TEST):ye(n.STENCIL_TEST))},setMask:function(st){he!==st&&!L&&(n.stencilMask(st),he=st)},setFunc:function(st,Sn,Bn){(Q!==st||ue!==Sn||_e!==Bn)&&(n.stencilFunc(st,Sn,Bn),Q=st,ue=Sn,_e=Bn)},setOp:function(st,Sn,Bn){(ne!==st||Re!==Sn||Te!==Bn)&&(n.stencilOp(st,Sn,Bn),ne=st,Re=Sn,Te=Bn)},setLocked:function(st){L=st},setClear:function(st){ut!==st&&(n.clearStencil(st),ut=st)},reset:function(){L=!1,he=null,Q=null,ue=null,_e=null,ne=null,Re=null,Te=null,ut=null}}}let r=new t,a=new i,o=new s,l=new WeakMap,c=new WeakMap,u={},f={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,w=null,E=null,M=null,b=null,S=null,C=null,x=new Be(0,0,0),T=0,R=!1,N=null,F=null,k=null,I=null,G=null,Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,ie=0,O=n.getParameter(n.VERSION);O.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(O)[1]),$=ie>=1):O.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),$=ie>=2);let X=null,J={},ae=n.getParameter(n.SCISSOR_BOX),pe=n.getParameter(n.VIEWPORT),ke=new Mt().fromArray(ae),Ve=new Mt().fromArray(pe);function je(L,he,Q,ue){let _e=new Uint8Array(4),ne=n.createTexture();n.bindTexture(L,ne),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Re=0;Re<Q;Re++)L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY?n.texImage3D(he,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,_e):n.texImage2D(he+Re,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,_e);return ne}let K={};K[n.TEXTURE_2D]=je(n.TEXTURE_2D,n.TEXTURE_2D,1),K[n.TEXTURE_CUBE_MAP]=je(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[n.TEXTURE_2D_ARRAY]=je(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),K[n.TEXTURE_3D]=je(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(n.DEPTH_TEST),a.setFunc(ds),Je(!1),xt(pl),te(n.CULL_FACE),nt(Wn);function te(L){u[L]!==!0&&(n.enable(L),u[L]=!0)}function ye(L){u[L]!==!1&&(n.disable(L),u[L]=!1)}function De(L,he){return h[L]!==he?(n.bindFramebuffer(L,he),h[L]=he,L===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=he),L===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=he),!0):!1}function xe(L,he){let Q=g,ue=!1;if(L){Q=d.get(he),Q===void 0&&(Q=[],d.set(he,Q));let _e=L.textures;if(Q.length!==_e.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let ne=0,Re=_e.length;ne<Re;ne++)Q[ne]=n.COLOR_ATTACHMENT0+ne;Q.length=_e.length,ue=!0}}else Q[0]!==n.BACK&&(Q[0]=n.BACK,ue=!0);ue&&n.drawBuffers(Q)}function Fe(L){return v!==L?(n.useProgram(L),v=L,!0):!1}let ft={[Hi]:n.FUNC_ADD,[ih]:n.FUNC_SUBTRACT,[sh]:n.FUNC_REVERSE_SUBTRACT};ft[rh]=n.MIN,ft[ah]=n.MAX;let We={[oh]:n.ZERO,[lh]:n.ONE,[ch]:n.SRC_COLOR,[_l]:n.SRC_ALPHA,[mh]:n.SRC_ALPHA_SATURATE,[fh]:n.DST_COLOR,[uh]:n.DST_ALPHA,[hh]:n.ONE_MINUS_SRC_COLOR,[xl]:n.ONE_MINUS_SRC_ALPHA,[ph]:n.ONE_MINUS_DST_COLOR,[dh]:n.ONE_MINUS_DST_ALPHA,[gh]:n.CONSTANT_COLOR,[_h]:n.ONE_MINUS_CONSTANT_COLOR,[xh]:n.CONSTANT_ALPHA,[yh]:n.ONE_MINUS_CONSTANT_ALPHA};function nt(L,he,Q,ue,_e,ne,Re,Te,ut,st){if(L===Wn){m===!0&&(ye(n.BLEND),m=!1);return}if(m===!1&&(te(n.BLEND),m=!0),L!==nh){if(L!==p||st!==R){if((w!==Hi||b!==Hi)&&(n.blendEquation(n.FUNC_ADD),w=Hi,b=Hi),st)switch(L){case Ts:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFunc(n.ONE,n.ONE);break;case ml:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case gl:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Ue("WebGLState: Invalid blending: ",L);break}else switch(L){case Ts:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case nr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case ml:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",L);break}E=null,M=null,S=null,C=null,x.set(0,0,0),T=0,p=L,R=st}return}_e=_e||he,ne=ne||Q,Re=Re||ue,(he!==w||_e!==b)&&(n.blendEquationSeparate(ft[he],ft[_e]),w=he,b=_e),(Q!==E||ue!==M||ne!==S||Re!==C)&&(n.blendFuncSeparate(We[Q],We[ue],We[ne],We[Re]),E=Q,M=ue,S=ne,C=Re),(Te.equals(x)===!1||ut!==T)&&(n.blendColor(Te.r,Te.g,Te.b,ut),x.copy(Te),T=ut),p=L,R=!1}function ht(L,he){L.side===Pn?ye(n.CULL_FACE):te(n.CULL_FACE);let Q=L.side===tn;he&&(Q=!Q),Je(Q),L.blending===Ts&&L.transparent===!1?nt(Wn):nt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),r.setMask(L.colorWrite);let ue=L.stencilWrite;o.setTest(ue),ue&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),nn(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?te(n.SAMPLE_ALPHA_TO_COVERAGE):ye(n.SAMPLE_ALPHA_TO_COVERAGE)}function Je(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function xt(L){L!==Qc?(te(n.CULL_FACE),L!==F&&(L===pl?n.cullFace(n.BACK):L===eh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ye(n.CULL_FACE),F=L}function Dt(L){L!==k&&($&&n.lineWidth(L),k=L)}function nn(L,he,Q){L?(te(n.POLYGON_OFFSET_FILL),(I!==he||G!==Q)&&(I=he,G=Q,a.getReversed()&&(he=-he),n.polygonOffset(he,Q))):ye(n.POLYGON_OFFSET_FILL)}function St(L){L?te(n.SCISSOR_TEST):ye(n.SCISSOR_TEST)}function Ct(L){L===void 0&&(L=n.TEXTURE0+Y-1),X!==L&&(n.activeTexture(L),X=L)}function D(L,he,Q){Q===void 0&&(X===null?Q=n.TEXTURE0+Y-1:Q=X);let ue=J[Q];ue===void 0&&(ue={type:void 0,texture:void 0},J[Q]=ue),(ue.type!==L||ue.texture!==he)&&(X!==Q&&(n.activeTexture(Q),X=Q),n.bindTexture(L,he||K[L]),ue.type=L,ue.texture=he)}function Vt(){let L=J[X];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ot(){try{n.compressedTexImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function A(){try{n.compressedTexImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function _(){try{n.texSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function z(){try{n.texSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function W(){try{n.compressedTexSubImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function Z(){try{n.compressedTexSubImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function re(){try{n.texStorage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function oe(){try{n.texStorage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function j(){try{n.texImage2D(...arguments)}catch(L){Ue("WebGLState:",L)}}function ee(){try{n.texImage3D(...arguments)}catch(L){Ue("WebGLState:",L)}}function le(L){return f[L]!==void 0?f[L]:n.getParameter(L)}function Ee(L,he){f[L]!==he&&(n.pixelStorei(L,he),f[L]=he)}function de(L){ke.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ke.copy(L))}function ce(L){Ve.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),Ve.copy(L))}function Ce(L,he){let Q=c.get(he);Q===void 0&&(Q=new WeakMap,c.set(he,Q));let ue=Q.get(L);ue===void 0&&(ue=n.getUniformBlockIndex(he,L.name),Q.set(L,ue))}function Pe(L,he){let ue=c.get(he).get(L);l.get(he)!==ue&&(n.uniformBlockBinding(he,ue,L.__bindingPointIndex),l.set(he,ue))}function ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),u={},f={},X=null,J={},h={},d=new WeakMap,g=[],v=null,m=!1,p=null,w=null,E=null,M=null,b=null,S=null,C=null,x=new Be(0,0,0),T=0,R=!1,N=null,F=null,k=null,I=null,G=null,ke.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:De,drawBuffers:xe,useProgram:Fe,setBlending:nt,setMaterial:ht,setFlipSided:Je,setCullFace:xt,setLineWidth:Dt,setPolygonOffset:nn,setScissorTest:St,activeTexture:Ct,bindTexture:D,unbindTexture:Vt,compressedTexImage2D:ot,compressedTexImage3D:A,texImage2D:j,texImage3D:ee,pixelStorei:Ee,getParameter:le,updateUBOMapping:Ce,uniformBlockBinding:Pe,texStorage2D:re,texStorage3D:oe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:W,compressedTexSubImage3D:Z,scissor:de,viewport:ce,reset:ze}}function Ag(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qe,u=new WeakMap,f=new Set,h,d=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(A,_){return g?new OffscreenCanvas(A,_):Hs("canvas")}function m(A,_,z){let W=1,Z=ot(A);if((Z.width>z||Z.height>z)&&(W=z/Math.max(Z.width,Z.height)),W<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let re=Math.floor(W*Z.width),oe=Math.floor(W*Z.height);h===void 0&&(h=v(re,oe));let j=_?v(re,oe):h;return j.width=re,j.height=oe,j.getContext("2d").drawImage(A,0,0,re,oe),Ne("WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+re+"x"+oe+")."),j}else return"data"in A&&Ne("WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function p(A){return A.generateMipmaps}function w(A){n.generateMipmap(A)}function E(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function M(A,_,z,W,Z,re=!1){if(A!==null){if(n[A]!==void 0)return n[A];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let oe;W&&(oe=e.get("EXT_texture_norm16"),oe||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=_;if(_===n.RED&&(z===n.FLOAT&&(j=n.R32F),z===n.HALF_FLOAT&&(j=n.R16F),z===n.UNSIGNED_BYTE&&(j=n.R8),z===n.UNSIGNED_SHORT&&oe&&(j=oe.R16_EXT),z===n.SHORT&&oe&&(j=oe.R16_SNORM_EXT)),_===n.RED_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.R8UI),z===n.UNSIGNED_SHORT&&(j=n.R16UI),z===n.UNSIGNED_INT&&(j=n.R32UI),z===n.BYTE&&(j=n.R8I),z===n.SHORT&&(j=n.R16I),z===n.INT&&(j=n.R32I)),_===n.RG&&(z===n.FLOAT&&(j=n.RG32F),z===n.HALF_FLOAT&&(j=n.RG16F),z===n.UNSIGNED_BYTE&&(j=n.RG8),z===n.UNSIGNED_SHORT&&oe&&(j=oe.RG16_EXT),z===n.SHORT&&oe&&(j=oe.RG16_SNORM_EXT)),_===n.RG_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RG8UI),z===n.UNSIGNED_SHORT&&(j=n.RG16UI),z===n.UNSIGNED_INT&&(j=n.RG32UI),z===n.BYTE&&(j=n.RG8I),z===n.SHORT&&(j=n.RG16I),z===n.INT&&(j=n.RG32I)),_===n.RGB_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGB8UI),z===n.UNSIGNED_SHORT&&(j=n.RGB16UI),z===n.UNSIGNED_INT&&(j=n.RGB32UI),z===n.BYTE&&(j=n.RGB8I),z===n.SHORT&&(j=n.RGB16I),z===n.INT&&(j=n.RGB32I)),_===n.RGBA_INTEGER&&(z===n.UNSIGNED_BYTE&&(j=n.RGBA8UI),z===n.UNSIGNED_SHORT&&(j=n.RGBA16UI),z===n.UNSIGNED_INT&&(j=n.RGBA32UI),z===n.BYTE&&(j=n.RGBA8I),z===n.SHORT&&(j=n.RGBA16I),z===n.INT&&(j=n.RGBA32I)),_===n.RGB&&(z===n.UNSIGNED_SHORT&&oe&&(j=oe.RGB16_EXT),z===n.SHORT&&oe&&(j=oe.RGB16_SNORM_EXT),z===n.UNSIGNED_INT_5_9_9_9_REV&&(j=n.RGB9_E5),z===n.UNSIGNED_INT_10F_11F_11F_REV&&(j=n.R11F_G11F_B10F)),_===n.RGBA){let ee=re?Vs:Ze.getTransfer(Z);z===n.FLOAT&&(j=n.RGBA32F),z===n.HALF_FLOAT&&(j=n.RGBA16F),z===n.UNSIGNED_BYTE&&(j=ee===at?n.SRGB8_ALPHA8:n.RGBA8),z===n.UNSIGNED_SHORT&&oe&&(j=oe.RGBA16_EXT),z===n.SHORT&&oe&&(j=oe.RGBA16_SNORM_EXT),z===n.UNSIGNED_SHORT_4_4_4_4&&(j=n.RGBA4),z===n.UNSIGNED_SHORT_5_5_5_1&&(j=n.RGB5_A1)}return(j===n.R16F||j===n.R32F||j===n.RG16F||j===n.RG32F||j===n.RGBA16F||j===n.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function b(A,_){let z;return A?_===null||_===Ln||_===As?z=n.DEPTH24_STENCIL8:_===Dn?z=n.DEPTH32F_STENCIL8:_===ws&&(z=n.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ln||_===As?z=n.DEPTH_COMPONENT24:_===Dn?z=n.DEPTH_COMPONENT32F:_===ws&&(z=n.DEPTH_COMPONENT16),z}function S(A,_){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ut&&A.minFilter!==kt?Math.log2(Math.max(_.width,_.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?_.mipmaps.length:1}function C(A){let _=A.target;_.removeEventListener("dispose",C),T(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&f.delete(_)}function x(A){let _=A.target;_.removeEventListener("dispose",x),N(_)}function T(A){let _=i.get(A);if(_.__webglInit===void 0)return;let z=A.source,W=d.get(z);if(W){let Z=W[_.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&R(A),Object.keys(W).length===0&&d.delete(z)}i.remove(A)}function R(A){let _=i.get(A);n.deleteTexture(_.__webglTexture);let z=A.source,W=d.get(z);delete W[_.__cacheKey],a.memory.textures--}function N(A){let _=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let Z=0;Z<_.__webglFramebuffer[W].length;Z++)n.deleteFramebuffer(_.__webglFramebuffer[W][Z]);else n.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)n.deleteFramebuffer(_.__webglFramebuffer[W]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=A.textures;for(let W=0,Z=z.length;W<Z;W++){let re=i.get(z[W]);re.__webglTexture&&(n.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(z[W])}i.remove(A)}let F=0;function k(){F=0}function I(){return F}function G(A){F=A}function Y(){let A=F;return A>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(A+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,A}function $(A){let _=[];return _.push(A.wrapS),_.push(A.wrapT),_.push(A.wrapR||0),_.push(A.magFilter),_.push(A.minFilter),_.push(A.anisotropy),_.push(A.internalFormat),_.push(A.format),_.push(A.type),_.push(A.generateMipmaps),_.push(A.premultiplyAlpha),_.push(A.flipY),_.push(A.unpackAlignment),_.push(A.colorSpace),_.join()}function ie(A,_){let z=i.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let W=A.image;if(W===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(z,A,_);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,z.__webglTexture,n.TEXTURE0+_)}function O(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ye(z,A,_);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,z.__webglTexture,n.TEXTURE0+_)}function X(A,_){let z=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){ye(z,A,_);return}t.bindTexture(n.TEXTURE_3D,z.__webglTexture,n.TEXTURE0+_)}function J(A,_){let z=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){De(z,A,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+_)}let ae={[fs]:n.REPEAT,[Vn]:n.CLAMP_TO_EDGE,[ea]:n.MIRRORED_REPEAT},pe={[Ut]:n.NEAREST,[bh]:n.NEAREST_MIPMAP_NEAREST,[rr]:n.NEAREST_MIPMAP_LINEAR,[kt]:n.LINEAR,[Ca]:n.LINEAR_MIPMAP_NEAREST,[Ai]:n.LINEAR_MIPMAP_LINEAR},ke={[Ah]:n.NEVER,[Ih]:n.ALWAYS,[Eh]:n.LESS,[fo]:n.LEQUAL,[Ch]:n.EQUAL,[po]:n.GEQUAL,[Rh]:n.GREATER,[Ph]:n.NOTEQUAL};function Ve(A,_){if(_.type===Dn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===kt||_.magFilter===Ca||_.magFilter===rr||_.magFilter===Ai||_.minFilter===kt||_.minFilter===Ca||_.minFilter===rr||_.minFilter===Ai)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,ae[_.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,ae[_.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,ae[_.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,pe[_.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,ke[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ut||_.minFilter!==rr&&_.minFilter!==Ai||_.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");n.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function je(A,_){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,_.addEventListener("dispose",C));let W=_.source,Z=d.get(W);Z===void 0&&(Z={},d.set(W,Z));let re=$(_);if(re!==A.__cacheKey){Z[re]===void 0&&(Z[re]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[re].usedTimes++;let oe=Z[A.__cacheKey];oe!==void 0&&(Z[A.__cacheKey].usedTimes--,oe.usedTimes===0&&R(_)),A.__cacheKey=re,A.__webglTexture=Z[re].texture}return z}function K(A,_,z){return Math.floor(Math.floor(A/z)/_)}function te(A,_,z,W){let re=A.updateRanges;if(re.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,z,W,_.data);else{re.sort((Ee,de)=>Ee.start-de.start);let oe=0;for(let Ee=1;Ee<re.length;Ee++){let de=re[oe],ce=re[Ee],Ce=de.start+de.count,Pe=K(ce.start,_.width,4),ze=K(de.start,_.width,4);ce.start<=Ce+1&&Pe===ze&&K(ce.start+ce.count-1,_.width,4)===Pe?de.count=Math.max(de.count,ce.start+ce.count-de.start):(++oe,re[oe]=ce)}re.length=oe+1;let j=t.getParameter(n.UNPACK_ROW_LENGTH),ee=t.getParameter(n.UNPACK_SKIP_PIXELS),le=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Ee=0,de=re.length;Ee<de;Ee++){let ce=re[Ee],Ce=Math.floor(ce.start/4),Pe=Math.ceil(ce.count/4),ze=Ce%_.width,L=Math.floor(Ce/_.width),he=Pe,Q=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(n.UNPACK_SKIP_ROWS,L),t.texSubImage2D(n.TEXTURE_2D,0,ze,L,he,Q,z,W,_.data)}A.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,j),t.pixelStorei(n.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(n.UNPACK_SKIP_ROWS,le)}}function ye(A,_,z){let W=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=n.TEXTURE_3D);let Z=je(A,_),re=_.source;t.bindTexture(W,A.__webglTexture,n.TEXTURE0+z);let oe=i.get(re);if(re.version!==oe.__version||Z===!0){if(t.activeTexture(n.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let Q=Ze.getPrimaries(Ze.workingColorSpace),ue=_.colorSpace===ii?null:Ze.getPrimaries(_.colorSpace),_e=_.colorSpace===ii||Q===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment);let ee=m(_.image,!1,s.maxTextureSize);ee=Vt(_,ee);let le=r.convert(_.format,_.colorSpace),Ee=r.convert(_.type),de=M(_.internalFormat,le,Ee,_.normalized,_.colorSpace,_.isVideoTexture);Ve(W,_);let ce,Ce=_.mipmaps,Pe=_.isVideoTexture!==!0,ze=oe.__version===void 0||Z===!0,L=re.dataReady,he=S(_,ee);if(_.isDepthTexture)de=b(_.format===Ei,_.type),ze&&(Pe?t.texStorage2D(n.TEXTURE_2D,1,de,ee.width,ee.height):t.texImage2D(n.TEXTURE_2D,0,de,ee.width,ee.height,0,le,Ee,null));else if(_.isDataTexture)if(Ce.length>0){Pe&&ze&&t.texStorage2D(n.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let Q=0,ue=Ce.length;Q<ue;Q++)ce=Ce[Q],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,le,Ee,ce.data):t.texImage2D(n.TEXTURE_2D,Q,de,ce.width,ce.height,0,le,Ee,ce.data);_.generateMipmaps=!1}else Pe?(ze&&t.texStorage2D(n.TEXTURE_2D,he,de,ee.width,ee.height),L&&te(_,ee,le,Ee)):t.texImage2D(n.TEXTURE_2D,0,de,ee.width,ee.height,0,le,Ee,ee.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,Ce[0].width,Ce[0].height,ee.depth);for(let Q=0,ue=Ce.length;Q<ue;Q++)if(ce=Ce[Q],_.format!==vn)if(le!==null)if(Pe){if(L)if(_.layerUpdates.size>0){let _e=zl(ce.width,ce.height,_.format,_.type);for(let ne of _.layerUpdates){let Re=ce.data.subarray(ne*_e/ce.data.BYTES_PER_ELEMENT,(ne+1)*_e/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,ne,ce.width,ce.height,1,le,Re)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,le,ce.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,ee.depth,0,ce.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?L&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Q,0,0,0,ce.width,ce.height,ee.depth,le,Ee,ce.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Q,de,ce.width,ce.height,ee.depth,0,le,Ee,ce.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&ze&&t.texStorage2D(n.TEXTURE_2D,he,de,Ce[0].width,Ce[0].height);for(let Q=0,ue=Ce.length;Q<ue;Q++)ce=Ce[Q],_.format!==vn?le!==null?Pe?L&&t.compressedTexSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,le,ce.data):t.compressedTexImage2D(n.TEXTURE_2D,Q,de,ce.width,ce.height,0,ce.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?L&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,ce.width,ce.height,le,Ee,ce.data):t.texImage2D(n.TEXTURE_2D,Q,de,ce.width,ce.height,0,le,Ee,ce.data)}else if(_.isDataArrayTexture)if(Pe){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,de,ee.width,ee.height,ee.depth),L)if(_.layerUpdates.size>0){let Q=zl(ee.width,ee.height,_.format,_.type);for(let ue of _.layerUpdates){let _e=ee.data.subarray(ue*Q/ee.data.BYTES_PER_ELEMENT,(ue+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,le,Ee,_e)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,le,Ee,ee.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,de,ee.width,ee.height,ee.depth,0,le,Ee,ee.data);else if(_.isData3DTexture)Pe?(ze&&t.texStorage3D(n.TEXTURE_3D,he,de,ee.width,ee.height,ee.depth),L&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,le,Ee,ee.data)):t.texImage3D(n.TEXTURE_3D,0,de,ee.width,ee.height,ee.depth,0,le,Ee,ee.data);else if(_.isFramebufferTexture){if(ze)if(Pe)t.texStorage2D(n.TEXTURE_2D,he,de,ee.width,ee.height);else{let Q=ee.width,ue=ee.height;for(let _e=0;_e<he;_e++)t.texImage2D(n.TEXTURE_2D,_e,de,Q,ue,0,le,Ee,null),Q>>=1,ue>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in n){let Q=n.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),f.add(_),Q.onpaint=ue=>{let _e=ue.changedElements;for(let ne of f)_e.includes(ne.image)&&(ne.needsUpdate=!0)},Q.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,ee);else{let _e=n.RGBA,ne=n.RGBA,Re=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,_e,ne,Re,ee)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Pe&&ze){let Q=ot(Ce[0]);t.texStorage2D(n.TEXTURE_2D,he,de,Q.width,Q.height)}for(let Q=0,ue=Ce.length;Q<ue;Q++)ce=Ce[Q],Pe?L&&t.texSubImage2D(n.TEXTURE_2D,Q,0,0,le,Ee,ce):t.texImage2D(n.TEXTURE_2D,Q,de,le,Ee,ce);_.generateMipmaps=!1}else if(Pe){if(ze){let Q=ot(ee);t.texStorage2D(n.TEXTURE_2D,he,de,Q.width,Q.height)}L&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ee,ee)}else t.texImage2D(n.TEXTURE_2D,0,de,le,Ee,ee);p(_)&&w(W),oe.__version=re.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function De(A,_,z){if(_.image.length!==6)return;let W=je(A,_),Z=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+z);let re=i.get(Z);if(Z.version!==re.__version||W===!0){t.activeTexture(n.TEXTURE0+z);let oe=Ze.getPrimaries(Ze.workingColorSpace),j=_.colorSpace===ii?null:Ze.getPrimaries(_.colorSpace),ee=_.colorSpace===ii||oe===j?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let le=_.isCompressedTexture||_.image[0].isCompressedTexture,Ee=_.image[0]&&_.image[0].isDataTexture,de=[];for(let ne=0;ne<6;ne++)!le&&!Ee?de[ne]=m(_.image[ne],!0,s.maxCubemapSize):de[ne]=Ee?_.image[ne].image:_.image[ne],de[ne]=Vt(_,de[ne]);let ce=de[0],Ce=r.convert(_.format,_.colorSpace),Pe=r.convert(_.type),ze=M(_.internalFormat,Ce,Pe,_.normalized,_.colorSpace),L=_.isVideoTexture!==!0,he=re.__version===void 0||W===!0,Q=Z.dataReady,ue=S(_,ce);Ve(n.TEXTURE_CUBE_MAP,_);let _e;if(le){L&&he&&t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,ce.width,ce.height);for(let ne=0;ne<6;ne++){_e=de[ne].mipmaps;for(let Re=0;Re<_e.length;Re++){let Te=_e[Re];_.format!==vn?Ce!==null?L?Q&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Te.width,Te.height,Ce,Te.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,Te.width,Te.height,0,Te.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,0,0,Te.width,Te.height,Ce,Pe,Te.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re,ze,Te.width,Te.height,0,Ce,Pe,Te.data)}}}else{if(_e=_.mipmaps,L&&he){_e.length>0&&ue++;let ne=ot(de[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,ue,ze,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){L?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,de[ne].width,de[ne].height,Ce,Pe,de[ne].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,de[ne].width,de[ne].height,0,Ce,Pe,de[ne].data);for(let Re=0;Re<_e.length;Re++){let ut=_e[Re].image[ne].image;L?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,ut.width,ut.height,Ce,Pe,ut.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,ut.width,ut.height,0,Ce,Pe,ut.data)}}else{L?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ce,Pe,de[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ze,Ce,Pe,de[ne]);for(let Re=0;Re<_e.length;Re++){let Te=_e[Re];L?Q&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,0,0,Ce,Pe,Te.image[ne]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re+1,ze,Ce,Pe,Te.image[ne])}}}p(_)&&w(n.TEXTURE_CUBE_MAP),re.__version=Z.version,_.onUpdate&&_.onUpdate(_)}A.__version=_.version}function xe(A,_,z,W,Z,re){let oe=r.convert(z.format,z.colorSpace),j=r.convert(z.type),ee=M(z.internalFormat,oe,j,z.normalized,z.colorSpace),le=i.get(_),Ee=i.get(z);if(Ee.__renderTarget=_,!le.__hasExternalTextures){let de=Math.max(1,_.width>>re),ce=Math.max(1,_.height>>re);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?t.texImage3D(Z,re,ee,de,ce,_.depth,0,oe,j,null):t.texImage2D(Z,re,ee,de,ce,0,oe,j,null)}t.bindFramebuffer(n.FRAMEBUFFER,A),Ct(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,W,Z,Ee.__webglTexture,0,St(_)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,W,Z,Ee.__webglTexture,re),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Fe(A,_,z){if(n.bindRenderbuffer(n.RENDERBUFFER,A),_.depthBuffer){let W=_.depthTexture,Z=W&&W.isDepthTexture?W.type:null,re=b(_.stencilBuffer,Z),oe=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Ct(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(_),re,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(_),re,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,re,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,A)}else{let W=_.textures;for(let Z=0;Z<W.length;Z++){let re=W[Z],oe=r.convert(re.format,re.colorSpace),j=r.convert(re.type),ee=M(re.internalFormat,oe,j,re.normalized,re.colorSpace);Ct(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,St(_),ee,_.width,_.height):z?n.renderbufferStorageMultisample(n.RENDERBUFFER,St(_),ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ft(A,_,z){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,A),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Z=i.get(_.depthTexture);if(Z.__renderTarget=_,(!Z.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(Z.__webglInit===void 0&&(Z.__webglInit=!0,_.depthTexture.addEventListener("dispose",C)),Z.__webglTexture===void 0){Z.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_.depthTexture);let le=r.convert(_.depthTexture.format),Ee=r.convert(_.depthTexture.type),de;_.depthTexture.format===Hn?de=n.DEPTH_COMPONENT24:_.depthTexture.format===Ei&&(de=n.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,de,_.width,_.height,0,le,Ee,null)}}else ie(_.depthTexture,0);let re=Z.__webglTexture,oe=St(_),j=W?n.TEXTURE_CUBE_MAP_POSITIVE_X+z:n.TEXTURE_2D,ee=_.depthTexture.format===Ei?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(_.depthTexture.format===Hn)Ct(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,j,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,j,re,0);else if(_.depthTexture.format===Ei)Ct(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ee,j,re,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,ee,j,re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function We(A){let _=i.get(A),z=A.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==A.depthTexture){let W=A.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let Z=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",Z)};W.addEventListener("dispose",Z),_.__depthDisposeCallback=Z}_.__boundDepthTexture=W}if(A.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let W=0;W<6;W++)ft(_.__webglFramebuffer[W],A,W);else{let W=A.texture.mipmaps;W&&W.length>0?ft(_.__webglFramebuffer[0],A,0):ft(_.__webglFramebuffer,A,0)}else if(z){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=n.createRenderbuffer(),Fe(_.__webglDepthbuffer[W],A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer[W];n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,re)}}else{let W=A.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),Fe(_.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,re=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,re),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,re)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function nt(A,_,z){let W=i.get(A);_!==void 0&&xe(W.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),z!==void 0&&We(A)}function ht(A){let _=A.texture,z=i.get(A),W=i.get(_);A.addEventListener("dispose",x);let Z=A.textures,re=A.isWebGLCubeRenderTarget===!0,oe=Z.length>1;if(oe||(W.__webglTexture===void 0&&(W.__webglTexture=n.createTexture()),W.__version=_.version,a.memory.textures++),re){z.__webglFramebuffer=[];for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[j]=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[j][ee]=n.createFramebuffer()}else z.__webglFramebuffer[j]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let j=0;j<_.mipmaps.length;j++)z.__webglFramebuffer[j]=n.createFramebuffer()}else z.__webglFramebuffer=n.createFramebuffer();if(oe)for(let j=0,ee=Z.length;j<ee;j++){let le=i.get(Z[j]);le.__webglTexture===void 0&&(le.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&Ct(A)===!1){z.__webglMultisampledFramebuffer=n.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let j=0;j<Z.length;j++){let ee=Z[j];z.__webglColorRenderbuffer[j]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,z.__webglColorRenderbuffer[j]);let le=r.convert(ee.format,ee.colorSpace),Ee=r.convert(ee.type),de=M(ee.internalFormat,le,Ee,ee.normalized,ee.colorSpace,A.isXRRenderTarget===!0),ce=St(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,de,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+j,n.RENDERBUFFER,z.__webglColorRenderbuffer[j])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=n.createRenderbuffer(),Fe(z.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(re){t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture),Ve(n.TEXTURE_CUBE_MAP,_);for(let j=0;j<6;j++)if(_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)xe(z.__webglFramebuffer[j][ee],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,ee);else xe(z.__webglFramebuffer[j],A,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);p(_)&&w(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(oe){for(let j=0,ee=Z.length;j<ee;j++){let le=Z[j],Ee=i.get(le),de=n.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(de,Ee.__webglTexture),Ve(de,le),xe(z.__webglFramebuffer,A,le,n.COLOR_ATTACHMENT0+j,de,0),p(le)&&w(de)}t.unbindTexture()}else{let j=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(j=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(j,W.__webglTexture),Ve(j,_),_.mipmaps&&_.mipmaps.length>0)for(let ee=0;ee<_.mipmaps.length;ee++)xe(z.__webglFramebuffer[ee],A,_,n.COLOR_ATTACHMENT0,j,ee);else xe(z.__webglFramebuffer,A,_,n.COLOR_ATTACHMENT0,j,0);p(_)&&w(j),t.unbindTexture()}A.depthBuffer&&We(A)}function Je(A){let _=A.textures;for(let z=0,W=_.length;z<W;z++){let Z=_[z];if(p(Z)){let re=E(A),oe=i.get(Z).__webglTexture;t.bindTexture(re,oe),w(re),t.unbindTexture()}}}let xt=[],Dt=[];function nn(A){if(A.samples>0){if(Ct(A)===!1){let _=A.textures,z=A.width,W=A.height,Z=n.COLOR_BUFFER_BIT,re=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(A),j=_.length>1;if(j)for(let le=0;le<_.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer);let ee=A.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let le=0;le<_.length;le++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),j){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=i.get(_[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Ee,0)}n.blitFramebuffer(0,0,z,W,0,0,z,W,Z,n.NEAREST),l===!0&&(xt.length=0,Dt.length=0,xt.push(n.COLOR_ATTACHMENT0+le),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(xt.push(re),Dt.push(re),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Dt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,xt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),j)for(let le=0;le<_.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,oe.__webglColorRenderbuffer[le]);let Ee=i.get(_[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Ee,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&l){let _=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function St(A){return Math.min(s.maxSamples,A.samples)}function Ct(A){let _=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(A){let _=a.render.frame;u.get(A)!==_&&(u.set(A,_),A.update())}function Vt(A,_){let z=A.colorSpace,W=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==ks&&z!==ii&&(Ze.getTransfer(z)===at?(W!==vn||Z!==ln)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",z)),_}function ot(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=ie,this.setTexture2DArray=O,this.setTexture3D=X,this.setTextureCube=J,this.rebindTextures=nt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=nn,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ct,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Eg(n,e){function t(i,s=ii){let r,a=Ze.getTransfer(s);if(i===ln)return n.UNSIGNED_BYTE;if(i===Pa)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Ia)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Rl)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Pl)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===El)return n.BYTE;if(i===Cl)return n.SHORT;if(i===ws)return n.UNSIGNED_SHORT;if(i===Ra)return n.INT;if(i===Ln)return n.UNSIGNED_INT;if(i===Dn)return n.FLOAT;if(i===Nn)return n.HALF_FLOAT;if(i===Il)return n.ALPHA;if(i===Ll)return n.RGB;if(i===vn)return n.RGBA;if(i===Hn)return n.DEPTH_COMPONENT;if(i===Ei)return n.DEPTH_STENCIL;if(i===Dl)return n.RED;if(i===La)return n.RED_INTEGER;if(i===Ci)return n.RG;if(i===Da)return n.RG_INTEGER;if(i===Na)return n.RGBA_INTEGER;if(i===ar||i===or||i===lr||i===cr)if(a===at)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===ar)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===ar)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===cr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ua||i===Fa||i===Oa||i===Ba)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===za||i===ka||i===Va||i===Ha||i===Ga||i===hr||i===Wa)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===za||i===ka)return a===at?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Va)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ha)return r.COMPRESSED_R11_EAC;if(i===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(i===hr)return r.COMPRESSED_RG11_EAC;if(i===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Xa||i===qa||i===Ya||i===Ja||i===Za||i===$a||i===Ka||i===ja||i===Qa||i===eo||i===to||i===no||i===io||i===so)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Xa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===qa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ya)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ja)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Za)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===$a)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ka)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ja)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Qa)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===eo)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===to)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===no)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===io)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===so)return a===at?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===ao||i===oo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===ro)return a===at?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===lo||i===co||i===ur||i===ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ur)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===As?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var Cg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Rg=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new $s(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new en({vertexShader:Cg,fragmentShader:Rg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new et(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Gn{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null,v=typeof XRWebGLBinding<"u",m=new sc,p={},w=t.getContextAttributes(),E=null,M=null,b=[],S=[],C=new qe,x=null,T=null,R=new Xt;R.viewport=new Mt;let N=new Xt;N.viewport=new Mt;let F=[R,N],k=new Ta,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let te=b[K];return te===void 0&&(te=new _s,b[K]=te),te.getTargetRaySpace()},this.getControllerGrip=function(K){let te=b[K];return te===void 0&&(te=new _s,b[K]=te),te.getGripSpace()},this.getHand=function(K){let te=b[K];return te===void 0&&(te=new _s,b[K]=te),te.getHandSpace()};function Y(K){let te=S.indexOf(K.inputSource);if(te===-1)return;let ye=b[te];ye!==void 0&&(ye.update(K.inputSource,K.frame,c||a),ye.dispatchEvent({type:K.type,data:K.inputSource}))}function $(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",$),s.removeEventListener("inputsourceschange",ie);for(let K=0;K<b.length;K++){let te=S[K];te!==null&&(S[K]=null,b[K].disconnect(te))}I=null,G=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(E),d=null,h=null,f=null,s=null,M=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(C.width,C.height,!1),T!==null){let K=T.camera;K.fov=T.fov,K.zoom=T.zoom,K.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",$),s.addEventListener("inputsourceschange",ie),w.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,De=null,xe=null;w.depth&&(xe=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=w.stencil?Ei:Hn,De=w.stencil?As:Ln);let Fe={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:r};f=this.getBinding(),h=f.createProjectionLayer(Fe),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),M=new an(h.textureWidth,h.textureHeight,{format:vn,type:ln,depthTexture:new xi(h.textureWidth,h.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let ye={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new an(d.framebufferWidth,d.framebufferHeight,{format:vn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),je.setContext(s),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ie(K){for(let te=0;te<K.removed.length;te++){let ye=K.removed[te],De=S.indexOf(ye);De>=0&&(S[De]=null,b[De].disconnect(ye))}for(let te=0;te<K.added.length;te++){let ye=K.added[te],De=S.indexOf(ye);if(De===-1){for(let Fe=0;Fe<b.length;Fe++)if(Fe>=S.length){S.push(ye),De=Fe;break}else if(S[Fe]===null){S[Fe]=ye,De=Fe;break}if(De===-1)break}let xe=b[De];xe&&xe.connect(ye)}}let O=new U,X=new U;function J(K,te,ye){O.setFromMatrixPosition(te.matrixWorld),X.setFromMatrixPosition(ye.matrixWorld);let De=O.distanceTo(X),xe=te.projectionMatrix.elements,Fe=ye.projectionMatrix.elements,ft=xe[14]/(xe[10]-1),We=xe[14]/(xe[10]+1),nt=(xe[9]+1)/xe[5],ht=(xe[9]-1)/xe[5],Je=(xe[8]-1)/xe[0],xt=(Fe[8]+1)/Fe[0],Dt=ft*Je,nn=ft*xt,St=De/(-Je+xt),Ct=St*-Je;if(te.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Ct),K.translateZ(St),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),xe[10]===-1)K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let D=ft+St,Vt=We+St,ot=Dt-Ct,A=nn+(De-Ct),_=nt*We/Vt*D,z=ht*We/Vt*D;K.projectionMatrix.makePerspective(ot,A,_,z,D,Vt),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ae(K,te){te===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(te.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let te=K.near,ye=K.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(ye=m.depthFar)),k.near=N.near=R.near=te,k.far=N.far=R.far=ye,(I!==k.near||G!==k.far)&&(s.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=K.layers.mask|6,R.layers.mask=k.layers.mask&-5,N.layers.mask=k.layers.mask&-3;let De=K.parent,xe=k.cameras;ae(k,De);for(let Fe=0;Fe<xe.length;Fe++)ae(xe[Fe],De);xe.length===2?J(k,R,N):k.projectionMatrix.copy(R.projectionMatrix),T===null&&K.isPerspectiveCamera&&(T={camera:K,fov:K.fov,zoom:K.zoom}),pe(K,k,De)};function pe(K,te,ye){ye===null?K.matrix.copy(te.matrixWorld):(K.matrix.copy(ye.matrixWorld),K.matrix.invert(),K.matrix.multiply(te.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(te.projectionMatrix),K.projectionMatrixInverse.copy(te.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=na*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(K){return p[K]};let ke=null;function Ve(K,te){if(u=te.getViewerPose(c||a),g=te,u!==null){let ye=u.views;d!==null&&(e.setRenderTargetFramebuffer(M,d.framebuffer),e.setRenderTarget(M));let De=!1;ye.length!==k.cameras.length&&(k.cameras.length=0,De=!0);for(let We=0;We<ye.length;We++){let nt=ye[We],ht=null;if(d!==null)ht=d.getViewport(nt);else{let xt=f.getViewSubImage(h,nt);ht=xt.viewport,We===0&&(e.setRenderTargetTextures(M,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(M))}let Je=F[We];Je===void 0&&(Je=new Xt,Je.layers.enable(We),Je.viewport=new Mt,F[We]=Je),Je.matrix.fromArray(nt.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(nt.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ht.x,ht.y,ht.width,ht.height),We===0&&(k.matrix.copy(Je.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),De===!0&&k.cameras.push(Je)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){f=i.getBinding();let We=f.getDepthInformation(ye[0]);We&&We.isValid&&We.texture&&m.init(We,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let We=0;We<ye.length;We++){let nt=ye[We].camera;if(nt){let ht=p[nt];ht||(ht=new $s,p[nt]=ht);let Je=f.getCameraImage(nt);ht.sourceTexture=Je}}}}for(let ye=0;ye<b.length;ye++){let De=S[ye],xe=b[ye];De!==null&&xe!==void 0&&xe.update(De,te,c||a)}ke&&ke(K,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),g=null}let je=new lu;je.setAnimationLoop(Ve),this.setAnimationLoop=function(K){ke=K},this.dispose=function(){}}},Pg=new gt,pu=new Oe;pu.set(-1,0,0,0,1,0,0,0,1);function Ig(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Fl(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,E,M){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),f(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),h(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,w,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w=e.get(p),E=w.envMap,M=w.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Pg.makeRotationFromEuler(M)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(pu),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,w,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let w=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lg(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,b){let S=b.program;i.uniformBlockBinding(M,S)}function c(M,b){let S=s[M.id];S===void 0&&(m(M),S=u(M),s[M.id]=S,M.addEventListener("dispose",w));let C=b.program;i.updateUBOMapping(M,C);let x=e.render.frame;r[M.id]!==x&&(h(M),r[M.id]=x)}function u(M){let b=f();M.__bindingPointIndex=b;let S=n.createBuffer(),C=M.__size,x=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){let b=s[M.id],S=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let x=0,T=S.length;x<T;x++){let R=S[x];if(Array.isArray(R))for(let N=0,F=R.length;N<F;N++)d(R[N],x,N,C);else d(R,x,0,C)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,b,S,C){if(v(M,b,S,C)===!0){let x=M.__offset,T=M.value;if(Array.isArray(T)){let R=0;for(let N=0;N<T.length;N++){let F=T[N],k=p(F);g(F,M.__data,R),typeof F!="number"&&typeof F!="boolean"&&!F.isMatrix3&&!ArrayBuffer.isView(F)&&(R+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,M.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,M.__data)}}function g(M,b,S){typeof M=="number"||typeof M=="boolean"?b[0]=M:M.isMatrix3?(b[0]=M.elements[0],b[1]=M.elements[1],b[2]=M.elements[2],b[3]=0,b[4]=M.elements[3],b[5]=M.elements[4],b[6]=M.elements[5],b[7]=0,b[8]=M.elements[6],b[9]=M.elements[7],b[10]=M.elements[8],b[11]=0):ArrayBuffer.isView(M)?b.set(new M.constructor(M.buffer,M.byteOffset,b.length)):M.toArray(b,S)}function v(M,b,S,C){let x=M.value,T=b+"_"+S;if(C[T]===void 0)return typeof x=="number"||typeof x=="boolean"?C[T]=x:ArrayBuffer.isView(x)?C[T]=x.slice():C[T]=x.clone(),!0;{let R=C[T];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return C[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function m(M){let b=M.uniforms,S=0,C=16;for(let T=0,R=b.length;T<R;T++){let N=Array.isArray(b[T])?b[T]:[b[T]];for(let F=0,k=N.length;F<k;F++){let I=N[F],G=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,$=G.length;Y<$;Y++){let ie=G[Y],O=p(ie),X=S%C,J=X%O.boundary,ae=X+J;S+=J,ae!==0&&C-ae<O.storage&&(S+=C-ae),I.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=S,S+=O.storage}}}let x=S%C;return x>0&&(S+=C-x),M.__size=S,M.__cache={},this}function p(M){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",M),b}function w(M){let b=M.target;b.removeEventListener("dispose",w);let S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function E(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}var Dg=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Xn=null;function Ng(){return Xn===null&&(Xn=new oa(Dg,16,16,Ci,Nn),Xn.name="DFG_LUT",Xn.minFilter=kt,Xn.magFilter=kt,Xn.wrapS=Vn,Xn.wrapT=Vn,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}var yo=class{constructor(e={}){let{canvas:t=Dh(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1,outputBufferType:d=ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=d,m=new Set([Na,Da,La]),p=new Set([ln,Ln,ws,As,Pa,Ia]),w=new Uint32Array(4),E=new Int32Array(4),M=new U,b=null,S=null,C=[],x=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=In,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,N=!1,F=null,k=null,I=null,G=null;this._outputColorSpace=Kt;let Y=0,$=0,ie=null,O=-1,X=null,J=new Mt,ae=new Mt,pe=null,ke=new Be(0),Ve=0,je=t.width,K=t.height,te=1,ye=null,De=null,xe=new Mt(0,0,je,K),Fe=new Mt(0,0,je,K),ft=!1,We=new ys,nt=!1,ht=!1,Je=new gt,xt=new U,Dt=new Mt,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},St=!1;function Ct(){return ie===null?te:1}let D=i;function Vt(y,P){return t.getContext(y,P)}let ot,A,_,z,W,Z,re,oe,j,ee,le,Ee,de,ce,Ce,Pe,ze,L,he,Q,ue,_e,ne;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",st,!1),t.addEventListener("webglcontextcreationerror",Sn,!1),D===null){let P="webgl2";if(D=Vt(P,y),D===null)throw Vt(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(y){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),Ue("WebGLRenderer: "+y.message),y}function Re(){ot=new Vm(D),ot.init(),ue=new Eg(D,ot),A=new Im(D,ot,e,ue),_=new wg(D,ot),A.reversedDepthBuffer&&h&&_.buffers.depth.setReversed(!0),k=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),z=new Wm(D),W=new ug,Z=new Ag(D,ot,_,W,A,ue,z),re=new km(R),oe=new Xd(D),_e=new Rm(D,oe),j=new Hm(D,oe,z,_e),ee=new qm(D,j,oe,_e,z),L=new Xm(D,A,Z),Ce=new Lm(W),le=new hg(R,re,ot,A,_e,Ce),Ee=new Ig(R,W),de=new fg,ce=new yg(ot),ze=new Cm(R,re,_,ee,g,l),Pe=new Tg(R,ee,A),ne=new Lg(D,z,A,_),he=new Pm(D,ot,z),Q=new Gm(D,ot,z),z.programs=le.programs,R.capabilities=A,R.extensions=ot,R.properties=W,R.renderLists=de,R.shadowMap=Pe,R.state=_,R.info=z}v!==ln&&(T=new Jm(v,t.width,t.height,o,s,r));let Te=new rc(R,D);this.xr=Te,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ot.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ot.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(y){y!==void 0&&(te=y,this.setSize(je,K,!1))},this.getSize=function(y){return y.set(je,K)},this.setSize=function(y,P,q=!0){if(Te.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}je=y,K=P,t.width=Math.floor(y*te),t.height=Math.floor(P*te),q===!0&&(t.style.width=y+"px",t.style.height=P+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(je*te,K*te).floor()},this.setDrawingBufferSize=function(y,P,q){je=y,K=P,te=q,t.width=Math.floor(y*q),t.height=Math.floor(P*q),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===ln){Ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(J)},this.getViewport=function(y){return y.copy(xe)},this.setViewport=function(y,P,q,V){y.isVector4?xe.set(y.x,y.y,y.z,y.w):xe.set(y,P,q,V),_.viewport(J.copy(xe).multiplyScalar(te).round())},this.getScissor=function(y){return y.copy(Fe)},this.setScissor=function(y,P,q,V){y.isVector4?Fe.set(y.x,y.y,y.z,y.w):Fe.set(y,P,q,V),_.scissor(ae.copy(Fe).multiplyScalar(te).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(y){_.setScissorTest(ft=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){De=y},this.getClearColor=function(y){return y.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,q=!0){let V=0;if(y){let H=!1;if(ie!==null){let ge=ie.texture.format;H=m.has(ge)}if(H){let ge=ie.texture.type,Me=p.has(ge),me=ze.getClearColor(),be=ze.getClearAlpha(),we=me.r,He=me.g,Xe=me.b;Me?(w[0]=we,w[1]=He,w[2]=Xe,w[3]=be,D.clearBufferuiv(D.COLOR,0,w)):(E[0]=we,E[1]=He,E[2]=Xe,E[3]=be,D.clearBufferiv(D.COLOR,0,E))}else V|=D.COLOR_BUFFER_BIT}P&&(V|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),F=y},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",st,!1),t.removeEventListener("webglcontextcreationerror",Sn,!1),ze.dispose(),de.dispose(),ce.dispose(),W.dispose(),re.dispose(),ee.dispose(),_e.dispose(),ne.dispose(),le.dispose(),Te.dispose(),Te.removeEventListener("sessionstart",Sc),Te.removeEventListener("sessionend",Tc),Ni.stop()};function ut(y){y.preventDefault(),Ul("WebGLRenderer: Context Lost."),N=!0}function st(){Ul("WebGLRenderer: Context Restored."),N=!1;let y=z.autoReset,P=Pe.enabled,q=Pe.autoUpdate,V=Pe.needsUpdate,H=Pe.type;Re(),z.autoReset=y,Pe.enabled=P,Pe.autoUpdate=q,Pe.needsUpdate=V,Pe.type=H}function Sn(y){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Bn(y){let P=y.target;P.removeEventListener("dispose",Bn),nd(P)}function nd(y){id(y),W.remove(y)}function id(y){let P=W.get(y).programs;P!==void 0&&(P.forEach(function(q){le.releaseProgram(q)}),y.isShaderMaterial&&le.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,q,V,H,ge){P===null&&(P=nn);let Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,me=ad(y,P,q,V,H);_.setMaterial(V,Me);let be=q.index,we=1;if(V.wireframe===!0){if(be=j.getWireframeAttribute(q),be===void 0)return;we=2}let He=q.drawRange,Xe=q.attributes.position,Se=He.start*we,rt=(He.start+He.count)*we;ge!==null&&(Se=Math.max(Se,ge.start*we),rt=Math.min(rt,(ge.start+ge.count)*we)),be!==null?(Se=Math.max(Se,0),rt=Math.min(rt,be.count)):Xe!=null&&(Se=Math.max(Se,0),rt=Math.min(rt,Xe.count));let Rt=rt-Se;if(Rt<0||Rt===1/0)return;_e.setup(H,V,me,q,be);let pt,ct=he;if(be!==null&&(pt=oe.get(be),ct=Q,ct.setIndex(pt)),H.isMesh)V.wireframe===!0?(_.setLineWidth(V.wireframeLinewidth*Ct()),ct.setMode(D.LINES)):ct.setMode(D.TRIANGLES);else if(H.isLine){let Ht=V.linewidth;Ht===void 0&&(Ht=1),_.setLineWidth(Ht*Ct()),H.isLineSegments?ct.setMode(D.LINES):H.isLineLoop?ct.setMode(D.LINE_LOOP):ct.setMode(D.LINE_STRIP)}else H.isPoints?ct.setMode(D.POINTS):H.isSprite&&ct.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ht=H._multiDrawStarts,ve=H._multiDrawCounts,$t=H._multiDrawCount,Qe=be?oe.get(be).bytesPerElement:1,xn=W.get(V).currentProgram.getUniforms();for(let zn=0;zn<$t;zn++)xn.setValue(D,"_gl_DrawID",zn),ct.render(Ht[zn]/Qe,ve[zn])}else if(H.isInstancedMesh)ct.renderInstances(Se,Rt,H.count);else if(q.isInstancedBufferGeometry){let Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Ht);ct.renderInstances(Se,Rt,ve)}else ct.render(Se,Rt)};function bc(y,P,q,V){F!==null&&y.isNodeMaterial&&F.setObject(V,y),nt===!0&&Ce.setState(y,q,!1),y.transparent===!0&&y.side===Pn&&y.forceSinglePass===!1?(y.side=tn,y.needsUpdate=!0,wr(y,P,V),y.side=Ti,y.needsUpdate=!0,wr(y,P,V),y.side=Pn):wr(y,P,V)}this.compile=function(y,P,q=null){q===null&&(q=y),F!==null&&F.renderStart(y,P,q),S=ce.get(q),S.init(P),x.push(S),q.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),y!==q&&y.traverseVisible(function(H){H.isLight&&H.layers.test(P.layers)&&(S.pushLight(H),H.castShadow&&S.pushShadow(H))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),ht=this.localClippingEnabled,nt=Ce.init(this.clippingPlanes,ht),nt===!0&&Ce.setGlobalState(this.clippingPlanes,P),F!==null&&Pe.render(S.state.shadowsArray,q,P);let V=new Set;return y.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ge=H.material;if(ge)if(Array.isArray(ge))for(let Me=0;Me<ge.length;Me++){let me=ge[Me];bc(me,q,P,H),V.add(me)}else bc(ge,q,P,H),V.add(ge)}),S=x.pop(),F!==null&&F.renderEnd(),V},this.compileAsync=function(y,P,q=null){let V=this.compile(y,P,q);return new Promise(H=>{function ge(){if(V.forEach(function(Me){let be=W.get(Me).currentProgram;(be===void 0||be.isReady())&&V.delete(Me)}),V.size===0){H(y);return}setTimeout(ge,10)}ot.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let Fo=null;function sd(y){Fo&&Fo(y)}function Sc(){Ni.stop()}function Tc(){Ni.start()}let Ni=new lu;Ni.setAnimationLoop(sd),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(y){Fo=y,Te.setAnimationLoop(y),y===null?Ni.stop():Ni.start()},Te.addEventListener("sessionstart",Sc),Te.addEventListener("sessionend",Tc),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(y,P);let q=Te.enabled===!0&&Te.isPresenting===!0,V=T!==null&&(ie===null||q)&&T.begin(R,ie);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),Te.enabled===!0&&Te.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Te.cameraAutoUpdate===!0&&Te.updateCamera(P),P=Te.getCamera()),y.isScene===!0&&y.onBeforeRender(R,y,P,ie),S=ce.get(y,x.length),S.init(P),S.state.textureUnits=Z.getTextureUnits(),x.push(S),Je.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),We.setFromProjectionMatrix(Je,Cn,P.reversedDepth),ht=this.localClippingEnabled,nt=Ce.init(this.clippingPlanes,ht),b=de.get(y,C.length),b.init(),C.push(b),Te.enabled===!0&&Te.isPresenting===!0){let Me=R.xr.getDepthSensingMesh();Me!==null&&Oo(Me,P,-1/0,R.sortObjects)}Oo(y,P,0,R.sortObjects),b.finish(),F!==null&&F.updateLights(S.state.lightsArray),R.sortObjects===!0&&b.sort(ye,De),St=Te.enabled===!1||Te.isPresenting===!1||Te.hasDepthSensing()===!1,St&&ze.addToRenderList(b,y),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),nt===!0&&Ce.beginShadows();let H=S.state.shadowsArray;if(Pe.render(H,y,P),nt===!0&&Ce.endShadows(),(V&&T.hasRenderPass())===!1){let Me=b.opaque,me=b.transmissive;if(S.setupLights(),P.isArrayCamera){let be=P.cameras;if(me.length>0)for(let we=0,He=be.length;we<He;we++){let Xe=be[we];Ac(Me,me,y,Xe)}St&&ze.render(y);for(let we=0,He=be.length;we<He;we++){let Xe=be[we];wc(b,y,Xe,Xe.viewport)}}else me.length>0&&Ac(Me,me,y,P),St&&ze.render(y),wc(b,y,P)}ie!==null&&$===0&&(Z.updateMultisampleRenderTarget(ie),Z.updateRenderTargetMipmap(ie)),V&&T.end(R),y.isScene===!0&&y.onAfterRender(R,y,P),_e.resetDefaultState(),O=-1,X=null,x.pop(),x.length>0?(S=x[x.length-1],Z.setTextureUnits(S.state.textureUnits),nt===!0&&Ce.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,C.pop(),C.length>0?b=C[C.length-1]:b=null,F!==null&&F.renderEnd()};function Oo(y,P,q,V){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLightProbeGrid)S.pushLightProbeGrid(y);else if(y.isLight)S.pushLight(y),y.castShadow&&S.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||y.intersectsFrustum(We)){V&&Dt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Je);let Me=ee.update(y),me=y.material;me.visible&&b.push(y,Me,me,q,Dt.z,null,P)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||y.intersectsFrustum(We))){let Me=ee.update(y),me=y.material;if(V&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Dt.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Dt.copy(Me.boundingSphere.center)),Dt.applyMatrix4(y.matrixWorld).applyMatrix4(Je)),Array.isArray(me)){let be=Me.groups;for(let we=0,He=be.length;we<He;we++){let Xe=be[we],Se=me[Xe.materialIndex];Se&&Se.visible&&b.push(y,Me,Se,q,Dt.z,Xe,P)}}else me.visible&&b.push(y,Me,me,q,Dt.z,null,P)}}let ge=y.children;for(let Me=0,me=ge.length;Me<me;Me++)Oo(ge[Me],P,q,V)}function wc(y,P,q,V){let{opaque:H,transmissive:ge,transparent:Me}=y;S.setupLightsView(q),nt===!0&&Ce.setGlobalState(R.clippingPlanes,q),V&&_.viewport(J.copy(V)),H.length>0&&Tr(H,P,q),ge.length>0&&Tr(ge,P,q),Me.length>0&&Tr(Me,P,q),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function Ac(y,P,q,V){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[V.id]===void 0){let Se=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[V.id]=new an(1,1,{generateMipmaps:!0,type:Se?Nn:ln,minFilter:Ai,samples:Math.max(4,A.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ze.workingColorSpace})}let ge=S.state.transmissionRenderTarget[V.id],Me=V.viewport||J;ge.setSize(Me.z*R.transmissionResolutionScale,Me.w*R.transmissionResolutionScale);let me=R.getRenderTarget(),be=R.getActiveCubeFace(),we=R.getActiveMipmapLevel();R.setRenderTarget(ge),R.getClearColor(ke),Ve=R.getClearAlpha(),Ve<1&&R.setClearColor(16777215,.5),R.clear(),St&&ze.render(q);let He=R.toneMapping;R.toneMapping=In;let Xe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),S.setupLightsView(V),nt===!0&&Ce.setGlobalState(R.clippingPlanes,V),Tr(y,q,V),Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let rt=0,Rt=P.length;rt<Rt;rt++){let pt=P[rt],{object:ct,geometry:Ht,material:ve,group:$t}=pt;if(ve.side===Pn&&ct.layers.test(V.layers)){let Qe=ve.side;ve.side=tn,ve.needsUpdate=!0,Ec(ct,q,V,Ht,ve,$t),ve.side=Qe,ve.needsUpdate=!0,Se=!0}}Se===!0&&(Z.updateMultisampleRenderTarget(ge),Z.updateRenderTargetMipmap(ge))}R.setRenderTarget(me,be,we),R.setClearColor(ke,Ve),Xe!==void 0&&(V.viewport=Xe),R.toneMapping=He}function Tr(y,P,q){let V=P.isScene===!0?P.overrideMaterial:null;for(let H=0,ge=y.length;H<ge;H++){let Me=y[H],{object:me,geometry:be,group:we}=Me,He=Me.material;He.allowOverride===!0&&V!==null&&(He=V),me.layers.test(q.layers)&&Ec(me,P,q,be,He,we)}}function Ec(y,P,q,V,H,ge){F!==null&&H.isNodeMaterial&&F.setObject(y,H),y.onBeforeRender(R,P,q,V,H,ge),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),H.onBeforeRender(R,P,q,V,y,ge),H.transparent===!0&&H.side===Pn&&H.forceSinglePass===!1?(H.side=tn,H.needsUpdate=!0,R.renderBufferDirect(q,P,V,H,y,ge),H.side=Ti,H.needsUpdate=!0,R.renderBufferDirect(q,P,V,H,y,ge),H.side=Pn):R.renderBufferDirect(q,P,V,H,y,ge),y.onAfterRender(R,P,q,V,H,ge)}function wr(y,P,q){P.isScene!==!0&&(P=nn);let V=W.get(y),H=S.state.lights,ge=S.state.shadowsArray,Me=H.state.version,me=le.getParameters(y,H.state,ge,P,q,S.state.lightProbeGridArray),be=le.getProgramCacheKey(me),we=V.programs;V.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,V.fog=P.fog;let He=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;V.envMap=re.get(y.envMap||V.environment,He),V.envMapRotation=V.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,we===void 0&&(y.addEventListener("dispose",Bn),we=new Map,V.programs=we);let Xe=we.get(be);if(Xe!==void 0){if(V.currentProgram===Xe&&V.lightsStateVersion===Me)return Rc(y,me),Xe}else me.uniforms=le.getUniforms(y),F!==null&&y.isNodeMaterial&&F.build(y,q,me),y.onBeforeCompile(me,R),Xe=le.acquireProgram(me,be),we.set(be,Xe),V.uniforms=me.uniforms;let Se=V.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Se.clippingPlanes=Ce.uniform),Rc(y,me),V.needsLights=ld(y),V.lightsStateVersion=Me,V.needsLights&&(Se.ambientLightColor.value=H.state.ambient,Se.lightProbe.value=H.state.probe,Se.sunLights.value=H.state.sun,Se.sunLightShadows.value=H.state.sunShadow,Se.directionalLights.value=H.state.directional,Se.directionalLightShadows.value=H.state.directionalShadow,Se.spotLights.value=H.state.spot,Se.spotLightShadows.value=H.state.spotShadow,Se.rectAreaLights.value=H.state.rectArea,Se.ltc_1.value=H.state.rectAreaLTC1,Se.ltc_2.value=H.state.rectAreaLTC2,Se.pointLights.value=H.state.point,Se.pointLightShadows.value=H.state.pointShadow,Se.hemisphereLights.value=H.state.hemi,Se.sunShadowMatrix.value=H.state.sunShadowMatrix,Se.sunShadowCascade.value=H.state.sunShadowCascade,Se.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Se.spotLightMatrix.value=H.state.spotLightMatrix,Se.spotLightMap.value=H.state.spotLightMap,Se.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=S.state.lightProbeGridArray.length>0,V.currentProgram=Xe,V.uniformsList=null,Xe}function Cc(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Rs.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Rc(y,P){let q=W.get(y);q.outputColorSpace=P.outputColorSpace,q.batching=P.batching,q.batchingColor=P.batchingColor,q.instancing=P.instancing,q.instancingColor=P.instancingColor,q.instancingMorph=P.instancingMorph,q.skinning=P.skinning,q.morphTargets=P.morphTargets,q.morphNormals=P.morphNormals,q.morphColors=P.morphColors,q.morphTargetsCount=P.morphTargetsCount,q.numClippingPlanes=P.numClippingPlanes,q.numIntersection=P.numClipIntersection,q.vertexAlphas=P.vertexAlphas,q.vertexTangents=P.vertexTangents,q.toneMapping=P.toneMapping}function rd(y,P){if(y.length===0)return null;if(y.length===1)return y[0].texture!==null?y[0]:null;M.setFromMatrixPosition(P.matrixWorld);for(let q=0,V=y.length;q<V;q++){let H=y[q];if(H.texture!==null&&H.boundingBox.containsPoint(M))return H}return null}function ad(y,P,q,V,H){P.isScene!==!0&&(P=nn),Z.resetTextureUnits();let ge=P.fog,Me=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?P.environment:null,me=ie===null?R.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Ze.workingColorSpace,be=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=re.get(V.envMap||Me,be),He=V.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Xe=!!q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Se=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,Rt=!!q.morphAttributes.color,pt=In;V.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(pt=R.toneMapping);let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ht=ct!==void 0?ct.length:0,ve=W.get(V),$t=S.state.lights;if(nt===!0&&(ht===!0||y!==X)){let dt=y===X&&V.id===O;Ce.setState(V,y,dt)}let Qe=!1;V.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==$t.state.version||ve.outputColorSpace!==me||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==we||V.fog===!0&&ve.fog!==ge||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Ce.numPlanes||ve.numIntersection!==Ce.numIntersection)||ve.vertexAlphas!==He||ve.vertexTangents!==Xe||ve.morphTargets!==Se||ve.morphNormals!==rt||ve.morphColors!==Rt||ve.toneMapping!==pt||ve.morphTargetsCount!==Ht||!!ve.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ve.__version=V.version);let xn=ve.currentProgram;Qe===!0&&(xn=wr(V,P,H),F&&V.isNodeMaterial&&F.onUpdateProgram(V,xn,ve));let zn=!1,ai=!1,$i=!1,lt=xn.getUniforms(),Et=ve.uniforms;if(_.useProgram(xn.program)&&(zn=!0,ai=!0,$i=!0),V.id!==O&&(O=V.id,ai=!0),ve.needsLights){let dt=rd(S.state.lightProbeGridArray,H);ve.lightProbeGrid!==dt&&(ve.lightProbeGrid=dt,ai=!0)}if(zn||X!==y){_.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),lt.setValue(D,"projectionMatrix",y.projectionMatrix),lt.setValue(D,"viewMatrix",y.matrixWorldInverse);let li=lt.map.cameraPosition;li!==void 0&&li.setValue(D,xt.setFromMatrixPosition(y.matrixWorld)),A.logarithmicDepthBuffer&&lt.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&lt.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),X!==y&&(X=y,ai=!0,$i=!0)}if(ve.needsLights&&($t.state.sunShadowMap.length>0&&lt.setValue(D,"sunShadowMap",$t.state.sunShadowMap,Z),$t.state.directionalShadowMap.length>0&&lt.setValue(D,"directionalShadowMap",$t.state.directionalShadowMap,Z),$t.state.spotShadowMap.length>0&&lt.setValue(D,"spotShadowMap",$t.state.spotShadowMap,Z),$t.state.pointShadowMap.length>0&&lt.setValue(D,"pointShadowMap",$t.state.pointShadowMap,Z)),H.isSkinnedMesh){lt.setOptional(D,H,"bindMatrix"),lt.setOptional(D,H,"bindMatrixInverse");let dt=H.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),lt.setValue(D,"boneTexture",dt.boneTexture,Z))}H.isBatchedMesh&&(lt.setOptional(D,H,"batchingTexture"),lt.setValue(D,"batchingTexture",H._matricesTexture,Z),lt.setOptional(D,H,"batchingIdTexture"),lt.setValue(D,"batchingIdTexture",H._indirectTexture,Z),lt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&lt.setValue(D,"batchingColorTexture",H._colorsTexture,Z));let oi=q.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&L.update(H,q,xn),(ai||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,lt.setValue(D,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&P.environment!==null&&(Et.envMapIntensity.value=P.environmentIntensity),Et.dfgLUT!==void 0&&(Et.dfgLUT.value=Ng()),ai){if(lt.setValue(D,"toneMappingExposure",R.toneMappingExposure),ve.needsLights&&od(Et,$i),ge&&V.fog===!0&&Ee.refreshFogUniforms(Et,ge),Ee.refreshMaterialUniforms(Et,V,te,K,S.state.transmissionRenderTarget[y.id]),ve.needsLights&&ve.lightProbeGrid){let dt=ve.lightProbeGrid;Et.probesSH.value=dt.texture,Et.probesMin.value.copy(dt.boundingBox.min),Et.probesMax.value.copy(dt.boundingBox.max),Et.probesResolution.value.copy(dt.resolution)}Rs.upload(D,Cc(ve),Et,Z)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Rs.upload(D,Cc(ve),Et,Z),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&lt.setValue(D,"center",H.center),lt.setValue(D,"modelViewMatrix",H.modelViewMatrix),lt.setValue(D,"normalMatrix",H.normalMatrix),lt.setValue(D,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){let dt=V.uniformsGroups;for(let li=0,Ki=dt.length;li<Ki;li++){let Ic=dt[li];ne.update(Ic,xn),ne.bind(Ic,xn)}}return xn}function od(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function ld(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return ie},this.setRenderTargetTextures=function(y,P,q){let V=W.get(y);V.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),W.get(y.texture).__webglTexture=P,W.get(y.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:q,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let q=W.get(y);q.__webglFramebuffer=P,q.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,q=0){ie=y,Y=P,$=q;let V=null,H=!1,ge=!1;if(y){let me=W.get(y);if(me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,me.__webglFramebuffer),J.copy(y.viewport),ae.copy(y.scissor),pe=y.scissorTest,_.viewport(J),_.scissor(ae),_.setScissorTest(pe),O=-1;return}else if(me.__webglFramebuffer===void 0)Z.setupRenderTarget(y);else if(me.__hasExternalTextures)Z.rebindTextures(y,W.get(y.texture).__webglTexture,W.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let He=y.depthTexture;if(me.__boundDepthTexture!==He){if(He!==null&&W.has(He)&&(y.width!==He.image.width||y.height!==He.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Z.setupDepthRenderbuffer(y)}}let be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ge=!0);let we=W.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(we[P])?V=we[P][q]:V=we[P],H=!0):y.samples>0&&Z.useMultisampledRTT(y)===!1?V=W.get(y).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[q]:V=we,J.copy(y.viewport),ae.copy(y.scissor),pe=y.scissorTest}else J.copy(xe).multiplyScalar(te).floor(),ae.copy(Fe).multiplyScalar(te).floor(),pe=ft;if(q!==0&&(V=k),_.bindFramebuffer(D.FRAMEBUFFER,V)&&_.drawBuffers(y,V),_.viewport(J),_.scissor(ae),_.setScissorTest(pe),H){let me=W.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,q)}else if(ge){let me=P;for(let be=0;be<y.textures.length;be++){let we=W.get(y.textures[be]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+be,we.__webglTexture,q,me)}}else if(y!==null&&q!==0){let me=W.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,me.__webglTexture,q)}O=-1};function Pc(y){let P=W.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=A.textureFormatReadable(y.format),P.__typeReadable=A.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,q,V,H,ge,Me,me=0){if(!(y&&y.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be){_.bindFramebuffer(D.FRAMEBUFFER,be);try{let we=y.textures[me],He=we.format,Xe=we.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Se=Pc(we);if(Se.__formatReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-V&&q>=0&&q<=y.height-H&&D.readPixels(P,q,V,H,ue.convert(He),ue.convert(Xe),ge)}finally{let we=ie!==null?W.get(ie).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(y,P,q,V,H,ge,Me,me=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=W.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(be=be[Me]),be)if(P>=0&&P<=y.width-V&&q>=0&&q<=y.height-H){_.bindFramebuffer(D.FRAMEBUFFER,be);let we=y.textures[me],He=we.format,Xe=we.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+me);let Se=Pc(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),D.readPixels(P,q,V,H,ue.convert(He),ue.convert(Xe),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Rt=ie!==null?W.get(ie).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Rt);let pt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Uh(D,pt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(rt),D.deleteSync(pt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,q=0){let V=Math.pow(2,-q),H=Math.floor(y.image.width*V),ge=Math.floor(y.image.height*V),Me=P!==null?P.x:0,me=P!==null?P.y:0;Z.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,q,0,0,Me,me,H,ge),_.unbindTexture()},this.copyTextureToTexture=function(y,P,q=null,V=null,H=0,ge=0){let Me,me,be,we,He,Xe,Se,rt,Rt,pt=y.isCompressedTexture?y.mipmaps[ge]:y.image;if(q!==null)Me=q.max.x-q.min.x,me=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,He=q.min.y,Xe=q.isBox3?q.min.z:0;else{let Et=Math.pow(2,-H);Me=Math.floor(pt.width*Et),me=Math.floor(pt.height*Et),y.isDataArrayTexture?be=pt.depth:y.isData3DTexture?be=Math.floor(pt.depth*Et):be=1,we=0,He=0,Xe=0}V!==null?(Se=V.x,rt=V.y,Rt=V.z):(Se=0,rt=0,Rt=0);let ct=ue.convert(P.format),Ht=ue.convert(P.type),ve;P.isData3DTexture?(Z.setTexture3D(P,0),ve=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Z.setTexture2DArray(P,0),ve=D.TEXTURE_2D_ARRAY):(Z.setTexture2D(P,0),ve=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let $t=_.getParameter(D.UNPACK_ROW_LENGTH),Qe=_.getParameter(D.UNPACK_IMAGE_HEIGHT),xn=_.getParameter(D.UNPACK_SKIP_PIXELS),zn=_.getParameter(D.UNPACK_SKIP_ROWS),ai=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,pt.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,pt.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,we),_.pixelStorei(D.UNPACK_SKIP_ROWS,He),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Xe);let $i=y.isDataArrayTexture||y.isData3DTexture,lt=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let Et=W.get(y),oi=W.get(P),dt=W.get(Et.__renderTarget),li=W.get(oi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,dt.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let Ki=0;Ki<be;Ki++)$i&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(y).__webglTexture,H,Xe+Ki),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,W.get(P).__webglTexture,ge,Rt+Ki)),D.blitFramebuffer(we,He,Me,me,Se,rt,Me,me,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||y.isRenderTargetTexture||W.has(y)){let Et=W.get(y),oi=W.get(P);_.bindFramebuffer(D.READ_FRAMEBUFFER,I),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let dt=0;dt<be;dt++)$i?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Et.__webglTexture,H,Xe+dt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Et.__webglTexture,H),lt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,oi.__webglTexture,ge,Rt+dt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,oi.__webglTexture,ge),H!==0?D.blitFramebuffer(we,He,Me,me,Se,rt,Me,me,D.COLOR_BUFFER_BIT,D.NEAREST):lt?D.copyTexSubImage3D(ve,ge,Se,rt,Rt+dt,we,He,Me,me):D.copyTexSubImage2D(ve,ge,Se,rt,we,He,Me,me);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else lt?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(ve,ge,Se,rt,Rt,Me,me,be,ct,Ht,pt.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(ve,ge,Se,rt,Rt,Me,me,be,ct,pt.data):D.texSubImage3D(ve,ge,Se,rt,Rt,Me,me,be,ct,Ht,pt):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,Se,rt,Me,me,ct,Ht,pt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,Se,rt,pt.width,pt.height,ct,pt.data):D.texSubImage2D(D.TEXTURE_2D,ge,Se,rt,Me,me,ct,Ht,pt);_.pixelStorei(D.UNPACK_ROW_LENGTH,$t),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Qe),_.pixelStorei(D.UNPACK_SKIP_PIXELS,xn),_.pixelStorei(D.UNPACK_SKIP_ROWS,zn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,ai),ge===0&&P.generateMipmaps&&D.generateMipmap(ve),_.unbindTexture()},this.initRenderTarget=function(y){W.get(y).__webglFramebuffer===void 0&&Z.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Z.setTextureCube(y,0):y.isData3DTexture?Z.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Z.setTexture2DArray(y,0):Z.setTexture2D(y,0),_.unbindTexture()},this.resetState=function(){Y=0,$=0,ie=null,_.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ze._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ze._getUnpackColorSpace()}};var se=n=>n*Math.PI/180,Ye=(n,e,t)=>Math.min(t,Math.max(e,n));var Ae=n=>(n=Ye(n,0,1),n*n*(3-2*n));function Yn(n,e,t,i){return n<e?Ae(n/e):n<e+t?1:n<e+t+i?1-Ae((n-e-t)/i):0}function ac(n){let e=n-Math.floor(n);return e<.5?Ae(e*2):1-Ae((e-.5)*2)}function cn(n,e){let t=Math.floor(n/e);return{r:t,u:(n-t*e)/e}}function hn(n,e){let t=n.length;if(e<=n[0][0])return n[0].slice(1);if(e>=n[t-1][0])return n[t-1].slice(1);let i=1;for(;e>n[i][0];)i++;let s=n[i-1],r=n[i],a=r[0]-s[0]||1e-6,o=(e-s[0])/a,l=o*o,c=l*o,u=(h,d)=>(n[d][h]-n[d-1][h])/(n[d][0]-n[d-1][0]||1e-6),f=(h,d)=>{if(h===0||h===t-1)return 0;let g=u(d,h),v=u(d,h+1);if(g*v<=0)return 0;let m=n[h][0]-n[h-1][0],p=n[h+1][0]-n[h][0],w=2*p+m,E=p+2*m;return(w+E)/(w/g+E/v)};return r.slice(1).map((h,d)=>{let g=d+1,v=f(i-1,g)*a,m=f(i,g)*a;return(2*c-3*l+1)*s[g]+(c-2*l+o)*v+(-2*c+3*l)*r[g]+(c-l)*m})}var Ot=Math.PI,mu={m:{shoulder:.162,hip:.078,chest:[.152,.215,.108],waist:[.118,.12,.092],pelvis:[.13,.098,.1],limb:1.1,head:[.084,.099,.092],pony:!1},f:{shoulder:.146,hip:.082,chest:[.132,.205,.1],waist:[.1,.12,.086],pelvis:[.138,.1,.102],limb:.98,head:[.079,.095,.088],pony:!0}},gu={skin:13146748,hair:2826008,top:16742938,topStyle:"tank",bottom:1380622,bottomStyle:"shorts",socks:15987699,shoes:1841690,sole:15921129,barefoot:!1,gloves:0,band:0},oc=new Map;function Ug(n){return oc.has(n)||oc.set(n,new en({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,uniforms:{color:{value:new Be(16734768)},opacity:{value:0}},vertexShader:"attribute float aa; varying float va; void main(){ va = aa; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 color; uniform float opacity; varying float va; void main(){ gl_FragColor = vec4(color, va * opacity); }"})),oc.get(n)}function _u(n,e={x:0,z:0},t=0,i="m",s={}){let r=mu[i]||mu.m,a={...gu,...s},o=(O,X)=>new fn({color:O,roughness:X}),l={skin:o(a.skin,.7),top:o(a.top,.62),bottom:o(a.bottom,.65),socks:o(a.socks,.7),shoes:o(a.shoes,.5),sole:o(a.sole,.6),hair:o(a.hair,.85),glove:o(a.gloves||14100029,.42),band:o(a.band||15921906,.6)},c=(O,X,J,ae=0)=>{let pe=new et(new yi(O,Math.max(X,.001),8,18),J);return pe.position.y=ae,pe.castShadow=!0,pe},u=(O,X,J,ae,pe=0)=>{let ke=new et(new ki(1,28,20),ae);return ke.scale.set(O,X,J),ke.position.y=pe,ke.castShadow=!0,ke},f={},h=[],d={thigh:{},shin:{},foot:{},sh:{},el:{}},g=(O,X,J,ae,pe,ke,Ve,je,K,te)=>{let ye=new ki(1,22,16,K,te),De=ye.attributes.uv,xe=new Float32Array(De.count);for(let ft=0;ft<De.count;ft++)xe[ft]=Math.pow(Math.max(0,Math.sin(Ot*De.getY(ft))),.55)*(te<Ot*1.5?Math.pow(Math.max(0,Math.sin(Ot*De.getX(ft))),.6):1);ye.setAttribute("aa",new rn(xe,1));let Fe=new et(ye,Ug(O));return Fe.scale.set(J,ae,pe),Fe.position.set(ke,Ve,je),Fe.renderOrder=6,Fe.visible=!1,X.add(Fe),(f[O]||(f[O]=[])).push(Fe),Fe},v=[0,Ot],m=[Ot,Ot],p=O=>O>0?[Ot/2,Ot]:[-Ot/2,Ot],w=O=>O>0?[-Ot/2,Ot]:[Ot/2,Ot],E=[0,Ot*2],M=(O,X,J,ae,pe,ke)=>{let Ve=new Ft;return Ve.position.set(X,J,ae),O.add(Ve),h.push({o:Ve,r:pe,kind:ke}),Ve},b=new yt,S=new yt;b.add(S),n.add(b),S.add(u(...r.pelvis,l.bottom,0));let C=new yt;C.position.y=.03,S.add(C);let x=a.topStyle==="bra"?l.skin:l.top;C.add(u(...r.chest,l.top,.2+.07)),C.add(u(r.waist[0],r.waist[1],r.waist[2],x,.08)),C.add(c(.1,.1,x,.07));let T=new yt;T.position.y=.43,C.add(T),T.add(c(.04,.07,l.skin,.045));let R=new yt;R.position.y=.07,T.add(R),R.add(u(...r.head,l.skin,.105));let N=new et(new ki(1,28,14,0,Ot*2,0,Ot*.45),l.hair);if(N.scale.set(r.head[0]*1.06,r.head[1]*1.08,r.head[2]*1.1),N.position.set(0,.112,-.006),N.rotation.x=-.2,N.castShadow=!0,R.add(N),r.pony){let O=c(.022,.1,l.hair,0);O.position.set(0,.095,-.112),O.rotation.x=.5,R.add(O);let X=u(.03,.03,.03,l.hair,0);X.position.set(0,.138,-.09),R.add(X)}let F=new fn({color:1380623,roughness:.35});for(let O of[-1,1]){let X=u(.0105,.0125,.008,F,.108);X.position.set(O*.032,.108,r.head[2]*.915),X.castShadow=!1,R.add(X);let J=u(.019,.0045,.007,l.hair,.13);J.position.set(O*.033,.13,r.head[2]*.9),J.rotation.z=O*-.12,J.castShadow=!1,R.add(J);let ae=u(.011,.02,.014,l.skin,.1);ae.position.set(O*(r.head[0]-.002),.1,0),R.add(ae)}let k=u(.014,.016,.018,l.skin,.098);if(k.position.z=r.head[2]+.006,R.add(k),a.band){let O=new et(new yi(.014,r.head[0]*2.2,4,10),l.band);O.rotation.z=Ot/2,O.position.set(0,.14,.012),O.scale.set(1,1,1.4),R.add(O)}let I=a.topStyle==="tee"?l.top:l.skin,G=O=>{let X=new yt;X.position.set(O*r.shoulder,.385,0),C.add(X),X.add(c(.037*r.limb,.15,l.skin,-.11)),X.add(c(.047*r.limb,.05,I,-.045));let J=new yt;J.position.y=-.22,X.add(J),J.add(c(.031*r.limb,.14,l.skin,-.1));let ae=new yt;ae.position.y=-.2,J.add(ae),a.gloves?(ae.add(u(.066,.075,.06,l.glove,-.06)),ae.add(c(.039,.035,l.band,-.005))):(ae.add(u(.032,.05,.03,l.skin,-.04)),a.band&&ae.add(c(.034,.02,l.band,-.008))),M(ae,0,-.03,0,.04,"hand"),M(X,0,0,0,.05,"body"),d.sh[O]=X,d.el[O]=J,g("delt",X,.066,.074,.066,0,-.03,0,...E),g("bic",X,.05,.1,.05,0,-.12,0,...v),g("tri",X,.05,.1,.05,0,-.12,0,...m)},Y=a.bottomStyle==="tights",$=O=>{let X=new yt;X.position.set(O*r.hip,-.01,0),S.add(X),X.add(c(.066*r.limb,.186,Y?l.bottom:l.skin,-.155)),X.add(c(.08*r.limb,Y?.18:.08,l.bottom,Y?-.12:-.075));let J=new yt;J.position.y=-.31,X.add(J),J.add(c(.05*r.limb,.214,Y?l.bottom:l.skin,-.155)),!Y&&!a.barefoot&&J.add(c(.054,.1,l.socks,-.215));let ae=new yt;if(ae.position.y=-.31,J.add(ae),a.barefoot){let pe=new et(new Qt(.082,.05,.2),Y?l.bottom:l.skin);pe.position.set(0,-.045,.05),pe.castShadow=!0,ae.add(pe);let ke=u(.044,.026,.03,Y?l.bottom:l.skin,-.05);ke.position.z=.15,ae.add(ke)}else{let pe=new et(new Qt(.088,.052,.225),l.shoes);pe.position.set(0,-.03,.055),pe.castShadow=!0,ae.add(pe);let ke=new et(new Qt(.092,.02,.232),l.sole);ke.position.set(0,-.064,.056),ae.add(ke)}M(ae,0,-.073,.16,0,"foot"),M(ae,0,-.073,-.05,0,"foot"),M(X,0,-.31,.03,.062,"body"),M(J,0,0,.03,.055,"knee"),d.thigh[O]=X,d.shin[O]=J,d.foot[O]=ae,g("quad",X,.09,.15,.09,0,-.13,0,...v),g("ham",X,.09,.15,.09,0,-.13,0,...m),g("abd",X,.094,.1,.088,0,-.08,0,...p(O)),g("add",X,.084,.13,.078,0,-.14,0,...w(O)),g("calf",J,.062,.12,.064,0,-.12,-.004,...m),g("ankle",ae,.066,.06,.066,0,-.03,.02,...E)};G(1),G(-1),$(1),$(-1),M(R,0,.1,0,.11,"body"),M(S,0,0,0,.1,"body"),M(C,0,.2,0,.1,"body"),g("glute",S,r.pelvis[0]*1.07,.108,r.pelvis[2]*1.08,0,-.01,0,...m),g("core",C,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...v),g("obl",C,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...p(1)),g("obl",C,r.chest[0]*.97,.12,r.chest[2]*.98,0,.13,0,...w(1)),g("lumbar",C,r.chest[0]*.97,.12,r.chest[2]*.98,0,.1,0,...m),g("back",C,r.chest[0]*1,.13,r.chest[2]*.98,0,.32,0,...m),g("chest",C,r.chest[0]*1,.11,r.chest[2]*1,0,.33,0,...v);let ie=[S,C,T,R,...[1,-1].flatMap(O=>[d.thigh[O],d.shin[O],d.foot[O],d.sh[O],d.el[O]])];return{root:b,pelvis:S,spine:C,neck:T,head:R,JT:d,marks:h,ALL:ie,muscles:f,mats:l,base:e,yaw:t,variant:i,mode:null,blend:null,last:null}}function xu(n,e){e.remove(n.root),n.root.traverse(t=>{t.geometry&&t.geometry.dispose()}),Object.values(n.mats).forEach(t=>t.dispose())}function yu(n,e){let t={...gu,...e},i=n.mats;i.skin.color.set(t.skin),i.hair.color.set(t.hair),i.top.color.set(t.top),i.bottom.color.set(t.bottom),i.socks.color.set(t.socks),i.shoes.color.set(t.shoes),i.sole.color.set(t.sole),t.gloves&&i.glove.color.set(t.gloves),t.band&&i.band.color.set(t.band)}var vu={quad:"Cu\xE1driceps",ham:"Isquiotibiales",glute:"Gl\xFAteos",calf:"Gemelos",add:"Aductores",abd:"Gl\xFAteo medio",core:"Abdomen",obl:"Oblicuos",lumbar:"Lumbares",back:"Espalda",chest:"Pecho",delt:"Hombros",tri:"Tr\xEDceps",bic:"B\xEDceps",ankle:"Tobillos"};function Mu(n,e,t,i){for(let s in n.muscles){let r=n.muscles[s],a=r[0].material.uniforms,o=e&&e.includes(s)?t:0;a.opacity.value+=(o-a.opacity.value)*.16,i&&a.color.value.set(i);let l=a.opacity.value>.012;r.forEach(c=>c.visible=l)}}var mn={thigh:.31,shin:.31,upperArm:.22,foreArm:.2},bu=new U,Jn=new U,Ri=new U,Su=new U,Tu=new U,lc=new U,cc=new U,wu=new U,Au=new gt,Eu=new qt,Cu=new qt;function qi(n,e,t,i,s,r,a){n.updateWorldMatrix(!0,!1),n.getWorldPosition(bu),Jn.subVectors(t,bu);let o=Jn.length();o<1e-4&&(Jn.set(0,-1,0),o=1e-4),Jn.divideScalar(o),o=Ye(o,Math.abs(i-s)+.001,i+s-.001);let l=Ye((i*i+o*o-s*s)/(2*i*o),-1,1),c=Math.sqrt(1-l*l),u=Math.PI-Math.acos(Ye((i*i+s*s-o*o)/(2*i*s),-1,1));Ri.copy(r).addScaledVector(Jn,-r.dot(Jn)),Ri.lengthSq()<1e-6&&(Ri.set(0,0,1).addScaledVector(Jn,-Jn.z),Ri.lengthSq()<1e-6&&Ri.set(1,0,0)),Ri.normalize(),Su.copy(Jn).multiplyScalar(l).addScaledVector(Ri,c),Tu.copy(Ri).multiplyScalar(l).addScaledVector(Jn,-c),lc.copy(Su).negate(),cc.copy(Tu).multiplyScalar(a==="arm"?-1:1),wu.crossVectors(lc,cc),Au.makeBasis(wu,lc,cc),Eu.setFromRotationMatrix(Au),n.parent.updateWorldMatrix(!0,!1),n.parent.getWorldQuaternion(Cu),n.quaternion.copy(Cu.invert()).multiply(Eu),e.rotation.set(a==="arm"?-u:u,0,0)}var bo={},Ke=(n,e)=>{bo[n]=e},B=null,ku=new U(0,1,0),hc=new qt,Fg=new qt,Og=new Rn,sM=new U,Ie=(n=0,e=0,t=0)=>new U(n,e,t),_t=(n,e,t=0)=>B.JT.thigh[n].rotation.set(-se(e),0,se(t*n)),wt=(n,e)=>B.JT.shin[n].rotation.x=se(e),Tt=(n,e,t=8)=>B.JT.sh[n].rotation.set(-se(e),0,se(t*n)),At=(n,e)=>B.JT.el[n].rotation.x=-se(e);function Bg(n){return n.updateWorldMatrix(!0,!1),n.getWorldQuaternion(hc),hc.premultiply(Fg.copy(B.root.quaternion).invert()),Og.setFromQuaternion(hc,"XYZ").x}var Bt=(n,e=0)=>{B.JT.foot[n].rotation.x=-Bg(B.JT.shin[n])+se(e)},So=n=>{let e=se(n);return n>=0?.072*Math.cos(e)+.1675*Math.sin(e)+.004:.072*Math.cos(e)+.0575*Math.sin(-e)+.004},Ru=new U,Pu=new U;function Iu(n,e,t,i,s=0,r=0,a=.12){Ru.set(e,t,i),Pu.set(n*a*Math.cos(r)+Math.sin(r),0,-n*a*Math.sin(r)+Math.cos(r)),qi(B.JT.thigh[n],B.JT.shin[n],Ru,mn.thigh,mn.shin,Pu,"leg"),Bt(n,s)}var Lu=new U,Du=new U;function zg(n,e,t){Lu.copy(e),Du.copy(t),qi(B.JT.sh[n],B.JT.el[n],Lu,mn.upperArm,mn.foreArm,Du,"arm")}var Mn=(n,e,t)=>qi(B.JT.thigh[n],B.JT.shin[n],e,mn.thigh,mn.shin,t,"leg"),gn=(n,e,t)=>qi(B.JT.sh[n],B.JT.el[n],e,mn.upperArm,mn.foreArm,t,"arm"),it=(n,e,t)=>n+(e-n)*t,Pi=(n,e,t)=>B.spine.localToWorld(Ie(n,e,t)),gr=()=>({py:.6,hx:0,hz:0,yaw:-32,syaw:0,lean:8,roll:0,hd:4,lf:[.14,.075,.2,0],rf:[-.14,.075,-.26,6],hand:{},ryaw:0}),kg={1:[.115,.4,.27],"-1":[-.12,.38,.21]},Is=n=>Ie(n*.7,-.8,-.25);function _r(n){let{root:e,pelvis:t,spine:i,head:s}=B;e.quaternion.setFromAxisAngle(ku,B.yaw+se(n.ryaw)),e.position.set(B.base.x+n.hx,n.py,B.base.z+n.hz),t.rotation.y=se(n.yaw),i.rotation.y=se(n.syaw),i.rotation.x=se(n.lean),i.rotation.z=se(n.roll),s.rotation.y=-(t.rotation.y+i.rotation.y)*.8,s.rotation.x=se(n.hd),e.updateMatrixWorld(!0),Iu(1,n.lf[0],Math.max(n.lf[1],So(n.lf[3])),n.lf[2],n.lf[3],se(n.ryaw)),Iu(-1,n.rf[0],Math.max(n.rf[1],So(n.rf[3])),n.rf[2],n.rf[3],se(n.ryaw)),e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.hand[r]||{},o=kg[r],l,c=Is(r),u=Pi(o[0],o[1],o[2]);if(a.str!==void 0){let f=B.JT.sh[r].getWorldPosition(Ie()),h=Ie(f.x*.55,f.y-.01,f.z+.42);l=u.clone().lerp(h,Ye(a.str,-.25,1)),c=Is(r).lerp(Ie(r*.5,-.3,-.2),Ye(a.str,0,1))}else a.l?(l=Pi(a.l[0],a.l[1],a.l[2]),a.pole&&(c=a.pole)):l=u;zg(r,l,c)}}var Vg=()=>({py:.69,hx:0,hz:0,pp:0,pyw:0,pr:0,lean:2,syw:0,sr:0,hd:-2,hyw:0,F:{1:[.085,.075,0,0,.12,0,1,0],"-1":[-.085,.075,0,0,-.12,0,1,0]},H:{1:[.19,.62,.03,.8,-.7,0],"-1":[-.19,.62,.03,-.8,-.7,0]}}),Le=(n,e)=>{let t=e?JSON.parse(JSON.stringify(e)):Vg();n(t);for(let i of[1,-1])for(;t.F[i].length<8;)t.F[i].push(0);return t},si=(n,e,t)=>typeof n=="number"?n+(e-n)*t:Array.isArray(n)?n.map((i,s)=>si(i,e[s]??i,t)):Object.fromEntries(Object.keys(n).map(i=>[i,si(n[i],e[i],t)]));function xr(n){let e=JSON.parse(JSON.stringify(n));e.hx*=-1,e.pr*=-1,e.pyw*=-1,e.syw*=-1,e.sr*=-1,e.hyw*=-1;let t=s=>[-s[0],s[1],s[2],s[3],-s[4],s[5],s[6],-(s[7]||0)],i=s=>[-s[0],s[1],s[2],-s[3],s[4],s[5]];return e.F={1:t(n.F[-1]),"-1":t(n.F[1])},e.H={1:i(n.H[-1]),"-1":i(n.H[1])},e}var Hg=n=>{let e=Math.abs(n);return e<=100?So(n):So(n>0?100:-100)*Math.max(0,1-(e-100)/70)},Nu=new U,Uu=new U,Fu=new U,Ou=new U;function Un(n){let{root:e,pelvis:t,spine:i,head:s}=B;e.position.set(B.base.x+n.hx,n.py,B.base.z+n.hz),t.rotation.set(se(n.pp),se(n.pyw),se(n.pr)),i.rotation.set(se(n.lean),se(n.syw),se(n.sr)),s.rotation.set(se(n.hd),se(n.hyw),0),e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.F[r];Nu.set(a[0],Math.max(a[1],Hg(a[3])),a[2]),Uu.set(a[4],a[5],a[6]),qi(B.JT.thigh[r],B.JT.shin[r],Nu,mn.thigh,mn.shin,Uu,"leg"),Bt(r,a[3]),a[7]&&(B.JT.foot[r].rotation.z=se(a[7]))}e.updateMatrixWorld(!0);for(let r of[1,-1]){let a=n.H[r];Fu.set(a[0],a[1],a[2]),Ou.set(a[3],a[4],a[5]),qi(B.JT.sh[r],B.JT.el[r],Fu,mn.upperArm,mn.foreArm,Ou,"arm")}}var Bu=new U;function zu(n){return{q:n.ALL.map(e=>e.quaternion.clone()),rq:n.root.quaternion.clone(),rp:n.root.position.clone()}}function Gg(n,e,t){return{q:n.q.map((i,s)=>i.clone().slerp(e.q[s],t)),rq:n.rq.clone().slerp(e.rq,t),rp:n.rp.clone().lerp(e.rp,t)}}function Wg(n,e){n.ALL.forEach((t,i)=>t.quaternion.copy(e.q[i])),n.root.quaternion.copy(e.rq),n.root.position.copy(e.rp)}function Xg(n,e,t,i){let s=[n.spine,n.neck,n.head,n.JT.sh[1],n.JT.sh[-1],n.JT.el[1],n.JT.el[-1]];(!n.sm||t)&&(n.sm=new Map);let r=1-Math.exp(-Math.max(e,0)/.055);s.forEach((a,o)=>{let l=n.sm.get(a);if(!l){l=a.quaternion.clone(),n.sm.set(a,l);return}o<3||i?(l.slerp(a.quaternion,r),a.quaternion.copy(l)):l.copy(a.quaternion)})}function qg(n){n.ALL.forEach(e=>e.rotation.set(0,0,0)),n.root.position.set(n.base.x,0,n.base.z),n.root.quaternion.setFromAxisAngle(ku,n.yaw),n.root.userData.air=0}bo.idle=n=>(_t(1,3),_t(-1,3),wt(1,6),wt(-1,6),Tt(1,4,9),Tt(-1,4,9),At(1,14),At(-1,14),B.spine.rotation.x=se(3)+.01*Math.sin(n*1.6),B.head.rotation.x=se(-2),{ground:"all"});function Vu(n,e,t,i,s,r,a){B=n,(n.mode!==e||a)&&(n.blend=n.last?{k:0,from:n.last}:null,n.mode=e),qg(n);let l=(bo[e]||bo.idle)(t,i,s)||{};if(n.blend&&(n.blend.k+=r/.28,n.blend.k>=1?n.blend=null:Wg(n,Gg(n.blend.from,zu(n),Ae(n.blend.k)))),n.spine.rotation.x+=.009*Math.sin(t*1.9+(n.role==="B"?1.3:0)),n.neck.rotation.x+=.006*Math.sin(t*1.9-.6),Xg(n,r,a||!r,!l.hold),n.root.updateMatrixWorld(!0),l.ground!=="none"){let c=1e9;for(let u of n.marks)l.ground==="feet"&&u.kind!=="foot"||l.ground==="knees"&&u.kind!=="knee"||(u.o.getWorldPosition(Bu),c=Math.min(c,Bu.y-u.r));n.root.position.y+=-c}return n.root.position.y+=(n.root.userData.air||0)+(l.lift||0),n.root.updateMatrixWorld(!0),l.post&&(l.post(),n.root.updateMatrixWorld(!0)),n.last=zu(n),l}function Hu(n,e){let t=new Be(e.acc),i=t.clone().multiplyScalar(.35),s=new fn({color:9071178,roughness:.7}),r=new fn({color:2830136,roughness:.45,metalness:.5}),a=new fn({color:i,roughness:.85}),o=new fn({color:t,roughness:.8}),l=d=>(d.castShadow=!0,d.receiveShadow=!0,d),c=new yt;{let d=l(new et(new Qt(.72,.016,1.9),a));d.position.y=.008;let g=l(new et(new Qt(.74,.012,1.92),o));g.position.y=.006,c.add(g,d)}let u=new yt;{let d=l(new et(new Qt(.44,.04,.42),s));d.position.y=.44,u.add(d);for(let[v,m]of[[-1,-1],[1,-1],[-1,1],[1,1]]){let p=l(new et(new vs(.018,.018,.44,10),r));p.position.set(v*.19,.22,m*.18),u.add(p)}let g=l(new et(new Qt(.44,.34,.03),s));g.position.set(0,.68,-.2),u.add(g)}let f=new yt;{let d=l(new et(new yi(.018,1,4,12),r));d.rotation.z=Math.PI/2,d.position.set(0,2.05,0),f.add(d);for(let g of[-1,1]){let v=l(new et(new vs(.03,.03,2.05,12),r));v.position.set(g*.5,1.025,0),f.add(v)}}let h={mat:c,chair:u,bar:f};return Object.values(h).forEach(d=>{d.visible=!1,n.add(d)}),{update(d,g,v){for(let[m,p]of Object.entries(h))p.visible=m===d;if(d&&h[d]){let m=v&&v.propAt||[0,0];h[d].position.set(g.base.x+m[0],0,g.base.z+m[1]),h[d].rotation.y=v&&v.propYaw||0}}}}function uc(n,e,t){let i=document.createElement("canvas");i.width=e,i.height=t,n(i.getContext("2d"),e,t);let s=new Zs(i);return s.colorSpace=Kt,s}var To=class{constructor(e,t){this.canvas=e,this.theme=t;try{this.renderer=new yo({canvas:e,antialias:!0,alpha:!0})}catch(s){throw document.body.insertAdjacentHTML("beforeend",'<div style="position:fixed;inset:0;display:grid;place-items:center;background:#0a0f18;color:#fff;z-index:99;text-align:center;padding:20px">Este dispositivo no soporta WebGL. Abre la p\xE1gina en un navegador actualizado.</div>'),s}let i=this.renderer;i.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),i.shadowMap.enabled=!0,i.shadowMap.type=Vi,i.toneMapping=ir,i.toneMappingExposure=1.12,i.setClearColor(0,0),this.scene=new Xs,this.camera=new Xt(32,1,.1,80),this.scene.add(new er(12571391,1780258,.85)),this.key=new bs(16777215,2.6),this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),Object.assign(this.key.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:.5,far:18}),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.02,this.scene.add(this.key,this.key.target),this.rim=new bs(new Be(t.rim),1.3),this.scene.add(this.rim,this.rim.target),this.buildFloor(),this.props=Hu(this.scene,t),this.cam={az:-40,el:8,dist:3.5,ty:.8,tz:0},this.focus={x:0,z:0},this.scrollZ=0,this.avatar=null,this.look={},this.setAvatar("m",{})}buildFloor(){let e=this.theme,t=uc((r,a,o)=>{for(let c=0;c<8;c++)r.fillStyle=c%2?e.floor[0]:e.floor[1],r.fillRect(0,c*o/8,a,o/8+1);let l=r.getImageData(0,0,a,o);for(let c=0;c<l.data.length;c+=4){let u=(Math.random()-.5)*14;l.data[c]+=u,l.data[c+1]+=u,l.data[c+2]+=u}r.putImageData(l,0,0),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(0,o/2-3,a,6)},512,512);t.wrapS=t.wrapT=fs,t.repeat.set(1,2),t.anisotropy=8,this.floorTex=t;let i=uc((r,a,o)=>{let l=r.createRadialGradient(a/2,o/2,0,a/2,o/2,a/2);l.addColorStop(0,"#fff"),l.addColorStop(.45,"#fff"),l.addColorStop(1,"#000"),r.fillStyle=l,r.fillRect(0,0,a,o)},256,256);i.colorSpace="",this.floor=new et(new vi(16,16),new fn({map:t,alphaMap:i,transparent:!0,roughness:.95,metalness:0})),this.floor.rotation.x=-Math.PI/2,this.floor.receiveShadow=!0,this.scene.add(this.floor);let s=uc((r,a,o)=>{let l=r.createRadialGradient(a/2,o/2,0,a/2,o/2,a/2);l.addColorStop(0,e.acc+"cc"),l.addColorStop(.5,e.acc+"48"),l.addColorStop(1,e.acc+"00"),r.fillStyle=l,r.fillRect(0,0,a,o)},256,256);this.glow=new et(new vi(3.6,3.6),new _i({map:s,transparent:!0,depthWrite:!1,blending:nr,opacity:.6})),this.glow.rotation.x=-Math.PI/2,this.glow.position.y=.004,this.scene.add(this.glow),this.ring=new et(new Ks(.8,.84,72),new _i({color:new Be(e.hi),transparent:!0,opacity:.5,depthWrite:!1})),this.ring.rotation.x=-Math.PI/2,this.ring.position.y=.006,this.scene.add(this.ring)}setTheme(e){for(let t of[this.floor,this.glow,this.ring])this.scene.remove(t),t.geometry.dispose(),t.material.map&&t.material.map.dispose(),t.material.dispose();this.theme=e,this.rim.color.set(e.rim),this.buildFloor()}setAvatar(e,t){this.look=t,this.avatar&&xu(this.avatar,this.scene),this.avatar=_u(this.scene,{x:0,z:0},0,e,t),this.avatar.root.traverse(i=>{i.isMesh&&!i.material.isShaderMaterial&&(i.castShadow=!0)})}recolor(e){this.look=e,yu(this.avatar,e)}resize(){let e=this.canvas.parentElement,t=e.clientWidth,i=e.clientHeight;!t||!i||(this.renderer.setSize(t,i,!1),this.camera.aspect=t/i,this.camera.updateProjectionMatrix())}frame(e){let{dt:t}=e,i=this.avatar;i.base.x=0,i.base.z=0;let s=Vu(i,e.mode,e.t,e.ctx,e.level,Math.min(t,.05),!!e.snap);Mu(i,e.musclesOn?e.muscles:null,.82+.18*Math.sin(e.time/240),this.theme.musc),this.props.update(e.ex&&e.active?e.ex.prop:null,i,s);let r=0,a=0;s.track&&(r=i.root.position.x,a=i.root.position.z),e.snap&&(this.focus.x=r,this.focus.z=a);let o=Math.min(1,Math.min(t,.05)*3.2);this.focus.x+=(r-this.focus.x)*o,this.focus.z+=(a-this.focus.z)*o;let{x:l,z:c}=this.focus;this.floor.position.set(l,0,c),this.glow.position.set(l,.004,c),this.ring.position.set(l,.006,c),this.floorTex.offset.x=l*this.floorTex.repeat.x/16,this.floorTex.offset.y=-this.floorTex.repeat.y*c/16,this.key.position.set(l-3.2,5.2,c+3.6),this.key.target.position.set(l,0,c),this.rim.position.set(l+3.5,2.8,c-3.5),this.rim.target.position.set(l,0,c);let u=e.cam||{az:-38,el:7,dist:3.5,ty:.8},f=e.view&&e.view.az!==null?e.view.az:null,h=Math.sin(e.time/4200)*6,d=(f!==null&&e.active?f:u.az)+e.drag.az+h,g=this.camera.aspect,v=u.dist*(g<1.1?Math.pow(1.1/g,.62):1),m=this.cam,p=Math.min(1,Math.min(t,.05)*3.2);m.az+=(d-m.az)*p,m.el+=(u.el+e.drag.el-m.el)*p,m.dist+=(v-m.dist)*p,m.ty+=(u.ty-m.ty)*p,m.tz+=((u.tz||0)-m.tz)*p;let w=se(m.az),E=se(m.el);return this.camera.position.set(l+Math.sin(w)*Math.cos(E)*m.dist,m.ty+Math.sin(E)*m.dist,c+m.tz+Math.cos(w)*Math.cos(E)*m.dist),this.camera.lookAt(l,m.ty,c+m.tz),this.renderer.render(this.scene,this.camera),s}};var Ls=new U,wo=new U;function Yg(n=.045,e=.27,t=.2){for(let i of[1,-1])gn(i,Pi(i*n,e,t),Ie(i*.9,-.7,0))}Ke("squat",(n,e,t)=>{let i=t.repT,s=n%i/i,r=(t.pause||0)/i,a=t.v,o=0,l=0,c=0;if(a==="jump")s<.38?o=Ae(s/.38)*.75:s<.5?o=.75*(1-Ae((s-.38)/.12)):s<.78?(o=0,l=Math.sin(Math.PI*(s-.5)/.28)):s<.92?o=Ae((s-.78)/.14)*.55:o=.55*(1-Ae((s-.92)/.08)),c=s<.38?it(10,-35,Ae(s/.38)):s<.58?it(-35,150,Ae((s-.38)/.2)):it(150,15,Ae((s-.6)/.3));else{let d=r?.3:.38,g=r?.25:.32;o=Yn(s,d,r+.05,g),c=10+80*o}let u=8+90*o,f=10+104*o;for(let d of[1,-1])_t(d,u,a==="sumo"?16:5),wt(d,f),B.JT.foot[d].rotation.x=se(u-f)+se(40*l),a==="arms"||a==="jump"?(Tt(d,c,6),At(d,6)):a==="goblet"||(Tt(d,20,8),At(d,40));let h=8+30*o;return B.spine.rotation.x=se(h),B.head.rotation.x=-se(h*.8),B.root.userData.air=.22*l,{ground:"all",post(){a==="goblet"&&Yg(.045,.27,.2)}}});Ke("lunge",(n,e,t)=>{let i=t.repT,{r:s,u:r}=cn(n,i),a=t.v,o=s%2?-1:1,l=a==="walk",c=a==="back",u=Ae(r/.2)-Ae((r-.8)/.2),f=Ae((r-.2)/.3)-Ae((r-.6)/.2),h=l?s*.52:0,d=.5,g,v;l?(g=h+.52*Ae(r/.2),v=h+.52*Ae((r-.8)/.2)):c?(g=-d*u,v=0):(g=d*u,v=0);let m=(r<.2?Math.sin(Math.PI*r/.2):r>.8?Math.sin(Math.PI*(r-.8)/.2):0)*.12,p=(g+v)/2,w=.7-.29*f;B.root.position.set(B.base.x,w,B.base.z+p),B.spine.rotation.x=se(6),B.head.rotation.x=se(-4),t.twist&&!c&&(B.spine.rotation.y=o*se(34)*f);for(let b of[1,-1])Tt(b,t.twist?18:6,8),At(b,t.twist?70:10);B.root.updateMatrixWorld(!0);let E=o,M=-o;return Mn(E,Ie(E*.09,.075+m,B.base.z+g),Ie(0,0,1)),Mn(M,Ie(M*.09,.075,B.base.z+v),Ie(0,0,1)),Bt(E,c?55*f:0),Bt(M,c?0:l?r<.8?50*f:0:55*f),{ground:"none",track:l}});Ke("bridge",(n,e,t)=>{let i=t.repT,{r:s,u:r}=cn(n,i),a=t.v,o=(t.pause||0)/i,l;a==="march"?l=Ae(Math.min(1,n%(i*t.n)/1)):l=Yn(r,o?.2:.3,o+.05,o?.2:.26),l=Ye(l,0,1);let c=.11+.2*l,u=Math.asin(Ye((c-.1)/.415,0,.95));B.root.rotation.x=-Math.PI/2-u,B.root.position.set(B.base.x,c,B.base.z+.14),B.head.rotation.x=se(18)*l-u*.4;for(let g of[1,-1])Tt(g,0,16);B.root.updateMatrixWorld(!0);let f=B.base.z+.14,h=f+.38,d=s%2?-1:1;for(let g of[1,-1]){let v=Ie(g*.12,.075,h);if(a==="march"&&g===d&&l>.95&&(v.y+=.22*Math.sin(Math.PI*r),v.z-=.06*Math.sin(Math.PI*r)),a==="single"&&g===d){let m=Ie(g*.09,c+.62*Math.sin(u)*l,f+.62*Math.cos(u)*.98);v.lerp(m,Ae(l))}Mn(g,v,Ie(0,1,.25)),Bt(g,a==="single"&&g===d?20*Ae(l):0)}return{ground:"none"}});Ke("pushup",(n,e,t)=>{let i=t.repT,s=n%i/i,r=t.v,a=(t.pause||0)/i,o;t.slow?o=s<.45?1-Ae(s/.45):s<.55?0:s<.75?Ae((s-.55)/.2):1:a?o=s<.2?1-Ae(s/.2):s<.2+a+.02?0:s<.45+a?Ae((s-.22-a)/.23):1:o=s<.35?1-Ae(s/.35):s<.4?0:s<.75?Ae((s-.4)/.35):1;let l=r==="knees",c=it(l?8:5,l?22:19,o);B.root.rotation.x=se(90-c),B.root.position.z+=-.42,B.head.rotation.x=-se(46);for(let f of[1,-1])l?(_t(f,0,3),wt(f,88),B.JT.foot[f].rotation.x=se(10)):(_t(f,0,3),B.JT.foot[f].rotation.x=se(2));let u=t.wide||.17;return{ground:l?"knees":"feet",post(){for(let f of[1,-1])B.JT.sh[f].updateWorldMatrix(!0,!1),B.JT.sh[f].getWorldPosition(Ls),gn(f,Ie(f*u,.04,Ls.z),Ie(f*.5,0,-1))}}});Ke("plank",(n,e,t)=>{let i=t.v,s=Math.sin(n*2.2),r=i==="knees"?22:i==="forearm"?4:18;B.root.rotation.x=se(90-r+s*.5),B.root.position.z+=-.42,B.head.rotation.x=-se(48);let a=i==="legup"?Math.floor(n/3)%2?-1:1:0,o=i==="legup"?Math.sin(Math.PI*Ye(n%3/3,0,1)):0;for(let l of[1,-1])i==="knees"?(_t(l,0,3),wt(l,88),B.JT.foot[l].rotation.x=se(10)):(_t(l,l===a?-24*o:0,3),B.JT.foot[l].rotation.x=se(2));return{ground:i==="knees"?"knees":"feet",lift:0,post(){let l=i==="tap"?Math.floor(n/2.2)%2?-1:1:0,c=i==="tap"?Math.sin(Math.PI*Ye(n%2.2/2.2,0,1)):0;for(let u of[1,-1])if(B.JT.sh[u].updateWorldMatrix(!0,!1),B.JT.sh[u].getWorldPosition(Ls),u===l&&c>.02){B.JT.sh[-u].getWorldPosition(wo);let f=wo.clone().lerp(Ie(u*.17,.04,Ls.z),1-c);f.y=it(.04,wo.y+.02,c),f.z=it(Ls.z,wo.z+.04,c),gn(u,f,Ie(u*.6,.3,-1))}else gn(u,Ie(u*.17,.04,Ls.z+(i==="forearm"?.2:0)),Ie(u*.5,0,-1))}}});Ke("crunch",(n,e,t)=>{let i=t.repT||3,{u:s}=cn(n,i),r=t.v,a=(t.pause||0)/i;B.root.rotation.x=-Math.PI/2,B.root.position.z+=.14,B.head.rotation.x=se(-6);let o=B.base.z+.14;if(r==="vsit"){B.root.quaternion.setFromAxisAngle(Ie(0,1,0),B.yaw),B.root.position.z=B.base.z;let c=Math.sin(n*2.2)*1.2;B.spine.rotation.x=se(-36+c),B.head.rotation.x=se(32);for(let u of[1,-1])_t(u,118+c,4),wt(u,6),B.JT.foot[u].rotation.x=se(25),Tt(u,82,4),At(u,4);return{ground:"all"}}if(r==="bike"){let c=Math.cos(Math.PI*n/i);B.spine.rotation.x=se(34),B.spine.rotation.y=-se(22)*c,B.head.rotation.x=se(8);for(let u of[1,-1]){let f=u>0?(c+1)/2:(1-c)/2;_t(u,it(40,100,f),4),wt(u,it(6,100,f)),B.JT.foot[u].rotation.x=se(15)}return{ground:"all",post(){for(let u of[1,-1])gn(u,B.head.localToWorld(Ie(u*.14,0,-.09)),Ie(u*.9,.2,0))}}}let l=Yn(s,.35,a+.04,.3);return B.spine.rotation.x=se(38*l),B.head.rotation.x=se(-4+6*l),{ground:"all",post(){for(let u of[1,-1])Mn(u,Ie(u*.12,.075,o+.36),Ie(0,1,.25)),Bt(u,0);let c=Pi(0,.2,.16);for(let u of[1,-1])gn(u,c.clone().add(Ie(u*.07,0,0)),Ie(u*.9,.3,0))}}});Ke("superman",(n,e,t)=>{let i=t.repT||3,s=t.v,r=(t.pause||0)/i;B.root.rotation.x=Math.PI/2,B.root.position.z+=-.12,B.head.rotation.x=se(-4);let a,o=0;if(s==="swim")a=1,o=Math.sin(n*6);else{let{r:c,u}=cn(n,i);a=Yn(u,.3,r+.06,.3),o=s==="alt"?c%2?-1:1:0}let l=s==="swim"?.6:1;for(let c of[1,-1]){let u=a,f=a;s==="alt"&&(u=c===o?a:0,f=-c===o?a:0),s==="swim"&&(u=(c*o+1)/2,f=(-c*o+1)/2),Tt(c,165+32*u*l,6),At(c,0),_t(c,-22*f*l,3),wt(c,0),B.JT.foot[c].rotation.x=se(20)}return B.spine.rotation.x=se(s==="alt"?-10*a:-(s==="swim"?12:20)*a),{ground:"all"}});Ke("jump",(n,e,t)=>{let i=t.v;if(i==="rope"){let E=n*2*Math.PI/.42,M=Math.max(0,Math.sin(E));for(let b of[1,-1])_t(b,6+14*M,2),wt(b,14+26*M),B.JT.foot[b].rotation.x=se(30*M),Tt(b,18,22),At(b,72);return B.JT.el[1].rotation.x=-se(70+12*Math.sin(E)),B.JT.el[-1].rotation.x=-se(70+12*Math.sin(E+1)),B.spine.rotation.x=se(5),B.head.rotation.x=se(-3),B.root.userData.air=.07*M,{ground:"all"}}if(i==="side"){let E=n*2*Math.PI/.8;B.root.position.x+=.26*Math.sin(E);let M=Math.pow(Math.abs(Math.cos(E)),.8);for(let b of[1,-1])_t(b,10+18*(1-M),2),wt(b,18+30*(1-M)),B.JT.foot[b].rotation.x=se(25*M),Tt(b,15+12*M,22),At(b,66);return B.spine.rotation.x=se(10),B.spine.rotation.z=se(-6)*Math.sin(E),B.head.rotation.x=se(-5),B.root.userData.air=.09*M,{ground:"all"}}let s=t.repT,{r,u:a}=cn(n,s),o=i==="broad",l=(t.hold||0)/s,c=0,u=0,f=10,h=.32,d=.42,g=.66,v=.78;if(a<h)c=Ae(a/h)*.8,f=it(10,-35,Ae(a/h));else if(a<d)c=.8*(1-Ae((a-h)/(d-h))),f=it(-35,o?85:160,Ae((a-h)/(d-h)));else if(a<g)u=Math.sin(Math.PI*(a-d)/(g-d)),f=o?it(85,70,(a-d)/(g-d)):165;else if(a<v)c=Ae((a-g)/(v-g))*.62,f=it(o?70:165,40,Ae((a-g)/(v-g)));else if(l&&a<v+l)c=.45,f=40;else{let E=l?v+l:v;c=(l?.45:.62)*(1-Ae((a-E)/(1-E+1e-6))),f=it(40,10,Ae((a-E)/(1-E+1e-6)))}let m=6+82*c,p=8+96*c;for(let E of[1,-1])_t(E,m,4),wt(E,p),B.JT.foot[E].rotation.x=se(m-p)+se(38*u),Tt(E,f,6),At(E,8);let w=6+28*c+(o?10*u:0);if(B.spine.rotation.x=se(w),B.head.rotation.x=-se(w*.7),B.root.userData.air=(o?.3:.26)*u,o){let E=r*.72,M=a<d?0:a<g?Ae((a-d)/(g-d)):1;B.root.position.z+=E+.72*M}return{ground:"all",track:o}});var Gu={id:"fuerza",title:"Fuerza en casa",tagline:"Cuerpo completo \xB7 Sin material",kind:"Fuerza",summary:"Piernas, gl\xFAteos, pecho, core y espalda con tu propio peso. Progresi\xF3n en tres niveles.",icon:'<path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11"/>',material:["Sin material","Esterilla (opcional)"],notice:"Entrenamiento de fuerza general para personas sanas. Calienta unos minutos antes y para si notas dolor. Si tienes una lesi\xF3n o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional. Son pautas generales: no sustituyen a un entrenador.",setName:"Serie",rest:30,theme:{acc:"#1fd1b8",hi:"#8ff0e0",accText:"#04211d",bgA:"#03100f",bgB:"#0b3d38",rim:"#7fe9d8",floor:["#1d2b2a","#162221"],musc:"#ff6b57",look:{top:15659763,topStyle:"tank",bottom:1712420,shoes:2107179},lookF:{top:2085304,topStyle:"bra",bottom:1712420}},exercises:[{name:"Sentadilla",area:"Piernas y gl\xFAteos",mus:["quad","glute","ham","core"],mode:"squat",cam:{az:-80,el:6,dist:3.5,ty:.75},key:["Pies al ancho de hombros, puntas ligeramente abiertas.","Rodillas en l\xEDnea con los pies, sin que se metan hacia dentro.","Pecho arriba, espalda neutra y talones apoyados.","Baja como si te sentaras en una silla."],errors:["Rodillas hacia dentro","Talones levantados","Espalda encorvada"],levels:[{t:"Brazos al frente",d:["Baja hasta que los muslos queden casi paralelos al suelo.","Estira los brazos al frente para mantener el equilibrio."],sets:3,n:10,unit:"rep",repT:4,v:"arms"},{t:"Con pausa abajo",d:["Igual, pero aguanta 2 segundos abajo con la espalda recta.","Sube empujando con todo el pie."],sets:3,n:10,unit:"rep",repT:6,v:"arms",pause:2},{t:"Sentadilla con salto",d:["Baja y salta con fuerza hacia arriba.","Aterriza con suavidad, con las rodillas flexionadas."],sets:4,n:8,unit:"rep",repT:3.4,v:"jump"}]},{name:"Zancadas",area:"Piernas y equilibrio",mus:["quad","glute","ham","abd"],mode:"lunge",cam:{az:-85,el:6,dist:3.9,ty:.72},key:["Paso largo con el tronco erguido.","La rodilla delantera queda sobre el pie, sin pasar de los dedos.","La rodilla de atr\xE1s baja cerca del suelo, sin tocarlo."],errors:["Rodilla delantera hacia dentro","Inclinar el tronco hacia delante","Pasos demasiado cortos"],levels:[{t:"Zancada atr\xE1s alterna",d:["Da un paso largo hacia atr\xE1s y baja con control.","Vuelve a la posici\xF3n inicial y alterna la pierna."],sets:3,n:8,unit:"rep",repT:4.2,v:"back"},{t:"Adelante con giro",d:["Paso largo hacia delante con las manos juntas al pecho.","Abajo, gira el tronco hacia la pierna de delante."],sets:3,n:10,unit:"rep",repT:4.6,v:"fwd",twist:1},{t:"Zancadas caminando",d:["Avanza encadenando una zancada tras otra, sin juntar los pies.","Mant\xE9n el tronco erguido y el paso largo."],sets:3,n:12,unit:"rep",repT:3.6,v:"walk"}]},{name:"Puente de gl\xFAteos",area:"Gl\xFAteos y cadena posterior",mus:["glute","ham","core","lumbar"],mode:"bridge",cam:{az:-85,el:9,dist:3.4,ty:.22},key:["Pies apoyados a la anchura de las caderas.","Sube la cadera apretando los gl\xFAteos, sin arquear la zona lumbar.","Hombros y cabeza relajados en el suelo."],errors:["Arquear la zona lumbar","Empujar solo con las puntas","Rodillas hacia dentro"],levels:[{t:"Puente con dos piernas",d:["Sube la cadera hasta que cuerpo y muslos queden en l\xEDnea.","Baja despacio sin apoyar del todo."],sets:3,n:12,unit:"rep",repT:4,v:"two"},{t:"Pausa arriba",d:["Sube y mant\xE9n 3 segundos apretando los gl\xFAteos.","Baja con control."],sets:3,n:10,unit:"rep",repT:7,v:"two",pause:3},{t:"Puente a una pierna",d:["Estira una pierna y sube solo con la otra.","Cadera nivelada, sin que se caiga a un lado. Alterna la pierna."],sets:3,n:10,unit:"rep",repT:4.2,v:"single"}]},{name:"Flexiones",area:"Pecho, hombros y tr\xEDceps",mus:["chest","delt","tri","core"],mode:"pushup",cam:{az:-86,el:8,dist:3.4,ty:.34},key:["Cuerpo en l\xEDnea recta, de la cabeza a las rodillas o a los talones.","Manos algo m\xE1s anchas que los hombros, codos a unos 45\xB0.","Baja hasta casi tocar el suelo con el pecho."],errors:["Cadera ca\xEDda o levantada","Codos muy abiertos","Recorrido demasiado corto"],levels:[{t:"Con rodillas apoyadas",d:["Apoya las rodillas y mant\xE9n la espalda recta.","Baja el pecho hacia el suelo y empuja para subir."],sets:3,n:8,unit:"rep",repT:4,v:"knees"},{t:"Flexi\xF3n completa",d:["Apoyo en manos y puntas de los pies, cuerpo en tabla.","Baja controlado y sube sin perder la l\xEDnea."],sets:3,n:10,unit:"rep",repT:4.5,v:"full"},{t:"Bajada lenta de 3 s",d:["Baja en tres segundos y sube con fuerza.","Mant\xE9n el abdomen firme todo el tiempo."],sets:4,n:8,unit:"rep",repT:7.5,v:"full",slow:1}]},{name:"Plancha",area:"Core y estabilidad",mus:["core","obl","delt","glute"],mode:"plank",cam:{az:-86,el:8,dist:3.4,ty:.34},key:["Cuerpo recto, gl\xFAteos y abdomen apretados.","Hombros sobre las manos o los codos.","Respira con calma, sin aguantar el aire."],errors:["Cadera ca\xEDda","Cadera demasiado alta","Mirar hacia delante"],levels:[{t:"Apoyando las rodillas",d:["Apoya las rodillas y forma una l\xEDnea de la cabeza a las rodillas.","Aprieta abdomen y gl\xFAteos."],sets:3,n:20,unit:"s",v:"knees"},{t:"Sobre los antebrazos",d:["Codos bajo los hombros y cuerpo en l\xEDnea recta.","Mant\xE9n la posici\xF3n sin que la cadera caiga."],sets:3,n:30,unit:"s",v:"forearm"},{t:"Toque alterno de hombro",d:["Plancha con las manos. Toca un hombro con la mano contraria.","Evita que la cadera se balancee."],sets:3,n:40,unit:"s",v:"tap"}]},{name:"Abdominales",area:"Abdomen",mus:["core","obl"],mode:"crunch",cam:{az:-85,el:12,dist:3.4,ty:.25},key:["Zona lumbar apoyada en el suelo.","Sube con el abdomen, sin tirar del cuello.","Exhala al subir, inhala al bajar."],errors:["Tirar del cuello con las manos","Despegar la zona lumbar","Ir demasiado r\xE1pido"],levels:[{t:"Encogimiento cl\xE1sico",d:["Rodillas dobladas y manos junto a la cabeza.","Despega los hombros del suelo y baja despacio."],sets:3,n:15,unit:"rep",repT:3.6,v:"crunch"},{t:"Bicicleta",d:["Lleva el codo hacia la rodilla contraria, alternando.","Gira con el torso, no solo con los codos."],sets:3,n:20,unit:"rep",repT:2.6,v:"bike"},{t:"Posici\xF3n de barca",d:["Sentado, inclina el tronco atr\xE1s y levanta las piernas.","Brazos al frente y abdomen apretado. Mant\xE9n la posici\xF3n."],sets:3,n:20,unit:"s",v:"vsit"}]},{name:"Superman",area:"Espalda y lumbares",mus:["lumbar","back","glute","delt"],mode:"superman",cam:{az:-85,el:12,dist:3.4,ty:.2},key:["Mirada al suelo y cuello neutro.","Eleva pecho y piernas sin forzar la zona lumbar.","Aprieta los gl\xFAteos en la posici\xF3n alta."],errors:["Mirar hacia delante","Subir demasiado alto","Subir con sacudidas"],levels:[{t:"Brazos y piernas a la vez",d:["Tumbado boca abajo, eleva a la vez brazos, pecho y piernas.","Mant\xE9n un segundo y baja con control."],sets:3,n:10,unit:"rep",repT:5,v:"both"},{t:"Brazo y pierna contrarios",d:["Eleva el brazo derecho con la pierna izquierda, y al rev\xE9s.","Movimiento lento y controlado."],sets:3,n:12,unit:"rep",repT:4,v:"alt"},{t:"Nadador",d:["Con brazos y piernas elevados, bate alternando como si nadaras.","Cuello neutro y abdomen firme."],sets:3,n:30,unit:"s",v:"swim"}]},{name:"Saltos y cardio",area:"Cardio y potencia",mus:["calf","quad","glute","core"],mode:"jump",cam:{az:-60,el:7,dist:4.1,ty:.75},key:["Aterriza siempre suave, con las rodillas flexionadas.","Mant\xE9n el abdomen firme.","Si notas molestias en las rodillas, baja el ritmo."],errors:["Aterrizar con las piernas r\xEDgidas","Rodillas hacia dentro","Saltar demasiado alto"],levels:[{t:"Comba imaginaria",d:["Saltitos ligeros sobre las puntas, como si saltaras a la comba.","Mu\xF1ecas sueltas y codos pegados."],sets:3,n:30,unit:"s",v:"rope"},{t:"Saltos laterales",d:["Salta de lado a lado con los pies juntos.","Aterriza suave y sin perder el equilibrio."],sets:3,n:30,unit:"s",v:"side"},{t:"Salto vertical con brazos",d:["Flexiona, impulsa los brazos y salta lo m\xE1s alto que puedas.","Aterriza suave y repite."],sets:4,n:10,unit:"rep",repT:3.4,v:"vert"}]}]};var yr=.695,$n=-.2,Yi=n=>[n*.09,.05,$n-.3,180,0,-1,1,0],Zn=(n,e=.06,t=1.52,i=.02)=>[n*e,t,i,n*.6,0,-.3],Ao=n=>[n*.03,1.03,.22,n*.9,-.5,-.2],Wu=(n,e=.88,t=0,i=.56)=>[n*i,e,t,n*.3,-.4,-.6],Xu=n=>[n*.17,.045,.27,n*.7,.2,-.6],Eo=n=>{n.py=yr,n.hx=.026,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0]},dc=n=>{n.H[1]=[.16,.045,$n+.44,.6,.3,-.6],n.H[-1]=[-.16,.045,$n+.44,-.6,.3,-.6]},Co=n=>{n.F[1]=[.09,.09,.41,-62,0,1,0,0],n.F[-1]=[-.09,.09,.41,-62,0,1,0,0]},fc=n=>{n.F[1]=[.09,.045,-.28,180,0,-.4,1,0],n.F[-1]=[-.09,.045,-.28,180,0,-.4,1,0]},pc=n=>{n.F[1]=[.09,.045,-.76,180,0,-1,0,0],n.F[-1]=[-.09,.045,-.76,180,0,-1,0,0]},Jt={montana:Le(n=>{n.py=yr,n.H[1]=[.17,.61,.03,.8,-.7,0],n.H[-1]=[-.17,.61,.03,-.8,-.7,0],n.F[1][0]=.075,n.F[-1][0]=-.075}),montanaUp:Le(n=>{n.py=yr,n.H[1]=Zn(1),n.H[-1]=Zn(-1),n.hd=-10,n.lean=-1,n.F[1][0]=.075,n.F[-1][0]=-.075}),tree1:Le(n=>{Eo(n),n.F[1]=[-.005,.1,.03,28,1,.1,.35,0],n.H[1]=Ao(1),n.H[-1]=Ao(-1),n.lean=1}),tree2:Le(n=>{Eo(n),n.F[1]=[0,.26,.02,30,1,.1,.3,0],n.H[1]=Ao(1),n.H[-1]=Ao(-1),n.lean=1}),tree3:Le(n=>{Eo(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=Zn(1,.07,1.5),n.H[-1]=Zn(-1,.07,1.5),n.lean=0,n.hd=-6}),tree4:Le(n=>{Eo(n),n.hx=.03,n.F[1]=[0,.47,.02,30,1,.2,.15,0],n.H[1]=Zn(1,.34,1.44),n.H[-1]=Zn(-1,.34,1.44),n.lean=0,n.hd=-8}),w1:Le(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=Zn(1,.07,1.36,.08),n.H[-1]=Zn(-1,.07,1.36,.08),n.lean=-3,n.hd=-12}),w1p:Le(n=>{n.py=.5,n.hz=.07,n.F[1]=[.11,.075,.35,0,0,0,1,0],n.F[-1]=[-.11,.075,-.31,0,0,0,1,0],n.H[1]=[.03,.86,.22,.9,-.5,-.2],n.H[-1]=[-.03,.86,.22,-.9,-.5,-.2],n.lean=0,n.hd=-2}),w2:Le(n=>{n.py=.44,n.hx=.06,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=Wu(1,.86),n.H[-1]=Wu(-1,.86),n.lean=0,n.hyw=70,n.hd=-2}),w2b:Le(n=>{n.py=.44,n.F[1]=[.36,.075,.02,0,1,0,.2,0],n.F[-1]=[-.41,.075,0,0,-.1,0,1,0],n.H[1]=[.42,.52,.02,.3,-.4,-.6],n.H[-1]=[-.06,1.26,0,-.6,.3,-.3],n.sr=-22,n.hx=.1,n.hyw=30,n.hd=-8}),w3:Le(n=>{n.py=.66,n.hx=.026,n.pp=84,n.lean=4,n.hd=-60,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.06,.7,-.6,0,0,-1,0,0],n.H[1]=[.08,.7,.86,.5,-.2,0],n.H[-1]=[-.08,.7,.86,-.5,-.2,0]}),quad:Le(n=>{n.py=.37,n.hz=$n,n.lean=80,n.hd=-8,n.F[1]=Yi(1),n.F[-1]=Yi(-1),dc(n)}),cat:Le(n=>{n.py=.39,n.hz=$n,n.pp=-10,n.lean=88,n.hd=42,n.F[1]=Yi(1),n.F[-1]=Yi(-1),dc(n)}),cow:Le(n=>{n.py=.35,n.hz=$n,n.pp=10,n.lean=68,n.hd=-36,n.F[1]=Yi(1),n.F[-1]=Yi(-1),dc(n)}),bird:Le(n=>{n.py=.37,n.hz=$n,n.lean=82,n.hd=-12,n.hx=-.025,n.pr=2,n.F[-1]=Yi(-1),n.F[1]=[.09,.4,$n-.64,0,0,-1,0,0],n.H[1]=[.16,.045,$n+.44,.6,.3,-.6],n.H[-1]=[-.11,.47,$n+.86,-.3,1,0]}),dog:Le(n=>{n.py=.62,n.hz=-.08,n.lean=140,n.hd=-2,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]}),plank:Le(n=>{n.py=.36,n.hz=-.03,n.pp=72,n.lean=0,n.hd=-24,n.F[1]=[.09,.18,-.6,70,0,-1,0,0],n.F[-1]=[-.09,.18,-.6,70,0,-1,0,0],n.H[1]=[.16,.045,.4,.6,.3,-.6],n.H[-1]=[-.16,.045,.4,-.6,.3,-.6]}),prone:Le(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=0,n.hd=-8,pc(n),n.H[1]=[.22,.045,.27,.8,.4,-.2],n.H[-1]=[-.22,.045,.27,-.8,.4,-.2]}),cobra:Le(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-34,n.hd=-24,pc(n),n.H[1]=Xu(1),n.H[-1]=Xu(-1)}),cobra2:Le(n=>{n.py=.105,n.hz=-.15,n.pp=90,n.lean=-52,n.hd=-30,pc(n),n.H[1]=[.17,.045,.21,.7,.2,-.6],n.H[-1]=[-.17,.045,.21,-.7,.2,-.6]}),sitL:Le(n=>{n.py=.1,n.hz=-.2,n.lean=-4,n.hd=4,Co(n),n.H[1]=[.21,.045,-.2,.6,.2,-.4],n.H[-1]=[-.21,.045,-.2,-.6,.2,-.4]}),fly:Le(n=>{n.py=.1,n.hz=-.12,n.lean=-2,n.hd=4,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.09,.16,.6,.3,-.5],n.H[-1]=[-.05,.09,.16,-.6,.3,-.5]}),fly2:Le(n=>{n.py=.1,n.hz=-.12,n.lean=32,n.hd=14,n.F[1]=[.035,.06,.14,0,1,.5,0,70],n.F[-1]=[-.035,.06,.14,0,-1,.5,0,-70],n.H[1]=[.05,.08,.17,.6,.3,-.5],n.H[-1]=[-.05,.08,.17,-.6,.3,-.5]}),fold1:Le(n=>{n.py=.1,n.hz=-.2,n.lean=34,n.hd=8,Co(n),n.H[1]=[.1,.14,.22,.5,.6,-.4],n.H[-1]=[-.1,.14,.22,-.5,.6,-.4]}),fold2:Le(n=>{n.py=.1,n.hz=-.2,n.lean=64,n.hd=18,Co(n),n.H[1]=[.1,.11,.37,.5,.6,-.4],n.H[-1]=[-.1,.11,.37,-.5,.6,-.4]}),twist:Le(n=>{n.py=.1,n.hz=-.2,n.lean=2,n.syw=-40,n.hyw=-24,n.hd=2,Co(n),n.H[1]=[.24,.045,-.36,.6,.3,-.5],n.H[-1]=[.12,.18,.08,-.4,-.4,.6]}),kneel:Le(n=>{n.py=.21,n.hz=-.25,n.lean=2,n.hd=2,fc(n),n.H[1]=[.11,.3,-.02,.7,-.3,-.4],n.H[-1]=[-.11,.3,-.02,-.7,-.3,-.4]}),child:Le(n=>{n.py=.2,n.hz=-.25,n.lean=104,n.hd=16,fc(n),n.H[1]=[.13,.045,.53,.6,.5,-.4],n.H[-1]=[-.13,.045,.53,-.6,.5,-.4]}),child2:Le(n=>{n.py=.2,n.hz=-.25,n.lean=108,n.hd=16,fc(n),n.H[1]=[.17,.05,-.26,.6,.6,.2],n.H[-1]=[-.17,.05,-.26,-.6,.6,.2]}),sava:Le(n=>{n.py=.1,n.pp=-90,n.lean=0,n.hd=0,n.F[1]=[.15,.06,.61,-24,0,1,0,0],n.F[-1]=[-.15,.06,.61,-24,0,1,0,0],n.H[1]=[.3,.05,-.06,.6,.3,0],n.H[-1]=[-.3,.05,-.06,-.6,.3,0]}),hugknees:Le(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=12,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.11,.33,-.06,-.7,.2,-.3]}),squatDeep:Le(n=>{n.py=.36,n.hz=-.1,n.lean=22,n.hd=-6,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.07,.42,.3,.2,-.3,-.3],n.H[-1]=[-.07,.42,.3,-.2,-.3,-.3],n.pp=8}),squatPray:Le(n=>{n.py=.36,n.hz=-.1,n.lean=8,n.hd=-4,n.pp=8,n.F[1]=[.2,.075,.02,0,.5,0,1,0],n.F[-1]=[-.2,.075,.02,0,-.5,0,1,0],n.H[1]=[.05,.55,.3,.6,-.2,0],n.H[-1]=[-.05,.55,.3,-.6,-.2,0]}),fwdFold:Le(n=>{n.py=.68,n.hz=-.18,n.pp=80,n.lean=8,n.hd=30,n.F[1][0]=.09,n.F[-1][0]=-.09,n.H[1]=[.12,.2,.18,.6,.4,-.2],n.H[-1]=[-.12,.2,.18,-.6,.4,-.2]}),hamL:Le(n=>{n.py=.66,n.hz=-.16,n.pp=62,n.lean=8,n.hd=12,n.F[1]=[.09,.075,.38,-30,0,1,0,0],n.F[-1]=[-.09,.075,-.28,0,0,0,1,0],n.H[1]=[.1,.42,.34,.6,.2,-.2],n.H[-1]=[-.1,.42,.34,-.6,.2,-.2]}),lungeLow:Le(n=>{n.py=.5,n.hz=.1,n.lean=-2,n.hd=-6,n.F[1]=[.11,.075,.5,0,0,0,1,0],n.F[-1]=[-.11,.075,-.42,0,0,0,1,0],n.H[1]=Zn(1,.08,1.4,.04),n.H[-1]=Zn(-1,.08,1.4,.04)}),figure4:Le(n=>{n.py=.1,n.pp=-90,n.lean=22,n.hd=10,n.F[-1]=[-.09,.2,.15,0,0,1,-1,0],n.F[1]=[.02,.28,.2,0,1,1,0,0],n.H[1]=[.1,.3,-.04,.7,.2,-.3],n.H[-1]=[-.1,.32,.12,-.7,.2,-.3]}),kneetoChest:Le(n=>{n.py=.1,n.pp=-90,n.lean=20,n.hd=10,n.F[1]=[.09,.2,.15,0,0,1,-1,0],n.F[-1]=[-.09,.075,.6,-24,0,1,0,0],n.H[1]=[.11,.33,-.06,.7,.2,-.3],n.H[-1]=[-.15,.05,-.06,-.6,.3,0]})},Jg=new Set(["montana","montanaUp","tree1","tree2","tree3","tree4","w1","w1p","w2","w2b","w3","squatDeep","squatPray","fwdFold","hamL","lungeLow"]),Ro=(n,e,t)=>{let i=si(n,e,t),s=Math.sin(Math.PI*Ye(t,0,1));for(let r of[1,-1]){let a=Math.abs(e.H[r][1]-n.H[r][1]);a>.35&&(i.H[r][0]+=r*.2*s*Math.min(1,a/.7),i.H[r][3]+=r*.4*s)}return i},Zg=(n,e)=>{if(n.length===1)return Jt[n[0]];let t=e*(n.length-1),i=Math.min(n.length-2,Math.floor(t));return Ro(Jt[n[i]],Jt[n[i+1]],Ae(t-i))},$g=n=>{let e=n-Math.floor(n);return e<.5?Ae(e*2):1-Ae((e-.5)*2)};Ke("pose",(n,e,t)=>{let i=e.dur||20,s=Math.min(t.ramp||2.4,i/3.2),r=Ae(n/s)*(1-Ae((n-(i-s))/s))*(t.k||1),a=Array.isArray(t.v)?t.v:[t.v],o=Zg(a,a.length>1?$g(n/(t.cyc||6)):0),l=t.base?Jt[t.base]:Le(()=>{});return!t.bi&&!(e.side>0)&&(o=xr(o),l=xr(l)),Un(Ro(l,o,Ye(r,0,1.2))),{ground:Jg.has(a[0])?"feet":"all"}});Object.assign(Jt,{quadStand:Le(n=>{n.py=yr,n.hx=.026,n.lean=2,n.hd=-2,n.F[-1]=[-.05,.075,0,0,-.12,0,1,0],n.F[1]=[.03,.34,-.28,65,0,-.3,1,0],n.H[1]=[.1,.36,-.3,.6,.6,-1],n.H[-1]=[-.3,.95,.1,-.7,.2,.4]}),chestOpen:Le(n=>{n.py=yr,n.lean=-6,n.hd=-12,n.F[1]=[.1,.075,0,0,.12,0,1,0],n.F[-1]=[-.1,.075,0,0,-.12,0,1,0],n.H[1]=[.12,.66,-.26,.8,-.3,-.7],n.H[-1]=[-.12,.66,-.26,-.8,-.3,-.7]}),wgs1:Le(n=>{n.py=.46,n.hz=.1,n.lean=52,n.hd=-14,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.22,.045,.34,-.8,.3,-.5]}),wgs2:Le(n=>{n.py=.46,n.hz=.1,n.lean=40,n.hd=-14,n.syw=28,n.hyw=20,n.sr=0,n.F[1]=[.13,.075,.5,0,0,0,1,0],n.F[-1]=[-.08,.1,-.5,55,0,.4,1,0],n.H[1]=[.22,.045,.34,.8,.3,-.5],n.H[-1]=[-.3,1.2,0,-.8,.2,.2]}),burpSquat:Le(n=>{n.py=.38,n.hz=.02,n.lean=48,n.hd=-10,n.F[1]=[.12,.075,0,0,.3,0,1,0],n.F[-1]=[-.12,.075,0,0,-.3,0,1,0],n.H[1]=[.18,.045,.32,.6,.3,-.5],n.H[-1]=[-.18,.045,.32,-.6,.3,-.5]}),pikeLow:Le(n=>{n.py=.5,n.hz=.14,n.lean=118,n.hd=-34,n.F[1]=[.1,.075,-.4,0,0,-.3,1,0],n.F[-1]=[-.1,.075,-.4,0,0,-.3,1,0],n.H[1]=[.15,.045,.55,.6,.5,-.3],n.H[-1]=[-.15,.045,.55,-.6,.5,-.3]})});Jt.quadStandR=Jt.quadStand;var ri=Math.PI*2,mc=()=>Le(n=>{n.py=.695,n.F[1][0]=.1,n.F[-1][0]=-.1});Ke("armCircles",(n,e,t)=>{let i=n/t.cyc*ri*(t.dir||1),s=mc(),r=t.r||.42;for(let a of[1,-1]){let o=i+(t.alt&&a<0?Math.PI:0);s.H[a]=[a*.2,1.08+r*Math.cos(o),.02+r*Math.sin(o),a*.9,-.1,0]}return s.lean=2+2*Math.sin(i),s.hd=-2,Un(s),{ground:"feet"}});Ke("hipCircles",(n,e,t)=>{let i=n/t.cyc*ri*(t.dir||1),s=mc(),r=t.r||.05;s.F[1][0]=.15,s.F[-1][0]=-.15,s.py=.68,s.hx=r*Math.cos(i),s.hz=r*Math.sin(i),s.pp=7*Math.sin(i),s.pr=6*Math.cos(i),s.lean=3-5*Math.sin(i),s.sr=-5*Math.cos(i);for(let a of[1,-1])s.H[a]=[a*.2,.84,0,a*1,-.1,-.8];return Un(s),{ground:"feet"}});Ke("torsoRot",(n,e,t)=>{let i=Math.sin(n/t.cyc*ri),s=mc();s.F[1][0]=.14,s.F[-1][0]=-.14,s.syw=(t.amp||55)*i,s.hyw=.6*(t.amp||55)*i,s.pyw=8*i,s.lean=3,Un(s),B.root.updateMatrixWorld(!0);for(let r of[1,-1])gn(r,Pi(r*.52,.27,.05),Ie(r*.5,-.5,-.4));return{ground:"feet"}});Ke("legSwing",(n,e,t)=>{let i=e.side>0?1:-1,s=Math.sin(n/t.cyc*ri),r=t.v==="lateral";return _t(-i,3,0),wt(-i,4),r?(_t(i,2,32*(s*.5+.3)*1.1),wt(i,6)):(_t(i,8+48*s+6,0),wt(i,s<0?10+14*-s:6)),Bt(i,s*12),Bt(-i,0),B.root.position.x+=-i*.015,B.spine.rotation.x=se(2-4*s*(r?0:1)),Tt(1,0,52),Tt(-1,0,52),At(1,8),At(-1,8),{ground:"feet"}});Ke("wgs",(n,e,t)=>{let i=t.cyc||8,s=n%i/i,r=[[0,0,0],[.2,1,0],[.45,1,1],[.7,1,0],[.88,1,0],[1,0,0]],[a,o]=hn(r,s),l=si(Jt.lungeLow,Jt.wgs1,Ye(a,0,1)),c=si(l,Jt.wgs2,Ye(o,0,1));return e.side>0||(c=xr(c)),Un(c),{ground:"all"}});Ke("jacks",(n,e,t)=>{let i=t.repT||.9,s=n%i/i,r=ac(s),a=Math.abs(Math.sin(s*ri))*(t.hop??.05);for(let o of[1,-1])_t(o,4,3+24*r),wt(o,6+8*(1-r)),Bt(o,0),Tt(o,0,it(8,t.half?100:165,r)),At(o,6);return B.spine.rotation.x=se(3),B.root.userData.air=a,{ground:"all"}});Ke("highKnees",(n,e,t)=>{let i=t.repT||.5,s=n/i*ri;for(let r of[1,-1]){let a=Math.max(0,Math.sin(s+(r>0?0:Math.PI))),o=Math.sin(s+(r>0?Math.PI:0));_t(r,6+(t.h||92)*a,3),wt(r,8+84*a),Bt(r,14*a),Tt(r,38*o,8),At(r,95)}return B.spine.rotation.x=se(5),B.head.rotation.x=se(-4),B.root.userData.air=.035*Math.abs(Math.sin(s)),{ground:"all"}});Ke("kicks",(n,e,t)=>{let i=t.repT||.6,s=n/i*ri;for(let r of[1,-1]){let a=Math.max(0,Math.sin(s+(r>0?0:Math.PI))),o=Math.sin(s+(r>0?Math.PI:0));_t(r,-6*a+4,3),wt(r,8+125*a),Bt(r,-20*a),Tt(r,28*o,8),At(r,85)}return B.spine.rotation.x=se(8),B.root.userData.air=.035*Math.abs(Math.sin(s)),{ground:"all"}});Ke("skater",(n,e,t)=>{let i=t.repT||1.6,s=n/i*ri,r=Math.sin(s),a=.34,o=a*r;B.root.position.x+=o;let l=Math.cos(s)>0?1:-1,c=Math.abs(Math.cos(s));return B.root.userData.air=.07*(1-Math.abs(r))*.9,B.spine.rotation.x=se(18),B.spine.rotation.z=se(-10*r),B.head.rotation.x=se(-8),B.root.position.y=0,{ground:"none",post(){let u=.58+.04*(1-Math.abs(r))-.05*(1-c);B.root.position.y=u+(B.root.userData.air||0),B.root.updateMatrixWorld(!0);for(let f of[1,-1]){let h=(f*r+1)/2,d=Ae(Ye((h-.5)/.4,0,1)),g=[B.base.x+f*a,.075,B.base.z],v=[B.base.x+o-f*.14,.17+.05*(1-d),B.base.z-.3],m=Ie(it(v[0],g[0],d),it(v[1],g[1],d),it(v[2],g[2],d));Mn(f,m,Ie(0,.3,1)),Bt(f,0),gn(f,Pi(-f*r*.3+f*.05,.12,.26+.1*-f*r),Ie(f*.8,-.6,0))}}}});Ke("mountain",(n,e,t)=>{let i=t.repT||.8,s=n/i*ri;B.root.rotation.x=se(72),B.root.position.z+=-.42,B.root.position.y=.378,B.head.rotation.x=-se(46);for(let a of[1,-1]){let o=Math.max(0,Math.sin(s+(a>0?0:Math.PI)));_t(a,4+(t.h||78)*o,3),wt(a,6+88*o),B.JT.foot[a].rotation.x=se(2+10*o)}return{ground:"none",post:()=>{for(let a of[1,-1]){B.JT.sh[a].updateWorldMatrix(!0,!1);let o=B.JT.sh[a].getWorldPosition(Ie());gn(a,Ie(a*.17,.04,o.z),Ie(a*.5,0,-1))}}}});var qu={times:[0,.12,.28,.4,.5,.64,.78,.92,1],poses:["montana","burpSquat","plank","plank","burpSquat","montanaUp","montana","montana","montana"]};Ke("burpee",(n,e,t)=>{let i=t.repT||3.6,s=n%i/i,r=qu.times,a=0;for(;a<r.length-2&&s>r[a+1];)a++;let o=Ae(Ye((s-r[a])/(r[a+1]-r[a]),0,1)),l=qu.poses;t.noPush&&(l=l),Un(Ro(Jt[l[a]],Jt[l[a+1]],o));let c=Ye((s-.58)/.2,0,1);return B.root.userData.air=s>.58&&s<.78?.26*Math.sin(Math.PI*c):0,{ground:"all"}});var vr={az:-50,el:6,dist:3.9,ty:.85};var bt=(n,e,t,i={})=>({n,rest:e,sets:t,unit:"s",...i}),Yu={id:"hiit",title:"HIIT sin material",tagline:"Cardio intenso \xB7 Intervalos",kind:"HIIT",summary:"Intervalos de alta intensidad: trabaja fuerte, descansa justo y repite. Quema mucho en poco tiempo.",icon:'<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',material:["Sin material","Calzado deportivo"],notice:"Entrenamiento de alta intensidad. Calienta antes, hidr\xE1tate y para si notas mareo, dolor en el pecho o dolor articular. Si tienes problemas cardiovasculares, lesiones o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional. Pautas generales.",setName:"Ronda",rest:30,theme:{acc:"#3b82ff",hi:"#8ab8ff",accText:"#ffffff",bgA:"#050a18",bgB:"#0f2a6b",rim:"#8ab8ff",floor:["#1a2133","#131a28"],musc:"#d6ff3d",look:{top:3900159,topStyle:"tank",bottom:1185052,shoes:15921906},lookF:{top:14090045,topStyle:"bra",bottom:1185052,shoes:15921906}},exercises:[{name:"Jumping jacks",area:"Cardio total",mus:["delt","calf","abd","quad"],mode:"jacks",cam:vr,key:["Abre brazos y piernas a la vez.","Aterriza suave sobre la punta de los pies.","Mant\xE9n el abdomen firme."],errors:["Aterrizar con los talones","Brazos flojos","Aguantar la respiraci\xF3n"],levels:[{t:"Ligeros",d:["Brazos hasta la altura de los hombros."],...bt(20,40,2),repT:1,half:1},{t:"Completos",d:["Brazos por encima de la cabeza."],...bt(30,30,3),repT:.8},{t:"R\xE1pidos",d:["Ritmo alto sin perder amplitud."],...bt(40,20,3),repT:.65}]},{name:"Rodillas altas",area:"Cardio y core",mus:["quad","core","calf"],mode:"highKnees",cam:vr,key:["Sube las rodillas hasta la cadera.","Brazos activos a 90\xB0.","Tronco alto, cuello relajado."],errors:["Inclinarte hacia atr\xE1s","Pasos cortos","Talones pegados"],levels:[{t:"Marcha r\xE1pida",d:["Rodillas a media altura."],...bt(20,40,2),repT:.7,h:60},{t:"Rodillas altas",d:["Rodillas a la altura de la cadera."],...bt(30,30,3),repT:.55},{t:"Carrera en el sitio",d:["M\xE1xima velocidad con rodillas altas."],...bt(40,20,3),repT:.42}]},{name:"Sentadilla con salto",area:"Piernas explosivas",mus:["quad","glute","calf"],mode:"squat",cam:{...vr,az:-75},key:["Baja con la espalda recta.","Salta explosivo y estira todo el cuerpo.","Aterriza suave con las rodillas flexionadas."],errors:["Rodillas hacia dentro","Aterrizaje r\xEDgido","Poca profundidad"],levels:[{t:"Sentadilla r\xE1pida",d:["Sentadilla sin salto a buen ritmo."],...bt(20,40,2),repT:2,v:"arms",n:20,unit:"s"},{t:"Con salto",d:["Salta al subir y aterriza suave."],...bt(30,30,3),repT:2.6,v:"jump"},{t:"Salto potente",d:["M\xE1xima altura, aterriza y repite."],...bt(40,20,3),repT:2.2,v:"jump"}]},{name:"Mountain climbers",area:"Core y cardio",mus:["core","delt","quad"],mode:"mountain",cam:{az:-80,el:8,dist:4.2,ty:.4},key:["Manos bajo los hombros, cuerpo recto.","Lleva las rodillas al pecho alternando.","Cadera baja y estable."],errors:["Cadera alta","Manos adelantadas","Pasos descoordinados"],levels:[{t:"Lentos",d:["Alterna las rodillas con control."],...bt(20,40,2),repT:1.1},{t:"A ritmo",d:["M\xE1s velocidad con cadera estable."],...bt(30,30,3),repT:.8},{t:"R\xE1pidos",d:["Velocidad m\xE1xima sin perder la forma."],...bt(40,20,3),repT:.55}]},{name:"Patinador",area:"Piernas laterales",mus:["glute","abd","quad","obl"],mode:"skater",cam:{az:10,el:6,dist:4.2,ty:.8},key:["Salta de lado a lado.","La pierna libre pasa por detr\xE1s.","Aterriza con la rodilla flexionada."],errors:["Saltos muy cortos","Rodilla hacia dentro","Tronco erguido"],levels:[{t:"Pasos laterales",d:["Desplazamientos laterales sin salto."],...bt(20,40,2),repT:2.2},{t:"Patinador",d:["Saltos laterales amplios."],...bt(30,30,3),repT:1.6},{t:"Patinador r\xE1pido",d:["Ritmo alto con aterrizajes estables."],...bt(40,20,3),repT:1.2}]},{name:"Burpees",area:"Cuerpo completo",mus:["chest","quad","core","delt"],mode:"burpee",cam:{az:-80,el:8,dist:4.4,ty:.6},key:["Manos al suelo y salta atr\xE1s a la plancha.","Cuerpo recto en la plancha.","Vuelve y salta arriba."],errors:["Cadera ca\xEDda","Saltar sin control","Espalda redondeada"],levels:[{t:"Sin salto",d:["Ritmo lento y controlado."],...bt(20,40,2),repT:4.2},{t:"Completos",d:["Con salto al final."],...bt(30,30,3),repT:3.6},{t:"R\xE1pidos",d:["Mant\xE9n la t\xE9cnica al ritmo m\xE1ximo."],...bt(40,20,3),repT:3}]},{name:"Talones al gl\xFAteo",area:"Isquios y cardio",mus:["ham","calf","glute"],mode:"kicks",cam:vr,key:["Lleva el tal\xF3n al gl\xFAteo.","Rodillas hacia abajo, tronco recto.","Brazos alternos."],errors:["Subir las rodillas","Inclinarte hacia delante","Pasos cortos"],levels:[{t:"Suaves",d:["Ritmo moderado."],...bt(20,40,2),repT:.8},{t:"A ritmo",d:["Lleva el tal\xF3n al gl\xFAteo con velocidad."],...bt(30,30,3),repT:.6},{t:"R\xE1pidos",d:["Velocidad m\xE1xima."],...bt(40,20,3),repT:.45}]},{name:"Comba imaginaria",area:"Coordinaci\xF3n y gemelos",mus:["calf","delt","quad"],mode:"jump",cam:{...vr,az:-70},key:["Saltos peque\xF1os sobre la punta de los pies.","Mu\xF1ecas giran, codos pegados.","Mira al frente."],errors:["Saltar demasiado alto","Codos abiertos","Talones al suelo"],levels:[{t:"Suave",d:["Saltos peque\xF1os y regulares."],...bt(20,40,2),v:"rope"},{t:"A ritmo",d:["M\xE1s velocidad y ligereza."],...bt(30,30,3),v:"rope"},{t:"Intenso",d:["Velocidad m\xE1xima y saltos ligeros."],...bt(40,20,3),v:"rope"}]}]};var Kg=[[0,0],[.16,-.1],[.34,1],[.5,1],[.74,.05],[1,0]],jg=[[0,0,0],[.2,.8,0],[.4,1,0],[.52,1,0],[.78,.1,0],[1,0,0]],Qg=[[0,.12,.4,.26],[.2,.4,.39,.06],[.4,.05,.4,.33],[.52,.05,.4,.33],[.78,.12,.4,.26],[1,.12,.4,.26]],e_=[[0,-.12,.38,.21],[.2,-.4,.39,.02],[.4,-.05,.4,.31],[.52,-.05,.4,.31],[.78,-.12,.38,.21],[1,-.12,.38,.21]],t_=[[0,.12,.4,.26],[.22,.12,.1,.2],[.44,.06,.5,.33],[.58,.06,.5,.33],[.82,.12,.4,.26],[1,.12,.4,.26]],n_=[[0,-.12,.38,.21],[.22,-.12,.08,.16],[.44,-.06,.5,.31],[.58,-.06,.5,.31],[.82,-.12,.38,.21],[1,-.12,.38,.21]],i_=[[0,0],[.22,1],[.44,-.3],[.6,-.3],[.85,0],[1,0]],s_=[[0,0],[.3,1],[.62,1],[1,0]],Ju={J:1,C:-1,LH:1,RH:-1,UL:1,UR:-1};function Mr(n,e,t){let i=hn(s_,t)[0];if(e==="slipL"||e==="slipR"){let s=e==="slipL"?1:-1;n.hx+=s*.13*i,n.roll+=s*14*i,n.py-=.03*i,n.yaw+=s*-8*i,n.lean+=4*i}else if(e==="duck")n.py-=.17*i,n.lean+=28*i,n.hd+=6*i,n.lf[2]+=.04*i,n.rf[2]-=.02*i;else if(e==="cover"){n.py-=.05*i,n.lean+=14*i,n.hz-=.03*i;for(let s of[1,-1])n.hand[s]={l:[s*.085*(1-.3*i)+s*.035*(1-i),.4+.14*i,.24],pole:Ie(s*.15,-1,-.35)};n.hd+=8*i}}function r_(n,e,t){let i=hn(Kg,t)[0],s=hn(jg,t)[0],r=Math.sin(Math.PI*Ye(t,0,1));if(e==="J")n.hand[1]={str:i},n.yaw+=9*i,n.lean+=4*i,n.hz+=.03*i,n.py-=.015*i,n.lf[2]+=.02*i;else if(e==="C")n.hand[-1]={str:i},n.yaw+=52*i,n.syaw+=8*i,n.lean+=5*i,n.hz+=.06*i,n.py-=.02*i,n.rf[3]+=28*i,n.rf[1]+=.03*i;else if(e==="LH"||e==="RH"){let a=Ju[e],o=hn(a===1?Qg:e_,t);n.hand[a]={l:o,pole:Is(a).lerp(Ie(a,.5,-.25),r)},a===1?(n.yaw+=-38*s,n.syaw+=-6*s,n.lf[3]+=18*s,n.hz+=.03*s):(n.yaw+=70*s,n.syaw+=8*s,n.rf[3]+=26*s,n.rf[1]+=.03*s,n.hz+=.04*s),n.lean+=3*s,n.py-=.015*s}else if(e==="UL"||e==="UR"){let a=Ju[e];n.hand[a]={l:hn(a===1?t_:n_,t),pole:Ie(a*.3,-1,.1)};let o=hn(i_,t)[0];n.py-=.05*o,n.lean+=8*o,n.yaw+=(a===1?-14:24)*(1-Math.abs(o))*Math.max(0,s||r),n.hz+=.02*r}else e==="SL"?Mr(n,"slipL",t):e==="SR"?Mr(n,"slipR",t):e==="D"?Mr(n,"duck",t):e==="K"&&Mr(n,"cover",t)}var Zu={fb:[[0,0,0,0,0],[.18,0,.2,0,0],[.34,0,.2,0,.2],[.5,0,.2,0,.2],[.64,0,.2,0,0],[.8,0,0,0,0],[1,0,0,0,0]],side:[[0,0,0,0,0],[.16,.22,0,0,0],[.3,.22,0,.22,0],[.5,.22,0,.22,0],[.66,0,0,.22,0],[.8,0,0,0,0],[1,0,0,0,0]],box:[[0,0,0,0,0],[.1,0,.18,0,0],[.2,0,.18,0,.18],[.3,.2,.18,0,.18],[.4,.2,.18,.2,.18],[.5,.2,0,.2,.18],[.6,.2,0,.2,0],[.7,0,0,.2,0],[.8,0,0,0,0],[1,0,0,0,0]],shuffle:[[0,0,0,0,0],[.12,0,.12,0,0],[.24,0,.12,0,.12],[.36,0,0,0,.12],[.48,0,0,0,0],[.6,0,-.1,0,0],[.72,0,-.1,0,-.1],[.84,0,0,0,-.1],[1,0,0,0,0]]};Ke("guard",(n,e,t)=>{let i=gr(),s=t.v,r=t.f||1,a=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.8*a,i.py+=.004*a,s==="bounce"){let o=Math.sin(n*2*Math.PI*r),l=Math.sin(n*2*Math.PI*r+Math.PI);i.py+=.018*Math.abs(o)-.01,i.lf[1]+=.03*Math.max(0,o),i.rf[1]+=.03*Math.max(0,l),i.hz+=.008*o,i.hand[1]={l:[.115+.01*o,.4+.012*Math.abs(o),.27],pole:Is(1)},i.hand[-1]={l:[-.12-.01*o,.38+.012*Math.abs(l),.21],pole:Is(-1)}}else if(s==="shift"){let o=Math.sin(n*2*Math.PI/(t.repT||3));i.hx+=.045*o,i.hz+=.05*o,i.py-=.015*Math.abs(o),i.roll+=3*o,i.lf[1]+=.02*Math.max(0,o),i.rf[1]+=.02*Math.max(0,-o),i.yaw+=6*o}return _r(i),{ground:"none"}});Ke("foot",(n,e,t)=>{let i=gr(),s=t.repT,r=n%s/s,a=hn(Zu[t.v],r),o=hn(Zu[t.v],Math.min(1,r+.012)),l=(h,d)=>Math.hypot(o[h]-a[h],o[d]-a[d]),c=.09*Ae(Ye(l(0,1)/.004,0,1)),u=.09*Ae(Ye(l(2,3)/.004,0,1)),f=Math.sin(n*2*Math.PI*(t.f||1.6));return i.lf[0]+=a[0],i.lf[2]+=a[1],i.rf[0]+=a[2],i.rf[2]+=a[3],i.lf[1]+=c,i.rf[1]+=u,i.hx+=(a[0]+a[2])/2,i.hz+=(a[1]+a[3])/2,i.py+=.008*f-.004,i.lean+=2*(a[1]+a[3])*5,i.roll+=-10*(a[0]+a[2]),_r(i),{ground:"none"}});Ke("combo",(n,e,t)=>{let i=gr(),s=t.seq,r=t.pt,a=Math.floor(n/r),o=a%s.length,l=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.6*l,i.py+=.008*Math.sin(n*2*Math.PI*1.4),t.bounce){let u=Math.sin(n*2*Math.PI*1.6);i.lf[1]+=.02*Math.max(0,u),i.rf[1]+=.02*Math.max(0,-u)}let c=s[o];return c&&r_(i,c,(n-a*r)/r),_r(i),{ground:"none"}});Ke("dodge",(n,e,t)=>{let i=gr(),s=t.repT,r=n%s/s,a=Math.sin(n*2*Math.PI/3.2);if(i.lean+=.6*a,t.v==="weave"){let o=hn([[0,0],[.14,1],[.3,1],[.5,0],[.7,-1],[.86,-1],[1,0]],r)[0],l=hn([[0,0],[.14,.5],[.3,1],[.5,1],[.7,1],[.86,.5],[1,0]],r)[0];i.hx+=o*.12,i.roll+=o*14,i.py-=.13*l,i.lean+=22*l,i.yaw+=o*-8}else Mr(i,t.v,r);return _r(i),{ground:"none"}});var Ii={az:62,el:6,dist:3.4,ty:.95},bn=(n,e=.55)=>({seq:n,pt:e,repT:+(n.length*e).toFixed(2)}),$u={id:"boxeo",title:"Boxeo de sombra",tagline:"Cardio y coordinaci\xF3n \xB7 Sin material",kind:"Boxeo",summary:"Golpes, esquivas y juego de pies contra un rival imaginario. Quema calor\xEDas y descarga la cabeza.",icon:'<path d="M7 9h8a3 3 0 0 1 3 3v3a4 4 0 0 1-4 4H9a3 3 0 0 1-3-3V9zM6 12H4m2-6h6"/>',material:["Sin material","Espacio libre de 2 m"],notice:"Golpea al aire sin bloquear del todo codos y rodillas. Pisa con firmeza y deja espacio libre alrededor. Si tienes lesiones de hombro, mu\xF1eca o espalda, o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional.",setName:"Asalto",rest:30,theme:{acc:"#e0293f",hi:"#ff8493",accText:"#ffffff",bgA:"#150407",bgB:"#4a0d18",rim:"#ff7a8a",floor:["#2a1a1d","#1f1214"],musc:"#ffc400",look:{top:14690623,topStyle:"tank",bottom:1316378,shoes:15921906,gloves:14690623,band:15921906},lookF:{top:1316378,topStyle:"bra",bottom:1316378,shoes:15921906,gloves:14690623,band:14690623}},exercises:[{name:"Guardia y rebote",area:"Calentamiento",mus:["calf","quad","delt"],mode:"guard",cam:Ii,key:["Pies al ancho de hombros, uno adelantado.","Pu\xF1os a la altura de la mejilla, codos pegados.","Barbilla baja y rodillas flexibles.","Rebota sobre la punta de los pies."],errors:["Bajar las manos","Pies demasiado juntos","Talones pegados al suelo"],levels:[{t:"Rebote suave",d:["Peque\xF1os botes ligeros manteniendo la guardia."],sets:2,n:30,unit:"s",v:"bounce",f:1.3,rest:20},{t:"Rebote r\xE1pido",d:["Botes m\xE1s r\xE1pidos y ligeros con la guardia alta."],sets:3,n:30,unit:"s",v:"bounce",f:1.8,rest:20},{t:"Rebote y cambio de peso",d:["Bota r\xE1pido y desplaza el peso de una pierna a otra."],sets:3,n:45,unit:"s",v:"bounce",f:2.2,rest:20}]},{name:"Juego de pies",area:"Desplazamiento",mus:["quad","glute","calf","abd"],mode:"foot",cam:Ii,key:["Mueve primero el pie m\xE1s cercano a la direcci\xF3n.","No cruces nunca los pies.","Mant\xE9n siempre la misma distancia entre ellos."],errors:["Cruzar los pies","Dar pasos demasiado largos","Subirte demasiado"],levels:[{t:"Adelante y atr\xE1s",d:["Un paso adelante y otro atr\xE1s, sin cruzar los pies."],sets:3,n:8,unit:"rep",repT:3,v:"fb"},{t:"Lateral",d:["Pasos laterales, un pie detr\xE1s del otro sin cruzarlos."],sets:3,n:10,unit:"rep",repT:3,v:"side"},{t:"Cuadrado",d:["Dibuja un cuadrado con los pies: adelante, lado, atr\xE1s, lado."],sets:3,n:10,unit:"rep",repT:4,v:"box"}]},{name:"Directos",area:"Jab y cruzado",mus:["delt","tri","chest","core"],mode:"combo",cam:Ii,key:["El jab sale recto y vuelve r\xE1pido a la guardia.","En el cruzado gira cadera y pie trasero.","Aprieta el pu\xF1o solo en el impacto."],errors:["Dejar caer la otra mano","Golpear solo con el brazo","Bloquear el codo"],levels:[{t:"Jab",d:["Lanza la mano adelantada en l\xEDnea recta y vuelve.","Gira un poco el cuerpo."],sets:3,n:20,unit:"rep",...bn(["J"],1)},{t:"Jab \u2013 cruzado",d:["Jab y cruzado seguidos.","Gira cadera y pie en el cruzado."],sets:3,n:14,unit:"rep",...bn(["J","C",null],.7)},{t:"Jab \u2013 jab \u2013 cruzado",d:["Dos jabs r\xE1pidos y cruzado fuerte.","Vuelve siempre a la guardia."],sets:4,n:14,unit:"rep",...bn(["J","J","C",null],.5),bounce:1}]},{name:"Ganchos",area:"Tronco y hombros",mus:["obl","core","delt","glute"],mode:"combo",cam:Ii,key:["Codo a 90\xB0, el pu\xF1o no se mueve de lado a lado: gira el cuerpo.","El gancho sale desde el pie y la cadera.","La otra mano protege la cara."],errors:["Abrir el brazo en c\xEDrculo","Hombro ca\xEDdo","Pierna r\xEDgida"],levels:[{t:"Gancho adelantado",d:["Gancho con la mano de delante, gira el tronco."],sets:3,n:12,unit:"rep",...bn(["LH",null],.8)},{t:"Gancho \u2013 gancho",d:["Gancho con una mano y luego con la otra.","Cambia el peso con cada golpe."],sets:3,n:12,unit:"rep",...bn(["LH","RH",null],.65)},{t:"Jab \u2013 cruzado \u2013 gancho",d:["Jab, cruzado y gancho adelantado.","La cl\xE1sica 1-2-3."],sets:4,n:12,unit:"rep",...bn(["J","C","LH",null],.55),bounce:1}]},{name:"Uppercuts",area:"Piernas y core",mus:["quad","glute","core","bic"],mode:"combo",cam:Ii,key:["Flexiona las rodillas y sube empujando el suelo.","El pu\xF1o sube en vertical, cerca del cuerpo.","Codo pegado a las costillas."],errors:["Golpear desde el brazo","Doblar la espalda","Sacar el codo"],levels:[{t:"Uppercut trasero",d:["Baja un poco y sube con la mano de atr\xE1s."],sets:3,n:12,unit:"rep",...bn(["UR",null],.8)},{t:"Uppercut doble",d:["Alterna uppercut delantero y trasero."],sets:3,n:14,unit:"rep",...bn(["UL","UR",null],.65)},{t:"Gancho \u2013 uppercut",d:["Gancho adelantado y uppercut trasero.","Una combinaci\xF3n corta y dura."],sets:4,n:14,unit:"rep",...bn(["LH","UR",null],.6),bounce:1}]},{name:"Esquivas",area:"Defensa y reflejos",mus:["quad","glute","core","obl"],mode:"dodge",cam:{...Ii,ty:.92},key:["Esquiva moviendo el cuerpo desde las rodillas.","Las manos siguen arriba protegiendo la cara.","Mira siempre al frente."],errors:["Bajar las manos","Girar la cara","Esquivar demasiado lejos"],levels:[{t:"Esquiva lateral",d:["Inclina el cuerpo a un lado y vuelve."],sets:3,n:12,unit:"rep",repT:2.6,v:"slipL"},{t:"Agacharse",d:["Baja las rodillas y el tronco como si pasara un golpe."],sets:3,n:12,unit:"rep",repT:2.8,v:"duck"},{t:"P\xE9ndulo",d:["Esquiva en U a un lado y al otro sin parar."],sets:4,n:10,unit:"rep",repT:3.6,v:"weave"}]},{name:"Combinaciones",area:"Cardio y coordinaci\xF3n",mus:["delt","core","quad","glute"],mode:"combo",cam:Ii,key:["Respira al golpear, exhalando por la boca.","Alterna ataque y defensa.","Mant\xE9n los pies vivos entre golpes."],errors:["Contener la respiraci\xF3n","Quedarte parado","Golpes sin guardia"],levels:[{t:"1-2 y esquiva",d:["Jab, cruzado y esquiva lateral."],sets:3,n:12,unit:"rep",...bn(["J","C","SL",null],.6),bounce:1},{t:"1-2-3 y defensa",d:["Jab, cruzado, gancho y agacharse."],sets:4,n:12,unit:"rep",...bn(["J","C","LH","D",null],.55),bounce:1},{t:"Cadena larga",d:["Jab, cruzado, gancho, uppercut, esquiva y cubrirse.","Ritmo constante."],sets:4,n:10,unit:"rep",...bn(["J","C","LH","UR","SR","K",null],.5),bounce:1}]},{name:"Asalto final",area:"Todo a tope",mus:["delt","core","quad","glute","calf"],mode:"combo",cam:Ii,key:["\xDAltimo asalto: ritmo alto pero t\xE9cnica limpia.","Respira y mant\xE9n la guardia.","Termina fuerte."],errors:["Perder la guardia por cansancio","Golpes sin giro de cadera"],levels:[{t:"Asalto ligero",d:["Jabs y cruzados r\xE1pidos durante 30 segundos."],sets:2,n:30,unit:"s",seq:["J","J","C",null,"LH","RH",null],pt:.4,bounce:1,rest:20},{t:"Asalto medio",d:["Combinaciones continuas durante 45 segundos."],sets:3,n:45,unit:"s",seq:["J","C","LH","RH","UL","UR"],pt:.38,bounce:1,rest:20},{t:"Asalto m\xE1ximo",d:["Ritmo alto, 60 segundos sin parar."],sets:3,n:60,unit:"s",seq:["J","J","C","LH","RH","UL","UR","SL","SR","D"],pt:.33,bounce:1,rest:25}]}]};var Po=.46;function Io(n,e=0){let t=e+.06,i=Math.max(.2,1-t);return Yn(n,i*.52,t,i*.48)}Ke("chairDip",(n,e,t)=>{let i=t.repT,{u:s}=cn(n,i),r=Io(s,(t.pause||0)/i),a=Le(o=>{o.py=it(.47,.2,r),o.hz=.1-.01*r,o.lean=it(-4,4,r),o.hd=-4,o.pp=it(-6,-12,r);let l=t.v==="bent"?.4:.55;if(o.F[1]=[.1,.075,l,0,0,1,0,0],o.F[-1]=[-.1,.075,l,0,0,1,0,0],t.v==="legup"){let u=Yn(s,.3,.3,.3);o.F[1]=[.1,it(.075,.28,u),.5,0,0,1,0,0]}let c=Po+.015;o.H[1]=[.2,c,-.15,.6,.2,-1],o.H[-1]=[-.2,c,-.15,-.6,.2,-1]});return Un(a),{ground:"none",propAt:[0,-.3],propYaw:0}});Ke("incline",(n,e,t)=>{let i=t.repT,{u:s}=cn(n,i),r=Io(s,(t.pause||0)/i),a=it(34,48,r);B.root.rotation.x=se(90-a),B.root.position.z+=-.4,B.head.rotation.x=-se(46);for(let l of[1,-1])_t(l,0,3),B.JT.foot[l].rotation.x=se(2);let o={ground:"feet",propYaw:Math.PI,propAt:[0,.4],post(){for(let l of[1,-1]){B.JT.sh[l].updateWorldMatrix(!0,!1);let c=B.JT.sh[l].getWorldPosition(Ie());gn(l,Ie(l*.2,Po+.03,c.z),Ie(l*.5,0,-1)),o.propAt=[0,c.z-B.base.z]}}};return o});Ke("pike",(n,e,t)=>{let i=t.repT,{u:s}=cn(n,i),r=Io(s,(t.pause||0)/i),a=(t.feet,0);return Un(si(Jt.dog,Jt.pikeLow,r)),{ground:"all"}});Ke("bulgarian",(n,e,t)=>{let i=t.repT,{u:s}=cn(n,i),r=Io(s,(t.pause||0)/i),a=e.side>0?1:-1,o=it(.665,.42,r);B.root.position.set(B.base.x,o,B.base.z+it(-.05,.03,r)),B.spine.rotation.x=se(it(4,22,r)),B.head.rotation.x=se(-8);for(let l of[1,-1])t.arms==="chest"?(Tt(l,70,6),At(l,120)):(Tt(l,4+20*r,10),At(l,18));return B.root.updateMatrixWorld(!0),Mn(a,Ie(B.base.x+a*.1,.075,B.base.z+.36),Ie(0,.3,1)),Bt(a,0),Mn(-a,Ie(B.base.x-a*.1,Po+.085,B.base.z-.6),Ie(0,.3,1)),B.JT.foot[-a].rotation.x=se(40),{ground:"none",propAt:[0,-.62],propYaw:0}});Ke("stepUp",(n,e,t)=>{let i=t.repT,{r:s,u:r}=cn(n,i),a=s%2?-1:1,o=Ae(Ye(r/.35,0,1))*(1-Ae(Ye((r-.6)/.32,0,1))),l=t.knee?Ae(Ye((r-.35)/.15,0,1))*(1-Ae(Ye((r-.5)/.15,0,1))):0,c=.7-.04+.44*o;B.root.position.set(B.base.x,c,B.base.z+.3*o),B.spine.rotation.x=se(8+6*(1-o)),B.head.rotation.x=se(-6),B.root.updateMatrixWorld(!0);let u=B.base.z+.42,f=Ae(Ye(r/.18,0,1))*(1-Ae(Ye((r-.78)/.18,0,1)));Mn(a,Ie(B.base.x+a*.1,it(.075+.1*Math.sin(Math.PI*Ye(r/.2,0,1)),Po+.085,f),it(B.base.z+.05,u,f)),Ie(0,.3,1)),Bt(a,0);let h=Ae(Ye((r-.3)/.25,0,1))*(1-Ae(Ye((r-.55)/.3,0,1))),d=B.base.z+.3*o;Mn(-a,Ie(B.base.x-a*.1,.075+(t.knee?.55:.18)*h,d+.1*h-.05*(1-o)),Ie(0,.3,1)),Bt(-a,0);for(let g of[1,-1])Tt(g,t.knee?40*(g===-a?1:-.5)*h:10+20*o,10),At(g,t.knee?80:20);return{ground:"none",propAt:[0,.42],propYaw:Math.PI}});Ke("legRaise",(n,e,t)=>{let i=t.repT,{u:s}=cn(n,i),r=Yn(s,.4,(t.pause||0)/i+.05,.4);B.root.rotation.x=-Math.PI/2,B.root.position.z+=.14,B.head.rotation.x=se(-6+(t.crunch?10:0)),t.crunch&&(B.spine.rotation.x=se(24*r));let a=t.bent?70:0;for(let o of[1,-1])_t(o,it(t.low?12:22,92,r),3),wt(o,a*(1-r*.4)),B.JT.foot[o].rotation.x=se(40),Tt(o,0,14),At(o,0);return{ground:"all"}});var Ku={id:"calistenia",title:"Calistenia en casa",tagline:"Fuerza funcional \xB7 Una silla",kind:"Calistenia",summary:"Fondos, flexiones, sentadillas a una pierna y core con tu peso corporal y una silla estable.",icon:'<path d="M5 20V8l4 3 3-6 3 6 4-3v12M5 20h14"/>',material:["Una silla estable","Esterilla (opcional)"],notice:"Usa una silla estable apoyada contra una pared y sobre suelo antideslizante. Cuida hombros, mu\xF1ecas y rodillas: si notas dolor, para. Si tienes una lesi\xF3n o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional.",setName:"Serie",rest:40,theme:{acc:"#7ddc3c",hi:"#b7f088",accText:"#0c1e03",bgA:"#07110a",bgB:"#1c4511",rim:"#a8ee70",floor:["#1e2a1d","#162116"],musc:"#ff3dac",look:{top:8248380,topStyle:"tank",bottom:1316892,shoes:15790320},lookF:{top:1316892,topStyle:"bra",bottom:1316892,shoes:8248380}},exercises:[{name:"Fondos en silla",area:"Tr\xEDceps y hombros",mus:["tri","delt","chest"],mode:"chairDip",prop:"chair",cam:{az:-80,el:6,dist:3.8,ty:.55},key:["Manos en el borde de la silla, dedos hacia delante.","Baja flexionando los codos hacia atr\xE1s.","Hombros lejos de las orejas."],errors:["Codos hacia fuera","Caer hacia delante","Bajar demasiado"],levels:[{t:"Rodillas flexionadas",d:["Pies cerca de la silla, rodillas a 90\xB0."],sets:3,n:8,unit:"rep",repT:4,v:"bent"},{t:"Piernas estiradas",d:["Estira las piernas y apoya los talones."],sets:3,n:10,unit:"rep",repT:4,v:"straight"},{t:"Una pierna elevada",d:["Eleva una pierna estirada durante la serie.","Controla el descenso."],sets:3,n:10,unit:"rep",repT:4.6,v:"legup",pause:1}]},{name:"Flexiones inclinadas",area:"Pecho y tr\xEDceps",mus:["chest","tri","delt","core"],mode:"incline",prop:"chair",cam:{az:-80,el:6,dist:3.8,ty:.6},key:["Manos en la silla algo m\xE1s anchas que los hombros.","Cuerpo en l\xEDnea de cabeza a talones.","Baja el pecho hacia el asiento."],errors:["Cadera ca\xEDda","Codos muy abiertos","Cuello adelantado"],levels:[{t:"Manos en la silla",d:["Cuerpo recto, baja el pecho al asiento."],sets:3,n:8,unit:"rep",repT:4.2},{t:"Con pausa",d:["Pausa de 2 s abajo."],sets:3,n:10,unit:"rep",repT:5.8,pause:2},{t:"Lento 4-1-1",d:["Baja en 3 segundos y sube r\xE1pido."],sets:4,n:10,unit:"rep",repT:6,pause:1}]},{name:"Flexi\xF3n en pica",area:"Hombros",mus:["delt","tri","chest","core"],mode:"pike",cam:{az:-75,el:8,dist:4,ty:.5},key:["Cadera alta formando una V invertida.","Baja la cabeza entre las manos.","Codos hacia atr\xE1s, cerca del cuerpo."],errors:["Cadera baja","Codos abiertos","Apoyar la cabeza"],levels:[{t:"Pica suave",d:["Baja un poco y sube con control."],sets:3,n:6,unit:"rep",repT:4.4},{t:"Pica completa",d:["Baja hasta rozar el suelo con la frente."],sets:3,n:8,unit:"rep",repT:4.6},{t:"Pica con pausa",d:["Aguanta 2 segundos abajo."],sets:4,n:8,unit:"rep",repT:6.2,pause:2}]},{name:"Sentadilla b\xFAlgara",area:"Piernas y gl\xFAteos",mus:["quad","glute","ham","abd"],mode:"bulgarian",sides:"Pierna",prop:"chair",cam:{az:-75,el:6,dist:4,ty:.65},key:["Pie de atr\xE1s apoyado en la silla.","El paso delantero lo bastante largo para que la rodilla no pase de los dedos.","Baja recto, sin inclinar de m\xE1s el tronco."],errors:["Paso demasiado corto","Rodilla hacia dentro","Perder la silla"],levels:[{t:"Controlada",d:["Baja hasta que el muslo quede casi paralelo."],sets:4,n:8,unit:"rep",repT:4,arms:"chest"},{t:"Con pausa",d:["Pausa de 2 s abajo."],sets:4,n:8,unit:"rep",repT:6,pause:2},{t:"Lenta y profunda",d:["Baja en 3 segundos y sube con fuerza."],sets:4,n:10,unit:"rep",repT:6.4,pause:1}]},{name:"Subidas a la silla",area:"Piernas y equilibrio",mus:["quad","glute","ham"],mode:"stepUp",prop:"chair",cam:{az:-80,el:6,dist:4.1,ty:.8},key:["Pisa con todo el pie en el centro del asiento.","Sube empujando con la pierna de arriba.","Baja con control, sin dejarte caer."],errors:["Impulsarte con la pierna de abajo","Rodilla hacia dentro","Asiento inestable"],levels:[{t:"Alternando",d:["Sube y baja alternando pierna."],sets:3,n:12,unit:"rep",repT:3.6},{t:"Con rodilla arriba",d:["Al subir, eleva la otra rodilla."],sets:3,n:12,unit:"rep",repT:4,knee:1},{t:"Lentas",d:["Sube y baja en 4 segundos."],sets:4,n:12,unit:"rep",repT:5,knee:1}]},{name:"Plancha din\xE1mica",area:"Core y hombros",mus:["core","delt","chest","obl"],mode:"plank",cam:{az:-80,el:8,dist:4.2,ty:.4},key:["Cuerpo recto de cabeza a talones.","Aprieta gl\xFAteos y abdomen.","No hundas los hombros."],errors:["Cadera ca\xEDda","Cadera muy alta","Aguantar la respiraci\xF3n"],levels:[{t:"Plancha antebrazos",d:["Aguanta con los antebrazos apoyados."],sets:3,n:30,unit:"s",v:"forearm"},{t:"Plancha con toques",d:["Toca el hombro contrario sin girar la cadera."],sets:3,n:30,unit:"s",v:"tap"},{t:"Plancha con pierna",d:["Eleva una pierna alternando."],sets:3,n:40,unit:"s",v:"legup"}]},{name:"Elevaci\xF3n de piernas",area:"Abdomen bajo",mus:["core","quad"],mode:"legRaise",prop:"mat",cam:{az:-78,el:8,dist:3.8,ty:.3},key:["Espalda baja pegada al suelo.","Sube las piernas hasta la vertical.","Baja despacio sin tocar el suelo."],errors:["Arquear la lumbar","Subir con impulso","Doblar las rodillas de m\xE1s"],levels:[{t:"Rodillas flexionadas",d:["Sube las piernas con las rodillas dobladas."],sets:3,n:10,unit:"rep",repT:4,bent:1},{t:"Piernas rectas",d:["Sube y baja las piernas estiradas."],sets:3,n:10,unit:"rep",repT:4.4},{t:"Bajada profunda",d:["Baja casi al suelo y pausa 1 s."],sets:4,n:10,unit:"rep",repT:5.4,low:1,pause:1,crunch:1}]}]};var Fn=(n,e=3.7,t=.85,i=6)=>({az:n,el:i,dist:e,ty:t}),zt=(n,e={})=>({v:n,...e}),ju={id:"movilidad",title:"Movilidad y estiramientos",tagline:"Calentar y soltar \xB7 Sin material",kind:"Movilidad",summary:"Calentamiento din\xE1mico para activar articulaciones y estiramientos para cerrar el entrenamiento. Ideal a diario.",icon:'<path d="M12 3v4m0 0a4 4 0 1 0 0 .01M5 21l4-6h6l4 6M9 15l-1-4m7 4 1-4"/>',material:["Sin material","Esterilla (opcional)"],notice:"Mu\xE9vete con suavidad dentro de tu rango c\xF3modo: un estiramiento debe notarse, nunca doler. No rebotes. Si tienes una lesi\xF3n o una condici\xF3n m\xE9dica, cons\xFAltalo antes con un profesional. Son pautas generales.",setName:"Serie",rest:8,theme:{acc:"#f5b73b",hi:"#ffd983",accText:"#2a1c02",bgA:"#140e03",bgB:"#4a3208",rim:"#ffd77a",floor:["#2a2418","#201b12"],musc:"#9b7bff",look:{top:16103227,topStyle:"tee",bottom:1711396,shoes:15658734},lookF:{top:16103227,topStyle:"bra",bottom:1711396,shoes:15658734}},exercises:[{name:"C\xEDrculos de brazos",area:"Hombros",mus:["delt","back"],mode:"armCircles",cam:Fn(-40),key:["C\xEDrculos grandes y controlados.","Hombros lejos de las orejas.","Cambia el sentido a mitad."],errors:["Ir demasiado r\xE1pido","Encoger los hombros","Arquear la espalda"],levels:[{t:"Hacia delante",d:["C\xEDrculos amplios hacia delante con ambos brazos."],sets:2,n:15,unit:"s",cyc:3,dir:1,r:.34},{t:"Delante y atr\xE1s",d:["15 s hacia delante y otros 15 hacia atr\xE1s."],sets:2,n:20,unit:"s",cyc:2.5,dir:1,r:.4},{t:"Alternos y grandes",d:["Brazos alternos, un c\xEDrculo grande cada 2 s."],sets:2,n:30,unit:"s",cyc:2,dir:-1,r:.44,alt:1}]},{name:"Rotaci\xF3n de tronco",area:"Columna dorsal",mus:["obl","back"],mode:"torsoRot",cam:Fn(25,3.6,.9),key:["Pies firmes, la cadera casi quieta.","Gira desde el pecho, con brazos en cruz.","Mira hacia donde giras."],errors:["Girar las rodillas","Rebotar","Inclinarse hacia delante"],levels:[{t:"Giro suave",d:["Gira hasta donde sea c\xF3modo."],sets:2,n:20,unit:"s",cyc:3.5,amp:40},{t:"Giro amplio",d:["Gira m\xE1s y respira de forma constante."],sets:2,n:30,unit:"s",cyc:3,amp:55},{t:"Giro r\xE1pido",d:["Un poco m\xE1s de ritmo sin perder el control."],sets:2,n:40,unit:"s",cyc:2.4,amp:62}]},{name:"C\xEDrculos de cadera",area:"Cadera y lumbar",mus:["abd","obl","lumbar"],mode:"hipCircles",cam:Fn(-35,3.5,.8),key:["Manos en la cintura, pies al ancho de hombros.","Dibuja c\xEDrculos con la pelvis.","Mant\xE9n los hombros quietos."],errors:["Mover los hombros","C\xEDrculos demasiado peque\xF1os","Bloquear las rodillas"],levels:[{t:"C\xEDrculos lentos",d:["Un c\xEDrculo cada 4 segundos."],sets:2,n:20,unit:"s",cyc:4,dir:1,r:.045},{t:"C\xEDrculos amplios",d:["M\xE1s recorrido y fluidez."],sets:2,n:30,unit:"s",cyc:3.2,dir:-1,r:.06},{t:"Amplios en ambos sentidos",d:["Cambia de sentido a mitad."],sets:2,n:40,unit:"s",cyc:3,dir:1,r:.07}]},{name:"Balanceo de piernas",area:"Cadera y isquios",mus:["ham","quad","abd","glute"],mode:"legSwing",sides:"Pierna",cam:Fn(-75,3.7,.8),key:["Ap\xF3yate en una pared o silla si lo necesitas.","Balancea la pierna como un p\xE9ndulo.","Tronco erguido."],errors:["Balanceo brusco","Doblar el tronco","Girar la cadera"],levels:[{t:"Adelante y atr\xE1s",d:["Balancea la pierna adelante y atr\xE1s."],sets:2,n:15,unit:"s",cyc:2.2,v:"fb"},{t:"M\xE1s amplitud",d:["Aumenta el recorrido gradualmente."],sets:2,n:20,unit:"s",cyc:1.9,v:"fb"},{t:"Laterales",d:["Balancea la pierna de un lado a otro delante del cuerpo."],sets:2,n:20,unit:"s",cyc:2,v:"lateral"}]},{name:"Estocada con rotaci\xF3n",area:"Cadera, tor\xE1cica e isquios",mus:["quad","glute","obl","back"],mode:"wgs",sides:"Pierna",cam:Fn(-60,4,.55,8),key:["Paso largo, rodilla de delante sobre el tobillo.","Apoya las manos y baja la cadera.","Gira abriendo el brazo hacia el techo y mira la mano."],errors:["Rodilla hacia dentro","Paso corto","Girar solo el cuello"],levels:[{t:"Lenta",d:["Un ciclo cada 10 segundos."],sets:2,n:30,unit:"s",cyc:10},{t:"Fluida",d:["Ritmo constante, un ciclo cada 8 s."],sets:2,n:40,unit:"s",cyc:8},{t:"Con pausa",d:["Aguanta cada giro 2 respiraciones."],sets:2,n:48,unit:"s",cyc:12}]},{name:"Sentadilla profunda",area:"Tobillos, cadera y espalda",mus:["quad","glute","add","calf"],mode:"pose",cam:Fn(-70,3.6,.55,6),key:["Pies algo m\xE1s anchos que los hombros, puntas abiertas.","Pecho alto, manos juntas al centro.","Empuja las rodillas hacia fuera con los codos."],errors:["Talones levantados","Espalda encorvada","Rodillas hacia dentro"],levels:[{t:"Hasta donde puedas",d:["Baja sin dolor y sube. Ay\xFAdate con las manos si hace falta."],sets:2,n:20,unit:"s",...zt(["montana","squatPray"],{cyc:8,bi:1})},{t:"Con pausa",d:["Aguanta abajo respirando lento."],sets:2,n:30,unit:"s",...zt(["squatPray","squatDeep"],{cyc:10,bi:1})},{t:"Profunda sostenida",d:["Mantente abajo abriendo la cadera con los codos."],sets:2,n:40,unit:"s",...zt("squatPray",{bi:1,k:1})}]},{name:"Cu\xE1driceps de pie",area:"Muslo y cadera",mus:["quad"],mode:"pose",sides:"Pierna",cam:Fn(-75,3.6,.85),key:["Agarra el pie y lleva el tal\xF3n al gl\xFAteo.","Rodillas juntas y pelvis neutra.","Ap\xF3yate si pierdes el equilibrio."],errors:["Arquear la espalda","Separar las rodillas","Tirar con fuerza"],levels:[{t:"20 segundos",d:["Mant\xE9n suave la postura."],sets:2,n:20,unit:"s",...zt("quadStand")},{t:"30 segundos",d:["Aumenta el tiempo respirando lento."],sets:2,n:30,unit:"s",...zt("quadStand")},{t:"40 segundos",d:["Pelvis neutra y rodillas juntas."],sets:2,n:40,unit:"s",...zt("quadStand")}]},{name:"Flexi\xF3n adelante",area:"Isquios y espalda",mus:["ham","back","lumbar"],mode:"pose",cam:Fn(-75,3.7,.65,6),key:["Flexiona ligeramente las rodillas.","Cuelga el tronco soltando cuello y brazos.","Respira hacia la espalda baja."],errors:["Rebotar","Bloquear las rodillas","Forzar con los brazos"],levels:[{t:"Cuelga suave",d:["Deja caer el tronco con las rodillas flexionadas."],sets:2,n:25,unit:"s",...zt(["montana","fwdFold"],{cyc:14,bi:1})},{t:"Cuelga y respira",d:["Aguanta abajo y suelta la espalda con cada exhalaci\xF3n."],sets:2,n:35,unit:"s",...zt("fwdFold",{bi:1})},{t:"Por pierna",d:["Estira una pierna al frente con el tal\xF3n apoyado."],sets:2,n:30,unit:"s",...zt("hamL")}]},{name:"Apertura de pecho",area:"Pecho y hombros",mus:["chest","delt"],mode:"pose",cam:Fn(-30,3.6,.9),key:["Manos entrelazadas detr\xE1s de la espalda.","Abre el pecho y baja los hombros.","Mant\xE9n el abdomen firme."],errors:["Arquear la lumbar","Subir los hombros","Mirar al techo"],levels:[{t:"Suave",d:["Entrelaza las manos atr\xE1s y abre el pecho."],sets:2,n:20,unit:"s",...zt("chestOpen",{bi:1})},{t:"Sostenida",d:["Aguanta con respiraci\xF3n lenta."],sets:2,n:30,unit:"s",...zt("chestOpen",{bi:1})},{t:"M\xE1s tiempo",d:["Mant\xE9n los hombros abajo."],sets:2,n:40,unit:"s",...zt("chestOpen",{bi:1})}]},{name:"Figura 4 tumbado",area:"Gl\xFAteos y cadera",mus:["glute","abd"],mode:"pose",sides:"Pierna",cam:Fn(-70,3.8,.35,10),key:["Tumbado, cruza el tobillo sobre la rodilla opuesta.","Tira del muslo hacia ti.","Mant\xE9n la cabeza apoyada."],errors:["Forzar la rodilla","Levantar la cabeza","Contener la respiraci\xF3n"],levels:[{t:"Suave",d:["Cruza la pierna y respira."],sets:2,n:25,unit:"s",...zt(["hugknees","figure4"],{cyc:12})},{t:"Sostenida",d:["Tira un poco m\xE1s del muslo."],sets:2,n:35,unit:"s",...zt("figure4")},{t:"Profunda",d:["Ll\xE9vala al pecho y mant\xE9n la espalda baja apoyada."],sets:2,n:45,unit:"s",...zt("figure4")}]},{name:"Flexor de cadera",area:"Cadera y psoas",mus:["quad","glute"],mode:"pose",sides:"Pierna",cam:Fn(-65,4,.6),key:["Rodilla de atr\xE1s cerca del suelo.","Aprieta el gl\xFAteo de atr\xE1s.","Tronco alto y pelvis neutra."],errors:["Arquear la lumbar","Rodilla delantera hacia dentro"],levels:[{t:"Zancada baja",d:["Baja la cadera hacia delante con el tronco recto."],sets:2,n:25,unit:"s",...zt("lungeLow")},{t:"Con brazos arriba",d:["Sube los brazos para estirar todo el costado."],sets:2,n:35,unit:"s",...zt(["lungeLow","w1"],{cyc:10})},{t:"Sostenida",d:["Aguanta con respiraci\xF3n profunda."],sets:2,n:45,unit:"s",...zt("lungeLow")}]}]};var Li=(n,e=3.7,t=.8,i=6)=>({az:n,el:i,dist:e,ty:t}),Qu={id:"yoga",title:"Yoga flow",tagline:"Equilibrio y calma \xB7 Esterilla",kind:"Yoga",summary:"Posturas cl\xE1sicas guiadas con respiraci\xF3n. Para soltar tensi\xF3n, ganar equilibrio y cerrar bien el d\xEDa.",icon:'<path d="M12 4a2 2 0 1 0 0 .01M12 8v5m0 0-4 6m4-6 4 6M6 11l6-1 6 1"/>',material:["Esterilla","Ropa c\xF3moda"],notice:"Mu\xE9vete dentro de tu rango: nunca fuerces ni rebotes y sal de la postura si notas dolor agudo. Si est\xE1s embarazada o tienes una lesi\xF3n o condici\xF3n m\xE9dica, consulta antes con un profesional. Son pautas generales.",setName:"Lado",rest:8,theme:{acc:"#9b7bff",hi:"#cbbcff",accText:"#140a33",bgA:"#0a0716",bgB:"#2a1a5e",rim:"#b9a5ff",floor:["#241f35","#1a1727"],musc:"#ff7a59",look:{top:10189823,topStyle:"tank",bottom:1907499,barefoot:!0},lookF:{top:15986428,topStyle:"bra",bottom:1907499,barefoot:!0}},exercises:[{name:"Monta\xF1a y respiraci\xF3n",area:"Postura y calma",mus:["core","quad","glute"],mode:"pose",cam:Li(-35,3.7,.85),prop:"mat",key:["Pies al ancho de la cadera, peso repartido.","Inhala subiendo los brazos; exhala baj\xE1ndolos.","Hombros relajados y mirada al frente."],errors:["Hombros tensos","Bloquear las rodillas","Aguantar la respiraci\xF3n"],levels:[{t:"Respiraci\xF3n 4\u20134",d:["Sube los brazos al inhalar durante 4 tiempos.","B\xE1jalos al exhalar otros 4."],sets:1,n:40,unit:"s",v:["montana","montanaUp"],cyc:8,bi:1},{t:"Respiraci\xF3n 5\u20135",d:["Alarga cada fase de la respiraci\xF3n a 5 tiempos.","Mant\xE9n las costillas recogidas."],sets:1,n:60,unit:"s",v:["montana","montanaUp"],cyc:10,bi:1},{t:"Respiraci\xF3n 6\u20136",d:["Respiraci\xF3n lenta: 6 tiempos al subir y 6 al bajar.","Siente todo el cuerpo alargarse."],sets:1,n:90,unit:"s",v:["montana","montanaUp"],cyc:12,bi:1}]},{name:"Postura del \xE1rbol",area:"Equilibrio",mus:["glute","quad","core"],mode:"pose",sides:"Pierna",cam:Li(-35,3.7,.85),prop:"mat",key:["Fija la mirada en un punto.","Planta del pie sobre el tobillo o la pantorrilla, nunca en la rodilla.","Empuja el pie contra la pierna y crece hacia arriba."],errors:["Apoyar el pie en la rodilla","Cadera desplazada","Mirar al suelo"],levels:[{t:"Pie en el tobillo",d:["Apoya los dedos del pie junto al tobillo.","Manos juntas al pecho."],sets:2,n:20,unit:"s",v:"tree1",ramp:2},{t:"Pie en la pantorrilla",d:["Sube el pie a la cara interna de la pantorrilla.","Manos al pecho y respira lento."],sets:2,n:30,unit:"s",v:"tree2",ramp:2},{t:"Brazos arriba",d:["Pie en el muslo, lejos de la rodilla.","Eleva los brazos y abre las manos al cielo."],sets:2,n:40,unit:"s",v:["tree3","tree4"],cyc:12,ramp:2.5}]},{name:"Guerrero I y II",area:"Piernas y hombros",mus:["quad","glute","delt"],mode:"pose",sides:"Pierna",cam:Li(-20,4,.7),prop:"mat",key:["Rodilla delantera sobre el tobillo.","Pelvis estable y pecho abierto.","Hombros lejos de las orejas."],errors:["Rodilla hacia dentro","Zancada demasiado corta","Espalda arqueada"],levels:[{t:"Guerrero I suave",d:["Paso largo, rodilla delantera flexionada.","Brazos arriba y mirada al frente."],sets:2,n:25,unit:"s",v:["w1p","w1"],cyc:10,ramp:2},{t:"Guerrero II",d:["Gira el torso al frente, brazos en cruz.","Mira por encima de la mano delantera."],sets:2,n:30,unit:"s",v:"w2",ramp:2.5},{t:"Flujo I \u2192 II",d:["Alterna entre guerrero I y II con la respiraci\xF3n.","Mant\xE9n la zancada profunda."],sets:2,n:45,unit:"s",v:["w1","w2"],cyc:12,ramp:2.5}]},{name:"Perro, plancha y cobra",area:"Fuerza y espalda",mus:["delt","core","back","tri"],mode:"pose",cam:Li(-70,4,.5,8),prop:"mat",key:["Empuja el suelo con las manos, dedos abiertos.","En el perro, lleva el pecho hacia los muslos.","En la cobra, codos pegados y hombros lejos de las orejas."],errors:["Hundir la cadera en la plancha","Hombros hacia las orejas","Cuello comprimido en la cobra"],levels:[{t:"Perro boca abajo",d:["Cadera arriba y atr\xE1s, rodillas flexibles.","Talones hacia el suelo sin forzar."],sets:2,n:20,unit:"s",v:"dog",bi:1,ramp:2.5},{t:"Perro \u2192 plancha",d:["Cambia entre perro y plancha con la respiraci\xF3n.","Cuerpo en l\xEDnea en la plancha."],sets:2,n:30,unit:"s",v:["dog","plank"],cyc:8,bi:1,ramp:2.5},{t:"Perro, plancha, cobra",d:["Flujo completo: perro, plancha y cobra.","Inhala al abrir pecho, exhala al volver."],sets:2,n:40,unit:"s",v:["dog","plank","cobra"],cyc:12,bi:1,ramp:2.5}]},{name:"Gato y vaca",area:"Movilidad de columna",mus:["back","core"],mode:"pose",cam:Li(-80,3.8,.4,8),prop:"mat",key:["Manos bajo los hombros y rodillas bajo la cadera.","Inhala abriendo el pecho (vaca).","Exhala redondeando toda la espalda (gato)."],errors:["Mover solo el cuello","Ir demasiado r\xE1pido","Codos bloqueados"],levels:[{t:"Lento y suave",d:["Un ciclo cada 8 segundos.","Mueve v\xE9rtebra a v\xE9rtebra."],sets:1,n:40,unit:"s",v:["cat","cow"],cyc:8,bi:1,ramp:2},{t:"Ritmo de respiraci\xF3n",d:["Sincroniza cada movimiento con una respiraci\xF3n completa."],sets:1,n:60,unit:"s",v:["cat","cow"],cyc:6,bi:1,ramp:2},{t:"Con pausas",d:["Mant\xE9n 2 respiraciones en cada extremo.","M\xE1s recorrido, m\xE1s control."],sets:1,n:80,unit:"s",v:["cat","cow"],cyc:8,bi:1,ramp:2}]},{name:"P\xE1jaro-perro",area:"Core y equilibrio",mus:["core","glute","back"],mode:"pose",sides:"Lado",cam:Li(-80,4,.45,8),prop:"mat",key:["Caderas niveladas, sin girar.","Extiende brazo y pierna contrarios.","Mant\xE9n el cuello largo mirando al suelo."],errors:["Cadera girada","Arquear la zona lumbar","Elevar la pierna demasiado"],levels:[{t:"Solo pierna",d:["Estira solo la pierna atr\xE1s.","Mant\xE9n el abdomen firme."],sets:2,n:20,unit:"s",v:["quad","bird"],cyc:8,k:.85,ramp:2},{t:"Brazo y pierna",d:["Extiende brazo y pierna contrarios.","Pausa de 2 s arriba."],sets:2,n:30,unit:"s",v:["quad","bird"],cyc:8,ramp:2},{t:"Codo a rodilla",d:["Estira y luego lleva codo y rodilla.","Controla el movimiento."],sets:2,n:40,unit:"s",v:["quad","bird"],cyc:6,ramp:2}]},{name:"Pinza sentado y torsi\xF3n",area:"Isquios y columna",mus:["ham","back"],mode:"pose",cam:Li(-80,4,.35,8),prop:"mat",key:["Si\xE9ntate alto y alarga la espalda.","Pliega desde la cadera, no desde la lumbar.","Respira lento."],errors:["Encorvar la espalda","Tirar con los brazos","Contener la respiraci\xF3n"],levels:[{t:"Pinza suave",d:["Rodillas flexionadas si hace falta.","Manos hacia las piernas."],sets:1,n:30,unit:"s",v:["sitL","fold1"],cyc:10,bi:1,ramp:2},{t:"Pinza profunda",d:["Baja un poco m\xE1s sin redondear.","Mira hacia los pies."],sets:1,n:40,unit:"s",v:["sitL","fold2"],cyc:12,bi:1,ramp:2},{t:"Pinza y torsi\xF3n",d:["Alterna pinza y torsi\xF3n suave.","Cuida la respiraci\xF3n."],sets:2,n:30,unit:"s",v:["fold1","twist"],cyc:10,ramp:2,sides:"Lado"}]},{name:"Postura del ni\xF1o y relajaci\xF3n",area:"Calma final",mus:["back"],mode:"pose",cam:Li(-70,4,.3,10),prop:"mat",key:["Respira hacia la espalda baja.","Suelta mand\xEDbula y hombros.","Cierra los ojos."],errors:["Aguantar el cuerpo","Apretar la mand\xEDbula"],levels:[{t:"Ni\xF1o",d:["Rodillas separadas, frente al suelo.","Brazos adelante o junto al cuerpo."],sets:1,n:40,unit:"s",v:["child"],bi:1,ramp:3},{t:"Ni\xF1o \u2192 relajaci\xF3n",d:["Pasa del ni\xF1o a tumbarte boca arriba."],sets:1,n:60,unit:"s",v:["child2","hugknees"],cyc:14,bi:1,ramp:3},{t:"Savasana",d:["Tumbado boca arriba, brazos y piernas sueltos.","Escanea el cuerpo y suelta cada zona."],sets:1,n:120,unit:"s",v:["hugknees","sava"],cyc:40,bi:1,ramp:4}]}]};var Zt=[Gu,Yu,$u,Ku,ju,Qu],a_=["Principiante","Intermedio","Avanzado"],Uo={fuerza:[[0,3],[3,2],[7,2]],hiit:[[0,2],[5,2],[4,2]],boxeo:[[2,3],[3,3],[5,3]],calistenia:[[0,2],[3,2],[4,2]],movilidad:[[4,2],[5,2],[3,2]],yoga:[[2,3],[1,3],[3,3]]},gc=6.5,tt=(n,e=document)=>e.querySelector(n),br=(n,e=document)=>[...e.querySelectorAll(n)],On=n=>String(n).replace(/[&<>"]/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[e]),o_=matchMedia("(prefers-reduced-motion: reduce)").matches,l_=n=>Math.round(n.exercises.reduce((e,t)=>{let i=t.levels[1],s=i.unit==="rep"?i.n*(i.repT||3):i.n,r=i.rest!==void 0?i.rest:n.rest;return e+i.sets*s+i.sets*r},0)/60);Zt.forEach(n=>n.minutes=l_(n));var Lo=[];try{Lo=JSON.parse(localStorage.getItem("forja:log")||"[]")}catch{}var _c={get(){try{return JSON.parse(localStorage.getItem("forja:prefs")||"{}")}catch{return{}}},set(n){try{localStorage.setItem("forja:prefs",JSON.stringify(n))}catch{}}},Ds=_c.get().variant==="f"?"f":"m",xc=tt("#stage"),c_=tt("#cv"),_n=null,Zi=0,Ji=0,Di=0,Do=0,yc=!0,ed=performance.now(),Sr=!0,vc=n=>({...n.theme.look,...Ds==="f"&&n.theme.lookF?n.theme.lookF:{}});function h_(){try{_n=new To(c_,Zt[Zi].theme),_n.setAvatar(Ds,vc(Zt[Zi])),_n.resize()}catch{xc.classList.add("nogl"),_n=null}}function Mc(n,e){Zi=n,Ji=0,Di=0,Sr=!0;let t=Zt[n];document.documentElement.style.setProperty("--acc",t.theme.acc),document.documentElement.style.setProperty("--hi",t.theme.hi),document.documentElement.style.setProperty("--on",t.theme.accText||"#fff"),br(".glow").forEach((s,r)=>s.classList.toggle("on",r===n)),br(".tab").forEach((s,r)=>{s.classList.toggle("on",r===n),s.setAttribute("aria-selected",r===n)});let i=tt("#info");i.classList.remove("swap"),i.offsetWidth,i.classList.add("swap"),tt("#iKind").textContent=t.kind,tt("#iTitle").textContent=t.title,tt("#iSum").textContent=t.summary,tt("#iMin").textContent=t.minutes,tt("#iEx").textContent=t.exercises.length,tt("#iMat").innerHTML=t.material.map(s=>`<span>${On(s)}</span>`).join(""),tt("#go").href=`${t.id}.html`,tt("#go").dataset.t=t.title,_n&&(_n.setTheme(t.theme),_n.recolor(vc(t))),e&&(Do=40)}function td(){let n=Zt[Zi],[e,t]=Uo[n.id][Ji],i=n.exercises[e],s=i.levels[t-1];tt("#hExN").textContent=`${String(e+1).padStart(2,"0")}/${String(n.exercises.length).padStart(2,"0")}`,tt("#hEx").textContent=i.name,tt("#hArea").textContent=i.area,tt("#hLv").textContent=a_[t-1],tt("#hLvTxt").textContent=s.t,tt("#hMus").innerHTML=i.mus.map(l=>`<i>${On(vu[l]||l)}</i>`).join("");let r,a,o=s.repT||3;s.unit==="rep"?(r=Math.floor(Di/o)%s.n+1,a=`de ${s.n} rep`):(r=Math.max(0,Math.ceil(s.n-Di%s.n)),a="segundos"),tt("#hBig").textContent=r,tt("#hSmall").textContent=a,tt("#hDots").innerHTML=Uo[n.id].map((l,c)=>`<b class="${c===Ji?"on":""}"></b>`).join("")}function No(n){requestAnimationFrame(No);let e=Math.min(.1,(n-ed)/1e3);if(ed=n,!_n||!yc||document.hidden)return;let t=Zt[Zi],[i,s]=Uo[t.id][Ji],r=t.exercises[i],a=Object.assign({},r.levels[s-1],{L:s,ex:i}),o=a.unit==="rep"?a.n*(a.repT||3):a.n;if(Di+=e,Do>0&&(Do-=e),Di>gc&&(Di=0,Sr=!0,Ji++,Ji>=Uo[t.id].length))if(Do>0)Ji=0;else{Mc((Zi+1)%Zt.length,!1);return}let l={side:Math.floor(Di/Math.max(1,Math.min(o,gc/2)))%2?1:-1,dur:Math.max(o,gc),ex:i},c=Object.assign({},r.cam,{dist:r.cam.dist*(innerWidth>1020?1.55:1.6),ty:(r.cam.ty||.9)+(innerWidth>1020?.05:.32)});_n.frame({dt:e,time:n,mode:r.mode,t:Di,ctx:l,level:a,snap:Sr,ex:r,active:!0,muscles:r.mus,musclesOn:!0,view:null,drag:{az:0,el:0},cam:c}),Sr=!1,(n/250|0)!==No.h&&(No.h=n/250|0,td())}function u_(){tt("#glows").innerHTML=Zt.map(h=>`<div class="glow" style="--a:${h.theme.acc};--b:${h.theme.bgB}"></div>`).join(""),tt("#tabs").innerHTML=Zt.map((h,d)=>`<button class="tab" role="tab" data-i="${d}"><span class="n">${String(d+1).padStart(2,"0")}</span><span class="t">${On(h.kind)}</span><span class="s">${On(h.tagline)}</span><span class="pg"></span></button>`).join(""),tt("#tabs").onclick=h=>{let d=h.target.closest(".tab");d&&Mc(+d.dataset.i,!0)};let e=Zt.flatMap(h=>h.exercises.map(d=>d.name)).map(h=>`<span>${On(h)}</span><i></i>`).join("");tt("#marq").innerHTML=`<div class="track">${e}${e}</div>`;let t=h=>Lo.filter(d=>d.id===h).length;tt("#cards").innerHTML=Zt.map((h,d)=>{let g=t(h.id);return`<a class="card c${d}" href="${h.id}.html" style="--a:${h.theme.acc};--h:${h.theme.hi};--o:${h.theme.accText||"#fff"}" data-reveal>
      <img src="img/${h.id}.jpg" alt="" loading="lazy">
      <div class="shade"></div>
      <div class="top"><span class="k">${On(h.kind)}</span>${g?`<span class="done">\u2713 ${g}</span>`:""}</div>
      <div class="bot">
        <h3>${On(h.title)}</h3>
        <p>${On(h.summary)}</p>
        <div class="meta"><b>${h.minutes}</b> min \xB7 <b>${h.exercises.length}</b> ejercicios \xB7 ${On(h.material[0])}</div>
        <span class="arr">Empezar <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span>
      </div></a>`}).join(""),br(".card").forEach(h=>h.addEventListener("pointermove",d=>{let g=h.getBoundingClientRect();h.style.setProperty("--mx",d.clientX-g.left+"px"),h.style.setProperty("--my",d.clientY-g.top+"px")}));let i=[["Lun","fuerza"],["Mar","hiit"],["Mi\xE9","movilidad"],["Jue","calistenia"],["Vie","boxeo"],["S\xE1b","yoga"],["Dom",null]],s=(new Date().getDay()+6)%7;tt("#week").innerHTML=i.map(([h,d],g)=>{let v=d&&Zt.find(m=>m.id===d);return`<div class="day${v?"":" rest"}${g===s?" today":""}" ${v?`style="--a:${v.theme.acc}"`:""} data-reveal><small>${h}</small>${v?`<a href="${v.id}.html">${On(v.kind)}<em>${v.minutes} min</em></a>`:"<a>Descanso<em>Recupera</em></a>"}</div>`}).join("");let r=i[s][1]?Zt.find(h=>h.id===i[s][1]):null,a=tt("#hoy");r?(a.href=`${r.id}.html`,a.innerHTML=`Hoy toca ${On(r.kind)} \xB7 ${r.minutes} min <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`):(a.href="yoga.html",a.innerHTML="Hoy descansa\u2026 o haz yoga suave"),tt("#nSes").textContent=Zt.length,tt("#nEx").textContent=Zt.reduce((h,d)=>h+d.exercises.length,0),tt("#nDone").textContent=Lo.length;let o=Lo.reduce((h,d)=>h+(d.secs||0),0);tt("#nMin").textContent=Math.round(o/60);let l=tt("#sw"),c=()=>br("button",l).forEach(h=>h.classList.toggle("on",h.dataset.v===Ds));c(),l.onclick=h=>{let d=h.target.closest("button");if(!d)return;Ds=d.dataset.v;let g=_c.get();g.variant=Ds,_c.set(g),c(),_n&&(_n.setAvatar(Ds,vc(Zt[Zi])),Sr=!0)};let u=new IntersectionObserver(h=>h.forEach(d=>{d.isIntersecting&&(d.target.classList.add("in"),u.unobserve(d.target))}),{threshold:.12});br("[data-reveal]").forEach((h,d)=>{h.style.setProperty("--d",d%6*70+"ms"),u.observe(h)});let f=tt("nav");addEventListener("scroll",()=>f.classList.toggle("solid",scrollY>30),{passive:!0})}u_();h_();Mc(0,!1);td();_n&&(new ResizeObserver(()=>_n.resize()).observe(xc),new IntersectionObserver(n=>yc=n[0].isIntersecting,{threshold:0}).observe(xc),o_&&(yc=!0),requestAnimationFrame(No));document.documentElement.classList.add("ready");})();
