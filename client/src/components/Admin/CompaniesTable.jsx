import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import "./Companies.css"
import { useSelector } from 'react-redux'

const CompaniesTable = () => {
  return (
    <div>
      <Table >
        <TableCaption>A List of your recent registered companies</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className={'text-right'}>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         
              <TableCell>
              <Avatar className="imageButton">
                <AvatarImage src="https://www.shutterstock.com/shutterstock/photos/2174926871/display_1500/stock-vector-circle-line-simple-design-logo-blue-format-jpg-png-eps-2174926871.jpg" />
              </Avatar>
              </TableCell>
                <TableCell>Company Name</TableCell>
                <TableCell>Date</TableCell>
                <TableCell className="text-right cursor-pointer">
                <Popover>
                  <PopoverTrigger>
                    <MoreHorizontal />
                  </PopoverTrigger>
                    <PopoverContent className="popcontent">
                      <div className="edit">
                      <Edit2 />
                      <span>Edit</span>
                      </div>
                    </PopoverContent>
              </Popover>
            </TableCell> 
        </TableBody>

      </Table>
    </div>
  )
}

export default CompaniesTable
