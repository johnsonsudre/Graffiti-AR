var vn=(G,dI)=>()=>(dI||G((dI={exports:{}}).exports,dI),dI.exports);var On=vn((mE,pt)=>{(function(){const dI=document.createElement("link").relList;if(dI&&dI.supports&&dI.supports("modulepreload"))return;for(const LI of document.querySelectorAll('link[rel="modulepreload"]'))UI(LI);new MutationObserver(LI=>{for(const ZA of LI)if(ZA.type==="childList")for(const Og of ZA.addedNodes)Og.tagName==="LINK"&&Og.rel==="modulepreload"&&UI(Og)}).observe(document,{childList:!0,subtree:!0});function Jg(LI){const ZA={};return LI.integrity&&(ZA.integrity=LI.integrity),LI.referrerPolicy&&(ZA.referrerPolicy=LI.referrerPolicy),LI.crossOrigin==="use-credentials"?ZA.credentials="include":LI.crossOrigin==="anonymous"?ZA.credentials="omit":ZA.credentials="same-origin",ZA}function UI(LI){if(LI.ep)return;LI.ep=!0;const ZA=Jg(LI);fetch(LI.href,ZA)}})();console.warn('Scripts "build/three.js" and "build/three.min.js" are deprecated with r150+, and will be removed with r160. Please use ES Modules or alternatives: https://threejs.org/docs/index.html#manual/en/introduction/Installation');/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */(function(G,dI){typeof mE=="object"&&typeof pt<"u"?dI(mE):typeof define=="function"&&define.amd?define(["exports"],dI):dI((G=typeof globalThis<"u"?globalThis:G||self).THREE={})})(globalThis,function(G){const dI="150",q="srgb",QA="srgb-linear",tA="display-p3",qA="300 es";class hg{addEventListener(A,g){this._listeners===void 0&&(this._listeners={});const I=this._listeners;I[A]===void 0&&(I[A]=[]),I[A].indexOf(g)===-1&&I[A].push(g)}hasEventListener(A,g){if(this._listeners===void 0)return!1;const I=this._listeners;return I[A]!==void 0&&I[A].indexOf(g)!==-1}removeEventListener(A,g){if(this._listeners===void 0)return;const I=this._listeners[A];if(I!==void 0){const B=I.indexOf(g);B!==-1&&I.splice(B,1)}}dispatchEvent(A){if(this._listeners===void 0)return;const g=this._listeners[A.type];if(g!==void 0){A.target=this;const I=g.slice(0);for(let B=0,Q=I.length;B<Q;B++)I[B].call(this,A);A.target=null}}}const Gg=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let $g=1234567;const cI=Math.PI/180,aB=180/Math.PI;function uI(){const C=4294967295*Math.random()|0,A=4294967295*Math.random()|0,g=4294967295*Math.random()|0,I=4294967295*Math.random()|0;return(Gg[255&C]+Gg[C>>8&255]+Gg[C>>16&255]+Gg[C>>24&255]+"-"+Gg[255&A]+Gg[A>>8&255]+"-"+Gg[A>>16&15|64]+Gg[A>>24&255]+"-"+Gg[63&g|128]+Gg[g>>8&255]+"-"+Gg[g>>16&255]+Gg[g>>24&255]+Gg[255&I]+Gg[I>>8&255]+Gg[I>>16&255]+Gg[I>>24&255]).toLowerCase()}function DI(C,A,g){return Math.max(A,Math.min(g,C))}function PI(C,A){return(C%A+A)%A}function OB(C,A,g){return(1-g)*C+g*A}function bI(C){return(C&C-1)==0&&C!==0}function XI(C){return Math.pow(2,Math.ceil(Math.log(C)/Math.LN2))}function pB(C){return Math.pow(2,Math.floor(Math.log(C)/Math.LN2))}function wB(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return C/65535;case Uint8Array:return C/255;case Int16Array:return Math.max(C/32767,-1);case Int8Array:return Math.max(C/127,-1);default:throw new Error("Invalid component type.")}}function $A(C,A){switch(A.constructor){case Float32Array:return C;case Uint16Array:return Math.round(65535*C);case Uint8Array:return Math.round(255*C);case Int16Array:return Math.round(32767*C);case Int8Array:return Math.round(127*C);default:throw new Error("Invalid component type.")}}const AI={DEG2RAD:cI,RAD2DEG:aB,generateUUID:uI,clamp:DI,euclideanModulo:PI,mapLinear:function(C,A,g,I,B){return I+(C-A)*(B-I)/(g-A)},inverseLerp:function(C,A,g){return C!==A?(g-C)/(A-C):0},lerp:OB,damp:function(C,A,g,I){return OB(C,A,1-Math.exp(-g*I))},pingpong:function(C,A=1){return A-Math.abs(PI(C,2*A)-A)},smoothstep:function(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A))*C*(3-2*C)},smootherstep:function(C,A,g){return C<=A?0:C>=g?1:(C=(C-A)/(g-A))*C*C*(C*(6*C-15)+10)},randInt:function(C,A){return C+Math.floor(Math.random()*(A-C+1))},randFloat:function(C,A){return C+Math.random()*(A-C)},randFloatSpread:function(C){return C*(.5-Math.random())},seededRandom:function(C){C!==void 0&&($g=C);let A=$g+=1831565813;return A=Math.imul(A^A>>>15,1|A),A^=A+Math.imul(A^A>>>7,61|A),((A^A>>>14)>>>0)/4294967296},degToRad:function(C){return C*cI},radToDeg:function(C){return C*aB},isPowerOfTwo:bI,ceilPowerOfTwo:XI,floorPowerOfTwo:pB,setQuaternionFromProperEuler:function(C,A,g,I,B){const Q=Math.cos,E=Math.sin,i=Q(g/2),t=E(g/2),e=Q((A+I)/2),s=E((A+I)/2),n=Q((A-I)/2),r=E((A-I)/2),h=Q((I-A)/2),w=E((I-A)/2);switch(B){case"XYX":C.set(i*s,t*n,t*r,i*e);break;case"YZY":C.set(t*r,i*s,t*n,i*e);break;case"ZXZ":C.set(t*n,t*r,i*s,i*e);break;case"XZX":C.set(i*s,t*w,t*h,i*e);break;case"YXY":C.set(t*h,i*s,t*w,i*e);break;case"ZYZ":C.set(t*w,t*h,i*s,i*e);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+B)}},normalize:$A,denormalize:wB};class HA{constructor(A=0,g=0){HA.prototype.isVector2=!0,this.x=A,this.y=g}get width(){return this.x}set width(A){this.x=A}get height(){return this.y}set height(A){this.y=A}set(A,g){return this.x=A,this.y=g,this}setScalar(A){return this.x=A,this.y=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y)}copy(A){return this.x=A.x,this.y=A.y,this}add(A){return this.x+=A.x,this.y+=A.y,this}addScalar(A){return this.x+=A,this.y+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this}subScalar(A){return this.x-=A,this.y-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this}multiply(A){return this.x*=A.x,this.y*=A.y,this}multiplyScalar(A){return this.x*=A,this.y*=A,this}divide(A){return this.x/=A.x,this.y/=A.y,this}divideScalar(A){return this.multiplyScalar(1/A)}applyMatrix3(A){const g=this.x,I=this.y,B=A.elements;return this.x=B[0]*g+B[3]*I+B[6],this.y=B[1]*g+B[4]*I+B[7],this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(A){return this.x*A.x+this.y*A.y}cross(A){return this.x*A.y-this.y*A.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y;return g*g+I*I}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this}equals(A){return A.x===this.x&&A.y===this.y}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this}rotateAround(A,g){const I=Math.cos(g),B=Math.sin(g),Q=this.x-A.x,E=this.y-A.y;return this.x=Q*I-E*B+A.x,this.y=Q*B+E*I+A.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _I{constructor(){_I.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(A,g,I,B,Q,E,i,t,e){const s=this.elements;return s[0]=A,s[1]=B,s[2]=i,s[3]=g,s[4]=Q,s[5]=t,s[6]=I,s[7]=E,s[8]=e,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],this}extractBasis(A,g,I){return A.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),I.setFromMatrix3Column(this,2),this}setFromMatrix4(A){const g=A.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,B=g.elements,Q=this.elements,E=I[0],i=I[3],t=I[6],e=I[1],s=I[4],n=I[7],r=I[2],h=I[5],w=I[8],D=B[0],u=B[3],R=B[6],y=B[1],F=B[4],N=B[7],J=B[2],T=B[5],$=B[8];return Q[0]=E*D+i*y+t*J,Q[3]=E*u+i*F+t*T,Q[6]=E*R+i*N+t*$,Q[1]=e*D+s*y+n*J,Q[4]=e*u+s*F+n*T,Q[7]=e*R+s*N+n*$,Q[2]=r*D+h*y+w*J,Q[5]=r*u+h*F+w*T,Q[8]=r*R+h*N+w*$,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[3]*=A,g[6]*=A,g[1]*=A,g[4]*=A,g[7]*=A,g[2]*=A,g[5]*=A,g[8]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],t=A[6],e=A[7],s=A[8];return g*E*s-g*i*e-I*Q*s+I*i*t+B*Q*e-B*E*t}invert(){const A=this.elements,g=A[0],I=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],t=A[6],e=A[7],s=A[8],n=s*E-i*e,r=i*t-s*Q,h=e*Q-E*t,w=g*n+I*r+B*h;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const D=1/w;return A[0]=n*D,A[1]=(B*e-s*I)*D,A[2]=(i*I-B*E)*D,A[3]=r*D,A[4]=(s*g-B*t)*D,A[5]=(B*Q-i*g)*D,A[6]=h*D,A[7]=(I*t-e*g)*D,A[8]=(E*g-I*Q)*D,this}transpose(){let A;const g=this.elements;return A=g[1],g[1]=g[3],g[3]=A,A=g[2],g[2]=g[6],g[6]=A,A=g[5],g[5]=g[7],g[7]=A,this}getNormalMatrix(A){return this.setFromMatrix4(A).invert().transpose()}transposeIntoArray(A){const g=this.elements;return A[0]=g[0],A[1]=g[3],A[2]=g[6],A[3]=g[1],A[4]=g[4],A[5]=g[7],A[6]=g[2],A[7]=g[5],A[8]=g[8],this}setUvTransform(A,g,I,B,Q,E,i){const t=Math.cos(Q),e=Math.sin(Q);return this.set(I*t,I*e,-I*(t*E+e*i)+E+A,-B*e,B*t,-B*(-e*E+t*i)+i+g,0,0,1),this}scale(A,g){return this.premultiply(IE.makeScale(A,g)),this}rotate(A){return this.premultiply(IE.makeRotation(-A)),this}translate(A,g){return this.premultiply(IE.makeTranslation(A,g)),this}makeTranslation(A,g){return this.set(1,0,A,0,1,g,0,0,1),this}makeRotation(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,-I,0,I,g,0,0,0,1),this}makeScale(A,g){return this.set(A,0,0,0,g,0,0,0,1),this}equals(A){const g=this.elements,I=A.elements;for(let B=0;B<9;B++)if(g[B]!==I[B])return!1;return!0}fromArray(A,g=0){for(let I=0;I<9;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A}clone(){return new this.constructor().fromArray(this.elements)}}const IE=new _I;function VC(C){for(let A=C.length-1;A>=0;--A)if(C[A]>=65535)return!0;return!1}const BE={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function nC(C,A){return new BE[C](A)}function fC(C){return document.createElementNS("http://www.w3.org/1999/xhtml",C)}class dB{constructor(A=0,g=0,I=0,B=1){this.isQuaternion=!0,this._x=A,this._y=g,this._z=I,this._w=B}static slerpFlat(A,g,I,B,Q,E,i){let t=I[B+0],e=I[B+1],s=I[B+2],n=I[B+3];const r=Q[E+0],h=Q[E+1],w=Q[E+2],D=Q[E+3];if(i===0)return A[g+0]=t,A[g+1]=e,A[g+2]=s,void(A[g+3]=n);if(i===1)return A[g+0]=r,A[g+1]=h,A[g+2]=w,void(A[g+3]=D);if(n!==D||t!==r||e!==h||s!==w){let u=1-i;const R=t*r+e*h+s*w+n*D,y=R>=0?1:-1,F=1-R*R;if(F>Number.EPSILON){const J=Math.sqrt(F),T=Math.atan2(J,R*y);u=Math.sin(u*T)/J,i=Math.sin(i*T)/J}const N=i*y;if(t=t*u+r*N,e=e*u+h*N,s=s*u+w*N,n=n*u+D*N,u===1-i){const J=1/Math.sqrt(t*t+e*e+s*s+n*n);t*=J,e*=J,s*=J,n*=J}}A[g]=t,A[g+1]=e,A[g+2]=s,A[g+3]=n}static multiplyQuaternionsFlat(A,g,I,B,Q,E){const i=I[B],t=I[B+1],e=I[B+2],s=I[B+3],n=Q[E],r=Q[E+1],h=Q[E+2],w=Q[E+3];return A[g]=i*w+s*n+t*h-e*r,A[g+1]=t*w+s*r+e*n-i*h,A[g+2]=e*w+s*h+i*r-t*n,A[g+3]=s*w-i*n-t*r-e*h,A}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get w(){return this._w}set w(A){this._w=A,this._onChangeCallback()}set(A,g,I,B){return this._x=A,this._y=g,this._z=I,this._w=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(A){return this._x=A.x,this._y=A.y,this._z=A.z,this._w=A.w,this._onChangeCallback(),this}setFromEuler(A,g){const I=A._x,B=A._y,Q=A._z,E=A._order,i=Math.cos,t=Math.sin,e=i(I/2),s=i(B/2),n=i(Q/2),r=t(I/2),h=t(B/2),w=t(Q/2);switch(E){case"XYZ":this._x=r*s*n+e*h*w,this._y=e*h*n-r*s*w,this._z=e*s*w+r*h*n,this._w=e*s*n-r*h*w;break;case"YXZ":this._x=r*s*n+e*h*w,this._y=e*h*n-r*s*w,this._z=e*s*w-r*h*n,this._w=e*s*n+r*h*w;break;case"ZXY":this._x=r*s*n-e*h*w,this._y=e*h*n+r*s*w,this._z=e*s*w+r*h*n,this._w=e*s*n-r*h*w;break;case"ZYX":this._x=r*s*n-e*h*w,this._y=e*h*n+r*s*w,this._z=e*s*w-r*h*n,this._w=e*s*n+r*h*w;break;case"YZX":this._x=r*s*n+e*h*w,this._y=e*h*n+r*s*w,this._z=e*s*w-r*h*n,this._w=e*s*n-r*h*w;break;case"XZY":this._x=r*s*n-e*h*w,this._y=e*h*n-r*s*w,this._z=e*s*w+r*h*n,this._w=e*s*n+r*h*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+E)}return g!==!1&&this._onChangeCallback(),this}setFromAxisAngle(A,g){const I=g/2,B=Math.sin(I);return this._x=A.x*B,this._y=A.y*B,this._z=A.z*B,this._w=Math.cos(I),this._onChangeCallback(),this}setFromRotationMatrix(A){const g=A.elements,I=g[0],B=g[4],Q=g[8],E=g[1],i=g[5],t=g[9],e=g[2],s=g[6],n=g[10],r=I+i+n;if(r>0){const h=.5/Math.sqrt(r+1);this._w=.25/h,this._x=(s-t)*h,this._y=(Q-e)*h,this._z=(E-B)*h}else if(I>i&&I>n){const h=2*Math.sqrt(1+I-i-n);this._w=(s-t)/h,this._x=.25*h,this._y=(B+E)/h,this._z=(Q+e)/h}else if(i>n){const h=2*Math.sqrt(1+i-I-n);this._w=(Q-e)/h,this._x=(B+E)/h,this._y=.25*h,this._z=(t+s)/h}else{const h=2*Math.sqrt(1+n-I-i);this._w=(E-B)/h,this._x=(Q+e)/h,this._y=(t+s)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(A,g){let I=A.dot(g)+1;return I<Number.EPSILON?(I=0,Math.abs(A.x)>Math.abs(A.z)?(this._x=-A.y,this._y=A.x,this._z=0,this._w=I):(this._x=0,this._y=-A.z,this._z=A.y,this._w=I)):(this._x=A.y*g.z-A.z*g.y,this._y=A.z*g.x-A.x*g.z,this._z=A.x*g.y-A.y*g.x,this._w=I),this.normalize()}angleTo(A){return 2*Math.acos(Math.abs(DI(this.dot(A),-1,1)))}rotateTowards(A,g){const I=this.angleTo(A);if(I===0)return this;const B=Math.min(1,g/I);return this.slerp(A,B),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(A){return this._x*A._x+this._y*A._y+this._z*A._z+this._w*A._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let A=this.length();return A===0?(this._x=0,this._y=0,this._z=0,this._w=1):(A=1/A,this._x=this._x*A,this._y=this._y*A,this._z=this._z*A,this._w=this._w*A),this._onChangeCallback(),this}multiply(A){return this.multiplyQuaternions(this,A)}premultiply(A){return this.multiplyQuaternions(A,this)}multiplyQuaternions(A,g){const I=A._x,B=A._y,Q=A._z,E=A._w,i=g._x,t=g._y,e=g._z,s=g._w;return this._x=I*s+E*i+B*e-Q*t,this._y=B*s+E*t+Q*i-I*e,this._z=Q*s+E*e+I*t-B*i,this._w=E*s-I*i-B*t-Q*e,this._onChangeCallback(),this}slerp(A,g){if(g===0)return this;if(g===1)return this.copy(A);const I=this._x,B=this._y,Q=this._z,E=this._w;let i=E*A._w+I*A._x+B*A._y+Q*A._z;if(i<0?(this._w=-A._w,this._x=-A._x,this._y=-A._y,this._z=-A._z,i=-i):this.copy(A),i>=1)return this._w=E,this._x=I,this._y=B,this._z=Q,this;const t=1-i*i;if(t<=Number.EPSILON){const h=1-g;return this._w=h*E+g*this._w,this._x=h*I+g*this._x,this._y=h*B+g*this._y,this._z=h*Q+g*this._z,this.normalize(),this._onChangeCallback(),this}const e=Math.sqrt(t),s=Math.atan2(e,i),n=Math.sin((1-g)*s)/e,r=Math.sin(g*s)/e;return this._w=E*n+this._w*r,this._x=I*n+this._x*r,this._y=B*n+this._y*r,this._z=Q*n+this._z*r,this._onChangeCallback(),this}slerpQuaternions(A,g,I){return this.copy(A).slerp(g,I)}random(){const A=Math.random(),g=Math.sqrt(1-A),I=Math.sqrt(A),B=2*Math.PI*Math.random(),Q=2*Math.PI*Math.random();return this.set(g*Math.cos(B),I*Math.sin(Q),I*Math.cos(Q),g*Math.sin(B))}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._w===this._w}fromArray(A,g=0){return this._x=A[g],this._y=A[g+1],this._z=A[g+2],this._w=A[g+3],this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._w,A}fromBufferAttribute(A,g){return this._x=A.getX(g),this._y=A.getY(g),this._z=A.getZ(g),this._w=A.getW(g),this}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class x{constructor(A=0,g=0,I=0){x.prototype.isVector3=!0,this.x=A,this.y=g,this.z=I}set(A,g,I){return I===void 0&&(I=this.z),this.x=A,this.y=g,this.z=I,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this}multiplyVectors(A,g){return this.x=A.x*g.x,this.y=A.y*g.y,this.z=A.z*g.z,this}applyEuler(A){return this.applyQuaternion(bE.setFromEuler(A))}applyAxisAngle(A,g){return this.applyQuaternion(bE.setFromAxisAngle(A,g))}applyMatrix3(A){const g=this.x,I=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*g+Q[3]*I+Q[6]*B,this.y=Q[1]*g+Q[4]*I+Q[7]*B,this.z=Q[2]*g+Q[5]*I+Q[8]*B,this}applyNormalMatrix(A){return this.applyMatrix3(A).normalize()}applyMatrix4(A){const g=this.x,I=this.y,B=this.z,Q=A.elements,E=1/(Q[3]*g+Q[7]*I+Q[11]*B+Q[15]);return this.x=(Q[0]*g+Q[4]*I+Q[8]*B+Q[12])*E,this.y=(Q[1]*g+Q[5]*I+Q[9]*B+Q[13])*E,this.z=(Q[2]*g+Q[6]*I+Q[10]*B+Q[14])*E,this}applyQuaternion(A){const g=this.x,I=this.y,B=this.z,Q=A.x,E=A.y,i=A.z,t=A.w,e=t*g+E*B-i*I,s=t*I+i*g-Q*B,n=t*B+Q*I-E*g,r=-Q*g-E*I-i*B;return this.x=e*t+r*-Q+s*-i-n*-E,this.y=s*t+r*-E+n*-Q-e*-i,this.z=n*t+r*-i+e*-E-s*-Q,this}project(A){return this.applyMatrix4(A.matrixWorldInverse).applyMatrix4(A.projectionMatrix)}unproject(A){return this.applyMatrix4(A.projectionMatrixInverse).applyMatrix4(A.matrixWorld)}transformDirection(A){const g=this.x,I=this.y,B=this.z,Q=A.elements;return this.x=Q[0]*g+Q[4]*I+Q[8]*B,this.y=Q[1]*g+Q[5]*I+Q[9]*B,this.z=Q[2]*g+Q[6]*I+Q[10]*B,this.normalize()}divide(A){return this.x/=A.x,this.y/=A.y,this.z/=A.z,this}divideScalar(A){return this.multiplyScalar(1/A)}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this}cross(A){return this.crossVectors(this,A)}crossVectors(A,g){const I=A.x,B=A.y,Q=A.z,E=g.x,i=g.y,t=g.z;return this.x=B*t-Q*i,this.y=Q*E-I*t,this.z=I*i-B*E,this}projectOnVector(A){const g=A.lengthSq();if(g===0)return this.set(0,0,0);const I=A.dot(this)/g;return this.copy(A).multiplyScalar(I)}projectOnPlane(A){return CE.copy(this).projectOnVector(A),this.sub(CE)}reflect(A){return this.sub(CE.copy(A).multiplyScalar(2*this.dot(A)))}angleTo(A){const g=Math.sqrt(this.lengthSq()*A.lengthSq());if(g===0)return Math.PI/2;const I=this.dot(A)/g;return Math.acos(DI(I,-1,1))}distanceTo(A){return Math.sqrt(this.distanceToSquared(A))}distanceToSquared(A){const g=this.x-A.x,I=this.y-A.y,B=this.z-A.z;return g*g+I*I+B*B}manhattanDistanceTo(A){return Math.abs(this.x-A.x)+Math.abs(this.y-A.y)+Math.abs(this.z-A.z)}setFromSpherical(A){return this.setFromSphericalCoords(A.radius,A.phi,A.theta)}setFromSphericalCoords(A,g,I){const B=Math.sin(g)*A;return this.x=B*Math.sin(I),this.y=Math.cos(g)*A,this.z=B*Math.cos(I),this}setFromCylindrical(A){return this.setFromCylindricalCoords(A.radius,A.theta,A.y)}setFromCylindricalCoords(A,g,I){return this.x=A*Math.sin(g),this.y=I,this.z=A*Math.cos(g),this}setFromMatrixPosition(A){const g=A.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(A){const g=this.setFromMatrixColumn(A,0).length(),I=this.setFromMatrixColumn(A,1).length(),B=this.setFromMatrixColumn(A,2).length();return this.x=g,this.y=I,this.z=B,this}setFromMatrixColumn(A,g){return this.fromArray(A.elements,4*g)}setFromMatrix3Column(A,g){return this.fromArray(A.elements,3*g)}setFromEuler(A){return this.x=A._x,this.y=A._y,this.z=A._z,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const A=2*(Math.random()-.5),g=Math.random()*Math.PI*2,I=Math.sqrt(1-A**2);return this.x=I*Math.cos(g),this.y=I*Math.sin(g),this.z=A,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const CE=new x,bE=new dB;function PC(C){return C<.04045?.0773993808*C:Math.pow(.9478672986*C+.0521327014,2.4)}function QE(C){return C<.0031308?12.92*C:1.055*Math.pow(C,.41666)-.055}const XC=new _I().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),fQ=new _I().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),BC=new x,EE={[QA]:C=>C,[q]:C=>C.convertSRGBToLinear(),[tA]:function(C){return C.convertSRGBToLinear(),BC.set(C.r,C.g,C.b).applyMatrix3(fQ),C.setRGB(BC.x,BC.y,BC.z)}},_C={[QA]:C=>C,[q]:C=>C.convertLinearToSRGB(),[tA]:function(C){return BC.set(C.r,C.g,C.b).applyMatrix3(XC),C.setRGB(BC.x,BC.y,BC.z).convertLinearToSRGB()}},lI={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(C){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!C},get workingColorSpace(){return QA},set workingColorSpace(C){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(C,A,g){if(this.enabled===!1||A===g||!A||!g)return C;const I=EE[A],B=_C[g];if(I===void 0||B===void 0)throw new Error(`Unsupported color space conversion, "${A}" to "${g}".`);return B(I(C))},fromWorkingColorSpace:function(C,A){return this.convert(C,this.workingColorSpace,A)},toWorkingColorSpace:function(C,A){return this.convert(C,A,this.workingColorSpace)}};let mC;class xg{static getDataURL(A){if(/^data:/i.test(A.src)||typeof HTMLCanvasElement>"u")return A.src;let g;if(A instanceof HTMLCanvasElement)g=A;else{mC===void 0&&(mC=fC("canvas")),mC.width=A.width,mC.height=A.height;const I=mC.getContext("2d");A instanceof ImageData?I.putImageData(A,0,0):I.drawImage(A,0,0,A.width,A.height),g=mC}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",A),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(A){if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const g=fC("canvas");g.width=A.width,g.height=A.height;const I=g.getContext("2d");I.drawImage(A,0,0,A.width,A.height);const B=I.getImageData(0,0,A.width,A.height),Q=B.data;for(let E=0;E<Q.length;E++)Q[E]=255*PC(Q[E]/255);return I.putImageData(B,0,0),g}if(A.data){const g=A.data.slice(0);for(let I=0;I<g.length;I++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[I]=Math.floor(255*PC(g[I]/255)):g[I]=PC(g[I]);return{data:g,width:A.width,height:A.height}}return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),A}}class mI{constructor(A=null){this.isSource=!0,this.uuid=uI(),this.data=A,this.version=0}set needsUpdate(A){A===!0&&this.version++}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.images[this.uuid]!==void 0)return A.images[this.uuid];const I={uuid:this.uuid,url:""},B=this.data;if(B!==null){let Q;if(Array.isArray(B)){Q=[];for(let E=0,i=B.length;E<i;E++)B[E].isDataTexture?Q.push(iE(B[E].image)):Q.push(iE(B[E]))}else Q=iE(B);I.url=Q}return g||(A.images[this.uuid]=I),I}}function iE(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap?xg.getDataURL(C):C.data?{data:Array.from(C.data),width:C.width,height:C.height,type:C.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qE=0;class JI extends hg{constructor(A=JI.DEFAULT_IMAGE,g=JI.DEFAULT_MAPPING,I=1001,B=1001,Q=1006,E=1008,i=1023,t=1009,e=JI.DEFAULT_ANISOTROPY,s=3e3){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=uI(),this.name="",this.source=new mI(A),this.mipmaps=[],this.mapping=g,this.wrapS=I,this.wrapT=B,this.magFilter=Q,this.minFilter=E,this.anisotropy=e,this.format=i,this.internalFormat=null,this.type=t,this.offset=new HA(0,0),this.repeat=new HA(1,1),this.center=new HA(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _I,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=s,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(A=null){this.source.data=A}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(A){return this.name=A.name,this.source=A.source,this.mipmaps=A.mipmaps.slice(0),this.mapping=A.mapping,this.wrapS=A.wrapS,this.wrapT=A.wrapT,this.magFilter=A.magFilter,this.minFilter=A.minFilter,this.anisotropy=A.anisotropy,this.format=A.format,this.internalFormat=A.internalFormat,this.type=A.type,this.offset.copy(A.offset),this.repeat.copy(A.repeat),this.center.copy(A.center),this.rotation=A.rotation,this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrix.copy(A.matrix),this.generateMipmaps=A.generateMipmaps,this.premultiplyAlpha=A.premultiplyAlpha,this.flipY=A.flipY,this.unpackAlignment=A.unpackAlignment,this.encoding=A.encoding,this.userData=JSON.parse(JSON.stringify(A.userData)),this.needsUpdate=!0,this}toJSON(A){const g=A===void 0||typeof A=="string";if(!g&&A.textures[this.uuid]!==void 0)return A.textures[this.uuid];const I={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(A).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(I.userData=this.userData),g||(A.textures[this.uuid]=I),I}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(A){if(this.mapping!==300)return A;if(A.applyMatrix3(this.matrix),A.x<0||A.x>1)switch(this.wrapS){case 1e3:A.x=A.x-Math.floor(A.x);break;case 1001:A.x=A.x<0?0:1;break;case 1002:Math.abs(Math.floor(A.x)%2)===1?A.x=Math.ceil(A.x)-A.x:A.x=A.x-Math.floor(A.x)}if(A.y<0||A.y>1)switch(this.wrapT){case 1e3:A.y=A.y-Math.floor(A.y);break;case 1001:A.y=A.y<0?0:1;break;case 1002:Math.abs(Math.floor(A.y)%2)===1?A.y=Math.ceil(A.y)-A.y:A.y=A.y-Math.floor(A.y)}return this.flipY&&(A.y=1-A.y),A}set needsUpdate(A){A===!0&&(this.version++,this.source.needsUpdate=!0)}}JI.DEFAULT_IMAGE=null,JI.DEFAULT_MAPPING=300,JI.DEFAULT_ANISOTROPY=1;class oI{constructor(A=0,g=0,I=0,B=1){oI.prototype.isVector4=!0,this.x=A,this.y=g,this.z=I,this.w=B}get width(){return this.z}set width(A){this.z=A}get height(){return this.w}set height(A){this.w=A}set(A,g,I,B){return this.x=A,this.y=g,this.z=I,this.w=B,this}setScalar(A){return this.x=A,this.y=A,this.z=A,this.w=A,this}setX(A){return this.x=A,this}setY(A){return this.y=A,this}setZ(A){return this.z=A,this}setW(A){return this.w=A,this}setComponent(A,g){switch(A){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+A)}return this}getComponent(A){switch(A){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+A)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(A){return this.x=A.x,this.y=A.y,this.z=A.z,this.w=A.w!==void 0?A.w:1,this}add(A){return this.x+=A.x,this.y+=A.y,this.z+=A.z,this.w+=A.w,this}addScalar(A){return this.x+=A,this.y+=A,this.z+=A,this.w+=A,this}addVectors(A,g){return this.x=A.x+g.x,this.y=A.y+g.y,this.z=A.z+g.z,this.w=A.w+g.w,this}addScaledVector(A,g){return this.x+=A.x*g,this.y+=A.y*g,this.z+=A.z*g,this.w+=A.w*g,this}sub(A){return this.x-=A.x,this.y-=A.y,this.z-=A.z,this.w-=A.w,this}subScalar(A){return this.x-=A,this.y-=A,this.z-=A,this.w-=A,this}subVectors(A,g){return this.x=A.x-g.x,this.y=A.y-g.y,this.z=A.z-g.z,this.w=A.w-g.w,this}multiply(A){return this.x*=A.x,this.y*=A.y,this.z*=A.z,this.w*=A.w,this}multiplyScalar(A){return this.x*=A,this.y*=A,this.z*=A,this.w*=A,this}applyMatrix4(A){const g=this.x,I=this.y,B=this.z,Q=this.w,E=A.elements;return this.x=E[0]*g+E[4]*I+E[8]*B+E[12]*Q,this.y=E[1]*g+E[5]*I+E[9]*B+E[13]*Q,this.z=E[2]*g+E[6]*I+E[10]*B+E[14]*Q,this.w=E[3]*g+E[7]*I+E[11]*B+E[15]*Q,this}divideScalar(A){return this.multiplyScalar(1/A)}setAxisAngleFromQuaternion(A){this.w=2*Math.acos(A.w);const g=Math.sqrt(1-A.w*A.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=A.x/g,this.y=A.y/g,this.z=A.z/g),this}setAxisAngleFromRotationMatrix(A){let g,I,B,Q;const t=A.elements,e=t[0],s=t[4],n=t[8],r=t[1],h=t[5],w=t[9],D=t[2],u=t[6],R=t[10];if(Math.abs(s-r)<.01&&Math.abs(n-D)<.01&&Math.abs(w-u)<.01){if(Math.abs(s+r)<.1&&Math.abs(n+D)<.1&&Math.abs(w+u)<.1&&Math.abs(e+h+R-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const F=(e+1)/2,N=(h+1)/2,J=(R+1)/2,T=(s+r)/4,$=(n+D)/4,IA=(w+u)/4;return F>N&&F>J?F<.01?(I=0,B=.707106781,Q=.707106781):(I=Math.sqrt(F),B=T/I,Q=$/I):N>J?N<.01?(I=.707106781,B=0,Q=.707106781):(B=Math.sqrt(N),I=T/B,Q=IA/B):J<.01?(I=.707106781,B=.707106781,Q=0):(Q=Math.sqrt(J),I=$/Q,B=IA/Q),this.set(I,B,Q,g),this}let y=Math.sqrt((u-w)*(u-w)+(n-D)*(n-D)+(r-s)*(r-s));return Math.abs(y)<.001&&(y=1),this.x=(u-w)/y,this.y=(n-D)/y,this.z=(r-s)/y,this.w=Math.acos((e+h+R-1)/2),this}min(A){return this.x=Math.min(this.x,A.x),this.y=Math.min(this.y,A.y),this.z=Math.min(this.z,A.z),this.w=Math.min(this.w,A.w),this}max(A){return this.x=Math.max(this.x,A.x),this.y=Math.max(this.y,A.y),this.z=Math.max(this.z,A.z),this.w=Math.max(this.w,A.w),this}clamp(A,g){return this.x=Math.max(A.x,Math.min(g.x,this.x)),this.y=Math.max(A.y,Math.min(g.y,this.y)),this.z=Math.max(A.z,Math.min(g.z,this.z)),this.w=Math.max(A.w,Math.min(g.w,this.w)),this}clampScalar(A,g){return this.x=Math.max(A,Math.min(g,this.x)),this.y=Math.max(A,Math.min(g,this.y)),this.z=Math.max(A,Math.min(g,this.z)),this.w=Math.max(A,Math.min(g,this.w)),this}clampLength(A,g){const I=this.length();return this.divideScalar(I||1).multiplyScalar(Math.max(A,Math.min(g,I)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(A){return this.x*A.x+this.y*A.y+this.z*A.z+this.w*A.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(A){return this.normalize().multiplyScalar(A)}lerp(A,g){return this.x+=(A.x-this.x)*g,this.y+=(A.y-this.y)*g,this.z+=(A.z-this.z)*g,this.w+=(A.w-this.w)*g,this}lerpVectors(A,g,I){return this.x=A.x+(g.x-A.x)*I,this.y=A.y+(g.y-A.y)*I,this.z=A.z+(g.z-A.z)*I,this.w=A.w+(g.w-A.w)*I,this}equals(A){return A.x===this.x&&A.y===this.y&&A.z===this.z&&A.w===this.w}fromArray(A,g=0){return this.x=A[g],this.y=A[g+1],this.z=A[g+2],this.w=A[g+3],this}toArray(A=[],g=0){return A[g]=this.x,A[g+1]=this.y,A[g+2]=this.z,A[g+3]=this.w,A}fromBufferAttribute(A,g){return this.x=A.getX(g),this.y=A.getY(g),this.z=A.getZ(g),this.w=A.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VB extends hg{constructor(A=1,g=1,I={}){super(),this.isWebGLRenderTarget=!0,this.width=A,this.height=g,this.depth=1,this.scissor=new oI(0,0,A,g),this.scissorTest=!1,this.viewport=new oI(0,0,A,g);const B={width:A,height:g,depth:1};this.texture=new JI(B,I.mapping,I.wrapS,I.wrapT,I.magFilter,I.minFilter,I.format,I.type,I.anisotropy,I.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=I.generateMipmaps!==void 0&&I.generateMipmaps,this.texture.internalFormat=I.internalFormat!==void 0?I.internalFormat:null,this.texture.minFilter=I.minFilter!==void 0?I.minFilter:1006,this.depthBuffer=I.depthBuffer===void 0||I.depthBuffer,this.stencilBuffer=I.stencilBuffer!==void 0&&I.stencilBuffer,this.depthTexture=I.depthTexture!==void 0?I.depthTexture:null,this.samples=I.samples!==void 0?I.samples:0}setSize(A,g,I=1){this.width===A&&this.height===g&&this.depth===I||(this.width=A,this.height=g,this.depth=I,this.texture.image.width=A,this.texture.image.height=g,this.texture.image.depth=I,this.dispose()),this.viewport.set(0,0,A,g),this.scissor.set(0,0,A,g)}clone(){return new this.constructor().copy(this)}copy(A){this.width=A.width,this.height=A.height,this.depth=A.depth,this.viewport.copy(A.viewport),this.texture=A.texture.clone(),this.texture.isRenderTargetTexture=!0;const g=Object.assign({},A.texture.image);return this.texture.source=new mI(g),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,A.depthTexture!==null&&(this.depthTexture=A.depthTexture.clone()),this.samples=A.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class eQ extends JI{constructor(A=null,g=1,I=1,B=1){super(null),this.isDataArrayTexture=!0,this.image={data:A,width:g,height:I,depth:B},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mQ extends JI{constructor(A=null,g=1,I=1,B=1){super(null),this.isData3DTexture=!0,this.image={data:A,width:g,height:I,depth:B},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jC{constructor(A=new x(1/0,1/0,1/0),g=new x(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=A,this.max=g}set(A,g){return this.min.copy(A),this.max.copy(g),this}setFromArray(A){let g=1/0,I=1/0,B=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let t=0,e=A.length;t<e;t+=3){const s=A[t],n=A[t+1],r=A[t+2];s<g&&(g=s),n<I&&(I=n),r<B&&(B=r),s>Q&&(Q=s),n>E&&(E=n),r>i&&(i=r)}return this.min.set(g,I,B),this.max.set(Q,E,i),this}setFromBufferAttribute(A){let g=1/0,I=1/0,B=1/0,Q=-1/0,E=-1/0,i=-1/0;for(let t=0,e=A.count;t<e;t++){const s=A.getX(t),n=A.getY(t),r=A.getZ(t);s<g&&(g=s),n<I&&(I=n),r<B&&(B=r),s>Q&&(Q=s),n>E&&(E=n),r>i&&(i=r)}return this.min.set(g,I,B),this.max.set(Q,E,i),this}setFromPoints(A){this.makeEmpty();for(let g=0,I=A.length;g<I;g++)this.expandByPoint(A[g]);return this}setFromCenterAndSize(A,g){const I=yB.copy(g).multiplyScalar(.5);return this.min.copy(A).sub(I),this.max.copy(A).add(I),this}setFromObject(A,g=!1){return this.makeEmpty(),this.expandByObject(A,g)}clone(){return new this.constructor().copy(this)}copy(A){return this.min.copy(A.min),this.max.copy(A.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(A){return this.isEmpty()?A.set(0,0,0):A.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(A){return this.isEmpty()?A.set(0,0,0):A.subVectors(this.max,this.min)}expandByPoint(A){return this.min.min(A),this.max.max(A),this}expandByVector(A){return this.min.sub(A),this.max.add(A),this}expandByScalar(A){return this.min.addScalar(-A),this.max.addScalar(A),this}expandByObject(A,g=!1){A.updateWorldMatrix(!1,!1);const I=A.geometry;if(I!==void 0)if(g&&I.attributes!=null&&I.attributes.position!==void 0){const Q=I.attributes.position;for(let E=0,i=Q.count;E<i;E++)yB.fromBufferAttribute(Q,E).applyMatrix4(A.matrixWorld),this.expandByPoint(yB)}else I.boundingBox===null&&I.computeBoundingBox(),oQ.copy(I.boundingBox),oQ.applyMatrix4(A.matrixWorld),this.union(oQ);const B=A.children;for(let Q=0,E=B.length;Q<E;Q++)this.expandByObject(B[Q],g);return this}containsPoint(A){return!(A.x<this.min.x||A.x>this.max.x||A.y<this.min.y||A.y>this.max.y||A.z<this.min.z||A.z>this.max.z)}containsBox(A){return this.min.x<=A.min.x&&A.max.x<=this.max.x&&this.min.y<=A.min.y&&A.max.y<=this.max.y&&this.min.z<=A.min.z&&A.max.z<=this.max.z}getParameter(A,g){return g.set((A.x-this.min.x)/(this.max.x-this.min.x),(A.y-this.min.y)/(this.max.y-this.min.y),(A.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(A){return!(A.max.x<this.min.x||A.min.x>this.max.x||A.max.y<this.min.y||A.min.y>this.max.y||A.max.z<this.min.z||A.min.z>this.max.z)}intersectsSphere(A){return this.clampPoint(A.center,yB),yB.distanceToSquared(A.center)<=A.radius*A.radius}intersectsPlane(A){let g,I;return A.normal.x>0?(g=A.normal.x*this.min.x,I=A.normal.x*this.max.x):(g=A.normal.x*this.max.x,I=A.normal.x*this.min.x),A.normal.y>0?(g+=A.normal.y*this.min.y,I+=A.normal.y*this.max.y):(g+=A.normal.y*this.max.y,I+=A.normal.y*this.min.y),A.normal.z>0?(g+=A.normal.z*this.min.z,I+=A.normal.z*this.max.z):(g+=A.normal.z*this.max.z,I+=A.normal.z*this.min.z),g<=-A.constant&&I>=-A.constant}intersectsTriangle(A){if(this.isEmpty())return!1;this.getCenter(aQ),NC.subVectors(this.max,aQ),HB.subVectors(A.a,aQ),zC.subVectors(A.b,aQ),Fg.subVectors(A.c,aQ),M.subVectors(zC,HB),wI.subVectors(Fg,zC),CC.subVectors(HB,Fg);let g=[0,-M.z,M.y,0,-wI.z,wI.y,0,-CC.z,CC.y,M.z,0,-M.x,wI.z,0,-wI.x,CC.z,0,-CC.x,-M.y,M.x,0,-wI.y,wI.x,0,-CC.y,CC.x,0];return!!sQ(g,HB,zC,Fg,NC)&&(g=[1,0,0,0,1,0,0,0,1],!!sQ(g,HB,zC,Fg,NC)&&(hC.crossVectors(M,wI),g=[hC.x,hC.y,hC.z],sQ(g,HB,zC,Fg,NC)))}clampPoint(A,g){return g.copy(A).clamp(this.min,this.max)}distanceToPoint(A){return this.clampPoint(A,yB).distanceTo(A)}getBoundingSphere(A){return this.isEmpty()?A.makeEmpty():(this.getCenter(A.center),A.radius=.5*this.getSize(yB).length()),A}intersect(A){return this.min.max(A.min),this.max.min(A.max),this.isEmpty()&&this.makeEmpty(),this}union(A){return this.min.min(A.min),this.max.max(A.max),this}applyMatrix4(A){return this.isEmpty()||(Hg[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(A),Hg[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(A),Hg[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(A),Hg[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(A),Hg[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(A),Hg[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(A),Hg[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(A),Hg[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(A),this.setFromPoints(Hg)),this}translate(A){return this.min.add(A),this.max.add(A),this}equals(A){return A.min.equals(this.min)&&A.max.equals(this.max)}}const Hg=[new x,new x,new x,new x,new x,new x,new x,new x],yB=new x,oQ=new jC,HB=new x,zC=new x,Fg=new x,M=new x,wI=new x,CC=new x,aQ=new x,NC=new x,hC=new x,FB=new x;function sQ(C,A,g,I,B){for(let Q=0,E=C.length-3;Q<=E;Q+=3){FB.fromArray(C,Q);const i=B.x*Math.abs(FB.x)+B.y*Math.abs(FB.y)+B.z*Math.abs(FB.z),t=A.dot(FB),e=g.dot(FB),s=I.dot(FB);if(Math.max(-Math.max(t,e,s),Math.min(t,e,s))>i)return!1}return!0}const xE=new jC,$C=new x,NQ=new x;class kC{constructor(A=new x,g=-1){this.center=A,this.radius=g}set(A,g){return this.center.copy(A),this.radius=g,this}setFromPoints(A,g){const I=this.center;g!==void 0?I.copy(g):xE.setFromPoints(A).getCenter(I);let B=0;for(let Q=0,E=A.length;Q<E;Q++)B=Math.max(B,I.distanceToSquared(A[Q]));return this.radius=Math.sqrt(B),this}copy(A){return this.center.copy(A.center),this.radius=A.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(A){return A.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(A){return A.distanceTo(this.center)-this.radius}intersectsSphere(A){const g=this.radius+A.radius;return A.center.distanceToSquared(this.center)<=g*g}intersectsBox(A){return A.intersectsSphere(this)}intersectsPlane(A){return Math.abs(A.distanceToPoint(this.center))<=this.radius}clampPoint(A,g){const I=this.center.distanceToSquared(A);return g.copy(A),I>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(A){return this.isEmpty()?(A.makeEmpty(),A):(A.set(this.center,this.center),A.expandByScalar(this.radius),A)}applyMatrix4(A){return this.center.applyMatrix4(A),this.radius=this.radius*A.getMaxScaleOnAxis(),this}translate(A){return this.center.add(A),this}expandByPoint(A){if(this.isEmpty())return this.center.copy(A),this.radius=0,this;$C.subVectors(A,this.center);const g=$C.lengthSq();if(g>this.radius*this.radius){const I=Math.sqrt(g),B=.5*(I-this.radius);this.center.addScaledVector($C,B/I),this.radius+=B}return this}union(A){return A.isEmpty()?this:this.isEmpty()?(this.copy(A),this):(this.center.equals(A.center)===!0?this.radius=Math.max(this.radius,A.radius):(NQ.subVectors(A.center,this.center).setLength(A.radius),this.expandByPoint($C.copy(A.center).add(NQ)),this.expandByPoint($C.copy(A.center).sub(NQ))),this)}equals(A){return A.center.equals(this.center)&&A.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bB=new x,QC=new x,rQ=new x,cC=new x,AB=new x,DC=new x,gI=new x;class fB{constructor(A=new x,g=new x(0,0,-1)){this.origin=A,this.direction=g}set(A,g){return this.origin.copy(A),this.direction.copy(g),this}copy(A){return this.origin.copy(A.origin),this.direction.copy(A.direction),this}at(A,g){return g.copy(this.origin).addScaledVector(this.direction,A)}lookAt(A){return this.direction.copy(A).sub(this.origin).normalize(),this}recast(A){return this.origin.copy(this.at(A,bB)),this}closestPointToPoint(A,g){g.subVectors(A,this.origin);const I=g.dot(this.direction);return I<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,I)}distanceToPoint(A){return Math.sqrt(this.distanceSqToPoint(A))}distanceSqToPoint(A){const g=bB.subVectors(A,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(A):(bB.copy(this.origin).addScaledVector(this.direction,g),bB.distanceToSquared(A))}distanceSqToSegment(A,g,I,B){QC.copy(A).add(g).multiplyScalar(.5),rQ.copy(g).sub(A).normalize(),cC.copy(this.origin).sub(QC);const Q=.5*A.distanceTo(g),E=-this.direction.dot(rQ),i=cC.dot(this.direction),t=-cC.dot(rQ),e=cC.lengthSq(),s=Math.abs(1-E*E);let n,r,h,w;if(s>0)if(n=E*t-i,r=E*i-t,w=Q*s,n>=0)if(r>=-w)if(r<=w){const D=1/s;n*=D,r*=D,h=n*(n+E*r+2*i)+r*(E*n+r+2*t)+e}else r=Q,n=Math.max(0,-(E*r+i)),h=-n*n+r*(r+2*t)+e;else r=-Q,n=Math.max(0,-(E*r+i)),h=-n*n+r*(r+2*t)+e;else r<=-w?(n=Math.max(0,-(-E*Q+i)),r=n>0?-Q:Math.min(Math.max(-Q,-t),Q),h=-n*n+r*(r+2*t)+e):r<=w?(n=0,r=Math.min(Math.max(-Q,-t),Q),h=r*(r+2*t)+e):(n=Math.max(0,-(E*Q+i)),r=n>0?Q:Math.min(Math.max(-Q,-t),Q),h=-n*n+r*(r+2*t)+e);else r=E>0?-Q:Q,n=Math.max(0,-(E*r+i)),h=-n*n+r*(r+2*t)+e;return I&&I.copy(this.origin).addScaledVector(this.direction,n),B&&B.copy(QC).addScaledVector(rQ,r),h}intersectSphere(A,g){bB.subVectors(A.center,this.origin);const I=bB.dot(this.direction),B=bB.dot(bB)-I*I,Q=A.radius*A.radius;if(B>Q)return null;const E=Math.sqrt(Q-B),i=I-E,t=I+E;return t<0?null:i<0?this.at(t,g):this.at(i,g)}intersectsSphere(A){return this.distanceSqToPoint(A.center)<=A.radius*A.radius}distanceToPlane(A){const g=A.normal.dot(this.direction);if(g===0)return A.distanceToPoint(this.origin)===0?0:null;const I=-(this.origin.dot(A.normal)+A.constant)/g;return I>=0?I:null}intersectPlane(A,g){const I=this.distanceToPlane(A);return I===null?null:this.at(I,g)}intersectsPlane(A){const g=A.distanceToPoint(this.origin);return g===0?!0:A.normal.dot(this.direction)*g<0}intersectBox(A,g){let I,B,Q,E,i,t;const e=1/this.direction.x,s=1/this.direction.y,n=1/this.direction.z,r=this.origin;return e>=0?(I=(A.min.x-r.x)*e,B=(A.max.x-r.x)*e):(I=(A.max.x-r.x)*e,B=(A.min.x-r.x)*e),s>=0?(Q=(A.min.y-r.y)*s,E=(A.max.y-r.y)*s):(Q=(A.max.y-r.y)*s,E=(A.min.y-r.y)*s),I>E||Q>B?null:((Q>I||isNaN(I))&&(I=Q),(E<B||isNaN(B))&&(B=E),n>=0?(i=(A.min.z-r.z)*n,t=(A.max.z-r.z)*n):(i=(A.max.z-r.z)*n,t=(A.min.z-r.z)*n),I>t||i>B?null:((i>I||I!=I)&&(I=i),(t<B||B!=B)&&(B=t),B<0?null:this.at(I>=0?I:B,g)))}intersectsBox(A){return this.intersectBox(A,bB)!==null}intersectTriangle(A,g,I,B,Q){AB.subVectors(g,A),DC.subVectors(I,A),gI.crossVectors(AB,DC);let E,i=this.direction.dot(gI);if(i>0){if(B)return null;E=1}else{if(!(i<0))return null;E=-1,i=-i}cC.subVectors(this.origin,A);const t=E*this.direction.dot(DC.crossVectors(cC,DC));if(t<0)return null;const e=E*this.direction.dot(AB.cross(cC));if(e<0||t+e>i)return null;const s=-E*cC.dot(gI);return s<0?null:this.at(s/i,Q)}applyMatrix4(A){return this.origin.applyMatrix4(A),this.direction.transformDirection(A),this}equals(A){return A.origin.equals(this.origin)&&A.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ng{constructor(){Ng.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(A,g,I,B,Q,E,i,t,e,s,n,r,h,w,D,u){const R=this.elements;return R[0]=A,R[4]=g,R[8]=I,R[12]=B,R[1]=Q,R[5]=E,R[9]=i,R[13]=t,R[2]=e,R[6]=s,R[10]=n,R[14]=r,R[3]=h,R[7]=w,R[11]=D,R[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ng().fromArray(this.elements)}copy(A){const g=this.elements,I=A.elements;return g[0]=I[0],g[1]=I[1],g[2]=I[2],g[3]=I[3],g[4]=I[4],g[5]=I[5],g[6]=I[6],g[7]=I[7],g[8]=I[8],g[9]=I[9],g[10]=I[10],g[11]=I[11],g[12]=I[12],g[13]=I[13],g[14]=I[14],g[15]=I[15],this}copyPosition(A){const g=this.elements,I=A.elements;return g[12]=I[12],g[13]=I[13],g[14]=I[14],this}setFromMatrix3(A){const g=A.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(A,g,I){return A.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),I.setFromMatrixColumn(this,2),this}makeBasis(A,g,I){return this.set(A.x,g.x,I.x,0,A.y,g.y,I.y,0,A.z,g.z,I.z,0,0,0,0,1),this}extractRotation(A){const g=this.elements,I=A.elements,B=1/UC.setFromMatrixColumn(A,0).length(),Q=1/UC.setFromMatrixColumn(A,1).length(),E=1/UC.setFromMatrixColumn(A,2).length();return g[0]=I[0]*B,g[1]=I[1]*B,g[2]=I[2]*B,g[3]=0,g[4]=I[4]*Q,g[5]=I[5]*Q,g[6]=I[6]*Q,g[7]=0,g[8]=I[8]*E,g[9]=I[9]*E,g[10]=I[10]*E,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(A){const g=this.elements,I=A.x,B=A.y,Q=A.z,E=Math.cos(I),i=Math.sin(I),t=Math.cos(B),e=Math.sin(B),s=Math.cos(Q),n=Math.sin(Q);if(A.order==="XYZ"){const r=E*s,h=E*n,w=i*s,D=i*n;g[0]=t*s,g[4]=-t*n,g[8]=e,g[1]=h+w*e,g[5]=r-D*e,g[9]=-i*t,g[2]=D-r*e,g[6]=w+h*e,g[10]=E*t}else if(A.order==="YXZ"){const r=t*s,h=t*n,w=e*s,D=e*n;g[0]=r+D*i,g[4]=w*i-h,g[8]=E*e,g[1]=E*n,g[5]=E*s,g[9]=-i,g[2]=h*i-w,g[6]=D+r*i,g[10]=E*t}else if(A.order==="ZXY"){const r=t*s,h=t*n,w=e*s,D=e*n;g[0]=r-D*i,g[4]=-E*n,g[8]=w+h*i,g[1]=h+w*i,g[5]=E*s,g[9]=D-r*i,g[2]=-E*e,g[6]=i,g[10]=E*t}else if(A.order==="ZYX"){const r=E*s,h=E*n,w=i*s,D=i*n;g[0]=t*s,g[4]=w*e-h,g[8]=r*e+D,g[1]=t*n,g[5]=D*e+r,g[9]=h*e-w,g[2]=-e,g[6]=i*t,g[10]=E*t}else if(A.order==="YZX"){const r=E*t,h=E*e,w=i*t,D=i*e;g[0]=t*s,g[4]=D-r*n,g[8]=w*n+h,g[1]=n,g[5]=E*s,g[9]=-i*s,g[2]=-e*s,g[6]=h*n+w,g[10]=r-D*n}else if(A.order==="XZY"){const r=E*t,h=E*e,w=i*t,D=i*e;g[0]=t*s,g[4]=-n,g[8]=e*s,g[1]=r*n+D,g[5]=E*s,g[9]=h*n-w,g[2]=w*n-h,g[6]=i*s,g[10]=D*n+r}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(A){return this.compose(Ji,A,Ki)}lookAt(A,g,I){const B=this.elements;return uB.subVectors(A,g),uB.lengthSq()===0&&(uB.z=1),uB.normalize(),lC.crossVectors(I,uB),lC.lengthSq()===0&&(Math.abs(I.z)===1?uB.x+=1e-4:uB.z+=1e-4,uB.normalize(),lC.crossVectors(I,uB)),lC.normalize(),LC.crossVectors(uB,lC),B[0]=lC.x,B[4]=LC.x,B[8]=uB.x,B[1]=lC.y,B[5]=LC.y,B[9]=uB.y,B[2]=lC.z,B[6]=LC.z,B[10]=uB.z,this}multiply(A){return this.multiplyMatrices(this,A)}premultiply(A){return this.multiplyMatrices(A,this)}multiplyMatrices(A,g){const I=A.elements,B=g.elements,Q=this.elements,E=I[0],i=I[4],t=I[8],e=I[12],s=I[1],n=I[5],r=I[9],h=I[13],w=I[2],D=I[6],u=I[10],R=I[14],y=I[3],F=I[7],N=I[11],J=I[15],T=B[0],$=B[4],IA=B[8],nA=B[12],cA=B[1],gA=B[5],RA=B[9],xA=B[13],UA=B[2],zA=B[6],jA=B[10],ig=B[14],tg=B[3],Ig=B[7],uA=B[11],pA=B[15];return Q[0]=E*T+i*cA+t*UA+e*tg,Q[4]=E*$+i*gA+t*zA+e*Ig,Q[8]=E*IA+i*RA+t*jA+e*uA,Q[12]=E*nA+i*xA+t*ig+e*pA,Q[1]=s*T+n*cA+r*UA+h*tg,Q[5]=s*$+n*gA+r*zA+h*Ig,Q[9]=s*IA+n*RA+r*jA+h*uA,Q[13]=s*nA+n*xA+r*ig+h*pA,Q[2]=w*T+D*cA+u*UA+R*tg,Q[6]=w*$+D*gA+u*zA+R*Ig,Q[10]=w*IA+D*RA+u*jA+R*uA,Q[14]=w*nA+D*xA+u*ig+R*pA,Q[3]=y*T+F*cA+N*UA+J*tg,Q[7]=y*$+F*gA+N*zA+J*Ig,Q[11]=y*IA+F*RA+N*jA+J*uA,Q[15]=y*nA+F*xA+N*ig+J*pA,this}multiplyScalar(A){const g=this.elements;return g[0]*=A,g[4]*=A,g[8]*=A,g[12]*=A,g[1]*=A,g[5]*=A,g[9]*=A,g[13]*=A,g[2]*=A,g[6]*=A,g[10]*=A,g[14]*=A,g[3]*=A,g[7]*=A,g[11]*=A,g[15]*=A,this}determinant(){const A=this.elements,g=A[0],I=A[4],B=A[8],Q=A[12],E=A[1],i=A[5],t=A[9],e=A[13],s=A[2],n=A[6],r=A[10],h=A[14];return A[3]*(+Q*t*n-B*e*n-Q*i*r+I*e*r+B*i*h-I*t*h)+A[7]*(+g*t*h-g*e*r+Q*E*r-B*E*h+B*e*s-Q*t*s)+A[11]*(+g*e*n-g*i*h-Q*E*n+I*E*h+Q*i*s-I*e*s)+A[15]*(-B*i*s-g*t*n+g*i*r+B*E*n-I*E*r+I*t*s)}transpose(){const A=this.elements;let g;return g=A[1],A[1]=A[4],A[4]=g,g=A[2],A[2]=A[8],A[8]=g,g=A[6],A[6]=A[9],A[9]=g,g=A[3],A[3]=A[12],A[12]=g,g=A[7],A[7]=A[13],A[13]=g,g=A[11],A[11]=A[14],A[14]=g,this}setPosition(A,g,I){const B=this.elements;return A.isVector3?(B[12]=A.x,B[13]=A.y,B[14]=A.z):(B[12]=A,B[13]=g,B[14]=I),this}invert(){const A=this.elements,g=A[0],I=A[1],B=A[2],Q=A[3],E=A[4],i=A[5],t=A[6],e=A[7],s=A[8],n=A[9],r=A[10],h=A[11],w=A[12],D=A[13],u=A[14],R=A[15],y=n*u*e-D*r*e+D*t*h-i*u*h-n*t*R+i*r*R,F=w*r*e-s*u*e-w*t*h+E*u*h+s*t*R-E*r*R,N=s*D*e-w*n*e+w*i*h-E*D*h-s*i*R+E*n*R,J=w*n*t-s*D*t-w*i*r+E*D*r+s*i*u-E*n*u,T=g*y+I*F+B*N+Q*J;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/T;return A[0]=y*$,A[1]=(D*r*Q-n*u*Q-D*B*h+I*u*h+n*B*R-I*r*R)*$,A[2]=(i*u*Q-D*t*Q+D*B*e-I*u*e-i*B*R+I*t*R)*$,A[3]=(n*t*Q-i*r*Q-n*B*e+I*r*e+i*B*h-I*t*h)*$,A[4]=F*$,A[5]=(s*u*Q-w*r*Q+w*B*h-g*u*h-s*B*R+g*r*R)*$,A[6]=(w*t*Q-E*u*Q-w*B*e+g*u*e+E*B*R-g*t*R)*$,A[7]=(E*r*Q-s*t*Q+s*B*e-g*r*e-E*B*h+g*t*h)*$,A[8]=N*$,A[9]=(w*n*Q-s*D*Q-w*I*h+g*D*h+s*I*R-g*n*R)*$,A[10]=(E*D*Q-w*i*Q+w*I*e-g*D*e-E*I*R+g*i*R)*$,A[11]=(s*i*Q-E*n*Q-s*I*e+g*n*e+E*I*h-g*i*h)*$,A[12]=J*$,A[13]=(s*D*B-w*n*B+w*I*r-g*D*r-s*I*u+g*n*u)*$,A[14]=(w*i*B-E*D*B-w*I*t+g*D*t+E*I*u-g*i*u)*$,A[15]=(E*n*B-s*i*B+s*I*t-g*n*t-E*I*r+g*i*r)*$,this}scale(A){const g=this.elements,I=A.x,B=A.y,Q=A.z;return g[0]*=I,g[4]*=B,g[8]*=Q,g[1]*=I,g[5]*=B,g[9]*=Q,g[2]*=I,g[6]*=B,g[10]*=Q,g[3]*=I,g[7]*=B,g[11]*=Q,this}getMaxScaleOnAxis(){const A=this.elements,g=A[0]*A[0]+A[1]*A[1]+A[2]*A[2],I=A[4]*A[4]+A[5]*A[5]+A[6]*A[6],B=A[8]*A[8]+A[9]*A[9]+A[10]*A[10];return Math.sqrt(Math.max(g,I,B))}makeTranslation(A,g,I){return this.set(1,0,0,A,0,1,0,g,0,0,1,I,0,0,0,1),this}makeRotationX(A){const g=Math.cos(A),I=Math.sin(A);return this.set(1,0,0,0,0,g,-I,0,0,I,g,0,0,0,0,1),this}makeRotationY(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,0,I,0,0,1,0,0,-I,0,g,0,0,0,0,1),this}makeRotationZ(A){const g=Math.cos(A),I=Math.sin(A);return this.set(g,-I,0,0,I,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(A,g){const I=Math.cos(g),B=Math.sin(g),Q=1-I,E=A.x,i=A.y,t=A.z,e=Q*E,s=Q*i;return this.set(e*E+I,e*i-B*t,e*t+B*i,0,e*i+B*t,s*i+I,s*t-B*E,0,e*t-B*i,s*t+B*E,Q*t*t+I,0,0,0,0,1),this}makeScale(A,g,I){return this.set(A,0,0,0,0,g,0,0,0,0,I,0,0,0,0,1),this}makeShear(A,g,I,B,Q,E){return this.set(1,I,Q,0,A,1,E,0,g,B,1,0,0,0,0,1),this}compose(A,g,I){const B=this.elements,Q=g._x,E=g._y,i=g._z,t=g._w,e=Q+Q,s=E+E,n=i+i,r=Q*e,h=Q*s,w=Q*n,D=E*s,u=E*n,R=i*n,y=t*e,F=t*s,N=t*n,J=I.x,T=I.y,$=I.z;return B[0]=(1-(D+R))*J,B[1]=(h+N)*J,B[2]=(w-F)*J,B[3]=0,B[4]=(h-N)*T,B[5]=(1-(r+R))*T,B[6]=(u+y)*T,B[7]=0,B[8]=(w+F)*$,B[9]=(u-y)*$,B[10]=(1-(r+D))*$,B[11]=0,B[12]=A.x,B[13]=A.y,B[14]=A.z,B[15]=1,this}decompose(A,g,I){const B=this.elements;let Q=UC.set(B[0],B[1],B[2]).length();const E=UC.set(B[4],B[5],B[6]).length(),i=UC.set(B[8],B[9],B[10]).length();this.determinant()<0&&(Q=-Q),A.x=B[12],A.y=B[13],A.z=B[14],qB.copy(this);const t=1/Q,e=1/E,s=1/i;return qB.elements[0]*=t,qB.elements[1]*=t,qB.elements[2]*=t,qB.elements[4]*=e,qB.elements[5]*=e,qB.elements[6]*=e,qB.elements[8]*=s,qB.elements[9]*=s,qB.elements[10]*=s,g.setFromRotationMatrix(qB),I.x=Q,I.y=E,I.z=i,this}makePerspective(A,g,I,B,Q,E){const i=this.elements,t=2*Q/(g-A),e=2*Q/(I-B),s=(g+A)/(g-A),n=(I+B)/(I-B),r=-(E+Q)/(E-Q),h=-2*E*Q/(E-Q);return i[0]=t,i[4]=0,i[8]=s,i[12]=0,i[1]=0,i[5]=e,i[9]=n,i[13]=0,i[2]=0,i[6]=0,i[10]=r,i[14]=h,i[3]=0,i[7]=0,i[11]=-1,i[15]=0,this}makeOrthographic(A,g,I,B,Q,E){const i=this.elements,t=1/(g-A),e=1/(I-B),s=1/(E-Q),n=(g+A)*t,r=(I+B)*e,h=(E+Q)*s;return i[0]=2*t,i[4]=0,i[8]=0,i[12]=-n,i[1]=0,i[5]=2*e,i[9]=0,i[13]=-r,i[2]=0,i[6]=0,i[10]=-2*s,i[14]=-h,i[3]=0,i[7]=0,i[11]=0,i[15]=1,this}equals(A){const g=this.elements,I=A.elements;for(let B=0;B<16;B++)if(g[B]!==I[B])return!1;return!0}fromArray(A,g=0){for(let I=0;I<16;I++)this.elements[I]=A[I+g];return this}toArray(A=[],g=0){const I=this.elements;return A[g]=I[0],A[g+1]=I[1],A[g+2]=I[2],A[g+3]=I[3],A[g+4]=I[4],A[g+5]=I[5],A[g+6]=I[6],A[g+7]=I[7],A[g+8]=I[8],A[g+9]=I[9],A[g+10]=I[10],A[g+11]=I[11],A[g+12]=I[12],A[g+13]=I[13],A[g+14]=I[14],A[g+15]=I[15],A}}const UC=new x,qB=new Ng,Ji=new x(0,0,0),Ki=new x(1,1,1),lC=new x,LC=new x,uB=new x,nQ=new Ng,hQ=new dB;class JC{constructor(A=0,g=0,I=0,B=JC.DEFAULT_ORDER){this.isEuler=!0,this._x=A,this._y=g,this._z=I,this._order=B}get x(){return this._x}set x(A){this._x=A,this._onChangeCallback()}get y(){return this._y}set y(A){this._y=A,this._onChangeCallback()}get z(){return this._z}set z(A){this._z=A,this._onChangeCallback()}get order(){return this._order}set order(A){this._order=A,this._onChangeCallback()}set(A,g,I,B=this._order){return this._x=A,this._y=g,this._z=I,this._order=B,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(A){return this._x=A._x,this._y=A._y,this._z=A._z,this._order=A._order,this._onChangeCallback(),this}setFromRotationMatrix(A,g=this._order,I=!0){const B=A.elements,Q=B[0],E=B[4],i=B[8],t=B[1],e=B[5],s=B[9],n=B[2],r=B[6],h=B[10];switch(g){case"XYZ":this._y=Math.asin(DI(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-s,h),this._z=Math.atan2(-E,Q)):(this._x=Math.atan2(r,e),this._z=0);break;case"YXZ":this._x=Math.asin(-DI(s,-1,1)),Math.abs(s)<.9999999?(this._y=Math.atan2(i,h),this._z=Math.atan2(t,e)):(this._y=Math.atan2(-n,Q),this._z=0);break;case"ZXY":this._x=Math.asin(DI(r,-1,1)),Math.abs(r)<.9999999?(this._y=Math.atan2(-n,h),this._z=Math.atan2(-E,e)):(this._y=0,this._z=Math.atan2(t,Q));break;case"ZYX":this._y=Math.asin(-DI(n,-1,1)),Math.abs(n)<.9999999?(this._x=Math.atan2(r,h),this._z=Math.atan2(t,Q)):(this._x=0,this._z=Math.atan2(-E,e));break;case"YZX":this._z=Math.asin(DI(t,-1,1)),Math.abs(t)<.9999999?(this._x=Math.atan2(-s,e),this._y=Math.atan2(-n,Q)):(this._x=0,this._y=Math.atan2(i,h));break;case"XZY":this._z=Math.asin(-DI(E,-1,1)),Math.abs(E)<.9999999?(this._x=Math.atan2(r,e),this._y=Math.atan2(i,Q)):(this._x=Math.atan2(-s,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,I===!0&&this._onChangeCallback(),this}setFromQuaternion(A,g,I){return nQ.makeRotationFromQuaternion(A),this.setFromRotationMatrix(nQ,g,I)}setFromVector3(A,g=this._order){return this.set(A.x,A.y,A.z,g)}reorder(A){return hQ.setFromEuler(this),this.setFromQuaternion(hQ,A)}equals(A){return A._x===this._x&&A._y===this._y&&A._z===this._z&&A._order===this._order}fromArray(A){return this._x=A[0],this._y=A[1],this._z=A[2],A[3]!==void 0&&(this._order=A[3]),this._onChangeCallback(),this}toArray(A=[],g=0){return A[g]=this._x,A[g+1]=this._y,A[g+2]=this._z,A[g+3]=this._order,A}_onChange(A){return this._onChangeCallback=A,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}JC.DEFAULT_ORDER="XYZ";class KC{constructor(){this.mask=1}set(A){this.mask=(1<<A|0)>>>0}enable(A){this.mask|=1<<A|0}enableAll(){this.mask=-1}toggle(A){this.mask^=1<<A|0}disable(A){this.mask&=~(1<<A|0)}disableAll(){this.mask=0}test(A){return(this.mask&A.mask)!=0}isEnabled(A){return(this.mask&(1<<A|0))!=0}}let YC=0;const vE=new x,AQ=new dB,wC=new Ng,cQ=new x,kQ=new x,Ht=new x,bt=new dB,EC=new x(1,0,0),WE=new x(0,1,0),iC=new x(0,0,1),qt={type:"added"},xB={type:"removed"};class II extends hg{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YC++}),this.uuid=uI(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=II.DEFAULT_UP.clone();const A=new x,g=new JC,I=new dB,B=new x(1,1,1);g._onChange(function(){I.setFromEuler(g,!1)}),I._onChange(function(){g.setFromQuaternion(I,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:A},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:I},scale:{configurable:!0,enumerable:!0,value:B},modelViewMatrix:{value:new Ng},normalMatrix:{value:new _I}}),this.matrix=new Ng,this.matrixWorld=new Ng,this.matrixAutoUpdate=II.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=II.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new KC,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(A){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(A),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(A){return this.quaternion.premultiply(A),this}setRotationFromAxisAngle(A,g){this.quaternion.setFromAxisAngle(A,g)}setRotationFromEuler(A){this.quaternion.setFromEuler(A,!0)}setRotationFromMatrix(A){this.quaternion.setFromRotationMatrix(A)}setRotationFromQuaternion(A){this.quaternion.copy(A)}rotateOnAxis(A,g){return AQ.setFromAxisAngle(A,g),this.quaternion.multiply(AQ),this}rotateOnWorldAxis(A,g){return AQ.setFromAxisAngle(A,g),this.quaternion.premultiply(AQ),this}rotateX(A){return this.rotateOnAxis(EC,A)}rotateY(A){return this.rotateOnAxis(WE,A)}rotateZ(A){return this.rotateOnAxis(iC,A)}translateOnAxis(A,g){return vE.copy(A).applyQuaternion(this.quaternion),this.position.add(vE.multiplyScalar(g)),this}translateX(A){return this.translateOnAxis(EC,A)}translateY(A){return this.translateOnAxis(WE,A)}translateZ(A){return this.translateOnAxis(iC,A)}localToWorld(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(this.matrixWorld)}worldToLocal(A){return this.updateWorldMatrix(!0,!1),A.applyMatrix4(wC.copy(this.matrixWorld).invert())}lookAt(A,g,I){A.isVector3?cQ.copy(A):cQ.set(A,g,I);const B=this.parent;this.updateWorldMatrix(!0,!1),kQ.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wC.lookAt(kQ,cQ,this.up):wC.lookAt(cQ,kQ,this.up),this.quaternion.setFromRotationMatrix(wC),B&&(wC.extractRotation(B.matrixWorld),AQ.setFromRotationMatrix(wC),this.quaternion.premultiply(AQ.invert()))}add(A){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return A===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",A),this):(A&&A.isObject3D?(A.parent!==null&&A.parent.remove(A),A.parent=this,this.children.push(A),A.dispatchEvent(qt)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",A),this)}remove(A){if(arguments.length>1){for(let I=0;I<arguments.length;I++)this.remove(arguments[I]);return this}const g=this.children.indexOf(A);return g!==-1&&(A.parent=null,this.children.splice(g,1),A.dispatchEvent(xB)),this}removeFromParent(){const A=this.parent;return A!==null&&A.remove(this),this}clear(){for(let A=0;A<this.children.length;A++){const g=this.children[A];g.parent=null,g.dispatchEvent(xB)}return this.children.length=0,this}attach(A){return this.updateWorldMatrix(!0,!1),wC.copy(this.matrixWorld).invert(),A.parent!==null&&(A.parent.updateWorldMatrix(!0,!1),wC.multiply(A.parent.matrixWorld)),A.applyMatrix4(wC),this.add(A),A.updateWorldMatrix(!1,!0),this}getObjectById(A){return this.getObjectByProperty("id",A)}getObjectByName(A){return this.getObjectByProperty("name",A)}getObjectByProperty(A,g){if(this[A]===g)return this;for(let I=0,B=this.children.length;I<B;I++){const Q=this.children[I].getObjectByProperty(A,g);if(Q!==void 0)return Q}}getObjectsByProperty(A,g){let I=[];this[A]===g&&I.push(this);for(let B=0,Q=this.children.length;B<Q;B++){const E=this.children[B].getObjectsByProperty(A,g);E.length>0&&(I=I.concat(E))}return I}getWorldPosition(A){return this.updateWorldMatrix(!0,!1),A.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kQ,A,Ht),A}getWorldScale(A){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(kQ,bt,A),A}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(A){A(this);const g=this.children;for(let I=0,B=g.length;I<B;I++)g[I].traverse(A)}traverseVisible(A){if(this.visible===!1)return;A(this);const g=this.children;for(let I=0,B=g.length;I<B;I++)g[I].traverseVisible(A)}traverseAncestors(A){const g=this.parent;g!==null&&(A(g),g.traverseAncestors(A))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(A){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||A)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,A=!0);const g=this.children;for(let I=0,B=g.length;I<B;I++){const Q=g[I];Q.matrixWorldAutoUpdate!==!0&&A!==!0||Q.updateMatrixWorld(A)}}updateWorldMatrix(A,g){const I=this.parent;if(A===!0&&I!==null&&I.matrixWorldAutoUpdate===!0&&I.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const B=this.children;for(let Q=0,E=B.length;Q<E;Q++){const i=B[Q];i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!1,!0)}}}toJSON(A){const g=A===void 0||typeof A=="string",I={};g&&(A={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},I.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const B={};function Q(i,t){return i[t.uuid]===void 0&&(i[t.uuid]=t.toJSON(A)),t.uuid}if(B.uuid=this.uuid,B.type=this.type,this.name!==""&&(B.name=this.name),this.castShadow===!0&&(B.castShadow=!0),this.receiveShadow===!0&&(B.receiveShadow=!0),this.visible===!1&&(B.visible=!1),this.frustumCulled===!1&&(B.frustumCulled=!1),this.renderOrder!==0&&(B.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(B.userData=this.userData),B.layers=this.layers.mask,B.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(B.matrixAutoUpdate=!1),this.isInstancedMesh&&(B.type="InstancedMesh",B.count=this.count,B.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(B.instanceColor=this.instanceColor.toJSON())),this.isScene)this.background&&(this.background.isColor?B.background=this.background.toJSON():this.background.isTexture&&(B.background=this.background.toJSON(A).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(B.environment=this.environment.toJSON(A).uuid);else if(this.isMesh||this.isLine||this.isPoints){B.geometry=Q(A.geometries,this.geometry);const i=this.geometry.parameters;if(i!==void 0&&i.shapes!==void 0){const t=i.shapes;if(Array.isArray(t))for(let e=0,s=t.length;e<s;e++){const n=t[e];Q(A.shapes,n)}else Q(A.shapes,t)}}if(this.isSkinnedMesh&&(B.bindMode=this.bindMode,B.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(Q(A.skeletons,this.skeleton),B.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const i=[];for(let t=0,e=this.material.length;t<e;t++)i.push(Q(A.materials,this.material[t]));B.material=i}else B.material=Q(A.materials,this.material);if(this.children.length>0){B.children=[];for(let i=0;i<this.children.length;i++)B.children.push(this.children[i].toJSON(A).object)}if(this.animations.length>0){B.animations=[];for(let i=0;i<this.animations.length;i++){const t=this.animations[i];B.animations.push(Q(A.animations,t))}}if(g){const i=E(A.geometries),t=E(A.materials),e=E(A.textures),s=E(A.images),n=E(A.shapes),r=E(A.skeletons),h=E(A.animations),w=E(A.nodes);i.length>0&&(I.geometries=i),t.length>0&&(I.materials=t),e.length>0&&(I.textures=e),s.length>0&&(I.images=s),n.length>0&&(I.shapes=n),r.length>0&&(I.skeletons=r),h.length>0&&(I.animations=h),w.length>0&&(I.nodes=w)}return I.object=B,I;function E(i){const t=[];for(const e in i){const s=i[e];delete s.metadata,t.push(s)}return t}}clone(A){return new this.constructor().copy(this,A)}copy(A,g=!0){if(this.name=A.name,this.up.copy(A.up),this.position.copy(A.position),this.rotation.order=A.rotation.order,this.quaternion.copy(A.quaternion),this.scale.copy(A.scale),this.matrix.copy(A.matrix),this.matrixWorld.copy(A.matrixWorld),this.matrixAutoUpdate=A.matrixAutoUpdate,this.matrixWorldNeedsUpdate=A.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=A.matrixWorldAutoUpdate,this.layers.mask=A.layers.mask,this.visible=A.visible,this.castShadow=A.castShadow,this.receiveShadow=A.receiveShadow,this.frustumCulled=A.frustumCulled,this.renderOrder=A.renderOrder,this.userData=JSON.parse(JSON.stringify(A.userData)),g===!0)for(let I=0;I<A.children.length;I++){const B=A.children[I];this.add(B.clone())}return this}}II.DEFAULT_UP=new x(0,1,0),II.DEFAULT_MATRIX_AUTO_UPDATE=!0,II.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vB=new x,WB=new x,UQ=new x,PB=new x,HC=new x,sB=new x,TE=new x,DQ=new x,LQ=new x,ZE=new x;class TB{constructor(A=new x,g=new x,I=new x){this.a=A,this.b=g,this.c=I}static getNormal(A,g,I,B){B.subVectors(I,g),vB.subVectors(A,g),B.cross(vB);const Q=B.lengthSq();return Q>0?B.multiplyScalar(1/Math.sqrt(Q)):B.set(0,0,0)}static getBarycoord(A,g,I,B,Q){vB.subVectors(B,g),WB.subVectors(I,g),UQ.subVectors(A,g);const E=vB.dot(vB),i=vB.dot(WB),t=vB.dot(UQ),e=WB.dot(WB),s=WB.dot(UQ),n=E*e-i*i;if(n===0)return Q.set(-2,-1,-1);const r=1/n,h=(e*t-i*s)*r,w=(E*s-i*t)*r;return Q.set(1-h-w,w,h)}static containsPoint(A,g,I,B){return this.getBarycoord(A,g,I,B,PB),PB.x>=0&&PB.y>=0&&PB.x+PB.y<=1}static getUV(A,g,I,B,Q,E,i,t){return this.getBarycoord(A,g,I,B,PB),t.set(0,0),t.addScaledVector(Q,PB.x),t.addScaledVector(E,PB.y),t.addScaledVector(i,PB.z),t}static isFrontFacing(A,g,I,B){return vB.subVectors(I,g),WB.subVectors(A,g),vB.cross(WB).dot(B)<0}set(A,g,I){return this.a.copy(A),this.b.copy(g),this.c.copy(I),this}setFromPointsAndIndices(A,g,I,B){return this.a.copy(A[g]),this.b.copy(A[I]),this.c.copy(A[B]),this}setFromAttributeAndIndices(A,g,I,B){return this.a.fromBufferAttribute(A,g),this.b.fromBufferAttribute(A,I),this.c.fromBufferAttribute(A,B),this}clone(){return new this.constructor().copy(this)}copy(A){return this.a.copy(A.a),this.b.copy(A.b),this.c.copy(A.c),this}getArea(){return vB.subVectors(this.c,this.b),WB.subVectors(this.a,this.b),.5*vB.cross(WB).length()}getMidpoint(A){return A.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(A){return TB.getNormal(this.a,this.b,this.c,A)}getPlane(A){return A.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(A,g){return TB.getBarycoord(A,this.a,this.b,this.c,g)}getUV(A,g,I,B,Q){return TB.getUV(A,this.a,this.b,this.c,g,I,B,Q)}containsPoint(A){return TB.containsPoint(A,this.a,this.b,this.c)}isFrontFacing(A){return TB.isFrontFacing(this.a,this.b,this.c,A)}intersectsBox(A){return A.intersectsTriangle(this)}closestPointToPoint(A,g){const I=this.a,B=this.b,Q=this.c;let E,i;HC.subVectors(B,I),sB.subVectors(Q,I),DQ.subVectors(A,I);const t=HC.dot(DQ),e=sB.dot(DQ);if(t<=0&&e<=0)return g.copy(I);LQ.subVectors(A,B);const s=HC.dot(LQ),n=sB.dot(LQ);if(s>=0&&n<=s)return g.copy(B);const r=t*n-s*e;if(r<=0&&t>=0&&s<=0)return E=t/(t-s),g.copy(I).addScaledVector(HC,E);ZE.subVectors(A,Q);const h=HC.dot(ZE),w=sB.dot(ZE);if(w>=0&&h<=w)return g.copy(Q);const D=h*e-t*w;if(D<=0&&e>=0&&w<=0)return i=e/(e-w),g.copy(I).addScaledVector(sB,i);const u=s*w-h*n;if(u<=0&&n-s>=0&&h-w>=0)return TE.subVectors(Q,B),i=(n-s)/(n-s+(h-w)),g.copy(B).addScaledVector(TE,i);const R=1/(u+D+r);return E=D*R,i=r*R,g.copy(I).addScaledVector(HC,E).addScaledVector(sB,i)}equals(A){return A.a.equals(this.a)&&A.b.equals(this.b)&&A.c.equals(this.c)}}let Yi=0;class rB extends hg{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yi++}),this.uuid=uI(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(A){this._alphaTest>0!=A>0&&this.version++,this._alphaTest=A}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(A){if(A!==void 0)for(const g in A){const I=A[g];if(I===void 0){console.warn("THREE.Material: '"+g+"' parameter is undefined.");continue}const B=this[g];B!==void 0?B&&B.isColor?B.set(I):B&&B.isVector3&&I&&I.isVector3?B.copy(I):this[g]=I:console.warn("THREE."+this.type+": '"+g+"' is not a property of this material.")}}toJSON(A){const g=A===void 0||typeof A=="string";g&&(A={textures:{},images:{}});const I={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};function B(Q){const E=[];for(const i in Q){const t=Q[i];delete t.metadata,E.push(t)}return E}if(I.uuid=this.uuid,I.type=this.type,this.name!==""&&(I.name=this.name),this.color&&this.color.isColor&&(I.color=this.color.getHex()),this.roughness!==void 0&&(I.roughness=this.roughness),this.metalness!==void 0&&(I.metalness=this.metalness),this.sheen!==void 0&&(I.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(I.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(I.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(I.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(I.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(I.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(I.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(I.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(I.shininess=this.shininess),this.clearcoat!==void 0&&(I.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(I.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(I.clearcoatMap=this.clearcoatMap.toJSON(A).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(I.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(A).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(I.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(A).uuid,I.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(I.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(I.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(I.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(I.iridescenceMap=this.iridescenceMap.toJSON(A).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(I.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(A).uuid),this.map&&this.map.isTexture&&(I.map=this.map.toJSON(A).uuid),this.matcap&&this.matcap.isTexture&&(I.matcap=this.matcap.toJSON(A).uuid),this.alphaMap&&this.alphaMap.isTexture&&(I.alphaMap=this.alphaMap.toJSON(A).uuid),this.lightMap&&this.lightMap.isTexture&&(I.lightMap=this.lightMap.toJSON(A).uuid,I.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(I.aoMap=this.aoMap.toJSON(A).uuid,I.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(I.bumpMap=this.bumpMap.toJSON(A).uuid,I.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(I.normalMap=this.normalMap.toJSON(A).uuid,I.normalMapType=this.normalMapType,I.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(I.displacementMap=this.displacementMap.toJSON(A).uuid,I.displacementScale=this.displacementScale,I.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(I.roughnessMap=this.roughnessMap.toJSON(A).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(I.metalnessMap=this.metalnessMap.toJSON(A).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(I.emissiveMap=this.emissiveMap.toJSON(A).uuid),this.specularMap&&this.specularMap.isTexture&&(I.specularMap=this.specularMap.toJSON(A).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(I.specularIntensityMap=this.specularIntensityMap.toJSON(A).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(I.specularColorMap=this.specularColorMap.toJSON(A).uuid),this.envMap&&this.envMap.isTexture&&(I.envMap=this.envMap.toJSON(A).uuid,this.combine!==void 0&&(I.combine=this.combine)),this.envMapIntensity!==void 0&&(I.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(I.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(I.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(I.gradientMap=this.gradientMap.toJSON(A).uuid),this.transmission!==void 0&&(I.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(I.transmissionMap=this.transmissionMap.toJSON(A).uuid),this.thickness!==void 0&&(I.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(I.thicknessMap=this.thicknessMap.toJSON(A).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(I.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(I.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(I.size=this.size),this.shadowSide!==null&&(I.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(I.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(I.blending=this.blending),this.side!==0&&(I.side=this.side),this.vertexColors&&(I.vertexColors=!0),this.opacity<1&&(I.opacity=this.opacity),this.transparent===!0&&(I.transparent=this.transparent),I.depthFunc=this.depthFunc,I.depthTest=this.depthTest,I.depthWrite=this.depthWrite,I.colorWrite=this.colorWrite,I.stencilWrite=this.stencilWrite,I.stencilWriteMask=this.stencilWriteMask,I.stencilFunc=this.stencilFunc,I.stencilRef=this.stencilRef,I.stencilFuncMask=this.stencilFuncMask,I.stencilFail=this.stencilFail,I.stencilZFail=this.stencilZFail,I.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(I.rotation=this.rotation),this.polygonOffset===!0&&(I.polygonOffset=!0),this.polygonOffsetFactor!==0&&(I.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(I.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(I.linewidth=this.linewidth),this.dashSize!==void 0&&(I.dashSize=this.dashSize),this.gapSize!==void 0&&(I.gapSize=this.gapSize),this.scale!==void 0&&(I.scale=this.scale),this.dithering===!0&&(I.dithering=!0),this.alphaTest>0&&(I.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(I.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(I.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(I.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(I.wireframe=this.wireframe),this.wireframeLinewidth>1&&(I.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(I.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(I.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(I.flatShading=this.flatShading),this.visible===!1&&(I.visible=!1),this.toneMapped===!1&&(I.toneMapped=!1),this.fog===!1&&(I.fog=!1),Object.keys(this.userData).length>0&&(I.userData=this.userData),g){const Q=B(A.textures),E=B(A.images);Q.length>0&&(I.textures=Q),E.length>0&&(I.images=E)}return I}clone(){return new this.constructor().copy(this)}copy(A){this.name=A.name,this.blending=A.blending,this.side=A.side,this.vertexColors=A.vertexColors,this.opacity=A.opacity,this.transparent=A.transparent,this.blendSrc=A.blendSrc,this.blendDst=A.blendDst,this.blendEquation=A.blendEquation,this.blendSrcAlpha=A.blendSrcAlpha,this.blendDstAlpha=A.blendDstAlpha,this.blendEquationAlpha=A.blendEquationAlpha,this.depthFunc=A.depthFunc,this.depthTest=A.depthTest,this.depthWrite=A.depthWrite,this.stencilWriteMask=A.stencilWriteMask,this.stencilFunc=A.stencilFunc,this.stencilRef=A.stencilRef,this.stencilFuncMask=A.stencilFuncMask,this.stencilFail=A.stencilFail,this.stencilZFail=A.stencilZFail,this.stencilZPass=A.stencilZPass,this.stencilWrite=A.stencilWrite;const g=A.clippingPlanes;let I=null;if(g!==null){const B=g.length;I=new Array(B);for(let Q=0;Q!==B;++Q)I[Q]=g[Q].clone()}return this.clippingPlanes=I,this.clipIntersection=A.clipIntersection,this.clipShadows=A.clipShadows,this.shadowSide=A.shadowSide,this.colorWrite=A.colorWrite,this.precision=A.precision,this.polygonOffset=A.polygonOffset,this.polygonOffsetFactor=A.polygonOffsetFactor,this.polygonOffsetUnits=A.polygonOffsetUnits,this.dithering=A.dithering,this.alphaTest=A.alphaTest,this.alphaToCoverage=A.alphaToCoverage,this.premultipliedAlpha=A.premultipliedAlpha,this.forceSinglePass=A.forceSinglePass,this.visible=A.visible,this.toneMapped=A.toneMapped,this.userData=JSON.parse(JSON.stringify(A.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(A){A===!0&&this.version++}}const Hi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},XB={h:0,s:0,l:0},tE={h:0,s:0,l:0};function OE(C,A,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?C+6*(A-C)*g:g<.5?A:g<2/3?C+6*(A-C)*(2/3-g):C}class sg{constructor(A,g,I){return this.isColor=!0,this.r=1,this.g=1,this.b=1,g===void 0&&I===void 0?this.set(A):this.setRGB(A,g,I)}set(A){return A&&A.isColor?this.copy(A):typeof A=="number"?this.setHex(A):typeof A=="string"&&this.setStyle(A),this}setScalar(A){return this.r=A,this.g=A,this.b=A,this}setHex(A,g=q){return A=Math.floor(A),this.r=(A>>16&255)/255,this.g=(A>>8&255)/255,this.b=(255&A)/255,lI.toWorkingColorSpace(this,g),this}setRGB(A,g,I,B=lI.workingColorSpace){return this.r=A,this.g=g,this.b=I,lI.toWorkingColorSpace(this,B),this}setHSL(A,g,I,B=lI.workingColorSpace){if(A=PI(A,1),g=DI(g,0,1),I=DI(I,0,1),g===0)this.r=this.g=this.b=I;else{const Q=I<=.5?I*(1+g):I+g-I*g,E=2*I-Q;this.r=OE(E,Q,A+1/3),this.g=OE(E,Q,A),this.b=OE(E,Q,A-1/3)}return lI.toWorkingColorSpace(this,B),this}setStyle(A,g=q){function I(Q){Q!==void 0&&parseFloat(Q)<1&&console.warn("THREE.Color: Alpha component of "+A+" will be ignored.")}let B;if(B=/^(\w+)\(([^\)]*)\)/.exec(A)){let Q;const E=B[1],i=B[2];switch(E){case"rgb":case"rgba":if(Q=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(255,parseInt(Q[1],10))/255,this.g=Math.min(255,parseInt(Q[2],10))/255,this.b=Math.min(255,parseInt(Q[3],10))/255,lI.toWorkingColorSpace(this,g),I(Q[4]),this;if(Q=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i))return this.r=Math.min(100,parseInt(Q[1],10))/100,this.g=Math.min(100,parseInt(Q[2],10))/100,this.b=Math.min(100,parseInt(Q[3],10))/100,lI.toWorkingColorSpace(this,g),I(Q[4]),this;break;case"hsl":case"hsla":if(Q=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(i)){const t=parseFloat(Q[1])/360,e=parseFloat(Q[2])/100,s=parseFloat(Q[3])/100;return I(Q[4]),this.setHSL(t,e,s,g)}break;default:console.warn("THREE.Color: Unknown color model "+A)}}else if(B=/^\#([A-Fa-f\d]+)$/.exec(A)){const Q=B[1],E=Q.length;if(E===3)return this.r=parseInt(Q.charAt(0)+Q.charAt(0),16)/255,this.g=parseInt(Q.charAt(1)+Q.charAt(1),16)/255,this.b=parseInt(Q.charAt(2)+Q.charAt(2),16)/255,lI.toWorkingColorSpace(this,g),this;if(E===6)return this.r=parseInt(Q.charAt(0)+Q.charAt(1),16)/255,this.g=parseInt(Q.charAt(2)+Q.charAt(3),16)/255,this.b=parseInt(Q.charAt(4)+Q.charAt(5),16)/255,lI.toWorkingColorSpace(this,g),this;console.warn("THREE.Color: Invalid hex color "+A)}else if(A&&A.length>0)return this.setColorName(A,g);return this}setColorName(A,g=q){const I=Hi[A.toLowerCase()];return I!==void 0?this.setHex(I,g):console.warn("THREE.Color: Unknown color "+A),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(A){return this.r=A.r,this.g=A.g,this.b=A.b,this}copySRGBToLinear(A){return this.r=PC(A.r),this.g=PC(A.g),this.b=PC(A.b),this}copyLinearToSRGB(A){return this.r=QE(A.r),this.g=QE(A.g),this.b=QE(A.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(A=q){return lI.fromWorkingColorSpace(BB.copy(this),A),DI(255*BB.r,0,255)<<16^DI(255*BB.g,0,255)<<8^DI(255*BB.b,0,255)<<0}getHexString(A=q){return("000000"+this.getHex(A).toString(16)).slice(-6)}getHSL(A,g=lI.workingColorSpace){lI.fromWorkingColorSpace(BB.copy(this),g);const I=BB.r,B=BB.g,Q=BB.b,E=Math.max(I,B,Q),i=Math.min(I,B,Q);let t,e;const s=(i+E)/2;if(i===E)t=0,e=0;else{const n=E-i;switch(e=s<=.5?n/(E+i):n/(2-E-i),E){case I:t=(B-Q)/n+(B<Q?6:0);break;case B:t=(Q-I)/n+2;break;case Q:t=(I-B)/n+4}t/=6}return A.h=t,A.s=e,A.l=s,A}getRGB(A,g=lI.workingColorSpace){return lI.fromWorkingColorSpace(BB.copy(this),g),A.r=BB.r,A.g=BB.g,A.b=BB.b,A}getStyle(A=q){lI.fromWorkingColorSpace(BB.copy(this),A);const g=BB.r,I=BB.g,B=BB.b;return A!==q?`color(${A} ${g.toFixed(3)} ${I.toFixed(3)} ${B.toFixed(3)})`:`rgb(${255*g|0},${255*I|0},${255*B|0})`}offsetHSL(A,g,I){return this.getHSL(XB),XB.h+=A,XB.s+=g,XB.l+=I,this.setHSL(XB.h,XB.s,XB.l),this}add(A){return this.r+=A.r,this.g+=A.g,this.b+=A.b,this}addColors(A,g){return this.r=A.r+g.r,this.g=A.g+g.g,this.b=A.b+g.b,this}addScalar(A){return this.r+=A,this.g+=A,this.b+=A,this}sub(A){return this.r=Math.max(0,this.r-A.r),this.g=Math.max(0,this.g-A.g),this.b=Math.max(0,this.b-A.b),this}multiply(A){return this.r*=A.r,this.g*=A.g,this.b*=A.b,this}multiplyScalar(A){return this.r*=A,this.g*=A,this.b*=A,this}lerp(A,g){return this.r+=(A.r-this.r)*g,this.g+=(A.g-this.g)*g,this.b+=(A.b-this.b)*g,this}lerpColors(A,g,I){return this.r=A.r+(g.r-A.r)*I,this.g=A.g+(g.g-A.g)*I,this.b=A.b+(g.b-A.b)*I,this}lerpHSL(A,g){this.getHSL(XB),A.getHSL(tE);const I=OB(XB.h,tE.h,g),B=OB(XB.s,tE.s,g),Q=OB(XB.l,tE.l,g);return this.setHSL(I,B,Q),this}equals(A){return A.r===this.r&&A.g===this.g&&A.b===this.b}fromArray(A,g=0){return this.r=A[g],this.g=A[g+1],this.b=A[g+2],this}toArray(A=[],g=0){return A[g]=this.r,A[g+1]=this.g,A[g+2]=this.b,A}fromBufferAttribute(A,g){return this.r=A.getX(g),this.g=A.getY(g),this.b=A.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const BB=new sg;sg.NAMES=Hi;class tC extends rB{constructor(A){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new sg(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(A)}copy(A){return super.copy(A),this.color.copy(A.color),this.map=A.map,this.lightMap=A.lightMap,this.lightMapIntensity=A.lightMapIntensity,this.aoMap=A.aoMap,this.aoMapIntensity=A.aoMapIntensity,this.specularMap=A.specularMap,this.alphaMap=A.alphaMap,this.envMap=A.envMap,this.combine=A.combine,this.reflectivity=A.reflectivity,this.refractionRatio=A.refractionRatio,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.wireframeLinecap=A.wireframeLinecap,this.wireframeLinejoin=A.wireframeLinejoin,this.fog=A.fog,this}}const TI=new x,lQ=new HA;class iI{constructor(A,g,I=!1){if(Array.isArray(A))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=A,this.itemSize=g,this.count=A!==void 0?A.length/g:0,this.normalized=I,this.usage=35044,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(A){A===!0&&this.version++}setUsage(A){return this.usage=A,this}copy(A){return this.name=A.name,this.array=new A.array.constructor(A.array),this.itemSize=A.itemSize,this.count=A.count,this.normalized=A.normalized,this.usage=A.usage,this}copyAt(A,g,I){A*=this.itemSize,I*=g.itemSize;for(let B=0,Q=this.itemSize;B<Q;B++)this.array[A+B]=g.array[I+B];return this}copyArray(A){return this.array.set(A),this}applyMatrix3(A){if(this.itemSize===2)for(let g=0,I=this.count;g<I;g++)lQ.fromBufferAttribute(this,g),lQ.applyMatrix3(A),this.setXY(g,lQ.x,lQ.y);else if(this.itemSize===3)for(let g=0,I=this.count;g<I;g++)TI.fromBufferAttribute(this,g),TI.applyMatrix3(A),this.setXYZ(g,TI.x,TI.y,TI.z);return this}applyMatrix4(A){for(let g=0,I=this.count;g<I;g++)TI.fromBufferAttribute(this,g),TI.applyMatrix4(A),this.setXYZ(g,TI.x,TI.y,TI.z);return this}applyNormalMatrix(A){for(let g=0,I=this.count;g<I;g++)TI.fromBufferAttribute(this,g),TI.applyNormalMatrix(A),this.setXYZ(g,TI.x,TI.y,TI.z);return this}transformDirection(A){for(let g=0,I=this.count;g<I;g++)TI.fromBufferAttribute(this,g),TI.transformDirection(A),this.setXYZ(g,TI.x,TI.y,TI.z);return this}set(A,g=0){return this.array.set(A,g),this}getX(A){let g=this.array[A*this.itemSize];return this.normalized&&(g=wB(g,this.array)),g}setX(A,g){return this.normalized&&(g=$A(g,this.array)),this.array[A*this.itemSize]=g,this}getY(A){let g=this.array[A*this.itemSize+1];return this.normalized&&(g=wB(g,this.array)),g}setY(A,g){return this.normalized&&(g=$A(g,this.array)),this.array[A*this.itemSize+1]=g,this}getZ(A){let g=this.array[A*this.itemSize+2];return this.normalized&&(g=wB(g,this.array)),g}setZ(A,g){return this.normalized&&(g=$A(g,this.array)),this.array[A*this.itemSize+2]=g,this}getW(A){let g=this.array[A*this.itemSize+3];return this.normalized&&(g=wB(g,this.array)),g}setW(A,g){return this.normalized&&(g=$A(g,this.array)),this.array[A*this.itemSize+3]=g,this}setXY(A,g,I){return A*=this.itemSize,this.normalized&&(g=$A(g,this.array),I=$A(I,this.array)),this.array[A+0]=g,this.array[A+1]=I,this}setXYZ(A,g,I,B){return A*=this.itemSize,this.normalized&&(g=$A(g,this.array),I=$A(I,this.array),B=$A(B,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=B,this}setXYZW(A,g,I,B,Q){return A*=this.itemSize,this.normalized&&(g=$A(g,this.array),I=$A(I,this.array),B=$A(B,this.array),Q=$A(Q,this.array)),this.array[A+0]=g,this.array[A+1]=I,this.array[A+2]=B,this.array[A+3]=Q,this}onUpload(A){return this.onUploadCallback=A,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const A={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(A.name=this.name),this.usage!==35044&&(A.usage=this.usage),this.updateRange.offset===0&&this.updateRange.count===-1||(A.updateRange=this.updateRange),A}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wQ extends iI{constructor(A,g,I){super(new Uint16Array(A),g,I)}}class eE extends iI{constructor(A,g,I){super(new Uint32Array(A),g,I)}}class Dg extends iI{constructor(A,g,I){super(new Float32Array(A),g,I)}}let bi=0;const mB=new Ng,VE=new II,_B=new x,nB=new jC,JQ=new jC,KI=new x;class fg extends hg{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bi++}),this.uuid=uI(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(A){return Array.isArray(A)?this.index=new(VC(A)?eE:wQ)(A,1):this.index=A,this}getAttribute(A){return this.attributes[A]}setAttribute(A,g){return this.attributes[A]=g,this}deleteAttribute(A){return delete this.attributes[A],this}hasAttribute(A){return this.attributes[A]!==void 0}addGroup(A,g,I=0){this.groups.push({start:A,count:g,materialIndex:I})}clearGroups(){this.groups=[]}setDrawRange(A,g){this.drawRange.start=A,this.drawRange.count=g}applyMatrix4(A){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(A),g.needsUpdate=!0);const I=this.attributes.normal;if(I!==void 0){const Q=new _I().getNormalMatrix(A);I.applyNormalMatrix(Q),I.needsUpdate=!0}const B=this.attributes.tangent;return B!==void 0&&(B.transformDirection(A),B.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(A){return mB.makeRotationFromQuaternion(A),this.applyMatrix4(mB),this}rotateX(A){return mB.makeRotationX(A),this.applyMatrix4(mB),this}rotateY(A){return mB.makeRotationY(A),this.applyMatrix4(mB),this}rotateZ(A){return mB.makeRotationZ(A),this.applyMatrix4(mB),this}translate(A,g,I){return mB.makeTranslation(A,g,I),this.applyMatrix4(mB),this}scale(A,g,I){return mB.makeScale(A,g,I),this.applyMatrix4(mB),this}lookAt(A){return VE.lookAt(A),VE.updateMatrix(),this.applyMatrix4(VE.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_B).negate(),this.translate(_B.x,_B.y,_B.z),this}setFromPoints(A){const g=[];for(let I=0,B=A.length;I<B;I++){const Q=A[I];g.push(Q.x,Q.y,Q.z||0)}return this.setAttribute("position",new Dg(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new jC);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingBox.set(new x(-1/0,-1/0,-1/0),new x(1/0,1/0,1/0));if(A!==void 0){if(this.boundingBox.setFromBufferAttribute(A),g)for(let I=0,B=g.length;I<B;I++){const Q=g[I];nB.setFromBufferAttribute(Q),this.morphTargetsRelative?(KI.addVectors(this.boundingBox.min,nB.min),this.boundingBox.expandByPoint(KI),KI.addVectors(this.boundingBox.max,nB.max),this.boundingBox.expandByPoint(KI)):(this.boundingBox.expandByPoint(nB.min),this.boundingBox.expandByPoint(nB.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kC);const A=this.attributes.position,g=this.morphAttributes.position;if(A&&A.isGLBufferAttribute)return console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),void this.boundingSphere.set(new x,1/0);if(A){const I=this.boundingSphere.center;if(nB.setFromBufferAttribute(A),g)for(let Q=0,E=g.length;Q<E;Q++){const i=g[Q];JQ.setFromBufferAttribute(i),this.morphTargetsRelative?(KI.addVectors(nB.min,JQ.min),nB.expandByPoint(KI),KI.addVectors(nB.max,JQ.max),nB.expandByPoint(KI)):(nB.expandByPoint(JQ.min),nB.expandByPoint(JQ.max))}nB.getCenter(I);let B=0;for(let Q=0,E=A.count;Q<E;Q++)KI.fromBufferAttribute(A,Q),B=Math.max(B,I.distanceToSquared(KI));if(g)for(let Q=0,E=g.length;Q<E;Q++){const i=g[Q],t=this.morphTargetsRelative;for(let e=0,s=i.count;e<s;e++)KI.fromBufferAttribute(i,e),t&&(_B.fromBufferAttribute(A,e),KI.add(_B)),B=Math.max(B,I.distanceToSquared(KI))}this.boundingSphere.radius=Math.sqrt(B),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const A=this.index,g=this.attributes;if(A===null||g.position===void 0||g.normal===void 0||g.uv===void 0)return void console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");const I=A.array,B=g.position.array,Q=g.normal.array,E=g.uv.array,i=B.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new iI(new Float32Array(4*i),4));const t=this.getAttribute("tangent").array,e=[],s=[];for(let cA=0;cA<i;cA++)e[cA]=new x,s[cA]=new x;const n=new x,r=new x,h=new x,w=new HA,D=new HA,u=new HA,R=new x,y=new x;function F(cA,gA,RA){n.fromArray(B,3*cA),r.fromArray(B,3*gA),h.fromArray(B,3*RA),w.fromArray(E,2*cA),D.fromArray(E,2*gA),u.fromArray(E,2*RA),r.sub(n),h.sub(n),D.sub(w),u.sub(w);const xA=1/(D.x*u.y-u.x*D.y);isFinite(xA)&&(R.copy(r).multiplyScalar(u.y).addScaledVector(h,-D.y).multiplyScalar(xA),y.copy(h).multiplyScalar(D.x).addScaledVector(r,-u.x).multiplyScalar(xA),e[cA].add(R),e[gA].add(R),e[RA].add(R),s[cA].add(y),s[gA].add(y),s[RA].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:I.length}]);for(let cA=0,gA=N.length;cA<gA;++cA){const RA=N[cA],xA=RA.start;for(let UA=xA,zA=xA+RA.count;UA<zA;UA+=3)F(I[UA+0],I[UA+1],I[UA+2])}const J=new x,T=new x,$=new x,IA=new x;function nA(cA){$.fromArray(Q,3*cA),IA.copy($);const gA=e[cA];J.copy(gA),J.sub($.multiplyScalar($.dot(gA))).normalize(),T.crossVectors(IA,gA);const RA=T.dot(s[cA])<0?-1:1;t[4*cA]=J.x,t[4*cA+1]=J.y,t[4*cA+2]=J.z,t[4*cA+3]=RA}for(let cA=0,gA=N.length;cA<gA;++cA){const RA=N[cA],xA=RA.start;for(let UA=xA,zA=xA+RA.count;UA<zA;UA+=3)nA(I[UA+0]),nA(I[UA+1]),nA(I[UA+2])}}computeVertexNormals(){const A=this.index,g=this.getAttribute("position");if(g!==void 0){let I=this.getAttribute("normal");if(I===void 0)I=new iI(new Float32Array(3*g.count),3),this.setAttribute("normal",I);else for(let r=0,h=I.count;r<h;r++)I.setXYZ(r,0,0,0);const B=new x,Q=new x,E=new x,i=new x,t=new x,e=new x,s=new x,n=new x;if(A)for(let r=0,h=A.count;r<h;r+=3){const w=A.getX(r+0),D=A.getX(r+1),u=A.getX(r+2);B.fromBufferAttribute(g,w),Q.fromBufferAttribute(g,D),E.fromBufferAttribute(g,u),s.subVectors(E,Q),n.subVectors(B,Q),s.cross(n),i.fromBufferAttribute(I,w),t.fromBufferAttribute(I,D),e.fromBufferAttribute(I,u),i.add(s),t.add(s),e.add(s),I.setXYZ(w,i.x,i.y,i.z),I.setXYZ(D,t.x,t.y,t.z),I.setXYZ(u,e.x,e.y,e.z)}else for(let r=0,h=g.count;r<h;r+=3)B.fromBufferAttribute(g,r+0),Q.fromBufferAttribute(g,r+1),E.fromBufferAttribute(g,r+2),s.subVectors(E,Q),n.subVectors(B,Q),s.cross(n),I.setXYZ(r+0,s.x,s.y,s.z),I.setXYZ(r+1,s.x,s.y,s.z),I.setXYZ(r+2,s.x,s.y,s.z);this.normalizeNormals(),I.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const A=this.attributes.normal;for(let g=0,I=A.count;g<I;g++)KI.fromBufferAttribute(A,g),KI.normalize(),A.setXYZ(g,KI.x,KI.y,KI.z)}toNonIndexed(){function A(i,t){const e=i.array,s=i.itemSize,n=i.normalized,r=new e.constructor(t.length*s);let h=0,w=0;for(let D=0,u=t.length;D<u;D++){h=i.isInterleavedBufferAttribute?t[D]*i.data.stride+i.offset:t[D]*s;for(let R=0;R<s;R++)r[w++]=e[h++]}return new iI(r,s,n)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new fg,I=this.index.array,B=this.attributes;for(const i in B){const t=A(B[i],I);g.setAttribute(i,t)}const Q=this.morphAttributes;for(const i in Q){const t=[],e=Q[i];for(let s=0,n=e.length;s<n;s++){const r=A(e[s],I);t.push(r)}g.morphAttributes[i]=t}g.morphTargetsRelative=this.morphTargetsRelative;const E=this.groups;for(let i=0,t=E.length;i<t;i++){const e=E[i];g.addGroup(e.start,e.count,e.materialIndex)}return g}toJSON(){const A={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),Object.keys(this.userData).length>0&&(A.userData=this.userData),this.parameters!==void 0){const t=this.parameters;for(const e in t)t[e]!==void 0&&(A[e]=t[e]);return A}A.data={attributes:{}};const g=this.index;g!==null&&(A.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const I=this.attributes;for(const t in I){const e=I[t];A.data.attributes[t]=e.toJSON(A.data)}const B={};let Q=!1;for(const t in this.morphAttributes){const e=this.morphAttributes[t],s=[];for(let n=0,r=e.length;n<r;n++){const h=e[n];s.push(h.toJSON(A.data))}s.length>0&&(B[t]=s,Q=!0)}Q&&(A.data.morphAttributes=B,A.data.morphTargetsRelative=this.morphTargetsRelative);const E=this.groups;E.length>0&&(A.data.groups=JSON.parse(JSON.stringify(E)));const i=this.boundingSphere;return i!==null&&(A.data.boundingSphere={center:i.center.toArray(),radius:i.radius}),A}clone(){return new this.constructor().copy(this)}copy(A){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=A.name;const I=A.index;I!==null&&this.setIndex(I.clone(g));const B=A.attributes;for(const e in B){const s=B[e];this.setAttribute(e,s.clone(g))}const Q=A.morphAttributes;for(const e in Q){const s=[],n=Q[e];for(let r=0,h=n.length;r<h;r++)s.push(n[r].clone(g));this.morphAttributes[e]=s}this.morphTargetsRelative=A.morphTargetsRelative;const E=A.groups;for(let e=0,s=E.length;e<s;e++){const n=E[e];this.addGroup(n.start,n.count,n.materialIndex)}const i=A.boundingBox;i!==null&&(this.boundingBox=i.clone());const t=A.boundingSphere;return t!==null&&(this.boundingSphere=t.clone()),this.drawRange.start=A.drawRange.start,this.drawRange.count=A.drawRange.count,this.userData=A.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const PE=new Ng,jB=new fB,zB=new kC,dC=new x,ZB=new x,dQ=new x,yQ=new x,o=new x,a=new x,c=new HA,d=new HA,S=new HA,U=new x,Z=new x;class O extends II{constructor(A=new fg,g=new tC){super(),this.isMesh=!0,this.type="Mesh",this.geometry=A,this.material=g,this.updateMorphTargets()}copy(A,g){return super.copy(A,g),A.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=A.morphTargetInfluences.slice()),A.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},A.morphTargetDictionary)),this.material=A.material,this.geometry=A.geometry,this}updateMorphTargets(){const A=this.geometry.morphAttributes,g=Object.keys(A);if(g.length>0){const I=A[g[0]];if(I!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let B=0,Q=I.length;B<Q;B++){const E=I[B].name||String(B);this.morphTargetInfluences.push(0),this.morphTargetDictionary[E]=B}}}}getVertexPosition(A,g){const I=this.geometry,B=I.attributes.position,Q=I.morphAttributes.position,E=I.morphTargetsRelative;g.fromBufferAttribute(B,A);const i=this.morphTargetInfluences;if(Q&&i){a.set(0,0,0);for(let t=0,e=Q.length;t<e;t++){const s=i[t],n=Q[t];s!==0&&(o.fromBufferAttribute(n,A),E?a.addScaledVector(o,s):a.addScaledVector(o.sub(g),s))}g.add(a)}return this.isSkinnedMesh&&this.boneTransform(A,g),g}raycast(A,g){const I=this.geometry,B=this.material,Q=this.matrixWorld;if(B===void 0||(I.boundingSphere===null&&I.computeBoundingSphere(),zB.copy(I.boundingSphere),zB.applyMatrix4(Q),jB.copy(A.ray).recast(A.near),zB.containsPoint(jB.origin)===!1&&(jB.intersectSphere(zB,dC)===null||jB.origin.distanceToSquared(dC)>(A.far-A.near)**2))||(PE.copy(Q).invert(),jB.copy(A.ray).applyMatrix4(PE),I.boundingBox!==null&&jB.intersectsBox(I.boundingBox)===!1))return;let E;const i=I.index,t=I.attributes.position,e=I.attributes.uv,s=I.attributes.uv2,n=I.groups,r=I.drawRange;if(i!==null)if(Array.isArray(B))for(let h=0,w=n.length;h<w;h++){const D=n[h],u=B[D.materialIndex];for(let R=Math.max(D.start,r.start),y=Math.min(i.count,Math.min(D.start+D.count,r.start+r.count));R<y;R+=3){const F=i.getX(R),N=i.getX(R+1),J=i.getX(R+2);E=rA(this,u,A,jB,e,s,F,N,J),E&&(E.faceIndex=Math.floor(R/3),E.face.materialIndex=D.materialIndex,g.push(E))}}else for(let h=Math.max(0,r.start),w=Math.min(i.count,r.start+r.count);h<w;h+=3){const D=i.getX(h),u=i.getX(h+1),R=i.getX(h+2);E=rA(this,B,A,jB,e,s,D,u,R),E&&(E.faceIndex=Math.floor(h/3),g.push(E))}else if(t!==void 0)if(Array.isArray(B))for(let h=0,w=n.length;h<w;h++){const D=n[h],u=B[D.materialIndex];for(let R=Math.max(D.start,r.start),y=Math.min(t.count,Math.min(D.start+D.count,r.start+r.count));R<y;R+=3)E=rA(this,u,A,jB,e,s,R,R+1,R+2),E&&(E.faceIndex=Math.floor(R/3),E.face.materialIndex=D.materialIndex,g.push(E))}else for(let h=Math.max(0,r.start),w=Math.min(t.count,r.start+r.count);h<w;h+=3)E=rA(this,B,A,jB,e,s,h,h+1,h+2),E&&(E.faceIndex=Math.floor(h/3),g.push(E))}}function rA(C,A,g,I,B,Q,E,i,t){C.getVertexPosition(E,ZB),C.getVertexPosition(i,dQ),C.getVertexPosition(t,yQ);const e=function(s,n,r,h,w,D,u,R){let y;if(y=n.side===1?h.intersectTriangle(u,D,w,!0,R):h.intersectTriangle(w,D,u,n.side===0,R),y===null)return null;Z.copy(R),Z.applyMatrix4(s.matrixWorld);const F=r.ray.origin.distanceTo(Z);return F<r.near||F>r.far?null:{distance:F,point:Z.clone(),object:s}}(C,A,g,I,ZB,dQ,yQ,U);if(e){B&&(c.fromBufferAttribute(B,E),d.fromBufferAttribute(B,i),S.fromBufferAttribute(B,t),e.uv=TB.getUV(U,ZB,dQ,yQ,c,d,S,new HA)),Q&&(c.fromBufferAttribute(Q,E),d.fromBufferAttribute(Q,i),S.fromBufferAttribute(Q,t),e.uv2=TB.getUV(U,ZB,dQ,yQ,c,d,S,new HA));const s={a:E,b:i,c:t,normal:new x,materialIndex:0};TB.getNormal(ZB,dQ,yQ,s.normal),e.face=s}return e}class dA extends fg{constructor(A=1,g=1,I=1,B=1,Q=1,E=1){super(),this.type="BoxGeometry",this.parameters={width:A,height:g,depth:I,widthSegments:B,heightSegments:Q,depthSegments:E};const i=this;B=Math.floor(B),Q=Math.floor(Q),E=Math.floor(E);const t=[],e=[],s=[],n=[];let r=0,h=0;function w(D,u,R,y,F,N,J,T,$,IA,nA){const cA=N/$,gA=J/IA,RA=N/2,xA=J/2,UA=T/2,zA=$+1,jA=IA+1;let ig=0,tg=0;const Ig=new x;for(let uA=0;uA<jA;uA++){const pA=uA*gA-xA;for(let eg=0;eg<zA;eg++){const rg=eg*cA-RA;Ig[D]=rg*y,Ig[u]=pA*F,Ig[R]=UA,e.push(Ig.x,Ig.y,Ig.z),Ig[D]=0,Ig[u]=0,Ig[R]=T>0?1:-1,s.push(Ig.x,Ig.y,Ig.z),n.push(eg/$),n.push(1-uA/IA),ig+=1}}for(let uA=0;uA<IA;uA++)for(let pA=0;pA<$;pA++){const eg=r+pA+zA*uA,rg=r+pA+zA*(uA+1),Bg=r+(pA+1)+zA*(uA+1),wg=r+(pA+1)+zA*uA;t.push(eg,rg,wg),t.push(rg,Bg,wg),tg+=6}i.addGroup(h,tg,nA),h+=tg,r+=ig}w("z","y","x",-1,-1,I,g,A,E,Q,0),w("z","y","x",1,-1,I,g,-A,E,Q,1),w("x","z","y",1,1,A,I,g,B,E,2),w("x","z","y",1,-1,A,I,-g,B,E,3),w("x","y","z",1,-1,A,g,I,B,Q,4),w("x","y","z",-1,-1,A,g,-I,B,Q,5),this.setIndex(t),this.setAttribute("position",new Dg(e,3)),this.setAttribute("normal",new Dg(s,3)),this.setAttribute("uv",new Dg(n,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new dA(A.width,A.height,A.depth,A.widthSegments,A.heightSegments,A.depthSegments)}}function WA(C){const A={};for(const g in C){A[g]={};for(const I in C[g]){const B=C[g][I];B&&(B.isColor||B.isMatrix3||B.isMatrix4||B.isVector2||B.isVector3||B.isVector4||B.isTexture||B.isQuaternion)?A[g][I]=B.clone():Array.isArray(B)?A[g][I]=B.slice():A[g][I]=B}}return A}function KA(C){const A={};for(let g=0;g<C.length;g++){const I=WA(C[g]);for(const B in I)A[B]=I[B]}return A}function GA(C){return C.getRenderTarget()===null&&C.outputEncoding===3001?q:QA}const XA={clone:WA,merge:KA};class gg extends rB{constructor(A){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,A!==void 0&&this.setValues(A)}copy(A){return super.copy(A),this.fragmentShader=A.fragmentShader,this.vertexShader=A.vertexShader,this.uniforms=WA(A.uniforms),this.uniformsGroups=function(g){const I=[];for(let B=0;B<g.length;B++)I.push(g[B].clone());return I}(A.uniformsGroups),this.defines=Object.assign({},A.defines),this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this.fog=A.fog,this.lights=A.lights,this.clipping=A.clipping,this.extensions=Object.assign({},A.extensions),this.glslVersion=A.glslVersion,this}toJSON(A){const g=super.toJSON(A);g.glslVersion=this.glslVersion,g.uniforms={};for(const B in this.uniforms){const Q=this.uniforms[B].value;Q&&Q.isTexture?g.uniforms[B]={type:"t",value:Q.toJSON(A).uuid}:Q&&Q.isColor?g.uniforms[B]={type:"c",value:Q.getHex()}:Q&&Q.isVector2?g.uniforms[B]={type:"v2",value:Q.toArray()}:Q&&Q.isVector3?g.uniforms[B]={type:"v3",value:Q.toArray()}:Q&&Q.isVector4?g.uniforms[B]={type:"v4",value:Q.toArray()}:Q&&Q.isMatrix3?g.uniforms[B]={type:"m3",value:Q.toArray()}:Q&&Q.isMatrix4?g.uniforms[B]={type:"m4",value:Q.toArray()}:g.uniforms[B]={value:Q}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader;const I={};for(const B in this.extensions)this.extensions[B]===!0&&(I[B]=!0);return Object.keys(I).length>0&&(g.extensions=I),g}}class zg extends II{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ng,this.projectionMatrix=new Ng,this.projectionMatrixInverse=new Ng}copy(A,g){return super.copy(A,g),this.matrixWorldInverse.copy(A.matrixWorldInverse),this.projectionMatrix.copy(A.projectionMatrix),this.projectionMatrixInverse.copy(A.projectionMatrixInverse),this}getWorldDirection(A){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return A.set(-g[8],-g[9],-g[10]).normalize()}updateMatrixWorld(A){super.updateMatrixWorld(A),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(A,g){super.updateWorldMatrix(A,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Rg extends zg{constructor(A=50,g=1,I=.1,B=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=A,this.zoom=1,this.near=I,this.far=B,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.fov=A.fov,this.zoom=A.zoom,this.near=A.near,this.far=A.far,this.focus=A.focus,this.aspect=A.aspect,this.view=A.view===null?null:Object.assign({},A.view),this.filmGauge=A.filmGauge,this.filmOffset=A.filmOffset,this}setFocalLength(A){const g=.5*this.getFilmHeight()/A;this.fov=2*aB*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const A=Math.tan(.5*cI*this.fov);return .5*this.getFilmHeight()/A}getEffectiveFOV(){return 2*aB*Math.atan(Math.tan(.5*cI*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(A,g,I,B,Q,E){this.aspect=A/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=this.near;let g=A*Math.tan(.5*cI*this.fov)/this.zoom,I=2*g,B=this.aspect*I,Q=-.5*B;const E=this.view;if(this.view!==null&&this.view.enabled){const t=E.fullWidth,e=E.fullHeight;Q+=E.offsetX*B/t,g-=E.offsetY*I/e,B*=E.width/t,I*=E.height/e}const i=this.filmOffset;i!==0&&(Q+=A*i/this.getFilmWidth()),this.projectionMatrix.makePerspective(Q,Q+B,g,g-I,A,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const vg=-90;class fA extends II{constructor(A,g,I){super(),this.type="CubeCamera",this.renderTarget=I;const B=new Rg(vg,1,A,g);B.layers=this.layers,B.up.set(0,1,0),B.lookAt(1,0,0),this.add(B);const Q=new Rg(vg,1,A,g);Q.layers=this.layers,Q.up.set(0,1,0),Q.lookAt(-1,0,0),this.add(Q);const E=new Rg(vg,1,A,g);E.layers=this.layers,E.up.set(0,0,-1),E.lookAt(0,1,0),this.add(E);const i=new Rg(vg,1,A,g);i.layers=this.layers,i.up.set(0,0,1),i.lookAt(0,-1,0),this.add(i);const t=new Rg(vg,1,A,g);t.layers=this.layers,t.up.set(0,1,0),t.lookAt(0,0,1),this.add(t);const e=new Rg(vg,1,A,g);e.layers=this.layers,e.up.set(0,1,0),e.lookAt(0,0,-1),this.add(e)}update(A,g){this.parent===null&&this.updateMatrixWorld();const I=this.renderTarget,[B,Q,E,i,t,e]=this.children,s=A.getRenderTarget(),n=A.toneMapping,r=A.xr.enabled;A.toneMapping=0,A.xr.enabled=!1;const h=I.texture.generateMipmaps;I.texture.generateMipmaps=!1,A.setRenderTarget(I,0),A.render(g,B),A.setRenderTarget(I,1),A.render(g,Q),A.setRenderTarget(I,2),A.render(g,E),A.setRenderTarget(I,3),A.render(g,i),A.setRenderTarget(I,4),A.render(g,t),I.texture.generateMipmaps=h,A.setRenderTarget(I,5),A.render(g,e),A.setRenderTarget(s),A.toneMapping=n,A.xr.enabled=r,I.texture.needsPMREMUpdate=!0}}class cg extends JI{constructor(A,g,I,B,Q,E,i,t,e,s){super(A=A!==void 0?A:[],g=g!==void 0?g:301,I,B,Q,E,i,t,e,s),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(A){this.image=A}}class NI extends VB{constructor(A=1,g={}){super(A,A,g),this.isWebGLCubeRenderTarget=!0;const I={width:A,height:A,depth:1},B=[I,I,I,I,I,I];this.texture=new cg(B,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0&&g.generateMipmaps,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:1006}fromEquirectangularTexture(A,g){this.texture.type=g.type,this.texture.encoding=g.encoding,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const I={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},B=new dA(5,5,5),Q=new gg({name:"CubemapFromEquirect",uniforms:WA(I.uniforms),vertexShader:I.vertexShader,fragmentShader:I.fragmentShader,side:1,blending:0});Q.uniforms.tEquirect.value=g;const E=new O(B,Q),i=g.minFilter;return g.minFilter===1008&&(g.minFilter=1006),new fA(1,10,this).update(A,E),g.minFilter=i,E.geometry.dispose(),E.material.dispose(),this}clear(A,g,I,B){const Q=A.getRenderTarget();for(let E=0;E<6;E++)A.setRenderTarget(this,E),A.clear(g,I,B);A.setRenderTarget(Q)}}const rI=new x,GB=new x,gB=new _I;class bC{constructor(A=new x(1,0,0),g=0){this.isPlane=!0,this.normal=A,this.constant=g}set(A,g){return this.normal.copy(A),this.constant=g,this}setComponents(A,g,I,B){return this.normal.set(A,g,I),this.constant=B,this}setFromNormalAndCoplanarPoint(A,g){return this.normal.copy(A),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(A,g,I){const B=rI.subVectors(I,g).cross(GB.subVectors(A,g)).normalize();return this.setFromNormalAndCoplanarPoint(B,A),this}copy(A){return this.normal.copy(A.normal),this.constant=A.constant,this}normalize(){const A=1/this.normal.length();return this.normal.multiplyScalar(A),this.constant*=A,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(A){return this.normal.dot(A)+this.constant}distanceToSphere(A){return this.distanceToPoint(A.center)-A.radius}projectPoint(A,g){return g.copy(A).addScaledVector(this.normal,-this.distanceToPoint(A))}intersectLine(A,g){const I=A.delta(rI),B=this.normal.dot(I);if(B===0)return this.distanceToPoint(A.start)===0?g.copy(A.start):null;const Q=-(A.start.dot(this.normal)+this.constant)/B;return Q<0||Q>1?null:g.copy(A.start).addScaledVector(I,Q)}intersectsLine(A){const g=this.distanceToPoint(A.start),I=this.distanceToPoint(A.end);return g<0&&I>0||I<0&&g>0}intersectsBox(A){return A.intersectsPlane(this)}intersectsSphere(A){return A.intersectsPlane(this)}coplanarPoint(A){return A.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(A,g){const I=g||gB.getNormalMatrix(A),B=this.coplanarPoint(rI).applyMatrix4(A),Q=this.normal.applyMatrix3(I).normalize();return this.constant=-B.dot(Q),this}translate(A){return this.constant-=A.dot(this.normal),this}equals(A){return A.normal.equals(this.normal)&&A.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yC=new kC,hB=new x;class oE{constructor(A=new bC,g=new bC,I=new bC,B=new bC,Q=new bC,E=new bC){this.planes=[A,g,I,B,Q,E]}set(A,g,I,B,Q,E){const i=this.planes;return i[0].copy(A),i[1].copy(g),i[2].copy(I),i[3].copy(B),i[4].copy(Q),i[5].copy(E),this}copy(A){const g=this.planes;for(let I=0;I<6;I++)g[I].copy(A.planes[I]);return this}setFromProjectionMatrix(A){const g=this.planes,I=A.elements,B=I[0],Q=I[1],E=I[2],i=I[3],t=I[4],e=I[5],s=I[6],n=I[7],r=I[8],h=I[9],w=I[10],D=I[11],u=I[12],R=I[13],y=I[14],F=I[15];return g[0].setComponents(i-B,n-t,D-r,F-u).normalize(),g[1].setComponents(i+B,n+t,D+r,F+u).normalize(),g[2].setComponents(i+Q,n+e,D+h,F+R).normalize(),g[3].setComponents(i-Q,n-e,D-h,F-R).normalize(),g[4].setComponents(i-E,n-s,D-w,F-y).normalize(),g[5].setComponents(i+E,n+s,D+w,F+y).normalize(),this}intersectsObject(A){const g=A.geometry;return g.boundingSphere===null&&g.computeBoundingSphere(),yC.copy(g.boundingSphere).applyMatrix4(A.matrixWorld),this.intersectsSphere(yC)}intersectsSprite(A){return yC.center.set(0,0,0),yC.radius=.7071067811865476,yC.applyMatrix4(A.matrixWorld),this.intersectsSphere(yC)}intersectsSphere(A){const g=this.planes,I=A.center,B=-A.radius;for(let Q=0;Q<6;Q++)if(g[Q].distanceToPoint(I)<B)return!1;return!0}intersectsBox(A){const g=this.planes;for(let I=0;I<6;I++){const B=g[I];if(hB.x=B.normal.x>0?A.max.x:A.min.x,hB.y=B.normal.y>0?A.max.y:A.min.y,hB.z=B.normal.z>0?A.max.z:A.min.z,B.distanceToPoint(hB)<0)return!1}return!0}containsPoint(A){const g=this.planes;for(let I=0;I<6;I++)if(g[I].distanceToPoint(A)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function aE(){let C=null,A=!1,g=null,I=null;function B(Q,E){g(Q,E),I=C.requestAnimationFrame(B)}return{start:function(){A!==!0&&g!==null&&(I=C.requestAnimationFrame(B),A=!0)},stop:function(){C.cancelAnimationFrame(I),A=!1},setAnimationLoop:function(Q){g=Q},setContext:function(Q){C=Q}}}function qi(C,A){const g=A.isWebGL2,I=new WeakMap;return{get:function(B){return B.isInterleavedBufferAttribute&&(B=B.data),I.get(B)},remove:function(B){B.isInterleavedBufferAttribute&&(B=B.data);const Q=I.get(B);Q&&(C.deleteBuffer(Q.buffer),I.delete(B))},update:function(B,Q){if(B.isGLBufferAttribute){const i=I.get(B);return void((!i||i.version<B.version)&&I.set(B,{buffer:B.buffer,type:B.type,bytesPerElement:B.elementSize,version:B.version}))}B.isInterleavedBufferAttribute&&(B=B.data);const E=I.get(B);E===void 0?I.set(B,function(i,t){const e=i.array,s=i.usage,n=C.createBuffer();let r;if(C.bindBuffer(t,n),C.bufferData(t,e,s),i.onUploadCallback(),e instanceof Float32Array)r=5126;else if(e instanceof Uint16Array)if(i.isFloat16BufferAttribute){if(!g)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");r=5131}else r=5123;else if(e instanceof Int16Array)r=5122;else if(e instanceof Uint32Array)r=5125;else if(e instanceof Int32Array)r=5124;else if(e instanceof Int8Array)r=5120;else if(e instanceof Uint8Array)r=5121;else{if(!(e instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+e);r=5121}return{buffer:n,type:r,bytesPerElement:e.BYTES_PER_ELEMENT,version:i.version}}(B,Q)):E.version<B.version&&(function(i,t,e){const s=t.array,n=t.updateRange;C.bindBuffer(e,i),n.count===-1?C.bufferSubData(e,0,s):(g?C.bufferSubData(e,n.offset*s.BYTES_PER_ELEMENT,s,n.offset,n.count):C.bufferSubData(e,n.offset*s.BYTES_PER_ELEMENT,s.subarray(n.offset,n.offset+n.count)),n.count=-1),t.onUploadCallback()}(E.buffer,B,Q),E.version=B.version)}}}class sE extends fg{constructor(A=1,g=1,I=1,B=1){super(),this.type="PlaneGeometry",this.parameters={width:A,height:g,widthSegments:I,heightSegments:B};const Q=A/2,E=g/2,i=Math.floor(I),t=Math.floor(B),e=i+1,s=t+1,n=A/i,r=g/t,h=[],w=[],D=[],u=[];for(let R=0;R<s;R++){const y=R*r-E;for(let F=0;F<e;F++){const N=F*n-Q;w.push(N,-y,0),D.push(0,0,1),u.push(F/i),u.push(1-R/t)}}for(let R=0;R<t;R++)for(let y=0;y<i;y++){const F=y+e*R,N=y+e*(R+1),J=y+1+e*(R+1),T=y+1+e*R;h.push(F,N,T),h.push(N,J,T)}this.setIndex(h),this.setAttribute("position",new Dg(w,3)),this.setAttribute("normal",new Dg(D,3)),this.setAttribute("uv",new Dg(u,2))}copy(A){return super.copy(A),this.parameters=Object.assign({},A.parameters),this}static fromJSON(A){return new sE(A.width,A.height,A.widthSegments,A.heightSegments)}}const Wg={alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,begin_vertex:"vec3 transformed = vec3( position );",beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
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
vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
    
    vec2 lodFudge = pow( 1.95, lod ) / fullSize;
	return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
		   g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
}
vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
	vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
	vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
	vec2 fLodSizeInv = 1.0 / fLodSize;
	vec2 cLodSizeInv = 1.0 / cLodSize;
	vec2 fullSize = vec2( textureSize( sampler, 0 ) );
	vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
	vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
	return mix( fSample, cSample, fract( lod ) );
}`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,encodings_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",encodings_pars_fragment:`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
		vec3 iridescenceF0;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,normal_fragment_maps:`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,output_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,uv_pars_fragment:`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,uv_pars_vertex:`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,uv_vertex:`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv2_pars_fragment:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,uv2_pars_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,uv2_vertex:`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,depth_vert:`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,meshmatcap_frag:`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`},Eg={common:{diffuse:{value:new sg(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new _I},uv2Transform:{value:new _I},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new HA(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new sg(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new sg(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _I}},sprite:{diffuse:{value:new sg(16777215)},opacity:{value:1},center:{value:new HA(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new _I}}},uC={basic:{uniforms:KA([Eg.common,Eg.specularmap,Eg.envmap,Eg.aomap,Eg.lightmap,Eg.fog]),vertexShader:Wg.meshbasic_vert,fragmentShader:Wg.meshbasic_frag},lambert:{uniforms:KA([Eg.common,Eg.specularmap,Eg.envmap,Eg.aomap,Eg.lightmap,Eg.emissivemap,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,Eg.fog,Eg.lights,{emissive:{value:new sg(0)}}]),vertexShader:Wg.meshlambert_vert,fragmentShader:Wg.meshlambert_frag},phong:{uniforms:KA([Eg.common,Eg.specularmap,Eg.envmap,Eg.aomap,Eg.lightmap,Eg.emissivemap,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,Eg.fog,Eg.lights,{emissive:{value:new sg(0)},specular:{value:new sg(1118481)},shininess:{value:30}}]),vertexShader:Wg.meshphong_vert,fragmentShader:Wg.meshphong_frag},standard:{uniforms:KA([Eg.common,Eg.envmap,Eg.aomap,Eg.lightmap,Eg.emissivemap,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,Eg.roughnessmap,Eg.metalnessmap,Eg.fog,Eg.lights,{emissive:{value:new sg(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Wg.meshphysical_vert,fragmentShader:Wg.meshphysical_frag},toon:{uniforms:KA([Eg.common,Eg.aomap,Eg.lightmap,Eg.emissivemap,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,Eg.gradientmap,Eg.fog,Eg.lights,{emissive:{value:new sg(0)}}]),vertexShader:Wg.meshtoon_vert,fragmentShader:Wg.meshtoon_frag},matcap:{uniforms:KA([Eg.common,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,Eg.fog,{matcap:{value:null}}]),vertexShader:Wg.meshmatcap_vert,fragmentShader:Wg.meshmatcap_frag},points:{uniforms:KA([Eg.points,Eg.fog]),vertexShader:Wg.points_vert,fragmentShader:Wg.points_frag},dashed:{uniforms:KA([Eg.common,Eg.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Wg.linedashed_vert,fragmentShader:Wg.linedashed_frag},depth:{uniforms:KA([Eg.common,Eg.displacementmap]),vertexShader:Wg.depth_vert,fragmentShader:Wg.depth_frag},normal:{uniforms:KA([Eg.common,Eg.bumpmap,Eg.normalmap,Eg.displacementmap,{opacity:{value:1}}]),vertexShader:Wg.meshnormal_vert,fragmentShader:Wg.meshnormal_frag},sprite:{uniforms:KA([Eg.sprite,Eg.fog]),vertexShader:Wg.sprite_vert,fragmentShader:Wg.sprite_frag},background:{uniforms:{uvTransform:{value:new _I},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Wg.background_vert,fragmentShader:Wg.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Wg.backgroundCube_vert,fragmentShader:Wg.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Wg.cube_vert,fragmentShader:Wg.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Wg.equirect_vert,fragmentShader:Wg.equirect_frag},distanceRGBA:{uniforms:KA([Eg.common,Eg.displacementmap,{referencePosition:{value:new x},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Wg.distanceRGBA_vert,fragmentShader:Wg.distanceRGBA_frag},shadow:{uniforms:KA([Eg.lights,Eg.fog,{color:{value:new sg(0)},opacity:{value:1}}]),vertexShader:Wg.shadow_vert,fragmentShader:Wg.shadow_frag}};uC.physical={uniforms:KA([uC.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new HA(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new sg(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new HA},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new sg(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new sg(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Wg.meshphysical_vert,fragmentShader:Wg.meshphysical_frag};const xi={r:0,b:0,g:0};function ls(C,A,g,I,B,Q,E){const i=new sg(0);let t,e,s=Q===!0?0:1,n=null,r=0,h=null;function w(D,u){D.getRGB(xi,GA(C)),I.buffers.color.setClear(xi.r,xi.g,xi.b,u,E)}return{getClearColor:function(){return i},setClearColor:function(D,u=1){i.set(D),s=u,w(i,s)},getClearAlpha:function(){return s},setClearAlpha:function(D){s=D,w(i,s)},render:function(D,u){let R=!1,y=u.isScene===!0?u.background:null;y&&y.isTexture&&(y=(u.backgroundBlurriness>0?g:A).get(y));const F=C.xr,N=F.getSession&&F.getSession();N&&N.environmentBlendMode==="additive"&&(y=null),y===null?w(i,s):y&&y.isColor&&(w(y,1),R=!0),(C.autoClear||R)&&C.clear(C.autoClearColor,C.autoClearDepth,C.autoClearStencil),y&&(y.isCubeTexture||y.mapping===306)?(e===void 0&&(e=new O(new dA(1,1,1),new gg({name:"BackgroundCubeMaterial",uniforms:WA(uC.backgroundCube.uniforms),vertexShader:uC.backgroundCube.vertexShader,fragmentShader:uC.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),e.geometry.deleteAttribute("normal"),e.geometry.deleteAttribute("uv"),e.onBeforeRender=function(J,T,$){this.matrixWorld.copyPosition($.matrixWorld)},Object.defineProperty(e.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),B.update(e)),e.material.uniforms.envMap.value=y,e.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,e.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,e.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,e.material.toneMapped=y.encoding!==3001,n===y&&r===y.version&&h===C.toneMapping||(e.material.needsUpdate=!0,n=y,r=y.version,h=C.toneMapping),e.layers.enableAll(),D.unshift(e,e.geometry,e.material,0,0,null)):y&&y.isTexture&&(t===void 0&&(t=new O(new sE(2,2),new gg({name:"BackgroundMaterial",uniforms:WA(uC.background.uniforms),vertexShader:uC.background.vertexShader,fragmentShader:uC.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),t.geometry.deleteAttribute("normal"),Object.defineProperty(t.material,"map",{get:function(){return this.uniforms.t2D.value}}),B.update(t)),t.material.uniforms.t2D.value=y,t.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,t.material.toneMapped=y.encoding!==3001,y.matrixAutoUpdate===!0&&y.updateMatrix(),t.material.uniforms.uvTransform.value.copy(y.matrix),n===y&&r===y.version&&h===C.toneMapping||(t.material.needsUpdate=!0,n=y,r=y.version,h=C.toneMapping),t.layers.enableAll(),D.unshift(t,t.geometry,t.material,0,0,null))}}}function ws(C,A,g,I){const B=C.getParameter(34921),Q=I.isWebGL2?null:A.get("OES_vertex_array_object"),E=I.isWebGL2||Q!==null,i={},t=h(null);let e=t,s=!1;function n(J){return I.isWebGL2?C.bindVertexArray(J):Q.bindVertexArrayOES(J)}function r(J){return I.isWebGL2?C.deleteVertexArray(J):Q.deleteVertexArrayOES(J)}function h(J){const T=[],$=[],IA=[];for(let nA=0;nA<B;nA++)T[nA]=0,$[nA]=0,IA[nA]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:$,attributeDivisors:IA,object:J,attributes:{},index:null}}function w(){const J=e.newAttributes;for(let T=0,$=J.length;T<$;T++)J[T]=0}function D(J){u(J,0)}function u(J,T){const $=e.newAttributes,IA=e.enabledAttributes,nA=e.attributeDivisors;$[J]=1,IA[J]===0&&(C.enableVertexAttribArray(J),IA[J]=1),nA[J]!==T&&((I.isWebGL2?C:A.get("ANGLE_instanced_arrays"))[I.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](J,T),nA[J]=T)}function R(){const J=e.newAttributes,T=e.enabledAttributes;for(let $=0,IA=T.length;$<IA;$++)T[$]!==J[$]&&(C.disableVertexAttribArray($),T[$]=0)}function y(J,T,$,IA,nA,cA){I.isWebGL2!==!0||$!==5124&&$!==5125?C.vertexAttribPointer(J,T,$,IA,nA,cA):C.vertexAttribIPointer(J,T,$,nA,cA)}function F(){N(),s=!0,e!==t&&(e=t,n(e.object))}function N(){t.geometry=null,t.program=null,t.wireframe=!1}return{setup:function(J,T,$,IA,nA){let cA=!1;if(E){const gA=function(RA,xA,UA){const zA=UA.wireframe===!0;let jA=i[RA.id];jA===void 0&&(jA={},i[RA.id]=jA);let ig=jA[xA.id];ig===void 0&&(ig={},jA[xA.id]=ig);let tg=ig[zA];return tg===void 0&&(tg=h(I.isWebGL2?C.createVertexArray():Q.createVertexArrayOES()),ig[zA]=tg),tg}(IA,$,T);e!==gA&&(e=gA,n(e.object)),cA=function(RA,xA,UA,zA){const jA=e.attributes,ig=xA.attributes;let tg=0;const Ig=UA.getAttributes();for(const uA in Ig)if(Ig[uA].location>=0){const pA=jA[uA];let eg=ig[uA];if(eg===void 0&&(uA==="instanceMatrix"&&RA.instanceMatrix&&(eg=RA.instanceMatrix),uA==="instanceColor"&&RA.instanceColor&&(eg=RA.instanceColor)),pA===void 0||pA.attribute!==eg||eg&&pA.data!==eg.data)return!0;tg++}return e.attributesNum!==tg||e.index!==zA}(J,IA,$,nA),cA&&function(RA,xA,UA,zA){const jA={},ig=xA.attributes;let tg=0;const Ig=UA.getAttributes();for(const uA in Ig)if(Ig[uA].location>=0){let pA=ig[uA];pA===void 0&&(uA==="instanceMatrix"&&RA.instanceMatrix&&(pA=RA.instanceMatrix),uA==="instanceColor"&&RA.instanceColor&&(pA=RA.instanceColor));const eg={};eg.attribute=pA,pA&&pA.data&&(eg.data=pA.data),jA[uA]=eg,tg++}e.attributes=jA,e.attributesNum=tg,e.index=zA}(J,IA,$,nA)}else{const gA=T.wireframe===!0;e.geometry===IA.id&&e.program===$.id&&e.wireframe===gA||(e.geometry=IA.id,e.program=$.id,e.wireframe=gA,cA=!0)}nA!==null&&g.update(nA,34963),(cA||s)&&(s=!1,function(gA,RA,xA,UA){if(I.isWebGL2===!1&&(gA.isInstancedMesh||UA.isInstancedBufferGeometry)&&A.get("ANGLE_instanced_arrays")===null)return;w();const zA=UA.attributes,jA=xA.getAttributes(),ig=RA.defaultAttributeValues;for(const tg in jA){const Ig=jA[tg];if(Ig.location>=0){let uA=zA[tg];if(uA===void 0&&(tg==="instanceMatrix"&&gA.instanceMatrix&&(uA=gA.instanceMatrix),tg==="instanceColor"&&gA.instanceColor&&(uA=gA.instanceColor)),uA!==void 0){const pA=uA.normalized,eg=uA.itemSize,rg=g.get(uA);if(rg===void 0)continue;const Bg=rg.buffer,wg=rg.type,V=rg.bytesPerElement;if(uA.isInterleavedBufferAttribute){const Y=uA.data,yA=Y.stride,oA=uA.offset;if(Y.isInstancedInterleavedBuffer){for(let _=0;_<Ig.locationSize;_++)u(Ig.location+_,Y.meshPerAttribute);gA.isInstancedMesh!==!0&&UA._maxInstanceCount===void 0&&(UA._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let _=0;_<Ig.locationSize;_++)D(Ig.location+_);C.bindBuffer(34962,Bg);for(let _=0;_<Ig.locationSize;_++)y(Ig.location+_,eg/Ig.locationSize,wg,pA,yA*V,(oA+eg/Ig.locationSize*_)*V)}else{if(uA.isInstancedBufferAttribute){for(let Y=0;Y<Ig.locationSize;Y++)u(Ig.location+Y,uA.meshPerAttribute);gA.isInstancedMesh!==!0&&UA._maxInstanceCount===void 0&&(UA._maxInstanceCount=uA.meshPerAttribute*uA.count)}else for(let Y=0;Y<Ig.locationSize;Y++)D(Ig.location+Y);C.bindBuffer(34962,Bg);for(let Y=0;Y<Ig.locationSize;Y++)y(Ig.location+Y,eg/Ig.locationSize,wg,pA,eg*V,eg/Ig.locationSize*Y*V)}}else if(ig!==void 0){const pA=ig[tg];if(pA!==void 0)switch(pA.length){case 2:C.vertexAttrib2fv(Ig.location,pA);break;case 3:C.vertexAttrib3fv(Ig.location,pA);break;case 4:C.vertexAttrib4fv(Ig.location,pA);break;default:C.vertexAttrib1fv(Ig.location,pA)}}}}R()}(J,T,$,IA),nA!==null&&C.bindBuffer(34963,g.get(nA).buffer))},reset:F,resetDefaultState:N,dispose:function(){F();for(const J in i){const T=i[J];for(const $ in T){const IA=T[$];for(const nA in IA)r(IA[nA].object),delete IA[nA];delete T[$]}delete i[J]}},releaseStatesOfGeometry:function(J){if(i[J.id]===void 0)return;const T=i[J.id];for(const $ in T){const IA=T[$];for(const nA in IA)r(IA[nA].object),delete IA[nA];delete T[$]}delete i[J.id]},releaseStatesOfProgram:function(J){for(const T in i){const $=i[T];if($[J.id]===void 0)continue;const IA=$[J.id];for(const nA in IA)r(IA[nA].object),delete IA[nA];delete $[J.id]}},initAttributes:w,enableAttribute:D,disableUnusedAttributes:R}}function ds(C,A,g,I){const B=I.isWebGL2;let Q;this.setMode=function(E){Q=E},this.render=function(E,i){C.drawArrays(Q,E,i),g.update(i,Q,1)},this.renderInstances=function(E,i,t){if(t===0)return;let e,s;if(B)e=C,s="drawArraysInstanced";else if(e=A.get("ANGLE_instanced_arrays"),s="drawArraysInstancedANGLE",e===null)return void console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");e[s](Q,E,i,t),g.update(i,Q,t)}}function ys(C,A,g){let I;function B(N){if(N==="highp"){if(C.getShaderPrecisionFormat(35633,36338).precision>0&&C.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";N="mediump"}return N==="mediump"&&C.getShaderPrecisionFormat(35633,36337).precision>0&&C.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const Q=typeof WebGL2RenderingContext<"u"&&C instanceof WebGL2RenderingContext;let E=g.precision!==void 0?g.precision:"highp";const i=B(E);i!==E&&(console.warn("THREE.WebGLRenderer:",E,"not supported, using",i,"instead."),E=i);const t=Q||A.has("WEBGL_draw_buffers"),e=g.logarithmicDepthBuffer===!0,s=C.getParameter(34930),n=C.getParameter(35660),r=C.getParameter(3379),h=C.getParameter(34076),w=C.getParameter(34921),D=C.getParameter(36347),u=C.getParameter(36348),R=C.getParameter(36349),y=n>0,F=Q||A.has("OES_texture_float");return{isWebGL2:Q,drawBuffers:t,getMaxAnisotropy:function(){if(I!==void 0)return I;if(A.has("EXT_texture_filter_anisotropic")===!0){const N=A.get("EXT_texture_filter_anisotropic");I=C.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else I=0;return I},getMaxPrecision:B,precision:E,logarithmicDepthBuffer:e,maxTextures:s,maxVertexTextures:n,maxTextureSize:r,maxCubemapSize:h,maxAttributes:w,maxVertexUniforms:D,maxVaryings:u,maxFragmentUniforms:R,vertexTextures:y,floatFragmentTextures:F,floatVertexTextures:y&&F,maxSamples:Q?C.getParameter(36183):0}}function us(C){const A=this;let g=null,I=0,B=!1,Q=!1;const E=new bC,i=new _I,t={value:null,needsUpdate:!1};function e(s,n,r,h){const w=s!==null?s.length:0;let D=null;if(w!==0){if(D=t.value,h!==!0||D===null){const u=r+4*w,R=n.matrixWorldInverse;i.getNormalMatrix(R),(D===null||D.length<u)&&(D=new Float32Array(u));for(let y=0,F=r;y!==w;++y,F+=4)E.copy(s[y]).applyMatrix4(R,i),E.normal.toArray(D,F),D[F+3]=E.constant}t.value=D,t.needsUpdate=!0}return A.numPlanes=w,A.numIntersection=0,D}this.uniform=t,this.numPlanes=0,this.numIntersection=0,this.init=function(s,n){const r=s.length!==0||n||I!==0||B;return B=n,I=s.length,r},this.beginShadows=function(){Q=!0,e(null)},this.endShadows=function(){Q=!1},this.setGlobalState=function(s,n){g=e(s,n,0)},this.setState=function(s,n,r){const h=s.clippingPlanes,w=s.clipIntersection,D=s.clipShadows,u=C.get(s);if(!B||h===null||h.length===0||Q&&!D)Q?e(null):function(){t.value!==g&&(t.value=g,t.needsUpdate=I>0),A.numPlanes=I,A.numIntersection=0}();else{const R=Q?0:I,y=4*R;let F=u.clippingState||null;t.value=F,F=e(h,n,y,r);for(let N=0;N!==y;++N)F[N]=g[N];u.clippingState=F,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=R}}}function Gs(C){let A=new WeakMap;function g(B,Q){return Q===303?B.mapping=301:Q===304&&(B.mapping=302),B}function I(B){const Q=B.target;Q.removeEventListener("dispose",I);const E=A.get(Q);E!==void 0&&(A.delete(Q),E.dispose())}return{get:function(B){if(B&&B.isTexture&&B.isRenderTargetTexture===!1){const Q=B.mapping;if(Q===303||Q===304){if(A.has(B))return g(A.get(B).texture,B.mapping);{const E=B.image;if(E&&E.height>0){const i=new NI(E.height/2);return i.fromEquirectangularTexture(C,B),A.set(B,i),B.addEventListener("dispose",I),g(i.texture,B.mapping)}return null}}}return B},dispose:function(){A=new WeakMap}}}class vi extends zg{constructor(A=-1,g=1,I=1,B=-1,Q=.1,E=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=A,this.right=g,this.top=I,this.bottom=B,this.near=Q,this.far=E,this.updateProjectionMatrix()}copy(A,g){return super.copy(A,g),this.left=A.left,this.right=A.right,this.top=A.top,this.bottom=A.bottom,this.near=A.near,this.far=A.far,this.zoom=A.zoom,this.view=A.view===null?null:Object.assign({},A.view),this}setViewOffset(A,g,I,B,Q,E){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=A,this.view.fullHeight=g,this.view.offsetX=I,this.view.offsetY=B,this.view.width=Q,this.view.height=E,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const A=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),I=(this.right+this.left)/2,B=(this.top+this.bottom)/2;let Q=I-A,E=I+A,i=B+g,t=B-g;if(this.view!==null&&this.view.enabled){const e=(this.right-this.left)/this.view.fullWidth/this.zoom,s=(this.top-this.bottom)/this.view.fullHeight/this.zoom;Q+=e*this.view.offsetX,E=Q+e*this.view.width,i-=s*this.view.offsetY,t=i-s*this.view.height}this.projectionMatrix.makeOrthographic(Q,E,i,t,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(A){const g=super.toJSON(A);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const rE=4,Pe=[.125,.215,.35,.446,.526,.582],KQ=20,xt=new vi,Xe=new sg;let vt=null;const YQ=(1+Math.sqrt(5))/2,nE=1/YQ,_e=[new x(1,1,1),new x(-1,1,1),new x(1,1,-1),new x(-1,1,-1),new x(0,YQ,nE),new x(0,YQ,-nE),new x(nE,0,YQ),new x(-nE,0,YQ),new x(YQ,nE,0),new x(-YQ,nE,0)];class Wt{constructor(A){this._renderer=A,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(A,g=0,I=.1,B=100){vt=this._renderer.getRenderTarget(),this._setSize(256);const Q=this._allocateTargets();return Q.depthBuffer=!0,this._sceneToCubeUV(A,I,B,Q),g>0&&this._blur(Q,0,0,g),this._applyPMREM(Q),this._cleanup(Q),Q}fromEquirectangular(A,g=null){return this._fromTexture(A,g)}fromCubemap(A,g=null){return this._fromTexture(A,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$e(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ze(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(A){this._lodMax=Math.floor(Math.log2(A)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let A=0;A<this._lodPlanes.length;A++)this._lodPlanes[A].dispose()}_cleanup(A){this._renderer.setRenderTarget(vt),A.scissorTest=!1,Wi(A,0,0,A.width,A.height)}_fromTexture(A,g){A.mapping===301||A.mapping===302?this._setSize(A.image.length===0?16:A.image[0].width||A.image[0].image.width):this._setSize(A.image.width/4),vt=this._renderer.getRenderTarget();const I=g||this._allocateTargets();return this._textureToCubeUV(A,I),this._applyPMREM(I),this._cleanup(I),I}_allocateTargets(){const A=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,I={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,encoding:3e3,depthBuffer:!1},B=je(A,g,I);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==A||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=je(A,g,I);const{_lodMax:Q}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(E){const i=[],t=[],e=[];let s=E;const n=E-rE+1+Pe.length;for(let r=0;r<n;r++){const h=Math.pow(2,s);t.push(h);let w=1/h;r>E-rE?w=Pe[r-E+rE-1]:r===0&&(w=0),e.push(w);const D=1/(h-2),u=-D,R=1+D,y=[u,u,R,u,R,R,u,u,R,R,u,R],F=6,N=6,J=3,T=2,$=1,IA=new Float32Array(J*N*F),nA=new Float32Array(T*N*F),cA=new Float32Array($*N*F);for(let RA=0;RA<F;RA++){const xA=RA%3*2/3-1,UA=RA>2?0:-1,zA=[xA,UA,0,xA+2/3,UA,0,xA+2/3,UA+1,0,xA,UA,0,xA+2/3,UA+1,0,xA,UA+1,0];IA.set(zA,J*N*RA),nA.set(y,T*N*RA);const jA=[RA,RA,RA,RA,RA,RA];cA.set(jA,$*N*RA)}const gA=new fg;gA.setAttribute("position",new iI(IA,J)),gA.setAttribute("uv",new iI(nA,T)),gA.setAttribute("faceIndex",new iI(cA,$)),i.push(gA),s>rE&&s--}return{lodPlanes:i,sizeLods:t,sigmas:e}}(Q)),this._blurMaterial=function(E,i,t){const e=new Float32Array(KQ),s=new x(0,1,0);return new gg({name:"SphericalGaussianBlur",defines:{n:KQ,CUBEUV_TEXEL_WIDTH:1/i,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${E}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:e},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Tt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}(Q,A,g)}return B}_compileMaterial(A){const g=new O(this._lodPlanes[0],A);this._renderer.compile(g,xt)}_sceneToCubeUV(A,g,I,B){const Q=new Rg(90,1,g,I),E=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],t=this._renderer,e=t.autoClear,s=t.toneMapping;t.getClearColor(Xe),t.toneMapping=0,t.autoClear=!1;const n=new tC({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),r=new O(new dA,n);let h=!1;const w=A.background;w?w.isColor&&(n.color.copy(w),A.background=null,h=!0):(n.color.copy(Xe),h=!0);for(let D=0;D<6;D++){const u=D%3;u===0?(Q.up.set(0,E[D],0),Q.lookAt(i[D],0,0)):u===1?(Q.up.set(0,0,E[D]),Q.lookAt(0,i[D],0)):(Q.up.set(0,E[D],0),Q.lookAt(0,0,i[D]));const R=this._cubeSize;Wi(B,u*R,D>2?R:0,R,R),t.setRenderTarget(B),h&&t.render(r,Q),t.render(A,Q)}r.geometry.dispose(),r.material.dispose(),t.toneMapping=s,t.autoClear=e,A.background=w}_textureToCubeUV(A,g){const I=this._renderer,B=A.mapping===301||A.mapping===302;B?(this._cubemapMaterial===null&&(this._cubemapMaterial=$e()),this._cubemapMaterial.uniforms.flipEnvMap.value=A.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ze());const Q=B?this._cubemapMaterial:this._equirectMaterial,E=new O(this._lodPlanes[0],Q);Q.uniforms.envMap.value=A;const i=this._cubeSize;Wi(g,0,0,3*i,2*i),I.setRenderTarget(g),I.render(E,xt)}_applyPMREM(A){const g=this._renderer,I=g.autoClear;g.autoClear=!1;for(let B=1;B<this._lodPlanes.length;B++){const Q=Math.sqrt(this._sigmas[B]*this._sigmas[B]-this._sigmas[B-1]*this._sigmas[B-1]),E=_e[(B-1)%_e.length];this._blur(A,B-1,B,Q,E)}g.autoClear=I}_blur(A,g,I,B,Q){const E=this._pingPongRenderTarget;this._halfBlur(A,E,g,I,B,"latitudinal",Q),this._halfBlur(E,A,I,I,B,"longitudinal",Q)}_halfBlur(A,g,I,B,Q,E,i){const t=this._renderer,e=this._blurMaterial;E!=="latitudinal"&&E!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const s=new O(this._lodPlanes[B],e),n=e.uniforms,r=this._sizeLods[I]-1,h=isFinite(Q)?Math.PI/(2*r):2*Math.PI/(2*KQ-1),w=Q/h,D=isFinite(Q)?1+Math.floor(3*w):KQ;D>KQ&&console.warn(`sigmaRadians, ${Q}, is too large and will clip, as it requested ${D} samples when the maximum is set to ${KQ}`);const u=[];let R=0;for(let N=0;N<KQ;++N){const J=N/w,T=Math.exp(-J*J/2);u.push(T),N===0?R+=T:N<D&&(R+=2*T)}for(let N=0;N<u.length;N++)u[N]=u[N]/R;n.envMap.value=A.texture,n.samples.value=D,n.weights.value=u,n.latitudinal.value=E==="latitudinal",i&&(n.poleAxis.value=i);const{_lodMax:y}=this;n.dTheta.value=h,n.mipInt.value=y-I;const F=this._sizeLods[B];Wi(g,3*F*(B>y-rE?B-y+rE:0),4*(this._cubeSize-F),3*F,2*F),t.setRenderTarget(g),t.render(s,xt)}}function je(C,A,g){const I=new VB(C,A,g);return I.texture.mapping=306,I.texture.name="PMREM.cubeUv",I.scissorTest=!0,I}function Wi(C,A,g,I,B){C.viewport.set(A,g,I,B),C.scissor.set(A,g,I,B)}function ze(){return new gg({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Tt(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function $e(){return new gg({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Tt(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Tt(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Rs(C){let A=new WeakMap,g=null;function I(B){const Q=B.target;Q.removeEventListener("dispose",I);const E=A.get(Q);E!==void 0&&(A.delete(Q),E.dispose())}return{get:function(B){if(B&&B.isTexture){const Q=B.mapping,E=Q===303||Q===304,i=Q===301||Q===302;if(E||i){if(B.isRenderTargetTexture&&B.needsPMREMUpdate===!0){B.needsPMREMUpdate=!1;let t=A.get(B);return g===null&&(g=new Wt(C)),t=E?g.fromEquirectangular(B,t):g.fromCubemap(B,t),A.set(B,t),t.texture}if(A.has(B))return A.get(B).texture;{const t=B.image;if(E&&t&&t.height>0||i&&t&&function(e){let s=0;const n=6;for(let r=0;r<n;r++)e[r]!==void 0&&s++;return s===n}(t)){g===null&&(g=new Wt(C));const e=E?g.fromEquirectangular(B):g.fromCubemap(B);return A.set(B,e),B.addEventListener("dispose",I),e.texture}return null}}}return B},dispose:function(){A=new WeakMap,g!==null&&(g.dispose(),g=null)}}}function Ms(C){const A={};function g(I){if(A[I]!==void 0)return A[I];let B;switch(I){case"WEBGL_depth_texture":B=C.getExtension("WEBGL_depth_texture")||C.getExtension("MOZ_WEBGL_depth_texture")||C.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":B=C.getExtension("EXT_texture_filter_anisotropic")||C.getExtension("MOZ_EXT_texture_filter_anisotropic")||C.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":B=C.getExtension("WEBGL_compressed_texture_s3tc")||C.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":B=C.getExtension("WEBGL_compressed_texture_pvrtc")||C.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:B=C.getExtension(I)}return A[I]=B,B}return{has:function(I){return g(I)!==null},init:function(I){I.isWebGL2?g("EXT_color_buffer_float"):(g("WEBGL_depth_texture"),g("OES_texture_float"),g("OES_texture_half_float"),g("OES_texture_half_float_linear"),g("OES_standard_derivatives"),g("OES_element_index_uint"),g("OES_vertex_array_object"),g("ANGLE_instanced_arrays")),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture")},get:function(I){const B=g(I);return B===null&&console.warn("THREE.WebGLRenderer: "+I+" extension not supported."),B}}}function Ss(C,A,g,I){const B={},Q=new WeakMap;function E(t){const e=t.target;e.index!==null&&A.remove(e.index);for(const n in e.attributes)A.remove(e.attributes[n]);e.removeEventListener("dispose",E),delete B[e.id];const s=Q.get(e);s&&(A.remove(s),Q.delete(e)),I.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,g.memory.geometries--}function i(t){const e=[],s=t.index,n=t.attributes.position;let r=0;if(s!==null){const D=s.array;r=s.version;for(let u=0,R=D.length;u<R;u+=3){const y=D[u+0],F=D[u+1],N=D[u+2];e.push(y,F,F,N,N,y)}}else{const D=n.array;r=n.version;for(let u=0,R=D.length/3-1;u<R;u+=3){const y=u+0,F=u+1,N=u+2;e.push(y,F,F,N,N,y)}}const h=new(VC(e)?eE:wQ)(e,1);h.version=r;const w=Q.get(t);w&&A.remove(w),Q.set(t,h)}return{get:function(t,e){return B[e.id]===!0||(e.addEventListener("dispose",E),B[e.id]=!0,g.memory.geometries++),e},update:function(t){const e=t.attributes;for(const n in e)A.update(e[n],34962);const s=t.morphAttributes;for(const n in s){const r=s[n];for(let h=0,w=r.length;h<w;h++)A.update(r[h],34962)}},getWireframeAttribute:function(t){const e=Q.get(t);if(e){const s=t.index;s!==null&&e.version<s.version&&i(t)}else i(t);return Q.get(t)}}}function ps(C,A,g,I){const B=I.isWebGL2;let Q,E,i;this.setMode=function(t){Q=t},this.setIndex=function(t){E=t.type,i=t.bytesPerElement},this.render=function(t,e){C.drawElements(Q,e,E,t*i),g.update(e,Q,1)},this.renderInstances=function(t,e,s){if(s===0)return;let n,r;if(B)n=C,r="drawElementsInstanced";else if(n=A.get("ANGLE_instanced_arrays"),r="drawElementsInstancedANGLE",n===null)return void console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");n[r](Q,e,E,t*i,s),g.update(e,Q,s)}}function Fs(C){const A={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:A,programs:null,autoReset:!0,reset:function(){A.frame++,A.calls=0,A.triangles=0,A.points=0,A.lines=0},update:function(g,I,B){switch(A.calls++,I){case 4:A.triangles+=B*(g/3);break;case 1:A.lines+=B*(g/2);break;case 3:A.lines+=B*(g-1);break;case 2:A.lines+=B*g;break;case 0:A.points+=B*g;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",I)}}}}function fs(C,A){return C[0]-A[0]}function ms(C,A){return Math.abs(A[1])-Math.abs(C[1])}function Ns(C,A,g){const I={},B=new Float32Array(8),Q=new WeakMap,E=new oI,i=[];for(let t=0;t<8;t++)i[t]=[t,0];return{update:function(t,e,s){const n=t.morphTargetInfluences;if(A.isWebGL2===!0){const h=e.morphAttributes.position||e.morphAttributes.normal||e.morphAttributes.color,w=h!==void 0?h.length:0;let D=Q.get(e);if(D===void 0||D.count!==w){let UA=function(){RA.dispose(),Q.delete(e),e.removeEventListener("dispose",UA)};var r=UA;D!==void 0&&D.texture.dispose();const y=e.morphAttributes.position!==void 0,F=e.morphAttributes.normal!==void 0,N=e.morphAttributes.color!==void 0,J=e.morphAttributes.position||[],T=e.morphAttributes.normal||[],$=e.morphAttributes.color||[];let IA=0;y===!0&&(IA=1),F===!0&&(IA=2),N===!0&&(IA=3);let nA=e.attributes.position.count*IA,cA=1;nA>A.maxTextureSize&&(cA=Math.ceil(nA/A.maxTextureSize),nA=A.maxTextureSize);const gA=new Float32Array(nA*cA*4*w),RA=new eQ(gA,nA,cA,w);RA.type=1015,RA.needsUpdate=!0;const xA=4*IA;for(let zA=0;zA<w;zA++){const jA=J[zA],ig=T[zA],tg=$[zA],Ig=nA*cA*4*zA;for(let uA=0;uA<jA.count;uA++){const pA=uA*xA;y===!0&&(E.fromBufferAttribute(jA,uA),gA[Ig+pA+0]=E.x,gA[Ig+pA+1]=E.y,gA[Ig+pA+2]=E.z,gA[Ig+pA+3]=0),F===!0&&(E.fromBufferAttribute(ig,uA),gA[Ig+pA+4]=E.x,gA[Ig+pA+5]=E.y,gA[Ig+pA+6]=E.z,gA[Ig+pA+7]=0),N===!0&&(E.fromBufferAttribute(tg,uA),gA[Ig+pA+8]=E.x,gA[Ig+pA+9]=E.y,gA[Ig+pA+10]=E.z,gA[Ig+pA+11]=tg.itemSize===4?E.w:1)}}D={count:w,texture:RA,size:new HA(nA,cA)},Q.set(e,D),e.addEventListener("dispose",UA)}let u=0;for(let y=0;y<n.length;y++)u+=n[y];const R=e.morphTargetsRelative?1:1-u;s.getUniforms().setValue(C,"morphTargetBaseInfluence",R),s.getUniforms().setValue(C,"morphTargetInfluences",n),s.getUniforms().setValue(C,"morphTargetsTexture",D.texture,g),s.getUniforms().setValue(C,"morphTargetsTextureSize",D.size)}else{const h=n===void 0?0:n.length;let w=I[e.id];if(w===void 0||w.length!==h){w=[];for(let F=0;F<h;F++)w[F]=[F,0];I[e.id]=w}for(let F=0;F<h;F++){const N=w[F];N[0]=F,N[1]=n[F]}w.sort(ms);for(let F=0;F<8;F++)F<h&&w[F][1]?(i[F][0]=w[F][0],i[F][1]=w[F][1]):(i[F][0]=Number.MAX_SAFE_INTEGER,i[F][1]=0);i.sort(fs);const D=e.morphAttributes.position,u=e.morphAttributes.normal;let R=0;for(let F=0;F<8;F++){const N=i[F],J=N[0],T=N[1];J!==Number.MAX_SAFE_INTEGER&&T?(D&&e.getAttribute("morphTarget"+F)!==D[J]&&e.setAttribute("morphTarget"+F,D[J]),u&&e.getAttribute("morphNormal"+F)!==u[J]&&e.setAttribute("morphNormal"+F,u[J]),B[F]=T,R+=T):(D&&e.hasAttribute("morphTarget"+F)===!0&&e.deleteAttribute("morphTarget"+F),u&&e.hasAttribute("morphNormal"+F)===!0&&e.deleteAttribute("morphNormal"+F),B[F]=0)}const y=e.morphTargetsRelative?1:1-R;s.getUniforms().setValue(C,"morphTargetBaseInfluence",y),s.getUniforms().setValue(C,"morphTargetInfluences",B)}}}}function ks(C,A,g,I){let B=new WeakMap;function Q(E){const i=E.target;i.removeEventListener("dispose",Q),g.remove(i.instanceMatrix),i.instanceColor!==null&&g.remove(i.instanceColor)}return{update:function(E){const i=I.render.frame,t=E.geometry,e=A.get(E,t);return B.get(e)!==i&&(A.update(e),B.set(e,i)),E.isInstancedMesh&&(E.hasEventListener("dispose",Q)===!1&&E.addEventListener("dispose",Q),g.update(E.instanceMatrix,34962),E.instanceColor!==null&&g.update(E.instanceColor,34962)),e},dispose:function(){B=new WeakMap}}}const Ao=new JI,go=new eQ,Io=new mQ,Bo=new cg,Co=[],Qo=[],Eo=new Float32Array(16),io=new Float32Array(9),to=new Float32Array(4);function hE(C,A,g){const I=C[0];if(I<=0||I>0)return C;const B=A*g;let Q=Co[B];if(Q===void 0&&(Q=new Float32Array(B),Co[B]=Q),A!==0){I.toArray(Q,0);for(let E=1,i=0;E!==A;++E)i+=g,C[E].toArray(Q,i)}return Q}function CB(C,A){if(C.length!==A.length)return!1;for(let g=0,I=C.length;g<I;g++)if(C[g]!==A[g])return!1;return!0}function QB(C,A){for(let g=0,I=A.length;g<I;g++)C[g]=A[g]}function Ti(C,A){let g=Qo[A];g===void 0&&(g=new Int32Array(A),Qo[A]=g);for(let I=0;I!==A;++I)g[I]=C.allocateTextureUnit();return g}function Us(C,A){const g=this.cache;g[0]!==A&&(C.uniform1f(this.addr,A),g[0]=A)}function Ls(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(C.uniform2f(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(CB(g,A))return;C.uniform2fv(this.addr,A),QB(g,A)}}function Js(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(C.uniform3f(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else if(A.r!==void 0)g[0]===A.r&&g[1]===A.g&&g[2]===A.b||(C.uniform3f(this.addr,A.r,A.g,A.b),g[0]=A.r,g[1]=A.g,g[2]=A.b);else{if(CB(g,A))return;C.uniform3fv(this.addr,A),QB(g,A)}}function Ks(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(C.uniform4f(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(CB(g,A))return;C.uniform4fv(this.addr,A),QB(g,A)}}function Ys(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(CB(g,A))return;C.uniformMatrix2fv(this.addr,!1,A),QB(g,A)}else{if(CB(g,I))return;to.set(I),C.uniformMatrix2fv(this.addr,!1,to),QB(g,I)}}function Hs(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(CB(g,A))return;C.uniformMatrix3fv(this.addr,!1,A),QB(g,A)}else{if(CB(g,I))return;io.set(I),C.uniformMatrix3fv(this.addr,!1,io),QB(g,I)}}function bs(C,A){const g=this.cache,I=A.elements;if(I===void 0){if(CB(g,A))return;C.uniformMatrix4fv(this.addr,!1,A),QB(g,A)}else{if(CB(g,I))return;Eo.set(I),C.uniformMatrix4fv(this.addr,!1,Eo),QB(g,I)}}function qs(C,A){const g=this.cache;g[0]!==A&&(C.uniform1i(this.addr,A),g[0]=A)}function xs(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(C.uniform2i(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(CB(g,A))return;C.uniform2iv(this.addr,A),QB(g,A)}}function vs(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(C.uniform3i(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(CB(g,A))return;C.uniform3iv(this.addr,A),QB(g,A)}}function Ws(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(C.uniform4i(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(CB(g,A))return;C.uniform4iv(this.addr,A),QB(g,A)}}function Ts(C,A){const g=this.cache;g[0]!==A&&(C.uniform1ui(this.addr,A),g[0]=A)}function Zs(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y||(C.uniform2ui(this.addr,A.x,A.y),g[0]=A.x,g[1]=A.y);else{if(CB(g,A))return;C.uniform2uiv(this.addr,A),QB(g,A)}}function Os(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z||(C.uniform3ui(this.addr,A.x,A.y,A.z),g[0]=A.x,g[1]=A.y,g[2]=A.z);else{if(CB(g,A))return;C.uniform3uiv(this.addr,A),QB(g,A)}}function Vs(C,A){const g=this.cache;if(A.x!==void 0)g[0]===A.x&&g[1]===A.y&&g[2]===A.z&&g[3]===A.w||(C.uniform4ui(this.addr,A.x,A.y,A.z,A.w),g[0]=A.x,g[1]=A.y,g[2]=A.z,g[3]=A.w);else{if(CB(g,A))return;C.uniform4uiv(this.addr,A),QB(g,A)}}function Ps(C,A,g){const I=this.cache,B=g.allocateTextureUnit();I[0]!==B&&(C.uniform1i(this.addr,B),I[0]=B),g.setTexture2D(A||Ao,B)}function Xs(C,A,g){const I=this.cache,B=g.allocateTextureUnit();I[0]!==B&&(C.uniform1i(this.addr,B),I[0]=B),g.setTexture3D(A||Io,B)}function _s(C,A,g){const I=this.cache,B=g.allocateTextureUnit();I[0]!==B&&(C.uniform1i(this.addr,B),I[0]=B),g.setTextureCube(A||Bo,B)}function js(C,A,g){const I=this.cache,B=g.allocateTextureUnit();I[0]!==B&&(C.uniform1i(this.addr,B),I[0]=B),g.setTexture2DArray(A||go,B)}function zs(C,A){C.uniform1fv(this.addr,A)}function $s(C,A){const g=hE(A,this.size,2);C.uniform2fv(this.addr,g)}function Ar(C,A){const g=hE(A,this.size,3);C.uniform3fv(this.addr,g)}function gr(C,A){const g=hE(A,this.size,4);C.uniform4fv(this.addr,g)}function Ir(C,A){const g=hE(A,this.size,4);C.uniformMatrix2fv(this.addr,!1,g)}function Br(C,A){const g=hE(A,this.size,9);C.uniformMatrix3fv(this.addr,!1,g)}function Cr(C,A){const g=hE(A,this.size,16);C.uniformMatrix4fv(this.addr,!1,g)}function Qr(C,A){C.uniform1iv(this.addr,A)}function Er(C,A){C.uniform2iv(this.addr,A)}function ir(C,A){C.uniform3iv(this.addr,A)}function tr(C,A){C.uniform4iv(this.addr,A)}function er(C,A){C.uniform1uiv(this.addr,A)}function or(C,A){C.uniform2uiv(this.addr,A)}function ar(C,A){C.uniform3uiv(this.addr,A)}function sr(C,A){C.uniform4uiv(this.addr,A)}function rr(C,A,g){const I=this.cache,B=A.length,Q=Ti(g,B);CB(I,Q)||(C.uniform1iv(this.addr,Q),QB(I,Q));for(let E=0;E!==B;++E)g.setTexture2D(A[E]||Ao,Q[E])}function nr(C,A,g){const I=this.cache,B=A.length,Q=Ti(g,B);CB(I,Q)||(C.uniform1iv(this.addr,Q),QB(I,Q));for(let E=0;E!==B;++E)g.setTexture3D(A[E]||Io,Q[E])}function hr(C,A,g){const I=this.cache,B=A.length,Q=Ti(g,B);CB(I,Q)||(C.uniform1iv(this.addr,Q),QB(I,Q));for(let E=0;E!==B;++E)g.setTextureCube(A[E]||Bo,Q[E])}function cr(C,A,g){const I=this.cache,B=A.length,Q=Ti(g,B);CB(I,Q)||(C.uniform1iv(this.addr,Q),QB(I,Q));for(let E=0;E!==B;++E)g.setTexture2DArray(A[E]||go,Q[E])}class Dr{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.setValue=function(B){switch(B){case 5126:return Us;case 35664:return Ls;case 35665:return Js;case 35666:return Ks;case 35674:return Ys;case 35675:return Hs;case 35676:return bs;case 5124:case 35670:return qs;case 35667:case 35671:return xs;case 35668:case 35672:return vs;case 35669:case 35673:return Ws;case 5125:return Ts;case 36294:return Zs;case 36295:return Os;case 36296:return Vs;case 35678:case 36198:case 36298:case 36306:case 35682:return Ps;case 35679:case 36299:case 36307:return Xs;case 35680:case 36300:case 36308:case 36293:return _s;case 36289:case 36303:case 36311:case 36292:return js}}(g.type)}}class lr{constructor(A,g,I){this.id=A,this.addr=I,this.cache=[],this.size=g.size,this.setValue=function(B){switch(B){case 5126:return zs;case 35664:return $s;case 35665:return Ar;case 35666:return gr;case 35674:return Ir;case 35675:return Br;case 35676:return Cr;case 5124:case 35670:return Qr;case 35667:case 35671:return Er;case 35668:case 35672:return ir;case 35669:case 35673:return tr;case 5125:return er;case 36294:return or;case 36295:return ar;case 36296:return sr;case 35678:case 36198:case 36298:case 36306:case 35682:return rr;case 35679:case 36299:case 36307:return nr;case 35680:case 36300:case 36308:case 36293:return hr;case 36289:case 36303:case 36311:case 36292:return cr}}(g.type)}}class wr{constructor(A){this.id=A,this.seq=[],this.map={}}setValue(A,g,I){const B=this.seq;for(let Q=0,E=B.length;Q!==E;++Q){const i=B[Q];i.setValue(A,g[i.id],I)}}}const Zt=/(\w+)(\])?(\[|\.)?/g;function eo(C,A){C.seq.push(A),C.map[A.id]=A}function dr(C,A,g){const I=C.name,B=I.length;for(Zt.lastIndex=0;;){const Q=Zt.exec(I),E=Zt.lastIndex;let i=Q[1];const t=Q[2]==="]",e=Q[3];if(t&&(i|=0),e===void 0||e==="["&&E+2===B){eo(g,e===void 0?new Dr(i,C,A):new lr(i,C,A));break}{let s=g.map[i];s===void 0&&(s=new wr(i),eo(g,s)),g=s}}}class Zi{constructor(A,g){this.seq=[],this.map={};const I=A.getProgramParameter(g,35718);for(let B=0;B<I;++B){const Q=A.getActiveUniform(g,B);dr(Q,A.getUniformLocation(g,Q.name),this)}}setValue(A,g,I,B){const Q=this.map[g];Q!==void 0&&Q.setValue(A,I,B)}setOptional(A,g,I){const B=g[I];B!==void 0&&this.setValue(A,I,B)}static upload(A,g,I,B){for(let Q=0,E=g.length;Q!==E;++Q){const i=g[Q],t=I[i.id];t.needsUpdate!==!1&&i.setValue(A,t.value,B)}}static seqWithValue(A,g){const I=[];for(let B=0,Q=A.length;B!==Q;++B){const E=A[B];E.id in g&&I.push(E)}return I}}function oo(C,A,g){const I=C.createShader(A);return C.shaderSource(I,g),C.compileShader(I),I}let yr=0;function ao(C,A,g){const I=C.getShaderParameter(A,35713),B=C.getShaderInfoLog(A).trim();if(I&&B==="")return"";const Q=/ERROR: 0:(\d+)/.exec(B);if(Q){const E=parseInt(Q[1]);return g.toUpperCase()+`

`+B+`

`+function(i,t){const e=i.split(`
`),s=[],n=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let h=n;h<r;h++){const w=h+1;s.push(`${w===t?">":" "} ${w}: ${e[h]}`)}return s.join(`
`)}(C.getShaderSource(A),E)}return B}function ur(C,A){const g=function(I){switch(I){case 3e3:return["Linear","( value )"];case 3001:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",I),["Linear","( value )"]}}(A);return"vec4 "+C+"( vec4 value ) { return LinearTo"+g[0]+g[1]+"; }"}function Gr(C,A){let g;switch(A){case 1:g="Linear";break;case 2:g="Reinhard";break;case 3:g="OptimizedCineon";break;case 4:g="ACESFilmic";break;case 5:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",A),g="Linear"}return"vec3 "+C+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function XE(C){return C!==""}function so(C,A){const g=A.numSpotLightShadows+A.numSpotLightMaps-A.numSpotLightShadowsWithMaps;return C.replace(/NUM_DIR_LIGHTS/g,A.numDirLights).replace(/NUM_SPOT_LIGHTS/g,A.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,A.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,A.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,A.numPointLights).replace(/NUM_HEMI_LIGHTS/g,A.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,A.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,A.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,A.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,A.numPointLightShadows)}function ro(C,A){return C.replace(/NUM_CLIPPING_PLANES/g,A.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,A.numClippingPlanes-A.numClipIntersection)}const Rr=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ot(C){return C.replace(Rr,Mr)}function Mr(C,A){const g=Wg[A];if(g===void 0)throw new Error("Can not resolve #include <"+A+">");return Ot(g)}const Sr=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function no(C){return C.replace(Sr,pr)}function pr(C,A,g,I){let B="";for(let Q=parseInt(A);Q<parseInt(g);Q++)B+=I.replace(/\[\s*i\s*\]/g,"[ "+Q+" ]").replace(/UNROLLED_LOOP_INDEX/g,Q);return B}function ho(C){let A="precision "+C.precision+` float;
precision `+C.precision+" int;";return C.precision==="highp"?A+=`
#define HIGH_PRECISION`:C.precision==="mediump"?A+=`
#define MEDIUM_PRECISION`:C.precision==="lowp"&&(A+=`
#define LOW_PRECISION`),A}function Fr(C,A,g,I){const B=C.getContext(),Q=g.defines;let E=g.vertexShader,i=g.fragmentShader;const t=function(IA){let nA="SHADOWMAP_TYPE_BASIC";return IA.shadowMapType===1?nA="SHADOWMAP_TYPE_PCF":IA.shadowMapType===2?nA="SHADOWMAP_TYPE_PCF_SOFT":IA.shadowMapType===3&&(nA="SHADOWMAP_TYPE_VSM"),nA}(g),e=function(IA){let nA="ENVMAP_TYPE_CUBE";if(IA.envMap)switch(IA.envMapMode){case 301:case 302:nA="ENVMAP_TYPE_CUBE";break;case 306:nA="ENVMAP_TYPE_CUBE_UV"}return nA}(g),s=function(IA){let nA="ENVMAP_MODE_REFLECTION";return IA.envMap&&IA.envMapMode===302&&(nA="ENVMAP_MODE_REFRACTION"),nA}(g),n=function(IA){let nA="ENVMAP_BLENDING_NONE";if(IA.envMap)switch(IA.combine){case 0:nA="ENVMAP_BLENDING_MULTIPLY";break;case 1:nA="ENVMAP_BLENDING_MIX";break;case 2:nA="ENVMAP_BLENDING_ADD"}return nA}(g),r=function(IA){const nA=IA.envMapCubeUVHeight;if(nA===null)return null;const cA=Math.log2(nA)-2,gA=1/nA;return{texelWidth:1/(3*Math.max(Math.pow(2,cA),112)),texelHeight:gA,maxMip:cA}}(g),h=g.isWebGL2?"":function(IA){return[IA.extensionDerivatives||IA.envMapCubeUVHeight||IA.bumpMap||IA.tangentSpaceNormalMap||IA.clearcoatNormalMap||IA.flatShading||IA.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(IA.extensionFragDepth||IA.logarithmicDepthBuffer)&&IA.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",IA.extensionDrawBuffers&&IA.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(IA.extensionShaderTextureLOD||IA.envMap||IA.transmission)&&IA.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(XE).join(`
`)}(g),w=function(IA){const nA=[];for(const cA in IA){const gA=IA[cA];gA!==!1&&nA.push("#define "+cA+" "+gA)}return nA.join(`
`)}(Q),D=B.createProgram();let u,R,y=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(u=[w].filter(XE).join(`
`),u.length>0&&(u+=`
`),R=[h,w].filter(XE).join(`
`),R.length>0&&(R+=`
`)):(u=[ho(g),"#define SHADER_NAME "+g.shaderName,w,g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.supportsVertexTextures?"#define VERTEX_TEXTURES":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+s:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.displacementMap&&g.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors&&g.isWebGL2?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0&&g.isWebGL2?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+t:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(XE).join(`
`),R=[h,ho(g),"#define SHADER_NAME "+g.shaderName,w,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+e:"",g.envMap?"#define "+s:"",g.envMap?"#define "+n:"",r?"#define CUBEUV_TEXEL_WIDTH "+r.texelWidth:"",r?"#define CUBEUV_TEXEL_HEIGHT "+r.texelHeight:"",r?"#define CUBEUV_MAX_MIP "+r.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMap&&g.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",g.normalMap&&g.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",g.specularColorMap?"#define USE_SPECULARCOLORMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEENCOLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.vertexTangents?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUvs?"#define USE_UV":"",g.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+t:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",g.logarithmicDepthBuffer&&g.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==0?"#define TONE_MAPPING":"",g.toneMapping!==0?Wg.tonemapping_pars_fragment:"",g.toneMapping!==0?Gr("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",Wg.encodings_pars_fragment,ur("linearToOutputTexel",g.outputEncoding),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(XE).join(`
`)),E=Ot(E),E=so(E,g),E=ro(E,g),i=Ot(i),i=so(i,g),i=ro(i,g),E=no(E),i=no(i),g.isWebGL2&&g.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,u=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,R=["#define varying in",g.glslVersion===qA?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===qA?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+R);const F=y+R+i,N=oo(B,35633,y+u+E),J=oo(B,35632,F);if(B.attachShader(D,N),B.attachShader(D,J),g.index0AttributeName!==void 0?B.bindAttribLocation(D,0,g.index0AttributeName):g.morphTargets===!0&&B.bindAttribLocation(D,0,"position"),B.linkProgram(D),C.debug.checkShaderErrors){const IA=B.getProgramInfoLog(D).trim(),nA=B.getShaderInfoLog(N).trim(),cA=B.getShaderInfoLog(J).trim();let gA=!0,RA=!0;if(B.getProgramParameter(D,35714)===!1){gA=!1;const xA=ao(B,N,"vertex"),UA=ao(B,J,"fragment");console.error("THREE.WebGLProgram: Shader Error "+B.getError()+" - VALIDATE_STATUS "+B.getProgramParameter(D,35715)+`

Program Info Log: `+IA+`
`+xA+`
`+UA)}else IA!==""?console.warn("THREE.WebGLProgram: Program Info Log:",IA):nA!==""&&cA!==""||(RA=!1);RA&&(this.diagnostics={runnable:gA,programLog:IA,vertexShader:{log:nA,prefix:u},fragmentShader:{log:cA,prefix:R}})}let T,$;return B.deleteShader(N),B.deleteShader(J),this.getUniforms=function(){return T===void 0&&(T=new Zi(B,D)),T},this.getAttributes=function(){return $===void 0&&($=function(IA,nA){const cA={},gA=IA.getProgramParameter(nA,35721);for(let RA=0;RA<gA;RA++){const xA=IA.getActiveAttrib(nA,RA),UA=xA.name;let zA=1;xA.type===35674&&(zA=2),xA.type===35675&&(zA=3),xA.type===35676&&(zA=4),cA[UA]={type:xA.type,location:IA.getAttribLocation(nA,UA),locationSize:zA}}return cA}(B,D)),$},this.destroy=function(){I.releaseStatesOfProgram(this),B.deleteProgram(D),this.program=void 0},this.name=g.shaderName,this.id=yr++,this.cacheKey=A,this.usedTimes=1,this.program=D,this.vertexShader=N,this.fragmentShader=J,this}let fr=0;class mr{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(A){const g=A.vertexShader,I=A.fragmentShader,B=this._getShaderStage(g),Q=this._getShaderStage(I),E=this._getShaderCacheForMaterial(A);return E.has(B)===!1&&(E.add(B),B.usedTimes++),E.has(Q)===!1&&(E.add(Q),Q.usedTimes++),this}remove(A){const g=this.materialCache.get(A);for(const I of g)I.usedTimes--,I.usedTimes===0&&this.shaderCache.delete(I.code);return this.materialCache.delete(A),this}getVertexShaderID(A){return this._getShaderStage(A.vertexShader).id}getFragmentShaderID(A){return this._getShaderStage(A.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(A){const g=this.materialCache;let I=g.get(A);return I===void 0&&(I=new Set,g.set(A,I)),I}_getShaderStage(A){const g=this.shaderCache;let I=g.get(A);return I===void 0&&(I=new Nr(A),g.set(A,I)),I}}class Nr{constructor(A){this.id=fr++,this.code=A,this.usedTimes=0}}function kr(C,A,g,I,B,Q,E){const i=new KC,t=new mr,e=[],s=B.isWebGL2,n=B.logarithmicDepthBuffer,r=B.vertexTextures;let h=B.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};return{getParameters:function(D,u,R,y,F){const N=y.fog,J=F.geometry,T=D.isMeshStandardMaterial?y.environment:null,$=(D.isMeshStandardMaterial?g:A).get(D.envMap||T),IA=$&&$.mapping===306?$.image.height:null,nA=w[D.type];D.precision!==null&&(h=B.getMaxPrecision(D.precision),h!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",h,"instead."));const cA=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,gA=cA!==void 0?cA.length:0;let RA,xA,UA,zA,jA=0;if(J.morphAttributes.position!==void 0&&(jA=1),J.morphAttributes.normal!==void 0&&(jA=2),J.morphAttributes.color!==void 0&&(jA=3),nA){const pA=uC[nA];RA=pA.vertexShader,xA=pA.fragmentShader}else RA=D.vertexShader,xA=D.fragmentShader,t.update(D),UA=t.getVertexShaderID(D),zA=t.getFragmentShaderID(D);const ig=C.getRenderTarget(),tg=D.alphaTest>0,Ig=D.clearcoat>0,uA=D.iridescence>0;return{isWebGL2:s,shaderID:nA,shaderName:D.type,vertexShader:RA,fragmentShader:xA,defines:D.defines,customVertexShaderID:UA,customFragmentShaderID:zA,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:h,instancing:F.isInstancedMesh===!0,instancingColor:F.isInstancedMesh===!0&&F.instanceColor!==null,supportsVertexTextures:r,outputEncoding:ig===null?C.outputEncoding:ig.isXRRenderTarget===!0?ig.texture.encoding:3e3,map:!!D.map,matcap:!!D.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:IA,lightMap:!!D.lightMap,aoMap:!!D.aoMap,emissiveMap:!!D.emissiveMap,bumpMap:!!D.bumpMap,normalMap:!!D.normalMap,objectSpaceNormalMap:D.normalMapType===1,tangentSpaceNormalMap:D.normalMapType===0,decodeVideoTexture:!!D.map&&D.map.isVideoTexture===!0&&D.map.encoding===3001,clearcoat:Ig,clearcoatMap:Ig&&!!D.clearcoatMap,clearcoatRoughnessMap:Ig&&!!D.clearcoatRoughnessMap,clearcoatNormalMap:Ig&&!!D.clearcoatNormalMap,iridescence:uA,iridescenceMap:uA&&!!D.iridescenceMap,iridescenceThicknessMap:uA&&!!D.iridescenceThicknessMap,displacementMap:!!D.displacementMap,roughnessMap:!!D.roughnessMap,metalnessMap:!!D.metalnessMap,specularMap:!!D.specularMap,specularIntensityMap:!!D.specularIntensityMap,specularColorMap:!!D.specularColorMap,opaque:D.transparent===!1&&D.blending===1,alphaMap:!!D.alphaMap,alphaTest:tg,gradientMap:!!D.gradientMap,sheen:D.sheen>0,sheenColorMap:!!D.sheenColorMap,sheenRoughnessMap:!!D.sheenRoughnessMap,transmission:D.transmission>0,transmissionMap:!!D.transmissionMap,thicknessMap:!!D.thicknessMap,combine:D.combine,vertexTangents:!!D.normalMap&&!!J.attributes.tangent,vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,vertexUvs:!!(D.map||D.bumpMap||D.normalMap||D.specularMap||D.alphaMap||D.emissiveMap||D.roughnessMap||D.metalnessMap||D.clearcoatMap||D.clearcoatRoughnessMap||D.clearcoatNormalMap||D.iridescenceMap||D.iridescenceThicknessMap||D.displacementMap||D.transmissionMap||D.thicknessMap||D.specularIntensityMap||D.specularColorMap||D.sheenColorMap||D.sheenRoughnessMap),uvsVertexOnly:!(D.map||D.bumpMap||D.normalMap||D.specularMap||D.alphaMap||D.emissiveMap||D.roughnessMap||D.metalnessMap||D.clearcoatNormalMap||D.iridescenceMap||D.iridescenceThicknessMap||D.transmission>0||D.transmissionMap||D.thicknessMap||D.specularIntensityMap||D.specularColorMap||D.sheen>0||D.sheenColorMap||D.sheenRoughnessMap||!D.displacementMap),fog:!!N,useFog:D.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:!!D.flatShading,sizeAttenuation:D.sizeAttenuation,logarithmicDepthBuffer:n,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:gA,morphTextureStride:jA,numDirLights:u.directional.length,numPointLights:u.point.length,numSpotLights:u.spot.length,numSpotLightMaps:u.spotLightMap.length,numRectAreaLights:u.rectArea.length,numHemiLights:u.hemi.length,numDirLightShadows:u.directionalShadowMap.length,numPointLightShadows:u.pointShadowMap.length,numSpotLightShadows:u.spotShadowMap.length,numSpotLightShadowsWithMaps:u.numSpotLightShadowsWithMaps,numClippingPlanes:E.numPlanes,numClipIntersection:E.numIntersection,dithering:D.dithering,shadowMapEnabled:C.shadowMap.enabled&&R.length>0,shadowMapType:C.shadowMap.type,toneMapping:D.toneMapped?C.toneMapping:0,useLegacyLights:C.useLegacyLights,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===2,flipSided:D.side===1,useDepthPacking:!!D.depthPacking,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionDerivatives:D.extensions&&D.extensions.derivatives,extensionFragDepth:D.extensions&&D.extensions.fragDepth,extensionDrawBuffers:D.extensions&&D.extensions.drawBuffers,extensionShaderTextureLOD:D.extensions&&D.extensions.shaderTextureLOD,rendererExtensionFragDepth:s||I.has("EXT_frag_depth"),rendererExtensionDrawBuffers:s||I.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:s||I.has("EXT_shader_texture_lod"),customProgramCacheKey:D.customProgramCacheKey()}},getProgramCacheKey:function(D){const u=[];if(D.shaderID?u.push(D.shaderID):(u.push(D.customVertexShaderID),u.push(D.customFragmentShaderID)),D.defines!==void 0)for(const R in D.defines)u.push(R),u.push(D.defines[R]);return D.isRawShaderMaterial===!1&&(function(R,y){R.push(y.precision),R.push(y.outputEncoding),R.push(y.envMapMode),R.push(y.envMapCubeUVHeight),R.push(y.combine),R.push(y.vertexUvs),R.push(y.fogExp2),R.push(y.sizeAttenuation),R.push(y.morphTargetsCount),R.push(y.morphAttributeCount),R.push(y.numDirLights),R.push(y.numPointLights),R.push(y.numSpotLights),R.push(y.numSpotLightMaps),R.push(y.numHemiLights),R.push(y.numRectAreaLights),R.push(y.numDirLightShadows),R.push(y.numPointLightShadows),R.push(y.numSpotLightShadows),R.push(y.numSpotLightShadowsWithMaps),R.push(y.shadowMapType),R.push(y.toneMapping),R.push(y.numClippingPlanes),R.push(y.numClipIntersection),R.push(y.depthPacking)}(u,D),function(R,y){i.disableAll(),y.isWebGL2&&i.enable(0),y.supportsVertexTextures&&i.enable(1),y.instancing&&i.enable(2),y.instancingColor&&i.enable(3),y.map&&i.enable(4),y.matcap&&i.enable(5),y.envMap&&i.enable(6),y.lightMap&&i.enable(7),y.aoMap&&i.enable(8),y.emissiveMap&&i.enable(9),y.bumpMap&&i.enable(10),y.normalMap&&i.enable(11),y.objectSpaceNormalMap&&i.enable(12),y.tangentSpaceNormalMap&&i.enable(13),y.clearcoat&&i.enable(14),y.clearcoatMap&&i.enable(15),y.clearcoatRoughnessMap&&i.enable(16),y.clearcoatNormalMap&&i.enable(17),y.iridescence&&i.enable(18),y.iridescenceMap&&i.enable(19),y.iridescenceThicknessMap&&i.enable(20),y.displacementMap&&i.enable(21),y.specularMap&&i.enable(22),y.roughnessMap&&i.enable(23),y.metalnessMap&&i.enable(24),y.gradientMap&&i.enable(25),y.alphaMap&&i.enable(26),y.alphaTest&&i.enable(27),y.vertexColors&&i.enable(28),y.vertexAlphas&&i.enable(29),y.vertexUvs&&i.enable(30),y.vertexTangents&&i.enable(31),y.uvsVertexOnly&&i.enable(32),R.push(i.mask),i.disableAll(),y.fog&&i.enable(0),y.useFog&&i.enable(1),y.flatShading&&i.enable(2),y.logarithmicDepthBuffer&&i.enable(3),y.skinning&&i.enable(4),y.morphTargets&&i.enable(5),y.morphNormals&&i.enable(6),y.morphColors&&i.enable(7),y.premultipliedAlpha&&i.enable(8),y.shadowMapEnabled&&i.enable(9),y.useLegacyLights&&i.enable(10),y.doubleSided&&i.enable(11),y.flipSided&&i.enable(12),y.useDepthPacking&&i.enable(13),y.dithering&&i.enable(14),y.specularIntensityMap&&i.enable(15),y.specularColorMap&&i.enable(16),y.transmission&&i.enable(17),y.transmissionMap&&i.enable(18),y.thicknessMap&&i.enable(19),y.sheen&&i.enable(20),y.sheenColorMap&&i.enable(21),y.sheenRoughnessMap&&i.enable(22),y.decodeVideoTexture&&i.enable(23),y.opaque&&i.enable(24),R.push(i.mask)}(u,D),u.push(C.outputEncoding)),u.push(D.customProgramCacheKey),u.join()},getUniforms:function(D){const u=w[D.type];let R;if(u){const y=uC[u];R=XA.clone(y.uniforms)}else R=D.uniforms;return R},acquireProgram:function(D,u){let R;for(let y=0,F=e.length;y<F;y++){const N=e[y];if(N.cacheKey===u){R=N,++R.usedTimes;break}}return R===void 0&&(R=new Fr(C,u,D,Q),e.push(R)),R},releaseProgram:function(D){if(--D.usedTimes==0){const u=e.indexOf(D);e[u]=e[e.length-1],e.pop(),D.destroy()}},releaseShaderCache:function(D){t.remove(D)},programs:e,dispose:function(){t.dispose()}}}function Ur(){let C=new WeakMap;return{get:function(A){let g=C.get(A);return g===void 0&&(g={},C.set(A,g)),g},remove:function(A){C.delete(A)},update:function(A,g,I){C.get(A)[g]=I},dispose:function(){C=new WeakMap}}}function Lr(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.material.id!==A.material.id?C.material.id-A.material.id:C.z!==A.z?C.z-A.z:C.id-A.id}function co(C,A){return C.groupOrder!==A.groupOrder?C.groupOrder-A.groupOrder:C.renderOrder!==A.renderOrder?C.renderOrder-A.renderOrder:C.z!==A.z?A.z-C.z:C.id-A.id}function Do(){const C=[];let A=0;const g=[],I=[],B=[];function Q(E,i,t,e,s,n){let r=C[A];return r===void 0?(r={id:E.id,object:E,geometry:i,material:t,groupOrder:e,renderOrder:E.renderOrder,z:s,group:n},C[A]=r):(r.id=E.id,r.object=E,r.geometry=i,r.material=t,r.groupOrder=e,r.renderOrder=E.renderOrder,r.z=s,r.group=n),A++,r}return{opaque:g,transmissive:I,transparent:B,init:function(){A=0,g.length=0,I.length=0,B.length=0},push:function(E,i,t,e,s,n){const r=Q(E,i,t,e,s,n);t.transmission>0?I.push(r):t.transparent===!0?B.push(r):g.push(r)},unshift:function(E,i,t,e,s,n){const r=Q(E,i,t,e,s,n);t.transmission>0?I.unshift(r):t.transparent===!0?B.unshift(r):g.unshift(r)},finish:function(){for(let E=A,i=C.length;E<i;E++){const t=C[E];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}},sort:function(E,i){g.length>1&&g.sort(E||Lr),I.length>1&&I.sort(i||co),B.length>1&&B.sort(i||co)}}}function Jr(){let C=new WeakMap;return{get:function(A,g){const I=C.get(A);let B;return I===void 0?(B=new Do,C.set(A,[B])):g>=I.length?(B=new Do,I.push(B)):B=I[g],B},dispose:function(){C=new WeakMap}}}function Kr(){const C={};return{get:function(A){if(C[A.id]!==void 0)return C[A.id];let g;switch(A.type){case"DirectionalLight":g={direction:new x,color:new sg};break;case"SpotLight":g={position:new x,direction:new x,color:new sg,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new x,color:new sg,distance:0,decay:0};break;case"HemisphereLight":g={direction:new x,skyColor:new sg,groundColor:new sg};break;case"RectAreaLight":g={color:new sg,position:new x,halfWidth:new x,halfHeight:new x}}return C[A.id]=g,g}}}let Yr=0;function Hr(C,A){return(A.castShadow?2:0)-(C.castShadow?2:0)+(A.map?1:0)-(C.map?1:0)}function br(C,A){const g=new Kr,I=function(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let s;switch(e.type){case"DirectionalLight":case"SpotLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new HA};break;case"PointLight":s={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new HA,shadowCameraNear:1,shadowCameraFar:1e3}}return t[e.id]=s,s}}}(),B={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let t=0;t<9;t++)B.probe.push(new x);const Q=new x,E=new Ng,i=new Ng;return{setup:function(t,e){let s=0,n=0,r=0;for(let nA=0;nA<9;nA++)B.probe[nA].set(0,0,0);let h=0,w=0,D=0,u=0,R=0,y=0,F=0,N=0,J=0,T=0;t.sort(Hr);const $=e===!0?Math.PI:1;for(let nA=0,cA=t.length;nA<cA;nA++){const gA=t[nA],RA=gA.color,xA=gA.intensity,UA=gA.distance,zA=gA.shadow&&gA.shadow.map?gA.shadow.map.texture:null;if(gA.isAmbientLight)s+=RA.r*xA*$,n+=RA.g*xA*$,r+=RA.b*xA*$;else if(gA.isLightProbe)for(let jA=0;jA<9;jA++)B.probe[jA].addScaledVector(gA.sh.coefficients[jA],xA);else if(gA.isDirectionalLight){const jA=g.get(gA);if(jA.color.copy(gA.color).multiplyScalar(gA.intensity*$),gA.castShadow){const ig=gA.shadow,tg=I.get(gA);tg.shadowBias=ig.bias,tg.shadowNormalBias=ig.normalBias,tg.shadowRadius=ig.radius,tg.shadowMapSize=ig.mapSize,B.directionalShadow[h]=tg,B.directionalShadowMap[h]=zA,B.directionalShadowMatrix[h]=gA.shadow.matrix,y++}B.directional[h]=jA,h++}else if(gA.isSpotLight){const jA=g.get(gA);jA.position.setFromMatrixPosition(gA.matrixWorld),jA.color.copy(RA).multiplyScalar(xA*$),jA.distance=UA,jA.coneCos=Math.cos(gA.angle),jA.penumbraCos=Math.cos(gA.angle*(1-gA.penumbra)),jA.decay=gA.decay,B.spot[D]=jA;const ig=gA.shadow;if(gA.map&&(B.spotLightMap[J]=gA.map,J++,ig.updateMatrices(gA),gA.castShadow&&T++),B.spotLightMatrix[D]=ig.matrix,gA.castShadow){const tg=I.get(gA);tg.shadowBias=ig.bias,tg.shadowNormalBias=ig.normalBias,tg.shadowRadius=ig.radius,tg.shadowMapSize=ig.mapSize,B.spotShadow[D]=tg,B.spotShadowMap[D]=zA,N++}D++}else if(gA.isRectAreaLight){const jA=g.get(gA);jA.color.copy(RA).multiplyScalar(xA),jA.halfWidth.set(.5*gA.width,0,0),jA.halfHeight.set(0,.5*gA.height,0),B.rectArea[u]=jA,u++}else if(gA.isPointLight){const jA=g.get(gA);if(jA.color.copy(gA.color).multiplyScalar(gA.intensity*$),jA.distance=gA.distance,jA.decay=gA.decay,gA.castShadow){const ig=gA.shadow,tg=I.get(gA);tg.shadowBias=ig.bias,tg.shadowNormalBias=ig.normalBias,tg.shadowRadius=ig.radius,tg.shadowMapSize=ig.mapSize,tg.shadowCameraNear=ig.camera.near,tg.shadowCameraFar=ig.camera.far,B.pointShadow[w]=tg,B.pointShadowMap[w]=zA,B.pointShadowMatrix[w]=gA.shadow.matrix,F++}B.point[w]=jA,w++}else if(gA.isHemisphereLight){const jA=g.get(gA);jA.skyColor.copy(gA.color).multiplyScalar(xA*$),jA.groundColor.copy(gA.groundColor).multiplyScalar(xA*$),B.hemi[R]=jA,R++}}u>0&&(A.isWebGL2||C.has("OES_texture_float_linear")===!0?(B.rectAreaLTC1=Eg.LTC_FLOAT_1,B.rectAreaLTC2=Eg.LTC_FLOAT_2):C.has("OES_texture_half_float_linear")===!0?(B.rectAreaLTC1=Eg.LTC_HALF_1,B.rectAreaLTC2=Eg.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),B.ambient[0]=s,B.ambient[1]=n,B.ambient[2]=r;const IA=B.hash;IA.directionalLength===h&&IA.pointLength===w&&IA.spotLength===D&&IA.rectAreaLength===u&&IA.hemiLength===R&&IA.numDirectionalShadows===y&&IA.numPointShadows===F&&IA.numSpotShadows===N&&IA.numSpotMaps===J||(B.directional.length=h,B.spot.length=D,B.rectArea.length=u,B.point.length=w,B.hemi.length=R,B.directionalShadow.length=y,B.directionalShadowMap.length=y,B.pointShadow.length=F,B.pointShadowMap.length=F,B.spotShadow.length=N,B.spotShadowMap.length=N,B.directionalShadowMatrix.length=y,B.pointShadowMatrix.length=F,B.spotLightMatrix.length=N+J-T,B.spotLightMap.length=J,B.numSpotLightShadowsWithMaps=T,IA.directionalLength=h,IA.pointLength=w,IA.spotLength=D,IA.rectAreaLength=u,IA.hemiLength=R,IA.numDirectionalShadows=y,IA.numPointShadows=F,IA.numSpotShadows=N,IA.numSpotMaps=J,B.version=Yr++)},setupView:function(t,e){let s=0,n=0,r=0,h=0,w=0;const D=e.matrixWorldInverse;for(let u=0,R=t.length;u<R;u++){const y=t[u];if(y.isDirectionalLight){const F=B.directional[s];F.direction.setFromMatrixPosition(y.matrixWorld),Q.setFromMatrixPosition(y.target.matrixWorld),F.direction.sub(Q),F.direction.transformDirection(D),s++}else if(y.isSpotLight){const F=B.spot[r];F.position.setFromMatrixPosition(y.matrixWorld),F.position.applyMatrix4(D),F.direction.setFromMatrixPosition(y.matrixWorld),Q.setFromMatrixPosition(y.target.matrixWorld),F.direction.sub(Q),F.direction.transformDirection(D),r++}else if(y.isRectAreaLight){const F=B.rectArea[h];F.position.setFromMatrixPosition(y.matrixWorld),F.position.applyMatrix4(D),i.identity(),E.copy(y.matrixWorld),E.premultiply(D),i.extractRotation(E),F.halfWidth.set(.5*y.width,0,0),F.halfHeight.set(0,.5*y.height,0),F.halfWidth.applyMatrix4(i),F.halfHeight.applyMatrix4(i),h++}else if(y.isPointLight){const F=B.point[n];F.position.setFromMatrixPosition(y.matrixWorld),F.position.applyMatrix4(D),n++}else if(y.isHemisphereLight){const F=B.hemi[w];F.direction.setFromMatrixPosition(y.matrixWorld),F.direction.transformDirection(D),w++}}},state:B}}function lo(C,A){const g=new br(C,A),I=[],B=[];return{init:function(){I.length=0,B.length=0},state:{lightsArray:I,shadowsArray:B,lights:g},setupLights:function(Q){g.setup(I,Q)},setupLightsView:function(Q){g.setupView(I,Q)},pushLight:function(Q){I.push(Q)},pushShadow:function(Q){B.push(Q)}}}function qr(C,A){let g=new WeakMap;return{get:function(I,B=0){const Q=g.get(I);let E;return Q===void 0?(E=new lo(C,A),g.set(I,[E])):B>=Q.length?(E=new lo(C,A),Q.push(E)):E=Q[B],E},dispose:function(){g=new WeakMap}}}class Vt extends rB{constructor(A){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(A)}copy(A){return super.copy(A),this.depthPacking=A.depthPacking,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this.wireframe=A.wireframe,this.wireframeLinewidth=A.wireframeLinewidth,this}}class Pt extends rB{constructor(A){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new x,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(A)}copy(A){return super.copy(A),this.referencePosition.copy(A.referencePosition),this.nearDistance=A.nearDistance,this.farDistance=A.farDistance,this.map=A.map,this.alphaMap=A.alphaMap,this.displacementMap=A.displacementMap,this.displacementScale=A.displacementScale,this.displacementBias=A.displacementBias,this}}const xr=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vr=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
`):typeof readline=="function"&&(a=readline())!==null&&(a+=`
`);if(!a)return null;o.input=oQ(a,!0)}return o.input.shift()},put_char:function(o,a){a===null||a===10?($g(VC(o.output,0)),o.output=[]):a!=0&&o.output.push(a)},fsync:function(o){o.output&&o.output.length>0&&($g(VC(o.output,0)),o.output=[])}},default_tty1_ops:{put_char:function(o,a){a===null||a===10?(cI(VC(o.output,0)),o.output=[]):a!=0&&o.output.push(a)},fsync:function(o){o.output&&o.output.length>0&&(cI(VC(o.output,0)),o.output=[])}}};function zC(o){_C()}var Fg={ops_table:null,mount:function(o){return Fg.createNode(null,"/",16895,0)},createNode:function(o,a,c,d){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);Fg.ops_table||(Fg.ops_table={dir:{node:{getattr:Fg.node_ops.getattr,setattr:Fg.node_ops.setattr,lookup:Fg.node_ops.lookup,mknod:Fg.node_ops.mknod,rename:Fg.node_ops.rename,unlink:Fg.node_ops.unlink,rmdir:Fg.node_ops.rmdir,readdir:Fg.node_ops.readdir,symlink:Fg.node_ops.symlink},stream:{llseek:Fg.stream_ops.llseek}},file:{node:{getattr:Fg.node_ops.getattr,setattr:Fg.node_ops.setattr},stream:{llseek:Fg.stream_ops.llseek,read:Fg.stream_ops.read,write:Fg.stream_ops.write,allocate:Fg.stream_ops.allocate,mmap:Fg.stream_ops.mmap,msync:Fg.stream_ops.msync}},link:{node:{getattr:Fg.node_ops.getattr,setattr:Fg.node_ops.setattr,readlink:Fg.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Fg.node_ops.getattr,setattr:Fg.node_ops.setattr},stream:M.chrdev_stream_ops}});var S=M.createNode(o,a,c,d);return M.isDir(S.mode)?(S.node_ops=Fg.ops_table.dir.node,S.stream_ops=Fg.ops_table.dir.stream,S.contents={}):M.isFile(S.mode)?(S.node_ops=Fg.ops_table.file.node,S.stream_ops=Fg.ops_table.file.stream,S.usedBytes=0,S.contents=null):M.isLink(S.mode)?(S.node_ops=Fg.ops_table.link.node,S.stream_ops=Fg.ops_table.link.stream):M.isChrdev(S.mode)&&(S.node_ops=Fg.ops_table.chrdev.node,S.stream_ops=Fg.ops_table.chrdev.stream),S.timestamp=Date.now(),o&&(o.contents[a]=S,o.timestamp=S.timestamp),S},getFileDataAsTypedArray:function(o){return o.contents?o.contents.subarray?o.contents.subarray(0,o.usedBytes):new Uint8Array(o.contents):new Uint8Array(0)},expandFileStorage:function(o,a){var c=o.contents?o.contents.length:0;if(!(c>=a)){a=Math.max(a,c*(c<1048576?2:1.125)>>>0),c!=0&&(a=Math.max(a,256));var d=o.contents;o.contents=new Uint8Array(a),o.usedBytes>0&&o.contents.set(d.subarray(0,o.usedBytes),0)}},resizeFileStorage:function(o,a){if(o.usedBytes!=a)if(a==0)o.contents=null,o.usedBytes=0;else{var c=o.contents;o.contents=new Uint8Array(a),c&&o.contents.set(c.subarray(0,Math.min(a,o.usedBytes))),o.usedBytes=a}},node_ops:{getattr:function(o){var a={};return a.dev=M.isChrdev(o.mode)?o.id:1,a.ino=o.id,a.mode=o.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=o.rdev,M.isDir(o.mode)?a.size=4096:M.isFile(o.mode)?a.size=o.usedBytes:M.isLink(o.mode)?a.size=o.link.length:a.size=0,a.atime=new Date(o.timestamp),a.mtime=new Date(o.timestamp),a.ctime=new Date(o.timestamp),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr:function(o,a){a.mode!==void 0&&(o.mode=a.mode),a.timestamp!==void 0&&(o.timestamp=a.timestamp),a.size!==void 0&&Fg.resizeFileStorage(o,a.size)},lookup:function(o,a){throw M.genericErrors[44]},mknod:function(o,a,c,d){return Fg.createNode(o,a,c,d)},rename:function(o,a,c){if(M.isDir(o.mode)){var d;try{d=M.lookupNode(a,c)}catch{}if(d)for(var S in d.contents)throw new M.ErrnoError(55)}delete o.parent.contents[o.name],o.parent.timestamp=Date.now(),o.name=c,a.contents[c]=o,a.timestamp=o.parent.timestamp,o.parent=a},unlink:function(o,a){delete o.contents[a],o.timestamp=Date.now()},rmdir:function(o,a){var c=M.lookupNode(o,a);for(var d in c.contents)throw new M.ErrnoError(55);delete o.contents[a],o.timestamp=Date.now()},readdir:function(o){var a=[".",".."];for(var c in o.contents)o.contents.hasOwnProperty(c)&&a.push(c);return a},symlink:function(o,a,c){var d=Fg.createNode(o,a,41471,0);return d.link=c,d},readlink:function(o){if(!M.isLink(o.mode))throw new M.ErrnoError(28);return o.link}},stream_ops:{read:function(o,a,c,d,S){var U=o.node.contents;if(S>=o.node.usedBytes)return 0;var Z=Math.min(o.node.usedBytes-S,d);if(Z>8&&U.subarray)a.set(U.subarray(S,S+Z),c);else for(var O=0;O<Z;O++)a[c+O]=U[S+O];return Z},write:function(o,a,c,d,S,U){if(a.buffer===bI.buffer&&(U=!1),!d)return 0;var Z=o.node;if(Z.timestamp=Date.now(),a.subarray&&(!Z.contents||Z.contents.subarray)){if(U)return Z.contents=a.subarray(c,c+d),Z.usedBytes=d,d;if(Z.usedBytes===0&&S===0)return Z.contents=a.slice(c,c+d),Z.usedBytes=d,d;if(S+d<=Z.usedBytes)return Z.contents.set(a.subarray(c,c+d),S),d}if(Fg.expandFileStorage(Z,S+d),Z.contents.subarray&&a.subarray)Z.contents.set(a.subarray(c,c+d),S);else for(var O=0;O<d;O++)Z.contents[S+O]=a[c+O];return Z.usedBytes=Math.max(Z.usedBytes,S+d),d},llseek:function(o,a,c){var d=a;if(c===1?d+=o.position:c===2&&M.isFile(o.node.mode)&&(d+=o.node.usedBytes),d<0)throw new M.ErrnoError(28);return d},allocate:function(o,a,c){Fg.expandFileStorage(o.node,a+c),o.node.usedBytes=Math.max(o.node.usedBytes,a+c)},mmap:function(o,a,c,d,S){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);var U,Z,O=o.node.contents;if(2&S||O.buffer!==OB){if((c>0||c+a<O.length)&&(O=O.subarray?O.subarray(c,c+a):Array.prototype.slice.call(O,c,c+a)),Z=!0,!(U=zC()))throw new M.ErrnoError(48);bI.set(O,U)}else Z=!1,U=O.byteOffset;return{ptr:U,allocated:Z}},msync:function(o,a,c,d,S){if(!M.isFile(o.node.mode))throw new M.ErrnoError(43);return 2&S||Fg.stream_ops.write(o,a,0,d,c,!1),0}}},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,ErrnoError:null,genericErrors:{},filesystems:null,syncFSRequests:0,lookupPath:function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!(o=yB.resolve(M.cwd(),o)))return{path:"",node:null};if((a=Object.assign({follow_mount:!0,recurse_count:0},a)).recurse_count>8)throw new M.ErrnoError(32);for(var c=Hg.normalizeArray(o.split("/").filter(function(dA){return!!dA}),!1),d=M.root,S="/",U=0;U<c.length;U++){var Z=U===c.length-1;if(Z&&a.parent)break;if(d=M.lookupNode(d,c[U]),S=Hg.join2(S,c[U]),M.isMountpoint(d)&&(!Z||Z&&a.follow_mount)&&(d=d.mounted.root),!Z||a.follow)for(var O=0;M.isLink(d.mode);){var rA=M.readlink(S);if(S=yB.resolve(Hg.dirname(S),rA),d=M.lookupPath(S,{recurse_count:a.recurse_count+1}).node,O++>40)throw new M.ErrnoError(32)}}return{path:S,node:d}},getPath:function(o){for(var a;;){if(M.isRoot(o)){var c=o.mount.mountpoint;return a?c[c.length-1]!=="/"?c+"/"+a:c+a:c}a=a?o.name+"/"+a:o.name,o=o.parent}},hashName:function(o,a){for(var c=0,d=0;d<a.length;d++)c=(c<<5)-c+a.charCodeAt(d)|0;return(o+c>>>0)%M.nameTable.length},hashAddNode:function(o){var a=M.hashName(o.parent.id,o.name);o.name_next=M.nameTable[a],M.nameTable[a]=o},hashRemoveNode:function(o){var a=M.hashName(o.parent.id,o.name);if(M.nameTable[a]===o)M.nameTable[a]=o.name_next;else for(var c=M.nameTable[a];c;){if(c.name_next===o){c.name_next=o.name_next;break}c=c.name_next}},lookupNode:function(o,a){var c=M.mayLookup(o);if(c)throw new M.ErrnoError(c,o);for(var d=M.hashName(o.id,a),S=M.nameTable[d];S;S=S.name_next){var U=S.name;if(S.parent.id===o.id&&U===a)return S}return M.lookup(o,a)},createNode:function(o,a,c,d){var S=new M.FSNode(o,a,c,d);return M.hashAddNode(S),S},destroyNode:function(o){M.hashRemoveNode(o)},isRoot:function(o){return o===o.parent},isMountpoint:function(o){return!!o.mounted},isFile:function(o){return(61440&o)==32768},isDir:function(o){return(61440&o)==16384},isLink:function(o){return(61440&o)==40960},isChrdev:function(o){return(61440&o)==8192},isBlkdev:function(o){return(61440&o)==24576},isFIFO:function(o){return(61440&o)==4096},isSocket:function(o){return(49152&o)==49152},flagModes:{r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},modeStringToFlags:function(o){var a=M.flagModes[o];if(a===void 0)throw new Error("Unknown file open mode: "+o);return a},flagsToPermissionString:function(o){var a=["r","w","rw"][3&o];return 512&o&&(a+="w"),a},nodePermissions:function(o,a){return M.ignorePermissions||(!a.includes("r")||292&o.mode)&&(!a.includes("w")||146&o.mode)&&(!a.includes("x")||73&o.mode)?0:2},mayLookup:function(o){return M.nodePermissions(o,"x")||(o.node_ops.lookup?0:2)},mayCreate:function(o,a){try{return M.lookupNode(o,a),20}catch{}return M.nodePermissions(o,"wx")},mayDelete:function(o,a,c){var d;try{d=M.lookupNode(o,a)}catch(U){return U.errno}var S=M.nodePermissions(o,"wx");if(S)return S;if(c){if(!M.isDir(d.mode))return 54;if(M.isRoot(d)||M.getPath(d)===M.cwd())return 10}else if(M.isDir(d.mode))return 31;return 0},mayOpen:function(o,a){return o?M.isLink(o.mode)?32:M.isDir(o.mode)&&(M.flagsToPermissionString(a)!=="r"||512&a)?31:M.nodePermissions(o,M.flagsToPermissionString(a)):44},MAX_OPEN_FDS:4096,nextfd:function(){for(var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:M.MAX_OPEN_FDS,c=o;c<=a;c++)if(!M.streams[c])return c;throw new M.ErrnoError(33)},getStream:function(o){return M.streams[o]},createStream:function(o,a,c){M.FSStream||(M.FSStream=function(){this.shared={}},M.FSStream.prototype={},Object.defineProperties(M.FSStream.prototype,{object:{get:function(){return this.node},set:function(S){this.node=S}},isRead:{get:function(){return(2097155&this.flags)!=1}},isWrite:{get:function(){return(2097155&this.flags)!=0}},isAppend:{get:function(){return 1024&this.flags}},flags:{get:function(){return this.shared.flags},set:function(S){this.shared.flags=S}},position:{get:function(){return this.shared.position},set:function(S){this.shared.position=S}}})),o=Object.assign(new M.FSStream,o);var d=M.nextfd(a,c);return o.fd=d,M.streams[d]=o,o},closeStream:function(o){M.streams[o]=null},chrdev_stream_ops:{open:function(o){var a=M.getDevice(o.node.rdev);o.stream_ops=a.stream_ops,o.stream_ops.open&&o.stream_ops.open(o)},llseek:function(){throw new M.ErrnoError(70)}},major:function(o){return o>>8},minor:function(o){return 255&o},makedev:function(o,a){return o<<8|a},registerDevice:function(o,a){M.devices[o]={stream_ops:a}},getDevice:function(o){return M.devices[o]},getMounts:function(o){for(var a=[],c=[o];c.length;){var d=c.pop();a.push(d),c.push.apply(c,d.mounts)}return a},syncfs:function(o,a){typeof o=="function"&&(a=o,o=!1),M.syncFSRequests++,M.syncFSRequests>1&&cI("warning: "+M.syncFSRequests+" FS.syncfs operations in flight at once, probably just doing extra work");var c=M.getMounts(M.root.mount),d=0;function S(Z){return M.syncFSRequests--,a(Z)}function U(Z){if(Z)return U.errored?void 0:(U.errored=!0,S(Z));++d>=c.length&&S(null)}c.forEach(function(Z){if(!Z.type.syncfs)return U(null);Z.type.syncfs(Z,o,U)})},mount:function(o,a,c){var d,S=c==="/",U=!c;if(S&&M.root)throw new M.ErrnoError(10);if(!S&&!U){var Z=M.lookupPath(c,{follow_mount:!1});if(c=Z.path,d=Z.node,M.isMountpoint(d))throw new M.ErrnoError(10);if(!M.isDir(d.mode))throw new M.ErrnoError(54)}var O={type:o,opts:a,mountpoint:c,mounts:[]},rA=o.mount(O);return rA.mount=O,O.root=rA,S?M.root=rA:d&&(d.mounted=O,d.mount&&d.mount.mounts.push(O)),rA},unmount:function(o){var a=M.lookupPath(o,{follow_mount:!1});if(!M.isMountpoint(a.node))throw new M.ErrnoError(28);var c=a.node,d=c.mounted,S=M.getMounts(d);Object.keys(M.nameTable).forEach(function(Z){for(var O=M.nameTable[Z];O;){var rA=O.name_next;S.includes(O.mount)&&M.destroyNode(O),O=rA}}),c.mounted=null;var U=c.mount.mounts.indexOf(d);c.mount.mounts.splice(U,1)},lookup:function(o,a){return o.node_ops.lookup(o,a)},mknod:function(o,a,c){var d=M.lookupPath(o,{parent:!0}).node,S=Hg.basename(o);if(!S||S==="."||S==="..")throw new M.ErrnoError(28);var U=M.mayCreate(d,S);if(U)throw new M.ErrnoError(U);if(!d.node_ops.mknod)throw new M.ErrnoError(63);return d.node_ops.mknod(d,S,a,c)},create:function(o,a){return a=a!==void 0?a:438,a&=4095,a|=32768,M.mknod(o,a,0)},mkdir:function(o,a){return a=a!==void 0?a:511,a&=1023,a|=16384,M.mknod(o,a,0)},mkdirTree:function(o,a){for(var c=o.split("/"),d="",S=0;S<c.length;++S)if(c[S]){d+="/"+c[S];try{M.mkdir(d,a)}catch(U){if(U.errno!=20)throw U}}},mkdev:function(o,a,c){return c===void 0&&(c=a,a=438),a|=8192,M.mknod(o,a,c)},symlink:function(o,a){if(!yB.resolve(o))throw new M.ErrnoError(44);var c=M.lookupPath(a,{parent:!0}).node;if(!c)throw new M.ErrnoError(44);var d=Hg.basename(a),S=M.mayCreate(c,d);if(S)throw new M.ErrnoError(S);if(!c.node_ops.symlink)throw new M.ErrnoError(63);return c.node_ops.symlink(c,d,o)},rename:function(o,a){var c,d,S=Hg.dirname(o),U=Hg.dirname(a),Z=Hg.basename(o),O=Hg.basename(a);if(c=M.lookupPath(o,{parent:!0}).node,d=M.lookupPath(a,{parent:!0}).node,!c||!d)throw new M.ErrnoError(44);if(c.mount!==d.mount)throw new M.ErrnoError(75);var rA,dA=M.lookupNode(c,Z),WA=yB.relative(o,U);if(WA.charAt(0)!==".")throw new M.ErrnoError(28);if((WA=yB.relative(a,S)).charAt(0)!==".")throw new M.ErrnoError(55);try{rA=M.lookupNode(d,O)}catch{}if(dA!==rA){var KA=M.isDir(dA.mode),GA=M.mayDelete(c,Z,KA);if(GA)throw new M.ErrnoError(GA);if(GA=rA?M.mayDelete(d,O,KA):M.mayCreate(d,O))throw new M.ErrnoError(GA);if(!c.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(dA)||rA&&M.isMountpoint(rA))throw new M.ErrnoError(10);if(d!==c&&(GA=M.nodePermissions(c,"w")))throw new M.ErrnoError(GA);M.hashRemoveNode(dA);try{c.node_ops.rename(dA,d,O)}catch(XA){throw XA}finally{M.hashAddNode(dA)}}},rmdir:function(o){var a=M.lookupPath(o,{parent:!0}).node,c=Hg.basename(o),d=M.lookupNode(a,c),S=M.mayDelete(a,c,!0);if(S)throw new M.ErrnoError(S);if(!a.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(d))throw new M.ErrnoError(10);a.node_ops.rmdir(a,c),M.destroyNode(d)},readdir:function(o){var a=M.lookupPath(o,{follow:!0}).node;if(!a.node_ops.readdir)throw new M.ErrnoError(54);return a.node_ops.readdir(a)},unlink:function(o){var a=M.lookupPath(o,{parent:!0}).node;if(!a)throw new M.ErrnoError(44);var c=Hg.basename(o),d=M.lookupNode(a,c),S=M.mayDelete(a,c,!1);if(S)throw new M.ErrnoError(S);if(!a.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(d))throw new M.ErrnoError(10);a.node_ops.unlink(a,c),M.destroyNode(d)},readlink:function(o){var a=M.lookupPath(o).node;if(!a)throw new M.ErrnoError(44);if(!a.node_ops.readlink)throw new M.ErrnoError(28);return yB.resolve(M.getPath(a.parent),a.node_ops.readlink(a))},stat:function(o,a){var c=M.lookupPath(o,{follow:!a}).node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.getattr)throw new M.ErrnoError(63);return c.node_ops.getattr(c)},lstat:function(o){return M.stat(o,!0)},chmod:function(o,a,c){var d;if(!(d=typeof o=="string"?M.lookupPath(o,{follow:!c}).node:o).node_ops.setattr)throw new M.ErrnoError(63);d.node_ops.setattr(d,{mode:4095&a|-4096&d.mode,timestamp:Date.now()})},lchmod:function(o,a){M.chmod(o,a,!0)},fchmod:function(o,a){var c=M.getStream(o);if(!c)throw new M.ErrnoError(8);M.chmod(c.node,a)},chown:function(o,a,c,d){var S;if(!(S=typeof o=="string"?M.lookupPath(o,{follow:!d}).node:o).node_ops.setattr)throw new M.ErrnoError(63);S.node_ops.setattr(S,{timestamp:Date.now()})},lchown:function(o,a,c){M.chown(o,a,c,!0)},fchown:function(o,a,c){var d=M.getStream(o);if(!d)throw new M.ErrnoError(8);M.chown(d.node,a,c)},truncate:function(o,a){if(a<0)throw new M.ErrnoError(28);var c;if(!(c=typeof o=="string"?M.lookupPath(o,{follow:!0}).node:o).node_ops.setattr)throw new M.ErrnoError(63);if(M.isDir(c.mode))throw new M.ErrnoError(31);if(!M.isFile(c.mode))throw new M.ErrnoError(28);var d=M.nodePermissions(c,"w");if(d)throw new M.ErrnoError(d);c.node_ops.setattr(c,{size:a,timestamp:Date.now()})},ftruncate:function(o,a){var c=M.getStream(o);if(!c)throw new M.ErrnoError(8);if(!(2097155&c.flags))throw new M.ErrnoError(28);M.truncate(c.node,a)},utime:function(o,a,c){var d=M.lookupPath(o,{follow:!0}).node;d.node_ops.setattr(d,{timestamp:Math.max(a,c)})},open:function(o,a,c){if(o==="")throw new M.ErrnoError(44);var d;if(c=c===void 0?438:c,c=64&(a=typeof a=="string"?M.modeStringToFlags(a):a)?4095&c|32768:0,QI(o)=="object")d=o;else{o=Hg.normalize(o);try{d=M.lookupPath(o,{follow:!(131072&a)}).node}catch{}}var S=!1;if(64&a)if(d){if(128&a)throw new M.ErrnoError(20)}else d=M.mknod(o,c,0),S=!0;if(!d)throw new M.ErrnoError(44);if(M.isChrdev(d.mode)&&(a&=-513),65536&a&&!M.isDir(d.mode))throw new M.ErrnoError(54);if(!S){var U=M.mayOpen(d,a);if(U)throw new M.ErrnoError(U)}512&a&&!S&&M.truncate(d,0),a&=-131713;var Z=M.createStream({node:d,path:M.getPath(d),flags:a,seekable:!0,position:0,stream_ops:d.stream_ops,ungotten:[],error:!1});return Z.stream_ops.open&&Z.stream_ops.open(Z),!l.logReadFiles||1&a||(M.readFiles||(M.readFiles={}),o in M.readFiles||(M.readFiles[o]=1)),Z},close:function(o){if(M.isClosed(o))throw new M.ErrnoError(8);o.getdents&&(o.getdents=null);try{o.stream_ops.close&&o.stream_ops.close(o)}catch(a){throw a}finally{M.closeStream(o.fd)}o.fd=null},isClosed:function(o){return o.fd===null},llseek:function(o,a,c){if(M.isClosed(o))throw new M.ErrnoError(8);if(!o.seekable||!o.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return o.position=o.stream_ops.llseek(o,a,c),o.ungotten=[],o.position},read:function(o,a,c,d,S){if(d<0||S<0)throw new M.ErrnoError(28);if(M.isClosed(o))throw new M.ErrnoError(8);if((2097155&o.flags)==1)throw new M.ErrnoError(8);if(M.isDir(o.node.mode))throw new M.ErrnoError(31);if(!o.stream_ops.read)throw new M.ErrnoError(28);var U=S!==void 0;if(U){if(!o.seekable)throw new M.ErrnoError(70)}else S=o.position;var Z=o.stream_ops.read(o,a,c,d,S);return U||(o.position+=Z),Z},write:function(o,a,c,d,S,U){if(d<0||S<0)throw new M.ErrnoError(28);if(M.isClosed(o))throw new M.ErrnoError(8);if(!(2097155&o.flags))throw new M.ErrnoError(8);if(M.isDir(o.node.mode))throw new M.ErrnoError(31);if(!o.stream_ops.write)throw new M.ErrnoError(28);o.seekable&&1024&o.flags&&M.llseek(o,0,2);var Z=S!==void 0;if(Z){if(!o.seekable)throw new M.ErrnoError(70)}else S=o.position;var O=o.stream_ops.write(o,a,c,d,S,U);return Z||(o.position+=O),O},allocate:function(o,a,c){if(M.isClosed(o))throw new M.ErrnoError(8);if(a<0||c<=0)throw new M.ErrnoError(28);if(!(2097155&o.flags))throw new M.ErrnoError(8);if(!M.isFile(o.node.mode)&&!M.isDir(o.node.mode))throw new M.ErrnoError(43);if(!o.stream_ops.allocate)throw new M.ErrnoError(138);o.stream_ops.allocate(o,a,c)},mmap:function(o,a,c,d,S){if(2&d&&!(2&S)&&(2097155&o.flags)!=2)throw new M.ErrnoError(2);if((2097155&o.flags)==1)throw new M.ErrnoError(2);if(!o.stream_ops.mmap)throw new M.ErrnoError(43);return o.stream_ops.mmap(o,a,c,d,S)},msync:function(o,a,c,d,S){return o&&o.stream_ops.msync?o.stream_ops.msync(o,a,c,d,S):0},munmap:function(o){return 0},ioctl:function(o,a,c){if(!o.stream_ops.ioctl)throw new M.ErrnoError(59);return o.stream_ops.ioctl(o,a,c)},readFile:function(o){var a,c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(c.flags=c.flags||0,c.encoding=c.encoding||"binary",c.encoding!=="utf8"&&c.encoding!=="binary")throw new Error('Invalid encoding type "'+c.encoding+'"');var d=M.open(o,c.flags),S=M.stat(o).size,U=new Uint8Array(S);return M.read(d,U,0,S,0),c.encoding==="utf8"?a=VC(U,0):c.encoding==="binary"&&(a=U),M.close(d),a},writeFile:function(o,a){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};c.flags=c.flags||577;var d=M.open(o,c.flags,c.mode);if(typeof a=="string"){var S=new Uint8Array(fC(a)+1),U=nC(a,S,0,S.length);M.write(d,S,0,U,void 0,c.canOwn)}else{if(!ArrayBuffer.isView(a))throw new Error("Unsupported data type");M.write(d,a,0,a.byteLength,void 0,c.canOwn)}M.close(d)},cwd:function(){return M.currentPath},chdir:function(o){var a=M.lookupPath(o,{follow:!0});if(a.node===null)throw new M.ErrnoError(44);if(!M.isDir(a.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(a.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=a.path},createDefaultDirectories:function(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices:function(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:function(){return 0},write:function(a,c,d,S,U){return S}}),M.mkdev("/dev/null",M.makedev(1,3)),HB.register(M.makedev(5,0),HB.default_tty_ops),HB.register(M.makedev(6,0),HB.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var o=function(){if((typeof crypto>"u"?"undefined":QI(crypto))=="object"&&typeof crypto.getRandomValues=="function"){var a=new Uint8Array(1);return function(){return crypto.getRandomValues(a),a[0]}}if(Cg)try{var c=yI(654);return function(){return c.randomBytes(1)[0]}}catch{}return function(){return _C("randomDevice")}}();M.createDevice("/dev","random",o),M.createDevice("/dev","urandom",o),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories:function(){M.mkdir("/proc");var o=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount:function(){var a=M.createNode(o,"fd",16895,73);return a.node_ops={lookup:function(c,d){var S=+d,U=M.getStream(S);if(!U)throw new M.ErrnoError(8);var Z={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:function(){return U.path}}};return Z.parent=Z,Z}},a}},{},"/proc/self/fd")},createStandardStreams:function(){l.stdin?M.createDevice("/dev","stdin",l.stdin):M.symlink("/dev/tty","/dev/stdin"),l.stdout?M.createDevice("/dev","stdout",null,l.stdout):M.symlink("/dev/tty","/dev/stdout"),l.stderr?M.createDevice("/dev","stderr",null,l.stderr):M.symlink("/dev/tty1","/dev/stderr"),M.open("/dev/stdin",0),M.open("/dev/stdout",1),M.open("/dev/stderr",1)},ensureErrnoError:function(){M.ErrnoError||(M.ErrnoError=function(o,a){this.node=a,this.setErrno=function(c){this.errno=c},this.setErrno(o),this.message="FS error"},M.ErrnoError.prototype=new Error,M.ErrnoError.prototype.constructor=M.ErrnoError,[44].forEach(function(o){M.genericErrors[o]=new M.ErrnoError(o),M.genericErrors[o].stack="<generic error, no stack>"}))},staticInit:function(){M.ensureErrnoError(),M.nameTable=new Array(4096),M.mount(Fg,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Fg}},init:function(o,a,c){M.init.initialized=!0,M.ensureErrnoError(),l.stdin=o||l.stdin,l.stdout=a||l.stdout,l.stderr=c||l.stderr,M.createStandardStreams()},quit:function(){M.init.initialized=!1;for(var o=0;o<M.streams.length;o++){var a=M.streams[o];a&&M.close(a)}},getMode:function(o,a){var c=0;return o&&(c|=365),a&&(c|=146),c},findObject:function(o,a){var c=M.analyzePath(o,a);return c.exists?c.object:null},analyzePath:function(o,a){try{o=(d=M.lookupPath(o,{follow:!a})).path}catch{}var c={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var d=M.lookupPath(o,{parent:!0});c.parentExists=!0,c.parentPath=d.path,c.parentObject=d.node,c.name=Hg.basename(o),d=M.lookupPath(o,{follow:!a}),c.exists=!0,c.path=d.path,c.object=d.node,c.name=d.node.name,c.isRoot=d.path==="/"}catch(S){c.error=S.errno}return c},createPath:function(o,a,c,d){o=typeof o=="string"?o:M.getPath(o);for(var S=a.split("/").reverse();S.length;){var U=S.pop();if(U){var Z=Hg.join2(o,U);try{M.mkdir(Z)}catch{}o=Z}}return Z},createFile:function(o,a,c,d,S){var U=Hg.join2(typeof o=="string"?o:M.getPath(o),a),Z=M.getMode(d,S);return M.create(U,Z)},createDataFile:function(o,a,c,d,S,U){var Z=a;o&&(o=typeof o=="string"?o:M.getPath(o),Z=a?Hg.join2(o,a):o);var O=M.getMode(d,S),rA=M.create(Z,O);if(c){if(typeof c=="string"){for(var dA=new Array(c.length),WA=0,KA=c.length;WA<KA;++WA)dA[WA]=c.charCodeAt(WA);c=dA}M.chmod(rA,146|O);var GA=M.open(rA,577);M.write(GA,c,0,c.length,0,U),M.close(GA),M.chmod(rA,O)}return rA},createDevice:function(o,a,c,d){var S=Hg.join2(typeof o=="string"?o:M.getPath(o),a),U=M.getMode(!!c,!!d);M.createDevice.major||(M.createDevice.major=64);var Z=M.makedev(M.createDevice.major++,0);return M.registerDevice(Z,{open:function(O){O.seekable=!1},close:function(O){d&&d.buffer&&d.buffer.length&&d(10)},read:function(O,rA,dA,WA,KA){for(var GA=0,XA=0;XA<WA;XA++){var gg;try{gg=c()}catch{throw new M.ErrnoError(29)}if(gg===void 0&&GA===0)throw new M.ErrnoError(6);if(gg==null)break;GA++,rA[dA+XA]=gg}return GA&&(O.node.timestamp=Date.now()),GA},write:function(O,rA,dA,WA,KA){for(var GA=0;GA<WA;GA++)try{d(rA[dA+GA])}catch{throw new M.ErrnoError(29)}return WA&&(O.node.timestamp=Date.now()),GA}}),M.mkdev(S,U,Z)},forceLoadFile:function(o){if(o.isDevice||o.isFolder||o.link||o.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");if(!z)throw new Error("Cannot load without read() or XMLHttpRequest.");try{o.contents=oQ(z(o.url),!0),o.usedBytes=o.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile:function(o,a,c,d,S){function U(){this.lengthKnown=!1,this.chunks=[]}if(U.prototype.get=function(KA){if(!(KA>this.length-1||KA<0)){var GA=KA%this.chunkSize,XA=KA/this.chunkSize|0;return this.getter(XA)[GA]}},U.prototype.setDataGetter=function(KA){this.getter=KA},U.prototype.cacheLength=function(){var KA=new XMLHttpRequest;if(KA.open("HEAD",c,!1),KA.send(null),!(KA.status>=200&&KA.status<300||KA.status===304))throw new Error("Couldn't load "+c+". Status: "+KA.status);var GA,XA=Number(KA.getResponseHeader("Content-length")),gg=(GA=KA.getResponseHeader("Accept-Ranges"))&&GA==="bytes",zg=(GA=KA.getResponseHeader("Content-Encoding"))&&GA==="gzip",Rg=1048576;gg||(Rg=XA);var vg=this;vg.setDataGetter(function(fA){var cg=fA*Rg,NI=(fA+1)*Rg-1;if(NI=Math.min(NI,XA-1),vg.chunks[fA]===void 0&&(vg.chunks[fA]=function(rI,GB){if(rI>GB)throw new Error("invalid range ("+rI+", "+GB+") or no bytes requested!");if(GB>XA-1)throw new Error("only "+XA+" bytes available! programmer error!");var gB=new XMLHttpRequest;if(gB.open("GET",c,!1),XA!==Rg&&gB.setRequestHeader("Range","bytes="+rI+"-"+GB),gB.responseType="arraybuffer",gB.overrideMimeType&&gB.overrideMimeType("text/plain; charset=x-user-defined"),gB.send(null),!(gB.status>=200&&gB.status<300||gB.status===304))throw new Error("Couldn't load "+c+". Status: "+gB.status);return gB.response!==void 0?new Uint8Array(gB.response||[]):oQ(gB.responseText||"",!0)}(cg,NI)),vg.chunks[fA]===void 0)throw new Error("doXHR failed!");return vg.chunks[fA]}),!zg&&XA||(Rg=XA=1,XA=this.getter(0).length,Rg=XA,$g("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=XA,this._chunkSize=Rg,this.lengthKnown=!0},typeof XMLHttpRequest<"u"){if(!qA)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var Z=new U;Object.defineProperties(Z,{length:{get:function(){return this.lengthKnown||this.cacheLength(),this._length}},chunkSize:{get:function(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}});var O={isDevice:!1,contents:Z}}else O={isDevice:!1,url:c};var rA=M.createFile(o,a,O,d,S);O.contents?rA.contents=O.contents:O.url&&(rA.contents=null,rA.url=O.url),Object.defineProperties(rA,{usedBytes:{get:function(){return this.contents.length}}});var dA={};function WA(KA,GA,XA,gg,zg){var Rg=KA.node.contents;if(zg>=Rg.length)return 0;var vg=Math.min(Rg.length-zg,gg);if(Rg.slice)for(var fA=0;fA<vg;fA++)GA[XA+fA]=Rg[zg+fA];else for(fA=0;fA<vg;fA++)GA[XA+fA]=Rg.get(zg+fA);return vg}return Object.keys(rA.stream_ops).forEach(function(KA){var GA=rA.stream_ops[KA];dA[KA]=function(){return M.forceLoadFile(rA),GA.apply(null,arguments)}}),dA.read=function(KA,GA,XA,gg,zg){return M.forceLoadFile(rA),WA(KA,GA,XA,gg,zg)},dA.mmap=function(KA,GA,XA,gg,zg){M.forceLoadFile(rA);var Rg=zC();if(!Rg)throw new M.ErrnoError(48);return WA(KA,bI,Rg,GA,XA),{ptr:Rg,allocated:!0}},rA.stream_ops=dA,rA},createPreloadedFile:function(o,a,c,d,S,U,Z,O,rA,dA){var WA=a?yB.resolve(Hg.join2(o,a)):o;function KA(GA){function XA(gg){dA&&dA(),O||M.createDataFile(o,a,gg,d,S,rA),U&&U(),EE()}Browser.handledByPreloadPlugin(GA,WA,XA,function(){Z&&Z(),EE()})||XA(GA)}BC(),typeof c=="string"?function(GA,XA,gg,zg){var Rg="al "+GA;EA(GA,function(vg){PI(vg,'Loading data file "'+GA+'" failed (no arrayBuffer).'),KA(new Uint8Array(vg)),Rg&&EE()},function(vg){if(!gg)throw'Loading data file "'+GA+'" failed.';gg()}),Rg&&BC()}(c,0,Z):KA(c)},indexedDB:function(){return window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB},DB_NAME:function(){return"EM_FS_"+window.location.pathname},DB_VERSION:20,DB_STORE_NAME:"FILE_DATA",saveFilesToDB:function(o,a,c){a=a||function(){},c=c||function(){};var d=M.indexedDB();try{var S=d.open(M.DB_NAME(),M.DB_VERSION)}catch(U){return c(U)}S.onupgradeneeded=function(){$g("creating db"),S.result.createObjectStore(M.DB_STORE_NAME)},S.onsuccess=function(){var U=S.result.transaction([M.DB_STORE_NAME],"readwrite"),Z=U.objectStore(M.DB_STORE_NAME),O=0,rA=0,dA=o.length;function WA(){rA==0?a():c()}o.forEach(function(KA){var GA=Z.put(M.analyzePath(KA).object.contents,KA);GA.onsuccess=function(){++O+rA==dA&&WA()},GA.onerror=function(){rA++,O+rA==dA&&WA()}}),U.onerror=c},S.onerror=c},loadFilesFromDB:function(o,a,c){a=a||function(){},c=c||function(){};var d=M.indexedDB();try{var S=d.open(M.DB_NAME(),M.DB_VERSION)}catch(U){return c(U)}S.onupgradeneeded=c,S.onsuccess=function(){var U=S.result;try{var Z=U.transaction([M.DB_STORE_NAME],"readonly")}catch(GA){return void c(GA)}var O=Z.objectStore(M.DB_STORE_NAME),rA=0,dA=0,WA=o.length;function KA(){dA==0?a():c()}o.forEach(function(GA){var XA=O.get(GA);XA.onsuccess=function(){M.analyzePath(GA).exists&&M.unlink(GA),M.createDataFile(Hg.dirname(GA),Hg.basename(GA),XA.result,!0,!0,!0),++rA+dA==WA&&KA()},XA.onerror=function(){dA++,rA+dA==WA&&KA()}}),Z.onerror=c},S.onerror=c}},wI={DEFAULT_POLLMASK:5,calculateAt:function(o,a,c){if(Hg.isAbs(a))return a;var d;if(d=o===-100?M.cwd():wI.getStreamFromFD(o).path,a.length==0){if(!c)throw new M.ErrnoError(44);return d}return Hg.join2(d,a)},doStat:function(o,a,c){try{var d=o(a)}catch(S){if(S&&S.node&&Hg.normalize(a)!==Hg.normalize(M.getPath(S.node)))return-54;throw S}return $A[c>>2]=d.dev,$A[c+8>>2]=d.ino,$A[c+12>>2]=d.mode,AI[c+16>>2]=d.nlink,$A[c+20>>2]=d.uid,$A[c+24>>2]=d.gid,$A[c+28>>2]=d.rdev,mI=[d.size>>>0,(xg=d.size,+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[c+40>>2]=mI[0],$A[c+44>>2]=mI[1],$A[c+48>>2]=4096,$A[c+52>>2]=d.blocks,mI=[Math.floor(d.atime.getTime()/1e3)>>>0,(xg=Math.floor(d.atime.getTime()/1e3),+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[c+56>>2]=mI[0],$A[c+60>>2]=mI[1],AI[c+64>>2]=0,mI=[Math.floor(d.mtime.getTime()/1e3)>>>0,(xg=Math.floor(d.mtime.getTime()/1e3),+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[c+72>>2]=mI[0],$A[c+76>>2]=mI[1],AI[c+80>>2]=0,mI=[Math.floor(d.ctime.getTime()/1e3)>>>0,(xg=Math.floor(d.ctime.getTime()/1e3),+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[c+88>>2]=mI[0],$A[c+92>>2]=mI[1],AI[c+96>>2]=0,mI=[d.ino>>>0,(xg=d.ino,+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[c+104>>2]=mI[0],$A[c+108>>2]=mI[1],0},doMsync:function(o,a,c,d,S){var U=XI.slice(o,o+c);M.msync(a,U,S,c,d)},varargs:void 0,get:function(){return wI.varargs+=4,$A[wI.varargs-4>>2]},getStr:function(o){return BE(o)},getStreamFromFD:function(o){var a=M.getStream(o);if(!a)throw new M.ErrnoError(8);return a}},CC={};function aQ(o){for(;o.length;){var a=o.pop();o.pop()(a)}}function NC(o){return this.fromWireType($A[o>>2])}var hC={},FB={},sQ={};function xE(o){if(o===void 0)return"_unknown";var a=(o=o.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return a>=48&&a<=57?"_"+o:o}function $C(o,a){return o=xE(o),new Function("body","return function "+o+`() {
    "use strict";    return body.apply(this, arguments);
};
`)(a)}function NQ(o,a){var c=$C(a,function(d){this.name=a,this.message=d;var S=new Error(d).stack;S!==void 0&&(this.stack=this.toString()+`
`+S.replace(/^Error(:[^\n]*)?\n/,""))});return c.prototype=Object.create(o.prototype),c.prototype.constructor=c,c.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},c}var kC=void 0;function bB(o){throw new kC(o)}function QC(o,a,c){function d(O){var rA=c(O);rA.length!==o.length&&bB("Mismatched type converter count");for(var dA=0;dA<o.length;++dA)fB(o[dA],rA[dA])}o.forEach(function(O){sQ[O]=a});var S=new Array(a.length),U=[],Z=0;a.forEach(function(O,rA){FB.hasOwnProperty(O)?S[rA]=FB[O]:(U.push(O),hC.hasOwnProperty(O)||(hC[O]=[]),hC[O].push(function(){S[rA]=FB[O],++Z===U.length&&d(S)}))}),U.length===0&&d(S)}function rQ(o){switch(o){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+o)}}var cC=void 0;function AB(o){for(var a="",c=o;XI[c];)a+=cC[XI[c++]];return a}var DC=void 0;function gI(o){throw new DC(o)}function fB(o,a){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!("argPackAdvance"in a))throw new TypeError("registerType registeredInstance requires argPackAdvance");var d=a.name;if(o||gI('type "'+d+'" must have a positive integer typeid pointer'),FB.hasOwnProperty(o)){if(c.ignoreDuplicateRegistrations)return;gI("Cannot register type '"+d+"' twice")}if(FB[o]=a,delete sQ[o],hC.hasOwnProperty(o)){var S=hC[o];delete hC[o],S.forEach(function(U){return U()})}}function Ng(o){gI(o.$$.ptrType.registeredClass.name+" instance already deleted")}var UC=!1;function qB(o){}function Ji(o){o.count.value-=1,o.count.value===0&&function(a){a.smartPtr?a.smartPtrType.rawDestructor(a.smartPtr):a.ptrType.registeredClass.rawDestructor(a.ptr)}(o)}function Ki(o,a,c){if(a===c)return o;if(c.baseClass===void 0)return null;var d=Ki(o,a,c.baseClass);return d===null?null:c.downcast(d)}var lC={},LC=[];function uB(){for(;LC.length;){var o=LC.pop();o.$$.deleteScheduled=!1,o.delete()}}var nQ=void 0,hQ={};function JC(o,a){return a.ptrType&&a.ptr||bB("makeClassHandle requires ptr and ptrType"),!!a.smartPtrType!=!!a.smartPtr&&bB("Both smartPtrType and smartPtr must be specified"),a.count={value:1},KC(Object.create(o,{$$:{value:a}}))}function KC(o){return typeof FinalizationRegistry>"u"?(KC=function(a){return a},o):(UC=new FinalizationRegistry(function(a){Ji(a.$$)}),KC=function(a){var c=a.$$;if(c.smartPtr){var d={$$:c};UC.register(a,d,a)}return a},qB=function(a){return UC.unregister(a)},KC(o))}function YC(){}function vE(o,a,c){if(o[a].overloadTable===void 0){var d=o[a];o[a]=function(){return o[a].overloadTable.hasOwnProperty(arguments.length)||gI("Function '"+c+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+o[a].overloadTable+")!"),o[a].overloadTable[arguments.length].apply(this,arguments)},o[a].overloadTable=[],o[a].overloadTable[d.argCount]=d}}function AQ(o,a,c){l.hasOwnProperty(o)?((c===void 0||l[o].overloadTable!==void 0&&l[o].overloadTable[c]!==void 0)&&gI("Cannot register public name '"+o+"' twice"),vE(l,o,o),l.hasOwnProperty(c)&&gI("Cannot register multiple overloads of a function with the same number of arguments ("+c+")!"),l[o].overloadTable[c]=a):(l[o]=a,c!==void 0&&(l[o].numArguments=c))}function wC(o,a,c,d,S,U,Z,O){this.name=o,this.constructor=a,this.instancePrototype=c,this.rawDestructor=d,this.baseClass=S,this.getActualType=U,this.upcast=Z,this.downcast=O,this.pureVirtualFunctions=[]}function cQ(o,a,c){for(;a!==c;)a.upcast||gI("Expected null or instance of "+c.name+", got an instance of "+a.name),o=a.upcast(o),a=a.baseClass;return o}function kQ(o,a){if(a===null)return this.isReference&&gI("null is not a valid "+this.name),0;a.$$||gI('Cannot pass "'+LQ(a)+'" as a '+this.name),a.$$.ptr||gI("Cannot pass deleted object as a pointer of type "+this.name);var c=a.$$.ptrType.registeredClass;return cQ(a.$$.ptr,c,this.registeredClass)}function Ht(o,a){var c;if(a===null)return this.isReference&&gI("null is not a valid "+this.name),this.isSmartPointer?(c=this.rawConstructor(),o!==null&&o.push(this.rawDestructor,c),c):0;a.$$||gI('Cannot pass "'+LQ(a)+'" as a '+this.name),a.$$.ptr||gI("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&a.$$.ptrType.isConst&&gI("Cannot convert argument of type "+(a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name)+" to parameter type "+this.name);var d=a.$$.ptrType.registeredClass;if(c=cQ(a.$$.ptr,d,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&gI("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?c=a.$$.smartPtr:gI("Cannot convert argument of type "+(a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:c=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)c=a.$$.smartPtr;else{var S=a.clone();c=this.rawShare(c,DQ.toHandle(function(){S.delete()})),o!==null&&o.push(this.rawDestructor,c)}break;default:gI("Unsupporting sharing policy")}return c}function bt(o,a){if(a===null)return this.isReference&&gI("null is not a valid "+this.name),0;a.$$||gI('Cannot pass "'+LQ(a)+'" as a '+this.name),a.$$.ptr||gI("Cannot pass deleted object as a pointer of type "+this.name),a.$$.ptrType.isConst&&gI("Cannot convert argument of type "+a.$$.ptrType.name+" to parameter type "+this.name);var c=a.$$.ptrType.registeredClass;return cQ(a.$$.ptr,c,this.registeredClass)}function EC(o,a,c,d,S,U,Z,O,rA,dA,WA){this.name=o,this.registeredClass=a,this.isReference=c,this.isConst=d,this.isSmartPointer=S,this.pointeeType=U,this.sharingPolicy=Z,this.rawGetPointee=O,this.rawConstructor=rA,this.rawShare=dA,this.rawDestructor=WA,S||a.baseClass!==void 0?this.toWireType=Ht:d?(this.toWireType=kQ,this.destructorFunction=null):(this.toWireType=bt,this.destructorFunction=null)}function WE(o,a,c){l.hasOwnProperty(o)||bB("Replacing nonexistant public symbol"),l[o].overloadTable!==void 0&&c!==void 0?l[o].overloadTable[c]=a:(l[o]=a,l[o].argCount=c)}function iC(o){return x.get(o)}function qt(o,a,c){return o.includes("j")?function(d,S,U){var Z=l["dynCall_"+d];return U&&U.length?Z.apply(null,[S].concat(U)):Z.call(null,S)}(o,a,c):iC(a).apply(null,c)}function xB(o,a){var c,d,S,U=(o=AB(o)).includes("j")?(c=o,d=a,S=[],function(){return S.length=0,Object.assign(S,arguments),qt(c,d,S)}):iC(a);return typeof U!="function"&&gI("unknown function pointer with signature "+o+": "+a),U}var II=void 0;function vB(o){var a=jB(o),c=AB(a);return fg(a),c}function WB(o,a){var c=[],d={};throw a.forEach(function S(U){d[U]||FB[U]||(sQ[U]?sQ[U].forEach(S):(c.push(U),d[U]=!0))}),new II(o+": "+c.map(vB).join([", "]))}function UQ(o,a){for(var c=[],d=0;d<o;d++)c.push(AI[a+4*d>>2]);return c}function PB(o,a,c,d,S){var U=a.length;U<2&&gI("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var Z=a[1]!==null&&c!==null,O=!1,rA=1;rA<a.length;++rA)if(a[rA]!==null&&a[rA].destructorFunction===void 0){O=!0;break}var dA=a[0].name!=="void",WA="",KA="";for(rA=0;rA<U-2;++rA)WA+=(rA!==0?", ":"")+"arg"+rA,KA+=(rA!==0?", ":"")+"arg"+rA+"Wired";var GA="return function "+xE(o)+"("+WA+`) {
if (arguments.length !== `+(U-2)+`) {
throwBindingError('function `+o+" called with ' + arguments.length + ' arguments, expected "+(U-2)+` args!');
}
`;O&&(GA+=`var destructors = [];
`);var XA=O?"destructors":"null",gg=["throwBindingError","invoker","fn","runDestructors","retType","classParam"],zg=[gI,d,S,aQ,a[0],a[1]];for(Z&&(GA+="var thisWired = classParam.toWireType("+XA+`, this);
`),rA=0;rA<U-2;++rA)GA+="var arg"+rA+"Wired = argType"+rA+".toWireType("+XA+", arg"+rA+"); // "+a[rA+2].name+`
`,gg.push("argType"+rA),zg.push(a[rA+2]);if(Z&&(KA="thisWired"+(KA.length>0?", ":"")+KA),GA+=(dA?"var rv = ":"")+"invoker(fn"+(KA.length>0?", ":"")+KA+`);
`,O)GA+=`runDestructors(destructors);
`;else for(rA=Z?1:2;rA<a.length;++rA){var Rg=rA===1?"thisWired":"arg"+(rA-2)+"Wired";a[rA].destructorFunction!==null&&(GA+=Rg+"_dtor("+Rg+"); // "+a[rA].name+`
`,gg.push(Rg+"_dtor"),zg.push(a[rA].destructorFunction))}return dA&&(GA+=`var ret = retType.fromWireType(rv);
return ret;
`),GA+=`}
`,gg.push(GA),function(vg,fA){if(!(vg instanceof Function))throw new TypeError("new_ called with constructor type "+QI(vg)+" which is not a function");var cg=$C(vg.name||"unknownFunctionName",function(){});cg.prototype=vg.prototype;var NI=new cg,rI=vg.apply(NI,fA);return rI instanceof Object?rI:NI}(Function,gg).apply(null,zg)}var HC=[],sB=[{},{value:void 0},{value:null},{value:!0},{value:!1}];function TE(o){o>4&&--sB[o].refcount==0&&(sB[o]=void 0,HC.push(o))}var DQ={toValue:function(o){return o||gI("Cannot use deleted val. handle = "+o),sB[o].value},toHandle:function(o){switch(o){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var a=HC.length?HC.pop():sB.length;return sB[a]={refcount:1,value:o},a}}};function LQ(o){if(o===null)return"null";var a=QI(o);return a==="object"||a==="array"||a==="function"?o.toString():""+o}function ZE(o,a){switch(a){case 2:return function(c){return this.fromWireType(HA[c>>2])};case 3:return function(c){return this.fromWireType(_I[c>>3])};default:throw new TypeError("Unknown float type: "+o)}}function TB(o,a,c){switch(a){case 0:return c?function(d){return bI[d]}:function(d){return XI[d]};case 1:return c?function(d){return pB[d>>1]}:function(d){return wB[d>>1]};case 2:return c?function(d){return $A[d>>2]}:function(d){return AI[d>>2]};default:throw new TypeError("Unknown integer type: "+o)}}var Yi=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function rB(o,a){for(var c=o,d=c>>1,S=d+a/2;!(d>=S)&&wB[d];)++d;if((c=d<<1)-o>32&&Yi)return Yi.decode(XI.subarray(o,c));for(var U="",Z=0;!(Z>=a/2);++Z){var O=pB[o+2*Z>>1];if(O==0)break;U+=String.fromCharCode(O)}return U}function Hi(o,a,c){if(c===void 0&&(c=2147483647),c<2)return 0;for(var d=a,S=(c-=2)<2*o.length?c/2:o.length,U=0;U<S;++U){var Z=o.charCodeAt(U);pB[a>>1]=Z,a+=2}return pB[a>>1]=0,a-d}function XB(o){return 2*o.length}function tE(o,a){for(var c=0,d="";!(c>=a/4);){var S=$A[o+4*c>>2];if(S==0)break;if(++c,S>=65536){var U=S-65536;d+=String.fromCharCode(55296|U>>10,56320|1023&U)}else d+=String.fromCharCode(S)}return d}function OE(o,a,c){if(c===void 0&&(c=2147483647),c<4)return 0;for(var d=a,S=d+c-4,U=0;U<o.length;++U){var Z=o.charCodeAt(U);if(Z>=55296&&Z<=57343&&(Z=65536+((1023&Z)<<10)|1023&o.charCodeAt(++U)),$A[a>>2]=Z,(a+=4)+4>S)break}return $A[a>>2]=0,a-d}function sg(o){for(var a=0,c=0;c<o.length;++c){var d=o.charCodeAt(c);d>=55296&&d<=57343&&++c,a+=4}return a}function BB(o){var a=fC(o)+1,c=KI(a);return c&&nC(o,bI,c,a),c}var tC=[];function TI(o){try{return aB.grow(o-OB.byteLength+65535>>>16),dB(aB.buffer),1}catch{}}var lQ={};function iI(){if(!iI.strings){var o={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:((typeof navigator>"u"?"undefined":QI(navigator))=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:tA||"./this.program"};for(var a in lQ)lQ[a]===void 0?delete o[a]:o[a]=lQ[a];var c=[];for(var a in o)c.push(a+"="+o[a]);iI.strings=c}return iI.strings}function wQ(o){return o%4==0&&(o%100!=0||o%400==0)}var eE=[31,29,31,30,31,30,31,31,30,31,30,31],Dg=[31,28,31,30,31,30,31,31,30,31,30,31];function bi(o,a,c,d){var S=$A[d+40>>2],U={tm_sec:$A[d>>2],tm_min:$A[d+4>>2],tm_hour:$A[d+8>>2],tm_mday:$A[d+12>>2],tm_mon:$A[d+16>>2],tm_year:$A[d+20>>2],tm_wday:$A[d+24>>2],tm_yday:$A[d+28>>2],tm_isdst:$A[d+32>>2],tm_gmtoff:$A[d+36>>2],tm_zone:S?BE(S):""},Z=BE(c),O={"%c":"%a %b %d %H:%M:%S %Y","%D":"%m/%d/%y","%F":"%Y-%m-%d","%h":"%b","%r":"%I:%M:%S %p","%R":"%H:%M","%T":"%H:%M:%S","%x":"%m/%d/%y","%X":"%H:%M:%S","%Ec":"%c","%EC":"%C","%Ex":"%m/%d/%y","%EX":"%H:%M:%S","%Ey":"%y","%EY":"%Y","%Od":"%d","%Oe":"%e","%OH":"%H","%OI":"%I","%Om":"%m","%OM":"%M","%OS":"%S","%Ou":"%u","%OU":"%U","%OV":"%V","%Ow":"%w","%OW":"%W","%Oy":"%y"};for(var rA in O)Z=Z.replace(new RegExp(rA,"g"),O[rA]);var dA=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],WA=["January","February","March","April","May","June","July","August","September","October","November","December"];function KA(fA,cg,NI){for(var rI=typeof fA=="number"?fA.toString():fA||"";rI.length<cg;)rI=NI[0]+rI;return rI}function GA(fA,cg){return KA(fA,cg,"0")}function XA(fA,cg){function NI(GB){return GB<0?-1:GB>0?1:0}var rI;return(rI=NI(fA.getFullYear()-cg.getFullYear()))===0&&(rI=NI(fA.getMonth()-cg.getMonth()))===0&&(rI=NI(fA.getDate()-cg.getDate())),rI}function gg(fA){switch(fA.getDay()){case 0:return new Date(fA.getFullYear()-1,11,29);case 1:return fA;case 2:return new Date(fA.getFullYear(),0,3);case 3:return new Date(fA.getFullYear(),0,2);case 4:return new Date(fA.getFullYear(),0,1);case 5:return new Date(fA.getFullYear()-1,11,31);case 6:return new Date(fA.getFullYear()-1,11,30)}}function zg(fA){var cg=function(bC,yC){for(var hB=new Date(bC.getTime());yC>0;){var oE=wQ(hB.getFullYear()),aE=hB.getMonth(),qi=(oE?eE:Dg)[aE];if(!(yC>qi-hB.getDate()))return hB.setDate(hB.getDate()+yC),hB;yC-=qi-hB.getDate()+1,hB.setDate(1),aE<11?hB.setMonth(aE+1):(hB.setMonth(0),hB.setFullYear(hB.getFullYear()+1))}return hB}(new Date(fA.tm_year+1900,0,1),fA.tm_yday),NI=new Date(cg.getFullYear(),0,4),rI=new Date(cg.getFullYear()+1,0,4),GB=gg(NI),gB=gg(rI);return XA(GB,cg)<=0?XA(gB,cg)<=0?cg.getFullYear()+1:cg.getFullYear():cg.getFullYear()-1}var Rg={"%a":function(fA){return dA[fA.tm_wday].substring(0,3)},"%A":function(fA){return dA[fA.tm_wday]},"%b":function(fA){return WA[fA.tm_mon].substring(0,3)},"%B":function(fA){return WA[fA.tm_mon]},"%C":function(fA){return GA((fA.tm_year+1900)/100|0,2)},"%d":function(fA){return GA(fA.tm_mday,2)},"%e":function(fA){return KA(fA.tm_mday,2," ")},"%g":function(fA){return zg(fA).toString().substring(2)},"%G":function(fA){return zg(fA)},"%H":function(fA){return GA(fA.tm_hour,2)},"%I":function(fA){var cg=fA.tm_hour;return cg==0?cg=12:cg>12&&(cg-=12),GA(cg,2)},"%j":function(fA){return GA(fA.tm_mday+function(cg,NI){for(var rI=0,GB=0;GB<=NI;rI+=cg[GB++]);return rI}(wQ(fA.tm_year+1900)?eE:Dg,fA.tm_mon-1),3)},"%m":function(fA){return GA(fA.tm_mon+1,2)},"%M":function(fA){return GA(fA.tm_min,2)},"%n":function(){return`
`},"%p":function(fA){return fA.tm_hour>=0&&fA.tm_hour<12?"AM":"PM"},"%S":function(fA){return GA(fA.tm_sec,2)},"%t":function(){return"	"},"%u":function(fA){return fA.tm_wday||7},"%U":function(fA){var cg=fA.tm_yday+7-fA.tm_wday;return GA(Math.floor(cg/7),2)},"%V":function(fA){var cg=Math.floor((fA.tm_yday+7-(fA.tm_wday+6)%7)/7);if((fA.tm_wday+371-fA.tm_yday-2)%7<=2&&cg++,cg){if(cg==53){var NI=(fA.tm_wday+371-fA.tm_yday)%7;NI==4||NI==3&&wQ(fA.tm_year)||(cg=1)}}else{cg=52;var rI=(fA.tm_wday+7-fA.tm_yday-1)%7;(rI==4||rI==5&&wQ(fA.tm_year%400-1))&&cg++}return GA(cg,2)},"%w":function(fA){return fA.tm_wday},"%W":function(fA){var cg=fA.tm_yday+7-(fA.tm_wday+6)%7;return GA(Math.floor(cg/7),2)},"%y":function(fA){return(fA.tm_year+1900).toString().substring(2)},"%Y":function(fA){return fA.tm_year+1900},"%z":function(fA){var cg=fA.tm_gmtoff,NI=cg>=0;return cg=(cg=Math.abs(cg)/60)/60*100+cg%60,(NI?"+":"-")+String("0000"+cg).slice(-4)},"%Z":function(fA){return fA.tm_zone},"%%":function(){return"%"}};for(var rA in Z=Z.replace(/%%/g,"\0\0"),Rg)Z.includes(rA)&&(Z=Z.replace(new RegExp(rA,"g"),Rg[rA](U)));var vg=oQ(Z=Z.replace(/\0\0/g,"%"),!1);return vg.length>a?0:(function(fA,cg){bI.set(fA,cg)}(vg,o),vg.length-1)}var mB=function(o,a,c,d){o||(o=this),this.parent=o,this.mount=o.mount,this.mounted=null,this.id=M.nextInode++,this.name=a,this.mode=c,this.node_ops={},this.stream_ops={},this.rdev=d};Object.defineProperties(mB.prototype,{read:{get:function(){return(365&this.mode)==365},set:function(o){o?this.mode|=365:this.mode&=-366}},write:{get:function(){return(146&this.mode)==146},set:function(o){o?this.mode|=146:this.mode&=-147}},isFolder:{get:function(){return M.isDir(this.mode)}},isDevice:{get:function(){return M.isChrdev(this.mode)}}}),M.FSNode=mB,M.staticInit(),kC=l.InternalError=NQ(Error,"InternalError"),function(){for(var o=new Array(256),a=0;a<256;++a)o[a]=String.fromCharCode(a);cC=o}(),DC=l.BindingError=NQ(Error,"BindingError"),YC.prototype.isAliasOf=function(o){if(!(this instanceof YC)||!(o instanceof YC))return!1;for(var a=this.$$.ptrType.registeredClass,c=this.$$.ptr,d=o.$$.ptrType.registeredClass,S=o.$$.ptr;a.baseClass;)c=a.upcast(c),a=a.baseClass;for(;d.baseClass;)S=d.upcast(S),d=d.baseClass;return a===d&&c===S},YC.prototype.clone=function(){if(this.$$.ptr||Ng(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var o,a=KC(Object.create(Object.getPrototypeOf(this),{$$:{value:(o=this.$$,{count:o.count,deleteScheduled:o.deleteScheduled,preservePointerOnDelete:o.preservePointerOnDelete,ptr:o.ptr,ptrType:o.ptrType,smartPtr:o.smartPtr,smartPtrType:o.smartPtrType})}}));return a.$$.count.value+=1,a.$$.deleteScheduled=!1,a},YC.prototype.delete=function(){this.$$.ptr||Ng(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gI("Object already scheduled for deletion"),qB(this),Ji(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},YC.prototype.isDeleted=function(){return!this.$$.ptr},YC.prototype.deleteLater=function(){return this.$$.ptr||Ng(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&gI("Object already scheduled for deletion"),LC.push(this),LC.length===1&&nQ&&nQ(uB),this.$$.deleteScheduled=!0,this},l.getInheritedInstanceCount=function(){return Object.keys(hQ).length},l.getLiveInheritedInstances=function(){var o=[];for(var a in hQ)hQ.hasOwnProperty(a)&&o.push(hQ[a]);return o},l.flushPendingDeletes=uB,l.setDelayFunction=function(o){nQ=o,LC.length&&nQ&&nQ(uB)},EC.prototype.getPointee=function(o){return this.rawGetPointee&&(o=this.rawGetPointee(o)),o},EC.prototype.destructor=function(o){this.rawDestructor&&this.rawDestructor(o)},EC.prototype.argPackAdvance=8,EC.prototype.readValueFromPointer=NC,EC.prototype.deleteObject=function(o){o!==null&&o.delete()},EC.prototype.fromWireType=function(o){var a=this.getPointee(o);if(!a)return this.destructor(o),null;var c=function(dA,WA){return WA=function(KA,GA){for(GA===void 0&&gI("ptr should not be undefined");KA.baseClass;)GA=KA.upcast(GA),KA=KA.baseClass;return GA}(dA,WA),hQ[WA]}(this.registeredClass,a);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=a,c.$$.smartPtr=o,c.clone();var d=c.clone();return this.destructor(o),d}function S(){return this.isSmartPointer?JC(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:o}):JC(this.registeredClass.instancePrototype,{ptrType:this,ptr:o})}var U,Z=this.registeredClass.getActualType(a),O=lC[Z];if(!O)return S.call(this);U=this.isConst?O.constPointerType:O.pointerType;var rA=Ki(a,this.registeredClass,U.registeredClass);return rA===null?S.call(this):this.isSmartPointer?JC(U.registeredClass.instancePrototype,{ptrType:U,ptr:rA,smartPtrType:this,smartPtr:o}):JC(U.registeredClass.instancePrototype,{ptrType:U,ptr:rA})},II=l.UnboundTypeError=NQ(Error,"UnboundTypeError"),l.count_emval_handles=function(){for(var o=0,a=5;a<sB.length;++a)sB[a]!==void 0&&++o;return o},l.get_first_emval=function(){for(var o=5;o<sB.length;++o)if(sB[o]!==void 0)return sB[o];return null};var VE=typeof atob=="function"?atob:function(o){var a,c,d,S,U,Z,O="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",rA="",dA=0;o=o.replace(/[^A-Za-z0-9\+\/\=]/g,"");do a=O.indexOf(o.charAt(dA++))<<2|(S=O.indexOf(o.charAt(dA++)))>>4,c=(15&S)<<4|(U=O.indexOf(o.charAt(dA++)))>>2,d=(3&U)<<6|(Z=O.indexOf(o.charAt(dA++))),rA+=String.fromCharCode(a),U!==64&&(rA+=String.fromCharCode(c)),Z!==64&&(rA+=String.fromCharCode(d));while(dA<o.length);return rA};function _B(o){if(qE(o))return function(a){if(typeof Cg=="boolean"&&Cg){var c=Buffer.from(a,"base64");return new Uint8Array(c.buffer,c.byteOffset,c.byteLength)}try{for(var d=VE(a),S=new Uint8Array(d.length),U=0;U<d.length;++U)S[U]=d.charCodeAt(U);return S}catch{throw new Error("Converting base64 string to bytes failed.")}}(o.slice(iE.length))}var nB,JQ={g:function(o){return KI(o+24)+24},f:function(o,a,c){throw new jC(o).init(a,c),o},o:function(o,a,c){wI.varargs=c;try{var d=wI.getStreamFromFD(o);switch(a){case 0:return(S=wI.get())<0?-28:M.createStream(d,S).fd;case 1:case 2:case 6:case 7:return 0;case 3:return d.flags;case 4:var S=wI.get();return d.flags|=S,0;case 5:return S=wI.get(),pB[S+0>>1]=2,0;case 16:case 8:default:return-28;case 9:return $A[PE()>>2]=28,-1}}catch(U){if(M===void 0||!(U instanceof M.ErrnoError))throw U;return-U.errno}},G:function(o,a,c){wI.varargs=c;try{var d=wI.getStreamFromFD(o);switch(a){case 21509:case 21505:case 21510:case 21511:case 21512:case 21506:case 21507:case 21508:case 21523:case 21524:return d.tty?0:-59;case 21519:if(!d.tty)return-59;var S=wI.get();return $A[S>>2]=0,0;case 21520:return d.tty?-28:-59;case 21531:return S=wI.get(),M.ioctl(d,a,S);default:return-28}}catch(U){if(M===void 0||!(U instanceof M.ErrnoError))throw U;return-U.errno}},H:function(o,a,c,d){wI.varargs=d;try{a=wI.getStr(a),a=wI.calculateAt(o,a);var S=d?wI.get():0;return M.open(a,c,S).fd}catch(U){if(M===void 0||!(U instanceof M.ErrnoError))throw U;return-U.errno}},R:function(o){var a=CC[o];delete CC[o];var c=a.rawConstructor,d=a.rawDestructor,S=a.fields;QC([o],S.map(function(U){return U.getterReturnType}).concat(S.map(function(U){return U.setterArgumentType})),function(U){var Z={};return S.forEach(function(O,rA){var dA=O.fieldName,WA=U[rA],KA=O.getter,GA=O.getterContext,XA=U[rA+S.length],gg=O.setter,zg=O.setterContext;Z[dA]={read:function(Rg){return WA.fromWireType(KA(GA,Rg))},write:function(Rg,vg){var fA=[];gg(zg,Rg,XA.toWireType(fA,vg)),aQ(fA)}}}),[{name:a.name,fromWireType:function(O){var rA={};for(var dA in Z)rA[dA]=Z[dA].read(O);return d(O),rA},toWireType:function(O,rA){for(var dA in Z)if(!(dA in rA))throw new TypeError('Missing field:  "'+dA+'"');var WA=c();for(dA in Z)Z[dA].write(WA,rA[dA]);return O!==null&&O.push(d,WA),WA},argPackAdvance:8,readValueFromPointer:NC,destructorFunction:d}]})},y:function(o,a,c,d,S){},L:function(o,a,c,d,S){var U=rQ(c);fB(o,{name:a=AB(a),fromWireType:function(Z){return!!Z},toWireType:function(Z,O){return O?d:S},argPackAdvance:8,readValueFromPointer:function(Z){var O;if(c===1)O=bI;else if(c===2)O=pB;else{if(c!==4)throw new TypeError("Unknown boolean type size: "+a);O=$A}return this.fromWireType(O[Z>>U])},destructorFunction:null})},U:function(o,a,c,d,S,U,Z,O,rA,dA,WA,KA,GA){WA=AB(WA),U=xB(S,U),O&&(O=xB(Z,O)),dA&&(dA=xB(rA,dA)),GA=xB(KA,GA);var XA=xE(WA);AQ(XA,function(){WB("Cannot construct "+WA+" due to unbound types",[d])}),QC([o,a,c],d?[d]:[],function(gg){var zg,Rg;gg=gg[0],Rg=d?(zg=gg.registeredClass).instancePrototype:YC.prototype;var vg=$C(XA,function(){if(Object.getPrototypeOf(this)!==fA)throw new DC("Use 'new' to construct "+WA);if(cg.constructor_body===void 0)throw new DC(WA+" has no accessible constructor");var gB=cg.constructor_body[arguments.length];if(gB===void 0)throw new DC("Tried to invoke ctor of "+WA+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(cg.constructor_body).toString()+") parameters instead!");return gB.apply(this,arguments)}),fA=Object.create(Rg,{constructor:{value:vg}});vg.prototype=fA;var cg=new wC(WA,vg,fA,GA,zg,U,O,dA),NI=new EC(WA,cg,!0,!1,!1),rI=new EC(WA+"*",cg,!1,!1,!1),GB=new EC(WA+" const*",cg,!1,!0,!1);return lC[o]={pointerType:rI,constPointerType:GB},WE(XA,vg),[NI,rI,GB]})},Q:function(o,a,c,d,S,U){PI(a>0);var Z=UQ(a,c);S=xB(d,S),QC([],[o],function(O){var rA="constructor "+(O=O[0]).name;if(O.registeredClass.constructor_body===void 0&&(O.registeredClass.constructor_body=[]),O.registeredClass.constructor_body[a-1]!==void 0)throw new DC("Cannot register multiple constructors with identical number of parameters ("+(a-1)+") for class '"+O.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return O.registeredClass.constructor_body[a-1]=function(){WB("Cannot construct "+O.name+" due to unbound types",Z)},QC([],Z,function(dA){return dA.splice(1,0,null),O.registeredClass.constructor_body[a-1]=PB(rA,dA,null,S,U),[]}),[]})},h:function(o,a,c,d,S,U,Z,O){var rA=UQ(c,d);a=AB(a),U=xB(S,U),QC([],[o],function(dA){var WA=(dA=dA[0]).name+"."+a;function KA(){WB("Cannot call "+WA+" due to unbound types",rA)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]),O&&dA.registeredClass.pureVirtualFunctions.push(a);var GA=dA.registeredClass.instancePrototype,XA=GA[a];return XA===void 0||XA.overloadTable===void 0&&XA.className!==dA.name&&XA.argCount===c-2?(KA.argCount=c-2,KA.className=dA.name,GA[a]=KA):(vE(GA,a,WA),GA[a].overloadTable[c-2]=KA),QC([],rA,function(gg){var zg=PB(WA,gg,dA,U,Z);return GA[a].overloadTable===void 0?(zg.argCount=c-2,GA[a]=zg):GA[a].overloadTable[c-2]=zg,[]}),[]})},s:function(o,a,c){o=AB(o),QC([],[a],function(d){return d=d[0],l[o]=d.fromWireType(c),[]})},K:function(o,a){fB(o,{name:a=AB(a),fromWireType:function(c){var d=DQ.toValue(c);return TE(c),d},toWireType:function(c,d){return DQ.toHandle(d)},argPackAdvance:8,readValueFromPointer:NC,destructorFunction:null})},r:function(o,a,c){var d=rQ(c);fB(o,{name:a=AB(a),fromWireType:function(S){return S},toWireType:function(S,U){return U},argPackAdvance:8,readValueFromPointer:ZE(a,d),destructorFunction:null})},d:function(o,a,c,d,S,U){var Z=UQ(a,c);o=AB(o),S=xB(d,S),AQ(o,function(){WB("Cannot call "+o+" due to unbound types",Z)},a-1),QC([],Z,function(O){var rA=[O[0],null].concat(O.slice(1));return WE(o,PB(o,rA,null,S,U),a-1),[]})},e:function(o,a,c,d,S){a=AB(a);var U=rQ(c),Z=function(dA){return dA};if(d===0){var O=32-8*c;Z=function(dA){return dA<<O>>>O}}var rA=a.includes("unsigned");fB(o,{name:a,fromWireType:Z,toWireType:rA?function(dA,WA){return this.name,WA>>>0}:function(dA,WA){return this.name,WA},argPackAdvance:8,readValueFromPointer:TB(a,U,d!==0),destructorFunction:null})},c:function(o,a,c){var d=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][a];function S(U){var Z=AI,O=Z[U>>=2],rA=Z[U+1];return new d(OB,rA,O)}fB(o,{name:c=AB(c),fromWireType:S,argPackAdvance:8,readValueFromPointer:S},{ignoreDuplicateRegistrations:!0})},q:function(o,a){var c=(a=AB(a))==="std::string";fB(o,{name:a,fromWireType:function(d){var S,U=AI[d>>2],Z=d+4;if(c)for(var O=Z,rA=0;rA<=U;++rA){var dA=Z+rA;if(rA==U||XI[dA]==0){var WA=BE(O,dA-O);S===void 0?S=WA:(S+=String.fromCharCode(0),S+=WA),O=dA+1}}else{var KA=new Array(U);for(rA=0;rA<U;++rA)KA[rA]=String.fromCharCode(XI[Z+rA]);S=KA.join("")}return fg(d),S},toWireType:function(d,S){var U;S instanceof ArrayBuffer&&(S=new Uint8Array(S));var Z=typeof S=="string";Z||S instanceof Uint8Array||S instanceof Uint8ClampedArray||S instanceof Int8Array||gI("Cannot pass non-string to std::string"),U=c&&Z?fC(S):S.length;var O=KI(4+U+1),rA=O+4;if(AI[O>>2]=U,c&&Z)nC(S,XI,rA,U+1);else if(Z)for(var dA=0;dA<U;++dA){var WA=S.charCodeAt(dA);WA>255&&(fg(rA),gI("String has UTF-16 code units that do not fit in 8 bits")),XI[rA+dA]=WA}else for(dA=0;dA<U;++dA)XI[rA+dA]=S[dA];return d!==null&&d.push(fg,O),O},argPackAdvance:8,readValueFromPointer:NC,destructorFunction:function(d){fg(d)}})},l:function(o,a,c){var d,S,U,Z,O;c=AB(c),a===2?(d=rB,S=Hi,Z=XB,U=function(){return wB},O=1):a===4&&(d=tE,S=OE,Z=sg,U=function(){return AI},O=2),fB(o,{name:c,fromWireType:function(rA){for(var dA,WA=AI[rA>>2],KA=U(),GA=rA+4,XA=0;XA<=WA;++XA){var gg=rA+4+XA*a;if(XA==WA||KA[gg>>O]==0){var zg=d(GA,gg-GA);dA===void 0?dA=zg:(dA+=String.fromCharCode(0),dA+=zg),GA=gg+a}}return fg(rA),dA},toWireType:function(rA,dA){typeof dA!="string"&&gI("Cannot pass non-string to C++ string type "+c);var WA=Z(dA),KA=KI(4+WA+a);return AI[KA>>2]=WA>>O,S(dA,KA+4,WA+a),rA!==null&&rA.push(fg,KA),KA},argPackAdvance:8,readValueFromPointer:NC,destructorFunction:function(rA){fg(rA)}})},T:function(o,a,c,d,S,U){CC[o]={name:AB(a),rawConstructor:xB(c,d),rawDestructor:xB(S,U),fields:[]}},S:function(o,a,c,d,S,U,Z,O,rA,dA){CC[o].fields.push({fieldName:AB(a),getterReturnType:c,getter:xB(d,S),getterContext:U,setterArgumentType:Z,setter:xB(O,rA),setterContext:dA})},M:function(o,a){fB(o,{isVoid:!0,name:a=AB(a),argPackAdvance:0,fromWireType:function(){},toWireType:function(c,d){}})},p:function(){return Date.now()},A:function(){throw 1/0},O:TE,P:function(o){o>4&&(sB[o].refcount+=1)},N:function(o,a){var c,d;(d=FB[c=o])===void 0&&gI("_emval_take_value has unknown type "+vB(c));var S=(o=d).readValueFromPointer(a);return DQ.toHandle(S)},I:function(o,a){var c,d=new Date(1e3*(AI[(c=o)>>2]+4294967296*$A[c+4>>2]));$A[a>>2]=d.getSeconds(),$A[a+4>>2]=d.getMinutes(),$A[a+8>>2]=d.getHours(),$A[a+12>>2]=d.getDate(),$A[a+16>>2]=d.getMonth(),$A[a+20>>2]=d.getFullYear()-1900,$A[a+24>>2]=d.getDay();var S=new Date(d.getFullYear(),0,1),U=(d.getTime()-S.getTime())/864e5|0;$A[a+28>>2]=U,$A[a+36>>2]=-60*d.getTimezoneOffset();var Z=new Date(d.getFullYear(),6,1).getTimezoneOffset(),O=S.getTimezoneOffset(),rA=0|(Z!=O&&d.getTimezoneOffset()==Math.min(O,Z));$A[a+32>>2]=rA},J:function o(a,c,d){o.called||(o.called=!0,function(S,U,Z){var O=new Date().getFullYear(),rA=new Date(O,0,1),dA=new Date(O,6,1),WA=rA.getTimezoneOffset(),KA=dA.getTimezoneOffset(),GA=Math.max(WA,KA);function XA(fA){var cg=fA.toTimeString().match(/\(([A-Za-z ]+)\)$/);return cg?cg[1]:"GMT"}$A[S>>2]=60*GA,$A[U>>2]=Number(WA!=KA);var gg=XA(rA),zg=XA(dA),Rg=BB(gg),vg=BB(zg);KA<WA?(AI[Z>>2]=Rg,AI[Z+4>>2]=vg):(AI[Z>>2]=vg,AI[Z+4>>2]=Rg)}(a,c,d))},a:function(){_C("")},i:function(o,a,c){var d=function(S,U){var Z;for(tC.length=0,U>>=2;Z=XI[S++];)U+=Z!=105&U,tC.push(Z==105?$A[U]:_I[U++>>1]),++U;return tC}(a,c);return VB[o].apply(null,d)},B:function(o){var a=XI.length,c=2147483648;if((o>>>=0)>c)return!1;for(var d,S=1;S<=4;S*=2){var U=a*(1+.2/S);if(U=Math.min(U,o+100663296),TI(Math.min(c,(d=Math.max(o,U))+(65536-d%65536)%65536)))return!0}return!1},C:function(o,a){var c=0;return iI().forEach(function(d,S){var U=a+c;AI[o+4*S>>2]=U,function(Z,O,rA){for(var dA=0;dA<Z.length;++dA)bI[O++>>0]=Z.charCodeAt(dA);bI[O>>0]=0}(d,U),c+=d.length+1}),0},D:function(o,a){var c=iI();AI[o>>2]=c.length;var d=0;return c.forEach(function(S){d+=S.length+1}),AI[a>>2]=d,0},b:function(o,a){var c;c=o,QE()||(l.onExit&&l.onExit(c),DI=!0),Ag(c,new eQ(c))},m:function(o){try{var a=wI.getStreamFromFD(o);return M.close(a),0}catch(c){if(M===void 0||!(c instanceof M.ErrnoError))throw c;return c.errno}},F:function(o,a,c,d){try{var S=function(U,Z,O,rA){for(var dA=0,WA=0;WA<O;WA++){var KA=AI[Z>>2],GA=AI[Z+4>>2];Z+=8;var XA=M.read(U,bI,KA,GA,void 0);if(XA<0)return-1;if(dA+=XA,XA<GA)break}return dA}(wI.getStreamFromFD(o),a,c);return AI[d>>2]=S,0}catch(U){if(M===void 0||!(U instanceof M.ErrnoError))throw U;return U.errno}},x:function(o,a,c,d,S){try{var U=(rA=c)+2097152>>>0<4194305-!!(O=a)?(O>>>0)+4294967296*rA:NaN;if(isNaN(U))return 61;var Z=wI.getStreamFromFD(o);return M.llseek(Z,U,d),mI=[Z.position>>>0,(xg=Z.position,+Math.abs(xg)>=1?xg>0?(0|Math.min(+Math.floor(xg/4294967296),4294967295))>>>0:~~+Math.ceil((xg-+(~~xg>>>0))/4294967296)>>>0:0)],$A[S>>2]=mI[0],$A[S+4>>2]=mI[1],Z.getdents&&U===0&&d===0&&(Z.getdents=null),0}catch(dA){if(M===void 0||!(dA instanceof M.ErrnoError))throw dA;return dA.errno}var O,rA},n:function(o,a,c,d){try{var S=function(U,Z,O,rA){for(var dA=0,WA=0;WA<O;WA++){var KA=AI[Z>>2],GA=AI[Z+4>>2];Z+=8;var XA=M.write(U,bI,KA,GA,void 0);if(XA<0)return-1;dA+=XA}return dA}(wI.getStreamFromFD(o),a,c);return AI[d>>2]=S,0}catch(U){if(M===void 0||!(U instanceof M.ErrnoError))throw U;return U.errno}},t:function(o,a){var c=dC();try{return iC(o)(a)}catch(d){if(ZB(c),d!==d+0)throw d;zB(1,0)}},v:function(o,a,c){var d=dC();try{return iC(o)(a,c)}catch(S){if(ZB(d),S!==S+0)throw S;zB(1,0)}},u:function(o,a,c,d){var S=dC();try{return iC(o)(a,c,d)}catch(U){if(ZB(S),U!==U+0)throw U;zB(1,0)}},j:function(o,a){var c=dC();try{iC(o)(a)}catch(d){if(ZB(c),d!==d+0)throw d;zB(1,0)}},w:function(o,a,c){var d=dC();try{iC(o)(a,c)}catch(S){if(ZB(d),S!==S+0)throw S;zB(1,0)}},E:function(o,a,c,d){var S=dC();try{iC(o)(a,c,d)}catch(U){if(ZB(S),U!==U+0)throw U;zB(1,0)}},k:function(o,a,c,d,S){var U=dC();try{iC(o)(a,c,d,S)}catch(Z){if(ZB(U),Z!==Z+0)throw Z;zB(1,0)}},V:bi,z:function(o,a,c,d){return bi(o,a,c,d)}},KI=(function(){var o={a:JQ};function a(S,U){var Z,O=S.exports;l.asm=O,dB((aB=l.asm.W).buffer),x=l.asm.$,Z=l.asm.X,bE.unshift(Z),EE()}function c(S){a(S.instance)}function d(S){return function(){if(!Gg&&(Qg||qA)){if(typeof fetch=="function"&&!JI(lI))return fetch(lI,{credentials:"same-origin"}).then(function(U){if(!U.ok)throw"failed to load wasm binary file at '"+lI+"'";return U.arrayBuffer()}).catch(function(){return oI(lI)});if(EA)return new Promise(function(U,Z){EA(lI,function(O){U(new Uint8Array(O))},Z)})}return Promise.resolve().then(function(){return oI(lI)})}().then(function(U){return WebAssembly.instantiate(U,o)}).then(function(U){return U}).then(S,function(U){cI("failed to asynchronously prepare wasm: "+U),_C(U)})}if(BC(),l.instantiateWasm)try{return l.instantiateWasm(o,a)}catch(S){return cI("Module.instantiateWasm callback failed with error: "+S),!1}(Gg||typeof WebAssembly.instantiateStreaming!="function"||qE(lI)||JI(lI)||Cg||typeof fetch!="function"?d(c):fetch(lI,{credentials:"same-origin"}).then(function(S){return WebAssembly.instantiateStreaming(S,o).then(c,function(U){return cI("wasm streaming compile failed: "+U),cI("falling back to ArrayBuffer instantiation"),d(c)})})).catch(W)}(),l.___wasm_call_ctors=function(){return(l.___wasm_call_ctors=l.asm.X).apply(null,arguments)},l._malloc=function(){return(KI=l._malloc=l.asm.Y).apply(null,arguments)}),fg=l._free=function(){return(fg=l._free=l.asm.Z).apply(null,arguments)},PE=l.___errno_location=function(){return(PE=l.___errno_location=l.asm._).apply(null,arguments)},jB=l.___getTypeName=function(){return(jB=l.___getTypeName=l.asm.aa).apply(null,arguments)},zB=(l.__embind_initialize_bindings=function(){return(l.__embind_initialize_bindings=l.asm.ba).apply(null,arguments)},l._setThrew=function(){return(zB=l._setThrew=l.asm.ca).apply(null,arguments)}),dC=l.stackSave=function(){return(dC=l.stackSave=l.asm.da).apply(null,arguments)},ZB=l.stackRestore=function(){return(ZB=l.stackRestore=l.asm.ea).apply(null,arguments)},dQ=l.___cxa_is_pointer_type=function(){return(dQ=l.___cxa_is_pointer_type=l.asm.fa).apply(null,arguments)};function yQ(o){function a(){nB||(nB=!0,l.calledRun=!0,DI||(l.noFSInit||M.init.initialized||M.init(),M.ignorePermissions=!1,mQ(bE),m(l),l.onRuntimeInitialized&&l.onRuntimeInitialized(),function(){if(l.postRun)for(typeof l.postRun=="function"&&(l.postRun=[l.postRun]);l.postRun.length;)c=l.postRun.shift(),PC.unshift(c);var c;mQ(PC)}()))}XC>0||(function(){if(l.preRun)for(typeof l.preRun=="function"&&(l.preRun=[l.preRun]);l.preRun.length;)c=l.preRun.shift(),CE.unshift(c);var c;mQ(CE)}(),XC>0||(l.setStatus?(l.setStatus("Running..."),setTimeout(function(){setTimeout(function(){l.setStatus("")},1),a()},1)):a()))}if(l.dynCall_jiji=function(){return(l.dynCall_jiji=l.asm.ga).apply(null,arguments)},l.dynCall_viijii=function(){return(l.dynCall_viijii=l.asm.ha).apply(null,arguments)},l.dynCall_iiiiij=function(){return(l.dynCall_iiiiij=l.asm.ia).apply(null,arguments)},l.dynCall_iiiiijj=function(){return(l.dynCall_iiiiijj=l.asm.ja).apply(null,arguments)},l.dynCall_iiiiiijj=function(){return(l.dynCall_iiiiiijj=l.asm.ka).apply(null,arguments)},l.FS=M,fQ=function o(){nB||yQ(),nB||(fQ=o)},l.preInit)for(typeof l.preInit=="function"&&(l.preInit=[l.preInit]);l.preInit.length>0;)l.preInit.pop()();return yQ(),l.ready});const TC=xI;function MI(l,m){return function(){return l.apply(m,arguments)}}const{toString:tB}=Object.prototype,{getPrototypeOf:Tg}=Object,OI=(SI=Object.create(null),l=>{const m=tB.call(l);return SI[m]||(SI[m]=m.slice(8,-1).toLowerCase())});var SI;const IB=l=>(l=l.toLowerCase(),m=>OI(m)===l),eB=l=>m=>typeof m===l,{isArray:VI}=Array,v=eB("undefined"),j=IB("ArrayBuffer"),sA=eB("string"),lA=eB("function"),FA=eB("number"),VA=l=>l!==null&&typeof l=="object",ng=l=>{if(OI(l)!=="object")return!1;const m=Tg(l);return!(m!==null&&m!==Object.prototype&&Object.getPrototypeOf(m)!==null||Symbol.toStringTag in l||Symbol.iterator in l)},yg=IB("Date"),bg=IB("File"),Vg=IB("Blob"),sI=IB("FileList"),vI=IB("URLSearchParams");function pI(l,m,{allOwnKeys:W=!1}={}){if(l==null)return;let z,EA;if(typeof l!="object"&&(l=[l]),VI(l))for(z=0,EA=l.length;z<EA;z++)m.call(null,l[z],z,l);else{const hA=W?Object.getOwnPropertyNames(l):Object.keys(l),aA=hA.length;let X;for(z=0;z<aA;z++)X=hA[z],m.call(null,l[X],X,l)}}function bA(l,m){m=m.toLowerCase();const W=Object.keys(l);let z,EA=W.length;for(;EA-- >0;)if(z=W[EA],m===z.toLowerCase())return z;return null}const JA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:nI.g,PA=l=>!v(l)&&l!==JA,ug=(DA=typeof Uint8Array<"u"&&Tg(Uint8Array),l=>DA&&l instanceof DA);var DA;const k=IB("HTMLFormElement"),f=(({hasOwnProperty:l})=>(m,W)=>l.call(m,W))(Object.prototype),H=IB("RegExp"),L=(l,m)=>{const W=Object.getOwnPropertyDescriptors(l),z={};pI(W,(EA,hA)=>{m(EA,hA,l)!==!1&&(z[hA]=EA)}),Object.defineProperties(l,z)},p={isArray:VI,isArrayBuffer:j,isBuffer:function(l){return l!==null&&!v(l)&&l.constructor!==null&&!v(l.constructor)&&lA(l.constructor.isBuffer)&&l.constructor.isBuffer(l)},isFormData:l=>{const m="[object FormData]";return l&&(typeof FormData=="function"&&l instanceof FormData||tB.call(l)===m||lA(l.toString)&&l.toString()===m)},isArrayBufferView:function(l){let m;return m=typeof ArrayBuffer<"u"&&ArrayBuffer.isView?ArrayBuffer.isView(l):l&&l.buffer&&j(l.buffer),m},isString:sA,isNumber:FA,isBoolean:l=>l===!0||l===!1,isObject:VA,isPlainObject:ng,isUndefined:v,isDate:yg,isFile:bg,isBlob:Vg,isRegExp:H,isFunction:lA,isStream:l=>VA(l)&&lA(l.pipe),isURLSearchParams:vI,isTypedArray:ug,isFileList:sI,forEach:pI,merge:function l(){const{caseless:m}=PA(this)&&this||{},W={},z=(EA,hA)=>{const aA=m&&bA(W,hA)||hA;ng(W[aA])&&ng(EA)?W[aA]=l(W[aA],EA):ng(EA)?W[aA]=l({},EA):VI(EA)?W[aA]=EA.slice():W[aA]=EA};for(let EA=0,hA=arguments.length;EA<hA;EA++)arguments[EA]&&pI(arguments[EA],z);return W},extend:(l,m,W,{allOwnKeys:z}={})=>(pI(m,(EA,hA)=>{W&&lA(EA)?l[hA]=MI(EA,W):l[hA]=EA},{allOwnKeys:z}),l),trim:l=>l.trim?l.trim():l.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:l=>(l.charCodeAt(0)===65279&&(l=l.slice(1)),l),inherits:(l,m,W,z)=>{l.prototype=Object.create(m.prototype,z),l.prototype.constructor=l,Object.defineProperty(l,"super",{value:m.prototype}),W&&Object.assign(l.prototype,W)},toFlatObject:(l,m,W,z)=>{let EA,hA,aA;const X={};if(m=m||{},l==null)return m;do{for(EA=Object.getOwnPropertyNames(l),hA=EA.length;hA-- >0;)aA=EA[hA],z&&!z(aA,l,m)||X[aA]||(m[aA]=l[aA],X[aA]=!0);l=W!==!1&&Tg(l)}while(l&&(!W||W(l,m))&&l!==Object.prototype);return m},kindOf:OI,kindOfTest:IB,endsWith:(l,m,W)=>{l=String(l),(W===void 0||W>l.length)&&(W=l.length),W-=m.length;const z=l.indexOf(m,W);return z!==-1&&z===W},toArray:l=>{if(!l)return null;if(VI(l))return l;let m=l.length;if(!FA(m))return null;const W=new Array(m);for(;m-- >0;)W[m]=l[m];return W},forEachEntry:(l,m)=>{const W=(l&&l[Symbol.iterator]).call(l);let z;for(;(z=W.next())&&!z.done;){const EA=z.value;m.call(l,EA[0],EA[1])}},matchAll:(l,m)=>{let W;const z=[];for(;(W=l.exec(m))!==null;)z.push(W);return z},isHTMLForm:k,hasOwnProperty:f,hasOwnProp:f,reduceDescriptors:L,freezeMethods:l=>{L(l,(m,W)=>{if(lA(l)&&["arguments","caller","callee"].indexOf(W)!==-1)return!1;const z=l[W];lA(z)&&(m.enumerable=!1,"writable"in m?m.writable=!1:m.set||(m.set=()=>{throw Error("Can not rewrite read-only method '"+W+"'")}))})},toObjectSet:(l,m)=>{const W={},z=EA=>{EA.forEach(hA=>{W[hA]=!0})};return VI(l)?z(l):z(String(l).split(m)),W},toCamelCase:l=>l.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,function(m,W,z){return W.toUpperCase()+z}),noop:()=>{},toFiniteNumber:(l,m)=>(l=+l,Number.isFinite(l)?l:m),findKey:bA,global:JA,isContextDefined:PA,toJSONObject:l=>{const m=new Array(10),W=(z,EA)=>{if(VA(z)){if(m.indexOf(z)>=0)return;if(!("toJSON"in z)){m[EA]=z;const hA=VI(z)?[]:{};return pI(z,(aA,X)=>{const q=W(aA,EA+1);!v(q)&&(hA[X]=q)}),m[EA]=void 0,hA}}return z};return W(l,0)}};function b(l,m,W,z,EA){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=l,this.name="AxiosError",m&&(this.code=m),W&&(this.config=W),z&&(this.request=z),EA&&(this.response=EA)}p.inherits(b,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:p.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const BA=b.prototype,AA={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(l=>{AA[l]={value:l}}),Object.defineProperties(b,AA),Object.defineProperty(BA,"isAxiosError",{value:!0}),b.from=(l,m,W,z,EA,hA)=>{const aA=Object.create(BA);return p.toFlatObject(l,aA,function(X){return X!==Error.prototype},X=>X!=="isAxiosError"),b.call(aA,l.message,m,W,z,EA),aA.cause=l,aA.name=l.name,hA&&Object.assign(aA,hA),aA};const CA=b,NA=yI(230);function YA(l){return p.isPlainObject(l)||p.isArray(l)}function _A(l){return p.endsWith(l,"[]")?l.slice(0,-2):l}function lg(l,m,W){return l?l.concat(m).map(function(z,EA){return z=_A(z),!W&&EA?"["+z+"]":z}).join(W?".":""):m}const Pg=p.toFlatObject(p,{},null,function(l){return/^is[A-Z]/.test(l)}),Xg=function(l,m,W){if(!p.isObject(l))throw new TypeError("target must be an object");m=m||new(NA||FormData);const z=(W=p.toFlatObject(W,{metaTokens:!0,dots:!1,indexes:!1},!1,function(qA,Cg){return!p.isUndefined(Cg[qA])})).metaTokens,EA=W.visitor||tA,hA=W.dots,aA=W.indexes,X=(W.Blob||typeof Blob<"u"&&Blob)&&(q=m)&&p.isFunction(q.append)&&q[Symbol.toStringTag]==="FormData"&&q[Symbol.iterator];var q;if(!p.isFunction(EA))throw new TypeError("visitor must be a function");function QA(qA){if(qA===null)return"";if(p.isDate(qA))return qA.toISOString();if(!X&&p.isBlob(qA))throw new CA("Blob is not supported. Use a Buffer instead.");return p.isArrayBuffer(qA)||p.isTypedArray(qA)?X&&typeof Blob=="function"?new Blob([qA]):Buffer.from(qA):qA}function tA(qA,Cg,hg){let Gg=qA;if(qA&&!hg&&typeof qA=="object"){if(p.endsWith(Cg,"{}"))Cg=z?Cg:Cg.slice(0,-2),qA=JSON.stringify(qA);else if(p.isArray(qA)&&function($g){return p.isArray($g)&&!$g.some(YA)}(qA)||p.isFileList(qA)||p.endsWith(Cg,"[]")&&(Gg=p.toArray(qA)))return Cg=_A(Cg),Gg.forEach(function($g,cI){!p.isUndefined($g)&&$g!==null&&m.append(aA===!0?lg([Cg],cI,hA):aA===null?Cg:Cg+"[]",QA($g))}),!1}return!!YA(qA)||(m.append(lg(hg,Cg,hA),QA(qA)),!1)}const Ag=[],Qg=Object.assign(Pg,{defaultVisitor:tA,convertValue:QA,isVisitable:YA});if(!p.isObject(l))throw new TypeError("data must be an object");return function qA(Cg,hg){if(!p.isUndefined(Cg)){if(Ag.indexOf(Cg)!==-1)throw Error("Circular reference detected in "+hg.join("."));Ag.push(Cg),p.forEach(Cg,function(Gg,$g){(!(p.isUndefined(Gg)||Gg===null)&&EA.call(m,Gg,p.isString($g)?$g.trim():$g,hg,Qg))===!0&&qA(Gg,hg?hg.concat($g):[$g])}),Ag.pop()}}(l),m};function Kg(l){const m={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(l).replace(/[!'()~]|%20|%00/g,function(W){return m[W]})}function Yg(l,m){this._pairs=[],l&&Xg(l,this,m)}const WI=Yg.prototype;WI.append=function(l,m){this._pairs.push([l,m])},WI.toString=function(l){const m=l?function(W){return l.call(this,W,Kg)}:Kg;return this._pairs.map(function(W){return m(W[0])+"="+m(W[1])},"").join("&")};const kI=Yg;function FI(l){return encodeURIComponent(l).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function sC(l,m,W){if(!m)return l;const z=W&&W.encode||FI,EA=W&&W.serialize;let hA;if(hA=EA?EA(m,W):p.isURLSearchParams(m)?m.toString():new kI(m,W).toString(z),hA){const aA=l.indexOf("#");aA!==-1&&(l=l.slice(0,aA)),l+=(l.indexOf("?")===-1?"?":"&")+hA}return l}const JB=class{constructor(){this.handlers=[]}use(l,m,W){return this.handlers.push({fulfilled:l,rejected:m,synchronous:!!W&&W.synchronous,runWhen:W?W.runWhen:null}),this.handlers.length-1}eject(l){this.handlers[l]&&(this.handlers[l]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(l){p.forEach(this.handlers,function(m){m!==null&&l(m)})}},lB={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rC=typeof URLSearchParams<"u"?URLSearchParams:kI,ZC=FormData,Si=(()=>{let l;return(typeof navigator>"u"||(l=navigator.product)!=="ReactNative"&&l!=="NativeScript"&&l!=="NS")&&typeof window<"u"&&typeof document<"u"})(),MQ=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",oB={isBrowser:!0,classes:{URLSearchParams:rC,FormData:ZC,Blob},isStandardBrowserEnv:Si,isStandardBrowserWebWorkerEnv:MQ,protocols:["http","https","file","blob","url","data"]},KB=function(l){function m(W,z,EA,hA){let aA=W[hA++];const X=Number.isFinite(+aA),q=hA>=W.length;return aA=!aA&&p.isArray(EA)?EA.length:aA,q?(p.hasOwnProp(EA,aA)?EA[aA]=[EA[aA],z]:EA[aA]=z,!X):(EA[aA]&&p.isObject(EA[aA])||(EA[aA]=[]),m(W,z,EA[aA],hA)&&p.isArray(EA[aA])&&(EA[aA]=function(QA){const tA={},Ag=Object.keys(QA);let Qg;const qA=Ag.length;let Cg;for(Qg=0;Qg<qA;Qg++)Cg=Ag[Qg],tA[Cg]=QA[Cg];return tA}(EA[aA])),!X)}if(p.isFormData(l)&&p.isFunction(l.entries)){const W={};return p.forEachEntry(l,(z,EA)=>{m(function(hA){return p.matchAll(/\w+|\[(\w*)]/g,hA).map(aA=>aA[0]==="[]"?"":aA[1]||aA[0])}(z),EA,W,0)}),W}return null},SQ={"Content-Type":void 0},YB={transitional:lB,adapter:["xhr","http"],transformRequest:[function(l,m){const W=m.getContentType()||"",z=W.indexOf("application/json")>-1,EA=p.isObject(l);if(EA&&p.isHTMLForm(l)&&(l=new FormData(l)),p.isFormData(l))return z&&z?JSON.stringify(KB(l)):l;if(p.isArrayBuffer(l)||p.isBuffer(l)||p.isStream(l)||p.isFile(l)||p.isBlob(l))return l;if(p.isArrayBufferView(l))return l.buffer;if(p.isURLSearchParams(l))return m.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),l.toString();let hA;if(EA){if(W.indexOf("application/x-www-form-urlencoded")>-1)return function(aA,X){return Xg(aA,new oB.classes.URLSearchParams,Object.assign({visitor:function(q,QA,tA,Ag){return oB.isNode&&p.isBuffer(q)?(this.append(QA,q.toString("base64")),!1):Ag.defaultVisitor.apply(this,arguments)}},X))}(l,this.formSerializer).toString();if((hA=p.isFileList(l))||W.indexOf("multipart/form-data")>-1){const aA=this.env&&this.env.FormData;return Xg(hA?{"files[]":l}:l,aA&&new aA,this.formSerializer)}}return EA||z?(m.setContentType("application/json",!1),function(aA,X,q){if(p.isString(aA))try{return(0,JSON.parse)(aA),p.trim(aA)}catch(QA){if(QA.name!=="SyntaxError")throw QA}return(0,JSON.stringify)(aA)}(l)):l}],transformResponse:[function(l){const m=this.transitional||YB.transitional,W=m&&m.forcedJSONParsing,z=this.responseType==="json";if(l&&p.isString(l)&&(W&&!this.responseType||z)){const EA=!(m&&m.silentJSONParsing)&&z;try{return JSON.parse(l)}catch(hA){if(EA)throw hA.name==="SyntaxError"?CA.from(hA,CA.ERR_BAD_RESPONSE,this,null,this.response):hA}}return l}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:oB.classes.FormData,Blob:oB.classes.Blob},validateStatus:function(l){return l>=200&&l<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(l){YB.headers[l]={}}),p.forEach(["post","put","patch"],function(l){YB.headers[l]=p.merge(SQ)});const pQ=YB,pi=p.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),UE=Symbol("internals");function gE(l){return l&&String(l).trim().toLowerCase()}function LE(l){return l===!1||l==null?l:p.isArray(l)?l.map(LE):String(l)}function Ft(l,m,W,z){return p.isFunction(z)?z.call(this,m,W):p.isString(m)?p.isString(z)?m.indexOf(z)!==-1:p.isRegExp(z)?z.test(m):void 0:void 0}class JE{constructor(m){m&&this.set(m)}set(m,W,z){const EA=this;function hA(X,q,QA){const tA=gE(q);if(!tA)throw new Error("header name must be a non-empty string");const Ag=p.findKey(EA,tA);(!Ag||EA[Ag]===void 0||QA===!0||QA===void 0&&EA[Ag]!==!1)&&(EA[Ag||q]=LE(X))}const aA=(X,q)=>p.forEach(X,(QA,tA)=>hA(QA,tA,q));return p.isPlainObject(m)||m instanceof this.constructor?aA(m,W):p.isString(m)&&(m=m.trim())&&!/^[-_a-zA-Z]+$/.test(m.trim())?aA((X=>{const q={};let QA,tA,Ag;return X&&X.split(`
`).forEach(function(Qg){Ag=Qg.indexOf(":"),QA=Qg.substring(0,Ag).trim().toLowerCase(),tA=Qg.substring(Ag+1).trim(),!QA||q[QA]&&pi[QA]||(QA==="set-cookie"?q[QA]?q[QA].push(tA):q[QA]=[tA]:q[QA]=q[QA]?q[QA]+", "+tA:tA)}),q})(m),W):m!=null&&hA(W,m,z),this}get(m,W){if(m=gE(m)){const z=p.findKey(this,m);if(z){const EA=this[z];if(!W)return EA;if(W===!0)return function(hA){const aA=Object.create(null),X=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let q;for(;q=X.exec(hA);)aA[q[1]]=q[2];return aA}(EA);if(p.isFunction(W))return W.call(this,EA,z);if(p.isRegExp(W))return W.exec(EA);throw new TypeError("parser must be boolean|regexp|function")}}}has(m,W){if(m=gE(m)){const z=p.findKey(this,m);return!(!z||W&&!Ft(0,this[z],z,W))}return!1}delete(m,W){const z=this;let EA=!1;function hA(aA){if(aA=gE(aA)){const X=p.findKey(z,aA);!X||W&&!Ft(0,z[X],X,W)||(delete z[X],EA=!0)}}return p.isArray(m)?m.forEach(hA):hA(m),EA}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(m){const W=this,z={};return p.forEach(this,(EA,hA)=>{const aA=p.findKey(z,hA);if(aA)return W[aA]=LE(EA),void delete W[hA];const X=m?function(q){return q.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(QA,tA,Ag)=>tA.toUpperCase()+Ag)}(hA):String(hA).trim();X!==hA&&delete W[hA],W[X]=LE(EA),z[X]=!0}),this}concat(...m){return this.constructor.concat(this,...m)}toJSON(m){const W=Object.create(null);return p.forEach(this,(z,EA)=>{z!=null&&z!==!1&&(W[EA]=m&&p.isArray(z)?z.join(", "):z)}),W}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([m,W])=>m+": "+W).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(m){return m instanceof this?m:new this(m)}static concat(m,...W){const z=new this(m);return W.forEach(EA=>z.set(EA)),z}static accessor(m){const W=(this[UE]=this[UE]={accessors:{}}).accessors,z=this.prototype;function EA(hA){const aA=gE(hA);W[aA]||(function(X,q){const QA=p.toCamelCase(" "+q);["get","set","has"].forEach(tA=>{Object.defineProperty(X,tA+QA,{value:function(Ag,Qg,qA){return this[tA].call(this,q,Ag,Qg,qA)},configurable:!0})})}(z,hA),W[aA]=!0)}return p.isArray(m)?m.forEach(EA):EA(m),this}}JE.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),p.freezeMethods(JE.prototype),p.freezeMethods(JE);const FC=JE;function Fi(l,m){const W=this||pQ,z=m||W,EA=FC.from(z.headers);let hA=z.data;return p.forEach(l,function(aA){hA=aA.call(W,hA,EA.normalize(),m?m.status:void 0)}),EA.normalize(),hA}function ft(l){return!(!l||!l.__CANCEL__)}function mt(l,m,W){CA.call(this,l??"canceled",CA.ERR_CANCELED,m,W),this.name="CanceledError"}p.inherits(mt,CA,{__CANCEL__:!0});const KE=mt,qe=oB.isStandardBrowserEnv?{write:function(l,m,W,z,EA,hA){const aA=[];aA.push(l+"="+encodeURIComponent(m)),p.isNumber(W)&&aA.push("expires="+new Date(W).toGMTString()),p.isString(z)&&aA.push("path="+z),p.isString(EA)&&aA.push("domain="+EA),hA===!0&&aA.push("secure"),document.cookie=aA.join("; ")},read:function(l){const m=document.cookie.match(new RegExp("(^|;\\s*)("+l+")=([^;]*)"));return m?decodeURIComponent(m[3]):null},remove:function(l){this.write(l,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};function Nt(l,m){return l&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(m)?function(W,z){return z?W.replace(/\/+$/,"")+"/"+z.replace(/^\/+/,""):W}(l,m):m}const xe=oB.isStandardBrowserEnv?function(){const l=/(msie|trident)/i.test(navigator.userAgent),m=document.createElement("a");let W;function z(EA){let hA=EA;return l&&(m.setAttribute("href",hA),hA=m.href),m.setAttribute("href",hA),{href:m.href,protocol:m.protocol?m.protocol.replace(/:$/,""):"",host:m.host,search:m.search?m.search.replace(/^\?/,""):"",hash:m.hash?m.hash.replace(/^#/,""):"",hostname:m.hostname,port:m.port,pathname:m.pathname.charAt(0)==="/"?m.pathname:"/"+m.pathname}}return W=z(window.location.href),function(EA){const hA=p.isString(EA)?z(EA):EA;return hA.protocol===W.protocol&&hA.host===W.host}}():function(){return!0};function kt(l,m){let W=0;const z=function(EA,hA){EA=EA||10;const aA=new Array(EA),X=new Array(EA);let q,QA=0,tA=0;return hA=hA!==void 0?hA:1e3,function(Ag){const Qg=Date.now(),qA=X[tA];q||(q=Qg),aA[QA]=Ag,X[QA]=Qg;let Cg=tA,hg=0;for(;Cg!==QA;)hg+=aA[Cg++],Cg%=EA;if(QA=(QA+1)%EA,QA===tA&&(tA=(tA+1)%EA),Qg-q<hA)return;const Gg=qA&&Qg-qA;return Gg?Math.round(1e3*hg/Gg):void 0}}(50,250);return EA=>{const hA=EA.loaded,aA=EA.lengthComputable?EA.total:void 0,X=hA-W,q=z(X);W=hA;const QA={loaded:hA,total:aA,progress:aA?hA/aA:void 0,bytes:X,rate:q||void 0,estimated:q&&aA&&hA<=aA?(aA-hA)/q:void 0,event:EA};QA[m?"download":"upload"]=!0,l(QA)}}const fi={http:null,xhr:typeof XMLHttpRequest<"u"&&function(l){return new Promise(function(m,W){let z=l.data;const EA=FC.from(l.headers).normalize(),hA=l.responseType;let aA;function X(){l.cancelToken&&l.cancelToken.unsubscribe(aA),l.signal&&l.signal.removeEventListener("abort",aA)}p.isFormData(z)&&(oB.isStandardBrowserEnv||oB.isStandardBrowserWebWorkerEnv)&&EA.setContentType(!1);let q=new XMLHttpRequest;if(l.auth){const Qg=l.auth.username||"",qA=l.auth.password?unescape(encodeURIComponent(l.auth.password)):"";EA.set("Authorization","Basic "+btoa(Qg+":"+qA))}const QA=Nt(l.baseURL,l.url);function tA(){if(!q)return;const Qg=FC.from("getAllResponseHeaders"in q&&q.getAllResponseHeaders());(function(qA,Cg,hg){const Gg=hg.config.validateStatus;hg.status&&Gg&&!Gg(hg.status)?Cg(new CA("Request failed with status code "+hg.status,[CA.ERR_BAD_REQUEST,CA.ERR_BAD_RESPONSE][Math.floor(hg.status/100)-4],hg.config,hg.request,hg)):qA(hg)})(function(qA){m(qA),X()},function(qA){W(qA),X()},{data:hA&&hA!=="text"&&hA!=="json"?q.response:q.responseText,status:q.status,statusText:q.statusText,headers:Qg,config:l,request:q}),q=null}if(q.open(l.method.toUpperCase(),sC(QA,l.params,l.paramsSerializer),!0),q.timeout=l.timeout,"onloadend"in q?q.onloadend=tA:q.onreadystatechange=function(){q&&q.readyState===4&&(q.status!==0||q.responseURL&&q.responseURL.indexOf("file:")===0)&&setTimeout(tA)},q.onabort=function(){q&&(W(new CA("Request aborted",CA.ECONNABORTED,l,q)),q=null)},q.onerror=function(){W(new CA("Network Error",CA.ERR_NETWORK,l,q)),q=null},q.ontimeout=function(){let Qg=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const qA=l.transitional||lB;l.timeoutErrorMessage&&(Qg=l.timeoutErrorMessage),W(new CA(Qg,qA.clarifyTimeoutError?CA.ETIMEDOUT:CA.ECONNABORTED,l,q)),q=null},oB.isStandardBrowserEnv){const Qg=(l.withCredentials||xe(QA))&&l.xsrfCookieName&&qe.read(l.xsrfCookieName);Qg&&EA.set(l.xsrfHeaderName,Qg)}z===void 0&&EA.setContentType(null),"setRequestHeader"in q&&p.forEach(EA.toJSON(),function(Qg,qA){q.setRequestHeader(qA,Qg)}),p.isUndefined(l.withCredentials)||(q.withCredentials=!!l.withCredentials),hA&&hA!=="json"&&(q.responseType=l.responseType),typeof l.onDownloadProgress=="function"&&q.addEventListener("progress",kt(l.onDownloadProgress,!0)),typeof l.onUploadProgress=="function"&&q.upload&&q.upload.addEventListener("progress",kt(l.onUploadProgress)),(l.cancelToken||l.signal)&&(aA=Qg=>{q&&(W(!Qg||Qg.type?new KE(null,l,q):Qg),q.abort(),q=null)},l.cancelToken&&l.cancelToken.subscribe(aA),l.signal&&(l.signal.aborted?aA():l.signal.addEventListener("abort",aA)));const Ag=function(Qg){const qA=/^([-+\w]{1,25})(:?\/\/|:)/.exec(Qg);return qA&&qA[1]||""}(QA);Ag&&oB.protocols.indexOf(Ag)===-1?W(new CA("Unsupported protocol "+Ag+":",CA.ERR_BAD_REQUEST,l)):q.send(z||null)})}};function mi(l){if(l.cancelToken&&l.cancelToken.throwIfRequested(),l.signal&&l.signal.aborted)throw new KE(null,l)}function Ut(l){return mi(l),l.headers=FC.from(l.headers),l.data=Fi.call(l,l.transformRequest),["post","put","patch"].indexOf(l.method)!==-1&&l.headers.setContentType("application/x-www-form-urlencoded",!1),(m=>{m=p.isArray(m)?m:[m];const{length:W}=m;let z,EA;for(let hA=0;hA<W&&(z=m[hA],!(EA=p.isString(z)?fi[z.toLowerCase()]:z));hA++);if(!EA)throw EA===!1?new CA(`Adapter ${z} is not supported by the environment`,"ERR_NOT_SUPPORT"):new Error(p.hasOwnProp(fi,z)?`Adapter '${z}' is not available in the build`:`Unknown adapter '${z}'`);if(!p.isFunction(EA))throw new TypeError("adapter is not a function");return EA})(l.adapter||pQ.adapter)(l).then(function(m){return mi(l),m.data=Fi.call(l,l.transformResponse,m),m.headers=FC.from(m.headers),m},function(m){return ft(m)||(mi(l),m&&m.response&&(m.response.data=Fi.call(l,l.transformResponse,m.response),m.response.headers=FC.from(m.response.headers))),Promise.reject(m)})}p.forEach(fi,(l,m)=>{if(l){try{Object.defineProperty(l,"name",{value:m})}catch{}Object.defineProperty(l,"adapterName",{value:m})}});const Lt=l=>l instanceof FC?l.toJSON():l;function FQ(l,m){m=m||{};const W={};function z(QA,tA,Ag){return p.isPlainObject(QA)&&p.isPlainObject(tA)?p.merge.call({caseless:Ag},QA,tA):p.isPlainObject(tA)?p.merge({},tA):p.isArray(tA)?tA.slice():tA}function EA(QA,tA,Ag){return p.isUndefined(tA)?p.isUndefined(QA)?void 0:z(void 0,QA,Ag):z(QA,tA,Ag)}function hA(QA,tA){if(!p.isUndefined(tA))return z(void 0,tA)}function aA(QA,tA){return p.isUndefined(tA)?p.isUndefined(QA)?void 0:z(void 0,QA):z(void 0,tA)}function X(QA,tA,Ag){return Ag in m?z(QA,tA):Ag in l?z(void 0,QA):void 0}const q={url:hA,method:hA,data:hA,baseURL:aA,transformRequest:aA,transformResponse:aA,paramsSerializer:aA,timeout:aA,timeoutMessage:aA,withCredentials:aA,adapter:aA,responseType:aA,xsrfCookieName:aA,xsrfHeaderName:aA,onUploadProgress:aA,onDownloadProgress:aA,decompress:aA,maxContentLength:aA,maxBodyLength:aA,beforeRedirect:aA,transport:aA,httpAgent:aA,httpsAgent:aA,cancelToken:aA,socketPath:aA,responseEncoding:aA,validateStatus:X,headers:(QA,tA)=>EA(Lt(QA),Lt(tA),!0)};return p.forEach(Object.keys(l).concat(Object.keys(m)),function(QA){const tA=q[QA]||EA,Ag=tA(l[QA],m[QA],QA);p.isUndefined(Ag)&&tA!==X||(W[QA]=Ag)}),W}const Ni={};["object","boolean","number","function","string","symbol"].forEach((l,m)=>{Ni[l]=function(W){return typeof W===l||"a"+(m<1?"n ":" ")+l}});const Jt={};Ni.transitional=function(l,m,W){function z(EA,hA){return"[Axios v1.2.4] Transitional option '"+EA+"'"+hA+(W?". "+W:"")}return(EA,hA,aA)=>{if(l===!1)throw new CA(z(hA," has been removed"+(m?" in "+m:"")),CA.ERR_DEPRECATED);return m&&!Jt[hA]&&(Jt[hA]=!0,console.warn(z(hA," has been deprecated since v"+m+" and will be removed in the near future"))),!l||l(EA,hA,aA)}};const ki={assertOptions:function(l,m,W){if(typeof l!="object")throw new CA("options must be an object",CA.ERR_BAD_OPTION_VALUE);const z=Object.keys(l);let EA=z.length;for(;EA-- >0;){const hA=z[EA],aA=m[hA];if(aA){const X=l[hA],q=X===void 0||aA(X,hA,l);if(q!==!0)throw new CA("option "+hA+" must be "+q,CA.ERR_BAD_OPTION_VALUE)}else if(W!==!0)throw new CA("Unknown option "+hA,CA.ERR_BAD_OPTION)}},validators:Ni},OC=ki.validators;class YE{constructor(m){this.defaults=m,this.interceptors={request:new JB,response:new JB}}request(m,W){typeof m=="string"?(W=W||{}).url=m:W=m||{},W=FQ(this.defaults,W);const{transitional:z,paramsSerializer:EA,headers:hA}=W;let aA;z!==void 0&&ki.assertOptions(z,{silentJSONParsing:OC.transitional(OC.boolean),forcedJSONParsing:OC.transitional(OC.boolean),clarifyTimeoutError:OC.transitional(OC.boolean)},!1),EA!==void 0&&ki.assertOptions(EA,{encode:OC.function,serialize:OC.function},!0),W.method=(W.method||this.defaults.method||"get").toLowerCase(),aA=hA&&p.merge(hA.common,hA[W.method]),aA&&p.forEach(["delete","get","head","post","put","patch","common"],Cg=>{delete hA[Cg]}),W.headers=FC.concat(aA,hA);const X=[];let q=!0;this.interceptors.request.forEach(function(Cg){typeof Cg.runWhen=="function"&&Cg.runWhen(W)===!1||(q=q&&Cg.synchronous,X.unshift(Cg.fulfilled,Cg.rejected))});const QA=[];let tA;this.interceptors.response.forEach(function(Cg){QA.push(Cg.fulfilled,Cg.rejected)});let Ag,Qg=0;if(!q){const Cg=[Ut.bind(this),void 0];for(Cg.unshift.apply(Cg,X),Cg.push.apply(Cg,QA),Ag=Cg.length,tA=Promise.resolve(W);Qg<Ag;)tA=tA.then(Cg[Qg++],Cg[Qg++]);return tA}Ag=X.length;let qA=W;for(Qg=0;Qg<Ag;){const Cg=X[Qg++],hg=X[Qg++];try{qA=Cg(qA)}catch(Gg){hg.call(this,Gg);break}}try{tA=Ut.call(this,qA)}catch(Cg){return Promise.reject(Cg)}for(Qg=0,Ag=QA.length;Qg<Ag;)tA=tA.then(QA[Qg++],QA[Qg++]);return tA}getUri(m){return sC(Nt((m=FQ(this.defaults,m)).baseURL,m.url),m.params,m.paramsSerializer)}}p.forEach(["delete","get","head","options"],function(l){YE.prototype[l]=function(m,W){return this.request(FQ(W||{},{method:l,url:m,data:(W||{}).data}))}}),p.forEach(["post","put","patch"],function(l){function m(W){return function(z,EA,hA){return this.request(FQ(hA||{},{method:l,headers:W?{"Content-Type":"multipart/form-data"}:{},url:z,data:EA}))}}YE.prototype[l]=m(),YE.prototype[l+"Form"]=m(!0)});const HE=YE;class Ui{constructor(m){if(typeof m!="function")throw new TypeError("executor must be a function.");let W;this.promise=new Promise(function(EA){W=EA});const z=this;this.promise.then(EA=>{if(!z._listeners)return;let hA=z._listeners.length;for(;hA-- >0;)z._listeners[hA](EA);z._listeners=null}),this.promise.then=EA=>{let hA;const aA=new Promise(X=>{z.subscribe(X),hA=X}).then(EA);return aA.cancel=function(){z.unsubscribe(hA)},aA},m(function(EA,hA,aA){z.reason||(z.reason=new KE(EA,hA,aA),W(z.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(m){this.reason?m(this.reason):this._listeners?this._listeners.push(m):this._listeners=[m]}unsubscribe(m){if(!this._listeners)return;const W=this._listeners.indexOf(m);W!==-1&&this._listeners.splice(W,1)}static source(){let m;return{token:new Ui(function(W){m=W}),cancel:m}}}const ve=Ui,Li={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Li).forEach(([l,m])=>{Li[m]=l});const We=Li,$I=function l(m){const W=new HE(m),z=MI(HE.prototype.request,W);return p.extend(z,HE.prototype,W,{allOwnKeys:!0}),p.extend(z,W,null,{allOwnKeys:!0}),z.create=function(EA){return l(FQ(m,EA))},z}(pQ);$I.Axios=HE,$I.CanceledError=KE,$I.CancelToken=ve,$I.isCancel=ft,$I.VERSION="1.2.4",$I.toFormData=Xg,$I.AxiosError=CA,$I.Cancel=$I.CanceledError,$I.all=function(l){return Promise.all(l)},$I.spread=function(l){return function(m){return l.apply(null,m)}},$I.isAxiosError=function(l){return p.isObject(l)&&l.isAxiosError===!0},$I.mergeConfig=FQ,$I.AxiosHeaders=FC,$I.formToJSON=l=>KB(p.isHTMLForm(l)?new FormData(l):l),$I.HttpStatusCode=We,$I.default=$I;const Te=$I;var iQ=function(){function l(){hI(this,l)}var m;return IC(l,null,[{key:"fetchRemoteData",value:(m=mg(jg().mark(function W(z){var EA;return jg().wrap(function(hA){for(;;)switch(hA.prev=hA.next){case 0:return hA.prev=0,hA.next=3,Te.get(z,{responseType:"arraybuffer"});case 3:return EA=hA.sent,hA.abrupt("return",new Uint8Array(EA.data));case 7:throw hA.prev=7,hA.t0=hA.catch(0),hA.t0;case 10:case"end":return hA.stop()}},W,null,[[0,7]])})),function(W){return m.apply(this,arguments)})},{key:"string2Uint8Data",value:function(W){for(var z=new Uint8Array(W.length),EA=0;EA<z.length;EA++)z[EA]=255&W.charCodeAt(EA);return z}},{key:"uint8Data2String",value:function(W){return String.fromCharCode.apply(String,W)}},{key:"parseMultiFile",value:function(W){var z=l.uint8Data2String(W).split(`
`),EA=[],hA=0;return z.forEach(function(aA){if((aA=aA.trim())&&!aA.startsWith("#"))switch(hA){case 0:return void(hA=1);case 1:aA.match(/^\d+$/)||EA.push(aA);case 2:case 3:case 4:return void hA++;case 5:return void(hA=1)}}),EA}}]),l}(),tQ=function(){function l(){hI(this,l),this.instance,this.markerCount=0,this.multiMarkerCount=0,this.cameraCount=0,this.version="0.3.0",console.info("ARToolkit ",this.version)}var m,W,z,EA,hA;return IC(l,[{key:"init",value:(hA=mg(jg().mark(function aA(){var X;return jg().wrap(function(q){for(;;)switch(q.prev=q.next){case 0:return q.next=2,new Promise(function(QA){TC({onRuntimeInitialized:function(){QA({instance:this})}})});case 2:return X=q.sent,this.instance=X.instance,this._decorate(),(typeof window<"u"?window:yI.g).artoolkit=this,q.abrupt("return",this);case 8:case"end":return q.stop()}},aA,this)})),function(){return hA.apply(this,arguments)})},{key:"_decorate",value:function(){var aA=this;for(var X in["setup","teardown","setupAR2","setLogLevel","getLogLevel","setDebugMode","getDebugMode","getProcessingImage","setMarkerInfoDir","setMarkerInfoVertex","getTransMatSquare","getTransMatSquareCont","getTransMatMultiSquare","getTransMatMultiSquareRobust","getMultiMarkerNum","getMultiMarkerCount","detectMarker","getMarkerNum","detectNFTMarker","getNFTMarker","getNFTData","getMarker","getMultiEachMarker","setProjectionNearPlane","getProjectionNearPlane","setProjectionFarPlane","getProjectionFarPlane","setThresholdMode","getThresholdMode","setThreshold","getThreshold","setPatternDetectionMode","getPatternDetectionMode","setMatrixCodeType","getMatrixCodeType","setLabelingMode","getLabelingMode","setPattRatio","getPattRatio","setImageProcMode","getImageProcMode"].forEach(function(q){aA[q]=aA.instance[q]}),this.instance)X.match(/^AR/)&&(this[X]=this.instance[X])}},{key:"loadCamera",value:(EA=mg(jg().mark(function aA(X){var q,QA;return jg().wrap(function(tA){for(;;)switch(tA.prev=tA.next){case 0:if(q="/camera_param_"+this.cameraCount++,!(X instanceof Uint8Array)){tA.next=5;break}QA=X,tA.next=14;break;case 5:return tA.prev=5,tA.next=8,iQ.fetchRemoteData(X);case 8:QA=tA.sent,tA.next=14;break;case 11:throw tA.prev=11,tA.t0=tA.catch(5),tA.t0;case 14:return this._storeDataFile(QA,q),tA.abrupt("return",this.instance._loadCamera(q));case 16:case"end":return tA.stop()}},aA,this,[[5,11]])})),function(aA){return EA.apply(this,arguments)})},{key:"addMarker",value:(z=mg(jg().mark(function aA(X,q){var QA,tA;return jg().wrap(function(Ag){for(;;)switch(Ag.prev=Ag.next){case 0:if(QA="/marker_"+this.markerCount++,q.indexOf(`
Name: `+VA.name+`
Message: `+VA.message,yg.setAttribute("id","error-popup"),document.body.appendChild(yg)}},1e3)};var lA=document.createElement("video");if(lA.setAttribute("autoplay",""),lA.setAttribute("muted",""),lA.setAttribute("playsinline",""),lA.style.width=this.parameters.displayWidth+"px",lA.style.height=this.parameters.displayHeight+"px",navigator.mediaDevices===void 0||navigator.mediaDevices.enumerateDevices===void 0||navigator.mediaDevices.getUserMedia===void 0){if(navigator.mediaDevices===void 0)var FA="navigator.mediaDevices";else navigator.mediaDevices.enumerateDevices===void 0?FA="navigator.mediaDevices.enumerateDevices":navigator.mediaDevices.getUserMedia===void 0?FA="navigator.mediaDevices.getUserMedia":console.assert(!1);return j({name:"",message:"WebRTC issue-! "+FA+" not present in your browser"}),null}return navigator.mediaDevices.enumerateDevices().then(function(VA){var ng={audio:!1,video:{facingMode:"environment",width:{ideal:sA.parameters.sourceWidth},height:{ideal:sA.parameters.sourceHeight}}};sA.parameters.deviceId!==null&&(ng.video.deviceId={exact:sA.parameters.deviceId}),navigator.mediaDevices.getUserMedia(ng).then(function(yg){lA.srcObject=yg;var bg=new CustomEvent("camera-init",{stream:yg});window.dispatchEvent(bg),document.body.addEventListener("click",sA.onInitialClick,{once:!0}),v()}).catch(function(yg){j({name:yg.name,message:yg.message})})}).catch(function(VA){j({message:VA.message})}),lA},MI.prototype.dispose=function(){switch(this.ready=!1,this.parameters.sourceType){case"image":this._disposeSourceImage();break;case"video":this._disposeSourceVideo();break;case"webcam":this._disposeSourceWebcam()}this.domElement=null,document.body.removeEventListener("click",this.onInitialClick,{once:!0})},MI.prototype._disposeSourceImage=function(){var v=document.querySelector("#arjs-video");v&&v.remove()},MI.prototype._disposeSourceVideo=function(){var v=document.querySelector("#arjs-video");v&&(v.pause(),v.removeAttribute("src"),v.load(),v.remove())},MI.prototype._disposeSourceWebcam=function(){var v=document.querySelector("#arjs-video");v&&(v.srcObject&&v.srcObject.getTracks&&v.srcObject.getTracks().map(j=>j.stop()),v.remove())},MI.prototype.hasMobileTorch=function(){var v=arToolkitSource.domElement.srcObject;if(v instanceof MediaStream==0)return!1;this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var j=v.getVideoTracks()[0];return j.getCapabilities!==void 0&&!!j.getCapabilities().torch},MI.prototype.toggleMobileTorch=function(){console.assert(this.hasMobileTorch()===!0);var v=arToolkitSource.domElement.srcObject;if(v instanceof MediaStream!=0){this._currentTorchStatus===void 0&&(this._currentTorchStatus=!1);var j=v.getVideoTracks()[0];j.getCapabilities().torch?(this._currentTorchStatus=this._currentTorchStatus===!1,j.applyConstraints({advanced:[{torch:this._currentTorchStatus}]}).catch(function(lA){console.log(lA)})):document.getElementById("error-popup")||((sA=document.createElement("div")).innerHTML="no mobile torch is available on your camera",sA.setAttribute("id","error-popup"),document.body.appendChild(sA))}else{var sA;document.getElementById("error-popup")||((sA=document.createElement("div")).innerHTML="enabling mobile torch is available only on webcam",sA.setAttribute("id","error-popup"),document.body.appendChild(sA))}},MI.prototype.domElementWidth=function(){return parseInt(this.domElement.style.width)},MI.prototype.domElementHeight=function(){return parseInt(this.domElement.style.height)},MI.prototype.onResizeElement=function(){var v=window.innerWidth,j=window.innerHeight;if(console.assert(arguments.length===0),this.domElement.nodeName==="IMG")var sA=this.domElement.naturalWidth,lA=this.domElement.naturalHeight;else this.domElement.nodeName==="VIDEO"?(sA=this.domElement.videoWidth,lA=this.domElement.videoHeight):console.assert(!1);var FA=sA/lA;if(v/j<FA){var VA=FA*j;this.domElement.style.width=VA+"px",this.domElement.style.marginLeft=-(VA-v)/2+"px",this.domElement.style.height=j+"px",this.domElement.style.marginTop="0px"}else{var ng=1/(FA/v);this.domElement.style.height=ng+"px",this.domElement.style.marginTop=-(ng-j)/2+"px",this.domElement.style.width=v+"px",this.domElement.style.marginLeft="0px"}},MI.prototype.copyElementSizeTo=function(v){window.innerWidth>window.innerHeight?(v.style.width=this.domElement.style.width,v.style.height=this.domElement.style.height,v.style.marginLeft=this.domElement.style.marginLeft,v.style.marginTop=this.domElement.style.marginTop):(v.style.height=this.domElement.style.height,v.style.width=4*parseInt(v.style.height)/3+"px",v.style.marginLeft=(window.innerWidth-parseInt(v.style.width))/2+"px",v.style.marginTop=0)},MI.prototype.copySizeTo=function(){console.warn("obsolete function arToolkitSource.copySizeTo. Use arToolkitSource.copyElementSizeTo"),this.copyElementSizeTo.apply(this,arguments)},MI.prototype.onResize=function(v,j,sA){if(arguments.length!==3)return console.warn("obsolete function arToolkitSource.onResize. Use arToolkitSource.onResizeElement"),this.onResizeElement.apply(this,arguments);var lA=v.parameters.trackingBackend;lA==="artoolkit"?(this.onResizeElement(),!j.domElement.dataset.aframeCanvas&&this.copyElementSizeTo(j.domElement),v.arController!==null&&this.copyElementSizeTo(v.arController.canvas)):console.assert(!1,"unhandled trackingBackend "+lA),lA==="artoolkit"?v.arController!==null&&sA.projectionMatrix.copy(v.getProjectionMatrix()):console.assert(!1,"unhandled trackingBackend "+lA)};const tB=MI,Tg=function(v,j,sA){var lA=this;nI.call(this,j),arguments.length>3&&console.assert("wrong api for",Tg),this.parameters={subMarkersControls:sA.subMarkersControls,subMarkerPoses:sA.subMarkerPoses,changeMatrixMode:sA.changeMatrixMode!==void 0?sA.changeMatrixMode:"modelViewMatrix"},this.object3d.visible=!1,this.subMarkersControls=this.parameters.subMarkersControls,this.subMarkerPoses=this.parameters.subMarkerPoses,v.addEventListener("sourceProcessed",function(){lA._onSourceProcessed()})};Tg.prototype=Object.create(nI.prototype),Tg.prototype.constructor=Tg,Tg.prototype._onSourceProcessed=function(){var v=this,j={count:0,position:{sum:new ZA.Vector3(0,0,0),average:new ZA.Vector3(0,0,0)},quaternion:{sum:new ZA.Quaternion(0,0,0,0),average:new ZA.Quaternion(0,0,0,0)},scale:{sum:new ZA.Vector3(0,0,0),average:new ZA.Vector3(0,0,0)}},sA=v.parameters.subMarkersControls[0].object3d.quaternion;if(this.parameters.subMarkersControls.forEach(function(FA,VA){var ng=FA.object3d;if(ng.visible!==!1){var yg=ng.matrix.clone(),bg=v.parameters.subMarkerPoses[VA];yg.multiply(new ZA.Matrix4().copy(bg).invert());var Vg=new ZA.Vector3,sI=new ZA.Quaternion,vI=new ZA.Vector3;yg.decompose(Vg,sI,vI),j.count++,Tg.averageVector3(j.position.sum,Vg,j.count,j.position.average),Tg.averageQuaternion(j.quaternion.sum,sI,sA,j.count,j.quaternion.average),Tg.averageVector3(j.scale.sum,vI,j.count,j.scale.average)}}),j.count>0?v.object3d.visible=!0:v.object3d.visible=!1,j.count>0){var lA=new ZA.Matrix4;lA.compose(j.position.average,j.quaternion.average,j.scale.average),this.parameters.changeMatrixMode==="modelViewMatrix"?v.object3d.matrix.copy(lA):this.parameters.changeMatrixMode==="cameraTransformMatrix"?v.object3d.matrix.copy(lA).invert():console.assert(!1),v.object3d.matrix.decompose(v.object3d.position,v.object3d.quaternion,v.object3d.scale)}},Tg.averageQuaternion=function(v,j,sA,lA,FA){return FA=FA||new ZA.Quaternion,console.assert(sA instanceof ZA.Quaternion==1),j.dot(sA)>0&&(j=new ZA.Quaternion(-j.x,-j.y,-j.z,-j.w)),v.x+=j.x,v.y+=j.y,v.z+=j.z,v.w+=j.w,FA.x=v.x/lA,FA.y=v.y/lA,FA.z=v.z/lA,FA.w=v.w/lA,FA.normalize(),FA},Tg.averageVector3=function(v,j,sA,lA){return lA=lA||new ZA.Vector3,v.x+=j.x,v.y+=j.y,v.z+=j.z,lA.x=v.x/sA,lA.y=v.y/sA,lA.z=v.z/sA,lA},Tg.computeCenter=function(v){var j=JSON.parse(v),sA={count:0,position:{sum:new ZA.Vector3(0,0,0),average:new ZA.Vector3(0,0,0)},quaternion:{sum:new ZA.Quaternion(0,0,0,0),average:new ZA.Quaternion(0,0,0,0)},scale:{sum:new ZA.Vector3(0,0,0),average:new ZA.Vector3(0,0,0)}},lA=new ZA.Quaternion;j.subMarkersControls.forEach(function(VA){var ng=new ZA.Matrix4().fromArray(VA.poseMatrix),yg=new ZA.Vector3,bg=new ZA.Quaternion,Vg=new ZA.Vector3;ng.decompose(yg,bg,Vg),sA.count++,Tg.averageVector3(sA.position.sum,yg,sA.count,sA.position.average),Tg.averageQuaternion(sA.quaternion.sum,bg,lA,sA.count,sA.quaternion.average),Tg.averageVector3(sA.scale.sum,Vg,sA.count,sA.scale.average)});var FA=new ZA.Matrix4;return FA.compose(sA.position.average,sA.quaternion.average,sA.scale.average),FA},Tg.computeBoundingBox=function(v){var j=JSON.parse(v),sA=new ZA.Box3;return j.subMarkersControls.forEach(function(lA){var FA=new ZA.Matrix4().fromArray(lA.poseMatrix),VA=new ZA.Vector3,ng=new ZA.Quaternion,yg=new ZA.Vector3;FA.decompose(VA,ng,yg),sA.expandByPoint(VA)}),sA},Tg.prototype.updateSmoothedControls=function(v,j){j===void 0&&(j=[[.4,.1,.3],[.5,.1,.4],[.5,.2,.5],[.6,.2,.7],[.6,.2,.7]]);var sA=0;if(this.parameters.subMarkersControls.forEach(function(FA,VA){FA.object3d.visible===!0&&sA++}),j[sA-1]!==void 0)var lA=j[sA-1];else lA=j[j.length-1];v.parameters.lerpPosition=lA[0],v.parameters.lerpQuaternion=lA[1],v.parameters.lerpScale=lA[2]},Tg.fromJSON=function(v,j,sA,lA,FA){var VA=JSON.parse(lA),ng=[],yg=[];return FA=FA||{},VA.subMarkersControls.forEach(function(bg){var Vg=new ZA.Object3D;j.add(Vg);var sI=new hI(v,Vg,bg.parameters);ng.push(sI),yg.push(new ZA.Matrix4().fromArray(bg.poseMatrix))}),FA.subMarkersControls=ng,FA.subMarkerPoses=yg,new OI(v,sA,FA)};const OI=Tg,SI=function(v,j){var sA=this;this._arToolkitContext=v,this.subMarkersControls=j,this.enabled=!0,v.addEventListener("sourceProcessed",function(){sA._onSourceProcessed()})};SI.prototype._onSourceProcessed=function(){var v=this.subMarkersControls[0].object3d.quaternion;if(this.enabled!==!1)for(var j=this.subMarkersControls.filter(function(bA){return bA.object3d.visible===!0}),sA=Object.keys(j).length,lA=new THREE.Vector3,FA=new THREE.Quaternion,VA=new THREE.Vector3,ng=new THREE.Matrix4,yg=0;yg<sA;yg++)for(var bg=j[yg],Vg=0;Vg<sA;Vg++){var sI=j[Vg];if(yg!==Vg){bg.object3d.userData.seenCouples===void 0&&(bg.object3d.userData.seenCouples={});var vI=bg.object3d.userData.seenCouples;vI[sI.id]===void 0&&(vI[sI.id]={count:0,position:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)},quaternion:{sum:new THREE.Quaternion(0,0,0,0),average:new THREE.Quaternion(0,0,0,0)},scale:{sum:new THREE.Vector3(0,0,0),average:new THREE.Vector3(0,0,0)}}),ng.copy(bg.object3d.matrix).invert(),ng.multiply(sI.object3d.matrix),ng.decompose(lA,FA,VA);var pI=vI[sI.id];pI.count++,OI.averageVector3(pI.position.sum,lA,pI.count,pI.position.average),OI.averageQuaternion(pI.quaternion.sum,FA,v,pI.count,pI.quaternion.average),OI.averageVector3(pI.scale.sum,VA,pI.count,pI.scale.average)}}},SI.prototype.computeResult=function(){var v=this,j=this.subMarkersControls[0];this.deleteResult(),j.object3d.userData.result={averageMatrix:new THREE.Matrix4,confidenceFactor:1};do{var sA=!1;this.subMarkersControls.forEach(function(lA){var FA=lA.object3d.userData.result;if(!(FA!==void 0&&FA.confidenceFactor>=1)){var VA=v._getLearnedCoupleStats(lA);if(VA!==null){var ng=v._getSubMarkerControlsByID(VA),yg=lA.object3d.userData.seenCouples[VA],bg=new THREE.Matrix4;bg.compose(yg.position.average,yg.quaternion.average,yg.scale.average);var Vg=ng.object3d.userData.result.averageMatrix,sI=new THREE.Matrix4().getInverse(Vg).multiply(bg);sI=new THREE.Matrix4().getInverse(sI),console.assert(lA.object3d.userData.result===void 0),lA.object3d.userData.result={averageMatrix:sI,confidenceFactor:1},sA=!0}}})}while(sA===!0)},SI.prototype._getLearnedCoupleStats=function(v){if(v.object3d.userData.seenCouples===void 0)return null;for(var j=v.object3d.userData.seenCouples,sA=Object.keys(j).map(Number),lA=0;lA<sA.length;lA++){var FA=sA[lA],VA=this._getSubMarkerControlsByID(FA).object3d.userData.result;if(VA!==void 0&&VA.confidenceFactor>=1)return FA}return null},SI.prototype._getSubMarkerControlsByID=function(v){for(var j=0;j<this.subMarkersControls.length;j++){var sA=this.subMarkersControls[j];if(sA.id===v)return sA}return null},SI.prototype.toJSON=function(){this.computeResult();var v={meta:{createdBy:"Area Learning - AR.js "+THREEx.ArToolkitContext.REVISION,createdAt:new Date().toJSON()},trackingBackend:this._arToolkitContext.parameters.trackingBackend,subMarkersControls:[]},j=this.subMarkersControls[0];return new THREE.Matrix4().copy(j.object3d.matrix).invert(),this.subMarkersControls.forEach(function(sA,lA){if(sA.object3d.userData.result!==void 0){var FA=sA.object3d.userData.result.averageMatrix;console.assert(FA instanceof THREE.Matrix4);var VA={parameters:{},poseMatrix:FA.toArray()};sA.parameters.type==="pattern"?(VA.parameters.type=sA.parameters.type,VA.parameters.patternUrl=sA.parameters.patternUrl):sA.parameters.type==="barcode"?(VA.parameters.type=sA.parameters.type,VA.parameters.barcodeValue=sA.parameters.barcodeValue):console.assert(!1),v.subMarkersControls.push(VA)}}),JSON.stringify(v,null,"	")},SI.prototype.resetStats=function(){this.deleteResult(),this.subMarkersControls.forEach(function(v){delete v.object3d.userData.seenCouples})},SI.prototype.deleteResult=function(){this.subMarkersControls.forEach(function(v){delete v.object3d.userData.result})};const IB=SI,eB={navigateToLearnerPage:function(v,j){var sA={backURL:location.href,trackingBackend:j,markersControlsParameters:eB.createDefaultMarkersControlsParameters(j)};location.href=v+"?"+encodeURIComponent(JSON.stringify(sA))},storeDefaultMultiMarkerFile:function(v){var j=eB.createDefaultMultiMarkerFile(v);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(j))},createDefaultMultiMarkerFile:function(v){console.assert(v);var j=document.createElement("a");j.href=iB.baseURL;var sA=j.href,lA={meta:{createdBy:"AR.js "+iB.REVISION+" - Default Marker",createdAt:new Date().toJSON()},trackingBackend:v,subMarkersControls:[]};return lA.subMarkersControls[0]={parameters:{},poseMatrix:new ZA.Matrix4().makeTranslation(0,0,0).toArray()},v==="artoolkit"?(lA.subMarkersControls[0].parameters.type="pattern",lA.subMarkersControls[0].parameters.patternUrl=sA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"):console.assert(!1),lA},createDefaultMarkersControlsParameters:function(v){var j=document.createElement("a");j.href=iB.baseURL;var sA=j.href;if(v==="artoolkit")var lA=[{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"},{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-kanji.patt"},{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"},{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"},{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"},{type:"pattern",patternUrl:sA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt"}];else console.assert(!1);return lA},storeMarkersAreaFileFromResolution:function(v,j,sA){var lA=this.buildMarkersAreaFileFromResolution(v,j,sA);localStorage.setItem("ARjsMultiMarkerFile",JSON.stringify(lA))},buildMarkersAreaFileFromResolution:function(v,j,sA){var lA={meta:{createdBy:"AR.js - Augmented Website",createdAt:new Date().toJSON()},trackingBackend:v,subMarkersControls:[]};if(j>sA)var FA=.4*sA;else j<sA?FA=.4*j:j===sA?FA=.33*j:console.assert(!1);var VA=.8*FA,ng=(j-FA)/2/VA,yg=(sA-FA)/2/VA,bg=Vg("center",0,0);return lA.subMarkersControls.push(bg),bg=Vg("topleft",-ng,-yg),lA.subMarkersControls.push(bg),bg=Vg("topright",+ng,-yg),lA.subMarkersControls.push(bg),bg=Vg("bottomleft",-ng,+yg),lA.subMarkersControls.push(bg),bg=Vg("bottomright",+ng,+yg),lA.subMarkersControls.push(bg),lA;function Vg(sI,vI,pI){console.log("buildSubMarkerControls",sI,vI,pI);var bA={parameters:{},poseMatrix:new ZA.Matrix4().makeTranslation(vI,0,pI).toArray()};return v==="artoolkit"?function(JA,PA){var ug=document.createElement("a");ug.href=iB.baseURL;var DA=ug.href,k={center:f(DA+"examples/marker-training/examples/pattern-files/pattern-hiro.patt"),topleft:f(DA+"examples/marker-training/examples/pattern-files/pattern-letterA.patt"),topright:f(DA+"examples/marker-training/examples/pattern-files/pattern-letterB.patt"),bottomleft:f(DA+"examples/marker-training/examples/pattern-files/pattern-letterC.patt"),bottomright:f(DA+"examples/marker-training/examples/pattern-files/pattern-letterF.patt")};return console.assert(k[PA]!==void 0),JA.type="pattern",void(JA.patternUrl=k[PA]);function f(H){var L=document.createElement("a");return L.href=H,L.href}}(bA.parameters,sI):console.assert(!1),bA}}},VI=eB})(),LI})());console.log("Inicia app");var EQ=new THREE.WebGLRenderer({antialias:!0,alpha:!0,precision:"mediump"}),Wn=new THREE.Clock,St=[];EQ.setPixelRatio(window.devicePixelRatio);EQ.setClearColor(new THREE.Color("lightgrey"),0);EQ.setSize(window.innerWidth,window.innerHeight);EQ.domElement.style.position="absolute";EQ.domElement.style.top="0px";EQ.domElement.style.left="0px";document.body.appendChild(EQ.domElement);var NE=new THREE.Scene,Mi=new THREE.Camera;NE.add(Mi);var Tn=new THREE.AmbientLight(16777215);NE.add(Tn);var fE=new THREEx.ArToolkitSource({sourceType:"webcam",sourceWidth:480,sourceHeight:640});fE.init(function(){setTimeout(function(){Ds()},1e3)});window.addEventListener("resize",function(){Ds()});window.addEventListener("arjs-nft-loaded",function(G){console.log(G)});function Ds(){fE.onResizeElement(),fE.copyElementSizeTo(EQ.domElement),kE.arController!==null&&fE.copyElementSizeTo(kE.arController.canvas)}var kE=new THREEx.ArToolkitContext({detectionMode:"mono",canvasWidth:480,canvasHeight:640},{sourceWidth:480,sourceHeight:640});kE.init(function(){Mi.projectionMatrix.copy(kE.getProjectionMatrix())});new THREEx.ArMarkerControls(kE,Mi,{type:"nft",descriptorsUrl:"data/dataGEM/erika",changeMatrixMode:"cameraTransformMatrix"});NE.visible=!1;var be=new THREE.Object3D;NE.add(be);var Zn=new THREE.GLTFLoader,FE;Zn.load("./resources/Flamingo.glb",function(G){FE=G.scene.children[0],FE.name="Flamingo";const dI=G.animations;G.animations[0];var Jg=new THREE.AnimationMixer(G.scene);St.push(Jg);const UI=THREE.AnimationClip.findByName(dI,"flamingo_flyA_");var LI=Jg.clipAction(UI);LI.play(),be.matrixAutoUpdate=!1,be.add(FE),FE.position.z=-100,window.addEventListener("arjs-nft-init-data",function(Og){console.log(Og);var nI=Og.detail;FE.position.y=nI.height/nI.dpi*2.54*10/2,FE.position.x=nI.width/nI.dpi*2.54*10/2});var ZA=function(){if(requestAnimationFrame(ZA),St.length>0)for(var Og=0;Og<St.length;Og++)St[Og].update(Wn.getDelta());fE.ready&&(kE.update(fE.domElement),NE.visible=Mi.visible,EQ.render(NE,Mi))};requestAnimationFrame(ZA)})});export default On();