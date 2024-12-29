const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearkBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function telephoneCheck(str) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
  if (regex.test(str)) {
    return "Valid US number: ";
  } else {
    return "Invaild US number: ";
  }
}

checkBtn.addEventListener("click", () => {
  const inputValue = userInput.value;
  if (!inputValue) {
    alert("Please provide a phone number");
    return;
  }
  const checkNumer = telephoneCheck(inputValue);
  const myText = document.createElement("p");
  myText.innerText = `${checkNumer} ${inputValue}`;
  myText.classList.add("output-value");
  resultsDiv.appendChild(myText);
  userInput.value = "";
});

clearkBtn.addEventListener("click", () => {
  document.getElementById("results-div").innerHTML = "";
});
