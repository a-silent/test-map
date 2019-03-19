import React, { Component } from "react";
import RegForm from "../RegForm";


class MyForm extends Component {
  
  submit = values => {
	window.alert (JSON.stringify (values, null, 4));
  }
  
  render() {
    return (
      <div className="wrapper-form">
		<h2 className="wrapper-form__header">Redux-form</h2>
		<RegForm onSubmit={this.submit}/>
	  </div>
	)
  }
}

export default MyForm;