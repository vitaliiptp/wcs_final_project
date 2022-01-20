import React from 'react';
import Comments from "./svg/comments";

const CommentBtn = ({comments}) => {
    return (
        <div className="flex flex-row items-center font-bold text-[1rem] text-blue-deep">
            <Comments />
            <div className="pl-[0.5rem]">{comments || "2"}</div>
        </div>
    );
};

export default CommentBtn;