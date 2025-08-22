## Code Explanation

- The project uses a simple `index.html` file.
- Inside the `<script>` tag:
- A new `h1` element is created using `document.createElement("h1")`.
- The inner HTML of the heading is set to `"Hello World From Namaste Javascript"`.
- The heading is appended to the `<div id="root"></div>` element.

### 1. `ReactCDN.html`
- Loads **React** and **ReactDOM** from the official **UNPKG CDN**.
- Provides a root container `<div id="root"></div>` where the React app will be rendered.
- References `App.js` which contains the rendering logic.

### 2. `NestedElement.html`,`nested.js`

// Creating a nested structure using React.createElement
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello I am Ramesh"),
    React.createElement("h2", {}, "Hello I am Rakesh")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Hello I am Rajesh"),
    React.createElement("h2", {}, "Hello I am Rakey")
  ])
]);

// Another heading (not used in render)
const heading = React.createElement("h1", {}, "Hello World");

// Render parent element inside root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

## When rendered, React creates this DOM structure:
<div id="parent">
  <div id="child">
    <h1>Hello I am Ramesh</h1>
    <h2>Hello I am Rakesh</h2>
  </div>
  <div id="child2">
    <h1>Hello I am Rajesh</h1>
    <h2>Hello I am Rakey</h2>
  </div>
</div>

## Next Step (Convert to JSX)

const parent = (
  <div id="parent">
    <div id="child">
      <h1>Hello I am Ramesh</h1>
      <h2>Hello I am Rakesh</h2>
    </div>
    <div id="child2">
      <h1>Hello I am Rajesh</h1>
      <h2>Hello I am Rakey</h2>
    </div>
  </div>
);

root.render(parent);



# React Basics & Web Concepts - Notes

This document covers some important concepts while learning **React** and **Web Development**.

---

## 🔹 1. What is Emmet?
- **Emmet** is a developer tool built into editors (like VS Code) that allows you to write **shortcuts** for HTML & CSS.
- Example:
  - `div#root` → `<div id="root"></div>`
  - `ul>li*3` → 
    ```html
    <ul>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    ```

👉 Helps in writing code faster.

---

## 🔹 2. Difference between a Library and Framework
| Feature | Library | Framework |
|---------|---------|------------|
| **Definition** | A collection of pre-written functions you can call. | A complete structure that tells you how to build your app. |
| **Control** | You are in control (you call the library). | The framework is in control (it calls your code). |
| **Examples** | React, jQuery, Lodash | Angular, Django, Spring |

👉 **Key idea**: *Library → You call it. Framework → It calls you.*

---

## 🔹 3. What is CDN? Why do we use it?
- **CDN** = **Content Delivery Network**
- A network of servers worldwide that delivers files (JS, CSS, images) quickly.
- Instead of hosting React or Bootstrap yourself, you load them from a **CDN link**.

**Benefits:**
- Faster (served from nearest server).
- Saves your server bandwidth.
- Often cached in user’s browser (if used on multiple sites).

---

## 🔹 4. Why is React known as React?
- React is called **React** because it **reacts** to changes in data.
- When data changes, React efficiently **updates the UI** using the **virtual DOM**.

---

## 🔹 5. What is `crossorigin` in script tag?
- The `crossorigin` attribute tells the browser how to handle **CORS (Cross-Origin Resource Sharing)** for external scripts.
- In React CDN links, it ensures **better error reporting** in the console when scripts fail.

* **Cross Origin**:
The crossorigin attribute in the script tag enables Cross-
Origin Resource Sharing (CORS) for loading external JavaScript
files from different origin than the hosting web page. This
allows the script to access resources from the server hosting
the script, such as making HTTP requests or accessing data.

---

## 🔹 6. Difference between React and ReactDOM
- **React**: Core library for building UI components (e.g., `React.createElement`).
- **ReactDOM**: Responsible for rendering React elements into the **real DOM** in the browser.

👉 **React = UI Logic**, **ReactDOM = DOM Rendering**.

---

## 🔹 7. Difference between `react.development.js` and `react.production.js`
| File | Purpose |
|------|----------|
| **react.development.js** | Uncompressed, includes warnings & errors, used in development. Slower. |
| **react.production.js** | Optimized, minified, removes warnings, faster. Used in production. |

👉 Use **development** while coding, and **production** for live apps.

---

## 🔹 8. What is `async` and `defer` in script tag?
Both load scripts **without blocking HTML parsing**.

| Attribute | Script Loading | Script Execution |
|-----------|----------------|------------------|
| **async** | Loads asynchronously while HTML is parsing. | Executes immediately after load (may pause HTML parsing). |
| **defer** | Loads asynchronously. | Executes only after HTML is fully parsed. |

**Example:**
```html
<script src="file.js" async></script>
<script src="file.js" defer></script>


✅ **Quick Recap**:  
- **Emmet** = shortcuts for faster HTML.  
- **Library vs Framework** = control difference.  
- **CDN** = faster, cached delivery.  
- **React** = UI logic, **ReactDOM** = rendering.  
- **crossorigin** = error handling for external scripts.  
- **Dev vs Prod builds** = debug vs optimized.  
- **async vs defer** = script loading strategies.