import { ModuleConfig } from '..'

const AmbiVerb: ModuleConfig = {
  Attack: {
    type: 'range',
    label: 'Attack',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Release: {
    type: 'range',
    label: 'Release',
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
  Mod: {
    type: 'range',
    label: 'Mod',
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

export default AmbiVerb
