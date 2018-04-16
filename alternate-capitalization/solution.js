function capitalize(s) {
  let capitolArray = [];
  let output1 = '';
  let output2 = '';

  for(let i = 0; i < s.length; i++){
    if (i % 2 === 0) {
      output1 += s[i].toUpperCase();
    }
    else {
      output1 += s[i].toLowerCase();
    }
  }
  capitolArray.push(output1);


  for(let i = 0; i < s.length; i++){
    if (i % 2 != 0) {
      output2 += s[i].toUpperCase();
    }
    else {
      output2 += s[i].toLowerCase();
    }
  }
  capitolArray.push(output2);
  return capitolArray;
}