export enum MEDIA_TYPE {
  MKV = 'video/x-matroska',
  MP4 = 'video/mp4',
  HLS = 'video/hls',
  M3U8 = 'application/x-mpegURL',
}

export const DEFAULT_CONFIG = {
  title: 'BAVI Video Player',
  // Disable
  enabled: true,

  // Logging to console
  debug: false,

  // Auto play (if supported)
  autoplay: false,

  // Only allow one media playing at once (vimeo only)
  autopause: true,

  // Default time to skip when rewind/fast forward
  seekTime: 10,

  // Default volume
  volume: 1,
  muted: false,

  // Pass a custom duration
  duration: undefined,

  // Display the media duration on load in the current time position
  // If you have opted to display both duration and currentTime, this is ignored
  displayDuration: true,

  // Invert the current time to be a countdown
  invertTime: true,

  // Clicking the currentTime inverts it's value to show time left rather than elapsed
  toggleInvert: true,

  // Force an aspect ratio
  // The format must be `'w:h'` (e.g. `'16:9'`)
  ratio: null,

  // Click video container to play/pause
  clickToPlay: true,

  // Auto hide the controls
  hideControls: true,

  // Reset to start when playback ended
  resetOnEnd: false,

  // Disable the standard context menu
  disableContextMenu: true,

  // Sprite (for icons)
  loadSprite: true,
  iconPrefix: 'plyr',
  iconUrl: 'https://cdn.plyr.io/3.7.2/plyr.svg',

  // Blank video (used to prevent errors on source change)
  blankVideo: 'https://cdn.plyr.io/static/blank.mp4',

  // Quality default
  quality: {
    default: 576,
    // The options to display in the UI, if available for the source media
    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
    forced: false,
    onChange: null,
  },

  // Set loops
  loop: {
    active: false,
    // start: null,
    // end: null,
  },

  // Speed default and options to display
  speed: {
    selected: 1,
    // The options to display in the UI, if available for the source media (e.g. Vimeo and YouTube only support 0.5x-4x)
    options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 4],
  },

  // Keyboard shortcut settings
  keyboard: {
    focused: true,
    global: false,
  },

  // Display tooltips
  tooltips: {
    controls: false,
    seek: true,
  },

  // Captions settings
  captions: {
    active: false,
    language: 'auto',
    // Listen to new tracks added after Plyr is initialized.
    // This is needed for streaming captions, but may result in unselectable options
    update: false,
  },

  // Fullscreen settings
  fullscreen: {
    enabled: true, // Allow fullscreen?
    fallback: true, // Fallback using full viewport/window
    iosNative: false, // Use the native fullscreen in iOS (disables custom controls)
    // Selector for the fullscreen container so contextual / non-player content can remain visible in fullscreen mode
    // Non-ancestors of the player element will be ignored
    // container: null, // defaults to the player element
  },

  // Local storage
  storage: {
    enabled: true,
    key: 'plyr',
  },

  // Default controls
  controls: [
    'play-large',
    // 'restart',
    // 'rewind',
    'play',
    // 'fast-forward',
    'progress',
    'current-time',
    // 'duration',
    'mute',
    'volume',
    'captions',
    'settings',
    'pip',
    'airplay',
    // 'download',
    'fullscreen',
  ],
  settings: ['captions', 'quality', 'speed'],

  // Localisation
  i18n: {
    restart: 'Restart',
    rewind: 'Rewind {seektime}s',
    play: 'Play',
    pause: 'Pause',
    fastForward: 'Forward {seektime}s',
    seek: 'Seek',
    seekLabel: '{currentTime} of {duration}',
    played: 'Played',
    buffered: 'Buffered',
    currentTime: 'Current time',
    duration: 'Duration',
    volume: 'Volume',
    mute: 'Mute',
    unmute: 'Unmute',
    enableCaptions: 'Enable captions',
    disableCaptions: 'Disable captions',
    download: 'Download',
    enterFullscreen: 'Enter fullscreen',
    exitFullscreen: 'Exit fullscreen',
    frameTitle: 'Player for {title}',
    captions: 'Captions',
    settings: 'Settings',
    pip: 'PIP',
    menuBack: 'Go back to previous menu',
    speed: 'Speed',
    normal: 'Normal',
    quality: 'Quality',
    loop: 'Loop',
    start: 'Start',
    end: 'End',
    all: 'All',
    reset: 'Reset',
    disabled: 'Disabled',
    enabled: 'Enabled',
    advertisement: 'Ad',
    qualityBadge: {
      2160: '4K',
      1440: 'HD',
      1080: 'HD',
      720: 'HD',
      576: 'SD',
      480: 'SD',
    },
  },

  // Custom control listeners
  listeners: {
    seek: null,
    play: null,
    pause: null,
    restart: null,
    rewind: null,
    fastForward: null,
    mute: null,
    volume: null,
    captions: null,
    download: null,
    fullscreen: null,
    pip: null,
    airplay: null,
    speed: null,
    quality: null,
    loop: null,
    language: null,
  },

  // Advertisements plugin
  // Register for an account here: http://vi.ai/publisher-video-monetization/?aid=plyrio
  ads: {
    enabled: false,
    publisherId: '',
    tagUrl: '',
  },

  // Preview Thumbnails plugin
  previewThumbnails: {
    enabled: false,
    src: '',
  },

  // Vimeo plugin
  vimeo: {
    byline: false,
    portrait: false,
    title: false,
    speed: true,
    transparent: false,
    // Custom settings from Plyr
    customControls: true,
    referrerPolicy: null, // https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy
    // Whether the owner of the video has a Pro or Business account
    // (which allows us to properly hide controls without CSS hacks, etc)
    premium: false,
  },

  // YouTube plugin
  youtube: {
    rel: 0, // No related vids
    showinfo: 0, // Hide info
    iv_load_policy: 3, // Hide annotations
    modestbranding: 1, // Hide logos as much as possible (they still show one in the corner when paused)
    // Custom settings from Plyr
    customControls: true,
    noCookie: false, // Whether to use an alternative version of YouTube without cookies
  },

  // Media Metadata
  mediaMetadata: {
    title: '',
    artist: '',
    album: '',
    artwork: [],
  },

  // Markers
  markers: {
    enabled: false,
    points: [],
  },
}
