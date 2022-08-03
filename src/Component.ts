export class Component {
  elementHtml: HTMLElement;
  constructor(type: string, style?: string) {
    this.elementHtml = document.createElement(type);
    if (style) {
      this.elementHtml.classList.add(style);
    }
  }

  addText(text: string) {
    this.elementHtml.innerText += text;
  }
}
