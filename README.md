# Help Center API and Frontend

## Overview

This project consists of a backend API and a frontend application for a Help Center system. The backend API allows users to manage "Help Center" cards, while the frontend provides an interface to interact with these cards.

## Project Structure

### Frontend

The frontend is a React application that includes the following components:

- **`Navbar.js`**: Displays the navigation bar with a logo and a "Submit a Request" button.
- **`Hero.js`**: Contains the main section with a search bar.
- **`Suggestions.js`**: Renders the list of suggestion cards fetched from the API.
- **`Footer.js`**: Contains the footer component (if applicable).

### Backend

The backend is an Express.js server with the following components:

- **`server.js`**: Sets up the Express server and connects to MongoDB.
- **`models/card.js`**: Defines the Mongoose model for the cards.
- **`routes/cards.js`**: Handles CRUD operations for cards.
- **`.gitignore`**: Lists files and directories to be excluded from version control (e.g., `node_modules`).

## Setup

### Cloning the Repository

1. **Clone the repository:**
   ```bash
   git clone https://github.com/AmruthaAkhila0730/assignment-FutureSkills.git
   
2. **Navigate to the project directory:**
```bash
cd assignment-FutureSkills
```
### Frontend

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

   The frontend application will be available at `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the `backend` directory with the following content:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. **Start the server:**
   ```bash
   npm start
   ```

   The backend API will be available at `http://localhost:5000`.

## API Endpoints

- **`GET /ping`**: Checks if the server is running.
- **`POST /api/cards`**: Creates a new card. Requires `title` and `description` in the request body.
- **`GET /api/cards`**: Retrieves all cards.
- **`GET /api/cards/:title`**: Retrieves a specific card by its title.

## Error Handling

The backend API includes error handling for:

- Non-existent cards
- Validation errors
- Server errors

### Instructions

- Replace `your_mongodb_connection_string` with your actual MongoDB connection string in the `.env` file setup section.
