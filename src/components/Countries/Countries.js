import { useContext, useState } from "react";
import useSort from "../../Hooks/useSort";
import DataContext from "../Context/Context";
import Country from "./Country";



function Countries(props){

    const cntx = useContext(DataContext);
    // sort state to toggle the increase state and decrease state
    const [sort, setSort] = useState(false);
    const [previousClick, setPreviousClick] = useState("newCase");
    
 // useSort is a custom hook which return a sorted array in the increasing or decreasing order based on the given input  
    const sortedArray = useSort(sort);
    let arr=[];
   
    // check if county is selected previosly and present in the local host 
    if(localStorage.getItem("country") !== "undefined" && localStorage.getItem("country")!==null){
        // getting data of previously selected country 
    arr=sortedArray.filter((e)=> e.country === localStorage.getItem("country"));
    }   
    else if(cntx.isCountrySelected){
     //  data of selected country
    arr = sortedArray.filter((e)=>  e.country === cntx.country )
    }
    else{
    arr = sortedArray.filter((e)=>  e.country !== e.continent )
    }
    // sorting the covid data based on the use input 
    


    // To provide use input data of context API, passed as props to country component
    
    function btnHandler(e){ 
    

    if(e.target.innerText==="Cases per million"){
        if(previousClick==="Cases per million"){
            setSort((state)=>!state); 
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("casepermillion");
        setPreviousClick("Cases per million");
    }
    else if(e.target.innerText==="Deaths per million"){
        if(previousClick==="Deaths per million"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("deathspermillion")
        setPreviousClick("Deaths per million");
    }
    else if(e.target.innerText==="Active"){
        if(previousClick==="Active"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("active")
        setPreviousClick("Active");
    }
    else if(e.target.innerText==="Recovered"){
        if(previousClick==="Recovered"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("recovered")
        setPreviousClick("Recovered");
    }
    else if(e.target.innerText==="Critical"){
        if(previousClick==="Critical"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("critical")
        setPreviousClick("Critical");
    }
    else if(e.target.innerText==="Deceased"){
        if(previousClick==="Deceased"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
        }
        cntx.sortSelectedHandler("deaths")
        setPreviousClick("Deceased");
    }
    else {
        if(previousClick==="newCase"){
            setSort((state)=>!state);
        }
        else{
        setSort(false);
       }
        setPreviousClick("newCase");
        cntx.sortSelectedHandler("newCase")
    }
    }
   
    return (
       
       
        <Country btnHandler={btnHandler} data={arr} showGraphHandler={props.showGraphHandler} />
        
    )
    
}

export default Countries;



