import { ModuleConfig } from '..'

const Gate: ModuleConfig = {
  Threshold: {
    type: 'range',
    label: 'Threshold',
    min: -120,
    max: 0,
    step: 1,
    unit: ' dB'
  },
  Release: {
    type: 'range',
    label: 'Release',
    min: 1,
    max: 3000,
    step: 1,
    unit: ' ms'
  },
  FilterThreshhold: {
    type: 'range',
    label: 'Filter Threshold',
    min: -120,
    max: -60,
    step: 1,
    unit: ' dB'
  }
}

export default Gate
