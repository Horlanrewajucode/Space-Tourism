# 🚀 Space Tourism Website
A React.js space tourism website where users can explore outer space destinations, meet their crew, and learn about the latest space launch technologies.

## ✨ Features

- Home Page – Beautiful landing page with a space-themed hero section and navigation.

- Destination Page – Browse available destinations with details such as description, distance, and travel time.

- Crew Page – Meet the crew members, learn about their roles, and see their profiles.

- Technology Page – Explore advanced space launch technologies with images and descriptions.

- Responsive Design – Fully responsive UI for desktop, tablet, and mobile.

- Smooth Navigation – Users can switch between pages easily using React Router.

## 🛠️ Tech Stack

- Frontend: React.js, JSX

- Styling: TailwindCSS

- Routing: React Router

- State Management: React hooks (useState, useEffect)

- Build Tool: Vite

## 📂 Project Structure
```graphql
space-tourism/
│── public/
│   ├── home folder/             # Images & icons
│   └── crew folder/
│   └── destination folder/
│   └── technology folder/
│
│── src/
│   ├── components/         # Reusable UI components (Navbar, Buttons, etc.)
│   ├── pages/              # Pages (Home, Destination, Crew, Technology)
│   ├── data/               # JSON data for destinations, crew, and technology
│   ├── App.jsx             # Main app entry point
│   ├── main.jsx            # React DOM render
│   └── styles/             # Global styles
│
└── package.json
````

## 🚀 Getting Started

1. Clone the Repository
````bash
git clone https://github.com/Horlanrewajucode/space-tourism.git
cd space-tourism
````
2. Install Dependencies
````bash
npm install
````
3. Run the Development Server
````bash
npm run dev
````
4. Build for Production
````bash
npm run build
````

## 📖 Pages Overview

### 🏠 Home

- Eye-catching hero section with a bold "Explore" button.

- Navigation links to all main pages using hamburger for mobile view.

### 🌍 Destination

- View available destinations (e.g., Moon, Mars, Europa, Titan).

- Each destination shows:- Name, Image, Description, Distance, Estimated travel time

### 👨‍🚀 Crew

- Meet the space crew members.

- Each crew card includes: Name, Role, Short biography, Image

### 🛰️ Technology

- Explore space launch technologies.

- Each technology entry includes: Title, Description, Image

### 🎨 UI Preview

Navigation bar with pages:

- 00 Home

- 01 Destination

- 02 Crew

- 03 Technology

Hero Section – Minimal, space-themed background with Explore button.

## 🖼️ Screenshots

![mobile-view](/public/Screenshot-1.png)
![Desktop-view](/public/Screenshot-2.png)



## 🤝 Contributing

1. Fork the project

2. Create a new branch (feature/your-feature)

3. Commit your changes

4. Push to the branch

5. Open a Pull Request