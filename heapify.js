!function(t,i){"object"==typeof exports&&"object"==typeof module?module.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof exports?exports.Heapify=i():t.Heapify=i()}(this,(function(){return(()=>{"use strict";var t={};return(()=>{var i=t;Object.defineProperty(i,"__esModule",{value:!0}),i.MinQueue=void 0,i.MinQueue=class{constructor(t=64,i=[],e=[],s=Uint32Array,h=Uint32Array){if(this._kbat=Uint32Array,this._pbat=Uint32Array,this._kbat=s,this._pbat=h,this._capacity=t,this._keys=new s(t+1),this._priorities=new h(t+1),this._hasPoppedElement=!1,i.length!==e.length)throw new Error("Number of keys does not match number of priorities provided.");if(t<i.length)throw new Error("Capacity less than number of provided keys.");for(let t=0;t<i.length;t++)this._keys[t+1]=i[t],this._priorities[t+1]=e[t];this.length=i.length;for(let t=i.length>>>1;t>=1;t--)this.bubbleDown(t)}get capacity(){return this._capacity}clear(){this.length=0,this._hasPoppedElement=!1}bubbleUp(t){const i=this._keys[t],e=this._priorities[t];for(;t>1;){const i=t>>>1;if(this._priorities[i]<=e)break;this._keys[t]=this._keys[i],this._priorities[t]=this._priorities[i],t=i}this._keys[t]=i,this._priorities[t]=e}bubbleDown(t){const i=this._keys[t],e=this._priorities[t],s=1+(this.length>>>1),h=this.length+1;for(;t<s;){const i=t<<1;let s=this._priorities[i],r=this._keys[i],o=i;const n=i+1;if(n<h){const t=this._priorities[n];t<s&&(s=t,r=this._keys[n],o=n)}if(s>=e)break;this._keys[t]=r,this._priorities[t]=s,t=o}this._keys[t]=i,this._priorities[t]=e}push(t,i){if(this.length===this._capacity){this._capacity=2*this._capacity;const t=new this._kbat(this._capacity+1);t.set(this._keys),this._keys=t;const i=new this._pbat(this._capacity+1);i.set(this._priorities),this._priorities=i}if(this._hasPoppedElement)this._keys[1]=t,this._priorities[1]=i,this.length++,this.bubbleDown(1),this._hasPoppedElement=!1;else{const e=this.length+1;this._keys[e]=t,this._priorities[e]=i,this.length++,this.bubbleUp(e)}}pop(){if(0!==this.length)return this.removePoppedElement(),this.length--,this._hasPoppedElement=!0,this._keys[1]}peekPriority(){return this.removePoppedElement(),this._priorities[1]}peek(){return this.removePoppedElement(),this._keys[1]}removePoppedElement(){this._hasPoppedElement&&(this._keys[1]=this._keys[this.length+1],this._priorities[1]=this._priorities[this.length+1],this.bubbleDown(1),this._hasPoppedElement=!1)}get size(){return this.length}dumpRawPriorities(){this.removePoppedElement();const t=Array(this.length-1);for(let i=0;i<this.length;i++)t[i]=this._priorities[i+1];return`[${t.join(" ")}]`}}})(),t})()}));