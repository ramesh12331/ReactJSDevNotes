# React Assignment

## 1. Is JSX mandatory for React?

No, JSX is not mandatory for React. React can work without JSX by using `React.createElement()`. However, JSX makes the code more readable, easier to write, and is commonly used in React applications.

---

## 2. Is ES6 mandatory for React?

ES6 is not mandatory for React, but it is highly recommended. Most React codebases use ES6+ features like `class`, `arrow functions`, `let/const`, `destructuring`, and `modules` for cleaner and more modern syntax.

---

## 3. `{TitleComponent}` vs `{<TitleComponent/>}` vs `{<TitleComponent></TitleComponent>}` in JSX

* **`{TitleComponent}`** → Refers to the component function itself, not rendering it.
* **`{<TitleComponent />}`** → Renders the component.
* **`{<TitleComponent></TitleComponent>}`** → Same as above, but used when you want to wrap children inside the component.

---

## 4. How can I write comments in JSX?

You can write comments in JSX using curly braces:

```jsx
{/* This is a JSX comment */}
```

---

## 5. What is `<React.Fragment></React.Fragment>` and `<> </>` ?

* **`<React.Fragment>`** → A wrapper that lets you group elements without adding extra nodes to the DOM.
* **`<> </>`** → Shorthand syntax for `React.Fragment`.

---

## 6. What is Virtual DOM?

The Virtual DOM is a lightweight copy of the actual DOM. React updates the Virtual DOM first, then efficiently updates only the changed parts in the real DOM. This improves performance.

---

## 7. What is Reconciliation in React?

Reconciliation is the process React uses to compare the Virtual DOM with the previous version (diffing) and update only the changed parts in the actual DOM.

---

## 8. What is React Fiber?

React Fiber is the new reconciliation engine introduced in React 16. It allows React to break rendering work into small units and prioritize updates, improving responsiveness for complex UIs.

---

## 9. Why we need keys in React? When do we need keys in React?

* **Why:** Keys help React identify which items have changed, been added, or removed in a list.
* **When:** When rendering dynamic lists using `.map()`, you must use keys for each list item.

---

## 10. Can we use index as keys in React?

Yes, but it is not recommended. Index as a key can cause issues with component re-rendering when list order changes. Use unique IDs whenever possible.

---

## 11. What is props in React? Ways to use props

* **Props:** Short for "properties"; they are used to pass data from parent to child components.
* **Ways:**

  * Passing primitive values (string, number, boolean)
  * Passing objects and arrays
  * Passing functions
  * Passing React elements or components

---

## 12. What is a Config Driven UI?

A Config Driven UI is a design pattern where the UI is dynamically generated based on configuration (usually JSON data). Instead of hardcoding UI components, configuration files define how UI should look and behave.

Example:

```json
{
  "type": "button",
  "label": "Submit",
  "style": "primary"
}
```

This JSON config can be used to render a button dynamically.

---

## 📌 Summary

* **JSX & ES6** are not mandatory but make React development easier and cleaner.
* **JSX differences:** `{TitleComponent}` vs `{<TitleComponent/>}` show when you are referencing vs rendering.
* **Comments** are written with `{/* */}` inside JSX.
* **Fragments (`<React.Fragment>` or `<>`)** avoid unnecessary DOM nodes.
* **Virtual DOM & Reconciliation** make React efficient by updating only changed parts.
* **React Fiber** improves rendering performance with prioritization.
* **Keys** are essential for rendering lists correctly; avoid using indexes.
* **Props** allow parent-to-child data transfer.
* **Config Driven UI** makes UI dynamic and flexible based on JSON or config files.
