import { useContext } from "react";
import DataContext from "../Context/Context";
import classes from "./AllCovid.module.css"
function AllCovid(props){
    // Using context api to get datas
    const Cntx = useContext(DataContext);
    let countryName = false;
   
//   filter covid data of world 


  let datas=[]; 
 if(props.countryData!==undefined){
     countryName=true;
    datas= [props.countryData];
 }
 else{
    datas = Cntx.data.filter((e)=> e.country=== "All");   
 }
    
    return(
           <>
        <h1 className={classes.Heading}> {countryName? datas[0].country : "World" }</h1>
        <div className={classes.AllCovid}>
            <div className={classes.Confirmed}>
            <div>
                Confirmed
            </div>
            <div>
            {datas[0].cases.new}
            </div>
            <div>
            {datas[0].cases.total}
            </div>
            </div>
            <div className={classes.Active}>
            <div >
                Active
            </div>
            <div>
            {datas[0].cases.active}
            </div>
            </div>
            <div className={classes.Recovered}>
            <div>
                Recovered
            </div>
            <div>
            {datas[0].cases.recovered}
            </div>
            </div>
            <div className={classes.Deceased}>
            <div>
                Deceased
            </div>
            <div>
            {datas[0].deaths.new}
            </div>
            <div>
            {datas[0].deaths.total}
            </div>
            </div>
            <div>
            {/* butoon to COVID19 World Map*/}
                <button onClick={props.mapHandler}> COVID19 World Map</button>
            </div>
        </div>
        </>
       
    )
}

export default AllCovid;