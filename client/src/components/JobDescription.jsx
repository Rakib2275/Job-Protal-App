import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import { Badge } from './ui/badge'
import "./JobDescription.css"
import { Button } from './ui/button'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { setSingleJob } from '@/redux/jobSlice'
import { JOB_API_END_POINT } from '@/utils/constant'
import { useDispatch, useSelector } from 'react-redux'


const JobDescription = () => {
    const isApplied = true;
    const params = useParams();
    const jobId = params.id;
    // UseGetSingleJobs(jobId);
    const {singleJob} = useSelector(store => store.job)
    const {user} = useSelector(store => store.auth);

    const dispatch = useDispatch();
    useEffect(() =>{
    const fetchSingleJobs = async () => {
        try {
           const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
           if(res.data.success){
            dispatch(setSingleJob(res.data.job));
           } 
        } catch (error) {
           console.log(error); 
        }
    }
    fetchSingleJobs();
  },[jobId,dispatch,user?._id])
  return (
    <div>
      <Navbar />
        <div className='desc'>
        <div className='descBody'>
            <div>
            <h1 className='title'>{singleJob?.title}</h1>
            <div className='positions'>
                <Badge className={'position1'} variant="ghost">{singleJob?.position}Positions</Badge>
                <Badge className={'position2'} variant="ghost">{singleJob?.jobType}</Badge>
                <Badge className={'position3'} variant="ghost">{singleJob?.salary}LPA</Badge>
            </div>
        </div>
        <Button disabled={isApplied} className={`rounded-lg ${isApplied ? 'isApplied' : 'appliedFalse'}`}>
         {isApplied ? 'Already Applied' : 'Apply now'}
        </Button>

        </div>
        <h2 className='jobDesc'>Job Description</h2>
        <div className='info'>
          <h2 className='role'>Role: <span className='fronted'>{singleJob?.title}</span></h2>
          <h2 className='role'>Location: <span className='fronted'>{singleJob?.location}</span></h2>
          <h2 className='role'>Description: <span className='fronted'>{singleJob?.description}</span></h2>
          <h2 className='role'>Experience: <span className='fronted'>{singleJob?.experience} year</span></h2>
          <h2 className='role'>Salary: <span className='fronted'>{singleJob?.salary} LPA</span></h2>
          <h2 className='role'>Total Applicants: <span className='fronted'>{singleJob?.application?.length}</span></h2>
          <h2 className='role'>Posted Date: <span className='fronted'>{singleJob?.createdAt}</span></h2>
        </div>
      </div>

    </div>
  )
}

export default JobDescription
