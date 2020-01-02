import {
    SET_MAIN_BEERS,
    SET_SEARCHED_BEERS,
    ADD_TAP,
    REMOVE_BEER
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_MAIN_BEERS:
            return {
                ...state,
                displayBeers: action.payload
            };
        case SET_SEARCHED_BEERS:
            return {
                ...state,
                searchedBeers: action.payload
            };
        case ADD_TAP:
            return {
                ...state,
                searchedBeers: state.searchedBeers.filter(x => x.beer.bid !== action.payload)
            };
        case REMOVE_BEER:
            return {
                ...state,
                displayBeers: state.displayBeers.filter(x => x._id !== action.payload)
            }
        default:
            return state
    }

}