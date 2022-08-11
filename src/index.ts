import "./styles/main.scss";

class Calculator {
  themeType: string = "theme-1";
  firstValue: string = "";
  secondValue: string = "";
  actionType: string = "";
  toggles: Element[];
  appContainer: Element;
  inputs: Element[];
  result: Element;
  operators: Element[];

  constructor() {
    this.toggles = Array.from(document.getElementById("toggle").children);
    this.appContainer = document.querySelector("#app");
    this.inputs = Array.from(document.querySelectorAll(".input"));
    this.operators = Array.from(document.querySelectorAll(".operator"));
    this.result = document.querySelector("#result");
    this.setToggleClick();
    this.setInputsClick();
    this.setOperatorClick();
  }

  refreshValue() {
    if (this.firstValue.length > 0) {
      this.result.textContent = `${this.firstValue} ${this.actionType} ${this.secondValue}`;
    } else {
      this.result.textContent = "0";
    }
  }

  displayResult() {
    if (
      this.firstValue.length > 0 &&
      this.secondValue.length > 0 &&
      this.actionType !== ""
    ) {
      const firstValue = Number(this.firstValue);
      const secondValue = Number(this.secondValue);
      switch (this.actionType) {
        case "+":
          this.firstValue = String(firstValue + secondValue);
          this.secondValue = "";
          this.actionType = "";
          this.refreshValue();
          break;
        case "-":
          this.firstValue = String(firstValue - secondValue);
          this.secondValue = "";
          this.actionType = "";
          this.refreshValue();
          break;
        case "x":
          this.firstValue = String(firstValue * secondValue);
          this.secondValue = "";
          this.actionType = "";
          this.refreshValue();
          break;
        case "/":
          this.firstValue = String(firstValue / secondValue);
          this.secondValue = "";
          this.actionType = "";
          this.refreshValue();
          break;
      }
    }
  }

  resetCalculator() {
    this.firstValue = "";
    this.secondValue = "";
    this.actionType = "";
    this.result.textContent = "0";
  }

  deleteFromValue() {
    if (this.actionType === "") {
      if (this.firstValue.length > 0) {
        this.firstValue = this.firstValue.slice(0, -1);
        this.refreshValue();
      }
    } else {
      if (this.firstValue.length > 0) {
        this.secondValue = this.secondValue.slice(0, -1);
        this.refreshValue();
      }
    }
  }

  setOperator(operatorType: string) {
    switch (operatorType) {
      case "DEL":
        this.deleteFromValue();
        break;
      case "RESET":
        this.resetCalculator();
        break;
      case "=":
        this.displayResult();
        break;
      default:
        this.actionType = operatorType;
        this.refreshValue();
    }
  }

  setInputsClick() {
    this.inputs.forEach((input) => {
      if (input.getAttribute("data-type") === "number") {
        input.addEventListener("click", () => {
          if (this.actionType === "") {
            this.firstValue += input.getAttribute("data-value");
            this.refreshValue();
          } else {
            this.secondValue += input.getAttribute("data-value");
            this.refreshValue();
          }
        });
      } else {
        input.addEventListener("click", () => {
          this.setOperator(input.getAttribute("data-value"));
        });
      }
    });
  }

  setOperatorClick() {
    this.operators.forEach((element) => {
      element.addEventListener("click", () => {
        this.setOperator(element.getAttribute("data-value"));
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
