import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  
  state = {
    visibility: false
  }
  
  handleClickShowMenu = () => this.setState(state => ({
	  visibility: !state.visibility
  }))
  
  render() {
    
    const { visibility } = this.state
    
    return (
	  <header className={visibility ? "header" : "header header-hidden"}>
		<ul className="header__list">
		  <li className="header__list__item">
			<Link
			  className="header__list__item__link"
			  to="/"
			  onClick={this.handleClickShowMenu}
			>
			  Home
			</Link>
		  </li>
		  <li className="header__list__item">
			<Link
			  className="header__list__item__link"
			  to="/map"
			  onClick={this.handleClickShowMenu}
			>
			  Map
			</Link>
		  </li>
		  <li className="header__list__item">
			<Link
			  className="header__list__item__link"
			  to="/form"
			  onClick={this.handleClickShowMenu}
			>
			  Form
			</Link>
		  </li>
		</ul>
		<button
		  className="header__button"
		  type="button"
		  onClick={this.handleClickShowMenu}
		>
		  Show menu
		</button>
	  </header>
	)
  }
}

export default Header;