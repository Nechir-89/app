import React from "react";
import ThemeContext from "./contexts/theme";
import UserContext from "./contexts/user";
import NavBar from "./components/NavBar";



function App() {
  return (
    <ThemeContext.Provider value="light">
      <UserContext.Provider value={{userName:'', pic: '', lang: ''}}>
        <h1>context</h1>
        <NavBar />
      </UserContext.Provider>
    </ThemeContext.Provider>
  )
}


export default App;
