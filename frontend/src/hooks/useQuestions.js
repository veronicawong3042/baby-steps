import {useEffect, useState} from 'react';

export const useQuestions = () => {
    const [questions, setQuestions] = useState([]);
    useEffect(() => {
        fetch("http://localhost:3000/questions", {
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