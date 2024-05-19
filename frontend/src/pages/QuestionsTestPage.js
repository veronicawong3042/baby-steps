import {useEffect, useState} from 'react';

function QuestionsTestPage() {

    const [rows, setRows] = useState([]);
    const [ques, setQues] = useState({
        0: false,
        1: false,
        2: false
    })

    useEffect(() => {
        fetch("http://localhost:3000/questions", {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => {
            // console.log(data.rows[0]);
            setRows(data.rows);
        })
        .catch(err => console.log(err))
    })

    return(
        <div>
            {rows.map((item) => {
                return <p>
                    {item.id}:{item.question}:{item.answer}
                </p>
            })}
        </div>
    )
}

export default QuestionsTestPage;