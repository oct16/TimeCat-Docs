---
id: doc24
title: Write A Recorder Plugin
sidebar_label: Recorder Plugin
slug: /plugin
---

```ts
import { Watcher } from '@timecat/recorder'

// define error watcher example
class LogErrorWatcher extends Watcher {
    init() {
        window.addEventListener('error', ErrorEvent => {
            const { message, filename, lineno, colno, error } = ErrorEvent
            this.emitData('type your define', { message, filename, lineno, colno, error })
        })
    }
}

class ExamplePlugin {
    constructor(options) { /** init plugin options */ }

    apply(recorder) {
        const { plugin, db, addWatcher } = recorder

        addWatcher(LogErrorWatcher)

        type HooksType = 'beforeRun' | 'run' | 'emit' | 'end'
        
        plugin(HooksType, () => void)
        
        plugin('emit', record => {
            // get record
            console.log(record)
            // you can modify record here
            record['some property'] = doSomething
        })

        plugin('end', () => {
            console.log('recording finish')
        })

        // read or write to indexedDB
        const records = await db.readRecords()
        db.deleteRecords(range: { lowerBound: <recordID>, upperBound: <recordID> })
        db.clear()
        db.doSomething()...
    }
}

new Recorder({ plugins: [new ExamplePlugin(options...)] })
```
