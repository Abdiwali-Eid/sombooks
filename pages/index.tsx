import {
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  InputBase,
  Link,
  List,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
  ThemeProvider,
  Toolbar,
  useMediaQuery,
} from '@mui/material';
import { useRouter } from 'next/router';

import { Alert, CircularProgress, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';
import Kor from '../components/Kor';
import Dheex from '../asset/reading-books.png';
import classes from '../utils/classes';
import imsgg from '../public/reading-books.png';
import Hoos from '../components/Hoos';

export default function Home() {
  // const [state, setState] = useState({
  //   products: [],
  //   error: '',
  //   loading: true,
  // });
  // const { loading, error, products } = state;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const products = await client.fetch(`*[_type == "product"]`);
  //       setState({products, loading: false });
  //     } catch (err) {
  //       setState({loading: false, error: err.message });
  //     }
  //   };
  //   fetchData();
  // }, []);
  const [state, setState] = useState({
    products: null,
    loading: true,
    error: '',
  });
  const { products, loading, error } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await client.fetch(
          ` *[_type == "product"]`,
       
        );
        setState({ ...state, products, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);


  const isDesktop = useMediaQuery('(min-width:600px)');

  const [query, setQuery] = useState('');
  const queryChangeHandler = (e) => {
    setQuery(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/search?query=${query}`);
  };
  return (
    <Layout>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Grid
            className="nud"
            style={
              {
                // backgroundColor: 'white',
                // width: '100vw',
                // backgroundColor:'gold'
              }
            }
          >
            <div className="midig">
              {/* Read PDF Books <br /> Online<br/>  <span className='sixid'>
                start your learning journary by browsing millions of <br />
                books from our library */}
              <span className="ciwan">
                Read PDF Books
                <br /> Online{' '}
              </span>
              <br />
              start your learning journary by browsing millions of books from
              our library
              <br />
              <button
                className="button-5"
                role="button"
                onClick={submitHandler}
              >
                See All books
              </button>
              {/* <p> </p> */}
            </div>
            <div className="image-div">
              <img
                src="https://hostacmee.space/demo/bookchoix/wp-content/uploads/revslider/slider-1/girl-reading-books-online.png"
                alt=""
                // width={'660px'}
                className="images"
              />
            </div>
          </Grid>
          <div className="nuuro" style={{ width: '98.7vw' }}>
            <Grid style={{ paddingLeft: '220px', paddingTop: '30px' }}>
              <b style={{ fontSize: '20px' }}>Popular Books</b>
            </Grid>
            <br />
            <div style={{ display: 'flex' }}>
              <Grid sx={isDesktop ? classes.visible : classes.hidden}>
                <Kor />
              </Grid>
              <div className="bordere"> </div>
              <Grid container spacing={4} className="caymis">
                {products.map((product) => (
                  <Grid item md={3} key={product.slug} className="caymis2">
                    <ProductItem product={product}></ProductItem>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
}
