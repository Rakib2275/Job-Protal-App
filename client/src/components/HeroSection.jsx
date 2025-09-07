import React from 'react'
import './Hero.css'
import { Search } from 'lucide-react'
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <div className='text-center'>
      <div className='flex flex-col gap-5 my-10'>
        <marquee className="banner__title" behavior="" direction="">Job Protal App</marquee>
        <span className='heading'>No. 1 Job Hunt Website</span>
        <h1>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Drem Jobs</span></h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, facilis repudiandae. Ab ex ut quos!</p>

        <div className='searchButton'>
          <input 
            type="text"
            placeholder='Find your drem jobs'
            className='outline-none border-none w-full'
          />
          <Button className='rounded-r-full bg-[#6A38C3]'>
            <Search className='search'/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
