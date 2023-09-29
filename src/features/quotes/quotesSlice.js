// Action Creators
export function addQuote(quote) {
  return {
    type: "quotes/add",
    payload: quote
  }
}

export function removeQuote(quote){
  return {
    type: "quotes/remove",
    payload: quote
  }
}

export function upvoteQuote(quote) {
  return {
    type: "quotes/upvote",
    payload: quote
  }
}

export function downvoteQuote(quote) {
  return {
    type: "quotes/downvote",
    payload: quote
  }
}
// Reducer
const initialState = [];
let quote

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload]
    case "quotes/remove": 
      return state.filter(quote => quote.id !== action.payload)
    case "quotes/upvote":
      state.find(quote => quote.id  === action.payload).votes = state.find(quote => quote.id  === action.payload).votes + 1
      return state
    case "quotes/downvote":
      state.find(quote => quote.id  === action.payload).votes = state.find(quote => quote.id  === action.payload).votes === 0 ? state.find(quote => quote.id  === action.payload).votes : state.find(quote => quote.id  === action.payload).votes - 1
      return state
    default:
      return state
  }
  ;
}
