/*!
 * jQuery JavaScript Library v1.11.0
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-23T21:02Z
 */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=e.length,n=ot.type(e);return"function"===n||ot.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(ot.isFunction(t))return ot.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return ot.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(pt.test(t))return ot.filter(t,e,n);t=ot.filter(t,e)}return ot.grep(e,function(e){return ot.inArray(e,t)>=0!==n})}function i(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}function o(e){var t=wt[e]={};return ot.each(e.match(xt)||[],function(e,n){t[n]=!0}),t}function a(){mt.addEventListener?(mt.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1)):(mt.detachEvent("onreadystatechange",s),e.detachEvent("onload",s))}function s(){(mt.addEventListener||"load"===event.type||"complete"===mt.readyState)&&(a(),ot.ready())}function l(e,t,n){if(void 0===n&&1===e.nodeType){var r="data-"+t.replace(kt,"-$1").toLowerCase();if(n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:Et.test(n)?ot.parseJSON(n):n}catch(i){}ot.data(e,t,n)}else n=void 0}return n}function u(e){var t;for(t in e)if(("data"!==t||!ot.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}function c(e,t,n,r){if(ot.acceptData(e)){var i,o,a=ot.expando,s=e.nodeType,l=s?ot.cache:e,u=s?e[a]:e[a]&&a;if(u&&l[u]&&(r||l[u].data)||void 0!==n||"string"!=typeof t)return u||(u=s?e[a]=J.pop()||ot.guid++:a),l[u]||(l[u]=s?{}:{toJSON:ot.noop}),("object"==typeof t||"function"==typeof t)&&(r?l[u]=ot.extend(l[u],t):l[u].data=ot.extend(l[u].data,t)),o=l[u],r||(o.data||(o.data={}),o=o.data),void 0!==n&&(o[ot.camelCase(t)]=n),"string"==typeof t?(i=o[t],null==i&&(i=o[ot.camelCase(t)])):i=o,i}}function d(e,t,n){if(ot.acceptData(e)){var r,i,o=e.nodeType,a=o?ot.cache:e,s=o?e[ot.expando]:ot.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){ot.isArray(t)?t=t.concat(ot.map(t,ot.camelCase)):t in r?t=[t]:(t=ot.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;for(;i--;)delete r[t[i]];if(n?!u(r):!ot.isEmptyObject(r))return}(n||(delete a[s].data,u(a[s])))&&(o?ot.cleanData([e],!0):rt.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}function f(){return!0}function p(){return!1}function h(){try{return mt.activeElement}catch(e){}}function m(e){var t=Ot.split("|"),n=e.createDocumentFragment();if(n.createElement)for(;t.length;)n.createElement(t.pop());return n}function g(e,t){var n,r,i=0,o=typeof e.getElementsByTagName!==Nt?e.getElementsByTagName(t||"*"):typeof e.querySelectorAll!==Nt?e.querySelectorAll(t||"*"):void 0;if(!o)for(o=[],n=e.childNodes||e;null!=(r=n[i]);i++)!t||ot.nodeName(r,t)?o.push(r):ot.merge(o,g(r,t));return void 0===t||t&&ot.nodeName(e,t)?ot.merge([e],o):o}function v(e){Lt.test(e.type)&&(e.defaultChecked=e.checked)}function y(e,t){return ot.nodeName(e,"table")&&ot.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function b(e){return e.type=(null!==ot.find.attr(e,"type"))+"/"+e.type,e}function x(e){var t=Jt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function w(e,t){for(var n,r=0;null!=(n=e[r]);r++)ot._data(n,"globalEval",!t||ot._data(t[r],"globalEval"))}function T(e,t){if(1===t.nodeType&&ot.hasData(e)){var n,r,i,o=ot._data(e),a=ot._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)ot.event.add(t,n,s[n][r])}a.data&&(a.data=ot.extend({},a.data))}}function C(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!rt.noCloneEvent&&t[ot.expando]){i=ot._data(t);for(r in i.events)ot.removeEvent(t,r,i.handle);t.removeAttribute(ot.expando)}"script"===n&&t.text!==e.text?(b(t).text=e.text,x(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),rt.html5Clone&&e.innerHTML&&!ot.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Lt.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}function N(t,n){var r=ot(n.createElement(t)).appendTo(n.body),i=e.getDefaultComputedStyle?e.getDefaultComputedStyle(r[0]).display:ot.css(r[0],"display");return r.detach(),i}function E(e){var t=mt,n=en[e];return n||(n=N(e,t),"none"!==n&&n||(Zt=(Zt||ot("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=(Zt[0].contentWindow||Zt[0].contentDocument).document,t.write(),t.close(),n=N(e,t),Zt.detach()),en[e]=n),n}function k(e,t){return{get:function(){var n=e();if(null!=n)return n?(delete this.get,void 0):(this.get=t).apply(this,arguments)}}}function S(e,t){if(t in e)return t;for(var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=hn.length;i--;)if(t=hn[i]+n,t in e)return t;return r}function A(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=ot._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Dt(r)&&(o[a]=ot._data(r,"olddisplay",E(r.nodeName)))):o[a]||(i=Dt(r),(n&&"none"!==n||!i)&&ot._data(r,"olddisplay",i?n:ot.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}function D(e,t,n){var r=cn.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function j(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=ot.css(e,n+At[o],!0,i)),r?("content"===n&&(a-=ot.css(e,"padding"+At[o],!0,i)),"margin"!==n&&(a-=ot.css(e,"border"+At[o]+"Width",!0,i))):(a+=ot.css(e,"padding"+At[o],!0,i),"padding"!==n&&(a+=ot.css(e,"border"+At[o]+"Width",!0,i)));return a}function L(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=tn(e),a=rt.boxSizing()&&"border-box"===ot.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=nn(e,t,o),(0>i||null==i)&&(i=e.style[t]),on.test(i))return i;r=a&&(rt.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+j(e,t,n||(a?"border":"content"),r,o)+"px"}function H(e,t,n,r,i){return new H.prototype.init(e,t,n,r,i)}function q(){return setTimeout(function(){mn=void 0}),mn=ot.now()}function _(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=At[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function M(e,t,n){for(var r,i=(wn[t]||[]).concat(wn["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function F(e,t,n){var r,i,o,a,s,l,u,c,d=this,f={},p=e.style,h=e.nodeType&&Dt(e),m=ot._data(e,"fxshow");n.queue||(s=ot._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,d.always(function(){d.always(function(){s.unqueued--,ot.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],u=ot.css(e,"display"),c=E(e.nodeName),"none"===u&&(u=c),"inline"===u&&"none"===ot.css(e,"float")&&(rt.inlineBlockNeedsLayout&&"inline"!==c?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",rt.shrinkWrapBlocks()||d.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue;h=!0}f[r]=m&&m[r]||ot.style(e,r)}if(!ot.isEmptyObject(f)){m?"hidden"in m&&(h=m.hidden):m=ot._data(e,"fxshow",{}),o&&(m.hidden=!h),h?ot(e).show():d.done(function(){ot(e).hide()}),d.done(function(){var t;ot._removeData(e,"fxshow");for(t in f)ot.style(e,t,f[t])});for(r in f)a=M(h?m[r]:0,r,d),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function O(e,t){var n,r,i,o,a;for(n in e)if(r=ot.camelCase(n),i=t[r],o=e[n],ot.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=ot.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function B(e,t,n){var r,i,o=0,a=xn.length,s=ot.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;for(var t=mn||q(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:ot.extend({},t),opts:ot.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:mn||q(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ot.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(O(c,u.opts.specialEasing);a>o;o++)if(r=xn[o].call(u,e,c,u.opts))return r;return ot.map(c,M,u),ot.isFunction(u.opts.start)&&u.opts.start.call(e,u),ot.fx.timer(ot.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(xt)||[];if(ot.isFunction(n))for(;r=o[i++];)"+"===r.charAt(0)?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function R(e,t,n,r){function i(s){var l;return o[s]=!0,ot.each(e[s]||[],function(e,s){var u=s(t,n,r);return"string"!=typeof u||a||o[u]?a?!(l=u):void 0:(t.dataTypes.unshift(u),i(u),!1)}),l}var o={},a=e===Xn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function W(e,t){var n,r,i=ot.ajaxSettings.flatOptions||{};for(r in t)void 0!==t[r]&&((i[r]?e:n||(n={}))[r]=t[r]);return n&&ot.extend(!0,e,n),e}function $(e,t,n){for(var r,i,o,a,s=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(a in s)if(s[a]&&s[a].test(i)){l.unshift(a);break}if(l[0]in n)o=l[0];else{for(a in n){if(!l[0]||e.converters[a+" "+l[0]]){o=a;break}r||(r=a)}o=o||r}return o?(o!==l[0]&&l.unshift(o),n[o]):void 0}function z(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(d){return{state:"parsererror",error:a?d:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}function I(e,t,n,r){var i;if(ot.isArray(t))ot.each(t,function(t,i){n||Yn.test(e)?r(e,i):I(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==ot.type(t))r(e,t);else for(i in t)I(e+"["+i+"]",t[i],n,r)}function X(){try{return new e.XMLHttpRequest}catch(t){}}function U(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function V(e){return ot.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}var J=[],Y=J.slice,G=J.concat,Q=J.push,K=J.indexOf,Z={},et=Z.toString,tt=Z.hasOwnProperty,nt="".trim,rt={},it="1.11.0",ot=function(e,t){return new ot.fn.init(e,t)},at=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,st=/^-ms-/,lt=/-([\da-z])/gi,ut=function(e,t){return t.toUpperCase()};ot.fn=ot.prototype={jquery:it,constructor:ot,selector:"",length:0,toArray:function(){return Y.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Y.call(this)},pushStack:function(e){var t=ot.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return ot.each(this,e,t)},map:function(e){return this.pushStack(ot.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Y.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:Q,sort:J.sort,splice:J.splice},ot.extend=ot.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,l=arguments.length,u=!1;for("boolean"==typeof a&&(u=a,a=arguments[s]||{},s++),"object"==typeof a||ot.isFunction(a)||(a={}),s===l&&(a=this,s--);l>s;s++)if(null!=(i=arguments[s]))for(r in i)e=a[r],n=i[r],a!==n&&(u&&n&&(ot.isPlainObject(n)||(t=ot.isArray(n)))?(t?(t=!1,o=e&&ot.isArray(e)?e:[]):o=e&&ot.isPlainObject(e)?e:{},a[r]=ot.extend(u,o,n)):void 0!==n&&(a[r]=n));return a},ot.extend({expando:"jQuery"+(it+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ot.type(e)},isArray:Array.isArray||function(e){return"array"===ot.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return e-parseFloat(e)>=0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},isPlainObject:function(e){var t;if(!e||"object"!==ot.type(e)||e.nodeType||ot.isWindow(e))return!1;try{if(e.constructor&&!tt.call(e,"constructor")&&!tt.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}if(rt.ownLast)for(t in e)return tt.call(e,t);for(t in e);return void 0===t||tt.call(e,t)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?Z[et.call(e)]||"object":typeof e},globalEval:function(t){t&&ot.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(st,"ms-").replace(lt,ut)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e);if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:nt&&!nt.call("﻿ ")?function(e){return null==e?"":nt.call(e)}:function(e){return null==e?"":(e+"").replace(at,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?ot.merge(r,"string"==typeof e?[e]:e):Q.call(r,e)),r},inArray:function(e,t,n){var r;if(t){if(K)return K.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),l=[];if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&l.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&l.push(i);return G.apply([],l)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(i=e[t],t=e,e=i),ot.isFunction(e)?(n=Y.call(arguments,2),r=function(){return e.apply(t||this,n.concat(Y.call(arguments)))},r.guid=e.guid=e.guid||ot.guid++,r):void 0},now:function(){return+new Date},support:rt}),ot.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){Z["[object "+t+"]"]=t.toLowerCase()});var ct=/*!
 * Sizzle CSS Selector Engine v1.10.16
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-01-13
 */
function(e){function t(e,t,n,r){var i,o,a,s,l,u,d,h,m,g;if((t?t.ownerDocument||t:R)!==H&&L(t),t=t||H,n=n||[],!e||"string"!=typeof e)return n;if(1!==(s=t.nodeType)&&9!==s)return[];if(_&&!r){if(i=yt.exec(e))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n;if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&B(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((a=i[3])&&C.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(C.qsa&&(!M||!M.test(e))){if(h=d=P,m=t,g=9===s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(u=f(e),(d=t.getAttribute("id"))?h=d.replace(xt,"\\$&"):t.setAttribute("id",h),h="[id='"+h+"'] ",l=u.length;l--;)u[l]=h+p(u[l]);m=bt.test(e)&&c(t.parentNode)||t,g=u.join(",")}if(g)try{return Z.apply(n,m.querySelectorAll(g)),n}catch(v){}finally{d||t.removeAttribute("id")}}}return w(e.replace(lt,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>N.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[P]=!0,e}function i(e){var t=H.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)N.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||J)-(~e.sourceIndex||J);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function l(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function u(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&typeof e.getElementsByTagName!==V&&e}function d(){}function f(e,n){var r,i,o,a,s,l,u,c=I[e+" "];if(c)return n?0:c.slice(0);for(s=e,l=[],u=N.preFilter;s;){(!r||(i=ut.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),l.push(o=[])),r=!1,(i=ct.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(lt," ")}),s=s.slice(r.length));for(a in N.filter)!(i=ht[a].exec(s))||u[a]&&!(i=u[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):I(e,l).slice(0)}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=$++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,l,u=[W,o];if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(l=t[P]||(t[P]={}),(s=l[r])&&s[0]===W&&s[1]===o)return u[2]=s[2];if(l[r]=u,u[2]=e(t,n,a))return!0}}}function m(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,t,n,r,i){for(var o,a=[],s=0,l=e.length,u=null!=t;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function v(e,t,n,i,o,a){return i&&!i[P]&&(i=v(i)),o&&!o[P]&&(o=v(o,a)),r(function(r,a,s,l){var u,c,d,f=[],p=[],h=a.length,m=r||x(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?m:g(m,f,e,s,l),y=n?o||(r?e:h||i)?[]:a:v;if(n&&n(v,y,s,l),i)for(u=g(y,p),i(u,[],s,l),c=u.length;c--;)(d=u[c])&&(y[p[c]]=!(v[p[c]]=d));if(r){if(o||e){if(o){for(u=[],c=y.length;c--;)(d=y[c])&&u.push(v[c]=d);o(null,y=[],u,l)}for(c=y.length;c--;)(d=y[c])&&(u=o?tt.call(r,d):f[c])>-1&&(r[u]=!(a[u]=d))}}else y=g(y===a?y.splice(h,y.length):y),o?o(null,a,y,l):Z.apply(a,y)})}function y(e){for(var t,n,r,i=e.length,o=N.relative[e[0].type],a=o||N.relative[" "],s=o?1:0,l=h(function(e){return e===t},a,!0),u=h(function(e){return tt.call(t,e)>-1},a,!0),c=[function(e,n,r){return!o&&(r||n!==A)||((t=n).nodeType?l(e,n,r):u(e,n,r))}];i>s;s++)if(n=N.relative[e[s].type])c=[h(m(c),n)];else{if(n=N.filter[e[s].type].apply(null,e[s].matches),n[P]){for(r=++s;i>r&&!N.relative[e[r].type];r++);return v(s>1&&m(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(lt,"$1"),n,r>s&&y(e.slice(s,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return m(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,l,u){var c,d,f,p=0,h="0",m=r&&[],v=[],y=A,b=r||o&&N.find.TAG("*",u),x=W+=null==y?1:Math.random()||.1,w=b.length;for(u&&(A=a!==H&&a);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(d=0;f=e[d++];)if(f(c,a,s)){l.push(c);break}u&&(W=x)}i&&((c=!f&&c)&&p--,r&&m.push(c))}if(p+=h,i&&h!==p){for(d=0;f=n[d++];)f(m,v,a,s);if(r){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=Q.call(l));v=g(v)}Z.apply(l,v),u&&!r&&v.length>0&&p+n.length>1&&t.uniqueSort(l)}return u&&(W=x,A=y),m};return i?r(a):a}function x(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function w(e,t,n,r){var i,o,a,s,l,u=f(e);if(!r&&1===u.length){if(o=u[0]=u[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&C.getById&&9===t.nodeType&&_&&N.relative[o[1].type]){if(t=(N.find.ID(a.matches[0].replace(wt,Tt),t)||[])[0],!t)return n;e=e.slice(o.shift().value.length)}for(i=ht.needsContext.test(e)?0:o.length;i--&&(a=o[i],!N.relative[s=a.type]);)if((l=N.find[s])&&(r=l(a.matches[0].replace(wt,Tt),bt.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n;break}}return S(e,u)(r,t,!_,n,bt.test(e)&&c(t.parentNode)||t),n}var T,C,N,E,k,S,A,D,j,L,H,q,_,M,F,O,B,P="sizzle"+-new Date,R=e.document,W=0,$=0,z=n(),I=n(),X=n(),U=function(e,t){return e===t&&(j=!0),0},V="undefined",J=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,K=G.push,Z=G.push,et=G.slice,tt=G.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},nt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",rt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ot=it.replace("w","w#"),at="\\["+rt+"*("+it+")"+rt+"*(?:([*^$|!~]?=)"+rt+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+ot+")|)|)"+rt+"*\\]",st=":("+it+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+at.replace(3,8)+")*)|.*)\\)|)",lt=new RegExp("^"+rt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+rt+"+$","g"),ut=new RegExp("^"+rt+"*,"+rt+"*"),ct=new RegExp("^"+rt+"*([>+~]|"+rt+")"+rt+"*"),dt=new RegExp("="+rt+"*([^\\]'\"]*?)"+rt+"*\\]","g"),ft=new RegExp(st),pt=new RegExp("^"+ot+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+at),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+rt+"*(even|odd|(([+-]|)(\\d*)n|)"+rt+"*(?:([+-]|)"+rt+"*(\\d+)|))"+rt+"*\\)|)","i"),bool:new RegExp("^(?:"+nt+")$","i"),needsContext:new RegExp("^"+rt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+rt+"*((?:-\\d)?\\d*)"+rt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,xt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+rt+"?|("+rt+")|.)","ig"),Tt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{Z.apply(G=et.call(R.childNodes),R.childNodes),G[R.childNodes.length].nodeType}catch(Ct){Z={apply:G.length?function(e,t){K.apply(e,et.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}C=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n=e?e.ownerDocument||e:R,r=n.defaultView;return n!==H&&9===n.nodeType&&n.documentElement?(H=n,q=n.documentElement,_=!k(n),r&&r!==r.top&&(r.addEventListener?r.addEventListener("unload",function(){L()},!1):r.attachEvent&&r.attachEvent("onunload",function(){L()})),C.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),C.getElementsByTagName=i(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),C.getElementsByClassName=vt.test(n.getElementsByClassName)&&i(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),C.getById=i(function(e){return q.appendChild(e).id=P,!n.getElementsByName||!n.getElementsByName(P).length}),C.getById?(N.find.ID=function(e,t){if(typeof t.getElementById!==V&&_){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},N.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(delete N.find.ID,N.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n=typeof e.getAttributeNode!==V&&e.getAttributeNode("id");return n&&n.value===t}}),N.find.TAG=C.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==V?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},N.find.CLASS=C.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==V&&_?t.getElementsByClassName(e):void 0},F=[],M=[],(C.qsa=vt.test(n.querySelectorAll))&&(i(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&M.push("[*^$]="+rt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||M.push("\\["+rt+"*(?:value|"+nt+")"),e.querySelectorAll(":checked").length||M.push(":checked")}),i(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&M.push("name"+rt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||M.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),M.push(",.*:")})),(C.matchesSelector=vt.test(O=q.webkitMatchesSelector||q.mozMatchesSelector||q.oMatchesSelector||q.msMatchesSelector))&&i(function(e){C.disconnectedMatch=O.call(e,"div"),O.call(e,"[s!='']:x"),F.push("!=",st)}),M=M.length&&new RegExp(M.join("|")),F=F.length&&new RegExp(F.join("|")),t=vt.test(q.compareDocumentPosition),B=t||vt.test(q.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return j=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r?r:(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&r||!C.sortDetached&&t.compareDocumentPosition(e)===r?e===n||e.ownerDocument===R&&B(R,e)?-1:t===n||t.ownerDocument===R&&B(R,t)?1:D?tt.call(D,e)-tt.call(D,t):0:4&r?-1:1)}:function(e,t){if(e===t)return j=!0,0;var r,i=0,o=e.parentNode,s=t.parentNode,l=[e],u=[t];if(!o||!s)return e===n?-1:t===n?1:o?-1:s?1:D?tt.call(D,e)-tt.call(D,t):0;if(o===s)return a(e,t);for(r=e;r=r.parentNode;)l.unshift(r);for(r=t;r=r.parentNode;)u.unshift(r);for(;l[i]===u[i];)i++;return i?a(l[i],u[i]):l[i]===R?-1:u[i]===R?1:0},n):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(dt,"='$1']"),!(!C.matchesSelector||!_||F&&F.test(n)||M&&M.test(n)))try{var r=O.call(e,n);if(r||C.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),B(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e);var n=N.attrHandle[t.toLowerCase()],r=n&&Y.call(N.attrHandle,t.toLowerCase())?n(e,t,!_):void 0;return void 0!==r?r:C.attributes||!_?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(j=!C.detectDuplicates,D=!C.sortStable&&e.slice(0),e.sort(U),j){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return D=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},N=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&ft.test(n)&&(t=f(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(wt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+rt+")"+e+"("+rt+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==V&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,d,f,p,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!l&&!s;if(g){if(o){for(;m;){for(d=t;d=d[m];)if(s?d.nodeName.toLowerCase()===v:1===d.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&y){for(c=g[P]||(g[P]={}),u=c[e]||[],p=u[0]===W&&u[1],f=u[0]===W&&u[2],d=p&&g.childNodes[p];d=++p&&d&&d[m]||(f=p=0)||h.pop();)if(1===d.nodeType&&++f&&d===t){c[e]=[W,p,f];break}}else if(y&&(u=(t[P]||(t[P]={}))[e])&&u[0]===W)f=u[1];else for(;(d=++p&&d&&d[m]||(f=p=0)||h.pop())&&((s?d.nodeName.toLowerCase()!==v:1!==d.nodeType)||!++f||(y&&((d[P]||(d[P]={}))[e]=[W,f]),d!==t)););return f-=i,f===r||f%r===0&&f/r>=0}}},PSEUDO:function(e,n){var i,o=N.pseudos[e]||N.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[P]?o(n):o.length>1?(i=[e,e,"",n],N.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=tt.call(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(lt,"$1"));return i[P]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=_?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===q},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!N.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[0>n?n+t:n]}),even:u(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},N.pseudos.nth=N.pseudos.eq;for(T in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})N.pseudos[T]=s(T);for(T in{submit:!0,reset:!0})N.pseudos[T]=l(T);return d.prototype=N.filters=N.pseudos,N.setFilters=new d,S=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=f(e)),n=t.length;n--;)o=y(t[n]),o[P]?r.push(o):i.push(o);o=X(e,b(i,r))}return o},C.sortStable=P.split("").sort(U).join("")===P,C.detectDuplicates=!!j,L(),C.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),C.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(nt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);ot.find=ct,ot.expr=ct.selectors,ot.expr[":"]=ot.expr.pseudos,ot.unique=ct.uniqueSort,ot.text=ct.getText,ot.isXMLDoc=ct.isXML,ot.contains=ct.contains;var dt=ot.expr.match.needsContext,ft=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,pt=/^.[^:#\[\.,]*$/;ot.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ot.find.matchesSelector(r,e)?[r]:[]:ot.find.matches(e,ot.grep(t,function(e){return 1===e.nodeType}))},ot.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(ot(e).filter(function(){for(t=0;i>t;t++)if(ot.contains(r[t],this))return!0}));for(t=0;i>t;t++)ot.find(e,r[t],n);return n=this.pushStack(i>1?ot.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&dt.test(e)?ot(e):e||[],!1).length}});var ht,mt=e.document,gt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,vt=ot.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:gt.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ht).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof ot?t[0]:t,ot.merge(this,ot.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:mt,!0)),ft.test(n[1])&&ot.isPlainObject(t))for(n in t)ot.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}if(r=mt.getElementById(n[2]),r&&r.parentNode){if(r.id!==n[2])return ht.find(e);this.length=1,this[0]=r}return this.context=mt,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):ot.isFunction(e)?"undefined"!=typeof ht.ready?ht.ready(e):e(ot):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),ot.makeArray(e,this))};vt.prototype=ot.fn,ht=ot(mt);var yt=/^(?:parents|prev(?:Until|All))/,bt={children:!0,contents:!0,next:!0,prev:!0};ot.extend({dir:function(e,t,n){for(var r=[],i=e[t];i&&9!==i.nodeType&&(void 0===n||1!==i.nodeType||!ot(i).is(n));)1===i.nodeType&&r.push(i),i=i[t];return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),ot.fn.extend({has:function(e){var t,n=ot(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(ot.contains(this,n[t]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=dt.test(e)||"string"!=typeof e?ot(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&ot.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ot.unique(o):o)},index:function(e){return e?"string"==typeof e?ot.inArray(this[0],ot(e)):ot.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ot.unique(ot.merge(this.get(),ot(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ot.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ot.dir(e,"parentNode")},parentsUntil:function(e,t,n){return ot.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return ot.dir(e,"nextSibling")},prevAll:function(e){return ot.dir(e,"previousSibling")},nextUntil:function(e,t,n){return ot.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return ot.dir(e,"previousSibling",n)},siblings:function(e){return ot.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return ot.sibling(e.firstChild)},contents:function(e){return ot.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:ot.merge([],e.childNodes)}},function(e,t){ot.fn[e]=function(n,r){var i=ot.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ot.filter(r,i)),this.length>1&&(bt[e]||(i=ot.unique(i)),yt.test(e)&&(i=i.reverse())),this.pushStack(i)}});var xt=/\S+/g,wt={};ot.Callbacks=function(e){e="string"==typeof e?wt[e]||o(e):ot.extend({},e);var t,n,r,i,a,s,l=[],u=!e.once&&[],c=function(o){for(n=e.memory&&o,r=!0,a=s||0,s=0,i=l.length,t=!0;l&&i>a;a++)if(l[a].apply(o[0],o[1])===!1&&e.stopOnFalse){n=!1;break}t=!1,l&&(u?u.length&&c(u.shift()):n?l=[]:d.disable())},d={add:function(){if(l){var r=l.length;!function o(t){ot.each(t,function(t,n){var r=ot.type(n);"function"===r?e.unique&&d.has(n)||l.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),t?i=l.length:n&&(s=r,c(n))}return this},remove:function(){return l&&ot.each(arguments,function(e,n){for(var r;(r=ot.inArray(n,l,r))>-1;)l.splice(r,1),t&&(i>=r&&i--,a>=r&&a--)}),this},has:function(e){return e?ot.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],i=0,this},disable:function(){return l=u=n=void 0,this},disabled:function(){return!l},lock:function(){return u=void 0,n||d.disable(),this},locked:function(){return!u},fireWith:function(e,n){return!l||r&&!u||(n=n||[],n=[e,n.slice?n.slice():n],t?u.push(n):c(n)),this},fire:function(){return d.fireWith(this,arguments),this},fired:function(){return!!r}};return d},ot.extend({Deferred:function(e){var t=[["resolve","done",ot.Callbacks("once memory"),"resolved"],["reject","fail",ot.Callbacks("once memory"),"rejected"],["notify","progress",ot.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return ot.Deferred(function(n){ot.each(t,function(t,o){var a=ot.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&ot.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?ot.extend(e,r):r}},i={};// All done!
return r.pipe=r.then,ot.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Y.call(arguments),a=o.length,s=1!==a||e&&ot.isFunction(e.promise)?a:0,l=1===s?e:ot.Deferred(),u=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Y.call(arguments):i,r===t?l.notifyWith(n,r):--s||l.resolveWith(n,r)}};if(a>1)for(t=new Array(a),n=new Array(a),r=new Array(a);a>i;i++)o[i]&&ot.isFunction(o[i].promise)?o[i].promise().done(u(i,r,o)).fail(l.reject).progress(u(i,n,t)):--s;return s||l.resolveWith(r,o),l.promise()}});var Tt;ot.fn.ready=function(e){return ot.ready.promise().done(e),this},ot.extend({isReady:!1,readyWait:1,holdReady:function(e){e?ot.readyWait++:ot.ready(!0)},ready:function(e){if(e===!0?!--ot.readyWait:!ot.isReady){if(!mt.body)return setTimeout(ot.ready);ot.isReady=!0,e!==!0&&--ot.readyWait>0||(Tt.resolveWith(mt,[ot]),ot.fn.trigger&&ot(mt).trigger("ready").off("ready"))}}}),ot.ready.promise=function(t){if(!Tt)if(Tt=ot.Deferred(),"complete"===mt.readyState)setTimeout(ot.ready);else if(mt.addEventListener)mt.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1);else{mt.attachEvent("onreadystatechange",s),e.attachEvent("onload",s);var n=!1;try{n=null==e.frameElement&&mt.documentElement}catch(r){}n&&n.doScroll&&!function i(){if(!ot.isReady){try{n.doScroll("left")}catch(e){return setTimeout(i,50)}a(),ot.ready()}}()}return Tt.promise(t)};var Ct,Nt="undefined";for(Ct in ot(rt))break;rt.ownLast="0"!==Ct,rt.inlineBlockNeedsLayout=!1,ot(function(){var e,t,n=mt.getElementsByTagName("body")[0];n&&(e=mt.createElement("div"),e.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",t=mt.createElement("div"),n.appendChild(e).appendChild(t),typeof t.style.zoom!==Nt&&(t.style.cssText="border:0;margin:0;width:1px;padding:1px;display:inline;zoom:1",(rt.inlineBlockNeedsLayout=3===t.offsetWidth)&&(n.style.zoom=1)),n.removeChild(e),e=t=null)}),function(){var e=mt.createElement("div");if(null==rt.deleteExpando){rt.deleteExpando=!0;try{delete e.test}catch(t){rt.deleteExpando=!1}}e=null}(),ot.acceptData=function(e){var t=ot.noData[(e.nodeName+" ").toLowerCase()],n=+e.nodeType||1;return 1!==n&&9!==n?!1:!t||t!==!0&&e.getAttribute("classid")===t};var Et=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,kt=/([A-Z])/g;ot.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?ot.cache[e[ot.expando]]:e[ot.expando],!!e&&!u(e)},data:function(e,t,n){return c(e,t,n)},removeData:function(e,t){return d(e,t)},_data:function(e,t,n){return c(e,t,n,!0)},_removeData:function(e,t){return d(e,t,!0)}}),ot.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=ot.data(o),1===o.nodeType&&!ot._data(o,"parsedAttrs"))){for(n=a.length;n--;)r=a[n].name,0===r.indexOf("data-")&&(r=ot.camelCase(r.slice(5)),l(o,r,i[r]));ot._data(o,"parsedAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ot.data(this,e)}):arguments.length>1?this.each(function(){ot.data(this,e,t)}):o?l(o,e,ot.data(o,e)):void 0},removeData:function(e){return this.each(function(){ot.removeData(this,e)})}}),ot.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=ot._data(e,t),n&&(!r||ot.isArray(n)?r=ot._data(e,t,ot.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=ot.queue(e,t),r=n.length,i=n.shift(),o=ot._queueHooks(e,t),a=function(){ot.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return ot._data(e,n)||ot._data(e,n,{empty:ot.Callbacks("once memory").add(function(){ot._removeData(e,t+"queue"),ot._removeData(e,n)})})}}),ot.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ot.queue(this[0],e):void 0===t?this:this.each(function(){var n=ot.queue(this,e,t);ot._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ot.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ot.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=ot.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=ot._data(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var St=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,At=["Top","Right","Bottom","Left"],Dt=function(e,t){return e=t||e,"none"===ot.css(e,"display")||!ot.contains(e.ownerDocument,e)},jt=ot.access=function(e,t,n,r,i,o,a){var s=0,l=e.length,u=null==n;if("object"===ot.type(n)){i=!0;for(s in n)ot.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ot.isFunction(r)||(a=!0),u&&(a?(t.call(e,r),t=null):(u=t,t=function(e,t,n){return u.call(ot(e),n)})),t))for(;l>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:u?t.call(e):l?t(e[0],n):o},Lt=/^(?:checkbox|radio)$/i;!function(){var e=mt.createDocumentFragment(),t=mt.createElement("div"),n=mt.createElement("input");if(t.setAttribute("className","t"),t.innerHTML="  <link/><table></table><a href='/a'>a</a>",rt.leadingWhitespace=3===t.firstChild.nodeType,rt.tbody=!t.getElementsByTagName("tbody").length,rt.htmlSerialize=!!t.getElementsByTagName("link").length,rt.html5Clone="<:nav></:nav>"!==mt.createElement("nav").cloneNode(!0).outerHTML,n.type="checkbox",n.checked=!0,e.appendChild(n),rt.appendChecked=n.checked,t.innerHTML="<textarea>x</textarea>",rt.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue,e.appendChild(t),t.innerHTML="<input type='radio' checked='checked' name='t'/>",rt.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,rt.noCloneEvent=!0,t.attachEvent&&(t.attachEvent("onclick",function(){rt.noCloneEvent=!1}),t.cloneNode(!0).click()),null==rt.deleteExpando){rt.deleteExpando=!0;try{delete t.test}catch(r){rt.deleteExpando=!1}}e=t=n=null}(),function(){var t,n,r=mt.createElement("div");for(t in{submit:!0,change:!0,focusin:!0})n="on"+t,(rt[t+"Bubbles"]=n in e)||(r.setAttribute(n,"t"),rt[t+"Bubbles"]=r.attributes[n].expando===!1);r=null}();var Ht=/^(?:input|select|textarea)$/i,qt=/^key/,_t=/^(?:mouse|contextmenu)|click/,Mt=/^(?:focusinfocus|focusoutblur)$/,Ft=/^([^.]*)(?:\.(.+)|)$/;ot.event={global:{},add:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=ot._data(e);if(g){for(n.handler&&(l=n,n=l.handler,i=l.selector),n.guid||(n.guid=ot.guid++),(a=g.events)||(a=g.events={}),(c=g.handle)||(c=g.handle=function(e){return typeof ot===Nt||e&&ot.event.triggered===e.type?void 0:ot.event.dispatch.apply(c.elem,arguments)},c.elem=e),t=(t||"").match(xt)||[""],s=t.length;s--;)o=Ft.exec(t[s])||[],p=m=o[1],h=(o[2]||"").split(".").sort(),p&&(u=ot.event.special[p]||{},p=(i?u.delegateType:u.bindType)||p,u=ot.event.special[p]||{},d=ot.extend({type:p,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ot.expr.match.needsContext.test(i),namespace:h.join(".")},l),(f=a[p])||(f=a[p]=[],f.delegateCount=0,u.setup&&u.setup.call(e,r,h,c)!==!1||(e.addEventListener?e.addEventListener(p,c,!1):e.attachEvent&&e.attachEvent("on"+p,c))),u.add&&(u.add.call(e,d),d.handler.guid||(d.handler.guid=n.guid)),i?f.splice(f.delegateCount++,0,d):f.push(d),ot.event.global[p]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,d,f,p,h,m,g=ot.hasData(e)&&ot._data(e);if(g&&(c=g.events)){for(t=(t||"").match(xt)||[""],u=t.length;u--;)if(s=Ft.exec(t[u])||[],p=m=s[1],h=(s[2]||"").split(".").sort(),p){for(d=ot.event.special[p]||{},p=(r?d.delegateType:d.bindType)||p,f=c[p]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;o--;)a=f[o],!i&&m!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,d.remove&&d.remove.call(e,a));l&&!f.length&&(d.teardown&&d.teardown.call(e,h,g.handle)!==!1||ot.removeEvent(e,p,g.handle),delete c[p])}else for(p in c)ot.event.remove(e,p+t[u],n,r,!0);ot.isEmptyObject(c)&&(delete g.handle,ot._removeData(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,l,u,c,d,f=[r||mt],p=tt.call(t,"type")?t.type:t,h=tt.call(t,"namespace")?t.namespace.split("."):[];if(s=c=r=r||mt,3!==r.nodeType&&8!==r.nodeType&&!Mt.test(p+ot.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),a=p.indexOf(":")<0&&"on"+p,t=t[ot.expando]?t:new ot.Event(p,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:ot.makeArray(n,[t]),u=ot.event.special[p]||{},i||!u.trigger||u.trigger.apply(r,n)!==!1)){if(!i&&!u.noBubble&&!ot.isWindow(r)){for(l=u.delegateType||p,Mt.test(l+p)||(s=s.parentNode);s;s=s.parentNode)f.push(s),c=s;c===(r.ownerDocument||mt)&&f.push(c.defaultView||c.parentWindow||e)}for(d=0;(s=f[d++])&&!t.isPropagationStopped();)t.type=d>1?l:u.bindType||p,o=(ot._data(s,"events")||{})[t.type]&&ot._data(s,"handle"),o&&o.apply(s,n),o=a&&s[a],o&&o.apply&&ot.acceptData(s)&&(t.result=o.apply(s,n),t.result===!1&&t.preventDefault());if(t.type=p,!i&&!t.isDefaultPrevented()&&(!u._default||u._default.apply(f.pop(),n)===!1)&&ot.acceptData(r)&&a&&r[p]&&!ot.isWindow(r)){c=r[a],c&&(r[a]=null),ot.event.triggered=p;try{r[p]()}catch(m){}ot.event.triggered=void 0,c&&(r[a]=c)}return t.result}},dispatch:function(e){e=ot.event.fix(e);var t,n,r,i,o,a=[],s=Y.call(arguments),l=(ot._data(this,"events")||{})[e.type]||[],u=ot.event.special[e.type]||{};if(s[0]=e,e.delegateTarget=this,!u.preDispatch||u.preDispatch.call(this,e)!==!1){for(a=ot.event.handlers.call(this,e,l),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,o=0;(r=i.handlers[o++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(r.namespace))&&(e.handleObj=r,e.data=r.data,n=((ot.event.special[r.origType]||{}).handle||r.handler).apply(i.elem,s),void 0!==n&&(e.result=n)===!1&&(e.preventDefault(),e.stopPropagation()));return u.postDispatch&&u.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,l=e.target;if(s&&l.nodeType&&(!e.button||"click"!==e.type))for(;l!=this;l=l.parentNode||this)if(1===l.nodeType&&(l.disabled!==!0||"click"!==e.type)){for(i=[],o=0;s>o;o++)r=t[o],n=r.selector+" ",void 0===i[n]&&(i[n]=r.needsContext?ot(n,this).index(l)>=0:ot.find(n,this,null,[l]).length),i[n]&&i.push(r);i.length&&a.push({elem:l,handlers:i})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},fix:function(e){if(e[ot.expando])return e;var t,n,r,i=e.type,o=e,a=this.fixHooks[i];for(a||(this.fixHooks[i]=a=_t.test(i)?this.mouseHooks:qt.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new ot.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||mt),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,a.filter?a.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button,a=t.fromElement;return null==e.pageX&&null!=t.clientX&&(r=e.target.ownerDocument||mt,i=r.documentElement,n=r.body,e.pageX=t.clientX+(i&&i.scrollLeft||n&&n.scrollLeft||0)-(i&&i.clientLeft||n&&n.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||n&&n.scrollTop||0)-(i&&i.clientTop||n&&n.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?t.toElement:a),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==h()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return ot.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(e){return ot.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=ot.extend(new ot.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?ot.event.trigger(i,null,t):ot.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},ot.removeEvent=mt.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===Nt&&(e[r]=null),e.detachEvent(r,n))},ot.Event=function(e,t){return this instanceof ot.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&(e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault())?f:p):this.type=e,t&&ot.extend(this,t),this.timeStamp=e&&e.timeStamp||ot.now(),this[ot.expando]=!0,void 0):new ot.Event(e,t)},ot.Event.prototype={isDefaultPrevented:p,isPropagationStopped:p,isImmediatePropagationStopped:p,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=f,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=f,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f,this.stopPropagation()}},ot.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){ot.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!ot.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),rt.submitBubbles||(ot.event.special.submit={setup:function(){return ot.nodeName(this,"form")?!1:(ot.event.add(this,"click._submit keypress._submit",function(e){var t=e.target,n=ot.nodeName(t,"input")||ot.nodeName(t,"button")?t.form:void 0;n&&!ot._data(n,"submitBubbles")&&(ot.event.add(n,"submit._submit",function(e){e._submit_bubble=!0}),ot._data(n,"submitBubbles",!0))}),void 0)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&ot.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return ot.nodeName(this,"form")?!1:(ot.event.remove(this,"._submit"),void 0)}}),rt.changeBubbles||(ot.event.special.change={setup:function(){return Ht.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(ot.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),ot.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),ot.event.simulate("change",this,e,!0)})),!1):(ot.event.add(this,"beforeactivate._change",function(e){var t=e.target;Ht.test(t.nodeName)&&!ot._data(t,"changeBubbles")&&(ot.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||ot.event.simulate("change",this.parentNode,e,!0)}),ot._data(t,"changeBubbles",!0))}),void 0)},handle:function(e){var t=e.target;return this!==t||e.isSimulated||e.isTrigger||"radio"!==t.type&&"checkbox"!==t.type?e.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return ot.event.remove(this,"._change"),!Ht.test(this.nodeName)}}),rt.focusinBubbles||ot.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){ot.event.simulate(t,e.target,ot.event.fix(e),!0)};ot.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ot._data(r,t);i||r.addEventListener(e,n,!0),ot._data(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ot._data(r,t)-1;i?ot._data(r,t,i):(r.removeEventListener(e,n,!0),ot._removeData(r,t))}}}),ot.fn.extend({on:function(e,t,n,r,i){var o,a;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(o in e)this.on(o,t,n,e[o],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=p;else if(!r)return this;return 1===i&&(a=r,r=function(e){return ot().off(e),a.apply(this,arguments)},r.guid=a.guid||(a.guid=ot.guid++)),this.each(function(){ot.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,ot(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=p),this.each(function(){ot.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){ot.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?ot.event.trigger(e,t,n,!0):void 0}});var Ot="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",Bt=/ jQuery\d+="(?:null|\d+)"/g,Pt=new RegExp("<(?:"+Ot+")[\\s/>]","i"),Rt=/^\s+/,Wt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,$t=/<([\w:]+)/,zt=/<tbody/i,It=/<|&#?\w+;/,Xt=/<(?:script|style|link)/i,Ut=/checked\s*(?:[^=]|=\s*.checked.)/i,Vt=/^$|\/(?:java|ecma)script/i,Jt=/^true\/(.*)/,Yt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Gt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:rt.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},Qt=m(mt),Kt=Qt.appendChild(mt.createElement("div"));Gt.optgroup=Gt.option,Gt.tbody=Gt.tfoot=Gt.colgroup=Gt.caption=Gt.thead,Gt.th=Gt.td,ot.extend({clone:function(e,t,n){var r,i,o,a,s,l=ot.contains(e.ownerDocument,e);if(rt.html5Clone||ot.isXMLDoc(e)||!Pt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Kt.innerHTML=e.outerHTML,Kt.removeChild(o=Kt.firstChild)),!(rt.noCloneEvent&&rt.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ot.isXMLDoc(e)))for(r=g(o),s=g(e),a=0;null!=(i=s[a]);++a)r[a]&&C(i,r[a]);if(t)if(n)for(s=s||g(e),r=r||g(o),a=0;null!=(i=s[a]);a++)T(i,r[a]);else T(e,o);return r=g(o,"script"),r.length>0&&w(r,!l&&g(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){for(var i,o,a,s,l,u,c,d=e.length,f=m(t),p=[],h=0;d>h;h++)if(o=e[h],o||0===o)if("object"===ot.type(o))ot.merge(p,o.nodeType?[o]:o);else if(It.test(o)){for(s=s||f.appendChild(t.createElement("div")),l=($t.exec(o)||["",""])[1].toLowerCase(),c=Gt[l]||Gt._default,s.innerHTML=c[1]+o.replace(Wt,"<$1></$2>")+c[2],i=c[0];i--;)s=s.lastChild;if(!rt.leadingWhitespace&&Rt.test(o)&&p.push(t.createTextNode(Rt.exec(o)[0])),!rt.tbody)for(o="table"!==l||zt.test(o)?"<table>"!==c[1]||zt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;i--;)ot.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u);for(ot.merge(p,s.childNodes),s.textContent="";s.firstChild;)s.removeChild(s.firstChild);s=f.lastChild}else p.push(t.createTextNode(o));for(s&&f.removeChild(s),rt.appendChecked||ot.grep(g(p,"input"),v),h=0;o=p[h++];)if((!r||-1===ot.inArray(o,r))&&(a=ot.contains(o.ownerDocument,o),s=g(f.appendChild(o),"script"),a&&w(s),n))for(i=0;o=s[i++];)Vt.test(o.type||"")&&n.push(o);return s=null,f},cleanData:function(e,t){for(var n,r,i,o,a=0,s=ot.expando,l=ot.cache,u=rt.deleteExpando,c=ot.event.special;null!=(n=e[a]);a++)if((t||ot.acceptData(n))&&(i=n[s],o=i&&l[i])){if(o.events)for(r in o.events)c[r]?ot.event.remove(n,r):ot.removeEvent(n,r,o.handle);l[i]&&(delete l[i],u?delete n[s]:typeof n.removeAttribute!==Nt?n.removeAttribute(s):n[s]=null,J.push(i))}}}),ot.fn.extend({text:function(e){return jt(this,function(e){return void 0===e?ot.text(this):this.empty().append((this[0]&&this[0].ownerDocument||mt).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=y(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?ot.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||ot.cleanData(g(n)),n.parentNode&&(t&&ot.contains(n.ownerDocument,n)&&w(g(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++){for(1===e.nodeType&&ot.cleanData(g(e,!1));e.firstChild;)e.removeChild(e.firstChild);e.options&&ot.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return ot.clone(this,e,t)})},html:function(e){return jt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e)return 1===t.nodeType?t.innerHTML.replace(Bt,""):void 0;if(!("string"!=typeof e||Xt.test(e)||!rt.htmlSerialize&&Pt.test(e)||!rt.leadingWhitespace&&Rt.test(e)||Gt[($t.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(Wt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(ot.cleanData(g(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,ot.cleanData(g(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=G.apply([],e);var n,r,i,o,a,s,l=0,u=this.length,c=this,d=u-1,f=e[0],p=ot.isFunction(f);if(p||u>1&&"string"==typeof f&&!rt.checkClone&&Ut.test(f))return this.each(function(n){var r=c.eq(n);p&&(e[0]=f.call(this,n,r.html())),r.domManip(e,t)});if(u&&(s=ot.buildFragment(e,this[0].ownerDocument,!1,this),n=s.firstChild,1===s.childNodes.length&&(s=n),n)){for(o=ot.map(g(s,"script"),b),i=o.length;u>l;l++)r=s,l!==d&&(r=ot.clone(r,!0,!0),i&&ot.merge(o,g(r,"script"))),t.call(this[l],r,l);if(i)for(a=o[o.length-1].ownerDocument,ot.map(o,x),l=0;i>l;l++)r=o[l],Vt.test(r.type||"")&&!ot._data(r,"globalEval")&&ot.contains(a,r)&&(r.src?ot._evalUrl&&ot._evalUrl(r.src):ot.globalEval((r.text||r.textContent||r.innerHTML||"").replace(Yt,"")));s=n=null}return this}}),ot.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ot.fn[e]=function(e){for(var n,r=0,i=[],o=ot(e),a=o.length-1;a>=r;r++)n=r===a?this:this.clone(!0),ot(o[r])[t](n),Q.apply(i,n.get());return this.pushStack(i)}});var Zt,en={};!function(){var e,t,n=mt.createElement("div"),r="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";n.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=n.getElementsByTagName("a")[0],e.style.cssText="float:left;opacity:.5",rt.opacity=/^0.5/.test(e.style.opacity),rt.cssFloat=!!e.style.cssFloat,n.style.backgroundClip="content-box",n.cloneNode(!0).style.backgroundClip="",rt.clearCloneStyle="content-box"===n.style.backgroundClip,e=n=null,rt.shrinkWrapBlocks=function(){var e,n,i,o;if(null==t){if(e=mt.getElementsByTagName("body")[0],!e)return;o="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",n=mt.createElement("div"),i=mt.createElement("div"),e.appendChild(n).appendChild(i),t=!1,typeof i.style.zoom!==Nt&&(i.style.cssText=r+";width:1px;padding:1px;zoom:1",i.innerHTML="<div></div>",i.firstChild.style.width="5px",t=3!==i.offsetWidth),e.removeChild(n),e=n=i=null}return t}}();var tn,nn,rn=/^margin/,on=new RegExp("^("+St+")(?!px)[a-z%]+$","i"),an=/^(top|right|bottom|left)$/;e.getComputedStyle?(tn=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)},nn=function(e,t,n){var r,i,o,a,s=e.style;return n=n||tn(e),a=n?n.getPropertyValue(t)||n[t]:void 0,n&&(""!==a||ot.contains(e.ownerDocument,e)||(a=ot.style(e,t)),on.test(a)&&rn.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0===a?a:a+""}):mt.documentElement.currentStyle&&(tn=function(e){return e.currentStyle},nn=function(e,t,n){var r,i,o,a,s=e.style;return n=n||tn(e),a=n?n[t]:void 0,null==a&&s&&s[t]&&(a=s[t]),on.test(a)&&!an.test(t)&&(r=s.left,i=e.runtimeStyle,o=i&&i.left,o&&(i.left=e.currentStyle.left),s.left="fontSize"===t?"1em":a,a=s.pixelLeft+"px",s.left=r,o&&(i.left=o)),void 0===a?a:a+""||"auto"}),function(){function t(){var t,n,r=mt.getElementsByTagName("body")[0];r&&(t=mt.createElement("div"),n=mt.createElement("div"),t.style.cssText=u,r.appendChild(t).appendChild(n),n.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;display:block;padding:1px;border:1px;width:4px;margin-top:1%;top:1%",ot.swap(r,null!=r.style.zoom?{zoom:1}:{},function(){i=4===n.offsetWidth}),o=!0,a=!1,s=!0,e.getComputedStyle&&(a="1%"!==(e.getComputedStyle(n,null)||{}).top,o="4px"===(e.getComputedStyle(n,null)||{width:"4px"}).width),r.removeChild(t),n=r=null)}var n,r,i,o,a,s,l=mt.createElement("div"),u="border:0;width:0;height:0;position:absolute;top:0;left:-9999px",c="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;padding:0;margin:0;border:0";l.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=l.getElementsByTagName("a")[0],n.style.cssText="float:left;opacity:.5",rt.opacity=/^0.5/.test(n.style.opacity),rt.cssFloat=!!n.style.cssFloat,l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",rt.clearCloneStyle="content-box"===l.style.backgroundClip,n=l=null,ot.extend(rt,{reliableHiddenOffsets:function(){if(null!=r)return r;var e,t,n,i=mt.createElement("div"),o=mt.getElementsByTagName("body")[0];if(o)return i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=mt.createElement("div"),e.style.cssText=u,o.appendChild(e).appendChild(i),i.innerHTML="<table><tr><td></td><td>t</td></tr></table>",t=i.getElementsByTagName("td"),t[0].style.cssText="padding:0;margin:0;border:0;display:none",n=0===t[0].offsetHeight,t[0].style.display="",t[1].style.display="none",r=n&&0===t[0].offsetHeight,o.removeChild(e),i=o=null,r},boxSizing:function(){return null==i&&t(),i},boxSizingReliable:function(){return null==o&&t(),o},pixelPosition:function(){return null==a&&t(),a},reliableMarginRight:function(){var t,n,r,i;if(null==s&&e.getComputedStyle){if(t=mt.getElementsByTagName("body")[0],!t)return;n=mt.createElement("div"),r=mt.createElement("div"),n.style.cssText=u,t.appendChild(n).appendChild(r),i=r.appendChild(mt.createElement("div")),i.style.cssText=r.style.cssText=c,i.style.marginRight=i.style.width="0",r.style.width="1px",s=!parseFloat((e.getComputedStyle(i,null)||{}).marginRight),t.removeChild(n)}return s}})}(),ot.swap=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};var sn=/alpha\([^)]*\)/i,ln=/opacity\s*=\s*([^)]*)/,un=/^(none|table(?!-c[ea]).+)/,cn=new RegExp("^("+St+")(.*)$","i"),dn=new RegExp("^([+-])=("+St+")","i"),fn={position:"absolute",visibility:"hidden",display:"block"},pn={letterSpacing:0,fontWeight:400},hn=["Webkit","O","Moz","ms"];ot.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=nn(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":rt.cssFloat?"cssFloat":"styleFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=ot.camelCase(t),l=e.style;if(t=ot.cssProps[s]||(ot.cssProps[s]=S(l,s)),a=ot.cssHooks[t]||ot.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];if(o=typeof n,"string"===o&&(i=dn.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(ot.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||ot.cssNumber[s]||(n+="px"),rt.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),!(a&&"set"in a&&void 0===(n=a.set(e,n,r)))))try{// Setting style to blank string required to delete "style: x !important;"
l[t]="",l[t]=n}catch(u){}}},css:function(e,t,n,r){var i,o,a,s=ot.camelCase(t);return t=ot.cssProps[s]||(ot.cssProps[s]=S(e.style,s)),a=ot.cssHooks[t]||ot.cssHooks[s],a&&"get"in a&&(o=a.get(e,!0,n)),void 0===o&&(o=nn(e,t,r)),"normal"===o&&t in pn&&(o=pn[t]),""===n||n?(i=parseFloat(o),n===!0||ot.isNumeric(i)?i||0:o):o}}),ot.each(["height","width"],function(e,t){ot.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&un.test(ot.css(e,"display"))?ot.swap(e,fn,function(){return L(e,t,r)}):L(e,t,r):void 0},set:function(e,n,r){var i=r&&tn(e);return D(e,n,r?j(e,t,r,rt.boxSizing()&&"border-box"===ot.css(e,"boxSizing",!1,i),i):0)}}}),rt.opacity||(ot.cssHooks.opacity={get:function(e,t){return ln.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=ot.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===ot.trim(o.replace(sn,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=sn.test(o)?o.replace(sn,i):o+" "+i)}}),ot.cssHooks.marginRight=k(rt.reliableMarginRight,function(e,t){return t?ot.swap(e,{display:"inline-block"},nn,[e,"marginRight"]):void 0}),ot.each({margin:"",padding:"",border:"Width"},function(e,t){ot.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+At[r]+t]=o[r]||o[r-2]||o[0];return i}},rn.test(e)||(ot.cssHooks[e+t].set=D)}),ot.fn.extend({css:function(e,t){return jt(this,function(e,t,n){var r,i,o={},a=0;if(ot.isArray(t)){for(r=tn(e),i=t.length;i>a;a++)o[t[a]]=ot.css(e,t[a],!1,r);return o}return void 0!==n?ot.style(e,t,n):ot.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Dt(this)?ot(this).show():ot(this).hide()})}}),ot.Tween=H,H.prototype={constructor:H,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ot.cssNumber[n]?"":"px")},cur:function(){var e=H.propHooks[this.prop];return e&&e.get?e.get(this):H.propHooks._default.get(this)},run:function(e){var t,n=H.propHooks[this.prop];return this.pos=t=this.options.duration?ot.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):H.propHooks._default.set(this),this}},H.prototype.init.prototype=H.prototype,H.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=ot.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){ot.fx.step[e.prop]?ot.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[ot.cssProps[e.prop]]||ot.cssHooks[e.prop])?ot.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},H.propHooks.scrollTop=H.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ot.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},ot.fx=H.prototype.init,ot.fx.step={};var mn,gn,vn=/^(?:toggle|show|hide)$/,yn=new RegExp("^(?:([+-])=|)("+St+")([a-z%]*)$","i"),bn=/queueHooks$/,xn=[F],wn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=yn.exec(t),o=i&&i[3]||(ot.cssNumber[e]?"":"px"),a=(ot.cssNumber[e]||"px"!==o&&+r)&&yn.exec(ot.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,ot.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};ot.Animation=ot.extend(B,{tweener:function(e,t){ot.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],wn[n]=wn[n]||[],wn[n].unshift(t)},prefilter:function(e,t){t?xn.unshift(e):xn.push(e)}}),ot.speed=function(e,t,n){var r=e&&"object"==typeof e?ot.extend({},e):{complete:n||!n&&t||ot.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ot.isFunction(t)&&t};return r.duration=ot.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in ot.fx.speeds?ot.fx.speeds[r.duration]:ot.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){ot.isFunction(r.old)&&r.old.call(this),r.queue&&ot.dequeue(this,r.queue)},r},ot.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Dt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ot.isEmptyObject(e),o=ot.speed(t,n,r),a=function(){var t=B(this,ot.extend({},e),o);(i||ot._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ot.timers,a=ot._data(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&bn.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&ot.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ot._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ot.timers,a=r?r.length:0;for(n.finish=!0,ot.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),ot.each(["toggle","show","hide"],function(e,t){var n=ot.fn[t];ot.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),ot.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ot.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ot.timers=[],ot.fx.tick=function(){var e,t=ot.timers,n=0;for(mn=ot.now();n<t.length;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||ot.fx.stop(),mn=void 0},ot.fx.timer=function(e){ot.timers.push(e),e()?ot.fx.start():ot.timers.pop()},ot.fx.interval=13,ot.fx.start=function(){gn||(gn=setInterval(ot.fx.tick,ot.fx.interval))},ot.fx.stop=function(){clearInterval(gn),gn=null},ot.fx.speeds={slow:600,fast:200,_default:400},ot.fn.delay=function(e,t){return e=ot.fx?ot.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e,t,n,r,i=mt.createElement("div");i.setAttribute("className","t"),i.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",e=i.getElementsByTagName("a")[0],n=mt.createElement("select"),r=n.appendChild(mt.createElement("option")),t=i.getElementsByTagName("input")[0],e.style.cssText="top:1px",rt.getSetAttribute="t"!==i.className,rt.style=/top/.test(e.getAttribute("style")),rt.hrefNormalized="/a"===e.getAttribute("href"),rt.checkOn=!!t.value,rt.optSelected=r.selected,rt.enctype=!!mt.createElement("form").enctype,n.disabled=!0,rt.optDisabled=!r.disabled,t=mt.createElement("input"),t.setAttribute("value",""),rt.input=""===t.getAttribute("value"),t.value="t",t.setAttribute("type","radio"),rt.radioValue="t"===t.value,e=t=n=r=i=null}();var Tn=/\r/g;ot.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ot.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ot(this).val()):e,null==i?i="":"number"==typeof i?i+="":ot.isArray(i)&&(i=ot.map(i,function(e){return null==e?"":e+""})),t=ot.valHooks[this.type]||ot.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=ot.valHooks[i.type]||ot.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Tn,""):null==n?"":n)}}}),ot.extend({valHooks:{option:{get:function(e){var t=ot.find.attr(e,"value");return null!=t?t:ot.text(e)}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(rt.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&ot.nodeName(n.parentNode,"optgroup"))){if(t=ot(n).val(),o)return t;a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=ot.makeArray(t),a=i.length;a--;)if(r=i[a],ot.inArray(ot.valHooks.option.get(r),o)>=0)try{r.selected=n=!0}catch(s){r.scrollHeight}else r.selected=!1;return n||(e.selectedIndex=-1),i}}}}),ot.each(["radio","checkbox"],function(){ot.valHooks[this]={set:function(e,t){return ot.isArray(t)?e.checked=ot.inArray(ot(e).val(),t)>=0:void 0}},rt.checkOn||(ot.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Cn,Nn,En=ot.expr.attrHandle,kn=/^(?:checked|selected)$/i,Sn=rt.getSetAttribute,An=rt.input;ot.fn.extend({attr:function(e,t){return jt(this,ot.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ot.removeAttr(this,e)})}}),ot.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Nt?ot.prop(e,t,n):(1===o&&ot.isXMLDoc(e)||(t=t.toLowerCase(),r=ot.attrHooks[t]||(ot.expr.match.bool.test(t)?Nn:Cn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=ot.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):(ot.removeAttr(e,t),void 0))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(xt);if(o&&1===e.nodeType)for(;n=o[i++];)r=ot.propFix[n]||n,ot.expr.match.bool.test(n)?An&&Sn||!kn.test(n)?e[r]=!1:e[ot.camelCase("default-"+n)]=e[r]=!1:ot.attr(e,n,""),e.removeAttribute(Sn?n:r)},attrHooks:{type:{set:function(e,t){if(!rt.radioValue&&"radio"===t&&ot.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Nn={set:function(e,t,n){return t===!1?ot.removeAttr(e,n):An&&Sn||!kn.test(n)?e.setAttribute(!Sn&&ot.propFix[n]||n,n):e[ot.camelCase("default-"+n)]=e[n]=!0,n}},ot.each(ot.expr.match.bool.source.match(/\w+/g),function(e,t){var n=En[t]||ot.find.attr;En[t]=An&&Sn||!kn.test(t)?function(e,t,r){var i,o;return r||(o=En[t],En[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,En[t]=o),i}:function(e,t,n){return n?void 0:e[ot.camelCase("default-"+t)]?t.toLowerCase():null}}),An&&Sn||(ot.attrHooks.value={set:function(e,t,n){return ot.nodeName(e,"input")?(e.defaultValue=t,void 0):Cn&&Cn.set(e,t,n)}}),Sn||(Cn={set:function(e,t,n){var r=e.getAttributeNode(n);return r||e.setAttributeNode(r=e.ownerDocument.createAttribute(n)),r.value=t+="","value"===n||t===e.getAttribute(n)?t:void 0}},En.id=En.name=En.coords=function(e,t,n){var r;return n?void 0:(r=e.getAttributeNode(t))&&""!==r.value?r.value:null},ot.valHooks.button={get:function(e,t){var n=e.getAttributeNode(t);return n&&n.specified?n.value:void 0},set:Cn.set},ot.attrHooks.contenteditable={set:function(e,t,n){Cn.set(e,""===t?!1:t,n)}},ot.each(["width","height"],function(e,t){ot.attrHooks[t]={set:function(e,n){return""===n?(e.setAttribute(t,"auto"),n):void 0}}})),rt.style||(ot.attrHooks.style={get:function(e){return e.style.cssText||void 0},set:function(e,t){return e.style.cssText=t+""}});var Dn=/^(?:input|select|textarea|button|object)$/i,jn=/^(?:a|area)$/i;ot.fn.extend({prop:function(e,t){return jt(this,ot.prop,e,t,arguments.length>1)},removeProp:function(e){return e=ot.propFix[e]||e,this.each(function(){try{this[e]=void 0,delete this[e]}catch(t){}})}}),ot.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType;if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!ot.isXMLDoc(e),o&&(t=ot.propFix[t]||t,i=ot.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=ot.find.attr(e,"tabindex");return t?parseInt(t,10):Dn.test(e.nodeName)||jn.test(e.nodeName)&&e.href?0:-1}}}}),rt.hrefNormalized||ot.each(["href","src"],function(e,t){ot.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),rt.optSelected||(ot.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),ot.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ot.propFix[this.toLowerCase()]=this}),rt.enctype||(ot.propFix.enctype="encoding");var Ln=/[\t\r\n\f]/g;ot.fn.extend({addClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u="string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(xt)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ln," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");a=ot.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0,l=this.length,u=0===arguments.length||"string"==typeof e&&e;if(ot.isFunction(e))return this.each(function(t){ot(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(xt)||[];l>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(Ln," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");a=e?ot.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ot.isFunction(e)?this.each(function(n){ot(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n)for(var t,r=0,i=ot(this),o=e.match(xt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===Nt||"boolean"===n)&&(this.className&&ot._data(this,"__className__",this.className),this.className=this.className||e===!1?"":ot._data(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ln," ").indexOf(t)>=0)return!0;return!1}}),ot.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){ot.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ot.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Hn=ot.now(),qn=/\?/,_n=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;ot.parseJSON=function(t){if(e.JSON&&e.JSON.parse)return e.JSON.parse(t+"");var n,r=null,i=ot.trim(t+"");return i&&!ot.trim(i.replace(_n,function(e,t,i,o){return n&&t&&(r=0),0===r?e:(n=i||t,r+=!o-!i,"")}))?Function("return "+i)():ot.error("Invalid JSON: "+t)},ot.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{e.DOMParser?(r=new DOMParser,n=r.parseFromString(t,"text/xml")):(n=new ActiveXObject("Microsoft.XMLDOM"),n.async="false",n.loadXML(t))}catch(i){n=void 0}return n&&n.documentElement&&!n.getElementsByTagName("parsererror").length||ot.error("Invalid XML: "+t),n};var Mn,Fn,On=/#.*$/,Bn=/([?&])_=[^&]*/,Pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Rn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Wn=/^(?:GET|HEAD)$/,$n=/^\/\//,zn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,In={},Xn={},Un="*/".concat("*");try{Fn=location.href}catch(Vn){Fn=mt.createElement("a"),Fn.href="",Fn=Fn.href}Mn=zn.exec(Fn.toLowerCase())||[],ot.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Fn,type:"GET",isLocal:Rn.test(Mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Un,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":ot.parseJSON,"text xml":ot.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,ot.ajaxSettings),t):W(ot.ajaxSettings,e)},ajaxPrefilter:P(In),ajaxTransport:P(Xn),ajax:function(e,t){function n(e,t,n,r){var i,c,v,y,x,T=t;2!==b&&(b=2,s&&clearTimeout(s),u=void 0,a=r||"",w.readyState=e>0?4:0,i=e>=200&&300>e||304===e,n&&(y=$(d,w,n)),y=z(d,y,w,i),i?(d.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(ot.lastModified[o]=x),x=w.getResponseHeader("etag"),x&&(ot.etag[o]=x)),204===e||"HEAD"===d.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,i=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",i?h.resolveWith(f,[c,T,w]):h.rejectWith(f,[w,T,v]),w.statusCode(g),g=void 0,l&&p.trigger(i?"ajaxSuccess":"ajaxError",[w,d,i?c:v]),m.fireWith(f,[w,T]),l&&(p.trigger("ajaxComplete",[w,d]),--ot.active||ot.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,a,s,l,u,c,d=ot.ajaxSetup({},t),f=d.context||d,p=d.context&&(f.nodeType||f.jquery)?ot(f):ot.event,h=ot.Deferred(),m=ot.Callbacks("once memory"),g=d.statusCode||{},v={},y={},b=0,x="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c)for(c={};t=Pn.exec(a);)c[t[1].toLowerCase()]=t[2];t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(d.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||x;return u&&u.abort(t),n(0,t),this}};if(h.promise(w).complete=m.add,w.success=w.done,w.error=w.fail,d.url=((e||d.url||Fn)+"").replace(On,"").replace($n,Mn[1]+"//"),d.type=t.method||t.type||d.method||d.type,d.dataTypes=ot.trim(d.dataType||"*").toLowerCase().match(xt)||[""],null==d.crossDomain&&(r=zn.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]===Mn[1]&&r[2]===Mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(Mn[3]||("http:"===Mn[1]?"80":"443")))),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=ot.param(d.data,d.traditional)),R(In,d,t,w),2===b)return w;l=d.global,l&&0===ot.active++&&ot.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!Wn.test(d.type),o=d.url,d.hasContent||(d.data&&(o=d.url+=(qn.test(o)?"&":"?")+d.data,delete d.data),d.cache===!1&&(d.url=Bn.test(o)?o.replace(Bn,"$1_="+Hn++):o+(qn.test(o)?"&":"?")+"_="+Hn++)),d.ifModified&&(ot.lastModified[o]&&w.setRequestHeader("If-Modified-Since",ot.lastModified[o]),ot.etag[o]&&w.setRequestHeader("If-None-Match",ot.etag[o])),(d.data&&d.hasContent&&d.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",d.contentType),w.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+Un+"; q=0.01":""):d.accepts["*"]);for(i in d.headers)w.setRequestHeader(i,d.headers[i]);if(d.beforeSend&&(d.beforeSend.call(f,w,d)===!1||2===b))return w.abort();x="abort";for(i in{success:1,error:1,complete:1})w[i](d[i]);if(u=R(Xn,d,t,w)){w.readyState=1,l&&p.trigger("ajaxSend",[w,d]),d.async&&d.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},d.timeout));try{b=1,u.send(v,n)}catch(T){if(!(2>b))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return ot.get(e,t,n,"json")},getScript:function(e,t){return ot.get(e,void 0,t,"script")}}),ot.each(["get","post"],function(e,t){ot[t]=function(e,n,r,i){return ot.isFunction(n)&&(i=i||r,r=n,n=void 0),ot.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),ot.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ot.fn[t]=function(e){return this.on(t,e)}}),ot._evalUrl=function(e){return ot.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},ot.fn.extend({wrapAll:function(e){if(ot.isFunction(e))return this.each(function(t){ot(this).wrapAll(e.call(this,t))});if(this[0]){var t=ot(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstChild&&1===e.firstChild.nodeType;)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return ot.isFunction(e)?this.each(function(t){ot(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ot(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ot.isFunction(e);return this.each(function(n){ot(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){ot.nodeName(this,"body")||ot(this).replaceWith(this.childNodes)}).end()}}),ot.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0||!rt.reliableHiddenOffsets()&&"none"===(e.style&&e.style.display||ot.css(e,"display"))},ot.expr.filters.visible=function(e){return!ot.expr.filters.hidden(e)};var Jn=/%20/g,Yn=/\[\]$/,Gn=/\r?\n/g,Qn=/^(?:submit|button|image|reset|file)$/i,Kn=/^(?:input|select|textarea|keygen)/i;ot.param=function(e,t){var n,r=[],i=function(e,t){t=ot.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=ot.ajaxSettings&&ot.ajaxSettings.traditional),ot.isArray(e)||e.jquery&&!ot.isPlainObject(e))ot.each(e,function(){i(this.name,this.value)});else for(n in e)I(n,e[n],t,i);return r.join("&").replace(Jn,"+")},ot.fn.extend({serialize:function(){return ot.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=ot.prop(this,"elements");return e?ot.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!ot(this).is(":disabled")&&Kn.test(this.nodeName)&&!Qn.test(e)&&(this.checked||!Lt.test(e))}).map(function(e,t){var n=ot(this).val();return null==n?null:ot.isArray(n)?ot.map(n,function(e){return{name:t.name,value:e.replace(Gn,"\r\n")}}):{name:t.name,value:n.replace(Gn,"\r\n")}}).get()}}),ot.ajaxSettings.xhr=void 0!==e.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&X()||U()}:X;var Zn=0,er={},tr=ot.ajaxSettings.xhr();e.ActiveXObject&&ot(e).on("unload",function(){for(var e in er)er[e](void 0,!0)}),rt.cors=!!tr&&"withCredentials"in tr,tr=rt.ajax=!!tr,tr&&ot.ajaxTransport(function(e){if(!e.crossDomain||rt.cors){var t;return{send:function(n,r){var i,o=e.xhr(),a=++Zn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)void 0!==n[i]&&o.setRequestHeader(i,n[i]+"");o.send(e.hasContent&&e.data||null),t=function(n,i){var s,l,u;if(t&&(i||4===o.readyState))if(delete er[a],t=void 0,o.onreadystatechange=ot.noop,i)4!==o.readyState&&o.abort();else{u={},s=o.status,"string"==typeof o.responseText&&(u.text=o.responseText);try{l=o.statusText}catch(c){l=""}s||!e.isLocal||e.crossDomain?1223===s&&(s=204):s=u.text?200:404}u&&r(s,l,u,o.getAllResponseHeaders())},e.async?4===o.readyState?setTimeout(t):o.onreadystatechange=er[a]=t:t()},abort:function(){t&&t(void 0,!0)}}}}),ot.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return ot.globalEval(e),e}}}),ot.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),ot.ajaxTransport("script",function(e){if(e.crossDomain){var t,n=mt.head||ot("head")[0]||mt.documentElement;return{send:function(r,i){t=mt.createElement("script"),t.async=!0,e.scriptCharset&&(t.charset=e.scriptCharset),t.src=e.url,t.onload=t.onreadystatechange=function(e,n){(n||!t.readyState||/loaded|complete/.test(t.readyState))&&(t.onload=t.onreadystatechange=null,t.parentNode&&t.parentNode.removeChild(t),t=null,n||i(200,"success"))},n.insertBefore(t,n.firstChild)},abort:function(){t&&t.onload(void 0,!0)}}}});var nr=[],rr=/(=)\?(?=&|$)|\?\?/;ot.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nr.pop()||ot.expando+"_"+Hn++;return this[e]=!0,e}}),ot.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(rr.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&rr.test(t.data)&&"data");return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=ot.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(rr,"$1"+i):t.jsonp!==!1&&(t.url+=(qn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||ot.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,nr.push(i)),a&&ot.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),ot.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||mt;var r=ft.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=ot.buildFragment([e],t,i),i&&i.length&&ot(i).remove(),ot.merge([],r.childNodes))};var ir=ot.fn.load;ot.fn.load=function(e,t,n){if("string"!=typeof e&&ir)return ir.apply(this,arguments);var r,i,o,a=this,s=e.indexOf(" ");return s>=0&&(r=e.slice(s,e.length),e=e.slice(0,s)),ot.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),a.length>0&&ot.ajax({url:e,type:o,dataType:"html",data:t}).done(function(e){i=arguments,a.html(r?ot("<div>").append(ot.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,i||[e.responseText,t,e])}),this},ot.expr.filters.animated=function(e){return ot.grep(ot.timers,function(t){return e===t.elem}).length};var or=e.document.documentElement;ot.offset={setOffset:function(e,t,n){var r,i,o,a,s,l,u,c=ot.css(e,"position"),d=ot(e),f={};"static"===c&&(e.style.position="relative"),s=d.offset(),o=ot.css(e,"top"),l=ot.css(e,"left"),u=("absolute"===c||"fixed"===c)&&ot.inArray("auto",[o,l])>-1,u?(r=d.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(l)||0),ot.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):d.css(f)}},ot.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){ot.offset.setOffset(this,e,t)});var t,n,r={top:0,left:0},i=this[0],o=i&&i.ownerDocument;if(o)return t=o.documentElement,ot.contains(t,i)?(typeof i.getBoundingClientRect!==Nt&&(r=i.getBoundingClientRect()),n=V(o),{top:r.top+(n.pageYOffset||t.scrollTop)-(t.clientTop||0),left:r.left+(n.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}):r},position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===ot.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),ot.nodeName(e[0],"html")||(n=e.offset()),n.top+=ot.css(e[0],"borderTopWidth",!0),n.left+=ot.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-ot.css(r,"marginTop",!0),left:t.left-n.left-ot.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||or;e&&!ot.nodeName(e,"html")&&"static"===ot.css(e,"position");)e=e.offsetParent;return e||or})}}),ot.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n=/Y/.test(t);ot.fn[e]=function(r){return jt(this,function(e,r,i){var o=V(e);return void 0===i?o?t in o?o[t]:o.document.documentElement[r]:e[r]:(o?o.scrollTo(n?ot(o).scrollLeft():i,n?i:ot(o).scrollTop()):e[r]=i,void 0)},e,r,arguments.length,null)}}),ot.each(["top","left"],function(e,t){ot.cssHooks[t]=k(rt.pixelPosition,function(e,n){return n?(n=nn(e,t),on.test(n)?ot(e).position()[t]+"px":n):void 0})}),ot.each({Height:"height",Width:"width"},function(e,t){ot.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){ot.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border");return jt(this,function(t,n,r){var i;return ot.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?ot.css(t,n,a):ot.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),ot.fn.size=function(){return this.length},ot.fn.andSelf=ot.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return ot});var ar=e.jQuery,sr=e.$;return ot.noConflict=function(t){return e.$===ot&&(e.$=sr),t&&e.jQuery===ot&&(e.jQuery=ar),ot},typeof t===Nt&&(e.jQuery=e.$=ot),ot});
!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this.drag=a.extend({},m),this.state=a.extend({},n),this.e=a.extend({},o),this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._invalidated={},this._pipe=[],a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a[0].toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Pipe,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}function f(a){if(a.touches!==d)return{x:a.touches[0].pageX,y:a.touches[0].pageY};if(a.touches===d){if(a.pageX!==d)return{x:a.pageX,y:a.pageY};if(a.pageX===d)return{x:a.clientX,y:a.clientY}}}function g(a){var b,d,e=c.createElement("div"),f=a;for(b in f)if(d=f[b],"undefined"!=typeof e.style[d])return e=null,[d,b];return[!1]}function h(){return g(["transition","WebkitTransition","MozTransition","OTransition"])[1]}function i(){return g(["transform","WebkitTransform","MozTransform","OTransform","msTransform"])[0]}function j(){return g(["perspective","webkitPerspective","MozPerspective","OPerspective","MsPerspective"])[0]}function k(){return"ontouchstart"in b||!!navigator.msMaxTouchPoints}function l(){return b.navigator.msPointerEnabled}var m,n,o;m={start:0,startX:0,startY:0,current:0,currentX:0,currentY:0,offsetX:0,offsetY:0,distance:null,startTime:0,endTime:0,updatedX:0,targetEl:null},n={isTouch:!1,isScrolling:!1,isSwiping:!1,direction:!1,inMotion:!1},o={_onDragStart:null,_onDragMove:null,_onDragEnd:null,_transitionEnd:null,_resizer:null,_responsiveCall:null,_goToLoop:null,_checkVisibile:null},e.Defaults={items:3,loop:!1,center:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,responsiveClass:!1,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",themeClass:"owl-theme",baseClass:"owl-carousel",itemClass:"owl-item",centerClass:"center",activeClass:"active"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Plugins={},e.Pipe=[{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){var a=this._clones,b=this.$stage.children(".cloned");(b.length!==a.length||!this.settings.loop&&a.length>0)&&(this.$stage.children(".cloned").remove(),this._clones=[])}},{filter:["items","settings"],run:function(){var a,b,c=this._clones,d=this._items,e=this.settings.loop?c.length-Math.max(2*this.settings.items,4):0;for(a=0,b=Math.abs(e/2);b>a;a++)e>0?(this.$stage.children().eq(d.length+c.length-1).remove(),c.pop(),this.$stage.children().eq(0).remove(),c.pop()):(c.push(c.length/2),this.$stage.append(d[c[c.length-1]].clone().addClass("cloned")),c.push(d.length-1-(c.length-1)/2),this.$stage.prepend(d[c[c.length-1]].clone().addClass("cloned")))}},{filter:["width","items","settings"],run:function(){var a,b,c,d=this.settings.rtl?1:-1,e=(this.width()/this.settings.items).toFixed(3),f=0;for(this._coordinates=[],b=0,c=this._clones.length+this._items.length;c>b;b++)a=this._mergers[this.relative(b)],a=this.settings.mergeFit&&Math.min(a,this.settings.items)||a,f+=(this.settings.autoWidth?this._items[this.relative(b)].width()+this.settings.margin:e*a)*d,this._coordinates.push(f)}},{filter:["width","items","settings"],run:function(){var b,c,d=(this.width()/this.settings.items).toFixed(3),e={width:Math.abs(this._coordinates[this._coordinates.length-1])+2*this.settings.stagePadding,"padding-left":this.settings.stagePadding||"","padding-right":this.settings.stagePadding||""};if(this.$stage.css(e),e={width:this.settings.autoWidth?"auto":d-this.settings.margin},e[this.settings.rtl?"margin-left":"margin-right"]=this.settings.margin,!this.settings.autoWidth&&a.grep(this._mergers,function(a){return a>1}).length>0)for(b=0,c=this._coordinates.length;c>b;b++)e.width=Math.abs(this._coordinates[b])-Math.abs(this._coordinates[b-1]||0)-this.settings.margin,this.$stage.children().eq(b).css(e);else this.$stage.children().css(e)}},{filter:["width","items","settings"],run:function(a){a.current&&this.reset(this.$stage.children().index(a.current))}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;d>c;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children("."+this.settings.activeClass).removeClass(this.settings.activeClass),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass(this.settings.activeClass),this.settings.center&&(this.$stage.children("."+this.settings.centerClass).removeClass(this.settings.centerClass),this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))}}],e.prototype.initialize=function(){if(this.trigger("initialize"),this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl",this.settings.rtl),this.browserSupport(),this.settings.autoWidth&&this.state.imagesLoaded!==!0){var b,c,e;if(b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&0>=e)return this.preloadAutoWidthImages(b),!1}this.$element.addClass("owl-loading"),this.$stage=a("<"+this.settings.stageElement+' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this._width=this.$element.width(),this.refresh(),this.$element.removeClass("owl-loading").addClass("owl-loaded"),this.eventsCall(),this.internalEvents(),this.addTriggerableEvents(),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){b>=a&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),delete e.responsive,e.responsiveClass&&this.$element.attr("class",function(a,b){return b.replace(/\b owl-responsive-\S+/g,"")}).addClass("owl-responsive-"+d)):e=a.extend({},this.options),(null===this.settings||this._breakpoint!==d)&&(this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}}))},e.prototype.optionsLogic=function(){this.$element.toggleClass("owl-center",this.settings.center),this.settings.loop&&this._items.length<this.settings.items&&(this.settings.loop=!1),this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.settings.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};c>b;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={}},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){if(0===this._items.length)return!1;(new Date).getTime();this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$stage.addClass("owl-refresh"),this.update(),this.$stage.removeClass("owl-refresh"),this.state.orientation=b.orientation,this.watchVisibility(),this.trigger("refreshed")},e.prototype.eventsCall=function(){this.e._onDragStart=a.proxy(function(a){this.onDragStart(a)},this),this.e._onDragMove=a.proxy(function(a){this.onDragMove(a)},this),this.e._onDragEnd=a.proxy(function(a){this.onDragEnd(a)},this),this.e._onResize=a.proxy(function(a){this.onResize(a)},this),this.e._transitionEnd=a.proxy(function(a){this.transitionEnd(a)},this),this.e._preventClick=a.proxy(function(a){this.preventClick(a)},this)},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this.e._onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return this._items.length?this._width===this.$element.width()?!1:this.trigger("resize").isDefaultPrevented()?!1:(this._width=this.$element.width(),this.invalidate("width"),this.refresh(),void this.trigger("resized")):!1},e.prototype.eventsRouter=function(a){var b=a.type;"mousedown"===b||"touchstart"===b?this.onDragStart(a):"mousemove"===b||"touchmove"===b?this.onDragMove(a):"mouseup"===b||"touchend"===b?this.onDragEnd(a):"touchcancel"===b&&this.onDragEnd(a)},e.prototype.internalEvents=function(){var c=(k(),l());this.settings.mouseDrag?(this.$stage.on("mousedown",a.proxy(function(a){this.eventsRouter(a)},this)),this.$stage.on("dragstart",function(){return!1}),this.$stage.get(0).onselectstart=function(){return!1}):this.$element.addClass("owl-text-select-on"),this.settings.touchDrag&&!c&&this.$stage.on("touchstart touchcancel",a.proxy(function(a){this.eventsRouter(a)},this)),this.transitionEndVendor&&this.on(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd,!1),this.settings.responsive!==!1&&this.on(b,"resize",a.proxy(this.onThrottledResize,this))},e.prototype.onDragStart=function(d){var e,g,h,i;if(e=d.originalEvent||d||b.event,3===e.which||this.state.isTouch)return!1;if("mousedown"===e.type&&this.$stage.addClass("owl-grab"),this.trigger("drag"),this.drag.startTime=(new Date).getTime(),this.speed(0),this.state.isTouch=!0,this.state.isScrolling=!1,this.state.isSwiping=!1,this.drag.distance=0,g=f(e).x,h=f(e).y,this.drag.offsetX=this.$stage.position().left,this.drag.offsetY=this.$stage.position().top,this.settings.rtl&&(this.drag.offsetX=this.$stage.position().left+this.$stage.width()-this.width()+this.settings.margin),this.state.inMotion&&this.support3d)i=this.getTransformProperty(),this.drag.offsetX=i,this.animate(i),this.state.inMotion=!0;else if(this.state.inMotion&&!this.support3d)return this.state.inMotion=!1,!1;this.drag.startX=g-this.drag.offsetX,this.drag.startY=h-this.drag.offsetY,this.drag.start=g-this.drag.startX,this.drag.targetEl=e.target||e.srcElement,this.drag.updatedX=this.drag.start,("IMG"===this.drag.targetEl.tagName||"A"===this.drag.targetEl.tagName)&&(this.drag.targetEl.draggable=!1),a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents",a.proxy(function(a){this.eventsRouter(a)},this))},e.prototype.onDragMove=function(a){var c,e,g,h,i,j;this.state.isTouch&&(this.state.isScrolling||(c=a.originalEvent||a||b.event,e=f(c).x,g=f(c).y,this.drag.currentX=e-this.drag.startX,this.drag.currentY=g-this.drag.startY,this.drag.distance=this.drag.currentX-this.drag.offsetX,this.drag.distance<0?this.state.direction=this.settings.rtl?"right":"left":this.drag.distance>0&&(this.state.direction=this.settings.rtl?"left":"right"),this.settings.loop?this.op(this.drag.currentX,">",this.coordinates(this.minimum()))&&"right"===this.state.direction?this.drag.currentX-=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length):this.op(this.drag.currentX,"<",this.coordinates(this.maximum()))&&"left"===this.state.direction&&(this.drag.currentX+=(this.settings.center&&this.coordinates(0))-this.coordinates(this._items.length)):(h=this.coordinates(this.settings.rtl?this.maximum():this.minimum()),i=this.coordinates(this.settings.rtl?this.minimum():this.maximum()),j=this.settings.pullDrag?this.drag.distance/5:0,this.drag.currentX=Math.max(Math.min(this.drag.currentX,h+j),i+j)),(this.drag.distance>8||this.drag.distance<-8)&&(c.preventDefault!==d?c.preventDefault():c.returnValue=!1,this.state.isSwiping=!0),this.drag.updatedX=this.drag.currentX,(this.drag.currentY>16||this.drag.currentY<-16)&&this.state.isSwiping===!1&&(this.state.isScrolling=!0,this.drag.updatedX=this.drag.start),this.animate(this.drag.updatedX)))},e.prototype.onDragEnd=function(b){var d,e,f;if(this.state.isTouch){if("mouseup"===b.type&&this.$stage.removeClass("owl-grab"),this.trigger("dragged"),this.drag.targetEl.removeAttribute("draggable"),this.state.isTouch=!1,this.state.isScrolling=!1,this.state.isSwiping=!1,0===this.drag.distance&&this.state.inMotion!==!0)return this.state.inMotion=!1,!1;this.drag.endTime=(new Date).getTime(),d=this.drag.endTime-this.drag.startTime,e=Math.abs(this.drag.distance),(e>3||d>300)&&this.removeClick(this.drag.targetEl),f=this.closest(this.drag.updatedX),this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(f),this.invalidate("position"),this.update(),this.settings.pullDrag||this.drag.updatedX!==this.coordinates(f)||this.transitionEnd(),this.drag.distance=0,a(c).off(".owl.dragEvents")}},e.prototype.removeClick=function(c){this.drag.targetEl=c,a(c).on("click.preventClick",this.e._preventClick),b.setTimeout(function(){a(c).off("click.preventClick")},300)},e.prototype.preventClick=function(b){b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),a(b.target).off("click.preventClick")},e.prototype.getTransformProperty=function(){var a,c;return a=b.getComputedStyle(this.$stage.get(0),null).getPropertyValue(this.vendorName+"transform"),a=a.replace(/matrix(3d)?\(|\)/g,"").split(","),c=16===a.length,c!==!0?a[4]:a[12]},e.prototype.closest=function(b){var c=-1,d=30,e=this.width(),f=this.coordinates();return this.settings.freeDrag||a.each(f,a.proxy(function(a,g){return b>g-d&&g+d>b?c=a:this.op(b,"<",g)&&this.op(b,">",f[a+1]||g-e)&&(c="left"===this.state.direction?a+1:a),-1===c},this)),this.settings.loop||(this.op(b,">",f[this.minimum()])?c=b=this.minimum():this.op(b,"<",f[this.maximum()])&&(c=b=this.maximum())),c},e.prototype.animate=function(b){this.trigger("translate"),this.state.inMotion=this.speed()>0,this.support3d?this.$stage.css({transform:"translate3d("+b+"px,0px, 0px)",transition:this.speed()/1e3+"s"}):this.state.isTouch?this.$stage.css({left:b+"px"}):this.$stage.animate({left:b},this.speed()/1e3,this.settings.fallbackEasing,a.proxy(function(){this.state.inMotion&&this.transitionEnd()},this))},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(a){this._invalidated[a]=!0},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(b,c){var e=c?this._items.length:this._items.length+this._clones.length;return!a.isNumeric(b)||1>e?d:b=this._clones.length?(b%e+e)%e:Math.max(this.minimum(c),Math.min(this.maximum(c),b))},e.prototype.relative=function(a){return a=this.normalize(a),a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=0,f=this.settings;if(a)return this._items.length-1;if(!f.loop&&f.center)b=this._items.length-1;else if(f.loop||f.center)if(f.loop||f.center)b=this._items.length+f.items;else{if(!f.autoWidth&&!f.merge)throw"Can not detect maximum absolute position.";for(revert=f.rtl?1:-1,c=this.$stage.width()-this.$element.width();(d=this.coordinates(e))&&!(d*revert>=c);)b=++e}else b=this._items.length-f.items;return b},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c=null;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[b-1]||0))/2*(this.settings.rtl?-1:1)):c=this._coordinates[b-1]||0,c)},e.prototype.duration=function(a,b,c){return Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(c,d){if(this.settings.loop){var e=c-this.relative(this.current()),f=this.current(),g=this.current(),h=this.current()+e,i=0>g-h?!0:!1,j=this._clones.length+this._items.length;h<this.settings.items&&i===!1?(f=g+this._items.length,this.reset(f)):h>=j-this.settings.items&&i===!0&&(f=g-this._items.length,this.reset(f)),b.clearTimeout(this.e._goToLoop),this.e._goToLoop=b.setTimeout(a.proxy(function(){this.speed(this.duration(this.current(),f+e,d)),this.current(f+e),this.update()},this),30)}else this.speed(this.duration(this.current(),c,d)),this.current(c),this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.transitionEnd=function(a){return a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0))?!1:(this.state.inMotion=!1,void this.trigger("translated"))},e.prototype.viewport=function(){var d;if(this.options.responsiveBaseElement!==b)d=a(this.options.responsiveBaseElement).width();else if(b.innerWidth)d=b.innerWidth;else{if(!c.documentElement||!c.documentElement.clientWidth)throw"Can not detect viewport width.";d=c.documentElement.clientWidth}return d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)},this)),this.reset(a.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(a,b){b=b===d?this._items.length:this.normalize(b,!0),this.trigger("add",{content:a,position:b}),0===this._items.length||b===this._items.length?(this.$stage.append(a),this._items.push(a),this._mergers.push(1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)):(this._items[b].before(a),this._items.splice(b,0,a),this._mergers.splice(b,0,1*a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge")||1)),this.invalidate("items"),this.trigger("added",{content:a,position:b})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.addTriggerableEvents=function(){var b=a.proxy(function(b,c){return a.proxy(function(a){a.relatedTarget!==this&&(this.suppress([c]),b.apply(this,[].slice.call(arguments,1)),this.release([c]))},this)},this);a.each({next:this.next,prev:this.prev,to:this.to,destroy:this.destroy,refresh:this.refresh,replace:this.replace,add:this.add,remove:this.remove},a.proxy(function(a,c){this.$element.on(a+".owl.carousel",b(c,a+".owl.carousel"))},this))},e.prototype.watchVisibility=function(){function c(a){return a.offsetWidth>0&&a.offsetHeight>0}function d(){c(this.$element.get(0))&&(this.$element.removeClass("owl-hidden"),this.refresh(),b.clearInterval(this.e._checkVisibile))}c(this.$element.get(0))||(this.$element.addClass("owl-hidden"),b.clearInterval(this.e._checkVisibile),this.e._checkVisibile=b.setInterval(a.proxy(d,this),500))},e.prototype.preloadAutoWidthImages=function(b){var c,d,e,f;c=0,d=this,b.each(function(g,h){e=a(h),f=new Image,f.onload=function(){c++,e.attr("src",f.src),e.css("opacity",1),c>=b.length&&(d.state.imagesLoaded=!0,d.initialize())},f.src=e.attr("src")||e.attr("data-src")||e.attr("data-src-retina")})},e.prototype.destroy=function(){this.$element.hasClass(this.settings.themeClass)&&this.$element.removeClass(this.settings.themeClass),this.settings.responsive!==!1&&a(b).off("resize.owl.carousel"),this.transitionEndVendor&&this.off(this.$stage.get(0),this.transitionEndVendor,this.e._transitionEnd);for(var d in this._plugins)this._plugins[d].destroy();(this.settings.mouseDrag||this.settings.touchDrag)&&(this.$stage.off("mousedown touchstart touchcancel"),a(c).off(".owl.dragEvents"),this.$stage.get(0).onselectstart=function(){},this.$stage.off("dragstart",function(){return!1})),this.$element.off(".owl"),this.$stage.children(".cloned").remove(),this.e=null,this.$element.removeData("owlCarousel"),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$stage.unwrap()},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:c>a;case">":return d?c>a:a>c;case">=":return d?c>=a:a>=c;case"<=":return d?a>=c:c>=a}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d){var e={item:{count:this._items.length,index:this.current()}},f=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),g=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},e,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(g)}),this.$element.trigger(g),this.settings&&"function"==typeof this.settings[f]&&this.settings[f].apply(this,g)),g},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.browserSupport=function(){if(this.support3d=j(),this.support3d){this.transformVendor=i();var a=["transitionend","webkitTransitionEnd","transitionend","oTransitionEnd"];this.transitionEndVendor=a[h()],this.vendorName=this.transformVendor.replace(/Transform/i,""),this.vendorName=""!==this.vendorName?"-"+this.vendorName.toLowerCase()+"-":""}this.state.orientation=b.orientation},a.fn.owlCarousel=function(b){return this.each(function(){a(this).data("owlCarousel")||a(this).data("owlCarousel",new e(this,b))})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b){var c=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,d=c.center&&Math.ceil(c.items/2)||c.items,e=c.center&&-1*d||0,f=(b.property&&b.property.value||this._core.current())+e,g=this._core.clones().length,h=a.proxy(function(a,b){this.load(b)},this);e++<d;)this.load(g/2+this._core.relative(f)),g&&a.each(this._core.clones(this._core.relative(f++)),h)},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this._core.$element.on(this._handlers)};c.Defaults={lazyLoad:!1},c.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":"url("+g+")",opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},c.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=c}(window.Zepto||window.jQuery,window,document),function(a){var b=function(c){this._core=c,this._handlers={"initialized.owl.carousel":a.proxy(function(){this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass)===this._core.$stage.children().eq(this._core.current())&&this.update()},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this._core.$element.on(this._handlers)};b.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},b.prototype.update=function(){this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)},b.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=b}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this._core=b,this._videos={},this._playing=null,this._fullscreen=!1,this._handlers={"resize.owl.carousel":a.proxy(function(a){this._core.settings.video&&!this.isInFullScreen()&&a.preventDefault()},this),"refresh.owl.carousel changed.owl.carousel":a.proxy(function(){this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))},this)},this._core.options=a.extend({},d.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};d.Defaults={video:!1,videoHeight:!1,videoWidth:!1},d.prototype.fetch=function(a,b){var c=a.attr("data-vimeo-id")?"vimeo":"youtube",d=a.attr("data-vimeo-id")||a.attr("data-youtube-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else{if(!(d[3].indexOf("vimeo")>-1))throw new Error("Video URL not supported.");c="vimeo"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},d.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};return b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length?(l(h.attr(i)),h.remove(),!1):void("youtube"===c.type?(f="http://img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type&&a.ajax({type:"GET",url:"http://vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}))},d.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null},d.prototype.play=function(b){this._core.trigger("play",null,"video"),this._playing&&this.stop();var c,d,e=a(b.target||b.srcElement),f=e.closest("."+this._core.settings.itemClass),g=this._videos[f.attr("data-video")],h=g.width||"100%",i=g.height||this._core.$stage.height();"youtube"===g.type?c='<iframe width="'+h+'" height="'+i+'" src="http://www.youtube.com/embed/'+g.id+"?autoplay=1&v="+g.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===g.type&&(c='<iframe src="http://player.vimeo.com/video/'+g.id+'?autoplay=1" width="'+h+'" height="'+i+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'),f.addClass("owl-video-playing"),this._playing=f,d=a('<div style="height:'+i+"px; width:"+h+'px" class="owl-video-frame">'+c+"</div>"),e.after(d)},d.prototype.isInFullScreen=function(){var d=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return d&&a(d).parent().hasClass("owl-video-frame")&&(this._core.speed(0),this._fullscreen=!0),d&&this._fullscreen&&this._playing?!1:this._fullscreen?(this._fullscreen=!1,!1):this._playing&&this._core.state.orientation!==b.orientation?(this._core.state.orientation=b.orientation,!1):!0},d.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=d}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){this.swapping="translated"==a.type},this),"translate.owl.carousel":a.proxy(function(){this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&this.core.support3d){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c)),f&&e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",c))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.transitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c){var d=function(b){this.core=b,this.core.options=a.extend({},d.Defaults,this.core.options),this.handlers={"translated.owl.carousel refreshed.owl.carousel":a.proxy(function(){this.autoplay()
},this),"play.owl.autoplay":a.proxy(function(a,b,c){this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(){this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this.core.settings.autoplayHoverPause&&this.autoplay()},this)},this.core.$element.on(this.handlers)};d.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},d.prototype.autoplay=function(){this.core.settings.autoplay&&!this.core.state.videoPlay?(b.clearInterval(this.interval),this.interval=b.setInterval(a.proxy(function(){this.play()},this),this.core.settings.autoplayTimeout)):b.clearInterval(this.interval)},d.prototype.play=function(){return c.hidden===!0||this.core.state.isTouch||this.core.state.isScrolling||this.core.state.isSwiping||this.core.state.inMotion?void 0:this.core.settings.autoplay===!1?void b.clearInterval(this.interval):void this.core.next(this.core.settings.autoplaySpeed)},d.prototype.stop=function(){b.clearInterval(this.interval)},d.prototype.pause=function(){b.clearInterval(this.interval)},d.prototype.destroy=function(){var a,c;b.clearInterval(this.interval);for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=d}(window.Zepto||window.jQuery,window,document),function(a){"use strict";var b=function(c){this._core=c,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"add.owl.carousel":a.proxy(function(b){this._core.settings.dotsData&&this._templates.splice(b.position,0,a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))},this),"remove.owl.carousel prepared.owl.carousel":a.proxy(function(a){this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"change.owl.carousel":a.proxy(function(a){if("position"==a.property.name&&!this._core.state.revert&&!this._core.settings.loop&&this._core.settings.navRewind){var b=this._core.current(),c=this._core.maximum(),d=this._core.minimum();a.data=a.property.value>c?b>=c?d:c:a.property.value<d?c:a.property.value}},this),"changed.owl.carousel":a.proxy(function(a){"position"==a.property.name&&this.draw()},this),"refreshed.owl.carousel":a.proxy(function(){this._initialized||(this.initialize(),this._initialized=!0),this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation")},this)},this._core.options=a.extend({},b.Defaults,this._core.options),this.$element.on(this._handlers)};b.Defaults={nav:!1,navRewind:!0,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotData:!1,dotsSpeed:!1,dotsContainer:!1,controlsClass:"owl-controls"},b.prototype.initialize=function(){var b,c,d=this._core.settings;d.dotsData||(this._templates=[a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]),d.navContainer&&d.dotsContainer||(this._controls.$container=a("<div>").addClass(d.controlsClass).appendTo(this.$element)),this._controls.$indicators=d.dotsContainer?a(d.dotsContainer):a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container),this._controls.$indicators.on("click","div",a.proxy(function(b){var c=a(b.target).parent().is(this._controls.$indicators)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(c,d.dotsSpeed)},this)),b=d.navContainer?a(d.navContainer):a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container),this._controls.$next=a("<"+d.navElement+">"),this._controls.$previous=this._controls.$next.clone(),this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click",a.proxy(function(){this.prev(d.navSpeed)},this)),this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click",a.proxy(function(){this.next(d.navSpeed)},this));for(c in this._overrides)this._core[c]=a.proxy(this[c],this)},b.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},b.prototype.update=function(){var a,b,c,d=this._core.settings,e=this._core.clones().length/2,f=e+this._core.items().length,g=d.center||d.autoWidth||d.dotData?1:d.dotsEach||d.items;if("page"!==d.slideBy&&(d.slideBy=Math.min(d.slideBy,d.items)),d.dots||"page"==d.slideBy)for(this._pages=[],a=e,b=0,c=0;f>a;a++)(b>=g||0===b)&&(this._pages.push({start:a-e,end:a-e+g-1}),b=0,++c),b+=this._core.mergers(this._core.relative(a))},b.prototype.draw=function(){var b,c,d="",e=this._core.settings,f=(this._core.$stage.children(),this._core.relative(this._core.current()));if(!e.nav||e.loop||e.navRewind||(this._controls.$previous.toggleClass("disabled",0>=f),this._controls.$next.toggleClass("disabled",f>=this._core.maximum())),this._controls.$previous.toggle(e.nav),this._controls.$next.toggle(e.nav),e.dots){if(b=this._pages.length-this._controls.$indicators.children().length,e.dotData&&0!==b){for(c=0;c<this._controls.$indicators.children().length;c++)d+=this._templates[this._core.relative(c)];this._controls.$indicators.html(d)}else b>0?(d=new Array(b+1).join(this._templates[0]),this._controls.$indicators.append(d)):0>b&&this._controls.$indicators.children().slice(b).remove();this._controls.$indicators.find(".active").removeClass("active"),this._controls.$indicators.children().eq(a.inArray(this.current(),this._pages)).addClass("active")}this._controls.$indicators.toggle(e.dots)},b.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotData?1:c.dotsEach||c.items)}},b.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,function(a){return a.start<=b&&a.end>=b}).pop()},b.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},b.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},b.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},b.prototype.to=function(b,c,d){var e;d?a.proxy(this._overrides.to,this._core)(b,c):(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c))},a.fn.owlCarousel.Constructor.Plugins.Navigation=b}(window.Zepto||window.jQuery,window,document),function(a,b){"use strict";var c=function(d){this._core=d,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(){"URLHash"==this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){var c=a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");this._hashes[c]=b.content},this)},this._core.options=a.extend({},c.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(){var a=b.location.hash.substring(1),c=this._core.$stage.children(),d=this._hashes[a]&&c.index(this._hashes[a])||0;return a?void this._core.to(d,!1,!0):!1},this))};c.Defaults={URLhashListener:!1},c.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=c}(window.Zepto||window.jQuery,window,document);
/*! plugin juery to find if element is on screen */

$.fn.isOnScreen = function(o){
	
	var win = $(window);
	var _offset;
	// var _header = $('.header')
	// var breadcrumbs = $('.breadcrumbs')
	_offset = typeof o !== "undefined" && o !== null ? o : 0;
	
	// _header_height = _header.length === 1 ? _header.height() : 0;
	// breadcrumbs_height = breadcrumbs.length === 1 ? breadcrumbs.height() : 0;

	var viewport = {
		// top : win.scrollTop() + _header_height + breadcrumbs_height -_offset,
		top : win.scrollTop() - _offset,
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();
	
	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();
	
	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
	
};
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', '${key @ context="scriptString"}', 'auto');
ga('send', 'pageview');
ga('set', 'anonymizeIp', true);

var bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var messageBox;

var confirmCookiePolicy = function () {
    var accetta = document.getElementById("radio4").checked;

    if (accetta) {
        ckmng.acceptAdv();
        return;
    }
    else {
        ckmng.revokeAdv();
    }
}


var acceptCookiePolicy = function () {
    var a = document.getElementById("radio4").checked == true ? "acconsento" : "nego il consenso";
    ga('send', 'event', 'cookie-button', a, 'conferma');
}

window.AnimationInOut = (function () {
    function AnimationInOut(ref) {
        this.ref = ref;
        this.onScroll = bind(this.onScroll, this);
        this.w = $(window);
        this.items = this.ref.find('.js-in-out-item');
        this.w.scroll(this.onScroll);
        this.onScroll();
    }

    AnimationInOut.prototype.onScroll = function () {
        return this.items.each(function () {
            var offset;
            offset = $(this).attr('data-offset') != null ? parseInt($(this).attr('data-offset')) : 0;
            if ($(this).isOnScreen(offset)) {
                $(this).addClass('animation-in');
                if ($(this).hasClass('js-hasSiblings')) {
                    return $($(this).attr('data-sibling')).addClass('animation-in');
                }
            } else {
                if (!$(this).hasClass('js-outOff')) {
                    return $(this).removeClass('animation-in');
                }
            }
        });
    };

    return AnimationInOut;

})();
var bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};
if (!window.console) {
    window.console = {
        log: (function (obj) {
        })
    };
}


function get_hostname(url) {

}

$(document).ready(function () {


    var getIOSVersion, getInternetExplorerVersion, window_ref;
    window_ref = $(window);
    getInternetExplorerVersion = function () {
        var matches, version;
        matches = new RegExp(" MSIE ([0-9].[0-9]);").exec(window.navigator.userAgent);
        version = (matches != null) && matches.length > 1 ? parseInt(matches[1].replace(".0", "")) : -1;
        return version;
    };
    var base = window.location.host;
    var href = window.location.href;
    if (base.indexOf("www.esselungajob.it") !== -1) {
        url = "https://www.esselungajob.it/esselungajob20/services/segnalazione/hide";
    } else {
        url = "https://previewesselungajob20.services.esselunga.it/esselungajob20/services/segnalazione/hide";
    }

    $('#remodal-cancel').click(function () {
        $('#modal').css('display', 'none');
        $('#backmodal').css('display', 'none');
    });
    $('#remodal-close').click(function () {
        $('#modal').css('display', 'none');
        $('#backmodal').css('display', 'none');
    });


    ckPage = $('.content').find('h1').text();
    if ((ckmng.getCookie("cc_advertising") == false) && (!(ckPage === "Cookie Policy"))) {
        $('body').append('<div id="cookie">Questo sito utilizza cookie di profilazione di terzi per inviarti pubblicit&agrave; in linea con le Tue preferenze, se vuoi saperne di pi&ugrave; o negare il consenso a tutti o ad alcuni cookie utilizzati dal sito, <a href="/content/ejb20/it/homepage/cookie-policy.html"><b>clicca qui</b></a>.<br>' +
            'Chiudendo questo banner o accedendo a un qualunque elemento del sito acconsenti all&rsquo;utilizzo dei cookie.<br>' +
            '<a class="close" href="#" onclick="ckmng.acceptAll();">X</a></div>');
        $('#cookie').css('z-index', '10001');
        $('#cookie').css('margin-top', '10001');
    } else if (href.indexOf("cookie-policy") != -1) {
        var check = ckmng.getCookie("cc_advertising");
        if (check == 'yes') {
            document.getElementById("radio4").checked = true;
        }
        else {
            document.getElementById("radio5").checked = true;
        }
    }


    navigarorBack = $('.navigator__back');
    if (navigarorBack != null && navigarorBack.length>0 && href.indexOf("lavora-con-noi") == -1 && href.indexOf("ricerca") != -1) {
        var query = getParameterByName("query");
        var type = getParameterByName("type");
        var region = getParameterByName("region");
        var zone = getParameterByName("zone");
        var position = getParameterByName("position");
        var society = getParameterByName("society");
        var area = getParameterByName("area");
        var typefilter = getParameterByName("typefilter");
        if (query != null) {
            var hrefApp = navigarorBack[0].href;
            hrefApp = '/content/ejb20/it/homepage/ricerca.html' + '?query=' + query;
            if (type != null)
                hrefApp += "&type=" + type
            if (region != null)
                hrefApp += "&region=" + region;
            if (zone != null)
                hrefApp += "&zone=" + zone;
            if (position != null)
                hrefApp += "&position=" + position;
            if (society != null)
                hrefApp += "&society=" + society;
            if (area != null)
                hrefApp += "&area=" + area;
            if (typefilter != null)
                hrefApp += "&typefilter=" + typefilter;
            hrefApp += "&ricerca=true";
            navigarorBack[0].href = hrefApp;
            navigarorEtichetta = navigarorBack[0].parentElement.parentElement.lastElementChild;
            if (navigarorEtichetta != null) {
                navigarorEtichetta.lastElementChild.textContent = "RICERCA";
            }
        }
    }
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        cache: false,
        success: function (json) {
            if (json === true) {
                $("#id_Contattaci").get(0).style.display = 'none';
                $("#id_Contattaci").hide();
            }
        },
        error: function (xhr, status) {
        },
    });

    getIOSVersion = function () {
        var v;
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            v = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
            return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
        } else {
            return false;
        }
    };
    window.ie_version = getInternetExplorerVersion();
    window.has_ios = getIOSVersion();
    window.is_mobile = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) ? true : false;
    window.is_iphone = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) ? true : false;
    window.is_ipad = navigator.userAgent.match(/iPad/i) ? true : false;
    if (window.is_mobile) {
        $('body').addClass('deviceMobile');
    }
    itemCerca = $('#menuCerca');
    if (itemCerca != null) {
        if (window.is_mobile)
            itemCerca.css('display', 'none');
        else
            itemCerca.css('display', '');
    }
    headerSearch = $('#headerSearch');
    if (headerSearch != null) {
        if (window.is_mobile)
            headerSearch.css('display', '');
        else
            headerSearch.css('display', 'none');
    }


    window.breakpointerSizes = {
        s: 768,
        m: 960,
        l: 1024
    };
    window.deviceSizer = new window.breakPointer(breakpointerSizes);

    Modernizr.addTest("highres", function () {
        var dpr;
        dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;
        return !!(dpr > 1);
    });
    if (typeof Modernizr.prefixed("transform") === 'string') {
        window.prefixedTransform = Modernizr.prefixed("transform").replace(/([A-Z])/g, function (str, m1) {
            return "-" + m1.toLowerCase();
        }).replace(/^ms-/, "-ms-");
    }
    window.zDomain = "";
    //-----------------------------------------
    var whichTransitionEvent;

    whichTransitionEvent = (function (_this) {
        return function () {
            var el, t, transitions;
            el = document.createElement('fakeelement');
            transitions = {
                transition: "transitionend",
                OTransition: "oTransitionEnd",
                MozTransition: "transitionend",
                WebkitTransition: "webkitTransitionEnd"
            };
            for (t in transitions) {
                if (el.style[t] !== 'undefined') {
                    return transitions[t];
                }
            }
        };
    })(this);

    window.transitionEnd = whichTransitionEvent();
    //------------------------------------
    window.helpers = {
        getCookie: (function (_this) {
            return function (name) {
                var end, offset, search;
                search = name + "=";
                if (document.cookie.length > 0) {
                    offset = document.cookie.indexOf(search);
                    if (offset !== -1) {
                        offset += search.length;
                        end = document.cookie.indexOf(";", offset);
                        if (end === -1) {
                            end = document.cookie.length;
                        }
                        return unescape(document.cookie.substring(offset, end));
                    }
                }
            };
        })(this),
        setCookie: (function (_this) {
            return function (name, value, exp_days) {
                var exp_date;
                exp_date = new Date();
                exp_date.setDate(exp_date.getDate() + exp_days);
                value = escape(value) + (!(exp_days != null) ? "" : "; expires=" + exp_date.toUTCString()) + (";domain=" + window.zDomain + ";path=/");
                return document.cookie = name + "=" + value;
            };
        })(this),
        deleteCookie: (function (_this) {
            return function (name) {
                return document.cookie = name + " =; expires=Thu, 01 Jan 1970 00:00:01 GMT;domain=" + window.zDomain + ";path=/";
            };
        })(this),
        scrollTo: (function (_this) {
            return function (target) {
                var b, duration, hasSticky, headerHeight, stickeyHeader, stickyHeaderHeight, target_top;
                duration = 350;
                b = $('html,body');
                //headerHeight = deviceSizer.deviceSizeMenu() ? $('.header').height() : 0;
                navFixed = $('.j-stickyNav');
                hasFixed = navFixed.length > 0 ? true : false;
                navFixedHeight = navFixed.outerHeight();
                target_top = Math.floor(target.offset().top - navFixedHeight);
                return b.stop().animate({
                    scrollTop: "" + target_top
                }, {
                    duration: duration,
                    easing: 'swing',
                    complete: function () {
                        stickyHeader = $('.isVisible');
                        hasSticky = stickyHeader.length > 0 ? true : false;
                        stickyHeaderHeight = hasSticky ? stickyHeader.outerHeight(true) : 0;
                        if (hasSticky === true) {
                            return $(window).scrollTop($(window).scrollTop() - stickyHeaderHeight);
                        }
                    }
                });
            };
        })(this),
        createPlayerAPI: (function (_this) {
            return function () {
                var firstScriptTag, tag;
                tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                firstScriptTag = document.getElementsByTagName('script')[0];
                return firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            };
        })(this),
        setNoScroll: (function (_this) {
            return function () {
                $('body').addClass('noScroll');
            };
        })(this),
        removeNoScroll: (function (_this) {
            return function () {
                $('body').removeClass('noScroll');
            };
        })(this)
    };
//--------------------------------------------

    var carousel = $('.j-owlCarousel');

    if (carousel.length > 0) {
        for (var i = 0; i < carousel.length; i++) {
            new CarouselOWL($(carousel[i]));
        }
    }
//----------------------
    var _header = $('.j-header');
    if (_header.length > 0) {
        window.header = new Header(_header);
    }
//----------------------------------
    var imgs = $('.j-imagination');
    if (imgs.length > 0) {
        for (var i = 0; i < imgs.length; i++) {
            new Imagination($(imgs[i]));
        }
    }
//----------------------------------
    var multisliders = $('.js-multipleSlider');

    if (multisliders.length > 0) {
        for (var i = 0; i < multisliders.length; i++) {
            new MultiSlider($(multisliders[i]));
        }
    }
//----------------------------------
    var customselectors = $('.j-customSelect');

    if (customselectors.length > 0) {
        for (var i = 0; i < customselectors.length; i++) {
            new CustomSelect($(customselectors[i]));
        }
    }
    //---------------------------------------

    var searchBtn = $('.j-searchBtn');

    if (searchBtn.length > 0) {
        for (var i = 0; i < searchBtn.length; i++) {
            new Search($(searchBtn[i]));
        }
    }
    //-----------------------------
    var yt_videos = $('.js-ytVideo');
    if (yt_videos.length > 0) {
        for (var i = 0; i < yt_videos.length; i++) {
            new YTvideo($(yt_videos[i]));

        }
    }
    //-------------------------------

    var expandBodies = $('.j-bodyOpen');
    if (expandBodies.length > 0) {
        for (i = p = 0, ref7 = expandBodies.length; 0 <= ref7 ? p < ref7 : p > ref7; i = 0 <= ref7 ? ++p : --p) {
            expand_body = $(expandBodies[i]);
            new ExpandBody(expand_body);
        }
    }

    //---------------------------------------

    // var fileInput = $('.j-fileInput');

    // if (fileInput.length > 0) {
    //   for (var i=0;i<fileInput.length;i++) {
    //     new FileInput($(fileInput[i]));
    //   }
    // }

    //---------------------------------------

    var scrollBtns = $('.j-scrollButton');

    if (scrollBtns.length > 0) {
        for (var i = 0; i < scrollBtns.length; i++) {
            new ScrollBtn($(scrollBtns[i]));
        }
    }

    //---------------------------------------

    var _animation = $('.js-animation');

    if (_animation.length > 0) {
        window.animation = new AnimationInOut(_animation);
    }
//---------------------------------------

    var navsFixed = $('.j-stickyNav');
    if (navsFixed.length > 0) {
        for (var i = 0; i < navsFixed.length; i++) {
            new FixedNav($(navsFixed[i]));
        }
    }


    //---------------------------------------

    var backtotop = $('.js-backToTop');

    if (backtotop.length > 0) {
        for (var i = 0; i < backtotop.length; i++) {
            new BackToTop($(backtotop[i]));
        }
    }

    var btnOpen = $('.j-openEdit');

    if (btnOpen.length > 0) {
        for (var i = 0; i < btnOpen.length; i++) {
            new overEdit($(btnOpen[i]));
        }
    }


    //---------more info Wrapper toggle-------

    var moreinfo = $('.j-moreInfoWrapper');

    if (moreinfo.length > 0) {
        for (var i = 0; i < moreinfo.length; i++) {
            new moreInfo($(moreinfo[i]));
        }
    }


    //---------------------------------------

    var parallaxItems = $('.j-parallaxItem');

    if (parallaxItems.length > 0) {
        new Parallax($(parallaxItems[i]));
    }

    // ------------------------------------


    var faqfilter = $('.js-faqFilter');

    if (faqfilter.length > 0) {
        for (var i = 0; i < faqfilter.length; i++) {
            new faqFilter($(faqfilter[i]));
        }
    }


    var historyfilter = $('.js-historyFilter');

    if (historyfilter.length > 0) {
        for (var i = 0; i < historyfilter.length; i++) {
            new historyFilter($(historyfilter[i]));
        }
    }


    var sliderhome = $('.canvas__blockAux');

    if (sliderhome.length > 0) {
        for (var i = 0; i < sliderhome.length; i++) {
            new sliderHome($(sliderhome[i]));
        }
    }

});


