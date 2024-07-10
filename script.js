var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var del = document.getElementById("delete")
var sbmtBtn = document.getElementById("sbmt")
var stckytxt = document.getElementsByClassName("stickytext")
var notes =  document.getElementsByClassName("note-container")
const noteTxt = document.querySelector('#stickytext')
const allNotes = []
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

sbmtBtn.addEventListener("click", addElement);


function addElement() {
  modal.style.display = "none";
const para = document.createElement("p");
const node = document.createTextNode(noteTxt.value);
para.appendChild(node);
const element = document.getElementById("note-container");
element.appendChild(para);
allNotes.push(noteTxt.value);
console.log(allNotes)
}
del.addEventListener("click", removeElement);
function removeElement(){
delete allNotes[0]
}
