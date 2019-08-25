import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel'

const Crousel = () =>{
	return(
	
		<Carousel>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://www.archer.ie/wp-content/uploads/2019/07/fb-share-frontend-developer.png"
		      alt="First slide"
		    />
		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/react.png"
		      alt="Third slide"
		    />

		  </Carousel.Item>
		  <Carousel.Item>
		    <img
		      className="d-block w-100"
		      src="https://miro.medium.com/max/3600/1*6ahbWjp_g9hqhaTDSJOL1Q.png"
		      alt="Third slide"
		    />
		  </Carousel.Item>
		</Carousel>
	)
}

export default Crousel