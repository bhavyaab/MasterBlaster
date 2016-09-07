//make profile info hide and signIn block display
var signIn = document.getElementById('login_form');
var info = document.getElementById('info');
signIn.style.display = 'block';
info.style.display = 'none';
//add userName and passWord input area form DOM
//check if username and password is right
function check(event){
  event.preventDefault();
  console.log('event check', event);
  alert('this event fired');
  var username = event.target.userName.value;
  var password = event.target.passWord.value;
  for(var i = 0; i < myData.length; i++){
    if(username === myData[i].userName && password === myData[i].passWord){
         var j = i;
         return j;
    }else{
      signIn.style.display = 'block';
      info.style.display = 'none';
      alert('username or password is worng!!');
      return;
    };
    new ShowInfo(j);
  }
}
//declear function to show up info
function ShowInfo(n){
 console.log(myData[n].userName);
 console.log(myData[n].passWord);
 signIn.style.display = 'none';
 info.style.display = 'block';
 var img = document.createElement('img');
 img.setAttribute('class', 'pic');//create image element
 img.setAttribute('src', myData[n].image);// append src to img tag
 var ul = document.createElement('ul');
 ul.setAttribute('class', 'info');
 var myName = document.createElement('li');
 myName.innerHTML = myData[n].name;
 var myInfo = document.createElement('li');
 myInfo.innerHTML = 'Score: ' + myData[n].score + '</li><li> Wins: ' + myData[n].wins + '</li><li>Losses: ' + myData[n].losses;
 ul.innerHTML = 'myName';
 ul.innerHTML = 'myInfo';
 var button = document.createElement('button');
 button.setAttribute('type', 'submit');
 button.setAttribute('id', 'update');
 button.innerHTML = 'update';
 info.innerHTML = 'img';
 info.innerHTML = 'ul';
 info.innerHTML = 'button';
 document.body.appendChild(info);
 return;
}
//infoPage(3);
document.getElementById('login_form').addEventListener('submit', check);





//if right show up info.....
