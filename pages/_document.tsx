import Document, {
  DocumentContext,
  DocumentInitialProps,
  Html,
  Main,
  Head,
  NextScript,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initianProps = await Document.getInitialProps(ctx);
    return { ...initianProps };
  }
  render() {
    return (
      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
