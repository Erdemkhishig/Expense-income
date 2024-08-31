'use client'
import { Checkbox } from "@/components/ui/checkbox"
import { useData } from "./Context";

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Eye, Icon, icons, Plus } from 'lucide-react';
import axios from 'axios';

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { cn } from "@/lib/utils"
import { Slider } from "@/components/ui/slider"
import { useContext, useState, useEffect } from "react"

import { Addbutton } from "./Addbutton";
import { Addcategory } from "./Addcategory"

import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "./Context"
import { Categorybar } from "./Categorybar"
import { Amountrange } from "./Amountrange";
import { useAuth } from "./Authprovider";



export function Aside({ setFilter  }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [id, setId] = useState("");
    const [payee, setPayee] = useState("");
    const URL = "http://localhost:3001";

    const [filter, setFilterState] = useState("all");


    const handleFilterChange = (value) => {
        setFilterState(value);
        if (setFilter) {
            setFilter(value); // Pass the filter value to the parent component if setFilter exists
        }
        console.log(setFilter);
        
    };

  
    



    return (
        <div className="px-4 py-8 w-[24rem]">
            <Card>
                <CardHeader>
                    <CardTitle>Records</CardTitle>
                </CardHeader>
                <CardContent>
                    <Addbutton />
                    <input className="border-2 border-gray-400 rounded-md my-4 w-full p-1" type="Search" placeholder="  Search" />
                    <div>
                        <p className="font-semi-bold py-3">Types</p>
                        <div className="flex flex-col justify-start items-start">
                        <RadioGroup value={filter} onValueChange={handleFilterChange}>
                                <div className="flex items-center space-x-2 mt-3">
                                    <RadioGroupItem value="all" id="r1" />
                                    <Label htmlFor="r1">All</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="income" id="r2" />
                                    <Label htmlFor="r2">Income</Label>
                                </div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <RadioGroupItem value="expense" id="r3" />
                                    <Label htmlFor="r3">Expense</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div className="flex justify-between py-4">
                        <p className="font-bold mb-4">Category</p>
                        <button className="text-gray-300">Clear</button>
                    </div>
                    <Categorybar />
                    <Addcategory />
                </CardContent>
                <Amountrange />

            </Card>
        </div>
    );
}
