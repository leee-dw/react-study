import React, { Component } from 'react';
import './CreateForm.sass'

class CreateForm extends Component {
  state = {
    input: ''
  }


  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }


  handleSubmit = e => {
    e.preventDefault()
    this.props.onSubmit(this.state.input)
    this.setState({input: ''})
  }


  render() {
    return (
    <form className="CreateForm" onSubmit={this.handleSubmit}>
      <input placeholder="오늘 뭐하지...?" onChange={this.handleChange} value={this.state.input} />
      <button type="submit">추가</button>
    </form>
    )
  }
}

export default CreateForm;