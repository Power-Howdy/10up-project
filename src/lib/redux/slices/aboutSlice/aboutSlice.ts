/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */

const initialState: AboutSliceState[] = [
    {
        imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-design.png",
        title: "Strategy",
        content: "Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan."
    },
    {
      imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-design.png",
      title: "Strategy",
      content: "Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan."
    },
    {
      imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-design.png",
      title: "Strategy",
      content: "Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan."
    }
]

export const aboutSlice = createSlice({
  name: 'about',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    add: (state, action: PayloadAction<AboutSliceState>) => {
        //do some logic
    },
    remove: () => {
        // do some logic
    },
    //just return default
    list: (state) => state
  } 
})

/* Types */
export interface AboutSliceState {
  imageUrl: string,
  title: string,
  content: string
}
