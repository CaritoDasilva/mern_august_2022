import React, { useState } from 'react';
import './App.css';
import UserInfo from './Components/UserInfo/UserInfo';
import Home from './Views/Home/Home';

function App() {
  const [user, setUser] = useState({
        fullName: '',
        email: '',
        age: 0,
        address: '',
        password: '',
        confirmPassword: ''
  })

  const [users, setUsers] = useState([]);   


  return (
    <div className="App">
      <Home user={user} setUser={setUser} users={users} setUsers={setUsers} />
      {
        users?.map((user, index) => (
          <UserInfo key={index} user={user}/>
        ))
      }
    </div>
  );
}

export default App;
