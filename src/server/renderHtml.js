export default function renderHtml(html) {
    return `<!doctype html>
  <head>
  <link rel="stylesheet" type="text/css" href="main.css">
  </head>
  <title></title>
    <body>
      <div id="root">${html}</div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`;
}
