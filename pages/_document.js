import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Bigwin Web</title>
          <link
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"></link>
          <link
            rel="stylesheet"
            href="/static/plugins/bootstrap/bootstrap.min.css"
          ></link>
        </Head>
        <body className="sidebar-mini">
          <Main />
          <NextScript />

          <script src="/static/plugins/jquery/jquery.min.js" />
          <script src="/static/plugins/popper/popper.min.js" />
          <script src="/static/plugins/bootstrap/js/bootstrap.min.js" />
        </body>
      </html>
    );
  }
}
