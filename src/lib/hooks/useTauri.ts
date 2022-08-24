import { writable } from 'svelte/store'

const isTauri = writable(false)
const maximize = writable(false)
const platform = writable('')

export const useTauri = () => {
  return { isTauri, maximize, platform }
}
