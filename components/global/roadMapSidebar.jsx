import React, {useContext} from 'react';
import Link from "next/link";
import AppContext from "../../context/AppContext";




function RoadMapSidebar() {
    const { items, setItems } = useContext(AppContext);
  

  return (
    <div className='w-[16rem] h-[10.375rem] bg-white-normal mr-[1.875rem] p-[1.5rem] rounded-[0.625rem] mt-[1.5rem]'>
        <div className='flex justify-between'>
            <p className='text-b-18'>Roadmap</p>
            <Link href={"/roadmap"} >
                <a className="text-sb-13 hover:underline my-auto">View</a> 
            </Link>
        </div>
        <div>
            <div className='flex mt-4 justify-between'>
                <div className='flex'>
                    <div className='my-auto mr-4 rounded-full bg-salmon-normal w-[0.5rem] h-[0.5rem]'></div>
                    <p className='text-n-16'>Planned</p>
                </div>
                <div className='text-b-16'>
                    {items.filter(function(item) { return item.status === "planned" }).length}
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex'>
                    <div className= " my-auto mr-4 rounded-full bg-purple-normal w-[0.5rem] h-[0.5rem]"></div>
                    <p className='text-n-16'>In-Progress</p>
                </div>
                <div className='text-b-16'>
                    {items.filter(function(item) { return item.status === "in-progress" }).length}
                </div>
            </div>

            <div className='flex justify-between'>
                <div className='flex'>
                    <div className= "my-auto mr-4 rounded-full bg-blue-light w-[0.5rem] h-[0.5rem]"></div>
                    <p className='text-n-16'>Live</p>
                </div>
                <div className='text-b-16'>
                    {items.filter(function(item) { return item.status === "live" }).length}
                </div>
            </div>
        
        </div>
    </div>
  );
}

export default RoadMapSidebar;
