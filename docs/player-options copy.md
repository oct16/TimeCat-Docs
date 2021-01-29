---
id: doc23
title: Player Options
sidebar_label: Player Options
slug: /player-options
---

:::caution

TimeCat is going rapid iteration, The API may not stable, If you have any questions, please create a issues or contact the author

:::

## Player Option

```ts
interface PlayerOptions {
    target?: string | HTMLElement // which element has contained the Player, default is Document Body
    records?: RecordData[] // play with records data
    // receive data in live mode, see examples/mirror
    receiver?: ((data: RecordData) => void) => void
    autoplay?: boolean // autoplay when data loaded
    heatPoints?: boolean // show heatPoints in progress bar, default is false
    timeMod?: 'recordingTime' | 'durationTime' // default is durationTime
    fastForward?: number[] // present the fast-forward speeds in progress bar, default is [2, 8]
}

const player = new Player(PlayerOptions)

type EventTypes = 'play' | 'stop' | 'pause' | 'speed' | 'resize'

player.on(eventType: EventTypes, (...args) => {
    // receive event here
})

// destroy player
player.destroy({ removeDOM: boolean})
// set removeDOM will remove player ui

```

## Export
```ts
import { exportReplay } from 'timecatjs'

// export html file
interface ExportOptions {
    records?: ReplayData[] // default from IndexDB
    scripts?: ScriptItem[] // inject script in html
    autoplay?: boolean // autoplay when data loaded
    audioExternal?: boolean // export audio as a file, default is inline
    dataExternal?: boolean // export data json as a file, default is inline
}

exportReplay(ExportOptions)
```
