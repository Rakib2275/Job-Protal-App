import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import "./create.css"
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import { COMPANY_API_END_POINT } from '@/utils/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '@/redux/companySlice'
import axios from 'axios'


const CreateCompany = () => {
    const navigate = useNavigate();
    const [companyName,setCompanyName] = useState(); 
    const dispatch = useDispatch();
    const registerNewCompany = async() =>{
      try {
        const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
          headers:{
            'Content-Type':'application/json'
          },
          withCredentials: true
        });
        if(res?.data?.success){
          dispatch(setSingleCompany(res.data.company))
          toast.success(res.data.message);
          const companyId = res?.data?.company?._id;
          navigate(`/admin/companies/${companyId}`)
        }
      } catch (error) {
        console.log(error)
      }
    }
  return (
    <div>
      <Navbar />
      <div className='create'>
        <div className='cmname'>
            <h2>Your Company Name</h2>
            <p className='pera'>What would you like to give your company name? You ca change this later.</p>
        </div>
        <Label>Company Name</Label>
        <Input type="text" className={"my-2"} placeholder="JobHunt, Microsoft etc." onChange ={(e) => setCompanyName(e.target.value)} />
        <div className='buttons'>
            <Button variant="outline" onClick={() => navigate("/admin/companies")}>Cancel</Button>
            <Button className={'button2'} onClick = {registerNewCompany} >Continue</Button>
        </div>
      </div>
    </div>
  )
}

export default CreateCompany
