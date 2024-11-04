import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Home.jsx';
import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';
import SignupBox from './SignupBox.jsx';
import LoginBox from './LoginBox.jsx';

function App() {

  return (
    <div className="App">
    <>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/register' element={<SignupBox />} />
          <Route path='/login' element={<LoginBox />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
    </div>
  )
}

export default App
