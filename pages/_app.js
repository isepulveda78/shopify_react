import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-midnight'>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
