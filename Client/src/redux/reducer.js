import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action-types";

const initialState = {
    myFavorites : [],
    allCharacters : [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { 
                ...state, 
                myFavorites: action.payload, 
                allCharacters: action.payload 
            };
        case REMOVE_FAV:
            return { 
                ...state, 
                myFavorites: action.payload
            };
        case FILTER:
            if (action.payload === 'all') {
                return { ...state, myFavorites: state.allCharacters };
            } else {
                const filteredCharacters = state.allCharacters.filter((character) => 
                character.gender === action.payload
                );
                return { ...state, myFavorites: filteredCharacters };
            };
        case ORDER:
            const sortedCharacters = [...state.myFavorites];
            if (action.payload === 'A') {
                sortedCharacters.sort((a, b) => a.id - b.id); 
            } else if (action.payload === 'D') {
                sortedCharacters.sort((a, b) => b.id - a.id);
            }
            return {
                ...state,
                myFavorites: sortedCharacters,
            };
        default:
            return {...state};
    }
};

export default rootReducer;




