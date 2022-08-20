import { sveltekit } from '@sveltejs/kit/vite'
import unocss from 'unocss/vite'
import { isoImport } from 'vite-plugin-iso-import'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [isoImport(), sveltekit(), unocss()],
}

export default config
