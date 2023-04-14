import { ModuleConfig } from '..'

const RoundFuzz: ModuleConfig = {
  Fuzz: {
    type: 'range',
    label: 'Fuzz',
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

export default RoundFuzz
