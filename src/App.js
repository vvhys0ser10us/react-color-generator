import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [colors, setColors] = useState([])
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()
    try {
      let list = new Values(value).all(10)
      setError(false)
      setColors(list)
    } catch (error) {
      setError(true)
    }
  }

  return (
    <>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={submitHandler}>
          <input
            className={error ? 'error' : null}
            type="text"
            name="color"
            id=""
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {colors.map((item, index) => {
          console.log(item)
          return <SingleColor key={index} {...item} index={index}></SingleColor>
        })}
      </section>
    </>
  )
}

export default App
