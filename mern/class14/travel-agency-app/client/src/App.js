import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './Views/Home';
import PackageForm from './Components/PackageForm/PackageForm';
import CommentForm from './Components/PackageForm/CommentsForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='home' element={<Home/>} />
        <Route path='crear-paquete' element={<PackageForm />} />
        <Route path='actualizar-paquete/:id' element={<PackageForm />} />
        <Route path='agregar-review/:id' element={<CommentForm />} />
      </Routes>
      
    </div>
  );
}

export default App;
