import { ModuleConfig } from '..'

const RingMod: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Frequency',
    min: 200,
    max: 2000,
    step: 1,
    unit: ' Hz'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
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
  }
}

export default RingMod
