import Link from 'next/link';
import React from 'react';
import { urlForThumbnail } from '../utils/image';
import product from './/../amazon-sanity/schemas/product';

const Product = ({
  product: {
    name,
    price,
    Author,
    image,
    description,
    slug,
    brand,
    category,
    rating,
    numReviews,
    countInStock,
  },
}) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlForThumbnail(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p>{name}</p>
          <p className="author">{Author}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
