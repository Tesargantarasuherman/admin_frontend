import React, { useState } from 'react'
import './index.css'
import Calendar from 'react-calendar';

function Dashboard() {
  const [value, onChange] = useState(new Date());

  return (
    <div className="body-dashboard">
      <div className="left-dashboard">
        <div className="left-dashboard-header">
          <h1>Dashboard</h1>
          <select name="" id="">
            <option value="">This Week</option>
          </select>
        </div>
        <div className="left-dashboard-body">
          
        </div>
      </div>
      <div className='right-dashboard'>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  )
}

export default Dashboard