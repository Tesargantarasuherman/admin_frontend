import React, { useContext } from 'react'
import '../Sidebar/Sidebar.css';
import { NavContext } from '../../contexts/NavContext';
function Sidebar() {
  const { isNav, none, visible } = useContext(NavContext)
  const nav = isNav ? visible : none;
  return (
    <div className='body-sidebar' style={{ display: nav.css }}>
      <div>
        <i>
          <ion-icon name="speedometer"></ion-icon>
        </i>
        <p>lorem</p>
      </div>
    </div>
  )
}

export default Sidebar