---
id: doc24
title: Write A Recorder Plugin
sidebar_label: Recorder Plugin
slug: /plugin
---

```ts
class ExamplePlugin {
    
    constructor(options) { /** init plugin options */ }

    apply(recorder) {
        const { plugin, db } = recorder

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
