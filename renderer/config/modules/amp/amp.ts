import { ModuleConfig } from '..'

const AmpModels = [
  '59 Deluxe Gain Mod',
  '59 Tweed Deluxe',
  '59 Tweed Prince',
  '59 Tweed Bass',
  '64 Black Lux Vib',
  '64 Black Lux Norm',
  '64 Black Vib',
  '65 Black Sr',
  '65 Black Mini',
  '65 Black Prince',
  '65 Black Prince Rev',
  '65 J45',
  '66 AC Hi Boost',
  '66 AC Mid Boost Mod',
  '66 Flip Bass',
  '67 Black Duo',
  '67 Black Shimmer',
  '67 Plefiglas Vari',
  '68 Plexi El84 Mod',
  '68 Plefiglas 50W',
  '69 Plefiglas 100W',
  '69 Blue Line Bass',
  '69 Ble Line Scoop',
  '82 Lead 800 100W',
  '82 Lead 800 50W',
  '82 Lead 800 Bass Mod',
  '82 Lead 800 Bright',
  '82 Lead 800 TS Mod',
  '85 M-2 Lead',
  '85 M-2 Lead Cap Mod',
  '89 SL-100 Drive',
  '89 SL-100 Crunch',
  '89 SL-100 Clean',
  '89 SL-100 Ext Range',
  '92 Treadplate Raw',
  '92 Treadplate Vintage',
  '93 MS30',
  '97 RB-01B Red',
  '97 RB-01B Blue',
  '97 RB-01B Green',
  '99 PV51 II Clean',
  '99 PV51 II Crunch',
  '99 PV51 II Lead',
  '05 Tangerine 30 CH1',
  '05 Tangerine 30 CH2',
  '11 EPB II Clean',
  '11 EPB II Crunch',
  '11 EPB II Lo-Lead',
  '11 EPB II Hi-Lead',
  '83 400R',
  '84 J-120H',
  '17 Trace Elliot Elf'
]

const Amp: ModuleConfig = {
  Bass: {
    type: 'range',
    label: 'Low',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Bass2: {
    type: 'range',
    label: 'Low',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Bottom: {
    type: 'toggle',
    label: 'Bottom',
    off: 'off',
    on: 'on'
  },
  Bottom2: {
    type: 'toggle',
    label: 'Bottom',
    off: 'off',
    on: 'on'
  },
  Bright: {
    type: 'toggle',
    label: 'Bright',
    off: 'off',
    on: 'on'
  },
  Bright2: {
    type: 'toggle',
    label: 'Bright',
    off: 'off',
    on: 'on'
  },
  ChorusMode: {
    type: 'set',
    label: 'Chorus Mode',
    values: ['Fixed', 'Off', 'Manual']
  },
  ChorusMode2: {
    type: 'set',
    label: 'Chorus Mode',
    values: ['Fixed', 'Off', 'Manual']
  },
  DoubleStates: {
    type: 'toggle',
    label: 'Double States',
    off: 'off',
    on: 'on'
  },
  Doubling: {
    type: 'toggle',
    label: 'Doubling',
    off: 'off',
    on: 'on'
  },
  GainA: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  GainA2: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  GainB: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  GainB2: {
    type: 'range',
    label: 'Gain',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  GainSwitch: {
    type: 'toggle',
    label: 'Gain Switch',
    off: 'off',
    on: 'on'
  },
  GainSwitch2: {
    type: 'toggle',
    label: 'Gain Switch',
    off: 'off',
    on: 'on'
  },
  Intensity: {
    type: 'range',
    label: 'Intensity',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Intensity2: {
    type: 'range',
    label: 'Intensity',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  JCDistortion: {
    type: 'range',
    label: 'Dist',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  JCDistortion2: {
    type: 'range',
    label: 'Dist',
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
  },
  Level2: {
    type: 'range',
    label: 'Level',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Master: {
    type: 'range',
    label: 'Master',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Master2: {
    type: 'range',
    label: 'Master',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mid: {
    type: 'range',
    label: 'Mid',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Mid2: {
    type: 'range',
    label: 'Mid',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  MidBoost: {
    type: 'toggle',
    label: 'Mid Boost',
    off: 'off',
    on: 'on'
  },
  MidBoost2: {
    type: 'toggle',
    label: 'Mid Boost',
    off: 'off',
    on: 'on'
  },
  MidFreq: {
    type: 'range',
    label: 'Mid Frequency',
    min: 220,
    max: 3000,
    step: 1,
    unit: ' Hz'
  },
  MidFreq2: {
    type: 'range',
    label: 'Mid Frequency',
    min: 220,
    max: 3000,
    step: 1,
    unit: ' Hz'
  },
  Presence: {
    type: 'range',
    label: 'Presence',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Presence2: {
    type: 'range',
    label: 'Presence',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Resonance: {
    type: 'range',
    label: 'Resonance',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Resonance2: {
    type: 'range',
    label: 'Resonance',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  StereoAmp: {
    type: 'toggle',
    label: 'Stereo Amp',
    off: 'off',
    on: 'on'
  },
  StereoAmp2: {
    type: 'toggle',
    label: 'Stereo Amp',
    off: 'off',
    on: 'on'
  },
  Treble: {
    type: 'range',
    label: 'Treble',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  Treble2: {
    type: 'range',
    label: 'Treble',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  TremDepth: {
    type: 'range',
    label: 'Trem Depth',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  TremDepth2: {
    type: 'range',
    label: 'Trem Depth',
    min: 0,
    max: 100,
    step: 1,
    unit: ' %'
  },
  TremSpeed: {
    type: 'range',
    label: 'Trem Speed',
    min: 0.25,
    max: 20,
    step: 0.01,
    unit: ' Hz'
  },
  TremSync: {
    type: 'toggle',
    label: 'Trem Sync',
    off: 'off',
    on: 'on'
  },
  Tremolo: {
    type: 'toggle',
    label: 'Tremolo',
    off: 'off',
    on: 'on'
  },
  Type: {
    type: 'set',
    label: 'Model',
    values: AmpModels,
    w: 6,
    style: 'dropdown'
  },
  Type2: {
    type: 'set',
    label: 'Model',
    values: AmpModels,
    w: 6,
    style: 'dropdown'
  }
}

export default Amp
