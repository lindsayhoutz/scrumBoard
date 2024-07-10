var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var del = document.getElementById("delete")
var sbmtBtn = document.getElementById("sbmt")
var stckytxt = document.getElementsByClassName("stickytext")
var notes =  document.getElementsByClassName("noteContainer")
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
    sbmtBtn.style.display = "none";
    
  }
}

sbmtBtn.addEventListener("click", addElement);
 num = allNotes.lenght;

function addElement() {
  modal.style.display = "none";
 
  console.log(allNotes.length)
const para = document.createElement("div");
para.setAttribute("id", "drag1") ;
para.setAttribute("class", "box note border");
para.setAttribute("ondragstart", "drag(event)");
para.setAttribute("draggable", "true");
para.setAttribute("id", allNotes.length)
const node = document.createTextNode(num + noteTxt.value);
para.appendChild(node);
const element = document.getElementById("noteContainer");
element.appendChild(para);
allNotes.push(noteTxt.value);
console.log(allNotes)
}
del.addEventListener("click", removeElement);
function removeElement(){
delete allNotes[0]
}


function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
