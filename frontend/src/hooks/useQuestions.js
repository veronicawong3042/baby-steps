import {useEffect, useState} from 'react';

const production = process.env.NODE_ENV === 'production';

const endpoint = production ? 'https://commit111-backend--3000.prod1.defang.dev' : 'http://localhost:3000'

export const useQuestions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch(`${endpoint}/questions`, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data.rows[0]);
            setQuestions(data.rows);
        })
        .catch(err => console.log(err))
    }, [])
    return questions;
}