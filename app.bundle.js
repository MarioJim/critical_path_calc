!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=9)}({9:function(t,e,n){"use strict";n.r(e);const r=t=>{const e=t.map(t=>new Set);return t.forEach(t=>{t.predecessors.forEach(n=>{e[n].add(t.index)})}),e},i=t=>String.fromCodePoint("A".charCodeAt(0)+t),o=()=>{const t=document.getElementsByTagName("tbody")[0],e=t.getElementsByTagName("tr").length;document.getElementById("row"+(e-1)).getElementsByTagName("p")[0].innerText=i(e-1);const n=document.createElement("tr");n.id="row"+e;const r=document.createElement("p");r.innerText=i(e)+" (end)",r.classList.add("act-name");const o=document.createElement("td");o.appendChild(r),n.appendChild(o);const a=document.createElement("input");a.type="text",a.classList.add("predec");const u=document.createElement("td");u.appendChild(a),n.appendChild(u);const s=document.createElement("input");s.type="number",s.classList.add("duration");const l=document.createElement("td");l.appendChild(s),n.appendChild(l),t.appendChild(n)},a=()=>{const t=document.getElementsByTagName("tbody")[0].getElementsByTagName("tr").length;if(2==t)return;document.getElementById("row"+(t-2)).getElementsByTagName("p")[0].innerText=i(t-2)+" (end)",document.getElementById("row"+(t-1)).remove()},u=(t,e)=>-1===t||-1===e.earliestStartTime?-1:Math.max(t,e.earliestStartTime+e.duration),s=(t,e,n)=>-1===t||-1===e.latestStartTime?-1:Math.min(t,e.latestStartTime-n);function l(){}var c=function(t){return null==t?l:function(){return this.querySelector(t)}},f=function(t){return"object"==typeof t&&"length"in t?t:Array.from(t)};function h(){return[]}function d(t){return function(e){return e.matches(t)}}var p=Array.prototype.find;function y(){return this.firstElementChild}var g=Array.prototype.filter;function v(){return this.children}var m=function(t){return new Array(t.length)};function _(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}_.prototype={constructor:_,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var x=function(t){return function(){return t}};function w(t,e,n,r,i,o){for(var a,u=0,s=e.length,l=o.length;u<l;++u)(a=e[u])?(a.__data__=o[u],r[u]=a):n[u]=new _(t,o[u]);for(;u<s;++u)(a=e[u])&&(i[u]=a)}function b(t,e,n,r,i,o,a){var u,s,l,c=new Map,f=e.length,h=o.length,d=new Array(f);for(u=0;u<f;++u)(s=e[u])&&(d[u]=l=a.call(s,s.__data__,u,e)+"",c.has(l)?i[u]=s:c.set(l,s));for(u=0;u<h;++u)l=a.call(t,o[u],u,o)+"",(s=c.get(l))?(r[u]=s,s.__data__=o[u],c.delete(l)):n[u]=new _(t,o[u]);for(u=0;u<f;++u)(s=e[u])&&c.get(d[u])===s&&(i[u]=s)}function A(t){return t.__data__}function S(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}var E="http://www.w3.org/1999/xhtml",T={svg:"http://www.w3.org/2000/svg",xhtml:E,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},N=function(t){var e=t+="",n=e.indexOf(":");return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),T.hasOwnProperty(e)?{space:T[e],local:t}:t};function k(t){return function(){this.removeAttribute(t)}}function M(t){return function(){this.removeAttributeNS(t.space,t.local)}}function C(t,e){return function(){this.setAttribute(t,e)}}function B(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}function P(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttribute(t):this.setAttribute(t,n)}}function L(t,e){return function(){var n=e.apply(this,arguments);null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}var j=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView};function q(t){return function(){this.style.removeProperty(t)}}function O(t,e,n){return function(){this.style.setProperty(t,e,n)}}function z(t,e,n){return function(){var r=e.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}function I(t,e){return t.style.getPropertyValue(e)||j(t).getComputedStyle(t,null).getPropertyValue(e)}function $(t){return function(){delete this[t]}}function D(t,e){return function(){this[t]=e}}function F(t,e){return function(){var n=e.apply(this,arguments);null==n?delete this[t]:this[t]=n}}function X(t){return t.trim().split(/^|\s+/)}function U(t){return t.classList||new H(t)}function H(t){this._node=t,this._names=X(t.getAttribute("class")||"")}function V(t,e){for(var n=U(t),r=-1,i=e.length;++r<i;)n.add(e[r])}function R(t,e){for(var n=U(t),r=-1,i=e.length;++r<i;)n.remove(e[r])}function Y(t){return function(){V(this,t)}}function G(t){return function(){R(this,t)}}function W(t,e){return function(){(e.apply(this,arguments)?V:R)(this,t)}}H.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};function K(){this.textContent=""}function J(t){return function(){this.textContent=t}}function Q(t){return function(){var e=t.apply(this,arguments);this.textContent=null==e?"":e}}function Z(){this.innerHTML=""}function tt(t){return function(){this.innerHTML=t}}function et(t){return function(){var e=t.apply(this,arguments);this.innerHTML=null==e?"":e}}function nt(){this.nextSibling&&this.parentNode.appendChild(this)}function rt(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function it(t){return function(){var e=this.ownerDocument,n=this.namespaceURI;return n===E&&e.documentElement.namespaceURI===E?e.createElement(t):e.createElementNS(n,t)}}function ot(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}var at=function(t){var e=N(t);return(e.local?ot:it)(e)};function ut(){return null}function st(){var t=this.parentNode;t&&t.removeChild(this)}function lt(){var t=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function ct(){var t=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(t,this.nextSibling):t}function ft(t){return t.trim().split(/^|\s+/).map((function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}}))}function ht(t){return function(){var e=this.__on;if(e){for(var n,r=0,i=-1,o=e.length;r<o;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++i]=n:this.removeEventListener(n.type,n.listener,n.options);++i?e.length=i:delete this.__on}}}function dt(t,e,n){return function(){var r,i=this.__on,o=function(t){return function(e){t.call(this,e,this.__data__)}}(e);if(i)for(var a=0,u=i.length;a<u;++a)if((r=i[a]).type===t.type&&r.name===t.name)return this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=n),void(r.value=e);this.addEventListener(t.type,o,n),r={type:t.type,name:t.name,value:e,listener:o,options:n},i?i.push(r):this.__on=[r]}}function pt(t,e,n){var r=j(t),i=r.CustomEvent;"function"==typeof i?i=new i(e,n):(i=r.document.createEvent("Event"),n?(i.initEvent(e,n.bubbles,n.cancelable),i.detail=n.detail):i.initEvent(e,!1,!1)),t.dispatchEvent(i)}function yt(t,e){return function(){return pt(this,t,e)}}function gt(t,e){return function(){return pt(this,t,e.apply(this,arguments))}}var vt=[null];function mt(t,e){this._groups=t,this._parents=e}function _t(){return new mt([[document.documentElement]],vt)}mt.prototype=_t.prototype={constructor:mt,select:function(t){"function"!=typeof t&&(t=c(t));for(var e=this._groups,n=e.length,r=new Array(n),i=0;i<n;++i)for(var o,a,u=e[i],s=u.length,l=r[i]=new Array(s),f=0;f<s;++f)(o=u[f])&&(a=t.call(o,o.__data__,f,u))&&("__data__"in o&&(a.__data__=o.__data__),l[f]=a);return new mt(r,this._parents)},selectAll:function(t){var e;"function"==typeof t?t=function(t){return function(){var e=t.apply(this,arguments);return null==e?[]:f(e)}}(t):t=null==(e=t)?h:function(){return this.querySelectorAll(e)};for(var n=this._groups,r=n.length,i=[],o=[],a=0;a<r;++a)for(var u,s=n[a],l=s.length,c=0;c<l;++c)(u=s[c])&&(i.push(t.call(u,u.__data__,c,s)),o.push(u));return new mt(i,o)},selectChild:function(t){return this.select(null==t?y:function(t){return function(){return p.call(this.children,t)}}("function"==typeof t?t:d(t)))},selectChildren:function(t){return this.selectAll(null==t?v:function(t){return function(){return g.call(this.children,t)}}("function"==typeof t?t:d(t)))},filter:function(t){var e;"function"!=typeof t&&(e=t,t=function(){return this.matches(e)});for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o)for(var a,u=n[o],s=u.length,l=i[o]=[],c=0;c<s;++c)(a=u[c])&&t.call(a,a.__data__,c,u)&&l.push(a);return new mt(i,this._parents)},data:function(t,e){if(!arguments.length)return Array.from(this,A);var n=e?b:w,r=this._parents,i=this._groups;"function"!=typeof t&&(t=x(t));for(var o=i.length,a=new Array(o),u=new Array(o),s=new Array(o),l=0;l<o;++l){var c=r[l],h=i[l],d=h.length,p=f(t.call(c,c&&c.__data__,l,r)),y=p.length,g=u[l]=new Array(y),v=a[l]=new Array(y),m=s[l]=new Array(d);n(c,h,g,v,m,p,e);for(var _,S,E=0,T=0;E<y;++E)if(_=g[E]){for(E>=T&&(T=E+1);!(S=v[T])&&++T<y;);_._next=S||null}}return(a=new mt(a,r))._enter=u,a._exit=s,a},enter:function(){return new mt(this._enter||this._groups.map(m),this._parents)},exit:function(){return new mt(this._exit||this._groups.map(m),this._parents)},join:function(t,e,n){var r=this.enter(),i=this,o=this.exit();return r="function"==typeof t?t(r):r.append(t+""),null!=e&&(i=e(i)),null==n?o.remove():n(o),r&&i?r.merge(i).order():i},merge:function(t){if(!(t instanceof mt))throw new Error("invalid merge");for(var e=this._groups,n=t._groups,r=e.length,i=n.length,o=Math.min(r,i),a=new Array(r),u=0;u<o;++u)for(var s,l=e[u],c=n[u],f=l.length,h=a[u]=new Array(f),d=0;d<f;++d)(s=l[d]||c[d])&&(h[d]=s);for(;u<r;++u)a[u]=e[u];return new mt(a,this._parents)},selection:function(){return this},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,i=t[e],o=i.length-1,a=i[o];--o>=0;)(r=i[o])&&(a&&4^r.compareDocumentPosition(a)&&a.parentNode.insertBefore(r,a),a=r);return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=S);for(var n=this._groups,r=n.length,i=new Array(r),o=0;o<r;++o){for(var a,u=n[o],s=u.length,l=i[o]=new Array(s),c=0;c<s;++c)(a=u[c])&&(l[c]=a);l.sort(e)}return new mt(i,this._parents).order()},call:function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){return Array.from(this)},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],i=0,o=r.length;i<o;++i){var a=r[i];if(a)return a}return null},size:function(){let t=0;for(const e of this)++t;return t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var i,o=e[n],a=0,u=o.length;a<u;++a)(i=o[a])&&t.call(i,i.__data__,a,o);return this},attr:function(t,e){var n=N(t);if(arguments.length<2){var r=this.node();return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?M:k:"function"==typeof e?n.local?L:P:n.local?B:C)(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?q:"function"==typeof e?z:O)(t,e,null==n?"":n)):I(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?$:"function"==typeof e?F:D)(t,e)):this.node()[t]},classed:function(t,e){var n=X(t+"");if(arguments.length<2){for(var r=U(this.node()),i=-1,o=n.length;++i<o;)if(!r.contains(n[i]))return!1;return!0}return this.each(("function"==typeof e?W:e?Y:G)(n,e))},text:function(t){return arguments.length?this.each(null==t?K:("function"==typeof t?Q:J)(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?Z:("function"==typeof t?et:tt)(t)):this.node().innerHTML},raise:function(){return this.each(nt)},lower:function(){return this.each(rt)},append:function(t){var e="function"==typeof t?t:at(t);return this.select((function(){return this.appendChild(e.apply(this,arguments))}))},insert:function(t,e){var n="function"==typeof t?t:at(t),r=null==e?ut:"function"==typeof e?e:c(e);return this.select((function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)}))},remove:function(){return this.each(st)},clone:function(t){return this.select(t?ct:lt)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,i,o=ft(t+""),a=o.length;if(!(arguments.length<2)){for(u=e?dt:ht,r=0;r<a;++r)this.each(u(o[r],e,n));return this}var u=this.node().__on;if(u)for(var s,l=0,c=u.length;l<c;++l)for(r=0,s=u[l];r<a;++r)if((i=o[r]).type===s.type&&i.name===s.name)return s.value},dispatch:function(t,e){return this.each(("function"==typeof e?gt:yt)(t,e))},[Symbol.iterator]:function*(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r,i=t[e],o=0,a=i.length;o<a;++o)(r=i[o])&&(yield r)}};var xt=function(t){return"string"==typeof t?new mt([[document.querySelector(t)]],[document.documentElement]):new mt([[t]],vt)},wt=function(t,e){var n,r=1;function i(){var i,o,a=n.length,u=0,s=0;for(i=0;i<a;++i)u+=(o=n[i]).x,s+=o.y;for(u=(u/a-t)*r,s=(s/a-e)*r,i=0;i<a;++i)(o=n[i]).x-=u,o.y-=s}return null==t&&(t=0),null==e&&(e=0),i.initialize=function(t){n=t},i.x=function(e){return arguments.length?(t=+e,i):t},i.y=function(t){return arguments.length?(e=+t,i):e},i.strength=function(t){return arguments.length?(r=+t,i):r},i},bt=function(t){return function(){return t}},At=function(t){return 1e-6*(t()-.5)};function St(t){return t.index}function Et(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}var Tt=function(t){var e,n,r,i,o,a,u=St,s=function(t){return 1/Math.min(i[t.source.index],i[t.target.index])},l=bt(30),c=1;function f(r){for(var i=0,u=t.length;i<c;++i)for(var s,l,f,h,d,p,y,g=0;g<u;++g)l=(s=t[g]).source,h=(f=s.target).x+f.vx-l.x-l.vx||At(a),d=f.y+f.vy-l.y-l.vy||At(a),h*=p=((p=Math.sqrt(h*h+d*d))-n[g])/p*r*e[g],d*=p,f.vx-=h*(y=o[g]),f.vy-=d*y,l.vx+=h*(y=1-y),l.vy+=d*y}function h(){if(r){var a,s,l=r.length,c=t.length,f=new Map(r.map((t,e)=>[u(t,e,r),t]));for(a=0,i=new Array(l);a<c;++a)(s=t[a]).index=a,"object"!=typeof s.source&&(s.source=Et(f,s.source)),"object"!=typeof s.target&&(s.target=Et(f,s.target)),i[s.source.index]=(i[s.source.index]||0)+1,i[s.target.index]=(i[s.target.index]||0)+1;for(a=0,o=new Array(c);a<c;++a)s=t[a],o[a]=i[s.source.index]/(i[s.source.index]+i[s.target.index]);e=new Array(c),d(),n=new Array(c),p()}}function d(){if(r)for(var n=0,i=t.length;n<i;++n)e[n]=+s(t[n],n,t)}function p(){if(r)for(var e=0,i=t.length;e<i;++e)n[e]=+l(t[e],e,t)}return null==t&&(t=[]),f.initialize=function(t,e){r=t,a=e,h()},f.links=function(e){return arguments.length?(t=e,h(),f):t},f.id=function(t){return arguments.length?(u=t,f):u},f.iterations=function(t){return arguments.length?(c=+t,f):c},f.strength=function(t){return arguments.length?(s="function"==typeof t?t:bt(+t),d(),f):s},f.distance=function(t){return arguments.length?(l="function"==typeof t?t:bt(+t),p(),f):l},f};function Nt(t,e,n,r){if(isNaN(e)||isNaN(n))return t;var i,o,a,u,s,l,c,f,h,d=t._root,p={data:r},y=t._x0,g=t._y0,v=t._x1,m=t._y1;if(!d)return t._root=p,t;for(;d.length;)if((l=e>=(o=(y+v)/2))?y=o:v=o,(c=n>=(a=(g+m)/2))?g=a:m=a,i=d,!(d=d[f=c<<1|l]))return i[f]=p,t;if(u=+t._x.call(null,d.data),s=+t._y.call(null,d.data),e===u&&n===s)return p.next=d,i?i[f]=p:t._root=p,t;do{i=i?i[f]=new Array(4):t._root=new Array(4),(l=e>=(o=(y+v)/2))?y=o:v=o,(c=n>=(a=(g+m)/2))?g=a:m=a}while((f=c<<1|l)==(h=(s>=a)<<1|u>=o));return i[h]=d,i[f]=p,t}var kt=function(t,e,n,r,i){this.node=t,this.x0=e,this.y0=n,this.x1=r,this.y1=i};function Mt(t){return t[0]}function Ct(t){return t[1]}function Bt(t,e,n){var r=new Pt(null==e?Mt:e,null==n?Ct:n,NaN,NaN,NaN,NaN);return null==t?r:r.addAll(t)}function Pt(t,e,n,r,i,o){this._x=t,this._y=e,this._x0=n,this._y0=r,this._x1=i,this._y1=o,this._root=void 0}function Lt(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var jt=Bt.prototype=Pt.prototype;jt.copy=function(){var t,e,n=new Pt(this._x,this._y,this._x0,this._y0,this._x1,this._y1),r=this._root;if(!r)return n;if(!r.length)return n._root=Lt(r),n;for(t=[{source:r,target:n._root=new Array(4)}];r=t.pop();)for(var i=0;i<4;++i)(e=r.source[i])&&(e.length?t.push({source:e,target:r.target[i]=new Array(4)}):r.target[i]=Lt(e));return n},jt.add=function(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Nt(this.cover(e,n),e,n,t)},jt.addAll=function(t){var e,n,r,i,o=t.length,a=new Array(o),u=new Array(o),s=1/0,l=1/0,c=-1/0,f=-1/0;for(n=0;n<o;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(i=+this._y.call(null,e))||(a[n]=r,u[n]=i,r<s&&(s=r),r>c&&(c=r),i<l&&(l=i),i>f&&(f=i));if(s>c||l>f)return this;for(this.cover(s,l).cover(c,f),n=0;n<o;++n)Nt(this,a[n],u[n],t[n]);return this},jt.cover=function(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,r=this._y0,i=this._x1,o=this._y1;if(isNaN(n))i=(n=Math.floor(t))+1,o=(r=Math.floor(e))+1;else{for(var a,u,s=i-n||1,l=this._root;n>t||t>=i||r>e||e>=o;)switch(u=(e<r)<<1|t<n,(a=new Array(4))[u]=l,l=a,s*=2,u){case 0:i=n+s,o=r+s;break;case 1:n=i-s,o=r+s;break;case 2:i=n+s,r=o-s;break;case 3:n=i-s,r=o-s}this._root&&this._root.length&&(this._root=l)}return this._x0=n,this._y0=r,this._x1=i,this._y1=o,this},jt.data=function(){var t=[];return this.visit((function(e){if(!e.length)do{t.push(e.data)}while(e=e.next)})),t},jt.extent=function(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]},jt.find=function(t,e,n){var r,i,o,a,u,s,l,c=this._x0,f=this._y0,h=this._x1,d=this._y1,p=[],y=this._root;for(y&&p.push(new kt(y,c,f,h,d)),null==n?n=1/0:(c=t-n,f=e-n,h=t+n,d=e+n,n*=n);s=p.pop();)if(!(!(y=s.node)||(i=s.x0)>h||(o=s.y0)>d||(a=s.x1)<c||(u=s.y1)<f))if(y.length){var g=(i+a)/2,v=(o+u)/2;p.push(new kt(y[3],g,v,a,u),new kt(y[2],i,v,g,u),new kt(y[1],g,o,a,v),new kt(y[0],i,o,g,v)),(l=(e>=v)<<1|t>=g)&&(s=p[p.length-1],p[p.length-1]=p[p.length-1-l],p[p.length-1-l]=s)}else{var m=t-+this._x.call(null,y.data),_=e-+this._y.call(null,y.data),x=m*m+_*_;if(x<n){var w=Math.sqrt(n=x);c=t-w,f=e-w,h=t+w,d=e+w,r=y.data}}return r},jt.remove=function(t){if(isNaN(o=+this._x.call(null,t))||isNaN(a=+this._y.call(null,t)))return this;var e,n,r,i,o,a,u,s,l,c,f,h,d=this._root,p=this._x0,y=this._y0,g=this._x1,v=this._y1;if(!d)return this;if(d.length)for(;;){if((l=o>=(u=(p+g)/2))?p=u:g=u,(c=a>=(s=(y+v)/2))?y=s:v=s,e=d,!(d=d[f=c<<1|l]))return this;if(!d.length)break;(e[f+1&3]||e[f+2&3]||e[f+3&3])&&(n=e,h=f)}for(;d.data!==t;)if(r=d,!(d=d.next))return this;return(i=d.next)&&delete d.next,r?(i?r.next=i:delete r.next,this):e?(i?e[f]=i:delete e[f],(d=e[0]||e[1]||e[2]||e[3])&&d===(e[3]||e[2]||e[1]||e[0])&&!d.length&&(n?n[h]=d:this._root=d),this):(this._root=i,this)},jt.removeAll=function(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this},jt.root=function(){return this._root},jt.size=function(){var t=0;return this.visit((function(e){if(!e.length)do{++t}while(e=e.next)})),t},jt.visit=function(t){var e,n,r,i,o,a,u=[],s=this._root;for(s&&u.push(new kt(s,this._x0,this._y0,this._x1,this._y1));e=u.pop();)if(!t(s=e.node,r=e.x0,i=e.y0,o=e.x1,a=e.y1)&&s.length){var l=(r+o)/2,c=(i+a)/2;(n=s[3])&&u.push(new kt(n,l,c,o,a)),(n=s[2])&&u.push(new kt(n,r,c,l,a)),(n=s[1])&&u.push(new kt(n,l,i,o,c)),(n=s[0])&&u.push(new kt(n,r,i,l,c))}return this},jt.visitAfter=function(t){var e,n=[],r=[];for(this._root&&n.push(new kt(this._root,this._x0,this._y0,this._x1,this._y1));e=n.pop();){var i=e.node;if(i.length){var o,a=e.x0,u=e.y0,s=e.x1,l=e.y1,c=(a+s)/2,f=(u+l)/2;(o=i[0])&&n.push(new kt(o,a,u,c,f)),(o=i[1])&&n.push(new kt(o,c,u,s,f)),(o=i[2])&&n.push(new kt(o,a,f,c,l)),(o=i[3])&&n.push(new kt(o,c,f,s,l))}r.push(e)}for(;e=r.pop();)t(e.node,e.x0,e.y0,e.x1,e.y1);return this},jt.x=function(t){return arguments.length?(this._x=t,this):this._x},jt.y=function(t){return arguments.length?(this._y=t,this):this._y};var qt={value:()=>{}};function Ot(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r||/[\s.]/.test(t))throw new Error("illegal type: "+t);r[t]=[]}return new zt(r)}function zt(t){this._=t}function It(t,e){return t.trim().split(/^|\s+/).map((function(t){var n="",r=t.indexOf(".");if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:n}}))}function $t(t,e){for(var n,r=0,i=t.length;r<i;++r)if((n=t[r]).name===e)return n.value}function Dt(t,e,n){for(var r=0,i=t.length;r<i;++r)if(t[r].name===e){t[r]=qt,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=n&&t.push({name:e,value:n}),t}zt.prototype=Ot.prototype={constructor:zt,on:function(t,e){var n,r=this._,i=It(t+"",r),o=-1,a=i.length;if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e);for(;++o<a;)if(n=(t=i[o]).type)r[n]=Dt(r[n],t.name,e);else if(null==e)for(n in r)r[n]=Dt(r[n],t.name,null);return this}for(;++o<a;)if((n=(t=i[o]).type)&&(n=$t(r[n],t.name)))return n},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new zt(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,i=new Array(n),o=0;o<n;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=0,n=(r=this._[t]).length;o<n;++o)r[o].value.apply(e,i)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(e,n)}};var Ft,Xt,Ut=Ot,Ht=0,Vt=0,Rt=0,Yt=0,Gt=0,Wt=0,Kt="object"==typeof performance&&performance.now?performance:Date,Jt="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function Qt(){return Gt||(Jt(Zt),Gt=Kt.now()+Wt)}function Zt(){Gt=0}function te(){this._call=this._time=this._next=null}function ee(t,e,n){var r=new te;return r.restart(t,e,n),r}function ne(){Gt=(Yt=Kt.now())+Wt,Ht=Vt=0;try{!function(){Qt(),++Ht;for(var t,e=Ft;e;)(t=Gt-e._time)>=0&&e._call.call(null,t),e=e._next;--Ht}()}finally{Ht=0,function(){var t,e,n=Ft,r=1/0;for(;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:Ft=e);Xt=t,ie(r)}(),Gt=0}}function re(){var t=Kt.now(),e=t-Yt;e>1e3&&(Wt-=e,Yt=t)}function ie(t){Ht||(Vt&&(Vt=clearTimeout(Vt)),t-Gt>24?(t<1/0&&(Vt=setTimeout(ne,t-Kt.now()-Wt)),Rt&&(Rt=clearInterval(Rt))):(Rt||(Yt=Kt.now(),Rt=setInterval(re,1e3)),Ht=1,Jt(ne)))}te.prototype=ee.prototype={constructor:te,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function");n=(null==n?Qt():+n)+(null==e?0:+e),this._next||Xt===this||(Xt?Xt._next=this:Ft=this,Xt=this),this._call=t,this._time=n,ie()},stop:function(){this._call&&(this._call=null,this._time=1/0,ie())}};function oe(t){return t.x}function ae(t){return t.y}var ue=Math.PI*(3-Math.sqrt(5)),se=function(t){var e,n=1,r=.001,i=1-Math.pow(r,1/300),o=0,a=.6,u=new Map,s=ee(f),l=Ut("tick","end"),c=function(){let t=1;return()=>(t=(1664525*t+1013904223)%4294967296)/4294967296}();function f(){h(),l.call("tick",e),n<r&&(s.stop(),l.call("end",e))}function h(r){var s,l,c=t.length;void 0===r&&(r=1);for(var f=0;f<r;++f)for(n+=(o-n)*i,u.forEach((function(t){t(n)})),s=0;s<c;++s)null==(l=t[s]).fx?l.x+=l.vx*=a:(l.x=l.fx,l.vx=0),null==l.fy?l.y+=l.vy*=a:(l.y=l.fy,l.vy=0);return e}function d(){for(var e,n=0,r=t.length;n<r;++n){if((e=t[n]).index=n,null!=e.fx&&(e.x=e.fx),null!=e.fy&&(e.y=e.fy),isNaN(e.x)||isNaN(e.y)){var i=10*Math.sqrt(.5+n),o=n*ue;e.x=i*Math.cos(o),e.y=i*Math.sin(o)}(isNaN(e.vx)||isNaN(e.vy))&&(e.vx=e.vy=0)}}function p(e){return e.initialize&&e.initialize(t,c),e}return null==t&&(t=[]),d(),e={tick:h,restart:function(){return s.restart(f),e},stop:function(){return s.stop(),e},nodes:function(n){return arguments.length?(t=n,d(),u.forEach(p),e):t},alpha:function(t){return arguments.length?(n=+t,e):n},alphaMin:function(t){return arguments.length?(r=+t,e):r},alphaDecay:function(t){return arguments.length?(i=+t,e):+i},alphaTarget:function(t){return arguments.length?(o=+t,e):o},velocityDecay:function(t){return arguments.length?(a=1-t,e):1-a},randomSource:function(t){return arguments.length?(c=t,u.forEach(p),e):c},force:function(t,n){return arguments.length>1?(null==n?u.delete(t):u.set(t,p(n)),e):u.get(t)},find:function(e,n,r){var i,o,a,u,s,l=0,c=t.length;for(null==r?r=1/0:r*=r,l=0;l<c;++l)(a=(i=e-(u=t[l]).x)*i+(o=n-u.y)*o)<r&&(s=u,r=a);return s},on:function(t,n){return arguments.length>1?(l.on(t,n),e):l.on(t)}}},le=function(){var t,e,n,r,i,o=bt(-30),a=1,u=1/0,s=.81;function l(n){var i,o=t.length,a=Bt(t,oe,ae).visitAfter(f);for(r=n,i=0;i<o;++i)e=t[i],a.visit(h)}function c(){if(t){var e,n,r=t.length;for(i=new Array(r),e=0;e<r;++e)n=t[e],i[n.index]=+o(n,e,t)}}function f(t){var e,n,r,o,a,u=0,s=0;if(t.length){for(r=o=a=0;a<4;++a)(e=t[a])&&(n=Math.abs(e.value))&&(u+=e.value,s+=n,r+=n*e.x,o+=n*e.y);t.x=r/s,t.y=o/s}else{(e=t).x=e.data.x,e.y=e.data.y;do{u+=i[e.data.index]}while(e=e.next)}t.value=u}function h(t,o,l,c){if(!t.value)return!0;var f=t.x-e.x,h=t.y-e.y,d=c-o,p=f*f+h*h;if(d*d/s<p)return p<u&&(0===f&&(p+=(f=At(n))*f),0===h&&(p+=(h=At(n))*h),p<a&&(p=Math.sqrt(a*p)),e.vx+=f*t.value*r/p,e.vy+=h*t.value*r/p),!0;if(!(t.length||p>=u)){(t.data!==e||t.next)&&(0===f&&(p+=(f=At(n))*f),0===h&&(p+=(h=At(n))*h),p<a&&(p=Math.sqrt(a*p)));do{t.data!==e&&(d=i[t.data.index]*r/p,e.vx+=f*d,e.vy+=h*d)}while(t=t.next)}}return l.initialize=function(e,r){t=e,n=r,c()},l.strength=function(t){return arguments.length?(o="function"==typeof t?t:bt(+t),c(),l):o},l.distanceMin=function(t){return arguments.length?(a=t*t,l):Math.sqrt(a)},l.distanceMax=function(t){return arguments.length?(u=t*t,l):Math.sqrt(u)},l.theta=function(t){return arguments.length?(s=t*t,l):Math.sqrt(s)},l},ce=function(t,e){if(t=function(t){let e;for(;e=t.sourceEvent;)t=e;return t}(t),void 0===e&&(e=t.currentTarget),e){var n=e.ownerSVGElement||e;if(n.createSVGPoint){var r=n.createSVGPoint();return r.x=t.clientX,r.y=t.clientY,[(r=r.matrixTransform(e.getScreenCTM().inverse())).x,r.y]}if(e.getBoundingClientRect){var i=e.getBoundingClientRect();return[t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop]}}return[t.pageX,t.pageY]};function fe(t){t.stopImmediatePropagation()}var he=function(t){t.preventDefault(),t.stopImmediatePropagation()};var de=t=>()=>t;function pe(t,{sourceEvent:e,subject:n,target:r,identifier:i,active:o,x:a,y:u,dx:s,dy:l,dispatch:c}){Object.defineProperties(this,{type:{value:t,enumerable:!0,configurable:!0},sourceEvent:{value:e,enumerable:!0,configurable:!0},subject:{value:n,enumerable:!0,configurable:!0},target:{value:r,enumerable:!0,configurable:!0},identifier:{value:i,enumerable:!0,configurable:!0},active:{value:o,enumerable:!0,configurable:!0},x:{value:a,enumerable:!0,configurable:!0},y:{value:u,enumerable:!0,configurable:!0},dx:{value:s,enumerable:!0,configurable:!0},dy:{value:l,enumerable:!0,configurable:!0},_:{value:c}})}function ye(t){return!t.ctrlKey&&!t.button}function ge(){return this.parentNode}function ve(t,e){return null==e?{x:t.x,y:t.y}:e}function me(){return navigator.maxTouchPoints||"ontouchstart"in this}pe.prototype.on=function(){var t=this._.on.apply(this._,arguments);return t===this._?this:t};var _e=function(){var t,e,n,r,i=ye,o=ge,a=ve,u=me,s={},l=Ut("start","drag","end"),c=0,f=0;function h(t){t.on("mousedown.drag",d).filter(u).on("touchstart.drag",g).on("touchmove.drag",v).on("touchend.drag touchcancel.drag",m).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function d(a,u){if(!r&&i.call(this,a,u)){var s,l,c,f=_(this,o.call(this,a,u),a,u,"mouse");if(f)xt(a.view).on("mousemove.drag",p,!0).on("mouseup.drag",y,!0),s=a.view,l=s.document.documentElement,c=xt(s).on("dragstart.drag",he,!0),"onselectstart"in l?c.on("selectstart.drag",he,!0):(l.__noselect=l.style.MozUserSelect,l.style.MozUserSelect="none"),fe(a),n=!1,t=a.clientX,e=a.clientY,f("start",a)}}function p(r){if(he(r),!n){var i=r.clientX-t,o=r.clientY-e;n=i*i+o*o>f}s.mouse("drag",r)}function y(t){var e,r,i,o;xt(t.view).on("mousemove.drag mouseup.drag",null),e=t.view,r=n,i=e.document.documentElement,o=xt(e).on("dragstart.drag",null),r&&(o.on("click.drag",he,!0),setTimeout((function(){o.on("click.drag",null)}),0)),"onselectstart"in i?o.on("selectstart.drag",null):(i.style.MozUserSelect=i.__noselect,delete i.__noselect),he(t),s.mouse("end",t)}function g(t,e){if(i.call(this,t,e)){var n,r,a=t.changedTouches,u=o.call(this,t,e),s=a.length;for(n=0;n<s;++n)(r=_(this,u,t,e,a[n].identifier,a[n]))&&(fe(t),r("start",t,a[n]))}}function v(t){var e,n,r=t.changedTouches,i=r.length;for(e=0;e<i;++e)(n=s[r[e].identifier])&&(he(t),n("drag",t,r[e]))}function m(t){var e,n,i=t.changedTouches,o=i.length;for(r&&clearTimeout(r),r=setTimeout((function(){r=null}),500),e=0;e<o;++e)(n=s[i[e].identifier])&&(fe(t),n("end",t,i[e]))}function _(t,e,n,r,i,o){var u,f,d,p=l.copy(),y=ce(o||n,e);if(null!=(d=a.call(t,new pe("beforestart",{sourceEvent:n,target:h,identifier:i,active:c,x:y[0],y:y[1],dx:0,dy:0,dispatch:p}),r)))return u=d.x-y[0]||0,f=d.y-y[1]||0,function n(o,a,l){var g,v=y;switch(o){case"start":s[i]=n,g=c++;break;case"end":delete s[i],--c;case"drag":y=ce(l||a,e),g=c}p.call(o,t,new pe(o,{sourceEvent:a,subject:d,target:h,identifier:i,active:g,x:y[0]+u,y:y[1]+f,dx:y[0]-v[0],dy:y[1]-v[1],dispatch:p}),r)}}return h.filter=function(t){return arguments.length?(i="function"==typeof t?t:de(!!t),h):i},h.container=function(t){return arguments.length?(o="function"==typeof t?t:de(t),h):o},h.subject=function(t){return arguments.length?(a="function"==typeof t?t:de(t),h):a},h.touchable=function(t){return arguments.length?(u="function"==typeof t?t:de(!!t),h):u},h.on=function(){var t=l.on.apply(l,arguments);return t===l?h:t},h.clickDistance=function(t){return arguments.length?(f=(t=+t)*t,h):Math.sqrt(f)},h};const xe=t=>t.map(({index:t,earliestStartTime:e,duration:n,latestStartTime:r})=>({index:t,earliestStartTime:e,duration:n,latestStartTime:r})),we=t=>{const e=[];return t.forEach(t=>{t.predecessors.forEach(n=>{e.push({source:n,target:t.index})})}),e},be=t=>0===t.index||t.index===window.cpm_nodes.length-1?"#5DADE2":t.latestStartTime.toFixed(2)===t.earliestStartTime.toFixed(2)?"#EC7063":"#ABEBC6",Ae=t=>{const{earliestStartTime:e,duration:n}=t[t.length-1];return t.map(({index:t,earliestStartTime:e,latestStartTime:n})=>({index:t,earliestStartTime:e,latestStartTime:n})).concat([{index:t.length,earliestStartTime:e+n,latestStartTime:e+n}])},Se=t=>{const e=[];return t.forEach(n=>{n.predecessors.forEach(r=>{const{earliestStartTime:o,duration:a}=t[r];e.push({name:i(r),duration:t[r].duration,isCriticalPath:n.latestStartTime.toFixed(2)===(o+a).toFixed(2),source:r,target:n.index})})}),e.push({name:i(t.length-1),duration:t[t.length-1].duration,isCriticalPath:!0,source:t.length-1,target:t.length}),e},Ee=(t,e,n,r)=>{if(r.has(t))return!0;r.add(t),n.add(t);let i=!1;return e[t].forEach(t=>{n.has(t)?r.has(t)&&(i=!0):Ee(t,e,n,r)&&(i=!0)}),r.delete(t),i};document.addEventListener("readystatechange",()=>{"interactive"===document.readyState&&(document.getElementById("add-row-btn").onclick=o,document.getElementById("rmv-row-btn").onclick=a,document.getElementById("gen-graphs-btn").onclick=Te)});const Te=()=>{const{activities:t,error:e}=(()=>{const t=[...document.querySelectorAll("tbody > tr")].map((t,e,n)=>{const r=t.querySelector("input.predec").value.split(",").map(t=>t.trim().toUpperCase()).filter(t=>1===t.length).map(t=>t.charCodeAt(0)-"A".charCodeAt(0)).filter(t=>t>=0&&t<n.length&&t!==e);return{index:e,predecessors:[...new Set(r)],duration:parseFloat(t.querySelector("input.duration").value)}});if(t[0].predecessors.length>0)return{error:"First activity can't have predecessors",activities:[]};const e=t.slice(1).find(t=>0===t.predecessors.length);if(void 0!==e){return{error:`Activity ${i(e.index)} doesn't have predecessors`,activities:[]}}const n=new Set,o=new Set,a=r(t);return Ee(0,a,n,o)?{error:"A cycle between activities has been detected",activities:[]}:{error:"",activities:t}})();if(e)return void(document.getElementById("error-msg").innerText=e);document.getElementById("error-msg").innerText="";const n=(t=>{const e=t.map(t=>Object.assign(Object.assign({},t),{earliestStartTime:-1,latestStartTime:-1}));e[0].earliestStartTime=0;let n=t.map(t=>t.index);for(;n.length>0;)n.forEach(t=>{e[t].earliestStartTime=e[t].predecessors.reduce((t,n)=>u(t,e[n]),0)}),n=n.filter(t=>-1===e[t].earliestStartTime);const i=e[e.length-1].earliestStartTime;e[e.length-1].latestStartTime=i;const o=r(e).map(t=>[...t]);for(n=t.map(t=>t.index);n.length>0;)n.forEach(t=>{e[t].latestStartTime=o[t].reduce((n,r)=>s(n,e[r],e[t].duration),i)}),n=n.filter(t=>-1===e[t].latestStartTime);return e})(t);(t=>{window.cpm_nodes=xe(t),window.cpm_links=we(t);const e=xt("#cpm-graph");e.style("display","block"),e.selectAll("svg").remove();const n=e.append("svg").attr("viewBox","0 0 900 700");n.append("defs").append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",33).attr("orient","auto").attr("markerWidth",13).attr("markerHeight",13).append("path").attr("d","M0,-5 L10,0 L0,5");const r=n.selectAll(".edgepath").data(window.cpm_links).enter().append("path").attr("class",".edgepath").attr("fill-opacity",0).attr("stroke","#000").attr("marker-end","url(#arrowhead)").style("pointer-events","none"),o=n.selectAll(".node").data(window.cpm_nodes).enter().append("g").attr("class","node");o.append("circle").attr("fill",t=>be(t)).attr("r",30).attr("stroke","black"),o.append("text").attr("dy",5).attr("text-anchor","middle").text(t=>i(t.index)),o.append("text").attr("dx",-2).attr("dy",-10).attr("text-anchor","end").style("font-size","8px").text(t=>t.earliestStartTime.toFixed(2)),o.append("text").attr("dx",2).attr("dy",-10).attr("text-anchor","start").style("font-size","8px").text(t=>(t.earliestStartTime+t.duration).toFixed(2)),o.append("text").attr("dx",-2).attr("dy",15).attr("text-anchor","end").style("font-size","8px").text(t=>t.latestStartTime.toFixed(2)),o.append("text").attr("dx",2).attr("dy",15).attr("text-anchor","start").style("font-size","8px").text(t=>(t.latestStartTime+t.duration).toFixed(2));const a=se(window.cpm_nodes).force("link",Tt(window.cpm_links).distance(150).strength(.8)).force("charge",le().strength(-400)).force("center",wt(450,350)).on("tick",()=>{o.attr("transform",t=>`translate(${t.x},${t.y})`),r.attr("d",t=>{const e=t.source,n=t.target;return`M ${e.x},${e.y} L${n.x},${n.y}`})}),u=_e().on("start",(t,e)=>{t.sourceEvent.stopPropagation(),t.active||a.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",(t,e)=>{e.fx=t.x,e.fy=t.y}).on("end",(t,e)=>{t.active||a.alphaTarget(0),e.fx=null,e.fy=null});o.call(u)})(n),(t=>{window.pert_nodes=Ae(t),window.pert_links=Se(t);const e=xt("#pert-graph");e.style("display","block"),e.selectAll("svg").remove();const n=e.append("svg").attr("viewBox","0 0 900 700"),r=n.append("defs");r.append("marker").attr("id","arrowhead").attr("viewBox","-0 -5 10 10").attr("refX",33).attr("orient","auto").attr("markerWidth",13).attr("markerHeight",13).append("path").attr("d","M0,-5 L10,0 L0,5"),r.append("marker").attr("id","arrowhead-red").attr("viewBox","-0 -5 10 10").attr("refX",33).attr("orient","auto").attr("markerWidth",13).attr("markerHeight",13).append("path").attr("fill","#E74C3C").attr("d","M0,-5 L10,0 L0,5");const i=n.selectAll(".edgepath").data(window.pert_links).enter().append("path").attr("class",".edgepath").attr("fill-opacity",0).attr("stroke",t=>t.isCriticalPath?"#E74C3C":"black").attr("id",(t,e)=>"edgepath-"+e).attr("marker-end",t=>t.isCriticalPath?"url(#arrowhead-red)":"url(#arrowhead)").style("pointer-events","none"),o=n.selectAll(".edgelabel").data(window.pert_links).enter().append("text").attr("dy",-3).attr("class",".edgelabel").attr("font-size",12).style("pointer-events","none");o.append("textPath").attr("href",(t,e)=>"#edgepath-"+e).style("text-anchor","middle").style("pointer-events","none").attr("startOffset","50%").attr("fill","black").text(t=>`${t.name}: ${t.duration}`);const a=n.selectAll(".node").data(window.pert_nodes).enter().append("g").attr("class","node");a.append("circle").attr("fill","#AED6F1").attr("r",30).attr("stroke","black"),a.append("text").attr("dy",-5).attr("text-anchor","middle").text(t=>t.index+1),a.append("text").attr("dy",6).attr("text-anchor","middle").style("font-size","10px").text(t=>"Ti: "+t.earliestStartTime.toFixed(2)),a.append("text").attr("dy",16).attr("text-anchor","middle").style("font-size","10px").text(t=>"Tf: "+t.latestStartTime.toFixed(2));const u=se(window.pert_nodes).force("link",Tt(window.pert_links).distance(150).strength(.8)).force("charge",le().strength(-400)).force("center",wt(450,350)).on("tick",()=>{a.attr("transform",t=>`translate(${t.x},${t.y})`),i.attr("d",t=>{const e=t.source,n=t.target;return`M ${e.x},${e.y} L${n.x},${n.y}`}),o.attr("transform",(t,e,n)=>{if(t.target.x<t.source.x){const t=n[e].getBBox();return`rotate(180 ${t.x+t.width/2} ${t.y+t.height/2})`}return"rotate(0)"})}),s=_e().on("start",(t,e)=>{t.sourceEvent.stopPropagation(),t.active||u.alphaTarget(.3).restart(),e.fx=e.x,e.fy=e.y}).on("drag",(t,e)=>{e.fx=t.x,e.fy=t.y}).on("end",(t,e)=>{t.active||u.alphaTarget(0),e.fx=null,e.fy=null});a.call(s)})(n)}}});
//# sourceMappingURL=app.bundle.js.map