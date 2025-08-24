import React, { useState } from 'react'
import './Singup.css'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { USER_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch, useSelector } from 'react-redux'
import store from '@/redux/store'
import { setLoading } from '@/redux/authSlice'
import { Loader2 } from 'lucide-react'


const Signup = () => {
  const [input,setInput] = useState({
      fullname:"",
      email:"",
      phonenumber:"",
      password:"",
      role:"",
      file:""
    });
    const {loading} = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const changeEventHandler = (e) =>{
      setInput({...input,[e.target.name]:e.target.value});
    }
    const changeFileHandler = (e) =>{
      setInput({...input,file:e.target.files?.[0]})
    }

    const submitHandler = async(e) =>{
      e.preventDefault();
      const formData = new FormData();
      formData.append("fullname",input.fullname);
      formData.append("email",input.email);
      formData.append("phonenumber",input.phonenumber);
      formData.append("password",input.password);
      formData.append("role",input.role);
      if(input.file){
        formData.append("file",input.file)
      }
      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/register`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true,
        })
        if(res.data.success){
          navigate("/login");
          toast.success(res.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      }finally{
        dispatch(setLoading(false));
      }
    }

  return (
    <div>
      <Navbar />
      <div className='signup'>
        <form onSubmit={submitHandler} action="" className='signupFrom'>
          <h1 className='header'>Sign Up</h1>
          <div>
            <Label>Full Name</Label>
            <Input type="text"
                   placeholder="Enter your full name"
                   className='input'
                   value={input.fullname}
                   name="fullname"
                   onChange={changeEventHandler}
              />
          </div>
          <div>
            <Label>Phone Number</Label>
            <Input type="text"
             placeholder="Enter your Phone number"
             className='input'
             value={input.phonenumber}
             name="phonenumber"
             onChange={changeEventHandler}
             />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email"
               placeholder="Enter your Email address"
               className='input'
               value={input.email}
               name="email"
               onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label>Password</Label>
            <Input type="password"
             placeholder=""
             className='input'
             value={input.password}
             name="password"
             onChange={changeEventHandler} />
          </div>
          <div className="flex items-center justify-between">
            <RadioGroup defaultValue="comfortable" className="recruiter">
              <div className="student">
                <Input 
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role == 'student'}
                  onChange={changeEventHandler} 
                  className="cursor-pointer" /> 
                <Label htmlFor="r1">Student</Label>
              </div>

              <div className="student">
                <Input 
                  type="radio"
                  name="role"
                  value="recruiter" 
                  checked = {input.role == 'recruiter'}
                  onChange = {changeEventHandler}
                  className="cursor-pointer" />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="imageInput">
              <Label>Profile</Label>
              <Input 
                     accept="image/*"
                     type="file"
                     onChange={changeFileHandler}
                     className="cursor-pointer"
              />
            </div>

          </div>
          {
            loading ? <Button><Loader2 className='loading' /> Please wait</Button> : <Button type="submit" className="submit">Signup</Button>
          }
          <span className='text'>Already have an account? <Link to="/login" className="login">Login</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Signup
