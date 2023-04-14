import { ModuleConfig } from '..'

const Hold: ModuleConfig = {
  // TODO:CHECK
  Switch: {
    type: 'toggle',
    label: 'Hold',
    off: 'Off',
    on: 'On'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Level: {
    type: 'range',
    label: 'Level',
    min: -60,
    max: 6,
    step: 0.1,
    unit: ' dB'
  },
  Attack: {
    type: 'set',
    label: 'Attack',
    values: ['200 mS', '400 mS', '800 mS']
  },
  Release: {
    type: 'set',
    label: 'Release',
    values: ['0 mS', '400 mS', '1.0 S', '3.2 S']
  }
}

export default Hold
