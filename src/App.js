import React from 'react';
import Button from './components/button';


// ES5
// var MyComponent = React.createClass({
//   render: function(){
//     <h3>ES5</h3>
//   }
// })


class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
    // this.handlechange = this.handlechange.bind(this);
  }

  handlechange(e) {
    console.log(e.target)
  }

  render() {
    return (
      <>
        <h3>ES6</h3>
        {/* <input onChange={this.handlechange.bind(this)} /> */}
        <input onChange={function(event){this.handlechange(event)}} />
      </>
    )
  }
}

function App() {
  const [user, setUser] = React.useState('Neck');
  // console.log(React.useState('Neck'));
  // console.log(<h1 className='a'>jsx element</h1>)
  return (
    <div style={divStyle}>
      <input type="text" onKeyDown={(e) => console.log(e.target.value)} />
      <input type="text" onKeyUp={(e) => console.log(e.target.value)} />
      <input type="text" onKeyPress={(e) => console.log(e.target.value)} />
      <MyComponent />
      {
        console.log(<Button />)
      }
      <Button />
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
