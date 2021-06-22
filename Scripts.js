let itemlist = document.getElementById("itemList");

let form = document.getElementById("subDiv");

form.addEventListener("submit", additem);

let items = document.querySelectorAll(".X");

items.forEach(addEventListener("click", removeItem));

function additem(e) {
  e.preventDefault();
  let addInput = document.getElementById("addInput").value;
  let li = document.createElement("li");
  li.className = "item";
  li.appendChild(document.createTextNode(addInput));
  console.log(li);

  let BTN = document.createElement("button");
  BTN.className = "X delete";
  BTN.appendChild(document.createTextNode("X"));

  li.appendChild(BTN);

  itemlist.appendChild(li);
}

function removeItem(e) {
  //   if (e.target.classlist.contains("delete")) {
  // //     if (confirm("Are you sure?")) {
  // //       let li = e.target.parentElement;
  // //       itemlist.removeChild(li);
  // //     }
  // //   }
  console.log(1);
}
