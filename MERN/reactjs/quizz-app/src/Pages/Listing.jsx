import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useNavigate } from 'react-router-dom';
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

const Listing = () => {
    const [user, setUser] = useState(null);
    const [quizzes, setQuiz] = useState([]);
    const navigator = useNavigate();



    useEffect(
        () => {
            const lsUser = localStorage.getItem("user");
            if (lsUser !== null) {
                setUser(lsUser);
            } else {
                navigator('/login');
            }
        },
        []
    )

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


    return (
        <>
            <Header />
            <div className='max-w-[1300px] mx-auto shadow p-3 rounded'>

                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Question
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Option A
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Option B
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Option C
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Option D
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                quizzes.map(
                                    (quizz, index) => {
                                        return (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-6 py-4">
                                                    {quizz.question}
                                                </td>
                                                <td className="px-6 py-4"
                                                    style={
                                                        {
                                                            color: quizz.correct == "A" ? 'green' : '',
                                                            fontWeight: quizz.correct == "A" ? 'bold' : ''
                                                        }
                                                    }
                                                >
                                                    {quizz.optionA}
                                                </td>
                                                <td className="px-6 py-4" style={
                                                    {
                                                        color: quizz.correct == "B" ? 'green' : '',
                                                        fontWeight: quizz.correct == "B" ? 'bold' : ''
                                                    }
                                                }>
                                                    {quizz.optionB}
                                                </td>
                                                <td className="px-6 py-4" style={
                                                    {
                                                        color: quizz.correct == "C" ? 'green' : '',
                                                        fontWeight: quizz.correct == "C" ? 'bold' : ''
                                                    }
                                                }>
                                                    {quizz.optionC}
                                                </td>
                                                <td className="px-6 py-4" style={
                                                    {
                                                        color: quizz.correct == "D" ? 'green' : '',
                                                        fontWeight: quizz.correct == "D" ? 'bold' : ''
                                                    }
                                                }>
                                                    {quizz.optionD}
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }


                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
}

export default Listing;
