const buttons = document.querySelectorAll(".about-btn-js");
const btnsContainer = document.querySelector(".about__btns") as HTMLElement;
const descrContainer = document.querySelector(".about__descr") as HTMLElement;
const descrItems = document.querySelectorAll(".about__descr-item");
const skillsContainer = document.querySelector(".about__skills") as HTMLElement;
const descrAll = document.querySelector(".about__descr-item--full");
const closeAllDesrcBtn = document.querySelector(".about__descr-item-close");

buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < buttons.length - 1) {
      descrAll.classList.remove("showed-grid");

      console.log(`Нажата кнопка с индексом ${index}`);

      const offsetY = skillsContainer.offsetHeight;

      btnsContainer.style.transition = "transform 0.3s ease";
      descrContainer.style.transition = "transform 0.3s ease";

      btnsContainer.style.transform = `translateY(-${offsetY}px)`;
      descrContainer.style.transform = `translateY(-${offsetY}px)`;

      setTimeout(() => {
        btnsContainer.style.transform = "";
        descrContainer.style.transform = "";
      }, 4000);
    }
    if (index === 3) {
      descrAll.classList.toggle("showed-grid");
    }

    descrItems.forEach((item, itemIndex) => {
      if (itemIndex === index) {
        item.classList.add("showed");
      } else {
        item.classList.remove("showed");
      }
    });
  });
});

closeAllDesrcBtn.addEventListener("click", () => {
  descrAll.classList.remove("showed-grid");
});

