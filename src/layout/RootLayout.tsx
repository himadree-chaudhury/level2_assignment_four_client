import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto max-w-screen-2xl flex-grow py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default RootLayout;
