---
id: doc2
title: Quick Start
sidebar_label: Quick Start
slug: /quick-start
---

## Import TimeCat

### Fully import
```ts
import { Recorder, Player } from 'timecatjs';
```

### Import modules we actually need

```ts
import { Recorder } from '@timecat/recorder'
import { Player } from '@timecat/player'
```

### [Import from CDN](/docs/#import-in-browser)
```ts
const { Recorder, Player } = window.TimeCat
```
## Run TimeCat

### Record

```ts
const recorder = new Recorder()
```
### Replay

```ts
const player = new Player()
```
