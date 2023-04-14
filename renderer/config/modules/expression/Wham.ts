import { ModuleConfig } from '..'

const Wham: ModuleConfig = {
  Mode: {
    type: 'set',
    label: 'Model',
    values: [
      '+ 2 Oct',
      '+ 1 Oct',
      '+ 5th',
      '+ 4th',
      '- 2nd',
      '- 4th',
      '- 5th',
      '- 1 Oct',
      '- 2 Oct',
      'Dive'
    ]
  },
  Pitch: {
    type: 'range',
    label: 'Pitch',
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

export default Wham
