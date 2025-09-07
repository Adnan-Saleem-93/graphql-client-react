import type {AuthorType, ReviewType} from '@/lib/type'
import {gql} from '@apollo/client'
import {useQuery} from '@apollo/client/react'
import {TableCell, TableRow} from '../ui/table'
import CustomTable from '../organisms/Table'
import {Star} from 'lucide-react'
import ControlledAccordion from '../organisms/Accordion'
import {Separator} from '../ui/separator'

type AuthorsData = {
  authors: AuthorType[]
}

export default function AuthorsTab() {
  const {loading, data, error} = useQuery<AuthorsData>(
    gql`
      query GetAuthors {
        authors {
          id
          name
          reviews {
            rating
            content
            game {
              title
            }
          }
        }
      }
    `
  )

  const renderReviews = (reviews: ReviewType[]) => {
    return reviews.map((review, index) => {
      return (
        <>
          <div className="flex items-center gap-x-4">
            <p>#{index + 1}</p>
            <div className="flex flex-col gap-y-1">
              <div key={review.id} className="flex items-center gap-x-2">
                <h6 className="font-medium">{review.game.title}</h6>
                <div className="flex gap-x-0.5 items-center">
                  <Star size={16} fill="yellow" /> {review.rating}
                </div>
              </div>
              <pre>"{review.content}"</pre>
            </div>
          </div>
          {index < reviews.length - 1 && <Separator className="my-1" />}
        </>
      )
    })
  }

  return (
    <div className="w-full h-full">
      {loading ? (
        <p>Loading...</p>
      ) : data?.authors && data.authors.length > 0 ? (
        data.authors.map((author) => {
          return (
            <ControlledAccordion
              key={`author-${author.id}`}
              title={author.name}
              content={renderReviews(author.reviews)}
            />
          )
        })
      ) : (
        error && <p>{error.message}</p>
      )}
    </div>
  )
}
