import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Economica:400,700" />
          <link rel="stylesheet" href="./_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body {
            background: url('/static/global/bg1.png') repeat-x center;
          }
        `}
        </style>
      </html>
    )
  }
}
