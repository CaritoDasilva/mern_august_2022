import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import UsersList from './Pages/UsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/users' element={<UsersList/>} />
        <Route path='/nosotros' element={<UsersList/>} />
      </Routes>
    </div>
  );
}

export default App;
