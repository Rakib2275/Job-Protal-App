import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createSelector } from "@reduxjs/toolkit";
import "./Companies.css";

// Memoized selector
const selectFilteredAdminJobs = createSelector(
  [(state) => state.job.allAdminJobs, (state) => state.company.searchCompanyByText],
  (allAdminJobs, searchText) => {
    const jobsArray = Array.isArray(allAdminJobs) ? allAdminJobs : [];
    const text = (searchText || "").trim().toLowerCase();
    return jobsArray.filter((job) => (job?.company?.name || "").toLowerCase().includes(text));
  }
);

const AdminJobsTable = () => {
  const navigate = useNavigate();
  const filterJobs = useSelector(selectFilteredAdminJobs);

  if (!filterJobs) return <p>Loading jobs...</p>;

  return (
    <div>
      <Table>
        <TableCaption>A List of your recent posted jobs</TableCaption>
        <TableHeader>
          <TableRow className="row">
            <TableHead>Company Name</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {filterJobs.length === 0 ? (
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                No jobs found.
              </TableCell>
            </TableRow>
          ) : (
            filterJobs.map((job) => (
              <TableRow key={job._id} className="row">
                <TableCell>{job?.company?.name || "N/A"}</TableCell>
                <TableCell>{job?.role || "N/A"}</TableCell>
                <TableCell>{job?.createdAt ? job.createdAt.split("T")[0] : "N/A"}</TableCell>
                <TableCell className="text-right cursor-pointer">
                  <Popover>
                    <PopoverTrigger>
                      <MoreHorizontal />
                    </PopoverTrigger>
                    <PopoverContent className="popcontent">
                      <div
                        onClick={() => navigate(`/admin/companies/${job._id}`)}
                        className="edit"
                      >
                        <Edit2 />
                        <span className="editbtton">Edit</span>
                      </div>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AdminJobsTable;
