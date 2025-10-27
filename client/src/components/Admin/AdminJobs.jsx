import React, { useState, useEffect } from 'react';
import Navbar from '../shared/Navbar';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import "./Companies.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AdminJobsTable from './AdminJobsTable';
import UseGetAllAdminJobs from '@/hooks/useGeteAllAdminJobs';
import UseGetAllJobs from '@/hooks/UseGetAllJobs';
import { setSearchJobByText } from '@/redux/jobSlice';


const AdminJobs = () => {
  UseGetAllJobs();
  const [input, setInput] = useState("");
  const [refreshTrigger, setRefreshTrigger] = useState(0); 
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading, error } = UseGetAllAdminJobs(refreshTrigger);

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input, dispatch]);

  // Call this after posting a job
  const handleJobPostSuccess = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  return (
    <div>
      <Navbar />
      <div className='companies'>
        <div className='body'>
          <Input
            className="w-fit"
            placeholder="Filter by name"
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="button" onClick={() => navigate("/admin/jobs/create")}>
            New Jobs
          </Button>
        </div>
        {loading ? <p>Loading jobs...</p> : error ? <p>{error}</p> : <AdminJobsTable />}
      </div>
    </div>
  );
};

export default AdminJobs;
