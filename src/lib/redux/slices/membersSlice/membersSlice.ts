/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
/* Instruments */
import { getMemberAsync } from "./thunks"

const initialState: MemberSliceState[] = []

export const membersSlice = createSlice({
  name: 'members',
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
      .addCase(getMemberAsync.fulfilled, (state, action) => {
        // console.log(action.payload)
        return action.payload
      })
  },
})

/* Types */
export interface MemberSliceState {
  name: string,
  role: string,
  avatar: string
}
