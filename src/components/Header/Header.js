
import { useContext } from "react";
import DataContext from "../Context/Context";
import classes from "./Header.module.css";

function Header(){
    // Context API to get date of the datas
    const Cntx = useContext(DataContext);
   
    return(
        <>
       
        <h1 className={classes.Header}> COVID19 <span>WORLD</span></h1>
        <h3 className={classes.Header}> Search your country or continent </h3>
        <div className={classes.Date}>{Cntx.data[0].day}</div>
        </>
    )
}

export default Header;