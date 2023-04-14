import { ModuleConfig } from '..'

const TimeWarp: ModuleConfig = {
  Warp: {
    type: 'range',
    label: 'Warp',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Delay: {
    type: 'range',
    label: 'Delay',
    min: 200,
    max: 2400,
    step: 1,
    unit: ' ms'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Feedback: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default TimeWarp
