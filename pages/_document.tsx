import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <script
          async
          src="https://analytics.umami.is/script.js"
          data-website-id="984d1210-a376-4349-aa2f-83fab030a249"
        >
        </script>
        <meta name="google-site-verification" content="05Va7GfST4wDObPj7FVvSPulwafGcO53jC1f3L-Ixig" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
