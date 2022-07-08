import { Component } from 'react'

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevCounter => {
      return { counter: prevCounter.counter + 1 }
    });
  }

  handleEvent() {
    alert('this is event handler');
    this.setState(prevCounter => {
      return { counter: prevCounter.counter + 1 }
    })
  }

  render() {
    return (
      <>
        <h1>
          this is class component
        </h1>
        <button onClick={() => this.handleClick()}>click counter</button>
        <button onClick={() => this.handleEvent()}>display dialogbox</button>
        {this.state.counter}
      </>
    )
  }
}

export default Button;
