import './App.css';
import ChildrenComponent from './Components/ChildrenComponent';
import Home from './Views/Home ';

function App() {
  const student = 'Yoisell';
  
  const button = () => <button>Click Me!</button>

  return (
    <div className="App">
      {/* {button} */}
      <Home student={student}>
        <ChildrenComponent/>
      </Home>
    </div>
  );
}

export default App;
