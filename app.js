//ranking of each user
var scores = [];
for(i = 0; i < myData.length; i++){
  scores.push(myData[i].score);
};
//short array ranking by order off smaller to higher

function compareNumbers(a, b){
  return a - b;
};
//comapir the array ranking and find the heighest score
var ranking = scores.slice();
//copy the scores to another array
ranking = ranking.sort(compareNumbers);
//find the top three scorer
//DOM
var div = document.getElementById('rank');
for(var r = 0; r < 3; r++){
  var numOne = scores.indexOf(ranking[ranking.length - r - 1]);
  var ul = document.createElement('ul');
  var s = r + 1;
  ul.innerHTML = '<li>' + s + '</li><li> Name: ' + myData[numOne].name + '</li> <li> Score: ' + myData[numOne].score + '</li>';
  div.appendChild(ul);

}
