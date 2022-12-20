import types from "./types";

const initialSearchState = {
    all_trains: [],
    bookmarked_trains: [],
    isBookmarkSelected: false
}

const searchTrainReducer = (state = initialSearchState, action) => {

    switch(action.type) {
        
        case types.SEARCH_TRAIN:
            return { ...state, all_trains: action.payload };

        case types.ADD_TO_BOOKMARK:
            return { ...state, bookmarked_trains: [...state.bookmarked_trains, action.payload] };
        
        case types.BOOKMARK_SELECTED: 
            return { ...state, isBookmarkSelected: true };
        
        case types.ALL_TRAIN_SELECTED:
            return { ...state, isBookmarkSelected: false };

        default:   
            return state;
    }
}

export default searchTrainReducer;