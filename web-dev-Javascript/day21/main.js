let btn = document.querySelector("button");
console.dir(btn)
btn.onclick = function() {
    console.log("You have single clicked");
}
btn.onmouseover = function() {
        console.log("Your pointer is over the button");

    } //onclick is property of buton
btn.onclick = function() {
    console.log(" you r clicking the button")
}
let btn = document.querySelector(".btn");
btn.addEventListener('click', function() {
    console.log("helllllooooooooooooo");
});