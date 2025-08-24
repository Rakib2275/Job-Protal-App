import React from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import './filterCard.css'

const filterData = [
  {
    filterType: "Location",
    array: ["Dhaka", "Cumilla", "Borishal", "Kholna", "Rajshahi"]
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
  },
  {
    filterType: "Salary",
    array: ["0-20k", "20-40k", "40k-1lakh"]
  }
]

const FilterCard = () => {
  return (
    <div className='my-card'>
      <h2 className="font-medium text-lg">Filter Job</h2>
      <hr className="mt-3" />

      {filterData.map((data, index) => (
        <div key={index} className="data">
          <h3 className='type'>{data.filterType}</h3>
          <RadioGroup className="mt-2">
            {data.array.map((item, idx) => (
              <div key={idx} className="flex items-center filter">
                <RadioGroupItem value={item} id={`${data.filterType}-${idx}`} />
                <Label htmlFor={`${data.filterType}-${idx}`}>{item}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
      ))}
    </div>
  )
}

export default FilterCard
