import "../styles/globals.css";
import AppContext from "../context/AppContext";
import { useEffect, useState } from "react";
import data from "../data.json";
import Favicon from "../components/favicon";

function MyApp({ Component, pageProps }) {
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [selectedCommentId, setSelectedComment] = useState([]);
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
          selectedFeedback: selectedFeedback,
          setSelectedFeedback: setSelectedFeedback,
          selectedCommentId: selectedCommentId,
          setSelectedComment: setSelectedComment,
          items: items,
          categories: categories,
          filteredItems: filteredItems,
          filteredCategory: filteredCategory,
          setFilteredItems: setFilteredItems,
          setFilteredCategory: setFilteredCategory,
          filterItems: filterItems,
          setSortCriteria: setSortCriteria,
          suggestionsCount: filteredItems.length,
        }}
      >
        <Favicon />
        <Component {...pageProps} />
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
