import padTo2Digits from "./padTo2Digits";

const dateToStr = date => {
  return (
    [
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
      date.getFullYear(),
    ].join('/')
  );
};
export default dateToStr;