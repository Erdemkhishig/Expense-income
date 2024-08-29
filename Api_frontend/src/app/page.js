"use client"

import { useState, useEffect } from 'react'

// import { Login } from '@/components/Login'
import axios from 'axios';
import { LogIn } from 'lucide-react';
import { useAuth } from '@/components/Authprovider';
import { Register } from '@/components/Register'






export default function Home() {
  const { user } = useAuth();



  return (
    <div >


      <Register />



    </div>
  )
}
