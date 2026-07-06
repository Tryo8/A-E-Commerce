import{B as E,G as Z,K as P,aa as I,b as V,ca as D,d as m,k as q,v as k,x as B,y as z}from"./chunk-WLDK3DBJ.js";import{s as T}from"./chunk-TYXIHH5J.js";import{$a as O,Eb as L,Fb as S,Q as h,R as w,Ub as y,W as x,Za as F,_a as A,a as v,bb as g,da as d,ka as C,kc as M,oc as N}from"./chunk-EKEZSOAM.js";var U=({dt:r})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${r("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,W={root:"p-ink"},R=(()=>{class r extends I{name="ripple";theme=U;classes=W;static \u0275fac=(()=>{let t;return function(a){return(t||(t=d(r)))(a||r)}})();static \u0275prov=h({token:r,factory:r.\u0275fac})}return r})();var ie=(()=>{class r extends D{zone=x(C);_componentStyle=x(R);animationListener;mouseDownListener;timeout;constructor(){super(),N(()=>{T(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let n=this.getInk();if(!n||this.document.defaultView?.getComputedStyle(n,null).display==="none")return;if(m(n,"p-ink-active"),!k(n)&&!E(n)){let o=Math.max(q(this.el.nativeElement),z(this.el.nativeElement));n.style.height=o+"px",n.style.width=o+"px"}let a=B(this.el.nativeElement),i=t.pageX-a.left+this.document.body.scrollTop-E(n)/2,s=t.pageY-a.top+this.document.body.scrollLeft-k(n)/2;this.renderer.setStyle(n,"top",s+"px"),this.renderer.setStyle(n,"left",i+"px"),V(n,"p-ink-active"),this.timeout=setTimeout(()=>{let o=this.getInk();o&&m(o,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let n=0;n<t.length;n++)if(typeof t[n].className=="string"&&t[n].className.indexOf("p-ink")!==-1)return t[n];return null}resetInk(){let t=this.getInk();t&&m(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),m(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,Z(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(n){return new(n||r)};static \u0275dir=O({type:r,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[y([R]),g]})}return r})(),re=(()=>{class r{static \u0275fac=function(n){return new(n||r)};static \u0275mod=A({type:r});static \u0275inj=w({})}return r})();var $=class r{static isArray(e,t=!0){return Array.isArray(e)&&(t||e.length!==0)}static isObject(e,t=!0){return typeof e=="object"&&!Array.isArray(e)&&e!=null&&(t||Object.keys(e).length!==0)}static equals(e,t,n){return n?this.resolveFieldData(e,n)===this.resolveFieldData(t,n):this.equalsByValue(e,t)}static equalsByValue(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Array.isArray(e),a=Array.isArray(t),i,s,o;if(n&&a){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!this.equalsByValue(e[i],t[i]))return!1;return!0}if(n!=a)return!1;var l=this.isDate(e),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var p=e instanceof RegExp,u=t instanceof RegExp;if(p!=u)return!1;if(p&&u)return e.toString()==t.toString();var f=Object.keys(e);if(s=f.length,s!==Object.keys(t).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[i]))return!1;for(i=s;i--!==0;)if(o=f[i],!this.equalsByValue(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}static resolveFieldData(e,t){if(e&&t){if(this.isFunction(t))return t(e);if(t.indexOf(".")==-1)return e[t];{let n=t.split("."),a=e;for(let i=0,s=n.length;i<s;++i){if(a==null)return null;a=a[n[i]]}return a}}else return null}static isFunction(e){return!!(e&&e.constructor&&e.call&&e.apply)}static reorderArray(e,t,n){let a;e&&t!==n&&(n>=e.length&&(n%=e.length,t%=e.length),e.splice(n,0,e.splice(t,1)[0]))}static insertIntoOrderedArray(e,t,n,a){if(n.length>0){let i=!1;for(let s=0;s<n.length;s++)if(this.findIndexInList(n[s],a)>t){n.splice(s,0,e),i=!0;break}i||n.push(e)}else n.push(e)}static findIndexInList(e,t){let n=-1;if(t){for(let a=0;a<t.length;a++)if(t[a]==e){n=a;break}}return n}static contains(e,t){if(e!=null&&t&&t.length){for(let n of t)if(this.equals(e,n))return!0}return!1}static removeAccents(e){return e&&(e=e.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),e}static isDate(e){return Object.prototype.toString.call(e)==="[object Date]"}static isEmpty(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!this.isDate(e)&&typeof e=="object"&&Object.keys(e).length===0}static isNotEmpty(e){return!this.isEmpty(e)}static compare(e,t,n,a=1){let i=-1,s=this.isEmpty(e),o=this.isEmpty(t);return s&&o?i=0:s?i=a:o?i=-a:typeof e=="string"&&typeof t=="string"?i=e.localeCompare(t,n,{numeric:!0}):i=e<t?-1:e>t?1:0,i}static sort(e,t,n=1,a,i=1){let s=r.compare(e,t,a,n),o=n;return(r.isEmpty(e)||r.isEmpty(t))&&(o=i===1?n:i),o*s}static merge(e,t){if(!(e==null&&t==null)){{if((e==null||typeof e=="object")&&(t==null||typeof t=="object"))return v(v({},e||{}),t||{});if((e==null||typeof e=="string")&&(t==null||typeof t=="string"))return[e||"",t||""].join(" ")}return t||e}}static isPrintableCharacter(e=""){return this.isNotEmpty(e)&&e.length===1&&e.match(/\S| /)}static getItemValue(e,...t){return this.isFunction(e)?e(...t):e}static findLastIndex(e,t){let n=-1;if(this.isNotEmpty(e))try{n=e.findLastIndex(t)}catch{n=e.lastIndexOf([...e].reverse().find(t))}return n}static findLast(e,t){let n;if(this.isNotEmpty(e))try{n=e.findLast(t)}catch{n=[...e].reverse().find(t)}return n}static deepEquals(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Array.isArray(e),a=Array.isArray(t),i,s,o;if(n&&a){if(s=e.length,s!=t.length)return!1;for(i=s;i--!==0;)if(!this.deepEquals(e[i],t[i]))return!1;return!0}if(n!=a)return!1;var l=e instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==t.getTime();var p=e instanceof RegExp,u=t instanceof RegExp;if(p!=u)return!1;if(p&&u)return e.toString()==t.toString();var f=Object.keys(e);if(s=f.length,s!==Object.keys(t).length)return!1;for(i=s;i--!==0;)if(!Object.prototype.hasOwnProperty.call(t,f[i]))return!1;for(i=s;i--!==0;)if(o=f[i],!this.deepEquals(e[o],t[o]))return!1;return!0}return e!==e&&t!==t}static minifyCSS(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(e){return this.isString(e)?e.replace(/(-|_)/g,"").toLowerCase():e}static isString(e,t=!0){return typeof e=="string"&&(t||e!=="")}};function G(){let r=[],e=(i,s)=>{let o=r.length>0?r[r.length-1]:{key:i,value:s},l=o.value+(o.key===i?0:s)+2;return r.push({key:i,value:l}),l},t=i=>{r=r.filter(s=>s.value!==i)},n=()=>r.length>0?r[r.length-1].value:0,a=i=>i&&parseInt(i.style.zIndex,10)||0;return{get:a,set:(i,s,o)=>{s&&(s.style.zIndex=String(e(i,o)))},clear:i=>{i&&(t(a(i)),i.style.zIndex="")},getCurrent:()=>n(),generateZIndex:e,revertZIndex:t}}var ae=G(),oe=r=>!!r;var K=["*"],X=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Y=(()=>{class r extends I{name="baseicon";inlineStyles=X;static \u0275fac=(()=>{let t;return function(a){return(t||(t=d(r)))(a||r)}})();static \u0275prov=h({token:r,factory:r.\u0275fac})}return r})();var De=(()=>{class r extends D{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=P(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(a){return(t||(t=d(r)))(a||r)}})();static \u0275cmp=F({type:r,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",M],styleClass:"styleClass"},features:[y([Y]),g],ngContentSelectors:K,decls:1,vars:0,template:function(n,a){n&1&&(L(),S(0))},encapsulation:2,changeDetection:0})}return r})();export{De as a,ie as b,re as c,$ as d,ae as e,oe as f};
