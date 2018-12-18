import React, { Component } from 'react';
import LuggageList from '../../components/LuggageList'

class Luggage extends Component {
  
  state = {
    luggages: [
      {
        id: 0,
        size: 'S size (less or equal to 22 inch)',
        count: 0,
        cost: 400
      },
      {
        id: 1,
        size: 'M size (Over 22 inch)',
        count: 0,
        cost: 550
      },
      {
        id: 2,
        size: 'L size (Golf Bag, Bicycle, TV and etc.)',
        count: 0,
        cost: 700
      },
      {
        id: 3,
        size: 'Shopping Bag (40-60 X 50-60 cm)',
        count: 0,
        cost: 250
      }
    ]
  }


  handleIncrease = (id) => {
    const { luggages } = this.state
    const index = luggages.findIndex(list => list.id === id)
    const selected = luggages[index]
    const clones = [...luggages]
    clones[index].count = ++clones[index].count
    clones[index] = {...selected}
    this.setState({luggages: clones});
  }

  
  handleDecrease = (id) => {
    const { luggages } = this.state
    const index = luggages.findIndex(list => list.id === id)
    const selected = luggages[index]
    const clones = [...luggages]
    if (clones[index].count) clones[index].count = --clones[index].count
    clones[index] = {...selected}
    this.setState({luggages: clones});
  }
  

  render() {
    const { luggages } = this.state
    
    const luggageHtml = luggages.map(luggage => (
      <LuggageList
        id={luggage.id}
        key={luggage.id}
        size={luggage.size}
        count={luggage.count}
        cost={luggage.cost}
        onIncrement={this.handleIncrease}
        onDecrement={this.handleDecrease}
      />
    ))


    return (
      <section className="luggage">
        <h2>Luggage</h2>
        <div>{luggageHtml}</div>
      </section>
    );
  }
}

export default Luggage;