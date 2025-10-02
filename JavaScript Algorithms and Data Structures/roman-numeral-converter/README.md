# 📜 Roman Numeral Converter
[Live Demo](https://roman-convert.netlify.app/)

---
## 📖 Description

The **Roman Numeral Converter** challenge requires writing a function `convertToRoman(num)` that:

- Takes a number (typically between 1 and 3999) as input  
- Returns a string containing the Roman numeral equivalent  
- Uses proper Roman numeral rules and notation  
- Handles edge cases like subtractive notation (e.g. IV, IX, XL, etc.)

For example:  
```js
convertToRoman(2);    // "II"  
convertToRoman(4);    // "IV"  
convertToRoman(29);   // "XXIX"  
convertToRoman(44);   // "XLIV"  
convertToRoman(3999); // "MMMCMXCIX"
```

---
## ✨ Features & Requirements

- Correct roman numeral conversion for numbers in valid range
- Use **subtractive notation** (IV, IX, XL, XC, CD, CM)
- Return uppercase Roman numerals
- Handle numbers like 0, negative, or out-of-range (if challenge dictates) — either by returning a fallback or error

---
## 🛠️ Tech Stack / Tools

- JavaScript (ES6+) – core logic
- freeCodeCamp’s testing environment

---
## 🚧 Edge Cases & Considerations

- Using subtractive notation correctly (4 as “IV”, 9 as “IX”, etc.)
- Handling numbers outside valid range (e.g. 0 or above 3999)
- Efficient handling for all digit places (thousands, hundreds, tens, ones)
- Clean and readable logic for mapping decimal to Roman

---
## 👤 Author

**Bola Nabil**
