import React, { useContext } from 'react';
import AppContext from "../context/AppContext";
import CommentCard from "./global/commentCard";

const Comments = ({ feedbackId }) => {
    const { items } = useContext(AppContext);

    return (
        <div className="rounded-[0.625rem] bg-white-normal">
            {items.filter((item) => item.id === parseInt(feedbackId)).map((item) => item.comments).map((comment, index) =>
                <CommentCard key={`comment${index}`} image="" name={comment[index].user.name} username={comment[index].user.username} content={comment[index].content}/>
            )}
        </div>
    );
};

export default Comments;