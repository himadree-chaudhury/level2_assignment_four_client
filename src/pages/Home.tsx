import logo from "@/assets/logo.png";
import AllBooks from "./AllBooks";

const Home = () => {
  return (
      <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="Library Logo" className="mx-auto mt-4 w-48" />
      <h1 className="mt-4 text-center text-4xl font-bold">
        Library Management System
      </h1>
      <p className="mt-4 text-center">
        Welcome to the Library Management System. Please navigate using the menu
        above.
      </p>
      <div className="mt-12">
      <AllBooks/>
      </div>
    </div>
  );
};

export default Home;
