import { ModuleConfig } from '..'

const crushBit = ['Thru', 'Mute', 'Inv', 'Posi']

export const bitCrushModes = {
  OFF: ['Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru'],
  A: ['Thru', 'Inv', 'Thru', 'Thru', 'Inv', 'Thru', 'Thru', 'Thru'],
  B: ['Thru', 'Inv', 'Inv', 'Inv', 'Thru', 'Thru', 'Posi', 'Thru'],
  C: ['Thru', 'Posi', 'Posi', 'Posi', 'Thru', 'Thru', 'Mute', 'Mute'],
  D: ['Thru', 'Thru', 'Thru', 'Posi', 'Thru', 'Thru', 'Thru', 'Thru'],
  E: ['Thru', 'Inv', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru'],
  F: ['Inv', 'Posi', 'Inv', 'Mute', 'Inv', 'Thru', 'Thru', 'Thru'],
  G: ['Posi', 'Posi', 'Posi', 'Posi', 'Mute', 'Posi', 'Mute', 'Mute'],
  H: ['Mute', 'Mute', 'Mute', 'Posi', 'Posi', 'Mute', 'Mute', 'Mute'],
  I: ['Inv', 'Inv', 'Thru', 'Thru', 'Thru', 'Posi', 'Thru', 'Thru'],
  RECT: ['Posi', 'Posi', 'Posi', 'Posi', 'Posi', 'Posi', 'Posi', 'Posi'],
  CUST: ['Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru', 'Thru']
}

const BitCrush: ModuleConfig = {
  Bit1: {
    type: 'set',
    label: 'Bit1',
    values: crushBit
  },
  Bit2: {
    type: 'set',
    label: 'Bit2',
    values: crushBit
  },
  Bit3: {
    type: 'set',
    label: 'Bit3',
    values: crushBit
  },
  Bit4: {
    type: 'set',
    label: 'Bit4',
    values: crushBit
  },
  Bit5: {
    type: 'set',
    label: 'Bit5',
    values: crushBit
  },
  Bit6: {
    type: 'set',
    label: 'Bit6',
    values: crushBit
  },
  Bit7: {
    type: 'set',
    label: 'Bit7',
    values: crushBit
  },
  Bit8: {
    type: 'set',
    label: 'Bit8',
    values: crushBit
  },
  Drive: {
    type: 'range',
    label: 'Drive',
    min: 0,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  FXOut: {
    type: 'range',
    label: 'Crush Gain',
    min: -24,
    max: 0,
    step: 0.1,
    unit: ' dB'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mode: {
    type: 'set',
    label: 'Bit Mode',
    values: ['OFF', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'RECT', 'CUST']
  },
  BitGainScale: {
    type: 'range',
    label: 'Bit Power',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Resampling: {
    type: 'range',
    label: 'Resample',
    min: 0.003,
    max: 1,
    step: 0.001,
    unit: ''
  },
  Antialiasing: {
    type: 'range',
    label: 'Res Smooth',
    min: 0,
    max: 1,
    step: 0.001,
    unit: ' %',
    displayMin: 0,
    displayMax: 100
  },
  ThresholdExp: {
    type: 'range',
    label: 'Threshold',
    min: -60,
    max: 0,
    step: 1,
    unit: ' dB'
  },
  ThresholdComp: {
    type: 'range',
    label: 'Crush Comp',
    min: -30,
    max: 0,
    step: 1,
    unit: ' dB'
  },
  Freq: {
    type: 'range',
    label: 'Frequency',
    min: 20,
    max: 20000,
    step: 1,
    unit: ' Hz'
  },
  Q: {
    type: 'range',
    label: 'Q',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default BitCrush
