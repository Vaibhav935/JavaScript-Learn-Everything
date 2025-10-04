let downloadButton = document.querySelector(".download-button");
let progress = document.querySelector(".progress-bar");
let percent = document.querySelector(".percent");
let cancel = document.querySelector(".cancel");
let resume = document.querySelector(".resume");
let heading = document.querySelector("h2");
let seconds = 3;
let start;
let flag = 0;
let count = 0;

function startDownload() {
  clearInterval(start);
  heading.innerHTML = "Downloading...";
  heading.style.color = "white";
  start = setInterval(function () {
    console.log("start ke andar");

    if (count <= 99) {
      count++;
      progress.style.width = `${count}%`;
      percent.textContent = `${count}%`;
    } else {
      heading.innerHTML = "Downloaded";
      heading.style.color = "green";
      clearInterval(start);
    }
  }, (seconds * 1000) / 100);
}
function cancelDownload() {
  heading.innerHTML = "Cancelled";
  heading.style.color = "red";
  clearInterval(start);
  count = 0;
  progress.style.width = `0%`;
  percent.textContent = `0%`;
  resume.innerHTML = '<i class="ri-play-mini-fill"></i>';
  flag = 0;
}

downloadButton.addEventListener("click", function () {
  startDownload();
});

cancel.addEventListener("click", function () {
  cancelDownload();
});

resume.addEventListener("click", function () {
  if (flag == 0) {
    resume.innerHTML = '<i class="ri-pause-mini-line"></i>';
    progress.style.width = `${count}%`;
    percent.textContent = `${count}%`;
    clearInterval(start);
    flag = 1;
  } else {
    resume.innerHTML = '<i class="ri-play-mini-fill"></i>';
    startDownload();
    flag = 0;
  }
});
