import React from "react";
import { useTranslation } from "react-i18next";
import StepProgressBar from "../stepProgressBar/StepProgressBar";
import "./TrackStatus.scss";
const TrackStatus = (props) => {
  const { t } = useTranslation("translation");
  const trackObject = props.trackObject;

  return (
    <div className="track-status">
      <div className="track-info">
        <ul>
          <li>{`${t(`trackStatus.Shipment_No`)} ${
            trackObject.trackingNumber
          }`}</li>
          <li>
            {t(`trackStatus.${trackObject.currentStatus.state}`) ===
            `trackStatus.${trackObject.currentStatus.state}`
              ? `${trackObject.currentStatus.state}`
              : t(`trackStatus.${trackObject.currentStatus.state}`)}
          </li>
        </ul>
        <ul>
          <li>{t(`trackStatus.Last_Update`)}</li>
          <li>{`${trackObject.currentStatus.day} ${trackObject.currentStatus.date}  at ${trackObject.currentStatus.time}`}</li>
        </ul>
        <ul>
          <li>{t(`trackStatus.Sender`)}</li>
          <li>SOUQ.COM</li>
        </ul>
        <ul>
          <li> {t(`trackStatus.Delivery_Appointment_With_In`)}</li>
          <li>
            {trackObject.promisedDate
              ? `${trackObject.promisedDate.dayNum} ${trackObject.promisedDate.month} ${trackObject.promisedDate.year}`
              : t(`trackStatus.undefined`)}
          </li>
        </ul>
      </div>
      <StepProgressBar
        currentStatus={trackObject.currentStatus}
        transitEvents={trackObject.transitEvents}
      />
    </div>
  );
};

export default TrackStatus;
