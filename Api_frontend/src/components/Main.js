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
import { useState, useEffect, useCallback } from 'react';
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
import { Record } from "./Records"
import { useAuth } from "./Authprovider";


export const Main = ({ }) => {
    const URL = "http://localhost:3001";

    const [newCategory, setNewCategory] = useState({ name: "", iconName: "", color: "", userId: "" });

    const { setallCategories, createCategory, setAllRecords, allRecords, deleteCategory, createRecord, deleteRecord, fetchRecords } = useData();
    const token = localStorage.getItem("token");
    const [newRecord, setNewRecord] = useState({ /* initial state */ });
    const { user } = useAuth()


    // useEffect(() => {
    //     fetchRecords();
    // }, [fetchRecords]);

    // useEffect(() => {
    //     const getAllRecords = async () => {
    //         try {
    //             const token = localStorage.getItem('token');
    //             const response = await axios.get(`${URL}/records/${user.id}`, {
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 }
    //             });
    //             setAllRecords(response.data);
    //         } catch (error) {
    //             console.error("There was an error fetching the records!", error);
    //         }
    //     };
    //     getAllRecords()
    // }, [])


    const handleDelete = async (id) => {
        try {
            await deleteRecord(id); // Call the backend delete function
            setAllRecords((prevRecords) => prevRecords.filter((record) => record.id !== id));  // Update state
        } catch (error) {
            console.error("There was an error deleting the record!", error);
        }
    };


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
                        <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel className="text-bold">Sort by</SelectLabel>
                            <SelectItem value="apple">Oldest First</SelectItem>
                            <SelectItem value="banana">Newest first</SelectItem>
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
                    {allRecords.map((record) => (
                        <Record key={record.id}
                            record={record}
                            deleteRecord={handleDelete} />
                    ))}
                </div>
            </div>
        </div>
    );
};
