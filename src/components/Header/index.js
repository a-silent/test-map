import React, { Component } from "react";

class Header extends Component {
  
  state = {
    visibility: false
  }
  
  handleClick = event =>
	this.setState(state => ({
	  visibility: !state.visibility
	}))
  
  render() {
    
    const { visibility } = this.state
    
    return (
	  <header className={visibility ? "header" : "header header-hidden"}>
		<ul className="header__list">
		  <li className="header__list__item">
			<button className="header__list__item__button">test1</button>
		  </li>
		  <li className="header__list__item">
			<button className="header__list__item__button">test2</button>
		  </li>
		  <li className="header__list__item">
			<button className="header__list__item__button">test3</button>
		  </li>
		</ul>
		<button
		  className="header__button"
		  type="button"
		  onClick={this.handleClick}
		>
		  Show menu
		</button>
	  </header>
	)
  }
}

export default Header;