$(window).load(function () {
});

window.BackToTop = (function () {
    function BackToTop(ref) {
        var b, duration;
        this.ref = ref;
        duration = 500;
        b = $('html,body');
        this.ref.click((function (_this) {
            return function (e) {
                e.preventDefault();
                return b.stop().animate({
                    scrollTop: 0
                }, {
                    duration: duration,
                    easing: 'linear'
                });
            };
        })(this));
    }

    return BackToTop;

})();

window.CustomSelect = (function () {
    function CustomSelect(ref) {
        this.ref = ref;
        this.setValue = bind(this.setValue, this);
        this.openSelect = bind(this.openSelect, this);
        this.optionSelected = this.ref.find('.j-selected');
        this.option = this.ref.find('.j-option');
        this.realSelect = this.ref.find('.j-realSelect');
        if (Modernizr.touchevents && !this.ref.hasClass('j-mobileCustom')) {
            this.ref.find('.customSelected__icon').remove();
            this.ref.find('.j-selected').remove();
            this.ref.find('.j-options').remove();
            this.realSelect.show();
        } else {
            this.realSelect.focus((function (_this) {
                return function () {
                    _this.ref.addClass('focus');
                };
            })(this));
            this.realSelect.blur((function (_this) {
                return function () {
                    _this.ref.removeClass('focus');
                    _this.ref.removeClass('open')
                };
            })(this));
            this.optionSelected.click((function (_this) {
                return function (e) {
                    e.preventDefault();
                    return _this.openSelect($(e.currentTarget));
                };
            })(this));
            this.option.click((function (_this) {
                return function (e) {
                    var optionClicked;
                    optionClicked = $(e.currentTarget);
                    e.preventDefault();
                    if (optionClicked.closest('.j-customSelect').hasClass('open')) {
                        return _this.setValue($(optionClicked));
                    }
                };
            })(this));
            this.ref.on('close', (function (_this) {
                return function (e) {
                    $(e.currentTarget).find('.j-options').removeClass('open');
                    return $(e.currentTarget).removeClass('open');
                };
            })(this));
            document.addEventListener('keydown', (function (_this) {
                return function (e) {
                    var __newSelected, __options, __selected, i, keyCode, num, option;
                    __options = _this.ref.find('.open');
                    keyCode = e.keyCode || e.which;
                    option = __options.children();
                    if (__options.length > 0) {
                        if (__options.find('.selected').length > 0) {
                            __selected = __options.find('.selected');
                            num = __selected.index();
                        } else {
                            __selected = $(__options.find('.j-option')[0]);
                            num = -1;
                        }
                        if (keyCode > 64 && keyCode < 91) {
                            letter = String.fromCharCode(keyCode).toLowerCase();
                            for (var i = 0; i < option.length; i++) {
                                _op = $(option[i]);
                                _txt = _op.text().toLowerCase();
                                if (_txt.charAt(0) === letter) {
                                    _op.siblings().removeClass('selected');
                                    _op.addClass('selected');
                                    // window.setTimeout=(function(){

                                    // },5)
                                    return __selected = _op;
                                }
                            }
                        }
                        switch (keyCode) {
                            case 38:
                                e.preventDefault();
                                i = num - 1;
                                if (i > -1) {
                                    __newSelected = $(option[i]);
                                    __newSelected.siblings().removeClass('selected');
                                    __newSelected.addClass('selected');
                                    return __selected = __newSelected;
                                }
                                break;
                            case 32:
                                if (_this.ref.hasClass('focus')) {
                                    _this.ref.addClass('open');
                                }

                                break;
                            case 40:
                                e.preventDefault();
                                i = num + 1;
                                if (i < option.length) {
                                    __newSelected = $(option[i]);
                                    __newSelected.siblings().removeClass('selected');
                                    __newSelected.addClass('selected');
                                    return __selected = __newSelected;
                                }
                                break;
                            case 13:
                                return _this.setValue(__selected);
                            case 27:
                                __options.removeClass('open');
                                return __options.closest('.j-customSelect').removeClass('open');
                        }
                    }
                };
            })(this));
        }
    }

    CustomSelect.prototype.openSelect = function (btn) {
        var __options;
        this.ref.siblings().trigger('close');
        __options = btn.closest('.j-customSelect').find('.j-options');
        __options.toggleClass('open');
        return this.ref.toggleClass('open');
    };

    CustomSelect.prototype.setValue = function (option) {
        var __selected, _cs, realSelect;
        option.siblings().removeClass('active');
        option.siblings().removeClass('selected');
        option.addClass('active');
        option.addClass('selected');
        this.__value = option.text();
        __selected = option.closest('.j-customSelect').find('.j-selected');
        if (__selected.hasClass('js-tabTitle')) {
            __selected.find('.j-selectedValue').text(this.__value);
        } else {
            __selected.text(this.__value);
            __selected.addClass('newValue');

        }
        this.__dataValue = option[0].getAttribute('data-value');
        realSelect = option.closest('.j-customSelect').find('.j-realSelect');
        $(realSelect).find('.j-selectOption').attr('selected', false);
        $(realSelect.find('.j-selectOption[value="' + this.__dataValue + '"]').attr('selected', true));
        _cs = option.closest('.j-customSelect');
        _cs.trigger('close');
        if (_cs.hasClass('j-filtertab')) {
            option.closest('.j-options').removeClass('open');
            _cs.find('.j-selected').removeClass('active');
            _cs.find('.tab').removeClass('active');
            return _cs.removeClass('open');
        }
    };

    return CustomSelect;

})();

