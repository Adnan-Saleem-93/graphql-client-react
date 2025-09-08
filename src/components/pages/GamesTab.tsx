import type {GameType} from '@/lib/type'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'

type GamesData = {
  games: GameType[]
}

export default function GamesTab() {
  const {loading, data, error} = useQuery<GamesData>(
    gql`
      query GetGames {
        games {
          id
          title
          platform
          cover
        }
      }
    `
  )

  return (
    <div className="w-full h-full">
      {loading ? (
        <p>Loading...</p>
      ) : data?.games && data.games.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {data.games.map((game) => (
            <div
              key={`game-${game.id}`}
              className="flex hover:bg-neutral-100 cursor-pointer flex-col justify-center items-center gap-y-2 ring ring-gray-200 p-4"
            >
              <img
                src={
                  game.cover ||
                  'https://vglist.co/packs/media/images/no-cover-369ad8f0ea82dde5923c942ba1a26482.png'
                }
                alt="game-cover"
                className="object-cover w-full h-full rounded-md"
              />
              <h5 className="text-lg font-medium">{game.title}</h5>
            </div>
          ))}
        </div>
      ) : (
        error && <p>{error.message}</p>
      )}
    </div>
  )
}
