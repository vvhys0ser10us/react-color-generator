import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({ rgb, weight, index }) => {
  const bcg = rgb.join(',')
  const [alert, setAlert] = useState(false)
  const hex = rgbToHex(...rgb)
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  )
}

export default SingleColor
