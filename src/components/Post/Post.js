import React from 'react';
import classes from './Post.css';

const post = (props) => {
        return(
               <div className={classes.Post}>
                  <h3>Title</h3>
                  <p>Author</p>
               </div>
        	);
}

export default post;