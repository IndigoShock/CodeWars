function disemvowel(str) {
  let removeVal = str.replace(/[aeiouAEIOU]/g,'');
  return removeVal;
}