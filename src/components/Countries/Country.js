import { useState } from "react";
import classes from "./Country.module.css";
import CountryGraph from "../Graphs/CountryGraph";


function Country(props){

  const [showCountryData, setShowCountryData] = useState(true);
  const [countryName, setCountryName] = useState("");



  function ClickHandler(e){
   setCountryName(()=>e.target.innerText);
    setShowCountryData(false);
    props.showGraphHandler();
  }

  function graphBtnHandler(){
    setShowCountryData(true);
    props.showGraphHandler();
  }
  
  
  
    return( <>
  { showCountryData && 
            <div className="table-responsive-md">
             <table className="table table-striped">
             {/* Table Header with buttons for sorting datas */}
               <thead>
                 <tr >
                    <th>Country</th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> Confirmed </button></th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> Active </button></th>
                    <th><button onClick={props.btnHandler} className={classes.Btn}> Recovered </button></th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> Critical </button> </th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> Deceased</button></th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}> Cases per million </button></th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}> Deaths per million </button></th>
                    </tr>
                    </thead>
                  <tbody>
{/* Rendering all the countries datas */}
                  {props.data.map((response,index)=>{

        return (

    <tr key={index} >
    <td > <button className={classes["Btn-country"]} onClick={ClickHandler}> {response.country}</button></td>
    <td> <h6>+{response.newCase} </h6> {response.confirmed}</td>
    <td>{response.active}</td>
    <td> {response.recovered}</td>
    <td> {response.critical}</td>
    <td>  {response.deaths}</td>
    <td> {response.casepermillion}</td>
    <td>{response.deathspermillion} </td>
  </tr>
    )
    })}
    </tbody>
</table>

 </div>
  }
 {!showCountryData && <> 
 <CountryGraph countryName={countryName} graphBtnHandler={graphBtnHandler}/>
  </>}
 </>

)
}

export default Country;