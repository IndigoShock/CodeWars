function formatWords(words){

  if(!words){
    return '';
  }

  else{

    var cleanArray = [];
    for(var i = 0; i < words.length; i++){
      if(words[i].length){
        cleanArray.push(words[i]);
      }
    }

    var concatenated = '';
    for(var i = 0; i < cleanArray.length; i++){
      if(i<cleanArray.length-2){
        concatenated = concatenated.concat(cleanArray[i], ', ');
      }
      else if(i===cleanArray.length-2){
        concatenated = concatenated.concat(cleanArray[i], ' and ');
      }
      else if(i===cleanArray.length-1){
        concatenated = concatenated.concat(cleanArray[i]);
      }
    }

    return concatenated;
  }
}