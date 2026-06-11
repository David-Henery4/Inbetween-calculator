import "./style.css";

const formCalculator = document.getElementById("form-calculator")!;
const resultSpanElement = document.getElementById("result")!;

formCalculator.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget as HTMLFormElement;
  const values = Object.fromEntries(new FormData(form).entries());
  if (!values["number-1"] && !values["number-2"]) return;
  resultSpanElement.innerText = `${Math.abs(+values["number-1"] - +values["number-2"]) / 2}`;
});
