import React, { useState } from 'react'

const DemoFunctionComponent = () => {
    const [countValue, setCountValue] = useState(0);

    const incrementFunction = () => {
        setCountValue(countValue + 1)
    }

    const decrementFunction = () => {
        setCountValue(count)
    }
  return (
    <React.Fragment>
        <button onClick={decrementFunction}><strong>-</strong></button>
        <strong>{countValue}</strong>
        <button onClick={incrementFunction}><strong>+</strong></button>
    </React.Fragment>
  )
}

export default DemoFunctionComponent