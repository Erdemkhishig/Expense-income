import React, { createContext, useState, useEffect, useContext } from 'react';
import { api } from '@/lib/axios';

const RecordsContext = createContext();
const URL = "http://localhost:3001"

export const RecordsProvider = ({ children }) => {
    const [allRecords, setAllRecords] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [token, setToken] = useState(localStorage.getItem('token') || ''); // Retrieve token from localStorage

    // useEffect(() => {
    //     if (token) {
    //         api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    //     } else {
    //         delete api.defaults.headers.common['Authorization'];
    //     }
    // }, [token]);

    const getAllRecords = async () => {
        try {
            const response = await axios.get(`${URL}/records`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllRecords(response.data);
        } catch (error) {
            console.error("There was an error fetching the categories!", error);
        }
    };

    const createRecord = async (id,
        name,
        amount,
        userId,
        time,
        date,
        categoryId,
        payee,
        note,
        status) => {
        try {
            const response = await axios.post(`${URL}/records`, {
                id,
                name,
                amount,
                userId,
                time,
                date,
                categoryId,
                payee,
                note,
                status
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

    const deleteRecord = async (recordId) => {
        try {
            await axios.delete(`${URL}/records/${recordId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            setAllRecords(prev => prev.filter(record => record.id !== recordId));
        } catch (error) {
            console.error("There was an error deleting the category!", error);
        }
    };

    // Function to handle login and set token
    // const login = async (username, password) => {
    //     try {
    //         const response = await api.post('/login', { username, password });
    //         const { token } = response.data;
    //         localStorage.setItem('token', token); // Store token in localStorage
    //         setToken(token);
    //     } catch (error) {
    //         console.error('Login failed', error);
    //     }
    // };

    useEffect(() => {
        getAllRecords();
    }, [token]);

    return (
        <RecordsContext.Provider value={{ getAllRecords, setAllRecords, createRecord, deleteRecord, loading, login }}>
            {children}
        </RecordsContext.Provider>
    );
};

export const useRecords = () => useContext(RecordsContext)
