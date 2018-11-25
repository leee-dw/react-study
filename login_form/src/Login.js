import React, { Component } from 'react';
import './App.css';

class Login extends Component {
  constructor(el) {
    super(el)
    this.state = {value: ''}
    this.doChange = this.doChange.bind(this)
  }

  render() {

    return (
      <form className="field">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" onChange={this.doChange} value={this.state.value} placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>
        <div className="field">
          <p className="control has-icons-left">
            <input className="input" type="password" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </p>
        </div>
       <div className="field">
         <p className="control">
           <button className="button is-success" onSubmit={this.doSubmit}>
             Login
           </button>
         </p>
       </div>
     </form>
    );
  }

  doSubmit(e) {
    console.log(e);
  }

  
  doChange(e) {
    const newValue = e.target.value
    this.setState({value: newValue})
  }


  validateMail(mail) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    console.log(re.test(mail));
    return re.test(mail);
  }

}

export default Login;
