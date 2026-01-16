(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Rc(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var co={exports:{}},ml={},fo={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ur=Symbol.for("react.element"),Oc=Symbol.for("react.portal"),Mc=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),Vc=Symbol.for("react.profiler"),Wc=Symbol.for("react.provider"),Uc=Symbol.for("react.context"),$c=Symbol.for("react.forward_ref"),Hc=Symbol.for("react.suspense"),Qc=Symbol.for("react.memo"),Kc=Symbol.for("react.lazy"),ta=Symbol.iterator;function Xc(e){return e===null||typeof e!="object"?null:(e=ta&&e[ta]||e["@@iterator"],typeof e=="function"?e:null)}var po={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ho=Object.assign,mo={};function jn(e,t,n){this.props=e,this.context=t,this.refs=mo,this.updater=n||po}jn.prototype.isReactComponent={};jn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};jn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function go(){}go.prototype=jn.prototype;function Js(e,t,n){this.props=e,this.context=t,this.refs=mo,this.updater=n||po}var qs=Js.prototype=new go;qs.constructor=Js;ho(qs,jn.prototype);qs.isPureReactComponent=!0;var na=Array.isArray,xo=Object.prototype.hasOwnProperty,ei={current:null},vo={key:!0,ref:!0,__self:!0,__source:!0};function yo(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)xo.call(t,r)&&!vo.hasOwnProperty(r)&&(s[r]=t[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var d=Array(u),p=0;p<u;p++)d[p]=arguments[p+2];s.children=d}if(e&&e.defaultProps)for(r in u=e.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return{$$typeof:ur,type:e,key:i,ref:a,props:s,_owner:ei.current}}function Yc(e,t){return{$$typeof:ur,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ti(e){return typeof e=="object"&&e!==null&&e.$$typeof===ur}function Gc(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ra=/\/+/g;function Fl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gc(""+e.key):t.toString(36)}function Fr(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ur:case Oc:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+Fl(a,0):r,na(s)?(n="",e!=null&&(n=e.replace(ra,"$&/")+"/"),Fr(s,t,n,"",function(p){return p})):s!=null&&(ti(s)&&(s=Yc(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(ra,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",na(e))for(var u=0;u<e.length;u++){i=e[u];var d=r+Fl(i,u);a+=Fr(i,t,n,d,s)}else if(d=Xc(e),typeof d=="function")for(e=d.call(e),u=0;!(i=e.next()).done;)i=i.value,d=r+Fl(i,u++),a+=Fr(i,t,n,d,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function gr(e,t,n){if(e==null)return e;var r=[],s=0;return Fr(e,r,"","",function(i){return t.call(n,i,s++)}),r}function Zc(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},Ir={transition:null},Jc={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:Ir,ReactCurrentOwner:ei};function jo(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:gr,forEach:function(e,t,n){gr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return gr(e,function(){t++}),t},toArray:function(e){return gr(e,function(t){return t})||[]},only:function(e){if(!ti(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=jn;R.Fragment=Mc;R.Profiler=Vc;R.PureComponent=Js;R.StrictMode=Bc;R.Suspense=Hc;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc;R.act=jo;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=ho({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=ei.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(d in t)xo.call(t,d)&&!vo.hasOwnProperty(d)&&(r[d]=t[d]===void 0&&u!==void 0?u[d]:t[d])}var d=arguments.length-2;if(d===1)r.children=n;else if(1<d){u=Array(d);for(var p=0;p<d;p++)u[p]=arguments[p+2];r.children=u}return{$$typeof:ur,type:e.type,key:s,ref:i,props:r,_owner:a}};R.createContext=function(e){return e={$$typeof:Uc,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wc,_context:e},e.Consumer=e};R.createElement=yo;R.createFactory=function(e){var t=yo.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:$c,render:e}};R.isValidElement=ti;R.lazy=function(e){return{$$typeof:Kc,_payload:{_status:-1,_result:e},_init:Zc}};R.memo=function(e,t){return{$$typeof:Qc,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=Ir.transition;Ir.transition={};try{e()}finally{Ir.transition=t}};R.unstable_act=jo;R.useCallback=function(e,t){return ge.current.useCallback(e,t)};R.useContext=function(e){return ge.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};R.useEffect=function(e,t){return ge.current.useEffect(e,t)};R.useId=function(){return ge.current.useId()};R.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return ge.current.useMemo(e,t)};R.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};R.useRef=function(e){return ge.current.useRef(e)};R.useState=function(e){return ge.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return ge.current.useTransition()};R.version="18.3.1";fo.exports=R;var Q=fo.exports;const wo=Rc(Q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qc=Q,ed=Symbol.for("react.element"),td=Symbol.for("react.fragment"),nd=Object.prototype.hasOwnProperty,rd=qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ld={key:!0,ref:!0,__self:!0,__source:!0};function ko(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)nd.call(t,r)&&!ld.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:ed,type:e,key:i,ref:a,props:s,_owner:rd.current}}ml.Fragment=td;ml.jsx=ko;ml.jsxs=ko;co.exports=ml;var l=co.exports,ss={},So={exports:{}},Pe={},No={exports:{}},bo={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,D){var k=E.length;E.push(D);e:for(;0<k;){var X=k-1>>>1,c=E[X];if(0<s(c,D))E[X]=D,E[k]=c,k=X;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var D=E[0],k=E.pop();if(k!==D){E[0]=k;e:for(var X=0,c=E.length,ze=c>>>1;X<ze;){var ot=2*(X+1)-1,Qt=E[ot],L=ot+1,Lt=E[L];if(0>s(Qt,k))L<c&&0>s(Lt,Qt)?(E[X]=Lt,E[L]=k,X=L):(E[X]=Qt,E[ot]=k,X=ot);else if(L<c&&0>s(Lt,k))E[X]=Lt,E[L]=k,X=L;else break e}}return D}function s(E,D){var k=E.sortIndex-D.sortIndex;return k!==0?k:E.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,u=a.now();e.unstable_now=function(){return a.now()-u}}var d=[],p=[],y=1,x=null,g=3,N=!1,j=!1,b=!1,V=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var D=n(p);D!==null;){if(D.callback===null)r(p);else if(D.startTime<=E)r(p),D.sortIndex=D.expirationTime,t(d,D);else break;D=n(p)}}function w(E){if(b=!1,m(E),!j)if(n(d)!==null)j=!0,Sn(C);else{var D=n(p);D!==null&&Ht(w,D.startTime-E)}}function C(E,D){j=!1,b&&(b=!1,h(F),F=-1),N=!0;var k=g;try{for(m(D),x=n(d);x!==null&&(!(x.expirationTime>D)||E&&!pe());){var X=x.callback;if(typeof X=="function"){x.callback=null,g=x.priorityLevel;var c=X(x.expirationTime<=D);D=e.unstable_now(),typeof c=="function"?x.callback=c:x===n(d)&&r(d),m(D)}else r(d);x=n(d)}if(x!==null)var ze=!0;else{var ot=n(p);ot!==null&&Ht(w,ot.startTime-D),ze=!1}return ze}finally{x=null,g=k,N=!1}}var P=!1,z=null,F=-1,H=5,A=-1;function pe(){return!(e.unstable_now()-A<H)}function Pt(){if(z!==null){var E=e.unstable_now();A=E;var D=!0;try{D=z(!0,E)}finally{D?at():(P=!1,z=null)}}else P=!1}var at;if(typeof f=="function")at=function(){f(Pt)};else if(typeof MessageChannel<"u"){var hr=new MessageChannel,mr=hr.port2;hr.port1.onmessage=Pt,at=function(){mr.postMessage(null)}}else at=function(){V(Pt,0)};function Sn(E){z=E,P||(P=!0,at())}function Ht(E,D){F=V(function(){E(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){j||N||(j=!0,Sn(C))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(d)},e.unstable_next=function(E){switch(g){case 1:case 2:case 3:var D=3;break;default:D=g}var k=g;g=D;try{return E()}finally{g=k}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var k=g;g=E;try{return D()}finally{g=k}},e.unstable_scheduleCallback=function(E,D,k){var X=e.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?X+k:X):k=X,E){case 1:var c=-1;break;case 2:c=250;break;case 5:c=1073741823;break;case 4:c=1e4;break;default:c=5e3}return c=k+c,E={id:y++,callback:D,priorityLevel:E,startTime:k,expirationTime:c,sortIndex:-1},k>X?(E.sortIndex=k,t(p,E),n(d)===null&&E===n(p)&&(b?(h(F),F=-1):b=!0,Ht(w,k-X))):(E.sortIndex=c,t(d,E),j||N||(j=!0,Sn(C))),E},e.unstable_shouldYield=pe,e.unstable_wrapCallback=function(E){var D=g;return function(){var k=g;g=D;try{return E.apply(this,arguments)}finally{g=k}}}})(bo);No.exports=bo;var sd=No.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var id=Q,Te=sd;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Co=new Set,Qn={};function Ut(e,t){pn(e,t),pn(e+"Capture",t)}function pn(e,t){for(Qn[e]=t,e=0;e<t.length;e++)Co.add(t[e])}var nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),is=Object.prototype.hasOwnProperty,ad=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la={},sa={};function od(e){return is.call(sa,e)?!0:is.call(la,e)?!1:ad.test(e)?sa[e]=!0:(la[e]=!0,!1)}function ud(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function cd(e,t,n,r){if(t===null||typeof t>"u"||ud(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function xe(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var oe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){oe[e]=new xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];oe[t]=new xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){oe[e]=new xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){oe[e]=new xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){oe[e]=new xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){oe[e]=new xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){oe[e]=new xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){oe[e]=new xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){oe[e]=new xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var ni=/[\-:]([a-z])/g;function ri(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ni,ri);oe[t]=new xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ni,ri);oe[t]=new xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ni,ri);oe[t]=new xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){oe[e]=new xe(e,1,!1,e.toLowerCase(),null,!1,!1)});oe.xlinkHref=new xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){oe[e]=new xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function li(e,t,n,r){var s=oe.hasOwnProperty(t)?oe[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(cd(t,n,s,r)&&(n=null),r||s===null?od(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var it=id.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xr=Symbol.for("react.element"),Xt=Symbol.for("react.portal"),Yt=Symbol.for("react.fragment"),si=Symbol.for("react.strict_mode"),as=Symbol.for("react.profiler"),Eo=Symbol.for("react.provider"),To=Symbol.for("react.context"),ii=Symbol.for("react.forward_ref"),os=Symbol.for("react.suspense"),us=Symbol.for("react.suspense_list"),ai=Symbol.for("react.memo"),ct=Symbol.for("react.lazy"),Po=Symbol.for("react.offscreen"),ia=Symbol.iterator;function bn(e){return e===null||typeof e!="object"?null:(e=ia&&e[ia]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,Il;function Fn(e){if(Il===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Il=t&&t[1]||""}return`
`+Il+e}var Dl=!1;function Al(e,t){if(!e||Dl)return"";Dl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var r=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){r=p}e.call(t.prototype)}else{try{throw Error()}catch(p){r=p}e()}}catch(p){if(p&&r&&typeof p.stack=="string"){for(var s=p.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,u=i.length-1;1<=a&&0<=u&&s[a]!==i[u];)u--;for(;1<=a&&0<=u;a--,u--)if(s[a]!==i[u]){if(a!==1||u!==1)do if(a--,u--,0>u||s[a]!==i[u]){var d=`
`+s[a].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=a&&0<=u);break}}}finally{Dl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fn(e):""}function dd(e){switch(e.tag){case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 2:case 15:return e=Al(e.type,!1),e;case 11:return e=Al(e.type.render,!1),e;case 1:return e=Al(e.type,!0),e;default:return""}}function cs(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yt:return"Fragment";case Xt:return"Portal";case as:return"Profiler";case si:return"StrictMode";case os:return"Suspense";case us:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case To:return(e.displayName||"Context")+".Consumer";case Eo:return(e._context.displayName||"Context")+".Provider";case ii:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ai:return t=e.displayName||null,t!==null?t:cs(e.type)||"Memo";case ct:t=e._payload,e=e._init;try{return cs(e(t))}catch{}}return null}function fd(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cs(t);case 8:return t===si?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Nt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Lo(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function pd(e){var t=Lo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function vr(e){e._valueTracker||(e._valueTracker=pd(e))}function zo(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Lo(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Hr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ds(e,t){var n=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function aa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Nt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _o(e,t){t=t.checked,t!=null&&li(e,"checked",t,!1)}function fs(e,t){_o(e,t);var n=Nt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ps(e,t.type,n):t.hasOwnProperty("defaultValue")&&ps(e,t.type,Nt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function oa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ps(e,t,n){(t!=="number"||Hr(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var In=Array.isArray;function an(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Nt(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function hs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ua(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(In(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Nt(n)}}function Fo(e,t){var n=Nt(t.value),r=Nt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Io(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ms(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Io(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var yr,Do=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(yr=yr||document.createElement("div"),yr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=yr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Kn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Rn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hd=["Webkit","ms","Moz","O"];Object.keys(Rn).forEach(function(e){hd.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Rn[t]=Rn[e]})});function Ao(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Rn.hasOwnProperty(e)&&Rn[e]?(""+t).trim():t+"px"}function Ro(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ao(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var md=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gs(e,t){if(t){if(md[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function xs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vs=null;function oi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ys=null,on=null,un=null;function da(e){if(e=fr(e)){if(typeof ys!="function")throw Error(S(280));var t=e.stateNode;t&&(t=jl(t),ys(e.stateNode,e.type,t))}}function Oo(e){on?un?un.push(e):un=[e]:on=e}function Mo(){if(on){var e=on,t=un;if(un=on=null,da(e),t)for(e=0;e<t.length;e++)da(t[e])}}function Bo(e,t){return e(t)}function Vo(){}var Rl=!1;function Wo(e,t,n){if(Rl)return e(t,n);Rl=!0;try{return Bo(e,t,n)}finally{Rl=!1,(on!==null||un!==null)&&(Vo(),Mo())}}function Xn(e,t){var n=e.stateNode;if(n===null)return null;var r=jl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var js=!1;if(nt)try{var Cn={};Object.defineProperty(Cn,"passive",{get:function(){js=!0}}),window.addEventListener("test",Cn,Cn),window.removeEventListener("test",Cn,Cn)}catch{js=!1}function gd(e,t,n,r,s,i,a,u,d){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(y){this.onError(y)}}var On=!1,Qr=null,Kr=!1,ws=null,xd={onError:function(e){On=!0,Qr=e}};function vd(e,t,n,r,s,i,a,u,d){On=!1,Qr=null,gd.apply(xd,arguments)}function yd(e,t,n,r,s,i,a,u,d){if(vd.apply(this,arguments),On){if(On){var p=Qr;On=!1,Qr=null}else throw Error(S(198));Kr||(Kr=!0,ws=p)}}function $t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Uo(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fa(e){if($t(e)!==e)throw Error(S(188))}function jd(e){var t=e.alternate;if(!t){if(t=$t(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return fa(s),e;if(i===r)return fa(s),t;i=i.sibling}throw Error(S(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,u=s.child;u;){if(u===n){a=!0,n=s,r=i;break}if(u===r){a=!0,r=s,n=i;break}u=u.sibling}if(!a){for(u=i.child;u;){if(u===n){a=!0,n=i,r=s;break}if(u===r){a=!0,r=i,n=s;break}u=u.sibling}if(!a)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function $o(e){return e=jd(e),e!==null?Ho(e):null}function Ho(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ho(e);if(t!==null)return t;e=e.sibling}return null}var Qo=Te.unstable_scheduleCallback,pa=Te.unstable_cancelCallback,wd=Te.unstable_shouldYield,kd=Te.unstable_requestPaint,q=Te.unstable_now,Sd=Te.unstable_getCurrentPriorityLevel,ui=Te.unstable_ImmediatePriority,Ko=Te.unstable_UserBlockingPriority,Xr=Te.unstable_NormalPriority,Nd=Te.unstable_LowPriority,Xo=Te.unstable_IdlePriority,gl=null,Xe=null;function bd(e){if(Xe&&typeof Xe.onCommitFiberRoot=="function")try{Xe.onCommitFiberRoot(gl,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Td,Cd=Math.log,Ed=Math.LN2;function Td(e){return e>>>=0,e===0?32:31-(Cd(e)/Ed|0)|0}var jr=64,wr=4194304;function Dn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Yr(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var u=a&~s;u!==0?r=Dn(u):(i&=a,i!==0&&(r=Dn(i)))}else a=n&~s,a!==0?r=Dn(a):i!==0&&(r=Dn(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),s=1<<n,r|=e[n],t&=~s;return r}function Pd(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ld(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-We(i),u=1<<a,d=s[a];d===-1?(!(u&n)||u&r)&&(s[a]=Pd(u,t)):d<=t&&(e.expiredLanes|=u),i&=~u}}function ks(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Yo(){var e=jr;return jr<<=1,!(jr&4194240)&&(jr=64),e}function Ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function cr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function zd(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-We(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function ci(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var B=0;function Go(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Zo,di,Jo,qo,eu,Ss=!1,kr=[],gt=null,xt=null,vt=null,Yn=new Map,Gn=new Map,ft=[],_d="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ha(e,t){switch(e){case"focusin":case"focusout":gt=null;break;case"dragenter":case"dragleave":xt=null;break;case"mouseover":case"mouseout":vt=null;break;case"pointerover":case"pointerout":Yn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gn.delete(t.pointerId)}}function En(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=fr(t),t!==null&&di(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function Fd(e,t,n,r,s){switch(t){case"focusin":return gt=En(gt,e,t,n,r,s),!0;case"dragenter":return xt=En(xt,e,t,n,r,s),!0;case"mouseover":return vt=En(vt,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return Yn.set(i,En(Yn.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,Gn.set(i,En(Gn.get(i)||null,e,t,n,r,s)),!0}return!1}function tu(e){var t=Ft(e.target);if(t!==null){var n=$t(t);if(n!==null){if(t=n.tag,t===13){if(t=Uo(n),t!==null){e.blockedOn=t,eu(e.priority,function(){Jo(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dr(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Ns(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);vs=r,n.target.dispatchEvent(r),vs=null}else return t=fr(n),t!==null&&di(t),e.blockedOn=n,!1;t.shift()}return!0}function ma(e,t,n){Dr(e)&&n.delete(t)}function Id(){Ss=!1,gt!==null&&Dr(gt)&&(gt=null),xt!==null&&Dr(xt)&&(xt=null),vt!==null&&Dr(vt)&&(vt=null),Yn.forEach(ma),Gn.forEach(ma)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ss||(Ss=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Id)))}function Zn(e){function t(s){return Tn(s,e)}if(0<kr.length){Tn(kr[0],e);for(var n=1;n<kr.length;n++){var r=kr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(gt!==null&&Tn(gt,e),xt!==null&&Tn(xt,e),vt!==null&&Tn(vt,e),Yn.forEach(t),Gn.forEach(t),n=0;n<ft.length;n++)r=ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ft.length&&(n=ft[0],n.blockedOn===null);)tu(n),n.blockedOn===null&&ft.shift()}var cn=it.ReactCurrentBatchConfig,Gr=!0;function Dd(e,t,n,r){var s=B,i=cn.transition;cn.transition=null;try{B=1,fi(e,t,n,r)}finally{B=s,cn.transition=i}}function Ad(e,t,n,r){var s=B,i=cn.transition;cn.transition=null;try{B=4,fi(e,t,n,r)}finally{B=s,cn.transition=i}}function fi(e,t,n,r){if(Gr){var s=Ns(e,t,n,r);if(s===null)Xl(e,t,r,Zr,n),ha(e,r);else if(Fd(s,e,t,n,r))r.stopPropagation();else if(ha(e,r),t&4&&-1<_d.indexOf(e)){for(;s!==null;){var i=fr(s);if(i!==null&&Zo(i),i=Ns(e,t,n,r),i===null&&Xl(e,t,r,Zr,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Xl(e,t,r,null,n)}}var Zr=null;function Ns(e,t,n,r){if(Zr=null,e=oi(r),e=Ft(e),e!==null)if(t=$t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Uo(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zr=e,null}function nu(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sd()){case ui:return 1;case Ko:return 4;case Xr:case Nd:return 16;case Xo:return 536870912;default:return 16}default:return 16}}var ht=null,pi=null,Ar=null;function ru(){if(Ar)return Ar;var e,t=pi,n=t.length,r,s="value"in ht?ht.value:ht.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Ar=s.slice(e,1<r?1-r:void 0)}function Rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Sr(){return!0}function ga(){return!1}function Le(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(n=e[u],this[u]=n?n(i):i[u]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Sr:ga,this.isPropagationStopped=ga,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Sr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Sr)},persist:function(){},isPersistent:Sr}),t}var wn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hi=Le(wn),dr=Z({},wn,{view:0,detail:0}),Rd=Le(dr),Ml,Bl,Pn,xl=Z({},dr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mi,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Pn&&(Pn&&e.type==="mousemove"?(Ml=e.screenX-Pn.screenX,Bl=e.screenY-Pn.screenY):Bl=Ml=0,Pn=e),Ml)},movementY:function(e){return"movementY"in e?e.movementY:Bl}}),xa=Le(xl),Od=Z({},xl,{dataTransfer:0}),Md=Le(Od),Bd=Z({},dr,{relatedTarget:0}),Vl=Le(Bd),Vd=Z({},wn,{animationName:0,elapsedTime:0,pseudoElement:0}),Wd=Le(Vd),Ud=Z({},wn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$d=Le(Ud),Hd=Z({},wn,{data:0}),va=Le(Hd),Qd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yd(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Xd[e])?!!t[e]:!1}function mi(){return Yd}var Gd=Z({},dr,{key:function(e){if(e.key){var t=Qd[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kd[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mi,charCode:function(e){return e.type==="keypress"?Rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zd=Le(Gd),Jd=Z({},xl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ya=Le(Jd),qd=Z({},dr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mi}),ef=Le(qd),tf=Z({},wn,{propertyName:0,elapsedTime:0,pseudoElement:0}),nf=Le(tf),rf=Z({},xl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lf=Le(rf),sf=[9,13,27,32],gi=nt&&"CompositionEvent"in window,Mn=null;nt&&"documentMode"in document&&(Mn=document.documentMode);var af=nt&&"TextEvent"in window&&!Mn,lu=nt&&(!gi||Mn&&8<Mn&&11>=Mn),ja=" ",wa=!1;function su(e,t){switch(e){case"keyup":return sf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function iu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gt=!1;function of(e,t){switch(e){case"compositionend":return iu(t);case"keypress":return t.which!==32?null:(wa=!0,ja);case"textInput":return e=t.data,e===ja&&wa?null:e;default:return null}}function uf(e,t){if(Gt)return e==="compositionend"||!gi&&su(e,t)?(e=ru(),Ar=pi=ht=null,Gt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return lu&&t.locale!=="ko"?null:t.data;default:return null}}var cf={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ka(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cf[e.type]:t==="textarea"}function au(e,t,n,r){Oo(r),t=Jr(t,"onChange"),0<t.length&&(n=new hi("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Bn=null,Jn=null;function df(e){vu(e,0)}function vl(e){var t=qt(e);if(zo(t))return e}function ff(e,t){if(e==="change")return t}var ou=!1;if(nt){var Wl;if(nt){var Ul="oninput"in document;if(!Ul){var Sa=document.createElement("div");Sa.setAttribute("oninput","return;"),Ul=typeof Sa.oninput=="function"}Wl=Ul}else Wl=!1;ou=Wl&&(!document.documentMode||9<document.documentMode)}function Na(){Bn&&(Bn.detachEvent("onpropertychange",uu),Jn=Bn=null)}function uu(e){if(e.propertyName==="value"&&vl(Jn)){var t=[];au(t,Jn,e,oi(e)),Wo(df,t)}}function pf(e,t,n){e==="focusin"?(Na(),Bn=t,Jn=n,Bn.attachEvent("onpropertychange",uu)):e==="focusout"&&Na()}function hf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vl(Jn)}function mf(e,t){if(e==="click")return vl(t)}function gf(e,t){if(e==="input"||e==="change")return vl(t)}function xf(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:xf;function qn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!is.call(t,s)||!$e(e[s],t[s]))return!1}return!0}function ba(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ca(e,t){var n=ba(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ba(n)}}function cu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?cu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function du(){for(var e=window,t=Hr();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Hr(e.document)}return t}function xi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vf(e){var t=du(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&cu(n.ownerDocument.documentElement,n)){if(r!==null&&xi(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Ca(n,i);var a=Ca(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var yf=nt&&"documentMode"in document&&11>=document.documentMode,Zt=null,bs=null,Vn=null,Cs=!1;function Ea(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cs||Zt==null||Zt!==Hr(r)||(r=Zt,"selectionStart"in r&&xi(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Vn&&qn(Vn,r)||(Vn=r,r=Jr(bs,"onSelect"),0<r.length&&(t=new hi("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Zt)))}function Nr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Jt={animationend:Nr("Animation","AnimationEnd"),animationiteration:Nr("Animation","AnimationIteration"),animationstart:Nr("Animation","AnimationStart"),transitionend:Nr("Transition","TransitionEnd")},$l={},fu={};nt&&(fu=document.createElement("div").style,"AnimationEvent"in window||(delete Jt.animationend.animation,delete Jt.animationiteration.animation,delete Jt.animationstart.animation),"TransitionEvent"in window||delete Jt.transitionend.transition);function yl(e){if($l[e])return $l[e];if(!Jt[e])return e;var t=Jt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in fu)return $l[e]=t[n];return e}var pu=yl("animationend"),hu=yl("animationiteration"),mu=yl("animationstart"),gu=yl("transitionend"),xu=new Map,Ta="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ct(e,t){xu.set(e,t),Ut(t,[e])}for(var Hl=0;Hl<Ta.length;Hl++){var Ql=Ta[Hl],jf=Ql.toLowerCase(),wf=Ql[0].toUpperCase()+Ql.slice(1);Ct(jf,"on"+wf)}Ct(pu,"onAnimationEnd");Ct(hu,"onAnimationIteration");Ct(mu,"onAnimationStart");Ct("dblclick","onDoubleClick");Ct("focusin","onFocus");Ct("focusout","onBlur");Ct(gu,"onTransitionEnd");pn("onMouseEnter",["mouseout","mouseover"]);pn("onMouseLeave",["mouseout","mouseover"]);pn("onPointerEnter",["pointerout","pointerover"]);pn("onPointerLeave",["pointerout","pointerover"]);Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var An="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kf=new Set("cancel close invalid load scroll toggle".split(" ").concat(An));function Pa(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,yd(r,t,void 0,e),e.currentTarget=null}function vu(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var u=r[a],d=u.instance,p=u.currentTarget;if(u=u.listener,d!==i&&s.isPropagationStopped())break e;Pa(s,u,p),i=d}else for(a=0;a<r.length;a++){if(u=r[a],d=u.instance,p=u.currentTarget,u=u.listener,d!==i&&s.isPropagationStopped())break e;Pa(s,u,p),i=d}}}if(Kr)throw e=ws,Kr=!1,ws=null,e}function U(e,t){var n=t[zs];n===void 0&&(n=t[zs]=new Set);var r=e+"__bubble";n.has(r)||(yu(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),yu(n,e,r,t)}var br="_reactListening"+Math.random().toString(36).slice(2);function er(e){if(!e[br]){e[br]=!0,Co.forEach(function(n){n!=="selectionchange"&&(kf.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[br]||(t[br]=!0,Kl("selectionchange",!1,t))}}function yu(e,t,n,r){switch(nu(t)){case 1:var s=Dd;break;case 4:s=Ad;break;default:s=fi}n=s.bind(null,t,n,e),s=void 0,!js||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Xl(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var u=r.stateNode.containerInfo;if(u===s||u.nodeType===8&&u.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var d=a.tag;if((d===3||d===4)&&(d=a.stateNode.containerInfo,d===s||d.nodeType===8&&d.parentNode===s))return;a=a.return}for(;u!==null;){if(a=Ft(u),a===null)return;if(d=a.tag,d===5||d===6){r=i=a;continue e}u=u.parentNode}}r=r.return}Wo(function(){var p=i,y=oi(n),x=[];e:{var g=xu.get(e);if(g!==void 0){var N=hi,j=e;switch(e){case"keypress":if(Rr(n)===0)break e;case"keydown":case"keyup":N=Zd;break;case"focusin":j="focus",N=Vl;break;case"focusout":j="blur",N=Vl;break;case"beforeblur":case"afterblur":N=Vl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":N=xa;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":N=Md;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":N=ef;break;case pu:case hu:case mu:N=Wd;break;case gu:N=nf;break;case"scroll":N=Rd;break;case"wheel":N=lf;break;case"copy":case"cut":case"paste":N=$d;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":N=ya}var b=(t&4)!==0,V=!b&&e==="scroll",h=b?g!==null?g+"Capture":null:g;b=[];for(var f=p,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,h!==null&&(w=Xn(f,h),w!=null&&b.push(tr(f,w,m)))),V)break;f=f.return}0<b.length&&(g=new N(g,j,null,n,y),x.push({event:g,listeners:b}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",N=e==="mouseout"||e==="pointerout",g&&n!==vs&&(j=n.relatedTarget||n.fromElement)&&(Ft(j)||j[rt]))break e;if((N||g)&&(g=y.window===y?y:(g=y.ownerDocument)?g.defaultView||g.parentWindow:window,N?(j=n.relatedTarget||n.toElement,N=p,j=j?Ft(j):null,j!==null&&(V=$t(j),j!==V||j.tag!==5&&j.tag!==6)&&(j=null)):(N=null,j=p),N!==j)){if(b=xa,w="onMouseLeave",h="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(b=ya,w="onPointerLeave",h="onPointerEnter",f="pointer"),V=N==null?g:qt(N),m=j==null?g:qt(j),g=new b(w,f+"leave",N,n,y),g.target=V,g.relatedTarget=m,w=null,Ft(y)===p&&(b=new b(h,f+"enter",j,n,y),b.target=m,b.relatedTarget=V,w=b),V=w,N&&j)t:{for(b=N,h=j,f=0,m=b;m;m=Kt(m))f++;for(m=0,w=h;w;w=Kt(w))m++;for(;0<f-m;)b=Kt(b),f--;for(;0<m-f;)h=Kt(h),m--;for(;f--;){if(b===h||h!==null&&b===h.alternate)break t;b=Kt(b),h=Kt(h)}b=null}else b=null;N!==null&&La(x,g,N,b,!1),j!==null&&V!==null&&La(x,V,j,b,!0)}}e:{if(g=p?qt(p):window,N=g.nodeName&&g.nodeName.toLowerCase(),N==="select"||N==="input"&&g.type==="file")var C=ff;else if(ka(g))if(ou)C=gf;else{C=hf;var P=pf}else(N=g.nodeName)&&N.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(C=mf);if(C&&(C=C(e,p))){au(x,C,n,y);break e}P&&P(e,g,p),e==="focusout"&&(P=g._wrapperState)&&P.controlled&&g.type==="number"&&ps(g,"number",g.value)}switch(P=p?qt(p):window,e){case"focusin":(ka(P)||P.contentEditable==="true")&&(Zt=P,bs=p,Vn=null);break;case"focusout":Vn=bs=Zt=null;break;case"mousedown":Cs=!0;break;case"contextmenu":case"mouseup":case"dragend":Cs=!1,Ea(x,n,y);break;case"selectionchange":if(yf)break;case"keydown":case"keyup":Ea(x,n,y)}var z;if(gi)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Gt?su(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(lu&&n.locale!=="ko"&&(Gt||F!=="onCompositionStart"?F==="onCompositionEnd"&&Gt&&(z=ru()):(ht=y,pi="value"in ht?ht.value:ht.textContent,Gt=!0)),P=Jr(p,F),0<P.length&&(F=new va(F,e,null,n,y),x.push({event:F,listeners:P}),z?F.data=z:(z=iu(n),z!==null&&(F.data=z)))),(z=af?of(e,n):uf(e,n))&&(p=Jr(p,"onBeforeInput"),0<p.length&&(y=new va("onBeforeInput","beforeinput",null,n,y),x.push({event:y,listeners:p}),y.data=z))}vu(x,t)})}function tr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Xn(e,n),i!=null&&r.unshift(tr(e,i,s)),i=Xn(e,t),i!=null&&r.push(tr(e,i,s))),e=e.return}return r}function Kt(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function La(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var u=n,d=u.alternate,p=u.stateNode;if(d!==null&&d===r)break;u.tag===5&&p!==null&&(u=p,s?(d=Xn(n,i),d!=null&&a.unshift(tr(n,d,u))):s||(d=Xn(n,i),d!=null&&a.push(tr(n,d,u)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var Sf=/\r\n?/g,Nf=/\u0000|\uFFFD/g;function za(e){return(typeof e=="string"?e:""+e).replace(Sf,`
`).replace(Nf,"")}function Cr(e,t,n){if(t=za(t),za(e)!==t&&n)throw Error(S(425))}function qr(){}var Es=null,Ts=null;function Ps(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ls=typeof setTimeout=="function"?setTimeout:void 0,bf=typeof clearTimeout=="function"?clearTimeout:void 0,_a=typeof Promise=="function"?Promise:void 0,Cf=typeof queueMicrotask=="function"?queueMicrotask:typeof _a<"u"?function(e){return _a.resolve(null).then(e).catch(Ef)}:Ls;function Ef(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Zn(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Zn(t)}function yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Fa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var kn=Math.random().toString(36).slice(2),Ke="__reactFiber$"+kn,nr="__reactProps$"+kn,rt="__reactContainer$"+kn,zs="__reactEvents$"+kn,Tf="__reactListeners$"+kn,Pf="__reactHandles$"+kn;function Ft(e){var t=e[Ke];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rt]||n[Ke]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Fa(e);e!==null;){if(n=e[Ke])return n;e=Fa(e)}return t}e=n,n=e.parentNode}return null}function fr(e){return e=e[Ke]||e[rt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function jl(e){return e[nr]||null}var _s=[],en=-1;function Et(e){return{current:e}}function $(e){0>en||(e.current=_s[en],_s[en]=null,en--)}function W(e,t){en++,_s[en]=e.current,e.current=t}var bt={},fe=Et(bt),we=Et(!1),Ot=bt;function hn(e,t){var n=e.type.contextTypes;if(!n)return bt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function ke(e){return e=e.childContextTypes,e!=null}function el(){$(we),$(fe)}function Ia(e,t,n){if(fe.current!==bt)throw Error(S(168));W(fe,t),W(we,n)}function ju(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(S(108,fd(e)||"Unknown",s));return Z({},n,r)}function tl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bt,Ot=fe.current,W(fe,e),W(we,we.current),!0}function Da(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=ju(e,t,Ot),r.__reactInternalMemoizedMergedChildContext=e,$(we),$(fe),W(fe,e)):$(we),W(we,n)}var Je=null,wl=!1,Gl=!1;function wu(e){Je===null?Je=[e]:Je.push(e)}function Lf(e){wl=!0,wu(e)}function Tt(){if(!Gl&&Je!==null){Gl=!0;var e=0,t=B;try{var n=Je;for(B=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Je=null,wl=!1}catch(s){throw Je!==null&&(Je=Je.slice(e+1)),Qo(ui,Tt),s}finally{B=t,Gl=!1}}return null}var tn=[],nn=0,nl=null,rl=0,_e=[],Fe=0,Mt=null,qe=1,et="";function zt(e,t){tn[nn++]=rl,tn[nn++]=nl,nl=e,rl=t}function ku(e,t,n){_e[Fe++]=qe,_e[Fe++]=et,_e[Fe++]=Mt,Mt=e;var r=qe;e=et;var s=32-We(r)-1;r&=~(1<<s),n+=1;var i=32-We(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,qe=1<<32-We(t)+s|n<<s|r,et=i+e}else qe=1<<i|n<<s|r,et=e}function vi(e){e.return!==null&&(zt(e,1),ku(e,1,0))}function yi(e){for(;e===nl;)nl=tn[--nn],tn[nn]=null,rl=tn[--nn],tn[nn]=null;for(;e===Mt;)Mt=_e[--Fe],_e[Fe]=null,et=_e[--Fe],_e[Fe]=null,qe=_e[--Fe],_e[Fe]=null}var Ee=null,Ce=null,K=!1,Ve=null;function Su(e,t){var n=Ie(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ee=e,Ce=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mt!==null?{id:qe,overflow:et}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ie(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ee=e,Ce=null,!0):!1;default:return!1}}function Fs(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Is(e){if(K){var t=Ce;if(t){var n=t;if(!Aa(e,t)){if(Fs(e))throw Error(S(418));t=yt(n.nextSibling);var r=Ee;t&&Aa(e,t)?Su(r,n):(e.flags=e.flags&-4097|2,K=!1,Ee=e)}}else{if(Fs(e))throw Error(S(418));e.flags=e.flags&-4097|2,K=!1,Ee=e}}}function Ra(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ee=e}function Er(e){if(e!==Ee)return!1;if(!K)return Ra(e),K=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ps(e.type,e.memoizedProps)),t&&(t=Ce)){if(Fs(e))throw Nu(),Error(S(418));for(;t;)Su(e,t),t=yt(t.nextSibling)}if(Ra(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Ce=yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Ce=null}}else Ce=Ee?yt(e.stateNode.nextSibling):null;return!0}function Nu(){for(var e=Ce;e;)e=yt(e.nextSibling)}function mn(){Ce=Ee=null,K=!1}function ji(e){Ve===null?Ve=[e]:Ve.push(e)}var zf=it.ReactCurrentBatchConfig;function Ln(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var u=s.refs;a===null?delete u[i]:u[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function Tr(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Oa(e){var t=e._init;return t(e._payload)}function bu(e){function t(h,f){if(e){var m=h.deletions;m===null?(h.deletions=[f],h.flags|=16):m.push(f)}}function n(h,f){if(!e)return null;for(;f!==null;)t(h,f),f=f.sibling;return null}function r(h,f){for(h=new Map;f!==null;)f.key!==null?h.set(f.key,f):h.set(f.index,f),f=f.sibling;return h}function s(h,f){return h=St(h,f),h.index=0,h.sibling=null,h}function i(h,f,m){return h.index=m,e?(m=h.alternate,m!==null?(m=m.index,m<f?(h.flags|=2,f):m):(h.flags|=2,f)):(h.flags|=1048576,f)}function a(h){return e&&h.alternate===null&&(h.flags|=2),h}function u(h,f,m,w){return f===null||f.tag!==6?(f=rs(m,h.mode,w),f.return=h,f):(f=s(f,m),f.return=h,f)}function d(h,f,m,w){var C=m.type;return C===Yt?y(h,f,m.props.children,w,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&Oa(C)===f.type)?(w=s(f,m.props),w.ref=Ln(h,f,m),w.return=h,w):(w=$r(m.type,m.key,m.props,null,h.mode,w),w.ref=Ln(h,f,m),w.return=h,w)}function p(h,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ls(m,h.mode,w),f.return=h,f):(f=s(f,m.children||[]),f.return=h,f)}function y(h,f,m,w,C){return f===null||f.tag!==7?(f=Rt(m,h.mode,w,C),f.return=h,f):(f=s(f,m),f.return=h,f)}function x(h,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=rs(""+f,h.mode,m),f.return=h,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case xr:return m=$r(f.type,f.key,f.props,null,h.mode,m),m.ref=Ln(h,null,f),m.return=h,m;case Xt:return f=ls(f,h.mode,m),f.return=h,f;case ct:var w=f._init;return x(h,w(f._payload),m)}if(In(f)||bn(f))return f=Rt(f,h.mode,m,null),f.return=h,f;Tr(h,f)}return null}function g(h,f,m,w){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:u(h,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:return m.key===C?d(h,f,m,w):null;case Xt:return m.key===C?p(h,f,m,w):null;case ct:return C=m._init,g(h,f,C(m._payload),w)}if(In(m)||bn(m))return C!==null?null:y(h,f,m,w,null);Tr(h,m)}return null}function N(h,f,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return h=h.get(m)||null,u(f,h,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case xr:return h=h.get(w.key===null?m:w.key)||null,d(f,h,w,C);case Xt:return h=h.get(w.key===null?m:w.key)||null,p(f,h,w,C);case ct:var P=w._init;return N(h,f,m,P(w._payload),C)}if(In(w)||bn(w))return h=h.get(m)||null,y(f,h,w,C,null);Tr(f,w)}return null}function j(h,f,m,w){for(var C=null,P=null,z=f,F=f=0,H=null;z!==null&&F<m.length;F++){z.index>F?(H=z,z=null):H=z.sibling;var A=g(h,z,m[F],w);if(A===null){z===null&&(z=H);break}e&&z&&A.alternate===null&&t(h,z),f=i(A,f,F),P===null?C=A:P.sibling=A,P=A,z=H}if(F===m.length)return n(h,z),K&&zt(h,F),C;if(z===null){for(;F<m.length;F++)z=x(h,m[F],w),z!==null&&(f=i(z,f,F),P===null?C=z:P.sibling=z,P=z);return K&&zt(h,F),C}for(z=r(h,z);F<m.length;F++)H=N(z,h,F,m[F],w),H!==null&&(e&&H.alternate!==null&&z.delete(H.key===null?F:H.key),f=i(H,f,F),P===null?C=H:P.sibling=H,P=H);return e&&z.forEach(function(pe){return t(h,pe)}),K&&zt(h,F),C}function b(h,f,m,w){var C=bn(m);if(typeof C!="function")throw Error(S(150));if(m=C.call(m),m==null)throw Error(S(151));for(var P=C=null,z=f,F=f=0,H=null,A=m.next();z!==null&&!A.done;F++,A=m.next()){z.index>F?(H=z,z=null):H=z.sibling;var pe=g(h,z,A.value,w);if(pe===null){z===null&&(z=H);break}e&&z&&pe.alternate===null&&t(h,z),f=i(pe,f,F),P===null?C=pe:P.sibling=pe,P=pe,z=H}if(A.done)return n(h,z),K&&zt(h,F),C;if(z===null){for(;!A.done;F++,A=m.next())A=x(h,A.value,w),A!==null&&(f=i(A,f,F),P===null?C=A:P.sibling=A,P=A);return K&&zt(h,F),C}for(z=r(h,z);!A.done;F++,A=m.next())A=N(z,h,F,A.value,w),A!==null&&(e&&A.alternate!==null&&z.delete(A.key===null?F:A.key),f=i(A,f,F),P===null?C=A:P.sibling=A,P=A);return e&&z.forEach(function(Pt){return t(h,Pt)}),K&&zt(h,F),C}function V(h,f,m,w){if(typeof m=="object"&&m!==null&&m.type===Yt&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case xr:e:{for(var C=m.key,P=f;P!==null;){if(P.key===C){if(C=m.type,C===Yt){if(P.tag===7){n(h,P.sibling),f=s(P,m.props.children),f.return=h,h=f;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===ct&&Oa(C)===P.type){n(h,P.sibling),f=s(P,m.props),f.ref=Ln(h,P,m),f.return=h,h=f;break e}n(h,P);break}else t(h,P);P=P.sibling}m.type===Yt?(f=Rt(m.props.children,h.mode,w,m.key),f.return=h,h=f):(w=$r(m.type,m.key,m.props,null,h.mode,w),w.ref=Ln(h,f,m),w.return=h,h=w)}return a(h);case Xt:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(h,f.sibling),f=s(f,m.children||[]),f.return=h,h=f;break e}else{n(h,f);break}else t(h,f);f=f.sibling}f=ls(m,h.mode,w),f.return=h,h=f}return a(h);case ct:return P=m._init,V(h,f,P(m._payload),w)}if(In(m))return j(h,f,m,w);if(bn(m))return b(h,f,m,w);Tr(h,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(h,f.sibling),f=s(f,m),f.return=h,h=f):(n(h,f),f=rs(m,h.mode,w),f.return=h,h=f),a(h)):n(h,f)}return V}var gn=bu(!0),Cu=bu(!1),ll=Et(null),sl=null,rn=null,wi=null;function ki(){wi=rn=sl=null}function Si(e){var t=ll.current;$(ll),e._currentValue=t}function Ds(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function dn(e,t){sl=e,wi=rn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(je=!0),e.firstContext=null)}function Ae(e){var t=e._currentValue;if(wi!==e)if(e={context:e,memoizedValue:t,next:null},rn===null){if(sl===null)throw Error(S(308));rn=e,sl.dependencies={lanes:0,firstContext:e}}else rn=rn.next=e;return t}var It=null;function Ni(e){It===null?It=[e]:It.push(e)}function Eu(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Ni(t)):(n.next=s.next,s.next=n),t.interleaved=n,lt(e,r)}function lt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var dt=!1;function bi(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Tu(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function jt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,O&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,lt(e,n)}return s=r.interleaved,s===null?(t.next=t,Ni(r)):(t.next=s.next,s.next=t),r.interleaved=t,lt(e,n)}function Or(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}function Ma(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function il(e,t,n,r){var s=e.updateQueue;dt=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,u=s.shared.pending;if(u!==null){s.shared.pending=null;var d=u,p=d.next;d.next=null,a===null?i=p:a.next=p,a=d;var y=e.alternate;y!==null&&(y=y.updateQueue,u=y.lastBaseUpdate,u!==a&&(u===null?y.firstBaseUpdate=p:u.next=p,y.lastBaseUpdate=d))}if(i!==null){var x=s.baseState;a=0,y=p=d=null,u=i;do{var g=u.lane,N=u.eventTime;if((r&g)===g){y!==null&&(y=y.next={eventTime:N,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var j=e,b=u;switch(g=t,N=n,b.tag){case 1:if(j=b.payload,typeof j=="function"){x=j.call(N,x,g);break e}x=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=b.payload,g=typeof j=="function"?j.call(N,x,g):j,g==null)break e;x=Z({},x,g);break e;case 2:dt=!0}}u.callback!==null&&u.lane!==0&&(e.flags|=64,g=s.effects,g===null?s.effects=[u]:g.push(u))}else N={eventTime:N,lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},y===null?(p=y=N,d=x):y=y.next=N,a|=g;if(u=u.next,u===null){if(u=s.shared.pending,u===null)break;g=u,u=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(y===null&&(d=x),s.baseState=d,s.firstBaseUpdate=p,s.lastBaseUpdate=y,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Vt|=a,e.lanes=a,e.memoizedState=x}}function Ba(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(S(191,s));s.call(r)}}}var pr={},Ye=Et(pr),rr=Et(pr),lr=Et(pr);function Dt(e){if(e===pr)throw Error(S(174));return e}function Ci(e,t){switch(W(lr,t),W(rr,e),W(Ye,pr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ms(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ms(t,e)}$(Ye),W(Ye,t)}function xn(){$(Ye),$(rr),$(lr)}function Pu(e){Dt(lr.current);var t=Dt(Ye.current),n=ms(t,e.type);t!==n&&(W(rr,e),W(Ye,n))}function Ei(e){rr.current===e&&($(Ye),$(rr))}var Y=Et(0);function al(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zl=[];function Ti(){for(var e=0;e<Zl.length;e++)Zl[e]._workInProgressVersionPrimary=null;Zl.length=0}var Mr=it.ReactCurrentDispatcher,Jl=it.ReactCurrentBatchConfig,Bt=0,G=null,ne=null,le=null,ol=!1,Wn=!1,sr=0,_f=0;function ue(){throw Error(S(321))}function Pi(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!$e(e[n],t[n]))return!1;return!0}function Li(e,t,n,r,s,i){if(Bt=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Mr.current=e===null||e.memoizedState===null?Af:Rf,e=n(r,s),Wn){i=0;do{if(Wn=!1,sr=0,25<=i)throw Error(S(301));i+=1,le=ne=null,t.updateQueue=null,Mr.current=Of,e=n(r,s)}while(Wn)}if(Mr.current=ul,t=ne!==null&&ne.next!==null,Bt=0,le=ne=G=null,ol=!1,t)throw Error(S(300));return e}function zi(){var e=sr!==0;return sr=0,e}function Qe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return le===null?G.memoizedState=le=e:le=le.next=e,le}function Re(){if(ne===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=le===null?G.memoizedState:le.next;if(t!==null)le=t,ne=e;else{if(e===null)throw Error(S(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},le===null?G.memoizedState=le=e:le=le.next=e}return le}function ir(e,t){return typeof t=="function"?t(e):t}function ql(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=ne,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var u=a=null,d=null,p=i;do{var y=p.lane;if((Bt&y)===y)d!==null&&(d=d.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),r=p.hasEagerState?p.eagerState:e(r,p.action);else{var x={lane:y,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};d===null?(u=d=x,a=r):d=d.next=x,G.lanes|=y,Vt|=y}p=p.next}while(p!==null&&p!==i);d===null?a=r:d.next=u,$e(r,t.memoizedState)||(je=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=d,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,G.lanes|=i,Vt|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function es(e){var t=Re(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);$e(i,t.memoizedState)||(je=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Lu(){}function zu(e,t){var n=G,r=Re(),s=t(),i=!$e(r.memoizedState,s);if(i&&(r.memoizedState=s,je=!0),r=r.queue,_i(Iu.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||le!==null&&le.memoizedState.tag&1){if(n.flags|=2048,ar(9,Fu.bind(null,n,r,s,t),void 0,null),se===null)throw Error(S(349));Bt&30||_u(n,t,s)}return s}function _u(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Fu(e,t,n,r){t.value=n,t.getSnapshot=r,Du(t)&&Au(e)}function Iu(e,t,n){return n(function(){Du(t)&&Au(e)})}function Du(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!$e(e,n)}catch{return!0}}function Au(e){var t=lt(e,1);t!==null&&Ue(t,e,1,-1)}function Va(e){var t=Qe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ir,lastRenderedState:e},t.queue=e,e=e.dispatch=Df.bind(null,G,e),[t.memoizedState,e]}function ar(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Ru(){return Re().memoizedState}function Br(e,t,n,r){var s=Qe();G.flags|=e,s.memoizedState=ar(1|t,n,void 0,r===void 0?null:r)}function kl(e,t,n,r){var s=Re();r=r===void 0?null:r;var i=void 0;if(ne!==null){var a=ne.memoizedState;if(i=a.destroy,r!==null&&Pi(r,a.deps)){s.memoizedState=ar(t,n,i,r);return}}G.flags|=e,s.memoizedState=ar(1|t,n,i,r)}function Wa(e,t){return Br(8390656,8,e,t)}function _i(e,t){return kl(2048,8,e,t)}function Ou(e,t){return kl(4,2,e,t)}function Mu(e,t){return kl(4,4,e,t)}function Bu(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Vu(e,t,n){return n=n!=null?n.concat([e]):null,kl(4,4,Bu.bind(null,t,e),n)}function Fi(){}function Wu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Uu(e,t){var n=Re();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Pi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function $u(e,t,n){return Bt&21?($e(n,t)||(n=Yo(),G.lanes|=n,Vt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,je=!0),e.memoizedState=n)}function Ff(e,t){var n=B;B=n!==0&&4>n?n:4,e(!0);var r=Jl.transition;Jl.transition={};try{e(!1),t()}finally{B=n,Jl.transition=r}}function Hu(){return Re().memoizedState}function If(e,t,n){var r=kt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Qu(e))Ku(t,n);else if(n=Eu(e,t,n,r),n!==null){var s=me();Ue(n,e,r,s),Xu(n,t,r)}}function Df(e,t,n){var r=kt(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qu(e))Ku(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,u=i(a,n);if(s.hasEagerState=!0,s.eagerState=u,$e(u,a)){var d=t.interleaved;d===null?(s.next=s,Ni(t)):(s.next=d.next,d.next=s),t.interleaved=s;return}}catch{}finally{}n=Eu(e,t,s,r),n!==null&&(s=me(),Ue(n,e,r,s),Xu(n,t,r))}}function Qu(e){var t=e.alternate;return e===G||t!==null&&t===G}function Ku(e,t){Wn=ol=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xu(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ci(e,n)}}var ul={readContext:Ae,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Af={readContext:Ae,useCallback:function(e,t){return Qe().memoizedState=[e,t===void 0?null:t],e},useContext:Ae,useEffect:Wa,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Br(4194308,4,Bu.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Br(4194308,4,e,t)},useInsertionEffect:function(e,t){return Br(4,2,e,t)},useMemo:function(e,t){var n=Qe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Qe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=If.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Qe();return e={current:e},t.memoizedState=e},useState:Va,useDebugValue:Fi,useDeferredValue:function(e){return Qe().memoizedState=e},useTransition:function(){var e=Va(!1),t=e[0];return e=Ff.bind(null,e[1]),Qe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,s=Qe();if(K){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),se===null)throw Error(S(349));Bt&30||_u(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Wa(Iu.bind(null,r,i,e),[e]),r.flags|=2048,ar(9,Fu.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Qe(),t=se.identifierPrefix;if(K){var n=et,r=qe;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=sr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=_f++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Rf={readContext:Ae,useCallback:Wu,useContext:Ae,useEffect:_i,useImperativeHandle:Vu,useInsertionEffect:Ou,useLayoutEffect:Mu,useMemo:Uu,useReducer:ql,useRef:Ru,useState:function(){return ql(ir)},useDebugValue:Fi,useDeferredValue:function(e){var t=Re();return $u(t,ne.memoizedState,e)},useTransition:function(){var e=ql(ir)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1},Of={readContext:Ae,useCallback:Wu,useContext:Ae,useEffect:_i,useImperativeHandle:Vu,useInsertionEffect:Ou,useLayoutEffect:Mu,useMemo:Uu,useReducer:es,useRef:Ru,useState:function(){return es(ir)},useDebugValue:Fi,useDeferredValue:function(e){var t=Re();return ne===null?t.memoizedState=e:$u(t,ne.memoizedState,e)},useTransition:function(){var e=es(ir)[0],t=Re().memoizedState;return[e,t]},useMutableSource:Lu,useSyncExternalStore:zu,useId:Hu,unstable_isNewReconciler:!1};function Me(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function As(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Z({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Sl={isMounted:function(e){return(e=e._reactInternals)?$t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=me(),s=kt(e),i=tt(r,s);i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,s),t!==null&&(Ue(t,e,s,r),Or(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=me(),s=kt(e),i=tt(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=jt(e,i,s),t!==null&&(Ue(t,e,s,r),Or(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=me(),r=kt(e),s=tt(n,r);s.tag=2,t!=null&&(s.callback=t),t=jt(e,s,r),t!==null&&(Ue(t,e,r,n),Or(t,e,r))}};function Ua(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!qn(n,r)||!qn(s,i):!0}function Yu(e,t,n){var r=!1,s=bt,i=t.contextType;return typeof i=="object"&&i!==null?i=Ae(i):(s=ke(t)?Ot:fe.current,r=t.contextTypes,i=(r=r!=null)?hn(e,s):bt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Sl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function $a(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Sl.enqueueReplaceState(t,t.state,null)}function Rs(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},bi(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=Ae(i):(i=ke(t)?Ot:fe.current,s.context=hn(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(As(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Sl.enqueueReplaceState(s,s.state,null),il(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function vn(e,t){try{var n="",r=t;do n+=dd(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function ts(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Os(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function Gu(e,t,n){n=tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){dl||(dl=!0,Xs=r),Os(e,t)},n}function Zu(e,t,n){n=tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){Os(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Os(e,t),typeof r!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Ha(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Mf;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=qf.bind(null,e,t,n),t.then(e,e))}function Qa(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Ka(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=tt(-1,1),t.tag=2,jt(n,t,1))),n.lanes|=1),e)}var Bf=it.ReactCurrentOwner,je=!1;function he(e,t,n,r){t.child=e===null?Cu(t,null,n,r):gn(t,e.child,n,r)}function Xa(e,t,n,r,s){n=n.render;var i=t.ref;return dn(t,s),r=Li(e,t,n,r,i,s),n=zi(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(K&&n&&vi(t),t.flags|=1,he(e,t,r,s),t.child)}function Ya(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Vi(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Ju(e,t,i,r,s)):(e=$r(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:qn,n(a,r)&&e.ref===t.ref)return st(e,t,s)}return t.flags|=1,e=St(i,r),e.ref=t.ref,e.return=t,t.child=e}function Ju(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref)if(je=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(je=!0);else return t.lanes=e.lanes,st(e,t,s)}return Ms(e,t,n,r,s)}function qu(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},W(sn,be),be|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,W(sn,be),be|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,W(sn,be),be|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,W(sn,be),be|=r;return he(e,t,s,n),t.child}function ec(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ms(e,t,n,r,s){var i=ke(n)?Ot:fe.current;return i=hn(t,i),dn(t,s),n=Li(e,t,n,r,i,s),r=zi(),e!==null&&!je?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,st(e,t,s)):(K&&r&&vi(t),t.flags|=1,he(e,t,n,s),t.child)}function Ga(e,t,n,r,s){if(ke(n)){var i=!0;tl(t)}else i=!1;if(dn(t,s),t.stateNode===null)Vr(e,t),Yu(t,n,r),Rs(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,u=t.memoizedProps;a.props=u;var d=a.context,p=n.contextType;typeof p=="object"&&p!==null?p=Ae(p):(p=ke(n)?Ot:fe.current,p=hn(t,p));var y=n.getDerivedStateFromProps,x=typeof y=="function"||typeof a.getSnapshotBeforeUpdate=="function";x||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==r||d!==p)&&$a(t,a,r,p),dt=!1;var g=t.memoizedState;a.state=g,il(t,r,a,s),d=t.memoizedState,u!==r||g!==d||we.current||dt?(typeof y=="function"&&(As(t,n,y,r),d=t.memoizedState),(u=dt||Ua(t,n,u,r,g,d,p))?(x||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=d),a.props=r,a.state=d,a.context=p,r=u):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Tu(e,t),u=t.memoizedProps,p=t.type===t.elementType?u:Me(t.type,u),a.props=p,x=t.pendingProps,g=a.context,d=n.contextType,typeof d=="object"&&d!==null?d=Ae(d):(d=ke(n)?Ot:fe.current,d=hn(t,d));var N=n.getDerivedStateFromProps;(y=typeof N=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(u!==x||g!==d)&&$a(t,a,r,d),dt=!1,g=t.memoizedState,a.state=g,il(t,r,a,s);var j=t.memoizedState;u!==x||g!==j||we.current||dt?(typeof N=="function"&&(As(t,n,N,r),j=t.memoizedState),(p=dt||Ua(t,n,p,r,g,j,d)||!1)?(y||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,j,d),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,j,d)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=j),a.props=r,a.state=j,a.context=d,r=p):(typeof a.componentDidUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return Bs(e,t,n,r,i,s)}function Bs(e,t,n,r,s,i){ec(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&Da(t,n,!1),st(e,t,i);r=t.stateNode,Bf.current=t;var u=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=gn(t,e.child,null,i),t.child=gn(t,null,u,i)):he(e,t,u,i),t.memoizedState=r.state,s&&Da(t,n,!0),t.child}function tc(e){var t=e.stateNode;t.pendingContext?Ia(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(e,t.context,!1),Ci(e,t.containerInfo)}function Za(e,t,n,r,s){return mn(),ji(s),t.flags|=256,he(e,t,n,r),t.child}var Vs={dehydrated:null,treeContext:null,retryLane:0};function Ws(e){return{baseLanes:e,cachePool:null,transitions:null}}function nc(e,t,n){var r=t.pendingProps,s=Y.current,i=!1,a=(t.flags&128)!==0,u;if((u=a)||(u=e!==null&&e.memoizedState===null?!1:(s&2)!==0),u?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),W(Y,s&1),e===null)return Is(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Cl(a,r,0,null),e=Rt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ws(n),t.memoizedState=Vs,e):Ii(t,a));if(s=e.memoizedState,s!==null&&(u=s.dehydrated,u!==null))return Vf(e,t,a,r,u,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,u=s.sibling;var d={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=d,t.deletions=null):(r=St(s,d),r.subtreeFlags=s.subtreeFlags&14680064),u!==null?i=St(u,i):(i=Rt(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?Ws(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=Vs,r}return i=e.child,e=i.sibling,r=St(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ii(e,t){return t=Cl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Pr(e,t,n,r){return r!==null&&ji(r),gn(t,e.child,null,n),e=Ii(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Vf(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=ts(Error(S(422))),Pr(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Cl({mode:"visible",children:r.children},s,0,null),i=Rt(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&gn(t,e.child,null,a),t.child.memoizedState=Ws(a),t.memoizedState=Vs,i);if(!(t.mode&1))return Pr(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var u=r.dgst;return r=u,i=Error(S(419)),r=ts(i,r,void 0),Pr(e,t,a,r)}if(u=(a&e.childLanes)!==0,je||u){if(r=se,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,lt(e,s),Ue(r,e,s,-1))}return Bi(),r=ts(Error(S(421))),Pr(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=ep.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,Ce=yt(s.nextSibling),Ee=t,K=!0,Ve=null,e!==null&&(_e[Fe++]=qe,_e[Fe++]=et,_e[Fe++]=Mt,qe=e.id,et=e.overflow,Mt=t),t=Ii(t,r.children),t.flags|=4096,t)}function Ja(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ds(e.return,t,n)}function ns(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function rc(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(he(e,t,r.children,n),r=Y.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ja(e,n,t);else if(e.tag===19)Ja(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(W(Y,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&al(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),ns(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&al(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}ns(t,!0,n,null,i);break;case"together":ns(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Vr(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function st(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Vt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=St(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=St(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wf(e,t,n){switch(t.tag){case 3:tc(t),mn();break;case 5:Pu(t);break;case 1:ke(t.type)&&tl(t);break;case 4:Ci(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;W(ll,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(W(Y,Y.current&1),t.flags|=128,null):n&t.child.childLanes?nc(e,t,n):(W(Y,Y.current&1),e=st(e,t,n),e!==null?e.sibling:null);W(Y,Y.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),W(Y,Y.current),r)break;return null;case 22:case 23:return t.lanes=0,qu(e,t,n)}return st(e,t,n)}var lc,Us,sc,ic;lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Us=function(){};sc=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,Dt(Ye.current);var i=null;switch(n){case"input":s=ds(e,s),r=ds(e,r),i=[];break;case"select":s=Z({},s,{value:void 0}),r=Z({},r,{value:void 0}),i=[];break;case"textarea":s=hs(e,s),r=hs(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=qr)}gs(n,r);var a;n=null;for(p in s)if(!r.hasOwnProperty(p)&&s.hasOwnProperty(p)&&s[p]!=null)if(p==="style"){var u=s[p];for(a in u)u.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Qn.hasOwnProperty(p)?i||(i=[]):(i=i||[]).push(p,null));for(p in r){var d=r[p];if(u=s!=null?s[p]:void 0,r.hasOwnProperty(p)&&d!==u&&(d!=null||u!=null))if(p==="style")if(u){for(a in u)!u.hasOwnProperty(a)||d&&d.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in d)d.hasOwnProperty(a)&&u[a]!==d[a]&&(n||(n={}),n[a]=d[a])}else n||(i||(i=[]),i.push(p,n)),n=d;else p==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,u=u?u.__html:void 0,d!=null&&u!==d&&(i=i||[]).push(p,d)):p==="children"?typeof d!="string"&&typeof d!="number"||(i=i||[]).push(p,""+d):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Qn.hasOwnProperty(p)?(d!=null&&p==="onScroll"&&U("scroll",e),i||u===d||(i=[])):(i=i||[]).push(p,d))}n&&(i=i||[]).push("style",n);var p=i;(t.updateQueue=p)&&(t.flags|=4)}};ic=function(e,t,n,r){n!==r&&(t.flags|=4)};function zn(e,t){if(!K)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Uf(e,t,n){var r=t.pendingProps;switch(yi(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&el(),ce(t),null;case 3:return r=t.stateNode,xn(),$(we),$(fe),Ti(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Er(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ve!==null&&(Zs(Ve),Ve=null))),Us(e,t),ce(t),null;case 5:Ei(t);var s=Dt(lr.current);if(n=t.type,e!==null&&t.stateNode!=null)sc(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return ce(t),null}if(e=Dt(Ye.current),Er(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ke]=t,r[nr]=i,e=(t.mode&1)!==0,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(s=0;s<An.length;s++)U(An[s],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":aa(r,i),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},U("invalid",r);break;case"textarea":ua(r,i),U("invalid",r)}gs(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var u=i[a];a==="children"?typeof u=="string"?r.textContent!==u&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),s=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(i.suppressHydrationWarning!==!0&&Cr(r.textContent,u,e),s=["children",""+u]):Qn.hasOwnProperty(a)&&u!=null&&a==="onScroll"&&U("scroll",r)}switch(n){case"input":vr(r),oa(r,i,!0);break;case"textarea":vr(r),ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=qr)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Io(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Ke]=t,e[nr]=r,lc(e,t,!1,!1),t.stateNode=e;e:{switch(a=xs(n,r),n){case"dialog":U("cancel",e),U("close",e),s=r;break;case"iframe":case"object":case"embed":U("load",e),s=r;break;case"video":case"audio":for(s=0;s<An.length;s++)U(An[s],e);s=r;break;case"source":U("error",e),s=r;break;case"img":case"image":case"link":U("error",e),U("load",e),s=r;break;case"details":U("toggle",e),s=r;break;case"input":aa(e,r),s=ds(e,r),U("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Z({},r,{value:void 0}),U("invalid",e);break;case"textarea":ua(e,r),s=hs(e,r),U("invalid",e);break;default:s=r}gs(n,s),u=s;for(i in u)if(u.hasOwnProperty(i)){var d=u[i];i==="style"?Ro(e,d):i==="dangerouslySetInnerHTML"?(d=d?d.__html:void 0,d!=null&&Do(e,d)):i==="children"?typeof d=="string"?(n!=="textarea"||d!=="")&&Kn(e,d):typeof d=="number"&&Kn(e,""+d):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Qn.hasOwnProperty(i)?d!=null&&i==="onScroll"&&U("scroll",e):d!=null&&li(e,i,d,a))}switch(n){case"input":vr(e),oa(e,r,!1);break;case"textarea":vr(e),ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Nt(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?an(e,!!r.multiple,i,!1):r.defaultValue!=null&&an(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=qr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)ic(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Dt(lr.current),Dt(Ye.current),Er(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ke]=t,(i=r.nodeValue!==n)&&(e=Ee,e!==null))switch(e.tag){case 3:Cr(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cr(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ke]=t,t.stateNode=r}return ce(t),null;case 13:if($(Y),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(K&&Ce!==null&&t.mode&1&&!(t.flags&128))Nu(),mn(),t.flags|=98560,i=!1;else if(i=Er(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(S(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(S(317));i[Ke]=t}else mn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else Ve!==null&&(Zs(Ve),Ve=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Y.current&1?re===0&&(re=3):Bi())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return xn(),Us(e,t),e===null&&er(t.stateNode.containerInfo),ce(t),null;case 10:return Si(t.type._context),ce(t),null;case 17:return ke(t.type)&&el(),ce(t),null;case 19:if($(Y),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)zn(i,!1);else{if(re!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=al(e),a!==null){for(t.flags|=128,zn(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return W(Y,Y.current&1|2),t.child}e=e.sibling}i.tail!==null&&q()>yn&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304)}else{if(!r)if(e=al(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),zn(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!K)return ce(t),null}else 2*q()-i.renderingStartTime>yn&&n!==1073741824&&(t.flags|=128,r=!0,zn(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=q(),t.sibling=null,n=Y.current,W(Y,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Mi(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?be&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function $f(e,t){switch(yi(t),t.tag){case 1:return ke(t.type)&&el(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xn(),$(we),$(fe),Ti(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ei(t),null;case 13:if($(Y),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));mn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return $(Y),null;case 4:return xn(),null;case 10:return Si(t.type._context),null;case 22:case 23:return Mi(),null;case 24:return null;default:return null}}var Lr=!1,de=!1,Hf=typeof WeakSet=="function"?WeakSet:Set,T=null;function ln(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){J(e,t,r)}else n.current=null}function $s(e,t,n){try{n()}catch(r){J(e,t,r)}}var qa=!1;function Qf(e,t){if(Es=Gr,e=du(),xi(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,u=-1,d=-1,p=0,y=0,x=e,g=null;t:for(;;){for(var N;x!==n||s!==0&&x.nodeType!==3||(u=a+s),x!==i||r!==0&&x.nodeType!==3||(d=a+r),x.nodeType===3&&(a+=x.nodeValue.length),(N=x.firstChild)!==null;)g=x,x=N;for(;;){if(x===e)break t;if(g===n&&++p===s&&(u=a),g===i&&++y===r&&(d=a),(N=x.nextSibling)!==null)break;x=g,g=x.parentNode}x=N}n=u===-1||d===-1?null:{start:u,end:d}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ts={focusedElem:e,selectionRange:n},Gr=!1,T=t;T!==null;)if(t=T,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,T=e;else for(;T!==null;){t=T;try{var j=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(j!==null){var b=j.memoizedProps,V=j.memoizedState,h=t.stateNode,f=h.getSnapshotBeforeUpdate(t.elementType===t.type?b:Me(t.type,b),V);h.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){J(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,T=e;break}T=t.return}return j=qa,qa=!1,j}function Un(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&$s(t,n,i)}s=s.next}while(s!==r)}}function Nl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Hs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function ac(e){var t=e.alternate;t!==null&&(e.alternate=null,ac(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ke],delete t[nr],delete t[zs],delete t[Tf],delete t[Pf])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function oc(e){return e.tag===5||e.tag===3||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||oc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Qs(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=qr));else if(r!==4&&(e=e.child,e!==null))for(Qs(e,t,n),e=e.sibling;e!==null;)Qs(e,t,n),e=e.sibling}function Ks(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ks(e,t,n),e=e.sibling;e!==null;)Ks(e,t,n),e=e.sibling}var ie=null,Be=!1;function ut(e,t,n){for(n=n.child;n!==null;)uc(e,t,n),n=n.sibling}function uc(e,t,n){if(Xe&&typeof Xe.onCommitFiberUnmount=="function")try{Xe.onCommitFiberUnmount(gl,n)}catch{}switch(n.tag){case 5:de||ln(n,t);case 6:var r=ie,s=Be;ie=null,ut(e,t,n),ie=r,Be=s,ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ie.removeChild(n.stateNode));break;case 18:ie!==null&&(Be?(e=ie,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),Zn(e)):Yl(ie,n.stateNode));break;case 4:r=ie,s=Be,ie=n.stateNode.containerInfo,Be=!0,ut(e,t,n),ie=r,Be=s;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&$s(n,t,a),s=s.next}while(s!==r)}ut(e,t,n);break;case 1:if(!de&&(ln(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){J(n,t,u)}ut(e,t,n);break;case 21:ut(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,ut(e,t,n),de=r):ut(e,t,n);break;default:ut(e,t,n)}}function to(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Hf),t.forEach(function(r){var s=tp.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Oe(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 5:ie=u.stateNode,Be=!1;break e;case 3:ie=u.stateNode.containerInfo,Be=!0;break e;case 4:ie=u.stateNode.containerInfo,Be=!0;break e}u=u.return}if(ie===null)throw Error(S(160));uc(i,a,s),ie=null,Be=!1;var d=s.alternate;d!==null&&(d.return=null),s.return=null}catch(p){J(s,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)cc(t,e),t=t.sibling}function cc(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Oe(t,e),He(e),r&4){try{Un(3,e,e.return),Nl(3,e)}catch(b){J(e,e.return,b)}try{Un(5,e,e.return)}catch(b){J(e,e.return,b)}}break;case 1:Oe(t,e),He(e),r&512&&n!==null&&ln(n,n.return);break;case 5:if(Oe(t,e),He(e),r&512&&n!==null&&ln(n,n.return),e.flags&32){var s=e.stateNode;try{Kn(s,"")}catch(b){J(e,e.return,b)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,u=e.type,d=e.updateQueue;if(e.updateQueue=null,d!==null)try{u==="input"&&i.type==="radio"&&i.name!=null&&_o(s,i),xs(u,a);var p=xs(u,i);for(a=0;a<d.length;a+=2){var y=d[a],x=d[a+1];y==="style"?Ro(s,x):y==="dangerouslySetInnerHTML"?Do(s,x):y==="children"?Kn(s,x):li(s,y,x,p)}switch(u){case"input":fs(s,i);break;case"textarea":Fo(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var N=i.value;N!=null?an(s,!!i.multiple,N,!1):g!==!!i.multiple&&(i.defaultValue!=null?an(s,!!i.multiple,i.defaultValue,!0):an(s,!!i.multiple,i.multiple?[]:"",!1))}s[nr]=i}catch(b){J(e,e.return,b)}}break;case 6:if(Oe(t,e),He(e),r&4){if(e.stateNode===null)throw Error(S(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(b){J(e,e.return,b)}}break;case 3:if(Oe(t,e),He(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Zn(t.containerInfo)}catch(b){J(e,e.return,b)}break;case 4:Oe(t,e),He(e);break;case 13:Oe(t,e),He(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ri=q())),r&4&&to(e);break;case 22:if(y=n!==null&&n.memoizedState!==null,e.mode&1?(de=(p=de)||y,Oe(t,e),de=p):Oe(t,e),He(e),r&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!y&&e.mode&1)for(T=e,y=e.child;y!==null;){for(x=T=y;T!==null;){switch(g=T,N=g.child,g.tag){case 0:case 11:case 14:case 15:Un(4,g,g.return);break;case 1:ln(g,g.return);var j=g.stateNode;if(typeof j.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,j.props=t.memoizedProps,j.state=t.memoizedState,j.componentWillUnmount()}catch(b){J(r,n,b)}}break;case 5:ln(g,g.return);break;case 22:if(g.memoizedState!==null){ro(x);continue}}N!==null?(N.return=g,T=N):ro(x)}y=y.sibling}e:for(y=null,x=e;;){if(x.tag===5){if(y===null){y=x;try{s=x.stateNode,p?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(u=x.stateNode,d=x.memoizedProps.style,a=d!=null&&d.hasOwnProperty("display")?d.display:null,u.style.display=Ao("display",a))}catch(b){J(e,e.return,b)}}}else if(x.tag===6){if(y===null)try{x.stateNode.nodeValue=p?"":x.memoizedProps}catch(b){J(e,e.return,b)}}else if((x.tag!==22&&x.tag!==23||x.memoizedState===null||x===e)&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===e)break e;for(;x.sibling===null;){if(x.return===null||x.return===e)break e;y===x&&(y=null),x=x.return}y===x&&(y=null),x.sibling.return=x.return,x=x.sibling}}break;case 19:Oe(t,e),He(e),r&4&&to(e);break;case 21:break;default:Oe(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(oc(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Kn(s,""),r.flags&=-33);var i=eo(e);Ks(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,u=eo(e);Qs(e,u,a);break;default:throw Error(S(161))}}catch(d){J(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Kf(e,t,n){T=e,dc(e)}function dc(e,t,n){for(var r=(e.mode&1)!==0;T!==null;){var s=T,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||Lr;if(!a){var u=s.alternate,d=u!==null&&u.memoizedState!==null||de;u=Lr;var p=de;if(Lr=a,(de=d)&&!p)for(T=s;T!==null;)a=T,d=a.child,a.tag===22&&a.memoizedState!==null?lo(s):d!==null?(d.return=a,T=d):lo(s);for(;i!==null;)T=i,dc(i),i=i.sibling;T=s,Lr=u,de=p}no(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,T=i):no(e)}}function no(e){for(;T!==null;){var t=T;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||Nl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Me(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ba(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ba(t,a,n)}break;case 5:var u=t.stateNode;if(n===null&&t.flags&4){n=u;var d=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":d.autoFocus&&n.focus();break;case"img":d.src&&(n.src=d.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var y=p.memoizedState;if(y!==null){var x=y.dehydrated;x!==null&&Zn(x)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}de||t.flags&512&&Hs(t)}catch(g){J(t,t.return,g)}}if(t===e){T=null;break}if(n=t.sibling,n!==null){n.return=t.return,T=n;break}T=t.return}}function ro(e){for(;T!==null;){var t=T;if(t===e){T=null;break}var n=t.sibling;if(n!==null){n.return=t.return,T=n;break}T=t.return}}function lo(e){for(;T!==null;){var t=T;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Nl(4,t)}catch(d){J(t,n,d)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(d){J(t,s,d)}}var i=t.return;try{Hs(t)}catch(d){J(t,i,d)}break;case 5:var a=t.return;try{Hs(t)}catch(d){J(t,a,d)}}}catch(d){J(t,t.return,d)}if(t===e){T=null;break}var u=t.sibling;if(u!==null){u.return=t.return,T=u;break}T=t.return}}var Xf=Math.ceil,cl=it.ReactCurrentDispatcher,Di=it.ReactCurrentOwner,De=it.ReactCurrentBatchConfig,O=0,se=null,te=null,ae=0,be=0,sn=Et(0),re=0,or=null,Vt=0,bl=0,Ai=0,$n=null,ye=null,Ri=0,yn=1/0,Ze=null,dl=!1,Xs=null,wt=null,zr=!1,mt=null,fl=0,Hn=0,Ys=null,Wr=-1,Ur=0;function me(){return O&6?q():Wr!==-1?Wr:Wr=q()}function kt(e){return e.mode&1?O&2&&ae!==0?ae&-ae:zf.transition!==null?(Ur===0&&(Ur=Yo()),Ur):(e=B,e!==0||(e=window.event,e=e===void 0?16:nu(e.type)),e):1}function Ue(e,t,n,r){if(50<Hn)throw Hn=0,Ys=null,Error(S(185));cr(e,n,r),(!(O&2)||e!==se)&&(e===se&&(!(O&2)&&(bl|=n),re===4&&pt(e,ae)),Se(e,r),n===1&&O===0&&!(t.mode&1)&&(yn=q()+500,wl&&Tt()))}function Se(e,t){var n=e.callbackNode;Ld(e,t);var r=Yr(e,e===se?ae:0);if(r===0)n!==null&&pa(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&pa(n),t===1)e.tag===0?Lf(so.bind(null,e)):wu(so.bind(null,e)),Cf(function(){!(O&6)&&Tt()}),n=null;else{switch(Go(r)){case 1:n=ui;break;case 4:n=Ko;break;case 16:n=Xr;break;case 536870912:n=Xo;break;default:n=Xr}n=yc(n,fc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function fc(e,t){if(Wr=-1,Ur=0,O&6)throw Error(S(327));var n=e.callbackNode;if(fn()&&e.callbackNode!==n)return null;var r=Yr(e,e===se?ae:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=pl(e,r);else{t=r;var s=O;O|=2;var i=hc();(se!==e||ae!==t)&&(Ze=null,yn=q()+500,At(e,t));do try{Zf();break}catch(u){pc(e,u)}while(!0);ki(),cl.current=i,O=s,te!==null?t=0:(se=null,ae=0,t=re)}if(t!==0){if(t===2&&(s=ks(e),s!==0&&(r=s,t=Gs(e,s))),t===1)throw n=or,At(e,0),pt(e,r),Se(e,q()),n;if(t===6)pt(e,r);else{if(s=e.current.alternate,!(r&30)&&!Yf(s)&&(t=pl(e,r),t===2&&(i=ks(e),i!==0&&(r=i,t=Gs(e,i))),t===1))throw n=or,At(e,0),pt(e,r),Se(e,q()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:_t(e,ye,Ze);break;case 3:if(pt(e,r),(r&130023424)===r&&(t=Ri+500-q(),10<t)){if(Yr(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){me(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Ls(_t.bind(null,e,ye,Ze),t);break}_t(e,ye,Ze);break;case 4:if(pt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-We(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=q()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xf(r/1960))-r,10<r){e.timeoutHandle=Ls(_t.bind(null,e,ye,Ze),r);break}_t(e,ye,Ze);break;case 5:_t(e,ye,Ze);break;default:throw Error(S(329))}}}return Se(e,q()),e.callbackNode===n?fc.bind(null,e):null}function Gs(e,t){var n=$n;return e.current.memoizedState.isDehydrated&&(At(e,t).flags|=256),e=pl(e,t),e!==2&&(t=ye,ye=n,t!==null&&Zs(t)),e}function Zs(e){ye===null?ye=e:ye.push.apply(ye,e)}function Yf(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!$e(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pt(e,t){for(t&=~Ai,t&=~bl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function so(e){if(O&6)throw Error(S(327));fn();var t=Yr(e,0);if(!(t&1))return Se(e,q()),null;var n=pl(e,t);if(e.tag!==0&&n===2){var r=ks(e);r!==0&&(t=r,n=Gs(e,r))}if(n===1)throw n=or,At(e,0),pt(e,t),Se(e,q()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,_t(e,ye,Ze),Se(e,q()),null}function Oi(e,t){var n=O;O|=1;try{return e(t)}finally{O=n,O===0&&(yn=q()+500,wl&&Tt())}}function Wt(e){mt!==null&&mt.tag===0&&!(O&6)&&fn();var t=O;O|=1;var n=De.transition,r=B;try{if(De.transition=null,B=1,e)return e()}finally{B=r,De.transition=n,O=t,!(O&6)&&Tt()}}function Mi(){be=sn.current,$(sn)}function At(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bf(n)),te!==null)for(n=te.return;n!==null;){var r=n;switch(yi(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&el();break;case 3:xn(),$(we),$(fe),Ti();break;case 5:Ei(r);break;case 4:xn();break;case 13:$(Y);break;case 19:$(Y);break;case 10:Si(r.type._context);break;case 22:case 23:Mi()}n=n.return}if(se=e,te=e=St(e.current,null),ae=be=t,re=0,or=null,Ai=bl=Vt=0,ye=$n=null,It!==null){for(t=0;t<It.length;t++)if(n=It[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}It=null}return e}function pc(e,t){do{var n=te;try{if(ki(),Mr.current=ul,ol){for(var r=G.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ol=!1}if(Bt=0,le=ne=G=null,Wn=!1,sr=0,Di.current=null,n===null||n.return===null){re=1,or=t,te=null;break}e:{var i=e,a=n.return,u=n,d=t;if(t=ae,u.flags|=32768,d!==null&&typeof d=="object"&&typeof d.then=="function"){var p=d,y=u,x=y.tag;if(!(y.mode&1)&&(x===0||x===11||x===15)){var g=y.alternate;g?(y.updateQueue=g.updateQueue,y.memoizedState=g.memoizedState,y.lanes=g.lanes):(y.updateQueue=null,y.memoizedState=null)}var N=Qa(a);if(N!==null){N.flags&=-257,Ka(N,a,u,i,t),N.mode&1&&Ha(i,p,t),t=N,d=p;var j=t.updateQueue;if(j===null){var b=new Set;b.add(d),t.updateQueue=b}else j.add(d);break e}else{if(!(t&1)){Ha(i,p,t),Bi();break e}d=Error(S(426))}}else if(K&&u.mode&1){var V=Qa(a);if(V!==null){!(V.flags&65536)&&(V.flags|=256),Ka(V,a,u,i,t),ji(vn(d,u));break e}}i=d=vn(d,u),re!==4&&(re=2),$n===null?$n=[i]:$n.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Gu(i,d,t);Ma(i,h);break e;case 1:u=d;var f=i.type,m=i.stateNode;if(!(i.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(wt===null||!wt.has(m)))){i.flags|=65536,t&=-t,i.lanes|=t;var w=Zu(i,u,t);Ma(i,w);break e}}i=i.return}while(i!==null)}gc(n)}catch(C){t=C,te===n&&n!==null&&(te=n=n.return);continue}break}while(!0)}function hc(){var e=cl.current;return cl.current=ul,e===null?ul:e}function Bi(){(re===0||re===3||re===2)&&(re=4),se===null||!(Vt&268435455)&&!(bl&268435455)||pt(se,ae)}function pl(e,t){var n=O;O|=2;var r=hc();(se!==e||ae!==t)&&(Ze=null,At(e,t));do try{Gf();break}catch(s){pc(e,s)}while(!0);if(ki(),O=n,cl.current=r,te!==null)throw Error(S(261));return se=null,ae=0,re}function Gf(){for(;te!==null;)mc(te)}function Zf(){for(;te!==null&&!wd();)mc(te)}function mc(e){var t=vc(e.alternate,e,be);e.memoizedProps=e.pendingProps,t===null?gc(e):te=t,Di.current=null}function gc(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=$f(n,t),n!==null){n.flags&=32767,te=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{re=6,te=null;return}}else if(n=Uf(n,t,be),n!==null){te=n;return}if(t=t.sibling,t!==null){te=t;return}te=t=e}while(t!==null);re===0&&(re=5)}function _t(e,t,n){var r=B,s=De.transition;try{De.transition=null,B=1,Jf(e,t,n,r)}finally{De.transition=s,B=r}return null}function Jf(e,t,n,r){do fn();while(mt!==null);if(O&6)throw Error(S(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(zd(e,i),e===se&&(te=se=null,ae=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||zr||(zr=!0,yc(Xr,function(){return fn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=De.transition,De.transition=null;var a=B;B=1;var u=O;O|=4,Di.current=null,Qf(e,n),cc(n,e),vf(Ts),Gr=!!Es,Ts=Es=null,e.current=n,Kf(n),kd(),O=u,B=a,De.transition=i}else e.current=n;if(zr&&(zr=!1,mt=e,fl=s),i=e.pendingLanes,i===0&&(wt=null),bd(n.stateNode),Se(e,q()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(dl)throw dl=!1,e=Xs,Xs=null,e;return fl&1&&e.tag!==0&&fn(),i=e.pendingLanes,i&1?e===Ys?Hn++:(Hn=0,Ys=e):Hn=0,Tt(),null}function fn(){if(mt!==null){var e=Go(fl),t=De.transition,n=B;try{if(De.transition=null,B=16>e?16:e,mt===null)var r=!1;else{if(e=mt,mt=null,fl=0,O&6)throw Error(S(331));var s=O;for(O|=4,T=e.current;T!==null;){var i=T,a=i.child;if(T.flags&16){var u=i.deletions;if(u!==null){for(var d=0;d<u.length;d++){var p=u[d];for(T=p;T!==null;){var y=T;switch(y.tag){case 0:case 11:case 15:Un(8,y,i)}var x=y.child;if(x!==null)x.return=y,T=x;else for(;T!==null;){y=T;var g=y.sibling,N=y.return;if(ac(y),y===p){T=null;break}if(g!==null){g.return=N,T=g;break}T=N}}}var j=i.alternate;if(j!==null){var b=j.child;if(b!==null){j.child=null;do{var V=b.sibling;b.sibling=null,b=V}while(b!==null)}}T=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,T=a;else e:for(;T!==null;){if(i=T,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Un(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,T=h;break e}T=i.return}}var f=e.current;for(T=f;T!==null;){a=T;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,T=m;else e:for(a=f;T!==null;){if(u=T,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:Nl(9,u)}}catch(C){J(u,u.return,C)}if(u===a){T=null;break e}var w=u.sibling;if(w!==null){w.return=u.return,T=w;break e}T=u.return}}if(O=s,Tt(),Xe&&typeof Xe.onPostCommitFiberRoot=="function")try{Xe.onPostCommitFiberRoot(gl,e)}catch{}r=!0}return r}finally{B=n,De.transition=t}}return!1}function io(e,t,n){t=vn(n,t),t=Gu(e,t,1),e=jt(e,t,1),t=me(),e!==null&&(cr(e,1,t),Se(e,t))}function J(e,t,n){if(e.tag===3)io(e,e,n);else for(;t!==null;){if(t.tag===3){io(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wt===null||!wt.has(r))){e=vn(n,e),e=Zu(t,e,1),t=jt(t,e,1),e=me(),t!==null&&(cr(t,1,e),Se(t,e));break}}t=t.return}}function qf(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=me(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(ae&n)===n&&(re===4||re===3&&(ae&130023424)===ae&&500>q()-Ri?At(e,0):Ai|=n),Se(e,t)}function xc(e,t){t===0&&(e.mode&1?(t=wr,wr<<=1,!(wr&130023424)&&(wr=4194304)):t=1);var n=me();e=lt(e,t),e!==null&&(cr(e,t,n),Se(e,n))}function ep(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),xc(e,n)}function tp(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),xc(e,n)}var vc;vc=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||we.current)je=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return je=!1,Wf(e,t,n);je=!!(e.flags&131072)}else je=!1,K&&t.flags&1048576&&ku(t,rl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Vr(e,t),e=t.pendingProps;var s=hn(t,fe.current);dn(t,n),s=Li(null,t,r,e,s,n);var i=zi();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,tl(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,bi(t),s.updater=Sl,t.stateNode=s,s._reactInternals=t,Rs(t,r,e,n),t=Bs(null,t,r,!0,i,n)):(t.tag=0,K&&i&&vi(t),he(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Vr(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=rp(r),e=Me(r,e),s){case 0:t=Ms(null,t,r,e,n);break e;case 1:t=Ga(null,t,r,e,n);break e;case 11:t=Xa(null,t,r,e,n);break e;case 14:t=Ya(null,t,r,Me(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Ms(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Ga(e,t,r,s,n);case 3:e:{if(tc(t),e===null)throw Error(S(387));r=t.pendingProps,i=t.memoizedState,s=i.element,Tu(e,t),il(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=vn(Error(S(423)),t),t=Za(e,t,r,n,s);break e}else if(r!==s){s=vn(Error(S(424)),t),t=Za(e,t,r,n,s);break e}else for(Ce=yt(t.stateNode.containerInfo.firstChild),Ee=t,K=!0,Ve=null,n=Cu(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mn(),r===s){t=st(e,t,n);break e}he(e,t,r,n)}t=t.child}return t;case 5:return Pu(t),e===null&&Is(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,Ps(r,s)?a=null:i!==null&&Ps(r,i)&&(t.flags|=32),ec(e,t),he(e,t,a,n),t.child;case 6:return e===null&&Is(t),null;case 13:return nc(e,t,n);case 4:return Ci(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=gn(t,null,r,n):he(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Xa(e,t,r,s,n);case 7:return he(e,t,t.pendingProps,n),t.child;case 8:return he(e,t,t.pendingProps.children,n),t.child;case 12:return he(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,W(ll,r._currentValue),r._currentValue=a,i!==null)if($e(i.value,a)){if(i.children===s.children&&!we.current){t=st(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var u=i.dependencies;if(u!==null){a=i.child;for(var d=u.firstContext;d!==null;){if(d.context===r){if(i.tag===1){d=tt(-1,n&-n),d.tag=2;var p=i.updateQueue;if(p!==null){p=p.shared;var y=p.pending;y===null?d.next=d:(d.next=y.next,y.next=d),p.pending=d}}i.lanes|=n,d=i.alternate,d!==null&&(d.lanes|=n),Ds(i.return,n,t),u.lanes|=n;break}d=d.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(S(341));a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Ds(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}he(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,dn(t,n),s=Ae(s),r=r(s),t.flags|=1,he(e,t,r,n),t.child;case 14:return r=t.type,s=Me(r,t.pendingProps),s=Me(r.type,s),Ya(e,t,r,s,n);case 15:return Ju(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Me(r,s),Vr(e,t),t.tag=1,ke(r)?(e=!0,tl(t)):e=!1,dn(t,n),Yu(t,r,s),Rs(t,r,s,n),Bs(null,t,r,!0,e,n);case 19:return rc(e,t,n);case 22:return qu(e,t,n)}throw Error(S(156,t.tag))};function yc(e,t){return Qo(e,t)}function np(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ie(e,t,n,r){return new np(e,t,n,r)}function Vi(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rp(e){if(typeof e=="function")return Vi(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ii)return 11;if(e===ai)return 14}return 2}function St(e,t){var n=e.alternate;return n===null?(n=Ie(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $r(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")Vi(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yt:return Rt(n.children,s,i,t);case si:a=8,s|=8;break;case as:return e=Ie(12,n,t,s|2),e.elementType=as,e.lanes=i,e;case os:return e=Ie(13,n,t,s),e.elementType=os,e.lanes=i,e;case us:return e=Ie(19,n,t,s),e.elementType=us,e.lanes=i,e;case Po:return Cl(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Eo:a=10;break e;case To:a=9;break e;case ii:a=11;break e;case ai:a=14;break e;case ct:a=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=Ie(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function Rt(e,t,n,r){return e=Ie(7,e,r,t),e.lanes=n,e}function Cl(e,t,n,r){return e=Ie(22,e,r,t),e.elementType=Po,e.lanes=n,e.stateNode={isHidden:!1},e}function rs(e,t,n){return e=Ie(6,e,null,t),e.lanes=n,e}function ls(e,t,n){return t=Ie(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lp(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ol(0),this.expirationTimes=Ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ol(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Wi(e,t,n,r,s,i,a,u,d){return e=new lp(e,t,n,u,d),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ie(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bi(i),e}function sp(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Xt,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jc(e){if(!e)return bt;e=e._reactInternals;e:{if($t(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(ke(n))return ju(e,n,t)}return t}function wc(e,t,n,r,s,i,a,u,d){return e=Wi(n,r,!0,e,s,i,a,u,d),e.context=jc(null),n=e.current,r=me(),s=kt(n),i=tt(r,s),i.callback=t??null,jt(n,i,s),e.current.lanes=s,cr(e,s,r),Se(e,r),e}function El(e,t,n,r){var s=t.current,i=me(),a=kt(s);return n=jc(n),t.context===null?t.context=n:t.pendingContext=n,t=tt(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=jt(s,t,a),e!==null&&(Ue(e,s,a,i),Or(e,s,a)),a}function hl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ao(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ui(e,t){ao(e,t),(e=e.alternate)&&ao(e,t)}function ip(){return null}var kc=typeof reportError=="function"?reportError:function(e){console.error(e)};function $i(e){this._internalRoot=e}Tl.prototype.render=$i.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));El(e,t,null,null)};Tl.prototype.unmount=$i.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Wt(function(){El(null,e,null,null)}),t[rt]=null}};function Tl(e){this._internalRoot=e}Tl.prototype.unstable_scheduleHydration=function(e){if(e){var t=qo();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ft.length&&t!==0&&t<ft[n].priority;n++);ft.splice(n,0,e),n===0&&tu(e)}};function Hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Pl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function oo(){}function ap(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var p=hl(a);i.call(p)}}var a=wc(t,r,e,0,null,!1,!1,"",oo);return e._reactRootContainer=a,e[rt]=a.current,er(e.nodeType===8?e.parentNode:e),Wt(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var u=r;r=function(){var p=hl(d);u.call(p)}}var d=Wi(e,0,!1,null,null,!1,!1,"",oo);return e._reactRootContainer=d,e[rt]=d.current,er(e.nodeType===8?e.parentNode:e),Wt(function(){El(t,d,n,r)}),d}function Ll(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var u=s;s=function(){var d=hl(a);u.call(d)}}El(t,a,e,s)}else a=ap(n,t,e,s,r);return hl(a)}Zo=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Dn(t.pendingLanes);n!==0&&(ci(t,n|1),Se(t,q()),!(O&6)&&(yn=q()+500,Tt()))}break;case 13:Wt(function(){var r=lt(e,1);if(r!==null){var s=me();Ue(r,e,1,s)}}),Ui(e,1)}};di=function(e){if(e.tag===13){var t=lt(e,134217728);if(t!==null){var n=me();Ue(t,e,134217728,n)}Ui(e,134217728)}};Jo=function(e){if(e.tag===13){var t=kt(e),n=lt(e,t);if(n!==null){var r=me();Ue(n,e,t,r)}Ui(e,t)}};qo=function(){return B};eu=function(e,t){var n=B;try{return B=e,t()}finally{B=n}};ys=function(e,t,n){switch(t){case"input":if(fs(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=jl(r);if(!s)throw Error(S(90));zo(r),fs(r,s)}}}break;case"textarea":Fo(e,n);break;case"select":t=n.value,t!=null&&an(e,!!n.multiple,t,!1)}};Bo=Oi;Vo=Wt;var op={usingClientEntryPoint:!1,Events:[fr,qt,jl,Oo,Mo,Oi]},_n={findFiberByHostInstance:Ft,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},up={bundleType:_n.bundleType,version:_n.version,rendererPackageName:_n.rendererPackageName,rendererConfig:_n.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:it.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=$o(e),e===null?null:e.stateNode},findFiberByHostInstance:_n.findFiberByHostInstance||ip,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _r=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_r.isDisabled&&_r.supportsFiber)try{gl=_r.inject(up),Xe=_r}catch{}}Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=op;Pe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hi(t))throw Error(S(200));return sp(e,t,null,n)};Pe.createRoot=function(e,t){if(!Hi(e))throw Error(S(299));var n=!1,r="",s=kc;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Wi(e,1,!1,null,null,n,!1,r,s),e[rt]=t.current,er(e.nodeType===8?e.parentNode:e),new $i(t)};Pe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=$o(t),e=e===null?null:e.stateNode,e};Pe.flushSync=function(e){return Wt(e)};Pe.hydrate=function(e,t,n){if(!Pl(t))throw Error(S(200));return Ll(null,e,t,!0,n)};Pe.hydrateRoot=function(e,t,n){if(!Hi(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=kc;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=wc(t,null,e,1,n??null,s,!1,i,a),e[rt]=t.current,er(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Tl(t)};Pe.render=function(e,t,n){if(!Pl(t))throw Error(S(200));return Ll(null,e,t,!1,n)};Pe.unmountComponentAtNode=function(e){if(!Pl(e))throw Error(S(40));return e._reactRootContainer?(Wt(function(){Ll(null,null,e,!1,function(){e._reactRootContainer=null,e[rt]=null})}),!0):!1};Pe.unstable_batchedUpdates=Oi;Pe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Pl(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return Ll(e,t,n,!1,r)};Pe.version="18.3.1-next-f1338f8080-20240426";function Sc(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Sc)}catch(e){console.error(e)}}Sc(),So.exports=Pe;var cp=So.exports,uo=cp;ss.createRoot=uo.createRoot,ss.hydrateRoot=uo.hydrateRoot;function dp(){var Zi,Ji,qi,ea;const[e,t]=Q.useState(!0),[n,r]=Q.useState("general"),[s,i]=Q.useState(!1),[a,u]=Q.useState(!1),[d,p]=Q.useState(!1),y=Q.useRef({pcrRawDataType:"type1",sampleId:"",resultView:"Simple",ctValueDigit:"Two Decimal Digit",sampleIndexSetting:"enable",targetOnOffChanged:!1}),x=Q.useRef(null),[g,N]=Q.useState(!1),[j,b]=Q.useState({autoBackupPath:"C:\\SV Pro\\Backups\\Auto",scheduledBackupPath:"C:\\SV Pro\\Backups\\Scheduled",keepRecentCount:10,scheduledInterval:"daily",scheduledWeekday:"",scheduledMonthDay:"",lastBackupTime:null,lastAutoBackupTime:null,lastScheduledBackupTime:null,autoBackupFiles:[{name:"2026-01-13T15-30_settings_auto.json",date:"2026-01-13T15:30:00Z",size:"24KB"},{name:"2026-01-13T14-45_settings_auto.json",date:"2026-01-13T14:45:00Z",size:"24KB"},{name:"2026-01-13T10-20_settings_auto.json",date:"2026-01-13T10:20:00Z",size:"24KB"},{name:"2026-01-12T16-15_settings_auto.json",date:"2026-01-12T16:15:00Z",size:"23KB"},{name:"2026-01-12T09-30_settings_auto.json",date:"2026-01-12T09:30:00Z",size:"23KB"},{name:"2026-01-11T14-20_settings_auto.json",date:"2026-01-11T14:20:00Z",size:"23KB"}],scheduledBackupFile:{name:"2026-01-13T09-00_settings_scheduled.json",date:"2026-01-13T09:00:00Z",size:"24KB"}}),[V,h]=Q.useState(!1),[f,m]=Q.useState(null),[w,C]=Q.useState(""),[P,z]=Q.useState(null),[F,H]=Q.useState(null),[A,pe]=Q.useState(!1),[Pt,at]=Q.useState(!1),[hr,mr]=Q.useState(!1),[Sn,Ht]=Q.useState(""),[E,D]=Q.useState(""),[k,X]=Q.useState("master"),[c,ze]=Q.useState({language:"ko",pcrRawDataType:"type1",csvHeaderSettings:"",loadingMethods:{manual:!0,preset:!1,plrn:!1,csv:!1,barcode:!1},plateBarcode:!1,plateSettingFile:"None",csvFileOpenOption:"",plateSetting:{manual:!1,preset:!1},sampleId:"",targetAbbreviation:!1,openPcrDataFileFolderPath:"",openLimsFileFolderPath:"",exportFolderPath:"",saveFolderPath:"",saveWorkListFolderPath:"",resultView:"Simple",wellTable:"세로",resultDisplay:"Plain Text",ctValueDigit:"Two Decimal Digit",sampleIndexSetting:"enable",displayPositiveWhenICNegative:!1,invalidateWhenPCNCInvalid:!1,autoExport:!1,sampleToExport:"All Samples",exportFormat:"xlsx",targetAlignmentMethod:"세로",meltTemperatureColumn:!1,useRawDataFilename:!0,usePrefix:!1,prefixType:"",createNewFolder:!1,folderNameType:"",printRange:"All Samples",printItems:{number:!0,sampleId:!0},logoFile:"",addLogoToPrint:!1,logoPrintLocation:"",watermarkFile:"",addWatermarkToPrint:!1,watermarkLayout:"",hl7Version:"2.5.1",hl7TransferItems:{result:!0,ctValue:!0,meltTemp:!1},hl7SdInvalid:!1,hl7AutoSend:!1,hl7SampleToExport:"All Samples",hl7TransferProtocol:"HTTP",hl7ServerIP:"",hl7ServerPort:"",hl7TransferMethod:"all-at-once",hl7ResponseTimeout:"30000",hl7AbbrevAssaySearch:"",hl7AbbrevSelectedAssay:null,assaySearch:"",assayList:[{id:1,name:"Allplex SARS-CoV-2",intendedUse:"IVD",version:"1.0.0",manufacturer:"Seegene",installDate:"2024-01-15",targets:[{id:1,channel:"FAM",dye:"FAM",target:"E gene",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"RdRP gene",enabled:!0},{id:3,channel:"Cal Red 610",dye:"CR610",target:"N gene",enabled:!0},{id:4,channel:"Quasar 670",dye:"Q670",target:"IC",enabled:!0}]},{id:2,name:"Allplex Respiratory Panel 1",intendedUse:"IVD",version:"2.1.0",manufacturer:"Seegene",installDate:"2024-02-20",targets:[{id:1,channel:"FAM",dye:"FAM",target:"Flu A",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"Flu B",enabled:!0},{id:3,channel:"Cal Red 610",dye:"CR610",target:"RSV A",enabled:!0},{id:4,channel:"Quasar 670",dye:"Q670",target:"RSV B",enabled:!0},{id:5,channel:"Quasar 705",dye:"Q705",target:"ADV",enabled:!0}]},{id:3,name:"Allplex GI-Bacteria",intendedUse:"IVD",version:"1.5.2",manufacturer:"Seegene",installDate:"2024-03-10",targets:[{id:1,channel:"FAM",dye:"FAM",target:"Salmonella",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"Shigella",enabled:!0},{id:3,channel:"Cal Red 610",dye:"CR610",target:"E.coli",enabled:!0}]},{id:4,name:"GenePlex COVID-19 Detection Kit",intendedUse:"RUO",version:"1.2.0",manufacturer:"new-co",installDate:"2024-04-15",targets:[{id:1,channel:"FAM",dye:"FAM",target:"ORF1ab",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"N gene",enabled:!0}]},{id:5,name:"GenePlex Influenza Panel",intendedUse:"IVD",version:"2.0.1",manufacturer:"new-co",installDate:"2024-05-20",targets:[{id:1,channel:"FAM",dye:"FAM",target:"Influenza A",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"Influenza B",enabled:!0},{id:3,channel:"Cal Red 610",dye:"CR610",target:"H1N1",enabled:!0}]},{id:6,name:"GenePlex STI Panel",intendedUse:"IVD",version:"1.8.0",manufacturer:"new-co",installDate:"2024-06-10",targets:[{id:1,channel:"FAM",dye:"FAM",target:"CT",enabled:!0},{id:2,channel:"HEX",dye:"HEX",target:"NG",enabled:!0},{id:3,channel:"Cal Red 610",dye:"CR610",target:"MG",enabled:!0},{id:4,channel:"Quasar 670",dye:"Q670",target:"TV",enabled:!0}]}],selectedAssay:null,showAddAssayModal:!1,newAssay:{name:"",intendedUse:"IVD",version:"",manufacturer:"",installDate:""}}),Qt=(()=>{const o=[{id:"general",label:"General",icon:"⚙️",subTabs:k==="master"?[{id:"general-permission",label:"기능별 권한 설정"}]:void 0},{id:"display",label:"Display Setting",icon:"🖥️",subTabs:k==="master"?[{id:"display-target",label:"Target on/off"},{id:"display-developer",label:"Developer Setting"},{id:"display-negative",label:"Negative C(t) Value"}]:void 0},{id:"backup",label:"Backup/Restore",icon:"💾"}];if((k==="master"||k==="admin")&&(o.splice(2,0,{id:"export",label:"Export",icon:"📤",subTabs:k==="master"?[{id:"export-hl7-transfer",label:"HL7 Transfer Setting"},{id:"export-hl7-abbrev",label:"HL7 Abbreviation Setting"}]:[{id:"export-hl7-transfer",label:"HL7 Transfer Setting"}]}),o.splice(3,0,{id:"print",label:"Print",icon:"🖨️"})),k==="master"){const v=o.findIndex(_=>_.id==="backup");o.splice(v,0,{id:"assay",label:"Assay Pack",icon:"🧬"})}return o})(),L=(o,v)=>{!s&&!x.current&&(x.current=JSON.parse(JSON.stringify(c))),ze(_=>({..._,[o]:v})),i(!0)},Lt=(o,v)=>{!s&&!x.current&&(x.current=JSON.parse(JSON.stringify(c))),ze(_=>({..._,[o]:{..._[o],[v]:!_[o][v]}})),i(!0)},Qi=o=>{r(o)},Nc=()=>{const o=y.current;return c.pcrRawDataType!==o.pcrRawDataType||c.sampleId!==o.sampleId||c.resultView!==o.resultView||c.ctValueDigit!==o.ctValueDigit||c.sampleIndexSetting!==o.sampleIndexSetting||g},bc=()=>{if(!Object.values(c.loadingMethods).some(o=>o)){alert("⚠️ Data Loading Methods를 최소 하나 이상 선택해주세요."),r("general");return}if(c.exportFormat==="csv"&&["et","fr","de","it","lv","lt","pt","es","tr"].includes(c.language)&&c.csvHeaderSettings===""){alert(`⚠️ CSV 포맷이 선택되고 해당 언어에서는 CSV Header Settings를 선택해야 합니다.
CSV Header Settings을 선택해주세요.`),r("general");return}if((c.loadingMethods.plrn||c.loadingMethods.barcode)&&c.sampleId===""){alert(`⚠️ LIMS(.plrn) 또는 바코드로 불러오기가 선택되어 있습니다.
Sample ID를 선택해주세요.`),r("general");return}if(c.loadingMethods.csv&&!c.plateSetting.manual&&!c.plateSetting.preset){alert(`⚠️ CSV 불러오기가 선택되어 있습니다.
Plate Setting (Manual 또는 Preset 중 최소 하나)을 선택해주세요.`),r("general");return}if(c.loadingMethods.csv&&c.csvFileOpenOption===""){alert(`⚠️ CSV 불러오기가 선택되어 있습니다.
CSV File Open Option을 선택해주세요.`),r("general");return}if(!c.resultView||c.resultView===""){alert("⚠️ Result View를 선택해주세요."),r("display");return}if(!c.wellTable||c.wellTable===""){alert("⚠️ Well Table을 선택해주세요."),r("display");return}if(!c.resultDisplay||c.resultDisplay===""){alert("⚠️ Result Display를 선택해주세요."),r("display");return}if(!c.ctValueDigit||c.ctValueDigit===""){alert("⚠️ C(t) Value Digit을 선택해주세요."),r("display");return}if(!c.sampleIndexSetting||c.sampleIndexSetting===""){alert("⚠️ Sample Index Setting을 선택해주세요."),r("display");return}if(!c.sampleToExport||c.sampleToExport===""){alert("⚠️ Sample to Export를 선택해주세요."),r("export");return}if(!c.exportFormat||c.exportFormat===""){alert("⚠️ Export Format을 선택해주세요."),r("export");return}if(!c.targetAlignmentMethod||c.targetAlignmentMethod===""){alert("⚠️ Target Alignment Method를 선택해주세요."),r("export");return}if(!c.hl7Version||c.hl7Version===""){alert("⚠️ HL7 Version을 선택해주세요."),r("export");return}if(!c.hl7SampleToExport||c.hl7SampleToExport===""){alert("⚠️ HL7 Sample to Export를 선택해주세요."),r("export");return}if(!c.hl7TransferProtocol||c.hl7TransferProtocol===""){alert("⚠️ HL7 Transfer Protocol을 선택해주세요."),r("export");return}if(!c.hl7TransferMethod||c.hl7TransferMethod===""){alert("⚠️ HL7 Transfer Method를 선택해주세요."),r("export");return}if(c.usePrefix&&c.prefixType===""){alert(`⚠️ Use Prefix가 활성화되어 있습니다.
Prefix Type을 선택해주세요.`),r("export");return}if(c.createNewFolder&&c.folderNameType===""){alert(`⚠️ Create New Folder가 활성화되어 있습니다.
Folder Name Type을 선택해주세요.`),r("export");return}if(!c.printRange||c.printRange===""){alert("⚠️ Print Range를 선택해주세요."),r("print");return}if(c.addLogoToPrint&&c.logoPrintLocation===""){alert(`⚠️ Add Logo to Print가 활성화되어 있습니다.
Logo Print Location을 선택해주세요.`),r("print");return}if(c.addWatermarkToPrint&&c.watermarkLayout===""){alert(`⚠️ Add Watermark to Print가 활성화되어 있습니다.
Watermark Layout을 선택해주세요.`),r("print");return}if(!j.scheduledInterval||j.scheduledInterval===""){alert("⚠️ Scheduled Interval을 선택해주세요."),r("backup");return}if(j.scheduledInterval==="weekly"&&j.scheduledWeekday===""){alert(`⚠️ Scheduled Backup이 Weekly로 설정되어 있습니다.
백업 요일을 선택해주세요.`),r("backup");return}if(j.scheduledInterval==="monthly"&&j.scheduledMonthDay===""){alert(`⚠️ Scheduled Backup이 Monthly로 설정되어 있습니다.
백업 날짜를 선택해주세요.`),r("backup");return}if(Nc()){p(!0);return}Ki()},Ki=()=>{y.current={pcrRawDataType:c.pcrRawDataType,sampleId:c.sampleId,resultView:c.resultView,ctValueDigit:c.ctValueDigit,sampleIndexSetting:c.sampleIndexSetting,targetOnOffChanged:!1},x.current=null,N(!1),i(!1),u(!0),setTimeout(()=>{u(!1)},3e3),F&&(console.log("Import event logged (on Save):",{type:"import",fileName:F.fileName,timestamp:new Date().toISOString(),user:"current_user@example.com",changedCount:F.appliedCount,skippedCount:F.skippedCount}),H(null)),zc()},Cc=()=>{p(!1),Ki()},Ec=()=>{p(!1)},Tc=()=>{if(!c.newAssay.name||!c.newAssay.version||!c.newAssay.manufacturer||!c.newAssay.installDate){alert("모든 필수 항목을 입력해주세요.");return}const o={id:c.assayList.length+1,name:c.newAssay.name,intendedUse:c.newAssay.intendedUse,version:c.newAssay.version,manufacturer:c.newAssay.manufacturer,installDate:c.newAssay.installDate};ze(v=>({...v,assayList:[...v.assayList,o],showAddAssayModal:!1,newAssay:{name:"",intendedUse:"IVD",version:"",manufacturer:"",installDate:""}}))},Pc=o=>{confirm("선택한 Assay Pack을 삭제하시겠습니까?")&&ze(v=>({...v,assayList:v.assayList.filter(_=>_.id!==o),selectedAssay:v.selectedAssay===o?null:v.selectedAssay}))},Nn=(o,v)=>{ze(_=>({..._,newAssay:{..._.newAssay,[o]:v}}))},Xi=o=>{const v=JSON.parse(JSON.stringify(o));return["hl7ServerIP","hl7ServerPort","openPcrDataFileFolderPath","openLimsFileFolderPath","exportFolderPath","saveFolderPath","saveWorkListFolderPath","logoFile","watermarkFile"].forEach(I=>{if(v[I]&&v[I].length>0){const M=v[I];M.length>3?v[I]=M.substring(0,3)+"*".repeat(M.length-3):v[I]="*".repeat(M.length)}}),v},Yi=o=>{const v={...o};return delete v.assayList,delete v.assaySearch,delete v.showAddAssayModal,delete v.newAssay,v},Lc=async()=>{if(s){mr(!0);return}try{const v=`settings_manual_${new Date().toISOString().replace(/[:.]/g,"-").slice(0,-5)}.json`,_=Yi(c),I=Xi(_),M={metadata:{version:"1.0",exportDate:new Date().toISOString(),exportedBy:"current_user@example.com",softwareVersion:"2.5.0",description:"SV Pro Settings Manual Export",exportType:"manual"},settings:I},Ge=JSON.stringify(M,null,2);if("showSaveFilePicker"in window)try{const ee=await(await window.showSaveFilePicker({suggestedName:v,types:[{description:"JSON Files",accept:{"application/json":[".json"]}}]})).createWritable();await ee.write(Ge),await ee.close(),b(Ne=>({...Ne,lastBackupTime:new Date().toISOString()})),Ht(`설정 파일이 성공적으로 저장되었습니다.
파일명: ${v}`),pe(!0),console.log("Export event logged:",{type:"manual_export",fileName:v,timestamp:new Date().toISOString(),user:"current_user"})}catch(ve){if(ve.name==="AbortError"){console.log("파일 저장이 취소되었습니다.");return}throw ve}else{const ve=new Blob([Ge],{type:"application/json"}),ee=URL.createObjectURL(ve),Ne=document.createElement("a");Ne.href=ee,Ne.download=v,Ne.click(),URL.revokeObjectURL(ee),b(_l=>({..._l,lastBackupTime:new Date().toISOString()})),Ht(`설정 파일이 성공적으로 내보내졌습니다.
파일명: ${v}`),pe(!0),console.log("Export event logged:",{type:"manual_export",fileName:v,timestamp:new Date().toISOString(),user:"current_user"})}}catch(o){alert("설정 내보내기 중 오류가 발생했습니다: "+o.message)}},zc=async()=>{try{const v=`${new Date().toISOString().replace(/:/g,"-").slice(0,16)}_settings_auto.json`,_=Yi(c),I=Xi(_),M={metadata:{version:"1.0",exportDate:new Date().toISOString(),exportedBy:"current_user@example.com",softwareVersion:"2.5.0",description:"SV Pro Settings Auto Export (On Save)",exportType:"auto_on_save"},settings:I},Ge=JSON.stringify(M,null,2),ve=(new Blob([Ge]).size/1024).toFixed(0)+"KB";console.log("Auto export on save:",v,"to path:",j.autoBackupPath),b(ee=>{const _l=[{name:v,date:new Date().toISOString(),size:ve},...ee.autoBackupFiles].slice(0,ee.keepRecentCount);return{...ee,autoBackupFiles:_l,lastAutoBackupTime:new Date().toISOString()}}),console.log("Export event logged:",{type:"auto_export_on_save",fileName:v,path:j.autoBackupPath,timestamp:new Date().toISOString()})}catch(o){console.error("Auto export failed:",o)}},_c=o=>{const v=o.target.files[0];if(!v)return;const _=new FileReader;_.onload=I=>{try{const M=JSON.parse(I.target.result);if(!M.metadata||!M.settings){alert("잘못된 설정 파일 형식입니다.");return}const ve=Fc(c,M.settings).filter(ee=>ee.status==="changed"||ee.status==="type_mismatch"||ee.status==="new_key");if(ve.length===0){alert("동일한 설정 내용입니다."),o.target.value="";return}m(ve),z(M.settings),C(v.name),h(!0)}catch(M){alert("파일을 읽는 중 오류가 발생했습니다: "+M.message)}},_.readAsText(v),o.target.value=""},Fc=(o,v)=>{const _=[];return new Set([...Object.keys(o),...Object.keys(v)]).forEach(M=>{const Ge=o[M],ve=v[M];let ee="",Ne="";M in o?M in v?JSON.stringify(Ge)===JSON.stringify(ve)?(ee="unchanged",Ne="동일"):typeof Ge!=typeof ve?(ee="type_mismatch",Ne="타입 불일치 (적용 안 함)"):(ee="changed",Ne="변경됨"):(ee="unchanged",Ne="파일에 없음 (현재 값 유지)"):(ee="new_key",Ne="새로운 설정 키 (적용 안 함)"),_.push({category:Ic(M),key:M,current:Gi(Ge),imported:Gi(ve),status:ee,reason:Ne})}),_},Ic=o=>o.startsWith("hl7")?"HL7 Setting":["resultView","wellTable","resultDisplay","ctValueDigit","sampleIndexSetting"].includes(o)?"Display Setting":["autoExport","sampleToExport","exportFormat"].includes(o)?"Export":["printRange","printItems","logoFile"].includes(o)?"Print":["assayList","selectedAssay"].includes(o)?"Assay Pack":"General",Gi=o=>o==null?"-":typeof o=="object"?Array.isArray(o)?`Array(${o.length})`:"Object":typeof o=="boolean"?o?"true":"false":String(o),Dc=()=>{try{if(!P||!f){alert("Import 데이터가 없습니다.");return}let o=0,v=0;const _={...c};f.forEach(I=>{I.status==="changed"?I.key in P&&(_[I.key]=P[I.key],o++):(I.status==="new_key"||I.status==="type_mismatch")&&v++}),ze(_),i(!0),H({fileName:w,appliedCount:o,skippedCount:v,timestamp:new Date().toISOString()}),D(`설정이 적용되었습니다. ${o}개 항목이 업데이트됩니다.
'저장' 버튼을 눌러 최종 저장하세요.`),at(!0),h(!1),console.log("Import applied to settings state:",{fileName:w,appliedCount:o,skippedCount:v,note:"Will be saved to DB when Save button is clicked"})}catch(o){alert("설정 가져오기 중 오류가 발생했습니다: "+o.message)}},zl=(o,v)=>{b(_=>({..._,[o]:v})),i(!0)},Ac=()=>{s?confirm("저장하지 않은 변경사항이 있습니다. 저장하지 않고 닫으시겠습니까?")&&(x.current&&(ze(x.current),x.current=null),i(!1),N(!1),t(!1)):t(!1)};return e?l.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",zIndex:1e3},children:[l.jsx("style",{children:`
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
      `}),l.jsxs("div",{className:"popup-container",children:[l.jsxs("div",{className:"popup-header",children:[l.jsx("h1",{children:"⚙️ Settings"}),l.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[l.jsxs("select",{value:k,onChange:o=>X(o.target.value),style:{padding:"6px 12px",borderRadius:"6px",border:"1px solid rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.15)",color:"white",fontSize:"13px",cursor:"pointer",fontWeight:"500"},children:[l.jsx("option",{value:"user",style:{color:"#1f2937"},children:"👤 User"}),l.jsx("option",{value:"admin",style:{color:"#1f2937"},children:"🔧 Admin"}),l.jsx("option",{value:"master",style:{color:"#1f2937"},children:"👑 Master"})]}),l.jsx("button",{className:"close-btn",onClick:Ac,children:"✕"})]})]}),l.jsxs("div",{className:"popup-body",children:[l.jsx("div",{className:"vertical-tabs",children:Qt.map(o=>l.jsxs(wo.Fragment,{children:[l.jsxs("div",{className:`tab-item ${n===o.id||n.startsWith(o.id+"-")?"active":""} ${o.subTabs?"has-subtabs":""}`,onClick:()=>Qi(o.id),children:[l.jsx("span",{className:"tab-icon",children:o.icon}),l.jsx("span",{children:o.label}),s&&(n===o.id||n.startsWith(o.id+"-"))&&l.jsx("div",{className:"unsaved-dot"}),o.subTabs&&l.jsx("span",{style:{marginLeft:"auto",fontSize:10,color:"#94a3b8"},children:n===o.id||n.startsWith(o.id+"-")?"▼":"▶"})]}),o.subTabs&&l.jsx("div",{className:`sub-tabs ${n===o.id||n.startsWith(o.id+"-")?"open":""}`,children:o.subTabs.map(v=>l.jsx("div",{className:`sub-tab-item ${n===v.id?"active":""}`,onClick:()=>Qi(v.id),children:v.label},v.id))})]},o.id))}),l.jsxs("div",{className:"tab-content",children:[l.jsx("div",{className:"tab-content-header",children:l.jsx("h2",{children:(()=>{var _;const o=Qt.find(I=>I.id===n||n.startsWith(I.id+"-")),v=(_=o==null?void 0:o.subTabs)==null?void 0:_.find(I=>I.id===n);return v?`${o.label} > ${v.label}`:o==null?void 0:o.label})()})}),l.jsxs("div",{className:"tab-content-body",children:[n==="general"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Language"}),l.jsx("div",{className:"setting-control",children:l.jsxs("select",{value:c.language,onChange:o=>L("language",o.target.value),children:[l.jsx("option",{value:"ko",children:"한국어"}),l.jsx("option",{value:"en",children:"English"}),l.jsx("option",{value:"et",children:"Estonian"}),l.jsx("option",{value:"fr",children:"French"}),l.jsx("option",{value:"de",children:"German"}),l.jsx("option",{value:"it",children:"Italian"}),l.jsx("option",{value:"lv",children:"Latvian"}),l.jsx("option",{value:"lt",children:"Lithuanian"}),l.jsx("option",{value:"pt",children:"Portuguese"}),l.jsx("option",{value:"es",children:"Spanish"}),l.jsx("option",{value:"tr",children:"Turkish"})]})})]}),k==="master"&&l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["PCR Raw Data Type",l.jsx("small",{children:"PCR 장비 SW설정"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("select",{value:c.pcrRawDataType,onChange:o=>L("pcrRawDataType",o.target.value),children:[l.jsx("option",{value:"type1",children:"Type 1"}),l.jsx("option",{value:"type2",children:"Type 2"})]})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"타겟 약어 사용"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.targetAbbreviation?"active":""}`,onClick:()=>L("targetAbbreviation",!c.targetAbbreviation)}),l.jsx("span",{className:"toggle-label",children:c.targetAbbreviation?"ON":"OFF"})]})]}),(k==="master"||k==="admin")&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"subsection-title",children:["데이터 불러오기 방식",l.jsxs("div",{className:"tooltip-container",children:[l.jsx("div",{className:"tooltip-icon",children:"i"}),l.jsxs("div",{className:"tooltip-content",children:[l.jsx("strong",{children:"다중 선택 규칙"}),"• 여러 방식을 동시에 선택할 수 있습니다",l.jsx("br",{}),"• LIMS(.plrn)과 CSV는 동시에 선택할 수 없습니다",l.jsx("br",{}),"• 바코드만 단독으로 선택할 수 없습니다",l.jsx("br",{}),"  (다른 방식과 함께 사용 필요)"]})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["불러오기 방식 선택",l.jsx("small",{children:"복수 선택 가능"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"flow-button-group",children:[{key:"manual",label:"Manual",desc:"Plate Setting을 수동으로 설정"},{key:"preset",label:"Preset",desc:"저장된 Plate Setting 사용"},{key:"plrn",label:"LIMS(.plrn) 파일",desc:"plrn 파일로 직접 불러오기"},{key:"csv",label:"CSV",desc:"CSV 파일로 불러오기"},{key:"barcode",label:"바코드로 불러오기",desc:"Plate Barcode 스캔으로 불러오기"}].map(o=>{const v=c.loadingMethods[o.key],_=o.key==="plrn"&&c.loadingMethods.csv||o.key==="csv"&&c.loadingMethods.plrn;return l.jsxs("div",{className:`flow-button ${v?"selected":""} ${_?"disabled":""}`,onClick:()=>{if(_)return;const I={...c.loadingMethods};I[o.key]=!I[o.key],o.key==="plrn"&&I[o.key]&&(I.csv=!1),o.key==="csv"&&I[o.key]&&(I.plrn=!1),L("loadingMethods",I)},children:[l.jsx("div",{className:"flow-button-label",children:o.label}),l.jsx("div",{className:"flow-button-desc",children:o.desc})]},o.key)})})})]}),c.loadingMethods.barcode&&!c.loadingMethods.manual&&!c.loadingMethods.preset&&!c.loadingMethods.plrn&&!c.loadingMethods.csv&&l.jsxs("div",{className:"setting-row",style:{background:"#fef3c7",border:"1px solid #fbbf24"},children:[l.jsx("div",{className:"setting-label",children:l.jsx("span",{style:{color:"#92400e",fontWeight:600},children:"⚠️ 경고"})}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{style:{color:"#92400e",fontSize:"13px",lineHeight:"1.5"},children:["바코드만 선택된 상태입니다. 바코드 읽기 실패 시를 대비하여 ",l.jsx("strong",{children:"Manual, Preset, LIMS(.plrn), CSV 중 최소 하나 이상"}),"을 함께 선택해주세요."]})})]}),l.jsxs("div",{className:"setting-row",style:{background:"#f0f9ff"},children:[l.jsxs("div",{className:"setting-label",children:["선택된 방식",l.jsx("small",{children:"현재 활성화된 불러오기 방식"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"},children:[Object.entries(c.loadingMethods).filter(([o,v])=>v).map(([o])=>{const v={manual:"Manual",preset:"Preset",plrn:"LIMS(.plrn)",csv:"CSV",barcode:"바코드"};return l.jsx("span",{style:{padding:"4px 12px",background:"#2563eb",color:"white",borderRadius:"16px",fontSize:"12px",fontWeight:500},children:v[o]},o)}),!Object.values(c.loadingMethods).some(o=>o)&&l.jsx("span",{style:{color:"#ef4444",fontSize:"13px",fontWeight:500},children:"⚠️ 최소 하나의 방식을 선택하세요"})]})})]}),c.loadingMethods.csv&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[l.jsxs("div",{className:"setting-label",children:["Plate Setting",l.jsx("small",{children:"CSV 사용 시 Plate Setting 선택"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"checkbox-group",children:["manual","preset"].map(o=>l.jsxs("div",{className:`checkbox-item ${c.plateSetting[o]?"checked":""}`,onClick:()=>Lt("plateSetting",o),children:[l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),o.charAt(0).toUpperCase()+o.slice(1)]},o))})})]}),l.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[l.jsxs("div",{className:"setting-label",children:["csv File Open Option",l.jsx("small",{children:"CSV 파일 열기 옵션"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["Sample No","Patient Id","Name"].map(o=>l.jsxs("div",{className:`radio-item ${c.csvFileOpenOption===o?"selected":""}`,onClick:()=>L("csvFileOpenOption",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]})]}),(c.loadingMethods.plrn||c.loadingMethods.barcode)&&l.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[l.jsxs("div",{className:"setting-label",children:["Sample ID",l.jsx("small",{children:"plrn 또는 바코드 선택 시 활성화"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:[{value:"plrn",label:"from LIMS(.plrn)"},{value:"pcr data",label:"from PCR Raw Data"}].map(o=>l.jsxs("div",{className:`radio-item ${c.sampleId===o.value?"selected":""}`,onClick:()=>L("sampleId",o.value),children:[l.jsx("div",{className:"radio-dot"}),o.label]},o.value))})})]})]}),l.jsx("div",{className:"subsection-title",children:"Folder Setting"}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Open PCR Data File Folder Path",l.jsx("small",{children:"PCR 데이터 파일 열기 경로"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:c.openPcrDataFileFolderPath,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Open LIMS(.plrn) File Folder Path",l.jsx("small",{children:"LIMS 파일 열기 경로"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:c.openLimsFileFolderPath,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Export Folder Path",l.jsx("small",{children:"결과 파일 내보내기 경로"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"C:\\Seegene",value:c.exportFolderPath,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Save Folder Path",l.jsx("small",{children:"파일 저장 경로"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:c.saveFolderPath,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]}),l.jsxs("div",{className:"setting-row sub-item",children:[l.jsxs("div",{className:"setting-label",children:["Save WorkList Folder Path",l.jsx("small",{children:"WorkList 저장 경로"})]}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"폴더 경로를 선택하세요",value:c.saveWorkListFolderPath,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📁 찾아보기"})]})})]})]}),n==="general-permission"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-notice",children:[l.jsx("div",{className:"info-icon",children:"🔐"}),l.jsxs("div",{className:"info-text",children:[l.jsx("strong",{children:"기능별 권한 설정"}),l.jsx("p",{children:"각 기능에 대해 Admin과 User의 접근 권한을 설정합니다."})]})]}),l.jsx("div",{style:{padding:"16px 24px"},children:l.jsxs("table",{className:"permission-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"50%"},children:"기능"}),l.jsx("th",{style:{width:"25%",textAlign:"center"},children:"Admin"}),l.jsx("th",{style:{width:"25%",textAlign:"center"},children:"User"})]})}),l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("div",{className:"feature-name",children:"설정파일 Import 기능"}),l.jsx("div",{className:"feature-desc",children:"백업된 설정 파일을 불러와 복원하는 기능"})]}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item disabled",style:{justifyContent:"center",opacity:"0.5",cursor:"not-allowed"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("div",{className:"feature-name",children:"기능 B"}),l.jsx("div",{className:"feature-desc",children:"기능 B에 대한 설명"})]}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("div",{className:"feature-name",children:"기능 C"}),l.jsx("div",{className:"feature-desc",children:"기능 C에 대한 설명"})]}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]}),l.jsxs("tr",{children:[l.jsxs("td",{children:[l.jsx("div",{className:"feature-name",children:"기능 D"}),l.jsx("div",{className:"feature-desc",children:"기능 D에 대한 설명"})]}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item checked",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("div",{className:"checkbox-item",style:{justifyContent:"center"},children:l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})})})})]})]})]})})]}),n==="display"&&l.jsxs(l.Fragment,{children:[(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Result View"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["Simple","Analysis"].map(o=>l.jsxs("div",{className:`radio-item ${c.resultView===o?"selected":""}`,onClick:()=>L("resultView",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Well Table"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["세로","가로"].map(o=>l.jsxs("div",{className:`radio-item ${c.wellTable===o?"selected":""}`,onClick:()=>L("wellTable",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Result Display"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["Plain Text","Bold and Colored Text"].map(o=>l.jsxs("div",{className:`radio-item ${c.resultDisplay===o?"selected":""}`,onClick:()=>L("resultDisplay",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),k==="master"&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"C(t) Value Digit"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["One Decimal Digit","Two Decimal Digit"].map(o=>l.jsxs("div",{className:`radio-item ${c.ctValueDigit===o?"selected":""}`,onClick:()=>L("ctValueDigit",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Sample Index Setting"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["enable","disable"].map(o=>l.jsxs("div",{className:`radio-item ${c.sampleIndexSetting===o?"selected":""}`,onClick:()=>L("sampleIndexSetting",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Display positive samples when IC is negative"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.displayPositiveWhenICNegative?"active":""}`,onClick:()=>L("displayPositiveWhenICNegative",!c.displayPositiveWhenICNegative)}),l.jsx("span",{className:"toggle-label",children:c.displayPositiveWhenICNegative?"ON":"OFF"})]})]}),k==="master"&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Invalidate all samples when either PC or NC is invalid"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.invalidateWhenPCNCInvalid?"active":""}`,onClick:()=>L("invalidateWhenPCNCInvalid",!c.invalidateWhenPCNCInvalid)}),l.jsx("span",{className:"toggle-label",children:c.invalidateWhenPCNCInvalid?"ON":"OFF"})]})]})]}),n==="display-target"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-notice",children:[l.jsx("div",{className:"info-icon",children:"🎯"}),l.jsxs("div",{className:"info-text",children:[l.jsx("strong",{children:"Target 표시 설정"}),l.jsx("p",{children:"Assay별로 표시할 Target을 선택합니다. OFF로 설정된 Target은 분석 결과 화면에 표시되지 않습니다."})]})]}),l.jsxs("div",{style:{marginBottom:"20px"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px",padding:"10px 15px",background:"#f8f9fa",borderRadius:"8px"},children:[l.jsx("h3",{style:{margin:0,fontSize:"16px",fontWeight:"600"},children:"Assay Pack 목록"}),l.jsxs("div",{className:"search-box",style:{width:"300px"},children:[l.jsx("span",{children:"🔍"}),l.jsx("input",{type:"text",placeholder:"Assay 검색...",value:c.assaySearch,onChange:o=>L("assaySearch",o.target.value),style:{width:"100%"}})]})]}),l.jsxs("div",{className:"data-table",children:[l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"40%"},children:"Assay Name"}),l.jsx("th",{style:{width:"15%"},children:"Intended Use"}),l.jsx("th",{style:{width:"15%"},children:"제조사"}),l.jsx("th",{style:{width:"15%"},children:"Version"}),l.jsx("th",{style:{width:"15%"},children:"Targets"})]})}),l.jsx("tbody",{children:c.assayList.filter(o=>o.name.toLowerCase().includes(c.assaySearch.toLowerCase())).map(o=>{var v;return l.jsxs("tr",{className:c.selectedAssay===o.id?"selected":"",onClick:()=>{L("selectedAssay",o.id)},style:{cursor:"pointer"},children:[l.jsx("td",{style:{fontWeight:"500"},children:o.name}),l.jsx("td",{children:l.jsx("span",{className:"badge",style:{background:o.intendedUse==="IVD"?"#dcfce7":o.intendedUse==="RUO"?"#e0e7ff":"#fef3c7",color:o.intendedUse==="IVD"?"#166534":o.intendedUse==="RUO"?"#3730a3":"#92400e",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:o.intendedUse})}),l.jsx("td",{children:o.manufacturer}),l.jsx("td",{style:{fontFamily:"monospace",color:"#6b7280"},children:o.version}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("span",{style:{background:"#dbeafe",color:"#1e40af",padding:"4px 10px",borderRadius:"12px",fontSize:"12px",fontWeight:"600"},children:((v=o.targets)==null?void 0:v.length)||0})})]},o.id)})})]}),c.assayList.filter(o=>o.name.toLowerCase().includes(c.assaySearch.toLowerCase())).length===0&&l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"🔍"}),l.jsx("p",{children:"검색 결과가 없습니다."})]})]})]}),l.jsxs("div",{style:{border:"2px solid #3b82f6",borderRadius:"8px",padding:"20px",background:"#f8fafc"},children:[l.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"15px"},children:[l.jsxs("div",{children:[l.jsx("h3",{style:{margin:"0 0 5px 0",color:"#1e40af",fontSize:"16px"},children:"Target 설정"}),c.selectedAssay&&l.jsx("span",{style:{fontSize:"14px",color:"#6b7280"},children:(Zi=c.assayList.find(o=>o.id===c.selectedAssay))==null?void 0:Zi.name})]}),c.selectedAssay&&l.jsxs("div",{style:{display:"flex",gap:"10px"},children:[l.jsx("button",{className:"btn btn-secondary",style:{fontSize:"13px",padding:"8px 16px"},onClick:()=>{const o=c.assayList.map(v=>v.id===c.selectedAssay?{...v,targets:v.targets.map(_=>({..._,enabled:!1}))}:v);L("assayList",o),N(!0)},children:"전체 OFF"}),l.jsx("button",{className:"btn btn-primary",style:{fontSize:"13px",padding:"8px 16px"},onClick:()=>{const o=c.assayList.map(v=>v.id===c.selectedAssay?{...v,targets:v.targets.map(_=>({..._,enabled:!0}))}:v);L("assayList",o),N(!0)},children:"전체 ON"})]})]}),c.selectedAssay?l.jsx("div",{className:"data-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"25%"},children:"Channel"}),l.jsx("th",{style:{width:"20%"},children:"Dye"}),l.jsx("th",{style:{width:"35%"},children:"Target"}),l.jsx("th",{style:{width:"20%",textAlign:"center"},children:"표시"})]})}),l.jsx("tbody",{children:(Ji=c.assayList.find(o=>o.id===c.selectedAssay))==null?void 0:Ji.targets.map(o=>l.jsxs("tr",{children:[l.jsx("td",{children:o.channel}),l.jsx("td",{children:l.jsx("span",{className:"badge dye",style:{background:"#e0e7ff",color:"#3730a3",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:o.dye})}),l.jsx("td",{style:{fontWeight:"500"},children:o.target}),l.jsx("td",{style:{textAlign:"center"},children:l.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[l.jsx("div",{className:`toggle ${o.enabled?"active":""}`,style:{cursor:"pointer"},onClick:()=>{const v=c.assayList.map(_=>_.id===c.selectedAssay?{..._,targets:_.targets.map(I=>I.id===o.id?{...I,enabled:!I.enabled}:I)}:_);L("assayList",v),N(!0)}}),l.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:o.enabled?"#10b981":"#6b7280"},children:o.enabled?"ON":"OFF"})]})})]},o.id))})]})}):l.jsxs("div",{className:"empty-state",children:[l.jsx("div",{className:"empty-icon",children:"☝️"}),l.jsxs("p",{children:["위 Assay Pack 목록에서",l.jsx("br",{}),"항목을 선택하세요"]})]})]})]}),n==="display-developer"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-notice",style:{background:"#fef3c7",borderColor:"#fbbf24",borderLeftColor:"#f59e0b"},children:[l.jsx("div",{className:"info-icon",children:"⚠️"}),l.jsxs("div",{className:"info-text",style:{color:"#92400e"},children:[l.jsx("strong",{style:{color:"#b45309"},children:"Developer Setting"}),l.jsx("p",{style:{color:"#a16207"},children:"개발자 전용 설정입니다. 일반 사용자는 변경하지 않는 것을 권장합니다."})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Display End RFU Value",l.jsx("small",{children:"End RFU 값 표시"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:"toggle"}),l.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Display EPR Value",l.jsx("small",{children:"EPR 값 표시"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:"toggle"}),l.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Display Graph of Negative Target",l.jsx("small",{children:"음성 Target 그래프 표시"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:"toggle"}),l.jsx("span",{className:"toggle-label",children:"OFF"})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Display C(t) of Negative Target",l.jsx("small",{children:"음성 Target의 C(t) 값 표시"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:"toggle"}),l.jsx("span",{className:"toggle-label",children:"OFF"})]})]})]}),n==="display-negative"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-notice",children:[l.jsx("div",{className:"info-icon",children:"📊"}),l.jsxs("div",{className:"info-text",children:[l.jsx("strong",{children:"Negative C(t) Value 표시 설정"}),l.jsx("p",{children:"Assay별로 Negative C(t) Value 표시 여부를 설정합니다. ON으로 설정된 Assay는 음성 결과에도 C(t) 값이 표시됩니다."})]})]}),l.jsx("div",{style:{padding:"16px 24px"},children:l.jsxs("div",{className:"assay-onoff-panel",children:[l.jsxs("div",{className:"panel-header",style:{justifyContent:"space-between"},children:[l.jsx("h3",{children:"Assay 목록"}),l.jsxs("div",{className:"search-box",children:[l.jsx("span",{children:"🔍"}),l.jsx("input",{type:"text",placeholder:"Assay 검색...",value:c.assaySearch,onChange:o=>L("assaySearch",o.target.value)})]})]}),l.jsxs("div",{className:"assay-onoff-list",children:[l.jsxs("div",{className:"assay-onoff-header",children:[l.jsx("span",{className:"th-assay-name",children:"Assay Name"}),l.jsx("span",{className:"th-intended-use",children:"Intended Use"}),l.jsx("span",{className:"th-assay-toggle",children:"Negative C(t)"})]}),c.assayList.filter(o=>o.name.toLowerCase().includes(c.assaySearch.toLowerCase())).map(o=>l.jsxs("div",{className:"assay-onoff-row",children:[l.jsx("span",{className:"td-assay-name",children:o.name}),l.jsx("span",{className:"td-intended-use",children:l.jsx("span",{className:"badge",children:o.intendedUse})}),l.jsxs("span",{className:"td-assay-toggle",children:[l.jsx("div",{className:"toggle",style:{transform:"scale(0.85)"}}),l.jsx("span",{className:"toggle-status",children:"OFF"})]})]},o.id))]}),l.jsxs("div",{className:"assay-onoff-footer",children:[l.jsxs("span",{style:{fontSize:12,color:"#64748b"},children:["총 ",c.assayList.filter(o=>o.name.toLowerCase().includes(c.assaySearch.toLowerCase())).length,"개 Assay"]}),l.jsxs("div",{style:{display:"flex",gap:8},children:[l.jsx("button",{className:"btn btn-secondary",style:{fontSize:12,padding:"6px 12px"},children:"전체 OFF"}),l.jsx("button",{className:"btn btn-primary",style:{fontSize:12,padding:"6px 12px"},children:"전체 ON"})]})]})]})})]}),n==="export"&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"subsection-title",children:"LIS Export Setting"}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Auto Export"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.autoExport?"active":""}`,onClick:()=>L("autoExport",!c.autoExport)}),l.jsx("span",{className:"toggle-label",children:c.autoExport?"ON":"OFF"})]})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Sample to Export",l.jsx("small",{children:'If "All Samples" is selected, all samples will be exported even if you select specific samples in the Result Table'})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(o=>l.jsxs("div",{className:`radio-item ${c.sampleToExport===o?"selected":""}`,onClick:()=>L("sampleToExport",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Export Format"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["xlsx","csv","xls"].map(o=>l.jsxs("div",{className:`radio-item ${c.exportFormat===o?"selected":""}`,onClick:()=>L("exportFormat",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&c.exportFormat==="csv"&&["et","fr","de","it","lv","lt","pt","es","tr"].includes(c.language)&&l.jsxs("div",{className:"setting-row",style:{background:c.csvHeaderSettings===""?"#fffbeb":"#fef3c7",border:c.csvHeaderSettings===""?"1px solid #f59e0b":"none"},children:[l.jsxs("div",{className:"setting-label",children:["CSV Header Settings ",c.csvHeaderSettings===""&&l.jsx("span",{style:{color:"#dc2626",marginLeft:"5px"},children:"⚠️"}),l.jsx("small",{children:c.csvHeaderSettings===""?"⚠️ CSV 헤더 형식을 선택하세요":"CSV 파일 헤더 형식"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["default","new header"].map(o=>l.jsxs("div",{className:`radio-item ${c.csvHeaderSettings===o?"selected":""}`,onClick:()=>L("csvHeaderSettings",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Target Alignment Method"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["세로","가로"].map(o=>l.jsxs("div",{className:`radio-item ${c.targetAlignmentMethod===o?"selected":""}`,onClick:()=>L("targetAlignmentMethod",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Melt Temperature column"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.meltTemperatureColumn?"active":""}`,onClick:()=>L("meltTemperatureColumn",!c.meltTemperatureColumn)}),l.jsx("span",{className:"toggle-label",children:c.meltTemperatureColumn?"ON":"OFF"})]})]}),(k==="master"||k==="admin")&&l.jsxs(l.Fragment,{children:[l.jsx("div",{className:"subsection-title",children:"Auto Save Filename"}),l.jsxs("div",{className:"info-notice",children:[l.jsx("div",{className:"info-icon",children:"ℹ️"}),l.jsxs("div",{className:"info-text",children:[l.jsx("strong",{children:"Prefix 및 Folder Name 자동 입력 안내"}),l.jsx("p",{children:"A, B, C, D 값은 plrn 파일에 포함되어 있습니다. plrn 파일로 분석파일을 열었을 때만 파일 접두어(Prefix)와 새 폴더 이름이 자동으로 입력됩니다."})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Use Raw Data Filename",l.jsx("small",{children:"분석파일 이름으로 자동 저장"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.useRawDataFilename?"active":""}`,onClick:()=>L("useRawDataFilename",!c.useRawDataFilename)}),l.jsx("span",{className:"toggle-label",children:c.useRawDataFilename?"ON":"OFF"})]})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Use Prefix",l.jsx("small",{children:"파일명 앞에 접두어 추가"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.usePrefix?"active":""}`,onClick:()=>L("usePrefix",!c.usePrefix)}),l.jsx("span",{className:"toggle-label",children:c.usePrefix?"ON":"OFF"})]})]}),c.usePrefix&&l.jsxs("div",{className:"setting-row",style:{background:c.prefixType===""?"#fffbeb":"#f0fdf4",border:c.prefixType===""?"1px solid #f59e0b":"none"},children:[l.jsxs("div",{className:"setting-label",children:["Prefix Type ",c.prefixType===""&&l.jsx("span",{style:{color:"#dc2626",marginLeft:"5px"},children:"⚠️"}),l.jsx("small",{children:c.prefixType===""?"⚠️ 접두어를 선택하세요":"사용할 접두어 선택"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["A","B","C","D"].map(o=>l.jsxs("div",{className:`radio-item ${c.prefixType===o?"selected":""}`,onClick:()=>L("prefixType",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Create New Folder",l.jsx("small",{children:"새 폴더를 만들어서 저장"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.createNewFolder?"active":""}`,onClick:()=>L("createNewFolder",!c.createNewFolder)}),l.jsx("span",{className:"toggle-label",children:c.createNewFolder?"ON":"OFF"})]})]}),c.createNewFolder&&l.jsxs("div",{className:"setting-row",style:{background:c.folderNameType===""?"#fffbeb":"#fef3c7",border:c.folderNameType===""?"1px solid #f59e0b":"none"},children:[l.jsxs("div",{className:"setting-label",children:["Folder Name ",c.folderNameType===""&&l.jsx("span",{style:{color:"#dc2626",marginLeft:"5px"},children:"⚠️"}),l.jsx("small",{children:c.folderNameType===""?"⚠️ 폴더명을 선택하세요":"생성할 폴더명 선택"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["A","B","C","D"].map(o=>l.jsxs("div",{className:`radio-item ${c.folderNameType===o?"selected":""}`,onClick:()=>L("folderNameType",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),l.jsxs("div",{className:"preview-section",children:[l.jsx("div",{className:"preview-title",children:"📁 저장 경로 미리보기"}),l.jsxs("div",{className:"preview-path",children:[l.jsx("span",{className:"path-segment path-base",children:"C:\\Seegene\\Export"}),c.createNewFolder&&l.jsxs(l.Fragment,{children:[l.jsx("span",{className:"path-separator",children:"\\"}),l.jsxs("span",{className:"path-segment path-folder",style:{color:c.folderNameType===""?"#dc2626":"inherit"},children:["[",c.folderNameType===""?"⚠️ 선택필요":c.folderNameType,"]"]})]}),l.jsx("span",{className:"path-separator",children:"\\"}),c.usePrefix&&l.jsxs("span",{className:"path-segment path-prefix",style:{color:c.prefixType===""?"#dc2626":"inherit"},children:["[",c.prefixType===""?"⚠️ 선택필요":c.prefixType,"]_"]}),l.jsx("span",{className:"path-segment path-filename",children:c.useRawDataFilename?"RawDataFilename":"filename"}),l.jsxs("span",{className:"path-segment path-ext",children:[".",c.exportFormat]})]}),l.jsxs("div",{className:"preview-example",children:[l.jsx("span",{className:"preview-example-label",children:"예시:"}),l.jsxs("code",{children:["C:\\Seegene\\Export",c.createNewFolder?`\\${c.folderNameType===""?"⚠️선택필요":c.folderNameType==="A"?"20241223":c.folderNameType==="B"?"PlateID_001":c.folderNameType==="C"?"OrderNo_001":"CustomFolder"}`:"","\\",c.usePrefix?`${c.prefixType===""?"⚠️선택필요":c.prefixType==="A"?"20241223":c.prefixType==="B"?"PlateID":c.prefixType==="C"?"OrderNo":"Custom"}_`:"",c.useRawDataFilename?"PCR_RawData_001":"result",".",c.exportFormat]})]})]})]})]}),n==="export-hl7-transfer"&&l.jsxs(l.Fragment,{children:[k==="master"&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"HL7 Version"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["2.3.1","2.5.1"].map(o=>l.jsxs("div",{className:`radio-item ${c.hl7Version===o?"selected":""}`,onClick:()=>L("hl7Version",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Transfer Items"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"checkbox-group",children:[{key:"result",label:"Result"},{key:"ctValue",label:"C(t) Value"},{key:"meltTemp",label:"Melt Temperature"}].map(o=>{var v;return l.jsxs("div",{className:`checkbox-item ${(v=c.hl7TransferItems)!=null&&v[o.key]?"checked":""}`,onClick:()=>{const _=c.hl7TransferItems||{result:!0,ctValue:!0,meltTemp:!1};L("hl7TransferItems",{..._,[o.key]:!_[o.key]})},children:[l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),o.label]},o.key)})})})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"SD invalid"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.hl7SdInvalid?"active":""}`,onClick:()=>L("hl7SdInvalid",!c.hl7SdInvalid)}),l.jsx("span",{className:"toggle-label",children:c.hl7SdInvalid?"ON":"OFF"})]})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Auto Send"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.hl7AutoSend?"active":""}`,onClick:()=>L("hl7AutoSend",!c.hl7AutoSend)}),l.jsx("span",{className:"toggle-label",children:c.hl7AutoSend?"ON":"OFF"})]})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Sample to Export",l.jsx("small",{children:'If "All Samples" is selected, all samples will be exported even if you select specific samples in the Result Table'})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(o=>l.jsxs("div",{className:`radio-item ${c.hl7SampleToExport===o?"selected":""}`,onClick:()=>L("hl7SampleToExport",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),(k==="master"||k==="admin")&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Transfer Protocol",l.jsx("small",{children:"MLLP 선택 시 IP와 PORT 입력 필요"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["HTTP","MLLP"].map(o=>l.jsxs("div",{className:`radio-item ${c.hl7TransferProtocol===o?"selected":""}`,onClick:()=>L("hl7TransferProtocol",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),c.hl7TransferProtocol==="MLLP"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",style:{background:"#eff6ff"},children:[l.jsxs("div",{className:"setting-label",children:["Server IP",l.jsx("small",{children:"MLLP 서버 IP 주소"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("input",{type:"text",className:"text-input",placeholder:"192.168.0.1",value:c.hl7ServerIP,onChange:o=>L("hl7ServerIP",o.target.value),style:{width:180}})})]}),l.jsxs("div",{className:"setting-row",style:{background:"#eff6ff"},children:[l.jsxs("div",{className:"setting-label",children:["Server Port",l.jsx("small",{children:"MLLP 서버 포트"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("input",{type:"text",className:"text-input",placeholder:"5000",value:c.hl7ServerPort,onChange:o=>L("hl7ServerPort",o.target.value),style:{width:120}})})]})]})]}),(k==="master"||k==="admin")&&l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Transfer Method"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",style:{flexDirection:"column",alignItems:"flex-start",gap:"8px"},children:[{value:"all-at-once",label:"Connected and transfer all samples at once"},{value:"per-sample",label:"Per sample"}].map(o=>l.jsxs("div",{className:`radio-item ${c.hl7TransferMethod===o.value?"selected":""}`,onClick:()=>L("hl7TransferMethod",o.value),children:[l.jsx("div",{className:"radio-dot"}),o.label]},o.value))})})]}),k==="master"&&l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Response Timeout (ms)",l.jsx("small",{children:"응답 대기 시간"})]}),l.jsxs("div",{className:"setting-control",children:[l.jsx("input",{type:"number",className:"text-input",placeholder:"30000",value:c.hl7ResponseTimeout,onChange:o=>L("hl7ResponseTimeout",o.target.value),style:{width:120}}),l.jsx("span",{style:{fontSize:12,color:"#64748b",marginLeft:8},children:"ms"})]})]})]}),n==="export-hl7-abbrev"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"info-notice",children:[l.jsx("div",{className:"info-icon",children:"💡"}),l.jsxs("div",{className:"info-text",children:[l.jsx("strong",{children:"HL7 Abbreviation 설정"}),l.jsx("p",{children:"Assay 및 Target의 HL7 메시지 전송 시 사용할 코드를 설정합니다."})]})]}),l.jsxs("div",{className:"hl7-abbrev-vertical",children:[l.jsxs("div",{className:"hl7-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"Assay 목록"}),l.jsxs("div",{className:"search-box",style:{width:"200px"},children:[l.jsx("span",{children:"🔍"}),l.jsx("input",{type:"text",placeholder:"Assay 검색...",value:c.hl7AbbrevAssaySearch||"",onChange:o=>L("hl7AbbrevAssaySearch",o.target.value)})]})]}),l.jsx("div",{className:"data-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"40%"},children:"ASSAY NAME"}),l.jsx("th",{style:{width:"20%"},children:"INTENDED USE"}),l.jsx("th",{style:{width:"20%"},children:"ASSAY CODE"}),l.jsx("th",{style:{width:"20%"}})]})}),l.jsx("tbody",{children:c.assayList.filter(o=>o.name.toLowerCase().includes((c.hl7AbbrevAssaySearch||"").toLowerCase())).map(o=>l.jsxs("tr",{className:c.hl7AbbrevSelectedAssay===o.id?"selected":"",onClick:()=>L("hl7AbbrevSelectedAssay",o.id),style:{cursor:"pointer"},children:[l.jsx("td",{children:o.name}),l.jsx("td",{children:l.jsx("span",{className:"badge",children:o.intendedUse})}),l.jsx("td",{children:l.jsx("input",{type:"text",className:"inline-input",value:o.assayCode,onClick:v=>v.stopPropagation(),onChange:v=>{const _=c.assayList.map(I=>I.id===o.id?{...I,assayCode:v.target.value}:I);L("assayList",_)},style:{width:"80px"}})}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("span",{style:{color:c.hl7AbbrevSelectedAssay===o.id?"#2563eb":"#94a3b8",fontSize:"12px"},children:c.hl7AbbrevSelectedAssay===o.id?"▼ 선택됨":"클릭하여 선택"})})]},o.id))})]})})]}),l.jsxs("div",{className:"hl7-section",children:[l.jsxs("div",{className:"section-header",children:[l.jsx("h3",{children:"Target Code 설정"}),c.hl7AbbrevSelectedAssay&&l.jsx("span",{className:"panel-subtitle",style:{marginLeft:"12px",color:"#2563eb",fontWeight:500},children:(qi=c.assayList.find(o=>o.id===c.hl7AbbrevSelectedAssay))==null?void 0:qi.name})]}),c.hl7AbbrevSelectedAssay?l.jsx("div",{className:"data-table",children:l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"25%"},children:"CHANNEL"}),l.jsx("th",{style:{width:"20%"},children:"DYE"}),l.jsx("th",{style:{width:"30%"},children:"TARGET"}),l.jsx("th",{style:{width:"25%"},children:"TARGET CODE"})]})}),l.jsx("tbody",{children:(ea=c.assayList.find(o=>o.id===c.hl7AbbrevSelectedAssay))==null?void 0:ea.targets.map(o=>l.jsxs("tr",{children:[l.jsx("td",{children:o.channel}),l.jsx("td",{children:l.jsx("span",{className:"badge dye",children:o.dye})}),l.jsx("td",{children:o.target}),l.jsx("td",{children:l.jsx("input",{type:"text",className:"inline-input",value:o.targetCode,onChange:v=>{const _=c.assayList.map(I=>I.id===c.hl7AbbrevSelectedAssay?{...I,targets:I.targets.map(M=>M.id===o.id?{...M,targetCode:v.target.value}:M)}:I);L("assayList",_)},style:{width:"80px"}})})]},o.id))})]})}):l.jsxs("div",{className:"empty-state-inline",children:[l.jsx("span",{className:"empty-icon",children:"☝️"}),l.jsx("span",{children:"위 Assay 목록에서 항목을 선택하세요"})]})]})]})]}),n==="print"&&(k==="master"||k==="admin")&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",children:[l.jsxs("div",{className:"setting-label",children:["Print Range",l.jsx("small",{children:'If "All Samples" is selected, all samples will be printed even if you select specific samples in the Result Table'})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["All Samples","Selected Sample(s)"].map(o=>l.jsxs("div",{className:`radio-item ${c.printRange===o?"selected":""}`,onClick:()=>L("printRange",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]}),l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Print Items"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"checkbox-group",children:[{key:"number",label:"Number"},{key:"sampleId",label:"Sample ID"}].map(o=>l.jsxs("div",{className:`checkbox-item ${c.printItems[o.key]?"checked":""}`,onClick:()=>Lt("printItems",o.key),children:[l.jsx("div",{className:"checkbox-box",children:l.jsx("svg",{width:"12",height:"10",viewBox:"0 0 12 10",fill:"none",children:l.jsx("path",{d:"M1 5L4.5 8.5L11 1",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),o.label]},o.key))})})]}),l.jsx("div",{className:"subsection-title",children:"Logo Setting"}),l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Add Logo to Print"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.addLogoToPrint?"active":""}`,onClick:()=>L("addLogoToPrint",!c.addLogoToPrint)}),l.jsx("span",{className:"toggle-label",children:c.addLogoToPrint?"ON":"OFF"})]})]}),c.addLogoToPrint&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[l.jsx("div",{className:"setting-label",children:"로고 불러오기"}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"로고 파일을 선택하세요",value:c.logoFile,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📂 파일 열기"})]})})]}),l.jsxs("div",{className:"setting-row",style:{background:"#f0fdf4"},children:[l.jsx("div",{className:"setting-label",children:"Logo Print Location"}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["Top Left","Top Center","Top Right"].map(o=>l.jsxs("div",{className:`radio-item ${c.logoPrintLocation===o?"selected":""}`,onClick:()=>L("logoPrintLocation",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]})]}),l.jsx("div",{className:"subsection-title",children:"Watermark Setting"}),l.jsxs("div",{className:"setting-row",children:[l.jsx("div",{className:"setting-label",children:"Add Watermark to Print"}),l.jsxs("div",{className:"setting-control",children:[l.jsx("div",{className:`toggle ${c.addWatermarkToPrint?"active":""}`,onClick:()=>L("addWatermarkToPrint",!c.addWatermarkToPrint)}),l.jsx("span",{className:"toggle-label",children:c.addWatermarkToPrint?"ON":"OFF"})]})]}),c.addWatermarkToPrint&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"setting-row",style:{background:"#fef3c7"},children:[l.jsx("div",{className:"setting-label",children:"워터마크 불러오기"}),l.jsx("div",{className:"setting-control",children:l.jsxs("div",{className:"folder-path-control",children:[l.jsx("input",{type:"text",className:"text-input path-input",placeholder:"워터마크 파일을 선택하세요",value:c.watermarkFile,readOnly:!0}),l.jsx("button",{className:"file-btn",children:"📂 파일 열기"})]})})]}),l.jsxs("div",{className:"setting-row",style:{background:"#fef3c7"},children:[l.jsxs("div",{className:"setting-label",children:["Watermark Layout",l.jsx("small",{children:"워터마크 반복 배치"})]}),l.jsx("div",{className:"setting-control",children:l.jsx("div",{className:"radio-group",children:["1x1","2x2","3x3","4x3","3x4","4x4","5x5"].map(o=>l.jsxs("div",{className:`radio-item ${c.watermarkLayout===o?"selected":""}`,onClick:()=>L("watermarkLayout",o),children:[l.jsx("div",{className:"radio-dot"}),o]},o))})})]})]})]}),n==="assay"&&l.jsxs(l.Fragment,{children:[l.jsxs("div",{className:"assay-header",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"20px",padding:"15px 20px",background:"#f8f9fa",borderRadius:"8px"},children:[l.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flex:1},children:[l.jsx("span",{style:{fontSize:"18px"},children:"🔍"}),l.jsx("input",{type:"text",placeholder:"Assay Pack 검색 (이름, 제조사, 버전)...",value:c.assaySearch,onChange:o=>L("assaySearch",o.target.value),style:{flex:1,padding:"10px 15px",border:"1px solid #ddd",borderRadius:"6px",fontSize:"14px"}})]}),l.jsxs("button",{className:"btn btn-primary",onClick:()=>L("showAddAssayModal",!0),style:{marginLeft:"15px",display:"flex",alignItems:"center",gap:"5px",whiteSpace:"nowrap"},children:[l.jsx("span",{style:{fontSize:"16px"},children:"➕"}),"Assay Pack 추가"]})]}),l.jsxs("div",{className:"data-table",style:{marginBottom:"30px"},children:[l.jsxs("table",{children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{style:{width:"30%"},children:"Assay Name"}),l.jsx("th",{style:{width:"15%"},children:"Intended Use"}),l.jsx("th",{style:{width:"12%"},children:"Version"}),l.jsx("th",{style:{width:"18%"},children:"제조사"}),l.jsx("th",{style:{width:"15%"},children:"Install Date"}),l.jsx("th",{style:{width:"10%"},children:"삭제"})]})}),l.jsx("tbody",{children:c.assayList.filter(o=>{const v=c.assaySearch.toLowerCase();return o.name.toLowerCase().includes(v)||o.manufacturer.toLowerCase().includes(v)||o.version.toLowerCase().includes(v)}).map(o=>l.jsxs("tr",{className:c.selectedAssay===o.id?"selected":"",onClick:()=>L("selectedAssay",o.id),style:{cursor:"pointer"},children:[l.jsx("td",{style:{fontWeight:"500"},children:o.name}),l.jsx("td",{children:l.jsx("span",{className:"badge",style:{background:o.intendedUse==="IVD"?"#dcfce7":o.intendedUse==="RUO"?"#e0e7ff":"#fef3c7",color:o.intendedUse==="IVD"?"#166534":o.intendedUse==="RUO"?"#3730a3":"#92400e",padding:"4px 8px",borderRadius:"4px",fontSize:"12px",fontWeight:"500"},children:o.intendedUse})}),l.jsx("td",{style:{fontFamily:"monospace"},children:o.version}),l.jsx("td",{children:o.manufacturer}),l.jsx("td",{style:{color:"#6b7280"},children:o.installDate}),l.jsx("td",{style:{textAlign:"center"},children:l.jsx("button",{onClick:v=>{v.stopPropagation(),Pc(o.id)},style:{background:"#fee2e2",color:"#dc2626",border:"none",padding:"6px 12px",borderRadius:"6px",cursor:"pointer",fontSize:"12px",fontWeight:"500",transition:"all 0.2s"},onMouseEnter:v=>{v.target.style.background="#fecaca"},onMouseLeave:v=>{v.target.style.background="#fee2e2"},children:"🗑️ 삭제"})})]},o.id))})]}),c.assayList.filter(o=>{const v=c.assaySearch.toLowerCase();return o.name.toLowerCase().includes(v)||o.manufacturer.toLowerCase().includes(v)||o.version.toLowerCase().includes(v)}).length===0&&l.jsxs("div",{className:"empty-state",style:{padding:"40px",textAlign:"center",color:"#9ca3af"},children:[l.jsx("div",{style:{fontSize:"48px",marginBottom:"10px"},children:"🔍"}),l.jsx("p",{children:"검색 결과가 없습니다."})]})]})]}),n==="backup"&&l.jsxs("div",{className:"backup-restore-container",children:[l.jsxs("div",{style:{marginBottom:"40px"},children:[l.jsx("h2",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"25px",color:"#1f2937",paddingBottom:"10px",borderBottom:"2px solid #e5e7eb"},children:"💾 Backup"}),l.jsxs("div",{className:"setting-row",style:{marginBottom:"30px"},children:[l.jsx("label",{className:"setting-label",style:{fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"10px",display:"block"},children:"Manual Backup"}),l.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"center"},children:[l.jsx("button",{className:"btn btn-primary",onClick:Lc,style:{display:"flex",alignItems:"center",gap:"8px",padding:"10px 20px"},children:"📥 Backup Now"}),j.lastBackupTime&&l.jsxs("span",{style:{fontSize:"13px",color:"#6b7280"},children:["Last backup: ",new Date(j.lastBackupTime).toLocaleString("ko-KR")]})]}),l.jsx("p",{style:{fontSize:"12px",color:"#9ca3af",marginTop:"8px",marginLeft:"0"},children:"백업 버튼 클릭 시 파일 저장 위치를 선택할 수 있습니다. (민감정보 자동 마스킹)"})]}),k!=="user"&&l.jsxs("div",{className:"setting-row",style:{marginBottom:"30px"},children:[l.jsx("label",{className:"setting-label",style:{fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"10px",display:"block"},children:"Scheduled Backup"}),l.jsxs("div",{style:{display:"flex",gap:"15px",alignItems:"flex-end",flexWrap:"wrap"},children:[l.jsxs("div",{style:{flex:"0 0 180px"},children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"13px",color:"#6b7280"},children:"Backup Interval"}),l.jsxs("select",{value:j.scheduledInterval,onChange:o=>zl("scheduledInterval",o.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px",cursor:"pointer",background:"white"},children:[l.jsx("option",{value:"daily",children:"Daily (00:00)"}),l.jsx("option",{value:"weekly",children:"Weekly"}),l.jsx("option",{value:"monthly",children:"Monthly"})]})]}),j.scheduledInterval==="weekly"&&l.jsxs("div",{style:{flex:"0 0 160px"},children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"13px",color:"#6b7280"},children:"Day of Week"}),l.jsxs("select",{value:j.scheduledWeekday,onChange:o=>zl("scheduledWeekday",o.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px",cursor:"pointer",background:"white"},children:[l.jsx("option",{value:"sunday",children:"Sunday"}),l.jsx("option",{value:"monday",children:"Monday"}),l.jsx("option",{value:"tuesday",children:"Tuesday"}),l.jsx("option",{value:"wednesday",children:"Wednesday"}),l.jsx("option",{value:"thursday",children:"Thursday"}),l.jsx("option",{value:"friday",children:"Friday"}),l.jsx("option",{value:"saturday",children:"Saturday"})]})]}),j.scheduledInterval==="monthly"&&l.jsxs("div",{style:{flex:"0 0 140px"},children:[l.jsx("label",{style:{display:"block",marginBottom:"8px",fontSize:"13px",color:"#6b7280"},children:"Day of Month"}),l.jsx("select",{value:j.scheduledMonthDay,onChange:o=>zl("scheduledMonthDay",o.target.value),style:{width:"100%",padding:"8px 12px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px",cursor:"pointer",background:"white"},children:Array.from({length:31},(o,v)=>v+1).map(o=>l.jsxs("option",{value:String(o),children:[o,"일"]},o))})]})]}),j.scheduledInterval!=="none"&&l.jsxs("div",{style:{marginTop:"12px"},children:[l.jsxs("p",{style:{fontSize:"12px",color:"#6b7280",marginBottom:"4px"},children:[j.scheduledInterval==="daily"&&"매일 00:00에 자동 백업됩니다.",j.scheduledInterval==="weekly"&&`매주 ${{sunday:"일요일",monday:"월요일",tuesday:"화요일",wednesday:"수요일",thursday:"목요일",friday:"금요일",saturday:"토요일"}[j.scheduledWeekday]} 00:00에 자동 백업됩니다.`,j.scheduledInterval==="monthly"&&`매월 ${j.scheduledMonthDay}일 00:00에 자동 백업됩니다.`]}),j.lastScheduledBackupTime&&l.jsxs("p",{style:{fontSize:"12px",color:"#9ca3af"},children:["Last scheduled backup: ",new Date(j.lastScheduledBackupTime).toLocaleString("ko-KR")]})]})]}),k!=="user"&&l.jsxs("div",{style:{marginTop:"30px",padding:"20px",background:"#f9fafb",borderRadius:"8px",border:"1px solid #e5e7eb"},children:[l.jsxs("h3",{style:{fontSize:"16px",fontWeight:"600",marginBottom:"20px",color:"#374151",display:"flex",alignItems:"center",gap:"8px"},children:[l.jsx("span",{children:"📋"})," Backup File List"]}),l.jsxs("div",{style:{marginBottom:"25px"},children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[l.jsx("label",{style:{fontSize:"14px",fontWeight:"500",color:"#374151"},children:"Auto Backup (On Save)"}),l.jsxs("span",{style:{fontSize:"12px",color:"#6b7280"},children:["최근 ",j.keepRecentCount,"개 보관"]})]}),j.autoBackupFiles.length>0?l.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"6px",overflow:"hidden",background:"white"},children:j.autoBackupFiles.map((o,v)=>l.jsxs("div",{style:{padding:"12px 16px",borderBottom:v<j.autoBackupFiles.length-1?"1px solid #f3f4f6":"none",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.15s",cursor:"pointer"},onMouseEnter:_=>_.currentTarget.style.background="#f9fafb",onMouseLeave:_=>_.currentTarget.style.background="white",children:[l.jsxs("div",{style:{flex:1},children:[l.jsxs("div",{style:{fontSize:"13px",color:"#1f2937",fontWeight:"500",marginBottom:"4px"},children:["📄 ",o.name]}),l.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[new Date(o.date).toLocaleString("ko-KR")," · ",o.size]})]}),l.jsx("button",{className:"btn btn-secondary",style:{fontSize:"12px",padding:"6px 12px"},onClick:()=>{console.log("Restore from backup list:",o.name)},children:"복원"})]},v))}):l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#9ca3af",fontSize:"13px",background:"white",border:"1px solid #e5e7eb",borderRadius:"6px"},children:"자동 백업된 파일이 없습니다."})]}),l.jsxs("div",{children:[l.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px"},children:[l.jsx("label",{style:{fontSize:"14px",fontWeight:"500",color:"#374151"},children:"Scheduled Backup"}),l.jsx("span",{style:{fontSize:"12px",color:"#6b7280"},children:"최신 1개 보관"})]}),j.scheduledBackupFile?l.jsx("div",{style:{border:"1px solid #e5e7eb",borderRadius:"6px",overflow:"hidden",background:"white"},children:l.jsxs("div",{style:{padding:"12px 16px",display:"flex",alignItems:"center",justifyContent:"space-between",transition:"background 0.15s",cursor:"pointer"},onMouseEnter:o=>o.currentTarget.style.background="#f9fafb",onMouseLeave:o=>o.currentTarget.style.background="white",children:[l.jsxs("div",{style:{flex:1},children:[l.jsxs("div",{style:{fontSize:"13px",color:"#1f2937",fontWeight:"500",marginBottom:"4px"},children:["📄 ",j.scheduledBackupFile.name]}),l.jsxs("div",{style:{fontSize:"12px",color:"#9ca3af"},children:[new Date(j.scheduledBackupFile.date).toLocaleString("ko-KR")," · ",j.scheduledBackupFile.size]})]}),l.jsx("button",{className:"btn btn-secondary",style:{fontSize:"12px",padding:"6px 12px"},onClick:()=>console.log("Restore:",j.scheduledBackupFile.name),children:"복원"})]})}):l.jsx("div",{style:{padding:"20px",textAlign:"center",color:"#9ca3af",fontSize:"13px",background:"white",border:"1px solid #e5e7eb",borderRadius:"6px"},children:"예약 백업된 파일이 없습니다."})]})]})]}),k!=="user"&&l.jsxs("div",{children:[l.jsx("h2",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"25px",color:"#1f2937",paddingBottom:"10px",borderBottom:"2px solid #e5e7eb"},children:"📥 Restore"}),l.jsxs("div",{className:"setting-row",children:[l.jsx("label",{className:"setting-label",style:{fontSize:"14px",fontWeight:"500",color:"#374151",marginBottom:"10px",display:"block"},children:"Import Backup File"}),l.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center"},children:[l.jsx("input",{type:"file",accept:".json",onChange:_c,onClick:o=>{o.target.value=""},style:{display:"none"},id:"import-file-input"}),l.jsx("label",{htmlFor:"import-file-input",className:"btn btn-primary",style:{display:"inline-flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"10px 20px"},children:"📂 Select File"})]}),l.jsx("p",{style:{fontSize:"12px",color:"#9ca3af",marginTop:"8px"},children:"⚠️ Import 전 변경사항을 미리 확인할 수 있습니다. 선택적으로 적용 가능합니다."})]})]})]})]}),l.jsxs("div",{className:"tab-content-footer",children:[l.jsxs("div",{className:"footer-status",children:[s&&l.jsx("span",{className:"status-unsaved",children:"● 저장되지 않은 변경사항"}),a&&l.jsx("span",{className:"status-success",children:"✓ 설정 변경이 완료되었습니다"})]}),l.jsx("div",{className:"footer-buttons",children:l.jsx("button",{className:"btn btn-primary",onClick:bc,disabled:!s,children:"저장"})})]})]})]}),d&&l.jsx("div",{className:"alert-overlay",children:l.jsxs("div",{className:"alert-modal",children:[l.jsx("h3",{children:"🔔 분석 탭 닫힘 안내"}),l.jsxs("p",{children:["변경된 설정을 적용하면 현재 열려있는",l.jsx("br",{}),l.jsx("strong",{children:"모든 분석 탭이 닫힙니다."})]}),l.jsxs("div",{className:"changed-settings-list",children:[l.jsx("div",{className:"changed-settings-title",children:"변경된 설정 항목:"}),l.jsxs("ul",{children:[c.pcrRawDataType!==y.current.pcrRawDataType&&l.jsx("li",{children:"PCR Raw Data Type (PCR 장비 SW설정)"}),c.sampleId!==y.current.sampleId&&l.jsx("li",{children:"Sample ID"}),c.resultView!==y.current.resultView&&l.jsx("li",{children:"Result View"}),c.ctValueDigit!==y.current.ctValueDigit&&l.jsx("li",{children:"C(t) Value Digit"}),c.sampleIndexSetting!==y.current.sampleIndexSetting&&l.jsx("li",{children:"Sample Index Setting"}),g&&l.jsx("li",{children:"Target on/off"})]})]}),l.jsxs("div",{className:"alert-buttons",children:[l.jsx("button",{className:"btn btn-secondary",onClick:Ec,children:"취소"}),l.jsx("button",{className:"btn btn-primary",onClick:Cc,children:"확인 후 저장"})]})]})}),c.showAddAssayModal&&l.jsx("div",{className:"alert-overlay",children:l.jsxs("div",{className:"alert-modal",style:{maxWidth:"500px"},children:[l.jsxs("h3",{style:{marginBottom:"20px",display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx("span",{children:"🧬"})," Assay Pack 추가"]}),l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"15px"},children:[l.jsxs("div",{children:[l.jsxs("label",{style:{display:"block",marginBottom:"5px",fontWeight:"500",fontSize:"14px"},children:["Assay Name ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"text",placeholder:"예: Allplex SARS-CoV-2",value:c.newAssay.name,onChange:o=>Nn("name",o.target.value),style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px"}})]}),l.jsxs("div",{children:[l.jsxs("label",{style:{display:"block",marginBottom:"5px",fontWeight:"500",fontSize:"14px"},children:["Intended Use ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("div",{style:{display:"flex",gap:"10px"},children:["IVD","RUO","LDT"].map(o=>l.jsxs("div",{className:`radio-item ${c.newAssay.intendedUse===o?"selected":""}`,onClick:()=>Nn("intendedUse",o),style:{flex:1,textAlign:"center"},children:[l.jsx("div",{className:"radio-dot"}),o]},o))})]}),l.jsxs("div",{style:{display:"flex",gap:"15px"},children:[l.jsxs("div",{style:{flex:1},children:[l.jsxs("label",{style:{display:"block",marginBottom:"5px",fontWeight:"500",fontSize:"14px"},children:["Version ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"text",placeholder:"예: 1.0.0",value:c.newAssay.version,onChange:o=>Nn("version",o.target.value),style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px"}})]}),l.jsxs("div",{style:{flex:1},children:[l.jsxs("label",{style:{display:"block",marginBottom:"5px",fontWeight:"500",fontSize:"14px"},children:["Install Date ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"date",value:c.newAssay.installDate,onChange:o=>Nn("installDate",o.target.value),style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px"}})]})]}),l.jsxs("div",{children:[l.jsxs("label",{style:{display:"block",marginBottom:"5px",fontWeight:"500",fontSize:"14px"},children:["제조사 ",l.jsx("span",{style:{color:"#ef4444"},children:"*"})]}),l.jsx("input",{type:"text",placeholder:"예: Seegene",value:c.newAssay.manufacturer,onChange:o=>Nn("manufacturer",o.target.value),style:{width:"100%",padding:"10px",border:"1px solid #d1d5db",borderRadius:"6px",fontSize:"14px"}})]})]}),l.jsxs("div",{className:"alert-buttons",style:{marginTop:"25px"},children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>L("showAddAssayModal",!1),children:"취소"}),l.jsx("button",{className:"btn btn-primary",onClick:Tc,children:"추가"})]})]})}),A&&l.jsx("div",{className:"alert-overlay",children:l.jsxs("div",{className:"alert-modal",style:{maxWidth:"400px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"✅"}),l.jsx("h3",{style:{marginBottom:"15px",color:"#059669"},children:"Export 성공!"}),l.jsx("p",{style:{fontSize:"14px",color:"#6b7280",whiteSpace:"pre-line",lineHeight:"1.6"},children:Sn}),l.jsx("button",{className:"btn btn-primary",onClick:()=>pe(!1),style:{marginTop:"20px"},children:"확인"})]})}),hr&&l.jsx("div",{className:"alert-overlay",children:l.jsxs("div",{className:"alert-modal",style:{maxWidth:"450px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"⚠️"}),l.jsx("h3",{style:{marginBottom:"15px",color:"#dc2626"},children:"저장되지 않은 변경사항"}),l.jsxs("p",{style:{fontSize:"14px",color:"#6b7280",lineHeight:"1.6",marginBottom:"20px"},children:["저장되지 않은 변경사항이 있습니다.",l.jsx("br",{}),"설정을 먼저 저장한 후 백업을 진행해주세요."]}),l.jsx("button",{className:"btn btn-primary",onClick:()=>mr(!1),children:"확인"})]})}),Pt&&l.jsx("div",{className:"alert-overlay",children:l.jsxs("div",{className:"alert-modal",style:{maxWidth:"400px",textAlign:"center"},children:[l.jsx("div",{style:{fontSize:"48px",marginBottom:"15px"},children:"✅"}),l.jsx("h3",{style:{marginBottom:"15px",color:"#059669"},children:"Import 성공!"}),l.jsx("p",{style:{fontSize:"14px",color:"#6b7280",whiteSpace:"pre-line",lineHeight:"1.6"},children:E}),l.jsx("button",{className:"btn btn-primary",onClick:()=>at(!1),style:{marginTop:"20px"},children:"확인"})]})}),V&&f&&l.jsx("div",{className:"alert-overlay",style:{zIndex:2e3},children:l.jsxs("div",{className:"alert-modal",style:{width:"1200px",maxWidth:"90vw",maxHeight:"80vh",display:"flex",flexDirection:"column"},children:[l.jsxs("h3",{style:{marginBottom:"15px",display:"flex",alignItems:"center",gap:"10px"},children:[l.jsx("span",{children:"🔍"})," 설정 변경사항 확인"]}),l.jsxs("p",{style:{fontSize:"14px",color:"#6b7280",marginBottom:"20px"},children:["파일: ",l.jsx("strong",{children:w})]}),l.jsx("div",{style:{flex:1,overflowY:"auto",overflowX:"hidden",border:"1px solid #e5e7eb",borderRadius:"6px",marginBottom:"20px",maxHeight:"400px"},children:l.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:"13px"},children:[l.jsx("thead",{style:{position:"sticky",top:0,background:"#f9fafb",borderBottom:"2px solid #e5e7eb"},children:l.jsxs("tr",{children:[l.jsx("th",{style:{padding:"12px 8px",textAlign:"left",fontWeight:"600",width:"15%"},children:"Category"}),l.jsx("th",{style:{padding:"12px 8px",textAlign:"left",fontWeight:"600",width:"20%"},children:"Key"}),l.jsx("th",{style:{padding:"12px 8px",textAlign:"left",fontWeight:"600",width:"15%"},children:"Current"}),l.jsx("th",{style:{padding:"12px 8px",textAlign:"left",fontWeight:"600",width:"15%"},children:"File"}),l.jsx("th",{style:{padding:"12px 8px",textAlign:"center",fontWeight:"600",width:"15%"},children:"Status"}),l.jsx("th",{style:{padding:"12px 8px",textAlign:"left",fontWeight:"600",width:"20%"},children:"Reason"})]})}),l.jsx("tbody",{children:f.map((o,v)=>{let _="#6b7280",I="#f3f4f6",M=o.status;return o.status==="changed"?(_="#059669",I="#d1fae5",M="✓ 변경"):o.status==="unchanged"?(_="#6b7280",I="#f3f4f6",M="- 동일"):(o.status==="type_mismatch"||o.status==="new_key")&&(_="#dc2626",I="#fee2e2",M="✗ 스킵"),l.jsxs("tr",{style:{borderBottom:"1px solid #f3f4f6"},children:[l.jsx("td",{style:{padding:"10px 8px",color:"#374151"},children:o.category}),l.jsx("td",{style:{padding:"10px 8px",fontFamily:"monospace",fontSize:"12px",color:"#1f2937"},children:o.key}),l.jsx("td",{style:{padding:"10px 8px",color:"#6b7280",fontSize:"12px"},children:o.current.length>20?o.current.substring(0,20)+"...":o.current}),l.jsx("td",{style:{padding:"10px 8px",color:"#6b7280",fontSize:"12px"},children:o.imported.length>20?o.imported.substring(0,20)+"...":o.imported}),l.jsx("td",{style:{padding:"10px 8px",textAlign:"center"},children:l.jsx("span",{style:{display:"inline-block",padding:"4px 8px",background:I,color:_,borderRadius:"4px",fontSize:"11px",fontWeight:"600"},children:M})}),l.jsx("td",{style:{padding:"10px 8px",color:"#6b7280",fontSize:"12px"},children:o.reason})]},v)})})]})}),l.jsx("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"15px",background:"#f9fafb",borderRadius:"6px",marginBottom:"20px"},children:l.jsxs("div",{style:{fontSize:"14px",color:"#374151"},children:[l.jsxs("span",{style:{color:"#059669",fontWeight:"600"},children:[f.filter(o=>o.status==="changed").length,"개 적용"]})," | ",l.jsxs("span",{style:{color:"#dc2626",fontWeight:"600"},children:[f.filter(o=>o.status==="type_mismatch"||o.status==="new_key").length,"개 스킵"]})," | ",l.jsxs("span",{style:{color:"#6b7280"},children:[f.filter(o=>o.status==="unchanged").length,"개 변경 없음"]})]})}),l.jsxs("div",{className:"alert-buttons",children:[l.jsx("button",{className:"btn btn-secondary",onClick:()=>h(!1),children:"취소"}),l.jsx("button",{className:`btn btn-primary ${f.filter(o=>o.status==="changed").length===0?"disabled":""}`,onClick:Dc,disabled:f.filter(o=>o.status==="changed").length===0,children:"✓ 적용하기"})]})]})})]})]}):l.jsx("div",{style:{padding:40,textAlign:"center"},children:l.jsx("button",{onClick:()=>t(!0),style:{padding:"12px 24px",fontSize:16,cursor:"pointer",background:"#3b82f6",color:"white",border:"none",borderRadius:8},children:"⚙️ Settings 열기"})})}ss.createRoot(document.getElementById("root")).render(l.jsx(wo.StrictMode,{children:l.jsx(dp,{})}));
