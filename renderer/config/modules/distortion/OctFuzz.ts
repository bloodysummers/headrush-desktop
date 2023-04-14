import { ModuleConfig } from '..'

const OctFuzz: ModuleConfig = {
  Volume: {
    type: 'range',
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Drive: {
    type: 'range',
    label: 'Fuzz',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default OctFuzz
