import { makeStyles } from "@material-ui/core";

const style = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  Appbar: {
    backgroundColor: "#089bab",
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
  item: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  buttons: {
    display: "block",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));
export default style;
