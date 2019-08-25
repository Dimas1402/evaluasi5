import React from 'react';
import './Header.css'



const Header = (props) =>{
 return(
<nav class="navbar navbar-expand-lg navbar-light bg-warning">
  <div class="container">
    <a class="navbar-brand">{props.name} </a>
    <a class="navbar-brand" href="#card">{props.name2}</a>

   
  </div>
</nav>


 )
}

export default Header