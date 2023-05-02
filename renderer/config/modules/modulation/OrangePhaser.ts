import { ModuleConfig } from '..'

const OrangePhaser: ModuleConfig = {
  Rate: {
    type: 'range|set',
    label: 'Rate',
    min: 0.2,
    max: 11,
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
  Stereo: {
    type: 'toggle',
    label: 'Stereo',
    off: 'Off',
    on: 'On'
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default OrangePhaser
