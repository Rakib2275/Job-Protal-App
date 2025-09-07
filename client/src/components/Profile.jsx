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

// const skills = ["HTML", "CSS","JavaScript", "ReactJs"]
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
                <AvatarImage src={user?.profile?.profilePhoto} alt="profile" />
            </Avatar>
            <div>
                <h2>{user.fullname}</h2>
                <p>{user?.profile?.bio}</p>
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
                    user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item,index) => <Badge key={index} className={"indiskill"}>{item}</Badge>) : <span>NA</span>
                }
            </div>
        </div>
        <div className='resumes'>
            <Label className={"resume"}>Resume</Label>
            {
                isResume ? <a target='blank' href={user?.profile?.resume} className='link'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
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
