let inputField = document.getElementById("input-field");
let listContainer = document.getElementById("task-container");

let editText = null;

function add() {
    if (inputField.value === '') {
        alert("Please write your task");
    } else {
        if (editText) {
            editText.firstChild.textContent = inputField.value;
            editText = null; 
        } else {
            let li = document.createElement("li");
            li.textContent = inputField.value;

            let span = document.createElement("span");
            span.innerHTML = "\u00d7";
            span.classList.add("span");
            li.appendChild(span);

            let editBtn = document.createElement("span");
            editBtn.innerHTML = "\u270E";
            editBtn.classList.add("edit");
            li.appendChild(editBtn);

            listContainer.appendChild(li);
        }
        inputField.value = ""; 
    }
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("done");
    } else if (e.target.classList.contains("span")) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains("edit")) {
        inputField.value = e.target.parentElement.firstChild.textContent;
        editText = e.target.parentElement;
    }
});
