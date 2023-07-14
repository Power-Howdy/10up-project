/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectAbout = (state: ReduxState) => {
    // console.log(state);
    return state.about;
}