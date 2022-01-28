import React from 'react';
import Comments from "./global/svg/comments";

const CommentBtn = ({comments}) => {
    return (
        <div className="flex flex-row items-center text-b-16">
            <Comments />
            <div className="pl-[0.5rem]">{comments || "0"}</div>
        </div>
    );
};

export default CommentBtn;