import React from 'react';
import './Footer'

const Footer = ()=>{
return(
	<footer style={{
		color:'white',
		textAlign:'center',


	}} className="page-footer font-small cyan darken-3">

	  
	    <div className="container">
	  
	      <div className="row">
	  
	       
	        <div className="col-md-12 py-5">
	          <div className="mb-5 flex-center">
	  
	          
	            <a href="https://id-id.facebook.com/" className="fb-ic">
	              <i className="fab fa-facebook fa-lg white-text mr-md-5 mr-3 fa-2x" ></i>
	            </a>
	           
	            <a href="https://twitter.com/login?lang=id" className="tw-ic">
	              <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	            </a>
	          
	            <a href="https://www.instagram.com/?hl=id" className="ins-ic">
	              <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
	            </a>
	           
	            <a href="https://github.com/Dimas1402" className="git-ic">
	             <i className="fab fa-github  fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
	             </a>
	          </div>
	        </div>
	        
	  
	      </div>
	     
	  
	    </div>	  
	   
	    <div className="footer-copyright text-center py-3">© 2019 Copyright:
	      <a href="#"> Dimas Anugerah P</a>
	    </div>
	   
	  
	  </footer>
)
}

export default Footer;