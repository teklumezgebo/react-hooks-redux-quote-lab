import React from "react";
import { upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";

function QuoteCard(props) {
  
  const dispatch = useDispatch()

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={() => dispatch(upvoteQuote(props.quote.id))}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={() => dispatch(downvoteQuote(props.quote.id))}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
