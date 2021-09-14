import { useContext } from "react";
import DataContext from "../Context/Context";
import Country from "./Country";



function Countries(){
    const cntx = useContext(DataContext);
    var array =  []
    // console.log(cntx.data);    
    function GetSortOrder (prop) {    
       return function(a, b) {    
           if (a[prop] < b[prop]) {    
               return 1;    
           } else if (a[prop] > b[prop]) {    
               return -1;    
           }    
           return 0;    
       }    
    }    
    
    const temp = cntx.data.map((res)=>{
        var newCase=0;
        var casepermillion=0;
        var deathspermillion=0;
        var active=0;
        var recovered=0;
        var deaths=0;
        var critical=0
        if(res.cases.new !==null){
            newCase = parseInt(res.cases.new )
        }
    
        if(res.cases["1M_pop"]!==null){
             casepermillion=parseInt(res.cases["1M_pop"]);
        }
        if(res.deaths["1M_pop"]!==null){
            deathspermillion=parseInt(res.deaths["1M_pop"])
        }
        if(res.cases.active!==null){
            active = parseInt(res.cases.active)
        }
        if(res.cases.recovered!==null){
           recovered = parseInt(res.cases.recovered)
        }
        if(res.deaths.total!==null){
            deaths = parseInt(res.deaths.total)
        }
        if(res.cases.critical!==null){
            critical=parseInt(res.cases.critical);
        }
    return(
        { 
            "newCase": newCase,
            "casepermillion" : casepermillion,
            "deathspermillion" : deathspermillion,
            "country" : res.country,
            "continent": res.continent,
            "confirmed" : parseInt(res.cases.total),
            "active" :active,
            "recovered":recovered,
            "deaths" : deaths,
            "critical" : critical
        }
    )
    
    });
    var arr=[];
    if(localStorage.getItem("country") !== "undefined" && localStorage.getItem("country")!==null){
    // console.log("yeeee");
    arr=temp.filter((e)=> e.country === localStorage.getItem("country"));
    }   
    else if(cntx.isCountrySelected){
     
    arr = temp.filter((e)=>  e.country === cntx.country )
    }
    else{
    
    arr = temp.filter((e)=>  e.country !== e.continent )
    
    }
    
    arr.sort(GetSortOrder(cntx.sortSelected));
    array=arr;
    function btnHandler(e){
        
    if(e.target.innerText==="Cases per million"){
        cntx.sortSelectedHandler("casepermillion")
    }
    else if(e.target.innerText==="Deaths per million"){
        cntx.sortSelectedHandler("deathspermillion")
    
    }
    else {
        cntx.sortSelectedHandler("newCase")
    
    }
    
    }
   
    return (

        <Country btnHandler={btnHandler} data={array}/>
    )
    
}

export default Countries;



