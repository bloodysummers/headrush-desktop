import { ModuleConfig } from '..'

const ChordWham: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: [
      '+ 2 Oct',
      '+ 1 Oct',
      '+ 5th',
      '+ 4th',
      '- 2nd',
      '- 4th',
      '- 5th',
      '- 1 Oct',
      '- 2 Oct',
      'Dive'
    ],
    w: 8,
    style: 'dropdown'
  },
  Pitch: {
    type: 'range',
    label: 'Pitch',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Offset: {
    type: 'range',
    label: 'Offset',
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
  Delay: {
    type: 'range|set',
    label: 'Delay',
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
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Fdbk: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 65,
    step: 1,
    unit: ' %'
  },
  FdbkHighCut: {
    type: 'range',
    label: 'Feedback LPF',
    min: 1000,
    max: 10000,
    step: 1,
    unit: ' Hz'
  },
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default ChordWham
