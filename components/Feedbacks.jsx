import React, { useContext, useEffect, useState } from "react";
import FeedbackCard from "./feedbackCard";
import AppContext from "../context/AppContext";
import EmptyFeedback from "./emptyFeedback";
import Loader from "./loader";

const Feedbacks = (props) => {
  const { filteredItems, loading } = useContext(AppContext);

  // const[reactData, setReactData] = useState({});

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/reviews')
  //       .then(res => res.json())
  //       .then(data => {
  //         setReactData(data);
  //         console.log(reactData);
  //       }).catch((err) => {console.log(err)});
  // }, []);


  // console.log(props)


  return (
    <div>
      {loading ? (
        <Loader />
      ) : filteredItems.length > 0 ? (
        filteredItems.map((item) => {
          return (
            <FeedbackCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              category={item.category}
              upvotes={item.upvotes}
              comments={item.comments?.length}
              width="w-[51.563rem]"
              mb="mb-[1.25rem]"
              textStyle="hover:cursor-pointer hover:underline"
            />
          );
        })
      ) : (
        <EmptyFeedback />
      )}
    </div>
  );
};

export default Feedbacks;

// export async function getServerSideProps() {
//   const res = await fetch("http://localhost:3000/api/reviews");
//   const data = await res.json();
//   if (!data) {
//     return {
//       notFound: true,
//     }
//   }
//   return {
//     props: {
//       reviews: data
//     },
//   };
// }
