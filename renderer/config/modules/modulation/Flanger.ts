import { ModuleConfig } from '..'

const Flanger: ModuleConfig = {
  Rate: {
    type: 'range',
    label: 'Rate',
    min: 0.1,
    max: 10,
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
  Feedback: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  PreDelay: {
    type: 'range',
    label: 'Pre Delay',
    min: 0,
    max: 12,
    step: 0.1,
    unit: ' ms'
  },
  Stereo: {
    type: 'range',
    label: 'Stereo',
    min: 0,
    max: 180,
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

export default Flanger
