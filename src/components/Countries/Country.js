import classes from "./Country.module.css";

function Country(props){
    
    return(
            <div className="table-responsive-md">
             <table className="table table-striped">
             {/* Table Header with buttons for sorting datas */}
               <thead>
                 <tr >
                    <th>Country</th>
                    <th> <button onClick={props.btnHandler} className={classes.Btn}> Confirmed </button></th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Critical </th>
                    <th>Deceased</th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}> Cases per million </button></th>
                   <th> <button onClick={props.btnHandler} className={classes.Btn}> Deaths per million </button></th>
                    </tr>
                    </thead>
                  <tbody>
{/* Rendering all the countries datas */}
                  {props.data.map((response,index)=>{

        return (

    <tr key={index} >
    <td > {response.country}</td>
    <td> <h6>+{response.newCase} </h6> {response.confirmed}</td>
    <td>{response.active}</td>
    <td> {response.recovered}</td>
    <td> {response.critical}</td>
    <td>  {response.deaths}</td>
    <td> {response.casepermillion}</td>
    <td>{response.deathspermillion} </td>
  </tr>
    )
    })}
    </tbody>
</table>
 </div>
)
}

export default Country;