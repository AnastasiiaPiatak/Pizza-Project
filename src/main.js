// ACCORDION

const accItem = document.querySelectorAll(".accordion__item");

accItem.forEach(function (element) {
  element.addEventListener("click", showAccText);
});

function showAccText() {
  this.nextElementSibling.classList.toggle("hidden");
  this.lastElementChild.classList.toggle("rotate90");
}

// DROPDOWN
const optionMenu = document.querySelector(".order__main-cartOrder-dropdown"),
  selectBtn = optionMenu.querySelector(".select__btn"),
  options = optionMenu.querySelectorAll(".option"),
  btnText = document.querySelector(".select__btnText");

selectBtn.addEventListener("click", () =>
  optionMenu.classList.toggle("active")
);

options.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".options__text").innerText;
    btnText.innerText = selectedOption;
    optionMenu.classList.remove("active");
  });
});

const optionMenuS = document.querySelector(".order__main-cartOrder-size"),
  selectBtnS = optionMenuS.querySelector(".size__select-btn"),
  optionsS = optionMenuS.querySelectorAll(".size__option"),
  btnTextS = document.querySelector(".size__select-btnText");

selectBtnS.addEventListener("click", () =>
  optionMenuS.classList.toggle("active")
);

optionsS.forEach((option) => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".size__options-text").innerText;
    btnTextS.innerText = selectedOption;
    optionMenuS.classList.remove("active");
  });
});

//  QUANTITY
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const quantity = document.querySelector(".quantity");

let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  quantity.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    quantity.innerText = a;
  }
});
