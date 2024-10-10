import NavBart from "@/components/navbar/NavBar";
import React from "react";

export default function PublicLayout({
    children
}:{
    children: React.ReactNode
}){
    return(
        <>  
            <NavBart/>
            <main className="flex flex-col items-center p-24">
            <span className="text-lg">
                Hola Mundo
            </span>
            { children }
        </main>
        </>
    )
}