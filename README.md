[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge)](https://sorting-visualizer-adidev.vercel.app/)
![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)

# 🚀 Sort Visualizer

An interactive, dark‑mode sorting algorithm visualizer built with React, MUI icons, and sleek neumorphic styling. Watch classic sorting algorithms animate step‑by‑step, adjust speed, choose algorithms, and enjoy a clean, responsive UI inspired by 2025 design trends.

🔗 **Live Demo:** [https://sorting-visualizer-adidev.vercel.app/](https://sorting-visualizer-adidev.vercel.app/)

---

## 📖 Table of Contents

* [🎯 Features](#-features)
* [⚙️ Installation](#️-installation)
* [🚀 Usage](#-usage)
* [🗂️ Project Structure](#️-project-structure)
* [🤝 Contributing](#-contributing)
* [📝 License](#-license)
* [🙏 Acknowledgments](#-acknowledgments)

---

## 🎯 Features

* **Algorithms**: Bubble, Selection, Insertion, Merge, Quick ⚙️
* **Speed Controls**: 1×–5× playback buttons ⏩
* **Play / Pause / Step**: Intuitive ▶️ / ❚❚ / ⏭ controls
* **Custom Array**: Regenerate random arrays or adjust individual bars 🔄
* **Dark‑Mode Neumorphism**: Soft shadows, accent highlights, hover animations ✨
* **Sticky Header & Footer**: Quick links and author attribution 📑
* **Mobile‑First Design**: Touch‑friendly controls and fluid layouts 📱

---

## ⚙️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/AdidevJJ/sort-visualizer.git
   cd sort-visualizer
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open in your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🚀 Usage

1. **Select an Algorithm**: Click the algorithm pill in the header.
2. **Adjust Speed**: Choose a speed multiplier (1× to 5×).
3. **Play / Pause / Step**: Use the controls to animate or step through the sort.
4. **Randomize Array**: Click 🔄 to generate a new set of values.


---

## 🗂️ Project Structure

```
sort-visualizer/
├─ public/
│  └─ index.html       # HTML template
├─ src/
│  ├─ algorithms/      # Sorting logic (Bubble, Selection, Insertion, Merge, Quick)
│  ├─ components/      # Reusable UI components
│  │  ├─ Bar.js         # Renders a single bar
│  │  ├─ Header.js      # Sticky top bar with controls and links
│  │  └─ Footer.js      # Bottom attribution footer
│  ├─ App.js           # Main application and state management
│  ├─ App.css          # Neumorphic dark-mode styling & responsive rules
│  └─ index.js         # Entry point
├─ package.json        # Project metadata & scripts
└─ README.md           # Project documentation
```


---

## 🤝 Contributing

1. **Fork** the repo
2. **Create** a branch: `git checkout -b feature/YourFeature`
3. **Commit** your changes: `git commit -m "Add YourFeature"`
4. **Push** to your branch: `git push origin feature/YourFeature`
5. **Open** a Pull Request

Please follow the existing code style and include tests or documentation where relevant.

---

## 📝 License

This project is open-source under the [MIT License](LICENSE).

---

## 🙏 Acknowledgments

* **Built with ❤️ by [Adidev J J](https://github.com/AdidevJJ)**
* Icons by **Material‑UI (MUI)**


Enjoy visualizing your sorts and happy coding! 🎉
