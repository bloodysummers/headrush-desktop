import { ModuleConfig } from '..'

const FXLoop: ModuleConfig = {
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Send: {
    type: 'range',
    label: 'Send',
    min: -60,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Return: {
    type: 'range',
    label: 'Return',
    min: -60,
    max: 12,
    step: 0.1,
    unit: ' dB'
  },
  Delay: {
    type: 'range',
    label: 'Delay',
    min: 0,
    max: 30000,
    step: 1,
    unit: ' µs'
  }
}

export default FXLoop
