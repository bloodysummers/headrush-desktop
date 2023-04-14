import { ModuleConfig } from '..'

const ReverseDelay: ModuleConfig = {
  Delay: {
    type: 'range',
    label: 'Delay',
    min: 5,
    max: 5000,
    step: 1,
    unit: ' ms'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Feedback: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  LowCut: {
    type: 'range',
    label: 'Low Cut',
    min: 20,
    max: 500,
    step: 1,
    unit: ' Hz'
  },
  HighCut: {
    type: 'range',
    label: 'High Cut',
    min: 500,
    max: 20000,
    step: 1,
    unit: ' Hz'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default ReverseDelay
