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
var numOne = scores.indexOf(ranking[ranking.length - 1]);
var numTwo = scores.indexOf(ranking[ranking.length - 2]);
var numThree = scores.indexOf(ranking[ranking.length - 3]);
//DOM
var div = document.getElementById('rank');
var ul = document.createElement('ul');
ul.innerHTML = '<li> Name: ' + myData[numOne].name + '</li> <li> Score: ' + myData[numOne].score + '</li>';
div.appendChild(ul);
ul = document.createElement('ul');
ul.innerHTML = '<li> Name: ' + myData[numTwo].name + '</li> <li> Score: ' + myData[numTwo].score + '</li>';
div.appendChild(ul);
ul = document.createElement('ul');
ul.innerHTML = '<li> Name: ' + myData[numThree].name + '</li> <li> Score: ' + myData[numThree].score + '</li>';
div.appendChild(ul);

