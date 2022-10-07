import logo from './logo.svg';
import './App.css';
import Home from './Views/Home/Home';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Main from './Components/Main/Main';
import SubContent from './Components/SubContent/SubContent';
import Advertisement from './Components/Advertisement/Advertisement';

function App() {
  const products = ['polera', 'zapatillas', 'jeans', 'accesorios']
  return (
    <div className="App">
      <Home>
        <Header/>
        <Navigation/>
        <Main>
          {/* <SubContent product={products[0]}/>
          <SubContent product={products[1]}/>
          <SubContent product={products[2]}/> */}
          {products.map((product, index) => (
            <SubContent key={index} product={product}/>
          ))}
          <Advertisement/>
        </Main>
      </Home>
    </div>
  );
}

export default App;
