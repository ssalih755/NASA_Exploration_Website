# 🌌 NASA Exploration — CLI, API & Web App

**Discover, Track, Laugh — All in One Place**  
Explore NASA’s media, track near-Earth objects, and enjoy a joke of the day!  

This full-stack project integrates multiple NASA and public APIs across a **CLI**, **Spring Boot backend**, and **React frontend**.

---

## 🛸 Tech Stack

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![NASA API](https://img.shields.io/badge/NASA%20API-0B3D91?style=for-the-badge&logo=nasa&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-671DDf?style=for-the-badge&logo=axios&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## 🚀 Project Overview

| Component | Description |
|------------|--------------|
| 🧑‍💻 **CLI (User Management)** | Command-line app for user registration, login, and NEO exploration |
| 🛰️ **Backend (Spring Boot)** | RESTful API exposing `/neoData` endpoint for NASA’s NEO feed |
| 🌐 **Frontend (React)** | Modern UI to browse NASA’s images, track asteroids, and fetch a daily joke |

---

## 🧑‍💻 CLI: User Management & NEO Exploration

A Java-based CLI that allows users to register, log in, and explore NASA’s Near Earth Objects data.

### ✨ Features
- 🔐 User registration and login  
- 🗄️ Credentials stored securely in PostgreSQL  
- ☄️ Fetch and display NEOs for a given date  
- ⭐ Save favorite NEOs to the database  
- 🪐 Display asteroid details such as:
  - Name  
  - Estimated diameter  
  - Hazardous status  
  - Approach date and velocity  

### 🧭 Next Step
The CLI will soon be refactored into a **separate standalone project** for better modularity and maintainability — a good move for scalability and clean architecture.

---

## 🛰️ Backend: Spring Boot REST API

A Spring Boot service following the **MVC pattern** that interacts with NASA’s **Asteroids - NeoWs API**.

### ✨ Features
- 🌍 `/neoData` endpoint returns NEO data for a specified date  
- ⚙️ Uses `NASA_API_KEY` or falls back to `DEMO_KEY`  
- 🧾 Logs incoming requests and fallback behavior  
- 📆 Defaults to today’s date when no start date is provided
- 📆 Defaults to seven days from start date when no end date is provided

### 🧠 Example Flow
1. Frontend sends request → `/neoData?startDate=2025-06-07`  
2. Controller logs request date  
3. Service layer calls NASA API  
4. Response returned and displayed in the app  

---

## 🌐 Frontend: React Web App

An interactive and visually appealing web experience powered by **React + Vite**.

### 🪞 Views

#### 🏠 Home  
Project overview and introduction.  

<img width="1245" height="907" alt="image" src="https://github.com/user-attachments/assets/03e7b6a7-2151-4faa-8282-20fba05a983c" />

#### 🌌 NASA Collection  
Displays images and videos from NASA’s **Image and Video Library API**.  
- Keyword-based search  
- Responsive gallery layout

<img width="1168" height="907" alt="image" src="https://github.com/user-attachments/assets/6dfc715b-03b6-46bd-84a7-58706c4632e1" />

#### ☄️ Near Earth Objects  
Fetches and displays NEO data via the backend `/neoData` endpoint.  
- Allows users to input a start date  
- Defaults to today if none provided

<img width="896" height="758" alt="image" src="https://github.com/user-attachments/assets/e672e163-443e-4116-abac-06fde2361439" />

<img width="880" height="753" alt="image" src="https://github.com/user-attachments/assets/b75c3404-c5fe-4b33-96b5-4b5c5c866fe1" />


#### 😂 Joke of the Day  
Integrates with the **[icanhazdadjoke API](https://icanhazdadjoke.com/)** to display a random joke.  
- Fetches automatically or on user action  
- Styled with a fun, lighthearted feel

<img width="844" height="642" alt="image" src="https://github.com/user-attachments/assets/3d6a27b1-bdf5-4cc3-8e27-5f69d01cb90d" />


### 🧰 Tech Stack
- ⚛️ React (Vite)
- 🧩 React Router
- 📡 Axios for API calls
- 🎨 CSS with variables and theming
- 🖼️ Modern responsive layout

---

## 🔑 NASA API Key Setup

1. Get your free key from [NASA Open APIs](https://api.nasa.gov/).  
2. Set it as an environment variable:
   ```bash
   set NASA_API_KEY=your_api_key_here
