import React from 'react';
import actions from '../redux/actions';
import { connect } from 'react-redux';

class Train extends React.Component {


    addToBookmark(trainDetail) {
        const { dispatch } = this.props;
        
        dispatch(actions.bookmarkTrain(trainDetail));
    }

    render() {

        const { train_num, name, train_from, train_to } = this.props.trainDetail;
        const { arriveTime, departTime, classes } = this.props.trainDetail.data;

        return (
            <React.Fragment>
                <div style = {style.train}>
                    <div>
                        <img style = {style.trainImg} src = 'railImg.png'/>
                    </div>
                    <div style= {style.trainDetails} >
                        <div>
                            <strong>Train Name: {name}</strong>
                            <p><b>Train Number:</b> {train_num} <b>From:</b> {train_from} <b>To:</b> {train_to}</p>
                            <p><b>Arrival Time:</b> {arriveTime} <b>Departure Time:</b> {departTime}</p>
                            <p><b>Classes: </b> {classes} </p> 
                        </div>
                        <div style = {style.bookmarkBtnPos}>
                            <button  style = {style.bookmarkBtn} onClick={() => this.addToBookmark(this.props.trainDetail)}>Bookmark this Train</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const style = {

    train: {
        margin: '2rem',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },

    trainImg: {
        width: '20rem'
    },

    trainDetails: {
        marginLeft: 20,
        display: 'flex',
        justifyContent: 'space-between',
        width: '50vw',
        flexWrap: 'wrap'
    },

    bookmarkBtnPos: {
        display: 'flex',
        alignSelf: 'flex-end'
    },

    bookmarkBtn: {
        padding: 10,
        cursor: 'pointer',
        backgroundColor: 'lightgreen',
        fontWeight: 'bold'
    }
}

function mapStateToProps(state) {

    return {
        all_trains: state.all_trains,
        bookmarked_trains: [],
        isBookmarkSelected: false
    }
}

const connectedTrainComponent = connect(mapStateToProps)(Train);

export default connectedTrainComponent;