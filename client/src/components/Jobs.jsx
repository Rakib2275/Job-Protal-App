import React from 'react'
import Navbar from './shared/Navbar'
import FilterCard from './FilterCard'
import Job from './Job';
import './Jobs.css'
import { useSelector } from 'react-redux';

const jobsArray = [1,2,3,4,5,6,7,8];

const Jobs = () => {
    const {allJobs} = useSelector(store =>store.job);
  return (
    <div>
        <Navbar />
        <div className='container'>
            <div className='cards'>
                <div className='w-20%'>
                    <FilterCard/>
                </div>
                {
                    allJobs.length <= 0 ? <span>Job not found</span> :(
                        <div className='card'>
                            <div className='cardBody'>
                                {
                                    allJobs.map((job) =>(
                                        <div key={job?._id}>
                                            <Job job={job}/>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default Jobs
