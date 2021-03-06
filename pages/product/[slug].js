import React, { useContext } from "react";
import Layout from "../../components/Layout";

import NextLink from "next/link";
import {
  Button,
  Card,
  Grid,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import useStyles from "../../utils/styles";
import Image from "next/image";
import db from "../../utils/db";
import Product from "../../models/Product";
import axios from "axios";
import { Store } from "../../utils/Store";
import { useRouter } from "next/router";

const ProductScreen = (props) => {
  const router = useRouter();
  const { dispatch } = useContext(Store);
  const { product } = props;
  // const router = useRouter();
  const classes = useStyles();
  // const { slug } = router.query;
  //const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>No products found </div>;
  }

  const addToCarthandler = async () => {
    const { data } = await axios.get(`/api/products/${product._id}`);

    if (data.countInStock <= 0) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
    router.push("/cart");
  };

  return (
    <>
      <Layout title={product.name} description={product.description}>
        <div className={classes.sectiom}>
          <NextLink href="/" passHref>
            <Link>
              <Typography>Back To All Products</Typography>
            </Link>
          </NextLink>
        </div>
        <Grid container spacing={1}>
          <Grid item md={6} xs={12}>
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              Layout="responsive"
              responsive
            />
          </Grid>
          <Grid item md={3} xs={12}>
            <List>
              <ListItem>
                <Typography component="h1" variant="h1">
                  {product.name}
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>Category: {product.category}</Typography>
              </ListItem>
              <ListItem>
                <Typography>Brand: {product.brand}</Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  Rating: {product.rating} stars ({product.numReviews} reviews)
                </Typography>
              </ListItem>
              <ListItem>
                <Typography> Description: {product.description}</Typography>
              </ListItem>
            </List>
          </Grid>
          <Grid item md={3} xs={12}>
            <Card>
              <List>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>Price: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>$ {product.price}</Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Grid container>
                    <Grid item xs={6}>
                      <Typography>list item: </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography>
                        {product.countInStock > 0
                          ? `${product.countInStock} In stock`
                          : "Unavailable"}
                      </Typography>
                    </Grid>
                  </Grid>
                </ListItem>
                <ListItem>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={addToCarthandler}
                  >
                    Add To Cart
                  </Button>
                </ListItem>
              </List>
            </Card>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;
  await db.connect();
  const product = await Product.findOne({ slug }).lean();
  await db.disconnect();
  return {
    props: { product: db.convertDocToObj(product) },
  };
}
export default ProductScreen;
