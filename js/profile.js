//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
var info = document.getElementById('info');
signIn.style.display = 'block';
info.style.display = 'none';
//declear function to show up info
function showInfo(j) {
  signIn.style.display = 'none';
  info.style.display = 'block';
  var img = document.createElement('img');
  img.setAttribute('class', 'pic');//create image element
  img.setAttribute('src', myData[j].image);// append src to img tag
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'info');
  var myName = document.createElement('li');
  myName.innerHTML = myData[j].name;
  var myInfo = document.createElement('li');
  myInfo.innerHTML = 'Score: ' + myData[j].score + '</li><li> Wins: ' + myData[j].wins + '</li><li>Losses: ' + myData[j].losses;
  ul.appendChild(myName);
  ul.appendChild(myInfo);
  info.appendChild(img);
  info.appendChild(ul);
  document.body.appendChild(info);
  return;
};
//add userName and passWord input area form DOM
//check if username and password is right
function check(event){
  event.preventDefault();
  var username = event.target.userName.value;
  var password = event.target.passWord.value;
  for(var i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].passWord){
      console.log('userName =', myData[i].userName, 'passWord =', myData[i].passWord);
      var j = i;
    }
    // else{
    //   signIn.style.display = 'block';
    //   info.style.display = 'none';
    //   alert('username or password is worng!!');
    //   return;
    // };
  }
  showInfo(j);
}

//infoPage(3);
document.getElementById('login_form').addEventListener('submit', check);





//if right show up info.....
