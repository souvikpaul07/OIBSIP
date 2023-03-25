let form = document.querySelector("#newTasks");
let input = document.querySelector("#new-task-input");
let list = document.querySelector("#tasks");
form.addEventListener("submit", (e) => {
  // console.log("hi");
  e.preventDefault();
  let task = input.value;
  let task_el = document.createElement("div");
  task_el.classList.add("task");
  let content_el = document.createElement("div");
  content_el.classList.add("content");
  let task_input = document.createElement("input");
  task_input.classList.add("text");
  task_input.setAttribute("readonly", "readonly");
  task_input.value = input.value;
  content_el.appendChild(task_input);
  task_el.appendChild(content_el);

  let action = document.createElement("div");
  action.classList.add("actions");

  let edit = document.createElement("button");
  edit.classList.add("edit");
  edit.innerText = "Edit";
  action.appendChild(edit);

  let deletee = document.createElement("button");
  deletee.classList.add("delete");
  deletee.innerText = "Delete";
  action.appendChild(deletee);

  let done = document.createElement("button");
  done.classList.add("done");
  done.innerText = "Done";
  action.appendChild(done);

  task_el.appendChild(action);

  //   task_el.innerHTML = task;
  list.appendChild(task_el);

  input.value = "";
  edit.addEventListener("click", () => {
    if (edit.innerHTML == "Edit") {
      task_input.removeAttribute("readonly");
      task_input.classList.add("qwe");
      edit.innerHTML = "SAVE";
    } else {
      task_input.setAttribute("readonly", "readonly");
      edit.innerHTML = "Edit";
      task_input.classList.remove("qwe");
    }
  });
  deletee.addEventListener("click", () => {
    list.removeChild(task_el);
  });

  done.addEventListener("click", () => {
    task_el.classList.add("strike");
  });
});