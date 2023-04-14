import { ModuleConfig } from '..'

const AIRVibrato: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Rate',
    min: 0.1,
    max: 12,
    step: 0.1,
    unit: ' Hz'
  },
  Shape: {
    type: 'range',
    label: 'Shape',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Depth: {
    type: 'range',
    label: 'Depth',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Offset: {
    type: 'range',
    label: 'Phase Offset',
    min: 0,
    max: 360,
    step: 1,
    unit: ' deg'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default AIRVibrato
