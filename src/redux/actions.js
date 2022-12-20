import types from './types';

function handleSearch(trainName) {

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': 'ef01c1007amsha74b92019e119afp1ced96jsn6379567e2e25',
            'X-RapidAPI-Host': 'trains.p.rapidapi.com'
        },
        body:  JSON.stringify({"search": `${trainName}`})
    };

    return function(dispatch) {

        fetch('https://trains.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(
                response => {
                    dispatch({
                        type: types.SEARCH_TRAIN,
                        payload: response
                    })
                }
            )
            .catch(err => console.error(err));
    }

}

function bookmarkTrain(trainDetail) {
    return {
        type: types.ADD_TO_BOOKMARK,
        payload: trainDetail
    }
}

function bookmarkTabSelected() {
    return {
        type: types.BOOKMARK_SELECTED,
        payload: true
    }
}

function allTrainTabSelected() {
    return {
        type: types.ALL_TRAIN_SELECTED,
        payload: false
    }
}

export default {
    handleSearch,
    bookmarkTrain,
    bookmarkTabSelected,
    allTrainTabSelected
}