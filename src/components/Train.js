import React from 'react';

class Train extends React.Component {

    render() {

        const { train_num, name, train_from, train_to } = this.props.trainDetail;
        const { arriveTime, departTime, classes } = this.props.trainDetail.data;

        console.log('props value: ', this.props);
        return (
            <React.Fragment>
                <div style = {style.train}>
                    <div>
                        <img style = {style.trainImg} src = 'railImg.png'/>
                    </div>
                    <div style= {style.trainDetails} >
                        <strong>Train Name: {name}</strong>
                        <p><b>Train Number:</b> {train_num} <b>From:</b> {train_from} <b>To:</b> {train_to}</p>
                        <p><b>Arrival Time:</b> {arriveTime} <b>Departure Time:</b> {departTime}</p>
                        <p><b>Classes: </b> {classes} </p> 
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
        
    },

    trainImg: {
        width: '20rem'
    },

    trainDetails: {
        marginLeft: 20
    }
}

export default Train;