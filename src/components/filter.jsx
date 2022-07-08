import { useState } from "react"
const data = [
  "apple",
  "bannana",
  "orange",
  "strawbary",
  "watermelon",
  "melon",
  "nuts",
  "cucumber",
  "tomato",
  "potato",
  "onion",
]

function Filter() {
  const [inValue, setInValue] = useState('')
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
          .filter(item => item.startsWith(inValue))
          .map(item =>
            <div key={item}>{item}</div>
          )
      }
    </>
  )
}

export default Filter;
