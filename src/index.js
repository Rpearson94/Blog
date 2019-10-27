import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
// With React Router, we no long need a centralized App component anymore
// import App from './components/App';
import rootReducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PostsIndex from './containers/posts_index';
import ReduxPromise from 'redux-promise';

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(ReduxPromise))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path='/api/posts' component={PostsIndex} />
        <Route exact path='/' component={PostsIndex} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
