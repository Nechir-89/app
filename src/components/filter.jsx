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
      {/* input */}
      <label htmlFor="serachInput">Serach</label>
      <input
        type="text"
        value={inValue}
        onChange={(e) => setInValue(e.target.value)}
        name="serachInput"
      />

      {/* Output */}
      {
        inValue && data
          .filter(todo => {
            const title = todo.title.toLowerCase();
            return title.startsWith(inValue.toLowerCase());
          })
          .map(todo =>
            <div key={todo.id}>{todo.title}</div>
          )
      }
    </>
  )
}

export default Filter;
