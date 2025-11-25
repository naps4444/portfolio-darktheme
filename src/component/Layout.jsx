import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";


export default function Layout({ children }) {
  return (
    <div className="bg-[#222831] text-white min-h-screen flex flex-col">
      <Navbar/>

      {/* Main page content */}
      <main className="flex-1">
        {children}
      </main>

      <Footer/>
    </div>
  );
}
