import { ModuleConfig } from '..'

const MXDist: ModuleConfig = {
  Dist: {
    type: 'range',
    label: 'Dist',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Output: {
    type: 'range',
    label: 'Output',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default MXDist
