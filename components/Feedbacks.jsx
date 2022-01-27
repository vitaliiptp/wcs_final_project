import React, {useContext, useEffect, useState} from "react";
import FeedbackCard from "./feedbackCard";
import AppContext from "../context/AppContext";
import EmptyFeedback from "./emptyFeedback";


const Feedbacks = (props) => {
  const { filteredItems } = useContext(AppContext);

  // const[reactData, setReactData] = useState({});
  // useEffect(() => {
  //   fetch('http://localhost:3000/api')
  //       .then(res => res.json())
  //       .then(data => {
  //         setReactData(data);
  //       }).catch((err) => {console.log(err)});
  // }, []);
  //
  //
  // console.log(props);
  // console.log(reactData);


  return (
    <div>
      {filteredItems.length > 0 ? (
        filteredItems.map((item, index) => {
          return (
            <FeedbackCard
              key={`feedback${index}`}
              id={item.id}
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
//   const res = await fetch("http://localhost:3000/api");
//   const data = await res.json();
//   console.log(data)
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
