import { ModuleConfig } from '..'

const DropTune: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Interval',
    values: [
      'Down 1',
      'Down 2',
      'Down 3',
      'Down 4',
      'Down 5',
      'Down 6',
      'Down 7',
      'Down 8'
    ]
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Level: {
    type: 'range',
    label: 'Level',
    min: -60,
    max: 6,
    step: 1,
    unit: ' dB'
  }
}

export default DropTune
