import { ModuleConfig } from '..'

const StereoDoubler: ModuleConfig = {
  Intensity: {
    type: 'range',
    label: 'Intensity',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Separation: {
    type: 'range',
    label: 'Separation',
    min: 0,
    max: 200,
    step: 1,
    unit: ' ms'
  },
  Width: {
    type: 'range',
    label: 'Width',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default StereoDoubler
