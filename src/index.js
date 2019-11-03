import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// With React Router, we no long need a centralized App component anymore
// import App from './components/App';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import PostsNew from './containers/posts_new';
import ReduxPromise from 'redux-promise';
import PostsShow from './containers/posts_show';
import PostsEdit from './containers/posts_edit';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/api/posts/new' component={PostsNew} />
          <Route path='/api/posts/:id/edit' component={PostsEdit} />
          <Route path='/api/posts/:id' component={PostsShow} />
          <Route path='/api/posts' component={PostsIndex} />
          <Route exact path='/' component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
