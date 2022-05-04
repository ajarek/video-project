const preloader = document.querySelector(".preloader") as HTMLDivElement;
const video = document.querySelector(".video-container") as HTMLVideoElement;
const btn = document.querySelector(".switch-btn") as HTMLButtonElement;
window.addEventListener("load", function () {
  preloader.classList.add("hide-preloader");
});
btn.addEventListener("click", function () {
  if (!btn.classList.contains("slide")) {
    btn.classList.add("slide");
    video.pause();
  } else {
    btn.classList.remove("slide");
    video.play();
  }
});
