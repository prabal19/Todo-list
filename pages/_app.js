
import Header from './../components/header'
import Footer from './../components/footer';
import './../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
  <Header/>
  <div className="container mx-auto min-h-screen">
  <Component {...pageProps} />
  </div>
  <Footer/>
  </>
  )
}