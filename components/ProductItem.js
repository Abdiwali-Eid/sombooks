import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';

export default function ProductItem({ product }) {
  return (
    <Card>
      <NextLink
        href={`/product/${product.slug.current}`}
        passHref
        
      >
        <CardActionArea>
          <CardMedia
            component="img"
            image={urlForThumbnail(product.image)}
            title={product.name}
          ></CardMedia>
          <CardContent>
            <Typography>{product.name}</Typography>
            <Typography className="author">{product.Author}</Typography>
            {/* <Typography>
              {product.rating} ({product.numReviews} reviews)
              </Typography> */}
          </CardContent>
        </CardActionArea>
      </NextLink>
      <CardActions>
        {/* <Typography>${product.price}</Typography>
          <Button size="small" color="primary">
          <a  href="/files/NUUN.pdf" alt="alt text"  target="_blank" rel="noopener noreferrer" >Add to Cart</a> 

          </Button> */}
      </CardActions>
    </Card>
  );
}
