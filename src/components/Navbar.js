import React from 'react';

import { handleSearch } from '../redux/actions';

class Navbar extends React.Component {

    componentDidMount() {

        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': 'ef01c1007amsha74b92019e119afp1ced96jsn6379567e2e25',
                'X-RapidAPI-Host': 'trains.p.rapidapi.com'
            },
            body: '{"search":"Rajdhani"}'
        };
        
        fetch('https://trains.p.rapidapi.com/', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
        
        
    }

    getTrainDetails = () => {
        
        let trainName= document.getElementById('trainName').value;
        let { store } = this.props;

        store.dispatch(handleSearch(trainName));
        
        store.subscribe(() => {
            console.log('value inside store: ', store.getState());
        })
        
    }
    
    render() {
        
        return(
            <React.Fragment>
                <div style = {style.background}>
                    <img style={style.railLogo} src='/raillogo.png'/>
                    <div style = {style.search}>
                        <input id='trainName' style = {style.searchInput} placeholder='Search'/>
                        <img style = {style.searchImg} src='https://cdn-icons-png.flaticon.com/512/3104/3104567.png' onClick={this.getTrainDetails}/>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const style = {

    background: {
        backgroundColor: 'black',
        paddingTop: 10,
        paddingBottom: 12,
        display: 'flex',
        width: '100vw'
    },

    railLogo: {
        width: 80,
        marginLeft: 10,
        display: 'inline'
    },

    search: {
        display: 'inline-flex',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 'auto'
    },

    searchInput: {
        height: 29,
        width: '30vw'
    },

    searchImg: {
        width: 25,
        height: 25,
        backgroundColor:'#f77840',
        padding: 5,
        marginLeft: 3,
        cursor: 'pointer'
    }
}

export default Navbar;