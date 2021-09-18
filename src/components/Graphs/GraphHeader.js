import classes from "./GraphHeader.module.css"
function GraphHeader(props){
const totalCase = props.countryData.cases.total;
const newCase = props.countryData.cases.new;
const activeCase =props.countryData.cases.active;
const recoveredCase = props.countryData.cases.recovered;
const deathsCase = props.countryData.deaths.total;
const newDeathcase = props.countryData.deaths.new;
// console.log(props.countryData);

    
    return(
           <>
        <h1 className={classes.Heading}> {props.countryData.country}</h1>
        <div className={classes.AllCovid}>
            <div className={classes.Confirmed}>
            <div>
                Confirmed
            </div>
            <div>
            {newCase}
            </div>
            <div>
            {totalCase}
            </div>
            </div>
            <div className={classes.Active}>
            <div >
                Active
            </div>
            <div>
            {activeCase}
            </div>
            </div>
            <div className={classes.Recovered}>
            <div>
                Recovered
            </div>
            <div>
            {recoveredCase}
            </div>
            </div>
            <div className={classes.Deceased}>
            <div>
                Deceased
            </div>
            <div>
            {newDeathcase}
            </div>
            <div>
            {deathsCase}
            </div>
            </div>
        </div>
        </>
       
    );
}

export default GraphHeader;