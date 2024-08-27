'use client'
import { useEffect, useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import * as Icons from "react-icons/fa6";
import axios from "axios";


export const OneRecord = ({ record }) => {
    const [category, setCategory] = useState({
        "id": 5,
        "name": "House",
        "iconName": "FaHouse",
        "color": "FaHouse"
    })
    useEffect(() => {
        const getCategoryId = async (categoryId) => {
            try {
                const res = await axios.get(`http://localhost:3001/categories/${categoryId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`,
                    }
                });
                setCategory(res.data)
            } catch (error) {
                console.error("There was an error deleting the category!", error);
            }
        };
        getCategoryId(record.categoryId)
    }, [record.categoryId])
    const CategoryIcon = category.iconName ? Icons[category.iconName] : Icons["FaHouse"]
    return (
        <div className="flex justify-between items-center space-x-2 border-2 p-4 rounded-2xl bg-gray-200">
            <div className="flex items-center pl-4 gap-4">
                <label
                    htmlFor={`checkbox-${record.amount}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    <div className="flex gap-4 justify-center items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white`} >
                            <CategoryIcon className="text-green-400" size={20} />
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p >{category.iconName}</p>

                            <p className="text-gray-400">{category.name}</p>
                            <p className="text-gray-300">{record.date}</p>



                        </div>
                    </div>
                </label>
            </div>
            <p
                style={{
                    color: record.status === 'Expense' ? 'green' : 'red'
                }}
            >
                {record.status === 'Income' ? `-${record.amount}` : `+${record.amount}`}
            </p>
            <button
            // onClick={() => handleDelete(record.id)}
            >
                <RiDeleteBinLine size={24} color="red" />
            </button>
        </div>
    )
}