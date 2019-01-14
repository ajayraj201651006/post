import React, { Component } from 'react';
import classes from './Blog.css';
import Post from '../../components/Post/Post';

class Blog extends Component {
	render() {
		return(
               <div>
                  <section className={classes.Blog}>
                    <Post />
                    <Post />
                    <Post />
                  </section>
               </div>
			)
	}
}

export default Blog;