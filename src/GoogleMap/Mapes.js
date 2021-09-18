import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import DataContext from '../components/Context/Context';
import classes from "./Mapes.module.css"
import { useState } from 'react';

function Mapes(props){
  // Data context To get covid datas
    const cntx = useContext(DataContext);
  // data is paased to mark on the map
  const [selectCase, setSelectCase] = useState("totalcase");
  function onChangeHandler(e){
    setSelectCase( e.target.value);
  }
  var data = [];
  if(selectCase==="totalcase"){
    data = cntx.data.map((res,index)=>{
      let arr = [180, 180]
      // mapdata has data of lat and lan of contries 
      // mapdata is paased from GoogleMap component as props
      if(props.mapdata.get(res.country)!== undefined){
        // checking if country is avilebale in map data
       arr = props.mapdata.get(res.country);
      }
      let width = "0px";
        if(res.cases.total ){
          // setting radius of circle on map based on the covid cases per million population
          width= res.cases.total/400000;
        }
      
      return( <div key={index} lat = { arr[0]} lng= {arr[1]} > <div className={classes.myDIV} style={{ height: width, width: width, borderRadius: "50%", border: "1px solid red", backgroundColor: "rgb(280,280,280)", brightness: "0.01", opacity: 0.6 }}> </div>  <div className={classes.hide}> <div className={classes.cases}> Country: {res.country}</div><div className={classes.cases}> Active case: {res.cases.active} </div> <div className={classes.cases}> Total case: {res.cases.total} </div> <div className={classes.cases}> Total Deaths: {res.deaths.total} </div></div> </div> )
  });
  }
  if(selectCase==="activecase"){
    data = cntx.data.map((res,index)=>{
      let arr = [180, 180]
      // mapdata has data of lat and lan of contries 
      // mapdata is paased from GoogleMap component as props
      if(props.mapdata.get(res.country)!== undefined){
        // checking if country is avilebale in map data
       arr = props.mapdata.get(res.country);
      }
      let width = "0px";
        if(res.cases.active ){
          // setting radius of circle on map based on the covid cases per million population
          width= res.cases.active/40000;
        }
      
      return( <div key={index} lat = { arr[0]} lng= {arr[1]} > <div className={classes.myDIV} style={{ height: width, width: width, borderRadius: "50%", border: "1px solid blue", backgroundColor: "rgb(280,280,280)", brightness: "0.01", opacity: 0.6 }}> </div>  <div className={classes.hide}> <div className={classes.cases}> Country: {res.country}</div><div className={classes.cases}> Active case: {res.cases.active} </div> <div className={classes.cases}> Total case: {res.cases.total} </div> <div className={classes.cases}> Total Deaths: {res.deaths.total} </div> </div> </div> )
  });
  }
  if(selectCase==="totaldeaths"){
    data = cntx.data.map((res,index)=>{
      let arr = [180, 180]
      // mapdata has data of lat and lan of contries 
      // mapdata is paased from GoogleMap component as props
      if(props.mapdata.get(res.country)!== undefined){
        // checking if country is avilebale in map data
       arr = props.mapdata.get(res.country);
      }
      let width = "0px";
        if(res.deaths.total ){
          // setting radius of circle on map based on the covid cases per million population
          width= res.deaths.total/5000;
        }
      
      return( <div key={index} lat = { arr[0]} lng= {arr[1]} > <div className={classes.myDIV} style={{ height: width, width: width, borderRadius: "50%", border: "1px solid #00FF00", backgroundColor: "rgb(280,280,280)", brightness: "0.01", opacity: 0.6 }}> </div>  <div className={classes.hide}> <div className={classes.cases}> Country: {res.country}</div><div className={classes.cases}> Active case: {res.cases.active} </div> <div className={classes.cases}> Total case: {res.cases.total} </div> <div className={classes.cases}> Total Deaths: {res.deaths.total} </div></div> </div> )
  });
  }
    
  
    return( <>
      <h2 className={classes.Heading}> COVID 19 Total Case World Map  </h2>

      <div className={classes.unit1}> <select name="cases" onChange={onChangeHandler}>
          <option value ="totalcase" style={{color: "red"}} >Total Cases</option>
          <option value ="activecase" style={{color: "blue"}}>Active Cases</option>
           <option value ="totaldeaths" style={{color: "#00FF00"}} >Total Deaths</option>
           </select> 
      </div>
     


        <div style={{ height: '85vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBXapFTmzomzJQ_nhFxMEVT5jw5kxH7NYc" }}
          defaultCenter={{
         lat: 59.95,
          lng: 30.33
           }}
          defaultZoom={1}         
         >
          {/*  data is defined above for mark on the map*/}
                {data}
                
  
        </GoogleMapReact>
        {/* button to get main page */}
        <div className={classes.Btn}> <button  onClick = {props.mapHandle}> Back</button> </div>
        
      </div>
      </>
    )
}   

export default Mapes;

