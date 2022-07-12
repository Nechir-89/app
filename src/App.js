import React from "react";
import ThemeContext from "./contexts/theme";

function App() {
  return (
    <ThemeContext.Provider value="light">
      <h1>context</h1>
      <NavBar />
    </ThemeContext.Provider>
  )
}

function NavBar() {
  return (
    <>
      <Button value="Home" />
      <Button value="About" />
    </>
  )
}

class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return (
      <button style={this.context === "dark" ? { color: 'white', background: "black" } : { color: 'black' }}>{this.props.value}</button>
    )
  }
}


export default App;
