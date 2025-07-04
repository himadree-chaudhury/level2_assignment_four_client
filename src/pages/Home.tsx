import { useGetAllBooksQuery } from "@/redux/api/baseApi";
import logo from "@/assets/logo.png";

const Home = () => {
  const { data, error, isLoading } = useGetAllBooksQuery(undefined);
  console.log(data?.data, error, isLoading);
  return (
      <div className="flex flex-col items-center justify-center">
          <img src={logo} alt="Library Logo" className="mx-auto mt-4" />
      <h1 className="mt-10 text-center text-4xl font-bold">
        Library Management System
      </h1>
      <p className="mt-4 text-center">
        Welcome to the Library Management System. Please navigate using the menu
        above.
      </p>
    </div>
  );
};

export default Home;
