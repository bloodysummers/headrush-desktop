import { ModuleConfig } from '..'

const Volume: ModuleConfig = {
  Volume: {
    type: 'range',
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  MinVolume: {
    type: 'range',
    label: 'Min Volume',
    min: 0,
    max: 900,
    step: 1,
    unit: '%'
  },
  Linear: {
    type: 'toggle',
    label: 'Linear',
    off: 'Off',
    on: 'On'
  }
}

export default Volume
