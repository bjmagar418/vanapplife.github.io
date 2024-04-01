import React from "react";
import { Link,NavLink} from "react-router-dom";
const Header = ()=>{
  return(
    <header>
  <Link to='/' className="homeLogo"
  >#Vanlife
  </Link>
<nav>
<NavLink to='/host'
className={({isActive})=>isActive?"activeNav-link":null}
>Host
</NavLink>
  <NavLink to='/about'
  className={({isActive})=>isActive?'activeNav-link':null}
  >About</NavLink>
  <NavLink to='/vans'
    className={({isActive})=>isActive?'activeNav-link':null}

  >Vans</NavLink>
</nav>
</header>
  )
}
export default Header;