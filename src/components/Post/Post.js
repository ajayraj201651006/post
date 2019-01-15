import React from 'react';
import classes from './Post.css';

const post = (props) => {
        return(
                <article className={classes.Post}>
                  <h3>Title</h3>
                  <div className={classes.Info}>
                    <div className={classes.Author}>Author</div>
                  </div>
                </article>
        	);
}

export default post;