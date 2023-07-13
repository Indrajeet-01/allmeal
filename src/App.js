import './App.css';
import { CartProvider } from './components/ContextReducer';
import Cart from './pages/Cart';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <CartProvider>
    <Router>
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
    </Router>
    </CartProvider>
  );
}

export default App;
