import React, { Component } from "react";
import axios from "axios";

class CityCodes extends Component {
    constructor(props){
        super(props);
        this.state={
            city: '',
            allData: [],
            display: true
        };
     }
 
     cityChange = (event) => {
         this.setState({
             city: event.target.value
         });
     }

     onSubmit = (event) => {
             event.preventDefault();
             axios.get("http://ctp-zip-api.herokuapp.com/city/" + this.state.city.toUpperCase())
                 .then((response) => {
                 this.setState({allData: response.data});
                   })
                 .catch((err) => this.setState({display: false}));
                 this.setState({display: true});
     }
 
 render(){
     let x = this.state.display === true ? (
        <div>
            <form className="look" onSubmit = {this.onSubmit}>
                
                <input placeholder ="Enter City" value={this.state.city} onChange = {this.cityChange} />
                
                <input type="submit" value="submit"/>
            </form>
            <div>
            {this.state.allData.map(data => {
                 return (
                  
                         <div className="list">
                             <h4 className="location">ZipCode: {data}</h4>
                        </div>
                       
                  
                 )
             })}
             </div>
        </div>
     ) : (
         <div className="sub">
             <form onSubmit = {this.onSubmit}>
                
                <input type="text" placeholder ="Enter City" value={this.state.city} onChange = {this.cityChange} />
                
                <input type="submit" value="submit"/>
            </form>
            <div >
            <h4>Results Not Found</h4>
            </div>
         </div>
     )
     return (<div>{x}</div>)
     
   }
}



export default CityCodes;