import React from "react";

// --------- destructuring Props by elements
const QuoteBox = ({ randomQuote, randomColors, getRandomAll }) => {
  // --------- Props asign to function
  const objectStyle = {
    color: randomColors,
  };

  const objectBgStyle = {
    backgroundColor: randomColors,
  };
  // --------- JSX Return
  // --------- Paint a card and use props to renderize the view whit the json object
  return (
    <article className="card" style={objectStyle}>
      <div className="card__container">
        <i className="fa-solid fa-quote-left quote-icon"></i>
        <p id="h2" className="card__quote">
          {randomQuote.quote}
        </p>
      </div>
      <p className="card__author">{randomQuote.author}</p>
      <div className="card__btn">
        <button
          onClick={getRandomAll}
          className="card__btn__arrow"
          style={objectBgStyle}
        >
          &#62;
        </button>
      </div>
    </article>
  );
};
// --------- Export the component to use on elements or other components
export default QuoteBox;
