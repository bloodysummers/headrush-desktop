import { ModuleConfig } from '..'

const ParaEQ: ModuleConfig = {
  Gain1: {
    type: 'range',
    label: 'Gain 1',
    min: -24,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Freq1: {
    type: 'range',
    label: 'Frequency 1',
    min: 20,
    max: 2000,
    step: 0.1,
    unit: ' Hz'
  },
  Q1: {
    type: 'range',
    label: 'Q 1',
    min: 0.2,
    max: 10,
    step: 0.1,
    unit: ''
  },
  Gain2: {
    type: 'range',
    label: 'Gain 2',
    min: -18,
    max: 18,
    step: 0.1,
    unit: ' dB'
  },
  Freq2: {
    type: 'range',
    label: 'Frequency 2',
    min: 100,
    max: 10000,
    step: 0.1,
    unit: ' Hz'
  },
  Q2: {
    type: 'range',
    label: 'Q 2',
    min: 0.2,
    max: 10,
    step: 0.1,
    unit: ''
  },
  Gain3: {
    type: 'range',
    label: 'Gain 3',
    min: -18,
    max: 18,
    step: 0.1,
    unit: ' dB'
  },
  Freq3: {
    type: 'range',
    label: 'Frequency 3',
    min: 200,
    max: 20000,
    step: 0.1,
    unit: ' Hz'
  },
  Q3: {
    type: 'range',
    label: 'Q 3',
    min: 0.2,
    max: 10,
    step: 0.1,
    unit: ''
  },
  Gain4: {
    type: 'range',
    label: 'Gain 4',
    min: -24,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Freq4: {
    type: 'range',
    label: 'Frequency 4',
    min: 200,
    max: 20000,
    step: 0.1,
    unit: ' Hz'
  },
  Q4: {
    type: 'range',
    label: 'Q 4',
    min: 0.2,
    max: 10,
    step: 0.1,
    unit: ''
  },
  Type1: {
    type: 'set',
    label: 'Type 1',
    values: ['Shelf', 'Peak', '6dB', '12dB', '24dB', 'Notch']
  },
  Type4: {
    type: 'set',
    label: 'Type 4',
    values: ['Shelf', 'Peak', '6dB', '12dB', '24dB', 'Notch']
  }
}

export default ParaEQ
