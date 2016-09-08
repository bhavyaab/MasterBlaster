// generate Data object
function Person(username, password, name){
  this.userName = userName;
  this.password = password;
  this.name = name;
  this.wins = 0;
  this.losses = 0;
  this.score = 0;
  this.image = 'http://placehold.it/230x230/000000';
};
var data = []; //data of all people.
//Function for error catching

document.getElementById('Form').addEventListener('submit', sign_up); //eventListner is been called by submit btn.
function sign_up(event){
  console.log('xoxox');
  event.preventDefault();
  localStorage.clear;
  var userName = event.target.userName.value;
  var passWord = event.target.password.value;
  var name = event.target.Name.value;
  for(i = 0; i < myData.length; i++){
    if(userName = myData[i].username){
      prompt('This userName is taken, choose different.');
    };
  };
  myData.push(new Person(userName, passWord, name));
  form.reset();
}
