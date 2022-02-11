import React, { useContext, useState } from 'react'
import '../Sidebar/Sidebar.css';
import { NavContext } from '../../contexts/NavContext';
function Sidebar() {
  const { isNav, none, visible } = useContext(NavContext)
  const nav = isNav ? visible : none;
  const [active, setActive] = useState('')
  const [sidebar, setSidebar] = useState([
    {
      name: 'Dashboard',
      link: '',
      icon: <ion-icon name="speedometer"></ion-icon>
    },
    {
      name: 'Dashboard2',
      link: '',
      icon: <ion-icon name="speedometer"></ion-icon>
    }
  ])
  const actionSetActive = (name) => {
    setActive(name)
  }
  return (
    <div className='body-sidebar' style={{ display: nav.css }}>
      {
        sidebar.map(sidebar => {
          return (
            <div className={`list-sidebar ${active == sidebar.name ? 'active' : ''}`} onClick={() => actionSetActive(sidebar.name)}>
              <i>
                {sidebar.icon}
              </i>
              <p>
                {sidebar.name}
              </p>
            </div>
          )
        })
      }

    </div>
  )
}

export default Sidebar