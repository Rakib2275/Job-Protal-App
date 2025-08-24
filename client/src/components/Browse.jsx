import React from 'react'
import Navbar from './shared/Navbar'
import Job from './Job';
import "./Browse.css"

const randomJobs = [1,2,3];

const Browse = () => {
  return (
    <div>
      <Navbar />
      <div className='Browse'>
        <h2>Search Result ({randomJobs.length})</h2>
        <div className='browseJob'>
          {
          randomJobs.map((item,index) =>{
            return(
              <Job />
            )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Browse
