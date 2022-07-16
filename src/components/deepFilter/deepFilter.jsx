import React from 'react';
import './style.css'
import Input from '../input';
import Output from '../output';
class DeepFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inValue: "",
      data: []
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(result => this.setState(prevState => ({ ...prevState, data: result })))
  }
  // cury method for handling events
  handleChange() {
    return (event) => this.setState(prevState => {
      return { ...prevState, inValue: event.target.value }
    })
  }
  render() {
    return (
      <section className="deep-filter-wrapper">
        <h1>Deep Filter</h1>
        {<Input inputState={this.state.inValue} handlechange={this.handleChange()} filterType="deepFilter" />}
        {this.state.inValue && <Output todos={this.state.data} inputValue={this.state.inValue} filterType="deep" />}
      </section>
    )
  }
}

export default DeepFilter;
