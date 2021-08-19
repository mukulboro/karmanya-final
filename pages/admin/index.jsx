import React from 'react'
import AdminDash from "../../components/AdminDash&FancyButton/AdminDash"
import Unauthorized from '../../components/Unauthorized/Unauthorized';
import { useRouter } from 'next/dist/client/router';
import { useState, useEffect } from 'react';

const AdminPanel = () => {
    const router = useRouter();
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <AdminDash/>
    }else{
        return <Unauthorized/>
    }
}

export default AdminPanel
