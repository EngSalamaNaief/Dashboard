export default function WidgetLg() {
  return (
  <div className="p-4">
     <div className="p-4 box">
     <div className="capitalize pb-2 text-lg font-semibold "> Latest Transaction</div>
         <table className="w-full " style={{borderSpacing:"20px"}}>
             <tr className="text-left ">
                    <th className="py-2 ">Customers</th>
                    <th className=" ">Date</th>
                    <th className=" ">Amount</th>
                    <th className=" ">Status</th>
             </tr>
             <tr className="text-left text-base font-normal">
               <th className="font-normal py-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src="./img/nature.jpg" alt="na" />
                    </div>
                    <div className="">
                        <div className="capitalize text-normal">User Name</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>2 jun 2021</div>
               </th>
               <th  className="font-normal   text-gray-400">
                 <div>$122.0</div>
               </th>
               <th  className="font-normal">
                 <div className="bg-green-100 cursor-pointer w-fit px-2 rounded-lg text-green-400">Approved</div>
               </th>
             </tr>

             <tr className="text-left text-base font-normal">
               <th className="font-normal py-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src="./img/nature.jpg" alt="na" />
                    </div>
                    <div className="">
                        <div className="capitalize text-normal">User Name</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>2 jun 2021</div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>$122.0</div>
               </th>
               <th  className="font-normal">
                 <div className="bg-red-100 cursor-pointer w-fit px-2 rounded-lg text-red-400">Declined</div>
               </th>
             </tr>

             <tr className="text-left text-base font-normal">
               <th className="font-normal py-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src="./img/nature.jpg" alt="na" />
                    </div>
                    <div className="">
                        <div className="capitalize text-normal">User Name</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>2 jun 2021</div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>$122.0</div>
               </th>
               <th  className="font-normal">
                 <div className="bg-gray-100 cursor-pointer w-fit px-2 rounded-lg text-gray-400">Pending</div>
               </th>
             </tr>

             <tr className="text-left text-base font-normal py-4">
               <th className="font-normal py-2">
                  <div className="flex items-center">
                    <div className="h-10 w-10 overflow-hidden rounded-full mr-2">
                    <img className="w-full h-full object-cover" src="./img/nature.jpg" alt="na" />
                    </div>
                    <div className="">
                        <div className="capitalize text-normal">User Name</div> 
                    </div>
                </div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>2 jun 2021</div>
               </th>
               <th  className="font-normal text-gray-400">
                 <div>$122.0</div>
               </th>
               <th  className="font-normal">
                 <div className="bg-green-100 cursor-pointer w-fit px-2 rounded-lg text-green-400">Approved</div>
               </th>
             </tr>
         </table>
     </div>
  </div>
  );
}
