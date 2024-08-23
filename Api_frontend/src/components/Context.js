"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';


export const UserContext = createContext(null);

const URL = "http://localhost:3001"

export const UserContextProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState({ name: "ner", email: "mailaddress" })
    // const [newCategory, setNewCategory] = useState({ name: "", icon: "", color: "" });
    const [allCategories, setAllCategories] = useState([]);
    const token = localStorage.getItem("token")

    const getAllCategories = async () => {
        try {
            const response = await axios.get(`${URL}/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            // console.log(userInfo, newCategory, " +++++++");
            setAllCategories(response.data);
        } catch (error) {
            console.error("There was an error fetching the accounts!", error);
        }
    };

    const createCategory = async (title, color, name, iconName) => {
        try {
            const createCategory = await axios.post(`${URL}/categories`, { title, color, name, iconName, createdAt: new Date() });
            setAllCategories(prev => [...prev, createCategory.data]);
        } catch (error) {
            console.error("There was an error creating the category!", error);
        }

    };

    const getCategoryById = async (id) => {
        try {
            const response = await axios.get(`${URL}/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error("There was an error fetching the category!", error);
        }
    };


    useEffect(() => {
        getAllCategories()
    }, [])

    return (
        <UserContext.Provider value={{ userInfo, setUserInfo, getAllCategories, createCategory, getCategoryById, allCategories }}>
            {children}
        </UserContext.Provider>
    )

}

export const useData = () => useContext(UserContext)