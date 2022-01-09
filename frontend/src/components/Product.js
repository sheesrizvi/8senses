import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const Product = ({ product }) => {
  return (
    <Card className='my-3 py-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <Link
          to={`/product/${product._id}`}
          style={{ color: 'inherit', textDecoration: 'inherit' }}
        >
          <Card.Title as='div'>
            <u>
              <strong>{product.name}</strong>
            </u>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} reviews`}
          />
        </Card.Text>

        <Card.Text as='h3'>ر.ق{product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
