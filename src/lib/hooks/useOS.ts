import { os } from '@tauri-apps/api'

export const isMac = async () => (await os.platform()) === 'darwin'

export const isWin = async () => (await os.platform()) === 'win32'
