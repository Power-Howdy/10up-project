/* Instruments */
import { counterSlice, aboutSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  about: aboutSlice.reducer
}
