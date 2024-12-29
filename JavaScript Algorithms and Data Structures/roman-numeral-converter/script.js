const inputElement = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const output = document.getElementById("output");

function decimalToRoman(num) {
  const romanNumerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" },
  ];
  let result = "";
  for (const { value, numeral } of romanNumerals) {
    while (num >= value) {
      result += numeral;
      num -= value;
    }
  }

  return result;
}

btn.addEventListener("click", () => {
  let inputValue = inputElement.value;
  let inputNumber = Number(inputElement.value);
  console.log(inputValue);
  if (!inputValue) {
    output.classList.remove("success");
    output.innerText = "Please enter a valid number.";
    output.classList.add("danger");
  } else if (inputNumber <= 0) {
    output.classList.remove("success");
    output.classList.add("danger");
    output.innerText = "Please enter a number greater than or equal to 1.";
  } else if (inputNumber >= 4000) {
    output.classList.remove("success");
    output.classList.add("danger");
    output.innerText = "Please enter a number less than or equal to 3999.";
  } else {
    output.innerText = `${decimalToRoman(inputNumber)}`;
    output.classList.remove("danger");
    output.classList.add("success");
  }
});
