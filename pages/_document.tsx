import Document, {
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="spacexproject" content="PWA App" />
          <meta name="apple-mobile-web-app-title" content="PWA App" />
          <meta
            name="description"
            content="app to show details about spacexproject"
          />
          <meta name="mobile-web-app-capable" content="yes" />

          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/icons/icon-512x512.png"
          />

          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/icons/icon-512x512.png"
            color="#5bbad5"
          />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
