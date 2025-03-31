
# 🎨 Canvas Animated Backgrounds  

![Canvas Animations Logo](logo.png)  

A collection of **minimal and aesthetic animations** created using **HTML5 Canvas & JavaScript**—no external libraries needed! 🚀  

## 🌟 Features  

✅ **Pure JavaScript & HTML5 Canvas** (No external dependencies)  
✅ **Optimized for Performance** (Smooth animations, minimal CPU/GPU load)  
✅ **Lightweight & Easy to Customize**  
✅ **Ideal for Websites, Dashboards, and Interactive UI Backgrounds**  
✅ **Ready-to-use for React users!**  

## 🖌️ Available Animations  

| Animation Name               | Description |
|------------------------------|-------------|
| **✨ Particle Background**    | Floating particles with link effects (like Particles.js) |
| **🚀 Warp Speed Starfield**   | A hyper-speed star tunnel effect (Space Warp) |
| **🟢 Floating Orbs**          | Orbs Floating around |
| **🌧️ Pixel Rain**             | Pixels Raining |
| **🔥 Firefly Effect**         | Random glowing particles moving like fireflies |
| **🌊 Waves / Sine Animation** | Soft-moving wave lines for a smooth aesthetic |

## 🛠️ Usage  

### **🔹 For Plain HTML Users**
1. **Clone the Repository**  
   ```sh
   git clone https://github.com/YOUR_GITHUB_USERNAME/canvas-animations.git
   ```
2. **Open `index.html` in a browser**  
   Simply open any animation file to see it in action!  

3. **Embed in Your Project**  
   Copy the corresponding `JS` file and include it in your HTML file:  
   ```html
   <canvas id="animationCanvas"></canvas>
   <script src="particleBackground.js"></script>
   ```
   Make sure to set up a `canvas` element in your HTML.  

### **🔹 For React Users**
You can **directly copy-paste** the animation file into your React project and use it as a **component**.  

1. **Copy any animation file (e.g., `ParticleBackground.jsx`)**  
2. **Import it into your React component:**  
   ```jsx
   import ParticleBackground from './ParticleBackground';

   function App() {
      return (
         <div className="app-container">
            <ParticleBackground />
         </div>
      );
   }

   export default App;
   ```
3. **Done!** The animation will run as a background in your React app.  

## 📌 Customization  

Each animation has configurable parameters like:
- `particleCount`
- `speed`
- `color`
- `opacity`
- `wave frequency`
- `click effects`

React users can pass **props** to customize animations, for example:  
```jsx
<ParticleBackground particleCount={150} particleColor="#ff00ff" speed={0.8} />
```

## 🎯 Demo  

🚀 Live preview (Coming soon!)  

## 🤝 Contributing  

Want to add your own animations? Feel free to open a pull request!  

## 📜 License  

MIT License - **Free to use and modify**  

---
👨‍💻 Created by **[Nakul Srivastava]**  
🔗 Portfolio: [Please Check Out!](https://nakul-srivastava-dev.vercel.app/)  


