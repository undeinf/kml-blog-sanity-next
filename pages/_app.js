import {library} from '@fortawesome/fontawesome-svg-core';
import {faBorderAll, faList, faSortNumericDown, faSortNumericUp} from '@fortawesome/free-solid-svg-icons'; 

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'styles/globals.css'
import 'highlight.js/styles/darcula.css'
import 'styles/index.scss'


library.add(faList, faBorderAll, faSortNumericUp, faSortNumericDown);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
