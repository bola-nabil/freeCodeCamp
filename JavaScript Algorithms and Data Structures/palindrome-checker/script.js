const inputElement = document.getElementById("text-input");
const result = document.getElementById("result");
const btn = document.getElementById("check-btn");

function isPalindrome(str) {
  const paliStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return paliStr === paliStr.split("").reverse().join("");
}

btn.addEventListener("click", () => {
  const inputValue = inputElement.value;
  if (!inputValue.trim()) {
    alert("Please input a value");
    return;
  }

  const isPal = isPalindrome(inputValue);
  result.textContent = isPal
    ? `${inputValue} is a palindrome`
    : `${inputValue} is not a palindrome`;
});
