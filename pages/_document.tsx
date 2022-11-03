import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link rel="stylesheet" href="https://use.typekit.net/txr6nox.css"/>
            <script type="text/javascript" src="/static/menu.js" defer>
            </script>
        </Head>
        <body className="bg-lightBlack">
          <Main />
          <NextScript />
        </body>

      </Html>
    );
  }
}

export default MyDocument;
