import React from "react";
import { useState, useEffect } from "react";


export default function ApiComponent () {

    const [apiResponse, setApiResponse] = useState({text: "Loading..."})

    useEffect(() => {
        async function callApi () {
            try {
                const response = await fetch("api/")
                const jsonData = await response.json()
                setApiResponse(jsonData)
            } catch (e) {
                console.error("ERROR: ", e)
            }
        }
        callApi()
    }, [])

    return (
        <div style={{color: "white"}}>
            <h1>{apiResponse.text}</h1>
        </div>
    )

}