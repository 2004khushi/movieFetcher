# 🎬 Movie Discovery & Trending Analytics App

A modern movie discovery web application built using **React**, **TMDB API**, and **Appwrite**, focused on delivering a smooth search experience while tracking real-time search trends.

This project demonstrates frontend engineering fundamentals, API integration, debounced search, and basic analytics using a backend-as-a-service.

---

## 🚀 Live Features (Current Progress)

### 🔍 Movie Search
- Search movies in real-time using **TMDB API**
- Optimized search using **debouncing** to avoid unnecessary API calls
- Displays popular movies by default when no search term is provided

### 📈 Trending Movies Analytics
- Tracks searched movie terms
- Maintains a search count for each movie
- Displays **Top 5 Trending Movies** based on search frequency
- Data stored and managed using **Appwrite Database**

### ⚡ Performance & UX
- Loading indicators during API calls
- Graceful error handling for failed requests
- Clean conditional rendering for UI states (loading / error / success)

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- JavaScript (ES6+)
- CSS

**Backend / Services**
- Appwrite (Database & SDK)
- TMDB (The Movie Database API)

---

## 🧠 How It Works (High-Level)

1. User searches for a movie
2. Search input is debounced to reduce API hits
3. Movies are fetched from TMDB API
4. The searched term is logged in Appwrite:
    - If it exists → search count is incremented
    - If not → a new entry is created
5. Trending movies are fetched from Appwrite based on search count

---

## 📂 Project Structure

```bash
src/
├── components/
│   ├── Search.jsx
│   ├── MovieCard.jsx
│   └── Spinner.jsx
├── appwrite.js        # Appwrite database & analytics logic
├── App.jsx            # Main application logic
└── main.jsx
``` 

## ⚙️ Local Setup Instructions

Follow the steps below to run the project locally.

---

### 1️⃣ Clone the Repository
```bash
  git clone <your-repository-url>
cd <project-folder>
```
### 2️⃣ Install Dependencies
Make sure Node.js (v18 or above) is installed.
```bash 
   npm install
```

### 3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:
```bash 
  VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id

```

These variables are required to connect the application with TMDB and Appwrite services.

### 4️⃣ Appwrite Setup Requirements

Ensure the following are already configured in your Appwrite console:

 - A project created in Appwrite

 - A database inside the project

 - A collection with the following attributes:

     -- searchTerm (string)

     -- count (integer)

     -- movie_id (integer)

     -- poster_url (string)

 - Also make sure: Collection permissions allow read/write access as required

 - Appwrite endpoint is correctly set to https://cloud.appwrite.io/v1

### 5️⃣ Start the Development Server

```bash 
   npm run dev
```

The application will be available at:
```bash 
   http://localhost:PORT
```

### 🧪 How to Test the Application
 - Open the app in the browser 
 - Search for any movie name 
 - Observe search results fetched from TMDB 
 - Repeated searches increase the movie’s search count 
 - Reload the page to see updated Trending Movies based on search activity


