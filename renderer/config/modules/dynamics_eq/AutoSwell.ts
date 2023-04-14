import { ModuleConfig } from '..'

const AutoSwell: ModuleConfig = {
  Threshold: {
    type: 'range',
    label: 'Trigger sensitivity',
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
  Mode: {
    type: 'set',
    label: 'Mode',
    values: ['Fast', 'Slow']
  }
}

export default AutoSwell
