function mutateMyStrings(stringOne, stringTwo){
  let firstString = stringOne.split('');
  let secondString = stringTwo.split('');
  let answerString = [firstString.join('')];

  for(let i = 0; i < firstString.length; i++) {
    if(firstString[i] !== secondString[i]) {
      firstString[i] = secondString[i];
      answerString.push(firstString.join(''));
    }
  }
  return answerString.join('\n') + '\n';
}