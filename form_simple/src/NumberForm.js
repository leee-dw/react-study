import React, {Component} from 'react'

export default class NumberForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }
  }

  render() {
    const doSubmit = e => this.doSubmit(e)
    const doChange = e => this.doChange(e)
    
    return (
      <form onSubmit={doSubmit}>
        <input type='text' value={this.state.value} onChange={doChange} />
        <input type='submit' value= '전송' />
      </form>
    )
  }

  
  doChange(e) {
    const curValue = e.target.value
    const newValue = curValue.replace(/[^0-9]/g,'')
    this.setState({value: newValue})
  }

  doSubmit(e) {
    window.alert(`전송: ${this.state.value}`)
    e.preventDefault()
  }

}