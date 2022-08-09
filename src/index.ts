import "./styles/main.scss";

class Calculator {
  themeType: string = "theme-1";
  toggles: Element[];
  appContainer: Element;
  inputs: Element[];
  constructor() {
    this.toggles = Array.from(document.getElementById("toggle").children);
    this.appContainer = document.querySelector("#app");
    this.inputs = Array.from(document.querySelectorAll(".input"));
    this.setToggleClick();
    this.setInputsClick();
    console.log(this.inputs);
  }

  setInputsClick() {
    this.inputs.forEach((input) => {
      input.addEventListener("click", () => {
        console.log(input.getAttribute("data-value"));
      });
    });
  }
  setToggleClick() {
    this.toggles.forEach((element, i) => {
      element.addEventListener("click", () => {
        this.changeContainerTheme(i);
        this.toggleRemoveActiveClasse();
        element.classList.add("active");
      });
    });
  }
  toggleRemoveActiveClasse() {
    this.toggles.forEach((ele) => ele.classList.remove("active"));
  }

  changeContainerTheme(numberType: number) {
    this.appContainer.classList.remove(this.themeType);
    this.appContainer.classList.add(`theme-${numberType + 1}`);
    this.themeType = `theme-${numberType + 1}`;
  }
}

new Calculator();
