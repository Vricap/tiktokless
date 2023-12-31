const iframe = document.getElementById("content-frame");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector(".form");

// parse slice format from go to array javasript
source = source.replace(/\[|\]/g, "").split(" ");
// we will render the video from the back (the newest).
let counter = source.length - 1;

// render next video
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter > 0) {
    counter -= 1;
    iframe.src = source[counter];
  }
});

// render previous video
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter < source.length - 1) {
    counter += 1;
    iframe.src = source[counter];
  }
});

// add video
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  form.classList.toggle("unactive");
});
