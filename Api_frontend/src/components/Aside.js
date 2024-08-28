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
import { useContext, useState } from "react"

import { Addbutton } from "./Addbutton";
import { Addcategory } from "./Addcategory"

import { v4 as uuidv4 } from 'uuid';
import { UserContext } from "./Context"
import { Categorybar } from "./Categorybar"

// // const category = [
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Food & Drinks"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Shopping"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Housing"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Transportation"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Vehicle"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Life & Entertainment"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Communication, PC"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Financial expenses"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Investments"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Income"
// //     },
// //     {
// //         icon: <Eye color="#94A3B8 " />,
// //         title: "Others"
// //     },


// // ]
// 0
// export function Aside({ setAccounts, accounts }) {

//     const [title, setTitle] = useState("");
//     const [amount, setAmount] = useState("");
//     const [category, setCategory] = useState("");
//     const [time, setTime] = useState("");
//     const [id, set] = useState("");
//     const [payee, setPayee] = useState("");
//     const URL = "http://localhost:3001"
//     const { allCategories, createCategory, getCategoryById } = useData();
//     const [newCategory, setNewCategory] = useState({ title: "", color: "", name: "", iconName: "" });
//     const [fetchCategoryId, setFetchCategoryId] = useState(null);
//     const [categoryDetails, setCategoryDetails] = useState(null);

//     const [range, setRange] = useState({ min: 0, max: 100000 })
//     // const [accounts, setAccounts] = useState([]);

//     return (
//         <div className="px-4 py-8 w-[24rem]">

//             <Card>
//                 <CardHeader>
//                     <CardTitle>Records</CardTitle>

//                 </CardHeader>
//                 <CardContent>

//                     <Addbutton setAccounts={setAccounts} accounts={accounts} />

//                     <input className="border-2 border-gray-400 rounded-md my-4 w-full p-1" type="Search" placeholder="  Search" />
//                     <div> <p className="font-semi-bold py-3">Types</p>
//                         <div className="flex flex-col justify-start items-start">

//                             <RadioGroup defaultValue="comfortable">
//                                 <div className="flex items-center space-x-2 mt-3">
//                                     <RadioGroupItem value="default" id="r1" />
//                                     <Label htmlFor="r1">All</Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <RadioGroupItem value="comfortable" id="r2" />
//                                     <Label htmlFor="r2">Income</Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2 mb-4">
//                                     <RadioGroupItem value="compact" id="r3" />
//                                     <Label htmlFor="r3">Expense</Label>
//                                 </div>
//                             </RadioGroup>

//                         </div>


//                     </div>
//                     <div className="flex justify-between py-4">
//                         <p className="font-bold mb-4">Category</p>
//                         <button className="text-gray-300">Clear</button>
//                     </div>



//                     <Categorybar />
//                     <Addcategory />


//                 </CardContent>
//                 <CardFooter className="flex flex-col gap-4 items-start">
//                     <p>Amount Range</p>
//                     <div className="flex gap-4">
//                         <Input placeholder="0" value={range.min} onChange={(event) => { setRange({ ...range, min: event.target.value }), console.log(range); }} />
//                         <Input placeholder="1000" value={range.max} onChange={(event) => { setRange({ ...range, max: event.target.value }), console.log(range); }} />

//                     </div>
//                     <Slider defaultValue={[33]} min={range.min} max={range.max} step={500} />
//                     <div className="flex w-full justify-between">
//                         <p>{range.min}</p>
//                         <p>{range.max}</p>
//                     </div>
//                 </CardFooter>

//             </Card>

//         </div>
//     )
// }



export function Aside({ setAccounts, accounts }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("");
    const [time, setTime] = useState("");
    const [id, setId] = useState("");
    const [payee, setPayee] = useState("");
    const URL = "http://localhost:3001";
    const { allCategories, createCategory, getCategoryById } = useData();
    const [newCategory, setNewCategory] = useState({ name: "", iconName: "" });
    const [fetchCategoryId, setFetchCategoryId] = useState(null);
    const [categoryDetails, setCategoryDetails] = useState(null);
    const [range, setRange] = useState({ min: 0, max: 100000 });

    // useEffect(() => {
    //     // Fetch the categories when the component mounts or after a category is added
    //     const fetchCategories = async () => {
    //         try {
    //             const response = await axios.get(`${URL}/categories`);
    //             // Assuming response.data is an array of categories
    //             // allCategories = response.data;
    //         } catch (error) {
    //             console.error("Error fetching categories:", error);
    //         }
    //     };

    //     fetchCategories();
    // }, [createCategory]); // Depend on createCategory if it's a state

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
                            <RadioGroup defaultValue="comfortable">
                                <div className="flex items-center space-x-2 mt-3">
                                    <RadioGroupItem value="default" id="r1" />
                                    <Label htmlFor="r1">All</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="comfortable" id="r2" />
                                    <Label htmlFor="r2">Income</Label>
                                </div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <RadioGroupItem value="compact" id="r3" />
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
                    <Addcategory  />
                </CardContent>
                <CardFooter className="flex flex-col gap-4 items-start">
                    <p>Amount Range</p>
                    <div className="flex gap-4">
                        <Input placeholder="0" value={range.min} onChange={(event) => { setRange({ ...range, min: event.target.value }), console.log(range); }} />
                        <Input placeholder="1000" value={range.max} onChange={(event) => { setRange({ ...range, max: event.target.value }), console.log(range); }} />
                    </div>
                    <Slider defaultValue={[33]} min={range.min} max={range.max} step={500} />
                    <div className="flex w-full justify-between">
                        <p>{range.min}</p>
                        <p>{range.max}</p>
                    </div>
                </CardFooter>
            </Card>
        </div>
    );
}
