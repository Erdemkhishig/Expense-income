"use client"

import { useState, useEffect } from 'react'

import axios from 'axios';

import Image from "next/image";
import { Navbar } from "@/components/Navbar";
import { Aside } from "@/components/Aside";
import { Main } from "@/components/Main";



export default function Records() {

    const [accounts, setAccounts] = useState([]);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [categories, setCategories] = useState([]);
    const [time, setTime] = useState("");
    const [payee, setPayee] = useState("");
    const URL = "http://localhost:3001"

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${URL}/accounts`);
                setAccounts(response.data);
            } catch (error) {
                console.error("There was an error fetching the accounts!", error);
            }
        };
        getData();
    }, []);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await axios.get(`${URL}/categories`);
                setCategories(response.data);
            } catch (error) {
                console.error("There was an error fetching the accounts!", error);
            }
        };
        getData();
    }, []);


    const createCategory = async () => {
        const newCategory = {

            id,
            color,


        };
        try {
            const response = await axios.post(`${URL}/categories`,
                newCategory
            );
            setCategories([...categories, response.data]);
        } catch (error) {
            console.error(error)
        }
    };

    // const getCategoryById = async () => {
    //     const newCategory = {

    //         id,
    //     };
    //     try {
    //         const response = await axios.post(`${URL}/categories`,
    //             newCategory
    //         );
    //         setCategories([...categories, response.data]);
    //     } catch (error) {
    //         console.error(error)
    //     }
    // };


    const createAccount = async () => {
        const newAccount = {

            title,
            amount,
            category,
            payee,
            time,
        };
        try {
            const response = await axios.post(`${URL}/accounts`,
                newAccount
            );
            setAccounts([...accounts, response.data]);
        } catch (error) {
            console.error(error)
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`${URL}/accounts/${id}`);
            setAccounts(accounts.filter((account) => account.id !== id));
        } catch (error) {
            console.error("There was an error deleting the account!", error);
        }
    };




    return (
        <main>
            <div className="px-4 max-w-screen-2xl m-auto ">
                <Navbar />
                <div className="bg-gray-100 h-full flex py-8 gap-4 px-16">
                    <Aside createAccount={createAccount} setAccounts={setAccounts} accounts={accounts} setCategories={setCategories} categories={categories} />
                    <div className="ml-8 w-full"><Main setAccounts={setAccounts} accounts={accounts} setCategories={setCategories} categories={categories} />

                        <div>
                            {/* {/* <p>Account</p>

                            {accounts.map((account) => (


                                <button key={account.id}
                                    onClick={() => handleDelete(account.id)}
                                    className="ml-4 px-2 py-1 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>

                            ))} */}

                            {/* {accounts.map((account, index, id) => (
                                <li key={account.title + index}>
                                    {account.title} - {account.amount}
                                </li>
                            ))} */}

                            {/* <div className='flex gap-4 p-6'>
                                <input className='border'
                                    value={title}
                                    placeholder='title'
                                    onChange={(event) => {
                                        setTitle(event.target.value);
                                    }} />

                                <input className='border'
                                    value={amount}
                                    placeholder='amount'
                                    onChange={(event) => {
                                        setAmount(event.target.value);
                                    }} />

                                <input className='border'
                                    value={category}
                                    placeholder='category'
                                    onChange={(event) => {
                                        setCategory(event.target.value);
                                    }} />
                                <input className='border'
                                    value={time}
                                    placeholder='time'
                                    onChange={(event) => {
                                        setTime(event.target.value);
                                    }} />

                            </div>
                            <div className='flex flex-col gap-4'>
                                <button className="border-2" onClick={createAccount}>create</button>

                            </div> */}


                        </div>

                    </div>
                </div>
            </div>









        </main >
    );
}
