import React, { Component } from 'react';
import classes from './Blog.css';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import axios from 'axios';

class Blog extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts').then(response=>{
         this.setState({posts: response.data});
      });
  }

	render() {
		return(
               <div>
                  <section className={classes.Blog}>
                    
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