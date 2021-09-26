import React from "react";
import { Table } from "reactstrap";
import { useTranslation } from "react-i18next";
import "./TrackTransitTable.scss";
const TrackTransitTable = ({ TransitEvents }) => {
  const { t } = useTranslation("translation");
  return (
    <div className="details-container">
      <div className="details-content">
        <h3 className="details-head">{t(`trackStatus.Tracking_Details`)}</h3>
        <Table responsive borderless>
          <thead className="t-head">
            <tr>
              <th>{t(`trackStatus.Branch`)}</th>
              <th>{t(`trackStatus.Date`)}</th>
              <th>{t(`trackStatus.Time`)}</th>
              <th>{t(`trackStatus.Details`)}</th>
            </tr>
          </thead>
          <tbody className="t-body">
            {TransitEvents.map((data, index) => (
              <tr key={index}>
                <td>
                  {t(`trackStatusHub.${data.hub ? data.hub : "undefined"}`) ===
                  `trackStatusHub.${data.hub}`
                    ? `${data.hub}`
                    : t(`trackStatusHub.${data.hub ? data.hub : "undefined"}`)}
                </td>
                <td>{new Date(data.timestamp).toLocaleDateString("en-GB")}</td>
                <td className="table-time">
                  {new Date(data.timestamp).toLocaleTimeString(
                    navigator.language,
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                    }
                  )}
                </td>
                <td>
                  {data.state ? <p>{t(`trackStatus.${data.state}`)}</p> : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TrackTransitTable;
