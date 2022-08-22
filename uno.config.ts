// uno.config.js
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import transformerDirective from '@unocss/transformer-directives'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Spectral',
        mono: ['Fira Code', 'Fira Mono:400,700'],
      },
    }),
  ],
  transformers: [transformerDirective()],
  shortcuts: {
    'a-highlight':
      'z1 relative text-light-800 no-underline ' +
      'before:(content-none absolute -z1 top-0 bottom-2px -left-2px -right-2px bg-red-400 origin-bottom-center transform-scale-y-8 transition-all duration-100 ease-in-out) ' +
      'hover:before:(bg-red-400 opacity-75 transform-scale-y-100)',
  },
})

// a {
//   @apply z1 relative text-light-800 no-underline;
// }

// a:before {
//   content: '';
//   @apply absolute -z1 top-0 bottom-0 -left-1 -right-1 bg-green-200;
//   transform-origin: bottom center;
//   transform: scaleY(0.1);
//   transition: all 0.1s ease-in-out;
// }

// a:hover::before {
//   @apply bg-green-200 opacity-75;
//   transform: scaleY(1);
// }
