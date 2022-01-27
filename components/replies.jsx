import React, { useContext } from "react";
import CommentCard from "./commentCard";
import AppContext from "../context/AppContext";
import Loader from "./loader";

const Replies = ({ replies }) => {
  const { loading } = useContext(AppContext);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="border-l border-purple-light_tr pl-6">
          {replies.map((reply, index) => (
            <CommentCard
              key={`reply${index}`}
              image={reply.user.image}
              comment={reply}
              commentType="reply"
              pt=""
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Replies;
