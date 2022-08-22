import unocss from 'unocss/vite'
import presetUno from '@unocss/preset-uno'
import presetWebFonts from '@unocss/preset-web-fonts'
import { presetScrollbar } from 'unocss-preset-scrollbar'
import transformerDirective from '@unocss/transformer-directives'

import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

import { resolve } from 'path'

const hexToRGBA = (hex: string, opacity: number): string => {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)

  return `rgba(${r},${g},${b},${opacity})`
}

export default defineConfig({
  plugins: [
    svelte(),
    unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Spectral',
            mono: ['Fira Code', 'Fira Mono:400,700'],
          },
        }),
        presetScrollbar(),
      ],
      transformers: [transformerDirective()],
      rules: [
        [
          /^glm-(\w+-\d+)-(blur-\d+(px)?)-(opacity-\d+)?$/,
          (matcher, { theme }) => {
            const [, coded_color, code_blur, code_blur_px, code_opacity, ..._] = matcher
            // const rcolor = theme.color[color]
            const [tcolor, tweight] = coded_color.split('-')
            const color = theme.colors[tcolor][tweight]
            const [, tblur] = code_blur.split('-')
            const blur = code_blur_px ? tblur : tblur + 'rem'
            const [, topacity] = code_opacity.split('-')
            const opacity = parseInt(topacity) / 100

            const rgbaColor = hexToRGBA(color, opacity)

            return {
              background: rgbaColor,
              'box-shadow': '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
              'backdrop-filter': `blur( ${blur} )`,
            }
          },
        ],
      ],
      shortcuts: {
        'a-highlight':
          'z1 relative text-light-800 no-underline ' +
          'before:(content-none absolute -z1 top-0 bottom-2px -left-2px -right-2px bg-red-400 origin-bottom-center transform-scale-y-8 transition-all duration-100 ease-in-out) ' +
          'hover:before:(bg-red-400 opacity-75 transform-scale-y-100)',
      },
    }),
  ],
  resolve: {
    alias: {
      $lib: resolve(__dirname, 'src/lib'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        // others page
      },
      output: {
        manualChunks: {
          openplayerjs: ['openplayerjs'],
          plyr: ['plyr'],
        },
      },
    },
  },
})
