import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  img: {
    // width: "100vh",
    height: "70vh",
    // borderRadius:'20px',
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      height: "30vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  container1: {
    padding: "10% 10% 5% 10% ",
    [theme.breakpoints.down("sm")]: {
      padding: "0 3% 3% 5% ",
    },
  },
  card1: {
    borderRadius: "20px",
  },
  form_control: {
    height: "2rem",
    width: "95%",
    lineHeight: "40px",
    background: "transparent",
    border: "1px solid #d7dbda",
    fontSize: "14px",
    color: "#a09e9e",
    borderRadius: "10px",
    paddingLeft: "0 0 20px 0",
    "&:hover":{
      backgroundColor: "#0069d9",
      borderColor: "#0062cc"
    },
  },
  label: {
    color: "#3f414d",
    fontWeight: "normal",
    padding: "2% 0 1% 3%",
  },
  division: {
    paddingTop: theme.spacing(1),
  },
  division1: {
    paddingTop: theme.spacing(2),
  },
  button: {
    display: "block",
    width: "100%",
    height: "2rem",
    backgroundColor: "#089bab",
    border: "none",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "1rem",
  },
  // template
  container: {
    padding: 40,
    [theme.breakpoints.down("sm")]: {
      padding: 7,
    },
  },
  card: {
    backgroundColor: "#089bab",
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "100% ",
    },
  },
  content: {
    padding: "15% 0 0 2%",
    textAlign: "center",
  },
  img: {
    width: "30vw",
    height: "70vh",
    // borderRadius:'20px',
    borderRadius: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "60vw",
      height: "30vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(2),
  },
  container1: {
    padding: "10% 3% 5% 10% ",
    [theme.breakpoints.down("sm")]: {
      padding: "0 3% 3% 5% ",
    },
  },
  card1: {
    borderRadius: "20px",
  },
  form_control: {
    height: "2.5rem",
    width: "100%",
    lineHeight: "45px",
    background: "transparent",
    border: "1px solid #d7dbda",
    fontSize: "14px",
    color: "#a09e9e",
    borderRadius: "10px",
    paddingLeft: "15px",
    fontSize:'15px'
  },
  label: {
    color: "#3f414d",
    fontWeight: "normal",
    padding: "1% 0 1% 3%",
  },
  division: {
    paddingTop: theme.spacing(3),
  },
  button: {
    display: "block",
    width: "100%",
    height: "2rem",
    backgroundColor: "#089bab",
    border: "none",
    borderRadius: "10px",
    color: "#ffffff",
    fontSize: "1rem",
  },
  // landing Navbar
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  Appbar: {
    backgroundColor: "#089bab",
  },
  search: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  btn: {
    padding: "0.4rem",
    fontSize: 15,
    borderRadius: 10,
    backgroundColor: "#089bab",
    borderWidth: 2,
    border: "1px solid #017e7e",
    outline: 2,
    color: "#ffffff",
  },
  btngroup: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

export default styles;
