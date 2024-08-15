let input = document.querySelector(".button");
let output = document.querySelector(".main-title");
let buttonText = document.querySelector(".button-text");
let count = 1;
let one = "1.22";
let two = "8.87";
let three = "15.02";

output.innerHTML = "5.73";

input.addEventListener("click", () => {
    if (count === 1) {
        loading();
        count++;
        setTimeout(() => {output.innerHTML = one;}, 1000)
    } else if (count === 2) {
        loading();
        count++;
        setTimeout(() => {output.innerHTML = two;}, 1000)
    } else if (count === 3) {
        loading();
        setTimeout(() => {output.innerHTML = three;}, 1000)
    }
}, 2000)



function loading () {
    buttonText.innerHTML = '';
    buttonText.innerHTML = "<img class=\"loading\" alt=\"\" src=\"./img/loading.png\">";
    setTimeout(() => {buttonText.innerHTML = "Check";}, 1000)
}
