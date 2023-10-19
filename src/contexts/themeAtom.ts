import { atomWithStorage, createJSONStorage } from 'jotai/utils'
import { LIGHT_THEME_NAME } from 'src/configs/theme'

const sessionJsonStorage = createJSONStorage(() => sessionStorage)
export const themeAtom = atomWithStorage('selected-theme', LIGHT_THEME_NAME, sessionJsonStorage)
