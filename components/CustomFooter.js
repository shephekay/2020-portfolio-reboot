import Footer from '../../../../portfolio/nova-portfolio/components/Footer/Footer'
import { makeStyles } from "@mui/material/styles"
// import styles from "assets/jss/nextjs-material-kit-pro/pages/componentsSections/footerStyle.js";
import Face from "@mui/icons-material/Face"

const useStyles = makeStyles(styles);

export default function MyFooter (props) {
    const classes = useStyles()
    return(
        <Footer
          theme='white'
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="/"
                  className={classes.footerBrand}
                >
                  <Face/>
                </a>
              </div>
              <div className={classes.right}>
              ©2020 made by Sheila P. Kelley
              </div>
            </div>
          }
        />
    )
}