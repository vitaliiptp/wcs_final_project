import React, { useState, useContext } from "react";
import RoadMapCard from "../components/global/roadMapCard";
import AppContext from "../context/AppContext";
import Button from "../components/button";
import Link from "next/link";


const RoadMap = () => {
    const { items, setItems } = useContext(AppContext);
  
    const planned = items.filter((item)=>item.status === "planned");
    const progress = items.filter((item)=>item.status === "in-progress");
    const live = items.filter((item)=>item.status === "live");


return (
      
    <div className="py-[6rem]">
        <div className="mx-auto px-4 flex flex-row items-center justify-between w-[69.375rem] h-[7.063rem] mb-[1.5rem] rounded-[0.625rem] bg-blue-dark">
            <div className="pl-4">
                <Link href={"/"} >
                   <a className=" text-[14px]  hover:underline text-white-normal"><b>&lt;</b> Go Back</a> 
                </Link>
                <p className="text-b-18_w">Roadmap</p>
            </div>
      
            <div className="mr-[1rem] ml-[14.5rem]">
                <Button type="button" buttonStyle="btn--purple" buttonSize="btn--large">
                + Add Feedback
                </Button>
            </div>
        </div>

        <div className=" flex -row w-[69.375rem] mx-auto my-4">
            <div className="flex-col w-4/12">
                <div className="mb-[1.25rem]">
                    <p className="text-b-18">Planned ({items.filter(function(item) { return item.status === "planned" }).length})</p>
                    <p className="text-n-16">Ideas prioritized for research </p>
                </div>
            
                {planned.map((item, index) => {
                    return (
                        <RoadMapCard
                            key={`feedback${index}`}
                            status={item.status}
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
                <div className="mb-[1.25rem]">
                    <p className="text-b-18">In-Progess ({items.filter(function(item) { return item.status === "in-progress" }).length})</p>
                    <p className="text-n-16">Currently being developed </p>
                </div>
                
                {progress.map((item, index) => {
                    return (
                        <RoadMapCard
                            key={`feedback${index}`}
                            status={item.status}
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
                <div className="mb-[1.25rem]">
                    <p className="text-b-18">Live ({items.filter(function(item) { return item.status === "live" }).length})</p>
                    <p className="text-n-16">Released features </p>
                </div>

                {live.map((item, index) => {
                    return (
                        <RoadMapCard
                            key={`feedback${index}`}
                            status={item.status}
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
