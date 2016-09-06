// generate Data object
function Person(username, password, name, ranking, phNum, email, wana_play, wana_share_loc,){
  this.userName = userName;
  this.password = password;
  this.name = name;
  this.ranking = ranking;
  this.phNum = phNum;
  this.email = email;
  this.wana_play = wana_play;
  this.wana_share_loc = wana_share_loc;
  this.wins = 0;
  this.losses = 0;
};
var data = []; //data of all people.
//Function for error catching

document.getElementById('form').addEventListener('submit', sign_up); //eventListner is been called by submit btn.//
function sign_up(event){
  event.preventDefault();
  localStorage.clear;
  var userName = event.target.userName.value;
  var password = event.target.password.value;
  var name = event.target.name.value;
  var ranking = 0;
  var phNum = event.target.phNum.value;
  var email = event.target.email.value;
  var wana_play = event.target.wana_play.value;
  var wana_share_loc = event.target.wana_share_loc.value;
  for(i = 0; i < data.length; i++){
    if(userName = data[i].username){
      prompt('This userName is taken, choose different.');
    };
  };
  data.push(new Person(userName, password, name, ranking, phNum, email, wana_play, wana_share_loc ));
  form.reset();
}

//save data generated from the form
// if (localStorage.list) {
//   var list = localStorage.list.split(',');
// } else {
//   var list = [];
// };
// function saveInfo(){
//   list.push(new Person(userName, password, name, ranking, phNum, email, wana_play, wana_share_loc));
// }
