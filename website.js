//hello
var ListAlert = 0;
var listamount = 7;
var popup = 4;
function SetList() {
  if ((ListAlert === 0)||(ListAlert == 1)||(ListAlert == 2)||(ListAlert == 3)) {
    var UserInput = document.getElementById('UserInput').value;
    var CreateList = document.createElement('li');
    var UserInfo = document.createTextNode(UserInput);
    CreateList.appendChild(UserInfo);
    var inputIntoUnOrdered = document.getElementsByTagName('ol')[0];
    inputIntoUnOrdered.appendChild(CreateList);
    ListAlert+=1;
  }
  else if ((ListAlert == 4)||(ListAlert == 5)||(ListAlert == 6)) {
    UserInput = document.getElementById('UserInput').value;
    CreateList = document.createElement('li');
    UserInfo = document.createTextNode(UserInput);
    CreateList.appendChild(UserInfo);
    inputIntoUnOrdered = document.getElementsByTagName('ol')[0];
    inputIntoUnOrdered.appendChild(CreateList);
    ListAlert+=1;
    window.alert("Don't Play Games");
  }
  else {
    window.alert("This Is The Max!");
  }
}

function removeOne() {
  var hey = document.getElementById('UserInput').value;
  var stupidKid = document.getElementsByTagName('li')[hey-1];
  var hana = stupidKid.parentNode;
  hana.removeChild(stupidKid);
  ListAlert-=1;
  if (ListAlert > 0) {
    window.alert("EASY MONEY");
  }
  else {
    window.alert("DONE GO PLAY A GAME!");
  }
}