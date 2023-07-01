"use clien"

import { useState } from "react"

export default function Loading() {
   
    return(
        <div className="w-[100%] h-[100%] overflow-hidden absolute flex justify-center top-0 right-0 bg-gray-50 opacity-40 z-[200]">
            <div className="w-[50%] h-[50%] flex items-center justify-center gap-4">
                <div className=" w-[1rem] h-[7rem] bg-black line1 load z-[250]"/>
                <div className=" w-[1rem] h-[7rem] bg-black line2 load z-[300]" />
                <div className=" w-[1rem] h-[7rem] bg-black line3 load z-[300]"/>
            </div>
        </div>
    )
};