(function () {
    window.ExpandBody = (function () {
        function ExpandBody(ref) {
            this.w = $(window);
            this.ref = ref;
            b = $('html,body');
            header = $('body').find('.j-header')
            this.btn = this.ref.find('.j-btnOpen');
            if (this.ref.hasClass('j-closeMobile') & deviceSizer.deviceSizeMenu()) {
                this.ref.toggleClass('open');
            }
            this.btn.click((function (_this) {
                return function (e) {
                    this.w = $(window);
                    this.lastScrollTop = 0;
                    var __loadMore;
                    target_top = Math.floor(_this.ref.offset().top);
                    e.preventDefault();
                    _this.ref.siblings().removeClass('open');
                    _this.ref.toggleClass('open');

                    return b.stop().animate
                    (
                        {
                            scrollTop: "" + target_top
                        },
                        {
                            duration: 10,
                            easing: 'swing',
                            complete: function () {
                                if (_this.ref[0].scrollHeight - _this.ref.scrollTop() == _this.ref.outerHeight()) header.removeClass('isVisible')

                            }
                        }
                    )

                };
            })(this));
        }

        return ExpandBody;

    })();

}).call(this);
window.faqFilter = (function () {
    function faqFilter(ref) {
        this.ref = ref;
        this.filterSelect = this.ref.find('.j-faqFilterSelect');
        this.changeOption();

    }

    faqFilter.prototype.changeOption = function () {

        for (var i = 0; i < this.filterSelect.length; i++) {
            var filter_select = $(this.filterSelect[i]);

            $(filter_select).change((function (_this) {
                return function (e) {
                    e.preventDefault();

                    if (this.value == 'all') {
                        $('#faq_categorie').children().show();

                    } else {
                        $('#faq_categorie').children().hide();
                        $("#" + this.value).show();
                    }
                    console.log(this.value);
                };
            })(this));
        }
    }

    return faqFilter;

})();
window.ScrollBtn = (function () {
    function ScrollBtn(ref) {
        this.ref = ref;
        return this.ref.click((function (_this) {
            return function (e) {
                var __ref, _dest;
                e.preventDefault();
                __ref = $(e.currentTarget);
                _dest = $(__ref.attr('data-destination'));
                return window.helpers.scrollTo(_dest);
            };
        })(this));
    }

    return ScrollBtn;


})();


