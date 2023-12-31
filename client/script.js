const iframe = document.getElementById("content-frame");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const addBtn = document.querySelector(".addBtn");
const form = document.querySelector(".form");
const indexInfo = document.querySelector(".index-info");
const indexForm = document.querySelector(".index-form");

// parse slice format from go to array javasript
source = source.replace(/\[|\]/g, "").split(" ");
// we will render the video from the back (the newest).
let counter = source.length - 1;
let indexConter = 1;
indexInfo.textContent = `Videos ${indexConter} of ${source.length}`;

// render next video
nextBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter > 0) {
    counter--;
    indexConter++;
    indexInfo.textContent = `Videos ${indexConter} of ${source.length}`;
    iframe.src = source[counter];
  }
});

// render previous video
prevBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (counter < source.length - 1) {
    counter++;
    indexConter--;
    indexInfo.textContent = `Videos ${indexConter} of ${source.length}`;
    iframe.src = source[counter];
  }
});

// add video
addBtn.addEventListener("click", (e) => {
  e.preventDefault();

  form.classList.toggle("unactive");
});

// indexing
indexInfo.addEventListener("click", (e) => {
  e.preventDefault();

  indexForm.classList.toggle("unactive");
});

function goTo() {
  indexValue = parseInt(indexForm.querySelector('input[type="text"]').value);
  if (isNaN(indexValue)) return;
  if (indexValue > source.length || indexValue <= 0) return;

  let index = source.length - indexValue;
  iframe.src = source[index];

  indexConter = indexValue;
  indexInfo.textContent = `Videos ${indexConter} of ${source.length}`;
  counter = index;
}
