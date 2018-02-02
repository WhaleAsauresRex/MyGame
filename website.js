//hello
function SetList() {
  var UserInput= document.getElementById('UserInput').value;
  var CreateList = document.createElement('li');
  var UserInfo = document.createTextNode(UserInput);
  CreateList.appendChild(UserInfo);
  var inputIntoUnOrdered = document.getElementsByTagName('ol')[0];
  inputIntoUnOrdered.appendChild(CreateList);
}