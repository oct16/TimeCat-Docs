/*! For license information please see 1.cb2e8276.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],Array(100).concat([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(108);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return a.useThemeConfig}});var r=n(113);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return r.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return r.DEFAULT_SEARCH_TAG}});var o=n(109);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var c=n(117);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var s=n(118);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var i=n(119);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return i.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return i.useDocsPreferredVersionByPluginId}});var l=n(110);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return l.DocsPreferredVersionContextProvider}})},function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var a=n(22),r=n(105);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(a.default)();return{withBaseUrl:(n,a)=>function(e,t,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+c:c}(t,e,n,a)}}function c(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(10),c=n(105),s=n(11);const i=Object(a.createContext)({collectLink:()=>{}});var l=n(102),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:h,"data-noBrokenLinkCheck":b,autoAddBaseUrl:v=!0}=e,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:p}=Object(l.b)(),E=Object(a.useContext)(i),O=d||f,k=Object(c.a)(O),j=null==O?void 0:O.replace("pathname://",""),y=void 0!==j?(_=j,v&&(e=>e.startsWith("/"))(_)?p(_):_):void 0;var _;const C=Object(a.useRef)(!1),w=n?o.e:o.c,D=s.a.canUseIntersectionObserver;let P;Object(a.useEffect)((()=>(!D&&k&&window.docusaurus.prefetch(y),()=>{D&&P&&P.disconnect()})),[y,D,k]);const N=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,S=!y||!k||N;return y&&k&&!N&&!b&&E.collectLink(y),S?r.a.createElement("a",Object.assign({href:y},O&&!k&&{target:"_blank",rel:"noopener noreferrer"},g)):r.a.createElement(w,Object.assign({},g,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(y),C.current=!0)},innerRef:e=>{var t,n;D&&e&&k&&(t=e,n=()=>{window.docusaurus.prefetch(y)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))})),P.observe(t))},to:y||""},n&&{isActive:h,activeClassName:m}))}},function(e,t,n){try{e.exports=n(114)}catch(a){e.exports={}}},function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.r(t);var a=n(10);n.d(t,"MemoryRouter",(function(){return a.d})),n.d(t,"Prompt",(function(){return a.f})),n.d(t,"Redirect",(function(){return a.g})),n.d(t,"Route",(function(){return a.h})),n.d(t,"Router",(function(){return a.i})),n.d(t,"StaticRouter",(function(){return a.j})),n.d(t,"Switch",(function(){return a.k})),n.d(t,"generatePath",(function(){return a.l})),n.d(t,"matchPath",(function(){return a.m})),n.d(t,"useHistory",(function(){return a.n})),n.d(t,"useLocation",(function(){return a.o})),n.d(t,"useParams",(function(){return a.p})),n.d(t,"useRouteMatch",(function(){return a.q})),n.d(t,"withRouter",(function(){return a.r})),n.d(t,"BrowserRouter",(function(){return a.a})),n.d(t,"HashRouter",(function(){return a.b})),n.d(t,"Link",(function(){return a.c})),n.d(t,"NavLink",(function(){return a.e}))},function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(101),c=n(61),s=n.n(c);var i=function(){return r.a.createElement("nav",{"aria-label":"Skip navigation links"},r.a.createElement("button",{type:"button",tabIndex:0,className:s.a.skipToContent,onKeyDown:e=>{if(13!==e.keyCode)return;document.activeElement.blur();const t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}},"Skip to main content"))},l=n(100),u=n(128),d=n(62),f=n.n(d);var m=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(u.a)(),{announcementBar:n}=Object(l.useThemeConfig)();if(!n)return null;const{content:a,backgroundColor:c,textColor:s,isCloseable:i}=n;return!a||i&&e?null:r.a.createElement("div",{className:f.a.announcementBar,style:{backgroundColor:c,color:s},role:"banner"},r.a.createElement("div",{className:Object(o.a)(f.a.announcementBarContent,{[f.a.announcementBarCloseable]:i}),dangerouslySetInnerHTML:{__html:a}}),i?r.a.createElement("button",{type:"button",className:f.a.announcementBarClose,onClick:t,"aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)},h=n(3),b=()=>null,v=n(138),g=n.n(v),p=n(22),E=n(63),O=n.n(E);const k=({icon:e,style:t})=>r.a.createElement("span",{className:Object(o.a)(O.a.toggle,O.a.dark),style:t},e),j=({icon:e,style:t})=>r.a.createElement("span",{className:Object(o.a)(O.a.toggle,O.a.light),style:t},e);var y=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:a,lightIconStyle:o}}}=Object(l.useThemeConfig)(),{isClient:c}=Object(p.default)();return r.a.createElement(g.a,Object(h.a)({disabled:!c,icons:{checked:r.a.createElement(k,{icon:t,style:n}),unchecked:r.a.createElement(j,{icon:a,style:o})}},e))},_=n(112),C=n(106),w=n(131);var D=e=>{const t=Object(C.useLocation)(),[n,r]=Object(a.useState)(!e),o=Object(a.useRef)(!1),[c,s]=Object(a.useState)(0),[i,l]=Object(a.useState)(0),u=Object(a.useCallback)((e=>{null!==e&&l(e.getBoundingClientRect().height)}),[]);return Object(w.a)((({scrollY:t})=>{if(!e)return;if(t<i)return;if(o.current)return o.current=!1,r(!1),void s(t);c&&0===t&&r(!0);const n=document.documentElement.scrollHeight-i,a=window.innerHeight;c&&t>=c?r(!1):t+a<n&&r(!0),s(t)}),[c,i,o]),Object(a.useEffect)((()=>{e&&c&&r(!0)}),[t.pathname]),Object(a.useEffect)((()=>{e&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}},P=n(132),N=n(133),S=n(111);function V({mobile:e,...t}){const{siteConfig:{baseUrl:n},i18n:{defaultLocale:a,currentLocale:o,locales:c,localeConfigs:s}}=Object(p.default)(),{pathname:i}=Object(C.useLocation)();function l(e){return s[e].label}const u=o===a?n:n.replace(`/${o}/`,"/"),d=i.replace(n,"");const f=c.map((e=>{const t=`${function(e){return e===a?`${u}`:`${u}${e}/`}(e)}${d}`;return{isNavLink:!0,label:l(e),to:`pathname://${t}`,target:"_self",autoAddBaseUrl:!1,className:e===o?"dropdown__link--active":""}})),m=e?"Languages":l(o);return r.a.createElement(S.a,Object(h.a)({},t,{mobile:e,label:m,items:f}))}const T={default:()=>S.a,localeDropdown:()=>V,docsVersion:()=>n(143).default,docsVersionDropdown:()=>n(144).default,doc:()=>n(145).default};function A({type:e,...t}){const n=((e="default")=>{const t=T[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()})(e);return r.a.createElement(n,t)}var L=n(137),x=n(134),I=n(65),M=n.n(I);const B="right";var R=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:c}}=Object(l.useThemeConfig)(),[s,i]=Object(a.useState)(!1),[u,d]=Object(a.useState)(!1),{isDarkTheme:f,setLightTheme:m,setDarkTheme:v}=Object(_.a)(),{navbarRef:g,isNavbarVisible:p}=D(t);Object(P.a)(s);const E=Object(a.useCallback)((()=>{i(!0)}),[i]),O=Object(a.useCallback)((()=>{i(!1)}),[i]),k=Object(a.useCallback)((e=>e.target.checked?v():m()),[m,v]),j=Object(N.a)();Object(a.useEffect)((()=>{j===N.b.desktop&&i(!1)}),[j]);const{leftItems:C,rightItems:w}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:B)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:B)}))}}(e);return r.a.createElement("nav",{ref:g,className:Object(o.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":s,[M.a.navbarHideable]:t,[M.a.navbarHidden]:!p})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:E,onKeyDown:E},r.a.createElement(x.a,null)),r.a.createElement(L.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(o.a)("navbar__title",{[M.a.hideLogoText]:u})}),C.map(((e,t)=>r.a.createElement(A,Object(h.a)({},e,{key:t}))))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},w.map(((e,t)=>r.a.createElement(A,Object(h.a)({},e,{key:t})))),!c&&r.a.createElement(y,{className:M.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:f,onChange:k}),r.a.createElement(b,{handleSearchBarToggle:d,isSearchBarExpanded:u}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:O}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(L.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:O}),!c&&s&&r.a.createElement(y,{"aria-label":"Dark mode toggle in sidebar",checked:f,onChange:k})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>r.a.createElement(A,Object(h.a)({mobile:!0},e,{onClick:O,key:t})))))))))},$=n(103),U=n(102),F=n(66),H=n.n(F);function X({to:e,href:t,label:n,prependBaseUrlToHref:a,...o}){const c=Object(U.a)(e),s=Object(U.a)(t,{forcePrependBaseUrl:!0});return r.a.createElement($.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:a?s:t}:{to:c},o),n)}const G=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var W=function(){const{footer:e}=Object(l.useThemeConfig)(),{copyright:t,links:n=[],logo:a={}}=e||{},c=Object(U.a)(a.src);return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},n&&n.length>0&&r.a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(X,e))))):null)))),(a||t)&&r.a.createElement("div",{className:"footer__bottom text--center"},a&&a.src&&r.a.createElement("div",{className:"margin-bottom--sm"},a.href?r.a.createElement("a",{href:a.href,target:"_blank",rel:"noopener noreferrer",className:H.a.footerLogoLink},r.a.createElement(G,{alt:a.alt,url:c})):r.a.createElement(G,{alt:a.alt,url:c})),t?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null},Y=n(11);const K="light",q="dark",z=e=>e===q?q:K,J=()=>Y.a.canUseDOM?z(document.documentElement.getAttribute("data-theme")):K,Q=e=>{try{localStorage.setItem("theme",z(e))}catch(t){console.error(t)}};var Z=()=>{const{colorMode:{disableSwitch:e,respectPrefersColorScheme:t}}=Object(l.useThemeConfig)(),[n,r]=Object(a.useState)(J),o=Object(a.useCallback)((()=>{r(K),Q(K)}),[]),c=Object(a.useCallback)((()=>{r(q),Q(q)}),[]);return Object(a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",z(n))}),[n]),Object(a.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&r(z(e))}catch(t){console.error(t)}}),[r]),Object(a.useEffect)((()=>{e&&!t||window.matchMedia("(prefers-color-scheme: dark)").addListener((({matches:e})=>{r(e?q:K)}))}),[]),{isDarkTheme:n===q,setLightTheme:o,setDarkTheme:c}},ee=n(130);var te=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}=Z();return r.a.createElement(ee.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:a}},e.children)};const ne="docusaurus.tab.";var ae=()=>{const[e,t]=Object(a.useState)({}),n=Object(a.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(n){console.error(n)}}),[]);return Object(a.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(ne)){e[n.substring(ne.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}};const re="docusaurus.announcement.dismiss",oe="docusaurus.announcement.id";var ce=()=>{const{announcementBar:e}=Object(l.useThemeConfig)(),[t,n]=Object(a.useState)(!0),r=Object(a.useCallback)((()=>{localStorage.setItem(re,"true"),n(!0)}),[]);return Object(a.useEffect)((()=>{if(!e)return;const{id:t}=e;let a=localStorage.getItem(oe);"annoucement-bar"===a&&(a="announcement-bar");const r=t!==a;localStorage.setItem(oe,t),r&&localStorage.setItem(re,"false"),(r||"false"===localStorage.getItem(re))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:r}},se=n(129);var ie=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=ae(),{isAnnouncementBarClosed:a,closeAnnouncementBar:o}=ce();return r.a.createElement(se.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:a,closeAnnouncementBar:o}},e.children)};function le({children:e}){return r.a.createElement(te,null,r.a.createElement(ie,null,r.a.createElement(l.DocsPreferredVersionContextProvider,null,e)))}var ue=n(24);function de({locale:e,version:t,tag:n}){return r.a.createElement(ue.a,null,e&&r.a.createElement("meta",{name:"docusaurus_locale",content:`${e}`}),t&&r.a.createElement("meta",{name:"docusaurus_version",content:t}),n&&r.a.createElement("meta",{name:"docusaurus_tag",content:n}))}function fe(e){const{siteConfig:t,i18n:{currentLocale:n}}=Object(p.default)(),{favicon:a,themeConfig:{image:o,metadatas:c},url:s}=t,{title:i,description:u,image:d,keywords:f,permalink:m,searchMetadatas:b}=e,v=Object(l.useTitleFormatter)(i),g=d||o,E=Object(U.a)(g,{absolute:!0}),O=Object(U.a)(a),k=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(ue.a,null,r.a.createElement("html",{lang:k}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),a&&r.a.createElement("link",{rel:"shortcut icon",href:O}),u&&r.a.createElement("meta",{name:"description",content:u}),u&&r.a.createElement("meta",{property:"og:description",content:u}),f&&f.length&&r.a.createElement("meta",{name:"keywords",content:f.join(",")}),g&&r.a.createElement("meta",{property:"og:image",content:E}),g&&r.a.createElement("meta",{name:"twitter:image",content:E}),g&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),m&&r.a.createElement("meta",{property:"og:url",content:s+m}),m&&r.a.createElement("link",{rel:"canonical",href:s+m}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),r.a.createElement(de,Object(h.a)({tag:l.DEFAULT_SEARCH_TAG,locale:n},b)),r.a.createElement(ue.a,null,c.map(((e,t)=>r.a.createElement("meta",Object(h.a)({key:`metadata_${t}`},e))))))}n(67);var me=function(){Object(a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};n(68);t.a=function(e){const{children:t,noFooter:n,wrapperClassName:a}=e;return me(),r.a.createElement(le,null,r.a.createElement(fe,e),r.a.createElement(i,null),r.a.createElement(m,null),r.a.createElement(R,null),r.a.createElement("div",{className:Object(o.a)("main-wrapper",a)},t),!n&&r.a.createElement(W,null))}},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const r=a(n(22));t.useThemeConfig=function(){return r.default().siteConfig.themeConfig}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const a=n(104);t.isDocsPluginEnabled=!!a.useAllDocsData},function(e,t,n){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,n,a){void 0===a&&(a=n),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,a){void 0===a&&(a=n),e[a]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&a(t,e,n);return r(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const s=o(n(0)),i=n(108),l=n(109),u=n(104),d=c(n(120));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const a={};return e.forEach((e=>{a[e]=function(e){const a=d.default.read(e,t);return n[e].versions.some((e=>e.name===a))?{preferredVersionName:a}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),a}function m(){const e=u.useAllDocsData(),t=i.useThemeConfig().docs.versionPersistence,n=s.useMemo((()=>Object.keys(e)),[e]),[a,r]=s.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));s.useEffect((()=>{r(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[a,s.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),r((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[r])]}const h=s.createContext(null);function b({children:e}){const t=m();return s.default.createElement(h.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return l.isDocsPluginEnabled?s.default.createElement(b,null,e):s.default.createElement(s.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=s.useContext(h);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(101),s=n(103),i=n(102),l=n(106),u=n(100);function d({activeBasePath:e,activeBaseRegex:t,to:n,href:r,label:c,activeClassName:l="navbar__link--active",prependBaseUrlToHref:u,...d}){const f=Object(i.a)(n),m=Object(i.a)(e),h=Object(i.a)(r,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(a.a)({},r?{target:"_blank",rel:"noopener noreferrer",href:u?h:r}:{isNavLink:!0,activeClassName:l,to:f,...e||t?{isActive:(e,n)=>t?new RegExp(t).test(n.pathname):n.pathname.startsWith(m)}:null},d),c)}function f({items:e,position:t,className:n,...s}){const i=Object(r.useRef)(null),l=Object(r.useRef)(null),[u,f]=Object(r.useState)(!1);Object(r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const m=(e,t=!1)=>Object(c.a)({"navbar__item navbar__link":!t,dropdown__link:t},e);return e?o.a.createElement("div",{ref:i,className:Object(c.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t,"dropdown--show":u})},o.a.createElement(d,Object(a.a)({className:m(n)},s,{onClick:s.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!u))}}),s.label),o.a.createElement("ul",{ref:l,className:"dropdown__menu"},e.map((({className:t,...n},r)=>o.a.createElement("li",{key:r},o.a.createElement(d,Object(a.a)({onKeyDown:t=>{if(r===e.length-1&&"Tab"===t.key){t.preventDefault(),f(!1);const e=i.current.nextElementSibling;e&&e.focus()}},activeClassName:"dropdown__link--active",className:m(t,!0)},n))))))):o.a.createElement(d,Object(a.a)({className:m(n)},s))}function m({items:e,className:t,position:n,...s}){var i,f;const m=Object(r.useRef)(null),{pathname:h}=Object(l.useLocation)(),[b,v]=Object(r.useState)((()=>{var t;return null===(t=!(null!=e&&e.some((e=>Object(u.isSamePath)(e.to,h)))))||void 0===t||t})),g=(e,t=!1)=>Object(c.a)("menu__link",{"menu__link--sublist":t},e);if(!e)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(a.a)({className:g(t)},s)));const p=null!==(i=m.current)&&void 0!==i&&i.scrollHeight?`${null===(f=m.current)||void 0===f?void 0:f.scrollHeight}px`:void 0;return o.a.createElement("li",{className:Object(c.a)("menu__list-item",{"menu__list-item--collapsed":b})},o.a.createElement(d,Object(a.a)({role:"button",className:g(t,!0)},s,{onClick:()=>{v((e=>!e))}}),s.label),o.a.createElement("ul",{className:"menu__list",ref:m,style:{height:b?void 0:p}},e.map((({className:e,...t},n)=>o.a.createElement("li",{className:"menu__list-item",key:n},o.a.createElement(d,Object(a.a)({activeClassName:"menu__link--active",className:g(e)},t,{onClick:s.onClick})))))))}t.a=function({mobile:e=!1,...t}){const n=e?m:f;return o.a.createElement(n,t)}},function(e,t,n){"use strict";var a=n(0),r=n(130);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const a=n(106),r=n(115),o=n(116);t.useAllDocsData=()=>r.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>r.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:r}=a.useLocation();return o.getActivePlugin(n,r,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:r}=a.useLocation();if(n){return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,r)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:r}=a.useLocation();return o.getActiveVersion(n,r)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:r}=a.useLocation();return o.getActiveDocContext(n,r)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:r}=a.useLocation();return o.getDocVersionSuggestions(n,r)}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return c}));var a=n(22);function r(){const{globalData:e}=Object(a.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){const t=r()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function c(e,t="default"){const n=o(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const a=n(106);t.getActivePlugin=function(e,t,n={}){const r=Object.entries(e).find((([e,n])=>!!a.matchPath(t,{path:n.path,exact:!1,strict:!1}))),o=r?{pluginId:r[0],pluginData:r[1]}:void 0;if(!o&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return o},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const r=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==r)),r].find((e=>!!a.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const r=t.getActiveVersion(e,n),o=null==r?void 0:r.docs.find((e=>!!a.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:r,activeDoc:o,alternateDocVersions:o?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((a=>{a.id===t&&(n[e.name]=a)}))})),n}(o.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const a=t.getLatestVersion(e),r=t.getActiveDocContext(e,n),o=r.activeVersion!==a;return{latestDocSuggestion:o?null==r?void 0:r.alternateDocVersions[a.name]:void 0,latestVersionSuggestion:o?a:void 0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},function(e,t,n){"use strict";var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const r=a(n(22));t.useTitleFormatter=e=>{const{siteConfig:t={}}=r.default(),{title:n,titleDelimiter:a="|"}=t;return e&&e.trim().length?`${e.trim()} ${a} ${n}`:n}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const a=n(0),r=n(110),o=n(104),c=n(121);t.useDocsPreferredVersion=function(e=c.DEFAULT_PLUGIN_ID){const t=o.useDocsData(e),[n,s]=r.useDocsPreferredVersionContext(),{preferredVersionName:i}=n[e];return{preferredVersion:i?t.versions.find((e=>e.name===i)):null,savePreferredVersionName:a.useCallback((t=>{s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){const e=o.useAllDocsData(),[t]=r.useDocsPreferredVersionContext(),n=Object.keys(e),a={};return n.forEach((n=>{a[n]=function(n){const a=e[n],{preferredVersionName:r}=t[n];return r?a.versions.find((e=>e.name===r)):null}(n)})),a}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const a=e=>`docs-preferred-version-${e}`,r={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(a(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(a(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(a(e))}};t.default=r},function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return a}));const a="default"},,,,,,,function(e,t,n){"use strict";var a=n(0),r=n(129);t.a=function(){const e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)(void 0);t.a=r},function(e,t,n){"use strict";var a=n(0);const r=n.n(a).a.createContext(void 0);t.a=r},function(e,t,n){"use strict";var a=n(0),r=n(11);const o=()=>({scrollX:r.a.canUseDOM?window.pageXOffset:0,scrollY:r.a.canUseDOM?window.pageYOffset:0});t.a=(e,t=[])=>{const[n,r]=Object(a.useState)(o()),c=()=>{const t=o();r(t),e&&e(t)};return Object(a.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",c,e),()=>window.removeEventListener("scroll",c,e)}),t),n}},function(e,t,n){"use strict";var a=n(0);t.a=function(e=!0){Object(a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},function(e,t,n){"use strict";n.d(t,"b",(function(){return r}));var a=n(0);const r={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?r.desktop:r.mobile}const[n,o]=Object(a.useState)(t);return Object(a.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){o(t())}}),[]),n}},function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r);t.a=({width:e=30,height:t=30,className:n,...r})=>o.a.createElement("svg",Object(a.a)({"aria-label":"Menu",className:n,width:e,height:t,viewBox:"0 0 30 30",role:"img",focusable:"false"},r),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))},,,function(e,t,n){"use strict";var a=n(3),r=n(0),o=n.n(r),c=n(103),s=n(101),i=n(22),l=n(112),u=n(64),d=n.n(u);var f=e=>{const{isClient:t}=Object(i.default)(),{isDarkTheme:n}=Object(l.a)(),{sources:r,className:c,alt:u="",...f}=e,m=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,m.map((e=>o.a.createElement("img",Object(a.a)({key:e,src:r[e],alt:u,className:Object(s.a)(d.a.themedImage,d.a[`themedImage--${e}`],c)},f)))))},m=n(102),h=n(100),b=n(105);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:n,logo:r={src:""}}}=Object(h.useThemeConfig)(),{imageClassName:s,titleClassName:l,...u}=e,d=Object(m.a)(r.href||"/"),v=r.target?{target:r.target}:Object(b.a)(d)?{}:{rel:"noopener noreferrer",target:"_blank"},g={light:Object(m.a)(r.src),dark:Object(m.a)(r.srcDark||r.src)};return o.a.createElement(c.a,Object(a.a)({to:d},u,v),r.src&&o.a.createElement(f,{key:t,className:s,sources:g,alt:r.alt||n||"Logo"}),null!=n&&o.a.createElement("strong",{className:l},n))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),c=f(o),s=f(n(139)),i=f(n(1)),l=f(n(140)),u=f(n(141)),d=n(142);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=(t.icons,function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["className","icons"])),o=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",a({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(l.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var o=typeof a;if("string"===o||"number"===o)e.push(a);else if(Array.isArray(a)&&a.length){var c=r.apply(null,a);c&&e.push(c)}else if("object"===o)for(var s in a)n.call(a,s)&&a[s]&&e.push(s)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("title",null,"switch-check"),o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=n(0),o=(a=r)&&a.__esModule?a:{default:a};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("title",null,"switch-x"),o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var a=e.pageX;if(void 0!==a)return{x:a,y:e.pageY}}return{x:0,y:0}}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var a=n(3),r=n(0),o=n.n(r),c=n(111),s=n(104),i=n(100);function l({label:e,to:t,docsPluginId:n,...r}){var l;const u=Object(s.useActiveVersion)(n),{preferredVersion:d}=Object(i.useDocsPreferredVersion)(n),f=Object(s.useLatestVersion)(n),m=null!==(l=null!=u?u:d)&&void 0!==l?l:f,h=null!=e?e:m.label,b=null!=t?t:(e=>e.docs.find((t=>t.id===e.mainDocId)))(m).path;return o.a.createElement(c.a,Object(a.a)({},r,{label:h,to:b}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(0),o=n.n(r),c=n(111),s=n(104),i=n(100);const l=e=>e.docs.find((t=>t.id===e.mainDocId));function u({mobile:e,docsPluginId:t,dropdownActiveClassDisabled:n,dropdownItemsBefore:r,dropdownItemsAfter:u,...d}){var f,m;const h=Object(s.useActiveDocContext)(t),b=Object(s.useVersions)(t),v=Object(s.useLatestVersion)(t),{preferredVersion:g,savePreferredVersionName:p}=Object(i.useDocsPreferredVersion)(t);const E=null!==(f=null!==(m=h.activeVersion)&&void 0!==m?m:g)&&void 0!==f?f:v,O=e?"Versions":E.label,k=e?void 0:l(E).path;return o.a.createElement(c.a,Object(a.a)({},d,{mobile:e,label:O,to:k,items:function(){const e=b.map((e=>{const t=(null==h?void 0:h.alternateDocVersions[e.name])||l(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==h?void 0:h.activeVersion),onClick:()=>{p(e.name)}}})),t=[...r,...e,...u];if(!(t.length<=1))return t}(),isActive:n?()=>!1:void 0}))}},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var a=n(3),r=n(0),o=n.n(r),c=n(111),s=n(104),i=n(101),l=n(100);function u({docId:e,activeSidebarClassName:t,label:n,docsPluginId:r,...u}){var d;const{activeVersion:f,activeDoc:m}=Object(s.useActiveDocContext)(r),{preferredVersion:h}=Object(l.useDocsPreferredVersion)(r),b=Object(s.useLatestVersion)(r),v=null!==(d=null!=f?f:h)&&void 0!==d?d:b,g=v.docs.find((t=>t.id===e));if(!g)throw new Error(`DocNavbarItem: couldn't find any doc with id=${e} in version ${v.name}.\nAvailable docIds=\n- ${v.docs.join("\n- ")}`);return o.a.createElement(c.a,Object(a.a)({exact:!0},u,{className:Object(i.a)(u.className,{[t]:m&&m.sidebar===g.sidebar}),label:null!=n?n:g.id,to:g.path}))}}])]);