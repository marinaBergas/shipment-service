import React from "react";
import Help from "../../assets/help.jpg";
import "./TrackAddress.scss";
import { useTranslation } from "react-i18next";
const TrackAddress = () => {
  const { t } = useTranslation("translation");
  return (
    <div className="track-address-content">
      <h3 className="track-address-head">
        {t(`trackStatus.Delivery_Address`)}
      </h3>
      <p></p>
      <div className="track-help-container">
        <div className="track-help-image-container">
          <img src={Help} alt="help" className="track-help-image" />
        </div>
        <div className="track-help-details">
          <h6> {t(`help.Any_Problemes`)}</h6>
          <button className="btn-help">{t(`help.Report_aproblem`)}</button>
        </div>
      </div>
    </div>
  );
};

export default TrackAddress;
