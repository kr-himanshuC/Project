"use client"
import Navbar from "@/components/myComp/Navbar";
import Image from "next/image";
import React, { useContext, useState } from "react";

export interface StudentContextType {
  student: boolean;
}


export const StudentContext = React.createContext<StudentContextType | null>(null);
export const useStudentContext = () => useContext(StudentContext)
export default function Home() {
  const [student, setStudent] = useState(true)
  return (
    // <StudentContext.Provider value={{student: student, setStudent: setStudent}} >
      <div className="">
        <Navbar />

        <div className="flex justify-center mt-30 text-2xl">
          Welcome...
        </div>
      </div>
      // </StudentContext.Provider>
  );
}
