import "../styles/globals.css";
import AppContext from "../context/AppContext";
import {useState} from "react";
import data from "../data.json";


function MyApp({ Component, pageProps }) {
    const [items, setItems] = useState(data.productRequests);
    const allCategories = [
        "All",
        "UX",
        "UI",
        ...new Set(items.map((item) => item.category)),
    ];
    const [feedbackButtonCat, setFeedbackButtonCat] = useState(allCategories);


    const filterCategory = (button) => {
        if (button === "All") {
            setItems(data.productRequests);
            return;
        }
        const filteredCategory = data.productRequests.filter(
            (item) => item.category === button
        );
        setItems(filteredCategory);
    };

    return (
    <div className="min-w-screen min-h-screen bg-body-background">
        <AppContext.Provider
            value={{
                items: items,
                feedbackButtonCat: feedbackButtonCat,
                filterCategory: filterCategory,
                suggestionsCount: items.length
            }}
        >
            <Component {...pageProps} />
        </AppContext.Provider>
    </div>
  );
}

export default MyApp;
