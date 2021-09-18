import { useEffect } from "react";
import { useState } from "react";
import LineChart from "./LineChart";
import BarChart from "./BarChart";
import GraphHeader from "./GraphHeader";
import classes from "./CountryGraph.module.css";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";

function CountryGraph(props){
    const [countrydata, setCountryData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        fetch(`https://covid-193.p.rapidapi.com/history?country=${props.countryName}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "covid-193.p.rapidapi.com",
                "x-rapidapi-key": "613baafc16msh487fdb600a437f5p1ae449jsnf8acf1720170"
            }
        })
        .then(response => {
            return response.json();
        }).then((json)=> {
        setCountryData(()=>json)
        setLoading(()=>true);
       ;})
        .catch(err => {
            console.error(err);
        });

    },[props.countryName]);
    let  newCase=[];
    let recoveredCase = [];
    let deathsCase = [];
    let date = [];
    let activeCase=[];
    let totalCase = [];
    let newdeathsCase = [];
    let recoveryRate= [];
    if(loading){
    
    countrydata.response.map((country)=> {
        let activecase=0; let newcase=0; let recoveredcase=0; let deathcase=0 ; let newdeaths=0; let totalcase=0;
        let recoveryrate=0;
          if(country.cases.active!==""){
             activecase=parseInt(country.cases.active);
          }
          if(country.cases.new!==""){
            newcase=parseInt(country.cases.new);
         }
         if(country.cases.recovered!==""){
            recoveredcase=parseInt(country.cases.recovered);
         }
         if(country.deaths.total!==""){
            deathcase=parseInt(country.deaths.total);
         }
         if(country.deaths.new!==""){
            newdeaths=parseInt(country.deaths.new);
         }
        if(country.cases.total!==""){
            totalcase=parseInt(country.cases.total);
        }
           recoveryrate = recoveredcase*100/totalcase;
            totalCase.unshift(totalcase);
            activeCase.unshift(activecase);
            newCase.unshift(newcase);
            recoveredCase.unshift(recoveredcase);
            deathsCase.unshift(deathcase);
            newdeathsCase.unshift(newdeaths);
            date.unshift(country.day);
            recoveryRate.unshift(recoveryrate);
        

        return country.cases.total}
        );
    }
    
   function btnHandler(){
    props.graphBtnHandler();
     window.scrollTo(0, 0)
     
   } 
   
    return(<>
    
    {loading && <>
        
     <GraphHeader countryData= {countrydata.response[0]}/>
     <LineChart Case={totalCase} date={date} label="Total Cases" country={countrydata.response[0].country}/>
     <BarChart Case={newCase} date ={date} label="Daily New Cases" country={countrydata.response[0].country}/>
     <LineChart Case={activeCase} date={date} label="Active Cases" country={countrydata.response[0].country}/> 
     <LineChart Case={deathsCase} date={date} label="Total Deaths" country={countrydata.response[0].country}/>
     <BarChart Case={newdeathsCase} date={date} label="Daily Deaths" country={countrydata.response[0].country}/>
     <LineChart Case={recoveryRate} date={date} label="Recovery rate" country={countrydata.response[0].country}/>
     <div className={classes.Btn}> <button  onClick = {btnHandler}> Back</button> </div>
     <Footer />
     </>
    }
    { !loading && <Loading />}
    
    </>
    

    )
}

export default CountryGraph;