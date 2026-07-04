import { NavLink } from 'react-router'

import styles from '../../styles/Header.module.css'

function Header() {
  return (
    <div className={styles.site_header}>
      <div className='container'>
        <div>PilledUp</div>
        <div>
          <NavLink to='/'>Dashboard</NavLink>
          <NavLink to='/pills'>Pills</NavLink>
          <NavLink to='/settings'>Settings</NavLink>
        </div>
      </div>
    </div>
  )
}
export default Header
