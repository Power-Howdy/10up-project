/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectMembers = (state: ReduxState) => {
    // console.log(state);
    return state.members;
}