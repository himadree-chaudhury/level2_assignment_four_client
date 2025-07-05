# Library Management System

A modern web application for managing a library's book inventory, built with React, TypeScript, Vite, and Tailwind CSS. The application allows users to view, add, edit, and delete books, with a responsive UI and form validation using Shadcn/UI components, Redux Toolkit for state management, and React Hook Form with Zod for form handling.

## Features
- **View Books**: Display a paginated, responsive table of all books with details like title, author, genre, ISBN, copies, and availability.
- **Add Books**: Create new books via a form with validation.
- **Edit Books**: Update book details in a modal with pre-filled form fields.
- **Delete Books**: Remove books with a confirmation dialog.
- **Responsive Design**: Optimized for mobile, tablet, and desktop screens.
- **State Management**: Uses Redux Toolkit Query for API interactions.
- **Form Validation**: Implements Zod for robust form validation.
- **Toast Notifications**: Displays success/error messages using Sonner.

## Tech Stack
- **Frontend**: React 19.1.0, TypeScript 5.8.3
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11, Shadcn/UI components
- **State Management**: Redux Toolkit 2.8.2, React Redux 9.2.0
- **Form Handling**: React Hook Form 7.60.0, Zod 3.25.74
- **Routing**: React Router 7.6.3
- **UI Components**: Radix UI (Alert Dialog, Dialog, Select, etc.), Lucide React for icons
- **Utilities**: clsx, tailwind-merge, class-variance-authority
- **Date Handling**: date-fns 4.1.0
- **Notifications**: Sonner 2.0.6
- **Linting/Formatting**: ESLint 9.29.0, Prettier 3.6.2

## Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **Git**: For cloning the repository

## Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/library-management-system.git
   cd library-management-system
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Set up environment variables**:
   Create a `.env` file in the root directory and add the API server URL:
   ```env
   VITE_SERVER_URL=https://library-server-himadree.vercel.app/api/v1/
   ```
4. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

## Scripts
- `npm run dev`: Starts the development server with Vite.
- `npm run build`: Builds the app for production with TypeScript compilation.
- `npm run lint`: Runs ESLint to check for code quality issues.
- `npm run preview`: Previews the production build locally.

## Project Structure
```
src/
├── components/        # Reusable UI components (Shadcn/UI, custom)
├── lib/              # Utility functions (e.g., cn, form validation)
├── redux/            # Redux Toolkit Query API setup
├── layouts/          # Shared layout components
├── pages/            # Main application pages (Home, AddBook, AllBooks, EditBook)
├── routes/           # Main app component with routing
├── main.tsx          # Entry point for React
└── index.css         # Tailwind CSS configuration
```

## Usage
1. **View Books**: Navigate to the `/` route to see the list of books in a responsive table.
2. **Add a Book**: Click "Add New Book" to open a form for creating a new book.
3. **Edit a Book**: Click "Edit" on a book row to open a dialog with pre-filled fields.
4. **Delete a Book**: Click "Delete" to open a confirmation dialog before removing a book.
5. **API Integration**: The app fetches data from the server specified in `VITE_SERVER_URL`. Ensure the server supports endpoints like `/books`, `/books/:id`, `POST /books`, `PATCH /books/:id`, and `DELETE /books/:id`.

## Dependencies
- **React & React DOM**: Core libraries for building the UI.
- **Redux Toolkit & React Redux**: For state management and API queries.
- **React Hook Form & Zod**: For form handling and validation.
- **Tailwind CSS & Plugins**: For styling and animations.
- **Radix UI Components**: For accessible dialogs, selects, and other UI elements.
- **Sonner**: For toast notifications.
- **date-fns & react-day-picker**: For date handling (if used in forms).
- **clsx & tailwind-merge**: For conditional class name utilities.

## Dev Dependencies
- **TypeScript**: For type safety.
- **Vite & @vitejs/plugin-react**: For fast development and production builds.
- **ESLint & Plugins**: For code linting.
- **Prettier & Tailwind Plugin**: For code formatting.