window.FixedNav = (function () {
    function FixedNav(ref) {
        this.ref = ref;
        this.w = $(window);
        window.fixed_menu_top = this.ref.offset().top;
        this.b = $('body,html');
        if (this.ref.attr('data-offset')) {
            offset_top = parseInt(this.ref.attr('data-offset'));
        }
        this.onScroll = bind(this.onScroll, this);
        this.w.scroll(this.onScroll);
        this.onScroll();
    }

    FixedNav.prototype.onScroll = function () {
        this.w = $(window);
        if (this.w.scrollTop() >= (window.fixed_menu_top - offset_top)) {
            if (this.ref.hasClass('fixed') == false) {
                this.ref.addClass('fixed');
            }

        }
        else {
            this.ref.removeClass('fixed');

        }
    };

    return FixedNav;

})();


window.Header = (function () {
    function Header(ref) {
        this.ref = ref;
        this.hamburgerBtn = $('.j-hamburgerBtn')
        this.started = false
        this.onScroll = bind(this.onScroll, this);
        this.b = $('body,html');
        this.w = $(window);
        this.w.scroll(this.onScroll);
        this.lastScrollTop = 0;
        this.scrollAmount = parseInt(this.ref.attr('data-scrollamount'));
        this.ddms = this.ref.find('.j-ddm');
        this.initddmBtns = bind(this.initddmBtns, this);
        this.closeAllddm = bind(this.closeAllddm, this);
        this.onScroll();
        this.initddmBtns()
        this.hamburgerBtn.click(function (e) {
            e.preventDefault();
            var header = $(e.currentTarget).closest('.j-header');
            var isOpen = header.hasClass('open');

            if (isOpen) {
                header.removeClass('open');
                window.helpers.removeNoScroll()
            } else {
                header.addClass('open');
                window.helpers.setNoScroll()
            }
        })
    }

    Header.prototype.initddmBtns = function () {
        for (var i = 0; i < this.ddms.length; i++) {
            var ddm = $(this.ddms[i]);
            var btn = ddm.find('.j-ddmBtn');

            btn.click((function (_this) {
                return function (e) {
                    e.preventDefault();
                    var ddm_toOpen = $(e.currentTarget).closest('.j-ddm');
                    ddm_toOpen.siblings('.j-ddm').removeClass('ddmOpen');
                    ddm_toOpen.toggleClass('ddmOpen');
                    if (window.is_mobile) {
                        $('body').toggleClass('noScroll')
                    }
                    ;

                };
            })(this));
        }
    }
    Header.prototype.closeAllddm = function () {
        for (var j = 0; j < this.ddms.length; j++) {
            var _ddm = $(this.ddms[j]);
            _ddm.removeClass('ddmOpen');
        }
    }
    Header.prototype.onScroll = function () {
        var scrollmode;
        if (!window.is_mobile) this.closeAllddm()
        if (this.w.scrollTop() === 0) {
            this.started = false
            this.ref.removeClass('isFixed');
            this.b.removeClass('fixedHeader');
            this.ref.removeClass('isVisible');
        }
        if (this.w.scrollTop() > this.lastScrollTop) {
            scrollmode = 'down';
        } else {
            scrollmode = 'up';
        }
        this.lastScrollTop = this.w.scrollTop();
        if (!this.ref.isOnScreen() && !this.ref.hasClass('isFixed') && !this.started) {
            this.ref.addClass('isFixed');
            this.started = true
            if (window.is_mobile) {
                this.b.addClass('fixedHeader');
                return this.ref.addClass('isVisible');
            }
        }
        if (scrollmode === 'up' && this.ref.hasClass('isFixed')) {
            this.b.addClass('fixedHeader');
            return this.ref.addClass('isVisible');
        }
        if (scrollmode === 'down' && this.ref.hasClass('isVisible')) {
            if (!window.is_mobile) {
                this.b.removeClass('fixedHeader');
                return this.ref.removeClass('isVisible');
            }
            else {
                this.b.addClass('fixedHeader');
                return this.ref.addClass('isVisible');
            }

        }
    };
    return Header;

})();


