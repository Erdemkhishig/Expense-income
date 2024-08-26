"use client"

import { useState, useEffect, useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';


import * as Icons from "react-icons/fa6";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Anchor, CircleHelp, Earth, Layers, Grape, Bird, Watch, LoaderPinwheel, FileDigit, Kanban, Hourglass, ShipWheel, Plus, House, Gift, Utensils, Martini, CarTaxiFront, Shirt, Circle, Contact, CreditCard, Car, ZoomIn, Mic, Sheet, Leaf, } from 'lucide-react';

import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Addcategory } from './Addcategory';

import { useData, UserContext } from './Context';

const URL = "http://localhost:3001";

export const Addbutton = () => {
    const [date, setDate] = React.useState();

    const [newRecord, setNewRecord] = useState({ name:"", amount:"",userId:"",time:"", date:"",categoryId:"",payee:"",note:"",status:""});
    const {getAllCategories, setAllCategories, createCategory, deleteCategory, allCategories,  getAllRecords, setAllRecords, createRecord, deleteRecord, allRecords } = useData();
    // const [newCategory, setNewCategory] = useState({ name: "", iconName: "" });
    const [type, setType] = useState('Income');
    const activeColor = type === 'Income' ? 'bg-blue-500' : 'bg-green-500';
    const buttonColor = type === 'Income' ? 'bg-blue-600' : 'bg-green-500';

    const handleCatChange = (iconName) => {
        console.log('Icon selected:', iconName); 
        setNewCategory(prev => ({ ...prev, iconName }));
    };

    // const handleLeftClick = () => setPosition('left-0 && bg-blue-500');
    // const handleRightClick = () => setPosition('left-[182px] && bg-green-500');

    // const [accounts, setAccounts] = useState([]);

    // const [title, setTitle] = useState("");
    // const [amount, setAmount] = useState("");
    // const [category, setCategory] = useState("");
    // const [time, setTime] = useState("");
    // const [payee, setPayee] = useState("");



    // useEffect(() => {
    //     const getData = async () => {
    //         try {
    //             const response = await axios.get(`${URL}/accounts`);
    //             setAccounts(response.data);
    //         } catch (error) {
    //             console.error("There was an error fetching the accounts!", error);
    //         }
    //     };
    //     getData();
    // }, []);

    // const createAccount = async () => {
    //     const newAccount = {
    //         id: uuidv4(),
    //         title,
    //         amount,
    //         category,
    //         payee,
    //         time,
    //         createDate: date,
    //         type,

    //     };
    //     try {
    //         const response = await axios.post(`${URL}/accounts`,
    //             newAccount
    //         );
    //         setAccounts([...accounts, response.data]);
    //     } catch (error) {
    //         console.error(error)
    //     }
    // };


    // const handleDelete = async (id) => {
    //     try {
    //         await axios.delete(`${URL}/accounts/${id}`);
    //         setAccounts(accounts.filter((account) => account.id !== id));
    //     } catch (error) {
    //         console.error("There was an error deleting the account!", error);
    //     }
    // };


    // const FaIcon = newCategory.iconName ? Icons[newCategory.iconName] : null;

    return (
        <div>
            <Dialog>



                <DialogTrigger asChild>
                    <Button className="bg-blue-500 w-full rounded-2xl text-white" variant="outline">+ Record</Button>
                </DialogTrigger>

                <DialogContent className="w-[792px]">
                    <div className="border-b-2 w-full h-10 ">Add Record</div>

                    <div className="flex ">

                        <div className="flex flex-col gap-6 w-full">

                            <div className="w-full flex h-10 bg-gray-200 rounded-3xl">
                                <div className="relative w-full rounded-full border-2 bg-gray-200">
                                    <div
                                        className={`absolute top-0 h-full w-1/2 ${activeColor} rounded-full transition-transform duration-500`}
                                        style={{
                                            transform: type === 'Income' ? 'translateX(0)' : 'translateX(100%)',
                                        }}
                                    />
                                    <button
                                        type="button"
                                        className="absolute left-0 top-0 h-full w-1/2 text-center py-2 bg-transparent cursor-pointer z-10"
                                        onClick={() =>  setType('Income')}
                                    >
                                        Expense
                                    </button>
                                    <button
                                        type="button"
                                        className="absolute right-0 top-0 h-full w-1/2 text-center py-2 bg-transparent cursor-pointer z-10"
                                        onClick={() => setType('Expense')}
                                    >
                                        Income
                                    </button>
                                </div>
                            </div>

                            {/* <div className="w-[90%] flex h-10  bg-gray-200 rounded-3xl">
                            <button onClick={handlebgcolor} className={'w-1/2 rounded-3xl  bg-blue-500 text-white'}>Expense</button>
                            <button onClick={bgcolor} className={chckd ? 'w-1/2 rounded-3xl  bg-green-500 text-white' : 'w-1/2 rounded-3xl  bg-gray-200 text-black'}>Income</button>
                        </div> */}
                            <input className='border'
                                value={newRecord.amount}
                                placeholder='amount'
                                onChange={(e) => setNewRecord(prev => ({ ...prev, amount: e.target.value }))} />
                            <p>Category</p>
                            <Select onValueChange={handleCatChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Find or choose category" />
                                </SelectTrigger>
                                <SelectContent >
                                    <SelectGroup>

                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Addcategory />

                                            </DialogTrigger>
                                            {
                                                allCategories.map((item, index) => {
                                                    const FaIcon = Icons[item.iconName]
                                                    return (
                                                        <SelectItem value={item.id} key={index}>
                                                            <div className='flex items-center gap-2'>
                                                                <div style={{ color: item.color }} className='w-10 rounded-full flex items-center justify-center h-10 '><FaIcon size={28} /></div>
                                                                {item.name}
                                                            </div>
                                                        </SelectItem>
                                                    )
                                                })
                                            }
                                        </Dialog>


                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                    Date
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={"outline"}
                                                className={cn(
                                                    "w-[180px] justify-start text-left font-normal",
                                                    !date && "text-muted-foreground"
                                                )}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>{setDate}</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={setDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>

                                {/* <div className="flex flex-col w-full">
                                    Time
                                    <Input type="time"
                                        value={time}
                                        placeholder=''
                                        onChange={(event) => {
                                            setTime(event.target.value);
                                        }} />
                                </div> */}
                            </div>

                            <Button className={`w-full py-2 text-white ${buttonColor} rounded-md`}
                               onClick={() => createRecord(newRecord.amount, newRecord.payee, newRecord.note)} 
                                type="button"
                            >
                                Add Records
                            </Button>
                        </div>
                        <div className="w-full h-full px-2">
                            <p className='p-2'>Payee</p>
                            <input className='border p-2'
                                value={newRecord.payee}
                                placeholder=''
                                onChange={(e) => {
                                    setNewRecord(prev => ({...prev, payee: e.target.value}));
                                }} />

                            <p className="p-2 my-2">Note</p>
                            <Textarea
                                className="h-[64%]"
                                placeholder="Type your message here."
                                value={newRecord.note}
                                onChange={(e) => {
                                    setNewRecord(prev => ({...prev, note: e.target.value}));
                                }} />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}