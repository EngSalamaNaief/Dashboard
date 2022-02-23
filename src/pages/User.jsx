import React,{useEffect, useRef, useState} from 'react';
import {users} from "../domyData";
import {useParams} from "react-router-dom";
import { MdOutlinePermIdentity,MdDateRange,MdPhoneIphone,MdMailOutline,MdLocationSearching,MdUpload } from 'react-icons/md';
export default function User() {
    const [user,setUser] =useState({});
    const usersData =useRef(users);
    const [username,setUsername] =useState("");
    const [fullname,setFullname] =useState("");
    const [email,setEmail] =useState("");
    const [phone,setPhone] =useState("");
    const [city,setCity] =useState("");
    const [country,setCountry] =useState("");
    const [brithday,setBrithday] =useState("");
    const [image,setImage] =useState(null);
    const params=useParams();

    useEffect(()=>{
      setUser(usersData.current.find(user=>user.id===params.id));
    },[params.id]);

    const handleUpdate=()=>{
      console.log(username,fullname,email,phone,city,country,brithday,image)
    }
    console.log(username);
  return (
    <div className='pt-10 text-gray-900'>
      <div className='p-4'>
         <div className="flex items-center justify-between mb-6">
              <div className='text-2xl font-bold text-black'> Edit User</div>
              <button className='bg-green-600 px-5 py-1 text-white rounded-lg'>Create</button>
          </div>

          <div className='grid md:grid-cols-3'>
              <div className='pr-4'>
                <div className='box p-4'>
                    <div className="flex items-center">
                        <div className="h-10 w-10 overflow-hidden rounded-full mr-6">
                            <img className="w-full h-full object-cover" src={user.img} alt="" />
                        </div>
                        <div className="">
                            <div className="capitalize font-semibold "> {user.fullname} </div>
                            <div className="text-gray-500 capitalize"> {user.job}</div>  
                        </div>
                    </div> 
                    
                    <div className=''>
                        <div className="text-gray-500 capitalize my-6"> account details</div>
                        <div className='flex items-center mb-3'>
                           <MdOutlinePermIdentity className='text-lg mr-2'/>
                           <div>{user.username}</div>
                        </div>
                        <div className='flex items-center'>
                           <MdDateRange className='text-lg mr-2'/>
                           <div>{user.brithday}</div>
                        </div>

                        <div className="text-gray-500 capitalize my-6"> contact details</div>
                        <div className='flex items-center mb-3'>
                           <MdPhoneIphone className='text-lg mr-2'/>
                           <div> +{user.phone}</div>
                        </div>
                        <div className='flex items-center mb-3'>
                           <MdMailOutline className='text-lg mr-2'/>
                           <div>{user.email}</div>
                        </div>
                        <div className='flex items-center mb-3'>
                           <MdLocationSearching className='text-lg mr-2'/>
                           <div>{user.city} | <span className="uppercase">{user.country}</span></div>
                        </div>
                        
                    </div>
                    
                </div>
              </div>
              <div className='col-span-2 pl-4'>
                  <div className='box grid grid-cols-2 p-4'>
                      <div className='pr-4 pb-4'>
                          <div className='mb-8 mt-1 text-xl font-bold '>Edit</div>
                          <form action="post">
                              <div className='text-gray-900'>
                                  <div className='capitalize '>username</div>
                                  <input value={username} onChange={(e)=>setUsername(e.target.value)}  type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.username}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>fullname</div>
                                  <input value={fullname} onChange={(e)=>setFullname(e.target.value)} type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.fullname}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>email</div>
                                  <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.email}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>phone</div>
                                  <input value={phone}  onChange={(e)=>setPhone(e.target.value)} type="number" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.phone}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>city</div>
                                  <input value={city} onChange={(e)=>setCity(e.target.value)} type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.city}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>country</div>
                                  <input value={country} onChange={(e)=>setCountry(e.target.value)} type="text" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.country}/>
                              </div>
                              <div className='text-gray-900 mt-3'>
                                  <div className='capitalize '>brithday</div>
                                  
                                  <input value={brithday} onChange={(e)=>setBrithday(e.target.value)} type="date" className='focus:outline-none border-b px-2 py-1 border-slate-400 w-full ' placeholder={user.brithday}/>
                              </div>
                          </form>
                      </div>
                      <div className="py-6 flex justify-end">
                         <div className='flex flex-col '>
                            <div className='flex items-center h-fit pt-14'>
                            <div className="w-24 h-24 rounded-lg overflow-hidden">
                                <img className="w-full h-full object-cover" src={user.img} alt="" />
                            </div>
                             <label htmlFor="file">
                                <MdUpload className='text-2xl ml-4 cursor-pointer'/>
                             </label>
                             <input onChange={e=>setImage(e.target.files[0])} type="file" id='file' className='hidden'/>
                            </div>
                            <div className='h-full relative'>
                                <button onClick={()=>handleUpdate()} className='bg-blue-600 absolute bottom-0 w-full px-5 py-1 text-white rounded-lg'>Update</button>
                            </div>
                         </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
 );
}
