import React from 'react';
import './index.css';
import Starrating from './StarRating/Star';
import ImageSlide from './imageSlide/ImageSlide';

const Card = (Props) => {
     const {imageUrl} = Props;
      
  return (
    <div className="product-card">
        <div className='product-card-image'>
        <ImageSlide  images ={imageUrl['images']}/>
        </div>
      
      <div className="product-card-content">
        <h3 className="product-card-title"> {imageUrl['title']} </h3>
        <p className="product-card-description">{imageUrl['description']} </p>
        <div className="product-card-rating">
            <Starrating rating = {5} />
        </div>
      </div>
    </div>
  );
};

export default Card;
