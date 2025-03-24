import React from "react";
import Navbar from "@/components/ui/myComp/Navbar";
import Hero from "@/components/ui/myComp/Hero";
import Footer from "@/components/ui/myComp/Footer";

export default function Home() {
  return (
    <>
      <div className="min-h-screen relative">
        {/* Background Image */}
        {/* <div className=" absolute bg-[url('/image.png')] min-h-screen min-w-screen opacity-20 bg-cover"></div> */}

        {/* Content */}
        <div className="@container bg-backgroundColor ">
          <Navbar />
          <Hero />
          <Footer />
        </div>
      </div>
    </>
  );
}
