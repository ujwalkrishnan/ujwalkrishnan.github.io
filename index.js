const product = document.querySelectorAll(".product");
const circle = document.querySelector(".scroll-progress");

window.onscroll = function () {
  const element = document.querySelector(".header");

  let progress =
    (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
  circle.innerText = Math.round(progress) + "%";

  if (window.scrollY > 10) {
    element.classList.add("posColor");
  } else {
    element.classList.remove("posColor");
  }
};

window.addEventListener("scroll", scroller);

function scroller() {
  const size = (window.innerHeight / 5) * 4;

  product.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < size) {
      box.classList.add("scroll");
    } else {
      box.classList.remove("scroll");
    }
  });
}
