module.exports=__NEXT_REGISTER_PAGE("/_app",function(){var e=webpackJsonp([0],{100:function(e,t,r){"use strict";var n=r(101);var o=r(222);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var u=Object.prototype.toString;var l=function(e){return"function"===typeof e&&"[object Function]"===u.call(e)};var i=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var c=Object.defineProperty&&i();var f=function(e,t,r,n){if(t in e&&(!l(n)||!n()))return;c?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var s=function(e,t){var r=arguments.length>2?arguments[2]:{};var u=n(t);a&&(u=u.concat(Object.getOwnPropertySymbols(t)));o(u,function(n){f(e,n,t[n],r[n])})};s.supportsDescriptors=!!c;e.exports=s},101:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var u=r(221);var l=Object.prototype.propertyIsEnumerable;var i=!l.call({toString:null},"toString");var c=l.call(function(){},"prototype");var f=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var s=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{s(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return s(e);try{return s(e)}catch(e){return false}};var d=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var l=u(t);var s=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!l)throw new TypeError("Object.keys called on a non-object");var v=c&&a;if(s&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)p.push(String(d));if(l&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var b in t)v&&"prototype"===b||!n.call(t,b)||p.push(String(b));if(i){var m=y(t);for(var g=0;g<f.length;++g)m&&"constructor"===f[g]||!n.call(t,f[g])||p.push(f[g])}return p};d.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return u(t)?r(a.call(t)):r(t)}}}else Object.keys=d;return Object.keys||d};e.exports=d},102:function(e,t,r){"use strict";var n=r(101);var o=r(103);var a=function(e){return"undefined"!==typeof e&&null!==e};var u=r(224)();var l=Object;var i=o.call(Function.call,Array.prototype.push);var c=o.call(Function.call,Object.prototype.propertyIsEnumerable);var f=u?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=l(t);var s,p,v,y,d,h,b;for(s=1;s<arguments.length;++s){p=l(arguments[s]);y=n(p);var m=u&&(Object.getOwnPropertySymbols||f);if(m){d=m(p);for(v=0;v<d.length;++v){b=d[v];c(p,b)&&i(y,b)}}for(v=0;v<y.length;++v){b=y[v];h=p[b];c(p,b)&&(o[b]=h)}}return o}},103:function(e,t,r){"use strict";var n=r(223);e.exports=Function.prototype.bind||n},104:function(e,t,r){"use strict";var n=r(102);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var u in o)a+=u;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},198:function(e,t,r){e.exports=r(199)},199:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(5);var o=r.n(n);var a=r(200);var u=r.n(a);var l=r(203);var i=r.n(l);var c=r(215);var f=r.n(c);var s=function e(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("header",null,"EVERYTHING UPSIDE DOWN"),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,"Home"),o.a.createElement("li",null,"Cakes"),o.a.createElement("li",null,o.a.createElement(f.a,{href:"/about"},o.a.createElement("a",null,"About"))))))};var p=s;r.d(t,"default",function(){return j});function v(e){v="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function e(t){return typeof t}:function e(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};return v(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;"value"in n&&(n.writable=true);Object.defineProperty(e,n.key,n)}}function h(e,t,r){t&&d(e.prototype,t);r&&d(e,r);return e}function b(e,t){if(t&&("object"===v(t)||"function"===typeof t))return t;return m(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var O=function(e){g(t,e);function t(){y(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,[{key:"render",value:function e(){return o.a.createElement("div",{className:"layout"},this.props.children)}}]);return t}(o.a.Component);var j=function(e){g(t,e);function t(){y(this,t);return b(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}h(t,[{key:"render",value:function e(){var t=this.props,r=t.Component,n=t.pageProps;return o.a.createElement(a["Container"],null,o.a.createElement(i.a,null,o.a.createElement("title",null,"Everything Upside Down"),o.a.createElement("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),o.a.createElement(O,null,o.a.createElement(p,null),o.a.createElement(r,n)))}}]);return t}(u.a)},200:function(e,t,r){e.exports=r(201)},201:function(e,t,r){"use strict";var n=r(18);var o=r(4);Object.defineProperty(t,"__esModule",{value:true});t.createUrl=w;t.Container=t.default=void 0;var a=o(r(41));var u=o(r(43));var l=o(r(202));var i=o(r(37));var c=o(r(22));var f=o(r(8));var s=o(r(9));var p=o(r(23));var v=o(r(24));var y=n(r(5));var d=o(r(34));var h=o(r(96));var b=r(17);var m=r(44);var g=function(e){(0,v.default)(t,e);function t(){(0,f.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,s.default)(t,[{key:"getChildContext",value:function e(){var t=this.props.headManager;return{headManager:t,router:(0,m.makePublicRouterInstance)(this.props.router),_containerProps:(0,i.default)({},this.props)}}},{key:"componentDidCatch",value:function e(t,r){t.info=r;true;window.next.renderError({err:t})}},{key:"render",value:function e(){var t=this.props,r=t.router,n=t.Component,o=t.pageProps;var a=w(r);return y.default.createElement(O,null,y.default.createElement(n,(0,l.default)({},o,{url:a})))}}],[{key:"getInitialProps",value:function(){var e=(0,u.default)(a.default.mark(function e(t){var r,n,o,u;return a.default.wrap(function e(a){while(1)switch(a.prev=a.next){case 0:r=t.Component,n=t.router,o=t.ctx;a.next=3;return(0,b.loadGetInitialProps)(r,o);case 3:u=a.sent;return a.abrupt("return",{pageProps:u});case 5:case"end":return a.stop()}},e,this)}));return function t(r){return e.apply(this,arguments)}}()}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"displayName",{configurable:true,enumerable:true,writable:true,value:"App"});Object.defineProperty(g,"childContextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:d.default.any,headManager:d.default.object,router:d.default.object}});var O=function(e){(0,v.default)(t,e);function t(){(0,f.default)(this,t);return(0,p.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}(0,s.default)(t,[{key:"componentDidMount",value:function e(){this.scrollToHash()}},{key:"componentDidUpdate",value:function e(){this.scrollToHash()}},{key:"scrollToHash",value:function e(){var t=this.props.hash;if(!t)return;var r=document.getElementById(t);if(!r)return;setTimeout(function(){return r.scrollIntoView()},0)}},{key:"shouldComponentUpdate",value:function e(t){return!(0,h.default)(this.props,t)}},{key:"render",value:function e(){var t=this.props.children;return y.default.createElement(y.default.Fragment,null,t)}}]);return t}(y.Component);t.Container=O;Object.defineProperty(O,"contextTypes",{configurable:true,enumerable:true,writable:true,value:{_containerProps:d.default.any}});var j=(0,b.execOnce)(function(){false});function w(e){return{get query(){j();return e.query},get pathname(){j();return e.pathname},get asPath(){j();return e.asPath},back:function t(){j();e.back()},push:function t(r,n){j();return e.push(r,n)},pushTo:function t(r,n){j();var o=n?r:null;var a=n||r;return e.push(o,a)},replace:function t(r,n){j();return e.replace(r,n)},replaceTo:function t(r,n){j();var o=n?r:null;var a=n||r;return e.replace(o,a)}}}},202:function(e,t,r){var n=r(70);function o(){e.exports=o=n||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e};return o.apply(this,arguments)}e.exports=o},203:function(e,t,r){e.exports=r(98)},215:function(e,t,r){e.exports=r(216)},216:function(e,t,r){"use strict";var n=r(18);var o=r(4);Object.defineProperty(t,"__esModule",{value:true});t.default=void 0;var a=o(r(68));var u=o(r(217));var l=o(r(22));var i=o(r(8));var c=o(r(9));var f=o(r(23));var s=o(r(24));var p=o(r(97));var v=r(94);var y=n(r(5));var d=o(r(34));var h=o(r(219));var b=n(r(44));var m=r(17);var g=function(e){(0,s.default)(t,e);function t(e){var r;var n;(0,i.default)(this,t);for(var o=arguments.length,a=new Array(o>1?o-1:0),u=1;u<o;u++)a[u-1]=arguments[u];n=(0,f.default)(this,(r=t.__proto__||(0,l.default)(t)).call.apply(r,[this,e].concat(a)));n.linkClicked=n.linkClicked.bind((0,p.default)(n));n.formatUrls(e);return n}(0,c.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!O(o))return;var u=window.location.pathname;o=(0,v.resolve)(u,o);a=a?(0,v.resolve)(u,a):o;t.preventDefault();var l=this.props.scroll;null==l&&(l=a.indexOf("#")<0);var i=this.props.replace;var c=i?"replace":"push";b.default[c](o,a,{shallow:n}).then(function(e){if(!e)return;if(l){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,v.resolve)(t,this.href);b.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,u.default)(this.props.href)!==(0,u.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,v.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,v.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=y.default.createElement("a",null,t));var o=y.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,b._rewriteUrlForNextExport)(a.href));return y.default.cloneElement(o,a)}}]);return t}(y.Component);t.default=g;Object.defineProperty(g,"propTypes",{configurable:true,enumerable:true,writable:true,value:(0,h.default)({href:d.default.oneOfType([d.default.string,d.default.object]).isRequired,as:d.default.oneOfType([d.default.string,d.default.object]),prefetch:d.default.bool,replace:d.default.bool,shallow:d.default.bool,passHref:d.default.bool,scroll:d.default.bool,children:d.default.oneOfType([d.default.element,function(e,t){var r=e[t];"string"===typeof r&&j("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired})});function O(e){var t=(0,v.parse)(e,false,true);var r=(0,v.parse)((0,m.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var j=(0,m.execOnce)(m.warn)},217:function(e,t,r){e.exports=r(218)},218:function(e,t,r){var n=r(0);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},219:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(220);var o=c(n);var a=r(226);var u=c(a);var l=r(227);var i=c(l);function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var s="​";var p="prop-types-exact: "+s;var v={};function y(e){return(0,o["default"])(e,f({},p,v))}function d(e){return e&&e[p]===v}function h(e){if(!(0,i["default"])(e))throw new TypeError("given propTypes must be an object");if((0,u["default"])(e,p)&&!d(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,f({},p,y(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,u["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},220:function(e,t,r){"use strict";var n=r(100);var o=r(102);var a=r(104);var u=r(225);var l=a();n(l,{getPolyfill:a,implementation:o,shim:u});e.exports=l},221:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},222:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var u=t.length;if(u===+u)for(var l=0;l<u;l++)o.call(a,t[l],l,t);else for(var i in t)r.call(t,i)&&o.call(a,t[i],i,t)}},223:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var u="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==u)throw new TypeError(n+r);var l=o.call(arguments,1);var i;var c=function(){if(this instanceof i){var e=r.apply(this,l.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,l.concat(o.call(arguments)))};var f=Math.max(0,r.length-l.length);var s=[];for(var p=0;p<f;p++)s.push("$"+p);i=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(c);if(r.prototype){var v=function e(){};v.prototype=r.prototype;i.prototype=new v;v.prototype=null}return i}},224:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var u=Object.getOwnPropertyDescriptor(t,r);if(u.value!==o||true!==u.enumerable)return false}return true}},225:function(e,t,r){"use strict";var n=r(100);var o=r(104);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},226:function(e,t,r){var n=r(103);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},227:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[198]);return{page:e.default}});