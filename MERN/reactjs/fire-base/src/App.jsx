
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { v4 as uuidv4 } from 'uuid';
import { getDatabase, ref, set, onValue } from "firebase/database";
import Add from "./Add";
import Display from "./Display";
import { useEffect, useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQjNzqt7zAh6Dqrv1MTzMgkbNLGs5LVcg",
  authDomain: "wsjp-02.firebaseapp.com",
  projectId: "wsjp-02",
  storageBucket: "wsjp-02.appspot.com",
  messagingSenderId: "581214095936",
  appId: "1:581214095936:web:dc67bcd080778329afeda5",
  measurementId: "G-HHVV4G61N4"
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);
const database = getDatabase(fireBaseApp);


function App() {
  const [users, setUsers] = useState([]);
  const formSubmit = (data) => {
    const userId = uuidv4();
    set(
      ref(database, 'users/' + userId),
      data
    );
  }

  function getUsers() {
    const starCountRef = ref(database, 'users');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // JSON 
      // object to JSON 

      const userData = Object.keys(data).map(
        (k) => {
          const obj = {
            id: k,
            ...data[k]
          }
          return obj;
        }
      )

      // const keys = Object.keys(data);
      // const userData = [];
      // for (let i = 0; i < keys.length; i++) {
      //   const id = keys[i];
      //   userData.push({ id: id, ...data[id] })
      // }

      // -----------------------------
      setUsers(userData); // data set into state
    });
  }

  console.log(users);

  useEffect(
    () => {
      getUsers();
    },
    []
  )
  return (
    <div className="mx-auto max-w-[1200px] border">
      <Display users={users} />
      <Add handler={formSubmit} />
    </div>
  );
}

export default App;
