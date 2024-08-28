

"use client"

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';

import * as Icons from 'react-icons/fa6';
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Textarea } from '@/components/ui/textarea';

import { useData } from './Context';
import { Addcategory } from './Addcategory';

export const Addbutton = () => {
    const [date, setDate] = useState(null);
    const [time, setTime] = useState('');
    const [newRecords, setNewRecords] = useState({ amount: null, userId: 0, time: null, date: null, categoryId: null, payee: null, note: null, status: 'Income' });
    const { allCategories, createRecord } = useData();
    const [type, setType] = useState('Income');
    const activeColor = type === 'Income' ? 'bg-green-500' : 'bg-blue-500';
    const buttonColor = type === 'Income' ? 'bg-green-600' : 'bg-blue-600';

    const handleCatChange = (iconName) => {
        setNewRecords(prev => ({ ...prev, categoryId: iconName }));
    };

    const handleDateChange = (date) => {
        setDate(date);
        setNewRecords(prev => ({ ...prev, date }));
    };

    const handleTimeChange = (time) => {
        setTime(time);
        setNewRecords(prev => ({ ...prev, time }));
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="bg-blue-500 w-full rounded-2xl text-white" variant="outline">+ Record</Button>
                </DialogTrigger>
                <DialogContent className="w-[792px]">
                    <div className="border-b-2 w-full h-10">Add Record</div>
                    <div className="flex">
                        <div className="flex flex-col gap-6 w-full">
                            <div className="w-full flex h-10 bg-gray-200 rounded-3xl">
                                <div className="relative w-full rounded-full border-2 bg-gray-200">
                                    <div
                                        className={`absolute top-0 h-full w-1/2 ${activeColor} rounded-full transition-transform duration-500`}
                                        style={{ transform: type === 'Income' ? 'translateX(0)' : 'translateX(100%)' }}
                                    />
                                    <button
                                        type="button"
                                        className="absolute left-0 top-0 h-full w-1/2 text-center py-2 bg-transparent cursor-pointer z-10"
                                        onClick={() => setType('Income')}
                                    >
                                        Income
                                    </button>
                                    <button
                                        type="button"
                                        className="absolute right-0 top-0 h-full w-1/2 text-center py-2 bg-transparent cursor-pointer z-10"
                                        onClick={() => setType('Expense')}
                                    >
                                        Expense
                                    </button>
                                </div>
                            </div>
                            <input
                                className="border"
                                value={newRecords.amount}
                                placeholder="Amount"
                                onChange={(e) => setNewRecords(prev => ({ ...prev, amount: e.target.value }))}
                            />
                            <p>Category</p>
                            <Select onValueChange={handleCatChange}>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Find or choose category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Addcategory />
                                            </DialogTrigger>
                                            {allCategories.map((item, index) => {
                                                const FaIcon = Icons[item.iconName];
                                                return (
                                                    <SelectItem value={item.id} key={index}>
                                                        <div className="flex items-center gap-2">
                                                            <div style={{ color: item.color }} className="w-10 rounded-full flex items-center justify-center h-10">
                                                                <FaIcon size={28} />
                                                            </div>
                                                            {item.name}
                                                        </div>
                                                    </SelectItem>
                                                );
                                            })}
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
                                                className={`w-[180px] justify-start text-left font-normal ${!date ? 'text-muted-foreground' : ''}`}
                                            >
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {date ? format(date, "PPP") : <span>Select a date</span>}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={date}
                                                onSelect={handleDateChange}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                                <div className="flex flex-col w-full">
                                    Time
                                    <Input
                                        type="time"
                                        value={time}
                                        onChange={(event) => handleTimeChange(event.target.value)}
                                    />
                                </div>
                            </div>

                            <Button
                                className={`w-full py-2 text-white ${buttonColor} rounded-md`}
                                onClick={() => {
                                    createRecord({ ...newRecords, status: type });
                                }}
                                type="button"
                            >
                                Add Record
                            </Button>
                        </div>
                        <div className="w-full h-full px-2">
                            <p className="p-2">Payee</p>
                            <input
                                className="border p-2"
                                value={newRecords.payee}
                                placeholder="Payee"
                                onChange={(e) => setNewRecords(prev => ({ ...prev, payee: e.target.value }))}
                            />
                            <p className="p-2 my-2">Note</p>
                            <Textarea
                                className="h-[64%]"
                                placeholder="Type your note here."
                                value={newRecords.note}
                                onChange={(e) => setNewRecords(prev => ({ ...prev, note: e.target.value }))}
                            />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};
