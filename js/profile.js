//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
var info = document.getElementById('info');
var up = document.getElementById('up');
signIn.style.display = 'block';
info.style.display = 'none';
up.style.display = 'none' // hiding the update page
//declear function to show up info
function showInfo(j) {
  signIn.style.display = 'none';
  info.style.display = 'block';
  var img = document.createElement('img');
  img.setAttribute('class', 'pic');//create image element
  img.setAttribute('src', '.' + myData[j].image);// append src to img tag
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'info');
  ul.innerHTML = '<li>' + myData[j].name + '</li><li>Score: ' + myData[j].score() + '</li><li id="win"> Wins: ' + myData[j].wins + '</li><li id="loss">Losses: ' + myData[j].losses + '</li><button id="update" type="submit">update</button>';
  info.appendChild(img);
  info.appendChild(ul);
  document.body.appendChild(info);
  return;
};
//others info
function others(){
  var z = ranking.length - 1;
  for(var r = z; r > -1; r--){
    var div = document.getElementById('others');
    var place = scores.indexOf(ranking[ranking.length - r - 1]);
    var ul = document.createElement('ul');
    var s = r + 1;
    ul.innerHTML = '<li>' + s + '</li><li>' + myData[place].name + '</li><li> Score: ' + myData[place].score() + '</li>';
    div.appendChild(ul);
  };
};
//page load save info
//check if local storage have list of privious
if(localStorage.signIn){
  for (var i = 0; i < myData.length; i++){
    if(localStorage.signIn === myData[i].userName){
      var j = i;
      showInfo(j);
      others();
      localStorage.wins = myData[i].wins;
      localStorage.losses = myData[i].losses;

    };
  }
}


//add userName and passWord input area form DOM
//check if username and password is right
function check(event){
  event.preventDefault();
  var username = event.target.userName.value;
  var password = event.target.passWord.value;
  for(var i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].passWord){
      localStorage.signIn = username;
      var j = i;
    };
  }
  showInfo(j);
  others();
  //Error catching for wrong input
  if(!j) {
    signIn.style.display = 'block';
    info.style.display = 'none';
    alert('username or password is worng!!');
  };
  return localStorage.signIn;
};
//update scores
function updateScore(event){
  event.preventDefault();
  prompt('hello');

}
function winUpdate(event){
  event.preventDefault();
  var x = parseInt(prompt('win'));
  // x = +myData[].wins;
  console.log('win= ',x);

};
function lossUpdate(event){
  event.preventDefault();
  var x = parseInt(prompt('win'));
  console.log('loss= ',x);

}


//logout feature
function logOut(event){
  event.preventDefault();
  console.log('logout!!');
  localStorage.signIn = false;
  location.reload();
}
//infoPage(3);
document.getElementById('login_form').addEventListener('submit', check);
var update = document.getElementById('update');
if(update){
  update.addEventListener('click', updateScore);
}
var addWin = document.getElementById('win');
if(addWin){
  addWin.addEventListener('click', winUpdate);
};
var addLoss = document.getElementById('loss');
if(addLoss){
  addLoss.addEventListener('click', lossUpdate);
};
document.getElementById('logOut').addEventListener('click', logOut);
