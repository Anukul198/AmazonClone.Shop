import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import './App.css';
import Checkout from './components/Checkout';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /> <Home /></>} />
          <Route path="checkout" element={ <><Header /> <Checkout /></> } />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />

        </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
