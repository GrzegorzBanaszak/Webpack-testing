import "./styles/main.scss";

enum ValueType {
  first,
  second,
}

class Calculator {
  themeType: string = "theme-1";
  firstValue: string = "";
  secondValue: string = "";
  actionType: string = "";
  toggles: Element[];
  appContainer: Element;
  inputs: Element[];
  result: Element;
  constructor() {
    this.toggles = Array.from(document.getElementById("toggle").children);
    this.appContainer = document.querySelector("#app");
    this.inputs = Array.from(document.querySelectorAll(".input"));
    this.result = document.querySelector("#result");
    this.setToggleClick();
    this.setInputsClick();
  }

  refreshValue(type: ValueType) {
    if (type === ValueType.first) {
      this.result.textContent = this.firstValue;
    }

    if (type === ValueType.second) {
      this.result.textContent = this.secondValue;
    }
  }

  deleteFromValue() {
    if (this.actionType === "") {
      if (this.firstValue.length > 1) {
        this.firstValue = this.firstValue.slice(0, -1);
        this.refreshValue(ValueType.first);
      } else {
        this.firstValue = "0";
        this.refreshValue(ValueType.first);
      }
    } else {
    }
  }

  setOperator(operatorType: string) {
    switch (operatorType) {
      case "DEL":
        this.deleteFromValue();
      default:
    }
  }

  setInputsClick() {
    this.inputs.forEach((input) => {
      if (input.getAttribute("data-type") === "number") {
        input.addEventListener("click", () => {
          if (this.actionType === "") {
            this.firstValue += input.getAttribute("data-value");
            this.refreshValue(ValueType.first);
          } else {
            this.secondValue += input.getAttribute("data-value");
            this.refreshValue(ValueType.second);
          }
        });
      } else {
        input.addEventListener("click", () => {
          this.setOperator(input.getAttribute("data-value"));
        });
      }
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
