import { ModuleConfig } from '..'

const D1Dist: ModuleConfig = {
  Dist: {
    type: 'range',
    label: 'Dist',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Tone: {
    type: 'range',
    label: 'Tone',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Level: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default D1Dist
