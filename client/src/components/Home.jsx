import React, { useEffect } from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import UseGetAllJobs from '@/hooks/UseGetAllJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UseComponent from './UseComponent'
import "./home.css"




const Home = () => {
  UseGetAllJobs();
  const {user} = useSelector(store => store.auth);
  const navigate = useNavigate()
  useEffect(() =>{
    if(user?.role == 'recruiter'){
      navigate("/admin/companies");
    }
  },[])
  return (
    <div className='bg'>
      <Navbar/>
      <HeroSection />
      <CategoryCarousel />
      <LatestJobs />
      <UseComponent />
      <Footer />
    </div>
  )
}

export default Home
