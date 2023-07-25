import React from 'react';
import Header from '../Components/Header';
import { v1 as uniqueId } from "uuid";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
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
const Add = () => {

    const submitHandler = (event) => {
        event.preventDefault();
        const quizzId = uniqueId();
        const data = {
            question: event.target.question.value,
            optionA: event.target.optionA.value,
            optionB: event.target.optionB.value,
            optionC: event.target.optionC.value,
            optionD: event.target.optionD.value,
            correct: event.target.correct.value,
        }
        set(ref(db, 'quizz/' + quizzId), data);

        event.target.reset();
    }

    return (
        <>
            <Header />
            <div className='max-w-[1300px] mx-auto shadow p-3 rounded'>
                <div className='text-center font-bold text-2xl'>
                    Add page
                </div>
                <form onSubmit={submitHandler}>
                    <div className='my-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Question</label>
                        <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Question here..." required name='question'></textarea>
                    </div>

                    <div className='my-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Option A
                        </label>
                        <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required name='optionA' />
                    </div>
                    <div className='my-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Option B
                        </label>
                        <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required name='optionB' />
                    </div>
                    <div className='my-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Option C
                        </label>
                        <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required name='optionC' />
                    </div>
                    <div className='my-2'>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Option D
                        </label>
                        <input type="text" id="default-search" className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required name='optionD' />
                    </div>

                    <div className='my-2'>
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select correct answer</label>
                        <select name='correct' id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option value="">Select any</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save</button>
                </form>
            </div>
        </>
    );
}

export default Add;
