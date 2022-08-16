import React from 'react'

const Datetime = () => {
    const currDate = new Date().toLocaleDateString();
    const currTime = new Date().toLocaleTimeString();
  return (
    <div>
        Date: {currDate} <br/> Time: {currTime}
    </div>
  )
}

export default Datetime