import React ,{useState} from 'react';
import {MdLineStyle,MdTimeline,MdTrendingUp,MdOutlinePermIdentity,MdOutlineTextsms,MdOutlineMail,MdOutlineBarChart
,MdOutlineBusinessCenter,MdOutlineDynamicFeed,MdStorefront,MdReport
} from "react-icons/md";
import {Link} from "react-router-dom";
import {BsCurrencyDollar} from 'react-icons/bs'

function SideBar() {

    const [items, setItems] = useState("home");

 /*   const sellectItem=(e,itemname)=>{
      setTitle(e.target.title);
       setItems(itemname);
    }
    console.log(title,items);*/
    return (
        <div className='fixed top-3 left-5 pt-10 pl-6'>
            <div className='text-gray-500 text-sm mb-1 mt-2'>Dashboard</div>
            <div className='pr-12'>
               <Link to="/" onClick={()=>setItems("home")}  className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="home")?"bg-blue-100":"bg-white"}`}>
                   <MdLineStyle className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Home</div>
               </Link>
               <div onClick={()=>setItems("analytcis")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="analytcis")?"bg-blue-100":"bg-white"}`}>
                   <MdTimeline className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Analytics</div>
               </div>
               <div onClick={()=>setItems("Sales")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Sales")?"bg-blue-100":"bg-white"}`}>
                   <MdTrendingUp className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Sales</div>
               </div>
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>Qeick Menu</div>
            <div className='pr-12'>
               <Link to="/users" onClick={()=>setItems("Users")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Users")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlinePermIdentity className='mr-0.5 text-lg'/>
                  <div className='text-sm font-medium'>Users</div>
               </Link>
               <Link to="/products" onClick={()=>setItems("Products")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Products")?"bg-blue-100":"bg-white"}`}>
                   <MdStorefront className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Products</div>
               </Link>
               <div onClick={()=>setItems("Transaction")}  className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Transaction")?"bg-blue-100":"bg-white"}`}>
                   <BsCurrencyDollar className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Transaction</div>
               </div>
               <div onClick={()=>setItems("reports")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="reports")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlineBarChart className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Reports</div>
               </div>
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>Notification</div>
            <div className='pr-12'>
               <div onClick={()=>setItems("Mail")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Mail")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlineMail className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Mail</div>
               </div>
               <div onClick={()=>setItems("Feedback")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Feedback")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlineDynamicFeed className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Feedback</div>
               </div>
               <div onClick={()=>setItems("Messages")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Messages")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlineTextsms className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Messages</div>
               </div>
            </div>
            <div className='text-gray-500 text-sm mb-1 mt-2.5'>Staff</div>
            <div className='pr-12'>
               <div onClick={()=>setItems("Manage")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Manage")?"bg-blue-100":"bg-white"}`}>
                   <MdOutlineBusinessCenter className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Manage</div>
               </div>
               <div onClick={()=>setItems("Analytics")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Analytics")?"bg-blue-100":"bg-white"}`}>
                   <MdTimeline className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Analytics</div>
               </div>
               <div onClick={()=>setItems("Reports")} className={`flex items-center w-full cursor-pointer  mt-2 hover:bg-blue-100 rounded-xl py-0.5 px-2.5 ${(items==="Reports")?"bg-blue-100":"bg-white"}`}>
                   <MdReport className='mr-0.5 text-lg'/>
                  <div  className='text-sm font-medium'>Reports</div>
               </div>
            </div>
        </div>
    )
}

export default SideBar;
