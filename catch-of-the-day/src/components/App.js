import React from 'react';
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  constructor(){
    super();

    this.addFish = this.addFish.bind(this);
    // Initialize state
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timestamp = Date.Now();
    fishes[`fish-${timestamp}`] = fish;
    this.setState({fishes});
    // nope. this is less performant.
    // this.state.fishes.fish1 = fish;
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
        </div>
        <Order/>
        <Inventory addFish={this.addFish}/>
      </div>
    )
  }
}


export default App;