import {
  Alert,
  Box,
  Button,
  Card,
  CircularProgress,
  Grid,
  Link,
  List,
  ListItem,
  Rating,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import classes from '../../utils/classes';
import client from '../../utils/client';
import { urlFor } from '../../utils/image';
import Hoos from '../../components/Hoos';

import ProductItem from '../../components/ProductItem';

export default function ProductScreen(props) {
  const { slug } = props;
  const [state, setState] = useState({
    product: null,
    loading: true,
    error: '',
  });
  const { product, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const product = await client.fetch(
          `
              *[_type == "product" && slug.current == $slug][0]`,
          { slug }
        );
        setState({ ...state, product, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const products = await client.fetch(`*[_type == "product"]`);
  //       setState({ products, loading: false });
  //     } catch (err) {
  //       setState({ loading: false, error: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <Layout title={product?.title}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box style={{ paddingLeft: '25px' }}>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <Typography>back to result</Typography>
              </Link>
            </NextLink>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12}>
              <Image
                src={urlFor(product.image)}
                alt={product.name}
                layout="responsive"
                width={640}
                height={640}
              />
            </Grid>
            <Grid md={4} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h1" variant="h1">
                    {product.name}
                  </Typography>
                </ListItem>
                <ListItem>Category: {product.category}</ListItem>
                <ListItem>Brand: {product.brand}</ListItem>
                <ListItem>
                  <Rating value={product.rating} readOnly></Rating>
                  <Typography sx={classes.smallText}>
                    ({product.numReviews} reviews)
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>Description: {product.description}</Typography>
                </ListItem>
                <ListItem>
                  <button fullWidth variant="contained" className="button-5">
                    {product.name === 'Qaamuska Afsoomaaliga' ? (
                      <a
                        href="/files/QAAMUUSKA AF-SOOMAALIGA[1]-2.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : product.name === 'Kobocii Islaamiyiinta' ? (
                      <a
                        href="/files/Kobocii Islaamiyiinta Soomaaliya.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : product.name === 'Gabayadii Sayidka' ? (
                      <a
                        href="/files/Diiwaanka_Gabayadii_Sayid_Maxamed_Cabdulle_Xasan.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : product.name === 'Midnimo iyo muraayadii jabtay' ? (
                      <a
                        href="/files/Midnimo, Maandeeq, iyo Muraayaddii Jabtay-ebyoon (1).pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : product.name === 'SOO DOOG' ? (
                      <a
                        href="/files/Soodoog-garanuug.com.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : (
                      <Typography>Waxba ma hayno</Typography>
                    )}
                  </button>
                </ListItem>
              </List>
            </Grid>
            {/* <div className="maylike-products-wrapper">
              <h2>You may also like</h2>
              <div className="marquee">
                <div className="maylike-products-container track">
                  {products.map((item) => (
                    <ProductItem key={item._id} product={item} />
                  ))}
                </div>
              </div>
            </div> */}
          </Grid>
          {/* <Grid item md={3} xs={12}>
                  <Card>
                    <List>
                      <ListItem>
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography>Price</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography>${product.price}</Typography>
                          </Grid>
                        </Grid>
                      </ListItem>
                      <ListItem>
                        <Grid container>
                          <Grid item xs={6}>
                            <Typography>Status</Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <Typography>
                              {product.countInStock > 0
                                ? 'In stock'
                                : 'Unavailable'}
                            </Typography>
                          </Grid>
                        </Grid>
                      </ListItem> <br/>
                      <ListItem>
                        
                        <button fullWidth variant="contained">
                        {product.name==="Golf pants" 
                        ?   <a  href="/files/NUUN.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" className="buy-now">Add to Cart</a> 
                        : product.name==="Qurux" ? <a  href="/files/cv.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" className="buy-now">Add to Cart</a>
                        :product.name==="Fit pants" ? <a  href="/files/BaylintaBuuqa-.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" className="buy-now">Add to Cart</a>
                        :product.name==="Shirts" ? <a  href="/files/shahaado guud.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" className="buy-now">Add to Cart</a>
                       :<Typography>Waxba ma hayno</Typography>               
                      }
                        </button>
                      </ListItem>
                    </List>
                  </Card>
                </Grid> */}
          {/* <Grid>
            {products.map((product) => (
              <Grid item md={3} key={product.slug} className="caymis2">
                <ProductItem product={product}></ProductItem>
              </Grid>
            ))}
          </Grid> */}
          <Hoos />
        </Box>
      )}
    </Layout>
  );
}

export function getServerSideProps(context) {
  return {
    props: { slug: context.params.slug },
  };
}
