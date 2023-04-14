import { ModuleConfig } from '..'

const Tremolo: ModuleConfig = {
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
  Offset: {
    type: 'range',
    label: 'Phase Offset',
    min: 0,
    max: 360,
    step: 1,
    unit: ' deg'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default Tremolo
