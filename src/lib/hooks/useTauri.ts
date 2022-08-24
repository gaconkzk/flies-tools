import { writable, get } from 'svelte/store'

const isTauri = writable(false)
const maximize = writable(false)
const platform = writable('')

export const useTauri = () => {
  const isTauriMac = () => get(isTauri) && get(platform) === 'darwin'
  const isTauriNotMac = () => get(isTauri) && get(platform) !== 'darwin'
  return { isTauri, maximize, platform, isTauriMac, isTauriNotMac }
}
