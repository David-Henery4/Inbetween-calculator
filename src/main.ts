import "./style.css";

const formCalculator = document.getElementById("form-calculator")!;
const resultSpanElement = document.getElementById("result")!;

formCalculator.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!values["number-1"] && !values["number-2"]) return;
  const inputValue1 = +values["number-1"];
  const inputValue2 = +values["number-2"];
  const lowestValueInputed = Math.min(inputValue1, inputValue2);
  resultSpanElement.innerText = `${Math.abs(inputValue1 - inputValue2) / 2 + lowestValueInputed}`;
});
