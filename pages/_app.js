import "../styles/globals.css";
import AppContext from "../context/AppContext";
import { useEffect, useState } from "react";
import data from "../data.json";

function MyApp({ Component, pageProps }) {
  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [sortCriteria, setSortCriteria] = useState("");
  const [loading, setLoading] = useState(true);
  const categories = [
    "All",
    "UX",
    "UI",
    ...new Set(data.productRequests.map((item) => item.category)),
  ];

  useEffect(() => {
    fetch("http://localhost:3000/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data);
        setFilteredItems(data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const filterItems = (category) => {
    if (category === "All") {
      setFilteredItems(items);
      setFilteredCategory(category);
      return;
    }
    setFilteredCategory(category);
    setFilteredItems(items.filter((item) => item.category === category));
  };

  return (
    <div className="min-w-screen min-h-screen bg-body-background">
      <AppContext.Provider
        value={{
          categories: categories,
          filteredItems: filteredItems,
          filteredCategory: filteredCategory,
          setFilteredCategory: setFilteredCategory,
          filterItems: filterItems,
          setSortCriteria: setSortCriteria,
          suggestionsCount: filteredItems.length,
          loading: loading,
        }}
      >
        <Component {...pageProps} />
      </AppContext.Provider>
    </div>
  );
}

export default MyApp;
