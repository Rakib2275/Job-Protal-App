import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browse from './components/Browse'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './components/Admin/Companies'
import CreateCompany from './components/Admin/CreateCompany'
import AdminJobs from './components/Admin/AdminJobs'
import PostJob from './components/Admin/PostJob'
import Applicants from './components/Admin/Applicants'
import Protected from './components/Admin/Protected'
import CompanySetup from './components/Admin/CompanySetup'

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:"/jobs",
    element:<Jobs/>
  },
  {
    path:"/browse",
    element:<Browse />
  },
  {
    path:"/description/:id",
    element:<JobDescription/>
  },
  {
    path:"/profile",
    element:<Profile />
  },
  //admin
  {
    path:"/admin/companies",
    element:<Protected><Companies /></Protected>
  },
  {
    path:"/admin/companies/create",
    element:<CreateCompany />
  },
  {
    path:"/admin/companies/:id",
    element:<CompanySetup />
  },
  {
    path:"/admin/jobs",
    element: <Protected><AdminJobs /></Protected>
  },
  {
    path:"/admin/jobs/create",
    element:<PostJob />
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<Applicants />
  }
])
function App() {

  return (
    <>
      <RouterProvider router ={appRouter} />
    </>
  )
}

export default App
