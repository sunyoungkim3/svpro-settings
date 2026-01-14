(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const s of l)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(l){const s={};return l.integrity&&(s.integrity=l.integrity),l.referrerPolicy&&(s.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?s.credentials="include":l.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(l){if(l.ep)return;l.ep=!0;const s=n(l);fetch(l.href,s)}})();function rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bo={exports:{}},il={},Ho={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jn=Symbol.for("react.element"),lc=Symbol.for("react.portal"),ic=Symbol.for("react.fragment"),sc=Symbol.for("react.strict_mode"),oc=Symbol.for("react.profiler"),ac=Symbol.for("react.provider"),uc=Symbol.for("react.context"),cc=Symbol.for("react.forward_ref"),dc=Symbol.for("react.suspense"),fc=Symbol.for("react.memo"),pc=Symbol.for("react.lazy"),Rs=Symbol.iterator;function hc(e){return e===null||typeof e!="object"?null:(e=Rs&&e[Rs]||e["@@iterator"],typeof e=="function"?e:null)}var Qo={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ko=Object.assign,Xo={};function dn(e,t,n){this.props=e,this.context=t,this.refs=Xo,this.updater=n||Qo}dn.prototype.isReactComponent={};dn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};dn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Yo(){}Yo.prototype=dn.prototype;function Ui(e,t,n){this.props=e,this.context=t,this.refs=Xo,this.updater=n||Qo}var Vi=Ui.prototype=new Yo;Vi.constructor=Ui;Ko(Vi,dn.prototype);Vi.isPureReactComponent=!0;var Os=Array.isArray,Go=Object.prototype.hasOwnProperty,$i={current:null},Zo={key:!0,ref:!0,__self:!0,__source:!0};function Jo(e,t,n){var r,l={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Go.call(t,r)&&!Zo.hasOwnProperty(r)&&(l[r]=t[r]);var c=arguments.length-2;if(c===1)l.children=n;else if(1<c){for(var d=Array(c),p=0;p<c;p++)d[p]=arguments[p+2];l.children=d}if(e&&e.defaultProps)for(r in c=e.defaultProps,c)l[r]===void 0&&(l[r]=c[r]);return{$$typeof:Jn,type:e,key:s,ref:o,props:l,_owner:$i.current}}function mc(e,t){return{$$typeof:Jn,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wi(e){return typeof e=="object"&&e!==null&&e.$$typeof===Jn}function gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ds=/\/+/g;function jl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?gc(""+e.key):t.toString(36)}function kr(e,t,n,r,l){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Jn:case lc:o=!0}}if(o)return o=e,l=l(o),e=r===""?"."+jl(o,0):r,Os(l)?(n="",e!=null&&(n=e.replace(Ds,"$&/")+"/"),kr(l,t,n,"",function(p){return p})):l!=null&&(Wi(l)&&(l=mc(l,n+(!l.key||o&&o.key===l.key?"":(""+l.key).replace(Ds,"$&/")+"/")+e)),t.push(l)),1;if(o=0,r=r===""?".":r+":",Os(e))for(var c=0;c<e.length;c++){s=e[c];var d=r+jl(s,c);o+=kr(s,t,n,d,l)}else if(d=hc(e),typeof d=="function")for(e=d.call(e),c=0;!(s=e.next()).done;)s=s.value,d=r+jl(s,c++),o+=kr(s,t,n,d,l);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function sr(e,t,n){if(e==null)return e;var r=[],l=0;return kr(e,r,"","",function(s){return t.call(n,s,l++)}),r}function vc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ue={current:null},Sr={transition:null},xc={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:Sr,ReactCurrentOwner:$i};function qo(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:sr,forEach:function(e,t,n){sr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return sr(e,function(){t++}),t},toArray:function(e){return sr(e,function(t){return t})||[]},only:function(e){if(!Wi(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=dn;R.Fragment=ic;R.Profiler=oc;R.PureComponent=Ui;R.StrictMode=sc;R.Suspense=dc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xc;R.act=qo;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ko({},e.props),l=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=$i.current),t.key!==void 0&&(l=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(d in t)Go.call(t,d)&&!Zo.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&c!==void 0?c[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){c=Array(d);for(var p=0;p<d;p++)c[p]=arguments[p+2];r.children=c}return{$$typeof:Jn,type:e.type,key:l,ref:s,props:r,_owner:o}};R.createContext=function(e){return e={$$typeof:uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ac,_context:e},e.Consumer=e};R.createElement=Jo;R.createFactory=function(e){var t=Jo.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:cc,render:e}};R.isValidElement=Wi;R.lazy=function(e){return{$$typeof:pc,_payload:{_status:-1,_result:e},_init:vc}};R.memo=function(e,t){return{$$typeof:fc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Sr.transition;Sr.transition={};try{e()}finally{Sr.transition=t}};R.unstable_act=qo;R.useCallback=function(e,t){return ue.current.useCallback(e,t)};R.useContext=function(e){return ue.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ue.current.useDeferredValue(e)};R.useEffect=function(e,t){return ue.current.useEffect(e,t)};R.useId=function(){return ue.current.useId()};R.useImperativeHandle=function(e,t,n){return ue.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ue.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ue.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ue.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ue.current.useReducer(e,t,n)};R.useRef=function(e){return ue.current.useRef(e)};R.useState=function(e){return ue.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ue.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ue.current.useTransition()};R.version="18.3.1";Ho.exports=R;var ve=Ho.exports;const ea=rc(ve);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=ve,wc=Symbol.for("react.element"),jc=Symbol.for("react.fragment"),Nc=Object.prototype.hasOwnProperty,kc=yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Sc={key:!0,ref:!0,__self:!0,__source:!0};function ta(e,t,n){var r,l={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)Nc.call(t,r)&&!Sc.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)l[r]===void 0&&(l[r]=t[r]);return{$$typeof:wc,type:e,key:s,ref:o,props:l,_owner:kc.current}}il.Fragment=jc;il.jsx=ta;il.jsxs=ta;Bo.exports=il;var i=Bo.exports,Kl={},na={exports:{}},Ne={},ra={exports:{}},la={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,_){var z=S.length;S.push(_);e:for(;0<z;){var u=z-1>>>1,T=S[u];if(0<l(T,_))S[u]=_,S[z]=T,z=u;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var _=S[0],z=S.pop();if(z!==_){S[0]=z;e:for(var u=0,T=S.length,A=T>>>1;u<A;){var F=2*(u+1)-1,_e=S[F],jt=F+1,ir=S[jt];if(0>l(_e,z))jt<T&&0>l(ir,_e)?(S[u]=ir,S[jt]=z,u=jt):(S[u]=_e,S[F]=z,u=F);else if(jt<T&&0>l(ir,z))S[u]=ir,S[jt]=z,u=jt;else break e}}return _}function l(S,_){var z=S.sortIndex-_.sortIndex;return z!==0?z:S.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();e.unstable_now=function(){return o.now()-c}}var d=[],p=[],x=1,v=null,g=3,j=!1,w=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,a=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var _=n(p);_!==null;){if(_.callback===null)r(p);else if(_.startTime<=S)r(p),_.sortIndex=_.expirationTime,t(d,_);else break;_=n(p)}}function m(S){if(N=!1,h(S),!w)if(n(d)!==null)w=!0,Dt(k);else{var _=n(p);_!==null&&It(m,_.startTime-S)}}function k(S,_){w=!1,N&&(N=!1,a(L),L=-1),j=!0;var z=g;try{for(h(_),v=n(d);v!==null&&(!(v.expirationTime>_)||S&&!de());){var u=v.callback;if(typeof u=="function"){v.callback=null,g=v.priorityLevel;var T=u(v.expirationTime<=_);_=e.unstable_now(),typeof T=="function"?v.callback=T:v===n(d)&&r(d),h(_)}else r(d);v=n(d)}if(v!==null)var A=!0;else{var F=n(p);F!==null&&It(m,F.startTime-_),A=!1}return A}finally{v=null,g=z,j=!1}}var E=!1,P=null,L=-1,W=5,b=-1;function de(){return!(e.unstable_now()-b<W)}function yt(){if(P!==null){var S=e.unstable_now();b=S;var _=!0;try{_=P(!0,S)}finally{_?wt():(E=!1,P=null)}}else E=!1}var wt;if(typeof f=="function")wt=function(){f(yt)};else if(typeof MessageChannel<"u"){var rr=new MessageChannel,lr=rr.port2;rr.port1.onmessage=yt,wt=function(){lr.postMessage(null)}}else wt=function(){D(yt,0)};function Dt(S){P=S,E||(E=!0,wt())}function It(S,_){L=D(function(){S(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){w||j||(w=!0,Dt(k))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var z=g;g=_;try{return S()}finally{g=z}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var z=g;g=S;try{return _()}finally{g=z}},e.unstable_scheduleCallback=function(S,_,z){var u=e.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?u+z:u):z=u,S){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=z+T,S={id:x++,callback:_,priorityLevel:S,startTime:z,expirationTime:T,sortIndex:-1},z>u?(S.sortIndex=z,t(p,S),n(d)===null&&S===n(p)&&(N?(a(L),L=-1):N=!0,It(m,z-u))):(S.sortIndex=T,t(d,S),w||j||(w=!0,Dt(k))),S},e.unstable_shouldYield=de,e.unstable_wrapCallback=function(S){var _=g;return function(){var z=g;g=_;try{return S.apply(this,arguments)}finally{g=z}}}})(la);ra.exports=la;var Cc=ra.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ec=ve,je=Cc;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ia=new Set,On={};function Rt(e,t){rn(e,t),rn(e+"Capture",t)}function rn(e,t){for(On[e]=t,e=0;e<t.length;e++)ia.add(t[e])}var Xe=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Xl=Object.prototype.hasOwnProperty,Pc=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Is={},As={};function Lc(e){return Xl.call(As,e)?!0:Xl.call(Is,e)?!1:Pc.test(e)?As[e]=!0:(Is[e]=!0,!1)}function Tc(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function _c(e,t,n,r){if(t===null||typeof t>"u"||Tc(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ce(e,t,n,r,l,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=l,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ce(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ce(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ce(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ce(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ce(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ce(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ce(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ce(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ce(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bi=/[\-:]([a-z])/g;function Hi(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bi,Hi);ne[t]=new ce(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bi,Hi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bi,Hi);ne[t]=new ce(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ce("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ce(e,1,!1,e.toLowerCase(),null,!0,!0)});function Qi(e,t,n,r){var l=ne.hasOwnProperty(t)?ne[t]:null;(l!==null?l.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(_c(t,n,l,r)&&(n=null),r||l===null?Lc(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):l.mustUseProperty?e[l.propertyName]=n===null?l.type===3?!1:"":n:(t=l.attributeName,r=l.attributeNamespace,n===null?e.removeAttribute(t):(l=l.type,n=l===3||l===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Je=Ec.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,or=Symbol.for("react.element"),Mt=Symbol.for("react.portal"),Ut=Symbol.for("react.fragment"),Ki=Symbol.for("react.strict_mode"),Yl=Symbol.for("react.profiler"),sa=Symbol.for("react.provider"),oa=Symbol.for("react.context"),Xi=Symbol.for("react.forward_ref"),Gl=Symbol.for("react.suspense"),Zl=Symbol.for("react.suspense_list"),Yi=Symbol.for("react.memo"),et=Symbol.for("react.lazy"),aa=Symbol.for("react.offscreen"),Ms=Symbol.iterator;function hn(e){return e===null||typeof e!="object"?null:(e=Ms&&e[Ms]||e["@@iterator"],typeof e=="function"?e:null)}var Q=Object.assign,Nl;function Nn(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var kl=!1;function Sl(e,t){if(!e||kl)return"";kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var l=p.stack.split(`
`),s=r.stack.split(`
`),o=l.length-1,c=s.length-1;1<=o&&0<=c&&l[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(l[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||l[o]!==s[c]){var d=`
`+l[o].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=o&&0<=c);break}}}finally{kl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nn(e):""}function zc(e){switch(e.tag){case 5:return Nn(e.type);case 16:return Nn("Lazy");case 13:return Nn("Suspense");case 19:return Nn("SuspenseList");case 0:case 2:case 15:return e=Sl(e.type,!1),e;case 11:return e=Sl(e.type.render,!1),e;case 1:return e=Sl(e.type,!0),e;default:return""}}function Jl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ut:return"Fragment";case Mt:return"Portal";case Yl:return"Profiler";case Ki:return"StrictMode";case Gl:return"Suspense";case Zl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case oa:return(e.displayName||"Context")+".Consumer";case sa:return(e._context.displayName||"Context")+".Provider";case Xi:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Yi:return t=e.displayName||null,t!==null?t:Jl(e.type)||"Memo";case et:t=e._payload,e=e._init;try{return Jl(e(t))}catch{}}return null}function bc(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jl(t);case 8:return t===Ki?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ua(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Fc(e){var t=ua(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var l=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ar(e){e._valueTracker||(e._valueTracker=Fc(e))}function ca(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ua(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Or(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ql(e,t){var n=t.checked;return Q({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Us(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function da(e,t){t=t.checked,t!=null&&Qi(e,"checked",t,!1)}function ei(e,t){da(e,t);var n=ht(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ti(e,t.type,n):t.hasOwnProperty("defaultValue")&&ti(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Vs(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ti(e,t,n){(t!=="number"||Or(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var kn=Array.isArray;function Zt(e,t,n,r){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,r&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function ni(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(y(91));return Q({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $s(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(y(92));if(kn(n)){if(1<n.length)throw Error(y(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function fa(e,t){var n=ht(t.value),r=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function pa(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ri(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?pa(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ur,ha=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,l){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,l)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ur=ur||document.createElement("div"),ur.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ur.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Dn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var En={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Rc=["Webkit","ms","Moz","O"];Object.keys(En).forEach(function(e){Rc.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),En[t]=En[e]})});function ma(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||En.hasOwnProperty(e)&&En[e]?(""+t).trim():t+"px"}function ga(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,l=ma(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,l):e[n]=l}}var Oc=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function li(e,t){if(t){if(Oc[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(y(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(y(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(y(61))}if(t.style!=null&&typeof t.style!="object")throw Error(y(62))}}function ii(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var si=null;function Gi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var oi=null,Jt=null,qt=null;function Bs(e){if(e=tr(e)){if(typeof oi!="function")throw Error(y(280));var t=e.stateNode;t&&(t=cl(t),oi(e.stateNode,e.type,t))}}function va(e){Jt?qt?qt.push(e):qt=[e]:Jt=e}function xa(){if(Jt){var e=Jt,t=qt;if(qt=Jt=null,Bs(e),t)for(e=0;e<t.length;e++)Bs(t[e])}}function ya(e,t){return e(t)}function wa(){}var Cl=!1;function ja(e,t,n){if(Cl)return e(t,n);Cl=!0;try{return ya(e,t,n)}finally{Cl=!1,(Jt!==null||qt!==null)&&(wa(),xa())}}function In(e,t){var n=e.stateNode;if(n===null)return null;var r=cl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(y(231,t,typeof n));return n}var ai=!1;if(Xe)try{var mn={};Object.defineProperty(mn,"passive",{get:function(){ai=!0}}),window.addEventListener("test",mn,mn),window.removeEventListener("test",mn,mn)}catch{ai=!1}function Dc(e,t,n,r,l,s,o,c,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(x){this.onError(x)}}var Pn=!1,Dr=null,Ir=!1,ui=null,Ic={onError:function(e){Pn=!0,Dr=e}};function Ac(e,t,n,r,l,s,o,c,d){Pn=!1,Dr=null,Dc.apply(Ic,arguments)}function Mc(e,t,n,r,l,s,o,c,d){if(Ac.apply(this,arguments),Pn){if(Pn){var p=Dr;Pn=!1,Dr=null}else throw Error(y(198));Ir||(Ir=!0,ui=p)}}function Ot(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Na(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hs(e){if(Ot(e)!==e)throw Error(y(188))}function Uc(e){var t=e.alternate;if(!t){if(t=Ot(e),t===null)throw Error(y(188));return t!==e?null:e}for(var n=e,r=t;;){var l=n.return;if(l===null)break;var s=l.alternate;if(s===null){if(r=l.return,r!==null){n=r;continue}break}if(l.child===s.child){for(s=l.child;s;){if(s===n)return Hs(l),e;if(s===r)return Hs(l),t;s=s.sibling}throw Error(y(188))}if(n.return!==r.return)n=l,r=s;else{for(var o=!1,c=l.child;c;){if(c===n){o=!0,n=l,r=s;break}if(c===r){o=!0,r=l,n=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===n){o=!0,n=s,r=l;break}if(c===r){o=!0,r=s,n=l;break}c=c.sibling}if(!o)throw Error(y(189))}}if(n.alternate!==r)throw Error(y(190))}if(n.tag!==3)throw Error(y(188));return n.stateNode.current===n?e:t}function ka(e){return e=Uc(e),e!==null?Sa(e):null}function Sa(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Sa(e);if(t!==null)return t;e=e.sibling}return null}var Ca=je.unstable_scheduleCallback,Qs=je.unstable_cancelCallback,Vc=je.unstable_shouldYield,$c=je.unstable_requestPaint,X=je.unstable_now,Wc=je.unstable_getCurrentPriorityLevel,Zi=je.unstable_ImmediatePriority,Ea=je.unstable_UserBlockingPriority,Ar=je.unstable_NormalPriority,Bc=je.unstable_LowPriority,Pa=je.unstable_IdlePriority,sl=null,Ve=null;function Hc(e){if(Ve&&typeof Ve.onCommitFiberRoot=="function")try{Ve.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Xc,Qc=Math.log,Kc=Math.LN2;function Xc(e){return e>>>=0,e===0?32:31-(Qc(e)/Kc|0)|0}var cr=64,dr=4194304;function Sn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Mr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,l=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var c=o&~l;c!==0?r=Sn(c):(s&=o,s!==0&&(r=Sn(s)))}else o=n&~l,o!==0?r=Sn(o):s!==0&&(r=Sn(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&l)&&(l=r&-r,s=t&-t,l>=s||l===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Oe(t),l=1<<n,r|=e[n],t&=~l;return r}function Yc(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gc(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,l=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Oe(s),c=1<<o,d=l[o];d===-1?(!(c&n)||c&r)&&(l[o]=Yc(c,t)):d<=t&&(e.expiredLanes|=c),s&=~c}}function ci(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function La(){var e=cr;return cr<<=1,!(cr&4194240)&&(cr=64),e}function El(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qn(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=n}function Zc(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var l=31-Oe(n),s=1<<l;t[l]=0,r[l]=-1,e[l]=-1,n&=~s}}function Ji(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Oe(n),l=1<<r;l&t|e[r]&t&&(e[r]|=t),n&=~l}}var I=0;function Ta(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var _a,qi,za,ba,Fa,di=!1,fr=[],st=null,ot=null,at=null,An=new Map,Mn=new Map,nt=[],Jc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ks(e,t){switch(e){case"focusin":case"focusout":st=null;break;case"dragenter":case"dragleave":ot=null;break;case"mouseover":case"mouseout":at=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mn.delete(t.pointerId)}}function gn(e,t,n,r,l,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[l]},t!==null&&(t=tr(t),t!==null&&qi(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function qc(e,t,n,r,l){switch(t){case"focusin":return st=gn(st,e,t,n,r,l),!0;case"dragenter":return ot=gn(ot,e,t,n,r,l),!0;case"mouseover":return at=gn(at,e,t,n,r,l),!0;case"pointerover":var s=l.pointerId;return An.set(s,gn(An.get(s)||null,e,t,n,r,l)),!0;case"gotpointercapture":return s=l.pointerId,Mn.set(s,gn(Mn.get(s)||null,e,t,n,r,l)),!0}return!1}function Ra(e){var t=St(e.target);if(t!==null){var n=Ot(t);if(n!==null){if(t=n.tag,t===13){if(t=Na(n),t!==null){e.blockedOn=t,Fa(e.priority,function(){za(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fi(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);si=r,n.target.dispatchEvent(r),si=null}else return t=tr(n),t!==null&&qi(t),e.blockedOn=n,!1;t.shift()}return!0}function Xs(e,t,n){Cr(e)&&n.delete(t)}function ed(){di=!1,st!==null&&Cr(st)&&(st=null),ot!==null&&Cr(ot)&&(ot=null),at!==null&&Cr(at)&&(at=null),An.forEach(Xs),Mn.forEach(Xs)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,di||(di=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,ed)))}function Un(e){function t(l){return vn(l,e)}if(0<fr.length){vn(fr[0],e);for(var n=1;n<fr.length;n++){var r=fr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(st!==null&&vn(st,e),ot!==null&&vn(ot,e),at!==null&&vn(at,e),An.forEach(t),Mn.forEach(t),n=0;n<nt.length;n++)r=nt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<nt.length&&(n=nt[0],n.blockedOn===null);)Ra(n),n.blockedOn===null&&nt.shift()}var en=Je.ReactCurrentBatchConfig,Ur=!0;function td(e,t,n,r){var l=I,s=en.transition;en.transition=null;try{I=1,es(e,t,n,r)}finally{I=l,en.transition=s}}function nd(e,t,n,r){var l=I,s=en.transition;en.transition=null;try{I=4,es(e,t,n,r)}finally{I=l,en.transition=s}}function es(e,t,n,r){if(Ur){var l=fi(e,t,n,r);if(l===null)Dl(e,t,r,Vr,n),Ks(e,r);else if(qc(l,e,t,n,r))r.stopPropagation();else if(Ks(e,r),t&4&&-1<Jc.indexOf(e)){for(;l!==null;){var s=tr(l);if(s!==null&&_a(s),s=fi(e,t,n,r),s===null&&Dl(e,t,r,Vr,n),s===l)break;l=s}l!==null&&r.stopPropagation()}else Dl(e,t,r,null,n)}}var Vr=null;function fi(e,t,n,r){if(Vr=null,e=Gi(r),e=St(e),e!==null)if(t=Ot(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Na(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vr=e,null}function Oa(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Wc()){case Zi:return 1;case Ea:return 4;case Ar:case Bc:return 16;case Pa:return 536870912;default:return 16}default:return 16}}var lt=null,ts=null,Er=null;function Da(){if(Er)return Er;var e,t=ts,n=t.length,r,l="value"in lt?lt.value:lt.textContent,s=l.length;for(e=0;e<n&&t[e]===l[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===l[s-r];r++);return Er=l.slice(e,1<r?1-r:void 0)}function Pr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function pr(){return!0}function Ys(){return!1}function ke(e){function t(n,r,l,s,o){this._reactName=n,this._targetInst=l,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?pr:Ys,this.isPropagationStopped=Ys,this}return Q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=pr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=pr)},persist:function(){},isPersistent:pr}),t}var fn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ns=ke(fn),er=Q({},fn,{view:0,detail:0}),rd=ke(er),Pl,Ll,xn,ol=Q({},er,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xn&&(xn&&e.type==="mousemove"?(Pl=e.screenX-xn.screenX,Ll=e.screenY-xn.screenY):Ll=Pl=0,xn=e),Pl)},movementY:function(e){return"movementY"in e?e.movementY:Ll}}),Gs=ke(ol),ld=Q({},ol,{dataTransfer:0}),id=ke(ld),sd=Q({},er,{relatedTarget:0}),Tl=ke(sd),od=Q({},fn,{animationName:0,elapsedTime:0,pseudoElement:0}),ad=ke(od),ud=Q({},fn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cd=ke(ud),dd=Q({},fn,{data:0}),Zs=ke(dd),fd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function md(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hd[e])?!!t[e]:!1}function rs(){return md}var gd=Q({},er,{key:function(e){if(e.key){var t=fd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Pr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rs,charCode:function(e){return e.type==="keypress"?Pr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Pr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vd=ke(gd),xd=Q({},ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Js=ke(xd),yd=Q({},er,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rs}),wd=ke(yd),jd=Q({},fn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nd=ke(jd),kd=Q({},ol,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sd=ke(kd),Cd=[9,13,27,32],ls=Xe&&"CompositionEvent"in window,Ln=null;Xe&&"documentMode"in document&&(Ln=document.documentMode);var Ed=Xe&&"TextEvent"in window&&!Ln,Ia=Xe&&(!ls||Ln&&8<Ln&&11>=Ln),qs=" ",eo=!1;function Aa(e,t){switch(e){case"keyup":return Cd.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ma(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vt=!1;function Pd(e,t){switch(e){case"compositionend":return Ma(t);case"keypress":return t.which!==32?null:(eo=!0,qs);case"textInput":return e=t.data,e===qs&&eo?null:e;default:return null}}function Ld(e,t){if(Vt)return e==="compositionend"||!ls&&Aa(e,t)?(e=Da(),Er=ts=lt=null,Vt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ia&&t.locale!=="ko"?null:t.data;default:return null}}var Td={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function to(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Td[e.type]:t==="textarea"}function Ua(e,t,n,r){va(r),t=$r(t,"onChange"),0<t.length&&(n=new ns("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tn=null,Vn=null;function _d(e){Za(e,0)}function al(e){var t=Bt(e);if(ca(t))return e}function zd(e,t){if(e==="change")return t}var Va=!1;if(Xe){var _l;if(Xe){var zl="oninput"in document;if(!zl){var no=document.createElement("div");no.setAttribute("oninput","return;"),zl=typeof no.oninput=="function"}_l=zl}else _l=!1;Va=_l&&(!document.documentMode||9<document.documentMode)}function ro(){Tn&&(Tn.detachEvent("onpropertychange",$a),Vn=Tn=null)}function $a(e){if(e.propertyName==="value"&&al(Vn)){var t=[];Ua(t,Vn,e,Gi(e)),ja(_d,t)}}function bd(e,t,n){e==="focusin"?(ro(),Tn=t,Vn=n,Tn.attachEvent("onpropertychange",$a)):e==="focusout"&&ro()}function Fd(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return al(Vn)}function Rd(e,t){if(e==="click")return al(t)}function Od(e,t){if(e==="input"||e==="change")return al(t)}function Dd(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ie=typeof Object.is=="function"?Object.is:Dd;function $n(e,t){if(Ie(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var l=n[r];if(!Xl.call(t,l)||!Ie(e[l],t[l]))return!1}return!0}function lo(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function io(e,t){var n=lo(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=lo(n)}}function Wa(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Wa(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ba(){for(var e=window,t=Or();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Or(e.document)}return t}function is(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Id(e){var t=Ba(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Wa(n.ownerDocument.documentElement,n)){if(r!==null&&is(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,s=Math.min(r.start,l);r=r.end===void 0?s:Math.min(r.end,l),!e.extend&&s>r&&(l=r,r=s,s=l),l=io(n,s);var o=io(n,r);l&&o&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Ad=Xe&&"documentMode"in document&&11>=document.documentMode,$t=null,pi=null,_n=null,hi=!1;function so(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;hi||$t==null||$t!==Or(r)||(r=$t,"selectionStart"in r&&is(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),_n&&$n(_n,r)||(_n=r,r=$r(pi,"onSelect"),0<r.length&&(t=new ns("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=$t)))}function hr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Wt={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionend:hr("Transition","TransitionEnd")},bl={},Ha={};Xe&&(Ha=document.createElement("div").style,"AnimationEvent"in window||(delete Wt.animationend.animation,delete Wt.animationiteration.animation,delete Wt.animationstart.animation),"TransitionEvent"in window||delete Wt.transitionend.transition);function ul(e){if(bl[e])return bl[e];if(!Wt[e])return e;var t=Wt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ha)return bl[e]=t[n];return e}var Qa=ul("animationend"),Ka=ul("animationiteration"),Xa=ul("animationstart"),Ya=ul("transitionend"),Ga=new Map,oo="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function gt(e,t){Ga.set(e,t),Rt(t,[e])}for(var Fl=0;Fl<oo.length;Fl++){var Rl=oo[Fl],Md=Rl.toLowerCase(),Ud=Rl[0].toUpperCase()+Rl.slice(1);gt(Md,"on"+Ud)}gt(Qa,"onAnimationEnd");gt(Ka,"onAnimationIteration");gt(Xa,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(Ya,"onTransitionEnd");rn("onMouseEnter",["mouseout","mouseover"]);rn("onMouseLeave",["mouseout","mouseover"]);rn("onPointerEnter",["pointerout","pointerover"]);rn("onPointerLeave",["pointerout","pointerover"]);Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Vd=new Set("cancel close invalid load scroll toggle".split(" ").concat(Cn));function ao(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Mc(r,t,void 0,e),e.currentTarget=null}function Za(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],l=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var c=r[o],d=c.instance,p=c.currentTarget;if(c=c.listener,d!==s&&l.isPropagationStopped())break e;ao(l,c,p),s=d}else for(o=0;o<r.length;o++){if(c=r[o],d=c.instance,p=c.currentTarget,c=c.listener,d!==s&&l.isPropagationStopped())break e;ao(l,c,p),s=d}}}if(Ir)throw e=ui,Ir=!1,ui=null,e}function U(e,t){var n=t[yi];n===void 0&&(n=t[yi]=new Set);var r=e+"__bubble";n.has(r)||(Ja(t,e,2,!1),n.add(r))}function Ol(e,t,n){var r=0;t&&(r|=4),Ja(n,e,r,t)}var mr="_reactListening"+Math.random().toString(36).slice(2);function Wn(e){if(!e[mr]){e[mr]=!0,ia.forEach(function(n){n!=="selectionchange"&&(Vd.has(n)||Ol(n,!1,e),Ol(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mr]||(t[mr]=!0,Ol("selectionchange",!1,t))}}function Ja(e,t,n,r){switch(Oa(t)){case 1:var l=td;break;case 4:l=nd;break;default:l=es}n=l.bind(null,t,n,e),l=void 0,!ai||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),r?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Dl(e,t,n,r,l){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===l||c.nodeType===8&&c.parentNode===l)break;if(o===4)for(o=r.return;o!==null;){var d=o.tag;if((d===3||d===4)&&(d=o.stateNode.containerInfo,d===l||d.nodeType===8&&d.parentNode===l))return;o=o.return}for(;c!==null;){if(o=St(c),o===null)return;if(d=o.tag,d===5||d===6){r=s=o;continue e}c=c.parentNode}}r=r.return}ja(function(){var p=s,x=Gi(n),v=[];e:{var g=Ga.get(e);if(g!==void 0){var j=ns,w=e;switch(e){case"keypress":if(Pr(n)===0)break e;case"keydown":case"keyup":j=vd;break;case"focusin":w="focus",j=Tl;break;case"focusout":w="blur",j=Tl;break;case"beforeblur":case"afterblur":j=Tl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=Gs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=id;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=wd;break;case Qa:case Ka:case Xa:j=ad;break;case Ya:j=Nd;break;case"scroll":j=rd;break;case"wheel":j=Sd;break;case"copy":case"cut":case"paste":j=cd;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=Js}var N=(t&4)!==0,D=!N&&e==="scroll",a=N?g!==null?g+"Capture":null:g;N=[];for(var f=p,h;f!==null;){h=f;var m=h.stateNode;if(h.tag===5&&m!==null&&(h=m,a!==null&&(m=In(f,a),m!=null&&N.push(Bn(f,m,h)))),D)break;f=f.return}0<N.length&&(g=new j(g,w,null,n,x),v.push({event:g,listeners:N}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",j=e==="mouseout"||e==="pointerout",g&&n!==si&&(w=n.relatedTarget||n.fromElement)&&(St(w)||w[Ye]))break e;if((j||g)&&(g=x.window===x?x:(g=x.ownerDocument)?g.defaultView||g.parentWindow:window,j?(w=n.relatedTarget||n.toElement,j=p,w=w?St(w):null,w!==null&&(D=Ot(w),w!==D||w.tag!==5&&w.tag!==6)&&(w=null)):(j=null,w=p),j!==w)){if(N=Gs,m="onMouseLeave",a="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(N=Js,m="onPointerLeave",a="onPointerEnter",f="pointer"),D=j==null?g:Bt(j),h=w==null?g:Bt(w),g=new N(m,f+"leave",j,n,x),g.target=D,g.relatedTarget=h,m=null,St(x)===p&&(N=new N(a,f+"enter",w,n,x),N.target=h,N.relatedTarget=D,m=N),D=m,j&&w)t:{for(N=j,a=w,f=0,h=N;h;h=At(h))f++;for(h=0,m=a;m;m=At(m))h++;for(;0<f-h;)N=At(N),f--;for(;0<h-f;)a=At(a),h--;for(;f--;){if(N===a||a!==null&&N===a.alternate)break t;N=At(N),a=At(a)}N=null}else N=null;j!==null&&uo(v,g,j,N,!1),w!==null&&D!==null&&uo(v,D,w,N,!0)}}e:{if(g=p?Bt(p):window,j=g.nodeName&&g.nodeName.toLowerCase(),j==="select"||j==="input"&&g.type==="file")var k=zd;else if(to(g))if(Va)k=Od;else{k=Fd;var E=bd}else(j=g.nodeName)&&j.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=Rd);if(k&&(k=k(e,p))){Ua(v,k,n,x);break e}E&&E(e,g,p),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&ti(g,"number",g.value)}switch(E=p?Bt(p):window,e){case"focusin":(to(E)||E.contentEditable==="true")&&($t=E,pi=p,_n=null);break;case"focusout":_n=pi=$t=null;break;case"mousedown":hi=!0;break;case"contextmenu":case"mouseup":case"dragend":hi=!1,so(v,n,x);break;case"selectionchange":if(Ad)break;case"keydown":case"keyup":so(v,n,x)}var P;if(ls)e:{switch(e){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Vt?Aa(e,n)&&(L="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Ia&&n.locale!=="ko"&&(Vt||L!=="onCompositionStart"?L==="onCompositionEnd"&&Vt&&(P=Da()):(lt=x,ts="value"in lt?lt.value:lt.textContent,Vt=!0)),E=$r(p,L),0<E.length&&(L=new Zs(L,e,null,n,x),v.push({event:L,listeners:E}),P?L.data=P:(P=Ma(n),P!==null&&(L.data=P)))),(P=Ed?Pd(e,n):Ld(e,n))&&(p=$r(p,"onBeforeInput"),0<p.length&&(x=new Zs("onBeforeInput","beforeinput",null,n,x),v.push({event:x,listeners:p}),x.data=P))}Za(v,t)})}function Bn(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $r(e,t){for(var n=t+"Capture",r=[];e!==null;){var l=e,s=l.stateNode;l.tag===5&&s!==null&&(l=s,s=In(e,n),s!=null&&r.unshift(Bn(e,s,l)),s=In(e,t),s!=null&&r.push(Bn(e,s,l))),e=e.return}return r}function At(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function uo(e,t,n,r,l){for(var s=t._reactName,o=[];n!==null&&n!==r;){var c=n,d=c.alternate,p=c.stateNode;if(d!==null&&d===r)break;c.tag===5&&p!==null&&(c=p,l?(d=In(n,s),d!=null&&o.unshift(Bn(n,d,c))):l||(d=In(n,s),d!=null&&o.push(Bn(n,d,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var $d=/\r\n?/g,Wd=/\u0000|\uFFFD/g;function co(e){return(typeof e=="string"?e:""+e).replace($d,`
`).replace(Wd,"")}function gr(e,t,n){if(t=co(t),co(e)!==t&&n)throw Error(y(425))}function Wr(){}var mi=null,gi=null;function vi(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xi=typeof setTimeout=="function"?setTimeout:void 0,Bd=typeof clearTimeout=="function"?clearTimeout:void 0,fo=typeof Promise=="function"?Promise:void 0,Hd=typeof queueMicrotask=="function"?queueMicrotask:typeof fo<"u"?function(e){return fo.resolve(null).then(e).catch(Qd)}:xi;function Qd(e){setTimeout(function(){throw e})}function Il(e,t){var n=t,r=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(r===0){e.removeChild(l),Un(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=l}while(n);Un(t)}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function po(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var pn=Math.random().toString(36).slice(2),Ue="__reactFiber$"+pn,Hn="__reactProps$"+pn,Ye="__reactContainer$"+pn,yi="__reactEvents$"+pn,Kd="__reactListeners$"+pn,Xd="__reactHandles$"+pn;function St(e){var t=e[Ue];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ye]||n[Ue]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=po(e);e!==null;){if(n=e[Ue])return n;e=po(e)}return t}e=n,n=e.parentNode}return null}function tr(e){return e=e[Ue]||e[Ye],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Bt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(y(33))}function cl(e){return e[Hn]||null}var wi=[],Ht=-1;function vt(e){return{current:e}}function V(e){0>Ht||(e.current=wi[Ht],wi[Ht]=null,Ht--)}function M(e,t){Ht++,wi[Ht]=e.current,e.current=t}var mt={},se=vt(mt),he=vt(!1),Tt=mt;function ln(e,t){var n=e.type.contextTypes;if(!n)return mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var l={},s;for(s in n)l[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function me(e){return e=e.childContextTypes,e!=null}function Br(){V(he),V(se)}function ho(e,t,n){if(se.current!==mt)throw Error(y(168));M(se,t),M(he,n)}function qa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var l in r)if(!(l in t))throw Error(y(108,bc(e)||"Unknown",l));return Q({},n,r)}function Hr(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||mt,Tt=se.current,M(se,e),M(he,he.current),!0}function mo(e,t,n){var r=e.stateNode;if(!r)throw Error(y(169));n?(e=qa(e,t,Tt),r.__reactInternalMemoizedMergedChildContext=e,V(he),V(se),M(se,e)):V(he),M(he,n)}var Be=null,dl=!1,Al=!1;function eu(e){Be===null?Be=[e]:Be.push(e)}function Yd(e){dl=!0,eu(e)}function xt(){if(!Al&&Be!==null){Al=!0;var e=0,t=I;try{var n=Be;for(I=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Be=null,dl=!1}catch(l){throw Be!==null&&(Be=Be.slice(e+1)),Ca(Zi,xt),l}finally{I=t,Al=!1}}return null}var Qt=[],Kt=0,Qr=null,Kr=0,Se=[],Ce=0,_t=null,He=1,Qe="";function Nt(e,t){Qt[Kt++]=Kr,Qt[Kt++]=Qr,Qr=e,Kr=t}function tu(e,t,n){Se[Ce++]=He,Se[Ce++]=Qe,Se[Ce++]=_t,_t=e;var r=He;e=Qe;var l=32-Oe(r)-1;r&=~(1<<l),n+=1;var s=32-Oe(t)+l;if(30<s){var o=l-l%5;s=(r&(1<<o)-1).toString(32),r>>=o,l-=o,He=1<<32-Oe(t)+l|n<<l|r,Qe=s+e}else He=1<<s|n<<l|r,Qe=e}function ss(e){e.return!==null&&(Nt(e,1),tu(e,1,0))}function os(e){for(;e===Qr;)Qr=Qt[--Kt],Qt[Kt]=null,Kr=Qt[--Kt],Qt[Kt]=null;for(;e===_t;)_t=Se[--Ce],Se[Ce]=null,Qe=Se[--Ce],Se[Ce]=null,He=Se[--Ce],Se[Ce]=null}var we=null,ye=null,$=!1,Re=null;function nu(e,t){var n=Ee(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function go(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,we=e,ye=ut(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,we=e,ye=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=_t!==null?{id:He,overflow:Qe}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ee(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,we=e,ye=null,!0):!1;default:return!1}}function ji(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ni(e){if($){var t=ye;if(t){var n=t;if(!go(e,t)){if(ji(e))throw Error(y(418));t=ut(n.nextSibling);var r=we;t&&go(e,t)?nu(r,n):(e.flags=e.flags&-4097|2,$=!1,we=e)}}else{if(ji(e))throw Error(y(418));e.flags=e.flags&-4097|2,$=!1,we=e}}}function vo(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;we=e}function vr(e){if(e!==we)return!1;if(!$)return vo(e),$=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!vi(e.type,e.memoizedProps)),t&&(t=ye)){if(ji(e))throw ru(),Error(y(418));for(;t;)nu(e,t),t=ut(t.nextSibling)}if(vo(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(y(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ye=ut(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ye=null}}else ye=we?ut(e.stateNode.nextSibling):null;return!0}function ru(){for(var e=ye;e;)e=ut(e.nextSibling)}function sn(){ye=we=null,$=!1}function as(e){Re===null?Re=[e]:Re.push(e)}var Gd=Je.ReactCurrentBatchConfig;function yn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(y(309));var r=n.stateNode}if(!r)throw Error(y(147,e));var l=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var c=l.refs;o===null?delete c[s]:c[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(y(284));if(!n._owner)throw Error(y(290,e))}return e}function xr(e,t){throw e=Object.prototype.toString.call(t),Error(y(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){var t=e._init;return t(e._payload)}function lu(e){function t(a,f){if(e){var h=a.deletions;h===null?(a.deletions=[f],a.flags|=16):h.push(f)}}function n(a,f){if(!e)return null;for(;f!==null;)t(a,f),f=f.sibling;return null}function r(a,f){for(a=new Map;f!==null;)f.key!==null?a.set(f.key,f):a.set(f.index,f),f=f.sibling;return a}function l(a,f){return a=pt(a,f),a.index=0,a.sibling=null,a}function s(a,f,h){return a.index=h,e?(h=a.alternate,h!==null?(h=h.index,h<f?(a.flags|=2,f):h):(a.flags|=2,f)):(a.flags|=1048576,f)}function o(a){return e&&a.alternate===null&&(a.flags|=2),a}function c(a,f,h,m){return f===null||f.tag!==6?(f=Hl(h,a.mode,m),f.return=a,f):(f=l(f,h),f.return=a,f)}function d(a,f,h,m){var k=h.type;return k===Ut?x(a,f,h.props.children,m,h.key):f!==null&&(f.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===et&&xo(k)===f.type)?(m=l(f,h.props),m.ref=yn(a,f,h),m.return=a,m):(m=Rr(h.type,h.key,h.props,null,a.mode,m),m.ref=yn(a,f,h),m.return=a,m)}function p(a,f,h,m){return f===null||f.tag!==4||f.stateNode.containerInfo!==h.containerInfo||f.stateNode.implementation!==h.implementation?(f=Ql(h,a.mode,m),f.return=a,f):(f=l(f,h.children||[]),f.return=a,f)}function x(a,f,h,m,k){return f===null||f.tag!==7?(f=Lt(h,a.mode,m,k),f.return=a,f):(f=l(f,h),f.return=a,f)}function v(a,f,h){if(typeof f=="string"&&f!==""||typeof f=="number")return f=Hl(""+f,a.mode,h),f.return=a,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case or:return h=Rr(f.type,f.key,f.props,null,a.mode,h),h.ref=yn(a,null,f),h.return=a,h;case Mt:return f=Ql(f,a.mode,h),f.return=a,f;case et:var m=f._init;return v(a,m(f._payload),h)}if(kn(f)||hn(f))return f=Lt(f,a.mode,h,null),f.return=a,f;xr(a,f)}return null}function g(a,f,h,m){var k=f!==null?f.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return k!==null?null:c(a,f,""+h,m);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case or:return h.key===k?d(a,f,h,m):null;case Mt:return h.key===k?p(a,f,h,m):null;case et:return k=h._init,g(a,f,k(h._payload),m)}if(kn(h)||hn(h))return k!==null?null:x(a,f,h,m,null);xr(a,h)}return null}function j(a,f,h,m,k){if(typeof m=="string"&&m!==""||typeof m=="number")return a=a.get(h)||null,c(f,a,""+m,k);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case or:return a=a.get(m.key===null?h:m.key)||null,d(f,a,m,k);case Mt:return a=a.get(m.key===null?h:m.key)||null,p(f,a,m,k);case et:var E=m._init;return j(a,f,h,E(m._payload),k)}if(kn(m)||hn(m))return a=a.get(h)||null,x(f,a,m,k,null);xr(f,m)}return null}function w(a,f,h,m){for(var k=null,E=null,P=f,L=f=0,W=null;P!==null&&L<h.length;L++){P.index>L?(W=P,P=null):W=P.sibling;var b=g(a,P,h[L],m);if(b===null){P===null&&(P=W);break}e&&P&&b.alternate===null&&t(a,P),f=s(b,f,L),E===null?k=b:E.sibling=b,E=b,P=W}if(L===h.length)return n(a,P),$&&Nt(a,L),k;if(P===null){for(;L<h.length;L++)P=v(a,h[L],m),P!==null&&(f=s(P,f,L),E===null?k=P:E.sibling=P,E=P);return $&&Nt(a,L),k}for(P=r(a,P);L<h.length;L++)W=j(P,a,L,h[L],m),W!==null&&(e&&W.alternate!==null&&P.delete(W.key===null?L:W.key),f=s(W,f,L),E===null?k=W:E.sibling=W,E=W);return e&&P.forEach(function(de){return t(a,de)}),$&&Nt(a,L),k}function N(a,f,h,m){var k=hn(h);if(typeof k!="function")throw Error(y(150));if(h=k.call(h),h==null)throw Error(y(151));for(var E=k=null,P=f,L=f=0,W=null,b=h.next();P!==null&&!b.done;L++,b=h.next()){P.index>L?(W=P,P=null):W=P.sibling;var de=g(a,P,b.value,m);if(de===null){P===null&&(P=W);break}e&&P&&de.alternate===null&&t(a,P),f=s(de,f,L),E===null?k=de:E.sibling=de,E=de,P=W}if(b.done)return n(a,P),$&&Nt(a,L),k;if(P===null){for(;!b.done;L++,b=h.next())b=v(a,b.value,m),b!==null&&(f=s(b,f,L),E===null?k=b:E.sibling=b,E=b);return $&&Nt(a,L),k}for(P=r(a,P);!b.done;L++,b=h.next())b=j(P,a,L,b.value,m),b!==null&&(e&&b.alternate!==null&&P.delete(b.key===null?L:b.key),f=s(b,f,L),E===null?k=b:E.sibling=b,E=b);return e&&P.forEach(function(yt){return t(a,yt)}),$&&Nt(a,L),k}function D(a,f,h,m){if(typeof h=="object"&&h!==null&&h.type===Ut&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case or:e:{for(var k=h.key,E=f;E!==null;){if(E.key===k){if(k=h.type,k===Ut){if(E.tag===7){n(a,E.sibling),f=l(E,h.props.children),f.return=a,a=f;break e}}else if(E.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===et&&xo(k)===E.type){n(a,E.sibling),f=l(E,h.props),f.ref=yn(a,E,h),f.return=a,a=f;break e}n(a,E);break}else t(a,E);E=E.sibling}h.type===Ut?(f=Lt(h.props.children,a.mode,m,h.key),f.return=a,a=f):(m=Rr(h.type,h.key,h.props,null,a.mode,m),m.ref=yn(a,f,h),m.return=a,a=m)}return o(a);case Mt:e:{for(E=h.key;f!==null;){if(f.key===E)if(f.tag===4&&f.stateNode.containerInfo===h.containerInfo&&f.stateNode.implementation===h.implementation){n(a,f.sibling),f=l(f,h.children||[]),f.return=a,a=f;break e}else{n(a,f);break}else t(a,f);f=f.sibling}f=Ql(h,a.mode,m),f.return=a,a=f}return o(a);case et:return E=h._init,D(a,f,E(h._payload),m)}if(kn(h))return w(a,f,h,m);if(hn(h))return N(a,f,h,m);xr(a,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,f!==null&&f.tag===6?(n(a,f.sibling),f=l(f,h),f.return=a,a=f):(n(a,f),f=Hl(h,a.mode,m),f.return=a,a=f),o(a)):n(a,f)}return D}var on=lu(!0),iu=lu(!1),Xr=vt(null),Yr=null,Xt=null,us=null;function cs(){us=Xt=Yr=null}function ds(e){var t=Xr.current;V(Xr),e._currentValue=t}function ki(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){Yr=e,us=Xt=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(pe=!0),e.firstContext=null)}function Le(e){var t=e._currentValue;if(us!==e)if(e={context:e,memoizedValue:t,next:null},Xt===null){if(Yr===null)throw Error(y(308));Xt=e,Yr.dependencies={lanes:0,firstContext:e}}else Xt=Xt.next=e;return t}var Ct=null;function fs(e){Ct===null?Ct=[e]:Ct.push(e)}function su(e,t,n,r){var l=t.interleaved;return l===null?(n.next=n,fs(t)):(n.next=l.next,l.next=n),t.interleaved=n,Ge(e,r)}function Ge(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var tt=!1;function ps(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ou(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ke(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var l=r.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),r.pending=t,Ge(e,n)}return l=r.interleaved,l===null?(t.next=t,fs(r)):(t.next=l.next,l.next=t),r.interleaved=t,Ge(e,n)}function Lr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}function yo(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var l=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?l=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?l=s=t:s=s.next=t}else l=s=t;n={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Gr(e,t,n,r){var l=e.updateQueue;tt=!1;var s=l.firstBaseUpdate,o=l.lastBaseUpdate,c=l.shared.pending;if(c!==null){l.shared.pending=null;var d=c,p=d.next;d.next=null,o===null?s=p:o.next=p,o=d;var x=e.alternate;x!==null&&(x=x.updateQueue,c=x.lastBaseUpdate,c!==o&&(c===null?x.firstBaseUpdate=p:c.next=p,x.lastBaseUpdate=d))}if(s!==null){var v=l.baseState;o=0,x=p=d=null,c=s;do{var g=c.lane,j=c.eventTime;if((r&g)===g){x!==null&&(x=x.next={eventTime:j,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=e,N=c;switch(g=t,j=n,N.tag){case 1:if(w=N.payload,typeof w=="function"){v=w.call(j,v,g);break e}v=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=N.payload,g=typeof w=="function"?w.call(j,v,g):w,g==null)break e;v=Q({},v,g);break e;case 2:tt=!0}}c.callback!==null&&c.lane!==0&&(e.flags|=64,g=l.effects,g===null?l.effects=[c]:g.push(c))}else j={eventTime:j,lane:g,tag:c.tag,payload:c.payload,callback:c.callback,next:null},x===null?(p=x=j,d=v):x=x.next=j,o|=g;if(c=c.next,c===null){if(c=l.shared.pending,c===null)break;g=c,c=g.next,g.next=null,l.lastBaseUpdate=g,l.shared.pending=null}}while(!0);if(x===null&&(d=v),l.baseState=d,l.firstBaseUpdate=p,l.lastBaseUpdate=x,t=l.shared.interleaved,t!==null){l=t;do o|=l.lane,l=l.next;while(l!==t)}else s===null&&(l.shared.lanes=0);bt|=o,e.lanes=o,e.memoizedState=v}}function wo(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],l=r.callback;if(l!==null){if(r.callback=null,r=n,typeof l!="function")throw Error(y(191,l));l.call(r)}}}var nr={},$e=vt(nr),Qn=vt(nr),Kn=vt(nr);function Et(e){if(e===nr)throw Error(y(174));return e}function hs(e,t){switch(M(Kn,t),M(Qn,e),M($e,nr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ri(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ri(t,e)}V($e),M($e,t)}function an(){V($e),V(Qn),V(Kn)}function au(e){Et(Kn.current);var t=Et($e.current),n=ri(t,e.type);t!==n&&(M(Qn,e),M($e,n))}function ms(e){Qn.current===e&&(V($e),V(Qn))}var B=vt(0);function Zr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ml=[];function gs(){for(var e=0;e<Ml.length;e++)Ml[e]._workInProgressVersionPrimary=null;Ml.length=0}var Tr=Je.ReactCurrentDispatcher,Ul=Je.ReactCurrentBatchConfig,zt=0,H=null,G=null,J=null,Jr=!1,zn=!1,Xn=0,Zd=0;function re(){throw Error(y(321))}function vs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ie(e[n],t[n]))return!1;return!0}function xs(e,t,n,r,l,s){if(zt=s,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Tr.current=e===null||e.memoizedState===null?tf:nf,e=n(r,l),zn){s=0;do{if(zn=!1,Xn=0,25<=s)throw Error(y(301));s+=1,J=G=null,t.updateQueue=null,Tr.current=rf,e=n(r,l)}while(zn)}if(Tr.current=qr,t=G!==null&&G.next!==null,zt=0,J=G=H=null,Jr=!1,t)throw Error(y(300));return e}function ys(){var e=Xn!==0;return Xn=0,e}function Me(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return J===null?H.memoizedState=J=e:J=J.next=e,J}function Te(){if(G===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=G.next;var t=J===null?H.memoizedState:J.next;if(t!==null)J=t,G=e;else{if(e===null)throw Error(y(310));G=e,e={memoizedState:G.memoizedState,baseState:G.baseState,baseQueue:G.baseQueue,queue:G.queue,next:null},J===null?H.memoizedState=J=e:J=J.next=e}return J}function Yn(e,t){return typeof t=="function"?t(e):t}function Vl(e){var t=Te(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=G,l=r.baseQueue,s=n.pending;if(s!==null){if(l!==null){var o=l.next;l.next=s.next,s.next=o}r.baseQueue=l=s,n.pending=null}if(l!==null){s=l.next,r=r.baseState;var c=o=null,d=null,p=s;do{var x=p.lane;if((zt&x)===x)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var v={lane:x,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(c=d=v,o=r):d=d.next=v,H.lanes|=x,bt|=x}p=p.next}while(p!==null&&p!==s);d===null?o=r:d.next=c,Ie(r,t.memoizedState)||(pe=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){l=e;do s=l.lane,H.lanes|=s,bt|=s,l=l.next;while(l!==e)}else l===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function $l(e){var t=Te(),n=t.queue;if(n===null)throw Error(y(311));n.lastRenderedReducer=e;var r=n.dispatch,l=n.pending,s=t.memoizedState;if(l!==null){n.pending=null;var o=l=l.next;do s=e(s,o.action),o=o.next;while(o!==l);Ie(s,t.memoizedState)||(pe=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function uu(){}function cu(e,t){var n=H,r=Te(),l=t(),s=!Ie(r.memoizedState,l);if(s&&(r.memoizedState=l,pe=!0),r=r.queue,ws(pu.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||J!==null&&J.memoizedState.tag&1){if(n.flags|=2048,Gn(9,fu.bind(null,n,r,l,t),void 0,null),q===null)throw Error(y(349));zt&30||du(n,t,l)}return l}function du(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fu(e,t,n,r){t.value=n,t.getSnapshot=r,hu(t)&&mu(e)}function pu(e,t,n){return n(function(){hu(t)&&mu(e)})}function hu(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ie(e,n)}catch{return!0}}function mu(e){var t=Ge(e,1);t!==null&&De(t,e,1,-1)}function jo(e){var t=Me();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yn,lastRenderedState:e},t.queue=e,e=e.dispatch=ef.bind(null,H,e),[t.memoizedState,e]}function Gn(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=H.updateQueue,t===null?(t={lastEffect:null,stores:null},H.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gu(){return Te().memoizedState}function _r(e,t,n,r){var l=Me();H.flags|=e,l.memoizedState=Gn(1|t,n,void 0,r===void 0?null:r)}function fl(e,t,n,r){var l=Te();r=r===void 0?null:r;var s=void 0;if(G!==null){var o=G.memoizedState;if(s=o.destroy,r!==null&&vs(r,o.deps)){l.memoizedState=Gn(t,n,s,r);return}}H.flags|=e,l.memoizedState=Gn(1|t,n,s,r)}function No(e,t){return _r(8390656,8,e,t)}function ws(e,t){return fl(2048,8,e,t)}function vu(e,t){return fl(4,2,e,t)}function xu(e,t){return fl(4,4,e,t)}function yu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wu(e,t,n){return n=n!=null?n.concat([e]):null,fl(4,4,yu.bind(null,t,e),n)}function js(){}function ju(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Nu(e,t){var n=Te();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&vs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ku(e,t,n){return zt&21?(Ie(n,t)||(n=La(),H.lanes|=n,bt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,pe=!0),e.memoizedState=n)}function Jd(e,t){var n=I;I=n!==0&&4>n?n:4,e(!0);var r=Ul.transition;Ul.transition={};try{e(!1),t()}finally{I=n,Ul.transition=r}}function Su(){return Te().memoizedState}function qd(e,t,n){var r=ft(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Cu(e))Eu(t,n);else if(n=su(e,t,n,r),n!==null){var l=ae();De(n,e,r,l),Pu(n,t,r)}}function ef(e,t,n){var r=ft(e),l={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cu(e))Eu(t,l);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,c=s(o,n);if(l.hasEagerState=!0,l.eagerState=c,Ie(c,o)){var d=t.interleaved;d===null?(l.next=l,fs(t)):(l.next=d.next,d.next=l),t.interleaved=l;return}}catch{}finally{}n=su(e,t,l,r),n!==null&&(l=ae(),De(n,e,r,l),Pu(n,t,r))}}function Cu(e){var t=e.alternate;return e===H||t!==null&&t===H}function Eu(e,t){zn=Jr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Pu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Ji(e,n)}}var qr={readContext:Le,useCallback:re,useContext:re,useEffect:re,useImperativeHandle:re,useInsertionEffect:re,useLayoutEffect:re,useMemo:re,useReducer:re,useRef:re,useState:re,useDebugValue:re,useDeferredValue:re,useTransition:re,useMutableSource:re,useSyncExternalStore:re,useId:re,unstable_isNewReconciler:!1},tf={readContext:Le,useCallback:function(e,t){return Me().memoizedState=[e,t===void 0?null:t],e},useContext:Le,useEffect:No,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_r(4194308,4,yu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _r(4194308,4,e,t)},useInsertionEffect:function(e,t){return _r(4,2,e,t)},useMemo:function(e,t){var n=Me();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Me();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qd.bind(null,H,e),[r.memoizedState,e]},useRef:function(e){var t=Me();return e={current:e},t.memoizedState=e},useState:jo,useDebugValue:js,useDeferredValue:function(e){return Me().memoizedState=e},useTransition:function(){var e=jo(!1),t=e[0];return e=Jd.bind(null,e[1]),Me().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=H,l=Me();if($){if(n===void 0)throw Error(y(407));n=n()}else{if(n=t(),q===null)throw Error(y(349));zt&30||du(r,t,n)}l.memoizedState=n;var s={value:n,getSnapshot:t};return l.queue=s,No(pu.bind(null,r,s,e),[e]),r.flags|=2048,Gn(9,fu.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=Me(),t=q.identifierPrefix;if($){var n=Qe,r=He;n=(r&~(1<<32-Oe(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Xn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Zd++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},nf={readContext:Le,useCallback:ju,useContext:Le,useEffect:ws,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:xu,useMemo:Nu,useReducer:Vl,useRef:gu,useState:function(){return Vl(Yn)},useDebugValue:js,useDeferredValue:function(e){var t=Te();return ku(t,G.memoizedState,e)},useTransition:function(){var e=Vl(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Su,unstable_isNewReconciler:!1},rf={readContext:Le,useCallback:ju,useContext:Le,useEffect:ws,useImperativeHandle:wu,useInsertionEffect:vu,useLayoutEffect:xu,useMemo:Nu,useReducer:$l,useRef:gu,useState:function(){return $l(Yn)},useDebugValue:js,useDeferredValue:function(e){var t=Te();return G===null?t.memoizedState=e:ku(t,G.memoizedState,e)},useTransition:function(){var e=$l(Yn)[0],t=Te().memoizedState;return[e,t]},useMutableSource:uu,useSyncExternalStore:cu,useId:Su,unstable_isNewReconciler:!1};function be(e,t){if(e&&e.defaultProps){t=Q({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Si(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Q({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pl={isMounted:function(e){return(e=e._reactInternals)?Ot(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),s=Ke(r,l);s.payload=t,n!=null&&(s.callback=n),t=ct(e,s,l),t!==null&&(De(t,e,l,r),Lr(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ae(),l=ft(e),s=Ke(r,l);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=ct(e,s,l),t!==null&&(De(t,e,l,r),Lr(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ae(),r=ft(e),l=Ke(n,r);l.tag=2,t!=null&&(l.callback=t),t=ct(e,l,r),t!==null&&(De(t,e,r,n),Lr(t,e,r))}};function ko(e,t,n,r,l,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!$n(n,r)||!$n(l,s):!0}function Lu(e,t,n){var r=!1,l=mt,s=t.contextType;return typeof s=="object"&&s!==null?s=Le(s):(l=me(t)?Tt:se.current,r=t.contextTypes,s=(r=r!=null)?ln(e,l):mt),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=s),t}function So(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pl.enqueueReplaceState(t,t.state,null)}function Ci(e,t,n,r){var l=e.stateNode;l.props=n,l.state=e.memoizedState,l.refs={},ps(e);var s=t.contextType;typeof s=="object"&&s!==null?l.context=Le(s):(s=me(t)?Tt:se.current,l.context=ln(e,s)),l.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Si(e,t,s,n),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&pl.enqueueReplaceState(l,l.state,null),Gr(e,n,l,r),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function un(e,t){try{var n="",r=t;do n+=zc(r),r=r.return;while(r);var l=n}catch(s){l=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:l,digest:null}}function Wl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ei(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var lf=typeof WeakMap=="function"?WeakMap:Map;function Tu(e,t,n){n=Ke(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){tl||(tl=!0,Di=r),Ei(e,t)},n}function _u(e,t,n){n=Ke(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var l=t.value;n.payload=function(){return r(l)},n.callback=function(){Ei(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ei(e,t),typeof r!="function"&&(dt===null?dt=new Set([this]):dt.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Co(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new lf;var l=new Set;r.set(t,l)}else l=r.get(t),l===void 0&&(l=new Set,r.set(t,l));l.has(n)||(l.add(n),e=yf.bind(null,e,t,n),t.then(e,e))}function Eo(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Po(e,t,n,r,l){return e.mode&1?(e.flags|=65536,e.lanes=l,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ke(-1,1),t.tag=2,ct(n,t,1))),n.lanes|=1),e)}var sf=Je.ReactCurrentOwner,pe=!1;function oe(e,t,n,r){t.child=e===null?iu(t,null,n,r):on(t,e.child,n,r)}function Lo(e,t,n,r,l){n=n.render;var s=t.ref;return tn(t,l),r=xs(e,t,n,r,s,l),n=ys(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&n&&ss(t),t.flags|=1,oe(e,t,r,l),t.child)}function To(e,t,n,r,l){if(e===null){var s=n.type;return typeof s=="function"&&!Ts(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,zu(e,t,s,r,l)):(e=Rr(n.type,null,r,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&l)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$n,n(o,r)&&e.ref===t.ref)return Ze(e,t,l)}return t.flags|=1,e=pt(s,r),e.ref=t.ref,e.return=t,t.child=e}function zu(e,t,n,r,l){if(e!==null){var s=e.memoizedProps;if($n(s,r)&&e.ref===t.ref)if(pe=!1,t.pendingProps=r=s,(e.lanes&l)!==0)e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Ze(e,t,l)}return Pi(e,t,n,r,l)}function bu(e,t,n){var r=t.pendingProps,l=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},M(Gt,xe),xe|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,M(Gt,xe),xe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,M(Gt,xe),xe|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,M(Gt,xe),xe|=r;return oe(e,t,l,n),t.child}function Fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Pi(e,t,n,r,l){var s=me(n)?Tt:se.current;return s=ln(t,s),tn(t,l),n=xs(e,t,n,r,s,l),r=ys(),e!==null&&!pe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,Ze(e,t,l)):($&&r&&ss(t),t.flags|=1,oe(e,t,n,l),t.child)}function _o(e,t,n,r,l){if(me(n)){var s=!0;Hr(t)}else s=!1;if(tn(t,l),t.stateNode===null)zr(e,t),Lu(t,n,r),Ci(t,n,r,l),r=!0;else if(e===null){var o=t.stateNode,c=t.memoizedProps;o.props=c;var d=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Le(p):(p=me(n)?Tt:se.current,p=ln(t,p));var x=n.getDerivedStateFromProps,v=typeof x=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||d!==p)&&So(t,o,r,p),tt=!1;var g=t.memoizedState;o.state=g,Gr(t,r,o,l),d=t.memoizedState,c!==r||g!==d||he.current||tt?(typeof x=="function"&&(Si(t,n,x,r),d=t.memoizedState),(c=tt||ko(t,n,c,r,g,d,p))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),o.props=r,o.state=d,o.context=p,r=c):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,ou(e,t),c=t.memoizedProps,p=t.type===t.elementType?c:be(t.type,c),o.props=p,v=t.pendingProps,g=o.context,d=n.contextType,typeof d=="object"&&d!==null?d=Le(d):(d=me(n)?Tt:se.current,d=ln(t,d));var j=n.getDerivedStateFromProps;(x=typeof j=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==v||g!==d)&&So(t,o,r,d),tt=!1,g=t.memoizedState,o.state=g,Gr(t,r,o,l);var w=t.memoizedState;c!==v||g!==w||he.current||tt?(typeof j=="function"&&(Si(t,n,j,r),w=t.memoizedState),(p=tt||ko(t,n,p,r,g,w,d)||!1)?(x||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,d),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,d)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),o.props=r,o.state=w,o.context=d,r=p):(typeof o.componentDidUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Li(e,t,n,r,s,l)}function Li(e,t,n,r,l,s){Fu(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return l&&mo(t,n,!1),Ze(e,t,s);r=t.stateNode,sf.current=t;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=on(t,e.child,null,s),t.child=on(t,null,c,s)):oe(e,t,c,s),t.memoizedState=r.state,l&&mo(t,n,!0),t.child}function Ru(e){var t=e.stateNode;t.pendingContext?ho(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ho(e,t.context,!1),hs(e,t.containerInfo)}function zo(e,t,n,r,l){return sn(),as(l),t.flags|=256,oe(e,t,n,r),t.child}var Ti={dehydrated:null,treeContext:null,retryLane:0};function _i(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ou(e,t,n){var r=t.pendingProps,l=B.current,s=!1,o=(t.flags&128)!==0,c;if((c=o)||(c=e!==null&&e.memoizedState===null?!1:(l&2)!==0),c?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),M(B,l&1),e===null)return Ni(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=gl(o,r,0,null),e=Lt(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=_i(n),t.memoizedState=Ti,e):Ns(t,o));if(l=e.memoizedState,l!==null&&(c=l.dehydrated,c!==null))return of(e,t,o,r,c,l,n);if(s){s=r.fallback,o=t.mode,l=e.child,c=l.sibling;var d={mode:"hidden",children:r.children};return!(o&1)&&t.child!==l?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=pt(l,d),r.subtreeFlags=l.subtreeFlags&14680064),c!==null?s=pt(c,s):(s=Lt(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?_i(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=Ti,r}return s=e.child,e=s.sibling,r=pt(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ns(e,t){return t=gl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yr(e,t,n,r){return r!==null&&as(r),on(t,e.child,null,n),e=Ns(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function of(e,t,n,r,l,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Wl(Error(y(422))),yr(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,l=t.mode,r=gl({mode:"visible",children:r.children},l,0,null),s=Lt(s,l,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&on(t,e.child,null,o),t.child.memoizedState=_i(o),t.memoizedState=Ti,s);if(!(t.mode&1))return yr(e,t,o,null);if(l.data==="$!"){if(r=l.nextSibling&&l.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(y(419)),r=Wl(s,r,void 0),yr(e,t,o,r)}if(c=(o&e.childLanes)!==0,pe||c){if(r=q,r!==null){switch(o&-o){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=l&(r.suspendedLanes|o)?0:l,l!==0&&l!==s.retryLane&&(s.retryLane=l,Ge(e,l),De(r,e,l,-1))}return Ls(),r=Wl(Error(y(421))),yr(e,t,o,r)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=wf.bind(null,e),l._reactRetry=t,null):(e=s.treeContext,ye=ut(l.nextSibling),we=t,$=!0,Re=null,e!==null&&(Se[Ce++]=He,Se[Ce++]=Qe,Se[Ce++]=_t,He=e.id,Qe=e.overflow,_t=t),t=Ns(t,r.children),t.flags|=4096,t)}function bo(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ki(e.return,t,n)}function Bl(e,t,n,r,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=l)}function Du(e,t,n){var r=t.pendingProps,l=r.revealOrder,s=r.tail;if(oe(e,t,r.children,n),r=B.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bo(e,n,t);else if(e.tag===19)bo(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(M(B,r),!(t.mode&1))t.memoizedState=null;else switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&Zr(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),Bl(t,!1,l,n,s);break;case"backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&Zr(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}Bl(t,!0,n,null,s);break;case"together":Bl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function zr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),bt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(y(153));if(t.child!==null){for(e=t.child,n=pt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=pt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function af(e,t,n){switch(t.tag){case 3:Ru(t),sn();break;case 5:au(t);break;case 1:me(t.type)&&Hr(t);break;case 4:hs(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,l=t.memoizedProps.value;M(Xr,r._currentValue),r._currentValue=l;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(M(B,B.current&1),t.flags|=128,null):n&t.child.childLanes?Ou(e,t,n):(M(B,B.current&1),e=Ze(e,t,n),e!==null?e.sibling:null);M(B,B.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Du(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),M(B,B.current),r)break;return null;case 22:case 23:return t.lanes=0,bu(e,t,n)}return Ze(e,t,n)}var Iu,zi,Au,Mu;Iu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};zi=function(){};Au=function(e,t,n,r){var l=e.memoizedProps;if(l!==r){e=t.stateNode,Et($e.current);var s=null;switch(n){case"input":l=ql(e,l),r=ql(e,r),s=[];break;case"select":l=Q({},l,{value:void 0}),r=Q({},r,{value:void 0}),s=[];break;case"textarea":l=ni(e,l),r=ni(e,r),s=[];break;default:typeof l.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Wr)}li(n,r);var o;n=null;for(p in l)if(!r.hasOwnProperty(p)&&l.hasOwnProperty(p)&&l[p]!=null)if(p==="style"){var c=l[p];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(On.hasOwnProperty(p)?s||(s=[]):(s=s||[]).push(p,null));for(p in r){var d=r[p];if(c=l!=null?l[p]:void 0,r.hasOwnProperty(p)&&d!==c&&(d!=null||c!=null))if(p==="style")if(c){for(o in c)!c.hasOwnProperty(o)||d&&d.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in d)d.hasOwnProperty(o)&&c[o]!==d[o]&&(n||(n={}),n[o]=d[o])}else n||(s||(s=[]),s.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,c=c?c.__html:void 0,d!=null&&c!==d&&(s=s||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(s=s||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(On.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&U("scroll",e),s||c===d||(s=[])):(s=s||[]).push(p,d))}n&&(s=s||[]).push("style",n);var p=s;(t.updateQueue=p)&&(t.flags|=4)}};Mu=function(e,t,n,r){n!==r&&(t.flags|=4)};function wn(e,t){if(!$)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags&14680064,r|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function uf(e,t,n){var r=t.pendingProps;switch(os(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return le(t),null;case 1:return me(t.type)&&Br(),le(t),null;case 3:return r=t.stateNode,an(),V(he),V(se),gs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vr(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Mi(Re),Re=null))),zi(e,t),le(t),null;case 5:ms(t);var l=Et(Kn.current);if(n=t.type,e!==null&&t.stateNode!=null)Au(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(y(166));return le(t),null}if(e=Et($e.current),vr(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[Ue]=t,r[Hn]=s,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(l=0;l<Cn.length;l++)U(Cn[l],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":Us(r,s),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},U("invalid",r);break;case"textarea":$s(r,s),U("invalid",r)}li(n,s),l=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&gr(r.textContent,c,e),l=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&gr(r.textContent,c,e),l=["children",""+c]):On.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&U("scroll",r)}switch(n){case"input":ar(r),Vs(r,s,!0);break;case"textarea":ar(r),Ws(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Wr)}r=l,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=pa(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[Ue]=t,e[Hn]=r,Iu(e,t,!1,!1),t.stateNode=e;e:{switch(o=ii(n,r),n){case"dialog":U("cancel",e),U("close",e),l=r;break;case"iframe":case"object":case"embed":U("load",e),l=r;break;case"video":case"audio":for(l=0;l<Cn.length;l++)U(Cn[l],e);l=r;break;case"source":U("error",e),l=r;break;case"img":case"image":case"link":U("error",e),U("load",e),l=r;break;case"details":U("toggle",e),l=r;break;case"input":Us(e,r),l=ql(e,r),U("invalid",e);break;case"option":l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=Q({},r,{value:void 0}),U("invalid",e);break;case"textarea":$s(e,r),l=ni(e,r),U("invalid",e);break;default:l=r}li(n,l),c=l;for(s in c)if(c.hasOwnProperty(s)){var d=c[s];s==="style"?ga(e,d):s==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&ha(e,d)):s==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Dn(e,d):typeof d=="number"&&Dn(e,""+d):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(On.hasOwnProperty(s)?d!=null&&s==="onScroll"&&U("scroll",e):d!=null&&Qi(e,s,d,o))}switch(n){case"input":ar(e),Vs(e,r,!1);break;case"textarea":ar(e),Ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ht(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Zt(e,!!r.multiple,s,!1):r.defaultValue!=null&&Zt(e,!!r.multiple,r.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=Wr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return le(t),null;case 6:if(e&&t.stateNode!=null)Mu(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(y(166));if(n=Et(Kn.current),Et($e.current),vr(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ue]=t,(s=r.nodeValue!==n)&&(e=we,e!==null))switch(e.tag){case 3:gr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gr(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ue]=t,t.stateNode=r}return le(t),null;case 13:if(V(B),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if($&&ye!==null&&t.mode&1&&!(t.flags&128))ru(),sn(),t.flags|=98560,s=!1;else if(s=vr(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(y(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(y(317));s[Ue]=t}else sn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;le(t),s=!1}else Re!==null&&(Mi(Re),Re=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||B.current&1?Z===0&&(Z=3):Ls())),t.updateQueue!==null&&(t.flags|=4),le(t),null);case 4:return an(),zi(e,t),e===null&&Wn(t.stateNode.containerInfo),le(t),null;case 10:return ds(t.type._context),le(t),null;case 17:return me(t.type)&&Br(),le(t),null;case 19:if(V(B),s=t.memoizedState,s===null)return le(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)wn(s,!1);else{if(Z!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Zr(e),o!==null){for(t.flags|=128,wn(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return M(B,B.current&1|2),t.child}e=e.sibling}s.tail!==null&&X()>cn&&(t.flags|=128,r=!0,wn(s,!1),t.lanes=4194304)}else{if(!r)if(e=Zr(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!$)return le(t),null}else 2*X()-s.renderingStartTime>cn&&n!==1073741824&&(t.flags|=128,r=!0,wn(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=X(),t.sibling=null,n=B.current,M(B,r?n&1|2:n&1),t):(le(t),null);case 22:case 23:return Ps(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?xe&1073741824&&(le(t),t.subtreeFlags&6&&(t.flags|=8192)):le(t),null;case 24:return null;case 25:return null}throw Error(y(156,t.tag))}function cf(e,t){switch(os(t),t.tag){case 1:return me(t.type)&&Br(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),V(he),V(se),gs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ms(t),null;case 13:if(V(B),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(y(340));sn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return V(B),null;case 4:return an(),null;case 10:return ds(t.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var wr=!1,ie=!1,df=typeof WeakSet=="function"?WeakSet:Set,C=null;function Yt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){K(e,t,r)}else n.current=null}function bi(e,t,n){try{n()}catch(r){K(e,t,r)}}var Fo=!1;function ff(e,t){if(mi=Ur,e=Ba(),is(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var l=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,c=-1,d=-1,p=0,x=0,v=e,g=null;t:for(;;){for(var j;v!==n||l!==0&&v.nodeType!==3||(c=o+l),v!==s||r!==0&&v.nodeType!==3||(d=o+r),v.nodeType===3&&(o+=v.nodeValue.length),(j=v.firstChild)!==null;)g=v,v=j;for(;;){if(v===e)break t;if(g===n&&++p===l&&(c=o),g===s&&++x===r&&(d=o),(j=v.nextSibling)!==null)break;v=g,g=v.parentNode}v=j}n=c===-1||d===-1?null:{start:c,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(gi={focusedElem:e,selectionRange:n},Ur=!1,C=t;C!==null;)if(t=C,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,C=e;else for(;C!==null;){t=C;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var N=w.memoizedProps,D=w.memoizedState,a=t.stateNode,f=a.getSnapshotBeforeUpdate(t.elementType===t.type?N:be(t.type,N),D);a.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(y(163))}}catch(m){K(t,t.return,m)}if(e=t.sibling,e!==null){e.return=t.return,C=e;break}C=t.return}return w=Fo,Fo=!1,w}function bn(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&e)===e){var s=l.destroy;l.destroy=void 0,s!==void 0&&bi(t,n,s)}l=l.next}while(l!==r)}}function hl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fi(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Uu(e){var t=e.alternate;t!==null&&(e.alternate=null,Uu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ue],delete t[Hn],delete t[yi],delete t[Kd],delete t[Xd])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Vu(e){return e.tag===5||e.tag===3||e.tag===4}function Ro(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ri(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wr));else if(r!==4&&(e=e.child,e!==null))for(Ri(e,t,n),e=e.sibling;e!==null;)Ri(e,t,n),e=e.sibling}function Oi(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oi(e,t,n),e=e.sibling;e!==null;)Oi(e,t,n),e=e.sibling}var ee=null,Fe=!1;function qe(e,t,n){for(n=n.child;n!==null;)$u(e,t,n),n=n.sibling}function $u(e,t,n){if(Ve&&typeof Ve.onCommitFiberUnmount=="function")try{Ve.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:ie||Yt(n,t);case 6:var r=ee,l=Fe;ee=null,qe(e,t,n),ee=r,Fe=l,ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?Il(e.parentNode,n):e.nodeType===1&&Il(e,n),Un(e)):Il(ee,n.stateNode));break;case 4:r=ee,l=Fe,ee=n.stateNode.containerInfo,Fe=!0,qe(e,t,n),ee=r,Fe=l;break;case 0:case 11:case 14:case 15:if(!ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){l=r=r.next;do{var s=l,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bi(n,t,o),l=l.next}while(l!==r)}qe(e,t,n);break;case 1:if(!ie&&(Yt(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){K(n,t,c)}qe(e,t,n);break;case 21:qe(e,t,n);break;case 22:n.mode&1?(ie=(r=ie)||n.memoizedState!==null,qe(e,t,n),ie=r):qe(e,t,n);break;default:qe(e,t,n)}}function Oo(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new df),t.forEach(function(r){var l=jf.bind(null,e,r);n.has(r)||(n.add(r),r.then(l,l))})}}function ze(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var l=n[r];try{var s=e,o=t,c=o;e:for(;c!==null;){switch(c.tag){case 5:ee=c.stateNode,Fe=!1;break e;case 3:ee=c.stateNode.containerInfo,Fe=!0;break e;case 4:ee=c.stateNode.containerInfo,Fe=!0;break e}c=c.return}if(ee===null)throw Error(y(160));$u(s,o,l),ee=null,Fe=!1;var d=l.alternate;d!==null&&(d.return=null),l.return=null}catch(p){K(l,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Wu(t,e),t=t.sibling}function Wu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ze(t,e),Ae(e),r&4){try{bn(3,e,e.return),hl(3,e)}catch(N){K(e,e.return,N)}try{bn(5,e,e.return)}catch(N){K(e,e.return,N)}}break;case 1:ze(t,e),Ae(e),r&512&&n!==null&&Yt(n,n.return);break;case 5:if(ze(t,e),Ae(e),r&512&&n!==null&&Yt(n,n.return),e.flags&32){var l=e.stateNode;try{Dn(l,"")}catch(N){K(e,e.return,N)}}if(r&4&&(l=e.stateNode,l!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,c=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&da(l,s),ii(c,o);var p=ii(c,s);for(o=0;o<d.length;o+=2){var x=d[o],v=d[o+1];x==="style"?ga(l,v):x==="dangerouslySetInnerHTML"?ha(l,v):x==="children"?Dn(l,v):Qi(l,x,v,p)}switch(c){case"input":ei(l,s);break;case"textarea":fa(l,s);break;case"select":var g=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!s.multiple;var j=s.value;j!=null?Zt(l,!!s.multiple,j,!1):g!==!!s.multiple&&(s.defaultValue!=null?Zt(l,!!s.multiple,s.defaultValue,!0):Zt(l,!!s.multiple,s.multiple?[]:"",!1))}l[Hn]=s}catch(N){K(e,e.return,N)}}break;case 6:if(ze(t,e),Ae(e),r&4){if(e.stateNode===null)throw Error(y(162));l=e.stateNode,s=e.memoizedProps;try{l.nodeValue=s}catch(N){K(e,e.return,N)}}break;case 3:if(ze(t,e),Ae(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Un(t.containerInfo)}catch(N){K(e,e.return,N)}break;case 4:ze(t,e),Ae(e);break;case 13:ze(t,e),Ae(e),l=e.child,l.flags&8192&&(s=l.memoizedState!==null,l.stateNode.isHidden=s,!s||l.alternate!==null&&l.alternate.memoizedState!==null||(Cs=X())),r&4&&Oo(e);break;case 22:if(x=n!==null&&n.memoizedState!==null,e.mode&1?(ie=(p=ie)||x,ze(t,e),ie=p):ze(t,e),Ae(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!x&&e.mode&1)for(C=e,x=e.child;x!==null;){for(v=C=x;C!==null;){switch(g=C,j=g.child,g.tag){case 0:case 11:case 14:case 15:bn(4,g,g.return);break;case 1:Yt(g,g.return);var w=g.stateNode;if(typeof w.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(N){K(r,n,N)}}break;case 5:Yt(g,g.return);break;case 22:if(g.memoizedState!==null){Io(v);continue}}j!==null?(j.return=g,C=j):Io(v)}x=x.sibling}e:for(x=null,v=e;;){if(v.tag===5){if(x===null){x=v;try{l=v.stateNode,p?(s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=v.stateNode,d=v.memoizedProps.style,o=d!=null&&d.hasOwnProperty("display")?d.display:null,c.style.display=ma("display",o))}catch(N){K(e,e.return,N)}}}else if(v.tag===6){if(x===null)try{v.stateNode.nodeValue=p?"":v.memoizedProps}catch(N){K(e,e.return,N)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;x===v&&(x=null),v=v.return}x===v&&(x=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:ze(t,e),Ae(e),r&4&&Oo(e);break;case 21:break;default:ze(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Vu(n)){var r=n;break e}n=n.return}throw Error(y(160))}switch(r.tag){case 5:var l=r.stateNode;r.flags&32&&(Dn(l,""),r.flags&=-33);var s=Ro(e);Oi(e,s,l);break;case 3:case 4:var o=r.stateNode.containerInfo,c=Ro(e);Ri(e,c,o);break;default:throw Error(y(161))}}catch(d){K(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function pf(e,t,n){C=e,Bu(e)}function Bu(e,t,n){for(var r=(e.mode&1)!==0;C!==null;){var l=C,s=l.child;if(l.tag===22&&r){var o=l.memoizedState!==null||wr;if(!o){var c=l.alternate,d=c!==null&&c.memoizedState!==null||ie;c=wr;var p=ie;if(wr=o,(ie=d)&&!p)for(C=l;C!==null;)o=C,d=o.child,o.tag===22&&o.memoizedState!==null?Ao(l):d!==null?(d.return=o,C=d):Ao(l);for(;s!==null;)C=s,Bu(s),s=s.sibling;C=l,wr=c,ie=p}Do(e)}else l.subtreeFlags&8772&&s!==null?(s.return=l,C=s):Do(e)}}function Do(e){for(;C!==null;){var t=C;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:ie||hl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!ie)if(n===null)r.componentDidMount();else{var l=t.elementType===t.type?n.memoizedProps:be(t.type,n.memoizedProps);r.componentDidUpdate(l,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&wo(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}wo(t,o,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var x=p.memoizedState;if(x!==null){var v=x.dehydrated;v!==null&&Un(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(y(163))}ie||t.flags&512&&Fi(t)}catch(g){K(t,t.return,g)}}if(t===e){C=null;break}if(n=t.sibling,n!==null){n.return=t.return,C=n;break}C=t.return}}function Io(e){for(;C!==null;){var t=C;if(t===e){C=null;break}var n=t.sibling;if(n!==null){n.return=t.return,C=n;break}C=t.return}}function Ao(e){for(;C!==null;){var t=C;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hl(4,t)}catch(d){K(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var l=t.return;try{r.componentDidMount()}catch(d){K(t,l,d)}}var s=t.return;try{Fi(t)}catch(d){K(t,s,d)}break;case 5:var o=t.return;try{Fi(t)}catch(d){K(t,o,d)}}}catch(d){K(t,t.return,d)}if(t===e){C=null;break}var c=t.sibling;if(c!==null){c.return=t.return,C=c;break}C=t.return}}var hf=Math.ceil,el=Je.ReactCurrentDispatcher,ks=Je.ReactCurrentOwner,Pe=Je.ReactCurrentBatchConfig,O=0,q=null,Y=null,te=0,xe=0,Gt=vt(0),Z=0,Zn=null,bt=0,ml=0,Ss=0,Fn=null,fe=null,Cs=0,cn=1/0,We=null,tl=!1,Di=null,dt=null,jr=!1,it=null,nl=0,Rn=0,Ii=null,br=-1,Fr=0;function ae(){return O&6?X():br!==-1?br:br=X()}function ft(e){return e.mode&1?O&2&&te!==0?te&-te:Gd.transition!==null?(Fr===0&&(Fr=La()),Fr):(e=I,e!==0||(e=window.event,e=e===void 0?16:Oa(e.type)),e):1}function De(e,t,n,r){if(50<Rn)throw Rn=0,Ii=null,Error(y(185));qn(e,n,r),(!(O&2)||e!==q)&&(e===q&&(!(O&2)&&(ml|=n),Z===4&&rt(e,te)),ge(e,r),n===1&&O===0&&!(t.mode&1)&&(cn=X()+500,dl&&xt()))}function ge(e,t){var n=e.callbackNode;Gc(e,t);var r=Mr(e,e===q?te:0);if(r===0)n!==null&&Qs(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Qs(n),t===1)e.tag===0?Yd(Mo.bind(null,e)):eu(Mo.bind(null,e)),Hd(function(){!(O&6)&&xt()}),n=null;else{switch(Ta(r)){case 1:n=Zi;break;case 4:n=Ea;break;case 16:n=Ar;break;case 536870912:n=Pa;break;default:n=Ar}n=Ju(n,Hu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hu(e,t){if(br=-1,Fr=0,O&6)throw Error(y(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var r=Mr(e,e===q?te:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=rl(e,r);else{t=r;var l=O;O|=2;var s=Ku();(q!==e||te!==t)&&(We=null,cn=X()+500,Pt(e,t));do try{vf();break}catch(c){Qu(e,c)}while(!0);cs(),el.current=s,O=l,Y!==null?t=0:(q=null,te=0,t=Z)}if(t!==0){if(t===2&&(l=ci(e),l!==0&&(r=l,t=Ai(e,l))),t===1)throw n=Zn,Pt(e,0),rt(e,r),ge(e,X()),n;if(t===6)rt(e,r);else{if(l=e.current.alternate,!(r&30)&&!mf(l)&&(t=rl(e,r),t===2&&(s=ci(e),s!==0&&(r=s,t=Ai(e,s))),t===1))throw n=Zn,Pt(e,0),rt(e,r),ge(e,X()),n;switch(e.finishedWork=l,e.finishedLanes=r,t){case 0:case 1:throw Error(y(345));case 2:kt(e,fe,We);break;case 3:if(rt(e,r),(r&130023424)===r&&(t=Cs+500-X(),10<t)){if(Mr(e,0)!==0)break;if(l=e.suspendedLanes,(l&r)!==r){ae(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=xi(kt.bind(null,e,fe,We),t);break}kt(e,fe,We);break;case 4:if(rt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,l=-1;0<r;){var o=31-Oe(r);s=1<<o,o=t[o],o>l&&(l=o),r&=~s}if(r=l,r=X()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hf(r/1960))-r,10<r){e.timeoutHandle=xi(kt.bind(null,e,fe,We),r);break}kt(e,fe,We);break;case 5:kt(e,fe,We);break;default:throw Error(y(329))}}}return ge(e,X()),e.callbackNode===n?Hu.bind(null,e):null}function Ai(e,t){var n=Fn;return e.current.memoizedState.isDehydrated&&(Pt(e,t).flags|=256),e=rl(e,t),e!==2&&(t=fe,fe=n,t!==null&&Mi(t)),e}function Mi(e){fe===null?fe=e:fe.push.apply(fe,e)}function mf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var l=n[r],s=l.getSnapshot;l=l.value;try{if(!Ie(s(),l))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function rt(e,t){for(t&=~Ss,t&=~ml,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Oe(t),r=1<<n;e[n]=-1,t&=~r}}function Mo(e){if(O&6)throw Error(y(327));nn();var t=Mr(e,0);if(!(t&1))return ge(e,X()),null;var n=rl(e,t);if(e.tag!==0&&n===2){var r=ci(e);r!==0&&(t=r,n=Ai(e,r))}if(n===1)throw n=Zn,Pt(e,0),rt(e,t),ge(e,X()),n;if(n===6)throw Error(y(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,kt(e,fe,We),ge(e,X()),null}function Es(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(cn=X()+500,dl&&xt())}}function Ft(e){it!==null&&it.tag===0&&!(O&6)&&nn();var t=O;O|=1;var n=Pe.transition,r=I;try{if(Pe.transition=null,I=1,e)return e()}finally{I=r,Pe.transition=n,O=t,!(O&6)&&xt()}}function Ps(){xe=Gt.current,V(Gt)}function Pt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Bd(n)),Y!==null)for(n=Y.return;n!==null;){var r=n;switch(os(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Br();break;case 3:an(),V(he),V(se),gs();break;case 5:ms(r);break;case 4:an();break;case 13:V(B);break;case 19:V(B);break;case 10:ds(r.type._context);break;case 22:case 23:Ps()}n=n.return}if(q=e,Y=e=pt(e.current,null),te=xe=t,Z=0,Zn=null,Ss=ml=bt=0,fe=Fn=null,Ct!==null){for(t=0;t<Ct.length;t++)if(n=Ct[t],r=n.interleaved,r!==null){n.interleaved=null;var l=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=l,r.next=o}n.pending=r}Ct=null}return e}function Qu(e,t){do{var n=Y;try{if(cs(),Tr.current=qr,Jr){for(var r=H.memoizedState;r!==null;){var l=r.queue;l!==null&&(l.pending=null),r=r.next}Jr=!1}if(zt=0,J=G=H=null,zn=!1,Xn=0,ks.current=null,n===null||n.return===null){Z=1,Zn=t,Y=null;break}e:{var s=e,o=n.return,c=n,d=t;if(t=te,c.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,x=c,v=x.tag;if(!(x.mode&1)&&(v===0||v===11||v===15)){var g=x.alternate;g?(x.updateQueue=g.updateQueue,x.memoizedState=g.memoizedState,x.lanes=g.lanes):(x.updateQueue=null,x.memoizedState=null)}var j=Eo(o);if(j!==null){j.flags&=-257,Po(j,o,c,s,t),j.mode&1&&Co(s,p,t),t=j,d=p;var w=t.updateQueue;if(w===null){var N=new Set;N.add(d),t.updateQueue=N}else w.add(d);break e}else{if(!(t&1)){Co(s,p,t),Ls();break e}d=Error(y(426))}}else if($&&c.mode&1){var D=Eo(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),Po(D,o,c,s,t),as(un(d,c));break e}}s=d=un(d,c),Z!==4&&(Z=2),Fn===null?Fn=[s]:Fn.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var a=Tu(s,d,t);yo(s,a);break e;case 1:c=d;var f=s.type,h=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(dt===null||!dt.has(h)))){s.flags|=65536,t&=-t,s.lanes|=t;var m=_u(s,c,t);yo(s,m);break e}}s=s.return}while(s!==null)}Yu(n)}catch(k){t=k,Y===n&&n!==null&&(Y=n=n.return);continue}break}while(!0)}function Ku(){var e=el.current;return el.current=qr,e===null?qr:e}function Ls(){(Z===0||Z===3||Z===2)&&(Z=4),q===null||!(bt&268435455)&&!(ml&268435455)||rt(q,te)}function rl(e,t){var n=O;O|=2;var r=Ku();(q!==e||te!==t)&&(We=null,Pt(e,t));do try{gf();break}catch(l){Qu(e,l)}while(!0);if(cs(),O=n,el.current=r,Y!==null)throw Error(y(261));return q=null,te=0,Z}function gf(){for(;Y!==null;)Xu(Y)}function vf(){for(;Y!==null&&!Vc();)Xu(Y)}function Xu(e){var t=Zu(e.alternate,e,xe);e.memoizedProps=e.pendingProps,t===null?Yu(e):Y=t,ks.current=null}function Yu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=cf(n,t),n!==null){n.flags&=32767,Y=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Z=6,Y=null;return}}else if(n=uf(n,t,xe),n!==null){Y=n;return}if(t=t.sibling,t!==null){Y=t;return}Y=t=e}while(t!==null);Z===0&&(Z=5)}function kt(e,t,n){var r=I,l=Pe.transition;try{Pe.transition=null,I=1,xf(e,t,n,r)}finally{Pe.transition=l,I=r}return null}function xf(e,t,n,r){do nn();while(it!==null);if(O&6)throw Error(y(327));n=e.finishedWork;var l=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(y(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(Zc(e,s),e===q&&(Y=q=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||jr||(jr=!0,Ju(Ar,function(){return nn(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pe.transition,Pe.transition=null;var o=I;I=1;var c=O;O|=4,ks.current=null,ff(e,n),Wu(n,e),Id(gi),Ur=!!mi,gi=mi=null,e.current=n,pf(n),$c(),O=c,I=o,Pe.transition=s}else e.current=n;if(jr&&(jr=!1,it=e,nl=l),s=e.pendingLanes,s===0&&(dt=null),Hc(n.stateNode),ge(e,X()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)l=t[n],r(l.value,{componentStack:l.stack,digest:l.digest});if(tl)throw tl=!1,e=Di,Di=null,e;return nl&1&&e.tag!==0&&nn(),s=e.pendingLanes,s&1?e===Ii?Rn++:(Rn=0,Ii=e):Rn=0,xt(),null}function nn(){if(it!==null){var e=Ta(nl),t=Pe.transition,n=I;try{if(Pe.transition=null,I=16>e?16:e,it===null)var r=!1;else{if(e=it,it=null,nl=0,O&6)throw Error(y(331));var l=O;for(O|=4,C=e.current;C!==null;){var s=C,o=s.child;if(C.flags&16){var c=s.deletions;if(c!==null){for(var d=0;d<c.length;d++){var p=c[d];for(C=p;C!==null;){var x=C;switch(x.tag){case 0:case 11:case 15:bn(8,x,s)}var v=x.child;if(v!==null)v.return=x,C=v;else for(;C!==null;){x=C;var g=x.sibling,j=x.return;if(Uu(x),x===p){C=null;break}if(g!==null){g.return=j,C=g;break}C=j}}}var w=s.alternate;if(w!==null){var N=w.child;if(N!==null){w.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}C=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,C=o;else e:for(;C!==null;){if(s=C,s.flags&2048)switch(s.tag){case 0:case 11:case 15:bn(9,s,s.return)}var a=s.sibling;if(a!==null){a.return=s.return,C=a;break e}C=s.return}}var f=e.current;for(C=f;C!==null;){o=C;var h=o.child;if(o.subtreeFlags&2064&&h!==null)h.return=o,C=h;else e:for(o=f;C!==null;){if(c=C,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:hl(9,c)}}catch(k){K(c,c.return,k)}if(c===o){C=null;break e}var m=c.sibling;if(m!==null){m.return=c.return,C=m;break e}C=c.return}}if(O=l,xt(),Ve&&typeof Ve.onPostCommitFiberRoot=="function")try{Ve.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{I=n,Pe.transition=t}}return!1}function Uo(e,t,n){t=un(n,t),t=Tu(e,t,1),e=ct(e,t,1),t=ae(),e!==null&&(qn(e,1,t),ge(e,t))}function K(e,t,n){if(e.tag===3)Uo(e,e,n);else for(;t!==null;){if(t.tag===3){Uo(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(dt===null||!dt.has(r))){e=un(n,e),e=_u(t,e,1),t=ct(t,e,1),e=ae(),t!==null&&(qn(t,1,e),ge(t,e));break}}t=t.return}}function yf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ae(),e.pingedLanes|=e.suspendedLanes&n,q===e&&(te&n)===n&&(Z===4||Z===3&&(te&130023424)===te&&500>X()-Cs?Pt(e,0):Ss|=n),ge(e,t)}function Gu(e,t){t===0&&(e.mode&1?(t=dr,dr<<=1,!(dr&130023424)&&(dr=4194304)):t=1);var n=ae();e=Ge(e,t),e!==null&&(qn(e,t,n),ge(e,n))}function wf(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Gu(e,n)}function jf(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(y(314))}r!==null&&r.delete(t),Gu(e,n)}var Zu;Zu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||he.current)pe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return pe=!1,af(e,t,n);pe=!!(e.flags&131072)}else pe=!1,$&&t.flags&1048576&&tu(t,Kr,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zr(e,t),e=t.pendingProps;var l=ln(t,se.current);tn(t,n),l=xs(null,t,r,e,l,n);var s=ys();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(r)?(s=!0,Hr(t)):s=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,ps(t),l.updater=pl,t.stateNode=l,l._reactInternals=t,Ci(t,r,e,n),t=Li(null,t,r,!0,s,n)):(t.tag=0,$&&s&&ss(t),oe(null,t,l,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zr(e,t),e=t.pendingProps,l=r._init,r=l(r._payload),t.type=r,l=t.tag=kf(r),e=be(r,e),l){case 0:t=Pi(null,t,r,e,n);break e;case 1:t=_o(null,t,r,e,n);break e;case 11:t=Lo(null,t,r,e,n);break e;case 14:t=To(null,t,r,be(r.type,e),n);break e}throw Error(y(306,r,""))}return t;case 0:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),Pi(e,t,r,l,n);case 1:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),_o(e,t,r,l,n);case 3:e:{if(Ru(t),e===null)throw Error(y(387));r=t.pendingProps,s=t.memoizedState,l=s.element,ou(e,t),Gr(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){l=un(Error(y(423)),t),t=zo(e,t,r,n,l);break e}else if(r!==l){l=un(Error(y(424)),t),t=zo(e,t,r,n,l);break e}else for(ye=ut(t.stateNode.containerInfo.firstChild),we=t,$=!0,Re=null,n=iu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sn(),r===l){t=Ze(e,t,n);break e}oe(e,t,r,n)}t=t.child}return t;case 5:return au(t),e===null&&Ni(t),r=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,o=l.children,vi(r,l)?o=null:s!==null&&vi(r,s)&&(t.flags|=32),Fu(e,t),oe(e,t,o,n),t.child;case 6:return e===null&&Ni(t),null;case 13:return Ou(e,t,n);case 4:return hs(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=on(t,null,r,n):oe(e,t,r,n),t.child;case 11:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),Lo(e,t,r,l,n);case 7:return oe(e,t,t.pendingProps,n),t.child;case 8:return oe(e,t,t.pendingProps.children,n),t.child;case 12:return oe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,l=t.pendingProps,s=t.memoizedProps,o=l.value,M(Xr,r._currentValue),r._currentValue=o,s!==null)if(Ie(s.value,o)){if(s.children===l.children&&!he.current){t=Ze(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var d=c.firstContext;d!==null;){if(d.context===r){if(s.tag===1){d=Ke(-1,n&-n),d.tag=2;var p=s.updateQueue;if(p!==null){p=p.shared;var x=p.pending;x===null?d.next=d:(d.next=x.next,x.next=d),p.pending=d}}s.lanes|=n,d=s.alternate,d!==null&&(d.lanes|=n),ki(s.return,n,t),c.lanes|=n;break}d=d.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(y(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),ki(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}oe(e,t,l.children,n),t=t.child}return t;case 9:return l=t.type,r=t.pendingProps.children,tn(t,n),l=Le(l),r=r(l),t.flags|=1,oe(e,t,r,n),t.child;case 14:return r=t.type,l=be(r,t.pendingProps),l=be(r.type,l),To(e,t,r,l,n);case 15:return zu(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,l=t.pendingProps,l=t.elementType===r?l:be(r,l),zr(e,t),t.tag=1,me(r)?(e=!0,Hr(t)):e=!1,tn(t,n),Lu(t,r,l),Ci(t,r,l,n),Li(null,t,r,!0,e,n);case 19:return Du(e,t,n);case 22:return bu(e,t,n)}throw Error(y(156,t.tag))};function Ju(e,t){return Ca(e,t)}function Nf(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ee(e,t,n,r){return new Nf(e,t,n,r)}function Ts(e){return e=e.prototype,!(!e||!e.isReactComponent)}function kf(e){if(typeof e=="function")return Ts(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Xi)return 11;if(e===Yi)return 14}return 2}function pt(e,t){var n=e.alternate;return n===null?(n=Ee(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Rr(e,t,n,r,l,s){var o=2;if(r=e,typeof e=="function")Ts(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case Ut:return Lt(n.children,l,s,t);case Ki:o=8,l|=8;break;case Yl:return e=Ee(12,n,t,l|2),e.elementType=Yl,e.lanes=s,e;case Gl:return e=Ee(13,n,t,l),e.elementType=Gl,e.lanes=s,e;case Zl:return e=Ee(19,n,t,l),e.elementType=Zl,e.lanes=s,e;case aa:return gl(n,l,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case sa:o=10;break e;case oa:o=9;break e;case Xi:o=11;break e;case Yi:o=14;break e;case et:o=16,r=null;break e}throw Error(y(130,e==null?e:typeof e,""))}return t=Ee(o,n,t,l),t.elementType=e,t.type=r,t.lanes=s,t}function Lt(e,t,n,r){return e=Ee(7,e,r,t),e.lanes=n,e}function gl(e,t,n,r){return e=Ee(22,e,r,t),e.elementType=aa,e.lanes=n,e.stateNode={isHidden:!1},e}function Hl(e,t,n){return e=Ee(6,e,null,t),e.lanes=n,e}function Ql(e,t,n){return t=Ee(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Sf(e,t,n,r,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=El(0),this.expirationTimes=El(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=El(0),this.identifierPrefix=r,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function _s(e,t,n,r,l,s,o,c,d){return e=new Sf(e,t,n,c,d),t===1?(t=1,s===!0&&(t|=8)):t=0,s=Ee(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ps(s),e}function Cf(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function qu(e){if(!e)return mt;e=e._reactInternals;e:{if(Ot(e)!==e||e.tag!==1)throw Error(y(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(y(171))}if(e.tag===1){var n=e.type;if(me(n))return qa(e,n,t)}return t}function ec(e,t,n,r,l,s,o,c,d){return e=_s(n,r,!0,e,l,s,o,c,d),e.context=qu(null),n=e.current,r=ae(),l=ft(n),s=Ke(r,l),s.callback=t??null,ct(n,s,l),e.current.lanes=l,qn(e,l,r),ge(e,r),e}function vl(e,t,n,r){var l=t.current,s=ae(),o=ft(l);return n=qu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ke(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ct(l,t,o),e!==null&&(De(e,l,o,s),Lr(e,l,o)),o}function ll(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Vo(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zs(e,t){Vo(e,t),(e=e.alternate)&&Vo(e,t)}function Ef(){return null}var tc=typeof reportError=="function"?reportError:function(e){console.error(e)};function bs(e){this._internalRoot=e}xl.prototype.render=bs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(y(409));vl(e,t,null,null)};xl.prototype.unmount=bs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ft(function(){vl(null,e,null,null)}),t[Ye]=null}};function xl(e){this._internalRoot=e}xl.prototype.unstable_scheduleHydration=function(e){if(e){var t=ba();e={blockedOn:null,target:e,priority:t};for(var n=0;n<nt.length&&t!==0&&t<nt[n].priority;n++);nt.splice(n,0,e),n===0&&Ra(e)}};function Fs(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function yl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function $o(){}function Pf(e,t,n,r,l){if(l){if(typeof r=="function"){var s=r;r=function(){var p=ll(o);s.call(p)}}var o=ec(t,r,e,0,null,!1,!1,"",$o);return e._reactRootContainer=o,e[Ye]=o.current,Wn(e.nodeType===8?e.parentNode:e),Ft(),o}for(;l=e.lastChild;)e.removeChild(l);if(typeof r=="function"){var c=r;r=function(){var p=ll(d);c.call(p)}}var d=_s(e,0,!1,null,null,!1,!1,"",$o);return e._reactRootContainer=d,e[Ye]=d.current,Wn(e.nodeType===8?e.parentNode:e),Ft(function(){vl(t,d,n,r)}),d}function wl(e,t,n,r,l){var s=n._reactRootContainer;if(s){var o=s;if(typeof l=="function"){var c=l;l=function(){var d=ll(o);c.call(d)}}vl(t,o,e,l)}else o=Pf(n,t,e,l,r);return ll(o)}_a=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Sn(t.pendingLanes);n!==0&&(Ji(t,n|1),ge(t,X()),!(O&6)&&(cn=X()+500,xt()))}break;case 13:Ft(function(){var r=Ge(e,1);if(r!==null){var l=ae();De(r,e,1,l)}}),zs(e,1)}};qi=function(e){if(e.tag===13){var t=Ge(e,134217728);if(t!==null){var n=ae();De(t,e,134217728,n)}zs(e,134217728)}};za=function(e){if(e.tag===13){var t=ft(e),n=Ge(e,t);if(n!==null){var r=ae();De(n,e,t,r)}zs(e,t)}};ba=function(){return I};Fa=function(e,t){var n=I;try{return I=e,t()}finally{I=n}};oi=function(e,t,n){switch(t){case"input":if(ei(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var l=cl(r);if(!l)throw Error(y(90));ca(r),ei(r,l)}}}break;case"textarea":fa(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};ya=Es;wa=Ft;var Lf={usingClientEntryPoint:!1,Events:[tr,Bt,cl,va,xa,Es]},jn={findFiberByHostInstance:St,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tf={bundleType:jn.bundleType,version:jn.version,rendererPackageName:jn.rendererPackageName,rendererConfig:jn.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Je.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ka(e),e===null?null:e.stateNode},findFiberByHostInstance:jn.findFiberByHostInstance||Ef,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nr.isDisabled&&Nr.supportsFiber)try{sl=Nr.inject(Tf),Ve=Nr}catch{}}Ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lf;Ne.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fs(t))throw Error(y(200));return Cf(e,t,null,n)};Ne.createRoot=function(e,t){if(!Fs(e))throw Error(y(299));var n=!1,r="",l=tc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=_s(e,1,!1,null,null,n,!1,r,l),e[Ye]=t.current,Wn(e.nodeType===8?e.parentNode:e),new bs(t)};Ne.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(y(188)):(e=Object.keys(e).join(","),Error(y(268,e)));return e=ka(t),e=e===null?null:e.stateNode,e};Ne.flushSync=function(e){return Ft(e)};Ne.hydrate=function(e,t,n){if(!yl(t))throw Error(y(200));return wl(null,e,t,!0,n)};Ne.hydrateRoot=function(e,t,n){if(!Fs(e))throw Error(y(405));var r=n!=null&&n.hydratedSources||null,l=!1,s="",o=tc;if(n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=ec(t,null,e,1,n??null,l,!1,s,o),e[Ye]=t.current,Wn(e),r)for(e=0;e<r.length;e++)n=r[e],l=n._getVersion,l=l(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,l]:t.mutableSourceEagerHydrationData.push(n,l);return new xl(t)};Ne.render=function(e,t,n){if(!yl(t))throw Error(y(200));return wl(null,e,t,!1,n)};Ne.unmountComponentAtNode=function(e){if(!yl(e))throw Error(y(40));return e._reactRootContainer?(Ft(function(){wl(null,null,e,!1,function(){e._reactRootContainer=null,e[Ye]=null})}),!0):!1};Ne.unstable_batchedUpdates=Es;Ne.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!yl(n))throw Error(y(200));if(e==null||e._reactInternals===void 0)throw Error(y(38));return wl(e,t,n,!1,r)};Ne.version="18.3.1-next-f1338f8080-20240426";function nc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(nc)}catch(e){console.error(e)}}nc(),na.exports=Ne;var _f=na.exports,Wo=_f;Kl.createRoot=Wo.createRoot,Kl.hydrateRoot=Wo.hydrateRoot;function zf(){var lr,Dt,It,S,_,z;const[e,t]=ve.useState(!0),[n,r]=ve.useState("general"),[l,s]=ve.useState(!1),[o,c]=ve.useState(!1),[d,p]=ve.useState(null),[x,v]=ve.useState(!1),[g,j]=ve.useState(!1),w=ve.useRef({pcrRawDataType:"",sampleId:"plrn",resultView:"Simple",ctValueDigit:"Two Decimal Digit",sampleIndexSetting:"enable",targetOnOffChanged:!1}),[N,D]=ve.useState(!1),[a,f]=ve.useState({language:"",pcrRawDataType:"",loadingMethods:{manual:!0,preset:!1,plrn:!1,csv:!1,barcode:!1},plateBarcode:!1,plateSettingFile:"None",csvFileOpenOption:"Sample No",plateSetting:{manual:!0,preset:!0},sampleId:"plrn",targetAbbreviation:!1,openPcrDataFileFolderPath:"",openLimsFileFolderPath:"",exportFolderPath:"",saveFolderPath:"",saveWorkListFolderPath:"",resultView:"Simple",wellTable:"세로",resultDisplay:"Plain Text",ctValueDigit:"Two Decimal Digit",sampleIndexSetting:"enable",displayPositiveWhenICNegative:!1,invalidateWhenPCNCInvalid:!1,autoExport:!1,sampleToExport:"All Samples",exportFormat:"xlsx",targetAlignmentMethod:"세로",meltTemperatureColumn:!1,useRawDataFilename:!0,usePrefix:!1,prefixType:"A",createNewFolder:!1,folderNameType:"A",printRange:"All Samples",printItems:{number:!0,sampleId:!0},logoFile:"",addLogoToPrint:!1,logoPrintLocation:"Top Left",watermarkFile:"",addWatermarkToPrint:!1,watermarkLayout:"1x1",hl7Version:"2.5.1",hl7TransferItems:{result:!0,ctValue:!0,meltTemp:!1},hl7SampleToExport:"All Samples",hl7TransferProtocol:"HTTP",hl7ServerIP:"",hl7ServerPort:"",hl7TransferMethod:"all-at-once",hl7ResponseTimeout:"30000",hl7AbbrevAssaySearch:"",hl7AbbrevSelectedAssay:null,assaySearch:"",assayList:[{id:1,name:"Allplex SARS-CoV-2",intendedUse:"IVD",assayCode:"COV2",targets:[{id:1,channel:"FAM",dye:"FAM",target:"E gene",targetCode:"EGENE"},{id:2,channel:"HEX",dye:"HEX",target:"RdRP gene",targetCode:"RDRP"},{id:3,channel:"Cal Red 610",dye:"CR610",target:"N gene",targetCode:"NGENE"},{id:4,channel:"Quasar 670",dye:"Q670",target:"IC",targetCode:"IC"}]},{id:2,name:"Allplex Respiratory Panel 1",intendedUse:"IVD",assayCode:"RP1",targets:[{id:1,channel:"FAM",dye:"FAM",target:"Flu A",targetCode:"FLUA"},{id:2,channel:"HEX",dye:"HEX",target:"Flu B",targetCode:"FLUB"},{id:3,channel:"Cal Red 610",dye:"CR610",target:"RSV A",targetCode:"RSVA"},{id:4,channel:"Quasar 670",dye:"Q670",target:"RSV B",targetCode:"RSVB"}]},{id:3,name:"Allplex GI-Bacteria",intendedUse:"IVD",assayCode:"GIB",targets:[{id:1,channel:"FAM",dye:"FAM",target:"E gene",targetCode:"EGENE"},{id:2,channel:"HEX",dye:"HEX",target:"RdRP gene",targetCode:"RDRP"},{id:3,channel:"Cal Red 610",dye:"CR610",target:"N gene",targetCode:"NGENE"},{id:4,channel:"Quasar 670",dye:"Q670",target:"IC",targetCode:"IC"}]}],selectedAssay:null}),h=[{id:"general",label:"General",icon:"⚙️",subTabs:[{id:"general-permission",label:"기능별 권한 설정"}]},{id:"display",label:"Display Setting",icon:"🖥️",subTabs:[{id:"display-target",label:"Target on/off"},{id:"display-developer",label:"Developer Setting"},{id:"display-negative",label:"Negative C(t) Value"}]},{id:"export",label:"Export",icon:"📤",subTabs:[{id:"export-hl7-transfer",label:"HL7 Transfer Setting"},{id:"export-hl7-abbrev",label:"HL7 Abbreviation Setting"}]},{id:"print",label:"Print",icon:"🖨️"},{id:"assay",label:"Assay Pack",icon:"🧬"}],m=(u,T)=>{f(A=>({...A,[u]:T})),s(!0)},k=(u,T)=>{f(A=>({...A,[u]:{...A[u],[T]:!A[u][T]}})),s(!0)},E=u=>{l?(p(u),c(!0)):r(u)},P=()=>{c(!1),s(!1),r(d),p(null)},L=()=>{b(),c(!1),r(d),p(null)},W=()=>{const u=w.current;return a.pcrRawDataType!==u.pcrRawDataType||a.sampleId!==u.sampleId||a.resultView!==u.resultView||a.ctValueDigit!==u.ctValueDigit||a.sampleIndexSetting!==u.sampleIndexSetting||N},b=()=>{if(W()){j(!0);return}de()},de=()=>{w.current={pcrRawDataType:a.pcrRawDataType,sampleId:a.sampleId,resultView:a.resultView,ctValueDigit:a.ctValueDigit,sampleIndexSetting:a.sampleIndexSetting,targetOnOffChanged:!1},D(!1),s(!1),v(!0),setTimeout(()=>v(!1),2e3)},yt=()=>{j(!1),de()},wt=()=>{j(!1)},rr=()=>{l?(p("close"),c(!0)):t(!1)};return e?i.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",zIndex:1e3},children:[i.jsx("style",{children:`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        * { box-sizing: border-box; }
        
        .popup-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          width: 1000px;
          height: 700px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
        }
        
        .popup-header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .close-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: rgba(255,255,255,0.15);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        
        .close-btn:hover {
          background: rgba(255,255,255,0.25);
        }
        
        .popup-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        /* Vertical Tabs */
        .vertical-tabs {
          width: 200px;
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 16px 0;
          display: flex;
          flex-direction: column;
        }
        
        .tab-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          cursor: pointer;
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
          border-left: 3px solid transparent;
        }
        
        .tab-item:hover {
          background: #f1f5f9;
          color: #334155;
        }
        
        .tab-item.active {
          background: white;
          color: #1e40af;
          border-left-color: #3b82f6;
          font-weight: 600;
        }
        
        .tab-item.has-subtabs.active {
          background: #f1f5f9;
        }
        
        .sub-tabs {
          background: #f1f5f9;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.2s ease;
        }
        
        .sub-tabs.open {
          max-height: 200px;
        }
        
        .sub-tab-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px 10px 44px;
          cursor: pointer;
          color: #64748b;
          font-size: 13px;
          transition: all 0.15s ease;
          border-left: 3px solid transparent;
        }
        
        .sub-tab-item::before {
          content: '└';
          color: #cbd5e1;
          font-size: 12px;
        }
        
        .sub-tab-item:hover {
          background: #e2e8f0;
          color: #334155;
        }
        
        .sub-tab-item.active {
          background: white;
          color: #1e40af;
          border-left-color: #3b82f6;
          font-weight: 500;
        }
        
        .tab-icon {
          font-size: 18px;
        }
        
        /* Tab Content */
        .tab-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .tab-content-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .tab-content-header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .tab-content-body {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        
        .tab-content-footer {
          padding: 16px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          background: #f8fafc;
        }
        
        .footer-status {
          flex: 1;
        }
        
        .status-unsaved {
          font-size: 13px;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .status-success {
          font-size: 13px;
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .footer-buttons {
          display: flex;
          gap: 12px;
        }
        
        /* Settings Rows */
        .setting-row {
          display: flex;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .setting-row:hover {
          background: #fafbfc;
        }
        
        .setting-row.sub-item {
          padding-left: 44px;
          background: #fafbfc;
        }
        
        .setting-row.sub-item .setting-label::before {
          content: '└';
          margin-right: 8px;
          color: #94a3b8;
        }
        
        .setting-row.disabled {
          opacity: 0.6;
        }
        
        .setting-row.disabled:hover {
          background: inherit;
        }
        
        /* Flow Button Group */
        .flow-button-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }
        
        .flow-button {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          background: white;
        }
        
        .flow-button:hover {
          border-color: #94a3b8;
          background: #f8fafc;
        }
        
        .flow-button.selected {
          border-color: #3b82f6;
          background: #eff6ff;
        }
        
        .flow-button-label {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .flow-button.selected .flow-button-label {
          color: #1d4ed8;
        }
        
        .flow-button-desc {
          font-size: 12px;
          color: #64748b;
        }
        
        .flow-button.selected .flow-button-desc {
          color: #3b82f6;
        }

        .flow-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #f1f5f9;
        }

        .flow-button.disabled:hover {
          border-color: #e2e8f0;
          background: #f1f5f9;
        }

        /* Tooltip */
        .tooltip-container {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .tooltip-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: help;
          margin-left: 8px;
        }

        .tooltip-content {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          background: #1e293b;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.6;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
          z-index: 1000;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .tooltip-content::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 6px 6px 0;
          border-style: solid;
          border-color: transparent #1e293b transparent transparent;
        }

        .tooltip-container:hover .tooltip-content {
          opacity: 1;
          visibility: visible;
        }

        .tooltip-content strong {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }
        
        .setting-label {
          flex: 0 0 220px;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .setting-label small {
          display: block;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 400;
          margin-top: 2px;
        }
        
        .setting-control {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        /* Subsection Title */
        .subsection-title {
          padding: 12px 24px;
          font-size: 12px;
          font-weight: 600;
          color: #3b82f6;
          background: #eff6ff;
          border-bottom: 1px solid #dbeafe;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Form Controls */
        select {
          appearance: none;
          background: #f8fafc url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M2 4l4 4 4-4'/%3E%3C/svg%3E") no-repeat right 12px center;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 32px 8px 12px;
          font-size: 13px;
          color: #334155;
          min-width: 180px;
          cursor: pointer;
        }
        
        select:focus { outline: none; border-color: #3b82f6; }
        
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          background: #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .toggle.active { background: #3b82f6; }
        
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          transition: transform 0.2s ease;
        }
        
        .toggle.active::after { transform: translateX(20px); }
        
        .toggle-label {
          font-size: 12px;
          color: #64748b;
        }
        
        .radio-group {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .radio-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          color: #475569;
          transition: all 0.15s ease;
        }
        
        .radio-item:hover { border-color: #cbd5e1; }
        .radio-item.selected { 
          background: #eff6ff; 
          border-color: #3b82f6; 
          color: #1d4ed8;
        }
        
        .radio-dot {
          width: 14px;
          height: 14px;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          position: relative;
        }
        
        .radio-item.selected .radio-dot {
          border-color: #3b82f6;
        }
        
        .radio-item.selected .radio-dot::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .checkbox-group {
          display: flex;
          gap: 12px;
        }
        
        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 13px;
          color: #475569;
        }
        
        .checkbox-box {
          width: 18px;
          height: 18px;
          border: 2px solid #cbd5e1;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        
        .checkbox-item.checked .checkbox-box {
          background: #3b82f6;
          border-color: #3b82f6;
        }
        
        .checkbox-box svg {
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.15s ease;
        }
        
        .checkbox-item.checked .checkbox-box svg {
          opacity: 1;
          transform: scale(1);
        }
        
        .text-input {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          color: #334155;
          min-width: 200px;
        }
        
        .text-input:focus { outline: none; border-color: #3b82f6; }
        
        .folder-path-control {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .path-input {
          min-width: 280px;
          background: #f8fafc;
        }
        
        .file-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .file-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }
        
        /* Buttons */
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .btn-secondary {
          background: white;
          border: 1px solid #e2e8f0;
          color: #64748b;
        }
        
        .btn-secondary:hover { background: #f8fafc; }
        
        .btn-primary {
          background: #3b82f6;
          border: none;
          color: white;
        }
        
        .btn-primary:hover { background: #2563eb; }
        
        .btn-primary:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
        
        /* Alert Modal */
        .alert-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        .alert-modal {
          background: white;
          border-radius: 12px;
          padding: 24px;
          width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .alert-modal h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .alert-modal p {
          margin: 0 0 20px;
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
        }
        
        .alert-buttons {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
        
        .btn-danger {
          background: #ef4444;
          border: none;
          color: white;
        }
        
        .btn-danger:hover { background: #dc2626; }
        
        /* Success Toast */
        .success-toast {
          position: absolute;
          top: 80px;
          right: 24px;
          background: #10b981;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(16,185,129,0.3);
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        /* Info Notice */
        .info-notice {
          display: flex;
          gap: 10px;
          padding: 12px 16px;
          margin: 12px 24px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
          border-left: 3px solid #3b82f6;
        }
        
        .info-notice .info-icon { font-size: 16px; }
        
        .info-notice .info-text {
          font-size: 13px;
          color: #1e40af;
          line-height: 1.4;
        }
        
        .info-notice .info-text strong {
          display: block;
          margin-bottom: 2px;
        }
        
        .info-notice .info-text p { margin: 0; color: #3b82f6; }
        
        /* Required hint */
        .required-hint {
          color: #ef4444;
          font-weight: 500;
        }
        
        .warning-text {
          font-size: 12px;
          color: #ef4444;
          background: #fef2f2;
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        /* Assay Pack Tables */
        .assay-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px 24px;
        }
        
        .assay-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .panel-header h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .panel-subtitle {
          font-size: 12px;
          color: #64748b;
        }
        
        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
        }
        
        .search-box input {
          border: none;
          outline: none;
          font-size: 13px;
          width: 140px;
        }
        
        .data-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          padding: 10px 12px;
          text-align: left;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .data-table td {
          padding: 10px 12px;
          font-size: 13px;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .data-table tr:hover { background: #fafbfc; }
        .data-table tr.selected { background: #eff6ff; }
        
        .badge {
          display: inline-block;
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #059669;
          background: #d1fae5;
          border-radius: 10px;
        }
        
        .badge.dye {
          color: #7c3aed;
          background: #ede9fe;
        }
        
        .inline-input {
          padding: 4px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          font-family: monospace;
          width: 80px;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .empty-state {
          padding: 40px;
          text-align: center;
          color: #94a3b8;
        }
        
        .empty-state .empty-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }
        
        .empty-state p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
        }
        
        /* Unsaved indicator */
        .unsaved-dot {
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          margin-left: 8px;
        }
        
        /* Permission Table */
        .permission-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .permission-table th {
          padding: 14px 16px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          background: #f8fafc;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .permission-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        
        .permission-table tr:hover {
          background: #fafbfc;
        }
        
        .permission-table tr:last-child td {
          border-bottom: none;
        }
        
        .feature-name {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 2px;
        }
        
        .feature-desc {
          font-size: 12px;
          color: #94a3b8;
        }
        
        /* Target On/Off Container */
        .target-onoff-container {
          display: flex;
          gap: 16px;
          padding: 16px 24px;
          height: calc(100% - 80px);
        }
        
        .target-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .assay-list-panel {
          flex: 0 0 280px;
        }
        
        .target-list-panel {
          flex: 1;
        }
        
        .panel-search {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
          background: #fafbfc;
        }
        
        .assay-list {
          flex: 1;
          overflow-y: auto;
        }
        
        .assay-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.15s ease;
        }
        
        .assay-list-item:hover {
          background: #f8fafc;
        }
        
        .assay-list-item.selected {
          background: #eff6ff;
          border-left: 3px solid #3b82f6;
        }
        
        .assay-item-info {
          flex: 1;
        }
        
        .assay-item-name {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .assay-item-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .target-count {
          font-size: 11px;
          color: #94a3b8;
        }
        
        .assay-item-arrow {
          font-size: 18px;
          color: #cbd5e1;
        }
        
        .assay-list-item.selected .assay-item-arrow {
          color: #3b82f6;
        }
        
        .target-list {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .target-list-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }
        
        .target-list-row {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .target-list-row:hover {
          background: #fafbfc;
        }
        
        .th-channel, .td-channel { flex: 0 0 120px; }
        .th-dye, .td-dye { flex: 0 0 80px; }
        .th-target, .td-target { flex: 1; }
        .th-toggle, .td-toggle { flex: 0 0 100px; text-align: center; }
        
        .td-channel {
          font-size: 12px;
          color: #64748b;
        }
        
        .td-target {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .td-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .toggle-status {
          font-size: 11px;
          color: #64748b;
          min-width: 24px;
        }
        
        .target-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          margin-top: auto;
        }
        
        /* Assay On/Off Panel */
        .assay-onoff-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .assay-onoff-list {
          max-height: 350px;
          overflow-y: auto;
        }
        
        .assay-onoff-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          position: sticky;
          top: 0;
        }
        
        .assay-onoff-row {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .assay-onoff-row:hover {
          background: #fafbfc;
        }
        
        .th-assay-name, .td-assay-name { flex: 1; }
        .th-intended-use, .td-intended-use { flex: 0 0 120px; text-align: center; }
        .th-assay-toggle, .td-assay-toggle { flex: 0 0 120px; text-align: center; }
        
        .td-assay-name {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .td-assay-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .assay-onoff-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        
        /* Changed Settings List in Warning */
        .changed-settings-list {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        
        .changed-settings-title {
          font-size: 12px;
          font-weight: 600;
          color: #92400e;
          margin-bottom: 8px;
        }
        
        .changed-settings-list ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .changed-settings-list li {
          font-size: 13px;
          color: #b45309;
          margin-bottom: 4px;
        }
        
        .changed-settings-list li:last-child {
          margin-bottom: 0;
        }
        
        /* Preview Section */
        .preview-section {
          margin: 16px 24px;
          padding: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        
        .preview-title {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 12px;
        }
        
        .preview-path {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
          padding: 12px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Consolas', monospace;
          font-size: 13px;
          margin-bottom: 10px;
        }
        
        .path-segment {
          padding: 2px 4px;
          border-radius: 3px;
        }
        
        .path-base { color: #64748b; }
        .path-folder { background: #fef3c7; color: #b45309; }
        .path-prefix { background: #dbeafe; color: #1d4ed8; }
        .path-filename { color: #1e293b; font-weight: 500; }
        .path-ext { color: #059669; }
        .path-separator { color: #94a3b8; }
        
        .preview-example {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }
        
        .preview-example-label {
          color: #64748b;
        }
        
        .preview-example code {
          background: #e2e8f0;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Consolas', monospace;
          font-size: 11px;
          color: #334155;
        }
        
        /* HL7 Abbreviation Container */
        .hl7-abbrev-container {
          display: flex;
          gap: 16px;
          padding: 16px 24px;
          height: 320px;
        }
        
        .hl7-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .hl7-panel.assay-panel {
          flex: 0 0 280px;
        }
        
        .hl7-panel.target-panel {
          flex: 1;
        }

        .hl7-panel .data-table table tbody tr {
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .hl7-panel .data-table table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .hl7-panel .data-table table tbody tr.selected {
          background-color: #dbeafe;
        }

        .hl7-panel .data-table table tbody tr.selected:hover {
          background-color: #bfdbfe;
        }

        /* HL7 Abbreviation Vertical Layout */
        .hl7-abbrev-vertical {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 24px 24px;
        }

        .hl7-section {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .hl7-section .section-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .hl7-section .section-header h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .hl7-section .data-table {
          padding: 0;
        }

        .hl7-section .data-table table {
          margin: 0;
        }

        .hl7-section .data-table table tbody tr {
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .hl7-section .data-table table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .hl7-section .data-table table tbody tr.selected {
          background-color: #dbeafe;
        }

        .hl7-section .data-table table tbody tr.selected:hover {
          background-color: #bfdbfe;
        }

        .empty-state-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
          color: #64748b;
          font-size: 14px;
        }

        .empty-state-inline .empty-icon {
          font-size: 18px;
        }
        
        .assay-code-display {
          font-size: 11px;
          color: #64748b;
          font-family: monospace;
        }
      `}),i.jsxs("div",{className:"popup-container",children:[i.jsxs("div",{className:"popup-header",children:[i.jsx("h1",{children:"⚙️ Settings"}),i.jsx("button",{className:"close-btn",onClick:rr,children:"✕"})]}),i.jsxs("div",{className:"popup-body",children:[i.jsx("div",{className:"vertical-tabs",children:h.map(u=>i.jsxs(ea.Fragment,{children:[i.jsxs("div",{className:`tab-item ${n===u.id||n.startsWith(u.id+"-")?"active":""} ${u.subTabs?"has-subtabs":""}`,onClick:()=>E(u.id),children:[i.jsx("span",{className:"tab-icon",children:u.icon}),i.jsx("span",{children:u.label}),l&&(n===u.id||n.startsWith(u.id+"-"))&&i.jsx("div",{className:"unsaved-dot"}),u.subTabs&&i.jsx("span",{style:{marginLeft:"auto",fontSize:10,color:"#94a3b8"},children:n===u.id||n.startsWith(u.id+"-")?"▼":"▶"})]}),u.subTabs&&i.jsx("div",{className:`sub-tabs ${n===u.id||n.startsWith(u.id+"-")?"open":""}`,children:u.subTabs.map(T=>i.jsx("div",{className:`sub-tab-item ${n===T.id?"active":""}`,onClick:()=>E(T.id),children:T.label},T.id))})]},u.id))}),i.jsxs("div",{className:"tab-content",children:[i.jsx("div",{className:"tab-content-header",children:i.jsx("h2",{children:(()=>{var A;const u=h.find(F=>F.id===n||n.startsWith(F.id+"-")),T=(A=u==null?void 0:u.subTabs)==null?void 0:A.find(F=>F.id===n);return T?`${u.label} > ${T.label}`:u==null?void 0:u.label})()})}),i.jsxs("div",{className:"tab-content-body",children:[n==="general"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Language"}),i.jsx("div",{className:"setting-control",children:i.jsxs("select",{value:a.language,onChange:u=>m("language",u.target.value),children:[i.jsx("option",{value:"",children:"선택하세요"}),i.jsx("option",{value:"ko",children:"한국어"}),i.jsx("option",{value:"en",children:"English"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["PCR Raw Data Type",i.jsx("small",{children:"PCR 장비 SW설정"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("select",{value:a.pcrRawDataType,onChange:u=>m("pcrRawDataType",u.target.value),children:[i.jsx("option",{value:"",children:"선택하세요"}),i.jsx("option",{value:"type1",children:"Type 1"}),i.jsx("option",{value:"type2",children:"Type 2"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"타겟 약어 사용"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.targetAbbreviation?"active":""}`,onClick:()=>m("targetAbbreviation",!a.targetAbbreviation)}),i.jsx("span",{className:"toggle-label",children:a.targetAbbreviation?"ON":"OFF"})]})]}),i.jsxs("div",{className:"subsection-title",children:["데이터 불러오기 방식",i.jsxs("div",{className:"tooltip-container",children:[i.jsx("div",{className:"tooltip-icon",children:"i"}),i.jsxs("div",{className:"tooltip-content",children:[i.jsx("strong",{children:"다중 선택 규칙"}),"• 여러 방식을 동시에 선택할 수 있습니다",i.jsx("br",{}),"• LIMS(.plrn)과 CSV는 동시에 선택할 수 없습니다",i.jsx("br",{}),"• 바코드만 단독으로 선택할 수 없습니다",i.jsx("br",{}),"  (다른 방식과 함께 사용 필요)"]})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["불러오기 방식 선택",i.jsx("small",{children:"복수 선택 가능"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"flow-button-group",children:[{key:"manual",label:"Manual",desc:"Plate Setting을 수동으로 설정"},{key:"preset",label:"Preset",desc:"저장된 Plate Setting 사용"},{key:"plrn",label:"LIMS(.plrn) 파일",desc:"plrn 파일로 직접 불러오기"},{key:"csv",label:"CSV",desc:"CSV 파일로 불러오기"},{key:"barcode",label:"바코드로 불러오기",desc:"Plate Barcode 스캔으로 불러오기"}].map(u=>{const T=a.loadingMethods[u.key],A=u.key==="plrn"&&a.loadingMethods.csv||u.key==="csv"&&a.loadingMethods.plrn;return i.jsxs("div",{className:`flow-button ${T?"selected":""} ${A?"disabled":""}`,onClick:()=>{if(A)return;const F={...a.loadingMethods};F[u.key]=!F[u.key],u.key==="plrn"&&F[u.key]&&(F.csv=!1),u.key==="csv"&&F[u.key]&&(F.plrn=!1),m("loadingMethods",F)},children:[i.jsx("div",{className:"flow-button-label",children:u.label}),i.jsx("div",{className:"flow-button-desc",children:u.desc})]},u.key)})})})]}),a.loadingMethods.barcode&&!a.loadingMethods.manual&&!a.loadingMethods.preset&&!a.loadingMethods.plrn&&!a.loadingMethods.csv&&i.jsxs("div",{className:"setting-row",style:{background:"#fef3c7",border:"1px solid #fbbf24"},children:[i.jsx("div",{className:"setting-label",children:i.jsx("span",{style:{color:"#92400e",fontWeight:600},children:"⚠️ 경고"})}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{style:{color:"#92400e",fontSize:"13px",lineHeight:"1.5"},children:["바코드만 선택된 상태입니다. 바코드 읽기 실패 시를 대비하여 ",i.jsx("strong",{children:"Manual, Preset, LIMS(.plrn), CSV 중 최소 하나 이상"}),"을 함께 선택해주세요."]})})]}),i.jsxs("div",{className:"setting-row",style:{background:"#f0f9ff"},children:[i.jsxs("div",{className:"setting-label",children:["선택된 방식",i.jsx("small",{children:"현재 활성화된 불러오기 방식"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[Object.entries(a.loadingMethods).filter(([u,T])=>T).map(([u])=>{const T={manual:"Manual",preset:"Preset",plrn:"LIMS(.plrn)",csv:"CSV",barcode:"바코드"};return i.jsx("span",{style:{padding:"4px 12px",background:"#2563eb",color:"white",borderRadius:"16px",fontSize:"12px",fontWeight:500},children:T[u]},u)}),!Object.values(a.loadingMethods).some(u=>u)&&i.jsx("span",{style:{color:"#ef4444",fontSize:"13px",fontWeight:500},children:"⚠️ 최소 하나의 방식을 선택하세요"})]})})]}),a.loadingMethods.csv&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[i.jsxs("div",{className:"setting-label",children:["Plate Setting",i.jsx("small",{children:"CSV 사용 시 Plate Setting 선택"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"checkbox-group",children:["manual","preset"].map(u=>i.jsxs("div",{className:`checkbox-item ${a.plateSetting[u]?"checked":""}`,onClick:()=>k("plateSetting",u),children:[i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.charAt(0).toUpperCase()+u.slice(1)]},u))})})]}),i.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[i.jsxs("div",{className:"setting-label",children:["csv File Open Option",i.jsx("small",{children:"CSV 파일 열기 옵션"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["Sample No","Patient Id","Name"].map(u=>i.jsxs("div",{className:`radio-item ${a.csvFileOpenOption===u?"selected":""}`,onClick:()=>m("csvFileOpenOption",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]})]}),(a.loadingMethods.plrn||a.loadingMethods.barcode)&&i.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[i.jsxs("div",{className:"setting-label",children:["Sample ID",i.jsx("small",{children:"plrn 또는 바코드 선택 시 활성화"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:[{value:"plrn",label:"from LIMS(.plrn)"},{value:"pcr data",label:"from PCR Raw Data"}].map(u=>i.jsxs("div",{className:`radio-item ${a.sampleId===u.value?"selected":""}`,onClick:()=>m("sampleId",u.value),children:[i.jsx("div",{className:"radio-dot"}),u.label]},u.value))})})]}),i.jsx("div",{className:"subsection-title",children:"Folder Setting"}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Open PCR Data File Folder Path",i.jsx("small",{children:"PCR 데이터 파일 열기 경로"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:a.openPcrDataFileFolderPath,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Open LIMS(.plrn) File Folder Path",i.jsx("small",{children:"LIMS 파일 열기 경로"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:a.openLimsFileFolderPath,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Export Folder Path",i.jsx("small",{children:"결과 파일 내보내기 경로"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"C:\\Seegene",value:a.exportFolderPath,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Save Folder Path",i.jsx("small",{children:"파일 저장 경로"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:a.saveFolderPath,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),i.jsxs("div",{className:"setting-row sub-item",children:[i.jsxs("div",{className:"setting-label",children:["Save WorkList Folder Path",i.jsx("small",{children:"WorkList 저장 경로"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:a.saveWorkListFolderPath,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]})]}),n==="general-permission"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"info-notice",children:[i.jsx("div",{className:"info-icon",children:"🔐"}),i.jsxs("div",{className:"info-text",children:[i.jsx("strong",{children:"기능별 권한 설정"}),i.jsx("p",{children:"각 기능에 대해 Admin과 User의 접근 권한을 설정합니다."})]})]}),i.jsx("div",{style:{padding:"16px 24px"},children:i.jsxs("table",{className:"permission-table",children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{width:"50%"},children:"기능"}),i.jsx("th",{style:{width:"25%",textAlign:"center"},children:"Admin"}),i.jsx("th",{style:{width:"25%",textAlign:"center"},children:"User"})]})}),i.jsxs("tbody",{children:[i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("div",{className:"feature-name",children:"기능 A"}),i.jsx("div",{className:"feature-desc",children:"기능 A에 대한 설명"})]}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("div",{className:"feature-name",children:"기능 B"}),i.jsx("div",{className:"feature-desc",children:"기능 B에 대한 설명"})]}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("div",{className:"feature-name",children:"기능 C"}),i.jsx("div",{className:"feature-desc",children:"기능 C에 대한 설명"})]}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),i.jsxs("tr",{children:[i.jsxs("td",{children:[i.jsx("div",{className:"feature-name",children:"기능 D"}),i.jsx("div",{className:"feature-desc",children:"기능 D에 대한 설명"})]}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("div",{className:"checkbox-item",style:{justifyContent:"center"},children:i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]})]})]})})]}),n==="display"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Result View"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["Simple","Analysis"].map(u=>i.jsxs("div",{className:`radio-item ${a.resultView===u?"selected":""}`,onClick:()=>m("resultView",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Well Table"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["세로","가로"].map(u=>i.jsxs("div",{className:`radio-item ${a.wellTable===u?"selected":""}`,onClick:()=>m("wellTable",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Result Display"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["Plain Text","Bold and Colored Text"].map(u=>i.jsxs("div",{className:`radio-item ${a.resultDisplay===u?"selected":""}`,onClick:()=>m("resultDisplay",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"C(t) Value Digit"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["One Decimal Digit","Two Decimal Digit"].map(u=>i.jsxs("div",{className:`radio-item ${a.ctValueDigit===u?"selected":""}`,onClick:()=>m("ctValueDigit",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Sample Index Setting"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["enable","disable"].map(u=>i.jsxs("div",{className:`radio-item ${a.sampleIndexSetting===u?"selected":""}`,onClick:()=>m("sampleIndexSetting",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Display positive samples when IC is negative"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.displayPositiveWhenICNegative?"active":""}`,onClick:()=>m("displayPositiveWhenICNegative",!a.displayPositiveWhenICNegative)}),i.jsx("span",{className:"toggle-label",children:a.displayPositiveWhenICNegative?"ON":"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Invalidate all samples when either PC or NC is invalid"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.invalidateWhenPCNCInvalid?"active":""}`,onClick:()=>m("invalidateWhenPCNCInvalid",!a.invalidateWhenPCNCInvalid)}),i.jsx("span",{className:"toggle-label",children:a.invalidateWhenPCNCInvalid?"ON":"OFF"})]})]})]}),n==="display-target"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"info-notice",children:[i.jsx("div",{className:"info-icon",children:"🎯"}),i.jsxs("div",{className:"info-text",children:[i.jsx("strong",{children:"Target 표시 설정"}),i.jsx("p",{children:"Assay별로 표시할 Target을 선택합니다. OFF로 설정된 Target은 분석 결과 화면에 표시되지 않습니다."})]})]}),i.jsxs("div",{className:"target-onoff-container",children:[i.jsxs("div",{className:"target-panel assay-list-panel",children:[i.jsx("div",{className:"panel-header",children:i.jsx("h3",{children:"Assay Pack 목록"})}),i.jsx("div",{className:"panel-search",children:i.jsxs("div",{className:"search-box",style:{width:"100%"},children:[i.jsx("span",{children:"🔍"}),i.jsx("input",{type:"text",placeholder:"Assay 검색...",value:a.assaySearch,onChange:u=>m("assaySearch",u.target.value),style:{width:"100%"}})]})}),i.jsx("div",{className:"assay-list",children:a.assayList.filter(u=>u.name.toLowerCase().includes(a.assaySearch.toLowerCase())).map(u=>i.jsxs("div",{className:`assay-list-item ${a.selectedAssay===u.id?"selected":""}`,onClick:()=>m("selectedAssay",u.id),children:[i.jsxs("div",{className:"assay-item-info",children:[i.jsx("div",{className:"assay-item-name",children:u.name}),i.jsxs("div",{className:"assay-item-meta",children:[i.jsx("span",{className:"badge",children:u.intendedUse}),i.jsxs("span",{className:"target-count",children:[u.targets.length," targets"]})]})]}),i.jsx("span",{className:"assay-item-arrow",children:"›"})]},u.id))})]}),i.jsxs("div",{className:"target-panel target-list-panel",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("h3",{children:"Target 설정"}),a.selectedAssay&&i.jsx("span",{className:"panel-subtitle",children:(lr=a.assayList.find(u=>u.id===a.selectedAssay))==null?void 0:lr.name})]}),a.selectedAssay?i.jsxs("div",{className:"target-list",children:[i.jsxs("div",{className:"target-list-header",children:[i.jsx("span",{className:"th-channel",children:"Channel"}),i.jsx("span",{className:"th-dye",children:"Dye"}),i.jsx("span",{className:"th-target",children:"Target"}),i.jsx("span",{className:"th-toggle",children:"표시"})]}),(Dt=a.assayList.find(u=>u.id===a.selectedAssay))==null?void 0:Dt.targets.map((u,T)=>i.jsxs("div",{className:"target-list-row",children:[i.jsx("span",{className:"td-channel",children:u.channel}),i.jsx("span",{className:"td-dye",children:i.jsx("span",{className:"badge dye",children:u.dye})}),i.jsx("span",{className:"td-target",children:u.target}),i.jsxs("span",{className:"td-toggle",children:[i.jsx("div",{className:`toggle ${u.targetCode!==""?"active":""}`,style:{transform:"scale(0.85)",cursor:"pointer"},onClick:()=>{D(!0),s(!0)}}),i.jsx("span",{className:"toggle-status",children:u.targetCode!==""?"ON":"OFF"})]})]},u.id)),i.jsxs("div",{className:"target-actions",children:[i.jsx("button",{className:"btn btn-secondary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>{D(!0),s(!0)},children:"전체 OFF"}),i.jsx("button",{className:"btn btn-primary",style:{fontSize:12,padding:"6px 12px"},onClick:()=>{D(!0),s(!0)},children:"전체 ON"})]})]}):i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"👈"}),i.jsxs("p",{children:["왼쪽 Assay 목록에서",i.jsx("br",{}),"항목을 선택하세요"]})]})]})]})]}),n==="display-developer"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"info-notice",style:{background:"#fef3c7",borderColor:"#fbbf24",borderLeftColor:"#f59e0b"},children:[i.jsx("div",{className:"info-icon",children:"⚠️"}),i.jsxs("div",{className:"info-text",style:{color:"#92400e"},children:[i.jsx("strong",{style:{color:"#b45309"},children:"Developer Setting"}),i.jsx("p",{style:{color:"#a16207"},children:"개발자 전용 설정입니다. 일반 사용자는 변경하지 않는 것을 권장합니다."})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Display End RFU Value",i.jsx("small",{children:"End RFU 값 표시"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:"toggle"}),i.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Display EPR Value",i.jsx("small",{children:"EPR 값 표시"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:"toggle"}),i.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Display Graph of Negative Target",i.jsx("small",{children:"음성 Target 그래프 표시"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:"toggle"}),i.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Display C(t) of Negative Target",i.jsx("small",{children:"음성 Target의 C(t) 값 표시"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:"toggle"}),i.jsx("span",{className:"toggle-label",children:"OFF"})]})]})]}),n==="display-negative"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"info-notice",children:[i.jsx("div",{className:"info-icon",children:"📊"}),i.jsxs("div",{className:"info-text",children:[i.jsx("strong",{children:"Negative C(t) Value 표시 설정"}),i.jsx("p",{children:"Assay별로 Negative C(t) Value 표시 여부를 설정합니다. ON으로 설정된 Assay는 음성 결과에도 C(t) 값이 표시됩니다."})]})]}),i.jsx("div",{style:{padding:"16px 24px"},children:i.jsxs("div",{className:"assay-onoff-panel",children:[i.jsxs("div",{className:"panel-header",style:{justifyContent:"space-between"},children:[i.jsx("h3",{children:"Assay 목록"}),i.jsxs("div",{className:"search-box",children:[i.jsx("span",{children:"🔍"}),i.jsx("input",{type:"text",placeholder:"Assay 검색...",value:a.assaySearch,onChange:u=>m("assaySearch",u.target.value)})]})]}),i.jsxs("div",{className:"assay-onoff-list",children:[i.jsxs("div",{className:"assay-onoff-header",children:[i.jsx("span",{className:"th-assay-name",children:"Assay Name"}),i.jsx("span",{className:"th-intended-use",children:"Intended Use"}),i.jsx("span",{className:"th-assay-toggle",children:"Negative C(t)"})]}),a.assayList.filter(u=>u.name.toLowerCase().includes(a.assaySearch.toLowerCase())).map(u=>i.jsxs("div",{className:"assay-onoff-row",children:[i.jsx("span",{className:"td-assay-name",children:u.name}),i.jsx("span",{className:"td-intended-use",children:i.jsx("span",{className:"badge",children:u.intendedUse})}),i.jsxs("span",{className:"td-assay-toggle",children:[i.jsx("div",{className:"toggle",style:{transform:"scale(0.85)"}}),i.jsx("span",{className:"toggle-status",children:"OFF"})]})]},u.id))]}),i.jsxs("div",{className:"assay-onoff-footer",children:[i.jsxs("span",{style:{fontSize:12,color:"#64748b"},children:["총 ",a.assayList.filter(u=>u.name.toLowerCase().includes(a.assaySearch.toLowerCase())).length,"개 Assay"]}),i.jsxs("div",{style:{display:"flex",gap:8},children:[i.jsx("button",{className:"btn btn-secondary",style:{fontSize:12,padding:"6px 12px"},children:"전체 OFF"}),i.jsx("button",{className:"btn btn-primary",style:{fontSize:12,padding:"6px 12px"},children:"전체 ON"})]})]})]})})]}),n==="export"&&i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"subsection-title",children:"LIS Export Setting"}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Auto Export"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.autoExport?"active":""}`,onClick:()=>m("autoExport",!a.autoExport)}),i.jsx("span",{className:"toggle-label",children:a.autoExport?"ON":"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Sample to Export"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(u=>i.jsxs("div",{className:`radio-item ${a.sampleToExport===u?"selected":""}`,onClick:()=>m("sampleToExport",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Export Format"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["xlsx","csv","xls"].map(u=>i.jsxs("div",{className:`radio-item ${a.exportFormat===u?"selected":""}`,onClick:()=>m("exportFormat",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Target Alignment Method"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["세로","가로"].map(u=>i.jsxs("div",{className:`radio-item ${a.targetAlignmentMethod===u?"selected":""}`,onClick:()=>m("targetAlignmentMethod",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Melt Temperature column"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.meltTemperatureColumn?"active":""}`,onClick:()=>m("meltTemperatureColumn",!a.meltTemperatureColumn)}),i.jsx("span",{className:"toggle-label",children:a.meltTemperatureColumn?"ON":"OFF"})]})]}),i.jsx("div",{className:"subsection-title",children:"Auto Save Filename"}),i.jsxs("div",{className:"info-notice",children:[i.jsx("div",{className:"info-icon",children:"ℹ️"}),i.jsxs("div",{className:"info-text",children:[i.jsx("strong",{children:"Prefix 및 Folder Name 자동 입력 안내"}),i.jsx("p",{children:"A, B, C, D 값은 plrn 파일에 포함되어 있습니다. plrn 파일로 분석파일을 열었을 때만 파일 접두어(Prefix)와 새 폴더 이름이 자동으로 입력됩니다."})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Use Raw Data Filename",i.jsx("small",{children:"분석파일 이름으로 자동 저장"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.useRawDataFilename?"active":""}`,onClick:()=>m("useRawDataFilename",!a.useRawDataFilename)}),i.jsx("span",{className:"toggle-label",children:a.useRawDataFilename?"ON":"OFF"})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Use Prefix",i.jsx("small",{children:"파일명 앞에 접두어 추가"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.usePrefix?"active":""}`,onClick:()=>m("usePrefix",!a.usePrefix)}),i.jsx("span",{className:"toggle-label",children:a.usePrefix?"ON":"OFF"})]})]}),a.usePrefix&&i.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[i.jsxs("div",{className:"setting-label",children:["Prefix Type",i.jsx("small",{children:"사용할 접두어 선택"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["A","B","C","D"].map(u=>i.jsxs("div",{className:`radio-item ${a.prefixType===u?"selected":""}`,onClick:()=>m("prefixType",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Create New Folder",i.jsx("small",{children:"새 폴더를 만들어서 저장"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.createNewFolder?"active":""}`,onClick:()=>m("createNewFolder",!a.createNewFolder)}),i.jsx("span",{className:"toggle-label",children:a.createNewFolder?"ON":"OFF"})]})]}),a.createNewFolder&&i.jsxs("div",{className:"setting-row",style:{background:"#fef3c7"},children:[i.jsxs("div",{className:"setting-label",children:["Folder Name",i.jsx("small",{children:"생성할 폴더명 선택"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["A","B","C","D"].map(u=>i.jsxs("div",{className:`radio-item ${a.folderNameType===u?"selected":""}`,onClick:()=>m("folderNameType",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"preview-section",children:[i.jsx("div",{className:"preview-title",children:"📁 저장 경로 미리보기"}),i.jsxs("div",{className:"preview-path",children:[i.jsx("span",{className:"path-segment path-base",children:"C:\\Seegene\\Export"}),a.createNewFolder&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"path-separator",children:"\\"}),i.jsxs("span",{className:"path-segment path-folder",children:["[",a.folderNameType,"]"]})]}),i.jsx("span",{className:"path-separator",children:"\\"}),a.usePrefix&&i.jsxs("span",{className:"path-segment path-prefix",children:["[",a.prefixType,"]_"]}),i.jsx("span",{className:"path-segment path-filename",children:a.useRawDataFilename?"RawDataFilename":"filename"}),i.jsxs("span",{className:"path-segment path-ext",children:[".",a.exportFormat]})]}),i.jsxs("div",{className:"preview-example",children:[i.jsx("span",{className:"preview-example-label",children:"예시:"}),i.jsxs("code",{children:["C:\\Seegene\\Export",a.createNewFolder?`\\${a.folderNameType==="A"?"20241223":a.folderNameType==="B"?"PlateID_001":a.folderNameType==="C"?"OrderNo_001":"CustomFolder"}`:"","\\",a.usePrefix?`${a.prefixType==="A"?"20241223":a.prefixType==="B"?"PlateID":a.prefixType==="C"?"OrderNo":"Custom"}_`:"",a.useRawDataFilename?"PCR_RawData_001":"result",".",a.exportFormat]})]})]})]}),n==="export-hl7-transfer"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"HL7 Version"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["2.3.1","2.5.1"].map(u=>i.jsxs("div",{className:`radio-item ${a.hl7Version===u?"selected":""}`,onClick:()=>m("hl7Version",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Transfer Items"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"checkbox-group",children:[{key:"result",label:"Result"},{key:"ctValue",label:"C(t) Value"},{key:"meltTemp",label:"Melt Temperature"}].map(u=>{var T;return i.jsxs("div",{className:`checkbox-item ${(T=a.hl7TransferItems)!=null&&T[u.key]?"checked":""}`,onClick:()=>{const A=a.hl7TransferItems||{result:!0,ctValue:!0,meltTemp:!1};m("hl7TransferItems",{...A,[u.key]:!A[u.key]})},children:[i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.label]},u.key)})})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Sample to Export"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(u=>i.jsxs("div",{className:`radio-item ${a.hl7SampleToExport===u?"selected":""}`,onClick:()=>m("hl7SampleToExport",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Transfer Protocol",i.jsx("small",{children:"MLLP 선택 시 IP와 PORT 입력 필요"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["HTTP","MLLP"].map(u=>i.jsxs("div",{className:`radio-item ${a.hl7TransferProtocol===u?"selected":""}`,onClick:()=>m("hl7TransferProtocol",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),a.hl7TransferProtocol==="MLLP"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",style:{background:"#eff6ff"},children:[i.jsxs("div",{className:"setting-label",children:["Server IP",i.jsx("small",{children:"MLLP 서버 IP 주소"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("input",{type:"text",className:"text-input",placeholder:"192.168.0.1",value:a.hl7ServerIP,onChange:u=>m("hl7ServerIP",u.target.value),style:{width:180}})})]}),i.jsxs("div",{className:"setting-row",style:{background:"#eff6ff"},children:[i.jsxs("div",{className:"setting-label",children:["Server Port",i.jsx("small",{children:"MLLP 서버 포트"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("input",{type:"text",className:"text-input",placeholder:"5000",value:a.hl7ServerPort,onChange:u=>m("hl7ServerPort",u.target.value),style:{width:120}})})]})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Transfer Method"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",style:{flexDirection:"column",alignItems:"flex-start",gap:"8px"},children:[{value:"all-at-once",label:"Connected and transfer all samples at once"},{value:"per-sample",label:"Per sample"}].map(u=>i.jsxs("div",{className:`radio-item ${a.hl7TransferMethod===u.value?"selected":""}`,onClick:()=>m("hl7TransferMethod",u.value),children:[i.jsx("div",{className:"radio-dot"}),u.label]},u.value))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsxs("div",{className:"setting-label",children:["Response Timeout (ms)",i.jsx("small",{children:"응답 대기 시간"})]}),i.jsxs("div",{className:"setting-control",children:[i.jsx("input",{type:"number",className:"text-input",placeholder:"30000",value:a.hl7ResponseTimeout,onChange:u=>m("hl7ResponseTimeout",u.target.value),style:{width:120}}),i.jsx("span",{style:{fontSize:12,color:"#64748b",marginLeft:8},children:"ms"})]})]})]}),n==="export-hl7-abbrev"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"info-notice",children:[i.jsx("div",{className:"info-icon",children:"💡"}),i.jsxs("div",{className:"info-text",children:[i.jsx("strong",{children:"HL7 Abbreviation 설정"}),i.jsx("p",{children:"Assay 및 Target의 HL7 메시지 전송 시 사용할 코드를 설정합니다."})]})]}),i.jsxs("div",{className:"hl7-abbrev-vertical",children:[i.jsxs("div",{className:"hl7-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h3",{children:"Assay 목록"}),i.jsxs("div",{className:"search-box",style:{width:"200px"},children:[i.jsx("span",{children:"🔍"}),i.jsx("input",{type:"text",placeholder:"Assay 검색...",value:a.hl7AbbrevAssaySearch||"",onChange:u=>m("hl7AbbrevAssaySearch",u.target.value)})]})]}),i.jsx("div",{className:"data-table",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{width:"40%"},children:"ASSAY NAME"}),i.jsx("th",{style:{width:"20%"},children:"INTENDED USE"}),i.jsx("th",{style:{width:"20%"},children:"ASSAY CODE"}),i.jsx("th",{style:{width:"20%"}})]})}),i.jsx("tbody",{children:a.assayList.filter(u=>u.name.toLowerCase().includes((a.hl7AbbrevAssaySearch||"").toLowerCase())).map(u=>i.jsxs("tr",{className:a.hl7AbbrevSelectedAssay===u.id?"selected":"",onClick:()=>m("hl7AbbrevSelectedAssay",u.id),style:{cursor:"pointer"},children:[i.jsx("td",{children:u.name}),i.jsx("td",{children:i.jsx("span",{className:"badge",children:u.intendedUse})}),i.jsx("td",{children:i.jsx("input",{type:"text",className:"inline-input",value:u.assayCode,onClick:T=>T.stopPropagation(),onChange:T=>{const A=a.assayList.map(F=>F.id===u.id?{...F,assayCode:T.target.value}:F);m("assayList",A)},style:{width:"80px"}})}),i.jsx("td",{style:{textAlign:"center"},children:i.jsx("span",{style:{color:a.hl7AbbrevSelectedAssay===u.id?"#2563eb":"#94a3b8",fontSize:"12px"},children:a.hl7AbbrevSelectedAssay===u.id?"▼ 선택됨":"클릭하여 선택"})})]},u.id))})]})})]}),i.jsxs("div",{className:"hl7-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("h3",{children:"Target Code 설정"}),a.hl7AbbrevSelectedAssay&&i.jsx("span",{className:"panel-subtitle",style:{marginLeft:"12px",color:"#2563eb",fontWeight:500},children:(It=a.assayList.find(u=>u.id===a.hl7AbbrevSelectedAssay))==null?void 0:It.name})]}),a.hl7AbbrevSelectedAssay?i.jsx("div",{className:"data-table",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{style:{width:"25%"},children:"CHANNEL"}),i.jsx("th",{style:{width:"20%"},children:"DYE"}),i.jsx("th",{style:{width:"30%"},children:"TARGET"}),i.jsx("th",{style:{width:"25%"},children:"TARGET CODE"})]})}),i.jsx("tbody",{children:(S=a.assayList.find(u=>u.id===a.hl7AbbrevSelectedAssay))==null?void 0:S.targets.map(u=>i.jsxs("tr",{children:[i.jsx("td",{children:u.channel}),i.jsx("td",{children:i.jsx("span",{className:"badge dye",children:u.dye})}),i.jsx("td",{children:u.target}),i.jsx("td",{children:i.jsx("input",{type:"text",className:"inline-input",value:u.targetCode,onChange:T=>{const A=a.assayList.map(F=>F.id===a.hl7AbbrevSelectedAssay?{...F,targets:F.targets.map(_e=>_e.id===u.id?{..._e,targetCode:T.target.value}:_e)}:F);m("assayList",A)},style:{width:"80px"}})})]},u.id))})]})}):i.jsxs("div",{className:"empty-state-inline",children:[i.jsx("span",{className:"empty-icon",children:"☝️"}),i.jsx("span",{children:"위 Assay 목록에서 항목을 선택하세요"})]})]})]})]}),n==="print"&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Print Range"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(u=>i.jsxs("div",{className:`radio-item ${a.printRange===u?"selected":""}`,onClick:()=>m("printRange",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Print Items"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"checkbox-group",children:[{key:"number",label:"Number"},{key:"sampleId",label:"Sample ID"}].map(u=>i.jsxs("div",{className:`checkbox-item ${a.printItems[u.key]?"checked":""}`,onClick:()=>k("printItems",u.key),children:[i.jsx("div",{className:"checkbox-box",children:i.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:i.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),u.label]},u.key))})})]}),i.jsx("div",{className:"subsection-title",children:"Logo Setting"}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"로고 불러오기"}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"로고 파일을 선택하세요",value:a.logoFile,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📂 파일 열기"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Add Logo to Print"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.addLogoToPrint?"active":""}`,onClick:()=>m("addLogoToPrint",!a.addLogoToPrint)}),i.jsx("span",{className:"toggle-label",children:a.addLogoToPrint?"ON":"OFF"})]})]}),a.addLogoToPrint&&i.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[i.jsx("div",{className:"setting-label",children:"Logo Print Location"}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["Top Left","Top Center","Top Right"].map(u=>i.jsxs("div",{className:`radio-item ${a.logoPrintLocation===u?"selected":""}`,onClick:()=>m("logoPrintLocation",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]}),i.jsx("div",{className:"subsection-title",children:"Watermark Setting"}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"워터마크 불러오기"}),i.jsx("div",{className:"setting-control",children:i.jsxs("div",{className:"folder-path-control",children:[i.jsx("input",{type:"text",className:"text-input path-input",placeholder:"워터마크 파일을 선택하세요",value:a.watermarkFile,readOnly:!0}),i.jsx("button",{className:"file-btn",children:"📂 파일 열기"})]})})]}),i.jsxs("div",{className:"setting-row",children:[i.jsx("div",{className:"setting-label",children:"Add Watermark to Print"}),i.jsxs("div",{className:"setting-control",children:[i.jsx("div",{className:`toggle ${a.addWatermarkToPrint?"active":""}`,onClick:()=>m("addWatermarkToPrint",!a.addWatermarkToPrint)}),i.jsx("span",{className:"toggle-label",children:a.addWatermarkToPrint?"ON":"OFF"})]})]}),a.addWatermarkToPrint&&i.jsxs("div",{className:"setting-row",style:{background:"#fef3c7"},children:[i.jsxs("div",{className:"setting-label",children:["Watermark Layout",i.jsx("small",{children:"워터마크 반복 배치"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("div",{className:"radio-group",children:["1x1","2x2","3x3","4x3","3x4","4x4","5x5"].map(u=>i.jsxs("div",{className:`radio-item ${a.watermarkLayout===u?"selected":""}`,onClick:()=>m("watermarkLayout",u),children:[i.jsx("div",{className:"radio-dot"}),u]},u))})})]})]}),n==="assay"&&i.jsxs("div",{className:"assay-container",children:[i.jsxs("div",{className:"assay-panel",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("h3",{children:"Assay 목록"}),i.jsxs("div",{className:"search-box",children:[i.jsx("span",{children:"🔍"}),i.jsx("input",{type:"text",placeholder:"Assay 검색...",value:a.assaySearch,onChange:u=>m("assaySearch",u.target.value)})]})]}),i.jsx("div",{className:"data-table",children:i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Assay Name"}),i.jsx("th",{children:"Intended Use"}),i.jsx("th",{children:"Assay Code"})]})}),i.jsx("tbody",{children:a.assayList.filter(u=>u.name.toLowerCase().includes(a.assaySearch.toLowerCase())).map(u=>i.jsxs("tr",{className:a.selectedAssay===u.id?"selected":"",onClick:()=>m("selectedAssay",u.id),style:{cursor:"pointer"},children:[i.jsx("td",{children:u.name}),i.jsx("td",{children:i.jsx("span",{className:"badge",children:u.intendedUse})}),i.jsx("td",{children:i.jsx("input",{type:"text",className:"inline-input",value:u.assayCode,onChange:T=>{const A=a.assayList.map(F=>F.id===u.id?{...F,assayCode:T.target.value}:F);m("assayList",A)},onClick:T=>T.stopPropagation()})})]},u.id))})]})})]}),i.jsxs("div",{className:"assay-panel",children:[i.jsxs("div",{className:"panel-header",children:[i.jsx("h3",{children:"Target 목록"}),i.jsx("span",{className:"panel-subtitle",children:a.selectedAssay?(_=a.assayList.find(u=>u.id===a.selectedAssay))==null?void 0:_.name:"Assay를 선택하세요"})]}),i.jsx("div",{className:"data-table",children:a.selectedAssay?i.jsxs("table",{children:[i.jsx("thead",{children:i.jsxs("tr",{children:[i.jsx("th",{children:"Channel"}),i.jsx("th",{children:"Dye"}),i.jsx("th",{children:"Target"}),i.jsx("th",{children:"Target Code"})]})}),i.jsx("tbody",{children:(z=a.assayList.find(u=>u.id===a.selectedAssay))==null?void 0:z.targets.map(u=>i.jsxs("tr",{children:[i.jsx("td",{children:u.channel}),i.jsx("td",{children:i.jsx("span",{className:"badge dye",children:u.dye})}),i.jsx("td",{children:u.target}),i.jsx("td",{children:i.jsx("input",{type:"text",className:"inline-input",value:u.targetCode,onChange:T=>{const A=a.assayList.map(F=>F.id===a.selectedAssay?{...F,targets:F.targets.map(_e=>_e.id===u.id?{..._e,targetCode:T.target.value}:_e)}:F);m("assayList",A)}})})]},u.id))})]}):i.jsxs("div",{className:"empty-state",children:[i.jsx("div",{className:"empty-icon",children:"👆"}),i.jsxs("p",{children:["위 Assay 목록에서 항목을 선택하면",i.jsx("br",{}),"해당 Assay의 Target 목록이 표시됩니다."]})]})})]})]})]}),i.jsxs("div",{className:"tab-content-footer",children:[i.jsxs("div",{className:"footer-status",children:[l&&i.jsx("span",{className:"status-unsaved",children:"● 저장되지 않은 변경사항"}),x&&i.jsx("span",{className:"status-success",children:"✓ 설정 변경이 완료되었습니다"})]}),i.jsx("div",{className:"footer-buttons",children:i.jsx("button",{className:"btn btn-primary",onClick:b,disabled:!l,children:"저장"})})]})]})]}),o&&i.jsx("div",{className:"alert-overlay",children:i.jsxs("div",{className:"alert-modal",children:[i.jsx("h3",{children:"⚠️ 저장되지 않은 변경사항"}),i.jsxs("p",{children:["현재 탭에 저장되지 않은 변경사항이 있습니다.",i.jsx("br",{}),"저장하지 않고 이동하면 변경 내용이 사라집니다."]}),i.jsxs("div",{className:"alert-buttons",children:[i.jsx("button",{className:"btn btn-secondary",onClick:()=>c(!1),children:"취소"}),i.jsx("button",{className:"btn btn-danger",onClick:P,children:"저장 안 함"}),i.jsx("button",{className:"btn btn-primary",onClick:L,children:"저장 후 이동"})]})]})}),g&&i.jsx("div",{className:"alert-overlay",children:i.jsxs("div",{className:"alert-modal",children:[i.jsx("h3",{children:"🔔 분석 탭 닫힘 안내"}),i.jsxs("p",{children:["변경된 설정을 적용하면 현재 열려있는",i.jsx("br",{}),i.jsx("strong",{children:"모든 분석 탭이 닫힙니다."})]}),i.jsxs("div",{className:"changed-settings-list",children:[i.jsx("div",{className:"changed-settings-title",children:"변경된 설정 항목:"}),i.jsxs("ul",{children:[a.pcrRawDataType!==w.current.pcrRawDataType&&i.jsx("li",{children:"PCR Raw Data Type (PCR 장비 SW설정)"}),a.sampleId!==w.current.sampleId&&i.jsx("li",{children:"Sample ID"}),a.resultView!==w.current.resultView&&i.jsx("li",{children:"Result View"}),a.ctValueDigit!==w.current.ctValueDigit&&i.jsx("li",{children:"C(t) Value Digit"}),a.sampleIndexSetting!==w.current.sampleIndexSetting&&i.jsx("li",{children:"Sample Index Setting"}),N&&i.jsx("li",{children:"Target on/off"})]})]}),i.jsxs("div",{className:"alert-buttons",children:[i.jsx("button",{className:"btn btn-secondary",onClick:wt,children:"취소"}),i.jsx("button",{className:"btn btn-primary",onClick:yt,children:"확인 후 저장"})]})]})})]})]}):i.jsx("div",{style:{padding:40,textAlign:"center"},children:i.jsx("button",{onClick:()=>t(!0),style:{padding:"12px 24px",fontSize:16,cursor:"pointer",background:"#3b82f6",color:"white",border:"none",borderRadius:8},children:"⚙️ Settings 열기"})})}Kl.createRoot(document.getElementById("root")).render(i.jsx(ea.StrictMode,{children:i.jsx(zf,{})}));
