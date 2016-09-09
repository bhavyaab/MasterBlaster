//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
var info = document.getElementById('info');
var up = document.getElementById('up');
if(signIn){
  signIn.style.display = 'block';
}
if(info){
  info.style.display = 'none';
}
if(up){
  up.style.display = 'none'; // hiding the update page
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
      console.log(i);
      var j = i;
      location.reload();
    };
  }
  if(isNaN(j)){                                        //Error catching for wrong input
    signIn.style.display = 'block';
    info.style.display = 'none';
    alert('username or password is worng!!');
    location.reload();
  };
  showInfo(j);
  others();
  return j;
};
//declear function to show up info
function showInfo(j) {
  if(signIn){
    signIn.style.display = 'none';
  }
  if(info){
    info.style.display = 'block';
  }
  var img = document.createElement('img');
  img.setAttribute('class', 'pic');//create image element
  img.setAttribute('src', '.' + myData[j].image);// append src to img tag
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'info');
  ul.innerHTML = '<li>' + myData[j].name + '</li><li id="win"> Wins: ' + myData[j].wins + '</li><li id="loss">Losses: ' + myData[j].losses + '<li id="score">Win: ' + myData[j].score() + '%</li></li><button id="update" type="submit">update</button>';
  if(info){
    info.appendChild(img);
    info.appendChild(ul);
    document.getElementById('blah').appendChild(info);
  }
  return;
};
//others info
function others(){
  var z = ranking.length - 1;
  var div = document.getElementById('others');
  for(var r = z; r > -1; r--){
    var place = scores.indexOf(ranking[ranking.length - r - 1]);
    var ul = document.createElement('ul');
    ul.innerHTML = '<li><img src= .' + myData[place].image + '></li><li>' + myData[place].name + '</li><li> Wins: ' + myData[place].wins + '</li><li>Losses: ' + myData[place].losses + '</li><li>Win: ' + myData[place].score() + '%</li>';
    div.appendChild(ul);
  };
  div.style.display = 'block';
};
//page load save info
//check if local storage have list of privious
if(localStorage.signIn){
  for (var i = 0; i < myData.length; i++){
    if(localStorage.signIn === myData[i].userName){
      var j = i;
      showInfo(j);
      others();
    };
  }
}

//update scores
function updateScore(event){
  event.preventDefault();
  winUpdate();
  lossUpdate();
  document.getElementById('score').innerText = 'Win: ' + myData[j].score() + '%';
  localStorage.setItem('myDataBackup', JSON.stringify(myData));
}
//update winnig game number
function winUpdate(){
  event.preventDefault();
  var x = parseInt(prompt('win'));
  if(isNaN(x)){
    alert('input is not a number');
    return;
  };
  if(typeof x === 'number'){
    myData[j].wins = myData[j].wins + x;
    console.log('x = ', x,'win= ', myData[j].wins);
    document.getElementById('win').innerText = 'Wins: ' + myData[j].wins;
  };
};

//update loss score numbers
function lossUpdate(){
  event.preventDefault();
  var x = parseInt(prompt('loss'));
  if(isNaN(x)){
    alert('input is not a number');
    return;
  };
  if(typeof x === 'number'){
    myData[j].losses = myData[j].losses + x;
    console.log('x = ', x,'loss= ', myData[j].losses);
    document.getElementById('loss').innerText = 'Losses: ' + myData[j].losses;
  };
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
document.getElementById('logOut').addEventListener('click', logOut);
