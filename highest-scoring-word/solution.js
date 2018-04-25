function high(x){
  var points = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var words = x.split(' ');
  var scores = [];

  words.forEach(word => {
    var score = 0;
    word.split('').forEach(letter => {
      score += points.indexOf(letter) + 1;
    });
    scores.push(score);
  });

  var highest = scores.reduce((a,b) => {
    return Math.max(a,b);
  });

  return words[scores.indexOf(highest)];
}