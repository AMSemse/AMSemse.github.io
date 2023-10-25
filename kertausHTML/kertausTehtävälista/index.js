const nappi = document.getElementById("btn");
nappi.addEventListener("click", myFunction);

function myFunction() {
    let input = document.getElementById("input").value;
    let list = document.getElementById("ulTyped");

    let ul = document.createElement("ul");
    ul.setAttribute("");

    document.getElementById("renderList").appendChild(ul);

    function renderProductList(element, index, arr) {
        let li = document.createElement("li");
        li.setAttribute("");

        ul.appendChild(li);

        li.innerHTML = li.innerHTML + element;
    }

}