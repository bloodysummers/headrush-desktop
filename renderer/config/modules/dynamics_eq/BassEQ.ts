import { ModuleConfig } from '..'

const BassEQ: ModuleConfig = {
  Level: {
    type: 'range',
    label: 'Level',
    min: -20,
    max: 6,
    step: 0.1,
    unit: ' dB'
  },
  Frequency: {
    type: 'range',
    label: 'Frequency',
    min: 1,
    max: 10,
    step: 0.1,
    unit: ''
  },
  Q: {
    type: 'set',
    label: 'Q',
    values: ['Shallow', 'Deep']
  }
}

export default BassEQ
