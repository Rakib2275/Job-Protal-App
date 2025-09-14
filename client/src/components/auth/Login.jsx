import React, { useState } from 'react'
import './Singup.css'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { RadioGroup} from '../ui/radio-group'
import { Button } from '../ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import axios from "axios";
import { USER_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setUser } from '@/redux/authSlice'
import store from '@/redux/store'
import { Loader2 } from 'lucide-react'



const Login = () => {
  const [input,setInput] = useState({
    email:"",
    password:"",
    role:""
  });
  const {loading} = useSelector(store=>store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) =>{
    setInput({...input,[e.target.name]:e.target.value});
  }
  const submitHandler = async(e) =>{
      e.preventDefault();
      try {
        dispatch(setLoading(true));
        const res = await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials:true,
        })
        if(res.data.success){
          dispatch(setUser(res.data.user))
          navigate("/");
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
          <h1 className='header'>Log In</h1>
          <div>
            <Label>Email</Label>
            <Input type="email"
             placeholder="Enter your Email address"
             className='input'
             value={input.email}
             name="email"
             onChange={changeEventHandler} />
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
                <Input type="radio"
                  name="role"
                  value="student"
                  checked={input.role == 'student'}
                  onChange={changeEventHandler} 
                  className="cursor-pointer" /> 
                <Label htmlFor="r1">Student</Label>
              </div>

              <div className="student">
                <Input type="radio"
                  name="role"
                  value="recruiter" 
                  checked = {input.role == 'recruiter'}
                  onChange = {changeEventHandler}
                  className="cursor-pointer" />
                <Label htmlFor="r2">Admin</Label>
              </div>
            </RadioGroup>

          </div>
          {
            loading ? <Button><Loader2 className='loading' /> Please wait</Button> : <Button type="submit" className="submit">Login</Button>
          }
          <span className='text'>Don't have an account? <Link to="/signup" className="login">Signin</Link></span>
        </form>
      </div>
    </div>
  )
}

export default Login
