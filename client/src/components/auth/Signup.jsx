import React from 'react'
import './Singup.css'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'


const Signup = () => {
  return (
    <div>
      <Navbar />
      <div className='signup'>
        <form action="" className='signupFrom'>
          <h1 className='header'>Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text" placeholder="Enter your full name" className='input' />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text" placeholder="Enter your Phone number" className='input' />
          </div>
          <div>
            <Label>Emai</Label>
            <Input type="email" placeholder="Enter your Email address" className='input' />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password" placeholder="" className='input' />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup defaultValue="comfortable" className="recruiter">
              <div className="student">
                <RadioGroupItem value="student" id="r1" />
                <Label htmlFor="r1">Student</Label>
              </div>

              <div className="student">
                <RadioGroupItem value="recruiter" id="r2" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

        </form>
      </div>
    </div>
  )
}

export default Signup
