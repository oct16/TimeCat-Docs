---
id: doc22
title: Recorder Options
sidebar_label: Recorder Options
slug: /recorder-options
---


:::caution

TimeCat is going rapid iteration, The API may not stable, If you have any questions, please create a issues or contact the author

:::

## Start Record

```ts
const recorder = new Recorder(RecordOptions)
```

## Record Options

```ts
interface RecordOptions {
    write?: boolean // write data to indexedDB, default is true
    keep?: boolean // keep data in Storage otherwise auto-clear, default is true
    audio?: boolean // if your want record audio, default is false
    font?: boolean // record font, default is false
    plugins?: RecorderPlugin[] // extend plugins here
    visibleChange?: boolean // stop or resume recorder when visibleChange, default is false
    rewriteResource?: (RewriteItem | PreFetchItem)[]
}

// make 'http://a.com/path' => 'http://b.com/path' for keep resource
type RewriteItem = {
    matches: string[] // example: ['css']
    rewrite: {
        replaceOrigin: string  // example: 'https://xxx.com'
        folderPath?: string // /path/xxx
        fn?: (pre: string, next: string) => string | void
    }
}

type PreFetchItem = {
    matches: string[] // example: ['css']
    type: 'preFetch' // use preFetch mode, resolve the problem like .tff or .woff cross origin
    rewrite: {
        replaceOrigin?: string  // example: 'https://xxx.com'
        folderPath?: string // /path/xxx
        crossUrl?: string // is a cross origin server url, default is use https://allorigins.win/
        matches?: (string | RegExp)[] // is subMatches, example: ['woff', 'ttf']
        fn?: (pre: string, next: string) => string | void
    }
}
```

## Recorder Plugin

see [Recorder Plugin](/docs/plugin)

## Usage Example

```ts
const recorder = new Recorder()

// receive data on callback
recorder.onData((data: RecordData) => {
    // get records
})

// stop record and clean all watchers
recorder.destroy()

// clear all records in db
recorder.clearDB()
```