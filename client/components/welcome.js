import React from 'react';
import { Link } from 'react-router';

export default () => {

 return(
   <div>
    <div id="banner">
     <div className="banner_content">
       <h1>PinWall</h1>
       <p>Your personal or professional online <strong>Pinboard</strong>. Never forget an idea again.</p>
       <button className="button">
          <Link to="/signup">  Sign Up </Link>
       </button>
     </div>
   </div>
   <div id="testimonial">
     <div className="welcome-wrapper">
       <p className="quote">"The greatest notebook application. Ever."</p>
       <p className="name"> - Jon Smith</p>
     </div>
   </div>
   <div id="callouts">
     <div className="callout_inner">
       <div className="welcome-wrapper">
         <div className="callout">
           <i className="fa fa-pencil"></i>
           <h2>Notes</h2>
           <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
         </div>
         <div className="callout">
           <i className="fa fa-rocket"></i>
           <h2>Rocket</h2>
           <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
         </div>
         <div className="callout">
           <i className="fa fa-bolt"></i>
           <h2>Lightning</h2>
           <p>Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget.</p>
         </div>
       </div>
     </div>
   </div>
   <div id="bottom_cta">
     <div className="welcome-wrapper">
       <h2>You have to try it</h2>
       <p>Sign up you won't regrete </p>
       <button className="button">
       <Link to="/signup">  Sign Up </Link>

       </button>
     </div>
   </div>
  <footer>
	  <p>
		&copy; Marco Berardini
    </p>
    </footer>

   </div>

 )

}
