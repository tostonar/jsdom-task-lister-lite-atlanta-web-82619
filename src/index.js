document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('#create-task-form');
  const task = document.querySelector('#new-task-description');
  const list = document.querySelector('#tasks');
 
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newTask = task.value;
    console.log(newTask);
    const li = document.createElement("li");
    li.innerText =  newTask;
    list.appendChild(li);
    const deleteInput = document.createElement("input");
    deleteInput.setAttribute('type', 'button');
    deleteInput.setAttribute("value", "X");
    deleteInput.setAttribute("id", "deleteButton");
    deleteInput.addEventListener('click', function(e) {
      li.parentNode.removeChild(li);
    }, false);
    
    li.appendChild(deleteInput);
    form.reset();
  });

});