window.sliderHome = (function () {
    function sliderHome(ref) {
        this.ref = ref;
        if (window.is_mobile) {
            var colTitle = ref[0].getElementsByTagName('colorTitle')[0].textContent;
            var colAb = ref[0].getElementsByTagName('colorAbstract')[0].textContent;
            var colBottone = ref[0].getElementsByTagName('colorButtone')[0].textContent;
            var title = ref[0].getElementsByTagName('h2');
            var abstract = ref[0].getElementsByTagName('p');
            var bottone = ref[0].getElementsByTagName('span');
            if (colTitle != null && colTitle != "" && colTitle != " ")
                title[0].style.color = colTitle;
            if (colAb != null && colAb != "" && colAb != " ")
                abstract[0].style.color = colAb;
            if (colBottone != null && colBottone != "" && colBottone != " ")
                bottone[0].style.color = colBottone;
        }
    }

    return sliderHome;
})();

window.historyFilter = (function () {
    function historyFilter(ref) {
        this.ref = ref;
        this.filterItem = this.ref.find('input');
        this.block =
            this.changeOption();

    }

    historyFilter.prototype.changeOption = function () {

        for (var i = 0; i < this.filterItem.length; i++) {

            var filter_radio = $(this.filterItem[i]);

            $(filter_radio).change((function (_this) {
                return function (e) {
                    e.preventDefault();
                    var historyDetail = $('.j-historyFilterDetail');
                    section = this.value;
                    var current = historyDetail.parent().find('.' + section);
                    if (section == 'all') {
                        $(historyDetail).show();
                    } else {
                        $('.j-historyFilterDetail').hide();
                        $(current).parent('.j-historyFilterDetail').show();
                    }
                };
            })(this));
        }
    }

    return historyFilter;

})();

