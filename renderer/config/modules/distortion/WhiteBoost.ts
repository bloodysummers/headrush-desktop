import { ModuleConfig } from '..'

const WhiteBoost: ModuleConfig = {
  Gain: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Treble: {
    type: 'range',
    label: 'Treble',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Bass: {
    type: 'range',
    label: 'Bass',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Volume: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default WhiteBoost
