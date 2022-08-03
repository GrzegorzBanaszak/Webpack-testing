import { Component } from "../Component";
import "../styles/app.styles.css";

const App = new Component("div", "app");
App.addText("Hello from app");

export default App.elementHtml;
