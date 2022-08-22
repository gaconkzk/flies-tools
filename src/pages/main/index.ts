import 'uno.css'
import '@unocss/reset/eric-meyer.css'
import './app.css'

import Layout from './Layout.svelte'

const app = new Layout({
  target: document.getElementById('app'),
})

export default app
