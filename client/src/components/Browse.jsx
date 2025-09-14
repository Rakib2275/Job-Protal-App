import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import "./Browse.css"
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import UseGetAllJobs from '@/hooks/UseGetAllJobs';

// const randomJobs = [1,2,3];

const Browse = () => {
  UseGetAllJobs();
  const {allJobs} = useSelector(store => store.job)
  const dispatch = useDispatch();
  useEffect(() =>{
    return(()=>{
      dispatch(setSearchedQuery(""));
    })
  },[])
  return (
    <div>
      <Navbar />
      <div className='Browse'>
        <h2>Search Result ({allJobs.length})</h2>
        <div className='browseJob'>
          {
          allJobs.map((job,index) =>{
            return(
              <Job key={job._id} job={job} />
            )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browse
