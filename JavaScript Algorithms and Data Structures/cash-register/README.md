# 💵 Cash Register
[Live Demo](https://cash-registering.netlify.app/)

---
## 📖 Description

In this challenge, the task is to create a function `checkCashRegister()` that simulates a cash register drawer. The function should:

- Accept the purchase price, the payment tendered, and a 2D array representing the cash in drawer (CID).
- Compute if there is enough cash to return the correct change.
- Return an object with a `status` and `change` property.
  - `status` can be `"OPEN"`, `"CLOSED"`, or `"INSUFFICIENT_FUNDS"`.
  - `change` is an array of currency units and the amount returned.

The solution handles edge cases such as:
- when there is not enough money in the drawer to make change,
- when the drawer will be empty after giving exact change (`"CLOSED"` status),
- and ensuring correct denominations are used in descending order.

---
## ✨ Features & Requirements

- Return correct change using highest possible denominations first
- Handle **insufficient funds** cases
- Handle **exact drawer exhaustion** case (CLOSED)
- Use denominations:  
  - `"PENNY"` = 0.01  
  - `"NICKEL"` = 0.05  
  - `"DIME"` = 0.1  
  - `"QUARTER"` = 0.25  
  - `"ONE"` = 1  
  - `"FIVE"` = 5  
  - `"TEN"` = 10  
  - `"TWENTY"` = 20  
  - `"ONE HUNDRED"` = 100  
- Output format:
  ```js
  {
    status: "OPEN" | "CLOSED" | "INSUFFICIENT_FUNDS",
    change: [
      ["TWENTY", 60],
      ["TEN", 20],
      ["PENNY", 0.04]
    ]
  }

---
## 🛠️ Tech Stack / Tools

- JavaScript (ES6+) — core logic
- FreeCodeCamp testing suite / challenge interface

---
## 🧭 Challenges / Edge Cases

- Floating-point precision issues (e.g. 0.1 + 0.2 !== 0.3)
- Ensuring you do not give more in change than available in the drawer
- Choosing proper denomination combinations
- Handling case when change exactly empties the drawer → status "CLOSED"

---
## 👤 Author

**Bola Nabil**
