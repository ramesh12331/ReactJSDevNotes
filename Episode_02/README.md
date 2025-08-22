## EPISODE_02
- **Installaton** :
- 1. npm init
- 2. npm install -D parcel ->DIV dependency [**parcel** is package or bundle]
- 3. npm install react
- 4. npm install react-dom
- 5. To run code -> npx parcel index.html
- 6. To production -> npx parcel build index.html

### SHORT CUTS 
- **package.json** -> It is like a configuration
- **node_modules** -> It is like a Database 

# Theory Assignment:
# Frontend Build Tools & Concepts – Interview Notes

## 📦 What is NPM?
**NPM (Node Package Manager)** is the default package manager for Node.js.  
It is used to install, manage, and share JavaScript libraries, tools, and frameworks.  

---

## ⚡ What is Parcel / Webpack? Why do we need it?
- **Parcel** and **Webpack** are bundlers.  
- They take all the code (HTML, CSS, JS, images, etc.), optimize it, and bundle it into files the browser can understand.  

### Why we need them?
- Modern JavaScript uses **modules** (import/export). Browsers don’t understand these natively in older environments.  
- Bundlers:
  - Convert code (with Babel, TypeScript, etc.) to browser-compatible JavaScript.
  - Optimize files (minification, compression).
  - Improve performance with caching, tree shaking, and code splitting.  

---

## 🗂️ What is `.parcel-cache`?
- `.parcel-cache` is a hidden folder created by Parcel.  
- It stores **cached build files** to speed up the next build.  
- Without it, every build would start from scratch, making it slower.  

---

## 🔧 What is `npx`?
- **npx** is a package runner that comes with npm.  
- It allows you to run packages **without globally installing them**.  
- Example:  
  ```bash
  npx create-react-app my-app

# Frontend Build Tools & Concepts – README

## 📂 Dependencies vs DevDependencies
- **dependencies** → Packages required in **production** (e.g., React, Axios).  
- **devDependencies** → Packages needed only in **development** (e.g., Parcel, Jest, ESLint).  

---

## 🌲 What is Tree Shaking?
- Tree shaking removes **unused code** from the final bundle.  
- Helps reduce file size and improves performance.  

---

## 🔥 What is Hot Module Replacement (HMR)?
HMR allows **live updates** of modules in the browser without a full page reload.  

### Benefits:
- ⚡ Faster development.  
- 🔄 Retains app state while updating UI.  
- 🚀 Improves developer productivity.  

---

## 🚀 5 Superpowers of Parcel
1. **Zero Configuration** – No need for complex setup, works out-of-the-box.  
2. **Hot Module Replacement (HMR)** – Updates code instantly without refresh.  
3. **File Watching & Caching** – Uses `.parcel-cache` for faster rebuilds.  
4. **Tree Shaking** – Removes unused code automatically.  
5. **Built-in Support for Multiple File Types** – Handles JS, CSS, HTML, Images, etc. without extra setup.  

### My Top 3 Explained:
- **Zero Config** → Unlike Webpack, Parcel doesn’t require lengthy configuration files. Just install and run.  
- **HMR** → Saves time by updating code instantly without refreshing the entire app.  
- **Caching** → Smart caching makes rebuilds super fast, improving development experience.  

---

## 📝 What is `.gitignore`?
- `.gitignore` tells Git which files/folders **NOT** to track.  

### Common items to add:
- `node_modules/`  
- `.parcel-cache/`  
- `dist/`  
- `.env` (secrets/keys)  
- `*.log`  

### What NOT to add:
- Source code (`.js`, `.html`, `.css`, etc.)  
- Important configs (like `package.json`)  

---

## 📜 package.json vs package-lock.json
- **package.json**  
  - Lists project metadata and dependencies (with version ranges).  
  - Example: `"react": "^18.0.0"`  

- **package-lock.json**  
  - Stores **exact versions** of all dependencies (including nested ones).  
  - Ensures the same setup across all environments.  

---

## 🚫 Why should I not modify `package-lock.json`?
- It is **auto-generated** by npm.  
- Manual edits can break dependency resolution and cause version mismatches.  

---

## 📁 What is `node_modules`?
- A folder containing all installed project dependencies.  

👉 **Should we push to Git?**  
❌ No. It is very large and can be regenerated using `npm install` from `package.json`.  

---

## 📦 What is the `dist` folder?
- The **distribution folder** that contains the final optimized production build.  
- This is the code actually deployed to servers.  

---

## ✅ Summary
- **Parcel/Webpack** → Helps bundle and optimize code.  
- **.parcel-cache** → Speeds up builds.  
- **npx** → Runs packages without global install.  
- **Dependencies vs DevDependencies** → Prod vs Dev packages.  
- **Gitignore** → Ignore build/cache files, but keep source code & configs.  
- **package.json** → Defines dependencies.  
- **package-lock.json** → Locks exact versions.  
- **node_modules** → Installed packages (don’t push to Git).  
- **dist folder** → Production-ready code.  
