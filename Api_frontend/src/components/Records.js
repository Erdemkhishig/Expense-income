

// 'use client'
// import { useEffect, useState } from "react";
// import { RiDeleteBinLine } from "react-icons/ri";
// import * as Icons from "react-icons/fa6";
// import axios from "axios";
// import { Checkbox } from "./ui/checkbox";
// export const Record = ({ record, deleteRecord }) => {
//     const datePart = record.date ? record.date.split('T')[0] : '';

//     const [category, setCategory] = useState({})

//     useEffect(() => {
//         const getCategoryId = async (categoryId) => {
//             try {
//                 const res = await axios.get(`http://localhost:3001/categories/${categoryId}`, {
//                     headers: {
//                         Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     }
//                 });
//                 setCategory(res.data)
//             } catch (error) {
//                 console.error("There was an error fetching the category!", error);
//             }
//         };
//         if (record.categoryId) {
//             getCategoryId(record.categoryId)
//         }
//     }, [record.categoryId])

//     const CategoryIcon = category.iconName ? Icons[category.iconName] : Icons["FaHouse"]


//     // console.log('Record status:', record.status);
//     // console.log('Record amount:', record.amount);

//     const isIncome = record.status === 'Income';
//     const amountColor = isIncome ? 'green' : 'red';
//     const amountSign = isIncome ? '+' : '-';

//     return (
//         <div className="flex justify-between items-center space-x-2 border-2 p-4 rounded-2xl bg-white">
//             <div className="flex items-center pl-4 gap-4 ">
//                 <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                     <div className="flex gap-4 justify-center items-center">
//                         <div className="flex items-center space-x-2">
//                             <Checkbox id="terms" />
//                             <label
//                                 htmlFor="terms"
//                                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                             >

//                             </label>
//                         </div>
//                         <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white`} style={{ backgroundColor: category.color }}>
//                             <CategoryIcon size={28} />
//                         </div>
//                         <div className="flex flex-col justify-center items-center gap-2">
//                             <p>{category.name}</p>
//                             <div className="flex flex-col items-center">
//                                 <p className="text-gray-400">{datePart}</p>
//                                 <p className="text-gray-400">{record.time}</p>
//                             </div>
//                         </div>
//                     </div>
//                 </label>
//             </div>
//             <p className="flex justify-center" style={{ color: amountColor }}>
//                 {amountSign}{Math.abs(record.amount)}
//             </p>
//             <button onClick={() => deleteRecord(record.id)}>
//                 <RiDeleteBinLine size={24} color="red" />
//             </button>
//         </div>
//     )
// }

import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import * as Icons from "react-icons/fa6";
import axios from "axios";
import { Checkbox } from "./ui/checkbox";

export const Record = ({ record, deleteRecord }) => {
    const datePart = record.date ? record.date.split('T')[0] : '';
    const [category, setCategory] = useState({});

    useEffect(() => {
        const getCategoryId = async (categoryId) => {
            try {
                const res = await axios.get(`http://localhost:3001/categories/${categoryId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
                setCategory(res.data);
            } catch (error) {
                console.error("There was an error fetching the category!", error);
            }
        };

        if (record.categoryId) {
            getCategoryId(record.categoryId);
        }
    }, [record.categoryId]);

    const CategoryIcon = category.iconName ? Icons[category.iconName] : Icons["FaHouse"];

    const isIncome = record.status === 'Income';
    const amountColor = isIncome ? 'green' : 'red';
    const amountSign = isIncome ? '+' : '-';

    return (
        <div className="flex justify-between items-center space-x-2 border-2 p-4 rounded-2xl bg-white">
            <div className="flex items-center pl-4 gap-4">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <div className="flex gap-4 justify-center items-center">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"></label>
                        </div>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white`} style={{ backgroundColor: category.color }}>
                            <CategoryIcon size={28} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p>{category.name}</p>
                            <div className="flex flex-col items-center">
                                <p className="text-gray-400">{datePart}</p>
                                <p className="text-gray-400">{record.time}</p>
                            </div>
                        </div>
                    </div>
                </label>
            </div>
            <p className="flex justify-center" style={{ color: amountColor }}>
                {amountSign}{Math.abs(record.amount)}
            </p>
            <button onClick={() => deleteRecord(record.id)}>
                <RiDeleteBinLine size={24} color="red" />
            </button>

        </div>
    );
};

