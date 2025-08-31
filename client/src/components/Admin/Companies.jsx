import React from 'react'
import Navbar from '../shared/Navbar'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import "./Companies.css"
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/userGetAllCompanies'



const Companies = () => {
  useGetAllCompanies();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className='companies'>
        <div className='body'>
            <Input className="w-fit" placeholder="Filter by name" />
            <Button className={"button"} onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  )
}

export default Companies
