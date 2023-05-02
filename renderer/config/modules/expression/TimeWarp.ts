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
    type: 'range|set',
    label: 'Delay',
    min: 200,
    max: 2400,
    step: 1,
    unit: ' ms',
    values: [
      '1/128',
      '1/64',
      '1/32T',
      '1/32',
      '1/16T',
      '1/16',
      '1/8T',
      '1/8',
      '1/4T',
      '3/16',
      '1/4',
      '1/2T',
      '3/8',
      '1/2',
      '5/8',
      '3/4',
      'Bar'
    ]
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
