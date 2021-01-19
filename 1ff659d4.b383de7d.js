(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{100:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i}));var r=n(22),a=n(103);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:c=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=c();return n(e,t)}},103:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(97)),i=n(100),o={id:"doc1",title:"Installation",sidebar_label:"Installation",slug:"/"},l={unversionedId:"doc1",id:"doc1",isDocsHomePage:!1,title:"Installation",description:"Using NPM",source:"@site/docs/Installation.md",slug:"/",permalink:"/docs/",editUrl:"https://github.com/oct16/TimeCat-Docs/edit/master/docs/Installation.md",version:"current",sidebar_label:"Installation",sidebar:"someSidebar",next:{title:"Quick Start",permalink:"/docs/quick-start"}},s=[{value:"Using NPM",id:"using-npm",children:[]},{value:"Using Yarn",id:"using-yarn",children:[]},{value:"Install module we actually need",id:"install-module-we-actually-need",children:[]},{value:"Import in Browser",id:"import-in-browser",children:[]}],u={toc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"using-npm"},"Using NPM"),Object(c.b)("p",null,Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/timecatjs"}),Object(c.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/timecatjs/latest",alt:"npm (tag)"})))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ npm i timecatjs\n")),Object(c.b)("h3",{id:"using-yarn"},"Using Yarn"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ yarn add timecatjs\n")),Object(c.b)("h3",{id:"install-module-we-actually-need"},"Install module we actually need"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell"}),"$ npm i @timecat/recorder\n$ npm i @timecat/player\n")),Object(c.b)("h3",{id:"import-in-browser"},"Import in Browser"),Object(c.b)("p",null,"Add script tags in your browser and use the global variable ",Object(c.b)("inlineCode",{parentName:"p"},"TimeCat"),", you can choose the follow CDN:"),Object(c.b)("ul",{style:{listStyle:"decimal"}},Object(c.b)("li",null,Object(c.b)("a",{href:"https://www.jsdelivr.com/package/npm/timecatjs"},Object(c.b)("img",{align:"top",width:"100",src:Object(i.a)("img/jsdelivr.png")}))),Object(c.b)("li",null,Object(c.b)("a",{href:"https://unpkg.com/timecatjs"},Object(c.b)("img",{align:"top",width:"100",src:Object(i.a)("img/unpkg.png")})))),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'<script src="https://www.jsdelivr.com/package/npm/timecatjs"><script>\n')))}p.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||c;return n?a.a.createElement(m,o(o({ref:t},s),{},{components:n})):a.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<c;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);