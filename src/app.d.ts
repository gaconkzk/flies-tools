// Need export for override global type

interface Window {
  __TAURI__: boolean
}

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface PrivateEnv {}
  // interface PublicEnv {}
}

enum TrackKind {
  CAPTIONS = 'captions',
}

type TrackType = {
  kind: TrackKind
  label?: string
  srclang?: string
  isDefault?: boolean
}

type SourceType = {
  src: string
  type?: string
}

declare module '@tauri-apps/api/window?client' {
  import all from '@tauri-apps/api/window'
  export = all
}

declare module 'openplayerjs?client' {
  import all from 'openplayerjs'
  export = all
}

declare module '@tauri-apps/api/window?client' {
  import all from '@tauri-apps/api/window'
  export = all
}

declare module 'openplayerjs?client' {
  import all from 'openplayerjs'
  export = all
}

// fallback
declare module '*?client'
declare module '*?server'
