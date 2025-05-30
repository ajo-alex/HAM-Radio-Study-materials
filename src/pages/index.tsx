import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function Home() {
  return (
    <div>
      <NavBar />
      <img
        src="https://images.pexels.com/photos/5195498/pexels-photo-5195498.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
        className="h-[80vh] w-full object-cover"
      />

      <Footer />
    </div>
  );
}

export default Home;
