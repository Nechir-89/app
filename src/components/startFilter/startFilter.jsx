import { useEffect, useState } from "react"
import './style.css'
import Output from "../output";
import Input from "../input";

let data = [];

function Filter() {
  const [inValue, setInValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(result => data = result)
  }, [])

  return (
    <section className="start-filter-wrapper">
      <h1>Start Filter</h1>
      {<Input inputState={inValue} handlechange={(e) => setInValue(e.target.value)} />}
      {inValue && <Output todos={data} inputValue={inValue} />}
    </section>
  )
}

export default Filter;
