import { writable } from 'svelte/store'

export const isTauri = writable(false)
export const maximize = writable(false)

export const useTauri = () => {
  return { isTauri, maximize }
}
