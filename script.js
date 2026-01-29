const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const result = document.getElementById("result");

document.getElementById("sum").addEventListener("click", () => {
  result.textContent = Number(num1.value) + Number(num2.value);
});

document.getElementById("sub").addEventListener("click", () => {
  result.textContent = Number(num1.value) - Number(num2.value);
});

document.getElementById("mul").addEventListener("click", () => {
  result.textContent = Number(num1.value) * Number(num2.value);
});

document.getElementById("div").addEventListener("click", () => {
  if (Number(num2.value) === 0) {
    alert("No se puede dividir entre cero");
  } else {
    result.textContent = Number(num1.value) / Number(num2.value);
  }
});