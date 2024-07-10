var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var del = document.getElementsByClassName("delete")
var sbmtBtn = document.getElementById("sbmt")
var stckytxt = document.getElementsByClassName("stickytext")
var notes =  document.getElementsByClassName("note-container")
const noteTxt = document.querySelector('#stickytext')

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

const para = document.createElement("p");
const node = document.createTextNode(noteTxt.value);
para.appendChild(node);
const element = document.getElementById("note-container");
element.appendChild(para);
}
