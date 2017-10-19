import React from 'react';
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  constructor() {
    super()

    this.renderInventory = this.renderInventory.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, key) {
    const fish = this.props.fishes[key];
    const updatedFish = {...fish,
      [event.target.name]: event.target.value
    }
    this.props.updatedFish(key, updatedFish);
  }

  renderInventory(key) {
    const fish = this.props.fishes[key];
    return (
      <div className="fish-edit" key={key}>
        <input type="text" onChange={(e) => this.handleChange(e,key)} name="name" placeholder="Fish Name" value={fish.name}/>
        <input type="text" onChange={(e) => this.handleChange(e,key)} name="price" placeholder="Fish Price" value={fish.price}/>
        <select onChange={(e) => this.handleChange(e,key)} value={fish.status}>
          <option value="avaliable">Fresh!</option>
          <option value="unavaliable">Sold Out!</option>
        </select>
        <textarea onChange={(e) => this.handleChange(e,key)} value={fish.desc} type="text" name="desc" placeholder="Fish Description"></textarea>
        <input onChange={(e) => this.handleChange(e,key)} type="text" name="image" placeholder="Fish Image" value={fish.image}/>
        <button onClick={() => this.props.removeFish(key)}>Remove Fish</button>
      </div>
    )


  renderLogin(){
    return (
      <nav className="login">
        <h2>Inventory</h2>
        <p>Sign in to manage your store's inventory.</p>
        <button className="github" onClick={() => this.authenticate('google')}>Log In WIth Google</button>
      </nav>
    )
  }

  render () {
    // Render if user is not logged in
    if (!this.state.uid) {
      return <div>{this.renderLogin}</div>
    }

    return (
      <div>
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(this.renderInventory)}
        <AddFishForm addFish={this.props.addFish}/>
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  updatedFish: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  addFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired
}

export default Inventory;
