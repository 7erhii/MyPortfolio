const skillButtons = document.querySelectorAll(".about-btn-js");
const skillsBtnContainer = document.querySelector(".about__btns");
const skillsDescriptionContainer = document.querySelector(".about__descr");
const skillDescriptions = document.querySelectorAll(".about__descr-item");
const skillsSectionContainer = document.querySelector(".about__skills");
const fullDescription = document.querySelector(".about__descr-item--full");
const closeFullDescriptionBtn = document.querySelector(".about__descr-item-close");

skillButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    if (index < skillButtons.length - 1) {
      fullDescription.classList.remove("showed-grid");
      console.log(`Button with index ${index} clicked`);
      const offsetY = skillsSectionContainer.offsetHeight;

      skillsBtnContainer.style.transition = "transform 0.3s ease";
      skillsDescriptionContainer.style.transition = "transform 0.3s ease";

      skillsBtnContainer.style.transform = `translateY(-${offsetY}px)`;
      skillsDescriptionContainer.style.transform = `translateY(-${offsetY}px)`;

      setTimeout(() => {
        skillsBtnContainer.style.transform = "";
        skillsDescriptionContainer.style.transform = "";
      }, 4000);
    }
    if (index === skillButtons.length - 1) {
      fullDescription.classList.toggle("showed-grid");
    }

    skillDescriptions.forEach((desc, descIndex) => {
      if (descIndex === index) {
        desc.classList.add("showed");
      } else {
        desc.classList.remove("showed");
      }
    });
  });
});

closeFullDescriptionBtn.addEventListener("click", () => {
  fullDescription.classList.remove("showed-grid");
});
