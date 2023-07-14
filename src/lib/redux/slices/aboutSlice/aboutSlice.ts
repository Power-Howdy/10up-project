/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */

const initialState: AboutSliceState[] = [
    {
        imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-strategy.png",
        title: "Strategy",
        content: "Should I build an app or a responsive website? Am I maximizing my ad revenue? Why don’t my visitors click “sign up”? How many 10uppers does it take to screw in a website? We don’t just build: we figure out the plan."
    },
    {
      imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-design.png",
      title: "Design",
      content: "Inspiring design brings the functional and the beautiful; a delightful blend of art and engineering. We focus on the audience whimsy and relationship between brand and consumer, delivering design that works."
    },
    {
      imageUrl: "https://10up.com/wp-content/themes/10up-sept2016/assets/img/icon-engineering.png",
      title: "Engineering",
      content: "Please. Look under the hood. Our team of sought after international speakers provides expert code review for enterprise platforms like WordPress.com VIP. Because the best website you have is the one that’s up."
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
