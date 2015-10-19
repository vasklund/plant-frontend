import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>stuff</title>
          <script dangerouslySetInnerHTML={{ __html: `window.__state__=${this.props.state}` }}></script>
          <script dangerouslySetInnerHTML={{ __html: `window.__config__=${this.props.config}` }}></script>
          <script src="/bundle.js"></script>
        </head>
        <body>
          <div id="app"></div>
        </body>
      </html>
    );
  }
};
