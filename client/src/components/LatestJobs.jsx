import React from 'react'
import LatestJobCard from './LatestJobCard'
import './LatestJob.css'
import { useSelector } from 'react-redux'

const LatestJobs = () => {
  const { allJobs } = useSelector(store => store.job);

  return (
    <div className='container'>
      <h1 className='headings'>
        <span className='text-[#6A38C2]'>Latest & Top </span>Job Openings
      </h1>

      <div className='jobCard'>
        {
          !allJobs || allJobs.length === 0 
            ? (<span>No Job Available</span>) 
            : (allJobs.slice(0, 6).map((job) => (
                <LatestJobCard key={job._id} job={job} />
              )))
        }
      </div>
    </div>
  )
}

export default LatestJobs
