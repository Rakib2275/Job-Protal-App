import React, { useState } from 'react'
import './UpdateProfile.css';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogDescription } from './ui/dialog'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Loader2 } from 'lucide-react';
import { Button } from './ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from '@/utils/constant';
import { setUser } from '@/redux/authSlice';
import { toast } from 'sonner';
import axios from 'axios';

const UpdateProfile = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    phonenumber: user?.phonenumber || "",
    bio: user?.profile?.bio || "",
    skills: user?.profile?.skills?.join(", ") || "", 
  });

  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const fileChangeHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phonenumber", input.phonenumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills); // comma-separated string
    if (input.file) {
      formData.append("file", input.file);
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${USER_API_END_POINT}/profile-update`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
          withCredentials: true
        }
      );

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Something went wrong");
    }finally{
      setLoading(false)
    }
    setOpen(false);
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className={'updates'} onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>Update Profile</DialogTitle>
            <DialogDescription>Fill the form to update your profile information</DialogDescription>
          </DialogHeader>
          <form className="form1s" onSubmit={submitHandler}>
            <div className='forms'>
              <div className='fromDatas'>
                <Label htmlFor="fullname" className={"label"}>Name</Label>
                <Input id="fullname" name="fullname" type='text' value={input.fullname} onChange={changeEventHandler} className={'name'} />
              </div>
              <div className='fromData'>
                <Label htmlFor="email" className={"label"}>Email</Label>
                <Input id="email" name="email" type="email" value={input.email} onChange={changeEventHandler} className={'name'} />
              </div>
              <div className='fromData'>
                <Label htmlFor="phonenumber" className={"label"}>Number</Label>
                <Input id="phonenumber" name="phonenumber" value={input.phonenumber} onChange={changeEventHandler} className={'name'} />
              </div>
              <div className='fromData'>
                <Label htmlFor="bio" className={"label"}>Bio</Label>
                <Input id="bio" name="bio" value={input.description} onChange={changeEventHandler} className={'name'} />
              </div>
              <div className='fromData'>
                <Label htmlFor="skills" className={"label"}>Skills (comma separated)</Label>
                <Input id="skills" name="skills" value={input.skills} onChange={changeEventHandler} className={'name'} />
              </div>
              <div className='fromData'>
                <Label htmlFor="file" className={"label"}>Resume</Label>
                <Input id="file" name="file" type="file" accept="application/pdf" onChange={fileChangeHandler} className={'name'} />
              </div>
            </div>
            <DialogFooter>
              {
                loading ? (
                  <Button disabled><Loader2 className='loading' /> Please wait</Button>
                ) : (
                  <Button type="submit" className="submit">Update</Button>
                )
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfile
