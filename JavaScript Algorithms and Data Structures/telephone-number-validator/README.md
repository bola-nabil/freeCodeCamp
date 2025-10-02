# ☎️ Telephone Number Validator
[Live Demo](https://tel-validator.netlify.app/)

---
## 📖 Description

The goal is to build a function `telephoneCheck(str)` that determines if a string is a valid US telephone number. 

Requirements include:
- Allowing formats like:
  - `555-555-5555`
  - `(555)555-5555`
  - `(555) 555-5555`
  - `555 555 5555`
  - `5555555555`
  - `1 555 555 5555` (country code “1” allowed)
- Reject invalid numbers or formats, such as:
  - Too many or too few digits
  - Incorrect placement of parentheses
  - Invalid characters
- Return `true` if the string matches a valid phone number format, `false` otherwise  

Example tests:
```js
telephoneCheck("555-555-5555")         // true  
telephoneCheck("(555)555-5555")        // true  
telephoneCheck("1 555 555 5555")       // true  
telephoneCheck("123**&!!asdf#")        // false  
telephoneCheck("55555555")             // false
```

---
## ✨ Features & Validation Rules

- Supports US telephone number formats with or without country code
- Parentheses must be in correct positions and properly closed
- Only digits, spaces, and allowed punctuation (-, parentheses)
- Country code “1” is optional and only valid when used properly
- No extra characters or formatting beyond allowed pattern

---
## 🛠️ Tech Stack / Tools

- JavaScript (ES6+) — core logic
- freeCodeCamp testing environment

---
## 🚧 Edge Cases & Considerations

- Strings with invalid characters or symbols
- Incorrect parentheses usage (e.g. missing, mismatched, extra)
- Extra digits or too few digits
- Country code “1” used incorrectly or in invalid positions
- Combination of spaces and hyphens in unusual placements

---
## 👤 Author

**Bola Nabil**
