require('babel/polyfill');
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import { Provider } from 'react-redux';
import { Router, match } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory';
import domready from 'domready';
import config from './config';
import { instantiateStore } from './app';
import routes from './routes.jsx';
import { resolveLoadActions } from './util/resolveLoadActions';

const { STATE_WINDOW_PROP, APP_MOUNT_SELECTOR } = config;

const store = instantiateStore(window[STATE_WINDOW_PROP]);

domready(() => {
  const history = createBrowserHistory();
  let initialRender = true;

  const actionFilter = (action) => (initialRender && !action.serverRender) || !initialRender;

  history.listen((location) => {
    match({ routes, location }, (err, redirect, props) => {
      console.log('renderProps', props);

      resolveLoadActions(
        store.dispatch,
        actionFilter,
        props.components, // TODO: make sure works with "components: {{}}" as well
        props.params,
        props.location.search
      );

      if (initialRender) {
        initialRender = false;
        return;
      }

      // dispatch(ROUTE_CHANGE)
    });
  })

  render(
    <div>
      <Provider store={store}>
        <Router history={history}>
          {routes}
        </Router>
      </Provider>
      <DebugPanel>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>,
    document.querySelector(APP_MOUNT_SELECTOR)
  );
});
