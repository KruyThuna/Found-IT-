Found-IT React.js setup

# 1. Check Node.js
node -v
npm -v

# 2. Create the React project
npm create vite@latest Found-IT

# Choose:
# Framework: React
# Variant: JavaScript

# 3. Enter the project
cd Found-IT

# 4. Install dependencies
npm install

# 5. Start the development server
npm run dev

# 6. Project structure

Found-IT/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ItemCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── LostItems.jsx
│   │   ├── FoundItems.jsx
│   │   ├── PostItem.jsx
│   │   ├── ItemDetails.jsx
│   │   ├── Tracking.jsx
│   │   └── Profile.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
└── vite.config.js
