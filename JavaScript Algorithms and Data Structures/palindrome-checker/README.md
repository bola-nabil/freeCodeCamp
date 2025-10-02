# 🔁 Palindrome Checker
[Live Demo](https://ispalindrome-checker.netlify.app/)

---
## 📖 Description

The goal of this challenge is to build a function `palindrome(str)` that checks whether the given string is a palindrome. A palindrome reads the same forward and backward, **ignoring punctuation, case, and spacing**.

Your function should:

- Convert the string to a uniform format (e.g. lower case, removing non-alphanumeric characters)
- Check if the cleaned string is the same forwards and backwards
- Return `true` if it is a palindrome, `false` otherwise

Example:
```js
palindrome("A man, a plan, a canal. Panama") // returns true
palindrome("race car") // true
palindrome("hello") // false
```
---
## 🛠️ Requirements & Edge Cases

- Ignore **non-alphanumeric characters** like punctuation, spaces, and symbols
- Case-insensitive comparison (uppercase vs lowercase)
- Handle empty string and single-character strings
- Work properly even when input string has mixed characters

---
## 🏗 Tech Stack

- **JavaScript (ES6+)** – core logic
- freeCodeCamp testing environment / JavaScript runtime

---
## 🚧 Edge Cases & Considerations

Strings with punctuation, spaces, or special characters (should be ignored)
Empty string or string of length 1 → should return **true**
Mixed cases (e.g. uppercase & lowercase)
Very long strings (consider performance)

---
## 👤 Author

**Bola Nabil**
