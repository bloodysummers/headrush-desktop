import Amp from './amp/amp'
import BitCrush from './distortion/8BitCrush'
import AnxietyOD from './distortion/AnxietyOD'
import AnxietyODV2 from './distortion/AnxietyODV2'
import B2Drive from './distortion/B2Drive'
import BDist7000 from './distortion/BDist7000'
import BlackOP from './distortion/BlackOP'
import D1Dist from './distortion/D1Dist'
import DS250Drive from './distortion/D250Drive'
import DCDistort from './distortion/DCDistort'
import GreenJRCOD from './distortion/GreenJRCOD'
import KDrive from './distortion/KDrive'
import MXDist from './distortion/MXDist'
import OctFuzz from './distortion/OctFuzz'
import RoundFuzz from './distortion/RoundFuzz'
import S1Drive from './distortion/S1Drive'
import TriFuzz from './distortion/TriFuzz'
import WhiteBoost from './distortion/WhiteBoost'
import AcousticPre from './dynamics_eq/AcousticPre'
import AutoSwell from './dynamics_eq/AutoSwell'
import BassEQ from './dynamics_eq/BassEQ'
import DynIIIComp from './dynamics_eq/DynIIIComp'
import Gate from './dynamics_eq/Gate'
import GraphicEQ from './dynamics_eq/GraphicEQ'
import GrayComp from './dynamics_eq/GrayComp'
import Hold from './dynamics_eq/Hold'
import NoiseFilter from './dynamics_eq/NoiseFilter'
import ParaEQ from './dynamics_eq/ParaEQ'
import SideComp from './dynamics_eq/SideComp'
import BlackWah from './expression/BlackWah'
import ChordWham from './expression/ChordWham'
import Feedback from './expression/Feedback'
import Harm from './expression/Harm'
import MoreWah from './expression/MoreWah'
import Panner from './expression/Panner'
import ShineWah from './expression/ShineWah'
import TimeWarp from './expression/TimeWarp'
import Volume from './expression/Volume'
import Wham from './expression/Wham'
import FXLoop from './fx_loop/FXLoop'
import AIRFilter from './modulation/AIRFilter'
import AIRFlanger from './modulation/AIRFlanger'
import AIRVibrato from './modulation/AIRVibrato'
import AcoustSim from './modulation/AcoustSim'
import Chorus from './modulation/Chorus'
import Detune from './modulation/Detune'
import DimChorus from './modulation/DimChorus'
import DropTune from './modulation/DropTune'
import EnvFilter from './modulation/EnvFilter'
import Flanger from './modulation/Flanger'
import MultiChorus from './modulation/MultiChorus'
import Octaves from './modulation/Octaves'
import OctavesUp from './modulation/OctavesUp'
import OrangePhaser from './modulation/OrangePhaser'
import RingMod from './modulation/RingMod'
import Rotary from './modulation/Rotary'
import SmartHarm from './modulation/SmartHarm'
import StonePhaser from './modulation/StonePhaser'
import Tremolo from './modulation/Tremolo'
import TronFilter from './modulation/TronFilter'
import TronPhaser from './modulation/TronPhaser'
import VibePhaser from './modulation/VibePhaser'
import Vibrato from './modulation/Vibrato'
import AIRDelay from './reverb_delay/AIRDelay'
import AIRReverb from './reverb_delay/AIRReverb'
import AmbiVerb from './reverb_delay/AmbiVerb'
import BBDDelay from './reverb_delay/BBDDelay'
import DynDelay from './reverb_delay/DynDelay'
import ElevenReverb from './reverb_delay/ElevenReverb'
import PartyVerb from './reverb_delay/PartyVerb'
import PitchDelay from './reverb_delay/PitchDelay'
import ResoDelay from './reverb_delay/ResoDelay'
import ReverseDelay from './reverb_delay/ReverseDelay'
import Shimmer from './reverb_delay/Shimmer'
import SpringReverb from './reverb_delay/SpringReverb'
import StereoDoubler from './reverb_delay/StereoDoubler'
import TapeEcho from './reverb_delay/TapeEcho'

