let img = document.querySelectorAll("img");
let playground = document.querySelector(".playground");

img.forEach(function (char) {
  char.addEventListener("click", function () {
    let top = Math.floor(Math.random() * 100);
    let left = Math.floor(Math.random() * 100);
    let rot = Math.floor(Math.random() * 360);
    let link = char.getAttribute("src");
    let newImg = document.createElement("img");
    newImg.setAttribute("src", link);
    newImg.style.position = "absolute";
    newImg.style.top = top + "%";
    newImg.style.left = left + "%";
    newImg.style.rotate = rot + "deg";
    playground.appendChild(newImg);
  });
});
