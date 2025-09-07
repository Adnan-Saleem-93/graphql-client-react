export type GameType = {
  id: string
  title: string
  platform: string[]
  reviews: ReviewType[]
}
export type ReviewType = {
  id: string
  rating: number
  content: string
  game: GameType
  author: AuthorType
}
export type AuthorType = {
  id: string
  name: string
  verified: boolean
  reviews: ReviewType[]
}
