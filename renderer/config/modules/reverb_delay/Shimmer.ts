import { ModuleConfig } from '..'

const Shimmer: ModuleConfig = {
  Interval: {
    type: 'set',
    label: 'Interval',
    values: ['- 2 Oct', '- 1 Oct', '+ 1 Oct', '+ 2 Oct']
  },
  Delay: {
    type: 'range|set',
    label: 'Pre Delay',
    min: 0,
    max: 2000,
    step: 1,
    unit: ' ms',
    values: [
      '0',
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
  HighCut: {
    type: 'range',
    label: 'High Cut',
    min: 500,
    max: 2000,
    step: 1,
    unit: ' Hz'
  },
  Width: {
    type: 'range',
    label: 'Width',
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
