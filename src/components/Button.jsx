import React from 'react'

const Button = ({label}) => {
  return (
    <button className='py-3 px-5 rounded-lg bg-primary-default text-white uppercase text-sm'>{label}</button>
  )
}

export default Button