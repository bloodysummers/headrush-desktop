import { ModuleConfig } from '..'

const SpringReverb: ModuleConfig = {
  Decay: {
    type: 'range',
    label: 'Decay',
    min: 1,
    max: 5.4,
    step: 0.1,
    unit: ' sec'
  },
  Tone: {
    type: 'range',
    label: 'Tone',
    min: 3.2,
    max: 17,
    step: 0.1,
    unit: ' kHz'
  },
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  DiffusionOn: {
    type: 'toggle',
    label: 'Diffusion',
    off: 'Off',
    on: 'On'
  },
  Width: {
    type: 'range',
    label: 'Width',
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

export default SpringReverb
