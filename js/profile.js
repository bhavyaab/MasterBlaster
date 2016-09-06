//make profile info hide and signIn block display
var signIn = document.getElementById('logIn');
var info = document.getElementById('info');
signIn.style.display = 'block';
info.style.display = 'none';
//add userName and passWord input area form DOM
var fldst = document.createElement('fieldset');
var lbl =  document.createElement('label');
lbl.setAttribute = 'type '

//check if username and password is right
document.getElementById('btn').addEventListener('submit', check);
function check(){
  var username = event.target.userName.value;
  var passWord = event.target.password.value;
  for(i = 0; i < myData.length; i++){
    if(username === myData[i].userName && passWord === myData[i].password){
      signIn.style.display = 'none';
      info.style.display = 'block';
    }else{
      signIn.style.display = 'block';
      info.style.display = 'none';
      alert('userName or passWord is worng!!');
    };
  }
}









//if right show up info.....
