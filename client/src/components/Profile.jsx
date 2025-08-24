import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import "./Profile.css"
import { Button } from './ui/button'
import { Contact, Mail, Pen } from 'lucide-react'
import { Badge } from './ui/badge'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfile from './UpdateProfile'
import { useSelector } from 'react-redux'
import store from '@/redux/store'

const skills = ["HTML", "CSS","JavaScript", "ReactJs"]
const isResume = true;
const Profile = () => {
    const [open,setOpen] = useState(false);
    const {user}=useSelector(store=>store.auth)
  return (
    <div>
      <Navbar />
      <div className='profile'>
        <div className='flex justify-between'>
            <div className='profileView'>
            <Avatar className={"imageButtons"}>
                <AvatarImage src="https://www.shutterstock.com/shutterstock/photos/2174926871/display_1500/stock-vector-circle-line-simple-design-logo-blue-format-jpg-png-eps-2174926871.jpg" alt="profile" />
            </Avatar>
            <div>
                <h2>{user.fullname}</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, ratione impedit est libero voluptate iure!</p>
            </div>
            
        </div>
        <Button onClick={() => setOpen(true)} className={"pen"} variant="outline"><Pen/></Button>
        </div>
        <div className='phone'>
            <div className='mail'>
                <Mail />
                <span>{user.email}</span>
            </div>
            <div className='mail'>
                <Contact />
                <span>{user.phonenumber}</span>
            </div>
        </div>
        <div className='skills'>
            <h2>Skills</h2>
            <div className='skill'>
                {
                    skills.length !== 0 ? skills.map((item,index) => <Badge key={index} className={"indiskill"}>{item}</Badge>) : <span>NA</span>
                }
            </div>
        </div>
        <div className='resumes'>
            <Label className={"resume"}>Resume</Label>
            {
                isResume ? <a target='blank' href={user?.profile?.resume} className='link'>Rakibul Hasan</a> : <span>NA</span>
            }
        </div>
      </div>
      <div className="appliedJob">
            <h2 className='text-center'>Applied Jobs</h2>
            <AppliedJobTable />
        </div>
        <UpdateProfile open={open} setOpen={setOpen} />
    </div>
  )
}

export default Profile
