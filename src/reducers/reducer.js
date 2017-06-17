const initialState = {
  search: '',
  loading: false,
  queried: true,
  results: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SEARCH_START': {
      return Object.assign({}, state, {
        loading: true,
        search: action.search
      })
    }
    case 'SEARCH_SUCCESS': {
      return Object.assign({}, state, {
        loading: false,
        results: action.results,
        queried: true
      })
    }
    default: {
      return state;
    }
  }
}

export default reducer;