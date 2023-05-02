import { ModuleConfig } from '..'

const AIRFlanger: ModuleConfig = {
  Rate: {
    type: 'range|set',
    label: 'Rate',
    min: 0.1,
    max: 10,
    step: 0.1,
    unit: ' Hz',
    values: [
      'Bar',
      '3/4',
      '5/8',
      '1/2',
      '3/8',
      '1/2T',
      '1/4',
      '3/16',
      '1/4T',
      '1/8',
      '1/8T',
      '1/16',
      '1/16T',
      '1/32',
      '1/32T',
      '1/64',
      '1/128'
    ]
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
  Width: {
    type: 'range',
    label: 'Width',
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
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default AIRFlanger
