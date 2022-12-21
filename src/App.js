import React from 'react';
import { connect } from 'react-redux';

import Navbar from './components/Navbar';
import Train from './components/Train';

class App extends React.Component {

  trainDetails = [];

  render() {
    
    const { all_trains, bookmarked_trains, isBookmarkSelected } = this.props;
    console.log(this.props);
    if(isBookmarkSelected) {
      this.trainDetails = bookmarked_trains;
    }
    else {
      this.trainDetails = all_trains;
    }

    return (
      <React.Fragment>
        <Navbar />
        {
          this.trainDetails.map((trainDetail) => {
            return <Train trainDetail={trainDetail} key={trainDetail.train_num}/>
          })
        }
        
        
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    all_trains: state.all_trains,
    bookmarked_trains: state.bookmarked_trains,
    isBookmarkSelected: state.isBookmarkSelected
  }
}

const connectedAppComponent = connect(mapStateToProps)(App);

export default connectedAppComponent;