import React, { useState } from 'react';
import Login from '../Components/Login';
import Siginup from '../Components/Siginup';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth();

const User = () => {
  const [toggle, setToggle] = useState(false);
  const [msg, setMessage] = useState("");
  const [error, setError] = useState(true);
  // true -> Login
  // false -> Signup

  const createAccount = (data) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setMessage('Account created successfully');
        setError(false);
        setToggle(true);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        setError(true);
        // ..
      });
  }

  function login(data) {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        localStorage.setItem("user", JSON.stringify(user));
        setMessage('Login successfull');
        setError(false);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessage(errorMessage);
        setError(true);
      });

  }


  return (
    <div className='max-w-[1300px] mx-auto p-3 rounded'>
      <div className={`mt-5 text-center ${error == true ? 'text-red-600' : 'text-[green]'}`}>
        {msg}
      </div>
      {
        toggle == true
          ?
          <Login toggleHandler={setToggle} loginHandler={login} />
          :
          <Siginup toggleHandler={setToggle} singupHandler={createAccount} />
      }
    </div>
  );
}

export default User;
