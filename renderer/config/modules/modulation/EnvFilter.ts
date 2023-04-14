import { ModuleConfig } from '..'

const EnvFilter: ModuleConfig = {
  Range: {
    type: 'range',
    label: 'Range',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Sensitivity: {
    type: 'range',
    label: 'Sensitivity',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default EnvFilter
