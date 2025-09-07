import type {GameType} from '@/lib/type'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'
import CustomTable from '../organisms/Table'
import {TableCell, TableRow} from '../ui/table'

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
        }
      }
    `
  )

  const renderData = () => {
    if (data?.games.length) {
      return data?.games.map((cell) => {
        return (
          <TableRow key={`game-${cell.id}`}>
            <TableCell>{cell.id}</TableCell>
            <TableCell>{cell.title}</TableCell>
            <TableCell>{cell.platform.join(', ')}</TableCell>
          </TableRow>
        )
      })
    } else {
      return (
        <TableRow>
          <TableCell className="font-normal text-center text-xl" colSpan={3}>
            No games found
          </TableCell>
        </TableRow>
      )
    }
  }

  return (
    <div className="w-full h-full">
      {loading ? (
        <p>Loading...</p>
      ) : data?.games && data.games.length > 0 ? (
        <CustomTable columns={['ID', 'Title', 'Platform']} renderData={renderData} />
      ) : (
        error && <p>{error.message}</p>
      )}
    </div>
  )
}
