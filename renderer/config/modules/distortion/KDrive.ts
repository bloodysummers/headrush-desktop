import { ModuleConfig } from '..'

const KDrive: ModuleConfig = {
  Drive: {
    type: 'range',
    label: 'Drive',
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
  Level: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default KDrive
