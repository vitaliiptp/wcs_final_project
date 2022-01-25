import React from 'react';
import Replies from "./replies";

const CommentCard = ({ image, name, username, content, replies }) => {


    return (
      <div className="flex flex-row py-[2rem]">
        <div className="flex items-start justify-start pr-[2rem]">
          <img
            src="https://dummyimage.com/40x40/000/fff"
            alt="user photo"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-row justify-between items-center w-full pb-[1rem]">
            <div className="flex flex-col">
              <p className="text-b-14">{name}</p>
              <p className="leading-none text-n-14">{username}</p>
            </div>
            <p className="text-sb-13">Reply</p>
          </div>
          <div>
            <p className="text-n-15">{content}</p>
          </div>
            {replies && <Replies replies={replies}/>}
        </div>
      </div>
    );
};

export default CommentCard;