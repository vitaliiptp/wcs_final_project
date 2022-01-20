import React from "react";
import Feedbacks from "../components/Feedbacks";
import SuggestionsPage from "./suggestionsPage";


export default function Home() {
  return (
    <div>
        <SuggestionsPage />
        <Feedbacks />
    </div>
  )
}
