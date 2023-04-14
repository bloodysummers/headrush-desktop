import { ModuleConfig } from '..'

const GraphicEQ: ModuleConfig = {
  LoGain: {
    type: 'range',
    label: 'Low Gain',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  LoMidGain: {
    type: 'range',
    label: 'Low Mid Gain',
    min: -18,
    max: 18,
    step: 0.1,
    unit: ' dB'
  },
  MidGain: {
    type: 'range',
    label: 'Mid Gain',
    min: -18,
    max: 18,
    step: 0.1,
    unit: ' dB'
  },
  HiMidGain: {
    type: 'range',
    label: 'High Mid Gain',
    min: -18,
    max: 18,
    step: 0.1,
    unit: ' dB'
  },
  HiGain: {
    type: 'range',
    label: 'High Gain',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Gain: {
    type: 'range',
    label: 'Gain',
    min: -20,
    max: 6,
    step: 0.1,
    unit: ' dB'
  }
}

export default GraphicEQ
