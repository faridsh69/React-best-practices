import { atomWithStorage, createJSONStorage } from 'jotai/utils'

import { LIGHT_THEME_NAME } from 'src/configs/constants'

const sessionJsonStorage = createJSONStorage(() => sessionStorage)
export const themeAtom = atomWithStorage('selected-order', LIGHT_THEME_NAME, sessionJsonStorage)
