import { MEDIA_TYPE } from '../constant'

export const getMediaType = (file: string): MEDIA_TYPE => {
  const ext = file.substring(file.lastIndexOf('.') + 1)
  return Object.keys(MEDIA_TYPE)
    .filter((e) => e === ext)
    .map((e) => MEDIA_TYPE[e])?.[0]
}
