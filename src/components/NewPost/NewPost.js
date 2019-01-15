import React, { Component } from 'react';
import classes from './NewPost.css';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Max'
	}
     render() {
     	return(
                <div className={classes.NewPost}>
                    <h1>Add a Post</h1>
                    <label>Title</label>
                    <input />
	                <label>Content</label>
	                <textarea rows="4" />
	                <label>Author</label>
	                <select>
                        <option value="Max">Max</option>
                        <option value="Manu">Manu</option>
                    </select>
                    <button>Add Post</button>
                </div>
     		);
     }
} 
export default NewPost;