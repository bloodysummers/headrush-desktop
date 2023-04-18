import { ModuleConfig } from '..'

const AIRReverb: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Mode',
    values: [
      'Room',
      'Hall',
      'Chamber',
      'Studio',
      'Nonlinear',
      'Church',
      'Dense',
      'Ambient'
    ],
    w: 8,
    style: 'dropdown'
  },
  Time: {
    type: 'range',
    label: 'Time',
    min: 0,
    max: 144,
    step: 0.1,
    unit: ' sec'
  },
  Size: {
    type: 'range',
    label: 'Size',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Color: {
    type: 'range',
    label: 'Color',
    min: 20,
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

export default AIRReverb
