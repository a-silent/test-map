import React, { Component } from "react";

import welcome from "../../assets/image/welcome.png";

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
		<img className="welcome__logo" src={welcome} alt="welcome"/>
		<h2 className="welcome__header">Please click "Show menu" =)</h2>
	  </div>
	)
  }
}

export default Welcome;