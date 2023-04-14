import { ModuleConfig } from '..'

const DimChorus: ModuleConfig = {
  Mode: {
    type: 'toggle',
    label: 'Model',
    off: 'Stomp',
    on: 'Rack'
  },
  One: {
    type: 'toggle',
    label: '1',
    off: 'Off',
    on: 'On'
  },
  Two: {
    type: 'toggle',
    label: '2',
    off: 'Off',
    on: 'On'
  },
  Three: {
    type: 'toggle',
    label: '3',
    off: 'Off',
    on: 'On'
  },
  Four: {
    type: 'toggle',
    label: '4',
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
  Mix: {
    type: 'range',
    label: 'Mix',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  }
}

export default DimChorus
