var e,t,r,n,i,o,a,s,c,u,l,p,f,d,h,v,g,y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function m(e){return e&&e.__esModule?e.default:e}var b={},_={},w=y.parcelRequiree88c;null==w&&((w=function(e){if(e in b)return b[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},y.parcelRequiree88c=w);var k={},E={},S=function(e){return e&&e.Math==Math&&e};E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof y&&y)||function(){return this}()||E||Function("return this")();var L={},O={};L=!(O=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},j={};j=!O(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});"use strict";var T=Function.prototype.call;$=j?T.bind(T):function(){return T.apply(T,arguments)};var M={}.propertyIsEnumerable,x=Object.getOwnPropertyDescriptor;t=x&&!M.call({1:2},1)?function(e){var t=x(this,e);return!!t&&t.enumerable}:M;var P={};P=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var H={},q={},I={},D=Function.prototype,A=D.call,C=j&&D.bind.bind(A,A),F={},N=(I=j?C:function(e){return function(){return A.apply(e,arguments)}})({}.toString),W=I("".slice);F=function(e){return W(N(e),8,-1)};var R=Object,U=I("".split);q=O(function(){return!R("z").propertyIsEnumerable(0)})?function(e){return"String"==F(e)?U(e,""):R(e)}:R;var G={},z={};z=function(e){return null==e};var B=TypeError;G=function(e){if(z(e))throw B("Can't call method on "+e);return e},H=function(e){return q(G(e))};var J={},Y={},Q={},V={},K={},X="object"==typeof document&&document.all,Z=(K={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;V=K.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var ee=K.all;Q=K.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:V(e)||e===ee}:function(e){return"object"==typeof e?null!==e:V(e)};var et={},er={};er=function(e,t){var r;return arguments.length<2?V(r=E[e])?r:void 0:E[e]&&E[e][t]};var en={};en=I({}.isPrototypeOf);var ei={},eo={},ea={},es={};es="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ec=E.process,eu=E.Deno,el=ec&&ec.versions||eu&&eu.version,ep=el&&el.v8;ep&&(n=(r=ep.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&es&&(!(r=es.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=es.match(/Chrome\/(\d+)/))&&(n=+r[1]),ea=n;var ef=E.String;ei=(eo=!!Object.getOwnPropertySymbols&&!O(function(){var e=Symbol();return!ef(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&ea&&ea<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ed=Object;et=ei?function(e){return"symbol"==typeof e}:function(e){var t=er("Symbol");return V(t)&&en(t.prototype,ed(e))};var eh={},ev={},eg={},ey=String;eg=function(e){try{return ey(e)}catch(e){return"Object"}};var em=TypeError;ev=function(e){if(V(e))return e;throw em(eg(e)+" is not a function")},eh=function(e,t){var r=e[t];return z(r)?void 0:ev(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!Q(n=$(r,e))||V(r=e.valueOf)&&!Q(n=$(r,e))||"string"!==t&&V(r=e.toString)&&!Q(n=$(r,e)))return n;throw e_("Can't convert object to primitive value")};var ew={},ek={};ek=!1;var eE={},eS={},eL=Object.defineProperty;eS=function(e,t){try{eL(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var eO="__core-js_shared__";eE=E[eO]||eS(eO,{}),(ew=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.31.0",mode:ek?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.31.0/LICENSE",source:"https://github.com/zloirock/core-js"});var e$={},ej={},eT=Object;ej=function(e){return eT(G(e))};var eM=I({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eM(ej(e),t)};var ex={},eP=0,eH=Math.random(),eq=I(1..toString);ex=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eP+eH,36)};var eI=E.Symbol,eD=ew("wks"),eA=ei?eI.for||eI:eI&&eI.withoutSetter||ex,eC=TypeError,eF=function(e){return e$(eD,e)||(eD[e]=eo&&e$(eI,e)?eI[e]:eA("Symbol."+e)),eD[e]}("toPrimitive");Y=function(e,t){if(!Q(e)||et(e))return e;var r,n=eh(e,eF);if(n){if(void 0===t&&(t="default"),!Q(r=$(n,e,t))||et(r))return r;throw eC("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},J=function(e){var t=Y(e,"string");return et(t)?t:t+""};var eN={},eW={},eR=E.document,eU=Q(eR)&&Q(eR.createElement);eW=function(e){return eU?eR.createElement(e):{}},eN=!L&&!O(function(){return 7!=Object.defineProperty(eW("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;e=L?eG:function(e,r){if(e=H(e),r=J(r),eN)try{return eG(e,r)}catch(e){}if(e$(e,r))return P(!$(t,e,r),e[r])};var ez={},eB={};eB=L&&O(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eJ={},eY=String,eQ=TypeError;eJ=function(e){if(Q(e))return e;throw eQ(eY(e)+" is not an object")};var eV=TypeError,eK=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";i=L?eB?function(e,t,r){if(eJ(e),t=J(t),eJ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eJ(e),t=J(t),eJ(r),eN)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},ez=L?function(e,t,r){return i(e,t,P(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e8={},e4=Function.prototype,e3=L&&Object.getOwnPropertyDescriptor,e7=e$(e4,"name")&&(!L||L&&e3(e4,"name").configurable),e9={},e5=I(Function.toString);V(eE.inspectSource)||(eE.inspectSource=function(e){return e5(e)}),e9=eE.inspectSource;var e6={},te={},tt=E.WeakMap;te=V(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");tr=function(e){return tn[e]||(tn[e]=ex(e))};var ti={};ti={};var to="Object already initialized",ta=E.TypeError,ts=E.WeakMap;if(te||eE.state){var tc=eE.state||(eE.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,o=function(e,t){if(tc.has(e))throw ta(to);return t.facade=e,tc.set(e,t),t},a=function(e){return tc.get(e)||{}},s=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,o=function(e,t){if(e$(e,tu))throw ta(to);return t.facade=e,ez(e,tu,t),t},a=function(e){return e$(e,tu)?e[tu]:{}},s=function(e){return e$(e,tu)}}var tl=(e6={set:o,get:a,has:s,enforce:function(e){return s(e)?a(e):o(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=a(t)).type!==e)throw ta("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=e6.get,tf=String,td=Object.defineProperty,th=I("".slice),tv=I("".replace),tg=I([].join),ty=L&&!O(function(){return 8!==td(function(){},"length",{value:8}).length}),tm=String(String).split("String"),tb=e8=function(e,t,r){"Symbol("===th(tf(t),0,7)&&(t="["+tv(tf(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e7&&e.name!==t)&&(L?td(e,"name",{value:t,configurable:!0}):e.name=t),ty&&r&&e$(r,"arity")&&e.length!==r.arity&&td(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?L&&td(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return e$(n,"source")||(n.source=tg(tm,"string"==typeof t?t:"")),e};Function.prototype.toString=tb(function(){return V(this)&&tp(this).source||e9(this)},"toString"),e2=function(e,t,r,n){n||(n={});var o=n.enumerable,a=void 0!==n.name?n.name:t;if(V(r)&&e8(r,a,n),n.global)o?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},tL={},tO=Math.ceil,t$=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?t$:tO)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var tj=Math.max,tT=Math.min;tE=function(e,t){var r=tS(e);return r<0?tj(r+t,0):tT(r,t)};var tM={},tx={},tP=Math.min;tx=function(e){return e>0?tP(tS(e),9007199254740991):0},tM=function(e){return tx(e.length)};var tH=function(e){return function(t,r,n){var i,o=H(t),a=tM(o),s=tE(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tq={includes:tH(!0),indexOf:tH(!1)}.indexOf,tI=I([].push);tk=function(e,t){var r,n=H(e),i=0,o=[];for(r in n)!e$(ti,r)&&e$(n,r)&&tI(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tq(o,r)||tI(o,r));return o};var tD=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tk(e,tD)},u=Object.getOwnPropertySymbols;var tA=I([].concat);tw=er("Reflect","ownKeys")||function(e){var t=c(eJ(e));return u?tA(t,u(e)):t},t_=function(t,r,n){for(var o=tw(r),a=0;a<o.length;a++){var s=o[a];e$(t,s)||n&&e$(n,s)||i(t,s,e(r,s))}};var tC={},tF=/#|\.prototype\./,tN=function(e,t){var r=tR[tW(e)];return r==tG||r!=tU&&(V(t)?O(t):!!t)},tW=tN.normalize=function(e){return String(e).replace(tF,".").toLowerCase()},tR=tN.data={},tU=tN.NATIVE="N",tG=tN.POLYFILL="P";tC=tN,k=function(t,r){var n,i,o,a,s,c=t.target,u=t.global,l=t.stat;if(n=u?E:l?E[c]||eS(c,{}):(E[c]||{}).prototype)for(i in r){if(a=r[i],o=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!tC(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==o){if(typeof a==typeof o)continue;t_(a,o)}(t.sham||o&&o.sham)&&ez(a,"sham",!0),e2(n,i,a,t)}};var tz={},tB={},tJ=Function.prototype,tY=tJ.apply,tQ=tJ.call;tB="object"==typeof Reflect&&Reflect.apply||(j?tQ.bind(tY):function(){return tQ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===F(e))return I(e)})(tK.bind);tV=function(e,t){return ev(e),void 0===t?e:j?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};tZ=er("document","documentElement");var t0={};t0=I([].slice);var t1={},t2=TypeError;t1=function(e,t){if(e<t)throw t2("Not enough arguments");return e};var t8={};t8=/(?:ipad|iphone|ipod).*applewebkit/i.test(es);var t4={},t3={},t7=t3={};function t9(){throw Error("setTimeout has not been defined")}function t5(){throw Error("clearTimeout has not been defined")}function t6(e){if(l===setTimeout)return setTimeout(e,0);if((l===t9||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t9}catch(e){l=t9}try{p="function"==typeof clearTimeout?clearTimeout:t5}catch(e){p=t5}}();var re=[],rt=!1,rr=-1;function rn(){rt&&f&&(rt=!1,f.length?re=f.concat(re):rr=-1,re.length&&ri())}function ri(){if(!rt){var e=t6(rn);rt=!0;for(var t=re.length;t;){for(f=re,re=[];++rr<t;)f&&f[rr].run();rr=-1,t=re.length}f=null,rt=!1,function(e){if(p===clearTimeout)return clearTimeout(e);if((p===t5||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}(e)}}function ro(e,t){this.fun=e,this.array=t}function ra(){}t7.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];re.push(new ro(e,t)),1!==re.length||rt||t6(ri)},ro.prototype.run=function(){this.fun.apply(null,this.array)},t7.title="browser",t7.browser=!0,t7.env={},t7.argv=[],t7.version="",t7.versions={},t7.on=ra,t7.addListener=ra,t7.once=ra,t7.off=ra,t7.removeListener=ra,t7.removeAllListeners=ra,t7.emit=ra,t7.prependListener=ra,t7.prependOnceListener=ra,t7.listeners=function(e){return[]},t7.binding=function(e){throw Error("process.binding is not supported")},t7.cwd=function(){return"/"},t7.chdir=function(e){throw Error("process.chdir is not supported")},t7.umask=function(){return 0},t4=void 0!==t3&&"process"==F(t3);var rs=E.setImmediate,rc=E.clearImmediate,ru=E.process,rl=E.Dispatch,rp=E.Function,rf=E.MessageChannel,rd=E.String,rh=0,rv={},rg="onreadystatechange";O(function(){d=E.location});var ry=function(e){if(e$(rv,e)){var t=rv[e];delete rv[e],t()}},rm=function(e){return function(){ry(e)}},rb=function(e){ry(e.data)},r_=function(e){E.postMessage(rd(e),d.protocol+"//"+d.host)};rs&&rc||(rs=function(e){t1(arguments.length,1);var t=V(e)?e:rp(e),r=t0(arguments,1);return rv[++rh]=function(){tB(t,void 0,r)},h(rh),rh},rc=function(e){delete rv[e]},t4?h=function(e){ru.nextTick(rm(e))}:rl&&rl.now?h=function(e){rl.now(rm(e))}:rf&&!t8?(g=(v=new rf).port2,v.port1.onmessage=rb,h=tV(g.postMessage,g)):E.addEventListener&&V(E.postMessage)&&!E.importScripts&&d&&"file:"!==d.protocol&&!O(r_)?(h=r_,E.addEventListener("message",rb,!1)):h=rg in eW("script")?function(e){tZ.appendChild(eW("script"))[rg]=function(){tZ.removeChild(this),ry(e)}}:function(e){setTimeout(rm(e),0)});var rw=(tz={set:rs,clear:rc}).clear;k({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rw},{clearImmediate:rw});"use strict";var rk=tz.set,rE={},rS={};rS="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rL=E.Function,rO=/MSIE .\./.test(es)||rS&&function(){var e=E.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rE=function(e,t){var r=t?2:1;return rO?function(n,i){var o=t1(arguments.length,1)>r,a=V(n)?n:rL(n),s=o?t0(arguments,r):[],c=o?function(){tB(a,this,s)}:a;return t?e(c,i):e(c)}:e};var r$=E.setImmediate?rE(rk,!1):rk;k({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==r$},{setImmediate:r$});var rj=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new $(o||[]),s=f,function(r,i){if(s===d)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return T()}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=p(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=d;var u=p(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function p(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",d="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=m.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=p(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function $(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}return{next:T}}function T(){return{value:t,done:!0}}return y.prototype=m,i(k,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:y,configurable:!0}),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=j,$.prototype={constructor:$,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;O(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rj}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rj:Function("r","regeneratorRuntime = r")(rj)}const rT="https://forkify-api.herokuapp.com/api/v2/recipes/",rM="2218e1ac-9569-4d15-8d1d-0e0f8ba4f182",rx=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rP=async function(e){try{let t=fetch(e),r=await Promise.race([t,rx(10)]),n=await r.json();if(!r.ok)throw Error(`${n.message} (${r.status})`);return n}catch(e){throw e}},rH=async function(e,t){try{let r=fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),n=await Promise.race([r,rx(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rq={recipe:{},search:{results:[],query:"",page:1,resultPage:12},bookmark:[]},rI=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,image:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rD=async function(e){try{let t=await rP(`${rT}/${e}?key=${rM}`);rq.recipe=rI(t),rq.bookmark.some(t=>t.id===e)?rq.recipe.bookmarked=!0:rq.recipe.bookmarked=!1}catch(e){throw e}},rA=async function(e){try{let t=await rP(`${rT}?search=${e}&key=${rM}`);rq.search.query=e,rq.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,image:e.image_url})),rq.search.page=1}catch(e){throw console.error(`${e} 8888888`),e}},rC=function(e=rq.search.page){rq.search.page=e;let t=(e-1)*rq.search.resultPage,r=e*rq.search.resultPage;return rq.search.results.slice(t,r)},rF=function(e){rq.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rq.recipe.servings}),rq.recipe.servings=e},rN=function(){localStorage.setItem("bookmark",JSON.stringify(rq.bookmark))},rW=function(e){rq.bookmark.push(e),e.id===rq.recipe.id&&(rq.recipe.bookmarked=!0),rN()},rR=function(e){let t=rq.bookmark.findIndex(t=>t.id===e);rq.bookmark.splice(t,1),e===rq.recipe.id&&(rq.recipe.bookmarked=!1),rN()};!function(){let e=localStorage.getItem("bookmark");e&&(rq.bookmark=JSON.parse(e))}();const rU=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].replaceAll(" ","").split(",");if(3!==t.length)throw Error(" Wrong ingredient format. Please use the correat format! ");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredient:t},n=await rH(`${rT}?key=${rM}`,r);rq.recipe=rI(n)}catch(e){throw e}};var rG={};rG=new URL(w("27Lyk").resolve("eyyUD"),import.meta.url).toString();class rz{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.displayError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElm.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElm.innerHTML=""}update(e){this._data=e;let t=this._generateMarkup(),r=document.createRange().createContextualFragment(t),n=Array.from(r.querySelectorAll("*")),i=Array.from(this._parentElm.querySelectorAll("*"));n.forEach((e,t)=>{let r=i[t];e.isEqualNode(r)||e.firstChild?.nodeValue.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value))})}displaySpinner(){this._parentElm.innerHTML="";let e=`
    <div class="spinner">
            <svg>
              <use href="${m(rG)}#icon-loader"></use>
            </svg>
            </div>`;this._parentElm.insertAdjacentHTML("afterbegin",e)}displayError(e=this._errorMsg){let t=`
    <div class="error">
    <div>
      <svg>
        <use href="${m(rG)}#icon-alert-triangle"></use>
      </svg>
    </div>
    <p>${e}</p>
    </div>`;this._parentElm.innerHTML="",this._parentElm.insertAdjacentHTML("afterbegin",t)}displayMsg(e=this._successMsg){let t=`
    <div class="message">
    <div>
      <svg>
        <use href="${m(rG)}#icon-smile"></use>
      </svg>
    </div>
    <p>${e}</p>
    </div>`;this._parentElm.innerHTML="",this._parentElm.insertAdjacentHTML("afterbegin",t)}}class rB extends rz{_parentElm=document.querySelector(".recipe");_errorMsg="we can not find the recipe, please try again";_successMsg="";addHandlerDisplay(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServing(e){this._parentElm.addEventListener("click",function(t){let r=t.target.closest(".btn--increase-servings");if(!r)return;let n=+r.dataset.update;n>0&&e(n)})}addHandlerBookmark(e){this._parentElm.addEventListener("click",function(t){let r=t.target.closest(".btn--bookmark");r&&e()})}_generateMarkup(){return`
    <figure class="recipe__fig">
      <img src="${this._data.image}" alt="${this._data.title}" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
    </figure>

    <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${m(rG)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${m(rG)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>

        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--increase-servings" data-update="${this._data.servings-1}">
            <svg>
              <use href="${m(rG)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings" data-update="${this._data.servings+1}">
            <svg>
              <use href="${m(rG)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>

      <div class="recipe__user-generated">
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${m(rG)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
    </div>

    <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
      ${this._data.ingredients.map(this._generateMarkupIngredient).join("")}
        
    </div>

    <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${m(rG)}#icon-arrow-right"></use>
        </svg>
      </a>
    </div>`}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
        <svg class="recipe__icon">
          <use href="${m(rG)}#icon-check"></use>
        </svg>
        <div class="recipe__quantity">${e.quantity?e.quantity:""}</div>
        <div class="recipe__description">
          <span class="recipe__unit">${e.unit}</span>
          ${e.description}
        </div>
      </li>
      `}}var rJ=new rB;class rY{_parentElm=document.querySelector(".search");getQuery(){let e=this._parentElm.querySelector(".search__field").value;return this._clearInputField(),e}_clearInputField(){this._parentElm.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentElm.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rQ=new rY;class rV extends rz{_parentElm=document.querySelector(".results");_errorMsg="the recipes name is not correct for your query! please input the right name";_successMsg="";_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
    <li class="preview">
      <a class="preview__link " href="#${e.id}">
        <figure class="preview__fig">
        <img src="${e.image}" alt="${e.title}" />
        </figure>
        <div class="preview__data">
        <h4 class="preview__title">${e.title}</h4>
        <p class="preview__publisher">${e.publisher}</p>
        </div>
      </a>
    </li>
    `}}var rK=new rV;class rX extends rz{_parentElm=document.querySelector(".pagination");addHandlerClick(e){this._parentElm.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");if(!r)return;let n=+r.dataset.goto;e(n)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultPage);return 1===e&&t>1?`
      <button data-goto="${e+1}" class="btn--inline pagination__btn--next">
        <span>Page ${e+1}</span>
        <svg class="search__icon">
            <use href="${m(rG)}#icon-arrow-right"></use>
        </svg>
    </button>`:e===t&&t>1?`
        <button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${m(rG)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>`:e<t?`
        <button data-goto="${e-1}"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
                <use href="${m(rG)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
        </button>
        <button data-goto="${e+1}"class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
                <use href="${m(rG)}#icon-arrow-right"></use>
            </svg>
        </button>`:""}}var rZ=new rX;class r0 extends rz{_parentElm=document.querySelector(".bookmarks__list");_errorMsg="No bookmarks yet, go find a recipe you love!";_successMsg="";addHandlerDisplay(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(this._generateMarkupPreview).join("")}_generateMarkupPreview(e){return`
      <li class="preview">
        <a class="preview__link " href="#${e.id}">
          <figure class="preview__fig">
          <img src="${e.image}" alt="${e.title}" />
          </figure>
          <div class="preview__data">
          <h4 class="preview__title">${e.title}</h4>
          <p class="preview__publisher">${e.publisher}</p>
          </div>
        </a>
      </li>
      `}}var r1=new r0;class r2 extends rz{_parentElm=document.querySelector(".upload");_successMsg="Recipe was successfully uploaded!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerCloseWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerCloseWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerUpload(e){this._parentElm.addEventListener("submit",function(t){t.preventDefault();let r=[...new FormData(this)],n=Object.fromEntries(r);e(n)})}_generateMarkup(){}}var r8=new r2;const r4=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rJ.displaySpinner(),r1.update(rq.bookmark),await rD(e),rJ.render(rq.recipe)}catch(e){rJ.displayError(),console.error(e)}},r3=async function(){try{rK.displaySpinner();let e=rQ.getQuery();if(!e)return;await rA(e),rK.render(rC(1)),rZ.render(rq.search)}catch(e){console.log(e)}},r7=async function(e){try{r8.displaySpinner(),await rU(e),console.log(rq.recipe),rJ.render(rq.recipe),r8.displayMsg(),window.history.pushState(null,"",`#${rq.recipe.id}`),setTimeout(function(){r8.toggleWindow()},2e3)}catch(e){console.error(e),r8.displayError(e.message)}};r1.addHandlerDisplay(function(){r1.render(rq.bookmark)}),rJ.addHandlerDisplay(r4),rJ.addHandlerUpdateServing(function(e){rF(e),rJ.update(rq.recipe)}),rJ.addHandlerBookmark(function(){rq.recipe.bookmarked?rR(rq.recipe.id):rW(rq.recipe),rJ.update(rq.recipe),r1.render(rq.bookmark)}),rQ.addHandlerSearch(r3),rZ.addHandlerClick(function(e){rK.render(rC(e)),rZ.render(rq.search)}),r8._addHandlerUpload(r7);
//# sourceMappingURL=index.b51eba5e.js.map