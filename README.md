# 🎬 Movie Explorer

### Discover Movies. Select Seats. Book Tickets.

Movie Explorer is a movie discovery and ticket booking web application built using React.js and Vite.

Users can explore movies, search for their favorite movies, view movie details, select showtimes, choose seats, and manage their bookings.

This project is created to learn React.js concepts and build a real-world frontend application inspired by movie booking platforms like BookMyShow.

> **Note:** This is a learning project. Login, payment, and ticket booking features may use demo data and localStorage. It does not process real payments.

---

## 📌 Table of Contents

1. About the Project
2. Project Goals
3. Features
4. Technology Stack
5. System Architecture
6. Application Flow
7. Project Folder Structure
8. How the Application Works
9. Movie Booking Flow
10. API Integration
11. Authentication
12. State Management
13. Installation and Setup
14. Environment Configuration
15. Available Pages
16. React Concepts Used
17. Future Improvements
18. Learning Outcomes
19. Author

---

## 1. About the Project

Movie Explorer helps users discover movies and manage movie tickets through a simple and responsive user interface.

Users can search for movies, explore movie information, add movies to their favorites, select theatre showtimes, choose seats, and view their booking details.

The application uses React components to make the code reusable and easy to maintain.

It also uses React Router for page navigation and Context API for sharing application data between components.

---

## 2. Project Goals

The main goals of this project are:

- Learn React.js by building a real project.
- Create reusable UI components.
- Understand props and state management.
- Fetch movie data from an API.
- Implement search and filtering.
- Learn routing and navigation.
- Implement demo authentication.
- Create a theatre-style seat selection interface.
- Manage bookings using localStorage.
- Build a responsive application for desktop, tablet, and mobile.

---

## 3. Features

### 🎥 Movie Discovery

- View recommended movies.
- Explore trending movies.
- View upcoming or currently running movies, depending on the available data.
- Search for movies by name.
- View movie details.
- Browse movie sections and genres.

### ❤️ Favorites

- Add movies to favorites.
- Remove movies from favorites.
- View saved favorite movies.

### 🔐 Authentication

- Login using configured demo credentials.
- Store demo user details.
- Keep the login state using localStorage.
- Protect selected pages from unauthorized access.
- View profile information.

### 🎟️ Movie Ticket Booking

- Select a movie showtime.
- View a theatre-style seat layout.
- Select and deselect seats.
- View selected seat numbers.
- Calculate the total ticket price.
- See different seat categories and prices.
- Continue to demo payment.
- View booking confirmation.
- Access saved bookings.
- Cancel eligible demo bookings.

### 🎫 Digital Tickets

- View booking information.
- Display movie, showtime, seat, and price details.
- Generate a QR code for the ticket when implemented.
- View ticket details from the bookings section.

### 🎨 User Interface

- Responsive design.
- Light and dark theme support.
- Reusable React components.
- Loading indicators.
- Error messages and retry options.
- Navigation using React Router.

**Important:** Features should be marked as completed only after they are implemented and tested in the application.

---

## 4. Technology Stack

| Technology | Purpose |
|---|---|
| React.js | Build the user interface |
| Vite | Start and build the application |
| JavaScript | Application logic |
| React Router | Navigate between pages |
| Tailwind CSS | Style the user interface |
| Material UI | Build selected UI elements |
| Axios or Fetch | Request API data |
| Context API | Share application state |
| React Hooks | Manage state and side effects |
| localStorage | Save demo data in the browser |
| Lucide React | Display icons |
| QR code library | Generate ticket QR codes |
| Git and GitHub | Version control and code sharing |

The exact libraries used depend on the packages installed in `package.json`.

---

## 5. System Architecture

The application follows a component-based architecture.

Each part has a specific responsibility. Pages display the content, components build the UI, contexts share global data, and services handle API requests.

### Architecture Diagram

```text
                 USER
                   |
                   v
             React Application
                   |
                   v
                Navbar
                   |
                   v
             React Router
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
      Home       Movies      Profile
       |           |           |
       +-----------+-----------+
                   |
                   v
           Reusable Components
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
    Movie UI   Booking UI   Common UI
                   |
                   v
           Context API / Hooks
                   |
       +-----------+-----------+
       |           |           |
       v           v           v
   Auth State  Favorites    Bookings
       |           |           |
       +-----------+-----------+
                   |
                   v
             localStorage

       API Services
            |
            v
      External Movie API
```

