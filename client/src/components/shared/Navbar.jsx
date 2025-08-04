import React from 'react';
import './Navbar.css'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Avatar, AvatarImage } from '../ui/avatar';
import { LogOut, User2 } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const user = false;
  return (
    <div className='bg-white'>
      <div className='Navbar'>
        <div>
          <h1 className='text-2xl font-bold'>
            Job<span className='text-[#F83002]'>Protal</span>
          </h1>
        </div>
        <div className='nav'>
            <ul className='nav-manu'>
                <li>Home</li>
                <li>Jobs</li>
                <li>Browse</li>
            </ul>
            {
              !user ? (
                <div className='flex items-center'>
                  <Link to="/login"><Button variant="outline" className="button login">Login</Button></Link>
                  <Link to="/signup"><Button className="bg-[#6A38C2] hover:bg-[#5b30a6] button">Singnup</Button></Link>
                </div>
              ):(
                <Popover>
                <PopoverTrigger asChild>
                    <Avatar className="cursor-pointer">
                        <AvatarImage className={'avatar'} src="https://github.com/shadcn.png" />
                    </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80 popover-content">
                    <div className='avaterclick'>
                        <Avatar className="cursor-pointer">
                            <AvatarImage className='avater' src="https://github.com/shadcn.png" />
                        </Avatar>
                        <div className='icon'>
                            <h3 className='font-medium'>NUB MernStack</h3>
                            <p className='iconpera'>Lorem ipsum dolor sit</p>
                        </div>
                    </div>

                    <div className='flex flex-col text-gray-600 button'>
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <User2/>
                          <Button variant="link">View Profile</Button>
                        </div>
                        <div className="flex w-fit items-center gap-2 cursor-pointer">
                          <LogOut/>
                          <Button variant="link">view profile</Button>
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