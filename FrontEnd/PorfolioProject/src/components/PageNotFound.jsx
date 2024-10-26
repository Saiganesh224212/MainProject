import { Typography } from '@mui/material'
import React from 'react'
import "../resources/css/shared.css"
import axios from "axios"
import { useState, useEffect } from 'react'
export default function PageNotFound() {
const [UserData, setUserData] = useState(null)

    useEffect(() => {
        console.log('Calling userData Api')
        axios
            .get('/users/getUserData')
            .then((res) => {
                console.log(res)
                setUserData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    if (UserData) {
        return (
            <div className="FullPageError">
                <h1>"{UserData.Name}" </h1>
                <h1>"{UserData.Address}" </h1>
                <h1>"{UserData.DOB}" </h1>
            </div>
        )
    } else {
        return <div className="loading">Loading...........</div>
    }
}


