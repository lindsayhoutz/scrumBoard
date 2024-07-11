var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var delmodal = document.getElementById("delModal")
var del = document.getElementById("del")
var sbmtBtn = document.getElementById("sbmt")
var deltxt = document.getElementById("delTxt")
var resetBtn = document.getElementById("Reset")
var notes =  document.getElementsByClassName("noteContainer")
const noteTxt = document.querySelector('#stickytext')
const allNotes = ["placeholder",]
var crtTxt = document.getElementById("createTxt")
var storedNotes = []
window.onload = function (){
  console.log(1)
  var storedNotes = JSON.parse(localStorage.getItem("Notes"))
  console.log(storedNotes)
  for( i = 1; i < storedNotes.length; i++){
    const para = document.createElement("div");
para.setAttribute("id", "drag1") ;
para.setAttribute("class", "box note border");
para.setAttribute("ondragstart", "drag(event)");
para.setAttribute("draggable", "true");
para.setAttribute("id", i)
const node = document.createTextNode(i + ". " + storedNotes[i]);
para.appendChild(node);
const element = document.getElementById("noteContainer");
element.appendChild(para);
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
const para = document.createElement("div");
para.setAttribute("id", "drag1") ;
para.setAttribute("class", "box note border");
para.setAttribute("ondragstart", "drag(event)");
para.setAttribute("draggable", "true");
para.setAttribute("id", allNotes.length)
const node = document.createTextNode(allNotes.length + ". " + noteTxt.value);
para.appendChild(node);
const element = document.getElementById("noteContainer");
element.appendChild(para);
allNotes.push(noteTxt.value);
localStorage.setItem("Notes", JSON.stringify(allNotes))
console.log(allNotes)
}
del.addEventListener("click", removeElement);
function removeElement(){

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
resetBtn.onclick = function(){
  localStorage.clear()
}