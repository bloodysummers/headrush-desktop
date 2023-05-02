import { ModuleConfig } from '..'

const TapeEcho: ModuleConfig = {
  Delay: {
    type: 'range|set',
    label: 'Delay',
    min: 20,
    max: 2400,
    step: 1,
    unit: ' ms',
    values: [
      '1/128',
      '1/64',
      '1/32T',
      '1/32',
      '1/16T',
      '1/16',
      '1/8T',
      '1/8',
      '1/4T',
      '3/16',
      '1/4',
      '1/2T',
      '3/8',
      '1/2',
      '5/8',
      '3/4',
      'Bar'
    ]
  },
  Sync: {
    type: 'toggle',
    label: 'Sync',
    off: 'Off',
    on: 'On'
  },
  Feedback: {
    type: 'range',
    label: 'Feedback',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  RecordLevel: {
    type: 'range',
    label: 'Record Level',
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
  HeadTilt: {
    type: 'range',
    label: 'Head Tilt',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Wow: {
    type: 'range',
    label: 'Wow',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Hiss: {
    type: 'toggle',
    label: 'Hiss',
    off: 'Off',
    on: 'On'
  },
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default TapeEcho
