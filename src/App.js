// Modules
import { Outlet } from 'react-router-dom';

// Components
import TopNavBar from './components/topNavBar';

function App() {
  return (
    <div style={appStyle}>
      <h1>Bookkeeper</h1>
      <TopNavBar />
      <Outlet />
    </div >
  );
}

const appStyle = {
  margin: '1rem'
}

export default App;
