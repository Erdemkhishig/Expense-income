


"use client"
import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useAuth } from './Authprovider';



export const UserContext = createContext(null);

const URL = "http://localhost:3001"
export const UserContextProvider = ({ children }) => {
    const [allCategories, setAllCategories] = useState([]);
    const token = localStorage.getItem("token");
    const { user } = useAuth()

    const fetchRecords = async () => {
        try {
            const res = await axios.get('http://localhost:3001/records', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setAllRecords(res.data);
        } catch (error) {
            console.error("Error fetching records", error);
        }
    };


    const fetchCategories = async () => {
        try {
            const res = await axios.get('http://localhost:3001/categories', {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setAllCategories(res.data);
        } catch (error) {
            console.error("Error fetching records", error);
        }
    };

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
    // const createCategory = async (newRecords) => {
    //     try {
    //         const token = localStorage.getItem('token');
    //         const response = await axios.post(`${URL}/records`, {
    //             newRecords
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //         setAllRecords(prev => [...prev, response.data]);
    //     } catch (error) {
    //         console.error("There was an error creating the record!", error);
    //     }
    // };

    const createCategory = async (name, iconName, color, userId) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${URL}/categories`, {
                name,
                iconName,
                color,
                userId,
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
            const token = localStorage.getItem('token');
            const response = await axios.get(`${URL}/records/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllRecords(response.data);
        } catch (error) {
            console.error("There was an error fetching the records!", error);
        }
    };

    // const getAllRecords = async () => {
    //     try {
    //         const response = await axios.get(`${URL}/records`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         });

    //         console.log(response.data, "======")
    //         setAllRecords(response.data);
    //     } catch (error) {
    //         console.error("There was an error fetching the categories!", error);
    //     }
    // };

    // const createRecord = async (newRecords) => {
    //     try {
    //         const response = await axios.post(`${URL}/records`, {
    //             newRecords
    //         }, {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem("token")}`,
    //             },
    //         });
    //         setAllRecords(prev => [...prev, response.data]);
    //     } catch (error) {
    //         console.error("There was an error creating the category!", error);
    //     }
    // };

    const createRecord = async (newRecords) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post(`${URL}/records`, {
                newRecords
            }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // setAllRecords(prev => [...prev, response.data]);
        } catch (error) {
            console.error("There was an error creating the record!", error);
        }
        getAllRecords()
    };
    const deleteRecord = async (id) => {
        try {
            // Log the ID and URL to ensure they are correct
            console.log(`Deleting record with ID: ${id}`);
            console.log(`Request URL: ${`${URL}/records/${id}`}`);

            await axios.delete(`${URL}/records/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Log the success to confirm deletion
            console.log(`Record with ID: ${id} deleted successfully`);

            setAllRecords(prev => prev.filter(record => record.id !== id));
        } catch (error) {
            // Log the error details for debugging
            console.error("There was an error deleting the record!", error.response || error.message);
        }
    };

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
        getAllRecords()
    }, [])



    return (
        <UserContext.Provider value={{ getAllCategories, fetchRecords, fetchCategories, setAllCategories, createCategory, deleteCategory, allCategories, allRecords, setAllRecords, createRecord, deleteRecord }}>
            {children}
        </UserContext.Provider>
    )
}

export const useData = () => useContext(UserContext)