# React & JavaScript Concepts

## 1. Difference between Named Export, Default Export, and `* as` Export

### 🔹 Named Export

* Export multiple values from a file.
* Must import using the same name.

```js
// utils.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;

// main.js
import { add, subtract } from "./utils";
```

---

### 🔹 Default Export

* Only one default export per file.
* Can import with any name.

```js
// utils.js
export default function multiply(a, b) {
  return a * b;
}

// main.js
import mul from "./utils"; // renaming is allowed
```

---

### 🔹 `* as` Export (Namespace Import)

* Imports all named exports as an object.

```js
// utils.js
export const pi = 3.14;
export const square = (x) => x * x;

// main.js
import * as mathUtils from "./utils";

console.log(mathUtils.pi);
console.log(mathUtils.square(5));
```

✅ **Summary:**

* **Named Export:** Multiple exports, must match name.
* **Default Export:** One export, import with any name.
* **`* as`:** Import everything as an object.

---

## 2. Importance of `config.js` File

* Stores configuration values (API URLs, timeouts, environment-specific settings).
* Makes code **cleaner, maintainable, and flexible**.

```js
// config.js
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;

// main.js
import { API_URL } from "./config";
console.log(API_URL);
```

---

## 3. What are React Hooks?

* **Hooks** are special functions in React that let you use **state and lifecycle features** in functional components.
* Examples:

  * `useState` → state management
  * `useEffect` → side effects (API calls, subscriptions)
  * `useContext`, `useRef`, `useReducer`, etc.

✅ Hooks make functional components powerful, reducing the need for class components.

---

## 4. Why do we need `useState` Hook?

* Allows functional components to **hold and update state**.
* Without it, components would be **stateless**.

```js
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
```

✅ Required for interactivity (forms, counters, toggles, dynamic UI).

---

## 5. Difference between Virtual DOM and Actual DOM

### 🔹 Actual DOM

* The real DOM in the browser.
* **Slow** updates → re-renders the entire tree on change.

### 🔹 Virtual DOM

* A lightweight **copy of the DOM** stored in memory.
* React updates Virtual DOM first → compares (diffing) → updates only changed parts in Actual DOM.
### 🔹 Example:
* Change **1 button →**
    **Actual DOM:** Reloads whole page area.
    **Virtual DOM:** Updates only that button.


✅ **Benefit:** Makes React apps **faster and efficient**.

---

# 📌 Summary

* **Exports:**

  * Named = multiple, must match name.
  * Default = one, can rename.
  * `* as` = imports all as object.
* **config.js:** Centralized configuration for easy maintenance.
* **React Hooks:** Functions that bring state & lifecycle to functional components.
* **useState Hook:** Enables interactivity by managing component state.
* **Virtual DOM vs Actual DOM:** Virtual DOM optimizes performance by updating only changed parts of the UI.
