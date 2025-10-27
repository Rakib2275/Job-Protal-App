import React from 'react'
import { Button } from './ui/button'
import { Bookmark} from 'lucide-react'
import { Avatar, AvatarImage } from './ui/avatar'
import './job.css'
import { Badge } from './ui/badge'
import {useNavigate} from 'react-router-dom'

const Job = ({job}) => {
  const navigate = useNavigate();
  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt
    return Math.floor(timeDifference / (1000*24*60*60));
  }
  return (
    <div className='jobpage'>
      <div className='flex items-center justify-between'>
        <p className='days'>{daysAgoFunction(job?.createdAt)== 0? "Today":`${daysAgoFunction(job?.createdAt)} days ago`}</p>
        <Button variant="outline" className="rounded-full" size="icon"><Bookmark/></Button>
      </div>

      <div className='image'>
        <Button className="buttons" variant="ouline" size="icon" >
            <Avatar  className="imageButton">
                <AvatarImage src={job?.company?.logo} />
            </Avatar>
        </Button>
        <div>
            <h2 className='companyName'>{job?.company?.name}</h2>
            <p className='days'>Bangladesh</p>
        </div>
      </div>
      <div>
        <h3 className='font-bold text-lg my-2'>{job?.title}</h3>
        <p className='jobpera'>{job?.description}</p>
      </div>
      <div className='positions'>
        <Badge className={'position1'} variant="ghost">{job?.position} Positions</Badge>
        <Badge className={'position2'} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'position3'} variant="ghost">{job?.salary}LPA</Badge>
      </div>

      <div className='Buttons'>
        <Button onClick={() => navigate(`/description/${job?._id}`)}
          variant={"outline"} 
          className={'Button'}>Details</Button>
        <Button className={"bg-[#7209b7] Button2"}>Save For Later</Button>
      </div>
    </div>
  )
}

export default Job
