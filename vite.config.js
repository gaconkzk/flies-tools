import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'

import transformerDirective from '@unocss/transformer-directives'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), unocss()],
}

export default config
