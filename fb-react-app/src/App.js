import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';




function App() {

  const [user, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "user")
  useEffect(() => {


    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })));

      // console.log(data);
    }

    getUsers()
  }, [])


  return (
    <div className="App">
      <h1>firebase project</h1>
      
    </div>
  );
}

export default App;
