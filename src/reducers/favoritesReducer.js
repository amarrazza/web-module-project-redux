import movies from './../data.js';

const initialState = {
    favorites: movies,
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;