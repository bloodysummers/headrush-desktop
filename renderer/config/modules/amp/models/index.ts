import { ACHiBoost, ACHiBoost_2 } from './ACHiBoost'
import { BlackLuxNorm, BlackLuxNorm_2 } from './BlackLuxNorm'
import { BlackLuxVib, BlackLuxVib_2 } from './BlackLuxVib'
import { BlackMini, BlackMini_2 } from './BlackMini'
import { BlackPrince, BlackPrince_2 } from './BlackPrince'
import { BlackPrinceRev, BlackPrinceRev_2 } from './BlackPrinceRev'
import { BlackSR, BlackSR_2 } from './BlackSR'
import { BlackVib, BlackVib_2 } from './BlackVib'
import { DeluxeGainMod, DeluxeGainMod_2 } from './DeluxeGainMod'
import { EPBIIClean, EPBIIClean_2 } from './EPBIIClean'
import { EPBIICrunch, EPBIICrunch_2 } from './EPBIICrunch'
import { EPBIIHiLead, EPBIIHiLead_2 } from './EPBIIHiLead'
import { EPBIILoLead, EPBIILoLead_2 } from './EPBIILoLead'
import { J45, J45_2 } from './J45'
import { Tangerine30CH1, Tangerine30CH1_2 } from './Tangerine30CH1'
import { Tangerine30CH2, Tangerine30CH2_2 } from './Tangerine30CH2'
import { TraceElliotElf, TraceElliotElf_2 } from './TraceElliotElf'
import { TweedBass, TweedBass_2 } from './TweedBass'
import { TweedDeluxe, TweedDeluxe_2 } from './TweedDeluxe'
import { TweedPrince, TweedPrince_2 } from './TweedPrince'

export type AmpModels = {
  [key: string]: {
    1: AmpModel
    2: AmpModel
  }
}

export type AmpModel = {
  [key: string]: string
}

const models: AmpModels = {
  '05 Tangerine 30 Ch1': {
    1: Tangerine30CH1,
    2: Tangerine30CH1_2
  },
  '05 Tangerine 30 Ch2': {
    1: Tangerine30CH2,
    2: Tangerine30CH2_2
  },
  '11 EPB II Clean': {
    1: EPBIIClean,
    2: EPBIIClean_2
  },
  '11 EPB II Crunch': {
    1: EPBIICrunch,
    2: EPBIICrunch_2
  },
  '11 EPB II Hi-Lead': {
    1: EPBIIHiLead,
    2: EPBIIHiLead_2
  },
  '11 EPB II Lo-Lead': {
    1: EPBIILoLead,
    2: EPBIILoLead_2
  },
  '17 Trace Elliot Elf': {
    1: TraceElliotElf,
    2: TraceElliotElf_2
  },
  '59 Deluxe Gain Mod': {
    1: DeluxeGainMod,
    2: DeluxeGainMod_2
  },
  '59 Tweed Bass': {
    1: TweedBass,
    2: TweedBass_2
  },
  '59 Tweed Deluxe': {
    1: TweedDeluxe,
    2: TweedDeluxe_2
  },
  '59 Tweed Prince': {
    1: TweedPrince,
    2: TweedPrince_2
  },
  '64 Black Lux Norm': {
    1: BlackLuxNorm,
    2: BlackLuxNorm_2
  },
  '64 Black Lux Vib': {
    1: BlackLuxVib,
    2: BlackLuxVib_2
  },
  '64 Black Vib': {
    1: BlackVib,
    2: BlackVib_2
  },
  '65 Black Mini': {
    1: BlackMini,
    2: BlackMini_2
  },
  '65 Black Prince': {
    1: BlackPrince,
    2: BlackPrince_2
  },
  '65 Black Prince Rev': {
    1: BlackPrinceRev,
    2: BlackPrinceRev_2
  },
  '65 Black SR': {
    1: BlackSR,
    2: BlackSR_2
  },
  '65 J45': {
    1: J45,
    2: J45_2
  },
  '66 AC Hi Boost': {
    1: ACHiBoost,
    2: ACHiBoost_2
  }
}

export default models
