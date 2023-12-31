/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
/* Instruments */
import { getBlogAsync } from "./thunks"

const initialState: BlogSliceState[] = []

export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state) => {
        //do some logic
    },
    //just return default
    list: (state) => state
  } ,
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getBlogAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        return action.payload
      })
  },
})

/* Types */
export interface BlogSliceState {
  title: string,
  author: string,
  avatar: string,
  picture: string,
  content: string
}
