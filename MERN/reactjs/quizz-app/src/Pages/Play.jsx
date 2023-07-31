import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import QuizBox from '../Components/QuizBox';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAQjNzqt7zAh6Dqrv1MTzMgkbNLGs5LVcg",
    authDomain: "wsjp-02.firebaseapp.com",
    databaseURL: "https://wsjp-02-default-rtdb.firebaseio.com",
    projectId: "wsjp-02",
    storageBucket: "wsjp-02.appspot.com",
    messagingSenderId: "581214095936",
    appId: "1:581214095936:web:dc67bcd080778329afeda5",
    measurementId: "G-HHVV4G61N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const Play = () => {

    const [quizzes, setQuiz] = useState([]);
    const [current, setCurrent] = useState(0);
    useEffect(
        () => {
            const starCountRef = ref(db, 'quizz');
            onValue(starCountRef, (snapshot) => {
                const data = snapshot.val();
                const json = Object.keys(data).map(
                    (k) => {
                        return {
                            id: k,
                            ...data[k]
                        }
                    }
                )
                setQuiz(json);
            });
        },
        []
    )

    const prev = () => {
        setCurrent(current - 1);
    }
    const next = () => {
        setCurrent(current + 1);
    }

    return (
        <>
            <Header />
            <div className='max-w-[1300px] mx-auto p-3'>
                {
                    quizzes.length !== 0
                        ?
                        <QuizBox data={quizzes[current]} current={current} />
                        :
                        <h1 className='text-center text-4xl my-4'>Loading...</h1>
                }

                <div className='text-center'>
                    <button hidden={current == 0 ? true : false} onClick={prev} class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Prev
                    </button>
                    <button hidden={current == quizzes.length - 1 ? true : false} onClick={next} class="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Next
                    </button>
                </div>
            </div >
        </>
    );
}

export default Play;
