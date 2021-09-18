import { useState } from "react";
import classes from "./Country.module.css";
import CountryGraph from "../Graphs/CountryGraph";
import Footer from "../Footer/Footer";


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
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i>Confirmed </button></th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i>Active </button></th>
                    <th><button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i> Recovered </button></th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i> Critical </button> </th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i> Deceased</button></th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}> <i className="fas fa-sort"></i>Cases per million </button></th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}><i className="fas fa-sort"></i> Deaths per million </button></th>
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
<Footer />
 </div>
  }
 {!showCountryData && <> 
 <CountryGraph countryName={countryName} graphBtnHandler={graphBtnHandler}/>
  </>}
 </>

)
}

export default Country;