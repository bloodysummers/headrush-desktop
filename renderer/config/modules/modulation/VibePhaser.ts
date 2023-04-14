import { ModuleConfig } from '..'

const VibePhaser: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Rate',
    min: 1,
    max: 8.6,
    step: 0.1,
    unit: ' Hz'
  },
  Depth: {
    type: 'range',
    label: 'Depth',
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
  },
  Mode: {
    type: 'set',
    label: 'Mode',
    values: ['Chorus', 'Vibrato']
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default VibePhaser