window.Imagination = (function () {
    Imagination.prototype.mqSizes = {
        "BP_SMALL": "small",
        "BP_MEDIUM": "medium",
        "BP_LARGE": "large"
    };

    function Imagination(ref) {
        this.ref = ref;
        this.getSize = bind(this.getSize, this);
        this.getRetinaUrl = bind(this.getRetinaUrl, this);
        this.loadImages = bind(this.loadImages, this);
        this.getCurrentSize = bind(this.getCurrentSize, this);
        this.checkPrevImages = bind(this.checkPrevImages, this);
        this.reloadImagination = bind(this.reloadImagination, this);
        this.initAfterLoaded = bind(this.initAfterLoaded, this);
        this.init = bind(this.init, this);
        this.lazyLoad = false;
        this.window_ref = $(window);
        this.body = $("body");
        this.init();
    }

    Imagination.prototype.init = function () {
        this.reloadImagination(this.getSize());
        return this.window_ref.on("BP_LARGE BP_MEDIUM BP_SMALL", (function (_this) {
            return function (e) {
                var currentSize;
                currentSize = _this.getCurrentSize(e.type);
                if (_this.currentSizeSaved !== currentSize) {
                    _this.currentSizeSaved = currentSize;
                    if (!_this.ref.hasClass(currentSize + "-load")) {
                        return _this.reloadImagination(currentSize);
                    } else {
                        return _this.checkPrevImages(currentSize);
                    }
                }
            };
        })(this));
    };

    Imagination.prototype.initAfterLoaded = function (element) {
        var _ele, size;
        size = this.getCurrentSize(this.getSize());
        _ele = element.find('.respond-image');
        return this.loadImages(_ele, size, Modernizr.highres);
    };

    Imagination.prototype.reloadImagination = function (currentSize) {
        return this.loadImages(this.ref, currentSize, Modernizr.highres);
    };

    Imagination.prototype.checkPrevImages = function (currentSize) {
        var i, images, img, j, ref, results;
        images = this.ref.find('img');
        results = [];
        for (i = j = 0, ref = images.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            img = $(images[i]);
            if (img.attr('class') !== currentSize) {
                results.push(img.hide());
            } else {
                results.push(img.show());
            }
        }
        return results;
    };

    Imagination.prototype.getCurrentSize = function (size) {
        return this.mqSizes[size];
    };

    Imagination.prototype.loadImages = function (wrap, size, retina) {
        var _img, _img_, _url, data, img;
        wrap = $(wrap);
        data = wrap.data();
        _url = data[size];
        var alt = data['alt'];
        img = new Image;
        img.src = _url;
        _img_ = wrap.find("." + size);
        if (_img_.length === 0) {
            wrap.append(img);
            wrap.addClass("respond-image__loading");
            _img = $(img);
            return _img.one("load", (function (_this) {
                return function () {
                    wrap.removeClass("respond-image__loading");
                    _this.body.trigger("LOADING_IMAGES_IS_COMPLETE");
                    if (!wrap.hasClass('ImgLoaded')) {
                        wrap.addClass('ImgLoaded');
                    }
                    _img.addClass(size);
                    _img.attr('alt', alt);
                    _this.ref.addClass(size + "-load");
                    _this.currentSizeSaved = size;
                    return _this.checkPrevImages(size);
                };
            })(this));
        }
    };

    Imagination.prototype.getRetinaUrl = function (url) {
        var _basePath, _fileName, _fileName_2x, _fileType, _url;
        _basePath = url.substring(0, url.lastIndexOf('/') + 1);
        _url = url.substring(url.lastIndexOf('/') + 1);
        _url = _url.split(".");
        _fileType = _url[1];
        _fileName = _url[0];
        _fileName_2x = _fileName + "_2x";
        if (typeof _fileType !== "undefined") {
            _fileName_2x += "." + _fileType;
        }
        return _basePath + _fileName_2x;
    };

    Imagination.prototype.getSize = function () {
        return window.deviceSizer.getImageSize();
    };

    return Imagination;

})();

