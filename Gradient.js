var input1 = document.getElementsByClassName("color1")[0];
var input2 = document.getElementsByClassName("color2")[0];
var body = document.getElementsByTagName("body")[0];
var css = document.getElementsByTagName("h3")


function ChangeColor() {
    var color1 = input1.value;
    var color2 = input2.value;
    body.style.background = "linear-gradient(to right, " + color1 + "," + color2 + ")";
    css.textContent = "linear-gradient(to right, " + color1 + "," + color2 + ")";
}

input1.addEventListener("input", ChangeColor);
input2.addEventListener("input", ChangeColor);



