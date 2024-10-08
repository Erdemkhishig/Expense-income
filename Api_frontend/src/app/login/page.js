"use client"
import Image from "next/image";
import * as React from "react"
import { useAuth } from "../../components/Authprovider";

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Link from "next/link";
import { useState, useEffect } from 'react'
import { UserContext } from "@/components/Context";
import { useContext } from "react";
import { Laugh } from "lucide-react";


const Page = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    return (
        <main className="max-w-screen-3xl m-auto flex h-screen items-center">
            <div className="flex bg-white h-full w-1/2 items-center justify-center">

                <Card className="w-1/2 flex flex-col gap-8 border-0">
                    <CardHeader className="flex justify-center items-center gap-8">
                        <CardTitle><svg width="94" height="36" viewBox="0 0 94 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22.1292 14.0265V6.24878H14.1821V14.0265H6.23486V21.9737H14.1821V29.7515H22.1292V21.9737H30.0764V14.0265H22.1292ZM22.1292 21.8043H14.1821V14.1972H22.1292V21.8043Z" fill="#0166FF" />
                            <path d="M47.1669 17.6325H54.7555V24.0752C53.2205 25.567 50.8856 26.3453 48.1615 26.3453C42.8646 26.3453 39.5352 23.2969 39.5352 18.3892C39.5352 13.4815 42.8646 10.4115 47.8372 10.4115C50.6045 10.4115 52.7016 11.2547 54.1718 12.6167L52.2476 14.7787C51.2098 13.8706 49.6316 13.2869 47.8588 13.2869C44.7671 13.2869 42.7133 15.2543 42.7133 18.3892C42.7133 21.6322 44.8536 23.5347 48.2696 23.5347C49.6316 23.5347 50.8639 23.2969 51.8801 22.5402V20.3133H47.1669V17.6325Z" fill="black" />
                            <path d="M68.49 20.1404C68.49 20.335 68.49 20.789 68.4684 21.0268H59.3016C59.6259 22.778 60.8366 23.7725 62.7824 23.7725C64.166 23.7725 65.3984 23.2536 66.1983 22.2591L68.0792 23.859C66.9982 25.3508 65.2686 26.2804 62.5662 26.2804C58.6097 26.2804 56.2748 23.859 56.2748 20.0971C56.2748 16.3569 58.8043 13.9139 62.4148 13.9139C66.4793 13.9139 68.49 16.5083 68.49 20.1404ZM62.4148 16.4002C60.9014 16.4002 59.6907 17.1569 59.3232 18.8648H65.5713C65.3983 17.5676 64.4687 16.4002 62.4148 16.4002Z" fill="black" />
                            <path d="M70.4358 26.0426V9.65479H73.4193V26.0426H70.4358Z" fill="black" />
                            <path d="M81.322 26.302C77.8628 26.302 75.6144 23.9022 75.6144 20.1188C75.6144 16.3353 77.8845 13.9571 81.1923 13.9571C82.403 13.9571 83.8515 14.303 84.8244 15.2543V9.65479H87.7647V26.0426H84.8677V24.8967C83.938 26.021 82.4679 26.302 81.322 26.302ZM81.9706 23.6212C83.0948 23.6212 84.2623 23.1672 84.8677 22.0646V18.1514C84.2623 17.1785 83.0516 16.638 81.9057 16.638C80.0248 16.638 78.6844 17.8919 78.6844 20.1188C78.6844 22.3024 79.9816 23.6212 81.9706 23.6212Z" fill="black" />
                        </svg>
                        </CardTitle>

                        <div className="flex flex-col justify-center items-center text-black">
                            <div className="text-lg font-bold flex gap-2 ">Welcome back !

                            </div>
                            <div >Welcome back, please enter your details</div>


                        </div>
                    </CardHeader>
                    <CardContent>
                        <div>
                            <div className="flex flex-col w-full items-center gap-4 ">
                                <div className="flex flex-col space-y-1.5">

                                    <input
                                        className="border p-2 w-[300px]"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }} />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <input
                                        className="border p-2 w-[300px]"
                                        placeholder="Password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </div>
                                <button
                                    className="bg-blue-500 text-white p-2 rounded-md mt-6 w-[300px]"
                                    onClick={() => login(email, password)}
                                >
                                    Submit
                                </button >
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex gap-2 justify-center">
                        <div>Dont have account ?</div>
                        <Link href="/" className="text-[#0166FF]"> Sign up</Link>


                    </CardFooter>
                </Card>

            </div>
            <div className="flex bg-[#0166FF] h-full w-1/2 ">

            </div>

        </main>
    );
}

export default Page;