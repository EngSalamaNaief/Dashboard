import {MdRemoveRedEye} from "react-icons/md"

function UserWegetSm() {
  return (
  <div className="py-2 flex items-center justify-between">
    <div className="flex items-center">
        <div className="h-10 w-10 overflow-hidden rounded-full mr-4">
        <img className="w-full h-full object-cover" src="./img/nature.jpg" alt="" />
        </div>
        <div className="">
            <div className="capitalize text-black">User Name</div>
            <div className="text-gray-400 text-sm capitalize"> software engineer</div>  
        </div>
    </div> 
       <div className="flex items-center cursor-pointer bg-gray-200 py-1 px-2 rounded-lg">
          <MdRemoveRedEye/>
          <div className="text-gray-500 text-sm ml-1.5">Display</div>
       </div>  
  </div>
  );
}

export default UserWegetSm;
