const App = (text: string) => {
  const element = document.createElement("div");
  element.innerText = text ? text : "";
  return element;
};
export default App;
