# 🌱 Environment Setup

This document outlines the development environment setup and project layout for the three projects included in this internship repository.

---

## 🛠️ Software Requirements

Make sure you have the following installed on your system:

- **Node.js** (v14 or higher)  
  [Download Node.js](https://nodejs.org/)
- **npm** (v6 or higher)  
  Comes bundled with Node.js

- **React**  
  All projects are built using React with TypeScript

---

## 🔧 Development Tools

- **VS Code** or any modern code editor  
  [Download Visual Studio Code](https://code.visualstudio.com/)

- **Git** (for version control)  
  [Download Git](https://git-scm.com/)

- **Browser**  
  A modern browser like Chrome for testing and debugging

---

## 📁 Project Structure Overview

This repository contains the following three independent React + TypeScript projects:

```

ShadowFox_Internship_WD/
│
├── Razorpay-Clone/ # Razorpay UI clone
├── IPL-Team-Website/ # Cricket stats and data project
└── Personal-Portfolio/ # Personal developer portfolio

```

---

## 🔍 Common Project Layout (`/src`)

Each project contains its own `src` directory with the following general structure:

```

/src
├── components/ # Reusable UI components (Navbar, Footer, Cards, etc.)
├── pages/ # Route-based components like Home, About, etc.
├── services/ # API handling and external service logic
├── App.tsx # Main app entry with routing and layout
└── index.tsx # Root React DOM rendering

```

### ➕ Extras (may vary slightly per project)

- **assets/** – for images, icons, and static files
- **styles/** – custom CSS or SCSS files
- **context/** – for React Context API implementations
- **utils/** – helper functions or config files

---

## 📝 Notes

- Each project can be run independently.
- All three projects follow a modular folder structure for scalability and maintainability.
- TypeScript is used for enhanced code quality and type safety.
- You can customize environment variables by adding a `.env` file to each project root if needed.
