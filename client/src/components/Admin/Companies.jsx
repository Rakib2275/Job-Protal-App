import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import CompaniesTable from './CompaniesTable'
import "./Companies.css"
import { useNavigate } from 'react-router-dom'
import useGetAllCompanies from '@/hooks/userGetAllCompanies'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'
import Navbar2 from './Navbar2'



const Companies = () => {
  useGetAllCompanies();
  const [input,setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setSearchCompanyByText(input));
  },[input])
  return (
    <div>
      <Navbar2 />
      <div className='companies'>
        <div className='body'>
            <Input className="w-fit" placeholder="Filter by name" onChange = {(e) => setInput(e.target.value)} />
            <Button className={"button"} onClick={() => navigate("/admin/companies/create")}>New Company</Button>
        </div>
        <CompaniesTable />
      </div>
    </div>
  )
}

export default Companies
