import React, { useContext } from "react";
import Head from "next/head";
import NextLink from "next/link";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Link,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import useStyles from "../utils/styles";
import { Store } from "../utils/Store";
import { Switch } from "@mui/material";
import Cookies from "js-cookie";
const Layout = ({ title, children, description }) => {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const theme = createTheme({
    typography: {
      h1: {
        fontSize: "1.6rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      h2: {
        fontSize: "1.4rem",
        fontWeight: 400,
        margin: "1rem 0",
      },
      body1: {
        fontWeight: "normal",
      },
    },
    palette: {
      type: darkMode ? "dark" : "light",
      primary: {
        main: "#f0c000",
      },
      secondary: {
        main: "#208080",
      },
    },
  });
  const classes = useStyles();
  const darkModeChangeHandler = () => {
    dispatch({ type: darkMode ? "DARK_MODE_OFF" : "DARK_MODE_ON" });
    const newDarkMode = !darkMode;
    Cookies.set("darkMode", newDarkMode ? "ON" : "OFF");
  };
  return (
    <div>
      <Head>
        <title>{title ? `${title}-"Next Amazona` : "Next Amazona"}</title>
        {description && <meta name="description" content="description"></meta>}
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar className={classes.navbar}>
              <NextLink href="/" passHref>
                <Link>
                  <Typography className={classes.brand}>amazona</Typography>
                </Link>
              </NextLink>
              <div className={classes.grow}></div>
              <div>
                <Switch
                  checked={darkMode}
                  onChange={darkModeChangeHandler}
                ></Switch>
                <NextLink href="/cart" passHref>
                  <Link>cart</Link>
                </NextLink>
                <NextLink href="/login" passHref>
                  <Link>Login</Link>
                </NextLink>
              </div>
            </Toolbar>
          </AppBar>
        </Box>

        <Container className={classes.main}>{children}</Container>
        <footer className={classes.footer}>
          <Typography>All rights reserved .next amazona</Typography>
        </footer>
      </ThemeProvider>
    </div>
  );
};

export default Layout;
