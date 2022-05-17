// day15 startes here
const head3 = document.createElement("h3");
head3.innerText(" i love playing guitar");
head3.classList.add("khushiiiiii");



//appendchild
const section = document.querySelector("section");
//parent-section
//child h3
//appendchild is the method that we call on the parent that we want to 
//append an element into
// whn we append an aelement we append it to the end of the system.
section.appendChild(head3); // no quotion as its a variable
//parent.append(child3) //appending the childto the parents section
//append
const newImage = document.createElement('img');
newImage.src = "https://images.pexels.com/photos/2156327/pexels-photo-2156327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
newImage.style.width = "600px";
document.body.appendChild(newImage);
const newLink = document.createElement("a");
newLink.innerText = "My Song ";
newImage2.src = "https://www.pexels.com/photo/black-electric-guitar-on-guitar-stand-in-front-black-garment-2909367/"
newImage.style.width = "600px";
newLink.href = "https://www.youtube.com/channel/UCgcuR0-7R80IZMQSxcdQenQ"; //para1.appendChild(newLink);
//para1.appendChold(newLink);
para1.append(newLink);
document.body.prependChild(para1);