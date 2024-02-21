let greetingButton = document.querySelector(".greeting");
let aboutBody = document.querySelector(".aboutBody");

greetingButton.onclick = function() {
    let para = document.createElement("p");
    para.innerHTML = "hello";
    console.log(para);
    aboutBody.appendChild(para);
}