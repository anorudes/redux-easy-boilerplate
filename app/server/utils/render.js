export default function renderFullPage(html, devPort, domain, initialState = null, head) {
  // Add bundle.css for server side rendering and start:prod
  const bundleCSS = initialState !== null || process.env.NODE_ENV === 'production'
    ? `<link rel="stylesheet" type="text/css" href="http://${domain}:${devPort}/dist/bundle.css"></style>`
    : '';

  return `
    <!doctype html>
    <meta charset="utf-8">
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=1.0, minimum-scale=1.0, maximum-scale=1.0">
        <meta property="og:type" content="website" />
        <meta property="og:url" content=${head || ''} />
        ${head ? head.meta.toString() : ''}
        ${bundleCSS}
        <link rel="shortcut icon" href="/static/images/favicon.png" type="image/x-icon">
        ${head ? head.title.toString() : ''}
      </head>
      <body>
        <div id="root">${html || ''}</div>

        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState || {})};
        </script>

        <script src="http://${domain}:${devPort}/dist/vendor.js"></script>
        <script src="http://${domain}:${devPort}/dist/main.js"></script>
      </body>
    </html>
    `;
}
