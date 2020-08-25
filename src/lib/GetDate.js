const GetDate = () => {
  const date = new Date();
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${date.getFullYear()}.${
    date.getMonth() + 1
  }.${date.getDate()} ${week[date.getDay()]}`;

  return today;
};

export default GetDate;
