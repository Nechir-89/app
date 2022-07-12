import ThemeContext from "./contexts/theme";

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <h1>context</h1>
    </ThemeContext.Provider>
  )
}
export default App;
