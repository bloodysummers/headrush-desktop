import { ModuleConfig } from '..'

const BDist7000: ModuleConfig = {
  Drive: {
    type: 'range',
    label: 'Drive',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  DistLev: {
    type: 'range',
    label: 'Dist Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Blend: {
    type: 'range',
    label: 'Blend',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Master: {
    type: 'range',
    label: 'Master',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Bass: {
    type: 'range',
    label: 'Bass',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  LoMids: {
    type: 'range',
    label: 'Low Mid',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  LoMidFreq: {
    type: 'range',
    label: 'Low Mid Frequency',
    min: 250,
    max: 1000,
    step: 0.1,
    unit: ' Hz'
  },
  HiMids: {
    type: 'range',
    label: 'High Mid',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  HiMidFreq: {
    type: 'range',
    label: 'High Mid Frequency',
    min: 750,
    max: 3000,
    step: 0.1,
    unit: ' Hz'
  },
  Treble: {
    type: 'range',
    label: 'Treble',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Bite: {
    type: 'set',
    label: 'Attack',
    values: ['Flat', 'Emph', 'De-Emph']
  },
  Growl: {
    type: 'set',
    label: 'Grunt',
    values: ['Lo-Emph', 'Flat', 'Hi-Emph']
  }
}

export default BDist7000
