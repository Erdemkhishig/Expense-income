


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

    const createCategory = async (name, iconName,color) => {
        try {
            const response = await axios.post(`${URL}/categories`, {
                name,
                iconName,
                color,
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

    const [allRecords, setAllRecords] = useState([]);

    const getAllRecords = async () => {
        try {
            const response = await axios.get(`${URL}/records`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data, "======")
            setAllRecords(response.data);
        } catch (error) {
            console.error("There was an error fetching the categories!", error);
        }
    };

    const createRecord = async (newRecords) => {
        try {
            const response = await axios.post(`${URL}/records`, {
                newRecords
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            setAllRecords(prev => [...prev, response.data]);
        } catch (error) {
            console.error("There was an error creating the category!", error);
        }
    };
    const deleteRecord = async (id) => {
        try {
            await axios.delete(`/api/records/${id}`);
            setAllRecords(records.filter(record => record.id !== id));
        } catch (err) {
            (err.message);
        }
    }
    // const deleteRecord = async (recordId) => {
    //     try {
    //         await axios.delete(`${URL}/records/${recordId}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         });
    //         setAllRecords(prev => prev.filter(record => record.id !== recordId));
    //     } catch (error) {
    //         console.error("There was an error deleting the category!", error);
    //     }
    // };

    
   

    useEffect(() => {
        getAllRecords();
    }, []);


    return (
        <UserContext.Provider value={{ getAllCategories, setAllCategories, createCategory, deleteCategory, allCategories, getAllRecords, setAllRecords, createRecord, allRecords, deleteRecord }}>
            {children}
        </UserContext.Provider>
    )
}

export const useData = () => useContext(UserContext)