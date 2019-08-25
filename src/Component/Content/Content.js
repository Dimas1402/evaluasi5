import React from 'react';
import  './Content.css';


const Content = (props) => {
	return (
		<div className="card">
  			<div className="card-body"> 
   				{props.tulisan}
  			</div>
		</div>
	)
}

export default Content