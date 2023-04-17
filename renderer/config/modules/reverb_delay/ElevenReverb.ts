import { ModuleConfig } from '..'

const ElevenReverb: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Mode',
    values: [
      'Echo Room Short',
      'Studio',
      'Small Room',
      'Jazz Club',
      'Small Music Club',
      'Garage',
      'Medium Room',
      'Medium Tiled Room',
      'Medium Wood Room',
      'Small Theater',
      'Medium Theater',
      'Big Theater',
      'Rich Hall',
      'Concert Hall',
      'Bright Hall',
      'Church',
      'Cathedral',
      'Arena',
      'Small Plate',
      'Medium Plate',
      'Long Plate',
      'Extra Long 1',
      'Extra Long 2',
      'Early Reflection 1',
      'Early Reflection 2'
    ],
    w: 8,
    style: 'dropdown'
  },
  Decay: {
    type: 'range',
    label: 'Decay',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Tone: {
    type: 'range',
    label: 'Tone',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  'Pre-Delay': {
    type: 'range',
    label: 'Pre-Delay',
    min: 0,
    max: 200,
    step: 1,
    unit: ' ms'
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

export default ElevenReverb
