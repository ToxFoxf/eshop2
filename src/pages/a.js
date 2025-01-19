import React, { Component, useEffect, useState } from 'react'
import axios from "axios";

const Hi = () => {
    const [hi, setHi] = useState(null);
    const [err, setErr] = useState(null);

    useEffect(() => {
        const fetchHi = async() => {
            try{
                const response = await axios.get("http://127.0.0.1:8000/products/hi/")
                setHi(response.data.message)
            } catch(err) {
                setErr(err);
            }
        };
        fetchHi();
    }, []);
    return (
        <div>
           {hi ? <p>{hi}</p> : <p>Loading...</p>}
        </div>
    )
}
export default Hi;