import React, { useEffect, useState } from 'react';
import {productData} from '../domyData';
import {MdDeleteOutline} from "react-icons/md"
import { Link } from 'react-router-dom';

export default function UsersList() {
  const [sellected,setSellected] = useState([]);
  const [reload,setReload] = useState(false);
  const [products,setProducts] =useState(productData);
  const [sortedProducts,setSortedProducts] =useState(products);

  useEffect(()=>{
    setSortedProducts(products);
      console.log("d")
  },[reload])

  const sortByName=()=>{
  
    const product= productData.sort(function(a, b){
      const x =a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setProducts(product);
    setReload(!reload)
  }
  const sortByEmail=()=>{
    const user= productData.sort(function(a, b){
      const x = a.email.toLowerCase();
      const y = b.email.toLowerCase();
      if (x < y) {return -1;}
      if (x > y) {return 1;}
      return 0;
    });
    setProducts(user);
    setReload(!reload)
    console.log(products)
  }
  const sortByTransaction=()=>{
    setProducts(productData.sort(function(a,b){
      return a.transaction-b.transaction;
    }))
    setReload(!reload)
    //console.log(user)
  }

  const deleteUser=(id)=>{
    setProducts(products.filter(user=>user.id !== id));
    setReload(!reload)
  }
  
  const handleSellect=(id,value)=>{
     let checkedItems=[];
     if(value===true){
    if(sellected.filter(items=>items.id ===id).length){
        checkedItems =sellected.filter(items=>items.id !==id);
        setSellected([...checkedItems,{id,value}])
      }else{
      setSellected([...sellected,{id,value}])

    }
  }else{
    checkedItems =sellected.filter(items=>items.id !==id);
    setSellected([...checkedItems])
  }
  }
 
  const handleChecked=(id)=>{
    const ch=sellected.find(items=>items.id ===id);
    if(ch){
         return ch.value     
    }else{
      return false
    }
  }
  const sellectAll=()=>{
    if(!sellected.length){
        
      productData.forEach(user=>{
       
        setSellected(pre=>[...pre,{id:user.id,value:true}])
      })
    }else{
      setSellected([])
    }
  }

  const deleteAll=()=>{
    let dUser=[...products]  
    if(sellected.length){
      sellected.forEach(user=>{
        dUser=dUser.filter(item=>item.id !==user.id);
      })
      setProducts(dUser);
      setReload(!reload);
    }
    setSellected([]);
  }
  console.log(sellected);
  return (
  <div className='pt-10'>
      <div className="p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Users List</div>
         <table className="w-full " style={{borderSpacing:"20px"}}>
           <thead>
             <tr className="text-left ">
                    <th className="py-2 "> 
                     <div className="flex items-center">
                       <input type="checkbox" className='cursor-pointer'  onChange={()=>sellectAll()} checked={sellected.length?true:false} />
                       <div className='ml-6'>ID</div>
                     </div>
                     </th>
                    <th ><div onClick={()=>sortByName()} className='cursor-pointer'>Products</div></th>
                    <th ><div onClick={()=>sortByEmail()} className='cursor-pointer'>Tage</div></th>
                    <th className=" ">Status</th>
                    <th ><div onClick={()=>sortByTransaction()} className='cursor-pointer'>Price</div> </th>
                    <th ><div onClick={()=>sortByTransaction()} className='cursor-pointer'>Offers</div> </th>
                    <th className="cursor-pointer ">
                      <div onClick={()=>deleteAll()}>{sellected.length? "Delete":"Action"}</div>
                    </th>
             </tr>
           </thead>
           <tbody>
            {sortedProducts?sortedProducts.map(product=>(
              <tr key={product.id} className="text-left text-base font-normal">
               <th className='font-normal'> 
                <div className='flex items-center'>
                    <input type="checkbox" className='cursor-pointer' checked={handleChecked(product.id)} onChange={((e)=>handleSellect(product.id,e.target.checked))} />
                    <div className='ml-6'>{product.id}</div>
                  </div>
               </th>
               <th className="font-normal py-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src={product.img} alt="na" />
                  </div>
                    <div className="">
                        <div className="capitalize text-normal">{product.name}</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal text-gray-700">
                 <div>{product.tag}</div>
               </th>
               <th  className="font-normal text-gray-700">
                 <div>{product.status}</div>
               </th>
               <th  className="font-normal text-gray-700">
                 <div>${ product.price}</div>
               </th>
               <th  className="font-normal text-gray-700">
                 <div>${ product.offers}</div>
               </th>
               <th  className="font-normal flex items-center py-4">
                 <Link to={`/user/${product.id}`} className="bg-green-500 cursor-pointer w-fit px-2 rounded-lg text-white">
                   Edit
                   </Link>
                   <div onClick={()=>deleteUser(product.id)} className="text-2xl cursor-pointer w-fit px-2 rounded-lg text-red-500">
                     <MdDeleteOutline/>
                   </div>
               </th>
             </tr>
            )):"" 
            }
            </tbody>
         </table>
     </div>
  </div>
  </div>
  );
}
