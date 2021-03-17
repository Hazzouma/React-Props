import './App.css';
import React, { Fragment } from 'react';
import Profile from './Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import hazem from './Hazem.jpg';

function handleName(fullName){
  alert(`My name is: ${fullName}.`);
}
function App() {

  return (
    <Fragment>
      <Profile /*fullName='Hazem Housseini'*/ bio='Here is my bio!' profession='Software Developer' handleName={handleName}> {/* I removed fullName to check for default props */}
          <img src={hazem} alt='showMe' className='imgCont'/>  {/* This child is required and set as a default prop children */}
      </Profile>
    </Fragment>
  );
}

export default App;
