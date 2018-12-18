import React, {Component} from 'react';

class Form extends Component {
  state={
    input: 'hello'
  }


  handleChange = e => {
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log(this.props)
    
    this.props.onSubmit(this.state.input)
    this.setState({input: ''})
  }

  render(){
    return (
      <form
        className="form"
        onSubmit={this.handleSubmit}
      >
        <input 
          placeholder="내용을 입력하세요"
          onChange={this.handleChange}
        />
        <button type="submit">추가</button>
      </form>
    );
  }
};

export default Form;