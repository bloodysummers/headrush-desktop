import { ModuleConfig } from '..'

const ShineWah: ModuleConfig = {
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
    label: 'Make Up',
    min: -3,
    max: 6,
    step: 0.1,
    unit: ' dB'
  }
}

export default ShineWah
