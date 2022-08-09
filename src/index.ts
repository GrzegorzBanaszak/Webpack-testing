import "./styles/main.scss";

class Calculator {
  themeType: string = "theme-1";
  toggles: Element[];
  appContainer: Element;
  constructor() {
    this.toggles = Array.from(document.getElementById("toggle").children);
    this.appContainer = document.querySelector("#app");
    this.setToggleClick();
  }

  setToggleClick() {
    this.toggles.forEach((element, i) => {
      element.addEventListener("click", () => {
        this.appContainer.classList.remove(this.themeType);
        this.appContainer.classList.add(`theme-${i + 1}`);
        this.themeType = `theme-${i + 1}`;
      });
    });
  }
}

new Calculator();
