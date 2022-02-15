import React, { useContext, useState } from 'react'
import '../Sidebar/Sidebar.css';
import { NavContext } from '../../contexts/NavContext';
import data_sidebar from '../../localdata/sidebar';
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const { isNav, none, visible } = useContext(NavContext)
  const nav = isNav ? visible : none;
  const [active, setActive] = useState('')
  const [sidebar, setSidebar] = useState(data_sidebar)
  const actionSetActive = (params) => {
    setActive(params.name)
    navigate(`/${params.link}`);
  }
  return (
    <div className='body-sidebar' style={{ display: nav.css,transition:'850ms' }}>
      {
        sidebar.map(sidebar => {
          return (
            <div className={`list-sidebar ${active == sidebar.name ? 'active' : ''}`} onClick={() => actionSetActive(sidebar)}>
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