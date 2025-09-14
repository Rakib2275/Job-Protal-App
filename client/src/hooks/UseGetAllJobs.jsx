import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const UseGetAllJobs = () => {
  const dispatch = useDispatch();
  const {searchedQuery} = useSelector(store =>store.job);
  useEffect(() => {
    const fetchAllJobs = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error.response?.data || error.message);
      }
    };

    fetchAllJobs();
  }, [dispatch]);
};

export default UseGetAllJobs;
