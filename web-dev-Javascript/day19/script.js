const input = document.querySelector("#input ");
const btn = document.querySelector("#btn");
const todos = document.querySelector(".todos");


btn.addEventListener("click", function() {
    let para = document.createElement('p');
    para.classList.add("para")
    para.innerText = input.value;
    todos.appendChild(para);
    input.value = "";

    // para.addEventListener("click", function() {
    //     para.style.textDecoration = "line-through";
    // });

    para.addEventListener("dblclick", function() {
        para.remove();
    });
});
// const img = document.querySelector("#image");