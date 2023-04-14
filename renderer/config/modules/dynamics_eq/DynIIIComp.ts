import { ModuleConfig } from '..'

const DynIIIComp: ModuleConfig = {
  Threshold: {
    type: 'range',
    label: 'Threshold',
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
  Gain: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 40,
    step: 0.1,
    unit: ' dB'
  },
  Ratio: {
    type: 'range',
    label: 'Ratio',
    min: 1,
    max: 100,
    step: 0.1,
    unit: ' : 1'
  },
  Release: {
    type: 'range',
    label: 'Release',
    min: 5,
    max: 4000,
    step: 1,
    unit: ' ms'
  },
  Knee: {
    type: 'range',
    label: 'Knee',
    min: 0,
    max: 30,
    step: 0.1,
    unit: ' dB'
  }
}

export default DynIIIComp
