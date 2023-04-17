import { ModuleConfig } from '..'

const ResoDelay: ModuleConfig = {
  Scale: {
    type: 'set',
    label: 'Scale',
    values: [
      'Maj',
      'Min',
      'Mel Mn',
      'Harm Mn',
      'Dori',
      'Phryg',
      'Lydi',
      'Mixo',
      'Locri',
      'Dim',
      'Whole',
      'Dom 7',
      'Dom Whl',
      'Pent Mj',
      'Pent Mn',
      'Chroma'
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
  Threshold: {
    type: 'range',
    label: 'Trigger Sensitivity',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Attack: {
    type: 'range',
    label: 'Attack',
    min: 5,
    max: 2000,
    step: 1,
    unit: ' ms'
  },
  Range: {
    type: 'set',
    label: 'Range',
    values: ['Bass', 'Low', 'Mid', 'High']
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
  LPFreq: {
    type: 'range',
    label: 'Low Pass',
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
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default ResoDelay
