"use client";

import * as React from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function Info1() {
    const [showMainContent, setShowMainContent] = React.useState(false);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowMainContent(true);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (!showMainContent) {
        return (
            <div className="flex flex-col justify-center items-center w-full h-screen">
                <svg width="173" height="64" viewBox="0 0 173 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M39.7274 24.5884V10.0813H24.9043V24.5884H10.0811V39.4116H24.9043V53.9187H39.7274V39.4116H54.5505V24.5884H39.7274ZM39.7274 39.0955H24.9043V24.9067H39.7274V39.0955Z" fill="#0166FF" />
                    <path d="M86.428 31.3146H100.582V43.3316C97.7191 46.114 93.364 47.5657 88.283 47.5657C78.4033 47.5657 72.1932 41.8798 72.1932 32.726C72.1932 23.5722 78.4033 17.846 87.6781 17.846C92.8398 17.846 96.7513 19.4186 99.4934 21.9591L95.9045 25.9917C93.9689 24.298 91.0251 23.2092 87.7184 23.2092C81.9519 23.2092 78.121 26.8788 78.121 32.726C78.121 38.7748 82.1132 42.3234 88.4846 42.3234C91.0251 42.3234 93.3237 41.8798 95.2189 40.4685V36.315H86.428V31.3146Z" fill="black" />
                    <path d="M126.2 35.9923C126.2 36.3553 126.2 37.2021 126.159 37.6457H109.062C109.666 40.912 111.925 42.767 115.554 42.767C118.135 42.767 120.433 41.7992 121.925 39.9442L125.434 42.9283C123.417 45.7108 120.191 47.4447 115.151 47.4447C107.771 47.4447 103.416 42.9283 103.416 35.9117C103.416 28.9354 108.134 24.3787 114.868 24.3787C122.45 24.3787 126.2 29.2177 126.2 35.9923ZM114.868 29.0161C112.046 29.0161 109.787 30.4275 109.102 33.6132H120.756C120.433 31.1936 118.699 29.0161 114.868 29.0161Z" fill="black" />
                    <path d="M129.829 47.0012V16.4346H135.394V47.0012H129.829Z" fill="black" />
                    <path d="M150.134 47.4851C143.682 47.4851 139.488 43.009 139.488 35.952C139.488 28.8951 143.722 24.4593 149.892 24.4593C152.15 24.4593 154.852 25.1045 156.667 26.8788V16.4346H162.151V47.0012H156.748V44.8639C155.014 46.9608 152.271 47.4851 150.134 47.4851ZM151.344 42.4847C153.441 42.4847 155.618 41.6379 156.748 39.5813V32.2824C155.618 30.4678 153.36 29.4596 151.223 29.4596C147.715 29.4596 145.214 31.7985 145.214 35.952C145.214 40.0249 147.634 42.4847 151.344 42.4847Z" fill="black" />
                </svg>


                <div className="flex items-center justify-center mt-4">
                    <div className="border-t-blue-500 border-4 animate-spin rounded-full w-16 h-16"></div>
                </div>
            </div>
        );
    }

    return (
        <main className="max-w-screen-lg m-auto">
            <div className="flex items-center flex-col py-16 gap-24">
                <svg width="94" height="36" viewBox="0 0 94 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* SVG paths */}
                </svg>

                <div className="flex items-center justify-between relative w-96">
                    <div className="flex flex-col">
                        <div className="rounded-full bg-blue-600 text-white p-1 w-8 h-8 flex justify-center">1</div>
                        <p className="-ml-4">Currency</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-gray-300 text-black p-1 w-8 h-8 flex justify-center">2</div>
                        <p>Balance</p>
                    </div>
                    <div className="flex flex-col">
                        <div className="rounded-full bg-gray-300 text-black p-1 w-8 h-8 flex justify-center">3</div>
                        <p>Finish</p>
                    </div>
                </div>
                <div>
                    <div className="top-52 left-[60rem] h-2 w-[150px] bg-gray-200 absolute"></div>
                    <div className="top-52 left-[71.2rem] h-2 w-[130px] bg-gray-200 absolute"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 -mt-16">
                    <svg width="64" height="64" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="48" rx="24" fill="#0166FF" />
                        <path d="M29 24C29 24.9889 28.7068 25.9556 28.1573 26.7779C27.6079 27.6001 26.827 28.241 25.9134 28.6194C24.9998 28.9978 23.9945 29.0969 23.0245 28.9039C22.0546 28.711 21.1637 28.2348 20.4645 27.5355C19.7652 26.8363 19.289 25.9454 19.0961 24.9755C18.9031 24.0055 19.0022 23.0002 19.3806 22.0866C19.759 21.173 20.3999 20.3921 21.2221 19.8427C22.0444 19.2932 23.0111 19 24 19C25.3261 19 26.5979 19.5268 27.5355 20.4645C28.4732 21.4021 29 22.6739 29 24ZM39 16V32C39 32.2652 38.8946 32.5196 38.7071 32.7071C38.5196 32.8946 38.2652 33 38 33H10C9.73478 33 9.48043 32.8946 9.29289 32.7071C9.10536 32.5196 9 32.2652 9 32V16C9 15.7348 9.10536 15.4804 9.29289 15.2929C9.48043 15.1054 9.73478 15 10 15H38C38.2652 15 38.5196 15.1054 38.7071 15.2929C38.8946 15.4804 39 15.7348 39 16ZM37 21.7937C35.8645 21.458 34.8311 20.8435 33.9938 20.0062C33.1565 19.1689 32.542 18.1355 32.2062 17H15.7937C15.458 18.1355 14.8435 19.1689 14.0062 20.0062C13.1689 20.8435 12.1355 21.458 11 21.7937V26.2062C12.1355 26.542 13.1689 27.1565 14.0062 27.9938C14.8435 28.8311 15.458 29.8645 15.7937 31H32.2062C32.542 29.8645 33.1565 28.8311 33.9938 27.9938C34.8311 27.1565 35.8645 26.542 37 26.2062V21.7937Z" fill="white" />
                    </svg>
                    <p className="text-2xl font-bold">Select base currency</p>

                    <Select>
                        <SelectTrigger className="w-[384px]">
                            <SelectValue placeholder="MNT - Mongolian Tugrik" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="apple">USD - American Dollar</SelectItem>
                                <SelectItem value="banana">CNY - Chinese Yuan</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <p className="w-[388px] text-xs text-gray-500">
                        Your base currency should be the one you use most often. All transactions in other currencies will be calculated based on this one.
                    </p>
                    <Link href="/info2" className="w-[384px] bg-blue-500 p-3 rounded-2xl text-white flex justify-center">
                        Confirm
                    </Link>
                </div>
            </div>
        </main>
    );
}
