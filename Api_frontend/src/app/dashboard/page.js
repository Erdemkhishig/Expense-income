"use client"

import { useState, useEffect } from 'react'

import axios from 'axios';

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Main } from "@/components/Main";




export default function Dashboard() {





    return (
        <main>
            <div className="px-4 max-w-screen-2xl m-auto ">
                <Navbar />
            </div>
            <div className="w-full m-auto bg-gray-100  h-full pb-16">


                <div className="px-4 py-8 flex gap-8 justify-center ">
                    <div className='h-[256px] w-[432px] bg-[#0166FF] rounded-lg'>
                        <div className='p-8'>
                            <svg width="87" height="36" viewBox="0 0 81 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.5348 11.4716V4.70337H11.6191V11.4716H4.70337V18.3873H11.6191V25.1556H18.5348V18.3873H25.4505V11.4716H18.5348ZM18.5348 18.2399H11.6191V11.6201H18.5348V18.2399Z" fill="white" />
                                <path d="M40.3229 14.6097H46.9265V20.2162C45.5907 21.5144 43.5588 22.1917 41.1883 22.1917C36.579 22.1917 33.6816 19.5389 33.6816 15.2682C33.6816 10.9975 36.579 8.32596 40.9061 8.32596C43.3143 8.32596 45.1392 9.05969 46.4185 10.245L44.7441 12.1263C43.8411 11.3362 42.4676 10.8282 40.9249 10.8282C38.2346 10.8282 36.4473 12.5402 36.4473 15.2682C36.4473 18.0903 38.3098 19.7459 41.2824 19.7459C42.4676 19.7459 43.54 19.5389 44.4243 18.8804V16.9426H40.3229V14.6097Z" fill="white" />
                                <path d="M58.8784 16.7921C58.8784 16.9614 58.8784 17.3565 58.8595 17.5635H50.8825C51.1647 19.0874 52.2183 19.9528 53.9115 19.9528C55.1156 19.9528 56.188 19.5013 56.8841 18.6359L58.5209 20.0281C57.5802 21.3262 56.0751 22.1352 53.7234 22.1352C50.2805 22.1352 48.2486 20.0281 48.2486 16.7545C48.2486 13.4997 50.4498 11.3738 53.5917 11.3738C57.1287 11.3738 58.8784 13.6314 58.8784 16.7921ZM53.5917 13.5374C52.2747 13.5374 51.2212 14.1958 50.9013 15.6821H56.3385C56.188 14.5533 55.379 13.5374 53.5917 13.5374Z" fill="white" />
                                <path d="M60.5716 21.9283V7.66748H63.1679V21.9283H60.5716Z" fill="white" />
                                <path d="M70.0449 22.154C67.0347 22.154 65.0781 20.0657 65.0781 16.7733C65.0781 13.4809 67.0535 11.4114 69.932 11.4114C70.9856 11.4114 72.2461 11.7124 73.0927 12.5402V7.66748H75.6514V21.9283H73.1303V20.9311C72.3214 21.9095 71.042 22.154 70.0449 22.154ZM70.6093 19.8211C71.5876 19.8211 72.6036 19.426 73.1303 18.4665V15.0613C72.6036 14.2146 71.55 13.7443 70.5529 13.7443C68.9161 13.7443 67.7496 14.8355 67.7496 16.7733C67.7496 18.6735 68.8784 19.8211 70.6093 19.8211Z" fill="white" />
                            </svg>
                        </div>
                        <div className=' text-white p-8'>
                            <p className='text-lg opacity-50'>Cash</p>
                            <div className='flex items-center justify-between'>
                                <p className='text-2xl py-2'>amount</p>

                                <svg width="44" height="44" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo">
                                        <g id="Union">
                                            <path d="M21.2692 10.0015C21.6815 9.6826 22.2743 9.7583 22.5932 10.1706C27.1419 16.0511 27.1289 23.744 22.5945 29.632C22.2764 30.045 21.6838 30.122 21.2708 29.8039C20.8578 29.4859 20.7808 28.8932 21.0989 28.4802C25.1125 23.2686 25.1207 16.5234 21.1001 11.3256C20.7812 10.9132 20.8569 10.3205 21.2692 10.0015Z" fill="white" />
                                            <path d="M17.5023 12.4362C17.9143 12.1169 18.5071 12.1921 18.8264 12.6042C22.2385 17.0076 22.2246 22.7872 18.8281 27.1969C18.51 27.6098 17.9174 27.6867 17.5044 27.3687C17.0915 27.0506 17.0145 26.458 17.3326 26.045C20.2089 22.3107 20.2163 17.4797 17.3343 13.7604C17.015 13.3483 17.0902 12.7555 17.5023 12.4362Z" fill="white" />
                                            <path d="M15.6918 15.9561C15.3739 15.543 14.7813 15.4658 14.3682 15.7838C13.9551 16.1017 13.878 16.6943 14.1959 17.1074C15.4989 18.8004 15.5068 20.9748 14.1964 22.6748C13.8781 23.0877 13.9548 23.6803 14.3677 23.9986C14.7805 24.3168 15.3732 24.2401 15.6914 23.8273C17.528 21.4447 17.5146 18.3244 15.6918 15.9561Z" fill="white" />
                                        </g>
                                    </g>
                                </svg>
                            </div>


                        </div>



                    </div>
                    <div className='h-[256px] w-[432px] bg-white rounded-lg'>
                        <div className='flex gap-2 items-center p-4 border-gray-100 border-b-2'>
                            <p className='h-3 w-3 rounded-full bg-green-400'></p>
                            <p className='font-bold text-lg'>Your Income</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center p-4'>
                            <p className='font-bold text-3xl pt-2'>1,000,000$</p>
                            <p className='opacity-20 text-lg'>Your Income Amount</p>
                            <p className='text-lg py-4'>percent from last month</p>

                        </div>
                    </div>
                    <div className='h-[256px] w-[432px]  bg-white rounded-lg'>
                        <div className='flex gap-2 items-center p-4 border-gray-100 border-b-2'>
                            <p className='h-3 w-3 rounded-full bg-blue-400'></p>
                            <p className='font-bold text-lg'>Total Expenses</p>
                        </div>
                        <div className='flex flex-col gap-4 justify-center p-4'>
                            <p className='font-bold text-3xl pt-2'>-1,000$</p>
                            <p className='opacity-20 text-lg'>Your Expense Amount</p>
                            <p className='text-lg py-4'>percent from last month</p>

                        </div>
                    </div>


                </div>
                <div className="py-2 flex gap-8 justify-center ">
                    <div className='h-[284px] w-[664px]  bg-white rounded-lg'> </div>
                    <div className='h-[284px] w-[664px]  bg-white rounded-lg'> </div>


                </div>
                <div className="ml-24 mr-16 px-96">
                    <Main />
                </div>









            </div>
        </main >
    );
}
