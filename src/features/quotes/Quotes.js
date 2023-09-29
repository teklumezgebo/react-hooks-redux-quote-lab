import React from "react";
import QuoteCard from "./QuoteCard";
import { removeQuote, upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useSelector } from "react-redux";

function Quotes() {
  const quotes = useSelector(state => state)
  
  return (
    <div>
      <hr />
      <div className="row justify-content-center">
        <h2>Quotes</h2>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {quotes.length > 0 ? quotes.map(quote => <QuoteCard key={quote.content} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote}/>) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quotes;
