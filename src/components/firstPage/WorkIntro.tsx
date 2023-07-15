import React from 'react'
import ImageHover from '../ImageHover';
type Props = {}

const WorkIntro = (props: Props) => {
  return (
    <div className='grid grid-cols-7'>
      <div className='grid col-span-4'>
        <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_1152,h_648/prod/uploads/2013/12/DMV-feature-1-1152x648.jpg' text='California DMV Website Redesign'/>
      </div>
      <div className='grid col-span-3'>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2017/02/motortrend_hero_v2-768x324.png' text='Motor Trend'/>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_324/prod/uploads/2013/12/classifai-feature-1-768x324.jpg' text='Classic AI'/>

      </div>
      <div className='grid col-span-2'>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/fivethirtyeight-feature-576x324.jpg' text='FiveThirtyEight'/>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_324/prod/uploads/2013/12/politico-feature-576x324.jpg' text='Politico EU'/>

      </div>
    
      <div className='grid col-span-2'>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_576,h_648/prod/uploads/2013/12/fansided-feature-1-576x648.jpg' text='Fansided 250'/>

      </div>
      <div className='grid col-span-3'>
      <ImageHover src='https://res.cloudinary.com/tenup/image/upload/f_auto,c_fill,w_768,h_648/prod/uploads/2013/12/white-house-feature-768x648.jpg' text='10up helps launch a new WhiteHouse.gov'/>

      </div>

    </div>
  )
}

export default WorkIntro