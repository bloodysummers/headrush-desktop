import { ModuleConfig } from '..'

const DS250Drive: ModuleConfig = {
  Level: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Gain: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default DS250Drive
