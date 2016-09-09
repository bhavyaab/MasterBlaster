//ranking of each user
var scores = [];
for(i = 0; i < myData.length; i++){
  scores.push(myData[i].score());
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
//through DOM fetch div section
if(window.location.pathname.slice(-10) === 'index.html'){
  for(var r = 0; r < 10; r++){
    var div = document.getElementById('rank');
    var place = scores.indexOf(ranking[ranking.length - r - 1]);
    var ul = document.createElement('ul');
    var s = r + 1;
    ul.innerHTML = '<li>' + s + '</li><li>' + myData[place].name + '</li> <li> Win: ' + myData[place].score() + '%</li> <img src ="' + myData[place].image + '">' ;
    div.appendChild(ul);
  }
}
