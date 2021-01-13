import React, { Component } from 'react';
import ZipCodes from "./components/ZipCodes"
import './App.css';
import CityCodes from './components/CityCodes';

class App extends Component{
  render(){
    return ( 
      <div >
     <div>
     <h2 className="header">Zip Code Search</h2>

           <ZipCodes />
      </div>
      <hr/>
<div>

<h3 className="header1">City Search</h3>
<div>
<CityCodes />
</div>

</div>


            </div>  
    );
   
  }
 }
 
 export default App;
