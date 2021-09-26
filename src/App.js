import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import SearchForm from "./components/searchform/SearchForm";
// import NotFound from "./components/notfound/NotFound";
import React, { Suspense, useState } from "react";
import TrackDetailsComponent from "./components/trackDetails/TrackDetails";
import { useTranslation } from "react-i18next";
import "./App.scss";
const App = () => {
  const [showTrackDetails, setShowTrackDetails] = useState(false);

  const [trackDetailsState, setTrackDetailsState] = useState(null);
  const { i18n } = useTranslation("translation");

  const handleSearchResponse = (response) => {
    if (response == null) {
      setShowTrackDetails(false);
    } else {
      setTrackDetailsState(response);
      setShowTrackDetails(true);
    }
  };
  return (
    <Suspense fallback="loading">
      <div
        className={`${i18n.language === "ENG" ? "App App-en" : "App App-ar"}`}
      >
        <BrowserRouter>
          <div className="container">
            <Header />
            <SearchForm
              className="searchForm"
              handleSubmit={handleSearchResponse}
            />

            <div className="content">
              {showTrackDetails && (
                <TrackDetailsComponent trackDetails={trackDetailsState} />
              )}
            </div>
          </div>
        </BrowserRouter>
      </div>
    </Suspense>
  );
};

export default App;
