import { Link, useLocation } from 'react-router'

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '../ui/navigation-menu'

import styles from '../../styles/Header.module.css'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/pills', label: 'Pills' },
  { to: '/settings', label: 'Settings' },
]

function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.site_header}>
      <div className={styles.inner}>
        <Link to='/' className={styles.logo}>
          PilledUp
        </Link>
        <NavigationMenu className='w-auto max-w-none flex-none justify-end'>
          <NavigationMenuList className='gap-1'>
            {navItems.map((item) => {
              const isActive =
                item.to === '/'
                  ? pathname === item.to
                  : pathname.startsWith(item.to)

              return (
                <NavigationMenuItem key={item.to}>
                  <NavigationMenuLink
                    render={<Link to={item.to} />}
                    active={isActive}
                    className='rounded-md px-4 py-2 text-white no-underline hover:bg-white/12 hover:text-white focus:bg-white/12 focus:text-white data-[active=true]:bg-white data-[active=true]:text-[#0052cc] data-[active=true]:hover:bg-white data-[active=true]:focus:bg-white'
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}

export default Header
