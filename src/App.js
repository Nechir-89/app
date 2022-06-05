import './App.css';
import {
  // BrowserRouter,
  // Routes,
  // Route,
  NavLink, Outlet
} from 'react-router-dom';
// import Home from './pages/Home';
// import MyApp from './pages/MyApp';
// import Teams from './pages/Teams';
// import Team from './pages/Team';
// import NewTeamForm from './pages/NewTeamForm';
// import LeagueStandings from './pages/LeagueStandings';


function App() {
  return (
    <div style={appStyle}>
      <h1>Bookkeeper</h1>
      <nav>
        <NavLink to='invoices'
        style={({isActive})=>({
          "fontWeight": isActive ? "800": "500"
        })}
        >Invoices</NavLink> | {" "}
        <NavLink to='expenses'
        style={({isActive})=>({
          "fontWeight": isActive ? "800": "500"
        })}
        >Expenses</NavLink>
      </nav>
      <Outlet />
    </div >
  );
}

const appStyle = {
  margin: '1rem'
}
export default App;
