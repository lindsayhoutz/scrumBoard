let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let delmodal = document.getElementById("delModal")
let del = document.getElementById("del")
let sbmtBtn = document.getElementById("sbmt")
let deltxt = document.getElementById("delTxt")
let resetBtn = document.getElementById("Reset")
let notes =  document.getElementsByClassName("noteContainer")
const noteTxt = document.querySelector('#stickytext')
const allNotes = ["placeholder",]
let crtTxt = document.getElementById("createTxt")
let storedNotes = []
window.onload = function (){
  var storedNotes = JSON.parse(localStorage.getItem("Notes"))
  console.log(storedNotes)
  for( i = 1; i < storedNotes.length; i++){
    const noteElement = document.createElement("div");
noteElement.setAttribute("id", "drag1") ;
noteElement.setAttribute("class", "box note border");
noteElement.setAttribute("ondragstart", "drag(event)");
noteElement.setAttribute("draggable", "true");
noteElement.setAttribute("id", i)
const node = document.createTextNode(i + ". " + storedNotes[i]);
noteElement.appendChild(node);
const element = document.getElementById("noteContainer");
element.appendChild(noteElement);
allNotes.push(storedNotes[i]);
localStorage.setItem("Notes", JSON.stringify(allNotes))
console.log(allNotes)
  } 
}



btn.onclick = function() {
  modal.style.display = "block";
  delmodal.style.display = "none";
  sbmtBtn.style.display = "block";
  crtTxt.style.display = "block";
  deltxt.style.display = "none";
}
span.onclick = function() {
  modal.style.display = "none";
 
}
delmodal.onclick = function(){
  modal.style.display = "none";
  num = Number(noteTxt.value);
  const htmlElement = document.getElementById(noteTxt.value);
  var idChange = document.getElementById((num) + 1)
  console.log(idChange)
  console.log(num)
  htmlElement.remove();
  allNotes.splice(noteTxt.value, 1)
  for(i=noteTxt.value; i<allNotes.length; i++){
   
    idChange.id = i;
    console.log(idChange);
    
 }
 localStorage.setItem("Notes", JSON.stringify(allNotes))
window.location.reload()
}
del.onclick = function(){
  modal.style.display = "block";
  sbmtBtn.style.display = "none";
  delmodal.style.display = "block";
  crtTxt.style.display = "none";
  deltxt.style.display = "block";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    sbmtBtn.style.display = "none";
    
  }
}
console.log(allNotes.length)
sbmtBtn.addEventListener("click", addElement);


function addElement() {
  modal.style.display = "none";
 
  console.log(allNotes.length)
const noteElement = document.createElement("div");
noteElement.setAttribute("id", "drag1") ;
noteElement.setAttribute("class", "box note border");
noteElement.setAttribute("ondragstart", "drag(event)");
noteElement.setAttribute("draggable", "true");
noteElement.setAttribute("id", allNotes.length)
const node = document.createTextNode(allNotes.length + ". " + noteTxt.value);
noteElement.appendChild(node);
const element = document.getElementById("noteContainer");
element.appendChild(noteElement);
allNotes.push(noteTxt.value);
localStorage.setItem("Notes", JSON.stringify(allNotes))
console.log(allNotes)
}



function allowDrop(ev) {
    ev.preventDefault();
  } 
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

resetBtn.onclick = function(){
  localStorage.clear()
  window.location.reload()
}