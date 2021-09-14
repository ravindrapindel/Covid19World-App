import React from "react";
import { useState} from "react";
// created react context
const  DataContext = React.createContext({
    // data has covid datas all the countries that we got through props from App 
        data:[],
    // To check if country is selected in the input component previously
        isCountrySelected: false,
    // To set the value of isCountrySelected 
        isCountrySelectedHandler: ()=>{},
        // Hold the name of selected country
        country:"",
        // set the value of selected country
        countryHandler : ()=>{},
        // Hold the value case on which we want to sort the covid datas
        sortSelected : "",
        // set the value of sortSelected
        sortSelectedHandler: ()=>{}
    });


export function ContextProvider(props){
    //States for name of selected country, if country is selcted, sorting the data bases on the different value of input
    const [country, setCountry] = useState("");
    const [isCountrySelected, setIsCountrySelected] = useState(false);
    const [sortSelected, setSortSelected] = useState("newCase");
    
   // set the value of selected country
    
   function countryHandler(e){
       setCountry(e);
   }

   // To set the state if country is selected or not
   function isCountrySelectedHandler(e){
       setIsCountrySelected(e);
   }
// set the value of sortSelected
   function sortSelectedHandler(e){
      setSortSelected(e)
   }
    return(
        <DataContext.Provider value={{"data" : props.data,
        "isCountrySelected" : isCountrySelected,
        "isCountrySelectedHandler" : isCountrySelectedHandler,
          "country":country,
          "countryHandler" : countryHandler,
          "sortSelected" : sortSelected,
          "sortSelectedHandler": sortSelectedHandler

        }}>
            {props.children}
        </DataContext.Provider>

    )
    
}
export default DataContext;