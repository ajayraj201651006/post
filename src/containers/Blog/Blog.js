import React, { Component } from 'react';
import classes from './Blog.css';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';
// import FullPost from './FullPost/FullPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
     return import('./NewPost/NewPost');
})

class Blog extends Component {
  state = {
    auth: true
  }

	render() {
        return(
               <div className={classes.Blog}> 
                  <header>
                    <nav>
                      <ul>
                        <li><NavLink 
                             to='/posts/'
                             exact
                             activeClassName="my-active"
                             activeStyle={{
                              color: '#fa923f',
                              textDecoration: 'underline'
                             }}>Posts</NavLink></li>
                        <li><NavLink to={{
                          pathname: '/new-post',
                          hash: '#submit',
                          search: '?quick-submit=true'
                        }}
                        activeClassName="my-active-cls"
                        activeStyle={{
                          color: '#fa923f'
                        }}>New Post</NavLink></li>
                      </ul>
                    </nav>
                  </header>
                  <Switch>
                      {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                      <Route path="/posts" component={Posts}/>
                      <Route render={() => <h1>Not Found</h1>} />
                      {/*<Redirect from="/" to="/posts" />*/}
                      {/*<Route path="/posts" component={Posts}/> */}
                  </Switch>
               </div>
			)
	}
}

export default Blog;