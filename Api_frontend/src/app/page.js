"use client"

import { useState, useEffect } from 'react'

// import { Login } from '@/components/Login'
import axios from 'axios';
import { LogIn } from 'lucide-react';
import { useAuth } from '@/components/Authprovider';






export default function Home() {
  const { user } = useAuth();



  return (
    <div >


      Hello {user?.username}



    </div>
  )
}
