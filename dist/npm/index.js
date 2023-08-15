"use strict";var Xs=Object.create;var Ce=Object.defineProperty;var eo=Object.getOwnPropertyDescriptor;var to=Object.getOwnPropertyNames;var ro=Object.getPrototypeOf,no=Object.prototype.hasOwnProperty;var io=(r,e,t)=>e in r?Ce(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):
r[e]=t;var a=(r,e)=>Ce(r,"name",{value:e,configurable:!0});var K=(r,e)=>()=>(r&&(e=r(r=0)),e);var C=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports),ne=(r,e)=>{for(var t in e)
Ce(r,t,{get:e[t],enumerable:!0})},In=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e==
"function")for(let i of to(e))!no.call(r,i)&&i!==t&&Ce(r,i,{get:()=>e[i],enumerable:!(n=
eo(e,i))||n.enumerable});return r};var We=(r,e,t)=>(t=r!=null?Xs(ro(r)):{},In(e||!r||!r.__esModule?Ce(t,"default",{
value:r,enumerable:!0}):t,r)),q=r=>In(Ce({},"__esModule",{value:!0}),r);var P=(r,e,t)=>(io(r,typeof e!="symbol"?e+"":e,t),t);var Bn=C(st=>{"use strict";p();st.byteLength=oo;st.toByteArray=uo;st.fromByteArray=
lo;var he=[],ie=[],so=typeof Uint8Array<"u"?Uint8Array:Array,Pt="ABCDEFGHIJKLMNO\
PQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(_e=0,Tn=Pt.length;_e<Tn;++_e)
he[_e]=Pt[_e],ie[Pt.charCodeAt(_e)]=_e;var _e,Tn;ie["-".charCodeAt(0)]=62;ie["_".
charCodeAt(0)]=63;function Pn(r){var e=r.length;if(e%4>0)throw new Error("Invali\
d string. Length must be a multiple of 4");var t=r.indexOf("=");t===-1&&(t=e);var n=t===
e?0:4-t%4;return[t,n]}a(Pn,"getLens");function oo(r){var e=Pn(r),t=e[0],n=e[1];return(t+
n)*3/4-n}a(oo,"byteLength");function ao(r,e,t){return(e+t)*3/4-t}a(ao,"_byteLeng\
th");function uo(r){var e,t=Pn(r),n=t[0],i=t[1],s=new so(ao(r,n,i)),o=0,u=i>0?n-
4:n,c;for(c=0;c<u;c+=4)e=ie[r.charCodeAt(c)]<<18|ie[r.charCodeAt(c+1)]<<12|ie[r.
charCodeAt(c+2)]<<6|ie[r.charCodeAt(c+3)],s[o++]=e>>16&255,s[o++]=e>>8&255,s[o++]=
e&255;return i===2&&(e=ie[r.charCodeAt(c)]<<2|ie[r.charCodeAt(c+1)]>>4,s[o++]=e&
255),i===1&&(e=ie[r.charCodeAt(c)]<<10|ie[r.charCodeAt(c+1)]<<4|ie[r.charCodeAt(
c+2)]>>2,s[o++]=e>>8&255,s[o++]=e&255),s}a(uo,"toByteArray");function co(r){return he[r>>
18&63]+he[r>>12&63]+he[r>>6&63]+he[r&63]}a(co,"tripletToBase64");function ho(r,e,t){
for(var n,i=[],s=e;s<t;s+=3)n=(r[s]<<16&16711680)+(r[s+1]<<8&65280)+(r[s+2]&255),
i.push(co(n));return i.join("")}a(ho,"encodeChunk");function lo(r){for(var e,t=r.
length,n=t%3,i=[],s=16383,o=0,u=t-n;o<u;o+=s)i.push(ho(r,o,o+s>u?u:o+s));return n===
1?(e=r[t-1],i.push(he[e>>2]+he[e<<4&63]+"==")):n===2&&(e=(r[t-2]<<8)+r[t-1],i.push(
he[e>>10]+he[e>>4&63]+he[e<<2&63]+"=")),i.join("")}a(lo,"fromByteArray")});var Ln=C(Bt=>{p();Bt.read=function(r,e,t,n,i){var s,o,u=i*8-n-1,c=(1<<u)-1,h=c>>
1,f=-7,m=t?i-1:0,x=t?-1:1,_=r[e+m];for(m+=x,s=_&(1<<-f)-1,_>>=-f,f+=u;f>0;s=s*256+
r[e+m],m+=x,f-=8);for(o=s&(1<<-f)-1,s>>=-f,f+=n;f>0;o=o*256+r[e+m],m+=x,f-=8);if(s===
0)s=1-h;else{if(s===c)return o?NaN:(_?-1:1)*(1/0);o=o+Math.pow(2,n),s=s-h}return(_?
-1:1)*o*Math.pow(2,s-n)};Bt.write=function(r,e,t,n,i,s){var o,u,c,h=s*8-i-1,f=(1<<
h)-1,m=f>>1,x=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,_=n?0:s-1,R=n?1:-1,j=e<0||
e===0&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(u=isNaN(e)?1:0,o=f):(o=Math.
floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),o+m>=1?e+=x/c:e+=
x*Math.pow(2,1-m),e*c>=2&&(o++,c/=2),o+m>=f?(u=0,o=f):o+m>=1?(u=(e*c-1)*Math.pow(
2,i),o=o+m):(u=e*Math.pow(2,m-1)*Math.pow(2,i),o=0));i>=8;r[t+_]=u&255,_+=R,u/=256,
i-=8);for(o=o<<i|u,h+=i;h>0;r[t+_]=o&255,_+=R,o/=256,h-=8);r[t+_-R]|=j*128}});var Vn=C(Be=>{"use strict";p();var Lt=Bn(),Te=Ln(),Rn=typeof Symbol=="function"&&
typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;Be.Buffer=
l;Be.SlowBuffer=wo;Be.INSPECT_MAX_BYTES=50;var ot=2147483647;Be.kMaxLength=ot;l.
TYPED_ARRAY_SUPPORT=fo();!l.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.
error=="function"&&console.error("This browser lacks typed array (Uint8Array) su\
pport which is required by `buffer` v5.x. Use `buffer` v4.x if you require old b\
rowser support.");function fo(){try{let r=new Uint8Array(1),e={foo:function(){return 42}};
return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(r,e),
r.foo()===42}catch{return!1}}a(fo,"typedArraySupport");Object.defineProperty(l.prototype,
"parent",{enumerable:!0,get:function(){if(l.isBuffer(this))return this.buffer}});
Object.defineProperty(l.prototype,"offset",{enumerable:!0,get:function(){if(l.isBuffer(
this))return this.byteOffset}});function ye(r){if(r>ot)throw new RangeError('The\
 value "'+r+'" is invalid for option "size"');let e=new Uint8Array(r);return Object.
setPrototypeOf(e,l.prototype),e}a(ye,"createBuffer");function l(r,e,t){if(typeof r==
"number"){if(typeof e=="string")throw new TypeError('The "string" argument must \
be of type string. Received type number');return Dt(r)}return kn(r,e,t)}a(l,"Buf\
fer");l.poolSize=8192;function kn(r,e,t){if(typeof r=="string")return yo(r,e);if(ArrayBuffer.
isView(r))return mo(r);if(r==null)throw new TypeError("The first argument must b\
e one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received\
 type "+typeof r);if(le(r,ArrayBuffer)||r&&le(r.buffer,ArrayBuffer)||typeof SharedArrayBuffer<
"u"&&(le(r,SharedArrayBuffer)||r&&le(r.buffer,SharedArrayBuffer)))return Ft(r,e,
t);if(typeof r=="number")throw new TypeError('The "value" argument must not be o\
f type number. Received type number');let n=r.valueOf&&r.valueOf();if(n!=null&&n!==
r)return l.from(n,e,t);let i=go(r);if(i)return i;if(typeof Symbol<"u"&&Symbol.toPrimitive!=
null&&typeof r[Symbol.toPrimitive]=="function")return l.from(r[Symbol.toPrimitive](
"string"),e,t);throw new TypeError("The first argument must be one of type strin\
g, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof r)}a(
kn,"from");l.from=function(r,e,t){return kn(r,e,t)};Object.setPrototypeOf(l.prototype,
Uint8Array.prototype);Object.setPrototypeOf(l,Uint8Array);function On(r){if(typeof r!=
"number")throw new TypeError('"size" argument must be of type number');if(r<0)throw new RangeError(
'The value "'+r+'" is invalid for option "size"')}a(On,"assertSize");function po(r,e,t){
return On(r),r<=0?ye(r):e!==void 0?typeof t=="string"?ye(r).fill(e,t):ye(r).fill(
e):ye(r)}a(po,"alloc");l.alloc=function(r,e,t){return po(r,e,t)};function Dt(r){
return On(r),ye(r<0?0:kt(r)|0)}a(Dt,"allocUnsafe");l.allocUnsafe=function(r){return Dt(
r)};l.allocUnsafeSlow=function(r){return Dt(r)};function yo(r,e){if((typeof e!="\
string"||e==="")&&(e="utf8"),!l.isEncoding(e))throw new TypeError("Unknown encod\
ing: "+e);let t=Un(r,e)|0,n=ye(t),i=n.write(r,e);return i!==t&&(n=n.slice(0,i)),
n}a(yo,"fromString");function Rt(r){let e=r.length<0?0:kt(r.length)|0,t=ye(e);for(let n=0;n<
e;n+=1)t[n]=r[n]&255;return t}a(Rt,"fromArrayLike");function mo(r){if(le(r,Uint8Array)){
let e=new Uint8Array(r);return Ft(e.buffer,e.byteOffset,e.byteLength)}return Rt(
r)}a(mo,"fromArrayView");function Ft(r,e,t){if(e<0||r.byteLength<e)throw new RangeError(
'"offset" is outside of buffer bounds');if(r.byteLength<e+(t||0))throw new RangeError(
'"length" is outside of buffer bounds');let n;return e===void 0&&t===void 0?n=new Uint8Array(
r):t===void 0?n=new Uint8Array(r,e):n=new Uint8Array(r,e,t),Object.setPrototypeOf(
n,l.prototype),n}a(Ft,"fromArrayBuffer");function go(r){if(l.isBuffer(r)){let e=kt(
r.length)|0,t=ye(e);return t.length===0||r.copy(t,0,0,e),t}if(r.length!==void 0)
return typeof r.length!="number"||Ut(r.length)?ye(0):Rt(r);if(r.type==="Buffer"&&
Array.isArray(r.data))return Rt(r.data)}a(go,"fromObject");function kt(r){if(r>=
ot)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
ot.toString(16)+" bytes");return r|0}a(kt,"checked");function wo(r){return+r!=r&&
(r=0),l.alloc(+r)}a(wo,"SlowBuffer");l.isBuffer=a(function(e){return e!=null&&e.
_isBuffer===!0&&e!==l.prototype},"isBuffer");l.compare=a(function(e,t){if(le(e,Uint8Array)&&
(e=l.from(e,e.offset,e.byteLength)),le(t,Uint8Array)&&(t=l.from(t,t.offset,t.byteLength)),
!l.isBuffer(e)||!l.isBuffer(t))throw new TypeError('The "buf1", "buf2" arguments\
 must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,i=t.
length;for(let s=0,o=Math.min(n,i);s<o;++s)if(e[s]!==t[s]){n=e[s],i=t[s];break}return n<
i?-1:i<n?1:0},"compare");l.isEncoding=a(function(e){switch(String(e).toLowerCase()){case"\
hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"\
ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},"isEn\
coding");l.concat=a(function(e,t){if(!Array.isArray(e))throw new TypeError('"lis\
t" argument must be an Array of Buffers');if(e.length===0)return l.alloc(0);let n;
if(t===void 0)for(t=0,n=0;n<e.length;++n)t+=e[n].length;let i=l.allocUnsafe(t),s=0;
for(n=0;n<e.length;++n){let o=e[n];if(le(o,Uint8Array))s+o.length>i.length?(l.isBuffer(
o)||(o=l.from(o)),o.copy(i,s)):Uint8Array.prototype.set.call(i,o,s);else if(l.isBuffer(
o))o.copy(i,s);else throw new TypeError('"list" argument must be an Array of Buf\
fers');s+=o.length}return i},"concat");function Un(r,e){if(l.isBuffer(r))return r.
length;if(ArrayBuffer.isView(r)||le(r,ArrayBuffer))return r.byteLength;if(typeof r!=
"string")throw new TypeError('The "string" argument must be one of type string, \
Buffer, or ArrayBuffer. Received type '+typeof r);let t=r.length,n=arguments.length>
2&&arguments[2]===!0;if(!n&&t===0)return 0;let i=!1;for(;;)switch(e){case"ascii":case"\
latin1":case"binary":return t;case"utf8":case"utf-8":return Mt(r).length;case"uc\
s2":case"ucs-2":case"utf16le":case"utf-16le":return t*2;case"hex":return t>>>1;case"\
base64":return Kn(r).length;default:if(i)return n?-1:Mt(r).length;e=(""+e).toLowerCase(),
i=!0}}a(Un,"byteLength");l.byteLength=Un;function bo(r,e,t){let n=!1;if((e===void 0||
e<0)&&(e=0),e>this.length||((t===void 0||t>this.length)&&(t=this.length),t<=0)||
(t>>>=0,e>>>=0,t<=e))return"";for(r||(r="utf8");;)switch(r){case"hex":return Po(
this,e,t);case"utf8":case"utf-8":return Nn(this,e,t);case"ascii":return Io(this,
e,t);case"latin1":case"binary":return To(this,e,t);case"base64":return Ao(this,e,
t);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Bo(this,e,t);default:
if(n)throw new TypeError("Unknown encoding: "+r);r=(r+"").toLowerCase(),n=!0}}a(
bo,"slowToString");l.prototype._isBuffer=!0;function Ae(r,e,t){let n=r[e];r[e]=r[t],
r[t]=n}a(Ae,"swap");l.prototype.swap16=a(function(){let e=this.length;if(e%2!==0)
throw new RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<
e;t+=2)Ae(this,t,t+1);return this},"swap16");l.prototype.swap32=a(function(){let e=this.
length;if(e%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bit\
s");for(let t=0;t<e;t+=4)Ae(this,t,t+3),Ae(this,t+1,t+2);return this},"swap32");
l.prototype.swap64=a(function(){let e=this.length;if(e%8!==0)throw new RangeError(
"Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)Ae(this,t,t+7),
Ae(this,t+1,t+6),Ae(this,t+2,t+5),Ae(this,t+3,t+4);return this},"swap64");l.prototype.
toString=a(function(){let e=this.length;return e===0?"":arguments.length===0?Nn(
this,0,e):bo.apply(this,arguments)},"toString");l.prototype.toLocaleString=l.prototype.
toString;l.prototype.equals=a(function(e){if(!l.isBuffer(e))throw new TypeError(
"Argument must be a Buffer");return this===e?!0:l.compare(this,e)===0},"equals");
l.prototype.inspect=a(function(){let e="",t=Be.INSPECT_MAX_BYTES;return e=this.toString(
"hex",0,t).replace(/(.{2})/g,"$1 ").trim(),this.length>t&&(e+=" ... "),"<Buffer "+
e+">"},"inspect");Rn&&(l.prototype[Rn]=l.prototype.inspect);l.prototype.compare=
a(function(e,t,n,i,s){if(le(e,Uint8Array)&&(e=l.from(e,e.offset,e.byteLength)),!l.
isBuffer(e))throw new TypeError('The "target" argument must be one of type Buffe\
r or Uint8Array. Received type '+typeof e);if(t===void 0&&(t=0),n===void 0&&(n=e?
e.length:0),i===void 0&&(i=0),s===void 0&&(s=this.length),t<0||n>e.length||i<0||
s>this.length)throw new RangeError("out of range index");if(i>=s&&t>=n)return 0;
if(i>=s)return-1;if(t>=n)return 1;if(t>>>=0,n>>>=0,i>>>=0,s>>>=0,this===e)return 0;
let o=s-i,u=n-t,c=Math.min(o,u),h=this.slice(i,s),f=e.slice(t,n);for(let m=0;m<c;++m)
if(h[m]!==f[m]){o=h[m],u=f[m];break}return o<u?-1:u<o?1:0},"compare");function qn(r,e,t,n,i){
if(r.length===0)return-1;if(typeof t=="string"?(n=t,t=0):t>2147483647?t=2147483647:
t<-2147483648&&(t=-2147483648),t=+t,Ut(t)&&(t=i?0:r.length-1),t<0&&(t=r.length+t),
t>=r.length){if(i)return-1;t=r.length-1}else if(t<0)if(i)t=0;else return-1;if(typeof e==
"string"&&(e=l.from(e,n)),l.isBuffer(e))return e.length===0?-1:Fn(r,e,t,n,i);if(typeof e==
"number")return e=e&255,typeof Uint8Array.prototype.indexOf=="function"?i?Uint8Array.
prototype.indexOf.call(r,e,t):Uint8Array.prototype.lastIndexOf.call(r,e,t):Fn(r,
[e],t,n,i);throw new TypeError("val must be string, number or Buffer")}a(qn,"bid\
irectionalIndexOf");function Fn(r,e,t,n,i){let s=1,o=r.length,u=e.length;if(n!==
void 0&&(n=String(n).toLowerCase(),n==="ucs2"||n==="ucs-2"||n==="utf16le"||n==="\
utf-16le")){if(r.length<2||e.length<2)return-1;s=2,o/=2,u/=2,t/=2}function c(f,m){
return s===1?f[m]:f.readUInt16BE(m*s)}a(c,"read");let h;if(i){let f=-1;for(h=t;h<
o;h++)if(c(r,h)===c(e,f===-1?0:h-f)){if(f===-1&&(f=h),h-f+1===u)return f*s}else f!==
-1&&(h-=h-f),f=-1}else for(t+u>o&&(t=o-u),h=t;h>=0;h--){let f=!0;for(let m=0;m<u;m++)
if(c(r,h+m)!==c(e,m)){f=!1;break}if(f)return h}return-1}a(Fn,"arrayIndexOf");l.prototype.
includes=a(function(e,t,n){return this.indexOf(e,t,n)!==-1},"includes");l.prototype.
indexOf=a(function(e,t,n){return qn(this,e,t,n,!0)},"indexOf");l.prototype.lastIndexOf=
a(function(e,t,n){return qn(this,e,t,n,!1)},"lastIndexOf");function So(r,e,t,n){
t=Number(t)||0;let i=r.length-t;n?(n=Number(n),n>i&&(n=i)):n=i;let s=e.length;n>
s/2&&(n=s/2);let o;for(o=0;o<n;++o){let u=parseInt(e.substr(o*2,2),16);if(Ut(u))
return o;r[t+o]=u}return o}a(So,"hexWrite");function xo(r,e,t,n){return at(Mt(e,
r.length-t),r,t,n)}a(xo,"utf8Write");function Eo(r,e,t,n){return at(Mo(e),r,t,n)}
a(Eo,"asciiWrite");function vo(r,e,t,n){return at(Kn(e),r,t,n)}a(vo,"base64Write");
function _o(r,e,t,n){return at(Do(e,r.length-t),r,t,n)}a(_o,"ucs2Write");l.prototype.
write=a(function(e,t,n,i){if(t===void 0)i="utf8",n=this.length,t=0;else if(n===void 0&&
typeof t=="string")i=t,n=this.length,t=0;else if(isFinite(t))t=t>>>0,isFinite(n)?
(n=n>>>0,i===void 0&&(i="utf8")):(i=n,n=void 0);else throw new Error("Buffer.wri\
te(string, encoding, offset[, length]) is no longer supported");let s=this.length-
t;if((n===void 0||n>s)&&(n=s),e.length>0&&(n<0||t<0)||t>this.length)throw new RangeError(
"Attempt to write outside buffer bounds");i||(i="utf8");let o=!1;for(;;)switch(i){case"\
hex":return So(this,e,t,n);case"utf8":case"utf-8":return xo(this,e,t,n);case"asc\
ii":case"latin1":case"binary":return Eo(this,e,t,n);case"base64":return vo(this,
e,t,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return _o(this,e,t,n);default:
if(o)throw new TypeError("Unknown encoding: "+i);i=(""+i).toLowerCase(),o=!0}},"\
write");l.prototype.toJSON=a(function(){return{type:"Buffer",data:Array.prototype.
slice.call(this._arr||this,0)}},"toJSON");function Ao(r,e,t){return e===0&&t===r.
length?Lt.fromByteArray(r):Lt.fromByteArray(r.slice(e,t))}a(Ao,"base64Slice");function Nn(r,e,t){
t=Math.min(r.length,t);let n=[],i=e;for(;i<t;){let s=r[i],o=null,u=s>239?4:s>223?
3:s>191?2:1;if(i+u<=t){let c,h,f,m;switch(u){case 1:s<128&&(o=s);break;case 2:c=
r[i+1],(c&192)===128&&(m=(s&31)<<6|c&63,m>127&&(o=m));break;case 3:c=r[i+1],h=r[i+
2],(c&192)===128&&(h&192)===128&&(m=(s&15)<<12|(c&63)<<6|h&63,m>2047&&(m<55296||
m>57343)&&(o=m));break;case 4:c=r[i+1],h=r[i+2],f=r[i+3],(c&192)===128&&(h&192)===
128&&(f&192)===128&&(m=(s&15)<<18|(c&63)<<12|(h&63)<<6|f&63,m>65535&&m<1114112&&
(o=m))}}o===null?(o=65533,u=1):o>65535&&(o-=65536,n.push(o>>>10&1023|55296),o=56320|
o&1023),n.push(o),i+=u}return Co(n)}a(Nn,"utf8Slice");var Mn=4096;function Co(r){
let e=r.length;if(e<=Mn)return String.fromCharCode.apply(String,r);let t="",n=0;
for(;n<e;)t+=String.fromCharCode.apply(String,r.slice(n,n+=Mn));return t}a(Co,"d\
ecodeCodePointsArray");function Io(r,e,t){let n="";t=Math.min(r.length,t);for(let i=e;i<
t;++i)n+=String.fromCharCode(r[i]&127);return n}a(Io,"asciiSlice");function To(r,e,t){
let n="";t=Math.min(r.length,t);for(let i=e;i<t;++i)n+=String.fromCharCode(r[i]);
return n}a(To,"latin1Slice");function Po(r,e,t){let n=r.length;(!e||e<0)&&(e=0),
(!t||t<0||t>n)&&(t=n);let i="";for(let s=e;s<t;++s)i+=ko[r[s]];return i}a(Po,"he\
xSlice");function Bo(r,e,t){let n=r.slice(e,t),i="";for(let s=0;s<n.length-1;s+=
2)i+=String.fromCharCode(n[s]+n[s+1]*256);return i}a(Bo,"utf16leSlice");l.prototype.
slice=a(function(e,t){let n=this.length;e=~~e,t=t===void 0?n:~~t,e<0?(e+=n,e<0&&
(e=0)):e>n&&(e=n),t<0?(t+=n,t<0&&(t=0)):t>n&&(t=n),t<e&&(t=e);let i=this.subarray(
e,t);return Object.setPrototypeOf(i,l.prototype),i},"slice");function Q(r,e,t){if(r%
1!==0||r<0)throw new RangeError("offset is not uint");if(r+e>t)throw new RangeError(
"Trying to access beyond buffer length")}a(Q,"checkOffset");l.prototype.readUintLE=
l.prototype.readUIntLE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let i=this[e],
s=1,o=0;for(;++o<t&&(s*=256);)i+=this[e+o]*s;return i},"readUIntLE");l.prototype.
readUintBE=l.prototype.readUIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.
length);let i=this[e+--t],s=1;for(;t>0&&(s*=256);)i+=this[e+--t]*s;return i},"re\
adUIntBE");l.prototype.readUint8=l.prototype.readUInt8=a(function(e,t){return e=
e>>>0,t||Q(e,1,this.length),this[e]},"readUInt8");l.prototype.readUint16LE=l.prototype.
readUInt16LE=a(function(e,t){return e=e>>>0,t||Q(e,2,this.length),this[e]|this[e+
1]<<8},"readUInt16LE");l.prototype.readUint16BE=l.prototype.readUInt16BE=a(function(e,t){
return e=e>>>0,t||Q(e,2,this.length),this[e]<<8|this[e+1]},"readUInt16BE");l.prototype.
readUint32LE=l.prototype.readUInt32LE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.
length),(this[e]|this[e+1]<<8|this[e+2]<<16)+this[e+3]*16777216},"readUInt32LE");
l.prototype.readUint32BE=l.prototype.readUInt32BE=a(function(e,t){return e=e>>>0,
t||Q(e,4,this.length),this[e]*16777216+(this[e+1]<<16|this[e+2]<<8|this[e+3])},"\
readUInt32BE");l.prototype.readBigUInt64LE=we(a(function(e){e=e>>>0,Pe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,this.length-8);let i=t+
this[++e]*2**8+this[++e]*2**16+this[++e]*2**24,s=this[++e]+this[++e]*2**8+this[++e]*
2**16+n*2**24;return BigInt(i)+(BigInt(s)<<BigInt(32))},"readBigUInt64LE"));l.prototype.
readBigUInt64BE=we(a(function(e){e=e>>>0,Pe(e,"offset");let t=this[e],n=this[e+7];
(t===void 0||n===void 0)&&je(e,this.length-8);let i=t*2**24+this[++e]*2**16+this[++e]*
2**8+this[++e],s=this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n;return(BigInt(
i)<<BigInt(32))+BigInt(s)},"readBigUInt64BE"));l.prototype.readIntLE=a(function(e,t,n){
e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let i=this[e],s=1,o=0;for(;++o<t&&(s*=256);)
i+=this[e+o]*s;return s*=128,i>=s&&(i-=Math.pow(2,8*t)),i},"readIntLE");l.prototype.
readIntBE=a(function(e,t,n){e=e>>>0,t=t>>>0,n||Q(e,t,this.length);let i=t,s=1,o=this[e+
--i];for(;i>0&&(s*=256);)o+=this[e+--i]*s;return s*=128,o>=s&&(o-=Math.pow(2,8*t)),
o},"readIntBE");l.prototype.readInt8=a(function(e,t){return e=e>>>0,t||Q(e,1,this.
length),this[e]&128?(255-this[e]+1)*-1:this[e]},"readInt8");l.prototype.readInt16LE=
a(function(e,t){e=e>>>0,t||Q(e,2,this.length);let n=this[e]|this[e+1]<<8;return n&
32768?n|4294901760:n},"readInt16LE");l.prototype.readInt16BE=a(function(e,t){e=e>>>
0,t||Q(e,2,this.length);let n=this[e+1]|this[e]<<8;return n&32768?n|4294901760:n},
"readInt16BE");l.prototype.readInt32LE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.
length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},"readInt32LE");l.prototype.
readInt32BE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.length),this[e]<<24|this[e+
1]<<16|this[e+2]<<8|this[e+3]},"readInt32BE");l.prototype.readBigInt64LE=we(a(function(e){
e=e>>>0,Pe(e,"offset");let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,
this.length-8);let i=this[e+4]+this[e+5]*2**8+this[e+6]*2**16+(n<<24);return(BigInt(
i)<<BigInt(32))+BigInt(t+this[++e]*2**8+this[++e]*2**16+this[++e]*2**24)},"readB\
igInt64LE"));l.prototype.readBigInt64BE=we(a(function(e){e=e>>>0,Pe(e,"offset");
let t=this[e],n=this[e+7];(t===void 0||n===void 0)&&je(e,this.length-8);let i=(t<<
24)+this[++e]*2**16+this[++e]*2**8+this[++e];return(BigInt(i)<<BigInt(32))+BigInt(
this[++e]*2**24+this[++e]*2**16+this[++e]*2**8+n)},"readBigInt64BE"));l.prototype.
readFloatLE=a(function(e,t){return e=e>>>0,t||Q(e,4,this.length),Te.read(this,e,
!0,23,4)},"readFloatLE");l.prototype.readFloatBE=a(function(e,t){return e=e>>>0,
t||Q(e,4,this.length),Te.read(this,e,!1,23,4)},"readFloatBE");l.prototype.readDoubleLE=
a(function(e,t){return e=e>>>0,t||Q(e,8,this.length),Te.read(this,e,!0,52,8)},"r\
eadDoubleLE");l.prototype.readDoubleBE=a(function(e,t){return e=e>>>0,t||Q(e,8,this.
length),Te.read(this,e,!1,52,8)},"readDoubleBE");function Y(r,e,t,n,i,s){if(!l.isBuffer(
r))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<
s)throw new RangeError('"value" argument is out of bounds');if(t+n>r.length)throw new RangeError(
"Index out of range")}a(Y,"checkInt");l.prototype.writeUintLE=l.prototype.writeUIntLE=
a(function(e,t,n,i){if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;Y(this,e,
t,n,u,0)}let s=1,o=0;for(this[t]=e&255;++o<n&&(s*=256);)this[t+o]=e/s&255;return t+
n},"writeUIntLE");l.prototype.writeUintBE=l.prototype.writeUIntBE=a(function(e,t,n,i){
if(e=+e,t=t>>>0,n=n>>>0,!i){let u=Math.pow(2,8*n)-1;Y(this,e,t,n,u,0)}let s=n-1,
o=1;for(this[t+s]=e&255;--s>=0&&(o*=256);)this[t+s]=e/o&255;return t+n},"writeUI\
ntBE");l.prototype.writeUint8=l.prototype.writeUInt8=a(function(e,t,n){return e=
+e,t=t>>>0,n||Y(this,e,t,1,255,0),this[t]=e&255,t+1},"writeUInt8");l.prototype.writeUint16LE=
l.prototype.writeUInt16LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,
65535,0),this[t]=e&255,this[t+1]=e>>>8,t+2},"writeUInt16LE");l.prototype.writeUint16BE=
l.prototype.writeUInt16BE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,
65535,0),this[t]=e>>>8,this[t+1]=e&255,t+2},"writeUInt16BE");l.prototype.writeUint32LE=
l.prototype.writeUInt32LE=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,4,
4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=e&255,t+
4},"writeUInt32LE");l.prototype.writeUint32BE=l.prototype.writeUInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,
this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeUInt32BE");function Qn(r,e,t,n,i){$n(
e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t++]=s,s=s>>8,r[t++]=s,s=s>>8,
r[t++]=s,s=s>>8,r[t++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t++]=
o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,o=o>>8,r[t++]=o,t}a(Qn,"wrtBigUInt64LE");function Wn(r,e,t,n,i){
$n(e,n,i,r,t,7);let s=Number(e&BigInt(4294967295));r[t+7]=s,s=s>>8,r[t+6]=s,s=s>>
8,r[t+5]=s,s=s>>8,r[t+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return r[t+
3]=o,o=o>>8,r[t+2]=o,o=o>>8,r[t+1]=o,o=o>>8,r[t]=o,t+8}a(Wn,"wrtBigUInt64BE");l.
prototype.writeBigUInt64LE=we(a(function(e,t=0){return Qn(this,e,t,BigInt(0),BigInt(
"0xffffffffffffffff"))},"writeBigUInt64LE"));l.prototype.writeBigUInt64BE=we(a(function(e,t=0){
return Wn(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))},"writeBigUInt64BE"));
l.prototype.writeIntLE=a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(2,
8*n-1);Y(this,e,t,n,c-1,-c)}let s=0,o=1,u=0;for(this[t]=e&255;++s<n&&(o*=256);)e<
0&&u===0&&this[t+s-1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"writeIntL\
E");l.prototype.writeIntBE=a(function(e,t,n,i){if(e=+e,t=t>>>0,!i){let c=Math.pow(
2,8*n-1);Y(this,e,t,n,c-1,-c)}let s=n-1,o=1,u=0;for(this[t+s]=e&255;--s>=0&&(o*=
256);)e<0&&u===0&&this[t+s+1]!==0&&(u=1),this[t+s]=(e/o>>0)-u&255;return t+n},"w\
riteIntBE");l.prototype.writeInt8=a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,
e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=e&255,t+1},"writeInt8");l.prototype.writeInt16LE=
a(function(e,t,n){return e=+e,t=t>>>0,n||Y(this,e,t,2,32767,-32768),this[t]=e&255,
this[t+1]=e>>>8,t+2},"writeInt16LE");l.prototype.writeInt16BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=e&255,
t+2},"writeInt16BE");l.prototype.writeInt32LE=a(function(e,t,n){return e=+e,t=t>>>
0,n||Y(this,e,t,4,2147483647,-2147483648),this[t]=e&255,this[t+1]=e>>>8,this[t+2]=
e>>>16,this[t+3]=e>>>24,t+4},"writeInt32LE");l.prototype.writeInt32BE=a(function(e,t,n){
return e=+e,t=t>>>0,n||Y(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+
1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=e&255,t+4},"writeIn\
t32BE");l.prototype.writeBigInt64LE=we(a(function(e,t=0){return Qn(this,e,t,-BigInt(
"0x8000000000000000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64LE"));l.prototype.
writeBigInt64BE=we(a(function(e,t=0){return Wn(this,e,t,-BigInt("0x8000000000000\
000"),BigInt("0x7fffffffffffffff"))},"writeBigInt64BE"));function jn(r,e,t,n,i,s){
if(t+n>r.length)throw new RangeError("Index out of range");if(t<0)throw new RangeError(
"Index out of range")}a(jn,"checkIEEE754");function Hn(r,e,t,n,i){return e=+e,t=
t>>>0,i||jn(r,e,t,4,34028234663852886e22,-34028234663852886e22),Te.write(r,e,t,n,
23,4),t+4}a(Hn,"writeFloat");l.prototype.writeFloatLE=a(function(e,t,n){return Hn(
this,e,t,!0,n)},"writeFloatLE");l.prototype.writeFloatBE=a(function(e,t,n){return Hn(
this,e,t,!1,n)},"writeFloatBE");function Gn(r,e,t,n,i){return e=+e,t=t>>>0,i||jn(
r,e,t,8,17976931348623157e292,-17976931348623157e292),Te.write(r,e,t,n,52,8),t+8}
a(Gn,"writeDouble");l.prototype.writeDoubleLE=a(function(e,t,n){return Gn(this,e,
t,!0,n)},"writeDoubleLE");l.prototype.writeDoubleBE=a(function(e,t,n){return Gn(
this,e,t,!1,n)},"writeDoubleBE");l.prototype.copy=a(function(e,t,n,i){if(!l.isBuffer(
e))throw new TypeError("argument should be a Buffer");if(n||(n=0),!i&&i!==0&&(i=
this.length),t>=e.length&&(t=e.length),t||(t=0),i>0&&i<n&&(i=n),i===n||e.length===
0||this.length===0)return 0;if(t<0)throw new RangeError("targetStart out of boun\
ds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(i<0)throw new RangeError(
"sourceEnd out of bounds");i>this.length&&(i=this.length),e.length-t<i-n&&(i=e.length-
t+n);let s=i-n;return this===e&&typeof Uint8Array.prototype.copyWithin=="functio\
n"?this.copyWithin(t,n,i):Uint8Array.prototype.set.call(e,this.subarray(n,i),t),
s},"copy");l.prototype.fill=a(function(e,t,n,i){if(typeof e=="string"){if(typeof t==
"string"?(i=t,t=0,n=this.length):typeof n=="string"&&(i=n,n=this.length),i!==void 0&&
typeof i!="string")throw new TypeError("encoding must be a string");if(typeof i==
"string"&&!l.isEncoding(i))throw new TypeError("Unknown encoding: "+i);if(e.length===
1){let o=e.charCodeAt(0);(i==="utf8"&&o<128||i==="latin1")&&(e=o)}}else typeof e==
"number"?e=e&255:typeof e=="boolean"&&(e=Number(e));if(t<0||this.length<t||this.
length<n)throw new RangeError("Out of range index");if(n<=t)return this;t=t>>>0,
n=n===void 0?this.length:n>>>0,e||(e=0);let s;if(typeof e=="number")for(s=t;s<n;++s)
this[s]=e;else{let o=l.isBuffer(e)?e:l.from(e,i),u=o.length;if(u===0)throw new TypeError(
'The value "'+e+'" is invalid for argument "value"');for(s=0;s<n-t;++s)this[s+t]=
o[s%u]}return this},"fill");var Ie={};function Ot(r,e,t){var n;Ie[r]=(n=class extends t{constructor(){
super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,
configurable:!0}),this.name=`${this.name} [${r}]`,this.stack,delete this.name}get code(){
return r}set code(s){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,
value:s,writable:!0})}toString(){return`${this.name} [${r}]: ${this.message}`}},
a(n,"NodeError"),n)}a(Ot,"E");Ot("ERR_BUFFER_OUT_OF_BOUNDS",function(r){return r?
`${r} is outside of buffer bounds`:"Attempt to access memory outside buffer boun\
ds"},RangeError);Ot("ERR_INVALID_ARG_TYPE",function(r,e){return`The "${r}" argum\
ent must be of type number. Received type ${typeof e}`},TypeError);Ot("ERR_OUT_O\
F_RANGE",function(r,e,t){let n=`The value of "${r}" is out of range.`,i=t;return Number.
isInteger(t)&&Math.abs(t)>2**32?i=Dn(String(t)):typeof t=="bigint"&&(i=String(t),
(t>BigInt(2)**BigInt(32)||t<-(BigInt(2)**BigInt(32)))&&(i=Dn(i)),i+="n"),n+=` It\
 must be ${e}. Received ${i}`,n},RangeError);function Dn(r){let e="",t=r.length,
n=r[0]==="-"?1:0;for(;t>=n+4;t-=3)e=`_${r.slice(t-3,t)}${e}`;return`${r.slice(0,
t)}${e}`}a(Dn,"addNumericalSeparator");function Lo(r,e,t){Pe(e,"offset"),(r[e]===
void 0||r[e+t]===void 0)&&je(e,r.length-(t+1))}a(Lo,"checkBounds");function $n(r,e,t,n,i,s){
if(r>t||r<e){let o=typeof e=="bigint"?"n":"",u;throw s>3?e===0||e===BigInt(0)?u=
`>= 0${o} and < 2${o} ** ${(s+1)*8}${o}`:u=`>= -(2${o} ** ${(s+1)*8-1}${o}) and \
< 2 ** ${(s+1)*8-1}${o}`:u=`>= ${e}${o} and <= ${t}${o}`,new Ie.ERR_OUT_OF_RANGE(
"value",u,r)}Lo(n,i,s)}a($n,"checkIntBI");function Pe(r,e){if(typeof r!="number")
throw new Ie.ERR_INVALID_ARG_TYPE(e,"number",r)}a(Pe,"validateNumber");function je(r,e,t){
throw Math.floor(r)!==r?(Pe(r,t),new Ie.ERR_OUT_OF_RANGE(t||"offset","an integer",
r)):e<0?new Ie.ERR_BUFFER_OUT_OF_BOUNDS:new Ie.ERR_OUT_OF_RANGE(t||"offset",`>= ${t?
1:0} and <= ${e}`,r)}a(je,"boundsError");var Ro=/[^+/0-9A-Za-z-_]/g;function Fo(r){
if(r=r.split("=")[0],r=r.trim().replace(Ro,""),r.length<2)return"";for(;r.length%
4!==0;)r=r+"=";return r}a(Fo,"base64clean");function Mt(r,e){e=e||1/0;let t,n=r.
length,i=null,s=[];for(let o=0;o<n;++o){if(t=r.charCodeAt(o),t>55295&&t<57344){if(!i){
if(t>56319){(e-=3)>-1&&s.push(239,191,189);continue}else if(o+1===n){(e-=3)>-1&&
s.push(239,191,189);continue}i=t;continue}if(t<56320){(e-=3)>-1&&s.push(239,191,
189),i=t;continue}t=(i-55296<<10|t-56320)+65536}else i&&(e-=3)>-1&&s.push(239,191,
189);if(i=null,t<128){if((e-=1)<0)break;s.push(t)}else if(t<2048){if((e-=2)<0)break;
s.push(t>>6|192,t&63|128)}else if(t<65536){if((e-=3)<0)break;s.push(t>>12|224,t>>
6&63|128,t&63|128)}else if(t<1114112){if((e-=4)<0)break;s.push(t>>18|240,t>>12&63|
128,t>>6&63|128,t&63|128)}else throw new Error("Invalid code point")}return s}a(
Mt,"utf8ToBytes");function Mo(r){let e=[];for(let t=0;t<r.length;++t)e.push(r.charCodeAt(
t)&255);return e}a(Mo,"asciiToBytes");function Do(r,e){let t,n,i,s=[];for(let o=0;o<
r.length&&!((e-=2)<0);++o)t=r.charCodeAt(o),n=t>>8,i=t%256,s.push(i),s.push(n);return s}
a(Do,"utf16leToBytes");function Kn(r){return Lt.toByteArray(Fo(r))}a(Kn,"base64T\
oBytes");function at(r,e,t,n){let i;for(i=0;i<n&&!(i+t>=e.length||i>=r.length);++i)
e[i+t]=r[i];return i}a(at,"blitBuffer");function le(r,e){return r instanceof e||
r!=null&&r.constructor!=null&&r.constructor.name!=null&&r.constructor.name===e.name}
a(le,"isInstance");function Ut(r){return r!==r}a(Ut,"numberIsNaN");var ko=function(){
let r="0123456789abcdef",e=new Array(256);for(let t=0;t<16;++t){let n=t*16;for(let i=0;i<
16;++i)e[n+i]=r[t]+r[i]}return e}();function we(r){return typeof BigInt>"u"?Oo:r}
a(we,"defineBigIntMethod");function Oo(){throw new Error("BigInt not supported")}
a(Oo,"BufferBigIntNotDefined")});var w,b,E,g,d,y,p=K(()=>{"use strict";w=globalThis,b=globalThis.setImmediate??(r=>setTimeout(
r,0)),E=globalThis.clearImmediate??(r=>clearTimeout(r)),g=globalThis.crypto??{};
g.subtle??(g.subtle={});d=typeof globalThis.Buffer=="function"&&typeof globalThis.
Buffer.allocUnsafe=="function"?globalThis.Buffer:Vn().Buffer,y=globalThis.process??
{};y.env??(y.env={});try{y.nextTick(()=>{})}catch{let e=Promise.resolve();y.nextTick=
e.then.bind(e)}});var be=C((Xc,qt)=>{"use strict";p();var Le=typeof Reflect=="object"?Reflect:null,
zn=Le&&typeof Le.apply=="function"?Le.apply:a(function(e,t,n){return Function.prototype.
apply.call(e,t,n)},"ReflectApply"),ut;Le&&typeof Le.ownKeys=="function"?ut=Le.ownKeys:
Object.getOwnPropertySymbols?ut=a(function(e){return Object.getOwnPropertyNames(
e).concat(Object.getOwnPropertySymbols(e))},"ReflectOwnKeys"):ut=a(function(e){return Object.
getOwnPropertyNames(e)},"ReflectOwnKeys");function Uo(r){console&&console.warn&&
console.warn(r)}a(Uo,"ProcessEmitWarning");var Zn=Number.isNaN||a(function(e){return e!==
e},"NumberIsNaN");function F(){F.init.call(this)}a(F,"EventEmitter");qt.exports=
F;qt.exports.once=Wo;F.EventEmitter=F;F.prototype._events=void 0;F.prototype._eventsCount=
0;F.prototype._maxListeners=void 0;var Yn=10;function ct(r){if(typeof r!="functi\
on")throw new TypeError('The "listener" argument must be of type Function. Recei\
ved type '+typeof r)}a(ct,"checkListener");Object.defineProperty(F,"defaultMaxLi\
steners",{enumerable:!0,get:function(){return Yn},set:function(r){if(typeof r!="\
number"||r<0||Zn(r))throw new RangeError('The value of "defaultMaxListeners" is \
out of range. It must be a non-negative number. Received '+r+".");Yn=r}});F.init=
function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&
(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||
void 0};F.prototype.setMaxListeners=a(function(e){if(typeof e!="number"||e<0||Zn(
e))throw new RangeError('The value of "n" is out of range. It must be a non-nega\
tive number. Received '+e+".");return this._maxListeners=e,this},"setMaxListener\
s");function Jn(r){return r._maxListeners===void 0?F.defaultMaxListeners:r._maxListeners}
a(Jn,"_getMaxListeners");F.prototype.getMaxListeners=a(function(){return Jn(this)},
"getMaxListeners");F.prototype.emit=a(function(e){for(var t=[],n=1;n<arguments.length;n++)
t.push(arguments[n]);var i=e==="error",s=this._events;if(s!==void 0)i=i&&s.error===
void 0;else if(!i)return!1;if(i){var o;if(t.length>0&&(o=t[0]),o instanceof Error)
throw o;var u=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw u.context=
o,u}var c=s[e];if(c===void 0)return!1;if(typeof c=="function")zn(c,this,t);else for(var h=c.
length,f=ni(c,h),n=0;n<h;++n)zn(f[n],this,t);return!0},"emit");function Xn(r,e,t,n){
var i,s,o;if(ct(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=
0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r.
_events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o=="functio\
n"?o=s[e]=n?[t,o]:[o,t]:n?o.unshift(t):o.push(t),i=Jn(r),i>0&&o.length>i&&!o.warned){
o.warned=!0;var u=new Error("Possible EventEmitter memory leak detected. "+o.length+
" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");
u.name="MaxListenersExceededWarning",u.emitter=r,u.type=e,u.count=o.length,Uo(u)}
return r}a(Xn,"_addListener");F.prototype.addListener=a(function(e,t){return Xn(
this,e,t,!1)},"addListener");F.prototype.on=F.prototype.addListener;F.prototype.
prependListener=a(function(e,t){return Xn(this,e,t,!0)},"prependListener");function qo(){
if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=
!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.
target,arguments)}a(qo,"onceWrapper");function ei(r,e,t){var n={fired:!1,wrapFn:void 0,
target:r,type:e,listener:t},i=qo.bind(n);return i.listener=t,n.wrapFn=i,i}a(ei,"\
_onceWrap");F.prototype.once=a(function(e,t){return ct(t),this.on(e,ei(this,e,t)),
this},"once");F.prototype.prependOnceListener=a(function(e,t){return ct(t),this.
prependListener(e,ei(this,e,t)),this},"prependOnceListener");F.prototype.removeListener=
a(function(e,t){var n,i,s,o,u;if(ct(t),i=this._events,i===void 0)return this;if(n=
i[e],n===void 0)return this;if(n===t||n.listener===t)--this._eventsCount===0?this.
_events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeList\
ener",e,n.listener||t));else if(typeof n!="function"){for(s=-1,o=n.length-1;o>=0;o--)
if(n[o]===t||n[o].listener===t){u=n[o].listener,s=o;break}if(s<0)return this;s===
0?n.shift():No(n,s),n.length===1&&(i[e]=n[0]),i.removeListener!==void 0&&this.emit(
"removeListener",e,u||t)}return this},"removeListener");F.prototype.off=F.prototype.
removeListener;F.prototype.removeAllListeners=a(function(e){var t,n,i;if(n=this.
_events,n===void 0)return this;if(n.removeListener===void 0)return arguments.length===
0?(this._events=Object.create(null),this._eventsCount=0):n[e]!==void 0&&(--this.
_eventsCount===0?this._events=Object.create(null):delete n[e]),this;if(arguments.
length===0){var s=Object.keys(n),o;for(i=0;i<s.length;++i)o=s[i],o!=="removeList\
ener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),
this._events=Object.create(null),this._eventsCount=0,this}if(t=n[e],typeof t=="f\
unction")this.removeListener(e,t);else if(t!==void 0)for(i=t.length-1;i>=0;i--)this.
removeListener(e,t[i]);return this},"removeAllListeners");function ti(r,e,t){var n=r.
_events;if(n===void 0)return[];var i=n[e];return i===void 0?[]:typeof i=="functi\
on"?t?[i.listener||i]:[i]:t?Qo(i):ni(i,i.length)}a(ti,"_listeners");F.prototype.
listeners=a(function(e){return ti(this,e,!0)},"listeners");F.prototype.rawListeners=
a(function(e){return ti(this,e,!1)},"rawListeners");F.listenerCount=function(r,e){
return typeof r.listenerCount=="function"?r.listenerCount(e):ri.call(r,e)};F.prototype.
listenerCount=ri;function ri(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t==
"function")return 1;if(t!==void 0)return t.length}return 0}a(ri,"listenerCount");
F.prototype.eventNames=a(function(){return this._eventsCount>0?ut(this._events):
[]},"eventNames");function ni(r,e){for(var t=new Array(e),n=0;n<e;++n)t[n]=r[n];
return t}a(ni,"arrayClone");function No(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.
pop()}a(No,"spliceOne");function Qo(r){for(var e=new Array(r.length),t=0;t<e.length;++t)
e[t]=r[t].listener||r[t];return e}a(Qo,"unwrapListeners");function Wo(r,e){return new Promise(
function(t,n){function i(o){r.removeListener(e,s),n(o)}a(i,"errorListener");function s(){
typeof r.removeListener=="function"&&r.removeListener("error",i),t([].slice.call(
arguments))}a(s,"resolver"),ii(r,e,s,{once:!0}),e!=="error"&&jo(r,i,{once:!0})})}
a(Wo,"once");function jo(r,e,t){typeof r.on=="function"&&ii(r,"error",e,t)}a(jo,
"addErrorHandlerIfEventEmitter");function ii(r,e,t,n){if(typeof r.on=="function")
n.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(
e,a(function i(s){n.once&&r.removeEventListener(e,i),t(s)},"wrapListener"));else
throw new TypeError('The "emitter" argument must be of type EventEmitter. Receiv\
ed type '+typeof r)}a(ii,"eventTargetAgnosticAddListener")});var He={};ne(He,{default:()=>Ho});var Ho,Ge=K(()=>{p();Ho={}});function $e(r){let e=1779033703,t=3144134277,n=1013904242,i=2773480762,s=1359893119,
o=2600822924,u=528734635,c=1541459225,h=0,f=0,m=[1116352408,1899447441,3049323471,
3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,
1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,
604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,
3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,
1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,
3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,
883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,
2361852424,2428436474,2756734187,3204031479,3329325298],x=a((B,v)=>B>>>v|B<<32-v,
"rrot"),_=new Uint32Array(64),R=new Uint8Array(64),j=a(()=>{for(let T=0,M=0;T<16;T++,
M+=4)_[T]=R[M]<<24|R[M+1]<<16|R[M+2]<<8|R[M+3];for(let T=16;T<64;T++){let M=x(_[T-
15],7)^x(_[T-15],18)^_[T-15]>>>3,H=x(_[T-2],17)^x(_[T-2],19)^_[T-2]>>>10;_[T]=_[T-
16]+M+_[T-7]+H|0}let B=e,v=t,te=n,fe=i,re=s,pe=o,I=u,L=c;for(let T=0;T<64;T++){let M=x(
re,6)^x(re,11)^x(re,25),H=re&pe^~re&I,O=L+M+H+m[T]+_[T]|0,ae=x(B,2)^x(B,13)^x(B,
22),ce=B&v^B&te^v&te,de=ae+ce|0;L=I,I=pe,pe=re,re=fe+O|0,fe=te,te=v,v=B,B=O+de|0}
e=e+B|0,t=t+v|0,n=n+te|0,i=i+fe|0,s=s+re|0,o=o+pe|0,u=u+I|0,c=c+L|0,f=0},"proces\
s"),ee=a(B=>{typeof B=="string"&&(B=new TextEncoder().encode(B));for(let v=0;v<B.
length;v++)R[f++]=B[v],f===64&&j();h+=B.length},"add"),ue=a(()=>{if(R[f++]=128,f==
64&&j(),f+8>64){for(;f<64;)R[f++]=0;j()}for(;f<58;)R[f++]=0;let B=h*8;R[f++]=B/1099511627776&
255,R[f++]=B/4294967296&255,R[f++]=B>>>24,R[f++]=B>>>16&255,R[f++]=B>>>8&255,R[f++]=
B&255,j();let v=new Uint8Array(32);return v[0]=e>>>24,v[1]=e>>>16&255,v[2]=e>>>8&
255,v[3]=e&255,v[4]=t>>>24,v[5]=t>>>16&255,v[6]=t>>>8&255,v[7]=t&255,v[8]=n>>>24,
v[9]=n>>>16&255,v[10]=n>>>8&255,v[11]=n&255,v[12]=i>>>24,v[13]=i>>>16&255,v[14]=
i>>>8&255,v[15]=i&255,v[16]=s>>>24,v[17]=s>>>16&255,v[18]=s>>>8&255,v[19]=s&255,
v[20]=o>>>24,v[21]=o>>>16&255,v[22]=o>>>8&255,v[23]=o&255,v[24]=u>>>24,v[25]=u>>>
16&255,v[26]=u>>>8&255,v[27]=u&255,v[28]=c>>>24,v[29]=c>>>16&255,v[30]=c>>>8&255,
v[31]=c&255,v},"digest");return r===void 0?{add:ee,digest:ue}:(ee(r),ue())}var si=K(
()=>{"use strict";p();a($e,"sha256")});var N,Ke,oi=K(()=>{"use strict";p();N=class N{constructor(){P(this,"_dataLength",
0);P(this,"_bufferLength",0);P(this,"_state",new Int32Array(4));P(this,"_buffer",
new ArrayBuffer(68));P(this,"_buffer8");P(this,"_buffer32");this._buffer8=new Uint8Array(
this._buffer,0,68),this._buffer32=new Uint32Array(this._buffer,0,17),this.start()}static hashByteArray(e,t=!1){
return this.onePassHasher.start().appendByteArray(e).end(t)}static hashStr(e,t=!1){
return this.onePassHasher.start().appendStr(e).end(t)}static hashAsciiStr(e,t=!1){
return this.onePassHasher.start().appendAsciiStr(e).end(t)}static _hex(e){let t=N.
hexChars,n=N.hexOut,i,s,o,u;for(u=0;u<4;u+=1)for(s=u*8,i=e[u],o=0;o<8;o+=2)n[s+1+
o]=t.charAt(i&15),i>>>=4,n[s+0+o]=t.charAt(i&15),i>>>=4;return n.join("")}static _md5cycle(e,t){
let n=e[0],i=e[1],s=e[2],o=e[3];n+=(i&s|~i&o)+t[0]-680876936|0,n=(n<<7|n>>>25)+i|
0,o+=(n&i|~n&s)+t[1]-389564586|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[2]+606105819|
0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[3]-1044525330|0,i=(i<<22|i>>>10)+s|0,n+=(i&
s|~i&o)+t[4]-176418897|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[5]+1200080426|0,o=(o<<
12|o>>>20)+n|0,s+=(o&n|~o&i)+t[6]-1473231341|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+
t[7]-45705983|0,i=(i<<22|i>>>10)+s|0,n+=(i&s|~i&o)+t[8]+1770035416|0,n=(n<<7|n>>>
25)+i|0,o+=(n&i|~n&s)+t[9]-1958414417|0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[10]-
42063|0,s=(s<<17|s>>>15)+o|0,i+=(s&o|~s&n)+t[11]-1990404162|0,i=(i<<22|i>>>10)+s|
0,n+=(i&s|~i&o)+t[12]+1804603682|0,n=(n<<7|n>>>25)+i|0,o+=(n&i|~n&s)+t[13]-40341101|
0,o=(o<<12|o>>>20)+n|0,s+=(o&n|~o&i)+t[14]-1502002290|0,s=(s<<17|s>>>15)+o|0,i+=
(s&o|~s&n)+t[15]+1236535329|0,i=(i<<22|i>>>10)+s|0,n+=(i&o|s&~o)+t[1]-165796510|
0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[6]-1069501632|0,o=(o<<9|o>>>23)+n|0,s+=(o&
i|n&~i)+t[11]+643717713|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[0]-373897302|0,i=
(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[5]-701558691|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&
~s)+t[10]+38016083|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[15]-660478335|0,s=(s<<14|
s>>>18)+o|0,i+=(s&n|o&~n)+t[4]-405537848|0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[9]+
568446438|0,n=(n<<5|n>>>27)+i|0,o+=(n&s|i&~s)+t[14]-1019803690|0,o=(o<<9|o>>>23)+
n|0,s+=(o&i|n&~i)+t[3]-187363961|0,s=(s<<14|s>>>18)+o|0,i+=(s&n|o&~n)+t[8]+1163531501|
0,i=(i<<20|i>>>12)+s|0,n+=(i&o|s&~o)+t[13]-1444681467|0,n=(n<<5|n>>>27)+i|0,o+=(n&
s|i&~s)+t[2]-51403784|0,o=(o<<9|o>>>23)+n|0,s+=(o&i|n&~i)+t[7]+1735328473|0,s=(s<<
14|s>>>18)+o|0,i+=(s&n|o&~n)+t[12]-1926607734|0,i=(i<<20|i>>>12)+s|0,n+=(i^s^o)+
t[5]-378558|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[8]-2022574463|0,o=(o<<11|o>>>21)+
n|0,s+=(o^n^i)+t[11]+1839030562|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[14]-35309556|
0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[1]-1530992060|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+
t[4]+1272893353|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[7]-155497632|0,s=(s<<16|s>>>
16)+o|0,i+=(s^o^n)+t[10]-1094730640|0,i=(i<<23|i>>>9)+s|0,n+=(i^s^o)+t[13]+681279174|
0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[0]-358537222|0,o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+
t[3]-722521979|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+t[6]+76029189|0,i=(i<<23|i>>>9)+
s|0,n+=(i^s^o)+t[9]-640364487|0,n=(n<<4|n>>>28)+i|0,o+=(n^i^s)+t[12]-421815835|0,
o=(o<<11|o>>>21)+n|0,s+=(o^n^i)+t[15]+530742520|0,s=(s<<16|s>>>16)+o|0,i+=(s^o^n)+
t[2]-995338651|0,i=(i<<23|i>>>9)+s|0,n+=(s^(i|~o))+t[0]-198630844|0,n=(n<<6|n>>>
26)+i|0,o+=(i^(n|~s))+t[7]+1126891415|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[14]-
1416354905|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[5]-57434055|0,i=(i<<21|i>>>11)+
s|0,n+=(s^(i|~o))+t[12]+1700485571|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[3]-1894986606|
0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[10]-1051523|0,s=(s<<15|s>>>17)+o|0,i+=(o^
(s|~n))+t[1]-2054922799|0,i=(i<<21|i>>>11)+s|0,n+=(s^(i|~o))+t[8]+1873313359|0,n=
(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[15]-30611744|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+
t[6]-1560198380|0,s=(s<<15|s>>>17)+o|0,i+=(o^(s|~n))+t[13]+1309151649|0,i=(i<<21|
i>>>11)+s|0,n+=(s^(i|~o))+t[4]-145523070|0,n=(n<<6|n>>>26)+i|0,o+=(i^(n|~s))+t[11]-
1120210379|0,o=(o<<10|o>>>22)+n|0,s+=(n^(o|~i))+t[2]+718787259|0,s=(s<<15|s>>>17)+
o|0,i+=(o^(s|~n))+t[9]-343485551|0,i=(i<<21|i>>>11)+s|0,e[0]=n+e[0]|0,e[1]=i+e[1]|
0,e[2]=s+e[2]|0,e[3]=o+e[3]|0}start(){return this._dataLength=0,this._bufferLength=
0,this._state.set(N.stateIdentity),this}appendStr(e){let t=this._buffer8,n=this.
_buffer32,i=this._bufferLength,s,o;for(o=0;o<e.length;o+=1){if(s=e.charCodeAt(o),
s<128)t[i++]=s;else if(s<2048)t[i++]=(s>>>6)+192,t[i++]=s&63|128;else if(s<55296||
s>56319)t[i++]=(s>>>12)+224,t[i++]=s>>>6&63|128,t[i++]=s&63|128;else{if(s=(s-55296)*
1024+(e.charCodeAt(++o)-56320)+65536,s>1114111)throw new Error("Unicode standard\
 supports code points up to U+10FFFF");t[i++]=(s>>>18)+240,t[i++]=s>>>12&63|128,
t[i++]=s>>>6&63|128,t[i++]=s&63|128}i>=64&&(this._dataLength+=64,N._md5cycle(this.
_state,n),i-=64,n[0]=n[16])}return this._bufferLength=i,this}appendAsciiStr(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e.charCodeAt(o++);if(i<64)break;this._dataLength+=64,N._md5cycle(
this._state,n),i=0}return this._bufferLength=i,this}appendByteArray(e){let t=this.
_buffer8,n=this._buffer32,i=this._bufferLength,s,o=0;for(;;){for(s=Math.min(e.length-
o,64-i);s--;)t[i++]=e[o++];if(i<64)break;this._dataLength+=64,N._md5cycle(this._state,
n),i=0}return this._bufferLength=i,this}getState(){let e=this._state;return{buffer:String.
fromCharCode.apply(null,Array.from(this._buffer8)),buflen:this._bufferLength,length:this.
_dataLength,state:[e[0],e[1],e[2],e[3]]}}setState(e){let t=e.buffer,n=e.state,i=this.
_state,s;for(this._dataLength=e.length,this._bufferLength=e.buflen,i[0]=n[0],i[1]=
n[1],i[2]=n[2],i[3]=n[3],s=0;s<t.length;s+=1)this._buffer8[s]=t.charCodeAt(s)}end(e=!1){
let t=this._bufferLength,n=this._buffer8,i=this._buffer32,s=(t>>2)+1;this._dataLength+=
t;let o=this._dataLength*8;if(n[t]=128,n[t+1]=n[t+2]=n[t+3]=0,i.set(N.buffer32Identity.
subarray(s),s),t>55&&(N._md5cycle(this._state,i),i.set(N.buffer32Identity)),o<=4294967295)
i[14]=o;else{let u=o.toString(16).match(/(.*?)(.{0,8})$/);if(u===null)return;let c=parseInt(
u[2],16),h=parseInt(u[1],16)||0;i[14]=c,i[15]=h}return N._md5cycle(this._state,i),
e?this._state:N._hex(this._state)}};a(N,"Md5"),P(N,"stateIdentity",new Int32Array(
[1732584193,-271733879,-1732584194,271733878])),P(N,"buffer32Identity",new Int32Array(
[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])),P(N,"hexChars","0123456789abcdef"),P(N,"hexO\
ut",[]),P(N,"onePassHasher",new N);Ke=N});var Nt={};ne(Nt,{createHash:()=>$o,createHmac:()=>Ko,randomBytes:()=>Go});function Go(r){
return g.getRandomValues(d.alloc(r))}function $o(r){if(r==="sha256")return{update:function(e){
return{digest:function(){return d.from($e(e))}}}};if(r==="md5")return{update:function(e){
return{digest:function(){return typeof e=="string"?Ke.hashStr(e):Ke.hashByteArray(
e)}}}};throw new Error(`Hash type '${r}' not supported`)}function Ko(r,e){if(r!==
"sha256")throw new Error(`Only sha256 is supported (requested: '${r}')`);return{
update:function(t){return{digest:function(){typeof e=="string"&&(e=new TextEncoder().
encode(e)),typeof t=="string"&&(t=new TextEncoder().encode(t));let n=e.length;if(n>
64)e=$e(e);else if(n<64){let c=new Uint8Array(64);c.set(e),e=c}let i=new Uint8Array(
64),s=new Uint8Array(64);for(let c=0;c<64;c++)i[c]=54^e[c],s[c]=92^e[c];let o=new Uint8Array(
t.length+64);o.set(i,0),o.set(t,64);let u=new Uint8Array(64+32);return u.set(s,0),
u.set($e(o),64),d.from($e(u))}}}}}var Qt=K(()=>{p();si();oi();a(Go,"randomBytes");
a($o,"createHash");a(Ko,"createHmac")});var jt=C(ai=>{"use strict";p();ai.parse=function(r,e){return new Wt(r,e).parse()};
var ht=class ht{constructor(e,t){this.source=e,this.transform=t||Vo,this.position=
0,this.entries=[],this.recorded=[],this.dimension=0}isEof(){return this.position>=
this.source.length}nextCharacter(){var e=this.source[this.position++];return e===
"\\"?{value:this.source[this.position++],escaped:!0}:{value:e,escaped:!1}}record(e){
this.recorded.push(e)}newEntry(e){var t;(this.recorded.length>0||e)&&(t=this.recorded.
join(""),t==="NULL"&&!e&&(t=null),t!==null&&(t=this.transform(t)),this.entries.push(
t),this.recorded=[])}consumeDimensions(){if(this.source[0]==="[")for(;!this.isEof();){
var e=this.nextCharacter();if(e.value==="=")break}}parse(e){var t,n,i;for(this.consumeDimensions();!this.
isEof();)if(t=this.nextCharacter(),t.value==="{"&&!i)this.dimension++,this.dimension>
1&&(n=new ht(this.source.substr(this.position-1),this.transform),this.entries.push(
n.parse(!0)),this.position+=n.position-2);else if(t.value==="}"&&!i){if(this.dimension--,
!this.dimension&&(this.newEntry(),e))return this.entries}else t.value==='"'&&!t.
escaped?(i&&this.newEntry(!0),i=!i):t.value===","&&!i?this.newEntry():this.record(
t.value);if(this.dimension!==0)throw new Error("array dimension not balanced");return this.
entries}};a(ht,"ArrayParser");var Wt=ht;function Vo(r){return r}a(Vo,"identity")});var Ht=C((mh,ui)=>{p();var zo=jt();ui.exports={create:function(r,e){return{parse:function(){
return zo.parse(r,e)}}}}});var li=C((wh,hi)=>{"use strict";p();var Yo=/(\d{1,})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})(\.\d{1,})?.*?( BC)?$/,
Zo=/^(\d{1,})-(\d{2})-(\d{2})( BC)?$/,Jo=/([Z+-])(\d{2})?:?(\d{2})?:?(\d{2})?/,Xo=/^-?infinity$/;
hi.exports=a(function(e){if(Xo.test(e))return Number(e.replace("i","I"));var t=Yo.
exec(e);if(!t)return ea(e)||null;var n=!!t[8],i=parseInt(t[1],10);n&&(i=ci(i));var s=parseInt(
t[2],10)-1,o=t[3],u=parseInt(t[4],10),c=parseInt(t[5],10),h=parseInt(t[6],10),f=t[7];
f=f?1e3*parseFloat(f):0;var m,x=ta(e);return x!=null?(m=new Date(Date.UTC(i,s,o,
u,c,h,f)),Gt(i)&&m.setUTCFullYear(i),x!==0&&m.setTime(m.getTime()-x)):(m=new Date(
i,s,o,u,c,h,f),Gt(i)&&m.setFullYear(i)),m},"parseDate");function ea(r){var e=Zo.
exec(r);if(e){var t=parseInt(e[1],10),n=!!e[4];n&&(t=ci(t));var i=parseInt(e[2],
10)-1,s=e[3],o=new Date(t,i,s);return Gt(t)&&o.setFullYear(t),o}}a(ea,"getDate");
function ta(r){if(r.endsWith("+00"))return 0;var e=Jo.exec(r.split(" ")[1]);if(e){
var t=e[1];if(t==="Z")return 0;var n=t==="-"?-1:1,i=parseInt(e[2],10)*3600+parseInt(
e[3]||0,10)*60+parseInt(e[4]||0,10);return i*n*1e3}}a(ta,"timeZoneOffset");function ci(r){
return-(r-1)}a(ci,"bcYearToNegativeYear");function Gt(r){return r>=0&&r<100}a(Gt,
"is0To99")});var pi=C((xh,fi)=>{p();fi.exports=na;var ra=Object.prototype.hasOwnProperty;function na(r){
for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var n in t)ra.call(t,
n)&&(r[n]=t[n])}return r}a(na,"extend")});var mi=C((_h,yi)=>{"use strict";p();var ia=pi();yi.exports=Re;function Re(r){if(!(this instanceof
Re))return new Re(r);ia(this,ma(r))}a(Re,"PostgresInterval");var sa=["seconds","\
minutes","hours","days","months","years"];Re.prototype.toPostgres=function(){var r=sa.
filter(this.hasOwnProperty,this);return this.milliseconds&&r.indexOf("seconds")<
0&&r.push("seconds"),r.length===0?"0":r.map(function(e){var t=this[e]||0;return e===
"seconds"&&this.milliseconds&&(t=(t+this.milliseconds/1e3).toFixed(6).replace(/\.?0+$/,
"")),t+" "+e},this).join(" ")};var oa={years:"Y",months:"M",days:"D",hours:"H",minutes:"\
M",seconds:"S"},aa=["years","months","days"],ua=["hours","minutes","seconds"];Re.
prototype.toISOString=Re.prototype.toISO=function(){var r=aa.map(t,this).join(""),
e=ua.map(t,this).join("");return"P"+r+"T"+e;function t(n){var i=this[n]||0;return n===
"seconds"&&this.milliseconds&&(i=(i+this.milliseconds/1e3).toFixed(6).replace(/0+$/,
"")),i+oa[n]}};var $t="([+-]?\\d+)",ca=$t+"\\s+years?",ha=$t+"\\s+mons?",la=$t+"\
\\s+days?",fa="([+-])?([\\d]*):(\\d\\d):(\\d\\d)\\.?(\\d{1,6})?",pa=new RegExp([
ca,ha,la,fa].map(function(r){return"("+r+")?"}).join("\\s*")),di={years:2,months:4,
days:6,hours:9,minutes:10,seconds:11,milliseconds:12},da=["hours","minutes","sec\
onds","milliseconds"];function ya(r){var e=r+"000000".slice(r.length);return parseInt(
e,10)/1e3}a(ya,"parseMilliseconds");function ma(r){if(!r)return{};var e=pa.exec(
r),t=e[8]==="-";return Object.keys(di).reduce(function(n,i){var s=di[i],o=e[s];return!o||
(o=i==="milliseconds"?ya(o):parseInt(o,10),!o)||(t&&~da.indexOf(i)&&(o*=-1),n[i]=
o),n},{})}a(ma,"parse")});var wi=C((Ih,gi)=>{"use strict";p();gi.exports=a(function(e){if(/^\\x/.test(e))return new d(
e.substr(2),"hex");for(var t="",n=0;n<e.length;)if(e[n]!=="\\")t+=e[n],++n;else if(/[0-7]{3}/.
test(e.substr(n+1,3)))t+=String.fromCharCode(parseInt(e.substr(n+1,3),8)),n+=4;else{
for(var i=1;n+i<e.length&&e[n+i]==="\\";)i++;for(var s=0;s<Math.floor(i/2);++s)t+=
"\\";n+=Math.floor(i/2)*2}return new d(t,"binary")},"parseBytea")});var Ai=C((Bh,_i)=>{p();var Ve=jt(),ze=Ht(),lt=li(),Si=mi(),xi=wi();function ft(r){
return a(function(t){return t===null?t:r(t)},"nullAllowed")}a(ft,"allowNull");function Ei(r){
return r===null?r:r==="TRUE"||r==="t"||r==="true"||r==="y"||r==="yes"||r==="on"||
r==="1"}a(Ei,"parseBool");function ga(r){return r?Ve.parse(r,Ei):null}a(ga,"pars\
eBoolArray");function wa(r){return parseInt(r,10)}a(wa,"parseBaseTenInt");function Kt(r){
return r?Ve.parse(r,ft(wa)):null}a(Kt,"parseIntegerArray");function ba(r){return r?
Ve.parse(r,ft(function(e){return vi(e).trim()})):null}a(ba,"parseBigIntegerArray");
var Sa=a(function(r){if(!r)return null;var e=ze.create(r,function(t){return t!==
null&&(t=Zt(t)),t});return e.parse()},"parsePointArray"),Vt=a(function(r){if(!r)
return null;var e=ze.create(r,function(t){return t!==null&&(t=parseFloat(t)),t});
return e.parse()},"parseFloatArray"),se=a(function(r){if(!r)return null;var e=ze.
create(r);return e.parse()},"parseStringArray"),zt=a(function(r){if(!r)return null;
var e=ze.create(r,function(t){return t!==null&&(t=lt(t)),t});return e.parse()},"\
parseDateArray"),xa=a(function(r){if(!r)return null;var e=ze.create(r,function(t){
return t!==null&&(t=Si(t)),t});return e.parse()},"parseIntervalArray"),Ea=a(function(r){
return r?Ve.parse(r,ft(xi)):null},"parseByteAArray"),Yt=a(function(r){return parseInt(
r,10)},"parseInteger"),vi=a(function(r){var e=String(r);return/^\d+$/.test(e)?e:
r},"parseBigInteger"),bi=a(function(r){return r?Ve.parse(r,ft(JSON.parse)):null},
"parseJsonArray"),Zt=a(function(r){return r[0]!=="("?null:(r=r.substring(1,r.length-
1).split(","),{x:parseFloat(r[0]),y:parseFloat(r[1])})},"parsePoint"),va=a(function(r){
if(r[0]!=="<"&&r[1]!=="(")return null;for(var e="(",t="",n=!1,i=2;i<r.length-1;i++){
if(n||(e+=r[i]),r[i]===")"){n=!0;continue}else if(!n)continue;r[i]!==","&&(t+=r[i])}
var s=Zt(e);return s.radius=parseFloat(t),s},"parseCircle"),_a=a(function(r){r(20,
vi),r(21,Yt),r(23,Yt),r(26,Yt),r(700,parseFloat),r(701,parseFloat),r(16,Ei),r(1082,
lt),r(1114,lt),r(1184,lt),r(600,Zt),r(651,se),r(718,va),r(1e3,ga),r(1001,Ea),r(1005,
Kt),r(1007,Kt),r(1028,Kt),r(1016,ba),r(1017,Sa),r(1021,Vt),r(1022,Vt),r(1231,Vt),
r(1014,se),r(1015,se),r(1008,se),r(1009,se),r(1040,se),r(1041,se),r(1115,zt),r(1182,
zt),r(1185,zt),r(1186,Si),r(1187,xa),r(17,xi),r(114,JSON.parse.bind(JSON)),r(3802,
JSON.parse.bind(JSON)),r(199,bi),r(3807,bi),r(3907,se),r(2951,se),r(791,se),r(1183,
se),r(1270,se)},"init");_i.exports={init:_a}});var Ii=C((Fh,Ci)=>{"use strict";p();var Z=1e6;function Aa(r){var e=r.readInt32BE(
0),t=r.readUInt32BE(4),n="";e<0&&(e=~e+(t===0),t=~t+1>>>0,n="-");var i="",s,o,u,
c,h,f;{if(s=e%Z,e=e/Z>>>0,o=4294967296*s+t,t=o/Z>>>0,u=""+(o-Z*t),t===0&&e===0)return n+
u+i;for(c="",h=6-u.length,f=0;f<h;f++)c+="0";i=c+u+i}{if(s=e%Z,e=e/Z>>>0,o=4294967296*
s+t,t=o/Z>>>0,u=""+(o-Z*t),t===0&&e===0)return n+u+i;for(c="",h=6-u.length,f=0;f<
h;f++)c+="0";i=c+u+i}{if(s=e%Z,e=e/Z>>>0,o=4294967296*s+t,t=o/Z>>>0,u=""+(o-Z*t),
t===0&&e===0)return n+u+i;for(c="",h=6-u.length,f=0;f<h;f++)c+="0";i=c+u+i}return s=
e%Z,o=4294967296*s+t,u=""+o%Z,n+u+i}a(Aa,"readInt8");Ci.exports=Aa});var Ri=C((kh,Li)=>{p();var Ca=Ii(),D=a(function(r,e,t,n,i){t=t||0,n=n||!1,i=i||function(_,R,j){
return _*Math.pow(2,j)+R};var s=t>>3,o=a(function(_){return n?~_&255:_},"inv"),u=255,
c=8-t%8;e<c&&(u=255<<8-e&255,c=e),t&&(u=u>>t%8);var h=0;t%8+e>=8&&(h=i(0,o(r[s])&
u,c));for(var f=e+t>>3,m=s+1;m<f;m++)h=i(h,o(r[m]),8);var x=(e+t)%8;return x>0&&
(h=i(h,o(r[f])>>8-x,x)),h},"parseBits"),Bi=a(function(r,e,t){var n=Math.pow(2,t-
1)-1,i=D(r,1),s=D(r,t,1);if(s===0)return 0;var o=1,u=a(function(h,f,m){h===0&&(h=
1);for(var x=1;x<=m;x++)o/=2,(f&1<<m-x)>0&&(h+=o);return h},"parsePrecisionBits"),
c=D(r,e,t+1,!1,u);return s==Math.pow(2,t+1)-1?c===0?i===0?1/0:-1/0:NaN:(i===0?1:
-1)*Math.pow(2,s-n)*c},"parseFloatFromBits"),Ia=a(function(r){return D(r,1)==1?-1*
(D(r,15,1,!0)+1):D(r,15,1)},"parseInt16"),Ti=a(function(r){return D(r,1)==1?-1*(D(
r,31,1,!0)+1):D(r,31,1)},"parseInt32"),Ta=a(function(r){return Bi(r,23,8)},"pars\
eFloat32"),Pa=a(function(r){return Bi(r,52,11)},"parseFloat64"),Ba=a(function(r){
var e=D(r,16,32);if(e==49152)return NaN;for(var t=Math.pow(1e4,D(r,16,16)),n=0,i=[],
s=D(r,16),o=0;o<s;o++)n+=D(r,16,64+16*o)*t,t/=1e4;var u=Math.pow(10,D(r,16,48));
return(e===0?1:-1)*Math.round(n*u)/u},"parseNumeric"),Pi=a(function(r,e){var t=D(
e,1),n=D(e,63,1),i=new Date((t===0?1:-1)*n/1e3+9466848e5);return r||i.setTime(i.
getTime()+i.getTimezoneOffset()*6e4),i.usec=n%1e3,i.getMicroSeconds=function(){return this.
usec},i.setMicroSeconds=function(s){this.usec=s},i.getUTCMicroSeconds=function(){
return this.usec},i},"parseDate"),Ye=a(function(r){for(var e=D(r,32),t=D(r,32,32),
n=D(r,32,64),i=96,s=[],o=0;o<e;o++)s[o]=D(r,32,i),i+=32,i+=32;var u=a(function(h){
var f=D(r,32,i);if(i+=32,f==4294967295)return null;var m;if(h==23||h==20)return m=
D(r,f*8,i),i+=f*8,m;if(h==25)return m=r.toString(this.encoding,i>>3,(i+=f<<3)>>3),
m;console.log("ERROR: ElementType not implemented: "+h)},"parseElement"),c=a(function(h,f){
var m=[],x;if(h.length>1){var _=h.shift();for(x=0;x<_;x++)m[x]=c(h,f);h.unshift(
_)}else for(x=0;x<h[0];x++)m[x]=u(f);return m},"parse");return c(s,n)},"parseArr\
ay"),La=a(function(r){return r.toString("utf8")},"parseText"),Ra=a(function(r){return r===
null?null:D(r,8)>0},"parseBool"),Fa=a(function(r){r(20,Ca),r(21,Ia),r(23,Ti),r(26,
Ti),r(1700,Ba),r(700,Ta),r(701,Pa),r(16,Ra),r(1114,Pi.bind(null,!1)),r(1184,Pi.bind(
null,!0)),r(1e3,Ye),r(1007,Ye),r(1016,Ye),r(1008,Ye),r(1009,Ye),r(25,La)},"init");
Li.exports={init:Fa}});var Mi=C((qh,Fi)=>{p();Fi.exports={BOOL:16,BYTEA:17,CHAR:18,INT8:20,INT2:21,INT4:23,
REGPROC:24,TEXT:25,OID:26,TID:27,XID:28,CID:29,JSON:114,XML:142,PG_NODE_TREE:194,
SMGR:210,PATH:602,POLYGON:604,CIDR:650,FLOAT4:700,FLOAT8:701,ABSTIME:702,RELTIME:703,
TINTERVAL:704,CIRCLE:718,MACADDR8:774,MONEY:790,MACADDR:829,INET:869,ACLITEM:1033,
BPCHAR:1042,VARCHAR:1043,DATE:1082,TIME:1083,TIMESTAMP:1114,TIMESTAMPTZ:1184,INTERVAL:1186,
TIMETZ:1266,BIT:1560,VARBIT:1562,NUMERIC:1700,REFCURSOR:1790,REGPROCEDURE:2202,REGOPER:2203,
REGOPERATOR:2204,REGCLASS:2205,REGTYPE:2206,UUID:2950,TXID_SNAPSHOT:2970,PG_LSN:3220,
PG_NDISTINCT:3361,PG_DEPENDENCIES:3402,TSVECTOR:3614,TSQUERY:3615,GTSVECTOR:3642,
REGCONFIG:3734,REGDICTIONARY:3769,JSONB:3802,REGNAMESPACE:4089,REGROLE:4096}});var Xe=C(Je=>{p();var Ma=Ai(),Da=Ri(),ka=Ht(),Oa=Mi();Je.getTypeParser=Ua;Je.setTypeParser=
qa;Je.arrayParser=ka;Je.builtins=Oa;var Ze={text:{},binary:{}};function Di(r){return String(
r)}a(Di,"noParse");function Ua(r,e){return e=e||"text",Ze[e]&&Ze[e][r]||Di}a(Ua,
"getTypeParser");function qa(r,e,t){typeof e=="function"&&(t=e,e="text"),Ze[e][r]=
t}a(qa,"setTypeParser");Ma.init(function(r,e){Ze.text[r]=e});Da.init(function(r,e){
Ze.binary[r]=e})});var et=C((Hh,Jt)=>{"use strict";p();Jt.exports={host:"localhost",user:y.platform===
"win32"?y.env.USERNAME:y.env.USER,database:void 0,password:null,connectionString:void 0,
port:5432,rows:0,binary:!1,max:10,idleTimeoutMillis:3e4,client_encoding:"",ssl:!1,
application_name:void 0,fallback_application_name:void 0,options:void 0,parseInputDatesAsUTC:!1,
statement_timeout:!1,lock_timeout:!1,idle_in_transaction_session_timeout:!1,query_timeout:!1,
connect_timeout:0,keepalives:1,keepalives_idle:0};var Fe=Xe(),Na=Fe.getTypeParser(
20,"text"),Qa=Fe.getTypeParser(1016,"text");Jt.exports.__defineSetter__("parseIn\
t8",function(r){Fe.setTypeParser(20,"text",r?Fe.getTypeParser(23,"text"):Na),Fe.
setTypeParser(1016,"text",r?Fe.getTypeParser(1007,"text"):Qa)})});var tt=C(($h,Oi)=>{"use strict";p();var Wa=(Qt(),q(Nt)),ja=et();function Ha(r){var e=r.
replace(/\\/g,"\\\\").replace(/"/g,'\\"');return'"'+e+'"'}a(Ha,"escapeElement");
function ki(r){for(var e="{",t=0;t<r.length;t++)t>0&&(e=e+","),r[t]===null||typeof r[t]>
"u"?e=e+"NULL":Array.isArray(r[t])?e=e+ki(r[t]):r[t]instanceof d?e+="\\\\x"+r[t].
toString("hex"):e+=Ha(pt(r[t]));return e=e+"}",e}a(ki,"arrayString");var pt=a(function(r,e){
if(r==null)return null;if(r instanceof d)return r;if(ArrayBuffer.isView(r)){var t=d.
from(r.buffer,r.byteOffset,r.byteLength);return t.length===r.byteLength?t:t.slice(
r.byteOffset,r.byteOffset+r.byteLength)}return r instanceof Date?ja.parseInputDatesAsUTC?
Ka(r):$a(r):Array.isArray(r)?ki(r):typeof r=="object"?Ga(r,e):r.toString()},"pre\
pareValue");function Ga(r,e){if(r&&typeof r.toPostgres=="function"){if(e=e||[],e.
indexOf(r)!==-1)throw new Error('circular reference detected while preparing "'+
r+'" for query');return e.push(r),pt(r.toPostgres(pt),e)}return JSON.stringify(r)}
a(Ga,"prepareObject");function $(r,e){for(r=""+r;r.length<e;)r="0"+r;return r}a(
$,"pad");function $a(r){var e=-r.getTimezoneOffset(),t=r.getFullYear(),n=t<1;n&&
(t=Math.abs(t)+1);var i=$(t,4)+"-"+$(r.getMonth()+1,2)+"-"+$(r.getDate(),2)+"T"+
$(r.getHours(),2)+":"+$(r.getMinutes(),2)+":"+$(r.getSeconds(),2)+"."+$(r.getMilliseconds(),
3);return e<0?(i+="-",e*=-1):i+="+",i+=$(Math.floor(e/60),2)+":"+$(e%60,2),n&&(i+=
" BC"),i}a($a,"dateToString");function Ka(r){var e=r.getUTCFullYear(),t=e<1;t&&(e=
Math.abs(e)+1);var n=$(e,4)+"-"+$(r.getUTCMonth()+1,2)+"-"+$(r.getUTCDate(),2)+"\
T"+$(r.getUTCHours(),2)+":"+$(r.getUTCMinutes(),2)+":"+$(r.getUTCSeconds(),2)+"."+
$(r.getUTCMilliseconds(),3);return n+="+00:00",t&&(n+=" BC"),n}a(Ka,"dateToStrin\
gUTC");function Va(r,e,t){return r=typeof r=="string"?{text:r}:r,e&&(typeof e=="\
function"?r.callback=e:r.values=e),t&&(r.callback=t),r}a(Va,"normalizeQueryConfi\
g");var Xt=a(function(r){return Wa.createHash("md5").update(r,"utf-8").digest("h\
ex")},"md5"),za=a(function(r,e,t){var n=Xt(e+r),i=Xt(d.concat([d.from(n),t]));return"\
md5"+i},"postgresMd5PasswordHash");Oi.exports={prepareValue:a(function(e){return pt(
e)},"prepareValueWrapper"),normalizeQueryConfig:Va,postgresMd5PasswordHash:za,md5:Xt}});var Wi=C((zh,Qi)=>{"use strict";p();var er=(Qt(),q(Nt));function Ya(r){if(r.indexOf(
"SCRAM-SHA-256")===-1)throw new Error("SASL: Only mechanism SCRAM-SHA-256 is cur\
rently supported");let e=er.randomBytes(18).toString("base64");return{mechanism:"\
SCRAM-SHA-256",clientNonce:e,response:"n,,n=*,r="+e,message:"SASLInitialResponse"}}
a(Ya,"startSession");function Za(r,e,t){if(r.message!=="SASLInitialResponse")throw new Error(
"SASL: Last message was not SASLInitialResponse");if(typeof e!="string")throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: client password must be a string");if(typeof t!=
"string")throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serverData must be a\
 string");let n=eu(t);if(n.nonce.startsWith(r.clientNonce)){if(n.nonce.length===
r.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: server n\
once is too short")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: serv\
er nonce does not start with client nonce");var i=d.from(n.salt,"base64"),s=nu(e,
i,n.iteration),o=Me(s,"Client Key"),u=ru(o),c="n=*,r="+r.clientNonce,h="r="+n.nonce+
",s="+n.salt+",i="+n.iteration,f="c=biws,r="+n.nonce,m=c+","+h+","+f,x=Me(u,m),_=Ni(
o,x),R=_.toString("base64"),j=Me(s,"Server Key"),ee=Me(j,m);r.message="SASLRespo\
nse",r.serverSignature=ee.toString("base64"),r.response=f+",p="+R}a(Za,"continue\
Session");function Ja(r,e){if(r.message!=="SASLResponse")throw new Error("SASL: \
Last message was not SASLResponse");if(typeof e!="string")throw new Error("SASL:\
 SCRAM-SERVER-FINAL-MESSAGE: serverData must be a string");let{serverSignature:t}=tu(
e);if(t!==r.serverSignature)throw new Error("SASL: SCRAM-SERVER-FINAL-MESSAGE: s\
erver signature does not match")}a(Ja,"finalizeSession");function Xa(r){if(typeof r!=
"string")throw new TypeError("SASL: text must be a string");return r.split("").map(
(e,t)=>r.charCodeAt(t)).every(e=>e>=33&&e<=43||e>=45&&e<=126)}a(Xa,"isPrintableC\
hars");function Ui(r){return/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(r)}a(Ui,"isBase64");function qi(r){if(typeof r!="string")throw new TypeError(
"SASL: attribute pairs text must be a string");return new Map(r.split(",").map(e=>{
if(!/^.=/.test(e))throw new Error("SASL: Invalid attribute pair entry");let t=e[0],
n=e.substring(2);return[t,n]}))}a(qi,"parseAttributePairs");function eu(r){let e=qi(
r),t=e.get("r");if(t){if(!Xa(t))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAG\
E: nonce must only contain printable characters")}else throw new Error("SASL: SC\
RAM-SERVER-FIRST-MESSAGE: nonce missing");let n=e.get("s");if(n){if(!Ui(n))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: salt must be base64")}else throw new Error("S\
ASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing");let i=e.get("i");if(i){if(!/^[1-9][0-9]*$/.
test(i))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: invalid iteration cou\
nt")}else throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: iteration missing");
let s=parseInt(i,10);return{nonce:t,salt:n,iteration:s}}a(eu,"parseServerFirstMe\
ssage");function tu(r){let t=qi(r).get("v");if(t){if(!Ui(t))throw new Error("SAS\
L: SCRAM-SERVER-FINAL-MESSAGE: server signature must be base64")}else throw new Error(
"SASL: SCRAM-SERVER-FINAL-MESSAGE: server signature is missing");return{serverSignature:t}}
a(tu,"parseServerFinalMessage");function Ni(r,e){if(!d.isBuffer(r))throw new TypeError(
"first argument must be a Buffer");if(!d.isBuffer(e))throw new TypeError("second\
 argument must be a Buffer");if(r.length!==e.length)throw new Error("Buffer leng\
ths must match");if(r.length===0)throw new Error("Buffers cannot be empty");return d.
from(r.map((t,n)=>r[n]^e[n]))}a(Ni,"xorBuffers");function ru(r){return er.createHash(
"sha256").update(r).digest()}a(ru,"sha256");function Me(r,e){return er.createHmac(
"sha256",r).update(e).digest()}a(Me,"hmacSha256");function nu(r,e,t){for(var n=Me(
r,d.concat([e,d.from([0,0,0,1])])),i=n,s=0;s<t-1;s++)n=Me(r,n),i=Ni(i,n);return i}
a(nu,"Hi");Qi.exports={startSession:Ya,continueSession:Za,finalizeSession:Ja}});var tr={};ne(tr,{join:()=>iu});function iu(...r){return r.join("/")}var rr=K(()=>{
p();a(iu,"join")});var nr={};ne(nr,{stat:()=>su});function su(r,e){e(new Error("No filesystem"))}var ir=K(
()=>{p();a(su,"stat")});var sr={};ne(sr,{default:()=>ou});var ou,or=K(()=>{p();ou={}});var ji={};ne(ji,{StringDecoder:()=>ar});var ur,ar,Hi=K(()=>{p();ur=class ur{constructor(e){
P(this,"td");this.td=new TextDecoder(e)}write(e){return this.td.decode(e,{stream:!0})}end(e){
return this.td.decode(e)}};a(ur,"StringDecoder");ar=ur});var Vi=C((sl,Ki)=>{"use strict";p();var{Transform:au}=(or(),q(sr)),{StringDecoder:uu}=(Hi(),q(ji)),
Se=Symbol("last"),dt=Symbol("decoder");function cu(r,e,t){let n;if(this.overflow){
if(n=this[dt].write(r).split(this.matcher),n.length===1)return t();n.shift(),this.
overflow=!1}else this[Se]+=this[dt].write(r),n=this[Se].split(this.matcher);this[Se]=
n.pop();for(let i=0;i<n.length;i++)try{$i(this,this.mapper(n[i]))}catch(s){return t(
s)}if(this.overflow=this[Se].length>this.maxLength,this.overflow&&!this.skipOverflow){
t(new Error("maximum buffer reached"));return}t()}a(cu,"transform");function hu(r){
if(this[Se]+=this[dt].end(),this[Se])try{$i(this,this.mapper(this[Se]))}catch(e){
return r(e)}r()}a(hu,"flush");function $i(r,e){e!==void 0&&r.push(e)}a($i,"push");
function Gi(r){return r}a(Gi,"noop");function lu(r,e,t){switch(r=r||/\r?\n/,e=e||
Gi,t=t||{},arguments.length){case 1:typeof r=="function"?(e=r,r=/\r?\n/):typeof r==
"object"&&!(r instanceof RegExp)&&!r[Symbol.split]&&(t=r,r=/\r?\n/);break;case 2:
typeof r=="function"?(t=e,e=r,r=/\r?\n/):typeof e=="object"&&(t=e,e=Gi)}t=Object.
assign({},t),t.autoDestroy=!0,t.transform=cu,t.flush=hu,t.readableObjectMode=!0;
let n=new au(t);return n[Se]="",n[dt]=new uu("utf8"),n.matcher=r,n.mapper=e,n.maxLength=
t.maxLength,n.skipOverflow=t.skipOverflow||!1,n.overflow=!1,n._destroy=function(i,s){
this._writableState.errorEmitted=!1,s(i)},n}a(lu,"split");Ki.exports=lu});var Zi=C((ul,me)=>{"use strict";p();var zi=(rr(),q(tr)),fu=(or(),q(sr)).Stream,pu=Vi(),
Yi=(Ge(),q(He)),du=5432,yt=y.platform==="win32",rt=y.stderr,yu=56,mu=7,gu=61440,
wu=32768;function bu(r){return(r&gu)==wu}a(bu,"isRegFile");var De=["host","port",
"database","user","password"],cr=De.length,Su=De[cr-1];function hr(){var r=rt instanceof
fu&&rt.writable===!0;if(r){var e=Array.prototype.slice.call(arguments).concat(`
`);rt.write(Yi.format.apply(Yi,e))}}a(hr,"warn");Object.defineProperty(me.exports,
"isWin",{get:function(){return yt},set:function(r){yt=r}});me.exports.warnTo=function(r){
var e=rt;return rt=r,e};me.exports.getFileName=function(r){var e=r||y.env,t=e.PGPASSFILE||
(yt?zi.join(e.APPDATA||"./","postgresql","pgpass.conf"):zi.join(e.HOME||"./",".p\
gpass"));return t};me.exports.usePgPass=function(r,e){return Object.prototype.hasOwnProperty.
call(y.env,"PGPASSWORD")?!1:yt?!0:(e=e||"<unkn>",bu(r.mode)?r.mode&(yu|mu)?(hr('\
WARNING: password file "%s" has group or world access; permissions should be u=r\
w (0600) or less',e),!1):!0:(hr('WARNING: password file "%s" is not a plain file',
e),!1))};var xu=me.exports.match=function(r,e){return De.slice(0,-1).reduce(function(t,n,i){
return i==1&&Number(r[n]||du)===Number(e[n])?t&&!0:t&&(e[n]==="*"||e[n]===r[n])},
!0)};me.exports.getPassword=function(r,e,t){var n,i=e.pipe(pu());function s(c){var h=Eu(
c);h&&vu(h)&&xu(r,h)&&(n=h[Su],i.end())}a(s,"onLine");var o=a(function(){e.destroy(),
t(n)},"onEnd"),u=a(function(c){e.destroy(),hr("WARNING: error on reading file: %\
s",c),t(void 0)},"onErr");e.on("error",u),i.on("data",s).on("end",o).on("error",
u)};var Eu=me.exports.parseLine=function(r){if(r.length<11||r.match(/^\s+#/))return null;
for(var e="",t="",n=0,i=0,s=0,o={},u=!1,c=a(function(f,m,x){var _=r.substring(m,
x);Object.hasOwnProperty.call(y.env,"PGPASS_NO_DEESCAPE")||(_=_.replace(/\\([:\\])/g,
"$1")),o[De[f]]=_},"addToObj"),h=0;h<r.length-1;h+=1){if(e=r.charAt(h+1),t=r.charAt(
h),u=n==cr-1,u){c(n,i);break}h>=0&&e==":"&&t!=="\\"&&(c(n,i,h+1),i=h+2,n+=1)}return o=
Object.keys(o).length===cr?o:null,o},vu=me.exports.isValidEntry=function(r){for(var e={
0:function(o){return o.length>0},1:function(o){return o==="*"?!0:(o=Number(o),isFinite(
o)&&o>0&&o<9007199254740992&&Math.floor(o)===o)},2:function(o){return o.length>0},
3:function(o){return o.length>0},4:function(o){return o.length>0}},t=0;t<De.length;t+=
1){var n=e[t],i=r[De[t]]||"",s=n(i);if(!s)return!1}return!0}});var Xi=C((fl,lr)=>{"use strict";p();var ll=(rr(),q(tr)),Ji=(ir(),q(nr)),mt=Zi();
lr.exports=function(r,e){var t=mt.getFileName();Ji.stat(t,function(n,i){if(n||!mt.
usePgPass(i,t))return e(void 0);var s=Ji.createReadStream(t);mt.getPassword(r,s,
e)})};lr.exports.warnTo=mt.warnTo});var fr=C((dl,es)=>{"use strict";p();var _u=Xe();function gt(r){this._types=r||_u,
this.text={},this.binary={}}a(gt,"TypeOverrides");gt.prototype.getOverrides=function(r){
switch(r){case"text":return this.text;case"binary":return this.binary;default:return{}}};
gt.prototype.setTypeParser=function(r,e,t){typeof e=="function"&&(t=e,e="text"),
this.getOverrides(e)[r]=t};gt.prototype.getTypeParser=function(r,e){return e=e||
"text",this.getOverrides(e)[r]||this._types.getTypeParser(r,e)};es.exports=gt});var ts={};ne(ts,{default:()=>Au});var Au,rs=K(()=>{p();Au={}});var ns={};ne(ns,{parse:()=>pr});function pr(r,e=!1){let{protocol:t}=new URL(r),n="\
http:"+r.substring(t.length),{username:i,password:s,host:o,hostname:u,port:c,pathname:h,
search:f,searchParams:m,hash:x}=new URL(n);s=decodeURIComponent(s);let _=i+":"+s,
R=e?Object.fromEntries(m.entries()):f;return{href:r,protocol:t,auth:_,username:i,
password:s,host:o,hostname:u,port:c,pathname:h,search:f,query:R,hash:x}}var dr=K(
()=>{"use strict";p();a(pr,"parse")});var ss=C((Sl,is)=>{"use strict";p();var Cu=(dr(),q(ns)),yr=(ir(),q(nr));function mr(r){
if(r.charAt(0)==="/"){var t=r.split(" ");return{host:t[0],database:t[1]}}var e=Cu.
parse(/ |%[^a-f0-9]|%[a-f0-9][^a-f0-9]/i.test(r)?encodeURI(r).replace(/\%25(\d\d)/g,
"%$1"):r,!0),t=e.query;for(var n in t)Array.isArray(t[n])&&(t[n]=t[n][t[n].length-
1]);var i=(e.auth||":").split(":");if(t.user=i[0],t.password=i.splice(1).join(":"),
t.port=e.port,e.protocol=="socket:")return t.host=decodeURI(e.pathname),t.database=
e.query.db,t.client_encoding=e.query.encoding,t;t.host||(t.host=e.hostname);var s=e.
pathname;if(!t.host&&s&&/^%2f/i.test(s)){var o=s.split("/");t.host=decodeURIComponent(
o[0]),s=o.splice(1).join("/")}switch(s&&s.charAt(0)==="/"&&(s=s.slice(1)||null),
t.database=s&&decodeURI(s),(t.ssl==="true"||t.ssl==="1")&&(t.ssl=!0),t.ssl==="0"&&
(t.ssl=!1),(t.sslcert||t.sslkey||t.sslrootcert||t.sslmode)&&(t.ssl={}),t.sslcert&&
(t.ssl.cert=yr.readFileSync(t.sslcert).toString()),t.sslkey&&(t.ssl.key=yr.readFileSync(
t.sslkey).toString()),t.sslrootcert&&(t.ssl.ca=yr.readFileSync(t.sslrootcert).toString()),
t.sslmode){case"disable":{t.ssl=!1;break}case"prefer":case"require":case"verify-\
ca":case"verify-full":break;case"no-verify":{t.ssl.rejectUnauthorized=!1;break}}
return t}a(mr,"parse");is.exports=mr;mr.parse=mr});var wt=C((vl,us)=>{"use strict";p();var Iu=(rs(),q(ts)),as=et(),os=ss().parse,V=a(
function(r,e,t){return t===void 0?t=y.env["PG"+r.toUpperCase()]:t===!1||(t=y.env[t]),
e[r]||t||as[r]},"val"),Tu=a(function(){switch(y.env.PGSSLMODE){case"disable":return!1;case"\
prefer":case"require":case"verify-ca":case"verify-full":return!0;case"no-verify":
return{rejectUnauthorized:!1}}return as.ssl},"readSSLConfigFromEnvironment"),ke=a(
function(r){return"'"+(""+r).replace(/\\/g,"\\\\").replace(/'/g,"\\'")+"'"},"quo\
teParamValue"),oe=a(function(r,e,t){var n=e[t];n!=null&&r.push(t+"="+ke(n))},"ad\
d"),wr=class wr{constructor(e){e=typeof e=="string"?os(e):e||{},e.connectionString&&
(e=Object.assign({},e,os(e.connectionString))),this.user=V("user",e),this.database=
V("database",e),this.database===void 0&&(this.database=this.user),this.port=parseInt(
V("port",e),10),this.host=V("host",e),Object.defineProperty(this,"password",{configurable:!0,
enumerable:!1,writable:!0,value:V("password",e)}),this.binary=V("binary",e),this.
options=V("options",e),this.ssl=typeof e.ssl>"u"?Tu():e.ssl,typeof this.ssl=="st\
ring"&&this.ssl==="true"&&(this.ssl=!0),this.ssl==="no-verify"&&(this.ssl={rejectUnauthorized:!1}),
this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),this.
client_encoding=V("client_encoding",e),this.replication=V("replication",e),this.
isDomainSocket=!(this.host||"").indexOf("/"),this.application_name=V("applicatio\
n_name",e,"PGAPPNAME"),this.fallback_application_name=V("fallback_application_na\
me",e,!1),this.statement_timeout=V("statement_timeout",e,!1),this.lock_timeout=V(
"lock_timeout",e,!1),this.idle_in_transaction_session_timeout=V("idle_in_transac\
tion_session_timeout",e,!1),this.query_timeout=V("query_timeout",e,!1),e.connectionTimeoutMillis===
void 0?this.connect_timeout=y.env.PGCONNECT_TIMEOUT||0:this.connect_timeout=Math.
floor(e.connectionTimeoutMillis/1e3),e.keepAlive===!1?this.keepalives=0:e.keepAlive===
!0&&(this.keepalives=1),typeof e.keepAliveInitialDelayMillis=="number"&&(this.keepalives_idle=
Math.floor(e.keepAliveInitialDelayMillis/1e3))}getLibpqConnectionString(e){var t=[];
oe(t,this,"user"),oe(t,this,"password"),oe(t,this,"port"),oe(t,this,"application\
_name"),oe(t,this,"fallback_application_name"),oe(t,this,"connect_timeout"),oe(t,
this,"options");var n=typeof this.ssl=="object"?this.ssl:this.ssl?{sslmode:this.
ssl}:{};if(oe(t,n,"sslmode"),oe(t,n,"sslca"),oe(t,n,"sslkey"),oe(t,n,"sslcert"),
oe(t,n,"sslrootcert"),this.database&&t.push("dbname="+ke(this.database)),this.replication&&
t.push("replication="+ke(this.replication)),this.host&&t.push("host="+ke(this.host)),
this.isDomainSocket)return e(null,t.join(" "));this.client_encoding&&t.push("cli\
ent_encoding="+ke(this.client_encoding)),Iu.lookup(this.host,function(i,s){return i?
e(i,null):(t.push("hostaddr="+ke(s)),e(null,t.join(" ")))})}};a(wr,"ConnectionPa\
rameters");var gr=wr;us.exports=gr});var ls=C((Cl,hs)=>{"use strict";p();var Pu=Xe(),cs=/^([A-Za-z]+)(?: (\d+))?(?: (\d+))?/,
Sr=class Sr{constructor(e,t){this.command=null,this.rowCount=null,this.oid=null,
this.rows=[],this.fields=[],this._parsers=void 0,this._types=t,this.RowCtor=null,
this.rowAsArray=e==="array",this.rowAsArray&&(this.parseRow=this._parseRowAsArray)}addCommandComplete(e){
var t;e.text?t=cs.exec(e.text):t=cs.exec(e.command),t&&(this.command=t[1],t[3]?(this.
oid=parseInt(t[2],10),this.rowCount=parseInt(t[3],10)):t[2]&&(this.rowCount=parseInt(
t[2],10)))}_parseRowAsArray(e){for(var t=new Array(e.length),n=0,i=e.length;n<i;n++){
var s=e[n];s!==null?t[n]=this._parsers[n](s):t[n]=null}return t}parseRow(e){for(var t={},
n=0,i=e.length;n<i;n++){var s=e[n],o=this.fields[n].name;s!==null?t[o]=this._parsers[n](
s):t[o]=null}return t}addRow(e){this.rows.push(e)}addFields(e){this.fields=e,this.
fields.length&&(this._parsers=new Array(e.length));for(var t=0;t<e.length;t++){var n=e[t];
this._types?this._parsers[t]=this._types.getTypeParser(n.dataTypeID,n.format||"t\
ext"):this._parsers[t]=Pu.getTypeParser(n.dataTypeID,n.format||"text")}}};a(Sr,"\
Result");var br=Sr;hs.exports=br});var ys=C((Pl,ds)=>{"use strict";p();var{EventEmitter:Bu}=be(),fs=ls(),ps=tt(),Er=class Er extends Bu{constructor(e,t,n){
super(),e=ps.normalizeQueryConfig(e,t,n),this.text=e.text,this.values=e.values,this.
rows=e.rows,this.types=e.types,this.name=e.name,this.binary=e.binary,this.portal=
e.portal||"",this.callback=e.callback,this._rowMode=e.rowMode,y.domain&&e.callback&&
(this.callback=y.domain.bind(e.callback)),this._result=new fs(this._rowMode,this.
types),this._results=this._result,this.isPreparedStatement=!1,this._canceledDueToError=
!1,this._promise=null}requiresPreparation(){return this.name||this.rows?!0:!this.
text||!this.values?!1:this.values.length>0}_checkForMultirow(){this._result.command&&
(Array.isArray(this._results)||(this._results=[this._result]),this._result=new fs(
this._rowMode,this.types),this._results.push(this._result))}handleRowDescription(e){
this._checkForMultirow(),this._result.addFields(e.fields),this._accumulateRows=this.
callback||!this.listeners("row").length}handleDataRow(e){let t;if(!this._canceledDueToError){
try{t=this._result.parseRow(e.fields)}catch(n){this._canceledDueToError=n;return}
this.emit("row",t,this._result),this._accumulateRows&&this._result.addRow(t)}}handleCommandComplete(e,t){
this._checkForMultirow(),this._result.addCommandComplete(e),this.rows&&t.sync()}handleEmptyQuery(e){
this.rows&&e.sync()}handleError(e,t){if(this._canceledDueToError&&(e=this._canceledDueToError,
this._canceledDueToError=!1),this.callback)return this.callback(e);this.emit("er\
ror",e)}handleReadyForQuery(e){if(this._canceledDueToError)return this.handleError(
this._canceledDueToError,e);if(this.callback)try{this.callback(null,this._results)}catch(t){
y.nextTick(()=>{throw t})}this.emit("end",this._results)}submit(e){if(typeof this.
text!="string"&&typeof this.name!="string")return new Error("A query must have e\
ither text or a name. Supplying neither is unsupported.");let t=e.parsedStatements[this.
name];return this.text&&t&&this.text!==t?new Error(`Prepared statements must be \
unique - '${this.name}' was used for a different statement`):this.values&&!Array.
isArray(this.values)?new Error("Query values must be an array"):(this.requiresPreparation()?
this.prepare(e):e.query(this.text),null)}hasBeenParsed(e){return this.name&&e.parsedStatements[this.
name]}handlePortalSuspended(e){this._getRows(e,this.rows)}_getRows(e,t){e.execute(
{portal:this.portal,rows:t}),t?e.flush():e.sync()}prepare(e){this.isPreparedStatement=
!0,this.hasBeenParsed(e)||e.parse({text:this.text,name:this.name,types:this.types});
try{e.bind({portal:this.portal,statement:this.name,values:this.values,binary:this.
binary,valueMapper:ps.prepareValue})}catch(t){this.handleError(t,e);return}e.describe(
{type:"P",name:this.portal||""}),this._getRows(e,this.rows)}handleCopyInResponse(e){
e.sendCopyFail("No source stream defined")}handleCopyData(e,t){}};a(Er,"Query");
var xr=Er;ds.exports=xr});var gs={};ne(gs,{Socket:()=>xe,isIP:()=>Lu});function Lu(r){return 0}var ms,S,xe,
bt=K(()=>{"use strict";p();ms=We(be(),1);a(Lu,"isIP");S=class S extends ms.EventEmitter{constructor(){
super(...arguments);P(this,"opts",{});P(this,"connecting",!1);P(this,"pending",!0);
P(this,"writable",!0);P(this,"encrypted",!1);P(this,"authorized",!1);P(this,"des\
troyed",!1);P(this,"ws",null);P(this,"writeBuffer");P(this,"tlsState",0);P(this,
"tlsRead");P(this,"tlsWrite")}static get poolQueryViaFetch(){return S.opts.poolQueryViaFetch??
S.defaults.poolQueryViaFetch}static set poolQueryViaFetch(t){S.opts.poolQueryViaFetch=
t}static get fetchEndpoint(){return S.opts.fetchEndpoint??S.defaults.fetchEndpoint}static set fetchEndpoint(t){
S.opts.fetchEndpoint=t}static get fetchConnectionCache(){return S.opts.fetchConnectionCache??
S.defaults.fetchConnectionCache}static set fetchConnectionCache(t){S.opts.fetchConnectionCache=
t}static get fetchFunction(){return S.opts.fetchFunction??S.defaults.fetchFunction}static set fetchFunction(t){
S.opts.fetchFunction=t}static get webSocketConstructor(){return S.opts.webSocketConstructor??
S.defaults.webSocketConstructor}static set webSocketConstructor(t){S.opts.webSocketConstructor=
t}get webSocketConstructor(){return this.opts.webSocketConstructor??S.webSocketConstructor}set webSocketConstructor(t){
this.opts.webSocketConstructor=t}static get wsProxy(){return S.opts.wsProxy??S.defaults.
wsProxy}static set wsProxy(t){S.opts.wsProxy=t}get wsProxy(){return this.opts.wsProxy??
S.wsProxy}set wsProxy(t){this.opts.wsProxy=t}static get coalesceWrites(){return S.
opts.coalesceWrites??S.defaults.coalesceWrites}static set coalesceWrites(t){S.opts.
coalesceWrites=t}get coalesceWrites(){return this.opts.coalesceWrites??S.coalesceWrites}set coalesceWrites(t){
this.opts.coalesceWrites=t}static get useSecureWebSocket(){return S.opts.useSecureWebSocket??
S.defaults.useSecureWebSocket}static set useSecureWebSocket(t){S.opts.useSecureWebSocket=
t}get useSecureWebSocket(){return this.opts.useSecureWebSocket??S.useSecureWebSocket}set useSecureWebSocket(t){
this.opts.useSecureWebSocket=t}static get forceDisablePgSSL(){return S.opts.forceDisablePgSSL??
S.defaults.forceDisablePgSSL}static set forceDisablePgSSL(t){S.opts.forceDisablePgSSL=
t}get forceDisablePgSSL(){return this.opts.forceDisablePgSSL??S.forceDisablePgSSL}set forceDisablePgSSL(t){
this.opts.forceDisablePgSSL=t}static get disableSNI(){return S.opts.disableSNI??
S.defaults.disableSNI}static set disableSNI(t){S.opts.disableSNI=t}get disableSNI(){
return this.opts.disableSNI??S.disableSNI}set disableSNI(t){this.opts.disableSNI=
t}static get pipelineConnect(){return S.opts.pipelineConnect??S.defaults.pipelineConnect}static set pipelineConnect(t){
S.opts.pipelineConnect=t}get pipelineConnect(){return this.opts.pipelineConnect??
S.pipelineConnect}set pipelineConnect(t){this.opts.pipelineConnect=t}static get subtls(){
return S.opts.subtls??S.defaults.subtls}static set subtls(t){S.opts.subtls=t}get subtls(){
return this.opts.subtls??S.subtls}set subtls(t){this.opts.subtls=t}static get pipelineTLS(){
return S.opts.pipelineTLS??S.defaults.pipelineTLS}static set pipelineTLS(t){S.opts.
pipelineTLS=t}get pipelineTLS(){return this.opts.pipelineTLS??S.pipelineTLS}set pipelineTLS(t){
this.opts.pipelineTLS=t}static get rootCerts(){return S.opts.rootCerts??S.defaults.
rootCerts}static set rootCerts(t){S.opts.rootCerts=t}get rootCerts(){return this.
opts.rootCerts??S.rootCerts}set rootCerts(t){this.opts.rootCerts=t}wsProxyAddrForHost(t,n){
let i=this.wsProxy;if(i===void 0)throw new Error("No WebSocket proxy is configur\
ed. Please refer to https://github.com/neondatabase/serverless#run-your-own-webs\
ocket-proxy");return typeof i=="function"?i(t,n):`${i}?address=${t}:${n}`}setNoDelay(){
return this}setKeepAlive(){return this}ref(){return this}unref(){return this}async connect(t,n,i){
this.connecting=!0,i&&this.once("connect",i);let s;try{s=this.wsProxyAddrForHost(
n,typeof t=="string"?parseInt(t,10):t)}catch(o){this.emit("error",o),this.emit("\
close");return}return this.ws=await new Promise(async o=>{try{let c=(this.useSecureWebSocket?
"wss:":"ws:")+"//"+s,h;if(this.webSocketConstructor!==void 0)h=new this.webSocketConstructor(
c);else try{h=new WebSocket(c)}catch{h=new __unstable_WebSocket(c)}h.addEventListener(
"open",()=>{o(h)})}catch(u){try{let h=(this.useSecureWebSocket?"https:":"http:")+
"//"+s;await fetch(h,{headers:{Upgrade:"websocket"}}).then(f=>{let m=f.webSocket;
if(m==null)throw u;m.accept(),o(m)})}catch{this.emit("error",new Error("All atte\
mpts to open a WebSocket to connect to the database failed. Please refer to http\
s://github.com/neondatabase/serverless#run-on-node")),this.emit("close");return}}}),
this.ws.binaryType="arraybuffer",this.ws.addEventListener("error",o=>{this.emit(
"error",o),this.emit("close")}),this.ws.addEventListener("close",()=>{this.emit(
"close")}),this.ws.addEventListener("message",o=>{if(this.tlsState===0){let u=d.
from(o.data);this.emit("data",u)}}),this.connecting=!1,this.pending=!1,this.emit(
"connect"),this.emit("ready"),this}async startTls(t){if(this.subtls===void 0)throw new Error(
"For Postgres SSL connections, you must set `neonConfig.subtls` to the subtls li\
brary. See https://github.com/neondatabase/serverless/blob/main/CONFIG.md for mo\
re information.");this.tlsState=1;let n=this.subtls.TrustedCert.fromPEM(this.rootCerts),
i=new this.subtls.WebSocketReadQueue(this.ws),s=i.read.bind(i),o=this.rawWrite.bind(
this),[u,c]=await this.subtls.startTls(t,n,s,o,{useSNI:!this.disableSNI,expectPreData:this.
pipelineTLS?new Uint8Array([83]):void 0});this.tlsRead=u,this.tlsWrite=c,this.tlsState=
2,this.encrypted=!0,this.authorized=!0,this.emit("secureConnection",this),this.tlsReadLoop()}async tlsReadLoop(){
for(;;){let t=await this.tlsRead();if(t===void 0)break;{let n=d.from(t);this.emit(
"data",n)}}}rawWrite(t){if(!this.coalesceWrites){this.ws.send(t);return}if(this.
writeBuffer===void 0)this.writeBuffer=t,setTimeout(()=>{this.ws.send(this.writeBuffer),
this.writeBuffer=void 0},0);else{let n=new Uint8Array(this.writeBuffer.length+t.
length);n.set(this.writeBuffer),n.set(t,this.writeBuffer.length),this.writeBuffer=
n}}write(t,n="utf8",i=s=>{}){return t.length===0?i():(typeof t=="string"&&(t=d.from(
t,n)),this.tlsState===0?this.rawWrite(t):this.tlsState===1?this.once("secureConn\
ection",()=>this.write(t,n,i)):this.tlsWrite(t),!0)}end(t=d.alloc(0),n="utf8",i){
return this.write(t,n,()=>{this.ws.close(),i&&i()}),this}destroy(){return this.destroyed=
!0,this.end()}};a(S,"Socket"),P(S,"defaults",{poolQueryViaFetch:!1,fetchEndpoint:t=>"\
https://"+t+"/sql",fetchConnectionCache:!1,fetchFunction:void 0,webSocketConstructor:void 0,
wsProxy:t=>t+"/v2",useSecureWebSocket:!0,forceDisablePgSSL:!0,coalesceWrites:!0,
pipelineConnect:"password",subtls:void 0,rootCerts:"",pipelineTLS:!1,disableSNI:!1}),
P(S,"opts",{});xe=S});var Zr=C(A=>{"use strict";p();Object.defineProperty(A,"__esModule",{value:!0});A.
NoticeMessage=A.DataRowMessage=A.CommandCompleteMessage=A.ReadyForQueryMessage=A.
NotificationResponseMessage=A.BackendKeyDataMessage=A.AuthenticationMD5Password=
A.ParameterStatusMessage=A.ParameterDescriptionMessage=A.RowDescriptionMessage=A.
Field=A.CopyResponse=A.CopyDataMessage=A.DatabaseError=A.copyDone=A.emptyQuery=A.
replicationStart=A.portalSuspended=A.noData=A.closeComplete=A.bindComplete=A.parseComplete=
void 0;A.parseComplete={name:"parseComplete",length:5};A.bindComplete={name:"bin\
dComplete",length:5};A.closeComplete={name:"closeComplete",length:5};A.noData={name:"\
noData",length:5};A.portalSuspended={name:"portalSuspended",length:5};A.replicationStart=
{name:"replicationStart",length:4};A.emptyQuery={name:"emptyQuery",length:4};A.copyDone=
{name:"copyDone",length:4};var Or=class Or extends Error{constructor(e,t,n){super(
e),this.length=t,this.name=n}};a(Or,"DatabaseError");var vr=Or;A.DatabaseError=vr;
var Ur=class Ur{constructor(e,t){this.length=e,this.chunk=t,this.name="copyData"}};
a(Ur,"CopyDataMessage");var _r=Ur;A.CopyDataMessage=_r;var qr=class qr{constructor(e,t,n,i){
this.length=e,this.name=t,this.binary=n,this.columnTypes=new Array(i)}};a(qr,"Co\
pyResponse");var Ar=qr;A.CopyResponse=Ar;var Nr=class Nr{constructor(e,t,n,i,s,o,u){
this.name=e,this.tableID=t,this.columnID=n,this.dataTypeID=i,this.dataTypeSize=s,
this.dataTypeModifier=o,this.format=u}};a(Nr,"Field");var Cr=Nr;A.Field=Cr;var Qr=class Qr{constructor(e,t){
this.length=e,this.fieldCount=t,this.name="rowDescription",this.fields=new Array(
this.fieldCount)}};a(Qr,"RowDescriptionMessage");var Ir=Qr;A.RowDescriptionMessage=
Ir;var Wr=class Wr{constructor(e,t){this.length=e,this.parameterCount=t,this.name=
"parameterDescription",this.dataTypeIDs=new Array(this.parameterCount)}};a(Wr,"P\
arameterDescriptionMessage");var Tr=Wr;A.ParameterDescriptionMessage=Tr;var jr=class jr{constructor(e,t,n){
this.length=e,this.parameterName=t,this.parameterValue=n,this.name="parameterSta\
tus"}};a(jr,"ParameterStatusMessage");var Pr=jr;A.ParameterStatusMessage=Pr;var Hr=class Hr{constructor(e,t){
this.length=e,this.salt=t,this.name="authenticationMD5Password"}};a(Hr,"Authenti\
cationMD5Password");var Br=Hr;A.AuthenticationMD5Password=Br;var Gr=class Gr{constructor(e,t,n){
this.length=e,this.processID=t,this.secretKey=n,this.name="backendKeyData"}};a(Gr,
"BackendKeyDataMessage");var Lr=Gr;A.BackendKeyDataMessage=Lr;var $r=class $r{constructor(e,t,n,i){
this.length=e,this.processId=t,this.channel=n,this.payload=i,this.name="notifica\
tion"}};a($r,"NotificationResponseMessage");var Rr=$r;A.NotificationResponseMessage=
Rr;var Kr=class Kr{constructor(e,t){this.length=e,this.status=t,this.name="ready\
ForQuery"}};a(Kr,"ReadyForQueryMessage");var Fr=Kr;A.ReadyForQueryMessage=Fr;var Vr=class Vr{constructor(e,t){
this.length=e,this.text=t,this.name="commandComplete"}};a(Vr,"CommandCompleteMes\
sage");var Mr=Vr;A.CommandCompleteMessage=Mr;var zr=class zr{constructor(e,t){this.
length=e,this.fields=t,this.name="dataRow",this.fieldCount=t.length}};a(zr,"Data\
RowMessage");var Dr=zr;A.DataRowMessage=Dr;var Yr=class Yr{constructor(e,t){this.
length=e,this.message=t,this.name="notice"}};a(Yr,"NoticeMessage");var kr=Yr;A.NoticeMessage=
kr});var ws=C(St=>{"use strict";p();Object.defineProperty(St,"__esModule",{value:!0});
St.Writer=void 0;var Xr=class Xr{constructor(e=256){this.size=e,this.offset=5,this.
headerPosition=0,this.buffer=d.allocUnsafe(e)}ensure(e){var t=this.buffer.length-
this.offset;if(t<e){var n=this.buffer,i=n.length+(n.length>>1)+e;this.buffer=d.allocUnsafe(
i),n.copy(this.buffer)}}addInt32(e){return this.ensure(4),this.buffer[this.offset++]=
e>>>24&255,this.buffer[this.offset++]=e>>>16&255,this.buffer[this.offset++]=e>>>
8&255,this.buffer[this.offset++]=e>>>0&255,this}addInt16(e){return this.ensure(2),
this.buffer[this.offset++]=e>>>8&255,this.buffer[this.offset++]=e>>>0&255,this}addCString(e){
if(!e)this.ensure(1);else{var t=d.byteLength(e);this.ensure(t+1),this.buffer.write(
e,this.offset,"utf-8"),this.offset+=t}return this.buffer[this.offset++]=0,this}addString(e=""){
var t=d.byteLength(e);return this.ensure(t),this.buffer.write(e,this.offset),this.
offset+=t,this}add(e){return this.ensure(e.length),e.copy(this.buffer,this.offset),
this.offset+=e.length,this}join(e){if(e){this.buffer[this.headerPosition]=e;let t=this.
offset-(this.headerPosition+1);this.buffer.writeInt32BE(t,this.headerPosition+1)}
return this.buffer.slice(e?0:5,this.offset)}flush(e){var t=this.join(e);return this.
offset=5,this.headerPosition=0,this.buffer=d.allocUnsafe(this.size),t}};a(Xr,"Wr\
iter");var Jr=Xr;St.Writer=Jr});var Ss=C(Et=>{"use strict";p();Object.defineProperty(Et,"__esModule",{value:!0});
Et.serialize=void 0;var en=ws(),k=new en.Writer,Ru=a(r=>{k.addInt16(3).addInt16(
0);for(let n of Object.keys(r))k.addCString(n).addCString(r[n]);k.addCString("cl\
ient_encoding").addCString("UTF8");var e=k.addCString("").flush(),t=e.length+4;return new en.
Writer().addInt32(t).add(e).flush()},"startup"),Fu=a(()=>{let r=d.allocUnsafe(8);
return r.writeInt32BE(8,0),r.writeInt32BE(80877103,4),r},"requestSsl"),Mu=a(r=>k.
addCString(r).flush(112),"password"),Du=a(function(r,e){return k.addCString(r).addInt32(
d.byteLength(e)).addString(e),k.flush(112)},"sendSASLInitialResponseMessage"),ku=a(
function(r){return k.addString(r).flush(112)},"sendSCRAMClientFinalMessage"),Ou=a(
r=>k.addCString(r).flush(81),"query"),bs=[],Uu=a(r=>{let e=r.name||"";e.length>63&&
(console.error("Warning! Postgres only supports 63 characters for query names."),
console.error("You supplied %s (%s)",e,e.length),console.error("This can cause c\
onflicts and silent errors executing queries"));let t=r.types||bs;for(var n=t.length,
i=k.addCString(e).addCString(r.text).addInt16(n),s=0;s<n;s++)i.addInt32(t[s]);return k.
flush(80)},"parse"),Oe=new en.Writer,qu=a(function(r,e){for(let t=0;t<r.length;t++){
let n=e?e(r[t],t):r[t];n==null?(k.addInt16(0),Oe.addInt32(-1)):n instanceof d?(k.
addInt16(1),Oe.addInt32(n.length),Oe.add(n)):(k.addInt16(0),Oe.addInt32(d.byteLength(
n)),Oe.addString(n))}},"writeValues"),Nu=a((r={})=>{let e=r.portal||"",t=r.statement||
"",n=r.binary||!1,i=r.values||bs,s=i.length;return k.addCString(e).addCString(t),
k.addInt16(s),qu(i,r.valueMapper),k.addInt16(s),k.add(Oe.flush()),k.addInt16(n?1:
0),k.flush(66)},"bind"),Qu=d.from([69,0,0,0,9,0,0,0,0,0]),Wu=a(r=>{if(!r||!r.portal&&
!r.rows)return Qu;let e=r.portal||"",t=r.rows||0,n=d.byteLength(e),i=4+n+1+4,s=d.
allocUnsafe(1+i);return s[0]=69,s.writeInt32BE(i,1),s.write(e,5,"utf-8"),s[n+5]=
0,s.writeUInt32BE(t,s.length-4),s},"execute"),ju=a((r,e)=>{let t=d.allocUnsafe(16);
return t.writeInt32BE(16,0),t.writeInt16BE(1234,4),t.writeInt16BE(5678,6),t.writeInt32BE(
r,8),t.writeInt32BE(e,12),t},"cancel"),tn=a((r,e)=>{let n=4+d.byteLength(e)+1,i=d.
allocUnsafe(1+n);return i[0]=r,i.writeInt32BE(n,1),i.write(e,5,"utf-8"),i[n]=0,i},
"cstringMessage"),Hu=k.addCString("P").flush(68),Gu=k.addCString("S").flush(68),
$u=a(r=>r.name?tn(68,`${r.type}${r.name||""}`):r.type==="P"?Hu:Gu,"describe"),Ku=a(
r=>{let e=`${r.type}${r.name||""}`;return tn(67,e)},"close"),Vu=a(r=>k.add(r).flush(
100),"copyData"),zu=a(r=>tn(102,r),"copyFail"),xt=a(r=>d.from([r,0,0,0,4]),"code\
OnlyBuffer"),Yu=xt(72),Zu=xt(83),Ju=xt(88),Xu=xt(99),ec={startup:Ru,password:Mu,
requestSsl:Fu,sendSASLInitialResponseMessage:Du,sendSCRAMClientFinalMessage:ku,query:Ou,
parse:Uu,bind:Nu,execute:Wu,describe:$u,close:Ku,flush:()=>Yu,sync:()=>Zu,end:()=>Ju,
copyData:Vu,copyDone:()=>Xu,copyFail:zu,cancel:ju};Et.serialize=ec});var xs=C(vt=>{"use strict";p();Object.defineProperty(vt,"__esModule",{value:!0});
vt.BufferReader=void 0;var tc=d.allocUnsafe(0),nn=class nn{constructor(e=0){this.
offset=e,this.buffer=tc,this.encoding="utf-8"}setBuffer(e,t){this.offset=e,this.
buffer=t}int16(){let e=this.buffer.readInt16BE(this.offset);return this.offset+=
2,e}byte(){let e=this.buffer[this.offset];return this.offset++,e}int32(){let e=this.
buffer.readInt32BE(this.offset);return this.offset+=4,e}string(e){let t=this.buffer.
toString(this.encoding,this.offset,this.offset+e);return this.offset+=e,t}cstring(){
let e=this.offset,t=e;for(;this.buffer[t++]!==0;);return this.offset=t,this.buffer.
toString(this.encoding,e,t-1)}bytes(e){let t=this.buffer.slice(this.offset,this.
offset+e);return this.offset+=e,t}};a(nn,"BufferReader");var rn=nn;vt.BufferReader=
rn});var Es={};ne(Es,{default:()=>rc});var rc,vs=K(()=>{p();rc={}});var Cs=C(Ue=>{"use strict";p();var nc=Ue&&Ue.__importDefault||function(r){return r&&
r.__esModule?r:{default:r}};Object.defineProperty(Ue,"__esModule",{value:!0});Ue.
Parser=void 0;var U=Zr(),ic=xs(),sc=nc((vs(),q(Es))),sn=1,oc=4,_s=sn+oc,As=d.allocUnsafe(
0),an=class an{constructor(e){if(this.buffer=As,this.bufferLength=0,this.bufferOffset=
0,this.reader=new ic.BufferReader,e?.mode==="binary")throw new Error("Binary mod\
e not supported yet");this.mode=e?.mode||"text"}parse(e,t){this.mergeBuffer(e);let n=this.
bufferOffset+this.bufferLength,i=this.bufferOffset;for(;i+_s<=n;){let s=this.buffer[i],
o=this.buffer.readUInt32BE(i+sn),u=sn+o;if(u+i<=n){let c=this.handlePacket(i+_s,
s,o,this.buffer);t(c),i+=u}else break}i===n?(this.buffer=As,this.bufferLength=0,
this.bufferOffset=0):(this.bufferLength=n-i,this.bufferOffset=i)}mergeBuffer(e){
if(this.bufferLength>0){let t=this.bufferLength+e.byteLength;if(t+this.bufferOffset>
this.buffer.byteLength){let i;if(t<=this.buffer.byteLength&&this.bufferOffset>=this.
bufferLength)i=this.buffer;else{let s=this.buffer.byteLength*2;for(;t>=s;)s*=2;i=
d.allocUnsafe(s)}this.buffer.copy(i,0,this.bufferOffset,this.bufferOffset+this.bufferLength),
this.buffer=i,this.bufferOffset=0}e.copy(this.buffer,this.bufferOffset+this.bufferLength),
this.bufferLength=t}else this.buffer=e,this.bufferOffset=0,this.bufferLength=e.byteLength}handlePacket(e,t,n,i){
switch(t){case 50:return U.bindComplete;case 49:return U.parseComplete;case 51:return U.
closeComplete;case 110:return U.noData;case 115:return U.portalSuspended;case 99:
return U.copyDone;case 87:return U.replicationStart;case 73:return U.emptyQuery;case 68:
return this.parseDataRowMessage(e,n,i);case 67:return this.parseCommandCompleteMessage(
e,n,i);case 90:return this.parseReadyForQueryMessage(e,n,i);case 65:return this.
parseNotificationMessage(e,n,i);case 82:return this.parseAuthenticationResponse(
e,n,i);case 83:return this.parseParameterStatusMessage(e,n,i);case 75:return this.
parseBackendKeyData(e,n,i);case 69:return this.parseErrorMessage(e,n,i,"error");case 78:
return this.parseErrorMessage(e,n,i,"notice");case 84:return this.parseRowDescriptionMessage(
e,n,i);case 116:return this.parseParameterDescriptionMessage(e,n,i);case 71:return this.
parseCopyInMessage(e,n,i);case 72:return this.parseCopyOutMessage(e,n,i);case 100:
return this.parseCopyData(e,n,i);default:sc.default.fail(`unknown message code: ${t.
toString(16)}`)}}parseReadyForQueryMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.
reader.string(1);return new U.ReadyForQueryMessage(t,i)}parseCommandCompleteMessage(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.cstring();return new U.CommandCompleteMessage(
t,i)}parseCopyData(e,t,n){let i=n.slice(e,e+(t-4));return new U.CopyDataMessage(
t,i)}parseCopyInMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyInRespons\
e")}parseCopyOutMessage(e,t,n){return this.parseCopyMessage(e,t,n,"copyOutRespon\
se")}parseCopyMessage(e,t,n,i){this.reader.setBuffer(e,n);let s=this.reader.byte()!==
0,o=this.reader.int16(),u=new U.CopyResponse(t,i,s,o);for(let c=0;c<o;c++)u.columnTypes[c]=
this.reader.int16();return u}parseNotificationMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s=this.reader.cstring(),o=this.reader.cstring();return new U.
NotificationResponseMessage(t,i,s,o)}parseRowDescriptionMessage(e,t,n){this.reader.
setBuffer(e,n);let i=this.reader.int16(),s=new U.RowDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.fields[o]=this.parseField();return s}parseField(){let e=this.reader.cstring(),
t=this.reader.int32(),n=this.reader.int16(),i=this.reader.int32(),s=this.reader.
int16(),o=this.reader.int32(),u=this.reader.int16()===0?"text":"binary";return new U.
Field(e,t,n,i,s,o,u)}parseParameterDescriptionMessage(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int16(),s=new U.ParameterDescriptionMessage(t,i);for(let o=0;o<
i;o++)s.dataTypeIDs[o]=this.reader.int32();return s}parseDataRowMessage(e,t,n){this.
reader.setBuffer(e,n);let i=this.reader.int16(),s=new Array(i);for(let o=0;o<i;o++){
let u=this.reader.int32();s[o]=u===-1?null:this.reader.string(u)}return new U.DataRowMessage(
t,s)}parseParameterStatusMessage(e,t,n){this.reader.setBuffer(e,n);let i=this.reader.
cstring(),s=this.reader.cstring();return new U.ParameterStatusMessage(t,i,s)}parseBackendKeyData(e,t,n){
this.reader.setBuffer(e,n);let i=this.reader.int32(),s=this.reader.int32();return new U.
BackendKeyDataMessage(t,i,s)}parseAuthenticationResponse(e,t,n){this.reader.setBuffer(
e,n);let i=this.reader.int32(),s={name:"authenticationOk",length:t};switch(i){case 0:
break;case 3:s.length===8&&(s.name="authenticationCleartextPassword");break;case 5:
if(s.length===12){s.name="authenticationMD5Password";let u=this.reader.bytes(4);
return new U.AuthenticationMD5Password(t,u)}break;case 10:s.name="authentication\
SASL",s.mechanisms=[];let o;do o=this.reader.cstring(),o&&s.mechanisms.push(o);while(o);
break;case 11:s.name="authenticationSASLContinue",s.data=this.reader.string(t-8);
break;case 12:s.name="authenticationSASLFinal",s.data=this.reader.string(t-8);break;default:
throw new Error("Unknown authenticationOk message type "+i)}return s}parseErrorMessage(e,t,n,i){
this.reader.setBuffer(e,n);let s={},o=this.reader.string(1);for(;o!=="\0";)s[o]=
this.reader.cstring(),o=this.reader.string(1);let u=s.M,c=i==="notice"?new U.NoticeMessage(
t,u):new U.DatabaseError(u,t,i);return c.severity=s.S,c.code=s.C,c.detail=s.D,c.
hint=s.H,c.position=s.P,c.internalPosition=s.p,c.internalQuery=s.q,c.where=s.W,c.
schema=s.s,c.table=s.t,c.column=s.c,c.dataType=s.d,c.constraint=s.n,c.file=s.F,c.
line=s.L,c.routine=s.R,c}};a(an,"Parser");var on=an;Ue.Parser=on});var un=C(Ee=>{"use strict";p();Object.defineProperty(Ee,"__esModule",{value:!0});
Ee.DatabaseError=Ee.serialize=Ee.parse=void 0;var ac=Zr();Object.defineProperty(
Ee,"DatabaseError",{enumerable:!0,get:function(){return ac.DatabaseError}});var uc=Ss();
Object.defineProperty(Ee,"serialize",{enumerable:!0,get:function(){return uc.serialize}});
var cc=Cs();function hc(r,e){let t=new cc.Parser;return r.on("data",n=>t.parse(n,
e)),new Promise(n=>r.on("end",()=>n()))}a(hc,"parse");Ee.parse=hc});var Is={};ne(Is,{connect:()=>lc});function lc({socket:r,servername:e}){return r.
startTls(e),r}var Ts=K(()=>{p();a(lc,"connect")});var ln=C((tf,Ls)=>{"use strict";p();var Ps=(bt(),q(gs)),fc=be().EventEmitter,{parse:pc,
serialize:W}=un(),Bs=W.flush(),dc=W.sync(),yc=W.end(),hn=class hn extends fc{constructor(e){
super(),e=e||{},this.stream=e.stream||new Ps.Socket,this._keepAlive=e.keepAlive,
this._keepAliveInitialDelayMillis=e.keepAliveInitialDelayMillis,this.lastBuffer=
!1,this.parsedStatements={},this.ssl=e.ssl||!1,this._ending=!1,this._emitMessage=
!1;var t=this;this.on("newListener",function(n){n==="message"&&(t._emitMessage=!0)})}connect(e,t){
var n=this;this._connecting=!0,this.stream.setNoDelay(!0),this.stream.connect(e,
t),this.stream.once("connect",function(){n._keepAlive&&n.stream.setKeepAlive(!0,
n._keepAliveInitialDelayMillis),n.emit("connect")});let i=a(function(s){n._ending&&
(s.code==="ECONNRESET"||s.code==="EPIPE")||n.emit("error",s)},"reportStreamError");
if(this.stream.on("error",i),this.stream.on("close",function(){n.emit("end")}),!this.
ssl)return this.attachListeners(this.stream);this.stream.once("data",function(s){
var o=s.toString("utf8");switch(o){case"S":break;case"N":return n.stream.end(),n.
emit("error",new Error("The server does not support SSL connections"));default:return n.
stream.end(),n.emit("error",new Error("There was an error establishing an SSL co\
nnection"))}var u=(Ts(),q(Is));let c={socket:n.stream};n.ssl!==!0&&(Object.assign(
c,n.ssl),"key"in n.ssl&&(c.key=n.ssl.key)),Ps.isIP(t)===0&&(c.servername=t);try{
n.stream=u.connect(c)}catch(h){return n.emit("error",h)}n.attachListeners(n.stream),
n.stream.on("error",i),n.emit("sslconnect")})}attachListeners(e){e.on("end",()=>{
this.emit("end")}),pc(e,t=>{var n=t.name==="error"?"errorMessage":t.name;this._emitMessage&&
this.emit("message",t),this.emit(n,t)})}requestSsl(){this.stream.write(W.requestSsl())}startup(e){
this.stream.write(W.startup(e))}cancel(e,t){this._send(W.cancel(e,t))}password(e){
this._send(W.password(e))}sendSASLInitialResponseMessage(e,t){this._send(W.sendSASLInitialResponseMessage(
e,t))}sendSCRAMClientFinalMessage(e){this._send(W.sendSCRAMClientFinalMessage(e))}_send(e){
return this.stream.writable?this.stream.write(e):!1}query(e){this._send(W.query(
e))}parse(e){this._send(W.parse(e))}bind(e){this._send(W.bind(e))}execute(e){this.
_send(W.execute(e))}flush(){this.stream.writable&&this.stream.write(Bs)}sync(){this.
_ending=!0,this._send(Bs),this._send(dc)}ref(){this.stream.ref()}unref(){this.stream.
unref()}end(){if(this._ending=!0,!this._connecting||!this.stream.writable){this.
stream.end();return}return this.stream.write(yc,()=>{this.stream.end()})}close(e){
this._send(W.close(e))}describe(e){this._send(W.describe(e))}sendCopyFromChunk(e){
this._send(W.copyData(e))}endCopyFrom(){this._send(W.copyDone())}sendCopyFail(e){
this._send(W.copyFail(e))}};a(hn,"Connection");var cn=hn;Ls.exports=cn});var Ms=C((of,Fs)=>{"use strict";p();var mc=be().EventEmitter,sf=(Ge(),q(He)),gc=tt(),
fn=Wi(),wc=Xi(),bc=fr(),Sc=wt(),Rs=ys(),xc=et(),Ec=ln(),pn=class pn extends mc{constructor(e){
super(),this.connectionParameters=new Sc(e),this.user=this.connectionParameters.
user,this.database=this.connectionParameters.database,this.port=this.connectionParameters.
port,this.host=this.connectionParameters.host,Object.defineProperty(this,"passwo\
rd",{configurable:!0,enumerable:!1,writable:!0,value:this.connectionParameters.password}),
this.replication=this.connectionParameters.replication;var t=e||{};this._Promise=
t.Promise||w.Promise,this._types=new bc(t.types),this._ending=!1,this._connecting=
!1,this._connected=!1,this._connectionError=!1,this._queryable=!0,this.connection=
t.connection||new Ec({stream:t.stream,ssl:this.connectionParameters.ssl,keepAlive:t.
keepAlive||!1,keepAliveInitialDelayMillis:t.keepAliveInitialDelayMillis||0,encoding:this.
connectionParameters.client_encoding||"utf8"}),this.queryQueue=[],this.binary=t.
binary||xc.binary,this.processID=null,this.secretKey=null,this.ssl=this.connectionParameters.
ssl||!1,this.ssl&&this.ssl.key&&Object.defineProperty(this.ssl,"key",{enumerable:!1}),
this._connectionTimeoutMillis=t.connectionTimeoutMillis||0}_errorAllQueries(e){let t=a(
n=>{y.nextTick(()=>{n.handleError(e,this.connection)})},"enqueueError");this.activeQuery&&
(t(this.activeQuery),this.activeQuery=null),this.queryQueue.forEach(t),this.queryQueue.
length=0}_connect(e){var t=this,n=this.connection;if(this._connectionCallback=e,
this._connecting||this._connected){let i=new Error("Client has already been conn\
ected. You cannot reuse a client.");y.nextTick(()=>{e(i)});return}this._connecting=
!0,this.connectionTimeoutHandle,this._connectionTimeoutMillis>0&&(this.connectionTimeoutHandle=
setTimeout(()=>{n._ending=!0,n.stream.destroy(new Error("timeout expired"))},this.
_connectionTimeoutMillis)),this.host&&this.host.indexOf("/")===0?n.connect(this.
host+"/.s.PGSQL."+this.port):n.connect(this.port,this.host),n.on("connect",function(){
t.ssl?n.requestSsl():n.startup(t.getStartupConf())}),n.on("sslconnect",function(){
n.startup(t.getStartupConf())}),this._attachListeners(n),n.once("end",()=>{let i=this.
_ending?new Error("Connection terminated"):new Error("Connection terminated unex\
pectedly");clearTimeout(this.connectionTimeoutHandle),this._errorAllQueries(i),this.
_ending||(this._connecting&&!this._connectionError?this._connectionCallback?this.
_connectionCallback(i):this._handleErrorEvent(i):this._connectionError||this._handleErrorEvent(
i)),y.nextTick(()=>{this.emit("end")})})}connect(e){if(e){this._connect(e);return}
return new this._Promise((t,n)=>{this._connect(i=>{i?n(i):t()})})}_attachListeners(e){
e.on("authenticationCleartextPassword",this._handleAuthCleartextPassword.bind(this)),
e.on("authenticationMD5Password",this._handleAuthMD5Password.bind(this)),e.on("a\
uthenticationSASL",this._handleAuthSASL.bind(this)),e.on("authenticationSASLCont\
inue",this._handleAuthSASLContinue.bind(this)),e.on("authenticationSASLFinal",this.
_handleAuthSASLFinal.bind(this)),e.on("backendKeyData",this._handleBackendKeyData.
bind(this)),e.on("error",this._handleErrorEvent.bind(this)),e.on("errorMessage",
this._handleErrorMessage.bind(this)),e.on("readyForQuery",this._handleReadyForQuery.
bind(this)),e.on("notice",this._handleNotice.bind(this)),e.on("rowDescription",this.
_handleRowDescription.bind(this)),e.on("dataRow",this._handleDataRow.bind(this)),
e.on("portalSuspended",this._handlePortalSuspended.bind(this)),e.on("emptyQuery",
this._handleEmptyQuery.bind(this)),e.on("commandComplete",this._handleCommandComplete.
bind(this)),e.on("parseComplete",this._handleParseComplete.bind(this)),e.on("cop\
yInResponse",this._handleCopyInResponse.bind(this)),e.on("copyData",this._handleCopyData.
bind(this)),e.on("notification",this._handleNotification.bind(this))}_checkPgPass(e){
let t=this.connection;typeof this.password=="function"?this._Promise.resolve().then(
()=>this.password()).then(n=>{if(n!==void 0){if(typeof n!="string"){t.emit("erro\
r",new TypeError("Password must be a string"));return}this.connectionParameters.
password=this.password=n}else this.connectionParameters.password=this.password=null;
e()}).catch(n=>{t.emit("error",n)}):this.password!==null?e():wc(this.connectionParameters,
n=>{n!==void 0&&(this.connectionParameters.password=this.password=n),e()})}_handleAuthCleartextPassword(e){
this._checkPgPass(()=>{this.connection.password(this.password)})}_handleAuthMD5Password(e){
this._checkPgPass(()=>{let t=gc.postgresMd5PasswordHash(this.user,this.password,
e.salt);this.connection.password(t)})}_handleAuthSASL(e){this._checkPgPass(()=>{
this.saslSession=fn.startSession(e.mechanisms),this.connection.sendSASLInitialResponseMessage(
this.saslSession.mechanism,this.saslSession.response)})}_handleAuthSASLContinue(e){
fn.continueSession(this.saslSession,this.password,e.data),this.connection.sendSCRAMClientFinalMessage(
this.saslSession.response)}_handleAuthSASLFinal(e){fn.finalizeSession(this.saslSession,
e.data),this.saslSession=null}_handleBackendKeyData(e){this.processID=e.processID,
this.secretKey=e.secretKey}_handleReadyForQuery(e){this._connecting&&(this._connecting=
!1,this._connected=!0,clearTimeout(this.connectionTimeoutHandle),this._connectionCallback&&
(this._connectionCallback(null,this),this._connectionCallback=null),this.emit("c\
onnect"));let{activeQuery:t}=this;this.activeQuery=null,this.readyForQuery=!0,t&&
t.handleReadyForQuery(this.connection),this._pulseQueryQueue()}_handleErrorWhileConnecting(e){
if(!this._connectionError){if(this._connectionError=!0,clearTimeout(this.connectionTimeoutHandle),
this._connectionCallback)return this._connectionCallback(e);this.emit("error",e)}}_handleErrorEvent(e){
if(this._connecting)return this._handleErrorWhileConnecting(e);this._queryable=!1,
this._errorAllQueries(e),this.emit("error",e)}_handleErrorMessage(e){if(this._connecting)
return this._handleErrorWhileConnecting(e);let t=this.activeQuery;if(!t){this._handleErrorEvent(
e);return}this.activeQuery=null,t.handleError(e,this.connection)}_handleRowDescription(e){
this.activeQuery.handleRowDescription(e)}_handleDataRow(e){this.activeQuery.handleDataRow(
e)}_handlePortalSuspended(e){this.activeQuery.handlePortalSuspended(this.connection)}_handleEmptyQuery(e){
this.activeQuery.handleEmptyQuery(this.connection)}_handleCommandComplete(e){this.
activeQuery.handleCommandComplete(e,this.connection)}_handleParseComplete(e){this.
activeQuery.name&&(this.connection.parsedStatements[this.activeQuery.name]=this.
activeQuery.text)}_handleCopyInResponse(e){this.activeQuery.handleCopyInResponse(
this.connection)}_handleCopyData(e){this.activeQuery.handleCopyData(e,this.connection)}_handleNotification(e){
this.emit("notification",e)}_handleNotice(e){this.emit("notice",e)}getStartupConf(){
var e=this.connectionParameters,t={user:e.user,database:e.database},n=e.application_name||
e.fallback_application_name;return n&&(t.application_name=n),e.replication&&(t.replication=
""+e.replication),e.statement_timeout&&(t.statement_timeout=String(parseInt(e.statement_timeout,
10))),e.lock_timeout&&(t.lock_timeout=String(parseInt(e.lock_timeout,10))),e.idle_in_transaction_session_timeout&&
(t.idle_in_transaction_session_timeout=String(parseInt(e.idle_in_transaction_session_timeout,
10))),e.options&&(t.options=e.options),t}cancel(e,t){if(e.activeQuery===t){var n=this.
connection;this.host&&this.host.indexOf("/")===0?n.connect(this.host+"/.s.PGSQL."+
this.port):n.connect(this.port,this.host),n.on("connect",function(){n.cancel(e.processID,
e.secretKey)})}else e.queryQueue.indexOf(t)!==-1&&e.queryQueue.splice(e.queryQueue.
indexOf(t),1)}setTypeParser(e,t,n){return this._types.setTypeParser(e,t,n)}getTypeParser(e,t){
return this._types.getTypeParser(e,t)}escapeIdentifier(e){return'"'+e.replace(/"/g,
'""')+'"'}escapeLiteral(e){for(var t=!1,n="'",i=0;i<e.length;i++){var s=e[i];s===
"'"?n+=s+s:s==="\\"?(n+=s+s,t=!0):n+=s}return n+="'",t===!0&&(n=" E"+n),n}_pulseQueryQueue(){
if(this.readyForQuery===!0)if(this.activeQuery=this.queryQueue.shift(),this.activeQuery){
this.readyForQuery=!1,this.hasExecuted=!0;let e=this.activeQuery.submit(this.connection);
e&&y.nextTick(()=>{this.activeQuery.handleError(e,this.connection),this.readyForQuery=
!0,this._pulseQueryQueue()})}else this.hasExecuted&&(this.activeQuery=null,this.
emit("drain"))}query(e,t,n){var i,s,o,u,c;if(e==null)throw new TypeError("Client\
 was passed a null or undefined query");return typeof e.submit=="function"?(o=e.
query_timeout||this.connectionParameters.query_timeout,s=i=e,typeof t=="function"&&
(i.callback=i.callback||t)):(o=this.connectionParameters.query_timeout,i=new Rs(
e,t,n),i.callback||(s=new this._Promise((h,f)=>{i.callback=(m,x)=>m?f(m):h(x)}))),
o&&(c=i.callback,u=setTimeout(()=>{var h=new Error("Query read timeout");y.nextTick(
()=>{i.handleError(h,this.connection)}),c(h),i.callback=()=>{};var f=this.queryQueue.
indexOf(i);f>-1&&this.queryQueue.splice(f,1),this._pulseQueryQueue()},o),i.callback=
(h,f)=>{clearTimeout(u),c(h,f)}),this.binary&&!i.binary&&(i.binary=!0),i._result&&
!i._result._types&&(i._result._types=this._types),this._queryable?this._ending?(y.
nextTick(()=>{i.handleError(new Error("Client was closed and is not queryable"),
this.connection)}),s):(this.queryQueue.push(i),this._pulseQueryQueue(),s):(y.nextTick(
()=>{i.handleError(new Error("Client has encountered a connection error and is n\
ot queryable"),this.connection)}),s)}ref(){this.connection.ref()}unref(){this.connection.
unref()}end(e){if(this._ending=!0,!this.connection._connecting)if(e)e();else return this.
_Promise.resolve();if(this.activeQuery||!this._queryable?this.connection.stream.
destroy():this.connection.end(),e)this.connection.once("end",e);else return new this.
_Promise(t=>{this.connection.once("end",t)})}};a(pn,"Client");var _t=pn;_t.Query=
Rs;Fs.exports=_t});var Us=C((cf,Os)=>{"use strict";p();var vc=be().EventEmitter,Ds=a(function(){},"\
NOOP"),ks=a((r,e)=>{let t=r.findIndex(e);return t===-1?void 0:r.splice(t,1)[0]},
"removeWhere"),mn=class mn{constructor(e,t,n){this.client=e,this.idleListener=t,
this.timeoutId=n}};a(mn,"IdleItem");var dn=mn,gn=class gn{constructor(e){this.callback=
e}};a(gn,"PendingItem");var qe=gn;function _c(){throw new Error("Release called \
on client which has already been released to the pool.")}a(_c,"throwOnDoubleRele\
ase");function At(r,e){if(e)return{callback:e,result:void 0};let t,n,i=a(function(o,u){
o?t(o):n(u)},"cb"),s=new r(function(o,u){n=o,t=u}).catch(o=>{throw Error.captureStackTrace(
o),o});return{callback:i,result:s}}a(At,"promisify");function Ac(r,e){return a(function t(n){
n.client=e,e.removeListener("error",t),e.on("error",()=>{r.log("additional clien\
t error after disconnection due to error",n)}),r._remove(e),r.emit("error",n,e)},
"idleListener")}a(Ac,"makeIdleListener");var wn=class wn extends vc{constructor(e,t){
super(),this.options=Object.assign({},e),e!=null&&"password"in e&&Object.defineProperty(
this.options,"password",{configurable:!0,enumerable:!1,writable:!0,value:e.password}),
e!=null&&e.ssl&&e.ssl.key&&Object.defineProperty(this.options.ssl,"key",{enumerable:!1}),
this.options.max=this.options.max||this.options.poolSize||10,this.options.maxUses=
this.options.maxUses||1/0,this.options.allowExitOnIdle=this.options.allowExitOnIdle||
!1,this.options.maxLifetimeSeconds=this.options.maxLifetimeSeconds||0,this.log=this.
options.log||function(){},this.Client=this.options.Client||t||Ct().Client,this.Promise=
this.options.Promise||w.Promise,typeof this.options.idleTimeoutMillis>"u"&&(this.
options.idleTimeoutMillis=1e4),this._clients=[],this._idle=[],this._expired=new WeakSet,
this._pendingQueue=[],this._endCallback=void 0,this.ending=!1,this.ended=!1}_isFull(){
return this._clients.length>=this.options.max}_pulseQueue(){if(this.log("pulse q\
ueue"),this.ended){this.log("pulse queue ended");return}if(this.ending){this.log(
"pulse queue on ending"),this._idle.length&&this._idle.slice().map(t=>{this._remove(
t.client)}),this._clients.length||(this.ended=!0,this._endCallback());return}if(!this.
_pendingQueue.length){this.log("no queued requests");return}if(!this._idle.length&&
this._isFull())return;let e=this._pendingQueue.shift();if(this._idle.length){let t=this.
_idle.pop();clearTimeout(t.timeoutId);let n=t.client;n.ref&&n.ref();let i=t.idleListener;
return this._acquireClient(n,e,i,!1)}if(!this._isFull())return this.newClient(e);
throw new Error("unexpected condition")}_remove(e){let t=ks(this._idle,n=>n.client===
e);t!==void 0&&clearTimeout(t.timeoutId),this._clients=this._clients.filter(n=>n!==
e),e.end(),this.emit("remove",e)}connect(e){if(this.ending){let i=new Error("Can\
not use a pool after calling end on the pool");return e?e(i):this.Promise.reject(
i)}let t=At(this.Promise,e),n=t.result;if(this._isFull()||this._idle.length){if(this.
_idle.length&&y.nextTick(()=>this._pulseQueue()),!this.options.connectionTimeoutMillis)
return this._pendingQueue.push(new qe(t.callback)),n;let i=a((u,c,h)=>{clearTimeout(
o),t.callback(u,c,h)},"queueCallback"),s=new qe(i),o=setTimeout(()=>{ks(this._pendingQueue,
u=>u.callback===i),s.timedOut=!0,t.callback(new Error("timeout exceeded when try\
ing to connect"))},this.options.connectionTimeoutMillis);return this._pendingQueue.
push(s),n}return this.newClient(new qe(t.callback)),n}newClient(e){let t=new this.
Client(this.options);this._clients.push(t);let n=Ac(this,t);this.log("checking c\
lient timeout");let i,s=!1;this.options.connectionTimeoutMillis&&(i=setTimeout(()=>{
this.log("ending client due to timeout"),s=!0,t.connection?t.connection.stream.destroy():
t.end()},this.options.connectionTimeoutMillis)),this.log("connecting new client"),
t.connect(o=>{if(i&&clearTimeout(i),t.on("error",n),o)this.log("client failed to\
 connect",o),this._clients=this._clients.filter(u=>u!==t),s&&(o.message="Connect\
ion terminated due to connection timeout"),this._pulseQueue(),e.timedOut||e.callback(
o,void 0,Ds);else{if(this.log("new client connected"),this.options.maxLifetimeSeconds!==
0){let u=setTimeout(()=>{this.log("ending client due to expired lifetime"),this.
_expired.add(t),this._idle.findIndex(h=>h.client===t)!==-1&&this._acquireClient(
t,new qe((h,f,m)=>m()),n,!1)},this.options.maxLifetimeSeconds*1e3);u.unref(),t.once(
"end",()=>clearTimeout(u))}return this._acquireClient(t,e,n,!0)}})}_acquireClient(e,t,n,i){
i&&this.emit("connect",e),this.emit("acquire",e),e.release=this._releaseOnce(e,n),
e.removeListener("error",n),t.timedOut?i&&this.options.verify?this.options.verify(
e,e.release):e.release():i&&this.options.verify?this.options.verify(e,s=>{if(s)return e.
release(s),t.callback(s,void 0,Ds);t.callback(void 0,e,e.release)}):t.callback(void 0,
e,e.release)}_releaseOnce(e,t){let n=!1;return i=>{n&&_c(),n=!0,this._release(e,
t,i)}}_release(e,t,n){if(e.on("error",t),e._poolUseCount=(e._poolUseCount||0)+1,
this.emit("release",n,e),n||this.ending||!e._queryable||e._ending||e._poolUseCount>=
this.options.maxUses){e._poolUseCount>=this.options.maxUses&&this.log("remove ex\
pended client"),this._remove(e),this._pulseQueue();return}if(this._expired.has(e)){
this.log("remove expired client"),this._expired.delete(e),this._remove(e),this._pulseQueue();
return}let s;this.options.idleTimeoutMillis&&(s=setTimeout(()=>{this.log("remove\
 idle client"),this._remove(e)},this.options.idleTimeoutMillis),this.options.allowExitOnIdle&&
s.unref()),this.options.allowExitOnIdle&&e.unref(),this._idle.push(new dn(e,t,s)),
this._pulseQueue()}query(e,t,n){if(typeof e=="function"){let s=At(this.Promise,e);
return b(function(){return s.callback(new Error("Passing a function as the first\
 parameter to pool.query is not supported"))}),s.result}typeof t=="function"&&(n=
t,t=void 0);let i=At(this.Promise,n);return n=i.callback,this.connect((s,o)=>{if(s)
return n(s);let u=!1,c=a(h=>{u||(u=!0,o.release(h),n(h))},"onError");o.once("err\
or",c),this.log("dispatching query");try{o.query(e,t,(h,f)=>{if(this.log("query \
dispatched"),o.removeListener("error",c),!u)return u=!0,o.release(h),h?n(h):n(void 0,
f)})}catch(h){return o.release(h),n(h)}}),i.result}end(e){if(this.log("ending"),
this.ending){let n=new Error("Called end on pool more than once");return e?e(n):
this.Promise.reject(n)}this.ending=!0;let t=At(this.Promise,e);return this._endCallback=
t.callback,this._pulseQueue(),t.result}get waitingCount(){return this._pendingQueue.
length}get idleCount(){return this._idle.length}get expiredCount(){return this._clients.
reduce((e,t)=>e+(this._expired.has(t)?1:0),0)}get totalCount(){return this._clients.
length}};a(wn,"Pool");var yn=wn;Os.exports=yn});var qs={};ne(qs,{default:()=>Cc});var Cc,Ns=K(()=>{p();Cc={}});var Qs=C((pf,Ic)=>{Ic.exports={name:"pg",version:"8.8.0",description:"PostgreSQL\
 client - pure javascript & libpq with the same API",keywords:["database","libpq",
"pg","postgre","postgres","postgresql","rdbms"],homepage:"https://github.com/bri\
anc/node-postgres",repository:{type:"git",url:"git://github.com/brianc/node-post\
gres.git",directory:"packages/pg"},author:"Brian Carlson <brian.m.carlson@gmail.\
com>",main:"./lib",dependencies:{"buffer-writer":"2.0.0","packet-reader":"1.0.0",
"pg-connection-string":"^2.5.0","pg-pool":"^3.5.2","pg-protocol":"^1.5.0","pg-ty\
pes":"^2.1.0",pgpass:"1.x"},devDependencies:{async:"2.6.4",bluebird:"3.5.2",co:"\
4.6.0","pg-copy-streams":"0.3.0"},peerDependencies:{"pg-native":">=3.0.1"},peerDependenciesMeta:{
"pg-native":{optional:!0}},scripts:{test:"make test-all"},files:["lib","SPONSORS\
.md"],license:"MIT",engines:{node:">= 8.0.0"},gitHead:"c99fb2c127ddf8d712500db2c\
7b9a5491a178655"}});var Hs=C((df,js)=>{"use strict";p();var Ws=be().EventEmitter,Tc=(Ge(),q(He)),bn=tt(),
Ne=js.exports=function(r,e,t){Ws.call(this),r=bn.normalizeQueryConfig(r,e,t),this.
text=r.text,this.values=r.values,this.name=r.name,this.callback=r.callback,this.
state="new",this._arrayMode=r.rowMode==="array",this._emitRowEvents=!1,this.on("\
newListener",function(n){n==="row"&&(this._emitRowEvents=!0)}.bind(this))};Tc.inherits(
Ne,Ws);var Pc={sqlState:"code",statementPosition:"position",messagePrimary:"mess\
age",context:"where",schemaName:"schema",tableName:"table",columnName:"column",dataTypeName:"\
dataType",constraintName:"constraint",sourceFile:"file",sourceLine:"line",sourceFunction:"\
routine"};Ne.prototype.handleError=function(r){var e=this.native.pq.resultErrorFields();
if(e)for(var t in e){var n=Pc[t]||t;r[n]=e[t]}this.callback?this.callback(r):this.
emit("error",r),this.state="error"};Ne.prototype.then=function(r,e){return this.
_getPromise().then(r,e)};Ne.prototype.catch=function(r){return this._getPromise().
catch(r)};Ne.prototype._getPromise=function(){return this._promise?this._promise:
(this._promise=new Promise(function(r,e){this._once("end",r),this._once("error",
e)}.bind(this)),this._promise)};Ne.prototype.submit=function(r){this.state="runn\
ing";var e=this;this.native=r.native,r.native.arrayMode=this._arrayMode;var t=a(
function(s,o,u){if(r.native.arrayMode=!1,b(function(){e.emit("_done")}),s)return e.
handleError(s);e._emitRowEvents&&(u.length>1?o.forEach((c,h)=>{c.forEach(f=>{e.emit(
"row",f,u[h])})}):o.forEach(function(c){e.emit("row",c,u)})),e.state="end",e.emit(
"end",u),e.callback&&e.callback(null,u)},"after");if(y.domain&&(t=y.domain.bind(
t)),this.name){this.name.length>63&&(console.error("Warning! Postgres only suppo\
rts 63 characters for query names."),console.error("You supplied %s (%s)",this.name,
this.name.length),console.error("This can cause conflicts and silent errors exec\
uting queries"));var n=(this.values||[]).map(bn.prepareValue);if(r.namedQueries[this.
name]){if(this.text&&r.namedQueries[this.name]!==this.text){let s=new Error(`Pre\
pared statements must be unique - '${this.name}' was used for a different statem\
ent`);return t(s)}return r.native.execute(this.name,n,t)}return r.native.prepare(
this.name,this.text,n.length,function(s){return s?t(s):(r.namedQueries[e.name]=e.
text,e.native.execute(e.name,n,t))})}else if(this.values){if(!Array.isArray(this.
values)){let s=new Error("Query values must be an array");return t(s)}var i=this.
values.map(bn.prepareValue);r.native.query(this.text,i,t)}else r.native.query(this.
text,t)}});var Vs=C((wf,Ks)=>{"use strict";p();var Bc=(Ns(),q(qs)),Lc=fr(),gf=Qs(),Gs=be().
EventEmitter,Rc=(Ge(),q(He)),Fc=wt(),$s=Hs(),J=Ks.exports=function(r){Gs.call(this),
r=r||{},this._Promise=r.Promise||w.Promise,this._types=new Lc(r.types),this.native=
new Bc({types:this._types}),this._queryQueue=[],this._ending=!1,this._connecting=
!1,this._connected=!1,this._queryable=!0;var e=this.connectionParameters=new Fc(
r);this.user=e.user,Object.defineProperty(this,"password",{configurable:!0,enumerable:!1,
writable:!0,value:e.password}),this.database=e.database,this.host=e.host,this.port=
e.port,this.namedQueries={}};J.Query=$s;Rc.inherits(J,Gs);J.prototype._errorAllQueries=
function(r){let e=a(t=>{y.nextTick(()=>{t.native=this.native,t.handleError(r)})},
"enqueueError");this._hasActiveQuery()&&(e(this._activeQuery),this._activeQuery=
null),this._queryQueue.forEach(e),this._queryQueue.length=0};J.prototype._connect=
function(r){var e=this;if(this._connecting){y.nextTick(()=>r(new Error("Client h\
as already been connected. You cannot reuse a client.")));return}this._connecting=
!0,this.connectionParameters.getLibpqConnectionString(function(t,n){if(t)return r(
t);e.native.connect(n,function(i){if(i)return e.native.end(),r(i);e._connected=!0,
e.native.on("error",function(s){e._queryable=!1,e._errorAllQueries(s),e.emit("er\
ror",s)}),e.native.on("notification",function(s){e.emit("notification",{channel:s.
relname,payload:s.extra})}),e.emit("connect"),e._pulseQueryQueue(!0),r()})})};J.
prototype.connect=function(r){if(r){this._connect(r);return}return new this._Promise(
(e,t)=>{this._connect(n=>{n?t(n):e()})})};J.prototype.query=function(r,e,t){var n,
i,s,o,u;if(r==null)throw new TypeError("Client was passed a null or undefined qu\
ery");if(typeof r.submit=="function")s=r.query_timeout||this.connectionParameters.
query_timeout,i=n=r,typeof e=="function"&&(r.callback=e);else if(s=this.connectionParameters.
query_timeout,n=new $s(r,e,t),!n.callback){let c,h;i=new this._Promise((f,m)=>{c=
f,h=m}),n.callback=(f,m)=>f?h(f):c(m)}return s&&(u=n.callback,o=setTimeout(()=>{
var c=new Error("Query read timeout");y.nextTick(()=>{n.handleError(c,this.connection)}),
u(c),n.callback=()=>{};var h=this._queryQueue.indexOf(n);h>-1&&this._queryQueue.
splice(h,1),this._pulseQueryQueue()},s),n.callback=(c,h)=>{clearTimeout(o),u(c,h)}),
this._queryable?this._ending?(n.native=this.native,y.nextTick(()=>{n.handleError(
new Error("Client was closed and is not queryable"))}),i):(this._queryQueue.push(
n),this._pulseQueryQueue(),i):(n.native=this.native,y.nextTick(()=>{n.handleError(
new Error("Client has encountered a connection error and is not queryable"))}),i)};
J.prototype.end=function(r){var e=this;this._ending=!0,this._connected||this.once(
"connect",this.end.bind(this,r));var t;return r||(t=new this._Promise(function(n,i){
r=a(s=>s?i(s):n(),"cb")})),this.native.end(function(){e._errorAllQueries(new Error(
"Connection terminated")),y.nextTick(()=>{e.emit("end"),r&&r()})}),t};J.prototype.
_hasActiveQuery=function(){return this._activeQuery&&this._activeQuery.state!=="\
error"&&this._activeQuery.state!=="end"};J.prototype._pulseQueryQueue=function(r){
if(this._connected&&!this._hasActiveQuery()){var e=this._queryQueue.shift();if(!e){
r||this.emit("drain");return}this._activeQuery=e,e.submit(this);var t=this;e.once(
"_done",function(){t._pulseQueryQueue()})}};J.prototype.cancel=function(r){this.
_activeQuery===r?this.native.cancel(function(){}):this._queryQueue.indexOf(r)!==
-1&&this._queryQueue.splice(this._queryQueue.indexOf(r),1)};J.prototype.ref=function(){};
J.prototype.unref=function(){};J.prototype.setTypeParser=function(r,e,t){return this.
_types.setTypeParser(r,e,t)};J.prototype.getTypeParser=function(r,e){return this.
_types.getTypeParser(r,e)}});var Sn=C((xf,zs)=>{"use strict";p();zs.exports=Vs()});var Ct=C((vf,nt)=>{"use strict";p();var Mc=Ms(),Dc=et(),kc=ln(),Oc=Us(),{DatabaseError:Uc}=un(),
qc=a(r=>{var e;return e=class extends Oc{constructor(n){super(n,r)}},a(e,"BoundP\
ool"),e},"poolFactory"),xn=a(function(r){this.defaults=Dc,this.Client=r,this.Query=
this.Client.Query,this.Pool=qc(this.Client),this._pools=[],this.Connection=kc,this.
types=Xe(),this.DatabaseError=Uc},"PG");typeof y.env.NODE_PG_FORCE_NATIVE<"u"?nt.
exports=new xn(Sn()):(nt.exports=new xn(Mc),Object.defineProperty(nt.exports,"na\
tive",{configurable:!0,enumerable:!1,get(){var r=null;try{r=new xn(Sn())}catch(e){
if(e.code!=="MODULE_NOT_FOUND")throw e}return Object.defineProperty(nt.exports,"\
native",{value:r}),r}}))});var Wc={};ne(Wc,{Client:()=>It,ClientBase:()=>X.ClientBase,Connection:()=>X.Connection,
DatabaseError:()=>X.DatabaseError,NeonDbError:()=>ve,Pool:()=>_n,Query:()=>X.Query,
defaults:()=>X.defaults,neon:()=>En,neonConfig:()=>xe,types:()=>X.types});module.
exports=q(Wc);p();var Tt=We(Ct());bt();p();dr();bt();var Zs=We(tt());var vn=class vn extends Error{constructor(){super(...arguments);P(this,"name","N\
eonDbError");P(this,"code",null);P(this,"sourceError")}};a(vn,"NeonDbError");var ve=vn,
Ys="transaction() expects an array of queries, or a function returning an array \
of queries";function En(r,{arrayMode:e,fullResults:t,fetchOptions:n,isolationLevel:i,
readOnly:s,deferrable:o,queryCallback:u,resultCallback:c}={}){if(!r)throw new Error(
"No database connection string was provided to `neon()`. Perhaps an environment \
variable has not been set?");let h;try{h=pr(r)}catch{throw new Error("Database c\
onnection string provided to `neon()` is not a valid URL. Connection string: "+String(
r))}let{protocol:f,username:m,password:x,hostname:_,port:R,pathname:j}=h;if(f!==
"postgres:"&&f!=="postgresql:"||!m||!x||!_||!j)throw new Error("Database connect\
ion string format for `neon()` should be: postgresql://user:password@host.tld/db\
name?option=value");let ee=a((I,...L)=>{let T,M;if(typeof I=="string")T=I,M=L[1],
L=L[0]??[];else{T="";for(let O=0;O<I.length;O++)T+=I[O],O<L.length&&(T+="$"+(O+1))}
L=L.map(O=>(0,Zs.prepareValue)(O));let H={query:T,params:L};return u&&u(H),Nc(re,
H,M)},"resolve"),ue=e??!1,B=t??!1,v=i,te=s,fe=o,re=a(async(I,L)=>{let T=n??{},{fetchEndpoint:M,
fetchConnectionCache:H,fetchFunction:O}=xe,ae=typeof M=="function"?M(_,R):M,ce=Array.
isArray(I)?{queries:I}:I;L!==void 0&&(L.arrayMode!==void 0&&(ue=L.arrayMode),L.fullResults!==
void 0&&(B=L.fullResults),L.fetchOptions!==void 0&&(T={...T,...L.fetchOptions}),
L.isolationLevel!==void 0&&(v=L.isolationLevel),L.readOnly!==void 0&&(te=L.readOnly),
L.deferrable!==void 0&&(fe=L.deferrable));let de={"Neon-Connection-String":r,"Ne\
on-Raw-Text-Output":"true","Neon-Array-Mode":"true"};H===!0&&(de["Neon-Pool-Opt-\
In"]="true"),Array.isArray(I)&&(v!==void 0&&(de["Neon-Batch-Isolation-Level"]=v),
te!==void 0&&(de["Neon-Batch-Read-Only"]=String(te)),fe!==void 0&&(de["Neon-Batc\
h-Deferrable"]=String(fe)));let ge;try{ge=await(O??fetch)(ae,{method:"POST",body:JSON.
stringify(ce),headers:de,...T})}catch(z){let G=new ve(`Error connecting to datab\
ase: ${z.message}`);throw G.sourceError=z,G}if(ge.ok){let z=await ge.json();if(Array.
isArray(I)){let G=z.results;if(!Array.isArray(G))throw new ve("Neon internal err\
or: unexpected result format");return G.map((Qe,it)=>pe(Qe,I[it]))}else return pe(
z,I)}else{let{status:z}=ge;if(z===400){let{message:G,code:Qe}=await ge.json(),it=new ve(
G);throw it.code=Qe,it}else{let G=await ge.text();throw new ve(`Server error (HT\
TP status ${z}): ${G}`)}}},"execute"),pe=a((I,L)=>{let T=I.fields.map(O=>O.name),
M=I.fields.map(O=>X.types.getTypeParser(O.dataTypeID)),H=ue===!0?I.rows.map(O=>O.
map((ae,ce)=>ae===null?null:M[ce](ae))):I.rows.map(O=>Object.fromEntries(O.map((ae,ce)=>[
T[ce],ae===null?null:M[ce](ae)])));return c&&c(L,I,H,{arrayMode:ue,fullResults:B}),
B?(I.viaNeonFetch=!0,I.rowAsArray=ue,I.rows=H,I):H},"processQueryResult");return ee.
transaction=async(I,L)=>{if(typeof I=="function"&&(I=I(ee)),!Array.isArray(I))throw new Error(
Ys);let T=I.map(M=>{if(M[Symbol.toStringTag]!=="NeonQueryPromise")throw new Error(
Ys);let H=M;if(H.opts!==void 0)throw new Error("Cannot set options on individual\
 queries passed to `transaction()`: pass options to `transaction()` instead");return H.
parameterizedQuery});return re(T,L)},ee}a(En,"neon");var Nc=a((r,e,t)=>({[Symbol.
toStringTag]:"NeonQueryPromise",parameterizedQuery:e,opts:t,then:(n,i)=>r(e,t).then(
n,i),catch:n=>r(e,t).catch(n),finally:n=>r(e,t).finally(n)}),"createNeonQueryPro\
mise");var Js=We(wt()),X=We(Ct());var An=class An extends Tt.Client{constructor(t){super(t);this.config=t}get neonConfig(){
return this.connection.stream}connect(t){let{neonConfig:n}=this;n.forceDisablePgSSL&&
(this.ssl=this.connection.ssl=!1),this.ssl&&n.useSecureWebSocket&&console.warn("\
SSL is enabled for both Postgres (e.g. ?sslmode=require in the connection string\
 + forceDisablePgSSL = false) and the WebSocket tunnel (useSecureWebSocket = tru\
e). Double encryption will increase latency and CPU usage. It may be appropriate\
 to disable SSL in the Postgres connection parameters or set forceDisablePgSSL =\
 true.");let i=this.config?.host!==void 0||this.config?.connectionString!==void 0||
y.env.PGHOST!==void 0,s=y.env.USER??y.env.USERNAME;if(!i&&this.host==="localhost"&&
this.user===s&&this.database===s&&this.password===null)throw new Error(`No datab\
ase host or connection string was set, and key parameters have default values (h\
ost: localhost, user: ${s}, db: ${s}, password: null). Is an environment variabl\
e missing? Alternatively, if you intended to connect with these parameters, plea\
se set the host to 'localhost' explicitly.`);let o=super.connect(t),u=n.pipelineTLS&&
this.ssl,c=n.pipelineConnect==="password";if(!u&&!n.pipelineConnect)return o;let h=this.
connection;if(u&&h.on("connect",()=>h.stream.emit("data","S")),c){h.removeAllListeners(
"authenticationCleartextPassword"),h.removeAllListeners("readyForQuery"),h.once(
"readyForQuery",()=>h.on("readyForQuery",this._handleReadyForQuery.bind(this)));
let f=this.ssl?"sslconnect":"connect";h.on(f,()=>{this._handleAuthCleartextPassword(),
this._handleReadyForQuery()})}return o}async _handleAuthSASLContinue(t){let n=this.
saslSession,i=this.password,s=t.data;if(n.message!=="SASLInitialResponse"||typeof i!=
"string"||typeof s!="string")throw new Error("SASL: protocol error");let o=Object.
fromEntries(s.split(",").map(z=>{if(!/^.=/.test(z))throw new Error("SASL: Invali\
d attribute pair entry");let G=z[0],Qe=z.substring(2);return[G,Qe]})),u=o.r,c=o.
s,h=o.i;if(!u||!/^[!-+--~]+$/.test(u))throw new Error("SASL: SCRAM-SERVER-FIRST-\
MESSAGE: nonce missing/unprintable");if(!c||!/^(?:[a-zA-Z0-9+/]{4})*(?:[a-zA-Z0-9+/]{2}==|[a-zA-Z0-9+/]{3}=)?$/.
test(c))throw new Error("SASL: SCRAM-SERVER-FIRST-MESSAGE: salt missing/not base\
64");if(!h||!/^[1-9][0-9]*$/.test(h))throw new Error("SASL: SCRAM-SERVER-FIRST-M\
ESSAGE: missing/invalid iteration count");if(!u.startsWith(n.clientNonce))throw new Error(
"SASL: SCRAM-SERVER-FIRST-MESSAGE: server nonce does not start with client nonce");
if(u.length===n.clientNonce.length)throw new Error("SASL: SCRAM-SERVER-FIRST-MES\
SAGE: server nonce is too short");let f=parseInt(h,10),m=d.from(c,"base64"),x=new TextEncoder,
_=x.encode(i),R=await g.subtle.importKey("raw",_,{name:"HMAC",hash:{name:"SHA-25\
6"}},!1,["sign"]),j=new Uint8Array(await g.subtle.sign("HMAC",R,d.concat([m,d.from(
[0,0,0,1])]))),ee=j;for(var ue=0;ue<f-1;ue++)j=new Uint8Array(await g.subtle.sign(
"HMAC",R,j)),ee=d.from(ee.map((z,G)=>ee[G]^j[G]));let B=ee,v=await g.subtle.importKey(
"raw",B,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),te=new Uint8Array(await g.
subtle.sign("HMAC",v,x.encode("Client Key"))),fe=await g.subtle.digest("SHA-256",
te),re="n=*,r="+n.clientNonce,pe="r="+u+",s="+c+",i="+f,I="c=biws,r="+u,L=re+","+
pe+","+I,T=await g.subtle.importKey("raw",fe,{name:"HMAC",hash:{name:"SHA-256"}},
!1,["sign"]);var M=new Uint8Array(await g.subtle.sign("HMAC",T,x.encode(L))),H=d.
from(te.map((z,G)=>te[G]^M[G])),O=H.toString("base64");let ae=await g.subtle.importKey(
"raw",B,{name:"HMAC",hash:{name:"SHA-256"}},!1,["sign"]),ce=await g.subtle.sign(
"HMAC",ae,x.encode("Server Key")),de=await g.subtle.importKey("raw",ce,{name:"HM\
AC",hash:{name:"SHA-256"}},!1,["sign"]);var ge=d.from(await g.subtle.sign("HMAC",
de,x.encode(L)));n.message="SASLResponse",n.serverSignature=ge.toString("base64"),
n.response=I+",p="+O,this.connection.sendSCRAMClientFinalMessage(this.saslSession.
response)}};a(An,"NeonClient");var It=An;function Qc(r,e){if(e)return{callback:e,
result:void 0};let t,n,i=a(function(o,u){o?t(o):n(u)},"cb"),s=new r(function(o,u){
n=o,t=u});return{callback:i,result:s}}a(Qc,"promisify");var Cn=class Cn extends Tt.Pool{constructor(){
super(...arguments);P(this,"Client",It);P(this,"hasFetchUnsupportedListeners",!1)}on(t,n){
return t!=="error"&&(this.hasFetchUnsupportedListeners=!0),super.on(t,n)}query(t,n,i){
if(!xe.poolQueryViaFetch||this.hasFetchUnsupportedListeners||typeof t=="function")
return super.query(t,n,i);typeof n=="function"&&(i=n,n=void 0);let s=Qc(this.Promise,
i);i=s.callback;try{let o=new Js.default(this.options),u=encodeURIComponent,c=encodeURI,
h=`postgresql://${u(o.user)}:${u(o.password)}@${u(o.host)}/${c(o.database)}`,f=typeof t==
"string"?t:t.text,m=n??t.values??[];En(h,{fullResults:!0,arrayMode:t.rowMode==="\
array"})(f,m).then(_=>i(void 0,_)).catch(_=>i(_))}catch(o){i(o)}return s.result}};
a(Cn,"NeonPool");var _n=Cn;
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)

buffer/index.js:
  (*!
   * The buffer module from node.js, for the browser.
   *
   * @author   Feross Aboukhadijeh <https://feross.org>
   * @license  MIT
   *)
*/
