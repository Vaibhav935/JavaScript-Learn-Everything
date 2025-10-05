let btn = document.querySelector("button");
let body = document.querySelector("body");
// window.matchMedia('(prefers-color-scheme: dark)').matches
function setDarkOrLight() {
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    body.classList.remove("light");
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
  }
}
// setDarkOrLight();   // same

if (localStorage.getItem("theme")) {
  // body.className = ""  // same
  body.classList.add(localStorage.getItem("theme"));
} else {
  setDarkOrLight();
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", function () {
    if (!localStorage.getItem("theme")) {
      setDarkOrLight();
    }
  });

btn.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");

    localStorage.setItem("theme", "light");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");

    localStorage.setItem("theme", "dark");
  }
});
