import { MEDIA_TYPE } from '../constant'

export const extractMediaType = (file: string): MEDIA_TYPE => {
  const ext = file.substring(file.lastIndexOf('.') + 1).toUpperCase() as keyof typeof MEDIA_TYPE
  return MEDIA_TYPE[ext] ?? MEDIA_TYPE.MP4
}
