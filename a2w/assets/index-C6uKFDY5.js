(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function A0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var _m={exports:{}},Tl={},ym={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La=Symbol.for("react.element"),T0=Symbol.for("react.portal"),C0=Symbol.for("react.fragment"),R0=Symbol.for("react.strict_mode"),N0=Symbol.for("react.profiler"),P0=Symbol.for("react.provider"),L0=Symbol.for("react.context"),D0=Symbol.for("react.forward_ref"),I0=Symbol.for("react.suspense"),U0=Symbol.for("react.memo"),F0=Symbol.for("react.lazy"),sh=Symbol.iterator;function B0(t){return t===null||typeof t!="object"?null:(t=sh&&t[sh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function Rs(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}Rs.prototype.isReactComponent={};Rs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Rs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=Rs.prototype;function Od(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var zd=Od.prototype=new wm;zd.constructor=Od;Mm(zd,Rs.prototype);zd.isPureReactComponent=!0;var ah=Array.isArray,bm=Object.prototype.hasOwnProperty,jd={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Tm(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)bm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:La,type:t,key:s,ref:a,props:r,_owner:jd.current}}function k0(t,e){return{$$typeof:La,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hd(t){return typeof t=="object"&&t!==null&&t.$$typeof===La}function O0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var oh=/\/+/g;function Ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?O0(""+t.key):e.toString(36)}function No(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case La:case T0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Ql(a,0):i,ah(r)?(n="",t!=null&&(n=t.replace(oh,"$&/")+"/"),No(r,e,n,"",function(u){return u})):r!=null&&(Hd(r)&&(r=k0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(oh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",ah(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+Ql(s,o);a+=No(s,e,n,c,r)}else if(c=B0(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+Ql(s,o++),a+=No(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Ga(t,e,n){if(t==null)return t;var i=[],r=0;return No(t,i,"","",function(s){return e.call(n,s,r++)}),i}function z0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var qt={current:null},Po={transition:null},j0={ReactCurrentDispatcher:qt,ReactCurrentBatchConfig:Po,ReactCurrentOwner:jd};function Cm(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Ga,forEach:function(t,e,n){Ga(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ga(t,function(){e++}),e},toArray:function(t){return Ga(t,function(e){return e})||[]},only:function(t){if(!Hd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=Rs;Ve.Fragment=C0;Ve.Profiler=N0;Ve.PureComponent=Od;Ve.StrictMode=R0;Ve.Suspense=I0;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j0;Ve.act=Cm;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=jd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)bm.call(e,c)&&!Am.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:La,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:L0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:P0,_context:t},t.Consumer=t};Ve.createElement=Tm;Ve.createFactory=function(t){var e=Tm.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:D0,render:t}};Ve.isValidElement=Hd;Ve.lazy=function(t){return{$$typeof:F0,_payload:{_status:-1,_result:t},_init:z0}};Ve.memo=function(t,e){return{$$typeof:U0,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=Po.transition;Po.transition={};try{t()}finally{Po.transition=e}};Ve.unstable_act=Cm;Ve.useCallback=function(t,e){return qt.current.useCallback(t,e)};Ve.useContext=function(t){return qt.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return qt.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return qt.current.useEffect(t,e)};Ve.useId=function(){return qt.current.useId()};Ve.useImperativeHandle=function(t,e,n){return qt.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return qt.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return qt.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return qt.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return qt.current.useReducer(t,e,n)};Ve.useRef=function(t){return qt.current.useRef(t)};Ve.useState=function(t){return qt.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return qt.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return qt.current.useTransition()};Ve.version="18.3.1";ym.exports=Ve;var fe=ym.exports;const H0=A0(fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G0=fe,V0=Symbol.for("react.element"),W0=Symbol.for("react.fragment"),X0=Object.prototype.hasOwnProperty,q0=G0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Y0={key:!0,ref:!0,__self:!0,__source:!0};function Rm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)X0.call(e,i)&&!Y0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:V0,type:t,key:s,ref:a,props:r,_owner:q0.current}}Tl.Fragment=W0;Tl.jsx=Rm;Tl.jsxs=Rm;_m.exports=Tl;var l=_m.exports,iu={},Nm={exports:{}},vn={},Pm={exports:{}},Lm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,$){var K=L.length;L.push($);e:for(;0<K;){var re=K-1>>>1,be=L[re];if(0<r(be,$))L[re]=$,L[K]=be,K=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var $=L[0],K=L.pop();if(K!==$){L[0]=K;e:for(var re=0,be=L.length,ze=be>>>1;re<ze;){var z=2*(re+1)-1,Y=L[z],se=z+1,ne=L[se];if(0>r(Y,K))se<be&&0>r(ne,Y)?(L[re]=ne,L[se]=K,re=se):(L[re]=Y,L[z]=K,re=z);else if(se<be&&0>r(ne,K))L[re]=ne,L[se]=K,re=se;else break e}}return $}function r(L,$){var K=L.sortIndex-$.sortIndex;return K!==0?K:L.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,f=null,p=3,m=!1,g=!1,S=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(L){for(var $=n(u);$!==null;){if($.callback===null)i(u);else if($.startTime<=L)i(u),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(u)}}function M(L){if(S=!1,_(L),!g)if(n(c)!==null)g=!0,G(N);else{var $=n(u);$!==null&&J(M,$.startTime-L)}}function N(L,$){g=!1,S&&(S=!1,d(P),P=-1),m=!0;var K=p;try{for(_($),f=n(c);f!==null&&(!(f.expirationTime>$)||L&&!w());){var re=f.callback;if(typeof re=="function"){f.callback=null,p=f.priorityLevel;var be=re(f.expirationTime<=$);$=t.unstable_now(),typeof be=="function"?f.callback=be:f===n(c)&&i(c),_($)}else i(c);f=n(c)}if(f!==null)var ze=!0;else{var z=n(u);z!==null&&J(M,z.startTime-$),ze=!1}return ze}finally{f=null,p=K,m=!1}}var T=!1,A=null,P=-1,V=5,y=-1;function w(){return!(t.unstable_now()-y<V)}function F(){if(A!==null){var L=t.unstable_now();y=L;var $=!0;try{$=A(!0,L)}finally{$?B():(T=!1,A=null)}}else T=!1}var B;if(typeof v=="function")B=function(){v(F)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,q=W.port2;W.port1.onmessage=F,B=function(){q.postMessage(null)}}else B=function(){x(F,0)};function G(L){A=L,T||(T=!0,B())}function J(L,$){P=x(function(){L(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,G(N))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(L){switch(p){case 1:case 2:case 3:var $=3;break;default:$=p}var K=p;p=$;try{return L()}finally{p=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,$){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var K=p;p=L;try{return $()}finally{p=K}},t.unstable_scheduleCallback=function(L,$,K){var re=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?re+K:re):K=re,L){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=K+be,L={id:h++,callback:$,priorityLevel:L,startTime:K,expirationTime:be,sortIndex:-1},K>re?(L.sortIndex=K,e(u,L),n(c)===null&&L===n(u)&&(S?(d(P),P=-1):S=!0,J(M,K-re))):(L.sortIndex=be,e(c,L),g||m||(g=!0,G(N))),L},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(L){var $=p;return function(){var K=p;p=$;try{return L.apply(this,arguments)}finally{p=K}}}})(Lm);Pm.exports=Lm;var $0=Pm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0=fe,gn=$0;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,fa={};function Cr(t,e){ms(t,e),ms(t+"Capture",e)}function ms(t,e){for(fa[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var mi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ru=Object.prototype.hasOwnProperty,Z0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lh={},ch={};function Q0(t){return ru.call(ch,t)?!0:ru.call(lh,t)?!1:Z0.test(t)?ch[t]=!0:(lh[t]=!0,!1)}function J0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ev(t,e,n,i){if(e===null||typeof e>"u"||J0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Yt(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Ft={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ft[t]=new Yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ft[e]=new Yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ft[t]=new Yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ft[t]=new Yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ft[t]=new Yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ft[t]=new Yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ft[t]=new Yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ft[t]=new Yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Gd=/[\-:]([a-z])/g;function Vd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Gd,Vd);Ft[e]=new Yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Gd,Vd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Gd,Vd);Ft[e]=new Yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ft.xlinkHref=new Yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ft[t]=new Yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Wd(t,e,n,i){var r=Ft.hasOwnProperty(e)?Ft[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ev(e,n,r,i)&&(n=null),i||r===null?Q0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var yi=K0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),qr=Symbol.for("react.portal"),Yr=Symbol.for("react.fragment"),Xd=Symbol.for("react.strict_mode"),su=Symbol.for("react.profiler"),Im=Symbol.for("react.provider"),Um=Symbol.for("react.context"),qd=Symbol.for("react.forward_ref"),au=Symbol.for("react.suspense"),ou=Symbol.for("react.suspense_list"),Yd=Symbol.for("react.memo"),Ri=Symbol.for("react.lazy"),Fm=Symbol.for("react.offscreen"),uh=Symbol.iterator;function Us(t){return t===null||typeof t!="object"?null:(t=uh&&t[uh]||t["@@iterator"],typeof t=="function"?t:null)}var xt=Object.assign,Jl;function Zs(t){if(Jl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jl=e&&e[1]||""}return`
`+Jl+t}var ec=!1;function tc(t,e){if(!t||ec)return"";ec=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{ec=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zs(t):""}function tv(t){switch(t.tag){case 5:return Zs(t.type);case 16:return Zs("Lazy");case 13:return Zs("Suspense");case 19:return Zs("SuspenseList");case 0:case 2:case 15:return t=tc(t.type,!1),t;case 11:return t=tc(t.type.render,!1),t;case 1:return t=tc(t.type,!0),t;default:return""}}function lu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Yr:return"Fragment";case qr:return"Portal";case su:return"Profiler";case Xd:return"StrictMode";case au:return"Suspense";case ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Um:return(t.displayName||"Context")+".Consumer";case Im:return(t._context.displayName||"Context")+".Provider";case qd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Yd:return e=t.displayName||null,e!==null?e:lu(t.type)||"Memo";case Ri:e=t._payload,t=t._init;try{return lu(t(e))}catch{}}return null}function nv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return lu(e);case 8:return e===Xd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Xi(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Bm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function iv(t){var e=Bm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Wa(t){t._valueTracker||(t._valueTracker=iv(t))}function km(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Bm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function $o(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function cu(t,e){var n=e.checked;return xt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Xi(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Om(t,e){e=e.checked,e!=null&&Wd(t,"checked",e,!1)}function uu(t,e){Om(t,e);var n=Xi(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?du(t,e.type,n):e.hasOwnProperty("defaultValue")&&du(t,e.type,Xi(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function du(t,e,n){(e!=="number"||$o(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Qs=Array.isArray;function as(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Xi(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function fu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return xt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function hh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(Qs(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Xi(n)}}function zm(t,e){var n=Xi(e.value),i=Xi(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function ph(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function jm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?jm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xa,Hm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xa=Xa||document.createElement("div"),Xa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ha(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var na={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rv=["Webkit","ms","Moz","O"];Object.keys(na).forEach(function(t){rv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),na[e]=na[t]})});function Gm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||na.hasOwnProperty(t)&&na[t]?(""+e).trim():e+"px"}function Vm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Gm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var sv=xt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function pu(t,e){if(e){if(sv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xu=null;function $d(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var gu=null,os=null,ls=null;function mh(t){if(t=Ua(t)){if(typeof gu!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Ll(e),gu(t.stateNode,t.type,e))}}function Wm(t){os?ls?ls.push(t):ls=[t]:os=t}function Xm(){if(os){var t=os,e=ls;if(ls=os=null,mh(t),e)for(t=0;t<e.length;t++)mh(e[t])}}function qm(t,e){return t(e)}function Ym(){}var nc=!1;function $m(t,e,n){if(nc)return t(e,n);nc=!0;try{return qm(t,e,n)}finally{nc=!1,(os!==null||ls!==null)&&(Ym(),Xm())}}function pa(t,e){var n=t.stateNode;if(n===null)return null;var i=Ll(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var vu=!1;if(mi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){vu=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{vu=!1}function av(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ia=!1,Ko=null,Zo=!1,_u=null,ov={onError:function(t){ia=!0,Ko=t}};function lv(t,e,n,i,r,s,a,o,c){ia=!1,Ko=null,av.apply(ov,arguments)}function cv(t,e,n,i,r,s,a,o,c){if(lv.apply(this,arguments),ia){if(ia){var u=Ko;ia=!1,Ko=null}else throw Error(ie(198));Zo||(Zo=!0,_u=u)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Km(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xh(t){if(Rr(t)!==t)throw Error(ie(188))}function uv(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xh(r),t;if(s===i)return xh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Zm(t){return t=uv(t),t!==null?Qm(t):null}function Qm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qm(t);if(e!==null)return e;t=t.sibling}return null}var Jm=gn.unstable_scheduleCallback,gh=gn.unstable_cancelCallback,dv=gn.unstable_shouldYield,fv=gn.unstable_requestPaint,St=gn.unstable_now,hv=gn.unstable_getCurrentPriorityLevel,Kd=gn.unstable_ImmediatePriority,ex=gn.unstable_UserBlockingPriority,Qo=gn.unstable_NormalPriority,pv=gn.unstable_LowPriority,tx=gn.unstable_IdlePriority,Cl=null,Kn=null;function mv(t){if(Kn&&typeof Kn.onCommitFiberRoot=="function")try{Kn.onCommitFiberRoot(Cl,t,void 0,(t.current.flags&128)===128)}catch{}}var jn=Math.clz32?Math.clz32:vv,xv=Math.log,gv=Math.LN2;function vv(t){return t>>>=0,t===0?32:31-(xv(t)/gv|0)|0}var qa=64,Ya=4194304;function Js(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Jo(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Js(o):(s&=a,s!==0&&(i=Js(s)))}else a=n&~r,a!==0?i=Js(a):s!==0&&(i=Js(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-jn(e),r=1<<n,i|=t[n],e&=~r;return i}function _v(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-jn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=_v(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function yu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function nx(){var t=qa;return qa<<=1,!(qa&4194240)&&(qa=64),t}function ic(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Da(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-jn(e),t[e]=n}function Sv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-jn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Zd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-jn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var nt=0;function ix(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var rx,Qd,sx,ax,ox,Su=!1,$a=[],Fi=null,Bi=null,ki=null,ma=new Map,xa=new Map,Pi=[],Mv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function vh(t,e){switch(t){case"focusin":case"focusout":Fi=null;break;case"dragenter":case"dragleave":Bi=null;break;case"mouseover":case"mouseout":ki=null;break;case"pointerover":case"pointerout":ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":xa.delete(e.pointerId)}}function Bs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ua(e),e!==null&&Qd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ev(t,e,n,i,r){switch(e){case"focusin":return Fi=Bs(Fi,t,e,n,i,r),!0;case"dragenter":return Bi=Bs(Bi,t,e,n,i,r),!0;case"mouseover":return ki=Bs(ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ma.set(s,Bs(ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,xa.set(s,Bs(xa.get(s)||null,t,e,n,i,r)),!0}return!1}function lx(t){var e=hr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Km(n),e!==null){t.blockedOn=e,ox(t.priority,function(){sx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Lo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Mu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xu=i,n.target.dispatchEvent(i),xu=null}else return e=Ua(n),e!==null&&Qd(e),t.blockedOn=n,!1;e.shift()}return!0}function _h(t,e,n){Lo(t)&&n.delete(e)}function wv(){Su=!1,Fi!==null&&Lo(Fi)&&(Fi=null),Bi!==null&&Lo(Bi)&&(Bi=null),ki!==null&&Lo(ki)&&(ki=null),ma.forEach(_h),xa.forEach(_h)}function ks(t,e){t.blockedOn===e&&(t.blockedOn=null,Su||(Su=!0,gn.unstable_scheduleCallback(gn.unstable_NormalPriority,wv)))}function ga(t){function e(r){return ks(r,t)}if(0<$a.length){ks($a[0],t);for(var n=1;n<$a.length;n++){var i=$a[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Fi!==null&&ks(Fi,t),Bi!==null&&ks(Bi,t),ki!==null&&ks(ki,t),ma.forEach(e),xa.forEach(e),n=0;n<Pi.length;n++)i=Pi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Pi.length&&(n=Pi[0],n.blockedOn===null);)lx(n),n.blockedOn===null&&Pi.shift()}var cs=yi.ReactCurrentBatchConfig,el=!0;function bv(t,e,n,i){var r=nt,s=cs.transition;cs.transition=null;try{nt=1,Jd(t,e,n,i)}finally{nt=r,cs.transition=s}}function Av(t,e,n,i){var r=nt,s=cs.transition;cs.transition=null;try{nt=4,Jd(t,e,n,i)}finally{nt=r,cs.transition=s}}function Jd(t,e,n,i){if(el){var r=Mu(t,e,n,i);if(r===null)hc(t,e,i,tl,n),vh(t,i);else if(Ev(r,t,e,n,i))i.stopPropagation();else if(vh(t,i),e&4&&-1<Mv.indexOf(t)){for(;r!==null;){var s=Ua(r);if(s!==null&&rx(s),s=Mu(t,e,n,i),s===null&&hc(t,e,i,tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hc(t,e,i,null,n)}}var tl=null;function Mu(t,e,n,i){if(tl=null,t=$d(i),t=hr(t),t!==null)if(e=Rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Km(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return tl=t,null}function cx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(hv()){case Kd:return 1;case ex:return 4;case Qo:case pv:return 16;case tx:return 536870912;default:return 16}default:return 16}}var Ii=null,ef=null,Do=null;function ux(){if(Do)return Do;var t,e=ef,n=e.length,i,r="value"in Ii?Ii.value:Ii.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Do=r.slice(t,1<i?1-i:void 0)}function Io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function yh(){return!1}function _n(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:yh,this.isPropagationStopped=yh,this}return xt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var Ns={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},tf=_n(Ns),Ia=xt({},Ns,{view:0,detail:0}),Tv=_n(Ia),rc,sc,Os,Rl=xt({},Ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Os&&(Os&&t.type==="mousemove"?(rc=t.screenX-Os.screenX,sc=t.screenY-Os.screenY):sc=rc=0,Os=t),rc)},movementY:function(t){return"movementY"in t?t.movementY:sc}}),Sh=_n(Rl),Cv=xt({},Rl,{dataTransfer:0}),Rv=_n(Cv),Nv=xt({},Ia,{relatedTarget:0}),ac=_n(Nv),Pv=xt({},Ns,{animationName:0,elapsedTime:0,pseudoElement:0}),Lv=_n(Pv),Dv=xt({},Ns,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Iv=_n(Dv),Uv=xt({},Ns,{data:0}),Mh=_n(Uv),Fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Bv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ov(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kv[t])?!!e[t]:!1}function nf(){return Ov}var zv=xt({},Ia,{key:function(t){if(t.key){var e=Fv[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Bv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nf,charCode:function(t){return t.type==="keypress"?Io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),jv=_n(zv),Hv=xt({},Rl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Eh=_n(Hv),Gv=xt({},Ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nf}),Vv=_n(Gv),Wv=xt({},Ns,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xv=_n(Wv),qv=xt({},Rl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Yv=_n(qv),$v=[9,13,27,32],rf=mi&&"CompositionEvent"in window,ra=null;mi&&"documentMode"in document&&(ra=document.documentMode);var Kv=mi&&"TextEvent"in window&&!ra,dx=mi&&(!rf||ra&&8<ra&&11>=ra),wh=" ",bh=!1;function fx(t,e){switch(t){case"keyup":return $v.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $r=!1;function Zv(t,e){switch(t){case"compositionend":return hx(e);case"keypress":return e.which!==32?null:(bh=!0,wh);case"textInput":return t=e.data,t===wh&&bh?null:t;default:return null}}function Qv(t,e){if($r)return t==="compositionend"||!rf&&fx(t,e)?(t=ux(),Do=ef=Ii=null,$r=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dx&&e.locale!=="ko"?null:e.data;default:return null}}var Jv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ah(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Jv[t.type]:e==="textarea"}function px(t,e,n,i){Wm(i),e=nl(e,"onChange"),0<e.length&&(n=new tf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var sa=null,va=null;function e_(t){bx(t,0)}function Nl(t){var e=Qr(t);if(km(e))return t}function t_(t,e){if(t==="change")return e}var mx=!1;if(mi){var oc;if(mi){var lc="oninput"in document;if(!lc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),lc=typeof Th.oninput=="function"}oc=lc}else oc=!1;mx=oc&&(!document.documentMode||9<document.documentMode)}function Ch(){sa&&(sa.detachEvent("onpropertychange",xx),va=sa=null)}function xx(t){if(t.propertyName==="value"&&Nl(va)){var e=[];px(e,va,t,$d(t)),$m(e_,e)}}function n_(t,e,n){t==="focusin"?(Ch(),sa=e,va=n,sa.attachEvent("onpropertychange",xx)):t==="focusout"&&Ch()}function i_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(va)}function r_(t,e){if(t==="click")return Nl(e)}function s_(t,e){if(t==="input"||t==="change")return Nl(e)}function a_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gn=typeof Object.is=="function"?Object.is:a_;function _a(t,e){if(Gn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ru.call(e,r)||!Gn(t[r],e[r]))return!1}return!0}function Rh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nh(t,e){var n=Rh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Rh(n)}}function gx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?gx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function vx(){for(var t=window,e=$o();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=$o(t.document)}return e}function sf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function o_(t){var e=vx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&gx(n.ownerDocument.documentElement,n)){if(i!==null&&sf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Nh(n,s);var a=Nh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var l_=mi&&"documentMode"in document&&11>=document.documentMode,Kr=null,Eu=null,aa=null,wu=!1;function Ph(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;wu||Kr==null||Kr!==$o(i)||(i=Kr,"selectionStart"in i&&sf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&_a(aa,i)||(aa=i,i=nl(Eu,"onSelect"),0<i.length&&(e=new tf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Kr)))}function Za(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Zr={animationend:Za("Animation","AnimationEnd"),animationiteration:Za("Animation","AnimationIteration"),animationstart:Za("Animation","AnimationStart"),transitionend:Za("Transition","TransitionEnd")},cc={},_x={};mi&&(_x=document.createElement("div").style,"AnimationEvent"in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),"TransitionEvent"in window||delete Zr.transitionend.transition);function Pl(t){if(cc[t])return cc[t];if(!Zr[t])return t;var e=Zr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in _x)return cc[t]=e[n];return t}var yx=Pl("animationend"),Sx=Pl("animationiteration"),Mx=Pl("animationstart"),Ex=Pl("transitionend"),wx=new Map,Lh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ki(t,e){wx.set(t,e),Cr(e,[t])}for(var uc=0;uc<Lh.length;uc++){var dc=Lh[uc],c_=dc.toLowerCase(),u_=dc[0].toUpperCase()+dc.slice(1);Ki(c_,"on"+u_)}Ki(yx,"onAnimationEnd");Ki(Sx,"onAnimationIteration");Ki(Mx,"onAnimationStart");Ki("dblclick","onDoubleClick");Ki("focusin","onFocus");Ki("focusout","onBlur");Ki(Ex,"onTransitionEnd");ms("onMouseEnter",["mouseout","mouseover"]);ms("onMouseLeave",["mouseout","mouseover"]);ms("onPointerEnter",["pointerout","pointerover"]);ms("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),d_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ea));function Dh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,cv(i,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;Dh(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;Dh(r,o,u),s=c}}}if(Zo)throw t=_u,Zo=!1,_u=null,t}function ot(t,e){var n=e[Ru];n===void 0&&(n=e[Ru]=new Set);var i=t+"__bubble";n.has(i)||(Ax(e,t,2,!1),n.add(i))}function fc(t,e,n){var i=0;e&&(i|=4),Ax(n,t,i,e)}var Qa="_reactListening"+Math.random().toString(36).slice(2);function ya(t){if(!t[Qa]){t[Qa]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(d_.has(n)||fc(n,!1,t),fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Qa]||(e[Qa]=!0,fc("selectionchange",!1,e))}}function Ax(t,e,n,i){switch(cx(e)){case 1:var r=bv;break;case 4:r=Av;break;default:r=Jd}n=r.bind(null,e,n,t),r=void 0,!vu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=hr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}$m(function(){var u=s,h=$d(n),f=[];e:{var p=wx.get(t);if(p!==void 0){var m=tf,g=t;switch(t){case"keypress":if(Io(n)===0)break e;case"keydown":case"keyup":m=jv;break;case"focusin":g="focus",m=ac;break;case"focusout":g="blur",m=ac;break;case"beforeblur":case"afterblur":m=ac;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Sh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Rv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=Vv;break;case yx:case Sx:case Mx:m=Lv;break;case Ex:m=Xv;break;case"scroll":m=Tv;break;case"wheel":m=Yv;break;case"copy":case"cut":case"paste":m=Iv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Eh}var S=(e&4)!==0,x=!S&&t==="scroll",d=S?p!==null?p+"Capture":null:p;S=[];for(var v=u,_;v!==null;){_=v;var M=_.stateNode;if(_.tag===5&&M!==null&&(_=M,d!==null&&(M=pa(v,d),M!=null&&S.push(Sa(v,M,_)))),x)break;v=v.return}0<S.length&&(p=new m(p,g,null,n,h),f.push({event:p,listeners:S}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",p&&n!==xu&&(g=n.relatedTarget||n.fromElement)&&(hr(g)||g[xi]))break e;if((m||p)&&(p=h.window===h?h:(p=h.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?hr(g):null,g!==null&&(x=Rr(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(S=Sh,M="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Eh,M="onPointerLeave",d="onPointerEnter",v="pointer"),x=m==null?p:Qr(m),_=g==null?p:Qr(g),p=new S(M,v+"leave",m,n,h),p.target=x,p.relatedTarget=_,M=null,hr(h)===u&&(S=new S(d,v+"enter",g,n,h),S.target=_,S.relatedTarget=x,M=S),x=M,m&&g)t:{for(S=m,d=g,v=0,_=S;_;_=Lr(_))v++;for(_=0,M=d;M;M=Lr(M))_++;for(;0<v-_;)S=Lr(S),v--;for(;0<_-v;)d=Lr(d),_--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=Lr(S),d=Lr(d)}S=null}else S=null;m!==null&&Ih(f,p,m,S,!1),g!==null&&x!==null&&Ih(f,x,g,S,!0)}}e:{if(p=u?Qr(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var N=t_;else if(Ah(p))if(mx)N=s_;else{N=i_;var T=n_}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(N=r_);if(N&&(N=N(t,u))){px(f,N,n,h);break e}T&&T(t,p,u),t==="focusout"&&(T=p._wrapperState)&&T.controlled&&p.type==="number"&&du(p,"number",p.value)}switch(T=u?Qr(u):window,t){case"focusin":(Ah(T)||T.contentEditable==="true")&&(Kr=T,Eu=u,aa=null);break;case"focusout":aa=Eu=Kr=null;break;case"mousedown":wu=!0;break;case"contextmenu":case"mouseup":case"dragend":wu=!1,Ph(f,n,h);break;case"selectionchange":if(l_)break;case"keydown":case"keyup":Ph(f,n,h)}var A;if(rf)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else $r?fx(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(dx&&n.locale!=="ko"&&($r||P!=="onCompositionStart"?P==="onCompositionEnd"&&$r&&(A=ux()):(Ii=h,ef="value"in Ii?Ii.value:Ii.textContent,$r=!0)),T=nl(u,P),0<T.length&&(P=new Mh(P,t,null,n,h),f.push({event:P,listeners:T}),A?P.data=A:(A=hx(n),A!==null&&(P.data=A)))),(A=Kv?Zv(t,n):Qv(t,n))&&(u=nl(u,"onBeforeInput"),0<u.length&&(h=new Mh("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:u}),h.data=A))}bx(f,e)})}function Sa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function nl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=pa(t,n),s!=null&&i.unshift(Sa(t,s,r)),s=pa(t,e),s!=null&&i.push(Sa(t,s,r))),t=t.return}return i}function Lr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Ih(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=pa(n,s),c!=null&&a.unshift(Sa(n,c,o))):r||(c=pa(n,s),c!=null&&a.push(Sa(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var f_=/\r\n?/g,h_=/\u0000|\uFFFD/g;function Uh(t){return(typeof t=="string"?t:""+t).replace(f_,`
`).replace(h_,"")}function Ja(t,e,n){if(e=Uh(e),Uh(t)!==e&&n)throw Error(ie(425))}function il(){}var bu=null,Au=null;function Tu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Cu=typeof setTimeout=="function"?setTimeout:void 0,p_=typeof clearTimeout=="function"?clearTimeout:void 0,Fh=typeof Promise=="function"?Promise:void 0,m_=typeof queueMicrotask=="function"?queueMicrotask:typeof Fh<"u"?function(t){return Fh.resolve(null).then(t).catch(x_)}:Cu;function x_(t){setTimeout(function(){throw t})}function pc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),ga(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);ga(e)}function Oi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Bh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ps=Math.random().toString(36).slice(2),Yn="__reactFiber$"+Ps,Ma="__reactProps$"+Ps,xi="__reactContainer$"+Ps,Ru="__reactEvents$"+Ps,g_="__reactListeners$"+Ps,v_="__reactHandles$"+Ps;function hr(t){var e=t[Yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xi]||n[Yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Bh(t);t!==null;){if(n=t[Yn])return n;t=Bh(t)}return e}t=n,n=t.parentNode}return null}function Ua(t){return t=t[Yn]||t[xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Qr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Ll(t){return t[Ma]||null}var Nu=[],Jr=-1;function Zi(t){return{current:t}}function ct(t){0>Jr||(t.current=Nu[Jr],Nu[Jr]=null,Jr--)}function st(t,e){Jr++,Nu[Jr]=t.current,t.current=e}var qi={},Ht=Zi(qi),tn=Zi(!1),Sr=qi;function xs(t,e){var n=t.type.contextTypes;if(!n)return qi;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function nn(t){return t=t.childContextTypes,t!=null}function rl(){ct(tn),ct(Ht)}function kh(t,e,n){if(Ht.current!==qi)throw Error(ie(168));st(Ht,e),st(tn,n)}function Tx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,nv(t)||"Unknown",r));return xt({},n,i)}function sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qi,Sr=Ht.current,st(Ht,t),st(tn,tn.current),!0}function Oh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Tx(t,e,Sr),i.__reactInternalMemoizedMergedChildContext=t,ct(tn),ct(Ht),st(Ht,t)):ct(tn),st(tn,n)}var li=null,Dl=!1,mc=!1;function Cx(t){li===null?li=[t]:li.push(t)}function __(t){Dl=!0,Cx(t)}function Qi(){if(!mc&&li!==null){mc=!0;var t=0,e=nt;try{var n=li;for(nt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}li=null,Dl=!1}catch(r){throw li!==null&&(li=li.slice(t+1)),Jm(Kd,Qi),r}finally{nt=e,mc=!1}}return null}var es=[],ts=0,al=null,ol=0,Mn=[],En=0,Mr=null,ci=1,ui="";function or(t,e){es[ts++]=ol,es[ts++]=al,al=t,ol=e}function Rx(t,e,n){Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Mr,Mr=t;var i=ci;t=ui;var r=32-jn(i)-1;i&=~(1<<r),n+=1;var s=32-jn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ci=1<<32-jn(e)+r|n<<r|i,ui=s+t}else ci=1<<s|n<<r|i,ui=t}function af(t){t.return!==null&&(or(t,1),Rx(t,1,0))}function of(t){for(;t===al;)al=es[--ts],es[ts]=null,ol=es[--ts],es[ts]=null;for(;t===Mr;)Mr=Mn[--En],Mn[En]=null,ui=Mn[--En],Mn[En]=null,ci=Mn[--En],Mn[En]=null}var xn=null,mn=null,dt=!1,Bn=null;function Nx(t,e){var n=bn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xn=t,mn=Oi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Mr!==null?{id:ci,overflow:ui}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=bn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xn=t,mn=null,!0):!1;default:return!1}}function Pu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Lu(t){if(dt){var e=mn;if(e){var n=e;if(!zh(t,e)){if(Pu(t))throw Error(ie(418));e=Oi(n.nextSibling);var i=xn;e&&zh(t,e)?Nx(i,n):(t.flags=t.flags&-4097|2,dt=!1,xn=t)}}else{if(Pu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,dt=!1,xn=t}}}function jh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xn=t}function eo(t){if(t!==xn)return!1;if(!dt)return jh(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Tu(t.type,t.memoizedProps)),e&&(e=mn)){if(Pu(t))throw Px(),Error(ie(418));for(;e;)Nx(t,e),e=Oi(e.nextSibling)}if(jh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Oi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=xn?Oi(t.stateNode.nextSibling):null;return!0}function Px(){for(var t=mn;t;)t=Oi(t.nextSibling)}function gs(){mn=xn=null,dt=!1}function lf(t){Bn===null?Bn=[t]:Bn.push(t)}var y_=yi.ReactCurrentBatchConfig;function zs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function to(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Hh(t){var e=t._init;return e(t._payload)}function Lx(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Gi(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function o(d,v,_,M){return v===null||v.tag!==6?(v=Mc(_,d.mode,M),v.return=d,v):(v=r(v,_),v.return=d,v)}function c(d,v,_,M){var N=_.type;return N===Yr?h(d,v,_.props.children,M,_.key):v!==null&&(v.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ri&&Hh(N)===v.type)?(M=r(v,_.props),M.ref=zs(d,v,_),M.return=d,M):(M=jo(_.type,_.key,_.props,null,d.mode,M),M.ref=zs(d,v,_),M.return=d,M)}function u(d,v,_,M){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=Ec(_,d.mode,M),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function h(d,v,_,M,N){return v===null||v.tag!==7?(v=_r(_,d.mode,M,N),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Mc(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=jo(v.type,v.key,v.props,null,d.mode,_),_.ref=zs(d,null,v),_.return=d,_;case qr:return v=Ec(v,d.mode,_),v.return=d,v;case Ri:var M=v._init;return f(d,M(v._payload),_)}if(Qs(v)||Us(v))return v=_r(v,d.mode,_,null),v.return=d,v;to(d,v)}return null}function p(d,v,_,M){var N=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return N!==null?null:o(d,v,""+_,M);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===N?c(d,v,_,M):null;case qr:return _.key===N?u(d,v,_,M):null;case Ri:return N=_._init,p(d,v,N(_._payload),M)}if(Qs(_)||Us(_))return N!==null?null:h(d,v,_,M,null);to(d,_)}return null}function m(d,v,_,M,N){if(typeof M=="string"&&M!==""||typeof M=="number")return d=d.get(_)||null,o(v,d,""+M,N);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case Va:return d=d.get(M.key===null?_:M.key)||null,c(v,d,M,N);case qr:return d=d.get(M.key===null?_:M.key)||null,u(v,d,M,N);case Ri:var T=M._init;return m(d,v,_,T(M._payload),N)}if(Qs(M)||Us(M))return d=d.get(_)||null,h(v,d,M,N,null);to(v,M)}return null}function g(d,v,_,M){for(var N=null,T=null,A=v,P=v=0,V=null;A!==null&&P<_.length;P++){A.index>P?(V=A,A=null):V=A.sibling;var y=p(d,A,_[P],M);if(y===null){A===null&&(A=V);break}t&&A&&y.alternate===null&&e(d,A),v=s(y,v,P),T===null?N=y:T.sibling=y,T=y,A=V}if(P===_.length)return n(d,A),dt&&or(d,P),N;if(A===null){for(;P<_.length;P++)A=f(d,_[P],M),A!==null&&(v=s(A,v,P),T===null?N=A:T.sibling=A,T=A);return dt&&or(d,P),N}for(A=i(d,A);P<_.length;P++)V=m(A,d,P,_[P],M),V!==null&&(t&&V.alternate!==null&&A.delete(V.key===null?P:V.key),v=s(V,v,P),T===null?N=V:T.sibling=V,T=V);return t&&A.forEach(function(w){return e(d,w)}),dt&&or(d,P),N}function S(d,v,_,M){var N=Us(_);if(typeof N!="function")throw Error(ie(150));if(_=N.call(_),_==null)throw Error(ie(151));for(var T=N=null,A=v,P=v=0,V=null,y=_.next();A!==null&&!y.done;P++,y=_.next()){A.index>P?(V=A,A=null):V=A.sibling;var w=p(d,A,y.value,M);if(w===null){A===null&&(A=V);break}t&&A&&w.alternate===null&&e(d,A),v=s(w,v,P),T===null?N=w:T.sibling=w,T=w,A=V}if(y.done)return n(d,A),dt&&or(d,P),N;if(A===null){for(;!y.done;P++,y=_.next())y=f(d,y.value,M),y!==null&&(v=s(y,v,P),T===null?N=y:T.sibling=y,T=y);return dt&&or(d,P),N}for(A=i(d,A);!y.done;P++,y=_.next())y=m(A,d,P,y.value,M),y!==null&&(t&&y.alternate!==null&&A.delete(y.key===null?P:y.key),v=s(y,v,P),T===null?N=y:T.sibling=y,T=y);return t&&A.forEach(function(F){return e(d,F)}),dt&&or(d,P),N}function x(d,v,_,M){if(typeof _=="object"&&_!==null&&_.type===Yr&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var N=_.key,T=v;T!==null;){if(T.key===N){if(N=_.type,N===Yr){if(T.tag===7){n(d,T.sibling),v=r(T,_.props.children),v.return=d,d=v;break e}}else if(T.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ri&&Hh(N)===T.type){n(d,T.sibling),v=r(T,_.props),v.ref=zs(d,T,_),v.return=d,d=v;break e}n(d,T);break}else e(d,T);T=T.sibling}_.type===Yr?(v=_r(_.props.children,d.mode,M,_.key),v.return=d,d=v):(M=jo(_.type,_.key,_.props,null,d.mode,M),M.ref=zs(d,v,_),M.return=d,d=M)}return a(d);case qr:e:{for(T=_.key;v!==null;){if(v.key===T)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=Ec(_,d.mode,M),v.return=d,d=v}return a(d);case Ri:return T=_._init,x(d,v,T(_._payload),M)}if(Qs(_))return g(d,v,_,M);if(Us(_))return S(d,v,_,M);to(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=Mc(_,d.mode,M),v.return=d,d=v),a(d)):n(d,v)}return x}var vs=Lx(!0),Dx=Lx(!1),ll=Zi(null),cl=null,ns=null,cf=null;function uf(){cf=ns=cl=null}function df(t){var e=ll.current;ct(ll),t._currentValue=e}function Du(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function us(t,e){cl=t,cf=ns=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(en=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(cf!==t)if(t={context:t,memoizedValue:e,next:null},ns===null){if(cl===null)throw Error(ie(308));ns=t,cl.dependencies={lanes:0,firstContext:t}}else ns=ns.next=t;return e}var pr=null;function ff(t){pr===null?pr=[t]:pr.push(t)}function Ix(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ff(e)):(n.next=r.next,r.next=n),e.interleaved=n,gi(t,i)}function gi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ni=!1;function hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ux(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function hi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,gi(t,n)}return r=i.interleaved,r===null?(e.next=e,ff(i)):(e.next=r.next,r.next=e),i.interleaved=e,gi(t,n)}function Uo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}function Gh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ul(t,e,n,i){var r=t.updateQueue;Ni=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var f=r.baseState;a=0,h=u=c=null,o=s;do{var p=o.lane,m=o.eventTime;if((i&p)===p){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var g=t,S=o;switch(p=e,m=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(m,f,p);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,p=typeof g=="function"?g.call(m,f,p):g,p==null)break e;f=xt({},f,p);break e;case 2:Ni=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,p=r.effects,p===null?r.effects=[o]:p.push(o))}else m={eventTime:m,lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=f):h=h.next=m,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;p=o,o=p.next,p.next=null,r.lastBaseUpdate=p,r.shared.pending=null}}while(!0);if(h===null&&(c=f),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);wr|=a,t.lanes=a,t.memoizedState=f}}function Vh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Fa={},Zn=Zi(Fa),Ea=Zi(Fa),wa=Zi(Fa);function mr(t){if(t===Fa)throw Error(ie(174));return t}function pf(t,e){switch(st(wa,e),st(Ea,t),st(Zn,Fa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:hu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=hu(e,t)}ct(Zn),st(Zn,e)}function _s(){ct(Zn),ct(Ea),ct(wa)}function Fx(t){mr(wa.current);var e=mr(Zn.current),n=hu(e,t.type);e!==n&&(st(Ea,t),st(Zn,n))}function mf(t){Ea.current===t&&(ct(Zn),ct(Ea))}var ht=Zi(0);function dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function xf(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Fo=yi.ReactCurrentDispatcher,gc=yi.ReactCurrentBatchConfig,Er=0,pt=null,bt=null,Nt=null,fl=!1,oa=!1,ba=0,S_=0;function Bt(){throw Error(ie(321))}function gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gn(t[n],e[n]))return!1;return!0}function vf(t,e,n,i,r,s){if(Er=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Fo.current=t===null||t.memoizedState===null?b_:A_,t=n(i,r),oa){s=0;do{if(oa=!1,ba=0,25<=s)throw Error(ie(301));s+=1,Nt=bt=null,e.updateQueue=null,Fo.current=T_,t=n(i,r)}while(oa)}if(Fo.current=hl,e=bt!==null&&bt.next!==null,Er=0,Nt=bt=pt=null,fl=!1,e)throw Error(ie(300));return t}function _f(){var t=ba!==0;return ba=0,t}function Wn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Rn(){if(bt===null){var t=pt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=Nt===null?pt.memoizedState:Nt.next;if(e!==null)Nt=e,bt=t;else{if(t===null)throw Error(ie(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Nt===null?pt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function Aa(t,e){return typeof e=="function"?e(t):e}function vc(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Er&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=f,a=i):c=c.next=f,pt.lanes|=h,wr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Gn(i,e.memoizedState)||(en=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,pt.lanes|=s,wr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _c(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Gn(s,e.memoizedState)||(en=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Bx(){}function kx(t,e){var n=pt,i=Rn(),r=e(),s=!Gn(i.memoizedState,r);if(s&&(i.memoizedState=r,en=!0),i=i.queue,yf(jx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Nt!==null&&Nt.memoizedState.tag&1){if(n.flags|=2048,Ta(9,zx.bind(null,n,i,r,e),void 0,null),Pt===null)throw Error(ie(349));Er&30||Ox(n,e,r)}return r}function Ox(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zx(t,e,n,i){e.value=n,e.getSnapshot=i,Hx(e)&&Gx(t)}function jx(t,e,n){return n(function(){Hx(e)&&Gx(t)})}function Hx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gn(t,n)}catch{return!0}}function Gx(t){var e=gi(t,1);e!==null&&Hn(e,t,1,-1)}function Wh(t){var e=Wn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Aa,lastRenderedState:t},e.queue=t,t=t.dispatch=w_.bind(null,pt,t),[e.memoizedState,t]}function Ta(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Vx(){return Rn().memoizedState}function Bo(t,e,n,i){var r=Wn();pt.flags|=t,r.memoizedState=Ta(1|e,n,void 0,i===void 0?null:i)}function Il(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var a=bt.memoizedState;if(s=a.destroy,i!==null&&gf(i,a.deps)){r.memoizedState=Ta(e,n,s,i);return}}pt.flags|=t,r.memoizedState=Ta(1|e,n,s,i)}function Xh(t,e){return Bo(8390656,8,t,e)}function yf(t,e){return Il(2048,8,t,e)}function Wx(t,e){return Il(4,2,t,e)}function Xx(t,e){return Il(4,4,t,e)}function qx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Yx(t,e,n){return n=n!=null?n.concat([t]):null,Il(4,4,qx.bind(null,e,t),n)}function Sf(){}function $x(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Kx(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&gf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Zx(t,e,n){return Er&21?(Gn(n,e)||(n=nx(),pt.lanes|=n,wr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,en=!0),t.memoizedState=n)}function M_(t,e){var n=nt;nt=n!==0&&4>n?n:4,t(!0);var i=gc.transition;gc.transition={};try{t(!1),e()}finally{nt=n,gc.transition=i}}function Qx(){return Rn().memoizedState}function E_(t,e,n){var i=Hi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Jx(t))eg(e,n);else if(n=Ix(t,e,n,i),n!==null){var r=Xt();Hn(n,t,i,r),tg(n,e,i)}}function w_(t,e,n){var i=Hi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Jx(t))eg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Gn(o,a)){var c=e.interleaved;c===null?(r.next=r,ff(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Ix(t,e,r,i),n!==null&&(r=Xt(),Hn(n,t,i,r),tg(n,e,i))}}function Jx(t){var e=t.alternate;return t===pt||e!==null&&e===pt}function eg(t,e){oa=fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function tg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Zd(t,n)}}var hl={readContext:Cn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},b_={readContext:Cn,useCallback:function(t,e){return Wn().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:Xh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Bo(4194308,4,qx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Bo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Bo(4,2,t,e)},useMemo:function(t,e){var n=Wn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Wn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=E_.bind(null,pt,t),[i.memoizedState,t]},useRef:function(t){var e=Wn();return t={current:t},e.memoizedState=t},useState:Wh,useDebugValue:Sf,useDeferredValue:function(t){return Wn().memoizedState=t},useTransition:function(){var t=Wh(!1),e=t[0];return t=M_.bind(null,t[1]),Wn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=pt,r=Wn();if(dt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Pt===null)throw Error(ie(349));Er&30||Ox(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Xh(jx.bind(null,i,s,t),[t]),i.flags|=2048,Ta(9,zx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Wn(),e=Pt.identifierPrefix;if(dt){var n=ui,i=ci;n=(i&~(1<<32-jn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ba++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=S_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},A_={readContext:Cn,useCallback:$x,useContext:Cn,useEffect:yf,useImperativeHandle:Yx,useInsertionEffect:Wx,useLayoutEffect:Xx,useMemo:Kx,useReducer:vc,useRef:Vx,useState:function(){return vc(Aa)},useDebugValue:Sf,useDeferredValue:function(t){var e=Rn();return Zx(e,bt.memoizedState,t)},useTransition:function(){var t=vc(Aa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:kx,useId:Qx,unstable_isNewReconciler:!1},T_={readContext:Cn,useCallback:$x,useContext:Cn,useEffect:yf,useImperativeHandle:Yx,useInsertionEffect:Wx,useLayoutEffect:Xx,useMemo:Kx,useReducer:_c,useRef:Vx,useState:function(){return _c(Aa)},useDebugValue:Sf,useDeferredValue:function(t){var e=Rn();return bt===null?e.memoizedState=t:Zx(e,bt.memoizedState,t)},useTransition:function(){var t=_c(Aa)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:Bx,useSyncExternalStore:kx,useId:Qx,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=xt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Iu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:xt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ul={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=hi(i,r);s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Uo(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Xt(),r=Hi(t),s=hi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zi(t,s,r),e!==null&&(Hn(e,t,r,i),Uo(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Xt(),i=Hi(t),r=hi(n,i);r.tag=2,e!=null&&(r.callback=e),e=zi(t,r,i),e!==null&&(Hn(e,t,i,n),Uo(e,t,i))}};function qh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!_a(n,i)||!_a(r,s):!0}function ng(t,e,n){var i=!1,r=qi,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=nn(e)?Sr:Ht.current,i=e.contextTypes,s=(i=i!=null)?xs(t,r):qi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ul,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ul.enqueueReplaceState(e,e.state,null)}function Uu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},hf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=nn(e)?Sr:Ht.current,r.context=xs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Iu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ul.enqueueReplaceState(r,r.state,null),ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ys(t,e){try{var n="",i=e;do n+=tv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Fu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var C_=typeof WeakMap=="function"?WeakMap:Map;function ig(t,e,n){n=hi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){ml||(ml=!0,Xu=i),Fu(t,e)},n}function rg(t,e,n){n=hi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Fu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Fu(t,e),typeof i!="function"&&(ji===null?ji=new Set([this]):ji.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function $h(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new C_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=H_.bind(null,t,e,n),e.then(t,t))}function Kh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Zh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=hi(-1,1),e.tag=2,zi(n,e,1))),n.lanes|=1),t)}var R_=yi.ReactCurrentOwner,en=!1;function Vt(t,e,n,i){e.child=t===null?Dx(e,null,n,i):vs(e,t.child,n,i)}function Qh(t,e,n,i,r){n=n.render;var s=e.ref;return us(e,r),i=vf(t,e,n,i,s,r),n=_f(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(dt&&n&&af(e),e.flags|=1,Vt(t,e,i,r),e.child)}function Jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Rf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,sg(t,e,s,i,r)):(t=jo(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:_a,n(a,i)&&t.ref===e.ref)return vi(t,e,r)}return e.flags|=1,t=Gi(s,i),t.ref=e.ref,t.return=e,e.child=t}function sg(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(_a(s,i)&&t.ref===e.ref)if(en=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(en=!0);else return e.lanes=t.lanes,vi(t,e,r)}return Bu(t,e,n,i,r)}function ag(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(rs,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(rs,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(rs,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(rs,hn),hn|=i;return Vt(t,e,r,n),e.child}function og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bu(t,e,n,i,r){var s=nn(n)?Sr:Ht.current;return s=xs(e,s),us(e,r),n=vf(t,e,n,i,s,r),i=_f(),t!==null&&!en?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,vi(t,e,r)):(dt&&i&&af(e),e.flags|=1,Vt(t,e,n,r),e.child)}function ep(t,e,n,i,r){if(nn(n)){var s=!0;sl(e)}else s=!1;if(us(e,r),e.stateNode===null)ko(t,e),ng(e,n,i),Uu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=nn(n)?Sr:Ht.current,u=xs(e,u));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&Yh(e,a,i,u),Ni=!1;var p=e.memoizedState;a.state=p,ul(e,i,a,r),c=e.memoizedState,o!==i||p!==c||tn.current||Ni?(typeof h=="function"&&(Iu(e,n,h,i),c=e.memoizedState),(o=Ni||qh(e,n,o,i,p,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Ux(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:Un(e.type,o),a.props=u,f=e.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=Cn(c):(c=nn(n)?Sr:Ht.current,c=xs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==f||p!==c)&&Yh(e,a,i,c),Ni=!1,p=e.memoizedState,a.state=p,ul(e,i,a,r);var g=e.memoizedState;o!==f||p!==g||tn.current||Ni?(typeof m=="function"&&(Iu(e,n,m,i),g=e.memoizedState),(u=Ni||qh(e,n,u,i,p,g,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return ku(t,e,n,i,s,r)}function ku(t,e,n,i,r,s){og(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Oh(e,n,!1),vi(t,e,s);i=e.stateNode,R_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=vs(e,t.child,null,s),e.child=vs(e,null,o,s)):Vt(t,e,o,s),e.memoizedState=i.state,r&&Oh(e,n,!0),e.child}function lg(t){var e=t.stateNode;e.pendingContext?kh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&kh(t,e.context,!1),pf(t,e.containerInfo)}function tp(t,e,n,i,r){return gs(),lf(r),e.flags|=256,Vt(t,e,n,i),e.child}var Ou={dehydrated:null,treeContext:null,retryLane:0};function zu(t){return{baseLanes:t,cachePool:null,transitions:null}}function cg(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Lu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=kl(a,i,0,null),t=_r(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=zu(n),e.memoizedState=Ou,t):Mf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return N_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=Gi(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=Gi(o,s):(s=_r(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?zu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Ou,i}return s=t.child,t=s.sibling,i=Gi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Mf(t,e){return e=kl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function no(t,e,n,i){return i!==null&&lf(i),vs(e,t.child,null,n),t=Mf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function N_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=yc(Error(ie(422))),no(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=kl({mode:"visible",children:i.children},r,0,null),s=_r(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&vs(e,t.child,null,a),e.child.memoizedState=zu(a),e.memoizedState=Ou,s);if(!(e.mode&1))return no(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ie(419)),i=yc(s,i,void 0),no(t,e,a,i)}if(o=(a&t.childLanes)!==0,en||o){if(i=Pt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,gi(t,r),Hn(i,t,r,-1))}return Cf(),i=yc(Error(ie(421))),no(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=G_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Oi(r.nextSibling),xn=e,dt=!0,Bn=null,t!==null&&(Mn[En++]=ci,Mn[En++]=ui,Mn[En++]=Mr,ci=t.id,ui=t.overflow,Mr=e),e=Mf(e,i.children),e.flags|=4096,e)}function np(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Du(t.return,e,n)}function Sc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ug(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Vt(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&np(t,n,e);else if(t.tag===19)np(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&dl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Sc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&dl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Sc(e,!0,n,null,s);break;case"together":Sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ko(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function vi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),wr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Gi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Gi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function P_(t,e,n){switch(e.tag){case 3:lg(e),gs();break;case 5:Fx(e);break;case 1:nn(e.type)&&sl(e);break;case 4:pf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?cg(t,e,n):(st(ht,ht.current&1),t=vi(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ug(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,ag(t,e,n)}return vi(t,e,n)}var dg,ju,fg,hg;dg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ju=function(){};fg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,mr(Zn.current);var s=null;switch(n){case"input":r=cu(t,r),i=cu(t,i),s=[];break;case"select":r=xt({},r,{value:void 0}),i=xt({},i,{value:void 0}),s=[];break;case"textarea":r=fu(t,r),i=fu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=il)}pu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(fa.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(fa.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&ot("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};hg=function(t,e,n,i){n!==i&&(e.flags|=4)};function js(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function L_(t,e,n){var i=e.pendingProps;switch(of(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return nn(e.type)&&rl(),kt(e),null;case 3:return i=e.stateNode,_s(),ct(tn),ct(Ht),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(eo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Bn!==null&&($u(Bn),Bn=null))),ju(t,e),kt(e),null;case 5:mf(e);var r=mr(wa.current);if(n=e.type,t!==null&&e.stateNode!=null)fg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return kt(e),null}if(t=mr(Zn.current),eo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Yn]=e,i[Ma]=s,t=(e.mode&1)!==0,n){case"dialog":ot("cancel",i),ot("close",i);break;case"iframe":case"object":case"embed":ot("load",i);break;case"video":case"audio":for(r=0;r<ea.length;r++)ot(ea[r],i);break;case"source":ot("error",i);break;case"img":case"image":case"link":ot("error",i),ot("load",i);break;case"details":ot("toggle",i);break;case"input":dh(i,s),ot("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ot("invalid",i);break;case"textarea":hh(i,s),ot("invalid",i)}pu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&Ja(i.textContent,o,t),r=["children",""+o]):fa.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ot("scroll",i)}switch(n){case"input":Wa(i),fh(i,s,!0);break;case"textarea":Wa(i),ph(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=il)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=jm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[Yn]=e,t[Ma]=i,dg(t,e,!1,!1),e.stateNode=t;e:{switch(a=mu(n,i),n){case"dialog":ot("cancel",t),ot("close",t),r=i;break;case"iframe":case"object":case"embed":ot("load",t),r=i;break;case"video":case"audio":for(r=0;r<ea.length;r++)ot(ea[r],t);r=i;break;case"source":ot("error",t),r=i;break;case"img":case"image":case"link":ot("error",t),ot("load",t),r=i;break;case"details":ot("toggle",t),r=i;break;case"input":dh(t,i),r=cu(t,i),ot("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=xt({},i,{value:void 0}),ot("invalid",t);break;case"textarea":hh(t,i),r=fu(t,i),ot("invalid",t);break;default:r=i}pu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?Vm(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Hm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&ha(t,c):typeof c=="number"&&ha(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(fa.hasOwnProperty(s)?c!=null&&s==="onScroll"&&ot("scroll",t):c!=null&&Wd(t,s,c,a))}switch(n){case"input":Wa(t),fh(t,i,!1);break;case"textarea":Wa(t),ph(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Xi(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?as(t,!!i.multiple,s,!1):i.defaultValue!=null&&as(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=il)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)hg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=mr(wa.current),mr(Zn.current),eo(e)){if(i=e.stateNode,n=e.memoizedProps,i[Yn]=e,(s=i.nodeValue!==n)&&(t=xn,t!==null))switch(t.tag){case 3:Ja(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ja(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Yn]=e,e.stateNode=i}return kt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))Px(),gs(),e.flags|=98560,s=!1;else if(s=eo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[Yn]=e}else gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Bn!==null&&($u(Bn),Bn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?At===0&&(At=3):Cf())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return _s(),ju(t,e),t===null&&ya(e.stateNode.containerInfo),kt(e),null;case 10:return df(e.type._context),kt(e),null;case 17:return nn(e.type)&&rl(),kt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)js(s,!1);else{if(At!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=dl(t),a!==null){for(e.flags|=128,js(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&St()>Ss&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304)}else{if(!i)if(t=dl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),js(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return kt(e),null}else 2*St()-s.renderingStartTime>Ss&&n!==1073741824&&(e.flags|=128,i=!0,js(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Tf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function D_(t,e){switch(of(e),e.tag){case 1:return nn(e.type)&&rl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _s(),ct(tn),ct(Ht),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return mf(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return _s(),null;case 10:return df(e.type._context),null;case 22:case 23:return Tf(),null;case 24:return null;default:return null}}var io=!1,jt=!1,I_=typeof WeakSet=="function"?WeakSet:Set,xe=null;function is(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function Hu(t,e,n){try{n()}catch(i){vt(t,e,i)}}var ip=!1;function U_(t,e){if(bu=el,t=vx(),sf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,f=t,p=null;t:for(;;){for(var m;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(c=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===t)break t;if(p===n&&++u===r&&(o=a),p===s&&++h===i&&(c=a),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},el=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,x=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:Un(e.type,S),x);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(M){vt(e,e.return,M)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=ip,ip=!1,g}function la(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Hu(e,n,s)}r=r.next}while(r!==i)}}function Fl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Gu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function pg(t){var e=t.alternate;e!==null&&(t.alternate=null,pg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Yn],delete e[Ma],delete e[Ru],delete e[g_],delete e[v_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function mg(t){return t.tag===5||t.tag===3||t.tag===4}function rp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||mg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=il));else if(i!==4&&(t=t.child,t!==null))for(Vu(t,e,n),t=t.sibling;t!==null;)Vu(t,e,n),t=t.sibling}function Wu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Wu(t,e,n),t=t.sibling;t!==null;)Wu(t,e,n),t=t.sibling}var Dt=null,Fn=!1;function Mi(t,e,n){for(n=n.child;n!==null;)xg(t,e,n),n=n.sibling}function xg(t,e,n){if(Kn&&typeof Kn.onCommitFiberUnmount=="function")try{Kn.onCommitFiberUnmount(Cl,n)}catch{}switch(n.tag){case 5:jt||is(n,e);case 6:var i=Dt,r=Fn;Dt=null,Mi(t,e,n),Dt=i,Fn=r,Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Dt.removeChild(n.stateNode));break;case 18:Dt!==null&&(Fn?(t=Dt,n=n.stateNode,t.nodeType===8?pc(t.parentNode,n):t.nodeType===1&&pc(t,n),ga(t)):pc(Dt,n.stateNode));break;case 4:i=Dt,r=Fn,Dt=n.stateNode.containerInfo,Fn=!0,Mi(t,e,n),Dt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Hu(n,e,a),r=r.next}while(r!==i)}Mi(t,e,n);break;case 1:if(!jt&&(is(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){vt(n,e,o)}Mi(t,e,n);break;case 21:Mi(t,e,n);break;case 22:n.mode&1?(jt=(i=jt)||n.memoizedState!==null,Mi(t,e,n),jt=i):Mi(t,e,n);break;default:Mi(t,e,n)}}function sp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new I_),e.forEach(function(i){var r=V_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Pn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Dt=o.stateNode,Fn=!1;break e;case 3:Dt=o.stateNode.containerInfo,Fn=!0;break e;case 4:Dt=o.stateNode.containerInfo,Fn=!0;break e}o=o.return}if(Dt===null)throw Error(ie(160));xg(s,a,r),Dt=null,Fn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)gg(e,t),e=e.sibling}function gg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pn(e,t),Vn(t),i&4){try{la(3,t,t.return),Fl(3,t)}catch(S){vt(t,t.return,S)}try{la(5,t,t.return)}catch(S){vt(t,t.return,S)}}break;case 1:Pn(e,t),Vn(t),i&512&&n!==null&&is(n,n.return);break;case 5:if(Pn(e,t),Vn(t),i&512&&n!==null&&is(n,n.return),t.flags&32){var r=t.stateNode;try{ha(r,"")}catch(S){vt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&Om(r,s),mu(o,a);var u=mu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],f=c[a+1];h==="style"?Vm(r,f):h==="dangerouslySetInnerHTML"?Hm(r,f):h==="children"?ha(r,f):Wd(r,h,f,u)}switch(o){case"input":uu(r,s);break;case"textarea":zm(r,s);break;case"select":var p=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?as(r,!!s.multiple,m,!1):p!==!!s.multiple&&(s.defaultValue!=null?as(r,!!s.multiple,s.defaultValue,!0):as(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ma]=s}catch(S){vt(t,t.return,S)}}break;case 6:if(Pn(e,t),Vn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){vt(t,t.return,S)}}break;case 3:if(Pn(e,t),Vn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{ga(e.containerInfo)}catch(S){vt(t,t.return,S)}break;case 4:Pn(e,t),Vn(t);break;case 13:Pn(e,t),Vn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=St())),i&4&&sp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(jt=(u=jt)||h,Pn(e,t),jt=u):Pn(e,t),Vn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(xe=t,h=t.child;h!==null;){for(f=xe=h;xe!==null;){switch(p=xe,m=p.child,p.tag){case 0:case 11:case 14:case 15:la(4,p,p.return);break;case 1:is(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){i=p,n=p.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){vt(i,n,S)}}break;case 5:is(p,p.return);break;case 22:if(p.memoizedState!==null){op(f);continue}}m!==null?(m.return=p,xe=m):op(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Gm("display",a))}catch(S){vt(t,t.return,S)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(S){vt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Pn(e,t),Vn(t),i&4&&sp(t);break;case 21:break;default:Pn(e,t),Vn(t)}}function Vn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(mg(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ha(r,""),i.flags&=-33);var s=rp(t);Wu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=rp(t);Vu(t,o,a);break;default:throw Error(ie(161))}}catch(c){vt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function F_(t,e,n){xe=t,vg(t)}function vg(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||io;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||jt;o=io;var u=jt;if(io=a,(jt=c)&&!u)for(xe=r;xe!==null;)a=xe,c=a.child,a.tag===22&&a.memoizedState!==null?lp(r):c!==null?(c.return=a,xe=c):lp(r);for(;s!==null;)xe=s,vg(s),s=s.sibling;xe=r,io=o,jt=u}ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,xe=s):ap(t)}}function ap(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:jt||Fl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&ga(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}jt||e.flags&512&&Gu(e)}catch(p){vt(e,e.return,p)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function op(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function lp(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Fl(4,e)}catch(c){vt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){vt(e,r,c)}}var s=e.return;try{Gu(e)}catch(c){vt(e,s,c)}break;case 5:var a=e.return;try{Gu(e)}catch(c){vt(e,a,c)}}}catch(c){vt(e,e.return,c)}if(e===t){xe=null;break}var o=e.sibling;if(o!==null){o.return=e.return,xe=o;break}xe=e.return}}var B_=Math.ceil,pl=yi.ReactCurrentDispatcher,Ef=yi.ReactCurrentOwner,Tn=yi.ReactCurrentBatchConfig,$e=0,Pt=null,wt=null,It=0,hn=0,rs=Zi(0),At=0,Ca=null,wr=0,Bl=0,wf=0,ca=null,Qt=null,bf=0,Ss=1/0,oi=null,ml=!1,Xu=null,ji=null,ro=!1,Ui=null,xl=0,ua=0,qu=null,Oo=-1,zo=0;function Xt(){return $e&6?St():Oo!==-1?Oo:Oo=St()}function Hi(t){return t.mode&1?$e&2&&It!==0?It&-It:y_.transition!==null?(zo===0&&(zo=nx()),zo):(t=nt,t!==0||(t=window.event,t=t===void 0?16:cx(t.type)),t):1}function Hn(t,e,n,i){if(50<ua)throw ua=0,qu=null,Error(ie(185));Da(t,n,i),(!($e&2)||t!==Pt)&&(t===Pt&&(!($e&2)&&(Bl|=n),At===4&&Li(t,It)),rn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ss=St()+500,Dl&&Qi()))}function rn(t,e){var n=t.callbackNode;yv(t,e);var i=Jo(t,t===Pt?It:0);if(i===0)n!==null&&gh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&gh(n),e===1)t.tag===0?__(cp.bind(null,t)):Cx(cp.bind(null,t)),m_(function(){!($e&6)&&Qi()}),n=null;else{switch(ix(i)){case 1:n=Kd;break;case 4:n=ex;break;case 16:n=Qo;break;case 536870912:n=tx;break;default:n=Qo}n=Ag(n,_g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function _g(t,e){if(Oo=-1,zo=0,$e&6)throw Error(ie(327));var n=t.callbackNode;if(ds()&&t.callbackNode!==n)return null;var i=Jo(t,t===Pt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=gl(t,i);else{e=i;var r=$e;$e|=2;var s=Sg();(Pt!==t||It!==e)&&(oi=null,Ss=St()+500,vr(t,e));do try{z_();break}catch(o){yg(t,o)}while(!0);uf(),pl.current=s,$e=r,wt!==null?e=0:(Pt=null,It=0,e=At)}if(e!==0){if(e===2&&(r=yu(t),r!==0&&(i=r,e=Yu(t,r))),e===1)throw n=Ca,vr(t,0),Li(t,i),rn(t,St()),n;if(e===6)Li(t,i);else{if(r=t.current.alternate,!(i&30)&&!k_(r)&&(e=gl(t,i),e===2&&(s=yu(t),s!==0&&(i=s,e=Yu(t,s))),e===1))throw n=Ca,vr(t,0),Li(t,i),rn(t,St()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:lr(t,Qt,oi);break;case 3:if(Li(t,i),(i&130023424)===i&&(e=bf+500-St(),10<e)){if(Jo(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Xt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Cu(lr.bind(null,t,Qt,oi),e);break}lr(t,Qt,oi);break;case 4:if(Li(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-jn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*B_(i/1960))-i,10<i){t.timeoutHandle=Cu(lr.bind(null,t,Qt,oi),i);break}lr(t,Qt,oi);break;case 5:lr(t,Qt,oi);break;default:throw Error(ie(329))}}}return rn(t,St()),t.callbackNode===n?_g.bind(null,t):null}function Yu(t,e){var n=ca;return t.current.memoizedState.isDehydrated&&(vr(t,e).flags|=256),t=gl(t,e),t!==2&&(e=Qt,Qt=n,e!==null&&$u(e)),t}function $u(t){Qt===null?Qt=t:Qt.push.apply(Qt,t)}function k_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Gn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Li(t,e){for(e&=~wf,e&=~Bl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-jn(e),i=1<<n;t[n]=-1,e&=~i}}function cp(t){if($e&6)throw Error(ie(327));ds();var e=Jo(t,0);if(!(e&1))return rn(t,St()),null;var n=gl(t,e);if(t.tag!==0&&n===2){var i=yu(t);i!==0&&(e=i,n=Yu(t,i))}if(n===1)throw n=Ca,vr(t,0),Li(t,e),rn(t,St()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,lr(t,Qt,oi),rn(t,St()),null}function Af(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ss=St()+500,Dl&&Qi())}}function br(t){Ui!==null&&Ui.tag===0&&!($e&6)&&ds();var e=$e;$e|=1;var n=Tn.transition,i=nt;try{if(Tn.transition=null,nt=1,t)return t()}finally{nt=i,Tn.transition=n,$e=e,!($e&6)&&Qi()}}function Tf(){hn=rs.current,ct(rs)}function vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,p_(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(of(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&rl();break;case 3:_s(),ct(tn),ct(Ht),xf();break;case 5:mf(i);break;case 4:_s();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:df(i.type._context);break;case 22:case 23:Tf()}n=n.return}if(Pt=t,wt=t=Gi(t.current,null),It=hn=e,At=0,Ca=null,wf=Bl=wr=0,Qt=ca=null,pr!==null){for(e=0;e<pr.length;e++)if(n=pr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}pr=null}return t}function yg(t,e){do{var n=wt;try{if(uf(),Fo.current=hl,fl){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}fl=!1}if(Er=0,Nt=bt=pt=null,oa=!1,ba=0,Ef.current=null,n===null||n.return===null){At=1,Ca=e,wt=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=It,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var p=h.alternate;p?(h.updateQueue=p.updateQueue,h.memoizedState=p.memoizedState,h.lanes=p.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=Kh(a);if(m!==null){m.flags&=-257,Zh(m,a,o,s,e),m.mode&1&&$h(s,u,e),e=m,c=u;var g=e.updateQueue;if(g===null){var S=new Set;S.add(c),e.updateQueue=S}else g.add(c);break e}else{if(!(e&1)){$h(s,u,e),Cf();break e}c=Error(ie(426))}}else if(dt&&o.mode&1){var x=Kh(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Zh(x,a,o,s,e),lf(ys(c,o));break e}}s=c=ys(c,o),At!==4&&(At=2),ca===null?ca=[s]:ca.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ig(s,c,e);Gh(s,d);break e;case 1:o=c;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(ji===null||!ji.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var M=rg(s,o,e);Gh(s,M);break e}}s=s.return}while(s!==null)}Eg(n)}catch(N){e=N,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function Sg(){var t=pl.current;return pl.current=hl,t===null?hl:t}function Cf(){(At===0||At===3||At===2)&&(At=4),Pt===null||!(wr&268435455)&&!(Bl&268435455)||Li(Pt,It)}function gl(t,e){var n=$e;$e|=2;var i=Sg();(Pt!==t||It!==e)&&(oi=null,vr(t,e));do try{O_();break}catch(r){yg(t,r)}while(!0);if(uf(),$e=n,pl.current=i,wt!==null)throw Error(ie(261));return Pt=null,It=0,At}function O_(){for(;wt!==null;)Mg(wt)}function z_(){for(;wt!==null&&!dv();)Mg(wt)}function Mg(t){var e=bg(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?Eg(t):wt=e,Ef.current=null}function Eg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=D_(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{At=6,wt=null;return}}else if(n=L_(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);At===0&&(At=5)}function lr(t,e,n){var i=nt,r=Tn.transition;try{Tn.transition=null,nt=1,j_(t,e,n,i)}finally{Tn.transition=r,nt=i}return null}function j_(t,e,n,i){do ds();while(Ui!==null);if($e&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Sv(t,s),t===Pt&&(wt=Pt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,Ag(Qo,function(){return ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Tn.transition,Tn.transition=null;var a=nt;nt=1;var o=$e;$e|=4,Ef.current=null,U_(t,n),gg(n,t),o_(Au),el=!!bu,Au=bu=null,t.current=n,F_(n),fv(),$e=o,nt=a,Tn.transition=s}else t.current=n;if(ro&&(ro=!1,Ui=t,xl=r),s=t.pendingLanes,s===0&&(ji=null),mv(n.stateNode),rn(t,St()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(ml)throw ml=!1,t=Xu,Xu=null,t;return xl&1&&t.tag!==0&&ds(),s=t.pendingLanes,s&1?t===qu?ua++:(ua=0,qu=t):ua=0,Qi(),null}function ds(){if(Ui!==null){var t=ix(xl),e=Tn.transition,n=nt;try{if(Tn.transition=null,nt=16>t?16:t,Ui===null)var i=!1;else{if(t=Ui,Ui=null,xl=0,$e&6)throw Error(ie(331));var r=$e;for($e|=4,xe=t.current;xe!==null;){var s=xe,a=s.child;if(xe.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(xe=u;xe!==null;){var h=xe;switch(h.tag){case 0:case 11:case 15:la(8,h,s)}var f=h.child;if(f!==null)f.return=h,xe=f;else for(;xe!==null;){h=xe;var p=h.sibling,m=h.return;if(pg(h),h===u){xe=null;break}if(p!==null){p.return=m,xe=p;break}xe=m}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var x=S.sibling;S.sibling=null,S=x}while(S!==null)}}xe=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,xe=a;else e:for(;xe!==null;){if(s=xe,s.flags&2048)switch(s.tag){case 0:case 11:case 15:la(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,xe=d;break e}xe=s.return}}var v=t.current;for(xe=v;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=v;xe!==null;){if(o=xe,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Fl(9,o)}}catch(N){vt(o,o.return,N)}if(o===a){xe=null;break e}var M=o.sibling;if(M!==null){M.return=o.return,xe=M;break e}xe=o.return}}if($e=r,Qi(),Kn&&typeof Kn.onPostCommitFiberRoot=="function")try{Kn.onPostCommitFiberRoot(Cl,t)}catch{}i=!0}return i}finally{nt=n,Tn.transition=e}}return!1}function up(t,e,n){e=ys(n,e),e=ig(t,e,1),t=zi(t,e,1),e=Xt(),t!==null&&(Da(t,1,e),rn(t,e))}function vt(t,e,n){if(t.tag===3)up(t,t,n);else for(;e!==null;){if(e.tag===3){up(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ji===null||!ji.has(i))){t=ys(n,t),t=rg(e,t,1),e=zi(e,t,1),t=Xt(),e!==null&&(Da(e,1,t),rn(e,t));break}}e=e.return}}function H_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Xt(),t.pingedLanes|=t.suspendedLanes&n,Pt===t&&(It&n)===n&&(At===4||At===3&&(It&130023424)===It&&500>St()-bf?vr(t,0):wf|=n),rn(t,e)}function wg(t,e){e===0&&(t.mode&1?(e=Ya,Ya<<=1,!(Ya&130023424)&&(Ya=4194304)):e=1);var n=Xt();t=gi(t,e),t!==null&&(Da(t,e,n),rn(t,n))}function G_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wg(t,n)}function V_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),wg(t,n)}var bg;bg=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||tn.current)en=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return en=!1,P_(t,e,n);en=!!(t.flags&131072)}else en=!1,dt&&e.flags&1048576&&Rx(e,ol,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ko(t,e),t=e.pendingProps;var r=xs(e,Ht.current);us(e,n),r=vf(null,e,i,t,r,n);var s=_f();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,nn(i)?(s=!0,sl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,hf(e),r.updater=Ul,e.stateNode=r,r._reactInternals=e,Uu(e,i,t,n),e=ku(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&af(e),Vt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ko(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=X_(i),t=Un(i,t),r){case 0:e=Bu(null,e,i,t,n);break e;case 1:e=ep(null,e,i,t,n);break e;case 11:e=Qh(null,e,i,t,n);break e;case 14:e=Jh(null,e,i,Un(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Bu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),ep(t,e,i,r,n);case 3:e:{if(lg(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Ux(t,e),ul(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ys(Error(ie(423)),e),e=tp(t,e,i,n,r);break e}else if(i!==r){r=ys(Error(ie(424)),e),e=tp(t,e,i,n,r);break e}else for(mn=Oi(e.stateNode.containerInfo.firstChild),xn=e,dt=!0,Bn=null,n=Dx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(gs(),i===r){e=vi(t,e,n);break e}Vt(t,e,i,n)}e=e.child}return e;case 5:return Fx(e),t===null&&Lu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Tu(i,r)?a=null:s!==null&&Tu(i,s)&&(e.flags|=32),og(t,e),Vt(t,e,a,n),e.child;case 6:return t===null&&Lu(e),null;case 13:return cg(t,e,n);case 4:return pf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=vs(e,null,i,n):Vt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),Qh(t,e,i,r,n);case 7:return Vt(t,e,e.pendingProps,n),e.child;case 8:return Vt(t,e,e.pendingProps.children,n),e.child;case 12:return Vt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,st(ll,i._currentValue),i._currentValue=a,s!==null)if(Gn(s.value,a)){if(s.children===r.children&&!tn.current){e=vi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=hi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Du(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ie(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Du(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}Vt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,us(e,n),r=Cn(r),i=i(r),e.flags|=1,Vt(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),Jh(t,e,i,r,n);case 15:return sg(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),ko(t,e),e.tag=1,nn(i)?(t=!0,sl(e)):t=!1,us(e,n),ng(e,i,r),Uu(e,i,r,n),ku(null,e,i,!0,t,n);case 19:return ug(t,e,n);case 22:return ag(t,e,n)}throw Error(ie(156,e.tag))};function Ag(t,e){return Jm(t,e)}function W_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bn(t,e,n,i){return new W_(t,e,n,i)}function Rf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X_(t){if(typeof t=="function")return Rf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qd)return 11;if(t===Yd)return 14}return 2}function Gi(t,e){var n=t.alternate;return n===null?(n=bn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function jo(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Rf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Yr:return _r(n.children,r,s,e);case Xd:a=8,r|=8;break;case su:return t=bn(12,n,e,r|2),t.elementType=su,t.lanes=s,t;case au:return t=bn(13,n,e,r),t.elementType=au,t.lanes=s,t;case ou:return t=bn(19,n,e,r),t.elementType=ou,t.lanes=s,t;case Fm:return kl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Im:a=10;break e;case Um:a=9;break e;case qd:a=11;break e;case Yd:a=14;break e;case Ri:a=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=bn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function _r(t,e,n,i){return t=bn(7,t,i,e),t.lanes=n,t}function kl(t,e,n,i){return t=bn(22,t,i,e),t.elementType=Fm,t.lanes=n,t.stateNode={isHidden:!1},t}function Mc(t,e,n){return t=bn(6,t,null,e),t.lanes=n,t}function Ec(t,e,n){return e=bn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function q_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ic(0),this.expirationTimes=ic(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ic(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,a,o,c){return t=new q_(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=bn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hf(s),t}function Y_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qr,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Tg(t){if(!t)return qi;t=t._reactInternals;e:{if(Rr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(nn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(nn(n))return Tx(t,n,e)}return e}function Cg(t,e,n,i,r,s,a,o,c){return t=Nf(n,i,!0,t,r,s,a,o,c),t.context=Tg(null),n=t.current,i=Xt(),r=Hi(n),s=hi(i,r),s.callback=e??null,zi(n,s,r),t.current.lanes=r,Da(t,r,i),rn(t,i),t}function Ol(t,e,n,i){var r=e.current,s=Xt(),a=Hi(r);return n=Tg(n),e.context===null?e.context=n:e.pendingContext=n,e=hi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=zi(r,e,a),t!==null&&(Hn(t,r,a,s),Uo(t,r,a)),a}function vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Pf(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function $_(){return null}var Rg=typeof reportError=="function"?reportError:function(t){console.error(t)};function Lf(t){this._internalRoot=t}zl.prototype.render=Lf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Ol(t,e,null,null)};zl.prototype.unmount=Lf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;br(function(){Ol(null,t,null,null)}),e[xi]=null}};function zl(t){this._internalRoot=t}zl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ax();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Pi.length&&e!==0&&e<Pi[n].priority;n++);Pi.splice(n,0,t),n===0&&lx(t)}};function Df(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fp(){}function K_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=vl(a);s.call(u)}}var a=Cg(e,i,t,0,null,!1,!1,"",fp);return t._reactRootContainer=a,t[xi]=a.current,ya(t.nodeType===8?t.parentNode:t),br(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=vl(c);o.call(u)}}var c=Nf(t,0,!1,null,null,!1,!1,"",fp);return t._reactRootContainer=c,t[xi]=c.current,ya(t.nodeType===8?t.parentNode:t),br(function(){Ol(e,c,n,i)}),c}function Hl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=vl(a);o.call(c)}}Ol(e,a,t,r)}else a=K_(n,e,t,r,i);return vl(a)}rx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Js(e.pendingLanes);n!==0&&(Zd(e,n|1),rn(e,St()),!($e&6)&&(Ss=St()+500,Qi()))}break;case 13:br(function(){var i=gi(t,1);if(i!==null){var r=Xt();Hn(i,t,1,r)}}),Pf(t,1)}};Qd=function(t){if(t.tag===13){var e=gi(t,134217728);if(e!==null){var n=Xt();Hn(e,t,134217728,n)}Pf(t,134217728)}};sx=function(t){if(t.tag===13){var e=Hi(t),n=gi(t,e);if(n!==null){var i=Xt();Hn(n,t,e,i)}Pf(t,e)}};ax=function(){return nt};ox=function(t,e){var n=nt;try{return nt=t,e()}finally{nt=n}};gu=function(t,e,n){switch(e){case"input":if(uu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ll(i);if(!r)throw Error(ie(90));km(i),uu(i,r)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&as(t,!!n.multiple,e,!1)}};qm=Af;Ym=br;var Z_={usingClientEntryPoint:!1,Events:[Ua,Qr,Ll,Wm,Xm,Af]},Hs={findFiberByHostInstance:hr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Q_={bundleType:Hs.bundleType,version:Hs.version,rendererPackageName:Hs.rendererPackageName,rendererConfig:Hs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zm(t),t===null?null:t.stateNode},findFiberByHostInstance:Hs.findFiberByHostInstance||$_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{Cl=so.inject(Q_),Kn=so}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z_;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Df(e))throw Error(ie(200));return Y_(t,e,null,n)};vn.createRoot=function(t,e){if(!Df(t))throw Error(ie(299));var n=!1,i="",r=Rg;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[xi]=e.current,ya(t.nodeType===8?t.parentNode:t),new Lf(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Zm(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return br(t)};vn.hydrate=function(t,e,n){if(!jl(e))throw Error(ie(200));return Hl(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Df(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Rg;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Cg(e,null,t,1,n??null,r,!1,s,a),t[xi]=e.current,ya(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new zl(e)};vn.render=function(t,e,n){if(!jl(e))throw Error(ie(200));return Hl(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!jl(t))throw Error(ie(40));return t._reactRootContainer?(br(function(){Hl(null,null,t,!1,function(){t._reactRootContainer=null,t[xi]=null})}),!0):!1};vn.unstable_batchedUpdates=Af;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Hl(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function Ng(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ng)}catch(t){console.error(t)}}Ng(),Nm.exports=vn;var J_=Nm.exports,hp=J_;iu.createRoot=hp.createRoot,iu.hydrateRoot=hp.hydrateRoot;/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Pg=(...t)=>t.filter((e,n,i)=>!!e&&i.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var t1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=fe.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:a,...o},c)=>fe.createElement("svg",{ref:c,...t1,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:Pg("lucide",r),...o},[...a.map(([u,h])=>fe.createElement(u,h)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=(t,e)=>{const n=fe.forwardRef(({className:i,...r},s)=>fe.createElement(n1,{ref:s,iconNode:e,className:Pg(`lucide-${e1(t)}`,i),...r}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=ut("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=ut("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=ut("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=ut("Camera",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lg=ut("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=ut("CloudUpload",[["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m8 17 4-4 4 4",key:"1quai1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=ut("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dg=ut("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=ut("Feather",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=ut("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=ut("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ig=ut("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=ut("Pin",[["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",key:"1nkz8b"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=ut("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=ut("RotateCw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fg=ut("Scissors",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=ut("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=ut("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=ut("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=ut("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=ut("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=ut("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=ut("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=ut("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.453.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=ut("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),Ra=[{id:"designer",name:"Designer",title:"Independent Designer",symbol:"dress_form",symbolLabel:"Sculptural Dress Form",tagline:"Upload designs, retain IP, license and earn on every stitch.",description:"Transform raw sketches into manufactured garments without capital barriers. Retain full authorship, license to brands, and track global wholesale distribution.",perks:["Direct sample approvals","Royalties & wholesale licensing","Access to certified ateliers","Living portfolio with provenance"],cta:"Enter the Studio"},{id:"brand",name:"Fashion Brand",title:"Atelier & Fashion Brand",symbol:"brand_label",symbolLabel:"Embossed Silk Label",tagline:"Curate collections, launch exclusive drops, collaborate.",description:"Discover vetted independent designers, co-create seasonal drops under shared prestige, and test limited runs with real-time customer pre-orders.",perks:["Exclusive collection drops","Designer co-branding rights","Pre-sale demand validation","End-to-end supply chain integration"],cta:"Explore Collaborations"},{id:"retail",name:"Retail Shop",title:"Boutique & Retailer",symbol:"clothing_rail",symbolLabel:"Solid Brass Rail",tagline:"Order curated wholesale lines with guaranteed MOQs in LKR.",description:"Stock your boutique rails with museum-quality pieces. Request bespoke fabric swatches, physical samples, and negotiate bulk production with transparent pricing.",perks:["Wholesale pricing (LKR)","Low MOQ guarantees","Virtual rail builder & line sheets","Direct delivery tracking"],cta:"Build Rail"},{id:"model",name:"Model / Creator",title:"Model & Creative Talent",symbol:"camera_lens",symbolLabel:"Reflective Lens",tagline:"Comp-card profiles, booked shoots, recurring sales commission.",description:"Create an editorial comp-card with verified measurements. Get invited to brand shoots and earn commission every time a garment you wore is purchased.",perks:["Digital Comp-Card","Automated royalty tracking","Verified measurements & Fit-Twin","High-fashion editorial bookings"],cta:"View Comp-Cards"},{id:"production",name:"Production Partner",title:"Master Atelier & Mill",symbol:"thread_spool",symbolLabel:"Gilded Thread Spool",tagline:"Craft approved samples, cut-and-sew master runs at agreed terms.",description:"Connect with visionary designers looking for ethical, skilled craftsmanship. Fill production schedules with pre-funded, high-margin capsule runs.",perks:["Certified pattern specs","Guaranteed milestone payouts","Zero marketing overhead","Long-term brand relationships"],cta:"Partner Ateliers"},{id:"customer",name:"Customer",title:"Patron of Wearable Art",symbol:"garment_bag",symbolLabel:"Linen Garment Bag",tagline:"Acquire numbered editions or commission custom atelier pieces.",description:"Step into garments that embody architectural thought. Know the exact hands that carded, cut, stitched, and captured your piece.",perks:["Art-to-Wear provenance","Fit Twin size alignment","Bespoke custom tailoring","Numbered limited editions"],cta:"Enter The Hall"}],xp=[{step:1,id:"submitted",title:"Design Submitted",shortCopy:"The pencil sketch draws itself as an idea becomes a tangible silhouette.",badge:"Stage 01",detail:"Digital technical pack, vector proportions, and material intent registered with cryptographic provenance."},{step:2,id:"details",title:"Details & Categorisation",shortCopy:"Tags pin onto the sketch while silk and weave swatches orbit into alignment.",badge:"Stage 02",detail:"Fiber composition, yarn density, pantone dye references, and drape physics categorized for craft verification."},{step:3,id:"sample",title:"Sample Approval",shortCopy:"Raw muslin toile is fitted on the dress form, sealed with a hand-stitched seal.",badge:"Stage 03",detail:"Physical toile inspected by lead master cutter; fit revisions adjusted on 3D avatar before final cutting."},{step:4,id:"production",title:"Production",shortCopy:"Pattern pieces fly in; running stitches sew the seams with the partner atelier.",badge:"Stage 04",detail:"Small-batch ethical run crafted by certified local artisans in Colombo & Kandy mills."},{step:5,id:"photoshoot",title:"Photoshoot",shortCopy:"A warm strobe flash captures the drape on the model beside contact-sheet frames.",badge:"Stage 05",detail:"Editorial campaign captured in golden natural light; model comp-card and styling details tagged."},{step:6,id:"live",title:"Live on Platform",shortCopy:"Garment rests on the brass rail ready for direct collector purchase and wholesale orders.",badge:"Stage 06",detail:"Interactive 3D exhibit active in The Hall; wholesale line sheet available for boutique ordering."}],pi=[{id:"hero_gown",name:"The Peach Chiffon Gown",slug:"peach-chiffon-gown",edition:"Edition 01 of 18",occasion:"Evening Gala",fabric:"Silk Chiffon & Hand-Spun Organdy",colorName:"Blush Peach",colorHex:"#E7B49A",retailPriceLKR:68e3,wholesalePriceLKR:38e3,moq:20,availability:"Made to Order · 14 Days",inStockCount:6,designer:{name:"Maya Senanayake",atelier:"Studio Senanayake, Colombo 07",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",bio:"Pioneering organic silk draping infused with ancient Sri Lankan lacework."},credits:{designedBy:"Maya Senanayake",sampleApproved:"Master Cutter Sunil Fernando",producedBy:"Lanka Fine Silk Weavers & Artisans Guild",photographedBy:"Tariq Thorne (Sunlit Colonnade Shoot)",modelledBy:"Keshini Perera (Height 174cm, Size S)"},fitTwin:{modelHeight:174,modelSize:"S",bust:"84 cm",waist:"64 cm",hips:"91 cm",recommendation:"True to architectural drape. If between sizes, size down for sculpted bodice."},journeyDates:[{stage:"Design Submitted",date:"August 12, 2026",note:"Initial charcoal and graphite drape sketches"},{stage:"Details & Categorisation",date:"August 24, 2026",note:"Selected 100% mulberry peach chiffon"},{stage:"Sample Approval",date:"September 08, 2026",note:"Toile fit calibrated on sculptural form"},{stage:"Production",date:"September 28, 2026",note:"First 20 units hand-stitched at Colombo Atelier"},{stage:"Photoshoot",date:"October 14, 2026",note:"Captured under natural golden hour archways"},{stage:"Live on Platform",date:"October 24, 2026",note:"Opened for direct patronage and boutique rails"}],layers:{sketch:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"},story:"Sculpted from twelve continuous metres of featherweight peach chiffon. The gown features hand-pleated sunburst rays radiating from the waistline, echoing the arches of neoclassical colonnades."},{id:"hall_garment_01",name:"Travertine Cocoon Coat",slug:"travertine-cocoon-coat",edition:"Edition 04 of 25",occasion:"Architectural Outerwear",fabric:"Raw Wild Silk & Wool Cashmere",colorName:"Warm Travertine",colorHex:"#E9DFCF",retailPriceLKR:84e3,wholesalePriceLKR:49e3,moq:15,availability:"Limited Batch · Ready to Ship",inStockCount:4,designer:{name:"Julian De Silva",atelier:"Atelier JDS, Kandy",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",bio:"Exploring monolithic garment geometry inspired by tropical modernism."},credits:{designedBy:"Julian De Silva",sampleApproved:"JDS Studio Quality Board",producedBy:"Central Highlands Mill Collective",photographedBy:"Dilshan Weerasinghe",modelledBy:"Sasha Alwis (Height 178cm, Size M)"},fitTwin:{modelHeight:178,modelSize:"M",bust:"88 cm",waist:"68 cm",hips:"95 cm",recommendation:"Relaxed cocoon silhouette. Features drop shoulders."},journeyDates:[{stage:"Design Submitted",date:"July 10, 2026",note:"Structural charcoal study"},{stage:"Details & Categorisation",date:"July 28, 2026",note:"Custom double-face wool and wild raw silk blend"},{stage:"Sample Approval",date:"August 19, 2026",note:"Muslin prototype approved"},{stage:"Production",date:"September 15, 2026",note:"Tailored with invisible horn buttons"},{stage:"Photoshoot",date:"October 02, 2026",note:"Minimalist stone pavilion backdrop"},{stage:"Live on Platform",date:"October 20, 2026",note:"Released for retail line sheets"}],layers:{sketch:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"},story:"Conceived as an architectural sanctuary. Clean, uninterrupted curved lines sweep around the shoulders into a relaxed cocoon hem."},{id:"hall_garment_02",name:"Fluted Linen Column Dress",slug:"fluted-linen-column-dress",edition:"Edition 08 of 30",occasion:"Resort & Gallery",fabric:"Unbleached Organic Flax Linen",colorName:"Raw Linen",colorHex:"#F1E9DC",retailPriceLKR:46e3,wholesalePriceLKR:24500,moq:30,availability:"In Production · Ships in 7 Days",inStockCount:12,designer:{name:"Nivani Karunaratne",atelier:"Nivani Textile Lab, Galle Fort",avatar:"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",bio:"Revitalizing heirloom organic flax weaving with micro-accordion pleats."},credits:{designedBy:"Nivani Karunaratne",sampleApproved:"Galle Heritage Tailors",producedBy:"Southern Coast Craft Guild",photographedBy:"Chathura Gunasekara",modelledBy:"Mei Lin (Height 168cm, Size S)"},fitTwin:{modelHeight:168,modelSize:"S",bust:"82 cm",waist:"62 cm",hips:"88 cm",recommendation:"Column fit with subtle natural stretch from the vertical fluting."},journeyDates:[{stage:"Design Submitted",date:"August 01, 2026",note:"Fluted column proportions"},{stage:"Details & Categorisation",date:"August 14, 2026",note:"100% non-bleached European flax"},{stage:"Sample Approval",date:"September 01, 2026",note:"Stitch tension calibrated"},{stage:"Production",date:"September 22, 2026",note:"Batch of 30 crafted"},{stage:"Photoshoot",date:"October 08, 2026",note:"Galle fort bastions at dawn"},{stage:"Live on Platform",date:"October 25, 2026",note:"Live for boutiques & orders"}],layers:{sketch:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=900&q=80"},story:"Vertical accordion pleats evoke the fluting of classical columns, giving the wearer an elongated, effortlessly fluid line."},{id:"hall_garment_03",name:"Sky Mist Organza Trench",slug:"sky-mist-organza-trench",edition:"Edition 02 of 12",occasion:"Editorial & Evening",fabric:"Translucent Glass Organza",colorName:"Sky Mist",colorHex:"#D5E3EE",retailPriceLKR:92e3,wholesalePriceLKR:54e3,moq:12,availability:"Made to Order",inStockCount:3,designer:{name:"Kavinda Abeysekara",atelier:"Kavinda Haute Couture",avatar:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",bio:"Bridging glass transparency and traditional tailoring."},credits:{designedBy:"Kavinda Abeysekara",sampleApproved:"Atelier Technical Direction",producedBy:"Prestige Silk Masters",photographedBy:"Elena Rostova",modelledBy:"Natasha Dias (Height 176cm, Size S)"},fitTwin:{modelHeight:176,modelSize:"S",bust:"85 cm",waist:"65 cm",hips:"92 cm",recommendation:"Comes with removable matching silk sash belt."},journeyDates:[{stage:"Design Submitted",date:"July 15, 2026",note:"Transparency play studies"},{stage:"Details & Categorisation",date:"August 03, 2026",note:"Triple-washed silk glass organza"},{stage:"Sample Approval",date:"August 29, 2026",note:"French seam finish verified"},{stage:"Production",date:"September 19, 2026",note:"Tailoring in limited runs"},{stage:"Photoshoot",date:"October 11, 2026",note:"Reflecting afternoon rain"},{stage:"Live on Platform",date:"October 22, 2026",note:"Available worldwide"}],layers:{sketch:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80"},story:"A whisper-light outer layer catching breezes like a sail. French seams ensure every interior line is as clean as the silhouette."},{id:"hall_garment_04",name:"Midnight Ink Pleated Tunic",slug:"midnight-ink-pleated-tunic",edition:"Edition 11 of 40",occasion:"Ceremony & Gallery",fabric:"Dense Crepe De Chine & Matte Satin",colorName:"Deep Ink",colorHex:"#1B1917",retailPriceLKR:44e3,wholesalePriceLKR:25e3,moq:35,availability:"In Stock",inStockCount:18,designer:{name:"Maya Senanayake",atelier:"Studio Senanayake, Colombo 07",avatar:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",bio:"Pioneering organic silk draping infused with ancient Sri Lankan lacework."},credits:{designedBy:"Maya Senanayake",sampleApproved:"Studio Senanayake",producedBy:"Colombo Craft Cooperative",photographedBy:"Tariq Thorne",modelledBy:"Keshini Perera (Height 174cm, Size S)"},fitTwin:{modelHeight:174,modelSize:"S",bust:"84 cm",waist:"64 cm",hips:"91 cm",recommendation:"A-line drape suitable across a broad range of body shapes."},journeyDates:[{stage:"Design Submitted",date:"June 20, 2026",note:"Ink wash silhouette study"},{stage:"Details & Categorisation",date:"July 12, 2026",note:"Heavy weight silk crepe"},{stage:"Sample Approval",date:"July 30, 2026",note:"Asymmetrical hem approved"},{stage:"Production",date:"August 25, 2026",note:"Master batch completed"},{stage:"Photoshoot",date:"September 18, 2026",note:"Low-key chiaroscuro studio shoot"},{stage:"Live on Platform",date:"October 01, 2026",note:"Reordered twice by boutique partners"}],layers:{sketch:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80"},story:"Pure dark drama. Deep ink absorbs the room’s illumination, creating a bold sculptural silhouette that shifts with movement."},{id:"hall_garment_05",name:"Raw Silk Pleated Kimono",slug:"raw-silk-pleated-kimono",edition:"Edition 05 of 20",occasion:"Lounge & Evening",fabric:"Hand-Loomed Raw Matka Silk",colorName:"Muted Taupe",colorHex:"#B8A48C",retailPriceLKR:58e3,wholesalePriceLKR:32e3,moq:25,availability:"Limited Batch",inStockCount:7,designer:{name:"Julian De Silva",atelier:"Atelier JDS, Kandy",avatar:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",bio:"Exploring monolithic garment geometry inspired by tropical modernism."},credits:{designedBy:"Julian De Silva",sampleApproved:"Atelier JDS",producedBy:"Kandy Handloom Masters",photographedBy:"Dilshan Weerasinghe",modelledBy:"Amani Jayawardena (Height 172cm, Size S)"},fitTwin:{modelHeight:172,modelSize:"S",bust:"83 cm",waist:"63 cm",hips:"89 cm",recommendation:"Generous kimono sleeves with internal waist ribbons."},journeyDates:[{stage:"Design Submitted",date:"July 05, 2026",note:"Sleeve drape physics"},{stage:"Details & Categorisation",date:"July 20, 2026",note:"Naturally dyed taupe slub"},{stage:"Sample Approval",date:"August 10, 2026",note:"Collar lapel perfected"},{stage:"Production",date:"September 05, 2026",note:"Woven on manual flying shuttles"},{stage:"Photoshoot",date:"September 28, 2026",note:"Veranda in shadow"},{stage:"Live on Platform",date:"October 15, 2026",note:"Stocked in 4 premium boutiques"}],layers:{sketch:"https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=900&q=80",drape3D:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=900&q=80",photo:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80"},story:"Woven from raw slub silk with organic irregularities celebrated as character. Effortlessly layers over slip dresses or tailored pants."}],Gs=[{id:"p1",name:"Maya Senanayake",role:"designer",roleLabel:"Couture Designer",location:"Colombo, Sri Lanka",image:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=500&q=80",stats:{designs:14,collaborations:8,wholesaleRails:19},activeCollaborations:["p2","p3","p5"],bio:"Rooted in organic draping, botanical dyeing, and architectural silhouettes."},{id:"p2",name:"House of Sylvan",role:"brand",roleLabel:"Luxury Fashion Brand",location:"London & Colombo",image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",stats:{drops:5,partneredDesigners:6,stockists:34},activeCollaborations:["p1","p4","p6"],bio:"Curating boundary-pushing seasonal drops with independent South Asian designers."},{id:"p3",name:"The Cinnamon Arch Boutique",role:"retail",roleLabel:"Concept Retail Store",location:"Galle Fort Heritage Quarter",image:"https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80",stats:{activeRails:8,ordersPlaced:27,avgMOQ:"35 pcs"},activeCollaborations:["p1","p5"],bio:"Curated retail sanctuary showcasing wearable art to international travelers."},{id:"p4",name:"Keshini Perera",role:"model",roleLabel:"Editorial Model",location:"Colombo & Singapore",image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=500&q=80",stats:{campaigns:22,height:"174 cm",size:"S / UK 8"},activeCollaborations:["p1","p2"],bio:"Editorial presence in Vogue South Asia and Harper’s Bazaar. Height 174cm, Size S."},{id:"p5",name:"Lanka Fine Silk Artisans Guild",role:"production",roleLabel:"Master Weaving Mill",location:"Kandy Hill Country",image:"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=500&q=80",stats:{artisans:48,monthlyCapacity:"400 pcs",certification:"100% Ethical"},activeCollaborations:["p1","p3"],bio:"Specialising in hand-loomed Mulberry silk, zero-waste cutting and botanical dye vats."},{id:"p6",name:"Aurelia Solis",role:"customer",roleLabel:"Private Art Collector",location:"Zurich & Dubai",image:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=500&q=80",stats:{piecesAcquired:9,customCommissions:2},activeCollaborations:["p2"],bio:"Collecting numbered wearable art editions that honor maker heritage."}],_1=[{id:"drop_solstice",brand:"House of Sylvan × Maya Senanayake",title:"The Solstice Colonnade Collection",curtainColor:"rgba(231, 180, 154, 0.75)",revealDate:"November 15, 2026",silhouetteImage:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",description:"Seven unreleased garments celebrating midday sunbeams cutting through travertine arches. Strictly 15 editions per design.",status:"Silhouetted behind Sheer Silk",notifiedCount:342,retailerEarlyAccess:!0},{id:"drop_monolith",brand:"Atelier JDS",title:"Monolith: Heavy Linen & Raw Stone",curtainColor:"rgba(184, 164, 140, 0.8)",revealDate:"December 01, 2026",silhouetteImage:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",description:"Structured outerwear inspired by monolithic masonry and tropical brutalism.",status:"Silhouetted behind Sheer Silk",notifiedCount:198,retailerEarlyAccess:!0}];class y1{constructor(){this.ctx=null,this.roomToneNode=null,this.gainNode=null,this.isMuted=!0}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(0,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination),this.createRoomTone())}createRoomTone(){if(!this.ctx)return;const e=this.ctx.sampleRate*2,n=this.ctx.createBuffer(1,e,this.ctx.sampleRate),i=n.getChannelData(0);let r=0,s=0,a=0,o=0,c=0,u=0,h=0;for(let m=0;m<e;m++){const g=Math.random()*2-1;r=.99886*r+g*.0555179,s=.99332*s+g*.0750759,a=.969*a+g*.153852,o=.8665*o+g*.3104856,c=.55*c+g*.5329522,u=-.7616*u-g*.016898,i[m]=r+s+a+o+c+u+h+g*.5362,i[m]*=.012,h=g*.115926}const f=this.ctx.createBufferSource();f.buffer=n,f.loop=!0;const p=this.ctx.createBiquadFilter();p.type="lowpass",p.frequency.setValueAtTime(240,this.ctx.currentTime),this.roomToneGain=this.ctx.createGain(),this.roomToneGain.gain.setValueAtTime(.04,this.ctx.currentTime),f.connect(p),p.connect(this.roomToneGain),this.roomToneGain.connect(this.masterGain),f.start(0)}playFabricRustle(){if(!(this.isMuted||!this.ctx))try{this.ctx.state==="suspended"&&this.ctx.resume();const e=this.ctx.currentTime,n=3;for(let i=0;i<n;i++){const r=this.ctx.createBufferSource(),s=this.ctx.createBuffer(1,this.ctx.sampleRate*.5,this.ctx.sampleRate),a=s.getChannelData(0);for(let u=0;u<a.length;u++)a[u]=(Math.random()*2-1)*Math.exp(-u/(this.ctx.sampleRate*.15));r.buffer=s;const o=this.ctx.createBiquadFilter();o.type="bandpass",o.frequency.setValueAtTime(1400+i*800,e),o.Q.setValueAtTime(2,e);const c=this.ctx.createGain();c.gain.setValueAtTime(.001,e),c.gain.exponentialRampToValueAtTime(.08,e+.08),c.gain.exponentialRampToValueAtTime(1e-4,e+.45),r.connect(o),o.connect(c),c.connect(this.masterGain),r.start(e)}}catch{}}toggle(){if(this.init(),!this.ctx)return!1;this.ctx.state==="suspended"&&this.ctx.resume(),this.isMuted=!this.isMuted;const e=this.isMuted?0:.8;return this.masterGain.gain.setTargetAtTime(e,this.ctx.currentTime,.2),this.isMuted||this.playFabricRustle(),!this.isMuted}}const yr=new y1;function S1({activeNav:t,onNavigate:e,currentRole:n,onOpenRoleModal:i,soundMuted:r,onToggleSound:s,onOpenRail:a,onOpenUnusual:o}){const[c,u]=fe.useState(!1),h=[{id:"discover",label:"DISCOVER"},{id:"connect",label:"CONNECT"},{id:"create",label:"CREATE"},{id:"wear",label:"WEAR"}],f=Ra.find(m=>m.id===n)||Ra[0],p=m=>{yr.playFabricRustle(),e(m),u(!1)};return l.jsxs("header",{className:"sticky top-0 z-40 w-full bg-[#F7F2EA]/90 backdrop-blur-md border-b border-[#B8A48C]/30 transition-all select-none",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 md:px-12 h-20 flex items-center justify-between",children:[l.jsxs("div",{onClick:()=>p("home"),className:"flex items-center gap-3 cursor-pointer group",children:[l.jsx("div",{className:"w-10 h-10 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center font-serif text-base font-bold shadow-sm group-hover:scale-105 transition-transform",children:"AW"}),l.jsxs("div",{children:[l.jsx("span",{className:"font-serif text-2xl tracking-wide text-[#1B1917] block leading-none",children:"A to W"}),l.jsx("span",{className:"label-caps text-[9px] tracking-[0.25em] text-[#B8A48C]",children:"Art to Wear"})]})]}),l.jsx("nav",{className:"hidden md:flex items-center gap-8 lg:gap-12",children:h.map(m=>{const g=t===m.id;return l.jsx("button",{onClick:()=>p(m.id),className:`stitch-link text-xs font-mono tracking-[0.22em] uppercase py-1 font-medium transition-colors ${g?"text-[#1B1917] active font-bold":"text-[#1B1917]/70 hover:text-[#1B1917]"}`,children:m.label},m.id)})}),l.jsxs("div",{className:"hidden md:flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>{yr.playFabricRustle(),a()},className:"flex items-center gap-1.5 text-xs font-mono bg-[#E9DFCF] text-[#1B1917] px-3 py-1.5 rounded-full hover:bg-[#F1E9DC] transition-colors",title:"Open Virtual Wholesale Rail Builder",children:[l.jsx(m1,{size:13}),l.jsx("span",{children:"Rail"})]}),l.jsxs("button",{onClick:()=>{yr.playFabricRustle(),o()},className:"flex items-center gap-1.5 text-xs font-mono bg-[#1B1917] text-[#F7F2EA] px-3 py-1.5 rounded-full hover:bg-[#2b2825] transition-colors",title:"Enter The Unusual Theatrical Dark Room",children:[l.jsx(Ig,{size:13,className:"text-[#E7B49A]"}),l.jsx("span",{children:"The Unusual"})]}),l.jsxs("button",{onClick:i,className:"flex items-center gap-1.5 text-xs font-mono bg-[#F1E9DC] border border-[#B8A48C]/50 text-[#1B1917] px-3.5 py-1.5 rounded-full hover:border-[#1B1917] transition-all",title:"Switch your viewing perspective",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-[#E7B49A]"}),l.jsx("span",{className:"text-[#B8A48C]",children:"Role:"}),l.jsx("strong",{className:"font-semibold",children:f.name})]}),l.jsx("button",{onClick:s,className:`w-9 h-9 rounded-full flex items-center justify-center transition-all ${r?"bg-[#E9DFCF] text-[#B8A48C] hover:text-[#1B1917]":"bg-[#1B1917] text-[#F7F2EA] ring-2 ring-[#E7B49A]"}`,"aria-label":"Toggle Sound",title:r?"Turn Sound On (Soft room tone & fabric rustle)":"Mute Sound",children:r?l.jsx(mp,{size:15}):l.jsx(pp,{size:15})})]}),l.jsxs("div",{className:"flex md:hidden items-center gap-2",children:[l.jsx("button",{onClick:s,className:"w-8 h-8 rounded-full bg-[#E9DFCF] flex items-center justify-center text-[#1B1917]",children:r?l.jsx(mp,{size:14}):l.jsx(pp,{size:14})}),l.jsx("button",{onClick:()=>u(!c),className:"w-10 h-10 rounded-full bg-[#E9DFCF] flex items-center justify-center text-[#1B1917]","aria-label":"Toggle menu",children:c?l.jsx(If,{size:20}):l.jsx(c1,{size:20})})]})]}),c&&l.jsxs("div",{className:"md:hidden bg-[#F7F2EA] border-b border-[#B8A48C]/30 px-6 py-6 space-y-4 animate-fadeIn",children:[l.jsx("div",{className:"space-y-3 pb-4 border-b border-[#E9DFCF]",children:h.map(m=>l.jsx("button",{onClick:()=>p(m.id),className:`block w-full text-left font-serif text-2xl ${t===m.id?"text-[#1B1917] font-bold":"text-[#1B1917]/70"}`,children:m.label},m.id))}),l.jsxs("div",{className:"flex flex-col gap-2 pt-2",children:[l.jsx("button",{onClick:()=>{a(),u(!1)},className:"btn-pill-travertine w-full justify-center text-xs py-2",children:"Wholesale Rail Builder"}),l.jsx("button",{onClick:()=>{o(),u(!1)},className:"btn-pill-ink w-full justify-center text-xs py-2",children:"The Unusual Pavilion"}),l.jsxs("button",{onClick:()=>{i(),u(!1)},className:"btn-pill-travertine w-full justify-center text-xs py-2",children:["Switch Role (",f.name,")"]})]})]})]})}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Uf="169",M1=0,gp=1,E1=2,Bg=1,kg=2,ai=3,Yi=0,sn=1,wn=2,Vi=0,fs=1,vp=2,_p=3,yp=4,w1=5,dr=100,b1=101,A1=102,T1=103,C1=104,R1=200,N1=201,P1=202,L1=203,Ku=204,Zu=205,D1=206,I1=207,U1=208,F1=209,B1=210,k1=211,O1=212,z1=213,j1=214,Qu=0,Ju=1,ed=2,Ms=3,td=4,nd=5,id=6,rd=7,Og=0,H1=1,G1=2,Wi=0,V1=1,W1=2,X1=3,zg=4,q1=5,Y1=6,$1=7,jg=300,Es=301,ws=302,sd=303,ad=304,Gl=306,od=1e3,xr=1001,ld=1002,An=1003,K1=1004,ao=1005,kn=1006,wc=1007,gr=1008,_i=1009,Hg=1010,Gg=1011,Na=1012,Ff=1013,Ar=1014,di=1015,Ba=1016,Bf=1017,kf=1018,bs=1020,Vg=35902,Wg=1021,Xg=1022,zn=1023,qg=1024,Yg=1025,hs=1026,As=1027,$g=1028,Of=1029,Kg=1030,zf=1031,jf=1033,Ho=33776,Go=33777,Vo=33778,Wo=33779,cd=35840,ud=35841,dd=35842,fd=35843,hd=36196,pd=37492,md=37496,xd=37808,gd=37809,vd=37810,_d=37811,yd=37812,Sd=37813,Md=37814,Ed=37815,wd=37816,bd=37817,Ad=37818,Td=37819,Cd=37820,Rd=37821,Xo=36492,Nd=36494,Pd=36495,Zg=36283,Ld=36284,Dd=36285,Id=36286,Z1=3200,Q1=3201,Qg=0,J1=1,Di="",Xn="srgb",Ji="srgb-linear",Hf="display-p3",Vl="display-p3-linear",yl="linear",lt="srgb",Sl="rec709",Ml="p3",Dr=7680,Sp=519,ey=512,ty=513,ny=514,Jg=515,iy=516,ry=517,sy=518,ay=519,Mp=35044,Ep="300 es",fi=2e3,El=2001;class Ls{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ot=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bc=Math.PI/180,Ud=180/Math.PI;function ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ot[t&255]+Ot[t>>8&255]+Ot[t>>16&255]+Ot[t>>24&255]+"-"+Ot[e&255]+Ot[e>>8&255]+"-"+Ot[e>>16&15|64]+Ot[e>>24&255]+"-"+Ot[n&63|128]+Ot[n>>8&255]+"-"+Ot[n>>16&255]+Ot[n>>24&255]+Ot[i&255]+Ot[i>>8&255]+Ot[i>>16&255]+Ot[i>>24&255]).toLowerCase()}function Wt(t,e,n){return Math.max(e,Math.min(n,t))}function oy(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function Vs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class We{constructor(e=0,n=0){We.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,a,o,c,u){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],f=i[7],p=i[2],m=i[5],g=i[8],S=r[0],x=r[3],d=r[6],v=r[1],_=r[4],M=r[7],N=r[2],T=r[5],A=r[8];return s[0]=a*S+o*v+c*N,s[3]=a*x+o*_+c*T,s[6]=a*d+o*M+c*A,s[1]=u*S+h*v+f*N,s[4]=u*x+h*_+f*T,s[7]=u*d+h*M+f*A,s[2]=p*S+m*v+g*N,s[5]=p*x+m*_+g*T,s[8]=p*d+m*M+g*A,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=h*a-o*u,p=o*c-h*s,m=u*s-a*c,g=n*f+i*p+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(r*u-h*i)*S,e[2]=(o*i-r*a)*S,e[3]=p*S,e[4]=(h*n-r*c)*S,e[5]=(r*s-o*n)*S,e[6]=m*S,e[7]=(i*c-u*n)*S,e[8]=(a*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Tc.makeScale(e,n)),this}rotate(e){return this.premultiply(Tc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Tc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Tc=new Oe;function e0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ly(){const t=wl("canvas");return t.style.display="block",t}const wp={};function qo(t){t in wp||(wp[t]=!0,console.warn(t))}function cy(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function uy(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function dy(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const bp=new Oe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ap=new Oe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ws={[Ji]:{transfer:yl,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Xn]:{transfer:lt,primaries:Sl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Vl]:{transfer:yl,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Ap),fromReference:t=>t.applyMatrix3(bp)},[Hf]:{transfer:lt,primaries:Ml,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Ap),fromReference:t=>t.applyMatrix3(bp).convertLinearToSRGB()}},fy=new Set([Ji,Vl]),et={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!fy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Ws[e].toReference,r=Ws[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Ws[t].primaries},getTransfer:function(t){return t===Di?yl:Ws[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Ws[e].luminanceCoefficients)}};function ps(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ir;class hy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ir===void 0&&(Ir=wl("canvas")),Ir.width=e.width,Ir.height=e.height;const i=Ir.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ir}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ps(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ps(n[i]/255)*255):n[i]=ps(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class t0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=ka(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Rc(r[a].image)):s.push(Rc(r[a]))}else s=Rc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Rc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?hy.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class an extends Ls{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=xr,r=xr,s=kn,a=gr,o=zn,c=_i,u=an.DEFAULT_ANISOTROPY,h=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=ka(),this.name="",this.source=new t0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case od:e.x=e.x-Math.floor(e.x);break;case xr:e.x=e.x<0?0:1;break;case ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case od:e.y=e.y-Math.floor(e.y);break;case xr:e.y=e.y<0?0:1;break;case ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=jg;an.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,n=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],f=c[8],p=c[1],m=c[5],g=c[9],S=c[2],x=c[6],d=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-S)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+S)<.1&&Math.abs(g+x)<.1&&Math.abs(u+m+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,M=(m+1)/2,N=(d+1)/2,T=(h+p)/4,A=(f+S)/4,P=(g+x)/4;return _>M&&_>N?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=A/i):M>N?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=T/r,s=P/r):N<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(N),i=A/s,r=P/s),this.set(i,r,s,n),this}let v=Math.sqrt((x-g)*(x-g)+(f-S)*(f-S)+(p-h)*(p-h));return Math.abs(v)<.001&&(v=1),this.x=(x-g)/v,this.y=(f-S)/v,this.z=(p-h)/v,this.w=Math.acos((u+m+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class xy extends Ls{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new _t(0,0,e,n),this.scissorTest=!1,this.viewport=new _t(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new an(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new t0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Tr extends xy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class n0 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gy extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=An,this.minFilter=An,this.wrapR=xr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oa{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],f=i[r+3];const p=s[a+0],m=s[a+1],g=s[a+2],S=s[a+3];if(o===0){e[n+0]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f;return}if(o===1){e[n+0]=p,e[n+1]=m,e[n+2]=g,e[n+3]=S;return}if(f!==S||c!==p||u!==m||h!==g){let x=1-o;const d=c*p+u*m+h*g+f*S,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const N=Math.sqrt(_),T=Math.atan2(N,d*v);x=Math.sin(x*T)/N,o=Math.sin(o*T)/N}const M=o*v;if(c=c*x+p*M,u=u*x+m*M,h=h*x+g*M,f=f*x+S*M,x===1-o){const N=1/Math.sqrt(c*c+u*u+h*h+f*f);c*=N,u*=N,h*=N,f*=N}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],f=s[a],p=s[a+1],m=s[a+2],g=s[a+3];return e[n]=o*g+h*f+c*m-u*p,e[n+1]=c*g+h*p+u*f-o*m,e[n+2]=u*g+h*m+o*p-c*f,e[n+3]=h*g-o*f-c*p-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),f=o(s/2),p=c(i/2),m=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=p*h*f+u*m*g,this._y=u*m*f-p*h*g,this._z=u*h*g+p*m*f,this._w=u*h*f-p*m*g;break;case"YXZ":this._x=p*h*f+u*m*g,this._y=u*m*f-p*h*g,this._z=u*h*g-p*m*f,this._w=u*h*f+p*m*g;break;case"ZXY":this._x=p*h*f-u*m*g,this._y=u*m*f+p*h*g,this._z=u*h*g+p*m*f,this._w=u*h*f-p*m*g;break;case"ZYX":this._x=p*h*f-u*m*g,this._y=u*m*f+p*h*g,this._z=u*h*g-p*m*f,this._w=u*h*f+p*m*g;break;case"YZX":this._x=p*h*f+u*m*g,this._y=u*m*f+p*h*g,this._z=u*h*g-p*m*f,this._w=u*h*f-p*m*g;break;case"XZY":this._x=p*h*f-u*m*g,this._y=u*m*f-p*h*g,this._z=u*h*g+p*m*f,this._w=u*h*f+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],f=n[10],p=i+o+f;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const u=Math.sqrt(c),h=Math.atan2(u,o),f=Math.sin((1-n)*h)/u,p=Math.sin(n*h)/u;return this._w=a*f+this._w*p,this._x=i*f+this._x*p,this._y=r*f+this._y*p,this._z=s*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,n=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Tp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Tp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+c*u+a*f-o*h,this.y=i+c*h+o*u-s*f,this.z=r+c*f+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nc.copy(this).projectOnVector(e),this.sub(Nc)}reflect(e){return this.sub(Nc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Wt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Nc=new k,Tp=new Oa;class za{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),oo.copy(i.boundingBox)),oo.applyMatrix4(e.matrixWorld),this.union(oo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),lo.subVectors(this.max,Xs),Ur.subVectors(e.a,Xs),Fr.subVectors(e.b,Xs),Br.subVectors(e.c,Xs),Ei.subVectors(Fr,Ur),wi.subVectors(Br,Fr),tr.subVectors(Ur,Br);let n=[0,-Ei.z,Ei.y,0,-wi.z,wi.y,0,-tr.z,tr.y,Ei.z,0,-Ei.x,wi.z,0,-wi.x,tr.z,0,-tr.x,-Ei.y,Ei.x,0,-wi.y,wi.x,0,-tr.y,tr.x,0];return!Pc(n,Ur,Fr,Br,lo)||(n=[1,0,0,0,1,0,0,0,1],!Pc(n,Ur,Fr,Br,lo))?!1:(co.crossVectors(Ei,wi),n=[co.x,co.y,co.z],Pc(n,Ur,Fr,Br,lo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ti[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ti[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ti[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ti[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ti[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ti[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ti[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ti[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ti),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ti=[new k,new k,new k,new k,new k,new k,new k,new k],Ln=new k,oo=new za,Ur=new k,Fr=new k,Br=new k,Ei=new k,wi=new k,tr=new k,Xs=new k,lo=new k,co=new k,nr=new k;function Pc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){nr.fromArray(t,s);const o=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),u=n.dot(nr),h=i.dot(nr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const vy=new za,qs=new k,Lc=new k;class Wl{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):vy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;qs.subVectors(e,this.center);const n=qs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(qs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(qs.copy(e.center).add(Lc)),this.expandByPoint(qs.copy(e.center).sub(Lc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ni=new k,Dc=new k,uo=new k,bi=new k,Ic=new k,fo=new k,Uc=new k;class Gf{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ni)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ni.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ni.copy(this.origin).addScaledVector(this.direction,n),ni.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Dc.copy(e).add(n).multiplyScalar(.5),uo.copy(n).sub(e).normalize(),bi.copy(this.origin).sub(Dc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(uo),o=bi.dot(this.direction),c=-bi.dot(uo),u=bi.lengthSq(),h=Math.abs(1-a*a);let f,p,m,g;if(h>0)if(f=a*c-o,p=a*o-c,g=s*h,f>=0)if(p>=-g)if(p<=g){const S=1/h;f*=S,p*=S,m=f*(f+a*p+2*o)+p*(a*f+p+2*c)+u}else p=s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p=-s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;else p<=-g?(f=Math.max(0,-(-a*s+o)),p=f>0?-s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u):p<=g?(f=0,p=Math.min(Math.max(-s,-c),s),m=p*(p+2*c)+u):(f=Math.max(0,-(a*s+o)),p=f>0?s:Math.min(Math.max(-s,-c),s),m=-f*f+p*(p+2*c)+u);else p=a>0?-s:s,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Dc).addScaledVector(uo,p),m}intersectSphere(e,n){ni.subVectors(e.center,this.origin);const i=ni.dot(this.direction),r=ni.dot(ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return u>=0?(i=(e.min.x-p.x)*u,r=(e.max.x-p.x)*u):(i=(e.max.x-p.x)*u,r=(e.min.x-p.x)*u),h>=0?(s=(e.min.y-p.y)*h,a=(e.max.y-p.y)*h):(s=(e.max.y-p.y)*h,a=(e.min.y-p.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ni)!==null}intersectTriangle(e,n,i,r,s){Ic.subVectors(n,e),fo.subVectors(i,e),Uc.crossVectors(Ic,fo);let a=this.direction.dot(Uc),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;bi.subVectors(this.origin,e);const c=o*this.direction.dot(fo.crossVectors(bi,fo));if(c<0)return null;const u=o*this.direction.dot(Ic.cross(bi));if(u<0||c+u>a)return null;const h=-o*bi.dot(Uc);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(e,n,i,r,s,a,o,c,u,h,f,p,m,g,S,x){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,f,p,m,g,S,x)}set(e,n,i,r,s,a,o,c,u,h,f,p,m,g,S,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=c,d[2]=u,d[6]=h,d[10]=f,d[14]=p,d[3]=m,d[7]=g,d[11]=S,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/kr.setFromMatrixColumn(e,0).length(),s=1/kr.setFromMatrixColumn(e,1).length(),a=1/kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const p=a*h,m=a*f,g=o*h,S=o*f;n[0]=c*h,n[4]=-c*f,n[8]=u,n[1]=m+g*u,n[5]=p-S*u,n[9]=-o*c,n[2]=S-p*u,n[6]=g+m*u,n[10]=a*c}else if(e.order==="YXZ"){const p=c*h,m=c*f,g=u*h,S=u*f;n[0]=p+S*o,n[4]=g*o-m,n[8]=a*u,n[1]=a*f,n[5]=a*h,n[9]=-o,n[2]=m*o-g,n[6]=S+p*o,n[10]=a*c}else if(e.order==="ZXY"){const p=c*h,m=c*f,g=u*h,S=u*f;n[0]=p-S*o,n[4]=-a*f,n[8]=g+m*o,n[1]=m+g*o,n[5]=a*h,n[9]=S-p*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const p=a*h,m=a*f,g=o*h,S=o*f;n[0]=c*h,n[4]=g*u-m,n[8]=p*u+S,n[1]=c*f,n[5]=S*u+p,n[9]=m*u-g,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const p=a*c,m=a*u,g=o*c,S=o*u;n[0]=c*h,n[4]=S-p*f,n[8]=g*f+m,n[1]=f,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*f+g,n[10]=p-S*f}else if(e.order==="XZY"){const p=a*c,m=a*u,g=o*c,S=o*u;n[0]=c*h,n[4]=-f,n[8]=u*h,n[1]=p*f+S,n[5]=a*h,n[9]=m*f-g,n[2]=g*f-m,n[6]=o*h,n[10]=S*f+p}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_y,e,yy)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ai.crossVectors(i,un),Ai.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ai.crossVectors(i,un)),Ai.normalize(),ho.crossVectors(un,Ai),r[0]=Ai.x,r[4]=ho.x,r[8]=un.x,r[1]=Ai.y,r[5]=ho.y,r[9]=un.y,r[2]=Ai.z,r[6]=ho.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],f=i[5],p=i[9],m=i[13],g=i[2],S=i[6],x=i[10],d=i[14],v=i[3],_=i[7],M=i[11],N=i[15],T=r[0],A=r[4],P=r[8],V=r[12],y=r[1],w=r[5],F=r[9],B=r[13],W=r[2],q=r[6],G=r[10],J=r[14],L=r[3],$=r[7],K=r[11],re=r[15];return s[0]=a*T+o*y+c*W+u*L,s[4]=a*A+o*w+c*q+u*$,s[8]=a*P+o*F+c*G+u*K,s[12]=a*V+o*B+c*J+u*re,s[1]=h*T+f*y+p*W+m*L,s[5]=h*A+f*w+p*q+m*$,s[9]=h*P+f*F+p*G+m*K,s[13]=h*V+f*B+p*J+m*re,s[2]=g*T+S*y+x*W+d*L,s[6]=g*A+S*w+x*q+d*$,s[10]=g*P+S*F+x*G+d*K,s[14]=g*V+S*B+x*J+d*re,s[3]=v*T+_*y+M*W+N*L,s[7]=v*A+_*w+M*q+N*$,s[11]=v*P+_*F+M*G+N*K,s[15]=v*V+_*B+M*J+N*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],f=e[6],p=e[10],m=e[14],g=e[3],S=e[7],x=e[11],d=e[15];return g*(+s*c*f-r*u*f-s*o*p+i*u*p+r*o*m-i*c*m)+S*(+n*c*m-n*u*p+s*a*p-r*a*m+r*u*h-s*c*h)+x*(+n*u*f-n*o*m-s*a*f+i*a*m+s*o*h-i*u*h)+d*(-r*o*h-n*c*f+n*o*p+r*a*f-i*a*p+i*c*h)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],f=e[9],p=e[10],m=e[11],g=e[12],S=e[13],x=e[14],d=e[15],v=f*x*u-S*p*u+S*c*m-o*x*m-f*c*d+o*p*d,_=g*p*u-h*x*u-g*c*m+a*x*m+h*c*d-a*p*d,M=h*S*u-g*f*u+g*o*m-a*S*m-h*o*d+a*f*d,N=g*f*c-h*S*c-g*o*p+a*S*p+h*o*x-a*f*x,T=n*v+i*_+r*M+s*N;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=v*A,e[1]=(S*p*s-f*x*s-S*r*m+i*x*m+f*r*d-i*p*d)*A,e[2]=(o*x*s-S*c*s+S*r*u-i*x*u-o*r*d+i*c*d)*A,e[3]=(f*c*s-o*p*s-f*r*u+i*p*u+o*r*m-i*c*m)*A,e[4]=_*A,e[5]=(h*x*s-g*p*s+g*r*m-n*x*m-h*r*d+n*p*d)*A,e[6]=(g*c*s-a*x*s-g*r*u+n*x*u+a*r*d-n*c*d)*A,e[7]=(a*p*s-h*c*s+h*r*u-n*p*u-a*r*m+n*c*m)*A,e[8]=M*A,e[9]=(g*f*s-h*S*s-g*i*m+n*S*m+h*i*d-n*f*d)*A,e[10]=(a*S*s-g*o*s+g*i*u-n*S*u-a*i*d+n*o*d)*A,e[11]=(h*o*s-a*f*s-h*i*u+n*f*u+a*i*m-n*o*m)*A,e[12]=N*A,e[13]=(h*S*r-g*f*r+g*i*p-n*S*p-h*i*x+n*f*x)*A,e[14]=(g*o*r-a*S*r-g*i*c+n*S*c+a*i*x-n*o*x)*A,e[15]=(a*f*r-h*o*r+h*i*c-n*f*c-a*i*p+n*o*p)*A,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,f=o+o,p=s*u,m=s*h,g=s*f,S=a*h,x=a*f,d=o*f,v=c*u,_=c*h,M=c*f,N=i.x,T=i.y,A=i.z;return r[0]=(1-(S+d))*N,r[1]=(m+M)*N,r[2]=(g-_)*N,r[3]=0,r[4]=(m-M)*T,r[5]=(1-(p+d))*T,r[6]=(x+v)*T,r[7]=0,r[8]=(g+_)*A,r[9]=(x-v)*A,r[10]=(1-(p+S))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=kr.set(r[0],r[1],r[2]).length();const a=kr.set(r[4],r[5],r[6]).length(),o=kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);const u=1/s,h=1/a,f=1/o;return Dn.elements[0]*=u,Dn.elements[1]*=u,Dn.elements[2]*=u,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,n.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=fi){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),p=(i+r)/(i-r);let m,g;if(o===fi)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===El)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=fi){const c=this.elements,u=1/(n-e),h=1/(i-r),f=1/(a-s),p=(n+e)*u,m=(i+r)*h;let g,S;if(o===fi)g=(a+s)*f,S=-2*f;else if(o===El)g=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=S,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const kr=new k,Dn=new ft,_y=new k(0,0,0),yy=new k(1,1,1),Ai=new k,ho=new k,un=new k,Cp=new ft,Rp=new Oa;class Jn{constructor(e=0,n=0,i=0,r=Jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],f=r[2],p=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(p,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Wt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Rp.setFromEuler(this),this.setFromQuaternion(Rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Jn.DEFAULT_ORDER="XYZ";class Vf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sy=0;const Np=new k,Or=new Oa,ii=new ft,po=new k,Ys=new k,My=new k,Ey=new Oa,Pp=new k(1,0,0),Lp=new k(0,1,0),Dp=new k(0,0,1),Ip={type:"added"},wy={type:"removed"},zr={type:"childadded",child:null},Fc={type:"childremoved",child:null};class Ut extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sy++}),this.uuid=ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ut.DEFAULT_UP.clone();const e=new k,n=new Jn,i=new Oa,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new Oe}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=Ut.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.multiply(Or),this}rotateOnWorldAxis(e,n){return Or.setFromAxisAngle(e,n),this.quaternion.premultiply(Or),this}rotateX(e){return this.rotateOnAxis(Pp,e)}rotateY(e){return this.rotateOnAxis(Lp,e)}rotateZ(e){return this.rotateOnAxis(Dp,e)}translateOnAxis(e,n){return Np.copy(e).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Pp,e)}translateY(e){return this.translateOnAxis(Lp,e)}translateZ(e){return this.translateOnAxis(Dp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?po.copy(e):po.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ii.lookAt(Ys,po,this.up):ii.lookAt(po,Ys,this.up),this.quaternion.setFromRotationMatrix(ii),r&&(ii.extractRotation(r.matrixWorld),Or.setFromRotationMatrix(ii),this.quaternion.premultiply(Or.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ip),zr.child=e,this.dispatchEvent(zr),zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(wy),Fc.child=e,this.dispatchEvent(Fc),Fc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ip),zr.child=e,this.dispatchEvent(zr),zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ys,Ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const f=c[u];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),p.length>0&&(i.skeletons=p),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ut.DEFAULT_UP=new k(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,ri=new k,Bc=new k,si=new k,jr=new k,Hr=new k,Up=new k,kc=new k,Oc=new k,zc=new k,jc=new _t,Hc=new _t,Gc=new _t;class On{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ri.subVectors(i,n),Bc.subVectors(e,n);const a=In.dot(In),o=In.dot(ri),c=In.dot(Bc),u=ri.dot(ri),h=ri.dot(Bc),f=a*u-o*o;if(f===0)return s.set(0,0,0),null;const p=1/f,m=(u*c-o*h)*p,g=(a*h-o*c)*p;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,si)===null?!1:si.x>=0&&si.y>=0&&si.x+si.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,si)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,si.x),c.addScaledVector(a,si.y),c.addScaledVector(o,si.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return jc.setScalar(0),Hc.setScalar(0),Gc.setScalar(0),jc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(jc,s.x),a.addScaledVector(Hc,s.y),a.addScaledVector(Gc,s.z),a}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ri.subVectors(e,n),In.cross(ri).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),In.cross(ri).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return On.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return On.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return On.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return On.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return On.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Hr.subVectors(s,i),kc.subVectors(e,i);const c=jr.dot(kc),u=Hr.dot(kc);if(c<=0&&u<=0)return n.copy(i);Oc.subVectors(e,r);const h=jr.dot(Oc),f=Hr.dot(Oc);if(h>=0&&f<=h)return n.copy(r);const p=c*f-h*u;if(p<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(jr,a);zc.subVectors(e,s);const m=jr.dot(zc),g=Hr.dot(zc);if(g>=0&&m<=g)return n.copy(s);const S=m*u-c*g;if(S<=0&&u>=0&&g<=0)return o=u/(u-g),n.copy(i).addScaledVector(Hr,o);const x=h*g-m*f;if(x<=0&&f-h>=0&&m-g>=0)return Up.subVectors(s,r),o=(f-h)/(f-h+(m-g)),n.copy(r).addScaledVector(Up,o);const d=1/(x+S+p);return a=S*d,o=p*d,n.copy(i).addScaledVector(jr,a).addScaledVector(Hr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ti={h:0,s:0,l:0},mo={h:0,s:0,l:0};function Vc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class He{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=oy(e,1),n=Wt(n,0,1),i=Wt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Vc(a,s,e+1/3),this.g=Vc(a,s,e),this.b=Vc(a,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,n=Xn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xn){const i=i0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xn){return et.fromWorkingColorSpace(zt.copy(this),e),Math.round(Wt(zt.r*255,0,255))*65536+Math.round(Wt(zt.g*255,0,255))*256+Math.round(Wt(zt.b*255,0,255))}getHexString(e=Xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.fromWorkingColorSpace(zt.copy(this),n);const i=zt.r,r=zt.g,s=zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case i:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-i)/f+2;break;case s:c=(i-r)/f+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.fromWorkingColorSpace(zt.copy(this),n),e.r=zt.r,e.g=zt.g,e.b=zt.b,e}getStyle(e=Xn){et.fromWorkingColorSpace(zt.copy(this),e);const n=zt.r,i=zt.g,r=zt.b;return e!==Xn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ti),this.setHSL(Ti.h+e,Ti.s+n,Ti.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ti),e.getHSL(mo);const i=Ac(Ti.h,mo.h,n),r=Ac(Ti.s,mo.s,n),s=Ac(Ti.l,mo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zt=new He;He.NAMES=i0;let by=0;class Ds extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=ka(),this.name="",this.type="Material",this.blending=fs,this.side=Yi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ku,this.blendDst=Zu,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dr,this.stencilZFail=Dr,this.stencilZPass=Dr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(i.blending=this.blending),this.side!==Yi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ku&&(i.blendSrc=this.blendSrc),this.blendDst!==Zu&&(i.blendDst=this.blendDst),this.blendEquation!==dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Dr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Dr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Dr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class da extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=Og,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new k,xo=new We;class Qn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Mp,this.updateRanges=[],this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)xo.fromBufferAttribute(this,n),xo.applyMatrix3(e),this.setXY(n,xo.x,xo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Zt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vs(n,this.array)),n}setX(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vs(n,this.array)),n}setY(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vs(n,this.array)),n}setW(e,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Zt(n,this.array),i=Zt(i,this.array),r=Zt(r,this.array),s=Zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Mp&&(e.usage=this.usage),e}}class r0 extends Qn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class s0 extends Qn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class mt extends Qn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Ay=0;const Sn=new ft,Wc=new Ut,Gr=new k,dn=new za,$s=new za,Rt=new k;class on extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=ka(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(e0(e)?s0:r0)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,n,i){return Sn.makeTranslation(e,n,i),this.applyMatrix4(Sn),this}scale(e,n,i){return Sn.makeScale(e,n,i),this.applyMatrix4(Sn),this}lookAt(e){return Wc.lookAt(e),Wc.updateMatrix(),this.applyMatrix4(Wc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gr).negate(),this.translate(Gr.x,Gr.y,Gr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new mt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new za);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Rt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Rt),Rt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Rt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(Rt.addVectors(dn.min,$s.min),dn.expandByPoint(Rt),Rt.addVectors(dn.max,$s.max),dn.expandByPoint(Rt)):(dn.expandByPoint($s.min),dn.expandByPoint($s.max))}dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Rt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Rt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)Rt.fromBufferAttribute(o,u),c&&(Gr.fromBufferAttribute(e,u),Rt.add(Gr)),r=Math.max(r,i.distanceToSquared(Rt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<i.count;P++)o[P]=new k,c[P]=new k;const u=new k,h=new k,f=new k,p=new We,m=new We,g=new We,S=new k,x=new k;function d(P,V,y){u.fromBufferAttribute(i,P),h.fromBufferAttribute(i,V),f.fromBufferAttribute(i,y),p.fromBufferAttribute(s,P),m.fromBufferAttribute(s,V),g.fromBufferAttribute(s,y),h.sub(u),f.sub(u),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(S.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(w),x.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(w),o[P].add(S),o[V].add(S),o[y].add(S),c[P].add(x),c[V].add(x),c[y].add(x))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,V=v.length;P<V;++P){const y=v[P],w=y.start,F=y.count;for(let B=w,W=w+F;B<W;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new k,M=new k,N=new k,T=new k;function A(P){N.fromBufferAttribute(r,P),T.copy(N);const V=o[P];_.copy(V),_.sub(N.multiplyScalar(N.dot(V))).normalize(),M.crossVectors(T,V);const w=M.dot(c[P])<0?-1:1;a.setXYZW(P,_.x,_.y,_.z,w)}for(let P=0,V=v.length;P<V;++P){const y=v[P],w=y.start,F=y.count;for(let B=w,W=w+F;B<W;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Qn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let p=0,m=i.count;p<m;p++)i.setXYZ(p,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,u=new k,h=new k,f=new k;if(e)for(let p=0,m=e.count;p<m;p+=3){const g=e.getX(p+0),S=e.getX(p+1),x=e.getX(p+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),a.fromBufferAttribute(n,x),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,S),u.fromBufferAttribute(i,x),o.add(h),c.add(h),u.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(S,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let p=0,m=n.count;p<m;p+=3)r.fromBufferAttribute(n,p+0),s.fromBufferAttribute(n,p+1),a.fromBufferAttribute(n,p+2),h.subVectors(a,s),f.subVectors(r,s),h.cross(f),i.setXYZ(p+0,h.x,h.y,h.z),i.setXYZ(p+1,h.x,h.y,h.z),i.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Rt.fromBufferAttribute(e,n),Rt.normalize(),e.setXYZ(n,Rt.x,Rt.y,Rt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,f=o.normalized,p=new u.constructor(c.length*h);let m=0,g=0;for(let S=0,x=c.length;S<x;S++){o.isInterleavedBufferAttribute?m=c[S]*o.data.stride+o.offset:m=c[S]*h;for(let d=0;d<h;d++)p[g++]=u[m++]}return new Qn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new on,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,f=u.length;h<f;h++){const p=u[h],m=e(p,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let f=0,p=u.length;f<p;f++){const m=u[f];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],f=s[u];for(let p=0,m=f.length;p<m;p++)h.push(f[p].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fp=new ft,ir=new Gf,go=new Wl,Bp=new k,vo=new k,_o=new k,yo=new k,Xc=new k,So=new k,kp=new k,Mo=new k;class Ye extends Ut{constructor(e=new on,n=new da){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){So.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],f=s[c];h!==0&&(Xc.fromBufferAttribute(f,e),a?So.addScaledVector(Xc,h):So.addScaledVector(Xc.sub(n),h))}n.add(So)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(go.containsPoint(ir.origin)===!1&&(ir.intersectSphere(go,Bp)===null||ir.origin.distanceToSquared(Bp)>(e.far-e.near)**2))&&(Fp.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Fp),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ir)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,f=s.attributes.normal,p=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const x=p[g],d=a[x.materialIndex],v=Math.max(x.start,m.start),_=Math.min(o.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,N=_;M<N;M+=3){const T=o.getX(M),A=o.getX(M+1),P=o.getX(M+2);r=Eo(this,d,e,i,u,h,f,T,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(o.count,m.start+m.count);for(let x=g,d=S;x<d;x+=3){const v=o.getX(x),_=o.getX(x+1),M=o.getX(x+2);r=Eo(this,a,e,i,u,h,f,v,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,S=p.length;g<S;g++){const x=p[g],d=a[x.materialIndex],v=Math.max(x.start,m.start),_=Math.min(c.count,Math.min(x.start+x.count,m.start+m.count));for(let M=v,N=_;M<N;M+=3){const T=M,A=M+1,P=M+2;r=Eo(this,d,e,i,u,h,f,T,A,P),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),S=Math.min(c.count,m.start+m.count);for(let x=g,d=S;x<d;x+=3){const v=x,_=x+1,M=x+2;r=Eo(this,a,e,i,u,h,f,v,_,M),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function Ty(t,e,n,i,r,s,a,o){let c;if(e.side===sn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Yi,o),c===null)return null;Mo.copy(o),Mo.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Mo);return u<n.near||u>n.far?null:{distance:u,point:Mo.clone(),object:t}}function Eo(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,vo),t.getVertexPosition(c,_o),t.getVertexPosition(u,yo);const h=Ty(t,e,n,i,vo,_o,yo,kp);if(h){const f=new k;On.getBarycoord(kp,vo,_o,yo,f),r&&(h.uv=On.getInterpolatedAttribute(r,o,c,u,f,new We)),s&&(h.uv1=On.getInterpolatedAttribute(s,o,c,u,f,new We)),a&&(h.normal=On.getInterpolatedAttribute(a,o,c,u,f,new k),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const p={a:o,b:c,c:u,normal:new k,materialIndex:0};On.getNormal(vo,_o,yo,p.normal),h.face=p,h.barycoord=f}return h}class Nr extends on{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],f=[];let p=0,m=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(f,2));function g(S,x,d,v,_,M,N,T,A,P,V){const y=M/A,w=N/P,F=M/2,B=N/2,W=T/2,q=A+1,G=P+1;let J=0,L=0;const $=new k;for(let K=0;K<G;K++){const re=K*w-B;for(let be=0;be<q;be++){const ze=be*y-F;$[S]=ze*v,$[x]=re*_,$[d]=W,u.push($.x,$.y,$.z),$[S]=0,$[x]=0,$[d]=T>0?1:-1,h.push($.x,$.y,$.z),f.push(be/A),f.push(1-K/P),J+=1}}for(let K=0;K<P;K++)for(let re=0;re<A;re++){const be=p+re+q*K,ze=p+re+q*(K+1),z=p+(re+1)+q*(K+1),Y=p+(re+1)+q*K;c.push(be,ze,Y),c.push(ze,z,Y),L+=6}o.addGroup(m,L,V),m+=L,p+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Gt(t){const e={};for(let n=0;n<t.length;n++){const i=Ts(t[n]);for(const r in i)e[r]=i[r]}return e}function Cy(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function a0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const Ry={clone:Ts,merge:Gt};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class o0 extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft,this.coordinateSystem=fi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ci=new k,Op=new We,zp=new We;class pn extends o0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ud*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ud*2*Math.atan(Math.tan(bc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z),Ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ci.x,Ci.y).multiplyScalar(-e/Ci.z)}getViewSize(e,n){return this.getViewBounds(e,Op,zp),n.subVectors(zp,Op)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vr=-90,Wr=1;class Ly extends Ut{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Vr,Wr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Vr,Wr,e,n);s.layers=this.layers,this.add(s);const a=new pn(Vr,Wr,e,n);a.layers=this.layers,this.add(a);const o=new pn(Vr,Wr,e,n);o.layers=this.layers,this.add(o);const c=new pn(Vr,Wr,e,n);c.layers=this.layers,this.add(c);const u=new pn(Vr,Wr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===El)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,c),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,h),e.setRenderTarget(f,p,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class l0 extends an{constructor(e,n,i,r,s,a,o,c,u,h){e=e!==void 0?e:[],n=n!==void 0?n:Es,super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dy extends Tr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new l0(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Nr(5,5,5),s=new $i({name:"CubemapFromEquirect",uniforms:Ts(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Vi});s.uniforms.tEquirect.value=n;const a=new Ye(r,s),o=n.minFilter;return n.minFilter===gr&&(n.minFilter=kn),new Ly(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const qc=new k,Iy=new k,Uy=new Oe;class cr{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=qc.subVectors(i,n).cross(Iy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(qc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Uy.getNormalMatrix(e),r=this.coplanarPoint(qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new Wl,wo=new k;class Wf{constructor(e=new cr,n=new cr,i=new cr,r=new cr,s=new cr,a=new cr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=fi){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],c=r[3],u=r[4],h=r[5],f=r[6],p=r[7],m=r[8],g=r[9],S=r[10],x=r[11],d=r[12],v=r[13],_=r[14],M=r[15];if(i[0].setComponents(c-s,p-u,x-m,M-d).normalize(),i[1].setComponents(c+s,p+u,x+m,M+d).normalize(),i[2].setComponents(c+a,p+h,x+g,M+v).normalize(),i[3].setComponents(c-a,p-h,x-g,M-v).normalize(),i[4].setComponents(c-o,p-f,x-S,M-_).normalize(),n===fi)i[5].setComponents(c+o,p+f,x+S,M+_).normalize();else if(n===El)i[5].setComponents(o,f,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){return rr.center.set(0,0,0),rr.radius=.7071067811865476,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(wo.x=r.normal.x>0?e.max.x:e.min.x,wo.y=r.normal.y>0?e.max.y:e.min.y,wo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function c0(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Fy(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,f=u.byteLength,p=t.createBuffer();t.bindBuffer(c,p),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:p,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,c,u){const h=c.array,f=c.updateRanges;if(t.bindBuffer(u,o),f.length===0)t.bufferSubData(u,0,h);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){const g=f[p],S=f[m];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++p,f[p]=S)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){const S=f[m];t.bufferSubData(u,S.start*h.BYTES_PER_ELEMENT,h,S.start,S.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}class Cs extends on{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,f=e/o,p=n/c,m=[],g=[],S=[],x=[];for(let d=0;d<h;d++){const v=d*p-a;for(let _=0;_<u;_++){const M=_*f-s;g.push(M,-v,0),S.push(0,0,1),x.push(_/o),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let v=0;v<o;v++){const _=v+u*d,M=v+u*(d+1),N=v+1+u*(d+1),T=v+1+u*d;m.push(_,M,T),m.push(M,N,T)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cs(e.width,e.height,e.widthSegments,e.heightSegments)}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ky=`#ifdef USE_ALPHAHASH
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
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gy=`#ifdef USE_AOMAP
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
#endif`,Vy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wy=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$y=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ky=`#ifdef USE_IRIDESCENCE
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
#endif`,Zy=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,aS=`#define PI 3.141592653589793
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
} // validated`,oS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,lS=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hS="gl_FragColor = linearToOutputTexel( gl_FragColor );",pS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mS=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,xS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
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
#endif`,yS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,SS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ES=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wS=`#ifdef USE_GRADIENTMAP
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
}`,bS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CS=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,RS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
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
	#endif
#endif`,NS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,IS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,US=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,FS=`
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,kS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,OS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,GS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,XS=`#if defined( USE_POINTS_UV )
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
#endif`,qS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,$S=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,KS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ZS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,QS=`#ifdef USE_MORPHTARGETS
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
#endif`,JS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sM=`#ifdef USE_NORMALMAP
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
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,fM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,_M=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,yM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,MM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EM=`#ifdef USE_SKINNING
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
#endif`,wM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bM=`#ifdef USE_SKINNING
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
#endif`,AM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,CM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NM=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const FM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BM=`uniform sampler2D t2D;
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
}`,kM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,GM=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
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
}`,WM=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YM=`uniform float scale;
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
}`,$M=`uniform vec3 diffuse;
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
}`,KM=`#include <common>
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
}`,ZM=`uniform vec3 diffuse;
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
}`,QM=`#define LAMBERT
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
}`,JM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eE=`#define MATCAP
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
}`,tE=`#define MATCAP
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
}`,nE=`#define NORMAL
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
}`,iE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rE=`#define PHONG
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
}`,sE=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
}`,aE=`#define STANDARD
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
}`,oE=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,lE=`#define TOON
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
}`,cE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,uE=`uniform float size;
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
}`,dE=`uniform vec3 diffuse;
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
}`,fE=`#include <common>
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
}`,hE=`uniform vec3 color;
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
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pE=`uniform float rotation;
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
}`,mE=`uniform vec3 diffuse;
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
}`,ke={alphahash_fragment:By,alphahash_pars_fragment:ky,alphamap_fragment:Oy,alphamap_pars_fragment:zy,alphatest_fragment:jy,alphatest_pars_fragment:Hy,aomap_fragment:Gy,aomap_pars_fragment:Vy,batching_pars_vertex:Wy,batching_vertex:Xy,begin_vertex:qy,beginnormal_vertex:Yy,bsdfs:$y,iridescence_fragment:Ky,bumpmap_pars_fragment:Zy,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:Jy,clipping_planes_pars_vertex:eS,clipping_planes_vertex:tS,color_fragment:nS,color_pars_fragment:iS,color_pars_vertex:rS,color_vertex:sS,common:aS,cube_uv_reflection_fragment:oS,defaultnormal_vertex:lS,displacementmap_pars_vertex:cS,displacementmap_vertex:uS,emissivemap_fragment:dS,emissivemap_pars_fragment:fS,colorspace_fragment:hS,colorspace_pars_fragment:pS,envmap_fragment:mS,envmap_common_pars_fragment:xS,envmap_pars_fragment:gS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:RS,envmap_vertex:_S,fog_vertex:yS,fog_pars_vertex:SS,fog_fragment:MS,fog_pars_fragment:ES,gradientmap_pars_fragment:wS,lightmap_pars_fragment:bS,lights_lambert_fragment:AS,lights_lambert_pars_fragment:TS,lights_pars_begin:CS,lights_toon_fragment:NS,lights_toon_pars_fragment:PS,lights_phong_fragment:LS,lights_phong_pars_fragment:DS,lights_physical_fragment:IS,lights_physical_pars_fragment:US,lights_fragment_begin:FS,lights_fragment_maps:BS,lights_fragment_end:kS,logdepthbuf_fragment:OS,logdepthbuf_pars_fragment:zS,logdepthbuf_pars_vertex:jS,logdepthbuf_vertex:HS,map_fragment:GS,map_pars_fragment:VS,map_particle_fragment:WS,map_particle_pars_fragment:XS,metalnessmap_fragment:qS,metalnessmap_pars_fragment:YS,morphinstance_vertex:$S,morphcolor_vertex:KS,morphnormal_vertex:ZS,morphtarget_pars_vertex:QS,morphtarget_vertex:JS,normal_fragment_begin:eM,normal_fragment_maps:tM,normal_pars_fragment:nM,normal_pars_vertex:iM,normal_vertex:rM,normalmap_pars_fragment:sM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:oM,clearcoat_pars_fragment:lM,iridescence_pars_fragment:cM,opaque_fragment:uM,packing:dM,premultiplied_alpha_fragment:fM,project_vertex:hM,dithering_fragment:pM,dithering_pars_fragment:mM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:_M,shadowmap_vertex:yM,shadowmask_pars_fragment:SM,skinbase_vertex:MM,skinning_pars_vertex:EM,skinning_vertex:wM,skinnormal_vertex:bM,specularmap_fragment:AM,specularmap_pars_fragment:TM,tonemapping_fragment:CM,tonemapping_pars_fragment:RM,transmission_fragment:NM,transmission_pars_fragment:PM,uv_pars_fragment:LM,uv_pars_vertex:DM,uv_vertex:IM,worldpos_vertex:UM,background_vert:FM,background_frag:BM,backgroundCube_vert:kM,backgroundCube_frag:OM,cube_vert:zM,cube_frag:jM,depth_vert:HM,depth_frag:GM,distanceRGBA_vert:VM,distanceRGBA_frag:WM,equirect_vert:XM,equirect_frag:qM,linedashed_vert:YM,linedashed_frag:$M,meshbasic_vert:KM,meshbasic_frag:ZM,meshlambert_vert:QM,meshlambert_frag:JM,meshmatcap_vert:eE,meshmatcap_frag:tE,meshnormal_vert:nE,meshnormal_frag:iE,meshphong_vert:rE,meshphong_frag:sE,meshphysical_vert:aE,meshphysical_frag:oE,meshtoon_vert:lE,meshtoon_frag:cE,points_vert:uE,points_frag:dE,shadow_vert:fE,shadow_frag:hE,sprite_vert:pE,sprite_frag:mE},le={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},qn={basic:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Gt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Gt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Gt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new He(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Gt([le.points,le.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Gt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Gt([le.common,le.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Gt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Gt([le.sprite,le.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Gt([le.common,le.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Gt([le.lights,le.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};qn.physical={uniforms:Gt([qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const bo={r:0,b:0,g:0},sr=new Jn,xE=new ft;function gE(t,e,n,i,r,s,a){const o=new He(0);let c=s===!0?0:1,u,h,f=null,p=0,m=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function S(v){let _=!1;const M=g(v);M===null?d(o,c):M&&M.isColor&&(d(M,1),_=!0);const N=t.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(v,_){const M=g(_);M&&(M.isCubeTexture||M.mapping===Gl)?(h===void 0&&(h=new Ye(new Nr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:Ts(qn.backgroundCube.uniforms),vertexShader:qn.backgroundCube.vertexShader,fragmentShader:qn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),sr.copy(_.backgroundRotation),sr.x*=-1,sr.y*=-1,sr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(sr.y*=-1,sr.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(sr)),h.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,(f!==M||p!==M.version||m!==t.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,m=t.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(u===void 0&&(u=new Ye(new Cs(2,2),new $i({name:"BackgroundMaterial",uniforms:Ts(qn.background.uniforms),vertexShader:qn.background.vertexShader,fragmentShader:qn.background.fragmentShader,side:Yi,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=M,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=et.getTransfer(M.colorSpace)!==lt,M.matrixAutoUpdate===!0&&M.updateMatrix(),u.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||m!==t.toneMapping)&&(u.material.needsUpdate=!0,f=M,p=M.version,m=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,_){v.getRGB(bo,a0(t)),i.buffers.color.setClear(bo.r,bo.g,bo.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),c=_,d(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(v){c=v,d(o,c)},render:S,addToRenderList:x}}function vE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=p(null);let s=r,a=!1;function o(y,w,F,B,W){let q=!1;const G=f(B,F,w);s!==G&&(s=G,u(s.object)),q=m(y,B,F,W),q&&g(y,B,F,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,M(y,w,F,B),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function c(){return t.createVertexArray()}function u(y){return t.bindVertexArray(y)}function h(y){return t.deleteVertexArray(y)}function f(y,w,F){const B=F.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let q=W[w.id];q===void 0&&(q={},W[w.id]=q);let G=q[B];return G===void 0&&(G=p(c()),q[B]=G),G}function p(y){const w=[],F=[],B=[];for(let W=0;W<n;W++)w[W]=0,F[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:F,attributeDivisors:B,object:y,attributes:{},index:null}}function m(y,w,F,B){const W=s.attributes,q=w.attributes;let G=0;const J=F.getAttributes();for(const L in J)if(J[L].location>=0){const K=W[L];let re=q[L];if(re===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(re=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(re=y.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;G++}return s.attributesNum!==G||s.index!==B}function g(y,w,F,B){const W={},q=w.attributes;let G=0;const J=F.getAttributes();for(const L in J)if(J[L].location>=0){let K=q[L];K===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(K=y.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),W[L]=re,G++}s.attributes=W,s.attributesNum=G,s.index=B}function S(){const y=s.newAttributes;for(let w=0,F=y.length;w<F;w++)y[w]=0}function x(y){d(y,0)}function d(y,w){const F=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;F[y]=1,B[y]===0&&(t.enableVertexAttribArray(y),B[y]=1),W[y]!==w&&(t.vertexAttribDivisor(y,w),W[y]=w)}function v(){const y=s.newAttributes,w=s.enabledAttributes;for(let F=0,B=w.length;F<B;F++)w[F]!==y[F]&&(t.disableVertexAttribArray(F),w[F]=0)}function _(y,w,F,B,W,q,G){G===!0?t.vertexAttribIPointer(y,w,F,W,q):t.vertexAttribPointer(y,w,F,B,W,q)}function M(y,w,F,B){S();const W=B.attributes,q=F.getAttributes(),G=w.defaultAttributeValues;for(const J in q){const L=q[J];if(L.location>=0){let $=W[J];if($===void 0&&(J==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),J==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const K=$.normalized,re=$.itemSize,be=e.get($);if(be===void 0)continue;const ze=be.buffer,z=be.type,Y=be.bytesPerElement,se=z===t.INT||z===t.UNSIGNED_INT||$.gpuType===Ff;if($.isInterleavedBufferAttribute){const ne=$.data,Se=ne.stride,he=$.offset;if(ne.isInstancedInterleavedBuffer){for(let Ue=0;Ue<L.locationSize;Ue++)d(L.location+Ue,ne.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ue=0;Ue<L.locationSize;Ue++)x(L.location+Ue);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let Ue=0;Ue<L.locationSize;Ue++)_(L.location+Ue,re/L.locationSize,z,K,Se*Y,(he+re/L.locationSize*Ue)*Y,se)}else{if($.isInstancedBufferAttribute){for(let ne=0;ne<L.locationSize;ne++)d(L.location+ne,$.meshPerAttribute);y.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let ne=0;ne<L.locationSize;ne++)x(L.location+ne);t.bindBuffer(t.ARRAY_BUFFER,ze);for(let ne=0;ne<L.locationSize;ne++)_(L.location+ne,re/L.locationSize,z,K,re*Y,re/L.locationSize*ne*Y,se)}}else if(G!==void 0){const K=G[J];if(K!==void 0)switch(K.length){case 2:t.vertexAttrib2fv(L.location,K);break;case 3:t.vertexAttrib3fv(L.location,K);break;case 4:t.vertexAttrib4fv(L.location,K);break;default:t.vertexAttrib1fv(L.location,K)}}}}v()}function N(){P();for(const y in i){const w=i[y];for(const F in w){const B=w[F];for(const W in B)h(B[W].object),delete B[W];delete w[F]}delete i[y]}}function T(y){if(i[y.id]===void 0)return;const w=i[y.id];for(const F in w){const B=w[F];for(const W in B)h(B[W].object),delete B[W];delete w[F]}delete i[y.id]}function A(y){for(const w in i){const F=i[w];if(F[y.id]===void 0)continue;const B=F[y.id];for(const W in B)h(B[W].object),delete B[W];delete F[y.id]}}function P(){V(),a=!0,s!==r&&(s=r,u(s.object))}function V(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:S,enableAttribute:x,disableUnusedAttributes:v}}function _E(t,e,n){let i;function r(u){i=u}function s(u,h){t.drawArrays(i,u,h),n.update(h,i,1)}function a(u,h,f){f!==0&&(t.drawArraysInstanced(i,u,h,f),n.update(h,i,f))}function o(u,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];n.update(m,i,1)}function c(u,h,f,p){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],h[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(i,u,0,h,0,p,0,f);let g=0;for(let S=0;S<f;S++)g+=h[S];for(let S=0;S<p.length;S++)n.update(g,i,p[S])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function yE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==zn&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const P=A===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==_i&&i.convert(A)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==di&&!P)}function c(A){if(A==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=n.logarithmicDepthBuffer===!0,p=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,T=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:N,maxSamples:T}}function SE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new cr,o=new Oe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){const m=f.length!==0||p||i!==0||r;return r=p,i=f.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,p){n=h(f,p,0)},this.setState=function(f,p,m){const g=f.clippingPlanes,S=f.clipIntersection,x=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!x)s?h(null):u();else{const v=s?0:i,_=v*4;let M=d.clippingState||null;c.value=M,M=h(g,p,_,m);for(let N=0;N!==_;++N)M[N]=n[N];d.clippingState=M,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,p,m,g){const S=f!==null?f.length:0;let x=null;if(S!==0){if(x=c.value,g!==!0||x===null){const d=m+S*4,v=p.matrixWorldInverse;o.getNormalMatrix(v),(x===null||x.length<d)&&(x=new Float32Array(d));for(let _=0,M=m;_!==S;++_,M+=4)a.copy(f[_]).applyMatrix4(v,o),a.normal.toArray(x,M),x[M+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,x}}function ME(t){let e=new WeakMap;function n(a,o){return o===sd?a.mapping=Es:o===ad&&(a.mapping=ws),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===sd||o===ad)if(e.has(a)){const c=e.get(a).texture;return n(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const u=new Dy(c.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class u0 extends o0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ss=4,jp=[.125,.215,.35,.446,.526,.582],fr=20,Yc=new u0,Hp=new He;let $c=null,Kc=0,Zc=0,Qc=!1;const ur=(1+Math.sqrt(5))/2,Xr=1/ur,Gp=[new k(-ur,Xr,0),new k(ur,Xr,0),new k(-Xr,0,ur),new k(Xr,0,ur),new k(0,ur,-Xr),new k(0,ur,Xr),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class Vp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($c,Kc,Zc),this._renderer.xr.enabled=Qc,e.scissorTest=!1,Ao(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Es||e.mapping===ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$c=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),Zc=this._renderer.getActiveMipmapLevel(),Qc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:Ba,format:zn,colorSpace:Ji,depthBuffer:!1},r=Wp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(s)),this._blurMaterial=wE(s,e,n)}return r}_compileMaterial(e){const n=new Ye(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,r){const o=new pn(90,1,n,i),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Hp),h.toneMapping=Wi,h.autoClear=!1;const m=new da({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new Ye(new Nr,m);let S=!1;const x=e.background;x?x.isColor&&(m.color.copy(x),e.background=null,S=!0):(m.color.copy(Hp),S=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(o.up.set(0,c[d],0),o.lookAt(u[d],0,0)):v===1?(o.up.set(0,0,c[d]),o.lookAt(0,u[d],0)):(o.up.set(0,c[d],0),o.lookAt(0,0,u[d]));const _=this._cubeSize;Ao(r,v*_,d>2?_:0,_,_),h.setRenderTarget(r),S&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Es||e.mapping===ws;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=qp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ao(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Yc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Gp[(r-s-1)%Gp.length];this._blur(e,s-1,s,a,o)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const c=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ye(this._lodPlanes[r],u),p=u.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*fr-1),S=s/g,x=isFinite(s)?1+Math.floor(h*S):fr;x>fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${fr}`);const d=[];let v=0;for(let A=0;A<fr;++A){const P=A/S,V=Math.exp(-P*P/2);d.push(V),A===0?v+=V:A<x&&(v+=2*V)}for(let A=0;A<d.length;A++)d[A]=d[A]/v;p.envMap.value=e.texture,p.samples.value=x,p.weights.value=d,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-i;const M=this._sizeLods[r],N=3*M*(r>_-ss?r-_+ss:0),T=4*(this._cubeSize-M);Ao(n,N,T,3*M,2*M),c.setRenderTarget(n),c.render(f,Yc)}}function EE(t){const e=[],n=[],i=[];let r=t;const s=t-ss+1+jp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let c=1/o;a>t-ss?c=jp[a-t+ss-1]:a===0&&(c=0),i.push(c);const u=1/(o-2),h=-u,f=1+u,p=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,S=3,x=2,d=1,v=new Float32Array(S*g*m),_=new Float32Array(x*g*m),M=new Float32Array(d*g*m);for(let T=0;T<m;T++){const A=T%3*2/3-1,P=T>2?0:-1,V=[A,P,0,A+2/3,P,0,A+2/3,P+1,0,A,P,0,A+2/3,P+1,0,A,P+1,0];v.set(V,S*g*T),_.set(p,x*g*T);const y=[T,T,T,T,T,T];M.set(y,d*g*T)}const N=new on;N.setAttribute("position",new Qn(v,S)),N.setAttribute("uv",new Qn(_,x)),N.setAttribute("faceIndex",new Qn(M,d)),e.push(N),r>ss&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Wp(t,e,n){const i=new Tr(t,e,n);return i.texture.mapping=Gl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ao(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function wE(t,e,n){const i=new Float32Array(fr),r=new k(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Xp(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xf(),fragmentShader:`

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
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function qp(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vi,depthTest:!1,depthWrite:!1})}function Xf(){return`

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
	`}function bE(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const c=o.mapping,u=c===sd||c===ad,h=c===Es||c===ws;if(u||h){let f=e.get(o);const p=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return n===null&&(n=new Vp(t)),f=u?n.fromEquirectangular(o,f):n.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&r(m)?(n===null&&(n=new Vp(t)),f=u?n.fromEquirectangular(o):n.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function r(o){let c=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&c++;return c===u}function s(o){const c=o.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function AE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TE(t,e,n,i){const r={},s=new WeakMap;function a(f){const p=f.target;p.index!==null&&e.remove(p.index);for(const g in p.attributes)e.remove(p.attributes[g]);for(const g in p.morphAttributes){const S=p.morphAttributes[g];for(let x=0,d=S.length;x<d;x++)e.remove(S[x])}p.removeEventListener("dispose",a),delete r[p.id];const m=s.get(p);m&&(e.remove(m),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,n.memory.geometries--}function o(f,p){return r[p.id]===!0||(p.addEventListener("dispose",a),r[p.id]=!0,n.memory.geometries++),p}function c(f){const p=f.attributes;for(const g in p)e.update(p[g],t.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const S=m[g];for(let x=0,d=S.length;x<d;x++)e.update(S[x],t.ARRAY_BUFFER)}}function u(f){const p=[],m=f.index,g=f.attributes.position;let S=0;if(m!==null){const v=m.array;S=m.version;for(let _=0,M=v.length;_<M;_+=3){const N=v[_+0],T=v[_+1],A=v[_+2];p.push(N,T,T,A,A,N)}}else if(g!==void 0){const v=g.array;S=g.version;for(let _=0,M=v.length/3-1;_<M;_+=3){const N=_+0,T=_+1,A=_+2;p.push(N,T,T,A,A,N)}}else return;const x=new(e0(p)?s0:r0)(p,1);x.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,x)}function h(f){const p=s.get(f);if(p){const m=f.index;m!==null&&p.version<m.version&&u(f)}else u(f);return s.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function CE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,m){t.drawElements(i,m,s,p*a),n.update(m,i,1)}function u(p,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,p*a,g),n.update(m,i,g))}function h(p,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,p,0,g);let x=0;for(let d=0;d<g;d++)x+=m[d];n.update(x,i,1)}function f(p,m,g,S){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<p.length;d++)u(p[d]/a,m[d],S[d]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,p,0,S,0,g);let d=0;for(let v=0;v<g;v++)d+=m[v];for(let v=0;v<S.length;v++)n.update(d,i,S[v])}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function RE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function NE(t,e,n){const i=new WeakMap,r=new _t;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let p=i.get(o);if(p===void 0||p.count!==f){let y=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",y)};var m=y;p!==void 0&&p.texture.dispose();const g=o.morphAttributes.position!==void 0,S=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let M=0;g===!0&&(M=1),S===!0&&(M=2),x===!0&&(M=3);let N=o.attributes.position.count*M,T=1;N>e.maxTextureSize&&(T=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*T*4*f),P=new n0(A,N,T,f);P.type=di,P.needsUpdate=!0;const V=M*4;for(let w=0;w<f;w++){const F=d[w],B=v[w],W=_[w],q=N*T*4*w;for(let G=0;G<F.count;G++){const J=G*V;g===!0&&(r.fromBufferAttribute(F,G),A[q+J+0]=r.x,A[q+J+1]=r.y,A[q+J+2]=r.z,A[q+J+3]=0),S===!0&&(r.fromBufferAttribute(B,G),A[q+J+4]=r.x,A[q+J+5]=r.y,A[q+J+6]=r.z,A[q+J+7]=0),x===!0&&(r.fromBufferAttribute(W,G),A[q+J+8]=r.x,A[q+J+9]=r.y,A[q+J+10]=r.z,A[q+J+11]=W.itemSize===4?r.w:1)}}p={count:f,texture:P,size:new We(N,T)},i.set(o,p),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let x=0;x<u.length;x++)g+=u[x];const S=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",S),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}return{update:s}}function PE(t,e,n,i){let r=new WeakMap;function s(c){const u=i.render.frame,h=c.geometry,f=e.get(c,h);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==u&&(p.update(),r.set(p,u))}return f}function a(){r=new WeakMap}function o(c){const u=c.target;u.removeEventListener("dispose",o),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:a}}class d0 extends an{constructor(e,n,i,r,s,a,o,c,u,h=hs){if(h!==hs&&h!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===hs&&(i=Ar),i===void 0&&h===As&&(i=bs),super(null,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:An,this.minFilter=c!==void 0?c:An,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const f0=new an,Yp=new d0(1,1),h0=new n0,p0=new gy,m0=new l0,$p=[],Kp=[],Zp=new Float32Array(16),Qp=new Float32Array(9),Jp=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=$p[r];if(s===void 0&&(s=new Float32Array(r),$p[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Tt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ct(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Xl(t,e){let n=Kp[e];n===void 0&&(n=new Int32Array(e),Kp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function LE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2fv(this.addr,e),Ct(n,e)}}function IE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Tt(n,e))return;t.uniform3fv(this.addr,e),Ct(n,e)}}function UE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4fv(this.addr,e),Ct(n,e)}}function FE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Jp.set(i),t.uniformMatrix2fv(this.addr,!1,Jp),Ct(n,i)}}function BE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Qp.set(i),t.uniformMatrix3fv(this.addr,!1,Qp),Ct(n,i)}}function kE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Tt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ct(n,e)}else{if(Tt(n,i))return;Zp.set(i),t.uniformMatrix4fv(this.addr,!1,Zp),Ct(n,i)}}function OE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function zE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2iv(this.addr,e),Ct(n,e)}}function jE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3iv(this.addr,e),Ct(n,e)}}function HE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4iv(this.addr,e),Ct(n,e)}}function GE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function VE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Tt(n,e))return;t.uniform2uiv(this.addr,e),Ct(n,e)}}function WE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Tt(n,e))return;t.uniform3uiv(this.addr,e),Ct(n,e)}}function XE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Tt(n,e))return;t.uniform4uiv(this.addr,e),Ct(n,e)}}function qE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yp.compareFunction=Jg,s=Yp):s=f0,n.setTexture2D(e||s,r)}function YE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||p0,r)}function $E(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||m0,r)}function KE(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||h0,r)}function ZE(t){switch(t){case 5126:return LE;case 35664:return DE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return BE;case 35676:return kE;case 5124:case 35670:return OE;case 35667:case 35671:return zE;case 35668:case 35672:return jE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return VE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(t,e){t.uniform1fv(this.addr,e)}function JE(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function ew(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function tw(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function nw(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iw(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rw(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sw(t,e){t.uniform1iv(this.addr,e)}function aw(t,e){t.uniform2iv(this.addr,e)}function ow(t,e){t.uniform3iv(this.addr,e)}function lw(t,e){t.uniform4iv(this.addr,e)}function cw(t,e){t.uniform1uiv(this.addr,e)}function uw(t,e){t.uniform2uiv(this.addr,e)}function dw(t,e){t.uniform3uiv(this.addr,e)}function fw(t,e){t.uniform4uiv(this.addr,e)}function hw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||f0,s[a])}function pw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||p0,s[a])}function mw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||m0,s[a])}function xw(t,e,n){const i=this.cache,r=e.length,s=Xl(n,r);Tt(i,s)||(t.uniform1iv(this.addr,s),Ct(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||h0,s[a])}function gw(t){switch(t){case 5126:return QE;case 35664:return JE;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return aw;case 35668:case 35672:return ow;case 35669:case 35673:return lw;case 5125:return cw;case 36294:return uw;case 36295:return dw;case 36296:return fw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return xw}}class vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZE(n.type)}}class _w{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=gw(n.type)}}class yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Jc=/(\w+)(\])?(\[|\.)?/g;function em(t,e){t.seq.push(e),t.map[e.id]=e}function Sw(t,e,n){const i=t.name,r=i.length;for(Jc.lastIndex=0;;){const s=Jc.exec(i),a=Jc.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){em(n,u===void 0?new vw(o,t,e):new _w(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new yw(o),em(n,f)),n=f}}}class Yo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);Sw(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function tm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Mw=37297;let Ew=0;function ww(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function bw(t){const e=et.getPrimaries(et.workingColorSpace),n=et.getPrimaries(t);let i;switch(e===n?i="":e===Ml&&n===Sl?i="LinearDisplayP3ToLinearSRGB":e===Sl&&n===Ml&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case Vl:return[i,"LinearTransferOETF"];case Xn:case Hf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function nm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+ww(t.getShaderSource(e),a)}else return r}function Aw(t,e){const n=bw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Tw(t,e){let n;switch(e){case V1:n="Linear";break;case W1:n="Reinhard";break;case X1:n="Cineon";break;case zg:n="ACESFilmic";break;case Y1:n="AgX";break;case $1:n="Neutral";break;case q1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const To=new k;function Cw(){et.getLuminanceCoefficients(To);const t=To.x.toFixed(4),e=To.y.toFixed(4),n=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ta).join(`
`)}function Nw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Pw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ta(t){return t!==""}function im(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function rm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fd(t){return t.replace(Lw,Iw)}const Dw=new Map;function Iw(t,e){let n=ke[e];if(n===void 0){const i=Dw.get(e);if(i!==void 0)n=ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Fd(n)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sm(t){return t.replace(Uw,Fw)}function Fw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===kg?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Es:case ws:e="ENVMAP_TYPE_CUBE";break;case Gl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Ow(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case ws:e="ENVMAP_MODE_REFRACTION";break}return e}function zw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Og:e="ENVMAP_BLENDING_MULTIPLY";break;case H1:e="ENVMAP_BLENDING_MIX";break;case G1:e="ENVMAP_BLENDING_ADD";break}return e}function jw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Hw(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Bw(n),u=kw(n),h=Ow(n),f=zw(n),p=jw(n),m=Rw(n),g=Nw(s),S=r.createProgram();let x,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ta).join(`
`),d.length>0&&(d+=`
`)):(x=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ta).join(`
`),d=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Wi?"#define TONE_MAPPING":"",n.toneMapping!==Wi?ke.tonemapping_pars_fragment:"",n.toneMapping!==Wi?Tw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,Aw("linearToOutputTexel",n.outputColorSpace),Cw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ta).join(`
`)),a=Fd(a),a=im(a,n),a=rm(a,n),o=Fd(o),o=im(o,n),o=rm(o,n),a=sm(a),o=sm(o),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",n.glslVersion===Ep?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ep?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+x+a,M=v+d+o,N=tm(r,r.VERTEX_SHADER,_),T=tm(r,r.FRAGMENT_SHADER,M);r.attachShader(S,N),r.attachShader(S,T),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function A(w){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(N).trim(),W=r.getShaderInfoLog(T).trim();let q=!0,G=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,N,T);else{const J=nm(r,N,"vertex"),L=nm(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+F+`
`+J+`
`+L)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||W==="")&&(G=!1);G&&(w.diagnostics={runnable:q,programLog:F,vertexShader:{log:B,prefix:x},fragmentShader:{log:W,prefix:d}})}r.deleteShader(N),r.deleteShader(T),P=new Yo(r,S),V=Pw(r,S)}let P;this.getUniforms=function(){return P===void 0&&A(this),P};let V;this.getAttributes=function(){return V===void 0&&A(this),V};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(S,Mw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=N,this.fragmentShader=T,this}let Gw=0;class Vw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Ww(e),n.set(e,i)),i}}class Ww{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function Xw(t,e,n,i,r,s,a){const o=new Vf,c=new Vw,u=new Set,h=[],f=r.logarithmicDepthBuffer,p=r.reverseDepthBuffer,m=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return u.add(y),y===0?"uv":`uv${y}`}function d(y,w,F,B,W){const q=B.fog,G=W.geometry,J=y.isMeshStandardMaterial?B.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||J),$=L&&L.mapping===Gl?L.image.height:null,K=S[y.type];y.precision!==null&&(g=r.getMaxPrecision(y.precision),g!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",g,"instead."));const re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,be=re!==void 0?re.length:0;let ze=0;G.morphAttributes.position!==void 0&&(ze=1),G.morphAttributes.normal!==void 0&&(ze=2),G.morphAttributes.color!==void 0&&(ze=3);let z,Y,se,ne;if(K){const Kt=qn[K];z=Kt.vertexShader,Y=Kt.fragmentShader}else z=y.vertexShader,Y=y.fragmentShader,c.update(y),se=c.getVertexShaderID(y),ne=c.getFragmentShaderID(y);const Se=t.getRenderTarget(),he=W.isInstancedMesh===!0,Ue=W.isBatchedMesh===!0,je=!!y.map,Fe=!!y.matcap,R=!!L,Ge=!!y.aoMap,Le=!!y.lightMap,Ne=!!y.bumpMap,Te=!!y.normalMap,it=!!y.displacementMap,Ce=!!y.emissiveMap,C=!!y.metalnessMap,E=!!y.roughnessMap,O=y.anisotropy>0,Q=y.clearcoat>0,te=y.dispersion>0,Z=y.iridescence>0,Ee=y.sheen>0,ce=y.transmission>0,ge=O&&!!y.anisotropyMap,Ke=Q&&!!y.clearcoatMap,ae=Q&&!!y.clearcoatNormalMap,ve=Q&&!!y.clearcoatRoughnessMap,De=Z&&!!y.iridescenceMap,Ie=Z&&!!y.iridescenceThicknessMap,_e=Ee&&!!y.sheenColorMap,Xe=Ee&&!!y.sheenRoughnessMap,Be=!!y.specularMap,rt=!!y.specularColorMap,D=!!y.specularIntensityMap,pe=ce&&!!y.transmissionMap,X=ce&&!!y.thicknessMap,ee=!!y.gradientMap,ue=!!y.alphaMap,me=y.alphaTest>0,qe=!!y.alphaHash,Mt=!!y.extensions;let $t=Wi;y.toneMapped&&(Se===null||Se.isXRRenderTarget===!0)&&($t=t.toneMapping);const Ze={shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:z,fragmentShader:Y,defines:y.defines,customVertexShaderID:se,customFragmentShaderID:ne,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:g,batching:Ue,batchingColor:Ue&&W._colorsTexture!==null,instancing:he,instancingColor:he&&W.instanceColor!==null,instancingMorph:he&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Se===null?t.outputColorSpace:Se.isXRRenderTarget===!0?Se.texture.colorSpace:Ji,alphaToCoverage:!!y.alphaToCoverage,map:je,matcap:Fe,envMap:R,envMapMode:R&&L.mapping,envMapCubeUVHeight:$,aoMap:Ge,lightMap:Le,bumpMap:Ne,normalMap:Te,displacementMap:m&&it,emissiveMap:Ce,normalMapObjectSpace:Te&&y.normalMapType===J1,normalMapTangentSpace:Te&&y.normalMapType===Qg,metalnessMap:C,roughnessMap:E,anisotropy:O,anisotropyMap:ge,clearcoat:Q,clearcoatMap:Ke,clearcoatNormalMap:ae,clearcoatRoughnessMap:ve,dispersion:te,iridescence:Z,iridescenceMap:De,iridescenceThicknessMap:Ie,sheen:Ee,sheenColorMap:_e,sheenRoughnessMap:Xe,specularMap:Be,specularColorMap:rt,specularIntensityMap:D,transmission:ce,transmissionMap:pe,thicknessMap:X,gradientMap:ee,opaque:y.transparent===!1&&y.blending===fs&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:me,alphaHash:qe,combine:y.combine,mapUv:je&&x(y.map.channel),aoMapUv:Ge&&x(y.aoMap.channel),lightMapUv:Le&&x(y.lightMap.channel),bumpMapUv:Ne&&x(y.bumpMap.channel),normalMapUv:Te&&x(y.normalMap.channel),displacementMapUv:it&&x(y.displacementMap.channel),emissiveMapUv:Ce&&x(y.emissiveMap.channel),metalnessMapUv:C&&x(y.metalnessMap.channel),roughnessMapUv:E&&x(y.roughnessMap.channel),anisotropyMapUv:ge&&x(y.anisotropyMap.channel),clearcoatMapUv:Ke&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:_e&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(y.sheenRoughnessMap.channel),specularMapUv:Be&&x(y.specularMap.channel),specularColorMapUv:rt&&x(y.specularColorMap.channel),specularIntensityMapUv:D&&x(y.specularIntensityMap.channel),transmissionMapUv:pe&&x(y.transmissionMap.channel),thicknessMapUv:X&&x(y.thicknessMap.channel),alphaMapUv:ue&&x(y.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Te||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!G.attributes.uv&&(je||ue),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:ze,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:$t,decodeVideoTexture:je&&y.map.isVideoTexture===!0&&et.getTransfer(y.map.colorSpace)===lt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===wn,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Mt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&y.extensions.multiDraw===!0||Ue)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=u.has(1),Ze.vertexUv2s=u.has(2),Ze.vertexUv3s=u.has(3),u.clear(),Ze}function v(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)w.push(F),w.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(_(w,y),M(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function _(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),y.push(o.mask)}function N(y){const w=S[y.type];let F;if(w){const B=qn[w];F=Ry.clone(B.uniforms)}else F=y.uniforms;return F}function T(y,w){let F;for(let B=0,W=h.length;B<W;B++){const q=h[B];if(q.cacheKey===w){F=q,++F.usedTimes;break}}return F===void 0&&(F=new Hw(t,w,y,s),h.push(F)),F}function A(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function P(y){c.remove(y)}function V(){c.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:N,acquireProgram:T,releaseProgram:A,releaseShaderCache:P,programs:h,dispose:V}}function qw(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function om(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f,p,m,g,S,x){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:p,material:m,groupOrder:g,renderOrder:f.renderOrder,z:S,group:x},t[e]=d):(d.id=f.id,d.object=f,d.geometry=p,d.material=m,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=S,d.group=x),e++,d}function o(f,p,m,g,S,x){const d=a(f,p,m,g,S,x);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):n.push(d)}function c(f,p,m,g,S,x){const d=a(f,p,m,g,S,x);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,p){n.length>1&&n.sort(f||Yw),i.length>1&&i.sort(p||om),r.length>1&&r.sort(p||om)}function h(){for(let f=e,p=t.length;f<p;f++){const m=t[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:c,finish:h,sort:u}}function $w(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new lm,t.set(i,[a])):r>=s.length?(a=new lm,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new k,color:new He};break;case"SpotLight":n={position:new k,direction:new k,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new He,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new He,groundColor:new He};break;case"RectAreaLight":n={color:new He,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Qw=0;function Jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eb(t){const e=new Kw,n=Zw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new k);const r=new k,s=new ft,a=new ft;function o(u){let h=0,f=0,p=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let m=0,g=0,S=0,x=0,d=0,v=0,_=0,M=0,N=0,T=0,A=0;u.sort(Jw);for(let V=0,y=u.length;V<y;V++){const w=u[V],F=w.color,B=w.intensity,W=w.distance,q=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=F.r*B,f+=F.g*B,p+=F.b*B;else if(w.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(w.sh.coefficients[G],B);A++}else if(w.isDirectionalLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const J=w.shadow,L=n.get(w);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=q,i.directionalShadowMatrix[m]=w.shadow.matrix,v++}i.directional[m]=G,m++}else if(w.isSpotLight){const G=e.get(w);G.position.setFromMatrixPosition(w.matrixWorld),G.color.copy(F).multiplyScalar(B),G.distance=W,G.coneCos=Math.cos(w.angle),G.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),G.decay=w.decay,i.spot[S]=G;const J=w.shadow;if(w.map&&(i.spotLightMap[N]=w.map,N++,J.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[S]=J.matrix,w.castShadow){const L=n.get(w);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,i.spotShadow[S]=L,i.spotShadowMap[S]=q,M++}S++}else if(w.isRectAreaLight){const G=e.get(w);G.color.copy(F).multiplyScalar(B),G.halfWidth.set(w.width*.5,0,0),G.halfHeight.set(0,w.height*.5,0),i.rectArea[x]=G,x++}else if(w.isPointLight){const G=e.get(w);if(G.color.copy(w.color).multiplyScalar(w.intensity),G.distance=w.distance,G.decay=w.decay,w.castShadow){const J=w.shadow,L=n.get(w);L.shadowIntensity=J.intensity,L.shadowBias=J.bias,L.shadowNormalBias=J.normalBias,L.shadowRadius=J.radius,L.shadowMapSize=J.mapSize,L.shadowCameraNear=J.camera.near,L.shadowCameraFar=J.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=q,i.pointShadowMatrix[g]=w.shadow.matrix,_++}i.point[g]=G,g++}else if(w.isHemisphereLight){const G=e.get(w);G.skyColor.copy(w.color).multiplyScalar(B),G.groundColor.copy(w.groundColor).multiplyScalar(B),i.hemi[d]=G,d++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=le.LTC_FLOAT_1,i.rectAreaLTC2=le.LTC_FLOAT_2):(i.rectAreaLTC1=le.LTC_HALF_1,i.rectAreaLTC2=le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=f,i.ambient[2]=p;const P=i.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==S||P.rectAreaLength!==x||P.hemiLength!==d||P.numDirectionalShadows!==v||P.numPointShadows!==_||P.numSpotShadows!==M||P.numSpotMaps!==N||P.numLightProbes!==A)&&(i.directional.length=m,i.spot.length=S,i.rectArea.length=x,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=M+N-T,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,P.directionalLength=m,P.pointLength=g,P.spotLength=S,P.rectAreaLength=x,P.hemiLength=d,P.numDirectionalShadows=v,P.numPointShadows=_,P.numSpotShadows=M,P.numSpotMaps=N,P.numLightProbes=A,i.version=Qw++)}function c(u,h){let f=0,p=0,m=0,g=0,S=0;const x=h.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const _=u[d];if(_.isDirectionalLight){const M=i.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),f++}else if(_.isSpotLight){const M=i.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),M.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(x),m++}else if(_.isRectAreaLight){const M=i.rectArea[g];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),a.identity(),s.copy(_.matrixWorld),s.premultiply(x),a.extractRotation(s),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const M=i.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){const M=i.hemi[S];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(x),S++}}}return{setup:o,setupView:c,state:i}}function cm(t){const e=new eb(t),n=[],i=[];function r(h){u.camera=h,n.length=0,i.length=0}function s(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function tb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new cm(t),e.set(r,[o])):s>=a.length?(o=new cm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}class nb extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ib extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sb=`uniform sampler2D shadow_pass;
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
}`;function ab(t,e,n){let i=new Wf;const r=new We,s=new We,a=new _t,o=new nb({depthPacking:Q1}),c=new ib,u={},h=n.maxTextureSize,f={[Yi]:sn,[sn]:Yi,[wn]:wn},p=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:rb,fragmentShader:sb}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new on;g.setAttribute("position",new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new Ye(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bg;let d=this.type;this.render=function(T,A,P){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;const V=t.getRenderTarget(),y=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Vi),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=d!==ai&&this.type===ai,W=d===ai&&this.type!==ai;for(let q=0,G=T.length;q<G;q++){const J=T[q],L=J.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const $=L.getFrameExtents();if(r.multiply($),s.copy(L.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/$.x),r.x=s.x*$.x,L.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/$.y),r.y=s.y*$.y,L.mapSize.y=s.y)),L.map===null||B===!0||W===!0){const re=this.type!==ai?{minFilter:An,magFilter:An}:{};L.map!==null&&L.map.dispose(),L.map=new Tr(r.x,r.y,re),L.map.texture.name=J.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const K=L.getViewportCount();for(let re=0;re<K;re++){const be=L.getViewport(re);a.set(s.x*be.x,s.y*be.y,s.x*be.z,s.y*be.w),F.viewport(a),L.updateMatrices(J,re),i=L.getFrustum(),M(A,P,L.camera,J,this.type)}L.isPointLightShadow!==!0&&this.type===ai&&v(L,P),L.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(V,y,w)};function v(T,A){const P=e.update(S);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Tr(r.x,r.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(A,null,P,p,S,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(A,null,P,m,S,null)}function _(T,A,P,V){let y=null;const w=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=P.isPointLight===!0?c:o,t.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const F=y.uuid,B=A.uuid;let W=u[F];W===void 0&&(W={},u[F]=W);let q=W[B];q===void 0&&(q=y.clone(),W[B]=q,A.addEventListener("dispose",N)),y=q}if(y.visible=A.visible,y.wireframe=A.wireframe,V===ai?y.side=A.shadowSide!==null?A.shadowSide:A.side:y.side=A.shadowSide!==null?A.shadowSide:f[A.side],y.alphaMap=A.alphaMap,y.alphaTest=A.alphaTest,y.map=A.map,y.clipShadows=A.clipShadows,y.clippingPlanes=A.clippingPlanes,y.clipIntersection=A.clipIntersection,y.displacementMap=A.displacementMap,y.displacementScale=A.displacementScale,y.displacementBias=A.displacementBias,y.wireframeLinewidth=A.wireframeLinewidth,y.linewidth=A.linewidth,P.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=P}return y}function M(T,A,P,V,y){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===ai)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const B=e.update(T),W=T.material;if(Array.isArray(W)){const q=B.groups;for(let G=0,J=q.length;G<J;G++){const L=q[G],$=W[L.materialIndex];if($&&$.visible){const K=_(T,$,V,y);T.onBeforeShadow(t,T,A,P,B,K,L),t.renderBufferDirect(P,null,B,K,T,L),T.onAfterShadow(t,T,A,P,B,K,L)}}}else if(W.visible){const q=_(T,W,V,y);T.onBeforeShadow(t,T,A,P,B,q,null),t.renderBufferDirect(P,null,B,q,T,null),T.onAfterShadow(t,T,A,P,B,q,null)}}const F=T.children;for(let B=0,W=F.length;B<W;B++)M(F[B],A,P,V,y)}function N(T){T.target.removeEventListener("dispose",N);for(const P in u){const V=u[P],y=T.target.uuid;y in V&&(V[y].dispose(),delete V[y])}}}const ob={[Qu]:Ju,[ed]:id,[td]:rd,[Ms]:nd,[Ju]:Qu,[id]:ed,[rd]:td,[nd]:Ms};function lb(t){function e(){let D=!1;const pe=new _t;let X=null;const ee=new _t(0,0,0,0);return{setMask:function(ue){X!==ue&&!D&&(t.colorMask(ue,ue,ue,ue),X=ue)},setLocked:function(ue){D=ue},setClear:function(ue,me,qe,Mt,$t){$t===!0&&(ue*=Mt,me*=Mt,qe*=Mt),pe.set(ue,me,qe,Mt),ee.equals(pe)===!1&&(t.clearColor(ue,me,qe,Mt),ee.copy(pe))},reset:function(){D=!1,X=null,ee.set(-1,0,0,0)}}}function n(){let D=!1,pe=!1,X=null,ee=null,ue=null;return{setReversed:function(me){pe=me},setTest:function(me){me?se(t.DEPTH_TEST):ne(t.DEPTH_TEST)},setMask:function(me){X!==me&&!D&&(t.depthMask(me),X=me)},setFunc:function(me){if(pe&&(me=ob[me]),ee!==me){switch(me){case Qu:t.depthFunc(t.NEVER);break;case Ju:t.depthFunc(t.ALWAYS);break;case ed:t.depthFunc(t.LESS);break;case Ms:t.depthFunc(t.LEQUAL);break;case td:t.depthFunc(t.EQUAL);break;case nd:t.depthFunc(t.GEQUAL);break;case id:t.depthFunc(t.GREATER);break;case rd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ee=me}},setLocked:function(me){D=me},setClear:function(me){ue!==me&&(t.clearDepth(me),ue=me)},reset:function(){D=!1,X=null,ee=null,ue=null}}}function i(){let D=!1,pe=null,X=null,ee=null,ue=null,me=null,qe=null,Mt=null,$t=null;return{setTest:function(Ze){D||(Ze?se(t.STENCIL_TEST):ne(t.STENCIL_TEST))},setMask:function(Ze){pe!==Ze&&!D&&(t.stencilMask(Ze),pe=Ze)},setFunc:function(Ze,Kt,ei){(X!==Ze||ee!==Kt||ue!==ei)&&(t.stencilFunc(Ze,Kt,ei),X=Ze,ee=Kt,ue=ei)},setOp:function(Ze,Kt,ei){(me!==Ze||qe!==Kt||Mt!==ei)&&(t.stencilOp(Ze,Kt,ei),me=Ze,qe=Kt,Mt=ei)},setLocked:function(Ze){D=Ze},setClear:function(Ze){$t!==Ze&&(t.clearStencil(Ze),$t=Ze)},reset:function(){D=!1,pe=null,X=null,ee=null,ue=null,me=null,qe=null,Mt=null,$t=null}}}const r=new e,s=new n,a=new i,o=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,p=[],m=null,g=!1,S=null,x=null,d=null,v=null,_=null,M=null,N=null,T=new He(0,0,0),A=0,P=!1,V=null,y=null,w=null,F=null,B=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,G=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),q=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),q=G>=2);let L=null,$={};const K=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),be=new _t().fromArray(K),ze=new _t().fromArray(re);function z(D,pe,X,ee){const ue=new Uint8Array(4),me=t.createTexture();t.bindTexture(D,me),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let qe=0;qe<X;qe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,ue):t.texImage2D(pe+qe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ue);return me}const Y={};Y[t.TEXTURE_2D]=z(t.TEXTURE_2D,t.TEXTURE_2D,1),Y[t.TEXTURE_CUBE_MAP]=z(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[t.TEXTURE_2D_ARRAY]=z(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Y[t.TEXTURE_3D]=z(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),se(t.DEPTH_TEST),s.setFunc(Ms),Le(!1),Ne(gp),se(t.CULL_FACE),R(Vi);function se(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function ne(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Se(D,pe){return h[D]!==pe?(t.bindFramebuffer(D,pe),h[D]=pe,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=pe),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function he(D,pe){let X=p,ee=!1;if(D){X=f.get(pe),X===void 0&&(X=[],f.set(pe,X));const ue=D.textures;if(X.length!==ue.length||X[0]!==t.COLOR_ATTACHMENT0){for(let me=0,qe=ue.length;me<qe;me++)X[me]=t.COLOR_ATTACHMENT0+me;X.length=ue.length,ee=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,ee=!0);ee&&t.drawBuffers(X)}function Ue(D){return m!==D?(t.useProgram(D),m=D,!0):!1}const je={[dr]:t.FUNC_ADD,[b1]:t.FUNC_SUBTRACT,[A1]:t.FUNC_REVERSE_SUBTRACT};je[T1]=t.MIN,je[C1]=t.MAX;const Fe={[R1]:t.ZERO,[N1]:t.ONE,[P1]:t.SRC_COLOR,[Ku]:t.SRC_ALPHA,[B1]:t.SRC_ALPHA_SATURATE,[U1]:t.DST_COLOR,[D1]:t.DST_ALPHA,[L1]:t.ONE_MINUS_SRC_COLOR,[Zu]:t.ONE_MINUS_SRC_ALPHA,[F1]:t.ONE_MINUS_DST_COLOR,[I1]:t.ONE_MINUS_DST_ALPHA,[k1]:t.CONSTANT_COLOR,[O1]:t.ONE_MINUS_CONSTANT_COLOR,[z1]:t.CONSTANT_ALPHA,[j1]:t.ONE_MINUS_CONSTANT_ALPHA};function R(D,pe,X,ee,ue,me,qe,Mt,$t,Ze){if(D===Vi){g===!0&&(ne(t.BLEND),g=!1);return}if(g===!1&&(se(t.BLEND),g=!0),D!==w1){if(D!==S||Ze!==P){if((x!==dr||_!==dr)&&(t.blendEquation(t.FUNC_ADD),x=dr,_=dr),Ze)switch(D){case fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vp:t.blendFunc(t.ONE,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case vp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case _p:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case yp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,v=null,M=null,N=null,T.set(0,0,0),A=0,S=D,P=Ze}return}ue=ue||pe,me=me||X,qe=qe||ee,(pe!==x||ue!==_)&&(t.blendEquationSeparate(je[pe],je[ue]),x=pe,_=ue),(X!==d||ee!==v||me!==M||qe!==N)&&(t.blendFuncSeparate(Fe[X],Fe[ee],Fe[me],Fe[qe]),d=X,v=ee,M=me,N=qe),(Mt.equals(T)===!1||$t!==A)&&(t.blendColor(Mt.r,Mt.g,Mt.b,$t),T.copy(Mt),A=$t),S=D,P=!1}function Ge(D,pe){D.side===wn?ne(t.CULL_FACE):se(t.CULL_FACE);let X=D.side===sn;pe&&(X=!X),Le(X),D.blending===fs&&D.transparent===!1?R(Vi):R(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),it(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function Le(D){V!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),V=D)}function Ne(D){D!==M1?(se(t.CULL_FACE),D!==y&&(D===gp?t.cullFace(t.BACK):D===E1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):ne(t.CULL_FACE),y=D}function Te(D){D!==w&&(q&&t.lineWidth(D),w=D)}function it(D,pe,X){D?(se(t.POLYGON_OFFSET_FILL),(F!==pe||B!==X)&&(t.polygonOffset(pe,X),F=pe,B=X)):ne(t.POLYGON_OFFSET_FILL)}function Ce(D){D?se(t.SCISSOR_TEST):ne(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+W-1),L!==D&&(t.activeTexture(D),L=D)}function E(D,pe,X){X===void 0&&(L===null?X=t.TEXTURE0+W-1:X=L);let ee=$[X];ee===void 0&&(ee={type:void 0,texture:void 0},$[X]=ee),(ee.type!==D||ee.texture!==pe)&&(L!==X&&(t.activeTexture(X),L=X),t.bindTexture(D,pe||Y[D]),ee.type=D,ee.texture=pe)}function O(){const D=$[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ke(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(D){be.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),be.copy(D))}function _e(D){ze.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),ze.copy(D))}function Xe(D,pe){let X=c.get(pe);X===void 0&&(X=new WeakMap,c.set(pe,X));let ee=X.get(D);ee===void 0&&(ee=t.getUniformBlockIndex(pe,D.name),X.set(D,ee))}function Be(D,pe){const ee=c.get(pe).get(D);o.get(pe)!==ee&&(t.uniformBlockBinding(pe,ee,D.__bindingPointIndex),o.set(pe,ee))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},L=null,$={},h={},f=new WeakMap,p=[],m=null,g=!1,S=null,x=null,d=null,v=null,_=null,M=null,N=null,T=new He(0,0,0),A=0,P=!1,V=null,y=null,w=null,F=null,B=null,be.set(0,0,t.canvas.width,t.canvas.height),ze.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:se,disable:ne,bindFramebuffer:Se,drawBuffers:he,useProgram:Ue,setBlending:R,setMaterial:Ge,setFlipSided:Le,setCullFace:Ne,setLineWidth:Te,setPolygonOffset:it,setScissorTest:Ce,activeTexture:C,bindTexture:E,unbindTexture:O,compressedTexImage2D:Q,compressedTexImage3D:te,texImage2D:ve,texImage3D:De,updateUBOMapping:Xe,uniformBlockBinding:Be,texStorage2D:Ke,texStorage3D:ae,texSubImage2D:Z,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:ge,scissor:Ie,viewport:_e,reset:rt}}function um(t,e,n,i){const r=cb(i);switch(n){case Wg:return t*e;case qg:return t*e;case Yg:return t*e*2;case $g:return t*e/r.components*r.byteLength;case Of:return t*e/r.components*r.byteLength;case Kg:return t*e*2/r.components*r.byteLength;case zf:return t*e*2/r.components*r.byteLength;case Xg:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case jf:return t*e*4/r.components*r.byteLength;case Ho:case Go:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Vo:case Wo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:case fd:return Math.max(t,16)*Math.max(e,8)/4;case cd:case dd:return Math.max(t,8)*Math.max(e,8)/2;case hd:case pd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case _d:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case yd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Sd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Ed:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case wd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ad:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Td:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Cd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Rd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Xo:case Nd:case Pd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Zg:case Ld:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dd:case Id:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cb(t){switch(t){case _i:case Hg:return{byteLength:1,components:1};case Na:case Gg:case Ba:return{byteLength:2,components:1};case Bf:case kf:return{byteLength:2,components:4};case Ar:case Ff:case di:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function ub(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new We,h=new WeakMap;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):wl("canvas")}function S(C,E,O){let Q=1;const te=Ce(C);if((te.width>O||te.height>O)&&(Q=O/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*te.width),Ee=Math.floor(Q*te.height);f===void 0&&(f=g(Z,Ee));const ce=E?g(Z,Ee):f;return ce.width=Z,ce.height=Ee,ce.getContext("2d").drawImage(C,0,0,Z,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ee+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function x(C){return C.generateMipmaps&&C.minFilter!==An&&C.minFilter!==kn}function d(C){t.generateMipmap(C)}function v(C,E,O,Q,te=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=E;if(E===t.RED&&(O===t.FLOAT&&(Z=t.R32F),O===t.HALF_FLOAT&&(Z=t.R16F),O===t.UNSIGNED_BYTE&&(Z=t.R8)),E===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.R8UI),O===t.UNSIGNED_SHORT&&(Z=t.R16UI),O===t.UNSIGNED_INT&&(Z=t.R32UI),O===t.BYTE&&(Z=t.R8I),O===t.SHORT&&(Z=t.R16I),O===t.INT&&(Z=t.R32I)),E===t.RG&&(O===t.FLOAT&&(Z=t.RG32F),O===t.HALF_FLOAT&&(Z=t.RG16F),O===t.UNSIGNED_BYTE&&(Z=t.RG8)),E===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RG8UI),O===t.UNSIGNED_SHORT&&(Z=t.RG16UI),O===t.UNSIGNED_INT&&(Z=t.RG32UI),O===t.BYTE&&(Z=t.RG8I),O===t.SHORT&&(Z=t.RG16I),O===t.INT&&(Z=t.RG32I)),E===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),O===t.UNSIGNED_INT&&(Z=t.RGB32UI),O===t.BYTE&&(Z=t.RGB8I),O===t.SHORT&&(Z=t.RGB16I),O===t.INT&&(Z=t.RGB32I)),E===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),O===t.UNSIGNED_INT&&(Z=t.RGBA32UI),O===t.BYTE&&(Z=t.RGBA8I),O===t.SHORT&&(Z=t.RGBA16I),O===t.INT&&(Z=t.RGBA32I)),E===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),E===t.RGBA){const Ee=te?yl:et.getTransfer(Q);O===t.FLOAT&&(Z=t.RGBA32F),O===t.HALF_FLOAT&&(Z=t.RGBA16F),O===t.UNSIGNED_BYTE&&(Z=Ee===lt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function _(C,E){let O;return C?E===null||E===Ar||E===bs?O=t.DEPTH24_STENCIL8:E===di?O=t.DEPTH32F_STENCIL8:E===Na&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Ar||E===bs?O=t.DEPTH_COMPONENT24:E===di?O=t.DEPTH_COMPONENT32F:E===Na&&(O=t.DEPTH_COMPONENT16),O}function M(C,E){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==An&&C.minFilter!==kn?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function N(C){const E=C.target;E.removeEventListener("dispose",N),A(E),E.isVideoTexture&&h.delete(E)}function T(C){const E=C.target;E.removeEventListener("dispose",T),V(E)}function A(C){const E=i.get(C);if(E.__webglInit===void 0)return;const O=C.source,Q=p.get(O);if(Q){const te=Q[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(C),Object.keys(Q).length===0&&p.delete(O)}i.remove(C)}function P(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const O=C.source,Q=p.get(O);delete Q[E.__cacheKey],a.memory.textures--}function V(C){const E=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let te=0;te<E.__webglFramebuffer[Q].length;te++)t.deleteFramebuffer(E.__webglFramebuffer[Q][te]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const O=C.textures;for(let Q=0,te=O.length;Q<te;Q++){const Z=i.get(O[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(O[Q])}i.remove(C)}let y=0;function w(){y=0}function F(){const C=y;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),y+=1,C}function B(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function W(C,E){const O=i.get(C);if(C.isVideoTexture&&Te(C),C.isRenderTargetTexture===!1&&C.version>0&&O.__version!==C.version){const Q=C.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ze(O,C,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function q(C,E){const O=i.get(C);if(C.version>0&&O.__version!==C.version){ze(O,C,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function G(C,E){const O=i.get(C);if(C.version>0&&O.__version!==C.version){ze(O,C,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function J(C,E){const O=i.get(C);if(C.version>0&&O.__version!==C.version){z(O,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const L={[od]:t.REPEAT,[xr]:t.CLAMP_TO_EDGE,[ld]:t.MIRRORED_REPEAT},$={[An]:t.NEAREST,[K1]:t.NEAREST_MIPMAP_NEAREST,[ao]:t.NEAREST_MIPMAP_LINEAR,[kn]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[gr]:t.LINEAR_MIPMAP_LINEAR},K={[ey]:t.NEVER,[ay]:t.ALWAYS,[ty]:t.LESS,[Jg]:t.LEQUAL,[ny]:t.EQUAL,[sy]:t.GEQUAL,[iy]:t.GREATER,[ry]:t.NOTEQUAL};function re(C,E){if(E.type===di&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===kn||E.magFilter===wc||E.magFilter===ao||E.magFilter===gr||E.minFilter===kn||E.minFilter===wc||E.minFilter===ao||E.minFilter===gr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,L[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,L[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,L[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,K[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===An||E.minFilter!==ao&&E.minFilter!==gr||E.type===di&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function be(C,E){let O=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",N));const Q=E.source;let te=p.get(Q);te===void 0&&(te={},p.set(Q,te));const Z=B(E);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[Z].usedTimes++;const Ee=te[C.__cacheKey];Ee!==void 0&&(te[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&P(E)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return O}function ze(C,E,O){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const te=be(C,E),Z=E.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+O);const Ee=i.get(Z);if(Z.version!==Ee.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const ce=et.getPrimaries(et.workingColorSpace),ge=E.colorSpace===Di?null:et.getPrimaries(E.colorSpace),Ke=E.colorSpace===Di||ce===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let ae=S(E.image,!1,r.maxTextureSize);ae=it(E,ae);const ve=s.convert(E.format,E.colorSpace),De=s.convert(E.type);let Ie=v(E.internalFormat,ve,De,E.colorSpace,E.isVideoTexture);re(Q,E);let _e;const Xe=E.mipmaps,Be=E.isVideoTexture!==!0,rt=Ee.__version===void 0||te===!0,D=Z.dataReady,pe=M(E,ae);if(E.isDepthTexture)Ie=_(E.format===As,E.type),rt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Ie,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,ve,De,null));else if(E.isDataTexture)if(Xe.length>0){Be&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,Xe[0].width,Xe[0].height);for(let X=0,ee=Xe.length;X<ee;X++)_e=Xe[X],Be?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,X,Ie,_e.width,_e.height,0,ve,De,_e.data);E.generateMipmaps=!1}else Be?(rt&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,ae.width,ae.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ae.width,ae.height,ve,De,ae.data)):n.texImage2D(t.TEXTURE_2D,0,Ie,ae.width,ae.height,0,ve,De,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Be&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,Xe[0].width,Xe[0].height,ae.depth);for(let X=0,ee=Xe.length;X<ee;X++)if(_e=Xe[X],E.format!==zn)if(ve!==null)if(Be){if(D)if(E.layerUpdates.size>0){const ue=um(_e.width,_e.height,E.format,E.type);for(const me of E.layerUpdates){const qe=_e.data.subarray(me*ue/_e.data.BYTES_PER_ELEMENT,(me+1)*ue/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,me,_e.width,_e.height,1,ve,qe,0,0)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ae.depth,ve,_e.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,X,Ie,_e.width,_e.height,ae.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,X,0,0,0,_e.width,_e.height,ae.depth,ve,De,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,X,Ie,_e.width,_e.height,ae.depth,0,ve,De,_e.data)}else{Be&&rt&&n.texStorage2D(t.TEXTURE_2D,pe,Ie,Xe[0].width,Xe[0].height);for(let X=0,ee=Xe.length;X<ee;X++)_e=Xe[X],E.format!==zn?ve!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,X,Ie,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,_e.width,_e.height,ve,De,_e.data):n.texImage2D(t.TEXTURE_2D,X,Ie,_e.width,_e.height,0,ve,De,_e.data)}else if(E.isDataArrayTexture)if(Be){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Ie,ae.width,ae.height,ae.depth),D)if(E.layerUpdates.size>0){const X=um(ae.width,ae.height,E.format,E.type);for(const ee of E.layerUpdates){const ue=ae.data.subarray(ee*X/ae.data.BYTES_PER_ELEMENT,(ee+1)*X/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ae.width,ae.height,1,ve,De,ue)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ve,De,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ie,ae.width,ae.height,ae.depth,0,ve,De,ae.data);else if(E.isData3DTexture)Be?(rt&&n.texStorage3D(t.TEXTURE_3D,pe,Ie,ae.width,ae.height,ae.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ve,De,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ie,ae.width,ae.height,ae.depth,0,ve,De,ae.data);else if(E.isFramebufferTexture){if(rt)if(Be)n.texStorage2D(t.TEXTURE_2D,pe,Ie,ae.width,ae.height);else{let X=ae.width,ee=ae.height;for(let ue=0;ue<pe;ue++)n.texImage2D(t.TEXTURE_2D,ue,Ie,X,ee,0,ve,De,null),X>>=1,ee>>=1}}else if(Xe.length>0){if(Be&&rt){const X=Ce(Xe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Ie,X.width,X.height)}for(let X=0,ee=Xe.length;X<ee;X++)_e=Xe[X],Be?D&&n.texSubImage2D(t.TEXTURE_2D,X,0,0,ve,De,_e):n.texImage2D(t.TEXTURE_2D,X,Ie,ve,De,_e);E.generateMipmaps=!1}else if(Be){if(rt){const X=Ce(ae);n.texStorage2D(t.TEXTURE_2D,pe,Ie,X.width,X.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,De,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ie,ve,De,ae);x(E)&&d(Q),Ee.__version=Z.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function z(C,E,O){if(E.image.length!==6)return;const Q=be(C,E),te=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+O);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+O);const Ee=et.getPrimaries(et.workingColorSpace),ce=E.colorSpace===Di?null:et.getPrimaries(E.colorSpace),ge=E.colorSpace===Di||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ke=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,ve=[];for(let ee=0;ee<6;ee++)!Ke&&!ae?ve[ee]=S(E.image[ee],!0,r.maxCubemapSize):ve[ee]=ae?E.image[ee].image:E.image[ee],ve[ee]=it(E,ve[ee]);const De=ve[0],Ie=s.convert(E.format,E.colorSpace),_e=s.convert(E.type),Xe=v(E.internalFormat,Ie,_e,E.colorSpace),Be=E.isVideoTexture!==!0,rt=Z.__version===void 0||Q===!0,D=te.dataReady;let pe=M(E,De);re(t.TEXTURE_CUBE_MAP,E);let X;if(Ke){Be&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,De.width,De.height);for(let ee=0;ee<6;ee++){X=ve[ee].mipmaps;for(let ue=0;ue<X.length;ue++){const me=X[ue];E.format!==zn?Ie!==null?Be?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,me.width,me.height,Ie,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Xe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,me.width,me.height,Ie,_e,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Xe,me.width,me.height,0,Ie,_e,me.data)}}}else{if(X=E.mipmaps,Be&&rt){X.length>0&&pe++;const ee=Ce(ve[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,Xe,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ae){Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ve[ee].width,ve[ee].height,Ie,_e,ve[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,ve[ee].width,ve[ee].height,0,Ie,_e,ve[ee].data);for(let ue=0;ue<X.length;ue++){const qe=X[ue].image[ee].image;Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,qe.width,qe.height,Ie,_e,qe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Xe,qe.width,qe.height,0,Ie,_e,qe.data)}}else{Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ie,_e,ve[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Xe,Ie,_e,ve[ee]);for(let ue=0;ue<X.length;ue++){const me=X[ue];Be?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Ie,_e,me.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Xe,Ie,_e,me.image[ee])}}}x(E)&&d(t.TEXTURE_CUBE_MAP),Z.__version=te.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function Y(C,E,O,Q,te,Z){const Ee=s.convert(O.format,O.colorSpace),ce=s.convert(O.type),ge=v(O.internalFormat,Ee,ce,O.colorSpace);if(!i.get(E).__hasExternalTextures){const ae=Math.max(1,E.width>>Z),ve=Math.max(1,E.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,ge,ae,ve,E.depth,0,Ee,ce,null):n.texImage2D(te,Z,ge,ae,ve,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ne(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,te,i.get(O).__webglTexture,0,Le(E)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,te,i.get(O).__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(C,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=_(E.stencilBuffer,te),Ee=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Le(E);Ne(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Z,E.width,E.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Z,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Z,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,C)}else{const Q=E.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Ee=s.convert(Z.format,Z.colorSpace),ce=s.convert(Z.type),ge=v(Z.internalFormat,Ee,ce,Z.colorSpace),Ke=Le(E);O&&Ne(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ke,ge,E.width,E.height):Ne(E)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ke,ge,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,ge,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ne(C,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),W(E.depthTexture,0);const Q=i.get(E.depthTexture).__webglTexture,te=Le(E);if(E.depthTexture.format===hs)Ne(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Q,0);else if(E.depthTexture.format===As)Ne(E)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Se(C){const E=i.get(C),O=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const te=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),E.__depthDisposeCallback=te}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ne(E.__webglFramebuffer,C)}else if(O){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),se(E.__webglDepthbuffer[Q],C,!1);else{const te=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),se(E.__webglDepthbuffer,C,!1);else{const Q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(C,E,O){const Q=i.get(C);E!==void 0&&Y(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Se(C)}function Ue(C){const E=C.texture,O=i.get(C),Q=i.get(E);C.addEventListener("dispose",T);const te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ee=te.length>1;if(Ee||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,a.memory.textures++),Z){O.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer[ce]=[];for(let ge=0;ge<E.mipmaps.length;ge++)O.__webglFramebuffer[ce][ge]=t.createFramebuffer()}else O.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){O.__webglFramebuffer=[];for(let ce=0;ce<E.mipmaps.length;ce++)O.__webglFramebuffer[ce]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,ge=te.length;ce<ge;ce++){const Ke=i.get(te[ce]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=t.createTexture(),a.memory.textures++)}if(C.samples>0&&Ne(C)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ce=0;ce<te.length;ce++){const ge=te[ce];O.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[ce]);const Ke=s.convert(ge.format,ge.colorSpace),ae=s.convert(ge.type),ve=v(ge.internalFormat,Ke,ae,ge.colorSpace,C.isXRRenderTarget===!0),De=Le(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ve,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,O.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),se(O.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),re(t.TEXTURE_CUBE_MAP,E);for(let ce=0;ce<6;ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Y(O.__webglFramebuffer[ce][ge],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,ge);else Y(O.__webglFramebuffer[ce],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);x(E)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,ge=te.length;ce<ge;ce++){const Ke=te[ce],ae=i.get(Ke);n.bindTexture(t.TEXTURE_2D,ae.__webglTexture),re(t.TEXTURE_2D,Ke),Y(O.__webglFramebuffer,C,Ke,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),x(Ke)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,Q.__webglTexture),re(ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ge=0;ge<E.mipmaps.length;ge++)Y(O.__webglFramebuffer[ge],C,E,t.COLOR_ATTACHMENT0,ce,ge);else Y(O.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,ce,0);x(E)&&d(ce),n.unbindTexture()}C.depthBuffer&&Se(C)}function je(C){const E=C.textures;for(let O=0,Q=E.length;O<Q;O++){const te=E[O];if(x(te)){const Z=C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ee=i.get(te).__webglTexture;n.bindTexture(Z,Ee),d(Z),n.unbindTexture()}}}const Fe=[],R=[];function Ge(C){if(C.samples>0){if(Ne(C)===!1){const E=C.textures,O=C.width,Q=C.height;let te=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(C),ce=E.length>1;if(ce)for(let ge=0;ge<E.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<E.length;ge++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ke=i.get(E[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ke,0)}t.blitFramebuffer(0,0,O,Q,0,0,O,Q,te,t.NEAREST),c===!0&&(Fe.length=0,R.length=0,Fe.push(t.COLOR_ATTACHMENT0+ge),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Fe.push(Z),R.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,R)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Fe))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let ge=0;ge<E.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const Ke=i.get(E[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,Ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&c){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function Le(C){return Math.min(r.maxSamples,C.samples)}function Ne(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Te(C){const E=a.render.frame;h.get(C)!==E&&(h.set(C,E),C.update())}function it(C,E){const O=C.colorSpace,Q=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||O!==Ji&&O!==Di&&(et.getTransfer(O)===lt?(Q!==zn||te!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}function Ce(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=F,this.resetTextureUnits=w,this.setTexture2D=W,this.setTexture2DArray=q,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=he,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=Ge,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Y,this.useMultisampledRTT=Ne}function db(t,e){function n(i,r=Di){let s;const a=et.getTransfer(r);if(i===_i)return t.UNSIGNED_BYTE;if(i===Bf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Vg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Hg)return t.BYTE;if(i===Gg)return t.SHORT;if(i===Na)return t.UNSIGNED_SHORT;if(i===Ff)return t.INT;if(i===Ar)return t.UNSIGNED_INT;if(i===di)return t.FLOAT;if(i===Ba)return t.HALF_FLOAT;if(i===Wg)return t.ALPHA;if(i===Xg)return t.RGB;if(i===zn)return t.RGBA;if(i===qg)return t.LUMINANCE;if(i===Yg)return t.LUMINANCE_ALPHA;if(i===hs)return t.DEPTH_COMPONENT;if(i===As)return t.DEPTH_STENCIL;if(i===$g)return t.RED;if(i===Of)return t.RED_INTEGER;if(i===Kg)return t.RG;if(i===zf)return t.RG_INTEGER;if(i===jf)return t.RGBA_INTEGER;if(i===Ho||i===Go||i===Vo||i===Wo)if(a===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Vo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===cd||i===ud||i===dd||i===fd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===cd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ud)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===dd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hd||i===pd)return a===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===md)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===xd||i===gd||i===vd||i===_d||i===yd||i===Sd||i===Md||i===Ed||i===wd||i===bd||i===Ad||i===Td||i===Cd||i===Rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===xd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===_d)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===yd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Md)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ed)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===wd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ad)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Td)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Cd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rd)return a===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Xo||i===Nd||i===Pd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Xo)return a===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Pd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Zg||i===Ld||i===Dd||i===Id)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Xo)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ld)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Id)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class fb extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $n extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hb={type:"move"};class eu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const S of e.hand.values()){const x=n.getJointPose(S,i),d=this._getHandJoint(u,S);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],p=h.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&p>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&p<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hb)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $n;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mb=`
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

}`;class xb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new an,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $i({vertexShader:pb,fragmentShader:mb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ye(new Cs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gb extends Ls{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,f=null,p=null,m=null,g=null;const S=new xb,x=n.getContextAttributes();let d=null,v=null;const _=[],M=[],N=new We;let T=null;const A=new pn;A.layers.enable(1),A.viewport=new _t;const P=new pn;P.layers.enable(2),P.viewport=new _t;const V=[A,P],y=new fb;y.layers.enable(1),y.layers.enable(2);let w=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Y=_[z];return Y===void 0&&(Y=new eu,_[z]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(z){let Y=_[z];return Y===void 0&&(Y=new eu,_[z]=Y),Y.getGripSpace()},this.getHand=function(z){let Y=_[z];return Y===void 0&&(Y=new eu,_[z]=Y),Y.getHandSpace()};function B(z){const Y=M.indexOf(z.inputSource);if(Y===-1)return;const se=_[Y];se!==void 0&&(se.update(z.inputSource,z.frame,u||a),se.dispatchEvent({type:z.type,data:z.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",q);for(let z=0;z<_.length;z++){const Y=M[z];Y!==null&&(M[z]=null,_[z].disconnect(Y))}w=null,F=null,S.reset(),e.setRenderTarget(d),m=null,p=null,f=null,r=null,v=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){s=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(z){u=z},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(z){if(r=z,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",q),x.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),r.renderState.layers===void 0){const Y={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,Y),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Tr(m.framebufferWidth,m.framebufferHeight,{format:zn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,se=null,ne=null;x.depth&&(ne=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Y=x.stencil?As:hs,se=x.stencil?bs:Ar);const Se={colorFormat:n.RGBA8,depthFormat:ne,scaleFactor:s};f=new XRWebGLBinding(r,n),p=f.createProjectionLayer(Se),r.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),v=new Tr(p.textureWidth,p.textureHeight,{format:zn,type:_i,depthTexture:new d0(p.textureWidth,p.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function q(z){for(let Y=0;Y<z.removed.length;Y++){const se=z.removed[Y],ne=M.indexOf(se);ne>=0&&(M[ne]=null,_[ne].disconnect(se))}for(let Y=0;Y<z.added.length;Y++){const se=z.added[Y];let ne=M.indexOf(se);if(ne===-1){for(let he=0;he<_.length;he++)if(he>=M.length){M.push(se),ne=he;break}else if(M[he]===null){M[he]=se,ne=he;break}if(ne===-1)break}const Se=_[ne];Se&&Se.connect(se)}}const G=new k,J=new k;function L(z,Y,se){G.setFromMatrixPosition(Y.matrixWorld),J.setFromMatrixPosition(se.matrixWorld);const ne=G.distanceTo(J),Se=Y.projectionMatrix.elements,he=se.projectionMatrix.elements,Ue=Se[14]/(Se[10]-1),je=Se[14]/(Se[10]+1),Fe=(Se[9]+1)/Se[5],R=(Se[9]-1)/Se[5],Ge=(Se[8]-1)/Se[0],Le=(he[8]+1)/he[0],Ne=Ue*Ge,Te=Ue*Le,it=ne/(-Ge+Le),Ce=it*-Ge;if(Y.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ce),z.translateZ(it),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),Se[10]===-1)z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const C=Ue+it,E=je+it,O=Ne-Ce,Q=Te+(ne-Ce),te=Fe*je/E*C,Z=R*je/E*C;z.projectionMatrix.makePerspective(O,Q,te,Z,C,E),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function $(z,Y){Y===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Y.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(r===null)return;let Y=z.near,se=z.far;S.texture!==null&&(S.depthNear>0&&(Y=S.depthNear),S.depthFar>0&&(se=S.depthFar)),y.near=P.near=A.near=Y,y.far=P.far=A.far=se,(w!==y.near||F!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),w=y.near,F=y.far);const ne=z.parent,Se=y.cameras;$(y,ne);for(let he=0;he<Se.length;he++)$(Se[he],ne);Se.length===2?L(y,A,P):y.projectionMatrix.copy(A.projectionMatrix),K(z,y,ne)};function K(z,Y,se){se===null?z.matrix.copy(Y.matrixWorld):(z.matrix.copy(se.matrixWorld),z.matrix.invert(),z.matrix.multiply(Y.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Y.projectionMatrix),z.projectionMatrixInverse.copy(Y.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Ud*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(z){c=z,p!==null&&(p.fixedFoveation=z),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=z)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(y)};let re=null;function be(z,Y){if(h=Y.getViewerPose(u||a),g=Y,h!==null){const se=h.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let ne=!1;se.length!==y.cameras.length&&(y.cameras.length=0,ne=!0);for(let he=0;he<se.length;he++){const Ue=se[he];let je=null;if(m!==null)je=m.getViewport(Ue);else{const R=f.getViewSubImage(p,Ue);je=R.viewport,he===0&&(e.setRenderTargetTextures(v,R.colorTexture,p.ignoreDepthValues?void 0:R.depthStencilTexture),e.setRenderTarget(v))}let Fe=V[he];Fe===void 0&&(Fe=new pn,Fe.layers.enable(he),Fe.viewport=new _t,V[he]=Fe),Fe.matrix.fromArray(Ue.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ue.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(je.x,je.y,je.width,je.height),he===0&&(y.matrix.copy(Fe.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),ne===!0&&y.cameras.push(Fe)}const Se=r.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const he=f.getDepthInformation(se[0]);he&&he.isValid&&he.texture&&S.init(e,he,r.renderState)}}for(let se=0;se<_.length;se++){const ne=M[se],Se=_[se];ne!==null&&Se!==void 0&&Se.update(ne,Y,u||a)}re&&re(z,Y),Y.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Y}),g=null}const ze=new c0;ze.setAnimationLoop(be),this.setAnimationLoop=function(z){re=z},this.dispose=function(){}}}const ar=new Jn,vb=new ft;function _b(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,a0(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,v,_,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),f(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),p(x,d),d.isMeshPhysicalMaterial&&m(x,d,M)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),S(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&o(x,d)):d.isPointsMaterial?c(x,d,v,_):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===sn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===sn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,M=v.envMapRotation;_&&(x.envMap.value=_,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),x.envMapRotation.value.setFromMatrix4(vb.makeRotationFromEuler(ar)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function o(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,v,_){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*v,x.scale.value=_*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function f(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function p(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function m(x,d,v){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=v.texture,x.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function S(x,d){const v=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(v.matrixWorld),x.nearDistance.value=v.shadow.camera.near,x.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yb(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(v,_){const M=_.program;i.uniformBlockBinding(v,M)}function u(v,_){let M=r[v.id];M===void 0&&(g(v),M=h(v),r[v.id]=M,v.addEventListener("dispose",x));const N=_.program;i.updateUBOMapping(v,N);const T=e.render.frame;s[v.id]!==T&&(p(v),s[v.id]=T)}function h(v){const _=f();v.__bindingPointIndex=_;const M=t.createBuffer(),N=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,N,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,M),M}function f(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(v){const _=r[v.id],M=v.uniforms,N=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,A=M.length;T<A;T++){const P=Array.isArray(M[T])?M[T]:[M[T]];for(let V=0,y=P.length;V<y;V++){const w=P[V];if(m(w,T,V,N)===!0){const F=w.__offset,B=Array.isArray(w.value)?w.value:[w.value];let W=0;for(let q=0;q<B.length;q++){const G=B[q],J=S(G);typeof G=="number"||typeof G=="boolean"?(w.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,F+W,w.__data)):G.isMatrix3?(w.__data[0]=G.elements[0],w.__data[1]=G.elements[1],w.__data[2]=G.elements[2],w.__data[3]=0,w.__data[4]=G.elements[3],w.__data[5]=G.elements[4],w.__data[6]=G.elements[5],w.__data[7]=0,w.__data[8]=G.elements[6],w.__data[9]=G.elements[7],w.__data[10]=G.elements[8],w.__data[11]=0):(G.toArray(w.__data,W),W+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,F,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,_,M,N){const T=v.value,A=_+"_"+M;if(N[A]===void 0)return typeof T=="number"||typeof T=="boolean"?N[A]=T:N[A]=T.clone(),!0;{const P=N[A];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return N[A]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(v){const _=v.uniforms;let M=0;const N=16;for(let A=0,P=_.length;A<P;A++){const V=Array.isArray(_[A])?_[A]:[_[A]];for(let y=0,w=V.length;y<w;y++){const F=V[y],B=Array.isArray(F.value)?F.value:[F.value];for(let W=0,q=B.length;W<q;W++){const G=B[W],J=S(G),L=M%N,$=L%J.boundary,K=L+$;M+=$,K!==0&&N-K<J.storage&&(M+=N-K),F.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=J.storage}}}const T=M%N;return T>0&&(M+=N-T),v.__size=M,v.__cache={},this}function S(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function x(v){const _=v.target;_.removeEventListener("dispose",x);const M=a.indexOf(_.__bindingPointIndex);a.splice(M,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:c,update:u,dispose:d}}class x0{constructor(e={}){const{canvas:n=ly(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),g=new Int32Array(4);let S=null,x=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xn,this.toneMapping=Wi,this.toneMappingExposure=1;const _=this;let M=!1,N=0,T=0,A=null,P=-1,V=null;const y=new _t,w=new _t;let F=null;const B=new He(0);let W=0,q=n.width,G=n.height,J=1,L=null,$=null;const K=new _t(0,0,q,G),re=new _t(0,0,q,G);let be=!1;const ze=new Wf;let z=!1,Y=!1;const se=new ft,ne=new ft,Se=new k,he=new _t,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Fe(){return A===null?J:1}let R=i;function Ge(b,I){return n.getContext(b,I)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Uf}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",ue,!1),n.addEventListener("webglcontextcreationerror",me,!1),R===null){const I="webgl2";if(R=Ge(I,b),R===null)throw Ge(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Le,Ne,Te,it,Ce,C,E,O,Q,te,Z,Ee,ce,ge,Ke,ae,ve,De,Ie,_e,Xe,Be,rt,D;function pe(){Le=new AE(R),Le.init(),Be=new db(R,Le),Ne=new yE(R,Le,e,Be),Te=new lb(R),Ne.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),it=new RE(R),Ce=new qw,C=new ub(R,Le,Te,Ce,Ne,Be,it),E=new ME(_),O=new bE(_),Q=new Fy(R),rt=new vE(R,Q),te=new TE(R,Q,it,rt),Z=new PE(R,te,Q,it),Ie=new NE(R,Ne,C),ae=new SE(Ce),Ee=new Xw(_,E,O,Le,Ne,rt,ae),ce=new _b(_,Ce),ge=new $w,Ke=new tb(Le),De=new gE(_,E,O,Te,Z,p,c),ve=new ab(_,Z,Ne),D=new yb(R,it,Ne,Te),_e=new _E(R,Le,it),Xe=new CE(R,Le,it),it.programs=Ee.programs,_.capabilities=Ne,_.extensions=Le,_.properties=Ce,_.renderLists=ge,_.shadowMap=ve,_.state=Te,_.info=it}pe();const X=new gb(_,R);this.xr=X,this.getContext=function(){return R},this.getContextAttributes=function(){return R.getContextAttributes()},this.forceContextLoss=function(){const b=Le.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Le.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(b){b!==void 0&&(J=b,this.setSize(q,G,!1))},this.getSize=function(b){return b.set(q,G)},this.setSize=function(b,I,j=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,G=I,n.width=Math.floor(b*J),n.height=Math.floor(I*J),j===!0&&(n.style.width=b+"px",n.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(q*J,G*J).floor()},this.setDrawingBufferSize=function(b,I,j){q=b,G=I,J=j,n.width=Math.floor(b*j),n.height=Math.floor(I*j),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(y)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,I,j,H){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,I,j,H),Te.viewport(y.copy(K).multiplyScalar(J).round())},this.getScissor=function(b){return b.copy(re)},this.setScissor=function(b,I,j,H){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,I,j,H),Te.scissor(w.copy(re).multiplyScalar(J).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(b){Te.setScissorTest(be=b)},this.setOpaqueSort=function(b){L=b},this.setTransparentSort=function(b){$=b},this.getClearColor=function(b){return b.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(b=!0,I=!0,j=!0){let H=0;if(b){let U=!1;if(A!==null){const oe=A.texture.format;U=oe===jf||oe===zf||oe===Of}if(U){const oe=A.texture.type,de=oe===_i||oe===Ar||oe===Na||oe===bs||oe===Bf||oe===kf,ye=De.getClearColor(),Me=De.getClearAlpha(),Re=ye.r,Pe=ye.g,we=ye.b;de?(m[0]=Re,m[1]=Pe,m[2]=we,m[3]=Me,R.clearBufferuiv(R.COLOR,0,m)):(g[0]=Re,g[1]=Pe,g[2]=we,g[3]=Me,R.clearBufferiv(R.COLOR,0,g))}else H|=R.COLOR_BUFFER_BIT}I&&(H|=R.DEPTH_BUFFER_BIT,R.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(H|=R.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),R.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",ue,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ge.dispose(),Ke.dispose(),Ce.dispose(),E.dispose(),O.dispose(),Z.dispose(),rt.dispose(),D.dispose(),Ee.dispose(),X.dispose(),X.removeEventListener("sessionstart",Zf),X.removeEventListener("sessionend",Qf),er.stop()};function ee(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const b=it.autoReset,I=ve.enabled,j=ve.autoUpdate,H=ve.needsUpdate,U=ve.type;pe(),it.autoReset=b,ve.enabled=I,ve.autoUpdate=j,ve.needsUpdate=H,ve.type=U}function me(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function qe(b){const I=b.target;I.removeEventListener("dispose",qe),Mt(I)}function Mt(b){$t(b),Ce.remove(b)}function $t(b){const I=Ce.get(b).programs;I!==void 0&&(I.forEach(function(j){Ee.releaseProgram(j)}),b.isShaderMaterial&&Ee.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,j,H,U,oe){I===null&&(I=Ue);const de=U.isMesh&&U.matrixWorld.determinant()<0,ye=M0(b,I,j,H,U);Te.setMaterial(H,de);let Me=j.index,Re=1;if(H.wireframe===!0){if(Me=te.getWireframeAttribute(j),Me===void 0)return;Re=2}const Pe=j.drawRange,we=j.attributes.position;let tt=Pe.start*Re,at=(Pe.start+Pe.count)*Re;oe!==null&&(tt=Math.max(tt,oe.start*Re),at=Math.min(at,(oe.start+oe.count)*Re)),Me!==null?(tt=Math.max(tt,0),at=Math.min(at,Me.count)):we!=null&&(tt=Math.max(tt,0),at=Math.min(at,we.count));const gt=at-tt;if(gt<0||gt===1/0)return;rt.setup(U,H,ye,j,Me);let ln,Qe=_e;if(Me!==null&&(ln=Q.get(Me),Qe=Xe,Qe.setIndex(ln)),U.isMesh)H.wireframe===!0?(Te.setLineWidth(H.wireframeLinewidth*Fe()),Qe.setMode(R.LINES)):Qe.setMode(R.TRIANGLES);else if(U.isLine){let Ae=H.linewidth;Ae===void 0&&(Ae=1),Te.setLineWidth(Ae*Fe()),U.isLineSegments?Qe.setMode(R.LINES):U.isLineLoop?Qe.setMode(R.LINE_LOOP):Qe.setMode(R.LINE_STRIP)}else U.isPoints?Qe.setMode(R.POINTS):U.isSprite&&Qe.setMode(R.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Qe.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Le.get("WEBGL_multi_draw"))Qe.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Ae=U._multiDrawStarts,Lt=U._multiDrawCounts,Je=U._multiDrawCount,Nn=Me?Q.get(Me).bytesPerElement:1,Pr=Ce.get(H).currentProgram.getUniforms();for(let cn=0;cn<Je;cn++)Pr.setValue(R,"_gl_DrawID",cn),Qe.render(Ae[cn]/Nn,Lt[cn])}else if(U.isInstancedMesh)Qe.renderInstances(tt,gt,U.count);else if(j.isInstancedBufferGeometry){const Ae=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Lt=Math.min(j.instanceCount,Ae);Qe.renderInstances(tt,gt,Lt)}else Qe.render(tt,gt)};function Ze(b,I,j){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=sn,b.needsUpdate=!0,Ha(b,I,j),b.side=Yi,b.needsUpdate=!0,Ha(b,I,j),b.side=wn):Ha(b,I,j)}this.compile=function(b,I,j=null){j===null&&(j=b),x=Ke.get(j),x.init(I),v.push(x),j.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(x.pushLight(U),U.castShadow&&x.pushShadow(U))}),b!==j&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(x.pushLight(U),U.castShadow&&x.pushShadow(U))}),x.setupLights();const H=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const oe=U.material;if(oe)if(Array.isArray(oe))for(let de=0;de<oe.length;de++){const ye=oe[de];Ze(ye,j,U),H.add(ye)}else Ze(oe,j,U),H.add(oe)}),v.pop(),x=null,H},this.compileAsync=function(b,I,j=null){const H=this.compile(b,I,j);return new Promise(U=>{function oe(){if(H.forEach(function(de){Ce.get(de).currentProgram.isReady()&&H.delete(de)}),H.size===0){U(b);return}setTimeout(oe,10)}Le.get("KHR_parallel_shader_compile")!==null?oe():setTimeout(oe,10)})};let Kt=null;function ei(b){Kt&&Kt(b)}function Zf(){er.stop()}function Qf(){er.start()}const er=new c0;er.setAnimationLoop(ei),typeof self<"u"&&er.setContext(self),this.setAnimationLoop=function(b){Kt=b,X.setAnimationLoop(b),b===null?er.stop():er.start()},X.addEventListener("sessionstart",Zf),X.addEventListener("sessionend",Qf),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,I,A),x=Ke.get(b,v.length),x.init(I),v.push(x),ne.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),ze.setFromProjectionMatrix(ne),Y=this.localClippingEnabled,z=ae.init(this.clippingPlanes,Y),S=ge.get(b,d.length),S.init(),d.push(S),X.enabled===!0&&X.isPresenting===!0){const oe=_.xr.getDepthSensingMesh();oe!==null&&Yl(oe,I,-1/0,_.sortObjects)}Yl(b,I,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(L,$),je=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,je&&De.addToRenderList(S,b),this.info.render.frame++,z===!0&&ae.beginShadows();const j=x.state.shadowsArray;ve.render(j,b,I),z===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=S.opaque,U=S.transmissive;if(x.setupLights(),I.isArrayCamera){const oe=I.cameras;if(U.length>0)for(let de=0,ye=oe.length;de<ye;de++){const Me=oe[de];eh(H,U,b,Me)}je&&De.render(b);for(let de=0,ye=oe.length;de<ye;de++){const Me=oe[de];Jf(S,b,Me,Me.viewport)}}else U.length>0&&eh(H,U,b,I),je&&De.render(b),Jf(S,b,I);A!==null&&(C.updateMultisampleRenderTarget(A),C.updateRenderTargetMipmap(A)),b.isScene===!0&&b.onAfterRender(_,b,I),rt.resetDefaultState(),P=-1,V=null,v.pop(),v.length>0?(x=v[v.length-1],z===!0&&ae.setGlobalState(_.clippingPlanes,x.state.camera)):x=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function Yl(b,I,j,H){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ze.intersectsSprite(b)){H&&he.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ne);const de=Z.update(b),ye=b.material;ye.visible&&S.push(b,de,ye,j,he.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ze.intersectsObject(b))){const de=Z.update(b),ye=b.material;if(H&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),he.copy(b.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),he.copy(de.boundingSphere.center)),he.applyMatrix4(b.matrixWorld).applyMatrix4(ne)),Array.isArray(ye)){const Me=de.groups;for(let Re=0,Pe=Me.length;Re<Pe;Re++){const we=Me[Re],tt=ye[we.materialIndex];tt&&tt.visible&&S.push(b,de,tt,j,he.z,we)}}else ye.visible&&S.push(b,de,ye,j,he.z,null)}}const oe=b.children;for(let de=0,ye=oe.length;de<ye;de++)Yl(oe[de],I,j,H)}function Jf(b,I,j,H){const U=b.opaque,oe=b.transmissive,de=b.transparent;x.setupLightsView(j),z===!0&&ae.setGlobalState(_.clippingPlanes,j),H&&Te.viewport(y.copy(H)),U.length>0&&ja(U,I,j),oe.length>0&&ja(oe,I,j),de.length>0&&ja(de,I,j),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function eh(b,I,j,H){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[H.id]===void 0&&(x.state.transmissionRenderTarget[H.id]=new Tr(1,1,{generateMipmaps:!0,type:Le.has("EXT_color_buffer_half_float")||Le.has("EXT_color_buffer_float")?Ba:_i,minFilter:gr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace}));const oe=x.state.transmissionRenderTarget[H.id],de=H.viewport||y;oe.setSize(de.z,de.w);const ye=_.getRenderTarget();_.setRenderTarget(oe),_.getClearColor(B),W=_.getClearAlpha(),W<1&&_.setClearColor(16777215,.5),_.clear(),je&&De.render(j);const Me=_.toneMapping;_.toneMapping=Wi;const Re=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),x.setupLightsView(H),z===!0&&ae.setGlobalState(_.clippingPlanes,H),ja(b,j,H),C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe),Le.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let we=0,tt=I.length;we<tt;we++){const at=I[we],gt=at.object,ln=at.geometry,Qe=at.material,Ae=at.group;if(Qe.side===wn&&gt.layers.test(H.layers)){const Lt=Qe.side;Qe.side=sn,Qe.needsUpdate=!0,th(gt,j,H,ln,Qe,Ae),Qe.side=Lt,Qe.needsUpdate=!0,Pe=!0}}Pe===!0&&(C.updateMultisampleRenderTarget(oe),C.updateRenderTargetMipmap(oe))}_.setRenderTarget(ye),_.setClearColor(B,W),Re!==void 0&&(H.viewport=Re),_.toneMapping=Me}function ja(b,I,j){const H=I.isScene===!0?I.overrideMaterial:null;for(let U=0,oe=b.length;U<oe;U++){const de=b[U],ye=de.object,Me=de.geometry,Re=H===null?de.material:H,Pe=de.group;ye.layers.test(j.layers)&&th(ye,I,j,Me,Re,Pe)}}function th(b,I,j,H,U,oe){b.onBeforeRender(_,I,j,H,U,oe),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(_,I,j,H,b,oe),U.transparent===!0&&U.side===wn&&U.forceSinglePass===!1?(U.side=sn,U.needsUpdate=!0,_.renderBufferDirect(j,I,H,U,b,oe),U.side=Yi,U.needsUpdate=!0,_.renderBufferDirect(j,I,H,U,b,oe),U.side=wn):_.renderBufferDirect(j,I,H,U,b,oe),b.onAfterRender(_,I,j,H,U,oe)}function Ha(b,I,j){I.isScene!==!0&&(I=Ue);const H=Ce.get(b),U=x.state.lights,oe=x.state.shadowsArray,de=U.state.version,ye=Ee.getParameters(b,U.state,oe,I,j),Me=Ee.getProgramCacheKey(ye);let Re=H.programs;H.environment=b.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(b.isMeshStandardMaterial?O:E).get(b.envMap||H.environment),H.envMapRotation=H.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",qe),Re=new Map,H.programs=Re);let Pe=Re.get(Me);if(Pe!==void 0){if(H.currentProgram===Pe&&H.lightsStateVersion===de)return ih(b,ye),Pe}else ye.uniforms=Ee.getUniforms(b),b.onBeforeCompile(ye,_),Pe=Ee.acquireProgram(ye,Me),Re.set(Me,Pe),H.uniforms=ye.uniforms;const we=H.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(we.clippingPlanes=ae.uniform),ih(b,ye),H.needsLights=w0(b),H.lightsStateVersion=de,H.needsLights&&(we.ambientLightColor.value=U.state.ambient,we.lightProbe.value=U.state.probe,we.directionalLights.value=U.state.directional,we.directionalLightShadows.value=U.state.directionalShadow,we.spotLights.value=U.state.spot,we.spotLightShadows.value=U.state.spotShadow,we.rectAreaLights.value=U.state.rectArea,we.ltc_1.value=U.state.rectAreaLTC1,we.ltc_2.value=U.state.rectAreaLTC2,we.pointLights.value=U.state.point,we.pointLightShadows.value=U.state.pointShadow,we.hemisphereLights.value=U.state.hemi,we.directionalShadowMap.value=U.state.directionalShadowMap,we.directionalShadowMatrix.value=U.state.directionalShadowMatrix,we.spotShadowMap.value=U.state.spotShadowMap,we.spotLightMatrix.value=U.state.spotLightMatrix,we.spotLightMap.value=U.state.spotLightMap,we.pointShadowMap.value=U.state.pointShadowMap,we.pointShadowMatrix.value=U.state.pointShadowMatrix),H.currentProgram=Pe,H.uniformsList=null,Pe}function nh(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=Yo.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function ih(b,I){const j=Ce.get(b);j.outputColorSpace=I.outputColorSpace,j.batching=I.batching,j.batchingColor=I.batchingColor,j.instancing=I.instancing,j.instancingColor=I.instancingColor,j.instancingMorph=I.instancingMorph,j.skinning=I.skinning,j.morphTargets=I.morphTargets,j.morphNormals=I.morphNormals,j.morphColors=I.morphColors,j.morphTargetsCount=I.morphTargetsCount,j.numClippingPlanes=I.numClippingPlanes,j.numIntersection=I.numClipIntersection,j.vertexAlphas=I.vertexAlphas,j.vertexTangents=I.vertexTangents,j.toneMapping=I.toneMapping}function M0(b,I,j,H,U){I.isScene!==!0&&(I=Ue),C.resetTextureUnits();const oe=I.fog,de=H.isMeshStandardMaterial?I.environment:null,ye=A===null?_.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ji,Me=(H.isMeshStandardMaterial?O:E).get(H.envMap||de),Re=H.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Pe=!!j.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),we=!!j.morphAttributes.position,tt=!!j.morphAttributes.normal,at=!!j.morphAttributes.color;let gt=Wi;H.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=_.toneMapping);const ln=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Qe=ln!==void 0?ln.length:0,Ae=Ce.get(H),Lt=x.state.lights;if(z===!0&&(Y===!0||b!==V)){const yn=b===V&&H.id===P;ae.setState(H,b,yn)}let Je=!1;H.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Lt.state.version||Ae.outputColorSpace!==ye||U.isBatchedMesh&&Ae.batching===!1||!U.isBatchedMesh&&Ae.batching===!0||U.isBatchedMesh&&Ae.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Ae.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Ae.instancing===!1||!U.isInstancedMesh&&Ae.instancing===!0||U.isSkinnedMesh&&Ae.skinning===!1||!U.isSkinnedMesh&&Ae.skinning===!0||U.isInstancedMesh&&Ae.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Ae.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Ae.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Ae.instancingMorph===!1&&U.morphTexture!==null||Ae.envMap!==Me||H.fog===!0&&Ae.fog!==oe||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ae.numPlanes||Ae.numIntersection!==ae.numIntersection)||Ae.vertexAlphas!==Re||Ae.vertexTangents!==Pe||Ae.morphTargets!==we||Ae.morphNormals!==tt||Ae.morphColors!==at||Ae.toneMapping!==gt||Ae.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,Ae.__version=H.version);let Nn=Ae.currentProgram;Je===!0&&(Nn=Ha(H,I,U));let Pr=!1,cn=!1,$l=!1;const yt=Nn.getUniforms(),Si=Ae.uniforms;if(Te.useProgram(Nn.program)&&(Pr=!0,cn=!0,$l=!0),H.id!==P&&(P=H.id,cn=!0),Pr||V!==b){Ne.reverseDepthBuffer?(se.copy(b.projectionMatrix),uy(se),dy(se),yt.setValue(R,"projectionMatrix",se)):yt.setValue(R,"projectionMatrix",b.projectionMatrix),yt.setValue(R,"viewMatrix",b.matrixWorldInverse);const yn=yt.map.cameraPosition;yn!==void 0&&yn.setValue(R,Se.setFromMatrixPosition(b.matrixWorld)),Ne.logarithmicDepthBuffer&&yt.setValue(R,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&yt.setValue(R,"isOrthographic",b.isOrthographicCamera===!0),V!==b&&(V=b,cn=!0,$l=!0)}if(U.isSkinnedMesh){yt.setOptional(R,U,"bindMatrix"),yt.setOptional(R,U,"bindMatrixInverse");const yn=U.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),yt.setValue(R,"boneTexture",yn.boneTexture,C))}U.isBatchedMesh&&(yt.setOptional(R,U,"batchingTexture"),yt.setValue(R,"batchingTexture",U._matricesTexture,C),yt.setOptional(R,U,"batchingIdTexture"),yt.setValue(R,"batchingIdTexture",U._indirectTexture,C),yt.setOptional(R,U,"batchingColorTexture"),U._colorsTexture!==null&&yt.setValue(R,"batchingColorTexture",U._colorsTexture,C));const Kl=j.morphAttributes;if((Kl.position!==void 0||Kl.normal!==void 0||Kl.color!==void 0)&&Ie.update(U,j,Nn),(cn||Ae.receiveShadow!==U.receiveShadow)&&(Ae.receiveShadow=U.receiveShadow,yt.setValue(R,"receiveShadow",U.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Si.envMap.value=Me,Si.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(Si.envMapIntensity.value=I.environmentIntensity),cn&&(yt.setValue(R,"toneMappingExposure",_.toneMappingExposure),Ae.needsLights&&E0(Si,$l),oe&&H.fog===!0&&ce.refreshFogUniforms(Si,oe),ce.refreshMaterialUniforms(Si,H,J,G,x.state.transmissionRenderTarget[b.id]),Yo.upload(R,nh(Ae),Si,C)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Yo.upload(R,nh(Ae),Si,C),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&yt.setValue(R,"center",U.center),yt.setValue(R,"modelViewMatrix",U.modelViewMatrix),yt.setValue(R,"normalMatrix",U.normalMatrix),yt.setValue(R,"modelMatrix",U.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const yn=H.uniformsGroups;for(let Zl=0,b0=yn.length;Zl<b0;Zl++){const rh=yn[Zl];D.update(rh,Nn),D.bind(rh,Nn)}}return Nn}function E0(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function w0(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(b,I,j){Ce.get(b.texture).__webglTexture=I,Ce.get(b.depthTexture).__webglTexture=j;const H=Ce.get(b);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=j===void 0,H.__autoAllocateDepthBuffer||Le.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const j=Ce.get(b);j.__webglFramebuffer=I,j.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,j=0){A=b,N=I,T=j;let H=!0,U=null,oe=!1,de=!1;if(b){const Me=Ce.get(b);if(Me.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(R.FRAMEBUFFER,null),H=!1;else if(Me.__webglFramebuffer===void 0)C.setupRenderTarget(b);else if(Me.__hasExternalTextures)C.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const we=b.depthTexture;if(Me.__boundDepthTexture!==we){if(we!==null&&Ce.has(we)&&(b.width!==we.image.width||b.height!==we.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(de=!0);const Pe=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Pe[I])?U=Pe[I][j]:U=Pe[I],oe=!0):b.samples>0&&C.useMultisampledRTT(b)===!1?U=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Pe)?U=Pe[j]:U=Pe,y.copy(b.viewport),w.copy(b.scissor),F=b.scissorTest}else y.copy(K).multiplyScalar(J).floor(),w.copy(re).multiplyScalar(J).floor(),F=be;if(Te.bindFramebuffer(R.FRAMEBUFFER,U)&&H&&Te.drawBuffers(b,U),Te.viewport(y),Te.scissor(w),Te.setScissorTest(F),oe){const Me=Ce.get(b.texture);R.framebufferTexture2D(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,R.TEXTURE_CUBE_MAP_POSITIVE_X+I,Me.__webglTexture,j)}else if(de){const Me=Ce.get(b.texture),Re=I||0;R.framebufferTextureLayer(R.FRAMEBUFFER,R.COLOR_ATTACHMENT0,Me.__webglTexture,j||0,Re)}P=-1},this.readRenderTargetPixels=function(b,I,j,H,U,oe,de){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Te.bindFramebuffer(R.FRAMEBUFFER,ye);try{const Me=b.texture,Re=Me.format,Pe=Me.type;if(!Ne.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-H&&j>=0&&j<=b.height-U&&R.readPixels(I,j,H,U,Be.convert(Re),Be.convert(Pe),oe)}finally{const Me=A!==null?Ce.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(b,I,j,H,U,oe,de){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){const Me=b.texture,Re=Me.format,Pe=Me.type;if(!Ne.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-H&&j>=0&&j<=b.height-U){Te.bindFramebuffer(R.FRAMEBUFFER,ye);const we=R.createBuffer();R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.bufferData(R.PIXEL_PACK_BUFFER,oe.byteLength,R.STREAM_READ),R.readPixels(I,j,H,U,Be.convert(Re),Be.convert(Pe),0);const tt=A!==null?Ce.get(A).__webglFramebuffer:null;Te.bindFramebuffer(R.FRAMEBUFFER,tt);const at=R.fenceSync(R.SYNC_GPU_COMMANDS_COMPLETE,0);return R.flush(),await cy(R,at,4),R.bindBuffer(R.PIXEL_PACK_BUFFER,we),R.getBufferSubData(R.PIXEL_PACK_BUFFER,0,oe),R.deleteBuffer(we),R.deleteSync(at),oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,j=0){b.isTexture!==!0&&(qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const H=Math.pow(2,-j),U=Math.floor(b.image.width*H),oe=Math.floor(b.image.height*H),de=I!==null?I.x:0,ye=I!==null?I.y:0;C.setTexture2D(b,0),R.copyTexSubImage2D(R.TEXTURE_2D,j,0,0,de,ye,U,oe),Te.unbindTexture()},this.copyTextureToTexture=function(b,I,j=null,H=null,U=0){b.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,j=null);let oe,de,ye,Me,Re,Pe;j!==null?(oe=j.max.x-j.min.x,de=j.max.y-j.min.y,ye=j.min.x,Me=j.min.y):(oe=b.image.width,de=b.image.height,ye=0,Me=0),H!==null?(Re=H.x,Pe=H.y):(Re=0,Pe=0);const we=Be.convert(I.format),tt=Be.convert(I.type);C.setTexture2D(I,0),R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const at=R.getParameter(R.UNPACK_ROW_LENGTH),gt=R.getParameter(R.UNPACK_IMAGE_HEIGHT),ln=R.getParameter(R.UNPACK_SKIP_PIXELS),Qe=R.getParameter(R.UNPACK_SKIP_ROWS),Ae=R.getParameter(R.UNPACK_SKIP_IMAGES),Lt=b.isCompressedTexture?b.mipmaps[U]:b.image;R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Lt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ye),R.pixelStorei(R.UNPACK_SKIP_ROWS,Me),b.isDataTexture?R.texSubImage2D(R.TEXTURE_2D,U,Re,Pe,oe,de,we,tt,Lt.data):b.isCompressedTexture?R.compressedTexSubImage2D(R.TEXTURE_2D,U,Re,Pe,Lt.width,Lt.height,we,Lt.data):R.texSubImage2D(R.TEXTURE_2D,U,Re,Pe,oe,de,we,tt,Lt),R.pixelStorei(R.UNPACK_ROW_LENGTH,at),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt),R.pixelStorei(R.UNPACK_SKIP_PIXELS,ln),R.pixelStorei(R.UNPACK_SKIP_ROWS,Qe),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Ae),U===0&&I.generateMipmaps&&R.generateMipmap(R.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,I,j=null,H=null,U=0){b.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,H=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0);let oe,de,ye,Me,Re,Pe,we,tt,at;const gt=b.isCompressedTexture?b.mipmaps[U]:b.image;j!==null?(oe=j.max.x-j.min.x,de=j.max.y-j.min.y,ye=j.max.z-j.min.z,Me=j.min.x,Re=j.min.y,Pe=j.min.z):(oe=gt.width,de=gt.height,ye=gt.depth,Me=0,Re=0,Pe=0),H!==null?(we=H.x,tt=H.y,at=H.z):(we=0,tt=0,at=0);const ln=Be.convert(I.format),Qe=Be.convert(I.type);let Ae;if(I.isData3DTexture)C.setTexture3D(I,0),Ae=R.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)C.setTexture2DArray(I,0),Ae=R.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}R.pixelStorei(R.UNPACK_FLIP_Y_WEBGL,I.flipY),R.pixelStorei(R.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),R.pixelStorei(R.UNPACK_ALIGNMENT,I.unpackAlignment);const Lt=R.getParameter(R.UNPACK_ROW_LENGTH),Je=R.getParameter(R.UNPACK_IMAGE_HEIGHT),Nn=R.getParameter(R.UNPACK_SKIP_PIXELS),Pr=R.getParameter(R.UNPACK_SKIP_ROWS),cn=R.getParameter(R.UNPACK_SKIP_IMAGES);R.pixelStorei(R.UNPACK_ROW_LENGTH,gt.width),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,gt.height),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Me),R.pixelStorei(R.UNPACK_SKIP_ROWS,Re),R.pixelStorei(R.UNPACK_SKIP_IMAGES,Pe),b.isDataTexture||b.isData3DTexture?R.texSubImage3D(Ae,U,we,tt,at,oe,de,ye,ln,Qe,gt.data):I.isCompressedArrayTexture?R.compressedTexSubImage3D(Ae,U,we,tt,at,oe,de,ye,ln,gt.data):R.texSubImage3D(Ae,U,we,tt,at,oe,de,ye,ln,Qe,gt),R.pixelStorei(R.UNPACK_ROW_LENGTH,Lt),R.pixelStorei(R.UNPACK_IMAGE_HEIGHT,Je),R.pixelStorei(R.UNPACK_SKIP_PIXELS,Nn),R.pixelStorei(R.UNPACK_SKIP_ROWS,Pr),R.pixelStorei(R.UNPACK_SKIP_IMAGES,cn),U===0&&I.generateMipmaps&&R.generateMipmap(Ae),Te.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&C.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?C.setTextureCube(b,0):b.isData3DTexture?C.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?C.setTexture2DArray(b,0):C.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){N=0,T=0,A=null,Te.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Hf?"display-p3":"srgb",n.unpackColorSpace=et.workingColorSpace===Vl?"display-p3":"srgb"}}class qf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=n}clone(){return new qf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class g0 extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class v0 extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const bl=new k,Al=new k,dm=new ft,Ks=new Gf,Co=new Wl,tu=new k,fm=new k;class Sb extends Ut{constructor(e=new on,n=new v0){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)bl.fromBufferAttribute(n,r-1),Al.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=bl.distanceTo(Al);e.setAttribute("lineDistance",new mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Co.copy(i.boundingSphere),Co.applyMatrix4(r),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;dm.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(dm);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=this.isLineSegments?2:1,h=i.index,p=i.attributes.position;if(h!==null){const m=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let S=m,x=g-1;S<x;S+=u){const d=h.getX(S),v=h.getX(S+1),_=Ro(this,e,Ks,c,d,v);_&&n.push(_)}if(this.isLineLoop){const S=h.getX(g-1),x=h.getX(m),d=Ro(this,e,Ks,c,S,x);d&&n.push(d)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let S=m,x=g-1;S<x;S+=u){const d=Ro(this,e,Ks,c,S,S+1);d&&n.push(d)}if(this.isLineLoop){const S=Ro(this,e,Ks,c,g-1,m);S&&n.push(S)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ro(t,e,n,i,r,s){const a=t.geometry.attributes.position;if(bl.fromBufferAttribute(a,r),Al.fromBufferAttribute(a,s),n.distanceSqToSegment(bl,Al,tu,fm)>i)return;tu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(tu);if(!(c<e.near||c>e.far))return{distance:c,point:fm.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:t}}class Yf extends on{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],a=[],o=[],c=[],u=new k,h=new We;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=n;f++,p+=3){const m=i+f/n*r;u.x=e*Math.cos(m),u.y=e*Math.sin(m),a.push(u.x,u.y,u.z),o.push(0,0,1),h.x=(a[p]/e+1)/2,h.y=(a[p+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Jt extends on{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const u=this;r=Math.floor(r),s=Math.floor(s);const h=[],f=[],p=[],m=[];let g=0;const S=[],x=i/2;let d=0;v(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new mt(f,3)),this.setAttribute("normal",new mt(p,3)),this.setAttribute("uv",new mt(m,2));function v(){const M=new k,N=new k;let T=0;const A=(n-e)/i;for(let P=0;P<=s;P++){const V=[],y=P/s,w=y*(n-e)+e;for(let F=0;F<=r;F++){const B=F/r,W=B*c+o,q=Math.sin(W),G=Math.cos(W);N.x=w*q,N.y=-y*i+x,N.z=w*G,f.push(N.x,N.y,N.z),M.set(q,A,G).normalize(),p.push(M.x,M.y,M.z),m.push(B,1-y),V.push(g++)}S.push(V)}for(let P=0;P<r;P++)for(let V=0;V<s;V++){const y=S[V][P],w=S[V+1][P],F=S[V+1][P+1],B=S[V][P+1];e>0&&(h.push(y,w,B),T+=3),n>0&&(h.push(w,F,B),T+=3)}u.addGroup(d,T,0),d+=T}function _(M){const N=g,T=new We,A=new k;let P=0;const V=M===!0?e:n,y=M===!0?1:-1;for(let F=1;F<=r;F++)f.push(0,x*y,0),p.push(0,y,0),m.push(.5,.5),g++;const w=g;for(let F=0;F<=r;F++){const W=F/r*c+o,q=Math.cos(W),G=Math.sin(W);A.x=V*G,A.y=x*y,A.z=V*q,f.push(A.x,A.y,A.z),p.push(0,y,0),T.x=q*.5+.5,T.y=G*.5*y+.5,m.push(T.x,T.y),g++}for(let F=0;F<r;F++){const B=N+F,W=w+F;M===!0?h.push(W,W+1,B):h.push(W+1,W,B),P+=3}u.addGroup(d,P,M===!0?1:2),d+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jt(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ql extends Jt{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ql(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $f extends on{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],c=[],u=[],h=[];let f=e;const p=(n-e)/r,m=new k,g=new We;for(let S=0;S<=r;S++){for(let x=0;x<=i;x++){const d=s+x/i*a;m.x=f*Math.cos(d),m.y=f*Math.sin(d),c.push(m.x,m.y,m.z),u.push(0,0,1),g.x=(m.x/n+1)/2,g.y=(m.y/n+1)/2,h.push(g.x,g.y)}f+=p}for(let S=0;S<r;S++){const x=S*(i+1);for(let d=0;d<i;d++){const v=d+x,_=v,M=v+i+1,N=v+i+2,T=v+1;o.push(_,M,T),o.push(M,N,T)}}this.setIndex(o),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $f(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Kf extends on{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let u=0;const h=[],f=new k,p=new k,m=[],g=[],S=[],x=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let M=0;d===0&&a===0?M=.5/n:d===i&&c===Math.PI&&(M=-.5/n);for(let N=0;N<=n;N++){const T=N/n;f.x=-e*Math.cos(r+T*s)*Math.sin(a+_*o),f.y=e*Math.cos(a+_*o),f.z=e*Math.sin(r+T*s)*Math.sin(a+_*o),g.push(f.x,f.y,f.z),p.copy(f).normalize(),S.push(p.x,p.y,p.z),x.push(T+M,1-_),v.push(u++)}h.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const _=h[d][v+1],M=h[d][v],N=h[d+1][v],T=h[d+1][v+1];(d!==0||a>0)&&m.push(_,M,T),(d!==i-1||c<Math.PI)&&m.push(M,N,T)}this.setIndex(m),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(S,3)),this.setAttribute("uv",new mt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pa extends on{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const a=[],o=[],c=[],u=[],h=new k,f=new k,p=new k;for(let m=0;m<=i;m++)for(let g=0;g<=r;g++){const S=g/r*s,x=m/i*Math.PI*2;f.x=(e+n*Math.cos(x))*Math.cos(S),f.y=(e+n*Math.cos(x))*Math.sin(S),f.z=n*Math.sin(x),o.push(f.x,f.y,f.z),h.x=e*Math.cos(S),h.y=e*Math.sin(S),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),u.push(g/r),u.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=r;g++){const S=(r+1)*m+g-1,x=(r+1)*(m-1)+g-1,d=(r+1)*(m-1)+g,v=(r+1)*m+g;a.push(S,x,v),a.push(x,d,v)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(c,3)),this.setAttribute("uv",new mt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fn extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qg,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hm extends fn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Mb extends v0{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}class _0 extends Ut{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const nu=new ft,pm=new k,mm=new k;class Eb{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.map=null,this.mapPass=null,this.matrix=new ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wf,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new _t(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),n.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(mm),n.updateMatrixWorld(),nu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(nu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class wb extends Eb{constructor(){super(new u0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bd extends _0{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new wb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class y0 extends _0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class S0{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=xm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function xm(){return performance.now()}const gm=new ft;class bb{constructor(e,n,i=0,r=1/0){this.ray=new Gf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Vf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return gm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(gm),this}intersectObject(e,n=!0,i=[]){return kd(e,this,i,n),i.sort(vm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)kd(e[r],this,i,n);return i.sort(vm),i}}function vm(t,e){return t.distance-e.distance}function kd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)kd(s[a],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Uf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Uf);function Ab({scrollProgress:t=0,onGownHoverChange:e}){const n=fe.useRef(null),i=fe.useRef(!1),r=fe.useRef({x:0,y:0}),s=fe.useRef(.003),[a,o]=fe.useState(!1);return fe.useEffect(()=>{const c=n.current;if(!c)return;const u=c.clientWidth,h=c.clientHeight,f=new g0;f.background=new He(16249578),f.fog=new qf(16249578,.04);const p=new pn(40,u/h,.1,100);p.position.set(0,1.3,5.2);const m=new x0({antialias:!0,alpha:!0,powerPreference:"high-performance"});m.setSize(u,h),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=kg,m.toneMapping=zg,m.toneMappingExposure=1.05,c.appendChild(m.domElement);const g=new y0(16644334,1.4);f.add(g);const S=new Bd(16774109,2.4);S.position.set(4,7,3),S.castShadow=!0,S.shadow.mapSize.width=1024,S.shadow.mapSize.height=1024,S.shadow.bias=-1e-4,f.add(S);const x=new Bd(14017518,.8);x.position.set(-4,-2,-2),f.add(x);const d=new Cs(30,40),v=new fn({color:15327183,roughness:.85,metalness:.05}),_=new Ye(d,v);_.rotation.x=-Math.PI/2,_.position.y=-1.1,_.receiveShadow=!0,f.add(_);const M=new $n;M.name="arch_kit";const N=new fn({color:15327183,roughness:.9,metalness:.02});for(let R=0;R<6;R++){const Ge=-R*3.5,Le=new Ye(new Jt(.18,.22,5,24),N);Le.position.set(-2.8,1.4,Ge),Le.castShadow=!0,Le.receiveShadow=!0,M.add(Le);const Ne=new Ye(new Jt(.18,.22,5,24),N);Ne.position.set(2.8,1.4,Ge),Ne.castShadow=!0,Ne.receiveShadow=!0,M.add(Ne);const Te=new Ye(new Nr(6.2,.35,.5),N);Te.position.set(0,3.8,Ge),Te.castShadow=!0,M.add(Te)}f.add(M);const T=new $n;T.name="pedestal";const A=new fn({color:15129784,roughness:.4,metalness:.1}),P=new Ye(new Jt(.85,.95,.25,32),A);P.position.y=-.98,P.receiveShadow=!0,T.add(P);const V=new Ye(new Jt(.7,.75,.55,32),A);V.position.y=-.6,V.castShadow=!0,V.receiveShadow=!0,T.add(V),f.add(T);const y=new $n;y.name="hero_gown",y.position.set(0,.2,0);const w=new hm({color:15185050,roughness:.35,metalness:.05,transmission:.45,thickness:.6,sheen:.8,sheenColor:16770780,transparent:!0,opacity:.94,side:wn}),F=new Jt(.24,.28,.85,28),B=new Ye(F,w);B.position.y=.45,B.castShadow=!0,y.add(B);const W=new Pa(.32,.08,16,32,Math.PI),q=new Ye(W,w);q.rotation.x=Math.PI/2,q.position.set(0,.85,0),y.add(q);const G=new ql(.95,1.8,36,12,!0),J=new Ye(G,w);J.position.y=-.4,J.castShadow=!0,y.add(J);for(let R=0;R<8;R++){const Ge=R/8*Math.PI*2,Le=new Jt(.04,.25,1.4,12),Ne=new Ye(Le,w);Ne.position.set(Math.cos(Ge)*.4,-.35,Math.sin(Ge)*.4),Ne.rotation.z=Math.sin(Ge)*.18,Ne.rotation.x=Math.cos(Ge)*.18,y.add(Ne)}f.add(y);const L=new hm({color:16645111,transparent:!0,opacity:.45,roughness:.6,transmission:.6,side:wn}),$=new Cs(1.8,4.2,16,24),K=new Ye($,L);K.position.set(-2.2,1.5,1.2),K.rotation.y=.4,f.add(K);const re=new Ye($,L);re.position.set(2.2,1.5,1),re.rotation.y=-.4,f.add(re);let be,ze=new S0,z={x:0,y:0};const Y=R=>{const Ge=c.getBoundingClientRect();if(z.x=(R.clientX-Ge.left)/u*2-1,z.y=-((R.clientY-Ge.top)/h)*2+1,i.current){const Le=R.clientX-r.current.x;s.current=Le*.005,y.rotation.y+=s.current,r.current={x:R.clientX,y:R.clientY}}},se=R=>{i.current=!0,r.current={x:R.clientX,y:R.clientY}},ne=()=>{i.current=!1},Se=R=>{R.touches.length===1&&(i.current=!0,r.current={x:R.touches[0].clientX,y:R.touches[0].clientY})},he=R=>{if(i.current&&R.touches.length===1){const Ge=R.touches[0].clientX-r.current.x;s.current=Ge*.005,y.rotation.y+=s.current,r.current={x:R.touches[0].clientX,y:R.touches[0].clientY}}},Ue=()=>{i.current=!1};c.addEventListener("mousemove",Y),c.addEventListener("mousedown",se),window.addEventListener("mouseup",ne),c.addEventListener("touchstart",Se,{passive:!0}),c.addEventListener("touchmove",he,{passive:!0}),window.addEventListener("touchend",Ue);const je=()=>{be=requestAnimationFrame(je);const R=ze.getElapsedTime();i.current||(y.rotation.y+=s.current,s.current*=.96,Math.abs(s.current)<.002&&(s.current=.0025)),y.position.y=.2+Math.sin(R*1.2)*.02;const Ge=Math.sin(R*1.5)*.12+z.x*.15;K.position.x=-2.2+Ge*.3,K.rotation.y=.35+Ge*.2,re.position.x=2.2-Ge*.3,re.rotation.y=-.35-Ge*.2,p.position.z=5.2-t*1.8,p.position.y=1.3-t*.3,m.render(f,p)};je();const Fe=()=>{if(!c)return;const R=c.clientWidth,Ge=c.clientHeight;p.aspect=R/Ge,p.updateProjectionMatrix(),m.setSize(R,Ge)};return window.addEventListener("resize",Fe),()=>{cancelAnimationFrame(be),window.removeEventListener("resize",Fe),c.removeEventListener("mousemove",Y),c.removeEventListener("mousedown",se),window.removeEventListener("mouseup",ne),c.removeEventListener("touchstart",Se),c.removeEventListener("touchmove",he),window.removeEventListener("touchend",Ue),m.domElement&&c.contains(m.domElement)&&c.removeChild(m.domElement),m.dispose()}},[t]),l.jsx("div",{ref:n,className:"w-full h-full relative cursor-turn select-none",style:{minHeight:"520px",width:"100%",height:"100%"},onMouseEnter:()=>{o(!0),e&&e(!0)},onMouseLeave:()=>{o(!1),e&&e(!1)},children:l.jsxs("div",{className:"absolute top-6 right-6 pointer-events-none transition-opacity duration-300",style:{opacity:a?1:.8,background:"rgba(241, 233, 220, 0.85)",backdropFilter:"blur(8px)",border:"1px solid rgba(184, 164, 140, 0.5)",borderRadius:"9999px",padding:"6px 14px",display:"flex",alignItems:"center",gap:"6px",boxShadow:"0 4px 14px rgba(27, 25, 23, 0.06)"},children:[l.jsx("span",{style:{width:"6px",height:"6px",borderRadius:"50%",backgroundColor:"#E7B49A",display:"inline-block"}}),l.jsx("span",{className:"label-caps-dark",style:{fontSize:"0.625rem",letterSpacing:"0.14em"},children:"hero_gown · Drag to Turn"})]})})}function Tb({onSelectGarment:t}){const[e,n]=fe.useState(0),i=xp[e];return l.jsxs("section",{className:"relative w-full py-20 px-4 md:px-12 bg-[#F1E9DC]/40 border-y border-[#B8A48C]/30 overflow-hidden",children:[l.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 rounded-full bg-[#E7B49A]/10 blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#D5E3EE]/15 blur-3xl pointer-events-none"}),l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"text-center max-w-2xl mx-auto mb-16",children:[l.jsx("span",{className:"label-caps",children:"Room 02 · Stitch-Scroll"}),l.jsx("h2",{className:"font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-4",children:"The Journey of a Design"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans leading-relaxed",children:"One continuous running-stitch thread traces each creation through six transformative stages — from an architect’s initial graphite line to the boutique rail."})]}),l.jsxs("div",{className:"relative mb-12 px-6",children:[l.jsx("div",{className:"absolute top-1/2 left-8 right-8 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#B8A48C]/60 pointer-events-none"}),l.jsx("div",{className:"absolute top-1/2 left-8 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#E7B49A] transition-all duration-700 pointer-events-none",style:{width:`${e/5*85}%`}}),l.jsx("div",{className:"relative flex justify-between items-center z-10",children:xp.map((r,s)=>{const a=s<e,o=s===e;return l.jsxs("button",{onClick:()=>n(s),className:"flex flex-col items-center group focus:outline-none",children:[l.jsx("div",{className:`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-500 text-xs md:text-sm font-mono shadow-subtle ${o?"bg-[#1B1917] text-[#F7F2EA] scale-110 ring-4 ring-[#E7B49A]/50":a?"bg-[#E7B49A] text-[#1B1917]":"bg-[#F7F2EA] text-[#B8A48C] border border-[#B8A48C]/50 hover:border-[#1B1917]"}`,children:a?l.jsx(Lg,{size:16}):`0${s+1}`}),l.jsx("span",{className:`text-[11px] md:text-xs mt-3 tracking-wide hidden sm:block text-center max-w-[90px] transition-colors ${o?"font-semibold text-[#1B1917]":"text-[#B8A48C] group-hover:text-[#1B1917]"}`,children:r.title})]},r.id)})})]}),l.jsxs("div",{className:"linen-card p-6 md:p-12 min-h-[460px] flex flex-col md:flex-row items-center gap-10",children:[l.jsxs("div",{className:"w-full md:w-1/2 flex items-center justify-center relative min-h-[340px]",children:[e===0&&l.jsxs("div",{className:"relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/30 animate-fadeIn",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-[#E9DFCF] pb-3 mb-4",children:[l.jsx("span",{className:"label-caps",children:"Draft Technical Spec #A2W-804"}),l.jsx("span",{className:"text-[11px] font-mono text-[#B8A48C]",children:"280 GSM Paper"})]}),l.jsxs("svg",{className:"w-full h-48 mx-auto",viewBox:"0 0 200 240",fill:"none",children:[l.jsx("path",{d:"M100 20 C110 30, 115 50, 100 70 C85 50, 90 30, 100 20 Z",stroke:"#1B1917",strokeWidth:"1.5",strokeDasharray:"4 2",className:"thread-animated"}),l.jsx("path",{d:"M80 75 C100 80, 100 80, 120 75 L150 210 C100 225, 100 225, 50 210 Z",stroke:"#1B1917",strokeWidth:"1.8",strokeLinecap:"round"}),l.jsx("path",{d:"M100 75 L100 218 M75 140 C100 150, 100 150, 125 140",stroke:"#B8A48C",strokeWidth:"1",strokeDasharray:"2 2"})]}),l.jsxs("div",{className:"mt-4 p-3 bg-[#F7F2EA] rounded-xl text-xs space-y-1 text-[#1B1917]/80",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Silhouette:"})," ",l.jsx("strong",{className:"text-[#1B1917]",children:"Fluted Column Gown"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Fabric Intent:"})," ",l.jsx("strong",{children:"Mulberry Silk Chiffon"})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{children:"Author:"})," ",l.jsx("strong",{children:"Maya Senanayake"})]})]})]}),e===1&&l.jsxs("div",{className:"relative w-full max-w-sm flex flex-col items-center animate-fadeIn",children:[l.jsxs("div",{className:"w-56 h-56 rounded-full border border-dashed border-[#B8A48C] flex items-center justify-center relative",children:[l.jsxs("div",{className:"w-32 h-32 rounded-2xl bg-[#E7B49A] shadow-float flex flex-col items-center justify-center text-center p-3 text-[#1B1917] border border-white/60",children:[l.jsx("span",{className:"label-caps-dark text-[10px]",children:"Primary Swatch"}),l.jsx("strong",{className:"text-sm font-serif mt-1",children:"Blush Peach Silk"}),l.jsx("span",{className:"text-[10px] opacity-75 font-mono",children:"Pantone 14-1318"})]}),l.jsx("div",{className:"absolute -top-3 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium",children:"📌 Evening Gala"}),l.jsx("div",{className:"absolute -bottom-3 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium",children:"📌 Hand-Pleated"}),l.jsx("div",{className:"absolute -left-6 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium",children:"📌 100% Organic Silk"}),l.jsx("div",{className:"absolute -right-6 bg-white px-3 py-1 rounded-full text-xs shadow-subtle border border-[#B8A48C]/40 font-medium",children:"📌 Zero-Waste Cut"})]}),l.jsx("span",{className:"text-xs text-[#B8A48C] mt-4 font-mono",children:"Swatches verified & archived"})]}),e===2&&l.jsxs("div",{className:"relative w-full max-w-sm p-6 bg-[#FAF7F0] rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("span",{className:"label-caps",children:"Muslin Fitting Toile"}),l.jsx("span",{className:"text-xs font-mono text-[#4A6B53]",children:"Fit Pass 100%"})]}),l.jsxs("div",{className:"relative w-44 h-56 mx-auto bg-[#F2EDE2] rounded-xl border-2 border-dashed border-[#B8A48C] flex items-center justify-center overflow-hidden",children:[l.jsx("span",{className:"text-xs text-[#B8A48C] font-mono tracking-widest uppercase",children:"Toile Sample"}),l.jsx("div",{className:"absolute top-4 left-6 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm"}),l.jsx("div",{className:"absolute top-12 right-6 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm"}),l.jsx("div",{className:"absolute bottom-8 left-10 w-2 h-2 rounded-full bg-[#E7B49A] shadow-sm"}),l.jsx("div",{className:"absolute inset-0 flex items-center justify-center bg-white/60 backdrop-blur-[2px]",children:l.jsxs("div",{className:"w-28 h-28 rounded-full border-2 border-[#1B1917] p-1 flex flex-col items-center justify-center text-center rotate-[-12deg] bg-[#F7F2EA]/90 shadow-subtle",children:[l.jsx(p1,{size:20,className:"text-[#4A6B53] mb-1"}),l.jsx("span",{className:"text-[10px] font-bold tracking-widest uppercase text-[#1B1917]",children:"APPROVED"}),l.jsx("span",{className:"text-[8px] text-[#B8A48C] font-mono",children:"COLOMBO ATELIER"})]})})]})]}),e===3&&l.jsxs("div",{className:"relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("span",{className:"label-caps",children:"Production Floor"}),l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:"Batch #LKA-018"})]}),l.jsxs("div",{className:"p-4 bg-[#F7F2EA] rounded-xl border border-[#E9DFCF] space-y-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(Fg,{size:18,className:"text-[#1B1917]"}),l.jsxs("div",{className:"text-xs",children:[l.jsx("p",{className:"font-medium text-[#1B1917]",children:"Pattern Cutting Completed"}),l.jsx("p",{className:"text-[10px] text-[#B8A48C]",children:"Lanka Fine Silk Weavers"})]})]}),l.jsx("div",{className:"running-stitch-h my-2"}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-[#E7B49A] animate-ping"}),l.jsxs("div",{className:"text-xs",children:[l.jsx("p",{className:"font-medium text-[#1B1917]",children:"Assembly & Hand-Pleating"}),l.jsx("p",{className:"text-[10px] text-[#B8A48C]",children:"Master Cutter Sunil Fernando"})]})]}),l.jsx("div",{className:"w-full bg-[#E9DFCF] h-1.5 rounded-full overflow-hidden mt-3",children:l.jsx("div",{className:"bg-[#4A6B53] h-full w-4/5 rounded-full"})}),l.jsx("span",{className:"text-[10px] text-[#4A6B53] font-mono block text-right",children:"80% Stitched"})]})]}),e===4&&l.jsx("div",{className:"relative w-full max-w-sm animate-fadeIn",children:l.jsxs("div",{className:"relative rounded-2xl overflow-hidden shadow-float border border-[#B8A48C]/50 bg-[#1B1917]",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80",alt:"Editorial Photoshoot",className:"w-full h-64 object-cover opacity-90"}),l.jsxs("div",{className:"absolute top-3 left-3 bg-[#1B1917]/80 text-[#F7F2EA] backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] flex items-center gap-1.5",children:[l.jsx(s1,{size:12}),l.jsx("span",{children:"Tariq Thorne · Golden Colonnade"})]}),l.jsxs("div",{className:"absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-md p-2 rounded-xl text-xs flex justify-between items-center text-[#1B1917]",children:[l.jsxs("span",{children:["Model: ",l.jsx("strong",{children:"Keshini Perera"})]}),l.jsx("span",{className:"font-mono text-[10px] text-[#B8A48C]",children:"Frame 04/24"})]})]})}),e===5&&l.jsxs("div",{className:"relative w-full max-w-sm p-6 bg-white rounded-2xl shadow-float border border-[#B8A48C]/40 animate-fadeIn",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("span",{className:"label-caps",children:"Exhibition Rail #01"}),l.jsx("span",{className:"text-xs bg-[#4A6B53]/10 text-[#4A6B53] px-2 py-0.5 rounded-full font-medium",children:"● Live Now"})]}),l.jsxs("div",{className:"p-5 bg-[#FAF6EE] rounded-2xl border-2 border-[#E9DFCF] shadow-subtle relative",children:[l.jsx("div",{className:"w-3 h-3 rounded-full bg-[#1B1917] mx-auto mb-3"}),l.jsx("h4",{className:"font-serif text-lg font-medium text-center text-[#1B1917]",children:"The Peach Chiffon Gown"}),l.jsx("p",{className:"text-xs text-center text-[#B8A48C] mt-0.5",children:"Edition 01 of 18"}),l.jsxs("div",{className:"mt-4 pt-3 border-t border-[#E9DFCF] grid grid-cols-2 gap-2 text-center",children:[l.jsxs("div",{className:"p-2 bg-white rounded-xl border border-[#B8A48C]/30",children:[l.jsx("span",{className:"label-caps text-[9px] block",children:"Direct Wear"}),l.jsx("strong",{className:"text-sm font-serif text-[#1B1917] block mt-0.5",children:"LKR 68,000"}),l.jsx("span",{className:"text-[10px] text-[#B8A48C]",children:"Single Edition"})]}),l.jsxs("div",{className:"p-2 bg-white rounded-xl border border-[#B8A48C]/30",children:[l.jsx("span",{className:"label-caps text-[9px] block",children:"Boutique Stock"}),l.jsx("strong",{className:"text-sm font-serif text-[#1B1917] block mt-0.5",children:"LKR 38,000"}),l.jsx("span",{className:"text-[10px] text-[#B8A48C]",children:"MOQ 20 Pcs"})]})]})]})]})]}),l.jsxs("div",{className:"w-full md:w-1/2 space-y-5",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DFCF] text-xs font-mono text-[#1B1917]",children:[l.jsx("span",{children:i.badge}),l.jsx("span",{children:"·"}),l.jsxs("span",{children:["Stage ",e+1," of 6"]})]}),l.jsx("h3",{className:"font-serif text-3xl md:text-4xl text-[#1B1917] font-normal",children:i.title}),l.jsxs("p",{className:"font-serif italic text-lg md:text-xl text-[#B8A48C]",children:['"',i.shortCopy,'"']}),l.jsx("p",{className:"text-sm text-[#1B1917]/80 leading-relaxed font-sans",children:i.detail}),l.jsxs("div",{className:"pt-4 flex items-center gap-4",children:[l.jsxs("button",{onClick:()=>n(r=>(r+1)%6),className:"btn-pill-ink text-xs",children:[l.jsxs("span",{children:["Advance Thread to Stage 0",(e+1)%6+1]}),l.jsx(_l,{size:14})]}),e===5&&l.jsx("button",{onClick:()=>t&&t("hero_gown"),className:"btn-pill-travertine text-xs",children:"View Gown in Hall →"})]})]})]})]})]})}function Cb({onSelectRole:t,onHoverRole:e}){const n=fe.useRef(null),i=fe.useRef(null),[r,s]=fe.useState(null);return fe.useEffect(()=>{const a=n.current;if(!a)return;const o=a.clientWidth,c=a.clientHeight,u=new g0;u.background=new He(16249578);const h=new pn(45,o/c,.1,100);h.position.set(0,3.8,6.2),h.lookAt(0,0,0);const f=new x0({antialias:!0,alpha:!0});f.setSize(o,c),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.shadowMap.enabled=!0,a.appendChild(f.domElement);const p=new y0(16644075,1.6);u.add(p);const m=new Bd(16771272,2);m.position.set(5,8,4),m.castShadow=!0,u.add(m);const g=new Ye(new Yf(4.8,64),new fn({color:15721942,roughness:.9}));g.rotation.x=-Math.PI/2,g.position.y=-.4,g.receiveShadow=!0,u.add(g);const S=new $f(2.35,2.37,64),x=new da({color:12100748,side:wn}),d=new Ye(S,x);d.rotation.x=-Math.PI/2,d.position.y=-.38,u.add(d);const v=new $n,_=new Jt(.7,.75,.18,36),M=new fn({color:1775895,roughness:.25,metalness:.2}),N=new Ye(_,M);N.position.y=-.15,v.add(N);const T=new Ye(new Pa(.55,.02,16,48),new da({color:15185050}));T.rotation.x=Math.PI/2,T.position.y=-.05,v.add(T),u.add(v);const A=new $n;u.add(A);const P=[],V=2.4;[{id:"designer",name:"orrery_designer",color:15185050},{id:"brand",name:"orrery_brand",color:12100748},{id:"retail",name:"orrery_shop",color:14017518},{id:"model",name:"orrery_model",color:15327183},{id:"customer",name:"orrery_customer",color:15854044},{id:"production",name:"orrery_production",color:12890779}].forEach((z,Y)=>{const se=z.id==="production",ne=se?1/5*Math.PI*2+.35:Y/5*Math.PI*2,Se=se?V*1.35:V,he=new $n;he.userData={roleId:z.id,baseDist:Se,angle:ne,targetY:0,currentY:0},he.name=z.name;const Ue=se?.3:.45,je=se?.22:.32,Fe=new Ye(new Jt(je*.9,je,Ue,24),new fn({color:16117734,roughness:.35}));Fe.position.y=Ue/2-.25,Fe.castShadow=!0,he.add(Fe);let R;if(z.id==="designer"){const C=new Ye(new Jt(.08,.14,.38,16),new fn({color:15185050,roughness:.4}));C.position.y=.32,he.add(C)}else z.id==="brand"?(R=new Ye(new Nr(.24,.32,.04),new fn({color:12100748,metalness:.4,roughness:.2})),R.position.y=.32,he.add(R)):z.id==="retail"?(R=new Ye(new Pa(.16,.03,12,24,Math.PI),new fn({color:13938487,metalness:.8,roughness:.2})),R.position.y=.26,R.rotation.z=Math.PI,he.add(R)):z.id==="model"?(R=new Ye(new Jt(.12,.12,.22,20),new fn({color:1775895,metalness:.6,roughness:.1})),R.rotation.x=Math.PI/2,R.position.y=.3,he.add(R)):z.id==="customer"?(R=new Ye(new ql(.16,.36,16),new fn({color:15327183,roughness:.6})),R.position.y=.3,he.add(R)):(R=new Ye(new Jt(.1,.1,.24,16),new fn({color:15185050,roughness:.5})),R.position.y=.25,he.add(R));const Ge=[new k(0,0,0),new k(Math.cos(ne)*Se,0,Math.sin(ne)*Se)],Le=new on().setFromPoints(Ge),Ne=new Sb(Le,new Mb({color:12100748,dashSize:.1,gapSize:.08}));Ne.computeLineDistances(),u.add(Ne);const Te=new Kf(.04,12,12),it=new da({color:15185050}),Ce=new Ye(Te,it);Ce.position.set(0,0,0),u.add(Ce),he.position.set(Math.cos(ne)*Se,0,Math.sin(ne)*Se),A.add(he),P.push({group:he,roleId:z.id,pulseMesh:Ce,angle:ne,dist:Se,threadLine:Ne})});const w=new bb,F=new We;let B=!1,W={x:0},q=0,G=0;const J=z=>{B=!0,W={x:z.clientX,y:z.clientY}},L=z=>{const Y=a.getBoundingClientRect();if(F.x=(z.clientX-Y.left)/o*2-1,F.y=-((z.clientY-Y.top)/c)*2+1,B){const ne=z.clientX-W.x;G+=ne*.006,W={x:z.clientX,y:z.clientY}}w.setFromCamera(F,h);const se=w.intersectObjects(A.children,!0);if(se.length>0){let ne=se[0].object;for(;ne.parent&&ne.parent!==A;)ne=ne.parent;const Se=ne.userData.roleId;if(Se&&Se!==i.current){i.current=Se;const he=Ra.find(Ue=>Ue.id===Se);s(he),e&&e(he)}}else i.current!==null&&(i.current=null,s(null),e&&e(null))},$=()=>{B=!1},K=z=>{w.setFromCamera(F,h);const Y=w.intersectObjects(A.children,!0);if(Y.length>0){let se=Y[0].object;for(;se.parent&&se.parent!==A;)se=se.parent;const ne=se.userData.roleId;ne&&t&&t(ne)}};a.addEventListener("mousedown",J),window.addEventListener("mousemove",L),window.addEventListener("mouseup",$),a.addEventListener("click",K);let re,be=new S0;const ze=()=>{re=requestAnimationFrame(ze);const z=be.getElapsedTime();q+=(G-q)*.08,G+=.0015,A.rotation.y=q,P.forEach((Y,se)=>{const ne=i.current===Y.roleId,Se=ne?.35:0;Y.group.position.y+=(Se-Y.group.position.y)*.12,ne||(Y.group.position.y+=Math.sin(z*2+se)*.0015);const he=A.rotation.y,Ue=Y.angle+he,je=(z*.8+se*.4)%2;let Fe=je<=1?je:2-je;Y.pulseMesh.position.x=Math.cos(Ue)*(Y.dist*Fe),Y.pulseMesh.position.z=Math.sin(Ue)*(Y.dist*Fe),Y.pulseMesh.position.y=.05+Math.sin(Fe*Math.PI)*.15}),f.render(u,h)};return ze(),()=>{cancelAnimationFrame(re),a.removeEventListener("mousedown",J),window.removeEventListener("mousemove",L),window.removeEventListener("mouseup",$),a.removeEventListener("click",K),f.domElement&&a.contains(f.domElement)&&a.removeChild(f.domElement),f.dispose()}},[t,e]),l.jsxs("div",{className:"relative w-full h-[520px] rounded-3xl overflow-hidden bg-[#FAF6EE] border border-[#B8A48C]/30 shadow-subtle flex flex-col justify-end",children:[l.jsx("div",{ref:n,className:"absolute inset-0 cursor-grab active:cursor-grabbing"}),l.jsxs("div",{className:"absolute top-6 left-6 pointer-events-none",children:[l.jsx("span",{className:"label-caps",children:"Orrery System · Drag to Orbit"}),l.jsx("h4",{className:"font-serif text-2xl text-[#1B1917] mt-1",children:"Who's Inside A to W"})]}),l.jsx("div",{className:"relative z-10 m-6 p-5 rounded-2xl bg-[#F7F2EA]/95 backdrop-blur-md border border-[#B8A48C]/40 shadow-float max-w-md transition-all duration-300",children:r?l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-2",children:[l.jsx("span",{className:"label-caps",style:{color:"#E7B49A"},children:r.symbolLabel}),l.jsx("span",{className:"text-xs text-[#B8A48C] font-mono",children:"Role Node"})]}),l.jsx("h3",{className:"font-serif text-xl font-medium text-[#1B1917]",children:r.title}),l.jsx("p",{className:"text-xs text-[#1B1917]/80 mt-1 leading-relaxed",children:r.description}),l.jsx("div",{className:"mt-3 flex flex-wrap gap-1.5",children:r.perks.map((a,o)=>l.jsxs("span",{className:"text-[10px] bg-[#E9DFCF] px-2 py-0.5 rounded-full text-[#1B1917]",children:["✓ ",a]},o))}),l.jsxs("button",{onClick:()=>t&&t(r.id),className:"mt-4 btn-pill-ink w-full justify-center text-xs py-2",children:[r.cta," →"]})]}):l.jsxs("div",{className:"text-center py-2 text-xs text-[#B8A48C]",children:[l.jsx("p",{className:"font-serif italic text-sm text-[#1B1917]/70",children:"Hover over an orbiting pedestal to explore roles, or click to enter."}),l.jsx("p",{className:"mt-1 text-[11px]",children:"Designer · Fashion Brand · Retail Shop · Model · Production · Customer"})]})})]})}function Rb({onNavigate:t,onSelectGarment:e,userRole:n="customer",onOpenRoleModal:i}){const[r,s]=fe.useState(0);return fe.useEffect(()=>{const a=()=>{const o=window.innerHeight,c=Math.min(1,Math.max(0,window.scrollY/o));s(c)};return window.addEventListener("scroll",a,{passive:!0}),()=>window.removeEventListener("scroll",a)},[]),l.jsxs("div",{className:"w-full relative",children:[l.jsxs("section",{className:"relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#F7F2EA] px-4 md:px-12 pt-12 pb-16",children:[l.jsxs("div",{className:"max-w-7xl mx-auto w-full z-10 text-center space-y-4",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E9DFCF]/70 border border-[#B8A48C]/40 text-xs font-mono text-[#1B1917]",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-[#E7B49A]"}),l.jsx("span",{children:"Room 01 · Threshold"}),l.jsx("span",{children:"·"}),l.jsx("span",{className:"text-[#B8A48C]",children:"Walk the Colonnade"})]}),l.jsx("h1",{className:"font-serif text-5xl md:text-8xl lg:text-9xl tracking-tight text-[#1B1917] font-normal",children:"A to W"}),l.jsx("p",{className:"font-serif italic text-xl md:text-3xl text-[#B8A48C] max-w-3xl mx-auto",children:'"A quiet, sunlit gallery where every piece carries the story of how it was made."'}),l.jsx("p",{className:"text-xs md:text-sm font-sans text-[#1B1917]/70 max-w-xl mx-auto leading-relaxed",children:"A fashion platform connecting independent designers, atelier brands, retail shops, models, and collectors — turning ideas into opportunity."})]}),l.jsx("div",{className:"relative w-full max-w-4xl mx-auto h-[480px] md:h-[560px] my-4 z-10",children:l.jsx(Ab,{scrollProgress:r})}),l.jsxs("div",{className:"max-w-5xl mx-auto w-full z-10",children:[l.jsx("div",{className:"text-center mb-4",children:l.jsx("span",{className:"label-caps",children:"Four Gateways to the Ecosystem"})}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[{id:"discover",title:"DISCOVER",subtitle:"The Arched Hall",note:"Shop wearable art"},{id:"connect",title:"CONNECT",subtitle:"The Loom",note:"Woven networks"},{id:"create",title:"CREATE",subtitle:"The Studio",note:"Cutting table & specs"},{id:"wear",title:"WEAR",subtitle:"The Wardrobe",note:"Patronage & fit twin"}].map(a=>l.jsxs("button",{onClick:()=>{yr.playFabricRustle(),t(a.id)},className:"arch-card p-5 bg-[#FAF6EE]/90 hover:bg-white text-center flex flex-col justify-between items-center group cursor-pointer transition-all duration-500 shadow-subtle min-h-[160px]",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-[#E9DFCF] text-[#1B1917] flex items-center justify-center font-mono text-xs group-hover:bg-[#1B1917] group-hover:text-white transition-colors",children:"↗"}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-lg font-medium text-[#1B1917] tracking-wider group-hover:text-[#4A6B53] transition-colors",children:a.title}),l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] block mt-0.5",children:a.subtitle})]}),l.jsx("span",{className:"text-[10px] text-[#1B1917]/70 font-sans",children:a.note})]},a.id))}),l.jsxs("div",{className:"mt-8 flex justify-center items-center gap-2 text-xs font-mono text-[#B8A48C]",children:[l.jsx("span",{className:"animate-bounce",children:"↓"}),l.jsx("span",{children:"Scroll downward to trace the running stitch into Room 02"})]})]})]}),l.jsx(Tb,{onSelectGarment:e}),l.jsx("section",{className:"relative w-full py-24 px-4 md:px-12 bg-[#F7F2EA] border-b border-[#B8A48C]/30",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-10",children:[l.jsxs("div",{className:"text-center max-w-2xl mx-auto",children:[l.jsx("span",{className:"label-caps",children:"Room 03 · 3D Orrery Orbit"}),l.jsx("h2",{className:"font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-3",children:"Who's Inside the Colonnade"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans leading-relaxed",children:'Drag to orbit the central "A to W" disc. Light pulses pulse both ways between creators, ateliers, and collectors.'})]}),l.jsx(Cb,{onSelectRole:a=>{t(a==="designer"?"create":a==="brand"?"connect":a==="retail"?"discover":a==="model"?"connect":a==="customer"?"wear":"connect")}})]})}),l.jsx("section",{className:"relative w-full py-24 px-4 md:px-12 bg-[#F1E9DC]/60 overflow-hidden",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-10",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#B8A48C]/30 pb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Room 04 · Horizontal Drift"}),l.jsx("h2",{className:"font-serif text-3xl md:text-5xl text-[#1B1917] mt-2",children:"The Hall of Sculptural Garments"}),l.jsx("p",{className:"text-xs md:text-sm text-[#1B1917]/70 font-sans mt-2",children:"No grids. No discount banners. Every piece turns gently toward your gaze."})]}),l.jsxs("button",{onClick:()=>t("discover"),className:"btn-pill-ink text-xs",children:[l.jsx("span",{children:"Enter Full Arched Gallery"}),l.jsx(_l,{size:14})]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:pi.slice(0,3).map(a=>l.jsxs("div",{onClick:()=>e&&e(a.id),className:"arch-card p-6 bg-[#FAF6EE] flex flex-col justify-between min-h-[500px] cursor-pointer group hover:bg-white hover:border-[#1B1917] transition-all duration-500 shadow-subtle",children:[l.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-[#B8A48C]",children:[l.jsx("span",{children:a.edition}),l.jsx("span",{className:"text-[#1B1917] bg-white px-2 py-0.5 rounded-full border border-[#B8A48C]/30",children:a.occasion})]}),l.jsxs("div",{className:"relative w-full h-64 my-4 rounded-t-full overflow-hidden bg-[#FAF7F0] shadow-sm",children:[l.jsx("img",{src:a.layers.photo,alt:a.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-[#1B1917]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",children:l.jsxs("span",{className:"btn-pill-ink text-xs py-2 px-4 shadow-lg",children:[l.jsx(Dg,{size:14}),l.jsx("span",{children:"Art → Wear Reveal"})]})})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917] group-hover:text-[#4A6B53] transition-colors",children:a.name}),l.jsxs("p",{className:"text-xs font-mono text-[#B8A48C]",children:["By ",a.designer.name]}),l.jsx("div",{className:"running-stitch-h my-1"}),l.jsxs("div",{className:"flex justify-between items-center text-xs pt-1",children:[l.jsxs("span",{className:"font-serif text-lg text-[#1B1917]",children:["LKR ",n==="retail"?a.wholesalePriceLKR.toLocaleString():a.retailPriceLKR.toLocaleString()]}),l.jsx("span",{className:"font-mono text-[10px] text-[#B8A48C]",children:n==="retail"?`Wholesale MOQ ${a.moq}`:"Single Edition"})]})]})]},a.id))})]})}),l.jsxs("section",{className:"relative w-full py-32 px-4 md:px-12 bg-gradient-to-b from-[#F7F2EA] via-[#D5E3EE]/30 to-[#F7F2EA] text-center overflow-hidden",children:[l.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(231,180,154,0.2),transparent_70%)] pointer-events-none"}),l.jsxs("div",{className:"relative max-w-4xl mx-auto space-y-8 z-10",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E9DFCF] text-xs font-mono text-[#1B1917]",children:[l.jsx(l1,{size:14,className:"text-[#E7B49A]"}),l.jsx("span",{children:"Room 05 · The Bigger Picture"})]}),l.jsxs("h2",{className:"font-serif text-4xl md:text-7xl text-[#1B1917] font-light leading-tight",children:["Supporting local talent. ",l.jsx("br",{}),l.jsx("span",{className:"italic text-[#B8A48C]",children:"Building a stronger fashion future."})]}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/75 font-sans max-w-xl mx-auto leading-relaxed",children:"By connecting raw sketch craft with master ateliers, boutique wholesale rails, and passionate collectors, we replace disposable fast consumption with permanent wearable art."}),l.jsx("div",{className:"pt-6 flex flex-wrap justify-center gap-4",children:Ra.filter(a=>a.id!=="production").map(a=>l.jsxs("div",{className:"relative group",children:[l.jsxs("button",{onClick:()=>{yr.playFabricRustle(),a.id==="designer"?t("create"):a.id==="brand"?t("connect"):a.id==="retail"?t("discover"):a.id==="model"?t("connect"):t("wear")},className:"btn-pill-ink text-xs px-5 py-2.5 shadow-sm group-hover:scale-105 transition-transform",children:[l.jsxs("span",{children:[a.name," Door"]}),l.jsx(_l,{size:12})]}),l.jsx("div",{className:"w-0.5 h-6 mx-auto border-l border-dashed border-[#B8A48C] mt-1 group-hover:border-[#E7B49A] transition-colors"})]},a.id))}),l.jsx("div",{className:"pt-8",children:l.jsx("button",{onClick:i,className:"text-xs font-mono text-[#B8A48C] hover:text-[#1B1917] underline underline-offset-4 transition-colors",children:'Reopen "How will you wear A to W?" threshold doors'})})]})]})]})}function Nb({onSelectGarment:t,userRole:e="customer"}){const[n,i]=fe.useState("All"),[r,s]=fe.useState("All"),[a,o]=fe.useState("All"),c=["All","Silk Chiffon","Wild Silk","Flax Linen","Glass Organza","Crepe De Chine","Raw Matka"],u=["All","Evening Gala","Architectural Outerwear","Resort & Gallery","Ceremony"],h=[{label:"All",hex:"transparent"},{label:"Blush Peach",hex:"#E7B49A"},{label:"Warm Travertine",hex:"#E9DFCF"},{label:"Raw Linen",hex:"#F1E9DC"},{label:"Sky Mist",hex:"#D5E3EE"},{label:"Deep Ink",hex:"#1B1917"}];return l.jsxs("div",{className:"w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]",children:[l.jsxs("div",{className:"max-w-7xl mx-auto mb-12",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-[#B8A48C]/30 pb-8",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Wing 01 · Curated Gallery"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl text-[#1B1917] mt-2",children:"The Hall of Wearable Art"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed",children:"Step through continuous stone arches. Every piece stands in its own architectural space. Filter via the swatch wall below — non-matching pieces soften into sheer ghosts so the gallery stays whole."})]}),l.jsxs("div",{className:"flex items-center gap-2 bg-[#E9DFCF]/60 px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono",children:[l.jsx("span",{children:"Viewing Mode:"}),l.jsx("strong",{className:"text-[#1B1917] capitalize",children:e==="retail"?"Retail Wholesale (LKR + MOQ)":"Collector Patronage (LKR)"})]})]}),l.jsxs("div",{className:"mt-8 p-6 rounded-3xl bg-[#F1E9DC] border border-[#B8A48C]/40 shadow-subtle space-y-6",children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(x1,{size:14,className:"text-[#1B1917]"}),l.jsx("span",{className:"label-caps-dark",children:"The Swatch Wall Filters"})]}),l.jsx("button",{onClick:()=>{i("All"),s("All"),o("All")},className:"text-xs text-[#B8A48C] hover:text-[#1B1917] font-mono transition-colors",children:"Reset Swatches"})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-2",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-mono text-[#B8A48C] block mb-2",children:"Material / Weave:"}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:c.map(f=>l.jsx("button",{onClick:()=>i(f),className:`px-3 py-1 rounded-full text-xs font-mono transition-all ${n===f?"bg-[#1B1917] text-white shadow-sm":"bg-white/80 text-[#1B1917] border border-[#B8A48C]/30 hover:border-[#1B1917]"}`,children:f},f))})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-mono text-[#B8A48C] block mb-2",children:"Architectural Occasion:"}),l.jsx("div",{className:"flex flex-wrap gap-1.5",children:u.map(f=>l.jsx("button",{onClick:()=>s(f),className:`px-3 py-1 rounded-full text-xs font-mono transition-all ${r===f?"bg-[#1B1917] text-white shadow-sm":"bg-white/80 text-[#1B1917] border border-[#B8A48C]/30 hover:border-[#1B1917]"}`,children:f},f))})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[11px] font-mono text-[#B8A48C] block mb-2",children:"Palette Tone:"}),l.jsxs("div",{className:"flex items-center gap-2",children:[h.map(f=>l.jsx("button",{onClick:()=>o(f.label),title:f.label,className:`relative w-7 h-7 rounded-full border-2 transition-transform ${a===f.label?"scale-125 border-[#1B1917]":"border-white hover:scale-110"}`,style:{backgroundColor:f.hex==="transparent"?"#F7F2EA":f.hex,backgroundImage:f.hex==="transparent"?"radial-gradient(#B8A48C 1px, transparent 1px)":"none",backgroundSize:"4px 4px"}},f.label)),l.jsx("span",{className:"text-xs font-mono text-[#1B1917] ml-2",children:a})]})]})]})]})]}),l.jsx("div",{className:"max-w-7xl mx-auto space-y-16",children:l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10",children:pi.map((f,p)=>{const m=n==="All"||f.fabric.toLowerCase().includes(n.toLowerCase()),g=r==="All"||f.occasion.toLowerCase().includes(r.toLowerCase()),S=a==="All"||f.colorName.toLowerCase().includes(a.toLowerCase()),x=m&&g&&S;return l.jsx("div",{className:`relative transition-all duration-700 ${x?"opacity-100 filter-none scale-100":"opacity-25 filter blur-[4px] scale-[0.97] pointer-events-none"}`,children:l.jsxs("div",{className:"arch-card p-6 flex flex-col justify-between min-h-[580px] bg-[#F1E9DC]/70 border border-[#B8A48C]/40 group hover:border-[#1B1917]",children:[l.jsxs("div",{className:"flex items-center justify-between pb-3",children:[l.jsx("span",{className:"label-caps text-[#B8A48C]",children:f.edition}),l.jsx("span",{className:"text-[10px] font-mono bg-white/70 px-2.5 py-0.5 rounded-full text-[#1B1917]",children:f.occasion})]}),l.jsxs("div",{onClick:()=>x&&t&&t(f.id),className:"relative w-full h-80 my-4 rounded-t-full overflow-hidden bg-[#FAF6EE] cursor-pointer shadow-subtle group-hover:shadow-float transition-all duration-500",children:[l.jsx("img",{src:f.layers.photo,alt:f.name,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"}),l.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#1B1917]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6",children:l.jsxs("span",{className:"btn-pill-ink text-xs py-2 px-4 shadow-lg",children:[l.jsx(Dg,{size:14}),l.jsx("span",{children:"Inspect Art → Wear"})]})}),l.jsx("div",{className:"absolute top-4 right-4 w-4 h-4 rounded-full border border-white shadow-sm",style:{backgroundColor:f.colorHex},title:f.colorName})]}),l.jsxs("div",{className:"space-y-3 pt-3",children:[l.jsxs("div",{className:"flex justify-between items-start",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917] group-hover:text-[#4A6B53] transition-colors",children:f.name}),l.jsxs("p",{className:"text-xs font-mono text-[#B8A48C]",children:["By ",f.designer.name]})]}),l.jsx("button",{onClick:()=>x&&t&&t(f.id),className:"w-8 h-8 rounded-full bg-[#E9DFCF] group-hover:bg-[#1B1917] group-hover:text-white transition-colors flex items-center justify-center text-[#1B1917]","aria-label":"View garment",children:l.jsx(r1,{size:16})})]}),l.jsx("div",{className:"running-stitch-h my-1"}),l.jsx("div",{className:"flex justify-between items-center text-xs",children:e==="retail"?l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsxs("span",{className:"text-[10px] text-[#B8A48C] block uppercase font-mono",children:["Wholesale MOQ ",f.moq]}),l.jsxs("strong",{className:"font-serif text-lg text-[#1B1917]",children:["LKR ",f.wholesalePriceLKR.toLocaleString()]})]}),l.jsx("span",{className:"text-[10px] font-mono text-[#4A6B53] bg-[#4A6B53]/10 px-2 py-0.5 rounded",children:"Boutique Stock"})]}):l.jsxs(l.Fragment,{children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-[#B8A48C] block uppercase font-mono",children:"Direct Acquisition"}),l.jsxs("strong",{className:"font-serif text-lg text-[#1B1917]",children:["LKR ",f.retailPriceLKR.toLocaleString()]})]}),l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C]",children:f.availability})]})})]})]})},f.id)})})})]})}function Pb({onSelectGarment:t}){const[e,n]=fe.useState("all"),[i,r]=fe.useState(null),[s,a]=fe.useState("p4"),[o,c]=fe.useState("front"),[u,h]=fe.useState(null),[f,p]=fe.useState(!1);e==="all"||Gs.filter(g=>g.role===e);const m=g=>{h(g),p(!1)};return l.jsxs("div",{className:"w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]",children:[l.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[l.jsxs("div",{className:"border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Wing 02 · Collaborative Ecosystem"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl text-[#1B1917] mt-2",children:"The Loom: Woven Network"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed",children:"Every partnership is a running-stitch thread. Hover over any creative node to trace their active collaborations across design, production, and retail."})]}),l.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"all",label:"All Creatives"},{id:"designer",label:"Designers"},{id:"brand",label:"Brands"},{id:"retail",label:"Retail Shops"},{id:"model",label:"Models"},{id:"production",label:"Production Mills"}].map(g=>l.jsx("button",{onClick:()=>n(g.id),className:`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${e===g.id?"bg-[#1B1917] text-white shadow-sm":"bg-[#E9DFCF] text-[#1B1917] hover:bg-[#F1E9DC]"}`,children:g.label},g.id))})]}),l.jsxs("div",{className:"linen-card p-6 md:p-8 relative overflow-hidden bg-[#F2EDE2]",children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Thread Topography"}),l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917] mt-1",children:"Active Cross-Disciplinary Collaborations"})]}),l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:"Hover a node to illuminate active threads"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 relative z-10",children:Gs.map(g=>{var d;const S=i===g.id,x=i&&((d=Gs.find(v=>v.id===i))==null?void 0:d.activeCollaborations.includes(g.id));return l.jsxs("div",{onMouseEnter:()=>r(g.id),onMouseLeave:()=>r(null),className:`p-4 rounded-2xl bg-white border transition-all duration-300 flex flex-col justify-between cursor-pointer ${S?"border-[#1B1917] ring-2 ring-[#E7B49A] shadow-float scale-105":x?"border-[#E7B49A] bg-[#FAF3E8] shadow-subtle":"border-[#B8A48C]/30 hover:border-[#B8A48C]"}`,children:[l.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[l.jsx("img",{src:g.image,alt:g.name,className:"w-10 h-10 rounded-full object-cover border border-[#B8A48C]"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-sm font-medium text-[#1B1917] leading-tight",children:g.name}),l.jsx("span",{className:"text-[10px] font-mono text-[#E7B49A] uppercase",children:g.role})]})]}),l.jsx("p",{className:"text-[11px] text-[#1B1917]/70 line-clamp-2 mb-3",children:g.bio}),l.jsxs("div",{className:"pt-2 border-t border-[#E9DFCF] flex items-center justify-between",children:[l.jsxs("span",{className:"text-[10px] font-mono text-[#4A6B53]",children:["● ",g.activeCollaborations.length," Active Threads"]}),l.jsx("button",{onClick:v=>{v.stopPropagation(),m(g)},className:"text-[10px] uppercase font-mono text-[#1B1917] hover:underline",children:"Collab →"})]})]},g.id)})})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-4",children:[l.jsx("span",{className:"label-caps",children:"Talent Comp-Card Archive"}),l.jsx("h2",{className:"font-serif text-3xl text-[#1B1917]",children:"Digital Comp-Cards with Fit Twin Verification"}),l.jsx("p",{className:"text-sm text-[#1B1917]/80 leading-relaxed font-sans",children:"Models receive verified architectural measurement tags, book direct editorial campaigns, and earn recurring royalties on every piece sold through their photoshoots."}),l.jsxs("div",{className:"relative pt-4",children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:o==="front"?"Face Editorial Comp":"Measurements & Portfolio Back"}),l.jsxs("button",{onClick:()=>c(o==="front"?"back":"front"),className:"flex items-center gap-1.5 text-xs font-mono bg-[#E9DFCF] px-3 py-1 rounded-full text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-all shadow-sm",children:[l.jsx(Ug,{size:12}),l.jsx("span",{children:"Flip Comp-Card"})]})]}),l.jsx("div",{className:"w-full rounded-2xl p-6 border-2 transition-all duration-700 shadow-float bg-[#FAF6EE] border-[#B8A48C] min-h-[460px]",children:o==="front"?l.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[l.jsxs("div",{className:"w-full h-72 rounded-xl overflow-hidden relative",children:[l.jsx("img",{src:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=700&q=80",alt:"Keshini Perera",className:"w-full h-full object-cover"}),l.jsx("div",{className:"absolute top-3 left-3 bg-[#1B1917]/80 text-[#F7F2EA] backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] font-mono",children:"Verified A to W Fit Twin"})]}),l.jsxs("div",{children:[l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917]",children:"Keshini Perera"}),l.jsx("p",{className:"text-xs font-mono text-[#B8A48C]",children:"Colombo & Singapore · Model ID #A2W-MD04"})]}),l.jsxs("div",{className:"grid grid-cols-3 gap-2 text-center text-xs font-mono pt-2 border-t border-[#E9DFCF]",children:[l.jsxs("div",{className:"p-2 bg-white rounded-lg border border-[#B8A48C]/20",children:[l.jsx("span",{className:"text-[10px] text-[#B8A48C] block",children:"Height"}),l.jsx("strong",{children:"174 cm"})]}),l.jsxs("div",{className:"p-2 bg-white rounded-lg border border-[#B8A48C]/20",children:[l.jsx("span",{className:"text-[10px] text-[#B8A48C] block",children:"Size"}),l.jsx("strong",{children:"S / UK 8"})]}),l.jsxs("div",{className:"p-2 bg-white rounded-lg border border-[#B8A48C]/20",children:[l.jsx("span",{className:"text-[10px] text-[#B8A48C] block",children:"Shoe"}),l.jsx("strong",{children:"39 EU"})]})]})]}):l.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[l.jsx("span",{className:"label-caps text-[#E7B49A]",children:"Portfolio & Garments Modelled"}),l.jsx("h3",{className:"font-serif text-xl text-[#1B1917]",children:"Exhibition Appearances"}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{onClick:()=>t&&t("hero_gown"),className:"p-3 bg-white rounded-xl border border-[#B8A48C]/30 flex items-center justify-between cursor-pointer hover:border-[#1B1917]",children:[l.jsxs("div",{children:[l.jsx("strong",{className:"text-xs font-serif text-[#1B1917] block",children:"The Peach Chiffon Gown"}),l.jsx("span",{className:"text-[10px] text-[#B8A48C]",children:"Lead Campaign · 14 sales generated"})]}),l.jsx("span",{className:"text-xs font-mono text-[#4A6B53]",children:"+5% Commission"})]}),l.jsxs("div",{onClick:()=>t&&t("hall_garment_04"),className:"p-3 bg-white rounded-xl border border-[#B8A48C]/30 flex items-center justify-between cursor-pointer hover:border-[#1B1917]",children:[l.jsxs("div",{children:[l.jsx("strong",{className:"text-xs font-serif text-[#1B1917] block",children:"Midnight Ink Pleated Tunic"}),l.jsx("span",{className:"text-[10px] text-[#B8A48C]",children:"Studio Editorial · 8 sales generated"})]}),l.jsx("span",{className:"text-xs font-mono text-[#4A6B53]",children:"+5% Commission"})]})]}),l.jsxs("div",{className:"pt-4 border-t border-[#E9DFCF]",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block mb-1",children:"Availability"}),l.jsx("p",{className:"text-xs text-[#1B1917] font-medium",children:"Available for November Colonnade Shoots in Colombo & Galle"})]}),l.jsx("button",{onClick:()=>m(Gs[3]),className:"btn-pill-ink w-full justify-center text-xs py-2.5 mt-2",children:"Book for Campaign Shoot"})]})})]})]}),l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsx("span",{className:"label-caps",children:"Brand Portfolios & Upcoming Drops"}),l.jsx("div",{className:"space-y-6",children:_1.map(g=>l.jsxs("div",{className:"arch-card p-6 md:p-8 bg-[#F1E9DC] border border-[#B8A48C]/50 relative overflow-hidden group",children:[l.jsxs("div",{className:"flex justify-between items-start mb-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono text-[#E7B49A] block uppercase tracking-wider",children:g.brand}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:g.title})]}),l.jsxs("span",{className:"text-xs font-mono bg-[#1B1917] text-[#F7F2EA] px-3 py-1 rounded-full",children:["Drop: ",g.revealDate]})]}),l.jsx("p",{className:"text-xs md:text-sm text-[#1B1917]/80 leading-relaxed max-w-xl",children:g.description}),l.jsxs("div",{className:"relative w-full h-44 rounded-xl overflow-hidden my-4 bg-[#1B1917]",children:[l.jsx("img",{src:g.silhouetteImage,alt:g.title,className:"w-full h-full object-cover filter blur-[8px] opacity-40 scale-105"}),l.jsxs("div",{className:"absolute inset-0 bg-gradient-to-r from-[#1B1917]/80 via-transparent to-[#1B1917]/80 flex flex-col items-center justify-center p-4 text-center",children:[l.jsx("span",{className:"label-caps text-white mb-1",children:"Hidden Behind Sheer Silk"}),l.jsx("p",{className:"text-xs text-[#F7F2EA]/90 font-serif italic",children:"Silhouettes soften until launch date wind releases the curtain."})]})]}),l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 pt-2",children:[l.jsxs("span",{className:"text-xs font-mono text-[#4A6B53]",children:["● ",g.notifiedCount," Curators Knot-Notified"]}),l.jsx("button",{onClick:()=>alert("A knot has been stitched in your ribbon! You will be given 24h early access before public release."),className:"btn-pill-ink text-xs py-2 px-5",children:"Tie Knot for Early Drop Access"})]})]},g.id))})]})]})]}),u&&l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm",children:l.jsxs("div",{className:"bg-[#FAF6EE] p-8 rounded-3xl max-w-lg w-full border border-[#B8A48C] shadow-pedestal space-y-4 animate-fadeIn",children:[l.jsxs("h3",{className:"font-serif text-2xl text-[#1B1917]",children:["Request Collaboration with ",u.name]}),l.jsx("p",{className:"text-xs text-[#1B1917]/80",children:"Drag a collaborative running stitch thread to pitch a joint collection, sample request, or retail rail allocation."}),f?l.jsxs("div",{className:"p-4 bg-[#4A6B53]/15 text-[#4A6B53] rounded-xl text-xs space-y-2",children:[l.jsx("p",{className:"font-medium",children:"✓ Thread connected successfully!"}),l.jsxs("p",{children:["A formal collaboration proposal has been pinned to ",u.name,"'s Studio board. You will receive an alert once reviewed."]}),l.jsx("button",{onClick:()=>h(null),className:"btn-pill-ink text-xs mt-2",children:"Return to The Loom"})]}):l.jsxs("form",{onSubmit:g=>{g.preventDefault(),p(!0)},className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-mono text-[#B8A48C] block mb-1",children:"Project Intent / Capsule Concept"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Resort 2027 Chiffon & Fluted Linen Capsule",className:"w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-mono text-[#B8A48C] block mb-1",children:"Proposed Terms & Scope"}),l.jsx("textarea",{rows:3,required:!0,placeholder:"Specify target pieces, MOQ requirements or shoot dates...",className:"w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"})]}),l.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[l.jsx("button",{type:"button",onClick:()=>h(null),className:"btn-pill-travertine text-xs",children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn-pill-ink text-xs",children:"Cast Running Stitch Thread"})]})]})]})})]})}function Lb(){const[t,e]=fe.useState(!1),[n,i]=fe.useState(null),[r,s]=fe.useState([]),[a,o]=fe.useState([{id:"n1",sender:"The Cinnamon Arch Boutique",type:"Wholesale Quote",title:"Wholesale Order Request · 25 pcs",detail:"Requesting 25 units of Peach Chiffon Gown at LKR 38,000 wholesale for Galle Fort salon.",date:"2 hours ago",status:"pending"},{id:"n2",sender:"House of Sylvan",type:"Brand Co-Lab",title:"Solstice Colonnade Capsule Drop",detail:"Invitation to co-design 3 exclusive looks for upcoming November unreleased drop.",date:"Yesterday",status:"pending"},{id:"n3",sender:"Keshini Perera (Model)",type:"Shoot Application",title:"Campaign Model Booking Match",detail:"Confirmed Fit Twin match (174cm, Size S) available for colonnade lookbook.",date:"Oct 24",status:"accepted"}]),c=()=>{i({title:"Monolithic Fluted Cape 01",timestamp:"Just now",image:"https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80"}),s(["📌 Evening Wrap","📌 100% Unbleached Silk","📌 Zero-Waste Bias Cut","📌 Yield Efficiency: 94%"])},u=(h,f)=>{o(p=>p.map(m=>m.id===h?{...m,status:f}:m))};return l.jsx("div",{className:"w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[l.jsxs("div",{className:"border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Wing 03 · Atelier Studio"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl text-[#1B1917] mt-2",children:"The Designer's Studio"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed",children:"Drop sketches onto the digital cutting table to generate verified technical packs. Track your six-stage threads and oversee boutique wholesale inquiries."})]}),l.jsxs("div",{className:"flex items-center gap-3 bg-[#FAF6EE] px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono",children:[l.jsx("span",{children:"Atelier Status:"}),l.jsx("span",{className:"text-[#4A6B53] font-semibold",children:"● 3 Active Master Runs"})]})]}),l.jsx("div",{className:"linen-card p-6 md:p-10 bg-[#FAF7F0] border-2 border-dashed border-[#B8A48C]/60 relative overflow-hidden",children:l.jsxs("div",{className:"flex flex-col lg:flex-row items-center gap-8",children:[l.jsxs("div",{onDragOver:h=>{h.preventDefault(),e(!0)},onDragLeave:()=>e(!1),onDrop:h=>{h.preventDefault(),e(!1),c()},onClick:c,className:`w-full lg:w-1/2 min-h-[300px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center p-8 text-center cursor-pointer ${t?"border-[#1B1917] bg-[#E7B49A]/20 scale-[1.01]":"border-[#B8A48C] bg-white hover:border-[#1B1917] hover:bg-[#FAF6EE]"}`,children:[l.jsx("div",{className:"w-16 h-16 rounded-full bg-[#E9DFCF] text-[#1B1917] flex items-center justify-center mb-4 shadow-sm",children:l.jsx(Fg,{size:28})}),l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917]",children:"The Cutting Table"}),l.jsx("p",{className:"text-xs text-[#1B1917]/70 mt-2 max-w-sm leading-relaxed",children:"Drag a sketch, CAD spec or technical illustration here (or click to sample). Automated AI fiber detection pins specs in real-time."}),l.jsxs("span",{className:"mt-4 btn-pill-ink text-xs py-2 px-5",children:[l.jsx(a1,{size:14}),l.jsx("span",{children:"Upload Architectural Sketch"})]})]}),l.jsx("div",{className:"w-full lg:w-1/2 p-6 bg-white rounded-2xl border border-[#B8A48C]/40 shadow-subtle min-h-[300px] flex flex-col justify-between",children:n?l.jsxs("div",{className:"space-y-4 animate-fadeIn",children:[l.jsxs("div",{className:"flex justify-between items-start",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps text-[#4A6B53]",children:"● Registered Spec #SK-908"}),l.jsx("h4",{className:"font-serif text-xl text-[#1B1917] mt-0.5",children:n.title}),l.jsx("span",{className:"text-[10px] text-[#B8A48C] font-mono",children:"Cryptographic Hash: 0x7c92b...verified"})]}),l.jsx("img",{src:n.image,alt:"Uploaded sketch",className:"w-16 h-16 rounded-lg object-cover border border-[#E9DFCF]"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-xs font-mono text-[#B8A48C] block mb-2",children:"Auto-Detected Composition Pins:"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((h,f)=>l.jsx("span",{className:"px-3 py-1 bg-[#FAF6EE] text-[#1B1917] border border-[#B8A48C]/40 rounded-full text-xs font-mono shadow-sm",children:h},f))})]}),l.jsxs("div",{className:"pt-4 border-t border-[#E9DFCF] flex items-center justify-between",children:[l.jsx("span",{className:"text-xs text-[#4A6B53] font-mono",children:"✓ Ready for Stage 03 Sample Cutting"}),l.jsx("button",{onClick:()=>alert("Design routed to Lanka Fine Silk Weavers for muslin toile creation."),className:"btn-pill-ink text-xs py-2 px-4",children:"Commission Muslin Sample →"})]})]}):l.jsxs("div",{className:"flex flex-col items-center justify-center h-full text-center py-10 text-[#B8A48C]",children:[l.jsx(d1,{size:24,className:"mb-2 text-[#E7B49A]"}),l.jsx("p",{className:"font-serif italic text-base text-[#1B1917]",children:"Cutting table currently waiting."}),l.jsx("p",{className:"text-xs mt-1",children:"Upload a sketch to view automated yarn categorization and pattern layout."})]})})]})}),l.jsxs("div",{className:"linen-card p-6 md:p-8 bg-[#F1E9DC]",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Studio Analytics"}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:"Flowing Ribbon Performance"})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("span",{className:"text-xs font-mono bg-[#4A6B53]/15 text-[#4A6B53] px-3 py-1 rounded-full font-semibold",children:"+62% Gallery Discovery"}),l.jsx("span",{className:"text-xs font-mono bg-[#4A6B53]/15 text-[#4A6B53] px-3 py-1 rounded-full font-semibold",children:"+48% Wholesale Inquiries"})]})]}),l.jsxs("div",{className:"relative w-full h-48 bg-white/70 rounded-2xl p-4 border border-[#B8A48C]/40 overflow-hidden flex items-end",children:[l.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 600 160",preserveAspectRatio:"none",children:[l.jsxs("defs",{children:[l.jsxs("linearGradient",{id:"peachRibbon",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#E7B49A",stopOpacity:"0.45"}),l.jsx("stop",{offset:"100%",stopColor:"#E7B49A",stopOpacity:"0.0"})]}),l.jsxs("linearGradient",{id:"taupeRibbon",x1:"0",y1:"0",x2:"0",y2:"1",children:[l.jsx("stop",{offset:"0%",stopColor:"#B8A48C",stopOpacity:"0.3"}),l.jsx("stop",{offset:"100%",stopColor:"#B8A48C",stopOpacity:"0.0"})]})]}),l.jsx("path",{d:"M0,100 C120,40 240,140 360,70 C480,20 540,80 600,40 L600,160 L0,160 Z",fill:"url(#taupeRibbon)"}),l.jsx("path",{d:"M0,80 C100,120 200,30 320,60 C420,90 500,20 600,10 L600,160 L0,160 Z",fill:"url(#peachRibbon)"}),l.jsx("path",{d:"M0,80 C100,120 200,30 320,60 C420,90 500,20 600,10",fill:"none",stroke:"#1B1917",strokeWidth:"2",strokeDasharray:"6 4",className:"thread-animated"})]}),l.jsxs("div",{className:"absolute top-4 left-6 flex items-center gap-6 text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Direct Wear Sales"}),l.jsx("strong",{className:"font-serif text-lg text-[#1B1917]",children:"LKR 1,240,000"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Wholesale Rail Royalties"}),l.jsx("strong",{className:"font-serif text-lg text-[#1B1917]",children:"LKR 3,480,000"})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Boutique Inquiries"}),l.jsx("strong",{className:"font-serif text-lg text-[#4A6B53]",children:"34 Active"})]})]})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Studio Corkboard"}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:"Pinned Inquiries & Wholesale Dispatches"})]}),l.jsxs("span",{className:"text-xs font-mono text-[#B8A48C]",children:[a.filter(h=>h.status==="pending").length," Action Items Pinned"]})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:a.map(h=>l.jsxs("div",{className:"relative p-6 rounded-2xl bg-[#FAF6EE] border border-[#B8A48C]/50 shadow-subtle flex flex-col justify-between min-h-[220px]",children:[l.jsx("div",{className:"absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-[#E7B49A] border-2 border-white shadow-sm flex items-center justify-center text-[10px]",children:"📌"}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-2 pt-2",children:[l.jsx("span",{className:"label-caps text-[#E7B49A] text-[10px]",children:h.type}),l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C]",children:h.date})]}),l.jsx("h4",{className:"font-serif text-lg text-[#1B1917] font-medium leading-snug",children:h.title}),l.jsxs("p",{className:"text-xs font-mono text-[#B8A48C] mt-0.5",children:["From: ",h.sender]}),l.jsx("p",{className:"text-xs text-[#1B1917]/80 mt-3 leading-relaxed",children:h.detail})]}),l.jsx("div",{className:"pt-4 border-t border-[#E9DFCF] flex items-center justify-between",children:h.status==="accepted"?l.jsx("span",{className:"text-xs font-mono text-[#4A6B53]",children:"✓ Approved & Thread Active"}):h.status==="declined"?l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:"Archived"}):l.jsxs("div",{className:"flex gap-2 w-full",children:[l.jsx("button",{onClick:()=>u(h.id,"accepted"),className:"btn-pill-ink text-[11px] py-1.5 px-3 flex-1 justify-center",children:"Accept Terms"}),l.jsx("button",{onClick:()=>u(h.id,"declined"),className:"btn-pill-travertine text-[11px] py-1.5 px-3",children:"Decline"})]})})]},h.id))})]})]})})}function Db({onSelectGarment:t}){const[e,n]=fe.useState([{id:"w1",garment:pi[0],type:"Direct Acquisition",editionNumber:"01 of 18",statusStage:4,orderDate:"October 18, 2026",trackingStep:3,customMeasurements:"172 cm · 84 / 64 / 91",certificateHash:"0x9b42e71f..."},{id:"w2",garment:pi[1],type:"Bespoke Commission",editionNumber:"Custom Toile",statusStage:3,orderDate:"October 22, 2026",trackingStep:2,customMeasurements:"Extended Hem +5cm",certificateHash:"0x3a88c02d..."}]),[i,r]=fe.useState({height:172,size:"S",bust:84,waist:64,hips:91,shoulderWidth:38}),s=[{title:"Pattern Cut & Stitch",atelier:"Colombo Atelier",date:"Oct 19"},{title:"Artisanal Inspection",atelier:"Guild Quality Board",date:"Oct 22"},{title:"Dispatched in Linen Bag",atelier:"Lanka Heritage Dispatch",date:"Oct 25"},{title:"Hand-Delivered to Patron",atelier:"Express Courier",date:"Pending"}];return l.jsx("div",{className:"w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-16",children:[l.jsxs("div",{className:"border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Wing 04 · Collector Wardrobe"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl text-[#1B1917] mt-2",children:"Wear: Your Private Collection"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed",children:"Every acquired piece carries its permanent certificate of provenance, active creation thread, and verified Fit Twin measurements."})]}),l.jsxs("div",{className:"flex items-center gap-2 bg-[#FAF6EE] px-4 py-2 rounded-full border border-[#B8A48C]/40 text-xs font-mono",children:[l.jsx("span",{children:"Patron Status:"}),l.jsx("strong",{className:"text-[#1B1917]",children:"Patron Tier I · 2 Numbered Editions"})]})]}),l.jsxs("div",{className:"space-y-6",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917]",children:"In-Flight Creation & Delivery Threads"}),l.jsxs("span",{className:"text-xs font-mono text-[#B8A48C]",children:[e.length," Garments in Pipeline"]})]}),l.jsx("div",{className:"space-y-8",children:e.map(a=>l.jsx("div",{className:"linen-card p-6 md:p-8 bg-[#FAF6EE] border border-[#B8A48C]/50 shadow-float",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-center",children:[l.jsxs("div",{className:"lg:col-span-3 flex items-center gap-4",children:[l.jsx("img",{src:a.garment.layers.photo,alt:a.garment.name,className:"w-24 h-32 rounded-xl object-cover border border-[#B8A48C]/40 shadow-sm"}),l.jsxs("div",{children:[l.jsx("span",{className:"label-caps text-[#E7B49A] text-[10px]",children:a.type}),l.jsx("h4",{className:"font-serif text-xl text-[#1B1917] mt-0.5",children:a.garment.name}),l.jsxs("p",{className:"text-xs font-mono text-[#B8A48C] mt-1",children:["Edition: ",a.editionNumber]}),l.jsxs("span",{className:"inline-block mt-2 text-[10px] bg-[#E9DFCF] px-2 py-0.5 rounded text-[#1B1917] font-mono",children:["Cert: ",a.certificateHash]})]})]}),l.jsxs("div",{className:"lg:col-span-9 space-y-4",children:[l.jsxs("div",{className:"flex justify-between items-center text-xs",children:[l.jsx("span",{className:"font-mono text-[#1B1917] font-semibold",children:"Delivery Thread Tracking"}),l.jsx("span",{className:"font-mono text-[#4A6B53]",children:"● Estimated Arrival: 2 Days"})]}),l.jsxs("div",{className:"relative py-4",children:[l.jsx("div",{className:"absolute top-1/2 left-4 right-4 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#B8A48C]/60 pointer-events-none"}),l.jsx("div",{className:"absolute top-1/2 left-4 -translate-y-1/2 h-0.5 border-t-2 border-dashed border-[#4A6B53] pointer-events-none transition-all duration-700",style:{width:`${a.trackingStep/4*85}%`}}),l.jsx("div",{className:"relative flex justify-between z-10",children:s.map((o,c)=>{const u=c<a.trackingStep,h=c===a.trackingStep;return l.jsxs("div",{className:"flex flex-col items-center max-w-[120px] text-center",children:[l.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-mono transition-all ${u?"bg-[#4A6B53] text-white shadow-sm":h?"bg-[#1B1917] text-white ring-4 ring-[#E7B49A]/50":"bg-white text-[#B8A48C] border border-[#B8A48C]/40"}`,children:u?l.jsx(Lg,{size:12}):`0${c+1}`}),l.jsx("span",{className:"text-[11px] font-medium text-[#1B1917] mt-2",children:o.title}),l.jsx("span",{className:"text-[9px] font-mono text-[#B8A48C]",children:o.atelier})]},c)})})]})]})]})},a.id))})]}),l.jsxs("div",{className:"linen-card p-6 md:p-10 bg-[#F1E9DC] border border-[#B8A48C]/40",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Saved Biometrics"}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:"Your Saved Fit Twin Profile"})]}),l.jsx("span",{className:"text-xs font-mono text-[#4A6B53] bg-[#4A6B53]/10 px-3 py-1 rounded-full",children:"✓ Synchronized Across All Ateliers"})]}),l.jsx("p",{className:"text-xs md:text-sm text-[#1B1917]/70 font-sans max-w-xl leading-relaxed mb-6",children:"When you browse pieces or order custom drapes, designers instantly receive your verified architectural proportions for zero-waste precision tailoring."}),l.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4",children:[l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Height"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.height," cm"]})]}),l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Standard Size"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.size," / UK 8"]})]}),l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Bust"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.bust," cm"]})]}),l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Waist"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.waist," cm"]})]}),l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Hips"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.hips," cm"]})]}),l.jsxs("div",{className:"p-4 bg-white rounded-xl border border-[#B8A48C]/30 text-center",children:[l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C] uppercase block",children:"Shoulder"}),l.jsxs("strong",{className:"font-serif text-xl text-[#1B1917]",children:[i.shoulderWidth," cm"]})]})]})]})]})})}function Ib(){const[t,e]=fe.useState([{garment:pi[0],quantity:20,moq:20},{garment:pi[1],quantity:15,moq:15}]),[n,i]=fe.useState(!1),r=u=>{const h=t.find(f=>f.garment.id===u.id);e(h?f=>f.map(p=>p.garment.id===u.id?{...p,quantity:p.quantity+5}:p):f=>[...f,{garment:u,quantity:u.moq,moq:u.moq}])},s=(u,h)=>{e(f=>f.map(p=>{if(p.garment.id===u){const m=Math.max(p.moq,p.quantity+h);return{...p,quantity:m}}return p}))},a=u=>{e(h=>h.filter(f=>f.garment.id!==u))},o=t.reduce((u,h)=>u+h.garment.wholesalePriceLKR*h.quantity,0),c=t.reduce((u,h)=>u+h.quantity,0);return l.jsx("div",{className:"w-full min-h-screen py-16 px-4 md:px-12 bg-[#F7F2EA]",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-12",children:[l.jsxs("div",{className:"border-b border-[#B8A48C]/30 pb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"B2B Wholesale Module"}),l.jsx("h1",{className:"font-serif text-4xl md:text-6xl text-[#1B1917] mt-2",children:"Virtual Clothing Rail Builder"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/70 font-sans max-w-xl mt-3 leading-relaxed",children:"Assemble your boutique's seasonal rail directly from atelier collections. Configure order quantities with guaranteed MOQs and transmit an instant Line Sheet."})]}),l.jsxs("div",{className:"text-right",children:[l.jsx("span",{className:"text-xs font-mono text-[#B8A48C] block",children:"Running Wholesale Total"}),l.jsxs("strong",{className:"font-serif text-3xl text-[#1B1917]",children:["LKR ",o.toLocaleString()]}),l.jsxs("span",{className:"block text-[11px] font-mono text-[#4A6B53]",children:[c," Pieces across ",t.length," styles"]})]})]}),l.jsxs("div",{className:"linen-card p-6 md:p-10 bg-[#FAF7F0] border-2 border-[#B8A48C]/40 relative shadow-float",children:[l.jsxs("div",{className:"relative mb-12",children:[l.jsx("div",{className:"h-3 rounded-full bg-gradient-to-r from-[#B8A48C] via-[#E7B49A] to-[#B8A48C] shadow-md border border-[#96836d]"}),l.jsxs("div",{className:"flex justify-between px-12 -mt-1.5",children:[l.jsx("div",{className:"w-2 h-8 bg-[#96836d] rounded"}),l.jsx("div",{className:"w-2 h-8 bg-[#96836d] rounded"})]})]}),t.length===0?l.jsxs("div",{className:"py-16 text-center text-[#B8A48C]",children:[l.jsx("p",{className:"font-serif italic text-lg text-[#1B1917]",children:"Your wholesale rail is currently empty."}),l.jsx("p",{className:"text-xs mt-1",children:"Select garments from the atelier catalogue below to build your boutique line sheet."})]}):l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:t.map(u=>l.jsxs("div",{className:"relative p-6 rounded-2xl bg-white border border-[#B8A48C]/40 shadow-subtle flex flex-col justify-between",children:[l.jsx("div",{className:"w-8 h-4 border-t-2 border-r-2 border-[#B8A48C] rounded-tr-full mx-auto -mt-8 mb-3"}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[l.jsx("img",{src:u.garment.layers.photo,alt:u.garment.name,className:"w-16 h-20 rounded-lg object-cover border border-[#E9DFCF]"}),l.jsxs("div",{children:[l.jsx("h4",{className:"font-serif text-lg text-[#1B1917] font-medium leading-snug",children:u.garment.name}),l.jsxs("span",{className:"text-xs font-mono text-[#B8A48C] block",children:["MOQ: ",u.moq," pcs"]}),l.jsxs("span",{className:"text-xs font-serif text-[#1B1917] block font-semibold mt-1",children:["LKR ",u.garment.wholesalePriceLKR.toLocaleString()," / unit"]})]})]}),l.jsx("div",{className:"running-stitch-h my-2"}),l.jsxs("div",{className:"flex items-center justify-between py-2",children:[l.jsx("span",{className:"text-xs font-mono text-[#1B1917]",children:"Order Units:"}),l.jsxs("div",{className:"flex items-center gap-2 bg-[#F7F2EA] px-2 py-1 rounded-lg border border-[#B8A48C]/40",children:[l.jsx("button",{onClick:()=>s(u.garment.id,-5),disabled:u.quantity<=u.moq,className:"w-6 h-6 rounded bg-white text-[#1B1917] flex items-center justify-center hover:bg-[#E9DFCF] disabled:opacity-40 transition-colors text-xs",children:l.jsx(u1,{size:12})}),l.jsx("span",{className:"font-mono text-xs font-bold text-[#1B1917] px-2",children:u.quantity}),l.jsx("button",{onClick:()=>s(u.garment.id,5),className:"w-6 h-6 rounded bg-white text-[#1B1917] flex items-center justify-center hover:bg-[#E9DFCF] transition-colors text-xs",children:l.jsx(f1,{size:12})})]})]})]}),l.jsxs("div",{className:"pt-4 border-t border-[#E9DFCF] flex items-center justify-between text-xs",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] text-[#B8A48C] block uppercase font-mono",children:"Line Total"}),l.jsxs("strong",{className:"font-serif text-base text-[#1B1917]",children:["LKR ",(u.garment.wholesalePriceLKR*u.quantity).toLocaleString()]})]}),l.jsxs("button",{onClick:()=>a(u.garment.id),className:"text-xs text-red-700/70 hover:text-red-700 flex items-center gap-1 font-mono transition-colors",children:[l.jsx(v1,{size:12}),l.jsx("span",{children:"Remove"})]})]})]},u.garment.id))}),t.length>0&&l.jsxs("div",{className:"mt-10 pt-6 border-t border-[#B8A48C]/30 flex flex-col sm:flex-row items-center justify-between gap-4",children:[l.jsx("div",{className:"text-xs font-mono text-[#B8A48C]",children:"Line Sheet Format: PDF & Digital Cryptographic Order Form"}),l.jsxs("div",{className:"flex gap-4",children:[l.jsxs("button",{onClick:()=>alert(`Line Sheet specification PDF exported for ${t.length} items.`),className:"btn-pill-travertine text-xs",children:[l.jsx(o1,{size:14}),l.jsx("span",{children:"Download Line Sheet (PDF)"})]}),l.jsxs("button",{onClick:()=>i(!0),className:"btn-pill-ink text-xs",children:[l.jsx(h1,{size:14}),l.jsx("span",{children:n?"✓ Line Sheet Transmitted":"Send Official Quote Request"})]})]})]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Available Designs to Rail"}),l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917] mt-1 mb-6",children:"Add Atelier Pieces to Your Rail"}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:pi.map(u=>l.jsxs("div",{className:"p-4 bg-white rounded-2xl border border-[#B8A48C]/30 shadow-subtle flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("img",{src:u.layers.photo,alt:u.name,className:"w-full h-36 object-cover rounded-xl mb-3"}),l.jsx("h4",{className:"font-serif text-sm font-medium text-[#1B1917]",children:u.name}),l.jsxs("div",{className:"flex justify-between items-center text-xs font-mono text-[#B8A48C] mt-1",children:[l.jsxs("span",{children:["MOQ: ",u.moq]}),l.jsxs("strong",{className:"text-[#1B1917]",children:["LKR ",u.wholesalePriceLKR.toLocaleString()]})]})]}),l.jsx("button",{onClick:()=>r(u),className:"mt-3 btn-pill-travertine w-full justify-center text-xs py-1.5",children:"+ Add to Rail"})]},u.id))})]})]})})}function Ub({onExit:t}){const[e,n]=fe.useState(0),i=[{act:"Act I",title:"Monolithic Obsidian Drape",material:"Triple-Dyed Crêpe & Stiffened Wild Organza",silhouette:"Monumental Asymmetric Cape",story:"Sculpted in total darkness. The garment absorbs 98% of ambient light, casting sharp architectural shadows against the stage floor.",image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80",edition:"Numbered Atelier Prototype 01 of 03"},{act:"Act II",title:"The Shadow Corset",material:"Hand-Hammered Antiqued Brass & Carbon Silk",silhouette:"Anatomical Ribcage Cage",story:"A structural harness holding pleated midnight tulle that rustles like paper when moved across the stage.",image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",edition:"Numbered Atelier Prototype 02 of 03"},{act:"Act III",title:"The Eclipse Shroud",material:"Raw Metallic Thread & Uncut Handloom Silk",silhouette:"Floor-Sweeping Cocoon",story:"Woven with an intentional break in tension every seven stitches, creating an organic frayed perimeter that floats behind the body.",image:"https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80",edition:"Numbered Atelier Prototype 03 of 03"}],r=i[e];return l.jsxs("div",{className:"w-full min-h-screen bg-[#121110] text-[#F7F2EA] transition-colors duration-1000 relative overflow-hidden select-none",children:[l.jsxs("div",{className:"relative z-30 px-6 md:px-12 py-6 border-b border-[#383430] flex items-center justify-between bg-[#121110]/90 backdrop-blur-md",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("button",{onClick:t,className:"flex items-center gap-2 text-xs font-mono text-[#B8A48C] hover:text-[#F7F2EA] transition-colors bg-[#23201D] px-3.5 py-1.5 rounded-full border border-[#383430]",children:[l.jsx(i1,{size:14}),l.jsx("span",{children:"Return to Sunlit Gallery"})]}),l.jsx("span",{className:"text-xs font-mono text-[#E7B49A]",children:"The Unusual · Theatrical Dark Pavilion"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-[#B8A48C]",children:[l.jsx(Ig,{size:14,className:"text-[#E7B49A]"}),l.jsx("span",{children:"Stage Mode · Pinned Scroll"})]})]}),l.jsx("div",{className:"max-w-7xl mx-auto px-4 md:px-12 py-12",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-10 items-start",children:[l.jsx("div",{className:"lg:col-span-6 lg:sticky lg:top-28",children:l.jsxs("div",{className:"relative w-full h-[540px] md:h-[620px] rounded-3xl overflow-hidden bg-[#181615] border border-[#383430] shadow-2xl flex flex-col justify-end p-8",children:[l.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-[#E7B49A]/10 via-transparent to-[#121110] pointer-events-none"}),l.jsx("div",{className:"absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-96 bg-[#FFE8C8]/10 rounded-full blur-3xl pointer-events-none"}),l.jsx("img",{src:r.image,alt:r.title,className:"absolute inset-0 w-full h-full object-cover opacity-85 filter contrast-125 transition-all duration-1000 scale-105"}),l.jsxs("div",{className:"relative z-10 bg-[#121110]/85 backdrop-blur-md p-6 rounded-2xl border border-[#383430] space-y-2",children:[l.jsxs("div",{className:"flex justify-between items-center",children:[l.jsxs("span",{className:"text-[10px] font-mono text-[#E7B49A] uppercase tracking-widest",children:[r.act," · Spotlit Center"]}),l.jsx("span",{className:"text-[10px] font-mono text-[#B8A48C]",children:r.edition})]}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-white font-normal",children:r.title}),l.jsxs("p",{className:"text-xs text-[#B8A48C] font-mono",children:[r.silhouette," · ",r.material]})]})]})}),l.jsxs("div",{className:"lg:col-span-6 space-y-12",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsx("span",{className:"label-caps text-[#E7B49A]",children:"Avant-Garde Chamber"}),l.jsx("h2",{className:"font-serif text-3xl md:text-5xl text-white font-light",children:"The Anatomy of Darkness"}),l.jsx("p",{className:"text-sm text-[#B8A48C] leading-relaxed font-sans",children:"Where convention ends and wearable sculpture begins. Scroll down the right rail to shift the spotlight across unreleased theatrical studies."})]}),l.jsx("div",{className:"space-y-8",children:i.map((s,a)=>{const o=e===a;return l.jsxs("div",{onClick:()=>n(a),className:`p-8 rounded-3xl border transition-all duration-500 cursor-pointer ${o?"bg-[#1e1c1a] border-[#E7B49A] shadow-xl":"bg-[#181615] border-[#2f2b28] opacity-60 hover:opacity-100 hover:border-[#B8A48C]"}`,children:[l.jsxs("div",{className:"flex justify-between items-center mb-3",children:[l.jsx("span",{className:"text-xs font-mono text-[#E7B49A] font-semibold",children:s.act}),l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:o?"● Stage Active":"Click to Focus Stage"})]}),l.jsx("h4",{className:"font-serif text-2xl text-white mb-2",children:s.title}),l.jsx("p",{className:"text-xs text-[#B8A48C] leading-relaxed mb-4",children:s.story}),l.jsxs("div",{className:"p-3 bg-[#121110] rounded-xl border border-[#2f2b28] text-xs font-mono space-y-1 text-[#B8A48C]",children:[l.jsxs("div",{children:["Silhouette: ",l.jsx("span",{className:"text-white",children:s.silhouette})]}),l.jsxs("div",{children:["Material: ",l.jsx("span",{className:"text-white",children:s.material})]})]})]},s.act)})}),l.jsxs("div",{className:"p-8 rounded-3xl bg-[#1e1c1a] border border-[#383430] text-center space-y-4",children:[l.jsx(g1,{size:24,className:"mx-auto text-[#E7B49A]"}),l.jsx("h4",{className:"font-serif text-2xl text-white",children:"Private Theatrical Commissions"}),l.jsx("p",{className:"text-xs text-[#B8A48C] max-w-sm mx-auto leading-relaxed",children:"Custom one-off haute couture pieces crafted exclusively for cinema, opera and private collections."}),l.jsx("button",{onClick:()=>alert("Theatrical commission request logged. An atelier liaison will contact your representative."),className:"btn-pill-ink bg-[#F7F2EA] text-[#1B1917] hover:bg-white text-xs py-2.5 px-6 mx-auto",children:"Inquire on Theatrical Archive"})]})]})]})})]})}function Fb({garmentId:t,onClose:e,onSelectProfile:n,userRole:i="customer"}){const r=pi.find(F=>F.id===t)||pi[0],[s,a]=fe.useState(50),[o,c]=fe.useState(!1),[u,h]=fe.useState("split"),[f,p]=fe.useState(i==="retail"?"back":"front"),[m,g]=fe.useState(172),[S,x]=fe.useState("S"),[d,v]=fe.useState(!1),[_,M]=fe.useState(""),[N,T]=fe.useState(!1),[A,P]=fe.useState(!1),V=fe.useRef(null),y=F=>{if(!o||!V.current)return;const B=V.current.getBoundingClientRect(),q=Math.max(0,Math.min(F.clientX-B.left,B.width))/B.width*100;a(q)},w=F=>{F.preventDefault(),v(!1),alert(`Custom commission request submitted directly to ${r.designer.name}. You will receive tailored fabric swatches & measurement confirmations in your WEAR studio.`)};return l.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-2 md:p-6 bg-[#1B1917]/70 backdrop-blur-md overflow-y-auto animate-fadeIn",children:[l.jsxs("div",{className:"relative w-full max-w-5xl my-auto bg-[#F7F2EA] rounded-3xl border border-[#B8A48C]/50 shadow-pedestal overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-[#B8A48C]/30 bg-[#F1E9DC]/60",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"label-caps-dark",children:"A to W · Gallery Archive"}),l.jsx("span",{className:"text-xs text-[#B8A48C]",children:"/"}),l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:r.edition})]}),l.jsx("button",{onClick:e,className:"w-9 h-9 rounded-full bg-[#E9DFCF] hover:bg-[#1B1917] hover:text-[#F7F2EA] transition-colors flex items-center justify-center text-[#1B1917]","aria-label":"Close garment exhibition",children:l.jsx(If,{size:18})})]}),l.jsxs("div",{className:"p-6 md:p-10 space-y-12",children:[l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-7 flex flex-col items-center",children:[l.jsxs("div",{className:"w-full flex items-center justify-between mb-3",children:[l.jsx("span",{className:"label-caps",children:"Art → Wear Reveal · Drag Seam to Unzip"}),l.jsxs("div",{className:"flex gap-2",children:[l.jsx("button",{onClick:()=>a(0),className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${s<=15?"bg-[#1B1917] text-white":"bg-[#E9DFCF] text-[#1B1917]"}`,children:"Sketch"}),l.jsx("button",{onClick:()=>a(50),className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${s>15&&s<85?"bg-[#1B1917] text-white":"bg-[#E9DFCF] text-[#1B1917]"}`,children:"3D Drape"}),l.jsx("button",{onClick:()=>a(100),className:`text-[10px] uppercase font-mono px-2 py-0.5 rounded ${s>=85?"bg-[#1B1917] text-white":"bg-[#E9DFCF] text-[#1B1917]"}`,children:"On Model"})]})]}),l.jsxs("div",{ref:V,onPointerDown:()=>c(!0),onPointerUp:()=>c(!1),onPointerLeave:()=>c(!1),onPointerMove:y,className:"relative w-full h-[460px] md:h-[520px] rounded-2xl overflow-hidden shadow-float cursor-ew-resize select-none border border-[#B8A48C]/40 bg-[#FAF7F0]",children:[l.jsx("img",{src:r.layers.photo,alt:`${r.name} on model`,className:"absolute inset-0 w-full h-full object-cover"}),l.jsxs("div",{className:"absolute inset-0 overflow-hidden",style:{width:`${s}%`},children:[l.jsx("img",{src:r.layers.sketch,alt:`${r.name} architectural sketch`,className:"absolute inset-0 w-full h-full object-cover filter contrast-125 sepia-[0.25]",style:{width:V.current?`${V.current.clientWidth}px`:"100%"}}),l.jsx("div",{className:"absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono text-[#1B1917] uppercase tracking-wider",children:"Graphite Study · Maya S."})]}),l.jsxs("div",{className:"absolute top-0 bottom-0 z-20 pointer-events-none -translate-x-1/2 flex flex-col items-center justify-center",style:{left:`${s}%`},children:[l.jsx("div",{className:"h-full w-0.5 border-l-2 border-dashed border-[#E7B49A] shadow-md"}),l.jsx("div",{className:"absolute w-8 h-8 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center shadow-lg border-2 border-[#E7B49A]",children:l.jsx("span",{className:"text-[10px] font-mono font-bold",children:"⇄"})})]}),l.jsxs("div",{className:"absolute bottom-4 right-4 bg-[#1B1917]/85 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-mono text-[#F7F2EA]",children:["On Model: ",r.credits.modelledBy]})]}),l.jsx("p",{className:"text-xs text-[#B8A48C] font-mono mt-3",children:"Drag the running-stitch seam across to explore the transition from concept to garment."})]}),l.jsxs("div",{className:"lg:col-span-5 flex flex-col",children:[l.jsxs("div",{className:"flex items-center justify-between mb-3",children:[l.jsx("span",{className:"label-caps",children:"Physical Spring Hang-Tag"}),l.jsxs("button",{onClick:()=>p(f==="front"?"back":"front"),className:"flex items-center gap-1.5 text-xs font-mono text-[#1B1917] bg-[#E9DFCF] px-3 py-1 rounded-full hover:bg-[#1B1917] hover:text-[#F7F2EA] transition-all shadow-sm",children:[l.jsx(Ug,{size:12}),l.jsxs("span",{children:["Flip to ",f==="front"?"Wholesale (Stock it)":"Customer (Wear it)"]})]})]}),l.jsxs("div",{className:`relative w-full rounded-2xl p-6 md:p-8 border-2 transition-all duration-700 shadow-float ${f==="front"?"bg-[#FAF6EE] border-[#E7B49A]":"bg-[#F2ECE1] border-[#B8A48C]"}`,style:{transformStyle:"preserve-3d",perspective:"1000px"},children:[l.jsx("div",{className:"w-5 h-5 rounded-full border-2 border-[#B8A48C] bg-white mx-auto mb-6 flex items-center justify-center shadow-inner",children:l.jsx("div",{className:"w-2 h-2 rounded-full bg-[#1B1917]"})}),f==="front"?l.jsxs("div",{className:"space-y-6 animate-fadeIn",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("span",{className:"label-caps text-[#E7B49A]",children:"Front · Direct Patronage"}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:r.name}),l.jsxs("p",{className:"text-xs text-[#B8A48C] font-mono mt-1",children:["Designed by ",r.designer.name]})]}),l.jsx("div",{className:"running-stitch-h"}),l.jsxs("div",{className:"flex items-baseline justify-between",children:[l.jsx("span",{className:"text-xs uppercase font-mono text-[#B8A48C]",children:"Price"}),l.jsxs("div",{className:"text-right",children:[l.jsxs("span",{className:"font-serif text-3xl font-medium text-[#1B1917]",children:["LKR ",r.retailPriceLKR.toLocaleString()]}),l.jsx("span",{className:"block text-[10px] text-[#4A6B53] font-mono",children:"Includes atelier provenance certificate"})]})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"flex justify-between items-center mb-2",children:[l.jsx("span",{className:"text-xs font-mono text-[#1B1917]",children:"Select Measurement Ribbon:"}),l.jsx("span",{className:"text-[10px] text-[#B8A48C] font-mono",children:"Tape Measure Mode"})]}),l.jsx("div",{className:"grid grid-cols-4 gap-2",children:["XS","S","M","L"].map(F=>l.jsx("button",{onClick:()=>x(F),className:`py-2 text-xs font-mono rounded-lg border transition-all cursor-measure ${S===F?"bg-[#1B1917] text-white border-[#1B1917] shadow-sm":"bg-white text-[#1B1917] border-[#B8A48C]/40 hover:border-[#1B1917]"}`,children:F},F))})]}),l.jsxs("div",{className:"space-y-3 pt-2",children:[l.jsx("button",{onClick:()=>T(!0),className:"btn-pill-ink w-full justify-center text-xs py-3",children:N?"✓ Added to Wardrobe":"Acquire for Direct Wear"}),l.jsx("button",{onClick:()=>v(!0),className:"btn-pill-travertine w-full justify-center text-xs py-2.5",children:"Request a Custom Version (Made to Measure)"})]}),l.jsxs("div",{className:"text-[11px] text-[#B8A48C] text-center font-mono",children:[r.availability," · Ships in protected linen archive bag"]})]}):l.jsxs("div",{className:"space-y-6 animate-fadeIn",children:[l.jsxs("div",{className:"text-center",children:[l.jsx("span",{className:"label-caps text-[#4A6B53]",children:"Back · Retail & Wholesale"}),l.jsx("h3",{className:"font-serif text-2xl md:text-3xl text-[#1B1917] mt-1",children:"Boutique Wholesale Order"}),l.jsx("p",{className:"text-xs text-[#B8A48C] font-mono mt-1",children:"Curated Rail Supply for Boutiques"})]}),l.jsx("div",{className:"running-stitch-h"}),l.jsxs("div",{className:"p-4 bg-white/80 rounded-xl border border-[#B8A48C]/30 space-y-3",children:[l.jsxs("div",{className:"flex justify-between items-baseline",children:[l.jsx("span",{className:"text-xs font-mono text-[#B8A48C]",children:"Wholesale Price:"}),l.jsxs("span",{className:"font-serif text-2xl font-semibold text-[#1B1917]",children:["LKR ",r.wholesalePriceLKR.toLocaleString()," / pc"]})]}),l.jsxs("div",{className:"flex justify-between items-center text-xs",children:[l.jsx("span",{className:"font-mono text-[#B8A48C]",children:"Minimum Order Quantity (MOQ):"}),l.jsxs("strong",{className:"text-[#1B1917] bg-[#E9DFCF] px-2 py-0.5 rounded font-mono",children:[r.moq," pieces"]})]}),l.jsxs("div",{className:"flex justify-between items-center text-xs",children:[l.jsx("span",{className:"font-mono text-[#B8A48C]",children:"Est. Production Run:"}),l.jsx("span",{className:"text-[#1B1917] font-mono",children:"21 Working Days"})]})]}),l.jsxs("div",{className:"space-y-3 pt-2",children:[l.jsx("button",{onClick:()=>P(!0),className:"btn-pill-ink w-full justify-center text-xs py-3",children:A?"✓ Quote Registered":"Request Official Wholesale Quote"}),l.jsx("button",{onClick:()=>alert(`Physical muslin sample and fabric swatch swatch pack for ${r.name} dispatched to your boutique address.`),className:"btn-pill-travertine w-full justify-center text-xs py-2.5",children:"Request Physical Sample & Fabric Swatch"})]}),l.jsx("div",{className:"text-[11px] text-[#B8A48C] text-center font-mono",children:"Includes retailer linesheet & rights to photography for in-store marketing"})]})]})]})]}),l.jsxs("div",{className:"linen-card p-6 md:p-8",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6",children:[l.jsxs("div",{children:[l.jsx("span",{className:"label-caps",children:"Fit Twin Alignment"}),l.jsx("h4",{className:"font-serif text-2xl text-[#1B1917] mt-1",children:"Compare Proportions with Editorial Model"})]}),l.jsxs("div",{className:"text-xs font-mono bg-[#E9DFCF] px-3 py-1 rounded-full text-[#1B1917]",children:["Model: ",r.fitTwin.modelHeight," cm · Size ",r.fitTwin.modelSize]})]}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-center",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[l.jsx("span",{children:"Your Height:"}),l.jsxs("strong",{children:[m," cm"]})]}),l.jsx("input",{type:"range",min:"150",max:"195",value:m,onChange:F=>g(Number(F.target.value)),className:"w-full accent-[#1B1917]"}),l.jsxs("span",{className:"text-[10px] text-[#B8A48C] font-mono",children:["Height variance: ",m-r.fitTwin.modelHeight>0?`+${m-r.fitTwin.modelHeight}`:m-r.fitTwin.modelHeight," cm"]})]}),l.jsxs("div",{className:"p-4 bg-[#FAF7F0] rounded-xl border border-[#B8A48C]/40 text-xs space-y-1",children:[l.jsx("span",{className:"label-caps text-[#4A6B53]",children:"Fit Twin Match: 96%"}),l.jsxs("p",{className:"text-[#1B1917] font-medium mt-1",children:["Worn by a model of ",r.fitTwin.modelHeight," cm, size ",r.fitTwin.modelSize,", almost identical to you."]}),l.jsx("p",{className:"text-[#B8A48C] text-[11px] pt-1",children:r.fitTwin.recommendation})]}),l.jsx("div",{className:"flex items-center justify-center p-4 bg-white rounded-xl border border-[#B8A48C]/30 h-28",children:l.jsxs("div",{className:"w-16 bg-[#E7B49A]/30 border-2 border-[#1B1917] rounded-t-full transition-all duration-300 flex flex-col items-center justify-center text-[10px] font-mono text-[#1B1917]",style:{height:`${Math.min(95,Math.max(50,m/180*80))}px`,width:S==="L"?"54px":S==="M"?"46px":"40px"},children:[l.jsx("span",{children:S}),l.jsxs("span",{className:"text-[8px] opacity-70",children:[m,"cm"]})]})})]})]}),l.jsxs("div",{className:"space-y-4",children:[l.jsx("span",{className:"label-caps",children:"Provenance & Creation Journey"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3",children:r.journeyDates.map((F,B)=>l.jsxs("div",{className:"p-3 bg-white rounded-xl border border-[#B8A48C]/30 shadow-subtle space-y-1",children:[l.jsxs("span",{className:"text-[10px] font-mono text-[#E7B49A] block",children:["0",B+1]}),l.jsx("p",{className:"text-xs font-medium text-[#1B1917]",children:F.stage}),l.jsx("p",{className:"text-[10px] text-[#B8A48C] font-mono",children:F.date})]},B))})]}),l.jsxs("div",{className:"pt-8 border-t border-[#B8A48C]/30 text-center space-y-4",children:[l.jsx("span",{className:"label-caps",children:"Garment Credits"}),l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4 text-xs",children:[l.jsxs("div",{className:"p-2",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Designed By"}),l.jsx("strong",{className:"text-[#1B1917] text-sm font-serif",children:r.credits.designedBy})]}),l.jsxs("div",{className:"p-2",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Sample Approved"}),l.jsx("strong",{className:"text-[#1B1917] text-sm font-serif",children:r.credits.sampleApproved})]}),l.jsxs("div",{className:"p-2",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Produced By"}),l.jsx("strong",{className:"text-[#1B1917] text-sm font-serif",children:r.credits.producedBy})]}),l.jsxs("div",{className:"p-2",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Photographed By"}),l.jsx("strong",{className:"text-[#1B1917] text-sm font-serif",children:r.credits.photographedBy})]}),l.jsxs("div",{className:"p-2",children:[l.jsx("span",{className:"text-[10px] uppercase font-mono text-[#B8A48C] block",children:"Modelled By"}),l.jsx("strong",{className:"text-[#1B1917] text-sm font-serif",children:r.credits.modelledBy})]})]})]})]})]}),d&&l.jsx("div",{className:"fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/60",children:l.jsxs("div",{className:"bg-[#FAF6EE] p-8 rounded-3xl max-w-lg w-full border border-[#B8A48C] shadow-pedestal space-y-4",children:[l.jsx("h3",{className:"font-serif text-2xl text-[#1B1917]",children:"Commission Custom Drape"}),l.jsxs("p",{className:"text-xs text-[#1B1917]/70",children:["Submit your bespoke measurements and styling notes directly to ",r.designer.name,"."]}),l.jsxs("form",{onSubmit:w,className:"space-y-4",children:[l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-mono text-[#B8A48C] block mb-1",children:"Your Height & Bust / Waist / Hips (cm)"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. 172cm · 86 / 66 / 92",className:"w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"text-xs font-mono text-[#B8A48C] block mb-1",children:"Atelier Notes or Hem Modification"}),l.jsx("textarea",{rows:3,value:_,onChange:F=>M(F.target.value),placeholder:"Specify length preferences or bespoke color adjustments...",className:"w-full p-2.5 rounded-lg border border-[#B8A48C] bg-white text-xs"})]}),l.jsxs("div",{className:"flex justify-end gap-3 pt-2",children:[l.jsx("button",{type:"button",onClick:()=>v(!1),className:"btn-pill-travertine text-xs",children:"Cancel"}),l.jsx("button",{type:"submit",className:"btn-pill-ink text-xs",children:"Transmit to Atelier"})]})]})]})})]})}function Bb({onSelectRole:t,onClose:e}){const n=Ra.filter(r=>r.id!=="production"),i=r=>{yr.playFabricRustle(),localStorage.setItem("a_to_w_role",r),t(r)};return l.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B1917]/75 backdrop-blur-md overflow-y-auto animate-fadeIn select-none",children:l.jsxs("div",{className:"relative w-full max-w-5xl my-auto bg-[#F7F2EA] rounded-3xl border border-[#B8A48C]/50 shadow-pedestal p-6 md:p-12 text-center",children:[e&&l.jsx("button",{onClick:e,className:"absolute top-6 right-6 w-9 h-9 rounded-full bg-[#E9DFCF] text-[#1B1917] hover:bg-[#1B1917] hover:text-white transition-colors flex items-center justify-center","aria-label":"Close",children:l.jsx(If,{size:18})}),l.jsx("span",{className:"label-caps text-[#E7B49A]",children:"The Threshold of A to W"}),l.jsx("h2",{className:"font-serif text-3xl md:text-5xl text-[#1B1917] mt-2 mb-3",children:"How will you wear A to W?"}),l.jsx("p",{className:"text-sm md:text-base text-[#1B1917]/75 font-sans max-w-xl mx-auto leading-relaxed mb-10",children:"Select your door into our sunlit gallery. Your choice tailors your exhibition experience, default pricing mode, and atelier tools."}),l.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8",children:n.map(r=>l.jsxs("div",{onClick:()=>i(r.id),className:"arch-card p-5 bg-[#FAF6EE] flex flex-col justify-between items-center text-center cursor-pointer group hover:bg-white hover:border-[#1B1917] transition-all duration-500 min-h-[300px]",children:[l.jsx("div",{className:"w-14 h-14 rounded-full bg-[#E9DFCF] border border-[#B8A48C]/50 flex items-center justify-center text-[#1B1917] group-hover:scale-110 group-hover:bg-[#1B1917] group-hover:text-[#F7F2EA] transition-all duration-500 shadow-sm",children:l.jsx("span",{className:"font-serif text-lg font-bold",children:r.name[0]})}),l.jsxs("div",{className:"my-4",children:[l.jsx("h3",{className:"font-serif text-xl font-medium text-[#1B1917] group-hover:text-[#4A6B53] transition-colors",children:r.name}),l.jsx("p",{className:"text-xs text-[#1B1917]/70 mt-2 font-sans line-clamp-3 leading-relaxed",children:r.tagline})]}),l.jsxs("button",{className:"btn-pill-travertine group-hover:bg-[#1B1917] group-hover:text-white w-full justify-center text-[11px] py-1.5 transition-colors",children:[l.jsx("span",{children:"Enter Door"}),l.jsx(_l,{size:12})]})]},r.id))}),l.jsx("p",{className:"text-xs font-mono text-[#B8A48C]",children:"You can switch your perspective anytime via the role pill in the navigation header."})]})})}function kb({isChanging:t,direction:e="right",isTheatrical:n=!1}){const[i,r]=fe.useState(!1);return fe.useEffect(()=>{if(t){r(!0);const s=setTimeout(()=>{r(!1)},700);return()=>clearTimeout(s)}},[t]),i?l.jsx("div",{className:`fixed inset-0 z-9990 pointer-events-none transition-all duration-700 ease-out ${n?"bg-[#121110]":"bg-gradient-to-r from-[#F7F2EA]/95 via-[#E7B49A]/30 to-[#F7F2EA]/95 backdrop-blur-md"}`,style:{transform:t?"scaleX(1)":"scaleX(0)",transformOrigin:e==="right"?"left":"right",opacity:t?1:0},children:l.jsx("div",{className:"w-full h-full opacity-30 bg-repeat bg-[radial-gradient(#B8A48C_1px,transparent_1px)] [background-size:16px_16px]"})}):null}function Ob(){const t=fe.useRef(null),e=fe.useRef([]);return fe.useEffect(()=>{const n=t.current;if(!n)return;const i=n.getContext("2d"),r=()=>{n.width=window.innerWidth,n.height=window.innerHeight};r(),window.addEventListener("resize",r);const s=c=>{e.current.push({x:c.clientX,y:c.clientY,time:performance.now()}),document.documentElement.style.setProperty("--sunbeam-x",`${c.clientX}px`),document.documentElement.style.setProperty("--sunbeam-y",`${c.clientY}px`)};window.addEventListener("mousemove",s,{passive:!0});let a;const o=c=>{a=requestAnimationFrame(o),i.clearRect(0,0,n.width,n.height),e.current=e.current.filter(h=>c-h.time<600);const u=e.current;if(!(u.length<2)){i.beginPath(),i.moveTo(u[0].x,u[0].y);for(let h=1;h<u.length;h++){const f=(u[h].x+u[h-1].x)/2,p=(u[h].y+u[h-1].y)/2;i.quadraticCurveTo(u[h-1].x,u[h-1].y,f,p)}i.strokeStyle="#B8A48C",i.lineWidth=1.5,i.setLineDash([6,5]),i.stroke()}};return a=requestAnimationFrame(o),()=>{cancelAnimationFrame(a),window.removeEventListener("resize",r),window.removeEventListener("mousemove",s)}},[]),l.jsx("canvas",{ref:t,className:"fixed inset-0 pointer-events-none z-9995",style:{width:"100vw",height:"100vh"}})}function zb({onComplete:t}){const[e,n]=fe.useState(0);return fe.useEffect(()=>{const i=setTimeout(()=>n(1),400),r=setTimeout(()=>n(2),1100),s=setTimeout(()=>{n(3),t&&t()},1900);return()=>{clearTimeout(i),clearTimeout(r),clearTimeout(s)}},[t]),e===3?null:l.jsx("div",{className:`fixed inset-0 z-9999 flex flex-col items-center justify-center bg-[#F7F2EA] transition-opacity duration-700 ${e===2?"opacity-90":"opacity-100"}`,children:l.jsxs("div",{className:"relative flex flex-col items-center",children:[l.jsxs("svg",{className:"w-48 h-32",viewBox:"0 0 200 120",fill:"none",children:[l.jsxs("g",{className:`transition-transform duration-700 ${e>=1?"translate-x-4":"-translate-x-12"}`,children:[l.jsx("path",{d:"M130,50 L175,50 C180,50 185,52 188,55 L195,60 L188,65 C185,68 180,70 175,70 L130,70 Z",fill:"#1B1917"}),l.jsx("ellipse",{cx:"140",cy:"60",rx:"4",ry:"1.5",fill:"#F7F2EA"})]}),l.jsx("path",{d:"M10,60 Q70,20 140,60 T190,60",stroke:"#B8A48C",strokeWidth:"2",strokeDasharray:"6 4",className:"thread-animated"})]}),l.jsxs("div",{className:"mt-4 text-center",children:[l.jsx("span",{className:"font-serif text-3xl md:text-4xl tracking-widest text-[#1B1917] block",children:"A to W"}),l.jsx("span",{className:"label-caps text-[10px] tracking-[0.3em] text-[#B8A48C] mt-1 block",children:e>=2?"THREAD CONNECTED · ENTERING GALLERY":"THREADING THE NEEDLE..."})]})]})})}function jb(){const[t,e]=fe.useState("home"),[n,i]=fe.useState("home"),[r,s]=fe.useState(!1),[a,o]=fe.useState("right"),[c,u]=fe.useState(()=>localStorage.getItem("a_to_w_role")||"customer"),[h,f]=fe.useState(!1),[p,m]=fe.useState(null),[g,S]=fe.useState(!0),[x,d]=fe.useState(!0);fe.useEffect(()=>{localStorage.getItem("a_to_w_role")||f(!0)},[]),fe.useEffect(()=>{const N=()=>{const A=new Date().getHours();let P="morning";A>=16&&A<19?P="golden-hour":(A>=19||A<6)&&(P="evening"),document.body.setAttribute("data-time-mode",P)};N();const T=setInterval(N,6e4);return()=>clearInterval(T)},[]);const v=N=>{N!==t&&(i(t),o(N==="home"?"left":"right"),s(!0),setTimeout(()=>{e(N),window.scrollTo({top:0,behavior:"instant"})},350),setTimeout(()=>{s(!1)},700))},_=()=>{const N=yr.toggle();S(!N)},M=t==="unusual";return l.jsxs("div",{className:`min-h-screen relative font-sans ${M?"theatrical-dark":""}`,children:[x&&l.jsx(zb,{onComplete:()=>d(!1)}),l.jsx("div",{className:"film-grain"}),!M&&l.jsx("div",{className:"sunbeam-ambient"}),l.jsx(Ob,{}),l.jsx(kb,{isChanging:r,direction:a,isTheatrical:M}),!M&&l.jsx(S1,{activeNav:t,onNavigate:v,currentRole:c,onOpenRoleModal:()=>f(!0),soundMuted:g,onToggleSound:_,onOpenRail:()=>v("rail"),onOpenUnusual:()=>v("unusual")}),l.jsxs("main",{className:"w-full",children:[t==="home"&&l.jsx(Rb,{onNavigate:v,onSelectGarment:N=>m(N),userRole:c,onOpenRoleModal:()=>f(!0)}),t==="discover"&&l.jsx(Nb,{onSelectGarment:N=>m(N),userRole:c}),t==="connect"&&l.jsx(Pb,{onSelectGarment:N=>m(N)}),t==="create"&&l.jsx(Lb,{}),t==="wear"&&l.jsx(Db,{onSelectGarment:N=>m(N)}),t==="rail"&&l.jsx(Ib,{}),t==="unusual"&&l.jsx(Ub,{onExit:()=>v("home")})]}),p&&l.jsx(Fb,{garmentId:p,onClose:()=>m(null),userRole:c}),h&&l.jsx(Bb,{onSelectRole:N=>{u(N),f(!1)},onClose:()=>f(!1)}),!M&&l.jsx("footer",{className:"w-full py-16 px-4 md:px-12 bg-[#F1E9DC] border-t border-[#B8A48C]/40 text-xs text-[#1B1917]/70",children:l.jsxs("div",{className:"max-w-7xl mx-auto space-y-8",children:[l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center gap-6",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-8 h-8 rounded-full bg-[#1B1917] text-[#F7F2EA] flex items-center justify-center font-serif text-sm font-bold",children:"AW"}),l.jsxs("div",{children:[l.jsx("span",{className:"font-serif text-lg text-[#1B1917] block",children:"A to W — Art to Wear"}),l.jsx("span",{className:"label-caps text-[9px] text-[#B8A48C]",children:"Turning ideas into opportunity"})]})]}),l.jsxs("div",{className:"flex flex-wrap gap-6 font-mono text-[11px]",children:[l.jsx("button",{onClick:()=>v("discover"),className:"hover:text-[#1B1917]",children:"DISCOVER"}),l.jsx("button",{onClick:()=>v("connect"),className:"hover:text-[#1B1917]",children:"CONNECT"}),l.jsx("button",{onClick:()=>v("create"),className:"hover:text-[#1B1917]",children:"CREATE"}),l.jsx("button",{onClick:()=>v("wear"),className:"hover:text-[#1B1917]",children:"WEAR"}),l.jsx("button",{onClick:()=>v("rail"),className:"hover:text-[#1B1917]",children:"WHOLESALE RAIL"}),l.jsx("button",{onClick:()=>v("unusual"),className:"hover:text-[#1B1917]",children:"THE UNUSUAL"})]})]}),l.jsx("div",{className:"running-stitch-h"}),l.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-mono text-[#B8A48C]",children:[l.jsx("p",{children:"© 2026 A to W Ecosystem. All garments verified with cryptographic provenance. Default currency: Sri Lankan Rupee (LKR)."}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{children:"Ivory #F7F2EA"}),l.jsx("span",{children:"·"}),l.jsx("span",{children:"Travertine #E9DFCF"}),l.jsx("span",{children:"·"}),l.jsx("span",{children:"Blush Peach #E7B49A"})]})]})]})})]})}iu.createRoot(document.getElementById("root")).render(l.jsx(H0.StrictMode,{children:l.jsx(jb,{})}));
