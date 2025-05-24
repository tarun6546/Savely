import React from 'react'

const Footer = () => {
  return (
    <div className='bg-dark text-light p-4 fixed-bottom'>
        <h6 className='text-center mb-0'>ALL RIGHTS RESERVED &copy; {new Date().getFullYear()}</h6>
    </div>
  )
}

export default Footer;