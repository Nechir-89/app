import React from 'react';

function App() {
  const [user, setUser] = React.useState('Neck');
  console.log(<h1 className='a'>jsx element</h1>)
  return (
    <div style={divStyle}>
      You are in
      <strong>Main branch</strong>
      {user}, please create new branch before starting off working or practicing
    </div>
  );
}

const divStyle = {
  color: "yellow",
  backgroundColor: "black",
  height: "92vh",
  margin: 0,
  padding: "1rem"
}

export default App;
