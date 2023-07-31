import React, { useEffect, useState } from 'react';

const QuizBox = ({ data, current }) => {
    const [selected, setSelected] = useState(null);
    const [quiz, setQuiz] = useState([])

    useEffect(
        () => {
            setQuiz(data);
        }
    )

    useEffect(
        () => {
            setSelected(null);
        },
        [quiz]
    )

    return (
        <div className='shadow shadow-slate-400 rounded-lg mb-3 max-w-[700px] mx-auto p-3'>
            <div className='text-2xl font-bold pl-1'>{current + 1}) {quiz?.question}</div>
            <div onClick={() => setSelected("A")} className={`cursor-pointer border rounded p-3 mt-3 
                ${selected == "A" ? "bg-blue-500 text-white" : ''} `}
            >
                {quiz?.optionA}
            </div>
            <div onClick={() => setSelected("B")} className={`cursor-pointer border rounded p-3 mt-3 
                ${selected == "B" ? "bg-blue-500 text-white" : ''}`}
            >
                {quiz?.optionB}
            </div>
            <div onClick={() => setSelected("C")} className={`cursor-pointer border rounded p-3 mt-3 
                ${selected == "C" ? "bg-blue-500 text-white" : ''}`}
            >
                {quiz?.optionC}
            </div>
            <div onClick={() => setSelected("D")} className={`cursor-pointer border rounded p-3 mt-3 
                ${selected == "D" ? "bg-blue-500 text-white" : ''}`}
            >
                {data.optionD}
            </div>
        </div>
    );
}

export default QuizBox;
