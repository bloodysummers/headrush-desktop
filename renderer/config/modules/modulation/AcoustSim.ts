import { ModuleConfig } from '..'

const AcoustSim: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: ['Standard', 'Jumbo', 'Enhance', 'Piezo']
  },
  Body: {
    type: 'range',
    label: 'Body',
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

export default AcoustSim
