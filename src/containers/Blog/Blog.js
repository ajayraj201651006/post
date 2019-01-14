import React, { Component } from 'react';
import classes from './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

class Blog extends Component {
	render() {
		return(
               <div>
                  <section className={classes.Blog}>
                    <Post />
                    <Post />
                    <Post />
                  </section>
                  <section>
                    <FullPost />
                  </section>
                  <section>
                    <NewPost />
                  </section>
               </div>
			)
	}
}

export default Blog;