### Architecture Explanation

- **User:** Uses the application through the browser.
- **React Application:** Displays the user interface.
- **React Router:** Opens the correct page based on the URL.
- **Components:** Display movies, search bars, cards, seats, and other UI elements.
- **Context API:** Shares login, theme, favorites, and booking information.
- **Hooks:** Manage reusable logic such as API requests.
- **localStorage:** Saves selected application data in the browser.
- **API Services:** Request movie information from an external API.

---

## 6. Application Flow

The general application flow is:

```text
Start Application
       |
       v
     Home Page
       |
       v
  Search for Movies
       |
       v
 Select a Movie
       |
       v
  Movie Details
       |
       v
 Select Showtime
       |
       v
  Select Seats
       |
       v
 Review Booking
       |
       v
   Demo Payment
       |
       v
Booking Confirmation
       |
       v
  My Bookings
       |
       v
   View Ticket
```

Users can also visit Favorites, Profile, Trending, Upcoming, and other available pages through the navigation bar.

---

## 7. Project Folder Structure

The project uses a modular folder structure to keep files organized.

```text
movie-explorer/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │   ├── images/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── Navbar/
│   │   ├── SearchBar/
│   │   ├── LocationSelector/
│   │   ├── HeroBanner/
│   │   ├── MovieCard/
│   │   ├── MovieList/
│   │   ├── MovieSection/
│   │   ├── GenreSection/
│   │   ├── CitySection/
│   │   ├── EventCard/
│   │   ├── Loader/
│   │   ├── ErrorMessage/
│   │   ├── RetryButton/
│   │   ├── ProtectedRoute/
│   │   │
│   │   └── Booking/
│   │       ├── BookingPanel.jsx
│   │       ├── ShowTimeSelector.jsx
│   │       ├── SeatLayout.jsx
│   │       ├── SeatLegend.jsx
│   │       ├── BookingSummary.jsx
│   │       ├── PaymentDetails.jsx
│   │       └── BookingSuccess.jsx
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── Movies/
│   │   ├── MovieDetails/
│   │   ├── Trending/
│   │   ├── Upcoming/
│   │   ├── Favorites/
│   │   ├── Events/
│   │   ├── Login/
│   │   ├── Profile/
│   │   ├── Bookings/
│   │   └── Ticket/
│   │
│   ├── context/
│   │   ├── AuthContext.jsx
│   │   ├── ThemeContext.jsx
│   │   ├── FavoritesContext.jsx
│   │   └── BookingContext.jsx
│   │
│   ├── hooks/
│   │   ├── useFetch.js
│   │   └── useAuth.js
│   │
│   ├── services/
│   │   └── api.js
│   │
│   ├── utils/
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── routes/
│   │   └── AppRoutes.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

*Note: This is the planned project structure. Some folders and files may be added as the project grows.*

### Folder Explanation

- `components/` — Contains reusable UI components.
- `pages/` — Contains complete application pages.
- `context/` — Manages global application state.
- `hooks/` — Contains reusable React logic.
- `services/` — Contains API request functions.
- `utils/` — Contains helper functions and constants.
- `routes/` — Defines application routes.
- `assets/` — Stores images and icons.
- `App.jsx` — Combines the main layout and routes.
- `main.jsx` — Starts React and configures providers.
- `index.css` — Contains global styles.
- `README.md` — Explains the project and setup instructions.

---

## 8. How the Application Works

### 8.1 Home Page

The Home page displays movie sections and the search bar.

It requests movie data and displays loading, error, and success states.

### 8.2 Search

The user enters a movie name in the search bar.

The application filters the available movie data and displays matching results.

### 8.3 Movie Details

When the user selects a movie, React Router opens its details page.

The movie ID is taken from the URL using `useParams()`.

Example:

```text
/movie/123
```

### 8.4 Favorites

Users can add movies to their favorites list.

Favorites Context shares the saved movies with the relevant components.

### 8.5 Theme

Users can switch between light and dark themes.

Theme Context manages the selected theme and can save it in localStorage.

### 8.6 Profile

The Profile page displays the logged-in demo user's information.

The user information comes from the authentication state.

### 8.7 Bookings

The Bookings page displays saved demo bookings.

Users can open a ticket and cancel a booking when cancellation is supported.

---

## 9. Movie Booking Flow

The booking feature follows a step-by-step process.

### Step 1: Select Showtime

The user selects a date, theatre, and available showtime.

### Step 2: Select Seats

The application displays a theatre-style seating layout.

```text
              MOVIE SCREEN
        ______________________

        A1  A2  A3  A4  A5
        B1  B2  B3  B4  B5
        C1  C2  C3  C4  C5

             Seat Layout
