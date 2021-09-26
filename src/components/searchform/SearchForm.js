import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchForm.scss";
import axios from "axios";
import { useTranslation } from "react-i18next";

const SearchForm = (props) => {
  const [trackId, setTrackId] = useState("");
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const trachNum = e.target.value;
    setTrackId(trachNum);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await getTrackDetailsById(trackId);
    props.handleSubmit(data);
    data ? setShowError(false) : setShowError(true);
  };
  const { t } = useTranslation("translation");

  return (
    <div className="search-container ">
      <div className="search-content">
        {showError && (
          <div className="not-found">
            <h2 className="not-found-head">رقم الشحنة هذا غير صالح</h2>
          </div>
        )}
        <h2 className="search-head">
          {t(`trackStatus.Please_Enter_your_Shipment_Number`)}
        </h2>
        <h3>{t(`trackStatus.Track_Another_Shipment`)}</h3>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="tracking"
            placeholder={`${t(`trackStatus.Track-Num`)}`}
            onChange={(e) => handleChange(e)}
          />
          <button className="search-button" onClick={handleSubmit}>
            <FaSearch className="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchForm;

const getTrackDetailsById = async (trackID) => {
  try {
    const response = await axios.get(
      `https://tracking.bosta.co/shipments/track/${trackID}`
    );
    return response.data;
  } catch (e) {
    return null;
  }
};
