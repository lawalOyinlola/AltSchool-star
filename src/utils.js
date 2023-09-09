export const range = (start, end, step = 1) => {
  let output = [];

  // a conditional check for end
  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  // loop code
  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
};