import React from "react";
import Head from "next/head";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import useStyles from "../utils/styles";

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>Next Amazona</title>
      </Head>

      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar className={classes.navbar}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Amazona
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>

      <Container className={classes.main}>{children}</Container>
      <footer className={classes.footer}>
        <Typography>All rights reserved .next amazona</Typography>
      </footer>
    </div>
  );
};

export default Layout;
