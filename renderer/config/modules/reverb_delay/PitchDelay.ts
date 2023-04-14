import { ModuleConfig } from '..'

const PitchDelay: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: [
      '+13 Semi',
      '+12 Semi',
      '+11 Semi',
      '+10 Semi',
      '+9 Semi',
      '+8 Semi',
      '+7 Semi',
      '+6 Semi',
      '+5 Semi',
      '+4 Semi',
      '+3 Semi',
      '+2 Semi',
      '+1 Semi',
      '0 Semi',
      '-1 Semi',
      '-2 Semi',
      '-3 Semi',
      '-4 Semi',
      '-5 Semi',
      '-6 Semi',
      '-7 Semi',
      '-8 Semi',
      '-9 Semi',
      '-10 Semi',
      '-11 Semi',
      '-12 Semi',
      '-13 Semi'
    ]
  },
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
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Fdbk: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Level: {
    type: 'range',
    label: 'Level',
    min: -60,
    max: 6,
    step: 1,
    unit: ' dB'
  },
  Detune: {
    type: 'range',
    label: 'Detune',
    min: -50,
    max: 50,
    step: 1,
    unit: ' %'
  },
  LowCut: {
    type: 'range',
    label: 'Low Cut',
    min: 20,
    max: 500,
    step: 1,
    unit: ' Hz'
  },
  HighCut: {
    type: 'range',
    label: 'High Cut',
    min: 500,
    max: 20000,
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

export default PitchDelay
