import React from "react";
import { ProgressBar, Step } from "react-step-progress-bar";
import { AiOutlineFileDone } from "react-icons/ai";
import { ImTruck } from "react-icons/im";
import { MdDone } from "react-icons/md";
import "./StepProgressBar.scss";
import "react-step-progress-bar/styles.css";
import { useTranslation } from "react-i18next";

const StepProgressBar = ({ currentStatus, transitEvents }) => {
  const { t } = useTranslation("translation");
  return (
    <div className="progress-container">
      <div className="progress-content">
        <ProgressBar
          height={10}
          percent={currentStatus.barRate}
          filledBackground={
            currentStatus.color === "green"
              ? "#53cc7b"
              : currentStatus.color === "red"
              ? "#ff0000"
              : "#e08c4c"
          }
          unfilledBackground="#e9e9e9"
        >
          <Step transition="scale">
            {({ accomplished }) => (
              <span
                className={
                  accomplished
                    ? `icon-accomplished-${currentStatus.color}`
                    : `icon-${currentStatus.color}`
                }
              >
                <MdDone
                  className={
                    accomplished ? "finished-icon" : "unfinished-icon "
                  }
                />
              </span>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <span
                className={
                  accomplished
                    ? `icon-accomplished-${currentStatus.color}`
                    : `icon-${currentStatus.color}`
                }
              >
                <MdDone
                  className={accomplished ? "finished-icon" : "unfinished-icon"}
                />
              </span>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <span
                className={
                  accomplished
                    ? `icon-accomplished-${currentStatus.color}`
                    : `icon-${currentStatus.color}`
                }
              >
                {accomplished ? (
                  <MdDone
                    className={
                      accomplished ? "finished-icon" : "unfinished-icon"
                    }
                  />
                ) : (
                  <ImTruck
                    className={
                      accomplished ? "finished-icon" : "unfinished-icon"
                    }
                  />
                )}
              </span>
            )}
          </Step>
          <Step transition="scale">
            {({ accomplished }) => (
              <span
                className={
                  accomplished
                    ? `icon-accomplished-${currentStatus.color}`
                    : `icon-${currentStatus.color} delivered-icon`
                }
              >
                {accomplished ? (
                  <MdDone
                    className={
                      accomplished ? "finished-icon" : "unfinished-icon"
                    }
                  />
                ) : (
                  <AiOutlineFileDone
                    className={
                      accomplished ? "finished-icon" : "unfinished-icon"
                    }
                  />
                )}
              </span>
            )}
          </Step>
        </ProgressBar>
      </div>
      <div className="progress-states">
        <ul>
          <li>{t(`trackStatus.TICKET_CREATED`)}</li>
          <li>{t(`trackStatus.DELIVERED_From_SENDER`)} </li>
          <li>
            {t(`trackStatus.TICKET_SHIPPED`)}
            <br />

            {transitEvents.map((reasonphase, index) => {
              if (reasonphase.state === "WAITING_FOR_CUSTOMER_ACTION") {
                return (
                  <p
                    key={index}
                    className={`transiteventreason-${currentStatus.color}`}
                  >
                    {reasonphase.reason}
                  </p>
                );
              } else {
                return (
                  <p
                    key={index}
                    className={`transiteventreason-${currentStatus.color}`}
                  ></p>
                );
              }
            })}
          </li>
          <li>{t(`trackStatus.DELIVERED`)}</li>
        </ul>
      </div>
    </div>
  );
};

export default StepProgressBar;
