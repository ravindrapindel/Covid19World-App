import './App.css';
import AllCovid from './components/Allcovid/AllCovid';
import { ContextProvider } from './components/Context/Context';
import Countries from './components/Countries/Countries';
import Header from './components/Header/Header';
import Input from './components/Header/Input';

import {useState, useEffect} from "react"
import GoogleMap from './GoogleMap/GoogleMap';


function App() {

  // Data state manage the data fetched from API
  const [data, setData]= useState([]);
  // loading state to check if data are feteched from APi
  const [loading, setLoading] = useState(false);
  // google map state to condtional rendering of the google map
  const [googlemap, setGooglemap] = useState(false);
  useEffect(()=>{
    fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "613baafc16msh487fdb600a437f5p1ae449jsnf8acf1720170"
        }
    })
    .then(response => {
        return response.json();
    }).then((json)=>{
          setData(json.response);
        setLoading(true);})
          .catch(err => {
       console.log("Not able to fetch Data");
    });
  },[]) 

  // mapHandler functions to manage state for map to render
  function mapHandler(){
    setGooglemap(true);
  }

  function mapHandle(){
    setGooglemap(false);
  }
  
    return (<div className="App">
     <ContextProvider data={data}> 
    { loading && !googlemap &&
    
      <>
      <Header />
      <Input />
      <AllCovid mapHandler={mapHandler}/>
     <Countries/>
     </>
     }
     {googlemap && <GoogleMap mapHandle={mapHandle} />}
     </ContextProvider>
     </div> 
    )
}

export default App;