export type ModulesConfig = {
  [key: string]: ModuleConfig
}

export type ModuleConfig = {
  [key: string]: ModuleConfigSet
}

export type ModuleConfigSet =
  | RangeConfig
  | ToggleConfig
  | SetConfig
  | RangeOrSet

export type RangeConfig = {
  type: 'range'
  label: string
  min: number
  max: number
  step: number
  unit: string
  displayMin?: number
  displayMax?: number
}

export type ToggleConfig = {
  type: 'toggle'
  label: string
  off: string
  on: string
  w?: 1 | 2 | 4 | 6 | 8
  style?: 'dropdown' | 'switch'
}

export type SetConfig = {
  type: 'set'
  label: string
  values: string[]
  w?: 1 | 2 | 4 | 6 | 8
  style?: 'dropdown' | 'fader' | 'button'
}

export type RangeOrSet = {
  type: 'range|set'
  label: string
  min: number
  max: number
  step: number
  unit: string
  values: string[]
}

export const modulesConfig: ModulesConfig = {
  'White Boost': WhiteBoost,
  'Green JRC-OD': GreenJRCOD,
  'DC Distort': DCDistort,
  'Black OP': BlackOP,
  'Tri Fuzz': TriFuzz,
  '8-Bit Crush': BitCrush,
  'Anxiety OD': AnxietyOD,
  'Anxiety OD V2': AnxietyODV2,
  'D1 Dist': D1Dist,
  'Round Fuzz': RoundFuzz,
  'K Drive': KDrive,
  'MX Dist': MXDist,
  'D250 Drive': DS250Drive,
  'S1 Drive': S1Drive,
  'Oct Fuzz': OctFuzz,
  'B Dist 7000': BDist7000,
  'B2 Drive': B2Drive,
  'Gray Comp': GrayComp,
  'DynIII Comp': DynIIIComp,
  'Side Comp': SideComp,
  Gate,
  'Graphic EQ': GraphicEQ,
  'Para EQ': ParaEQ,
  'Bass EQ': BassEQ,
  'Acoustic Pre': AcousticPre,
  'Auto Swell': AutoSwell,
  'Noise Filter': NoiseFilter,
  Hold,
  'Multi Chorus': MultiChorus,
  Chorus,
  'Dim Chorus': DimChorus,
  Flanger,
  Vibrato,
  Rotary,
  'AIR Filter': AIRFilter,
  'AIR Flanger': AIRFlanger,
  'Vibe Phaser': VibePhaser,
  'Orange Phaser': OrangePhaser,
  'Tron Phaser': TronPhaser,
  'Stone Phaser': StonePhaser,
  Tremolo,
  'AIR Vibrato': AIRVibrato,
  Octaves,
  'Octaves Up': OctavesUp,
  'Drop Tune': DropTune,
  'Tron Filter': TronFilter,
  'Smart Harm': SmartHarm,
  'Ring Mod': RingMod,
  'Acoust Sim': AcoustSim,
  Detune,
  'Env Filter': EnvFilter,
  'Stereo Doubler': StereoDoubler,
  'AIR Reverb': AIRReverb,
  'Eleven Reverb': ElevenReverb,
  'Spring Reverb': SpringReverb,
  'Tape Echo': TapeEcho,
  'BBD Delay': BBDDelay,
  'AIR Delay': AIRDelay,
  'Dyn Delay': DynDelay,
  Shimmer,
  'Reverse Delay': ReverseDelay,
  'Pitch Delay': PitchDelay,
  'Ambi Verb': AmbiVerb,
  'Reso Delay': ResoDelay,
  'Party Verb': PartyVerb,
  'FX-Loop': FXLoop,
  Volume,
  'Shine Wah': ShineWah,
  'Black Wah': BlackWah,
  'More Wah': MoreWah,
  Wham,
  Harm,
  Panner,
  'Chord Wham': ChordWham,
  'Time Warp': TimeWarp,
  Feedback,
  Amp: Amp
}
