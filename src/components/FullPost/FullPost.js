import React from 'react';
import classes from './FullPost.css';

const fullpost = (props) => {
	return(
            <div className={classes.FullPost}>
               <h1>Title</h1>
               <p>Content</p>
               <div>
                    <button>Delete</button>
               </div>
            </div>
		);
}

export default fullpost;