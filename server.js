import express from 'express';
import React from 'react';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RoutingContext, match } from 'react-router';
import { instantiateStore } from './src/app';
import routes from './src/routes';
import Html from './src/components/Html.jsx';

let app = express();

const { PORT, BACKEND_URI } = process.env;

app.use(express.static('public'));

app.get('*', (req, res) => {
  const store = instantiateStore();

  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.send(500, err.message);
    } else if (redirect) {
      res.redirect(301, redirect.pathname + redirect.search);
    } else if (props) {
      let clientConfig = {};

      console.log('matched routes', props.routes);

      ['BACKEND_URI'].forEach((key) => {
        clientConfig[key] = process.env[key];
      });

      const markup = renderToString(
        <Provider store={store}>
          <RoutingContext {...props} />
        </Provider>
      );

      const html = renderToStaticMarkup(<Html state={JSON.stringify(store.getState())} config={JSON.stringify(clientConfig)} markup={markup} />);

      res.send('<!DOCTYPE html>' + html);
    } else {
      res.send(404, 'Not Found');
    }
  });
});

app.use((err, req, res) => {
  console.error('Error:', err);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
