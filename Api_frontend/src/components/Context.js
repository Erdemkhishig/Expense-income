


"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';


export const UserContext = createContext(null);

const URL = "http://localhost:3001"

export const UserContextProvider = ({ children }) => {
    const [allCategories, setAllCategories] = useState([]);
    const token = localStorage.getItem("token");



    const getAllCategories = async () => {
        try {
            const response = await axios.get(`${URL}/categories`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllCategories(response.data);
        } catch (error) {
            console.error("There was an error fetching the categories!", error);
        }
    };

    const createCategory = async (name, iconName) => {
        try {
            const response = await axios.post(`${URL}/categories`, {
                name,
                iconName,
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setAllCategories(prev => [...prev, response.data]);
        } catch (error) {
            console.error("There was an error creating the category!", error);
        }
    };

    const deleteCategory = async (categoryId) => {
        try {
            await axios.delete(`${URL}/categories/${categoryId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllCategories(prev => prev.filter(category => category.id !== categoryId));
        } catch (error) {
            console.error("There was an error deleting the category!", error);
        }
    };

    useEffect(() => {
        getAllCategories();
    }, []);

    return (
        <UserContext.Provider value={{ getAllCategories, setAllCategories, createCategory, deleteCategory, allCategories }}>
            {children}
        </UserContext.Provider>
    )
}

export const useData = () => useContext(UserContext)