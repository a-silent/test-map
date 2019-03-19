import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { MyInput } from "../Field";

class RegForm extends Component {
  render() {
    
    const { handleSubmit } = this.props;
	console.log("this.props: ", this.props)
    
    return(
	  <form className="wrapper-form__form" onSubmit={handleSubmit}>
		<Field
		  name="username"
		  component={MyInput}
		  type="text"
		  placeholder="Name"
		/>
		<Field
		  name="email"
		  component={MyInput}
		  type="email"
		  placeholder="E-mail"
		/>
		<Field
		  name="password"
		  component={MyInput}
		  type="password"
		  placeholder="Password"
		/>
		<Field
		  name="age"
		  component={MyInput}
		  type="number"
		  placeholder="age"
		/>
		<button type="submit">Submit</button>
		<button type="reset">Reset</button>
	  </form>
	)
  }
}

RegForm = reduxForm({
  form: 'register',
})(RegForm);

export default RegForm;