```

The seat layout above is only an example.

### Step 3: Seat Categories

Different seat categories can have different prices.

Example pricing for demonstration:

| Category | Example Price |
|---|---:|
| Lower | ₹150 |
| Middle | ₹200 |
| Upper | ₹250 |

These are sample prices and can be changed in the application.

### Step 4: Calculate Total

The application calculates the price based on the selected seats.

```text
Total Price = Sum of Selected Seat Prices
```

For example:

```text
2 Lower Seats = ₹300
1 Middle Seat = ₹200

Total = ₹500
```

### Step 5: Demo Payment

The user reviews the booking and enters the required demo payment details.

No real payment should be processed by this demo flow.

### Step 6: Booking Confirmation

After successful demo validation, the application saves the booking details.

### Step 7: View Ticket

The user can open My Bookings and view the ticket details, including the movie, showtime, seats, and total amount.

A QR code can be generated for the saved ticket.

### Booking Architecture Diagram

```text
MovieDetails
     |
     v
BookingPanel
     |
     v
ShowTimeSelector
     |
     v
SeatLayout
     |
     v
BookingSummary
     |
     v
PaymentDetails
     |
     v
BookingContext
     |
     v
localStorage
     |
     v
Bookings Page
     |
     v
Ticket Page
```

### Important Booking Note

This is a frontend learning workflow. A production booking system needs a backend to verify seat availability, prevent double booking, process secure payments, and validate ticket ownership.

---

## 10. API Integration

The `services/api.js` file contains the functions used to request movie data.

The application can use an external movie API, such as TVMaze, for supported movie or show information.

### API Flow

```text
React Page
    |
    v
Custom useFetch Hook
    |
    v
services/api.js
    |
    v
External API
    |
    v
JSON Response
    |
    v
React State
    |
    v
Display Movie Data
```

### API Request Example

```javascript
// Example using fetch

export const getShows = async () => {
  const response = await fetch(
    "https://api.tvmaze.com/shows"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch shows");
  }

  return response.json();
};
```

The example above uses TVMaze show data. If the project uses Axios or a different endpoint, update the function to match the actual implementation.

### API States

The application should handle three main states:

- **Loading:** Data is being requested.
- **Success:** Data has been received.
- **Error:** The request failed.

A retry button can allow the user to try the request again.

---

## 11. Authentication

Movie Explorer uses demo authentication instead of a real authentication backend.

The user enters the configured demo credentials on the Login page.

If the credentials are valid, the application saves the demo user information and updates the authentication state.

### Authentication Flow

```text
Login Page
    |
    v
Enter Credentials
    |
    v
Validate Demo Credentials
    |
    +------ Invalid ------> Show Error
    |
    v
Save Demo User
    |
    v
AuthContext
    |
    v
Open Protected Page
```

### Protected Routes

Protected routes can prevent users who are not logged in from opening selected pages.

Examples include Profile and other pages that require login.

**Security note:** Frontend-only demo authentication is not secure for production. Real authentication requires a backend and proper password handling.

---

## 12. State Management

React state is used to manage changing information in the application.

| State or Context | Purpose |
|---|---|
| AuthContext | Login and user information |
| ThemeContext | Light and dark themes |
| FavoritesContext | Favorite movies |
| BookingContext | Selected and saved bookings |
| useState | Local component state |
| useEffect | Handle side effects |
| useFetch | Reuse API request logic |

### State Management Diagram

```text
             React Application
                     |
          +----------+----------+
          |          |          |
          v          v          v
       Auth       Theme      Favorites
          |          |          |
          +----------+----------+
                     |
                     v
                  Booking
                     |
                     v
                localStorage
