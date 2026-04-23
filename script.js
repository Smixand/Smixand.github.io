const video = document.querySelector(".mainpic");
const options = document.querySelector(".options");

options.style.display = "none";

video.addEventListener("ended", () => {
  options.style.display = "flex";
});
