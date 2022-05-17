/* const ul=document.querySelector('ul')
ul.innerText

const form=document.querySelector('form')
form.textContent


 */
const li = document.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
    li[i].innerText = "We are learning Dom";
}

for (let l of li) {
    // l.innerHTML = "We are learning <b>DOM<b>";
    l.innerText = "We are learning DOM";
}

function toggle() {
    let para = document.querySelector(".para");
    if (para.style.display != "none") {
        // it's visible
        para.style.display = "none";
    } else {
        para.style.display = "block";
    }
}

const para1 = document.querySelector("#para1");
para1.addEventListener("mouseover", function hover() {
    console.log("Mouse Over"); // (2 parameters 1. event name 2 callback function)
});
para1.addEventListener("mouseout", function hoverout() {
    console.log("Mouse Out");
});
para1.addEventListener("mouseup", function mouseUp() {
    console.log("Mouse up");
});
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", function clickMe() {
    console.log("I was Clicked");
});

// ----------------
// Day 15 starts here

const head3 = document.createElement("h3"); // create a h3 element
head3.innerText = "I love playing Guitar";
head3.classList.add("main");

//appendchild
const section = document.querySelector("section");
//parent - section
//child- h3
//appendchild is a method that we call on the parent that we want to append an element into
//when we append an element , we append it to the end of the children
section.appendChild(head3);
//parent.appendChild(child) // appending the child to the parent
//append

const newImage = document.createElement("img");
newImage.src =
    "https://images.pexels.com/photos/290660/pexels-photo-290660.jpeg?cs=srgb&dl=pexels-pixabay-290660.jpg&fm=jpg";
newImage.style.width = "600px";
const newImage2 = document.createElement("img");
newImage2.src =
    "https://images.pexels.com/photos/1010518/pexels-photo-1010518.jpeg?cs=srgb&dl=pexels-jessica-lewis-creative-1010518.jpg&fm=jpg";
newImage2.style.width = "600px";

document.body.appendChild(newImage);
document.body.prepend(newImage2); //inserts nodes after the first child of the first node

const newLink = document.createElement("a");
newLink.innerText = "My Song, pls subscribe";
newLink.href = "https://www.youtube.com/channel/UCgcuR0-7R80IZMQSxcdQenQ";

//para1.appendChild(newLink);
//para1.append("Gargiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii");
para1.append(newLink); //inserts nodes after the last child of the first node

//par1.appendChild(newLink);
//para1.append

//for remove  child u have to write parnts name also