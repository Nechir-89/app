import React from 'react'
import ThemeContext from "../contexts/theme";

class Button extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return (
      <button style={this.context === "dark" ? { color: 'white', background: "black" } : { color: 'black' }}>{this.props.value}</button>
    )
  }
}

export default Button;