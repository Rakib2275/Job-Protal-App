import React from 'react'
import { Badge } from './ui/badge'
import './LatestJob.css'

const LatestJobCard = ({job}) => {
  return (
    <div className='JobCard'>
      <div>
        <h2 className='name'>{job?.company?.name}</h2>
        <p className='pera'>Bangladesh</p>
      </div>
      <div>
        <h2 className='title'>{job?.title}</h2>
        <p className='pera'>{job.description}</p>
      </div>
      <div className='positionss'>
        <Badge className={'position1'} variant="ghost">{job?.position} Positions</Badge>
        <Badge className={'position2'} variant="ghost">{job?.jobType}</Badge>
        <Badge className={'position3'} variant="ghost">{job?.salary}LPA</Badge>
      </div>
    </div>
  )
}

export default LatestJobCard
