const inputBox = document.getElementById("input-box");
const listCont = document.getElementById("list-cont");

function btn_add() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete-btn"; 
    deleteButton.textContent = "X";
    deleteButton.style.cursor = "pointer";

    deleteButton.addEventListener("click", function () {
      listCont.removeChild(li); 
    });

    li.appendChild(deleteButton);

    listCont.appendChild(li);
  }

  inputBox.value = "";
}
