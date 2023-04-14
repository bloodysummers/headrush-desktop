import { ModuleConfig } from '..'

const Vibrato: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Rate',
    min: 3.2,
    max: 12,
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
  Width: {
    type: 'range',
    label: 'Width',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default Vibrato
