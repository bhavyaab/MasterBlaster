// generate Data object
function Person(name, ranking, phNum, email, wana_play, wana_share_loc ){
    this.name = name;
    this.ranking = ranking;
    this.phNum = phNum;
    this.email = email;
    this.wana_play = wana_play;
    this.wana_share_loc = wana_share_loc;
  };
var data = [];

function sign_up(event){
  event.preventDefault();
  var name = event.target.name.value;
  var ranking = 0;
  var phNum = event.target.phNum.value;
  var email = event.target.email.value;
  var wana_play = event.target.wana_play.value;
  var wana_share_loc = event.target.wana_share_loc.value;
  data.push(new Person(name, ranking, phNum, email, wana_play, wana_share_loc ));
  form.reset();
}
//Function for error catching
 
document.getElementById('form').addEventListener('submit', sign_up);
