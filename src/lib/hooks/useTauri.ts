import { onMount } from 'svelte'
import { writable } from 'svelte/store'

export const isTauri = writable(false)
export const maximize = writable(false)

export const useTauri = () => {
  onMount(() => {
    if (window.__TAURI__) {
      isTauri.update(() => true)
    }
  })
  return { isTauri: { subscribe: isTauri.subscribe }, maximize }
}
