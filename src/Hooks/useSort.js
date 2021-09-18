import {useContext} from "react";
import DataContext from "../components/Context/Context";


function useSort(props){
 // To get data from context api
 const cntx = useContext(DataContext);

 // Sorting function which will sort the array in decreasing order based on prop on which we want to sort
 function GetSortDecrease (prop) {    
    return function(a, b) {    
        if (a[prop] < b[prop]) {    
            return 1;    
        } else if (a[prop] > b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
 }    
 function GetSortIncrease (prop) {    
    return function(a, b) {    
        if (a[prop] > b[prop]) {    
            return 1;    
        } else if (a[prop] < b[prop]) {    
            return -1;    
        }    
        return 0;    
    }    
 } 

 
 // Creating temp array which taken all the need datas from the context API and return an array of objects containing important properties like country name, cases, etc
 const temp = cntx.data.map((res)=>{
     var newCase=0;
     var casepermillion=0;
     var deathspermillion=0;
     var active=0;
     var recovered=0;
     var deaths=0;
     var critical=0
     // To check if data is present
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

 if(props){
    temp.sort(GetSortIncrease(cntx.sortSelected));
 }
else{
    temp.sort(GetSortDecrease(cntx.sortSelected));
}


 return(
     temp
 )


}

export default useSort;