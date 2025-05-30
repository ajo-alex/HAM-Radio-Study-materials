import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PageHeader from "@/components/PageHeader";
import React from "react";

function HallOfFame() {
  return (
    <div>
      <NavBar />
      <hr />
      <PageHeader label="Hall of Fame" />
      <Footer />
    </div>
  );
}

export default HallOfFame;
