````markdown
# 🚀 Sort Visualizer


An interactive, dark-mode sorting algorithm visualizer built with React, MUI icons, and modern neumorphic styling. Watch classic sorting algorithms animate step-by-step, adjust speed, pick algorithms, and enjoy a clean, responsive UI inspired by 2025 design trends.



## 🎯 Features

- **Algorithms**: Bubble, Selection, Insertion, Merge, Quick  
- **Speed Controls**: 1×, 2×, 3×, 4×, 5× playback buttons ⏩  
- **Responsive**: Works on desktop, tablet, and mobile 📱  
- **Dark-Mode Neumorphism**: Soft shadows, accent highlights, hover animations ✨  
- **Custom Array**: Regenerate random arrays or tweak bar heights directly 🔄  
- **Header & Footer**: Sticky site header with GitHub link; footer with “made with ❤️ by Adidev J J” 🔗  



## ⚙️ Installation

1. **Clone the repo**  
   ```bash
   git clone https://github.com/YourUserName/sort-visualizer.git
   cd sort-visualizer


2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the dev server**

   ```bash
   npm start
   # or
   yarn start
   ```

   Then open [http://localhost:3000](http://localhost:3000) in your browser.



## 🛠️ Usage

1. **Pick an algorithm**
   Click one of the algorithm pills in the header row.
2. **Set speed**
   Click 1×–5× buttons to change the animation speed.
3. **Play/Pause**
   Use the ▶️ and ❚❚ icons to step through or auto-play the sort.
4. **Generate new array**
   Press 🔄 to randomize values.
5. **Resize bars**
   (If enabled) Drag a bar to adjust its height and re-compute.


## 🔍 Project Structure

sort-visualizer/
├─ src/
│  ├─ algorithms/      # Sorting logic: BS, IS, Selection, Merge, Quick
│  ├─ components/
│  │  ├─ Bar.js        # Single bar component
│  │  ├─ Header.js     # Sticky header with title & GitHub link
│  │  └─ Footer.js     # Footer with author attribution
│  ├─ App.js           # Main app & control logic
│  ├─ App.css          # Neumorphic dark-mode styling & responsiveness
│  └─ index.js         # Entry point
├─ public/
│  └─ index.html       # HTML template
├─ package.json        # Project metadata & scripts
└─ README.md           # This file
```



## 📱 Responsive Design

* **Desktop & Tablet**: Neumorphic cards, centered layout
* **Mobile**: Horizontal scroll for bars, stacked controls, smaller buttons
* Built with CSS variables and media queries for fluid adaptation.



## 🤝 Contributing

1. Fork the repository
2. Create a feature branch

   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes

   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push to your branch

   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request

Please follow the existing code style and add relevant tests if applicable.



## 📝 License

This project is open-source under the [MIT License](LICENSE). Feel free to use and modify!



## 🙏 Acknowledgments

* Built with ❤️ by [Adidev J J](https://github.com/AdidevJJ)
* Icons by Material-UI (MUI) 🎨
* Inspired by modern neumorphic & dark-mode design trends of 2025 🌑

Enjoy visualizing your sorts! 🎉


