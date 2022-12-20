import React from 'react';
import Navbar from './components/Navbar';
import Train from './components/Train';

class App extends React.Component {

  trainDetails = [];

  componentDidMount() {
    const { store } = this.props;

    store.subscribe(() => {
      this.trainDetails = store.getState();
      console.log('traindetail value: ', this.trainDetails);
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
            return <Train trainDetail={trainDetail} key={trainDetail.train_num}/>
          })
        }
        
        
      </React.Fragment>
    );
  }
}

export default App;