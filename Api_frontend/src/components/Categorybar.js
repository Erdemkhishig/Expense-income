'use client'
import { useState, useEffect } from "react";

import { useData } from "./Context";
import { Eye } from "lucide-react";


export const Categorybar = () => {
    const { allCategories, fetchCategories, setallCategories } = useData();
    const URL = "http://localhost:3001";
    // useEffect(() => {
    //     fetchCategories();
    // }, [fetchCategories]);



    return (
        <div className="flex flex-col gap-4 mb-8 h-fit overflow-scroll">
            {allCategories.map((el, index) => (
                <button key={index}
                    className="text-sm flex items-center w-full justify-between">
                    <div className="flex gap-2 "><Eye color="#94A3B8" />{el.name}</div>
                    <svg width="12" height="12" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.91671 3.58327L1.75004 5.74994C1.48615 6.01383 1.18407 6.07286 0.843791 5.92702C0.503513 5.78119 0.333374 5.52077 0.333374 5.14577L0.333374 0.854106C0.333374 0.479106 0.503513 0.21869 0.843791 0.0728569C1.18407 -0.0729766 1.48615 -0.0139489 1.75004 0.24994L3.91671 2.41661C4.00004 2.49994 4.06254 2.59022 4.10421 2.68744C4.14587 2.78466 4.16671 2.88883 4.16671 2.99994C4.16671 3.11105 4.14587 3.21522 4.10421 3.31244C4.06254 3.40966 4.00004 3.49994 3.91671 3.58327Z" fill="#1C1B1F" />
                    </svg>
                </button>
            ))}
        </div>

    )
}
