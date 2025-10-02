let form = document.querySelector("form");
let pass = document.querySelector("#password");
let email = document.querySelector("#email");
let success = document.querySelector("#success")

form.addEventListener("submit", function (dets) {
  dets.preventDefault();

  document.querySelector("#mailError").style.display = "none";
  document.querySelector("#passError").style.display = "none";

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])(?!.*\s).{8,32}$/;

  let emailAns = emailRegex.test(email.value);
  let passAns = passRegex.test(pass.value);

  isValid = true;

  if (!emailAns) {
    document.querySelector("#mailError").style.display = "initial";
    success.style.display = "none";
    isValid = false;
  }
  if (!passAns) {
    document.querySelector("#passError").style.display = "initial";
    success.style.display = "none";
    isValid = false;
  }

  if (isValid) {
    success.style.display = "initial";
    success.style.color = "green";
  }
});
