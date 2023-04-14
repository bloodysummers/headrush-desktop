import { ModuleConfig } from '..'

const AIRFilter: ModuleConfig = {
  Freq: {
    type: 'range',
    label: 'Frequency',
    min: 20,
    max: 20000,
    step: 1,
    unit: ' Hz'
  },
  Reso: {
    type: 'range',
    label: 'Resonance',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Fat: {
    type: 'range',
    label: 'Fatness',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Gain: {
    type: 'range',
    label: 'Gain',
    min: -36,
    max: 0,
    step: 0.1,
    unit: ' dB'
  },
  Mode: {
    type: 'set',
    label: 'Mode',
    values: ['24dB', '18dB', '12dB', 'BP', 'HP']
  },
  LFORate: {
    type: 'range',
    label: 'LFO Rate',
    min: 0.1,
    max: 10,
    step: 0.1,
    unit: ' Hz'
  },
  LFODepth: {
    type: 'range',
    label: 'LFO Depth',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  LFOSync: {
    type: 'toggle',
    label: 'LFO Sync',
    off: 'Off',
    on: 'On'
  }
}

export default AIRFilter
