//make profile info hide and signIn block display
var signIn = document.getElementById('logIn');
var info = document.getElementById('info');
signIn.style.display = 'block';
info.style.display = 'none';
//add userName and passWord input area form DOM
//check if username and password is right
document.getElementById('btn').addEventListener('submit', check);
function check(event){
  var username = event.target.userName.value;
  var password = event.target.password.value;
  for(i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].password){
      infoPage();
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
  var src = myData[i].image; //put the value of image according to person
  img.appendChild('src=' + src);// append src to img tag
  var ul = document.createElement('ul').setAttribute('class', 'info');
  var li1 = document.createElement('li').setAttribute('class', 'name');
  li1.appendChild(myData[i].name);
  var li2 = document.createElement('li');
  li2.appendChild('Score: ' + myData[i].score + '</li><li> Wins: ' + myData[i].wins + '</li><li>Losses: ');
  ul.appendChild('li1');
  ul.appendChild('li2');
  var button = document.createElement('button').setAttribute('type', 'submit');
  button.setAttribute('id', 'update')
  info.appendChild('img');
  info.appendChild('ul');
  info.appendChild('button');
};







//if right show up info.....
