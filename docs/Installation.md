---
id: doc1
title: Installation
sidebar_label: Installation
slug: /
---

import useBaseUrl from '@docusaurus/useBaseUrl'

### Using NPM 

[![npm (tag)](https://img.shields.io/npm/v/timecatjs/latest)](https://www.npmjs.com/package/timecatjs)

```shell
$ npm i timecatjs
```


### Using Yarn

```shell
$ yarn add timecatjs
```

### Install module we actually need

```shell
$ npm i @timecat/recorder
$ npm i @timecat/player
```

### Import in Browser

Add script tags in your browser and use the global variable ``TimeCat``, you can choose the follow CDN:

<ul style={{ listStyle: "decimal"}}>
    <li>
        <a href="https://cdn.jsdelivr.net/npm/timecatjs"><img align="top" width="100" src={useBaseUrl('img/jsdelivr.png')} /></a>
    </li>
    <li>
        <a href="https://unpkg.com/timecatjs"><img align="top" width="100" src={useBaseUrl('img/unpkg.png')} /></a> 
    </li>
</ul>

```js
<script src="https://cdn.jsdelivr.net/npm/timecatjs"></script>
<script src="https://unpkg.com/timecatjs"></script>
```

