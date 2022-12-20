import types from "./types";

const initialSearchState = [];

const searchTrainReducer = (state = initialSearchState, action) => {

    switch(action.type) {
        
        case types.SEARCH_TRAIN:
            return action.payload;
            
        default:   
            return state;
    }
}

export default searchTrainReducer;