import React from 'react';
import './Navbar.css'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';

function Navbar() {
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler =async () =>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true});
      if(res.data.success){
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
  }
  return (
    <div className='AllNavbar'>
      <div className='Navbar'>
        <div>
          <h1 className='text-2xl font-bold'>
            Job<span className='text-[#F83002]'>Protal</span>
          </h1>
        </div>
        <div className='nav'>
            <ul className='nav-manu'>
              {
                user && user.role == 'recruiter' ? (
                  <>
                    <li><Link to="/admin/companies">Companies</Link></li>
                    <li><Link to="/admin/jobs">Jobs</Link></li>
                  </>
                ):(
                  <>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/jobs">Jobs</Link></li>
                    <li><Link to="/browse">Browser</Link></li>
                  </>
                )
              }
            </ul>
            {
              !user ? (
                <div className='flex items-center'>
                  <Link to="/login"><Button variant="outline" className="loginBotton">Login</Button></Link>
                  <Link to="/signup"><Button className="signupBotton">Singnup</Button></Link>
                </div>
              ):(
                <Popover>
                <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage className={'avatar'} src={user?.profile?.profilePhoto} />
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 popover-content">
                    <div className='avaterclick'>
                        <Avatar className="cursor-pointer">
                            <AvatarImage className='avater' src={user.profile.profilePhoto} />
                        </Avatar>
                        <div className='icon'>
                            <h3 className='font-medium'>{user?.fullname}</h3>
                            <p className='iconpera'>{user?.profile?.bio}</p>
                        </div>
                    </div>

                    <div className='flex flex-col buttonss'>
                      {
                        user && user.role == 'student' && (
                          <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <User2 className='user' />
                          <Button variant="link"><Link to="/profile">View Profile</Link></Button>
                          </div>
                        )
                      }
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <LogOut className='user' />
                          <Button onClick={logoutHandler} variant="link" className={'logout'}>Log Out</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
              )
            }
        </div>
      </div>
    </div>
  );
}

export default Navbar;