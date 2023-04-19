import { EPBIIClean, EPBIIClean_2 } from './EPBIIClean'
import { Tangerine30CH1, Tangerine30CH1_2 } from './Tangerine30CH1'
import { Tangerine30CH2, Tangerine30CH2_2 } from './Tangerine30CH2'

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
  }
}

export default models
