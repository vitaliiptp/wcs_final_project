import React from "react";

const Replies = ({ replies }) => {
  return (
    <div>
      {replies.map((reply, index) => (
        <div key={`comment${index}`}>
          <div className="flex flex-row justify-between items-center w-full pb-[1rem]">
            <div className="flex flex-col">
              <p className="text-b-14">{reply.user.name}</p>
              <p className="leading-none text-n-14">{reply.user.username}</p>
            </div>
            <p className="text-sb-13">Reply</p>
          </div>
          <div>
            <p className="text-b-15">{reply.replyingTo}<span className="text-n-15 pl-[0.625rem]">{reply.content}</span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Replies;
