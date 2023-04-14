import { ModuleConfig } from '..'

const Detune: ModuleConfig = {
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Detune1: {
    type: 'range',
    label: 'Detune 1',
    min: -50,
    max: 50,
    step: 1,
    unit: ' %'
  },
  Detune2: {
    type: 'range',
    label: 'Detune 2',
    min: -50,
    max: 50,
    step: 1,
    unit: ' %'
  },
  Voices: {
    type: 'set',
    label: 'Voices',
    values: ['One', 'Two']
  },
  Level: {
    type: 'range',
    label: 'Level',
    min: -60,
    max: 6,
    step: 1,
    unit: ' dB'
  },
  Width: {
    type: 'range',
    label: 'Width',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Delay1: {
    type: 'range',
    label: 'Delay 1',
    min: 1,
    max: 300,
    step: 1,
    unit: ' ms'
  },
  Delay2: {
    type: 'range',
    label: 'Delay 2',
    min: 1,
    max: 300,
    step: 1,
    unit: ' ms'
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
    min: 50,
    max: 20000,
    step: 1,
    unit: ' Hz'
  }
}

export default Detune
