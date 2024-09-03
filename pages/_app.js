// pages/_app.js
import '../global.css';

import '../tailwind.config'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
