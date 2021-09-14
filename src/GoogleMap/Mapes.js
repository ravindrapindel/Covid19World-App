import React, { useContext } from 'react';
import GoogleMapReact from 'google-map-react';
import DataContext from '../components/Context/Context';
import classes from "./Mapes.module.css"

function Mapes(props){
  // Data context To get covid datas
    const cntx = useContext(DataContext);
  // data is paased to mark on the map
    const data = cntx.data.map((res,index)=>{
        let arr = [180, 180]
        // mapdata has data of lat and lan of contries 
        // mapdata is paased from GoogleMap component as props
        if(props.mapdata.get(res.country)!== undefined){
          // checking if country is avilebale in map data
         arr = props.mapdata.get(res.country);
        }
        let opacity = 0;
        let width = "0px"
        if(res.cases.active && res.cases["1M_pop"]){
          // setting opacity of circle on map based on active cases
          // setting radius of circle on map based on the covid cases per million population
          opacity= res.cases.active/50000;
          width = res.cases["1M_pop"]/3026;
        }
        return( <div key={index} lat = { arr[0]} lng= {arr[1]} style={{ height: width, width: width, borderRadius: "50%", border: "1px solid blue", backgroundColor: "rgb(280,280,280)", brightness: "0.01", opacity: opacity }}> <div className={classes.myDIV}> . </div> <div className={classes.hide}> <div className={classes.cases}> Country: {res.country}</div><div className={classes.cases}> Active case: {res.cases.active} </div> <div className={classes.cases}> Total case: {res.cases.total} </div> </div> </div> )
    })
  
    return( <>
      <h2 className={classes.Heading}> COVID 19 Total Case World Map  </h2>

      <div className={classes.unit1}> Radius of Circle: 1cm = 1000 Per 1M Case  </div>
      <div className={classes.unit2}> Intensity of Circle : Active Case </div>


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

