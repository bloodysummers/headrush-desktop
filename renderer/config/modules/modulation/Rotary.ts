import { ModuleConfig } from '..'

const Rotary: ModuleConfig = {
  Cabinet: {
    type: 'set',
    label: 'Model',
    values: [
      '120',
      '122',
      '21H',
      'Foam Drum',
      'Rover',
      'Memphis',
      'Wolf',
      'Watery'
    ]
  },
  Move: {
    type: 'toggle',
    label: 'Move',
    off: 'Stop',
    on: 'Start'
  },
  Speed: {
    type: 'toggle',
    label: 'Speed',
    off: 'Slow',
    on: 'Fast'
  },
  StopMode: {
    type: 'toggle',
    label: 'Stop Mode',
    off: 'Thru',
    on: 'Brake'
  },
  Balance: {
    type: 'range',
    label: 'Balance',
    min: -100,
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
  }
}

export default Rotary
