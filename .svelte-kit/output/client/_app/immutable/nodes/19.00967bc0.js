import{V as $t,S as rn,i as on,s as sn,k as R,q as X,a as j,l as N,m as S,r as J,h as E,c as K,n as b,b as ye,D as h,W as an,K as Tt,X as ln,H as je,Y as cn,u as dn,Z as un,_ as fn,$ as gn}from"../chunks/index.1fe49b4b.js";function hn(e){const t=e-1;return t*t*t+1}function pn(e,{from:t,to:n},r={}){const o=getComputedStyle(e),s=o.transform==="none"?"":o.transform,[i,a]=o.transformOrigin.split(" ").map(parseFloat),u=t.left+t.width*i/n.width-(n.left+i),d=t.top+t.height*a/n.height-(n.top+a),{delay:l=0,duration:g=f=>Math.sqrt(f)*120,easing:c=hn}=r;return{delay:l,duration:$t(g)?g(Math.sqrt(u*u+d*d)):g,easing:c,css:(f,m)=>{const I=m*u,F=m*d,$=f+m*t.width/n.width,M=f+m*t.height/n.height;return`transform: ${s} translate(${I}px, ${F}px) scale(${$}, ${M});`}}}const mn="finalize",En="consider";function ge(e,t,n){e.dispatchEvent(new CustomEvent(mn,{detail:{items:t,info:n}}))}function se(e,t,n){e.dispatchEvent(new CustomEvent(En,{detail:{items:t,info:n}}))}const ke="draggedEntered",_e="draggedLeft",Fe="draggedOverIndex",rt="draggedLeftDocument",Re={LEFT_FOR_ANOTHER:"leftForAnother",OUTSIDE_OF_ANY:"outsideOfAny"};function Dn(e,t,n){e.dispatchEvent(new CustomEvent(ke,{detail:{indexObj:t,draggedEl:n}}))}function yn(e,t,n){e.dispatchEvent(new CustomEvent(_e,{detail:{draggedEl:t,type:Re.LEFT_FOR_ANOTHER,theOtherDz:n}}))}function wn(e,t){e.dispatchEvent(new CustomEvent(_e,{detail:{draggedEl:t,type:Re.OUTSIDE_OF_ANY}}))}function vn(e,t,n){e.dispatchEvent(new CustomEvent(Fe,{detail:{indexObj:t,draggedEl:n}}))}function _n(e){window.dispatchEvent(new CustomEvent(rt,{detail:{draggedEl:e}}))}const Z={DRAG_STARTED:"dragStarted",DRAGGED_ENTERED:ke,DRAGGED_ENTERED_ANOTHER:"dragEnteredAnother",DRAGGED_OVER_INDEX:Fe,DRAGGED_LEFT:_e,DRAGGED_LEFT_ALL:"draggedLeftAll",DROPPED_INTO_ZONE:"droppedIntoZone",DROPPED_INTO_ANOTHER:"droppedIntoAnother",DROPPED_OUTSIDE_OF_ANY:"droppedOutsideOfAny",DRAG_STOPPED:"dragStopped"},W={POINTER:"pointer",KEYBOARD:"keyboard"},$e="isDndShadowItem",it="data-is-dnd-shadow-item",ot="id:dnd-shadow-placeholder-0000",Tn="dnd-action-dragged-el";let x="id",Ke=0;function Gt(){Ke++}function Zt(){if(Ke===0)throw new Error("Bug! trying to decrement when there are no dropzones");Ke--}const st=typeof window>"u";function Bt(e){let t;const n=e.getBoundingClientRect(),r=getComputedStyle(e),o=r.transform;if(o){let s,i,a,u;if(o.startsWith("matrix3d("))t=o.slice(9,-1).split(/, /),s=+t[0],i=+t[5],a=+t[12],u=+t[13];else if(o.startsWith("matrix("))t=o.slice(7,-1).split(/, /),s=+t[0],i=+t[3],a=+t[4],u=+t[5];else return n;const d=r.transformOrigin,l=n.x-a-(1-s)*parseFloat(d),g=n.y-u-(1-i)*parseFloat(d.slice(d.indexOf(" ")+1)),c=s?n.width/s:e.offsetWidth,f=i?n.height/i:e.offsetHeight;return{x:l,y:g,width:c,height:f,top:g,right:l+c,bottom:g+f,left:l}}else return n}function Wt(e){const t=Bt(e);return{top:t.top+window.scrollY,bottom:t.bottom+window.scrollY,left:t.left+window.scrollX,right:t.right+window.scrollX}}function at(e){const t=e.getBoundingClientRect();return{top:t.top+window.scrollY,bottom:t.bottom+window.scrollY,left:t.left+window.scrollX,right:t.right+window.scrollX}}function zt(e){return{x:(e.left+e.right)/2,y:(e.top+e.bottom)/2}}function On(e,t){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function lt(e,t){return e.y<=t.bottom&&e.y>=t.top&&e.x>=t.left&&e.x<=t.right}function we(e){return zt(at(e))}function Ot(e,t){const n=we(e),r=Wt(t);return lt(n,r)}function An(e,t){const n=we(e),r=we(t);return On(n,r)}function bn(e){const t=at(e);return t.right<0||t.left>document.documentElement.scrollWidth||t.bottom<0||t.top>document.documentElement.scrollHeight}function xn(e,t){const n=at(t);return lt(e,n)?{top:e.y-n.top,bottom:n.bottom-e.y,left:e.x-n.left,right:Math.min(n.right,document.documentElement.clientWidth)-e.x}:null}let de;function ct(){de=new Map}ct();function In(e){de.delete(e)}function Rn(e){const t=Array.from(e.children).findIndex(n=>n.getAttribute(it));if(t>=0)return de.has(e)||de.set(e,new Map),de.get(e).set(t,Wt(e.children[t])),t}function Nn(e,t){if(!Ot(e,t))return null;const n=t.children;if(n.length===0)return{index:0,isProximityBased:!0};const r=Rn(t);for(let i=0;i<n.length;i++)if(Ot(e,n[i])){const a=de.has(t)&&de.get(t).get(i);return a&&!lt(we(e),a)?{index:r,isProximityBased:!1}:{index:i,isProximityBased:!1}}let o=Number.MAX_VALUE,s;for(let i=0;i<n.length;i++){const a=An(e,n[i]);a<o&&(o=a,s=i)}return{index:s,isProximityBased:!0}}const De=25;function Ht(){let e;function t(){e={directionObj:void 0,stepPx:0}}t();function n(s){const{directionObj:i,stepPx:a}=e;i&&(s.scrollBy(i.x*a,i.y*a),window.requestAnimationFrame(()=>n(s)))}function r(s){return De-s}function o(s,i){if(!i)return!1;const a=xn(s,i);if(a===null)return t(),!1;const u=!!e.directionObj;let[d,l]=[!1,!1];return i.scrollHeight>i.clientHeight&&(a.bottom<De?(d=!0,e.directionObj={x:0,y:1},e.stepPx=r(a.bottom)):a.top<De&&(d=!0,e.directionObj={x:0,y:-1},e.stepPx=r(a.top)),!u&&d)||i.scrollWidth>i.clientWidth&&(a.right<De?(l=!0,e.directionObj={x:1,y:0},e.stepPx=r(a.right)):a.left<De&&(l=!0,e.directionObj={x:-1,y:0},e.stepPx=r(a.left)),!u&&l)?(n(i),!0):(t(),!1)}return{scrollIfNeeded:o,resetScrolling:t}}function Ye(e){return JSON.stringify(e,null,2)}function At(e){if(!e)throw new Error("cannot get depth of a falsy node");return qt(e,0)}function qt(e,t=0){return e.parentElement?qt(e.parentElement,t+1):t-1}function Sn(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!{}.hasOwnProperty.call(t,n)||t[n]!==e[n])return!1;return!0}function Ln(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const Pn=200,bt=10,{scrollIfNeeded:Mn,resetScrolling:Cn}=Ht();let Xe;function kn(e,t,n=Pn){let r,o,s=!1,i;const a=Array.from(t).sort((d,l)=>At(l)-At(d));function u(){const d=we(e),l=Mn(d,r);if(!l&&i&&Math.abs(i.x-d.x)<bt&&Math.abs(i.y-d.y)<bt){Xe=window.setTimeout(u,n);return}if(bn(e)){_n(e);return}i=d;let g=!1;for(const c of a){l&&In(r);const f=Nn(e,c);if(f===null)continue;const{index:m}=f;g=!0,c!==r?(r&&yn(r,e,c),Dn(c,f,e),r=c):m!==o&&(vn(c,f,e),o=m);break}!g&&s&&r?(wn(r,e),r=void 0,o=void 0,s=!1):s=!0,Xe=window.setTimeout(u,n)}u()}function Fn(){clearTimeout(Xe),Cn(),ct()}const $n=300;let Ne;function Se(e){const t=e.touches?e.touches[0]:e;Ne={x:t.clientX,y:t.clientY}}const{scrollIfNeeded:Gn,resetScrolling:Zn}=Ht();let Vt;function Yt(){Ne&&Gn(Ne,document.documentElement)&&ct(),Vt=window.setTimeout(Yt,$n)}function Bn(){window.addEventListener("mousemove",Se),window.addEventListener("touchmove",Se),Yt()}function Wn(){window.removeEventListener("mousemove",Se),window.removeEventListener("touchmove",Se),Ne=void 0,window.clearTimeout(Vt),Zn()}function zn(e){const t=e.cloneNode(!0),n=[],r=e.tagName==="SELECT",o=r?[e]:[...e.querySelectorAll("select")];for(const i of o)n.push(i.value);if(o.length<=0)return t;const s=r?[t]:[...t.querySelectorAll("select")];for(let i=0;i<s.length;i++){const a=s[i],u=n[i],d=a.querySelector(`option[value="${u}"`);d&&d.setAttribute("selected",!0)}return t}const Hn=.2;function ae(e){return`${e} ${Hn}s ease`}function qn(e,t){const n=e.getBoundingClientRect(),r=zn(e);Ut(e,r),r.id=Tn,r.style.position="fixed";let o=n.top,s=n.left;if(r.style.top=`${o}px`,r.style.left=`${s}px`,t){const i=zt(n);o-=i.y-t.y,s-=i.x-t.x,window.setTimeout(()=>{r.style.top=`${o}px`,r.style.left=`${s}px`},0)}return r.style.margin="0",r.style.boxSizing="border-box",r.style.height=`${n.height}px`,r.style.width=`${n.width}px`,r.style.transition=`${ae("top")}, ${ae("left")}, ${ae("background-color")}, ${ae("opacity")}, ${ae("color")} `,window.setTimeout(()=>r.style.transition+=`, ${ae("width")}, ${ae("height")}`,0),r.style.zIndex="9999",r.style.cursor="grabbing",r}function Vn(e){e.style.cursor="grab"}function Yn(e,t,n,r){Ut(t,e);const o=t.getBoundingClientRect(),s=e.getBoundingClientRect(),i=o.width-s.width,a=o.height-s.height;if(i||a){const u={left:(n-s.left)/s.width,top:(r-s.top)/s.height};e.style.height=`${o.height}px`,e.style.width=`${o.width}px`,e.style.left=`${parseFloat(e.style.left)-u.left*i}px`,e.style.top=`${parseFloat(e.style.top)-u.top*a}px`}}function Ut(e,t){const n=window.getComputedStyle(e);Array.from(n).filter(r=>r.startsWith("background")||r.startsWith("padding")||r.startsWith("font")||r.startsWith("text")||r.startsWith("align")||r.startsWith("justify")||r.startsWith("display")||r.startsWith("flex")||r.startsWith("border")||r==="opacity"||r==="color"||r==="list-style-type").forEach(r=>t.style.setProperty(r,n.getPropertyValue(r),n.getPropertyPriority(r)))}function Un(e,t){e.draggable=!1,e.ondragstart=()=>!1,t?(e.style.userSelect="",e.style.WebkitUserSelect="",e.style.cursor=""):(e.style.userSelect="none",e.style.WebkitUserSelect="none",e.style.cursor="grab")}function jt(e){e.style.display="none",e.style.position="fixed",e.style.zIndex="-5"}function jn(e){e.style.visibility="hidden",e.setAttribute(it,"true")}function Kn(e){e.style.visibility="",e.removeAttribute(it)}function xe(e,t=()=>{},n=()=>[]){e.forEach(r=>{const o=t(r);Object.keys(o).forEach(s=>{r.style[s]=o[s]}),n(r).forEach(s=>r.classList.add(s))})}function Le(e,t=()=>{},n=()=>[]){e.forEach(r=>{const o=t(r);Object.keys(o).forEach(s=>{r.style[s]=""}),n(r).forEach(s=>r.classList.contains(s)&&r.classList.remove(s))})}function Xn(e){const t=e.style.minHeight;e.style.minHeight=window.getComputedStyle(e).getPropertyValue("height");const n=e.style.minWidth;return e.style.minWidth=window.getComputedStyle(e).getPropertyValue("width"),function(){e.style.minHeight=t,e.style.minWidth=n}}const Jn="--any--",Qn=100,xt=3,It={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let re,P,H,Ge,T,Ze,he,z,ie,V,ce=!1,dt=!1,ut,Te=!1,Ie=[];const ee=new Map,_=new Map,Ue=new WeakMap;function er(e,t){ee.has(t)||ee.set(t,new Set),ee.get(t).has(e)||(ee.get(t).add(e),Gt())}function Rt(e,t){ee.get(t).delete(e),Zt(),ee.get(t).size===0&&ee.delete(t)}function tr(){Bn();const e=ee.get(Ge);for(const n of e)n.addEventListener(ke,Kt),n.addEventListener(_e,Xt),n.addEventListener(Fe,Jt);window.addEventListener(rt,pe);const t=Math.max(Qn,...Array.from(e.keys()).map(n=>_.get(n).dropAnimationDurationMs));kn(P,e,t*1.07)}function nr(){Wn();const e=ee.get(Ge);for(const t of e)t.removeEventListener(ke,Kt),t.removeEventListener(_e,Xt),t.removeEventListener(Fe,Jt);window.removeEventListener(rt,pe),Fn()}function rr(e){return e.findIndex(t=>t[x]===ot)}function Be(e){return e.findIndex(t=>!!t[$e]&&t[x]!==ot)}function Kt(e){let{items:t,dropFromOthersDisabled:n}=_.get(e.currentTarget);if(n&&e.currentTarget!==T)return;if(Te=!1,t=t.filter(i=>i[x]!==he[x]),T!==e.currentTarget){const a=_.get(T).items.filter(u=>!u[$e]);se(T,a,{trigger:Z.DRAGGED_ENTERED_ANOTHER,id:H[x],source:W.POINTER})}else{const i=rr(t);i!==-1&&t.splice(i,1)}const{index:r,isProximityBased:o}=e.detail.indexObj,s=o&&r===e.currentTarget.children.length-1?r+1:r;z=e.currentTarget,t.splice(s,0,he),se(e.currentTarget,t,{trigger:Z.DRAGGED_ENTERED,id:H[x],source:W.POINTER})}function Xt(e){if(!ce)return;const{items:t,dropFromOthersDisabled:n}=_.get(e.currentTarget);if(n&&e.currentTarget!==T&&e.currentTarget!==z)return;const r=Be(t),o=t.splice(r,1)[0];z=void 0;const{type:s,theOtherDz:i}=e.detail;if(s===Re.OUTSIDE_OF_ANY||s===Re.LEFT_FOR_ANOTHER&&i!==T&&_.get(i).dropFromOthersDisabled){Te=!0,z=T;const a=_.get(T).items;a.splice(Ze,0,o),se(T,a,{trigger:Z.DRAGGED_LEFT_ALL,id:H[x],source:W.POINTER})}se(e.currentTarget,t,{trigger:Z.DRAGGED_LEFT,id:H[x],source:W.POINTER})}function Jt(e){const{items:t,dropFromOthersDisabled:n}=_.get(e.currentTarget);if(n&&e.currentTarget!==T)return;Te=!1;const{index:r}=e.detail.indexObj,o=Be(t);t.splice(o,1),t.splice(r,0,he),se(e.currentTarget,t,{trigger:Z.DRAGGED_OVER_INDEX,id:H[x],source:W.POINTER})}function Pe(e){e.preventDefault();const t=e.touches?e.touches[0]:e;V={x:t.clientX,y:t.clientY},P.style.transform=`translate3d(${V.x-ie.x}px, ${V.y-ie.y}px, 0)`}function pe(){dt=!0,window.removeEventListener("mousemove",Pe),window.removeEventListener("touchmove",Pe),window.removeEventListener("mouseup",pe),window.removeEventListener("touchend",pe),nr(),Vn(P),z||(z=T);let{items:e,type:t}=_.get(z);Le(ee.get(t),o=>_.get(o).dropTargetStyle,o=>_.get(o).dropTargetClasses);let n=Be(e);n===-1&&(n=Ze),e=e.map(o=>o[$e]?H:o);function r(){ut(),ge(z,e,{trigger:Te?Z.DROPPED_OUTSIDE_OF_ANY:Z.DROPPED_INTO_ZONE,id:H[x],source:W.POINTER}),z!==T&&ge(T,_.get(T).items,{trigger:Z.DROPPED_INTO_ANOTHER,id:H[x],source:W.POINTER}),Kn(z.children[n]),sr()}ir(n,r)}function ir(e,t){const n=Bt(z.children[e]),r={x:n.left-parseFloat(P.style.left),y:n.top-parseFloat(P.style.top)},{dropAnimationDurationMs:o}=_.get(z),s=`transform ${o}ms ease`;P.style.transition=P.style.transition?P.style.transition+","+s:s,P.style.transform=`translate3d(${r.x}px, ${r.y}px, 0)`,window.setTimeout(t,o)}function or(e,t){Ie.push({dz:e,destroy:t}),window.requestAnimationFrame(()=>{jt(e),document.body.appendChild(e)})}function sr(){P.remove(),re.remove(),Ie.length&&(Ie.forEach(({dz:e,destroy:t})=>{t(),e.remove()}),Ie=[]),P=void 0,re=void 0,H=void 0,Ge=void 0,T=void 0,Ze=void 0,he=void 0,z=void 0,ie=void 0,V=void 0,ce=!1,dt=!1,ut=void 0,Te=!1}function ar(e,t){let n=!1;const r={items:void 0,type:void 0,flipDurationMs:0,dragDisabled:!1,morphDisabled:!1,dropFromOthersDisabled:!1,dropTargetStyle:It,dropTargetClasses:[],transformDraggedElement:()=>{},centreDraggedOnCursor:!1};let o=new Map;function s(){window.addEventListener("mousemove",u,{passive:!1}),window.addEventListener("touchmove",u,{passive:!1,capture:!1}),window.addEventListener("mouseup",a,{passive:!1}),window.addEventListener("touchend",a,{passive:!1})}function i(){window.removeEventListener("mousemove",u),window.removeEventListener("touchmove",u),window.removeEventListener("mouseup",a),window.removeEventListener("touchend",a)}function a(){i(),re=void 0,ie=void 0,V=void 0}function u(c){c.preventDefault();const f=c.touches?c.touches[0]:c;V={x:f.clientX,y:f.clientY},(Math.abs(V.x-ie.x)>=xt||Math.abs(V.y-ie.y)>=xt)&&(i(),l())}function d(c){if(c.target!==c.currentTarget&&(c.target.value!==void 0||c.target.isContentEditable)||c.button||ce)return;c.stopPropagation();const f=c.touches?c.touches[0]:c;ie={x:f.clientX,y:f.clientY},V={...ie},re=c.currentTarget,s()}function l(){ce=!0;const c=o.get(re);Ze=c,T=re.parentElement;const f=T.getRootNode(),m=f.body||f,{items:I,type:F,centreDraggedOnCursor:$}=r;H={...I[c]},Ge=F,he={...H,[$e]:!0};const M={...he,[x]:ot};P=qn(re,$&&V);function p(){P.parentElement?window.requestAnimationFrame(p):(m.appendChild(P),P.focus(),tr(),jt(re),m.appendChild(re))}window.requestAnimationFrame(p),xe(Array.from(ee.get(r.type)).filter(q=>q===T||!_.get(q).dropFromOthersDisabled),q=>_.get(q).dropTargetStyle,q=>_.get(q).dropTargetClasses),I.splice(c,1,M),ut=Xn(T),se(T,I,{trigger:Z.DRAG_STARTED,id:H[x],source:W.POINTER}),window.addEventListener("mousemove",Pe,{passive:!1}),window.addEventListener("touchmove",Pe,{passive:!1,capture:!1}),window.addEventListener("mouseup",pe,{passive:!1}),window.addEventListener("touchend",pe,{passive:!1})}function g({items:c=void 0,flipDurationMs:f=0,type:m=Jn,dragDisabled:I=!1,morphDisabled:F=!1,dropFromOthersDisabled:$=!1,dropTargetStyle:M=It,dropTargetClasses:p=[],transformDraggedElement:q=()=>{},centreDraggedOnCursor:me=!1}){r.dropAnimationDurationMs=f,r.type&&m!==r.type&&Rt(e,r.type),r.type=m,er(e,m),r.items=[...c],r.dragDisabled=I,r.morphDisabled=F,r.transformDraggedElement=q,r.centreDraggedOnCursor=me,n&&ce&&!dt&&(!Sn(M,r.dropTargetStyle)||!Ln(p,r.dropTargetClasses))&&(Le([e],()=>r.dropTargetStyle,()=>p),xe([e],()=>M,()=>p)),r.dropTargetStyle=M,r.dropTargetClasses=[...p];function U(D,y){return _.get(D)?_.get(D)[y]:r[y]}n&&ce&&r.dropFromOthersDisabled!==$&&($?Le([e],D=>U(D,"dropTargetStyle"),D=>U(D,"dropTargetClasses")):xe([e],D=>U(D,"dropTargetStyle"),D=>U(D,"dropTargetClasses"))),r.dropFromOthersDisabled=$,_.set(e,r);const Ee=Be(r.items);for(let D=0;D<e.children.length;D++){const y=e.children[D];if(Un(y,I),D===Ee){r.transformDraggedElement(P,H,D),F||Yn(P,y,V.x,V.y),jn(y);continue}y.removeEventListener("mousedown",Ue.get(y)),y.removeEventListener("touchstart",Ue.get(y)),I||(y.addEventListener("mousedown",d),y.addEventListener("touchstart",d),Ue.set(y,d)),o.set(y,D),n||(n=!0)}}return g(t),{update:c=>{g(c)},destroy:()=>{function c(){Rt(e,_.get(e).type),_.delete(e)}ce?or(e,c):c()}}}const Je={DND_ZONE_ACTIVE:"dnd-zone-active",DND_ZONE_DRAG_DISABLED:"dnd-zone-drag-disabled"},Qt={[Je.DND_ZONE_ACTIVE]:"Tab to one the items and press space-bar or enter to start dragging it",[Je.DND_ZONE_DRAG_DISABLED]:"This is a disabled drag and drop list"},lr="dnd-action-aria-alert";let v;function Qe(){v||(v=document.createElement("div"),function(){v.id=lr,v.style.position="fixed",v.style.bottom="0",v.style.left="0",v.style.zIndex="-5",v.style.opacity="0",v.style.height="0",v.style.width="0",v.setAttribute("role","alert")}(),document.body.prepend(v),Object.entries(Qt).forEach(([e,t])=>document.body.prepend(ur(e,t))))}function cr(){return st?null:(document.readyState==="complete"?Qe():window.addEventListener("DOMContentLoaded",Qe),{...Je})}function dr(){st||!v||(Object.keys(Qt).forEach(e=>{var t;return(t=document.getElementById(e))==null?void 0:t.remove()}),v.remove(),v=void 0)}function ur(e,t){const n=document.createElement("div");return n.id=e,n.innerHTML=`<p>${t}</p>`,n.style.display="none",n.style.position="fixed",n.style.zIndex="-5",n}function fe(e){if(st)return;v||Qe(),v.innerHTML="";const t=document.createTextNode(e);v.appendChild(t),v.style.display="none",v.style.display="inline"}const fr="--any--",Nt={outline:"rgba(255, 255, 102, 0.7) solid 2px"};let Y=!1,et,k,ue="",le,ne,oe="";const Me=new WeakSet,St=new WeakMap,Lt=new WeakMap,tt=new Map,L=new Map,Q=new Map;let Ce;function gr(e,t){Q.size===0&&(Ce=cr(),window.addEventListener("keydown",en),window.addEventListener("click",tn)),Q.has(t)||Q.set(t,new Set),Q.get(t).has(e)||(Q.get(t).add(e),Gt())}function Pt(e,t){k===e&&ve(),Q.get(t).delete(e),Zt(),Q.get(t).size===0&&Q.delete(t),Q.size===0&&(window.removeEventListener("keydown",en),window.removeEventListener("click",tn),Ce=void 0,dr())}function en(e){if(Y)switch(e.key){case"Escape":{ve();break}}}function tn(){Y&&(Me.has(document.activeElement)||ve())}function hr(e){if(!Y)return;const t=e.currentTarget;if(t===k)return;ue=t.getAttribute("aria-label")||"";const{items:n}=L.get(k),r=n.find(d=>d[x]===ne),o=n.indexOf(r),s=n.splice(o,1)[0],{items:i,autoAriaDisabled:a}=L.get(t);t.getBoundingClientRect().top<k.getBoundingClientRect().top||t.getBoundingClientRect().left<k.getBoundingClientRect().left?(i.push(s),a||fe(`Moved item ${oe} to the end of the list ${ue}`)):(i.unshift(s),a||fe(`Moved item ${oe} to the beginning of the list ${ue}`)),ge(k,n,{trigger:Z.DROPPED_INTO_ANOTHER,id:ne,source:W.KEYBOARD}),ge(t,i,{trigger:Z.DROPPED_INTO_ZONE,id:ne,source:W.KEYBOARD}),k=t}function nn(){tt.forEach(({update:e},t)=>e(L.get(t)))}function ve(e=!0){L.get(k).autoAriaDisabled||fe(`Stopped dragging item ${oe}`),Me.has(document.activeElement)&&document.activeElement.blur(),e&&se(k,L.get(k).items,{trigger:Z.DRAG_STOPPED,id:ne,source:W.KEYBOARD}),Le(Q.get(et),t=>L.get(t).dropTargetStyle,t=>L.get(t).dropTargetClasses),le=null,ne=null,oe="",et=null,k=null,ue="",Y=!1,nn()}function pr(e,t){const n={items:void 0,type:void 0,dragDisabled:!1,zoneTabIndex:0,dropFromOthersDisabled:!1,dropTargetStyle:Nt,dropTargetClasses:[],autoAriaDisabled:!1};function r(l,g,c){l.length<=1||l.splice(c,1,l.splice(g,1,l[c])[0])}function o(l){switch(l.key){case"Enter":case" ":{if((l.target.disabled!==void 0||l.target.href||l.target.isContentEditable)&&!Me.has(l.target))return;l.preventDefault(),l.stopPropagation(),Y?ve():s(l);break}case"ArrowDown":case"ArrowRight":{if(!Y)return;l.preventDefault(),l.stopPropagation();const{items:g}=L.get(e),c=Array.from(e.children),f=c.indexOf(l.currentTarget);f<c.length-1&&(n.autoAriaDisabled||fe(`Moved item ${oe} to position ${f+2} in the list ${ue}`),r(g,f,f+1),ge(e,g,{trigger:Z.DROPPED_INTO_ZONE,id:ne,source:W.KEYBOARD}));break}case"ArrowUp":case"ArrowLeft":{if(!Y)return;l.preventDefault(),l.stopPropagation();const{items:g}=L.get(e),f=Array.from(e.children).indexOf(l.currentTarget);f>0&&(n.autoAriaDisabled||fe(`Moved item ${oe} to position ${f} in the list ${ue}`),r(g,f,f-1),ge(e,g,{trigger:Z.DROPPED_INTO_ZONE,id:ne,source:W.KEYBOARD}));break}}}function s(l){a(l.currentTarget),k=e,et=n.type,Y=!0;const g=Array.from(Q.get(n.type)).filter(c=>c===k||!L.get(c).dropFromOthersDisabled);if(xe(g,c=>L.get(c).dropTargetStyle,c=>L.get(c).dropTargetClasses),!n.autoAriaDisabled){let c=`Started dragging item ${oe}. Use the arrow keys to move it within its list ${ue}`;g.length>1&&(c+=", or tab to another list in order to move the item into it"),fe(c)}se(e,L.get(e).items,{trigger:Z.DRAG_STARTED,id:ne,source:W.KEYBOARD}),nn()}function i(l){Y&&l.currentTarget!==le&&(l.stopPropagation(),ve(!1),s(l))}function a(l){const{items:g}=L.get(e),c=Array.from(e.children),f=c.indexOf(l);le=l,le.tabIndex=0,ne=g[f][x],oe=c[f].getAttribute("aria-label")||""}function u({items:l=[],type:g=fr,dragDisabled:c=!1,zoneTabIndex:f=0,dropFromOthersDisabled:m=!1,dropTargetStyle:I=Nt,dropTargetClasses:F=[],autoAriaDisabled:$=!1}){n.items=[...l],n.dragDisabled=c,n.dropFromOthersDisabled=m,n.zoneTabIndex=f,n.dropTargetStyle=I,n.dropTargetClasses=F,n.autoAriaDisabled=$,n.type&&g!==n.type&&Pt(e,n.type),n.type=g,gr(e,g),$||(e.setAttribute("aria-disabled",c),e.setAttribute("role","list"),e.setAttribute("aria-describedby",c?Ce.DND_ZONE_DRAG_DISABLED:Ce.DND_ZONE_ACTIVE)),L.set(e,n),Y?e.tabIndex=e===k||le.contains(e)||n.dropFromOthersDisabled||k&&n.type!==L.get(k).type?-1:0:e.tabIndex=n.zoneTabIndex,e.addEventListener("focus",hr);for(let M=0;M<e.children.length;M++){const p=e.children[M];Me.add(p),p.tabIndex=Y?-1:0,$||p.setAttribute("role","listitem"),p.removeEventListener("keydown",St.get(p)),p.removeEventListener("click",Lt.get(p)),c||(p.addEventListener("keydown",o),St.set(p,o),p.addEventListener("click",i),Lt.set(p,i)),Y&&n.items[M][x]===ne&&(le=p,le.tabIndex=0,p.focus())}}u(t);const d={update:l=>{u(l)},destroy:()=>{Pt(e,n.type),L.delete(e),tt.delete(e)}};return tt.set(e,d),d}function mr(e,t){Mt(t);const n=ar(e,t),r=pr(e,t);return{update:o=>{Mt(o),n.update(o),r.update(o)},destroy:()=>{n.destroy(),r.destroy()}}}function Mt(e){const{items:t,flipDurationMs:n,type:r,dragDisabled:o,morphDisabled:s,dropFromOthersDisabled:i,zoneTabIndex:a,dropTargetStyle:u,dropTargetClasses:d,transformDraggedElement:l,autoAriaDisabled:g,centreDraggedOnCursor:c,...f}=e;if(Object.keys(f).length>0&&console.warn("dndzone will ignore unknown options",f),!t)throw new Error("no 'items' key provided to dndzone");const m=t.find(I=>!{}.hasOwnProperty.call(I,x));if(m)throw new Error(`missing '${x}' property for item ${Ye(m)}`);if(d&&!Array.isArray(d))throw new Error(`dropTargetClasses should be an array but instead it is a ${typeof d}, ${Ye(d)}`);if(a&&!Er(a))throw new Error(`zoneTabIndex should be a number but instead it is a ${typeof a}, ${Ye(a)}`)}function Er(e){return!isNaN(e)&&function(t){return(t|0)===t}(parseFloat(e))}function Ct(e,t,n){const r=e.slice();return r[6]=t[n],r}function kt(e,t){let n,r,o=t[6].title+"",s,i,a,u=je;return{key:e,first:null,c(){n=R("div"),r=R("p"),s=X(o),i=j(),this.h()},l(d){n=N(d,"DIV",{class:!0});var l=S(n);r=N(l,"P",{class:!0});var g=S(r);s=J(g,o),g.forEach(E),i=K(l),l.forEach(E),this.h()},h(){b(r,"class","svelte-bqmwua"),b(n,"class","card svelte-bqmwua"),this.first=n},m(d,l){ye(d,n,l),h(n,r),h(r,s),h(n,i)},p(d,l){t=d,l&2&&o!==(o=t[6].title+"")&&dn(s,o)},r(){a=n.getBoundingClientRect()},f(){un(n),u()},a(){u(),u=fn(n,a,pn,{duration:nt})},d(d){d&&E(n)}}}function Ft(e){let t,n,r,o,s,i;return{c(){t=R("h1"),n=X("ANO! to je správně"),r=j(),o=R("a"),s=R("button"),i=X("Pokračovat"),this.h()},l(a){t=N(a,"H1",{class:!0});var u=S(t);n=J(u,"ANO! to je správně"),u.forEach(E),r=K(a),o=N(a,"A",{href:!0,class:!0});var d=S(o);s=N(d,"BUTTON",{class:!0});var l=S(s);i=J(l,"Pokračovat"),l.forEach(E),d.forEach(E),this.h()},h(){b(t,"class","svelte-bqmwua"),b(s,"class","svelte-bqmwua"),b(o,"href","./cj/3usn00"),b(o,"class","svelte-bqmwua")},m(a,u){ye(a,t,u),h(t,n),ye(a,r,u),ye(a,o,u),h(o,s),h(s,i)},d(a){a&&E(t),a&&E(r),a&&E(o)}}}function Dr(e){let t,n,r,o,s,i,a,u,d,l,g,c,f,m,I,F,$,M,p,q,me,U,Ee,D,y,We,ze,te,C=[],ft=new Map,Oe,He,qe,gt,Ae=e[1];const ht=w=>w[6].id;for(let w=0;w<Ae.length;w+=1){let O=Ct(e,Ae,w),A=ht(O);ft.set(A,C[w]=kt(A,O))}let G=e[0]==!0&&Ft();return{c(){t=R("main"),n=R("h1"),r=X("Otázka 2"),o=j(),s=R("div"),i=R("div"),a=R("p"),u=X("George Orwell"),d=j(),l=R("p"),g=X("Karel Poláček"),c=j(),f=R("p"),m=X("Viktor Dyk"),I=j(),F=R("p"),$=X("Karel Hynek Mácha"),M=j(),p=R("p"),q=X("Zdeněk Jirotka"),me=j(),U=R("p"),Ee=X("Ernest Hemingway"),D=j(),y=R("p"),We=X("Erich M. Remarque"),ze=j(),te=R("section");for(let w=0;w<C.length;w+=1)C[w].c();He=j(),G&&G.c(),this.h()},l(w){t=N(w,"MAIN",{class:!0});var O=S(t);n=N(O,"H1",{class:!0});var A=S(n);r=J(A,"Otázka 2"),A.forEach(E),o=K(O),s=N(O,"DIV",{class:!0});var be=S(s);i=N(be,"DIV",{class:!0});var B=S(i);a=N(B,"P",{class:!0});var pt=S(a);u=J(pt,"George Orwell"),pt.forEach(E),d=K(B),l=N(B,"P",{class:!0});var mt=S(l);g=J(mt,"Karel Poláček"),mt.forEach(E),c=K(B),f=N(B,"P",{class:!0});var Et=S(f);m=J(Et,"Viktor Dyk"),Et.forEach(E),I=K(B),F=N(B,"P",{class:!0});var Dt=S(F);$=J(Dt,"Karel Hynek Mácha"),Dt.forEach(E),M=K(B),p=N(B,"P",{class:!0});var yt=S(p);q=J(yt,"Zdeněk Jirotka"),yt.forEach(E),me=K(B),U=N(B,"P",{class:!0});var wt=S(U);Ee=J(wt,"Ernest Hemingway"),wt.forEach(E),D=K(B),y=N(B,"P",{class:!0});var vt=S(y);We=J(vt,"Erich M. Remarque"),vt.forEach(E),B.forEach(E),ze=K(be),te=N(be,"SECTION",{class:!0});var _t=S(te);for(let Ve=0;Ve<C.length;Ve+=1)C[Ve].l(_t);_t.forEach(E),be.forEach(E),He=K(O),G&&G.l(O),O.forEach(E),this.h()},h(){b(n,"class","svelte-bqmwua"),b(a,"class","svelte-bqmwua"),b(l,"class","svelte-bqmwua"),b(f,"class","svelte-bqmwua"),b(F,"class","svelte-bqmwua"),b(p,"class","svelte-bqmwua"),b(U,"class","svelte-bqmwua"),b(y,"class","svelte-bqmwua"),b(i,"class","authorNames svelte-bqmwua"),b(te,"class","svelte-bqmwua"),b(s,"class","container svelte-bqmwua"),b(t,"class","svelte-bqmwua")},m(w,O){ye(w,t,O),h(t,n),h(n,r),h(t,o),h(t,s),h(s,i),h(i,a),h(a,u),h(i,d),h(i,l),h(l,g),h(i,c),h(i,f),h(f,m),h(i,I),h(i,F),h(F,$),h(i,M),h(i,p),h(p,q),h(i,me),h(i,U),h(U,Ee),h(i,D),h(i,y),h(y,We),h(s,ze),h(s,te);for(let A=0;A<C.length;A+=1)C[A]&&C[A].m(te,null);h(t,He),G&&G.m(t,null),qe||(gt=[an(Oe=mr.call(null,te,{items:e[1],flipDurationMs:nt,dropTargetStyle:{}})),Tt(te,"consider",e[2]),Tt(te,"finalize",e[3])],qe=!0)},p(w,[O]){if(O&2){Ae=w[1];for(let A=0;A<C.length;A+=1)C[A].r();C=ln(C,O,ht,1,w,Ae,ft,te,gn,kt,null,Ct);for(let A=0;A<C.length;A+=1)C[A].a()}Oe&&$t(Oe.update)&&O&2&&Oe.update.call(null,{items:w[1],flipDurationMs:nt,dropTargetStyle:{}}),w[0]==!0?G||(G=Ft(),G.c(),G.m(t,null)):G&&(G.d(1),G=null)},i:je,o:je,d(w){w&&E(t);for(let O=0;O<C.length;O+=1)C[O].d();G&&G.d(),qe=!1,cn(gt)}}}const nt=100;function yr(e,t,n){let r=!1,o=[{id:1,title:"Máj"},{id:2,title:"1984"},{id:3,title:"Stařec a moře"},{id:4,title:"Bylo nás pět"},{id:5,title:"Na západní frontě klid"},{id:6,title:"Saturnin"},{id:7,title:"Krysař"}],s=["1984","Bylo nás pět","Krysař","Máj","Saturnin","Stařec a moře","Na západní frontě klid"];const i=d=>{n(1,o=d.detail.items)},a=d=>{n(1,o=d.detail.items),u()};function u(){let d=0;for(var l=0;l<o.length;l++)o[l].title==s[l]&&d++;d==7?n(0,r=!0):n(0,r=!1)}return[r,o,i,a]}class vr extends rn{constructor(t){super(),on(this,t,yr,Dr,sn,{})}}export{vr as component};
