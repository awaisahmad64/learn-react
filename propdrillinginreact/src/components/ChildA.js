import React from 'react'
import ChlidB from './ChlidB'

function childA({name}) {
  return (
    <div>
        <ChlidB name={name} />
    </div>
  )
}

export default childA