export const addQuote = (quote) => {
  return { type: "quotes/add", payload: quote }
}

export const removeQuote = (id) => {
  return { type: "quotes/remove", payload: id }
}

export const upvoteQuote = (id) => {
  return { type: "quotes/upvote", payload: id }
}

export const downvoteQuote = (id) => {
  return { type: "quotes/downvote", payload: id }
}

const initialState = [];

export default function quotesReducer(state = initialState, action) {
  switch(action.type) {
    case "quotes/add":
      return [...state, action.payload]

    case "quotes/remove":
      return state.filter((qoute) => qoute.id !== action.payload)
    
    case "quotes/upvote":
      const upvoteQuote = state.find((qoute) => qoute.id === action.payload)
     
      upvoteQuote.votes += 1

      return [...state.filter((qoute) => qoute.id !== action.payload), upvoteQuote]
    
    case "quotes/downvote":
      const downvoteQuote = state.find((qoute) => qoute.id === action.payload)
     
      if (downvoteQuote.votes > 0) { downvoteQuote.votes -= 1 }

      return [...state.filter((qoute) => qoute.id !== action.payload), downvoteQuote]
      
    default:
      return state
  }
}
