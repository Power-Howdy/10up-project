import React from 'react'

type Props = {}

const Benefits = (props: Props) => {
  return (
    <div className='grid grid-cols-3 bg-gray-200 gap-3 py-10 px-32'>
      <div className='text-4xl'>Benefits</div>
      <div>
        <p>Paid time off & holidays</p>
        <p>Bonus opportunities</p>
        <p>Professional development budget</p>
        <p>Paid parental leave</p>
        <p>Flexible work schedule</p>
        <p>Annual all-team Summit!</p>
      </div>
      <div>
        <p>Paid time off & holidays</p>
        <p>Bonus opportunities</p>
      </div>
    </div>
  )
}

export default Benefits