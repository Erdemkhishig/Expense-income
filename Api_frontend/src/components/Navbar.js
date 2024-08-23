"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


import { Addbutton } from "./Addbutton";
import Link from "next/link";


export const Navbar = () => {






    return (


        <div className="flex items-center justify-between py-4 px-16 bg-white ">
            <div className="flex gap-8">
                <Link href="/">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z" fill="#0166FF" />
                    </svg>
                </Link>
                <span>Dashboard</span>
                <span className="font-bold">Records</span>
            </div>
            <div className="flex gap-8">
                <div className="w-full"><Addbutton /></div>

                <Avatar>
                    <AvatarImage src="Avatar.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>



            </div>

        </div>
    )
}