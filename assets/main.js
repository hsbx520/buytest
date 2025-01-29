var Nv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Xd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function Rv(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return e[r]}})}),n}var Mv={exports:{}},ef={},Bv={exports:{}},Se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uc=Symbol.for("react.element"),F8=Symbol.for("react.portal"),z8=Symbol.for("react.fragment"),W8=Symbol.for("react.strict_mode"),H8=Symbol.for("react.profiler"),V8=Symbol.for("react.provider"),q8=Symbol.for("react.context"),G8=Symbol.for("react.forward_ref"),K8=Symbol.for("react.suspense"),Z8=Symbol.for("react.memo"),Q8=Symbol.for("react.lazy"),ow=Symbol.iterator;function Y8(e){return e===null||typeof e!="object"?null:(e=ow&&e[ow]||e["@@iterator"],typeof e=="function"?e:null)}var jv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lv=Object.assign,Uv={};function qs(e,t,n){this.props=e,this.context=t,this.refs=Uv,this.updater=n||jv}qs.prototype.isReactComponent={};qs.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qs.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Fv(){}Fv.prototype=qs.prototype;function P1(e,t,n){this.props=e,this.context=t,this.refs=Uv,this.updater=n||jv}var T1=P1.prototype=new Fv;T1.constructor=P1;Lv(T1,qs.prototype);T1.isPureReactComponent=!0;var sw=Array.isArray,zv=Object.prototype.hasOwnProperty,A1={current:null},Wv={key:!0,ref:!0,__self:!0,__source:!0};function Hv(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)zv.call(t,r)&&!Wv.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:uc,type:e,key:o,ref:s,props:i,_owner:A1.current}}function J8(e,t){return{$$typeof:uc,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function k1(e){return typeof e=="object"&&e!==null&&e.$$typeof===uc}function X8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var aw=/\/+/g;function u0(e,t){return typeof e=="object"&&e!==null&&e.key!=null?X8(""+e.key):t.toString(36)}function gu(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case uc:case F8:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+u0(s,0):r,sw(i)?(n="",e!=null&&(n=e.replace(aw,"$&/")+"/"),gu(i,t,n,"",function(c){return c})):i!=null&&(k1(i)&&(i=J8(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(aw,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",sw(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+u0(o,a);s+=gu(o,t,n,l,i)}else if(l=Y8(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+u0(o,a++),s+=gu(o,t,n,l,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function jc(e,t,n){if(e==null)return e;var r=[],i=0;return gu(e,r,"","",function(o){return t.call(n,o,i++)}),r}function ex(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ht={current:null},mu={transition:null},tx={ReactCurrentDispatcher:Ht,ReactCurrentBatchConfig:mu,ReactCurrentOwner:A1};Se.Children={map:jc,forEach:function(e,t,n){jc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return jc(e,function(){t++}),t},toArray:function(e){return jc(e,function(t){return t})||[]},only:function(e){if(!k1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Se.Component=qs;Se.Fragment=z8;Se.Profiler=H8;Se.PureComponent=P1;Se.StrictMode=W8;Se.Suspense=K8;Se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tx;Se.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Lv({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=A1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)zv.call(t,l)&&!Wv.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:uc,type:e.type,key:i,ref:o,props:r,_owner:s}};Se.createContext=function(e){return e={$$typeof:q8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:V8,_context:e},e.Consumer=e};Se.createElement=Hv;Se.createFactory=function(e){var t=Hv.bind(null,e);return t.type=e,t};Se.createRef=function(){return{current:null}};Se.forwardRef=function(e){return{$$typeof:G8,render:e}};Se.isValidElement=k1;Se.lazy=function(e){return{$$typeof:Q8,_payload:{_status:-1,_result:e},_init:ex}};Se.memo=function(e,t){return{$$typeof:Z8,type:e,compare:t===void 0?null:t}};Se.startTransition=function(e){var t=mu.transition;mu.transition={};try{e()}finally{mu.transition=t}};Se.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Se.useCallback=function(e,t){return Ht.current.useCallback(e,t)};Se.useContext=function(e){return Ht.current.useContext(e)};Se.useDebugValue=function(){};Se.useDeferredValue=function(e){return Ht.current.useDeferredValue(e)};Se.useEffect=function(e,t){return Ht.current.useEffect(e,t)};Se.useId=function(){return Ht.current.useId()};Se.useImperativeHandle=function(e,t,n){return Ht.current.useImperativeHandle(e,t,n)};Se.useInsertionEffect=function(e,t){return Ht.current.useInsertionEffect(e,t)};Se.useLayoutEffect=function(e,t){return Ht.current.useLayoutEffect(e,t)};Se.useMemo=function(e,t){return Ht.current.useMemo(e,t)};Se.useReducer=function(e,t,n){return Ht.current.useReducer(e,t,n)};Se.useRef=function(e){return Ht.current.useRef(e)};Se.useState=function(e){return Ht.current.useState(e)};Se.useSyncExternalStore=function(e,t,n){return Ht.current.useSyncExternalStore(e,t,n)};Se.useTransition=function(){return Ht.current.useTransition()};Se.version="18.2.0";Bv.exports=Se;var z=Bv.exports;const qe=Xd(z);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nx=z,rx=Symbol.for("react.element"),ix=Symbol.for("react.fragment"),ox=Object.prototype.hasOwnProperty,sx=nx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ax={key:!0,ref:!0,__self:!0,__source:!0};function Vv(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)ox.call(t,r)&&!ax.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:rx,type:e,key:o,ref:s,props:i,_owner:sx.current}}ef.Fragment=ix;ef.jsx=Vv;ef.jsxs=Vv;Mv.exports=ef;var K=Mv.exports,_h={},qv={exports:{}},hn={},Gv={exports:{}},Kv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(O,U){var H=O.length;O.push(U);e:for(;0<H;){var q=H-1>>>1,Y=O[q];if(0<i(Y,U))O[q]=U,O[H]=Y,H=q;else break e}}function n(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var U=O[0],H=O.pop();if(H!==U){O[0]=H;e:for(var q=0,Y=O.length,V=Y>>>1;q<V;){var ne=2*(q+1)-1,oe=O[ne],le=ne+1,de=O[le];if(0>i(oe,H))le<Y&&0>i(de,oe)?(O[q]=de,O[le]=H,q=le):(O[q]=oe,O[ne]=H,q=ne);else if(le<Y&&0>i(de,H))O[q]=de,O[le]=H,q=le;else break e}}return U}function i(O,U){var H=O.sortIndex-U.sortIndex;return H!==0?H:O.id-U.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}var l=[],c=[],u=1,d=null,h=3,p=!1,w=!1,x=!1,E=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(O){for(var U=n(c);U!==null;){if(U.callback===null)r(c);else if(U.startTime<=O)r(c),U.sortIndex=U.expirationTime,t(l,U);else break;U=n(c)}}function C(O){if(x=!1,v(O),!w)if(n(l)!==null)w=!0,R(_);else{var U=n(c);U!==null&&B(C,U.startTime-O)}}function _(O,U){w=!1,x&&(x=!1,b(S),S=-1),p=!0;var H=h;try{for(v(U),d=n(l);d!==null&&(!(d.expirationTime>U)||O&&!I());){var q=d.callback;if(typeof q=="function"){d.callback=null,h=d.priorityLevel;var Y=q(d.expirationTime<=U);U=e.unstable_now(),typeof Y=="function"?d.callback=Y:d===n(l)&&r(l),v(U)}else r(l);d=n(l)}if(d!==null)var V=!0;else{var ne=n(c);ne!==null&&B(C,ne.startTime-U),V=!1}return V}finally{d=null,h=H,p=!1}}var $=!1,f=null,S=-1,k=5,D=-1;function I(){return!(e.unstable_now()-D<k)}function W(){if(f!==null){var O=e.unstable_now();D=O;var U=!0;try{U=f(!0,O)}finally{U?J():($=!1,f=null)}}else $=!1}var J;if(typeof g=="function")J=function(){g(W)};else if(typeof MessageChannel<"u"){var F=new MessageChannel,L=F.port2;F.port1.onmessage=W,J=function(){L.postMessage(null)}}else J=function(){E(W,0)};function R(O){f=O,$||($=!0,J())}function B(O,U){S=E(function(){O(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(O){O.callback=null},e.unstable_continueExecution=function(){w||p||(w=!0,R(_))},e.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<O?Math.floor(1e3/O):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(O){switch(h){case 1:case 2:case 3:var U=3;break;default:U=h}var H=h;h=U;try{return O()}finally{h=H}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(O,U){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var H=h;h=O;try{return U()}finally{h=H}},e.unstable_scheduleCallback=function(O,U,H){var q=e.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?q+H:q):H=q,O){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=H+Y,O={id:u++,callback:U,priorityLevel:O,startTime:H,expirationTime:Y,sortIndex:-1},H>q?(O.sortIndex=H,t(c,O),n(l)===null&&O===n(c)&&(x?(b(S),S=-1):x=!0,B(C,H-q))):(O.sortIndex=Y,t(l,O),w||p||(w=!0,R(_))),O},e.unstable_shouldYield=I,e.unstable_wrapCallback=function(O){var U=h;return function(){var H=h;h=U;try{return O.apply(this,arguments)}finally{h=H}}}})(Kv);Gv.exports=Kv;var lx=Gv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=z,dn=lx;function G(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qv=new Set,al={};function To(e,t){ws(e,t),ws(e+"Capture",t)}function ws(e,t){for(al[e]=t,e=0;e<t.length;e++)Qv.add(t[e])}var $r=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sh=Object.prototype.hasOwnProperty,cx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,lw={},cw={};function ux(e){return Sh.call(cw,e)?!0:Sh.call(lw,e)?!1:cx.test(e)?cw[e]=!0:(lw[e]=!0,!1)}function dx(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function fx(e,t,n,r){if(t===null||typeof t>"u"||dx(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var At={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){At[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];At[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){At[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){At[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){At[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){At[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){At[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){At[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){At[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var D1=/[\-:]([a-z])/g;function O1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(D1,O1);At[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(D1,O1);At[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(D1,O1);At[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){At[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});At.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){At[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function I1(e,t,n,r){var i=At.hasOwnProperty(t)?At[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(fx(t,n,i,r)&&(n=null),r||i===null?ux(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rr=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Lc=Symbol.for("react.element"),Zo=Symbol.for("react.portal"),Qo=Symbol.for("react.fragment"),N1=Symbol.for("react.strict_mode"),$h=Symbol.for("react.profiler"),Yv=Symbol.for("react.provider"),Jv=Symbol.for("react.context"),R1=Symbol.for("react.forward_ref"),Ph=Symbol.for("react.suspense"),Th=Symbol.for("react.suspense_list"),M1=Symbol.for("react.memo"),Vr=Symbol.for("react.lazy"),Xv=Symbol.for("react.offscreen"),uw=Symbol.iterator;function da(e){return e===null||typeof e!="object"?null:(e=uw&&e[uw]||e["@@iterator"],typeof e=="function"?e:null)}var et=Object.assign,d0;function ka(e){if(d0===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);d0=t&&t[1]||""}return`
`+d0+e}var f0=!1;function h0(e,t){if(!e||f0)return"";f0=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=s&&0<=a);break}}}finally{f0=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ka(e):""}function hx(e){switch(e.tag){case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return e=h0(e.type,!1),e;case 11:return e=h0(e.type.render,!1),e;case 1:return e=h0(e.type,!0),e;default:return""}}function Ah(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Qo:return"Fragment";case Zo:return"Portal";case $h:return"Profiler";case N1:return"StrictMode";case Ph:return"Suspense";case Th:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jv:return(e.displayName||"Context")+".Consumer";case Yv:return(e._context.displayName||"Context")+".Provider";case R1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case M1:return t=e.displayName||null,t!==null?t:Ah(e.type)||"Memo";case Vr:t=e._payload,e=e._init;try{return Ah(e(t))}catch{}}return null}function px(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ah(t);case 8:return t===N1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function vi(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eb(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function gx(e){var t=eb(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uc(e){e._valueTracker||(e._valueTracker=gx(e))}function tb(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eb(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Mu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function kh(e,t){var n=t.checked;return et({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function dw(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=vi(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nb(e,t){t=t.checked,t!=null&&I1(e,"checked",t,!1)}function Dh(e,t){nb(e,t);var n=vi(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Oh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Oh(e,t.type,vi(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fw(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Oh(e,t,n){(t!=="number"||Mu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Da=Array.isArray;function ls(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+vi(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ih(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(G(91));return et({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hw(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(G(92));if(Da(n)){if(1<n.length)throw Error(G(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:vi(n)}}function rb(e,t){var n=vi(t.value),r=vi(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function pw(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ib(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ib(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Fc,ob=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Fc=Fc||document.createElement("div"),Fc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Fc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ll(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ua={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},mx=["Webkit","ms","Moz","O"];Object.keys(Ua).forEach(function(e){mx.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ua[t]=Ua[e]})});function sb(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ua.hasOwnProperty(e)&&Ua[e]?(""+t).trim():t+"px"}function ab(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=sb(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wx=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rh(e,t){if(t){if(wx[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(G(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(G(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(G(61))}if(t.style!=null&&typeof t.style!="object")throw Error(G(62))}}function Mh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bh=null;function B1(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jh=null,cs=null,us=null;function gw(e){if(e=hc(e)){if(typeof jh!="function")throw Error(G(280));var t=e.stateNode;t&&(t=sf(t),jh(e.stateNode,e.type,t))}}function lb(e){cs?us?us.push(e):us=[e]:cs=e}function cb(){if(cs){var e=cs,t=us;if(us=cs=null,gw(e),t)for(e=0;e<t.length;e++)gw(t[e])}}function ub(e,t){return e(t)}function db(){}var p0=!1;function fb(e,t,n){if(p0)return e(t,n);p0=!0;try{return ub(e,t,n)}finally{p0=!1,(cs!==null||us!==null)&&(db(),cb())}}function cl(e,t){var n=e.stateNode;if(n===null)return null;var r=sf(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(G(231,t,typeof n));return n}var Lh=!1;if($r)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){Lh=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{Lh=!1}function yx(e,t,n,r,i,o,s,a,l){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(u){this.onError(u)}}var Fa=!1,Bu=null,ju=!1,Uh=null,vx={onError:function(e){Fa=!0,Bu=e}};function bx(e,t,n,r,i,o,s,a,l){Fa=!1,Bu=null,yx.apply(vx,arguments)}function xx(e,t,n,r,i,o,s,a,l){if(bx.apply(this,arguments),Fa){if(Fa){var c=Bu;Fa=!1,Bu=null}else throw Error(G(198));ju||(ju=!0,Uh=c)}}function Ao(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function hb(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function mw(e){if(Ao(e)!==e)throw Error(G(188))}function Cx(e){var t=e.alternate;if(!t){if(t=Ao(e),t===null)throw Error(G(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return mw(i),e;if(o===r)return mw(i),t;o=o.sibling}throw Error(G(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(G(189))}}if(n.alternate!==r)throw Error(G(190))}if(n.tag!==3)throw Error(G(188));return n.stateNode.current===n?e:t}function pb(e){return e=Cx(e),e!==null?gb(e):null}function gb(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=gb(e);if(t!==null)return t;e=e.sibling}return null}var mb=dn.unstable_scheduleCallback,ww=dn.unstable_cancelCallback,Ex=dn.unstable_shouldYield,_x=dn.unstable_requestPaint,ot=dn.unstable_now,Sx=dn.unstable_getCurrentPriorityLevel,j1=dn.unstable_ImmediatePriority,wb=dn.unstable_UserBlockingPriority,Lu=dn.unstable_NormalPriority,$x=dn.unstable_LowPriority,yb=dn.unstable_IdlePriority,tf=null,sr=null;function Px(e){if(sr&&typeof sr.onCommitFiberRoot=="function")try{sr.onCommitFiberRoot(tf,e,void 0,(e.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:kx,Tx=Math.log,Ax=Math.LN2;function kx(e){return e>>>=0,e===0?32:31-(Tx(e)/Ax|0)|0}var zc=64,Wc=4194304;function Oa(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Uu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=Oa(a):(o&=s,o!==0&&(r=Oa(o)))}else s=n&~i,s!==0?r=Oa(s):o!==0&&(r=Oa(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Wn(t),i=1<<n,r|=e[n],t&=~i;return r}function Dx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ox(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-Wn(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Dx(a,t)):l<=t&&(e.expiredLanes|=a),o&=~a}}function Fh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vb(){var e=zc;return zc<<=1,!(zc&4194240)&&(zc=64),e}function g0(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function dc(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Wn(t),e[t]=n}function Ix(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Wn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function L1(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Wn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var De=0;function bb(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var xb,U1,Cb,Eb,_b,zh=!1,Hc=[],ii=null,oi=null,si=null,ul=new Map,dl=new Map,Zr=[],Nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yw(e,t){switch(e){case"focusin":case"focusout":ii=null;break;case"dragenter":case"dragleave":oi=null;break;case"mouseover":case"mouseout":si=null;break;case"pointerover":case"pointerout":ul.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":dl.delete(t.pointerId)}}function ha(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=hc(t),t!==null&&U1(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Rx(e,t,n,r,i){switch(t){case"focusin":return ii=ha(ii,e,t,n,r,i),!0;case"dragenter":return oi=ha(oi,e,t,n,r,i),!0;case"mouseover":return si=ha(si,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ul.set(o,ha(ul.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,dl.set(o,ha(dl.get(o)||null,e,t,n,r,i)),!0}return!1}function Sb(e){var t=Zi(e.target);if(t!==null){var n=Ao(t);if(n!==null){if(t=n.tag,t===13){if(t=hb(n),t!==null){e.blockedOn=t,_b(e.priority,function(){Cb(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wu(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wh(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Bh=r,n.target.dispatchEvent(r),Bh=null}else return t=hc(n),t!==null&&U1(t),e.blockedOn=n,!1;t.shift()}return!0}function vw(e,t,n){wu(e)&&n.delete(t)}function Mx(){zh=!1,ii!==null&&wu(ii)&&(ii=null),oi!==null&&wu(oi)&&(oi=null),si!==null&&wu(si)&&(si=null),ul.forEach(vw),dl.forEach(vw)}function pa(e,t){e.blockedOn===t&&(e.blockedOn=null,zh||(zh=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,Mx)))}function fl(e){function t(i){return pa(i,e)}if(0<Hc.length){pa(Hc[0],e);for(var n=1;n<Hc.length;n++){var r=Hc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(ii!==null&&pa(ii,e),oi!==null&&pa(oi,e),si!==null&&pa(si,e),ul.forEach(t),dl.forEach(t),n=0;n<Zr.length;n++)r=Zr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zr.length&&(n=Zr[0],n.blockedOn===null);)Sb(n),n.blockedOn===null&&Zr.shift()}var ds=Rr.ReactCurrentBatchConfig,Fu=!0;function Bx(e,t,n,r){var i=De,o=ds.transition;ds.transition=null;try{De=1,F1(e,t,n,r)}finally{De=i,ds.transition=o}}function jx(e,t,n,r){var i=De,o=ds.transition;ds.transition=null;try{De=4,F1(e,t,n,r)}finally{De=i,ds.transition=o}}function F1(e,t,n,r){if(Fu){var i=Wh(e,t,n,r);if(i===null)S0(e,t,r,zu,n),yw(e,r);else if(Rx(i,e,t,n,r))r.stopPropagation();else if(yw(e,r),t&4&&-1<Nx.indexOf(e)){for(;i!==null;){var o=hc(i);if(o!==null&&xb(o),o=Wh(e,t,n,r),o===null&&S0(e,t,r,zu,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else S0(e,t,r,null,n)}}var zu=null;function Wh(e,t,n,r){if(zu=null,e=B1(r),e=Zi(e),e!==null)if(t=Ao(e),t===null)e=null;else if(n=t.tag,n===13){if(e=hb(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return zu=e,null}function $b(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Sx()){case j1:return 1;case wb:return 4;case Lu:case $x:return 16;case yb:return 536870912;default:return 16}default:return 16}}var ei=null,z1=null,yu=null;function Pb(){if(yu)return yu;var e,t=z1,n=t.length,r,i="value"in ei?ei.value:ei.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return yu=i.slice(e,1<r?1-r:void 0)}function vu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Vc(){return!0}function bw(){return!1}function pn(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Vc:bw,this.isPropagationStopped=bw,this}return et(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Vc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Vc)},persist:function(){},isPersistent:Vc}),t}var Gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},W1=pn(Gs),fc=et({},Gs,{view:0,detail:0}),Lx=pn(fc),m0,w0,ga,nf=et({},fc,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:H1,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ga&&(ga&&e.type==="mousemove"?(m0=e.screenX-ga.screenX,w0=e.screenY-ga.screenY):w0=m0=0,ga=e),m0)},movementY:function(e){return"movementY"in e?e.movementY:w0}}),xw=pn(nf),Ux=et({},nf,{dataTransfer:0}),Fx=pn(Ux),zx=et({},fc,{relatedTarget:0}),y0=pn(zx),Wx=et({},Gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Hx=pn(Wx),Vx=et({},Gs,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qx=pn(Vx),Gx=et({},Gs,{data:0}),Cw=pn(Gx),Kx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qx[e])?!!t[e]:!1}function H1(){return Yx}var Jx=et({},fc,{key:function(e){if(e.key){var t=Kx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:H1,charCode:function(e){return e.type==="keypress"?vu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xx=pn(Jx),eC=et({},nf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ew=pn(eC),tC=et({},fc,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:H1}),nC=pn(tC),rC=et({},Gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),iC=pn(rC),oC=et({},nf,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),sC=pn(oC),aC=[9,13,27,32],V1=$r&&"CompositionEvent"in window,za=null;$r&&"documentMode"in document&&(za=document.documentMode);var lC=$r&&"TextEvent"in window&&!za,Tb=$r&&(!V1||za&&8<za&&11>=za),_w=String.fromCharCode(32),Sw=!1;function Ab(e,t){switch(e){case"keyup":return aC.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kb(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yo=!1;function cC(e,t){switch(e){case"compositionend":return kb(t);case"keypress":return t.which!==32?null:(Sw=!0,_w);case"textInput":return e=t.data,e===_w&&Sw?null:e;default:return null}}function uC(e,t){if(Yo)return e==="compositionend"||!V1&&Ab(e,t)?(e=Pb(),yu=z1=ei=null,Yo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Tb&&t.locale!=="ko"?null:t.data;default:return null}}var dC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $w(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dC[e.type]:t==="textarea"}function Db(e,t,n,r){lb(r),t=Wu(t,"onChange"),0<t.length&&(n=new W1("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Wa=null,hl=null;function fC(e){zb(e,0)}function rf(e){var t=es(e);if(tb(t))return e}function hC(e,t){if(e==="change")return t}var Ob=!1;if($r){var v0;if($r){var b0="oninput"in document;if(!b0){var Pw=document.createElement("div");Pw.setAttribute("oninput","return;"),b0=typeof Pw.oninput=="function"}v0=b0}else v0=!1;Ob=v0&&(!document.documentMode||9<document.documentMode)}function Tw(){Wa&&(Wa.detachEvent("onpropertychange",Ib),hl=Wa=null)}function Ib(e){if(e.propertyName==="value"&&rf(hl)){var t=[];Db(t,hl,e,B1(e)),fb(fC,t)}}function pC(e,t,n){e==="focusin"?(Tw(),Wa=t,hl=n,Wa.attachEvent("onpropertychange",Ib)):e==="focusout"&&Tw()}function gC(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return rf(hl)}function mC(e,t){if(e==="click")return rf(t)}function wC(e,t){if(e==="input"||e==="change")return rf(t)}function yC(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var qn=typeof Object.is=="function"?Object.is:yC;function pl(e,t){if(qn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Sh.call(t,i)||!qn(e[i],t[i]))return!1}return!0}function Aw(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function kw(e,t){var n=Aw(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Aw(n)}}function Nb(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nb(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rb(){for(var e=window,t=Mu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Mu(e.document)}return t}function q1(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function vC(e){var t=Rb(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nb(n.ownerDocument.documentElement,n)){if(r!==null&&q1(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=kw(n,o);var s=kw(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var bC=$r&&"documentMode"in document&&11>=document.documentMode,Jo=null,Hh=null,Ha=null,Vh=!1;function Dw(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vh||Jo==null||Jo!==Mu(r)||(r=Jo,"selectionStart"in r&&q1(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ha&&pl(Ha,r)||(Ha=r,r=Wu(Hh,"onSelect"),0<r.length&&(t=new W1("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Jo)))}function qc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xo={animationend:qc("Animation","AnimationEnd"),animationiteration:qc("Animation","AnimationIteration"),animationstart:qc("Animation","AnimationStart"),transitionend:qc("Transition","TransitionEnd")},x0={},Mb={};$r&&(Mb=document.createElement("div").style,"AnimationEvent"in window||(delete Xo.animationend.animation,delete Xo.animationiteration.animation,delete Xo.animationstart.animation),"TransitionEvent"in window||delete Xo.transitionend.transition);function of(e){if(x0[e])return x0[e];if(!Xo[e])return e;var t=Xo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Mb)return x0[e]=t[n];return e}var Bb=of("animationend"),jb=of("animationiteration"),Lb=of("animationstart"),Ub=of("transitionend"),Fb=new Map,Ow="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(e,t){Fb.set(e,t),To(t,[e])}for(var C0=0;C0<Ow.length;C0++){var E0=Ow[C0],xC=E0.toLowerCase(),CC=E0[0].toUpperCase()+E0.slice(1);Ai(xC,"on"+CC)}Ai(Bb,"onAnimationEnd");Ai(jb,"onAnimationIteration");Ai(Lb,"onAnimationStart");Ai("dblclick","onDoubleClick");Ai("focusin","onFocus");Ai("focusout","onBlur");Ai(Ub,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);To("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));To("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));To("onBeforeInput",["compositionend","keypress","textInput","paste"]);To("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));To("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));To("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ia="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EC=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ia));function Iw(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,xx(r,t,void 0,e),e.currentTarget=null}function zb(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Iw(i,a,c),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,c=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Iw(i,a,c),o=l}}}if(ju)throw e=Uh,ju=!1,Uh=null,e}function We(e,t){var n=t[Qh];n===void 0&&(n=t[Qh]=new Set);var r=e+"__bubble";n.has(r)||(Wb(t,e,2,!1),n.add(r))}function _0(e,t,n){var r=0;t&&(r|=4),Wb(n,e,r,t)}var Gc="_reactListening"+Math.random().toString(36).slice(2);function gl(e){if(!e[Gc]){e[Gc]=!0,Qv.forEach(function(n){n!=="selectionchange"&&(EC.has(n)||_0(n,!1,e),_0(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gc]||(t[Gc]=!0,_0("selectionchange",!1,t))}}function Wb(e,t,n,r){switch($b(t)){case 1:var i=Bx;break;case 4:i=jx;break;default:i=F1}n=i.bind(null,t,n,e),i=void 0,!Lh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function S0(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Zi(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}fb(function(){var c=o,u=B1(n),d=[];e:{var h=Fb.get(e);if(h!==void 0){var p=W1,w=e;switch(e){case"keypress":if(vu(n)===0)break e;case"keydown":case"keyup":p=Xx;break;case"focusin":w="focus",p=y0;break;case"focusout":w="blur",p=y0;break;case"beforeblur":case"afterblur":p=y0;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=xw;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Fx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nC;break;case Bb:case jb:case Lb:p=Hx;break;case Ub:p=iC;break;case"scroll":p=Lx;break;case"wheel":p=sC;break;case"copy":case"cut":case"paste":p=qx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ew}var x=(t&4)!==0,E=!x&&e==="scroll",b=x?h!==null?h+"Capture":null:h;x=[];for(var g=c,v;g!==null;){v=g;var C=v.stateNode;if(v.tag===5&&C!==null&&(v=C,b!==null&&(C=cl(g,b),C!=null&&x.push(ml(g,C,v)))),E)break;g=g.return}0<x.length&&(h=new p(h,w,null,n,u),d.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",h&&n!==Bh&&(w=n.relatedTarget||n.fromElement)&&(Zi(w)||w[Pr]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(w=n.relatedTarget||n.toElement,p=c,w=w?Zi(w):null,w!==null&&(E=Ao(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(p=null,w=c),p!==w)){if(x=xw,C="onMouseLeave",b="onMouseEnter",g="mouse",(e==="pointerout"||e==="pointerover")&&(x=Ew,C="onPointerLeave",b="onPointerEnter",g="pointer"),E=p==null?h:es(p),v=w==null?h:es(w),h=new x(C,g+"leave",p,n,u),h.target=E,h.relatedTarget=v,C=null,Zi(u)===c&&(x=new x(b,g+"enter",w,n,u),x.target=v,x.relatedTarget=E,C=x),E=C,p&&w)t:{for(x=p,b=w,g=0,v=x;v;v=Bo(v))g++;for(v=0,C=b;C;C=Bo(C))v++;for(;0<g-v;)x=Bo(x),g--;for(;0<v-g;)b=Bo(b),v--;for(;g--;){if(x===b||b!==null&&x===b.alternate)break t;x=Bo(x),b=Bo(b)}x=null}else x=null;p!==null&&Nw(d,h,p,x,!1),w!==null&&E!==null&&Nw(d,E,w,x,!0)}}e:{if(h=c?es(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var _=hC;else if($w(h))if(Ob)_=wC;else{_=gC;var $=pC}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=mC);if(_&&(_=_(e,c))){Db(d,_,n,u);break e}$&&$(e,h,c),e==="focusout"&&($=h._wrapperState)&&$.controlled&&h.type==="number"&&Oh(h,"number",h.value)}switch($=c?es(c):window,e){case"focusin":($w($)||$.contentEditable==="true")&&(Jo=$,Hh=c,Ha=null);break;case"focusout":Ha=Hh=Jo=null;break;case"mousedown":Vh=!0;break;case"contextmenu":case"mouseup":case"dragend":Vh=!1,Dw(d,n,u);break;case"selectionchange":if(bC)break;case"keydown":case"keyup":Dw(d,n,u)}var f;if(V1)e:{switch(e){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else Yo?Ab(e,n)&&(S="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(Tb&&n.locale!=="ko"&&(Yo||S!=="onCompositionStart"?S==="onCompositionEnd"&&Yo&&(f=Pb()):(ei=u,z1="value"in ei?ei.value:ei.textContent,Yo=!0)),$=Wu(c,S),0<$.length&&(S=new Cw(S,e,null,n,u),d.push({event:S,listeners:$}),f?S.data=f:(f=kb(n),f!==null&&(S.data=f)))),(f=lC?cC(e,n):uC(e,n))&&(c=Wu(c,"onBeforeInput"),0<c.length&&(u=new Cw("onBeforeInput","beforeinput",null,n,u),d.push({event:u,listeners:c}),u.data=f))}zb(d,t)})}function ml(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=cl(e,n),o!=null&&r.unshift(ml(e,o,i)),o=cl(e,t),o!=null&&r.push(ml(e,o,i))),e=e.return}return r}function Bo(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Nw(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&c!==null&&(a=c,i?(l=cl(n,o),l!=null&&s.unshift(ml(n,l,a))):i||(l=cl(n,o),l!=null&&s.push(ml(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var _C=/\r\n?/g,SC=/\u0000|\uFFFD/g;function Rw(e){return(typeof e=="string"?e:""+e).replace(_C,`
`).replace(SC,"")}function Kc(e,t,n){if(t=Rw(t),Rw(e)!==t&&n)throw Error(G(425))}function Hu(){}var qh=null,Gh=null;function Kh(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Zh=typeof setTimeout=="function"?setTimeout:void 0,$C=typeof clearTimeout=="function"?clearTimeout:void 0,Mw=typeof Promise=="function"?Promise:void 0,PC=typeof queueMicrotask=="function"?queueMicrotask:typeof Mw<"u"?function(e){return Mw.resolve(null).then(e).catch(TC)}:Zh;function TC(e){setTimeout(function(){throw e})}function $0(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),fl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);fl(t)}function ai(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Bw(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ks=Math.random().toString(36).slice(2),ir="__reactFiber$"+Ks,wl="__reactProps$"+Ks,Pr="__reactContainer$"+Ks,Qh="__reactEvents$"+Ks,AC="__reactListeners$"+Ks,kC="__reactHandles$"+Ks;function Zi(e){var t=e[ir];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pr]||n[ir]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Bw(e);e!==null;){if(n=e[ir])return n;e=Bw(e)}return t}e=n,n=e.parentNode}return null}function hc(e){return e=e[ir]||e[Pr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function es(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(G(33))}function sf(e){return e[wl]||null}var Yh=[],ts=-1;function ki(e){return{current:e}}function Ge(e){0>ts||(e.current=Yh[ts],Yh[ts]=null,ts--)}function Le(e,t){ts++,Yh[ts]=e.current,e.current=t}var bi={},Bt=ki(bi),Yt=ki(!1),uo=bi;function ys(e,t){var n=e.type.contextTypes;if(!n)return bi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Jt(e){return e=e.childContextTypes,e!=null}function Vu(){Ge(Yt),Ge(Bt)}function jw(e,t,n){if(Bt.current!==bi)throw Error(G(168));Le(Bt,t),Le(Yt,n)}function Hb(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(G(108,px(e)||"Unknown",i));return et({},n,r)}function qu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||bi,uo=Bt.current,Le(Bt,e),Le(Yt,Yt.current),!0}function Lw(e,t,n){var r=e.stateNode;if(!r)throw Error(G(169));n?(e=Hb(e,t,uo),r.__reactInternalMemoizedMergedChildContext=e,Ge(Yt),Ge(Bt),Le(Bt,e)):Ge(Yt),Le(Yt,n)}var br=null,af=!1,P0=!1;function Vb(e){br===null?br=[e]:br.push(e)}function DC(e){af=!0,Vb(e)}function Di(){if(!P0&&br!==null){P0=!0;var e=0,t=De;try{var n=br;for(De=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}br=null,af=!1}catch(i){throw br!==null&&(br=br.slice(e+1)),mb(j1,Di),i}finally{De=t,P0=!1}}return null}var ns=[],rs=0,Gu=null,Ku=0,Sn=[],$n=0,fo=null,Cr=1,Er="";function Vi(e,t){ns[rs++]=Ku,ns[rs++]=Gu,Gu=e,Ku=t}function qb(e,t,n){Sn[$n++]=Cr,Sn[$n++]=Er,Sn[$n++]=fo,fo=e;var r=Cr;e=Er;var i=32-Wn(r)-1;r&=~(1<<i),n+=1;var o=32-Wn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,Cr=1<<32-Wn(t)+i|n<<i|r,Er=o+e}else Cr=1<<o|n<<i|r,Er=e}function G1(e){e.return!==null&&(Vi(e,1),qb(e,1,0))}function K1(e){for(;e===Gu;)Gu=ns[--rs],ns[rs]=null,Ku=ns[--rs],ns[rs]=null;for(;e===fo;)fo=Sn[--$n],Sn[$n]=null,Er=Sn[--$n],Sn[$n]=null,Cr=Sn[--$n],Sn[$n]=null}var un=null,ln=null,Qe=!1,Ln=null;function Gb(e,t){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Uw(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,un=e,ln=ai(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,un=e,ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=fo!==null?{id:Cr,overflow:Er}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,un=e,ln=null,!0):!1;default:return!1}}function Jh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Xh(e){if(Qe){var t=ln;if(t){var n=t;if(!Uw(e,t)){if(Jh(e))throw Error(G(418));t=ai(n.nextSibling);var r=un;t&&Uw(e,t)?Gb(r,n):(e.flags=e.flags&-4097|2,Qe=!1,un=e)}}else{if(Jh(e))throw Error(G(418));e.flags=e.flags&-4097|2,Qe=!1,un=e}}}function Fw(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;un=e}function Zc(e){if(e!==un)return!1;if(!Qe)return Fw(e),Qe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kh(e.type,e.memoizedProps)),t&&(t=ln)){if(Jh(e))throw Kb(),Error(G(418));for(;t;)Gb(e,t),t=ai(t.nextSibling)}if(Fw(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(G(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ln=ai(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ln=null}}else ln=un?ai(e.stateNode.nextSibling):null;return!0}function Kb(){for(var e=ln;e;)e=ai(e.nextSibling)}function vs(){ln=un=null,Qe=!1}function Z1(e){Ln===null?Ln=[e]:Ln.push(e)}var OC=Rr.ReactCurrentBatchConfig;function Bn(e,t){if(e&&e.defaultProps){t=et({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Zu=ki(null),Qu=null,is=null,Q1=null;function Y1(){Q1=is=Qu=null}function J1(e){var t=Zu.current;Ge(Zu),e._currentValue=t}function ep(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function fs(e,t){Qu=e,Q1=is=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Kt=!0),e.firstContext=null)}function An(e){var t=e._currentValue;if(Q1!==e)if(e={context:e,memoizedValue:t,next:null},is===null){if(Qu===null)throw Error(G(308));is=e,Qu.dependencies={lanes:0,firstContext:e}}else is=is.next=e;return t}var Qi=null;function X1(e){Qi===null?Qi=[e]:Qi.push(e)}function Zb(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,X1(t)):(n.next=i.next,i.next=n),t.interleaved=n,Tr(e,r)}function Tr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var qr=!1;function eg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qb(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function li(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Pe&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Tr(e,n)}return i=r.interleaved,i===null?(t.next=t,X1(r)):(t.next=i.next,i.next=t),r.interleaved=t,Tr(e,n)}function bu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,L1(e,n)}}function zw(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Yu(e,t,n,r){var i=e.updateQueue;qr=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,c=l.next;l.next=null,s===null?o=c:s.next=c,s=l;var u=e.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==s&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(o!==null){var d=i.baseState;s=0,u=c=l=null,a=o;do{var h=a.lane,p=a.eventTime;if((r&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=e,x=a;switch(h=t,p=n,x.tag){case 1:if(w=x.payload,typeof w=="function"){d=w.call(p,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=x.payload,h=typeof w=="function"?w.call(p,d,h):w,h==null)break e;d=et({},d,h);break e;case 2:qr=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=d):u=u.next=p,s|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(u===null&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);po|=s,e.lanes=s,e.memoizedState=d}}function Ww(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(G(191,i));i.call(r)}}}var Yb=new Zv.Component().refs;function tp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:et({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lf={isMounted:function(e){return(e=e._reactInternals)?Ao(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=ui(e),o=_r(r,i);o.payload=t,n!=null&&(o.callback=n),t=li(e,o,i),t!==null&&(Hn(t,e,i,r),bu(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ft(),i=ui(e),o=_r(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=li(e,o,i),t!==null&&(Hn(t,e,i,r),bu(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ft(),r=ui(e),i=_r(n,r);i.tag=2,t!=null&&(i.callback=t),t=li(e,i,r),t!==null&&(Hn(t,e,r,n),bu(t,e,r))}};function Hw(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!pl(n,r)||!pl(i,o):!0}function Jb(e,t,n){var r=!1,i=bi,o=t.contextType;return typeof o=="object"&&o!==null?o=An(o):(i=Jt(t)?uo:Bt.current,r=t.contextTypes,o=(r=r!=null)?ys(e,i):bi),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=lf,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vw(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&lf.enqueueReplaceState(t,t.state,null)}function np(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Yb,eg(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=An(o):(o=Jt(t)?uo:Bt.current,i.context=ys(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(tp(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&lf.enqueueReplaceState(i,i.state,null),Yu(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ma(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(G(309));var r=n.stateNode}if(!r)throw Error(G(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var a=i.refs;a===Yb&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(G(284));if(!n._owner)throw Error(G(290,e))}return e}function Qc(e,t){throw e=Object.prototype.toString.call(t),Error(G(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function qw(e){var t=e._init;return t(e._payload)}function Xb(e){function t(b,g){if(e){var v=b.deletions;v===null?(b.deletions=[g],b.flags|=16):v.push(g)}}function n(b,g){if(!e)return null;for(;g!==null;)t(b,g),g=g.sibling;return null}function r(b,g){for(b=new Map;g!==null;)g.key!==null?b.set(g.key,g):b.set(g.index,g),g=g.sibling;return b}function i(b,g){return b=di(b,g),b.index=0,b.sibling=null,b}function o(b,g,v){return b.index=v,e?(v=b.alternate,v!==null?(v=v.index,v<g?(b.flags|=2,g):v):(b.flags|=2,g)):(b.flags|=1048576,g)}function s(b){return e&&b.alternate===null&&(b.flags|=2),b}function a(b,g,v,C){return g===null||g.tag!==6?(g=N0(v,b.mode,C),g.return=b,g):(g=i(g,v),g.return=b,g)}function l(b,g,v,C){var _=v.type;return _===Qo?u(b,g,v.props.children,C,v.key):g!==null&&(g.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vr&&qw(_)===g.type)?(C=i(g,v.props),C.ref=ma(b,g,v),C.return=b,C):(C=$u(v.type,v.key,v.props,null,b.mode,C),C.ref=ma(b,g,v),C.return=b,C)}function c(b,g,v,C){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=R0(v,b.mode,C),g.return=b,g):(g=i(g,v.children||[]),g.return=b,g)}function u(b,g,v,C,_){return g===null||g.tag!==7?(g=oo(v,b.mode,C,_),g.return=b,g):(g=i(g,v),g.return=b,g)}function d(b,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=N0(""+g,b.mode,v),g.return=b,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Lc:return v=$u(g.type,g.key,g.props,null,b.mode,v),v.ref=ma(b,null,g),v.return=b,v;case Zo:return g=R0(g,b.mode,v),g.return=b,g;case Vr:var C=g._init;return d(b,C(g._payload),v)}if(Da(g)||da(g))return g=oo(g,b.mode,v,null),g.return=b,g;Qc(b,g)}return null}function h(b,g,v,C){var _=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return _!==null?null:a(b,g,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Lc:return v.key===_?l(b,g,v,C):null;case Zo:return v.key===_?c(b,g,v,C):null;case Vr:return _=v._init,h(b,g,_(v._payload),C)}if(Da(v)||da(v))return _!==null?null:u(b,g,v,C,null);Qc(b,v)}return null}function p(b,g,v,C,_){if(typeof C=="string"&&C!==""||typeof C=="number")return b=b.get(v)||null,a(g,b,""+C,_);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case Lc:return b=b.get(C.key===null?v:C.key)||null,l(g,b,C,_);case Zo:return b=b.get(C.key===null?v:C.key)||null,c(g,b,C,_);case Vr:var $=C._init;return p(b,g,v,$(C._payload),_)}if(Da(C)||da(C))return b=b.get(v)||null,u(g,b,C,_,null);Qc(g,C)}return null}function w(b,g,v,C){for(var _=null,$=null,f=g,S=g=0,k=null;f!==null&&S<v.length;S++){f.index>S?(k=f,f=null):k=f.sibling;var D=h(b,f,v[S],C);if(D===null){f===null&&(f=k);break}e&&f&&D.alternate===null&&t(b,f),g=o(D,g,S),$===null?_=D:$.sibling=D,$=D,f=k}if(S===v.length)return n(b,f),Qe&&Vi(b,S),_;if(f===null){for(;S<v.length;S++)f=d(b,v[S],C),f!==null&&(g=o(f,g,S),$===null?_=f:$.sibling=f,$=f);return Qe&&Vi(b,S),_}for(f=r(b,f);S<v.length;S++)k=p(f,b,S,v[S],C),k!==null&&(e&&k.alternate!==null&&f.delete(k.key===null?S:k.key),g=o(k,g,S),$===null?_=k:$.sibling=k,$=k);return e&&f.forEach(function(I){return t(b,I)}),Qe&&Vi(b,S),_}function x(b,g,v,C){var _=da(v);if(typeof _!="function")throw Error(G(150));if(v=_.call(v),v==null)throw Error(G(151));for(var $=_=null,f=g,S=g=0,k=null,D=v.next();f!==null&&!D.done;S++,D=v.next()){f.index>S?(k=f,f=null):k=f.sibling;var I=h(b,f,D.value,C);if(I===null){f===null&&(f=k);break}e&&f&&I.alternate===null&&t(b,f),g=o(I,g,S),$===null?_=I:$.sibling=I,$=I,f=k}if(D.done)return n(b,f),Qe&&Vi(b,S),_;if(f===null){for(;!D.done;S++,D=v.next())D=d(b,D.value,C),D!==null&&(g=o(D,g,S),$===null?_=D:$.sibling=D,$=D);return Qe&&Vi(b,S),_}for(f=r(b,f);!D.done;S++,D=v.next())D=p(f,b,S,D.value,C),D!==null&&(e&&D.alternate!==null&&f.delete(D.key===null?S:D.key),g=o(D,g,S),$===null?_=D:$.sibling=D,$=D);return e&&f.forEach(function(W){return t(b,W)}),Qe&&Vi(b,S),_}function E(b,g,v,C){if(typeof v=="object"&&v!==null&&v.type===Qo&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Lc:e:{for(var _=v.key,$=g;$!==null;){if($.key===_){if(_=v.type,_===Qo){if($.tag===7){n(b,$.sibling),g=i($,v.props.children),g.return=b,b=g;break e}}else if($.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Vr&&qw(_)===$.type){n(b,$.sibling),g=i($,v.props),g.ref=ma(b,$,v),g.return=b,b=g;break e}n(b,$);break}else t(b,$);$=$.sibling}v.type===Qo?(g=oo(v.props.children,b.mode,C,v.key),g.return=b,b=g):(C=$u(v.type,v.key,v.props,null,b.mode,C),C.ref=ma(b,g,v),C.return=b,b=C)}return s(b);case Zo:e:{for($=v.key;g!==null;){if(g.key===$)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(b,g.sibling),g=i(g,v.children||[]),g.return=b,b=g;break e}else{n(b,g);break}else t(b,g);g=g.sibling}g=R0(v,b.mode,C),g.return=b,b=g}return s(b);case Vr:return $=v._init,E(b,g,$(v._payload),C)}if(Da(v))return w(b,g,v,C);if(da(v))return x(b,g,v,C);Qc(b,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(b,g.sibling),g=i(g,v),g.return=b,b=g):(n(b,g),g=N0(v,b.mode,C),g.return=b,b=g),s(b)):n(b,g)}return E}var bs=Xb(!0),e3=Xb(!1),pc={},ar=ki(pc),yl=ki(pc),vl=ki(pc);function Yi(e){if(e===pc)throw Error(G(174));return e}function tg(e,t){switch(Le(vl,t),Le(yl,e),Le(ar,pc),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nh(t,e)}Ge(ar),Le(ar,t)}function xs(){Ge(ar),Ge(yl),Ge(vl)}function t3(e){Yi(vl.current);var t=Yi(ar.current),n=Nh(t,e.type);t!==n&&(Le(yl,e),Le(ar,n))}function ng(e){yl.current===e&&(Ge(ar),Ge(yl))}var Ye=ki(0);function Ju(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var T0=[];function rg(){for(var e=0;e<T0.length;e++)T0[e]._workInProgressVersionPrimary=null;T0.length=0}var xu=Rr.ReactCurrentDispatcher,A0=Rr.ReactCurrentBatchConfig,ho=0,Xe=null,ht=null,Ct=null,Xu=!1,Va=!1,bl=0,IC=0;function Dt(){throw Error(G(321))}function ig(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!qn(e[n],t[n]))return!1;return!0}function og(e,t,n,r,i,o){if(ho=o,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xu.current=e===null||e.memoizedState===null?BC:jC,e=n(r,i),Va){o=0;do{if(Va=!1,bl=0,25<=o)throw Error(G(301));o+=1,Ct=ht=null,t.updateQueue=null,xu.current=LC,e=n(r,i)}while(Va)}if(xu.current=ed,t=ht!==null&&ht.next!==null,ho=0,Ct=ht=Xe=null,Xu=!1,t)throw Error(G(300));return e}function sg(){var e=bl!==0;return bl=0,e}function tr(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Xe.memoizedState=Ct=e:Ct=Ct.next=e,Ct}function kn(){if(ht===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var t=Ct===null?Xe.memoizedState:Ct.next;if(t!==null)Ct=t,ht=e;else{if(e===null)throw Error(G(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Ct===null?Xe.memoizedState=Ct=e:Ct=Ct.next=e}return Ct}function xl(e,t){return typeof t=="function"?t(e):t}function k0(e){var t=kn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=ht,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,c=o;do{var u=c.lane;if((ho&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var d={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=d,s=r):l=l.next=d,Xe.lanes|=u,po|=u}c=c.next}while(c!==null&&c!==o);l===null?s=r:l.next=a,qn(r,t.memoizedState)||(Kt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Xe.lanes|=o,po|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function D0(e){var t=kn(),n=t.queue;if(n===null)throw Error(G(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);qn(o,t.memoizedState)||(Kt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function n3(){}function r3(e,t){var n=Xe,r=kn(),i=t(),o=!qn(r.memoizedState,i);if(o&&(r.memoizedState=i,Kt=!0),r=r.queue,ag(s3.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ct!==null&&Ct.memoizedState.tag&1){if(n.flags|=2048,Cl(9,o3.bind(null,n,r,i,t),void 0,null),St===null)throw Error(G(349));ho&30||i3(n,t,i)}return i}function i3(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function o3(e,t,n,r){t.value=n,t.getSnapshot=r,a3(t)&&l3(e)}function s3(e,t,n){return n(function(){a3(t)&&l3(e)})}function a3(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!qn(e,n)}catch{return!0}}function l3(e){var t=Tr(e,1);t!==null&&Hn(t,e,1,-1)}function Gw(e){var t=tr();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xl,lastRenderedState:e},t.queue=e,e=e.dispatch=MC.bind(null,Xe,e),[t.memoizedState,e]}function Cl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function c3(){return kn().memoizedState}function Cu(e,t,n,r){var i=tr();Xe.flags|=e,i.memoizedState=Cl(1|t,n,void 0,r===void 0?null:r)}function cf(e,t,n,r){var i=kn();r=r===void 0?null:r;var o=void 0;if(ht!==null){var s=ht.memoizedState;if(o=s.destroy,r!==null&&ig(r,s.deps)){i.memoizedState=Cl(t,n,o,r);return}}Xe.flags|=e,i.memoizedState=Cl(1|t,n,o,r)}function Kw(e,t){return Cu(8390656,8,e,t)}function ag(e,t){return cf(2048,8,e,t)}function u3(e,t){return cf(4,2,e,t)}function d3(e,t){return cf(4,4,e,t)}function f3(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function h3(e,t,n){return n=n!=null?n.concat([e]):null,cf(4,4,f3.bind(null,t,e),n)}function lg(){}function p3(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ig(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function g3(e,t){var n=kn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ig(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function m3(e,t,n){return ho&21?(qn(n,t)||(n=vb(),Xe.lanes|=n,po|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Kt=!0),e.memoizedState=n)}function NC(e,t){var n=De;De=n!==0&&4>n?n:4,e(!0);var r=A0.transition;A0.transition={};try{e(!1),t()}finally{De=n,A0.transition=r}}function w3(){return kn().memoizedState}function RC(e,t,n){var r=ui(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},y3(e))v3(t,n);else if(n=Zb(e,t,n,r),n!==null){var i=Ft();Hn(n,e,r,i),b3(n,t,r)}}function MC(e,t,n){var r=ui(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(y3(e))v3(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,qn(a,s)){var l=t.interleaved;l===null?(i.next=i,X1(t)):(i.next=l.next,l.next=i),t.interleaved=i;return}}catch{}finally{}n=Zb(e,t,i,r),n!==null&&(i=Ft(),Hn(n,e,r,i),b3(n,t,r))}}function y3(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function v3(e,t){Va=Xu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function b3(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,L1(e,n)}}var ed={readContext:An,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},BC={readContext:An,useCallback:function(e,t){return tr().memoizedState=[e,t===void 0?null:t],e},useContext:An,useEffect:Kw,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Cu(4194308,4,f3.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Cu(4194308,4,e,t)},useInsertionEffect:function(e,t){return Cu(4,2,e,t)},useMemo:function(e,t){var n=tr();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tr();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=RC.bind(null,Xe,e),[r.memoizedState,e]},useRef:function(e){var t=tr();return e={current:e},t.memoizedState=e},useState:Gw,useDebugValue:lg,useDeferredValue:function(e){return tr().memoizedState=e},useTransition:function(){var e=Gw(!1),t=e[0];return e=NC.bind(null,e[1]),tr().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Xe,i=tr();if(Qe){if(n===void 0)throw Error(G(407));n=n()}else{if(n=t(),St===null)throw Error(G(349));ho&30||i3(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,Kw(s3.bind(null,r,o,e),[e]),r.flags|=2048,Cl(9,o3.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=tr(),t=St.identifierPrefix;if(Qe){var n=Er,r=Cr;n=(r&~(1<<32-Wn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=bl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=IC++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},jC={readContext:An,useCallback:p3,useContext:An,useEffect:ag,useImperativeHandle:h3,useInsertionEffect:u3,useLayoutEffect:d3,useMemo:g3,useReducer:k0,useRef:c3,useState:function(){return k0(xl)},useDebugValue:lg,useDeferredValue:function(e){var t=kn();return m3(t,ht.memoizedState,e)},useTransition:function(){var e=k0(xl)[0],t=kn().memoizedState;return[e,t]},useMutableSource:n3,useSyncExternalStore:r3,useId:w3,unstable_isNewReconciler:!1},LC={readContext:An,useCallback:p3,useContext:An,useEffect:ag,useImperativeHandle:h3,useInsertionEffect:u3,useLayoutEffect:d3,useMemo:g3,useReducer:D0,useRef:c3,useState:function(){return D0(xl)},useDebugValue:lg,useDeferredValue:function(e){var t=kn();return ht===null?t.memoizedState=e:m3(t,ht.memoizedState,e)},useTransition:function(){var e=D0(xl)[0],t=kn().memoizedState;return[e,t]},useMutableSource:n3,useSyncExternalStore:r3,useId:w3,unstable_isNewReconciler:!1};function Cs(e,t){try{var n="",r=t;do n+=hx(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function O0(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function rp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var UC=typeof WeakMap=="function"?WeakMap:Map;function x3(e,t,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nd||(nd=!0,hp=r),rp(e,t)},n}function C3(e,t,n){n=_r(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){rp(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){rp(e,t),typeof r!="function"&&(ci===null?ci=new Set([this]):ci.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function Zw(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new UC;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=eE.bind(null,e,t,n),t.then(e,e))}function Qw(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Yw(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_r(-1,1),t.tag=2,li(n,t,1))),n.lanes|=1),e)}var FC=Rr.ReactCurrentOwner,Kt=!1;function Lt(e,t,n,r){t.child=e===null?e3(t,null,n,r):bs(t,e.child,n,r)}function Jw(e,t,n,r,i){n=n.render;var o=t.ref;return fs(t,i),r=og(e,t,n,r,o,i),n=sg(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ar(e,t,i)):(Qe&&n&&G1(t),t.flags|=1,Lt(e,t,r,i),t.child)}function Xw(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!mg(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,E3(e,t,o,r,i)):(e=$u(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:pl,n(s,r)&&e.ref===t.ref)return Ar(e,t,i)}return t.flags|=1,e=di(o,r),e.ref=t.ref,e.return=t,t.child=e}function E3(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(pl(o,r)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Kt=!0);else return t.lanes=e.lanes,Ar(e,t,i)}return ip(e,t,n,r,i)}function _3(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Le(ss,an),an|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Le(ss,an),an|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Le(ss,an),an|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Le(ss,an),an|=r;return Lt(e,t,i,n),t.child}function S3(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ip(e,t,n,r,i){var o=Jt(n)?uo:Bt.current;return o=ys(t,o),fs(t,i),n=og(e,t,n,r,o,i),r=sg(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ar(e,t,i)):(Qe&&r&&G1(t),t.flags|=1,Lt(e,t,n,i),t.child)}function e2(e,t,n,r,i){if(Jt(n)){var o=!0;qu(t)}else o=!1;if(fs(t,i),t.stateNode===null)Eu(e,t),Jb(t,n,r),np(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,c=n.contextType;typeof c=="object"&&c!==null?c=An(c):(c=Jt(n)?uo:Bt.current,c=ys(t,c));var u=n.getDerivedStateFromProps,d=typeof u=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==c)&&Vw(t,s,r,c),qr=!1;var h=t.memoizedState;s.state=h,Yu(t,r,s,i),l=t.memoizedState,a!==r||h!==l||Yt.current||qr?(typeof u=="function"&&(tp(t,n,u,r),l=t.memoizedState),(a=qr||Hw(t,n,a,r,h,l,c))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=c,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,Qb(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:Bn(t.type,a),s.props=c,d=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=An(l):(l=Jt(n)?uo:Bt.current,l=ys(t,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Vw(t,s,r,l),qr=!1,h=t.memoizedState,s.state=h,Yu(t,r,s,i);var w=t.memoizedState;a!==d||h!==w||Yt.current||qr?(typeof p=="function"&&(tp(t,n,p,r),w=t.memoizedState),(c=qr||Hw(t,n,c,r,h,w,l)||!1)?(u||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,w,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,w,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),s.props=r,s.state=w,s.context=l,r=c):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return op(e,t,n,r,o,i)}function op(e,t,n,r,i,o){S3(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&Lw(t,n,!1),Ar(e,t,o);r=t.stateNode,FC.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=bs(t,e.child,null,o),t.child=bs(t,null,a,o)):Lt(e,t,a,o),t.memoizedState=r.state,i&&Lw(t,n,!0),t.child}function $3(e){var t=e.stateNode;t.pendingContext?jw(e,t.pendingContext,t.pendingContext!==t.context):t.context&&jw(e,t.context,!1),tg(e,t.containerInfo)}function t2(e,t,n,r,i){return vs(),Z1(i),t.flags|=256,Lt(e,t,n,r),t.child}var sp={dehydrated:null,treeContext:null,retryLane:0};function ap(e){return{baseLanes:e,cachePool:null,transitions:null}}function P3(e,t,n){var r=t.pendingProps,i=Ye.current,o=!1,s=(t.flags&128)!==0,a;if((a=s)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Le(Ye,i&1),e===null)return Xh(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=ff(s,r,0,null),e=oo(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ap(n),t.memoizedState=sp,e):cg(t,s));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return zC(e,t,s,r,a,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=di(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=di(a,o):(o=oo(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?ap(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=sp,r}return o=e.child,e=o.sibling,r=di(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function cg(e,t){return t=ff({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Yc(e,t,n,r){return r!==null&&Z1(r),bs(t,e.child,null,n),e=cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zC(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=O0(Error(G(422))),Yc(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ff({mode:"visible",children:r.children},i,0,null),o=oo(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&bs(t,e.child,null,s),t.child.memoizedState=ap(s),t.memoizedState=sp,o);if(!(t.mode&1))return Yc(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(G(419)),r=O0(o,r,void 0),Yc(e,t,s,r)}if(a=(s&e.childLanes)!==0,Kt||a){if(r=St,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Tr(e,i),Hn(r,e,i,-1))}return gg(),r=O0(Error(G(421))),Yc(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=tE.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,ln=ai(i.nextSibling),un=t,Qe=!0,Ln=null,e!==null&&(Sn[$n++]=Cr,Sn[$n++]=Er,Sn[$n++]=fo,Cr=e.id,Er=e.overflow,fo=t),t=cg(t,r.children),t.flags|=4096,t)}function n2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ep(e.return,t,n)}function I0(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function T3(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Lt(e,t,r.children,n),r=Ye.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&n2(e,n,t);else if(e.tag===19)n2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Le(Ye,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ju(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),I0(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ju(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}I0(t,!0,n,null,o);break;case"together":I0(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Eu(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ar(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),po|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(G(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function WC(e,t,n){switch(t.tag){case 3:$3(t),vs();break;case 5:t3(t);break;case 1:Jt(t.type)&&qu(t);break;case 4:tg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Le(Zu,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Le(Ye,Ye.current&1),t.flags|=128,null):n&t.child.childLanes?P3(e,t,n):(Le(Ye,Ye.current&1),e=Ar(e,t,n),e!==null?e.sibling:null);Le(Ye,Ye.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return T3(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Le(Ye,Ye.current),r)break;return null;case 22:case 23:return t.lanes=0,_3(e,t,n)}return Ar(e,t,n)}var A3,lp,k3,D3;A3=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lp=function(){};k3=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Yi(ar.current);var o=null;switch(n){case"input":i=kh(e,i),r=kh(e,r),o=[];break;case"select":i=et({},i,{value:void 0}),r=et({},r,{value:void 0}),o=[];break;case"textarea":i=Ih(e,i),r=Ih(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Hu)}Rh(n,r);var s;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(al.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var l=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(al.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&We("scroll",e),o||a===l||(o=[])):(o=o||[]).push(c,l))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};D3=function(e,t,n,r){n!==r&&(t.flags|=4)};function wa(e,t){if(!Qe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ot(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function HC(e,t,n){var r=t.pendingProps;switch(K1(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ot(t),null;case 1:return Jt(t.type)&&Vu(),Ot(t),null;case 3:return r=t.stateNode,xs(),Ge(Yt),Ge(Bt),rg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Zc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ln!==null&&(mp(Ln),Ln=null))),lp(e,t),Ot(t),null;case 5:ng(t);var i=Yi(vl.current);if(n=t.type,e!==null&&t.stateNode!=null)k3(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(G(166));return Ot(t),null}if(e=Yi(ar.current),Zc(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ir]=t,r[wl]=o,e=(t.mode&1)!==0,n){case"dialog":We("cancel",r),We("close",r);break;case"iframe":case"object":case"embed":We("load",r);break;case"video":case"audio":for(i=0;i<Ia.length;i++)We(Ia[i],r);break;case"source":We("error",r);break;case"img":case"image":case"link":We("error",r),We("load",r);break;case"details":We("toggle",r);break;case"input":dw(r,o),We("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},We("invalid",r);break;case"textarea":hw(r,o),We("invalid",r)}Rh(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Kc(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Kc(r.textContent,a,e),i=["children",""+a]):al.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&We("scroll",r)}switch(n){case"input":Uc(r),fw(r,o,!0);break;case"textarea":Uc(r),pw(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Hu)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ib(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ir]=t,e[wl]=r,A3(e,t,!1,!1),t.stateNode=e;e:{switch(s=Mh(n,r),n){case"dialog":We("cancel",e),We("close",e),i=r;break;case"iframe":case"object":case"embed":We("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ia.length;i++)We(Ia[i],e);i=r;break;case"source":We("error",e),i=r;break;case"img":case"image":case"link":We("error",e),We("load",e),i=r;break;case"details":We("toggle",e),i=r;break;case"input":dw(e,r),i=kh(e,r),We("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=et({},r,{value:void 0}),We("invalid",e);break;case"textarea":hw(e,r),i=Ih(e,r),We("invalid",e);break;default:i=r}Rh(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?ab(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ob(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ll(e,l):typeof l=="number"&&ll(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(al.hasOwnProperty(o)?l!=null&&o==="onScroll"&&We("scroll",e):l!=null&&I1(e,o,l,s))}switch(n){case"input":Uc(e),fw(e,r,!1);break;case"textarea":Uc(e),pw(e);break;case"option":r.value!=null&&e.setAttribute("value",""+vi(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ls(e,!!r.multiple,o,!1):r.defaultValue!=null&&ls(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Hu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ot(t),null;case 6:if(e&&t.stateNode!=null)D3(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(G(166));if(n=Yi(vl.current),Yi(ar.current),Zc(t)){if(r=t.stateNode,n=t.memoizedProps,r[ir]=t,(o=r.nodeValue!==n)&&(e=un,e!==null))switch(e.tag){case 3:Kc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Kc(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ir]=t,t.stateNode=r}return Ot(t),null;case 13:if(Ge(Ye),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Qe&&ln!==null&&t.mode&1&&!(t.flags&128))Kb(),vs(),t.flags|=98560,o=!1;else if(o=Zc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(G(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(G(317));o[ir]=t}else vs(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ot(t),o=!1}else Ln!==null&&(mp(Ln),Ln=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ye.current&1?gt===0&&(gt=3):gg())),t.updateQueue!==null&&(t.flags|=4),Ot(t),null);case 4:return xs(),lp(e,t),e===null&&gl(t.stateNode.containerInfo),Ot(t),null;case 10:return J1(t.type._context),Ot(t),null;case 17:return Jt(t.type)&&Vu(),Ot(t),null;case 19:if(Ge(Ye),o=t.memoizedState,o===null)return Ot(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)wa(o,!1);else{if(gt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ju(e),s!==null){for(t.flags|=128,wa(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Le(Ye,Ye.current&1|2),t.child}e=e.sibling}o.tail!==null&&ot()>Es&&(t.flags|=128,r=!0,wa(o,!1),t.lanes=4194304)}else{if(!r)if(e=Ju(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),wa(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Qe)return Ot(t),null}else 2*ot()-o.renderingStartTime>Es&&n!==1073741824&&(t.flags|=128,r=!0,wa(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ot(),t.sibling=null,n=Ye.current,Le(Ye,r?n&1|2:n&1),t):(Ot(t),null);case 22:case 23:return pg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?an&1073741824&&(Ot(t),t.subtreeFlags&6&&(t.flags|=8192)):Ot(t),null;case 24:return null;case 25:return null}throw Error(G(156,t.tag))}function VC(e,t){switch(K1(t),t.tag){case 1:return Jt(t.type)&&Vu(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return xs(),Ge(Yt),Ge(Bt),rg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return ng(t),null;case 13:if(Ge(Ye),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(G(340));vs()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ge(Ye),null;case 4:return xs(),null;case 10:return J1(t.type._context),null;case 22:case 23:return pg(),null;case 24:return null;default:return null}}var Jc=!1,Rt=!1,qC=typeof WeakSet=="function"?WeakSet:Set,re=null;function os(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){nt(e,t,r)}else n.current=null}function cp(e,t,n){try{n()}catch(r){nt(e,t,r)}}var r2=!1;function GC(e,t){if(qh=Fu,e=Rb(),q1(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,c=0,u=0,d=e,h=null;t:for(;;){for(var p;d!==n||i!==0&&d.nodeType!==3||(a=s+i),d!==o||r!==0&&d.nodeType!==3||(l=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===e)break t;if(h===n&&++c===i&&(a=s),h===o&&++u===r&&(l=s),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gh={focusedElem:e,selectionRange:n},Fu=!1,re=t;re!==null;)if(t=re,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,re=e;else for(;re!==null;){t=re;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var x=w.memoizedProps,E=w.memoizedState,b=t.stateNode,g=b.getSnapshotBeforeUpdate(t.elementType===t.type?x:Bn(t.type,x),E);b.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(G(163))}}catch(C){nt(t,t.return,C)}if(e=t.sibling,e!==null){e.return=t.return,re=e;break}re=t.return}return w=r2,r2=!1,w}function qa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&cp(t,n,o)}i=i.next}while(i!==r)}}function uf(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function up(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function O3(e){var t=e.alternate;t!==null&&(e.alternate=null,O3(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ir],delete t[wl],delete t[Qh],delete t[AC],delete t[kC])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function I3(e){return e.tag===5||e.tag===3||e.tag===4}function i2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||I3(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function dp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Hu));else if(r!==4&&(e=e.child,e!==null))for(dp(e,t,n),e=e.sibling;e!==null;)dp(e,t,n),e=e.sibling}function fp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(fp(e,t,n),e=e.sibling;e!==null;)fp(e,t,n),e=e.sibling}var Pt=null,jn=!1;function Fr(e,t,n){for(n=n.child;n!==null;)N3(e,t,n),n=n.sibling}function N3(e,t,n){if(sr&&typeof sr.onCommitFiberUnmount=="function")try{sr.onCommitFiberUnmount(tf,n)}catch{}switch(n.tag){case 5:Rt||os(n,t);case 6:var r=Pt,i=jn;Pt=null,Fr(e,t,n),Pt=r,jn=i,Pt!==null&&(jn?(e=Pt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Pt.removeChild(n.stateNode));break;case 18:Pt!==null&&(jn?(e=Pt,n=n.stateNode,e.nodeType===8?$0(e.parentNode,n):e.nodeType===1&&$0(e,n),fl(e)):$0(Pt,n.stateNode));break;case 4:r=Pt,i=jn,Pt=n.stateNode.containerInfo,jn=!0,Fr(e,t,n),Pt=r,jn=i;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&cp(n,t,s),i=i.next}while(i!==r)}Fr(e,t,n);break;case 1:if(!Rt&&(os(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){nt(n,t,a)}Fr(e,t,n);break;case 21:Fr(e,t,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Fr(e,t,n),Rt=r):Fr(e,t,n);break;default:Fr(e,t,n)}}function o2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new qC),t.forEach(function(r){var i=nE.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Rn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,a=s;e:for(;a!==null;){switch(a.tag){case 5:Pt=a.stateNode,jn=!1;break e;case 3:Pt=a.stateNode.containerInfo,jn=!0;break e;case 4:Pt=a.stateNode.containerInfo,jn=!0;break e}a=a.return}if(Pt===null)throw Error(G(160));N3(o,s,i),Pt=null,jn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(c){nt(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)R3(t,e),t=t.sibling}function R3(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Rn(t,e),Yn(e),r&4){try{qa(3,e,e.return),uf(3,e)}catch(x){nt(e,e.return,x)}try{qa(5,e,e.return)}catch(x){nt(e,e.return,x)}}break;case 1:Rn(t,e),Yn(e),r&512&&n!==null&&os(n,n.return);break;case 5:if(Rn(t,e),Yn(e),r&512&&n!==null&&os(n,n.return),e.flags&32){var i=e.stateNode;try{ll(i,"")}catch(x){nt(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,a=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&nb(i,o),Mh(a,s);var c=Mh(a,o);for(s=0;s<l.length;s+=2){var u=l[s],d=l[s+1];u==="style"?ab(i,d):u==="dangerouslySetInnerHTML"?ob(i,d):u==="children"?ll(i,d):I1(i,u,d,c)}switch(a){case"input":Dh(i,o);break;case"textarea":rb(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ls(i,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ls(i,!!o.multiple,o.defaultValue,!0):ls(i,!!o.multiple,o.multiple?[]:"",!1))}i[wl]=o}catch(x){nt(e,e.return,x)}}break;case 6:if(Rn(t,e),Yn(e),r&4){if(e.stateNode===null)throw Error(G(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){nt(e,e.return,x)}}break;case 3:if(Rn(t,e),Yn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{fl(t.containerInfo)}catch(x){nt(e,e.return,x)}break;case 4:Rn(t,e),Yn(e);break;case 13:Rn(t,e),Yn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(fg=ot())),r&4&&o2(e);break;case 22:if(u=n!==null&&n.memoizedState!==null,e.mode&1?(Rt=(c=Rt)||u,Rn(t,e),Rt=c):Rn(t,e),Yn(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!u&&e.mode&1)for(re=e,u=e.child;u!==null;){for(d=re=u;re!==null;){switch(h=re,p=h.child,h.tag){case 0:case 11:case 14:case 15:qa(4,h,h.return);break;case 1:os(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(x){nt(r,n,x)}}break;case 5:os(h,h.return);break;case 22:if(h.memoizedState!==null){a2(d);continue}}p!==null?(p.return=h,re=p):a2(d)}u=u.sibling}e:for(u=null,d=e;;){if(d.tag===5){if(u===null){u=d;try{i=d.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=d.stateNode,l=d.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=sb("display",s))}catch(x){nt(e,e.return,x)}}}else if(d.tag===6){if(u===null)try{d.stateNode.nodeValue=c?"":d.memoizedProps}catch(x){nt(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;u===d&&(u=null),d=d.return}u===d&&(u=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Rn(t,e),Yn(e),r&4&&o2(e);break;case 21:break;default:Rn(t,e),Yn(e)}}function Yn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(I3(n)){var r=n;break e}n=n.return}throw Error(G(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ll(i,""),r.flags&=-33);var o=i2(e);fp(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=i2(e);dp(e,a,s);break;default:throw Error(G(161))}}catch(l){nt(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function KC(e,t,n){re=e,M3(e)}function M3(e,t,n){for(var r=(e.mode&1)!==0;re!==null;){var i=re,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Jc;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Rt;a=Jc;var c=Rt;if(Jc=s,(Rt=l)&&!c)for(re=i;re!==null;)s=re,l=s.child,s.tag===22&&s.memoizedState!==null?l2(i):l!==null?(l.return=s,re=l):l2(i);for(;o!==null;)re=o,M3(o),o=o.sibling;re=i,Jc=a,Rt=c}s2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,re=o):s2(e)}}function s2(e){for(;re!==null;){var t=re;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rt||uf(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Bn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&Ww(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ww(t,s,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var d=u.dehydrated;d!==null&&fl(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(G(163))}Rt||t.flags&512&&up(t)}catch(h){nt(t,t.return,h)}}if(t===e){re=null;break}if(n=t.sibling,n!==null){n.return=t.return,re=n;break}re=t.return}}function a2(e){for(;re!==null;){var t=re;if(t===e){re=null;break}var n=t.sibling;if(n!==null){n.return=t.return,re=n;break}re=t.return}}function l2(e){for(;re!==null;){var t=re;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{uf(4,t)}catch(l){nt(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(l){nt(t,i,l)}}var o=t.return;try{up(t)}catch(l){nt(t,o,l)}break;case 5:var s=t.return;try{up(t)}catch(l){nt(t,s,l)}}}catch(l){nt(t,t.return,l)}if(t===e){re=null;break}var a=t.sibling;if(a!==null){a.return=t.return,re=a;break}re=t.return}}var ZC=Math.ceil,td=Rr.ReactCurrentDispatcher,ug=Rr.ReactCurrentOwner,Tn=Rr.ReactCurrentBatchConfig,Pe=0,St=null,ct=null,Tt=0,an=0,ss=ki(0),gt=0,El=null,po=0,df=0,dg=0,Ga=null,Gt=null,fg=0,Es=1/0,vr=null,nd=!1,hp=null,ci=null,Xc=!1,ti=null,rd=0,Ka=0,pp=null,_u=-1,Su=0;function Ft(){return Pe&6?ot():_u!==-1?_u:_u=ot()}function ui(e){return e.mode&1?Pe&2&&Tt!==0?Tt&-Tt:OC.transition!==null?(Su===0&&(Su=vb()),Su):(e=De,e!==0||(e=window.event,e=e===void 0?16:$b(e.type)),e):1}function Hn(e,t,n,r){if(50<Ka)throw Ka=0,pp=null,Error(G(185));dc(e,n,r),(!(Pe&2)||e!==St)&&(e===St&&(!(Pe&2)&&(df|=n),gt===4&&Qr(e,Tt)),Xt(e,r),n===1&&Pe===0&&!(t.mode&1)&&(Es=ot()+500,af&&Di()))}function Xt(e,t){var n=e.callbackNode;Ox(e,t);var r=Uu(e,e===St?Tt:0);if(r===0)n!==null&&ww(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&ww(n),t===1)e.tag===0?DC(c2.bind(null,e)):Vb(c2.bind(null,e)),PC(function(){!(Pe&6)&&Di()}),n=null;else{switch(bb(r)){case 1:n=j1;break;case 4:n=wb;break;case 16:n=Lu;break;case 536870912:n=yb;break;default:n=Lu}n=H3(n,B3.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function B3(e,t){if(_u=-1,Su=0,Pe&6)throw Error(G(327));var n=e.callbackNode;if(hs()&&e.callbackNode!==n)return null;var r=Uu(e,e===St?Tt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=id(e,r);else{t=r;var i=Pe;Pe|=2;var o=L3();(St!==e||Tt!==t)&&(vr=null,Es=ot()+500,io(e,t));do try{JC();break}catch(a){j3(e,a)}while(1);Y1(),td.current=o,Pe=i,ct!==null?t=0:(St=null,Tt=0,t=gt)}if(t!==0){if(t===2&&(i=Fh(e),i!==0&&(r=i,t=gp(e,i))),t===1)throw n=El,io(e,0),Qr(e,r),Xt(e,ot()),n;if(t===6)Qr(e,r);else{if(i=e.current.alternate,!(r&30)&&!QC(i)&&(t=id(e,r),t===2&&(o=Fh(e),o!==0&&(r=o,t=gp(e,o))),t===1))throw n=El,io(e,0),Qr(e,r),Xt(e,ot()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(G(345));case 2:qi(e,Gt,vr);break;case 3:if(Qr(e,r),(r&130023424)===r&&(t=fg+500-ot(),10<t)){if(Uu(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Ft(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Zh(qi.bind(null,e,Gt,vr),t);break}qi(e,Gt,vr);break;case 4:if(Qr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-Wn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*ZC(r/1960))-r,10<r){e.timeoutHandle=Zh(qi.bind(null,e,Gt,vr),r);break}qi(e,Gt,vr);break;case 5:qi(e,Gt,vr);break;default:throw Error(G(329))}}}return Xt(e,ot()),e.callbackNode===n?B3.bind(null,e):null}function gp(e,t){var n=Ga;return e.current.memoizedState.isDehydrated&&(io(e,t).flags|=256),e=id(e,t),e!==2&&(t=Gt,Gt=n,t!==null&&mp(t)),e}function mp(e){Gt===null?Gt=e:Gt.push.apply(Gt,e)}function QC(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!qn(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Qr(e,t){for(t&=~dg,t&=~df,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Wn(t),r=1<<n;e[n]=-1,t&=~r}}function c2(e){if(Pe&6)throw Error(G(327));hs();var t=Uu(e,0);if(!(t&1))return Xt(e,ot()),null;var n=id(e,t);if(e.tag!==0&&n===2){var r=Fh(e);r!==0&&(t=r,n=gp(e,r))}if(n===1)throw n=El,io(e,0),Qr(e,t),Xt(e,ot()),n;if(n===6)throw Error(G(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,qi(e,Gt,vr),Xt(e,ot()),null}function hg(e,t){var n=Pe;Pe|=1;try{return e(t)}finally{Pe=n,Pe===0&&(Es=ot()+500,af&&Di())}}function go(e){ti!==null&&ti.tag===0&&!(Pe&6)&&hs();var t=Pe;Pe|=1;var n=Tn.transition,r=De;try{if(Tn.transition=null,De=1,e)return e()}finally{De=r,Tn.transition=n,Pe=t,!(Pe&6)&&Di()}}function pg(){an=ss.current,Ge(ss)}function io(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,$C(n)),ct!==null)for(n=ct.return;n!==null;){var r=n;switch(K1(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Vu();break;case 3:xs(),Ge(Yt),Ge(Bt),rg();break;case 5:ng(r);break;case 4:xs();break;case 13:Ge(Ye);break;case 19:Ge(Ye);break;case 10:J1(r.type._context);break;case 22:case 23:pg()}n=n.return}if(St=e,ct=e=di(e.current,null),Tt=an=t,gt=0,El=null,dg=df=po=0,Gt=Ga=null,Qi!==null){for(t=0;t<Qi.length;t++)if(n=Qi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}Qi=null}return e}function j3(e,t){do{var n=ct;try{if(Y1(),xu.current=ed,Xu){for(var r=Xe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Xu=!1}if(ho=0,Ct=ht=Xe=null,Va=!1,bl=0,ug.current=null,n===null||n.return===null){gt=1,El=t,ct=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=Tt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,d=u.tag;if(!(u.mode&1)&&(d===0||d===11||d===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=Qw(s);if(p!==null){p.flags&=-257,Yw(p,s,a,o,t),p.mode&1&&Zw(o,c,t),t=p,l=c;var w=t.updateQueue;if(w===null){var x=new Set;x.add(l),t.updateQueue=x}else w.add(l);break e}else{if(!(t&1)){Zw(o,c,t),gg();break e}l=Error(G(426))}}else if(Qe&&a.mode&1){var E=Qw(s);if(E!==null){!(E.flags&65536)&&(E.flags|=256),Yw(E,s,a,o,t),Z1(Cs(l,a));break e}}o=l=Cs(l,a),gt!==4&&(gt=2),Ga===null?Ga=[o]:Ga.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var b=x3(o,l,t);zw(o,b);break e;case 1:a=l;var g=o.type,v=o.stateNode;if(!(o.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ci===null||!ci.has(v)))){o.flags|=65536,t&=-t,o.lanes|=t;var C=C3(o,a,t);zw(o,C);break e}}o=o.return}while(o!==null)}F3(n)}catch(_){t=_,ct===n&&n!==null&&(ct=n=n.return);continue}break}while(1)}function L3(){var e=td.current;return td.current=ed,e===null?ed:e}function gg(){(gt===0||gt===3||gt===2)&&(gt=4),St===null||!(po&268435455)&&!(df&268435455)||Qr(St,Tt)}function id(e,t){var n=Pe;Pe|=2;var r=L3();(St!==e||Tt!==t)&&(vr=null,io(e,t));do try{YC();break}catch(i){j3(e,i)}while(1);if(Y1(),Pe=n,td.current=r,ct!==null)throw Error(G(261));return St=null,Tt=0,gt}function YC(){for(;ct!==null;)U3(ct)}function JC(){for(;ct!==null&&!Ex();)U3(ct)}function U3(e){var t=W3(e.alternate,e,an);e.memoizedProps=e.pendingProps,t===null?F3(e):ct=t,ug.current=null}function F3(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=VC(n,t),n!==null){n.flags&=32767,ct=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{gt=6,ct=null;return}}else if(n=HC(n,t,an),n!==null){ct=n;return}if(t=t.sibling,t!==null){ct=t;return}ct=t=e}while(t!==null);gt===0&&(gt=5)}function qi(e,t,n){var r=De,i=Tn.transition;try{Tn.transition=null,De=1,XC(e,t,n,r)}finally{Tn.transition=i,De=r}return null}function XC(e,t,n,r){do hs();while(ti!==null);if(Pe&6)throw Error(G(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(G(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Ix(e,o),e===St&&(ct=St=null,Tt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Xc||(Xc=!0,H3(Lu,function(){return hs(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Tn.transition,Tn.transition=null;var s=De;De=1;var a=Pe;Pe|=4,ug.current=null,GC(e,n),R3(n,e),vC(Gh),Fu=!!qh,Gh=qh=null,e.current=n,KC(n),_x(),Pe=a,De=s,Tn.transition=o}else e.current=n;if(Xc&&(Xc=!1,ti=e,rd=i),o=e.pendingLanes,o===0&&(ci=null),Px(n.stateNode),Xt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(nd)throw nd=!1,e=hp,hp=null,e;return rd&1&&e.tag!==0&&hs(),o=e.pendingLanes,o&1?e===pp?Ka++:(Ka=0,pp=e):Ka=0,Di(),null}function hs(){if(ti!==null){var e=bb(rd),t=Tn.transition,n=De;try{if(Tn.transition=null,De=16>e?16:e,ti===null)var r=!1;else{if(e=ti,ti=null,rd=0,Pe&6)throw Error(G(331));var i=Pe;for(Pe|=4,re=e.current;re!==null;){var o=re,s=o.child;if(re.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(re=c;re!==null;){var u=re;switch(u.tag){case 0:case 11:case 15:qa(8,u,o)}var d=u.child;if(d!==null)d.return=u,re=d;else for(;re!==null;){u=re;var h=u.sibling,p=u.return;if(O3(u),u===c){re=null;break}if(h!==null){h.return=p,re=h;break}re=p}}}var w=o.alternate;if(w!==null){var x=w.child;if(x!==null){w.child=null;do{var E=x.sibling;x.sibling=null,x=E}while(x!==null)}}re=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,re=s;else e:for(;re!==null;){if(o=re,o.flags&2048)switch(o.tag){case 0:case 11:case 15:qa(9,o,o.return)}var b=o.sibling;if(b!==null){b.return=o.return,re=b;break e}re=o.return}}var g=e.current;for(re=g;re!==null;){s=re;var v=s.child;if(s.subtreeFlags&2064&&v!==null)v.return=s,re=v;else e:for(s=g;re!==null;){if(a=re,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:uf(9,a)}}catch(_){nt(a,a.return,_)}if(a===s){re=null;break e}var C=a.sibling;if(C!==null){C.return=a.return,re=C;break e}re=a.return}}if(Pe=i,Di(),sr&&typeof sr.onPostCommitFiberRoot=="function")try{sr.onPostCommitFiberRoot(tf,e)}catch{}r=!0}return r}finally{De=n,Tn.transition=t}}return!1}function u2(e,t,n){t=Cs(n,t),t=x3(e,t,1),e=li(e,t,1),t=Ft(),e!==null&&(dc(e,1,t),Xt(e,t))}function nt(e,t,n){if(e.tag===3)u2(e,e,n);else for(;t!==null;){if(t.tag===3){u2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ci===null||!ci.has(r))){e=Cs(n,e),e=C3(t,e,1),t=li(t,e,1),e=Ft(),t!==null&&(dc(t,1,e),Xt(t,e));break}}t=t.return}}function eE(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ft(),e.pingedLanes|=e.suspendedLanes&n,St===e&&(Tt&n)===n&&(gt===4||gt===3&&(Tt&130023424)===Tt&&500>ot()-fg?io(e,0):dg|=n),Xt(e,t)}function z3(e,t){t===0&&(e.mode&1?(t=Wc,Wc<<=1,!(Wc&130023424)&&(Wc=4194304)):t=1);var n=Ft();e=Tr(e,t),e!==null&&(dc(e,t,n),Xt(e,n))}function tE(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),z3(e,n)}function nE(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(G(314))}r!==null&&r.delete(t),z3(e,n)}var W3;W3=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Yt.current)Kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Kt=!1,WC(e,t,n);Kt=!!(e.flags&131072)}else Kt=!1,Qe&&t.flags&1048576&&qb(t,Ku,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Eu(e,t),e=t.pendingProps;var i=ys(t,Bt.current);fs(t,n),i=og(null,t,r,e,i,n);var o=sg();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Jt(r)?(o=!0,qu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,eg(t),i.updater=lf,t.stateNode=i,i._reactInternals=t,np(t,r,e,n),t=op(null,t,r,!0,o,n)):(t.tag=0,Qe&&o&&G1(t),Lt(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Eu(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=iE(r),e=Bn(r,e),i){case 0:t=ip(null,t,r,e,n);break e;case 1:t=e2(null,t,r,e,n);break e;case 11:t=Jw(null,t,r,e,n);break e;case 14:t=Xw(null,t,r,Bn(r.type,e),n);break e}throw Error(G(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bn(r,i),ip(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bn(r,i),e2(e,t,r,i,n);case 3:e:{if($3(t),e===null)throw Error(G(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Qb(e,t),Yu(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Cs(Error(G(423)),t),t=t2(e,t,r,n,i);break e}else if(r!==i){i=Cs(Error(G(424)),t),t=t2(e,t,r,n,i);break e}else for(ln=ai(t.stateNode.containerInfo.firstChild),un=t,Qe=!0,Ln=null,n=e3(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(vs(),r===i){t=Ar(e,t,n);break e}Lt(e,t,r,n)}t=t.child}return t;case 5:return t3(t),e===null&&Xh(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Kh(r,i)?s=null:o!==null&&Kh(r,o)&&(t.flags|=32),S3(e,t),Lt(e,t,s,n),t.child;case 6:return e===null&&Xh(t),null;case 13:return P3(e,t,n);case 4:return tg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=bs(t,null,r,n):Lt(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bn(r,i),Jw(e,t,r,i,n);case 7:return Lt(e,t,t.pendingProps,n),t.child;case 8:return Lt(e,t,t.pendingProps.children,n),t.child;case 12:return Lt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Le(Zu,r._currentValue),r._currentValue=s,o!==null)if(qn(o.value,s)){if(o.children===i.children&&!Yt.current){t=Ar(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=_r(-1,n&-n),l.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),ep(o.return,n,t),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(G(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),ep(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Lt(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,fs(t,n),i=An(i),r=r(i),t.flags|=1,Lt(e,t,r,n),t.child;case 14:return r=t.type,i=Bn(r,t.pendingProps),i=Bn(r.type,i),Xw(e,t,r,i,n);case 15:return E3(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Bn(r,i),Eu(e,t),t.tag=1,Jt(r)?(e=!0,qu(t)):e=!1,fs(t,n),Jb(t,r,i),np(t,r,i,n),op(null,t,r,!0,e,n);case 19:return T3(e,t,n);case 22:return _3(e,t,n)}throw Error(G(156,t.tag))};function H3(e,t){return mb(e,t)}function rE(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(e,t,n,r){return new rE(e,t,n,r)}function mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function iE(e){if(typeof e=="function")return mg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===R1)return 11;if(e===M1)return 14}return 2}function di(e,t){var n=e.alternate;return n===null?(n=Pn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function $u(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")mg(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Qo:return oo(n.children,i,o,t);case N1:s=8,i|=8;break;case $h:return e=Pn(12,n,t,i|2),e.elementType=$h,e.lanes=o,e;case Ph:return e=Pn(13,n,t,i),e.elementType=Ph,e.lanes=o,e;case Th:return e=Pn(19,n,t,i),e.elementType=Th,e.lanes=o,e;case Xv:return ff(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Yv:s=10;break e;case Jv:s=9;break e;case R1:s=11;break e;case M1:s=14;break e;case Vr:s=16,r=null;break e}throw Error(G(130,e==null?e:typeof e,""))}return t=Pn(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function oo(e,t,n,r){return e=Pn(7,e,r,t),e.lanes=n,e}function ff(e,t,n,r){return e=Pn(22,e,r,t),e.elementType=Xv,e.lanes=n,e.stateNode={isHidden:!1},e}function N0(e,t,n){return e=Pn(6,e,null,t),e.lanes=n,e}function R0(e,t,n){return t=Pn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function oE(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=g0(0),this.expirationTimes=g0(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=g0(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wg(e,t,n,r,i,o,s,a,l){return e=new oE(e,t,n,a,l),t===1?(t=1,o===!0&&(t|=8)):t=0,o=Pn(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eg(o),e}function sE(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function V3(e){if(!e)return bi;e=e._reactInternals;e:{if(Ao(e)!==e||e.tag!==1)throw Error(G(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Jt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(G(171))}if(e.tag===1){var n=e.type;if(Jt(n))return Hb(e,n,t)}return t}function q3(e,t,n,r,i,o,s,a,l){return e=wg(n,r,!0,e,i,o,s,a,l),e.context=V3(null),n=e.current,r=Ft(),i=ui(n),o=_r(r,i),o.callback=t??null,li(n,o,i),e.current.lanes=i,dc(e,i,r),Xt(e,r),e}function hf(e,t,n,r){var i=t.current,o=Ft(),s=ui(i);return n=V3(n),t.context===null?t.context=n:t.pendingContext=n,t=_r(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=li(i,t,s),e!==null&&(Hn(e,i,s,o),bu(e,i,s)),s}function od(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function d2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function yg(e,t){d2(e,t),(e=e.alternate)&&d2(e,t)}function aE(){return null}var G3=typeof reportError=="function"?reportError:function(e){console.error(e)};function vg(e){this._internalRoot=e}pf.prototype.render=vg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(G(409));hf(e,t,null,null)};pf.prototype.unmount=vg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;go(function(){hf(null,e,null,null)}),t[Pr]=null}};function pf(e){this._internalRoot=e}pf.prototype.unstable_scheduleHydration=function(e){if(e){var t=Eb();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zr.length&&t!==0&&t<Zr[n].priority;n++);Zr.splice(n,0,e),n===0&&Sb(e)}};function bg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gf(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function f2(){}function lE(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=od(s);o.call(c)}}var s=q3(t,r,e,0,null,!1,!1,"",f2);return e._reactRootContainer=s,e[Pr]=s.current,gl(e.nodeType===8?e.parentNode:e),go(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=od(l);a.call(c)}}var l=wg(e,0,!1,null,null,!1,!1,"",f2);return e._reactRootContainer=l,e[Pr]=l.current,gl(e.nodeType===8?e.parentNode:e),go(function(){hf(t,l,n,r)}),l}function mf(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=od(s);a.call(l)}}hf(t,s,e,i)}else s=lE(n,t,e,i,r);return od(s)}xb=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Oa(t.pendingLanes);n!==0&&(L1(t,n|1),Xt(t,ot()),!(Pe&6)&&(Es=ot()+500,Di()))}break;case 13:go(function(){var r=Tr(e,1);if(r!==null){var i=Ft();Hn(r,e,1,i)}}),yg(e,1)}};U1=function(e){if(e.tag===13){var t=Tr(e,134217728);if(t!==null){var n=Ft();Hn(t,e,134217728,n)}yg(e,134217728)}};Cb=function(e){if(e.tag===13){var t=ui(e),n=Tr(e,t);if(n!==null){var r=Ft();Hn(n,e,t,r)}yg(e,t)}};Eb=function(){return De};_b=function(e,t){var n=De;try{return De=e,t()}finally{De=n}};jh=function(e,t,n){switch(t){case"input":if(Dh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=sf(r);if(!i)throw Error(G(90));tb(r),Dh(r,i)}}}break;case"textarea":rb(e,n);break;case"select":t=n.value,t!=null&&ls(e,!!n.multiple,t,!1)}};ub=hg;db=go;var cE={usingClientEntryPoint:!1,Events:[hc,es,sf,lb,cb,hg]},ya={findFiberByHostInstance:Zi,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},uE={bundleType:ya.bundleType,version:ya.version,rendererPackageName:ya.rendererPackageName,rendererConfig:ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pb(e),e===null?null:e.stateNode},findFiberByHostInstance:ya.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var eu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!eu.isDisabled&&eu.supportsFiber)try{tf=eu.inject(uE),sr=eu}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cE;hn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bg(t))throw Error(G(200));return sE(e,t,null,n)};hn.createRoot=function(e,t){if(!bg(e))throw Error(G(299));var n=!1,r="",i=G3;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=wg(e,1,!1,null,null,n,!1,r,i),e[Pr]=t.current,gl(e.nodeType===8?e.parentNode:e),new vg(t)};hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(G(188)):(e=Object.keys(e).join(","),Error(G(268,e)));return e=pb(t),e=e===null?null:e.stateNode,e};hn.flushSync=function(e){return go(e)};hn.hydrate=function(e,t,n){if(!gf(t))throw Error(G(200));return mf(null,e,t,!0,n)};hn.hydrateRoot=function(e,t,n){if(!bg(e))throw Error(G(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=G3;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=q3(t,null,e,1,n??null,i,!1,o,s),e[Pr]=t.current,gl(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new pf(t)};hn.render=function(e,t,n){if(!gf(t))throw Error(G(200));return mf(null,e,t,!1,n)};hn.unmountComponentAtNode=function(e){if(!gf(e))throw Error(G(40));return e._reactRootContainer?(go(function(){mf(null,null,e,!1,function(){e._reactRootContainer=null,e[Pr]=null})}),!0):!1};hn.unstable_batchedUpdates=hg;hn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!gf(n))throw Error(G(200));if(e==null||e._reactInternals===void 0)throw Error(G(38));return mf(e,t,n,!1,r)};hn.version="18.2.0-next-9e3b772b8-20220608";function K3(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(K3)}catch(e){console.error(e)}}K3(),qv.exports=hn;var dE=qv.exports,h2=dE;_h.createRoot=h2.createRoot,_h.hydrateRoot=h2.hydrateRoot;const fE="1.17.1",hE=e=>e,wf=e=>e,pE=()=>`viem@${fE}`;class X extends Error{constructor(t,n={}){var o;super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:pE()});const r=n.cause instanceof X?n.cause.details:(o=n.cause)!=null&&o.message?n.cause.message:n.details,i=n.cause instanceof X&&n.cause.docsPath||n.docsPath;this.message=[t||"An error occurred.","",...n.metaMessages?[...n.metaMessages,""]:[],...i?[`Docs: https://viem.sh${i}.html${n.docsSlug?`#${n.docsSlug}`:""}`]:[],...r?[`Details: ${r}`]:[],`Version: ${this.version}`].join(`
`),n.cause&&(this.cause=n.cause),this.details=r,this.docsPath=i,this.metaMessages=n.metaMessages,this.shortMessage=t}walk(t){return Z3(this,t)}}function Z3(e,t){return t!=null&&t(e)?e:e&&typeof e=="object"&&"cause"in e?Z3(e.cause,t):t?null:e}class wp extends X{constructor({blockNumber:t,chain:n,contract:r}){super(`Chain "${n.name}" does not support contract "${r.name}".`,{metaMessages:["This could be due to any of the following:",...t&&r.blockCreated&&r.blockCreated>t?[`- The contract "${r.name}" was not deployed until block ${r.blockCreated} (current block ${t}).`]:[`- The chain does not have the contract "${r.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}}class gE extends X{constructor({chain:t,currentChainId:n}){super(`The current chain of the wallet (id: ${n}) does not match the target chain for the transaction (id: ${t.id} – ${t.name}).`,{metaMessages:[`Current Chain ID:  ${n}`,`Expected Chain ID: ${t.id} – ${t.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}}class mE extends X{constructor(){super(["No chain was provided to the request.","Please provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}}class Q3 extends X{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}}function Y3({chain:e,currentChainId:t}){if(!e)throw new mE;if(t!==e.id)throw new gE({chain:e,currentChainId:t})}function xg(e,t={}){const{fees:n=e.fees,formatters:r=e.formatters,serializers:i=e.serializers}=t;return{...e,fees:n,formatters:r,serializers:i}}function Zs({blockNumber:e,chain:t,contract:n}){var i;const r=(i=t==null?void 0:t.contracts)==null?void 0:i[n];if(!r)throw new wp({chain:t,contract:{name:n}});if(e&&r.blockCreated&&r.blockCreated>e)throw new wp({blockNumber:e,chain:t,contract:{name:n,blockCreated:r.blockCreated}});return r.address}class wE extends X{constructor({max:t,min:n,signed:r,size:i,value:o}){super(`Number "${o}" is not in safe ${i?`${i*8}-bit ${r?"signed":"unsigned"} `:""}integer range ${t?`(${n} to ${t})`:`(above ${n})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}}class yE extends X{constructor(t){super(`Hex value "${t}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}}class vE extends X{constructor({givenSize:t,maxSize:n}){super(`Size cannot exceed ${n} bytes. Given size: ${t} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}function lr(e,{strict:t=!0}={}){return!e||typeof e!="string"?!1:t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x")}function mt(e){return lr(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}function so(e,{dir:t="left"}={}){let n=typeof e=="string"?e.replace("0x",""):e,r=0;for(let i=0;i<n.length-1&&n[t==="left"?i:n.length-i-1].toString()==="0";i++)r++;return n=t==="left"?n.slice(r):n.slice(0,n.length-r),typeof e=="string"?(n.length===1&&t==="right"&&(n=`${n}0`),`0x${n.length%2===1?`0${n}`:n}`):n}class J3 extends X{constructor({offset:t,position:n,size:r}){super(`Slice ${n==="start"?"starting":"ending"} at offset "${t}" is out-of-bounds (size: ${r}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}}class X3 extends X{constructor({size:t,targetSize:n,type:r}){super(`${r.charAt(0).toUpperCase()}${r.slice(1).toLowerCase()} size (${t}) exceeds padding size (${n}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}function Qs(e,{dir:t,size:n=32}={}){return typeof e=="string"?fi(e,{dir:t,size:n}):bE(e,{dir:t,size:n})}function fi(e,{dir:t,size:n=32}={}){if(n===null)return e;const r=e.replace("0x","");if(r.length>n*2)throw new X3({size:Math.ceil(r.length/2),targetSize:n,type:"hex"});return`0x${r[t==="right"?"padEnd":"padStart"](n*2,"0")}`}function bE(e,{dir:t,size:n=32}={}){if(n===null)return e;if(e.length>n)throw new X3({size:e.length,targetSize:n,type:"bytes"});const r=new Uint8Array(n);for(let i=0;i<n;i++){const o=t==="right";r[o?i:n-i-1]=e[o?i:e.length-i-1]}return r}const xE=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function Mr(e,t={}){return typeof e=="number"||typeof e=="bigint"?ge(e,t):typeof e=="string"?Cg(e,t):typeof e=="boolean"?e5(e,t):_l(e,t)}function e5(e,t={}){const n=`0x${Number(e)}`;return typeof t.size=="number"?(Oi(n,{size:t.size}),Qs(n,{size:t.size})):n}function _l(e,t={}){let n="";for(let i=0;i<e.length;i++)n+=xE[e[i]];const r=`0x${n}`;return typeof t.size=="number"?(Oi(r,{size:t.size}),Qs(r,{dir:"right",size:t.size})):r}function ge(e,t={}){const{signed:n,size:r}=t,i=BigInt(e);let o;r?n?o=(1n<<BigInt(r)*8n-1n)-1n:o=2n**(BigInt(r)*8n)-1n:typeof e=="number"&&(o=BigInt(Number.MAX_SAFE_INTEGER));const s=typeof o=="bigint"&&n?-o-1n:0;if(o&&i>o||i<s){const l=typeof e=="bigint"?"n":"";throw new wE({max:o?`${o}${l}`:void 0,min:`${s}${l}`,signed:n,size:r,value:`${e}${l}`})}const a=`0x${(n&&i<0?(1n<<BigInt(r*8))+BigInt(i):i).toString(16)}`;return r?Qs(a,{size:r}):a}const CE=new TextEncoder;function Cg(e,t={}){const n=CE.encode(e);return _l(n,t)}const EE=new TextEncoder;function xi(e,t={}){return typeof e=="number"||typeof e=="bigint"?SE(e,t):typeof e=="boolean"?_E(e,t):lr(e)?Eg(e,t):Sr(e,t)}function _E(e,t={}){const n=new Uint8Array(1);return n[0]=Number(e),typeof t.size=="number"?(Oi(n,{size:t.size}),Qs(n,{size:t.size})):n}const mr={zero:48,nine:57,A:65,F:70,a:97,f:102};function p2(e){if(e>=mr.zero&&e<=mr.nine)return e-mr.zero;if(e>=mr.A&&e<=mr.F)return e-(mr.A-10);if(e>=mr.a&&e<=mr.f)return e-(mr.a-10)}function Eg(e,t={}){let n=e;t.size&&(Oi(n,{size:t.size}),n=Qs(n,{dir:"right",size:t.size}));let r=n.slice(2);r.length%2&&(r=`0${r}`);const i=r.length/2,o=new Uint8Array(i);for(let s=0,a=0;s<i;s++){const l=p2(r.charCodeAt(a++)),c=p2(r.charCodeAt(a++));if(l===void 0||c===void 0)throw new X(`Invalid byte sequence ("${r[a-2]}${r[a-1]}" in "${r}").`);o[s]=l*16+c}return o}function SE(e,t){const n=ge(e,t);return Eg(n)}function Sr(e,t={}){const n=EE.encode(e);return typeof t.size=="number"?(Oi(n,{size:t.size}),Qs(n,{dir:"right",size:t.size})):n}function Oi(e,{size:t}){if(mt(e)>t)throw new vE({givenSize:mt(e),maxSize:t})}function xr(e,t={}){const{signed:n}=t;t.size&&Oi(e,{size:t.size});const r=BigInt(e);if(!n)return r;const i=(e.length-2)/2,o=(1n<<BigInt(i)*8n-1n)-1n;return r<=o?r:r-BigInt(`0x${"f".padStart(i*2,"f")}`)-1n}function $E(e,t={}){let n=e;if(t.size&&(Oi(n,{size:t.size}),n=so(n)),so(n)==="0x00")return!1;if(so(n)==="0x01")return!0;throw new yE(n)}function Mt(e,t={}){return Number(xr(e,t))}function t5(e,t={}){let n=Eg(e);return t.size&&(Oi(n,{size:t.size}),n=so(n,{dir:"right"})),new TextDecoder().decode(n)}function _g(e,t){return({exclude:n,format:r})=>({exclude:n,format:i=>{const o=t(i);if(n)for(const s of n)delete o[s];return{...o,...r(i)}},type:e})}const n5={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function yf(e){const t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?Mt(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?Mt(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?n5[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return t.type==="legacy"&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t.type==="eip2930"&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}const PE=_g("transaction",yf);function Sg(e){var n;const t=(n=e.transactions)==null?void 0:n.map(r=>typeof r=="string"?r:yf(r));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}const TE=_g("block",Sg);function Gn(e,{args:t,eventName:n}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...n?{args:t,eventName:n}:{}}}const AE={"0x0":"reverted","0x1":"success"};function r5(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(t=>Gn(t)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Mt(e.transactionIndex):null,status:e.status?AE[e.status]:null,type:e.type?n5[e.type]||e.type:null}}const kE=_g("transactionReceipt",r5),DE={block:TE({format(e){var n;return{transactions:(n=e.transactions)==null?void 0:n.map(r=>{if(typeof r=="string")return r;const i=yf(r);return i.typeHex==="0x7e"&&(i.isSystemTx=r.isSystemTx,i.mint=r.mint?xr(r.mint):void 0,i.sourceHash=r.sourceHash,i.type="deposit"),i}),stateRoot:e.stateRoot}}}),transaction:PE({format(e){const t={};return e.type==="0x7e"&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?xr(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:kE({format(e){return{l1GasPrice:e.l1GasPrice?xr(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?xr(e.l1GasUsed):null,l1Fee:e.l1Fee?xr(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null}}})},OE=xg({id:8453,network:"base",name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://base-mainnet.g.alchemy.com/v2"],webSocket:["wss://base-mainnet.g.alchemy.com/v2"]},infura:{http:["https://base-mainnet.infura.io/v3"],webSocket:["wss://base-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{blockscout:{name:"Basescout",url:"https://base.blockscout.com"},default:{name:"Basescan",url:"https://basescan.org"},etherscan:{name:"Basescan",url:"https://basescan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022}}},{formatters:DE}),IE={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function vf(e){return{...e,gas:typeof e.gas<"u"?ge(e.gas):void 0,gasPrice:typeof e.gasPrice<"u"?ge(e.gasPrice):void 0,maxFeePerGas:typeof e.maxFeePerGas<"u"?ge(e.maxFeePerGas):void 0,maxPriorityFeePerGas:typeof e.maxPriorityFeePerGas<"u"?ge(e.maxPriorityFeePerGas):void 0,nonce:typeof e.nonce<"u"?ge(e.nonce):void 0,type:typeof e.type<"u"?IE[e.type]:void 0,value:typeof e.value<"u"?ge(e.value):void 0}}class Sl extends X{constructor({address:t}){super(`Address "${t}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}const i5={gwei:9,wei:18},NE={ether:-9,wei:9},RE={ether:-18,gwei:-9};function sd(e,t){let n=e.toString();const r=n.startsWith("-");r&&(n=n.slice(1)),n=n.padStart(t,"0");let[i,o]=[n.slice(0,n.length-t),n.slice(n.length-t)];return o=o.replace(/(0+)$/,""),`${r?"-":""}${i||"0"}${o?`.${o}`:""}`}function en(e,t="wei"){return sd(e,NE[t])}class as extends X{constructor({cause:t,message:n}={}){var i;const r=(i=n==null?void 0:n.replace("execution reverted: ",""))==null?void 0:i.replace("execution reverted","");super(`Execution reverted ${r?`with reason: ${r}`:"for an unknown reason"}.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}}Object.defineProperty(as,"code",{enumerable:!0,configurable:!0,writable:!0,value:3});Object.defineProperty(as,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});class ad extends X{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${en(n)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}}Object.defineProperty(ad,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});class yp extends X{constructor({cause:t,maxFeePerGas:n}={}){super(`The fee cap (\`maxFeePerGas\`${n?` = ${en(n)}`:""} gwei) cannot be lower than the block base fee.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}}Object.defineProperty(yp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});class vp extends X{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}is higher than the next one expected.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}}Object.defineProperty(vp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});class bp extends X{constructor({cause:t,nonce:n}={}){super([`Nonce provided for the transaction ${n?`(${n}) `:""}is lower than the current nonce of the account.`,"Try increasing the nonce or find the latest nonce with `getTransactionCount`."].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}}Object.defineProperty(bp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});class xp extends X{constructor({cause:t,nonce:n}={}){super(`Nonce provided for the transaction ${n?`(${n}) `:""}exceeds the maximum allowed nonce.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}}Object.defineProperty(xp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});class Cp extends X{constructor({cause:t}={}){super(["The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account."].join(`
`),{cause:t,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}}Object.defineProperty(Cp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});class Ep extends X{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}}Object.defineProperty(Ep,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});class _p extends X{constructor({cause:t,gas:n}={}){super(`The amount of gas ${n?`(${n}) `:""}provided for the transaction is too low.`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}}Object.defineProperty(_p,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});class Sp extends X{constructor({cause:t}){super("The transaction type is not supported for this chain.",{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}}Object.defineProperty(Sp,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});class ld extends X{constructor({cause:t,maxPriorityFeePerGas:n,maxFeePerGas:r}={}){super([`The provided tip (\`maxPriorityFeePerGas\`${n?` = ${en(n)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${r?` = ${en(r)} gwei`:""}).`].join(`
`),{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}}Object.defineProperty(ld,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});class bf extends X{constructor({cause:t}){super(`An error occurred while executing: ${t==null?void 0:t.shortMessage}`,{cause:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}const ME=/^0x[a-fA-F0-9]{40}$/;function _s(e){return ME.test(e)}function kr(e){return typeof e[0]=="string"?$g(e):BE(e)}function BE(e){let t=0;for(const i of e)t+=i.length;const n=new Uint8Array(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return n}function $g(e){return`0x${e.reduce((t,n)=>t+n.replace("0x",""),"")}`}function ce(e,t){return n=>{var r;return((r=e[t.name])==null?void 0:r.call(e,n))??t(e,n)}}function Ii(e,{includeName:t=!1}={}){if(e.type!=="function"&&e.type!=="event"&&e.type!=="error")throw new QE(e.type);return`${e.name}(${xf(e.inputs,{includeName:t})})`}function xf(e,{includeName:t=!1}={}){return e?e.map(n=>jE(n,{includeName:t})).join(t?", ":","):""}function jE(e,{includeName:t}){return e.type.startsWith("tuple")?`(${xf(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")}class LE extends X{constructor({docsPath:t}){super(["A constructor was not found on the ABI.","Make sure you are using the correct ABI and that the constructor exists on it."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}}class g2 extends X{constructor({docsPath:t}){super(["Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.","Make sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists."].join(`
`),{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}}class Pg extends X{constructor({data:t,params:n,size:r}){super([`Data size of ${r} bytes is too small for given parameters.`].join(`
`),{metaMessages:[`Params: (${xf(n,{includeName:!0})})`,`Data:   ${t} (${r} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t,this.params=n,this.size=r}}class Cf extends X{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}}class UE extends X{constructor({expectedLength:t,givenLength:n,type:r}){super([`ABI encoding array length mismatch for type ${r}.`,`Expected length: ${t}`,`Given length: ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}}class FE extends X{constructor({expectedSize:t,value:n}){super(`Size of bytes "${n}" (bytes${mt(n)}) does not match expected size (bytes${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}}class zE extends X{constructor({expectedLength:t,givenLength:n}){super(["ABI encoding params/values length mismatch.",`Expected length (params): ${t}`,`Given length (values): ${n}`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}}class o5 extends X{constructor(t,{docsPath:n}){super([`Encoded error signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=t}}class WE extends X{constructor({docsPath:t}){super("Cannot extract event signature from empty topics.",{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}}class HE extends X{constructor(t,{docsPath:n}){super([`Encoded event signature "${t}" not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it.",`You can look up the signature here: https://openchain.xyz/signatures?query=${t}.`].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}}class m2 extends X{constructor(t,{docsPath:n}={}){super([`Event ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the event exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}}class cd extends X{constructor(t,{docsPath:n}={}){super([`Function ${t?`"${t}" `:""}not found on ABI.`,"Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}}class VE extends X{constructor(t,{docsPath:n}){super([`Function "${t}" does not contain any \`outputs\` on ABI.`,"Cannot decode function result without knowing what the parameter types are.","Make sure you are using the correct ABI and that the function exists on it."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}}class qE extends X{constructor({expectedSize:t,givenSize:n}){super(`Expected bytes${t}, got bytes${n}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}}class mo extends X{constructor({abiItem:t,data:n,params:r,size:i}){super([`Data size of ${i} bytes is too small for non-indexed event parameters.`].join(`
`),{metaMessages:[`Params: (${xf(r,{includeName:!0})})`,`Data:   ${n} (${i} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t,this.data=n,this.params=r,this.size=i}}class Ys extends X{constructor({abiItem:t,param:n}){super([`Expected a topic for indexed event parameter${n.name?` "${n.name}"`:""} on event "${Ii(t,{includeName:!0})}".`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=t}}class GE extends X{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid encoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}}class KE extends X{constructor(t,{docsPath:n}){super([`Type "${t}" is not a valid decoding type.`,"Please provide a valid ABI type."].join(`
`),{docsPath:n}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}}class ZE extends X{constructor(t){super([`Value "${t}" is not a valid array.`].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}}class QE extends X{constructor(t){super([`"${t}" is not a valid definition type.`,'Valid types: "function", "event", "error"'].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}class YE extends X{constructor(t){super(`Filter type "${t}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}}const JE=/((function|event)\s)?(.*)(\((.*)\))/;function s5(e){const t=e.match(JE),n=(t==null?void 0:t[2])||void 0,r=t==null?void 0:t[3],i=(t==null?void 0:t[5])||void 0;return{type:n,name:r,params:i}}function XE(e){return s5(e).name}function e7(e){const t=s5(e).params,n=t==null?void 0:t.split(",").map(r=>r.trim().split(" "));return n==null?void 0:n.map(r=>({type:r[0],name:r[1]==="indexed"?r[2]:r[1],...r[1]==="indexed"?{indexed:!0}:{}}))}const a5=e=>{if(typeof e=="string"){const t=XE(e),n=e7(e)||[];return`${t}(${n.map(({type:r})=>r).join(",")})`}return Ii(e)},t7=e=>a5(e);function w2(e){if(!Number.isSafeInteger(e)||e<0)throw new Error(`Wrong positive integer: ${e}`)}function l5(e,...t){if(!(e instanceof Uint8Array))throw new Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw new Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function y2(e,t=!0){if(e.destroyed)throw new Error("Hash instance has been destroyed");if(t&&e.finished)throw new Error("Hash#digest() has already been called")}function n7(e,t){l5(e);const n=t.outputLen;if(e.length<n)throw new Error(`digestInto() expects output buffer of length at least ${n}`)}const tu=BigInt(2**32-1),v2=BigInt(32);function r7(e,t=!1){return t?{h:Number(e&tu),l:Number(e>>v2&tu)}:{h:Number(e>>v2&tu)|0,l:Number(e&tu)|0}}function i7(e,t=!1){let n=new Uint32Array(e.length),r=new Uint32Array(e.length);for(let i=0;i<e.length;i++){const{h:o,l:s}=r7(e[i],t);[n[i],r[i]]=[o,s]}return[n,r]}const o7=(e,t,n)=>e<<n|t>>>32-n,s7=(e,t,n)=>t<<n|e>>>32-n,a7=(e,t,n)=>t<<n-32|e>>>64-n,l7=(e,t,n)=>e<<n-32|t>>>64-n;/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */const c7=e=>e instanceof Uint8Array,u7=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),d7=new Uint8Array(new Uint32Array([287454020]).buffer)[0]===68;if(!d7)throw new Error("Non little-endian hardware is not supported");function f7(e){if(typeof e!="string")throw new Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}function c5(e){if(typeof e=="string"&&(e=f7(e)),!c7(e))throw new Error(`expected Uint8Array, got ${typeof e}`);return e}class h7{clone(){return this._cloneInto()}}function p7(e){const t=r=>e().update(c5(r)).digest(),n=e();return t.outputLen=n.outputLen,t.blockLen=n.blockLen,t.create=()=>e(),t}const[u5,d5,f5]=[[],[],[]],g7=BigInt(0),va=BigInt(1),m7=BigInt(2),w7=BigInt(7),y7=BigInt(256),v7=BigInt(113);for(let e=0,t=va,n=1,r=0;e<24;e++){[n,r]=[r,(2*n+3*r)%5],u5.push(2*(5*r+n)),d5.push((e+1)*(e+2)/2%64);let i=g7;for(let o=0;o<7;o++)t=(t<<va^(t>>w7)*v7)%y7,t&m7&&(i^=va<<(va<<BigInt(o))-va);f5.push(i)}const[b7,x7]=i7(f5,!0),b2=(e,t,n)=>n>32?a7(e,t,n):o7(e,t,n),x2=(e,t,n)=>n>32?l7(e,t,n):s7(e,t,n);function C7(e,t=24){const n=new Uint32Array(10);for(let r=24-t;r<24;r++){for(let s=0;s<10;s++)n[s]=e[s]^e[s+10]^e[s+20]^e[s+30]^e[s+40];for(let s=0;s<10;s+=2){const a=(s+8)%10,l=(s+2)%10,c=n[l],u=n[l+1],d=b2(c,u,1)^n[a],h=x2(c,u,1)^n[a+1];for(let p=0;p<50;p+=10)e[s+p]^=d,e[s+p+1]^=h}let i=e[2],o=e[3];for(let s=0;s<24;s++){const a=d5[s],l=b2(i,o,a),c=x2(i,o,a),u=u5[s];i=e[u],o=e[u+1],e[u]=l,e[u+1]=c}for(let s=0;s<50;s+=10){for(let a=0;a<10;a++)n[a]=e[s+a];for(let a=0;a<10;a++)e[s+a]^=~n[(a+2)%10]&n[(a+4)%10]}e[0]^=b7[r],e[1]^=x7[r]}n.fill(0)}class Tg extends h7{constructor(t,n,r,i=!1,o=24){if(super(),this.blockLen=t,this.suffix=n,this.outputLen=r,this.enableXOF=i,this.rounds=o,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,w2(r),0>=this.blockLen||this.blockLen>=200)throw new Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=u7(this.state)}keccak(){C7(this.state32,this.rounds),this.posOut=0,this.pos=0}update(t){y2(this);const{blockLen:n,state:r}=this;t=c5(t);const i=t.length;for(let o=0;o<i;){const s=Math.min(n-this.pos,i-o);for(let a=0;a<s;a++)r[this.pos++]^=t[o++];this.pos===n&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;const{state:t,suffix:n,pos:r,blockLen:i}=this;t[r]^=n,n&128&&r===i-1&&this.keccak(),t[i-1]^=128,this.keccak()}writeInto(t){y2(this,!1),l5(t),this.finish();const n=this.state,{blockLen:r}=this;for(let i=0,o=t.length;i<o;){this.posOut>=r&&this.keccak();const s=Math.min(r-this.posOut,o-i);t.set(n.subarray(this.posOut,this.posOut+s),i),this.posOut+=s,i+=s}return t}xofInto(t){if(!this.enableXOF)throw new Error("XOF is not possible for this instance");return this.writeInto(t)}xof(t){return w2(t),this.xofInto(new Uint8Array(t))}digestInto(t){if(n7(t,this),this.finished)throw new Error("digest() was already called");return this.writeInto(t),this.destroy(),t}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(t){const{blockLen:n,suffix:r,outputLen:i,rounds:o,enableXOF:s}=this;return t||(t=new Tg(n,r,i,s,o)),t.state32.set(this.state32),t.pos=this.pos,t.posOut=this.posOut,t.finished=this.finished,t.rounds=o,t.suffix=r,t.outputLen=i,t.enableXOF=s,t.destroyed=this.destroyed,t}}const E7=(e,t,n)=>p7(()=>new Tg(t,e,n)),_7=E7(1,136,256/8);function Ut(e,t){const n=t||"hex",r=_7(lr(e,{strict:!1})?xi(e):e);return n==="bytes"?r:Mr(r)}const S7=e=>Ut(xi(e)),Ag=e=>S7(t7(e));function ut(e,t,n,{strict:r}={}){return lr(e,{strict:!1})?P7(e,t,n,{strict:r}):$7(e,t,n,{strict:r})}function h5(e,t){if(typeof t=="number"&&t>0&&t>mt(e)-1)throw new J3({offset:t,position:"start",size:mt(e)})}function p5(e,t,n){if(typeof t=="number"&&typeof n=="number"&&mt(e)!==n-t)throw new J3({offset:n,position:"end",size:mt(e)})}function $7(e,t,n,{strict:r}={}){h5(e,t);const i=e.slice(t,n);return r&&p5(i,t,n),i}function P7(e,t,n,{strict:r}={}){h5(e,t);const i=`0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;return r&&p5(i,t,n),i}function gc(e,t){if(e.length!==t.length)throw new zE({expectedLength:e.length,givenLength:t.length});const n=T7({params:e,values:t}),r=Dg(n);return r.length===0?"0x":r}function T7({params:e,values:t}){const n=[];for(let r=0;r<e.length;r++)n.push(kg({param:e[r],value:t[r]}));return n}function kg({param:e,value:t}){const n=Ef(e.type);if(n){const[r,i]=n;return k7(t,{length:r,param:{...e,type:i}})}if(e.type==="tuple")return R7(t,{param:e});if(e.type==="address")return A7(t);if(e.type==="bool")return O7(t);if(e.type.startsWith("uint")||e.type.startsWith("int")){const r=e.type.startsWith("int");return I7(t,{signed:r})}if(e.type.startsWith("bytes"))return D7(t,{param:e});if(e.type==="string")return N7(t);throw new GE(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}function Dg(e){let t=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?t+=32:t+=mt(a)}const n=[],r=[];let i=0;for(let o=0;o<e.length;o++){const{dynamic:s,encoded:a}=e[o];s?(n.push(ge(t+i,{size:32})),r.push(a),i+=mt(a)):n.push(a)}return kr([...n,...r])}function A7(e){if(!_s(e))throw new Sl({address:e});return{dynamic:!1,encoded:fi(e.toLowerCase())}}function k7(e,{length:t,param:n}){const r=t===null;if(!Array.isArray(e))throw new ZE(e);if(!r&&e.length!==t)throw new UE({expectedLength:t,givenLength:e.length,type:`${n.type}[${t}]`});let i=!1;const o=[];for(let s=0;s<e.length;s++){const a=kg({param:n,value:e[s]});a.dynamic&&(i=!0),o.push(a)}if(r||i){const s=Dg(o);if(r){const a=ge(o.length,{size:32});return{dynamic:!0,encoded:o.length>0?kr([a,s]):a}}if(i)return{dynamic:!0,encoded:s}}return{dynamic:!1,encoded:kr(o.map(({encoded:s})=>s))}}function D7(e,{param:t}){const[,n]=t.type.split("bytes"),r=mt(e);if(!n){let i=e;return r%32!==0&&(i=fi(i,{dir:"right",size:Math.ceil((e.length-2)/2/32)*32})),{dynamic:!0,encoded:kr([fi(ge(r,{size:32})),i])}}if(r!==parseInt(n))throw new FE({expectedSize:parseInt(n),value:e});return{dynamic:!1,encoded:fi(e,{dir:"right"})}}function O7(e){return{dynamic:!1,encoded:fi(e5(e))}}function I7(e,{signed:t}){return{dynamic:!1,encoded:ge(e,{size:32,signed:t})}}function N7(e){const t=Cg(e),n=Math.ceil(mt(t)/32),r=[];for(let i=0;i<n;i++)r.push(fi(ut(t,i*32,(i+1)*32),{dir:"right"}));return{dynamic:!0,encoded:kr([fi(ge(mt(t),{size:32})),...r])}}function R7(e,{param:t}){let n=!1;const r=[];for(let i=0;i<t.components.length;i++){const o=t.components[i],s=Array.isArray(e)?i:o.name,a=kg({param:o,value:e[s]});r.push(a),a.dynamic&&(n=!0)}return{dynamic:n,encoded:n?Dg(r):kr(r.map(({encoded:i})=>i))}}function Ef(e){const t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}const M7=e=>Ut(xi(e)),Og=e=>ut(M7(a5(e)),0,4);function mc({abi:e,args:t=[],name:n}){const r=lr(n,{strict:!1}),i=e.filter(o=>r?o.type==="function"?Og(o)===n:o.type==="event"?Ag(o)===n:!1:"name"in o&&o.name===n);if(i.length!==0){if(i.length===1)return i[0];for(const o of i){if(!("inputs"in o))continue;if(!t||t.length===0){if(!o.inputs||o.inputs.length===0)return o;continue}if(!o.inputs||o.inputs.length===0||o.inputs.length!==t.length)continue;if(t.every((a,l)=>{const c="inputs"in o&&o.inputs[l];return c?$p(a,c):!1}))return o}return i[0]}}function $p(e,t){const n=typeof e,r=t.type;switch(r){case"address":return _s(e);case"bool":return n==="boolean";case"function":return n==="string";case"string":return n==="string";default:return r==="tuple"&&"components"in t?Object.values(t.components).every((i,o)=>$p(Object.values(e)[o],i)):/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(r)?n==="number"||n==="bigint":/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(r)?n==="string"||e instanceof Uint8Array:/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(r)?Array.isArray(e)&&e.every(i=>$p(i,{...t,type:r.replace(/(\[[0-9]{0,}\])$/,"")})):!1}}function wc({abi:e,eventName:t,args:n}){var a;let r=e[0];if(t&&(r=mc({abi:e,args:n,name:t}),!r))throw new m2(t,{docsPath:"/docs/contract/encodeEventTopics"});if(r.type!=="event")throw new m2(void 0,{docsPath:"/docs/contract/encodeEventTopics"});const i=Ii(r),o=Ag(i);let s=[];if(n&&"inputs"in r){const l=(a=r.inputs)==null?void 0:a.filter(u=>"indexed"in u&&u.indexed),c=Array.isArray(n)?n:Object.values(n).length>0?(l==null?void 0:l.map(u=>n[u.name]))??[]:[];c.length>0&&(s=(l==null?void 0:l.map((u,d)=>Array.isArray(c[d])?c[d].map((h,p)=>C2({param:u,value:c[d][p]})):c[d]?C2({param:u,value:c[d]}):null))??[])}return[o,...s]}function C2({param:e,value:t}){if(e.type==="string"||e.type==="bytes")return Ut(xi(t));if(e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/))throw new YE(e.type);return gc([e],[t])}function _f(e,{method:t}){var r,i;const n={};return e.transport.type==="fallback"&&((i=(r=e.transport).onResponse)==null||i.call(r,({method:o,response:s,status:a,transport:l})=>{a==="success"&&t===o&&(n[s]=l.request)})),o=>n[o]||e.request}async function g5(e,{address:t,abi:n,args:r,eventName:i,fromBlock:o,strict:s,toBlock:a}){const l=_f(e,{method:"eth_newFilter"}),c=i?wc({abi:n,args:r,eventName:i}):void 0,u=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?ge(o):o,toBlock:typeof a=="bigint"?ge(a):a,topics:c}]});return{abi:n,args:r,eventName:i,id:u,request:l(u),strict:s,type:"event"}}function On(e){return typeof e=="string"?{address:e,type:"json-rpc"}:e}function Ni({abi:e,args:t,functionName:n}){let r=e[0];if(n&&(r=mc({abi:e,args:t,name:n}),!r))throw new cd(n,{docsPath:"/docs/contract/encodeFunctionData"});if(r.type!=="function")throw new cd(void 0,{docsPath:"/docs/contract/encodeFunctionData"});const i=Ii(r),o=Og(i),s="inputs"in r&&r.inputs?gc(r.inputs,t??[]):void 0;return $g([o,s??"0x"])}const m5={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},B7={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},j7={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"};function Ig(e,t){const n=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),r=Ut(Sr(n),"bytes"),i=(t?n.substring(`${t}0x`.length):n).split("");for(let o=0;o<40;o+=2)r[o>>1]>>4>=8&&i[o]&&(i[o]=i[o].toUpperCase()),(r[o>>1]&15)>=8&&i[o+1]&&(i[o+1]=i[o+1].toUpperCase());return`0x${i.join("")}`}function Vn(e,t){if(!_s(e))throw new Sl({address:e});return Ig(e,t)}function Sf(e,t){if(t==="0x"&&e.length>0)throw new Cf;if(mt(t)&&mt(t)<32)throw new Pg({data:t,params:e,size:mt(t)});return L7({data:t,params:e})}function L7({data:e,params:t}){const n=[];let r=0;for(let i=0;i<t.length;i++){if(r>=mt(e))throw new Pg({data:e,params:t,size:mt(e)});const o=t[i],{consumed:s,value:a}=ps({data:e,param:o,position:r});n.push(a),r+=s}return n}function ps({data:e,param:t,position:n}){const r=Ef(t.type);if(r){const[o,s]=r;return F7(e,{length:o,param:{...t,type:s},position:n})}if(t.type==="tuple")return q7(e,{param:t,position:n});if(t.type==="string")return V7(e,{position:n});if(t.type.startsWith("bytes"))return W7(e,{param:t,position:n});const i=ut(e,n,n+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return H7(i,{param:t});if(t.type==="address")return U7(i);if(t.type==="bool")return z7(i);throw new KE(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}function U7(e){return{consumed:32,value:Ig(ut(e,-20))}}function F7(e,{param:t,length:n,position:r}){if(!n){const s=Mt(ut(e,r,r+32,{strict:!0})),a=Mt(ut(e,s,s+32,{strict:!0}));let l=0;const c=[];for(let u=0;u<a;++u){const d=ps({data:ut(e,s+32),param:t,position:l});l+=d.consumed,c.push(d.value)}return{value:c,consumed:32}}if(ud(t)){const s=Ef(t.type),a=!(s!=null&&s[0]);let l=0;const c=[];for(let u=0;u<n;++u){const d=Mt(ut(e,r,r+32,{strict:!0})),h=ps({data:ut(e,d),param:t,position:a?l:u*32});l+=h.consumed,c.push(h.value)}return{value:c,consumed:32}}let i=0;const o=[];for(let s=0;s<n;++s){const a=ps({data:e,param:t,position:r+i});i+=a.consumed,o.push(a.value)}return{value:o,consumed:i}}function z7(e){return{consumed:32,value:$E(e)}}function W7(e,{param:t,position:n}){const[r,i]=t.type.split("bytes");if(!i){const s=Mt(ut(e,n,n+32,{strict:!0})),a=Mt(ut(e,s,s+32,{strict:!0}));return a===0?{consumed:32,value:"0x"}:{consumed:32,value:ut(e,s+32,s+32+a,{strict:!0})}}return{consumed:32,value:ut(e,n,n+parseInt(i),{strict:!0})}}function H7(e,{param:t}){const n=t.type.startsWith("int");return{consumed:32,value:parseInt(t.type.split("int")[1]||"256")>48?xr(e,{signed:n}):Mt(e,{signed:n})}}function V7(e,{position:t}){const n=Mt(ut(e,t,t+32,{strict:!0})),r=Mt(ut(e,n,n+32,{strict:!0}));return r===0?{consumed:32,value:""}:{consumed:32,value:t5(so(ut(e,n+32,n+32+r,{strict:!0})))}}function q7(e,{param:t,position:n}){const r=t.components.length===0||t.components.some(({name:s})=>!s),i=r?[]:{};let o=0;if(ud(t)){const s=Mt(ut(e,n,n+32,{strict:!0}));for(let a=0;a<t.components.length;++a){const l=t.components[a],c=ps({data:ut(e,s),param:l,position:o});o+=c.consumed,i[r?a:l==null?void 0:l.name]=c.value}return{consumed:32,value:i}}for(let s=0;s<t.components.length;++s){const a=t.components[s],l=ps({data:e,param:a,position:n+o});o+=l.consumed,i[r?s:a==null?void 0:a.name]=l.value}return{consumed:o,value:i}}function ud(e){var r;const{type:t}=e;if(t==="string"||t==="bytes"||t.endsWith("[]"))return!0;if(t==="tuple")return(r=e.components)==null?void 0:r.some(ud);const n=Ef(e.type);return!!(n&&ud({...e,type:n[1]}))}function G7({abi:e,data:t}){const n=ut(t,0,4);if(n==="0x")throw new Cf;const i=[...e||[],B7,j7].find(o=>o.type==="error"&&n===Og(Ii(o)));if(!i)throw new o5(n,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:i,args:"inputs"in i&&i.inputs&&i.inputs.length>0?Sf(i.inputs,ut(t,4)):void 0,errorName:i.name}}const zt=(e,t,n)=>JSON.stringify(e,(r,i)=>{const o=typeof i=="bigint"?i.toString():i;return typeof t=="function"?t(r,o):o},n);function w5({abiItem:e,args:t,includeFunctionName:n=!0,includeName:r=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${n?e.name:""}(${e.inputs.map((i,o)=>`${r&&i.name?`${i.name}: `:""}${typeof t[o]=="object"?zt(t[o]):t[o]}`).join(", ")})`}function Ng(e,t="wei"){return sd(e,i5[t])}function yc(e){const t=Object.entries(e).map(([r,i])=>i===void 0||i===!1?null:[r,i]).filter(Boolean),n=t.reduce((r,[i])=>Math.max(r,i.length),0);return t.map(([r,i])=>`  ${`${r}:`.padEnd(n+1)}  ${i}`).join(`
`)}class K7 extends X{constructor(){super(["Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.","Use `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."].join(`
`)),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}}class Z7 extends X{constructor({transaction:t}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",yc(t),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}}class Q7 extends X{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){const p=yc({chain:i&&`${i==null?void 0:i.name} (id: ${i==null?void 0:i.id})`,from:n==null?void 0:n.address,to:d,value:typeof h<"u"&&`${Ng(h)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${en(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${en(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${en(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Request Arguments:",p].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=t}}class y5 extends X{constructor({blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){let s="Transaction";r&&o!==void 0&&(s=`Transaction at block time "${r}" at index "${o}"`),t&&o!==void 0&&(s=`Transaction at block hash "${t}" at index "${o}"`),n&&o!==void 0&&(s=`Transaction at block number "${n}" at index "${o}"`),i&&(s=`Transaction with hash "${i}"`),super(`${s} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}}class v5 extends X{constructor({hash:t}){super(`Transaction receipt with hash "${t}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}}class Y7 extends X{constructor({hash:t}){super(`Timed out while waiting for transaction with hash "${t}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}class b5 extends X{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){const p=n?On(n):void 0,w=yc({from:p==null?void 0:p.address,to:d,value:typeof h<"u"&&`${Ng(h)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${en(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${en(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${en(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Raw Call Arguments:",w].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=t}}class Rg extends X{constructor(t,{abi:n,args:r,contractAddress:i,docsPath:o,functionName:s,sender:a}){const l=mc({abi:n,args:r,name:s}),c=l?w5({abiItem:l,args:r,includeFunctionName:!1,includeName:!1}):void 0,u=l?Ii(l,{includeName:!0}):void 0,d=yc({address:i&&hE(i),function:u,args:c&&c!=="()"&&`${[...Array((s==null?void 0:s.length)??0).keys()].map(()=>" ").join("")}${c}`,sender:a});super(t.shortMessage||`An unknown error occurred while executing the contract function "${s}".`,{cause:t,docsPath:o,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Contract Call:",d].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=n,this.args=r,this.cause=t,this.contractAddress=i,this.functionName=s,this.sender=a}}class Pp extends X{constructor({abi:t,data:n,functionName:r,message:i}){let o,s,a,l;if(n&&n!=="0x")try{s=G7({abi:t,data:n});const{abiItem:u,errorName:d,args:h}=s;if(d==="Error")l=h[0];else if(d==="Panic"){const[p]=h;l=m5[p]}else{const p=u?Ii(u,{includeName:!0}):void 0,w=u&&h?w5({abiItem:u,args:h,includeFunctionName:!1,includeName:!1}):void 0;a=[p?`Error: ${p}`:"",w&&w!=="()"?`       ${[...Array((d==null?void 0:d.length)??0).keys()].map(()=>" ").join("")}${w}`:""]}}catch(u){o=u}else i&&(l=i);let c;o instanceof o5&&(c=o.signature,a=[`Unable to decode signature "${c}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${c}.`]),super(l&&l!=="execution reverted"||c?[`The contract function "${r}" reverted with the following ${c?"signature":"reason"}:`,l||c].join(`
`):`The contract function "${r}" reverted.`,{cause:o,metaMessages:a}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=s,this.reason=l,this.signature=c}}class J7 extends X{constructor({functionName:t}){super(`The contract function "${t}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${t}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}}class Mg extends X{constructor({data:t,message:n}){super(n||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t}}class Za extends X{constructor({body:t,details:n,headers:r,status:i,url:o}){super("HTTP request failed.",{details:n,metaMessages:[i&&`Status: ${i}`,`URL: ${wf(o)}`,t&&`Request body: ${zt(t)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=t,this.headers=r,this.status=i,this.url=o}}class X7 extends X{constructor({body:t,details:n,url:r}){super("WebSocket request failed.",{details:n,metaMessages:[`URL: ${wf(r)}`,`Request body: ${zt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}}class Bg extends X{constructor({body:t,error:n,url:r}){super("RPC Request failed.",{cause:n,details:n.message,metaMessages:[`URL: ${wf(r)}`,`Request body: ${zt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=n.code}}class Tp extends X{constructor({body:t,url:n}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${wf(n)}`,`Request body: ${zt(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}const e9=-1;class rn extends X{constructor(t,{code:n,docsPath:r,metaMessages:i,shortMessage:o}){super(o,{cause:t,docsPath:r,metaMessages:i||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof Bg?t.code:n??e9}}class Js extends rn{constructor(t,n){super(t,n),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=n.data}}class $l extends rn{constructor(t){super(t,{code:$l.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}}Object.defineProperty($l,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});class Pl extends rn{constructor(t){super(t,{code:Pl.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}}Object.defineProperty(Pl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});class Tl extends rn{constructor(t){super(t,{code:Tl.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}}Object.defineProperty(Tl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});class Al extends rn{constructor(t){super(t,{code:Al.code,shortMessage:["Invalid parameters were provided to the RPC method.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}}Object.defineProperty(Al,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});class Ss extends rn{constructor(t){super(t,{code:Ss.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}}Object.defineProperty(Ss,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});class wo extends rn{constructor(t){super(t,{code:wo.code,shortMessage:["Missing or invalid parameters.","Double check you have provided the correct parameters."].join(`
`)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}}Object.defineProperty(wo,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});class kl extends rn{constructor(t){super(t,{code:kl.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}}Object.defineProperty(kl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});class $s extends rn{constructor(t){super(t,{code:$s.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}}Object.defineProperty($s,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});class Dl extends rn{constructor(t){super(t,{code:Dl.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}}Object.defineProperty(Dl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});class Ol extends rn{constructor(t){super(t,{code:Ol.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}}Object.defineProperty(Ol,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});class Il extends rn{constructor(t){super(t,{code:Il.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}}Object.defineProperty(Il,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});class Nl extends rn{constructor(t){super(t,{code:Nl.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}}Object.defineProperty(Nl,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});class Zt extends Js{constructor(t){super(t,{code:Zt.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(Zt,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class Rl extends Js{constructor(t){super(t,{code:Rl.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}}Object.defineProperty(Rl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});class Ml extends Js{constructor(t){super(t,{code:Ml.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}}Object.defineProperty(Ml,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});class Bl extends Js{constructor(t){super(t,{code:Bl.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}}Object.defineProperty(Bl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});class jl extends Js{constructor(t){super(t,{code:jl.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}}Object.defineProperty(jl,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});class Dr extends Js{constructor(t){super(t,{code:Dr.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(Dr,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});class t9 extends rn{constructor(t){super(t,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}const n9=3;function Ll(e,{abi:t,address:n,args:r,docsPath:i,functionName:o,sender:s}){const{code:a,data:l,message:c,shortMessage:u}=e instanceof Mg?e:e instanceof X?e.walk(h=>"data"in h)||e.walk():{},d=(()=>e instanceof Cf?new J7({functionName:o}):[n9,Ss.code].includes(a)&&(l||c||u)?new Pp({abi:t,data:typeof l=="object"?l.data:l,functionName:o,message:u??c}):e)();return new Rg(d,{abi:t,args:r,contractAddress:n,docsPath:i,functionName:o,sender:s})}class Xs extends X{constructor({docsPath:t}={}){super(["Could not find an Account to execute with this Action.","Please provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient."].join(`
`),{docsPath:t,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}class r9 extends X{constructor(t,{account:n,docsPath:r,chain:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h}){const p=yc({from:n==null?void 0:n.address,to:d,value:typeof h<"u"&&`${Ng(h)} ${(i==null?void 0:i.nativeCurrency.symbol)||"ETH"}`,data:o,gas:s,gasPrice:typeof a<"u"&&`${en(a)} gwei`,maxFeePerGas:typeof l<"u"&&`${en(l)} gwei`,maxPriorityFeePerGas:typeof c<"u"&&`${en(c)} gwei`,nonce:u});super(t.shortMessage,{cause:t,docsPath:r,metaMessages:[...t.metaMessages?[...t.metaMessages," "]:[],"Estimate Gas Arguments:",p].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=t}}function jg(e,t){const n=(e.details||"").toLowerCase(),r=e.walk(i=>i.code===as.code);return r instanceof X?new as({cause:e,message:r.details}):as.nodeMessage.test(n)?new as({cause:e,message:e.details}):ad.nodeMessage.test(n)?new ad({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):yp.nodeMessage.test(n)?new yp({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas}):vp.nodeMessage.test(n)?new vp({cause:e,nonce:t==null?void 0:t.nonce}):bp.nodeMessage.test(n)?new bp({cause:e,nonce:t==null?void 0:t.nonce}):xp.nodeMessage.test(n)?new xp({cause:e,nonce:t==null?void 0:t.nonce}):Cp.nodeMessage.test(n)?new Cp({cause:e}):Ep.nodeMessage.test(n)?new Ep({cause:e,gas:t==null?void 0:t.gas}):_p.nodeMessage.test(n)?new _p({cause:e,gas:t==null?void 0:t.gas}):Sp.nodeMessage.test(n)?new Sp({cause:e}):ld.nodeMessage.test(n)?new ld({cause:e,maxFeePerGas:t==null?void 0:t.maxFeePerGas,maxPriorityFeePerGas:t==null?void 0:t.maxPriorityFeePerGas}):new bf({cause:e})}function i9(e,{docsPath:t,...n}){const r=(()=>{const i=jg(e,n);return i instanceof bf?e:i})();return new r9(r,{docsPath:t,...n})}function Lg(e,{format:t}){return t?Object.keys(t({})).reduce((r,i)=>(e!=null&&e.hasOwnProperty(i)&&(r[i]=e[i]),r),{}):{}}function vc(e){const{account:t,gasPrice:n,maxFeePerGas:r,maxPriorityFeePerGas:i,to:o}=e,s=t?On(t):void 0;if(s&&!_s(s.address))throw new Sl({address:s.address});if(o&&!_s(o))throw new Sl({address:o});if(typeof n<"u"&&(typeof r<"u"||typeof i<"u"))throw new K7;if(r&&r>2n**256n-1n)throw new ad({maxFeePerGas:r});if(i&&r&&i>r)throw new ld({maxFeePerGas:r,maxPriorityFeePerGas:i})}class o9 extends X{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}}class Ug extends X{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}}class s9 extends X{constructor({maxPriorityFeePerGas:t}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${en(t)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}class a9 extends X{constructor({blockHash:t,blockNumber:n}){let r="Block";t&&(r=`Block at hash "${t}"`),n&&(r=`Block at number "${n}"`),super(`${r} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}}async function Ci(e,{blockHash:t,blockNumber:n,blockTag:r,includeTransactions:i}={}){var u,d,h;const o=r??"latest",s=i??!1,a=n!==void 0?ge(n):void 0;let l=null;if(t?l=await e.request({method:"eth_getBlockByHash",params:[t,s]}):l=await e.request({method:"eth_getBlockByNumber",params:[a||o,s]}),!l)throw new a9({blockHash:t,blockNumber:n});return(((h=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.block)==null?void 0:h.format)||Sg)(l)}async function Fg(e){const t=await e.request({method:"eth_gasPrice"});return BigInt(t)}async function l9(e,t){return x5(e,t)}async function x5(e,t){var o,s,a;const{block:n,chain:r=e.chain,request:i}=t||{};if(typeof((o=r==null?void 0:r.fees)==null?void 0:o.defaultPriorityFee)=="function"){const l=n||await ce(e,Ci)({});return r.fees.defaultPriorityFee({block:l,client:e,request:i})}else if(typeof((s=r==null?void 0:r.fees)==null?void 0:s.defaultPriorityFee)<"u")return(a=r==null?void 0:r.fees)==null?void 0:a.defaultPriorityFee;try{const l=await e.request({method:"eth_maxPriorityFeePerGas"});return xr(l)}catch{const[l,c]=await Promise.all([n?Promise.resolve(n):ce(e,Ci)({}),ce(e,Fg)({})]);if(typeof l.baseFeePerGas!="bigint")throw new Ug;const u=c-l.baseFeePerGas;return u<0n?0n:u}}async function c9(e,t){return Ap(e,t)}async function Ap(e,t){var h,p;const{block:n,chain:r=e.chain,request:i,type:o="eip1559"}=t||{},s=await(async()=>{var w,x;return typeof((w=r==null?void 0:r.fees)==null?void 0:w.baseFeeMultiplier)=="function"?r.fees.baseFeeMultiplier({block:n,client:e,request:i}):((x=r==null?void 0:r.fees)==null?void 0:x.baseFeeMultiplier)??1.2})();if(s<1)throw new o9;const l=10**(((h=s.toString().split(".")[1])==null?void 0:h.length)??0),c=w=>w*BigInt(Math.ceil(s*l))/BigInt(l),u=n||await ce(e,Ci)({});if(typeof((p=r==null?void 0:r.fees)==null?void 0:p.estimateFeesPerGas)=="function")return r.fees.estimateFeesPerGas({block:n,client:e,multiply:c,request:i,type:o});if(o==="eip1559"){if(typeof u.baseFeePerGas!="bigint")throw new Ug;const w=i!=null&&i.maxPriorityFeePerGas?i.maxPriorityFeePerGas:await x5(e,{block:u,chain:r,request:i}),x=c(u.baseFeePerGas);return{maxFeePerGas:(i==null?void 0:i.maxFeePerGas)??x+w,maxPriorityFeePerGas:w}}return{gasPrice:(i==null?void 0:i.gasPrice)??c(await ce(e,Fg)({}))}}async function C5(e,{address:t,blockTag:n="latest",blockNumber:r}){const i=await e.request({method:"eth_getTransactionCount",params:[t,r?ge(r):n]});return Mt(i)}function u9(e){if(e.type)return e.type;if(typeof e.maxFeePerGas<"u"||typeof e.maxPriorityFeePerGas<"u")return"eip1559";if(typeof e.gasPrice<"u")return typeof e.accessList<"u"?"eip2930":"legacy";throw new Z7({transaction:e})}async function $f(e,t){const{account:n=e.account,chain:r,gas:i,nonce:o,type:s}=t;if(!n)throw new Xs;const a=On(n),l=await ce(e,Ci)({blockTag:"latest"}),c={...t,from:a.address};if(typeof o>"u"&&(c.nonce=await ce(e,C5)({address:a.address,blockTag:"pending"})),typeof s>"u")try{c.type=u9(c)}catch{c.type=typeof l.baseFeePerGas=="bigint"?"eip1559":"legacy"}if(c.type==="eip1559"){const{maxFeePerGas:u,maxPriorityFeePerGas:d}=await Ap(e,{block:l,chain:r,request:c});if(typeof t.maxPriorityFeePerGas>"u"&&t.maxFeePerGas&&t.maxFeePerGas<d)throw new s9({maxPriorityFeePerGas:d});c.maxPriorityFeePerGas=d,c.maxFeePerGas=u}else{if(typeof t.maxFeePerGas<"u"||typeof t.maxPriorityFeePerGas<"u")throw new Ug;const{gasPrice:u}=await Ap(e,{block:l,chain:r,request:c,type:"legacy"});c.gasPrice=u}return typeof i>"u"&&(c.gas=await ce(e,zg)({...c,account:{address:a.address,type:"json-rpc"}})),vc(c),c}async function zg(e,t){var i,o,s;const n=t.account??e.account;if(!n)throw new Xs({docsPath:"/docs/actions/public/estimateGas"});const r=On(n);try{const{accessList:a,blockNumber:l,blockTag:c,data:u,gas:d,gasPrice:h,maxFeePerGas:p,maxPriorityFeePerGas:w,nonce:x,to:E,value:b,...g}=r.type==="local"?await $f(e,t):t,C=(l?ge(l):void 0)||c;vc(t);const _=((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionRequest)==null?void 0:s.format)||vf,$=_({...Lg(g,{format:_}),from:r.address,accessList:a,data:u,gas:d,gasPrice:h,maxFeePerGas:p,maxPriorityFeePerGas:w,nonce:x,to:E,value:b}),f=await e.request({method:"eth_estimateGas",params:C?[$,C]:[$]});return BigInt(f)}catch(a){throw i9(a,{...t,account:r,chain:e.chain})}}async function d9(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=Ni({abi:t,args:r,functionName:i});try{return await ce(e,zg)({data:s,to:n,...o})}catch(a){const l=o.account?On(o.account):void 0;throw Ll(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/estimateContractGas",functionName:i,sender:l==null?void 0:l.address})}}const E2="/docs/contract/decodeEventLog";function bc({abi:e,data:t,strict:n,topics:r}){const i=n??!0,[o,...s]=r;if(!o)throw new WE({docsPath:E2});const a=e.find(w=>w.type==="event"&&o===Ag(Ii(w)));if(!(a&&"name"in a)||a.type!=="event")throw new HE(o,{docsPath:E2});const{name:l,inputs:c}=a,u=c==null?void 0:c.some(w=>!("name"in w&&w.name));let d=u?[]:{};const h=c.filter(w=>"indexed"in w&&w.indexed);for(let w=0;w<h.length;w++){const x=h[w],E=s[w];if(!E)throw new Ys({abiItem:a,param:x});d[x.name||w]=f9({param:x,value:E})}const p=c.filter(w=>!("indexed"in w&&w.indexed));if(p.length>0){if(t&&t!=="0x")try{const w=Sf(p,t);if(w)if(u)d=[...d,...w];else for(let x=0;x<p.length;x++)d[p[x].name]=w[x]}catch(w){if(i)throw w instanceof Pg?new mo({abiItem:a,data:w.data,params:w.params,size:w.size}):w}else if(i)throw new mo({abiItem:a,data:"0x",params:p,size:0})}return{eventName:l,args:Object.values(d).length>0?d:void 0}}function f9({param:e,value:t}){return e.type==="string"||e.type==="bytes"||e.type==="tuple"||e.type.match(/^(.*)\[(\d+)?\]$/)?t:(Sf([e],t)||[])[0]}async function Wg(e,{address:t,blockHash:n,fromBlock:r,toBlock:i,event:o,events:s,args:a,strict:l}={}){const c=l??!1,u=s??(o?[o]:void 0);let d=[];u&&(d=[u.flatMap(p=>wc({abi:[p],eventName:p.name,args:a}))],o&&(d=d[0]));let h;return n?h=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,blockHash:n}]}):h=await e.request({method:"eth_getLogs",params:[{address:t,topics:d,fromBlock:typeof r=="bigint"?ge(r):r,toBlock:typeof i=="bigint"?ge(i):i}]}),h.map(p=>{var w;try{const{eventName:x,args:E}=u?bc({abi:u,data:p.data,topics:p.topics,strict:c}):{eventName:void 0,args:void 0};return Gn(p,{args:E,eventName:x})}catch(x){let E,b;if(x instanceof mo||x instanceof Ys){if(c)return;E=x.abiItem.name,b=(w=x.abiItem.inputs)==null?void 0:w.some(g=>!("name"in g&&g.name))}return Gn(p,{args:b?[]:{},eventName:E})}}).filter(Boolean)}async function E5(e,{abi:t,address:n,args:r,blockHash:i,eventName:o,fromBlock:s,toBlock:a,strict:l}){const c=o?mc({abi:t,name:o}):void 0,u=c?void 0:t.filter(d=>d.type==="event");return ce(e,Wg)({address:n,args:r,blockHash:i,event:c,events:u,fromBlock:s,toBlock:a,strict:l})}const M0="/docs/contract/decodeFunctionResult";function ea({abi:e,args:t,functionName:n,data:r}){let i=e[0];if(n&&(i=mc({abi:e,args:t,name:n}),!i))throw new cd(n,{docsPath:M0});if(i.type!=="function")throw new cd(void 0,{docsPath:M0});if(!i.outputs)throw new VE(i.name,{docsPath:M0});const o=Sf(i.outputs,r);if(o&&o.length>1)return o;if(o&&o.length===1)return o[0]}const h9="modulepreload",p9=function(e){return"/"+e},_2={},Ps=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=p9(o),o in _2)return;_2[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":h9,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t()).catch(o=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=o,window.dispatchEvent(s),!s.defaultPrevented)throw o})},kp=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],_5=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],S5=[..._5,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],g9=[..._5,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],S2=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],$2=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],m9=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}],w9="0x82ad56cb";function y9(e,{docsPath:t,...n}){const r=(()=>{const i=jg(e,n);return i instanceof bf?e:i})();return new b5(r,{docsPath:t,...n})}const B0=new Map;function Hg({fn:e,id:t,shouldSplitBatch:n,wait:r=0}){const i=async()=>{const c=a();o();const u=c.map(({args:d})=>d);u.length!==0&&e(u).then(d=>{c.forEach(({pendingPromise:h},p)=>{var w;return(w=h.resolve)==null?void 0:w.call(h,[d[p],d])})}).catch(d=>{c.forEach(({pendingPromise:h})=>{var p;return(p=h.reject)==null?void 0:p.call(h,d)})})},o=()=>B0.delete(t),s=()=>a().map(({args:c})=>c),a=()=>B0.get(t)||[],l=c=>B0.set(t,[...a(),c]);return{flush:o,async schedule(c){const u={},d=new Promise((w,x)=>{u.resolve=w,u.reject=x});return(n==null?void 0:n([...s(),c]))&&i(),a().length>0?(l({args:c,pendingPromise:u}),d):(l({args:c,pendingPromise:u}),setTimeout(i,r),d)}}}async function Pf(e,t){var b,g,v,C;const{account:n=e.account,batch:r=!!((b=e.batch)!=null&&b.multicall),blockNumber:i,blockTag:o="latest",accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:w,...x}=t,E=n?On(n):void 0;try{vc(t);const $=(i?ge(i):void 0)||o,f=((C=(v=(g=e.chain)==null?void 0:g.formatters)==null?void 0:v.transactionRequest)==null?void 0:C.format)||vf,S=f({...Lg(x,{format:f}),from:E==null?void 0:E.address,accessList:s,data:a,gas:l,gasPrice:c,maxFeePerGas:u,maxPriorityFeePerGas:d,nonce:h,to:p,value:w});if(r&&v9({request:S}))try{return await b9(e,{...S,blockNumber:i,blockTag:o})}catch(D){if(!(D instanceof Q3)&&!(D instanceof wp))throw D}const k=await e.request({method:"eth_call",params:$?[S,$]:[S]});return k==="0x"?{data:void 0}:{data:k}}catch(_){const $=x9(_),{offchainLookup:f,offchainLookupSignature:S}=await Ps(()=>import("./ccip.js"),[]);if(($==null?void 0:$.slice(0,10))===S&&p)return{data:await f(e,{data:$,to:p})};throw y9(_,{...t,account:E,chain:e.chain})}}function v9({request:e}){const{data:t,to:n,...r}=e;return!(!t||t.startsWith(w9)||!n||Object.values(r).filter(i=>typeof i<"u").length>0)}async function b9(e,t){var x;const{batchSize:n=1024,wait:r=0}=typeof((x=e.batch)==null?void 0:x.multicall)=="object"?e.batch.multicall:{},{blockNumber:i,blockTag:o="latest",data:s,multicallAddress:a,to:l}=t;let c=a;if(!c){if(!e.chain)throw new Q3;c=Zs({blockNumber:i,chain:e.chain,contract:"multicall3"})}const d=(i?ge(i):void 0)||o,{schedule:h}=Hg({id:`${e.uid}.${d}`,wait:r,shouldSplitBatch(E){return E.reduce((g,{data:v})=>g+(v.length-2),0)>n*2},fn:async E=>{const b=E.map(C=>({allowFailure:!0,callData:C.data,target:C.to})),g=Ni({abi:kp,args:[b],functionName:"aggregate3"}),v=await e.request({method:"eth_call",params:[{data:g,to:c},d]});return ea({abi:kp,args:[b],functionName:"aggregate3",data:v||"0x"})}}),[{returnData:p,success:w}]=await h({data:s,to:l});if(!w)throw new Mg({data:p});return p==="0x"?{data:void 0}:{data:p}}function x9(e){if(!(e instanceof X))return;const t=e.walk();return typeof t.data=="object"?t.data.data:t.data}async function Ei(e,{abi:t,address:n,args:r,functionName:i,...o}){const s=Ni({abi:t,args:r,functionName:i});try{const{data:a}=await ce(e,Pf)({data:s,to:n,...o});return ea({abi:t,args:r,functionName:i,data:a||"0x"})}catch(a){throw Ll(a,{abi:t,address:n,args:r,docsPath:"/docs/contract/readContract",functionName:i})}}async function C9(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=s.account?On(s.account):void 0,l=Ni({abi:t,args:r,functionName:o});try{const{data:c}=await ce(e,Pf)({batch:!1,data:`${l}${i?i.replace("0x",""):""}`,to:n,...s});return{result:ea({abi:t,args:r,functionName:o,data:c||"0x"}),request:{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}}}catch(c){throw Ll(c,{abi:t,address:n,args:r,docsPath:"/docs/contract/simulateContract",functionName:o,sender:a==null?void 0:a.address})}}const j0=new Map,P2=new Map;let E9=0;function ta(e,t,n){const r=++E9,i=()=>j0.get(e)||[],o=()=>{const u=i();j0.set(e,u.filter(d=>d.id!==r))},s=()=>{const u=P2.get(e);i().length===1&&u&&u(),o()},a=i();if(j0.set(e,[...a,{id:r,fns:t}]),a&&a.length>0)return s;const l={};for(const u in t)l[u]=(...d)=>{const h=i();h.length!==0&&h.forEach(p=>{var w,x;return(x=(w=p.fns)[u])==null?void 0:x.call(w,...d)})};const c=n(l);return typeof c=="function"&&P2.set(e,c),s}async function dd(e){return new Promise(t=>setTimeout(t,e))}function xc(e,{emitOnBegin:t,initialWaitTime:n,interval:r}){let i=!0;const o=()=>i=!1;return(async()=>{let a;t&&(a=await e({unpoll:o}));const l=await(n==null?void 0:n(a))??r;await dd(l);const c=async()=>{i&&(await e({unpoll:o}),await dd(r),c())};c()})(),o}const _9=new Map,S9=new Map;function $9(e){const t=(i,o)=>({clear:()=>o.delete(i),get:()=>o.get(i),set:s=>o.set(i,s)}),n=t(e,_9),r=t(e,S9);return{clear:()=>{n.clear(),r.clear()},promise:n,response:r}}async function P9(e,{cacheKey:t,cacheTime:n=1/0}){const r=$9(t),i=r.response.get();if(i&&n>0&&new Date().getTime()-i.created.getTime()<n)return i.data;let o=r.promise.get();o||(o=e(),r.promise.set(o));try{const s=await o;return r.response.set({created:new Date,data:s}),s}finally{r.promise.clear()}}const T9=e=>`blockNumber.${e}`;async function Cc(e,{cacheTime:t=e.cacheTime,maxAge:n}={}){const r=await P9(()=>e.request({method:"eth_blockNumber"}),{cacheKey:T9(e.uid),cacheTime:n??t});return BigInt(r)}async function Tf(e,{filter:t}){const n="strict"in t&&t.strict;return(await t.request({method:"eth_getFilterChanges",params:[t.id]})).map(i=>{var o;if(typeof i=="string")return i;try{const{eventName:s,args:a}="abi"in t&&t.abi?bc({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Gn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof mo||s instanceof Ys){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Gn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}async function Af(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}function A9(e,{abi:t,address:n,args:r,batch:i=!0,eventName:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){return(typeof l<"u"?l:e.transport.type!=="webSocket")?(()=>{const w=zt(["watchContractEvent",n,r,i,e.uid,o,c]),x=u??!1;return ta(w,{onLogs:a,onError:s},E=>{let b,g,v=!1;const C=xc(async()=>{var _;if(!v){try{g=await ce(e,g5)({abi:t,address:n,args:r,eventName:o,strict:x})}catch{}v=!0;return}try{let $;if(g)$=await ce(e,Tf)({filter:g});else{const f=await ce(e,Cc)({});b&&b!==f?$=await ce(e,E5)({abi:t,address:n,args:r,fromBlock:b+1n,toBlock:f,strict:x}):$=[],b=f}if($.length===0)return;i?E.onLogs($):$.forEach(f=>E.onLogs([f]))}catch($){g&&$ instanceof wo&&(v=!1),(_=E.onError)==null||_.call(E,$)}},{emitOnBegin:!0,interval:c});return async()=>{g&&await ce(e,Af)({filter:g}),C()}})})():(()=>{let w=!0,x=()=>w=!1;return(async()=>{try{const E=o?wc({abi:t,eventName:o,args:r}):[],{unsubscribe:b}=await e.transport.subscribe({params:["logs",{address:n,topics:E}],onData(g){var C;if(!w)return;const v=g.result;try{const{eventName:_,args:$}=bc({abi:t,data:v.data,topics:v.topics,strict:u}),f=Gn(v,{args:$,eventName:_});a([f])}catch(_){let $,f;if(_ instanceof mo||_ instanceof Ys){if(u)return;$=_.abiItem.name,f=(C=_.abiItem.inputs)==null?void 0:C.some(k=>!("name"in k&&k.name))}const S=Gn(v,{args:f?[]:{},eventName:$});a([S])}},onError(g){s==null||s(g)}});x=b,w||x()}catch(E){s==null||s(E)}})(),x})()}function k9(e,{docsPath:t,...n}){const r=(()=>{const i=jg(e,n);return i instanceof bf?e:i})();return new Q7(r,{docsPath:t,...n})}async function Ul(e){const t=await e.request({method:"eth_chainId"});return Mt(t)}async function Vg(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}async function qg(e,t){var x,E,b;const{account:n=e.account,chain:r=e.chain,accessList:i,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...p}=t;if(!n)throw new Xs({docsPath:"/docs/actions/wallet/sendTransaction"});const w=On(n);try{vc(t);let g;if(r!==null&&(g=await ce(e,Ul)({}),Y3({currentChainId:g,chain:r})),w.type==="local"){const _=await ce(e,$f)({account:w,accessList:i,chain:r,data:o,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h,...p});g||(g=await ce(e,Ul)({}));const $=(x=r==null?void 0:r.serializers)==null?void 0:x.transaction,f=await w.signTransaction({..._,chainId:g},{serializer:$});return await ce(e,Vg)({serializedTransaction:f})}const v=((b=(E=r==null?void 0:r.formatters)==null?void 0:E.transactionRequest)==null?void 0:b.format)||vf,C=v({...Lg(p,{format:v}),accessList:i,data:o,from:w.address,gas:s,gasPrice:a,maxFeePerGas:l,maxPriorityFeePerGas:c,nonce:u,to:d,value:h});return await e.request({method:"eth_sendTransaction",params:[C]})}catch(g){throw k9(g,{...t,account:w,chain:t.chain||void 0})}}async function D9(e,{abi:t,address:n,args:r,dataSuffix:i,functionName:o,...s}){const a=Ni({abi:t,args:r,functionName:o});return await ce(e,qg)({data:`${a}${i?i.replace("0x",""):""}`,to:n,...s})}async function O9(e,{chain:t}){const{id:n,name:r,nativeCurrency:i,rpcUrls:o,blockExplorers:s}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:ge(n),chainName:r,nativeCurrency:i,rpcUrls:o.default.http,blockExplorerUrls:s?Object.values(s).map(({url:a})=>a):void 0}]})}const Dp=256;let nu=Dp,ru;function I9(e=11){if(!ru||nu+e>Dp*2){ru="",nu=0;for(let t=0;t<Dp;t++)ru+=(256+Math.random()*256|0).toString(16).substring(1)}return ru.substring(nu,nu+++e)}function $5(e){const{batch:t,cacheTime:n=e.pollingInterval??4e3,key:r="base",name:i="Base Client",pollingInterval:o=4e3,type:s="base"}=e,a=e.chain,l=e.account?On(e.account):void 0,{config:c,request:u,value:d}=e.transport({chain:a,pollingInterval:o}),h={...c,...d},p={account:l,batch:t,cacheTime:n,chain:a,key:r,name:i,pollingInterval:o,request:u,transport:h,type:s,uid:I9()};function w(x){return E=>{const b=E(x);for(const v in p)delete b[v];const g={...x,...b};return Object.assign(g,{extend:w(g)})}}return Object.assign(p,{extend:w(p)})}function P5(e,{delay:t=100,retryCount:n=2,shouldRetry:r=()=>!0}={}){return new Promise((i,o)=>{const s=async({count:a=0}={})=>{const l=async({error:c})=>{const u=typeof t=="function"?t({count:a,error:c}):t;u&&await dd(u),s({count:a+1})};try{const c=await e();i(c)}catch(c){if(a<n&&await r({count:a,error:c}))return l({error:c});o(c)}};s()})}const T5=e=>"code"in e?e.code!==-1&&e.code!==-32004&&e.code!==-32005&&e.code!==-32042&&e.code!==-32603:e instanceof Za&&e.status?e.status!==403&&e.status!==408&&e.status!==413&&e.status!==429&&e.status!==500&&e.status!==502&&e.status!==503&&e.status!==504:!1;function N9(e,{retryDelay:t=150,retryCount:n=3}={}){return async r=>P5(async()=>{try{return await e(r)}catch(i){const o=i;switch(o.code){case $l.code:throw new $l(o);case Pl.code:throw new Pl(o);case Tl.code:throw new Tl(o);case Al.code:throw new Al(o);case Ss.code:throw new Ss(o);case wo.code:throw new wo(o);case kl.code:throw new kl(o);case $s.code:throw new $s(o);case Dl.code:throw new Dl(o);case Ol.code:throw new Ol(o);case Il.code:throw new Il(o);case Nl.code:throw new Nl(o);case Zt.code:throw new Zt(o);case Rl.code:throw new Rl(o);case Ml.code:throw new Ml(o);case Bl.code:throw new Bl(o);case jl.code:throw new jl(o);case Dr.code:throw new Dr(o);case 5e3:throw new Zt(o);default:throw i instanceof X?i:new t9(o)}}},{delay:({count:i,error:o})=>{var s;if(o&&o instanceof Za){const a=(s=o==null?void 0:o.headers)==null?void 0:s.get("Retry-After");if(a!=null&&a.match(/\d/))return parseInt(a)*1e3}return~~(1<<i)*t},retryCount:n,shouldRetry:({error:i})=>!T5(i)})}function kf({key:e,name:t,request:n,retryCount:r=3,retryDelay:i=150,timeout:o,type:s},a){return{config:{key:e,name:t,request:n,retryCount:r,retryDelay:i,timeout:o,type:s},request:N9(n,{retryCount:r,retryDelay:i}),value:a}}function Gg(e,t={}){const{key:n="custom",name:r="Custom Provider",retryDelay:i}=t;return({retryCount:o})=>kf({key:n,name:r,request:e.request.bind(e),retryCount:t.retryCount??o,retryDelay:i,type:"custom"})}function T2(e,t={}){const{key:n="fallback",name:r="Fallback",rank:i=!1,retryCount:o,retryDelay:s}=t;return({chain:a,pollingInterval:l=4e3,timeout:c})=>{let u=e,d=()=>{};const h=kf({key:n,name:r,async request({method:p,params:w}){const x=async(E=0)=>{const b=u[E]({chain:a,retryCount:0,timeout:c});try{const g=await b.request({method:p,params:w});return d({method:p,params:w,response:g,transport:b,status:"success"}),g}catch(g){if(d({error:g,method:p,params:w,transport:b,status:"error"}),T5(g)||E===u.length-1)throw g;return x(E+1)}};return x()},retryCount:o,retryDelay:s,type:"fallback"},{onResponse:p=>d=p,transports:u.map(p=>p({chain:a,retryCount:0}))});if(i){const p=typeof i=="object"?i:{};R9({chain:a,interval:p.interval??l,onTransports:w=>u=w,sampleCount:p.sampleCount,timeout:p.timeout,transports:u,weights:p.weights})}return h}}function R9({chain:e,interval:t=4e3,onTransports:n,sampleCount:r=10,timeout:i=1e3,transports:o,weights:s={}}){const{stability:a=.7,latency:l=.3}=s,c=[],u=async()=>{const d=await Promise.all(o.map(async w=>{const x=w({chain:e,retryCount:0,timeout:i}),E=Date.now();let b,g;try{await x.request({method:"net_listening"}),g=1}catch{g=0}finally{b=Date.now()}return{latency:b-E,success:g}}));c.push(d),c.length>r&&c.shift();const h=Math.max(...c.map(w=>Math.max(...w.map(({latency:x})=>x)))),p=o.map((w,x)=>{const E=c.map(_=>_[x].latency),g=1-E.reduce((_,$)=>_+$,0)/E.length/h,v=c.map(_=>_[x].success),C=v.reduce((_,$)=>_+$,0)/v.length;return C===0?[0,x]:[l*g+a*C,x]}).sort((w,x)=>x[0]-w[0]);n(p.map(([,w])=>o[w])),await dd(t),u()};u()}class A5 extends X{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}}function M9(){if(typeof WebSocket<"u")return WebSocket;if(typeof global.WebSocket<"u")return global.WebSocket;if(typeof window.WebSocket<"u")return window.WebSocket;if(typeof self.WebSocket<"u")return self.WebSocket;throw new Error("`WebSocket` is not supported in this environment")}const A2=M9();function k5(e,{errorInstance:t=new Error("timed out"),timeout:n,signal:r}){return new Promise((i,o)=>{(async()=>{let s;try{const a=new AbortController;n>0&&(s=setTimeout(()=>{r?a.abort():o(t)},n)),i(await e({signal:a==null?void 0:a.signal}))}catch(a){a.name==="AbortError"&&o(t),o(a)}finally{clearTimeout(s)}})()})}let Op=0;async function B9(e,{body:t,fetchOptions:n={},timeout:r=1e4}){var a;const{headers:i,method:o,signal:s}=n;try{const l=await k5(async({signal:u})=>await fetch(e,{...n,body:Array.isArray(t)?zt(t.map(h=>({jsonrpc:"2.0",id:h.id??Op++,...h}))):zt({jsonrpc:"2.0",id:t.id??Op++,...t}),headers:{...i,"Content-Type":"application/json"},method:o||"POST",signal:s||(r>0?u:void 0)}),{errorInstance:new Tp({body:t,url:e}),timeout:r,signal:!0});let c;if((a=l.headers.get("Content-Type"))!=null&&a.startsWith("application/json")?c=await l.json():c=await l.text(),!l.ok)throw new Za({body:t,details:zt(c.error)||l.statusText,headers:l.headers,status:l.status,url:e});return c}catch(l){throw l instanceof Za||l instanceof Tp?l:new Za({body:t,details:l.message,url:e})}}const L0=new Map;async function U0(e){let t=L0.get(e);if(t)return t;const{schedule:n}=Hg({id:e,fn:async()=>{const o=new A2(e),s=new Map,a=new Map,l=({data:u})=>{const d=JSON.parse(u),h=d.method==="eth_subscription",p=h?d.params.subscription:d.id,w=h?a:s,x=w.get(p);x&&x({data:u}),h||w.delete(p)},c=()=>{L0.delete(e),o.removeEventListener("close",c),o.removeEventListener("message",l)};return o.addEventListener("close",c),o.addEventListener("message",l),o.readyState===A2.CONNECTING&&await new Promise((u,d)=>{o&&(o.onopen=u,o.onerror=d)}),t=Object.assign(o,{requests:s,subscriptions:a}),L0.set(e,t),[t]}}),[r,[i]]=await n();return i}function j9(e,{body:t,onResponse:n}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new X7({body:t,url:e.url,details:"Socket is closed."});const r=Op++,i=({data:o})=>{var a;const s=JSON.parse(o);typeof s.id=="number"&&r!==s.id||(n==null||n(s),t.method==="eth_subscribe"&&typeof s.result=="string"&&e.subscriptions.set(s.result,i),t.method==="eth_unsubscribe"&&e.subscriptions.delete((a=t.params)==null?void 0:a[0]))};return e.requests.set(r,i),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:r})),e}async function L9(e,{body:t,timeout:n=1e4}){return k5(()=>new Promise(r=>gs.webSocket(e,{body:t,onResponse:r})),{errorInstance:new Tp({body:t,url:e.url}),timeout:n})}const gs={http:B9,webSocket:j9,webSocketAsync:L9};function D5(e,t={}){const{batch:n,fetchOptions:r,key:i="http",name:o="HTTP JSON-RPC",retryDelay:s}=t;return({chain:a,retryCount:l,timeout:c})=>{const{batchSize:u=1e3,wait:d=0}=typeof n=="object"?n:{},h=t.retryCount??l,p=c??t.timeout??1e4,w=e||(a==null?void 0:a.rpcUrls.default.http[0]);if(!w)throw new A5;return kf({key:i,name:o,async request({method:x,params:E}){const b={method:x,params:E},{schedule:g}=Hg({id:`${e}`,wait:d,shouldSplitBatch($){return $.length>u},fn:$=>gs.http(w,{body:$,fetchOptions:r,timeout:p})}),v=async $=>n?g($):[await gs.http(w,{body:$,fetchOptions:r,timeout:p})],[{error:C,result:_}]=await v(b);if(C)throw new Bg({body:b,error:C,url:w});return _},retryCount:h,retryDelay:s,timeout:p,type:"http"},{fetchOptions:r,url:e})}}function Kg(e,t){var r,i,o;if(!(e instanceof X))return!1;const n=e.walk(s=>s instanceof Pp);return n instanceof Pp?!!(((r=n.data)==null?void 0:r.errorName)==="ResolverNotFound"||((i=n.data)==null?void 0:i.errorName)==="ResolverWildcardNotSupported"||(o=n.reason)!=null&&o.includes("Wildcard on non-extended resolvers is not supported")||t==="reverse"&&n.reason===m5[50]):!1}function O5(e){if(e.length!==66||e.indexOf("[")!==0||e.indexOf("]")!==65)return null;const t=`0x${e.slice(1,65)}`;return lr(t)?t:null}function Pu(e){let t=new Uint8Array(32).fill(0);if(!e)return _l(t);const n=e.split(".");for(let r=n.length-1;r>=0;r-=1){const i=O5(n[r]),o=i?xi(i):Ut(Sr(n[r]),"bytes");t=Ut(kr([t,o]),"bytes")}return _l(t)}function U9(e){return`[${e.slice(2)}]`}function F9(e){const t=new Uint8Array(32).fill(0);return e?O5(e)||Ut(Sr(e)):_l(t)}function Df(e){const t=e.replace(/^\.|\.$/gm,"");if(t.length===0)return new Uint8Array(1);const n=new Uint8Array(Sr(t).byteLength+2);let r=0;const i=t.split(".");for(let o=0;o<i.length;o++){let s=Sr(i[o]);s.byteLength>255&&(s=Sr(U9(F9(i[o])))),n[r]=s.length,n.set(s,r+1),r+=s.length+1}return n.byteLength!==r+1?n.slice(0,r+1):n}async function z9(e,{blockNumber:t,blockTag:n,coinType:r,name:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Zs({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=Ni({abi:$2,functionName:"addr",...r!=null?{args:[Pu(i),BigInt(r)]}:{args:[Pu(i)]}}),l=await ce(e,Ei)({address:s,abi:S5,functionName:"resolve",args:[Mr(Df(i)),a],blockNumber:t,blockTag:n});if(l[0]==="0x")return null;const c=ea({abi:$2,args:r!=null?[Pu(i),BigInt(r)]:void 0,functionName:"addr",data:l[0]});return c==="0x"||so(c)==="0x00"?null:c}catch(a){if(Kg(a,"resolve"))return null;throw a}}class W9 extends X{constructor({data:t}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}}class ba extends X{constructor({reason:t}){super(`ENS NFT avatar URI is invalid. ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}}class Zg extends X{constructor({uri:t}){super(`Unable to resolve ENS avatar URI "${t}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}}class H9 extends X{constructor({namespace:t}){super(`ENS NFT avatar namespace "${t}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}}const V9=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,q9=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,G9=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,K9=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function Z9(e){try{const t=await fetch(e,{method:"HEAD"});if(t.status===200){const n=t.headers.get("content-type");return n==null?void 0:n.startsWith("image/")}return!1}catch(t){return typeof t=="object"&&typeof t.response<"u"||!globalThis.hasOwnProperty("Image")?!1:new Promise(n=>{const r=new Image;r.onload=()=>{n(!0)},r.onerror=()=>{n(!1)},r.src=e})}}function k2(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function I5({uri:e,gatewayUrls:t}){const n=G9.test(e);if(n)return{uri:e,isOnChain:!0,isEncoded:n};const r=k2(t==null?void 0:t.ipfs,"https://ipfs.io"),i=k2(t==null?void 0:t.arweave,"https://arweave.net"),o=e.match(V9),{protocol:s,subpath:a,target:l,subtarget:c=""}=(o==null?void 0:o.groups)||{},u=s==="ipns:/"||a==="ipns/",d=s==="ipfs:/"||a==="ipfs/"||q9.test(e);if(e.startsWith("http")&&!u&&!d){let p=e;return t!=null&&t.arweave&&(p=e.replace(/https:\/\/arweave.net/g,t==null?void 0:t.arweave)),{uri:p,isOnChain:!1,isEncoded:!1}}if((u||d)&&l)return{uri:`${r}/${u?"ipns":"ipfs"}/${l}${c}`,isOnChain:!1,isEncoded:!1};if(s==="ar:/"&&l)return{uri:`${i}/${l}${c||""}`,isOnChain:!1,isEncoded:!1};let h=e.replace(K9,"");if(h.startsWith("<svg")&&(h=`data:image/svg+xml;base64,${btoa(h)}`),h.startsWith("data:")||h.startsWith("{"))return{uri:h,isOnChain:!0,isEncoded:!1};throw new Zg({uri:e})}function N5(e){if(typeof e!="object"||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new W9({data:e});return e.image||e.image_url||e.image_data}async function Q9({gatewayUrls:e,uri:t}){try{const n=await fetch(t).then(i=>i.json());return await Qg({gatewayUrls:e,uri:N5(n)})}catch{throw new Zg({uri:t})}}async function Qg({gatewayUrls:e,uri:t}){const{uri:n,isOnChain:r}=I5({uri:t,gatewayUrls:e});if(r||await Z9(n))return n;throw new Zg({uri:t})}function Y9(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));const[n,r,i]=t.split("/"),[o,s]=n.split(":"),[a,l]=r.split(":");if(!o||o.toLowerCase()!=="eip155")throw new ba({reason:"Only EIP-155 supported"});if(!s)throw new ba({reason:"Chain ID not found"});if(!l)throw new ba({reason:"Contract address not found"});if(!i)throw new ba({reason:"Token ID not found"});if(!a)throw new ba({reason:"ERC namespace not found"});return{chainID:parseInt(s),namespace:a.toLowerCase(),contractAddress:l,tokenID:i}}async function J9(e,{nft:t}){if(t.namespace==="erc721")return Ei(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if(t.namespace==="erc1155")return Ei(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new H9({namespace:t.namespace})}async function X9(e,{gatewayUrls:t,record:n}){return/eip155:/i.test(n)?e_(e,{gatewayUrls:t,record:n}):Qg({uri:n,gatewayUrls:t})}async function e_(e,{gatewayUrls:t,record:n}){const r=Y9(n),i=await J9(e,{nft:r}),{uri:o,isOnChain:s,isEncoded:a}=I5({uri:i,gatewayUrls:t});if(s&&(o.includes("data:application/json;base64,")||o.startsWith("{"))){const c=a?atob(o.replace("data:application/json;base64,","")):o,u=JSON.parse(c);return Qg({uri:N5(u),gatewayUrls:t})}let l=r.tokenID;return r.namespace==="erc1155"&&(l=l.replace("0x","").padStart(64,"0")),Q9({gatewayUrls:t,uri:o.replace(/(?:0x)?{id}/,l)})}async function R5(e,{blockNumber:t,blockTag:n,name:r,key:i,universalResolverAddress:o}){let s=o;if(!s){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");s=Zs({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{const a=await ce(e,Ei)({address:s,abi:S5,functionName:"resolve",args:[Mr(Df(r)),Ni({abi:S2,functionName:"text",args:[Pu(r),i]})],blockNumber:t,blockTag:n});if(a[0]==="0x")return null;const l=ea({abi:S2,functionName:"text",data:a[0]});return l===""?null:l}catch(a){if(Kg(a,"resolve"))return null;throw a}}async function t_(e,{blockNumber:t,blockTag:n,gatewayUrls:r,name:i,universalResolverAddress:o}){const s=await ce(e,R5)({blockNumber:t,blockTag:n,key:"avatar",name:i,universalResolverAddress:o});if(!s)return null;try{return await X9(e,{record:s,gatewayUrls:r})}catch{return null}}async function n_(e,{address:t,blockNumber:n,blockTag:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Zs({blockNumber:n,chain:e.chain,contract:"ensUniversalResolver"})}const s=`${t.toLowerCase().substring(2)}.addr.reverse`;try{return(await ce(e,Ei)({address:o,abi:g9,functionName:"reverse",args:[Mr(Df(s))],blockNumber:n,blockTag:r}))[0]}catch(a){if(Kg(a,"reverse"))return null;throw a}}async function r_(e,{blockNumber:t,blockTag:n,name:r,universalResolverAddress:i}){let o=i;if(!o){if(!e.chain)throw new Error("client chain not configured. universalResolverAddress is required.");o=Zs({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}const[s]=await ce(e,Ei)({address:o,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[Mr(Df(r))],blockNumber:t,blockTag:n});return s}async function i_(e){const t=_f(e,{method:"eth_newBlockFilter"}),n=await e.request({method:"eth_newBlockFilter"});return{id:n,request:t(n),type:"block"}}async function M5(e,{address:t,args:n,event:r,events:i,fromBlock:o,strict:s,toBlock:a}={}){const l=i??(r?[r]:void 0),c=_f(e,{method:"eth_newFilter"});let u=[];l&&(u=[l.flatMap(h=>wc({abi:[h],eventName:h.name,args:n}))],r&&(u=u[0]));const d=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:typeof o=="bigint"?ge(o):o,toBlock:typeof a=="bigint"?ge(a):a,...u.length?{topics:u}:{}}]});return{abi:l,args:n,eventName:r?r.name:void 0,fromBlock:o,id:d,request:c(d),strict:s,toBlock:a,type:"event"}}async function B5(e){const t=_f(e,{method:"eth_newPendingTransactionFilter"}),n=await e.request({method:"eth_newPendingTransactionFilter"});return{id:n,request:t(n),type:"transaction"}}async function o_(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n?ge(n):void 0,o=await e.request({method:"eth_getBalance",params:[t,i||r]});return BigInt(o)}async function s_(e,{blockHash:t,blockNumber:n,blockTag:r="latest"}={}){const i=n!==void 0?ge(n):void 0;let o;return t?o=await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):o=await e.request({method:"eth_getBlockTransactionCountByNumber",params:[i||r]}),Mt(o)}async function a_(e,{address:t,blockNumber:n,blockTag:r="latest"}){const i=n!==void 0?ge(n):void 0,o=await e.request({method:"eth_getCode",params:[t,i||r]});if(o!=="0x")return o}function l_(e){var t;return{baseFeePerGas:e.baseFeePerGas.map(n=>BigInt(n)),gasUsedRatio:e.gasUsedRatio,oldestBlock:BigInt(e.oldestBlock),reward:(t=e.reward)==null?void 0:t.map(n=>n.map(r=>BigInt(r)))}}async function c_(e,{blockCount:t,blockNumber:n,blockTag:r="latest",rewardPercentiles:i}){const o=n?ge(n):void 0,s=await e.request({method:"eth_feeHistory",params:[ge(t),o||r,i]});return l_(s)}async function u_(e,{filter:t}){const n=t.strict??!1;return(await t.request({method:"eth_getFilterLogs",params:[t.id]})).map(i=>{var o;try{const{eventName:s,args:a}="abi"in t&&t.abi?bc({abi:t.abi,data:i.data,topics:i.topics,strict:n}):{eventName:void 0,args:void 0};return Gn(i,{args:a,eventName:s})}catch(s){let a,l;if(s instanceof mo||s instanceof Ys){if("strict"in t&&t.strict)return;a=s.abiItem.name,l=(o=s.abiItem.inputs)==null?void 0:o.some(c=>!("name"in c&&c.name))}return Gn(i,{args:l?[]:{},eventName:a})}}).filter(Boolean)}const d_=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,f_=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function h_({domain:e,message:t,primaryType:n,types:r}){const i=typeof e>"u"?{}:e,o={EIP712Domain:W5({domain:i}),...r};z5({domain:i,message:t,primaryType:n,types:o});const s=["0x1901"];return i&&s.push(p_({domain:i,types:o})),n!=="EIP712Domain"&&s.push(j5({data:t,primaryType:n,types:o})),Ut(kr(s))}function p_({domain:e,types:t}){return j5({data:e,primaryType:"EIP712Domain",types:t})}function j5({data:e,primaryType:t,types:n}){const r=L5({data:e,primaryType:t,types:n});return Ut(r)}function L5({data:e,primaryType:t,types:n}){const r=[{type:"bytes32"}],i=[g_({primaryType:t,types:n})];for(const o of n[t]){const[s,a]=F5({types:n,name:o.name,type:o.type,value:e[o.name]});r.push(s),i.push(a)}return gc(r,i)}function g_({primaryType:e,types:t}){const n=Mr(m_({primaryType:e,types:t}));return Ut(n)}function m_({primaryType:e,types:t}){let n="";const r=U5({primaryType:e,types:t});r.delete(e);const i=[e,...Array.from(r).sort()];for(const o of i)n+=`${o}(${t[o].map(({name:s,type:a})=>`${a} ${s}`).join(",")})`;return n}function U5({primaryType:e,types:t},n=new Set){const r=e.match(/^\w*/u),i=r==null?void 0:r[0];if(n.has(i)||t[i]===void 0)return n;n.add(i);for(const o of t[i])U5({primaryType:o.type,types:t},n);return n}function F5({types:e,name:t,type:n,value:r}){if(e[n]!==void 0)return[{type:"bytes32"},Ut(L5({data:r,primaryType:n,types:e}))];if(n==="bytes")return r=`0x${(r.length%2?"0":"")+r.slice(2)}`,[{type:"bytes32"},Ut(r)];if(n==="string")return[{type:"bytes32"},Ut(Mr(r))];if(n.lastIndexOf("]")===n.length-1){const i=n.slice(0,n.lastIndexOf("[")),o=r.map(s=>F5({name:t,type:i,types:e,value:s}));return[{type:"bytes32"},Ut(gc(o.map(([s])=>s),o.map(([,s])=>s)))]}return[{type:n},r]}function z5({domain:e,message:t,primaryType:n,types:r}){const i=r,o=(s,a)=>{for(const l of s){const{name:c,type:u}=l,d=u,h=a[c],p=d.match(f_);if(p&&(typeof h=="number"||typeof h=="bigint")){const[E,b,g]=p;ge(h,{signed:b==="int",size:parseInt(g)/8})}if(d==="address"&&typeof h=="string"&&!_s(h))throw new Sl({address:h});const w=d.match(d_);if(w){const[E,b]=w;if(b&&mt(h)!==parseInt(b))throw new qE({expectedSize:parseInt(b),givenSize:mt(h)})}const x=i[d];x&&o(x,h)}};if(i.EIP712Domain&&e&&o(i.EIP712Domain,e),n!=="EIP712Domain"){const s=i[n];o(s,t)}}function W5({domain:e}){return[typeof(e==null?void 0:e.name)=="string"&&{name:"name",type:"string"},(e==null?void 0:e.version)&&{name:"version",type:"string"},typeof(e==null?void 0:e.chainId)=="number"&&{name:"chainId",type:"uint256"},(e==null?void 0:e.verifyingContract)&&{name:"verifyingContract",type:"address"},(e==null?void 0:e.salt)&&{name:"salt",type:"bytes32"}].filter(Boolean)}const F0="/docs/contract/encodeDeployData";function H5({abi:e,args:t,bytecode:n}){if(!t||t.length===0)return n;const r=e.find(o=>"type"in o&&o.type==="constructor");if(!r)throw new LE({docsPath:F0});if(!("inputs"in r))throw new g2({docsPath:F0});if(!r.inputs||r.inputs.length===0)throw new g2({docsPath:F0});const i=gc(r.inputs,t);return $g([n,i])}function w_(e,t){const n=(()=>typeof e=="string"?Sr(e):e.raw instanceof Uint8Array?e.raw:xi(e.raw))(),r=Sr(`Ethereum Signed Message:
${n.length}`);return Ut(kr([r,n]),t)}function y_(e,t){let[n,r="0"]=e.split(".");const i=n.startsWith("-");if(i&&(n=n.slice(1)),r=r.replace(/(0+)$/,""),t===0)Math.round(+`.${r}`)===1&&(n=`${BigInt(n)+1n}`),r="";else if(r.length>t){const[o,s,a]=[r.slice(0,t-1),r.slice(t-1,t),r.slice(t)],l=Math.round(+`${s}.${a}`);l>9?r=`${BigInt(o)+BigInt(1)}0`.padStart(o.length+1,"0"):r=`${o}${l}`,r.length>t&&(r=r.slice(1),n=`${BigInt(n)+1n}`),r=r.slice(0,t)}else r=r.padEnd(t,"0");return BigInt(`${i?"-":""}${n}${r}`)}function v_(e,t="wei"){return y_(e,i5[t])}function b_(e){return e.map(t=>({...t,value:BigInt(t.value)}))}function x_(e){return{...e,balance:e.balance?BigInt(e.balance):void 0,nonce:e.nonce?Mt(e.nonce):void 0,storageProof:e.storageProof?b_(e.storageProof):void 0}}async function C_(e,{address:t,blockNumber:n,blockTag:r,storageKeys:i}){const o=r??"latest",s=n!==void 0?ge(n):void 0,a=await e.request({method:"eth_getProof",params:[t,i,s||o]});return x_(a)}async function E_(e,{address:t,blockNumber:n,blockTag:r="latest",slot:i}){const o=n!==void 0?ge(n):void 0;return await e.request({method:"eth_getStorageAt",params:[t,i,o||r]})}async function Yg(e,{blockHash:t,blockNumber:n,blockTag:r,hash:i,index:o}){var u,d,h;const s=r||"latest",a=n!==void 0?ge(n):void 0;let l=null;if(i?l=await e.request({method:"eth_getTransactionByHash",params:[i]}):t?l=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,ge(o)]}):(a||s)&&(l=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[a||s,ge(o)]})),!l)throw new y5({blockHash:t,blockNumber:n,blockTag:s,hash:i,index:o});return(((h=(d=(u=e.chain)==null?void 0:u.formatters)==null?void 0:d.transaction)==null?void 0:h.format)||yf)(l)}async function __(e,{hash:t,transactionReceipt:n}){const[r,i]=await Promise.all([ce(e,Cc)({}),t?ce(e,Yg)({hash:t}):void 0]),o=(n==null?void 0:n.blockNumber)||(i==null?void 0:i.blockNumber);return o?r-o+1n:0n}async function Ip(e,{hash:t}){var i,o,s;const n=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!n)throw new v5({hash:t});return(((s=(o=(i=e.chain)==null?void 0:i.formatters)==null?void 0:o.transactionReceipt)==null?void 0:s.format)||r5)(n)}async function S_(e,t){var x;const{allowFailure:n=!0,batchSize:r,blockNumber:i,blockTag:o,contracts:s,multicallAddress:a}=t,l=r??(typeof((x=e.batch)==null?void 0:x.multicall)=="object"&&e.batch.multicall.batchSize||1024);let c=a;if(!c){if(!e.chain)throw new Error("client chain not configured. multicallAddress is required.");c=Zs({blockNumber:i,chain:e.chain,contract:"multicall3"})}const u=[[]];let d=0,h=0;for(let E=0;E<s.length;E++){const{abi:b,address:g,args:v,functionName:C}=s[E];try{const _=Ni({abi:b,args:v,functionName:C});h+=(_.length-2)/2,l>0&&h>l&&u[d].length>0&&(d++,h=(_.length-2)/2,u[d]=[]),u[d]=[...u[d],{allowFailure:!0,callData:_,target:g}]}catch(_){const $=Ll(_,{abi:b,address:g,args:v,docsPath:"/docs/contract/multicall",functionName:C});if(!n)throw $;u[d]=[...u[d],{allowFailure:!0,callData:"0x",target:g}]}}const p=await Promise.allSettled(u.map(E=>ce(e,Ei)({abi:kp,address:c,args:[E],blockNumber:i,blockTag:o,functionName:"aggregate3"}))),w=[];for(let E=0;E<p.length;E++){const b=p[E];if(b.status==="rejected"){if(!n)throw b.reason;for(let v=0;v<u[E].length;v++)w.push({status:"failure",error:b.reason,result:void 0});continue}const g=b.value;for(let v=0;v<g.length;v++){const{returnData:C,success:_}=g[v],{callData:$}=u[E][v],{abi:f,address:S,functionName:k,args:D}=s[w.length];try{if($==="0x")throw new Cf;if(!_)throw new Mg({data:C});const I=ea({abi:f,args:D,data:C,functionName:k});w.push(n?{result:I,status:"success"}:I)}catch(I){const W=Ll(I,{abi:f,address:S,args:D,docsPath:"/docs/contract/multicall",functionName:k});if(!n)throw W;w.push({error:W,result:void 0,status:"failure"})}}}if(w.length!==s.length)throw new X("multicall results mismatch");return w}const $_="0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572";/*! noble-curves - MIT License (c) 2022 Paul Miller (paulmillr.com) */BigInt(0);BigInt(1);BigInt(2);function P_(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function T_(e,t){const n=lr(e)?xi(e):e,r=lr(t)?xi(t):t;return P_(n,r)}async function V5(e,{address:t,hash:n,signature:r,...i}){const o=lr(r)?r:Mr(r);try{const{data:s}=await ce(e,Pf)({data:H5({abi:m9,args:[t,n,o],bytecode:$_}),...i});return T_(s??"0x0","0x1")}catch(s){if(s instanceof b5)return!1;throw s}}async function A_(e,{address:t,message:n,signature:r,...i}){const o=w_(n);return V5(e,{address:t,hash:o,signature:r,...i})}async function k_(e,{address:t,signature:n,message:r,primaryType:i,types:o,domain:s,...a}){const l=h_({message:r,primaryType:i,types:o,domain:s});return V5(e,{address:t,hash:l,signature:n,...a})}function q5(e,{emitOnBegin:t=!1,emitMissed:n=!1,onBlockNumber:r,onError:i,poll:o,pollingInterval:s=e.pollingInterval}){const a=typeof o<"u"?o:e.transport.type!=="webSocket";let l;return a?(()=>{const d=zt(["watchBlockNumber",e.uid,t,n,s]);return ta(d,{onBlockNumber:r,onError:i},h=>xc(async()=>{var p;try{const w=await ce(e,Cc)({cacheTime:0});if(l){if(w===l)return;if(w-l>1&&n)for(let x=l+1n;x<w;x++)h.onBlockNumber(x,l),l=x}(!l||w>l)&&(h.onBlockNumber(w,l),l=w)}catch(w){(p=h.onError)==null||p.call(h,w)}},{emitOnBegin:t,interval:s}))})():(()=>{let d=!0,h=()=>d=!1;return(async()=>{try{const{unsubscribe:p}=await e.transport.subscribe({params:["newHeads"],onData(w){var E;if(!d)return;const x=xr((E=w.result)==null?void 0:E.number);r(x,l),l=x},onError(w){i==null||i(w)}});h=p,d||h()}catch(p){i==null||i(p)}})(),h})()}async function D_(e,{confirmations:t=1,hash:n,onReplaced:r,pollingInterval:i=e.pollingInterval,timeout:o}){const s=zt(["waitForTransactionReceipt",e.uid,n]);let a,l,c,u=!1;return new Promise((d,h)=>{o&&setTimeout(()=>h(new Y7({hash:n})),o);const p=ta(s,{onReplaced:r,resolve:d,reject:h},w=>{const x=ce(e,q5)({emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:i,async onBlockNumber(E){if(u)return;let b=E;const g=v=>{x(),v(),p()};try{if(c){if(t>1&&(!c.blockNumber||b-c.blockNumber+1n<t))return;g(()=>w.resolve(c));return}if(a||(u=!0,await P5(async()=>{a=await ce(e,Yg)({hash:n}),a.blockNumber&&(b=a.blockNumber)},{delay:({count:v})=>~~(1<<v)*200,retryCount:6}),u=!1),c=await ce(e,Ip)({hash:n}),t>1&&(!c.blockNumber||b-c.blockNumber+1n<t))return;g(()=>w.resolve(c))}catch(v){if(a&&(v instanceof y5||v instanceof v5))try{l=a;const _=(await ce(e,Ci)({blockNumber:b,includeTransactions:!0})).transactions.find(({from:f,nonce:S})=>f===l.from&&S===l.nonce);if(!_||(c=await ce(e,Ip)({hash:_.hash}),t>1&&(!c.blockNumber||b-c.blockNumber+1n<t)))return;let $="replaced";_.to===l.to&&_.value===l.value?$="repriced":_.from===_.to&&_.value===0n&&($="cancelled"),g(()=>{var f;(f=w.onReplaced)==null||f.call(w,{reason:$,replacedTransaction:l,transaction:_,transactionReceipt:c}),w.resolve(c)})}catch(C){g(()=>w.reject(C))}else g(()=>w.reject(v))}}})})})}function O_(e,{blockTag:t="latest",emitMissed:n=!1,emitOnBegin:r=!1,onBlock:i,onError:o,includeTransactions:s,poll:a,pollingInterval:l=e.pollingInterval}){const c=typeof a<"u"?a:e.transport.type!=="webSocket",u=s??!1;let d;return c?(()=>{const w=zt(["watchBlocks",e.uid,n,r,u,l]);return ta(w,{onBlock:i,onError:o},x=>xc(async()=>{var E;try{const b=await ce(e,Ci)({blockTag:t,includeTransactions:u});if(b.number&&(d!=null&&d.number)){if(b.number===d.number)return;if(b.number-d.number>1&&n)for(let g=(d==null?void 0:d.number)+1n;g<b.number;g++){const v=await ce(e,Ci)({blockNumber:g,includeTransactions:u});x.onBlock(v,d),d=v}}(!(d!=null&&d.number)||t==="pending"&&!(b!=null&&b.number)||b.number&&b.number>d.number)&&(x.onBlock(b,d),d=b)}catch(b){(E=x.onError)==null||E.call(x,b)}},{emitOnBegin:r,interval:l}))})():(()=>{let w=!0,x=()=>w=!1;return(async()=>{try{const{unsubscribe:E}=await e.transport.subscribe({params:["newHeads"],onData(b){var C,_,$;if(!w)return;const v=((($=(_=(C=e.chain)==null?void 0:C.formatters)==null?void 0:_.block)==null?void 0:$.format)||Sg)(b.result);i(v,d),d=v},onError(b){o==null||o(b)}});x=E,w||x()}catch(E){o==null||o(E)}})(),x})()}function I_(e,{address:t,args:n,batch:r=!0,event:i,events:o,onError:s,onLogs:a,poll:l,pollingInterval:c=e.pollingInterval,strict:u}){const d=typeof l<"u"?l:e.transport.type!=="webSocket",h=u??!1;return d?(()=>{const x=zt(["watchEvent",t,n,r,e.uid,i,c]);return ta(x,{onLogs:a,onError:s},E=>{let b,g,v=!1;const C=xc(async()=>{var _;if(!v){try{g=await ce(e,M5)({address:t,args:n,event:i,events:o,strict:h})}catch{}v=!0;return}try{let $;if(g)$=await ce(e,Tf)({filter:g});else{const f=await ce(e,Cc)({});b&&b!==f?$=await ce(e,Wg)({address:t,args:n,event:i,events:o,fromBlock:b+1n,toBlock:f}):$=[],b=f}if($.length===0)return;r?E.onLogs($):$.forEach(f=>E.onLogs([f]))}catch($){g&&$ instanceof wo&&(v=!1),(_=E.onError)==null||_.call(E,$)}},{emitOnBegin:!0,interval:c});return async()=>{g&&await ce(e,Af)({filter:g}),C()}})})():(()=>{let x=!0,E=()=>x=!1;return(async()=>{try{const b=o??(i?[i]:void 0);let g=[];b&&(g=[b.flatMap(C=>wc({abi:[C],eventName:C.name,args:n}))],i&&(g=g[0]));const{unsubscribe:v}=await e.transport.subscribe({params:["logs",{address:t,topics:g}],onData(C){var $;if(!x)return;const _=C.result;try{const{eventName:f,args:S}=bc({abi:b,data:_.data,topics:_.topics,strict:h}),k=Gn(_,{args:S,eventName:f});a([k])}catch(f){let S,k;if(f instanceof mo||f instanceof Ys){if(u)return;S=f.abiItem.name,k=($=f.abiItem.inputs)==null?void 0:$.some(I=>!("name"in I&&I.name))}const D=Gn(_,{args:k?[]:{},eventName:S});a([D])}},onError(C){s==null||s(C)}});E=v,x||E()}catch(b){s==null||s(b)}})(),E})()}function N_(e,{batch:t=!0,onError:n,onTransactions:r,poll:i,pollingInterval:o=e.pollingInterval}){return(typeof i<"u"?i:e.transport.type!=="webSocket")?(()=>{const c=zt(["watchPendingTransactions",e.uid,t,o]);return ta(c,{onTransactions:r,onError:n},u=>{let d;const h=xc(async()=>{var p;try{if(!d)try{d=await ce(e,B5)({});return}catch(x){throw h(),x}const w=await ce(e,Tf)({filter:d});if(w.length===0)return;t?u.onTransactions(w):w.forEach(x=>u.onTransactions([x]))}catch(w){(p=u.onError)==null||p.call(u,w)}},{emitOnBegin:!0,interval:o});return async()=>{d&&await ce(e,Af)({filter:d}),h()}})})():(()=>{let c=!0,u=()=>c=!1;return(async()=>{try{const{unsubscribe:d}=await e.transport.subscribe({params:["newPendingTransactions"],onData(h){if(!c)return;const p=h.result;r([p])},onError(h){n==null||n(h)}});u=d,c||u()}catch(d){n==null||n(d)}})(),u})()}function R_(e){return{call:t=>Pf(e,t),createBlockFilter:()=>i_(e),createContractEventFilter:t=>g5(e,t),createEventFilter:t=>M5(e,t),createPendingTransactionFilter:()=>B5(e),estimateContractGas:t=>d9(e,t),estimateGas:t=>zg(e,t),getBalance:t=>o_(e,t),getBlock:t=>Ci(e,t),getBlockNumber:t=>Cc(e,t),getBlockTransactionCount:t=>s_(e,t),getBytecode:t=>a_(e,t),getChainId:()=>Ul(e),getContractEvents:t=>E5(e,t),getEnsAddress:t=>z9(e,t),getEnsAvatar:t=>t_(e,t),getEnsName:t=>n_(e,t),getEnsResolver:t=>r_(e,t),getEnsText:t=>R5(e,t),getFeeHistory:t=>c_(e,t),estimateFeesPerGas:t=>c9(e,t),getFilterChanges:t=>Tf(e,t),getFilterLogs:t=>u_(e,t),getGasPrice:()=>Fg(e),getLogs:t=>Wg(e,t),getProof:t=>C_(e,t),estimateMaxPriorityFeePerGas:t=>l9(e,t),getStorageAt:t=>E_(e,t),getTransaction:t=>Yg(e,t),getTransactionConfirmations:t=>__(e,t),getTransactionCount:t=>C5(e,t),getTransactionReceipt:t=>Ip(e,t),multicall:t=>S_(e,t),prepareTransactionRequest:t=>$f(e,t),readContract:t=>Ei(e,t),sendRawTransaction:t=>Vg(e,t),simulateContract:t=>C9(e,t),verifyMessage:t=>A_(e,t),verifyTypedData:t=>k_(e,t),uninstallFilter:t=>Af(e,t),waitForTransactionReceipt:t=>D_(e,t),watchBlocks:t=>O_(e,t),watchBlockNumber:t=>q5(e,t),watchContractEvent:t=>A9(e,t),watchEvent:t=>I_(e,t),watchPendingTransactions:t=>N_(e,t)}}function Np(e){const{key:t="public",name:n="Public Client"}=e;return $5({...e,key:t,name:n,type:"publicClient"}).extend(R_)}function M_(e,{abi:t,args:n,bytecode:r,...i}){const o=H5({abi:t,args:n,bytecode:r});return qg(e,{...i,data:o})}async function B_(e){var n;return((n=e.account)==null?void 0:n.type)==="local"?[e.account.address]:(await e.request({method:"eth_accounts"})).map(r=>Ig(r))}async function j_(e){return await e.request({method:"wallet_getPermissions"})}async function L_(e){return(await e.request({method:"eth_requestAccounts"})).map(n=>Vn(n))}async function U_(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function F_(e,{account:t=e.account,message:n}){if(!t)throw new Xs({docsPath:"/docs/actions/wallet/signMessage"});const r=On(t);if(r.type==="local")return r.signMessage({message:n});const i=(()=>typeof n=="string"?Cg(n):n.raw instanceof Uint8Array?Mr(n.raw):n.raw)();return e.request({method:"personal_sign",params:[i,r.address]})}async function z_(e,t){var c,u,d,h;const{account:n=e.account,chain:r=e.chain,...i}=t;if(!n)throw new Xs({docsPath:"/docs/actions/wallet/signTransaction"});const o=On(n);vc({account:o,...t});const s=await ce(e,Ul)({});r!==null&&Y3({currentChainId:s,chain:r});const a=(r==null?void 0:r.formatters)||((c=e.chain)==null?void 0:c.formatters),l=((u=a==null?void 0:a.transactionRequest)==null?void 0:u.format)||vf;return o.type==="local"?o.signTransaction({...i,chainId:s},{serializer:(h=(d=e.chain)==null?void 0:d.serializers)==null?void 0:h.transaction}):await e.request({method:"eth_signTransaction",params:[{...l(i),chainId:ge(s),from:o.address}]})}async function W_(e,{account:t=e.account,domain:n,message:r,primaryType:i,types:o}){if(!t)throw new Xs({docsPath:"/docs/actions/wallet/signTypedData"});const s=On(t),a={EIP712Domain:W5({domain:n}),...o};if(z5({domain:n,message:r,primaryType:i,types:a}),s.type==="local")return s.signTypedData({domain:n,primaryType:i,types:a,message:r});const l=zt({domain:n??{},primaryType:i,types:a,message:r},(c,u)=>lr(u)?u.toLowerCase():u);return e.request({method:"eth_signTypedData_v4",params:[s.address,l]})}async function H_(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:ge(t)}]})}async function V_(e,t){return await e.request({method:"wallet_watchAsset",params:t})}function q_(e){return{addChain:t=>O9(e,t),deployContract:t=>M_(e,t),getAddresses:()=>B_(e),getChainId:()=>Ul(e),getPermissions:()=>j_(e),prepareTransactionRequest:t=>$f(e,t),requestAddresses:()=>L_(e),requestPermissions:t=>U_(e,t),sendRawTransaction:t=>Vg(e,t),sendTransaction:t=>qg(e,t),signMessage:t=>F_(e,t),signTransaction:t=>z_(e,t),signTypedData:t=>W_(e,t),switchChain:t=>H_(e,t),watchAsset:t=>V_(e,t),writeContract:t=>D9(e,t)}}function Jg(e){const{key:t="wallet",name:n="Wallet Client",transport:r}=e;return $5({...e,key:t,name:n,transport:o=>r({...o,retryCount:0}),type:"walletClient"}).extend(q_)}function G_(e,t={}){const{key:n="webSocket",name:r="WebSocket JSON-RPC",retryDelay:i}=t;return({chain:o,retryCount:s,timeout:a})=>{var d;const l=t.retryCount??s,c=a??t.timeout??1e4,u=e||((d=o==null?void 0:o.rpcUrls.default.webSocket)==null?void 0:d[0]);if(!u)throw new A5;return kf({key:n,name:r,async request({method:h,params:p}){const w={method:h,params:p},x=await U0(u),{error:E,result:b}=await gs.webSocketAsync(x,{body:w,timeout:c});if(E)throw new Bg({body:w,error:E,url:u});return b},retryCount:l,retryDelay:i,timeout:c,type:"webSocket"},{getSocket(){return U0(u)},async subscribe({params:h,onData:p,onError:w}){const x=await U0(u),{result:E}=await new Promise((b,g)=>gs.webSocket(x,{body:{method:"eth_subscribe",params:h},onResponse(v){if(v.error){g(v.error),w==null||w(v.error);return}if(typeof v.id=="number"){b(v);return}v.method==="eth_subscription"&&p(v.params)}}));return{subscriptionId:E,async unsubscribe(){return new Promise(b=>gs.webSocket(x,{body:{method:"eth_unsubscribe",params:[E]},onResponse:b}))}}}})}}const K_=xg({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0}),Qa=xg({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}});var G5=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},Gi=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}};function fd(e){return typeof e=="string"?Number.parseInt(e,e.trim().substring(0,2)==="0x"?16:10):typeof e=="bigint"?Number(e):e}var K5={exports:{}};(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}Object.create&&(r.prototype=Object.create(null),new r().__proto__||(n=!1));function i(l,c,u){this.fn=l,this.context=c,this.once=u||!1}function o(l,c,u,d,h){if(typeof u!="function")throw new TypeError("The listener must be a function");var p=new i(u,d||l,h),w=n?n+c:c;return l._events[w]?l._events[w].fn?l._events[w]=[l._events[w],p]:l._events[w].push(p):(l._events[w]=p,l._eventsCount++),l}function s(l,c){--l._eventsCount===0?l._events=new r:delete l._events[c]}function a(){this._events=new r,this._eventsCount=0}a.prototype.eventNames=function(){var c=[],u,d;if(this._eventsCount===0)return c;for(d in u=this._events)t.call(u,d)&&c.push(n?d.slice(1):d);return Object.getOwnPropertySymbols?c.concat(Object.getOwnPropertySymbols(u)):c},a.prototype.listeners=function(c){var u=n?n+c:c,d=this._events[u];if(!d)return[];if(d.fn)return[d.fn];for(var h=0,p=d.length,w=new Array(p);h<p;h++)w[h]=d[h].fn;return w},a.prototype.listenerCount=function(c){var u=n?n+c:c,d=this._events[u];return d?d.fn?1:d.length:0},a.prototype.emit=function(c,u,d,h,p,w){var x=n?n+c:c;if(!this._events[x])return!1;var E=this._events[x],b=arguments.length,g,v;if(E.fn){switch(E.once&&this.removeListener(c,E.fn,void 0,!0),b){case 1:return E.fn.call(E.context),!0;case 2:return E.fn.call(E.context,u),!0;case 3:return E.fn.call(E.context,u,d),!0;case 4:return E.fn.call(E.context,u,d,h),!0;case 5:return E.fn.call(E.context,u,d,h,p),!0;case 6:return E.fn.call(E.context,u,d,h,p,w),!0}for(v=1,g=new Array(b-1);v<b;v++)g[v-1]=arguments[v];E.fn.apply(E.context,g)}else{var C=E.length,_;for(v=0;v<C;v++)switch(E[v].once&&this.removeListener(c,E[v].fn,void 0,!0),b){case 1:E[v].fn.call(E[v].context);break;case 2:E[v].fn.call(E[v].context,u);break;case 3:E[v].fn.call(E[v].context,u,d);break;case 4:E[v].fn.call(E[v].context,u,d,h);break;default:if(!g)for(_=1,g=new Array(b-1);_<b;_++)g[_-1]=arguments[_];E[v].fn.apply(E[v].context,g)}}return!0},a.prototype.on=function(c,u,d){return o(this,c,u,d,!1)},a.prototype.once=function(c,u,d){return o(this,c,u,d,!0)},a.prototype.removeListener=function(c,u,d,h){var p=n?n+c:c;if(!this._events[p])return this;if(!u)return s(this,p),this;var w=this._events[p];if(w.fn)w.fn===u&&(!h||w.once)&&(!d||w.context===d)&&s(this,p);else{for(var x=0,E=[],b=w.length;x<b;x++)(w[x].fn!==u||h&&!w[x].once||d&&w[x].context!==d)&&E.push(w[x]);E.length?this._events[p]=E.length===1?E[0]:E:s(this,p)}return this},a.prototype.removeAllListeners=function(c){var u;return c?(u=n?n+c:c,this._events[u]&&s(this,u)):(this._events=new r,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=n,a.EventEmitter=a,e.exports=a})(K5);var Z_=K5.exports;const Q_=Xd(Z_);var Xg=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},Oe=(e,t,n)=>(Xg(e,t,"read from private field"),n?n.call(e):t.get(e)),qt=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},Fl=(e,t,n,r)=>(Xg(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),xt=(e,t,n)=>(Xg(e,t,"access private method"),n),em=class extends Q_{constructor({chains:e=[Qa,K_],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){const{default:t,...n}=e.blockExplorers??{};if(t)return[t.url,...Object.values(n).map(r=>r.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}};function Y_(e){var n;if(!e)return"Injected";const t=r=>{if(r.isApexWallet)return"Apex Wallet";if(r.isAvalanche)return"Core Wallet";if(r.isBackpack)return"Backpack";if(r.isBifrost)return"Bifrost Wallet";if(r.isBitKeep)return"BitKeep";if(r.isBitski)return"Bitski";if(r.isBlockWallet)return"BlockWallet";if(r.isBraveWallet)return"Brave Wallet";if(r.isCoin98)return"Coin98 Wallet";if(r.isCoinbaseWallet)return"Coinbase Wallet";if(r.isDawn)return"Dawn Wallet";if(r.isDefiant)return"Defiant";if(r.isDesig)return"Desig Wallet";if(r.isEnkrypt)return"Enkrypt";if(r.isExodus)return"Exodus";if(r.isFordefi)return"Fordefi";if(r.isFrame)return"Frame";if(r.isFrontier)return"Frontier Wallet";if(r.isGamestop)return"GameStop Wallet";if(r.isHaqqWallet)return"HAQQ Wallet";if(r.isHyperPay)return"HyperPay Wallet";if(r.isImToken)return"ImToken";if(r.isHaloWallet)return"Halo Wallet";if(r.isKuCoinWallet)return"KuCoin Wallet";if(r.isMathWallet)return"MathWallet";if(r.isNovaWallet)return"Nova Wallet";if(r.isOkxWallet||r.isOKExWallet)return"OKX Wallet";if(r.isOneInchIOSWallet||r.isOneInchAndroidWallet)return"1inch Wallet";if(r.isOpera)return"Opera";if(r.isPhantom)return"Phantom";if(r.isPortal)return"Ripio Portal";if(r.isRabby)return"Rabby Wallet";if(r.isRainbow)return"Rainbow";if(r.isStatus)return"Status";if(r.isSubWallet)return"SubWallet";if(r.isTalisman)return"Talisman";if(r.isTally)return"Taho";if(r.isTokenPocket)return"TokenPocket";if(r.isTokenary)return"Tokenary";if(r.isTrust||r.isTrustWallet)return"Trust Wallet";if(r.isTTWallet)return"TTWallet";if(r.isXDEFI)return"XDEFI Wallet";if(r.isZeal)return"Zeal";if(r.isZerion)return"Zerion";if(r.isMetaMask)return"MetaMask"};if((n=e.providers)!=null&&n.length){const r=new Set;let i=1;for(const s of e.providers){let a=t(s);a||(a=`Unknown Wallet #${i}`,i+=1),r.add(a)}const o=[...r];return o.length?o:o[0]??"Injected"}return t(e)??"Injected"}var Tu,tm=class extends em{constructor({chains:e,options:t}={}){const n={shimDisconnect:!0,getProvider(){if(typeof window>"u")return;const i=window.ethereum;return i!=null&&i.providers?i.providers[0]:i},...t};super({chains:e,options:n}),this.id="injected",qt(this,Tu,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=i=>{i.length===0?this.emit("disconnect"):this.emit("change",{account:Vn(i[0])})},this.onChainChanged=i=>{const o=fd(i),s=this.isChainUnsupported(o);this.emit("change",{chain:{id:o,unsupported:s}})},this.onDisconnect=async i=>{var o;i.code===1013&&await this.getProvider()&&await this.getAccount()||(this.emit("disconnect"),this.options.shimDisconnect&&((o=this.storage)==null||o.removeItem(this.shimDisconnectKey)))};const r=n.getProvider();if(typeof n.name=="string")this.name=n.name;else if(r){const i=Y_(r);n.name?this.name=n.name(i):typeof i=="string"?this.name=i:this.name=i[0]}else this.name="Injected";this.ready=!!r}async connect({chainId:e}={}){var t;try{const n=await this.getProvider();if(!n)throw new Gi;n.on&&(n.on("accountsChanged",this.onAccountsChanged),n.on("chainChanged",this.onChainChanged),n.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});const r=await n.request({method:"eth_requestAccounts"}),i=Vn(r[0]);let o=await this.getChainId(),s=this.isChainUnsupported(o);return e&&o!==e&&(o=(await this.switchChain(e)).id,s=this.isChainUnsupported(o)),this.options.shimDisconnect&&((t=this.storage)==null||t.setItem(this.shimDisconnectKey,!0)),{account:i,chain:{id:o,unsupported:s}}}catch(n){throw this.isUserRejectedRequestError(n)?new Zt(n):n.code===-32002?new $s(n):n}}async disconnect(){var t;const e=await this.getProvider();e!=null&&e.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&((t=this.storage)==null||t.removeItem(this.shimDisconnectKey)))}async getAccount(){const e=await this.getProvider();if(!e)throw new Gi;const t=await e.request({method:"eth_accounts"});return Vn(t[0])}async getChainId(){const e=await this.getProvider();if(!e)throw new Gi;return e.request({method:"eth_chainId"}).then(fd)}async getProvider(){const e=this.options.getProvider();return e&&Fl(this,Tu,e),Oe(this,Tu)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Jg({account:n,chain:r,transport:Gg(t)})}async isAuthorized(){var e;try{if(this.options.shimDisconnect&&!((e=this.storage)!=null&&e.getItem(this.shimDisconnectKey)))return!1;if(!await this.getProvider())throw new Gi;return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r,i,o;const t=await this.getProvider();if(!t)throw new Gi;const n=ge(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),new Promise(s=>this.on("change",({chain:a})=>{(a==null?void 0:a.id)===e&&s()}))]),this.chains.find(s=>s.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(s){const a=this.chains.find(l=>l.id===e);if(!a)throw new G5({chainId:e,connectorId:this.id});if(s.code===4902||((i=(r=s==null?void 0:s.data)==null?void 0:r.originalError)==null?void 0:i.code)===4902)try{if(await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:a.name,nativeCurrency:a.nativeCurrency,rpcUrls:[((o=a.rpcUrls.public)==null?void 0:o.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(a)}]}),await this.getChainId()!==e)throw new Zt(new Error("User rejected switch after adding network."));return a}catch(l){throw new Zt(l)}throw this.isUserRejectedRequestError(s)?new Zt(s):new Dr(s)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){const i=await this.getProvider();if(!i)throw new Gi;return i.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}isUserRejectedRequestError(e){return e.code===4001}};Tu=new WeakMap;var nm=(e,t,n)=>{if(!t.has(e))throw TypeError("Cannot "+n)},z0=(e,t,n)=>(nm(e,t,"read from private field"),n?n.call(e):t.get(e)),W0=(e,t,n)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,n)},iu=(e,t,n,r)=>(nm(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),J_=(e,t,n)=>(nm(e,t,"access private method"),n);const X_=e=>(t,n,r)=>{const i=r.subscribe;return r.subscribe=(s,a,l)=>{let c=s;if(a){const u=(l==null?void 0:l.equalityFn)||Object.is;let d=s(r.getState());c=h=>{const p=s(h);if(!u(d,p)){const w=d;a(d=p,w)}},l!=null&&l.fireImmediately&&a(d,d)}return i(c)},e(t,n,r)},eS=X_;function tS(e,t){let n;try{n=e()}catch{return}return{getItem:i=>{var o;const s=l=>l===null?null:JSON.parse(l,t==null?void 0:t.reviver),a=(o=n.getItem(i))!=null?o:null;return a instanceof Promise?a.then(s):s(a)},setItem:(i,o)=>n.setItem(i,JSON.stringify(o,t==null?void 0:t.replacer)),removeItem:i=>n.removeItem(i)}}const zl=e=>t=>{try{const n=e(t);return n instanceof Promise?n:{then(r){return zl(r)(n)},catch(r){return this}}}catch(n){return{then(r){return this},catch(r){return zl(r)(n)}}}},nS=(e,t)=>(n,r,i)=>{let o={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:E=>E,version:0,merge:(E,b)=>({...b,...E}),...t},s=!1;const a=new Set,l=new Set;let c;try{c=o.getStorage()}catch{}if(!c)return e((...E)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...E)},r,i);const u=zl(o.serialize),d=()=>{const E=o.partialize({...r()});let b;const g=u({state:E,version:o.version}).then(v=>c.setItem(o.name,v)).catch(v=>{b=v});if(b)throw b;return g},h=i.setState;i.setState=(E,b)=>{h(E,b),d()};const p=e((...E)=>{n(...E),d()},r,i);let w;const x=()=>{var E;if(!c)return;s=!1,a.forEach(g=>g(r()));const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,r()))||void 0;return zl(c.getItem.bind(c))(o.name).then(g=>{if(g)return o.deserialize(g)}).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var v;return w=o.merge(g,(v=r())!=null?v:p),n(w,!0),d()}).then(()=>{b==null||b(w,void 0),s=!0,l.forEach(g=>g(w))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:E=>{o={...o,...E},E.getStorage&&(c=E.getStorage())},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>x(),hasHydrated:()=>s,onHydrate:E=>(a.add(E),()=>{a.delete(E)}),onFinishHydration:E=>(l.add(E),()=>{l.delete(E)})},x(),w||p},rS=(e,t)=>(n,r,i)=>{let o={storage:tS(()=>localStorage),partialize:x=>x,version:0,merge:(x,E)=>({...E,...x}),...t},s=!1;const a=new Set,l=new Set;let c=o.storage;if(!c)return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`),n(...x)},r,i);const u=()=>{const x=o.partialize({...r()});return c.setItem(o.name,{state:x,version:o.version})},d=i.setState;i.setState=(x,E)=>{d(x,E),u()};const h=e((...x)=>{n(...x),u()},r,i);let p;const w=()=>{var x,E;if(!c)return;s=!1,a.forEach(g=>{var v;return g((v=r())!=null?v:h)});const b=((E=o.onRehydrateStorage)==null?void 0:E.call(o,(x=r())!=null?x:h))||void 0;return zl(c.getItem.bind(c))(o.name).then(g=>{if(g)if(typeof g.version=="number"&&g.version!==o.version){if(o.migrate)return o.migrate(g.state,g.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return g.state}).then(g=>{var v;return p=o.merge(g,(v=r())!=null?v:h),n(p,!0),u()}).then(()=>{b==null||b(p,void 0),p=r(),s=!0,l.forEach(g=>g(p))}).catch(g=>{b==null||b(void 0,g)})};return i.persist={setOptions:x=>{o={...o,...x},x.storage&&(c=x.storage)},clearStorage:()=>{c==null||c.removeItem(o.name)},getOptions:()=>o,rehydrate:()=>w(),hasHydrated:()=>s,onHydrate:x=>(a.add(x),()=>{a.delete(x)}),onFinishHydration:x=>(l.add(x),()=>{l.delete(x)})},o.skipHydration||w(),p||h},iS=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?nS(e,t):rS(e,t),oS=iS,D2=e=>{let t;const n=new Set,r=(l,c)=>{const u=typeof l=="function"?l(t):l;if(!Object.is(u,t)){const d=t;t=c??typeof u!="object"?u:Object.assign({},t,u),n.forEach(h=>h(t,d))}},i=()=>t,a={setState:r,getState:i,subscribe:l=>(n.add(l),()=>n.delete(l)),destroy:()=>{n.clear()}};return t=e(r,i,a),a},sS=e=>e?D2(e):D2;function rm(e,t){if(Object.is(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(const[r,i]of e)if(!Object.is(i,t.get(r)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(const r of e)if(!t.has(r))return!1;return!0}const n=Object.keys(e);if(n.length!==Object.keys(t).length)return!1;for(let r=0;r<n.length;r++)if(!Object.prototype.hasOwnProperty.call(t,n[r])||!Object.is(e[n[r]],t[n[r]]))return!1;return!0}function aS(e,t,{batch:n={multicall:{wait:32}},pollingInterval:r=4e3,rank:i,retryCount:o,retryDelay:s,stallTimeout:a}={}){if(!e.length)throw new Error("must have at least one chain");let l=[];const c={},u={};for(const d of e){let h=!1;for(const p of t){const w=p(d);w&&(h=!0,l.some(({id:x})=>x===d.id)||(l=[...l,w.chain]),c[d.id]=[...c[d.id]||[],...w.rpcUrls.http],w.rpcUrls.webSocket&&(u[d.id]=[...u[d.id]||[],...w.rpcUrls.webSocket]))}if(!h)throw new Error([`Could not find valid provider configuration for chain "${d.name}".
`,"You may need to add `jsonRpcProvider` to `configureChains` with the chain's RPC URLs.","Read more: https://wagmi.sh/core/providers/jsonRpc"].join(`
`))}return{chains:l,publicClient:({chainId:d})=>{const h=l.find(x=>x.id===d)??e[0],p=c[h.id];if(!p||!p[0])throw new Error(`No providers configured for chain "${h.id}"`);const w=Np({batch:n,chain:h,transport:T2(p.map(x=>D5(x,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:l})},webSocketPublicClient:({chainId:d})=>{const h=l.find(x=>x.id===d)??e[0],p=u[h.id];if(!p||!p[0])return;const w=Np({batch:n,chain:h,transport:T2(p.map(x=>G_(x,{timeout:a})),{rank:i,retryCount:o,retryDelay:s}),pollingInterval:r});return Object.assign(w,{chains:l})}}}var lS=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},cS=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},uS=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},dS=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}};function Rp(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;let n,r;if(Array.isArray(e)&&Array.isArray(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Rp(e[r],t[r]))return!1;return!0}if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();const i=Object.keys(e);if(n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;for(r=n;r--!==0;){const o=i[r];if(o&&!Rp(e[o],t[o]))return!1}return!0}return e!==e&&t!==t}var Mp=(e,{find:t,replace:n})=>e&&t(e)?n(e):typeof e!="object"?e:Array.isArray(e)?e.map(r=>Mp(r,{find:t,replace:n})):e instanceof Object?Object.entries(e).reduce((r,[i,o])=>({...r,[i]:Mp(o,{find:t,replace:n})}),{}):e;function fS(e){const t=JSON.parse(e);return Mp(t,{find:r=>typeof r=="string"&&r.startsWith("#bigint."),replace:r=>BigInt(r.replace("#bigint.",""))})}function O2(e){return typeof e=="number"?e:e==="wei"?0:Math.abs(RE[e])}function I2(e,t){return e.slice(0,t).join(".")||"."}function N2(e,t){const{length:n}=e;for(let r=0;r<n;++r)if(e[r]===t)return r+1;return 0}function hS(e,t){const n=typeof e=="function",r=typeof t=="function",i=[],o=[];return function(a,l){if(typeof l=="object")if(i.length){const c=N2(i,this);c===0?i[i.length]=this:(i.splice(c),o.splice(c)),o[o.length]=a;const u=N2(i,l);if(u!==0)return r?t.call(this,a,l,I2(o,u)):`[ref=${I2(o,u)}]`}else i[0]=l,o[0]=a;return n?e.call(this,a,l):l}}function pS(e,t,n,r){return JSON.stringify(e,hS((i,o)=>{const s=typeof o=="bigint"?`#bigint.${o.toString()}`:o;return(t==null?void 0:t(i,s))||s},r),n??void 0)}var Z5={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function Q5({deserialize:e=fS,key:t="wagmi",serialize:n=pS,storage:r}){return{...r,getItem:(i,o=null)=>{const s=r.getItem(`${t}.${i}`);try{return s?e(s):o}catch(a){return console.warn(a),o}},setItem:(i,o)=>{if(o===null)r.removeItem(`${t}.${i}`);else try{r.setItem(`${t}.${i}`,n(o))}catch(s){console.error(s)}},removeItem:i=>r.removeItem(`${t}.${i}`)}}var R2="store",zo,Na,Bp,Y5,gS=class{constructor({autoConnect:e=!1,connectors:t=[new tm],publicClient:n,storage:r=Q5({storage:typeof window<"u"?window.localStorage:Z5}),logger:i={warn:console.warn},webSocketPublicClient:o}){var c,u;W0(this,Bp),this.publicClients=new Map,this.webSocketPublicClients=new Map,W0(this,zo,void 0),W0(this,Na,void 0),this.args={autoConnect:e,connectors:t,logger:i,publicClient:n,storage:r,webSocketPublicClient:o};let s="disconnected",a;if(e)try{const d=r.getItem(R2),h=(c=d==null?void 0:d.state)==null?void 0:c.data;s=h!=null&&h.account?"reconnecting":"connecting",a=(u=h==null?void 0:h.chain)==null?void 0:u.id}catch{}const l=typeof t=="function"?t():t;l.forEach(d=>d.setStorage(r)),this.store=sS(eS(oS(()=>({connectors:l,publicClient:this.getPublicClient({chainId:a}),status:s,webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}),{name:R2,storage:r,partialize:d=>{var h,p;return{...e&&{data:{account:(h=d==null?void 0:d.data)==null?void 0:h.account,chain:(p=d==null?void 0:d.data)==null?void 0:p.chain}},chains:d==null?void 0:d.chains}},version:2}))),this.storage=r,iu(this,Na,r==null?void 0:r.getItem("wallet")),J_(this,Bp,Y5).call(this),e&&typeof window<"u"&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){var e,t;return(t=(e=this.data)==null?void 0:e.chain)==null?void 0:t.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){const t=typeof e=="function"?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){var e,t;this.connector&&await((t=(e=this.connector).disconnect)==null?void 0:t.call(e)),iu(this,zo,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(z0(this,zo))return;iu(this,zo,!0),this.setState(n=>{var r;return{...n,status:(r=n.data)!=null&&r.account?"reconnecting":"connecting"}});const e=z0(this,Na)?[...this.connectors].sort(n=>n.id===z0(this,Na)?-1:1):this.connectors;let t=!1;for(const n of e){if(!n.ready||!n.isAuthorized||!await n.isAuthorized())continue;const i=await n.connect();this.setState(o=>({...o,connector:n,chains:n==null?void 0:n.chains,data:i,status:"connected"})),t=!0;break}return t||this.setState(n=>({...n,data:void 0,status:"disconnected"})),iu(this,zo,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};const t=typeof e=="function"?e():e;t.forEach(n=>n.setStorage(this.args.storage)),this.setState(n=>({...n,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.publicClients.get(e??-1),t))return t;const{publicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,this.publicClients.set(e??-1,t),t}setPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(i=>({...i,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&(t==null?void 0:t.chain.id)===e||(t=this.webSocketPublicClients.get(e??-1),t))return t;const{webSocketPublicClient:n}=this.args;return t=typeof n=="function"?n({chainId:e}):n,t&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){var n,r;const t=(r=(n=this.data)==null?void 0:n.chain)==null?void 0:r.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(i=>({...i,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){var t;(t=this.storage)==null||t.setItem("wallet",e)}};zo=new WeakMap;Na=new WeakMap;Bp=new WeakSet;Y5=function(){const e=a=>{this.setState(l=>({...l,data:{...l.data,...a}}))},t=()=>{this.clearState()},n=a=>{this.setState(l=>({...l,error:a}))};this.store.subscribe(({connector:a})=>a,(a,l)=>{var c,u,d,h,p,w;(c=l==null?void 0:l.off)==null||c.call(l,"change",e),(u=l==null?void 0:l.off)==null||u.call(l,"disconnect",t),(d=l==null?void 0:l.off)==null||d.call(l,"error",n),a&&((h=a.on)==null||h.call(a,"change",e),(p=a.on)==null||p.call(a,"disconnect",t),(w=a.on)==null||w.call(a,"error",n))});const{publicClient:r,webSocketPublicClient:i}=this.args;(typeof r=="function"||typeof i=="function")&&this.store.subscribe(({data:a})=>{var l;return(l=a==null?void 0:a.chain)==null?void 0:l.id},a=>{this.setState(l=>({...l,publicClient:this.getPublicClient({chainId:a}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:a})}))})};var jp;function mS(e){const t=new gS(e);return jp=t,t}function fn(){if(!jp)throw new Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return jp}async function M2({chainId:e,connector:t}){const n=fn(),r=n.connector;if(r&&t.id===r.id)throw new cS;try{n.setState(o=>({...o,status:"connecting"}));const i=await t.connect({chainId:e});return n.setLastUsedConnector(t.id),n.setState(o=>({...o,connector:t,chains:t==null?void 0:t.chains,data:i,status:"connected"})),n.storage.setItem("connected",!0),{...i,connector:t}}catch(i){throw n.setState(o=>({...o,status:o.connector?"connected":"disconnected"})),i}}async function J5(){const e=fn();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}var wS=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],yS=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function Or({chainId:e}={}){const t=fn();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function X5({chainId:e}={}){var r,i;return await((i=(r=fn().connector)==null?void 0:r.getWalletClient)==null?void 0:i.call(r,{chainId:e}))||null}function vS(e,t){const n=fn(),r=async()=>t(Or(e));return n.subscribe(({publicClient:o})=>o,r)}function bS({chainId:e},t){const n=fn(),r=async({chainId:o})=>{if(e&&o&&e!==o)return;const s=await X5({chainId:e});return fn().connector?t(s):t(null)};return n.subscribe(({data:o,connector:s})=>{var a;return{account:o==null?void 0:o.account,chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,connector:s}},r,{equalityFn:rm})}async function xS({chainId:e,contracts:t,blockNumber:n,blockTag:r,...i}){const o=Or({chainId:e});if(!o.chains)throw new uS;if(e&&o.chain.id!==e)throw new lS({chainId:e});return o.multicall({allowFailure:i.allowFailure??!0,blockNumber:n,blockTag:r,contracts:t})}async function CS({address:e,account:t,chainId:n,abi:r,args:i,functionName:o,blockNumber:s,blockTag:a}){return Or({chainId:n}).readContract({abi:r,address:e,account:t,functionName:o,args:i,blockNumber:s,blockTag:a})}async function ES({contracts:e,blockNumber:t,blockTag:n,...r}){const{allowFailure:i=!0}=r;try{const o=Or(),s=e.reduce((u,d,h)=>{const p=d.chainId??o.chain.id;return{...u,[p]:[...u[p]||[],{contract:d,index:h}]}},{}),a=()=>Object.entries(s).map(([u,d])=>xS({allowFailure:i,chainId:parseInt(u),contracts:d.map(({contract:h})=>h),blockNumber:t,blockTag:n})),l=(await Promise.all(a())).flat(),c=Object.values(s).flatMap(u=>u.map(({index:d})=>d));return l.reduce((u,d,h)=>(u&&(u[c[h]]=d),u),[])}catch(o){if(o instanceof Rg)throw o;const s=()=>e.map(a=>CS({...a,blockNumber:t,blockTag:n}));return i?(await Promise.allSettled(s())).map(a=>a.status==="fulfilled"?{result:a.value,status:"success"}:{error:a.reason,result:void 0,status:"failure"}):await Promise.all(s())}}async function _S({address:e,chainId:t,formatUnits:n,token:r}){const i=fn(),o=Or({chainId:t});if(r){const c=async({abi:u})=>{const d={abi:u,address:r,chainId:t},[h,p,w]=await ES({allowFailure:!1,contracts:[{...d,functionName:"balanceOf",args:[e]},{...d,functionName:"decimals"},{...d,functionName:"symbol"}]});return{decimals:p,formatted:sd(h??"0",O2(n??p)),symbol:w,value:h}};try{return await c({abi:wS})}catch(u){if(u instanceof Rg){const{symbol:d,...h}=await c({abi:yS});return{symbol:t5(so(d,{dir:"right"})),...h}}throw u}}const s=[...i.publicClient.chains||[],...i.chains??[]],a=await o.getBalance({address:e}),l=s.find(c=>c.id===o.chain.id);return{decimals:(l==null?void 0:l.nativeCurrency.decimals)??18,formatted:sd(a??"0",O2(n??18)),symbol:(l==null?void 0:l.nativeCurrency.symbol)??"ETH",value:a}}function hd(){const{data:e,connector:t,status:n}=fn();switch(n){case"connected":return{address:e==null?void 0:e.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:n};case"reconnecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!!(e!=null&&e.account),isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:n};case"connecting":return{address:e==null?void 0:e.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:n};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:n}}}function pd(){var i,o,s,a;const e=fn(),t=(o=(i=e.data)==null?void 0:i.chain)==null?void 0:o.id,n=e.chains??[],r=[...((s=e.publicClient)==null?void 0:s.chains)||[],...n].find(l=>l.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...r,...(a=e.data)==null?void 0:a.chain,id:t}:void 0,chains:n}}async function e4({chainId:e}){const{connector:t}=fn();if(!t)throw new Gi;if(!t.switchChain)throw new dS({connector:t});return t.switchChain(e)}function t4(e,{selector:t=n=>n}={}){const n=fn(),r=()=>e(hd());return n.subscribe(({data:o,connector:s,status:a})=>t({address:o==null?void 0:o.account,connector:s,status:a}),r,{equalityFn:rm})}function n4(e,{selector:t=n=>n}={}){const n=fn(),r=()=>e(pd());return n.subscribe(({data:o,chains:s})=>{var a;return t({chainId:(a=o==null?void 0:o.chain)==null?void 0:a.id,chains:s})},r,{equalityFn:rm})}async function SS({name:e,chainId:t}){const{normalize:n}=await Ps(()=>import("./index2.js"),[]);return await Or({chainId:t}).getEnsAvatar({name:n(e)})}async function $S({address:e,chainId:t}){return Or({chainId:t}).getEnsName({address:Vn(e)})}const PS=Symbol(),B2=Object.getPrototypeOf,Lp=new WeakMap,TS=e=>e&&(Lp.has(e)?Lp.get(e):B2(e)===Object.prototype||B2(e)===Array.prototype),AS=e=>TS(e)&&e[PS]||null,j2=(e,t=!0)=>{Lp.set(e,t)},H0=e=>typeof e=="object"&&e!==null,Gr=new WeakMap,Ra=new WeakSet,kS=(e=Object.is,t=(c,u)=>new Proxy(c,u),n=c=>H0(c)&&!Ra.has(c)&&(Array.isArray(c)||!(Symbol.iterator in c))&&!(c instanceof WeakMap)&&!(c instanceof WeakSet)&&!(c instanceof Error)&&!(c instanceof Number)&&!(c instanceof Date)&&!(c instanceof String)&&!(c instanceof RegExp)&&!(c instanceof ArrayBuffer),r=c=>{switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:throw c}},i=new WeakMap,o=(c,u,d=r)=>{const h=i.get(c);if((h==null?void 0:h[0])===u)return h[1];const p=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c));return j2(p,!0),i.set(c,[u,p]),Reflect.ownKeys(c).forEach(w=>{if(Object.getOwnPropertyDescriptor(p,w))return;const x=Reflect.get(c,w),E={value:x,enumerable:!0,configurable:!0};if(Ra.has(x))j2(x,!1);else if(x instanceof Promise)delete E.value,E.get=()=>d(x);else if(Gr.has(x)){const[b,g]=Gr.get(x);E.value=o(b,g(),d)}Object.defineProperty(p,w,E)}),Object.preventExtensions(p)},s=new WeakMap,a=[1,1],l=c=>{if(!H0(c))throw new Error("object required");const u=s.get(c);if(u)return u;let d=a[0];const h=new Set,p=(k,D=++a[0])=>{d!==D&&(d=D,h.forEach(I=>I(k,D)))};let w=a[1];const x=(k=++a[1])=>(w!==k&&!h.size&&(w=k,b.forEach(([D])=>{const I=D[1](k);I>d&&(d=I)})),d),E=k=>(D,I)=>{const W=[...D];W[1]=[k,...W[1]],p(W,I)},b=new Map,g=(k,D)=>{if(h.size){const I=D[3](E(k));b.set(k,[D,I])}else b.set(k,[D])},v=k=>{var D;const I=b.get(k);I&&(b.delete(k),(D=I[1])==null||D.call(I))},C=k=>(h.add(k),h.size===1&&b.forEach(([I,W],J)=>{const F=I[3](E(J));b.set(J,[I,F])}),()=>{h.delete(k),h.size===0&&b.forEach(([I,W],J)=>{W&&(W(),b.set(J,[I]))})}),_=Array.isArray(c)?[]:Object.create(Object.getPrototypeOf(c)),f=t(_,{deleteProperty(k,D){const I=Reflect.get(k,D);v(D);const W=Reflect.deleteProperty(k,D);return W&&p(["delete",[D],I]),W},set(k,D,I,W){const J=Reflect.has(k,D),F=Reflect.get(k,D,W);if(J&&(e(F,I)||s.has(I)&&e(F,s.get(I))))return!0;v(D),H0(I)&&(I=AS(I)||I);let L=I;if(I instanceof Promise)I.then(R=>{I.status="fulfilled",I.value=R,p(["resolve",[D],R])}).catch(R=>{I.status="rejected",I.reason=R,p(["reject",[D],R])});else{!Gr.has(I)&&n(I)&&(L=l(I));const R=!Ra.has(L)&&Gr.get(L);R&&g(D,R)}return Reflect.set(k,D,L,W),p(["set",[D],I,F]),!0}});s.set(c,f);const S=[_,x,o,C];return Gr.set(f,S),Reflect.ownKeys(c).forEach(k=>{const D=Object.getOwnPropertyDescriptor(c,k);"value"in D&&(f[k]=c[k],delete D.value,delete D.writable),Object.defineProperty(_,k,D)}),f})=>[l,Gr,Ra,e,t,n,r,i,o,s,a],[DS]=kS();function gn(e={}){return DS(e)}function na(e,t,n){const r=Gr.get(e);let i;const o=[],s=r[3];let a=!1;const c=s(u=>{if(o.push(u),n){t(o.splice(0));return}i||(i=Promise.resolve().then(()=>{i=void 0,a&&t(o.splice(0))}))});return a=!0,()=>{a=!1,c()}}function PB(e,t){const n=Gr.get(e),[r,i,o]=n;return o(r,i(),t)}function gd(e){return Ra.add(e),e}function hr(e,t,n,r){let i=e[t];return na(e,()=>{const o=e[t];Object.is(i,o)||n(i=o)},r)}var r4={exports:{}},i4={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ts=z;function OS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var IS=typeof Object.is=="function"?Object.is:OS,NS=Ts.useState,RS=Ts.useEffect,MS=Ts.useLayoutEffect,BS=Ts.useDebugValue;function jS(e,t){var n=t(),r=NS({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return MS(function(){i.value=n,i.getSnapshot=t,V0(i)&&o({inst:i})},[e,n,t]),RS(function(){return V0(i)&&o({inst:i}),e(function(){V0(i)&&o({inst:i})})},[e]),BS(n),n}function V0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!IS(e,n)}catch{return!0}}function LS(e,t){return t()}var US=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?LS:jS;i4.useSyncExternalStore=Ts.useSyncExternalStore!==void 0?Ts.useSyncExternalStore:US;r4.exports=i4;var im=r4.exports;const Ma={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},se={isMobile(){return typeof window<"u"?!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)):!1},isAndroid(){const e=navigator.userAgent.toLowerCase();return se.isMobile()&&e.includes("android")},isIos(){const e=navigator.userAgent.toLowerCase();return se.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient(){return typeof window<"u"},isPairingExpired(e){return e?e-Date.now()<=Ma.TEN_SEC_MS:!0},isAllowedRetry(e){return Date.now()-e>=Ma.ONE_SEC_MS},copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry(){return Date.now()+Ma.FOUR_MINUTES_MS},getPlainAddress(e){return e.split(":")[2]},async wait(e){return new Promise(t=>{setTimeout(t,e)})},debounce(e,t=500){let n;return(...r)=>{function i(){e(...r)}n&&clearTimeout(n),n=setTimeout(i,t)}},isHttpUrl(e){return e.startsWith("http://")||e.startsWith("https://")},formatNativeUrl(e,t){if(se.isHttpUrl(e))return this.formatUniversalUrl(e,t);let n=e;n.includes("://")||(n=e.replaceAll("/","").replaceAll(":",""),n=`${n}://`),n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},formatUniversalUrl(e,t){if(!se.isHttpUrl(e))return this.formatNativeUrl(e,t);let n=e;n.endsWith("/")||(n=`${n}/`);const r=encodeURIComponent(t);return{redirect:`${n}wc?uri=${r}`,href:n}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){const t=new Promise((n,r)=>{const i=new Image;i.onload=n,i.onerror=r,i.crossOrigin="anonymous",i.src=e});return Promise.race([t,se.wait(2e3)])},formatBalance(e,t){var r;let n;if(e==="0")n="0.000";else if(typeof e=="string"){const i=Number(e);i&&(n=(r=i.toString().match(/^-?\d+(?:\.\d{0,3})?/u))==null?void 0:r[0])}return n?`${n} ${t}`:"0.000"},isRestrictedRegion(){try{const{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return Ma.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl(){return se.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com"},getBlockchainApiUrl(){return se.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com"},getAnalyticsUrl(){return se.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com"},getUUID(){return crypto!=null&&crypto.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{const t=Math.random()*16|0;return(e==="x"?t:t&3|8).toString(16)})}},lt=gn({isConnected:!1}),Me={state:lt,subscribe(e){return na(lt,()=>e(lt))},subscribeKey(e,t){return hr(lt,e,t)},setIsConnected(e){lt.isConnected=e},setCaipAddress(e){lt.caipAddress=e,lt.address=e?se.getPlainAddress(e):void 0},setBalance(e,t){lt.balance=e,lt.balanceSymbol=t},setProfileName(e){lt.profileName=e},setProfileImage(e){lt.profileImage=e},setAddressExplorerUrl(e){lt.addressExplorerUrl=e},resetAccount(){lt.isConnected=!1,lt.caipAddress=void 0,lt.address=void 0,lt.balance=void 0,lt.balanceSymbol=void 0,lt.profileName=void 0,lt.profileImage=void 0,lt.addressExplorerUrl=void 0}};class om{constructor({baseUrl:t}){this.baseUrl=t}async get({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).json()}async getBlob({headers:t,...n}){const r=this.createUrl(n);return(await fetch(r,{method:"GET",headers:t})).blob()}async post({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"POST",headers:n,body:t?JSON.stringify(t):void 0})).json()}async put({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"PUT",headers:n,body:t?JSON.stringify(t):void 0})).json()}async delete({body:t,headers:n,...r}){const i=this.createUrl(r);return(await fetch(i,{method:"DELETE",headers:n,body:t?JSON.stringify(t):void 0})).json()}createUrl({path:t,params:n}){const r=new URL(t,this.baseUrl);return n&&Object.entries(n).forEach(([i,o])=>{o&&r.searchParams.append(i,o)}),r}}const q0="WALLETCONNECT_DEEPLINK_CHOICE",L2="@w3m/recent",hi={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(q0,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{const e=localStorage.getItem(q0);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(q0)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{const t=hi.getRecentWallets();t.find(r=>r.id===e.id)||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(L2,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{const e=localStorage.getItem(L2);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},zr=gn({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),pi={state:zr,subscribeNetworkImages(e){return na(zr.networkImages,()=>e(zr.networkImages))},subscribeKey(e,t){return hr(zr,e,t)},setWalletImage(e,t){zr.walletImages[e]=t},setNetworkImage(e,t){zr.networkImages[e]=t},setConnectorImage(e,t){zr.connectorImages[e]=t},setTokenImage(e,t){zr.tokenImages[e]=t}},xa=gn({connectors:[]}),Un={state:xa,subscribeKey(e,t){return hr(xa,e,t)},setConnectors(e){xa.connectors=e.map(t=>gd(t))},addConnector(e){xa.connectors.push(gd(e))},getConnectors(){return xa.connectors}},Ca=gn({open:!1,selectedNetworkId:void 0}),As={state:Ca,subscribe(e){return na(Ca,()=>e(Ca))},set(e){Object.assign(Ca,{...Ca,...e})}},It=gn({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),Ze={state:It,subscribeKey(e,t){return hr(It,e,t)},_getClient(){if(!It._client)throw new Error("NetworkController client not set");return It._client},setClient(e){It._client=gd(e)},setCaipNetwork(e){It.caipNetwork=e,As.set({selectedNetworkId:e==null?void 0:e.id})},setDefaultCaipNetwork(e){It.caipNetwork=e,As.set({selectedNetworkId:e==null?void 0:e.id}),It.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){It.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){const e=await this._getClient().getApprovedCaipNetworksData();It.supportsAllNetworks=e.supportsAllNetworks,It.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),It.caipNetwork=e},resetNetwork(){It.isDefaultCaipNetwork||(It.caipNetwork=void 0),It.approvedCaipNetworkIds=void 0,It.supportsAllNetworks=!0}},vn=gn({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),Ve={state:vn,subscribeKey(e,t){return hr(vn,e,t)},setProjectId(e){vn.projectId=e},setIncludeWalletIds(e){vn.includeWalletIds=e},setExcludeWalletIds(e){vn.excludeWalletIds=e},setFeaturedWalletIds(e){vn.featuredWalletIds=e},setTokens(e){vn.tokens=e},setTermsConditionsUrl(e){vn.termsConditionsUrl=e},setPrivacyPolicyUrl(e){vn.privacyPolicyUrl=e},setCustomWallets(e){vn.customWallets=e},setEnableAnalytics(e){vn.enableAnalytics=e},setSdkVersion(e){vn.sdkVersion=e}},FS=se.getApiUrl(),Jn=new om({baseUrl:FS}),zS="40",U2="4",jt=gn({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),_e={state:jt,subscribeKey(e,t){return hr(jt,e,t)},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=Ve.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _fetchWalletImage(e){const t=`${Jn.baseUrl}/getWalletImage/${e}`,n=await Jn.getBlob({path:t,headers:_e._getApiHeaders()});pi.setWalletImage(e,URL.createObjectURL(n))},async _fetchNetworkImage(e){const t=`${Jn.baseUrl}/public/getAssetImage/${e}`,n=await Jn.getBlob({path:t,headers:_e._getApiHeaders()});pi.setNetworkImage(e,URL.createObjectURL(n))},async _fetchConnectorImage(e){const t=`${Jn.baseUrl}/public/getAssetImage/${e}`,n=await Jn.getBlob({path:t,headers:_e._getApiHeaders()});pi.setConnectorImage(e,URL.createObjectURL(n))},async fetchNetworkImages(){const{requestedCaipNetworks:e}=Ze.state,t=e==null?void 0:e.map(({imageId:n})=>n).filter(Boolean);t&&await Promise.allSettled(t.map(n=>_e._fetchNetworkImage(n)))},async fetchConnectorImages(){const{connectors:e}=Un.state,t=e.map(({imageId:n})=>n).filter(Boolean);await Promise.allSettled(t.map(n=>_e._fetchConnectorImage(n)))},async fetchFeaturedWallets(){const{featuredWalletIds:e}=Ve.state;if(e!=null&&e.length){const{data:t}=await Jn.get({path:"/getWallets",headers:_e._getApiHeaders(),params:{page:"1",entries:e!=null&&e.length?String(e.length):U2,include:e==null?void 0:e.join(",")}});t.sort((r,i)=>e.indexOf(r.id)-e.indexOf(i.id));const n=t.map(r=>r.image_id).filter(Boolean);await Promise.allSettled(n.map(r=>_e._fetchWalletImage(r))),jt.featured=t}},async fetchRecommendedWallets(){const{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:n}=Ve.state,r=[...t??[],...n??[]].filter(Boolean),{data:i,count:o}=await Jn.get({path:"/getWallets",headers:_e._getApiHeaders(),params:{page:"1",entries:U2,include:e==null?void 0:e.join(","),exclude:r==null?void 0:r.join(",")}}),s=hi.getRecentWallets(),a=i.map(c=>c.image_id).filter(Boolean),l=s.map(c=>c.image_id).filter(Boolean);await Promise.allSettled([...a,...l].map(c=>_e._fetchWalletImage(c))),jt.recommended=i,jt.count=o??0},async fetchWallets({page:e}){const{includeWalletIds:t,excludeWalletIds:n,featuredWalletIds:r}=Ve.state,i=[...jt.recommended.map(({id:l})=>l),...n??[],...r??[]].filter(Boolean),{data:o,count:s}=await Jn.get({path:"/getWallets",headers:_e._getApiHeaders(),params:{page:String(e),entries:zS,include:t==null?void 0:t.join(","),exclude:i.join(",")}}),a=o.map(l=>l.image_id).filter(Boolean);await Promise.allSettled([...a.map(l=>_e._fetchWalletImage(l)),se.wait(300)]),jt.wallets=[...jt.wallets,...o],jt.count=s>jt.count?s:jt.count,jt.page=e},async searchWallet({search:e}){const{includeWalletIds:t,excludeWalletIds:n}=Ve.state;jt.search=[];const{data:r}=await Jn.get({path:"/getWallets",headers:_e._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t==null?void 0:t.join(","),exclude:n==null?void 0:n.join(",")}}),i=r.map(o=>o.image_id).filter(Boolean);await Promise.allSettled([...i.map(o=>_e._fetchWalletImage(o)),se.wait(300)]),jt.search=r},prefetch(){jt.prefetchPromise=Promise.race([Promise.allSettled([_e.fetchFeaturedWallets(),_e.fetchRecommendedWallets(),_e.fetchNetworkImages(),_e.fetchConnectorImages()]),se.wait(3e3)])}},WS=se.getAnalyticsUrl(),HS=new om({baseUrl:WS}),VS=["MODAL_CREATED"],jo=gn({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),Ue={state:jo,subscribe(e){return na(jo,()=>e(jo))},_getApiHeaders(){const{projectId:e,sdkType:t,sdkVersion:n}=Ve.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":n}},async _sendAnalyticsEvent(e){try{if(VS.includes(e.data.event)||typeof window>"u")return;await HS.post({path:"/e",headers:Ue._getApiHeaders(),body:{eventId:se.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){jo.timestamp=Date.now(),jo.data=e,Ve.state.enableAnalytics&&Ue._sendAnalyticsEvent(jo)}},$t=gn({view:"Connect",history:["Connect"]}),be={state:$t,subscribeKey(e,t){return hr($t,e,t)},push(e,t){e!==$t.view&&($t.view=e,$t.history.push(e),$t.data=t)},reset(e){$t.view=e,$t.history=[e]},replace(e){$t.history.length>1&&$t.history.at(-1)!==e&&($t.view=e,$t.history[$t.history.length-1]=e)},goBack(){if($t.history.length>1){$t.history.pop();const[e]=$t.history.slice(-1);e&&($t.view=e)}}},ou=gn({open:!1}),_t={state:ou,subscribeKey(e,t){return hr(ou,e,t)},async open(e){await _e.state.prefetchPromise,e!=null&&e.view?be.reset(e.view):Me.state.isConnected?be.reset("Account"):be.reset("Connect"),ou.open=!0,As.set({open:!0}),Ue.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){ou.open=!1,As.set({open:!1}),Ue.sendEvent({type:"track",event:"MODAL_CLOSE"})}},bt=gn({wcError:!1,buffering:!1}),Ae={state:bt,subscribeKey(e,t){return hr(bt,e,t)},_getClient(){if(!bt._client)throw new Error("ConnectionController client not set");return bt._client},setClient(e){bt._client=gd(e)},connectWalletConnect(){bt.wcPromise=this._getClient().connectWalletConnect(e=>{bt.wcUri=e,bt.wcPairingExpiry=se.getPairingExpiry()})},async connectExternal(e){var t,n;await((n=(t=this._getClient()).connectExternal)==null?void 0:n.call(t,e))},checkInstalled(e){var t,n;return(n=(t=this._getClient()).checkInstalled)==null?void 0:n.call(t,e)},resetWcConnection(){bt.wcUri=void 0,bt.wcPairingExpiry=void 0,bt.wcPromise=void 0,bt.wcLinking=void 0,bt.recentWallet=void 0,hi.deleteWalletConnectDeepLink()},setWcLinking(e){bt.wcLinking=e},setWcError(e){bt.wcError=e,bt.buffering=!1},setRecentWallet(e){bt.recentWallet=e},setBuffering(e){bt.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},wr=gn({message:"",variant:"success",open:!1}),Fn={state:wr,subscribeKey(e,t){return hr(wr,e,t)},showSuccess(e){wr.message=e,wr.variant="success",wr.open=!0},showError(e){wr.message=e,wr.variant="error",wr.open=!0},hide(){wr.open=!1}},Lo=gn({themeMode:"dark",themeVariables:{}}),bn={state:Lo,subscribe(e){return na(Lo,()=>e(Lo))},setThemeMode(e){Lo.themeMode=e},setThemeVariables(e){Lo.themeVariables={...Lo.themeVariables,...e}}},qS=se.getBlockchainApiUrl(),GS=new om({baseUrl:qS}),KS={fetchIdentity({caipChainId:e,address:t}){return GS.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:Ve.state.projectId}})}},Et={getWalletImage(e){if(e!=null&&e.image_url)return e==null?void 0:e.image_url;if(e!=null&&e.image_id)return pi.state.walletImages[e.image_id]},getNetworkImage(e){if(e!=null&&e.imageUrl)return e==null?void 0:e.imageUrl;if(e!=null&&e.imageId)return pi.state.networkImages[e.imageId]},getConnectorImage(e){if(e!=null&&e.imageUrl)return e.imageUrl;if(e!=null&&e.imageId)return pi.state.connectorImages[e.imageId]}};/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Au=globalThis,sm=Au.ShadowRoot&&(Au.ShadyCSS===void 0||Au.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,am=Symbol(),F2=new WeakMap;let o4=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==am)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(sm&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=F2.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&F2.set(n,t))}return t}toString(){return this.cssText}};const er=e=>new o4(typeof e=="string"?e:e+"",void 0,am),ae=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new o4(n,e,am)},ZS=(e,t)=>{if(sm)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=Au.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},z2=sm?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return er(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:QS,defineProperty:YS,getOwnPropertyDescriptor:JS,getOwnPropertyNames:XS,getOwnPropertySymbols:e$,getPrototypeOf:t$}=Object,gi=globalThis,W2=gi.trustedTypes,n$=W2?W2.emptyScript:"",G0=gi.reactiveElementPolyfillSupport,Ya=(e,t)=>e,md={toAttribute(e,t){switch(t){case Boolean:e=e?n$:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},lm=(e,t)=>!QS(e,t),H2={attribute:!0,type:String,converter:md,reflect:!1,hasChanged:lm};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gi.litPropertyMetadata??(gi.litPropertyMetadata=new WeakMap);let Wo=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=H2){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&YS(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=JS(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??H2}static _$Ei(){if(this.hasOwnProperty(Ya("elementProperties")))return;const t=t$(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ya("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ya("properties"))){const n=this.properties,r=[...XS(n),...e$(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(z2(i))}else t!==void 0&&n.push(z2(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ZS(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:md).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:md;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??lm)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Wo.elementStyles=[],Wo.shadowRootOptions={mode:"open"},Wo[Ya("elementProperties")]=new Map,Wo[Ya("finalized")]=new Map,G0==null||G0({ReactiveElement:Wo}),(gi.reactiveElementVersions??(gi.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ja=globalThis,wd=Ja.trustedTypes,V2=wd?wd.createPolicy("lit-html",{createHTML:e=>e}):void 0,s4="$lit$",Yr=`lit$${(Math.random()+"").slice(9)}$`,a4="?"+Yr,r$=`<${a4}>`,yo=document,Wl=()=>yo.createComment(""),Hl=e=>e===null||typeof e!="object"&&typeof e!="function",l4=Array.isArray,i$=e=>l4(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",K0=`[ 	
\f\r]`,Ea=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q2=/-->/g,G2=/>/g,Fi=RegExp(`>|${K0}(?:([^\\s"'>=/]+)(${K0}*=${K0}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),K2=/'/g,Z2=/"/g,c4=/^(?:script|style|textarea|title)$/i,u4=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Q=u4(1),te=u4(2),vo=Symbol.for("lit-noChange"),st=Symbol.for("lit-nothing"),Q2=new WeakMap,Ji=yo.createTreeWalker(yo,129);function d4(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return V2!==void 0?V2.createHTML(t):t}const o$=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=Ea;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===Ea?u[1]==="!--"?s=q2:u[1]!==void 0?s=G2:u[2]!==void 0?(c4.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=Fi):u[3]!==void 0&&(s=Fi):s===Fi?u[0]===">"?(s=i??Ea,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?Fi:u[3]==='"'?Z2:K2):s===Z2||s===K2?s=Fi:s===q2||s===G2?s=Ea:(s=Fi,i=void 0);const p=s===Fi&&e[a+1].startsWith("/>")?" ":"";o+=s===Ea?l+r$:d>=0?(r.push(c),l.slice(0,d)+s4+l.slice(d)+Yr+p):l+Yr+(d===-2?a:p)}return[d4(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};let Up=class f4{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=o$(t,n);if(this.el=f4.createElement(c,r),Ji.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Ji.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(s4)){const h=u[s++],p=i.getAttribute(d).split(Yr),w=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:w[2],strings:p,ctor:w[1]==="."?a$:w[1]==="?"?l$:w[1]==="@"?c$:Of}),i.removeAttribute(d)}else d.startsWith(Yr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(c4.test(i.tagName)){const d=i.textContent.split(Yr),h=d.length-1;if(h>0){i.textContent=wd?wd.emptyScript:"";for(let p=0;p<h;p++)i.append(d[p],Wl()),Ji.nextNode(),l.push({type:2,index:++o});i.append(d[h],Wl())}}}else if(i.nodeType===8)if(i.data===a4)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Yr,d+1))!==-1;)l.push({type:7,index:o}),d+=Yr.length-1}o++}}static createElement(t,n){const r=yo.createElement("template");return r.innerHTML=t,r}};function ks(e,t,n=e,r){var s,a;if(t===vo)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=Hl(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=ks(e,i._$AS(e,t.values),i,r)),t}let s$=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??yo).importNode(n,!0);Ji.currentNode=i;let o=Ji.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new cm(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new u$(o,this,t)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Ji.nextNode(),s++)}return Ji.currentNode=yo,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},cm=class h4{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=st,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ks(this,t,n),Hl(t)?t===st||t==null||t===""?(this._$AH!==st&&this._$AR(),this._$AH=st):t!==this._$AH&&t!==vo&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):i$(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==st&&Hl(this._$AH)?this._$AA.nextSibling.data=t:this.$(yo.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Up.createElement(d4(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new s$(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=Q2.get(t.strings);return n===void 0&&Q2.set(t.strings,n=new Up(t)),n}T(t){l4(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new h4(this.k(Wl()),this.k(Wl()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},Of=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=st,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=st}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=ks(this,t,n,0),s=!Hl(t)||t!==this._$AH&&t!==vo,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=ks(this,a[r+l],n,l),c===vo&&(c=this._$AH[l]),s||(s=!Hl(c)||c!==this._$AH[l]),c===st?t=st:t!==st&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===st?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},a$=class extends Of{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===st?void 0:t}},l$=class extends Of{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==st)}},c$=class extends Of{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=ks(this,t,n,0)??st)===vo)return;const r=this._$AH,i=t===st&&r!==st||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==st&&(r===st||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},u$=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){ks(this,t)}};const Z0=Ja.litHtmlPolyfillSupport;Z0==null||Z0(Up,cm),(Ja.litHtmlVersions??(Ja.litHtmlVersions=[])).push("3.0.0");const d$=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new cm(t.insertBefore(Wl(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ue=class extends Wo{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=d$(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return vo}};var Dv;ue._$litElement$=!0,ue.finalized=!0,(Dv=globalThis.litElementHydrateSupport)==null||Dv.call(globalThis,{LitElement:ue});const Q0=globalThis.litElementPolyfillSupport;Q0==null||Q0({LitElement:ue});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");let Xa,mi,wi;function f$(e,t){Xa=document.createElement("style"),mi=document.createElement("style"),wi=document.createElement("style"),Xa.textContent=ms(e).core.cssText,mi.textContent=ms(e).dark.cssText,wi.textContent=ms(e).light.cssText,document.head.appendChild(Xa),document.head.appendChild(mi),document.head.appendChild(wi),p4(t)}function p4(e){mi&&wi&&(e==="light"?(mi.removeAttribute("media"),wi.media="enabled"):(wi.removeAttribute("media"),mi.media="enabled"))}function h$(e){Xa&&mi&&wi&&(Xa.textContent=ms(e).core.cssText,mi.textContent=ms(e).dark.cssText,wi.textContent=ms(e).light.cssText)}function ms(e){return{core:ae`
      :root {
        --w3m-color-mix-strength: ${er(e!=null&&e["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${er((e==null?void 0:e["--w3m-font-family"])||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${er((e==null?void 0:e["--w3m-font-size-master"])||"10px")};
        --w3m-border-radius-master: ${er((e==null?void 0:e["--w3m-border-radius-master"])||"4px")};
        --w3m-z-index: ${er((e==null?void 0:e["--w3m-z-index"])||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:ae`
      :root {
        --w3m-color-mix: ${er((e==null?void 0:e["--w3m-color-mix"])||"#fff")};
        --w3m-accent: ${er((e==null?void 0:e["--w3m-accent"])||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:ae`
      :root {
        --w3m-color-mix: ${er((e==null?void 0:e["--w3m-color-mix"])||"#000")};
        --w3m-accent: ${er((e==null?void 0:e["--w3m-accent"])||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}const he=ae`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,dt=ae`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,um=ae`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function p$(e,t){const{kind:n,elements:r}=t;return{kind:n,elements:r,finisher(i){customElements.get(e)||customElements.define(e,i)}}}function g$(e,t){return customElements.get(e)||customElements.define(e,t),t}function ee(e){return function(n){return typeof n=="function"?g$(e,n):p$(e,n)}}const m$=ae`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;var w$=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Fp=class extends ue{render(){return Q`<slot></slot>`}};Fp.styles=[he,m$];Fp=w$([ee("wui-card")],Fp);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y$={attribute:!0,type:String,converter:md,reflect:!1,hasChanged:lm},v$=(e=y$,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function M(e){return(t,n)=>typeof n=="object"?v$(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function dm(e){return M({...e,state:!0,attribute:!1})}const b$=ae`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`,x$=te`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,C$=te`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,E$=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,_$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,S$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,$$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,P$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,T$=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,A$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,k$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,D$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,O$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,I$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,N$=te`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,R$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,M$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,B$=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,j$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,L$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,U$=te` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,F$=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,z$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,W$=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,H$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,V$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,q$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,G$=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,K$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,Z$=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Q$=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,Y$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,J$=te`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,X$=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,eP=te`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tP=te`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,nP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,rP=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,iP=te` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,oP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,sP=te`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,aP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,lP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,cP=te`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,uP=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,dP=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,fP=te`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,hP=te`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,pP=te`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,gP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,mP=te`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,wP=te`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var If=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const yP={allWallets:x$,appStore:C$,chromeStore:N$,apple:E$,arrowBottom:_$,arrowLeft:S$,arrowRight:$$,arrowTop:P$,browser:T$,checkmark:A$,chevronBottom:k$,chevronLeft:D$,chevronRight:O$,chevronTop:I$,clock:R$,close:M$,compass:j$,coinPlaceholder:B$,copy:L$,cursor:U$,desktop:F$,disconnect:z$,discord:W$,etherscan:H$,extension:V$,externalLink:q$,facebook:G$,filters:K$,github:Z$,google:Q$,helpCircle:Y$,infoCircle:J$,mail:X$,mobile:eP,networkPlaceholder:tP,nftPlaceholder:nP,off:rP,playStore:iP,qrCode:oP,refresh:sP,search:aP,swapHorizontal:lP,swapVertical:cP,telegram:uP,twitch:dP,twitter:fP,twitterIcon:hP,wallet:gP,walletConnect:mP,walletPlaceholder:pP,warningCircle:wP};let Ds=class extends ue{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: ${`var(--wui-color-${this.color});`}
      --local-width: ${`var(--wui-icon-size-${this.size});`}
    `,Q`${yP[this.name]}`}};Ds.styles=[he,um,b$];If([M()],Ds.prototype,"size",void 0);If([M()],Ds.prototype,"name",void 0);If([M()],Ds.prototype,"color",void 0);Ds=If([ee("wui-icon")],Ds);const vP=ae`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`;var fm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Vl=class extends ue{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return Q`<img src=${this.src} alt=${this.alt} />`}};Vl.styles=[he,um,vP];fm([M()],Vl.prototype,"src",void 0);fm([M()],Vl.prototype,"alt",void 0);Vl=fm([ee("wui-image")],Vl);const bP=ae`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var xP=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zp=class extends ue{render(){return Q`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};zp.styles=[he,bP];zp=xP([ee("wui-loading-hexagon")],zp);const CP=ae`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`;var hm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ql=class extends ue{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,Q`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};ql.styles=[he,CP];hm([M()],ql.prototype,"color",void 0);hm([M()],ql.prototype,"size",void 0);ql=hm([ee("wui-loading-spinner")],ql);const EP=ae`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;var g4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let yd=class extends ue{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){const t=this.radius>50?50:this.radius,r=36-t,i=116+r,o=245+r,s=360+r*1.75;return Q`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${t}
          stroke-dasharray="${i} ${o}"
          stroke-dashoffset=${s}
        />
      </svg>
    `}};yd.styles=[he,EP];g4([M({type:Number})],yd.prototype,"radius",void 0);yd=g4([ee("wui-loading-thumbnail")],yd);const _P=ae`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`;var Nf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Os=class extends ue{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: ${`clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px)`};
    `,Q`<slot></slot>`}};Os.styles=[_P];Nf([M()],Os.prototype,"width",void 0);Nf([M()],Os.prototype,"height",void 0);Nf([M()],Os.prototype,"borderRadius",void 0);Os=Nf([ee("wui-shimmer")],Os);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},w4=e=>(...t)=>({_$litDirective$:e,values:t});let y4=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,r){this._$Ct=t,this._$AM=n,this._$Ci=r}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const SP=w4(class extends y4{constructor(e){var t;if(super(e),e.type!==m4.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var r,i;if(this.it===void 0){this.it=new Set,e.strings!==void 0&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!((r=this.st)!=null&&r.has(o))&&this.it.add(o);return this.render(t)}const n=e.element.classList;for(const o of this.it)o in t||(n.remove(o),this.it.delete(o));for(const o in t){const s=!!t[o];s===this.it.has(o)||(i=this.st)!=null&&i.has(o)||(s?(n.add(o),this.it.add(o)):(n.remove(o),this.it.delete(o)))}return vo}}),$P=ae`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`;var Rf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Is=class extends ue{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){const t={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,Q`<slot class=${SP(t)}></slot>`}};Is.styles=[he,$P];Rf([M()],Is.prototype,"variant",void 0);Rf([M()],Is.prototype,"color",void 0);Rf([M()],Is.prototype,"align",void 0);Is=Rf([ee("wui-text")],Is);const PP=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,TP=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,AP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,kP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,DP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,OP=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,IP=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,NP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,RP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,MP=te`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,BP=te`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,jP=te`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,LP=te`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,UP=ae`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`;var v4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const FP={browser:PP,dao:TP,defi:AP,defiAlt:kP,eth:DP,layers:OP,lock:IP,login:NP,network:RP,nft:MP,noun:BP,profile:jP,system:LP};let vd=class extends ue{constructor(){super(...arguments),this.name="browser"}render(){return Q`${FP[this.name]}`}};vd.styles=[he,UP];v4([M()],vd.prototype,"name",void 0);vd=v4([ee("wui-visual")],vd);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ao=e=>e??st,je={getSpacingStyles(e,t){if(Array.isArray(e))return e[t]?`var(--wui-spacing-${e[t]})`:void 0;if(typeof e=="string")return`var(--wui-spacing-${e})`},getFormattedDate(e){return new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e)},getHostName(e){return new URL(e).hostname},getTruncateString({string:e,charsStart:t,charsEnd:n,truncate:r}){return e.length<=t+n?e:r==="end"?`${e.substring(0,t)}...`:r==="start"?`...${e.substring(e.length-n)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(n))}`},generateAvatarColors(e){const n=e.toLowerCase().replace(/^0x/iu,"").substring(0,6),r=this.hexToRgb(n),i=[];for(let o=0;o<5;o+=1){const s=this.tintColor(r,.15*o);i.push(`rgb(${s[0]}, ${s[1]}, ${s[2]})`)}return`
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `},hexToRgb(e){const t=parseInt(e,16),n=t>>16&255,r=t>>8&255,i=t&255;return[n,r,i]},tintColor(e,t){const[n,r,i]=e,o=Math.round(n+(255-n)*t),s=Math.round(r+(255-r)*t),a=Math.round(i+(255-i)*t);return[o,s,a]},isNumber(e){return{number:/^[0-9]+$/u}.number.test(e)},getColorTheme(e){return e||(typeof window<"u"&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")}},zP=ae`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`;var mn=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Wt=class extends ue{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&je.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&je.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&je.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&je.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&je.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&je.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&je.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&je.getSpacingStyles(this.margin,3)};
    `,Q`<slot></slot>`}};Wt.styles=[he,zP];mn([M()],Wt.prototype,"flexDirection",void 0);mn([M()],Wt.prototype,"flexWrap",void 0);mn([M()],Wt.prototype,"flexBasis",void 0);mn([M()],Wt.prototype,"flexGrow",void 0);mn([M()],Wt.prototype,"flexShrink",void 0);mn([M()],Wt.prototype,"alignItems",void 0);mn([M()],Wt.prototype,"justifyContent",void 0);mn([M()],Wt.prototype,"columnGap",void 0);mn([M()],Wt.prototype,"rowGap",void 0);mn([M()],Wt.prototype,"gap",void 0);mn([M()],Wt.prototype,"padding",void 0);mn([M()],Wt.prototype,"margin",void 0);Wt=mn([ee("wui-flex")],Wt);const WP=ae`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`;var Mf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ns=class extends ue{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return Q`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",Q`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";const t=je.generateAvatarColors(this.address);return this.style.cssText=t,null}return this.dataset.variant="default",null}};Ns.styles=[he,WP];Mf([M()],Ns.prototype,"imageSrc",void 0);Mf([M()],Ns.prototype,"alt",void 0);Mf([M()],Ns.prototype,"address",void 0);Ns=Mf([ee("wui-avatar")],Ns);const HP=ae`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`;var Ri=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let cr=class extends ue{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let t="xxs";switch(this.size){case"lg":t="lg";break;case"md":t="md";break;case"mdl":t="mdl";break;case"sm":t="xs";break;default:t="xxs"}const n=this.size==="lg",r=n?"12%":"16%",i=n?"xxs":"3xl",o=this.background==="opaque",s=this.backgroundColor==="accent-100"&&o||this.backgroundColor==="success-100"&&o||this.backgroundColor==="error-100"&&o||this.backgroundColor==="inverse-100"&&o;return this.style.cssText=`
       --local-bg-value: ${s?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${s?"100%":r};
       --local-border-radius: var(--wui-border-radius-${i});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${this.borderColor==="wui-color-bg-125"?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,Q` <wui-icon color=${this.iconColor} size=${t} name=${this.icon}></wui-icon> `}};cr.styles=[he,dt,HP];Ri([M()],cr.prototype,"size",void 0);Ri([M()],cr.prototype,"backgroundColor",void 0);Ri([M()],cr.prototype,"iconColor",void 0);Ri([M()],cr.prototype,"background",void 0);Ri([M({type:Boolean})],cr.prototype,"border",void 0);Ri([M()],cr.prototype,"borderColor",void 0);Ri([M()],cr.prototype,"icon",void 0);cr=Ri([ee("wui-icon-box")],cr);const VP=ae`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`;var ko=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ir=class extends ue{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return Q`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${ao(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${je.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){const t=this.networkSrc?Q`<wui-image src=${this.networkSrc}></wui-image>`:Q`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return Q`
        ${t}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};Ir.styles=[he,dt,VP];ko([M()],Ir.prototype,"networkSrc",void 0);ko([M()],Ir.prototype,"avatarSrc",void 0);ko([M()],Ir.prototype,"balance",void 0);ko([M({type:Boolean})],Ir.prototype,"disabled",void 0);ko([M({type:Boolean})],Ir.prototype,"isProfileName",void 0);ko([M()],Ir.prototype,"address",void 0);Ir=ko([ee("wui-account-button")],Ir);const qP=ae`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`;var Ec=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let bo=class extends ue{constructor(){super(...arguments),this.size="md",this.name=""}render(){let t="xxs";return this.size==="lg"?t="m":this.size==="md"?t="xs":t="xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${t});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),Q` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?Q`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:Q`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};bo.styles=[he,qP];Ec([M()],bo.prototype,"size",void 0);Ec([M()],bo.prototype,"name",void 0);Ec([M()],bo.prototype,"imageSrc",void 0);Ec([M()],bo.prototype,"walletIcon",void 0);bo=Ec([ee("wui-wallet-image")],bo);const GP=ae`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`;var b4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Y0=4;let bd=class extends ue{constructor(){super(...arguments),this.walletImages=[]}render(){const t=this.walletImages.length<Y0;return Q`${this.walletImages.slice(0,Y0).map(({src:n,walletName:r})=>Q`
          <wui-wallet-image
            size="inherit"
            imageSrc=${n}
            name=${ao(r)}
          ></wui-wallet-image>
        `)}
    ${t?[...Array(Y0-this.walletImages.length)].map(()=>Q` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};bd.styles=[he,GP];b4([M({type:Array})],bd.prototype,"walletImages",void 0);bd=b4([ee("wui-all-wallets-image")],bd);const KP=ae`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`;var _c=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let xo=class extends ue{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${this.variant==="fullWidth"?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;const t=this.size==="md"?"paragraph-600":"small-600";return Q`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${t} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?Q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Q``}};xo.styles=[he,dt,KP];_c([M()],xo.prototype,"size",void 0);_c([M({type:Boolean})],xo.prototype,"disabled",void 0);_c([M({type:Boolean})],xo.prototype,"loading",void 0);_c([M()],xo.prototype,"variant",void 0);xo=_c([ee("wui-button")],xo);const x4=te`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`,ZP=ae`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`;var C4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let xd=class extends ue{constructor(){super(...arguments),this.type="wallet"}render(){return Q`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return this.type==="network"?Q` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${x4}`:Q`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};xd.styles=[he,dt,ZP];C4([M()],xd.prototype,"type",void 0);xd=C4([ee("wui-card-select-loader")],xd);const QP=te`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`,YP=ae`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`;var Sc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Co=class extends ue{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){const t=this.size==="lg";return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${t?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${t?"86px":"48px"};
      --local-height: ${t?"96px":"54px"};
      --local-icon-size: ${t?"42px":"24px"};
    `,Q`${this.templateVisual()} ${t?QP:x4}`}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:Q`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};Co.styles=[he,YP];Sc([M()],Co.prototype,"size",void 0);Sc([M()],Co.prototype,"name",void 0);Sc([M()],Co.prototype,"imageSrc",void 0);Sc([M({type:Boolean})],Co.prototype,"selected",void 0);Co=Sc([ee("wui-network-image")],Co);const JP=ae`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`;var ra=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _i=class extends ue{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return Q`
      <button data-selected=${ao(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return this.type==="network"?Q`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${ao(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:Q`
      <wui-wallet-image size="md" imageSrc=${ao(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};_i.styles=[he,dt,JP];ra([M()],_i.prototype,"name",void 0);ra([M()],_i.prototype,"type",void 0);ra([M()],_i.prototype,"imageSrc",void 0);ra([M({type:Boolean})],_i.prototype,"disabled",void 0);ra([M({type:Boolean})],_i.prototype,"selected",void 0);_i=ra([ee("wui-card-select")],_i);const XP=ae`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`;var ia=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Si=class extends ue{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){const t=this.variant==="transparent"?"small-600":"paragraph-600";return Q`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${t} color="inherit">
          ${je.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?Q`<wui-image src=${this.imageSrc}></wui-image>`:null}};Si.styles=[he,dt,XP];ia([M()],Si.prototype,"variant",void 0);ia([M()],Si.prototype,"imageSrc",void 0);ia([M({type:Boolean})],Si.prototype,"disabled",void 0);ia([M()],Si.prototype,"icon",void 0);ia([M()],Si.prototype,"href",void 0);Si=ia([ee("wui-chip")],Si);const eT=ae`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`;var pm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gl=class extends ue{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){const t=this.size==="md"?"paragraph-600":"small-600";return Q`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${t} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?Q`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};Gl.styles=[he,dt,eT];pm([M()],Gl.prototype,"size",void 0);pm([M({type:Boolean})],Gl.prototype,"loading",void 0);Gl=pm([ee("wui-connect-button")],Gl);const tT=ae`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var Bf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Rs=class extends ue{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return Q`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};Rs.styles=[he,dt,tT];Bf([M({type:Boolean})],Rs.prototype,"disabled",void 0);Bf([M()],Rs.prototype,"label",void 0);Bf([M()],Rs.prototype,"buttonLabel",void 0);Rs=Bf([ee("wui-cta-button")],Rs);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const nT=e=>e.strings===void 0;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const el=(e,t)=>{var r;const n=e._$AN;if(n===void 0)return!1;for(const i of n)(r=i._$AO)==null||r.call(i,t,!1),el(i,t);return!0},Cd=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while((n==null?void 0:n.size)===0)},E4=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),oT(t)}};function rT(e){this._$AN!==void 0?(Cd(this),this._$AM=e,E4(this)):this._$AM=e}function iT(e,t=!1,n=0){const r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let o=n;o<r.length;o++)el(r[o],!1),Cd(r[o]);else r!=null&&(el(r,!1),Cd(r));else el(this,e)}const oT=e=>{e.type==m4.CHILD&&(e._$AP??(e._$AP=iT),e._$AQ??(e._$AQ=rT))};let sT=class extends y4{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,n,r){super._$AT(t,n,r),E4(this),this.isConnected=t._$AU}_$AO(t,n=!0){var r,i;t!==this.isConnected&&(this.isConnected=t,t?(r=this.reconnected)==null||r.call(this):(i=this.disconnected)==null||i.call(this)),n&&(el(this,t),Cd(this))}setValue(t){if(nT(this._$Ct))this._$Ct._$AI(t,this);else{const n=[...this._$Ct._$AH];n[this._$Ci]=t,this._$Ct._$AI(n,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _4=()=>new aT;let aT=class{};const J0=new WeakMap,S4=w4(class extends sT{render(e){return st}update(e,[t]){var r;const n=t!==this.G;return n&&this.G!==void 0&&this.ot(void 0),(n||this.rt!==this.lt)&&(this.G=t,this.ct=(r=e.options)==null?void 0:r.host,this.ot(this.lt=e.element)),st}ot(e){if(typeof this.G=="function"){const t=this.ct??globalThis;let n=J0.get(t);n===void 0&&(n=new WeakMap,J0.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ct,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){var e,t;return typeof this.G=="function"?(e=J0.get(this.ct??globalThis))==null?void 0:e.get(this.G):(t=this.G)==null?void 0:t.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}}),lT=ae`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`;var Do=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nr=class extends ue{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=_4()}render(){const t=`wui-size-${this.size}`;return Q` ${this.templateIcon()}
      <input
        ${S4(this.inputElementRef)}
        class=${t}
        type=${this.type}
        enterkeyhint=${ao(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?Q`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){var t;this.dispatchEvent(new CustomEvent("inputChange",{detail:(t=this.inputElementRef.value)==null?void 0:t.value,bubbles:!0,composed:!0}))}};Nr.styles=[he,dt,lT];Do([M()],Nr.prototype,"size",void 0);Do([M()],Nr.prototype,"icon",void 0);Do([M({type:Boolean})],Nr.prototype,"disabled",void 0);Do([M()],Nr.prototype,"placeholder",void 0);Do([M()],Nr.prototype,"type",void 0);Do([M()],Nr.prototype,"keyHint",void 0);Nr=Do([ee("wui-input-text")],Nr);const cT=ae`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`;var $4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ed=class extends ue{render(){return Q`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?Q`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};Ed.styles=[he,cT];$4([M()],Ed.prototype,"errorMessage",void 0);Ed=$4([ee("wui-email-input")],Ed);const uT=ae`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`;var $c=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Eo=class extends ue{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};Eo.styles=[he,dt,um,uT];$c([M()],Eo.prototype,"size",void 0);$c([M({type:Boolean})],Eo.prototype,"disabled",void 0);$c([M()],Eo.prototype,"icon",void 0);$c([M()],Eo.prototype,"iconColor",void 0);Eo=$c([ee("wui-icon-link")],Eo);const dT=ae`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`;var P4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _d=class extends ue{constructor(){super(...arguments),this.icon="copy"}render(){return Q`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};_d.styles=[he,dt,dT];P4([M()],_d.prototype,"icon",void 0);_d=P4([ee("wui-input-element")],_d);const fT=ae`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`;var T4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Sd=class extends ue{constructor(){super(...arguments),this.disabled=!1}render(){return Q`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};Sd.styles=[he,dt,fT];T4([M({type:Boolean})],Sd.prototype,"disabled",void 0);Sd=T4([ee("wui-input-numeric")],Sd);const hT=ae`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`;var gm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kl=class extends ue{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};Kl.styles=[he,dt,hT];gm([M({type:Boolean})],Kl.prototype,"disabled",void 0);gm([M()],Kl.prototype,"color",void 0);Kl=gm([ee("wui-link")],Kl);const pT=ae`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`;var Br=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kn=class extends ue{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return Q`
      <button
        ?disabled=${this.loading?!0:!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${ao(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if(this.variant==="image"&&this.imageSrc)return Q`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if(this.iconVariant==="square"&&this.icon&&this.variant==="icon")return Q`<wui-icon name=${this.icon}></wui-icon>`;if(this.variant==="icon"&&this.icon&&this.iconVariant){const t=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",n=this.iconVariant==="square-blue"?"mdl":"md";return Q`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${t}
          backgroundColor=${t}
          size=${n}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?Q`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:Q``}chevronTemplate(){return this.chevron?Q`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};Kn.styles=[he,dt,pT];Br([M()],Kn.prototype,"icon",void 0);Br([M()],Kn.prototype,"variant",void 0);Br([M()],Kn.prototype,"iconVariant",void 0);Br([M({type:Boolean})],Kn.prototype,"disabled",void 0);Br([M()],Kn.prototype,"imageSrc",void 0);Br([M()],Kn.prototype,"alt",void 0);Br([M({type:Boolean})],Kn.prototype,"chevron",void 0);Br([M({type:Boolean})],Kn.prototype,"loading",void 0);Kn=Br([ee("wui-list-item")],Kn);const gT=ae`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`;var mm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const mT=["withdrawed","buy","cryptoSent","nftSent"],Y2=["deposited","received","bought","minted"],J2=["minted","bought","nftSent"],wT=["deposited","withdrawed","cryptoSent","buy","received"];let Zl=class extends ue{constructor(){super(...arguments),this.type="buy"}render(){let t="accent-100",n="arrowTop";return mT.includes(this.type)?(t="accent-100",n="arrowTop"):Y2.includes(this.type)&&J2.includes(this.type)||Y2.includes(this.type)&&wT.includes(this.type)?(t="success-100",n="arrowBottom"):(t="accent-100",n="swapVertical"),this.dataset.type=this.type,Q`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        .icon=${n}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:J2.includes(this.type)?Q`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:Q`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};Zl.styles=[he,gT];mm([M()],Zl.prototype,"type",void 0);mm([M()],Zl.prototype,"imageSrc",void 0);Zl=mm([ee("wui-transaction-visual")],Zl);const yT=ae`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`;var oa=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $i=class extends ue{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){const n=this.type==="nftSent"||this.type==="cryptoSent"?"Sent":this.type,r=je.getFormattedDate(this.date);return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${n}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${r}</wui-text>
      </button>
    `}};$i.styles=[he,dt,yT];oa([M()],$i.prototype,"type",void 0);oa([M({type:Boolean})],$i.prototype,"disabled",void 0);oa([M()],$i.prototype,"imageSrc",void 0);oa([M({attribute:!1})],$i.prototype,"date",void 0);oa([M()],$i.prototype,"transactionDetail",void 0);$i=oa([ee("wui-list-transaction")],$i);const vT=ae`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`;var A4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let $d=class extends ue{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,Q`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};$d.styles=[he,vT];A4([M()],$d.prototype,"variant",void 0);$d=A4([ee("wui-tag")],$d);const bT=ae`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`;var pr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Dn=class extends ue{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?Q` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?Q` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?Q`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:!this.showAllWallets&&!this.imageSrc?Q`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`:null}templateStatus(){return this.tagLabel&&this.tagVariant?Q`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?Q`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};Dn.styles=[he,dt,bT];pr([M({type:Array})],Dn.prototype,"walletImages",void 0);pr([M()],Dn.prototype,"imageSrc",void 0);pr([M()],Dn.prototype,"name",void 0);pr([M()],Dn.prototype,"tagLabel",void 0);pr([M()],Dn.prototype,"tagVariant",void 0);pr([M()],Dn.prototype,"icon",void 0);pr([M()],Dn.prototype,"walletIcon",void 0);pr([M({type:Boolean})],Dn.prototype,"disabled",void 0);pr([M({type:Boolean})],Dn.prototype,"showAllWallets",void 0);Dn=pr([ee("wui-list-wallet")],Dn);const xT=ae`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`;var k4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pd=class extends ue{constructor(){super(...arguments),this.logo="google"}render(){return Q`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};Pd.styles=[he,xT];k4([M()],Pd.prototype,"logo",void 0);Pd=k4([ee("wui-logo")],Pd);const CT=ae`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`;var wm=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ql=class extends ue{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return Q`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};Ql.styles=[he,dt,CT];wm([M()],Ql.prototype,"logo",void 0);wm([M({type:Boolean})],Ql.prototype,"disabled",void 0);Ql=wm([ee("wui-logo-select")],Ql);const ET=ae`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`;var ym=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Yl=class extends ue{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return Q`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?Q`<wui-image src=${this.imageSrc}></wui-image>`:Q`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};Yl.styles=[he,dt,ET];ym([M()],Yl.prototype,"imageSrc",void 0);ym([M({type:Boolean})],Yl.prototype,"disabled",void 0);Yl=ym([ee("wui-network-button")],Yl);const _T=ae`
  :host {
    position: relative;
    display: block;
  }
`;var D4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Td=class extends ue{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(t,n)=>{const r=t.target,i=this.getInputElement(r),o=["ArrowLeft","ArrowRight","Shift","Delete"];if(!i)return;o.includes(t.key)&&t.preventDefault();const s=i.selectionStart;switch(t.key){case"ArrowLeft":s&&i.setSelectionRange(s+1,s+1),this.focusInputField("prev",n);break;case"ArrowRight":this.focusInputField("next",n);break;case"Shift":this.focusInputField("next",n);break;case"Delete":i.value===""?this.focusInputField("prev",n):i.value="";break;case"Backspace":i.value===""?this.focusInputField("prev",n):i.value="";break}},this.focusInputField=(t,n)=>{if(t==="next"){const r=n+1,i=this.numerics[r<this.length?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}if(t==="prev"){const r=n-1,i=this.numerics[r>-1?r:n],o=i?this.getInputElement(i):void 0;o&&o.focus()}}}firstUpdated(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelectorAll("wui-input-numeric");t&&(this.numerics=Array.from(t))}render(){return Q`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((t,n)=>Q`
            <wui-input-numeric
              @input=${r=>this.handleInput(r,n)}
              @keydown=${r=>this.handleKeyDown(r,n)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(t,n){const r=t.target,i=this.getInputElement(r);if(i){const o=i.value;t.inputType==="insertFromPaste"?this.handlePaste(i,o,n):je.isNumber(o)&&t.data?(i.value=t.data,this.focusInputField("next",n)):i.value=""}}handlePaste(t,n,r){const i=n[0];if(i&&je.isNumber(i)){t.value=i;const s=n.substring(1);if(r+1<this.length&&s.length){const a=this.numerics[r+1],l=a?this.getInputElement(a):void 0;l&&this.handlePaste(l,s,r+1)}else this.focusInputField("next",r)}else t.value=""}getInputElement(t){var n;return(n=t.shadowRoot)!=null&&n.querySelector("input")?t.shadowRoot.querySelector("input"):null}};Td.styles=[he,_T];D4([M({type:Number})],Td.prototype,"length",void 0);Td=D4([ee("wui-otp")],Td);var Pc={},ST=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},O4={},wn={};let vm;const $T=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];wn.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};wn.getSymbolTotalCodewords=function(t){return $T[t]};wn.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};wn.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');vm=t};wn.isKanjiModeEnabled=function(){return typeof vm<"u"};wn.toSJIS=function(t){return vm(t)};var jf={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(r){return r&&typeof r.bit<"u"&&r.bit>=0&&r.bit<4},e.from=function(r,i){if(e.isValid(r))return r;try{return t(r)}catch{return i}}})(jf);function I4(){this.buffer=[],this.length=0}I4.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var PT=I4;function Tc(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}Tc.prototype.set=function(e,t,n,r){const i=e*this.size+t;this.data[i]=n,r&&(this.reservedBit[i]=!0)};Tc.prototype.get=function(e,t){return this.data[e*this.size+t]};Tc.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};Tc.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var TT=Tc,N4={};(function(e){const t=wn.getSymbolSize;e.getRowColCoords=function(r){if(r===1)return[];const i=Math.floor(r/7)+2,o=t(r),s=o===145?26:Math.ceil((o-13)/(2*i-2))*2,a=[o-7];for(let l=1;l<i-1;l++)a[l]=a[l-1]-s;return a.push(6),a.reverse()},e.getPositions=function(r){const i=[],o=e.getRowColCoords(r),s=o.length;for(let a=0;a<s;a++)for(let l=0;l<s;l++)a===0&&l===0||a===0&&l===s-1||a===s-1&&l===0||i.push([o[a],o[l]]);return i}})(N4);var R4={};const AT=wn.getSymbolSize,X2=7;R4.getPositions=function(t){const n=AT(t);return[[0,0],[n-X2,0],[0,n-X2]]};var M4={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(i){return i!=null&&i!==""&&!isNaN(i)&&i>=0&&i<=7},e.from=function(i){return e.isValid(i)?parseInt(i,10):void 0},e.getPenaltyN1=function(i){const o=i.size;let s=0,a=0,l=0,c=null,u=null;for(let d=0;d<o;d++){a=l=0,c=u=null;for(let h=0;h<o;h++){let p=i.get(d,h);p===c?a++:(a>=5&&(s+=t.N1+(a-5)),c=p,a=1),p=i.get(h,d),p===u?l++:(l>=5&&(s+=t.N1+(l-5)),u=p,l=1)}a>=5&&(s+=t.N1+(a-5)),l>=5&&(s+=t.N1+(l-5))}return s},e.getPenaltyN2=function(i){const o=i.size;let s=0;for(let a=0;a<o-1;a++)for(let l=0;l<o-1;l++){const c=i.get(a,l)+i.get(a,l+1)+i.get(a+1,l)+i.get(a+1,l+1);(c===4||c===0)&&s++}return s*t.N2},e.getPenaltyN3=function(i){const o=i.size;let s=0,a=0,l=0;for(let c=0;c<o;c++){a=l=0;for(let u=0;u<o;u++)a=a<<1&2047|i.get(c,u),u>=10&&(a===1488||a===93)&&s++,l=l<<1&2047|i.get(u,c),u>=10&&(l===1488||l===93)&&s++}return s*t.N3},e.getPenaltyN4=function(i){let o=0;const s=i.data.length;for(let l=0;l<s;l++)o+=i.data[l];return Math.abs(Math.ceil(o*100/s/5)-10)*t.N4};function n(r,i,o){switch(r){case e.Patterns.PATTERN000:return(i+o)%2===0;case e.Patterns.PATTERN001:return i%2===0;case e.Patterns.PATTERN010:return o%3===0;case e.Patterns.PATTERN011:return(i+o)%3===0;case e.Patterns.PATTERN100:return(Math.floor(i/2)+Math.floor(o/3))%2===0;case e.Patterns.PATTERN101:return i*o%2+i*o%3===0;case e.Patterns.PATTERN110:return(i*o%2+i*o%3)%2===0;case e.Patterns.PATTERN111:return(i*o%3+(i+o)%2)%2===0;default:throw new Error("bad maskPattern:"+r)}}e.applyMask=function(i,o){const s=o.size;for(let a=0;a<s;a++)for(let l=0;l<s;l++)o.isReserved(l,a)||o.xor(l,a,n(i,l,a))},e.getBestMask=function(i,o){const s=Object.keys(e.Patterns).length;let a=0,l=1/0;for(let c=0;c<s;c++){o(c),e.applyMask(c,i);const u=e.getPenaltyN1(i)+e.getPenaltyN2(i)+e.getPenaltyN3(i)+e.getPenaltyN4(i);e.applyMask(c,i),u<l&&(l=u,a=c)}return a}})(M4);var Lf={};const ni=jf,su=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],au=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];Lf.getBlocksCount=function(t,n){switch(n){case ni.L:return su[(t-1)*4+0];case ni.M:return su[(t-1)*4+1];case ni.Q:return su[(t-1)*4+2];case ni.H:return su[(t-1)*4+3];default:return}};Lf.getTotalCodewordsCount=function(t,n){switch(n){case ni.L:return au[(t-1)*4+0];case ni.M:return au[(t-1)*4+1];case ni.Q:return au[(t-1)*4+2];case ni.H:return au[(t-1)*4+3];default:return}};var B4={},Uf={};const tl=new Uint8Array(512),Ad=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)tl[n]=t,Ad[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)tl[n]=tl[n-255]})();Uf.log=function(t){if(t<1)throw new Error("log("+t+")");return Ad[t]};Uf.exp=function(t){return tl[t]};Uf.mul=function(t,n){return t===0||n===0?0:tl[Ad[t]+Ad[n]]};(function(e){const t=Uf;e.mul=function(r,i){const o=new Uint8Array(r.length+i.length-1);for(let s=0;s<r.length;s++)for(let a=0;a<i.length;a++)o[s+a]^=t.mul(r[s],i[a]);return o},e.mod=function(r,i){let o=new Uint8Array(r);for(;o.length-i.length>=0;){const s=o[0];for(let l=0;l<i.length;l++)o[l]^=t.mul(i[l],s);let a=0;for(;a<o.length&&o[a]===0;)a++;o=o.slice(a)}return o},e.generateECPolynomial=function(r){let i=new Uint8Array([1]);for(let o=0;o<r;o++)i=e.mul(i,new Uint8Array([1,t.exp(o)]));return i}})(B4);const j4=B4;function bm(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}bm.prototype.initialize=function(t){this.degree=t,this.genPoly=j4.generateECPolynomial(this.degree)};bm.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const r=j4.mod(n,this.genPoly),i=this.degree-r.length;if(i>0){const o=new Uint8Array(this.degree);return o.set(r,i),o}return r};var kT=bm,L4={},Mi={},xm={};xm.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var gr={};const U4="[0-9]+",DT="[A-Z $%*+\\-./:]+";let Jl="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";Jl=Jl.replace(/u/g,"\\u");const OT="(?:(?![A-Z0-9 $%*+\\-./:]|"+Jl+`)(?:.|[\r
]))+`;gr.KANJI=new RegExp(Jl,"g");gr.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");gr.BYTE=new RegExp(OT,"g");gr.NUMERIC=new RegExp(U4,"g");gr.ALPHANUMERIC=new RegExp(DT,"g");const IT=new RegExp("^"+Jl+"$"),NT=new RegExp("^"+U4+"$"),RT=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");gr.testKanji=function(t){return IT.test(t)};gr.testNumeric=function(t){return NT.test(t)};gr.testAlphanumeric=function(t){return RT.test(t)};(function(e){const t=xm,n=gr;e.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(o,s){if(!o.ccBits)throw new Error("Invalid mode: "+o);if(!t.isValid(s))throw new Error("Invalid version: "+s);return s>=1&&s<10?o.ccBits[0]:s<27?o.ccBits[1]:o.ccBits[2]},e.getBestModeForData=function(o){return n.testNumeric(o)?e.NUMERIC:n.testAlphanumeric(o)?e.ALPHANUMERIC:n.testKanji(o)?e.KANJI:e.BYTE},e.toString=function(o){if(o&&o.id)return o.id;throw new Error("Invalid mode")},e.isValid=function(o){return o&&o.bit&&o.ccBits};function r(i){if(typeof i!="string")throw new Error("Param is not a string");switch(i.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+i)}}e.from=function(o,s){if(e.isValid(o))return o;try{return r(o)}catch{return s}}})(Mi);(function(e){const t=wn,n=Lf,r=jf,i=Mi,o=xm,s=7973,a=t.getBCHDigit(s);function l(h,p,w){for(let x=1;x<=40;x++)if(p<=e.getCapacity(x,w,h))return x}function c(h,p){return i.getCharCountIndicator(h,p)+4}function u(h,p){let w=0;return h.forEach(function(x){const E=c(x.mode,p);w+=E+x.getBitsLength()}),w}function d(h,p){for(let w=1;w<=40;w++)if(u(h,w)<=e.getCapacity(w,p,i.MIXED))return w}e.from=function(p,w){return o.isValid(p)?parseInt(p,10):w},e.getCapacity=function(p,w,x){if(!o.isValid(p))throw new Error("Invalid QR Code version");typeof x>"u"&&(x=i.BYTE);const E=t.getSymbolTotalCodewords(p),b=n.getTotalCodewordsCount(p,w),g=(E-b)*8;if(x===i.MIXED)return g;const v=g-c(x,p);switch(x){case i.NUMERIC:return Math.floor(v/10*3);case i.ALPHANUMERIC:return Math.floor(v/11*2);case i.KANJI:return Math.floor(v/13);case i.BYTE:default:return Math.floor(v/8)}},e.getBestVersionForData=function(p,w){let x;const E=r.from(w,r.M);if(Array.isArray(p)){if(p.length>1)return d(p,E);if(p.length===0)return 1;x=p[0]}else x=p;return l(x.mode,x.getLength(),E)},e.getEncodedBits=function(p){if(!o.isValid(p)||p<7)throw new Error("Invalid QR Code version");let w=p<<12;for(;t.getBCHDigit(w)-a>=0;)w^=s<<t.getBCHDigit(w)-a;return p<<12|w}})(L4);var F4={};const Wp=wn,z4=1335,MT=21522,ey=Wp.getBCHDigit(z4);F4.getEncodedBits=function(t,n){const r=t.bit<<3|n;let i=r<<10;for(;Wp.getBCHDigit(i)-ey>=0;)i^=z4<<Wp.getBCHDigit(i)-ey;return(r<<10|i)^MT};var W4={};const BT=Mi;function Ms(e){this.mode=BT.NUMERIC,this.data=e.toString()}Ms.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};Ms.prototype.getLength=function(){return this.data.length};Ms.prototype.getBitsLength=function(){return Ms.getBitsLength(this.data.length)};Ms.prototype.write=function(t){let n,r,i;for(n=0;n+3<=this.data.length;n+=3)r=this.data.substr(n,3),i=parseInt(r,10),t.put(i,10);const o=this.data.length-n;o>0&&(r=this.data.substr(n),i=parseInt(r,10),t.put(i,o*3+1))};var jT=Ms;const LT=Mi,X0=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function Bs(e){this.mode=LT.ALPHANUMERIC,this.data=e}Bs.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};Bs.prototype.getLength=function(){return this.data.length};Bs.prototype.getBitsLength=function(){return Bs.getBitsLength(this.data.length)};Bs.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let r=X0.indexOf(this.data[n])*45;r+=X0.indexOf(this.data[n+1]),t.put(r,11)}this.data.length%2&&t.put(X0.indexOf(this.data[n]),6)};var UT=Bs,FT=function(t){for(var n=[],r=t.length,i=0;i<r;i++){var o=t.charCodeAt(i);if(o>=55296&&o<=56319&&r>i+1){var s=t.charCodeAt(i+1);s>=56320&&s<=57343&&(o=(o-55296)*1024+s-56320+65536,i+=1)}if(o<128){n.push(o);continue}if(o<2048){n.push(o>>6|192),n.push(o&63|128);continue}if(o<55296||o>=57344&&o<65536){n.push(o>>12|224),n.push(o>>6&63|128),n.push(o&63|128);continue}if(o>=65536&&o<=1114111){n.push(o>>18|240),n.push(o>>12&63|128),n.push(o>>6&63|128),n.push(o&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const zT=FT,WT=Mi;function js(e){this.mode=WT.BYTE,typeof e=="string"&&(e=zT(e)),this.data=new Uint8Array(e)}js.getBitsLength=function(t){return t*8};js.prototype.getLength=function(){return this.data.length};js.prototype.getBitsLength=function(){return js.getBitsLength(this.data.length)};js.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var HT=js;const VT=Mi,qT=wn;function Ls(e){this.mode=VT.KANJI,this.data=e}Ls.getBitsLength=function(t){return t*13};Ls.prototype.getLength=function(){return this.data.length};Ls.prototype.getBitsLength=function(){return Ls.getBitsLength(this.data.length)};Ls.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=qT.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var GT=Ls,H4={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,r,i){var o={},s={};s[r]=0;var a=t.PriorityQueue.make();a.push(r,0);for(var l,c,u,d,h,p,w,x,E;!a.empty();){l=a.pop(),c=l.value,d=l.cost,h=n[c]||{};for(u in h)h.hasOwnProperty(u)&&(p=h[u],w=d+p,x=s[u],E=typeof s[u]>"u",(E||x>w)&&(s[u]=w,a.push(u,w),o[u]=c))}if(typeof i<"u"&&typeof s[i]>"u"){var b=["Could not find a path from ",r," to ",i,"."].join("");throw new Error(b)}return o},extract_shortest_path_from_predecessor_list:function(n,r){for(var i=[],o=r;o;)i.push(o),n[o],o=n[o];return i.reverse(),i},find_path:function(n,r,i){var o=t.single_source_shortest_paths(n,r,i);return t.extract_shortest_path_from_predecessor_list(o,i)},PriorityQueue:{make:function(n){var r=t.PriorityQueue,i={},o;n=n||{};for(o in r)r.hasOwnProperty(o)&&(i[o]=r[o]);return i.queue=[],i.sorter=n.sorter||r.default_sorter,i},default_sorter:function(n,r){return n.cost-r.cost},push:function(n,r){var i={value:n,cost:r};this.queue.push(i),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(H4);var KT=H4.exports;(function(e){const t=Mi,n=jT,r=UT,i=HT,o=GT,s=gr,a=wn,l=KT;function c(b){return unescape(encodeURIComponent(b)).length}function u(b,g,v){const C=[];let _;for(;(_=b.exec(v))!==null;)C.push({data:_[0],index:_.index,mode:g,length:_[0].length});return C}function d(b){const g=u(s.NUMERIC,t.NUMERIC,b),v=u(s.ALPHANUMERIC,t.ALPHANUMERIC,b);let C,_;return a.isKanjiModeEnabled()?(C=u(s.BYTE,t.BYTE,b),_=u(s.KANJI,t.KANJI,b)):(C=u(s.BYTE_KANJI,t.BYTE,b),_=[]),g.concat(v,C,_).sort(function(f,S){return f.index-S.index}).map(function(f){return{data:f.data,mode:f.mode,length:f.length}})}function h(b,g){switch(g){case t.NUMERIC:return n.getBitsLength(b);case t.ALPHANUMERIC:return r.getBitsLength(b);case t.KANJI:return o.getBitsLength(b);case t.BYTE:return i.getBitsLength(b)}}function p(b){return b.reduce(function(g,v){const C=g.length-1>=0?g[g.length-1]:null;return C&&C.mode===v.mode?(g[g.length-1].data+=v.data,g):(g.push(v),g)},[])}function w(b){const g=[];for(let v=0;v<b.length;v++){const C=b[v];switch(C.mode){case t.NUMERIC:g.push([C,{data:C.data,mode:t.ALPHANUMERIC,length:C.length},{data:C.data,mode:t.BYTE,length:C.length}]);break;case t.ALPHANUMERIC:g.push([C,{data:C.data,mode:t.BYTE,length:C.length}]);break;case t.KANJI:g.push([C,{data:C.data,mode:t.BYTE,length:c(C.data)}]);break;case t.BYTE:g.push([{data:C.data,mode:t.BYTE,length:c(C.data)}])}}return g}function x(b,g){const v={},C={start:{}};let _=["start"];for(let $=0;$<b.length;$++){const f=b[$],S=[];for(let k=0;k<f.length;k++){const D=f[k],I=""+$+k;S.push(I),v[I]={node:D,lastCount:0},C[I]={};for(let W=0;W<_.length;W++){const J=_[W];v[J]&&v[J].node.mode===D.mode?(C[J][I]=h(v[J].lastCount+D.length,D.mode)-h(v[J].lastCount,D.mode),v[J].lastCount+=D.length):(v[J]&&(v[J].lastCount=D.length),C[J][I]=h(D.length,D.mode)+4+t.getCharCountIndicator(D.mode,g))}}_=S}for(let $=0;$<_.length;$++)C[_[$]].end=0;return{map:C,table:v}}function E(b,g){let v;const C=t.getBestModeForData(b);if(v=t.from(g,C),v!==t.BYTE&&v.bit<C.bit)throw new Error('"'+b+'" cannot be encoded with mode '+t.toString(v)+`.
 Suggested mode is: `+t.toString(C));switch(v===t.KANJI&&!a.isKanjiModeEnabled()&&(v=t.BYTE),v){case t.NUMERIC:return new n(b);case t.ALPHANUMERIC:return new r(b);case t.KANJI:return new o(b);case t.BYTE:return new i(b)}}e.fromArray=function(g){return g.reduce(function(v,C){return typeof C=="string"?v.push(E(C,null)):C.data&&v.push(E(C.data,C.mode)),v},[])},e.fromString=function(g,v){const C=d(g,a.isKanjiModeEnabled()),_=w(C),$=x(_,v),f=l.find_path($.map,"start","end"),S=[];for(let k=1;k<f.length-1;k++)S.push($.table[f[k]].node);return e.fromArray(p(S))},e.rawSplit=function(g){return e.fromArray(d(g,a.isKanjiModeEnabled()))}})(W4);const Ff=wn,eh=jf,ZT=PT,QT=TT,YT=N4,JT=R4,Hp=M4,Vp=Lf,XT=kT,kd=L4,eA=F4,tA=Mi,th=W4;function nA(e,t){const n=e.size,r=JT.getPositions(t);for(let i=0;i<r.length;i++){const o=r[i][0],s=r[i][1];for(let a=-1;a<=7;a++)if(!(o+a<=-1||n<=o+a))for(let l=-1;l<=7;l++)s+l<=-1||n<=s+l||(a>=0&&a<=6&&(l===0||l===6)||l>=0&&l<=6&&(a===0||a===6)||a>=2&&a<=4&&l>=2&&l<=4?e.set(o+a,s+l,!0,!0):e.set(o+a,s+l,!1,!0))}}function rA(e){const t=e.size;for(let n=8;n<t-8;n++){const r=n%2===0;e.set(n,6,r,!0),e.set(6,n,r,!0)}}function iA(e,t){const n=YT.getPositions(t);for(let r=0;r<n.length;r++){const i=n[r][0],o=n[r][1];for(let s=-2;s<=2;s++)for(let a=-2;a<=2;a++)s===-2||s===2||a===-2||a===2||s===0&&a===0?e.set(i+s,o+a,!0,!0):e.set(i+s,o+a,!1,!0)}}function oA(e,t){const n=e.size,r=kd.getEncodedBits(t);let i,o,s;for(let a=0;a<18;a++)i=Math.floor(a/3),o=a%3+n-8-3,s=(r>>a&1)===1,e.set(i,o,s,!0),e.set(o,i,s,!0)}function nh(e,t,n){const r=e.size,i=eA.getEncodedBits(t,n);let o,s;for(o=0;o<15;o++)s=(i>>o&1)===1,o<6?e.set(o,8,s,!0):o<8?e.set(o+1,8,s,!0):e.set(r-15+o,8,s,!0),o<8?e.set(8,r-o-1,s,!0):o<9?e.set(8,15-o-1+1,s,!0):e.set(8,15-o-1,s,!0);e.set(r-8,8,1,!0)}function sA(e,t){const n=e.size;let r=-1,i=n-1,o=7,s=0;for(let a=n-1;a>0;a-=2)for(a===6&&a--;;){for(let l=0;l<2;l++)if(!e.isReserved(i,a-l)){let c=!1;s<t.length&&(c=(t[s]>>>o&1)===1),e.set(i,a-l,c),o--,o===-1&&(s++,o=7)}if(i+=r,i<0||n<=i){i-=r,r=-r;break}}}function aA(e,t,n){const r=new ZT;n.forEach(function(l){r.put(l.mode.bit,4),r.put(l.getLength(),tA.getCharCountIndicator(l.mode,e)),l.write(r)});const i=Ff.getSymbolTotalCodewords(e),o=Vp.getTotalCodewordsCount(e,t),s=(i-o)*8;for(r.getLengthInBits()+4<=s&&r.put(0,4);r.getLengthInBits()%8!==0;)r.putBit(0);const a=(s-r.getLengthInBits())/8;for(let l=0;l<a;l++)r.put(l%2?17:236,8);return lA(r,e,t)}function lA(e,t,n){const r=Ff.getSymbolTotalCodewords(t),i=Vp.getTotalCodewordsCount(t,n),o=r-i,s=Vp.getBlocksCount(t,n),a=r%s,l=s-a,c=Math.floor(r/s),u=Math.floor(o/s),d=u+1,h=c-u,p=new XT(h);let w=0;const x=new Array(s),E=new Array(s);let b=0;const g=new Uint8Array(e.buffer);for(let f=0;f<s;f++){const S=f<l?u:d;x[f]=g.slice(w,w+S),E[f]=p.encode(x[f]),w+=S,b=Math.max(b,S)}const v=new Uint8Array(r);let C=0,_,$;for(_=0;_<b;_++)for($=0;$<s;$++)_<x[$].length&&(v[C++]=x[$][_]);for(_=0;_<h;_++)for($=0;$<s;$++)v[C++]=E[$][_];return v}function cA(e,t,n,r){let i;if(Array.isArray(e))i=th.fromArray(e);else if(typeof e=="string"){let c=t;if(!c){const u=th.rawSplit(e);c=kd.getBestVersionForData(u,n)}i=th.fromString(e,c||40)}else throw new Error("Invalid data");const o=kd.getBestVersionForData(i,n);if(!o)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=o;else if(t<o)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+o+`.
`);const s=aA(t,n,i),a=Ff.getSymbolSize(t),l=new QT(a);return nA(l,t),rA(l),iA(l,t),nh(l,n,0),t>=7&&oA(l,t),sA(l,s),isNaN(r)&&(r=Hp.getBestMask(l,nh.bind(null,l,n))),Hp.applyMask(r,l),nh(l,n,r),{modules:l,version:t,errorCorrectionLevel:n,maskPattern:r,segments:i}}O4.create=function(t,n){if(typeof t>"u"||t==="")throw new Error("No input text");let r=eh.M,i,o;return typeof n<"u"&&(r=eh.from(n.errorCorrectionLevel,eh.M),i=kd.from(n.version),o=Hp.from(n.maskPattern),n.toSJISFunc&&Ff.setToSJISFunction(n.toSJISFunc)),cA(t,i,r,o)};var V4={},Cm={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let r=n.slice().replace("#","").split("");if(r.length<3||r.length===5||r.length>8)throw new Error("Invalid hex color: "+n);(r.length===3||r.length===4)&&(r=Array.prototype.concat.apply([],r.map(function(o){return[o,o]}))),r.length===6&&r.push("F","F");const i=parseInt(r.join(""),16);return{r:i>>24&255,g:i>>16&255,b:i>>8&255,a:i&255,hex:"#"+r.slice(0,6).join("")}}e.getOptions=function(r){r||(r={}),r.color||(r.color={});const i=typeof r.margin>"u"||r.margin===null||r.margin<0?4:r.margin,o=r.width&&r.width>=21?r.width:void 0,s=r.scale||4;return{width:o,scale:o?4:s,margin:i,color:{dark:t(r.color.dark||"#000000ff"),light:t(r.color.light||"#ffffffff")},type:r.type,rendererOpts:r.rendererOpts||{}}},e.getScale=function(r,i){return i.width&&i.width>=r+i.margin*2?i.width/(r+i.margin*2):i.scale},e.getImageWidth=function(r,i){const o=e.getScale(r,i);return Math.floor((r+i.margin*2)*o)},e.qrToImageData=function(r,i,o){const s=i.modules.size,a=i.modules.data,l=e.getScale(s,o),c=Math.floor((s+o.margin*2)*l),u=o.margin*l,d=[o.color.light,o.color.dark];for(let h=0;h<c;h++)for(let p=0;p<c;p++){let w=(h*c+p)*4,x=o.color.light;if(h>=u&&p>=u&&h<c-u&&p<c-u){const E=Math.floor((h-u)/l),b=Math.floor((p-u)/l);x=d[a[E*s+b]?1:0]}r[w++]=x.r,r[w++]=x.g,r[w++]=x.b,r[w]=x.a}}})(Cm);(function(e){const t=Cm;function n(i,o,s){i.clearRect(0,0,o.width,o.height),o.style||(o.style={}),o.height=s,o.width=s,o.style.height=s+"px",o.style.width=s+"px"}function r(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(o,s,a){let l=a,c=s;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),s||(c=r()),l=t.getOptions(l);const u=t.getImageWidth(o.modules.size,l),d=c.getContext("2d"),h=d.createImageData(u,u);return t.qrToImageData(h.data,o,l),n(d,c,u),d.putImageData(h,0,0),c},e.renderToDataURL=function(o,s,a){let l=a;typeof l>"u"&&(!s||!s.getContext)&&(l=s,s=void 0),l||(l={});const c=e.render(o,s,l),u=l.type||"image/png",d=l.rendererOpts||{};return c.toDataURL(u,d.quality)}})(V4);var q4={};const uA=Cm;function ty(e,t){const n=e.a/255,r=t+'="'+e.hex+'"';return n<1?r+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':r}function rh(e,t,n){let r=e+t;return typeof n<"u"&&(r+=" "+n),r}function dA(e,t,n){let r="",i=0,o=!1,s=0;for(let a=0;a<e.length;a++){const l=Math.floor(a%t),c=Math.floor(a/t);!l&&!o&&(o=!0),e[a]?(s++,a>0&&l>0&&e[a-1]||(r+=o?rh("M",l+n,.5+c+n):rh("m",i,0),i=0,o=!1),l+1<t&&e[a+1]||(r+=rh("h",s),s=0)):i++}return r}q4.render=function(t,n,r){const i=uA.getOptions(n),o=t.modules.size,s=t.modules.data,a=o+i.margin*2,l=i.color.light.a?"<path "+ty(i.color.light,"fill")+' d="M0 0h'+a+"v"+a+'H0z"/>':"",c="<path "+ty(i.color.dark,"stroke")+' d="'+dA(s,o,i.margin)+'"/>',u='viewBox="0 0 '+a+" "+a+'"',h='<svg xmlns="http://www.w3.org/2000/svg" '+(i.width?'width="'+i.width+'" height="'+i.width+'" ':"")+u+' shape-rendering="crispEdges">'+l+c+`</svg>
`;return typeof r=="function"&&r(null,h),h};const fA=ST,qp=O4,G4=V4,hA=q4;function Em(e,t,n,r,i){const o=[].slice.call(arguments,1),s=o.length,a=typeof o[s-1]=="function";if(!a&&!fA())throw new Error("Callback required as last argument");if(a){if(s<2)throw new Error("Too few arguments provided");s===2?(i=n,n=t,t=r=void 0):s===3&&(t.getContext&&typeof i>"u"?(i=r,r=void 0):(i=r,r=n,n=t,t=void 0))}else{if(s<1)throw new Error("Too few arguments provided");return s===1?(n=t,t=r=void 0):s===2&&!t.getContext&&(r=n,n=t,t=void 0),new Promise(function(l,c){try{const u=qp.create(n,r);l(e(u,t,r))}catch(u){c(u)}})}try{const l=qp.create(n,r);i(null,e(l,t,r))}catch(l){i(l)}}Pc.create=qp.create;Pc.toCanvas=Em.bind(null,G4.render);Pc.toDataURL=Em.bind(null,G4.renderToDataURL);Pc.toString=Em.bind(null,function(e,t,n){return hA.render(e,n)});const pA=.1,ny=2.5,yr=7;function ih(e,t,n){return e===t?!1:(e-t<0?t-e:e-t)<=n+pA}function gA(e,t){const n=Array.prototype.slice.call(Pc.create(e,{errorCorrectionLevel:t}).modules.data,0),r=Math.sqrt(n.length);return n.reduce((i,o,s)=>(s%r===0?i.push([o]):i[i.length-1].push(o))&&i,[])}const mA={generate(e,t,n){const r="#141414",i="transparent",s=[],a=gA(e,"Q"),l=t/a.length,c=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];c.forEach(({x,y:E})=>{const b=(a.length-yr)*l*x,g=(a.length-yr)*l*E,v=.45;for(let C=0;C<c.length;C+=1){const _=l*(yr-C*2);s.push(te`
            <rect
              fill=${C===2?r:i}
              width=${C===0?_-5:_}
              rx= ${C===0?(_-5)*v:_*v}
              ry= ${C===0?(_-5)*v:_*v}
              stroke=${r}
              stroke-width=${C===0?5:0}
              height=${C===0?_-5:_}
              x= ${C===0?g+l*C+5/2:g+l*C}
              y= ${C===0?b+l*C+5/2:b+l*C}
            />
          `)}});const u=Math.floor((n+25)/l),d=a.length/2-u/2,h=a.length/2+u/2-1,p=[];a.forEach((x,E)=>{x.forEach((b,g)=>{if(a[E][g]&&!(E<yr&&g<yr||E>a.length-(yr+1)&&g<yr||E<yr&&g>a.length-(yr+1))&&!(E>d&&E<h&&g>d&&g<h)){const v=E*l+l/2,C=g*l+l/2;p.push([v,C])}})});const w={};return p.forEach(([x,E])=>{var b;w[x]?(b=w[x])==null||b.push(E):w[x]=[E]}),Object.entries(w).map(([x,E])=>{const b=E.filter(g=>E.every(v=>!ih(g,v,l)));return[Number(x),b]}).forEach(([x,E])=>{E.forEach(b=>{s.push(te`<circle cx=${x} cy=${b} fill=${r} r=${l/ny} />`)})}),Object.entries(w).filter(([x,E])=>E.length>1).map(([x,E])=>{const b=E.filter(g=>E.some(v=>ih(g,v,l)));return[Number(x),b]}).map(([x,E])=>{E.sort((g,v)=>g<v?-1:1);const b=[];for(const g of E){const v=b.find(C=>C.some(_=>ih(g,_,l)));v?v.push(g):b.push([g])}return[x,b.map(g=>[g[0],g[g.length-1]])]}).forEach(([x,E])=>{E.forEach(([b,g])=>{s.push(te`
              <line
                x1=${x}
                x2=${x}
                y1=${b}
                y2=${g}
                stroke=${r}
                stroke-width=${l/(ny/2)}
                stroke-linecap="round"
              />
            `)})}),s}},wA=ae`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`;var sa=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Pi=class extends ue{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,Q`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){const t=this.theme==="light"?this.size:this.size-32;return te`
      <svg height=${t} width=${t}>
        ${mA.generate(this.uri,t,t/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?Q`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:Q`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};Pi.styles=[he,wA];sa([M()],Pi.prototype,"uri",void 0);sa([M({type:Number})],Pi.prototype,"size",void 0);sa([M()],Pi.prototype,"theme",void 0);sa([M()],Pi.prototype,"imageSrc",void 0);sa([M()],Pi.prototype,"alt",void 0);Pi=sa([ee("wui-qr-code")],Pi);const yA=ae`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;var vA=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Gp=class extends ue{constructor(){super(...arguments),this.inputComponentRef=_4()}render(){return Q`
      <wui-input-text
        ${S4(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){const t=this.inputComponentRef.value,n=t==null?void 0:t.inputElementRef.value;n&&(n.value="",n.focus(),n.dispatchEvent(new Event("input")))}};Gp.styles=[he,yA];Gp=vA([ee("wui-search-bar")],Gp);const bA=ae`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`;var Ac=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _o=class extends ue{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return Q`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};_o.styles=[he,bA];Ac([M()],_o.prototype,"backgroundColor",void 0);Ac([M()],_o.prototype,"iconColor",void 0);Ac([M()],_o.prototype,"icon",void 0);Ac([M()],_o.prototype,"message",void 0);_o=Ac([ee("wui-snackbar")],_o);const xA=ae`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`;var Bi=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ur=class extends ue{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((t,n)=>{const r=n===this.activeTab;return Q`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(n)}
          data-active=${r}
        >
          <wui-icon size="sm" color="inherit" name=${t.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${t.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(t){this.buttons&&this.animateTabs(t,!1),this.activeTab=t,this.onTabChange(t)}animateTabs(t,n){const r=this.buttons[this.activeTab],i=this.buttons[t],o=r==null?void 0:r.querySelector("wui-text"),s=i==null?void 0:i.querySelector("wui-text"),a=i==null?void 0:i.getBoundingClientRect(),l=s==null?void 0:s.getBoundingClientRect();r&&o&&!n&&t!==this.activeTab&&(o.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),r.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),i&&a&&l&&s&&(t!==this.activeTab||n)&&(this.localTabWidth=`${Math.round(a.width+l.width)+6}px`,i.animate([{width:`${a.width+l.width}px`}],{duration:n?0:500,fill:"forwards",easing:"ease"}),s.animate([{opacity:1}],{duration:n?0:250,delay:n?0:50,fill:"forwards",easing:"ease"}))}};ur.styles=[he,dt,xA];Bi([M({type:Array})],ur.prototype,"tabs",void 0);Bi([M()],ur.prototype,"onTabChange",void 0);Bi([M({type:Array})],ur.prototype,"buttons",void 0);Bi([M({type:Boolean})],ur.prototype,"disabled",void 0);Bi([dm()],ur.prototype,"activeTab",void 0);Bi([dm()],ur.prototype,"localTabWidth",void 0);Bi([dm()],ur.prototype,"isDense",void 0);ur=Bi([ee("wui-tabs")],ur);const CA=ae`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`;var _m=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Xl=class extends ue{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return Q`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};Xl.styles=[he,dt,CA];_m([M()],Xl.prototype,"placement",void 0);_m([M()],Xl.prototype,"message",void 0);Xl=_m([ee("wui-tooltip")],Xl);const EA=ae`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`;var In=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let nn=class extends ue{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&je.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&je.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&je.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&je.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&je.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&je.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&je.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&je.getSpacingStyles(this.margin,3)};
    `,Q`<slot></slot>`}};nn.styles=[he,EA];In([M()],nn.prototype,"gridTemplateRows",void 0);In([M()],nn.prototype,"gridTemplateColumns",void 0);In([M()],nn.prototype,"justifyItems",void 0);In([M()],nn.prototype,"alignItems",void 0);In([M()],nn.prototype,"justifyContent",void 0);In([M()],nn.prototype,"alignContent",void 0);In([M()],nn.prototype,"columnGap",void 0);In([M()],nn.prototype,"rowGap",void 0);In([M()],nn.prototype,"gap",void 0);In([M()],nn.prototype,"padding",void 0);In([M()],nn.prototype,"margin",void 0);nn=In([ee("wui-grid")],nn);const _A=ae`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`;var K4=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Dd=class extends ue{constructor(){super(...arguments),this.text=""}render(){return Q`${this.template()}`}template(){return this.text?Q`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};Dd.styles=[he,_A];K4([M()],Dd.prototype,"text",void 0);Dd=K4([ee("wui-separator")],Dd);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ku=globalThis,Sm=ku.ShadowRoot&&(ku.ShadyCSS===void 0||ku.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$m=Symbol(),ry=new WeakMap;let Z4=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==$m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(Sm&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=ry.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&ry.set(n,t))}return t}toString(){return this.cssText}};const SA=e=>new Z4(typeof e=="string"?e:e+"",void 0,$m),yn=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,i,o)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[o+1],e[0]);return new Z4(n,e,$m)},$A=(e,t)=>{if(Sm)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),i=ku.litNonce;i!==void 0&&r.setAttribute("nonce",i),r.textContent=n.cssText,e.appendChild(r)}},iy=Sm?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return SA(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:PA,defineProperty:TA,getOwnPropertyDescriptor:AA,getOwnPropertyNames:kA,getOwnPropertySymbols:DA,getPrototypeOf:OA}=Object,yi=globalThis,oy=yi.trustedTypes,IA=oy?oy.emptyScript:"",oh=yi.reactiveElementPolyfillSupport,nl=(e,t)=>e,Od={toAttribute(e,t){switch(t){case Boolean:e=e?IA:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Pm=(e,t)=>!PA(e,t),sy={attribute:!0,type:String,converter:Od,reflect:!1,hasChanged:Pm};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),yi.litPropertyMetadata??(yi.litPropertyMetadata=new WeakMap);let Ho=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=sy){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),i=this.getPropertyDescriptor(t,r,n);i!==void 0&&TA(this.prototype,t,i)}}static getPropertyDescriptor(t,n,r){const{get:i,set:o}=AA(this.prototype,t)??{get(){return this[n]},set(s){this[n]=s}};return{get(){return i==null?void 0:i.call(this)},set(s){const a=i==null?void 0:i.call(this);o.call(this,s),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??sy}static _$Ei(){if(this.hasOwnProperty(nl("elementProperties")))return;const t=OA(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(nl("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(nl("properties"))){const n=this.properties,r=[...kA(n),...DA(n)];for(const i of r)this.createProperty(i,n[i])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,i]of n)this.elementProperties.set(r,i)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const i=this._$Eu(n,r);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const i of r)n.unshift(iy(i))}else t!==void 0&&n.push(iy(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$ES??(this._$ES=[])).push(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$ES)==null||n.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $A(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostConnected)==null?void 0:r.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)==null||t.forEach(n=>{var r;return(r=n.hostDisconnected)==null?void 0:r.call(n)})}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EO(t,n){var o;const r=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,r);if(i!==void 0&&r.reflect===!0){const s=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:Od).toAttribute(n,r.type);this._$Em=t,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(t,n){var o;const r=this.constructor,i=r._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const s=r.getPropertyOptions(i),a=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)==null?void 0:o.fromAttribute)!==void 0?s.converter:Od;this._$Em=i,this[i]=a.fromAttribute(n,s.type),this._$Em=null}}requestUpdate(t,n,r,i=!1,o){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??Pm)(i?o:this[t],n))return;this.C(t,n,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[o,s]of this._$Ep)this[o]=s;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,s]of i)s.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],s)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(r=this._$ES)==null||r.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(n)):this._$ET()}catch(i){throw t=!1,this._$ET(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$ES)==null||n.forEach(r=>{var i;return(i=r.hostUpdated)==null?void 0:i.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EO(n,this[n]))),this._$ET()}updated(t){}firstUpdated(t){}};Ho.elementStyles=[],Ho.shadowRootOptions={mode:"open"},Ho[nl("elementProperties")]=new Map,Ho[nl("finalized")]=new Map,oh==null||oh({ReactiveElement:Ho}),(yi.reactiveElementVersions??(yi.reactiveElementVersions=[])).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const rl=globalThis,Id=rl.trustedTypes,ay=Id?Id.createPolicy("lit-html",{createHTML:e=>e}):void 0,Q4="$lit$",Jr=`lit$${(Math.random()+"").slice(9)}$`,Y4="?"+Jr,NA=`<${Y4}>`,So=document,ec=()=>So.createComment(""),tc=e=>e===null||typeof e!="object"&&typeof e!="function",J4=Array.isArray,RA=e=>J4(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",sh=`[ 	
\f\r]`,_a=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ly=/-->/g,cy=/>/g,zi=RegExp(`>|${sh}(?:([^\\s"'>=/]+)(${sh}*=${sh}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uy=/'/g,dy=/"/g,X4=/^(?:script|style|textarea|title)$/i,MA=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),Z=MA(1),Us=Symbol.for("lit-noChange"),pt=Symbol.for("lit-nothing"),fy=new WeakMap,Xi=So.createTreeWalker(So,129);function e6(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ay!==void 0?ay.createHTML(t):t}const BA=(e,t)=>{const n=e.length-1,r=[];let i,o=t===2?"<svg>":"",s=_a;for(let a=0;a<n;a++){const l=e[a];let c,u,d=-1,h=0;for(;h<l.length&&(s.lastIndex=h,u=s.exec(l),u!==null);)h=s.lastIndex,s===_a?u[1]==="!--"?s=ly:u[1]!==void 0?s=cy:u[2]!==void 0?(X4.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=zi):u[3]!==void 0&&(s=zi):s===zi?u[0]===">"?(s=i??_a,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?zi:u[3]==='"'?dy:uy):s===dy||s===uy?s=zi:s===ly||s===cy?s=_a:(s=zi,i=void 0);const p=s===zi&&e[a+1].startsWith("/>")?" ":"";o+=s===_a?l+NA:d>=0?(r.push(c),l.slice(0,d)+Q4+l.slice(d)+Jr+p):l+Jr+(d===-2?a:p)}return[e6(e,o+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class nc{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let o=0,s=0;const a=t.length-1,l=this.parts,[c,u]=BA(t,n);if(this.el=nc.createElement(c,r),Xi.currentNode=this.el.content,n===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(i=Xi.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const d of i.getAttributeNames())if(d.endsWith(Q4)){const h=u[s++],p=i.getAttribute(d).split(Jr),w=/([.?@])?(.*)/.exec(h);l.push({type:1,index:o,name:w[2],strings:p,ctor:w[1]==="."?LA:w[1]==="?"?UA:w[1]==="@"?FA:zf}),i.removeAttribute(d)}else d.startsWith(Jr)&&(l.push({type:6,index:o}),i.removeAttribute(d));if(X4.test(i.tagName)){const d=i.textContent.split(Jr),h=d.length-1;if(h>0){i.textContent=Id?Id.emptyScript:"";for(let p=0;p<h;p++)i.append(d[p],ec()),Xi.nextNode(),l.push({type:2,index:++o});i.append(d[h],ec())}}}else if(i.nodeType===8)if(i.data===Y4)l.push({type:2,index:o});else{let d=-1;for(;(d=i.data.indexOf(Jr,d+1))!==-1;)l.push({type:7,index:o}),d+=Jr.length-1}o++}}static createElement(t,n){const r=So.createElement("template");return r.innerHTML=t,r}}function Fs(e,t,n=e,r){var s,a;if(t===Us)return t;let i=r!==void 0?(s=n._$Co)==null?void 0:s[r]:n._$Cl;const o=tc(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),o===void 0?i=void 0:(i=new o(e),i._$AT(e,n,r)),r!==void 0?(n._$Co??(n._$Co=[]))[r]=i:n._$Cl=i),i!==void 0&&(t=Fs(e,i._$AS(e,t.values),i,r)),t}let jA=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,i=((t==null?void 0:t.creationScope)??So).importNode(n,!0);Xi.currentNode=i;let o=Xi.nextNode(),s=0,a=0,l=r[0];for(;l!==void 0;){if(s===l.index){let c;l.type===2?c=new Tm(o,o.nextSibling,this,t):l.type===1?c=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(c=new zA(o,this,t)),this._$AV.push(c),l=r[++a]}s!==(l==null?void 0:l.index)&&(o=Xi.nextNode(),s++)}return Xi.currentNode=So,i}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}},Tm=class t6{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,r,i){this.type=2,this._$AH=pt,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Fs(this,t,n),tc(t)?t===pt||t==null||t===""?(this._$AH!==pt&&this._$AR(),this._$AH=pt):t!==this._$AH&&t!==Us&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):RA(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==pt&&tc(this._$AH)?this._$AA.nextSibling.data=t:this.$(So.createTextNode(t)),this._$AH=t}g(t){var o;const{values:n,_$litType$:r}=t,i=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=nc.createElement(e6(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(n);else{const s=new jA(i,this),a=s.u(this.options);s.p(n),this.$(a),this._$AH=s}}_$AC(t){let n=fy.get(t.strings);return n===void 0&&fy.set(t.strings,n=new nc(t)),n}T(t){J4(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,i=0;for(const o of t)i===n.length?n.push(r=new t6(this.k(ec()),this.k(ec()),this,this.options)):r=n[i],r._$AI(o),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,n);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},zf=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,i,o){this.type=1,this._$AH=pt,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=pt}_$AI(t,n=this,r,i){const o=this.strings;let s=!1;if(o===void 0)t=Fs(this,t,n,0),s=!tc(t)||t!==this._$AH&&t!==Us,s&&(this._$AH=t);else{const a=t;let l,c;for(t=o[0],l=0;l<o.length-1;l++)c=Fs(this,a[r+l],n,l),c===Us&&(c=this._$AH[l]),s||(s=!tc(c)||c!==this._$AH[l]),c===pt?t=pt:t!==pt&&(t+=(c??"")+o[l+1]),this._$AH[l]=c}s&&!i&&this.j(t)}j(t){t===pt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},LA=class extends zf{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===pt?void 0:t}},UA=class extends zf{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==pt)}},FA=class extends zf{constructor(t,n,r,i,o){super(t,n,r,i,o),this.type=5}_$AI(t,n=this){if((t=Fs(this,t,n,0)??pt)===Us)return;const r=this._$AH,i=t===pt&&r!==pt||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,o=t!==pt&&(r===pt||i);i&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},zA=class{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Fs(this,t)}};const ah=rl.litHtmlPolyfillSupport;ah==null||ah(nc,Tm),(rl.litHtmlVersions??(rl.litHtmlVersions=[])).push("3.0.0");const WA=(e,t,n)=>{const r=(n==null?void 0:n.renderBefore)??t;let i=r._$litPart$;if(i===void 0){const o=(n==null?void 0:n.renderBefore)??null;r._$litPart$=i=new Tm(t.insertBefore(ec(),o),o,void 0,n??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ke extends Ho{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;const t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=WA(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return Us}}var Ov;ke._$litElement$=!0,ke.finalized=!0,(Ov=globalThis.litElementHydrateSupport)==null||Ov.call(globalThis,{LitElement:ke});const lh=globalThis.litElementPolyfillSupport;lh==null||lh({LitElement:ke});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const HA={attribute:!0,type:String,converter:Od,reflect:!1,hasChanged:Pm},VA=(e=HA,t,n)=>{const{kind:r,metadata:i}=n;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),o.set(n.name,e),r==="accessor"){const{name:s}=n;return{set(a){const l=t.get.call(this);t.set.call(this,a),this.requestUpdate(s,l,e)},init(a){return a!==void 0&&this.C(s,void 0,e),a}}}if(r==="setter"){const{name:s}=n;return function(a){const l=this[s];t.call(this,a),this.requestUpdate(s,l,e)}}throw Error("Unsupported decorator location: "+r)};function wt(e){return(t,n)=>typeof n=="object"?VA(e,t,n):((r,i,o)=>{const s=i.hasOwnProperty(o);return i.constructor.createProperty(o,s?{...r,wrapped:!0}:r),s?Object.getOwnPropertyDescriptor(i,o):void 0})(e,t,n)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function me(e){return wt({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Te=e=>e??pt;var jr=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let dr=class extends ke{constructor(){super(),this.unsubscribe=[],this.networkImages=pi.state.networkImages,this.disabled=!1,this.balance="show",this.address=Me.state.address,this.balanceVal=Me.state.balance,this.balanceSymbol=Me.state.balanceSymbol,this.profileName=Me.state.profileName,this.profileImage=Me.state.profileImage,this.network=Ze.state.caipNetwork,this.unsubscribe.push(Me.subscribe(t=>{t.isConnected?(this.address=t.address,this.balanceVal=t.balance,this.profileName=t.profileName,this.profileImage=t.profileImage,this.balanceSymbol=t.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),Ze.subscribeKey("caipNetwork",t=>this.network=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var r;const t=this.networkImages[((r=this.network)==null?void 0:r.imageId)??""],n=this.balance==="show";return Z`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${Te(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${Te(t)}
        avatarSrc=${Te(this.profileImage)}
        balance=${n?se.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){_t.open()}};jr([wt({type:Boolean})],dr.prototype,"disabled",void 0);jr([wt()],dr.prototype,"balance",void 0);jr([me()],dr.prototype,"address",void 0);jr([me()],dr.prototype,"balanceVal",void 0);jr([me()],dr.prototype,"balanceSymbol",void 0);jr([me()],dr.prototype,"profileName",void 0);jr([me()],dr.prototype,"profileImage",void 0);jr([me()],dr.prototype,"network",void 0);dr=jr([ee("w3m-account-button")],dr);var Oo=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ti=class extends ke{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=Me.state.isConnected,this.unsubscribe.push(Me.subscribeKey("isConnected",t=>{this.isAccount=t}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return this.isAccount?Z`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${Te(this.balance)}
          >
          </w3m-account-button>
        `:Z`
          <w3m-connect-button
            size=${Te(this.size)}
            label=${Te(this.label)}
            loadingLabel=${Te(this.loadingLabel)}
          ></w3m-connect-button>
        `}};Oo([wt({type:Boolean})],Ti.prototype,"disabled",void 0);Oo([wt()],Ti.prototype,"balance",void 0);Oo([wt()],Ti.prototype,"size",void 0);Oo([wt()],Ti.prototype,"label",void 0);Oo([wt()],Ti.prototype,"loadingLabel",void 0);Oo([me()],Ti.prototype,"isAccount",void 0);Ti=Oo([ee("w3m-button")],Ti);var kc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let zs=class extends ke{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=_t.state.open,this.unsubscribe.push(_t.subscribeKey("open",t=>this.open=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return Z`
      <wui-connect-button
        size=${Te(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?_t.close():_t.open()}};kc([wt()],zs.prototype,"size",void 0);kc([wt()],zs.prototype,"label",void 0);kc([wt()],zs.prototype,"loadingLabel",void 0);kc([me()],zs.prototype,"open",void 0);zs=kc([ee("w3m-connect-button")],zs);const qA=yn`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`;var n6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const hy="scroll-lock";let rc=class extends ke{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=_t.state.open,this.initializeTheming(),_e.prefetch(),this.unsubscribe.push(_t.subscribeKey("open",t=>t?this.onOpen():this.onClose())),Ue.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.open?Z`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(t){t.target===t.currentTarget&&_t.close()}initializeTheming(){const{themeVariables:t,themeMode:n}=bn.state,r=je.getColorTheme(n);f$(t,r)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,Fn.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=hy,t.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${hy}"]`);t&&t.remove()}onAddKeyboardListener(){var n;this.abortController=new AbortController;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",r=>{if(r.key==="Escape")_t.close();else if(r.key==="Tab"){const{tagName:i}=r.target;i&&!i.includes("W3M-")&&!i.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}};rc.styles=qA;n6([me()],rc.prototype,"open",void 0);rc=n6([ee("w3m-modal")],rc);const GA=Object.freeze(Object.defineProperty({__proto__:null,get W3mModal(){return rc}},Symbol.toStringTag,{value:"Module"}));var Wf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let ic=class extends ke{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=Ze.state.caipNetwork,this.connected=Me.state.isConnected,this.unsubscribe.push(Ze.subscribeKey("caipNetwork",t=>this.network=t),Me.subscribeKey("isConnected",t=>this.connected=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){var t;return Z`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${Te(Et.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${((t=this.network)==null?void 0:t.name)??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){_t.open({view:"Networks"})}};Wf([wt({type:Boolean})],ic.prototype,"disabled",void 0);Wf([me()],ic.prototype,"network",void 0);Wf([me()],ic.prototype,"connected",void 0);ic=Wf([ee("w3m-network-button")],ic);const KA=yn`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`;var r6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Nd=class extends ke{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=be.state.view,this.unsubscribe.push(be.subscribeKey("view",t=>this.onViewChange(t)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([t])=>{const n=`${t==null?void 0:t.contentRect.height}px`;this.prevHeight!=="0px"&&(await this.animate([{height:this.prevHeight},{height:n}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=n}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){var t;(t=this.resizeObserver)==null||t.unobserve(this.getWrapper()),this.unsubscribe.forEach(n=>n())}render(){return Z`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":return Z`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return Z`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return Z`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return Z`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return Z`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return Z`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return Z`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return Z`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return Z`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return Z`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return Z`<w3m-downloads-view></w3m-downloads-view>`;default:return Z`<w3m-connect-view></w3m-connect-view>`}}async onViewChange(t){const{history:n}=be.state;let r=-10,i=10;n.length<this.prevHistoryLength&&(r=10,i=-10),this.prevHistoryLength=n.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${r}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=t,await this.animate([{opacity:0,transform:`translateX(${i}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div")}};Nd.styles=KA;r6([me()],Nd.prototype,"view",void 0);Nd=r6([ee("w3m-router")],Nd);const ZA=yn`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`;var ji=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let fr=class extends ke{constructor(){super(),this.usubscribe=[],this.networkImages=pi.state.networkImages,this.address=Me.state.address,this.profileImage=Me.state.profileImage,this.profileName=Me.state.profileName,this.balance=Me.state.balance,this.balanceSymbol=Me.state.balanceSymbol,this.network=Ze.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(Me.subscribe(t=>{t.address?(this.address=t.address,this.profileImage=t.profileImage,this.profileName=t.profileName,this.balance=t.balance,this.balanceSymbol=t.balanceSymbol):_t.close()}),Ze.subscribeKey("caipNetwork",t=>{t!=null&&t.id&&(this.network=t)}))}disconnectedCallback(){this.usubscribe.forEach(t=>t())}render(){var n,r;if(!this.address)throw new Error("w3m-account-view: No account provided");const t=this.networkImages[((n=this.network)==null?void 0:n.imageId)??""];return Z`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${Te(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?je.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):je.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${se.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${t?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${Te(t)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${((r=this.network)==null?void 0:r.name)??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){const{addressExplorerUrl:t}=Me.state;return t?Z`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){const{requestedCaipNetworks:t}=Ze.state,n=t?t.length>1:!1,r=t==null?void 0:t.find(({id:i})=>{var o;return i===((o=this.network)==null?void 0:o.id)});return n||!r}onCopyAddress(){try{this.address&&(se.copyToClopboard(this.address),Fn.showSuccess("Address copied"))}catch{Fn.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&be.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await Ae.disconnect(),Ue.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),_t.close()}catch{Ue.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),Fn.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){const{addressExplorerUrl:t}=Me.state;t&&se.openHref(t,"_blank")}};fr.styles=ZA;ji([me()],fr.prototype,"address",void 0);ji([me()],fr.prototype,"profileImage",void 0);ji([me()],fr.prototype,"profileName",void 0);ji([me()],fr.prototype,"balance",void 0);ji([me()],fr.prototype,"balanceSymbol",void 0);ji([me()],fr.prototype,"network",void 0);ji([me()],fr.prototype,"disconecting",void 0);fr=ji([ee("w3m-account-view")],fr);var i6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Kp=class extends ke{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=se.debounce(t=>{this.search=t})}render(){const t=this.search.length>=2;return Z`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${t?Z`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:Z`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(t){this.onDebouncedSearch(t.detail)}qrButtonTemplate(){return se.isMobile()?Z`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){be.push("ConnectingWalletConnect")}};i6([me()],Kp.prototype,"search",void 0);Kp=i6([ee("w3m-all-wallets-view")],Kp);const QA=yn`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`;var o6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Rd=class extends ke{constructor(){super(),this.unsubscribe=[],this.connectors=Un.state.connectors,this.unsubscribe.push(Un.subscribeKey("connectors",t=>this.connectors=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return Z`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(se.isMobile())return null;const t=this.connectors.find(n=>n.type==="WALLET_CONNECT");return t?Z`
      <wui-list-wallet
        imageSrc=${Te(Et.getConnectorImage(t))}
        name=${t.name??"Unknown"}
        @click=${()=>this.onConnector(t)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){const{customWallets:t}=Ve.state;return t!=null&&t.length?this.filterOutDuplicateWallets(t).map(r=>Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}featuredTemplate(){const{featured:t}=_e.state;return t.length?this.filterOutDuplicateWallets(t).map(r=>Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getWalletImage(r))}
          name=${r.name??"Unknown"}
          @click=${()=>this.onConnectWallet(r)}
        >
        </wui-list-wallet>
      `):null}recentTemplate(){return hi.getRecentWallets().map(n=>Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getWalletImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnectWallet(n)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(t=>t.type!=="ANNOUNCED"?null:Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){const t=this.connectors.find(n=>n.type==="ANNOUNCED");return this.connectors.map(n=>n.type!=="INJECTED"||!Ae.checkInstalled()?null:Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getConnectorImage(n))}
          name=${n.name??"Unknown"}
          @click=${()=>this.onConnector(n)}
          tagLabel=${Te(t?void 0:"installed")}
          tagVariant=${Te(t?void 0:"success")}
        >
        </wui-list-wallet>
      `)}connectorsTemplate(){return this.connectors.map(t=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(t.type)?null:Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){const t=Math.floor(_e.state.count/10)*10;return Z`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${t}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){const{recommended:t}=_e.state,{customWallets:n,featuredWalletIds:r}=Ve.state,{connectors:i}=Un.state,o=hi.getRecentWallets(),s=i.filter(u=>u.type==="ANNOUNCED");if(r||n||!t.length)return null;const a=s.length+o.length,l=Math.max(0,2-a);return this.filterOutDuplicateWallets(t).slice(0,l).map(u=>Z`
        <wui-list-wallet
          imageSrc=${Te(Et.getWalletImage(u))}
          name=${(u==null?void 0:u.name)??"Unknown"}
          @click=${()=>this.onConnectWallet(u)}
        >
        </wui-list-wallet>
      `)}onConnector(t){t.type==="WALLET_CONNECT"?se.isMobile()?be.push("AllWallets"):be.push("ConnectingWalletConnect"):be.push("ConnectingExternal",{connector:t})}filterOutDuplicateWallets(t){const{connectors:n}=Un.state,i=hi.getRecentWallets().map(a=>a.id),o=n.map(a=>{var l;return(l=a.info)==null?void 0:l.rdns}).filter(Boolean);return t.filter(a=>!i.includes(a.id)&&!o.includes(a.rdns??void 0))}onAllWallets(){Ue.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),be.push("AllWallets")}onConnectWallet(t){be.push("ConnectingWalletConnect",{wallet:t})}};Rd.styles=QA;o6([me()],Rd.prototype,"connectors",void 0);Rd=o6([ee("w3m-connect-view")],Rd);const YA=yn`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`;var Io=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};class on extends ke{constructor(){var t,n,r,i;super(),this.wallet=(t=be.state.data)==null?void 0:t.wallet,this.connector=(n=be.state.data)==null?void 0:n.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=Et.getWalletImage(this.wallet)??Et.getConnectorImage(this.connector),this.name=((r=this.wallet)==null?void 0:r.name)??((i=this.connector)==null?void 0:i.name)??"Wallet",this.isRetrying=!1,this.uri=Ae.state.wcUri,this.error=Ae.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(Ae.subscribeKey("wcUri",o=>{var s;this.uri=o,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,(s=this.onConnect)==null||s.call(this))}),Ae.subscribeKey("wcError",o=>this.error=o),Ae.subscribeKey("buffering",o=>this.buffering=o))}firstUpdated(){var t;(t=this.onAutoConnect)==null||t.call(this),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),clearTimeout(this.timeout)}render(){var r;(r=this.onRender)==null||r.call(this),this.onShowRetry();const t=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel;let n=`Continue in ${this.name}`;return this.buffering&&(n="Connecting..."),this.error&&(n="Connection declined"),Z`
      <wui-flex
        data-error=${Te(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${Te(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${n}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?Z`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}onTryAgain(){var t,n;this.buffering||(Ae.setWcError(!1),this.onRetry?(this.isRetrying=!0,(t=this.onRetry)==null||t.call(this)):(n=this.onConnect)==null||n.call(this))}loaderTemplate(){const t=bn.state.themeVariables["--w3m-border-radius-master"],n=t?parseInt(t.replace("px",""),10):4;return Z`<wui-loading-thumbnail radius=${n*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(se.copyToClopboard(this.uri),Fn.showSuccess("Link copied"))}catch{Fn.showError("Failed to copy")}}}on.styles=YA;Io([me()],on.prototype,"uri",void 0);Io([me()],on.prototype,"error",void 0);Io([me()],on.prototype,"ready",void 0);Io([me()],on.prototype,"showRetry",void 0);Io([me()],on.prototype,"buffering",void 0);Io([wt({type:Boolean})],on.prototype,"isMobile",void 0);Io([wt()],on.prototype,"onRetry",void 0);var JA=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const XA={INJECTED:"browser",ANNOUNCED:"browser"};let py=class extends on{constructor(){if(super(),!this.connector)throw new Error("w3m-connecting-view: No connector provided");Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:XA[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await Ae.connectExternal(this.connector),_t.close(),Ue.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(t){Ue.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};py=JA([ee("w3m-connecting-external-view")],py);var Am=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Md=class extends ke{constructor(){var t;super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=(t=be.state.data)==null?void 0:t.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),Ma.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),Z`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):Z`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(t=!1){try{const{wcPairingExpiry:n}=Ae.state;(t||se.isPairingExpired(n))&&(Ae.connectWalletConnect(),await Ae.state.wcPromise,this.finalizeConnection(),_t.close())}catch(n){Ue.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(n==null?void 0:n.message)??"Unknown"}}),Ae.setWcError(!0),se.isAllowedRetry(this.lastRetry)&&(Fn.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){const{wcLinking:t,recentWallet:n}=Ae.state;t&&hi.setWalletConnectDeepLink(t),n&&hi.setWeb3ModalRecent(n),Ue.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:t?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw new Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;const{mobile_link:t,desktop_link:n,webapp_link:r,injected:i,rdns:o}=this.wallet,s=i==null?void 0:i.map(({injected_id:w})=>w).filter(Boolean),a=o?[o]:s??[],l=a.length,c=t,u=r,d=Ae.checkInstalled(a),h=l&&d,p=n&&!se.isMobile();h&&this.platforms.push("browser"),c&&this.platforms.push(se.isMobile()?"mobile":"qrcode"),u&&this.platforms.push("web"),p&&this.platforms.push("desktop"),!h&&l&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return Z`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return Z`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return Z`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return Z`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return Z`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return Z`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?Z`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("div");n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=t,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Am([me()],Md.prototype,"platform",void 0);Am([me()],Md.prototype,"platforms",void 0);Md=Am([ee("w3m-connecting-wc-view")],Md);var ek=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let gy=class extends ke{constructor(){var t;super(...arguments),this.wallet=(t=be.state.data)==null?void 0:t.wallet}render(){if(!this.wallet)throw new Error("w3m-downloads-view");return Z`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){var t;return(t=this.wallet)!=null&&t.chrome_store?Z`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){var t;return(t=this.wallet)!=null&&t.app_store?Z`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){var t;return(t=this.wallet)!=null&&t.play_store?Z`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){var t;return(t=this.wallet)!=null&&t.homepage?Z`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){var t;(t=this.wallet)!=null&&t.chrome_store&&se.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&se.openHref(this.wallet.homepage,"_blank")}};gy=ek([ee("w3m-downloads-view")],gy);var tk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const nk="https://walletconnect.com/explorer";let my=class extends ke{render(){return Z`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{se.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){const{recommended:t,featured:n}=_e.state,{customWallets:r}=Ve.state;return[...n,...r??[],...t].slice(0,4).map(o=>Z`
        <wui-list-wallet
          name=${o.name??"Unknown"}
          tagVariant="main"
          imageSrc=${Te(Et.getWalletImage(o))}
          @click=${()=>{se.openHref(o.homepage??nk,"_blank")}}
        ></wui-list-wallet>
      `)}};my=tk([ee("w3m-get-wallet-view")],my);const rk=yn`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`;var Hf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ws=class extends ke{constructor(){var t;super(),this.network=(t=be.state.data)==null?void 0:t.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=Ze.state.caipNetwork,this.unsubscribe.push(Ze.subscribeKey("caipNetwork",n=>{var r;(n==null?void 0:n.id)!==((r=this.currentNetwork)==null?void 0:r.id)&&be.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw new Error("w3m-network-switch-view: No network provided");this.onShowRetry();const t=this.error?"Switch declined":"Approve in wallet",n=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return Z`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${Te(Et.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:Z`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${t}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${n}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){var t;this.error&&!this.showRetry&&(this.showRetry=!0,((t=this.shadowRoot)==null?void 0:t.querySelector("wui-button")).animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"}))}async onSwitchNetwork(){try{this.error=!1,this.network&&(await Ze.switchActiveNetwork(this.network),be.goBack())}catch{this.error=!0}}};Ws.styles=rk;Hf([me()],Ws.prototype,"showRetry",void 0);Hf([me()],Ws.prototype,"error",void 0);Hf([me()],Ws.prototype,"currentNetwork",void 0);Ws=Hf([ee("w3m-network-switch-view")],Ws);var s6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Zp=class extends ke{constructor(){super(),this.unsubscribe=[],this.caipNetwork=Ze.state.caipNetwork,this.unsubscribe.push(Ze.subscribeKey("caipNetwork",t=>this.caipNetwork=t))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){return Z`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){Ue.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),be.push("WhatIsANetwork")}networksTemplate(){const{approvedCaipNetworkIds:t,requestedCaipNetworks:n,supportsAllNetworks:r}=Ze.state,i=t,o=n;return i!=null&&i.length&&(o==null||o.sort((s,a)=>i.indexOf(a.id)-i.indexOf(s.id))),o==null?void 0:o.map(s=>{var a;return Z`
        <wui-card-select
          .selected=${((a=this.caipNetwork)==null?void 0:a.id)===s.id}
          imageSrc=${Te(Et.getNetworkImage(s))}
          type="network"
          name=${s.name??s.id}
          @click=${()=>this.onSwitchNetwork(s)}
          .disabled=${!r&&!(i!=null&&i.includes(s.id))}
        ></wui-card-select>
      `})}async onSwitchNetwork(t){const{isConnected:n}=Me.state,{approvedCaipNetworkIds:r,supportsAllNetworks:i,caipNetwork:o}=Ze.state;n&&(o==null?void 0:o.id)!==t.id?r!=null&&r.includes(t.id)?await Ze.switchActiveNetwork(t):i&&be.push("SwitchNetwork",{network:t}):n||(Ze.setCaipNetwork(t),be.push("Connect"))}};s6([me()],Zp.prototype,"caipNetwork",void 0);Zp=s6([ee("w3m-networks-view")],Zp);var ik=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const ok=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}];let wy=class extends ke{render(){return Z`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ok}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{se.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};wy=ik([ee("w3m-what-is-a-network-view")],wy);var sk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const ak=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}];let yy=class extends ke{render(){return Z`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ak}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){Ue.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),be.push("GetWallet")}};yy=sk([ee("w3m-what-is-a-wallet-view")],yy);const lk=yn`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`;var Dc=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const vy="local-paginator";let $o=class extends ke{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!_e.state.wallets.length,this.wallets=_e.state.wallets,this.recommended=_e.state.recommended,this.featured=_e.state.featured,this.unsubscribe.push(_e.subscribeKey("wallets",t=>this.wallets=t),_e.subscribeKey("recommended",t=>this.recommended=t),_e.subscribeKey("featured",t=>this.featured=t))}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){var t;this.unsubscribe.forEach(n=>n()),(t=this.paginationObserver)==null||t.disconnect()}render(){return Z`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector("wui-grid");this.initial&&t&&(await _e.fetchWallets({page:1}),await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(t,n){return[...Array(t)].map(()=>Z`
        <wui-card-select-loader type="wallet" id=${Te(n)}></wui-card-select-loader>
      `)}walletsTemplate(){return[...this.featured,...this.recommended,...this.wallets].map(n=>Z`
        <wui-card-select
          imageSrc=${Te(Et.getWalletImage(n))}
          type="wallet"
          name=${n.name}
          @click=${()=>this.onConnectWallet(n)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){const{wallets:t,recommended:n,featured:r,count:i}=_e.state,o=window.innerWidth<352?3:4,s=t.length+n.length;let l=Math.ceil(s/o)*o-s+o;return l-=t.length?r.length%o:0,i===0||[...r,...t,...n].length<i?this.shimmerTemplate(l,vy):null}createPaginationObserver(){var n;const t=(n=this.shadowRoot)==null?void 0:n.querySelector(`#${vy}`);t&&(this.paginationObserver=new IntersectionObserver(([r])=>{if(r!=null&&r.isIntersecting&&!this.initial){const{page:i,count:o,wallets:s}=_e.state;s.length<o&&_e.fetchWallets({page:i+1})}}),this.paginationObserver.observe(t))}onConnectWallet(t){const{connectors:n}=Un.state,r=n.find(({explorerId:i})=>i===t.id);r?be.push("ConnectingExternal",{connector:r}):be.push("ConnectingWalletConnect",{wallet:t})}};$o.styles=lk;Dc([me()],$o.prototype,"initial",void 0);Dc([me()],$o.prototype,"wallets",void 0);Dc([me()],$o.prototype,"recommended",void 0);Dc([me()],$o.prototype,"featured",void 0);$o=Dc([ee("w3m-all-wallets-list")],$o);const ck=yn`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`;var km=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let oc=class extends ke{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?Z`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await _e.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){const{search:t}=_e.state;return t.length?Z`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${t.map(n=>Z`
            <wui-card-select
              imageSrc=${Te(Et.getWalletImage(n))}
              type="wallet"
              name=${n.name}
              @click=${()=>this.onConnectWallet(n)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:Z`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(t){const{connectors:n}=Un.state,r=n.find(({explorerId:i})=>i===t.id);r?be.push("ConnectingExternal",{connector:r}):be.push("ConnectingWalletConnect",{wallet:t})}};oc.styles=ck;km([me()],oc.prototype,"loading",void 0);km([wt()],oc.prototype,"query",void 0);oc=km([ee("w3m-all-wallets-search")],oc);var Vf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let sc=class extends ke{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(Ae.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=this.generateTabs();return Z`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${t}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){const t=this.platforms.map(n=>n==="browser"?{label:"Browser",icon:"extension",platform:"browser"}:n==="mobile"?{label:"Mobile",icon:"mobile",platform:"mobile"}:n==="qrcode"?{label:"Mobile",icon:"mobile",platform:"qrcode"}:n==="web"?{label:"Webapp",icon:"browser",platform:"web"}:n==="desktop"?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=t.map(({platform:n})=>n),t}onTabChange(t){var r;const n=this.platformTabs[t];n&&((r=this.onSelectPlatfrom)==null||r.call(this,n))}};Vf([wt({type:Array})],sc.prototype,"platforms",void 0);Vf([wt()],sc.prototype,"onSelectPlatfrom",void 0);Vf([me()],sc.prototype,"buffering",void 0);sc=Vf([ee("w3m-connecting-header")],sc);var uk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let by=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;const{connectors:t}=Un.state,n=t.find(i=>{var o,s;return i.type==="ANNOUNCED"&&((o=i.info)==null?void 0:o.rdns)===((s=this.wallet)==null?void 0:s.rdns)}),r=t.find(i=>i.type==="INJECTED");n?await Ae.connectExternal(n):r&&await Ae.connectExternal(r),_t.close(),Ue.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(t){Ue.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:(t==null?void 0:t.message)??"Unknown"}}),this.error=!0}}};by=uk([ee("w3m-connecting-wc-browser")],by);var dk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let xy=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{var t;(t=this.onConnect)==null||t.call(this)},200))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.desktop_link&&this.uri)try{this.error=!1;const{desktop_link:n,name:r}=this.wallet,{redirect:i,href:o}=se.formatNativeUrl(n,this.uri);Ae.setWcLinking({name:r,href:o}),Ae.setRecentWallet(this.wallet),se.openHref(i,"_self")}catch{this.error=!0}}};xy=dk([ee("w3m-connecting-wc-desktop")],xy);var fk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Cy=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){var t;!this.ready&&this.uri&&(this.ready=!0,(t=this.onConnect)==null||t.call(this))}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.mobile_link&&this.uri)try{this.error=!1;const{mobile_link:n,name:r}=this.wallet,{redirect:i,href:o}=se.formatNativeUrl(n,this.uri);Ae.setWcLinking({name:r,href:o}),Ae.setRecentWallet(this.wallet),se.openHref(i,"_self")}catch{this.error=!0}}onBuffering(){const t=se.isIos();(document==null?void 0:document.visibilityState)==="visible"&&!this.error&&t&&(Ae.setBuffering(!0),setTimeout(()=>{Ae.setBuffering(!1)},5e3))}};Cy=fk([ee("w3m-connecting-wc-mobile")],Cy);const hk=yn`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;var pk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Qp=class extends on{constructor(){var t;super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:((t=this.wallet)==null?void 0:t.name)??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),Z`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;const t=this.getBoundingClientRect().width-40,n=this.wallet?this.wallet.name:void 0;return Ae.setWcLinking(void 0),Ae.setRecentWallet(this.wallet),Z`<wui-qr-code
      size=${t}
      theme=${bn.state.themeMode}
      uri=${this.uri}
      imageSrc=${Te(Et.getWalletImage(this.wallet))}
      alt=${Te(n)}
    ></wui-qr-code>`}};Qp.styles=hk;Qp=pk([ee("w3m-connecting-wc-qrcode")],Qp);var gk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Ey=class extends ke{constructor(){var t;if(super(),this.wallet=(t=be.state.data)==null?void 0:t.wallet,!this.wallet)throw new Error("w3m-connecting-wc-unsupported: No wallet provided");Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return Z`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${Te(Et.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};Ey=gk([ee("w3m-connecting-wc-unsupported")],Ey);var mk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let _y=class extends on{constructor(){if(super(),!this.wallet)throw new Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",Ue.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){var t;if((t=this.wallet)!=null&&t.webapp_link&&this.uri)try{this.error=!1;const{webapp_link:n,name:r}=this.wallet,{redirect:i,href:o}=se.formatUniversalUrl(n,this.uri);Ae.setWcLinking({name:r,href:o}),Ae.setRecentWallet(this.wallet),se.openHref(i,"_blank")}catch{this.error=!0}}};_y=mk([ee("w3m-connecting-wc-web")],_y);const wk=yn`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`;var qf=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};function Sy(){var i,o,s,a,l,c;const e=(o=(i=be.state.data)==null?void 0:i.connector)==null?void 0:o.name,t=(a=(s=be.state.data)==null?void 0:s.wallet)==null?void 0:a.name,n=(c=(l=be.state.data)==null?void 0:l.network)==null?void 0:c.name,r=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:r??"Connect Wallet",ConnectingWalletConnect:r??"WalletConnect",Networks:"Choose Network",SwitchNetwork:n??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:r?`Get ${r}`:"Downloads"}}let Hs=class extends ke{constructor(){super(),this.unsubscribe=[],this.heading=Sy()[be.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(be.subscribeKey("view",t=>{this.onViewChange(t),this.onHistoryChange()}),Ae.subscribeKey("buffering",t=>this.buffering=t))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){return Z`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${_t.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){Ue.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),be.push("WhatIsAWallet")}titleTemplate(){return Z`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){const{view:t}=be.state,n=t==="Connect";return this.showBack?Z`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${be.goBack}
      ></wui-icon-link>`:Z`<wui-icon-link
      data-hidden=${!n}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?Z`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(t){var r;const n=(r=this.shadowRoot)==null?void 0:r.querySelector("wui-text");if(n){const i=Sy()[t];await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=i,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){var r;const{history:t}=be.state,n=(r=this.shadowRoot)==null?void 0:r.querySelector("#dynamic");t.length>1&&!this.showBack&&n?(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&n&&(await n.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,n.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};Hs.styles=[wk];qf([me()],Hs.prototype,"heading",void 0);qf([me()],Hs.prototype,"buffering",void 0);qf([me()],Hs.prototype,"showBack",void 0);Hs=qf([ee("w3m-header")],Hs);var a6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Yp=class extends ke{constructor(){super(...arguments),this.data=[]}render(){return Z`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(t=>Z`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${t.images.map(n=>Z`<wui-visual name=${n}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${t.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${t.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};a6([wt({type:Array})],Yp.prototype,"data",void 0);Yp=a6([ee("w3m-help-widget")],Yp);const yk=yn`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;var vk=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Jp=class extends ke{render(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=Ve.state;return!t&&!n?null:Z`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `}andTemplate(){const{termsConditionsUrl:t,privacyPolicyUrl:n}=Ve.state;return t&&n?"and":""}termsTemplate(){const{termsConditionsUrl:t}=Ve.state;return t?Z`<a href=${t}>Terms of Service</a>`:null}privacyTemplate(){const{privacyPolicyUrl:t}=Ve.state;return t?Z`<a href=${t}>Privacy Policy</a>`:null}};Jp.styles=[yk];Jp=vk([ee("w3m-legal-footer")],Jp);const bk=yn`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`;var l6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};let Bd=class extends ke{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;const{name:t,app_store:n,play_store:r,chrome_store:i,homepage:o}=this.wallet,s=se.isMobile(),a=se.isIos(),l=se.isAndroid(),c=[n,r,o,i].filter(Boolean).length>1,u=je.getTruncateString({string:t,charsStart:12,charsEnd:0,truncate:"end"});return c&&!s?Z`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${()=>be.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&o?Z`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:n&&a?Z`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:r&&l?Z`
        <wui-cta-button
          label=${`Don't have ${u}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){var t;(t=this.wallet)!=null&&t.app_store&&se.openHref(this.wallet.app_store,"_blank")}onPlayStore(){var t;(t=this.wallet)!=null&&t.play_store&&se.openHref(this.wallet.play_store,"_blank")}onHomePage(){var t;(t=this.wallet)!=null&&t.homepage&&se.openHref(this.wallet.homepage,"_blank")}};Bd.styles=[bk];l6([wt({type:Object})],Bd.prototype,"wallet",void 0);Bd=l6([ee("w3m-mobile-download-links")],Bd);const xk=yn`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`;var c6=globalThis&&globalThis.__decorate||function(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o};const Ck={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}};let jd=class extends ke{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=Fn.state.open,this.unsubscribe.push(Fn.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:n}=Fn.state,r=Ck[n];return Z`
      <wui-snackbar
        message=${t}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>Fn.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};jd.styles=xk;c6([me()],jd.prototype,"open",void 0);jd=c6([ee("w3m-snackbar")],jd);let $y=!1;class Ek{constructor(t){this.initPromise=void 0,this.setIsConnected=n=>{Me.setIsConnected(n)},this.setCaipAddress=n=>{Me.setCaipAddress(n)},this.setBalance=(n,r)=>{Me.setBalance(n,r)},this.setProfileName=n=>{Me.setProfileName(n)},this.setProfileImage=n=>{Me.setProfileImage(n)},this.resetAccount=()=>{Me.resetAccount()},this.setCaipNetwork=n=>{Ze.setCaipNetwork(n)},this.getCaipNetwork=()=>Ze.state.caipNetwork,this.setRequestedCaipNetworks=n=>{Ze.setRequestedCaipNetworks(n)},this.getApprovedCaipNetworksData=()=>Ze.getApprovedCaipNetworksData(),this.resetNetwork=()=>{Ze.resetNetwork()},this.setConnectors=n=>{Un.setConnectors(n)},this.addConnector=n=>{Un.addConnector(n)},this.getConnectors=()=>Un.getConnectors(),this.resetWcConnection=()=>{Ae.resetWcConnection()},this.fetchIdentity=n=>KS.fetchIdentity(n),this.setAddressExplorerUrl=n=>{Me.setAddressExplorerUrl(n)},this.initControllers(t),this.initOrContinue()}async open(t){await this.initOrContinue(),_t.open(t)}async close(){await this.initOrContinue(),_t.close()}getThemeMode(){return bn.state.themeMode}getThemeVariables(){return bn.state.themeVariables}setThemeMode(t){bn.setThemeMode(t),p4(bn.state.themeMode)}setThemeVariables(t){bn.setThemeVariables(t),h$(bn.state.themeVariables)}subscribeTheme(t){return bn.subscribe(t)}getState(){return{...As.state}}subscribeState(t){return As.subscribe(t)}getEvent(){return{...Ue.state}}subscribeEvents(t){return Ue.subscribe(t)}initControllers(t){Ze.setClient(t.networkControllerClient),Ze.setDefaultCaipNetwork(t.defaultChain),Ve.setProjectId(t.projectId),Ve.setIncludeWalletIds(t.includeWalletIds),Ve.setExcludeWalletIds(t.excludeWalletIds),Ve.setFeaturedWalletIds(t.featuredWalletIds),Ve.setTokens(t.tokens),Ve.setTermsConditionsUrl(t.termsConditionsUrl),Ve.setPrivacyPolicyUrl(t.privacyPolicyUrl),Ve.setCustomWallets(t.customWallets),Ve.setEnableAnalytics(t.enableAnalytics),Ve.setSdkVersion(t._sdkVersion),Ae.setClient(t.connectionControllerClient),t.themeMode&&bn.setThemeMode(t.themeMode),t.themeVariables&&bn.setThemeVariables(t.themeVariables)}async initOrContinue(){return!this.initPromise&&!$y&&se.isClient()&&($y=!0,this.initPromise=new Promise(async t=>{await Promise.all([Ps(()=>import("./index.js"),[]),Ps(()=>Promise.resolve().then(()=>GA),void 0)]);const n=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",n),t()})),this.initPromise}}const eo="walletConnect",Dm="injected",Om="coinbaseWallet",Im="safe",Nm="ledger",Vo="eip6963",nr="eip155",_k="wallet_addEthereumChain",Sk="wagmi.wallet",$k="eip6963:announceProvider",Pk="eip6963:requestProvider",u6="3.1.0",Xp={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},Tk={[Om]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[Im]:"461db637-8616-43ce-035a-d89b8a1d5800",[Nm]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[eo]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[Dm]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},Ak={[Om]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[Im]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[Nm]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},kk={[Dm]:"Browser Wallet",[eo]:"WalletConnect",[Om]:"Coinbase",[Nm]:"Ledger",[Im]:"Safe"},Dk={[Dm]:"INJECTED",[eo]:"WALLET_CONNECT",[Vo]:"ANNOUNCED"};function Ok(e){if(e)return{id:`${nr}:${e.id}`,name:e.name,imageId:Xp[e.id]}}function Ik(e){if(!e)return;const t={};return Object.entries(e).forEach(([n,r])=>{t[`${nr}:${n}`]=r}),t}function Sa(e){return e?Number(e.split(":")[1]):void 0}class Nk extends Ek{constructor(t){const{wagmiConfig:n,chains:r,defaultChain:i,tokens:o,_sdkVersion:s,...a}=t;if(!n)throw new Error("web3modal:constructor - wagmiConfig is undefined");if(!a.projectId)throw new Error("web3modal:constructor - projectId is undefined");if(!n.connectors.find(u=>u.id===eo))throw new Error("web3modal:constructor - WalletConnectConnector is required");const l={switchCaipNetwork:async u=>{const d=Sa(u==null?void 0:u.id);d&&await e4({chainId:d})},async getApprovedCaipNetworksData(){var d,h,p,w;const u=localStorage.getItem(Sk);if(u!=null&&u.includes(eo)){const x=n.connectors.find(C=>C.id===eo);if(!x)throw new Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");const b=(h=(d=(await x.getProvider()).signer)==null?void 0:d.session)==null?void 0:h.namespaces,g=(p=b==null?void 0:b[nr])==null?void 0:p.methods,v=(w=b==null?void 0:b[nr])==null?void 0:w.chains;return{supportsAllNetworks:g==null?void 0:g.includes(_k),approvedCaipNetworkIds:v}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},c={connectWalletConnect:async u=>{var p;const d=n.connectors.find(w=>w.id===eo);if(!d)throw new Error("connectionControllerClient:getWalletConnectUri - connector is undefined");d.on("message",w=>{w.type==="display_uri"&&(u(w.data),d.removeAllListeners())});const h=Sa((p=this.getCaipNetwork())==null?void 0:p.id);await M2({connector:d,chainId:h})},connectExternal:async({id:u,provider:d,info:h})=>{var x,E;const p=n.connectors.find(b=>b.id===u);if(!p)throw new Error("connectionControllerClient:connectExternal - connector is undefined");d&&h&&p.id===Vo&&((x=p.setEip6963Wallet)==null||x.call(p,{provider:d,info:h}));const w=Sa((E=this.getCaipNetwork())==null?void 0:E.id);await M2({connector:p,chainId:w})},checkInstalled:u=>{const d=this.getConnectors().filter(p=>p.type==="ANNOUNCED"),h=this.getConnectors().find(p=>p.type==="INJECTED");return u?d.length&&u.some(w=>d.some(x=>{var E;return((E=x.info)==null?void 0:E.rdns)===w}))?!0:h&&window!=null&&window.ethereum?u.some(p=>{var w;return!!((w=window.ethereum)!=null&&w[String(p)])}):!1:!!window.ethereum},disconnect:J5};super({networkControllerClient:l,connectionControllerClient:c,defaultChain:Ok(i),tokens:Ik(o),_sdkVersion:s??`html-wagmi-${u6}`,...a}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=t,this.syncRequestedNetworks(r),this.syncConnectors(n),this.listenConnectors(n),t4(()=>this.syncAccount()),n4(()=>this.syncNetwork())}getState(){const t=super.getState();return{...t,selectedNetworkId:Sa(t.selectedNetworkId)}}subscribeState(t){return super.subscribeState(n=>t({...n,selectedNetworkId:Sa(n.selectedNetworkId)}))}syncRequestedNetworks(t){const n=t==null?void 0:t.map(r=>{var i,o;return{id:`${nr}:${r.id}`,name:r.name,imageId:Xp[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}});this.setRequestedCaipNetworks(n??[])}async syncAccount(){const{address:t,isConnected:n}=hd(),{chain:r}=pd();if(this.resetAccount(),n&&t&&r){const i=`${nr}:${r.id}:${t}`;this.setIsConnected(n),this.setCaipAddress(i),await Promise.all([this.syncProfile(t),this.syncBalance(t,r),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!n&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){var i,o,s,a;const{address:t,isConnected:n}=hd(),{chain:r}=pd();if(r){const l=String(r.id),c=`${nr}:${l}`;if(this.setCaipNetwork({id:c,name:r.name,imageId:Xp[r.id],imageUrl:(o=(i=this.options)==null?void 0:i.chainImages)==null?void 0:o[r.id]}),n&&t){const u=`${nr}:${r.id}:${t}`;if(this.setCaipAddress(u),(a=(s=r.blockExplorers)==null?void 0:s.default)!=null&&a.url){const d=`${r.blockExplorers.default.url}/address/${t}`;this.setAddressExplorerUrl(d)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(t,r)}}}async syncProfile(t){try{const{name:n,avatar:r}=await this.fetchIdentity({caipChainId:`${nr}:${Qa.id}`,address:t});this.setProfileName(n),this.setProfileImage(r)}catch{const n=await $S({address:t,chainId:Qa.id});if(n){this.setProfileName(n);const r=await SS({name:n,chainId:Qa.id});r&&this.setProfileImage(r)}}}async syncBalance(t,n){var i,o,s;const r=await _S({address:t,chainId:n.id,token:(s=(o=(i=this.options)==null?void 0:i.tokens)==null?void 0:o[n.id])==null?void 0:s.address});this.setBalance(r.formatted,r.symbol)}syncConnectors(t){const n=[];t.connectors.forEach(({id:r,name:i})=>{var o,s;r!==Vo&&n.push({id:r,explorerId:Ak[r],imageId:Tk[r],imageUrl:(s=(o=this.options)==null?void 0:o.connectorImages)==null?void 0:s[r],name:kk[r]??i,type:Dk[r]??"EXTERNAL"})}),this.setConnectors(n)}listenConnectors(t){const n=t.connectors.find(r=>r.id===Vo);typeof window<"u"&&n&&(window.addEventListener($k,r=>{var i,o;if(r.detail){const{info:s,provider:a}=r.detail;this.addConnector({id:Vo,type:"ANNOUNCED",imageUrl:s.icon??((o=(i=this.options)==null?void 0:i.connectorImages)==null?void 0:o[Vo]),name:s.name,provider:a,info:s}),n.isAuthorized({info:s,provider:a})}}),window.dispatchEvent(new Event(Pk)))}}var lu=globalThis&&globalThis.__classPrivateFieldSet||function(e,t,n,r,i){if(r==="m")throw new TypeError("Private method is not writable");if(r==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!i:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return r==="a"?i.call(e,n):i?i.value=n:t.set(e,n),n},cu=globalThis&&globalThis.__classPrivateFieldGet||function(e,t,n,r){if(n==="a"&&!r)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return n==="m"?r:n==="a"?r.call(e):r?r.value:t.get(e)},Du,Hr;const ch="connectedRdns";class Rk extends tm{constructor(t){super({chains:t.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",Du.set(this,void 0),Hr.set(this,void 0),lu(this,Du,this.options.getProvider(),"f")}async connect(t){var r;const n=await super.connect(t);return cu(this,Hr,"f")&&((r=this.storage)==null||r.setItem(ch,cu(this,Hr,"f").info.rdns)),n}async disconnect(){var t;await super.disconnect(),(t=this.storage)==null||t.removeItem(ch),lu(this,Hr,void 0,"f")}async isAuthorized(t){var r;const n=(r=this.storage)==null?void 0:r.getItem(ch);if(n){if(!t||n!==t.info.rdns)return!0;lu(this,Hr,t,"f")}return super.isAuthorized()}async getProvider(){var t;return Promise.resolve(((t=cu(this,Hr,"f"))==null?void 0:t.provider)??cu(this,Du,"f"))}setEip6963Wallet(t){lu(this,Hr,t,"f")}}Du=new WeakMap,Hr=new WeakMap;var d6={},Gf={};Gf.byteLength=jk;Gf.toByteArray=Uk;Gf.fromByteArray=Wk;var or=[],xn=[],Mk=typeof Uint8Array<"u"?Uint8Array:Array,uh="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(var Uo=0,Bk=uh.length;Uo<Bk;++Uo)or[Uo]=uh[Uo],xn[uh.charCodeAt(Uo)]=Uo;xn["-".charCodeAt(0)]=62;xn["_".charCodeAt(0)]=63;function f6(e){var t=e.length;if(t%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");n===-1&&(n=t);var r=n===t?0:4-n%4;return[n,r]}function jk(e){var t=f6(e),n=t[0],r=t[1];return(n+r)*3/4-r}function Lk(e,t,n){return(t+n)*3/4-n}function Uk(e){var t,n=f6(e),r=n[0],i=n[1],o=new Mk(Lk(e,r,i)),s=0,a=i>0?r-4:r,l;for(l=0;l<a;l+=4)t=xn[e.charCodeAt(l)]<<18|xn[e.charCodeAt(l+1)]<<12|xn[e.charCodeAt(l+2)]<<6|xn[e.charCodeAt(l+3)],o[s++]=t>>16&255,o[s++]=t>>8&255,o[s++]=t&255;return i===2&&(t=xn[e.charCodeAt(l)]<<2|xn[e.charCodeAt(l+1)]>>4,o[s++]=t&255),i===1&&(t=xn[e.charCodeAt(l)]<<10|xn[e.charCodeAt(l+1)]<<4|xn[e.charCodeAt(l+2)]>>2,o[s++]=t>>8&255,o[s++]=t&255),o}function Fk(e){return or[e>>18&63]+or[e>>12&63]+or[e>>6&63]+or[e&63]}function zk(e,t,n){for(var r,i=[],o=t;o<n;o+=3)r=(e[o]<<16&16711680)+(e[o+1]<<8&65280)+(e[o+2]&255),i.push(Fk(r));return i.join("")}function Wk(e){for(var t,n=e.length,r=n%3,i=[],o=16383,s=0,a=n-r;s<a;s+=o)i.push(zk(e,s,s+o>a?a:s+o));return r===1?(t=e[n-1],i.push(or[t>>2]+or[t<<4&63]+"==")):r===2&&(t=(e[n-2]<<8)+e[n-1],i.push(or[t>>10]+or[t>>4&63]+or[t<<2&63]+"=")),i.join("")}var Rm={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */Rm.read=function(e,t,n,r,i){var o,s,a=i*8-r-1,l=(1<<a)-1,c=l>>1,u=-7,d=n?i-1:0,h=n?-1:1,p=e[t+d];for(d+=h,o=p&(1<<-u)-1,p>>=-u,u+=a;u>0;o=o*256+e[t+d],d+=h,u-=8);for(s=o&(1<<-u)-1,o>>=-u,u+=r;u>0;s=s*256+e[t+d],d+=h,u-=8);if(o===0)o=1-c;else{if(o===l)return s?NaN:(p?-1:1)*(1/0);s=s+Math.pow(2,r),o=o-c}return(p?-1:1)*s*Math.pow(2,o-r)};Rm.write=function(e,t,n,r,i,o){var s,a,l,c=o*8-i-1,u=(1<<c)-1,d=u>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?0:o-1,w=r?1:-1,x=t<0||t===0&&1/t<0?1:0;for(t=Math.abs(t),isNaN(t)||t===1/0?(a=isNaN(t)?1:0,s=u):(s=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-s))<1&&(s--,l*=2),s+d>=1?t+=h/l:t+=h*Math.pow(2,1-d),t*l>=2&&(s++,l/=2),s+d>=u?(a=0,s=u):s+d>=1?(a=(t*l-1)*Math.pow(2,i),s=s+d):(a=t*Math.pow(2,d-1)*Math.pow(2,i),s=0));i>=8;e[n+p]=a&255,p+=w,a/=256,i-=8);for(s=s<<i|a,c+=i;c>0;e[n+p]=s&255,p+=w,s/=256,c-=8);e[n+p-w]|=x*128};/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */(function(e){const t=Gf,n=Rm,r=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;e.Buffer=a,e.SlowBuffer=g,e.INSPECT_MAX_BYTES=50;const i=2147483647;e.kMaxLength=i,a.TYPED_ARRAY_SUPPORT=o(),!a.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function o(){try{const P=new Uint8Array(1),m={foo:function(){return 42}};return Object.setPrototypeOf(m,Uint8Array.prototype),Object.setPrototypeOf(P,m),P.foo()===42}catch{return!1}}Object.defineProperty(a.prototype,"parent",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.buffer}}),Object.defineProperty(a.prototype,"offset",{enumerable:!0,get:function(){if(a.isBuffer(this))return this.byteOffset}});function s(P){if(P>i)throw new RangeError('The value "'+P+'" is invalid for option "size"');const m=new Uint8Array(P);return Object.setPrototypeOf(m,a.prototype),m}function a(P,m,y){if(typeof P=="number"){if(typeof m=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return d(P)}return l(P,m,y)}a.poolSize=8192;function l(P,m,y){if(typeof P=="string")return h(P,m);if(ArrayBuffer.isView(P))return w(P);if(P==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof P);if(Ie(P,ArrayBuffer)||P&&Ie(P.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&(Ie(P,SharedArrayBuffer)||P&&Ie(P.buffer,SharedArrayBuffer)))return x(P,m,y);if(typeof P=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const T=P.valueOf&&P.valueOf();if(T!=null&&T!==P)return a.from(T,m,y);const A=E(P);if(A)return A;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof P[Symbol.toPrimitive]=="function")return a.from(P[Symbol.toPrimitive]("string"),m,y);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof P)}a.from=function(P,m,y){return l(P,m,y)},Object.setPrototypeOf(a.prototype,Uint8Array.prototype),Object.setPrototypeOf(a,Uint8Array);function c(P){if(typeof P!="number")throw new TypeError('"size" argument must be of type number');if(P<0)throw new RangeError('The value "'+P+'" is invalid for option "size"')}function u(P,m,y){return c(P),P<=0?s(P):m!==void 0?typeof y=="string"?s(P).fill(m,y):s(P).fill(m):s(P)}a.alloc=function(P,m,y){return u(P,m,y)};function d(P){return c(P),s(P<0?0:b(P)|0)}a.allocUnsafe=function(P){return d(P)},a.allocUnsafeSlow=function(P){return d(P)};function h(P,m){if((typeof m!="string"||m==="")&&(m="utf8"),!a.isEncoding(m))throw new TypeError("Unknown encoding: "+m);const y=v(P,m)|0;let T=s(y);const A=T.write(P,m);return A!==y&&(T=T.slice(0,A)),T}function p(P){const m=P.length<0?0:b(P.length)|0,y=s(m);for(let T=0;T<m;T+=1)y[T]=P[T]&255;return y}function w(P){if(Ie(P,Uint8Array)){const m=new Uint8Array(P);return x(m.buffer,m.byteOffset,m.byteLength)}return p(P)}function x(P,m,y){if(m<0||P.byteLength<m)throw new RangeError('"offset" is outside of buffer bounds');if(P.byteLength<m+(y||0))throw new RangeError('"length" is outside of buffer bounds');let T;return m===void 0&&y===void 0?T=new Uint8Array(P):y===void 0?T=new Uint8Array(P,m):T=new Uint8Array(P,m,y),Object.setPrototypeOf(T,a.prototype),T}function E(P){if(a.isBuffer(P)){const m=b(P.length)|0,y=s(m);return y.length===0||P.copy(y,0,0,m),y}if(P.length!==void 0)return typeof P.length!="number"||at(P.length)?s(0):p(P);if(P.type==="Buffer"&&Array.isArray(P.data))return p(P.data)}function b(P){if(P>=i)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i.toString(16)+" bytes");return P|0}function g(P){return+P!=P&&(P=0),a.alloc(+P)}a.isBuffer=function(m){return m!=null&&m._isBuffer===!0&&m!==a.prototype},a.compare=function(m,y){if(Ie(m,Uint8Array)&&(m=a.from(m,m.offset,m.byteLength)),Ie(y,Uint8Array)&&(y=a.from(y,y.offset,y.byteLength)),!a.isBuffer(m)||!a.isBuffer(y))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(m===y)return 0;let T=m.length,A=y.length;for(let N=0,j=Math.min(T,A);N<j;++N)if(m[N]!==y[N]){T=m[N],A=y[N];break}return T<A?-1:A<T?1:0},a.isEncoding=function(m){switch(String(m).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},a.concat=function(m,y){if(!Array.isArray(m))throw new TypeError('"list" argument must be an Array of Buffers');if(m.length===0)return a.alloc(0);let T;if(y===void 0)for(y=0,T=0;T<m.length;++T)y+=m[T].length;const A=a.allocUnsafe(y);let N=0;for(T=0;T<m.length;++T){let j=m[T];if(Ie(j,Uint8Array))N+j.length>A.length?(a.isBuffer(j)||(j=a.from(j)),j.copy(A,N)):Uint8Array.prototype.set.call(A,j,N);else if(a.isBuffer(j))j.copy(A,N);else throw new TypeError('"list" argument must be an Array of Buffers');N+=j.length}return A};function v(P,m){if(a.isBuffer(P))return P.length;if(ArrayBuffer.isView(P)||Ie(P,ArrayBuffer))return P.byteLength;if(typeof P!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof P);const y=P.length,T=arguments.length>2&&arguments[2]===!0;if(!T&&y===0)return 0;let A=!1;for(;;)switch(m){case"ascii":case"latin1":case"binary":return y;case"utf8":case"utf-8":return Ur(P).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return y*2;case"hex":return y>>>1;case"base64":return ft(P).length;default:if(A)return T?-1:Ur(P).length;m=(""+m).toLowerCase(),A=!0}}a.byteLength=v;function C(P,m,y){let T=!1;if((m===void 0||m<0)&&(m=0),m>this.length||((y===void 0||y>this.length)&&(y=this.length),y<=0)||(y>>>=0,m>>>=0,y<=m))return"";for(P||(P="utf8");;)switch(P){case"hex":return U(this,m,y);case"utf8":case"utf-8":return F(this,m,y);case"ascii":return B(this,m,y);case"latin1":case"binary":return O(this,m,y);case"base64":return J(this,m,y);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return H(this,m,y);default:if(T)throw new TypeError("Unknown encoding: "+P);P=(P+"").toLowerCase(),T=!0}}a.prototype._isBuffer=!0;function _(P,m,y){const T=P[m];P[m]=P[y],P[y]=T}a.prototype.swap16=function(){const m=this.length;if(m%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let y=0;y<m;y+=2)_(this,y,y+1);return this},a.prototype.swap32=function(){const m=this.length;if(m%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let y=0;y<m;y+=4)_(this,y,y+3),_(this,y+1,y+2);return this},a.prototype.swap64=function(){const m=this.length;if(m%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let y=0;y<m;y+=8)_(this,y,y+7),_(this,y+1,y+6),_(this,y+2,y+5),_(this,y+3,y+4);return this},a.prototype.toString=function(){const m=this.length;return m===0?"":arguments.length===0?F(this,0,m):C.apply(this,arguments)},a.prototype.toLocaleString=a.prototype.toString,a.prototype.equals=function(m){if(!a.isBuffer(m))throw new TypeError("Argument must be a Buffer");return this===m?!0:a.compare(this,m)===0},a.prototype.inspect=function(){let m="";const y=e.INSPECT_MAX_BYTES;return m=this.toString("hex",0,y).replace(/(.{2})/g,"$1 ").trim(),this.length>y&&(m+=" ... "),"<Buffer "+m+">"},r&&(a.prototype[r]=a.prototype.inspect),a.prototype.compare=function(m,y,T,A,N){if(Ie(m,Uint8Array)&&(m=a.from(m,m.offset,m.byteLength)),!a.isBuffer(m))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof m);if(y===void 0&&(y=0),T===void 0&&(T=m?m.length:0),A===void 0&&(A=0),N===void 0&&(N=this.length),y<0||T>m.length||A<0||N>this.length)throw new RangeError("out of range index");if(A>=N&&y>=T)return 0;if(A>=N)return-1;if(y>=T)return 1;if(y>>>=0,T>>>=0,A>>>=0,N>>>=0,this===m)return 0;let j=N-A,ie=T-y;const ve=Math.min(j,ie),Ke=this.slice(A,N),tt=m.slice(y,T);for(let Ne=0;Ne<ve;++Ne)if(Ke[Ne]!==tt[Ne]){j=Ke[Ne],ie=tt[Ne];break}return j<ie?-1:ie<j?1:0};function $(P,m,y,T,A){if(P.length===0)return-1;if(typeof y=="string"?(T=y,y=0):y>2147483647?y=2147483647:y<-2147483648&&(y=-2147483648),y=+y,at(y)&&(y=A?0:P.length-1),y<0&&(y=P.length+y),y>=P.length){if(A)return-1;y=P.length-1}else if(y<0)if(A)y=0;else return-1;if(typeof m=="string"&&(m=a.from(m,T)),a.isBuffer(m))return m.length===0?-1:f(P,m,y,T,A);if(typeof m=="number")return m=m&255,typeof Uint8Array.prototype.indexOf=="function"?A?Uint8Array.prototype.indexOf.call(P,m,y):Uint8Array.prototype.lastIndexOf.call(P,m,y):f(P,[m],y,T,A);throw new TypeError("val must be string, number or Buffer")}function f(P,m,y,T,A){let N=1,j=P.length,ie=m.length;if(T!==void 0&&(T=String(T).toLowerCase(),T==="ucs2"||T==="ucs-2"||T==="utf16le"||T==="utf-16le")){if(P.length<2||m.length<2)return-1;N=2,j/=2,ie/=2,y/=2}function ve(tt,Ne){return N===1?tt[Ne]:tt.readUInt16BE(Ne*N)}let Ke;if(A){let tt=-1;for(Ke=y;Ke<j;Ke++)if(ve(P,Ke)===ve(m,tt===-1?0:Ke-tt)){if(tt===-1&&(tt=Ke),Ke-tt+1===ie)return tt*N}else tt!==-1&&(Ke-=Ke-tt),tt=-1}else for(y+ie>j&&(y=j-ie),Ke=y;Ke>=0;Ke--){let tt=!0;for(let Ne=0;Ne<ie;Ne++)if(ve(P,Ke+Ne)!==ve(m,Ne)){tt=!1;break}if(tt)return Ke}return-1}a.prototype.includes=function(m,y,T){return this.indexOf(m,y,T)!==-1},a.prototype.indexOf=function(m,y,T){return $(this,m,y,T,!0)},a.prototype.lastIndexOf=function(m,y,T){return $(this,m,y,T,!1)};function S(P,m,y,T){y=Number(y)||0;const A=P.length-y;T?(T=Number(T),T>A&&(T=A)):T=A;const N=m.length;T>N/2&&(T=N/2);let j;for(j=0;j<T;++j){const ie=parseInt(m.substr(j*2,2),16);if(at(ie))return j;P[y+j]=ie}return j}function k(P,m,y,T){return it(Ur(m,P.length-y),P,y,T)}function D(P,m,y,T){return it(ua(m),P,y,T)}function I(P,m,y,T){return it(ft(m),P,y,T)}function W(P,m,y,T){return it(Bc(m,P.length-y),P,y,T)}a.prototype.write=function(m,y,T,A){if(y===void 0)A="utf8",T=this.length,y=0;else if(T===void 0&&typeof y=="string")A=y,T=this.length,y=0;else if(isFinite(y))y=y>>>0,isFinite(T)?(T=T>>>0,A===void 0&&(A="utf8")):(A=T,T=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const N=this.length-y;if((T===void 0||T>N)&&(T=N),m.length>0&&(T<0||y<0)||y>this.length)throw new RangeError("Attempt to write outside buffer bounds");A||(A="utf8");let j=!1;for(;;)switch(A){case"hex":return S(this,m,y,T);case"utf8":case"utf-8":return k(this,m,y,T);case"ascii":case"latin1":case"binary":return D(this,m,y,T);case"base64":return I(this,m,y,T);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return W(this,m,y,T);default:if(j)throw new TypeError("Unknown encoding: "+A);A=(""+A).toLowerCase(),j=!0}},a.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function J(P,m,y){return m===0&&y===P.length?t.fromByteArray(P):t.fromByteArray(P.slice(m,y))}function F(P,m,y){y=Math.min(P.length,y);const T=[];let A=m;for(;A<y;){const N=P[A];let j=null,ie=N>239?4:N>223?3:N>191?2:1;if(A+ie<=y){let ve,Ke,tt,Ne;switch(ie){case 1:N<128&&(j=N);break;case 2:ve=P[A+1],(ve&192)===128&&(Ne=(N&31)<<6|ve&63,Ne>127&&(j=Ne));break;case 3:ve=P[A+1],Ke=P[A+2],(ve&192)===128&&(Ke&192)===128&&(Ne=(N&15)<<12|(ve&63)<<6|Ke&63,Ne>2047&&(Ne<55296||Ne>57343)&&(j=Ne));break;case 4:ve=P[A+1],Ke=P[A+2],tt=P[A+3],(ve&192)===128&&(Ke&192)===128&&(tt&192)===128&&(Ne=(N&15)<<18|(ve&63)<<12|(Ke&63)<<6|tt&63,Ne>65535&&Ne<1114112&&(j=Ne))}}j===null?(j=65533,ie=1):j>65535&&(j-=65536,T.push(j>>>10&1023|55296),j=56320|j&1023),T.push(j),A+=ie}return R(T)}const L=4096;function R(P){const m=P.length;if(m<=L)return String.fromCharCode.apply(String,P);let y="",T=0;for(;T<m;)y+=String.fromCharCode.apply(String,P.slice(T,T+=L));return y}function B(P,m,y){let T="";y=Math.min(P.length,y);for(let A=m;A<y;++A)T+=String.fromCharCode(P[A]&127);return T}function O(P,m,y){let T="";y=Math.min(P.length,y);for(let A=m;A<y;++A)T+=String.fromCharCode(P[A]);return T}function U(P,m,y){const T=P.length;(!m||m<0)&&(m=0),(!y||y<0||y>T)&&(y=T);let A="";for(let N=m;N<y;++N)A+=yt[P[N]];return A}function H(P,m,y){const T=P.slice(m,y);let A="";for(let N=0;N<T.length-1;N+=2)A+=String.fromCharCode(T[N]+T[N+1]*256);return A}a.prototype.slice=function(m,y){const T=this.length;m=~~m,y=y===void 0?T:~~y,m<0?(m+=T,m<0&&(m=0)):m>T&&(m=T),y<0?(y+=T,y<0&&(y=0)):y>T&&(y=T),y<m&&(y=m);const A=this.subarray(m,y);return Object.setPrototypeOf(A,a.prototype),A};function q(P,m,y){if(P%1!==0||P<0)throw new RangeError("offset is not uint");if(P+m>y)throw new RangeError("Trying to access beyond buffer length")}a.prototype.readUintLE=a.prototype.readUIntLE=function(m,y,T){m=m>>>0,y=y>>>0,T||q(m,y,this.length);let A=this[m],N=1,j=0;for(;++j<y&&(N*=256);)A+=this[m+j]*N;return A},a.prototype.readUintBE=a.prototype.readUIntBE=function(m,y,T){m=m>>>0,y=y>>>0,T||q(m,y,this.length);let A=this[m+--y],N=1;for(;y>0&&(N*=256);)A+=this[m+--y]*N;return A},a.prototype.readUint8=a.prototype.readUInt8=function(m,y){return m=m>>>0,y||q(m,1,this.length),this[m]},a.prototype.readUint16LE=a.prototype.readUInt16LE=function(m,y){return m=m>>>0,y||q(m,2,this.length),this[m]|this[m+1]<<8},a.prototype.readUint16BE=a.prototype.readUInt16BE=function(m,y){return m=m>>>0,y||q(m,2,this.length),this[m]<<8|this[m+1]},a.prototype.readUint32LE=a.prototype.readUInt32LE=function(m,y){return m=m>>>0,y||q(m,4,this.length),(this[m]|this[m+1]<<8|this[m+2]<<16)+this[m+3]*16777216},a.prototype.readUint32BE=a.prototype.readUInt32BE=function(m,y){return m=m>>>0,y||q(m,4,this.length),this[m]*16777216+(this[m+1]<<16|this[m+2]<<8|this[m+3])},a.prototype.readBigUInt64LE=Fe(function(m){m=m>>>0,Ce(m,"offset");const y=this[m],T=this[m+7];(y===void 0||T===void 0)&&sn(m,this.length-8);const A=y+this[++m]*2**8+this[++m]*2**16+this[++m]*2**24,N=this[++m]+this[++m]*2**8+this[++m]*2**16+T*2**24;return BigInt(A)+(BigInt(N)<<BigInt(32))}),a.prototype.readBigUInt64BE=Fe(function(m){m=m>>>0,Ce(m,"offset");const y=this[m],T=this[m+7];(y===void 0||T===void 0)&&sn(m,this.length-8);const A=y*2**24+this[++m]*2**16+this[++m]*2**8+this[++m],N=this[++m]*2**24+this[++m]*2**16+this[++m]*2**8+T;return(BigInt(A)<<BigInt(32))+BigInt(N)}),a.prototype.readIntLE=function(m,y,T){m=m>>>0,y=y>>>0,T||q(m,y,this.length);let A=this[m],N=1,j=0;for(;++j<y&&(N*=256);)A+=this[m+j]*N;return N*=128,A>=N&&(A-=Math.pow(2,8*y)),A},a.prototype.readIntBE=function(m,y,T){m=m>>>0,y=y>>>0,T||q(m,y,this.length);let A=y,N=1,j=this[m+--A];for(;A>0&&(N*=256);)j+=this[m+--A]*N;return N*=128,j>=N&&(j-=Math.pow(2,8*y)),j},a.prototype.readInt8=function(m,y){return m=m>>>0,y||q(m,1,this.length),this[m]&128?(255-this[m]+1)*-1:this[m]},a.prototype.readInt16LE=function(m,y){m=m>>>0,y||q(m,2,this.length);const T=this[m]|this[m+1]<<8;return T&32768?T|4294901760:T},a.prototype.readInt16BE=function(m,y){m=m>>>0,y||q(m,2,this.length);const T=this[m+1]|this[m]<<8;return T&32768?T|4294901760:T},a.prototype.readInt32LE=function(m,y){return m=m>>>0,y||q(m,4,this.length),this[m]|this[m+1]<<8|this[m+2]<<16|this[m+3]<<24},a.prototype.readInt32BE=function(m,y){return m=m>>>0,y||q(m,4,this.length),this[m]<<24|this[m+1]<<16|this[m+2]<<8|this[m+3]},a.prototype.readBigInt64LE=Fe(function(m){m=m>>>0,Ce(m,"offset");const y=this[m],T=this[m+7];(y===void 0||T===void 0)&&sn(m,this.length-8);const A=this[m+4]+this[m+5]*2**8+this[m+6]*2**16+(T<<24);return(BigInt(A)<<BigInt(32))+BigInt(y+this[++m]*2**8+this[++m]*2**16+this[++m]*2**24)}),a.prototype.readBigInt64BE=Fe(function(m){m=m>>>0,Ce(m,"offset");const y=this[m],T=this[m+7];(y===void 0||T===void 0)&&sn(m,this.length-8);const A=(y<<24)+this[++m]*2**16+this[++m]*2**8+this[++m];return(BigInt(A)<<BigInt(32))+BigInt(this[++m]*2**24+this[++m]*2**16+this[++m]*2**8+T)}),a.prototype.readFloatLE=function(m,y){return m=m>>>0,y||q(m,4,this.length),n.read(this,m,!0,23,4)},a.prototype.readFloatBE=function(m,y){return m=m>>>0,y||q(m,4,this.length),n.read(this,m,!1,23,4)},a.prototype.readDoubleLE=function(m,y){return m=m>>>0,y||q(m,8,this.length),n.read(this,m,!0,52,8)},a.prototype.readDoubleBE=function(m,y){return m=m>>>0,y||q(m,8,this.length),n.read(this,m,!1,52,8)};function Y(P,m,y,T,A,N){if(!a.isBuffer(P))throw new TypeError('"buffer" argument must be a Buffer instance');if(m>A||m<N)throw new RangeError('"value" argument is out of bounds');if(y+T>P.length)throw new RangeError("Index out of range")}a.prototype.writeUintLE=a.prototype.writeUIntLE=function(m,y,T,A){if(m=+m,y=y>>>0,T=T>>>0,!A){const ie=Math.pow(2,8*T)-1;Y(this,m,y,T,ie,0)}let N=1,j=0;for(this[y]=m&255;++j<T&&(N*=256);)this[y+j]=m/N&255;return y+T},a.prototype.writeUintBE=a.prototype.writeUIntBE=function(m,y,T,A){if(m=+m,y=y>>>0,T=T>>>0,!A){const ie=Math.pow(2,8*T)-1;Y(this,m,y,T,ie,0)}let N=T-1,j=1;for(this[y+N]=m&255;--N>=0&&(j*=256);)this[y+N]=m/j&255;return y+T},a.prototype.writeUint8=a.prototype.writeUInt8=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,1,255,0),this[y]=m&255,y+1},a.prototype.writeUint16LE=a.prototype.writeUInt16LE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,2,65535,0),this[y]=m&255,this[y+1]=m>>>8,y+2},a.prototype.writeUint16BE=a.prototype.writeUInt16BE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,2,65535,0),this[y]=m>>>8,this[y+1]=m&255,y+2},a.prototype.writeUint32LE=a.prototype.writeUInt32LE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,4,4294967295,0),this[y+3]=m>>>24,this[y+2]=m>>>16,this[y+1]=m>>>8,this[y]=m&255,y+4},a.prototype.writeUint32BE=a.prototype.writeUInt32BE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,4,4294967295,0),this[y]=m>>>24,this[y+1]=m>>>16,this[y+2]=m>>>8,this[y+3]=m&255,y+4};function V(P,m,y,T,A){$e(m,T,A,P,y,7);let N=Number(m&BigInt(4294967295));P[y++]=N,N=N>>8,P[y++]=N,N=N>>8,P[y++]=N,N=N>>8,P[y++]=N;let j=Number(m>>BigInt(32)&BigInt(4294967295));return P[y++]=j,j=j>>8,P[y++]=j,j=j>>8,P[y++]=j,j=j>>8,P[y++]=j,y}function ne(P,m,y,T,A){$e(m,T,A,P,y,7);let N=Number(m&BigInt(4294967295));P[y+7]=N,N=N>>8,P[y+6]=N,N=N>>8,P[y+5]=N,N=N>>8,P[y+4]=N;let j=Number(m>>BigInt(32)&BigInt(4294967295));return P[y+3]=j,j=j>>8,P[y+2]=j,j=j>>8,P[y+1]=j,j=j>>8,P[y]=j,y+8}a.prototype.writeBigUInt64LE=Fe(function(m,y=0){return V(this,m,y,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeBigUInt64BE=Fe(function(m,y=0){return ne(this,m,y,BigInt(0),BigInt("0xffffffffffffffff"))}),a.prototype.writeIntLE=function(m,y,T,A){if(m=+m,y=y>>>0,!A){const ve=Math.pow(2,8*T-1);Y(this,m,y,T,ve-1,-ve)}let N=0,j=1,ie=0;for(this[y]=m&255;++N<T&&(j*=256);)m<0&&ie===0&&this[y+N-1]!==0&&(ie=1),this[y+N]=(m/j>>0)-ie&255;return y+T},a.prototype.writeIntBE=function(m,y,T,A){if(m=+m,y=y>>>0,!A){const ve=Math.pow(2,8*T-1);Y(this,m,y,T,ve-1,-ve)}let N=T-1,j=1,ie=0;for(this[y+N]=m&255;--N>=0&&(j*=256);)m<0&&ie===0&&this[y+N+1]!==0&&(ie=1),this[y+N]=(m/j>>0)-ie&255;return y+T},a.prototype.writeInt8=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,1,127,-128),m<0&&(m=255+m+1),this[y]=m&255,y+1},a.prototype.writeInt16LE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,2,32767,-32768),this[y]=m&255,this[y+1]=m>>>8,y+2},a.prototype.writeInt16BE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,2,32767,-32768),this[y]=m>>>8,this[y+1]=m&255,y+2},a.prototype.writeInt32LE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,4,2147483647,-2147483648),this[y]=m&255,this[y+1]=m>>>8,this[y+2]=m>>>16,this[y+3]=m>>>24,y+4},a.prototype.writeInt32BE=function(m,y,T){return m=+m,y=y>>>0,T||Y(this,m,y,4,2147483647,-2147483648),m<0&&(m=4294967295+m+1),this[y]=m>>>24,this[y+1]=m>>>16,this[y+2]=m>>>8,this[y+3]=m&255,y+4},a.prototype.writeBigInt64LE=Fe(function(m,y=0){return V(this,m,y,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),a.prototype.writeBigInt64BE=Fe(function(m,y=0){return ne(this,m,y,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function oe(P,m,y,T,A,N){if(y+T>P.length)throw new RangeError("Index out of range");if(y<0)throw new RangeError("Index out of range")}function le(P,m,y,T,A){return m=+m,y=y>>>0,A||oe(P,m,y,4),n.write(P,m,y,T,23,4),y+4}a.prototype.writeFloatLE=function(m,y,T){return le(this,m,y,!0,T)},a.prototype.writeFloatBE=function(m,y,T){return le(this,m,y,!1,T)};function de(P,m,y,T,A){return m=+m,y=y>>>0,A||oe(P,m,y,8),n.write(P,m,y,T,52,8),y+8}a.prototype.writeDoubleLE=function(m,y,T){return de(this,m,y,!0,T)},a.prototype.writeDoubleBE=function(m,y,T){return de(this,m,y,!1,T)},a.prototype.copy=function(m,y,T,A){if(!a.isBuffer(m))throw new TypeError("argument should be a Buffer");if(T||(T=0),!A&&A!==0&&(A=this.length),y>=m.length&&(y=m.length),y||(y=0),A>0&&A<T&&(A=T),A===T||m.length===0||this.length===0)return 0;if(y<0)throw new RangeError("targetStart out of bounds");if(T<0||T>=this.length)throw new RangeError("Index out of range");if(A<0)throw new RangeError("sourceEnd out of bounds");A>this.length&&(A=this.length),m.length-y<A-T&&(A=m.length-y+T);const N=A-T;return this===m&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(y,T,A):Uint8Array.prototype.set.call(m,this.subarray(T,A),y),N},a.prototype.fill=function(m,y,T,A){if(typeof m=="string"){if(typeof y=="string"?(A=y,y=0,T=this.length):typeof T=="string"&&(A=T,T=this.length),A!==void 0&&typeof A!="string")throw new TypeError("encoding must be a string");if(typeof A=="string"&&!a.isEncoding(A))throw new TypeError("Unknown encoding: "+A);if(m.length===1){const j=m.charCodeAt(0);(A==="utf8"&&j<128||A==="latin1")&&(m=j)}}else typeof m=="number"?m=m&255:typeof m=="boolean"&&(m=Number(m));if(y<0||this.length<y||this.length<T)throw new RangeError("Out of range index");if(T<=y)return this;y=y>>>0,T=T===void 0?this.length:T>>>0,m||(m=0);let N;if(typeof m=="number")for(N=y;N<T;++N)this[N]=m;else{const j=a.isBuffer(m)?m:a.from(m,A),ie=j.length;if(ie===0)throw new TypeError('The value "'+m+'" is invalid for argument "value"');for(N=0;N<T-y;++N)this[N+y]=j[N%ie]}return this};const pe={};function ye(P,m,y){pe[P]=class extends y{constructor(){super(),Object.defineProperty(this,"message",{value:m.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${P}]`,this.stack,delete this.name}get code(){return P}set code(A){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:A,writable:!0})}toString(){return`${this.name} [${P}]: ${this.message}`}}}ye("ERR_BUFFER_OUT_OF_BOUNDS",function(P){return P?`${P} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),ye("ERR_INVALID_ARG_TYPE",function(P,m){return`The "${P}" argument must be of type number. Received type ${typeof m}`},TypeError),ye("ERR_OUT_OF_RANGE",function(P,m,y){let T=`The value of "${P}" is out of range.`,A=y;return Number.isInteger(y)&&Math.abs(y)>2**32?A=fe(String(y)):typeof y=="bigint"&&(A=String(y),(y>BigInt(2)**BigInt(32)||y<-(BigInt(2)**BigInt(32)))&&(A=fe(A)),A+="n"),T+=` It must be ${m}. Received ${A}`,T},RangeError);function fe(P){let m="",y=P.length;const T=P[0]==="-"?1:0;for(;y>=T+4;y-=3)m=`_${P.slice(y-3,y)}${m}`;return`${P.slice(0,y)}${m}`}function xe(P,m,y){Ce(m,"offset"),(P[m]===void 0||P[m+y]===void 0)&&sn(m,P.length-(y+1))}function $e(P,m,y,T,A,N){if(P>y||P<m){const j=typeof m=="bigint"?"n":"";let ie;throw N>3?m===0||m===BigInt(0)?ie=`>= 0${j} and < 2${j} ** ${(N+1)*8}${j}`:ie=`>= -(2${j} ** ${(N+1)*8-1}${j}) and < 2 ** ${(N+1)*8-1}${j}`:ie=`>= ${m}${j} and <= ${y}${j}`,new pe.ERR_OUT_OF_RANGE("value",ie,P)}xe(T,A,N)}function Ce(P,m){if(typeof P!="number")throw new pe.ERR_INVALID_ARG_TYPE(m,"number",P)}function sn(P,m,y){throw Math.floor(P)!==P?(Ce(P,y),new pe.ERR_OUT_OF_RANGE(y||"offset","an integer",P)):m<0?new pe.ERR_BUFFER_OUT_OF_BOUNDS:new pe.ERR_OUT_OF_RANGE(y||"offset",`>= ${y?1:0} and <= ${m}`,P)}const Lr=/[^+/0-9A-Za-z-_]/g;function Ui(P){if(P=P.split("=")[0],P=P.trim().replace(Lr,""),P.length<2)return"";for(;P.length%4!==0;)P=P+"=";return P}function Ur(P,m){m=m||1/0;let y;const T=P.length;let A=null;const N=[];for(let j=0;j<T;++j){if(y=P.charCodeAt(j),y>55295&&y<57344){if(!A){if(y>56319){(m-=3)>-1&&N.push(239,191,189);continue}else if(j+1===T){(m-=3)>-1&&N.push(239,191,189);continue}A=y;continue}if(y<56320){(m-=3)>-1&&N.push(239,191,189),A=y;continue}y=(A-55296<<10|y-56320)+65536}else A&&(m-=3)>-1&&N.push(239,191,189);if(A=null,y<128){if((m-=1)<0)break;N.push(y)}else if(y<2048){if((m-=2)<0)break;N.push(y>>6|192,y&63|128)}else if(y<65536){if((m-=3)<0)break;N.push(y>>12|224,y>>6&63|128,y&63|128)}else if(y<1114112){if((m-=4)<0)break;N.push(y>>18|240,y>>12&63|128,y>>6&63|128,y&63|128)}else throw new Error("Invalid code point")}return N}function ua(P){const m=[];for(let y=0;y<P.length;++y)m.push(P.charCodeAt(y)&255);return m}function Bc(P,m){let y,T,A;const N=[];for(let j=0;j<P.length&&!((m-=2)<0);++j)y=P.charCodeAt(j),T=y>>8,A=y%256,N.push(A),N.push(T);return N}function ft(P){return t.toByteArray(Ui(P))}function it(P,m,y,T){let A;for(A=0;A<T&&!(A+y>=m.length||A>=P.length);++A)m[A+y]=P[A];return A}function Ie(P,m){return P instanceof m||P!=null&&P.constructor!=null&&P.constructor.name!=null&&P.constructor.name===m.name}function at(P){return P!==P}const yt=function(){const P="0123456789abcdef",m=new Array(256);for(let y=0;y<16;++y){const T=y*16;for(let A=0;A<16;++A)m[T+A]=P[y]+P[A]}return m}();function Fe(P){return typeof BigInt>"u"?vt:P}function vt(){throw new Error("BigInt not supported")}})(d6);var Iv;typeof window<"u"&&(window.Buffer||(window.Buffer=d6.Buffer),window.global||(window.global=window),window.process||(window.process={}),(Iv=window.process)!=null&&Iv.env||(window.process={env:{}}));function Hk({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:n=1e3,serialize:r=JSON.stringify,deserialize:i=JSON.parse,retry:o}){if(e){const s=a=>{try{e.setItem(t,r(a));return}catch(l){return l}};return{persistClient:Vk(a=>{let l=a,c=s(l),u=0;for(;c&&l;)u++,l=o==null?void 0:o({persistedClient:l,error:c,errorCount:u}),l&&(c=s(l))},n),restoreClient:()=>{const a=e.getItem(t);if(a)return i(a)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:Py,restoreClient:()=>{},removeClient:Py}}function Vk(e,t=100){let n=null,r;return function(...i){r=i,n===null&&(n=setTimeout(()=>{e(...r),n=null},t))}}function Py(){}class aa{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(t){const n={listener:t};return this.listeners.add(n),this.onSubscribe(),()=>{this.listeners.delete(n),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}}const ac=typeof window>"u"||"Deno"in window;function En(){}function qk(e,t){return typeof e=="function"?e(t):e}function e1(e){return typeof e=="number"&&e>=0&&e!==1/0}function h6(e,t){return Math.max(e+(t||0)-Date.now(),0)}function uu(e,t,n){return Oc(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function p6(e,t,n){return Oc(e)?typeof t=="function"?{...n,mutationKey:e,mutationFn:t}:{...t,mutationKey:e}:typeof e=="function"?{...t,mutationFn:e}:{...e}}function Kr(e,t,n){return Oc(e)?[{...t,queryKey:e},n]:[e||{},t]}function Ty(e,t){const{type:n="all",exact:r,fetchStatus:i,predicate:o,queryKey:s,stale:a}=e;if(Oc(s)){if(r){if(t.queryHash!==Mm(s,t.options))return!1}else if(!Ld(t.queryKey,s))return!1}if(n!=="all"){const l=t.isActive();if(n==="active"&&!l||n==="inactive"&&l)return!1}return!(typeof a=="boolean"&&t.isStale()!==a||typeof i<"u"&&i!==t.state.fetchStatus||o&&!o(t))}function Ay(e,t){const{exact:n,fetching:r,predicate:i,mutationKey:o}=e;if(Oc(o)){if(!t.options.mutationKey)return!1;if(n){if(to(t.options.mutationKey)!==to(o))return!1}else if(!Ld(t.options.mutationKey,o))return!1}return!(typeof r=="boolean"&&t.state.status==="loading"!==r||i&&!i(t))}function Mm(e,t){return((t==null?void 0:t.queryKeyHashFn)||to)(e)}function to(e){return JSON.stringify(e,(t,n)=>t1(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):n)}function Ld(e,t){return g6(e,t)}function g6(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?!Object.keys(t).some(n=>!g6(e[n],t[n])):!1}function m6(e,t){if(e===t)return e;const n=ky(e)&&ky(t);if(n||t1(e)&&t1(t)){const r=n?e.length:Object.keys(e).length,i=n?t:Object.keys(t),o=i.length,s=n?[]:{};let a=0;for(let l=0;l<o;l++){const c=n?l:i[l];s[c]=m6(e[c],t[c]),s[c]===e[c]&&a++}return r===o&&a===r?e:s}return t}function Ud(e,t){if(e&&!t||t&&!e)return!1;for(const n in e)if(e[n]!==t[n])return!1;return!0}function ky(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function t1(e){if(!Dy(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Dy(n)||!n.hasOwnProperty("isPrototypeOf"))}function Dy(e){return Object.prototype.toString.call(e)==="[object Object]"}function Oc(e){return Array.isArray(e)}function w6(e){return new Promise(t=>{setTimeout(t,e)})}function Oy(e){w6(0).then(e)}function Gk(){if(typeof AbortController=="function")return new AbortController}function n1(e,t,n){return n.isDataEqual!=null&&n.isDataEqual(e,t)?e:typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?m6(e,t):t}class Kk extends aa{constructor(){super(),this.setup=t=>{if(!ac&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),window.addEventListener("focus",n,!1),()=>{window.removeEventListener("visibilitychange",n),window.removeEventListener("focus",n)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()})}setFocused(t){this.focused!==t&&(this.focused=t,this.onFocus())}onFocus(){this.listeners.forEach(({listener:t})=>{t()})}isFocused(){return typeof this.focused=="boolean"?this.focused:typeof document>"u"?!0:[void 0,"visible","prerender"].includes(document.visibilityState)}}const Fd=new Kk,Iy=["online","offline"];class Zk extends aa{constructor(){super(),this.setup=t=>{if(!ac&&window.addEventListener){const n=()=>t();return Iy.forEach(r=>{window.addEventListener(r,n,!1)}),()=>{Iy.forEach(r=>{window.removeEventListener(r,n)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.cleanup)==null||t.call(this),this.cleanup=void 0}}setEventListener(t){var n;this.setup=t,(n=this.cleanup)==null||n.call(this),this.cleanup=t(r=>{typeof r=="boolean"?this.setOnline(r):this.onOnline()})}setOnline(t){this.online!==t&&(this.online=t,this.onOnline())}onOnline(){this.listeners.forEach(({listener:t})=>{t()})}isOnline(){return typeof this.online=="boolean"?this.online:typeof navigator>"u"||typeof navigator.onLine>"u"?!0:navigator.onLine}}const zd=new Zk;function Qk(e){return Math.min(1e3*2**e,3e4)}function Kf(e){return(e??"online")==="online"?zd.isOnline():!0}class y6{constructor(t){this.revert=t==null?void 0:t.revert,this.silent=t==null?void 0:t.silent}}function Ou(e){return e instanceof y6}function v6(e){let t=!1,n=0,r=!1,i,o,s;const a=new Promise((E,b)=>{o=E,s=b}),l=E=>{r||(p(new y6(E)),e.abort==null||e.abort())},c=()=>{t=!0},u=()=>{t=!1},d=()=>!Fd.isFocused()||e.networkMode!=="always"&&!zd.isOnline(),h=E=>{r||(r=!0,e.onSuccess==null||e.onSuccess(E),i==null||i(),o(E))},p=E=>{r||(r=!0,e.onError==null||e.onError(E),i==null||i(),s(E))},w=()=>new Promise(E=>{i=b=>{const g=r||!d();return g&&E(b),g},e.onPause==null||e.onPause()}).then(()=>{i=void 0,r||e.onContinue==null||e.onContinue()}),x=()=>{if(r)return;let E;try{E=e.fn()}catch(b){E=Promise.reject(b)}Promise.resolve(E).then(h).catch(b=>{var g,v;if(r)return;const C=(g=e.retry)!=null?g:3,_=(v=e.retryDelay)!=null?v:Qk,$=typeof _=="function"?_(n,b):_,f=C===!0||typeof C=="number"&&n<C||typeof C=="function"&&C(n,b);if(t||!f){p(b);return}n++,e.onFail==null||e.onFail(n,b),w6($).then(()=>{if(d())return w()}).then(()=>{t?p(b):x()})})};return Kf(e.networkMode)?x():w().then(x),{promise:a,cancel:l,continue:()=>(i==null?void 0:i())?a:Promise.resolve(),cancelRetry:c,continueRetry:u}}const Bm=console;function Yk(){let e=[],t=0,n=u=>{u()},r=u=>{u()};const i=u=>{let d;t++;try{d=u()}finally{t--,t||a()}return d},o=u=>{t?e.push(u):Oy(()=>{n(u)})},s=u=>(...d)=>{o(()=>{u(...d)})},a=()=>{const u=e;e=[],u.length&&Oy(()=>{r(()=>{u.forEach(d=>{n(d)})})})};return{batch:i,batchCalls:s,schedule:o,setNotifyFunction:u=>{n=u},setBatchNotifyFunction:u=>{r=u}}}const rt=Yk();class b6{destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),e1(this.cacheTime)&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(t){this.cacheTime=Math.max(this.cacheTime||0,t??(ac?1/0:5*60*1e3))}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}}class Jk extends b6{constructor(t){super(),this.abortSignalConsumed=!1,this.defaultOptions=t.defaultOptions,this.setOptions(t.options),this.observers=[],this.cache=t.cache,this.logger=t.logger||Bm,this.queryKey=t.queryKey,this.queryHash=t.queryHash,this.initialState=t.state||Xk(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&this.cache.remove(this)}setData(t,n){const r=n1(this.state.data,t,this.options);return this.dispatch({data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){this.dispatch({type:"setState",state:t,setStateOptions:n})}cancel(t){var n;const r=this.promise;return(n=this.retryer)==null||n.cancel(t),r?r.then(En).catch(En):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(t=>t.options.enabled!==!1)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(t=>t.getCurrentResult().isStale)}isStaleByTime(t=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!h6(this.state.dataUpdatedAt,t)}onFocus(){var t;const n=this.observers.find(r=>r.shouldFetchOnWindowFocus());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}onOnline(){var t;const n=this.observers.find(r=>r.shouldFetchOnReconnect());n&&n.refetch({cancelRefetch:!1}),(t=this.retryer)==null||t.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(t,n){var r,i;if(this.state.fetchStatus!=="idle"){if(this.state.dataUpdatedAt&&n!=null&&n.cancelRefetch)this.cancel({silent:!0});else if(this.promise){var o;return(o=this.retryer)==null||o.continueRetry(),this.promise}}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(w=>w.options.queryFn);p&&this.setOptions(p.options)}const s=Gk(),a={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},l=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>{if(s)return this.abortSignalConsumed=!0,s.signal}})};l(a);const c=()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(a)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'"),u={fetchOptions:n,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:c};if(l(u),(r=this.options.behavior)==null||r.onFetch(u),this.revertState=this.state,this.state.fetchStatus==="idle"||this.state.fetchMeta!==((i=u.fetchOptions)==null?void 0:i.meta)){var d;this.dispatch({type:"fetch",meta:(d=u.fetchOptions)==null?void 0:d.meta})}const h=p=>{if(Ou(p)&&p.silent||this.dispatch({type:"error",error:p}),!Ou(p)){var w,x,E,b;(w=(x=this.cache.config).onError)==null||w.call(x,p,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,this.state.data,p,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=v6({fn:u.fetchFn,abort:s==null?void 0:s.abort.bind(s),onSuccess:p=>{var w,x,E,b;if(typeof p>"u"){h(new Error(this.queryHash+" data is undefined"));return}this.setData(p),(w=(x=this.cache.config).onSuccess)==null||w.call(x,p,this),(E=(b=this.cache.config).onSettled)==null||E.call(b,p,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError:h,onFail:(p,w)=>{this.dispatch({type:"failed",failureCount:p,error:w})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:u.options.retry,retryDelay:u.options.retryDelay,networkMode:u.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(t){const n=r=>{var i,o;switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:(i=t.meta)!=null?i:null,fetchStatus:Kf(this.options.networkMode)?"fetching":"paused",...!r.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:(o=t.dataUpdatedAt)!=null?o:Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Ou(s)&&s.revert&&this.revertState?{...this.revertState,fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),rt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate(t)}),this.cache.notify({query:this,type:"updated",action:t})})}}function Xk(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=typeof t<"u",r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"loading",fetchStatus:"idle"}}class eD extends aa{constructor(t){super(),this.config=t||{},this.queries=[],this.queriesMap={}}build(t,n,r){var i;const o=n.queryKey,s=(i=n.queryHash)!=null?i:Mm(o,n);let a=this.get(s);return a||(a=new Jk({cache:this,logger:t.getLogger(),queryKey:o,queryHash:s,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(o)}),this.add(a)),a}add(t){this.queriesMap[t.queryHash]||(this.queriesMap[t.queryHash]=t,this.queries.push(t),this.notify({type:"added",query:t}))}remove(t){const n=this.queriesMap[t.queryHash];n&&(t.destroy(),this.queries=this.queries.filter(r=>r!==t),n===t&&delete this.queriesMap[t.queryHash],this.notify({type:"removed",query:t}))}clear(){rt.batch(()=>{this.queries.forEach(t=>{this.remove(t)})})}get(t){return this.queriesMap[t]}getAll(){return this.queries}find(t,n){const[r]=Kr(t,n);return typeof r.exact>"u"&&(r.exact=!0),this.queries.find(i=>Ty(r,i))}findAll(t,n){const[r]=Kr(t,n);return Object.keys(r).length>0?this.queries.filter(i=>Ty(r,i)):this.queries}notify(t){rt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}onFocus(){rt.batch(()=>{this.queries.forEach(t=>{t.onFocus()})})}onOnline(){rt.batch(()=>{this.queries.forEach(t=>{t.onOnline()})})}}class tD extends b6{constructor(t){super(),this.defaultOptions=t.defaultOptions,this.mutationId=t.mutationId,this.mutationCache=t.mutationCache,this.logger=t.logger||Bm,this.observers=[],this.state=t.state||x6(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options={...this.defaultOptions,...t},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(t){this.dispatch({type:"setState",state:t})}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){this.observers=this.observers.filter(n=>n!==t),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){this.observers.length||(this.state.status==="loading"?this.scheduleGc():this.mutationCache.remove(this))}continue(){var t,n;return(t=(n=this.retryer)==null?void 0:n.continue())!=null?t:this.execute()}async execute(){const t=()=>{var f;return this.retryer=v6({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(S,k)=>{this.dispatch({type:"failed",failureCount:S,error:k})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:(f=this.options.retry)!=null?f:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise},n=this.state.status==="loading";try{var r,i,o,s,a,l,c,u;if(!n){var d,h,p,w;this.dispatch({type:"loading",variables:this.options.variables}),await((d=(h=this.mutationCache.config).onMutate)==null?void 0:d.call(h,this.state.variables,this));const S=await((p=(w=this.options).onMutate)==null?void 0:p.call(w,this.state.variables));S!==this.state.context&&this.dispatch({type:"loading",context:S,variables:this.state.variables})}const f=await t();return await((r=(i=this.mutationCache.config).onSuccess)==null?void 0:r.call(i,f,this.state.variables,this.state.context,this)),await((o=(s=this.options).onSuccess)==null?void 0:o.call(s,f,this.state.variables,this.state.context)),await((a=(l=this.mutationCache.config).onSettled)==null?void 0:a.call(l,f,null,this.state.variables,this.state.context,this)),await((c=(u=this.options).onSettled)==null?void 0:c.call(u,f,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:f}),f}catch(f){try{var x,E,b,g,v,C,_,$;throw await((x=(E=this.mutationCache.config).onError)==null?void 0:x.call(E,f,this.state.variables,this.state.context,this)),await((b=(g=this.options).onError)==null?void 0:b.call(g,f,this.state.variables,this.state.context)),await((v=(C=this.mutationCache.config).onSettled)==null?void 0:v.call(C,void 0,f,this.state.variables,this.state.context,this)),await((_=($=this.options).onSettled)==null?void 0:_.call($,void 0,f,this.state.variables,this.state.context)),f}finally{this.dispatch({type:"error",error:f})}}}dispatch(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"loading":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!Kf(this.options.networkMode),status:"loading",variables:t.variables};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"};case"setState":return{...r,...t.state}}};this.state=n(this.state),rt.batch(()=>{this.observers.forEach(r=>{r.onMutationUpdate(t)}),this.mutationCache.notify({mutation:this,type:"updated",action:t})})}}function x6(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0}}class nD extends aa{constructor(t){super(),this.config=t||{},this.mutations=[],this.mutationId=0}build(t,n,r){const i=new tD({mutationCache:this,logger:t.getLogger(),mutationId:++this.mutationId,options:t.defaultMutationOptions(n),state:r,defaultOptions:n.mutationKey?t.getMutationDefaults(n.mutationKey):void 0});return this.add(i),i}add(t){this.mutations.push(t),this.notify({type:"added",mutation:t})}remove(t){this.mutations=this.mutations.filter(n=>n!==t),this.notify({type:"removed",mutation:t})}clear(){rt.batch(()=>{this.mutations.forEach(t=>{this.remove(t)})})}getAll(){return this.mutations}find(t){return typeof t.exact>"u"&&(t.exact=!0),this.mutations.find(n=>Ay(t,n))}findAll(t){return this.mutations.filter(n=>Ay(t,n))}notify(t){rt.batch(()=>{this.listeners.forEach(({listener:n})=>{n(t)})})}resumePausedMutations(){var t;return this.resuming=((t=this.resuming)!=null?t:Promise.resolve()).then(()=>{const n=this.mutations.filter(r=>r.state.isPaused);return rt.batch(()=>n.reduce((r,i)=>r.then(()=>i.continue().catch(En)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}}function rD(){return{onFetch:e=>{e.fetchFn=()=>{var t,n,r,i,o,s;const a=(t=e.fetchOptions)==null||(n=t.meta)==null?void 0:n.refetchPage,l=(r=e.fetchOptions)==null||(i=r.meta)==null?void 0:i.fetchMore,c=l==null?void 0:l.pageParam,u=(l==null?void 0:l.direction)==="forward",d=(l==null?void 0:l.direction)==="backward",h=((o=e.state.data)==null?void 0:o.pages)||[],p=((s=e.state.data)==null?void 0:s.pageParams)||[];let w=p,x=!1;const E=$=>{Object.defineProperty($,"signal",{enumerable:!0,get:()=>{var f;if((f=e.signal)!=null&&f.aborted)x=!0;else{var S;(S=e.signal)==null||S.addEventListener("abort",()=>{x=!0})}return e.signal}})},b=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),g=($,f,S,k)=>(w=k?[f,...w]:[...w,f],k?[S,...$]:[...$,S]),v=($,f,S,k)=>{if(x)return Promise.reject("Cancelled");if(typeof S>"u"&&!f&&$.length)return Promise.resolve($);const D={queryKey:e.queryKey,pageParam:S,meta:e.options.meta};E(D);const I=b(D);return Promise.resolve(I).then(J=>g($,S,J,k))};let C;if(!h.length)C=v([]);else if(u){const $=typeof c<"u",f=$?c:Ny(e.options,h);C=v(h,$,f)}else if(d){const $=typeof c<"u",f=$?c:iD(e.options,h);C=v(h,$,f,!0)}else{w=[];const $=typeof e.options.getNextPageParam>"u";C=(a&&h[0]?a(h[0],0,h):!0)?v([],$,p[0]):Promise.resolve(g([],p[0],h[0]));for(let S=1;S<h.length;S++)C=C.then(k=>{if(a&&h[S]?a(h[S],S,h):!0){const I=$?p[S]:Ny(e.options,k);return v(k,$,I)}return Promise.resolve(g(k,p[S],h[S]))})}return C.then($=>({pages:$,pageParams:w}))}}}}function Ny(e,t){return e.getNextPageParam==null?void 0:e.getNextPageParam(t[t.length-1],t)}function iD(e,t){return e.getPreviousPageParam==null?void 0:e.getPreviousPageParam(t[0],t)}class oD{constructor(t={}){this.queryCache=t.queryCache||new eD,this.mutationCache=t.mutationCache||new nD,this.logger=t.logger||Bm,this.defaultOptions=t.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,this.mountCount===1&&(this.unsubscribeFocus=Fd.subscribe(()=>{Fd.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=zd.subscribe(()=>{zd.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var t,n;this.mountCount--,this.mountCount===0&&((t=this.unsubscribeFocus)==null||t.call(this),this.unsubscribeFocus=void 0,(n=this.unsubscribeOnline)==null||n.call(this),this.unsubscribeOnline=void 0)}isFetching(t,n){const[r]=Kr(t,n);return r.fetchStatus="fetching",this.queryCache.findAll(r).length}isMutating(t){return this.mutationCache.findAll({...t,fetching:!0}).length}getQueryData(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state.data}ensureQueryData(t,n,r){const i=uu(t,n,r),o=this.getQueryData(i.queryKey);return o?Promise.resolve(o):this.fetchQuery(i)}getQueriesData(t){return this.getQueryCache().findAll(t).map(({queryKey:n,state:r})=>{const i=r.data;return[n,i]})}setQueryData(t,n,r){const i=this.queryCache.find(t),o=i==null?void 0:i.state.data,s=qk(n,o);if(typeof s>"u")return;const a=uu(t),l=this.defaultQueryOptions(a);return this.queryCache.build(this,l).setData(s,{...r,manual:!0})}setQueriesData(t,n,r){return rt.batch(()=>this.getQueryCache().findAll(t).map(({queryKey:i})=>[i,this.setQueryData(i,n,r)]))}getQueryState(t,n){var r;return(r=this.queryCache.find(t,n))==null?void 0:r.state}removeQueries(t,n){const[r]=Kr(t,n),i=this.queryCache;rt.batch(()=>{i.findAll(r).forEach(o=>{i.remove(o)})})}resetQueries(t,n,r){const[i,o]=Kr(t,n,r),s=this.queryCache,a={type:"active",...i};return rt.batch(()=>(s.findAll(i).forEach(l=>{l.reset()}),this.refetchQueries(a,o)))}cancelQueries(t,n,r){const[i,o={}]=Kr(t,n,r);typeof o.revert>"u"&&(o.revert=!0);const s=rt.batch(()=>this.queryCache.findAll(i).map(a=>a.cancel(o)));return Promise.all(s).then(En).catch(En)}invalidateQueries(t,n,r){const[i,o]=Kr(t,n,r);return rt.batch(()=>{var s,a;if(this.queryCache.findAll(i).forEach(c=>{c.invalidate()}),i.refetchType==="none")return Promise.resolve();const l={...i,type:(s=(a=i.refetchType)!=null?a:i.type)!=null?s:"active"};return this.refetchQueries(l,o)})}refetchQueries(t,n,r){const[i,o]=Kr(t,n,r),s=rt.batch(()=>this.queryCache.findAll(i).filter(l=>!l.isDisabled()).map(l=>{var c;return l.fetch(void 0,{...o,cancelRefetch:(c=o==null?void 0:o.cancelRefetch)!=null?c:!0,meta:{refetchPage:i.refetchPage}})}));let a=Promise.all(s).then(En);return o!=null&&o.throwOnError||(a=a.catch(En)),a}fetchQuery(t,n,r){const i=uu(t,n,r),o=this.defaultQueryOptions(i);typeof o.retry>"u"&&(o.retry=!1);const s=this.queryCache.build(this,o);return s.isStaleByTime(o.staleTime)?s.fetch(o):Promise.resolve(s.state.data)}prefetchQuery(t,n,r){return this.fetchQuery(t,n,r).then(En).catch(En)}fetchInfiniteQuery(t,n,r){const i=uu(t,n,r);return i.behavior=rD(),this.fetchQuery(i)}prefetchInfiniteQuery(t,n,r){return this.fetchInfiniteQuery(t,n,r).then(En).catch(En)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(t){this.defaultOptions=t}setQueryDefaults(t,n){const r=this.queryDefaults.find(i=>to(t)===to(i.queryKey));r?r.defaultOptions=n:this.queryDefaults.push({queryKey:t,defaultOptions:n})}getQueryDefaults(t){if(!t)return;const n=this.queryDefaults.find(r=>Ld(t,r.queryKey));return n==null?void 0:n.defaultOptions}setMutationDefaults(t,n){const r=this.mutationDefaults.find(i=>to(t)===to(i.mutationKey));r?r.defaultOptions=n:this.mutationDefaults.push({mutationKey:t,defaultOptions:n})}getMutationDefaults(t){if(!t)return;const n=this.mutationDefaults.find(r=>Ld(t,r.mutationKey));return n==null?void 0:n.defaultOptions}defaultQueryOptions(t){if(t!=null&&t._defaulted)return t;const n={...this.defaultOptions.queries,...this.getQueryDefaults(t==null?void 0:t.queryKey),...t,_defaulted:!0};return!n.queryHash&&n.queryKey&&(n.queryHash=Mm(n.queryKey,n)),typeof n.refetchOnReconnect>"u"&&(n.refetchOnReconnect=n.networkMode!=="always"),typeof n.useErrorBoundary>"u"&&(n.useErrorBoundary=!!n.suspense),n}defaultMutationOptions(t){return t!=null&&t._defaulted?t:{...this.defaultOptions.mutations,...this.getMutationDefaults(t==null?void 0:t.mutationKey),...t,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}}class sD extends aa{constructor(t,n){super(),this.client=t,this.options=n,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(n)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.currentQuery.addObserver(this),Ry(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return r1(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return r1(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(t,n){const r=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(t),Ud(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();const o=this.hasListeners();o&&My(this.currentQuery,i,this.options,r)&&this.executeFetch(),this.updateResult(n),o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||this.options.staleTime!==r.staleTime)&&this.updateStaleTimeout();const s=this.computeRefetchInterval();o&&(this.currentQuery!==i||this.options.enabled!==r.enabled||s!==this.currentRefetchInterval)&&this.updateRefetchInterval(s)}getOptimisticResult(t){const n=this.client.getQueryCache().build(this.client,t),r=this.createResult(n,t);return lD(this,r,t)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}getCurrentResult(){return this.currentResult}trackResult(t){const n={};return Object.keys(t).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(r),t[r])})}),n}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:t,...n}={}){return this.fetch({...n,meta:{refetchPage:t}})}fetchOptimistic(t){const n=this.client.defaultQueryOptions(t),r=this.client.getQueryCache().build(this.client,n);return r.isFetchingOptimistic=!0,r.fetch().then(()=>this.createResult(r,n))}fetch(t){var n;return this.executeFetch({...t,cancelRefetch:(n=t.cancelRefetch)!=null?n:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(t){this.updateQuery();let n=this.currentQuery.fetch(this.options,t);return t!=null&&t.throwOnError||(n=n.catch(En)),n}updateStaleTimeout(){if(this.clearStaleTimeout(),ac||this.currentResult.isStale||!e1(this.options.staleTime))return;const n=h6(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},n)}computeRefetchInterval(){var t;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(t=this.options.refetchInterval)!=null?t:!1}updateRefetchInterval(t){this.clearRefetchInterval(),this.currentRefetchInterval=t,!(ac||this.options.enabled===!1||!e1(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||Fd.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(t,n){const r=this.currentQuery,i=this.options,o=this.currentResult,s=this.currentResultState,a=this.currentResultOptions,l=t!==r,c=l?t.state:this.currentQueryInitialState,u=l?this.currentResult:this.previousQueryResult,{state:d}=t;let{dataUpdatedAt:h,error:p,errorUpdatedAt:w,fetchStatus:x,status:E}=d,b=!1,g=!1,v;if(n._optimisticResults){const S=this.hasListeners(),k=!S&&Ry(t,n),D=S&&My(t,r,n,i);(k||D)&&(x=Kf(t.options.networkMode)?"fetching":"paused",h||(E="loading")),n._optimisticResults==="isRestoring"&&(x="idle")}if(n.keepPreviousData&&!d.dataUpdatedAt&&u!=null&&u.isSuccess&&E!=="error")v=u.data,h=u.dataUpdatedAt,E=u.status,b=!0;else if(n.select&&typeof d.data<"u")if(o&&d.data===(s==null?void 0:s.data)&&n.select===this.selectFn)v=this.selectResult;else try{this.selectFn=n.select,v=n.select(d.data),v=n1(o==null?void 0:o.data,v,n),this.selectResult=v,this.selectError=null}catch(S){this.selectError=S}else v=d.data;if(typeof n.placeholderData<"u"&&typeof v>"u"&&E==="loading"){let S;if(o!=null&&o.isPlaceholderData&&n.placeholderData===(a==null?void 0:a.placeholderData))S=o.data;else if(S=typeof n.placeholderData=="function"?n.placeholderData():n.placeholderData,n.select&&typeof S<"u")try{S=n.select(S),this.selectError=null}catch(k){this.selectError=k}typeof S<"u"&&(E="success",v=n1(o==null?void 0:o.data,S,n),g=!0)}this.selectError&&(p=this.selectError,v=this.selectResult,w=Date.now(),E="error");const C=x==="fetching",_=E==="loading",$=E==="error";return{status:E,fetchStatus:x,isLoading:_,isSuccess:E==="success",isError:$,isInitialLoading:_&&C,data:v,dataUpdatedAt:h,error:p,errorUpdatedAt:w,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>c.dataUpdateCount||d.errorUpdateCount>c.errorUpdateCount,isFetching:C,isRefetching:C&&!_,isLoadingError:$&&d.dataUpdatedAt===0,isPaused:x==="paused",isPlaceholderData:g,isPreviousData:b,isRefetchError:$&&d.dataUpdatedAt!==0,isStale:jm(t,n),refetch:this.refetch,remove:this.remove}}updateResult(t){const n=this.currentResult,r=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,Ud(r,n))return;this.currentResult=r;const i={cache:!0},o=()=>{if(!n)return!0;const{notifyOnChangeProps:s}=this.options,a=typeof s=="function"?s():s;if(a==="all"||!a&&!this.trackedProps.size)return!0;const l=new Set(a??this.trackedProps);return this.options.useErrorBoundary&&l.add("error"),Object.keys(this.currentResult).some(c=>{const u=c;return this.currentResult[u]!==n[u]&&l.has(u)})};(t==null?void 0:t.listeners)!==!1&&o()&&(i.listeners=!0),this.notify({...i,...t})}updateQuery(){const t=this.client.getQueryCache().build(this.client,this.options);if(t===this.currentQuery)return;const n=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(n==null||n.removeObserver(this),t.addObserver(this))}onQueryUpdate(t){const n={};t.type==="success"?n.onSuccess=!t.manual:t.type==="error"&&!Ou(t.error)&&(n.onError=!0),this.updateResult(n),this.hasListeners()&&this.updateTimers()}notify(t){rt.batch(()=>{if(t.onSuccess){var n,r,i,o;(n=(r=this.options).onSuccess)==null||n.call(r,this.currentResult.data),(i=(o=this.options).onSettled)==null||i.call(o,this.currentResult.data,null)}else if(t.onError){var s,a,l,c;(s=(a=this.options).onError)==null||s.call(a,this.currentResult.error),(l=(c=this.options).onSettled)==null||l.call(c,void 0,this.currentResult.error)}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)}),t.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function aD(e,t){return t.enabled!==!1&&!e.state.dataUpdatedAt&&!(e.state.status==="error"&&t.retryOnMount===!1)}function Ry(e,t){return aD(e,t)||e.state.dataUpdatedAt>0&&r1(e,t,t.refetchOnMount)}function r1(e,t,n){if(t.enabled!==!1){const r=typeof n=="function"?n(e):n;return r==="always"||r!==!1&&jm(e,t)}return!1}function My(e,t,n,r){return n.enabled!==!1&&(e!==t||r.enabled===!1)&&(!n.suspense||e.state.status!=="error")&&jm(e,n)}function jm(e,t){return e.isStaleByTime(t.staleTime)}function lD(e,t,n){return n.keepPreviousData?!1:n.placeholderData!==void 0?t.isPlaceholderData:!Ud(e.getCurrentResult(),t)}class cD extends aa{constructor(t,n){super(),this.client=t,this.setOptions(n),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(t){var n;const r=this.options;this.options=this.client.defaultMutationOptions(t),Ud(r,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),(n=this.currentMutation)==null||n.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var t;(t=this.currentMutation)==null||t.removeObserver(this)}}onMutationUpdate(t){this.updateResult();const n={listeners:!0};t.type==="success"?n.onSuccess=!0:t.type==="error"&&(n.onError=!0),this.notify(n)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(t,n){return this.mutateOptions=n,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:typeof t<"u"?t:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){const t=this.currentMutation?this.currentMutation.state:x6(),n={...t,isLoading:t.status==="loading",isSuccess:t.status==="success",isError:t.status==="error",isIdle:t.status==="idle",mutate:this.mutate,reset:this.reset};this.currentResult=n}notify(t){rt.batch(()=>{if(this.mutateOptions&&this.hasListeners()){if(t.onSuccess){var n,r,i,o;(n=(r=this.mutateOptions).onSuccess)==null||n.call(r,this.currentResult.data,this.currentResult.variables,this.currentResult.context),(i=(o=this.mutateOptions).onSettled)==null||i.call(o,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)}else if(t.onError){var s,a,l,c;(s=(a=this.mutateOptions).onError)==null||s.call(a,this.currentResult.error,this.currentResult.variables,this.currentResult.context),(l=(c=this.mutateOptions).onSettled)==null||l.call(c,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context)}}t.listeners&&this.listeners.forEach(({listener:u})=>{u(this.currentResult)})})}}function uD(e){return{mutationKey:e.options.mutationKey,state:e.state}}function dD(e){return{state:e.state,queryKey:e.queryKey,queryHash:e.queryHash}}function fD(e){return e.state.isPaused}function hD(e){return e.state.status==="success"}function pD(e,t={}){const n=[],r=[];if(t.dehydrateMutations!==!1){const i=t.shouldDehydrateMutation||fD;e.getMutationCache().getAll().forEach(o=>{i(o)&&n.push(uD(o))})}if(t.dehydrateQueries!==!1){const i=t.shouldDehydrateQuery||hD;e.getQueryCache().getAll().forEach(o=>{i(o)&&r.push(dD(o))})}return{mutations:n,queries:r}}function gD(e,t,n){if(typeof t!="object"||t===null)return;const r=e.getMutationCache(),i=e.getQueryCache(),o=t.mutations||[],s=t.queries||[];o.forEach(a=>{var l;r.build(e,{...n==null||(l=n.defaultOptions)==null?void 0:l.mutations,mutationKey:a.mutationKey},a.state)}),s.forEach(({queryKey:a,state:l,queryHash:c})=>{var u;const d=i.get(c);if(d){if(d.state.dataUpdatedAt<l.dataUpdatedAt){const{fetchStatus:h,...p}=l;d.setState(p)}return}i.build(e,{...n==null||(u=n.defaultOptions)==null?void 0:u.queries,queryKey:a,queryHash:c},{...l,fetchStatus:"idle"})})}const mD=im.useSyncExternalStore,By=z.createContext(void 0),C6=z.createContext(!1);function E6(e,t){return e||(t&&typeof window<"u"?(window.ReactQueryClientContext||(window.ReactQueryClientContext=By),window.ReactQueryClientContext):By)}const Lm=({context:e}={})=>{const t=z.useContext(E6(e,z.useContext(C6)));if(!t)throw new Error("No QueryClient set, use QueryClientProvider to set one");return t},wD=({client:e,children:t,context:n,contextSharing:r=!1})=>{z.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);const i=E6(n,r);return z.createElement(C6.Provider,{value:!n&&r},z.createElement(i.Provider,{value:e},t))},_6=z.createContext(!1),yD=()=>z.useContext(_6);_6.Provider;function vD(){let e=!1;return{clearReset:()=>{e=!1},reset:()=>{e=!0},isReset:()=>e}}const bD=z.createContext(vD()),xD=()=>z.useContext(bD);function CD(e,t){return typeof e=="function"?e(...t):!!e}function ED(e,t,n){const r=p6(e,t,n),i=Lm({context:r.context}),[o]=z.useState(()=>new cD(i,r));z.useEffect(()=>{o.setOptions(r)},[o,r]);const s=mD(z.useCallback(l=>o.subscribe(rt.batchCalls(l)),[o]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),a=z.useCallback((l,c)=>{o.mutate(l,c).catch(_D)},[o]);if(s.error&&CD(o.options.useErrorBoundary,[s.error]))throw s.error;return{...s,mutate:a,mutateAsync:s.mutate}}function _D(){}const SD=["added","removed","updated"];function jy(e){return SD.includes(e)}async function $D({queryClient:e,persister:t,maxAge:n=1e3*60*60*24,buster:r="",hydrateOptions:i}){try{const o=await t.restoreClient();if(o)if(o.timestamp){const s=Date.now()-o.timestamp>n,a=o.buster!==r;s||a?t.removeClient():gD(e,o.clientState,i)}else t.removeClient()}catch{t.removeClient()}}async function Ly({queryClient:e,persister:t,buster:n="",dehydrateOptions:r}){const i={buster:n,timestamp:Date.now(),clientState:pD(e,r)};await t.persistClient(i)}function PD(e){const t=e.queryClient.getQueryCache().subscribe(r=>{jy(r.type)&&Ly(e)}),n=e.queryClient.getMutationCache().subscribe(r=>{jy(r.type)&&Ly(e)});return()=>{t(),n()}}function TD(e){let t=!1,n;const r=()=>{t=!0,n==null||n()},i=$D(e).then(()=>{t||(n=PD(e))});return[r,i]}var S6={exports:{}},$6={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf=z,AD=im;function kD(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var DD=typeof Object.is=="function"?Object.is:kD,OD=AD.useSyncExternalStore,ID=Zf.useRef,ND=Zf.useEffect,RD=Zf.useMemo,MD=Zf.useDebugValue;$6.useSyncExternalStoreWithSelector=function(e,t,n,r,i){var o=ID(null);if(o.current===null){var s={hasValue:!1,value:null};o.current=s}else s=o.current;o=RD(function(){function l(p){if(!c){if(c=!0,u=p,p=r(p),i!==void 0&&s.hasValue){var w=s.value;if(i(w,p))return d=w}return d=p}if(w=d,DD(u,p))return w;var x=r(p);return i!==void 0&&i(w,x)?w:(u=p,d=x)}var c=!1,u,d,h=n===void 0?null:n;return[function(){return l(t())},h===null?void 0:function(){return l(h())}]},[t,n,r,i]);var a=OD(e,o[0],o[1]);return ND(function(){s.hasValue=!0,s.value=a},[a]),MD(a),a};S6.exports=$6;var P6=S6.exports;function BD({queryClient:e=new oD({defaultOptions:{queries:{cacheTime:1e3*60*60*24,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=Q5({storage:typeof window<"u"&&window.localStorage?window.localStorage:Z5}),persister:n=typeof window<"u"?Hk({key:"cache",storage:t,serialize:i=>i,deserialize:i=>i}):void 0,...r}){const i=mS({...r,storage:t});return n&&TD({queryClient:e,persister:n,dehydrateOptions:{shouldDehydrateQuery:o=>o.cacheTime!==0&&o.queryKey[0].persist!==!1}}),Object.assign(i,{queryClient:e})}var T6=z.createContext(void 0),Qf=z.createContext(void 0);function jD({children:e,config:t}){return z.createElement(T6.Provider,{children:z.createElement(wD,{children:e,client:t.queryClient,context:Qf}),value:t})}function Um(){const e=z.useContext(T6);if(!e)throw new Error(["`useConfig` must be used within `WagmiConfig`.\n","Read more: https://wagmi.sh/react/WagmiConfig"].join(`
`));return e}var LD=im.useSyncExternalStore;function UD(e){return Array.isArray(e)}function FD(e){if(!Uy(e))return!1;const t=e.constructor;if(typeof t>"u")return!0;const n=t.prototype;return!(!Uy(n)||!n.hasOwnProperty("isPrototypeOf"))}function Uy(e){return Object.prototype.toString.call(e)==="[object Object]"}function zD(e,t,n){return UD(e)?typeof t=="function"?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function WD(e){return JSON.stringify(e,(t,n)=>FD(n)?Object.keys(n).sort().reduce((r,i)=>(r[i]=n[i],r),{}):typeof n=="bigint"?n.toString():n)}function HD(e,t){return typeof e=="function"?e(...t):!!e}function VD(e,t){const n={};return Object.keys(e).forEach(r=>{Object.defineProperty(n,r,{configurable:!1,enumerable:!0,get:()=>(t.trackedProps.add(r),e[r])})}),n}function qD(e,t){const n=Lm({context:e.context}),r=yD(),i=xD(),o=n.defaultQueryOptions({...e,queryKeyHashFn:WD});o._optimisticResults=r?"isRestoring":"optimistic",o.onError&&(o.onError=rt.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=rt.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=rt.batchCalls(o.onSettled)),o.suspense&&typeof o.staleTime!="number"&&(o.staleTime=1e3),(o.suspense||o.useErrorBoundary)&&(i.isReset()||(o.retryOnMount=!1));const[s]=z.useState(()=>new t(n,o)),a=s.getOptimisticResult(o);if(LD(z.useCallback(d=>r?()=>{}:s.subscribe(rt.batchCalls(d)),[s,r]),()=>s.getCurrentResult(),()=>s.getCurrentResult()),z.useEffect(()=>{i.clearReset()},[i]),z.useEffect(()=>{s.setOptions(o,{listeners:!1})},[o,s]),o.suspense&&a.isLoading&&a.isFetching&&!r)throw s.fetchOptimistic(o).then(({data:d})=>{var h,p;(h=o.onSuccess)==null||h.call(o,d),(p=o.onSettled)==null||p.call(o,d,null)}).catch(d=>{var h,p;i.clearReset(),(h=o.onError)==null||h.call(o,d),(p=o.onSettled)==null||p.call(o,void 0,d)});if(a.isError&&!i.isReset()&&!a.isFetching&&HD(o.useErrorBoundary,[a.error,s.getCurrentQuery()]))throw a.error;const l=a.status==="loading"&&a.fetchStatus==="idle"?"idle":a.status,c=l==="idle",u=l==="loading"&&a.fetchStatus==="fetching";return{...a,defaultedOptions:o,isIdle:c,isLoading:u,observer:s,status:l}}function A6(e,t,n){const r=p6(e,t,n);return ED({context:Qf,...r})}function GD(e,t,n){const r=zD(e,t,n),i=qD({context:Qf,...r},sD),o={data:i.data,error:i.error,fetchStatus:i.fetchStatus,isError:i.isError,isFetched:i.isFetched,isFetchedAfterMount:i.isFetchedAfterMount,isFetching:i.isFetching,isIdle:i.isIdle,isLoading:i.isLoading,isRefetching:i.isRefetching,isSuccess:i.isSuccess,refetch:i.refetch,status:i.status,internal:{dataUpdatedAt:i.dataUpdatedAt,errorUpdatedAt:i.errorUpdatedAt,failureCount:i.failureCount,isFetchedAfterMount:i.isFetchedAfterMount,isLoadingError:i.isLoadingError,isPaused:i.isPaused,isPlaceholderData:i.isPlaceholderData,isPreviousData:i.isPreviousData,isRefetchError:i.isRefetchError,isStale:i.isStale,remove:i.remove}};return i.defaultedOptions.notifyOnChangeProps?o:VD(o,i.observer)}var KD=()=>Lm({context:Qf});function ZD({chainId:e}={}){return P6.useSyncExternalStoreWithSelector(t=>vS({chainId:e},t),()=>Or({chainId:e}),()=>Or({chainId:e}),t=>t,(t,n)=>t.uid===n.uid)}function dh({chainId:e}){return[{entity:"walletClient",chainId:e,persist:!1}]}function QD({queryKey:[{chainId:e}]}){return X5({chainId:e})}function YD({chainId:e,suspense:t,onError:n,onSettled:r,onSuccess:i}={}){const{connector:o}=D6(),s=JD({chainId:e}),a=GD(dh({chainId:s}),QD,{cacheTime:0,enabled:!!o,staleTime:1/0,suspense:t,onError:n,onSettled:r,onSuccess:i}),l=KD();return z.useEffect(()=>bS({chainId:s},u=>{u?l.invalidateQueries(dh({chainId:s})):l.removeQueries(dh({chainId:s}))}),[l,s]),a}function JD({chainId:e}={}){return ZD({chainId:e}).chain.id}function XD(){const[,e]=z.useReducer(t=>t+1,0);return e}var fh=e=>typeof e=="object"&&!Array.isArray(e);function k6(e,t,n=t,r=Rp){const i=z.useRef([]),o=P6.useSyncExternalStoreWithSelector(e,t,n,s=>s,(s,a)=>{if(fh(s)&&fh(a)&&i.current.length){for(const l of i.current)if(!r(s[l],a[l]))return!1;return!0}return r(s,a)});if(fh(o)){const s={...o};return Object.defineProperties(s,Object.entries(s).reduce((a,[l,c])=>({...a,[l]:{configurable:!1,enumerable:!0,get:()=>(i.current.includes(l)||i.current.push(l),c)}}),{})),s}return o}function D6({onConnect:e,onDisconnect:t}={}){const n=Um(),r=z.useCallback(a=>t4(a),[n]),i=k6(r,hd),o=z.useRef(),s=o.current;return z.useEffect(()=>{(s==null?void 0:s.status)!=="connected"&&i.status==="connected"&&(e==null||e({address:i.address,connector:i.connector,isReconnected:(s==null?void 0:s.status)==="reconnecting"||(s==null?void 0:s.status)===void 0})),(s==null?void 0:s.status)==="connected"&&i.status==="disconnected"&&(t==null||t()),o.current=i},[e,t,s,i]),i}var eO=[{entity:"disconnect"}],tO=()=>J5();function nO({onError:e,onMutate:t,onSettled:n,onSuccess:r}={}){const{error:i,isError:o,isIdle:s,isLoading:a,isSuccess:l,mutate:c,mutateAsync:u,reset:d,status:h}=A6(eO,tO,{...e?{onError(p,w,x){e(p,x)}}:{},onMutate:t,...n?{onSettled(p,w,x,E){n(w,E)}}:{},...r?{onSuccess(p,w,x){r(x)}}:{}});return{disconnect:c,disconnectAsync:u,error:i,isError:o,isIdle:s,isLoading:a,isSuccess:l,reset:d,status:h}}function O6(){const e=Um(),t=z.useCallback(n=>n4(n),[e]);return k6(t,pd)}var rO=e=>[{entity:"switchNetwork",...e}],iO=e=>{const{chainId:t}=e;if(!t)throw new Error("chainId is required");return e4({chainId:t})};function oO({chainId:e,throwForSwitchChainNotSupported:t,onError:n,onMutate:r,onSettled:i,onSuccess:o}={}){var S;const s=Um(),a=XD(),{data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:p,mutate:w,mutateAsync:x,reset:E,status:b,variables:g}=A6(rO({chainId:e}),iO,{onError:n,onMutate:r,onSettled:i,onSuccess:o}),v=z.useCallback(k=>w({chainId:k??e}),[e,w]),C=z.useCallback(k=>x({chainId:k??e}),[e,x]);z.useEffect(()=>s.subscribe(({chains:D,connector:I})=>({chains:D,connector:I}),a),[s,a]);let _,$;const f=!!((S=s.connector)!=null&&S.switchChain);return(t||f)&&(_=v,$=C),{chains:s.chains??[],data:l,error:c,isError:u,isIdle:d,isLoading:h,isSuccess:p,pendingChainId:g==null?void 0:g.chainId,reset:E,status:b,switchNetwork:_,switchNetworkAsync:$,variables:g}}var Ba,qo,sO=class extends em{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,qt(this,Ba,void 0),qt(this,qo,void 0),this.onAccountsChanged=n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:Vn(n[0])})},this.onChainChanged=n=>{const r=fd(n),i=this.isChainUnsupported(r);this.emit("change",{chain:{id:r,unsupported:i}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});const n=await t.enable(),r=Vn(n[0]);let i=await this.getChainId(),o=this.isChainUnsupported(i);return e&&i!==e&&(i=(await this.switchChain(e)).id,o=this.isChainUnsupported(i)),{account:r,chain:{id:i,unsupported:o}}}catch(t){throw/(user closed modal|accounts received is empty)/i.test(t.message)?new Zt(t):t}}async disconnect(){if(!Oe(this,qo))return;const e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){const t=await(await this.getProvider()).request({method:"eth_accounts"});return Vn(t[0])}async getChainId(){const e=await this.getProvider();return fd(e.chainId)}async getProvider(){var e;if(!Oe(this,qo)){let t=(await Ps(()=>import("./index5.js").then(s=>s.i),["assets/index5.js","assets/events.js"])).default;typeof t!="function"&&typeof t.default=="function"&&(t=t.default),Fl(this,Ba,new t(this.options));const n=(e=Oe(this,Ba).walletExtension)==null?void 0:e.getChainId(),r=this.chains.find(s=>this.options.chainId?s.id===this.options.chainId:s.id===n)||this.chains[0],i=this.options.chainId||(r==null?void 0:r.id),o=this.options.jsonRpcUrl||(r==null?void 0:r.rpcUrls.default.http[0]);Fl(this,qo,Oe(this,Ba).makeWeb3Provider(o,i))}return Oe(this,qo)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider(),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Jg({account:n,chain:r,transport:Gg(t)})}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(e){var r;const t=await this.getProvider(),n=ge(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]}),this.chains.find(i=>i.id===e)??{id:e,name:`Chain ${n}`,network:`${n}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(i){const o=this.chains.find(s=>s.id===e);if(!o)throw new G5({chainId:e,connectorId:this.id});if(i.code===4902)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:o.name,nativeCurrency:o.nativeCurrency,rpcUrls:[((r=o.rpcUrls.public)==null?void 0:r.http[0])??""],blockExplorerUrls:this.getBlockExplorerUrls(o)}]}),o}catch(s){throw new Zt(s)}throw new Dr(i)}}async watchAsset({address:e,decimals:t=18,image:n,symbol:r}){return(await this.getProvider()).request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:n,symbol:r}}})}};Ba=new WeakMap;qo=new WeakMap;var Fm={},Yf={},we={},I6={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});function t(a,l){var c=a>>>16&65535,u=a&65535,d=l>>>16&65535,h=l&65535;return u*h+(c*h+u*d<<16>>>0)|0}e.mul=Math.imul||t;function n(a,l){return a+l|0}e.add=n;function r(a,l){return a-l|0}e.sub=r;function i(a,l){return a<<l|a>>>32-l}e.rotl=i;function o(a,l){return a<<32-l|a>>>l}e.rotr=o;function s(a){return typeof a=="number"&&isFinite(a)&&Math.floor(a)===a}e.isInteger=Number.isInteger||s,e.MAX_SAFE_INTEGER=9007199254740991,e.isSafeInteger=function(a){return e.isInteger(a)&&a>=-e.MAX_SAFE_INTEGER&&a<=e.MAX_SAFE_INTEGER}})(I6);Object.defineProperty(we,"__esModule",{value:!0});var N6=I6;function aO(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16}we.readInt16BE=aO;function lO(e,t){return t===void 0&&(t=0),(e[t+0]<<8|e[t+1])>>>0}we.readUint16BE=lO;function cO(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])<<16>>16}we.readInt16LE=cO;function uO(e,t){return t===void 0&&(t=0),(e[t+1]<<8|e[t])>>>0}we.readUint16LE=uO;function R6(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>8,t[n+1]=e>>>0,t}we.writeUint16BE=R6;we.writeInt16BE=R6;function M6(e,t,n){return t===void 0&&(t=new Uint8Array(2)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t}we.writeUint16LE=M6;we.writeInt16LE=M6;function i1(e,t){return t===void 0&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}we.readInt32BE=i1;function o1(e,t){return t===void 0&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}we.readUint32BE=o1;function s1(e,t){return t===void 0&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}we.readInt32LE=s1;function a1(e,t){return t===void 0&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}we.readUint32LE=a1;function Wd(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>24,t[n+1]=e>>>16,t[n+2]=e>>>8,t[n+3]=e>>>0,t}we.writeUint32BE=Wd;we.writeInt32BE=Wd;function Hd(e,t,n){return t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0),t[n+0]=e>>>0,t[n+1]=e>>>8,t[n+2]=e>>>16,t[n+3]=e>>>24,t}we.writeUint32LE=Hd;we.writeInt32LE=Hd;function dO(e,t){t===void 0&&(t=0);var n=i1(e,t),r=i1(e,t+4);return n*4294967296+r-(r>>31)*4294967296}we.readInt64BE=dO;function fO(e,t){t===void 0&&(t=0);var n=o1(e,t),r=o1(e,t+4);return n*4294967296+r}we.readUint64BE=fO;function hO(e,t){t===void 0&&(t=0);var n=s1(e,t),r=s1(e,t+4);return r*4294967296+n-(n>>31)*4294967296}we.readInt64LE=hO;function pO(e,t){t===void 0&&(t=0);var n=a1(e,t),r=a1(e,t+4);return r*4294967296+n}we.readUint64LE=pO;function B6(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Wd(e/4294967296>>>0,t,n),Wd(e>>>0,t,n+4),t}we.writeUint64BE=B6;we.writeInt64BE=B6;function j6(e,t,n){return t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0),Hd(e>>>0,t,n),Hd(e/4294967296>>>0,t,n+4),t}we.writeUint64LE=j6;we.writeInt64LE=j6;function gO(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintBE: array is too short for the given bitLength");for(var r=0,i=1,o=e/8+n-1;o>=n;o--)r+=t[o]*i,i*=256;return r}we.readUintBE=gO;function mO(e,t,n){if(n===void 0&&(n=0),e%8!==0)throw new Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-n)throw new Error("readUintLE: array is too short for the given bitLength");for(var r=0,i=1,o=n;o<n+e/8;o++)r+=t[o]*i,i*=256;return r}we.readUintLE=mO;function wO(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintBE supports only bitLengths divisible by 8");if(!N6.isSafeInteger(t))throw new Error("writeUintBE value must be an integer");for(var i=1,o=e/8+r-1;o>=r;o--)n[o]=t/i&255,i*=256;return n}we.writeUintBE=wO;function yO(e,t,n,r){if(n===void 0&&(n=new Uint8Array(e/8)),r===void 0&&(r=0),e%8!==0)throw new Error("writeUintLE supports only bitLengths divisible by 8");if(!N6.isSafeInteger(t))throw new Error("writeUintLE value must be an integer");for(var i=1,o=r;o<r+e/8;o++)n[o]=t/i&255,i*=256;return n}we.writeUintLE=yO;function vO(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t)}we.readFloat32BE=vO;function bO(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat32(t,!0)}we.readFloat32LE=bO;function xO(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t)}we.readFloat64BE=xO;function CO(e,t){t===void 0&&(t=0);var n=new DataView(e.buffer,e.byteOffset,e.byteLength);return n.getFloat64(t,!0)}we.readFloat64LE=CO;function EO(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e),t}we.writeFloat32BE=EO;function _O(e,t,n){t===void 0&&(t=new Uint8Array(4)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat32(n,e,!0),t}we.writeFloat32LE=_O;function SO(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e),t}we.writeFloat64BE=SO;function $O(e,t,n){t===void 0&&(t=new Uint8Array(8)),n===void 0&&(n=0);var r=new DataView(t.buffer,t.byteOffset,t.byteLength);return r.setFloat64(n,e,!0),t}we.writeFloat64LE=$O;var Qn={};Object.defineProperty(Qn,"__esModule",{value:!0});function PO(e){for(var t=0;t<e.length;t++)e[t]=0;return e}Qn.wipe=PO;Object.defineProperty(Yf,"__esModule",{value:!0});var Nt=we,l1=Qn,TO=20;function AO(e,t,n){for(var r=1634760805,i=857760878,o=2036477234,s=1797285236,a=n[3]<<24|n[2]<<16|n[1]<<8|n[0],l=n[7]<<24|n[6]<<16|n[5]<<8|n[4],c=n[11]<<24|n[10]<<16|n[9]<<8|n[8],u=n[15]<<24|n[14]<<16|n[13]<<8|n[12],d=n[19]<<24|n[18]<<16|n[17]<<8|n[16],h=n[23]<<24|n[22]<<16|n[21]<<8|n[20],p=n[27]<<24|n[26]<<16|n[25]<<8|n[24],w=n[31]<<24|n[30]<<16|n[29]<<8|n[28],x=t[3]<<24|t[2]<<16|t[1]<<8|t[0],E=t[7]<<24|t[6]<<16|t[5]<<8|t[4],b=t[11]<<24|t[10]<<16|t[9]<<8|t[8],g=t[15]<<24|t[14]<<16|t[13]<<8|t[12],v=r,C=i,_=o,$=s,f=a,S=l,k=c,D=u,I=d,W=h,J=p,F=w,L=x,R=E,B=b,O=g,U=0;U<TO;U+=2)v=v+f|0,L^=v,L=L>>>32-16|L<<16,I=I+L|0,f^=I,f=f>>>32-12|f<<12,C=C+S|0,R^=C,R=R>>>32-16|R<<16,W=W+R|0,S^=W,S=S>>>32-12|S<<12,_=_+k|0,B^=_,B=B>>>32-16|B<<16,J=J+B|0,k^=J,k=k>>>32-12|k<<12,$=$+D|0,O^=$,O=O>>>32-16|O<<16,F=F+O|0,D^=F,D=D>>>32-12|D<<12,_=_+k|0,B^=_,B=B>>>32-8|B<<8,J=J+B|0,k^=J,k=k>>>32-7|k<<7,$=$+D|0,O^=$,O=O>>>32-8|O<<8,F=F+O|0,D^=F,D=D>>>32-7|D<<7,C=C+S|0,R^=C,R=R>>>32-8|R<<8,W=W+R|0,S^=W,S=S>>>32-7|S<<7,v=v+f|0,L^=v,L=L>>>32-8|L<<8,I=I+L|0,f^=I,f=f>>>32-7|f<<7,v=v+S|0,O^=v,O=O>>>32-16|O<<16,J=J+O|0,S^=J,S=S>>>32-12|S<<12,C=C+k|0,L^=C,L=L>>>32-16|L<<16,F=F+L|0,k^=F,k=k>>>32-12|k<<12,_=_+D|0,R^=_,R=R>>>32-16|R<<16,I=I+R|0,D^=I,D=D>>>32-12|D<<12,$=$+f|0,B^=$,B=B>>>32-16|B<<16,W=W+B|0,f^=W,f=f>>>32-12|f<<12,_=_+D|0,R^=_,R=R>>>32-8|R<<8,I=I+R|0,D^=I,D=D>>>32-7|D<<7,$=$+f|0,B^=$,B=B>>>32-8|B<<8,W=W+B|0,f^=W,f=f>>>32-7|f<<7,C=C+k|0,L^=C,L=L>>>32-8|L<<8,F=F+L|0,k^=F,k=k>>>32-7|k<<7,v=v+S|0,O^=v,O=O>>>32-8|O<<8,J=J+O|0,S^=J,S=S>>>32-7|S<<7;Nt.writeUint32LE(v+r|0,e,0),Nt.writeUint32LE(C+i|0,e,4),Nt.writeUint32LE(_+o|0,e,8),Nt.writeUint32LE($+s|0,e,12),Nt.writeUint32LE(f+a|0,e,16),Nt.writeUint32LE(S+l|0,e,20),Nt.writeUint32LE(k+c|0,e,24),Nt.writeUint32LE(D+u|0,e,28),Nt.writeUint32LE(I+d|0,e,32),Nt.writeUint32LE(W+h|0,e,36),Nt.writeUint32LE(J+p|0,e,40),Nt.writeUint32LE(F+w|0,e,44),Nt.writeUint32LE(L+x|0,e,48),Nt.writeUint32LE(R+E|0,e,52),Nt.writeUint32LE(B+b|0,e,56),Nt.writeUint32LE(O+g|0,e,60)}function L6(e,t,n,r,i){if(i===void 0&&(i=0),e.length!==32)throw new Error("ChaCha: key size must be 32 bytes");if(r.length<n.length)throw new Error("ChaCha: destination is shorter than source");var o,s;if(i===0){if(t.length!==8&&t.length!==12)throw new Error("ChaCha nonce must be 8 or 12 bytes");o=new Uint8Array(16),s=o.length-t.length,o.set(t,s)}else{if(t.length!==16)throw new Error("ChaCha nonce with counter must be 16 bytes");o=t,s=i}for(var a=new Uint8Array(64),l=0;l<n.length;l+=64){AO(a,o,e);for(var c=l;c<l+64&&c<n.length;c++)r[c]=n[c]^a[c-l];DO(o,0,s)}return l1.wipe(a),i===0&&l1.wipe(o),r}Yf.streamXOR=L6;function kO(e,t,n,r){return r===void 0&&(r=0),l1.wipe(n),L6(e,t,n,n,r)}Yf.stream=kO;function DO(e,t,n){for(var r=1;n--;)r=r+(e[t]&255)|0,e[t]=r&255,r>>>=8,t++;if(r>0)throw new Error("ChaCha: counter overflow")}var U6={},Li={};Object.defineProperty(Li,"__esModule",{value:!0});function OO(e,t,n){return~(e-1)&t|e-1&n}Li.select=OO;function IO(e,t){return(e|0)-(t|0)-1>>>31&1}Li.lessOrEqual=IO;function F6(e,t){if(e.length!==t.length)return 0;for(var n=0,r=0;r<e.length;r++)n|=e[r]^t[r];return 1&n-1>>>8}Li.compare=F6;function NO(e,t){return e.length===0||t.length===0?!1:F6(e,t)!==0}Li.equal=NO;(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Li,n=Qn;e.DIGEST_LENGTH=16;var r=function(){function s(a){this.digestLength=e.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var l=a[0]|a[1]<<8;this._r[0]=l&8191;var c=a[2]|a[3]<<8;this._r[1]=(l>>>13|c<<3)&8191;var u=a[4]|a[5]<<8;this._r[2]=(c>>>10|u<<6)&7939;var d=a[6]|a[7]<<8;this._r[3]=(u>>>7|d<<9)&8191;var h=a[8]|a[9]<<8;this._r[4]=(d>>>4|h<<12)&255,this._r[5]=h>>>1&8190;var p=a[10]|a[11]<<8;this._r[6]=(h>>>14|p<<2)&8191;var w=a[12]|a[13]<<8;this._r[7]=(p>>>11|w<<5)&8065;var x=a[14]|a[15]<<8;this._r[8]=(w>>>8|x<<8)&8191,this._r[9]=x>>>5&127,this._pad[0]=a[16]|a[17]<<8,this._pad[1]=a[18]|a[19]<<8,this._pad[2]=a[20]|a[21]<<8,this._pad[3]=a[22]|a[23]<<8,this._pad[4]=a[24]|a[25]<<8,this._pad[5]=a[26]|a[27]<<8,this._pad[6]=a[28]|a[29]<<8,this._pad[7]=a[30]|a[31]<<8}return s.prototype._blocks=function(a,l,c){for(var u=this._fin?0:2048,d=this._h[0],h=this._h[1],p=this._h[2],w=this._h[3],x=this._h[4],E=this._h[5],b=this._h[6],g=this._h[7],v=this._h[8],C=this._h[9],_=this._r[0],$=this._r[1],f=this._r[2],S=this._r[3],k=this._r[4],D=this._r[5],I=this._r[6],W=this._r[7],J=this._r[8],F=this._r[9];c>=16;){var L=a[l+0]|a[l+1]<<8;d+=L&8191;var R=a[l+2]|a[l+3]<<8;h+=(L>>>13|R<<3)&8191;var B=a[l+4]|a[l+5]<<8;p+=(R>>>10|B<<6)&8191;var O=a[l+6]|a[l+7]<<8;w+=(B>>>7|O<<9)&8191;var U=a[l+8]|a[l+9]<<8;x+=(O>>>4|U<<12)&8191,E+=U>>>1&8191;var H=a[l+10]|a[l+11]<<8;b+=(U>>>14|H<<2)&8191;var q=a[l+12]|a[l+13]<<8;g+=(H>>>11|q<<5)&8191;var Y=a[l+14]|a[l+15]<<8;v+=(q>>>8|Y<<8)&8191,C+=Y>>>5|u;var V=0,ne=V;ne+=d*_,ne+=h*(5*F),ne+=p*(5*J),ne+=w*(5*W),ne+=x*(5*I),V=ne>>>13,ne&=8191,ne+=E*(5*D),ne+=b*(5*k),ne+=g*(5*S),ne+=v*(5*f),ne+=C*(5*$),V+=ne>>>13,ne&=8191;var oe=V;oe+=d*$,oe+=h*_,oe+=p*(5*F),oe+=w*(5*J),oe+=x*(5*W),V=oe>>>13,oe&=8191,oe+=E*(5*I),oe+=b*(5*D),oe+=g*(5*k),oe+=v*(5*S),oe+=C*(5*f),V+=oe>>>13,oe&=8191;var le=V;le+=d*f,le+=h*$,le+=p*_,le+=w*(5*F),le+=x*(5*J),V=le>>>13,le&=8191,le+=E*(5*W),le+=b*(5*I),le+=g*(5*D),le+=v*(5*k),le+=C*(5*S),V+=le>>>13,le&=8191;var de=V;de+=d*S,de+=h*f,de+=p*$,de+=w*_,de+=x*(5*F),V=de>>>13,de&=8191,de+=E*(5*J),de+=b*(5*W),de+=g*(5*I),de+=v*(5*D),de+=C*(5*k),V+=de>>>13,de&=8191;var pe=V;pe+=d*k,pe+=h*S,pe+=p*f,pe+=w*$,pe+=x*_,V=pe>>>13,pe&=8191,pe+=E*(5*F),pe+=b*(5*J),pe+=g*(5*W),pe+=v*(5*I),pe+=C*(5*D),V+=pe>>>13,pe&=8191;var ye=V;ye+=d*D,ye+=h*k,ye+=p*S,ye+=w*f,ye+=x*$,V=ye>>>13,ye&=8191,ye+=E*_,ye+=b*(5*F),ye+=g*(5*J),ye+=v*(5*W),ye+=C*(5*I),V+=ye>>>13,ye&=8191;var fe=V;fe+=d*I,fe+=h*D,fe+=p*k,fe+=w*S,fe+=x*f,V=fe>>>13,fe&=8191,fe+=E*$,fe+=b*_,fe+=g*(5*F),fe+=v*(5*J),fe+=C*(5*W),V+=fe>>>13,fe&=8191;var xe=V;xe+=d*W,xe+=h*I,xe+=p*D,xe+=w*k,xe+=x*S,V=xe>>>13,xe&=8191,xe+=E*f,xe+=b*$,xe+=g*_,xe+=v*(5*F),xe+=C*(5*J),V+=xe>>>13,xe&=8191;var $e=V;$e+=d*J,$e+=h*W,$e+=p*I,$e+=w*D,$e+=x*k,V=$e>>>13,$e&=8191,$e+=E*S,$e+=b*f,$e+=g*$,$e+=v*_,$e+=C*(5*F),V+=$e>>>13,$e&=8191;var Ce=V;Ce+=d*F,Ce+=h*J,Ce+=p*W,Ce+=w*I,Ce+=x*D,V=Ce>>>13,Ce&=8191,Ce+=E*k,Ce+=b*S,Ce+=g*f,Ce+=v*$,Ce+=C*_,V+=Ce>>>13,Ce&=8191,V=(V<<2)+V|0,V=V+ne|0,ne=V&8191,V=V>>>13,oe+=V,d=ne,h=oe,p=le,w=de,x=pe,E=ye,b=fe,g=xe,v=$e,C=Ce,l+=16,c-=16}this._h[0]=d,this._h[1]=h,this._h[2]=p,this._h[3]=w,this._h[4]=x,this._h[5]=E,this._h[6]=b,this._h[7]=g,this._h[8]=v,this._h[9]=C},s.prototype.finish=function(a,l){l===void 0&&(l=0);var c=new Uint16Array(10),u,d,h,p;if(this._leftover){for(p=this._leftover,this._buffer[p++]=1;p<16;p++)this._buffer[p]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(u=this._h[1]>>>13,this._h[1]&=8191,p=2;p<10;p++)this._h[p]+=u,u=this._h[p]>>>13,this._h[p]&=8191;for(this._h[0]+=u*5,u=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=u,u=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=u,c[0]=this._h[0]+5,u=c[0]>>>13,c[0]&=8191,p=1;p<10;p++)c[p]=this._h[p]+u,u=c[p]>>>13,c[p]&=8191;for(c[9]-=8192,d=(u^1)-1,p=0;p<10;p++)c[p]&=d;for(d=~d,p=0;p<10;p++)this._h[p]=this._h[p]&d|c[p];for(this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,h=this._h[0]+this._pad[0],this._h[0]=h&65535,p=1;p<8;p++)h=(this._h[p]+this._pad[p]|0)+(h>>>16)|0,this._h[p]=h&65535;return a[l+0]=this._h[0]>>>0,a[l+1]=this._h[0]>>>8,a[l+2]=this._h[1]>>>0,a[l+3]=this._h[1]>>>8,a[l+4]=this._h[2]>>>0,a[l+5]=this._h[2]>>>8,a[l+6]=this._h[3]>>>0,a[l+7]=this._h[3]>>>8,a[l+8]=this._h[4]>>>0,a[l+9]=this._h[4]>>>8,a[l+10]=this._h[5]>>>0,a[l+11]=this._h[5]>>>8,a[l+12]=this._h[6]>>>0,a[l+13]=this._h[6]>>>8,a[l+14]=this._h[7]>>>0,a[l+15]=this._h[7]>>>8,this._finished=!0,this},s.prototype.update=function(a){var l=0,c=a.length,u;if(this._leftover){u=16-this._leftover,u>c&&(u=c);for(var d=0;d<u;d++)this._buffer[this._leftover+d]=a[l+d];if(c-=u,l+=u,this._leftover+=u,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(c>=16&&(u=c-c%16,this._blocks(a,l,u),l+=u,c-=u),c){for(var d=0;d<c;d++)this._buffer[this._leftover+d]=a[l+d];this._leftover+=c}return this},s.prototype.digest=function(){if(this._finished)throw new Error("Poly1305 was finished");var a=new Uint8Array(16);return this.finish(a),a},s.prototype.clean=function(){return n.wipe(this._buffer),n.wipe(this._r),n.wipe(this._h),n.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},s}();e.Poly1305=r;function i(s,a){var l=new r(s);l.update(a);var c=l.digest();return l.clean(),c}e.oneTimeAuth=i;function o(s,a){return s.length!==e.DIGEST_LENGTH||a.length!==e.DIGEST_LENGTH?!1:t.equal(s,a)}e.equal=o})(U6);(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=Yf,n=U6,r=Qn,i=we,o=Li;e.KEY_LENGTH=32,e.NONCE_LENGTH=12,e.TAG_LENGTH=16;var s=new Uint8Array(16),a=function(){function l(c){if(this.nonceLength=e.NONCE_LENGTH,this.tagLength=e.TAG_LENGTH,c.length!==e.KEY_LENGTH)throw new Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(c)}return l.prototype.seal=function(c,u,d,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");var p=new Uint8Array(16);p.set(c,p.length-c.length);var w=new Uint8Array(32);t.stream(this._key,p,w,4);var x=u.length+this.tagLength,E;if(h){if(h.length!==x)throw new Error("ChaCha20Poly1305: incorrect destination length");E=h}else E=new Uint8Array(x);return t.streamXOR(this._key,p,u,E,4),this._authenticate(E.subarray(E.length-this.tagLength,E.length),w,E.subarray(0,E.length-this.tagLength),d),r.wipe(p),E},l.prototype.open=function(c,u,d,h){if(c.length>16)throw new Error("ChaCha20Poly1305: incorrect nonce length");if(u.length<this.tagLength)return null;var p=new Uint8Array(16);p.set(c,p.length-c.length);var w=new Uint8Array(32);t.stream(this._key,p,w,4);var x=new Uint8Array(this.tagLength);if(this._authenticate(x,w,u.subarray(0,u.length-this.tagLength),d),!o.equal(x,u.subarray(u.length-this.tagLength,u.length)))return null;var E=u.length-this.tagLength,b;if(h){if(h.length!==E)throw new Error("ChaCha20Poly1305: incorrect destination length");b=h}else b=new Uint8Array(E);return t.streamXOR(this._key,p,u.subarray(0,u.length-this.tagLength),b,4),r.wipe(p),b},l.prototype.clean=function(){return r.wipe(this._key),this},l.prototype._authenticate=function(c,u,d,h){var p=new n.Poly1305(u);h&&(p.update(h),h.length%16>0&&p.update(s.subarray(h.length%16))),p.update(d),d.length%16>0&&p.update(s.subarray(d.length%16));var w=new Uint8Array(8);h&&i.writeUint64LE(h.length,w),p.update(w),i.writeUint64LE(d.length,w),p.update(w);for(var x=p.digest(),E=0;E<x.length;E++)c[E]=x[E];p.clean(),r.wipe(x),r.wipe(w)},l}();e.ChaCha20Poly1305=a})(Fm);var z6={},Ic={},zm={};Object.defineProperty(zm,"__esModule",{value:!0});function RO(e){return typeof e.saveState<"u"&&typeof e.restoreState<"u"&&typeof e.cleanSavedState<"u"}zm.isSerializableHash=RO;Object.defineProperty(Ic,"__esModule",{value:!0});var Xn=zm,MO=Li,BO=Qn,W6=function(){function e(t,n){this._finished=!1,this._inner=new t,this._outer=new t,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var r=new Uint8Array(this.blockSize);n.length>this.blockSize?this._inner.update(n).finish(r).clean():r.set(n);for(var i=0;i<r.length;i++)r[i]^=54;this._inner.update(r);for(var i=0;i<r.length;i++)r[i]^=106;this._outer.update(r),Xn.isSerializableHash(this._inner)&&Xn.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),BO.wipe(r)}return e.prototype.reset=function(){if(!Xn.isSerializableHash(this._inner)||!Xn.isSerializableHash(this._outer))throw new Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.clean=function(){Xn.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),Xn.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},e.prototype.update=function(t){return this._inner.update(t),this},e.prototype.finish=function(t){return this._finished?(this._outer.finish(t),this):(this._inner.finish(t),this._outer.update(t.subarray(0,this.digestLength)).finish(t),this._finished=!0,this)},e.prototype.digest=function(){var t=new Uint8Array(this.digestLength);return this.finish(t),t},e.prototype.saveState=function(){if(!Xn.isSerializableHash(this._inner))throw new Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},e.prototype.restoreState=function(t){if(!Xn.isSerializableHash(this._inner)||!Xn.isSerializableHash(this._outer))throw new Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(t),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},e.prototype.cleanSavedState=function(t){if(!Xn.isSerializableHash(this._inner))throw new Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(t)},e}();Ic.HMAC=W6;function jO(e,t,n){var r=new W6(e,t);r.update(n);var i=r.digest();return r.clean(),i}Ic.hmac=jO;Ic.equal=MO.equal;Object.defineProperty(z6,"__esModule",{value:!0});var Fy=Ic,zy=Qn,LO=function(){function e(t,n,r,i){r===void 0&&(r=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=t,this._info=i;var o=Fy.hmac(this._hash,r,n);this._hmac=new Fy.HMAC(t,o),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return e.prototype._fillBuffer=function(){this._counter[0]++;var t=this._counter[0];if(t===0)throw new Error("hkdf: cannot expand more");this._hmac.reset(),t>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},e.prototype.expand=function(t){for(var n=new Uint8Array(t),r=0;r<n.length;r++)this._bufpos===this._buffer.length&&this._fillBuffer(),n[r]=this._buffer[this._bufpos++];return n},e.prototype.clean=function(){this._hmac.clean(),zy.wipe(this._buffer),zy.wipe(this._counter),this._bufpos=0},e}(),UO=z6.HKDF=LO,Jf={},Xf={},e0={};Object.defineProperty(e0,"__esModule",{value:!0});e0.BrowserRandomSource=void 0;const Wy=65536;class FO{constructor(){this.isAvailable=!1,this.isInstantiated=!1;const t=typeof self<"u"?self.crypto||self.msCrypto:null;t&&t.getRandomValues!==void 0&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Browser random byte generator is not available.");const n=new Uint8Array(t);for(let r=0;r<n.length;r+=Wy)this._crypto.getRandomValues(n.subarray(r,r+Math.min(n.length-r,Wy)));return n}}e0.BrowserRandomSource=FO;function zO(e){throw new Error('Could not dynamically require "'+e+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var t0={};const WO={},HO=Object.freeze(Object.defineProperty({__proto__:null,default:WO},Symbol.toStringTag,{value:"Module"})),VO=Rv(HO);Object.defineProperty(t0,"__esModule",{value:!0});t0.NodeRandomSource=void 0;const qO=Qn;class GO{constructor(){if(this.isAvailable=!1,this.isInstantiated=!1,typeof zO<"u"){const t=VO;t&&t.randomBytes&&(this._crypto=t,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(t){if(!this.isAvailable||!this._crypto)throw new Error("Node.js random byte generator is not available.");let n=this._crypto.randomBytes(t);if(n.length!==t)throw new Error("NodeRandomSource: got fewer bytes than requested");const r=new Uint8Array(t);for(let i=0;i<r.length;i++)r[i]=n[i];return(0,qO.wipe)(n),r}}t0.NodeRandomSource=GO;Object.defineProperty(Xf,"__esModule",{value:!0});Xf.SystemRandomSource=void 0;const KO=e0,ZO=t0;class QO{constructor(){if(this.isAvailable=!1,this.name="",this._source=new KO.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new ZO.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(t){if(!this.isAvailable)throw new Error("System random byte generator is not available.");return this._source.randomBytes(t)}}Xf.SystemRandomSource=QO;(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.randomStringForEntropy=e.randomString=e.randomUint32=e.randomBytes=e.defaultRandomSource=void 0;const t=Xf,n=we,r=Qn;e.defaultRandomSource=new t.SystemRandomSource;function i(c,u=e.defaultRandomSource){return u.randomBytes(c)}e.randomBytes=i;function o(c=e.defaultRandomSource){const u=i(4,c),d=(0,n.readUint32LE)(u);return(0,r.wipe)(u),d}e.randomUint32=o;const s="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function a(c,u=s,d=e.defaultRandomSource){if(u.length<2)throw new Error("randomString charset is too short");if(u.length>256)throw new Error("randomString charset is too long");let h="";const p=u.length,w=256-256%p;for(;c>0;){const x=i(Math.ceil(c*256/w),d);for(let E=0;E<x.length&&c>0;E++){const b=x[E];b<w&&(h+=u.charAt(b%p),c--)}(0,r.wipe)(x)}return h}e.randomString=a;function l(c,u=s,d=e.defaultRandomSource){const h=Math.ceil(c/(Math.log(u.length)/Math.LN2));return a(h,u,d)}e.randomStringForEntropy=l})(Jf);var n0={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=we,n=Qn;e.DIGEST_LENGTH=32,e.BLOCK_SIZE=64;var r=function(){function a(){this.digestLength=e.DIGEST_LENGTH,this.blockSize=e.BLOCK_SIZE,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return a.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},a.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},a.prototype.clean=function(){n.wipe(this._buffer),n.wipe(this._temp),this.reset()},a.prototype.update=function(l,c){if(c===void 0&&(c=l.length),this._finished)throw new Error("SHA256: can't update because hash was finished.");var u=0;if(this._bytesHashed+=c,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&c>0;)this._buffer[this._bufferLength++]=l[u++],c--;this._bufferLength===this.blockSize&&(o(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(c>=this.blockSize&&(u=o(this._temp,this._state,l,u,c),c%=this.blockSize);c>0;)this._buffer[this._bufferLength++]=l[u++],c--;return this},a.prototype.finish=function(l){if(!this._finished){var c=this._bytesHashed,u=this._bufferLength,d=c/536870912|0,h=c<<3,p=c%64<56?64:128;this._buffer[u]=128;for(var w=u+1;w<p-8;w++)this._buffer[w]=0;t.writeUint32BE(d,this._buffer,p-8),t.writeUint32BE(h,this._buffer,p-4),o(this._temp,this._state,this._buffer,0,p),this._finished=!0}for(var w=0;w<this.digestLength/4;w++)t.writeUint32BE(this._state[w],l,w*4);return this},a.prototype.digest=function(){var l=new Uint8Array(this.digestLength);return this.finish(l),l},a.prototype.saveState=function(){if(this._finished)throw new Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},a.prototype.restoreState=function(l){return this._state.set(l.state),this._bufferLength=l.bufferLength,l.buffer&&this._buffer.set(l.buffer),this._bytesHashed=l.bytesHashed,this._finished=!1,this},a.prototype.cleanSavedState=function(l){n.wipe(l.state),l.buffer&&n.wipe(l.buffer),l.bufferLength=0,l.bytesHashed=0},a}();e.SHA256=r;var i=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function o(a,l,c,u,d){for(;d>=64;){for(var h=l[0],p=l[1],w=l[2],x=l[3],E=l[4],b=l[5],g=l[6],v=l[7],C=0;C<16;C++){var _=u+C*4;a[C]=t.readUint32BE(c,_)}for(var C=16;C<64;C++){var $=a[C-2],f=($>>>17|$<<32-17)^($>>>19|$<<32-19)^$>>>10;$=a[C-15];var S=($>>>7|$<<32-7)^($>>>18|$<<32-18)^$>>>3;a[C]=(f+a[C-7]|0)+(S+a[C-16]|0)}for(var C=0;C<64;C++){var f=(((E>>>6|E<<26)^(E>>>11|E<<21)^(E>>>25|E<<7))+(E&b^~E&g)|0)+(v+(i[C]+a[C]|0)|0)|0,S=((h>>>2|h<<32-2)^(h>>>13|h<<32-13)^(h>>>22|h<<32-22))+(h&p^h&w^p&w)|0;v=g,g=b,b=E,E=x+f|0,x=w,w=p,p=h,h=f+S|0}l[0]+=h,l[1]+=p,l[2]+=w,l[3]+=x,l[4]+=E,l[5]+=b,l[6]+=g,l[7]+=v,u+=64,d-=64}return u}function s(a){var l=new r;l.update(a);var c=l.digest();return l.clean(),c}e.hash=s})(n0);var Wm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.sharedKey=e.generateKeyPair=e.generateKeyPairFromSeed=e.scalarMultBase=e.scalarMult=e.SHARED_KEY_LENGTH=e.SECRET_KEY_LENGTH=e.PUBLIC_KEY_LENGTH=void 0;const t=Jf,n=Qn;e.PUBLIC_KEY_LENGTH=32,e.SECRET_KEY_LENGTH=32,e.SHARED_KEY_LENGTH=32;function r(C){const _=new Float64Array(16);if(C)for(let $=0;$<C.length;$++)_[$]=C[$];return _}const i=new Uint8Array(32);i[0]=9;const o=r([56129,1]);function s(C){let _=1;for(let $=0;$<16;$++){let f=C[$]+_+65535;_=Math.floor(f/65536),C[$]=f-_*65536}C[0]+=_-1+37*(_-1)}function a(C,_,$){const f=~($-1);for(let S=0;S<16;S++){const k=f&(C[S]^_[S]);C[S]^=k,_[S]^=k}}function l(C,_){const $=r(),f=r();for(let S=0;S<16;S++)f[S]=_[S];s(f),s(f),s(f);for(let S=0;S<2;S++){$[0]=f[0]-65517;for(let D=1;D<15;D++)$[D]=f[D]-65535-($[D-1]>>16&1),$[D-1]&=65535;$[15]=f[15]-32767-($[14]>>16&1);const k=$[15]>>16&1;$[14]&=65535,a(f,$,1-k)}for(let S=0;S<16;S++)C[2*S]=f[S]&255,C[2*S+1]=f[S]>>8}function c(C,_){for(let $=0;$<16;$++)C[$]=_[2*$]+(_[2*$+1]<<8);C[15]&=32767}function u(C,_,$){for(let f=0;f<16;f++)C[f]=_[f]+$[f]}function d(C,_,$){for(let f=0;f<16;f++)C[f]=_[f]-$[f]}function h(C,_,$){let f,S,k=0,D=0,I=0,W=0,J=0,F=0,L=0,R=0,B=0,O=0,U=0,H=0,q=0,Y=0,V=0,ne=0,oe=0,le=0,de=0,pe=0,ye=0,fe=0,xe=0,$e=0,Ce=0,sn=0,Lr=0,Ui=0,Ur=0,ua=0,Bc=0,ft=$[0],it=$[1],Ie=$[2],at=$[3],yt=$[4],Fe=$[5],vt=$[6],P=$[7],m=$[8],y=$[9],T=$[10],A=$[11],N=$[12],j=$[13],ie=$[14],ve=$[15];f=_[0],k+=f*ft,D+=f*it,I+=f*Ie,W+=f*at,J+=f*yt,F+=f*Fe,L+=f*vt,R+=f*P,B+=f*m,O+=f*y,U+=f*T,H+=f*A,q+=f*N,Y+=f*j,V+=f*ie,ne+=f*ve,f=_[1],D+=f*ft,I+=f*it,W+=f*Ie,J+=f*at,F+=f*yt,L+=f*Fe,R+=f*vt,B+=f*P,O+=f*m,U+=f*y,H+=f*T,q+=f*A,Y+=f*N,V+=f*j,ne+=f*ie,oe+=f*ve,f=_[2],I+=f*ft,W+=f*it,J+=f*Ie,F+=f*at,L+=f*yt,R+=f*Fe,B+=f*vt,O+=f*P,U+=f*m,H+=f*y,q+=f*T,Y+=f*A,V+=f*N,ne+=f*j,oe+=f*ie,le+=f*ve,f=_[3],W+=f*ft,J+=f*it,F+=f*Ie,L+=f*at,R+=f*yt,B+=f*Fe,O+=f*vt,U+=f*P,H+=f*m,q+=f*y,Y+=f*T,V+=f*A,ne+=f*N,oe+=f*j,le+=f*ie,de+=f*ve,f=_[4],J+=f*ft,F+=f*it,L+=f*Ie,R+=f*at,B+=f*yt,O+=f*Fe,U+=f*vt,H+=f*P,q+=f*m,Y+=f*y,V+=f*T,ne+=f*A,oe+=f*N,le+=f*j,de+=f*ie,pe+=f*ve,f=_[5],F+=f*ft,L+=f*it,R+=f*Ie,B+=f*at,O+=f*yt,U+=f*Fe,H+=f*vt,q+=f*P,Y+=f*m,V+=f*y,ne+=f*T,oe+=f*A,le+=f*N,de+=f*j,pe+=f*ie,ye+=f*ve,f=_[6],L+=f*ft,R+=f*it,B+=f*Ie,O+=f*at,U+=f*yt,H+=f*Fe,q+=f*vt,Y+=f*P,V+=f*m,ne+=f*y,oe+=f*T,le+=f*A,de+=f*N,pe+=f*j,ye+=f*ie,fe+=f*ve,f=_[7],R+=f*ft,B+=f*it,O+=f*Ie,U+=f*at,H+=f*yt,q+=f*Fe,Y+=f*vt,V+=f*P,ne+=f*m,oe+=f*y,le+=f*T,de+=f*A,pe+=f*N,ye+=f*j,fe+=f*ie,xe+=f*ve,f=_[8],B+=f*ft,O+=f*it,U+=f*Ie,H+=f*at,q+=f*yt,Y+=f*Fe,V+=f*vt,ne+=f*P,oe+=f*m,le+=f*y,de+=f*T,pe+=f*A,ye+=f*N,fe+=f*j,xe+=f*ie,$e+=f*ve,f=_[9],O+=f*ft,U+=f*it,H+=f*Ie,q+=f*at,Y+=f*yt,V+=f*Fe,ne+=f*vt,oe+=f*P,le+=f*m,de+=f*y,pe+=f*T,ye+=f*A,fe+=f*N,xe+=f*j,$e+=f*ie,Ce+=f*ve,f=_[10],U+=f*ft,H+=f*it,q+=f*Ie,Y+=f*at,V+=f*yt,ne+=f*Fe,oe+=f*vt,le+=f*P,de+=f*m,pe+=f*y,ye+=f*T,fe+=f*A,xe+=f*N,$e+=f*j,Ce+=f*ie,sn+=f*ve,f=_[11],H+=f*ft,q+=f*it,Y+=f*Ie,V+=f*at,ne+=f*yt,oe+=f*Fe,le+=f*vt,de+=f*P,pe+=f*m,ye+=f*y,fe+=f*T,xe+=f*A,$e+=f*N,Ce+=f*j,sn+=f*ie,Lr+=f*ve,f=_[12],q+=f*ft,Y+=f*it,V+=f*Ie,ne+=f*at,oe+=f*yt,le+=f*Fe,de+=f*vt,pe+=f*P,ye+=f*m,fe+=f*y,xe+=f*T,$e+=f*A,Ce+=f*N,sn+=f*j,Lr+=f*ie,Ui+=f*ve,f=_[13],Y+=f*ft,V+=f*it,ne+=f*Ie,oe+=f*at,le+=f*yt,de+=f*Fe,pe+=f*vt,ye+=f*P,fe+=f*m,xe+=f*y,$e+=f*T,Ce+=f*A,sn+=f*N,Lr+=f*j,Ui+=f*ie,Ur+=f*ve,f=_[14],V+=f*ft,ne+=f*it,oe+=f*Ie,le+=f*at,de+=f*yt,pe+=f*Fe,ye+=f*vt,fe+=f*P,xe+=f*m,$e+=f*y,Ce+=f*T,sn+=f*A,Lr+=f*N,Ui+=f*j,Ur+=f*ie,ua+=f*ve,f=_[15],ne+=f*ft,oe+=f*it,le+=f*Ie,de+=f*at,pe+=f*yt,ye+=f*Fe,fe+=f*vt,xe+=f*P,$e+=f*m,Ce+=f*y,sn+=f*T,Lr+=f*A,Ui+=f*N,Ur+=f*j,ua+=f*ie,Bc+=f*ve,k+=38*oe,D+=38*le,I+=38*de,W+=38*pe,J+=38*ye,F+=38*fe,L+=38*xe,R+=38*$e,B+=38*Ce,O+=38*sn,U+=38*Lr,H+=38*Ui,q+=38*Ur,Y+=38*ua,V+=38*Bc,S=1,f=k+S+65535,S=Math.floor(f/65536),k=f-S*65536,f=D+S+65535,S=Math.floor(f/65536),D=f-S*65536,f=I+S+65535,S=Math.floor(f/65536),I=f-S*65536,f=W+S+65535,S=Math.floor(f/65536),W=f-S*65536,f=J+S+65535,S=Math.floor(f/65536),J=f-S*65536,f=F+S+65535,S=Math.floor(f/65536),F=f-S*65536,f=L+S+65535,S=Math.floor(f/65536),L=f-S*65536,f=R+S+65535,S=Math.floor(f/65536),R=f-S*65536,f=B+S+65535,S=Math.floor(f/65536),B=f-S*65536,f=O+S+65535,S=Math.floor(f/65536),O=f-S*65536,f=U+S+65535,S=Math.floor(f/65536),U=f-S*65536,f=H+S+65535,S=Math.floor(f/65536),H=f-S*65536,f=q+S+65535,S=Math.floor(f/65536),q=f-S*65536,f=Y+S+65535,S=Math.floor(f/65536),Y=f-S*65536,f=V+S+65535,S=Math.floor(f/65536),V=f-S*65536,f=ne+S+65535,S=Math.floor(f/65536),ne=f-S*65536,k+=S-1+37*(S-1),S=1,f=k+S+65535,S=Math.floor(f/65536),k=f-S*65536,f=D+S+65535,S=Math.floor(f/65536),D=f-S*65536,f=I+S+65535,S=Math.floor(f/65536),I=f-S*65536,f=W+S+65535,S=Math.floor(f/65536),W=f-S*65536,f=J+S+65535,S=Math.floor(f/65536),J=f-S*65536,f=F+S+65535,S=Math.floor(f/65536),F=f-S*65536,f=L+S+65535,S=Math.floor(f/65536),L=f-S*65536,f=R+S+65535,S=Math.floor(f/65536),R=f-S*65536,f=B+S+65535,S=Math.floor(f/65536),B=f-S*65536,f=O+S+65535,S=Math.floor(f/65536),O=f-S*65536,f=U+S+65535,S=Math.floor(f/65536),U=f-S*65536,f=H+S+65535,S=Math.floor(f/65536),H=f-S*65536,f=q+S+65535,S=Math.floor(f/65536),q=f-S*65536,f=Y+S+65535,S=Math.floor(f/65536),Y=f-S*65536,f=V+S+65535,S=Math.floor(f/65536),V=f-S*65536,f=ne+S+65535,S=Math.floor(f/65536),ne=f-S*65536,k+=S-1+37*(S-1),C[0]=k,C[1]=D,C[2]=I,C[3]=W,C[4]=J,C[5]=F,C[6]=L,C[7]=R,C[8]=B,C[9]=O,C[10]=U,C[11]=H,C[12]=q,C[13]=Y,C[14]=V,C[15]=ne}function p(C,_){h(C,_,_)}function w(C,_){const $=r();for(let f=0;f<16;f++)$[f]=_[f];for(let f=253;f>=0;f--)p($,$),f!==2&&f!==4&&h($,$,_);for(let f=0;f<16;f++)C[f]=$[f]}function x(C,_){const $=new Uint8Array(32),f=new Float64Array(80),S=r(),k=r(),D=r(),I=r(),W=r(),J=r();for(let B=0;B<31;B++)$[B]=C[B];$[31]=C[31]&127|64,$[0]&=248,c(f,_);for(let B=0;B<16;B++)k[B]=f[B];S[0]=I[0]=1;for(let B=254;B>=0;--B){const O=$[B>>>3]>>>(B&7)&1;a(S,k,O),a(D,I,O),u(W,S,D),d(S,S,D),u(D,k,I),d(k,k,I),p(I,W),p(J,S),h(S,D,S),h(D,k,W),u(W,S,D),d(S,S,D),p(k,S),d(D,I,J),h(S,D,o),u(S,S,I),h(D,D,S),h(S,I,J),h(I,k,f),p(k,W),a(S,k,O),a(D,I,O)}for(let B=0;B<16;B++)f[B+16]=S[B],f[B+32]=D[B],f[B+48]=k[B],f[B+64]=I[B];const F=f.subarray(32),L=f.subarray(16);w(F,F),h(L,L,F);const R=new Uint8Array(32);return l(R,L),R}e.scalarMult=x;function E(C){return x(C,i)}e.scalarMultBase=E;function b(C){if(C.length!==e.SECRET_KEY_LENGTH)throw new Error(`x25519: seed must be ${e.SECRET_KEY_LENGTH} bytes`);const _=new Uint8Array(C);return{publicKey:E(_),secretKey:_}}e.generateKeyPairFromSeed=b;function g(C){const _=(0,t.randomBytes)(32,C),$=b(_);return(0,n.wipe)(_),$}e.generateKeyPair=g;function v(C,_,$=!1){if(C.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect secret key length");if(_.length!==e.PUBLIC_KEY_LENGTH)throw new Error("X25519: incorrect public key length");const f=x(C,_);if($){let S=0;for(let k=0;k<f.length;k++)S|=f[k];if(S===0)throw new Error("X25519: invalid shared key")}return f}e.sharedKey=v})(Wm);function Hm(e){return globalThis.Buffer!=null?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}function H6(e=0){return globalThis.Buffer!=null&&globalThis.Buffer.allocUnsafe!=null?Hm(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}function Hy(e,t){t||(t=e.reduce((i,o)=>i+o.length,0));const n=H6(t);let r=0;for(const i of e)n.set(i,r),r+=i.length;return Hm(n)}function YO(e,t){if(e.length>=255)throw new TypeError("Alphabet too long");for(var n=new Uint8Array(256),r=0;r<n.length;r++)n[r]=255;for(var i=0;i<e.length;i++){var o=e.charAt(i),s=o.charCodeAt(0);if(n[s]!==255)throw new TypeError(o+" is ambiguous");n[s]=i}var a=e.length,l=e.charAt(0),c=Math.log(a)/Math.log(256),u=Math.log(256)/Math.log(a);function d(w){if(w instanceof Uint8Array||(ArrayBuffer.isView(w)?w=new Uint8Array(w.buffer,w.byteOffset,w.byteLength):Array.isArray(w)&&(w=Uint8Array.from(w))),!(w instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(w.length===0)return"";for(var x=0,E=0,b=0,g=w.length;b!==g&&w[b]===0;)b++,x++;for(var v=(g-b)*u+1>>>0,C=new Uint8Array(v);b!==g;){for(var _=w[b],$=0,f=v-1;(_!==0||$<E)&&f!==-1;f--,$++)_+=256*C[f]>>>0,C[f]=_%a>>>0,_=_/a>>>0;if(_!==0)throw new Error("Non-zero carry");E=$,b++}for(var S=v-E;S!==v&&C[S]===0;)S++;for(var k=l.repeat(x);S<v;++S)k+=e.charAt(C[S]);return k}function h(w){if(typeof w!="string")throw new TypeError("Expected String");if(w.length===0)return new Uint8Array;var x=0;if(w[x]!==" "){for(var E=0,b=0;w[x]===l;)E++,x++;for(var g=(w.length-x)*c+1>>>0,v=new Uint8Array(g);w[x];){var C=n[w.charCodeAt(x)];if(C===255)return;for(var _=0,$=g-1;(C!==0||_<b)&&$!==-1;$--,_++)C+=a*v[$]>>>0,v[$]=C%256>>>0,C=C/256>>>0;if(C!==0)throw new Error("Non-zero carry");b=_,x++}if(w[x]!==" "){for(var f=g-b;f!==g&&v[f]===0;)f++;for(var S=new Uint8Array(E+(g-f)),k=E;f!==g;)S[k++]=v[f++];return S}}}function p(w){var x=h(w);if(x)return x;throw new Error(`Non-${t} character`)}return{encode:d,decodeUnsafe:h,decode:p}}var JO=YO,XO=JO;const eI=e=>{if(e instanceof Uint8Array&&e.constructor.name==="Uint8Array")return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw new Error("Unknown type, must be binary type")},tI=e=>new TextEncoder().encode(e),nI=e=>new TextDecoder().decode(e);class rI{constructor(t,n,r){this.name=t,this.prefix=n,this.baseEncode=r}encode(t){if(t instanceof Uint8Array)return`${this.prefix}${this.baseEncode(t)}`;throw Error("Unknown type, must be binary type")}}class iI{constructor(t,n,r){if(this.name=t,this.prefix=n,n.codePointAt(0)===void 0)throw new Error("Invalid prefix character");this.prefixCodePoint=n.codePointAt(0),this.baseDecode=r}decode(t){if(typeof t=="string"){if(t.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(t)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(t.slice(this.prefix.length))}else throw Error("Can only multibase decode strings")}or(t){return V6(this,t)}}class oI{constructor(t){this.decoders=t}or(t){return V6(this,t)}decode(t){const n=t[0],r=this.decoders[n];if(r)return r.decode(t);throw RangeError(`Unable to decode multibase string ${JSON.stringify(t)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}}const V6=(e,t)=>new oI({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});class sI{constructor(t,n,r,i){this.name=t,this.prefix=n,this.baseEncode=r,this.baseDecode=i,this.encoder=new rI(t,n,r),this.decoder=new iI(t,n,i)}encode(t){return this.encoder.encode(t)}decode(t){return this.decoder.decode(t)}}const r0=({name:e,prefix:t,encode:n,decode:r})=>new sI(e,t,n,r),Nc=({prefix:e,name:t,alphabet:n})=>{const{encode:r,decode:i}=XO(n,t);return r0({prefix:e,name:t,encode:r,decode:o=>eI(i(o))})},aI=(e,t,n,r)=>{const i={};for(let u=0;u<t.length;++u)i[t[u]]=u;let o=e.length;for(;e[o-1]==="=";)--o;const s=new Uint8Array(o*n/8|0);let a=0,l=0,c=0;for(let u=0;u<o;++u){const d=i[e[u]];if(d===void 0)throw new SyntaxError(`Non-${r} character`);l=l<<n|d,a+=n,a>=8&&(a-=8,s[c++]=255&l>>a)}if(a>=n||255&l<<8-a)throw new SyntaxError("Unexpected end of data");return s},lI=(e,t,n)=>{const r=t[t.length-1]==="=",i=(1<<n)-1;let o="",s=0,a=0;for(let l=0;l<e.length;++l)for(a=a<<8|e[l],s+=8;s>n;)s-=n,o+=t[i&a>>s];if(s&&(o+=t[i&a<<n-s]),r)for(;o.length*n&7;)o+="=";return o},kt=({name:e,prefix:t,bitsPerChar:n,alphabet:r})=>r0({prefix:t,name:e,encode(i){return lI(i,r,n)},decode(i){return aI(i,r,n,e)}}),cI=r0({prefix:"\0",name:"identity",encode:e=>nI(e),decode:e=>tI(e)}),uI=Object.freeze(Object.defineProperty({__proto__:null,identity:cI},Symbol.toStringTag,{value:"Module"})),dI=kt({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),fI=Object.freeze(Object.defineProperty({__proto__:null,base2:dI},Symbol.toStringTag,{value:"Module"})),hI=kt({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),pI=Object.freeze(Object.defineProperty({__proto__:null,base8:hI},Symbol.toStringTag,{value:"Module"})),gI=Nc({prefix:"9",name:"base10",alphabet:"0123456789"}),mI=Object.freeze(Object.defineProperty({__proto__:null,base10:gI},Symbol.toStringTag,{value:"Module"})),wI=kt({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),yI=kt({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),vI=Object.freeze(Object.defineProperty({__proto__:null,base16:wI,base16upper:yI},Symbol.toStringTag,{value:"Module"})),bI=kt({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),xI=kt({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),CI=kt({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),EI=kt({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),_I=kt({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),SI=kt({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),$I=kt({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),PI=kt({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),TI=kt({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),AI=Object.freeze(Object.defineProperty({__proto__:null,base32:bI,base32hex:_I,base32hexpad:$I,base32hexpadupper:PI,base32hexupper:SI,base32pad:CI,base32padupper:EI,base32upper:xI,base32z:TI},Symbol.toStringTag,{value:"Module"})),kI=Nc({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),DI=Nc({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),OI=Object.freeze(Object.defineProperty({__proto__:null,base36:kI,base36upper:DI},Symbol.toStringTag,{value:"Module"})),II=Nc({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),NI=Nc({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),RI=Object.freeze(Object.defineProperty({__proto__:null,base58btc:II,base58flickr:NI},Symbol.toStringTag,{value:"Module"})),MI=kt({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),BI=kt({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),jI=kt({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),LI=kt({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),UI=Object.freeze(Object.defineProperty({__proto__:null,base64:MI,base64pad:BI,base64url:jI,base64urlpad:LI},Symbol.toStringTag,{value:"Module"})),q6=Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"),FI=q6.reduce((e,t,n)=>(e[n]=t,e),[]),zI=q6.reduce((e,t,n)=>(e[t.codePointAt(0)]=n,e),[]);function WI(e){return e.reduce((t,n)=>(t+=FI[n],t),"")}function HI(e){const t=[];for(const n of e){const r=zI[n.codePointAt(0)];if(r===void 0)throw new Error(`Non-base256emoji character: ${n}`);t.push(r)}return new Uint8Array(t)}const VI=r0({prefix:"🚀",name:"base256emoji",encode:WI,decode:HI}),qI=Object.freeze(Object.defineProperty({__proto__:null,base256emoji:VI},Symbol.toStringTag,{value:"Module"}));new TextEncoder;new TextDecoder;const Vy={...uI,...fI,...pI,...mI,...vI,...AI,...OI,...RI,...UI,...qI};function G6(e,t,n,r){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:n},decoder:{decode:r}}}const qy=G6("utf8","u",e=>"u"+new TextDecoder("utf8").decode(e),e=>new TextEncoder().encode(e.substring(1))),hh=G6("ascii","a",e=>{let t="a";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t},e=>{e=e.substring(1);const t=H6(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}),K6={utf8:qy,"utf-8":qy,hex:Vy.base16,latin1:hh,ascii:hh,binary:hh,...Vy};function zn(e,t="utf8"){const n=K6[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?Hm(globalThis.Buffer.from(e,"utf-8")):n.decoder.decode(`${n.prefix}${e}`)}function Zn(e,t="utf8"){const n=K6[t];if(!n)throw new Error(`Unsupported encoding "${t}"`);return(t==="utf8"||t==="utf-8")&&globalThis.Buffer!=null&&globalThis.Buffer.from!=null?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):n.encoder.encode(e).substring(1)}var Gy=globalThis&&globalThis.__spreadArray||function(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))},GI=function(){function e(t,n,r){this.name=t,this.version=n,this.os=r,this.type="browser"}return e}(),KI=function(){function e(t){this.version=t,this.type="node",this.name="node",this.os=process.platform}return e}(),ZI=function(){function e(t,n,r,i){this.name=t,this.version=n,this.os=r,this.bot=i,this.type="bot-device"}return e}(),QI=function(){function e(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null}return e}(),YI=function(){function e(){this.type="react-native",this.name="react-native",this.version=null,this.os=null}return e}(),JI=/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,XI=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,Ky=3,eN=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",JI]],Zy=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function tN(e){return e?Qy(e):typeof document>"u"&&typeof navigator<"u"&&navigator.product==="ReactNative"?new YI:typeof navigator<"u"?Qy(navigator.userAgent):iN()}function nN(e){return e!==""&&eN.reduce(function(t,n){var r=n[0],i=n[1];if(t)return t;var o=i.exec(e);return!!o&&[r,o]},!1)}function Qy(e){var t=nN(e);if(!t)return null;var n=t[0],r=t[1];if(n==="searchbot")return new QI;var i=r[1]&&r[1].split(".").join("_").split("_").slice(0,3);i?i.length<Ky&&(i=Gy(Gy([],i,!0),oN(Ky-i.length),!0)):i=[];var o=i.join("."),s=rN(e),a=XI.exec(e);return a&&a[1]?new ZI(n,o,s,a[1]):new GI(n,o,s)}function rN(e){for(var t=0,n=Zy.length;t<n;t++){var r=Zy[t],i=r[0],o=r[1],s=o.exec(e);if(s)return i}return null}function iN(){var e=typeof process<"u"&&process.version;return e?new KI(process.version.slice(1)):null}function oN(e){for(var t=[],n=0;n<e;n++)t.push("0");return t}var lo={};/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var c1=function(e,t){return c1=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var i in r)r.hasOwnProperty(i)&&(n[i]=r[i])},c1(e,t)};function sN(e,t){c1(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}var u1=function(){return u1=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u1.apply(this,arguments)};function aN(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function lN(e,t,n,r){var i=arguments.length,o=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(o=(i<3?s(o):i>3?s(t,n,o):s(t,n))||o);return i>3&&o&&Object.defineProperty(t,n,o),o}function cN(e,t){return function(n,r){t(n,r,e)}}function uN(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}function dN(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function a(u){try{c(r.next(u))}catch(d){s(d)}}function l(u){try{c(r.throw(u))}catch(d){s(d)}}function c(u){u.done?o(u.value):i(u.value).then(a,l)}c((r=r.apply(e,t||[])).next())})}function fN(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol=="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(c){return function(u){return l([c,u])}}function l(c){if(r)throw new TypeError("Generator is already executing.");for(;n;)try{if(r=1,i&&(o=c[0]&2?i.return:c[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,c[1])).done)return o;switch(i=0,o&&(c=[c[0]&2,o.value]),c[0]){case 0:case 1:o=c;break;case 4:return n.label++,{value:c[1],done:!1};case 5:n.label++,i=c[1],c=[0];continue;case 7:c=n.ops.pop(),n.trys.pop();continue;default:if(o=n.trys,!(o=o.length>0&&o[o.length-1])&&(c[0]===6||c[0]===2)){n=0;continue}if(c[0]===3&&(!o||c[1]>o[0]&&c[1]<o[3])){n.label=c[1];break}if(c[0]===6&&n.label<o[1]){n.label=o[1],o=c;break}if(o&&n.label<o[2]){n.label=o[2],n.ops.push(c);break}o[2]&&n.ops.pop(),n.trys.pop();continue}c=t.call(e,n)}catch(u){c=[6,u],i=0}finally{r=o=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}}function hN(e,t,n,r){r===void 0&&(r=n),e[r]=t[n]}function pN(e,t){for(var n in e)n!=="default"&&!t.hasOwnProperty(n)&&(t[n]=e[n])}function d1(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function Z6(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(a){s={error:a}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function gN(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(Z6(arguments[t]));return e}function mN(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;for(var r=Array(e),i=0,t=0;t<n;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,i++)r[i]=o[s];return r}function lc(e){return this instanceof lc?(this.v=e,this):new lc(e)}function wN(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(e,t||[]),i,o=[];return i={},s("next"),s("throw"),s("return"),i[Symbol.asyncIterator]=function(){return this},i;function s(h){r[h]&&(i[h]=function(p){return new Promise(function(w,x){o.push([h,p,w,x])>1||a(h,p)})})}function a(h,p){try{l(r[h](p))}catch(w){d(o[0][3],w)}}function l(h){h.value instanceof lc?Promise.resolve(h.value.v).then(c,u):d(o[0][2],h)}function c(h){a("next",h)}function u(h){a("throw",h)}function d(h,p){h(p),o.shift(),o.length&&a(o[0][0],o[0][1])}}function yN(e){var t,n;return t={},r("next"),r("throw",function(i){throw i}),r("return"),t[Symbol.iterator]=function(){return this},t;function r(i,o){t[i]=e[i]?function(s){return(n=!n)?{value:lc(e[i](s)),done:i==="return"}:o?o(s):s}:o}}function vN(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=e[Symbol.asyncIterator],n;return t?t.call(e):(e=typeof d1=="function"?d1(e):e[Symbol.iterator](),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(o){n[o]=e[o]&&function(s){return new Promise(function(a,l){s=e[o](s),i(a,l,s.done,s.value)})}}function i(o,s,a,l){Promise.resolve(l).then(function(c){o({value:c,done:a})},s)}}function bN(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function xN(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function CN(e){return e&&e.__esModule?e:{default:e}}function EN(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function _N(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n}const SN=Object.freeze(Object.defineProperty({__proto__:null,get __assign(){return u1},__asyncDelegator:yN,__asyncGenerator:wN,__asyncValues:vN,__await:lc,__awaiter:dN,__classPrivateFieldGet:EN,__classPrivateFieldSet:_N,__createBinding:hN,__decorate:lN,__exportStar:pN,__extends:sN,__generator:fN,__importDefault:CN,__importStar:xN,__makeTemplateObject:bN,__metadata:uN,__param:cN,__read:Z6,__rest:aN,__spread:gN,__spreadArrays:mN,__values:d1},Symbol.toStringTag,{value:"Module"})),i0=Rv(SN);var ph={},$a={},Yy;function $N(){if(Yy)return $a;Yy=1,Object.defineProperty($a,"__esModule",{value:!0}),$a.delay=void 0;function e(t){return new Promise(n=>{setTimeout(()=>{n(!0)},t)})}return $a.delay=e,$a}var Wi={},gh={},Hi={},Jy;function PN(){return Jy||(Jy=1,Object.defineProperty(Hi,"__esModule",{value:!0}),Hi.ONE_THOUSAND=Hi.ONE_HUNDRED=void 0,Hi.ONE_HUNDRED=100,Hi.ONE_THOUSAND=1e3),Hi}var mh={},Xy;function TN(){return Xy||(Xy=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ONE_YEAR=e.FOUR_WEEKS=e.THREE_WEEKS=e.TWO_WEEKS=e.ONE_WEEK=e.THIRTY_DAYS=e.SEVEN_DAYS=e.FIVE_DAYS=e.THREE_DAYS=e.ONE_DAY=e.TWENTY_FOUR_HOURS=e.TWELVE_HOURS=e.SIX_HOURS=e.THREE_HOURS=e.ONE_HOUR=e.SIXTY_MINUTES=e.THIRTY_MINUTES=e.TEN_MINUTES=e.FIVE_MINUTES=e.ONE_MINUTE=e.SIXTY_SECONDS=e.THIRTY_SECONDS=e.TEN_SECONDS=e.FIVE_SECONDS=e.ONE_SECOND=void 0,e.ONE_SECOND=1,e.FIVE_SECONDS=5,e.TEN_SECONDS=10,e.THIRTY_SECONDS=30,e.SIXTY_SECONDS=60,e.ONE_MINUTE=e.SIXTY_SECONDS,e.FIVE_MINUTES=e.ONE_MINUTE*5,e.TEN_MINUTES=e.ONE_MINUTE*10,e.THIRTY_MINUTES=e.ONE_MINUTE*30,e.SIXTY_MINUTES=e.ONE_MINUTE*60,e.ONE_HOUR=e.SIXTY_MINUTES,e.THREE_HOURS=e.ONE_HOUR*3,e.SIX_HOURS=e.ONE_HOUR*6,e.TWELVE_HOURS=e.ONE_HOUR*12,e.TWENTY_FOUR_HOURS=e.ONE_HOUR*24,e.ONE_DAY=e.TWENTY_FOUR_HOURS,e.THREE_DAYS=e.ONE_DAY*3,e.FIVE_DAYS=e.ONE_DAY*5,e.SEVEN_DAYS=e.ONE_DAY*7,e.THIRTY_DAYS=e.ONE_DAY*30,e.ONE_WEEK=e.SEVEN_DAYS,e.TWO_WEEKS=e.ONE_WEEK*2,e.THREE_WEEKS=e.ONE_WEEK*3,e.FOUR_WEEKS=e.ONE_WEEK*4,e.ONE_YEAR=e.ONE_DAY*365}(mh)),mh}var ev;function Q6(){return ev||(ev=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar(PN(),e),t.__exportStar(TN(),e)}(gh)),gh}var tv;function AN(){if(tv)return Wi;tv=1,Object.defineProperty(Wi,"__esModule",{value:!0}),Wi.fromMiliseconds=Wi.toMiliseconds=void 0;const e=Q6();function t(r){return r*e.ONE_THOUSAND}Wi.toMiliseconds=t;function n(r){return Math.floor(r/e.ONE_THOUSAND)}return Wi.fromMiliseconds=n,Wi}var nv;function kN(){return nv||(nv=1,function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar($N(),e),t.__exportStar(AN(),e)}(ph)),ph}var Fo={},rv;function DN(){if(rv)return Fo;rv=1,Object.defineProperty(Fo,"__esModule",{value:!0}),Fo.Watch=void 0;class e{constructor(){this.timestamps=new Map}start(n){if(this.timestamps.has(n))throw new Error(`Watch already started for label: ${n}`);this.timestamps.set(n,{started:Date.now()})}stop(n){const r=this.get(n);if(typeof r.elapsed<"u")throw new Error(`Watch already stopped for label: ${n}`);const i=Date.now()-r.started;this.timestamps.set(n,{started:r.started,elapsed:i})}get(n){const r=this.timestamps.get(n);if(typeof r>"u")throw new Error(`No timestamp found for label: ${n}`);return r}elapsed(n){const r=this.get(n);return r.elapsed||Date.now()-r.started}}return Fo.Watch=e,Fo.default=e,Fo}var wh={},Pa={},iv;function ON(){if(iv)return Pa;iv=1,Object.defineProperty(Pa,"__esModule",{value:!0}),Pa.IWatch=void 0;class e{}return Pa.IWatch=e,Pa}var ov;function IN(){return ov||(ov=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),i0.__exportStar(ON(),e)}(wh)),wh}(function(e){Object.defineProperty(e,"__esModule",{value:!0});const t=i0;t.__exportStar(kN(),e),t.__exportStar(DN(),e),t.__exportStar(IN(),e),t.__exportStar(Q6(),e)})(lo);var Be={};Object.defineProperty(Be,"__esModule",{value:!0});Be.getLocalStorage=Be.getLocalStorageOrThrow=Be.getCrypto=Be.getCryptoOrThrow=J6=Be.getLocation=Be.getLocationOrThrow=Vm=Be.getNavigator=Be.getNavigatorOrThrow=Y6=Be.getDocument=Be.getDocumentOrThrow=Be.getFromWindowOrThrow=Be.getFromWindow=void 0;function No(e){let t;return typeof window<"u"&&typeof window[e]<"u"&&(t=window[e]),t}Be.getFromWindow=No;function la(e){const t=No(e);if(!t)throw new Error(`${e} is not defined in Window`);return t}Be.getFromWindowOrThrow=la;function NN(){return la("document")}Be.getDocumentOrThrow=NN;function RN(){return No("document")}var Y6=Be.getDocument=RN;function MN(){return la("navigator")}Be.getNavigatorOrThrow=MN;function BN(){return No("navigator")}var Vm=Be.getNavigator=BN;function jN(){return la("location")}Be.getLocationOrThrow=jN;function LN(){return No("location")}var J6=Be.getLocation=LN;function UN(){return la("crypto")}Be.getCryptoOrThrow=UN;function FN(){return No("crypto")}Be.getCrypto=FN;function zN(){return la("localStorage")}Be.getLocalStorageOrThrow=zN;function WN(){return No("localStorage")}Be.getLocalStorage=WN;var qm={};Object.defineProperty(qm,"__esModule",{value:!0});var X6=qm.getWindowMetadata=void 0;const sv=Be;function HN(){let e,t;try{e=sv.getDocumentOrThrow(),t=sv.getLocationOrThrow()}catch{return null}function n(){const d=e.getElementsByTagName("link"),h=[];for(let p=0;p<d.length;p++){const w=d[p],x=w.getAttribute("rel");if(x&&x.toLowerCase().indexOf("icon")>-1){const E=w.getAttribute("href");if(E)if(E.toLowerCase().indexOf("https:")===-1&&E.toLowerCase().indexOf("http:")===-1&&E.indexOf("//")!==0){let b=t.protocol+"//"+t.host;if(E.indexOf("/")===0)b+=E;else{const g=t.pathname.split("/");g.pop();const v=g.join("/");b+=v+"/"+E}h.push(b)}else if(E.indexOf("//")===0){const b=t.protocol+E;h.push(b)}else h.push(E)}}return h}function r(...d){const h=e.getElementsByTagName("meta");for(let p=0;p<h.length;p++){const w=h[p],x=["itemprop","property","name"].map(E=>w.getAttribute(E)).filter(E=>E?d.includes(E):!1);if(x.length&&x){const E=w.getAttribute("content");if(E)return E}}return""}function i(){let d=r("name","og:site_name","og:title","twitter:title");return d||(d=e.title),d}function o(){return r("description","og:description","twitter:description","keywords")}const s=i(),a=o(),l=t.origin,c=n();return{description:a,url:l,icons:c,name:s}}X6=qm.getWindowMetadata=HN;var cc={},VN=e=>encodeURIComponent(e).replace(/[!'()*]/g,t=>`%${t.charCodeAt(0).toString(16).toUpperCase()}`),e8="%[a-f0-9]{2}",av=new RegExp("("+e8+")|([^%]+?)","gi"),lv=new RegExp("("+e8+")+","gi");function f1(e,t){try{return[decodeURIComponent(e.join(""))]}catch{}if(e.length===1)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],f1(n),f1(r))}function qN(e){try{return decodeURIComponent(e)}catch{for(var t=e.match(av)||[],n=1;n<t.length;n++)e=f1(t,n).join(""),t=e.match(av)||[];return e}}function GN(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=lv.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{var r=qN(n[0]);r!==n[0]&&(t[n[0]]=r)}n=lv.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var s=i[o];e=e.replace(new RegExp(s,"g"),t[s])}return e}var KN=function(e){if(typeof e!="string")throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch{return GN(e)}},ZN=(e,t)=>{if(!(typeof e=="string"&&typeof t=="string"))throw new TypeError("Expected the arguments to be of type `string`");if(t==="")return[e];const n=e.indexOf(t);return n===-1?[e]:[e.slice(0,n),e.slice(n+t.length)]},QN=function(e,t){for(var n={},r=Object.keys(e),i=Array.isArray(t),o=0;o<r.length;o++){var s=r[o],a=e[s];(i?t.indexOf(s)!==-1:t(s,a,e))&&(n[s]=a)}return n};(function(e){const t=VN,n=KN,r=ZN,i=QN,o=g=>g==null,s=Symbol("encodeFragmentIdentifier");function a(g){switch(g.arrayFormat){case"index":return v=>(C,_)=>{const $=C.length;return _===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?C:_===null?[...C,[u(v,g),"[",$,"]"].join("")]:[...C,[u(v,g),"[",u($,g),"]=",u(_,g)].join("")]};case"bracket":return v=>(C,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?C:_===null?[...C,[u(v,g),"[]"].join("")]:[...C,[u(v,g),"[]=",u(_,g)].join("")];case"colon-list-separator":return v=>(C,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?C:_===null?[...C,[u(v,g),":list="].join("")]:[...C,[u(v,g),":list=",u(_,g)].join("")];case"comma":case"separator":case"bracket-separator":{const v=g.arrayFormat==="bracket-separator"?"[]=":"=";return C=>(_,$)=>$===void 0||g.skipNull&&$===null||g.skipEmptyString&&$===""?_:($=$===null?"":$,_.length===0?[[u(C,g),v,u($,g)].join("")]:[[_,u($,g)].join(g.arrayFormatSeparator)])}default:return v=>(C,_)=>_===void 0||g.skipNull&&_===null||g.skipEmptyString&&_===""?C:_===null?[...C,u(v,g)]:[...C,[u(v,g),"=",u(_,g)].join("")]}}function l(g){let v;switch(g.arrayFormat){case"index":return(C,_,$)=>{if(v=/\[(\d*)\]$/.exec(C),C=C.replace(/\[\d*\]$/,""),!v){$[C]=_;return}$[C]===void 0&&($[C]={}),$[C][v[1]]=_};case"bracket":return(C,_,$)=>{if(v=/(\[\])$/.exec(C),C=C.replace(/\[\]$/,""),!v){$[C]=_;return}if($[C]===void 0){$[C]=[_];return}$[C]=[].concat($[C],_)};case"colon-list-separator":return(C,_,$)=>{if(v=/(:list)$/.exec(C),C=C.replace(/:list$/,""),!v){$[C]=_;return}if($[C]===void 0){$[C]=[_];return}$[C]=[].concat($[C],_)};case"comma":case"separator":return(C,_,$)=>{const f=typeof _=="string"&&_.includes(g.arrayFormatSeparator),S=typeof _=="string"&&!f&&d(_,g).includes(g.arrayFormatSeparator);_=S?d(_,g):_;const k=f||S?_.split(g.arrayFormatSeparator).map(D=>d(D,g)):_===null?_:d(_,g);$[C]=k};case"bracket-separator":return(C,_,$)=>{const f=/(\[\])$/.test(C);if(C=C.replace(/\[\]$/,""),!f){$[C]=_&&d(_,g);return}const S=_===null?[]:_.split(g.arrayFormatSeparator).map(k=>d(k,g));if($[C]===void 0){$[C]=S;return}$[C]=[].concat($[C],S)};default:return(C,_,$)=>{if($[C]===void 0){$[C]=_;return}$[C]=[].concat($[C],_)}}}function c(g){if(typeof g!="string"||g.length!==1)throw new TypeError("arrayFormatSeparator must be single character string")}function u(g,v){return v.encode?v.strict?t(g):encodeURIComponent(g):g}function d(g,v){return v.decode?n(g):g}function h(g){return Array.isArray(g)?g.sort():typeof g=="object"?h(Object.keys(g)).sort((v,C)=>Number(v)-Number(C)).map(v=>g[v]):g}function p(g){const v=g.indexOf("#");return v!==-1&&(g=g.slice(0,v)),g}function w(g){let v="";const C=g.indexOf("#");return C!==-1&&(v=g.slice(C)),v}function x(g){g=p(g);const v=g.indexOf("?");return v===-1?"":g.slice(v+1)}function E(g,v){return v.parseNumbers&&!Number.isNaN(Number(g))&&typeof g=="string"&&g.trim()!==""?g=Number(g):v.parseBooleans&&g!==null&&(g.toLowerCase()==="true"||g.toLowerCase()==="false")&&(g=g.toLowerCase()==="true"),g}function b(g,v){v=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},v),c(v.arrayFormatSeparator);const C=l(v),_=Object.create(null);if(typeof g!="string"||(g=g.trim().replace(/^[?#&]/,""),!g))return _;for(const $ of g.split("&")){if($==="")continue;let[f,S]=r(v.decode?$.replace(/\+/g," "):$,"=");S=S===void 0?null:["comma","separator","bracket-separator"].includes(v.arrayFormat)?S:d(S,v),C(d(f,v),S,_)}for(const $ of Object.keys(_)){const f=_[$];if(typeof f=="object"&&f!==null)for(const S of Object.keys(f))f[S]=E(f[S],v);else _[$]=E(f,v)}return v.sort===!1?_:(v.sort===!0?Object.keys(_).sort():Object.keys(_).sort(v.sort)).reduce(($,f)=>{const S=_[f];return S&&typeof S=="object"&&!Array.isArray(S)?$[f]=h(S):$[f]=S,$},Object.create(null))}e.extract=x,e.parse=b,e.stringify=(g,v)=>{if(!g)return"";v=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},v),c(v.arrayFormatSeparator);const C=S=>v.skipNull&&o(g[S])||v.skipEmptyString&&g[S]==="",_=a(v),$={};for(const S of Object.keys(g))C(S)||($[S]=g[S]);const f=Object.keys($);return v.sort!==!1&&f.sort(v.sort),f.map(S=>{const k=g[S];return k===void 0?"":k===null?u(S,v):Array.isArray(k)?k.length===0&&v.arrayFormat==="bracket-separator"?u(S,v)+"[]":k.reduce(_(S),[]).join("&"):u(S,v)+"="+u(k,v)}).filter(S=>S.length>0).join("&")},e.parseUrl=(g,v)=>{v=Object.assign({decode:!0},v);const[C,_]=r(g,"#");return Object.assign({url:C.split("?")[0]||"",query:b(x(g),v)},v&&v.parseFragmentIdentifier&&_?{fragmentIdentifier:d(_,v)}:{})},e.stringifyUrl=(g,v)=>{v=Object.assign({encode:!0,strict:!0,[s]:!0},v);const C=p(g.url).split("?")[0]||"",_=e.extract(g.url),$=e.parse(_,{sort:!1}),f=Object.assign($,g.query);let S=e.stringify(f,v);S&&(S=`?${S}`);let k=w(g.url);return g.fragmentIdentifier&&(k=`#${v[s]?u(g.fragmentIdentifier,v):g.fragmentIdentifier}`),`${C}${S}${k}`},e.pick=(g,v,C)=>{C=Object.assign({parseFragmentIdentifier:!0,[s]:!1},C);const{url:_,query:$,fragmentIdentifier:f}=e.parseUrl(g,C);return e.stringifyUrl({url:_,query:i($,v),fragmentIdentifier:f},C)},e.exclude=(g,v,C)=>{const _=Array.isArray(v)?$=>!v.includes($):($,f)=>!v($,f);return e.pick(g,_,C)}})(cc);const YN={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}},JN=":";function mL(e){const[t,n]=e.split(JN);return{namespace:t,reference:n}}function wL(e,t=[]){const n=[];return Object.keys(e).forEach(r=>{if(t.length&&!t.includes(r))return;const i=e[r];n.push(...i.accounts)}),n}function t8(e,t){return e.includes(":")?[e]:t.chains||[]}const n8="base10",tn="base16",h1="base64pad",Gm="utf8",r8=0,Rc=1,XN=0,cv=1,p1=12,Km=32;function yL(){const e=Wm.generateKeyPair();return{privateKey:Zn(e.secretKey,tn),publicKey:Zn(e.publicKey,tn)}}function vL(){const e=Jf.randomBytes(Km);return Zn(e,tn)}function bL(e,t){const n=Wm.sharedKey(zn(e,tn),zn(t,tn),!0),r=new UO(n0.SHA256,n).expand(Km);return Zn(r,tn)}function xL(e){const t=n0.hash(zn(e,tn));return Zn(t,tn)}function CL(e){const t=n0.hash(zn(e,Gm));return Zn(t,tn)}function eR(e){return zn(`${e}`,n8)}function o0(e){return Number(Zn(e,n8))}function EL(e){const t=eR(typeof e.type<"u"?e.type:r8);if(o0(t)===Rc&&typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");const n=typeof e.senderPublicKey<"u"?zn(e.senderPublicKey,tn):void 0,r=typeof e.iv<"u"?zn(e.iv,tn):Jf.randomBytes(p1),i=new Fm.ChaCha20Poly1305(zn(e.symKey,tn)).seal(r,zn(e.message,Gm));return tR({type:t,sealed:i,iv:r,senderPublicKey:n})}function _L(e){const t=new Fm.ChaCha20Poly1305(zn(e.symKey,tn)),{sealed:n,iv:r}=i8(e.encoded),i=t.open(r,n);if(i===null)throw new Error("Failed to decrypt");return Zn(i,Gm)}function tR(e){if(o0(e.type)===Rc){if(typeof e.senderPublicKey>"u")throw new Error("Missing sender public key for type 1 envelope");return Zn(Hy([e.type,e.senderPublicKey,e.iv,e.sealed]),h1)}return Zn(Hy([e.type,e.iv,e.sealed]),h1)}function i8(e){const t=zn(e,h1),n=t.slice(XN,cv),r=cv;if(o0(n)===Rc){const a=r+Km,l=a+p1,c=t.slice(r,a),u=t.slice(a,l),d=t.slice(l);return{type:n,sealed:d,iv:u,senderPublicKey:c}}const i=r+p1,o=t.slice(r,i),s=t.slice(i);return{type:n,sealed:s,iv:o}}function SL(e,t){const n=i8(e);return nR({type:o0(n.type),senderPublicKey:typeof n.senderPublicKey<"u"?Zn(n.senderPublicKey,tn):void 0,receiverPublicKey:t==null?void 0:t.receiverPublicKey})}function nR(e){const t=(e==null?void 0:e.type)||r8;if(t===Rc){if(typeof(e==null?void 0:e.senderPublicKey)>"u")throw new Error("missing sender public key");if(typeof(e==null?void 0:e.receiverPublicKey)>"u")throw new Error("missing receiver public key")}return{type:t,senderPublicKey:e==null?void 0:e.senderPublicKey,receiverPublicKey:e==null?void 0:e.receiverPublicKey}}function $L(e){return e.type===Rc&&typeof e.senderPublicKey=="string"&&typeof e.receiverPublicKey=="string"}var rR=Object.defineProperty,uv=Object.getOwnPropertySymbols,iR=Object.prototype.hasOwnProperty,oR=Object.prototype.propertyIsEnumerable,dv=(e,t,n)=>t in e?rR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,fv=(e,t)=>{for(var n in t||(t={}))iR.call(t,n)&&dv(e,n,t[n]);if(uv)for(var n of uv(t))oR.call(t,n)&&dv(e,n,t[n]);return e};const sR="ReactNative",cn={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"},aR="js";function o8(){return typeof process<"u"&&typeof process.versions<"u"&&typeof process.versions.node<"u"}function s0(){return!Y6()&&!!Vm()&&navigator.product===sR}function Zm(){return!o8()&&!!Vm()}function Mc(){return s0()?cn.reactNative:o8()?cn.node:Zm()?cn.browser:cn.unknown}function lR(e,t){let n=cc.parse(e);return n=fv(fv({},n),t),e=cc.stringify(n),e}function PL(){return X6()||{name:"",description:"",url:"",icons:[""]}}function cR(){if(Mc()===cn.reactNative&&typeof global<"u"&&typeof(global==null?void 0:global.Platform)<"u"){const{OS:n,Version:r}=global.Platform;return[n,r].join("-")}const e=tN();if(e===null)return"unknown";const t=e.os?e.os.replace(" ","").toLowerCase():"unknown";return e.type==="browser"?[t,e.name,e.version].join("-"):[t,e.version].join("-")}function uR(){var e;const t=Mc();return t===cn.browser?[t,((e=J6())==null?void 0:e.host)||"unknown"].join(":"):t}function dR(e,t,n){const r=cR(),i=uR();return[[e,t].join("-"),[aR,n].join("-"),r,i].join("/")}function TL({protocol:e,version:t,relayUrl:n,sdkVersion:r,auth:i,projectId:o,useOnCloseEvent:s}){const a=n.split("?"),l=dR(e,t,r),c={auth:i,ua:l,projectId:o,useOnCloseEvent:s||void 0},u=lR(a[1]||"",c);return a[0]+"?"+u}function no(e,t){return e.filter(n=>t.includes(n)).length===e.length}function AL(e){return Object.fromEntries(e.entries())}function kL(e){return new Map(Object.entries(e))}function DL(e=lo.FIVE_MINUTES,t){const n=lo.toMiliseconds(e||lo.FIVE_MINUTES);let r,i,o;return{resolve:s=>{o&&r&&(clearTimeout(o),r(s))},reject:s=>{o&&i&&(clearTimeout(o),i(s))},done:()=>new Promise((s,a)=>{o=setTimeout(()=>{a(new Error(t))},n),r=s,i=a})}}function OL(e,t,n){return new Promise(async(r,i)=>{const o=setTimeout(()=>i(new Error(n)),t);try{const s=await e;r(s)}catch(s){i(s)}clearTimeout(o)})}function s8(e,t){if(typeof t=="string"&&t.startsWith(`${e}:`))return t;if(e.toLowerCase()==="topic"){if(typeof t!="string")throw new Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}else if(e.toLowerCase()==="id"){if(typeof t!="number")throw new Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw new Error(`Unknown expirer target type: ${e}`)}function IL(e){return s8("topic",e)}function NL(e){return s8("id",e)}function RL(e){const[t,n]=e.split(":"),r={id:void 0,topic:void 0};if(t==="topic"&&typeof n=="string")r.topic=n;else if(t==="id"&&Number.isInteger(Number(n)))r.id=Number(n);else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${n}`);return r}function ML(e,t){return lo.fromMiliseconds((t||Date.now())+lo.toMiliseconds(e))}function BL(e){return Date.now()>=lo.toMiliseconds(e)}function jL(e,t){return`${e}${t?`:${t}`:""}`}function yh(e=[],t=[]){return[...new Set([...e,...t])]}async function LL({id:e,topic:t,wcDeepLink:n}){try{if(!n)return;const r=typeof n=="string"?JSON.parse(n):n;let i=r==null?void 0:r.href;if(typeof i!="string")return;i.endsWith("/")&&(i=i.slice(0,-1));const o=`${i}/wc?requestId=${e}&sessionTopic=${t}`,s=Mc();s===cn.browser?o.startsWith("https://")?window.open(o,"_blank","noreferrer noopener"):window.open(o,"_self","noreferrer noopener"):s===cn.reactNative&&typeof(global==null?void 0:global.Linking)<"u"&&await global.Linking.openURL(o)}catch(r){console.error(r)}}const fR="irn";function UL(e){return(e==null?void 0:e.relay)||{protocol:fR}}function FL(e){const t=YN[e];if(typeof t>"u")throw new Error(`Relay Protocol not supported: ${e}`);return t}var hR=Object.defineProperty,hv=Object.getOwnPropertySymbols,pR=Object.prototype.hasOwnProperty,gR=Object.prototype.propertyIsEnumerable,pv=(e,t,n)=>t in e?hR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,mR=(e,t)=>{for(var n in t||(t={}))pR.call(t,n)&&pv(e,n,t[n]);if(hv)for(var n of hv(t))gR.call(t,n)&&pv(e,n,t[n]);return e};function wR(e,t="-"){const n={},r="relay"+t;return Object.keys(e).forEach(i=>{if(i.startsWith(r)){const o=i.replace(r,""),s=e[i];n[o]=s}}),n}function zL(e){const t=e.indexOf(":"),n=e.indexOf("?")!==-1?e.indexOf("?"):void 0,r=e.substring(0,t),i=e.substring(t+1,n).split("@"),o=typeof n<"u"?e.substring(n):"",s=cc.parse(o);return{protocol:r,topic:yR(i[0]),version:parseInt(i[1],10),symKey:s.symKey,relay:wR(s)}}function yR(e){return e.startsWith("//")?e.substring(2):e}function vR(e,t="-"){const n="relay",r={};return Object.keys(e).forEach(i=>{const o=n+t+i;e[i]&&(r[o]=e[i])}),r}function WL(e){return`${e.protocol}:${e.topic}@${e.version}?`+cc.stringify(mR({symKey:e.symKey},vR(e.relay)))}var bR=Object.defineProperty,xR=Object.defineProperties,CR=Object.getOwnPropertyDescriptors,gv=Object.getOwnPropertySymbols,ER=Object.prototype.hasOwnProperty,_R=Object.prototype.propertyIsEnumerable,mv=(e,t,n)=>t in e?bR(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,SR=(e,t)=>{for(var n in t||(t={}))ER.call(t,n)&&mv(e,n,t[n]);if(gv)for(var n of gv(t))_R.call(t,n)&&mv(e,n,t[n]);return e},$R=(e,t)=>xR(e,CR(t));function ca(e){const t=[];return e.forEach(n=>{const[r,i]=n.split(":");t.push(`${r}:${i}`)}),t}function PR(e){const t=[];return Object.values(e).forEach(n=>{t.push(...ca(n.accounts))}),t}function TR(e,t){const n=[];return Object.values(e).forEach(r=>{ca(r.accounts).includes(t)&&n.push(...r.methods)}),n}function AR(e,t){const n=[];return Object.values(e).forEach(r=>{ca(r.accounts).includes(t)&&n.push(...r.events)}),n}function HL(e,t){const n=LR(e,t);if(n)throw new Error(n.message);const r={};for(const[i,o]of Object.entries(e))r[i]={methods:o.methods,events:o.events,chains:o.accounts.map(s=>`${s.split(":")[0]}:${s.split(":")[1]}`)};return r}function a8(e){return e.includes(":")}function kR(e){return a8(e)?e.split(":")[0]:e}function l8(e){var t,n,r;const i={};if(!Qm(e))return i;for(const[o,s]of Object.entries(e)){const a=a8(o)?[o]:s.chains,l=s.methods||[],c=s.events||[],u=kR(o);i[u]=$R(SR({},i[u]),{chains:yh(a,(t=i[u])==null?void 0:t.chains),methods:yh(l,(n=i[u])==null?void 0:n.methods),events:yh(c,(r=i[u])==null?void 0:r.events)})}return i}const DR={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},OR={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function Xr(e,t){const{message:n,code:r}=OR[e];return{message:t?`${n} ${t}`:n,code:r}}function Vs(e,t){const{message:n,code:r}=DR[e];return{message:t?`${n} ${t}`:n,code:r}}function a0(e,t){return Array.isArray(e)?typeof t<"u"&&e.length?e.every(t):!0:!1}function Qm(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function co(e){return typeof e>"u"}function Nn(e,t){return t&&co(e)?!0:typeof e=="string"&&!!e.trim().length}function Ym(e,t){return t&&co(e)?!0:typeof e=="number"&&!isNaN(e)}function VL(e,t){const{requiredNamespaces:n}=t,r=Object.keys(e.namespaces),i=Object.keys(n);let o=!0;return no(i,r)?(r.forEach(s=>{const{accounts:a,methods:l,events:c}=e.namespaces[s],u=ca(a),d=n[s];(!no(t8(s,d),u)||!no(d.methods,l)||!no(d.events,c))&&(o=!1)}),o):!1}function Vd(e){return Nn(e,!1)&&e.includes(":")?e.split(":").length===2:!1}function IR(e){if(Nn(e,!1)&&e.includes(":")){const t=e.split(":");if(t.length===3){const n=t[0]+":"+t[1];return!!t[2]&&Vd(n)}}return!1}function qL(e){if(Nn(e,!1))try{return typeof new URL(e)<"u"}catch{return!1}return!1}function GL(e){var t;return(t=e==null?void 0:e.proposer)==null?void 0:t.publicKey}function KL(e){return e==null?void 0:e.topic}function ZL(e,t){let n=null;return Nn(e==null?void 0:e.publicKey,!1)||(n=Xr("MISSING_OR_INVALID",`${t} controller public key should be a string`)),n}function wv(e){let t=!0;return a0(e)?e.length&&(t=e.every(n=>Nn(n,!1))):t=!1,t}function NR(e,t,n){let r=null;return a0(t)&&t.length?t.forEach(i=>{r||Vd(i)||(r=Vs("UNSUPPORTED_CHAINS",`${n}, chain ${i} should be a string and conform to "namespace:chainId" format`))}):Vd(e)||(r=Vs("UNSUPPORTED_CHAINS",`${n}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),r}function RR(e,t,n){let r=null;return Object.entries(e).forEach(([i,o])=>{if(r)return;const s=NR(i,t8(i,o),`${t} ${n}`);s&&(r=s)}),r}function MR(e,t){let n=null;return a0(e)?e.forEach(r=>{n||IR(r)||(n=Vs("UNSUPPORTED_ACCOUNTS",`${t}, account ${r} should be a string and conform to "namespace:chainId:address" format`))}):n=Vs("UNSUPPORTED_ACCOUNTS",`${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),n}function BR(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=MR(r==null?void 0:r.accounts,`${t} namespace`);i&&(n=i)}),n}function jR(e,t){let n=null;return wv(e==null?void 0:e.methods)?wv(e==null?void 0:e.events)||(n=Vs("UNSUPPORTED_EVENTS",`${t}, events should be an array of strings or empty array for no events`)):n=Vs("UNSUPPORTED_METHODS",`${t}, methods should be an array of strings or empty array for no methods`),n}function c8(e,t){let n=null;return Object.values(e).forEach(r=>{if(n)return;const i=jR(r,`${t}, namespace`);i&&(n=i)}),n}function QL(e,t,n){let r=null;if(e&&Qm(e)){const i=c8(e,t);i&&(r=i);const o=RR(e,t,n);o&&(r=o)}else r=Xr("MISSING_OR_INVALID",`${t}, ${n} should be an object with data`);return r}function LR(e,t){let n=null;if(e&&Qm(e)){const r=c8(e,t);r&&(n=r);const i=BR(e,t);i&&(n=i)}else n=Xr("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return n}function UR(e){return Nn(e.protocol,!0)}function YL(e,t){let n=!1;return t&&!e?n=!0:e&&a0(e)&&e.length&&e.forEach(r=>{n=UR(r)}),n}function JL(e){return typeof e=="number"}function XL(e){return typeof e<"u"&&typeof e!==null}function eU(e){return!(!e||typeof e!="object"||!e.code||!Ym(e.code,!1)||!e.message||!Nn(e.message,!1))}function tU(e){return!(co(e)||!Nn(e.method,!1))}function nU(e){return!(co(e)||co(e.result)&&co(e.error)||!Ym(e.id,!1)||!Nn(e.jsonrpc,!1))}function rU(e){return!(co(e)||!Nn(e.name,!1))}function iU(e,t){return!(!Vd(t)||!PR(e).includes(t))}function oU(e,t,n){return Nn(n,!1)?TR(e,t).includes(n):!1}function sU(e,t,n){return Nn(n,!1)?AR(e,t).includes(n):!1}function aU(e,t,n){let r=null;const i=FR(e),o=zR(t),s=Object.keys(i),a=Object.keys(o),l=yv(Object.keys(e)),c=yv(Object.keys(t)),u=l.filter(d=>!c.includes(d));return u.length&&(r=Xr("NON_CONFORMING_NAMESPACES",`${n} namespaces keys don't satisfy requiredNamespaces.
      Required: ${u.toString()}
      Received: ${Object.keys(t).toString()}`)),no(s,a)||(r=Xr("NON_CONFORMING_NAMESPACES",`${n} namespaces chains don't satisfy required namespaces.
      Required: ${s.toString()}
      Approved: ${a.toString()}`)),Object.keys(t).forEach(d=>{if(!d.includes(":")||r)return;const h=ca(t[d].accounts);h.includes(d)||(r=Xr("NON_CONFORMING_NAMESPACES",`${n} namespaces accounts don't satisfy namespace accounts for ${d}
        Required: ${d}
        Approved: ${h.toString()}`))}),s.forEach(d=>{r||(no(i[d].methods,o[d].methods)?no(i[d].events,o[d].events)||(r=Xr("NON_CONFORMING_NAMESPACES",`${n} namespaces events don't satisfy namespace events for ${d}`)):r=Xr("NON_CONFORMING_NAMESPACES",`${n} namespaces methods don't satisfy namespace methods for ${d}`))}),r}function FR(e){const t={};return Object.keys(e).forEach(n=>{var r;n.includes(":")?t[n]=e[n]:(r=e[n].chains)==null||r.forEach(i=>{t[i]={methods:e[n].methods,events:e[n].events}})}),t}function yv(e){return[...new Set(e.map(t=>t.includes(":")?t.split(":")[0]:t))]}function zR(e){const t={};return Object.keys(e).forEach(n=>{if(n.includes(":"))t[n]=e[n];else{const r=ca(e[n].accounts);r==null||r.forEach(i=>{t[i]={accounts:e[n].accounts.filter(o=>o.includes(`${i}:`)),methods:e[n].methods,events:e[n].events}})}}),t}function lU(e,t){return Ym(e,!1)&&e<=t.max&&e>=t.min}function cU(){const e=Mc();return new Promise(t=>{switch(e){case cn.browser:t(WR());break;case cn.reactNative:t(HR());break;case cn.node:t(VR());break;default:t(!0)}})}function WR(){return Zm()&&(navigator==null?void 0:navigator.onLine)}async function HR(){if(s0()&&typeof global<"u"&&global!=null&&global.NetInfo){const e=await(global==null?void 0:global.NetInfo.fetch());return e==null?void 0:e.isConnected}return!0}function VR(){return!0}function uU(e){switch(Mc()){case cn.browser:qR(e);break;case cn.reactNative:GR(e);break}}function qR(e){!s0()&&Zm()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)))}function GR(e){s0()&&typeof global<"u"&&global!=null&&global.NetInfo&&(global==null||global.NetInfo.addEventListener(t=>e(t==null?void 0:t.isConnected)))}const vh={};class dU{static get(t){return vh[t]}static set(t,n){vh[t]=n}static delete(t){delete vh[t]}}var u8="eip155",KR="store",d8="requestedChains",g1="wallet_addEthereumChain",Je,il,Iu,m1,Jm,f8,Nu,w1,y1,h8,qd,Xm,Go,ja,Gd,ew,Kd,tw,Zd,nw,ZR=class extends em{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),qt(this,Iu),qt(this,Jm),qt(this,Nu),qt(this,y1),qt(this,qd),qt(this,Go),qt(this,Gd),qt(this,Kd),qt(this,Zd),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,qt(this,Je,void 0),qt(this,il,void 0),this.onAccountsChanged=t=>{t.length===0?this.emit("disconnect"):this.emit("change",{account:Vn(t[0])})},this.onChainChanged=t=>{const n=Number(t),r=this.isChainUnsupported(n);this.emit("change",{chain:{id:n,unsupported:r}})},this.onDisconnect=()=>{xt(this,Go,ja).call(this,[]),this.emit("disconnect")},this.onDisplayUri=t=>{this.emit("message",{type:"display_uri",data:t})},this.onConnect=()=>{this.emit("connect",{})},xt(this,Iu,m1).call(this)}async connect({chainId:e,pairingTopic:t}={}){var n,r,i,o,s;try{let a=e;if(!a){const w=(n=this.storage)==null?void 0:n.getItem(KR),x=(o=(i=(r=w==null?void 0:w.state)==null?void 0:r.data)==null?void 0:i.chain)==null?void 0:o.id;x&&!this.isChainUnsupported(x)?a=x:a=(s=this.chains[0])==null?void 0:s.id}if(!a)throw new Error("No chains found on connector.");const l=await this.getProvider();xt(this,y1,h8).call(this);const c=xt(this,Nu,w1).call(this);if(l.session&&c&&await l.disconnect(),!l.session||c){const w=this.chains.filter(x=>x.id!==a).map(x=>x.id);this.emit("message",{type:"connecting"}),await l.connect({pairingTopic:t,chains:[a],optionalChains:w.length?w:void 0}),xt(this,Go,ja).call(this,this.chains.map(({id:x})=>x))}const u=await l.enable(),d=Vn(u[0]),h=await this.getChainId(),p=this.isChainUnsupported(h);return{account:d,chain:{id:h,unsupported:p}}}catch(a){throw/user rejected/i.test(a==null?void 0:a.message)?new Zt(a):a}}async disconnect(){const e=await this.getProvider();try{await e.disconnect()}catch(t){if(!/No matching key/i.test(t.message))throw t}finally{xt(this,qd,Xm).call(this),xt(this,Go,ja).call(this,[])}}async getAccount(){const{accounts:e}=await this.getProvider();return Vn(e[0])}async getChainId(){const{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return Oe(this,Je)||await xt(this,Iu,m1).call(this),e&&await this.switchChain(e),Oe(this,Je)}async getWalletClient({chainId:e}={}){const[t,n]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),r=this.chains.find(i=>i.id===e);if(!t)throw new Error("provider is required.");return Jg({account:n,chain:r,transport:Gg(t)})}async isAuthorized(){try{const[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),n=xt(this,Nu,w1).call(this);if(!e)return!1;if(n&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){var n,r;const t=this.chains.find(i=>i.id===e);if(!t)throw new Dr(new Error("chain not found on connector."));try{const i=await this.getProvider(),o=xt(this,Kd,tw).call(this),s=xt(this,Zd,nw).call(this);if(!o.includes(e)&&s.includes(g1)){await i.request({method:g1,params:[{chainId:ge(t.id),blockExplorerUrls:[(r=(n=t.blockExplorers)==null?void 0:n.default)==null?void 0:r.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});const l=xt(this,Gd,ew).call(this);l.push(e),xt(this,Go,ja).call(this,l)}return await i.request({method:"wallet_switchEthereumChain",params:[{chainId:ge(e)}]}),t}catch(i){const o=typeof i=="string"?i:i==null?void 0:i.message;throw/user rejected request/i.test(o)?new Zt(i):new Dr(i)}}};Je=new WeakMap;il=new WeakMap;Iu=new WeakSet;m1=async function(){return!Oe(this,il)&&typeof window<"u"&&Fl(this,il,xt(this,Jm,f8).call(this)),Oe(this,il)};Jm=new WeakSet;f8=async function(){const{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:n}=await Ps(()=>import("./index.es.js"),["assets/index.es.js","assets/events.js"]),[r,...i]=this.chains.map(({id:o})=>o);if(r){const{projectId:o,showQrModal:s=!0,qrModalOptions:a,metadata:l,relayUrl:c}=this.options;Fl(this,Je,await e.init({showQrModal:s,qrModalOptions:a,projectId:o,optionalMethods:n,optionalEvents:t,chains:[r],optionalChains:i.length?i:void 0,rpcMap:Object.fromEntries(this.chains.map(u=>[u.id,u.rpcUrls.default.http[0]])),metadata:l,relayUrl:c}))}};Nu=new WeakSet;w1=function(){if(xt(this,Zd,nw).call(this).includes(g1)||!this.options.isNewChainsStale)return!1;const t=xt(this,Gd,ew).call(this),n=this.chains.map(({id:i})=>i),r=xt(this,Kd,tw).call(this);return r.length&&!r.some(i=>n.includes(i))?!1:!n.every(i=>t.includes(i))};y1=new WeakSet;h8=function(){Oe(this,Je)&&(xt(this,qd,Xm).call(this),Oe(this,Je).on("accountsChanged",this.onAccountsChanged),Oe(this,Je).on("chainChanged",this.onChainChanged),Oe(this,Je).on("disconnect",this.onDisconnect),Oe(this,Je).on("session_delete",this.onDisconnect),Oe(this,Je).on("display_uri",this.onDisplayUri),Oe(this,Je).on("connect",this.onConnect))};qd=new WeakSet;Xm=function(){Oe(this,Je)&&(Oe(this,Je).removeListener("accountsChanged",this.onAccountsChanged),Oe(this,Je).removeListener("chainChanged",this.onChainChanged),Oe(this,Je).removeListener("disconnect",this.onDisconnect),Oe(this,Je).removeListener("session_delete",this.onDisconnect),Oe(this,Je).removeListener("display_uri",this.onDisplayUri),Oe(this,Je).removeListener("connect",this.onConnect))};Go=new WeakSet;ja=function(e){var t;(t=this.storage)==null||t.setItem(d8,e)};Gd=new WeakSet;ew=function(){var e;return((e=this.storage)==null?void 0:e.getItem(d8))??[]};Kd=new WeakSet;tw=function(){var r,i,o;if(!Oe(this,Je))return[];const e=(r=Oe(this,Je).session)==null?void 0:r.namespaces;return e?((o=(i=l8(e)[u8])==null?void 0:i.chains)==null?void 0:o.map(s=>parseInt(s.split(":")[1]||"")))??[]:[]};Zd=new WeakSet;nw=function(){var r,i;if(!Oe(this,Je))return[];const e=(r=Oe(this,Je).session)==null?void 0:r.namespaces;return e?((i=l8(e)[u8])==null?void 0:i.methods)??[]:[]};function QR(){return function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}}const YR=se.getBlockchainApiUrl();function JR({projectId:e}){return function(n){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(n.id))return null;const i=`${YR}/v1/?chainId=${nr}:${n.id}&projectId=${e}`;return{chain:{...n,rpcUrls:{...n.rpcUrls,default:{http:[i]}}},rpcUrls:{http:[i]}}}}function XR({projectId:e,chains:t,metadata:n}){const{publicClient:r}=aS(t,[JR({projectId:e}),QR()]);return BD({autoConnect:!0,connectors:[new ZR({chains:t,options:{projectId:e,showQrModal:!1,metadata:n}}),new Rk({chains:t}),new tm({chains:t,options:{shimDisconnect:!0}}),new sO({chains:t,options:{appName:(n==null?void 0:n.name)??"Unknown"}})],publicClient:r})}let rr;function eM(e){return rr||(rr=new Nk({...e,_sdkVersion:`react-wagmi-${u6}`})),rr}function tM(){if(!rr)throw new Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');async function e(n){await(rr==null?void 0:rr.open(n))}async function t(){await(rr==null?void 0:rr.close())}return{open:e,close:t}}function Qd(){return Qd=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qd.apply(this,arguments)}function nM(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function rM(...e){return t=>e.forEach(n=>nM(n,t))}const p8=z.forwardRef((e,t)=>{const{children:n,...r}=e,i=z.Children.toArray(n),o=i.find(oM);if(o){const s=o.props.children,a=i.map(l=>l===o?z.Children.count(s)>1?z.Children.only(null):z.isValidElement(s)?s.props.children:null:l);return z.createElement(v1,Qd({},r,{ref:t}),z.isValidElement(s)?z.cloneElement(s,void 0,a):null)}return z.createElement(v1,Qd({},r,{ref:t}),n)});p8.displayName="Slot";const v1=z.forwardRef((e,t)=>{const{children:n,...r}=e;return z.isValidElement(n)?z.cloneElement(n,{...sM(r,n.props),ref:t?rM(t,n.ref):n.ref}):z.Children.count(n)>1?z.Children.only(null):null});v1.displayName="SlotClone";const iM=({children:e})=>z.createElement(z.Fragment,null,e);function oM(e){return z.isValidElement(e)&&e.type===iM}function sM(e,t){const n={...t};for(const r in t){const i=e[r],o=t[r];/^on[A-Z]/.test(r)?i&&o?n[r]=(...a)=>{o(...a),i(...a)}:i&&(n[r]=i):r==="style"?n[r]={...i,...o}:r==="className"&&(n[r]=[i,o].filter(Boolean).join(" "))}return{...e,...n}}function g8(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=g8(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function m8(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=g8(e))&&(r&&(r+=" "),r+=t);return r}const vv=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,bv=m8,aM=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return bv(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:i,defaultVariants:o}=t,s=Object.keys(i).map(c=>{const u=n==null?void 0:n[c],d=o==null?void 0:o[c];if(u===null)return null;const h=vv(u)||vv(d);return i[c][h]}),a=n&&Object.entries(n).reduce((c,u)=>{let[d,h]=u;return h===void 0||(c[d]=h),c},{}),l=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((c,u)=>{let{class:d,className:h,...p}=u;return Object.entries(p).every(w=>{let[x,E]=w;return Array.isArray(E)?E.includes({...o,...a}[x]):{...o,...a}[x]===E})?[...c,d,h]:c},[]);return bv(e,s,l,n==null?void 0:n.class,n==null?void 0:n.className)};function lM(){for(var e=0,t,n,r="";e<arguments.length;)(t=arguments[e++])&&(n=w8(t))&&(r&&(r+=" "),r+=n);return r}function w8(e){if(typeof e=="string")return e;for(var t,n="",r=0;r<e.length;r++)e[r]&&(t=w8(e[r]))&&(n&&(n+=" "),n+=t);return n}var rw="-";function cM(e){var t=dM(e),n=e.conflictingClassGroups,r=e.conflictingClassGroupModifiers,i=r===void 0?{}:r;function o(a){var l=a.split(rw);return l[0]===""&&l.length!==1&&l.shift(),y8(l,t)||uM(a)}function s(a,l){var c=n[a]||[];return l&&i[a]?[].concat(c,i[a]):c}return{getClassGroupId:o,getConflictingClassGroupIds:s}}function y8(e,t){var s;if(e.length===0)return t.classGroupId;var n=e[0],r=t.nextPart.get(n),i=r?y8(e.slice(1),r):void 0;if(i)return i;if(t.validators.length!==0){var o=e.join(rw);return(s=t.validators.find(function(a){var l=a.validator;return l(o)}))==null?void 0:s.classGroupId}}var xv=/^\[(.+)\]$/;function uM(e){if(xv.test(e)){var t=xv.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}}function dM(e){var t=e.theme,n=e.prefix,r={nextPart:new Map,validators:[]},i=hM(Object.entries(e.classGroups),n);return i.forEach(function(o){var s=o[0],a=o[1];b1(a,r,s,t)}),r}function b1(e,t,n,r){e.forEach(function(i){if(typeof i=="string"){var o=i===""?t:Cv(t,i);o.classGroupId=n;return}if(typeof i=="function"){if(fM(i)){b1(i(r),t,n,r);return}t.validators.push({validator:i,classGroupId:n});return}Object.entries(i).forEach(function(s){var a=s[0],l=s[1];b1(l,Cv(t,a),n,r)})})}function Cv(e,t){var n=e;return t.split(rw).forEach(function(r){n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n}function fM(e){return e.isThemeGetter}function hM(e,t){return t?e.map(function(n){var r=n[0],i=n[1],o=i.map(function(s){return typeof s=="string"?t+s:typeof s=="object"?Object.fromEntries(Object.entries(s).map(function(a){var l=a[0],c=a[1];return[t+l,c]})):s});return[r,o]}):e}function pM(e){if(e<1)return{get:function(){},set:function(){}};var t=0,n=new Map,r=new Map;function i(o,s){n.set(o,s),t++,t>e&&(t=0,r=n,n=new Map)}return{get:function(s){var a=n.get(s);if(a!==void 0)return a;if((a=r.get(s))!==void 0)return i(s,a),a},set:function(s,a){n.has(s)?n.set(s,a):i(s,a)}}}var v8="!";function gM(e){var t=e.separator||":",n=t.length===1,r=t[0],i=t.length;return function(s){for(var a=[],l=0,c=0,u,d=0;d<s.length;d++){var h=s[d];if(l===0){if(h===r&&(n||s.slice(d,d+i)===t)){a.push(s.slice(c,d)),c=d+i;continue}if(h==="/"){u=d;continue}}h==="["?l++:h==="]"&&l--}var p=a.length===0?s:s.substring(c),w=p.startsWith(v8),x=w?p.substring(1):p,E=u&&u>c?u-c:void 0;return{modifiers:a,hasImportantModifier:w,baseClassName:x,maybePostfixModifierPosition:E}}}function mM(e){if(e.length<=1)return e;var t=[],n=[];return e.forEach(function(r){var i=r[0]==="[";i?(t.push.apply(t,n.sort().concat([r])),n=[]):n.push(r)}),t.push.apply(t,n.sort()),t}function wM(e){return{cache:pM(e.cacheSize),splitModifiers:gM(e),...cM(e)}}var yM=/\s+/;function vM(e,t){var n=t.splitModifiers,r=t.getClassGroupId,i=t.getConflictingClassGroupIds,o=new Set;return e.trim().split(yM).map(function(s){var a=n(s),l=a.modifiers,c=a.hasImportantModifier,u=a.baseClassName,d=a.maybePostfixModifierPosition,h=r(d?u.substring(0,d):u),p=!!d;if(!h){if(!d)return{isTailwindClass:!1,originalClassName:s};if(h=r(u),!h)return{isTailwindClass:!1,originalClassName:s};p=!1}var w=mM(l).join(":"),x=c?w+v8:w;return{isTailwindClass:!0,modifierId:x,classGroupId:h,originalClassName:s,hasPostfixModifier:p}}).reverse().filter(function(s){if(!s.isTailwindClass)return!0;var a=s.modifierId,l=s.classGroupId,c=s.hasPostfixModifier,u=a+l;return o.has(u)?!1:(o.add(u),i(l,c).forEach(function(d){return o.add(a+d)}),!0)}).reverse().map(function(s){return s.originalClassName}).join(" ")}function bM(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,i,o,s=a;function a(c){var u=t[0],d=t.slice(1),h=d.reduce(function(p,w){return w(p)},u());return r=wM(h),i=r.cache.get,o=r.cache.set,s=l,l(c)}function l(c){var u=i(c);if(u)return u;var d=vM(c,r);return o(c,d),d}return function(){return s(lM.apply(null,arguments))}}function ze(e){var t=function(r){return r[e]||[]};return t.isThemeGetter=!0,t}var b8=/^\[(?:([a-z-]+):)?(.+)\]$/i,xM=/^\d+\/\d+$/,CM=new Set(["px","full","screen"]),EM=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,_M=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,SM=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function Mn(e){return ro(e)||CM.has(e)||xM.test(e)||x1(e)}function x1(e){return Ro(e,"length",DM)}function $M(e){return Ro(e,"size",x8)}function PM(e){return Ro(e,"position",x8)}function TM(e){return Ro(e,"url",OM)}function du(e){return Ro(e,"number",ro)}function ro(e){return!Number.isNaN(Number(e))}function AM(e){return e.endsWith("%")&&ro(e.slice(0,-1))}function Ta(e){return Ev(e)||Ro(e,"number",Ev)}function Ee(e){return b8.test(e)}function Aa(){return!0}function Wr(e){return EM.test(e)}function kM(e){return Ro(e,"",IM)}function Ro(e,t,n){var r=b8.exec(e);return r?r[1]?r[1]===t:n(r[2]):!1}function DM(e){return _M.test(e)}function x8(){return!1}function OM(e){return e.startsWith("url(")}function Ev(e){return Number.isInteger(Number(e))}function IM(e){return SM.test(e)}function NM(){var e=ze("colors"),t=ze("spacing"),n=ze("blur"),r=ze("brightness"),i=ze("borderColor"),o=ze("borderRadius"),s=ze("borderSpacing"),a=ze("borderWidth"),l=ze("contrast"),c=ze("grayscale"),u=ze("hueRotate"),d=ze("invert"),h=ze("gap"),p=ze("gradientColorStops"),w=ze("gradientColorStopPositions"),x=ze("inset"),E=ze("margin"),b=ze("opacity"),g=ze("padding"),v=ze("saturate"),C=ze("scale"),_=ze("sepia"),$=ze("skew"),f=ze("space"),S=ze("translate"),k=function(){return["auto","contain","none"]},D=function(){return["auto","hidden","clip","visible","scroll"]},I=function(){return["auto",Ee,t]},W=function(){return[Ee,t]},J=function(){return["",Mn]},F=function(){return["auto",ro,Ee]},L=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},R=function(){return["solid","dashed","dotted","double","none"]},B=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},O=function(){return["start","end","center","between","around","evenly","stretch"]},U=function(){return["","0",Ee]},H=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},q=function(){return[ro,du]},Y=function(){return[ro,Ee]};return{cacheSize:500,theme:{colors:[Aa],spacing:[Mn],blur:["none","",Wr,Ee],brightness:q(),borderColor:[e],borderRadius:["none","","full",Wr,Ee],borderSpacing:W(),borderWidth:J(),contrast:q(),grayscale:U(),hueRotate:Y(),invert:U(),gap:W(),gradientColorStops:[e],gradientColorStopPositions:[AM,x1],inset:I(),margin:I(),opacity:q(),padding:W(),saturate:q(),scale:q(),sepia:U(),skew:Y(),space:W(),translate:W()},classGroups:{aspect:[{aspect:["auto","square","video",Ee]}],container:["container"],columns:[{columns:[Wr]}],"break-after":[{"break-after":H()}],"break-before":[{"break-before":H()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(L(),[Ee])}],overflow:[{overflow:D()}],"overflow-x":[{"overflow-x":D()}],"overflow-y":[{"overflow-y":D()}],overscroll:[{overscroll:k()}],"overscroll-x":[{"overscroll-x":k()}],"overscroll-y":[{"overscroll-y":k()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[x]}],"inset-x":[{"inset-x":[x]}],"inset-y":[{"inset-y":[x]}],start:[{start:[x]}],end:[{end:[x]}],top:[{top:[x]}],right:[{right:[x]}],bottom:[{bottom:[x]}],left:[{left:[x]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",Ta]}],basis:[{basis:I()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ee]}],grow:[{grow:U()}],shrink:[{shrink:U()}],order:[{order:["first","last","none",Ta]}],"grid-cols":[{"grid-cols":[Aa]}],"col-start-end":[{col:["auto",{span:["full",Ta]},Ee]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[Aa]}],"row-start-end":[{row:["auto",{span:[Ta]},Ee]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ee]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ee]}],gap:[{gap:[h]}],"gap-x":[{"gap-x":[h]}],"gap-y":[{"gap-y":[h]}],"justify-content":[{justify:["normal"].concat(O())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(O(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(O(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[E]}],mx:[{mx:[E]}],my:[{my:[E]}],ms:[{ms:[E]}],me:[{me:[E]}],mt:[{mt:[E]}],mr:[{mr:[E]}],mb:[{mb:[E]}],ml:[{ml:[E]}],"space-x":[{"space-x":[f]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[f]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",Ee,t]}],"min-w":[{"min-w":["min","max","fit",Ee,Mn]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[Wr]},Wr,Ee]}],h:[{h:[Ee,t,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",Ee,Mn]}],"max-h":[{"max-h":[Ee,t,"min","max","fit"]}],"font-size":[{text:["base",Wr,x1]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",du]}],"font-family":[{font:[Aa]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ee]}],"line-clamp":[{"line-clamp":["none",ro,du]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Ee,Mn]}],"list-image":[{"list-image":["none",Ee]}],"list-style-type":[{list:["none","disc","decimal",Ee]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(R(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",Mn]}],"underline-offset":[{"underline-offset":["auto",Ee,Mn]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:W()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ee]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ee]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(L(),[PM])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",$M]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},TM]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[w]}],"gradient-via-pos":[{via:[w]}],"gradient-to-pos":[{to:[w]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[o]}],"rounded-s":[{"rounded-s":[o]}],"rounded-e":[{"rounded-e":[o]}],"rounded-t":[{"rounded-t":[o]}],"rounded-r":[{"rounded-r":[o]}],"rounded-b":[{"rounded-b":[o]}],"rounded-l":[{"rounded-l":[o]}],"rounded-ss":[{"rounded-ss":[o]}],"rounded-se":[{"rounded-se":[o]}],"rounded-ee":[{"rounded-ee":[o]}],"rounded-es":[{"rounded-es":[o]}],"rounded-tl":[{"rounded-tl":[o]}],"rounded-tr":[{"rounded-tr":[o]}],"rounded-br":[{"rounded-br":[o]}],"rounded-bl":[{"rounded-bl":[o]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[].concat(R(),["hidden"])}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:R()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[""].concat(R())}],"outline-offset":[{"outline-offset":[Ee,Mn]}],"outline-w":[{outline:[Mn]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:J()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[Mn]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Wr,kM]}],"shadow-color":[{shadow:[Aa]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":B()}],"bg-blend":[{"bg-blend":B()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[l]}],"drop-shadow":[{"drop-shadow":["","none",Wr,Ee]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[_]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[l]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[_]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[s]}],"border-spacing-x":[{"border-spacing-x":[s]}],"border-spacing-y":[{"border-spacing-y":[s]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ee]}],duration:[{duration:Y()}],ease:[{ease:["linear","in","out","in-out",Ee]}],delay:[{delay:Y()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ee]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[C]}],"scale-x":[{"scale-x":[C]}],"scale-y":[{"scale-y":[C]}],rotate:[{rotate:[Ta,Ee]}],"translate-x":[{"translate-x":[S]}],"translate-y":[{"translate-y":[S]}],"skew-x":[{"skew-x":[$]}],"skew-y":[{"skew-y":[$]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ee]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ee]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":W()}],"scroll-mx":[{"scroll-mx":W()}],"scroll-my":[{"scroll-my":W()}],"scroll-ms":[{"scroll-ms":W()}],"scroll-me":[{"scroll-me":W()}],"scroll-mt":[{"scroll-mt":W()}],"scroll-mr":[{"scroll-mr":W()}],"scroll-mb":[{"scroll-mb":W()}],"scroll-ml":[{"scroll-ml":W()}],"scroll-p":[{"scroll-p":W()}],"scroll-px":[{"scroll-px":W()}],"scroll-py":[{"scroll-py":W()}],"scroll-ps":[{"scroll-ps":W()}],"scroll-pe":[{"scroll-pe":W()}],"scroll-pt":[{"scroll-pt":W()}],"scroll-pr":[{"scroll-pr":W()}],"scroll-pb":[{"scroll-pb":W()}],"scroll-pl":[{"scroll-pl":W()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ee]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Mn,du]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}var RM=bM(NM);function Mo(...e){return RM(m8(e))}const MM=window&&window.location!==window.parent.location;function _v(e){const t=parseInt(e.slice(0,2),16)/255,n=parseInt(e.slice(2,4),16)/255,r=parseInt(e.slice(4,6),16)/255,i=Math.max(t,n,r),o=Math.min(t,n,r);let s=0,a=0,l=(i+o)/2;if(i!==o){const c=i-o;switch(a=l>.5?c/(2-i-o):c/(i+o),i){case t:s=(n-r)/c+(n<r?6:0);break;case n:s=(r-t)/c+2;break;case r:s=(t-n)/c+4;break}s/=6}return s=Math.round(s*360),a=Math.round(a*100),l=Math.round(l*100),`${s} ${a}% ${l}%`}const BM=aM("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),C1=z.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...i},o)=>{const s=r?p8:"button";return K.jsx(s,{className:Mo(BM({variant:t,size:n,className:e})),ref:o,...i})});C1.displayName="Button";const Cn={chains:[Qa,OE],receiverWallet:"0x70D2C184Aa7003dfb9c7a42cDD08cAac60BD34C8",countdown:"2025-01-30T16:00:00Z",token:{name:"SIFTAI",symbol:"SIFTAI",priceInEth:1/33300,priceInUsd:"0.594"}};function C8(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=C8(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function ri(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=C8(e))&&(r&&(r+=" "),r+=t);return r}const ol=e=>typeof e=="number"&&!isNaN(e),Po=e=>typeof e=="string",Qt=e=>typeof e=="function",Ru=e=>Po(e)||Qt(e)?e:null,bh=e=>z.isValidElement(e)||Po(e)||Qt(e)||ol(e);function jM(e,t,n){n===void 0&&(n=300);const{scrollHeight:r,style:i}=e;requestAnimationFrame(()=>{i.minHeight="initial",i.height=r+"px",i.transition=`all ${n}ms`,requestAnimationFrame(()=>{i.height="0",i.padding="0",i.margin="0",setTimeout(t,n)})})}function l0(e){let{enter:t,exit:n,appendPosition:r=!1,collapse:i=!0,collapseDuration:o=300}=e;return function(s){let{children:a,position:l,preventExitTransition:c,done:u,nodeRef:d,isIn:h}=s;const p=r?`${t}--${l}`:t,w=r?`${n}--${l}`:n,x=z.useRef(0);return z.useLayoutEffect(()=>{const E=d.current,b=p.split(" "),g=v=>{v.target===d.current&&(E.dispatchEvent(new Event("d")),E.removeEventListener("animationend",g),E.removeEventListener("animationcancel",g),x.current===0&&v.type!=="animationcancel"&&E.classList.remove(...b))};E.classList.add(...b),E.addEventListener("animationend",g),E.addEventListener("animationcancel",g)},[]),z.useEffect(()=>{const E=d.current,b=()=>{E.removeEventListener("animationend",b),i?jM(E,u,o):u()};h||(c?b():(x.current=1,E.className+=` ${w}`,E.addEventListener("animationend",b)))},[h]),qe.createElement(qe.Fragment,null,a)}}function Sv(e,t){return e!=null?{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}:{}}const _n={list:new Map,emitQueue:new Map,on(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off(e,t){if(t){const n=this.list.get(e).filter(r=>r!==t);return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit(e){const t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit(e){this.list.has(e)&&this.list.get(e).forEach(t=>{const n=setTimeout(()=>{t(...[].slice.call(arguments,1))},0);this.emitQueue.has(e)||this.emitQueue.set(e,[]),this.emitQueue.get(e).push(n)})}},fu=e=>{let{theme:t,type:n,...r}=e;return qe.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${n})`,...r})},xh={info:function(e){return qe.createElement(fu,{...e},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return qe.createElement(fu,{...e},qe.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return qe.createElement(fu,{...e},qe.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return qe.createElement(fu,{...e},qe.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return qe.createElement("div",{className:"Toastify__spinner"})}};function LM(e){const[,t]=z.useReducer(p=>p+1,0),[n,r]=z.useState([]),i=z.useRef(null),o=z.useRef(new Map).current,s=p=>n.indexOf(p)!==-1,a=z.useRef({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:s,getToast:p=>o.get(p)}).current;function l(p){let{containerId:w}=p;const{limit:x}=a.props;!x||w&&a.containerId!==w||(a.count-=a.queue.length,a.queue=[])}function c(p){r(w=>p==null?[]:w.filter(x=>x!==p))}function u(){const{toastContent:p,toastProps:w,staleId:x}=a.queue.shift();h(p,w,x)}function d(p,w){let{delay:x,staleId:E,...b}=w;if(!bh(p)||function(W){return!i.current||a.props.enableMultiContainer&&W.containerId!==a.props.containerId||o.has(W.toastId)&&W.updateId==null}(b))return;const{toastId:g,updateId:v,data:C}=b,{props:_}=a,$=()=>c(g),f=v==null;f&&a.count++;const S={..._,style:_.toastStyle,key:a.toastKey++,...Object.fromEntries(Object.entries(b).filter(W=>{let[J,F]=W;return F!=null})),toastId:g,updateId:v,data:C,closeToast:$,isIn:!1,className:Ru(b.className||_.toastClassName),bodyClassName:Ru(b.bodyClassName||_.bodyClassName),progressClassName:Ru(b.progressClassName||_.progressClassName),autoClose:!b.isLoading&&(k=b.autoClose,D=_.autoClose,k===!1||ol(k)&&k>0?k:D),deleteToast(){const W=Sv(o.get(g),"removed");o.delete(g),_n.emit(4,W);const J=a.queue.length;if(a.count=g==null?a.count-a.displayedToast:a.count-1,a.count<0&&(a.count=0),J>0){const F=g==null?a.props.limit:1;if(J===1||F===1)a.displayedToast++,u();else{const L=F>J?J:F;a.displayedToast=L;for(let R=0;R<L;R++)u()}}else t()}};var k,D;S.iconOut=function(W){let{theme:J,type:F,isLoading:L,icon:R}=W,B=null;const O={theme:J,type:F};return R===!1||(Qt(R)?B=R(O):z.isValidElement(R)?B=z.cloneElement(R,O):Po(R)||ol(R)?B=R:L?B=xh.spinner():(U=>U in xh)(F)&&(B=xh[F](O))),B}(S),Qt(b.onOpen)&&(S.onOpen=b.onOpen),Qt(b.onClose)&&(S.onClose=b.onClose),S.closeButton=_.closeButton,b.closeButton===!1||bh(b.closeButton)?S.closeButton=b.closeButton:b.closeButton===!0&&(S.closeButton=!bh(_.closeButton)||_.closeButton);let I=p;z.isValidElement(p)&&!Po(p.type)?I=z.cloneElement(p,{closeToast:$,toastProps:S,data:C}):Qt(p)&&(I=p({closeToast:$,toastProps:S,data:C})),_.limit&&_.limit>0&&a.count>_.limit&&f?a.queue.push({toastContent:I,toastProps:S,staleId:E}):ol(x)?setTimeout(()=>{h(I,S,E)},x):h(I,S,E)}function h(p,w,x){const{toastId:E}=w;x&&o.delete(x);const b={content:p,props:w};o.set(E,b),r(g=>[...g,E].filter(v=>v!==x)),_n.emit(4,Sv(b,b.props.updateId==null?"added":"updated"))}return z.useEffect(()=>(a.containerId=e.containerId,_n.cancelEmit(3).on(0,d).on(1,p=>i.current&&c(p)).on(5,l).emit(2,a),()=>{o.clear(),_n.emit(3,a)}),[]),z.useEffect(()=>{a.props=e,a.isToastActive=s,a.displayedToast=n.length}),{getToastToRender:function(p){const w=new Map,x=Array.from(o.values());return e.newestOnTop&&x.reverse(),x.forEach(E=>{const{position:b}=E.props;w.has(b)||w.set(b,[]),w.get(b).push(E)}),Array.from(w,E=>p(E[0],E[1]))},containerRef:i,isToastActive:s}}function $v(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function Pv(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function UM(e){const[t,n]=z.useState(!1),[r,i]=z.useState(!1),o=z.useRef(null),s=z.useRef({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,a=z.useRef(e),{autoClose:l,pauseOnHover:c,closeToast:u,onClick:d,closeOnClick:h}=e;function p(C){if(e.draggable){C.nativeEvent.type==="touchstart"&&C.nativeEvent.preventDefault(),s.didMove=!1,document.addEventListener("mousemove",b),document.addEventListener("mouseup",g),document.addEventListener("touchmove",b),document.addEventListener("touchend",g);const _=o.current;s.canCloseOnClick=!0,s.canDrag=!0,s.boundingRect=_.getBoundingClientRect(),_.style.transition="",s.x=$v(C.nativeEvent),s.y=Pv(C.nativeEvent),e.draggableDirection==="x"?(s.start=s.x,s.removalDistance=_.offsetWidth*(e.draggablePercent/100)):(s.start=s.y,s.removalDistance=_.offsetHeight*(e.draggablePercent===80?1.5*e.draggablePercent:e.draggablePercent/100))}}function w(C){if(s.boundingRect){const{top:_,bottom:$,left:f,right:S}=s.boundingRect;C.nativeEvent.type!=="touchend"&&e.pauseOnHover&&s.x>=f&&s.x<=S&&s.y>=_&&s.y<=$?E():x()}}function x(){n(!0)}function E(){n(!1)}function b(C){const _=o.current;s.canDrag&&_&&(s.didMove=!0,t&&E(),s.x=$v(C),s.y=Pv(C),s.delta=e.draggableDirection==="x"?s.x-s.start:s.y-s.start,s.start!==s.x&&(s.canCloseOnClick=!1),_.style.transform=`translate${e.draggableDirection}(${s.delta}px)`,_.style.opacity=""+(1-Math.abs(s.delta/s.removalDistance)))}function g(){document.removeEventListener("mousemove",b),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",b),document.removeEventListener("touchend",g);const C=o.current;if(s.canDrag&&s.didMove&&C){if(s.canDrag=!1,Math.abs(s.delta)>s.removalDistance)return i(!0),void e.closeToast();C.style.transition="transform 0.2s, opacity 0.2s",C.style.transform=`translate${e.draggableDirection}(0)`,C.style.opacity="1"}}z.useEffect(()=>{a.current=e}),z.useEffect(()=>(o.current&&o.current.addEventListener("d",x,{once:!0}),Qt(e.onOpen)&&e.onOpen(z.isValidElement(e.children)&&e.children.props),()=>{const C=a.current;Qt(C.onClose)&&C.onClose(z.isValidElement(C.children)&&C.children.props)}),[]),z.useEffect(()=>(e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",x),window.addEventListener("blur",E)),()=>{e.pauseOnFocusLoss&&(window.removeEventListener("focus",x),window.removeEventListener("blur",E))}),[e.pauseOnFocusLoss]);const v={onMouseDown:p,onTouchStart:p,onMouseUp:w,onTouchEnd:w};return l&&c&&(v.onMouseEnter=E,v.onMouseLeave=x),h&&(v.onClick=C=>{d&&d(C),s.canCloseOnClick&&u()}),{playToast:x,pauseToast:E,isRunning:t,preventExitTransition:r,toastRef:o,eventHandlers:v}}function E8(e){let{closeToast:t,theme:n,ariaLabel:r="close"}=e;return qe.createElement("button",{className:`Toastify__close-button Toastify__close-button--${n}`,type:"button",onClick:i=>{i.stopPropagation(),t(i)},"aria-label":r},qe.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},qe.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function FM(e){let{delay:t,isRunning:n,closeToast:r,type:i="default",hide:o,className:s,style:a,controlledProgress:l,progress:c,rtl:u,isIn:d,theme:h}=e;const p=o||l&&c===0,w={...a,animationDuration:`${t}ms`,animationPlayState:n?"running":"paused",opacity:p?0:1};l&&(w.transform=`scaleX(${c})`);const x=ri("Toastify__progress-bar",l?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${h}`,`Toastify__progress-bar--${i}`,{"Toastify__progress-bar--rtl":u}),E=Qt(s)?s({rtl:u,type:i,defaultClassName:x}):ri(x,s);return qe.createElement("div",{role:"progressbar","aria-hidden":p?"true":"false","aria-label":"notification timer",className:E,style:w,[l&&c>=1?"onTransitionEnd":"onAnimationEnd"]:l&&c<1?null:()=>{d&&r()}})}const zM=e=>{const{isRunning:t,preventExitTransition:n,toastRef:r,eventHandlers:i}=UM(e),{closeButton:o,children:s,autoClose:a,onClick:l,type:c,hideProgressBar:u,closeToast:d,transition:h,position:p,className:w,style:x,bodyClassName:E,bodyStyle:b,progressClassName:g,progressStyle:v,updateId:C,role:_,progress:$,rtl:f,toastId:S,deleteToast:k,isIn:D,isLoading:I,iconOut:W,closeOnClick:J,theme:F}=e,L=ri("Toastify__toast",`Toastify__toast-theme--${F}`,`Toastify__toast--${c}`,{"Toastify__toast--rtl":f},{"Toastify__toast--close-on-click":J}),R=Qt(w)?w({rtl:f,position:p,type:c,defaultClassName:L}):ri(L,w),B=!!$||!a,O={closeToast:d,type:c,theme:F};let U=null;return o===!1||(U=Qt(o)?o(O):z.isValidElement(o)?z.cloneElement(o,O):E8(O)),qe.createElement(h,{isIn:D,done:k,position:p,preventExitTransition:n,nodeRef:r},qe.createElement("div",{id:S,onClick:l,className:R,...i,style:x,ref:r},qe.createElement("div",{...D&&{role:_},className:Qt(E)?E({type:c}):ri("Toastify__toast-body",E),style:b},W!=null&&qe.createElement("div",{className:ri("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!I})},W),qe.createElement("div",null,s)),U,qe.createElement(FM,{...C&&!B?{key:`pb-${C}`}:{},rtl:f,theme:F,delay:a,isRunning:t,isIn:D,closeToast:d,hide:u,type:c,style:v,className:g,controlledProgress:B,progress:$||0})))},c0=function(e,t){return t===void 0&&(t=!1),{enter:`Toastify--animate Toastify__${e}-enter`,exit:`Toastify--animate Toastify__${e}-exit`,appendPosition:t}},WM=l0(c0("bounce",!0));l0(c0("slide",!0));l0(c0("zoom"));l0(c0("flip"));const E1=z.forwardRef((e,t)=>{const{getToastToRender:n,containerRef:r,isToastActive:i}=LM(e),{className:o,style:s,rtl:a,containerId:l}=e;function c(u){const d=ri("Toastify__toast-container",`Toastify__toast-container--${u}`,{"Toastify__toast-container--rtl":a});return Qt(o)?o({position:u,rtl:a,defaultClassName:d}):ri(d,Ru(o))}return z.useEffect(()=>{t&&(t.current=r.current)},[]),qe.createElement("div",{ref:r,className:"Toastify",id:l},n((u,d)=>{const h=d.length?{...s}:{...s,pointerEvents:"none"};return qe.createElement("div",{className:c(u),style:h,key:`container-${u}`},d.map((p,w)=>{let{content:x,props:E}=p;return qe.createElement(zM,{...E,isIn:i(E.toastId),style:{...E.style,"--nth":w+1,"--len":d.length},key:`toast-${E.key}`},x)}))}))});E1.displayName="ToastContainer",E1.defaultProps={position:"top-right",transition:WM,autoClose:5e3,closeButton:E8,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};let Ch,Ki=new Map,La=[],HM=1;function _8(){return""+HM++}function VM(e){return e&&(Po(e.toastId)||ol(e.toastId))?e.toastId:_8()}function sl(e,t){return Ki.size>0?_n.emit(0,e,t):La.push({content:e,options:t}),t.toastId}function Yd(e,t){return{...t,type:t&&t.type||e,toastId:VM(t)}}function hu(e){return(t,n)=>sl(t,Yd(e,n))}function Re(e,t){return sl(e,Yd("default",t))}Re.loading=(e,t)=>sl(e,Yd("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...t})),Re.promise=function(e,t,n){let r,{pending:i,error:o,success:s}=t;i&&(r=Po(i)?Re.loading(i,n):Re.loading(i.render,{...n,...i}));const a={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},l=(u,d,h)=>{if(d==null)return void Re.dismiss(r);const p={type:u,...a,...n,data:h},w=Po(d)?{render:d}:d;return r?Re.update(r,{...p,...w}):Re(w.render,{...p,...w}),h},c=Qt(e)?e():e;return c.then(u=>l("success",s,u)).catch(u=>l("error",o,u)),c},Re.success=hu("success"),Re.info=hu("info"),Re.error=hu("error"),Re.warning=hu("warning"),Re.warn=Re.warning,Re.dark=(e,t)=>sl(e,Yd("default",{theme:"dark",...t})),Re.dismiss=e=>{Ki.size>0?_n.emit(1,e):La=La.filter(t=>e!=null&&t.options.toastId!==e)},Re.clearWaitingQueue=function(e){return e===void 0&&(e={}),_n.emit(5,e)},Re.isActive=e=>{let t=!1;return Ki.forEach(n=>{n.isToastActive&&n.isToastActive(e)&&(t=!0)}),t},Re.update=function(e,t){t===void 0&&(t={}),setTimeout(()=>{const n=function(r,i){let{containerId:o}=i;const s=Ki.get(o||Ch);return s&&s.getToast(r)}(e,t);if(n){const{props:r,content:i}=n,o={delay:100,...r,...t,toastId:t.toastId||e,updateId:_8()};o.toastId!==e&&(o.staleId=e);const s=o.render||i;delete o.render,sl(s,o)}},0)},Re.done=e=>{Re.update(e,{progress:1})},Re.onChange=e=>(_n.on(4,e),()=>{_n.off(4,e)}),Re.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Re.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},_n.on(2,e=>{Ch=e.containerId||e,Ki.set(Ch,e),La.forEach(t=>{_n.emit(0,t.content,t.options)}),La=[]}).on(3,e=>{Ki.delete(e.containerId||e),Ki.size===0&&_n.off(0).off(1).off(5)});const qM=()=>{const e=O6(),{data:t}=YD(),n=z.useMemo(()=>e.chain&&!e.chain.unsupported?e.chain:Cn.chains[0],[e.chain]),r=z.useMemo(()=>Np({chain:n,transport:D5(),batch:{multicall:!0}}),[n]);return{buyCupcake:async o=>{var s;if(!(!t||!o))try{const a=document.getElementById("transaction-pending-popup");if(await r.getBalance({address:t.account.address})<o){Re.error("The amount of ETH you wrote to participate in the pre-sale is not in your wallet.");return}a==null||a.style.setProperty("display","flex");const c=await t.sendTransaction({to:Cn.receiverWallet,data:"0x",value:o});return await r.waitForTransactionReceipt({hash:c}),a==null||a.style.setProperty("display","none"),Re.success("You have successfully participated in the SIFTAI presale."),{hash:c}}catch(a){Re.error(((s=a==null?void 0:a.walk())==null?void 0:s.message)||(a==null?void 0:a.message)||"Signing failed")}}}};var GM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const KM=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),S8=(e,t)=>{const n=z.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:s,children:a,...l},c)=>z.createElement("svg",{ref:c,...GM,width:i,height:i,stroke:r,strokeWidth:s?Number(o)*24/Number(i):o,className:`lucide lucide-${KM(e)}`,...l},[...t.map(([u,d])=>z.createElement(u,d)),...(Array.isArray(a)?a:[a])||[]]));return n.displayName=`${e}`,n},Tv=S8("CircuitBoard",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]),ZM=S8("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),QM=z.forwardRef(({className:e,...t},n)=>K.jsx("div",{ref:n,className:Mo("rounded-xl border bg-card text-card-foreground shadow",e),...t}));QM.displayName="Card";const YM=z.forwardRef(({className:e,...t},n)=>K.jsx("div",{ref:n,className:Mo("flex flex-col space-y-1.5 p-6",e),...t}));YM.displayName="CardHeader";const $8=z.forwardRef(({className:e,...t},n)=>K.jsx("h3",{ref:n,className:Mo("font-semibold leading-none tracking-tight",e),...t}));$8.displayName="CardTitle";const JM=z.forwardRef(({className:e,...t},n)=>K.jsx("p",{ref:n,className:Mo("text-sm text-muted-foreground",e),...t}));JM.displayName="CardDescription";const XM=z.forwardRef(({className:e,...t},n)=>K.jsx("div",{ref:n,className:Mo("p-6 pt-0",e),...t}));XM.displayName="CardContent";const eB=z.forwardRef(({className:e,...t},n)=>K.jsx("div",{ref:n,className:Mo("flex items-center p-6 pt-0",e),...t}));eB.displayName="CardFooter";var P8={exports:{}},tB="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",nB=tB,rB=nB;function T8(){}function A8(){}A8.resetWarningCache=T8;var iB=function(){function e(r,i,o,s,a,l){if(l!==rB){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:A8,resetWarningCache:T8};return n.PropTypes=n,n};P8.exports=iB();var He=P8.exports;function k8(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Av(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D8(e,t,n){return t&&Av(e.prototype,t),n&&Av(e,n),e}function O8(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_1(e,t)}function Jd(e){return Jd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Jd(e)}function _1(e,t){return _1=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},_1(e,t)}function oB(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch{return!1}}function sB(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function aB(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:sB(e)}function I8(e){var t=oB();return function(){var r=Jd(e),i;if(t){var o=Jd(this).constructor;i=Reflect.construct(r,arguments,o)}else i=r.apply(this,arguments);return aB(this,i)}}function lB(e){return cB(e)||uB(e)||dB(e)||fB()}function cB(e){if(Array.isArray(e))return S1(e)}function uB(e){if(typeof Symbol<"u"&&Symbol.iterator in Object(e))return Array.from(e)}function dB(e,t){if(e){if(typeof e=="string")return S1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return S1(e,t)}}function S1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function fB(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ko(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:2,n=String(e);if(t===0)return n;var r=n.match(/(.*?)([0-9]+)(.*)/),i=r?r[1]:"",o=r?r[3]:"",s=r?r[2]:n,a=s.length>=t?s:(lB(Array(t)).map(function(){return"0"}).join("")+s).slice(t*-1);return"".concat(i).concat(a).concat(o)}var N8={daysInHours:!1,zeroPadTime:2};function hB(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.now,r=n===void 0?Date.now:n,i=t.precision,o=i===void 0?0:i,s=t.controlled,a=t.offsetTime,l=a===void 0?0:a,c=t.overtime,u;typeof e=="string"?u=new Date(e).getTime():e instanceof Date?u=e.getTime():u=e,s||(u+=l);var d=s?u:u-r(),h=Math.min(20,Math.max(0,o)),p=Math.round(parseFloat(((c?d:Math.max(0,d))/1e3).toFixed(h))*1e3),w=Math.abs(p)/1e3;return{total:p,days:Math.floor(w/(3600*24)),hours:Math.floor(w/3600%24),minutes:Math.floor(w/60%60),seconds:Math.floor(w%60),milliseconds:Number((w%1*1e3).toFixed()),completed:p<=0}}function pB(e,t){var n=e.days,r=e.hours,i=e.minutes,o=e.seconds,s=Object.assign(Object.assign({},N8),t),a=s.daysInHours,l=s.zeroPadTime,c=s.zeroPadDays,u=c===void 0?l:c,d=Math.min(2,l),h=a?Ko(r+n*24,l):Ko(r,d);return{days:a?"":Ko(n,u),hours:h,minutes:Ko(i,d),seconds:Ko(o,d)}}var R8=function(e){O8(n,e);var t=I8(n);function n(){var r;return k8(this,n),r=t.apply(this,arguments),r.state={count:r.props.count||3},r.startCountdown=function(){r.interval=window.setInterval(function(){var i=r.state.count-1;i===0?(r.stopCountdown(),r.props.onComplete&&r.props.onComplete()):r.setState(function(o){return{count:o.count-1}})},1e3)},r.stopCountdown=function(){clearInterval(r.interval)},r.addTime=function(i){r.stopCountdown(),r.setState(function(o){return{count:o.count+i}},r.startCountdown)},r}return D8(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?z.cloneElement(this.props.children,{count:this.state.count}):null}}]),n}(z.Component);R8.propTypes={count:He.number,children:He.element,onComplete:He.func};var iw=function(e){O8(n,e);var t=I8(n);function n(r){var i;if(k8(this,n),i=t.call(this,r),i.mounted=!1,i.initialTimestamp=i.calcOffsetStartTimestamp(),i.offsetStartTimestamp=i.props.autoStart?0:i.initialTimestamp,i.offsetTime=0,i.legacyMode=!1,i.legacyCountdownRef=z.createRef(),i.tick=function(){var s=i.calcTimeDelta(),a=s.completed&&!i.props.overtime?void 0:i.props.onTick;i.setTimeDeltaState(s,void 0,a)},i.start=function(){if(!i.isStarted()){var s=i.offsetStartTimestamp;i.offsetStartTimestamp=0,i.offsetTime+=s?i.calcOffsetStartTimestamp()-s:0;var a=i.calcTimeDelta();i.setTimeDeltaState(a,"STARTED",i.props.onStart),!i.props.controlled&&(!a.completed||i.props.overtime)&&(i.clearTimer(),i.interval=window.setInterval(i.tick,i.props.intervalDelay))}},i.pause=function(){i.isPaused()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.setTimeDeltaState(i.state.timeDelta,"PAUSED",i.props.onPause))},i.stop=function(){i.isStopped()||(i.clearTimer(),i.offsetStartTimestamp=i.calcOffsetStartTimestamp(),i.offsetTime=i.offsetStartTimestamp-i.initialTimestamp,i.setTimeDeltaState(i.calcTimeDelta(),"STOPPED",i.props.onStop))},i.isStarted=function(){return i.isStatus("STARTED")},i.isPaused=function(){return i.isStatus("PAUSED")},i.isStopped=function(){return i.isStatus("STOPPED")},i.isCompleted=function(){return i.isStatus("COMPLETED")},r.date){var o=i.calcTimeDelta();i.state={timeDelta:o,status:o.completed?"COMPLETED":"STOPPED"}}else i.legacyMode=!0;return i}return D8(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(i){this.legacyMode||this.props.date!==i.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var i=this.props,o=i.date,s=i.now,a=i.precision,l=i.controlled,c=i.overtime;return hB(o,{now:s,precision:a,controlled:l,offsetTime:this.offsetTime,overtime:c})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(i){this.legacyCountdownRef.current.addTime(i)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(i){return this.state.status===i}},{key:"setTimeDeltaState",value:function(i,o,s){var a=this;if(this.mounted){var l=i.completed&&!this.state.timeDelta.completed,c=i.completed&&o==="STARTED";l&&!this.props.overtime&&this.clearTimer();var u=function(){s&&s(a.state.timeDelta),a.props.onComplete&&(l||c)&&a.props.onComplete(i,c)};return this.setState(function(d){var h=o||d.status;return i.completed&&!a.props.overtime?h="COMPLETED":!o&&h==="COMPLETED"&&(h="STOPPED"),{timeDelta:i,status:h}},u)}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var i=this.props,o=i.daysInHours,s=i.zeroPadTime,a=i.zeroPadDays,l=this.state.timeDelta;return Object.assign(Object.assign({},l),{api:this.getApi(),props:this.props,formatted:pB(l,{daysInHours:o,zeroPadTime:s,zeroPadDays:a})})}},{key:"render",value:function(){if(this.legacyMode){var i=this.props,o=i.count,s=i.children,a=i.onComplete;return z.createElement(R8,{ref:this.legacyCountdownRef,count:o,onComplete:a},s)}var l=this.props,c=l.className,u=l.overtime,d=l.children,h=l.renderer,p=this.getRenderProps();if(h)return h(p);if(d&&this.state.timeDelta.completed&&!u)return z.cloneElement(d,{countdown:p});var w=p.formatted,x=w.days,E=w.hours,b=w.minutes,g=w.seconds;return z.createElement("span",{className:c},p.total<0?"-":"",x,x?":":"",E,":",b,":",g)}}]),n}(z.Component);iw.defaultProps=Object.assign(Object.assign({},N8),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0});iw.propTypes={date:He.oneOfType([He.instanceOf(Date),He.string,He.number]),daysInHours:He.bool,zeroPadTime:He.number,zeroPadDays:He.number,controlled:He.bool,intervalDelay:He.number,precision:He.number,autoStart:He.bool,overtime:He.bool,className:He.string,children:He.element,renderer:He.func,now:He.func,onMount:He.func,onStart:He.func,onPause:He.func,onStop:He.func,onTick:He.func,onComplete:He.func};var M8={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nv,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",a="minute",l="hour",c="day",u="week",d="month",h="quarter",p="year",w="date",x="Invalid Date",E=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,b=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(F){var L=["th","st","nd","rd"],R=F%100;return"["+F+(L[(R-20)%10]||L[R]||L[0])+"]"}},v=function(F,L,R){var B=String(F);return!B||B.length>=L?F:""+Array(L+1-B.length).join(R)+F},C={s:v,z:function(F){var L=-F.utcOffset(),R=Math.abs(L),B=Math.floor(R/60),O=R%60;return(L<=0?"+":"-")+v(B,2,"0")+":"+v(O,2,"0")},m:function F(L,R){if(L.date()<R.date())return-F(R,L);var B=12*(R.year()-L.year())+(R.month()-L.month()),O=L.clone().add(B,d),U=R-O<0,H=L.clone().add(B+(U?-1:1),d);return+(-(B+(R-O)/(U?O-H:H-O))||0)},a:function(F){return F<0?Math.ceil(F)||0:Math.floor(F)},p:function(F){return{M:d,y:p,w:u,d:c,D:w,h:l,m:a,s,ms:o,Q:h}[F]||String(F||"").toLowerCase().replace(/s$/,"")},u:function(F){return F===void 0}},_="en",$={};$[_]=g;var f="$isDayjsObject",S=function(F){return F instanceof W||!(!F||!F[f])},k=function F(L,R,B){var O;if(!L)return _;if(typeof L=="string"){var U=L.toLowerCase();$[U]&&(O=U),R&&($[U]=R,O=U);var H=L.split("-");if(!O&&H.length>1)return F(H[0])}else{var q=L.name;$[q]=L,O=q}return!B&&O&&(_=O),O||!B&&_},D=function(F,L){if(S(F))return F.clone();var R=typeof L=="object"?L:{};return R.date=F,R.args=arguments,new W(R)},I=C;I.l=k,I.i=S,I.w=function(F,L){return D(F,{locale:L.$L,utc:L.$u,x:L.$x,$offset:L.$offset})};var W=function(){function F(R){this.$L=k(R.locale,null,!0),this.parse(R),this.$x=this.$x||R.x||{},this[f]=!0}var L=F.prototype;return L.parse=function(R){this.$d=function(B){var O=B.date,U=B.utc;if(O===null)return new Date(NaN);if(I.u(O))return new Date;if(O instanceof Date)return new Date(O);if(typeof O=="string"&&!/Z$/i.test(O)){var H=O.match(E);if(H){var q=H[2]-1||0,Y=(H[7]||"0").substring(0,3);return U?new Date(Date.UTC(H[1],q,H[3]||1,H[4]||0,H[5]||0,H[6]||0,Y)):new Date(H[1],q,H[3]||1,H[4]||0,H[5]||0,H[6]||0,Y)}}return new Date(O)}(R),this.init()},L.init=function(){var R=this.$d;this.$y=R.getFullYear(),this.$M=R.getMonth(),this.$D=R.getDate(),this.$W=R.getDay(),this.$H=R.getHours(),this.$m=R.getMinutes(),this.$s=R.getSeconds(),this.$ms=R.getMilliseconds()},L.$utils=function(){return I},L.isValid=function(){return this.$d.toString()!==x},L.isSame=function(R,B){var O=D(R);return this.startOf(B)<=O&&O<=this.endOf(B)},L.isAfter=function(R,B){return D(R)<this.startOf(B)},L.isBefore=function(R,B){return this.endOf(B)<D(R)},L.$g=function(R,B,O){return I.u(R)?this[B]:this.set(O,R)},L.unix=function(){return Math.floor(this.valueOf()/1e3)},L.valueOf=function(){return this.$d.getTime()},L.startOf=function(R,B){var O=this,U=!!I.u(B)||B,H=I.p(R),q=function(ye,fe){var xe=I.w(O.$u?Date.UTC(O.$y,fe,ye):new Date(O.$y,fe,ye),O);return U?xe:xe.endOf(c)},Y=function(ye,fe){return I.w(O.toDate()[ye].apply(O.toDate("s"),(U?[0,0,0,0]:[23,59,59,999]).slice(fe)),O)},V=this.$W,ne=this.$M,oe=this.$D,le="set"+(this.$u?"UTC":"");switch(H){case p:return U?q(1,0):q(31,11);case d:return U?q(1,ne):q(0,ne+1);case u:var de=this.$locale().weekStart||0,pe=(V<de?V+7:V)-de;return q(U?oe-pe:oe+(6-pe),ne);case c:case w:return Y(le+"Hours",0);case l:return Y(le+"Minutes",1);case a:return Y(le+"Seconds",2);case s:return Y(le+"Milliseconds",3);default:return this.clone()}},L.endOf=function(R){return this.startOf(R,!1)},L.$set=function(R,B){var O,U=I.p(R),H="set"+(this.$u?"UTC":""),q=(O={},O[c]=H+"Date",O[w]=H+"Date",O[d]=H+"Month",O[p]=H+"FullYear",O[l]=H+"Hours",O[a]=H+"Minutes",O[s]=H+"Seconds",O[o]=H+"Milliseconds",O)[U],Y=U===c?this.$D+(B-this.$W):B;if(U===d||U===p){var V=this.clone().set(w,1);V.$d[q](Y),V.init(),this.$d=V.set(w,Math.min(this.$D,V.daysInMonth())).$d}else q&&this.$d[q](Y);return this.init(),this},L.set=function(R,B){return this.clone().$set(R,B)},L.get=function(R){return this[I.p(R)]()},L.add=function(R,B){var O,U=this;R=Number(R);var H=I.p(B),q=function(ne){var oe=D(U);return I.w(oe.date(oe.date()+Math.round(ne*R)),U)};if(H===d)return this.set(d,this.$M+R);if(H===p)return this.set(p,this.$y+R);if(H===c)return q(1);if(H===u)return q(7);var Y=(O={},O[a]=r,O[l]=i,O[s]=n,O)[H]||1,V=this.$d.getTime()+R*Y;return I.w(V,this)},L.subtract=function(R,B){return this.add(-1*R,B)},L.format=function(R){var B=this,O=this.$locale();if(!this.isValid())return O.invalidDate||x;var U=R||"YYYY-MM-DDTHH:mm:ssZ",H=I.z(this),q=this.$H,Y=this.$m,V=this.$M,ne=O.weekdays,oe=O.months,le=O.meridiem,de=function(fe,xe,$e,Ce){return fe&&(fe[xe]||fe(B,U))||$e[xe].slice(0,Ce)},pe=function(fe){return I.s(q%12||12,fe,"0")},ye=le||function(fe,xe,$e){var Ce=fe<12?"AM":"PM";return $e?Ce.toLowerCase():Ce};return U.replace(b,function(fe,xe){return xe||function($e){switch($e){case"YY":return String(B.$y).slice(-2);case"YYYY":return I.s(B.$y,4,"0");case"M":return V+1;case"MM":return I.s(V+1,2,"0");case"MMM":return de(O.monthsShort,V,oe,3);case"MMMM":return de(oe,V);case"D":return B.$D;case"DD":return I.s(B.$D,2,"0");case"d":return String(B.$W);case"dd":return de(O.weekdaysMin,B.$W,ne,2);case"ddd":return de(O.weekdaysShort,B.$W,ne,3);case"dddd":return ne[B.$W];case"H":return String(q);case"HH":return I.s(q,2,"0");case"h":return pe(1);case"hh":return pe(2);case"a":return ye(q,Y,!0);case"A":return ye(q,Y,!1);case"m":return String(Y);case"mm":return I.s(Y,2,"0");case"s":return String(B.$s);case"ss":return I.s(B.$s,2,"0");case"SSS":return I.s(B.$ms,3,"0");case"Z":return H}return null}(fe)||H.replace(":","")})},L.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},L.diff=function(R,B,O){var U,H=this,q=I.p(B),Y=D(R),V=(Y.utcOffset()-this.utcOffset())*r,ne=this-Y,oe=function(){return I.m(H,Y)};switch(q){case p:U=oe()/12;break;case d:U=oe();break;case h:U=oe()/3;break;case u:U=(ne-V)/6048e5;break;case c:U=(ne-V)/864e5;break;case l:U=ne/i;break;case a:U=ne/r;break;case s:U=ne/n;break;default:U=ne}return O?U:I.a(U)},L.daysInMonth=function(){return this.endOf(d).$D},L.$locale=function(){return $[this.$L]},L.locale=function(R,B){if(!R)return this.$L;var O=this.clone(),U=k(R,B,!0);return U&&(O.$L=U),O},L.clone=function(){return I.w(this.$d,this)},L.toDate=function(){return new Date(this.valueOf())},L.toJSON=function(){return this.isValid()?this.toISOString():null},L.toISOString=function(){return this.$d.toISOString()},L.toString=function(){return this.$d.toUTCString()},F}(),J=W.prototype;return D.prototype=J,[["$ms",o],["$s",s],["$m",a],["$H",l],["$W",c],["$M",d],["$y",p],["$D",w]].forEach(function(F){J[F[1]]=function(L){return this.$g(L,F[0],F[1])}}),D.extend=function(F,L){return F.$i||(F(L,W,D),F.$i=!0),D},D.locale=k,D.isDayjs=S,D.unix=function(F){return D(1e3*F)},D.en=$[_],D.Ls=$,D.p={},D})})(M8);var gB=M8.exports;const mB=Xd(gB);var B8={exports:{}};(function(e,t){(function(n,r){e.exports=r()})(Nv,function(){return function(n,r,i){n=n||{};var o=r.prototype,s={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function a(c,u,d,h){return o.fromToBase(c,u,d,h)}i.en.relativeTime=s,o.fromToBase=function(c,u,d,h,p){for(var w,x,E,b=d.$locale().relativeTime||s,g=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],v=g.length,C=0;C<v;C+=1){var _=g[C];_.d&&(w=h?i(c).diff(d,_.d,!0):d.diff(c,_.d,!0));var $=(n.rounding||Math.round)(Math.abs(w));if(E=w>0,$<=_.r||!_.r){$<=1&&C>0&&(_=g[C-1]);var f=b[_.l];p&&($=p(""+$)),x=typeof f=="string"?f.replace("%d",$):f($,u,_.l,E);break}}if(u)return x;var S=E?b.future:b.past;return typeof S=="function"?S(x):S.replace("%s",x)},o.to=function(c,u){return a(c,u,this,!0)},o.from=function(c,u){return a(c,u,this)};var l=function(c){return c.$u?i.utc():i()};o.toNow=function(c){return this.to(l(this),c)},o.fromNow=function(c){return this.from(l(this),c)}}})})(B8);var wB=B8.exports;const yB=Xd(wB);mB.extend(yB);const vB=new URLSearchParams(window.location.search),bB=vB.get("title");function pu({value:e,label:t}){return K.jsxs("div",{className:"tw-flex tw-flex-col tw-items-center tw-justify-center tw-mx-1 tw-text-[#201515] tw-bg-[#fafafa] tw-rounded-md tw-w-20 tw-h-20 tw-shadow-lg",children:[K.jsx("span",{className:"tw-text-[#201515] tw-animate-zoomInOut tw-font-bold lg:tw-text-4xl tw-text-2xl",children:Ko(e)}),K.jsx("span",{className:"tw-text-sm",children:t})]})}function xB(){const{open:e}=tM(),{isConnected:t,address:n}=D6(),{switchNetwork:r}=oO(),{chain:i}=O6(),[o,s]=z.useState(""),[a,l]=z.useState(""),[c,u]=z.useState(0),[d,h]=z.useState(!1),[p,w]=z.useState(0),[x,E]=z.useState(0),[b,g]=z.useState("0%"),{buyCupcake:v}=qM(),{disconnect:C}=nO(),_=i&&!i.unsupported?i:Cn.chains[0];z.useEffect(()=>{fetch("/a.json").then(f=>f.json()).then(f=>{w(f.raisedAmount),E(f.targetAmount),g(`${f.progress}%`)}).catch(f=>console.error("Error fetching JSON:",f))},[]);const $=async f=>{if(f.preventDefault(),!n||i&&(i!=null&&i.unsupported)||!o)return;if(Number(o)<1e-4)return Re.error("Minimum value is 0.0001 "+(i==null?void 0:i.nativeCurrency.symbol));h(!0);const S=await v(v_(`${o}`));S!=null&&S.hash&&(s(""),l(""),u(0)),h(!1)};return z.useEffect(()=>{var f;try{const S={type:"ADDRESS_UPDATED",payload:n,target:"PRESALEBOX"};(f=window.parent)==null||f.postMessage(S,"*")}catch(S){console.log(S)}},[n]),K.jsx("main",{className:"tw-flex tw-flex-col tw-items-center tw-min-h-screen",children:K.jsxs("div",{className:"tw-max-w-xl tw-w-full tw-pb-4 tw-flex tw-flex-col tw-items-center tw-rounded-[20px] tw-text-white tw-bg-[#65149f] tw-bordered-presalex marginpresalex",children:[K.jsx("h2",{className:"tw-bg-presalex tw-font-semibold tw-text-white tw-rounded-t-[14px] tw-p-5 lg:tw-text-2xl tw-text-xl tw-w-full tw-text-center",children:"⭐️ SIFTAI: STAGE 2 ⭐️"}),K.jsx($8,{className:"network-chooser-title",children:bB||""}),K.jsx("p",{className:"tw-mt-6",children:"Next price increase in: "}),K.jsx(iw,{date:new Date(Cn.countdown),renderer:({days:f,hours:S,minutes:k,seconds:D})=>K.jsxs("div",{className:"tw-flex tw-items-center tw-justify-center tw-mt-2 twwidthpresalex",children:[K.jsx(pu,{value:f,label:"Days"}),K.jsx(pu,{value:S,label:"Hours"}),K.jsx(pu,{value:k,label:"Min"}),K.jsx(pu,{value:D,label:"Sec"})]})}),K.jsx("div",{className:"tw-w-full tw-px-2 tw-mt-8 lg:tw-px-8",children:t?K.jsxs("form",{onSubmit:$,className:"tw-space-y-4",children:[K.jsxs("div",{className:"tw-relative ",children:[K.jsx("input",{type:"number",placeholder:`${_==null?void 0:_.nativeCurrency.symbol} Amount`,className:"tw-w-full tw-bg-black/40 tw-backdrop-blur-xl tw-border tw-border-[#95c9ef]/20 tw-rounded-xl tw-px-5 tw-py-4 tw-text-white tw-placeholder-white/50 focus:tw-border-[#95c9ef] tw-outline-none",value:o,onChange:f=>{s(f.target.value),l((Number(f.target.value)/Cn.token.priceInEth).toFixed(2)),u((Number(f.target.value)/Cn.token.priceInEth*Number(Cn.token.priceInUsd)).toFixed(2))}}),K.jsx("div",{className:"tw-absolute tw-right-4 tw-top-1/2 tw-transform -tw-translate-y-1/2",children:K.jsx("img",{src:"/images/eth.png",alt:"eth",className:"tw-w-6 tw-h-6"})})]}),K.jsxs("div",{className:"tw-relative",children:[K.jsx("input",{type:"number",placeholder:`$${Cn.token.symbol} Amount`,className:"tw-w-full tw-bg-black/40 tw-backdrop-blur-xl tw-border tw-border-[#95c9ef]/20 tw-rounded-xl tw-px-5 tw-py-4 tw-text-white tw-placeholder-white/50 focus:tw-border-[#95c9ef] tw-outline-none",value:a,onChange:f=>{l(f.target.value),s((Number(f.target.value)*Cn.token.priceInEth).toFixed(2)),u((Number(f.target.value)*Number(Cn.token.priceInUsd)).toFixed(2))}}),K.jsx("div",{className:"tw-absolute tw-right-4 tw-top-1/2 tw-transform -tw-translate-y-1/2",children:K.jsx("img",{src:"/images/logo.png",alt:"token",className:"tw-w-6 tw-h-6"})})]}),K.jsxs("p",{className:"tw-text-[#95c9ef] tw-text-center tw-text-lg",children:["Listing Value: $",c]}),K.jsx("div",{className:"tw-flex tw-justify-center tw-mt-3 ",children:i!=null&&i.unsupported?K.jsx("button",{type:"button",className:"tw-px-8 tw-py-3 tw-text-lg tw-font-bold tw-border-2 tw-border-white tw-rounded-2xl tw-bg-primary tw-hover:tw-bg-secondary",onClick:()=>r==null?void 0:r(Cn.chains[0].id),children:"Switch Network"}):K.jsxs("button",{type:"submit",id:"custom-button",children:[d&&K.jsx(ZM,{size:20,className:"tw-mr-2 tw-animate-spin"}),"Swap"]})})]}):K.jsxs(K.Fragment,{children:[K.jsxs("div",{className:"tw-mb-5 tw-bg-black/40 tw-backdrop-blur-xl tw-rounded-2xl tw-p-8 tw-border tw-border-[#95c9ef]/20 tw-relative tw-overflow-hidden",children:[K.jsx("div",{className:"tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-[#95c9ef]/5 tw-to-transparent"}),K.jsxs("div",{className:"tw-relative tw-z-10",children:[K.jsxs("div",{className:"tw-flex tw-justify-between tw-items-center tw-mb-6",children:[K.jsx("span",{className:"tw-text-[#95c9ef] tw-text-lg",children:"Total Raised:"}),K.jsxs("div",{className:"tw-flex tw-flex-col tw-items-end",children:[K.jsxs("span",{className:"tw-text-white tw-font-bold tw-text-2xl tw-animate-pulse",children:["$",p.toLocaleString()]}),K.jsxs("span",{className:"tw-text-[#95c9ef]/60",children:["Target: $",x.toLocaleString()]})]})]}),K.jsx("div",{className:"tw-bg-[#95c9ef]/10 tw-rounded-full tw-h-8 tw-overflow-hidden tw-border tw-border-[#95c9ef]/20 tw-relative",children:K.jsx("div",{className:"tw-h-full tw-bg-gradient-to-r tw-from-[#95c9ef] tw-to-[#6ba8d7] tw-transition-all tw-duration-1000 tw-relative",style:{width:b},children:K.jsx("div",{className:"tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-transparent tw-via-white/40 tw-to-transparent tw-animate-shimmer"})})})]})]}),K.jsxs("div",{className:"network-chooser-container",children:[K.jsx("p",{className:"tw-mb-2 tw-text-base tw-font-semibold tw-text-center lg:tw-text-l colorgreennews",children:"Select Network:"}),K.jsxs("div",{className:"tw-flex tw-gap-2 ",children:[K.jsxs(C1,{onClick:()=>{e({view:"Networks"})},variant:"outline",type:"button",id:"buttonconnectnewtap",className:"network-chooser-button textwhite1",children:[K.jsx("img",{src:"https://icons.llamao.fi/icons/chains/rsz_ethereum.jpg",alt:"ETH",className:"network-logo",onError:f=>f.currentTarget.src="/images/unknown-logo.png"}),"Ethereum"]}),K.jsxs(C1,{onClick:()=>{e({view:"Networks"})},variant:"outline",type:"button",id:"buttonconnectnewtap",className:"network-chooser-button textwhite1",children:[K.jsx("img",{src:"https://icons.llamao.fi/icons/chains/rsz_base.jpg",alt:"ETH",className:"network-logo",onError:f=>f.currentTarget.src="/images/unknown-logo.png"}),"Base"]})]})]})]})}),t?K.jsx("button",{onClick:()=>C(),className:" tw-mt-4 tw-bg-black/40 tw-backdrop-blur-xl tw-border tw-border-red-500/20 tw-text-red-500 tw-py-4 tw-rounded-xl tw-font-semibold hover:tw-bg-red-500/10 tw-transition-all",children:"Disconnect"}):K.jsxs(K.Fragment,{children:[K.jsx("div",{className:" tw-flex tw-justify-center tw-mt-8",children:K.jsx("button",{id:"connectwal29",className:"",onClick:()=>e(),children:"Connect Wallet"})}),K.jsxs("div",{className:"tw-mt-8 tw-text-center tw-text-[#95c9ef] tw-bg-black/40 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-border tw-border-[#95c9ef]/20 tw-relative tw-overflow-hidden",children:[K.jsx("div",{className:"tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-[#95c9ef]/5 tw-to-transparent tw-animate-pulse"}),K.jsx(Tv,{className:"tw-absolute tw-right-4 tw-bottom-4 tw-text-[#95c9ef]/20 tw-w-24 tw-h-24 tw-animate-pulse"}),K.jsxs("div",{className:"tw-relative tw-z-10",children:[K.jsx("p",{className:"tw-text-lg",children:"Currently Price: $0.0992"}),K.jsx("p",{className:"tw-text-lg",children:"Listing Price: $0.594"}),K.jsx("p",{className:"tw-text-lg",children:"Total Stages: 5"}),K.jsx("p",{className:"tw-text-lg displaynoner2",children:"Chainx: Ethereum-Basex"})]})]}),K.jsxs("div",{className:"tw-mt-8 tw-text-center tw-text-[#95c9ef] tw-bg-black/40 tw-backdrop-blur-xl tw-rounded-2xl tw-p-6 tw-border tw-border-[#95c9ef]/20 tw-relative tw-overflow-hidden",children:[K.jsx("div",{className:"tw-absolute tw-inset-0 tw-bg-gradient-to-r tw-from-[#95c9ef]/5 tw-to-transparent tw-animate-pulse"}),K.jsx(Tv,{className:"tw-absolute tw-right-4 tw-bottom-4 tw-text-[#95c9ef]/20 tw-w-24 tw-h-24 tw-animate-pulse"}),K.jsxs("div",{className:"tw-relative tw-z-10",children:[K.jsxs("p",{className:"tw-text-lg",children:["Presale End & Launch Date:",K.jsx("br",{})," February 24, 2025"]}),K.jsx("p",{className:"tw-text-lg",children:"Chain: Ethereum-Base"}),K.jsx("p",{className:"tw-text-lg displaynoner2",children:"Chainx: Ethereum-Basex"}),K.jsx("p",{className:"tw-text-lg displaynoner2",children:"Chainx: Ethereum-Basex"}),K.jsx("p",{className:"tw-text-lg displaynoner2",children:"Chainx: Ethereum-Basex"}),K.jsxs("p",{className:"tw-text-lg displaynoner2",children:["Telgram: ",K.jsx("a",{target:"_blank",href:"https://t.me/",children:"Link"})]}),K.jsxs("p",{className:"tw-text-lg",children:["Telegram: ",K.jsx("a",{target:"_blank",href:"https://t.me/SiftAINet",children:"Link"})]})]})]})]})]})})}const CB={theme:"system",setTheme:()=>null},EB=z.createContext(CB);function _B({children:e,defaultTheme:t="system",storageKey:n="vite-ui-theme",...r}){const[i,o]=z.useState(()=>localStorage.getItem(n)||t);z.useEffect(()=>{const a=window.document.documentElement;if(a.classList.remove("light","dark"),i==="system"){const l=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";a.classList.add(l);return}a.classList.add(i)},[i]);const s={theme:i,setTheme:a=>{localStorage.setItem(n,a),o(a)}};return K.jsx(EB.Provider,{...r,value:s,children:e})}const j8="9a49b2194c0430a774fea7837bacbd40",SB={name:"SIFTAI",description:"SIFTAI PRESALE",url:"https://buy.siftai.net",icons:["https://buy.siftai.net/logo.png"]},$1=Cn.chains,L8=XR({chains:$1,projectId:j8,metadata:SB});eM({wagmiConfig:L8,projectId:j8,chains:$1,defaultChain:$1[0]});const U8=new URLSearchParams(window.location.search),Eh=U8.get("primary"),kv=U8.get("theme")==="light"?"light":"dark";Eh&&(document.documentElement.style.setProperty("--primary",_v(Eh)),document.documentElement.style.setProperty("--ring",_v(Eh)));MM&&document.body.classList.add("!bg-transparent");function $B({children:e}){return K.jsxs(_B,{defaultTheme:kv,storageKey:"vite-ui-theme",children:[K.jsx(jD,{config:L8,children:e}),K.jsx(E1,{theme:kv,position:"top-center"})]})}_h.createRoot(document.getElementById("presale-box")).render(K.jsx($B,{children:K.jsx(xB,{})}));export{R5 as $,Nr as A,Kl as B,Kn as C,$i as D,Dn as E,Ql as F,Pd as G,Yl as H,Co as I,Td as J,Pi as K,Gp as L,_o as M,ur as N,$d as O,Xl as P,Zl as Q,bo as R,Wt as S,nn as T,je as U,Dd as V,Fp as W,z9 as X,t_ as Y,n_ as Z,r_ as _,h$ as a,s0 as a$,F9 as a0,Pu as a1,Xd as a2,gn as a3,na as a4,PB as a5,Ps as a6,X as a7,wf as a8,zt as a9,xL as aA,nR as aB,$L as aC,EL as aD,SL as aE,_L as aF,i8 as aG,o0 as aH,tn as aI,OL as aJ,cU as aK,TL as aL,uU as aM,Rc as aN,ML as aO,WL as aP,zL as aQ,DL as aR,jL as aS,Vs as aT,BL as aU,XL as aV,qL as aW,Nn as aX,RL as aY,IL as aZ,NL as a_,_s as aa,Sl as ab,G7 as ac,Pf as ad,kr as ae,gc as af,Za as ag,lr as ah,Pc as ai,Nv as aj,i0 as ak,Rv as al,lo as am,we as an,Qn as ao,Jf as ap,zn as aq,Zn as ar,Hy as as,co as at,GL as au,KL as av,Xr as aw,yL as ax,vL as ay,bL as az,Ds as b,Zm as b0,o8 as b1,AL as b2,kL as b3,CL as b4,UL as b5,FL as b6,a0 as b7,PL as b8,Qm as b9,sN as bA,HL as ba,LL as bb,VL as bc,dU as bd,YL as be,QL as bf,LR as bg,aU as bh,eU as bi,UR as bj,ZL as bk,iU as bl,tU as bm,oU as bn,lU as bo,nU as bp,rU as bq,sU as br,JL as bs,kR as bt,a8 as bu,yh as bv,mL as bw,wL as bx,VO as by,d6 as bz,ee as c,Vl as d,zp as e,ql as f,yd as g,Os as h,f$ as i,Is as j,vd as k,Ir as l,bd as m,Ns as n,xo as o,xd as p,_i as q,Si as r,p4 as s,Gl as t,Rs as u,Ed as v,cr as w,Eo as x,_d as y,Sd as z};
