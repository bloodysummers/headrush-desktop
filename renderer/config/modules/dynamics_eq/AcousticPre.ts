import { ModuleConfig } from '..'

const AcousticPre: ModuleConfig = {
  Low: {
    type: 'range',
    label: 'Bass',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Mid: {
    type: 'range',
    label: 'Mid',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  High: {
    type: 'range',
    label: 'Treble',
    min: -12,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Phase: {
    type: 'toggle',
    label: 'Phase',
    off: 'Norm',
    on: 'Inv'
  }
}

export default AcousticPre
