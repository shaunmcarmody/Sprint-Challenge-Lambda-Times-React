import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
          {
            /* Using the cards prop, map over the list creating a 
            new Card component for each passing the card as the only prop*/
            props.cards.map(card=> <Card card={card} />)
          }
    </div>
  )
}

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default Cards;