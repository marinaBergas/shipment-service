import React from "react";
import { getPreparedTrackObject } from "../../utils/utils";
import TrackStatus from "../trackStatus/TrackStatus";
import TrackTransitTable from "../trackTransitTable/TrackTransitTable";
import TrackAddress from "../trackAddress/TrackAddress";
import "./TrackDetails.scss";
const TrackDetailsComponent = (props) => {
  const trackDetails = props.trackDetails;
  const preObject = getPreparedTrackObject(trackDetails);

  return (
    <div>
      <TrackStatus trackObject={preObject} />
      <div className="track-details-container">
        <TrackTransitTable TransitEvents={preObject.transitEvents} />
        <TrackAddress />
      </div>
    </div>
  );
};

export default TrackDetailsComponent;
