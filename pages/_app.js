// TODO: can I improve sortItems func inside useEffect? I don't like setFilteredItems in every switch case.
// TODO: if I pass props down through the map func, can I do it somehow with useContext directly to child component? Feedbacks --> feedbackCard --> upvoteBtn --> voteCounter

import "../styles/globals.css";
import AppContext from "../context/AppContext";
import { useEffect, useState } from "react";
import data from "../data.json";

function MyApp({ Component, pageProps }) {
  const [newCommentText, setNewCommentText] = useState({
    id: 1,
    content: "",
    user: {
      image: "/user-images/image-suzanne.jpg",
      name: "Suzanne Chang",
      username: "upbeat1811",
    },
  });
  const [comments, setComments] = useState([]);
  const [items, setItems] = useState(data.productRequests);
  const [filteredItems, setFilteredItems] = useState(data.productRequests);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("");
  const categories = [
    "All",
    "UX",
    "UI",
    ...new Set(data.productRequests.map((item) => item.category)),
  ];

  const filterItems = (category) => {
    if (category === "All") {
      setFilteredItems(items);
      setFilteredCategory(category);
      return;
    }
    setFilteredCategory(category);
    setFilteredItems(items.filter((item) => item.category === category));
  };

  useEffect(() => {
    const sortItems = (sortCriteria) => {
      let sortedItems = [...filteredItems];
      switch (sortCriteria) {
        case "Most Upvotes":
          sortedItems = sortedItems.sort((a, b) => b.upvotes - a.upvotes);
          break;
        case "Least Upvotes":
          sortedItems = sortedItems.sort((a, b) => a.upvotes - b.upvotes);
          break;
        case "Most Comments":
          sortedItems = sortedItems.sort(
            (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0)
          );
          break;
        case "Least Comments":
          sortedItems = sortedItems.sort(
            (a, b) => (a.comments?.length || 0) - (b.comments?.length || 0)
          );
          break;
        default:
          sortedItems = [...filteredItems];
      }
      setFilteredItems(sortedItems);
    };
    sortItems(sortCriteria);
  }, [sortCriteria]);

  return (
    <div className="min-w-screen min-h-screen bg-body-background">
      <AppContext.Provider
        value={{
          newCommentText: newCommentText,
          comments: comments,
          setComments: setComments,
          setNewCommentText: setNewCommentText,
          items: items,
          categories: categories,
          filteredItems: filteredItems,
          filteredCategory: filteredCategory,
          setFilteredCategory: setFilteredCategory,
          filterItems: filterItems,
          setSortCriteria: setSortCriteria,
          suggestionsCount: filteredItems.length,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
