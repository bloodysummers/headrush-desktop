import { ModuleConfig } from '..'

const AIRDelay: ModuleConfig = {
  Delay: {
    type: 'set',
    label: 'Delay',
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
  Ratio: {
    type: 'range',
    label: 'Ratio',
    min: -100,
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
  Width: {
    type: 'range',
    label: 'Width',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Feedback: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  FdbkHighCut: {
    type: 'range',
    label: 'Feedback LPF',
    min: 1000,
    max: 20000,
    step: 1,
    unit: ' Hz'
  },
  FdbkResoFreq: {
    type: 'range',
    label: 'Feedback Res F',
    min: 100,
    max: 10000,
    step: 1,
    unit: ' Hz'
  },
  FdbkReso: {
    type: 'range',
    label: 'Feedback Reso',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  LoCut: {
    type: 'range',
    label: 'Low Cut',
    min: 20,
    max: 1000,
    step: 1,
    unit: ' Hz'
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

export default AIRDelay
