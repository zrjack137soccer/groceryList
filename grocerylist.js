var j = 0;
function addItem(item) {
    //if entry is blank
    if (item === "") {
     alert("Enter an item!");
    }
    else {
    var ul = document.getElementById("groceryList");
    //create new bullet and assign the entry
    var li = document.createElement('li');
    li.id = "id" + j++;
    li.innerHTML = item;
    //add bullet to list
    ul.appendChild(li);
    //set click listener to bullet
   document.getElementById(li.id).addEventListener("click", changeColor);
    }
    
}

function removeItem(id) {
    var item = document.getElementById(this.id);
    //remove item when done
    item.parentNode.removeChild(item);
}

function changeColor() {
    var item = document.getElementById(this.id);
    //remove item when done
    //item.parentNode.removeChild(item);
  if(item.className === "done") {
      item.className = "urgent";
  }
  else if (item.className === "urgent") {
      item.className = "li";
  }
  else {
      item.className = "done";
  }
}