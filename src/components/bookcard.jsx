import React from 'react';

const BookCard = ({ image, name, genre, author }) => {
  return (
    <div className="book-card">
      <img src={image} alt={name} className="book-image" />
      <h3>{name}</h3>
      <p>Genre: {genre}</p>
      <p>Author: {author}</p>
    </div>
  );
};

export default BookCard;
