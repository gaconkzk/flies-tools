// Need export for override global type

interface Window {
  __TAURI__: boolean
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
