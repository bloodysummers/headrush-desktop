import { ModuleConfig } from '..'

const SmartHarm: ModuleConfig = {
  Scale: {
    type: 'set',
    label: 'Scale',
    values: [
      'Maj',
      'Min',
      'Mel Mn',
      'Dori',
      'Phryg',
      'Lydi',
      'Mixo',
      'Locri',
      'Dim',
      'Whole',
      'Dom 7',
      'Dim Whl',
      'Pent Mj',
      'Pent Mn'
    ],
    w: 4,
    style: 'dropdown'
  },
  Key: {
    type: 'set',
    label: 'Key',
    values: ['E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B', 'C', 'C#', 'D', 'D#'],
    w: 4,
    style: 'dropdown'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Pitch2Vol: {
    type: 'range',
    label: 'VC 2 Vol',
    min: -60,
    max: 6,
    step: 1,
    unit: ' dB'
  },
  Detune1: {
    type: 'range',
    label: 'VC 1 Detune',
    min: -50,
    max: 50,
    step: 1,
    unit: ''
  },
  Detune2: {
    type: 'range',
    label: 'VC 2 Detune',
    min: -50,
    max: 50,
    step: 1,
    unit: ''
  },
  Glide: {
    type: 'range',
    label: 'Glide time',
    min: 0,
    max: 800,
    step: 1,
    unit: ' ms'
  },
  Delay1: {
    type: 'range',
    label: 'VC 1 Delay',
    min: 0,
    max: 2000,
    step: 1,
    unit: ' ms'
  },
  Delay2: {
    type: 'range',
    label: 'VC 2 Delay',
    min: 0,
    max: 2000,
    step: 1,
    unit: ' ms'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Pitch1: {
    type: 'set',
    label: 'VC 1 Harm',
    values: [
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      'Oct',
      '7th Low',
      '6th Low',
      '5th Low',
      '4th Low',
      '3rd Low',
      '2nd Low',
      'Oct Down'
    ]
  },
  Pitch2: {
    type: 'set',
    label: 'VC 2 Harm',
    values: [
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      'Oct',
      '7th Low',
      '6th Low',
      '5th Low',
      '4th Low',
      '3rd Low',
      '2nd Low',
      'Oct Down'
    ]
  }
}

export default SmartHarm
