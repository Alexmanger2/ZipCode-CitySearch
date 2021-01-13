import React, { Component } from "react";
import axios from "axios";

class ZipCode extends Component {
    constructor(props){
       super(props);
       this.state = {
           zip: '', 
           allData: [],
           display: true
       };
    }
    ZipChange = (event) => {  
        this.setState({     // this.setState -> leads to re-render
            zip: event.target.value  //re-render zip value  <-- use event.target.value
        });
    }
    onSubmit = (event) => {
            event.preventDefault();  // prevents reload/refresh of browser

            axios.get("http://ctp-zip-api.herokuapp.com/zip/" + this.state.zip)
                .then((response) => {
                this.setState({allData: response.data}); // response.data give back only data into array
                  })
                .catch((err) => this.setState({display: false}));
                this.setState({display: true});
              
    }
render(){
    let displayValue = this.state.display === true ?  //if true
    (
        <div>
            
            <form className="look" onSubmit = {this.onSubmit}>
               
                <input type="text" placeholder ="Enter Zip Code" value={this.state.zip} onChange = {this.ZipChange} /> {/*When user enters value onChange called*/}
                <input type="submit" value="submit"/>

            </form>


                {this.state.allData.map(data => {
                    return (
                        <div className="list">
                         
                          <div>
                            <h4 className="location">{data.LocationText}</h4>
                             <ul>
                                 <li>State: {data.State}</li>
                                 <li>Location: ({data.Lat}, {data.Long})</li>
                                 <li>Total Wages: {data.TotalWages}</li>
                                 <li>Estimated Population: {data.EstimatedPopulation}</li>
                             </ul>

                         </div>
                        </div>
                    )
                })}
        </div>)
        :( //if false
        <div className="sub">

            <form  onSubmit = {this.onSubmit}>
                
                <input type="text"  value={this.state.zip} onChange = {this.ZipChange} />
                
                <input type="submit" value="submit"/>
            </form>
           <h4 >Results Not Found</h4>
        </div>)
    return(
    <div>{displayValue}</div>)
  }
}
export default ZipCode;