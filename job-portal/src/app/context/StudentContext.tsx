"use client"
import { createContext, useContext, useState } from "react";

type AuthStudent = {
    roleStudent: boolean
}

export type StudentContextType = {
    student: any;
    setStudent: any;
}

type StudentContextProviderType = {
    children: React.ReactNode
}

export const StudentContext = createContext({} as StudentContextType);

export const StudentContextProvider = ({children}: StudentContextProviderType) => {
    const [student, setStudent] = useState<AuthStudent | boolean>(true);
    return <StudentContext.Provider value={{student,setStudent}}>{children}</StudentContext.Provider>
}
export const useUser = ()=> useContext(StudentContext) 
