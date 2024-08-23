

import * as Icons from "react-icons/fa6";
import { useData } from "./Context";

import { useState, useEffect, useContext } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
    DialogTrigger,
} from "@/components/ui/dialog";
import axios from "axios";

const cat = [
    "FaHouse",
    "FaGift",
    "FaUtensils",
    "FaWineGlass",
    "FaTruckPickup",
    "FaTags",
    "FaItunesNote",
    "FaHeadSideMask",
    "FaPlaneUp",
    "FaLandmarkFlag",
    "FaMemory",
    "FaPersonBiking",
    "FaPizzaSlice",
    "FaRegChessPawn",
    "FaRobot",
    "FaSatelliteDish",
    "FaSterlingSign",
    "FaAppStore"
];

import { Plus } from 'lucide-react';
import { UserContext } from "./Context";
import { getDate } from "date-fns";

const color = [
    { color: "blue", colorCode: "#0000FF" },
    { color: "cyan", colorCode: "#00FFFF" },
    { color: "green", colorCode: "#008000" },
    { color: "yellow", colorCode: "#FFFF00" },
    { color: "orange", colorCode: "#FFA500" },
    { color: "purple", colorCode: "#800080" },
    { color: "red", colorCode: "#FF0000" },
];

// const URL = "http://localhost:3001"

// export const Addcategory = () => {
//     // const { userInfo, setAllCategories, getData } = useContext(UserContext);

//     const { createCategory } = useData();
//     const [newCategory, setNewCategory] = useState({ title: "", color: "", name: "", iconName: "" });

//     const [selectedColor, setSelectedColor] = useState('#0000FF');



//     const handleCatChange = (iconName) => {
//         setNewCategory(prev => ({ ...prev, iconName }));
//     };

//     const handleColorChange = (colorCode) => {
//         setSelectedColor(colorCode);
//         setNewCategory(prev => ({ ...prev, color: colorCode }));
//     };


//     const FaIcon = newCategory.iconName ? Icons[newCategory.iconName] : null;



//     return (
//         <div>
//             <Dialog>
//                 <DialogTrigger asChild>
//                     <Button className="w-full flex gap-2" variant="outline">
//                         <div className="border-2 border-blue-600 rounded-full bg-blue-600">
//                             <Plus size={16} color="white" />
//                         </div>
//                         <div>Add Category</div>
//                     </Button>
//                 </DialogTrigger>
//                 <DialogContent className="sm:max-w-[425px]">
//                     <DialogHeader>
//                         <DialogTitle>Add Category</DialogTitle>
//                     </DialogHeader>
//                     <div className="flex gap-4">
//                         <Select onValueChange={handleCatChange}>
//                             <SelectTrigger className="w-fit">
//                                 <SelectValue placeholder={FaIcon ? <FaIcon style={{ color: selectedColor }} /> : "Select Icon"} />
//                             </SelectTrigger>
//                             <SelectContent>
//                                 <SelectGroup>
//                                     <div className="grid grid-cols-6 grid-rows-4 py-4 pr-4">
//                                         {cat.map((item, index) => {
//                                             const Icon = Icons[item];
//                                             return (
//                                                 <SelectItem key={index} value={item}>
//                                                     <div style={{ color: selectedColor }}>
//                                                         <Icon size={24} />
//                                                     </div>
//                                                 </SelectItem>
//                                             );
//                                         })}
//                                     </div>
//                                     <div className="flex justify-between pr-4 pl-8 py-4 border-t-2">
//                                         {color.map((item, index) => (
//                                             <button
//                                                 key={index}
//                                                 style={{ backgroundColor: item.colorCode }}
//                                                 className={`w-8 h-8 rounded-full border-2 border-gray-200 ${selectedColor === item.colorCode ? 'border-black' : ''}`}
//                                                 onClick={() => handleColorChange(item.colorCode)}
//                                             />
//                                         ))}
//                                     </div>
//                                 </SelectGroup>
//                             </SelectContent>
//                         </Select>
//                         <Input
//                             placeholder="Category Name"
//                             value={newCategory.title}
//                             onChange={(e) => setNewCategory(prev => ({ ...prev, title: e.target.value }))}
//                         />
//                     </div>
//                     <DialogFooter className="flex w-96 px-0 justify-center">
//                         <Button
//                             className="bg-green-600 rounded-2xl p-2 w-full text-white"
//                             type="button"
//                             onClick={() => createCategory(newCategory)}
//                         >
//                             Save changes
//                         </Button>
//                     </DialogFooter>
//                 </DialogContent>
//             </Dialog>
//         </div>
//     );
// };


const URL = "http://localhost:3001"; // Ensure this matches your server URL

export const Addcategory = () => {
    const [newCategory, setNewCategory] = useState({ title: "", color: "", name: "", iconName: "" });
    const [selectedColor, setSelectedColor] = useState('#0000FF');

    const handleCatChange = (iconName) => {
        console.log('Icon selected:', iconName); // Debugging line
        setNewCategory(prev => ({ ...prev, iconName }));
    };

    const handleColorChange = (colorCode) => {
        console.log('Color selected:', colorCode); // Debugging line
        setSelectedColor(colorCode);
        setNewCategory(prev => ({ ...prev, color: colorCode }));
    };

    const saveCategory = async () => {
        console.log('Saving category:', newCategory); // Debugging line
        try {
            const response = await axios.post(`${URL}/categories`, {
                name: newCategory.title,
                color: newCategory.color,
                iconName: newCategory.iconName,
                createdAt: new Date(),
            });

            console.log('Category saved:', response.data);
        } catch (error) {
            console.error('Error saving category:', error);
        }
    };


    const FaIcon = newCategory.iconName ? Icons[newCategory.iconName] : null;

    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>
                    <Button className="w-full flex gap-2" variant="outline">
                        <div className="border-2 border-blue-600 rounded-full bg-blue-600">
                            <Plus size={16} color="white" />
                        </div>
                        <div>Add Category</div>
                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Category</DialogTitle>
                    </DialogHeader>
                    <div className="flex gap-4">
                        <Select onValueChange={handleCatChange}>
                            <SelectTrigger className="w-fit">
                                <SelectValue placeholder={FaIcon ? <FaIcon style={{ color: selectedColor }} /> : "Select Icon"} />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <div className="grid grid-cols-6 grid-rows-4 py-4 pr-4">
                                        {cat.map((item, index) => {
                                            const Icon = Icons[item];
                                            return (
                                                <SelectItem key={index} value={item}>
                                                    <div style={{ color: selectedColor }}>
                                                        <Icon size={24} />
                                                    </div>
                                                </SelectItem>
                                            );
                                        })}
                                    </div>
                                    <div className="flex justify-between pr-4 pl-8 py-4 border-t-2">
                                        {color.map((item, index) => (
                                            <button
                                                key={index}
                                                style={{ backgroundColor: item.colorCode }}
                                                className={`w-8 h-8 rounded-full border-2 border-gray-200 ${selectedColor === item.colorCode ? 'border-black' : ''}`}
                                                onClick={() => handleColorChange(item.colorCode)}
                                            />
                                        ))}
                                    </div>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Input
                            placeholder="Category Name"
                            value={newCategory.title}
                            onChange={(e) => setNewCategory(prev => ({ ...prev, title: e.target.value }))}
                        />
                    </div>
                    <DialogFooter className="flex w-96 px-0 justify-center">
                        <Button
                            className="bg-green-600 rounded-2xl p-2 w-full text-white"
                            type="button"
                            onClick={saveCategory} // Call saveCategory on button click
                        >
                            Save changes
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};
