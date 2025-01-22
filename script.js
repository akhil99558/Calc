// Simple Calculator App in JavaScript with External CSS
// Ensure styles are included in a separate styles.css file
document.addEventListener("DOMContentLoaded", function () {
  const calculatorContainer = document.createElement("div");
  calculatorContainer.id = "calculator-container";

  calculatorContainer.innerHTML = `
    <div id="calculator">
      <h1>Calculator</h1>
      <input id="calculator-display" type="text" readonly />
      <div id="calculator-buttons">
        ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/'].map((item) => `<button class="calc-btn" data-value="${item}">${item}</button>`).join('')}
        <button id="calc-equal" class="calc-action">=</button>
        <button id="calc-clear" class="calc-action">C</button>
      </div>
    </div>
  `;

  document.body.appendChild(calculatorContainer);

  const display = document.getElementById("calculator-display");

  document.getElementById("calculator-buttons").addEventListener("click", function (e) {
    if (e.target.classList.contains("calc-btn")) {
      display.value += e.target.dataset.value;
    }
  });

  document.getElementById("calc-equal").addEventListener("click", function () {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  });

  document.getElementById("calc-clear").addEventListener("click", function () {
    display.value = "";
  });
});
