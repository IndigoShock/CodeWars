function insertDash(num) {
  let arrayNum = num.toString().split('');
  for (let i=0; i < arrayNum.length; i++) {
    if (arrayNum[i] !== 0 && arrayNum[i]%2 && arrayNum[i+1]%2) {
      arrayNum.splice(i+1, 0, '-');
      i++;}
  }
  return arrayNum.join('');
}