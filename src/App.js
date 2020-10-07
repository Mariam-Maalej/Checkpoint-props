import React from 'react';
import './App.css';
import Nav from './Profile/Navbar';
import Profile from './Profile/Profile';
import Userpicture from './userpic.png';
import Footer from './Profile/Footer';


  const  fullName="Mariam Maalej";
  const  bio="26 Years old"; 
  const profession="Electromechanical Engineer";

const handleName=(fullName)=>{
  alert(fullName)
}
function App() {
  return (
    <div className="App">
    <Nav/>
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
    {Userpicture}
    </Profile>
    <Footer/>
    </div>
  );
}


export default App;
