import React from 'react';
import classes from './NewPost.css';

const newPost = (props) => {
	return(
           <div className={classes.NewPost}>
                <h1>Add a Post</h1>
                <div>
                    <h4>Title</h4>
                    <input />
                </div>
                <div>
                    <h4>content</h4>
                    <input />
                </div>
                <div>
                    <h4>Author</h4>
                    <select name="cars">
                        <option value="volvo">Volvo</option>
                    </select>
                    <div>
	                    <button className={classes.Edit}>
	                        Add Post
	                    </button>
                    </div>
                </div>
           </div>
		);
}

export default newPost;