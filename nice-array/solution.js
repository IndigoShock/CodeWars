var isNice = function(arr){
  let counter = 0;

  if (arr.length === 0) return false;
  for (let i = 0; i < arr.length; i++ ){
    if (arr.includes(arr[i]+1) || arr.includes(arr[i]-1)) {
      counter++;
    } else return false;
  }
  if (arr.length === counter) {
    return true;
  }
};