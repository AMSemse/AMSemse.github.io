const nappi = document.getElementById("addBtn");
nappi.addEventListener("click", myFunction);

const poistoNappi = document.getElementById("removeBtn");
poistoNappi.addEventListener("click", removeFunction);

const ul = document.querySelector("#unorderedList");

let currentList = [];

load();
//let input;
//let ulTyped;

function myFunction() {
    input = document.getElementById("input").value;
    //console.log(input);
    currentList.push(input + "Poista");
    localStorage.setItem("listItems", JSON.stringify(currentList));

    let li = document.createElement("li");
    li.setAttribute("class", "list-group-item");
    li.setAttribute("value", input);

    let btn = document.createElement("button");
    btn.setAttribute("class", "btn btn-danger");
    btn.innerText = "Poista"
    btn.addEventListener("click", removeBtnFunction);

    li.innerText = input;

    li.appendChild(btn);
    ul.appendChild(li);

    console.log(localStorage.getItem("listItems"));
    //console.log(currentList);
}

function removeFunction() {
    const index = currentList.findIndex(e => e == ul.lastElementChild.innerText);
    currentList.splice(index, 1);
    ul.removeChild(ul.lastElementChild);
    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("listItems", JSON.stringify(currentList));
    }

    console.log(localStorage.getItem("listItems"));
}
function removeBtnFunction() {
    let index = currentList.findIndex(e => e == this.parentNode.innerText);
    currentList.splice(index, 1)
    this.parentNode.remove();

    if (typeof (Storage) !== "undefined") {
        localStorage.setItem("listItems", JSON.stringify(currentList));
    }

    console.log(localStorage.getItem("listItems"));
    //console.log(this.parentNode.value);
}

function load() {
    if (typeof (Storage) !== "undefined") {
        let savedItems = JSON.parse(localStorage.getItem("listItems"));
        savedItems.forEach(e => {
            let li = document.createElement("li");
            li.setAttribute("class", "list-group-item");
            li.setAttribute("value", e);

            let btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-danger");
            btn.innerText = "Poista"
            btn.addEventListener("click", removeBtnFunction);

            li.innerText = e.replace("Poista", "");

            li.appendChild(btn);
            ul.appendChild(li);

            console.log(localStorage.getItem("listItems"));

        });
        currentList = savedItems;
    }
};