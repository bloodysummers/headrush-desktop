import { ModuleConfig } from '..'

const GrayComp: ModuleConfig = {
  Sustain: {
    type: 'range',
    label: 'Sustain',
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

export default GrayComp
