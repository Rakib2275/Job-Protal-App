import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    allAdminJobs: [],
    singleJob: null,
    searchJobByText: "",
    searchedQuery: "",
    allAppliedJobs: [], // ✅ fixed typo
  },
  reducers: {
    setAllJobs: (state, action) => {
      state.allJobs = action.payload;
    },
    setSingleJob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    addAdminJob: (state, action) => {
      state.allAdminJobs.push(action.payload);
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
    setSearchedQuery: (state, action) => {
      state.searchedQuery = action.payload;
    },
    setAllAppliedJobs: (state, action) => {
      state.allAppliedJobs = action.payload; // ✅ fixed reducer
    },
  },
});

export const {
  setAllJobs,
  setSingleJob,
  setAllAdminJobs,
  addAdminJob,
  setSearchJobByText,
  setSearchedQuery,
  setAllAppliedJobs,
} = jobSlice.actions;

export default jobSlice.reducer;
