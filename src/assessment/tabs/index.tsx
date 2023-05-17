import React, { useState } from 'react'
import "./style.css"

function Tabs() {
    const [activeTab, setActiveTab] = useState(0)
  return (
    <div>
        <div className='tab-container' >
            <div className='tab'></div>
            <div className='tab'></div>
        </div>
    </div>
  )
}

export default Tabs