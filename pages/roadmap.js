import React, { useContext } from "react";
import RoadMapCard from "../components/roadMapCard";
import AppContext from "../context/AppContext";
import Button from "../components/button";
import Link from "next/link";
import ArrowLeft from "../components/global/svg/arrowLeft"


const RoadMap = () => {
    const { filteredItems } = useContext(AppContext);
  
    const planned = filteredItems.filter((item)=>item.status === "planned");
    const progress = filteredItems.filter((item)=>item.status === "in-progress");
    const live = filteredItems.filter((item)=>item.status === "live");


return (
      
    <div className="py-[6rem]">
        <div className="mx-auto px-4 flex flex-row items-center justify-between w-[69.375rem] h-[7.063rem] mb-[1.5rem] rounded-[0.625rem] bg-blue-dark">
            <div className="pl-4">
                <Link href={"/"} >
                   <a className=" text-[14px]  hover:underline text-white-normal flex items-center mr-[0.979rem]"><ArrowLeft className="mr-[0.979rem]" stroke='#fff'/> Go Back</a> 
                </Link>
                <p className="text-b-24_w">Roadmap</p>
            </div>
      
            <div className="mr-[1rem] ml-[14.5rem]">
                <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
                    <Link href="/add-feedback">
                        <a className="text-b-14_w">+ Add Feedback</a>
                    </Link>
                </Button>
            </div>
        </div>

        <div className=" flex -row w-[69.375rem] mx-auto my-4">
            <div className="flex-col w-4/12">
                <div className="mb-[1.5rem]">
                    <p className="text-b-18">Planned ({filteredItems.filter(function(item) { return item.status === "planned" }).length})</p>
                    <p className="text-n-16">Ideas prioritized for research </p>
                </div>
            
                {planned.map((item, index) => {
                    return (
                        <RoadMapCard
                            key={`feedback${index}`}
                            id={item.id}
                            statusColor={"d--planned"}
                            status={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                            stylePoint={"p--planned"}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            upvotes={item.upvotes}
                            comments={item.comments?.length}
                        />
                    );
                })}
            </div>
            
            <div className="flex-col w-4/12 mx-[1.5rem]">
                <div className="mb-[1.5rem]">
                    <p className="text-b-18">In-Progess ({filteredItems.filter(function(item) { return item.status === "in-progress" }).length})</p>
                    <p className="text-n-16">Currently being developed </p>
                </div>
                
                {progress.map((item, index) => {
                    return (
                        <RoadMapCard

                            key={`feedback${index}`}
                            id={item.id}
                            statusColor={"d--progress"}
                            status={item.status.charAt(0,3).toUpperCase() + item.status.slice(1,3)+ item.status.charAt(3).toUpperCase()+ item.status.slice(4,11)}
                            stylePoint={"p--progress"}
                            title={item.title}
                            description={item.description}
                            category={item.category}
                            upvotes={item.upvotes}
                            comments={item.comments?.length}
                        
                        />
                    );
                    
                })}
            </div>
            
            <div className="flex-row w-4/12">
                <div className="mb-[1.5rem]">
                    <p className="text-b-18">Live ({filteredItems.filter(function(item) { return item.status === "live" }).length})</p>
                    <p className="text-n-16">Released features </p>
                </div>

                {live.map((item, index) => {
                    return (
                        <RoadMapCard
                        key={`feedback${index}`}
                        id={item.id}
                        statusColor={"d--live"}
                        status={item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                        stylePoint={"p--live"}
                        title={item.title}
                        description={item.description}
                        category={item.category}
                        upvotes={item.upvotes}
                        comments={item.comments?.length}
                        />
                        
                    );
                 })}
            </div>

        </div>
       
    
    </div>
  );
};

export default RoadMap;
