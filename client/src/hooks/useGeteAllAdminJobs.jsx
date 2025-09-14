import { useEffect, useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAllAdminJobs } from "@/redux/jobSlice";
import { JOB_API_END_POINT } from "@/utils/constant";

const UseGetAllAdminJobs = (refreshTrigger = 0) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAllAdminJobs = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) return;

      const res = await axios.get(`${JOB_API_END_POINT}/getAdminJobs`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setAllAdminJobs(res.data.jobs));
      } else {
        setError("Failed to fetch jobs");
      }
    } catch (err) {
      console.error("Error fetching admin jobs:", err.response?.data || err.message);
      setError(err.response?.data || err.message);
    } finally {
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    fetchAllAdminJobs();
  }, [fetchAllAdminJobs, refreshTrigger]);

  return { loading, error, fetchAllAdminJobs };
};

export default UseGetAllAdminJobs;
