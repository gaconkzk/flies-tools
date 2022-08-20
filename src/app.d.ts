/// <reference types="openplayerjs" />

// Need export for override global type
export declare global {
  interface Window {
    __TAURI__: boolean
  }
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
