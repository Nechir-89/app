import { useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import './style.css'

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

// input
function Input({ inputState, handlechange }) {
  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={inputState}
        onChange={handlechange}
        name="serachInput"
      />
      <SearchIcon
        className="search-icon"
        fontSize="large"
      />
    </div>
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
            <div key={todo.id} className="item">{todo.title}</div>
          )
      }
    </>
  )
}

export default Filter;