```

Context providers should wrap the components that use their data.

---

## 13. Installation and Setup

Follow these steps to run the project on your computer.

### Prerequisites

Install the following tools:

- Node.js
- npm
- Visual Studio Code
- Git (optional)

### Step 1: Clone the Repository

If the project is available on GitHub:

```bash
git clone YOUR_REPOSITORY_URL
```

Replace `YOUR_REPOSITORY_URL` with your actual GitHub repository URL.

### Step 2: Open the Project

```bash
cd movie-explorer
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL shown in your terminal. Vite commonly uses:

```text
http://localhost:5173
```

The exact port may be different if another application is using it.

### Step 6: Build for Production

```bash
npm run build
```

### Step 7: Preview the Production Build

```bash
npm run preview
```

---

## 14. Environment Configuration

If the project requires API keys, create a `.env` file in the project root.

Example:

```env
VITE_MOVIE_API_KEY=your_api_key_here
```

Only add environment variables that your code actually uses.

For a public API that does not require a key, this file may not be needed.

**Important:** Variables starting with `VITE_` are exposed to frontend code. Never store passwords, private API secrets, or payment secrets in frontend environment variables.

---

## 15. Available Pages

| Page | Purpose |
|---|---|
| Home | Displays movie sections and search |
| Movies | Displays the movie collection |
| Movie Details | Displays selected movie information |
| Trending | Displays trending content |
| Upcoming | Displays upcoming content |
| Favorites | Displays saved favorite movies |
| Events | Displays event information, if implemented |
| Login | Handles demo login |
| Profile | Displays demo user information |
| Bookings | Displays saved bookings |
| Ticket | Displays ticket details and QR code, if implemented |

The actual pages depend on the routes and components implemented in the project.

---

## 16. React Concepts Used

This project helps practice the following React concepts.

### Components and Props

Reusable components receive information through props.

Example: MovieCard receives movie details from its parent component.

### State

`useState` stores values that can change, such as search text and selected seats.

### Effects

`useEffect` handles side effects, such as loading data or updating the document theme.

### Conditional Rendering

The application displays different UI based on loading, error, login, and booking states.

### Lists and Keys

Movie cards, favorite movies, bookings, and seats are rendered using lists.

### React Router

React Router manages page navigation and URL parameters.

### Context API

Context API shares information between components without passing props through every level.

### Custom Hooks

Custom hooks help reuse logic, such as fetching data and accessing authentication information.

### Performance Optimization

`React.memo`, `useMemo`, and `useCallback` can be used when they provide a real performance benefit.

### Forms and Validation

Forms collect user input and validate the required fields.

### Error Handling

The application displays useful error messages when requests or actions fail.

---

## 17. Future Improvements

The following features can be added in future versions:

- Real user registration and login.
- Backend integration using Node.js and Express.js.
- MongoDB database for users and bookings.
- Real-time seat availability.
- Secure payment gateway integration.
- Booking confirmation emails.
- Movie reviews and ratings.
- Advanced search and filters.
- Pagination or infinite scrolling.
- Automated tests using Jest and React Testing Library.
- Deployment to a hosting platform.
- Admin dashboard for managing movies and bookings.

---

## 18. Learning Outcomes

By building this project, I can practice:

- Building applications with React.js and Vite.
- Creating reusable components.
- Managing state with React Hooks.
- Fetching data from external APIs.
- Handling loading and error states.
- Implementing client-side routing.
- Using Context API.
- Saving demo data in localStorage.
- Creating responsive user interfaces.
- Implementing a movie ticket booking flow.
- Organizing a React project using a modular folder structure.
- Debugging and maintaining frontend code.

---

## 19. Author

**Harsha Vardhan**

Frontend Developer | React.js | JavaScript

This project is part of my practical learning journey in frontend development.

---

## 📄 License

This project is created for learning and demonstration purposes.

You can add a suitable open-source license if you plan to share the source code publicly.

---

**Thank you for exploring Movie Explorer! 🎬**
