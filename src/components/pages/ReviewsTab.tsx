import type {ReviewType} from '@/lib/type'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'
import {TableCell, TableRow} from '../ui/table'
import CustomTable from '../organisms/Table'

type ReviewData = {
  reviews: ReviewType[]
}

export default function ReviewsTab() {
  const {loading, data, error} = useQuery<ReviewData>(
    gql`
      query GetReviews {
        reviews {
          id
          game {
            title
          }
          rating
          content
          author {
            name
          }
        }
      }
    `
  )

  const renderData = () => {
    if (data?.reviews.length) {
      return data?.reviews.map((cell) => {
        return (
          <TableRow key={`review-${cell.id}`}>
            <TableCell>{cell.id}</TableCell>
            <TableCell>{cell.game.title}</TableCell>
            <TableCell>{cell.rating}</TableCell>
            <TableCell>{cell.content}</TableCell>
            <TableCell>{cell.author.name}</TableCell>
          </TableRow>
        )
      })
    } else {
      return (
        <TableRow>
          <TableCell className="font-normal text-center text-xl" colSpan={3}>
            No reviews found
          </TableCell>
        </TableRow>
      )
    }
  }

  return (
    <div className="w-full h-full">
      {loading ? (
        <p>Loading...</p>
      ) : data?.reviews && data.reviews.length > 0 ? (
        <CustomTable
          columns={['ID', 'Game', 'Rating', 'Content', 'Author']}
          renderData={renderData}
        />
      ) : (
        error && <p>{error.message}</p>
      )}
    </div>
  )
}
