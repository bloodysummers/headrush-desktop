import { ModuleConfig } from '..'

const BlackOP: ModuleConfig = {
  Distortion: {
    type: 'range',
    label: 'Distort',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Cutoff: {
    type: 'range',
    label: 'Cutoff',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Volume: {
    type: 'range',
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default BlackOP
