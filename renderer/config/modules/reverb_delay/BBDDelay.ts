import { ModuleConfig } from '..'

const BBDDelay: ModuleConfig = {
  Delay: {
    type: 'range|set',
    label: 'Delay',
    min: 32,
    max: 1520,
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
  InputGain: {
    type: 'range',
    label: 'Input Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  LFOSpeed: {
    type: 'range',
    label: 'LFO Speed',
    min: 0.5,
    max: 5,
    step: 0.01,
    unit: ' Hz'
  },
  LFODepth: {
    type: 'range',
    label: 'LFO Depth',
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
  Hiss: {
    type: 'toggle',
    label: 'Hiss',
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

export default BBDDelay
