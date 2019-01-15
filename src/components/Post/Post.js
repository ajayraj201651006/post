import React from 'react';
import classes from './Post.css';

const post = (props) => {
        return(
                <article className={classes.Post} onClick={props.clicked}>
                  <h3>{props.title}</h3>
                  <div className={classes.Info}>
                    <div className={classes.Author}>{props.author}</div>
                  </div>
                </article>
        	);
}

export default post;