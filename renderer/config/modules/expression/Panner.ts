import { ModuleConfig } from '..'

const Panner: ModuleConfig = {
  Pan: {
    type: 'range',
    label: 'L/R Pan',
    min: -100,
    max: 100,
    step: 1,
    unit: '%'
  },
  Rate: {
    type: 'set',
    label: 'Rate',
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
  Delay: {
    type: 'range',
    label: 'Delay',
    min: -30000,
    max: 30000,
    step: 1,
    unit: ' µs'
  },
  Shape: {
    type: 'range',
    label: 'Shape',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Depth: {
    type: 'range',
    label: 'Depth',
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

export default Panner
