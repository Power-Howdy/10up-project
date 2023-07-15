/* Instruments */
import { counterSlice, aboutSlice, membersSlice, blogSlice } from './slices'

export const reducer = {
  counter: counterSlice.reducer,
  about: aboutSlice.reducer,
  members: membersSlice.reducer,
  blog: blogSlice.reducer
}
