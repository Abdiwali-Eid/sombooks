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
    bugaag: null,
    loading: true,
    error: '',
    products: null,
  });
  const { bugaag, loading, error, products } = state;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const bugaag = await client.fetch(
          `
              *[_type == "bugaag" && slug.current == $slug][0]`,
          { slug }
        );
        const products = await client.fetch(`*[_type == "bugaag"]`);

        setState({ ...state, bugaag, products, loading: false });
      } catch (err) {
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
  }, []);

  return (
    <Layout title={bugaag?.title}>
      {loading ? (
        <CircularProgress />
      ) : error ? (
        <Alert variant="error">{error}</Alert>
      ) : (
        <Box style={{ paddingLeft: '25px' }}>
          <Box sx={classes.section}>
            <NextLink href="/" passHref>
              <Link>
                <Typography>Dib u noqo</Typography>
              </Link>
            </NextLink>
          </Box>
          <Grid container spacing={1}>
            <Grid item md={6} xs={12} className="details">
              <Image
                src={urlFor(bugaag.image)}
                alt={bugaag.name}
                layout="responsive"
                width={640}
                height={640}
                className="image-buug"
              />
            </Grid>
            <Grid md={4} xs={12}>
              <List>
                <ListItem>
                  <Typography component="h1" variant="h1">
                    {bugaag.name}
                  </Typography>
                </ListItem>
                <ListItem>Qoraaga: {bugaag.Author}</ListItem>
                <ListItem>Category: {bugaag.category}</ListItem>

                <ListItem>
                  <Rating value={bugaag.rating} readOnly></Rating>
                  <Typography sx={classes.smallText}>
                    ({bugaag.numReviews} reviews)
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography>Description: {bugaag.description}</Typography>
                </ListItem>
                <ListItem>
                  <button fullWidth variant="contained" className="button-5">
                    {bugaag.name === 'Qaamuska Afsoomaaliga' ? (
                      <a
                        href="/files/QAAMUUSKA AF-SOOMAALIGA[1]-2.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                        
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Kobocii Islaamiyiinta' ? (
                      <a
                        href="/files/Kobocii Islaamiyiinta Soomaaliya.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Gabayadii Sayidka' ? (
                      <a
                        href="/files/Diiwaanka_Gabayadii_Sayid_Maxamed_Cabdulle_Xasan.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Midnimo iyo muraayadii jabtay' ? (
                      <a
                        href="/files/Midnimo, Maandeeq, iyo Muraayaddii Jabtay-ebyoon (1).pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'SOO DOOG' ? (
                      <a
                        href="/files/Soodoog-garanuug.com.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Nuun' ? (
                      <a
                        href="/files/NUUN.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Baylinta Buuqa' ? (
                      <a
                        href="/files/BaylintaBuuqa-.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Salaad baa i dhaaftay' ? (
                      <a
                        href="/files/Salaad baa i dhaaftay.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Garaadso intaadan Guursan' ? (
                      <a
                        href="/files/garaadso intaanad guursan.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Maana-faay' ? (
                      <a
                        href="/files/maana faay.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Dhambaalada Quraanka' ? (
                      <a
                        href="/files/Dhambaallada quraanka..pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Xeerka soomaalidii hore' ? (
                      <a
                        href="/files/Xeerkii soomaalidii hore.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Ku raaxayso noloshaada' ? (
                      <a
                        href="/files/KU RAAXAYSO NOLOSHADA-1.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Indho deeq ku aaway' ? (
                      <a
                        href="/files/Indhadeeqkuaaway.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Hal ka Haleel' ? (
                      <a
                        href="/files/hal ka haleel.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Hal aan tabayay' ? (
                      <a
                        href="/files/hal aan tabayey.pdf"
                        alt="alt text"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="buy-now"
                      >
                        Download
                      </a>
                    ) : bugaag.name === 'Sirta iyo Axkaamta soonka' ? (
                      <a
                        href="/files/Sirta iyo Axkaamta Soonka-QABYO (1).pdf"
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
          </Grid>
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
