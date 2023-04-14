import { ModuleConfig } from '..'

const OrangePhaser: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Rate',
    min: 0.2,
    max: 11,
    step: 0.1,
    unit: ' Hz'
  },
  Stereo: {
    type: 'toggle',
    label: 'Stereo',
    off: 'Off',
    on: 'On'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default OrangePhaser
