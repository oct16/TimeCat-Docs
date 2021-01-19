(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(3),a=r(7),o=(r(0),r(97)),i={id:"doc10",title:"Advanced",sidebar_label:"Advanced",slug:"/advanced"},c={unversionedId:"doc10",id:"doc10",isDocsHomePage:!1,title:"Advanced",description:"Record Options",source:"@site/docs/advanced.md",slug:"/advanced",permalink:"/docs/advanced",editUrl:"https://github.com/oct16/TimeCat-Docs/edit/master/docs/advanced.md",version:"current",sidebar_label:"Advanced"},l=[{value:"Articles",id:"articles",children:[]}],s={toc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h4",{id:"record-options"},"Record Options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// record page\ninterface RecordOptions {\n    write: boolean // write data to indexedDB, default is true\n    keep: boolean // keep data in DB otherwise auto-clear, default is true\n    audio: boolean // if your want record audio, default is false\n    font: boolean // record font, default is false\n    plugins: RecorderPlugin[] // extend plugins here\n    visibleChange: boolean // stop or resume recorder when visibleChange, default is false\n    rewriteResource: (RewriteItem | PreFetchItem)[]\n}\n\n// make 'http://a.com/path' => 'http://b.com/path' for keep resource\ntype RewriteItem = {\n    matches: string[] // example: ['css']\n    rewrite: {\n        replaceOrigin: string  // example: 'https://xxx.com'\n        folderPath?: string // /path/xxx\n        fn?: (pre: string, next: string) => string | void\n    }\n}\n\ntype PreFetchItem = {\n    matches: string[] // example: ['css']\n    type: 'preFetch' // use preFetch mode, resolve the problem like .tff or .woff cross origin\n    rewrite: {\n        replaceOrigin?: string  // example: 'https://xxx.com'\n        folderPath?: string // /path/xxx\n        crossUrl?: string // is a cross origin server url, default is use https://allorigins.win/\n        matches?: (string | RegExp)[] // is subMatches, example: ['woff', 'ttf']\n        fn?: (pre: string, next: string) => string | void\n    }\n}\n\n// default use IndexedDB to save records\nconst recorder = new Recorder(Partial<RecordOptions>)\n\n// receive data here\nrecorder.onData((data: RecordData) => void)\n\n// stop record\nrecorder.destroy()\n\n// clear all records in db\nrecorder.clearDB()\n\n// write a plugin \nclass ExamplePlugin {\n    constructor(options) { /** init plugin options */ }\n\n    apply(recorder) {\n        const { plugin, db } = recorder\n\n        type HooksType = 'beforeRun' | 'run' | 'emit' | 'end'\n        plugin(HooksType, () => void)\n        plugin('emit', record => {\n            // get record\n            console.log(record)\n            // you can modify record here\n            record['some property'] = doSomething\n        })\n\n        // read or write to indexedDB\n        const records = await db.readRecords()\n        db.deleteRecords(range: { lowerBound: <recordID>, upperBound: <recordID> })\n        db.clear()\n        db.doSomething()...\n    }\n}\n\nnew Recorder({ plugins: [new ExamplePlugin(options...)] })\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/oct16/TimeCat/blob/master/examples/todo.html#L257-L275"}),"Record Example")," ")),Object(o.b)("h4",{id:"replay"},"Replay"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"// replay record\ninterface ReplayOptions {\n    target: string | HTMLElement // which element has contained the Player, default is Body\n    records: RecordData[] // play with records data\n    // receive data in live mode, see examples/mirror\n    receiver: ((data: RecordData) => void) => void\n    autoplay: boolean // autoplay when data loaded\n    heatPoints: boolean // show heatPoints in progress bar, default is false\n    timeMod: 'recordingTime' | 'durationTime' // default is durationTime\n    fastForward: number[] // present the fast-forward speeds in progress bar, default is [4,16]\n}\n\nconst player = new Player(Partial<ReplayOptions>)\n\ntype EventTypes = 'play' | 'stop' | 'pause' | 'speed' | 'resize'\n\nplayer.on(eventType: EventTypes, (...args) => {\n    // receive event here\n})\n\nplayer.destroy() // destroy player\n\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/oct16/TimeCat/blob/master/examples/replay.html#L1-L29"}),"Replay example"))),Object(o.b)("h4",{id:"export"},"Export"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"\nimport { exportReplay } from 'timecatjs'\n\n// export html file\ninterface ExportOptions {\n    scripts: ScriptItem[] // inject script in html\n    autoplay: boolean // autoplay when data loaded\n    audioExternal: boolean // export audio as a file, default is inline\n    dataExternal: boolean // export data json as a file, default is inline\n}\n\nexportReplay(Partial<ExportOptions>)\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/oct16/TimeCat/blob/5172352a6494c1182e83452605677796e0fe0f46/packages/player/src/keyboard.ts#L96-L154"}),"Export Example"))),Object(o.b)("h2",{id:"articles"},"Articles"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/record-and-replay"}),"TimeCat \u5165\u95e8\uff1a\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u5e94\u7528")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/upload-to-server"}),"TimeCat \u8fdb\u9636\uff1a\u628a\u6570\u636e\u4e0a\u4f20\u5230\u670d\u52a1\u5668")),Object(o.b)("li",{parentName:"ul"},"TimeCat \u9ad8\u7ea7 // TODO")))}p.isMDXComponent=!0},97:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,m=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return r?a.a.createElement(m,c(c({ref:t},s),{},{components:r})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);