let x = 0;
let y = 0;
let img = document.querySelector("img");
let r = 0;

document.addEventListener("keydown", function (d) {
  if (d.code == "ArrowRight") {
    x = x + 10;
    // img.style.left = x+"px"
  }
  if (d.code == "ArrowLeft") {
    x = x - 10;
    // img.style.left = x+"px"
  }
  if (d.code == "ArrowUp") {
    y = y - 10;
    // img.style.top = y+"px"
  }
  if (d.code == "ArrowDown") {
    y = y + 10;
    // img.style.top = y+"px"
  }
  if (d.code == "KeyR") {
    r += 10;
  }
  img.style.left = x + "px";
  img.style.top = y + "px";
  img.style.rotate = r + "deg";
});
