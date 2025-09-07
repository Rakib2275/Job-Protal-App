import React from 'react'
import "./UseComponent.css"

const UseComponent = () => {
  return (
    <div className='component'>
      <h1 className='text-center'>Why Choose Us</h1>
      <div className='div'>
        <div>
          <img src="/p1.webp" alt="picture"  className='image1' />
        </div>
        <div className='perag'>
          <h2>Create Jobs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos omnis quam ut, deleniti fugiat!</p>
        </div>
      </div>
      <div className='div'>
        <div>
          <img src="/p2.avif" alt="picture"  className='image1' />
        </div>
        <div className='perag'>
          <h2>Job Post</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos omnis quam ut, deleniti fugiat!</p>
        </div>
      </div>
      <div className='div'>
        <div>
          <img src="/p3.avif" alt="picture"  className='image1' />
        </div>
        <div className='perag'>
          <h2>Apply Jobs</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eos omnis quam ut, deleniti fugiat!</p>
        </div>
      </div>
    </div>
  )
}

export default UseComponent
