/* Instruments */
import type { ReduxState } from '@/lib/redux'

export const selectBlog = (state: ReduxState) => {
    // console.log(state);
    return state.blog;
}