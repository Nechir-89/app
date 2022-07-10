import { useEffect } from "react"
import { useState } from "react"
let data = [];

function Filter() {
  const [inValue, setInValue] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(result => data = result)
  }, [])

  return (
    <>
      {<Input inputState={inValue} handlechange={(e) => setInValue(e.target.value)} />}
      {inValue && <Output todos={data} inputValue={inValue} />}
    </>
  )
}

// input
function Input({ inputState, handlechange }) {
  return (
    <>
      <label htmlFor="serachInput">Serach</label>
      <input
        type="text"
        value={inputState}
        onChange={handlechange}
        name="serachInput"
      />
    </>
  )
}

// output
function Output({ todos, inputValue }) {
  return (
    <>
      {
        todos
          .filter(todo => {
            const title = todo.title.toLowerCase();
            return title.startsWith(inputValue.toLowerCase());
          })
          .map(todo =>
            <div key={todo.id}>{todo.title}</div>
          )
      }
    </>
  )
}

export default Filter;
