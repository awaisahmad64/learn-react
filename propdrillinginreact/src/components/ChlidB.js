import React from 'react'
import ChildC from './ChildC'

function ChlidB({name}) {
  return (
    <div>
        <ChildC name={name} />
    </div>
  )
}

export default ChlidB