import './App.css'
import Header from './components/navigation/Header';
import Authentication from "./routes/auth/Authentication";
import { useEffect, useState } from 'react';
import Dashboard from './routes/dashboard/Dashboard';

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [userUsername, setuserUsername] = useState("");


  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken")
    if(accessToken) {
      console.log("Access Token:", accessToken);
    }
    else {
      console.log("Access Token not found");
      return;
    }

    fetch('/api/auth/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-type': 'application/json'
      }
    })
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      console.log('Data received:', data);
      setisLoggedIn(true);
      setuserUsername(data.username);
    })
    .catch(error => {
      console.error('Error fetching data:', error)
    });
  }, []);
  
  return (
    <>
      <div className='App'>
          <Dashboard userUsername={userUsername} setIsLoggedIn={setisLoggedIn} />
        </div>
        </>
      );
    }
    
    export default App
