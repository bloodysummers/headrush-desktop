import { ModuleConfig } from '..'

const PartyVerb: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: [
      'Pure Verb',
      'Minor Third',
      'Major Third',
      'Fourth',
      'Fifth',
      'Octave Up',
      'Octave Down',
      'Triad',
      'Triad Slow',
      'Power Chord',
      'Power Slow',
      'Warp Engage',
      'Swirling',
      'Ominous',
      'Asgard',
      'Ascention',
      'Machine Elves',
      'Sparkle',
      'Random 1',
      'Random 2',
      'Random 3'
    ],
    w: 8,
    style: 'dropdown'
  },
  Time: {
    type: 'range',
    label: 'Time',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Gain: {
    type: 'range',
    label: 'Gain',
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
  Damp: {
    type: 'range',
    label: 'Damp',
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
  Tails: {
    type: 'toggle',
    label: 'Tails',
    off: 'Off',
    on: 'On'
  }
}

export default PartyVerb
