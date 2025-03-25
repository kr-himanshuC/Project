import React from "react";
import Navbar from "@/components/ui/myComp/Navbar";
import Hero from "@/components/ui/myComp/Hero";
import Footer from "@/components/ui/myComp/Footer";
import VaccineType from "@/components/ui/myComp/VaccineType";
import Result from "@/components/ui/myComp/Result";
import Vaccination from "@/components/ui/myComp/Vaccination";
import Registration from "@/components/ui/myComp/Registration";
import Symptoms from "@/components/ui/myComp/Symptoms";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-auto ">
        {/* Background Image */}
        

        {/* Content */}
        <div className="@container relative h-auto z-10 bg-backgroundColor ">
        <div className=" absolute bg-[url('/image.png')] -z-10 h-full min-w-screen opacity-20 bg-cover"></div>
          <Navbar />
          <Hero />
          <Footer />
        </div>

        <div className="@container">
        <VaccineType />
        </div>
        
        <div className="@container relative z-10 h-auto bg-backgroundColor ">
        <div className=" absolute bg-[url('/image.png')] -z-10 h-full min-w-screen opacity-20 bg-cover"></div>
          <Result />
        </div>

        <div className="@container relative z-10 h-auto bg-backgroundColor ">
        <div className=" absolute bg-[url('/image.png')] -z-10 h-full min-w-screen opacity-20 bg-cover"></div>
          <Vaccination />
        </div>

        <div className="@container">
        <Registration />
        </div>

        <div className="@container relative z-10 h-auto bg-backgroundColor ">
        <div className=" absolute bg-[url('/image.png')] -z-10 h-full min-w-screen opacity-20 bg-cover"></div>
          <Symptoms />
        </div>

      </div>
    </>
  );
}
