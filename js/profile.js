//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
// var info = document.getElementById('info');
signIn.style.display = 'block';
// info.style.display = 'none';
//add userName and passWord input area form DOM
//check if username and password is right
function check(event){
  event.preventDefault();
  console.log('event check', event);
  alert('this event fired');
  var username = event.target.userName.value;
  var password = event.target.passWord.value;
  for(i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].password){
      var info = document.getElementById('info');//section of info
      var img = document.createElement('img');
      img.setAttribute('class', 'pic');//create image element
      img.setAttribute('src', myData[i].image);// append src to img tag
      var ul = document.createElement('ul');
      ul.setAttribute('class', 'info');
      var li1 = document.createElement('li');
      li1.setAttribute('class', 'name');
      li1.appendChild(myData[i].name);
      var li2 = document.createElement('li');
      li2.appendChild('Score: ' + myData[i].score + '</li><li> Wins: ' + myData[i].wins + '</li><li>Losses: ');
      ul.appendChild('li1');
      ul.appendChild('li2');
      var button = document.createElement('button').setAttribute('type', 'submit');
      button.setAttribute('id', 'update');
      info.appendChild('img');
      info.appendChild('ul');
      info.appendChild('button');
    }else{
      signIn.style.display = 'block';
      info.style.display = 'none';
      alert('userName or passWord is worng!!');
    };
  }
}
//declear function to show up info
function infoPage(){
  var info = document.getElementById('info');//section of info
  var img = document.createElement('img').setAttribute('class', 'pic');//create image element
  img.setAttribute('src', 'myData[i].image');// append src to img tag
  var ul = document.createElement('ul').setAttribute('class', 'info');
  var li1 = document.createElement('li').setAttribute('class', 'name');
  li1.appendChild(myData[i].name);
  var li2 = document.createElement('li');
  li2.appendChild('Score: ' + myData[i].score + '</li><li> Wins: ' + myData[i].wins + '</li><li>Losses: ');
  ul.appendChild('li1');
  ul.appendChild('li2');
  var button = document.createElement('button').setAttribute('type', 'submit');
  button.setAttribute('id', 'update');
  info.appendChild('img');
  info.appendChild('ul');
  info.appendChild('button');
};
//infoPage(3);
document.getElementById('login_form').addEventListener('submit', check);





//if right show up info.....
