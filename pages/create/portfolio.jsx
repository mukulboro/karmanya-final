import React from 'react'
import { useState, useEffect } from 'react'
import Unauthorized from '../../components/Unauthorized/Unauthorized'
import { CreateWork } from "../../components/PostCreation/CreateWork"


const CreateNewWorkPost = () => {
    const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <CreateWork/>
    }else{
        return <Unauthorized/>
    }
}

export default CreateNewWorkPost
