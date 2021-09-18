import classes from "./Footer.module.css";
function Footer(){


    return(<> 
    <footer className={classes.footer}>
    <a className={classes["footer-logo"]}href="https://github.com/ravindrapindel/Covid19World-App"> <i className="fab fa-github fa-2x"></i>  </a>
     <a className={classes["footer-logo"]} href="https://www.linkedin.com/in/ravindra-pindel-a65626144/">   <i className="footer-logo fab fa-linkedin fa-2x"></i>  </a>
     <a className={classes["footer-logo"]} href="https://www.instagram.com/pindelravindra/"> <i className="footer-logo fab fa-instagram fa-2x"></i> </a>


    <div className={classes["footer-copy"]} >© Copyright 2021 COVID19 World Tracker </div>

  </footer>

  </>)
}

export default Footer;