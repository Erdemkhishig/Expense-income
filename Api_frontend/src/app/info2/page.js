"use client"

import * as React from "react"




import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import Link from "next/link";
import { Input } from "@/components/ui/input"


// if (blogs.length === 0) {
//     return (
//         <div className="flex justify-center items-center w-full h-screen">
//             <div className="border-t-gray-500 border-8 animate-spin  rounded-full w-16 h-16"></div>
//         </div>
//     )
// }





export default function info2() {


    return (
        <main className="max-w-screen-lg m-auto ">

            <div className="flex items-center flex-col py-16 gap-24">
                <svg width="94" height="36" viewBox="0 0 94 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.1292 14.0265V6.24878H14.1821V14.0265H6.23486V21.9737H14.1821V29.7515H22.1292V21.9737H30.0764V14.0265H22.1292ZM22.1292 21.8043H14.1821V14.1972H22.1292V21.8043Z" fill="#0166FF" />
                    <path d="M47.1669 17.6325H54.7555V24.0752C53.2205 25.567 50.8856 26.3453 48.1615 26.3453C42.8646 26.3453 39.5352 23.2969 39.5352 18.3892C39.5352 13.4815 42.8646 10.4115 47.8372 10.4115C50.6045 10.4115 52.7016 11.2547 54.1718 12.6167L52.2476 14.7787C51.2098 13.8706 49.6316 13.2869 47.8588 13.2869C44.7671 13.2869 42.7133 15.2543 42.7133 18.3892C42.7133 21.6322 44.8536 23.5347 48.2696 23.5347C49.6316 23.5347 50.8639 23.2969 51.8801 22.5402V20.3133H47.1669V17.6325Z" fill="black" />
                    <path d="M68.49 20.1404C68.49 20.335 68.49 20.789 68.4684 21.0268H59.3016C59.6259 22.778 60.8366 23.7725 62.7824 23.7725C64.166 23.7725 65.3984 23.2536 66.1983 22.2591L68.0792 23.859C66.9982 25.3508 65.2686 26.2804 62.5662 26.2804C58.6097 26.2804 56.2748 23.859 56.2748 20.0971C56.2748 16.3569 58.8043 13.9139 62.4148 13.9139C66.4793 13.9139 68.49 16.5083 68.49 20.1404ZM62.4148 16.4002C60.9014 16.4002 59.6907 17.1569 59.3232 18.8648H65.5713C65.3983 17.5676 64.4687 16.4002 62.4148 16.4002Z" fill="black" />
                    <path d="M70.4358 26.0426V9.65479H73.4193V26.0426H70.4358Z" fill="black" />
                    <path d="M81.322 26.302C77.8628 26.302 75.6144 23.9022 75.6144 20.1188C75.6144 16.3353 77.8845 13.9571 81.1923 13.9571C82.403 13.9571 83.8515 14.303 84.8244 15.2543V9.65479H87.7647V26.0426H84.8677V24.8967C83.938 26.021 82.4679 26.302 81.322 26.302ZM81.9706 23.6212C83.0948 23.6212 84.2623 23.1672 84.8677 22.0646V18.1514C84.2623 17.1785 83.0516 16.638 81.9057 16.638C80.0248 16.638 78.6844 17.8919 78.6844 20.1188C78.6844 22.3024 79.9816 23.6212 81.9706 23.6212Z" fill="black" />
                </svg>

                <div className="flex items-center justify-between relative w-96">
                    <div className="flex flex-col">
                        <div className="rounded-full bg-blue-600 text-white p-1 w-8 h-8 flex justify-center">1</div>
                        <p className="-ml-4">Currency</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <div className="rounded-full bg-blue-600 text-white p p-1 w-8 h-8 flex justify-center">2</div>
                        <p>Balance</p>
                    </div> <div className="flex flex-col">
                        <div className="rounded-full bg-gray-300 text-black p-1 w-8 h-8 flex justify-center">3</div>
                        <p>Finish</p>
                    </div>
                </div>
                <div>
                    <div className="top-52 left-[59.9rem] h-2 w-[151px] bg-blue-600 absolute"></div>
                    <div className="top-52 left-[71.3rem] h-2 w-[128px] bg-gray-200 absolute"></div>
                </div>
                <div className="flex flex-col justify-center items-center gap-8 -mt-16">
                    <svg width="272" height="96" viewBox="0 0 272 96" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="112" width="48" height="48" rx="24" fill="#0166FF" />
                        <path d="M143 19.1962V18.5C143 15.365 138.271 13 132 13C125.729 13 121 15.365 121 18.5V23.5C121 26.1112 124.281 28.1863 129 28.8075V29.5C129 32.635 133.729 35 140 35C146.271 35 151 32.635 151 29.5V24.5C151 21.9125 147.823 19.835 143 19.1962ZM127 26.3587C124.551 25.675 123 24.5487 123 23.5V21.7413C124.02 22.4637 125.386 23.0463 127 23.4375V26.3587ZM137 23.4375C138.614 23.0463 139.98 22.4637 141 21.7413V23.5C141 24.5487 139.449 25.675 137 26.3587V23.4375ZM135 32.3587C132.551 31.675 131 30.5487 131 29.5V28.9788C131.329 28.9913 131.661 29 132 29C132.485 29 132.959 28.9837 133.424 28.9562C133.94 29.1412 134.467 29.2981 135 29.4263V32.3587ZM135 26.7812C134.007 26.928 133.004 27.0011 132 27C130.996 27.0011 129.993 26.928 129 26.7812V23.8075C129.995 23.9371 130.997 24.0014 132 24C133.003 24.0014 134.005 23.9371 135 23.8075V26.7812ZM143 32.7812C141.011 33.0729 138.989 33.0729 137 32.7812V29.8C137.994 29.9337 138.997 30.0005 140 30C141.003 30.0014 142.005 29.9371 143 29.8075V32.7812ZM149 29.5C149 30.5487 147.449 31.675 145 32.3587V29.4375C146.614 29.0462 147.98 28.4637 149 27.7412V29.5Z" fill="white" />
                        <path d="M10.5586 83.5703C10.5586 83.2422 10.5078 82.9492 10.4062 82.6914C10.3125 82.4258 10.1367 82.1875 9.87891 81.9766C9.62891 81.7578 9.27344 81.5469 8.8125 81.3438C8.35938 81.1328 7.77344 80.9141 7.05469 80.6875C6.25781 80.4375 5.51562 80.1562 4.82812 79.8438C4.14062 79.5312 3.53516 79.168 3.01172 78.7539C2.49609 78.3398 2.09375 77.8633 1.80469 77.3242C1.51562 76.7773 1.37109 76.1445 1.37109 75.4258C1.37109 74.7227 1.51953 74.082 1.81641 73.5039C2.12109 72.9258 2.55078 72.4297 3.10547 72.0156C3.66016 71.5938 4.3125 71.2695 5.0625 71.043C5.82031 70.8164 6.65625 70.7031 7.57031 70.7031C8.83594 70.7031 9.92969 70.9336 10.8516 71.3945C11.7812 71.8555 12.5 72.4805 13.0078 73.2695C13.5156 74.0586 13.7695 74.9453 13.7695 75.9297H10.5586C10.5586 75.3984 10.4453 74.9297 10.2188 74.5234C10 74.1172 9.66406 73.7969 9.21094 73.5625C8.76562 73.3281 8.20312 73.2109 7.52344 73.2109C6.86719 73.2109 6.32031 73.3086 5.88281 73.5039C5.45312 73.6992 5.12891 73.9648 4.91016 74.3008C4.69922 74.6367 4.59375 75.0117 4.59375 75.4258C4.59375 75.7383 4.66797 76.0195 4.81641 76.2695C4.96484 76.5117 5.1875 76.7422 5.48438 76.9609C5.78125 77.1719 6.14844 77.3711 6.58594 77.5586C7.03125 77.7383 7.54688 77.918 8.13281 78.0977C9.07031 78.3789 9.89062 78.6914 10.5938 79.0352C11.3047 79.3789 11.8945 79.7695 12.3633 80.207C12.8398 80.6445 13.1953 81.1367 13.4297 81.6836C13.6719 82.2305 13.793 82.8516 13.793 83.5469C13.793 84.2812 13.6484 84.9375 13.3594 85.5156C13.0703 86.0938 12.6562 86.5859 12.1172 86.9922C11.5781 87.3984 10.9297 87.707 10.1719 87.918C9.42188 88.1289 8.58203 88.2344 7.65234 88.2344C6.82422 88.2344 6.00391 88.125 5.19141 87.9062C4.38672 87.6797 3.65625 87.3438 3 86.8984C2.34375 86.4453 1.82031 85.875 1.42969 85.1875C1.03906 84.4922 0.84375 83.6797 0.84375 82.75H4.07812C4.07812 83.2891 4.16406 83.75 4.33594 84.1328C4.51562 84.5078 4.76562 84.8164 5.08594 85.0586C5.41406 85.293 5.79688 85.4648 6.23438 85.5742C6.67188 85.6836 7.14453 85.7383 7.65234 85.7383C8.30859 85.7383 8.84766 85.6484 9.26953 85.4688C9.69922 85.2812 10.0195 85.0234 10.2305 84.6953C10.4492 84.3672 10.5586 83.9922 10.5586 83.5703ZM21.7383 88.2344C20.7773 88.2344 19.9141 88.0781 19.1484 87.7656C18.3828 87.4531 17.7305 87.0195 17.1914 86.4648C16.6602 85.9023 16.25 85.25 15.9609 84.5078C15.6797 83.7578 15.5391 82.9531 15.5391 82.0938V81.625C15.5391 80.6484 15.6797 79.7617 15.9609 78.9648C16.2422 78.1602 16.6406 77.4688 17.1562 76.8906C17.6719 76.3125 18.2891 75.8672 19.0078 75.5547C19.7266 75.2422 20.5195 75.0859 21.3867 75.0859C22.2852 75.0859 23.0781 75.2383 23.7656 75.543C24.4531 75.8398 25.0273 76.2617 25.4883 76.8086C25.9492 77.3555 26.2969 78.0117 26.5312 78.7773C26.7656 79.5352 26.8828 80.375 26.8828 81.2969V82.5977H16.9453V80.4648H23.8359V80.2305C23.8203 79.7383 23.7266 79.2891 23.5547 78.8828C23.3828 78.4688 23.1172 78.1406 22.7578 77.8984C22.3984 77.6484 21.9336 77.5234 21.3633 77.5234C20.9023 77.5234 20.5 77.625 20.1562 77.8281C19.8203 78.0234 19.5391 78.3047 19.3125 78.6719C19.0938 79.0312 18.9297 79.4609 18.8203 79.9609C18.7109 80.4609 18.6562 81.0156 18.6562 81.625V82.0938C18.6562 82.625 18.7266 83.1172 18.8672 83.5703C19.0156 84.0234 19.2305 84.418 19.5117 84.7539C19.8008 85.082 20.1445 85.3398 20.543 85.5273C20.9492 85.707 21.4102 85.7969 21.9258 85.7969C22.5742 85.7969 23.1602 85.6719 23.6836 85.4219C24.2148 85.1641 24.6758 84.7852 25.0664 84.2852L26.625 85.9023C26.3594 86.293 26 86.668 25.5469 87.0273C25.1016 87.3867 24.5625 87.6797 23.9297 87.9062C23.2969 88.125 22.5664 88.2344 21.7383 88.2344ZM34.957 75.3203V77.5469H27.6914V75.3203H34.957ZM29.6367 72.2031H32.7422V84.3438C32.7422 84.7188 32.793 85.0078 32.8945 85.2109C32.9961 85.4141 33.1484 85.5508 33.3516 85.6211C33.5547 85.6914 33.7969 85.7266 34.0781 85.7266C34.2812 85.7266 34.4688 85.7148 34.6406 85.6914C34.8125 85.668 34.957 85.6445 35.0742 85.6211L35.0859 87.9414C34.8281 88.0273 34.5352 88.0977 34.207 88.1523C33.8867 88.207 33.5234 88.2344 33.1172 88.2344C32.4219 88.2344 31.8125 88.1172 31.2891 87.8828C30.7656 87.6406 30.3594 87.2539 30.0703 86.7227C29.7812 86.1836 29.6367 85.4727 29.6367 84.5898V72.2031ZM50.543 84.9883V75.3203H53.6602V88H50.7305L50.543 84.9883ZM50.9414 82.3633L51.9023 82.3398C51.9023 83.1914 51.8086 83.9766 51.6211 84.6953C51.4336 85.4141 51.1406 86.0391 50.7422 86.5703C50.3516 87.0938 49.8555 87.5039 49.2539 87.8008C48.6523 88.0898 47.9414 88.2344 47.1211 88.2344C46.4961 88.2344 45.9258 88.1484 45.4102 87.9766C44.8945 87.7969 44.4492 87.5195 44.0742 87.1445C43.707 86.7617 43.4219 86.2734 43.2188 85.6797C43.0156 85.0781 42.9141 84.3555 42.9141 83.5117V75.3203H46.0078V83.5352C46.0078 83.957 46.0547 84.3086 46.1484 84.5898C46.25 84.8711 46.3867 85.1016 46.5586 85.2812C46.7383 85.4531 46.9453 85.5781 47.1797 85.6562C47.4219 85.7266 47.6797 85.7617 47.9531 85.7617C48.7031 85.7617 49.293 85.6133 49.7227 85.3164C50.1602 85.0117 50.4727 84.6055 50.6602 84.0977C50.8477 83.582 50.9414 83.0039 50.9414 82.3633ZM59.4961 77.7578V92.875H56.3906V75.3203H59.2617L59.4961 77.7578ZM67.6406 81.5312V81.7773C67.6406 82.6992 67.5312 83.5547 67.3125 84.3438C67.1016 85.125 66.7891 85.8086 66.375 86.3945C65.9609 86.9727 65.4453 87.4258 64.8281 87.7539C64.2188 88.0742 63.5156 88.2344 62.7188 88.2344C61.9375 88.2344 61.2578 88.0859 60.6797 87.7891C60.1016 87.4844 59.6133 87.0547 59.2148 86.5C58.8164 85.9453 58.4961 85.3008 58.2539 84.5664C58.0195 83.8242 57.8438 83.0156 57.7266 82.1406V81.3555C57.8438 80.4258 58.0195 79.582 58.2539 78.8242C58.4961 78.0586 58.8164 77.3984 59.2148 76.8438C59.6133 76.2812 60.0977 75.8477 60.668 75.543C61.2461 75.2383 61.9219 75.0859 62.6953 75.0859C63.5 75.0859 64.207 75.2383 64.8164 75.543C65.4336 75.8477 65.9531 76.2852 66.375 76.8555C66.7969 77.4258 67.1133 78.1055 67.3242 78.8945C67.5352 79.6836 67.6406 80.5625 67.6406 81.5312ZM64.5352 81.7773V81.5312C64.5352 80.9688 64.4844 80.4492 64.3828 79.9727C64.2812 79.4883 64.125 79.0664 63.9141 78.707C63.7031 78.3398 63.4297 78.0547 63.0938 77.8516C62.7578 77.6484 62.3516 77.5469 61.875 77.5469C61.3984 77.5469 60.9883 77.625 60.6445 77.7812C60.3008 77.9375 60.0195 78.1602 59.8008 78.4492C59.582 78.7383 59.4102 79.082 59.2852 79.4805C59.168 79.8711 59.0898 80.3047 59.0508 80.7812V82.7266C59.1211 83.3047 59.2578 83.8242 59.4609 84.2852C59.6641 84.7461 59.9609 85.1133 60.3516 85.3867C60.75 85.6602 61.2656 85.7969 61.8984 85.7969C62.375 85.7969 62.7812 85.6914 63.1172 85.4805C63.4531 85.2695 63.7266 84.9805 63.9375 84.6133C64.1484 84.2383 64.3008 83.8086 64.3945 83.3242C64.4883 82.8398 64.5352 82.3242 64.5352 81.7773ZM79.5938 86.5938L82.9922 75.3203H86.3086L81.2227 89.9219C81.1055 90.2344 80.9531 90.5742 80.7656 90.9414C80.5859 91.3086 80.3438 91.6562 80.0391 91.9844C79.7344 92.3203 79.3516 92.5938 78.8906 92.8047C78.4375 93.0156 77.8867 93.1211 77.2383 93.1211C76.957 93.1211 76.707 93.1016 76.4883 93.0625C76.2695 93.0234 76.0391 92.9727 75.7969 92.9102V90.5898C75.875 90.5977 75.9648 90.6016 76.0664 90.6016C76.1758 90.6094 76.2695 90.6133 76.3477 90.6133C76.8008 90.6133 77.1758 90.5586 77.4727 90.4492C77.7695 90.3477 78.0078 90.1797 78.1875 89.9453C78.375 89.7188 78.5312 89.4219 78.6562 89.0547L79.5938 86.5938ZM77.918 75.3203L80.7891 84.6602L81.293 87.9297L79.1602 88.3164L74.5781 75.3203H77.918ZM87.0703 81.7891V81.543C87.0703 80.6133 87.2031 79.7578 87.4688 78.9766C87.7344 78.1875 88.1211 77.5039 88.6289 76.9258C89.1367 76.3477 89.7578 75.8984 90.4922 75.5781C91.2266 75.25 92.0625 75.0859 93 75.0859C93.9531 75.0859 94.7969 75.25 95.5312 75.5781C96.2734 75.8984 96.8984 76.3477 97.4062 76.9258C97.9141 77.5039 98.3008 78.1875 98.5664 78.9766C98.832 79.7578 98.9648 80.6133 98.9648 81.543V81.7891C98.9648 82.7109 98.832 83.5664 98.5664 84.3555C98.3008 85.1367 97.9141 85.8203 97.4062 86.4062C96.8984 86.9844 96.2773 87.4336 95.543 87.7539C94.8086 88.0742 93.9688 88.2344 93.0234 88.2344C92.0859 88.2344 91.2461 88.0742 90.5039 87.7539C89.7617 87.4336 89.1367 86.9844 88.6289 86.4062C88.1211 85.8203 87.7344 85.1367 87.4688 84.3555C87.2031 83.5664 87.0703 82.7109 87.0703 81.7891ZM90.1641 81.543V81.7891C90.1641 82.3438 90.2188 82.8633 90.3281 83.3477C90.4375 83.832 90.6055 84.2578 90.832 84.625C91.0586 84.9922 91.3516 85.2812 91.7109 85.4922C92.0781 85.6953 92.5156 85.7969 93.0234 85.7969C93.5234 85.7969 93.9531 85.6953 94.3125 85.4922C94.6719 85.2812 94.9648 84.9922 95.1914 84.625C95.4258 84.2578 95.5977 83.832 95.707 83.3477C95.8164 82.8633 95.8711 82.3438 95.8711 81.7891V81.543C95.8711 80.9961 95.8164 80.4844 95.707 80.0078C95.5977 79.5234 95.4258 79.0977 95.1914 78.7305C94.9648 78.3555 94.668 78.0625 94.3008 77.8516C93.9414 77.6328 93.5078 77.5234 93 77.5234C92.5 77.5234 92.0703 77.6328 91.7109 77.8516C91.3516 78.0625 91.0586 78.3555 90.832 78.7305C90.6055 79.0977 90.4375 79.5234 90.3281 80.0078C90.2188 80.4844 90.1641 80.9961 90.1641 81.543ZM108.762 84.9883V75.3203H111.879V88H108.949L108.762 84.9883ZM109.16 82.3633L110.121 82.3398C110.121 83.1914 110.027 83.9766 109.84 84.6953C109.652 85.4141 109.359 86.0391 108.961 86.5703C108.57 87.0938 108.074 87.5039 107.473 87.8008C106.871 88.0898 106.16 88.2344 105.34 88.2344C104.715 88.2344 104.145 88.1484 103.629 87.9766C103.113 87.7969 102.668 87.5195 102.293 87.1445C101.926 86.7617 101.641 86.2734 101.438 85.6797C101.234 85.0781 101.133 84.3555 101.133 83.5117V75.3203H104.227V83.5352C104.227 83.957 104.273 84.3086 104.367 84.5898C104.469 84.8711 104.605 85.1016 104.777 85.2812C104.957 85.4531 105.164 85.5781 105.398 85.6562C105.641 85.7266 105.898 85.7617 106.172 85.7617C106.922 85.7617 107.512 85.6133 107.941 85.3164C108.379 85.0117 108.691 84.6055 108.879 84.0977C109.066 83.582 109.16 83.0039 109.16 82.3633ZM117.715 77.9102V88H114.621V75.3203H117.551L117.715 77.9102ZM121.57 75.2383L121.523 78.1211C121.352 78.0898 121.156 78.0664 120.938 78.0508C120.727 78.0352 120.527 78.0273 120.34 78.0273C119.863 78.0273 119.445 78.0938 119.086 78.2266C118.727 78.3516 118.426 78.5352 118.184 78.7773C117.949 79.0195 117.77 79.3164 117.645 79.668C117.52 80.0117 117.449 80.4023 117.434 80.8398L116.766 80.7578C116.766 79.9531 116.848 79.207 117.012 78.5195C117.176 77.832 117.414 77.2305 117.727 76.7148C118.039 76.1992 118.43 75.8008 118.898 75.5195C119.375 75.2305 119.922 75.0859 120.539 75.0859C120.711 75.0859 120.895 75.1016 121.09 75.1328C121.293 75.1562 121.453 75.1914 121.57 75.2383ZM134.449 85.7969C134.887 85.7969 135.277 85.7109 135.621 85.5391C135.965 85.3672 136.238 85.125 136.441 84.8125C136.652 84.5 136.766 84.1367 136.781 83.7227H139.699C139.684 84.582 139.441 85.3516 138.973 86.0312C138.504 86.7109 137.879 87.25 137.098 87.6484C136.324 88.0391 135.457 88.2344 134.496 88.2344C133.52 88.2344 132.668 88.0703 131.941 87.7422C131.215 87.4141 130.609 86.957 130.125 86.3711C129.648 85.7852 129.289 85.1055 129.047 84.332C128.812 83.5586 128.695 82.7305 128.695 81.8477V81.4727C128.695 80.5898 128.812 79.7617 129.047 78.9883C129.289 78.2148 129.648 77.5352 130.125 76.9492C130.609 76.3633 131.215 75.9062 131.941 75.5781C132.668 75.25 133.516 75.0859 134.484 75.0859C135.508 75.0859 136.406 75.2852 137.18 75.6836C137.961 76.082 138.57 76.6445 139.008 77.3711C139.453 78.0977 139.684 78.9531 139.699 79.9375H136.781C136.766 79.4844 136.664 79.0781 136.477 78.7188C136.289 78.3594 136.023 78.0703 135.68 77.8516C135.336 77.6328 134.918 77.5234 134.426 77.5234C133.902 77.5234 133.465 77.6328 133.113 77.8516C132.77 78.0703 132.5 78.3711 132.305 78.7539C132.117 79.1289 131.984 79.5508 131.906 80.0195C131.836 80.4805 131.801 80.9648 131.801 81.4727V81.8477C131.801 82.3633 131.836 82.8555 131.906 83.3242C131.984 83.793 132.117 84.2148 132.305 84.5898C132.5 84.957 132.77 85.25 133.113 85.4688C133.465 85.6875 133.91 85.7969 134.449 85.7969ZM148.746 85.3047V79.457C148.746 79.0273 148.672 78.6562 148.523 78.3438C148.375 78.0312 148.148 77.7891 147.844 77.6172C147.539 77.4453 147.152 77.3594 146.684 77.3594C146.27 77.3594 145.906 77.4297 145.594 77.5703C145.289 77.7109 145.055 77.9102 144.891 78.168C144.727 78.418 144.645 78.707 144.645 79.0352H141.539C141.539 78.5117 141.664 78.0156 141.914 77.5469C142.164 77.0703 142.52 76.6484 142.98 76.2812C143.449 75.9062 144.008 75.6133 144.656 75.4023C145.312 75.1914 146.047 75.0859 146.859 75.0859C147.82 75.0859 148.676 75.25 149.426 75.5781C150.184 75.8984 150.777 76.3828 151.207 77.0312C151.645 77.6797 151.863 78.4961 151.863 79.4805V85.0117C151.863 85.6445 151.902 86.1875 151.98 86.6406C152.066 87.0859 152.191 87.4727 152.355 87.8008V88H149.203C149.055 87.6797 148.941 87.2734 148.863 86.7812C148.785 86.2812 148.746 85.7891 148.746 85.3047ZM149.18 80.2773L149.203 82.1172H147.246C146.762 82.1172 146.336 82.168 145.969 82.2695C145.602 82.3633 145.301 82.5039 145.066 82.6914C144.832 82.8711 144.656 83.0898 144.539 83.3477C144.422 83.5977 144.363 83.8828 144.363 84.2031C144.363 84.5156 144.434 84.7969 144.574 85.0469C144.723 85.2969 144.934 85.4961 145.207 85.6445C145.488 85.7852 145.816 85.8555 146.191 85.8555C146.738 85.8555 147.215 85.7461 147.621 85.5273C148.027 85.3008 148.344 85.0273 148.57 84.707C148.797 84.3867 148.918 84.082 148.934 83.793L149.824 85.1289C149.715 85.4492 149.551 85.7891 149.332 86.1484C149.113 86.5078 148.832 86.8438 148.488 87.1562C148.145 87.4688 147.73 87.7266 147.246 87.9297C146.762 88.1328 146.199 88.2344 145.559 88.2344C144.738 88.2344 144.004 88.0703 143.355 87.7422C142.707 87.4141 142.195 86.9648 141.82 86.3945C141.445 85.8242 141.258 85.1758 141.258 84.4492C141.258 83.7773 141.383 83.1836 141.633 82.668C141.883 82.1523 142.254 81.7188 142.746 81.3672C143.238 81.0078 143.848 80.7383 144.574 80.5586C145.309 80.3711 146.148 80.2773 147.094 80.2773H149.18ZM161.625 84.5312C161.625 84.2656 161.555 84.0273 161.414 83.8164C161.273 83.6055 161.008 83.4141 160.617 83.2422C160.234 83.0625 159.672 82.8945 158.93 82.7383C158.273 82.5977 157.668 82.4219 157.113 82.2109C156.559 82 156.082 81.7461 155.684 81.4492C155.285 81.1445 154.973 80.7891 154.746 80.3828C154.527 79.9688 154.418 79.4922 154.418 78.9531C154.418 78.4297 154.531 77.9375 154.758 77.4766C154.984 77.0078 155.312 76.5977 155.742 76.2461C156.172 75.8867 156.695 75.6055 157.312 75.4023C157.93 75.1914 158.625 75.0859 159.398 75.0859C160.477 75.0859 161.402 75.2617 162.176 75.6133C162.957 75.9648 163.555 76.4492 163.969 77.0664C164.383 77.6758 164.59 78.3633 164.59 79.1289H161.496C161.496 78.793 161.418 78.4883 161.262 78.2148C161.113 77.9414 160.883 77.7227 160.57 77.5586C160.258 77.3867 159.863 77.3008 159.387 77.3008C158.957 77.3008 158.594 77.3711 158.297 77.5117C158.008 77.6523 157.789 77.8359 157.641 78.0625C157.492 78.2891 157.418 78.5391 157.418 78.8125C157.418 79.0156 157.457 79.1992 157.535 79.3633C157.621 79.5195 157.758 79.6641 157.945 79.7969C158.133 79.9297 158.387 80.0508 158.707 80.1602C159.035 80.2695 159.438 80.375 159.914 80.4766C160.859 80.6641 161.684 80.9141 162.387 81.2266C163.098 81.5312 163.652 81.9375 164.051 82.4453C164.449 82.9531 164.648 83.6016 164.648 84.3906C164.648 84.9531 164.527 85.4688 164.285 85.9375C164.043 86.3984 163.691 86.8008 163.23 87.1445C162.77 87.4883 162.219 87.7578 161.578 87.9531C160.938 88.1406 160.215 88.2344 159.41 88.2344C158.246 88.2344 157.262 88.0273 156.457 87.6133C155.652 87.1914 155.043 86.6602 154.629 86.0195C154.215 85.3711 154.008 84.6992 154.008 84.0039H156.973C156.996 84.4961 157.129 84.8906 157.371 85.1875C157.613 85.4844 157.918 85.6992 158.285 85.832C158.66 85.957 159.055 86.0195 159.469 86.0195C159.938 86.0195 160.332 85.957 160.652 85.832C160.973 85.6992 161.215 85.5234 161.379 85.3047C161.543 85.0781 161.625 84.8203 161.625 84.5312ZM170.039 70V88H166.934V70H170.039ZM169.547 81.2031H168.633C168.633 80.3203 168.75 79.5078 168.984 78.7656C169.219 78.0234 169.551 77.3789 169.98 76.832C170.41 76.2773 170.922 75.8477 171.516 75.543C172.117 75.2383 172.781 75.0859 173.508 75.0859C174.133 75.0859 174.699 75.1758 175.207 75.3555C175.723 75.5273 176.164 75.8047 176.531 76.1875C176.898 76.5703 177.18 77.0703 177.375 77.6875C177.578 78.2969 177.68 79.0391 177.68 79.9141V88H174.562V79.8906C174.562 79.3047 174.477 78.8438 174.305 78.5078C174.133 78.1641 173.887 77.918 173.566 77.7695C173.254 77.6211 172.867 77.5469 172.406 77.5469C171.906 77.5469 171.477 77.6445 171.117 77.8398C170.758 78.0273 170.461 78.2891 170.227 78.625C170 78.9609 169.828 79.3477 169.711 79.7852C169.602 80.2227 169.547 80.6953 169.547 81.2031ZM193.16 80.3945H188.801L188.777 78.1211H192.516C193.156 78.1211 193.691 78.0312 194.121 77.8516C194.551 77.6719 194.875 77.4102 195.094 77.0664C195.32 76.7227 195.434 76.3047 195.434 75.8125C195.434 75.2656 195.328 74.8203 195.117 74.4766C194.914 74.1328 194.594 73.8828 194.156 73.7266C193.719 73.5625 193.164 73.4805 192.492 73.4805H189.844V88H186.621V70.9375H192.492C193.461 70.9375 194.324 71.0312 195.082 71.2188C195.848 71.3984 196.496 71.6797 197.027 72.0625C197.559 72.4453 197.961 72.9258 198.234 73.5039C198.516 74.082 198.656 74.7695 198.656 75.5664C198.656 76.2695 198.492 76.918 198.164 77.5117C197.844 78.0977 197.348 78.5742 196.676 78.9414C196.012 79.3086 195.168 79.5195 194.145 79.5742L193.16 80.3945ZM193.02 88H187.852L189.199 85.4688H193.02C193.66 85.4688 194.188 85.3633 194.602 85.1523C195.023 84.9414 195.336 84.6523 195.539 84.2852C195.75 83.9102 195.855 83.4805 195.855 82.9961C195.855 82.4648 195.762 82.0039 195.574 81.6133C195.395 81.2227 195.105 80.9219 194.707 80.7109C194.316 80.5 193.801 80.3945 193.16 80.3945H189.809L189.832 78.1211H194.098L194.836 79C195.82 79.0078 196.621 79.2031 197.238 79.5859C197.863 79.9688 198.324 80.4609 198.621 81.0625C198.918 81.6641 199.066 82.3125 199.066 83.0078C199.066 84.1016 198.828 85.0195 198.352 85.7617C197.883 86.5039 197.195 87.0625 196.289 87.4375C195.391 87.8125 194.301 88 193.02 88ZM208.605 85.3047V79.457C208.605 79.0273 208.531 78.6562 208.383 78.3438C208.234 78.0312 208.008 77.7891 207.703 77.6172C207.398 77.4453 207.012 77.3594 206.543 77.3594C206.129 77.3594 205.766 77.4297 205.453 77.5703C205.148 77.7109 204.914 77.9102 204.75 78.168C204.586 78.418 204.504 78.707 204.504 79.0352H201.398C201.398 78.5117 201.523 78.0156 201.773 77.5469C202.023 77.0703 202.379 76.6484 202.84 76.2812C203.309 75.9062 203.867 75.6133 204.516 75.4023C205.172 75.1914 205.906 75.0859 206.719 75.0859C207.68 75.0859 208.535 75.25 209.285 75.5781C210.043 75.8984 210.637 76.3828 211.066 77.0312C211.504 77.6797 211.723 78.4961 211.723 79.4805V85.0117C211.723 85.6445 211.762 86.1875 211.84 86.6406C211.926 87.0859 212.051 87.4727 212.215 87.8008V88H209.062C208.914 87.6797 208.801 87.2734 208.723 86.7812C208.645 86.2812 208.605 85.7891 208.605 85.3047ZM209.039 80.2773L209.062 82.1172H207.105C206.621 82.1172 206.195 82.168 205.828 82.2695C205.461 82.3633 205.16 82.5039 204.926 82.6914C204.691 82.8711 204.516 83.0898 204.398 83.3477C204.281 83.5977 204.223 83.8828 204.223 84.2031C204.223 84.5156 204.293 84.7969 204.434 85.0469C204.582 85.2969 204.793 85.4961 205.066 85.6445C205.348 85.7852 205.676 85.8555 206.051 85.8555C206.598 85.8555 207.074 85.7461 207.48 85.5273C207.887 85.3008 208.203 85.0273 208.43 84.707C208.656 84.3867 208.777 84.082 208.793 83.793L209.684 85.1289C209.574 85.4492 209.41 85.7891 209.191 86.1484C208.973 86.5078 208.691 86.8438 208.348 87.1562C208.004 87.4688 207.59 87.7266 207.105 87.9297C206.621 88.1328 206.059 88.2344 205.418 88.2344C204.598 88.2344 203.863 88.0703 203.215 87.7422C202.566 87.4141 202.055 86.9648 201.68 86.3945C201.305 85.8242 201.117 85.1758 201.117 84.4492C201.117 83.7773 201.242 83.1836 201.492 82.668C201.742 82.1523 202.113 81.7188 202.605 81.3672C203.098 81.0078 203.707 80.7383 204.434 80.5586C205.168 80.3711 206.008 80.2773 206.953 80.2773H209.039ZM217.793 70V88H214.688V70H217.793ZM227.73 85.3047V79.457C227.73 79.0273 227.656 78.6562 227.508 78.3438C227.359 78.0312 227.133 77.7891 226.828 77.6172C226.523 77.4453 226.137 77.3594 225.668 77.3594C225.254 77.3594 224.891 77.4297 224.578 77.5703C224.273 77.7109 224.039 77.9102 223.875 78.168C223.711 78.418 223.629 78.707 223.629 79.0352H220.523C220.523 78.5117 220.648 78.0156 220.898 77.5469C221.148 77.0703 221.504 76.6484 221.965 76.2812C222.434 75.9062 222.992 75.6133 223.641 75.4023C224.297 75.1914 225.031 75.0859 225.844 75.0859C226.805 75.0859 227.66 75.25 228.41 75.5781C229.168 75.8984 229.762 76.3828 230.191 77.0312C230.629 77.6797 230.848 78.4961 230.848 79.4805V85.0117C230.848 85.6445 230.887 86.1875 230.965 86.6406C231.051 87.0859 231.176 87.4727 231.34 87.8008V88H228.188C228.039 87.6797 227.926 87.2734 227.848 86.7812C227.77 86.2812 227.73 85.7891 227.73 85.3047ZM228.164 80.2773L228.188 82.1172H226.23C225.746 82.1172 225.32 82.168 224.953 82.2695C224.586 82.3633 224.285 82.5039 224.051 82.6914C223.816 82.8711 223.641 83.0898 223.523 83.3477C223.406 83.5977 223.348 83.8828 223.348 84.2031C223.348 84.5156 223.418 84.7969 223.559 85.0469C223.707 85.2969 223.918 85.4961 224.191 85.6445C224.473 85.7852 224.801 85.8555 225.176 85.8555C225.723 85.8555 226.199 85.7461 226.605 85.5273C227.012 85.3008 227.328 85.0273 227.555 84.707C227.781 84.3867 227.902 84.082 227.918 83.793L228.809 85.1289C228.699 85.4492 228.535 85.7891 228.316 86.1484C228.098 86.5078 227.816 86.8438 227.473 87.1562C227.129 87.4688 226.715 87.7266 226.23 87.9297C225.746 88.1328 225.184 88.2344 224.543 88.2344C223.723 88.2344 222.988 88.0703 222.34 87.7422C221.691 87.4141 221.18 86.9648 220.805 86.3945C220.43 85.8242 220.242 85.1758 220.242 84.4492C220.242 83.7773 220.367 83.1836 220.617 82.668C220.867 82.1523 221.238 81.7188 221.73 81.3672C222.223 81.0078 222.832 80.7383 223.559 80.5586C224.293 80.3711 225.133 80.2773 226.078 80.2773H228.164ZM236.672 78.0273V88H233.578V75.3203H236.484L236.672 78.0273ZM236.18 81.2031H235.266C235.273 80.2812 235.398 79.4453 235.641 78.6953C235.883 77.9453 236.223 77.3008 236.66 76.7617C237.105 76.2227 237.633 75.8086 238.242 75.5195C238.852 75.2305 239.531 75.0859 240.281 75.0859C240.891 75.0859 241.441 75.1719 241.934 75.3438C242.426 75.5156 242.848 75.7891 243.199 76.1641C243.559 76.5391 243.832 77.0312 244.02 77.6406C244.215 78.2422 244.312 78.9844 244.312 79.8672V88H241.195V79.8438C241.195 79.2656 241.109 78.8086 240.938 78.4727C240.773 78.1367 240.531 77.8984 240.211 77.7578C239.898 77.6172 239.512 77.5469 239.051 77.5469C238.574 77.5469 238.156 77.6445 237.797 77.8398C237.445 78.0273 237.148 78.2891 236.906 78.625C236.672 78.9609 236.492 79.3477 236.367 79.7852C236.242 80.2227 236.18 80.6953 236.18 81.2031ZM252.246 85.7969C252.684 85.7969 253.074 85.7109 253.418 85.5391C253.762 85.3672 254.035 85.125 254.238 84.8125C254.449 84.5 254.562 84.1367 254.578 83.7227H257.496C257.48 84.582 257.238 85.3516 256.77 86.0312C256.301 86.7109 255.676 87.25 254.895 87.6484C254.121 88.0391 253.254 88.2344 252.293 88.2344C251.316 88.2344 250.465 88.0703 249.738 87.7422C249.012 87.4141 248.406 86.957 247.922 86.3711C247.445 85.7852 247.086 85.1055 246.844 84.332C246.609 83.5586 246.492 82.7305 246.492 81.8477V81.4727C246.492 80.5898 246.609 79.7617 246.844 78.9883C247.086 78.2148 247.445 77.5352 247.922 76.9492C248.406 76.3633 249.012 75.9062 249.738 75.5781C250.465 75.25 251.312 75.0859 252.281 75.0859C253.305 75.0859 254.203 75.2852 254.977 75.6836C255.758 76.082 256.367 76.6445 256.805 77.3711C257.25 78.0977 257.48 78.9531 257.496 79.9375H254.578C254.562 79.4844 254.461 79.0781 254.273 78.7188C254.086 78.3594 253.82 78.0703 253.477 77.8516C253.133 77.6328 252.715 77.5234 252.223 77.5234C251.699 77.5234 251.262 77.6328 250.91 77.8516C250.566 78.0703 250.297 78.3711 250.102 78.7539C249.914 79.1289 249.781 79.5508 249.703 80.0195C249.633 80.4805 249.598 80.9648 249.598 81.4727V81.8477C249.598 82.3633 249.633 82.8555 249.703 83.3242C249.781 83.793 249.914 84.2148 250.102 84.5898C250.297 84.957 250.566 85.25 250.91 85.4688C251.262 85.6875 251.707 85.7969 252.246 85.7969ZM265.254 88.2344C264.293 88.2344 263.43 88.0781 262.664 87.7656C261.898 87.4531 261.246 87.0195 260.707 86.4648C260.176 85.9023 259.766 85.25 259.477 84.5078C259.195 83.7578 259.055 82.9531 259.055 82.0938V81.625C259.055 80.6484 259.195 79.7617 259.477 78.9648C259.758 78.1602 260.156 77.4688 260.672 76.8906C261.188 76.3125 261.805 75.8672 262.523 75.5547C263.242 75.2422 264.035 75.0859 264.902 75.0859C265.801 75.0859 266.594 75.2383 267.281 75.543C267.969 75.8398 268.543 76.2617 269.004 76.8086C269.465 77.3555 269.812 78.0117 270.047 78.7773C270.281 79.5352 270.398 80.375 270.398 81.2969V82.5977H260.461V80.4648H267.352V80.2305C267.336 79.7383 267.242 79.2891 267.07 78.8828C266.898 78.4688 266.633 78.1406 266.273 77.8984C265.914 77.6484 265.449 77.5234 264.879 77.5234C264.418 77.5234 264.016 77.625 263.672 77.8281C263.336 78.0234 263.055 78.3047 262.828 78.6719C262.609 79.0312 262.445 79.4609 262.336 79.9609C262.227 80.4609 262.172 81.0156 262.172 81.625V82.0938C262.172 82.625 262.242 83.1172 262.383 83.5703C262.531 84.0234 262.746 84.418 263.027 84.7539C263.316 85.082 263.66 85.3398 264.059 85.5273C264.465 85.707 264.926 85.7969 265.441 85.7969C266.09 85.7969 266.676 85.6719 267.199 85.4219C267.73 85.1641 268.191 84.7852 268.582 84.2852L270.141 85.9023C269.875 86.293 269.516 86.668 269.062 87.0273C268.617 87.3867 268.078 87.6797 267.445 87.9062C266.812 88.125 266.082 88.2344 265.254 88.2344Z" fill="#0F172A" />
                    </svg>

                    <div>
                        <Input className="w-[384px]" type="email" placeholder="Email" />
                        <p className="text-sm text-gray-500 py-2">How much cash do you have in your wallet?</p>
                    </div>
                    <Link href="/info3" className="w-[384px] bg-blue-500 p-3 rounded-2xl text-white flex justify-center">
                        Confirm
                    </Link>


                </div>





            </div>



        </main>
    );
}
