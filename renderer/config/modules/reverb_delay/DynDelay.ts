import { ModuleConfig } from '..'

const DynDelay: ModuleConfig = {
  Delay: {
    type: 'range|set',
    label: 'Delay',
    min: 1,
    max: 4000,
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
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Ratio: {
    type: 'range',
    label: 'Ratio',
    min: -100,
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
  EnvMix: {
    type: 'range',
    label: 'Env 2 Mix',
    min: -100,
    max: 100,
    step: 1,
    unit: ' %'
  },
  EnvFbk: {
    type: 'range',
    label: 'Env 2 Feedback',
    min: -100,
    max: 100,
    step: 1,
    unit: ' %'
  },
  EnvRate: {
    type: 'range',
    label: 'Env Rate',
    min: 0.01,
    max: 1,
    step: 0.01,
    unit: ' s'
  },
  LoCut: {
    type: 'range',
    label: 'Low Cut',
    min: 20,
    max: 1000,
    step: 1,
    unit: ' Hz'
  },
  HiCut: {
    type: 'range',
    label: 'High Cut',
    min: 1000,
    max: 20000,
    step: 1,
    unit: ' Hz'
  },
  Stereo: {
    type: 'toggle',
    label: 'Stereo',
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

export default DynDelay
