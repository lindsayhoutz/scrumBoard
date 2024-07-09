var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

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
document.querySelectorAll('.btn').forEach(buttonElement => {
    const button = bootstrap.Button.getOrCreateInstance(buttonElement)
    button.toggle()
  })

  const draggable = document.getElementById('draggable');
  const droppable = document.getElementById('droppable');

  draggable.addEventListener('dragstart', (event) => {
    event.dataTransfer.setData('text/plain', 'This is the data');
  });

  droppable.addEventListener('dragover', (event) => {
    event.preventDefault();
  });

  droppable.addEventListener('drop', (event) => {
    const data = event.dataTransfer.getData('text/plain');
    console.log(data);
  })