import React, { useContext } from "react";
import ThemeContext from "./contexts/theme";
import UserContext from "./contexts/user";

function App() {
  return (
    <ThemeContext.Provider value="light">
      <UserContext.Provider>
        <h1>context</h1>
        <NavBar />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}

function NavBar() {
  return (
    <>
      <Button value="Home" />
      <Button value="About" />
      <Avatar />
    </>
  )
}

class Button extends React.Component {
  static contextType = ThemeContext;
  render() {
    console.log(this.context)
    return (
      <button style={this.context === "dark" ? { color: 'white', background: "black" } : { color: 'black' }}>{this.props.value}</button>
    )
  }
}

function Avatar() {
  const signedInUser = useContext(UserContext);
  return (
    <div>
      <a href="#profile" rel="noopener noreferal">
        <img src={signedInUser.pic} alt="happy user" />
      </a>
    </div>
  )
}


export default App;
