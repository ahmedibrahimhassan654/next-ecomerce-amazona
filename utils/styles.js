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
    backgroundColor: "blue",
  },
    footer: {
      textAlign: "center",
    },
});

export default useStyles;
