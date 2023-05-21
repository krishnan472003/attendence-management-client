import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './login/login';
import Home from './home/home'
import Signup from './signup/signup';
import Profile from "./studentProfile/profile"
import Attendence from "./attendence/attendence"
import Scan from './geolocation/scanner'
function App() {
  return (
    <div className="App">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Comme:wght@300&display=swap" rel="stylesheet" />
      <Router>
        <Routes>
        <Route exact path='/' element = {<Home/>}/>
        <Route exact path='/signup' element = {<Signup/>}/>
        <Route exact path='/login' element = {<Login/>}/>
        <Route exact path='/profile' element = {<Profile/>}/>
        <Route exact path='/qrcode' element = { <Scan/>}/>
        <Route exact path='/Attendence' element = { <Attendence/>}/>
        </Routes>
      </Router>
      {/* <Scanner/> */}
      {/* <Qrcode/> */}
      {/* <Signup/> */}
      {/* <Login/> */}
    </div>
  );
}

export default App;

