import React from 'react';

import actions from '../redux/actions';

class Navbar extends React.Component {

    getTrainDetails = () => {
        
        let trainName= document.getElementById('trainName').value;
        let { store } = this.props;

        store.dispatch(actions.handleSearch(trainName));
        
    }

    allTrainSelected = () => {
        let { store } = this.props;

        store.dispatch(actions.allTrainTabSelected());

        store.subscribe(() => {
            console.log('after: ', store.getState());
        })
    }

    bookmarkTrainSelected = () => {
        let { store } = this.props;

        store.dispatch(actions.bookmarkTabSelected());

        store.subscribe(() => {
            console.log('after: ', store.getState());
        })
    }
    
    render() {
        const { store } = this.props;
        return(
            <React.Fragment>
                <div style = {style.background}>
                    <img style={style.railLogo} src='/raillogo.png'/>
                    <div style = {style.search}>
                        <input id='trainName' style = {style.searchInput} placeholder='Search'/>
                        <img style = {style.searchImg} src='https://cdn-icons-png.flaticon.com/512/3104/3104567.png' onClick={this.getTrainDetails}/>
                    </div>
                </div>
                <div style = {style.subMenu}>
                    <div onClick = {() => this.allTrainSelected()} style = {style.subMenuBorder}>
                        { store.getState().isBookmarkSelected && <p>All Trains</p>}
                        { !store.getState().isBookmarkSelected && <p><b>All Trains</b></p>}
                    </div>
                    <div onClick = {() => this.bookmarkTrainSelected()} style = {style.subMenuBorder}>
                        { store.getState().isBookmarkSelected && <p><b>Bookmark</b></p>}
                        { !store.getState().isBookmarkSelected && <p>Bookmark</p>}
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
    },

    subMenu: {
        backgroundColor: 'pink',
        display: 'flex'
    },
    
    subMenuBorder: {
        display: 'flex', 
        justifyContent: 'center',
        padding: 10,
        cursor: 'pointer',
        width: '50vw',
        border: '2px solid black', 
        margin: 'auto'
    }
}

export default Navbar;