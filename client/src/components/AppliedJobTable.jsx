import React from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { Badge } from './ui/badge'
import "./Profile.css"

const AppliedJobTable = () => {
  return (
    <div>
      <Table className={"table"} >
        <TableCaption className={"caption"}>A list of your applied jobs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Job Role</TableHead>
                <TableHead>Company</TableHead>
                <TableHead className={"text-right"}>Status</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody className={"tableBody"}>
            {
                [1,2,3].map((item,index) =>(
                    <TableRow key={index}>
                        <TableCell>17-08-2025</TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Google</TableCell>
                        <TableCell className={"text-right"}><Badge>Selected</Badge></TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </div>
  )
}

export default AppliedJobTable
