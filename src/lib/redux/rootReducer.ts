/* Instruments */
import { counterSlice, aboutSlice, membersSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  about: aboutSlice.reducer,
  members: membersSlice.reducer
}
