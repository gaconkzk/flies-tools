import { onMount } from 'svelte'
import { writable } from 'svelte/store'

export const useTauri = () => {
  const { subscribe, update } = writable(false)

  onMount(() => {
    if (window.__TAURI__) {
      update(() => true)
    }
  })
  return { isTauri: { subscribe } }
}
