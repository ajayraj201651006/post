import React, { Component } from 'react';
import classes from './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {
	render() {
		return(
               <div>
                  <Post />
               </div>
			)
	}
}

export default Blog;