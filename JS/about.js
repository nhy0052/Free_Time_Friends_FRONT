const inputBTN = document.querySelector(".inputBTN");
const devBTM = document.querySelector(".devBTN");

const intro = document.querySelector(".intro");
const dev = document.querySelector(".developers");

function clickInput() {
  console.log("input click");
  devBTM.classList.remove("show");
  inputBTN.classList.add("show");
  intro.classList.remove("hidden");
  dev.classList.add("hidden");
};

function clickDev() {
  console.log("dev click");
  inputBTN.classList.remove("show");
  devBTM.classList.add("show");
  intro.classList.add("hidden");
  dev.classList.remove("hidden");
};


inputBTN.addEventListener("click", clickInput);
devBTM.addEventListener("click", clickDev);
