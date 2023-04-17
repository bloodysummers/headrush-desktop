import { ModuleConfig } from '..'

const Harm: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Mode',
    values: [
      '+/- Oct',
      '- 5th / 4th',
      '- 4th / 3rd',
      '+ 5th / 7th',
      '+ 5th / 6th',
      '+ 4th / 5th',
      '+ 3rd / 4th',
      '+ 3rd Minor / Major',
      '+ 2nd / 3rd'
    ],
    w: 8,
    style: 'dropdown'
  },
  Pitch: {
    type: 'range',
    label: 'Pitch',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  Offset: {
    type: 'range',
    label: 'Offset',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  }
}

export default Harm
