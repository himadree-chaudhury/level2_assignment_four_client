import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden">
      <Navbar />
      <main className="mx-auto max-w-screen-2xl flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
