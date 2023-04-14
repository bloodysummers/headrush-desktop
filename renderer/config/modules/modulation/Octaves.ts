import { ModuleConfig } from '..'

const Octaves: ModuleConfig = {
  OctaveA: {
    type: 'range',
    label: 'Octave 1',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  OctaveB: {
    type: 'range',
    label: 'Octave 2',
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
  }
}

export default Octaves
