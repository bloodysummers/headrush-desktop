import { ModuleConfig } from '..'

const NoiseFilter: ModuleConfig = {
  Hi_Thresh: {
    type: 'range',
    label: 'High Threshold',
    min: -60,
    max: 0,
    step: 0.1,
    unit: ' dB'
  },
  Lo_Thresh: {
    type: 'range',
    label: 'Low Threshold',
    min: -60,
    max: 0,
    step: 0.1,
    unit: ' dB'
  },
  Attack: {
    type: 'range',
    label: 'Attack',
    min: 0.01,
    max: 300,
    step: 0.01,
    unit: ' ms'
  },
  Release: {
    type: 'range',
    label: 'Release',
    min: 5,
    max: 4000,
    step: 1,
    unit: ' ms'
  }
}

export default NoiseFilter
