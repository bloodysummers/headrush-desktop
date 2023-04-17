import { ModuleConfig } from '..'

const Feedback: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: ['Unity', '4th', '5th', 'Octave'],
    w: 8,
    style: 'dropdown'
  },
  Volume: {
    type: 'range',
    label: 'Volume',
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
  Range: {
    type: 'range',
    label: 'Range',
    min: 160,
    max: 580,
    step: 1,
    unit: ' Hz'
  },
  Attack: {
    type: 'range',
    label: 'Attack',
    min: 200,
    max: 5000,
    step: 1,
    unit: ' ms'
  },
  Release: {
    type: 'range',
    label: 'Release',
    min: 200,
    max: 10000,
    step: 1,
    unit: ' ms'
  }
}

export default Feedback
