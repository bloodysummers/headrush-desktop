import { _400R, _400R_2 } from './400R'
import { J120H, J120H_2 } from './J120H'
import { ACHiBoost, ACHiBoost_2 } from './ACHiBoost'
import { ACHiBoostMod, ACHiBoostMod_2 } from './ACHiBoostMod'
import { BlackDuo, BlackDuo_2 } from './BlackDuo'
import { BlackLuxNorm, BlackLuxNorm_2 } from './BlackLuxNorm'
import { BlackLuxVib, BlackLuxVib_2 } from './BlackLuxVib'
import { BlackMini, BlackMini_2 } from './BlackMini'
import { BlackPrince, BlackPrince_2 } from './BlackPrince'
import { BlackPrinceRev, BlackPrinceRev_2 } from './BlackPrinceRev'
import { BlackSR, BlackSR_2 } from './BlackSR'
import { BlackShimmer, BlackShimmer_2 } from './BlackShimmer'
import { BlackVib, BlackVib_2 } from './BlackVib'
import { BlueLineBass, BlueLineBass_2 } from './BlueLineBass'
import { BlueLineScoop, BlueLineScoop_2 } from './BlueLineScoop'
import { DeluxeGainMod, DeluxeGainMod_2 } from './DeluxeGainMod'
import { EPBIIClean, EPBIIClean_2 } from './EPBIIClean'
import { EPBIICrunch, EPBIICrunch_2 } from './EPBIICrunch'
import { EPBIIHiLead, EPBIIHiLead_2 } from './EPBIIHiLead'
import { EPBIILoLead, EPBIILoLead_2 } from './EPBIILoLead'
import { FlipBass, FlipBass_2 } from './FlipBass'
import { J45, J45_2 } from './J45'
import { Lead800100W, Lead800100W_2 } from './Lead800100W'
import { Lead80050W, Lead80050W_2 } from './Lead80050W'
import { Lead800BassMod, Lead800BassMod_2 } from './Lead800BassMod'
import { Lead800Bright, Lead800Bright_2 } from './Lead800Bright'
import { Lead800TSMod, Lead800TSMod_2 } from './Lead800TSMod'
import { PlexiEL84Mod, PlexiEL84Mod_2 } from './PlexiEL84Mod'
import { Plexiglas100W, Plexiglas100W_2 } from './Plexiglas100W'
import { Plexiglas50W, Plexiglas50W_2 } from './Plexiglas50W'
import { PlexiglasVari, PlexiglasVari_2 } from './PlexiglasVari'
import { Tangerine30CH1, Tangerine30CH1_2 } from './Tangerine30CH1'
import { Tangerine30CH2, Tangerine30CH2_2 } from './Tangerine30CH2'
import { TraceElliotElf, TraceElliotElf_2 } from './TraceElliotElf'
import { TweedBass, TweedBass_2 } from './TweedBass'
import { TweedDeluxe, TweedDeluxe_2 } from './TweedDeluxe'
import { TweedPrince, TweedPrince_2 } from './TweedPrince'
import { M2Lead, M2Lead_2 } from './M2Lead'
import { M2LeadCapMod, M2LeadCapMod_2 } from './M2LeadCapMod'
import { SL100Clean, SL100Clean_2 } from './SL100Clean'
import { SL100Crunch, SL100Crunch_2 } from './SL100Crunch'
import { SL100Drive, SL100Drive_2 } from './SL100Drive'
import { SL100ExtRange, SL100ExtRange_2 } from './SL100ExtRange'
import { TreadModern, TreadModern_2 } from './TreadModern'
import { TreadRaw, TreadRaw_2 } from './TreadRaw'
import { TreadVintage, TreadVintage_2 } from './TreadVintage'
import { MS30, MS30_2 } from './MS30'
import { RB01BBlue, RB01BBlue_2 } from './RB01BBlue'
import { RB01BGreen, RB01BGreen_2 } from './RB01BGreen'
import { RB01BRed, RB01BRed_2 } from './RB01BRed'
import { PV51IIClean, PV51IIClean_2 } from './PV51IIClean'
import { PV51IICrunch, PV51IICrunch_2 } from './PV51IICrunch'
import { PV51IILead, PV51IILead_2 } from './PV51IILead'

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
  },
  '66 AC Hi Boost Mod': {
    1: ACHiBoostMod,
    2: ACHiBoostMod_2
  },
  '66 Flip Bass': {
    1: FlipBass,
    2: FlipBass_2
  },
  '67 Black Duo': {
    1: BlackDuo,
    2: BlackDuo_2
  },
  '67 Black Shimmer': {
    1: BlackShimmer,
    2: BlackShimmer_2
  },
  '67 Plexiglas Vari': {
    1: PlexiglasVari,
    2: PlexiglasVari_2
  },
  '68 Plexi EL84 Mod': {
    1: PlexiEL84Mod,
    2: PlexiEL84Mod_2
  },
  '68 Plexiglas 50W': {
    1: Plexiglas50W,
    2: Plexiglas50W_2
  },
  '69 Blue Line Bass': {
    1: BlueLineBass,
    2: BlueLineBass_2
  },
  '69 Blue Line Scoop': {
    1: BlueLineScoop,
    2: BlueLineScoop_2
  },
  '69 Plexiglas 100W': {
    1: Plexiglas100W,
    2: Plexiglas100W_2
  },
  '82 Lead 800 100W': {
    1: Lead800100W,
    2: Lead800100W_2
  },
  '82 Lead 800 50W': {
    1: Lead80050W,
    2: Lead80050W_2
  },
  '82 Lead 800 Bass Mod': {
    1: Lead800BassMod,
    2: Lead800BassMod_2
  },
  '82 LEAD 800 Bright': {
    1: Lead800Bright,
    2: Lead800Bright_2
  },
  '82 Lead 800 TS Mod': {
    1: Lead800TSMod,
    2: Lead800TSMod_2
  },
  '83 400R': {
    1: _400R,
    2: _400R_2
  },
  '84 J-120H': {
    1: J120H,
    2: J120H_2
  },
  '85 M-2 Lead': {
    1: M2Lead,
    2: M2Lead_2
  },
  '85 M-2 Lead Cap Mod': {
    1: M2LeadCapMod,
    2: M2LeadCapMod_2
  },
  '89 SL-100 Clean': {
    1: SL100Clean,
    2: SL100Clean_2
  },
  '89 SL-100 Crunch': {
    1: SL100Crunch,
    2: SL100Crunch_2
  },
  '89 SL-100 Drive': {
    1: SL100Drive,
    2: SL100Drive_2
  },
  '89 SL-100 Ext Range': {
    1: SL100ExtRange,
    2: SL100ExtRange_2
  },
  '92 Treadplate Modern': {
    1: TreadModern,
    2: TreadModern_2
  },
  '92 Treadplate Raw': {
    1: TreadRaw,
    2: TreadRaw_2
  },
  '92 Treadplate Vintage': {
    1: TreadVintage,
    2: TreadVintage_2
  },
  '93 MS30': {
    1: MS30,
    2: MS30_2
  },
  '97 RB-01b Blue': {
    1: RB01BBlue,
    2: RB01BBlue_2
  },
  '97 RB-01b Green': {
    1: RB01BGreen,
    2: RB01BGreen_2
  },
  '97 RB-01b Red': {
    1: RB01BRed,
    2: RB01BRed_2
  },
  '99 PV51 II Clean': {
    1: PV51IIClean,
    2: PV51IIClean_2
  },
  '99 PV51 II Crunch': {
    1: PV51IICrunch,
    2: PV51IICrunch_2
  },
  '99 PV51 II Lead': {
    1: PV51IILead,
    2: PV51IILead_2
  }
}

export default models
