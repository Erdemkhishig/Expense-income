"use client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaPowerOff } from "react-icons/fa6";

import { Addbutton } from "./Addbutton";
import Link from "next/link";
import { useAuth } from '@/components/Authprovider';
import { FaUser } from "react-icons/fa";


export const Navbar = () => {
    const { logout, user } = useAuth();






    return (


        <div className="flex items-center justify-between py-4 px-16 bg-white ">
            <div className="flex gap-8">
                <Link href="/">
                    <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.8297 9.36772V0.300781H9.56526V9.36772H0.300781V18.6322H9.56526V27.6991H18.8297V18.6322H28.0942V9.36772H18.8297ZM18.8297 18.4347H9.56526V9.56665H18.8297V18.4347Z" fill="#0166FF" />
                    </svg>
                </Link>
                <Link href="/dashboard"><span>Dashboard</span>  </Link>
                <Link href="/records"><span>Records</span></Link>
            </div>
            <div className="flex gap-8 items-center">
                <div className="w-full"><Addbutton /></div>
                {user && (
                    <div className="text-blue-500 flex items-center gap-2 border-2 rounded-xl px-2 border-blue-500">
                        <FaUser /> <p>=</p> {user.name}
                    </div>
                )}
                {user && (
                    <Avatar>
                        <AvatarImage src="Avatar.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                )}
                {user && (
                    <button onClick={logout}>
                        <FaPowerOff size={24} color="blue" />
                    </button>
                )}
            </div>

        </div>
    )
}