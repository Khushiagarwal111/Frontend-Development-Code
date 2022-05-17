//color picker

const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];
const h1 = document.querySelector("h1");
const p = document.querySelector("p");
const container = document.querySelector(".container");


const changeColor = function() {
    console.log(this);
    p.style.color = this.style.backgroundColor;

};
for (let color of colors) {
    const colorBox = document.createElement("div");
    colorBox.style.backgroundColor = color;
    colorBox.classList.add("box");

    container.appendChild(colorBox);
    colorBox.addEventListener("click", changeColor);
}