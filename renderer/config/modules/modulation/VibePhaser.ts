import { ModuleConfig } from '..'

const VibePhaser: ModuleConfig = {
  Rate: {
    type: 'range|set',
    label: 'Rate',
    min: 1,
    max: 8.6,
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
  Volume: {
    type: 'range',
    label: 'Volume',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mode: {
    type: 'set',
    label: 'Mode',
    values: ['Chorus', 'Vibrato']
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  }
}

export default VibePhaser
