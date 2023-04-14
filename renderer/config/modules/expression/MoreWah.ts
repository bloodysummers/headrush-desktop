import { ModuleConfig } from '..'

const MoreWah: ModuleConfig = {
  // TODO:CHECK
  Level: {
    type: 'range',
    label: 'Pedal',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  MakeUp: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default MoreWah
