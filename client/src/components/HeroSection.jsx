import React, { useState } from 'react'
import './Hero.css'
import { Search } from 'lucide-react'
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [query,setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const searchJobHandler = () =>{
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  }
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <marquee className="banner__title" behavior="" direction="">Job Protal App</marquee>
        <span className='heading'>No. 1 Job Hunt Website</span>
        <h1>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Drem Jobs</span></h1>
        <p>This is Job protal App.All Jobs is Avaiable.Search this your requirment Jobs.And Apply this Jobs.</p>

        <div className='searchButton'>
          <input 
            type="text"
            placeholder='Find your drem jobs'
            onChange={(e) => setQuery(e.target.value)}
            className='outline-none border-none w-full'
          />
          <Button onClick={searchJobHandler} className='rounded-r-full bg-[#6A38C3]'>
            <Search className='search'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
