import React from 'react';
const stylePoint = [
    "p--planned",
    "p--live",
    "p--progress",
]
const StatusTag= ({status,stylePoint}) =>{
  return <div className='flex'>
      <div className={stylePoint}></div>
      <div className='text-n-16'>{status}</div>
      </div>;
}

export default StatusTag;
