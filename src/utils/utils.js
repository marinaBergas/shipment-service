export const months = [
  "يناير",
  "فبراير",
  "مارس",
  "إبريل",
  "مايو",
  "يونيو",
  "يوليو",
  "أغسطس",
  "سبتمبر",
  "أكتوبر",
  "نوفمبر",
  "ديسمبر",
];
export const days = [
  "اﻷحد",
  "اﻷثنين",
  "الثلاثاء",
  "اﻷربعاء",
  "الخميس",
  "الجمعة",
  "السبت",
];
export const states = [
  "TICKET_CREATED",
  "PACKAGE_RECEIVED",
  "NOT_YET_SHIPPED",
  "OUT_FOR_DELIVERY",
  "WAITING_FOR_CUSTOMER_ACTION",
  "DELIVERED",
  "DELIVERED_TO_SENDER",
  "RECEIVED_DELIVERY_LOCATION",
  "IN_TRANSIT",
  "CANCELLED",
  "DELIVERY_FAILED",
];
export const statesMap = {
  TICKET_CREATED: {
    color: "orange",
    barRate: 0,
  },
  DELIVERED: {
    color: "green",
    barRate: 100,
  },
  CANCELLED: {
    color: "red",
    barRate: 0,
  },
  DELIVERY_FAILED: {
    color: "red",
    barRate: 0,
  },
  PACKAGE_RECEIVED: {
    color: "orange",
    barRate: 34,
  },
  IN_TRANSIT: {
    color: "orange",
    barRate: 34,
  },
  NOT_YET_SHIPPED: {
    color: "orange",
    barRate: 34,
  },
  OUT_FOR_DELIVERY: {
    color: "orange",
    barRate: 67,
  },
  WAITING_FOR_CUSTOMER_ACTION: {
    colore: "red",
    barRate: 67,
  },
  RECEIVED_DELIVERY_LOCATION: {
    colore: "red",
    barRate: 67,
  },
  DELIVERED_TO_SENDER: {
    color: "red",
    barRate: 0,
  },
  AVAILABLE_FOR_PICKUP: {
    color: "orange",
    barRate: 0,
  },
};

export function getPreparedTrackObject(trackdDetails) {

  const trackDetailsObject = {};
  trackDetailsObject.currentStatus = getPreparedtState(
    trackdDetails.CurrentStatus
  );
  trackDetailsObject.promisedDate = getFormattedDate(
    trackdDetails.PromisedDate
  );
  trackDetailsObject.supportPhoneNumbers = trackdDetails.SupportPhoneNumbers
    ? trackdDetails.SupportPhoneNumbers[0]
    : 0;
  trackDetailsObject.trackingNumber = trackdDetails.TrackingNumber;
  trackDetailsObject.transitEvents = getTransitEventsList(
    trackdDetails.TransitEvents
  );
  return trackDetailsObject;
}
function getPreparedtState(currentState) {
  let currentstateObject = statesMap[currentState.state];
  currentstateObject.state = currentState.state;
  const formatttedDate = getFormattedDate(currentState.timestamp);
  if (currentState.hub) {
    currentstateObject.hub = currentState.hub;
  }
  if (currentState.reason) {
    currentstateObject.reason = currentState.reason;
  }
  return {
    ...currentstateObject,
    ...formatttedDate,
  };
}

const getFormattedDate = (timestamp) => {
  if (timestamp) {
    const activeDate = new Date(timestamp);
    return {
      date: activeDate.toLocaleDateString("en-GB"),
      timestamp,
      dayNum: [activeDate.getDay()],
      day: days[activeDate.getDay()],
      month: months[activeDate.getMonth()],
      year: activeDate.getFullYear(),
      time: `${activeDate.toLocaleTimeString(navigator.language, {
        hour: "2-digit",
        minute: "2-digit",
      })}`,
    };
  }
  return null;
};

const getTransitEventsList = (transitEvents) => {
  let events = [];
  for (let i = transitEvents.length - 1; i >= 0; i--) {
    events.push(getPreparedtState(transitEvents[i]));
  }
  return events;
};
