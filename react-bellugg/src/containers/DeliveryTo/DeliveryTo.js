import React, { Component } from 'react';
import LocaleSelectButton from '../../components/LocaleSelectButton'
import SelectItem from '../../components/SelectItem';
import SelectList from '../../components/SelectList';

class DeliveryTo extends Component {
  location = {
    
    airport: [
      {
        id: 0,
        text: 'Bangkok International Airport (Suvarnabhumi)',
      },
      {
        id: 1,
        text: 'Don Mueang International Airport'
      }
    ],

    hotel: [
      {
        id: 0,
        text: 'Bangkok'
      },
      {
        id: 1,
        text: 'Pattaya'
      },
      {
        id: 2,
        text: 'Phuket'
      }
    ],
    
    shoppingMall: [
      {
        id: 0,
        text: 'Emquartier'
      },
      {
        id: 1,
        text: 'Chatuchak (JJ Market)'
      },
      {
        id: 2,
        text: 'Icon Siam'
      }
    ]
  }

  state = {
    selectBox: false,
  }

  handleToggleSelect = () => {
    this.setState({ selectBox: !this.state.selectBox });
  }


  render() {
    const {selectBox} = this.state
    
    let selectList = Object.keys(this.location).map((list, idx) => (
      <SelectItem
        key={idx}
        className="select-list"
        list={list}
      />
    ))

    return (
      <section
        className="delivery-to"
      >
        <h2>Delivery To</h2>
        <LocaleSelectButton 
          clicked={selectBox}
          onToggle={this.handleToggleSelect}
        />
        {
          selectBox && (
            <SelectList>
              {selectList}
            </SelectList>
          ) 
        }
      </section>
    );
  }
}

export default DeliveryTo;