window.breakPointer = (function () {
    function breakPointer(breakpointer) {
        this.breakpointer = breakpointer;
        this.deviceSizeMenu = bind(this.deviceSizeMenu, this);
        this.accordionSizeFilter = bind(this.accordionSizeFilter, this);
        this.accordionSize = bind(this.accordionSize, this);
        this.onResize = bind(this.onResize, this);
        this.getImageSize = bind(this.getImageSize, this);
        this.getCollectionSize = bind(this.getCollectionSize, this);
        this.getSize = bind(this.getSize, this);
        $(window).resize(this.onResize);
        this.onResize();
    }

    breakPointer.prototype.getSize = function () {
        var w_width;
        w_width = $(window).width();
        if (w_width < this.breakpointer.s) {
            return 'small';
        }
        if (this.breakpointer.s <= w_width) {
            return 'large';
        }
    };


    breakPointer.prototype.getImageSize = function () {
        var w_width;
        w_width = $(window).width();
        if (w_width < this.breakpointer.s) {
            return 'small';
        }
        if ((this.breakpointer.s <= w_width && w_width <= this.breakpointer.m)) {
            return 'medium';
        }
        if (w_width > this.breakpointer.m) {
            return 'large';
        }
    };

    breakPointer.prototype.onResize = function () {
        var w_width;
        w_width = $(window).width();
        if (w_width < this.breakpointer.s) {
            $(window).trigger('BP_SMALL');
        }
        if ((this.breakpointer.s <= w_width && w_width <= this.breakpointer.m)) {
            $(window).trigger('BP_MEDIUM');
        }
        if (w_width > this.breakpointer.m) {
            return $(window).trigger('BP_LARGE');
        }
    };

    breakPointer.prototype.accordionSize = function () {
        var w_width;
        w_width = $(window).width();
        if (w_width < this.breakpointer.m) {
            return true;
        } else {
            return false;
        }
    };

    breakPointer.prototype.accordionSizeFilter = function () {
        var w_width;
        w_width = $(window).width();
        if (w_width < this.breakpointer.fb) {
            return true;
        } else {
            return false;
        }
    };

    breakPointer.prototype.deviceSizeMenu = function () {
        var __size;
        __size = deviceSizer.getSize();
        if (__size === 'small') {
            return true;
        } else {
            return false;
        }
    };

    return breakPointer;

})();

// ---

window.moreInfo = (function () {
    function moreInfo(ref) {
        this.ref = ref;
        this.refBtn = this.ref.find('.j-toggleMoreInfo');

        this.refBtn.click((function (_this) {
            return function (e) {
                e.preventDefault();
                if (window.is_mobile) {
                    var div = e.currentTarget.parentElement;
                    if (ref[0].classList.length === 6) {
                        var p = div.children[2].children[0];
                        if (p.offsetHeight > 200) {
                            var hei = p.offsetHeight;
                            var int = parseInt(hei);
                            int = int + 15;
                            div.style.height = int + "px";
                            p.style.paddingTop = "25px";
                        }

                    } else
                        div.style.height = "auto";
                }
                ref.toggleClass('opened')
            };
        })(this));
    }

    return moreInfo;

})();
var bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};

window.MultiSlider = (function () {
    function MultiSlider(ref) {
        this.ref = ref;
        cardPosition = this.ref.find('.js-multipleSliderPosition');
        this.showSlide = bind(this.showSlide, this);
        this.init = bind(this.init, this);
        this.current = 0;
        this.__items = this.ref.find('.js-multipleSliderItem');
        //this.controller = this.ref.find('.js-multipleSliderController');
        //this.bullets = this.controller.find('.js-multipleSliderBullet');
        this.controller = this.ref.find('.js-multipleNav');
        this.nextBtn = this.controller.find('.j-sliderNext');
        this.prevBtn = this.controller.find('.j-sliderPrev');
        height = 0;
        this.onResize = bind(this.onResize, this);
        $(window).resize(this.onResize);
        this.onResize();
        this.init();
        this.checkSlideArrows()
    }

    MultiSlider.prototype.onResize = function () {
        for (var i = 0; i < this.__items.length; i++) {
            __item = $(this.__items[i])
            description = __item.find('.js-multipleSliderVariable');
            descriptionHeight = description.outerHeight();
            if ($(window).width() < 768) {
                if (descriptionHeight > height) {
                    height = descriptionHeight;
                }
                else {
                    description[0].setAttribute("style", "height:" + height + "px");
                }
            }
        }
        ;
        btnHeight = this.ref.find('.j-lastAnimation').outerHeight();
        if ($(window).width() < 768) {
            totHeight = height + btnHeight + 190;
        }
        else {
            totHeight = 385
        }
        if (cardPosition[0]) {
            cardPosition[0].setAttribute("style", "height:" + totHeight + "px")
        }
        ;
    }
    MultiSlider.prototype.init = function () {
        // var bullet, i, j, ref;
        // for (i = j = 0, ref = this.bullets.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
        //   bullet = $(this.bullets[i]);
        //   bullet.data('num', i);
        // }

        for (var i = 0; i < this.__items.length; i++) {
            __item = $(this.__items[i])
            __item.data('exit', false);
            __item.find('.j-lastAnimation').get(0).addEventListener(transitionEnd, ((function (_this) {
                return function (e) {
                    e.stopPropagation();
                    var slider = $(e.currentTarget).closest('.js-multipleSliderItem')
                    var controller = slider.closest('.js-multipleSlider').find('.js-multipleNav')
                    var prev = controller.find('.j-sliderPrev')
                    var next = controller.find('.j-sliderNext')
                    if (slider.data('exit') === true) {
                        if (slider.hasClass('exit')) {
                            slider.removeClass('exit');
                        }
                        prev.removeClass('pause');
                        next.removeClass('pause');
                        slider.data('exit', false);
                    }
                };
            })(this)), false);
        }
        this.nextBtn.click((function (_this) {
            return function (e) {
                e.preventDefault();
                var btn = $(e.currentTarget);
                if (!btn.hasClass('inactive') && !btn.hasClass('pause')) {
                    var num = _this.current + 1
                    _this.showSlide(num);
                }

            };
        })(this));
        this.prevBtn.click((function (_this) {
            return function (e) {
                e.preventDefault();
                var btn = $(e.currentTarget);
                if (!btn.hasClass('inactive') && !btn.hasClass('pause')) {
                    var num = _this.current - 1
                    _this.showSlide(num);
                }
            };
        })(this));
        // return this.bullets.click((function(_this) {
        //   return function(e) {
        //     e.preventDefault();
        //     var bullet = $(e.currentTarget)
        //     if(!bullet.hasClass('active')){

        //       otherBullets = bullet.parent().siblings().find('.js-multipleSliderBullet')
        //       bullet.addClass('active');
        //       otherBullets.removeClass('active');
        //       _this.showSlide(bullet.data('num'));
        //     }

        //   };
        // })(this));
    };

    MultiSlider.prototype.checkSlideArrows = function () {
        if (this.current === 0) {
            this.prevBtn.addClass('inactive');
        } else {
            this.prevBtn.removeClass('inactive');
        }
        if (this.current === this.__items.length - 1) {
            this.nextBtn.addClass('inactive');
        } else {
            this.nextBtn.removeClass('inactive');
        }
    };

    MultiSlider.prototype.showSlide = function (num) {
        $(this.__items[this.current]).removeClass('active');
        $(this.__items[this.current]).addClass('exit');
        $(this.__items[this.current]).data('exit', true);
        if (window.ie_version == 0) {
            this.prevBtn.addClass('pause');
            this.nextBtn.addClass('pause');
        }
        $(this.__items[num]).addClass('active');
        this.current = num;
        this.checkSlideArrows()
    };

    return MultiSlider;

})();


