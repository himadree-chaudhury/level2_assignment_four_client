import logo from "@/assets/logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center justify-between gap-5 bg-gray-800 p-4 text-white sm:flex-row">
        <Link to="/">
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-semibold">
              Library Management System
            </span>
          </div>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a href="/books" className="hover:underline">
              All Books
            </a>
          </li>
          <li>
            <a href="/create-book" className="hover:underline">
              Add Books
            </a>
          </li>
          <li>
            <a href="/borrow-summary" className="hover:underline">
              Borrow Summary
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
