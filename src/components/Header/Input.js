import { useContext, useRef } from "react";
import { useState } from "react";
import DataContext from "../Context/Context";
import classes from "./Input.module.css";


function Input(){

  // Refernce to input element
   const inputRef = useRef();
   const Cntx = useContext(DataContext)
// To get name of the countries to show to user to select in the input 
   const RandomData= Cntx.data.map((e)=> e.country);
   // state to manage the suggestion to user
   const [isshow, setIsshow]= useState(false);
   // To manage name of the selected country
   const [value, setValue] = useState("");
   // arr state which manage the countries which matching to user input
   const [arr, setArr] = useState([]);


   // To filter the name of countries to suggest when user press key in the input
   function filterFunction(){
    setValue(inputRef.current.value);
    Cntx.isCountrySelectedHandler(()=>false);
    localStorage.setItem("country", undefined);
     var input = inputRef.current.value.toUpperCase();
     if(input.length >=2){   
       // Filter the matching country after 2 or more input 
    var array = RandomData.filter((e)=> e.toUpperCase().indexOf(input)>-1);
    array.length=7;
     setArr(array);
     setIsshow(true)
   }
   else{
       
       setArr([]);
   }
   }

   // To take the input when user select the country
   function btnHandler(e){
       setValue(e.target.innerText);
      localStorage.setItem("country", e.target.innerText);
      Cntx.countryHandler(e.target.innerText);
      Cntx.isCountrySelectedHandler(true);
      // Isshow false to not show any suggestion after user selcted 
      setIsshow(false);
   }

   function changeHandler(e){
    localStorage.clear()
    setValue(e.target.value);
   }

    return(
        <>
        <div className={classes.Input}>
        <input type="text" placeholder="Search.." ref={inputRef} onKeyUp={filterFunction} onChange={changeHandler} value={value} />
        { isshow ? <div className={classes["dropdown-content"]}>{arr.map((event,index)=>
        (
           <button onClick={btnHandler} key={index} > {event}  </button>)
        )} </div> : null }
        </div>
        
        </>
    )
}

export default Input;

