import { ModuleConfig } from '..'

const Shimmer: ModuleConfig = {
  Interval: {
    type: 'set',
    label: 'Interval',
    values: ['- 2 Oct', '- 1 Oct', '+ 1 Oct', '+ 2 Oct']
  },
  Delay: {
    type: 'range',
    label: 'Pre Delay',
    min: 0,
    max: 2000,
    step: 1,
    unit: ' ms'
  },
  ReverbTime: {
    type: 'range',
    label: 'Reverb Time',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Tone: {
    type: 'range',
    label: 'Tone',
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
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default Shimmer
