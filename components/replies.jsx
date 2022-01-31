import React from "react";
import CommentCard from "./commentCard";

const Replies = ({ replies }) => {
  return (

          <div className='border-l border-purple-light_tr pl-6'>
              {replies.map((reply, index) => (
                  <CommentCard key={`reply${index}`} image={reply.user.image} comment={reply} commentType='reply' pt="" />
              ))}
          </div>


      )
};

export default Replies;
