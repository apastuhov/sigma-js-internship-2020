export interface MainInfo {
  firstName: string
  lastName: string
  age: number
  country: string
  speaks: {
    language: string
    level: string
  }[]
  learn: {
    language: string
    level: string
  }[]
  online: boolean
  isFriend: boolean
  photoUrl: string
}