import * as React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RiDeleteBinLine } from "react-icons/ri";
import { parseISO, format } from "date-fns";
import { useData, UserContext } from './Context';
import { OneRecord } from "./Records";


export const Main = ({ }) => {
    const URL = "http://localhost:3001";

    const [newCategory, setNewCategory] = useState({ name: "", iconName: "" });
    const [newRecord, setNewRecord] = useState({ name: "", amount: "", userId: "", time: "", date: "", categoryId: "", payee: "", note: "", status: "" });
    const { getAllCategories, setAllCategories, createCategory, deleteCategory, allCategories, getAllRecords, setAllRecords, createRecord, deleteRecord, allRecords } = useData();
    const token = localStorage.getItem("token");
    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const res = await axios.get(`${URL}/records`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setAllRecords(res.data);
            } catch (error) {
                console.error("There was an error fetching the records!", error);
            }
        };
        fetchRecords();
    }, [URL, token]);


    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete(`${URL}/accounts/${id}`);
    //         setAccounts(accounts.filter((account) => account.id !== id));
    //     } catch (error) {
    //         console.error("There was an error deleting the account!", error);
    //     }
    // };

    // const getCategoryById = (categoryId) => {
    //     return categories.find(category => category.id === categoryId) || {};
    // };


    return (
        <div>
            <div className="pt-8 pb-4 flex justify-between">
                <Carousel className="w-40 max-w-xs">
                    <CarouselContent>
                        {Array.from({ length: 30 }).map((_, index) => (
                            <CarouselItem key={index}>
                                <div className="p-1 h-10">
                                    <Card>
                                        <CardContent className="flex items-center justify-center py-1">
                                            <span className="text-sm font-semibold">Last {index + 1} days</span>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

                <Select className="pt-4">
                    <SelectTrigger className="w-[180px] font-bold">
                        <SelectValue placeholder="Newest first" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className="text-bold">Newest first</SelectLabel>
                            <SelectItem value="apple">Oldest First</SelectItem>
                            <SelectItem value="banana">...</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="-ml-12">
                <div className="flex justify-between space-x-2 border-2 p-4 rounded-2xl bg-white">
                    <div className="flex items-center pl-4 gap-4">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                            <div className="flex gap-4">
                                <div className="text-lg flex flex-col justify-center items-center gap-2">
                                    <p>Select all</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>

                <p className="font-bold py-4">Today</p>

                <div className="flex flex-col gap-4">
                    {allRecords.map((record, index) => (
                        <OneRecord    key={record.id}
                        record={record}
                        deleteRecord={deleteRecord}/>
                    ))}
                </div>
            </div>
        </div>
    );
};
