import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = props => {
  return (
    <div className="cards-container">
          {
            props.cards.map((card, i) => <Card card={card} key={i} />)
          }
    </div>
  )
}

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
}

export default Cards;