window.overEdit = (function () {
    function overEdit(ref) {
        this.ref = ref;
        overlayName = this.ref.attr('data-over');
        overlayClass = ('.j-over' + overlayName)
        var overlay = $('body').find(overlayClass);
        btnclose = $(overlay).find('.j-overEditClose');
        this.ref.click((function (_this) {
            return function (e) {
                e.preventDefault();
                var overlayItems = $('body').find('.overlay');
                for (var i = overlayItems.length - 1; i >= 0; i--) {
                    $(overlayItems[i]).removeClass('open')
                }
                ;
                $(overlay).addClass('open');
                $('body').addClass('overlayOpen');
            };
        })(this));
        btnclose.click((function (_this) {
            return function (e) {
                e.preventDefault();
                $(overlay).removeClass('open');
                $('body').removeClass('overlayOpen');
            };
        })(this));
    }

    return overEdit;

})();
var bind = function (fn, me) {
    return function () {
        return fn.apply(me, arguments);
    };
};

window.CarouselOWL = (function () {
    function CarouselOWL(ref) {
        this.ref = ref;
        this.setNavigation = bind(this.setNavigation, this);
        this.setCarousel = bind(this.setCarousel, this);
        singleItem = false;
        auto = true;
        if (this.ref.hasClass('j-singleItem')) singleItem = true;
        if (this.ref.hasClass('no-slider')) auto = false;

        this.visibilityItemXS_num = parseInt(this.ref.attr('data-visibilityItemXS'));
        this.visibilityItemS_num = parseInt(this.ref.attr('data-visibilityItemS'));
        this.visibilityItemM_num = parseInt(this.ref.attr('data-visibilityItemM'));
        this.visibilityItemL_num = parseInt(this.ref.attr('data-visibilityItemL'));
        this.visibilityItemXL_num = parseInt(this.ref.attr('data-visibilityItemXL'));
        this.container = this.ref.closest('.carousel__container');
        this.hasNav = this.container.find('.j-nav').length > 0 ? true : false;
        //this.hasBullets = this.container.hasClass('noBullets') ? false : true;
        this.mobileList = this.container.hasClass('mobileListVersion') ? true : false;
        this.__size = window.deviceSizer.getSize();
        this.startedBulletSetting = this.__size === 'xsmall' ? false : this.hasBullets;
        //this.__is_synced = this.container.hasClass('j-syncCarousel') ? true : false;
        if (this.mobileList && this.__size === 'xsmall') {
            this.container.addClass('active');
        } else {
            this.ref.data('noBullets', this.hasBullets);
        }
        this.setCarousel();
    }

    CarouselOWL.prototype.setCarousel = function () {
        if (singleItem == true) {
            this.ref.owlCarousel({
                lazyLoad: true,
                margin: 0,
                video: true,
                nav: false,
                loop: false,
                pagination: false,
                navText: '',
                autoplay: auto,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                responsive: {
                    2600: {
                        items: this.visibilityItemXL_num
                    },
                    1280: {
                        items: this.visibilityItemL_num
                    },
                    1024: {
                        items: this.visibilityItemM_num
                    },
                    968: {
                        items: this.visibilityItemS_num
                    },
                    0: {
                        items: this.visibilityItemXS_num
                    }
                }       //scrollPerPage: true,
                //pagination: this.startedBulletSetting
            });
            singleItem = false;
        }
        else {
            this.ref.owlCarousel({
                lazyLoad: true,
                margin: 0,
                video: true,
                nav: true,
                loop: true,
                navText: '',
                autoplay: auto,
                autoplayTimeout: 8000,
                autoplayHoverPause: true,
                responsive: {
                    2600: {
                        items: this.visibilityItemXL_num
                    },
                    1280: {
                        items: this.visibilityItemL_num
                    },
                    1024: {
                        items: this.visibilityItemM_num
                    },
                    768: {
                        items: this.visibilityItemS_num
                    },
                    0: {
                        items: this.visibilityItemXS_num
                    }
                }       //scrollPerPage: true,
                //pagination: this.startedBulletSetting
            });
        }
        ;


        // var $carousel = this.ref;
        // var owl = $carousel.data('owlCarousel');
        // if (singleItem == true){
        //   // owl.reinit({
        //   //   loop: false
        //   // });
        //   owl.reinit({
        //     loop: false
        //   });
        //   singleItem = false;
        // }
        // else{
        //   console.log('entroelse');
        //   owl.reinit({
        //     loop: true
        //   })
        // };

        var items = this.ref.find('.owl-item:not(.cloned)').length;
        var nav = this.ref.find('.owl-nav');
        if (items >= this.visibilityItemXL_num)  nav.hide();
        this.onResize = bind(this.onResize, this);
        $(window).resize(this.onResize);
        this.onResize();
        return CarouselOWL;
    };

    CarouselOWL.prototype.onResize = function () {
        var w_width;
        w_width = $(window).width();
        var items = this.ref.find('.owl-item:not(.cloned)').length;
        var nav = this.ref.find('.owl-nav');
        if (w_width > 2600) {
            if (items >= this.visibilityItemXL_num)  nav.hide();

        }
        if ((1280 < w_width && w_width <= 2600 )) {

            if (items > this.visibilityItemL_num) nav.show();
            else nav.hide()
        }

        if ((1024 < w_width && w_width <= 1280)) {
            if (items > this.visibilityItemM_num) nav.show();
            else nav.hide();
        }
        if ((968 < w_width && w_width <= 1024)) {
            if (items > this.visibilityItemS_num) nav.show();
            else nav.hide();
        }
        if (w_width < 968) {
            if (items > this.visibilityItemXS_num) nav.show();
            else  nav.hide();
        }

    };


    return CarouselOWL;

})();


window.Parallax = (function () {
    function Parallax(ref) {
        this.w = $(window);
        this.w.resize(this.onResize);
        this.onResize();

    }

    Parallax.prototype.onResize = function () {
        this.w = $(window);
        if ((this.w.width()) < 768) {
            $(window).on("scroll", function (event) {
                var parallaxElements = $('.j-parallaxItem');
                var parallaxQuantity = parallaxElements.length;
                window.requestAnimationFrame(function () {
                    for (var i = 0; i < parallaxQuantity; i++) {
                        var currentElement = parallaxElements.eq(i);
                        var scrolled = $(window).scrollTop() - $(window).height() * i;

                        currentElement.css({
                            'transform': 'translate3d(0, 0, 0)'
                        });
                    }
                });
            });
        }

        else {
            $(window).on("scroll", function (event) {
                var parallaxElements = $('.j-parallaxItem');
                var parallaxQuantity = parallaxElements.length;
                window.requestAnimationFrame(function () {
                    for (var i = 0; i < parallaxQuantity; i++) {
                        var currentElement = parallaxElements.eq(i);
                        var scrolled = $(window).scrollTop() / i - $(window).height();
                        if (currentElement.hasClass('bottomTop')) {
                            currentElement.css({
                                'transform': 'translate3d(0,' + scrolled / 15 + 'px, 0)'
                            });
                        }
                        else {
                            currentElement.css({
                                'transform': 'translate3d(0px,' + scrolled / (-20) + 'px, 0)'
                            });
                        }

                    }
                });
            });

        }

    };
    return Parallax;
})();


window.ScrollBtn = (function () {
    function ScrollBtn(ref) {
        this.ref = ref;
        return this.ref.click((function (_this) {
            return function (e) {
                var __ref, _dest;
                e.preventDefault();
                __ref = $(e.currentTarget);
                _dest = __ref.attr('data-destination');
                _div = $('body').find("#" + _dest);
                return window.helpers.scrollTo(_div);
            };
        })(this));
    }

    return ScrollBtn;

})();


window.Search = (function () {
    function Search(ref) {
        this.ref = ref;
        this.header = $('.j-headerNav');
        this.overlay = $('.j-overlaySearch');
        this.init = bind(this.init, this);
        this.init()
    }

    Search.prototype.init = function () {
        this.ref.click((function (_this) {
            return function (e) {
                e.preventDefault();
                _this.header.addClass('searching');
                $('body').addClass('overlayOpen');
                window.helpers.setNoScroll();
                $('#search').focus();
                window.header.closeAllddm();
            };
        })(this));
        this.overlay.click((function (_this) {
            return function (e) {
                e.preventDefault();
                _this.header.removeClass('searching');
                $('body').removeClass('overlayOpen');
                window.helpers.removeNoScroll();
            };
        })(this));

    };
    return Search;

})();


window.YTvideo = (function () {
    function YTvideo(ref) {
        var i, j, ref1, video, videoItem;
        this.ref = ref;
        this.closeVideo = bind(this.closeVideo, this);
        this.seekTo = bind(this.seekTo, this);
        this.stopVideo = bind(this.stopVideo, this);
        this.pauseVideo = bind(this.pauseVideo, this);
        this.playVideo = bind(this.playVideo, this);
        this.onPlayerStateChange = bind(this.onPlayerStateChange, this);
        this.pauseOtherVideos = bind(this.pauseOtherVideos, this);
        this.findVideo = bind(this.findVideo, this);
        this.onPlayerReady = bind(this.onPlayerReady, this);
        this.onYouTubeIframeAPIReady = bind(this.onYouTubeIframeAPIReady, this);
        this.initVideo = bind(this.initVideo, this);
        this.initBtns = bind(this.initBtns, this);
        this.is_mobile = navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) ? true : false;
        this.is_android = navigator.userAgent.match(/Android/i) ? true : false;

        for (i = j = 0, ref1 = this.ref.length; 0 <= ref1 ? j < ref1 : j > ref1; i = 0 <= ref1 ? ++j : --j) {
            video = $(this.ref[i]);
            videoItem = video.find('.js-ytVideoItem');
            video.data('div_id', videoItem.attr('id'));
            video.data('video_id', videoItem.attr('data-video-id'));
            video.data('is_playing', false);
            video.data('cover', video.find('.ytVideo__placeholder'));
            video.data('loop', video.hasClass('loop'));
        }
        this.initVideo();
    }

    YTvideo.prototype.initBtns = function (play_btn, close_btn) {
        play_btn.click((function (_this) {
            return function (e) {
                var _cover, _video, btn;
                e.preventDefault();
                btn = $(e.currentTarget);
                _video = btn.closest('.js-ytVideo');
                _video.addClass('playing');

                return _this.playVideo(_video);
            };
        })(this));
        return close_btn.click((function (_this) {
            return function (e) {
                var _video, btn;
                e.preventDefault();
                btn = $(e.currentTarget);
                _video = btn.closest('.js-ytVideo');
                _video.removeClass('playing');
                return _this.closeVideo(_video);
            };
        })(this));
    };

    YTvideo.prototype.initVideo = function () {
        window.helpers.createPlayerAPI();
        return window.onYouTubeIframeAPIReady = this.onYouTubeIframeAPIReady;

    };

    YTvideo.prototype.onYouTubeIframeAPIReady = function () {
        var closevideo_btn, div_id, i, j, playVideo_btn, player, ref, results, video, video_id;
        this.ref = $('.js-ytVideo');
        results = [];
        for (i = j = 0, ref = this.ref.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            video = $(this.ref[i]);
            playVideo_btn = video.find('.js-ytVideoPlay');
            closevideo_btn = video.find('.js-ytVideoClose');
            video_id = video.data('video_id');
            div_id = video.data('div_id');
            player = new YT.Player(div_id, {
                videoId: video_id,
                playerVars: {
                    'controls': 1,
                    'showinfo': 0,
                    'disablekb': 1,
                    'rel': 0,
                    'wmode': 'transparent'
                },
                events: {
                    'onReady': this.onPlayerReady,
                    'onStateChange': this.onPlayerStateChange
                }
            });
            video.data('player', player);
            results.push(this.initBtns(playVideo_btn, closevideo_btn));
        }
        return results;
    };

    YTvideo.prototype.onPlayerReady = function (event) {
    };

    YTvideo.prototype.findVideo = function (video_id) {
        var i, j, ref, video;
        for (i = j = 0, ref = this.ref.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            video = $(this.ref[i]);
            if (video_id === video.data('video_id')) {
                return video;
                break;
            }
        }
    };

    YTvideo.prototype.pauseOtherVideos = function (_video) {
        var i, j, ref, results, video;
        results = [];
        for (i = j = 0, ref = this.ref.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            video = $(this.ref[i]);
            if (video !== _video) {
                results.push(this.pauseVideo(video));
            } else {
                results.push(void 0);
            }
        }
        return results;
    };

    YTvideo.prototype.onPlayerStateChange = function (event) {
        var _video, video_id;
        video_id = event.target.getVideoData()['video_id'];
        _video = this.findVideo(video_id);
        video_title = event.target.getVideoData()['title'];

        title = document.title;
        title = title.replace(/ /g, "");
        video_title = video_title.replace(/ /g, "");
        titleVideoId = title + "_" + video_title;

        if (event.data === YT.PlayerState.PLAYING) {
            ga("send", "event", {
                event: "vm.EnumsTracker.Events.GA",
                eventCategory: "video",
                eventAction: "video play",
                eventLabel: titleVideoId
            });

            return _video.data('is_playing', true);
        } else if (event.data === YT.PlayerState.PAUSED) {
            ga("send", "event", {
                event: "vm.EnumsTracker.Events.GA",
                eventCategory: "video",
                eventAction: "video pause",
                eventLabel: titleVideoId
            });

            return _video.data('is_playing', false);
        } else if (event.data === YT.PlayerState.ENDED) {
            ga("send", "event", {
                event: "vm.EnumsTracker.Events.GA",
                eventCategory: "video",
                eventAction: "video complete",
                eventLabel: titleVideoId
            });

            _video.data('is_playing', false);
            if (_video.data('loop')) {
                return this.playVideo(_video);
            } else {
                return this.closeVideo(_video);
            }
        }
    };

    YTvideo.prototype.playVideo = function (_video) {
        var player, video_id;
        player = _video.data('player');
        video_id = _video.data('video_id');
        this.pauseOtherVideos(_video);
        _cover = _video.data('cover');

        player.loadVideoById(video_id);
        setTimeout(function () {
            _cover.hide();
        }, 300);

    };

    YTvideo.prototype.pauseVideo = function (_video) {
        return _video.data('player').pauseVideo();
    };

    YTvideo.prototype.stopVideo = function (_video) {
        return _video.data('player').stopVideo();
    };

    YTvideo.prototype.seekTo = function (_video, seconds) {
        return _video.data('player').seekTo(seconds, true);
    };

    YTvideo.prototype.closeVideo = function (_video) {
        this.pauseVideo(_video);
        _video.removeClass('playing');
        this.seekTo(_video, 0);
        return _video.data('cover').show();
    };

    return YTvideo;

})();

var ckmng = function () {

    var ckmng = {};

    $(document).on("scroll",  function() {
        ckPage = $('.content').find('h1').text();
        if (!(ckPage === "Cookie Policy"))  {
            if (($(this).scrollTop() > 300) && ((ckmng.getCookie("cc_advertising") == false))) {
                ckmng.acceptAll();
            }
        }
    });

    $( "a" ).click(function( event ) {
        ckmng.checkCookieBanner();
    });

    $('input').on("click",  function() {
        ckmng.checkCookieBanner();
    });

    $('button').on("click",  function() {
        ckmng.checkCookieBanner();
    });

    $('select').on("click",  function() {
        ckmng.checkCookieBanner();
    });

    $(document).on('opened', '.remodal', function () {

        $(".remodal-overlay").on("scroll",  function() {
            ckPage = $('.content').find('h1').text();
            if (!(ckPage === "Cookie Policy"))  {
                if (($(this).scrollTop() > 100) && ((ckmng.getCookie("cc_advertising") == false))) {
                    ckmng.acceptAll();
                }
            }
        });

        $('.remodal input').on("click",  function() {
            ckmng.checkCookieBanner();
        });

        $('.remodal button').on("click",  function() {
            ckmng.checkCookieBanner();
        });

        $('.remodal .g-recaptcha').on("click",  function() {
            ckmng.checkCookieBanner();
        });
    });

    $(document).on('closed', '.remodal', function (e) {

        $('.remodal').off('click');
    });

    ckmng.checkCookieBanner = function () {

        ckPage = $('.content').find('h1').text();
        if ((!$(this).hasClass("gtm-block"))&&(!(ckPage === "Cookie Policy"))){
            if (ckmng.getCookie("cc_advertising") == false) {
                ckmng.acceptAll();
            }
        }

    }


    ckmng.getCookie = function (cname) {

        var name = cname + "=";
        var ca = document.cookie.split(';');

        for(var i=0; i<ca.length; i++) {

            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) == 0) return c.substring(name.length,c.length);

        }

        return false;

    }

    ckmng.setCookie = function (ckName, parameter) {

        var date = new Date();
        date.setTime(date.getTime() + (730 * 24*60*60*1000));
        var expires = "expires="+date.toUTCString();
        document.cookie = ckName + "=" + parameter + "; " + expires+ ";path=/";

    }

    ckmng.acceptAll = function () {

        ckmng.setCookie('cc_advertising', 'yes');
        if (typeof dataLayer != "undefined"){
            dataLayer.push({
                'event': 'reload on cookie consent',
                'eventCategory': 'reload',
                'eventAction': 'cookies accepted'
            });
        }
        $('#cookie').slideUp();

    }

    ckmng.revokeAll = function () {

        ckmng.setCookie('cc_advertising', 'no');
        if (typeof dataLayer != "undefined"){
            dataLayer.push({
                'event': 'reload on cookie consent',
                'eventCategory': 'reload',
                'eventAction': 'cookies deny'
            });
        }
        $('#cookie').slideUp();

    }

    ckmng.revokeAdv = function () {

        ckmng.setCookie('cc_advertising', 'no');
        if (typeof dataLayer != "undefined"){
            dataLayer.push({
                'event': 'reload on cookie consent',
                'eventCategory': 'reload',
                'eventAction': 'cookies deny'
            });
        }
        //messageBox.open('Attenzione', 'Modifica effettuata con successo');
       // alert('Modifica effettuata con successo');

        $('#modal').css('display','block');
         $('#backmodal').css('display','block');


    }

    ckmng.acceptAdv = function () {

        ckmng.setCookie('cc_advertising', 'yes');
        if (typeof dataLayer != "undefined"){
            dataLayer.push({
                'event': 'reload on cookie consent',
                'eventCategory': 'reload',
                'eventAction': 'cookies accepted'
            });
        }
        //messageBox.open('Attenzione', 'Modifica effettuata con successo');
        //alert('Modifica effettuata con successo');
        $('#modal').css('display','block');
        $('#backmodal').css('display','block');
    }

    return ckmng;

}();

		
		
		
		
		
		
		
		
		
		
