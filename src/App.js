import React from 'react';
import Navbar from './components/Navbar';
import Train from './components/Train';

class App extends React.Component {

  trainDetails = [];

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      
      if(store.getState().isBookmarkSelected) {
        this.trainDetails = store.getState().bookmarked_trains;
      }
      else {
        this.trainDetails = store.getState().all_trains;
      }
      this.forceUpdate();
    })
  }

  render() {
    const { store } = this.props;
    
    return (
      <React.Fragment>
        <Navbar store={store}/>
        {
          this.trainDetails.map((trainDetail) => {
            return <Train store={store} trainDetail={trainDetail} key={trainDetail.train_num}/>
          })
        }
        
        
      </React.Fragment>
    );
  }
}

export default App;