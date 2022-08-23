import { os } from '@tauri-apps/api'

export const isMac = async () => (await os.platform()) === 'darwin'
