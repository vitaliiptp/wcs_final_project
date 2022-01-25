import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import CommentCard from "./global/commentCard";

const Comments = ({ feedbackId }) => {
    const { items } = useContext(AppContext);

    const commentsArray = items.filter((item) => item.id === parseInt(feedbackId)).map((item) => item.comments);

    return (
        <div className="rounded-[0.625rem] bg-white-normal">
            {commentsArray.map((comment, index) =>
                console.log(comment)
                // <CommentCard key={`comment${index}`} image="" name={comment[index].user.name} username={comment[index].user.username} content={comment[index].content}/>
            )}
        </div>
    );
};

export default Comments;