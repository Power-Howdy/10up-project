'use client'
import React from 'react'
import LabeledInput from '../LabeledInput'
import LabeledSelect from "../LabeledSelect"
import LabeledTextarea from "../LabeledTextarea"
import LabeledCheckbox from '../LabeledCheckbox'
import ButtonCustomized from "../ButtonCustomized"
type Props = {}

const ContactForm = (props: Props) => {
  const handleClick = () => {alert('Submit');}
  return (
    <div className='bg-gray-200 px-64 py-12'>
      <span>Let&apos;s TALK</span>
      <div className='grid grid-cols-2'>
        <LabeledInput label='Name' placeholder='Please write your name here'/>
        <LabeledInput label='Company' placeholder=''/>
        <LabeledInput label='Email' placeholder=''/>
        <LabeledInput label='Phone' placeholder=''/>
      </div>
      <span>Tell us about YOUR PROJECT. (We promise we won’t hold you to it...)</span>
      <LabeledSelect label='Budget' options={["123", "234"]}/>
      <LabeledInput label='Timeline' placeholder=''/>
      <LabeledTextarea label='Details' placeholder=''/>
      <LabeledSelect label='Source' options={["123", "234"]}/>
      <LabeledCheckbox label='Send me news and information about solutions and services from 10up; I have read and consent to the privacy policy.'/>
      <ButtonCustomized type='primary' label='CONTACT' handleClick={handleClick} />
    </div>
  )
}

export default ContactForm