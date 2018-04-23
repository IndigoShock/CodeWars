function find_average(array) {
  let nums = array.reduce ((acc, cur) => {
    return (acc + cur);
  });
  return nums/array.length;
}