const getZero = (num) => {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  }
  return num;
};

export const formatDate = (date = new Date()) => `${date.getFullYear()}-${getZero(date.getMonth() + 1)}-${getZero(date.getDate())} ${getZero(date.getHours())}:${getZero(date.getMinutes())}`;
