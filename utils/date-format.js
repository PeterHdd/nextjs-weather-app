export const formatTime = (result) => {
  const { hourly, daily } = result;
  hourly.forEach((element) => {
    element.dt = formatAMPM(new Date(element.dt * 1000));
  });
  daily.forEach((element) => {
    element.dt = formatDailyDate(new Date(element.dt * 1000));
  });
};

const formatDailyDate = (date) => {
  const daysArr = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
  const monthsArr = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${daysArr[date.getDay()]}, ${
    monthsArr[date.getMonth()]
  } ${date.getDate()}`;
};

const formatAMPM = (date) => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};
