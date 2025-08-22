# React Basics - JSX & Components

This document provides an overview of JSX, how it works under the hood, and the role of build tools like Babel and Parcel. It also explains components, functional components, and some key JSX concepts.

---

## 📌 Topics

### 1. JSX

* JSX (JavaScript XML) is a **syntax extension** for JavaScript.
* It allows writing HTML-like code inside JavaScript.
* JSX makes React code **more readable** and **declarative**.

**Example:**

```jsx
const element = <h1>Hello, Ramesh!</h1>;
```

---

### 2. React.createElement vs JSX

* **Without JSX**:

```js
const element = React.createElement(
  "h1",
  { className: "heading" },
  "Hello, World!"
);
```

* **With JSX (syntactic sugar):**

```jsx
const element = <h1 className="heading">Hello, World!</h1>;
```

✅ JSX is shorter, more readable, and easier to maintain.

---

### 3. Benefits of JSX

* **Readability**: HTML-like syntax inside JS.
* **Less Boilerplate**: No need for repetitive `React.createElement`.
* **Error Prevention**: JSX checks syntax errors at compile time.
* **Dynamic Expressions**: Allows embedding JavaScript expressions using `{}`.

---

### 4. Behind the Scenes of JSX

* JSX is **not HTML**, it’s compiled into JavaScript.

**Example:**

```jsx
const element = <h1>Hello</h1>;
```

is transformed into:

```js
const element = React.createElement("h1", null, "Hello");
```

---

### 5. Babel & Parcel Role in JSX

* **Babel**: A JavaScript compiler that converts JSX into plain JavaScript (`React.createElement`).
* **Parcel/Webpack/Vite**: Bundlers that handle files, dependencies, optimizations, and run the dev server.

---

### 6. Components

* Components are **reusable pieces of UI**.
* Can be **functional** or **class-based** (functional is recommended in modern React).
* Must start with a **capital letter**.

---

### 7. Functional Components

A **JavaScript function** that returns JSX.

**Example:**

```jsx
function Welcome() {
  return <h1>Hello, React!</h1>;
}
```

---

### 8. Composing Components

Components can be **nested inside each other**.

**Example:**

```jsx
function Header() {
  return <h2>This is Header</h2>;
}

function App() {
  return (
    <div>
      <Header />
      <p>This is the App component</p>
    </div>
  );
}
```

---

## 📚 Assignment

### 1. What is JSX?

* JSX is a **JavaScript XML-like syntax** that lets us write HTML inside JavaScript.
* It’s compiled into `React.createElement`.

---

### 2. Superpowers of JSX

* Embeds **JavaScript expressions** with `{}`.
* Helps in **conditional rendering**:

```jsx
const isLoggedIn = true;
return <h1>{isLoggedIn ? "Welcome!" : "Please Login"}</h1>;
```

* Prevents **injection attacks** by escaping values.
* Allows **composition of components**.

---

### 3. Role of `type` attribute in `<script>` tag

Defines the **type of script**.

**Common options:**

* `type="text/javascript"` → Default JS script.
* `type="module"` → Enables ES6 module imports/exports.
* `type="text/babel"` → Allows JSX to be transpiled by Babel.

---

### 4. `{TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}`

* **`{TitleComponent}`** → Refers to the component function itself (not rendered).
* **`<TitleComponent />`** → Renders the component (self-closing tag).
* **`<TitleComponent></TitleComponent>`** → Same as above but with explicit opening/closing tags (useful when children are passed).

**Example:**

```jsx
function TitleComponent() {
  return <h1>Hello JSX!</h1>;
}

<TitleComponent /> 
// ✅ Renders the component

<TitleComponent></TitleComponent> 
// ✅ Same as above

{TitleComponent} 
// ❌ Just refers to the function, not rendered
```

---

## ✅ Summary

* JSX is syntactic sugar for `React.createElement`.
* Babel converts JSX into plain JavaScript.
* Parcel/Webpack manage bundling & optimization.
* Components (especially functional) are the building blocks of React.
* Composing components makes UI reusable and modular.
