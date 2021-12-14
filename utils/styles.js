import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
  navbar: {
    backgroundColor: "#203040",
    "& a": {
      color: "#ffffff",
      marginLeft: 10,
    },
  },
  main: {
    minHeight: "80vh",
    // backgroundColor: "#F4F6F6",
  },
  brand: {
    fontWeight: "bold",
    fontSize: "1.8rem",
  },
  grow: {
    flexGrow: 1,
  },
  sectiom: {
    marginTop: "20px",
    marginBottom: "20px",
    textDecoration: "none",
  },
  footer: {
    textAlign: "center",
    marginTop: "20px",
    // backgroundColor: "rgb(32,48,64)",
  },
});

export default useStyles;
