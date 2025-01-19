import React, { Component, useEffect, useState } from 'react'
import axios from "axios";

const Hi = () => {
    const [hi, setHi] = useState(null);
    const [err, setErr] = useState(null);

    useEffect() => {
        const fatchhi = async() => {
            try{
                const response = await axios.get("http://localhost:3000/hi")
                setHi(response.hi)
            } catch(err) {
                setErr(err);
            }
        };
        fetchHi();
    }
}, []
