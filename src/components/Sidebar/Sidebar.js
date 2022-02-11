import React from 'react'
import '../Sidebar/Sidebar.css';
function Sidebar() {
  return (
    <div className='body-sidebar'>
      <div>
        <i>
          <ion-icon name="desktop"></ion-icon>
        </i>
        <p>lorem</p>
      </div>
      <ul>
        <li>
          <i><ion-icon name="desktop"></ion-icon></i>
          Lorem
        </li>
        <li>Lorem</li>
        <li>Lorem</li>
        <li>Lorem</li>
      </ul>
    </div>
  )
}

export default Sidebar