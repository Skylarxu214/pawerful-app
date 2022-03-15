import React, { useState, useEffect } from 'react';
import BuggyCounter from './BuggyCounter';
import MyErrorBoundary from './MyErrorBoundary';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Home from './components/Home'
import Header from './components/Header'
import UserPage from './components/UserPage'
import OwnersBoard from './components/OwnersBoard';
import ShelterCard from './components/ShelterCard';
import AnimalBoard from './components/AnimalBoard';
import Visits from './components/Visits';
import TestOwnerCard from './components/TestOwnerCard';
import './style.css'




function App() {
  const [pet, setPet] = useState(null);
  const[checked,setChecked] = useState(false)
  const [owners, setOwners] = useState([])
  const [animals, setAnimals] = useState([])
  const [shelters, setShelters] = useState([])
  

  useEffect(() => {

     fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((pet) => setPet(pet));
        setChecked(true)
      
      }
    });
      fetch("/owners") 
      .then(res => res.json())
      .then(owners => setOwners(owners));

      fetch("/pets") 
      .then(res => res.json())
      .then(pets => setAnimals(pets))
      

      fetch("/shelters") 
      .then(res => res.json())
      .then(r => setShelters(r));

     
      
  }, []);
  
  return (
    

    <Router>
      {!!shelters.length?
      <Header checked={checked} setChecked={setChecked} setPet={setPet} pet={pet}/>:
       <>Loading.....</>
      } 
     <Routes>
      <Route exact path='/' element={<Login pet={pet} setPet={setPet} setChecked={setChecked} />}   />
      </Routes>
      {!!shelters.length?(
        <Routes>
        <Route path='/home' element={<Home  pet={pet} />}   />
        <Route path='/me' element={<UserPage pet={pet} animals={animals}  owners={owners}/> } />
        <Route path='/board' element={<OwnersBoard owners={owners} animals={animals} pet={pet}/> } /> 
        <Route path='/shelter' element={<ShelterCard  pet={pet} shelters={shelters} animals={animals} owners={owners}/>}/>    
        <Route path='/animals' element={<AnimalBoard pet={pet} animals={animals} />}/> 
        <Route path='/visits' element={<Visits pet={pet} animals={animals} owners={owners}/>}/> 
        <Route path='/test' element={<TestOwnerCard pet={pet} animals={animals} owners={owners}/>}/> 

     </Routes>) :<>loading</>  
     }
   </Router>

  );
}

// else{
//   return(
//     <>
//     <h1>Loading</h1>
//     </>
//   )
// }}
export default App;

