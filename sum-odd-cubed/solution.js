function cubeOdd(arr) {
  for(let i = 0; i < arr.length; i++){
    if(typeof arr[i] !== 'number'){
      return undefined;
    }
  }
  return arr.filter(num =>
    num %2 !== 0)
    .map(oddNum =>
      Math.pow(oddNum, 3)
    )
    .reduce((accum, curr) =>
      accum + curr,
    0);
}
