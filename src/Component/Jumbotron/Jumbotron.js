import React from 'react';
import './Jumbotron.css'


const Jumbotron = (props) =>{
	return(
		<div className="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 className="display-4">{props.me}</h1>
    <img src="http://usability-lapor3.cs.ui.ac.id/assets/img/profile-picture.png" class="img-thumbnail"/>
    <p class="lead">Hello, Welcome to my Profile</p>
  </div>
</div>

	)
}

export default Jumbotron