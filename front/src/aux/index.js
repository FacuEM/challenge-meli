export const priorityAvg = (state) => {
  const arr = [];
  const arrAvg = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  arr.push(state.map((el) => el.stars));
  if (Math.round(arrAvg(arr[0])) > 3) return "High";
  else if (Math.round(arrAvg(arr[0])) == 3) return "Normal";
  else return "Low";
};
