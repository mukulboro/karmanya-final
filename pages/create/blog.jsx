import React from 'react'
import { CreatePost } from "../../components/PostCreation/CreatePost"
import { useState, useEffect } from 'react'
import Unauthorized from '../../components/Unauthorized/Unauthorized'

const CreateNewBlogPost = () => {
   const [userSession, setUserSession] = useState(null)

    useEffect(()=>{
        setUserSession(window.sessionStorage.getItem("userSession"))
    }, [])

    if(userSession){
        return <CreatePost/>
    }else{
        return <Unauthorized/>
    }
}

export default CreateNewBlogPost
