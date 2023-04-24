import '@component/styles/global.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
<> 
  <Head>
    <meta charSet='UTF-8' />
    <meta name="keyword" content='title,weather' />
    <meta name="author" content="Peter Haddad" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href='/icons/logo_32x32.png' sizes="32x32" type="image/png" alt="weather icon" /> 
  </Head>
  <Component {...pageProps} />
  </> 
  )
}



// The _app.js file will let you define global CSS or meta tags